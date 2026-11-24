import Layout from "../components/Layout.jsx";
import PageMeta from "../components/PageMeta.jsx";
import JsonLd from "../components/JsonLd.jsx";
import FlowField from "../components/FlowField.jsx";
import HeroSection, { HeroEyebrow, HeroHeading, HeroLede, HeroActions } from "../components/HeroSection.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import Reveal from "../components/Reveal.jsx";
import AppWindowMockup from "../components/mockups/AppWindowMockup.jsx";
import OrbitNetworkMockup from "../components/mockups/OrbitNetworkMockup.jsx";
import BenchNetworkMockup from "../components/mockups/BenchNetworkMockup.jsx";
import {
  META,
  HERO,
  MOCKUP,
  BACKGROUND,
  HOW_WE_WORK,
  BENCH_NETWORK,
  HEADSHOT,
  FOUNDERS_NOTE,
  CTA,
} from "../data/about.js";
import { buildBreadcrumbSchema } from "../utils/schema.js";
// The hero comes from the shared HeroSection component. The CTA still borrows
// InteriorPageTemplate's CTA classes so it matches Data/Technology/Consulting exactly; the
// rest of this page's sections (Background, Our network, Founder's Note) are custom to
// About — see About.module.css.
import interiorStyles from "./InteriorPageTemplate.module.css";
import styles from "./About.module.css";

export default function About() {
  return (
    <Layout>
      <PageMeta {...META} />
      <JsonLd data={buildBreadcrumbSchema(META.path)} />

      <HeroSection
        wide
        mockup={
          <AppWindowMockup filename={MOCKUP.filename}>
            <OrbitNetworkMockup />
          </AppWindowMockup>
        }
      >
        <HeroEyebrow>{HERO.eyebrow}</HeroEyebrow>
        <HeroHeading prefix={HERO.heroPrefix} accent={HERO.heroAccent} />
        <HeroLede>{HERO.heroSubcopy}</HeroLede>
        <HeroActions>
          <PrimaryButton to="/contact/" arrow>
            {HERO.primaryCtaLabel}
          </PrimaryButton>
        </HeroActions>
      </HeroSection>

      {/* Section 1 — Background */}
      <section className={`${styles.section} ${styles.sectionFirst}`}>
        {/* Eyebrow + big statement heading, matching Data/Technology/Consulting's
            "Capabilities"/"The pipeline" pattern — the nested subheadings elsewhere on this
            page (the Founder's Note heading) stay at .subheading's smaller size, since those pages
            don't have an equivalent second heading level to match against. No width cap on
            this wrapper (a previous 68ch cap here was removed) — "Enterprise capability,
            brought within reach." needs ~910px to sit on one line at this font size, and the
            section's own full width comfortably covers that; a ch cap belongs on flowing
            paragraph prose, not a short headline like this one. Centered to match every other
            section's eyebrow+heading treatment (How We Work, Founder's Note) even though the body below stays in left-aligned
            two-column prose. */}
        <Reveal className={styles.sectionHeadCentered} style={{ marginBottom: 0 }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>
            {BACKGROUND.eyebrow}
          </div>
          <h2 className="sectionHeading">
            {BACKGROUND.heading}
          </h2>
        </Reveal>

        {/* True two-column text flow (CSS columns, not a grid) — paragraphs run down the
            left column then continue into the right, wherever they land. No per-paragraph
            break hint needed here (unlike a prior version of this copy): .backgroundText's
            break-inside:avoid-column keeps every paragraph whole, and the balancer alone
            splits this particular set of four paragraphs 2-and-2, with both columns landing
            at nearly the same height. */}
        <Reveal className={styles.backgroundColumns}>
          {BACKGROUND.paragraphs.map((paragraph, i) => (
            <p key={i} className={`${styles.sectionText} ${styles.backgroundText}`}>
              {paragraph}
            </p>
          ))}
        </Reveal>
      </section>

      {/* Section 2 — How We Work ("Our network"). */}
      <section className={styles.section}>
        {/* Eyebrow centered above the whole graphic + text pairing (same treatment as
            Founder's Note's eyebrow above its own two-column grid), heading/paragraph left-
            aligned in their column beside the graphic. */}
        <Reveal className={styles.sectionHeadCentered} style={{ marginBottom: 28 }}>
          <div className="eyebrow">{HOW_WE_WORK.eyebrow}</div>
        </Reveal>
        <Reveal className={styles.howWeWorkGrid}>
          <AppWindowMockup filename={BENCH_NETWORK.filename}>
            <BenchNetworkMockup {...BENCH_NETWORK} />
          </AppWindowMockup>
          <div>
            <h2 className="sectionHeading">
              {HOW_WE_WORK.heading}
            </h2>
            <p className={styles.sectionText}>{HOW_WE_WORK.paragraph}</p>
          </div>
        </Reveal>
      </section>

      {/* Section 3 — Founder's Note: the one deliberate first-person-voice exception, paired
          with the headshot. Eyebrow sits centered above the whole two-column grid (graphic +
          text), not tucked inside the text column, so it reads as this section's title the
          same way BACKGROUND's and HOW_WE_WORK's centered eyebrows do. Uses the standard
          .section shell (not a bespoke one) so its padding matches every other section on the
          page exactly (140px gap on both sides) — the first-person shift is signaled by the
          copy and heading alone now, not by an extra 10px of padding or a divider line. */}
      <section className={styles.section}>
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
          content sits equidistant between the Founder's Note section above and the footer below (both then rely solely on the CTA's own symmetric padding). No top border on this section itself (removed per Eric's call). */}
      <section className={`${interiorStyles.cta} ${styles.ctaCenterBetweenLines}`}>
        <FlowField variant="cta" className={interiorStyles.ctaCanvas} />
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
