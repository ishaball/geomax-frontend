import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Organisation from "@/components/Organisation";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Organisation />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
