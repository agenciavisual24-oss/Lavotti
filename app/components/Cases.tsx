"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const cases = [
  {
    tag: "SaaS B2B",
    metric: "+312%",
    kpi: "ROI sobre adquisición pagada",
    client: "Norda Systems",
    desc: "Sustituimos un equipo de SDRs con un agente que califica, agenda y enriquece el CRM en tiempo real.",
    footer: "12 SEMANAS · IA + PERFORMANCE",
  },
  {
    tag: "E-commerce",
    metric: "+158%",
    kpi: "Leads cualificados / mes",
    client: "Helix Atelier",
    desc: "Rebrand, sistema de funnels y agente conversacional integrado en WhatsApp y Shopify para una marca de lujo.",
    footer: "16 SEMANAS · BRANDING + IA",
  },
  {
    tag: "Fintech",
    metric: "−74%",
    kpi: "Tiempo de respuesta soporte",
    client: "Vault Capital",
    desc: "Agente de soporte tier-1 con escalado a humanos, conectado a Notion, Slack y el core bancario interno.",
    footer: "9 SEMANAS · IA + OPS",
  },
  {
    tag: "Healthtech",
    metric: "×4.2",
    kpi: "Conversión en landing principal",
    client: "Orbita Health",
    desc: "Rediseño de marca, página de producto y experimentación CRO con tests semanales sobre cohortes reales.",
    footer: "10 SEMANAS · BRANDING + CRO",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.9, delay, ease: [0.2, 0.7, 0.2, 1] as [number, number, number, number] },
});

export default function Cases() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateState = () => {
    const t = trackRef.current;
    if (!t) return;
    setCanLeft(t.scrollLeft > 8);
    setCanRight(t.scrollLeft + t.clientWidth < t.scrollWidth - 8);
  };

  useEffect(() => {
    const t = trackRef.current;
    if (!t) return;
    t.addEventListener("scroll", updateState, { passive: true });
    setTimeout(updateState, 50);
    return () => t.removeEventListener("scroll", updateState);
  }, []);

  const scroll = (dir: 1 | -1) => {
    const t = trackRef.current;
    if (!t) return;
    const step = Math.min(t.clientWidth * 0.8, 380);
    t.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section
      id="casos"
      style={{
        padding: "140px 0",
        background: "var(--color-paper)",
      }}
    >
      <div className="mx-auto px-10" style={{ maxWidth: "var(--maxw)" }}>
        {/* Header */}
        <div
          className="grid gap-15 items-end mb-20"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
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
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--color-sky-deep)",
                  display: "inline-block",
                }}
              />
              Casos — 03
            </span>
            <h2
              style={{
                fontFamily:
                  "var(--font-instrument-serif), ui-serif, Georgia, serif",
                fontSize: "clamp(40px, 4.6vw, 72px)",
                lineHeight: 1,
                letterSpacing: "-0.015em",
                fontWeight: 400,
                margin: "18px 0 0",
              }}
            >
              Resultados que
              <br />
              se{" "}
              <em style={{ fontStyle: "italic", color: "var(--color-sky-deep)" }}>
                miden
              </em>
              .
            </h2>
          </motion.div>
          <motion.p
            {...fadeUp(0.08)}
            style={{
              color: "var(--color-ink-dim)",
              fontSize: 16,
              lineHeight: 1.6,
              maxWidth: 380,
              margin: "0 0 6px auto",
            }}
          >
            Selección de proyectos recientes. Métricas reales sobre un periodo
            de seis meses tras la implementación.
          </motion.p>
        </div>

        {/* Track */}
        <motion.div
          {...fadeUp(0.08)}
          ref={trackRef}
          className="flex gap-6 overflow-x-auto pb-2"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
        >
          {cases.map((c) => (
            <article
              key={c.client}
              className="flex-none transition-all duration-300 hover:-translate-y-1"
              style={{
                width: "calc(33.333% - 16px)",
                minWidth: 340,
                scrollSnapAlign: "start",
                background: "var(--color-bone)",
                border: "1px solid var(--color-line)",
                borderRadius: 20,
                padding: 36,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--color-line-strong)";
                el.style.boxShadow = "0 20px 40px -20px rgba(26,26,31,.2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--color-line)";
                el.style.boxShadow = "none";
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: 10,
                  color: "var(--color-ink-2)",
                  background: "var(--color-sky-soft)",
                  padding: "5px 10px",
                  borderRadius: 999,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                {c.tag}
              </span>
              <div
                style={{
                  fontFamily:
                    "var(--font-instrument-serif), ui-serif, Georgia, serif",
                  fontSize: 88,
                  fontWeight: 400,
                  letterSpacing: "-0.04em",
                  lineHeight: 0.95,
                  margin: "32px 0 6px",
                  color: "var(--color-ink)",
                }}
              >
                <em style={{ fontStyle: "italic", color: "var(--color-sky-deep)" }}>
                  {c.metric}
                </em>
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "var(--color-ink-dim)",
                  marginBottom: 32,
                }}
              >
                {c.kpi}
              </div>
              <h4
                style={{
                  fontFamily:
                    "var(--font-instrument-serif), ui-serif, Georgia, serif",
                  fontSize: 22,
                  fontWeight: 400,
                  margin: "0 0 8px",
                  letterSpacing: "-0.01em",
                }}
              >
                {c.client}
              </h4>
              <p
                style={{
                  color: "var(--color-ink-dim)",
                  fontSize: 13,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {c.desc}
              </p>
              <div
                className="flex items-center gap-2.5 mt-8 pt-5"
                style={{
                  borderTop: "1px solid var(--color-line)",
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: 11,
                  color: "var(--color-ink-faint)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                {c.footer}
              </div>
            </article>
          ))}
        </motion.div>

        {/* Arrows */}
        <div className="flex gap-2 mt-8 justify-end">
          <ArrowBtn dir="left" disabled={!canLeft} onClick={() => scroll(-1)} />
          <ArrowBtn dir="right" disabled={!canRight} onClick={() => scroll(1)} />
        </div>
      </div>
    </section>
  );
}

function ArrowBtn({
  dir,
  disabled,
  onClick,
}: {
  dir: "left" | "right";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "left" ? "Anterior" : "Siguiente"}
      className="grid place-items-center transition-all duration-200 disabled:opacity-30"
      style={{
        width: 46,
        height: 46,
        borderRadius: "50%",
        border: "1px solid var(--color-line-strong)",
        background: "transparent",
        color: "var(--color-ink)",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          const el = e.currentTarget as HTMLElement;
          el.style.background = "var(--color-ink)";
          el.style.color = "var(--color-paper)";
          el.style.borderColor = "var(--color-ink)";
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "transparent";
        el.style.color = "var(--color-ink)";
        el.style.borderColor = "var(--color-line-strong)";
      }}
    >
      <svg
        width={16}
        height={16}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        {dir === "left" ? (
          <path d="M15 18l-6-6 6-6" />
        ) : (
          <path d="M9 18l6-6-6-6" />
        )}
      </svg>
    </button>
  );
}
