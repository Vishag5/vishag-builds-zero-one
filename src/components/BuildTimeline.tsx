import { Badge } from "@/components/ui/badge";

interface TimelineItem {
  day: string;
  title: string;
  description: string;
}

const BuildTimeline = () => {
  const timelineItems: TimelineItem[] = [
    {
      day: "Day 1",
      title: "Land idea at Delta Residency 21-Day Challenge",
      description:
        "Accepted into Sam Altman-backed Delta Residency program. Committed to building Rhythm in public over 21 days.",
    },
    {
      day: "Day 4",
      title: "Whiteboard session for Rhythm",
      description:
        "Deep dive into user journey mapping with sticky notes. Identified key pain points for ADHD users through co-design sessions.",
    },
    {
      day: "Day 8",
      title: "Beta feedback session – ADHD users",
      description:
        "Conducted user testing with 10 ADHD users. Gathered critical insights on habit-building patterns and notification preferences.",
    },
    {
      day: "Day 12",
      title: "Prototype iteration based on feedback",
      description:
        "Implemented major UX changes based on user feedback. Refined onboarding flow and daily task management interface.",
    },
    {
      day: "Day 15",
      title: "Psychologist consultation sessions",
      description:
        "Validated approach with ADHD specialists. Incorporated evidence-based techniques for habit formation.",
    },
    {
      day: "Day 15",
      title: "Psychologist consultation sessions",
      description:
        "Validated approach with ADHD specialists. Incorporated evidence-based techniques for habit formation.",
    },
    {
      day: "Day 18",
      title: "Final prototype refinements",
      description:
        "Implemented final UX polish based on feedback. Prepared launch materials and onboarding flow.",
    },
    {
      day: "Day 21",
      title: "Launch MVP to pilot users",
      description:
        "Shipped first working version to 25 pilot users. Beginning continuous iteration cycle based on real-world usage.",
    },
  ];

  return (
    <section id="timeline" className="section-padding bg-gradient-to-b from-[hsl(var(--muted))] to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary text-primary-foreground">
            Building in Public
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Delta Residency & Beyond
          </h2>
          <p className="text-xl text-muted-foreground">
            A transparent look at the build journey, day by day.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className="relative pl-20 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Circle marker */}
                <div className="absolute left-6 w-5 h-5 rounded-full bg-primary border-4 border-white shadow-soft"></div>

                <div className="bg-card rounded-xl p-6 shadow-soft hover-lift">
                  <Badge variant="secondary" className="mb-2">
                    {item.day}
                  </Badge>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildTimeline;
