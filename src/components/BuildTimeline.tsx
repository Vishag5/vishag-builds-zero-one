import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { buildJourney, updateDescription, addMediaAsset, removeMediaAsset } from "@/lib/buildJourneyData";

interface TimelineItem {
  day: number;
  date: string;
  title: string;
  description: string;
  assetEmbed?: string;
  assetType?: string;
  assetUpload?: string | null;
  isEditable?: boolean;
  mediaAssets?: MediaAsset[];
}

interface MediaAsset {
  id: string;
  type: 'image' | 'video';
  url: string;
  caption?: string;
}

const BuildTimeline = () => {
  const timelineItems: TimelineItem[] = buildJourney;
  const [editingDay, setEditingDay] = useState<number | null>(null);
  const [editDescription, setEditDescription] = useState<string>("");
  const [editTitle, setEditTitle] = useState<string>("");
  const [showMediaUpload, setShowMediaUpload] = useState<number | null>(null);
  const [showAddDay, setShowAddDay] = useState<boolean>(false);
  const [newDayTitle, setNewDayTitle] = useState<string>("");
  const [newDayDescription, setNewDayDescription] = useState<string>("");
  const [showSaveButton, setShowSaveButton] = useState<boolean>(false);

  // Environment-based edit mode
  const isEditMode = import.meta.env.VITE_EDIT_MODE === 'true' || import.meta.env.DEV;

  const handleEditStart = (day: number, currentDescription: string, currentTitle: string) => {
    setEditingDay(day);
    setEditDescription(currentDescription);
    setEditTitle(currentTitle);
  };

  const handleEditSave = (day: number) => {
    updateDescription(day, editDescription);
    // Update title in the data
    const entry = buildJourney.find(item => item.day === day);
    if (entry) {
      entry.title = editTitle;
    }
    setShowSaveButton(true);
    setEditingDay(null);
    setEditDescription("");
    setEditTitle("");
  };

  const handleEditCancel = () => {
    setEditingDay(null);
    setEditDescription("");
    setEditTitle("");
  };

  const handleMediaUpload = (day: number, file: File) => {
    const mediaAsset: MediaAsset = {
      id: Date.now().toString(),
      type: file.type.startsWith('video/') ? 'video' : 'image',
      url: URL.createObjectURL(file),
      caption: ''
    };
    addMediaAsset(day, mediaAsset);
    setShowSaveButton(true);
    setShowMediaUpload(null);
  };

  const handleAddNewDay = () => {
    const newDay = Math.max(...timelineItems.map(item => item.day)) + 1;
    const newEntry = {
      day: newDay,
      date: new Date().toISOString().split('T')[0],
      title: newDayTitle,
      description: newDayDescription,
      assetEmbed: null,
      assetType: null,
      assetUpload: null,
      isEditable: true,
      mediaAssets: []
    };
    buildJourney.unshift(newEntry); // Add to beginning
    setShowSaveButton(true);
    setNewDayTitle("");
    setNewDayDescription("");
    setShowAddDay(false);
  };

  const handleSaveAll = () => {
    localStorage.setItem('buildJourney', JSON.stringify(buildJourney));
    setShowSaveButton(false);
  };

  return (
    <section id="timeline" className="section-padding bg-gradient-to-b from-[hsl(var(--muted))] to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary text-primary-foreground">
            Building in Public
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Delta Residency & Beyond
          </h2>
              <p className="text-xl text-muted-foreground">
                A transparent look at the build journey, day by day.
              </p>
              {isEditMode && (
                <div className="mt-8 flex gap-4 justify-center">
                  <Button
                    onClick={() => setShowAddDay(!showAddDay)}
                    className="bg-primary text-primary-foreground"
                  >
                    + Add New Day
                  </Button>
                  {showSaveButton && (
                    <Button onClick={handleSaveAll} className="bg-green-600 hover:bg-green-700">
                      💾 Save All Changes
                    </Button>
                  )}
                </div>
              )}
        </div>

        {/* Add New Day Form */}
        {showAddDay && isEditMode && (
          <div className="mb-8 p-6 border rounded-lg bg-muted/50">
            <h3 className="text-lg font-semibold mb-4">Add New Day</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Title</label>
                <Input
                  value={newDayTitle}
                  onChange={(e) => setNewDayTitle(e.target.value)}
                  placeholder="Enter day title..."
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Description</label>
                <Textarea
                  value={newDayDescription}
                  onChange={(e) => setNewDayDescription(e.target.value)}
                  placeholder="Enter day description..."
                  className="min-h-[100px]"
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={handleAddNewDay}>
                  Add Day
                </Button>
                <Button variant="outline" onClick={() => setShowAddDay(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className="relative pl-20 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Circle marker */}
                <div className="absolute left-6 w-5 h-5 rounded-full bg-primary border-4 border-white shadow-soft"></div>

                <div className="bg-card rounded-xl p-6 shadow-soft hover-lift">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">
                      Day {item.day}
                    </Badge>
                    {isEditMode && item.isEditable && (
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEditStart(item.day, item.description, item.title)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setShowMediaUpload(showMediaUpload === item.day ? null : item.day)}
                        >
                          Add Media
                        </Button>
                      </div>
                    )}
                  </div>
                  
                  {editingDay === item.day ? (
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block">Title</label>
                        <Input
                          value={editTitle}
                          onChange={(e) => setEditTitle(e.target.value)}
                          placeholder="Enter title..."
                          className="mb-2"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Description</label>
                        <Textarea
                          value={editDescription}
                          onChange={(e) => setEditDescription(e.target.value)}
                          className="min-h-[100px]"
                          placeholder="Enter your description..."
                        />
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" onClick={() => handleEditSave(item.day)}>
                          Save
                        </Button>
                        <Button size="sm" variant="outline" onClick={handleEditCancel}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                        {item.description}
                      </p>
                    </>
                  )}

                  {/* Media Upload */}
                  {isEditMode && showMediaUpload === item.day && (
                    <div className="mt-4 p-4 border rounded-lg bg-muted/50">
                      <Input
                        type="file"
                        accept="image/*,video/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            handleMediaUpload(item.day, file);
                          }
                        }}
                        className="mb-2"
                      />
                      <p className="text-xs text-muted-foreground">
                        Upload photos or videos to enhance your build journey
                      </p>
                    </div>
                  )}

                  {/* LinkedIn Embeds - Show first */}
                  {item.assetEmbed && item.assetType === "link" && (
                    <div className="mt-4">
                      <a 
                        href={item.assetEmbed} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm"
                      >
                        View LinkedIn Post →
                      </a>
                    </div>
                  )}
                  {item.assetEmbed && item.assetType === "iframe" && (
                    <div className="mt-4" dangerouslySetInnerHTML={{ __html: item.assetEmbed }} />
                  )}

                  {/* Media Assets - Show below embeds */}
                  {item.mediaAssets && item.mediaAssets.length > 0 && (
                    <div className="mt-4 space-y-3">
                      {item.mediaAssets.map((media) => (
                        <div key={media.id} className="relative">
                          {media.type === 'image' ? (
                            <img 
                              src={media.url} 
                              alt={media.caption || 'Media asset'} 
                              className="w-full max-w-[504px] h-auto rounded-lg border"
                            />
                          ) : (
                            <video 
                              src={media.url} 
                              controls 
                              className="w-full max-w-[504px] h-auto rounded-lg border"
                            />
                          )}
                          {media.caption && (
                            <p className="text-xs text-muted-foreground mt-1">{media.caption}</p>
                          )}
                          {isEditMode && item.isEditable && (
                            <Button
                              variant="destructive"
                              size="sm"
                              className="absolute top-2 right-2"
                              onClick={() => removeMediaAsset(item.day, media.id)}
                            >
                              ×
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildTimeline;
