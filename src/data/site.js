import { ROUTE_PATHS } from "../routes.js";

// Full link list — used by the mobile menu, where "Home" stays as an explicit way back
// since the hamburger replaces the desktop's clickable Brand/logo as the way home.
export const NAV_LINKS = [
  { label: "Home", to: ROUTE_PATHS.home },
  { label: "Data", to: ROUTE_PATHS.data },
  { label: "Technology", to: ROUTE_PATHS.technology },
  { label: "Consulting", to: ROUTE_PATHS.consulting },
  { label: "About", to: ROUTE_PATHS.about },
  { label: "Contact", to: ROUTE_PATHS.contact },
];

// Desktop nav omits "Home" — the Brand/logo at top left already links to "/", which is
// the expected pattern; a literal "Home" link reads as dated and adds clutter next to it.
export const DESKTOP_NAV_LINKS = NAV_LINKS.filter((link) => link.label !== "Home");

export const FOOTER_LINKS = [
  { label: "Data", to: ROUTE_PATHS.data },
  { label: "Technology", to: ROUTE_PATHS.technology },
  { label: "Consulting", to: ROUTE_PATHS.consulting },
  { label: "About", to: ROUTE_PATHS.about },
  { label: "Contact", to: ROUTE_PATHS.contact },
];

export const SITE_URL = "https://dahms.io";
export const SITE_NAME = "DahmsIO";

export const CONTACT_EMAIL = "hello@dahms.io";
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;
export const TAGLINE = "Where innovation meets intelligence.";

// Shared global CTA label — Nav's desktop and mobile links, and Home's hero primary button,
// all say the same thing; single-sourced here instead of three separate hardcoded copies.
export const NAV_CTA_LABEL = "Plan your next step";

// Shared UI labels for the sub-service accordion sections (Data/Technology/Consulting) —
// lives here rather than in a page data file because all three pages reuse it verbatim.
export const SUBSERVICE_LABELS = {
  symptoms: "You might need this if",
  deliverables: "What you get",
  open: "See more →",
  close: "Close ↓",
};

// Shared secondary hero CTA label for the interior-page template (Data/Technology/
// Consulting) — same reasoning as SUBSERVICE_LABELS, all three pages reuse it verbatim.
export const SEE_CAPABILITIES_LABEL = "See capabilities";

// Shared ambient background blobs for the interior pages (Data/Technology/Consulting/About) — identical across all four.
export const INTERIOR_GLOW_BLOBS = [
  {
    top: "-14%",
    right: "-8%",
    size: "50vw",
    color: "rgba(21,155,200,.26)",
    fade: 62,
    blur: 30,
    duration: 15,
    speed: 0.15,
  },
  {
    top: "44%",
    left: "-12%",
    size: "44vw",
    color: "rgba(43,184,216,.18)",
    fade: 64,
    blur: 34,
    duration: 17,
    delay: 1.5,
    speed: 0.24,
  },
];
