import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Loved the user flow low-fidelity designs. Overall approach to attempt and synchronisation is great.",
      author: "Vijay Sehgal",
      role: "Product Mentor",
    },
    {
      quote:
        "Vishag brings a unique blend of empathy and analytical thinking to product development. His ability to translate user needs into actionable features is impressive.",
      author: "Product Lead",
      role: "Delta Residency",
    },
    {
      quote:
        "The attention to detail in user research and the speed of iteration during the build challenge was remarkable. Real product thinking in action.",
      author: "Beta User",
      role: "ADHD Community",
    },
  ];

  const recognitions = [
    "Delta Residency – 21-Day Challenge",
    "Kerala Startup Mission Sprint Participant",
    "AI Product Management Program 2025",
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Testimonials & Recognition
          </h2>
          <p className="text-xl text-muted-foreground">
            What mentors and users say about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-muted/50 to-accent/10 rounded-xl p-6 shadow-soft hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-base leading-relaxed mb-4 text-foreground">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg font-semibold mb-4 text-foreground">
            Program Recognition
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {recognitions.map((recognition, index) => (
              <Badge
                key={index}
                className="bg-primary text-primary-foreground px-4 py-2 text-sm"
              >
                {recognition}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
