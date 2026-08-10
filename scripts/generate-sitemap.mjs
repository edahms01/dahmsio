#!/usr/bin/env node
// Generates dist/sitemap.xml from ROUTE_PATHS (src/routes.js) — the same list App.jsx builds
// the router from. Run automatically as part of `npm run build`, after vite-react-ssg has
// finished writing dist/. Adding a route to ROUTE_PATHS is enough for it to show up here too;
// nothing needs hand-updating in this file.
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { ROUTE_PATHS } from "../src/routes.js";
import { SITE_URL } from "../src/data/site.js";

const distDir = fileURLToPath(new URL("../dist", import.meta.url));
const lastmod = new Date().toISOString();

const urls = Object.values(ROUTE_PATHS)
  .map(
    (path) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`,
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync(`${distDir}/sitemap.xml`, xml);
console.log(`[sitemap] wrote dist/sitemap.xml with ${Object.keys(ROUTE_PATHS).length} URLs`);
