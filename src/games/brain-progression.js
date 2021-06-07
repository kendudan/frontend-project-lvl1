import readlineSync from 'readline-sync';
import randomInt from '../randomInt.js';

const task = 'What number is missing in the progression?';

const game = () => {
  const progression = [];
  const interval = randomInt(1, 10);
  progression[0] = randomInt(1, 50);
  for (let i = 1; i <= 11; i += 1) {
    progression[i] = progression[i - 1] + interval;
  }
  const hiddenNum = progression.splice(randomInt(1, 10), 1, '..');
  console.log(`Question: ${progression.join(' ')}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === hiddenNum.toString()) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${hiddenNum}`);
  return false;
};

export { task, game };
