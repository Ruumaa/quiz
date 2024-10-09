import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import HighScoresTable from '@/features/quiz/components/HighScoresTable';
import {
  getQuestionIdx,
  getSavedTimeLeft,
} from '@/features/quiz/services/quizService';
import AuthProviders from '@/providers/AuthProviders';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/quiz`);
  };

  const questionIndex = getQuestionIdx();
  const timeLeft = parseInt(getSavedTimeLeft() ?? '0', 10);
  const isResume = questionIndex !== null && timeLeft > 0;

  return (
    <AuthProviders>
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        {/* Card */}
        <Card className="max-w-xs w-full  md:max-w-full md:w-[50vw] md:min-h-[50vh] xl:w-[70vw] xl:min-h-[70vh] flex flex-col justify-center items-center rounded-lg backdrop-blur-xl bg-opacity-60 bg-transparent">
          <CardHeader className="max-w-sm md:max-w-2xl text-center">
            <CardTitle className="min-h-16 text-2xl md:text-3xl xl:text-4xl font-bold bg-gradient-to-r to-black from-indigo-300 bg-clip-text text-transparent">
              Challenge Yourself and Reach the Top!
            </CardTitle>
            <CardDescription className="text-xs text-justify md:text-center md:text-sm xl:text-base py-3">
              Test your knowledge and see how you rank against other players.
              Can you beat the high scores and claim the top spot? The clock is
              ticking, and the challenge awaits!
            </CardDescription>
          </CardHeader>
          <CardContent className="w-full md:w-3/4 max-h-64 overflow-y-auto">
            <HighScoresTable />
          </CardContent>

          <CardFooter className="w-full mt-3 md:mt-10">
            <Button size="lg" onClick={handleClick} className="w-1/2 mx-auto">
              {isResume ? 'Resume' : "Let's Start"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </AuthProviders>
  );
};

export default Home;
