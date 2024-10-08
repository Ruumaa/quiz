import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useAuthStore } from '@/features/auth/hooks/authStore';
import AuthProviders from '@/providers/AuthProviders';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/quiz/${user?.username}`);
  };

  const questionIndex = localStorage.getItem('currentQuestionIndex');
  const timeLeft = parseInt(localStorage.getItem('timeLeft') ?? '0', 10);
  const isResume = questionIndex !== null && timeLeft > 0;

  return (
    <AuthProviders>
      <div className="w-full my-20 min-h-screen flex flex-col justify-center items-center ">
        {/* Card */}
        <Card className="max-w-xs w-full  md:max-w-full md:w-[50vw] md:min-h-[50vh] xl:w-[70vw] xl:min-h-[70vh] flex flex-col justify-center items-center space-y-10  rounded-lg backdrop-blur-xl bg-opacity-60 bg-transparent">
          <CardHeader>
            <CardTitle className="text-4xl font-bold bg-gradient-to-r to-black from-indigo-300 bg-clip-text text-transparent hover:text-black transition-colors duration-500 ease-in-out">
              Quizzyy
            </CardTitle>
          </CardHeader>
          <CardContent>{/* Todo Add Leaderboard */}</CardContent>

          <CardFooter>
            <Button size="lg" onClick={handleClick}>
              {isResume ? 'Resume' : "Let's Start"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </AuthProviders>
  );
};

export default Home;
