#!/usr/bin/env python3

from __future__ import annotations

import argparse
import re
import sys
from collections import Counter
from pathlib import Path

REF_PATTERN = re.compile(r"""(?:href|src)=['"]([^'"]+)['"]""")
EXTERNAL_PREFIXES = (
    "http://",
    "https://",
    "mailto:",
    "tel:",
    "data:",
    "javascript:",
)
KEY_FILES = (
    "manifest.json",
    "sw.js",
    "styles/site.css",
    "scripts/search-index.js",
    "scripts/site.js",
    "scripts/sw-register.js",
    "assets/icon-192.svg",
    "assets/icon-512.svg",
    "pages/v20-alpha-hub.html",
    "pages/training-arena.html",
    "pages/v20-premium-hub.html",
    "pages/v20-cross-part-cases.html",
    "pages/v20-graphics-catalog.html",
    "docs/OPEN_MEDIA_SOURCING.md",
    "data/v20_open_media_queue.json",
    "scripts/training-arena-data.js",
    "scripts/training-arena.js",
    "scripts/dashboard-alpha.js",
    "assets/real/open/cvc/human_chest_xray_cvc_wikimedia.jpg",
    "assets/real/open/complication/chest_xray_pneumothorax_wikimedia.png",
    "assets/real/open/ultrasound/ijv_narrowing_mid_neck_wikimedia.jpg",
    "assets/real/open/ultrasound/neck_ultrasound_procedural_wikimedia.jpg",
    "assets/real/open/malposition/port_acath_azygos_ap_wikimedia.jpg",
    "assets/real/open/malposition/port_acath_azygos_lateral_wikimedia.jpg",
    "assets/real/open/maintenance/central_vein_line_dressing_wikimedia.jpg",
    "assets/real/open/maintenance/central_vein_catheter_entry_site_wikimedia.jpg",
    "assets/real/open/infection/catheter_biofilm_staph_phil_7486.jpg",
    "assets/real/open/infection/catheter_biofilm_alcaligenes_phil_10548.jpg",
    "assets/real/open/complication/ct_superior_vena_cava_thrombosis_wikimedia.png",
)


def default_bundle_root() -> Path:
    return Path(__file__).resolve().parents[1] / "project" / "cvc_academy_v20_premium_dual_layer"


def count_files(path: Path) -> int:
    if not path.exists():
        return 0
    return sum(1 for item in path.rglob("*") if item.is_file())


def normalize_target(root: Path, html_path: Path, ref: str) -> Path | None:
    ref = ref.split("#", 1)[0].split("?", 1)[0]
    if not ref or ref.startswith(EXTERNAL_PREFIXES):
        return None
    if ref.startswith("/"):
        return Path(ref)

    resolved = (html_path.parent / ref).resolve()
    try:
        return root / resolved.relative_to(root.resolve())
    except ValueError:
        return resolved


def find_missing_refs(root: Path) -> list[tuple[str, str]]:
    missing: list[tuple[str, str]] = []
    for html_path in sorted(root.rglob("*.html")):
        text = html_path.read_text(encoding="utf-8", errors="ignore")
        for ref in REF_PATTERN.findall(text):
            target = normalize_target(root, html_path, ref)
            if target is None:
                continue
            if not target.exists():
                missing.append((html_path.relative_to(root).as_posix(), ref))
    return missing


def print_summary(root: Path, missing_refs: list[tuple[str, str]], missing_key_files: list[str]) -> None:
    print(f"bundle_root: {root}")
    for folder in ("pages", "docs", "data", "assets", "scripts"):
        print(f"{folder}: {count_files(root / folder)}")

    if missing_key_files:
        print("\nmissing_key_files:")
        for rel_path in missing_key_files:
            print(f"- {rel_path}")
    else:
        print("\nmissing_key_files: 0")

    if missing_refs:
        ref_counter = Counter(ref for _, ref in missing_refs)
        print(f"\nmissing_refs_unique: {len(ref_counter)}")
        for ref, count in sorted(ref_counter.items()):
            print(f"- {ref} ({count})")
        print("\nmissing_refs_by_file:")
        for file_path, ref in missing_refs:
            print(f"- {file_path} -> {ref}")
    else:
        print("\nmissing_refs_unique: 0")


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate local bundle integrity for the CVC Academy package.")
    parser.add_argument(
        "root",
        nargs="?",
        default=str(default_bundle_root()),
        help="Path to the bundle root. Defaults to the canonical local project bundle.",
    )
    args = parser.parse_args()

    root = Path(args.root).resolve()
    if not root.exists():
        print(f"bundle root not found: {root}", file=sys.stderr)
        return 2

    missing_key_files = [rel_path for rel_path in KEY_FILES if not (root / rel_path).exists()]
    missing_refs = find_missing_refs(root)
    print_summary(root, missing_refs, missing_key_files)

    if missing_key_files or missing_refs:
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
