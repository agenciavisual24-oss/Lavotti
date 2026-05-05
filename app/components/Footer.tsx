"use client";

export default function Footer() {
  const cols = [
    {
      title: "Servicios",
      links: [
        { label: "Agentes de IA",   href: "#servicios" },
        { label: "Marketing",       href: "#servicios" },
        { label: "Branding",        href: "#servicios" },
        { label: "Funnels & CRO",   href: "#servicios" },
      ],
    },
    {
      title: "Estudio",
      links: [
        { label: "El estudio",  href: "#sobre" },
        { label: "Casos",       href: "#casos" },
        { label: "Manifiesto",  href: "#" },
        { label: "Carreras",    href: "#" },
      ],
    },
    {
      title: "Contacto",
      links: [
        { label: "Lovatti.agency@gmail.com",      href: "mailto:Lovatti.agency@gmail.com" },
        { label: "Agenda una llamada",   href: "#contacto" },
        { label: "Madrid · CDMX",        href: "#" },
      ],
    },
  ];

  return (
    <footer
      style={{
        padding: "80px 0 40px",
        background: "var(--color-bone)",
        borderTop: "1px solid var(--color-line)",
      }}
    >
      <div className="mx-auto px-5 md:px-10" style={{ maxWidth: "var(--maxw)" }}>
        <div
          className="mb-12 grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 md:gap-12"
        >
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a
              href="#top"
              className="inline-flex items-center gap-2.5"
              style={{ textDecoration: "none" }}
            >
              <img
                src="/Logo-Lovatti-sin-texto.png"
                alt=""
                aria-hidden="true"
                style={{ height: 44, width: "auto", display: "block", filter: "brightness(0)" }}
              />
              <img
                src="/Logo-Lovatti-con-letra.png"
                alt="Lovatti Studio"
                style={{ height: 22, width: "auto", display: "block", filter: "brightness(0)" }}
              />
            </a>
            <p
              style={{
                color: "var(--color-ink-dim)",
                fontSize: 14,
                lineHeight: 1.65,
                margin: "18px 0 0",
                maxWidth: 280,
              }}
            >
              Estudio de automatización con IA, marketing y branding para
              empresas que escalan con elegancia.
            </p>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <h5
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-ink-faint)",
                  margin: "0 0 18px",
                  fontWeight: 500,
                }}
              >
                {col.title}
              </h5>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "grid",
                  gap: 12,
                }}
              >
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="transition-colors duration-200"
                      style={{ fontSize: 14, color: "var(--color-ink-2)" }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          "var(--color-ink)")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          "var(--color-ink-2)")
                      }
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          className="flex justify-between items-center flex-wrap gap-4 pt-8"
          style={{ borderTop: "1px solid var(--color-line)" }}
        >
          <span
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-ink-faint)",
            }}
          >
            © 2026 Lovatti Studio
          </span>
          <div className="flex gap-2">
            {/* X */}
            <SocBtn href="#" label="X">
              <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor">
                <path d="M18.244 2H21.5l-7.5 8.6L23 22h-6.844l-5.355-7.01L4.6 22H1.34l8.04-9.205L1 2h7.018l4.84 6.4L18.244 2zm-2.4 18h1.84L7.24 4h-1.96L15.844 20z" />
              </svg>
            </SocBtn>
            {/* LinkedIn */}
            <SocBtn href="#" label="LinkedIn">
              <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34v-7.5H5.67v7.5h2.67zM7 9.67a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 8.67v-4.1c0-2.13-1.13-3.13-2.66-3.13-1.23 0-1.78.67-2.09 1.13v-.97H10.92c.04.75 0 7.5 0 7.5h2.67v-4.18c0-.24.02-.48.09-.65.19-.48.63-.97 1.36-.97.97 0 1.36.74 1.36 1.83v3.97h2.67z" />
              </svg>
            </SocBtn>
            {/* Instagram */}
            <SocBtn href="#" label="Instagram">
              <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.8c-3.15 0-3.5.01-4.74.07-1.07.05-1.65.23-2.04.38-.51.2-.88.44-1.26.82-.39.39-.62.75-.82 1.26-.15.39-.33.97-.38 2.04-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.05 1.07.23 1.65.38 2.04.2.51.44.88.82 1.26.39.39.75.62 1.26.82.39.15.97.33 2.04.38 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.07-.05 1.65-.23 2.04-.38.51-.2.88-.44 1.26-.82.39-.39.62-.75.82-1.26.15-.39.33-.97.38-2.04.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.07-.23-1.65-.38-2.04-.2-.51-.44-.88-.82-1.26a3.4 3.4 0 0 0-1.26-.82c-.39-.15-.97-.33-2.04-.38C15.5 3.97 15.15 3.96 12 3.96zm0 3.05a4.99 4.99 0 1 1 0 9.98 4.99 4.99 0 0 1 0-9.98zm0 1.8a3.19 3.19 0 1 0 0 6.38 3.19 3.19 0 0 0 0-6.38zm5.2-2.1a1.17 1.17 0 1 1 0 2.34 1.17 1.17 0 0 1 0-2.34z" />
              </svg>
            </SocBtn>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocBtn({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid place-items-center transition-all duration-200"
      style={{
        width: 38,
        height: 38,
        borderRadius: "50%",
        border: "1px solid var(--color-line-strong)",
        color: "var(--color-ink-2)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "var(--color-ink)";
        el.style.color = "var(--color-paper)";
        el.style.borderColor = "var(--color-ink)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "transparent";
        el.style.color = "var(--color-ink-2)";
        el.style.borderColor = "var(--color-line-strong)";
      }}
    >
      {children}
    </a>
  );
}
