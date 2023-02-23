// eslint-disable-next-line import/no-absolute-path
import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const isPrime = (number) => {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i <= number / 2; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < 3; i += 1) {
    const getRandomNumber = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);
    const question = getRandomNumber(0, 20);
    const answer = isPrime(question) ? 'yes' : 'no';

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
