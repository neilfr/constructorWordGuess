var Word = require("./Word.js");
var inquirer = require("inquirer");

var wordBank = ["javascript", "bootstrap", "css grid", "hypertext"];

var word;
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
      if(!word.guess(response.enteredLetter)){
        guessesLeft--;
      };
      if (guessesLeft > 0 && !word.checkSolved()) {
        console.log("\nYou have " + guessesLeft + " guesses left!");
        word.getWord();
        guessALetter();
      } else if (word.checkSolved()) {
        console.log("\n\nSolved! Here's a new word!");
        getNewWord();
      } else {
        console.log("Sorry! You ran out of guesses!");
      }
    });
}

function getNewWord() {
  word = new Word(wordBank[Math.floor(Math.random() * wordBank.length)]);
  word.getWord();
  guessesLeft = 10;
  guessALetter();
}
