import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

interface QuestionCardProps {
  question: string;
  tag: string;
  onAnswer: (answer: boolean) => void;
  currentAnswer?: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, tag, onAnswer, currentAnswer }) => {
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-soft animate-scale-in">
      <div className="p-8 md:p-12 space-y-8">
        <div className="space-y-4">
          <Badge variant="secondary" className="text-sm font-medium">
            {tag}
          </Badge>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground leading-relaxed">
            {question}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button
            size="lg"
            variant={currentAnswer === true ? "default" : "outline"}
            onClick={() => onAnswer(true)}
            className="h-16 text-lg font-medium transition-all duration-300 hover:shadow-button group"
          >
            <Check className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            Sim
          </Button>
          
          <Button
            size="lg"
            variant={currentAnswer === false ? "default" : "outline"}
            onClick={() => onAnswer(false)}
            className="h-16 text-lg font-medium transition-all duration-300 hover:shadow-button group"
          >
            <X className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            Não
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default QuestionCard;
