import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useVentur } from "@/contexts/VenturContext";
import * as LucideIcons from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PillarCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const PillarCard: React.FC<PillarCardProps> = ({ id, title, description, icon, color }) => {
  const { getPillarProgress } = useVentur();
  const navigate = useNavigate();
  const progress = getPillarProgress(id);
  
  // Dynamically get the icon component
  const Icon = (LucideIcons as any)[icon] || LucideIcons.Circle;
  
  const totalAnswered = progress.yesCount + progress.noCount;
  const percentageComplete = progress.totalQuestions > 0 
    ? (totalAnswered / progress.totalQuestions) * 100 
    : 0;

  const handleClick = () => {
    navigate(`/pillar/${id}`);
  };

  return (
    <Card 
      className="group relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-soft hover:-translate-y-1 animate-fade-in"
      onClick={handleClick}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
      
      <div className="relative p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className={`p-3 rounded-2xl bg-gradient-to-br ${color} shadow-button`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          {totalAnswered > 0 && (
            <Badge variant="secondary" className="font-medium">
              {totalAnswered}/{progress.totalQuestions}
            </Badge>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {totalAnswered > 0 && (
          <div className="space-y-2">
            <Progress value={percentageComplete} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span className="text-primary font-medium">{progress.yesCount} sim</span>
              <span>{progress.noCount} não</span>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default PillarCard;
