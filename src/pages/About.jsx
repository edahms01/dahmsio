import Layout from "../components/Layout.jsx";
import PageMeta from "../components/PageMeta.jsx";
import JsonLd from "../components/JsonLd.jsx";
import NetworkCanvas from "../components/NetworkCanvas.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import Reveal from "../components/Reveal.jsx";
import AppWindowMockup from "../components/mockups/AppWindowMockup.jsx";
import OrbitNetworkMockup from "../components/mockups/OrbitNetworkMockup.jsx";
import BenchNetworkMockup from "../components/mockups/BenchNetworkMockup.jsx";
import CapabilityCard from "../components/CapabilityCard.jsx";
import { INTERIOR_GLOW_BLOBS } from "../data/site.js";
import { META, HERO, MOCKUP, BACKGROUND, CREDIBILITY, HOW_WE_WORK, HEADSHOT, FOUNDERS_NOTE, CTA } from "../data/about.js";
import { buildBreadcrumbSchema } from "../utils/schema.js";
// Reusing the interior page template's own hero/CTA text classes directly — same file, same
// classnames — so typography matches Data/Technology/Consulting exactly. The hero and
// Founder's Note containers are custom to this page (see About.module.css): the hero uses its
// own two-column grid (mirroring InteriorPageTemplate's) for the network mockup, and the
// Founder's Note needs its own paired-with-headshot grid (the headshot lives there, not in
// the hero).
import interiorStyles from "./InteriorPageTemplate.module.css";
import styles from "./About.module.css";

