"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.9, delay, ease: [0.2, 0.7, 0.2, 1] as [number, number, number, number] },
});

export default function CTA() {
  return (
    <section id="contacto" className="pb-24 md:pb-36">
      <div className="mx-auto px-5 md:px-10" style={{ maxWidth: "var(--maxw)" }}>
        <motion.div
          {...fadeUp(0)}
          className="relative text-center overflow-hidden"
          style={{
            borderRadius: 32,
            padding: "clamp(48px, 8vw, 120px) clamp(24px, 5vw, 64px)",
            background: "var(--color-ink)",
            color: "var(--color-paper)",
          }}
        >
          {/* Background glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              inset: "auto -10% -40% -10%",
              height: "80%",
              background:
                "radial-gradient(circle at 50% 100%, rgba(168,199,230,.35), transparent 60%)",
            }}
          />

          <span
            className="relative z-10 inline-flex items-center gap-2.5"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(245,248,241,.5)",
            }}
          >
            <span
              style={{
                width: 6, height: 6,
                borderRadius: "50%",
                background: "var(--color-sky)",
                display: "inline-block",
              }}
            />
            Empieza hoy
          </span>

          <h2
            className="relative z-10 mx-auto"
            style={{
              fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif",
              fontSize: "clamp(40px, 5.2vw, 84px)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              margin: "24px auto 24px",
              maxWidth: 880,
            }}
          >
            Convierte tu negocio en una máquina{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-sky)" }}>
              automatizada
            </em>{" "}
            de crecimiento.
          </h2>

          <p
            className="relative z-10 mx-auto"
            style={{
              color: "rgba(245,248,241,.65)",
              fontSize: 17,
              maxWidth: 520,
              margin: "0 auto 40px",
            }}
          >
            30 minutos, sin compromiso. Salimos con un diagnóstico y los
            próximos pasos concretos.
          </p>

          <div className="relative z-10 flex gap-3.5 justify-center flex-wrap">
            <a
              href="https://calendar.app.google/onsZbjUXmqQJexZZ8"
              className="inline-flex items-center gap-2.5 px-[22px] py-[14px] rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-px"
              style={{
                background: "var(--color-paper)",
                color: "var(--color-ink)",
                border: "1px solid transparent",
              }}
            >
              Agenda una llamada <span>↗</span>
            </a>
            <a
              href="mailto:info@lovattistudio.com"
              className="inline-flex items-center gap-2.5 px-[22px] py-[14px] rounded-full text-sm font-medium transition-all duration-200"
              style={{
                background: "transparent",
                border: "1px solid rgba(245,248,241,.25)",
                color: "var(--color-paper)",
              }}
            >
              info@lovattistudio.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
