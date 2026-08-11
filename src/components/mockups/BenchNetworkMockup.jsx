import styles from "./BenchNetworkMockup.module.css";

// Ported from the Claude Design hero graphic (About.dc.html, project a37bbdf4) — a "bench"
// of specialists (Data Scientist, Cloud Architect, Backend Engineer, UX Designer, Security
// Specialist, DevOps Engineer) wired into a single Product Manager hub, who in turn connects
// to "You". Visualizes HOW_WE_WORK's "network, not a bottleneck" framing directly. Purely
// illustrative (no props), same as OrbitNetworkMockup.
// labelColor was alternating #c7c7d4/#8a8a9a per node in the source design — dropped in
// favor of one consistent color (.nodeLabel in the CSS module) after it read as an
// inconsistency (some role titles grayer than others) rather than an intentional pattern.
const SPECIALISTS = [
  { code: "DS", line1: "Data", line2: "Scientist", x: 10, y: 7, codeColor: "var(--accent3)" },
  { code: "CL", line1: "Cloud", line2: "Architect", x: 34, y: 18, codeColor: "var(--accent3)" },
  { code: "BE", line1: "Backend", line2: "Engineer", x: 10, y: 33, codeColor: "var(--accent2)" },
  { code: "UX", line1: "UX", line2: "Designer", x: 10, y: 59, codeColor: "var(--accent)" },
  { code: "SC", line1: "Security", line2: "Specialist", x: 10, y: 83, codeColor: "var(--accent3)" },
  { code: "DO", line1: "DevOps", line2: "Engineer", x: 34, y: 84, codeColor: "var(--accent2)" },
];

const HUB = { x: 52, y: 48 };
const YOU = { x: 94, y: 48 };

// Alternating solid/dashed strokes, cycling accent/accent3/accent2, matching the source.
const SPOKE_STYLE = [
  { stroke: "var(--accent)", dash: false },
  { stroke: "var(--accent3)", dash: true },
  { stroke: "var(--accent2)", dash: false },
  { stroke: "var(--accent)", dash: true },
  { stroke: "var(--accent3)", dash: false },
  { stroke: "var(--accent2)", dash: true },
];

export default function BenchNetworkMockup() {
  return (
    <div className={styles.body}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.lines}>
        {SPECIALISTS.map((node, i) => (
          <line
            key={node.code}
            x1={node.x}
            y1={node.y}
            x2={HUB.x}
            y2={HUB.y}
            stroke={SPOKE_STYLE[i].stroke}
            strokeDasharray={SPOKE_STYLE[i].dash ? "2.5 3" : undefined}
            className={SPOKE_STYLE[i].dash ? styles.spokeDashed : styles.spoke}
          />
        ))}
        <line x1={HUB.x} y1={HUB.y} x2={YOU.x} y2={YOU.y} stroke="var(--accent3)" className={styles.spokeMain} />
      </svg>

      <div className={styles.sweep} style={{ left: `${HUB.x}%`, top: `${HUB.y}%` }} />

      {SPECIALISTS.map((node) => (
        <div key={node.code} className={styles.node} style={{ left: `${node.x}%`, top: `${node.y}%` }}>
          <span className={styles.nodeBadge} style={{ color: node.codeColor }}>
            {node.code}
          </span>
          <div className={styles.nodeLabel}>
            <div>{node.line1}</div>
            <div>{node.line2}</div>
          </div>
        </div>
      ))}

      <div className={styles.hub} style={{ left: `${HUB.x}%`, top: `${HUB.y}%` }}>
        <span className={styles.hubBadge}>
          PM
          <span className={styles.hubRing} />
        </span>
        <div className={styles.hubTitle}>Product Manager</div>
        <div className={styles.hubSubtitle}>
          <div>Your single</div>
          <div>point of contact</div>
        </div>
      </div>

      {/* Nudged a few px right of the true midpoint so it clears the PM hub's ring instead
          of overlapping it. */}
      <div className={styles.chip} style={{ left: `${(HUB.x + YOU.x) / 2 + 3}%`, top: `${HUB.y}%` }}>
        <div>Discovery · Vision</div>
        <div>Strategy · Roadmap</div>
      </div>

      <div className={styles.you} style={{ left: `${YOU.x}%`, top: `${YOU.y}%` }}>
        <span className={styles.youAvatar}>
          <span className={styles.youHead} />
          <span className={styles.youShoulders} />
        </span>
        <div className={styles.youLabel}>You</div>
      </div>
    </div>
  );
}
