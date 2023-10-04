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
console.log(allWords(importedData));
