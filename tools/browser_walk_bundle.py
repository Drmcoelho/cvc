#!/usr/bin/env python3
"""Browser-driven walkthrough of the canonical CVC bundle or published Pages site."""

from __future__ import annotations

import argparse
import contextlib
import html
import json
import re
import subprocess
import sys
import threading
import time
import urllib.error
import urllib.request
from dataclasses import dataclass
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

from run_bundle import BUNDLE_ROOT


WORKSPACE_ROOT = Path(__file__).resolve().parents[1]
REPORT_DEFAULT = WORKSPACE_ROOT / "docs" / "qa" / "browser_walk_report.md"
LIVE_REPORT_DEFAULT = WORKSPACE_ROOT / "docs" / "qa" / "browser_walk_live_report.md"
CHROME_BINARY = Path("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome")


@dataclass
class PageResult:
    path: str
    title: str
    ready_state: str
    runtime_ok: bool
    topbar_ok: bool
    broken_images: list[str]
    hero_present: bool
    body_length: int
    error: str | None = None


def build_workspace_handler() -> type[SimpleHTTPRequestHandler]:
    class WorkspaceHandler(SimpleHTTPRequestHandler):
        def __init__(self, *args, **kwargs):
            super().__init__(*args, directory=str(WORKSPACE_ROOT), **kwargs)

        def log_message(self, format: str, *args) -> None:
            return

    return WorkspaceHandler


class QuietThreadingHTTPServer(ThreadingHTTPServer):
    def handle_error(self, request, client_address) -> None:
        error_type, error, _ = sys.exc_info()
        if error_type is BrokenPipeError or isinstance(error, BrokenPipeError):
            return
        super().handle_error(request, client_address)


def reserve_port(host: str, preferred_port: int, attempts: int = 20) -> int:
    import socket

    for port in range(preferred_port, preferred_port + max(1, attempts)):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
            sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            if sock.connect_ex((host, port)) != 0:
                return port
    raise RuntimeError(f"No free port from {preferred_port} to {preferred_port + attempts - 1}.")


def build_page_list(include_workspace_index: bool) -> list[str]:
    pages = []
    if include_workspace_index:
        pages.append("/index.html")

    pages.append("/project/cvc_academy_v20_premium_dual_layer/index.html")
    for page in sorted((BUNDLE_ROOT / "pages").glob("*.html")):
        pages.append("/project/cvc_academy_v20_premium_dual_layer/pages/" + page.name)
    return pages


def build_live_page_list(include_404: bool) -> list[str]:
    pages = ["/", "/index.html"]
    for page in sorted((BUNDLE_ROOT / "pages").glob("*.html")):
        pages.append("/pages/" + page.name)
    if include_404:
        pages.append("/404.html")
    return pages


def start_workspace_server(host: str, port: int) -> tuple[ThreadingHTTPServer, int, threading.Thread]:
    handler = build_workspace_handler()
    actual_port = reserve_port(host, port)
    server = QuietThreadingHTTPServer((host, actual_port), handler)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    return server, actual_port, thread


def wait_for_http(url: str, timeout_seconds: float = 10.0) -> None:
    deadline = time.time() + timeout_seconds
    while time.time() < deadline:
        try:
            with urllib.request.urlopen(url, timeout=1):
                return
        except Exception:
            time.sleep(0.2)
    raise RuntimeError(f"Timed out waiting for {url}")


def request_json(method: str, url: str, payload: dict | None = None) -> dict:
    data = None
    headers = {}
    if payload is not None:
        data = json.dumps(payload).encode("utf-8")
        headers["Content-Type"] = "application/json"
    request = urllib.request.Request(url, data=data, headers=headers, method=method)
    try:
        with urllib.request.urlopen(request, timeout=20) as response:
            return json.loads(response.read().decode("utf-8"))
    except urllib.error.HTTPError as error:
        body = error.read().decode("utf-8", errors="replace")
        raise RuntimeError(f"HTTP {error.code} for {url}: {body}") from error


def start_safaridriver(port: int) -> subprocess.Popen[str]:
    return subprocess.Popen(
        ["safaridriver", "-p", str(port)],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
    )


def wait_for_webdriver(host: str, port: int, timeout_seconds: float = 10.0) -> None:
    status_url = f"http://{host}:{port}/status"
    deadline = time.time() + timeout_seconds
    while time.time() < deadline:
        try:
            response = request_json("GET", status_url)
            if response.get("value", {}).get("ready") is True:
                return
        except Exception:
            time.sleep(0.2)
    raise RuntimeError("Timed out waiting for safaridriver.")


def create_session(host: str, port: int) -> str:
    response = request_json(
        "POST",
        f"http://{host}:{port}/session",
        {
            "capabilities": {
                "alwaysMatch": {
                    "browserName": "safari",
                    "acceptInsecureCerts": True
                }
            }
        },
    )
    session_id = response.get("sessionId") or response.get("value", {}).get("sessionId")
    if not session_id:
        raise RuntimeError(f"Could not create Safari session: {response}")
    return session_id


