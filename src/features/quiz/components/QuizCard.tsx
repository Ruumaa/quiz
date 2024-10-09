import Result from './Result';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { decode } from 'he';
import { useQnA } from '../hooks/useQuiz';
import { QuizQuestion } from '../types/quizTypes';

const QuizCard = ({ quiz }: { quiz: QuizQuestion[] }) => {
  const {
    currentQuestionIndex,
    answers,
    showResult,
    score,
    wrongAnswers,
    handleAnswer,
    proggressValue,
    currentQuestion,
    options,
  } = useQnA(quiz);

  if (showResult)
    return (
      <Result score={score} wrongAnswers={wrongAnswers} answers={answers} />
    );

  return (
    <>
      <Card className="max-w-xs md:max-w-full md:w-[50vw] md:min-h-[50vh] xl:min-w-[60vw] xl:min-h-[60vh] flex flex-col justify-center items-center rounded-lg backdrop-blur-xl bg-opacity-60 bg-transparent relative">
        <CardHeader className="w-full ">
          <CardTitle className="text-2xl font-bold mt-3 font-mono">
            Question {currentQuestionIndex + 1} of {quiz.length}
          </CardTitle>
          <CardTitle className="text-xl pt-4">
            {decode(currentQuestion.question)}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-4 w-full ">
          {options.map((option) => (
            <Button
              variant="outline"
              size="lg"
              key={option}
              onClick={() => handleAnswer(option)}
              className="w-full justify-start px-3"
            >
              {decode(option)}
            </Button>
          ))}
        </CardContent>
        <Progress value={proggressValue} className="absolute top-0 left-0" />
      </Card>
    </>
  );
};

export default QuizCard;
