var readlineSync = require('readline-sync');
var chalk = require('chalk');

console.log('<3<3<3<3<3<3<3<3<3<3<3<3<3<3');
console.log(chalk.black.bold.bgGreenBright('WELCOME TO THE ULTIMATE DINEY QUIZ'));
console.log('<3<3<3<3<3<3<3<3<3<3<3<3<3<3<3\n');

console.log(chalk.white.bold('Rules of the game:'));
console.log(chalk.blue.bold("a. There are total 7 questions."));
console.log(chalk.blue.bold("b. All questions are compulsory."));
console.log(chalk.blue.bold("c. Each right answer will give 4 points and wrong answer will take away 2 points."));
console.log('\n');


function getUser() {

  var userName = readlineSync.question(chalk.blue("\n\n May I know your name?\n"));
  console.log("\n\nWelcome", chalk.bold.red(userName), "\nGood luck! Hope you have fun!\n\n");

}
var initialScore = 0;

let quiz = [{
  question: chalk.redBright("1. Who was the first Disney Princess?"),
  a: "[a] Cinderella",
  b: "[b] Snow White",
  correctAnswer: "b",
}, {
  question: chalk.redBright("2. Who is Simba's Father in the movie THE LION KING?"),
  a: "[a] Mufasa",
  b: "[b] Rafiki",
  correctAnswer: "a",
}, {
  question: chalk.redBright("3.'The tale as old as time' is a song from which disney movie"),
  a: "[a] Beauty and The Beast",
  b: "[b] Tangled",
  correctAnswer: "a",
}, {
  question: chalk.redBright("4. What is the story of Mulan about? "),
  a: "[a] Women Empowerment",
  b: "[b] Patriotism",
  correctAnswer: "a",
}, {
  question: chalk.redBright("5. What animal is Mickey?"),
  a: "[a] anteater",
  b: "[b] mouse",
  correctAnswer: "b",
}, {
  question: chalk.redBright("6. What does Winnie the Pooh love to eat?"),
  a: "[a] Honey",
  b: "[b] Cornflakes",
  correctAnswer: "a",
}, {
  question: chalk.redBright("7. What does Hakuna Matata mean?"),
  a: "[a] No worries",
  b: "[b] Life is a Game",
  correctAnswer: "a",
}
]

let scoreboard = [{
  name: "Poojitha",
  score: 26
}, {
  name: "Nikita",
  score: 24
}, {
  name: "Shailaja",
  score: 22
}]

function confirmPlaying() {
  if (readlineSync.keyInYN(chalk.red("Would you like to play the quiz?\n"))) {
    getUser();
    quizFunction();
  } else {
    console.log(chalk.bold.white.bgRedBright('\n\nThankYou!', "Have a great day! Bye..."));
  }
}

confirmPlaying();

function quizFunction() {
  for (var i = 0; i < quiz.length; i++) {
    var questions = quiz[i].question;
    var optionOne = quiz[i].a;
    var optionTwo = quiz[i].b;
    console.log(chalk.bold.redBright(questions), "\n");
    console.log(optionOne);
    console.log(optionTwo);
    var answer = readlineSync.question("\nWhat's Your Answer? ");
    if (answer.toLowerCase() === quiz[i].correctAnswer) {
      initialScore = initialScore + 4;
      console.log(chalk.green("\nCorrect Answer \nScore :", initialScore));
      console.log("*********************** \n");
    } else {
      initialScore = initialScore - 2;
      console.log(chalk.red("\OIncorrect Answer \nScore :", initialScore));
      console.log("*********************** \n");
    }
  }
  console.log(chalk.bgBlueBright.bold.black("\nBabye.Thanks for Playing\n\n"))

  getLeaderBoardScore();
 
}

function getLeaderBoardScore() {
 
  if (initialScore === scoreboard[0].score) {

    //if Yes then printing message 
    console.log(chalk.cyan.bold("Congratulations! You Scored::", initialScore, "points\nYou are now on top of our leaderboard table"))
    console.log(chalk.cyan.bold("Hope to see you soon. Have a great day!"))
  } else {

    //If not then print goodbye message
    console.log(chalk.cyan.bold("Congratulations! You Scored::", initialScore, "points\nBut you couldn't make it to the top of our leaderboard table"));
    console.log(chalk.cyan.bold("Better Luck Next Time! Have a great day!"))
  }
}

