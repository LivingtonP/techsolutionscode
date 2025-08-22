import {
  FaRegCalendarAlt,
  FaStar,
  FaCode,
  FaExclamationCircle,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaRegCalendarAlt size={30} />,
    title: "Análisis de Requerimientos y Consultoría",
    description: [
      "Entrevista con el usuario",
      "Definición de objetivos y alcance",
      "Estudio de factibilidad técnica",
      "Propuesta de soluciones",
    ],
    number: "01",
  },
  {
    icon: <FaStar size={30} />,
    title: "Diseño de Interface",
    description: [
      "Wireframes y mockups",
      "Prototipo interactivo",
      "Diseño responsive",
      "Validación con el cliente",
    ],
    number: "02",
  },
  {
    icon: <FaCode size={30} />,
    title: "Desarrollo",
    description: [
      "Desarrollo ágil con sprints",
      "Código limpio y documentado",
      "Integración continua",
      "Revisiones de código",
    ],
    number: "03",
  },
  {
    icon: <FaExclamationCircle size={30} />,
    title: "Pruebas de Validaciones",
    description: [
      "Pruebas funcionales",
      "Pruebas de rendimiento",
      "Pruebas de seguridad",
      "Pruebas de usabilidad",
      "Pruebas de compatibilidad",
    ],
    number: "04",
  },
];

export default function WorkflowWithArrows() {
  return (
    <section
      id="about-us"
      className="relative bg-cover bg-center bg-fixed py-16"
    >
      {/* Overlay */}
      <div className="absolute inset-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
        <h2 className="text-3xl font-bold mb-4">Nuestro Proceso de Trabajo</h2>
        <p className="mb-10">
          Un enfoque metodológico y profesional para garantizar el éxito de tu
          proyecto tecnológico
        </p>

        <div className="grid grid-cols-2 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-90 text-black rounded-lg p-6 shadow-lg relative"
            >
              {/* Icono */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                {step.icon}
              </div>

              {/* Contenido */}
              <h3 className="font-bold text-lg mb-2 text-center mt-6">
                {step.title}
              </h3>
              <ul className="list-disc ml-5 space-y-1 text-sm">
                {step.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>

              {/* Número */}
              <div className="text-center mt-4 font-bold">{step.number}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
