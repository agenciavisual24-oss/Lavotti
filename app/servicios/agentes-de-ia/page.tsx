import ServiceLayout from "../../components/ServiceLayout";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth={1.3}>
        <circle cx="12" cy="12" r="3" /><path d="M12 5v3M12 16v3M5 12h3M16 12h3M7 7l2 2M15 15l2 2M7 17l2-2M15 9l2-2" />
      </svg>
    ),
    title: "Agentes de ventas autónomos",
    desc: "Califican leads, responden objeciones, agendan reuniones y alimentan el CRM en tiempo real, sin intervención humana. Trabajan 24/7 con el mismo criterio que tu mejor comercial.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth={1.3}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Soporte tier-1 inteligente",
    desc: "Resuelven el 80% de las consultas sin escalar. Cuando no pueden, transfieren a humanos con contexto completo. Integración nativa con Slack, Intercom, WhatsApp y Notion.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth={1.3}>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Workflows y automatización de ops",
    desc: "Conectamos tus herramientas (CRM, ERP, bases de datos) y automatizamos procesos repetitivos. Desde onboarding de clientes hasta generación de informes semanales.",
  },
];

const steps = [
  { num: "PASO 01", title: "Auditoría de operaciones", desc: "Mapeamos cada proceso manual: dónde se pierde tiempo, qué datos existen, qué sistemas ya usas. En una semana tienes un diagnóstico con el ROI estimado de cada automatización." },
  { num: "PASO 02", title: "Arquitectura del agente", desc: "Diseñamos la lógica: flujos de decisión, escalado a humanos, tono de comunicación, integraciones necesarias. Nada se construye sin un blueprint aprobado." },
  { num: "PASO 03", title: "Entrenamiento y despliegue", desc: "Entrenamos el agente con datos reales de tu negocio. Iteramos en staging hasta que supera a un humano promedio en velocidad y precisión. Luego lo desplegamos." },
  { num: "PASO 04", title: "Optimización continua", desc: "Monitorizamos métricas semanales: tasa de resolución, tiempo de respuesta, satisfacción. El agente mejora solo a medida que acumula más interacciones." },
];

const metrics = [
  { value: "+312%", label: "ROI promedio en 6 meses" },
  { value: "−74%", label: "Tiempo de respuesta soporte" },
  { value: "3 sem", label: "Tiempo hasta producción" },
];

export default function AgentesDeIA() {
  return (
    <ServiceLayout
      tag="Agentes de IA"
      title="Automatiza lo que te"
      titleEm="frena"
      subtitle="Construimos agentes autónomos que cierran ventas, resuelven soporte y operan flujos completos de negocio, sin que tu equipo tenga que intervenir."
      features={features}
      steps={steps}
      metrics={metrics}
      ctaTitle="¿Listo para escalar sin {{em}}contratar{{/em}} más?"
    />
  );
}
