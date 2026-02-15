# Stretch Timer (Static + GitHub Pages + PWA)

A single-page stretch timer built with vanilla HTML/CSS/JS for your “undo sitting + recover” routine.

## Run locally on Mac

1. Open Terminal and go to this repo folder.
2. Start a local server:

```bash
python3 -m http.server 8000
```

3. Open in Safari or Chrome:

- http://localhost:8000/

## Verify core behavior

- Start button, timer, and controls are visible immediately (top aligned).
- Start/Pause, Prev/Next, Reset all work.
- Timer auto-advances at 0.
- Remaining total time updates.
- Tapping a step jumps to that step.
- Vibration toggle works where supported and fails gracefully where unsupported.

## Deploy to GitHub Pages (main branch, root)

1. Push this repo to GitHub.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, set:
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Save and wait for deployment.

Your site URL will be:

- `https://<your-github-username>.github.io/<repo-name>/`

## iPhone Safari + Add to Home Screen

1. Open the GitHub Pages URL in iPhone Safari.
2. Tap the Share button.
3. Tap **Add to Home Screen**.
4. Launch from Home Screen to run as a standalone app.

## Notes on reliability

- The service worker intentionally does **not** cache app HTML navigations (including `index.html`) to avoid stale/blank-page issues.
- It only caches safe static assets with a versioned cache key.

## Icon placeholders

This repo references icon filenames only and does not commit binary icon assets. Upload these files when ready:

- `apple-touch-icon.png`
- `icon-192.png`
- `icon-512.png`
