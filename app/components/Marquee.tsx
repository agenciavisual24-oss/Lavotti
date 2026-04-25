const logos = [
  { name: "Osteria Da Gianni", src: "/logo-osteria",    height: 38 },
  { name: "Trigas Europa",     src: "/logo-trigas.png", height: 34 },
  { name: "800 Ventana",       src: "/logo-800ventana", height: 44 },
  { name: "Votti Studio",      src: "/logo-votti",      height: 28 },
  { name: "Chrysos",           src: "/logo-Chrysos",    height: 72 },
  { name: "GreenCloud",        src: "/logo-greenCloud.png", height: 72 },
];

export default function Marquee() {
  const track = [...logos, ...logos, ...logos, ...logos];

  return (
    <section
      style={{
        padding: "60px 0",
        borderTop: "1px solid var(--color-line)",
        borderBottom: "1px solid var(--color-line)",
        overflow: "hidden",
        background: "var(--color-paper)",
      }}
    >
      <div
        className="text-center mb-8"
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--color-ink-faint)",
        }}
      >
        Estudios y compañías que han confiado en Lovatti
      </div>
      <div className="overflow-hidden">
        <div
          className="flex items-center gap-16 animate-marquee"
          style={{ width: "max-content" }}
        >
          {track.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.name}
              style={{
                height: logo.height ?? 36,
                width: "auto",
                maxWidth: 160,
                objectFit: "contain",
                opacity: 0.45,
                flexShrink: 0,
                filter: "brightness(0)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
