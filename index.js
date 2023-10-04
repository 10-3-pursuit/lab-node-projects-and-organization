const wordsJSON = require("./words.json")

const wordLogger = (words, start = 0, end = words.length) => words.slice(start, end).forEach(word => console.log(word))


const allWords = words => wordLogger(words)

// allWords(wordsJSON)



const firstTenWords = words => wordLogger(words, 0, 10)

// firstTenWords(wordsJSON)


const nextTenWords = words => wordLogger(words, 10, 20)

// nextTenWords(wordsJSON)


const firstXWords = (words, x) => wordLogger(words, 0, x)

// firstXWords(wordsJSON, process.argv[2])


const subsetOfWords = (words, start, end) => wordLogger(words, start, end)

// subsetOfWords(wordsJSON, process.argv[2], process.argv[3])


const sortWords = words => wordLogger(words.sort())

// sortWords(wordsJSON)