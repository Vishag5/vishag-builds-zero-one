import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, FileText, MessageCircle, Calendar } from "lucide-react";
import ProjectInquiryForm from './ProjectInquiryForm';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Let's talk product.</h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
            Whether you're looking to collaborate on a zero→one build, need product
            strategy insights, or just want to discuss AI and product management,
            I'd love to connect.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-primary-hover hover:opacity-90 transition-opacity group flex flex-col h-32"
            asChild
          >
            <a href="mailto:info.vishag@gmail.com" className="flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" />
              <div className="text-left">
                <div className="font-medium">Email Me</div>
                <div className="text-sm opacity-80">info.vishag@gmail.com</div>
              </div>
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 group flex flex-col h-32"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/vishagt/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              <div className="text-left">
                <div className="font-medium">LinkedIn</div>
                <div className="text-sm opacity-80">LinkedIn connect with me</div>
              </div>
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 group flex flex-col h-32"
            asChild
          >
            <a
              href="https://calendly.com/vishag-thacharakkal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Calendar className="mr-2 h-5 w-5" />
              <div className="text-left">
                <div className="font-medium">Schedule a Call</div>
                <div className="text-sm opacity-80">Book directly</div>
              </div>
            </a>
          </Button>
        </div>

        {/* Project Inquiry Form */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Project Inquiry</h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have a specific project in mind? Fill out the form below for a custom consultation.
            </p>
          </div>
          
          <ProjectInquiryForm />
        </div>

        {/* Additional Links */}
        <div className="flex flex-wrap justify-center gap-4 pt-8 border-t border-border">
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
            className="text-primary hover:text-primary-hover flex items-center"
            asChild
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              Download Résumé
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;