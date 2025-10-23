import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import heroImage from "@/assets/vishag-portrait.jpg";

const Hero: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Guard localStorage access (avoids SSR issues)
  const getLocal = (key: string, fallback: string) => {
    if (typeof window !== "undefined" && window.localStorage) {
      return localStorage.getItem(key) || fallback;
    }
    return fallback;
  };

  const [heroTitle, setHeroTitle] = useState<string>(() =>
    getLocal(
      "heroTitle",
      "AI Product Manager • Sam Altman-Backed Delta Residency Cohort"
    )
  );
  const [heroSubtitle, setHeroSubtitle] = useState<string>(() =>
    getLocal("heroSubtitle", "Shipping Zero→One | HealthTech • FinTech • EdTech • SaaS")
  );

  // Environment-based edit mode
  const isEditMode =
    import.meta.env.VITE_EDIT_MODE === "true" || Boolean(import.meta.env.DEV);

  const scrollToSection = (sectionId: string) => {
    const element = typeof document !== "undefined" && document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSave = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("heroTitle", heroTitle);
      localStorage.setItem("heroSubtitle", heroSubtitle);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset edits from storage (or fallback) and close editor
    setHeroTitle(getLocal("heroTitle", "AI Product Manager • Sam Altman-Backed Delta Residency Cohort"));
    setHeroSubtitle(getLocal("heroSubtitle", "Shipping Zero→One | HealthTech • FinTech • EdTech • SaaS"));
    setIsEditing(false);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center section-padding pt-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            {/* Static-ish heading for accessibility / fallback */}
            <h1 className="sr-only">
              AI Product Manager • Sam Altman-Backed Delta Residency Cohort
            </h1>

            <div className="space-y-3">
              {/* Edit button (visible only when edit mode enabled) */}
              <div className="flex flex-wrap gap-2">
                {isEditMode && (
                  <Button
                    onClick={() => setIsEditing((s) => !s)}
                    size="sm"
                    variant="ghost"
                    className="inline-block"
                  >
                    {isEditing ? "Cancel" : "Edit Hero"}
                  </Button>
                )}
              </div>

              {isEditing ? (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Title</label>
                    <Textarea
                      value={heroTitle}
                      onChange={(e) => setHeroTitle((e.target as HTMLTextAreaElement).value)}
                      className="min-h-[100px] text-lg"
                      placeholder="Enter hero title..."
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Subtitle</label>
                    <Input
                      value={heroSubtitle}
                      onChange={(e) => setHeroSubtitle((e.target as HTMLInputElement).value)}
                      placeholder="Enter subtitle..."
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={handleSave}>Save</Button>
                    <Button variant="outline" onClick={handleCancel}>
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  {/* Render hero title with special styling for the "Sam Altman-Backed" part */}
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    {heroTitle.split("Sam Altman-Backed").map((part, index) => (
                      <span key={index}>
                        {index === 0 ? (
                          <>
                            {part}
                            <span className="text-purple-800 font-semibold whitespace-nowrap">
                              Sam Altman
                            </span>
                            -Backed
                          </>
                        ) : (
                          <span className="gradient-text">{part}</span>
                        )}
                      </span>
                    ))}
                  </h1>

                  <div className="space-y-3">
                    <p className="text-xl text-muted-foreground">{heroSubtitle}</p>
                  </div>
                </>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                href="https://www.linkedin.com/groups/15471022/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Badge className="bg-primary text-primary-foreground hover:bg-primary-hover cursor-pointer">
                  Delta Residency
                </Badge>
              </a>
              <a
                href="https://startupmission.kerala.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Badge className="bg-primary text-primary-foreground hover:bg-primary-hover cursor-pointer">
                  Kerala Startup Mission
                </Badge>
              </a>
              <a
                href="https://www.linkedin.com/company/keralaph/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Badge className="bg-primary text-primary-foreground hover:bg-primary-hover cursor-pointer">
                  Kerala Product Hunt
                </Badge>
              </a>
              <a
                href="https://www.linkedin.com/company/tinkerhub/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Badge className="bg-primary text-primary-foreground hover:bg-primary-hover cursor-pointer">
                  TinkerHub
                </Badge>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("builds")}
                className="bg-gradient-to-r from-primary to-primary-hover hover:opacity-90 transition-opacity group"
              >
                See My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("timeline")}
                className="border-primary text-primary hover:bg-primary/10"
              >
                Follow My Build Journey
              </Button>
            </div>
          </div>

          <div className="flex justify-center animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl"></div>
              <img
                src={heroImage}
                alt="Vishag Thacharakkal - AI Product Manager professional portrait"
                className="relative rounded-full w-80 h-80 md:w-96 md:h-96 object-cover shadow-elevated border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
