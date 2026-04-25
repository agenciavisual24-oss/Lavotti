import ServiceLayout from "../../components/ServiceLayout";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth={1.3}>
        <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
    title: "Identidad de marca completa",
    desc: "Logotipo, paleta de color, tipografía, tono de voz y sistema de iconografía. Todo documentado en un brand book que cualquier miembro de tu equipo puede aplicar de forma autónoma.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth={1.3}>
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Diseño web y de producto",
    desc: "Interfaces que convierten: landing pages, dashboards, apps y sitios corporativos diseñados desde el dato. Cada pantalla tiene una hipótesis de conversión antes de ser maquetada.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth={1.3}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Sistema de diseño escalable",
    desc: "Componentes reutilizables, guías de estilo y tokens de diseño que permiten lanzar nuevas páginas y campañas sin volver a empezar desde cero. Diseño como infraestructura.",
  },
];

const steps = [
  { num: "PASO 01", title: "Discovery y posicionamiento", desc: "Entendemos tu mercado, competidores, cliente ideal y propuesta de valor diferencial. Definimos el posicionamiento estratégico antes de diseñar un solo elemento." },
  { num: "PASO 02", title: "Estrategia visual", desc: "Exploramos la dirección creativa: referencias, estado de ánimo, personalidad de marca. Presentamos tres conceptos distintos y refinamos el elegido hasta la aprobación." },
  { num: "PASO 03", title: "Ejecución y sistema", desc: "Desarrollamos todos los activos de marca y los organizamos en un sistema de diseño completo. Entregamos archivos editables, guías y acceso al repositorio de componentes." },
  { num: "PASO 04", title: "Implementación y soporte", desc: "Supervisamos la implementación en web y canales digitales. Los primeros 30 días incluimos ajustes y revisiones para garantizar que la marca funciona en el mundo real." },
];

const metrics = [
  { value: "×4.2", label: "Conversión en landing" },
  { value: "16 sem", label: "De brief a lanzamiento" },
  { value: "100%", label: "Activos entregados" },
];

export default function BrandingDiseno() {
  return (
    <ServiceLayout
      tag="Branding & diseño"
      title="Una marca que comunica tu"
      titleEm="nivel real"
      subtitle="Sistemas de identidad, diseño web y producto para empresas que necesitan que su imagen esté a la altura de lo que ya hacen."
      features={features}
      steps={steps}
      metrics={metrics}
      ctaTitle="Tu marca merece comunicar lo que {{em}}realmente eres{{/em}}."
    />
  );
}
