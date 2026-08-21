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
 * BreadcrumbList JSON-LD for an interior page: Home > <page>. The page's label is looked up
 * from NAV_LINKS by path, so it can't drift from what's actually in the nav. Not used on the
 * homepage itself — a single-crumb trail isn't meaningful there.
 */
export function buildBreadcrumbSchema(path) {
  const name = NAV_LINKS.find((link) => link.to === path)?.label ?? path;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}
