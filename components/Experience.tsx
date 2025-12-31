"use client";

import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Product Manager / Founder",
      company: "Zero-to-One Products",
      period: "2023 – 2025",
      description: "Led 0→1 development of AI, FinTech, HealthTech, MarTech, and EdTech products including Rhythm, LenTrust, CloseFlow.ai, and the 5-Second Attendance system, from discovery through MVP, pilots, and selective production launches."
    },
    {
      title: "Product Manager",
      company: "Cofount (HealthTech)",
      period: "Dec 2024 – Present",
      description: "Validated $3B TAM and built a privacy-first fertility MVP (HIPAA/GDPR compliant) with AI insights. Defined user segments, owned the roadmap, and led early go-to-market."
    },
    {
      title: "Product Marketing Associate",
      company: "Hubcredo (B2B SaaS)",
      period: "Nov 2023 – May 2024",
      description: "Drove $225K in new revenue in six months through enterprise deals for Klea, a SaaS-based legal entity management platform."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-gray-200 pl-8 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
              
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <Badge variant="secondary" className="mt-2 sm:mt-0">
                    {exp.period}
                  </Badge>
                </div>
                
                <p className="text-blue-600 font-medium mb-3">{exp.company}</p>
                
                <p className="text-gray-700 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
