export interface Quiz {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export interface QuizQuestion {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface HighScores {
  username: string;
  score: number;
}
