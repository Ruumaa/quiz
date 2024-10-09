import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useHighScores } from '../hooks/useQuiz';

const HighScoresTable = () => {
  const { highScores } = useHighScores();

  return (
    <Table className="mx-auto w-full text-sm md:text-base text-center ">
      <TableHeader>
        <TableRow>
          <TableHead className="font-medium font-mono text-center text-black">
            No
          </TableHead>
          <TableHead className="font-medium font-mono text-center text-black">
            Username
          </TableHead>
          <TableHead className="font-medium font-mono text-center text-black">
            High Score
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {highScores
          .sort((a, b) => b.score - a.score)
          .map((score, i) => (
            <TableRow key={i}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{score.username}</TableCell>
              <TableCell>{score.score}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default HighScoresTable;
