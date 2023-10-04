const importedData = require ("./words.json");

//console.log(importedData);

function allWords(wordsArr) {
    let loggedWords = "";
    for (let word of wordsArr) {
        loggedWords += `${word} `;
        loggedWords.trim();
    }
    return loggedWords;
};
//console.log(allWords(importedData));

function firstTenWords (wordsArr) {
    let loggedFirst10Words = "";
    let word = "";
    for (let i=0; i < 10; i++) {
        word = wordsArr[i];
        loggedFirst10Words += `${word} `;
        loggedFirst10Words.trim();
    }
    return loggedFirst10Words;
};
//console.log (firstTenWords(importedData));

function firstTenWords (wordsArr) {
    let loggedNext10Words = "";
    let word = "";
    for (let i=10; i < 20; i++) {
        word = wordsArr[i];
        loggedNext10Words += `${word} `;
        loggedNext10Words.trim();
    }
    return loggedNext10Words;
};
//console.log (firstTenWords(importedData));

// x is an integer number bigger than 0
function firstXWords (wordsArr, x) {
    let loggedXWords = "";
    let word = "";
    if (x > 0) {
    for (let i=0; i < x; i++) {
        word = wordsArr[i];
        loggedXWords += `${word} `;
        loggedXWords.trim();
    }
}
    return loggedXWords;
};
console.log (firstXWords(importedData, 5));