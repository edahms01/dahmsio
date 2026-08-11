import styles from "./DashboardMockup.module.css";

// Ported from the Claude Design hero graphic (Data.dc.html, project a37bbdf4): adds an
// actual-vs-forecast trend line over the revenue bars (last two bars become dashed
// "forecast" columns with a pulsing marker at the model's projected point), echoing the
// hero copy's "predictive model forecasts" line. Bars/stats stay data-driven like before;
// the line/polygon points are fixed to the source design's exact coordinates.
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
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.chartOverlay}>
          <polygon
            points="68.75,15 81.25,3 93.75,0 93.75,17 81.25,20 68.75,21"
            fill="var(--accent3)"
            opacity="0.16"
          />
          <polyline
            points="6.25,54 18.75,38 31.25,46 43.75,22 56.25,30 68.75,18"
            fill="none"
            stroke="#f4fbff"
            strokeWidth="1.6"
            opacity="0.85"
            vectorEffect="non-scaling-stroke"
          />
          <polyline
            points="68.75,18 81.25,10 93.75,2"
            fill="none"
            stroke="var(--accent3)"
            strokeWidth="1.6"
            strokeDasharray="3 3"
            opacity="0.9"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        {bars.map((bar, i) =>
          bar.forecast ? (
            <div
              key={i}
              className={styles.barForecast}
              style={{
                height: `${bar.height}%`,
                background: bar.bg,
                borderColor: bar.border,
                animationDelay: `${0.5 + i * 0.1}s`,
              }}
            />
          ) : (
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
          ),
        )}
        <span className={styles.marker} />
        <span className={styles.markerRing} />
      </div>
      <div className={styles.legend}>
        <span className={styles.legendItem}>
          <span className={styles.legendLineActual} />
          Actual
        </span>
        <span className={styles.legendItem}>
          <span className={styles.legendLineForecast} />
          Model Forecast
        </span>
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
