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
  ctaText?: string;
  ctaAction?: () => void;
  secondaryCtaText?: string;
  secondaryCtaAction?: () => void;
  isEditable?: boolean;
  index?: number;
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
  secondaryCtaText,
  secondaryCtaAction,
  isEditable = false,
  index = 0,
}: BuildCardProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxContent, setLightboxContent] = useState<{url: string, type: string, caption?: string} | null>(null);
  const carouselApi = useRef<{scrollTo: (index: number) => void} | null>(null);

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
      // Prioritize video if it exists, otherwise start exactly at index 0 (the beginning)
      const videoIndex = mediaAssets.findIndex(asset => asset.type === 'video');
      const targetIndex = videoIndex !== -1 ? videoIndex : 0;

      setTimeout(() => {
        carouselApi.current?.scrollTo(targetIndex);
      }, 100);
    }
  }, [mediaAssets]);

  return (
    <div className="bg-card rounded-2xl p-6 sm:p-8 md:p-10 shadow-soft border hover-lift flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      
      {/* Media Column (60%) */}
      <div className={`col-span-12 lg:col-span-7 w-full h-full flex items-center ${index % 2 === 0 ? 'lg:order-last' : 'lg:order-first'}`}>
        { (images.length > 0 || mediaAssets?.length > 0) && (
          <div className="w-full">
          <Carousel
            opts={{ loop: true }}
            className="w-full"
            setApi={(api: {scrollTo: (index: number) => void} | null) => {
              carouselApi.current = api;
            }}
          >
            <CarouselContent className="flex">
              {/* Render images as carousel items */}
              {images.map((image, index) => (
                <CarouselItem key={`img-${index}`} className="basis-full pl-4">
                  <div
                    className="relative w-full h-[400px] lg:h-[480px] cursor-pointer group"
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
                <CarouselItem key={asset.id} className="basis-full pl-4">
                  <div
                    className="relative w-full h-[400px] lg:h-[480px] cursor-pointer group"
                    onClick={() => openLightbox(asset.url, asset.type, asset.caption)}
                  >
                    {asset.type === 'linkedin' ? (
                      <div className="w-full h-full overflow-hidden rounded-lg">
                        <LinkedInEmbed url={asset.url} className="w-full h-full" />
                      </div>
                    ) : asset.type === 'pdf' ? (
                      <div className="w-full h-full rounded-2xl overflow-hidden border bg-white shadow-sm flex flex-col relative group">
                        <div className="absolute inset-0 z-10 hidden group-hover:block bg-black/5 transition-colors cursor-pointer" />
                        <iframe
                          src={`${asset.url}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
                          className="w-full h-full pointer-events-none"
                          title={asset.caption}
                          scrolling="no"
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
      </div>

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
              <div className="w-full h-[85vh] md:h-[90vh] cursor-pointer" onClick={closeLightbox}>
                <iframe
                  src={`${lightboxContent.url}#view=Fit`}
                  className="w-full h-full rounded-xl bg-white shadow-2xl"
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

      {/* Text Column (40%) */}
      <div className={`col-span-12 lg:col-span-5 flex flex-col justify-center h-full w-full ${index % 2 === 0 ? 'lg:order-first' : 'lg:order-last'}`}>
        <h3 className="text-3xl lg:text-4xl font-bold mb-3">{title}</h3>
        <p className="text-lg text-muted-foreground mb-6">{subtitle}</p>
        
        <p className="text-[1rem] text-slate-600 leading-relaxed mb-8">{description}</p>

        <div className="bg-accent/10 border border-accent/20 rounded-xl p-5 mb-8">
          <p className="text-sm font-semibold text-accent-foreground flex items-start gap-2">
            <span className="text-lg leading-none block pt-0.5">⚡</span>
            <span className="leading-relaxed">{outcome}</span>
          </p>
        </div>

        <div className="flex gap-4 flex-wrap mt-auto">
          {secondaryCtaText && secondaryCtaAction && (
            <Button
              onClick={secondaryCtaAction}
              variant="outline"
              className="rounded-full px-6"
            >
              {secondaryCtaText}
            </Button>
          )}
          {ctaText && ctaAction && (
            <Button
              onClick={ctaAction}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 rounded-full px-6 group shadow-sm"
            >
              {ctaText}
              <ExternalLink className="ml-2 h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuildCard;
