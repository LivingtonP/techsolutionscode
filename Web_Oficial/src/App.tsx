import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
//import AboutUs from "./sections/About-us";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/Particles";
import Timeline from "./components/Timeline";
//import Carousel3D from "./components/Carrousel";
import SectionContainer from "./components/SectionContainer";

const App: React.FC = () => {
  return (
    <>
      <div className="relative bg-black bg-opacity-65">
        {/* Fondo fijo con partículas */}
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <ParticlesBackground />
        </div>

        {/* Contenido */}
        <div className="">
          <Navbar />
          <SectionContainer className="mb-20">
            <Hero />
          </SectionContainer>
          <SectionContainer id="services" className="mb-40">
            <Services />
          </SectionContainer>
          <SectionContainer id="about-us" className="mb-10">
            <Timeline animationOrder="simultaneous" revealAnimation="none" />
          </SectionContainer>
          {/* <Carousel3D
          items={[
            {
              id: 1,
              title: "Item 1",
              brand: "dsad",
              description: "/images/item1.jpg",
              tags: ["React", "TypeScript"],
              imageUrl: "/images/item1.jpg",
              link: "aaa",
            },
            
          ]}
        /> 
        <AboutUs />*/}
          <SectionContainer id="contact" className="mb-32">
            <Contact />
          </SectionContainer>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
