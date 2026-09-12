/* ==========================================================================
   CFB Legacy — bootstrap & event wiring
   ========================================================================== */

function setDraftField(path, value) {
  const parts = path.split(".");
  let target = App;
  for (let i = 0; i < parts.length - 1; i++) {
    target = target[parts[i]];
    if (!target) return;
  }
  target[parts[parts.length - 1]] = value;
}

function handleChange(e) {
  const field = e.target.getAttribute("data-field");
  if (!field) return;
  const value = e.target.value;
  setDraftField(field, value);
  renderApp();
}

function handleClick(e) {
  const btn = e.target.closest("[data-action]");
  if (!btn || btn.disabled) return;
  const action = btn.getAttribute("data-action");

  switch (action) {
    case "create-career": {
      const name = App.formName.trim();
      if (!name) return;
      App.state = newCareer(name, App.formArchetype);
      App.draft = null;
      renderApp();
      break;
    }
    case "continue-career": {
      const saved = loadSave();
      if (saved) App.state = saved;
      renderApp();
      break;
    }
    case "start-over": {
      if (confirm("Start over? Your saved career will be erased.")) {
        clearSave();
        App.state = null;
        App.formName = "";
      }
      renderApp();
      break;
    }
    case "begin-season": {
      const draft = App.draft;
      setPreseasonChoices(App.state, {
        trainingFocusId: draft.trainingFocusId,
        philosophy: draft.philosophy,
        recruitingFocusId: draft.recruitingFocusId,
        offenseSchemeId: draft.offenseSchemeId,
        defenseSchemeId: draft.defenseSchemeId,
      });
      App.awaitingContinue = false;
      renderApp();
      break;
    }
    case "dilemma-choice": {
      const index = parseInt(btn.getAttribute("data-index"), 10);
      resolveDilemma(App.state, index);
      App.awaitingContinue = true;
      App.lastResolvedType = "dilemma";
      renderApp();
      break;
    }
    case "moment-choice": {
      const index = parseInt(btn.getAttribute("data-index"), 10);
      resolveGameMoment(App.state, index);
      App.awaitingContinue = true;
      App.lastResolvedType = "moment";
      renderApp();
      break;
    }
    case "postseason-choice": {
      const index = parseInt(btn.getAttribute("data-index"), 10);
      resolvePostseasonMoment(App.state, index);
      App.awaitingContinue = true;
      renderApp();
      break;
    }
    case "dilemma-continue": {
      App.awaitingContinue = false;
      if (App.state.phase === "postseason") continuePostseason(App.state);
      else if (App.state.phase === "inseason" && App.state.regularSeasonComplete) beginPostseason(App.state);
      renderApp();
      break;
    }
    case "continue-to-offseason": {
      beginOffseason(App.state);
      renderApp();
      break;
    }
    case "accept-offer": {
      const offerId = btn.getAttribute("data-offer-id");
      acceptOffer(App.state, offerId);
      App.draft = null;
      renderApp();
      break;
    }
    case "retire-now": {
      if (App.state.lastOffers && App.state.lastOffers.length && !confirm("Retire now and end your career?")) return;
      retire(App.state);
      renderApp();
      break;
    }
    case "new-career-after-retirement": {
      clearSave();
      App.state = null;
      App.draft = null;
      App.formName = "";
      App.awaitingContinue = false;
      renderApp();
      break;
    }
  }
}

function init() {
  const root = document.getElementById("app");
  root.addEventListener("click", handleClick);
  root.addEventListener("change", handleChange);
  root.addEventListener("input", (e) => {
    if (e.target.id === "coach-name-input") {
      App.formName = e.target.value;
      const btn = document.querySelector('[data-action="create-career"]');
      if (btn) btn.disabled = !App.formName.trim();
    }
  });

  renderApp();
}

document.addEventListener("DOMContentLoaded", init);
