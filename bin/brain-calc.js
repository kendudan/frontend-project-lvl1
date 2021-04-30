import getRandomInt from '../src/randomInt.js';
import readlineSync from 'readline-sync';
import userName from '../src/cli.js';

const mathOperationsArray = ['+', '-', '*'];

const generateRandomMathOperation = (array) => {
	const randomNum = Math.floor(Math.random() * array.length);
	return array[randomNum];
}

console.log('What is the result of the expression?');
let correctAnswer = 0;
while (correctAnswer < 3) {
	const firstInt = getRandomInt(1, 50);
	const secondInt = getRandomInt(1, 50);
	const mathOperation = generateRandomMathOperation(mathOperationsArray);

	console.log(`Question: ${firstInt} ${mathOperation} ${secondInt}`);
	const userAnswer = readlineSync.question('Your answer: ');
	const expression = `${firstInt} ${mathOperation} ${secondInt}`;
	const answer = eval(expression);

	if (userAnswer == answer) {
		console.log('Correct');
		correctAnswer += 1;
	} else if (userAnswer != answer) {
		console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${answer}'.\n Let's try again, ${userName}!`);
	}
}
if (correctAnswer === 3) {
  console.log(`Congratulations, ${userName}!`);
}