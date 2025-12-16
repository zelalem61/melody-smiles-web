import doctor from "@/assets/doctor.jpg";
import land1 from "@/assets/land1.jpg";
import land3 from "@/assets/land3.jpg";
import land4 from "@/assets/land4.jpg";
import land5 from "@/assets/land5.jpg";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  const galleryImages = [
    {
      src: land1,
      alt: "Dental Clinic",
    },
    {
      src: doctor,
      alt: "Reception Area",
    },
    {
      src: land3,
      alt: "Dental Room",
    },
    {
      src: land4,
      alt: "Dental Room",
    },
    {
      src: land5,
      alt: "Dentist",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Clinic
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a virtual tour of our modern, welcoming dental facility
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-2 border-none bg-card/50 backdrop-blur-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

