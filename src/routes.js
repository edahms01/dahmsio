// Single source of truth for the site's real, indexable page paths. The router (App.jsx),
// each page's META.path (src/data/*.js), and the build-time sitemap generator
// (scripts/generate-sitemap.mjs) all read this list — add a route here and it's wired into
// the router, its own page meta, and the sitemap automatically. Nothing can silently fall
// out of sync.
//
// /404 and the client-only "*" catch-all are intentionally NOT here — they're not real,
// indexable pages, and are wired directly in App.jsx instead.
export const ROUTE_PATHS = {
  home: "/",
  data: "/data/",
  technology: "/technology/",
  consulting: "/consulting/",
  contact: "/contact/",
};
