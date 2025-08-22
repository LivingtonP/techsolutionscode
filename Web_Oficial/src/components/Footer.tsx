const Footer: React.FC = () => {
  return (
    <footer className="bg-black bg-opacity-35 text-white py-4 text-center">
      <p>
        © {new Date().getFullYear()} TechCode Solutions. Todos los derechos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
