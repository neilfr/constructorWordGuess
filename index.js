var Word = require("./Word.js");
var Inquirer = require('inquirer');

//var wordOne=new Word(['h','e','l','l','o']);
var wordBank=['hello','world','yipee'];

var wordOne=new Word(wordBank[Math.floor(Math.random()*wordBank.length)]);

wordOne.getWord();

wordOne.guess('l');

wordOne.getWord();