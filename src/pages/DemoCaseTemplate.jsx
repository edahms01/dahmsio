import Layout from "../components/Layout.jsx";
import PageMeta from "../components/PageMeta.jsx";
import JsonLd from "../components/JsonLd.jsx";
import NetworkCanvas from "../components/NetworkCanvas.jsx";
import HeroSection, { HeroEyebrow, HeroHeading, HeroActions } from "../components/HeroSection.jsx";
import heroStyles from "../components/HeroSection.module.css";
import PrimaryButton from "../components/PrimaryButton.jsx";
import Reveal from "../components/Reveal.jsx";
import DemoScreenshotFrame from "../components/mockups/DemoScreenshotFrame.jsx";
import { INTERIOR_GLOW_BLOBS } from "../data/site.js";
import { buildBreadcrumbSchema } from "../utils/schema.js";
// Hero is the shared <HeroSection>. The CTA still borrows InteriorPageTemplate's CTA classes
// so it matches Data/Technology/Consulting exactly. DemoCaseTemplate.module.css holds only
// what's specific to a case-study narrative (the hero's tagline/body, prose sections, the
// how-it-works steps, the features list).
import interiorStyles from "./InteriorPageTemplate.module.css";
import styles from "./DemoCaseTemplate.module.css";

/**
 * Shared page template for a demo's Case Study — reusable for future demos, one data module
 * per demo (see src/data/demoGodsHeroesMonsters.js). Uses Layout directly rather than
 * InteriorPageTemplate, the same way About.jsx does, since a case-study narrative doesn't
 * fit the hero / capabilities / pipeline / CTA shape: header, nav, and footer still come
 * from Layout, so the page stays inside the full DahmsIO template.
 */
export default function DemoCaseTemplate({
  meta,
  breadcrumbs,
  hero,
  problem,
  whatItDoes,
  howItWorks,
  features,
  who,
  cta,
}) {
  return (
    <Layout blobs={INTERIOR_GLOW_BLOBS}>
      <PageMeta {...meta} />
      <JsonLd data={buildBreadcrumbSchema(meta.path, breadcrumbs)} />

      <HeroSection
        mockupClassName={styles.demoMockup}
        mockup={
          <DemoScreenshotFrame
            src={hero.screenshot}
            alt={hero.screenshotAlt}
            label={hero.screenshotLabel}
          />
        }
      >
        <HeroEyebrow>{hero.eyebrow}</HeroEyebrow>
        <HeroHeading>{hero.name}</HeroHeading>
        <p className={`${styles.tagline} ${heroStyles.anim} ${heroStyles.animDelay2}`}>{hero.tagline}</p>
        <p className={`${styles.heroBody} ${heroStyles.anim} ${heroStyles.animDelay2}`}>{hero.body}</p>
        <HeroActions>
          {/* Plain <a href> (PrimaryButton's href branch), never a <Link> — the app path is a
              real static file, not an SPA route, so client routing would 404 it. New tab so
              the reader keeps the case study open to come back to. */}
          <PrimaryButton href={hero.appPath} arrow target="_blank" rel="noopener">
            {hero.tryItLabel}
          </PrimaryButton>
        </HeroActions>
      </HeroSection>

      <article className={styles.body}>
        <Prose {...problem} />
        <Prose {...whatItDoes} />

        <section className={styles.section}>
          <Reveal>
            <h2 className="sectionHeading">{howItWorks.heading}</h2>
            <ol className={styles.steps}>
              {howItWorks.steps.map((step) => (
                <li key={step.lead}>
                  <span className={styles.stepLead}>{step.lead}</span> {step.body}
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        <section className={styles.section}>
          <Reveal>
            <h2 className="sectionHeading">{features.heading}</h2>
            <ul className={styles.features}>
              {features.items.map((item) => (
                <li key={item.lead} className={styles.feature}>
                  <span className={styles.featureLead}>{item.lead}</span> {item.body}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        <Prose {...who} />
      </article>

      <section className={interiorStyles.cta}>
        <NetworkCanvas maxNodes={70} opacity={0.7} className={interiorStyles.ctaCanvas} />
        <Reveal duration={900} className={interiorStyles.ctaInner}>
          <h2 className={`sectionHeading ${interiorStyles.ctaHeading}`}>{cta.heading}</h2>
          <p className={interiorStyles.ctaText}>{cta.text}</p>
          <PrimaryButton to={cta.buttonTo} size="lg" arrow>
            {cta.buttonLabel}
          </PrimaryButton>
        </Reveal>
      </section>
    </Layout>
  );
}

function Prose({ heading, body }) {
  return (
    <section className={styles.section}>
      <Reveal>
        <h2 className="sectionHeading">{heading}</h2>
        <p className={styles.prose}>{body}</p>
      </Reveal>
    </section>
  );
}
