export const getQuiz = async () => {
  try {
    const response = await fetch(
      'https://opentdb.com/api.php?amount=10&category=9&type=multiple'
    );
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch quiz data');
  }
};

export const getQuestionIdx = () => {
  return localStorage.getItem('currentQuestionIndex');
};

export const getAnswers = () => {
  return localStorage.getItem('answers');
};

export const updateAnswer = (updatedAnswers: { [x: number]: string }) => {
  return localStorage.setItem('answers', JSON.stringify(updatedAnswers));
};

export const getSavedTimeLeft = () => {
  return localStorage.getItem('timeLeft');
};

export const setNextIndex = (nextIndex: number) => {
  return localStorage.setItem('currentQuestionIndex', nextIndex.toString());
};

export const setSavedTimeLeft = (timeLeft: number) => {
  return localStorage.setItem('timeLeft', timeLeft.toString());
};

export const resetQuiz = () => {
  localStorage.removeItem('currentQuestionIndex');
  localStorage.removeItem('answers');
  localStorage.removeItem('timeLeft');
};

export const setHighScore = ({
  score,
  username,
}: {
  score: number;
  username: string;
}) => {
  const highScores = getHighScores();
  const existingUser = highScores.find(
    (entry: { score: number; username: string }) => entry.username === username
  );

  if (existingUser && existingUser.score >= score) {
    return;
  }

  const newHighScores = existingUser
    ? highScores.map((entry: { score: number; username: string }) =>
        entry.username === username ? { ...entry, score } : entry
      )
    : [...highScores, { score, username }];

  localStorage.setItem('highScores', JSON.stringify(newHighScores));
};

export const getHighScores = () => {
  return JSON.parse(localStorage.getItem('highScores') || '[]');
};
