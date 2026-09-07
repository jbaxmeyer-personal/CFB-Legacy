# CFB Legacy

Play through the career of a college football coach — from Position Coach
to Coordinator to Head Coach, chasing conference titles and a national
championship along the way.

Each season you pick a training focus (and, once you're calling the
game as a Coordinator or Head Coach, a recruiting emphasis, a game
philosophy, and your offensive/defensive scheme), then play through a
real week-by-week schedule against named opponents. About five weeks a
season bring a narrative dilemma — every choice shows its real tradeoffs
up front (no choice is a free lunch), and the outcome plays out directly
in that week's score. Every offseason you either stay, get poached by
another program, earn a promotion, or — if the record was bad enough —
get shown the door and have to find your next job.

As a Coordinator or Head Coach, 3-6 weeks a season also bring a live
in-game tactical decision — 3rd-and-long, a goal-line stand, an onside
kick, a rivalry composure check. These aren't scripted: each choice is
graded by a real calculation comparing your team's passing/running/
special-teams/composure rating (built from your scheme, coach stats, and
team talent) against that week's actual opponent. The same call can
succeed on a mismatch and fail against a tougher team — nothing here is
predetermined.

Your full coaching history is tracked: a career-stops table (school,
title, years, seasons, cumulative record) plus career totals (bowl
record, conference titles, playoff trips, national titles), visible in
the header's history panel throughout and on the final career
retrospective.

Installing a new scheme costs you an installation penalty that season;
sticking with one for two-plus seasons builds a mastery bonus instead —
so scheme choice is a real long-term-vs-short-term tradeoff, not just
flavor text.

Schools, conferences, and starting prestige are sourced from the
[Dynasty Tracker](https://github.com/jbaxmeyer-personal/Dynasty-Tracker)
project's canonical school list, so the game world lines up with that
app's 138-team roster.

It's a static site — plain HTML/CSS/JS, no build step, no backend.
Progress saves to your browser's `localStorage`.

## Running locally

Just open `index.html` in a browser, or serve the folder with any static
file server, e.g.:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Push this repo to GitHub (already done if you're reading this from there).
2. In the repo settings, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a branch".
4. Set **Branch** to `main` (or whichever branch this lives on) and folder to `/ (root)`.
5. Save — GitHub will publish the site at `https://<username>.github.io/<repo-name>/`.

No further configuration is needed since this is a plain static site.

## Project structure

```
index.html        Page shell
css/style.css      Theme (dark, matches the Dynasty Tracker / CFB Scoreboard look)
js/data.js         Schools, conferences, dilemma events, game moments, achievements
js/engine.js       Game state machine (career creation, season sim, job market)
js/ui.js           Screen rendering
js/main.js         Event wiring + bootstrap
```
