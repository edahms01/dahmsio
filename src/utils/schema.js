import { SITE_URL, NAV_LINKS } from "../data/site.js";
import {
  ORGANIZATION,
  FOUNDER,
  SERVICE_TYPES,
  AREA_SERVED_STATES,
  ORGANIZATION_SAME_AS,
} from "../data/organization.js";

/**
 * Site-wide ProfessionalService JSON-LD. Rendered once, in Layout.jsx, so it's present on
 * every page. Extend it by editing the config in src/data/organization.js — this function
 * only assembles what's already there, so there's nowhere else that needs updating.
 */
export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: ORGANIZATION.name,
    alternateName: ORGANIZATION.alternateName,
    url: ORGANIZATION.url,
    logo: ORGANIZATION.logo,
    image: ORGANIZATION.image,
    email: ORGANIZATION.email,
    address: ORGANIZATION.address,
    areaServed: AREA_SERVED_STATES.map((name) => ({ "@type": "State", name })),
    founder: { "@type": "Person", ...FOUNDER },
    // `serviceType` is scoped to Service/FinancialService in the schema.org vocabulary, not
    // Organization/LocalBusiness/ProfessionalService — using it directly here validates as a
    // warning (unrecognized property) in validator.schema.org. hasOfferCatalog is the
    // documented way to attach a service list to an Organization-type node instead.
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: SERVICE_TYPES.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
    ...(ORGANIZATION_SAME_AS.length > 0 ? { sameAs: ORGANIZATION_SAME_AS } : {}),
  };
}

/**
 * BreadcrumbList JSON-LD. Home is always position 1.
 *
 * Default (one string arg): a two-crumb trail Home > <page>, with the page's label looked up
 * from NAV_LINKS by path so it can't drift from what's actually in the nav.
 *
 * Deeper pages that aren't in the nav (e.g. a demo Case Study under /demos/) pass an explicit
 * `crumbs` array instead — the full ordered post-Home trail, each `{ path, label }`, last
 * entry being the current page. `path` is ignored when `crumbs` is given. A crumb's `path`
 * may carry a fragment (e.g. "/technology/#demos") to point at an on-page anchor.
 *
 * Not used on the homepage itself — a single-crumb trail isn't meaningful there.
 */
export function buildBreadcrumbSchema(path, crumbs) {
  const trail = crumbs ?? [
    { path, label: NAV_LINKS.find((link) => link.to === path)?.label ?? path },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      ...trail.map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: crumb.label,
        item: `${SITE_URL}${crumb.path}`,
      })),
    ],
  };
}
