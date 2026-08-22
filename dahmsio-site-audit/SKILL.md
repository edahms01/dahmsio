---
name: dahmsio-site-audit
description: Audit dahms.io for drift between visible page copy and the hidden/crawler-facing content that doesn't get proofread when copy changes, meta descriptions, Open Graph and Twitter Card tags, JSON-LD structured data, image alt text, and heading structure. Also called a technical SEO audit or metadata/structured-data QA. Use this whenever Eric asks to "check the site," "audit dahms.io," "make sure the meta tags are up to date," "check for em dashes on the live site," "check hidden content," or wants to confirm that a recent copy change on dahms.io was also reflected in meta tags and schema. Run it periodically even without a specific trigger, since this class of drift is invisible during normal proofreading.
---

# dahms.io site audit

## Why this exists

Rendered page copy on dahms.io gets proofread every time it changes. Meta
descriptions, Open Graph tags, Twitter Card tags, JSON-LD structured data, and
image alt text don't, because nobody sees them while reviewing a page in a
browser. They drift silently: a headline gets rewritten, the meta description
that used to match it doesn't get touched, and six months later Google is
showing a stale snippet in search results with no visible symptom on the page
itself.

This skill checks for that drift. It is specific to dahms.io's known pages and
house rules, not a general-purpose SEO tool.

## House rules to check against

These are established, non-negotiable conventions for dahms.io. Every check
below exists to enforce one of these:

1. **No em dashes anywhere in rendered or hidden content.** This includes meta
   descriptions, `og:description`, `twitter:description`, and any string value
   inside JSON-LD. The one open exception is the `<title>` tag's "Page Name —
   DahmsIO" separator pattern, which may be a deliberate structural convention
   rather than sentence punctuation. Flag title-tag em dashes separately from
   description-tag ones, and don't silently "fix" the title pattern without
   asking, since Eric hasn't confirmed whether that convention should change.
2. **No employer names anywhere**, in visible copy, alt text, or JSON-LD.
3. **Meta descriptions must match current on-page content.** A meta
   description that references old copy (an old headline, an old value prop)
   after the page has been rewritten is a real bug, not just a style issue.
4. **Structured data must match visible copy where they overlap.** The most
   likely failure point is the founder's `jobTitle` in the `Person`/`founder`
   schema versus whatever title string appears in the visible Founder's Note
   signature. These should say the same thing; if they don't, that's a finding
   to report, not something to silently reconcile, Eric decides which one is
   correct.
5. **Every real `<img>` needs alt text.** Most of the visual elements on this
   site (the dashboard, code editor, roadmap, and network graphics) are built
   as DOM/SVG, not `<img>` tags, so they don't carry this requirement today.
   If a future redesign converts any of them to actual images, alt text
   becomes required at that point, check for this rather than assuming the
   current zero-image-mockup pattern holds forever.
6. **Heading structure**: exactly one `<h1>` per page, no skipped heading
   levels.

## How to run the audit

1. Run `scripts/audit_meta.py` against the page list defined at the top of
   that file. It needs outbound internet access, run it from an environment
   that has it (Claude Code on a normal machine will; a sandboxed environment
   without network access will not).

   ```
   python3 scripts/audit_meta.py
   ```

2. The script fetches each page, extracts title, meta tags, JSON-LD, image alt
   text, and heading sequence, and prints a structured report per page:
   findings that need a fix, and items that passed clean.

3. Read the script's output alongside the house rules above. The script
   catches mechanical issues (em dash characters, missing alt text, skipped
   heading levels, malformed JSON-LD) reliably. It flags meta-description
   staleness and jobTitle mismatches as **candidates for review**, since
   judging whether a description is stale relative to the current H1 requires
   reading both and comparing meaning, not just string matching. Do that
   comparison yourself using the H1 and meta description the script extracts
   for each page.

4. Summarize findings for Eric grouped by: fix now (mechanical violations of
   the house rules above), needs Eric's input (the title-separator question,
   any jobTitle mismatch, anything ambiguous), and clean (no action).

5. If Eric confirms fixes, they need to be made in the actual site source
   (the Netlify-deployed repo), not just noted, this skill audits and reports,
   it doesn't have write access to the live site. Hand off confirmed fixes as
   a short, specific instruction list the way implementation briefs have been
   written for this project elsewhere (see prior About-page implementation
   briefs for the expected format: concise, one fix per line, exact before/
   after text where it matters).

## Adding or removing pages

Edit the `PAGES` list at the top of `scripts/audit_meta.py`. As of this
skill's creation, dahms.io has six pages: `/`, `/data/`, `/technology/`,
`/consulting/`, `/about/`, `/contact/`. If a new page is added to the site,
add its URL to that list so it's included in future audits.

## What this skill does not cover

- Visual/design regressions, accessibility beyond alt text and heading order,
  page speed, broken links, or robots.txt/sitemap.xml correctness. Those are
  real and worth checking periodically but are separate concerns from the
  content-drift problem this skill targets.
- Actually editing the site. This skill reports; fixes go through the normal
  Claude Code + Netlify workflow already used for this project.
