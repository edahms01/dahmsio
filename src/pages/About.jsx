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
import {
  META,
  HERO,
  MOCKUP,
  BACKGROUND,
  CREDIBILITY,
  HOW_WE_WORK,
  BENCH_NETWORK,
  HEADSHOT,
  FOUNDERS_NOTE,
  CTA,
} from "../data/about.js";
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
        <NetworkCanvas maxNodes={90} opacity={0.9} className={interiorStyles.heroCanvas} />
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
      <section className={`${styles.section} ${styles.sectionFirst}`}>
        {/* Eyebrow + big statement heading, matching Data/Technology/Consulting's
            "Capabilities"/"The pipeline" pattern — the nested subheadings elsewhere on this
            page (operatingHeading) stay at .subheading's smaller size, since those pages
            don't have an equivalent second heading level to match against. No width cap on
            this wrapper (a previous 68ch cap here was removed) — "Enterprise capability,
            brought within reach." needs ~910px to sit on one line at this font size, and the
            section's own full width comfortably covers that; a ch cap belongs on flowing
            paragraph prose, not a short headline like this one. */}
        <Reveal>
          <div className="eyebrow" style={{ marginBottom: 14 }}>
            {BACKGROUND.eyebrow}
          </div>
          <h2 className="sectionHeading" style={{ fontSize: "clamp(28px, 3.8vw, 46px)" }}>
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

      {/* Section 2 — Credibility: its own section (not folded into Background) so it gets the
          same section-to-section rhythm as everywhere else on the page — no divider line, just
          the standard 70px-bottom/70px-top padding stack (140px gap), matching how
          Data/Technology/Consulting separate Capabilities from Pipeline. Same eyebrow +
          big-heading treatment as Background/How We Work below, now that this is a peer
          section rather than a nested subsection of Background — but centered above the grid
          rather than left-aligned, same .sectionHeadCentered treatment (and marginBottom:0
          override) as Engagement Models below, since these six cards read as a set rather
          than a left-to-right continuation of prose the way Background's copy does. */}
      <section className={styles.section}>
        <Reveal className={styles.sectionHeadCentered} style={{ marginBottom: 0 }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>
            {CREDIBILITY.eyebrow}
          </div>
          <h2 className="sectionHeading" style={{ fontSize: "clamp(28px, 3.8vw, 46px)" }}>
            {CREDIBILITY.heading}
          </h2>
        </Reveal>
        <Reveal className={styles.credibilityGrid}>
          {CREDIBILITY.items.map((item) => (
            <div key={item.lead} className={styles.leadItem} style={{ "--hover-border": item.hoverBorder }}>
              <span className={styles.leadItemLead}>{item.lead}</span>
              <span className={styles.leadItemBody}>{item.body}</span>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Section 3 — How We Work (intro only; Operating Principles and Engagement Models are
          each their own section below). */}
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
            <h2 className="sectionHeading" style={{ fontSize: "clamp(28px, 3.8vw, 46px)" }}>
              {HOW_WE_WORK.heading}
            </h2>
            <p className={styles.sectionText}>{HOW_WE_WORK.paragraph}</p>
          </div>
        </Reveal>
      </section>

      {/* Section 4 — Operating Principles: its own section, same rhythm/spacing rationale and
          centered eyebrow + big-heading treatment as Credibility/Engagement Models. */}
      <section className={styles.section}>
        <Reveal className={styles.sectionHeadCentered} style={{ marginBottom: 0 }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>
            {HOW_WE_WORK.operatingEyebrow}
          </div>
          <h2 className="sectionHeading" style={{ fontSize: "clamp(28px, 3.8vw, 46px)" }}>
            {HOW_WE_WORK.operatingHeading}
          </h2>
        </Reveal>
        <Reveal className={styles.operatingPrinciples} as="ul">
          {HOW_WE_WORK.operatingPrinciples.map((principle) => (
            <li key={principle.lead} className={styles.operatingPrinciple}>
              <span className={styles.operatingPrincipleLead}>{principle.lead}</span> {principle.body}
            </li>
          ))}
        </Reveal>
      </section>

      {/* Section 5 — Engagement Models: its own section, same rhythm/spacing rationale and
          eyebrow + big-heading treatment as Credibility above, but centered above the grid
          (the four cards read as a set, not a left-to-right continuation of prose the way
          Credibility's/Background's copy-heavy sections do) — same .sectionHeadCentered
          treatment as How We Work's eyebrow, marginBottom zeroed so the gap down to the grid
          still comes from .engagementGrid's own 44px margin-top alone. */}
      <section className={styles.section}>
        <Reveal className={styles.sectionHeadCentered} style={{ marginBottom: 0 }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>
            {HOW_WE_WORK.engagementEyebrow}
          </div>
          <h2 className="sectionHeading" style={{ fontSize: "clamp(28px, 3.8vw, 46px)" }}>
            {HOW_WE_WORK.engagementHeading}
          </h2>
        </Reveal>
        {/* Reuses CapabilityCard directly (see .engagementCard below for its own tuned
            padding) inside a 2x2 grid of its own — .engagementGrid, not
            interiorStyles.capabilitiesGrid: that class doesn't actually exist in
            InteriorPageTemplate.module.css (Data/Technology/Consulting build their capability
            cards through SubServiceSection instead), so referencing it here was a latent bug —
            these four cards were rendering as a plain single-column stack, not a grid, until
            now. margin-top matches the 44px heading-to-grid gap used elsewhere on this page
            (see .credibilityGrid) now that this heading has no intro paragraph before it. */}
        <Reveal className={styles.engagementGrid}>
          {HOW_WE_WORK.engagementModels.map((model) => (
            <CapabilityCard key={model.title} {...model} className={styles.engagementCard} />
          ))}
        </Reveal>
      </section>

      {/* Section 6 — Founder's Note: the one deliberate first-person-voice exception, paired
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
          content sits equidistant between the Founder's Note section above and the footer's
          border-top below (both then rely solely on ctaInner's own symmetric 70px top/bottom
          padding). No top border on this section itself (removed per Eric's call). */}
      <section className={`${interiorStyles.cta} ${styles.ctaCenterBetweenLines}`}>
        <NetworkCanvas maxNodes={70} opacity={0.7} className={interiorStyles.ctaCanvas} />
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