export default function About() {
  return (
    <Layout blobs={INTERIOR_GLOW_BLOBS}>
      <PageMeta {...META} />
      <JsonLd data={buildBreadcrumbSchema(META.path)} />

      <header className={styles.hero}>
        <NetworkCanvas maxNodes={90} linkDist={130} opacity={0.9} className={interiorStyles.heroCanvas} />
        <div>
          <div className={`eyebrow ${interiorStyles.anim}`}>{HERO.eyebrow}</div>
          <h1 className={`${interiorStyles.h1} ${interiorStyles.anim} ${interiorStyles.animDelay1}`}>
            {HERO.heroPrefix} <span className={interiorStyles.gradientSpan}>{HERO.heroAccent}.</span>
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
        {/* .heroMockupOffset: the grid is top-aligned (see .hero) so the mockup's position is
            deterministic regardless of headline length, then nudged down by the eyebrow's own
            height so its top lines up with the H1 headline, not the eyebrow above it —
            matching how the mockup reads on Data/Technology/Consulting (their taller,
            multi-line headlines put the vertically-centered mockup at headline height too;
            About's shorter 2-line headline doesn't get there by centering alone). */}
        <AppWindowMockup filename={MOCKUP.filename} className={styles.heroMockupOffset}>
          <OrbitNetworkMockup />
        </AppWindowMockup>
      </header>

      {/* Section 1 — Background */}
      <section className={styles.section}>
        {/* Eyebrow + big statement heading, matching Data/Technology/Consulting's
            "Capabilities"/"The pipeline" pattern — the nested subheadings below (CREDIBILITY,
            engagementHeading, operatingHeading) stay at .subheading's smaller size, since
            those pages don't have an equivalent second heading level to match against. */}
        <Reveal className={styles.sectionIntro}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>
            {BACKGROUND.eyebrow}
          </div>
          <h2 className="sectionHeading" style={{ fontSize: "clamp(28px, 3.8vw, 46px)" }}>
            {BACKGROUND.heading}
          </h2>
        </Reveal>

        {/* True two-column text flow (CSS columns, not a grid) — paragraphs run down the
            left column then continue into the right. Left unhinted, the auto-balancer put
            the break right before paragraphs[2] ("It's not that the technology..."),
            leaving column 2 a line longer than column 1; keeping that paragraph off column
            2's top pulls it back up into column 1 instead. */}
        <Reveal className={styles.backgroundColumns}>
          {BACKGROUND.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className={`${styles.sectionText} ${styles.backgroundText} ${i === 2 ? styles.backgroundKeepWithPrev : ""}`}
            >
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal>
          <h3 className={styles.subheading}>{CREDIBILITY.heading}</h3>
          <div className={styles.credibilityGrid}>
            {CREDIBILITY.items.map((item) => (
              <div key={item.lead} className={styles.leadItem} style={{ "--hover-border": item.hoverBorder }}>
                <span className={styles.leadItemLead}>{item.lead}</span>
                <span className={styles.leadItemBody}>{item.body}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Section 2 — How We Work */}
      <section className={styles.section}>
        {/* Eyebrow centered above the whole graphic + text pairing (same treatment as
            Founder's Note's eyebrow above its own two-column grid), heading/paragraph left-
            aligned in their column beside the graphic. No top border here — Background's own
            70px bottom padding + this section's 70px top padding already match the 140px gap
            Data/Technology/Consulting use between Capabilities and Pipeline, without needing
            a divider line to mark it. */}
        <Reveal className={styles.sectionHeadCentered} style={{ marginBottom: 28 }}>
          <div className="eyebrow">{HOW_WE_WORK.eyebrow}</div>
        </Reveal>
        <Reveal className={styles.howWeWorkGrid}>
          <AppWindowMockup filename="experts.io">
            <BenchNetworkMockup />
          </AppWindowMockup>
          <div>
            <h2 className="sectionHeading" style={{ fontSize: "clamp(28px, 3.8vw, 46px)" }}>
              {HOW_WE_WORK.heading}
            </h2>
            <p className={styles.sectionText}>{HOW_WE_WORK.paragraph}</p>
          </div>
        </Reveal>

        <Reveal>
          <h3 className={styles.subheading}>{HOW_WE_WORK.operatingHeading}</h3>
          <ul className={styles.operatingPrinciples}>
            {HOW_WE_WORK.operatingPrinciples.map((principle) => (
              <li key={principle.lead} className={styles.operatingPrinciple}>
                <span className={styles.operatingPrincipleLead}>{principle.lead}</span> {principle.body}
              </li>
            ))}
          </ul>

          <h3 className={styles.subheading}>{HOW_WE_WORK.engagementHeading}</h3>
          {/* Same CapabilityCard + grid used for Data/Technology/Consulting's capabilities
              sections — matches the rest of the site instead of a bespoke card style.
              .engagementGridSpacing zeroes interiorStyles.capabilitiesGrid's own 52px
              margin-top (tuned for that template's bigger heading) so the header-to-body gap
              here matches CREDIBILITY's (28px, from .subheading's margin-bottom alone). */}
          <div className={`${interiorStyles.capabilitiesGrid} ${styles.engagementGridSpacing}`}>
            {HOW_WE_WORK.engagementModels.map((model) => (
              <CapabilityCard key={model.title} {...model} className={styles.engagementCard} />
            ))}
          </div>
        </Reveal>
      </section>

      {/* Section 3 — Founder's Note: the one deliberate first-person exception, paired with
          the headshot. Eyebrow sits centered above the whole two-column grid (graphic +
          text), not tucked inside the text column, so it reads as this section's title the
          same way BACKGROUND's and HOW_WE_WORK's centered eyebrows do. */}
      <section className={`${styles.foundersNote} ${styles.sectionDivider}`}>
        {/* Overrides .sectionHeadCentered's default 8px margin (tuned for a paragraph's own
            top margin to collapse against) — foundersNoteGrid has nothing to collapse with,
            so this needs its own explicit gap. */}
        <Reveal className={styles.sectionHeadCentered} style={{ marginBottom: 28 }}>
          <div className="eyebrow">{FOUNDERS_NOTE.eyebrow}</div>
        </Reveal>
        <Reveal className={styles.foundersNoteGrid}>
          <AppWindowMockup filename={HEADSHOT.filename} className={styles.headshotWindow}>
            <img src={HEADSHOT.src} alt={HEADSHOT.alt} className={styles.headshotImage} />
          </AppWindowMockup>
          <div>
            <h2 className={`${styles.subheading} ${styles.subheadingFlush}`}>{FOUNDERS_NOTE.heading}</h2>
            {/* Letter treatment: a quote-style left border sets the founder's first-person
                copy apart from the rest of the (company-voice) page without resorting to
                italics — smaller type too, since it's a long aside, not the page's main
                copy. Runs through the credentials list too, so the border spans the full
                letter including its "experience" line items, not just the prose+signature. */}
            <div className={styles.letterBody}>
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
          </div>
        </Reveal>
      </section>

      {/* .ctaCenterBetweenLines zeroes interiorStyles.cta's shared 90px bottom margin so this
          content sits equidistant between the Founder's Note section above and the footer's
          border-top below (both then rely solely on ctaInner's own symmetric 70px top/bottom
          padding). No top border on this section itself (removed per Eric's call). */}
      <section className={`${interiorStyles.cta} ${styles.ctaCenterBetweenLines}`}>
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
