# Hidden-Content Audit — instructions for Claude Code

> **Last regenerated:** 2026-08-22, by running `scripts/audit_meta.py` against
> the live production site (`https://dahms.io/*`) plus a manual read of the
> extracted output, per the `dahmsio-site-audit` skill.
> **This is a point-in-time snapshot, not a live view.** Every finding below
> reflects the site as it existed at the timestamp above. Copy, meta tags, and
> schema can drift again the moment the next change ships — don't treat this
> doc as current without re-running the audit first.

## Why this exists
Rendered page copy gets proofread every time it changes. Meta tags, JSON-LD,
alt text, and other crawler-only content don't, because nobody sees them while
reviewing a page. They drift silently. This is a recurring audit, not a
one-time cleanup: run it after any copy or structural change to a page, and
periodically as a standalone pass across the whole site.

## Resolved since the previous audit
The previous snapshot of this doc (last touched before commit `653c3a9`)
flagged these as open findings. This run confirms both are fixed live and
they should **not** be re-flagged unless they regress:

- **`founder.jobTitle`** — was `"Founder"` in JSON-LD against a visible
  Founder's Note signature reading "Eric Dahms, Founder/CEO," a genuine
  mismatch. `653c3a9` dropped "/CEO" from both the signature and the schema.
  This run confirms `jobTitle: "Founder"` on every page's JSON-LD and the
  visible About-page signature reads "Eric Dahms, Founder" — they match.
- **Wordmark live-text issue** — the brand wordmark used to be live DOM text
  (a drift risk: it could get proofread and changed on one render path but
  not another). It's now a static `logo.svg` `<img>` (`alt="DahmsIO"`),
  rendered identically in the nav and footer on every page. Confirmed via
  direct HTML inspection of `/` and `/about/`.

Two more items the prior doc had flagged as open turned out to be resolved as
well, not part of the explicit brief for this pass but caught during the live
re-check:

- **`founder.sameAs`** — previously empty, pending a LinkedIn URL. Now set:
  `https://www.linkedin.com/in/eric-dahms` (founder) and
  `https://www.linkedin.com/company/dahmsio` (organization-level `sameAs`).
- **`/technology/` meta description staleness** — previously said "builds
  what's next without breaking what already works" against a live H1 already
  reading "closes the gaps in your business." The meta description now reads
  "DahmsIO implements the technology that closes gaps in your business...,"
  matching the current H1.

## Verified findings — live audit, this run
**None.** `scripts/audit_meta.py` reported 0 mechanical findings across all 6
pages (em dashes, missing alt text, broken heading order, malformed JSON-LD,
missing/mismatched canonical). Full raw output is reproducible by re-running
the script; not pasted verbatim here since it's six pages of clean checkmarks.

