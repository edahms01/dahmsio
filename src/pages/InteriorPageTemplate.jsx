import Layout from "../components/Layout.jsx";
import JsonLd from "../components/JsonLd.jsx";
import NetworkCanvas from "../components/NetworkCanvas.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import SecondaryButton from "../components/SecondaryButton.jsx";
import Reveal from "../components/Reveal.jsx";
import CapabilityCard from "../components/CapabilityCard.jsx";
import SubServiceSection from "../components/SubServiceSection.jsx";
import PipelineStep from "../components/PipelineStep.jsx";
import { INTERIOR_GLOW_BLOBS } from "../data/site.js";
import { buildBreadcrumbSchema } from "../utils/schema.js";
import styles from "./InteriorPageTemplate.module.css";

// TEMPORARY, build-sequencing-only: this template is shared by Data/Technology/Consulting,
// but the sub-service expansion (subservice-expansion-plan-v6 / code-instructions-
// subservices-v2) migrates one page at a time with a stop for approval between each. Until
// Technology and Consulting get their own pass, they still export the old CAPABILITIES* shape
// from their data files, so both rendering paths need to keep working here. `subserviceGroups`
// present -> new accordion; absent -> old CapabilityCard grid. Remove the old path once all
// three pages are migrated (flagged again at the Consulting stop point).
export default function InteriorPageTemplate({
  breadcrumbPath,
  eyebrow,
  heroPrefix,
  heroAccent,
  heroSubcopy,
  primaryCtaLabel,
  mockup,
  subserviceGroups,
  capabilitiesHeading,
  capabilitiesHeadingWidth,
  capabilities,
  pipelineEyebrow,
  pipelineHeading,
  pipeline,
  pipelineStageLines,
  ctaHeading,
  ctaText,
  ctaButtonLabel,
}) {
  return (
    <Layout blobs={INTERIOR_GLOW_BLOBS}>
      <JsonLd data={buildBreadcrumbSchema(breadcrumbPath)} />
      <header className={styles.hero}>
        <NetworkCanvas maxNodes={90} linkDist={130} opacity={0.9} className={styles.heroCanvas} />
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
            <SecondaryButton href="#capabilities">See capabilities</SecondaryButton>
          </div>
        </div>
        {mockup}
      </header>

      {/* id="capabilities" kept as-is even on migrated pages — the hero's "See capabilities"
          SecondaryButton above links here and that hardcoded label/anchor is out of scope for
          this pass. */}
      <section id="capabilities" className={styles.capabilities}>
        {subserviceGroups ? (
          <SubServiceSection groups={subserviceGroups} ctaLabel={primaryCtaLabel} />
        ) : (
          <>
            <Reveal>
              <div className="eyebrow">Capabilities</div>
              <h2
                className={`sectionHeading ${styles.capabilitiesHeading}`}
                style={capabilitiesHeadingWidth ? { maxWidth: capabilitiesHeadingWidth } : undefined}
              >
                {capabilitiesHeading}
              </h2>
            </Reveal>
            <div className={styles.capabilitiesGrid}>
              {capabilities.map((cap, i) => (
                <Reveal key={cap.title} delay={i * 120}>
                  <CapabilityCard {...cap} />
                </Reveal>
              ))}
            </div>
          </>
        )}
      </section>

      <section className={styles.pipeline}>
        <Reveal className={styles.pipelineHead}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>
            {pipelineEyebrow}
          </div>
          <h2 className="sectionHeading" style={{ fontSize: "clamp(28px, 3.8vw, 46px)" }}>
            {pipelineHeading}
          </h2>
        </Reveal>
        <div className={`${styles.pipelineGrid} ${pipelineStageLines ? styles.withLines : ""}`}>
          {pipeline.map((step, i) => (
            <Reveal
              key={step.title}
              delay={i * 100}
              duration={700}
              className={styles.stepItem}
              style={pipelineStageLines ? { "--row": i + 1 } : undefined}
            >
              <PipelineStep {...step} />
            </Reveal>
          ))}
          {pipelineStageLines?.map((line) => {
            const rowStart = Math.min(...line.steps) + 1;
            const rowEnd = Math.max(...line.steps) + 2;
            const mobileLabels = line.mobileLabels ?? line.labels;

            return (
              <div
                key={line.labels.join("/")}
                className={styles.stageLine}
                style={{
                  "--col-start": rowStart,
                  "--col-end": rowEnd,
                  "--row-start": rowStart,
                  "--row-end": rowEnd,
                }}
              >
                <span className={styles.stageLineBracket} aria-hidden="true" />
                <span className={styles.stageLineRail} aria-hidden="true" />
                <span className={`${styles.stageLineLabel} ${styles.stageLineLabelDesktop}`}>
                  {line.labels.map((label) => (
                    <span key={label} className={styles.stageLineLabelLine}>
                      {label}
                    </span>
                  ))}
                </span>
                <span className={`${styles.stageLineLabel} ${styles.stageLineLabelMobile}`}>
                  {mobileLabels.map((label) => (
                    <span key={label} className={styles.stageLineLabelLine}>
                      {label}
                    </span>
                  ))}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.cta}>
        <NetworkCanvas maxNodes={34} linkDist={110} opacity={0.5} className={styles.ctaCanvas} />
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
