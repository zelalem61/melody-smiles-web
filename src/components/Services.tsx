import { Card } from "@/components/ui/card";
import { Sparkles, Smile, Stethoscope, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Cosmetic Dentistry",
      items: ["Veneer", "Bleaching"],
      description: "Enhance your smile with our aesthetic treatments"
    },
    {
      icon: Smile,
      title: "Orthodontic Treatment",
      items: ["Invisalign", "Fixed Brace (Ceramic)", "Fixed Brace (Metal)"],
      description: "Straighten your teeth with modern orthodontic solutions"
    },
    {
      icon: Stethoscope,
      title: "General Dentistry",
      items: ["Cleaning", "Filling", "Root Canal Treatment"],
      description: "Comprehensive care for your dental health"
    },
    {
      icon: Zap,
      title: "Artificial Tooth",
      items: ["Zirconia", "E-Max", "Ceramic"],
      description: "Premium dental restorations for natural-looking results"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive dental care tailored to your needs
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="p-8 hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-2 border-none bg-card/50 backdrop-blur-sm"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li 
                        key={idx}
                        className="text-sm text-card-foreground font-medium"
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
        
        {/* Dental Implants - Featured Service */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-[var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)] border-none">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Dental Implants</h3>
              <p className="text-lg text-primary-foreground/90">
                Advanced implant solutions for missing teeth. Restore your smile with permanent, natural-looking dental implants that function just like your natural teeth.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