Manual review (the two checks the script flags `[REVIEW]` rather than
auto-resolves, per the skill's instructions) also came back clean:

- **Meta description vs. current H1**, all 6 pages: each page's meta
  description was read against its live H1 and matches current on-page offer
  language. No stale claims found (see the resolved `/technology/` item
  above — that was the one page with drift, and it's fixed).
- **`founder.jobTitle` vs. visible signature**: matches, see "Resolved since
  the previous audit" above.

## Verified clean — no action needed
- **Em dashes**: none found in any meta description, `og:description`,
  `twitter:description`, or JSON-LD string value, on any of the 6 pages.
- **Title-tag separator convention resolved itself**: the prior doc's open
  question was whether the em-dash "Page Name — DahmsIO" title pattern should
  change. It's moot now — every page's `<title>` already uses a plain `|`
  pipe separator (`"Data Intelligence | DahmsIO"`, etc.), not an em dash.
  Worth flagging to Eric as an FYI, not as a decision still pending: one
  minor inconsistency remains — the home page's title is ordered
  `"DahmsIO | Where innovation meets intelligence"` (brand first), while
  every interior page is `"Page Name | DahmsIO"` (brand last). Cosmetic, not
  a house-rule violation (no rule governs order), flagged under
  cross-page-consistency below rather than as a real finding.
- **Image alt text**: every real `<img>` on the site has correct, non-empty
  alt text: `logo.svg` (`alt="DahmsIO"`, nav + footer, every page) and the
  About-page founder photo (`alt="Eric Dahms, founder of DahmsIO"`). Image
  counts per page (2 on most pages, 3 on `/about/`) are consistent with the
  wordmark's SVG conversion, not a sign of stray/duplicate images.
- **`alumniOf`** on the founder schema: correct — University of Essex,
  Bentley University, Westbrook High School.
- **No employer names** found in any JSON-LD across any page.
- **Heading hierarchy**: clean on every page — no skipped levels, exactly one
  `<h1>` per page.
- **`hasOfferCatalog`** (Home/About JSON-LD): 13 services listed, matching
  the current Data/Technology/Consulting sub-service lineup site-wide.
- **`address`** (organization JSON-LD): now an array of two `PostalAddress`
  entries — Westbrook, ME and London, UK — present on every page's
  `ProfessionalService` block, no em dashes or employer names inside it.
- **`ProfessionalService` + `BreadcrumbList` JSON-LD**: present and parses
  without error on `/data/`, `/technology/`, `/consulting/`, `/about/`,
  `/contact/` (2 blocks each); Home carries 1 (`ProfessionalService` only).
- **Canonical URLs**: correct and self-referencing on every page.
- **`robots.txt`**: allows all, correctly references
  `https://dahms.io/sitemap.xml`.
- **`sitemap.xml`**: all 6 live pages listed, `lastmod` timestamps current
  (same-day as this audit run) — confirms `lastmod` is actually updating on
  deploy, not frozen at first publish.

## Context: other changes shipped since the last audit pass
Not audit findings — noted here so this doc's history makes sense against the
git log, since some of this is why the previous snapshot read as stale:
- 5 contextual cross-links added between Data/Technology/Consulting
  sub-service copy blocks (visible-copy change, outside this audit's
  hidden-content scope; see "What this skill does not cover" in `SKILL.md`).
- Favicon/app-icon assets refreshed. Confirmed live: `favicon.svg`,
  `favicon.png` (32×32), and `apple-touch-icon.png` (180×180) all correctly
  linked in `<head>` on every page checked.

## Recurring checklist — run this after any future copy or structural change
The items above were checked live and are current as of the timestamp at the
top of this doc. Everything below is the standing process for catching drift
going forward, since this class of issue reappears every time rendered copy
changes and the corresponding meta/schema doesn't get updated alongside it.

### Meta & social tags
- [ ] `<title>` — under ~60 characters, no em dash unless a deliberate
  structural separator (the site currently uses `|`, not em dash — flag if an
  em dash reappears in any title). Matches current page content.
- [ ] `meta description` — under ~155 characters, no em dashes, no stale
  claims, matches current on-page headline and offer.
- [ ] `og:title`, `og:description`, `twitter:title`, `twitter:description` —
  check independently; these are hand-duplicated from meta description on
  this site and drift separately when one gets edited and the others don't.
- [ ] `og:image` — currently identical across all pages (`og-image.jpg`).
  Confirm this is intentional; page-specific OG images are a future
  enhancement, not a bug, but flag if any page's generic image would look
  wrong in a social preview.

### Structured data (JSON-LD)
- [ ] `founder.jobTitle` matches whatever title is live in the rendered
  Founder's Note signature. Both currently say "Founder" — if the visible
  signature is ever changed, the schema needs the same edit.
- [ ] `sameAs` — both founder and organization-level `sameAs` are now set;
  confirm any future LinkedIn/social URL changes get mirrored here.
- [ ] No employer names in any schema field.
- [ ] No em dashes inside any JSON-LD string value.
- [ ] Validate with a structured-data validator after any schema edit; a
  syntax error silently drops the whole block with no visible symptom on the
  page itself.

### Images
- [ ] Every `<img>` has `alt` text; no employer names, no em dashes. This now
  includes the wordmark (`logo.svg`) in addition to the About-page founder
  photo, since the wordmark is a real `<img>` as of this audit, not DOM text.
- [ ] If any of the mock UI panels (dashboard, code editor, roadmap, network,
  experts) are converted from DOM/SVG to actual `<img>` elements in a future
  redesign, alt text becomes required at that point.

### Headings & document structure
- [ ] Exactly one `<h1>` per page.
- [ ] Heading levels descend in order (no jump from `h2` to `h4`).

### Crawler-facing files
- [ ] `robots.txt` — confirm it isn't blocking any page that should be
  indexed, and references the correct sitemap URL.
- [ ] `sitemap.xml` — confirm all live pages are listed, `lastmod` dates are
  actually updating on content changes, and no stale or removed URLs remain.
- [ ] Favicon/app-icon links (`favicon.svg`, `favicon.png`,
  `apple-touch-icon.png`) still present and correctly referenced in `<head>`
  after any future asset refresh.
- [ ] IndexNow pinging (per the existing local Netlify plugin) — confirm it
  fires on every production deploy that changes indexable content, not just
  on deploys that touch specific files.
- [ ] Google Search Console / Bing Webmaster verification tags or files still
  present and unaffected by any recent changes.

### Cross-page consistency (things that are individually correct but
inconsistent as a set)
- [ ] `theme-color` matches across all pages (currently `#050e13`, confirm
  unchanged).
- [ ] CTA button label pattern — decide if "Start a data project" / "Scope a
  tech project" / "Get in touch" / "Send Message" variation is intentional,
  and if so, document the pattern so future pages follow it rather than
  drifting further.
- [ ] Home-page `<title>` is ordered brand-first (`"DahmsIO | ..."`) while
  every interior page is brand-last (`"... | DahmsIO"`). Not a house-rule
  violation, just an inconsistency worth a deliberate call rather than
  leaving as an accident of how each page's title was originally written.

## Open questions for Eric
None outstanding as of this run. (The previous open question — whether the
em-dash title separator should change — resolved itself: titles already use
`|`, not em dash, site-wide. See the home-page ordering note above for the
one remaining minor inconsistency, which is cosmetic rather than a decision
this doc is blocking on.)

## Suggested workflow going forward
Add this checklist as a required step before merging any copy change: after
updating rendered page content, re-check that page's meta description,
OG/Twitter tags, and JSON-LD for the same edit, since these are hand-duplicated
in most static-site setups and don't update automatically when the visible
copy does.
