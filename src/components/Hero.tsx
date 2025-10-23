import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/vishag-portrait.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center section-padding pt-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Building{" "}
              <span className="gradient-text">zero → one</span>{" "}
              products that blend AI, empathy and data.
            </h1>
            
            <div className="space-y-2">
              <p className="text-xl text-muted-foreground">
                AI Product Manager • Builder at Delta Residency 21-Day Challenge
              </p>
              <Badge className="bg-primary text-primary-foreground hover:bg-primary-hover">
                Delta Residency – 21-Day Challenge
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("builds")}
                className="bg-gradient-to-r from-primary to-primary-hover hover:opacity-90 transition-opacity group"
              >
                See My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("timeline")}
                className="border-primary text-primary hover:bg-primary/10"
              >
                Follow My Build Journey
              </Button>
            </div>
          </div>

          <div className="flex justify-center animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl"></div>
              <img
                src={heroImage}
                alt="Vishag Thacharakkal - AI Product Manager professional portrait"
                className="relative rounded-full w-80 h-80 md:w-96 md:h-96 object-cover shadow-elevated border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
