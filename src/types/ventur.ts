export interface Question {
  id: string;
  text: string;
  tag: string;
}

export interface Pillar {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  questions: Question[];
}

export interface Answer {
  questionId: string;
  value: boolean; // true for "sim", false for "não"
}

export interface PillarProgress {
  pillarId: string;
  yesCount: number;
  noCount: number;
  totalQuestions: number;
}
