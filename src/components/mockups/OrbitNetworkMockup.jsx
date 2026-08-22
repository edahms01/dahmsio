import styles from "./OrbitNetworkMockup.module.css";

// Ported from the Claude Design hero graphic (About.dc.html, project a37bbdf4) — the
// "global reach -> local focus" visual: eight nodes on concentric rings, orbiting slowly,
// each firing a particle inward toward a pulsing center hub. Purely illustrative (no
// props/labels, unlike the other AppWindowMockup children), so positions/colors/timings are
// hardcoded to match the source design exactly rather than data-driven.
const SPOKES = [
  { x: 290, y: 195, r: 4, color: "var(--accent)", dur: "2.8s", delay: "0s" },
  { x: 223, y: 250, r: 5, color: "var(--accent3)", dur: "3s", delay: "0.4s" },
  { x: 148, y: 300, r: 3.5, color: "var(--accent2)", dur: "2.6s", delay: "0.8s" },
  { x: 70, y: 236, r: 4.5, color: "var(--accent)", dur: "3.2s", delay: "1.2s" },
  { x: 28, y: 149, r: 3, color: "var(--accent3)", dur: "2.9s", delay: "1.6s" },
  { x: 84, y: 84, r: 5, color: "var(--accent2)", dur: "3.4s", delay: "2s" },
  { x: 148, y: 23, r: 4, color: "var(--accent)", dur: "2.7s", delay: "2.4s" },
  { x: 234, y: 72, r: 4.5, color: "var(--accent3)", dur: "3.1s", delay: "2.8s" },
];

export default function OrbitNetworkMockup() {
  return (
    <div className={styles.body}>
      <div className={`${styles.corner} ${styles.cornerTL}`} />
      <div className={`${styles.corner} ${styles.cornerTR}`} />
      <div className={`${styles.corner} ${styles.cornerBL}`} />
      <div className={`${styles.corner} ${styles.cornerBR}`} />

      <div className={styles.sweep} />

      <svg viewBox="0 0 320 320" className={styles.rings}>
        <circle cx="160" cy="160" r="60" fill="none" stroke="rgba(255,255,255,.08)" />
        <circle cx="160" cy="160" r="95" fill="none" stroke="rgba(255,255,255,.06)" />
        <circle cx="160" cy="160" r="130" fill="none" stroke="rgba(255,255,255,.14)" strokeDasharray="2 8" />

        {SPOKES.map((node) => (
          <line
            key={`line-${node.x}-${node.y}`}
            x1="160"
            y1="160"
            x2={node.x}
            y2={node.y}
            stroke={node.color}
            strokeWidth="1"
            opacity="0.32"
          />
        ))}
        {SPOKES.map((node) => (
          <circle key={`dot-${node.x}-${node.y}`} cx={node.x} cy={node.y} r={node.r} fill={node.color} />
        ))}
        {SPOKES.map((node) => (
          <circle key={`pulse-${node.x}-${node.y}`} r="2.5" fill="#f4fbff">
            <animate attributeName="cx" values={`${node.x};160`} dur={node.dur} begin={node.delay} repeatCount="indefinite" />
            <animate attributeName="cy" values={`${node.y};160`} dur={node.dur} begin={node.delay} repeatCount="indefinite" />
            <animate
              attributeName="opacity"
              values="0;1;1;0"
              keyTimes="0;0.15;0.7;1"
              dur={node.dur}
              begin={node.delay}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>

      <div className={styles.hubWrap}>
        <span className={styles.hubRing} />
        <span className={`${styles.hubRing} ${styles.hubRingDelay}`} />
        <span className={styles.flareLoop} />
        <div className={styles.hub}>
          <div className={styles.hubIcon} />
        </div>
      </div>
    </div>
  );
}
