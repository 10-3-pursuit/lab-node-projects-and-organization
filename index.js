const wordsJSON = require("./words.json")
// console.log(wordsJSON)


// logs all the words
function allWords(words){
    console.log(words)
}
console.log(allWords(wordsJSON))


// logs the first ten words.
function firstTenWords(words){
    return words.slice(0, 10)
}
console.log(firstTenWords(wordsJSON))


// logs the next 10 words.
function nextTenWords(words){
    return words.slice(10, 20)
}
console.log(nextTenWords(wordsJSON))


// logs from 0 to x words.
function firstXWords(words, x){
    return words.slice(0, x)
}
console.log(firstXWords(wordsJSON, 16))


// logs from x to y words.
function subsetOfWords(words, x, y){
    const start = Math.min(x, y)
    const end = Math.max(x, y)
return words.slice(start - 1, end)
}
console.log(subsetOfWords(wordsJSON, 18, 10))


// logs all the words, sorted alphabetically.
function sortWords(words){
    return words.sort((a, b) => a.localeCompare(b))
}
console.log(sortWords(wordsJSON))