import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center relative"
    >
      <div>
        <img
          src="/img/hero-tech.png"
          alt="Fondo logo techcode"
          className="absolute left-1/2 top-1/2 w-80 h-80 opacity-25 -translate-x-1/2 -translate-y-1/2 object-contain"
        />
      </div>

      <div className="relative max-w-3xl px-4 sm:mt-20">
        <h1 className="font-changa flex flex-col text-4xl md:text-7xl text-gray-100">
          ¡Bienvenidos a{" "}
          <span className="text-[#f7d7a9] font-carter mt-4">
            TechCode Solutions!
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 my-14">
          Desarrollo de software y soluciones tecnológicas.
        </p>
        <div className="relative inline-block mt-4">
          <div className="hover:scale-105 transition-transform duration-300">
            <a
              href="#contact"
              className="shadow-lg px-8 py-4 rounded-2xl font-semibold text-gray-100 bg-[#07527abf] border-gray-400 border transition-all text-md md:text-lg"
              style={{ position: "relative", zIndex: 1 }}
            >
              Haz tu cotización
            </a>
          </div>
          <span
            className="absolute -top-6 -right-8 bg-[#c74646] text-white px-4 py-1 rounded-full font-bold text-sm sm:text-md shadow-lg animate-scale-rotate-pulse"
            style={{
              zIndex: 2,
              pointerEvents: "none",
            }}
          >
            ¡GRATIS!
          </span>
        </div>

        <div className="flex justify-center gap-6 mt-16 text-white text-3xl">
          <a
            className="hover:text-[#f7d7a9] hover:scale-125 transition-transform"
            href="https://www.facebook.com/profile.php?id=61578264547309"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            className="hover:text-[#f7d7a9] hover:scale-125 transition-transform"
            href="https://www.instagram.com/techcode.solutions/"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            className="hover:text-[#f7d7a9] hover:scale-125 transition-transform"
            href="https://www.tiktok.com/@techcode.solutions?_t=ZM-8y5lrZ6wHfM&_r=1"
            target="_blank"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
