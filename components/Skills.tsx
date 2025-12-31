"use client";

const Skills = () => {
  const skillsData = [
    {
      category: "Product Management",
      skills: [
        "Product Discovery",
        "Roadmaps", 
        "User & Market Research",
        "User Journey Mapping",
        "PRDs",
        "A/B Testing & Experimentation",
        "KPI & OKR Definition",
        "Go-to-Market Strategy",
        "MVP Definition & Validation"
      ]
    },
    {
      category: "Technical & Analytics",
      skills: [
        "AI evaluation & risk-aware design",
        "SQL",
        "Google Analytics (GA4)",
        "Mixpanel",
        "APIs",
        "Figma",
        "Product Analytics",
        "Agile",
        "Vibe Coding",
        "System Design"
      ]
    },
    {
      category: "Business & Leadership",
      skills: [
        "Cross-functional Collaboration",
        "Stakeholder Management",
        "Competitive Analysis",
        "Revenue Optimization"
      ]
    },
    {
      category: "Domains",
      skills: [
        "Generative AI",
        "ML Applications",
        "FinTech",
        "EdTech",
        "HealthTech",
        "MarTech",
        "SaaS",
        "E-commerce"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills & Competencies</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                {category.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-200 hover:bg-blue-100 transition-colors duration-200"
                  >
                    {skill}
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

export default Skills;
