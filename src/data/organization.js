import { SITE_URL, CONTACT_EMAIL } from "./site.js";

export const ORGANIZATION = {
  name: "DahmsIO",
  alternateName: ["Dahms IO", "dahms.io"],
  url: SITE_URL,
  logo: `${SITE_URL}/icon-512.png`,
  image: `${SITE_URL}/og-image.png`,
  email: CONTACT_EMAIL,
};

// Extended with real bio details (url, credentials, etc.) once /about ships — see T4.
export const FOUNDER = {
  name: "Eric Dahms",
  jobTitle: "Founder",
};

export const SERVICE_TYPES = [
  "Data Engineering",
  "Business Intelligence",
  "Workflow Automation",
  "AI Implementation",
  "Full-Stack Development",
  "Econometric Analysis",
];

export const AREA_SERVED_STATES = [
  "Maine",
  "New Hampshire",
  "Vermont",
  "Massachusetts",
  "Rhode Island",
  "Connecticut",
];

// TODO(Eric): populate with your real public profile URLs. Each one strengthens the
// disambiguation signal search engines use to tell DahmsIO apart from unrelated companies
// and people also named Dahms.
export const SAME_AS = [
  // "https://www.linkedin.com/company/REPLACE_ME",
  // "https://www.linkedin.com/in/REPLACE_ME",
  // "https://github.com/REPLACE_ME",
  // Google Business Profile URL, once created (see post-deploy checklist).
  // "https://www.google.com/maps/place/REPLACE_ME",
];
