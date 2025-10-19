import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { pillars } from "@/data/pillars";
import { useVentur } from "@/contexts/VenturContext";
import QuestionCard from "@/components/QuestionCard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PillarQuestions = () => {
  const { pillarId } = useParams<{ pillarId: string }>();
  const navigate = useNavigate();
  const { addAnswer, getAnswerForQuestion, getPillarProgress } = useVentur();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const pillar = pillars.find((p) => p.id === pillarId);
  
  useEffect(() => {
    if (!pillar) {
      navigate("/");
    }
  }, [pillar, navigate]);

  if (!pillar) return null;

  const currentQuestion = pillar.questions[currentQuestionIndex];
  const progress = getPillarProgress(pillar.id);
  const currentAnswer = getAnswerForQuestion(currentQuestion.id);
  const progressPercentage = ((currentQuestionIndex + 1) / pillar.questions.length) * 100;

  const handleAnswer = (answer: boolean) => {
    addAnswer({ questionId: currentQuestion.id, value: answer });
    
    // Automatically move to next question after a short delay
    setTimeout(() => {
      if (currentQuestionIndex < pillar.questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      }
    }, 300);
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < pillar.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handleFinish = () => {
    navigate("/");
  };

  const isLastQuestion = currentQuestionIndex === pillar.questions.length - 1;
  const totalAnswered = progress.yesCount + progress.noCount;
  const isComplete = totalAnswered === pillar.questions.length;

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between animate-fade-in">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="gap-2"
            >
              <Home className="w-4 h-4" />
              Voltar à Home
            </Button>
            
            <Badge variant="secondary" className="text-sm">
              {progress.yesCount} sim · {progress.noCount} não
            </Badge>
          </div>

          {/* Pillar Title */}
          <div className="text-center space-y-2 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              {pillar.title}
            </h1>
            <p className="text-muted-foreground">{pillar.description}</p>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2 animate-fade-in">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Questão {currentQuestionIndex + 1} de {pillar.questions.length}</span>
              <span>{Math.round(progressPercentage)}% completo</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>

          {/* Question Card */}
          <div className="py-4">
            <QuestionCard
              question={currentQuestion.text}
              tag={currentQuestion.tag}
              onAnswer={handleAnswer}
              currentAnswer={currentAnswer}
            />
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-4 animate-fade-in">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Anterior
            </Button>

            {isLastQuestion ? (
              <Button
                onClick={handleFinish}
                disabled={!isComplete}
                className="gap-2 shadow-button"
              >
                {isComplete ? "Concluir" : "Responda todas"}
                <Home className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                className="gap-2 shadow-button"
              >
                Próxima
                <ArrowRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PillarQuestions;
