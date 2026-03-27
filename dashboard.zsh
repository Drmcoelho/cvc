#!/bin/zsh
set -euo pipefail

SCRIPT_DIR="${0:a:h}"
cd "$SCRIPT_DIR"

echo ""
echo "CVC Academy local dashboard launcher"
echo "Workspace: $SCRIPT_DIR"
echo "Bundle:    $SCRIPT_DIR/project/cvc_academy_v20_premium_dual_layer"
echo ""
echo "This runner keeps the browser closed by default."
echo "Open the printed URL manually in your browser."
echo "Press Ctrl-C in this terminal to stop."
echo ""

exec python3 tools/run_bundle.py --no-open --quiet "$@"
