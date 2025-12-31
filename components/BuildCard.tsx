import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
  ctaText?: string;
  ctaAction?: () => void;
  secondaryCtaText?: string;
  secondaryCtaAction?: () => void;
  mediaAssets?: MediaAsset[];
  isEditable?: boolean;
}

const BuildCard = ({
  title,
  subtitle,
  description,
  outcome,
  images,
  imageAlts,
  ctaText,
  ctaAction,
  secondaryCtaText,
  secondaryCtaAction,
  mediaAssets = [],
}: BuildCardProps) => {
  return (
    <div className="bg-card rounded-xl p-8 shadow-soft hover-lift">
      <div className="flex justify-between items-start mb-6">
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="prose prose-neutral max-w-none mb-6">
        <p className="text-base leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>

      {/* Media Assets */}
      {mediaAssets && mediaAssets.length > 0 && (
        <div className="mb-6">
          <div className="grid gap-4">
            {mediaAssets.map((media) => (
              <div key={media.id} className="relative">
                {media.type === 'image' ? (
                  <img
                    src={media.url}
                    alt={media.caption || 'Media asset'}
                    className="w-full h-auto rounded-lg border"
                  />
                ) : media.type === 'video' ? (
                  <video
                    src={media.url}
                    controls
                    className="w-full h-auto rounded-lg border"
                  />
                ) : media.type === 'linkedin' ? (
                  <div
                    className="w-full rounded-lg border overflow-hidden"
                    dangerouslySetInnerHTML={{ __html: media.url }}
                  />
                ) : media.type === 'pdf' ? (
                  <div className="border rounded-lg p-4 bg-muted/50">
                    <p className="text-sm font-medium mb-2">PDF Document:</p>
                    <a
                      href={media.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm"
                    >
                      {media.caption || 'View PDF'} →
                    </a>
                  </div>
                ) : null}
                {media.caption && media.type !== 'pdf' && (
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    {media.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Legacy images fallback */}
      {images && images.length > 0 && mediaAssets.length === 0 && (
        <div className="mb-6">
          <div className="grid gap-4 md:grid-cols-2">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={imageAlts[index] || `Build image ${index + 1}`}
                className="w-full h-auto rounded-lg border"
              />
            ))}
          </div>
        </div>
      )}

      <div className="border-t pt-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-foreground mb-1">Outcome</p>
            <p className="text-sm text-muted-foreground whitespace-pre-line">
              {outcome}
            </p>
          </div>
          
          <div className="flex gap-3 flex-shrink-0">
            {secondaryCtaText && secondaryCtaAction && (
              <Button variant="outline" onClick={secondaryCtaAction}>
                {secondaryCtaText}
              </Button>
            )}
            {ctaText && ctaAction && (
              <Button onClick={ctaAction}>
                {ctaText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildCard;