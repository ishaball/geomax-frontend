import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Akola Resident",
    initials: "RS",
    text: "Geomax provided seamless internet for my home in Akola. No downtime during monsoon!",
  },
  {
    name: "Priya Patel",
    role: "Local Business Owner",
    initials: "PP",
    text: "Business-grade speeds at affordable rates. Highly recommend for offices.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background relative overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-foreground mb-12 glow-text">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="shadow-glow border border-primary/20 hover:-translate-y-1 transition-smooth bg-card/80 backdrop-blur-sm"
            >
              <CardContent className="p-8 space-y-6">
                <Quote className="w-10 h-10 text-primary/30" />
                
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h6 className="font-bold text-foreground">{testimonial.name}</h6>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
