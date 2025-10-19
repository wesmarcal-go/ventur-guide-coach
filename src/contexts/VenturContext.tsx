import React, { createContext, useContext, useState, ReactNode } from "react";
import { Answer, PillarProgress } from "@/types/ventur";
import { pillars } from "@/data/pillars";

interface VenturContextType {
  answers: Answer[];
  addAnswer: (answer: Answer) => void;
  getAnswerForQuestion: (questionId: string) => number | undefined;
  getPillarProgress: (pillarId: string) => PillarProgress;
  resetAnswers: () => void;
}

const VenturContext = createContext<VenturContextType | undefined>(undefined);

export const VenturProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [answers, setAnswers] = useState<Answer[]>([]);

  const addAnswer = (answer: Answer) => {
    setAnswers((prev) => {
      const existing = prev.findIndex((a) => a.questionId === answer.questionId);
      if (existing >= 0) {
        const updated = [...prev];
        updated[existing] = answer;
        return updated;
      }
      return [...prev, answer];
    });
  };

  const getAnswerForQuestion = (questionId: string): number | undefined => {
    const answer = answers.find((a) => a.questionId === questionId);
    return answer?.value;
  };

  const getPillarProgress = (pillarId: string): PillarProgress => {
    const pillar = pillars.find((p) => p.id === pillarId);
    if (!pillar) {
      return { pillarId, yesCount: 0, noCount: 0, totalQuestions: 0 };
    }

    const questionIds = pillar.questions.map((q) => q.id);
    const pillarAnswers = answers.filter((a) => questionIds.includes(a.questionId));
    
    // Indicador acende quando pontuação ≥ 2
    const yesCount = pillarAnswers.filter((a) => a.value >= 2).length;
    const noCount = pillarAnswers.filter((a) => a.value < 2).length;

    return {
      pillarId,
      yesCount,
      noCount,
      totalQuestions: pillar.questions.length,
    };
  };

  const resetAnswers = () => {
    setAnswers([]);
  };

  return (
    <VenturContext.Provider
      value={{ answers, addAnswer, getAnswerForQuestion, getPillarProgress, resetAnswers }}
    >
      {children}
    </VenturContext.Provider>
  );
};

export const useVentur = () => {
  const context = useContext(VenturContext);
  if (!context) {
    throw new Error("useVentur must be used within a VenturProvider");
  }
  return context;
};
