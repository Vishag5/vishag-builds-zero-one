import { Button } from "@/components/ui/button";
import ProjectEstimationTool from "@/components/ProjectEstimationTool";
import { Calendar, FileText, MessageCircle } from "lucide-react";

const HireMeSection = () => {
  return (
    <section id="hire-me" className="section-padding bg-gradient-to-b from-[hsl(var(--background-gradient-start))] to-[hsl(var(--background-gradient-end))]">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text">Ready to Start Your Project?</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you need a full product built from scratch or strategic guidance for your existing project,
            I'm here to help you turn your vision into reality.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-soft p-8 mb-16">
          <h3 className="text-2xl font-bold mb-6">Project Estimation Tool</h3>
          <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
            Get an instant estimate for your zero→one build. Answer a few questions about your project
            and receive a personalized timeline and budget estimate.
          </p>
          <ProjectEstimationTool />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-primary-hover hover:opacity-90 transition-opacity group flex items-center"
            asChild
          >
            <a href="#project-inquiry" className="flex items-center">
              <MessageCircle className="mr-2 h-5 w-5" />
              Send Project Brief
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 group flex items-center"
            asChild
          >
            <a
              href="https://calendly.com/vishag-thacharakkal/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Call
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 group flex items-center"
            asChild
          >
            <a
              href="/assets/Vishag T +HighAgency PM+ Resume + 19_11.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FileText className="mr-2 h-5 w-5" />
              Download Résumé
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-border">
            <h4 className="font-bold text-lg mb-2">AI Product Strategy</h4>
            <p className="text-sm text-muted-foreground">
              From concept to execution, I help define AI product strategies that solve real user problems.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-border">
            <h4 className="font-bold text-lg mb-2">Full-Stack Development</h4>
            <p className="text-sm text-muted-foreground">
              End-to-end product development from backend infrastructure to intuitive user interfaces.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-border">
            <h4 className="font-bold text-lg mb-2">Product Design</h4>
            <p className="text-sm text-muted-foreground">
              User-centered design processes that ensure your product is both beautiful and functional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMeSection;