import React from 'react';

const productSolves = [
  {
    id: "railyatri",
    company: "RailYatri",
    companyUrl: "https://www.railyatri.in/",
    domain: "railyatri.in",
    logo: "🚂",
    tag: "AI, Travel & GovTech",
    title: "IRCTC Compliance Co-Pilot",
    desc: (
      <ul className="space-y-2 list-none">
        <li>📉 <strong>Reduced manual review</strong> by ~80% and surfaced <strong>₹50K–₹1Cr fine risks</strong>.</li>
        <li>🤖 Built a locally-hosted <strong>RAG co-pilot</strong> over a regulatory knowledge base.</li>
        <li>💻 Deployed via <strong>Streamlit</strong> using Groq & Gemini APIs for cited penalty assessments.</li>
      </ul>
    ),
    metrics: [
      { val: "RAG", lbl: "AI Pipeline" },
      { val: "Live", lbl: "Dashboard" }
    ],
    links: [
      { url: "http://156.67.31.92:8504/", label: "🤖 Try RAG Co-Pilot", type: "live" },
      { url: "https://vishag5.github.io/railyatri-dashboard/", label: "📊 Live Dashboard", type: "live" },
      { url: "https://drive.google.com/file/d/1GDt1wFuZ4CU2SlSGweKAiqeVRSlZTkD4/view?usp=sharing", label: "📄 Strategic Brief", type: "doc" }
    ],
    frameworks: ["Vector Search", "LLM Orchestration", "GovTech NLP"]
  },
  {
    id: "dialog",
    company: "Dialog AI",
    companyUrl: "https://play.google.com/store/apps/details?id=com.cmpntech.emotion",
    logoUrl: "https://play-lh.googleusercontent.com/0Lwmu2e_Ga2dUb39a0jHuYUSAgJYJrdk2C-E8h279kYSVLPc_cyZWz5RRP-9lJyP83dZRMnkG0byZGN02vY-nA",
    logo: "💬",
    tag: "AI Companion & Social",
    title: "Driving Weekly Active Engagement",
    desc: (
      <ul className="space-y-2 list-none">
        <li>❤️ Targeted a <strong>45% DAU/WAU</strong> ratio to heavily eliminate user churn.</li>
        <li>🧠 Architected a <strong>narrative habit engine</strong> deployed via native Android chat interfaces.</li>
        <li>📲 Integrated APIs for <strong>in-character notifications</strong> and custom episodic content.</li>
      </ul>
    ),
    metrics: [
      { val: "2×", lbl: "Frequency Target" },
      { val: "Build", lbl: "Live Artifact" }
    ],
    links: [
      { url: "https://dialog-app-86234.web.app/", label: "🌐 Live Web App", type: "live" },
      { url: "https://docs.google.com/document/d/1iAFW3jlAR3PZuIKPlHtXrENINm2tmBmW7yVk-FOSOcg/edit?tab=t.0", label: "📄 Strategic Brief", type: "doc" }
    ],
    frameworks: ["LLM Personas", "Social Graph AI", "Hook Model"]
  },
  {
    id: "amperesh",
    company: "Ampere.sh",
    companyUrl: "https://ampere.sh",
    domain: "ampere.sh",
    logo: "⚡",
    tag: "AI & Open Source",
    title: "Product Strategy Advisor",
    desc: (
      <ul className="space-y-2 list-none">
        <li>🔍 <strong>Diagnosed 5,217+ deployments</strong> finding adoption bottlenecked by complex API configurations.</li>
        <li>⚡ Formulated a <strong>managed credit strategy</strong> targeting a <strong>60-second onboarding</strong> time-to-value.</li>
      </ul>
    ),
    links: [
      { url: "https://drive.google.com/file/d/11DxKPEMno93aVoh69_ysMQ5a6BnEvE4e/view?usp=sharing", label: "📄 Strategic Brief", type: "doc" }
    ],
    frameworks: ["OpenClaw", "Product-Led Growth", "Autonomous Agents"]
  },
  {
    id: "netra",
    company: "Netra AI",
    companyUrl: "https://docs.getnetra.ai/netra",
    domain: "getnetra.ai",
    logo: "🤖",
    tag: "AI & Computer Vision",
    title: "Competitive Moat Analysis",
    desc: (
      <ul className="space-y-2 list-none">
        <li>🛡️ Overcame strict <strong>compliance barriers</strong> that blocked 32% of enterprise deployments.</li>
        <li>📈 Captured the <strong>HealthTech market</strong> via built-in PII masking workflows.</li>
        <li>💰 Validated a <strong>$99/month premium tier</strong> based on competitive positioning.</li>
      </ul>
    ),
    links: [
      { url: "https://drive.google.com/file/d/1iA2z4gaZQF7-aa7coPVJxBllJ8Xh2fWU/view?usp=sharing", label: "📄 Strategic Brief", type: "doc" }
    ],
    frameworks: ["ML Observability", "Enterprise AI", "Vision Models"]
  },
  {
    id: "smartercodes",
    company: "Smartercodes",
    companyUrl: "https://smarter.codes/",
    domain: "smarter.codes",
    logo: "🏥",
    tag: "Healthcare SaaS & AI",
    title: "Healthcare AI Blueprint",
    desc: (
      <ul className="space-y-2 list-none">
        <li>🏥 Formulated a <strong>comprehensive product blueprint</strong> and prioritized early feature roadmap.</li>
        <li>⚙️ Structured a scalable <strong>Airtable asset</strong> directly bridging product strategy with engineering execution.</li>
      </ul>
    ),
    links: [
      { url: "https://docs.google.com/document/d/1OTtKBmWshfEAJ0H8Ty7KNU6f8-80PlI_M2fkJ2M-Wb0/edit?tab=t.0", label: "📄 Strategic Brief", type: "live" },
      { url: "https://airtable.com/invite/l?inviteId=invFeBTUk49WsIu7F&inviteToken=30ee11a87a076206d2182cf83b5836aa6371cc3ee85098b60269dc6800a3158f", label: "📋 Database Artifact", type: "doc" }
    ],
    frameworks: ["SaaS Architecture", "0-to-1 PM", "No-Code Ops"]
  },
  {
    id: "buttermoney",
    company: "Buttermoney",
    companyUrl: "#",
    logo: "🧈",
    tag: "Fintech",
    title: "Product & Growth Strategy",
    desc: (
      <ul className="space-y-2 list-none">
        <li>⏱️ Analyzed 45 days of <strong>manual home loan delays</strong> to be eliminated by an AI-driven Mortgage OS.</li>
        <li>💸 Structured a lifecycle strategy targeting up to <strong>1% lender commissions</strong> across India’s <strong>$300B+ market</strong>.</li>
      </ul>
    ),
    links: [
      { url: "#", label: "📄 Strategic Brief", type: "doc" }
    ],
    frameworks: ["PropTech", "Workflow Automation", "TAM Expansion"]
  },
  {
    id: "incubyte",
    company: "Incubyte",
    companyUrl: "https://www.incubyte.co/",
    domain: "incubyte.co",
    logo: "💊",
    tag: "HealthTech",
    title: "Frictionless AI Health MVP",
    desc: (
      <ul className="space-y-2 list-none">
        <li>✅ Validated a <strong>$3.6B TAM</strong> and architected a digital health coach MVP.</li>
        <li>📅 Defined a <strong>6-month roadmap</strong> with 4 core KPIs.</li>
        <li>🎯 Targeted <strong>$22M ARR</strong> through sustained user onboarding engagement.</li>
      </ul>
    ),
    links: [
      { url: "https://thrive-health-first-digitalcoach.lovable.app/", label: "🌐 Live Prototype", type: "live" },
      { url: "https://drive.google.com/file/d/1fwBEE7I2lwj7Zz6eULmCsVX-3ipGvXdK/view?usp=sharing", label: "📄 Strategic Brief", type: "doc" }
    ],
    frameworks: ["GTM Execution", "Behavioral Science", "B2C AI"]
  },
  {
    id: "getfoodies",
    company: "Getfoodies",
    companyUrl: "#",
    logo: "🍽️",
    tag: "B2B SaaS / Hospitality Tech",
    title: "First-Principles Growth Roadmap",
    desc: (
      <ul className="space-y-2 list-none">
        <li>📉 Identified <strong>opaque 30% delivery fees</strong> as the root cause driving restaurant turnover.</li>
        <li>🍽️ Architected a <strong>decision-centric dashboard</strong> surfacing real-time commission savings.</li>
        <li>💡 Implemented this solution targeting a <strong>15% total churn reduction</strong>.</li>
      </ul>
    ),
    links: [
      { url: "https://vishag5.github.io/Getfoodies-dashboard-v3/", label: "📊 Live Dashboard", type: "live" },
      { url: "https://drive.google.com/file/d/14Tr1XdiEkhTTj6kTjvZVn6eFVPDPf1FC/view?usp=sharing", label: "📄 Strategic Brief", type: "doc" }
    ],
    frameworks: ["Pricing Optimization", "Data Visualization", "B2B SaaS"]
  },
  {
    id: "rhythm",
    company: "Rhythm",
    companyUrl: "https://rhythm-for-adhd.vercel.app/",
    logo: "🧠",
    tag: "HealthTech Tools",
    title: "Behavioral Focus Optimization",
    desc: (
      <ul className="space-y-2 list-none">
        <li>🧠 Validated a <strong>$10k MRR target</strong> with 100+ user interviews for an ADHD app.</li>
        <li>👥 Managed a highly engaged <strong>250+ member</strong> early-access beta community.</li>
        <li>⏱️ Achieved a <strong>40% increase</strong> in task initiation via dynamic 2-minute subtask replacements.</li>
      </ul>
    ),
    links: [
      { url: "https://rhythm-for-adhd.vercel.app/", label: "🌐 Live Solve App", type: "live" }
    ],
    frameworks: ["Neurotech", "Micro-Interactions", "Community-Led Growth"]
  },
  {
    id: "uklinkology",
    company: "UKLinkology",
    companyUrl: "https://www.uklinkology.co.uk/",
    domain: "uklinkology.co.uk",
    logo: "🔗",
    tag: "Digital Growth",
    title: "SEO Scaling Roadmap",
    desc: (
      <ul className="space-y-2 list-none">
        <li>🔗 Identified a manual <strong>33-point bottleneck</strong> creating crippling 6-week delivery delays.</li>
        <li>⚡ Architected an <strong>automated API scoring SaaS</strong> standardizing 60,000 publishers.</li>
        <li>💰 Slashed time-to-delivery to <strong>1 week</strong>, unlocking an estimated <strong>$5M in revenue</strong>.</li>
      </ul>
    ),
    links: [
      { url: "https://www.loom.com/share/13be04167a004103bebbec9b391db171", label: "🎥 Loom Walkthrough", type: "video" },
      { url: "https://drive.google.com/file/d/1MSIct_RaFYs4lypUMY4k--ELARkEfnBV/view?usp=sharing", label: "📄 Scaling Brief", type: "doc" }
    ],
    frameworks: ["API Monetization", "Process Engineering", "B2B Marketplaces"]
  },
  {
    id: "lifesight",
    company: "Lifesight",
    companyUrl: "https://www.lifesight.io/",
    domain: "lifesight.io",
    logo: "👁️",
    tag: "MarTech SaaS",
    title: "Customer Marketing Analytics",
    desc: (
      <ul className="space-y-2 list-none">
        <li>⚠️ Mitigated Slack’s <strong>legacy API sunset</strong> threatening critical B2B document workflows.</li>
        <li>🌐 Architected an external upload workflow supporting <strong>120KB payloads</strong> via authenticated REST endpoints.</li>
        <li>🔒 Guaranteed totally <strong>reliable, uninterrupted delivery</strong> across key enterprise channels.</li>
      </ul>
    ),
    links: [
      { url: "https://markdashboard.lovable.app/", label: "🌐 Deployed Dashboard", type: "live" },
      { url: "https://docs.google.com/document/d/1GeW0Y2B_wQfRH5Dt35lnmZ6ePFMc-U47ed2xubwmv7I/edit?tab=t.0#heading=h.8bkowv679f0w", label: "📄 Artifact Brief", type: "doc" }
    ],
    frameworks: ["System Resilience", "OAuth Integrations", "Technical PM"]
  },
  {
    id: "cardmond",
    company: "Cardmond Infinity",
    companyUrl: "#",
    logo: "🎨",
    tag: "D2C / E-Commerce",
    title: "\"Online Sales: Conversion Overhaul\"",
    desc: (
      <ul className="space-y-2 list-none">
        <li>🛒 Reduced <strong>checkout drop-off by 78%</strong> by redesigning a 6-step funnel into a <strong>3-step flow</strong>.</li>
        <li>💳 Introduced native mobile-first, <strong>UPI-ready checkout</strong> over custom gateways.</li>
        <li>💻 Deployed effectively on <strong>Shopify</strong> alongside Razorpay integrations.</li>
      </ul>
    ),
    links: [
      { url: "https://drive.google.com/file/d/1TGq7ImIQuPmtYpiXvAE02dHg7dxDMtDI/view?usp=sharing", label: "📄 Strategic Brief", type: "doc" }
    ],
    frameworks: ["Conversion Rate Optimization", "FinTech Rails", "A/B Testing"]
  }
];

