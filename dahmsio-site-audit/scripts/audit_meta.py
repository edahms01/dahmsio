#!/usr/bin/env python3
"""
dahms.io hidden-content audit.

Fetches each known page, extracts meta tags, JSON-LD, image alt text, and
heading structure, and reports mechanical rule violations. Uses only the
Python standard library so it runs anywhere with outbound internet access
and no extra installs.

Usage:
    python3 audit_meta.py
"""

import json
import re
import sys
import urllib.request
from html.parser import HTMLParser

# Edit this list if pages are added to or removed from the site.
PAGES = [
    "https://dahms.io/",
    "https://dahms.io/data/",
    "https://dahms.io/technology/",
    "https://dahms.io/consulting/",
    "https://dahms.io/about/",
    "https://dahms.io/contact/",
]

EM_DASH = "\u2014"

# Add known employer names here if any surface in future CV updates, so the
# script can flag accidental leaks. Left empty deliberately, since the rule
# is "no employer names at all," not "no specific list of names" — this is a
# manual read of the extracted text, not a fully automatable check.
EMPLOYER_NAMES_TO_FLAG = []


class PageParser(HTMLParser):
    """Minimal HTML parser pulling out exactly what the audit needs."""

    def __init__(self):
        super().__init__()
        self.title = ""
        self._in_title = False
        self.meta_tags = {}
        self.canonical = None
        self.jsonld_blocks = []
        self._in_jsonld = False
        self._jsonld_buffer = ""
        self.imgs = []
        self.headings = []  # list of (tag, text) in document order
        self._current_heading_tag = None
        self._current_heading_text = ""
        self.robots = None

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        if tag == "title":
            self._in_title = True
        elif tag == "meta":
            name = attrs_dict.get("name") or attrs_dict.get("property")
            content = attrs_dict.get("content")
            if name and content is not None:
                self.meta_tags[name] = content
            if attrs_dict.get("name") == "robots":
                self.robots = attrs_dict.get("content")
        elif tag == "link" and attrs_dict.get("rel") == "canonical":
            self.canonical = attrs_dict.get("href")
        elif tag == "script" and attrs_dict.get("type") == "application/ld+json":
            self._in_jsonld = True
            self._jsonld_buffer = ""
        elif tag == "img":
            self.imgs.append({
                "src": (attrs_dict.get("src") or "").split("/")[-1],
                "alt": attrs_dict.get("alt"),
            })
        elif tag in ("h1", "h2", "h3", "h4", "h5", "h6"):
            self._current_heading_tag = tag
            self._current_heading_text = ""

    def handle_data(self, data):
        if self._in_title:
            self.title += data
        if self._in_jsonld:
            self._jsonld_buffer += data
        if self._current_heading_tag:
            self._current_heading_text += data

    def handle_endtag(self, tag):
        if tag == "title":
            self._in_title = False
        elif tag == "script" and self._in_jsonld:
            self._in_jsonld = False
            raw = self._jsonld_buffer.strip()
            if raw:
                try:
                    self.jsonld_blocks.append(json.loads(raw))
                except json.JSONDecodeError as e:
                    self.jsonld_blocks.append({"__parse_error__": str(e), "__raw_snippet__": raw[:200]})
        elif tag in ("h1", "h2", "h3", "h4", "h5", "h6"):
            self.headings.append((tag, self._current_heading_text.strip()))
            self._current_heading_tag = None


def find_em_dashes_in_jsonld(obj, path=""):
    """Recursively walk a JSON-LD object and report string values containing an em dash."""
    hits = []
    if isinstance(obj, dict):
        for k, v in obj.items():
            hits.extend(find_em_dashes_in_jsonld(v, f"{path}.{k}" if path else k))
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            hits.extend(find_em_dashes_in_jsonld(v, f"{path}[{i}]"))
    elif isinstance(obj, str):
        if EM_DASH in obj:
            hits.append((path, obj))
    return hits


def find_employer_names_in_jsonld(obj, names, path=""):
    hits = []
    if not names:
        return hits
    if isinstance(obj, dict):
        for k, v in obj.items():
            hits.extend(find_employer_names_in_jsonld(v, names, f"{path}.{k}" if path else k))
    elif isinstance(obj, list):
        for i, v in enumerate(obj):
            hits.extend(find_employer_names_in_jsonld(v, names, f"{path}[{i}]"))
    elif isinstance(obj, str):
        for name in names:
            if name.lower() in obj.lower():
                hits.append((path, obj, name))
    return hits


def check_heading_sequence(headings):
    """Return a list of problems: more/less than one h1, or a skipped level."""
    problems = []
    h1_count = sum(1 for tag, _ in headings if tag == "h1")
    if h1_count != 1:
        problems.append(f"expected exactly one <h1>, found {h1_count}")
    last_level = None
    for tag, text in headings:
        level = int(tag[1])
        if last_level is not None and level > last_level + 1:
            problems.append(f"heading level jumps from h{last_level} to h{level} at \"{text[:50]}\"")
        last_level = level
    return problems


