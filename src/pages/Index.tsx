import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Organisation from "@/components/Organisation";
import Plans from "@/components/Plans";


import Contact from "@/components/Contact";
import WhyUs from "@/components/why-us"
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyUs />
      <About />
      <Services />
      <Organisation />
     <Plans />
     <Contact />
      <Footer />
     
      
    </div>
  );
};

export default Index;
