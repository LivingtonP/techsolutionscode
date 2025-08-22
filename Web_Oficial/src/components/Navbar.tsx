import { useEffect, useState } from "react";

const navItems = [
  { title: "Servicios", label: "services", url: "/#services" },
  { title: "Sobre Nosotros", label: "about-us", url: "/#about-us" },
  { title: "Contacto", label: "contact", url: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");

    const callback = (entries: any[]) => {
      entries.forEach(
        (entry: { isIntersecting: any; target: { id: string | null } }) => {
          if (entry.isIntersecting) {
            navLinks.forEach((item) => {
              if (item.getAttribute("aria-label") === entry.target.id) {
                item.classList.add("bg-[#f7d7a9]", "text-black");
              } else {
                item.classList.remove("bg-[#f7d7a9]", "text-black");
              }
            });
          }
        }
      );
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    });

    sections.forEach((section) => observer.observe(section));

    const handleVisibility = () => {
      if (document.visibilityState === "hidden") {
        observer.disconnect();
      } else {
        sections.forEach((section) => observer.observe(section));
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    // Scroll listener para sombreado
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 z-[100000] flex flex-wrap items-center justify-center w-full mx-auto mt-4">
      <nav
        className={`flex w-auto text-sm font-medium rounded-full 
         justify-center items-center transition-all duration-300 
        ${
          scrolled
            ? "shadow-lg ring-1 backdrop-blur bg-white/50 ring-white/10"
            : ""
        }`}
      >
        {navItems.map((link) => (
          <a
            key={link.label}
            className={`relative block px-4 py-2 transition rounded-full 
               hover:bg-[#f7d7a9] font-semibold hover:text-black
              whitespace-nowrap overflow-hidden text-ellipsis
              ${scrolled ? "text-black" : "text-white"}`}
            aria-label={link.label}
            href={link.url}
          >
            {link.title}
          </a>
        ))}
      </nav>
    </header>
  );
}
