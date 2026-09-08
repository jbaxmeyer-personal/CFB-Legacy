/* ==========================================================================
   CFB Legacy — game engine (pure state machine, no DOM access here)
   ========================================================================== */

const STORAGE_KEY = "cfbLegacySave";
const STARTING_YEAR = 2026;
const GAMES_PER_SEASON = 12;
const MOMENTS_PER_SEASON_MIN = 6;
const MOMENTS_PER_SEASON_MAX = 9;

function dilemmasForStage(stage) {
  // Coordinators/HCs get game moments as their main decisions; dilemmas
  // stay a minority flavor. Position coaches don't call plays, so their
  // off-field dilemmas are their only decisions each season.
  return stage === "position" ? 5 : 3;
}
const STAT_KEYS = ["offenseIQ", "defenseIQ", "recruiting", "development", "culture", "mediaSavvy"];

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

function pickSchoolByPrestigeRange(minP, maxP, excludeNames) {
  const exclude = excludeNames || [];
  let pool = SCHOOLS.filter((s) => s.startingPrestige >= minP && s.startingPrestige <= maxP && !exclude.includes(s.name));
  if (pool.length === 0) pool = SCHOOLS.filter((s) => !exclude.includes(s.name));
  if (pool.length === 0) pool = SCHOOLS;
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

  const used = new Set([state.school]);
  const opponents = [];
  for (let i = 0; i < GAMES_PER_SEASON; i++) {
    const useConf = confPool.length > 0 && Math.random() < 0.55;
    const candidatePool = useConf ? confPool : fullPool;
    let choice = pick(candidatePool);
    let tries = 0;
    while (used.has(choice.name) && tries < 30) {
      choice = pick(candidatePool);
      tries++;
    }
    used.add(choice.name);
    opponents.push(choice.name);
  }

  const eligibleEvents = DILEMMA_EVENTS.filter((e) => e.stages.includes(state.stage));
  const shuffledEvents = [...eligibleEvents].sort(() => Math.random() - 0.5).slice(0, dilemmasForStage(state.stage));
  const weekIndices = Array.from({ length: GAMES_PER_SEASON }, (_, i) => i);
  const dilemmaWeeks = [...weekIndices].sort(() => Math.random() - 0.5).slice(0, shuffledEvents.length).sort((a, b) => a - b);

  const plan = opponents.map((opp, i) => ({ week: i + 1, opponent: opp, dilemmaId: null, momentId: null, momentCtx: null }));
  dilemmaWeeks.forEach((wIdx, i) => {
    plan[wIdx].dilemmaId = shuffledEvents[i].id;
  });

  // In-game tactical moments (3rd-and-long, blitz calls, trick plays) are
  // the majority decision type at every coaching stage, not just once
  // you're calling plays as a coordinator or head coach.
  const remaining = weekIndices.filter((i) => !dilemmaWeeks.includes(i));
  const momentCount = Math.min(randInt(MOMENTS_PER_SEASON_MIN, MOMENTS_PER_SEASON_MAX), remaining.length);
  const momentWeeks = [...remaining].sort(() => Math.random() - 0.5).slice(0, momentCount);
  const shuffledMoments = [...GAME_MOMENTS].sort(() => Math.random() - 0.5).slice(0, momentWeeks.length);
  momentWeeks.forEach((wIdx, i) => {
    plan[wIdx].momentId = shuffledMoments[i].id;
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
  state.achievementsSnapshot = [...state.achievements];
  state.phase = "inseason";
  advanceWeeks(state);
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

function simulateWeek(state, weekIndex, extraPower) {
  const plan = state.weekPlan[weekIndex];
  const variance = philosophyVariance(state.philosophy);
  const power = teamPower(state) + (extraPower || 0);
  const oppPower = talentOf(state, plan.opponent) + randRange(-6, 6);
  const won = simulateGame(power, oppPower, variance);
  const score = generateScore(power, oppPower, won);
  const result = { week: plan.week, opponent: plan.opponent, us: score.us, them: score.them, win: won };
  state.weekResults.push(result);
  state.currentWeek = weekIndex + 1;
  return result;
}

function advanceWeeks(state) {
  while (state.currentWeek < state.weekPlan.length) {
    const plan = state.weekPlan[state.currentWeek];
    if (plan.dilemmaId || plan.momentId) return;
    simulateWeek(state, state.currentWeek, 0);
  }
  finishSeason(state);
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

function momentRatings(state, side, axis, opponentName) {
  if (side === "offense") {
    return axis === "run"
      ? { my: selfRunOffense(state), opp: oppRunDefense(state, opponentName) }
      : { my: selfPassOffense(state), opp: oppPassDefense(state, opponentName) };
  }
  if (side === "defense") {
    return axis === "run"
      ? { my: selfRunDefense(state), opp: oppRunOffense(state, opponentName) }
      : { my: selfPassDefense(state), opp: oppPassOffense(state, opponentName) };
  }
  if (side === "special") return { my: selfSpecialTeams(state), opp: oppSpecialTeams(state, opponentName) };
  return { my: selfPoise(state), opp: oppPoise(state, opponentName) };
}

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

  const gameResult = simulateWeek(state, weekIdx, weekPowerDelta);

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

/* Postseason follows the real 12-team CFP shape: a Power-conference team
   with a strong enough regular season plays a Conference Championship
   Game (its result folds into the record); the conference champion (with
   an elite record) earns a bye straight to the quarterfinal, other
   playoff qualifiers start in the first round; anyone bowl-eligible who
   doesn't make the playoff plays exactly one bowl game instead. Every
   game here — CCG, bowl, or playoff round — is simulated and its
   win/loss is added to the season's win-loss total, so the final record
   always accounts for every game actually played. */
function resolvePostseason(state, power, cWeight, variance, regWins, regLosses) {
  const games = [];
  let wins = regWins;
  let losses = regLosses;
  let label = "No bowl";
  let conferenceChampion = false;
  let playoffQualified = false;
  let natty = false;

  function playGame(gameLabel, oppPowerBase, spread) {
    const oppPower = oppPowerBase + randRange(-spread, spread);
    const win = simulateGame(power, oppPower, variance);
    const score = generateScore(power, oppPower, win);
    games.push({ label: gameLabel, win, us: score.us, them: score.them });
    if (win) wins++; else losses++;
    return win;
  }

  const isPowerConf = cWeight >= 14;
  let playedCCG = false;
  if (isPowerConf && regWins >= 9) {
    const qualifyChance = clamp((regWins - 8) * 0.25, 0, 0.75);
    if (Math.random() < qualifyChance) {
      playedCCG = true;
      const win = playGame("Conference Championship", 58, 10);
      conferenceChampion = win;
      if (win) {
        label = "Conference Champion";
        state.reputation = clamp(state.reputation + 5, 0, 100);
        grantAchievement(state, "conference_champ");
      } else {
        label = "Conference Championship — runner-up";
      }
    }
  }

  const school = getSchool(state.school);
  const prestigeQualified = school && school.startingPrestige >= 3;
  playoffQualified = prestigeQualified && (conferenceChampion || wins >= 10);

  if (playoffQualified) {
    grantAchievement(state, "playoff");
    const bye = conferenceChampion && wins >= 11;
    const rounds = bye
      ? ["Playoff Quarterfinal", "Playoff Semifinal", "National Championship"]
      : ["Playoff First Round", "Playoff Quarterfinal", "Playoff Semifinal", "National Championship"];
    label = bye ? "Playoff — lost in the quarterfinal" : "Playoff — lost in the first round";
    for (let i = 0; i < rounds.length; i++) {
      const win = playGame(rounds[i], 58 + i * 4, 10);
      if (!win) {
        label = rounds[i] === "National Championship"
          ? "National Championship — runner-up"
          : `Playoff — lost in the ${rounds[i].replace("Playoff ", "").toLowerCase()}`;
        break;
      }
      if (i === rounds.length - 1) {
        natty = true;
        label = "National Champion";
        state.reputation = clamp(state.reputation + 20, 0, 100);
        grantAchievement(state, "national_champ");
        if (Math.random() < 0.5) grantAchievement(state, "coach_of_year");
      }
    }
  } else if (wins >= 6) {
    const win = playGame("Bowl Game", 40 + cWeight * 0.5, 10);
    label = win ? "Bowl win" : "Bowl loss";
    if (win) {
      state.reputation = clamp(state.reputation + 3, 0, 100);
      if (state.stage === "headcoach") grantAchievement(state, "bowl_win");
    }
  }

  return { games, wins, losses, label, conferenceChampion, playoffQualified, natty };
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

  if (result.winPct > 0.7) state.reputation = clamp(state.reputation + 4, 0, 100);
  else if (result.winPct > 0.5) state.reputation = clamp(state.reputation + 1, 0, 100);
  else if (result.winPct < 0.25) state.reputation = clamp(state.reputation - 4, 0, 100);
  else if (result.winPct < 0.42) state.reputation = clamp(state.reputation - 1, 0, 100);

  let secDelta = (result.winPct - 0.5) * 24;
  state.jobSecurity = clamp(state.jobSecurity + secDelta, 0, 100);

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

function finishSeason(state) {
  const regWins = state.weekResults.filter((r) => r.win).length;
  const regLosses = state.weekResults.length - regWins;

  const school = getSchool(state.school);
  const cWeight = conferenceWeight(school ? school.conference : "Independent");
  const variance = philosophyVariance(state.philosophy);
  const power = teamPower(state);
  const postseason = resolvePostseason(state, power, cWeight, variance, regWins, regLosses);

  const wins = postseason.wins;
  const losses = postseason.losses;
  const winPct = wins / (wins + losses);

  const result = {
    year: state.year,
    school: state.school,
    title: state.title,
    regWins,
    regLosses,
    wins,
    losses,
    winPct,
    postseason,
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
    note: postseason.label,
  });

  state.lastSeasonResult = result;
  state.phase = "recap";
  save(state);
}

/* ==========================================================================
   Offseason / job market
   ========================================================================== */

function currentSchoolPrestige(state) {
  const s = getSchool(state.school);
  return s ? s.startingPrestige : 1;
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

  const repFactor = state.reputation / 100;
  const numExternal = fired ? randInt(0, 2) : randInt(1, 2 + Math.round(repFactor * 2));

  const usedSchools = new Set([state.school]);

  for (let i = 0; i < numExternal; i++) {
    let stage = state.stage;
    let promotionRoll = Math.random();
    let promoted = false;

    if (state.stage === "position" && promotionRoll < 0.2 + repFactor * 0.35) {
      stage = "coordinator";
      promoted = true;
    } else if (state.stage === "coordinator" && promotionRoll < 0.12 + repFactor * 0.3) {
      stage = "headcoach";
      promoted = true;
    }

    let minP, maxP;
    if (promoted) {
      minP = 0;
      maxP = clamp(1.5 + repFactor * 2, 1, 4);
    } else if (fired) {
      minP = 0;
      maxP = clamp(myPrestige - 0.5, 0, 5);
    } else {
      const drift = randRange(-1, 1.5) * (0.5 + repFactor);
      minP = clamp(myPrestige - 1.5, 0, 5);
      maxP = clamp(myPrestige + drift + 1, 0, 5);
    }

    const target = pickSchoolByPrestigeRange(minP, maxP, [...usedSchools]);
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
