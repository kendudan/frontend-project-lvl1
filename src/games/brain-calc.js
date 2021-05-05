import readlineSync from 'readline-sync';
import getRandomInt from '../randomInt.js';

const mathOperationsArray = ['+', '-', '*'];

const generateRandomMathOperation = (array) => {
  const randomNum = Math.floor(Math.random() * array.length);
  return array[randomNum];
};

const task = 'What is the result of the expression?';

const game = () => {
  const firstInt = getRandomInt(1, 50);
  const secondInt = getRandomInt(1, 50);
  const mathOperation = generateRandomMathOperation(mathOperationsArray);

  console.log(`Question: ${firstInt} ${mathOperation} ${secondInt}`);
  const userAnswer = readlineSync.question('Your answer: ');
  let answer;
  switch (mathOperation) {
    case '+':
      answer = firstInt + secondInt;
      break;
    case '-':
      answer = firstInt - secondInt;
      break;
    case '*':
      answer = firstInt * secondInt;
      break;
    default:
      break;
  }

  if (userAnswer === answer.toString()) {
    console.log('Correct');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${answer}'.`);
  return false;
};

export { task, game };
