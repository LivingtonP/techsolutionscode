const servicesData: ServiceCardProps[] = [
  {
    title: "Desarrollo de Sistemas Webs",
    description: [
      "Páginas Webs",
      "Aplicaciones Web Personalizadas",
      "E-commerce",
    ],
    image: "/img/tech1.webp",
  },
  {
    title: "Desarrollo de Aplicaciones Móviles",
    description: [
      "Apps Nativas",
      "Apps Híbridas multiplataforma",
      "Mantenimiento y Actualizaciones",
    ],
    image: "/img/tech2.webp",
  },
  {
    title: "Soluciones Tecnológicas Integrales",
    description: [
      "Consultoría Digital",
      "Integración de Sistemas y APIs",
      "Automatización de Procesos",
      "Soporte Técnico",
    ],
    image: "/img/tech3.webp",
  },
];

interface ServiceCardProps {
  title: string;
  description: string[];
  image: string;
}

const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
  return (
    <div className="relative h-auto rounded-xl shadow-lg flex items-center justify-center bg-[#f9e1be8a]">
      {/* Capa semitransparente si se desea */}
      <div className="relative w-full h-full flex flex-col p-4 md:p-8 mt-2">
        <h3 className="text-lg md:text-xl font-bold mb-3 text-left">{title}</h3>
        <ul className="list-disc list-inside space-y-1 text-base md:text-lg break-words z-10">
          {description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      {/* Imagen pequeña en la esquina inferior derecha */}
      <img
        src={image}
        alt={title}
        className="absolute -right-2 -bottom-7 w-40 h-40 object-contain opacity-50 rounded-lg"
        style={{ pointerEvents: "none" }}
        loading="eager"
      />
    </div>
  );
};

const Services = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-10 text-balance ">
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#fac06ee9]">
          Nuestros Servicios
        </h2>
        <label className="text-lg md:text-xl text-gray-200">
          Explora nuestros servicios y descubre cómo podemos ayudarte a alcanzar
          tus objetivos, con un enfoque en la innovación y eficiencia.
        </label>
      </div>
      {/* Primera fila: dos tarjetas */}
      <div className="flex flex-wrap justify-center gap-8 mb-8 ">
        {servicesData.slice(0, 2).map((service, idx) => (
          <div
            className="border-4 border-x-yellow-700/80 border-y-0 w-full md:w-1/2 max-w-md rounded-2xl hover:scale-105 transition-all shadow-2xl text-base md:text-lg"
            key={idx}
          >
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
      {/* Segunda fila: una tarjeta centrada */}
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 max-w-md border-4 border-x-yellow-700/80 border-y-0 rounded-2xl hover:scale-105 transition-all shadow-2xl">
          <ServiceCard {...servicesData[2]} />
        </div>
      </div>
    </div>
  );
};

export default Services;
