import { Button } from '@/components/ui/button';
import { CircleHelp } from 'lucide-react';
import { FaCheckCircle } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Result = ({
  score,
  wrongAnswers,
  answers,
}: {
  score: number;
  wrongAnswers: number;
  answers: Record<number, string>;
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen items-center justify-center w-full">
      <div className="max-w-xs w-full  md:max-w-2xl md:min-h-[43vh] flex flex-col justify-center items-center rounded-lg backdrop-blur-xl bg-opacity-60 border border-slate-300 relative py-6">
        <h3 className="text-3xl md:text-4xl xl:text-5xl font-bold">
          Quizzyy Summary
        </h3>

        <h3 className="text-lg font-semibold mt-3 md:mt-6 md:text-2xl ">
          You&apos;ve scored{' '}
          <span className="text-lg font-semibold md:text-2xl ">{score}</span>{' '}
          point
        </h3>
        <h2 className="text-xs md:text-lg underline decoration-yellow-400 ">
          {score >= 50 ? 'Congratulations!' : 'Better luck next time!'}
        </h2>
        {/* answers summary */}
        <div className="w-3/4 h-1/4 flex flex-row mx-auto  items-center gap-3 rounded-lg divide-x-2 my-5 md:my-9 whitespace-nowrap">
          <div className="flex items-center flex-col w-1/3">
            <div className="flex items-center gap-1">
              <CircleHelp className="text-indigo-600 size-[1.4rem]" />{' '}
              <span className="text-2xl font-bold">
                {Object.keys(answers).length}
              </span>
              <span className="font-semibold text-xs mt-2">/ 10</span>
            </div>
            <div className="text-xs font-semibold">Answered</div>
          </div>
          <div className="flex items-center flex-col w-1/3">
            <div className="flex flex-row items-center gap-1">
              <FaCheckCircle className="text-green-600 size-5" />{' '}
              <span className="text-2xl font-bold">{score / 10}</span>
            </div>
            <div className="text-xs font-semibold">Correct</div>
          </div>
          <div className="flex items-center flex-col  w-1/3">
            <div className="flex flex-row items-center gap-1">
              <IoMdCloseCircle className="text-red-600 size-6" />{' '}
              <span className="text-2xl font-bold">{wrongAnswers}</span>
            </div>
            <div className="text-xs font-semibold">Wrong</div>
          </div>
        </div>

        <Button
          onClick={() => navigate('/')}
          className=" h-9 px-3 w-1/2 md:h-11 md:px-8"
        >
          Retry
        </Button>
      </div>
    </div>
  );
};

export default Result;
