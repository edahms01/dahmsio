import AppWindowMockup from "./AppWindowMockup.jsx";
import styles from "./DemoScreenshotFrame.module.css";

/**
 * Case study hero graphic: a screenshot of the live demo app inside the site's own hero
 * window frame (AppWindowMockup — the same chrome, shadow, and float the Data /
 * Technology / Consulting hero visuals use), so it sits the same size and aligns with the
 * hero header the same way. The screenshot renders at its own intrinsic aspect ratio (see
 * DemoScreenshotFrame.module.css), so the window's bottom edge always meets the screenshot's
 * actual content regardless of the source image's proportions.
 */
export default function DemoScreenshotFrame({ src, alt, label, webp = false }) {
  // Same screenshot, smaller files for small screens. Opt-in: only when the demo's data sets
  // `screenshotWebp: true` (i.e. the WebP encodes at 640/960/1200px wide exist next to the JPG:
  // `<slug>-screenshot-640.webp` etc., see CLAUDE.md), so a missing file can never break the
  // hero. The <img> keeps the original src/alt and is the fallback for everything else.
  const base = src.replace(/\.jpe?g$/i, "");
  const hasVariants = webp && base !== src;
  return (
    <AppWindowMockup filename={label}>
      <picture className={styles.picture}>
        {hasVariants && (
          <source
            type="image/webp"
            srcSet={`${base}-640.webp 640w, ${base}-960.webp 960w, ${base}-1200.webp 1200w`}
            sizes="(max-width: 900px) min(100vw - 48px, 500px), 540px"
          />
        )}
        <img className={styles.shot} src={src} alt={alt} loading="eager" fetchPriority="high" decoding="async" />
      </picture>
    </AppWindowMockup>
  );
}
