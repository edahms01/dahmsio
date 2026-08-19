import { SITE_URL, CONTACT_EMAIL } from "./site.js";

// TODO(Eric): Google's Rich Results Test flags priceRange, address, and telephone as
// missing (all optional, non-critical — schema currently validates clean without them).
// Add once the address/GBP question is resolved (see post-deploy checklist: GBP requires a
// verifiable address even when hidden). Wire into buildOrganizationSchema() in
// src/utils/schema.js.
export const ORGANIZATION = {
  name: "DahmsIO",
  alternateName: ["Dahms IO", "dahms.io"],
  url: SITE_URL,
  logo: `${SITE_URL}/icon-512.png`,
  image: `${SITE_URL}/og-image.jpg`,
  email: CONTACT_EMAIL,
};

export const FOUNDER = {
  name: "Eric Dahms",
  jobTitle: "Founder/CEO",
  url: `${SITE_URL}/about/`,
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of Essex" },
    { "@type": "CollegeOrUniversity", name: "Bentley University" },
    { "@type": "HighSchool", name: "Westbrook High School" },
  ],
  // TODO(Eric): hasCredential (EducationalOccupationalCredential) could carry "Certified
  // Product Manager" / "Certified Google Cloud Leader" too, if worth the extra structured
  // data — not requested yet, just noting the option.
};

// Full sub-service set from subservice-expansion-plan-v6.md, in each page's own order (Data,
// Technology, Consulting Advisory, Consulting Talent) — was a curated shortlist of 6 generic
// terms before the sub-service expansion.
export const SERVICE_TYPES = [
  "Data Foundations",
  "Reporting & Dashboards",
  "Analytics & Forecasting",
  "Data Science & Machine Learning",
  "Custom Software Development",
  "Systems Integration",
  "Workflow Automation",
  "AI Implementation",
  "Assessment & Audit",
  "Strategy & Roadmap",
  "Product & Delivery",
  "Embedded Specialists",
  "Interim Leadership",
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
