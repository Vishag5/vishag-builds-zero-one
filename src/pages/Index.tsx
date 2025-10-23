import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ZeroToOneBuilds from "@/components/ZeroToOneBuilds";
import CaseStudies from "@/components/CaseStudies";
import BuildTimeline from "@/components/BuildTimeline";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ZeroToOneBuilds />
      <CaseStudies />
      <BuildTimeline />
      <About />
      <Certifications />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
