import { useCallback, useEffect, useMemo, useState } from 'react';
import { HighScores, Quiz, QuizQuestion } from '../types/quizTypes';
import {
  getAnswers,
  getHighScores,
  getQuestionIdx,
  getQuiz,
  getSavedTimeLeft,
  resetQuiz,
  setHighScore,
  setNextIndex,
  setSavedTimeLeft,
  updateAnswer,
} from '../services/quizService';
import { getLoggedInUser } from '@/features/auth/services/authService';

export const initialTime = 10;

export const useQuiz = () => {
  const [quiz, setQuiz] = useState<Quiz[] | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchQuiz = async () => {
    try {
      const storedQuiz = localStorage.getItem('quiz');
      if (storedQuiz) {
        setQuiz(JSON.parse(storedQuiz));
        setLoading(false);
        return;
      }

      const data = await getQuiz();
      localStorage.setItem('quiz', JSON.stringify(data.results));
      setQuiz(data.results);
    } catch (error) {
      console.error('Error when fetching quiz: ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchQuiz();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return { quiz, loading };
};

export const useQnA = (quiz: QuizQuestion[]) => {
  const user = getLoggedInUser();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(() => {
    const savedIndex = getQuestionIdx();
    return savedIndex ? parseInt(savedIndex) : 0;
  });

  const [answers, setAnswers] = useState<Record<number, string>>(() => {
    const savedAnswers = getAnswers();
    return savedAnswers ? JSON.parse(savedAnswers) : {};
  });

  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  const { timeLeft, setTimeLeft } = useTimer();

  const handleAnswer = (answer: string) => {
    const updatedAnswers = { ...answers, [currentQuestionIndex]: answer };
    setAnswers(updatedAnswers);
    updateAnswer(updatedAnswers);

    if (currentQuestionIndex < quiz.length - 1) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      setNextIndex(nextIndex);
    } else {
      result();
      setShowResult(true);
    }
  };

  const result = useCallback(() => {
    let correctScore = 0;
    let wrongCount = 0;

    quiz.forEach((q, i) => {
      if (answers[i] === q.correct_answer) {
        correctScore += 10;
      } else {
        wrongCount += 1;
      }
    });

    localStorage.removeItem('quiz');
    setScore(correctScore);
    setWrongAnswers(wrongCount);
    setHighScore({ score: correctScore, username: user?.username || '' });
  }, [quiz, answers, user]);

  const proggressValue = (timeLeft / initialTime) * 100;

  const currentQuestion = quiz[currentQuestionIndex];
  const options = useMemo(() => {
    return [
      ...currentQuestion.incorrect_answers,
      currentQuestion.correct_answer,
    ].sort(() => Math.random() - 0.5);
  }, [currentQuestion]);

  useEffect(() => {
    if (timeLeft <= 0 || showResult) {
      setSavedTimeLeft(initialTime);
      result();
      resetQuiz();
      setShowResult(true);
    }
    const timerId = setTimeout(() => {
      const newTimeLeft = timeLeft - 1;
      setTimeLeft(newTimeLeft);
      setSavedTimeLeft(newTimeLeft);
    }, 1000);
    return () => clearTimeout(timerId);
  }, [timeLeft, result, showResult, setShowResult, setTimeLeft]);

  return {
    currentQuestionIndex,
    answers,
    showResult,
    score,
    wrongAnswers,
    handleAnswer,
    proggressValue,
    currentQuestion,
    options,
  };
};

export const useTimer = () => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const savedTimeLeft = getSavedTimeLeft();
    return savedTimeLeft ? parseInt(savedTimeLeft) : initialTime;
  });

  return {
    timeLeft,
    setTimeLeft,
  };
};

export const useHighScores = () => {
  const highScores: HighScores[] = getHighScores();
  return { highScores };
};
