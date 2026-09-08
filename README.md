# CFB Legacy

Play through the career of a college football coach — from Position Coach
to Coordinator to Head Coach, chasing conference titles and a national
championship along the way.

Each season you pick a training focus (and, once you're calling the
game as a Coordinator or Head Coach, a recruiting emphasis, a game
philosophy, and your offensive/defensive scheme — these preseason picks
are pure, guaranteed gains with no downside, by design), then play
through a real week-by-week schedule against named opponents.

As a Coordinator or Head Coach, most weeks (6-9 out of 12) bring a live
in-game tactical decision: 3rd-and-long (run or pass), 4th-and-short (go
for it or punt), a big defensive snap (blitz, zone, or man), a trick play
that's sat in the playbook all year, a rivalry-game identity call. These
aren't scripted — each choice is graded by a real calculation comparing
your team's passing/running/special-teams/composure rating (built from
your scheme, coach stats, and team talent) against that week's actual
opponent, so the same call can succeed on a mismatch and fail against a
tougher team. A handful of weeks (3) bring an off-field dilemma instead —
recruiting, a locker-room situation, a media moment — and every one of
those has a genuine cost and benefit on both sides, never a free win.
Position Coaches don't call plays, so their decisions are all off-field
(5 a season). Every offseason you either stay, get poached by another
program, earn a promotion, or — if the record was bad enough — get shown
the door and have to find your next job.

The postseason is modeled on the real 12-team CFP: a strong regular
season earns a Conference Championship Game, the conference champion
with an elite record gets a first-round bye, everyone else who qualifies
plays into the bracket, and anyone bowl-eligible who misses the playoff
plays one bowl game — every one of those games is simulated and counted,
so a season's final record always reconciles (12 regular-season games
plus however many postseason games were actually played). Final scores
are built from real scoring-play combinations (touchdowns, field goals,
safeties), not arbitrary numbers.

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
js/update-banner.js  "New version available" banner (no service worker needed)
```

### Update banner

There's no build step or service worker here, so new-version detection works
by re-fetching the app's own source files with the cache disabled and
comparing their ETag/Last-Modified fingerprints against what this page load
started with. It checks whenever the tab regains focus, plus a slow hourly
poll while the tab stays open, and shows a "Refresh" banner when something's
changed on the server — same UX as the Dynasty Tracker and CFB Scoreboard
update banners, just without their PWA service-worker machinery.
