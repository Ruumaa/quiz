import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Skeleton } from './ui/skeleton';

const QuizSkeleton = () => {
  return (
    <div className="w-full flex items-center justify-center h-screen ">
      <Card className="max-w-xs w-full md:max-w-full md:w-[50vw] md:min-h-[50vh] xl:min-w-[60vw] xl:min-h-[60vh] flex flex-col justify-center items-center rounded-lg backdrop-blur-xl bg-opacity-60 bg-transparent relative">
        <CardHeader className="w-full ">
          <CardTitle className="text-2xl font-bold mt-3 font-mono">
            <Skeleton className="w-2/6 h-10 bg-slate-300" />
          </CardTitle>
          <CardTitle className="text-xl pt-4">
            <Skeleton className="w-3/4  h-10 bg-slate-300" />
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-4 w-full">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton
              key={i}
              className="w-full h-10 justify-start px-3 bg-slate-300"
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizSkeleton;
