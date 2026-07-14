import Layout from "../components/Layout.jsx";
import NetworkCanvas from "../components/NetworkCanvas.jsx";
import HeroBadgePill from "../components/HeroBadgePill.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import SecondaryButton from "../components/SecondaryButton.jsx";
import Marquee from "../components/Marquee.jsx";
import Reveal from "../components/Reveal.jsx";
import FeatureCard from "../components/FeatureCard.jsx";
import MethodologyStep from "../components/MethodologyStep.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { META, HERO_STATS, MARQUEE_ITEMS, SERVICES, METHODOLOGY_STEPS, HOME_GLOW_BLOBS } from "../data/home.js";
import styles from "./Home.module.css";

export default function Home() {
  usePageMeta(META.title, META.description);

  return (
    <Layout blobs={HOME_GLOW_BLOBS}>
      <header className={styles.hero}>
        <NetworkCanvas maxNodes={90} linkDist={130} opacity={0.9} className={styles.heroCanvas} />
        <HeroBadgePill className={styles.heroUp}>Data · Technology · Consulting</HeroBadgePill>
        <h1 className={`${styles.h1} ${styles.heroUp} ${styles.heroUpDelay1}`}>
          Where innovation meets <span className={styles.gradientSpan}>intelligence</span>.
        </h1>
        <p className={`${styles.subcopy} ${styles.heroUp} ${styles.heroUpDelay2}`}>
          We turn complex data and technology into clear, practical systems that grow revenue, cut waste,
          and set ambitious businesses apart from their competitors.
        </p>
        <div className={`${styles.ctaRow} ${styles.heroUp} ${styles.heroUpDelay3}`}>
          <PrimaryButton to="/contact" arrow>
            Start your journey
          </PrimaryButton>
          <SecondaryButton href="#services">Explore services</SecondaryButton>
        </div>
        <div className={`${styles.statsRow} ${styles.heroUp} ${styles.heroUpDelay4}`}>
          {HERO_STATS.map((stat) => (
            <div key={stat} className={styles.stat}>
              <span className={styles.statDot} />
              {stat}
            </div>
          ))}
        </div>
        <div className={styles.scrollIndicator}>
          <span>Scroll</span>
          <span className={styles.scrollLine} />
        </div>
      </header>

      <Marquee items={MARQUEE_ITEMS} />

      <section id="services" className={styles.services}>
        <Reveal>
          <div className="eyebrow">What we do</div>
          <h2 className={`sectionHeading ${styles.servicesHeading}`}>
            Three ways we move your business forward.
          </h2>
        </Reveal>
        <div className={styles.servicesGrid}>
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 120}>
              <FeatureCard {...service} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.mission}>
        <Reveal duration={900}>
          <div className="eyebrow" style={{ marginBottom: 22 }}>
            Our mission
          </div>
          <p className={styles.missionText}>
            We make advanced technology{" "}
            <span className={styles.missionAccent}>accessible to businesses of every size</span>, bridging
            the gap between complex tech and real business impact.
          </p>
        </Reveal>
      </section>

      <section id="methodology" className={styles.methodology}>
        <div className={styles.methodologyGrid}>
          <div className={styles.methodologyLeft}>
            <div className="eyebrow">How we work</div>
            <h2 className={`sectionHeading ${styles.methodologyHeading}`}>
              A methodology built around check-ins, not surprises.
            </h2>
            <p className={styles.methodologyText}>
              Every project runs through a clear framework with collaboration points before each phase, so
              we can adapt fast when needs change and you always know exactly where things stand.
            </p>
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
        <NetworkCanvas maxNodes={34} linkDist={110} opacity={0.5} className={styles.ctaCanvas} />
        <Reveal duration={900} className={styles.ctaInner}>
          <h2 className={`sectionHeading ${styles.ctaHeading}`}>Start your journey.</h2>
          <p className={styles.ctaText}>
            Tell us the business challenge you're facing and one of our consultants will be in touch — no
            jargon, no obligation.
          </p>
          <PrimaryButton to="/contact" size="lg" arrow>
            Send a message
          </PrimaryButton>
        </Reveal>
      </section>
    </Layout>
  );
}
