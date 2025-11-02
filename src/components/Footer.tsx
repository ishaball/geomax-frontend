import { Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary/20 text-white py-12 relative overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-primary/5 blur-3xl"></div>
      <div className="relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h5 className="text-xl font-bold mb-3">Geomax Broadband</h5>
            <p className="text-white/70 leading-relaxed">
              Delivering high-speed, reliable internet services across Akola and Maharashtra.
            </p>
          </div>
          
          <div className="flex items-center justify-start md:justify-end space-x-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-smooth"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-smooth"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © 2025 Geomax Broadband | Designed by Isha Ball
          </p>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
