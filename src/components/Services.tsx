import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import residentialImg from "@/assets/residential-service.jpg";
import educationImg from "@/assets/education-service.jpg";
import fiberImg from "@/assets/fiber-internet.jpg";
import airportImg from "@/assets/airport-service.jpg";
import readylinkImg from "@/assets/readylink-service.jpg";
import tataImg from "@/assets/tata-service.jpg";
import hathwayImg from "@/assets/hathway-service.jpg";
import allianceImg from "@/assets/alliance-service.jpg";

const services = [
  {
    title: "Internet Service Provider For Residential",
    description: "Reliable, high-speed internet for your home, ensuring smooth browsing and streaming.",
    image: residentialImg,
  },
  {
    title: "Internet Service Providers For Educational Zone",
    description: "High-performance internet solutions designed for schools, colleges, and institutions.",
    image: educationImg,
  },
  {
    title: "Internet Service Providers For Tech Hub",
    description: "Superfast and secure connectivity solutions for tech parks and innovation hubs.",
    image: fiberImg,
  },
  {
    title: "Internet Service Providers For Airport Area",
    description: "Seamless, high-speed connectivity for airport regions and surrounding businesses.",
    image: airportImg,
  },
  {
    title: "Readylink Internet Service Providers",
    description: "Reliable leased line solutions offering consistent performance for enterprises.",
    image: readylinkImg,
  },
  {
    title: "Tata Internet Service Providers",
    description: "Enterprise-grade connectivity with robust infrastructure and 24/7 support.",
    image: tataImg,
  },
  {
    title: "Hathway Internet Service Providers",
    description: "Fast and affordable broadband plans for residential and business users alike.",
    image: hathwayImg,
  },
  {
    title: "Alliance Internet Service Providers",
    description: "Premium leased line connectivity tailored for corporate and institutional use.",
    image: allianceImg,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 gradient-dark relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 glow-text">
            Our Internet Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive internet solutions tailored for every need
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:-translate-y-2 transition-smooth shadow-glow hover:shadow-elegant border border-primary/20 overflow-hidden bg-card/80 backdrop-blur-sm"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
              </div>
              <CardContent className="p-5 space-y-4">
                <h5 className="font-bold text-foreground leading-snug min-h-[3rem]">
                  {service.title}
                </h5>
                <p className="text-sm text-muted-foreground min-h-[4rem]">
                  {service.description}
                </p>
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 text-xs">
                    Request Price
                  </Button>
                  <Button size="sm" className="flex-1 text-xs">
                    Enquire Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
