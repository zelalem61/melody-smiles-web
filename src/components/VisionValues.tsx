import { Card } from "@/components/ui/card";

const VisionValues = () => {
  return (
    <section id="vision" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Vision
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            To transform oral health in our community by making world-class dental care
            accessible.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Our Values
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 h-full">
              <h4 className="text-xl font-semibold mb-2">Integrity</h4>
              <p className="text-muted-foreground">
                We provide honest, transparent dental treatment so you always understand your care.
              </p>
            </Card>

            <Card className="p-6 h-full">
              <h4 className="text-xl font-semibold mb-2">Comfort</h4>
              <p className="text-muted-foreground">
                We make every visit feel safe and relaxed, with a gentle approach at every step.
              </p>
            </Card>

            <Card className="p-6 h-full">
              <h4 className="text-xl font-semibold mb-2">Quality</h4>
              <p className="text-muted-foreground">
                We use modern techniques and up-to-date best practices to ensure excellent results.
              </p>
            </Card>

            <Card className="p-6 h-full">
              <h4 className="text-xl font-semibold mb-2">Trust</h4>
              <p className="text-muted-foreground">
                We build long-lasting relationships through reliability, clarity, and consistent care.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionValues;


