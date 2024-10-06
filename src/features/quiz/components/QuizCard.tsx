import { useState } from 'react';

interface QuizQuestion {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

const QuizCard = ({ quiz }: { quiz: QuizQuestion[] }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = quiz[currentQuestionIndex];

  // Gabungkan dan acak jawaban
  const options = [
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ].sort(() => Math.random() - 0.5); // Untuk mengacak jawaban

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestionIndex]: answer }));

    // Cek apakah itu jawaban terakhir
    if (currentQuestionIndex < quiz.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowResult(true); // Tampilkan hasil setelah semua pertanyaan dijawab
    }
  };

  // Menampilkan hasil setelah semua pertanyaan dijawab
  if (showResult) {
    return (
      <div>
        <h2>Results</h2>
        <ul>
          {quiz.map((q, index) => (
            <li key={index}>
              {q.question}:{' '}
              {answers[index] === q.correct_answer ? 'Correct' : 'Incorrect'}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Render pertanyaan saat ini dan opsi jawaban
  return (
    <div>
      <h2>{currentQuestion.question}</h2>
      <ul>
        {options.map((option) => (
          <li key={option} onClick={() => handleAnswer(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizCard;
