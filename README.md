# Stretch Timer PWA (GitHub Pages Static Site)

A clean, static Stretch Timer app built with only:

- `index.html`
- `manifest.json`
- `sw.js`
- `404.html`

## Features

- Big, easy-to-read timer.
- Controls: **Start/Pause**, **Next**, **Back**, **Reset**.
- Auto-advance toggle.
- **Full routine** and **Quick mode**.
- Settings persisted in `localStorage`.
- iOS-friendly top-aligned layout (no vertical centering).
- Service worker strategy that avoids caching `index.html` and uses network-first navigation handling.

## Local run

```bash
python3 -m http.server 8000
```

Open: `http://localhost:8000/`

## Deploy to GitHub Pages

1. Push to GitHub.
2. Go to **Settings → Pages**.
3. Set:
   - **Source**: Deploy from a branch
   - **Branch**: `main` (or your deployment branch)
   - **Folder**: `/ (root)`
4. Save.

Site URL will be:

`https://<username>.github.io/<repo-name>/`

## PWA notes

- `manifest.json` intentionally has **no `icons` section** right now.
- `index.html` intentionally does **not** reference `apple-touch-icon`.
- Navigations are fetched from network first in `sw.js`; HTML shell is not cached as a static asset.
