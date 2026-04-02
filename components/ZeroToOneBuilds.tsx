"use client";

import BuildCard from "./BuildCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
// Image paths in public directory
const attendanceDemo = "/assets/attendance-demo.jpg";
const attendanceHackathon = "/assets/5%20second%20attendance%20KPH%20Hackathon.jpeg";

interface MediaAsset {
  id: string;
  type: 'image' | 'video' | 'linkedin' | 'pdf';
  url: string;
  caption?: string;
}

interface BuildItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  outcome: string;
  images: string[];
  imageAlts: string[];
  ctaText?: string;
  ctaAction?: () => void;
  secondaryCtaText?: string;
  secondaryCtaAction?: () => void;
  mediaAssets?: MediaAsset[];
  isEditable?: boolean;
}

const ZeroToOneBuilds = () => {
  const [isClient, setIsClient] = useState(false);

  // Initialize with default data - this will be used on both server and client initially to avoid hydration issues
  const getDefaultBuilds = (): BuildItem[] => {
    return [
    {
      id: "1",
      title: "Rhythm – ADHD Companion App (Ai + Healthtech)",
      subtitle: "AI-powered task-initiation app built during the Sam Altman–backed Delta Residency. Designed through continuous prototyping with ADHD users and psychologists.",
      description:
        `Rhythm is an AI-driven ADHD task-initiation app designed for neurodivergent users who struggle to start tasks.\nRhythm uses calm-tech UX, micro-prompts, and behavior loops to reduce overwhelm and help users build momentum.\n"Duolingo for ADHD" habit-loop system\n`,
      outcome:
        `$1,000 MRR OKR set for December 2025,\n165+ early-access testers,\niOS development in progress`,
      images: [],
      imageAlts: [],
      ctaText: "View MVP",
      ctaAction: () => window.open("https://rhythm-webapp.vercel.app/", "_blank"),
      mediaAssets: [
        {
          id: "rhythm-analytics",
          type: "image",
          url: "/assets/Rhythm%20product%20analytics.JPG",
          caption: "Rhythm Post-Launch Analytics"
        },
        {
          id: "rhythm-pdf",
          type: "pdf",
          url: "/assets/RHYTHM%20GOLD_USER%20FEEDBACKS%20v2.pdf",
          caption: "Rhythm User Feedback Report"
        },
        {
          id: "rhythm-linkedin",
          type: "linkedin",
          url: "<iframe src=\"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7390880936667824128?compact=1\" height=\"399\" width=\"504\" frameborder=\"0\" allowfullscreen=\"\" title=\"Embedded post\"></iframe>",
          caption: "Rhythm ADHD App Build-in-Public Journey"
        },
        {
          id: "rhythm-user-feedback",
          type: "image",
          url: "/assets/Rhythm%20user%20feedback%20all.png",
          caption: "Rhythm user feedback all"
        },
        {
          id: "rhythm-image-2",
          type: "image",
          url: "/assets/rhythm%20community.jpeg",
          caption: "Rhythm community engagement"
        },
        {
          id: "rhythm-image-1",
          type: "image",
          url: "/assets/Rhythm%20aswin%20feedback.jpeg",
          caption: "Rhythm ADHD app user feedback"
        },
        {
          id: "rhythm-poster",
          type: "image",
          url: "/assets/Rhythm%20MVP%202%20poster.png",
          caption: "Rhythm MVP 2 poster"
        }
      ],
      isEditable: false,
    },
    {
      id: "2",
      title: "5 Second Attendance App - ( Edtech )",
      subtitle: "Teachers spend 5–10 minutes every class on attendance.That's 25–50 hours of lost teaching time per month across a typical school.",
      description:
        "Built a face-recognition prototype that completes attendance in under 5 seconds.\nAchieved a 99% time reduction in live demos (<5s vs 5–10 minutes).\nThe pilot was planned under the PRISM scheme in Calicut, Kerala supported by Pradeep Kumar MLA, to validate classroom readiness at scale.",
      outcome: "Featured on Kerala Product Hunt (KPH) hackathon",
      images: [],
      imageAlts: [],
      ctaText: "View MVP",
      ctaAction: () => window.open("https://attendanceem.netlify.app/", "_blank"),
      secondaryCtaText: "View Demo",
      secondaryCtaAction: () => window.open("https://www.linkedin.com/feed/update/urn:li:activity:7383106938341027840", "_blank"),
      mediaAssets: [
        {
          id: "attendance-kph-hackathon",
          type: "image",
          url: "/assets/5%20second%20attendance%20KPH%20Hackathon.jpeg",
          caption: "5-Second Attendance App at KPH Hackathon"
        },
        {
          id: "attendance-linkedin",
          type: "linkedin",
          url: '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7383106867792764928?compact=1" height="399" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
          caption: "5-Second Attendance App LinkedIn post"
        },
        {
          id: "attendance-user-feedback",
          type: "image",
          url: "/assets/5%20Second%20attendance%20app%20user%20feedback.JPG",
          caption: "5-Second Attendance App user feedback"
        }
      ],
      isEditable: true,
    },
    {
      id: "3",
      title: "LenTrust – ( Fintech ) $5.7 Billion",
      subtitle: "Transforming a $5.7B offline lending ecosystem into a structured, accountable digital workflow",
      description:
        "Engineered a lending workflow that removes awkward follow-ups, builds accountability, and increases on-time repayment.",
      outcome: "$3,600 innovation grant from Kerala Startup Mission",
      images: [
        "/assets/Kerala%20Startup%20mission%20Lentrust.jpeg",
        "/assets/1_LENTRUST.png",
        "/assets/2_The-Trust-Gap-in-Everyday-Agreements%20Lentust.png",
        "/assets/3_A-indian-rupee48000-Crore-Opportunity%20Lentrust.png",
        "/assets/4_Strong-Market-Validation%20Lentrust.png",
        "/assets/5_Why-Existing-Solutions-Fall-Short%20Lentrust.png"
      ],
      imageAlts: [
        "Kerala Startup Mission support for Lentrust",
        "LenTrust logo and concept overview",
        "The trust gap in everyday agreements explanation",
        "₹48000 Crore opportunity in peer lending",
        "Strong market validation for LenTrust",
        "Why existing solutions fall short"
      ],
      ctaText: "View Case Study",
      ctaAction: () => console.log("View LenTrust case study"),
      mediaAssets: [],
      isEditable: true,
    },
    ];
  };

  const [builds, setBuilds] = useState<BuildItem[]>(getDefaultBuilds());

  // Only run this on the client side to fetch localStorage data after initial render
  useEffect(() => {
    setIsClient(true);

    // Fetch saved data from localStorage only on the client side
    const saved = typeof window !== 'undefined' ? localStorage.getItem('zeroToOneBuilds') : null;
    if (saved) {
      try {
        const parsedBuilds = JSON.parse(saved);
        // Reset all builds to default configuration to update with new defaults
        const resetBuilds = parsedBuilds.map((build: BuildItem) => {
          // Get the default build configuration for this build ID
          const defaultBuild = getDefaultBuilds().find(b => b.id === build.id);

          if (build.id === "1") { // Rhythm app
            return {
              ...build,
              ...{
                // Preserve specific default values for rhythm app
                ctaText: defaultBuild?.ctaText || "",
                ctaAction: defaultBuild?.ctaAction || (() => {}),
                secondaryCtaText: defaultBuild?.secondaryCtaText,
                secondaryCtaAction: defaultBuild?.secondaryCtaAction,
              },
              mediaAssets: defaultBuild?.mediaAssets || [], // Preserve default media assets
              isEditable: false // Ensure it's not editable
            };
          } else if (build.id === "2") { // 5-Second Attendance app
            return {
              ...build,
              ...{
                title: defaultBuild?.title || build.title,
                subtitle: defaultBuild?.subtitle || build.subtitle,
                description: defaultBuild?.description || build.description,
                outcome: defaultBuild?.outcome || build.outcome,
                images: defaultBuild?.images || build.images,
                imageAlts: defaultBuild?.imageAlts || build.imageAlts,
                ctaText: defaultBuild?.ctaText || build.ctaText,
                ctaAction: defaultBuild?.ctaAction || build.ctaAction,
                secondaryCtaText: defaultBuild?.secondaryCtaText || build.secondaryCtaText,
                secondaryCtaAction: defaultBuild?.secondaryCtaAction || build.secondaryCtaAction,
              },
              mediaAssets: defaultBuild?.mediaAssets || build.mediaAssets || [],
              isEditable: defaultBuild?.isEditable || build.isEditable,
            };
          } else {
            // For other builds, update with new default values while preserving user content
            return {
              ...build,
              ...{
                title: defaultBuild?.title || build.title,
                subtitle: defaultBuild?.subtitle || build.subtitle,
                description: defaultBuild?.description || build.description,
                outcome: defaultBuild?.outcome || build.outcome,
                images: defaultBuild?.images || build.images,
                imageAlts: defaultBuild?.imageAlts || build.imageAlts,
                ctaText: defaultBuild?.ctaText || build.ctaText,
                ctaAction: defaultBuild?.ctaAction || build.ctaAction,
              },
              mediaAssets: defaultBuild?.mediaAssets || build.mediaAssets || [],
              isEditable: defaultBuild?.isEditable || build.isEditable,
            };
          }
        });
        setBuilds(resetBuilds);
      } catch (e) {
        console.error('Error parsing saved builds:', e);
        // If there's an error, use the default builds
        setBuilds(getDefaultBuilds());
      }
    }
  }, []);

  const [editingBuild, setEditingBuild] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState<string>("");
  const [editSubtitle, setEditSubtitle] = useState<string>("");
  const [editDescription, setEditDescription] = useState<string>("");
  const [editOutcome, setEditOutcome] = useState<string>("");
  const [showMediaUpload, setShowMediaUpload] = useState<string | null>(null);
  const [showEmbedInput, setShowEmbedInput] = useState<string | null>(null);
  const [embedCode, setEmbedCode] = useState<string>("");
  const [showSaveButton, setShowSaveButton] = useState<boolean>(false);

  // Environment-based edit mode
  const isEditMode = process.env.NEXT_PUBLIC_EDIT_MODE === 'true' || process.env.NODE_ENV === 'development';

  const handleEditStart = (buildId: string, build: BuildItem) => {
    setEditingBuild(buildId);
    setEditTitle(build.title);
    setEditSubtitle(build.subtitle);
    setEditDescription(build.description);
    setEditOutcome(build.outcome);
  };

  const handleEditSave = (buildId: string) => {
    const updatedBuilds = builds.map(build =>
      build.id === buildId
        ? {
            ...build,
            title: editTitle,
            subtitle: editSubtitle,
            description: editDescription,
            outcome: editOutcome
          }
        : build
    );
    setBuilds(updatedBuilds);

    // Save to localStorage for persistence - only on client
    if (typeof window !== 'undefined') {
      localStorage.setItem('zeroToOneBuilds', JSON.stringify(updatedBuilds));
    }

    setEditingBuild(null);
    setEditTitle("");
    setEditSubtitle("");
    setEditDescription("");
    setEditOutcome("");
  };

  const handleEditCancel = () => {
    setEditingBuild(null);
    setEditTitle("");
    setEditSubtitle("");
    setEditDescription("");
    setEditOutcome("");
  };

  const handleMediaUpload = (buildId: string, file: File) => {
    const mediaAsset: MediaAsset = {
      id: Date.now().toString(),
      type: file.type.startsWith('video/') ? 'video' : 'image',
      url: URL.createObjectURL(file),
      caption: ''
    };
    const updatedBuilds = builds.map(build =>
      build.id === buildId
        ? { ...build, mediaAssets: [...(build.mediaAssets || []), mediaAsset] }
        : build
    );
    setBuilds(updatedBuilds);

    // Save to localStorage after update
    if (typeof window !== 'undefined') {
      localStorage.setItem('zeroToOneBuilds', JSON.stringify(updatedBuilds));
    }

    setShowSaveButton(true);
    // Don't close the media upload UI after uploading - let user add more files if needed
    // setShowMediaUpload(null);
  };

  const handleEmbedAdd = (buildId: string) => {
    if (embedCode.trim()) {
      const mediaAsset: MediaAsset = {
        id: Date.now().toString(),
        type: 'linkedin',
        url: embedCode.trim(),
        caption: ''
      };
      const updatedBuilds = builds.map(build =>
        build.id === buildId
          ? { ...build, mediaAssets: [...(build.mediaAssets || []), mediaAsset] }
          : build
      );
      setBuilds(updatedBuilds);

      // Save to localStorage after update
      if (typeof window !== 'undefined') {
        localStorage.setItem('zeroToOneBuilds', JSON.stringify(updatedBuilds));
      }

      setShowSaveButton(true);
      setEmbedCode("");
      setShowEmbedInput(null);
    }
  };

  const handleSaveAll = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('zeroToOneBuilds', JSON.stringify(builds));
    }
    setShowSaveButton(false);
  };

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
          {isEditMode && showSaveButton && (
            <div className="mt-4">
              <Button onClick={handleSaveAll} className="bg-green-600 hover:bg-green-700">
                💾 Save All Changes
              </Button>
            </div>
          )}
        </div>

        <div className="grid gap-12">
          {builds.map((build, index) => (
            <div
              key={build.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {editingBuild === build.id ? (
                <div className="bg-card rounded-xl p-6 shadow-soft">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Title</label>
                      <Input
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        placeholder="Enter build title..."
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Subtitle</label>
                      <Input
                        value={editSubtitle}
                        onChange={(e) => setEditSubtitle(e.target.value)}
                        placeholder="Enter subtitle..."
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Description</label>
                      <Textarea
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        placeholder="Enter description..."
                        className="min-h-[100px]"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Outcome</label>
                      <Textarea
                        value={editOutcome}
                        onChange={(e) => setEditOutcome(e.target.value)}
                        placeholder="Enter outcome..."
                        className="min-h-[80px]"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={() => handleEditSave(build.id)}>
                        Save
                      </Button>
                      <Button variant="outline" onClick={handleEditCancel}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  {isEditMode && build.isEditable && (
                    <div className="absolute top-4 right-4 z-10 flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditStart(build.id, build)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowMediaUpload(showMediaUpload === build.id ? null : build.id)}
                      >
                        Add Media
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowEmbedInput(showEmbedInput === build.id ? null : build.id)}
                      >
                        Add Embed
                      </Button>
                    </div>
                  )}

                  {/* Media Upload */}
                  {isEditMode && showMediaUpload === build.id && (
                    <div className="mb-4 p-4 border rounded-lg bg-muted/50">
                      <Input
                        type="file"
                        accept="image/*,video/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            handleMediaUpload(build.id, file);
                            // Clear the input to allow uploading the same file again if needed
                            e.target.value = '';
                          }
                        }}
                        className="mb-2"
                      />
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => setShowMediaUpload(null)}>
                          Close
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Upload photos or videos
                      </p>
                    </div>
                  )}

                  {/* Embed Code Input */}
                  {isEditMode && showEmbedInput === build.id && (
                    <div className="mb-4 p-4 border rounded-lg bg-muted/50">
                      <Textarea
                        value={embedCode}
                        onChange={(e) => setEmbedCode(e.target.value)}
                        placeholder="Paste your embed code here (iframe, etc.)"
                        className="mb-2 min-h-[80px]"
                      />
                      <div className="flex gap-2">
                        <Button size="sm" onClick={() => handleEmbedAdd(build.id)}>
                          Add Embed
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => setShowEmbedInput(null)}>
                          Cancel
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Paste iframe code or other embed HTML
                      </p>
                    </div>
                  )}

                  {/* Replace default images with media assets */}
                  {/* {build.mediaAssets && build.mediaAssets.length > 0 ? (
                    <div className="mb-4">
                      <div className="flex gap-4 overflow-x-auto pb-2">
                        {build.mediaAssets.map((media) => (
                          <div key={media.id} className="relative flex-shrink-0">
                            {media.type === 'image' ? (
                              <img
                                src={media.url}
                                alt={media.caption || 'Media asset'}
                                className="w-[300px] h-[200px] object-cover rounded-lg border"
                              />
                            ) : media.type === 'video' ? (
                              <video
                                src={media.url}
                                controls
                                className="w-[300px] h-[200px] object-cover rounded-lg border"
                              />
                            ) : (
                              <div
                                className="w-[300px] h-[200px] rounded-lg border overflow-hidden"
                                dangerouslySetInnerHTML={{ __html: media.url }}
                              />
                            )}
                            {media.caption && (
                              <p className="text-xs text-muted-foreground mt-1 text-center">{media.caption}</p>
                            )}
                            {isEditMode && (
                              <Button
                                variant="destructive"
                                size="sm"
                                className="absolute top-2 right-2"
                                onClick={() => {
                                  const updatedBuilds = builds.map(b =>
                                    b.id === build.id
                                      ? { ...b, mediaAssets: b.mediaAssets?.filter(m => m.id !== media.id) || [] }
                                      : b
                                  );
                                  setBuilds(updatedBuilds);

                                  // Save to localStorage after update
                                  if (typeof window !== 'undefined') {
                                    localStorage.setItem('zeroToOneBuilds', JSON.stringify(updatedBuilds));
                                  }
                                }}
                              >
                                ×
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null} */}
                  <BuildCard {...build} index={index} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZeroToOneBuilds;