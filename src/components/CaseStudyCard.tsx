import { Badge } from "@/components/ui/badge";

interface CaseStudyCardProps {
  logo: string;
  title: string;
  description: string;
  skills: string[];
}

const CaseStudyCard = ({ logo, title, description, skills }: CaseStudyCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-soft hover-lift cursor-pointer">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center text-2xl font-bold gradient-text">
          {logo}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="bg-muted text-muted-foreground"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyCard;
