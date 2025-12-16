import doctor from "@/assets/doctor.jpg";
import { Card } from "@/components/ui/card";
import { Award, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet Dr. Tinsae Gebrwold
            </h2>
            <p className="text-xl text-muted-foreground">
              Senior Dental Surgeon & Founder
            </p>
          </div>
          
          {/* Main Content with Doctor Image */}
          <Card className="md:p-2 shadow-[var(--shadow-soft)] border-none bg-card/50 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
              {/* Doctor Image */}
              <div className="w-full md:w-[55%]">
                <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-glow)] bg-muted/40 max-w-xl mx-auto">
                  <img
                    src={doctor}
                    alt="Dr. Tinsae Gebrwold - Senior Dental Surgeon"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-[45%] space-y-6 text-lg text-card-foreground leading-relaxed">
                <p>
                  Dr. Tinsae Gebrwold is a{" "}
                  <span className="font-semibold text-primary">
                    highly skilled and compassionate dental surgeon
                  </span>{" "}
                  dedicated to delivering exceptional dental care with a personal touch.
                  With over ten years of experience, she combines clinical excellence
                  with genuine empathy for patients.
                </p>

                <p>
                  Her friendly approach helps patients feel comfortable, while her
                  precision and modern digital dental techniques ensure{" "}
                  <span className="font-semibold">safe, accurate, and beautiful results.</span>
                </p>

                <p>
                  Beyond dentistry, Dr. Tinsae finds joy in her faith, family, and
                  continuous learning values that inspire her gentle, professional care
                  for every patient she serves.
                </p>

                <p>
                  We create a{" "}
                  <span className="font-semibold text-primary">
                    welcoming environment
                  </span>{" "}
                  where smiles are restored, confidence is renewed, and every visit
                  feels positive.
                </p>

              </div>
            </div>

            {/* Stats/Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 rounded-xl bg-accent/30">
                <Award className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">10+ Years</h3>
                <p className="text-sm text-muted-foreground">
                  Professional Experience
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-accent/30">
                <Heart className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">
                  Patient-Centered
                </h3>
                <p className="text-sm text-muted-foreground">
                  Compassionate Care
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-accent/30">
                <Users className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Trusted</h3>
                <p className="text-sm text-muted-foreground">
                  By Hundreds of Patients
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
