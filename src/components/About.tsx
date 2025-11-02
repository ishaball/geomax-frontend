const About = () => {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground glow-text">
              About Geomax Broadband
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Geomax Broadband Services is a 4 years 11 months old Proprietorship Firm 
                incorporated on 11-Nov-2020, having its registered office located at Akola, Maharashtra.
              </p>
              <p>
                The major activity of Geomax Broadband Services is Services, Sub-classified into 
                Libraries archives museums and other cultural activities and is primarily engaged 
                in the Library and archives activities.
              </p>
              <p>
                Geomax Broadband Services is classified as Micro enterprise in the financial year 
                2024-25. It has its unit situated at Akola, Maharashtra.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-glow border border-primary/30">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="About Geomax Broadband"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
