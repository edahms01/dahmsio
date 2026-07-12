import styles from "./CodeEditorMockup.module.css";

export default function CodeEditorMockup() {
  return (
    <>
      <div className={styles.code}>
        <div>
          <span className={styles.ln}>1</span> <span className={styles.keyword}>import</span>{" "}
          <span className={styles.plain}>{"{ legacySystem }"}</span>{" "}
          <span className={styles.keyword}>from</span> <span className={styles.string}>'./core'</span>;
        </div>
        <div>
          <span className={styles.ln}>2</span> <span className={styles.keyword}>import</span>{" "}
          <span className={styles.plain}>{"{ cloud, ai }"}</span> <span className={styles.keyword}>from</span>{" "}
          <span className={styles.string}>'./platform'</span>;
        </div>
        <div>&nbsp;</div>
        <div>
          <span className={styles.ln}>3</span> <span className={styles.type}>async function</span>{" "}
          <span className={styles.func}>connect</span>() {"{"}
        </div>
        <div>
          <span className={styles.ln}>4</span> &nbsp;&nbsp;<span className={styles.type}>await</span>{" "}
          legacySystem.<span className={styles.func}>sync</span>(cloud);
        </div>
        <div>
          <span className={styles.ln}>5</span> &nbsp;&nbsp;<span className={styles.type}>await</span> ai.
          <span className={styles.func}>enable</span>(<span className={styles.accent3}>true</span>);
        </div>
        <div>
          <span className={styles.ln}>6</span> {"}"}
        </div>
      </div>
      <div className={styles.terminal}>
        <div className={styles.cmd}>$ npm run deploy</div>
        <div className={styles.result}>✓ Build complete, deployed to production</div>
      </div>
    </>
  );
}
