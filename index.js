const wordsJSON = require("./words.json")

const allWords = words => words

// console.log(allWords(wordsJSON))


const firstTenWords = words => {
    const firstTenWordsArr = []
    for(word of words) {
        if(words.indexOf(word) < 10) {
            firstTenWordsArr.push(word)
        }
    }
    return firstTenWordsArr
}

console.log(firstTenWords(wordsJSON))


const nextTenWords = (words, index) => {
    const nextTenWordsArr = []
    for(word of words) {
        if(words.indexOf(word) >= index && words.indexOf(word) < index + 10) {
            if(nextTenWordsArr.length < 10) {
                nextTenWordsArr.push(word)
            }
        }
    }
    return nextTenWordsArr
}

console.log(nextTenWords(wordsJSON, process.argv[2]))