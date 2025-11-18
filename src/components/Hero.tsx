import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-connectivity.jpg";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-background relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-orange-500 space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Welcome to <br />
              <span className="glow-text">Geomax Broadband</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Lightning-fast internet services in Akola, Maharashtra.
              <br />
              Connect your home or business today!
            </p>
            <div className="pt-4 flex gap-4">
              <Button
                size="lg"
                className="gradient-secondary shadow-glow hover:shadow-elegant group"
                asChild
              >
                <a href="#contact">
                  Get a Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <a href="#services">
                  Explore Services
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-glow border border-primary/30">
              <img
                src={heroImage}
                alt="Internet Connectivity"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
