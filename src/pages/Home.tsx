import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/features/auth/hooks/authStore';
import AuthProviders from '@/providers/AuthProviders';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/quiz/${user?.username}`);
  };
  return (
    <AuthProviders>
      <div className="w-full my-20 min-h-screen flex flex-col justify-center items-center space-y-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r to-black from-indigo-300 bg-clip-text text-transparent hover:text-black transition-colors duration-500 ease-in-out">
          Quizzyy
        </h1>
        {/* <h1 className="text-4xl mt-8 underline font-mono decoration-primary ">
            Top Score
          </h1> */}
        {/* <HighScoreDisplay users={users?.data} /> */}
        {/* <Link to={`/quiz/${user?.username}`}>
          <button className="btn btn-secondary rounded-full w-1/2 mt-10">
            Let&apos;s Start
          </button>
        </Link> */}
        <Button size="lg" onClick={handleClick}>
          Let&apos;s Start
        </Button>
      </div>
    </AuthProviders>
  );
};

export default Home;
