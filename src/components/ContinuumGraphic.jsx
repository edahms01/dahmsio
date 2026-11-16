import styles from "./ContinuumGraphic.module.css";

// Ported from logos/Continuum Graphic.html (source file, kept there for reference) — the
// loop, its "Imagine/Structure/Prove/Compound" + "Innovation"/"Intelligence" labels, the
// pulsing center node, and the particle orbiting the loop, all as originally authored. Unlike
// ContinuumMockup (the AppWindowMockup-framed variant tried on the Home hero), this one isn't
// boxed in browser-window chrome — the Mission section it sits in has no card/window
// convention of its own.
export default function ContinuumGraphic({ className = "" }) {
  return (
    <div className={`${styles.wrap} ${className}`} aria-hidden="true">
      <svg viewBox="60 60 1080 340" className={styles.svg}>
        <defs>
          <path
            id="continuumLoopPath2"
            d="M 600 230 C 500 90, 180 90, 180 230 C 180 370, 500 370, 600 230 C 700 90, 1020 90, 1020 230 C 1020 370, 700 370, 600 230 Z"
          />
        </defs>

        <use href="#continuumLoopPath2" fill="none" stroke="var(--accent)" strokeOpacity="0.22" strokeWidth="1.4" />

        <text x="352" y="236" textAnchor="middle" fill="var(--accent)" fillOpacity="0.42" fontFamily="var(--fd)" fontSize="13" fontWeight="500" letterSpacing="4.2">
          INNOVATION
        </text>
        <text x="847" y="236" textAnchor="middle" fill="var(--accent)" fillOpacity="0.42" fontFamily="var(--fd)" fontSize="13" fontWeight="500" letterSpacing="4.2">
          INTELLIGENCE
        </text>

        <g fill="var(--bg)" stroke="var(--accent)" strokeWidth="1.6" strokeOpacity="0.7">
          <circle cx="352" cy="125" r="7" />
          <circle cx="352" cy="335" r="7" />
          <circle cx="847" cy="125" r="7" />
          <circle cx="847" cy="335" r="7" />
        </g>

        <g fontFamily="var(--fd)" fontSize="15" fontWeight="500" letterSpacing="-0.1" fill="var(--text-secondary2)" textAnchor="middle">
          <text x="352" y="109">Imagine</text>
          <text x="847" y="109">Structure</text>
          <text x="352" y="360">Prove</text>
          <text x="847" y="360">Compound</text>
        </g>

        <circle cx="600" cy="230" r="15" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeOpacity="0.8" />
        <circle cx="600" cy="230" r="4.5" fill="var(--accent)" />

        <circle r="4" fill="var(--text)">
          <animateMotion dur="24s" repeatCount="indefinite" rotate="auto">
            <mpath href="#continuumLoopPath2" />
          </animateMotion>
        </circle>
      </svg>
    </div>
  );
}
