import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VisionValues from "@/components/VisionValues";
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
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
