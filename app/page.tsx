import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductSolves from "@/components/ProductSolves";
import ZeroToOneBuilds from "@/components/ZeroToOneBuilds";
import Experience from "@/components/Experience";
import CaseStudies from "@/components/CaseStudies";
import BuildTimeline from "@/components/BuildTimeline";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductSolves />
      <ZeroToOneBuilds />
      <CaseStudies />
      <Experience />
      <BuildTimeline />
      <Skills />
      <About />
      <Certifications />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
