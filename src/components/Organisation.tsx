import { Card, CardContent } from "@/components/ui/card";
import officeImg from "@/assets/geomax-office.jpg";

const Organisation = () => {
  return (
    <section id="organisation" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-foreground mb-12 glow-text">
          Organisation Details
        </h2>

        <div className="max-w-5xl mx-auto">
          <Card className="shadow-glow border border-primary/20 bg-card">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <strong className="text-foreground">Name of Enterprise:</strong>
                    <br />
                    Geomax Broadband Services
                  </div>

                  <div>
                    <strong className="text-foreground">Type of Enterprise:</strong>
                    <br />
                    Micro 2024-25 (27-Apr-2024)
                    <br />
                    Micro 2023-24 (04-Jun-2023)
                    <br />
                    Micro 2022-23 (26-Jun-2022)
                    <br />
                    Micro 2021-22 (24-Jun-2021)
                  </div>

                  <div>
                    <strong className="text-foreground">Organisation Type:</strong>
                    <br />
                    Proprietary
                  </div>

                  <div>
                    <strong className="text-foreground">Date of Incorporation:</strong>
                    <br />
                    11-Nov-2020
                  </div>

                  <div>
                    <strong className="text-foreground">Major Activity:</strong>
                    <br />
                    Services
                  </div>

                  <div>
                    <strong className="text-foreground">Date of Commencement of Production/Business:</strong>
                    <br />
                    12-Nov-2020
                  </div>
                </div>

            {/* Image */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-glow border border-primary/30">
                <img
                  src={officeImg}
                  alt="Geomax Office"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Organisation;
