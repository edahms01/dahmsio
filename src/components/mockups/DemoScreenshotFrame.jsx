import AppWindowMockup from "./AppWindowMockup.jsx";
import styles from "./DemoScreenshotFrame.module.css";

/**
 * Case study hero graphic: a screenshot of the live demo app inside the site's own hero
 * window frame (AppWindowMockup — the same chrome, glow, shadow, and float the Data /
 * Technology / Consulting hero visuals use), so it sits the same size and aligns with the
 * hero header the same way. The screenshot is height-capped and top-cropped to the family's
 * landscape proportions rather than shown at its full portrait height.
 *
 * `shotHeight` (px) overrides the CSS default (see DemoScreenshotFrame.module.css). The
 * default is tuned for Gods/Heroes, whose app has a view-toggle below its chat input; a
 * demo whose app ends at the input box wants a shorter frame so the window's bottom edge
 * meets the screenshot content instead of leaving a dead band. Set it in the data module's
 * HERO.screenshotHeight.
 */
export default function DemoScreenshotFrame({ src, alt, label, shotHeight }) {
  return (
    <AppWindowMockup filename={label}>
      <img
        className={styles.shot}
        src={src}
        alt={alt}
        loading="lazy"
        style={shotHeight ? { height: `${shotHeight}px` } : undefined}
      />
    </AppWindowMockup>
  );
}
