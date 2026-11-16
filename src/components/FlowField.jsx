import { useEffect, useRef } from "react";
import styles from "./FlowField.module.css";

// Perlin noise (seeded permutation) — deterministic, so SSR/CSR and every mount share one field.
const P = new Uint8Array(512);
(() => {
  const p = [...Array(256).keys()];
  let s = 1234567;
  for (let i = 255; i > 0; i--) {
    s = (s * 16807) % 2147483647;
    const j = s % (i + 1);
    [p[i], p[j]] = [p[j], p[i]];
  }
  for (let i = 0; i < 512; i++) P[i] = p[i & 255];
})();

const gr = (h, x, y, z) => {
  const H = h & 15;
  const a = H < 8 ? x : y;
  const b = H < 4 ? y : H === 12 || H === 14 ? x : z;
  return (H & 1 ? -a : a) + (H & 2 ? -b : b);
};

const lerp = (t, a, b) => a + t * (b - a);

function noise(x, y, z) {
  const fx = Math.floor(x);
  const fy = Math.floor(y);
  const fz = Math.floor(z);
  const X = fx & 255;
  const Y = fy & 255;
  const Z = fz & 255;
  x -= fx;
  y -= fy;
  z -= fz;
  const u = x * x * x * (x * (x * 6 - 15) + 10);
  const v = y * y * y * (y * (y * 6 - 15) + 10);
  const w = z * z * z * (z * (z * 6 - 15) + 10);
  const A = P[X] + Y;
  const AA = P[A] + Z;
  const AB = P[A + 1] + Z;
  const B = P[X + 1] + Y;
  const BA = P[B] + Z;
  const BB = P[B + 1] + Z;
  return lerp(
    w,
    lerp(
      v,
      lerp(u, gr(P[AA], x, y, z), gr(P[BA], x - 1, y, z)),
      lerp(u, gr(P[AB], x, y - 1, z), gr(P[BB], x - 1, y - 1, z)),
    ),
    lerp(
      v,
      lerp(u, gr(P[AA + 1], x, y, z - 1), gr(P[BA + 1], x - 1, y, z - 1)),
      lerp(u, gr(P[AB + 1], x, y - 1, z - 1), gr(P[BB + 1], x - 1, y - 1, z - 1)),
    ),
  );
}

// "#86C35A" -> "134,195,90"; falls back to the Spruce accent if the variable is missing or not hex.
function accentRgb() {
  const raw = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
  const m = /^#([0-9a-f]{6})$/i.exec(raw);
  if (!m) return "134,195,90";
  const n = parseInt(m[1], 16);
  return `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`;
}

function step(ctx, st, t, rgb) {
  const { w, h } = st;
  ctx.globalCompositeOperation = "destination-out";
  ctx.fillStyle = "rgba(0,0,0,0.08)";
  ctx.fillRect(0, 0, w, h);
  ctx.globalCompositeOperation = "source-over";
  st.amp += (st.on - st.amp) * 0.06;
  st.px += (st.tx - st.px) * 0.1;
  st.py += (st.ty - st.py) * 0.1;
  const sc = 0.0017;
  const zt = t * 0.035;
  const R = 2 * 120 * 120;
  const off = st.variant === "cta" ? 50 : 0;
  for (let pass = 0; pass < 2; pass++) {
    ctx.beginPath();
    for (const p of st.parts) {
      if (p.k !== pass) continue;
      const a = noise(p.x * sc + off, p.y * sc, zt) * Math.PI * 2.2;
      let vx = Math.cos(a) + 0.45;
      let vy = Math.sin(a) * 0.8;
      if (st.amp > 0.01) {
        const dx = p.x - st.px;
        const dy = p.y - st.py;
        const d2 = dx * dx + dy * dy;
        const f = st.amp * Math.exp(-d2 / R) * 2.4;
        const d = Math.sqrt(d2) + 1;
        vx += (-dy / d) * f;
        vy += (dx / d) * f;
      }
      const nx = p.x + vx * 1.7;
      const ny = p.y + vy * 1.7;
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(nx, ny);
      p.x = nx;
      p.y = ny;
      p.life -= 1;
      if (p.life < 0 || nx < -20 || nx > w + 20 || ny < -20 || ny > h + 20) {
        p.x = Math.random() < 0.65 ? -8 : Math.random() * w;
        p.y = Math.random() * h;
        p.life = 90 + Math.random() * 240;
      }
    }
    ctx.strokeStyle = pass ? `rgba(${rgb},0.8)` : "rgba(238,234,223,0.24)";
    ctx.lineWidth = pass ? 1.2 : 0.8;
    ctx.stroke();
  }
}

