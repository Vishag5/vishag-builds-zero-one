import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">Let's talk product.</h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're looking to collaborate on a zero→one build, need product
            strategy insights, or just want to discuss AI and product management,
            I'd love to connect.
          </p>

          <div className="pt-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-hover hover:opacity-90 transition-opacity group"
                asChild
              >
                <a href="mailto:vishag@example.com" className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 group"
                asChild
              >
                <a
                  href="https://linkedin.com/in/vishag-thacharakkal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>

            <div className="flex gap-4 justify-center pt-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/vishag"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="text-primary hover:text-primary-hover"
                asChild
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  Download Résumé
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
