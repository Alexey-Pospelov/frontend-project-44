// eslint-disable-next-line import/no-absolute-path
import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');

  const progressionLength = 10;
  const maxHiddenNumberIndex = progressionLength - 1;

  const generateProgression = (firstNumber, progressionStep, length) => {
    const progression = [];
    for (let i = 0; i < length; i += 1) {
      progression.push(firstNumber + progressionStep * i);
    }
    return progression;
  };

  for (let i = 0; i < 3; i += 1) {
    const getRandomNumber = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);
    const hiddenNumberIndex = getRandomNumber(0, maxHiddenNumberIndex);
    const progressionStep = getRandomNumber(0, 10);
    const firstNumber = getRandomNumber(0, 100);
    const progression = generateProgression(firstNumber, progressionStep, progressionLength)
    progression[hiddenNumberIndex] = '..';
    const question = progression.join(' ');
    const answer = String(firstNumber + (progressionStep * hiddenNumberIndex));

    const query = `Question: ${question}`;
    console.log(query);

    const userAnswer = readlineSync.question('Your answer: ');
    const errorMessage = `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'. Let's try again, ${userName}!`;

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(errorMessage);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
