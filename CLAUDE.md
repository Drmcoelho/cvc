# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**CVC Academy v20+** is an offline-first medical education platform focused on central venous catheter (CVC) placement and clinical decision-making. It's built with vanilla HTML/CSS/JavaScript — no framework, no build step. Content is in Portuguese (pt-BR).

The canonical bundle lives in `project/cvc_academy_v20_premium_dual_layer/`. All other top-level directories are supporting: `tools/` for Python dev utilities, `docs/` for planning/ops docs, `archive/` for legacy versions.

## Local Development

```bash
# Start local server (auto-detects port starting at 8765, opens browser)
python3 tools/run_bundle.py

# Quiet mode (no auto-open)
python3 tools/run_bundle.py --no-open
```

## Validation & Testing

```bash
# Check for broken links, missing key files
python3 tools/validate_bundle.py

# Basic HTTP health check
python3 tools/smoke_test_bundle.py

# Automated page crawl + interaction testing (generates reports in docs/qa/)
python3 tools/browser_walk_bundle.py
python3 tools/review_live_interactions.py
```

## Deployment

Push to `main` → GitHub Actions (`.github/workflows/pages.yml`) auto-deploys the bundle to GitHub Pages. No build step — the bundle is published as-is. The `.nojekyll` file disables Jekyll processing.

## Architecture

### Bundle Structure

```
project/cvc_academy_v20_premium_dual_layer/
├── index.html          # Root entry point
├── pages/              # 39 HTML pages (all content surfaces)
├── scripts/            # JavaScript (site.js, dashboard, training, search)
├── styles/site.css     # Design system (dark theme, CSS variables)
├── data/               # JSON registries (surfaces, media, cases, training)
├── assets/             # 374+ media files (images, SVGs)
├── manifest.json       # PWA manifest
├── sw.js               # Service worker (offline caching)
└── 404.html            # GitHub Pages fallback
```

### Content Model: 9-Part Series

Each part has multiple **surfaces**: reality class (core narrative), masterclass (depth), exercises, code lab, atlas, and OSCE. Parts 1–9 cover: access decisions → device selection → technique → imaging → complications → teaching → maintenance → checklist.

Surface maturity is tracked in `data/v20_surface_registry.json` with states: `absent` → `placeholder` → `partial` → `functional` → `mature`.

### Key Scripts

- **`scripts/site.js`** — Study state (favorites, completed pages, recents) stored in localStorage; no backend
- **`scripts/dashboard-alpha.js`** — Main navigation dashboard
- **`scripts/training-arena.js`** + **`training-arena-data.js`** — MCQ/V/F/OSCE training engine
- **`scripts/search-index.js`** — Full-text search data

### Data Registries (JSON)

- `data/v20_surface_registry.json` — All surfaces with routes and maturity status
- `data/v20_media_registry_seed.json` — Media assets with type, source, license, trust level
- `data/v20_case_registry.json` — Multi-step clinical case scenarios
- `data/v20_training_registry.json` — Training exercise metadata
- Part-specific media manifests: `v20_part{2-5}_boost_media_manifest.json`

### Design System

`styles/site.css` defines all CSS variables (colors, spacing, radii, shadows). Primary color: `#2563eb`. Max content width: `1380px`. Dark theme throughout.

### Offline-First

The service worker (`sw.js`) caches core assets on install and uses cache-first strategy. All user state goes to localStorage — no server calls needed for core functionality.

## Project Docs

- `codex.md` — Project identity, guiding principles, editorial rules
- `master_schema.md` — Canonical editorial structure
- `docs/foundation/roadmap.md` — 24–36 month vision
- `docs/planning/execution_matrix.md` — Operational backlog
- `docs/ops/MEGA_MVP_HANDOFF.md` — Current state summary and next cycles
