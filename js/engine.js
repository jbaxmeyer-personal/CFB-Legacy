/* ==========================================================================
   CFB Legacy — game engine (pure state machine, no DOM access here)
   ========================================================================== */

const STORAGE_KEY = "cfbLegacySave";
const STARTING_YEAR = 2026;
const GAMES_PER_SEASON = 12;
const DILEMMAS_PER_SEASON = 3;
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
    version: 1,
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
    teamTalent: {},
    history: [],
    achievements: [],
    seasonDilemmaIds: [],
    dilemmaQueue: [],
    dilemmaLog: [],
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
   Preseason
   ========================================================================== */

function isRecruitingStage(stage) {
  return stage === "coordinator" || stage === "headcoach";
}

function setPreseasonChoices(state, { trainingFocusId, philosophy, recruitingFocusId }) {
  state.trainingFocusId = trainingFocusId;
  if (philosophy) state.philosophy = philosophy;
  if (isRecruitingStage(state.stage)) state.recruitingFocusId = recruitingFocusId;
  state.dilemmaQueue = pickSeasonDilemmas(state);
  state.dilemmaLog = [];
  state.phase = "inseason";
  save(state);
}

function pickSeasonDilemmas(state) {
  const pool = DILEMMA_EVENTS.filter((e) => e.stages.includes(state.stage));
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(DILEMMAS_PER_SEASON, shuffled.length)).map((e) => e.id);
}

/* ==========================================================================
   In-season dilemmas
   ========================================================================== */

function currentDilemma(state) {
  if (!state.dilemmaQueue.length) return null;
  const id = state.dilemmaQueue[0];
  return DILEMMA_EVENTS.find((e) => e.id === id) || null;
}

function dilemmaContext(state) {
  return { pronoun: "he", possessive: "his" };
}

