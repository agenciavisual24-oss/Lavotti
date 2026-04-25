"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const cases = [
  { tag: "  restauración", metric: "+87%", kpi: "interacción con el menú", client: "Osteria Da Gianni", desc: "De un menú en PDF a una experiencia digital completa. Web con menú interactivo, sistema de reservas y gestión directa de peticiones.", footer: "4 semanas · Web & Experiencia digital" },
  { tag: "E-commerce", metric: "+158%", kpi: "Leads cualificados / mes", client: "Chrysos Aceites", desc: "Optimizamos un ecommerce gastronómico para mejorar su narrativa, diseño y conversión, impulsando sus ventas.", footer: "8 semanas · Ecommerce & Optimización" },
  { tag: "BRANDING · SOCIAL MEDIA · EVENTOS", metric: "+90%", kpi: "engagement en redes", client: "Green Cloud Events", desc: "Creamos y gestionamos el branding y redes sociales de la marca, fortaleciendo su presencia digital.", footer: "4–6 semanas · Estrategia digital" },
  { tag: "INDUSTRIAL · PRESENCIA DIGITAL", metric: "+74%", kpi: "Claridad en comunicación de servicios", client: "Trigas Europa", desc: "Simplificamos la comunicación digital de una empresa industrial, haciéndola clara y orientada a negocio B2B.", footer: "Web B2B · Industrial · UX" },
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
    const step = Math.min(t.clientWidth * 0.85, 380);
    t.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="casos" className="py-24 md:py-36" style={{ background: "var(--color-paper)" }}>
      <div className="mx-auto px-5 md:px-10" style={{ maxWidth: "var(--maxw)" }}>

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-15 items-end mb-12 md:mb-20">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2.5" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-ink-dim)" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-sky-deep)", display: "inline-block" }} />
              Casos — 03
            </span>
            <h2 style={{ fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif", fontSize: "clamp(36px, 4.6vw, 72px)", lineHeight: 1, letterSpacing: "-0.015em", fontWeight: 400, margin: "18px 0 0" }}>
              Resultados que<br />se{" "}<em style={{ fontStyle: "italic", color: "var(--color-sky-deep)" }}>miden</em>.
            </h2>
          </motion.div>
          <motion.p {...fadeUp(0.08)} style={{ color: "var(--color-ink-dim)", fontSize: 16, lineHeight: 1.6, maxWidth: 380, margin: 0 }}>
            Selección de proyectos recientes. Métricas reales sobre un periodo de seis meses tras la implementación.
          </motion.p>
        </div>

        {/* Carousel */}
        <motion.div
          {...fadeUp(0.08)}
          ref={trackRef}
          className="flex gap-4 md:gap-6 overflow-x-auto pb-2"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
        >
          {cases.map((c) => (
            <article
              key={c.client}
              className="flex-none transition-all duration-300"
              style={{
                width: "min(calc(85vw - 40px), 340px)",
                scrollSnapAlign: "start",
                background: "var(--color-bone)",
                border: "1px solid var(--color-line)",
                borderRadius: 20,
                padding: "28px 24px",
              }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--color-line-strong)"; el.style.boxShadow = "0 20px 40px -20px rgba(26,26,31,.2)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--color-line)"; el.style.boxShadow = "none"; }}
            >
              <span style={{ display: "inline-block", fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 10, color: "var(--color-ink-2)", background: "var(--color-sky-soft)", padding: "4px 10px", borderRadius: 999, letterSpacing: "0.14em", textTransform: "uppercase" }}>
                {c.tag}
              </span>
              <div style={{ fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif", fontSize: "clamp(60px, 10vw, 88px)", fontWeight: 400, letterSpacing: "-0.04em", lineHeight: 0.95, margin: "24px 0 6px", color: "var(--color-ink)" }}>
                <em style={{ fontStyle: "italic", color: "var(--color-sky-deep)" }}>{c.metric}</em>
              </div>
              <div style={{ fontSize: 13, color: "var(--color-ink-dim)", marginBottom: 24 }}>{c.kpi}</div>
              <h4 style={{ fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif", fontSize: 20, fontWeight: 400, margin: "0 0 8px", letterSpacing: "-0.01em" }}>{c.client}</h4>
              <p style={{ color: "var(--color-ink-dim)", fontSize: 13, lineHeight: 1.6, margin: 0 }}>{c.desc}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 24, paddingTop: 16, borderTop: "1px solid var(--color-line)", fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 10, color: "var(--color-ink-faint)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                {c.footer}
              </div>
            </article>
          ))}
        </motion.div>

        {/* Arrows */}
        <div className="flex gap-2 mt-6 justify-end">
          <ArrowBtn dir="left" disabled={!canLeft} onClick={() => scroll(-1)} />
          <ArrowBtn dir="right" disabled={!canRight} onClick={() => scroll(1)} />
        </div>
      </div>
    </section>
  );
}

function ArrowBtn({ dir, disabled, onClick }: { dir: "left" | "right"; disabled: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "left" ? "Anterior" : "Siguiente"}
      className="grid place-items-center transition-all duration-200 disabled:opacity-30"
      style={{ width: 44, height: 44, borderRadius: "50%", border: "1px solid var(--color-line-strong)", background: "transparent", color: "var(--color-ink)" }}
      onMouseEnter={(e) => { if (!disabled) { const el = e.currentTarget as HTMLElement; el.style.background = "var(--color-ink)"; el.style.color = "var(--color-paper)"; el.style.borderColor = "var(--color-ink)"; } }}
      onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "transparent"; el.style.color = "var(--color-ink)"; el.style.borderColor = "var(--color-line-strong)"; }}
    >
      <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        {dir === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
      </svg>
    </button>
  );
}