function makeParts(w, h) {
  const n = Math.min(1500, Math.round((w * h) / 900));
  return Array.from({ length: n }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    life: 90 + Math.random() * 240,
    k: Math.random() < 0.06 ? 1 : 0,
  }));
}

export default function FlowField({ variant = "hero", className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !parent || !ctx) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rgb = accentRgb();
    const st = { w: 0, h: 0, parts: [], amp: 0, on: 0, px: 0, py: 0, tx: 0, ty: 0, variant };
    let raf = 0;
    let last = 0;
    let t = 0;
    let visible = false;
    let warm = 0;

    // Reduced motion: one synchronous pre-warmed static frame. Animated: the same ~70 warm-up
    // steps are spread over the first frames (a few per frame, only while visible) so mount
    // never costs one long main-thread task, and offscreen canvases cost nothing until seen.
    const prewarm = () => {
      for (let i = 0; i < 70; i++) step(ctx, st, i * 0.033, rgb);
      t = 70 * 0.033;
    };
    const WARM_STEPS_PER_FRAME = 6;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, Math.round(rect.width));
      const h = Math.max(1, Math.round(rect.height));
      if (w === st.w && h === st.h) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (st.parts.length && w === st.w) {
        // Height-only change (mobile address bar, small reflow): keep the particles and the
        // drawn trails. Resizing a canvas clears it, so copy the old pixels across.
        const keep = document.createElement("canvas");
        keep.width = canvas.width;
        keep.height = canvas.height;
        keep.getContext("2d").drawImage(canvas, 0, 0);
        canvas.height = Math.round(h * dpr);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.drawImage(keep, 0, 0);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        st.h = h;
        st.ty = Math.min(st.ty, h);
        st.py = Math.min(st.py, h);
        return;
      }
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      st.w = w;
      st.h = h;
      st.parts = makeParts(w, h);
      st.px = st.tx = w / 2;
      st.py = st.ty = h / 2;
      if (reduced) prewarm();
      else warm = 70;
    };

    const loop = (now) => {
      raf = requestAnimationFrame(loop);
      if (now - last < 32) return; // ~30fps cap
      t += (last ? Math.min(now - last, 100) : 33) / 1000;
      last = now;
      if (warm > 0) {
        const n = Math.min(warm, WARM_STEPS_PER_FRAME);
        for (let i = 0; i < n; i++) step(ctx, st, t + i * 0.033, rgb);
        warm -= n;
      }
      step(ctx, st, t, rgb);
    };

    const sync = () => {
      const shouldRun = !reduced && visible && !document.hidden;
      if (shouldRun && !raf) {
        last = 0;
        raf = requestAnimationFrame(loop);
      } else if (!shouldRun && raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      st.tx = e.clientX - rect.left;
      st.ty = e.clientY - rect.top;
      st.on = 1;
    };
    const onLeave = () => {
      st.on = 0;
    };
    // A finger lifting ends the vortex; a mouse button release does not.
    const onUp = (e) => {
      if (e.pointerType === "touch") st.on = 0;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let io;
    if (!reduced) {
      io = new IntersectionObserver(
        (entries) => {
          visible = entries[entries.length - 1].isIntersecting;
          sync();
        },
        { threshold: 0 },
      );
      io.observe(canvas);
      document.addEventListener("visibilitychange", sync);
      parent.addEventListener("pointermove", onMove, { passive: true });
      parent.addEventListener("pointerleave", onLeave);
      parent.addEventListener("pointercancel", onLeave);
      parent.addEventListener("pointerup", onUp);
    }

    return () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      ro.disconnect();
      if (io) io.disconnect();
      document.removeEventListener("visibilitychange", sync);
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
      parent.removeEventListener("pointercancel", onLeave);
      parent.removeEventListener("pointerup", onUp);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`${styles.canvas} ${variant === "hero" ? styles.hero : ""} ${className}`}
    />
  );
}
