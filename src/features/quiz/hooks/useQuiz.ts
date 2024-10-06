import { useEffect, useState } from 'react';
import { Quiz } from '../types/quizTypes';
import { getQuiz } from '../services/quizService';

export const useQuiz = () => {
  const [quiz, setQuiz] = useState<Quiz[] | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchQuiz = async () => {
    try {
      const data = await getQuiz();
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
