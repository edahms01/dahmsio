import Layout from "../components/Layout.jsx";
import PageMeta from "../components/PageMeta.jsx";
import JsonLd from "../components/JsonLd.jsx";
import NetworkCanvas from "../components/NetworkCanvas.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import Reveal from "../components/Reveal.jsx";
import AppWindowMockup from "../components/mockups/AppWindowMockup.jsx";
import CapabilityCard from "../components/CapabilityCard.jsx";
import { INTERIOR_GLOW_BLOBS } from "../data/site.js";
import { META, HERO, BACKGROUND, CREDIBILITY, HOW_WE_WORK, HEADSHOT, FOUNDERS_NOTE, CTA } from "../data/about.js";
import { buildBreadcrumbSchema } from "../utils/schema.js";
// Reusing the interior page template's own hero/CTA text classes directly — same file, same
// classnames — so typography matches Data/Technology/Consulting exactly. The hero and
// Founder's Note containers are custom to this page (see About.module.css): the hero has no
// side-by-side mockup slot (headshot moved to the Founder's Note instead), and the Founder's
// Note needs its own paired-with-headshot grid.
import interiorStyles from "./InteriorPageTemplate.module.css";
import styles from "./About.module.css";

export default function About() {
  return (
    <Layout blobs={INTERIOR_GLOW_BLOBS}>
      <PageMeta {...META} />
      <JsonLd data={buildBreadcrumbSchema(META.path)} />

      <header className={styles.hero}>
        <NetworkCanvas maxNodes={90} linkDist={130} opacity={0.9} className={interiorStyles.heroCanvas} />
        <div className={styles.heroInner}>
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
      </header>

      {/* Section 1 — Background */}
      <section className={styles.section}>
        <Reveal className={styles.sectionIntro}>
          <h2 className="sectionHeading">{BACKGROUND.heading}</h2>
          {BACKGROUND.paragraphs.map((paragraph, i) => (
            <p key={i} className={styles.sectionText}>
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal>
          <h3 className={styles.subheading}>{CREDIBILITY.heading}</h3>
          <div className={styles.credibilityGrid}>
            {CREDIBILITY.items.map((item) => (
              <div key={item.lead} className={styles.leadItem}>
                <span className={styles.leadItemLead}>{item.lead}</span>
                {item.body}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Section 2 — How We Work */}
      <section className={styles.section}>
        <Reveal className={styles.sectionIntro}>
          <h2 className="sectionHeading">{HOW_WE_WORK.heading}</h2>
          <p className={styles.sectionText}>{HOW_WE_WORK.paragraph}</p>
        </Reveal>

        <Reveal>
          <h3 className={styles.subheading}>{HOW_WE_WORK.engagementHeading}</h3>
          {/* Same CapabilityCard + grid used for Data/Technology/Consulting's capabilities
              sections — matches the rest of the site instead of a bespoke card style. */}
          <div className={interiorStyles.capabilitiesGrid}>
            {HOW_WE_WORK.engagementModels.map((model) => (
              <CapabilityCard key={model.title} {...model} />
            ))}
          </div>

          <h3 className={styles.subheading}>{HOW_WE_WORK.operatingHeading}</h3>
          <ul className={styles.operatingPrinciples}>
            {HOW_WE_WORK.operatingPrinciples.map((principle) => (
              <li key={principle.lead} className={styles.operatingPrinciple}>
                <span className={styles.operatingPrincipleLead}>{principle.lead}</span> {principle.body}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Section 3 — Founder's Note: the one deliberate first-person exception, paired with
          the headshot. */}
      <section className={styles.foundersNote}>
        <Reveal className={styles.foundersNoteGrid}>
          <AppWindowMockup filename={HEADSHOT.filename}>
            <div className={styles.headshotPlaceholder}>
              {/* TODO(Eric): swap for <img src="/headshot.jpg" alt="Eric Dahms, founder of DahmsIO" /> once a real headshot exists. */}
              <span>Headshot coming soon</span>
            </div>
          </AppWindowMockup>
          <div>
            <h2 className="sectionHeading">{FOUNDERS_NOTE.heading}</h2>
            {FOUNDERS_NOTE.paragraphs.map((paragraph, i) => (
              <p key={i} className={styles.foundersNoteText}>
                {paragraph}
              </p>
            ))}
            <p className={styles.signature}>{FOUNDERS_NOTE.signature}</p>
            <ul className={styles.credentials}>
              {FOUNDERS_NOTE.credentials.map((credential) => (
                <li key={credential}>{credential}</li>
              ))}
            </ul>
          </div>
        </Reveal>
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
