#!/usr/bin/env python3
"""Serve the canonical CVC bundle locally with an optional browser launch."""

from __future__ import annotations

import argparse
import contextlib
import socket
import sys
import webbrowser
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


WORKSPACE_ROOT = Path(__file__).resolve().parents[1]
BUNDLE_ROOT = WORKSPACE_ROOT / "project" / "cvc_academy_v20_premium_dual_layer"


def build_handler(directory: Path, quiet: bool = False):
    """Return a request handler locked to the bundle root."""

    class BundleHandler(SimpleHTTPRequestHandler):
        def __init__(self, *args, **kwargs):
            super().__init__(*args, directory=str(directory), **kwargs)

        def log_message(self, format: str, *args) -> None:
            if quiet:
                return
            super().log_message(format, *args)

    return BundleHandler


def reserve_port(host: str, preferred_port: int, attempts: int = 20) -> int:
    """Pick a port, walking upward if the preferred one is busy."""

    for port in range(preferred_port, preferred_port + max(1, attempts)):
        with contextlib.closing(socket.socket(socket.AF_INET, socket.SOCK_STREAM)) as sock:
            sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            if sock.connect_ex((host, port)) != 0:
                return port
    raise RuntimeError(f"No free port found from {preferred_port} to {preferred_port + attempts - 1}.")


def create_server(host: str = "127.0.0.1", port: int = 8765, quiet: bool = False):
    """Create an HTTP server bound to the canonical bundle root."""

    if not BUNDLE_ROOT.exists():
        raise FileNotFoundError(f"Bundle root not found: {BUNDLE_ROOT}")

    actual_port = reserve_port(host, port) if port else 0
    handler = build_handler(BUNDLE_ROOT, quiet=quiet)
    server = ThreadingHTTPServer((host, actual_port), handler)
    return server, server.server_port


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Serve the canonical CVC bundle locally.")
    parser.add_argument("--host", default="127.0.0.1", help="Host to bind. Default: 127.0.0.1")
    parser.add_argument("--port", type=int, default=8765, help="Preferred port. Default: 8765")
    parser.add_argument("--no-open", action="store_true", help="Do not try to open the browser.")
    parser.add_argument("--quiet", action="store_true", help="Reduce HTTP request logging.")
    return parser.parse_args()


def print_banner(host: str, port: int) -> None:
    base_url = f"http://{host}:{port}"
    print("")
    print("CVC Academy local server is live.")
    print(f"Bundle root: {BUNDLE_ROOT}")
    print(f"Base URL:    {base_url}/")
    print(f"Home:        {base_url}/index.html")
    print(f"Dashboard:   {base_url}/pages/dashboard-alpha.html")
    print(f"Arena:       {base_url}/pages/training-arena.html")
    print("")
    print("Keep this terminal open. Press Ctrl-C to stop the server.")
    print("")


def maybe_open_browser(host: str, port: int, no_open: bool) -> None:
    if no_open:
        return
    target = f"http://{host}:{port}/index.html"
    try:
        webbrowser.open(target)
    except Exception:
        print(f"Browser launch skipped. Open this URL manually: {target}")


def main() -> int:
    args = parse_args()
    try:
        server, actual_port = create_server(host=args.host, port=args.port, quiet=args.quiet)
    except Exception as error:
        print(f"Failed to start local server: {error}", file=sys.stderr)
        return 1

    print_banner(args.host, actual_port)
    maybe_open_browser(args.host, actual_port, args.no_open)

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("")
        print("CVC Academy local server stopped.")
    finally:
        server.server_close()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
