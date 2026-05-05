"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/* ── Particle canvas ─────────────────────────────────────── */
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mouse = { x: -999, y: -999 };
    let particles: Array<{ x: number; y: number; vx: number; vy: number; bx: number; by: number; r: number; o: number }> = [];
    let raf: number;

    const setup = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      if (!w || !h) return;
      canvas.width = w;
      canvas.height = h;
      const cx = w / 2, cy = h / 2;
      const maxD = Math.min(w, h) * 0.5;
      particles = Array.from({ length: 36 }, () => {
        const a = Math.random() * Math.PI * 2;
        // Only in outer ring area (between 55% and 95% of orbit radius)
        const d = maxD * (0.55 + Math.random() * 0.4);
        const bx = cx + Math.cos(a) * d;
        const by = cy + Math.sin(a) * d;
        return { x: bx, y: by, vx: 0, vy: 0, bx, by, r: 0.6 + Math.random() * 1.2, o: 0.06 + Math.random() * 0.18 };
      });
    };

    setup();
    window.addEventListener("resize", setup);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", onMove);

    const tick = () => {
      const w = canvas.width, h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.vx += (p.bx - p.x) * 0.02;
        p.vy += (p.by - p.y) * 0.02;
        p.vx += (Math.random() - 0.5) * 0.06;
        p.vy += (Math.random() - 0.5) * 0.06;
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 90 && dist > 0) {
          const f = ((90 - dist) / 90) * 2.2;
          p.vx += (dx / dist) * f;
          p.vy += (dy / dist) * f;
        }
        p.vx *= 0.87;
        p.vy *= 0.87;
        p.x += p.vx;
        p.y += p.vy;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(110,155,200,${p.o})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", setup);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", background: "transparent" }}
    />
  );
}

/* ── Ease ────────────────────────────────────────────────── */
const ease = [0.2, 0.7, 0.2, 1] as [number, number, number, number];

