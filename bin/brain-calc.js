#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getRandomInt from '../src/randomInt.js';
import userName from '../src/cli.js';

const mathOperationsArray = ['+', '-', '*'];

const generateRandomMathOperation = (array) => {
  const randomNum = Math.floor(Math.random() * array.length);
  return array[randomNum];
};

console.log('What is the result of the expression?');
let correctAnswer = 0;
while (correctAnswer < 3) {
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
  console.log(typeof (answer));
  console.log(typeof (userAnswer));

  if (userAnswer === answer.toString()) {
    console.log('Correct');
    correctAnswer += 1;
  } else if (userAnswer !== answer.toString()) {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${answer}'.\n Let's try again, ${userName}!`);
  }
}
if (correctAnswer === 3) {
  console.log(`Congratulations, ${userName}!`);
}
