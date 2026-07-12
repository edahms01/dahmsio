import { useEffect, useRef } from "react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";
import styles from "./GlowField.module.css";

export default function GlowField({ blobs }) {
  const containerRef = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const els = containerRef.current.querySelectorAll("[data-parallax]");
    const items = [...els].map((el) => ({ el, speed: parseFloat(el.dataset.parallax) }));

    const onScroll = () => {
      const y = window.scrollY;
      items.forEach((item) => {
        item.el.style.transform = `translate3d(0,${(y * item.speed).toFixed(1)}px,0)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced]);

  return (
    <div className={styles.field} ref={containerRef}>
      {blobs.map((b, i) => (
        <div
          key={i}
          data-parallax={b.speed}
          className={styles.blob}
          style={{
            top: b.top,
            left: b.left,
            right: b.right,
            bottom: b.bottom,
            width: b.size,
            height: b.size,
            background: `radial-gradient(circle, ${b.color}, transparent ${b.fade ?? 64}%)`,
            filter: `blur(${b.blur}px)`,
            animation: reduced ? "none" : `glowFloat ${b.duration}s ease-in-out infinite ${b.delay ?? 0}s`,
          }}
        />
      ))}
      <div className={styles.vignette} />
    </div>
  );
}
