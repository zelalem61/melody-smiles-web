import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    // Client-side validation before Web3Forms submission
    if (!formData.name || !formData.email || !formData.message) {
      e.preventDefault();
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Form will submit to Web3Forms automatically
    // We don't reset the form as the page will redirect
    toast.success("Submitting your message...");
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
                      href="https://maps.google.com/?q=4+Kilo+Addis+Ababa" 
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
            
            {/* Map */}
            <Card className="p-2 border-none shadow-[var(--shadow-soft)] overflow-hidden bg-card/50 backdrop-blur-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3193089!2d38.7577!3d9.0320!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDEnNTUuMiJOIDM4wrA0NScy3.7LjQiRQ!5e0!3m2!1sen!2set!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '0.5rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Melody Special Dental Clinic Location"
              />
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="p-8 border-none shadow-[var(--shadow-soft)] bg-card/50 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Send us a Message</h3>
            
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="5aa7972c-57b1-469f-9690-6746e2bed6c3" />
              <input type="hidden" name="from_name" value="Melody Dental Clinic" />
              <input type="hidden" name="subject" value="New Contact Form Submission" />
              <input type="hidden" name="redirect" value="https://web3forms.com/success" />
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
              
              <Button type="submit" className="w-full" size="lg">
                <Send className="mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
