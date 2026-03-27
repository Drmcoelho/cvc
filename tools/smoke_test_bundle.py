#!/usr/bin/env python3
"""Run HTTP smoke tests against the canonical CVC bundle."""

from __future__ import annotations

import threading
import time
import urllib.error
import urllib.request

from run_bundle import create_server


CHECKS = [
    ("/index.html", ["Start Here", "Abrir Dashboard Alpha"]),
    ("/pages/dashboard-alpha.html", ["Cockpit local de estudo", "Favoritos, recentes e retomada"]),
    ("/pages/training-arena.html", ["Training Arena", "feedback graduado"]),
    ("/pages/v20-graphics-catalog.html", ["Catalogo", "Batch 4"]),
    ("/scripts/site.js", ["cvc.study.state.v1", "Salvar favorito"]),
    ("/scripts/dashboard-alpha.js", ["data-dashboard-cockpit", "Retomar arena"]),
    ("/manifest.json", ['"short_name": "CVC Academy"', '"start_url": "./index.html"']),
]


def fetch_text(url: str) -> str:
    request = urllib.request.Request(url, headers={"Cache-Control": "no-cache"})
    with urllib.request.urlopen(request, timeout=10) as response:
        if response.status != 200:
            raise RuntimeError(f"{url} returned HTTP {response.status}")
        return response.read().decode("utf-8")


def main() -> int:
    server, port = create_server(host="127.0.0.1", port=8765, quiet=True)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()

    failures = []
    print("Smoke test server started.")
    print(f"Base URL: http://127.0.0.1:{port}")
    time.sleep(0.2)

    try:
        for path, markers in CHECKS:
            url = f"http://127.0.0.1:{port}{path}"
            try:
                body = fetch_text(url)
                missing = [marker for marker in markers if marker not in body]
                if missing:
                    failures.append(f"{path} missing markers: {', '.join(missing)}")
                    print(f"FAIL {path}")
                else:
                    print(f"PASS {path}")
            except (urllib.error.URLError, RuntimeError, UnicodeDecodeError) as error:
                failures.append(f"{path} request failed: {error}")
                print(f"FAIL {path}")
    finally:
        server.shutdown()
        server.server_close()
        thread.join(timeout=2)
        print("Smoke test server stopped.")

    if failures:
        print("")
        print("Smoke test failed.")
        for item in failures:
            print(f"- {item}")
        return 1

    print("")
    print("Smoke test passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
