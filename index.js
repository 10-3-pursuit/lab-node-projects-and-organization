// Importing data from words.json
const words = require('./words.json');

// Logs all the words
function allWords() {
  console.log(words);
}

// Logs the first ten words
function firstTenWords() {
  console.log(words.slice(0, 10));
}

// Logs the next 10 words
function nextTenWords() {
  console.log(words.slice(10, 20));
}

// Logs from 0 to x words
function firstXWords(x) {
  console.log(words.slice(0, x));
}

// Logs from x to y words
function subsetOfWords(x, y) {
  console.log(words.slice(x, y));
}

// Logs all the words, sorted alphabetically
function sortWords() {
  console.log([...words].sort());
}

// Returns all the words that contain the letter q
function wordsWithQ() {
  console.log(words.filter(word => word.includes('q')));
}

// Takes an argument letter and returns all the words with that matching letter
function findWordsWithLetter(letter) {
  console.log(words.filter(word => word.includes(letter)));
}

// Bonus Functions

// Takes up to 5 letters in any order and returns the words that match the criteria
function lettersMatch(letters) {
  const letterArray = letters.split('');
  console.log(words.filter(word => letterArray.every(letter => word.includes(letter))));
}

/*

allWords();
firstTenWords();
nextTenWords();
firstXWords(5);
subsetOfWords(5, 10);
sortWords();
wordsWithQ();
findWordsWithLetter('a'); 
*/


