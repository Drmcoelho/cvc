#!/usr/bin/env python3
"""Safari-driven interaction review for the live CVC Academy Pages site."""

from __future__ import annotations

import argparse
import contextlib
import json
import time
from dataclasses import dataclass
from pathlib import Path

from browser_walk_bundle import (
    WORKSPACE_ROOT,
    create_session,
    reserve_port,
    request_json,
    start_safaridriver,
    wait_for_http,
    wait_for_webdriver,
    webdriver_delete_session,
    webdriver_navigate,
    webdriver_script,
)


REPORT_DEFAULT = WORKSPACE_ROOT / "docs" / "qa" / "live_interaction_report.md"


@dataclass
class CheckResult:
    name: str
    ok: bool
    detail: str


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Exercise live Pages interactions in Safari.")
    parser.add_argument("--base-url", default="https://drmcoelho.github.io/cvc", help="Live site base URL.")
    parser.add_argument("--host", default="127.0.0.1", help="Host for safaridriver.")
    parser.add_argument("--webdriver-port", type=int, default=4444, help="Preferred safaridriver port.")
    parser.add_argument("--report", default=str(REPORT_DEFAULT), help="Where to write the markdown report.")
    return parser.parse_args()


def execute_async(host: str, port: int, session_id: str, script: str, args: list | None = None):
    response = request_json(
        "POST",
        f"http://{host}:{port}/session/{session_id}/execute/async",
        {"script": script, "args": args or []},
    )
    return response.get("value")


def wait_for_document(host: str, port: int, session_id: str, timeout_seconds: float = 12.0) -> None:
    deadline = time.time() + timeout_seconds
    while time.time() < deadline:
        ready = webdriver_script(host, port, session_id, "return document.readyState;")
        if ready == "complete":
            return
        time.sleep(0.2)
    raise RuntimeError("Timed out waiting for document.readyState=complete")


def wait_for_js(host: str, port: int, session_id: str, condition: str, timeout_seconds: float = 12.0) -> None:
    deadline = time.time() + timeout_seconds
    while time.time() < deadline:
        try:
            if webdriver_script(host, port, session_id, f"return Boolean({condition});"):
                return
        except Exception:
            pass
        time.sleep(0.2)
    raise RuntimeError(f"Timed out waiting for condition: {condition}")


def go_to(host: str, port: int, session_id: str, base_url: str, path: str) -> None:
    webdriver_navigate(host, port, session_id, base_url.rstrip("/") + path)
    wait_for_document(host, port, session_id)
    time.sleep(0.3)


def clear_storage(host: str, port: int, session_id: str) -> None:
    webdriver_script(
        host,
        port,
        session_id,
        """
        localStorage.removeItem("cvc.study.state.v1");
        localStorage.removeItem("cvc.training.arena.progress.v1");
        localStorage.removeItem("cvc.training.arena.snapshot.v1");
        return true;
        """,
    )


def favorite_and_complete_part1(host: str, port: int, session_id: str) -> CheckResult:
    wait_for_js(host, port, session_id, "document.querySelector('[data-study-favorite]') && document.querySelector('[data-study-completed]')")
    payload = webdriver_script(
        host,
        port,
        session_id,
        """
        document.querySelector("[data-study-favorite]").click();
        document.querySelector("[data-study-completed]").click();
        const state = JSON.parse(localStorage.getItem("cvc.study.state.v1") || "{}");
        return {
          favorites: state.favorites || [],
          completed: state.completed || [],
          recents: state.recents || [],
          favoriteLabel: document.querySelector("[data-study-favorite]")?.innerText || "",
          completedLabel: document.querySelector("[data-study-completed]")?.innerText || ""
        };
        """,
    )
    ok = (
        "v20-reality-class-part1" in (payload.get("favorites") or [])
        and "v20-reality-class-part1" in (payload.get("completed") or [])
        and (payload.get("favoriteLabel") or "").strip() == "Favorito ativo"
        and (payload.get("completedLabel") or "").strip() == "Concluido neste navegador"
    )
    return CheckResult(
        name="Estado local de page",
        ok=ok,
        detail=json.dumps(payload, ensure_ascii=True),
    )