def webdriver_script(host: str, port: int, session_id: str, script: str, args: list | None = None):
    response = request_json(
        "POST",
        f"http://{host}:{port}/session/{session_id}/execute/sync",
        {"script": script, "args": args or []},
    )
    return response.get("value")


def webdriver_navigate(host: str, port: int, session_id: str, url: str) -> None:
    request_json("POST", f"http://{host}:{port}/session/{session_id}/url", {"url": url})


def webdriver_delete_session(host: str, port: int, session_id: str) -> None:
    request_json("DELETE", f"http://{host}:{port}/session/{session_id}")


def inspect_page(host: str, port: int, session_id: str, url: str, path: str) -> PageResult:
    webdriver_navigate(host, port, session_id, url)

    deadline = time.time() + 12
    while time.time() < deadline:
        ready_state = webdriver_script(host, port, session_id, "return document.readyState;")
        if ready_state == "complete":
            break
        time.sleep(0.2)

    time.sleep(0.25)
    payload = webdriver_script(
        host,
        port,
        session_id,
        """
        const broken = Array.from(document.images)
          .filter((img) => img.complete && img.naturalWidth === 0)
          .map((img) => img.currentSrc || img.src || img.alt || 'unknown');
        return {
          title: document.title || '',
          readyState: document.readyState,
          runtimeOk: Boolean(window.CVC_DATA || window.CVC_TRAINING_ARENA || window.CVC_STUDY),
          topbarOk: document.querySelectorAll('.primary-nav a').length > 0 || document.querySelectorAll('.brand-lockup').length > 0,
          heroPresent: Boolean(document.querySelector('.hero, .page-hero')),
          bodyLength: (document.body && document.body.innerText ? document.body.innerText.trim().length : 0),
          brokenImages: broken
        };
        """,
    )

    return PageResult(
        path=path,
        title=payload.get("title", ""),
        ready_state=payload.get("readyState", ""),
        runtime_ok=bool(payload.get("runtimeOk")),
        topbar_ok=bool(payload.get("topbarOk")),
        broken_images=list(payload.get("brokenImages", [])),
        hero_present=bool(payload.get("heroPresent")),
        body_length=int(payload.get("bodyLength", 0)),
    )


def strip_tags(text: str) -> str:
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", html.unescape(text))).strip()


def inspect_page_with_chrome(url: str, path: str) -> PageResult:
    if not CHROME_BINARY.exists():
        raise RuntimeError(f"Chrome binary not found: {CHROME_BINARY}")

    result = subprocess.run(
        [
            str(CHROME_BINARY),
            "--headless=new",
            "--disable-gpu",
            "--no-sandbox",
            "--virtual-time-budget=5000",
            "--dump-dom",
            url,
        ],
        capture_output=True,
        text=True,
        timeout=30,
    )

    stderr = (result.stderr or "").strip()
    if result.returncode != 0:
        raise RuntimeError(stderr or f"Chrome exited with code {result.returncode}")

    dom = result.stdout or ""
    title_match = re.search(r"<title>(.*?)</title>", dom, re.IGNORECASE | re.DOTALL)
    title = html.unescape(title_match.group(1).strip()) if title_match else ""
    body_text = strip_tags(dom)
    topbar_ok = bool(re.search(r'<nav class="primary-nav">\s*<a ', dom))
    hero_present = 'class="hero"' in dom or 'class="page-hero"' in dom
    runtime_ok = bool(
        re.search(r'<nav class="primary-nav">\s*<a ', dom)
        or 'data-dashboard-cockpit"><div class="stats-grid"' in dom
        or 'data-dashboard-training"><div class="stats-grid"' in dom
        or 'page-state' in dom
    )

    return PageResult(
        path=path,
        title=title,
        ready_state="complete",
        runtime_ok=runtime_ok,
        topbar_ok=topbar_ok,
        broken_images=[],
        hero_present=hero_present,
        body_length=len(body_text),
        error=None,
    )


