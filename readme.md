# constructor word guess
simple command line game where you try and guess the letters in a randomly selected word.

## node packages
* inquirer

## javascript files
### index.js
* contains the main logic
* contains a word bank in an array

### Letter.js
* the Letter class
#### properties:
* letter - a character
* guessed - boolean indicating if the letter has been guessed or not
#### methods:
* guessedLetter - changes the guessed property if the letter is guessed
* getCharacter - returns the letter property if it has been guessed, or the underscore if it has not
* guess - changes a letters guessed property to true, and returns true, if the letter has been guessed

### Word.js
* the Word class
#### properties:
* letters[] - array of letters representing the word to be guessed
#### methods:
* addLetter - adds a new letter to the letters array
* getWord - displays a version of the word that reveals only the guessed letters
* checkSolved - returns true if the word has been solved
* guess - changes the guessed property of all matching letters in the word to true, and returns true if at least one letter in the word matched the guess