def review_dashboard_state(host: str, port: int, session_id: str) -> CheckResult:
    wait_for_js(host, port, session_id, "document.querySelector('[data-dashboard-favorites]')")
    payload = webdriver_script(
        host,
        port,
        session_id,
        """
        const text = document.body.innerText || "";
        const dashboardText = document.querySelector("[data-dashboard-favorites]")?.innerText || "";
        return {
          bodyHasConcluidas: /concluidas no navegador/i.test(text),
          bodyHasFavoritos: /favoritos ativos/i.test(text),
          favoritesPanelHasPart1: /Part 1/i.test(dashboardText),
          recentPanelHasPart1: /Part 1/i.test(dashboardText)
        };
        """,
    )
    ok = all(payload.values())
    return CheckResult(
        name="Dashboard reflete estado",
        ok=ok,
        detail=json.dumps(payload, ensure_ascii=True),
    )


def answer_training_item(host: str, port: int, session_id: str) -> CheckResult:
    wait_for_js(host, port, session_id, "window.CVC_TRAINING_ARENA && document.querySelector('[data-training-stage]')")
    webdriver_script(
        host,
        port,
        session_id,
        """
        localStorage.removeItem("cvc.training.arena.progress.v1");
        localStorage.removeItem("cvc.training.arena.snapshot.v1");
        location.reload();
        return true;
        """,
    )
    wait_for_document(host, port, session_id)
    wait_for_js(host, port, session_id, "window.CVC_TRAINING_ARENA && document.querySelector('[data-option-id]')")
    payload = webdriver_script(
        host,
        port,
        session_id,
        """
        const arena = window.CVC_TRAINING_ARENA;
        const grades = Object.fromEntries(arena.feedbackScale.map((item) => [item.id, item.score]));
        const module = arena.modules[0];
        const item = module.items[0];
        let bestId = null;
        let bestScore = -999;
        for (const option of item.options) {
          const response = item.responses[option.id];
          const score = grades[response.grade] ?? -999;
          if (score > bestScore) {
            bestScore = score;
            bestId = option.id;
          }
        }
        const optionButton = document.querySelector(`[data-option-id="${bestId}"]`);
        optionButton.click();
        document.querySelector("[data-submit-answer]").click();
        const feedback = document.querySelector(".training-feedback")?.innerText || "";
        const progress = JSON.parse(localStorage.getItem("cvc.training.arena.progress.v1") || "{}");
        const snapshot = JSON.parse(localStorage.getItem("cvc.training.arena.snapshot.v1") || "{}");
        return {
          bestId,
          feedbackVisible: Boolean(document.querySelector(".training-feedback")),
          feedbackHasTitle: feedback.includes(item.title),
          attempts: (progress.attempts || []).length,
          snapshotAttempts: snapshot.totalAttempts || 0
        };
        """,
    )
    ok = (
        payload.get("feedbackVisible")
        and payload.get("feedbackHasTitle")
        and payload.get("attempts") == 1
        and payload.get("snapshotAttempts") == 1
    )
    return CheckResult(
        name="Arena registra tentativa",
        ok=ok,
        detail=json.dumps(payload, ensure_ascii=True),
    )


def review_dashboard_training(host: str, port: int, session_id: str) -> CheckResult:
    wait_for_js(host, port, session_id, "document.querySelector('[data-dashboard-training]')")
    payload = webdriver_script(
        host,
        port,
        session_id,
        """
        const root = document.querySelector("[data-dashboard-training]");
        const text = root?.innerText || "";
        const cards = Array.from(root?.querySelectorAll(".stats-card") || []).map((card) => ({
          value: card.querySelector("strong")?.innerText || "",
          label: card.querySelector("span")?.innerText || ""
        }));
        return {
          cards,
          hasAttemptCount: cards.some((card) => card.value === "1" && /tentativas locais/i.test(card.label)),
          hasRetomarArena: /Retomar arena/i.test(text),
          hasNegativeClusterCopy: /Sem cluster negativo dominante/i.test(text) || /ocorrencias negativas/i.test(text)
        };
        """,
    )
    ok = payload.get("hasAttemptCount") and payload.get("hasRetomarArena")
    return CheckResult(
        name="Dashboard incorpora arena",
        ok=ok,
        detail=json.dumps(payload, ensure_ascii=True),
    )


