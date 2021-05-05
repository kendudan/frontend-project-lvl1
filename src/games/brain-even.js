import readlineSync from 'readline-sync';
import getRandomInt from '../randomInt.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const game = () => {
  const showInt = getRandomInt(1, 50);
  console.log(`Question:${showInt}`);
  const userAnswer = readlineSync.question('Your answer: ');
  switch (userAnswer) {
    case 'yes':
      if (showInt % 2 === 0) {
        console.log('Correct!');
        return true;
      }
      console.log('"yes" is wrong answer ;(. Correct answer was "no".');
      return false;
    case 'no':
      if (showInt % 2 !== 0) {
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
