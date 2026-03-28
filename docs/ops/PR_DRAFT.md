# PR Draft

## Suggested title

`Bootstrap CVC Academy mega MVP bundle, local runners, and QA workflow`

## Summary

This PR turns the current CVC Academy workspace into a deliverable mega MVP bundle with:

- a canonical offline-first HTML package
- local dashboard and training runtime
- persistent study state with favorites, completion, recents, and resume flow
- premium, atlas, cases, teacher mode, and dashboard alpha wired into the same bundle
- real open media batches registered and exposed in training and catalog surfaces
- simple launchers for offline and HTTP-local use
- repeatable validation through structural, smoke, and browser-walk QA tools

## What changed

### Product surfaces

- stabilized the canonical bundle under `project/cvc_academy_v20_premium_dual_layer`
- upgraded `dashboard-alpha` into a study cockpit
- connected `training-arena` to local memory and dashboard state
- added root launchers for offline and terminal-based local use

### Runtime and tooling

- added `tools/run_bundle.py`
- added `tools/smoke_test_bundle.py`
- added `tools/browser_walk_bundle.py`
- added `dashboard.zsh`
- added root `index.html` launcher
- added `.command` entrypoints for local open and smoke test

### Documentation and governance

- updated `docs/foundation/codex.md`, `docs/foundation/roadmap.md`, `docs/foundation/master_schema.md`, and `docs/planning/execution_matrix.md`
- added `docs/ops/MEGA_MVP_HANDOFF.md`
- added `docs/ops/RUN_LOCAL.md`
- documented PR continuity policy in `docs/foundation/codex.md`

## Testing

### Structural

- `python3 tools/validate_bundle.py`

### Smoke

- `python3 tools/smoke_test_bundle.py`

### Browser walk

- `python3 tools/browser_walk_bundle.py --browser safari`

## Current limitations

- dashboard still lacks deep filters by Part, domain, failure, and maturity
- local study state does not yet export/import across browsers
- app-readiness for Mac and iOS is still open
- protocol for first-party anonymized media ingestion is still open

## Follow-up PR

Per `docs/foundation/codex.md`, the next coherent work cycle should open a new PR instead of extending this one, unless explicitly requested otherwise.