def review_service_worker(host: str, port: int, session_id: str) -> CheckResult:
    payload = execute_async(
        host,
        port,
        session_id,
        """
        const done = arguments[arguments.length - 1];
        if (!("serviceWorker" in navigator)) {
          done({ supported: false, registered: false, scope: null });
          return;
        }
        navigator.serviceWorker.getRegistrations()
          .then((registrations) => {
            const active = registrations.find((item) => item.scope.includes("/cvc/")) || registrations[0] || null;
            done({
              supported: true,
              registered: registrations.length > 0,
              scope: active ? active.scope : null
            });
          })
          .catch((error) => done({ supported: true, registered: false, scope: null, error: String(error) }));
        """,
    )
    ok = bool(payload.get("supported")) and bool(payload.get("registered")) and "/cvc/" in str(payload.get("scope"))
    return CheckResult(
        name="Service worker no site online",
        ok=ok,
        detail=json.dumps(payload, ensure_ascii=True),
    )


def render_report(results: list[CheckResult], report_path: Path, base_url: str) -> None:
    lines = [
        "# Live Interaction Report",
        "",
        f"- base_url: `{base_url}`",
        f"- checks: `{len(results)}`",
        f"- passed: `{sum(1 for item in results if item.ok)}`",
        f"- failed: `{sum(1 for item in results if not item.ok)}`",
        "",
        "## Results",
        "",
    ]

    for item in results:
        status = "PASS" if item.ok else "FAIL"
        lines.append(f"- `{status}` `{item.name}`")
        lines.append(f"  - detail: `{item.detail}`")
        lines.append("")

    report_path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> int:
    args = parse_args()
    base_url = args.base_url.rstrip("/")
    report_path = Path(args.report).resolve()
    report_path.parent.mkdir(parents=True, exist_ok=True)

    driver = None
    session_id = None
    actual_webdriver_port = None

    try:
        wait_for_http(base_url + "/")
        actual_webdriver_port = reserve_port(args.host, args.webdriver_port)
        driver = start_safaridriver(actual_webdriver_port)
        wait_for_webdriver(args.host, actual_webdriver_port)
        session_id = create_session(args.host, actual_webdriver_port)

        go_to(args.host, actual_webdriver_port, session_id, base_url, "/index.html")
        clear_storage(args.host, actual_webdriver_port, session_id)

        go_to(args.host, actual_webdriver_port, session_id, base_url, "/pages/v20-reality-class-part1.html")
        results = [favorite_and_complete_part1(args.host, actual_webdriver_port, session_id)]

        go_to(args.host, actual_webdriver_port, session_id, base_url, "/pages/dashboard-alpha.html")
        results.append(review_dashboard_state(args.host, actual_webdriver_port, session_id))

        go_to(args.host, actual_webdriver_port, session_id, base_url, "/pages/training-arena.html")
        results.append(answer_training_item(args.host, actual_webdriver_port, session_id))

        go_to(args.host, actual_webdriver_port, session_id, base_url, "/pages/dashboard-alpha.html")
        results.append(review_dashboard_training(args.host, actual_webdriver_port, session_id))
        results.append(review_service_worker(args.host, actual_webdriver_port, session_id))

        render_report(results, report_path, base_url)
        failed = [item for item in results if not item.ok]
        print(f"Report: {report_path}")
        print(f"Checks: {len(results)}")
        print(f"Failed: {len(failed)}")
        for item in results:
          print(f"{'PASS' if item.ok else 'FAIL'} {item.name}")
        return 1 if failed else 0
    finally:
        if session_id and driver and actual_webdriver_port is not None:
            with contextlib.suppress(Exception):
                webdriver_delete_session(args.host, actual_webdriver_port, session_id)
        if driver:
            with contextlib.suppress(Exception):
                driver.terminate()
                driver.wait(timeout=5)


if __name__ == "__main__":
    raise SystemExit(main())
