import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import PageMeta from "../components/PageMeta.jsx";
import NetworkCanvas from "../components/NetworkCanvas.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import SecondaryButton from "../components/SecondaryButton.jsx";
import Marquee from "../components/Marquee.jsx";
import Reveal from "../components/Reveal.jsx";
import FeatureCard from "../components/FeatureCard.jsx";
import MethodologyStep from "../components/MethodologyStep.jsx";
import {
  META,
  HERO,
  MARQUEE_ITEMS,
  SERVICES,
  SERVICES_EYEBROW,
  SERVICES_HEADING,
  MISSION,
  METHODOLOGY_EYEBROW,
  METHODOLOGY_HEADING,
  METHODOLOGY_TEXT,
  METHODOLOGY_STEPS,
  CTA,
  HOME_GLOW_BLOBS,
} from "../data/home.js";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <Layout blobs={HOME_GLOW_BLOBS}>
      <PageMeta {...META} />
      <header className={styles.hero}>
        <NetworkCanvas maxNodes={90} linkDist={130} opacity={0.9} className={styles.heroCanvas} />
        <h1 className={`${styles.h1} ${styles.heroUp} ${styles.heroUpDelay1}`}>
          {HERO.heroPrefix} <span className={styles.gradientSpan}>{HERO.heroAccent}.</span>
        </h1>
        <p className={`${styles.subcopy} ${styles.heroUp} ${styles.heroUpDelay2}`}>{HERO.heroSubcopy}</p>
        <div className={`${styles.ctaRow} ${styles.heroUp} ${styles.heroUpDelay3}`}>
          <PrimaryButton to="/contact/" arrow>
            {HERO.primaryCtaLabel}
          </PrimaryButton>
          <SecondaryButton href="#services">{HERO.secondaryCtaLabel}</SecondaryButton>
        </div>
        <div className={styles.scrollIndicator}>
          <span>{HERO.scrollLabel}</span>
          <span className={styles.scrollLine} />
        </div>
      </header>

      <section id="services" className={styles.services}>
        <Reveal>
          <div className="eyebrow">{SERVICES_EYEBROW}</div>
          <h2 className={`sectionHeading ${styles.servicesHeading}`}>{SERVICES_HEADING}</h2>
        </Reveal>
        <div className={styles.servicesGrid}>
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 120} className={styles.serviceReveal}>
              <FeatureCard {...service} />
            </Reveal>
          ))}
        </div>
      </section>

      <Marquee items={MARQUEE_ITEMS} />

      <section className={styles.mission}>
        <Reveal duration={900}>
          <div className="eyebrow" style={{ marginBottom: 22 }}>
            {MISSION.eyebrow}
          </div>
          <p className={styles.missionText}>
            {MISSION.textPrefix} <span className={styles.missionAccent}>{MISSION.textAccent}</span>
            {MISSION.textSuffix}
          </p>
          <Link to="/about/" className={styles.missionLink}>
            {MISSION.linkLabel}
          </Link>
        </Reveal>
      </section>

      <section id="methodology" className={styles.methodology}>
        <div className={styles.methodologyGrid}>
          <div className={styles.methodologyLeft}>
            <div className="eyebrow">{METHODOLOGY_EYEBROW}</div>
            <h2 className={`sectionHeading ${styles.methodologyHeading}`}>{METHODOLOGY_HEADING}</h2>
            <p className={styles.methodologyText}>{METHODOLOGY_TEXT}</p>
          </div>
          <div className={styles.methodologyRight}>
            {METHODOLOGY_STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 80} duration={700}>
                <MethodologyStep {...step} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <NetworkCanvas maxNodes={70} linkDist={130} opacity={0.7} className={styles.ctaCanvas} />
        <Reveal duration={900} className={styles.ctaInner}>
          <h2 className={`sectionHeading ${styles.ctaHeading}`}>{CTA.heading}</h2>
          <p className={styles.ctaText}>{CTA.text}</p>
          <PrimaryButton to="/contact/" size="lg" arrow>
            {CTA.buttonLabel}
          </PrimaryButton>
        </Reveal>
      </section>
    </Layout>
  );
}
