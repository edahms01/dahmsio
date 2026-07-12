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
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
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

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
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
