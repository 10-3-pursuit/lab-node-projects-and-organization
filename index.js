const importedWordsJSON = require("./words.json");

console.log(importedWordsJSON);

const wordBank = require('./words.json')

console.log(wordBank)




const allWords = () => {
    return wordBank;
}

const firstTenWords = () => {
  return wordBank.slice(0, 10)
}
console.log(firstTenWords())

const nextTenWords = () => {
    return wordBank.slice(10, 20)
}

console.log(nextTenWords())

const firstXWords = (wrdAmt) => {
    return wordBank.slice(0, wrdAmt)
}

const subSetOfWords = (firstWord, lastWord) => {
    return wordBank.slice(firstWord, lastWord)
}

const sortOfwords = () => {
    return wordBank.sort()
}

const wordsWithQ = () => {
    return wordBank.filter((word) => word.includes('q'))
}

const wordsWithLetter = (letter) => {
    return wordBank.filter((word) => word.includes(letter))
}

const letterSearch = process.argv[2];
const wrdResult = wordsWithLetter(letterSearch);
console.log(wrdResult)

const lettersMatch = (letters) => {
    return wordBank.filter((word) => word.includes(letters))
}

 const matchedWords = lettersMatch(letterSearch)
 console.log(matchedWords)