import greeting from './cli.js';

const flow = (task, game) => {
  const userName = greeting();
  console.log(task);
  let correctAnswer = 0;
  while (correctAnswer < 3) {
    const playProcess = game();
    if (playProcess === true) {
      correctAnswer += 1;
    } else if (playProcess === false) {
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (correctAnswer === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default flow;
