export default function Marquee() {
  const brands = [
    "Norda Systems",
    "·",
    "Helix Atelier",
    "·",
    "Vault Capital",
    "·",
    "Orbita Health",
    "·",
    "Figment Studio",
    "·",
    "Marina & Co.",
    "·",
  ];

  // Duplicate for seamless loop
  const track = [...brands, ...brands];

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
          className="flex gap-20 animate-marquee"
          style={{ width: "max-content" }}
        >
          {track.map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily:
                  "var(--font-instrument-serif), ui-serif, Georgia, serif",
                fontSize: 28,
                color: "var(--color-ink-2)",
                letterSpacing: "0.02em",
                whiteSpace: "nowrap",
                opacity: 0.7,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
