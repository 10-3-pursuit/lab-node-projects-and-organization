const words = require("./words.json")

function allWords(){
    console.log(words)
}
//allWords()

function firstTenWords(){
    for (let i = 0; i < 10; i++){
        console.log(words[i])
    }
}
//firstTenWords()

function nextTenWords(){
    for (let i = 0; i < 10; i++){
       console.log(words[i + 10])
    }
}
//nextTenWords()

function firstXWords(xthWord){
    for (let i = 0; i < xthWord; i++){
        console.log(words[i])
    }
}
//firstXWords()

function subsetOfWords(xthWord, ythWord){
    for (let i = xthWord -1 ; i < ythWord ; i++){
        console.log(words[i])
    }
}
//subsetOfWords()

function sortWords(){
    console.log(words.sort())
}
//sortWords()

function wordsWithQ(){
    const wordsWithLetterQ = words.filter((word) => word.includes('q'))
     console.log((wordsWithLetterQ))
}
//wordsWithQ()


//This finds words with the letter in any position 
function findWordsWithLetter(letter) {
    const wordsWithLetter = words.filter((word) => {
        if (word.includes(letter)) {
            return true
        }
        return false
    })
    console.log(wordsWithLetter);
    if (wordsWithLetter.length === 0) {
        console.log('There are no words with these letters')
        console.log(words)
    }
    return wordsWithLetter
}
// findWordsWithLetter(process.argv[2])

function findWordsWithMatchingPosition(letter, position) {
    const wordsWithMatchingPosition = [];
    words.forEach((word) => {
        for (let i = 0; i < word.length; i++) {
            if (word[position - 1] === letter) {
                wordsWithMatchingPosition.push(word);
            }
        }
    })
    console.log(wordsWithMatchingPosition)
}

// findWordsWithMatchingPosition(process.argv[2], process.argv[3])
