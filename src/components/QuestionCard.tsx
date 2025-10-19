import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface QuestionCardProps {
  question: string;
  tag: string;
  onAnswer: (answer: number) => void;
  currentAnswer?: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, tag, onAnswer, currentAnswer }) => {
  const scores = [
    { value: 0, label: "Não" },
    { value: 1, label: "Raramente" },
    { value: 2, label: "Às vezes" },
    { value: 3, label: "Sim" },
  ];

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-elegant animate-scale-in border border-border/50">
      <div className="p-8 md:p-12 space-y-8">
        <div className="space-y-4">
          <Badge variant="secondary" className="text-sm font-medium">
            {tag}
          </Badge>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground leading-relaxed">
            {question}
          </h2>
        </div>

        <div className="space-y-3">
          <div className="grid grid-cols-4 gap-3">
            {scores.map((score) => (
              <Button
                key={score.value}
                size="lg"
                variant={currentAnswer === score.value ? "default" : "outline"}
                onClick={() => onAnswer(score.value)}
                className="h-20 flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:shadow-button group"
              >
                <span className="text-3xl font-bold group-hover:scale-110 transition-transform">
                  {score.value}
                </span>
                <span className="text-xs font-medium opacity-80">
                  {score.label}
                </span>
              </Button>
            ))}
          </div>
          
          <p className="text-sm text-muted-foreground text-center mt-4">
            Escala: 0 (Não) até 3 (Sim)
          </p>
        </div>
      </div>
    </Card>
  );
};

export default QuestionCard;
