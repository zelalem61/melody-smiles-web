import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { API_URL } from "@/lib/api-config";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "contact",
          ...formData,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Unable to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Schedule your appointment or reach out with any questions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-8 border-none shadow-[var(--shadow-soft)] bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                    <a href="tel:+251922007800" className="text-muted-foreground hover:text-primary transition-colors block">
                      +251 922 007 800
                    </a>
                    <a href="tel:+251913089135" className="text-muted-foreground hover:text-primary transition-colors block">
                      +251 913 089 135
                    </a>
                    <a href="tel:+251777060700" className="text-muted-foreground hover:text-primary transition-colors block">
                      +251 777 060 700
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">WhatsApp</h4>
                    <a 
                      href="https://wa.me/251777060700" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors block"
                    >
                      +251 777 060 700
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Email</h4>
                    <a href="mailto:Melodydental4kilo@gmail.com" className="text-muted-foreground hover:text-primary transition-colors block">
                    Melodydental4kilo@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Location</h4>
                    <a 
                      href="https://www.google.com/maps?q=9.035000,38.758778" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      4 Kilo, Addis Ababa
                    </a>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button 
                    className="w-full"
                    asChild
                  >
                    <a 
                      href="https://t.me/Melodydent" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Send className="mr-2" />
                      Join our Telegram Community
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="p-8 border-none shadow-[var(--shadow-soft)] bg-card/50 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Send us a Message</h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+251 xxx xxx xxx"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us how we can help you..."
                  rows={5}
                />
              </div>
              
              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                <Send className="mr-2" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          {/* Map */}
          <div className="lg:col-span-2">
            <Card className="p-2 border-none shadow-[var(--shadow-soft)] overflow-hidden bg-card/50 backdrop-blur-sm">
              <iframe
                src="https://www.google.com/maps?q=9.035000,38.758778&z=17&output=embed"
                width="100%"
                height="340"
                style={{ border: 0, borderRadius: '0.5rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Melody Special Dental Clinic Location"
              />
              {/* Mobile-only directions button (only for screens < 570px) */}
              <div className="p-4 pt-2 block xs:hidden">
                <Button
                  variant="outline"
                  className="w-full"
                  asChild
                >
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=9.035000,38.758778"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
