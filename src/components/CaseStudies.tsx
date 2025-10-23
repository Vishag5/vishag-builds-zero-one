import CaseStudyCard from "./CaseStudyCard";

const CaseStudies = () => {
  const caseStudies = [
    {
      logo: "📚",
      title: "Seekho Retention Strategy | Capstone Project (AI PM Program 2025)",
      description:
        "Designed solutions to improve 30-day retention from 15% → 40% for Seekho (5M+ user edutainment platform). Conducted primary research with 25+ users, identified drop-off points, built flows using JTBD, Hooked Model, RICE.",
      skills: ["User Research", "JTBD", "Hooked Model", "RICE", "Retention Strategy"],
    },
    {
      logo: "🎵",
      title: "Problem Framing & Prioritization – Spotify",
      description:
        "Analyzed how to increase Spotify Premium sign-ups through strategic problem framing. Applied user research methodologies and RICE framework to prioritize high-impact features that drive conversion.",
      skills: ["Problem Framing", "RICE Framework", "Product Strategy", "User Research"],
    },
    {
      logo: "🛍️",
      title: "Improving Repeat Purchase Frequency at Meesho",
      description:
        "Applied Product Thinking Frameworks, User Validation, JTBD, First-Principle Thinking, and Analytics to identify and solve barriers to repeat purchases on India's leading social commerce platform.",
      skills: ["JTBD", "Analytics", "First-Principle Thinking", "User Validation"],
    },
    {
      logo: "🏠",
      title: "Product Discovery, Market & User Research – NoBroker",
      description:
        "Conducted comprehensive market research, user interviews, competitive analysis, and service design to discover new product opportunities for India's largest proptech platform.",
      skills: ["Market Research", "User Interviews", "Competitive Analysis", "Service Design"],
    },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Detailed Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Problem → Process → Impact across leading products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CaseStudyCard {...study} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
