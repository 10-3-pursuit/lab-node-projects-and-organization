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
    for (let i=9; i < 20; i++) {
        word = wordsArr[i];
        loggedNext10Words += `${word} `;
        loggedNext10Words.trim();
    }
    return loggedNext10Words;
};
console.log (firstTenWords(importedData));