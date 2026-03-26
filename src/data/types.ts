export interface MiniTestQuestion {
  id: string;
  section: 'Reading' | 'Writing' | 'Math';
  domain: string;
  skill: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  passage?: string;
  question: string;
  options: { id: string; text: string }[];
  correctAnswer: string;
  explanation: string;
}

export interface UserAnswer {
  questionId: string;
  selectedAnswer: string;
  isCorrect: boolean;
}

export interface SectionResult {
  section: 'Reading' | 'Writing' | 'Math';
  correct: number;
  total: number;
  missedSkills: string[];
}
