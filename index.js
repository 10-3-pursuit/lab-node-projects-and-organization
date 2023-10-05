const wordsJSON = require("./words.json");

const allWords = () => {
    return wordsJSON;
}

//console.log(allWords())

function firstTenWords(wordsArr) {
    let loggedWords = "";
    for (let i = 0; i < 10 && i < wordsArr.length; i++) {
        loggedWords += wordsArr[i] + '\n';
    }
    return loggedWords;
}

//console.log(firstTenWords(wordsJSON));

function nextTenWords(wordsArr, startIndex) {
    let loggedWords = "";
    for (let i = startIndex; i < startIndex + 10 && i < wordsArr.length; i++) {
        loggedWords += wordsArr[i] + '\n';
    }
    return loggedWords;
}

//console.log(nextTenWords(wordsJSON, 10))

function firstXWords(wordsArr, x) {
    let loggedWords = "";
    for (let i = 0; i < x && i < wordsArr.length; i++) {
        loggedWords += wordsArr[i] + '\n';
    }
    return loggedWords;
}

//console.log(firstXWords(wordsJSON, 5))


function subsetOfWords(wordsArr, x, y) {
    let loggedWords = "";
    for (let i = x; i <= y && i < wordsArr.length; i++) {
        loggedWords += wordsArr[i] + '\n';
    }
    return loggedWords;
}
//console.log(subsetOfWords(wordsJSON, 3, 7))

function sortWords(wordsArr) {
    let sortedWords = wordsArr.slice().sort();
    let loggedWords = sortedWords.join('\n');
    return loggedWords;
}
//console.log(sortWords(wordsJSON));


function wordsWithQ(wordList) {
    return wordList.filter(word => word.includes('q'));
}
//console.log(wordsWithQ(wordsJSON));

  
function findWordsWithLetter(wordList, letter) {
    return wordList.filter(word => word.includes(letter));
}
console.log(findWordsWithLetter(wordsJSON, 'p'));