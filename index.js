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


const wordsWithQ = words => wordLogger(words.filter(word => word.includes('q')))

// wordsWithQ(wordsJSON)


const findWordsWithLetter = (words, letter) => wordLogger(words.filter(word => word.includes(letter)))

// findWordsWithLetter(wordsJSON, process.argv[2])


// BONUS~~~~~~~~~~~~~~~
const letterMatch = (words, letters) => {
    if(letters.length <= 5) {
        wordLogger(words.filter(word => {
            return letters.split('').map(letter => word.includes(letter)).includes(true)
        }))
    } else {
        console.log('You must input 5 or less letters.')
    }
}

// letterMatch(wordsJSON, process.argv[2])


const letterExactMatch = (words, letters) => {
    if(letters.length === 5) {
        wordLogger(words.filter(word => !letters.split('').map((letter, index) => word[index] === letter || letter === '.' || letter === '_').includes(false)))
    } else {
        console.log('You must input exactly 5 letters')
    }
}

// letterExactMatch(wordsJSON, process.argv[2])