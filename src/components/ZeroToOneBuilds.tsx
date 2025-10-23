import BuildCard from "./BuildCard";
import rhythmLanding from "@/assets/rhythm-landing.jpg";
import rhythmWhiteboard from "@/assets/rhythm-whiteboard.jpg";
import attendanceDemo from "@/assets/attendance-demo.jpg";
import lentrustDashboard from "@/assets/lentrust-dashboard.jpg";
import keralaHackathon from "@/assets/kerala-hackathon.jpg";

const ZeroToOneBuilds = () => {
  const builds = [
    {
      title: "Rhythm – ADHD Companion App",
      subtitle: "Women-first app built during Delta Residency 21-Day Build-in-Public Challenge.",
      description:
        "Built in public, co-designed with ADHD users and psychologists. Captures daily iterations, feedback loops and prototype leaps. Focused on creating a habit-building system specifically designed for neurodivergent women.",
      outcome:
        "Selected for Delta Residency 21-Day Build-in-Public Challenge (Sam Altman-backed).",
      images: [rhythmLanding, rhythmWhiteboard],
      imageAlts: [
        "Rhythm ADHD companion app landing page interface",
        "Rhythm app whiteboard session with user journey maps and design thinking sticky notes",
      ],
      ctaText: "View Case Study",
      ctaAction: () => console.log("View Rhythm case study"),
    },
    {
      title: "5-Second Attendance App",
      subtitle: "Micro-SaaS rapid prototype for instantaneous classroom attendance.",
      description:
        "Weekend build. Demo shows teacher marking presence in less than five seconds using device proximity. Shared publicly via LinkedIn. Built with focus on minimal friction and maximum efficiency for educators.",
      outcome: "Featured in LinkedIn build-in-public post.",
      images: [attendanceDemo, attendanceDemo],
      imageAlts: [
        "5-Second Attendance App demo showing quick student check-in interface",
        "Attendance tracking demo on tablet showing class roster",
      ],
      ctaText: "View Demo",
      ctaAction: () => console.log("View 5-Second Attendance demo"),
    },
    {
      title: "LenTrust – Peer Lending MVP",
      subtitle: "Zero → one lending layer built with Kerala Startup Mission theme.",
      description:
        "Design-led MVP built during Kerala hackathon. Introduced trust-score algorithm + due-date reminders for peer-to-peer micro-lending. Focused on financial inclusion and building trust in peer-to-peer transactions.",
      outcome: "Launched initial prototype to pilot users.",
      images: [lentrustDashboard, keralaHackathon],
      imageAlts: [
        "LenTrust peer lending dashboard showing loan requests and trust scores",
        "Kerala Startup Mission hackathon team collaboration photo",
      ],
      ctaText: "View Case Study",
      ctaAction: () => console.log("View LenTrust case study"),
    },
  ];

  return (
    <section id="builds" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Zero → One Builds
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Products built from scratch, shipped in public, and validated with real users.
          </p>
        </div>

        <div className="grid gap-12">
          {builds.map((build, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <BuildCard {...build} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZeroToOneBuilds;
