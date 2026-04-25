"use client";

import { motion } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";

const ease = [0.2, 0.7, 0.2, 1] as [number, number, number, number];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.9, delay, ease },
});

export interface Feature { icon: React.ReactNode; title: string; desc: string; }
export interface Step    { num: string; title: string; desc: string; }
export interface Metric  { value: string; label: string; }

interface Props {
  tag: string;
  title: string;
  titleEm: string;
  subtitle: string;
  features: Feature[];
  steps: Step[];
  metrics: Metric[];
  ctaTitle: string;
}

export default function ServiceLayout({ tag, title, titleEm, subtitle, features, steps, metrics, ctaTitle }: Props) {
  return (
    <>
      <Nav />

      {/* Hero */}
      <header className="relative flex items-end overflow-hidden" style={{ minHeight: "72vh", padding: "140px 0 80px", background: "var(--color-ink)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 80% 110%, rgba(110,155,200,0.25) 0%, transparent 65%)" }} />
        <div className="relative z-10 mx-auto px-5 md:px-10 w-full" style={{ maxWidth: "var(--maxw)" }}>
          <motion.span
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="inline-flex items-center gap-2.5 mb-8"
            style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(245,248,241,.45)" }}
          >
            <a href="/" style={{ color: "inherit", textDecoration: "none" }}>← Inicio</a>
            <span style={{ opacity: 0.4 }}>·</span>
            {tag}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease }}
            style={{ fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif", fontSize: "clamp(44px, 6.5vw, 100px)", lineHeight: 1, letterSpacing: "-0.02em", fontWeight: 400, color: "var(--color-paper)", margin: "0 0 28px" }}
          >
            {title}{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-sky)" }}>{titleEm}</em>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease }}
            style={{ fontSize: 18, color: "rgba(245,248,241,.62)", maxWidth: 520, lineHeight: 1.6, margin: "0 0 40px" }}
          >
            {subtitle}
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease }}
            href="https://calendar.app.google/onsZbjUXmqQJexZZ8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-px"
            style={{ padding: "13px 22px", background: "var(--color-paper)", color: "var(--color-ink)" }}
          >
            Agenda una llamada ↗
          </motion.a>
        </div>
      </header>

      {/* Metrics */}
      <section style={{ background: "var(--color-bone-2)", borderBottom: "1px solid var(--color-line)" }}>
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: "var(--maxw)" }}>
          <div className="grid divide-x" style={{ gridTemplateColumns: `repeat(${metrics.length}, 1fr)`, borderColor: "var(--color-line)" }}>
            {metrics.map((m) => (
              <div key={m.label} className="py-10 px-6 text-center">
                <div style={{ fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 400, letterSpacing: "-0.03em", color: "var(--color-sky-deep)", lineHeight: 1 }}>
                  <em style={{ fontStyle: "italic" }}>{m.value}</em>
                </div>
                <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-ink-faint)", marginTop: 8 }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32" style={{ background: "var(--color-paper)" }}>
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: "var(--maxw)" }}>
          <motion.div {...fadeUp(0)} className="mb-16">
            <span className="inline-flex items-center gap-2.5" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-ink-dim)" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-sky-deep)", display: "inline-block" }} />
              Qué incluye
            </span>
            <h2 style={{ fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif", fontSize: "clamp(32px, 4vw, 58px)", lineHeight: 1.05, letterSpacing: "-0.015em", fontWeight: 400, margin: "16px 0 0" }}>
              Todo lo que necesitas,<br /><em style={{ fontStyle: "italic", color: "var(--color-sky-deep)" }}>integrado</em>.
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "var(--color-line)", border: "1px solid var(--color-line)", borderRadius: 20, overflow: "hidden" }}>
            {features.map((f, i) => (
              <motion.div key={f.title} {...fadeUp(i * 0.08)} style={{ padding: "40px 32px", background: "var(--color-paper)" }}>
                <div className="mb-6" style={{ width: 48, height: 48, borderRadius: "50%", border: "1px solid var(--color-line-strong)", display: "grid", placeItems: "center", color: "var(--color-ink)" }}>
                  {f.icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif", fontSize: "clamp(22px, 2.4vw, 28px)", fontWeight: 400, margin: "0 0 10px", letterSpacing: "-0.015em" }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "var(--color-ink-dim)", lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32" style={{ background: "var(--color-bone)" }}>
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: "var(--maxw)" }}>
          <motion.div {...fadeUp(0)} className="mb-16">
            <span className="inline-flex items-center gap-2.5" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-ink-dim)" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-sky-deep)", display: "inline-block" }} />
              Cómo trabajamos
            </span>
            <h2 style={{ fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif", fontSize: "clamp(32px, 4vw, 58px)", lineHeight: 1.05, letterSpacing: "-0.015em", fontWeight: 400, margin: "16px 0 0" }}>
              Del diagnóstico al<br /><em style={{ fontStyle: "italic", color: "var(--color-sky-deep)" }}>resultado</em>.
            </h2>
          </motion.div>
          <div style={{ borderTop: "1px solid var(--color-line)" }}>
            {steps.map((s, i) => (
              <motion.div key={s.num} {...fadeUp(i * 0.07)} className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6 md:gap-16 items-start" style={{ padding: "32px 0", borderBottom: "1px solid var(--color-line)" }}>
                <div style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, color: "var(--color-sky-deep)", letterSpacing: "0.18em", paddingTop: 6 }}>{s.num}</div>
                <div>
                  <h4 style={{ fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif", fontSize: "clamp(24px, 2.8vw, 34px)", fontWeight: 400, margin: "0 0 10px", letterSpacing: "-0.015em" }}>{s.title}</h4>
                  <p style={{ fontSize: 15, color: "var(--color-ink-dim)", lineHeight: 1.65, margin: 0, maxWidth: 640 }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 md:pb-36" style={{ background: "var(--color-bone)" }}>
        <div className="mx-auto px-5 md:px-10" style={{ maxWidth: "var(--maxw)" }}>
          <motion.div {...fadeUp(0)} className="relative text-center overflow-hidden" style={{ borderRadius: 32, padding: "clamp(48px,8vw,120px) clamp(24px,5vw,64px)", background: "var(--color-ink)", color: "var(--color-paper)" }}>
            <div className="absolute pointer-events-none" style={{ inset: "auto -10% -40% -10%", height: "80%", background: "radial-gradient(circle at 50% 100%, rgba(168,199,230,.3), transparent 60%)" }} />
            <h2 className="relative z-10 mx-auto" style={{ fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif", fontSize: "clamp(36px, 4.8vw, 76px)", lineHeight: 1.05, letterSpacing: "-0.02em", fontWeight: 400, margin: "0 auto 24px", maxWidth: 760 }}>
              {ctaTitle.split("{{em}}")[0]}
              <em style={{ fontStyle: "italic", color: "var(--color-sky)" }}>{ctaTitle.split("{{em}}")[1]?.split("{{/em}}")[0]}</em>
              {ctaTitle.split("{{/em}}")[1]}
            </h2>
            <div className="relative z-10 flex gap-3.5 justify-center flex-wrap">
              <a href="https://calendar.app.google/onsZbjUXmqQJexZZ8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 px-[22px] py-[14px] rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-px" style={{ background: "var(--color-paper)", color: "var(--color-ink)" }}>
                Agenda una llamada ↗
              </a>
              <a href="mailto:Lovatti.agency@gmail.com" className="inline-flex items-center gap-2.5 px-[22px] py-[14px] rounded-full text-sm font-medium" style={{ border: "1px solid rgba(245,248,241,.25)", color: "var(--color-paper)" }}>
                Lovatti.agency@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
