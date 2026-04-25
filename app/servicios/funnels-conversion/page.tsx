import ServiceLayout from "../../components/ServiceLayout";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth={1.3}>
        <path d="M4 19h16M4 19V9l5-3 5 3 5-3v13" /><path d="M9 19v-6M14 19v-6" />
      </svg>
    ),
    title: "Landing pages de alta conversión",
    desc: "Diseñamos y desarrollamos landings con jerarquía visual basada en datos de eyetracking, copy orientado a beneficios y CTAs que eliminan la fricción en cada punto de decisión.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth={1.3}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    title: "Experimentación CRO continua",
    desc: "Tests A/B semanales sobre cohortes reales. Probamos titulares, estructuras de página, formularios y flujos de checkout. Cada test tiene hipótesis, métricas de éxito y aprendizaje documentado.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth={1.3}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Funnels multicanal automatizados",
    desc: "Email sequences, retargeting inteligente y flujos de nurturing que acompañan al lead desde el primer clic hasta el cierre. CAC, LTV y CR monitorizados en tiempo real.",
  },
];

const steps = [
  { num: "PASO 01", title: "Auditoría del funnel actual", desc: "Analizamos cada etapa: dónde entran los usuarios, dónde se caen y por qué. Identificamos los tres cuellos de botella con mayor impacto potencial en ingresos." },
  { num: "PASO 02", title: "Diseño y construcción", desc: "Rediseñamos las páginas y flujos identificados. Copy, diseño y desarrollo van a la par. Entregamos en sprints de una semana para poder empezar a probar cuanto antes." },
  { num: "PASO 03", title: "Tests y aprendizaje", desc: "Lanzamos tests con suficiente tráfico para alcanzar significancia estadística. Sin declarar ganadores prematuros. Cada iteración nos da más datos para la siguiente." },
  { num: "PASO 04", title: "Optimización perpetua", desc: "La conversión no es un proyecto, es un proceso. Mantenemos una cadencia de tests mensual con reporting completo y recomendaciones accionables para tu equipo." },
];

const metrics = [
  { value: "×3.8", label: "Mejora de conversión media" },
  { value: "−42%", label: "Reducción de CAC" },
  { value: "4 sem", label: "Primera mejora medible" },
];

export default function FunnelsConversion() {
  return (
    <ServiceLayout
      tag="Funnels & conversión"
      title="Más ventas con el mismo"
      titleEm="tráfico"
      subtitle="Embudos, landings y experimentación continua para mover la aguja en conversión. Cada test tiene hipótesis, cada resultado tiene aprendizaje."
      features={features}
      steps={steps}
      metrics={metrics}
      ctaTitle="Convierte más sin gastar {{em}}más{{/em}}."
    />
  );
}
