#!/usr/bin/env node
// Generates dist/llms.txt from the same route list the sitemap generator reads (see
// generate-sitemap.mjs's header comment for the underlying principle) plus each page's own
// META object from src/data/*.js — no parallel summary field, no hand-written copy.
//
// Group membership (Services vs. everything else) is read from home.js's own SERVICES array
// rather than hardcoded here, so a service added there is picked up automatically.
//
// A brand-new route flows through automatically too, as long as it follows the site's
// existing, enforced convention (see website/CLAUDE.md): one src/data/<key>.js module, keyed
// the same as its ROUTE_PATHS entry, exporting a META object. Every real page already needs
// that for its own <title>/meta description tags, so this adds no extra step — the page's
// data module is loaded by key via a dynamic import, not a hardcoded per-page import list.
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { ROUTE_PATHS } from "../src/routes.js";
import { SITE_URL, SITE_NAME, TAGLINE } from "../src/data/site.js";
import { META as HOME_META, SERVICES } from "../src/data/home.js";

const distDir = fileURLToPath(new URL("../dist", import.meta.url));

// "X | DahmsIO" or "DahmsIO | X" -> "X" — strips the shared site-name token so a page's own
// title reads as a standalone link label instead of repeating the site name in every item.
function stripSiteName(title) {
  return title
    .split("|")
    .map((part) => part.trim())
    .filter((part) => part !== SITE_NAME)
    .join(" | ");
}

async function loadPageMeta(key) {
  const mod = await import(new URL(`../src/data/${key}.js`, import.meta.url));
  return mod.META;
}

function renderSection(heading, entries) {
  if (!entries.length) return null;
  const items = entries.map((e) => `- [${e.label}](${e.url}): ${e.description}`).join("\n\n");
  return `## ${heading}\n\n${items}`;
}

async function main() {
  const serviceHrefs = new Set(SERVICES.map((s) => s.href));
  const serviceTitleByHref = new Map(SERVICES.map((s) => [s.href, s.title]));

  const services = [];
  const other = [];

  for (const [key, path] of Object.entries(ROUTE_PATHS)) {
    // Home isn't listed as a link — same "logo/root already gets you there" convention the
    // desktop nav follows now that it dropped its own literal "Home" link.
    if (path === ROUTE_PATHS.home) continue;

    const meta = await loadPageMeta(key);
    const label = serviceTitleByHref.get(path) ?? stripSiteName(meta.title);
    const entry = { label, url: `${SITE_URL}${path}`, description: meta.description };
    (serviceHrefs.has(path) ? services : other).push(entry);
  }

  const sections = [renderSection("Services", services), renderSection("About", other)].filter(Boolean);

  const body = `# ${SITE_NAME}\n\n> ${TAGLINE}\n\n${HOME_META.description}\n\n${sections.join("\n\n")}\n`;

  writeFileSync(`${distDir}/llms.txt`, body);
  console.log(
    `[llms.txt] wrote dist/llms.txt with ${services.length + other.length} page(s) (${services.length} services, ${other.length} other)`,
  );
}

main();
