import Layout from "../components/Layout.jsx";
import JsonLd from "../components/JsonLd.jsx";
import NetworkCanvas from "../components/NetworkCanvas.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import SecondaryButton from "../components/SecondaryButton.jsx";
import Reveal from "../components/Reveal.jsx";
import SubServiceSection from "../components/SubServiceSection.jsx";
import PipelineStep from "../components/PipelineStep.jsx";
import DemoSection from "../components/DemoSection.jsx";
import { INTERIOR_GLOW_BLOBS, SEE_CAPABILITIES_LABEL } from "../data/site.js";
import { buildBreadcrumbSchema } from "../utils/schema.js";
import styles from "./InteriorPageTemplate.module.css";

export default function InteriorPageTemplate({
  breadcrumbPath,
  eyebrow,
  heroPrefix,
  heroAccent,
  heroSubcopy,
  primaryCtaLabel,
  mockup,
  subserviceGroups,
  pipelineEyebrow,
  pipelineHeading,
  pipeline,
  // Consulting-only: renders the pipeline's own section between subserviceGroups[pipelineAfterGroup]
  // and the next group instead of after the whole section, since the pipeline describes the
  // Advisory engagement only and doesn't apply to Talent. Undefined on Data/Technology, which
  // keep the pipeline in its own section after all groups.
  pipelineAfterGroup,
  // Optional — an array of demo objects (see src/data/demos.js). When present, DemoSection
  // renders just above the closing CTA. Undefined on Data/Consulting, which pass nothing and
  // render exactly as before; only Technology passes this for now.
  demos,
  ctaHeading,
  ctaText,
  ctaButtonLabel,
}) {
  const pipelineHead = (
    <Reveal className={styles.pipelineHead}>
      <div className="eyebrow" style={{ marginBottom: 14 }}>
        {pipelineEyebrow}
      </div>
      <h2 className="sectionHeading" style={{ fontSize: "clamp(28px, 3.8vw, 46px)" }}>
        {pipelineHeading}
      </h2>
    </Reveal>
  );

  const pipelineGrid = (
    <div className={styles.pipelineGrid}>
      {pipeline.map((step, i) => (
        <Reveal key={step.title} delay={i * 100} duration={700}>
          <PipelineStep {...step} />
        </Reveal>
      ))}
    </div>
  );

  return (
    <Layout blobs={INTERIOR_GLOW_BLOBS}>
      <JsonLd data={buildBreadcrumbSchema(breadcrumbPath)} />
      <header className={styles.hero}>
        <NetworkCanvas maxNodes={90} opacity={0.9} className={styles.heroCanvas} />
        <div>
          <div className={`eyebrow ${styles.anim}`}>{eyebrow}</div>
          <h1 className={`${styles.h1} ${styles.anim} ${styles.animDelay1}`}>
            {heroPrefix} <span className={styles.gradientSpan}>{heroAccent}.</span>
          </h1>
          <p className={`${styles.subcopy} ${styles.anim} ${styles.animDelay2}`}>{heroSubcopy}</p>
          <div className={`${styles.ctaRow} ${styles.anim} ${styles.animDelay3}`}>
            <PrimaryButton to="/contact/" arrow>
              {primaryCtaLabel}
            </PrimaryButton>
            <SecondaryButton href="#capabilities">{SEE_CAPABILITIES_LABEL}</SecondaryButton>
          </div>
        </div>
        {mockup}
      </header>

      {/* id="capabilities" kept as a plain anchor — the hero's SecondaryButton above links
          here; the anchor id itself is structural, not copy, so it stays hardcoded. */}
      {typeof pipelineAfterGroup === "number" ? (
        <>
          <section id="capabilities" className={styles.capabilities}>
            <SubServiceSection groups={subserviceGroups.slice(0, pipelineAfterGroup + 1)} ctaLabel={primaryCtaLabel} />
          </section>

          {/* Own <section> with the standard .pipeline padding (same as Data/Technology's
              pipeline) rather than folded inline under Advisory — inline crowded the pipeline
              against the Advisory cards with no real section break, which read like a layout
              error rather than its own step in the page. */}
          <section className={styles.pipeline}>
            {pipelineHead}
            {pipelineGrid}
          </section>

          {/* .capabilitiesFinal bumps bottom padding to match .pipeline's 100px — this section
              (not .pipeline) is what sits directly above the CTA here, and .capabilities' plain
              40px bottom padding left the pre-CTA gap noticeably tighter than the pipeline-then-
              CTA pages (Data/Technology) use. */}
          <section className={`${styles.capabilities} ${styles.capabilitiesFinal}`}>
            <SubServiceSection groups={subserviceGroups.slice(pipelineAfterGroup + 1)} ctaLabel={primaryCtaLabel} />
          </section>
        </>
      ) : (
        <>
          <section id="capabilities" className={styles.capabilities}>
            <SubServiceSection groups={subserviceGroups} ctaLabel={primaryCtaLabel} />
          </section>

          <section className={styles.pipeline}>
            {pipelineHead}
            {pipelineGrid}
          </section>
        </>
      )}

      {demos?.length ? <DemoSection demos={demos} /> : null}

      <section className={styles.cta}>
        <NetworkCanvas maxNodes={70} opacity={0.7} className={styles.ctaCanvas} />
        <Reveal duration={900} className={styles.ctaInner}>
          <h2 className={`sectionHeading ${styles.ctaHeading}`}>{ctaHeading}</h2>
          <p className={styles.ctaText}>{ctaText}</p>
          <PrimaryButton to="/contact/" size="lg" arrow>
            {ctaButtonLabel}
          </PrimaryButton>
        </Reveal>
      </section>
    </Layout>
  );
}
