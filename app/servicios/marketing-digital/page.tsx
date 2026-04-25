import ServiceLayout from "../../components/ServiceLayout";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth={1.3}>
        <path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" />
      </svg>
    ),
    title: "Paid media con datos en tiempo real",
    desc: "Campañas en Google, Meta y LinkedIn gestionadas con señales de datos propios. Optimización automática de puja, audiencia y creatividades según el CAC objetivo de cada semana.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth={1.3}>
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    title: "Contenido que convierte",
    desc: "Estrategia de contenido alineada con el funnel: artículos, vídeos cortos, newsletters y posts orquestados con IA. Cada pieza tiene un objetivo medible, no solo visibilidad.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth={1.3}>
        <circle cx="12" cy="12" r="10" /><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
      </svg>
    ),
    title: "SEO técnico y autoridad",
    desc: "Auditoría técnica, arquitectura de contenido y link building orientados a captura de demanda orgánica. Posicionamos para keywords con intención de compra, no de descubrimiento.",
  },
];

const steps = [
  { num: "PASO 01", title: "Auditoría de canales", desc: "Analizamos tu mix actual: qué canales existen, qué datos hay disponibles, dónde se pierde el presupuesto y cuál es el CAC real por fuente. Sin suposiciones." },
  { num: "PASO 02", title: "Estrategia y estructura", desc: "Definimos la mezcla óptima de canales, objetivos por etapa del funnel, KPIs semanales y el ritmo de experimentación. Todo queda documentado antes de gastar un euro." },
  { num: "PASO 03", title: "Activación y optimización", desc: "Lanzamos campañas, conectamos el tracking end-to-end y comenzamos la cadencia de tests semanales. Cada decisión está respaldada por datos, no por intuición." },
  { num: "PASO 04", title: "Escala sistemática", desc: "Una vez identificados los canales y creatividades ganadores, escalamos el presupuesto con criterio. El sistema mejora solo mientras el negocio crece." },
];

const metrics = [
  { value: "+158%", label: "Leads cualificados por mes" },
  { value: "−38%", label: "Reducción de CAC promedio" },
  { value: "×3.1", label: "ROAS sobre inversión paid" },
];

export default function MarketingDigital() {
  return (
    <ServiceLayout
      tag="Marketing digital"
      title="Marketing que mueve"
      titleEm="números"
      subtitle="Performance, paid media y contenido orquestado con datos reales. Escalamos canales con criterio, no con presupuesto infinito."
      features={features}
      steps={steps}
      metrics={metrics}
      ctaTitle="Empieza a escalar con {{em}}criterio{{/em}}."
    />
  );
}