def render_report(results: list[PageResult], report_path: Path) -> None:
    passed = [item for item in results if not item.error and not item.broken_images and item.ready_state == "complete"]
    failed = [item for item in results if item.error or item.broken_images or item.ready_state != "complete"]

    lines = [
        "# Browser Walk Report",
        "",
        f"- workspace root: `{WORKSPACE_ROOT}`",
        f"- bundle root: `{BUNDLE_ROOT}`",
        f"- total pages walked: `{len(results)}`",
        f"- passed clean: `{len(passed)}`",
        f"- with flags: `{len(failed)}`",
        "",
        "## Per Page",
        "",
    ]

    for item in results:
        status = "PASS"
        flags: list[str] = []
        if item.error:
            status = "FAIL"
            flags.append(f"error={item.error}")
        if item.ready_state != "complete":
            status = "FAIL"
            flags.append(f"ready={item.ready_state}")
        if item.broken_images:
            status = "FAIL"
            flags.append(f"broken_images={len(item.broken_images)}")
        if not item.hero_present:
            flags.append("hero_missing")
        if item.body_length < 120:
            flags.append(f"body_length={item.body_length}")

        lines.append(f"- `{status}` `{item.path}`")
        lines.append(f"  - title: `{item.title}`")
        lines.append(f"  - ready: `{item.ready_state}`")
        lines.append(f"  - runtime_ok: `{item.runtime_ok}`")
        lines.append(f"  - topbar_ok: `{item.topbar_ok}`")
        lines.append(f"  - hero_present: `{item.hero_present}`")
        lines.append(f"  - body_length: `{item.body_length}`")
        if item.broken_images:
            lines.append("  - broken_images:")
            for image in item.broken_images[:5]:
                lines.append(f"    - `{image}`")
        if flags:
            lines.append(f"  - flags: `{', '.join(flags)}`")
        lines.append("")

    report_path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Walk local bundle pages or a published Pages site in Safari WebDriver.")
    parser.add_argument("--browser", choices=["auto", "safari", "chrome"], default="auto")
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=8765, help="Preferred workspace HTTP port.")
    parser.add_argument("--webdriver-port", type=int, default=4444, help="Preferred safaridriver port.")
    parser.add_argument("--report", default=None, help="Where to write the markdown report.")
    parser.add_argument("--skip-root-index", action="store_true", help="Skip workspace root launcher page.")
    parser.add_argument("--base-url", default="", help="Remote base URL to walk instead of starting a local HTTP server.")
    parser.add_argument("--include-404", action="store_true", help="Include the published 404 page in remote mode.")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    remote_mode = bool(args.base_url.strip())
    default_report = LIVE_REPORT_DEFAULT if remote_mode else REPORT_DEFAULT
    report_path = Path(args.report or default_report).resolve()
    report_path.parent.mkdir(parents=True, exist_ok=True)

    pages = (
        build_live_page_list(include_404=args.include_404)
        if remote_mode
        else build_page_list(include_workspace_index=not args.skip_root_index)
    )
    workspace_server = None
    thread = None
    driver = None
    session_id = None
    results: list[PageResult] = []
    actual_webdriver_port = None
    browser_used = args.browser

    try:
        if remote_mode:
            base_url = args.base_url.rstrip("/")
            wait_for_http(base_url + "/")
            actual_port = None
        else:
            workspace_server, actual_port, thread = start_workspace_server(args.host, args.port)
            wait_for_http(f"http://{args.host}:{actual_port}/index.html")
            base_url = f"http://{args.host}:{actual_port}"

        if args.browser in {"auto", "safari"}:
            try:
                actual_webdriver_port = reserve_port(args.host, args.webdriver_port)
                driver = start_safaridriver(actual_webdriver_port)
                wait_for_webdriver(args.host, actual_webdriver_port)
                session_id = create_session(args.host, actual_webdriver_port)
                browser_used = "safari"
            except Exception as error:
                if args.browser == "safari":
                    raise
                browser_used = "chrome"
                if driver:
                    with contextlib.suppress(Exception):
                        driver.terminate()
                        driver.wait(timeout=5)
                    driver = None
                session_id = None
                print(f"Safari WebDriver unavailable, falling back to Chrome headless: {error}")
        else:
            browser_used = "chrome"

        for path in pages:
            url = base_url + path
            try:
                if browser_used == "safari":
                    result = inspect_page(args.host, actual_webdriver_port, session_id, url, path)
                else:
                    result = inspect_page_with_chrome(url, path)
                print(f"PASS {path} -> {result.title}")
            except Exception as error:
                result = PageResult(
                    path=path,
                    title="",
                    ready_state="",
                    runtime_ok=False,
                    topbar_ok=False,
                    broken_images=[],
                    hero_present=False,
                    body_length=0,
                    error=str(error),
                )
                print(f"FAIL {path} -> {error}")
            results.append(result)

        render_report(results, report_path)
        failed = [item for item in results if item.error or item.broken_images or item.ready_state != "complete"]
        print("")
        print(f"Report: {report_path}")
        print(f"Browser used: {browser_used}")
        print(f"Mode: {'remote' if remote_mode else 'local'}")
        print(f"Pages walked: {len(results)}")
        print(f"Pages with flags: {len(failed)}")
        return 1 if failed else 0
    finally:
        if session_id and driver and actual_webdriver_port is not None:
            with contextlib.suppress(Exception):
                webdriver_delete_session(args.host, actual_webdriver_port, session_id)
        if driver:
            with contextlib.suppress(Exception):
                driver.terminate()
                driver.wait(timeout=5)
            with contextlib.suppress(Exception):
                stderr = driver.stderr.read().strip() if driver.stderr else ""
                if stderr:
                    print("")
                    print("safaridriver stderr:")
                    print(stderr)
        if workspace_server and thread:
            workspace_server.shutdown()
            workspace_server.server_close()
            thread.join(timeout=2)


if __name__ == "__main__":
    raise SystemExit(main())
