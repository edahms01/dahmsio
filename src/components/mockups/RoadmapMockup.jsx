import styles from "./RoadmapMockup.module.css";

// Ported from the Claude Design hero graphic (Consulting.dc.html, project a37bbdf4) —
// replaces the prior sprint-board-only KanbanMockup. Adds a four-stage engagement timeline
// (Discover -> Plan -> Embed -> Deliver, echoing the "engagement" pipeline section further
// down the page) above the existing current-sprint/columns block.
export default function RoadmapMockup({
  headerLabel,
  progressPercent,
  stages,
  sprintLabel,
  sprintName,
  status,
  progress,
  progressLabel,
  columns,
}) {
  return (
    <div className={styles.body}>
      <div className={styles.header}>{headerLabel}</div>

      <div className={styles.stageTrack}>
        <div className={styles.stageLine} />
        <div className={styles.stageLineFill} style={{ width: `${progressPercent}%` }} />
        <div className={styles.stages}>
          {stages.map((stage) => (
            <div key={stage.label} className={styles.stage}>
              {stage.state === "current" ? (
                <span className={styles.stageDotCurrent}>
                  <span className={styles.stageDotRing} />
                </span>
              ) : (
                <span className={`${styles.stageDot} ${styles[stage.state]}`} />
              )}
              <span className={`${styles.stageLabel} ${styles[`stageLabel_${stage.state}`]}`}>{stage.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.sprint}>
        <div className={styles.sprintTop}>
          <div>
            <div className={styles.label}>{sprintLabel}</div>
            <div className={styles.value}>{sprintName}</div>
          </div>
          <div className={styles.status}>▲ {status}</div>
        </div>
        <div className={styles.progressTrack}>
          <div className={styles.progressFill} style={{ width: `${progress}%` }} />
        </div>
        <div className={styles.progressLabel}>{progressLabel}</div>
        <div className={styles.columns}>
          {columns.map((col) => (
            <div key={col.title}>
              <div className={styles.colTitle}>{col.title}</div>
              <div className={`${styles.item} ${styles[col.variant]}`}>
                {col.variant === "done" ? `✓ ${col.item}` : col.item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
