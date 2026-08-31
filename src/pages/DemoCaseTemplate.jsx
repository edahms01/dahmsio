import Layout from "../components/Layout.jsx";
import PageMeta from "../components/PageMeta.jsx";
import JsonLd from "../components/JsonLd.jsx";
import NetworkCanvas from "../components/NetworkCanvas.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import Reveal from "../components/Reveal.jsx";
import DemoChatMockup from "../components/mockups/DemoChatMockup.jsx";
import { INTERIOR_GLOW_BLOBS } from "../data/site.js";
import { buildBreadcrumbSchema } from "../utils/schema.js";
// Same borrow About.jsx makes: the interior template's hero/CTA typography classes, so a
// demo Case Study matches Data/Technology/Consulting exactly. DemoCaseTemplate.module.css
// holds only what's specific to a case-study narrative (single-column hero, prose sections,
// the how-it-works steps, the features list).
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
  trust,
  cta,
}) {
  return (
    <Layout blobs={INTERIOR_GLOW_BLOBS}>
      <PageMeta {...meta} />
      <JsonLd data={buildBreadcrumbSchema(meta.path, breadcrumbs)} />

      <header className={styles.hero}>
        <NetworkCanvas maxNodes={90} opacity={0.9} className={interiorStyles.heroCanvas} />
        <div className={styles.heroContent}>
          <Reveal>
            <div className={`eyebrow ${interiorStyles.anim}`}>{hero.eyebrow}</div>
            <h1 className={`${interiorStyles.h1} ${interiorStyles.anim} ${interiorStyles.animDelay1}`}>
              {hero.name}
            </h1>
            <p className={styles.tagline}>{hero.tagline}</p>
            <p className={styles.heroBody}>{hero.body}</p>
            <div className={interiorStyles.ctaRow}>
              {/* Plain <a href> (PrimaryButton's href branch), never a <Link> — the app path is
                  a real static file, not an SPA route, so client routing would 404 it. New tab
                  so the reader keeps the case study open to come back to. */}
              <PrimaryButton href={hero.appPath} arrow target="_blank" rel="noopener">
                {hero.tryItLabel}
              </PrimaryButton>
            </div>
          </Reveal>
        </div>
        <Reveal className={styles.mockupCol}>
          <DemoChatMockup
            question={hero.mockupQuestion}
            answer={hero.mockupAnswer}
            answerSource={hero.mockupSource}
          />
        </Reveal>
      </header>

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
        <Prose {...trust} />
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