/* ── Hero ────────────────────────────────────────────────── */
export default function Hero() {
  const orbitRef = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 55, damping: 18 });
  const springY = useSpring(rawY, { stiffness: 55, damping: 18 });
  const rotateY = useTransform(springX, [-1, 1], [-14, 14]);
  const rotateX = useTransform(springY, [-1, 1], [10, -10]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = orbitRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      rawX.set(((e.clientX - r.left - r.width / 2) / r.width) * 2);
      rawY.set(((e.clientY - r.top - r.height / 2) / r.height) * 2);
    };
    const onLeave = () => { rawX.set(0); rawY.set(0); };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [rawX, rawY]);

  const line1 = ["Inteligencia", "aplicada"];
  const line2 = ["al", "crecimiento."];

  return (
    <header
      id="top"
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: "100vh", padding: "120px 0 80px", background: "var(--color-bone)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 55% 65% at 100% 100%, var(--color-sky-soft) 0%, transparent 65%)", opacity: 0.65 }}
      />

      <div
        className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] items-center gap-12 lg:gap-20 w-full mx-auto px-5 md:px-10"
        style={{ maxWidth: "var(--maxw)" }}
      >
        {/* Left */}
        <div className="flex flex-col gap-8 lg:gap-11 items-center lg:items-start text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="inline-flex items-center gap-2.5"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-ink-dim)" }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-sky-deep)", display: "inline-block" }} />
            Estudio · IA · Marketing · Branding
          </motion.span>

          <h1 style={{ fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif", fontSize: "clamp(40px, 6vw, 96px)", lineHeight: 1.02, letterSpacing: "-0.02em", fontWeight: 400, margin: 0, color: "var(--color-ink)" }}>
            <div>
              {line1.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.1 + i * 0.1, ease }}
                  style={{ display: "inline-block", marginRight: "0.26em", ...(i === 1 ? { fontStyle: "italic", color: "var(--color-sky-deep)" } : {}) }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
            <div>
              {line2.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.3 + i * 0.1, ease }}
                  style={{ display: "inline-block", marginRight: "0.26em" }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.52, ease }}
            style={{ fontSize: 16, color: "var(--color-ink-dim)", maxWidth: 440, lineHeight: 1.55, margin: 0 }}
          >
            Diseñamos sistemas de automatización, marketing y marca para empresas
            que quieren operar con elegancia y escalar sin fricción.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62, ease }}
            className="flex gap-3 flex-wrap items-center justify-center lg:justify-start"
          >
            <a
              href="https://calendar.app.google/onsZbjUXmqQJexZZ8"
              className="inline-flex items-center gap-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-px hover:shadow-lg"
              style={{ padding: "12px 20px", background: "var(--color-ink)", color: "var(--color-paper)", border: "1px solid transparent" }}
            >
              Agenda una llamada <span>↗</span>
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:bg-[var(--color-bone-2)]"
              style={{ padding: "12px 20px", background: "transparent", border: "1px solid var(--color-line-strong)", color: "var(--color-ink)" }}
            >
              Conoce el estudio
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.78, ease }}
            className="flex items-center gap-3.5 justify-center lg:justify-start"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-ink-faint)" }}
          >
            <span className="relative" style={{ width: 6, height: 6, display: "inline-block" }}>
              <span className="absolute rounded-full" style={{ inset: 0, background: "var(--color-sky-deep)" }} />
              <span className="absolute animate-pulse-ring rounded-full" style={{ inset: -3, border: "1px solid var(--color-sky-deep)", opacity: 0.7 }} />
            </span>
            Sistemas impulsados por IA
          </motion.div>
        </div>

        {/* Orbit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease }}
          ref={orbitRef}
          className="relative w-full mx-auto hidden sm:block lg:ml-auto"
          style={{ aspectRatio: "1/1", maxWidth: 480 }}
          aria-hidden="true"
        >
          <motion.div style={{ rotateX, rotateY, width: "100%", height: "100%", position: "relative", perspective: 900 }}>
            <ParticleField />

            <div
              className="absolute"
              style={{ inset: "5%", borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, var(--color-paper) 0%, var(--color-bone-2) 50%, #d8cdb6 100%)", boxShadow: "0 30px 80px -30px rgba(26,26,31,.25), inset 0 -20px 40px rgba(0,0,0,.04)" }}
            >
              <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle at 70% 80%, var(--color-sky-soft) 0%, transparent 50%)", mixBlendMode: "multiply", opacity: 0.7 }} />
            </div>

            <div className="absolute rounded-full animate-spin-slow" style={{ inset: "-2%", border: "1px solid rgba(26,26,31,0.08)" }} />
            <div className="absolute rounded-full animate-spin-med" style={{ inset: "14%", border: "1px dashed rgba(26,26,31,0.14)" }} />
            <div className="absolute rounded-full animate-spin-fast" style={{ inset: "28%", border: "1px solid rgba(110,155,200,0.35)" }} />
            <div className="absolute rounded-full animate-spin-arc" style={{ inset: "-2%", border: "1.5px solid transparent", borderTopColor: "var(--color-ink)" }} />
            <div className="absolute rounded-full animate-spin-arc2" style={{ inset: "14%", border: "1.5px solid transparent", borderTopColor: "var(--color-sky-deep)" }} />

            <div className="absolute animate-orbit1 rounded-full" style={{ top: "50%", left: "50%", width: 14, height: 14, margin: -7, background: "var(--color-sky-deep)", boxShadow: "0 4px 12px rgba(110,155,200,.5)" }} />
            <div className="absolute animate-orbit2 rounded-full" style={{ top: "50%", left: "50%", width: 10, height: 10, margin: -5, background: "var(--color-ink)" }} />
            <div className="absolute animate-orbit3 rounded-full" style={{ top: "50%", left: "50%", width: 8, height: 8, margin: -4, background: "var(--color-paper)", border: "1px solid var(--color-ink)" }} />

            <div
              className="absolute animate-wobble grid place-items-center rounded-full"
              style={{ top: "50%", left: "50%", width: "34%", height: "34%", transform: "translate(-50%,-50%)", background: "rgb(60,58,58)", boxShadow: "0 20px 50px -10px rgba(26,26,31,.4)" }}
            >
              <img
                src="/Logo-Lovatti-sin-texto.png"
                alt="Lovatti"
                style={{ width: "58%", height: "auto", filter: "invert(1) brightness(2)" }}
              />
            </div>

            {[
              { label: "Estrategia", cls: "animate-float1", style: { top: "8%", left: "-4%" } },
              { label: "Agente IA",  cls: "animate-float2", style: { top: "46%", right: "-8%" } },
              { label: "Marca",      cls: "animate-float3", style: { bottom: "10%", left: "8%" } },
            ].map(({ label, cls, style }) => (
              <div
                key={label}
                className={`absolute flex items-center gap-2 px-3 py-1.5 rounded-full ${cls}`}
                style={{ ...style, background: "var(--color-paper)", border: "1px solid var(--color-line)", fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-ink-2)", boxShadow: "0 8px 24px -8px rgba(26,26,31,.18)", whiteSpace: "nowrap" }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-sky-deep)", display: "inline-block", flexShrink: 0 }} />
                {label}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
