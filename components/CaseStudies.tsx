import React from 'react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: "seekho",
      company: "Seekho",
      domain: "seekho.in",
      type: "EdTech Retention",
      title: "Platform Retention Improvement",
      impact: "30-Day Retention: 15% to 40%",
      impactIcon: "📈",
      description: "Isolated drop-off constraints utilizing JTBD interviews and quantitative cohort analysis. Validated solutions through RICE prioritization, introducing streak mechanics and selective paywall delays.",
      frameworks: ["JTBD", "Hooked Model", "RICE Prioritization", "Cohort Analysis"],
      badgeClass: "text-amber-700 bg-amber-50 border-amber-200"
    },
    {
      id: "spotify",
      company: "Spotify",
      domain: "spotify.com",
      type: "Music Monetization",
      title: "Subscription Conversion Uplift",
      impact: "Focus: Premium Sign-Ups",
      impactIcon: "💰",
      description: "Mapped the free-to-premium conversion journey to identify highest-leverage intervention points. Executed strict competitive benchmarking against leading streaming equivalents to finalize funnel solutions.",
      frameworks: ["Problem Framing", "Funnel Analysis", "Competitive Intel"],
      badgeClass: "text-green-700 bg-green-50 border-green-200"
    },
    {
      id: "meesho",
      company: "Meesho",
      domain: "meesho.com",
      type: "Social Commerce",
      title: "Repeat Purchase Habituation",
      impact: "Focus: Purchase Frequency",
      impactIcon: "🔄",
      description: "Deconstructed early-lifecycle churn metrics via first-principle problem finding. Architected localized loyalty drivers and category discovery features anchored in behavioral science best practices.",
      frameworks: ["First Principles", "Product Thinking", "Social Loops"],
      badgeClass: "text-purple-700 bg-purple-50 border-purple-200"
    },
    {
      id: "nobroker",
      company: "NoBroker",
      domain: "nobroker.in",
      type: "PropTech Discovery",
      title: "Property Discovery Optimization",
      impact: "Focus: Search Conversion",
      impactIcon: "🏡",
      description: "Facilitated primary user research isolating bottlenecks in the property search trajectory. Restructured the discovery flow introducing weighted personalization and streamlined inventory filtering.",
      frameworks: ["User Interviews", "Journey Mapping", "Product Strategy"],
      badgeClass: "text-cyan-700 bg-cyan-50 border-cyan-200"
    }
  ];

  return (
    <section id="case-studies" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in flex flex-col items-center">
          <span className="inline-block px-8 py-3 mb-6 text-[0.95rem] font-extrabold tracking-[0.15em] text-primary uppercase bg-white/70 backdrop-blur-xl border-2 border-white/90 shadow-lg rounded-full">
            Case Studies
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Framework-driven.<br />
            <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent">Metric-backed.</span>
          </h2>
        </div>

        <div className="grid xl:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="animate-slide-up bg-gradient-to-br from-white/90 to-slate-50/50 backdrop-blur-xl border-[1.5px] border-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-3xl p-8 hover:shadow-[0_24px_64px_rgba(108,99,255,0.12)] hover:-translate-y-2 hover:border-white transition-all duration-500 group flex flex-col gap-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`px-5 py-2.5 rounded-full border shadow-sm text-sm font-extrabold tracking-wide flex items-center gap-3 ${study.badgeClass}`}>
                  <img src={`https://www.google.com/s2/favicons?domain=${study.domain}&sz=128`} alt={`${study.company} logo`} className="w-8 h-8 rounded-full shadow-md bg-white border border-white/50" />
                  {study.company}
                </div>
                <span className="text-[0.75rem] font-semibold text-slate-400 uppercase tracking-wider">{study.type}</span>
              </div>
              
              <h3 className="text-2xl font-black text-slate-800 leading-tight group-hover:text-primary transition-colors duration-300">{study.title}</h3>
              
              <div className="flex items-center gap-3 bg-white border border-slate-100 rounded-2xl p-4 shadow-sm w-fit">
                <span className="text-2xl">{study.impactIcon}</span>
                <span className="text-[0.95rem] text-slate-500 font-medium">
                  {study.impact.split(':').map((part, i) => 
                     i === 0 && study.impact.includes(':') ? <span key={i}>{part}:</span> : <strong key={i} className={`ml-1 ${study.badgeClass.split(' ')[0]}`}>{part}</strong>
                  )}
                </span>
              </div>
              
              <p className="text-[1rem] text-slate-600 leading-relaxed flex-1">
                {study.description}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-200/60">
                {study.frameworks.map((fw, i) => (
                  <span key={i} className="px-3 py-1.5 text-[0.7rem] font-bold text-slate-600 bg-slate-50 border border-slate-200 rounded-full">
                    {fw}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
