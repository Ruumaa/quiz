import Loading from '@/components/loading';
import QuizCard from '@/features/quiz/components/quizCard';
import { useQuiz } from '@/features/quiz/hooks/useQuiz';
import { useParams } from 'react-router-dom';

const Quiz = () => {
  const { username } = useParams();
  const { quiz, loading } = useQuiz();
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <h1>Welcome to the quiz, {username}!</h1>
      {quiz && <QuizCard quiz={quiz} />}
    </div>
  );
};

export default Quiz;
