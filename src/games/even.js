// eslint-disable-next-line import/no-absolute-path
import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise anser "no".');

  for (let i = 0; i < 3; i += 1) {
    const getRandomNumber = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);
    const questionNumber = getRandomNumber(0, 50);
    const isEven = () => questionNumber % 2 === 0;

    const query = `Question: ${questionNumber}`;
    console.log(query);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = (isEven(questionNumber) ? 'yes' : 'no');
    const errorMessage = `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}`;

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(errorMessage);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};
