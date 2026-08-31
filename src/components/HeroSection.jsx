import NetworkCanvas from "./NetworkCanvas.jsx";
import s from "./HeroSection.module.css";

/**
 * The page-opening hero band: two-column grid (text left, graphic right) shared by every
 * top-level page. Owns the grid container, the background NetworkCanvas, and the graphic
 * column (with its fixed top-alignment offset and responsive stack). Pass the hero text as
 * children — usually the HeroEyebrow / HeroHeading / HeroLede / HeroActions helpers below —
 * and the graphic as `mockup`.
 *
 * - `wide`: About's wider text column (1.2fr / 0.8fr) for its short two-line headline.
 * - `mockupClassName`: extra class on the graphic column (DemoCaseTemplate uses it to cap
 *   the framed screenshot's width once the hero stacks).
 */
export default function HeroSection({ children, mockup, mockupClassName = "", wide = false }) {
  return (
    <header className={`${s.hero} ${wide ? s.heroWide : ""}`.trim()}>
      <NetworkCanvas maxNodes={90} opacity={0.9} className={s.heroCanvas} />
      <div className={s.heroText}>{children}</div>
      <div className={`${s.mockupCol} ${mockupClassName}`.trim()}>{mockup}</div>
    </header>
  );
}

export function HeroEyebrow({ children }) {
  return <div className={`eyebrow ${s.anim}`}>{children}</div>;
}

/**
 * Hero headline. Either pass `prefix` + `accent` for the standard "Prefix <accent>." form
 * (accent gets the gradient and a trailing period), or pass plain `children` for a headline
 * with no gradient span (demo case studies use the demo's own name).
 */
export function HeroHeading({ prefix, accent, children }) {
  return (
    <h1 className={`${s.h1} ${s.anim} ${s.animDelay1}`}>
      {children ?? (
        <>
          {prefix} <span className={s.gradientSpan}>{accent}.</span>
        </>
      )}
    </h1>
  );
}

export function HeroLede({ children }) {
  return <p className={`${s.subcopy} ${s.anim} ${s.animDelay2}`}>{children}</p>;
}

export function HeroActions({ children }) {
  return <div className={`${s.ctaRow} ${s.anim} ${s.animDelay3}`}>{children}</div>;
}

// Pages that need a hero class directly (e.g. an extra animated paragraph that isn't the
// standard lede) import "./HeroSection.module.css" itself.
