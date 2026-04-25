"use client";

import { motion } from "framer-motion";

const values = [
  { num: "001", label: "Innovación",    desc: "Apostamos por tecnología de frontera, no por tendencias." },
  { num: "002", label: "Eficiencia",    desc: "Cada hora invertida tiene que devolver tiempo o ingresos." },
  { num: "003", label: "Escalabilidad", desc: "Construimos sistemas, no soluciones de una sola vez." },
  { num: "004", label: "Pragmatismo",   desc: "El mejor stack es el que entrega valor el lunes." },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.9, delay, ease: [0.2, 0.7, 0.2, 1] as [number, number, number, number] },
});

export default function About() {
  return (
    <section id="sobre" className="py-16 pb-24 md:py-16 md:pb-36">
      <div
        className="mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
        style={{ maxWidth: "var(--maxw)" }}
      >
        {/* Text */}
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
            El estudio — 06
          </span>

          <p
            style={{
              fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif",
              fontSize: 28,
              lineHeight: 1.35,
              color: "var(--color-ink)",
              margin: "24px 0 0",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Una agencia construida como un{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-sky-deep)" }}>
              producto
            </em>
            , no como una consultora.
          </p>
          <p
            style={{
              fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif",
              fontSize: 28,
              lineHeight: 1.35,
              color: "var(--color-ink)",
              margin: "24px 0 0",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Operadores, ingenieros de IA y diseñadores que antes{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-sky-deep)" }}>
              fundaron compañías
            </em>{" "}
            y hoy las hacen crecer.
          </p>
          <p
            style={{
              fontSize: 15,
              color: "var(--color-ink-dim)",
              lineHeight: 1.65,
              marginTop: 32,
              maxWidth: 420,
            }}
          >
            No facturamos por horas: facturamos por sistemas que producen
            resultados medibles, mes tras mes, sin que tu equipo tenga que
            mantenerlos.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div {...fadeUp(0.08)}>
          {values.map((v, i) => (
            <div
              key={v.num}
              className="group flex items-start gap-6 transition-all duration-200 hover:pl-2"
              style={{
                padding: "28px 0",
                borderBottom: "1px solid var(--color-line)",
                borderTop: i === 0 ? "1px solid var(--color-line)" : undefined,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: 11,
                  color: "var(--color-ink-faint)",
                  letterSpacing: "0.18em",
                  flexShrink: 0,
                  width: 40,
                  paddingTop: 8,
                }}
              >
                {v.num}
              </span>
              <div className="flex-1">
                <div
                  style={{
                    fontFamily:
                      "var(--font-instrument-serif), ui-serif, Georgia, serif",
                    fontSize: 30,
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    marginBottom: 6,
                    lineHeight: 1,
                  }}
                >
                  {v.label}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "var(--color-ink-dim)",
                    maxWidth: 340,
                    lineHeight: 1.55,
                  }}
                >
                  {v.desc}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
