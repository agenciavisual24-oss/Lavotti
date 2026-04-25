"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "PASO 01", title: "Análisis", desc: "Auditamos tu operación, datos y embudos. Detectamos dónde se pierde tiempo, dinero y atención." },
  { num: "PASO 02", title: "Estrategia", desc: "Diseñamos el sistema: qué automatizar, qué medir, qué construir antes y qué dejar fuera." },
  { num: "PASO 03", title: "Implementación", desc: "Construimos agentes, campañas y marca en sprints semanales. Entregables, no diapositivas." },
  { num: "PASO 04", title: "Escalado", desc: "Optimización continua sobre métricas reales. El sistema mejora cada semana sin tu intervención." },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.9, delay, ease: [0.2, 0.7, 0.2, 1] as [number, number, number, number] },
});

export default function Process() {
  return (
    <section id="proceso" className="pb-24 md:pb-36">
      <div className="mx-auto px-5 md:px-10" style={{ maxWidth: "var(--maxw)" }}>

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-15 items-end mb-12 md:mb-20">
          <motion.div {...fadeUp(0)}>
            <span
              className="inline-flex items-center gap-2.5"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-ink-dim)" }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-sky-deep)", display: "inline-block" }} />
              Proceso — 02
            </span>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif",
                fontSize: "clamp(36px, 4.6vw, 72px)",
                lineHeight: 1,
                letterSpacing: "-0.015em",
                fontWeight: 400,
                margin: "18px 0 0",
              }}
            >
              Un método de<br />cuatro{" "}
              <em style={{ fontStyle: "italic", color: "var(--color-sky-deep)" }}>movimientos</em>.
            </h2>
          </motion.div>
          <motion.p {...fadeUp(0.08)} style={{ color: "var(--color-ink-dim)", fontSize: 16, lineHeight: 1.6, maxWidth: 380, margin: 0 }}>
            En treinta días pasamos del diagnóstico al primer sistema en producción. A partir de ahí, todo es escala.
          </motion.p>
        </div>

        {/* Steps grid: 1 col mobile → 2 col tablet → 4 col desktop */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ borderTop: "1px solid var(--color-line)", borderBottom: "1px solid var(--color-line)" }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              {...fadeUp(i * 0.08)}
              className="step-cell"
              style={{
                padding: "36px 24px",
                borderBottom: i < 2 ? "1px solid var(--color-line)" : undefined,
              }}
            >
              <div
                className="flex items-center gap-2.5"
                style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, color: "var(--color-sky-deep)", letterSpacing: "0.18em" }}
              >
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-sky-deep)", display: "inline-block" }} />
                {step.num}
              </div>
              <h4
                style={{
                  fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif",
                  fontSize: "clamp(28px, 3vw, 34px)",
                  fontWeight: 400,
                  margin: "20px 0 12px",
                  letterSpacing: "-0.015em",
                }}
              >
                {step.title}
              </h4>
              <p style={{ color: "var(--color-ink-dim)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
