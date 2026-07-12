import styles from "./DashboardMockup.module.css";

export default function DashboardMockup({ label, value, delta, bars, stats }) {
  return (
    <div className={styles.body}>
      <div className={styles.top}>
        <div>
          <div className={styles.label}>{label}</div>
          <div className={styles.value}>{value}</div>
        </div>
        <div className={styles.delta}>▲ {delta}</div>
      </div>
      <div className={styles.chart}>
        {bars.map((bar, i) => (
          <div
            key={i}
            className={styles.bar}
            style={{
              height: `${bar.height}%`,
              background: `linear-gradient(180deg, ${bar.from}, ${bar.to})`,
              animationDelay: `${0.5 + i * 0.1}s`,
              boxShadow: bar.glow ? "0 0 20px rgba(21,155,200,.5)" : undefined,
            }}
          />
        ))}
      </div>
      <div className={styles.stats}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <div className={styles.statLabel}>{stat.label}</div>
            <div className={styles.statValue}>{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
