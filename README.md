# Stretch Timer PWA v3

A polished, installable Stretch Timer for daily mobility sessions. The app is a static GitHub Pages site (HTML/CSS/JS + service worker + manifest) with:

- Sticky app-like header with current stretch and total remaining time.
- Thumb-friendly controls (Back / Start-Pause / Next / Restart).
- Clearly visible **Quick Stretch Mode** toggle.
- Routine customization (move steps up/down + edit durations in seconds).
- Persistent preferences in `localStorage`.
- Progress indicator with **Step X of Y** + percentage bar.
- Completion screen with total time stretched.
- Optional dark theme toggle that also respects `prefers-color-scheme`.
- Haptics on step completion (when supported) and optional WebAudio beep.
- Offline fallback page via service worker.

## Project files

- `index.html` – app UI and logic.
- `sw.js` – cache handling and offline navigation fallback.
- `offline.html` – shown when navigation fails offline.
- `manifest.json` – PWA metadata for installability.
- `404.html` – GitHub Pages redirect helper.

## Local testing

Run a local static server from the repo root:

```bash
python3 -m http.server 8000
```

Open:

- Main app: `http://localhost:8000/`
- (Optional) PWA checks in Chromium DevTools → Application (Manifest + Service Workers)

## GitHub Pages deployment

1. Push this repo to GitHub.
2. Open **Settings → Pages**.
3. Configure:
   - **Source**: Deploy from a branch
   - **Branch**: `main` (or your deployment branch)
   - **Folder**: `/ (root)`
4. Save.

Your site URL will be:

`https://<username>.github.io/stretch-timer-app/`

> Replace `<username>` with your GitHub username.

## Add to Home Screen

### iPhone / iPad (Safari)

1. Open the app URL in Safari.
2. Tap **Share**.
3. Tap **Add to Home Screen**.
4. Confirm the name and tap **Add**.

### Android (Chrome)

1. Open the app URL in Chrome.
2. Tap the browser menu (`⋮`).
3. Tap **Install app** or **Add to Home screen**.
4. Confirm installation.

## PWA behavior notes

- `index.html` is **not precached**.
- Navigations use a **network-first** strategy.
- When offline and navigation fails, the app serves `offline.html`.
- Manifest intentionally has no icons yet (add later when ready).
