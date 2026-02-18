# Stretch Timer PWA (vNext)

A polished, installable Stretch Timer for daily mobility sessions. It remains a fully static GitHub Pages app (HTML/CSS/JS + manifest + service worker).

## What’s improved in vNext

- Timer-first layout that fits iPhone screens without requiring scrolling on first load.
- Better touch ergonomics (larger touch targets, spacing, pressed states, soft transitions).
- Accessible routine segmented control (keyboard arrows + proper ARIA radio semantics).
- Theme selector (System / Light / Dark) persisted in local storage.
- Routine preview drawer with the next 3 upcoming stretches.
- Safe duration editing UI per routine with reset-to-default support.
- Hidden diagnostics panel (toggle via long-press on title or `i` button).
- Service worker update flow with in-app **Update available** banner.
- Cache strategy designed to reduce stale shell behavior after deploys.

## PWA + GitHub Pages setup

This repository assumes a **project Pages** URL such as:

`https://<username>.github.io/stretch-timer-app/`

Manifest values are configured for this path:

- `start_url`: `/stretch-timer-app/`
- `scope`: `/stretch-timer-app/`
- `display`: `standalone`

If your repo name changes, update `manifest.json` to match the new project path.

## Local testing

Run a static server from repo root:

```bash
python3 -m http.server 8000
```

Open:

- `http://localhost:8000/`

Service worker tests are more realistic over HTTPS (GitHub Pages), but local behavior still validates core flow.

## iPhone Add to Home Screen (A2HS)

1. Open the deployed GitHub Pages URL in Safari.
2. Tap **Share**.
3. Tap **Add to Home Screen**.
4. Launch from the created app icon.

Expected behavior:

- App opens in standalone mode.
- Theme and routine settings persist.
- Offline shell still opens after first successful visit.

## Update behavior (stale-cache prevention)

Service worker strategy:

- **Navigation requests**: network-first (`index.html`), fallback to cached shell, then offline page.
- **Static/same-origin assets**: cache-first with runtime fill.
- Old cache versions are removed on activate.

When a new service worker is installed and waiting, the app shows an **Update available** banner.
Tap **Reload** to activate the new worker and refresh to latest files.

## Routine + settings reset

- **Reset routine** button: resets current routine progress to step 1.
- **Reset durations to defaults** button (Settings): restores default durations for quick + long routines.
- To fully clear all persisted state manually, clear site storage in browser settings.

## Project files

- `index.html` – app UI, interaction logic, routine management, settings, diagnostics, SW update banner.
- `sw.js` – cache/version strategy and fetch handling.
- `manifest.json` – install metadata for project GitHub Pages path.
- `404.html` – GitHub Pages redirect helper.
- `offline.html` – fallback page when navigation cannot be fulfilled.
