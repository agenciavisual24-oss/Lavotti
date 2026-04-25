"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.2, 0.7, 0.2, 1] as [number, number, number, number] },
});

export default function Hero() {
  return (
    <header
      id="top"
      className="relative flex items-center overflow-hidden"
      style={{
        minHeight: "100vh",
        padding: "140px 0 100px",
        background: "var(--color-bone)",
      }}
    >
      {/* Soft gradient */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: "auto -10% -20% auto",
          width: "60%",
          height: "80%",
          background:
            "radial-gradient(circle at 70% 40%, var(--color-sky-soft) 0%, transparent 60%)",
          opacity: 0.7,
        }}
      />

      <div
        className="relative z-10 grid items-center gap-20 w-full mx-auto px-10"
        style={{
          maxWidth: "var(--maxw)",
          gridTemplateColumns: "1.1fr 1fr",
        }}
      >
        {/* Left text */}
        <div className="flex flex-col gap-11 items-start">
          <motion.span
            {...fadeUp(0)}
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
            Estudio · IA · Marketing · Branding
          </motion.span>

          <motion.h1
            {...fadeUp(0.08)}
            style={{
              fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif",
              fontSize: "clamp(48px, 6vw, 96px)",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              margin: 0,
              color: "var(--color-ink)",
            }}
          >
            Inteligencia{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-sky-deep)" }}>
              aplicada
            </em>
            <br />
            al crecimiento.
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            style={{
              fontSize: 17,
              color: "var(--color-ink-dim)",
              maxWidth: 440,
              lineHeight: 1.55,
              margin: 0,
            }}
          >
            Diseñamos sistemas de automatización, marketing y marca para empresas
            que quieren operar con elegancia y escalar sin fricción.
          </motion.p>

          <motion.div {...fadeUp(0.24)} className="flex gap-3.5 flex-wrap items-center">
            <a
              href="#contacto"
              className="relative inline-flex items-center gap-2.5 px-[22px] py-[14px] rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-px"
              style={{
                background: "var(--color-ink)",
                color: "var(--color-paper)",
                border: "1px solid transparent",
              }}
            >
              Agenda una llamada{" "}
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2.5 px-[22px] py-[14px] rounded-full text-sm font-medium transition-all duration-200"
              style={{
                background: "transparent",
                border: "1px solid var(--color-line-strong)",
                color: "var(--color-ink)",
              }}
            >
              Conoce el estudio
            </a>
          </motion.div>

          <motion.div
            {...fadeUp(0.32)}
            className="flex items-center gap-3.5"
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--color-ink-faint)",
            }}
          >
            <span className="relative" style={{ width: 6, height: 6 }}>
              <span
                className="absolute rounded-full"
                style={{
                  inset: 0,
                  background: "var(--color-sky-deep)",
                }}
              />
              <span
                className="absolute animate-pulse-ring rounded-full"
                style={{
                  inset: -3,
                  border: "1px solid var(--color-sky-deep)",
                  opacity: 0.7,
                }}
              />
            </span>
            Aceptando 3 proyectos · Q2 2026
          </motion.div>
        </div>

        {/* Right orbit */}
        <motion.div
          {...fadeUp(0.16)}
          className="relative w-full ml-auto"
          style={{ aspectRatio: "1/1", maxWidth: 560 }}
          aria-hidden="true"
        >
          <div className="absolute inset-0">
            {/* Main disc */}
            <div
              className="absolute"
              style={{
                inset: "5%",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle at 35% 30%, var(--color-paper) 0%, var(--color-bone-2) 50%, #d8cdb6 100%)",
                boxShadow:
                  "0 30px 80px -30px rgba(26,26,31,.25), inset 0 -20px 40px rgba(0,0,0,.04)",
              }}
            >
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 70% 80%, var(--color-sky-soft) 0%, transparent 50%)",
                  mixBlendMode: "multiply",
                  opacity: 0.7,
                }}
              />
            </div>

            {/* Rings */}
            <div
              className="absolute rounded-full animate-spin-slow"
              style={{
                inset: "-2%",
                border: "1px solid rgba(26,26,31,0.08)",
              }}
            />
            <div
              className="absolute rounded-full animate-spin-med"
              style={{
                inset: "14%",
                border: "1px dashed rgba(26,26,31,0.14)",
              }}
            />
            <div
              className="absolute rounded-full animate-spin-fast"
              style={{
                inset: "28%",
                border: "1px solid rgba(110,155,200,0.35)",
              }}
            />

            {/* Arcs */}
            <div
              className="absolute rounded-full animate-spin-arc"
              style={{
                inset: "-2%",
                border: "1.5px solid transparent",
                borderTopColor: "var(--color-ink)",
              }}
            />
            <div
              className="absolute rounded-full animate-spin-arc2"
              style={{
                inset: "14%",
                border: "1.5px solid transparent",
                borderTopColor: "var(--color-sky-deep)",
              }}
            />

            {/* Orbiting dots */}
            <div
              className="absolute animate-orbit1 rounded-full"
              style={{
                top: "50%",
                left: "50%",
                width: 14,
                height: 14,
                margin: -7,
                background: "var(--color-sky-deep)",
                boxShadow: "0 4px 12px rgba(110,155,200,.5)",
              }}
            />
            <div
              className="absolute animate-orbit2 rounded-full"
              style={{
                top: "50%",
                left: "50%",
                width: 10,
                height: 10,
                margin: -5,
                background: "var(--color-ink)",
              }}
            />
            <div
              className="absolute animate-orbit3 rounded-full"
              style={{
                top: "50%",
                left: "50%",
                width: 8,
                height: 8,
                margin: -4,
                background: "var(--color-paper)",
                border: "1px solid var(--color-ink)",
              }}
            />

            {/* Core */}
            <div
              className="absolute animate-wobble grid place-items-center rounded-full"
              style={{
                top: "50%",
                left: "50%",
                width: "34%",
                height: "34%",
                transform: "translate(-50%,-50%)",
                background: "rgb(60,58,58)",
                color: "var(--color-paper)",
                fontFamily:
                  "var(--font-instrument-serif), ui-serif, Georgia, serif",
                fontSize: 22,
                letterSpacing: "0.04em",
                boxShadow: "0 20px 50px -10px rgba(26,26,31,.4)",
              }}
            >
              <span className="relative">L</span>
            </div>

            {/* Floating chips */}
            {[
              { label: "Estrategia", cls: "animate-float1", style: { top: "8%", left: "-4%" } },
              { label: "Agente IA",  cls: "animate-float2", style: { top: "46%", right: "-8%" } },
              { label: "Marca",      cls: "animate-float3", style: { bottom: "10%", left: "8%" } },
            ].map(({ label, cls, style }) => (
              <div
                key={label}
                className={`absolute flex items-center gap-2 px-3.5 py-2 rounded-full ${cls}`}
                style={{
                  ...style,
                  background: "var(--color-paper)",
                  border: "1px solid var(--color-line)",
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--color-ink-2)",
                  boxShadow: "0 8px 24px -8px rgba(26,26,31,.18)",
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
                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  );
}
