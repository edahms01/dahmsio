import { useEffect, useRef } from "react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";
import styles from "./NetworkCanvas.module.css";

function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  const full = clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean;
  return [parseInt(full.slice(0, 2), 16), parseInt(full.slice(2, 4), 16), parseInt(full.slice(4, 6), 16)];
}

export default function NetworkCanvas({ maxNodes, linkDist, opacity = 0.9, className = "" }) {
  const canvasRef = useRef(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let w = 0;
    let h = 0;
    let dpr = 1;
    let nodes = [];
    let raf = null;
    const mouse = { x: -9999, y: -9999 };

    const getAccentRgb = () =>
      hexToRgb(getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#159bc8");

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const newW = canvas.offsetWidth;
      const newH = canvas.offsetHeight;
      canvas.width = newW * dpr;
      canvas.height = newH * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Mobile browsers fire window "resize" as the address bar hides/shows during
      // scroll — that's a height-only change, not an actual layout resize. Re-rolling
      // every node to a fresh random position on each of those firings is what caused
      // the dots to jump chaotically as soon as scrolling started. Only regenerate the
      // node field when the width actually changes (real resize/orientation change);
      // for height-only changes, keep existing nodes and just clamp them into bounds.
      const widthChanged = Math.abs(newW - w) > 1;
      w = newW;
      h = newH;
      if (!widthChanged && nodes.length) {
        for (const n of nodes) {
          n.y = Math.min(n.y, h);
        }
        return;
      }

      const count = Math.min(maxNodes, Math.floor((w * h) / 15000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }));
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    // Touch "poke" equivalent of onMove/onLeave. Deliberately touchstart-only, not
    // touchmove: touchmove fires continuously for the same finger drag that scrolls the
    // page, and since the canvas scrolls with the page, following it live turned every
    // scroll into a chaotic sweep of repel across the whole node field. A single poke at
    // the tap point — auto-released a moment later — gives a reactive feel without
    // fighting scroll. Bound to `window` (not the canvas) because the canvas has
    // pointer-events: none, so it never receives touch events as a hit-test target —
    // same reason mousemove above is bound to window too.
    let touchResetTimer = null;
    const onTouchStart = (e) => {
      const touch = e.touches[0];
      if (!touch) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = touch.clientX - rect.left;
      mouse.y = touch.clientY - rect.top;
      clearTimeout(touchResetTimer);
      touchResetTimer = setTimeout(onLeave, 500);
    };
    const onTouchEnd = () => {
      clearTimeout(touchResetTimer);
      onLeave();
    };

    const draw = () => {
      const [r, g, b] = getAccentRgb();
      ctx.clearRect(0, 0, w, h);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 130) {
          n.x += (dx / dist) * 1.1;
          n.y += (dy / dist) * 1.1;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const c = nodes[j];
          const d = Math.hypot(a.x - c.x, a.y - c.y);
          if (d < linkDist) {
            ctx.strokeStyle = `rgba(${r},${g},${b},${(1 - d / linkDist) * 0.32})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(c.x, c.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.fillStyle = `rgba(${r},${g},${b},.8)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    // Devices with a real mouse (fine pointer + hover) get continuous cursor-repel via
    // mousemove, reset on mouseleave. Touch-only devices get a one-shot poke on
    // touchstart instead (see onTouchStart above for why not touchmove), reset early by
    // touchend/touchcancel or otherwise auto-released by its own timer.
    // Passive listeners: we never call preventDefault, so this doesn't block scrolling.
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    resize();
    draw();
    window.addEventListener("resize", resize);
    if (hasFinePointer) {
      window.addEventListener("mousemove", onMove);
      canvas.addEventListener("mouseleave", onLeave);
    } else {
      window.addEventListener("touchstart", onTouchStart, { passive: true });
      window.addEventListener("touchend", onTouchEnd);
      window.addEventListener("touchcancel", onTouchEnd);
    }

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(touchResetTimer);
      window.removeEventListener("resize", resize);
      if (hasFinePointer) {
        window.removeEventListener("mousemove", onMove);
        canvas.removeEventListener("mouseleave", onLeave);
      } else {
        window.removeEventListener("touchstart", onTouchStart);
        window.removeEventListener("touchend", onTouchEnd);
        window.removeEventListener("touchcancel", onTouchEnd);
      }
    };
  }, [maxNodes, linkDist, reduced]);

  if (reduced) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`${styles.canvas} ${className}`}
      style={{ opacity }}
    />
  );
}
