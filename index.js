// Importing the words.json file by saving it into a const variable
const words = require('./words.json');

// Logs all the words
const allWords = (words) => {
    console.log(words);
}

// Logs first ten words
const firstTenWords = (words) => {
    console.log(words.slice(0,10));
}

// Logs the next ten words
const nextTenWords = (words) => {
    console.log(words.slice(10,20));
}

// Logs the first x words
const firstXWords = (words, x) => {
    console.log(words.slice(0,x));
}

// Logs from x to y words
const subsetOfWords = (words, x, y) => {
    console.log(words.slice(x,y));
}

// Logs all the words sorted alphabetically
const sortWords = (words) => {
    console.log(words.sort((a,b) => a.localeCompare(b)));
}

// Function that returns all the words that has the letter 'q'
const wordsWithQ = (words) => {
    let targetLetter = 'q';
    return words.filter((word) => word.includes(targetLetter));
}



// Function that takes an argument letter and returns all the words with that matching letter

const findWordsWithLetter = (words,letter) => {
    return words.filter((word) => word.includes(letter));
}

// Allows user to insert letter through command line to view words with matching letter
console.log(findWordsWithLetter(words, process.argv[2]));