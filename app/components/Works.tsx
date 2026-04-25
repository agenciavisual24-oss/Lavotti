"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const works = [
  { num: "01", title: "Norda Systems",  tag: "SaaS B2B",          year: "2025", shot: "s1", url: "norda.systems" },
  { num: "02", title: "Helix Atelier",  tag: "E-commerce de lujo", year: "2025", shot: "s2", url: "helixatelier.com" },
  { num: "03", title: "Vault Capital",  tag: "Fintech",            year: "2026", shot: "s3", url: "vaultcapital.io" },
  { num: "04", title: "Orbita Health",  tag: "Healthtech",         year: "2026", shot: "s4", url: "orbitahealth.com" },
  { num: "05", title: "Figment Studio", tag: "Brand & producto",   year: "2026", shot: "s5", url: "figmentstudio.co" },
];

const shotStyles: Record<string, string> = {
  s1: "linear-gradient(135deg, #EDE6D6 0%, #D6E5F2 50%, #A8C7E6 100%)",
  s2: "linear-gradient(135deg, #FBF8F1 0%, #F5F1E8 50%, #EDE6D6 100%)",
  s3: "linear-gradient(135deg, #1A1A1F 0%, #2E2E36 60%, #6E9BC8 100%)",
  s4: "linear-gradient(135deg, #D6E5F2 0%, #FBF8F1 50%, #A8C7E6 100%)",
  s5: "linear-gradient(135deg, #EDE6D6 0%, #A8C7E6 50%, #1A1A1F 100%)",
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.9, delay, ease: [0.2, 0.7, 0.2, 1] as [number, number, number, number] },
});

export default function Works() {
  const [preview, setPreview] = useState<{ shot: string; url: string } | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [cur, setCur] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const animate = useCallback(() => {
    setCur((c) => ({ x: c.x + (pos.x - c.x) * 0.18, y: c.y + (pos.y - c.y) * 0.18 }));
    rafRef.current = requestAnimationFrame(animate);
  }, [pos]);

  useEffect(() => {
    if (preview && isDesktop) {
      rafRef.current = requestAnimationFrame(animate);
    } else {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    }
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [preview, animate, isDesktop]);

  return (
    <section id="trabajos" className="py-16 md:py-24 pb-24 md:pb-36" style={{ position: "relative" }}>
      <div className="mx-auto px-5 md:px-10" style={{ maxWidth: "var(--maxw)" }}>

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-15 items-end mb-12 md:mb-20">
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2.5" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-ink-dim)" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-sky-deep)", display: "inline-block" }} />
              Trabajos — 04
            </span>
            <h2 style={{ fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif", fontSize: "clamp(36px, 4.6vw, 72px)", lineHeight: 1, letterSpacing: "-0.015em", fontWeight: 400, margin: "18px 0 0" }}>
              Webs que hemos<br /><em style={{ fontStyle: "italic", color: "var(--color-sky-deep)" }}>construido</em>.
            </h2>
          </motion.div>
          <motion.p {...fadeUp(0.08)} style={{ color: "var(--color-ink-dim)", fontSize: 16, lineHeight: 1.6, maxWidth: 380, margin: 0 }}>
            Selección de proyectos web recientes. Pasa el cursor sobre cualquiera para ver una vista previa.
          </motion.p>
        </div>

        {/* List */}
        <motion.div {...fadeUp(0.08)} style={{ borderTop: "1px solid var(--color-line-strong)" }}>
          {works.map((w) => (
            <a
              key={w.num}
              href={`https://${w.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block transition-all duration-300"
              style={{ display: "grid", gridTemplateColumns: "44px 1fr auto", alignItems: "center", gap: 16, padding: "24px 8px", borderBottom: "1px solid var(--color-line)" }}
              onMouseEnter={(e) => {
                if (!isDesktop) return;
                const el = e.currentTarget as HTMLElement;
                el.style.paddingLeft = "28px";
                el.style.background = "var(--color-paper)";
                setPos({ x: e.clientX, y: e.clientY });
                setCur({ x: e.clientX, y: e.clientY });
                setPreview({ shot: w.shot, url: w.url });
              }}
              onMouseMove={(e) => { if (isDesktop) setPos({ x: e.clientX, y: e.clientY }); }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.paddingLeft = "8px";
                el.style.background = "transparent";
                setPreview(null);
              }}
            >
              <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 11, color: "var(--color-ink-faint)", letterSpacing: "0.18em" }}>{w.num}</span>
              <h3
                className="transition-transform duration-300 group-hover:translate-x-2"
                style={{ fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif", fontSize: "clamp(22px, 3.4vw, 52px)", fontWeight: 400, letterSpacing: "-0.015em", lineHeight: 1, margin: 0 }}
              >
                {w.title}
              </h3>
              <div className="flex items-center gap-3">
                <span className="hidden sm:block" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 10, color: "var(--color-ink-2)", background: "var(--color-sky-soft)", padding: "4px 10px", borderRadius: 999, letterSpacing: "0.14em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                  {w.tag}
                </span>
                <span
                  className="grid place-items-center transition-all duration-300 group-hover:rotate-[-45deg] flex-shrink-0"
                  style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid var(--color-line-strong)", color: "var(--color-ink)" }}
                >
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M7 17L17 7M17 7H8M17 7v9" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Floating preview — desktop only */}
      {isDesktop && (
        <div
          className="fixed pointer-events-none z-50 transition-opacity duration-200"
          style={{ left: cur.x, top: cur.y, width: 320, aspectRatio: "4/3", borderRadius: 14, overflow: "hidden", transform: "translate(-50%, -50%)", opacity: preview ? 1 : 0, boxShadow: "0 30px 70px -20px rgba(26,26,31,.45)", border: "1px solid var(--color-line-strong)", background: "var(--color-paper)" }}
        >
          {preview && (
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-1.5 px-3 py-2.5" style={{ background: "var(--color-bone-2)", borderBottom: "1px solid var(--color-line)" }}>
                {[1, 2, 3].map((d) => <span key={d} style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--color-ink-faint)", opacity: 0.5, display: "inline-block" }} />)}
                <span className="ml-2 flex-1 truncate" style={{ fontFamily: "var(--font-jetbrains-mono), monospace", fontSize: 9, color: "var(--color-ink-dim)", letterSpacing: "0.06em" }}>https://{preview.url}</span>
              </div>
              <div className="flex-1" style={{ background: shotStyles[preview.shot] }} />
            </div>
          )}
        </div>
      )}
    </section>
  );
}
