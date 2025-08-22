import { useState } from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    descripcion: "",
  });
  const [errors, setErrors] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    descripcion: "",
  });

  const validate = () => {
    const newErrors: any = {};
    if (!form.nombre.trim()) newErrors.nombre = "El nombre es obligatorio.";
    if (!form.email.trim()) {
      newErrors.email = "El email es obligatorio.";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      newErrors.email = "El email no es válido.";
    }
    if (!form.telefono.trim()) {
      newErrors.telefono = "El teléfono es obligatorio.";
    } else if (!/^\d{9,10}$/.test(form.telefono)) {
      newErrors.telefono = "El teléfono debe tener 9 o 10 dígitos.";
    }
    if (!form.servicio.trim())
      newErrors.servicio = "El servicio es obligatorio.";
    if (!form.descripcion.trim())
      newErrors.descripcion = "La descripción es obligatoria.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleWhatsApp = () => {
    if (!validate()) return;
    const mensaje = `Hola, soy ${form.nombre}.\nEmail: ${form.email}\nTeléfono: ${form.telefono}\nServicio: ${form.servicio}\nDescripción: ${form.descripcion}`;
    const url = `https://wa.me/593960077895?text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-[#fac06ee9]">
          CONTÁCTANOS
        </h2>
        <p className="mb-10 text-lg md:text-xl text-gray-200 text-balance">
          ¿Listo para llevar tu idea al siguiente nivel? Estamos listos para
          ayudarte.
        </p>
      </div>
      <div className="relative max-w-6xl sm:mx-4 text-center z-10 m-2">
        <div className="grid md:grid-cols-2 gap-16 bg-[#fff1d482] rounded-lg shadow-md p-10">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden rounded-lg z-0">
            <img
              src="/img/logotech.webp"
              alt="Fondo"
              className="opacity-15 max-w-[80%] max-h-[80%] object-contain"
            />
          </div>
          {/* Formulario */}
          <div className="space-y-4 text-left flex flex-col justify-center relative z-10">
            <h3 className="font-semibold text-xl">Envíanos tu cotización</h3>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre y apellido"
              value={form.nombre}
              onChange={handleChange}
              className={`focus:border-yellow-600 focus:outline-hidden w-full p-2 rounded-lg border ${
                errors.nombre ? "border-red-500" : "border-gray-300"
              } focus:ring focus:ring-blue-200`}
            />
            {errors.nombre && (
              <p className="text-red-500 text-sm">{errors.nombre}</p>
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className={`focus:border-yellow-600 focus:outline-hidden w-full p-2 rounded-lg border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:ring focus:ring-blue-200`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              value={form.telefono}
              onChange={handleChange}
              className={`focus:border-yellow-600 focus:outline-hidden w-full p-2 rounded-lg border ${
                errors.telefono ? "border-red-500" : "border-gray-300"
              } focus:ring focus:ring-blue-200`}
            />
            {errors.telefono && (
              <p className="text-red-500 text-sm">{errors.telefono}</p>
            )}
            <input
              type="text"
              name="servicio"
              placeholder="Tipo de servicio de interés"
              value={form.servicio}
              onChange={handleChange}
              className={`focus:border-yellow-600 focus:outline-hidden w-full p-2 rounded-lg border ${
                errors.servicio ? "border-red-500" : "border-gray-300"
              } focus:ring focus:ring-blue-200`}
            />
            {errors.servicio && (
              <p className="text-red-500 text-sm">{errors.servicio}</p>
            )}
            <textarea
              name="descripcion"
              placeholder="Descripción del proyecto"
              rows={4}
              value={form.descripcion}
              onChange={handleChange}
              className={`w-full p-2 rounded-lg border ${
                errors.descripcion ? "border-red-500" : "border-gray-300"
              } focus:ring focus:ring-blue-200`}
            />
            {errors.descripcion && (
              <p className="text-red-500 text-sm">{errors.descripcion}</p>
            )}
            <button
              onClick={handleWhatsApp}
              className="bg-green-500 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-green-600 transition"
            >
              Enviar a WhatsApp
            </button>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-4 text-left ">
            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-[#f7d7a9]" />
              <div>
                <h4 className="font-bold">HORARIOS DE ATENCIÓN:</h4>
                <p>
                  LUNES A VIERNES: <br /> 9:00 am - 18:00 pm
                  <br />
                  SÁBADOS: <br /> 9:00 am - 13:00 pm
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-[#f7d7a9]" />
              <p>
                Estamos ubicados en: <br />
                <span className="font-semibold">Santa Elena, Ecuador</span>
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-6 h-6 text-[#f7d7a9]" />
              <p>
                Teléfono: <br />
                <span className="font-semibold">0960077895</span>
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-6 h-6 text-[#f7d7a9]" />
              <p>
                Correo: <br />
                <span className="font-semibold">
                  techcodesolutions03@gmail.com
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
