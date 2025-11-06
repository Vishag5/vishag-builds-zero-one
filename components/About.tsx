import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "User-Centered",
    "Data-Driven",
    "Strategic Thinker",
    "Builder",
    "AI Product",
  ];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img
              src="/assets/vishag-portrait.jpg"
              alt="Vishag Thacharakkal - AI Product Manager portrait"
              className="rounded-2xl shadow-elevated w-full aspect-square object-cover"
            />
          </div>

          <div className="space-y-6 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm an AI Product Manager who bridges empathy, data and design
              to ship zero → one products that matter. With entrepreneurial,
              engineering and growth experience, I partner with users,
              designers and developers to deliver high-impact solutions.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Currently building at Delta Residency's 21-Day Challenge, I focus on
              products that blend artificial intelligence with human-centered
              design principles. My approach combines rigorous user research,
              data-driven decision making, and rapid prototyping to validate ideas
              quickly and iterate based on real feedback.
            </p>

            <div className="pt-4">
              <p className="text-sm font-semibold text-foreground mb-3">
                Core Competencies
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 transition-opacity"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