function resolveDilemma(state, choiceIndex) {
  const event = currentDilemma(state);
  if (!event) return;
  const choice = event.choices[choiceIndex];
  if (!choice) return;

  applyEffects(state, choice.effects || {});
  state.dilemmaLog.push({ title: event.title, choiceLabel: choice.label, outcome: choice.outcome });
  state.dilemmaQueue.shift();
  save(state);

  if (!state.dilemmaQueue.length) {
    resolveSeason(state);
  }
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
   Season simulation
   ========================================================================== */

function computeCoachContribution(state) {
  const s = state.stats;
  const relevantIQ = state.archetype === "offense" ? s.offenseIQ : s.defenseIQ;
  if (state.stage === "position") {
    return (relevantIQ * 0.3 + s.development * 0.3 + s.culture * 0.1) / 100 * 12;
  }
  if (state.stage === "coordinator") {
    return (relevantIQ * 0.5 + s.development * 0.3 + s.culture * 0.1) / 100 * 20;
  }
  return ((s.offenseIQ + s.defenseIQ) / 2 * 0.4 + s.development * 0.25 + s.culture * 0.2 + s.recruiting * 0.15) / 100 * 28;
}

function teamPower(state) {
  return talentOf(state, state.school) + computeCoachContribution(state) + state.reputation * 0.05;
}

function simulateGame(power, oppPower, variance) {
  const winProb = sigmoid((power - oppPower) / variance);
  return Math.random() < winProb;
}

function resolveSeason(state) {
  const school = getSchool(state.school);
  const cWeight = conferenceWeight(school ? school.conference : "Independent");
  const variance = philosophyVariance(state.philosophy);
  const power = teamPower(state);

  let wins = 0;
  let losses = 0;
  let bestWinMargin = -Infinity;
  let worstLossMargin = Infinity;

  for (let i = 0; i < GAMES_PER_SEASON; i++) {
    const oppPower = 40 + cWeight * 0.6 + randRange(-15, 15);
    const won = simulateGame(power, oppPower, variance);
    const margin = power - oppPower;
    if (won) {
      wins++;
      if (margin > bestWinMargin) bestWinMargin = margin;
    } else {
      losses++;
      if (margin < worstLossMargin) worstLossMargin = margin;
    }
  }

  const winPct = wins / GAMES_PER_SEASON;
  const postseason = resolvePostseason(state, power, cWeight, variance, wins);

  const result = {
    year: state.year,
    school: state.school,
    title: state.title,
    wins,
    losses,
    winPct,
    postseason,
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

function resolvePostseason(state, power, cWeight, variance, wins) {
  if (wins < 6) return { label: "No bowl", champion: false, playoff: false, natty: false };

  const bowlOpp = 40 + cWeight * 0.5 + randRange(-10, 10);
  const bowlWin = simulateGame(power, bowlOpp, variance);
  let label = bowlWin ? "Bowl win" : "Bowl loss";
  let champion = false;
  let playoff = false;
  let natty = false;

  if (bowlWin) {
    state.reputation = clamp(state.reputation + 3, 0, 100);
    if (state.stage === "headcoach") grantAchievement(state, "bowl_win");
  }

  if (wins >= 10 && cWeight >= 14) {
    const champChance = clamp((wins - 9) * 0.28, 0, 0.8);
    if (Math.random() < champChance) {
      champion = true;
      label = "Conference Champion";
      state.reputation = clamp(state.reputation + 5, 0, 100);
      grantAchievement(state, "conference_champ");
    }
  }

  const school = getSchool(state.school);
  const prestigeQualified = school && school.startingPrestige >= 3;
  if ((champion || wins >= 11) && prestigeQualified) {
    playoff = true;
    grantAchievement(state, "playoff");
    let roundsWon = 0;
    for (let round = 0; round < 3; round++) {
      const oppPower = 55 + randRange(-8, 12) + round * 3;
      if (simulateGame(power + roundsWon * 2, oppPower, variance)) {
        roundsWon++;
      } else {
        break;
      }
    }
    if (roundsWon >= 3) {
      natty = true;
      label = "National Champion";
      state.reputation = clamp(state.reputation + 20, 0, 100);
      grantAchievement(state, "national_champ");
      if (Math.random() < 0.5) grantAchievement(state, "coach_of_year");
    } else if (roundsWon > 0) {
      label = `Playoff — lost round ${roundsWon + 1}`;
    } else {
      label = "Playoff — lost first round";
    }
  }

  return { label, champion, playoff, natty, bowlWin };
}

function applyEndOfSeasonGrowth(state, result) {
  const focus = TRAINING_FOCUS_OPTIONS.find((f) => f.id === state.trainingFocusId);
  if (focus) {
    const eff = focus.effects;
    if (eff.development) state.stats.development = clamp(state.stats.development + eff.development, 0, 100);
    if (eff.culture) state.stats.culture = clamp(state.stats.culture + eff.culture, 0, 100);
    if (eff.offenseIQGain) state.stats.offenseIQ = clamp(state.stats.offenseIQ + eff.offenseIQGain, 0, 100);
    if (eff.defenseIQGain) state.stats.defenseIQ = clamp(state.stats.defenseIQ + eff.defenseIQGain, 0, 100);
  }

  let talentGrowth = (result.winPct - 0.5) * 6;
  if (isRecruitingStage(state.stage)) {
    const rFocus = RECRUITING_FOCUS_OPTIONS.find((f) => f.id === state.recruitingFocusId);
    if (rFocus) {
      const variance = rFocus.variance;
      talentGrowth += rFocus.talentGrowth + randRange(-variance, variance) * (state.stats.recruiting / 100);
      if (rFocus.cultureBonus) state.stats.culture = clamp(state.stats.culture + rFocus.cultureBonus, 0, 100);
    }
    state.stats.recruiting = clamp(state.stats.recruiting + randInt(-1, 2), 0, 100);
  }
  const cur = talentOf(state, state.school);
  state.teamTalent[state.school] = clamp(cur + talentGrowth, 5, 99);

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

  const school = getSchool(state.school);
  if (school && school.startingPrestige >= 4.5) grantAchievement(state, "blue_blood");

  if (state.jobSecurity <= 15 && state.jobSecurity > 0) grantAchievement(state, "survived_hotseat");
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
