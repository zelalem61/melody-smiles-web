import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-dental.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src={logo} 
              alt="Melody Special Dental Clinic" 
              className="h-32 md:h-40 drop-shadow-2xl"
            />
          </div>
          
          {/* Tagline */}
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 drop-shadow-lg">
            Restoring Smiles.<br />Renewing Confidence.
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/95 mb-12 font-light drop-shadow-md">
            Expert dental care with a personal touch in Addis Ababa
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Appointment
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="tel:+251922007800">
                <Phone className="mr-2" />
                Call Now
              </a>
            </Button>
          </div>
          
          {/* Quick Contacts */}
          <div className="bg-background/95 backdrop-blur-md rounded-2xl p-6 shadow-[var(--shadow-glow)] max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <Phone className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <a href="tel:+251922007800" className="text-muted-foreground hover:text-primary transition-colors">
                    +251 922 007 800
                  </a>
                  <br />
                  <a href="tel:+251913089135" className="text-muted-foreground hover:text-primary transition-colors">
                    +251 913 089 135
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <a 
                    href="https://maps.google.com/?q=4+Kilo+Addis+Ababa" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    4 Kilo, Addis Ababa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5" />
    </section>
  );
};

export default Hero;
