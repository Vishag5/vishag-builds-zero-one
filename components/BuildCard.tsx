"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";
import LinkedInEmbed from "./LinkedInEmbed";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState, useEffect, useRef } from "react";

interface MediaAsset {
  id: string;
  type: 'image' | 'video' | 'linkedin' | 'pdf';
  url: string;
  caption?: string;
}

interface BuildCardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  outcome: string;
  images: string[];
  imageAlts: string[];
  mediaAssets?: MediaAsset[];
  ctaText: string;
  ctaAction: () => void;
  isEditable?: boolean;
}

const BuildCard = ({
  id,
  title,
  subtitle,
  description,
  outcome,
  images = [],
  imageAlts = [],
  mediaAssets = [],
  ctaText,
  ctaAction,
  isEditable = false,
}: BuildCardProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxContent, setLightboxContent] = useState<{url: string, type: string, caption?: string} | null>(null);
  const carouselApi = useRef<any>(null);

  const openLightbox = (url: string, type: string, caption?: string) => {
    setLightboxContent({ url, type, caption });
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxContent(null);
  };

  // Find the index of the video file to set as the default view
  useEffect(() => {
    if (carouselApi.current && mediaAssets) {
      // Find the index of the first video asset
      const videoIndex = mediaAssets.findIndex(asset => asset.type === 'video');

      // If there's a video and the carousel is ready, go to that slide
      // If no video, just go to the second slide (index 1) as requested
      const targetIndex = videoIndex !== -1 ? videoIndex : 1;

      // Wait a moment for the carousel to initialize fully
      setTimeout(() => {
        carouselApi.current?.scrollTo(targetIndex);
      }, 100);
    }
  }, [mediaAssets]);

  return (
    <div className="bg-card rounded-xl p-4 sm:p-6 md:p-8 shadow-soft hover-lift">
      <h3 className="text-2xl sm:text-3xl font-bold mb-2">{title}</h3>
      <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">{subtitle}</p>

      {/* Media carousel - only render if there's content */}
      { (images.length > 0 || mediaAssets?.length > 0) && (
        <div className="mb-4 sm:mb-6">
          <Carousel
            opts={{ loop: true }}
            className="w-full"
            setApi={(api) => {
              carouselApi.current = api;
            }}
          >
            <CarouselContent className="flex">
              {/* Render images as carousel items */}
              {images.map((image, index) => (
                <CarouselItem key={`img-${index}`} className="basis-1/2">
                  <div
                    className="relative aspect-video cursor-pointer"
                    onClick={() => openLightbox(image, 'image')}
                  >
                    <img
                      src={image}
                      className="rounded-lg w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}

              {/* Render media assets as carousel items */}
              {mediaAssets?.map((asset) => (
                <CarouselItem key={asset.id} className="basis-1/2">
                  <div
                    className="relative aspect-video cursor-pointer"
                    onClick={() => openLightbox(asset.url, asset.type, asset.caption)}
                  >
                    {asset.type === 'linkedin' ? (
                      <div className="w-full h-full overflow-hidden rounded-lg">
                        <LinkedInEmbed url={asset.url} className="w-full h-full" />
                      </div>
                    ) : asset.type === 'pdf' ? (
                      <div className="w-full h-full rounded-lg overflow-hidden border">
                        <iframe
                          src={asset.url}
                          className="w-full h-full"
                          title={asset.caption}
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full">
                        {asset.type === 'image' ? (
                          <img
                            src={asset.url}
                            className="rounded-lg w-full h-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <video
                            src={asset.url}
                            controls
                            className="rounded-lg w-full h-full object-cover"
                          />
                        )}
                      </div>
                    )}
                    {asset.caption && (
                      <p className="text-xs text-muted-foreground text-center absolute bottom-1 left-0 right-0 bg-black/50 text-white py-1 rounded-b-lg">
                        {asset.caption}
                      </p>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
          </Carousel>
        </div>
      )}

      {/* Lightbox Overlay */}
      {lightboxOpen && lightboxContent && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              onClick={closeLightbox}
              size="icon"
              variant="secondary"
              className="absolute top-2 right-2 rounded-full bg-white/30 hover:bg-white/50 z-10"
            >
              <X className="h-4 w-4" />
            </Button>

            {lightboxContent.type === 'image' && (
              <img
                src={lightboxContent.url}
                className="w-full h-auto max-h-[75vh] object-contain rounded-lg cursor-pointer"
                loading="lazy"
                onClick={closeLightbox}
              />
            )}

            {lightboxContent.type === 'video' && (
              <video
                src={lightboxContent.url}
                controls
                className="w-full h-auto max-h-[75vh] object-contain rounded-lg cursor-pointer"
                onClick={closeLightbox}
              />
            )}

            {lightboxContent.type === 'pdf' && (
              <div className="w-full h-[75vh] cursor-pointer" onClick={closeLightbox}>
                <iframe
                  src={lightboxContent.url}
                  className="w-full h-full rounded-lg"
                  title={lightboxContent.caption}
                />
              </div>
            )}

            {lightboxContent.type === 'linkedin' && (
              <div className="w-full h-[75vh] cursor-pointer" onClick={closeLightbox}>
                <LinkedInEmbed url={lightboxContent.url} className="w-full h-full rounded-lg" />
              </div>
            )}

            {lightboxContent.caption && (
              <p className="text-sm text-white text-center mt-2 bg-black/50 p-2 rounded">
                {lightboxContent.caption}
              </p>
            )}
          </div>
        </div>
      )}

      <p className="text-base mb-4 leading-relaxed">{description}</p>

      <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-6">
        <p className="text-sm font-semibold text-accent-foreground">
          {outcome}
        </p>
      </div>

      {ctaText && (
        <Button
          onClick={ctaAction}
          variant="outline"
          className="border-primary text-primary hover:bg-primary/10 group"
        >
          {ctaText}
          <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Button>
      )}
    </div>
  );
};

export default BuildCard;
