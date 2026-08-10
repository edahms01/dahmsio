// Local Netlify build plugin — pings IndexNow after a successful production deploy so
// search engines that support the protocol (Bing, Yandex, and others) get told about the
// site's current URLs without waiting on their own recrawl schedule.
//
// NOT CURRENTLY REGISTERED in netlify.toml — see the "IndexNow" note in this project's
// CLAUDE.md / memory. Every [[plugins]] declaration (this one, a trivial stub, package.json
// added or not, "./..." vs "/..." path syntax) fails the build with a generic
// "Build script returned non-zero exit code: 2" when deployed via the manual API/zip-upload
// path this project currently uses — reproduced identically across all four variants, so
// it's a platform/deploy-method restriction, not a bug in this file. Works fine in theory for
// a genuinely git-triggered Netlify CI build; untested, since this site isn't auto-deploying
// from git pushes currently.
//
// Best-effort by design: every failure path here logs and returns, never throws or calls
// utils.build.failBuild — an IndexNow outage should never take the site down.
const fs = require("node:fs");
const path = require("node:path");

const HOST = "dahms.io";

module.exports = {
  onSuccess: async ({ constants }) => {
    const context = process.env.CONTEXT;
    if (context !== "production") {
      console.log(`[indexnow] Skipping — context is "${context}", not "production".`);
      return;
    }

    const key = process.env.INDEXNOW_KEY;
    if (!key) {
      console.log("[indexnow] Skipping — INDEXNOW_KEY env var is not set.");
      return;
    }

    let urlList;
    try {
      const sitemapPath = path.join(constants.PUBLISH_DIR, "sitemap.xml");
      const xml = fs.readFileSync(sitemapPath, "utf-8");
      urlList = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
    } catch (err) {
      console.log(`[indexnow] Skipping — couldn't read sitemap.xml: ${err.message}`);
      return;
    }

    if (urlList.length === 0) {
      console.log("[indexnow] Skipping — sitemap.xml has no <loc> entries.");
      return;
    }

    const body = JSON.stringify({
      host: HOST,
      key,
      keyLocation: `https://${HOST}/${key}.txt`,
      urlList,
    });

    try {
      const res = await fetch("https://api.indexnow.org/indexnow", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body,
      });
      console.log(
        `[indexnow] Submitted ${urlList.length} URL(s) to api.indexnow.org — response status: ${res.status}`,
      );
    } catch (err) {
      console.log(`[indexnow] Request failed (non-fatal, build continues): ${err.message}`);
    }
  },
};
