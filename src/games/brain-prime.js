import readlineSync from 'readline-sync';
import randomInt from '../randomInt.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (x) => {
  if (x < 2) return false;

  for (let i = x - 1; i > 1; i -= 1) {
    if (x % i === 0) {
      return false;
    }
  }

  return true;
};

const game = () => {
  const showInt = randomInt(2, 71);
  console.log(`Question: ${showInt}`);
  const userAnswer = readlineSync.question('Your answer: ');
  switch (userAnswer) {
    case 'yes':
      if (isPrime(showInt)) {
        console.log('Correct!');
        return true;
      }
      console.log('"yes" is wrong answer ;(. Correct answer was "no".');
      return false;
    case 'no':
      if (!isPrime(showInt)) {
        console.log('Correct!');
        return true;
      }
      console.log('"no" is wrong answer ;(. Correct answer was "yes".');
      return false;
    default:
      console.log(`${userAnswer} is wrong answer ;(.`);
      return false;
  }
};

export { task, game };
