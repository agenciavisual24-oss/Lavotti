"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLink = (section: string) => isHome ? `#${section}` : `/#${section}`;
  const textColor = (!isHome && !scrolled) ? "var(--color-paper)" : "var(--color-ink-2)";
  const logoColor = (!isHome && !scrolled) ? "var(--color-paper)" : "var(--color-ink)";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-300"
      style={
        scrolled
          ? { background: "rgba(245,241,232,0.78)", backdropFilter: "blur(14px) saturate(140%)", borderBottom: "1px solid rgba(26,26,31,0.10)", paddingTop: "14px", paddingBottom: "14px" }
          : undefined
      }
    >
      <div className="flex items-center justify-between gap-4 mx-auto px-5 md:px-10" style={{ maxWidth: "var(--maxw)" }}>
        <a
          href="/"
          className="flex items-center gap-3"
          style={{ fontFamily: "var(--font-instrument-serif), ui-serif, Georgia, serif", fontSize: "24px", fontWeight: 400, letterSpacing: "-0.01em", color: logoColor }}
        >
          <span className="relative" style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--color-ink)", display: "inline-block" }}>
            <span className="absolute" style={{ inset: 6, borderRadius: "50%", background: "var(--color-sky)" }} />
          </span>
          Lovatti
        </a>

        <div className="hidden md:flex gap-9">
          {["servicios", "proceso", "casos", "trabajos", "sobre"].map((s) => (
            <a
              key={s}
              href={navLink(s)}
              className="capitalize text-sm transition-all duration-200 relative group"
              style={{ color: textColor }}
            >
              {s === "sobre" ? "Estudio" : s.charAt(0).toUpperCase() + s.slice(1)}
              <span className="absolute left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{ bottom: -4, background: "var(--color-ink)" }} />
            </a>
          ))}
        </div>

        <a
          href="https://calendar.app.google/onsZbjUXmqQJexZZ8"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-px"
          style={{ background: "var(--color-ink)", color: "var(--color-paper)", padding: "10px 18px" }}
        >
          <span className="hidden lg:inline">Agenda una llamada</span>
          <span className="lg:hidden">Agendar</span>
          <span>→</span>
        </a>
      </div>
    </nav>
  );
}
