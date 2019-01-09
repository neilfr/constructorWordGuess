var Letter = require ("./Letter.js");

var letterOne=new Letter('x');
console.log("the letter, using letterOne.letter is:");
console.log(letterOne.letter);

letterOne.getCharacter();

letterOne.guessedYet=true;

letterOne.getCharacter();