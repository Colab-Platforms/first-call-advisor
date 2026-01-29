import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface CaseStudyCardProps {
  title: string;
  industry: string;
  challenge: string;
  result: string;
  metrics?: string;
}

const CaseStudyCard = ({
  title,
  industry,
  challenge,
  result,
  metrics,
}: CaseStudyCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
            {industry}
          </span>
          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>
        <h4 className="text-lg font-semibold text-foreground mt-3">{title}</h4>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
            Challenge
          </p>
          <p className="text-sm text-foreground">{challenge}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
            Result
          </p>
          <p className="text-sm text-foreground">{result}</p>
        </div>
        {metrics && (
          <div className="pt-3 border-t border-border">
            <p className="text-sm font-semibold text-primary">{metrics}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CaseStudyCard;
