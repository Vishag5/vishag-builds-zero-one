import { Badge } from "@/components/ui/badge";

const Certifications = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-[hsl(var(--muted))]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications
          </h2>
          <p className="text-xl text-muted-foreground">
            Continuous learning and professional development
          </p>
        </div>

        <div className="bg-card rounded-xl p-8 shadow-soft hover-lift animate-slide-up">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-2">🎓</div>
                  <Badge className="bg-primary text-primary-foreground">
                    AI-First PM
                  </Badge>
                </div>
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">
                AI-First Product Management Certificate
              </h3>
              <p className="text-lg text-muted-foreground mb-4">
                Certified in AI-First Product Management (Aug 2025)
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Comprehensive program covering AI product strategy, user research for AI products, 
                prompt engineering, model evaluation, and ethical AI considerations. 
                Focused on building products that leverage AI capabilities while maintaining 
                strong user-centered design principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
