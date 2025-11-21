import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Plans = () => {
  const plans = [
    {
      speed: "50 Mbps",
      price: "₹700/month",
      features: ["Unlimited Data", "Free Installation", "24/7 Support"],
    },
    {
      speed: "100 Mbps",
      price: "₹1000/month",
      features: ["Unlimited Data", "Free Router", "Priority Support"],
    },
    {
      speed: "200 Mbps",
      price: "₹1500/month",
      features: ["Unlimited Data", "Dual-Band Router", "Prime Support"],
    },
    {
      speed: "300 Mbps",
      price: "₹2000/month",
      features: ["Unlimited Data", "Free WiFi 6 Router", "Express Support"],
    },
  ];

  return (
    <section id="plans" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-orange-500 mb-4 glow-text">
            Our Internet Plans
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Choose the perfect plan that fits your speed and usage needs
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="group hover:-translate-y-2 transition-all duration-300
              shadow-glow hover:shadow-elegant border border-orange-500/20
              overflow-hidden bg-blue-950/30 backdrop-blur-sm rounded-2xl p-8"
            >
              {/* Speed */}
              <h3 className="text-3xl font-bold text-orange-400 text-center">
                {plan.speed}
              </h3>

              {/* Price */}
              <p className="text-white/90 text-center mt-2 mb-6 text-xl">
                {plan.price}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-white/80"
                  >
                    <Check className="w-5 h-5 text-orange-400" />
                    {feat}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Button
                className="w-full gradient-secondary shadow-glow hover:shadow-elegant transition-all"
                asChild
              >
                <a href="#contact">Choose Plan</a>
              </Button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Plans;