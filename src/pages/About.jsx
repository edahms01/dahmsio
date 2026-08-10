import Layout from "../components/Layout.jsx";
import PageMeta from "../components/PageMeta.jsx";
import JsonLd from "../components/JsonLd.jsx";
import NetworkCanvas from "../components/NetworkCanvas.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import Reveal from "../components/Reveal.jsx";
import AppWindowMockup from "../components/mockups/AppWindowMockup.jsx";
import { INTERIOR_GLOW_BLOBS } from "../data/site.js";
import { META, HERO, HEADSHOT, SECTIONS, CTA } from "../data/about.js";
import { buildBreadcrumbSchema } from "../utils/schema.js";
// Reusing the interior page template's own hero/CTA classes directly — same file, same
// classnames — so this page matches Data/Technology/Consulting exactly rather than
// approximating their look with a parallel copy of the CSS.
import interiorStyles from "./InteriorPageTemplate.module.css";
import styles from "./About.module.css";

export default function About() {
  return (
    <Layout blobs={INTERIOR_GLOW_BLOBS}>
      <PageMeta {...META} />
      <JsonLd data={buildBreadcrumbSchema(META.path)} />

      <header className={interiorStyles.hero}>
        <NetworkCanvas maxNodes={90} linkDist={130} opacity={0.9} className={interiorStyles.heroCanvas} />
        <div>
          <div className={`eyebrow ${interiorStyles.anim}`}>{HERO.eyebrow}</div>
          <h1 className={`${interiorStyles.h1} ${interiorStyles.anim} ${interiorStyles.animDelay1}`}>
            {HERO.heroPrefix} <span className={interiorStyles.gradientSpan}>{HERO.heroAccent}</span>.
          </h1>
          <p className={`${interiorStyles.subcopy} ${interiorStyles.anim} ${interiorStyles.animDelay2}`}>
            {HERO.heroSubcopy}
          </p>
          <div className={`${interiorStyles.ctaRow} ${interiorStyles.anim} ${interiorStyles.animDelay3}`}>
            <PrimaryButton to="/contact/" arrow>
              {HERO.primaryCtaLabel}
            </PrimaryButton>
          </div>
        </div>
        <AppWindowMockup filename={HEADSHOT.filename}>
          <div className={styles.headshotPlaceholder}>
            {/* TODO(Eric): swap for <img src="/headshot.jpg" alt="Eric Dahms" /> once a real headshot exists. */}
            <span>Headshot coming soon</span>
          </div>
        </AppWindowMockup>
      </header>

      <section className={styles.sections}>
        {SECTIONS.map((section) => (
          <Reveal key={section.eyebrow} className={styles.section}>
            <div className="eyebrow">{section.eyebrow}</div>
            <h2 className={`sectionHeading ${styles.sectionHeading}`}>{section.heading}</h2>
            {section.paragraphs.map((paragraph, i) => (
              <p key={i} className={styles.sectionText}>
                {paragraph}
              </p>
            ))}
          </Reveal>
        ))}
      </section>

      <section className={interiorStyles.cta}>
        <NetworkCanvas maxNodes={34} linkDist={110} opacity={0.5} className={interiorStyles.ctaCanvas} />
        <Reveal duration={900} className={interiorStyles.ctaInner}>
          <h2 className={`sectionHeading ${interiorStyles.ctaHeading}`}>{CTA.heading}</h2>
          <p className={interiorStyles.ctaText}>{CTA.text}</p>
          <PrimaryButton to="/contact/" size="lg" arrow>
            {CTA.buttonLabel}
          </PrimaryButton>
        </Reveal>
      </section>
    </Layout>
  );
}
