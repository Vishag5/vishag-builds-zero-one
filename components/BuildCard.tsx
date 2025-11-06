import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface BuildCardProps {
  title: string;
  subtitle: string;
  description: string;
  outcome: string;
  images: string[];
  imageAlts: string[];
  ctaText: string;
  ctaAction: () => void;
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
}: BuildCardProps) => {
  return (
    <div className="bg-card rounded-xl p-8 shadow-soft hover-lift">
      <h3 className="text-3xl font-bold mb-2">{title}</h3>
      <p className="text-lg text-muted-foreground mb-6">{subtitle}</p>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={imageAlts[index]}
            className="rounded-lg w-full h-48 object-cover"
          />
        ))}
      </div>

      <p className="text-base mb-4 leading-relaxed">{description}</p>

      <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-6">
        <p className="text-sm font-semibold text-accent-foreground">
          {outcome}
        </p>
      </div>

      <Button
        onClick={ctaAction}
        variant="outline"
        className="border-primary text-primary hover:bg-primary/10 group"
      >
        {ctaText}
        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </Button>
    </div>
  );
};

export default BuildCard;
