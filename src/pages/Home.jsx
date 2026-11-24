import Layout from "../components/Layout.jsx";
import PageMeta from "../components/PageMeta.jsx";
import FlowField from "../components/FlowField.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import SecondaryButton from "../components/SecondaryButton.jsx";
import Reveal from "../components/Reveal.jsx";
import FeatureCard from "../components/FeatureCard.jsx";
import MethodologyStep from "../components/MethodologyStep.jsx";
import {
  META,
  HERO,
  SERVICES,
  SERVICES_EYEBROW,
  SERVICES_HEADING,
  METHODOLOGY_EYEBROW,
  METHODOLOGY_HEADING,
  METHODOLOGY_TEXT,
  METHODOLOGY_STEPS,
  PRINCIPLES,
  CTA,
} from "../data/home.js";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <Layout>
      <PageMeta {...META} />
      <header className={styles.hero}>
        <FlowField variant="hero" className={styles.heroCanvas} />
        <h1 className={`${styles.h1} ${styles.heroUp} ${styles.heroUpDelay1}`}>
          {HERO.heroLine1}
          <br />
          {HERO.heroPrefix} <span className={styles.gradientSpan}>{HERO.heroAccent}.</span>
        </h1>
        <p className={`${styles.subcopy} ${styles.heroUp} ${styles.heroUpDelay2}`}>{HERO.heroSubcopy}</p>
        <div className={`${styles.ctaRow} ${styles.heroUp} ${styles.heroUpDelay3}`}>
          <PrimaryButton to="/contact/" arrow>
            {HERO.primaryCtaLabel}
          </PrimaryButton>
          <SecondaryButton href="#services">{HERO.secondaryCtaLabel}</SecondaryButton>
        </div>
      </header>

      <section id="services" className={styles.services}>
        <Reveal className={styles.sectionHeadCentered}>
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

      <section className={styles.principles}>
        <Reveal className={styles.sectionHeadCentered}>
          <div className="eyebrow">{PRINCIPLES.eyebrow}</div>
          <h2 className={`sectionHeading ${styles.servicesHeading}`}>{PRINCIPLES.heading}</h2>
        </Reveal>
        <Reveal className={styles.operatingPrinciples} as="ul">
          {PRINCIPLES.items.map((item) => (
            <li key={item.lead} className={styles.operatingPrinciple}>
              <span className={styles.operatingPrincipleLead}>{item.lead}</span> {item.body}
            </li>
          ))}
        </Reveal>
      </section>

      <section className={styles.cta}>
        <FlowField variant="cta" className={styles.ctaCanvas} />
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