const ProductSolves = () => {
  return (
    <section id="assignments" className="section-padding relative border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in flex flex-col items-center">
          <span className="inline-block px-8 py-3 mb-6 text-[0.95rem] font-extrabold tracking-[0.15em] text-primary uppercase bg-white/70 backdrop-blur-xl border-2 border-white/90 shadow-lg rounded-full">
            Product Solves & Artifacts
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Tactical Execution.<br/>
            <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent">Proven Artifacts.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every card below represents a specific business or technical hurdle solved. Explore the active dashboards, functional prototypes, and strategic documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {productSolves.map((solve) => (
            <div key={solve.id} className="flex flex-col p-7 bg-gradient-to-br from-white/80 to-indigo-50/60 backdrop-blur-xl border-[1.5px] border-white/70 shadow-[0_12px_40px_rgba(0,0,0,0.06)] rounded-3xl hover:shadow-[0_24px_64px_rgba(108,99,255,0.15)] hover:-translate-y-2 hover:border-white transition-all duration-500 group">
              <div className="flex items-center gap-5 mb-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/80 border border-white shrink-0 text-3xl shadow-sm group-hover:scale-110 group-hover:bg-white transition-all duration-300 overflow-hidden">
                  {solve.logoUrl ? (
                    <img src={solve.logoUrl} alt={`${solve.company} logo`} className="w-10 h-10 object-contain rounded-xl drop-shadow-sm" />
                  ) : solve.domain ? (
                    <img src={`https://www.google.com/s2/favicons?domain=${solve.domain}&sz=128`} alt={`${solve.company} logo`} className="w-9 h-9 object-contain rounded-md drop-shadow-sm" />
                  ) : (
                    solve.logo
                  )}
                </div>
                <div>
                  <a href={solve.companyUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 group/link">
                    <h3 className="font-bold text-slate-900 group-hover/link:text-primary leading-tight transition-colors">{solve.company}</h3>
                    <svg className="w-3.5 h-3.5 text-slate-400 opacity-60 group-hover/link:opacity-100 group-hover/link:text-primary transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <span className="text-[0.7rem] font-medium text-slate-500 uppercase tracking-wide">{solve.tag}</span>
                </div>
              </div>
              
              <div className="font-bold text-slate-900 text-lg mb-4">{solve.title}</div>
              
              <div className="text-[0.85rem] text-slate-600 leading-relaxed flex-1 mb-5">
                {solve.desc}
              </div>
              
              {solve.metrics && (
                <div className="flex gap-4 mb-5">
                  {solve.metrics.map((m, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="font-bold text-[1.5rem] tracking-tight text-primary leading-none mb-1">{m.val}</span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{m.lbl}</span>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-2.5 mb-6 mt-auto">
                {solve.links.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noreferrer" 
                     className={`group/btn inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-[0.75rem] tracking-tight whitespace-nowrap font-bold rounded-xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:scale-95 cursor-pointer ${
                       link.type === 'live' ? 'text-green-800 bg-white border-green-200 hover:border-green-400 hover:bg-green-50' : 
                       link.type === 'video' ? 'text-amber-800 bg-white border-amber-200 hover:border-amber-400 hover:bg-amber-50' : 
                       'text-blue-800 bg-white border-blue-200 hover:border-blue-400 hover:bg-blue-50'
                     }`}>
                    {link.label}
                    <svg className="w-3.5 h-3.5 ml-0.5 opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2 pt-5 border-t border-indigo-100/40">
                {solve.frameworks.map((fw, i) => (
                  <span key={i} className="px-3.5 py-1.5 text-[0.8rem] font-bold text-slate-500 bg-white/60 backdrop-blur-sm border border-white/80 rounded-full shadow-sm">
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

export default ProductSolves;
