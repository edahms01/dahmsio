import { SITE_URL, CONTACT_EMAIL } from "./site.js";

// TODO(Eric): Google's Rich Results Test flags priceRange and telephone as missing (both
// optional, non-critical — schema currently validates clean without them). address was added
// 2026-08-21 (Westbrook + London). Wire priceRange/telephone into buildOrganizationSchema() in
// src/utils/schema.js once resolved.
export const ORGANIZATION = {
  name: "DahmsIO",
  alternateName: ["Dahms IO", "dahms.io"],
  url: SITE_URL,
  logo: `${SITE_URL}/icon-512.png`,
  image: `${SITE_URL}/og-image.jpg`,
  email: CONTACT_EMAIL,
  // Two physical locations — Eric's US home base and his UK office. Order (Westbrook first)
  // matches the "Where We Work" block on the About page. Kept here rather than as a bare
  // array literal so it reads as one source of truth alongside the rest of ORGANIZATION.
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "607 Bridgton Rd",
      addressLocality: "Westbrook",
      addressRegion: "ME",
      postalCode: "04092",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "71-75 Shelton Street, Covent Garden",
      addressLocality: "London",
      postalCode: "WC2H 9JQ",
      addressCountry: "GB",
    },
  ],
};

export const FOUNDER = {
  name: "Eric Dahms",
  jobTitle: "Founder",
  url: `${SITE_URL}/about/`,
  // Personal profile — distinct from ORGANIZATION_SAME_AS below (company page). Keep these
  // two arrays separate: this one is Eric-the-person's own profiles, not the company's.
  sameAs: ["https://www.linkedin.com/in/eric-dahms"],
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

// Organization-level profiles only — the company page, not Eric's personal accounts (see
// FOUNDER.sameAs above for that). Each one strengthens the disambiguation signal search
// engines use to tell DahmsIO apart from unrelated companies and people also named Dahms.
export const ORGANIZATION_SAME_AS = [
  "https://www.linkedin.com/company/dahmsio",
  // Google Business Profile URL, once created (see post-deploy checklist).
  // "https://www.google.com/maps/place/REPLACE_ME",
];
