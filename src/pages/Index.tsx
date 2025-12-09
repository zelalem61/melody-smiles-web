import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VisionValues from "@/components/VisionValues";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="home">
        <Hero />
        <About />
        <VisionValues />
        <Gallery />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
