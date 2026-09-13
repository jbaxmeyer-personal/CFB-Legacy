/* ==========================================================================
   CFB Legacy — game engine (pure state machine, no DOM access here)
   ========================================================================== */

const STORAGE_KEY = "cfbLegacySave";
const STARTING_YEAR = 2026;
const GAMES_PER_SEASON = 12;
const CONFERENCE_GAMES_TARGET = 9;
// Six regular-season decisions total: four in-game tactical moments (the
// majority, calculated live off a real rating gap) and two off-field
// dilemmas. Postseason games each get their own decision on top of this.
const MOMENTS_PER_SEASON = 4;
const DILEMMAS_PER_SEASON = 2;

const STAT_KEYS = ["offenseIQ", "defenseIQ", "recruiting", "development", "culture", "mediaSavvy"];

// Position coaches and coordinators only call the side of the ball they
// actually coach; a Head Coach oversees both. "special"/"poise" moments
// (special teams, game management, composure) aren't tied to either side,
// so everyone sees those regardless of archetype.
function eligibleMoments(state) {
  if (state.stage === "headcoach") return GAME_MOMENTS;
  const opposite = state.archetype === "offense" ? "defense" : "offense";
  return GAME_MOMENTS.filter((m) => m.side !== opposite);
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randRange(min, max) {
  return Math.random() * (max - min) + min;
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
}

const CONFERENCE_WEIGHT = {
  SEC: 30, "Big Ten": 30, ACC: 28, "Big 12": 28,
  AAC: 15, "Mountain West": 14, "Pac-12": 16,
  MAC: 5, "Sun Belt": 6, CUSA: 5,
  Independent: 18,
};

function conferenceWeight(conference) {
  return CONFERENCE_WEIGHT[conference] ?? 10;
}

function philosophyVariance(philosophy) {
  if (philosophy === "conservative") return 9;
  if (philosophy === "aggressive") return 17;
  return 13;
}

/* ==========================================================================
   Career creation
   ========================================================================== */

function pickSchoolByPrestigeRange(minP, maxP, excludeNames, biasHigh) {
  const exclude = excludeNames || [];
  let pool = SCHOOLS.filter((s) => s.startingPrestige >= minP && s.startingPrestige <= maxP && !exclude.includes(s.name));
  if (pool.length === 0) pool = SCHOOLS.filter((s) => !exclude.includes(s.name));
  if (pool.length === 0) pool = SCHOOLS;
  if (biasHigh) {
    const a = pick(pool);
    const b = pick(pool);
    return a.startingPrestige >= b.startingPrestige ? a : b;
  }
  return pick(pool);
}

function newCareer(coachName, archetype) {
  const startSchool = pickSchoolByPrestigeRange(0, 1.5, []);
  const relevantKey = archetype === "offense" ? "offenseIQ" : "defenseIQ";
  const otherKey = archetype === "offense" ? "defenseIQ" : "offenseIQ";

  const stats = {
    offenseIQ: 30,
    defenseIQ: 30,
    recruiting: 30,
    development: 32,
    culture: 35,
    mediaSavvy: 28,
  };
  stats[relevantKey] = clamp(45 + randInt(-5, 5), 0, 100);
  stats[otherKey] = clamp(25 + randInt(-5, 5), 0, 100);
  STAT_KEYS.forEach((k) => {
    if (k !== relevantKey && k !== otherKey) stats[k] = clamp(stats[k] + randInt(-4, 4), 0, 100);
  });

  const state = {
    version: 2,
    coachName,
    archetype,
    age: 25,
    year: STARTING_YEAR,
    stage: "position",
    title: pick(POSITION_TITLES[archetype]),
    school: startSchool.name,
    stats,
    reputation: 10,
    jobSecurity: 60,
    seasonsAtSchool: 0,
    seasonsTotal: 0,
    philosophy: "balanced",
    trainingFocusId: null,
    recruitingFocusId: null,
    offenseScheme: startSchool.offenseScheme,
    defenseScheme: startSchool.defenseScheme,
    schemeTenure: 0,
    schemeInstallPenaltyThisSeason: false,
    teamTalent: {},
    history: [],
    achievements: [],
    achievementsSnapshot: [],
    weekPlan: [],
    weekResults: [],
    currentWeek: 0,
    dilemmaLog: [],
    momentLog: [],
    regularSeasonComplete: false,
    phase: "preseason",
    lastSeasonResult: null,
    lastOffers: null,
    wasFired: false,
    retired: false,
    gameOver: false,
  };

  initTalent(state, state.school);
  grantAchievement(state, "first_job");
  save(state);
  return state;
}

function initTalent(state, schoolName) {
  if (state.teamTalent[schoolName] !== undefined) return state.teamTalent[schoolName];
  const school = getSchool(schoolName);
  const base = (school ? school.startingPrestige : 1) * 16 + randRange(-4, 4);
  const val = clamp(base, 5, 96);
  state.teamTalent[schoolName] = val;
  return val;
}

function talentOf(state, schoolName) {
  return initTalent(state, schoolName);
}

// A program's real standing evolves with what you've built there (talent
// grown through recruiting/development/wins), not just where it started —
// so "team status" is read off the current, drifting talent number rather
// than the school's frozen startingPrestige. talentOf's scale roughly
// mirrors startingPrestige*16, so this just inverts that.
function currentPrestige(state, schoolName) {
  return clamp(talentOf(state, schoolName) / 16, 0, 5);
}

// How good a team at this prestige level "should" be — used to judge a
// season by whether it beat or missed expectations, not by a flat
// win-percentage bucket that treats a 10-3 year the same at a blue blood
// and at a bottom feeder.
function expectedWinPct(prestige) {
  return clamp(0.32 + prestige * 0.086, 0.25, 0.78);
}

function grantAchievement(state, id) {
  if (!state.achievements.includes(id)) state.achievements.push(id);
}

/* ==========================================================================
   Preseason: training, recruiting, philosophy, schemes
   ========================================================================== */

function isRecruitingStage(stage) {
  return stage === "coordinator" || stage === "headcoach";
}

function applySchemeChoice(state, offenseSchemeId, defenseSchemeId) {
  state.schemeInstallPenaltyThisSeason = false;
  if (!isRecruitingStage(state.stage)) return;

  const canPickOffense = state.stage === "headcoach" || state.archetype === "offense";
  const canPickDefense = state.stage === "headcoach" || state.archetype === "defense";

  if (canPickOffense && offenseSchemeId && offenseSchemeId !== state.offenseScheme) {
    state.offenseScheme = offenseSchemeId;
    state.schemeInstallPenaltyThisSeason = true;
    state.schemeTenure = 0;
  }
  if (canPickDefense && defenseSchemeId && defenseSchemeId !== state.defenseScheme) {
    state.defenseScheme = defenseSchemeId;
    state.schemeInstallPenaltyThisSeason = true;
    state.schemeTenure = 0;
  }
}

function generateWeekPlan(state) {
  const mySchool = getSchool(state.school);
  const myConf = mySchool ? mySchool.conference : null;
  const fullPool = SCHOOLS.filter((s) => s.name !== state.school);
  const confPool = fullPool.filter((s) => s.conference === myConf);
  const nonConfPool = fullPool.filter((s) => s.conference !== myConf);

  // Realistic conference scheduling: 9 conference games (or as many as a
  // small conference actually has other members for) plus non-conference
  // games filling the rest of the 12-game slate.
  const confGameCount = myConf ? Math.min(CONFERENCE_GAMES_TARGET, confPool.length) : 0;
  const shuffledConf = [...confPool].sort(() => Math.random() - 0.5).slice(0, confGameCount);
  const nonConfGameCount = GAMES_PER_SEASON - shuffledConf.length;
  const shuffledNonConf = [...nonConfPool].sort(() => Math.random() - 0.5).slice(0, nonConfGameCount);

  const schedule = [...shuffledConf.map((s) => ({ name: s.name, conference: true })), ...shuffledNonConf.map((s) => ({ name: s.name, conference: false }))]
    .sort(() => Math.random() - 0.5);

  const eligibleEvents = DILEMMA_EVENTS.filter((e) => e.stages.includes(state.stage));
  const shuffledEvents = [...eligibleEvents].sort(() => Math.random() - 0.5).slice(0, DILEMMAS_PER_SEASON);
  const weekIndices = Array.from({ length: GAMES_PER_SEASON }, (_, i) => i);
  const dilemmaWeeks = [...weekIndices].sort(() => Math.random() - 0.5).slice(0, shuffledEvents.length).sort((a, b) => a - b);

  const plan = schedule.map((opp, i) => ({ week: i + 1, opponent: opp.name, conference: opp.conference, dilemmaId: null, momentId: null, momentCtx: null }));
  dilemmaWeeks.forEach((wIdx, i) => {
    plan[wIdx].dilemmaId = shuffledEvents[i].id;
  });

  // In-game tactical moments (3rd-and-long, blitz calls, trick plays) are
  // the majority decision type at every coaching stage, not just once
  // you're calling plays as a coordinator or head coach.
  const remaining = weekIndices.filter((i) => !dilemmaWeeks.includes(i));
  const momentPool = eligibleMoments(state);
  const momentCount = Math.min(MOMENTS_PER_SEASON, remaining.length);
  const momentWeeks = [...remaining].sort(() => Math.random() - 0.5).slice(0, momentCount);
  const shuffledMoments = [...momentPool].sort(() => Math.random() - 0.5).slice(0, momentWeeks.length);
  momentWeeks.forEach((wIdx, i) => {
    const moment = shuffledMoments[i];
    plan[wIdx].momentId = moment.id;
    plan[wIdx].momentCtx = {
      distance: randInt(2, 12),
      score: scoreText(randInt(-17, 17)),
      quarter: quarterText(randInt(1, 4)),
      opponent: plan[wIdx].opponent,
    };
  });

  return plan;
}

function applyTrainingFocusGains(state, trainingFocusId) {
  const focus = TRAINING_FOCUS_OPTIONS.find((f) => f.id === trainingFocusId);
  if (!focus) return;
  const eff = focus.effects;
  if (eff.development) state.stats.development = clamp(state.stats.development + eff.development, 0, 100);
  if (eff.culture) state.stats.culture = clamp(state.stats.culture + eff.culture, 0, 100);
  if (eff.offenseIQGain) state.stats.offenseIQ = clamp(state.stats.offenseIQ + eff.offenseIQGain, 0, 100);
  if (eff.defenseIQGain) state.stats.defenseIQ = clamp(state.stats.defenseIQ + eff.defenseIQGain, 0, 100);
}

function setPreseasonChoices(state, { trainingFocusId, philosophy, recruitingFocusId, offenseSchemeId, defenseSchemeId }) {
  state.trainingFocusId = trainingFocusId;
  if (philosophy) state.philosophy = philosophy;
  if (isRecruitingStage(state.stage)) state.recruitingFocusId = recruitingFocusId;
  applySchemeChoice(state, offenseSchemeId, defenseSchemeId);
  applyTrainingFocusGains(state, trainingFocusId);

  state.weekPlan = generateWeekPlan(state);
  state.weekResults = [];
  state.currentWeek = 0;
  state.dilemmaLog = [];
  state.momentLog = [];
  state.regularSeasonComplete = false;
  state.achievementsSnapshot = [...state.achievements];
  state.phase = "inseason";
  advanceWeeks(state);
  // Only reachable if the whole season somehow had zero decisions — there's
  // no outcome screen to show first in that case, so it's safe to jump
  // straight into the postseason.
  if (state.regularSeasonComplete) beginPostseason(state);
  save(state);
}

/* ==========================================================================
   In-season: week-by-week games, dilemmas tied to specific games
   ========================================================================== */

function currentDilemma(state) {
  const plan = state.weekPlan && state.weekPlan[state.currentWeek];
  if (!plan || !plan.dilemmaId) return null;
  return DILEMMA_EVENTS.find((e) => e.id === plan.dilemmaId) || null;
}

function dilemmaContext(state) {
  return { pronoun: "he", possessive: "his" };
}

function currentMoment(state) {
  const plan = state.weekPlan && state.weekPlan[state.currentWeek];
  if (!plan || !plan.momentId) return null;
  return GAME_MOMENTS.find((m) => m.id === plan.momentId) || null;
}

function momentTitle(id) {
  return id.split("_").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

/* Real college football scores are sums of scoring plays (TD+XP=7, FG=3,
   TD+2pt=8, TD no XP=6, safety=2) — never a plain random integer, which
   can land on totals no real game ever produces. Build each team's score
   out of a realistic number of scoring drives (driven by the power gap)
   made of those actual play values. */
const SCORING_PLAY_WEIGHTS = [
  { points: 7, weight: 60 },
  { points: 3, weight: 24 },
  { points: 8, weight: 5 },
  { points: 6, weight: 4 },
  { points: 2, weight: 2 },
];
const SCORING_PLAY_TOTAL_WEIGHT = SCORING_PLAY_WEIGHTS.reduce((s, p) => s + p.weight, 0);

function randomScoringPlay() {
  let r = Math.random() * SCORING_PLAY_TOTAL_WEIGHT;
  for (const p of SCORING_PLAY_WEIGHTS) {
    if (r < p.weight) return p.points;
    r -= p.weight;
  }
  return 7;
}

function buildTeamScore(expectedDrives) {
  const drives = Math.max(1, Math.round(expectedDrives + randRange(-1.2, 1.2)));
  let total = 0;
  for (let i = 0; i < drives; i++) total += randomScoringPlay();
  return total;
}

function generateScore(power, oppPower, won) {
  const baseDrives = 4.3;
  const gapDrives = (power - oppPower) / 15;
  const myDrives = clamp(baseDrives + gapDrives, 1.5, 7);
  const oppDrives = clamp(baseDrives - gapDrives, 1.5, 7);

  let us = buildTeamScore(myDrives);
  let them = buildTeamScore(oppDrives);

  if (won && us <= them) us = them + randomScoringPlay();
  if (!won && them <= us) them = us + randomScoringPlay();

  return { us, them };
}

function simulateWeek(state, weekIndex, extraPower, forcedWin) {
  const plan = state.weekPlan[weekIndex];
  const variance = philosophyVariance(state.philosophy);
  const power = teamPower(state) + (extraPower || 0);
  const oppPower = talentOf(state, plan.opponent) + randRange(-6, 6);
  const won = forcedWin === undefined ? simulateGame(power, oppPower, variance) : forcedWin;
  const score = generateScore(power, oppPower, won);
  const result = { week: plan.week, opponent: plan.opponent, us: score.us, them: score.them, win: won };
  state.weekResults.push(result);
  state.currentWeek = weekIndex + 1;
  return result;
}

// Does NOT start the postseason itself, even once every regular-season
// week is simulated — if the just-resolved decision was the season's
// last one, the player still needs to see that decision's outcome screen
// first. Setting regularSeasonComplete instead lets the UI layer start
// the postseason only once the player clicks past that outcome (see
// main.js's "dilemma-continue" handler), the same deferred pattern the
// postseason-to-postseason transition already uses.
function advanceWeeks(state) {
  while (state.currentWeek < state.weekPlan.length) {
    const plan = state.weekPlan[state.currentWeek];
    if (plan.dilemmaId || plan.momentId) return;
    simulateWeek(state, state.currentWeek, 0);
  }
  state.regularSeasonComplete = true;
}

function resolveDilemma(state, choiceIndex) {
  const weekIdx = state.currentWeek;
  const plan = state.weekPlan[weekIdx];
  if (!plan) return;
  const event = DILEMMA_EVENTS.find((e) => e.id === plan.dilemmaId);
  if (!event) return;
  const choice = event.choices[choiceIndex];
  if (!choice) return;

  applyEffects(state, choice.effects || {});
  const weekPowerDelta = (choice.effects && choice.effects.weekPowerDelta) || 0;
  const gameResult = simulateWeek(state, weekIdx, weekPowerDelta);

  state.dilemmaLog.push({
    week: plan.week,
    title: event.title,
    choiceLabel: choice.label,
    outcome: choice.outcome,
    opponent: gameResult.opponent,
    us: gameResult.us,
    them: gameResult.them,
    win: gameResult.win,
  });
  save(state);
  advanceWeeks(state);
}

/* ==========================================================================
   In-game moments: pass/run/special/poise ratings, computed fresh each time
   from current talent + coach stats + scheme identity — never fixed, so the
   same choice can succeed one game and fail the next.
   ========================================================================== */

function selfPassOffense(state) {
  const boost = schemeTendency("offense", state.offenseScheme);
  return talentOf(state, state.school) * 0.5 + state.stats.offenseIQ * 0.4 + boost.passBoost * 3;
}
function selfRunOffense(state) {
  const boost = schemeTendency("offense", state.offenseScheme);
  return talentOf(state, state.school) * 0.5 + state.stats.offenseIQ * 0.2 + state.stats.development * 0.2 + boost.runBoost * 3;
}
function selfPassDefense(state) {
  const boost = schemeTendency("defense", state.defenseScheme);
  return talentOf(state, state.school) * 0.5 + state.stats.defenseIQ * 0.4 + boost.passBoost * 3;
}
function selfRunDefense(state) {
  const boost = schemeTendency("defense", state.defenseScheme);
  return talentOf(state, state.school) * 0.5 + state.stats.defenseIQ * 0.2 + state.stats.development * 0.2 + boost.runBoost * 3;
}
function selfSpecialTeams(state) {
  return talentOf(state, state.school) * 0.4 + state.stats.development * 0.3 + state.stats.recruiting * 0.3;
}
function selfPoise(state) {
  return state.stats.culture * 0.5 + state.reputation * 0.3 + state.stats.development * 0.2;
}

function oppScheme(side, opponentName) {
  const school = getSchool(opponentName);
  const id = school ? (side === "offense" ? school.offenseScheme : school.defenseScheme) : null;
  return schemeTendency(side, id);
}
function oppPassOffense(state, name) {
  return talentOf(state, name) * 0.7 + oppScheme("offense", name).passBoost * 3;
}
function oppRunOffense(state, name) {
  return talentOf(state, name) * 0.7 + oppScheme("offense", name).runBoost * 3;
}
function oppPassDefense(state, name) {
  return talentOf(state, name) * 0.7 + oppScheme("defense", name).passBoost * 3;
}
function oppRunDefense(state, name) {
  return talentOf(state, name) * 0.7 + oppScheme("defense", name).runBoost * 3;
}
function oppSpecialTeams(state, name) {
  return talentOf(state, name) * 0.7;
}
function oppPoise(state, name) {
  return talentOf(state, name) * 0.6 + 10;
}

function selfMomentRating(state, side, axis) {
  if (side === "offense") return axis === "run" ? selfRunOffense(state) : selfPassOffense(state);
  if (side === "defense") return axis === "run" ? selfRunDefense(state) : selfPassDefense(state);
  if (side === "special") return selfSpecialTeams(state);
  return selfPoise(state);
}

function momentRatings(state, side, axis, opponentName) {
  const my = selfMomentRating(state, side, axis);
  let opp;
  if (side === "offense") opp = axis === "run" ? oppRunDefense(state, opponentName) : oppPassDefense(state, opponentName);
  else if (side === "defense") opp = axis === "run" ? oppRunOffense(state, opponentName) : oppPassOffense(state, opponentName);
  else if (side === "special") opp = oppSpecialTeams(state, opponentName);
  else opp = oppPoise(state, opponentName);
  return { my, opp };
}

/* A live in-game call directly decides that game's outcome: pull off the
   read (pass vs. blitz, a trick play, going for it) and you win it; get it
   wrong and you lose it. The rating gap only shapes how likely the call is
   to work, not whether working translates into a win — that link is
   direct, the way a coach actually feels it from the sideline. Off-field
   dilemmas stay probabilistic since they aren't a live football decision. */
function resolveGameMoment(state, choiceIndex) {
  const weekIdx = state.currentWeek;
  const plan = state.weekPlan[weekIdx];
  if (!plan) return;
  const moment = GAME_MOMENTS.find((m) => m.id === plan.momentId);
  if (!moment) return;
  const choice = moment.choices[choiceIndex];
  if (!choice) return;

  const ratings = momentRatings(state, moment.side, choice.axis, plan.opponent);
  const profile = RISK_PROFILES[choice.risk];
  const gap = ratings.my - ratings.opp;
  const successProb = clamp(profile.successBase + gap / 150, 0.08, 0.92);
  const success = Math.random() < successProb;
  const weekPowerDelta = success ? profile.successReward : profile.failCost;

  const gameResult = simulateWeek(state, weekIdx, weekPowerDelta, success);

  state.momentLog.push({
    week: plan.week,
    title: momentTitle(moment.id),
    choiceLabel: choice.label,
    success,
    resultText: success ? choice.success(plan.momentCtx) : choice.fail(plan.momentCtx),
    opponent: gameResult.opponent,
    us: gameResult.us,
    them: gameResult.them,
    win: gameResult.win,
  });
  save(state);
  advanceWeeks(state);
}

function applyEffects(state, effects) {
  const talentDelta = effects.teamTalentDelta || 0;
  if (talentDelta) {
    const cur = talentOf(state, state.school);
    state.teamTalent[state.school] = clamp(cur + talentDelta, 5, 99);
  }
  STAT_KEYS.forEach((k) => {
    if (effects[k]) state.stats[k] = clamp(state.stats[k] + effects[k], 0, 100);
  });
  if (effects.reputation) state.reputation = clamp(state.reputation + effects.reputation, 0, 100);
  if (effects.jobSecurity) state.jobSecurity = clamp(state.jobSecurity + effects.jobSecurity, 0, 100);
}

/* ==========================================================================
   Coach contribution, schemes, team power
   ========================================================================== */

function avgStats(state, keys) {
  return keys.reduce((sum, k) => sum + state.stats[k], 0) / keys.length;
}

function schemeMasteryBonus(state) {
  if (state.schemeTenure < 2) return 0;
  let bonus = 0;
  const off = findScheme("offense", state.offenseScheme);
  const def = findScheme("defense", state.defenseScheme);
  if (off) bonus += (avgStats(state, off.fitStats) / 100) * 3;
  if (def) bonus += (avgStats(state, def.fitStats) / 100) * 3;
  return bonus;
}

function computeCoachContribution(state) {
  const s = state.stats;
  const relevantIQ = state.archetype === "offense" ? s.offenseIQ : s.defenseIQ;
  let base;
  if (state.stage === "position") {
    base = (relevantIQ * 0.3 + s.development * 0.3 + s.culture * 0.1) / 100 * 12;
  } else if (state.stage === "coordinator") {
    base = (relevantIQ * 0.5 + s.development * 0.3 + s.culture * 0.1) / 100 * 20;
  } else {
    base = ((s.offenseIQ + s.defenseIQ) / 2 * 0.4 + s.development * 0.25 + s.culture * 0.2 + s.recruiting * 0.15) / 100 * 28;
  }

  if (isRecruitingStage(state.stage)) {
    base += schemeMasteryBonus(state);
    if (state.schemeInstallPenaltyThisSeason) base -= 4;
  }
  return base;
}

function teamPower(state) {
  return talentOf(state, state.school) + computeCoachContribution(state) + state.reputation * 0.05;
}

function simulateGame(power, oppPower, variance) {
  const winProb = sigmoid((power - oppPower) / variance);
  return Math.random() < winProb;
}

/* ==========================================================================
   End of season: postseason, growth, world drift
   ========================================================================== */

/* Postseason follows the real 12-team CFP shape: a conference-championship
   game for anyone still in the conference race (0 conference losses always
   qualifies, 1 loss is a coin flip), a bye to the quarterfinal for an elite
   conference champion, other playoff qualifiers starting in the first
   round, and exactly one bowl game for anyone bowl-eligible who misses the
   playoff. Every postseason game — CCG, bowl, or playoff round — gets its
   own live decision, same as an in-season moment, and that decision
   directly decides the game (see resolveGameMoment). The whole thing is a
   stepwise queue rather than one synchronous resolve, so each game's
   decision and outcome renders before the next one is even generated. */
function computeConferenceLosses(state) {
  const confWeeks = new Set(state.weekPlan.filter((p) => p.conference).map((p) => p.week));
  return state.weekResults.filter((r) => confWeeks.has(r.week) && !r.win).length;
}

function ccgQualifyChance(confLosses) {
  if (confLosses <= 0) return 1;
  if (confLosses === 1) return 0.5;
  return 0;
}

// Every postseason game gets a real opponent school (picked by a prestige
// band matching how tough that round should be), not just a synthetic
// power number — so the recap can say who you actually played, and so
// moment text that references ${ctx.opponent} isn't left showing "Bowl
// Game" as if it were a team name.
function pickPostseasonOpponent(state, oppPowerBase, exclude, sameConferenceOnly) {
  const centerPrestige = oppPowerBase / 16;
  const minP = clamp(centerPrestige - 1, 0, 5);
  const maxP = clamp(centerPrestige + 1, 0, 5);
  if (sameConferenceOnly) {
    // A Conference Championship Game is only ever played within your own
    // conference, unlike a bowl or playoff matchup, which can be (and
    // often is) cross-conference.
    const myConf = getSchool(state.school) ? getSchool(state.school).conference : null;
    if (myConf) {
      const inConfBand = SCHOOLS.filter((s) => s.conference === myConf && s.startingPrestige >= minP && s.startingPrestige <= maxP && !exclude.includes(s.name));
      if (inConfBand.length > 0) return pick(inConfBand);
      const anyInConf = SCHOOLS.filter((s) => s.conference === myConf && !exclude.includes(s.name));
      if (anyInConf.length > 0) return pick(anyInConf);
    }
  }
  return pickSchoolByPrestigeRange(minP, maxP, exclude);
}

function planPostseasonRounds(state, wins, conferenceChampion, exclude) {
  const school = getSchool(state.school);
  const cWeight = conferenceWeight(school ? school.conference : "Independent");
  const prestigeQualified = currentPrestige(state, state.school) >= 3;
  const playoffQualified = prestigeQualified && (conferenceChampion || wins >= 10);
  const used = [...exclude];

  if (playoffQualified) {
    const bye = conferenceChampion && wins >= 11;
    const rounds = bye
      ? ["Playoff Quarterfinal", "Playoff Semifinal", "National Championship"]
      : ["Playoff First Round", "Playoff Quarterfinal", "Playoff Semifinal", "National Championship"];
    const slots = rounds.map((label, i) => {
      const opp = pickPostseasonOpponent(state, 58 + i * 4, used);
      used.push(opp.name);
      return { label, opponent: opp.name, spread: 10 };
    });
    return { playoffQualified: true, slots };
  }
  if (wins >= 6) {
    const opp = pickPostseasonOpponent(state, 40 + cWeight * 0.5, used);
    return { playoffQualified: false, slots: [{ label: "Bowl Game", opponent: opp.name, spread: 10 }] };
  }
  return { playoffQualified: false, slots: [] };
}

function planPostseasonMainStage(state) {
  const ps = state.postseason;
  const exclude = [state.school, ...ps.games.map((g) => g.opponent).filter(Boolean)];
  const planned = planPostseasonRounds(state, ps.wins, ps.conferenceChampion, exclude);
  ps.playoffQualified = planned.playoffQualified;
  if (planned.playoffQualified) grantAchievement(state, "playoff");
  ps.queue = planned.slots;
  ps.queueIndex = 0;
  if (planned.slots.length === 0 && !ps.ccgPlayed) ps.label = "No bowl";
}

function beginPostseason(state) {
  const regWins = state.weekResults.filter((r) => r.win).length;
  const regLosses = state.weekResults.length - regWins;
  const school = getSchool(state.school);
  const myConf = school ? school.conference : null;
  const confLosses = computeConferenceLosses(state);

  state.postseason = {
    regWins,
    regLosses,
    wins: regWins,
    losses: regLosses,
    conferenceChampion: false,
    playoffQualified: false,
    natty: false,
    label: "No bowl",
    ccgPlayed: false,
    games: [],
    momentLog: [],
    queue: [],
    queueIndex: 0,
    stage: "ccg",
    momentId: null,
    momentCtx: null,
  };
  state.phase = "postseason";

  if (myConf && Math.random() < ccgQualifyChance(confLosses)) {
    const ccgOpponent = pickPostseasonOpponent(state, 58, [state.school], true);
    state.postseason.queue = [{ label: "Conference Championship", opponent: ccgOpponent.name, spread: 10, isCCG: true }];
  } else {
    state.postseason.stage = "main";
    planPostseasonMainStage(state);
  }
  advancePostseasonStep(state);
}

function currentPostseasonMoment(state) {
  if (!state.postseason || !state.postseason.momentId) return null;
  return GAME_MOMENTS.find((m) => m.id === state.postseason.momentId) || null;
}

function currentPostseasonSlot(state) {
  if (!state.postseason) return null;
  return state.postseason.queue[state.postseason.queueIndex] || null;
}

function advancePostseasonStep(state) {
  const ps = state.postseason;
  const slot = ps.queue[ps.queueIndex];
  if (!slot) {
    if (ps.stage === "ccg") {
      ps.stage = "main";
      planPostseasonMainStage(state);
      advancePostseasonStep(state);
      return;
    }
    finishSeasonAfterPostseason(state);
    return;
  }
  const pool = eligibleMoments(state);
  const moment = pick(pool);
  ps.momentId = moment.id;
  ps.momentCtx = {
    distance: randInt(2, 12),
    score: scoreText(randInt(-17, 17)),
    quarter: quarterText(randInt(1, 4)),
    opponent: slot.opponent,
  };
  save(state);
}

function resolvePostseasonMoment(state, choiceIndex) {
  const ps = state.postseason;
  if (!ps) return;
  const slot = ps.queue[ps.queueIndex];
  if (!slot) return;
  const moment = GAME_MOMENTS.find((m) => m.id === ps.momentId);
  if (!moment) return;
  const choice = moment.choices[choiceIndex];
  if (!choice) return;

  const my = selfMomentRating(state, moment.side, choice.axis);
  const opp = talentOf(state, slot.opponent) + randRange(-slot.spread, slot.spread);
  const profile = RISK_PROFILES[choice.risk];
  const gap = my - opp;
  const successProb = clamp(profile.successBase + gap / 150, 0.08, 0.92);
  const success = Math.random() < successProb;
  const win = success;

  const power = teamPower(state) + (success ? profile.successReward : profile.failCost);
  const score = generateScore(power, opp, win);

  ps.games.push({ label: slot.label, opponent: slot.opponent, win, us: score.us, them: score.them });
  if (win) ps.wins++; else ps.losses++;

  if (slot.isCCG) {
    ps.ccgPlayed = true;
    ps.conferenceChampion = win;
    if (win) {
      ps.label = "Conference Champion";
      state.reputation = clamp(state.reputation + 5, 0, 100);
      grantAchievement(state, "conference_champ");
    } else {
      ps.label = "Conference Championship — runner-up";
    }
  } else if (slot.label === "Bowl Game") {
    ps.label = win ? "Bowl win" : "Bowl loss";
    if (win) {
      state.reputation = clamp(state.reputation + 3, 0, 100);
      if (state.stage === "headcoach") grantAchievement(state, "bowl_win");
    }
  } else if (!win) {
    ps.label = slot.label === "National Championship"
      ? "National Championship — runner-up"
      : `Playoff — lost in the ${slot.label.replace("Playoff ", "").toLowerCase()}`;
  } else if (slot.label === "National Championship") {
    ps.natty = true;
    ps.label = "National Champion";
    state.reputation = clamp(state.reputation + 20, 0, 100);
    grantAchievement(state, "national_champ");
    if (Math.random() < 0.5) grantAchievement(state, "coach_of_year");
  } else {
    ps.label = "Playoff — advancing";
  }

  ps.momentLog.push({
    stageLabel: slot.label,
    opponent: slot.opponent,
    title: momentTitle(moment.id),
    choiceLabel: choice.label,
    success,
    resultText: success ? choice.success(ps.momentCtx) : choice.fail(ps.momentCtx),
    us: score.us,
    them: score.them,
    win,
  });

  if (!win) ps.queue = ps.queue.slice(0, ps.queueIndex + 1);
  ps.queueIndex++;
  save(state);
}

function continuePostseason(state) {
  advancePostseasonStep(state);
}

function driftOtherTalents(state) {
  Object.keys(state.teamTalent).forEach((name) => {
    if (name === state.school) return;
    const school = getSchool(name);
    const baseline = school ? school.startingPrestige * 16 : 40;
    const cur = state.teamTalent[name];
    const pull = (baseline - cur) * 0.08;
    const noise = randRange(-3, 3);
    state.teamTalent[name] = clamp(cur + pull + noise, 5, 99);
  });
}

function schemeRecruitingSynergy(state) {
  if (state.recruitingFocusId !== "blue_chip") return 0;
  const excitingOffense = ["Spread", "Air Raid", "Power Spread"];
  const aggressiveDefense = ["4-2-5", "3-3-5"];
  if (excitingOffense.includes(state.offenseScheme) || aggressiveDefense.includes(state.defenseScheme)) return 1;
  return 0;
}

function applyEndOfSeasonGrowth(state, result) {
  // Training focus gains are applied immediately in setPreseasonChoices
  // (matching the guaranteed-gain pill shown on the preseason card), not
  // deferred to here.

  // Captured before this season's growth is applied, so the reputation
  // swing below judges the season against the team's status going INTO
  // it, not the status it just grew into because of it.
  const prestigeGoingIn = currentPrestige(state, state.school);

  let talentGrowth = (result.winPct - 0.5) * 6;
  if (isRecruitingStage(state.stage)) {
    const rFocus = RECRUITING_FOCUS_OPTIONS.find((f) => f.id === state.recruitingFocusId);
    if (rFocus) {
      const variance = rFocus.variance;
      talentGrowth += rFocus.talentGrowth + randRange(-variance, variance) * (state.stats.recruiting / 100);
      if (rFocus.cultureBonus) state.stats.culture = clamp(state.stats.culture + rFocus.cultureBonus, 0, 100);
    }
    talentGrowth += schemeRecruitingSynergy(state);
    state.stats.recruiting = clamp(state.stats.recruiting + randInt(-1, 2), 0, 100);
  }
  const cur = talentOf(state, state.school);
  state.teamTalent[state.school] = clamp(cur + talentGrowth, 5, 99);
  driftOtherTalents(state);

  // Reputation moves with how far the season beat or missed what a team
  // of this status "should" do, not a flat win-percentage bucket — a 10-3
  // year is a much bigger deal at a Rebuilding program than at a Blue
  // Blood, and should move the needle a lot more.
  const repDelta = Math.round((result.winPct - expectedWinPct(prestigeGoingIn)) * 24);
  state.reputation = clamp(state.reputation + repDelta, 0, 100);

  // Job security moves the same expectations-relative way reputation does,
  // and harder — a program that badly misses what it "should" be doing
  // should genuinely put a coach's job at risk, not just dent a number
  // that's nearly impossible to ever run out.
  const expected = expectedWinPct(prestigeGoingIn);
  const secDelta = Math.round((result.winPct - expected) * 40);
  state.jobSecurity = clamp(state.jobSecurity + secDelta, 0, 100);

  // A truly disastrous season relative to expectations can get a coach
  // fired outright, on the spot, instead of only through years of
  // gradually-drained job security — the bigger the program and the worse
  // the miss, the higher the chance.
  const shortfall = expected - result.winPct;
  if (shortfall > 0.35) {
    const instantFireChance = clamp((shortfall - 0.35) * 1.5, 0, 0.8);
    if (Math.random() < instantFireChance) state.jobSecurity = 0;
  }

  if (result.winPct > 0.5) grantAchievement(state, "winning_season");

  state.seasonsAtSchool += 1;
  state.seasonsTotal += 1;
  state.age += 1;
  state.year += 1;
  state.schemeTenure += 1;
  state.schemeInstallPenaltyThisSeason = false;

  const school = getSchool(state.school);
  if (school && school.startingPrestige >= 4.5) grantAchievement(state, "blue_blood");

  if (state.jobSecurity <= 15 && state.jobSecurity > 0) grantAchievement(state, "survived_hotseat");
}

function finishSeasonAfterPostseason(state) {
  const ps = state.postseason;
  const wins = ps.wins;
  const losses = ps.losses;
  const winPct = wins / (wins + losses);

  const result = {
    year: state.year,
    school: state.school,
    title: state.title,
    regWins: ps.regWins,
    regLosses: ps.regLosses,
    wins,
    losses,
    winPct,
    postseason: {
      games: ps.games,
      label: ps.label,
      conferenceChampion: ps.conferenceChampion,
      playoffQualified: ps.playoffQualified,
      natty: ps.natty,
    },
    postseasonMomentLog: ps.momentLog,
    weekResults: [...state.weekResults],
    recruitingFocusId: state.recruitingFocusId,
    trainingFocusId: state.trainingFocusId,
  };

  applyEndOfSeasonGrowth(state, result);
  state.history.push({
    year: result.year,
    school: result.school,
    title: result.title,
    record: `${wins}-${losses}`,
    note: ps.label,
  });

  state.lastSeasonResult = result;
  state.phase = "recap";
  save(state);
}

/* ==========================================================================
   Offseason / job market
   ========================================================================== */

// Drives the prestige band future job offers are drawn from, so a coach
// who's actually built a program up (or run one into the ground) sees
// offers reflecting that, not just the job's native starting tier.
function currentSchoolPrestige(state) {
  return currentPrestige(state, state.school);
}

function beginOffseason(state) {
  const wasFired = state.jobSecurity <= 0;
  state.wasFired = wasFired;
  const offers = generateJobOffers(state, wasFired);
  state.lastOffers = offers;
  state.phase = "offseason";
  save(state);
  return offers;
}

function generateJobOffers(state, fired) {
  const offers = [];
  const myPrestige = currentSchoolPrestige(state);

  if (!fired) {
    offers.push({
      id: "stay",
      kind: "stay",
      school: state.school,
      stage: state.stage,
      title: state.title,
      prestige: myPrestige,
    });
  }

  // Cumulative reputation raises how many programs are generally
  // circling; a season that just blew past what your program's status
  // should produce adds a burst of fresh interest on top of that, so a
  // breakout year pays off immediately instead of only through reputation
  // slowly climbing over future offseasons. A real postseason achievement
  // (making the playoff, winning it all) is its own signal on top of raw
  // win% — a title run can beat expectations by less, numerically, than a
  // merely-good season at a modest program, but it's a much bigger deal.
  const repFactor = state.reputation / 100;
  const lastResult = state.lastSeasonResult;
  const performanceEdge = lastResult ? lastResult.winPct - expectedWinPct(myPrestige) : 0;
  const breakoutBonus = Math.round(clamp(performanceEdge, 0, 1) * 4);
  const postseason = lastResult ? lastResult.postseason : null;
  const wonNatty = !!(postseason && postseason.natty);
  const madePlayoff = !!(postseason && postseason.playoffQualified);
  const wonConfChamp = !!(postseason && postseason.conferenceChampion);
  const achievementOfferBonus = wonNatty ? 4 : madePlayoff ? 2 : wonConfChamp ? 1 : 0;
  const achievementPrestigeBoost = wonNatty ? 1.5 : madePlayoff ? 0.75 : wonConfChamp ? 0.3 : 0;
  const achievementPromoBonus = wonNatty ? 0.25 : madePlayoff ? 0.1 : 0;

  const baseMax = 2 + Math.round(repFactor * 4);
  const numExternal = fired ? randInt(0, 2) : clamp(randInt(1, baseMax) + breakoutBonus + achievementOfferBonus, 1, 9);

  const usedSchools = new Set([state.school]);

  for (let i = 0; i < numExternal; i++) {
    let stage = state.stage;
    let promotionRoll = Math.random();
    let promoted = false;

    if (state.stage === "position" && promotionRoll < 0.2 + repFactor * 0.35 + achievementPromoBonus) {
      stage = "coordinator";
      promoted = true;
    } else if (state.stage === "coordinator" && promotionRoll < 0.12 + repFactor * 0.3 + achievementPromoBonus) {
      stage = "headcoach";
      promoted = true;
    }

    let minP, maxP, biasHigh;
    if (promoted) {
      // A promotion offer's ceiling is anchored to whichever is higher:
      // your built-up reputation, or the tier of the program you're
      // already succeeding at (a coordinator at a Blue Blood shouldn't be
      // capped out of Blue Blood-caliber jobs just because reputation
      // alone says "Solid Program"), plus a bump for a real postseason
      // achievement this past season.
      minP = clamp(Math.max(repFactor * 3 - 0.5, myPrestige - 2), 0, 4);
      maxP = clamp(Math.max(2 + repFactor * 3, myPrestige - 0.5) + achievementPrestigeBoost, 1, 5);
      biasHigh = true;
    } else if (fired) {
      minP = 0;
      maxP = clamp(myPrestige - 0.5, 0, 5);
    } else {
      const drift = randRange(-1, 1.5) * (0.5 + repFactor);
      minP = clamp(myPrestige - 1.5, 0, 5);
      maxP = clamp(myPrestige + drift + 1, 0, 5);
    }

    const target = pickSchoolByPrestigeRange(minP, maxP, [...usedSchools], biasHigh);
    if (!target) continue;
    usedSchools.add(target.name);

    let title;
    if (stage === "position") title = pick(POSITION_TITLES[state.archetype]);
    else if (stage === "coordinator") title = coordinatorTitle(state.archetype);
    else title = "Head Coach";

    offers.push({
      id: `${target.name}-${stage}-${i}`,
      kind: promoted ? "promotion" : "lateral",
      school: target.name,
      stage,
      title,
      prestige: target.startingPrestige,
    });
  }

  return offers;
}

function acceptOffer(state, offerId) {
  const offer = (state.lastOffers || []).find((o) => o.id === offerId);
  if (!offer) return;

  const changingSchool = offer.school !== state.school;
  const changingStage = offer.stage !== state.stage;

  state.school = offer.school;
  state.stage = offer.stage;
  state.title = offer.title;
  if (changingSchool) state.seasonsAtSchool = 0;
  if (changingStage) {
    state.jobSecurity = 65;
    if (offer.stage === "coordinator") grantAchievement(state, "promoted_coordinator");
    if (offer.stage === "headcoach") grantAchievement(state, "promoted_hc");
  } else if (changingSchool) {
    state.jobSecurity = 60;
  }

  if (changingSchool) {
    const newSchool = getSchool(state.school);
    state.offenseScheme = newSchool.offenseScheme;
    state.defenseScheme = newSchool.defenseScheme;
    state.schemeTenure = 0;
    state.schemeInstallPenaltyThisSeason = false;
  }

  initTalent(state, state.school);
  state.wasFired = false;
  state.lastOffers = null;
  state.recruitingFocusId = null;
  state.trainingFocusId = null;
  state.phase = "preseason";
  save(state);
}

function retire(state) {
  state.retired = true;
  state.gameOver = true;
  state.phase = "retired";
  if (computeLegacyScore(state) >= 70) grantAchievement(state, "hall_of_fame");
  save(state);
}

function computeLegacyScore(state) {
  let score = state.reputation;
  score += state.achievements.length * 5;
  const stageBonus = { position: 0, coordinator: 10, headcoach: 25 };
  score += stageBonus[state.stage] || 0;
  if (state.achievements.includes("national_champ")) score += 20;
  if (state.achievements.includes("conference_champ")) score += 10;
  return Math.round(score);
}

/* ==========================================================================
   Career history: stops (aggregated stints) and career totals
   ========================================================================== */

function computeCareerStops(state) {
  const stops = [];
  state.history.forEach((h) => {
    const [w, l] = h.record.split("-").map(Number);
    const last = stops[stops.length - 1];
    if (last && last.school === h.school && last.title === h.title) {
      last.endYear = h.year;
      last.seasons += 1;
      last.wins += w;
      last.losses += l;
      last.notes.push(h.note);
    } else {
      stops.push({
        school: h.school,
        title: h.title,
        startYear: h.year,
        endYear: h.year,
        seasons: 1,
        wins: w,
        losses: l,
        notes: [h.note],
      });
    }
  });
  return stops;
}

function computeCareerTotals(state) {
  let wins = 0, losses = 0, bowlWins = 0, bowlLosses = 0, confChamps = 0, playoffs = 0, natties = 0;
  state.history.forEach((h) => {
    const [w, l] = h.record.split("-").map(Number);
    wins += w;
    losses += l;
    if (h.note === "Bowl win") bowlWins++;
    else if (h.note === "Bowl loss") bowlLosses++;
    else if (h.note === "Conference Champion") confChamps++;
    else if (h.note === "National Champion") { natties++; playoffs++; }
    else if (h.note && (h.note.indexOf("Playoff") === 0 || h.note.indexOf("National Championship") === 0)) playoffs++;
  });
  return { wins, losses, bowlWins, bowlLosses, confChamps, playoffs, natties, seasons: state.history.length };
}

/* ==========================================================================
   Persistence
   ========================================================================== */

function save(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    /* localStorage unavailable — game still works for the current tab session */
  }
}

function loadSave() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

function clearSave() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    /* ignore */
  }
}
