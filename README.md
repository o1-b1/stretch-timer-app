# Stretch Timer PWA v3

A polished, installable Stretch Timer for daily mobility sessions. The app is a static GitHub Pages site (HTML/CSS/JS + service worker + manifest).

## Routines (hardcoded)

### Quick routine (~9 min)
1. Left Half-Kneeling Hip Flexor — 60s
2. Right Half-Kneeling Hip Flexor — 60s
3. Left Pigeon Pose — 60s
4. Right Pigeon Pose — 60s
5. Left Hamstring Stretch — 60s
6. Right Hamstring Stretch — 60s
7. Chest Opener (Doorway) — 60s
8. Thoracic Opener (Open Book) — 60s
9. Child’s Pose — 60s

### Long routine (~20 min)
1. Left Half-Kneeling Hip Flexor — 75s
2. Right Half-Kneeling Hip Flexor — 75s
3. Left Couch Stretch — 75s
4. Right Couch Stretch — 75s
5. Left Pigeon Pose — 75s
6. Right Pigeon Pose — 75s
7. Left Hamstring Stretch — 75s
8. Right Hamstring Stretch — 75s
9. Adductor Rock-Back — 60s
10. Calf Stretch (Wall) — 60s
11. Thoracic Opener (Open Book) — 60s
12. Child’s Pose — 60s
13. Supine Spinal Twist (Left) — 60s
14. Supine Spinal Twist (Right) — 60s

## Features

- Quick/Long routine selector.
- Stretch icons shown for the current step and routine list rows.
- Theme selector: System / Light / Dark (saved in `localStorage`).
- Start/Pause, Back, Next, Restart, and Reset controls.
- Progress indicator with **Step X of Y** and percentage bar.
- Completion screen with total stretched time.
- Offline fallback page via service worker.

## Project files

- `index.html` – app UI and logic.
- `sw.js` – cache handling and offline navigation fallback.
- `offline.html` – shown when navigation fails offline.
- `manifest.json` – PWA metadata for installability.
- `404.html` – GitHub Pages redirect helper.

## Local testing

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/`.

## GitHub Pages deployment

1. Push this repo to GitHub.
2. Open **Settings → Pages**.
3. Configure:
   - **Source**: Deploy from a branch
   - **Branch**: `main` (or your deployment branch)
   - **Folder**: `/ (root)`
4. Save.

Site URL:

`https://<username>.github.io/stretch-timer-app/`
