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
  value: number; // 0 to 3 (0="não", 3="sim", ≥2 acende indicador)
}

export interface PillarProgress {
  pillarId: string;
  yesCount: number;
  noCount: number;
  totalQuestions: number;
}
