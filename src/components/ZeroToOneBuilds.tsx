import BuildCard from "./BuildCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import rhythmLanding from "@/assets/rhythm-landing.jpg";
import rhythmWhiteboard from "@/assets/rhythm-whiteboard.jpg";
import attendanceDemo from "@/assets/attendance-demo.jpg";
import lentrustDashboard from "@/assets/lentrust-dashboard.jpg";
import keralaHackathon from "@/assets/kerala-hackathon.jpg";

interface MediaAsset {
  id: string;
  type: 'image' | 'video' | 'linkedin';
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
  ctaText: string;
  ctaAction: () => void;
  mediaAssets?: MediaAsset[];
  isEditable?: boolean;
}

const ZeroToOneBuilds = () => {
  // Initialize with saved data or default data
  const getInitialBuilds = (): BuildItem[] => {
    const saved = localStorage.getItem('zeroToOneBuilds');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Error parsing saved builds:', e);
      }
    }
    return [
    {
      id: "1",
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
      mediaAssets: [],
      isEditable: true,
    },
    {
      id: "2",
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
      mediaAssets: [],
      isEditable: true,
    },
    {
      id: "3",
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
      mediaAssets: [],
      isEditable: true,
    },
    ];
  };

  const [builds, setBuilds] = useState<BuildItem[]>(getInitialBuilds());

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
  const isEditMode = import.meta.env.VITE_EDIT_MODE === 'true' || import.meta.env.DEV;

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
    
    // Save to localStorage for persistence
    localStorage.setItem('zeroToOneBuilds', JSON.stringify(updatedBuilds));
    
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
    setShowSaveButton(true);
    setShowMediaUpload(null);
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
      setShowSaveButton(true);
      setEmbedCode("");
      setShowEmbedInput(null);
    }
  };

  const handleSaveAll = () => {
    localStorage.setItem('zeroToOneBuilds', JSON.stringify(builds));
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
                          }
                        }}
                        className="mb-2"
                      />
                      <p className="text-xs text-muted-foreground">
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
                  {build.mediaAssets && build.mediaAssets.length > 0 ? (
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
                                  localStorage.setItem('zeroToOneBuilds', JSON.stringify(updatedBuilds));
                                }}
                              >
                                ×
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  <BuildCard {...build} />
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
