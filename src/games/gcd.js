// eslint-disable-next-line import/no-absolute-path
import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  const findGcd = (x, y) => {
    let a = x;
    let b = y;
    while (a !== 0 && b !== 0) {
      if (a > b) {
        a %= b;
      } else {
        b %= a;
      }
    }
    return a + b;
  };

  for (let i = 0; i < 3; i += 1) {
    const getRandomNumber = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);
    const num1 = getRandomNumber(0, 100);
    const num2 = getRandomNumber(0, 100);
    const question = `${num1} ${num2}`;
    const answer = String(findGcd(num1, num2));

    const query = `Question: ${question}`;
    console.log(query);

    const userAnswer = readlineSync.question('Your answer: ');
    const errorMessage = `"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}". Let's try again, ${userName}!`;

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(errorMessage);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
