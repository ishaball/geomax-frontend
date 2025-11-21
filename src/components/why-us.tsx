import { CheckCircle } from "lucide-react";

const whyus = () => {
  return (
    <section id="why-us" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Why Choose <span className="text-orange-500">Geomax Broadband?</span>
          </h2>
          <p className="text-white mt-4 text-lg">
            Akola’s most reliable, fastest and customer-focused internet service.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-glow backdrop-blur-md">
            <CheckCircle className="w-10 h-10 text-orange-500 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">Ultra-Fast Speed</h3>
            <p className="text-white/70">
              Plans starting from 100 Mbps with stable, low-latency connectivity for home & office.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-glow backdrop-blur-md">
            <CheckCircle className="w-10 h-10 text-orange-500 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">99% Uptime</h3>
            <p className="text-white/70">
              Fiber-optic technology ensures uninterrupted internet round the clock.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-glow backdrop-blur-md">
            <CheckCircle className="w-10 h-10 text-orange-500 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">24×7 Support</h3>
            <p className="text-white/70">
              A dedicated support team ready to assist you anytime, day or night.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-glow backdrop-blur-md">
            <CheckCircle className="w-10 h-10 text-orange-500 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">Quick Installation</h3>
            <p className="text-white/70">
              Get your connection installed within 24 hours of booking.
            </p>
          </div>

          {/* Card 5 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-glow backdrop-blur-md">
            <CheckCircle className="w-10 h-10 text-orange-500 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">Affordable Plans</h3>
            <p className="text-white/70">
              High-speed broadband at the most budget-friendly prices in Akola.
            </p>
          </div>

          {/* Card 6 */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-glow backdrop-blur-md">
            <CheckCircle className="w-10 h-10 text-orange-500 mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">Secure Network</h3>
            <p className="text-white/70">
              Encrypted connections that keep your data safe and protected.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default whyus;