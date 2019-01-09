var Word = require("./Word.js");
var inquirer = require("inquirer");

var wordBank = ["hello", "world", "yipee"];

var wordOne;
var guessesLeft;

getNewWord();

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
      if (guessesLeft > 0 && !(wordOne.checkSolved())) {
        console.log("You have " + guessesLeft + " left!");
        wordOne.getWord();
        guessALetter();
      } else if (wordOne.checkSolved()){
        console.log("Solved! Here's a new word!");
        getNewWord();
      } else {
        console.log("Sorry! You ran out of guesses!");
      }
    });
}

function getNewWord(){
  wordOne = new Word(wordBank[Math.floor(Math.random() * wordBank.length)]);
  wordOne.getWord();
  guessesLeft = 10;
  guessALetter();
}