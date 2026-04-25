"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "PASO 01",
    title: "Análisis",
    desc: "Auditamos tu operación, datos y embudos. Detectamos dónde se pierde tiempo, dinero y atención.",
  },
  {
    num: "PASO 02",
    title: "Estrategia",
    desc: "Diseñamos el sistema: qué automatizar, qué medir, qué construir antes y qué dejar fuera.",
  },
  {
    num: "PASO 03",
    title: "Implementación",
    desc: "Construimos agentes, campañas y marca en sprints semanales. Entregables, no diapositivas.",
  },
  {
    num: "PASO 04",
    title: "Escalado",
    desc: "Optimización continua sobre métricas reales. El sistema mejora cada semana sin tu intervención.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.9, delay, ease: [0.2, 0.7, 0.2, 1] as [number, number, number, number] },
});

export default function Process() {
  return (
    <section id="proceso" style={{ padding: "0 0 140px" }}>
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
              Proceso — 02
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
              Un método de
              <br />
              cuatro{" "}
              <em style={{ fontStyle: "italic", color: "var(--color-sky-deep)" }}>
                movimientos
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
            En treinta días pasamos del diagnóstico al primer sistema en
            producción. A partir de ahí, todo es escala.
          </motion.p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderTop: "1px solid var(--color-line)",
            borderBottom: "1px solid var(--color-line)",
          }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              {...fadeUp(i * 0.08)}
              style={{
                padding:
                  i === 0
                    ? "48px 32px 48px 0"
                    : i === steps.length - 1
                    ? "48px 0 48px 32px"
                    : "48px 32px",
                borderRight:
                  i < steps.length - 1
                    ? "1px solid var(--color-line)"
                    : undefined,
              }}
            >
              <div
                className="flex items-center gap-2.5"
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: 11,
                  color: "var(--color-sky-deep)",
                  letterSpacing: "0.18em",
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "var(--color-sky-deep)",
                    display: "inline-block",
                  }}
                />
                {step.num}
              </div>
              <h4
                style={{
                  fontFamily:
                    "var(--font-instrument-serif), ui-serif, Georgia, serif",
                  fontSize: 34,
                  fontWeight: 400,
                  margin: "24px 0 14px",
                  letterSpacing: "-0.015em",
                }}
              >
                {step.title}
              </h4>
              <p
                style={{
                  color: "var(--color-ink-dim)",
                  fontSize: 14,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
