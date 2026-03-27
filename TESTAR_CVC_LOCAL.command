#!/bin/zsh
set -euo pipefail

SCRIPT_DIR="${0:a:h}"
cd "$SCRIPT_DIR"

exec python3 tools/smoke_test_bundle.py "$@"
