"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const data = [
  {
    q: "Reemplazamos tres herramientas y un puesto de operaciones con un solo agente de IA en seis semanas. Piensan como producto, no como vendor.",
    who: "Marta Reyes",
    role: "VP Growth · Norda Systems",
    av: "M",
  },
  {
    q: "En noventa días pasamos de cerrar 12 leads al mes a cerrar 38, con la mitad del equipo comercial. No nos vendieron campañas, nos construyeron un sistema.",
    who: "Daniel Carvajal",
    role: "CEO · Helix Atelier",
    av: "D",
  },
  {
    q: "El rebrand y la nueva landing nos cuadruplicaron la conversión. Lo que más valoro es cómo trabajan: directos, técnicos y con criterio de negocio.",
    who: "Lucía Fernández",
    role: "CMO · Orbita Health",
    av: "L",
  },
  {
    q: "Probamos cuatro agencias antes. Lovatti llegó, leyó nuestro stack en una semana y desplegó algo en producción en tres.",
    who: "Andrés Soto",
    role: "COO · Vault Capital",
    av: "A",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.9, delay, ease: [0.2, 0.7, 0.2, 1] as [number, number, number, number] },
});

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = (n: number, manual = false) => {
    const next = ((n % data.length) + data.length) % data.length;
    setFading(true);
    setTimeout(() => {
      setIdx(next);
      setFading(false);
    }, 180);
    if (manual) {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => go(idx + 1), 7000);
    }
  };

  useEffect(() => {
    timerRef.current = setInterval(() => setIdx((i) => (i + 1) % data.length), 7000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const current = data[idx];

  return (
    <section id="testimonios" style={{ padding: "140px 0" }}>
      <div className="mx-auto px-10" style={{ maxWidth: "var(--maxw)" }}>
        {/* Header */}
        <div className="mb-20">
          <motion.div {...fadeUp(0)}>
            <span
              className="inline-flex items-center gap-2.5"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--color-ink-dim)",
              }}
            >
              <span
                style={{
                  width: 6, height: 6,
                  borderRadius: "50%",
                  background: "var(--color-sky-deep)",
                  display: "inline-block",
                }}
              />
              Testimonios — 05
            </span>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif",
                fontSize: "clamp(40px, 4.6vw, 72px)",
                lineHeight: 1,
                letterSpacing: "-0.015em",
                fontWeight: 400,
                margin: "18px 0 0",
              }}
            >
              Lo que dicen
              <br />
              quienes{" "}
              <em style={{ fontStyle: "italic", color: "var(--color-sky-deep)" }}>
                ya escalan
              </em>
              .
            </h2>
          </motion.div>
        </div>

        {/* Stage */}
        <motion.div
          {...fadeUp(0.08)}
          className="relative overflow-hidden"
          style={{
            border: "1px solid var(--color-line)",
            borderRadius: 24,
            padding: 72,
            background: "var(--color-paper)",
            minHeight: 340,
          }}
        >
          {/* Glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              inset: "auto -100px -100px auto",
              width: 380,
              height: 380,
              borderRadius: "50%",
              background: "var(--color-sky-soft)",
              opacity: 0.6,
              filter: "blur(40px)",
            }}
          />

          {/* Controls */}
          <div className="absolute top-9 right-9 flex gap-2">
            <ArrowBtn dir="left"  onClick={() => go(idx - 1, true)} />
            <ArrowBtn dir="right" onClick={() => go(idx + 1, true)} />
          </div>

          {/* Quote mark */}
          <div
            style={{
              fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif",
              fontSize: 120,
              lineHeight: 0.5,
              color: "var(--color-sky-deep)",
              opacity: 0.4,
            }}
          >
            &ldquo;
          </div>

          {/* Quote text */}
          <p
            className="relative transition-opacity duration-200"
            style={{
              fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif",
              fontSize: "clamp(24px, 2.6vw, 38px)",
              lineHeight: 1.3,
              fontWeight: 400,
              letterSpacing: "-0.015em",
              maxWidth: 920,
              color: "var(--color-ink)",
              margin: "24px 0 0",
              minHeight: 160,
              opacity: fading ? 0 : 1,
            }}
          >
            {current.q}
          </p>

          {/* Author */}
          <div
            className="flex items-center gap-3.5 relative"
            style={{ marginTop: 36, opacity: fading ? 0 : 1, transition: "opacity 0.2s" }}
          >
            <div
              className="grid place-items-center rounded-full flex-shrink-0"
              style={{
                width: 46,
                height: 46,
                background: "var(--color-ink)",
                color: "var(--color-paper)",
                fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif",
                fontSize: 18,
                letterSpacing: "0.04em",
              }}
            >
              {current.av}
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 500, color: "var(--color-ink)" }}>
                {current.who}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: 11,
                  color: "var(--color-ink-faint)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginTop: 3,
                }}
              >
                {current.role}
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="absolute bottom-9 right-9 flex gap-2 items-center">
            {data.map((_, k) => (
              <button
                key={k}
                aria-label={`Testimonio ${k + 1}`}
                aria-current={k === idx}
                onClick={() => go(k, true)}
                className="transition-all duration-200"
                style={{
                  height: 2,
                  borderRadius: 2,
                  background:
                    k === idx ? "var(--color-ink)" : "var(--color-line-strong)",
                  width: k === idx ? 44 : 28,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ArrowBtn({ dir, onClick }: { dir: "left" | "right"; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === "left" ? "Anterior" : "Siguiente"}
      className="grid place-items-center transition-all duration-200"
      style={{
        width: 46,
        height: 46,
        borderRadius: "50%",
        border: "1px solid var(--color-line-strong)",
        background: "transparent",
        color: "var(--color-ink)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "var(--color-ink)";
        el.style.color = "var(--color-paper)";
        el.style.borderColor = "var(--color-ink)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "transparent";
        el.style.color = "var(--color-ink)";
        el.style.borderColor = "var(--color-line-strong)";
      }}
    >
      <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        {dir === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
      </svg>
    </button>
  );
}
