function Letter(letter) {
    this.letter = letter;
    this.guessed = false;
}

Letter.prototype.getCharacter = function(){
    if(this.guessed===true){
        return this.letter;
    } else {
        return '_';
    }
}

Letter.prototype.guess = function(guessedLetter){
    if(guessedLetter===this.letter){
        this.guessed=true;
    }
}

module.exports = Letter;

