import readlineSync from 'readline-sync';
import userName from '../src/cli.js';

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

console.log('Answer "yes" if the number is even, otherwise answer "no".');
let correctAnswer = 0;
while (correctAnswer < 3) {
	const showInt = getRandomInt(1, 50);
	console.log(`Question:${showInt}`);
	const userAnswer = readlineSync.question('Your answer: ');
	if (userAnswer === 'yes' && showInt % 2 === 0) {
		console.log('Correct!');
		correctAnswer += 1;
	} else if (userAnswer === 'yes' && showInt % 2 !== 0) {
		console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${userName}!`);
	}else if (userAnswer === 'no' && showInt % 2 !== 0) {
		console.log('Correct!');
		correctAnswer += 1;
	} else if (userAnswer === 'no' && showInt % 2 === 0) {
		console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\n Let's try again, ${userName}!`);
	} else {
		console.log (`${userAnswer} is wrong answer ;(. \n Let's try again, ${userName}!`)
	}
}
console.log(`Congratulations, ${userName}!`);
