"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Agentes de IA",
    href: "/servicios/agentes-de-ia",
    desc: "Asistentes y workflows autónomos que cierran ciclos completos de ventas, soporte y operaciones.",
    icon: (
      <svg viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={1.2}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 5v3M12 16v3M5 12h3M16 12h3M7 7l2 2M15 15l2 2M7 17l2-2M15 9l2-2" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Marketing digital",
    href: "/servicios/marketing-digital",
    desc: "Performance, paid media y contenido orquestado con datos en tiempo real para escalar canales.",
    icon: (
      <svg viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={1.2}>
        <path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Branding & diseño",
    href: "/servicios/branding-diseno",
    desc: "Sistemas de marca, identidad y producto que comunican el nivel real de tu negocio.",
    icon: (
      <svg viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={1.2}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Funnels & conversión",
    href: "/servicios/funnels-conversion",
    desc: "Embudos, landings y experimentación continua para mover la aguja en CAC, LTV y CR.",
    icon: (
      <svg viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={1.2}>
        <path d="M4 19h16M4 19V9l5-3 5 3 5-3v13" />
        <path d="M9 19v-6M14 19v-6M19 19v-6" />
      </svg>
    ),
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.9, delay, ease: [0.2, 0.7, 0.2, 1] as [number, number, number, number] },
});

export default function Services() {
  return (
    <section id="servicios" className="py-24 md:py-36">
      <div className="mx-auto px-5 md:px-10" style={{ maxWidth: "var(--maxw)" }}>

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-15 items-end mb-12 md:mb-20">
          <motion.div {...fadeUp(0)}>
            <span
              className="inline-flex items-center gap-2.5"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-ink-dim)" }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-sky-deep)", display: "inline-block" }} />
              Servicios — 01
            </span>
            <h2
              style={{
                fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif",
                fontSize: "clamp(36px, 4.6vw, 72px)",
                lineHeight: 1,
                letterSpacing: "-0.015em",
                fontWeight: 400,
                margin: "18px 0 0",
                color: "var(--color-ink)",
              }}
            >
              Cuatro disciplinas,<br />un solo{" "}
              <em style={{ fontStyle: "italic", color: "var(--color-sky-deep)" }}>sistema</em>.
            </h2>
          </motion.div>
          <motion.p
            {...fadeUp(0.08)}
            style={{ color: "var(--color-ink-dim)", fontSize: 16, lineHeight: 1.6, maxWidth: 380, margin: 0 }}
          >
            No vendemos servicios sueltos. Cada engagement combina las disciplinas que tu negocio necesita en un solo sistema operativo.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          {...fadeUp(0.08)}
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: 1, background: "var(--color-line)", border: "1px solid var(--color-line)", borderRadius: 18, overflow: "hidden" }}
        >
          {services.map((svc) => (
            <ServiceCard key={svc.num} num={svc.num} title={svc.title} desc={svc.desc} icon={svc.icon} href={svc.href} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ num, title, desc, icon, href }: { num: string; title: string; desc: string; icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="group relative flex flex-col justify-between transition-colors duration-300"
      style={{ padding: "36px 28px", background: "var(--color-bone)", minHeight: 260, textDecoration: "none" }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--color-paper)")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--color-bone)")}
    >
      <div>
        <div className="flex items-start justify-between gap-5 mb-6">
          <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, color: "var(--color-ink-faint)", letterSpacing: "0.18em" }}>{num}</span>
          <div
            className="grid place-items-center transition-all duration-300 group-hover:rotate-15"
            style={{ width: 48, height: 48, borderRadius: "50%", border: "1px solid var(--color-line-strong)", color: "var(--color-ink)", flexShrink: 0 }}
          >
            {icon}
          </div>
        </div>
        <h3 style={{ fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif", fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 400, margin: "0 0 10px", letterSpacing: "-0.015em" }}>
          {title}
        </h3>
        <p style={{ margin: 0, color: "var(--color-ink-dim)", fontSize: 14, lineHeight: 1.6 }}>{desc}</p>
      </div>
      <span className="inline-flex items-center gap-2 mt-6 text-sm font-medium" style={{ color: "var(--color-ink)" }}>
        Conocer más →
      </span>
    </a>
  );
}
