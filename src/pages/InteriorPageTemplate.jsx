import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import NetworkCanvas from "../components/NetworkCanvas.jsx";
import HeroBadgePill from "../components/HeroBadgePill.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import SecondaryButton from "../components/SecondaryButton.jsx";
import Reveal from "../components/Reveal.jsx";
import CapabilityCard from "../components/CapabilityCard.jsx";
import PipelineStep from "../components/PipelineStep.jsx";
import { INTERIOR_GLOW_BLOBS } from "../data/site.js";
import styles from "./InteriorPageTemplate.module.css";

export default function InteriorPageTemplate({
  eyebrow,
  heroPrefix,
  heroAccent,
  heroSubcopy,
  primaryCtaLabel,
  mockup,
  capabilitiesHeading,
  capabilitiesHeadingWidth,
  capabilities,
  pipelineEyebrow,
  pipelineHeading,
  pipeline,
  ctaHeading,
  ctaText,
  ctaButtonLabel,
}) {
  return (
    <Layout blobs={INTERIOR_GLOW_BLOBS}>
      <header className={styles.hero}>
        <NetworkCanvas maxNodes={90} linkDist={130} opacity={0.9} className={styles.heroCanvas} />
        <div>
          <Link to="/" className={`${styles.backLink} ${styles.anim}`}>
            ← Back to home
          </Link>
          <HeroBadgePill className={`${styles.badge} ${styles.anim}`}>{eyebrow}</HeroBadgePill>
          <h1 className={`${styles.h1} ${styles.anim} ${styles.animDelay1}`}>
            {heroPrefix} <span className={styles.gradientSpan}>{heroAccent}</span>.
          </h1>
          <p className={`${styles.subcopy} ${styles.anim} ${styles.animDelay2}`}>{heroSubcopy}</p>
          <div className={`${styles.ctaRow} ${styles.anim} ${styles.animDelay3}`}>
            <PrimaryButton to="/contact" arrow>
              {primaryCtaLabel}
            </PrimaryButton>
            <SecondaryButton href="#capabilities">See capabilities</SecondaryButton>
          </div>
        </div>
        {mockup}
      </header>

      <section id="capabilities" className={styles.capabilities}>
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
        <div className={styles.pipelineGrid}>
          {pipeline.map((step, i) => (
            <Reveal key={step.title} delay={i * 100} duration={700}>
              <PipelineStep {...step} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <NetworkCanvas maxNodes={34} linkDist={110} opacity={0.5} className={styles.ctaCanvas} />
        <Reveal duration={900} className={styles.ctaInner}>
          <h2 className={`sectionHeading ${styles.ctaHeading}`}>{ctaHeading}</h2>
          <p className={styles.ctaText}>{ctaText}</p>
          <PrimaryButton to="/contact" size="lg" arrow>
            {ctaButtonLabel}
          </PrimaryButton>
        </Reveal>
      </section>
    </Layout>
  );
}
