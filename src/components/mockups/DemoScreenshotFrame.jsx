import AppWindowMockup from "./AppWindowMockup.jsx";
import styles from "./DemoScreenshotFrame.module.css";

/**
 * Case study hero graphic: a screenshot of the live demo app inside the site's own hero
 * window frame (AppWindowMockup — the same chrome, glow, shadow, and float the Data /
 * Technology / Consulting hero visuals use), so it sits the same size and aligns with the
 * hero header the same way. The screenshot renders at its own intrinsic aspect ratio (see
 * DemoScreenshotFrame.module.css), so the window's bottom edge always meets the screenshot's
 * actual content regardless of the source image's proportions.
 */
export default function DemoScreenshotFrame({ src, alt, label }) {
  return (
    <AppWindowMockup filename={label}>
      <img className={styles.shot} src={src} alt={alt} loading="lazy" />
    </AppWindowMockup>
  );
}
