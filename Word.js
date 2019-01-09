var Letter =require('./Letter.js');

function Word(word){
    this.letters=[];
    for(var i=0;i<word.length;i++){
        this.addLetter(word.charAt(i));
    }
}

Word.prototype.addLetter=function(letter){
    this.letters.push(new Letter(letter));
}

Word.prototype.getWord=function(){
    var concatenatedLetters='';
    var guessStatus='';
    for(var i=0;i<this.letters.length;i++){
        concatenatedLetters+=this.letters[i].letter;
        console.log('letter of '+i+'status is: '+this.letters[i].guessedYet);
        console.log('the display for this character is: '+this.letters[i].getCharacter());
        guessStatus+=this.letters[i].getCharacter()+' ';
    }
    console.log("the word is: "+concatenatedLetters);
    console.log("the guess status is: "+ guessStatus);
}

Word.prototype.guess=function(letter){
    for(var i=0;i<this.letters.length;i++){
        this.letters[i].guess(letter);
    }
}

module.exports = Word;
