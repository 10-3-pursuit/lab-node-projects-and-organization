const wordsJSON = require("./words.json")

function allWords(){
    console.log(wordsJSON)
}
// allWords()

function firstTenWords(){
    for (let i = 0; i < 10 ; i++) {
        console.log(wordsJSON[i])
    }
}
// firstTenWords()

function nextTenWords(){
    for (let i = 0; i < 10 ; i++) {
        console.log(wordsJSON[i + 10])
    }
}
// nextTenWords()

function firstXWords(x){
    for (let i = 0; i < x ; i++) {
        console.log(wordsJSON[i])
    }
}
// firstXWords(5)

function subsetOfWords(x, y){
    for (let i = x - 1; i < y ; i++) {
        console.log(wordsJSON[i])
    }
}
// subsetOfWords(10, 15)

function sortWords(){
    console.log(wordsJSON.sort())
}
// sortWords()

function wordsWithQ(){
    let wordsArr = []
    wordsJSON.forEach((word) => {
        if (word.includes('q')){
            wordsArr.push(word)
        }
    })
    console.log(wordsArr)
}
// wordsWithQ()

function findWordsWithLetter(letter, position){
    //(NOTE: "0" = first letter, "5" = last letter)
    let wordsArr = []
    let noLetterArr = []
    let moreThanOnceArr = []
    let letterAtPositionArr = []
    wordsJSON.forEach((word) => {
        let letterCount = 0
        for (let i = 0; i < word.length; i++) {
            if (word[i] === letter) {
                letterCount++
            }
        }
        for (let i = 0; i < word.length; i++) {
            if (word[position - 1] === letter) {
                letterAtPositionArr.push(word)
            }
        }
        if (letterCount > 1) {
            moreThanOnceArr.push(word)
        } else if (letterCount === 1) {
            wordsArr.push(word)
        } else {
            noLetterArr.push(word)
        }
    })
    console.log("Words with one occurrence below")
    console.log(wordsArr)
    console.log("Words with more than one occurrence below")
    console.log(moreThanOnceArr)
    console.log("Words with no occurrences below")
    console.log(noLetterArr)
    console.log("Words with letter at specified position below (0 - 1st letter, 5 - last letter). An empty array means no position was given, or position not found.")
    console.log(letterAtPositionArr)
}
findWordsWithLetter(process.argv[2], process.argv[3])
