/* ==========================================================================
   CFB Legacy — UI rendering (DOM string templates + delegated events)
   ========================================================================== */

const App = {
  state: null,
  draft: null,
  formName: "",
  formArchetype: "offense",
  awaitingContinue: false,
};

const STAT_LABELS = {
  offenseIQ: "Offense IQ",
  defenseIQ: "Defense IQ",
  recruiting: "Recruiting",
  development: "Player Dev",
  culture: "Culture",
  mediaSavvy: "Media Savvy",
};

const EFFECT_LABELS = Object.assign({}, STAT_LABELS, {
  teamTalentDelta: "Team Talent",
  weekPowerDelta: "This Game",
  reputation: "Reputation",
  jobSecurity: "Job Security",
});

const EFFECT_ORDER = ["reputation", "jobSecurity", "teamTalentDelta", "weekPowerDelta", "offenseIQ", "defenseIQ", "recruiting", "development", "culture", "mediaSavvy"];

function describeEffects(effects) {
  if (!effects) return [];
  return EFFECT_ORDER.filter((k) => effects[k]).map((k) => {
    const v = effects[k];
    const sign = v > 0 ? "+" : "";
    return { text: `${EFFECT_LABELS[k]} ${sign}${v}`, positive: v > 0 };
  });
}

function prestigeLabel(p) {
  if (p >= 4.5) return "Blue Blood";
  if (p >= 3.5) return "Power Program";
  if (p >= 2) return "Solid Program";
  if (p >= 1) return "Rebuilding";
  return "Bottom Feeder";
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

function statBar(label, value) {
  const pct = clamp(value, 0, 100);
  return `
    <div class="stat-bar">
      <div class="stat-bar__label"><span>${label}</span><span>${Math.round(pct)}</span></div>
      <div class="stat-bar__track"><div class="stat-bar__fill" style="width:${pct}%"></div></div>
    </div>`;
}

function renderApp() {
  const root = document.getElementById("app");
  if (!App.state) {
    root.innerHTML = renderStartScreen();
    return;
  }
  const state = App.state;
  if (state.phase === "retired") {
    root.innerHTML = renderRetired(state);
    return;
  }

  let body = "";
  if (state.phase === "preseason") body = renderPreseason(state);
  else if (state.phase === "inseason") body = renderDilemmaScreen(state);
  else if (state.phase === "recap") body = renderRecap(state);
  else if (state.phase === "offseason") body = renderOffseason(state);

  root.innerHTML = `${renderHeader(state)}<main class="app-main">${body}</main>${renderHistoryPanel(state)}`;
}

/* ==========================================================================
   Header
   ========================================================================== */

function renderHeader(state) {
  const school = getSchool(state.school);
  const gradient = teamGradient(state.school);
  const conf = school ? (CONFERENCE_NAMES[school.conference] || school.conference) : "";
  const tier = school ? prestigeLabel(school.startingPrestige) : "";
  const stageLabel = STAGE_LABELS[state.stage];

  const statsHtml = STAT_KEYS.map((k) => statBar(STAT_LABELS[k], state.stats[k])).join("");

  return `
    <header class="app-header">
      <div class="school-banner" style="background:${gradient}">
        <div class="school-banner__overlay">
          <div class="school-banner__title">${escapeHtml(state.coachName)}</div>
          <div class="school-banner__sub">${escapeHtml(state.title)} &middot; ${escapeHtml(state.school)}</div>
          <div class="school-banner__meta">${escapeHtml(conf)} &middot; ${tier} &middot; Age ${state.age} &middot; ${state.year}</div>
        </div>
      </div>
      <div class="header-row">
        <div class="pill">${stageLabel}</div>
        <div class="pill pill--rep">Reputation ${Math.round(state.reputation)}</div>
        <div class="pill ${state.jobSecurity <= 25 ? "pill--danger" : ""}">Job Security ${Math.round(state.jobSecurity)}</div>
      </div>
      <div class="stat-grid">${statsHtml}</div>
    </header>`;
}

function careerStopsTableHtml(state) {
  const stops = computeCareerStops(state);
  const rows = [...stops].reverse().map((s) => `
    <tr>
      <td>${escapeHtml(s.school)}</td>
      <td>${escapeHtml(s.title)}</td>
      <td>${s.startYear === s.endYear ? s.startYear : `${s.startYear}&ndash;${s.endYear}`}</td>
      <td>${s.seasons}</td>
      <td>${s.wins}-${s.losses}</td>
    </tr>`).join("");
  return `
    <table class="history-table">
      <thead><tr><th>School</th><th>Title</th><th>Years</th><th>Seasons</th><th>Record</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>`;
}

function careerTotalsStripHtml(state) {
  const t = computeCareerTotals(state);
  const items = [
    { label: "Career Record", value: `${t.wins}-${t.losses}` },
    { label: "Bowl Record", value: `${t.bowlWins}-${t.bowlLosses}` },
    { label: "Conf. Titles", value: t.confChamps },
    { label: "Playoff Trips", value: t.playoffs },
    { label: "Nat'l Titles", value: t.natties },
  ];
  return `<div class="totals-strip">${items.map((i) => `<div class="totals-strip__item"><div class="totals-strip__value">${i.value}</div><div class="totals-strip__label">${i.label}</div></div>`).join("")}</div>`;
}

function renderHistoryPanel(state) {
  if (!state.history.length) return "";
  const rows = [...state.history].reverse().map((h) => `
      <tr><td>${h.year}</td><td>${escapeHtml(h.school)}</td><td>${escapeHtml(h.title)}</td><td>${h.record}</td><td>${escapeHtml(h.note)}</td></tr>
  `).join("");
  return `
    <details class="history-panel">
      <summary>Career History (${state.history.length} season${state.history.length === 1 ? "" : "s"})</summary>
      ${careerTotalsStripHtml(state)}
      <h3 class="scheme-subhead">Career Stops</h3>
      <div class="history-panel__scroll">${careerStopsTableHtml(state)}</div>
      <h3 class="scheme-subhead">Season by Season</h3>
      <div class="history-panel__scroll">
        <table class="history-table">
          <thead><tr><th>Year</th><th>School</th><th>Title</th><th>Record</th><th>Result</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </details>`;
}

/* ==========================================================================
   Start screen
   ========================================================================== */

function renderStartScreen() {
  const saved = loadSave();
  const savedCard = saved ? `
    <div class="panel">
      <h2>Continue Career</h2>
      <p class="muted">${escapeHtml(saved.coachName)} &middot; ${escapeHtml(saved.title)} at ${escapeHtml(saved.school)} &middot; ${saved.year}</p>
      <button class="btn btn-primary" data-action="continue-career">Continue</button>
      <button class="btn btn-ghost" data-action="start-over">Start Over</button>
    </div>` : "";

  const archetypes = [
    { id: "offense", label: "Offensive Mind", description: "You'll climb toward Offensive Coordinator, then Head Coach. Starts stronger on Offense IQ." },
    { id: "defense", label: "Defensive Mind", description: "You'll climb toward Defensive Coordinator, then Head Coach. Starts stronger on Defense IQ." },
  ];

  const archCards = archetypes.map((a) => `
    <label class="choice-card ${App.formArchetype === a.id ? "choice-card--selected" : ""}">
      <input type="radio" name="archetype" value="${a.id}" data-field="formArchetype" ${App.formArchetype === a.id ? "checked" : ""}>
      <div class="choice-card__title">${a.label}</div>
      <div class="choice-card__desc">${a.description}</div>
    </label>`).join("");

  return `
    <div class="start-screen">
      <h1 class="wordmark">CFB LEGACY</h1>
      <p class="tagline">One career. A thousand decisions. Climb from Position Coach to National Champion.</p>
      ${savedCard}
      <div class="panel">
        <h2>Begin a New Career</h2>
        <label class="field">
          <span>Coach Name</span>
          <input type="text" id="coach-name-input" placeholder="Coach Name" value="${escapeHtml(App.formName)}" maxlength="30" data-field="formName">
        </label>
        <div class="choice-grid">${archCards}</div>
        <button class="btn btn-primary" data-action="create-career" ${App.formName.trim() ? "" : "disabled"}>Begin Career</button>
      </div>
    </div>`;
}

/* ==========================================================================
   Preseason
   ========================================================================== */

function ensureDraft(state) {
  const key = `${state.year}-${state.school}-${state.stage}`;
  if (!App.draft || App.draft.forKey !== key) {
    App.draft = {
      forKey: key,
      trainingFocusId: null,
      recruitingFocusId: null,
      philosophy: state.philosophy,
      offenseSchemeId: state.offenseScheme,
      defenseSchemeId: state.defenseScheme,
    };
  }
  return App.draft;
}

function schemePickerHtml(side, options, currentId, draftId, fieldPath) {
  const cards = options.map((o) => {
    const isCurrent = o.id === currentId;
    const selected = draftId === o.id;
    return `
      <label class="choice-card ${selected ? "choice-card--selected" : ""}">
        <input type="radio" name="${fieldPath}" value="${o.id}" data-field="${fieldPath}" ${selected ? "checked" : ""}>
        <div class="choice-card__title">${escapeHtml(o.label)}${isCurrent ? ' <span class="current-badge">Current</span>' : ""}</div>
        <div class="choice-card__desc">${escapeHtml(o.description)}</div>
      </label>`;
  }).join("");
  const sideLabel = side === "offense" ? "Offensive Scheme" : "Defensive Scheme";
  return `<h3 class="scheme-subhead">${sideLabel}</h3><div class="choice-grid">${cards}</div>`;
}

function renderPreseason(state) {
  const draft = ensureDraft(state);
  const recruitingStage = isRecruitingStage(state.stage);

  const trainingCards = TRAINING_FOCUS_OPTIONS.map((o) => `
    <label class="choice-card ${draft.trainingFocusId === o.id ? "choice-card--selected" : ""}">
      <input type="radio" name="training" value="${o.id}" data-field="draft.trainingFocusId" ${draft.trainingFocusId === o.id ? "checked" : ""}>
      <div class="choice-card__title">${o.label}</div>
      <div class="choice-card__desc">${o.description}</div>
    </label>`).join("");

  let recruitingSection = "";
  let philosophySection = "";
  let schemeSection = "";
  if (recruitingStage) {
    const recruitCards = RECRUITING_FOCUS_OPTIONS.map((o) => `
      <label class="choice-card ${draft.recruitingFocusId === o.id ? "choice-card--selected" : ""}">
        <input type="radio" name="recruiting" value="${o.id}" data-field="draft.recruitingFocusId" ${draft.recruitingFocusId === o.id ? "checked" : ""}>
        <div class="choice-card__title">${o.label}</div>
        <div class="choice-card__desc">${o.description}</div>
      </label>`).join("");
    recruitingSection = `<section class="panel"><h2>Recruiting Emphasis</h2><div class="choice-grid">${recruitCards}</div></section>`;

    const philCards = PHILOSOPHY_OPTIONS.map((o) => `
      <label class="choice-card ${draft.philosophy === o.id ? "choice-card--selected" : ""}">
        <input type="radio" name="philosophy" value="${o.id}" data-field="draft.philosophy" ${draft.philosophy === o.id ? "checked" : ""}>
        <div class="choice-card__title">${o.label}</div>
        <div class="choice-card__desc">${o.description}</div>
      </label>`).join("");
    philosophySection = `<section class="panel"><h2>Game Philosophy</h2><div class="choice-grid">${philCards}</div></section>`;

    const canOffense = state.stage === "headcoach" || state.archetype === "offense";
    const canDefense = state.stage === "headcoach" || state.archetype === "defense";
    let schemeInner = "";
    if (canOffense) schemeInner += schemePickerHtml("offense", OFFENSE_SCHEMES, state.offenseScheme, draft.offenseSchemeId, "draft.offenseSchemeId");
    if (canDefense) schemeInner += schemePickerHtml("defense", DEFENSE_SCHEMES, state.defenseScheme, draft.defenseSchemeId, "draft.defenseSchemeId");
    schemeSection = `<section class="panel"><h2>Scheme &amp; System</h2><p class="muted">Installing a new scheme costs you this season — the staff and roster need time to learn it. Running the same system for two-plus seasons builds a mastery bonus instead.</p>${schemeInner}</section>`;
  }

  const canBegin = draft.trainingFocusId && (!recruitingStage || draft.recruitingFocusId);

  return `
    <div class="screen">
      <h1 class="screen-title">Preseason — ${state.year}</h1>
      <section class="panel">
        <h2>Training Focus</h2>
        <div class="choice-grid">${trainingCards}</div>
      </section>
      ${philosophySection}
      ${recruitingSection}
      ${schemeSection}
      <button class="btn btn-primary btn-block" data-action="begin-season" ${canBegin ? "" : "disabled"}>Begin Season</button>
    </div>`;
}

/* ==========================================================================
   In-season dilemmas
   ========================================================================== */

function renderDilemmaScreen(state) {
  if (App.awaitingContinue && state.dilemmaLog.length) {
    const last = state.dilemmaLog[state.dilemmaLog.length - 1];
    const resultLabel = last.win ? "WIN" : "LOSS";
    return `
      <div class="screen">
        <div class="panel event-panel">
          <h2>${escapeHtml(last.title)}</h2>
          <p class="muted">You chose: <strong>${escapeHtml(last.choiceLabel)}</strong></p>
          <p>${escapeHtml(last.outcome)}</p>
          <div class="game-result game-result--${last.win ? "win" : "loss"}">
            <div class="game-result__label">Week ${last.week} vs ${escapeHtml(last.opponent)}</div>
            <div class="game-result__score">${resultLabel} ${last.us}-${last.them}</div>
          </div>
          <button class="btn btn-primary btn-block" data-action="dilemma-continue">Continue</button>
        </div>
      </div>`;
  }

  const event = currentDilemma(state);
  if (!event) {
    return `<div class="screen"><div class="panel"><p>Resolving the season...</p></div></div>`;
  }
  const plan = state.weekPlan[state.currentWeek];
  const ctx = dilemmaContext(state);
  const text = event.text(ctx);

  const choices = event.choices.map((c, i) => {
    const tags = describeEffects(c.effects).map((t) => `<span class="effect-pill ${t.positive ? "effect-pill--pos" : "effect-pill--neg"}">${escapeHtml(t.text)}</span>`).join("");
    return `
    <button class="btn btn-choice" data-action="dilemma-choice" data-index="${i}">
      <div class="btn-choice__label">${escapeHtml(c.label)}</div>
      <div class="btn-choice__tags">${tags}</div>
    </button>`;
  }).join("");

  return `
    <div class="screen">
      <div class="panel event-panel">
        <div class="muted">Week ${plan.week} of ${GAMES_PER_SEASON} &middot; vs ${escapeHtml(plan.opponent)}</div>
        <h2>${escapeHtml(event.title)}</h2>
        <p>${escapeHtml(text)}</p>
        <div class="choice-stack">${choices}</div>
      </div>
    </div>`;
}

/* ==========================================================================
   Recap
   ========================================================================== */

function renderRecap(state) {
  const r = state.lastSeasonResult;
  const newAchievements = state.achievements.filter((a) => !(state.achievementsSnapshot || []).includes(a));
  const achievementsHtml = newAchievements.length ? `
    <div class="achievement-list">
      ${newAchievements.map((id) => {
        const a = ACHIEVEMENTS.find((x) => x.id === id);
        return `<div class="achievement-badge">🏆 ${escapeHtml(a ? a.label : id)}</div>`;
      }).join("")}
    </div>` : "";

  const dilemmaByWeek = {};
  state.dilemmaLog.forEach((d) => { dilemmaByWeek[d.week] = d; });

  const gameRows = r.weekResults.map((w) => {
    const d = dilemmaByWeek[w.week];
    const resultClass = w.win ? "result-win" : "result-loss";
    const note = d ? `${escapeHtml(d.title)}: ${escapeHtml(d.choiceLabel)}` : `<span class="muted">&mdash;</span>`;
    return `<tr><td>${w.week}</td><td>${escapeHtml(w.opponent)}</td><td class="${resultClass}">${w.win ? "W" : "L"} ${w.us}-${w.them}</td><td>${note}</td></tr>`;
  }).join("");

  const logHtml = state.dilemmaLog.map((d) => `
    <li><strong>${escapeHtml(d.title)}</strong> (Week ${d.week} vs ${escapeHtml(d.opponent)}): ${escapeHtml(d.choiceLabel)} — <span class="muted">${escapeHtml(d.outcome)}</span> <span class="${d.win ? "result-win" : "result-loss"}">${d.win ? "W" : "L"} ${d.us}-${d.them}</span></li>
  `).join("");

  return `
    <div class="screen">
      <h1 class="screen-title">${r.year} Season Recap</h1>
      <div class="panel recap-panel">
        <div class="recap-record">${r.wins}-${r.losses}</div>
        <div class="recap-postseason">${escapeHtml(r.postseason.label)}</div>
        ${achievementsHtml}
      </div>
      <div class="panel">
        <h2>Decisions That Shaped the Season</h2>
        <ul class="storyline-list">${logHtml}</ul>
      </div>
      <div class="panel">
        <h2>Full Game Log</h2>
        <div class="history-panel__scroll">
          <table class="history-table">
            <thead><tr><th>Wk</th><th>Opponent</th><th>Result</th><th>Decision</th></tr></thead>
            <tbody>${gameRows}</tbody>
          </table>
        </div>
      </div>
      <button class="btn btn-primary btn-block" data-action="continue-to-offseason">Continue to Offseason</button>
    </div>`;
}

/* ==========================================================================
   Offseason / job market
   ========================================================================== */

function renderOffseason(state) {
  const offers = state.lastOffers || [];
  const banner = state.wasFired
    ? `<div class="panel banner banner--danger"><strong>You were let go.</strong> Time to find your next job.</div>`
    : `<div class="panel banner">Offseason — decide your next move.</div>`;

  if (!offers.length) {
    return `
      <div class="screen">
        <h1 class="screen-title">Offseason — ${state.year}</h1>
        ${banner}
        <div class="panel">
          <p>No program is willing to hire you right now. Your coaching career has come to an end.</p>
          <button class="btn btn-primary btn-block" data-action="retire-now">See Career Retrospective</button>
        </div>
      </div>`;
  }

  const cards = offers.map((o) => {
    const school = getSchool(o.school);
    const gradient = teamGradient(o.school);
    const conf = school ? (CONFERENCE_NAMES[school.conference] || school.conference) : "";
    const tier = school ? prestigeLabel(school.startingPrestige) : "";
    const kindLabel = o.kind === "stay" ? "Stay" : o.kind === "promotion" ? "Promotion" : "Lateral Move";
    return `
      <div class="offer-card">
        <div class="offer-card__banner" style="background:${gradient}"></div>
        <div class="offer-card__body">
          <div class="offer-card__kind offer-card__kind--${o.kind}">${kindLabel}</div>
          <div class="offer-card__title">${escapeHtml(o.title)}</div>
          <div class="offer-card__school">${escapeHtml(o.school)}</div>
          <div class="offer-card__meta muted">${escapeHtml(conf)} &middot; ${tier}</div>
          <button class="btn btn-primary btn-block" data-action="accept-offer" data-offer-id="${o.id}">${o.kind === "stay" ? "Stay Here" : "Accept Job"}</button>
        </div>
      </div>`;
  }).join("");

  return `
    <div class="screen">
      <h1 class="screen-title">Offseason — ${state.year}</h1>
      ${banner}
      <div class="offer-grid">${cards}</div>
      <button class="btn btn-ghost btn-block" data-action="retire-now">Retire Instead</button>
    </div>`;
}

/* ==========================================================================
   Retirement / career summary
   ========================================================================== */

function renderRetired(state) {
  const score = computeLegacyScore(state);
  const earned = new Set(state.achievements);
  const badges = ACHIEVEMENTS.map((a) => `
    <div class="achievement-badge ${earned.has(a.id) ? "" : "achievement-badge--locked"}">
      <div class="achievement-badge__icon">${earned.has(a.id) ? "🏆" : "🔒"}</div>
      <div>
        <div class="achievement-badge__label">${escapeHtml(a.label)}</div>
        <div class="achievement-badge__desc muted">${escapeHtml(a.description)}</div>
      </div>
    </div>`).join("");

  const rows = [...state.history].reverse().map((h) => `
    <tr><td>${h.year}</td><td>${escapeHtml(h.school)}</td><td>${escapeHtml(h.title)}</td><td>${h.record}</td><td>${escapeHtml(h.note)}</td></tr>
  `).join("");

  return `
    <div class="screen retired-screen">
      <h1 class="screen-title">Career Retrospective</h1>
      <div class="panel recap-panel">
        <div class="muted">Coach ${escapeHtml(state.coachName)}</div>
        <div class="recap-record">${score}</div>
        <div class="muted">Legacy Score</div>
        <p>${state.seasonsTotal} seasons &middot; retired as ${escapeHtml(STAGE_LABELS[state.stage])} at ${escapeHtml(state.school)}, age ${state.age}</p>
        ${careerTotalsStripHtml(state)}
      </div>
      <div class="panel">
        <h2>Achievements</h2>
        <div class="achievement-grid">${badges}</div>
      </div>
      <div class="panel">
        <h2>Career Stops</h2>
        <div class="history-panel__scroll">${careerStopsTableHtml(state)}</div>
      </div>
      <div class="panel">
        <h2>Full Career</h2>
        <div class="history-panel__scroll">
          <table class="history-table">
            <thead><tr><th>Year</th><th>School</th><th>Title</th><th>Record</th><th>Result</th></tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>
      <button class="btn btn-primary btn-block" data-action="new-career-after-retirement">Start New Career</button>
    </div>`;
}
