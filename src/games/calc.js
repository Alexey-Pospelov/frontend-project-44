// eslint-disable-next-line import/no-absolute-path
import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('What is the result of the expression?');
  const operators = '+*-';

  const calcAnswer = (x, y, operator) => {
    switch (operator) {
      case '+': return x + y;
      case '*': return x * y;
      case '-': return x - y;
      default: return null;
    }
  };

  for (let i = 0; i < 3; i += 1) {
    const getRandomNumber = (max, min) => Math.floor(Math.random() * (max - min + 1) + min);
    const num1 = getRandomNumber(0, 10);
    const num2 = getRandomNumber(0, 10);
    const operator = operators[getRandomNumber(0, operators.length - 1)];
    const question = `${num1} ${operator} ${num2}`;
    const answer = String(calcAnswer(num1, num2, operator));

    const query = `Question: ${question}`;
    console.log(query);

    const userAnswer = readlineSync.question('Your answer: ');
    const errorMessage = `${userAnswer} is wrong answer ;(. Correct answer was ${answer}. Let's try again, ${userName}!`;

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(errorMessage);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
