var Word = require("./Word.js");
var inquirer = require("inquirer");

var wordBank = ["hello", "world", "yipee"];

var wordOne = new Word(wordBank[Math.floor(Math.random() * wordBank.length)]);

wordOne.getWord();
var guessesLeft = 10;

guessALetter();

function guessALetter() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Guess a letter!",
        name: "enteredLetter"
      }
    ])
    .then(function(response) {
      wordOne.guess(response.enteredLetter);
      guessesLeft--;
      if (guessesLeft > 0) {
        console.log("You have " + guessesLeft + " left!");
        wordOne.getWord();
        guessALetter();
      } else {
        console.log("Sorry! You ran out of guesses!");
      }
    });
}
