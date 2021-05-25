import readlineSync from 'readline-sync';
import getRandomInt from '../randomInt.js';

const task = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};
const game = () => {
  const showInt1 = getRandomInt(1, 50);
  const showInt2 = getRandomInt(1, 50);
  console.log(`Question: ${showInt1} ${showInt2}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const greatDivisor = gcd(showInt1, showInt2);
  if (userAnswer === greatDivisor.toString()) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${greatDivisor}`);
  return false;
};

export { task, game };
