const words = require("./words.json");

// - `allWords` logs all the words.
// - `firstTenWords` logs the first ten words.
// - `nextTenWords` logs the next 10 words.
// - `firstXWords` logs from 0 to x words.
// - `subsetOfWords` logs from x to y words.
// - `sortWords` logs all the words, sorted alphabetically.

const allWords = words => words;

// console.log(allWords(words));

const firstTenWords = words => words.slice (0, 10);

// console.log(firstTenWords(words));

const nextTenWords = words => words.slice(10, 20);

// console.log(nextTenWords(words));

const firstXWords = (words,end) => words.slice(0, end);

// console.log(firstXWords(words, process.argv[2], process.argv[3]));

const subsetOfWords = (words, start, end) => words.slice(start, end);

// console.log(subsetOfWords(words, process.argv[2], process.argv[3]));

const sortWords = words => words.sort((a,b) => a.localeCompare(b))

// console.log(sortWords(words))


const wordsWithQ = words => words.filter(word => word.includes('q'));

// console.log(wordsWithQ(words));

const findWordsWithLetter = (words, letter) => words.filter(word => word.includes(letter));

// console.log(findWordsWithLetter(words, process.argv[2]));


