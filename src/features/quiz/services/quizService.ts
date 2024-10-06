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
