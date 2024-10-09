import QuizSkeleton from '@/components/quizSkeleton';
import QuizCard from '@/features/quiz/components/QuizCard';
import { useQuiz } from '@/features/quiz/hooks/useQuiz';

const Quiz = () => {
  const { quiz, loading } = useQuiz();
  if (loading) return <QuizSkeleton />;
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      {quiz && <QuizCard quiz={quiz} />}
    </div>
  );
};

export default Quiz;
