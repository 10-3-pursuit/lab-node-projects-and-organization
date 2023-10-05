const words = require("./words.json");


// logs all the words.
function allWords(words){
    console.log('allWords:');
    console.log (words)
    console.log('--------------------------------------');
}

// logs the first ten words.
function  firstTenWords(words){
    console.log('firstTenWords:');
    for (let i = 0; i < 10; i++) {
        console.log (`${i+1}: ${words[i]}`)
    }
    console.log('--------------------------------------');
};


// logs the next 10 words.
function  nextTenWords(words){
    console.log('nextTenWords:');
    for (let i = 10; i < 20; i++) {
        console.log (`${i+1}: ${words[i]}`)
    }
    console.log('--------------------------------------');
};

// logs from 0 to x words.
function  firstXWords(words, num){
    console.log('firstXWords:');
    for (let i = 0; i < num; i++) {
        console.log (`${i+1}: ${words[i]}`)
    }
    console.log('--------------------------------------');
};

// logs from x to y words.
function  subsetOfWords (words, num1, num2){
    console.log('subsetOfWords:');
    for (let i = num1 - 1; i < num2; i++) {
        console.log (`${i+1}: ${words[i]}`)
    }
    console.log('--------------------------------------');
};

// logs all the words, sorted alphabetically.
function sortWords (words){
    const sorted = words.sort()
    console.log('sortWords:');
    console.log(sorted)
    console.log('--------------------------------------');
};

//returns all the words that contain the letter q
function wordsWithQ (words){
    //should be a return here, not a console.log. Left as a log for testing purposes
    console.log(words.filter(word => word.includes('q')));
};

// takes an argument letter and returns all the words with that matching letter
function findWordsWithLetter (words, letter){
    //should be a return here, not a console.log. Left as a log for testing purposes
    console.log(words.filter(word => word.includes(letter)));
};

function dynamicFindWordsWithLetter (letter) {
    return words.filter((word) => {
        return word.includes(letter);
      });
};







// Function calls
// allWords(words);
// firstTenWords(words);
// nextTenWords(words);
// firstXWords(words, 30);
// subsetOfWords(words, 3, 6);
// sortWords(words)
// wordsWithQ(words)
// findWordsWithLetter (words, 'z')
// console.log(dynamicFindWordsWithLetter(process.argv[2]))