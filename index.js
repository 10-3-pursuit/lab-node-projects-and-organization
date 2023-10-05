const wordsJSON = require("./words.json");

//Logs all the words
function allWords(array) {
  array.map((ele) => console.log(ele));
}
// console.log(wordsJSON);

// allWords(wordsJSON);

//Logs the first ten words
function firstTenWords(array) {
  for (let i = 0; i < 10; i++) {
    console.log(`${i + 1}:${array[i]}`);
  }
}

// firstTenWords(wordsJSON);

function nextTenWords(array) {
  for (let i = 10; i < 19; i++) {
    console.log(`${i + 1}:${array[i]}`);
  }
}

// nextTenWords(wordsJSON);

function firstXWords(array, x) {
  for (let i = 0; i < x; i++) {
    console.log(`${i + 1}:${array[i]}`);
  }
}

// firstXWords(wordsJSON, 10);

function subsetOfWords(array, x, y) {
  for (let i = x; i < y; i++) {
    console.log(`${i + 1}:${array[i]}`);
  }
}

// subsetOfWords(wordsJSON, 0, 12);

function sortWords(array) {
  return array.sort((a, b) => a.localeCompare(b));
}

// console.log(sortWords(wordsJSON));

function wordsWithQ(array, letter = "q") {
  return array.filter((ele) => ele.includes(letter));
}

// wordsWithQ(wordsJSON);
// console.log(wordsWithQ(["quacker", "state", "quiqje", "rats"]));

function findWordsWithLetter(array, letter) {
  return array.filter((ele) => ele.includes(letter));
}
console.log(findWordsWithLetter(["quacker", "state", "quiqje", "rats"], "t"));

// console.log(findWordsWithLetter((process.argv[2], process.argv[3])));

const lettersMatch = (array) => {};