def audit_page(url):
    req = urllib.request.Request(url, headers={"User-Agent": "dahmsio-site-audit/1.0"})
    with urllib.request.urlopen(req, timeout=15) as resp:
        html = resp.read().decode("utf-8", errors="replace")

    parser = PageParser()
    parser.feed(html)

    findings = []
    clean = []

    # --- Em dashes in description-family tags: always a real violation ---
    desc_fields = ["description", "og:description", "twitter:description"]
    dash_desc_hits = [f for f in desc_fields if EM_DASH in (parser.meta_tags.get(f) or "")]
    if dash_desc_hits:
        findings.append(f"em dash found in: {', '.join(dash_desc_hits)}")
    else:
        clean.append("no em dashes in meta/OG/Twitter descriptions")

    # --- Em dashes in title-family tags: flag separately, may be intentional ---
    title_fields = {"title (document.title)": parser.title,
                     "og:title": parser.meta_tags.get("og:title") or "",
                     "twitter:title": parser.meta_tags.get("twitter:title") or ""}
    dash_title_hits = [k for k, v in title_fields.items() if EM_DASH in v]
    if dash_title_hits:
        findings.append(
            f"em dash found in title field(s): {', '.join(dash_title_hits)} "
            f"(may be the intentional \"Page — DahmsIO\" separator, confirm with Eric before changing)"
        )

    # --- Meta description present and non-trivial ---
    desc = parser.meta_tags.get("description")
    if not desc:
        findings.append("no meta description found")
    elif len(desc) > 160:
        findings.append(f"meta description is {len(desc)} chars, longer than the ~155-160 char guideline")
    else:
        clean.append(f"meta description present, {len(desc)} chars")

    # --- Meta description vs H1: can't auto-judge staleness, surface both for human review ---
    h1_texts = [text for tag, text in parser.headings if tag == "h1"]
    findings.append(
        f"[REVIEW] H1: \"{h1_texts[0] if h1_texts else '(none found)'}\" | "
        f"meta description: \"{desc}\" — confirm the description still matches the current H1/offer"
    )

    # --- JSON-LD parse errors ---
    parse_errors = [b for b in parser.jsonld_blocks if isinstance(b, dict) and "__parse_error__" in b]
    if parse_errors:
        for pe in parse_errors:
            findings.append(f"JSON-LD FAILED TO PARSE: {pe['__parse_error__']} near: {pe['__raw_snippet__']}")
    else:
        clean.append(f"{len(parser.jsonld_blocks)} JSON-LD block(s) parsed without error")

    # --- Em dashes and employer names inside JSON-LD ---
    for block in parser.jsonld_blocks:
        if not isinstance(block, dict) or "__parse_error__" in block:
            continue
        dash_hits = find_em_dashes_in_jsonld(block)
        for path, val in dash_hits:
            findings.append(f"em dash in JSON-LD at {path}: \"{val}\"")
        employer_hits = find_employer_names_in_jsonld(block, EMPLOYER_NAMES_TO_FLAG)
        for path, val, name in employer_hits:
            findings.append(f"employer name \"{name}\" found in JSON-LD at {path}: \"{val}\"")
        if not dash_hits:
            pass  # already covered by the aggregate "clean" message below if nothing found anywhere

        # Surface founder jobTitle specifically, this is a known drift point
        founder = block.get("founder") if isinstance(block.get("founder"), dict) else None
        if founder and "jobTitle" in founder:
            findings.append(
                f"[REVIEW] JSON-LD founder.jobTitle = \"{founder['jobTitle']}\" — "
                f"confirm this matches the visible Founder's Note signature on /about/"
            )

    if not any("em dash in JSON-LD" in f for f in findings):
        clean.append("no em dashes found inside JSON-LD string values")

    # --- Image alt text ---
    missing_alt = [img for img in parser.imgs if not img.get("alt")]
    if missing_alt:
        for img in missing_alt:
            findings.append(f"<img src=\"{img['src']}\"> has no alt text")
    elif parser.imgs:
        clean.append(f"all {len(parser.imgs)} <img> tag(s) have alt text")
    else:
        clean.append("no <img> tags on this page (visuals are DOM/SVG-based)")

    # --- Heading structure ---
    heading_problems = check_heading_sequence(parser.headings)
    if heading_problems:
        findings.extend(heading_problems)
    else:
        clean.append(f"heading structure OK ({len(parser.headings)} headings, no skips, exactly one h1)")

    # --- Canonical ---
    if not parser.canonical:
        findings.append("no canonical link tag found")
    elif parser.canonical.rstrip("/") != url.rstrip("/"):
        findings.append(f"canonical ({parser.canonical}) does not match fetched URL ({url})")
    else:
        clean.append("canonical URL correct and self-referencing")

    return {
        "url": url,
        "title": parser.title,
        "findings": findings,
        "clean": clean,
    }


def main():
    results = []
    for url in PAGES:
        try:
            results.append(audit_page(url))
        except Exception as e:
            results.append({"url": url, "title": "", "findings": [f"FAILED TO FETCH/PARSE: {e}"], "clean": []})

    total_findings = 0
    for r in results:
        print("=" * 70)
        print(f"{r['url']}")
        print(f"  title: {r['title']}")
        print("-" * 70)
        if r["findings"]:
            print("  FINDINGS:")
            for f in r["findings"]:
                print(f"    - {f}")
                if not f.startswith("[REVIEW]"):
                    total_findings += 1
        if r["clean"]:
            print("  CLEAN:")
            for c in r["clean"]:
                print(f"    ✓ {c}")
        print()

    print("=" * 70)
    print(f"Done. {total_findings} mechanical finding(s) across {len(PAGES)} page(s) "
          f"(items marked [REVIEW] need human judgment, not counted above).")
    sys.exit(1 if total_findings else 0)


if __name__ == "__main__":
    main()
