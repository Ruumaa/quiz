import Loading from '@/components/loading';
import QuizCard from '@/features/quiz/components/quizCard';
import { useQuiz } from '@/features/quiz/hooks/useQuiz';

const Quiz = () => {
  const { quiz, loading } = useQuiz();
  if (loading) return <Loading />;
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      {quiz && <QuizCard quiz={quiz} />}
    </div>
  );
};

export default Quiz;
