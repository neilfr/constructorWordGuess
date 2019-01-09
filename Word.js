var Letter = require("./Letter.js");

function Word(word) {
  this.letters = [];
  for (var i = 0; i < word.length; i++) {
    this.addLetter(word.charAt(i));
  }
}

Word.prototype.addLetter = function(letter) {
  this.letters.push(new Letter(letter));
};

Word.prototype.getWord = function() {
  var shadowWord = "";

  for (var i = 0; i < this.letters.length; i++) {
    shadowWord += this.letters[i].getCharacter() + " ";
  }
  console.log(shadowWord);
};

Word.prototype.checkSolved = function() {
    var solved = true;
    for (var i=0;i<this.letters.length; i++){
        if (this.letters[i].getCharacter()==='_'){
            solved = false;
        }
    }
    if (solved){
        return 'solved';
    }
}

Word.prototype.guess = function(letter) {
  for (var i = 0; i < this.letters.length; i++) {
    this.letters[i].guess(letter);
  }
};

module.exports = Word;
