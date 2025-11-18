import { Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 border-t border-orange-500/20 text-white py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          
          {/* Left */}
          <div>
            <h5 className="text-2xl font-bold text-orange-400 mb-3 glow-text">
              Geomax Broadband
            </h5>
            <p className="text-white/70 leading-relaxed max-w-md">
              Delivering high-speed, reliable internet services across Akola and Maharashtra.
              Stay connected with India’s trusted broadband provider.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-start md:justify-end space-x-5">
            {[Linkedin, Facebook, Instagram].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 border border-white/20 
                hover:bg-orange-500/20 hover:border-orange-500/40
                flex items-center justify-center transition-all"
              >
                <Icon className="w-6 h-6 text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-orange-500/20 pt-8">
          <p className="text-center text-white/60 text-sm">
            © 2025 Geomax Broadband — All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;