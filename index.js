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


// returns all the words that contain the letter q
function wordsWithQ(words){
    const qWords = words.filter((word) => word.includes("q"))
    if(qWords.length === 0){
        return "There are no words with the letter Q"
    } else {
        return qWords
    }
}
console.log(wordsWithQ(wordsJSON))


//  takes an argument letter and returns all the words with that matching letter
function findWordsWithLetter(words, letter){
    letter = letter.toLowerCase()
    const wordsWithLetter = words.filter((word) => word.includes(letter))
    if(wordsWithLetter === 0){
        return `There are no words with the letter ${letter}`
    } else {
        return wordsWithLetter
    }
}
console.log(findWordsWithLetter(wordsJSON, "z"))
console.log(findWordsWithLetter(wordsJSON, "M"))
console.log(findWordsWithLetter(wordsJSON, process.argv[2]))


// BONUS 

// input up to 5 letters in any order 
// returns the words that match the criteria (don't worry about solving for duplicate letters).
function lettersMatch(words, letters){
    letters = letters.toLowerCase()
    if(letters.length > 5){
        return "This search can only take up to 5 letters"
    } else if(!letters){
        return "Please enter up to 5 letters"
    }
    const letterMatches = words.filter((word) => word.includes(letters))
    
    if(letterMatches.length === 0){
        return "There are no matches"
    } else {
        return letterMatches
    } 
}
console.log(lettersMatch(wordsJSON, process.argv[2]))
// node index.js aeiou


// input a five-character string. 
// put letters with the exact placement in their place
// put a placeholder like . or _ for unknown letters
function lettersExactMatch(words, string){
    const result = []
    if(string.length !== 5){
        return "Input must be a 5 character string"
    }
    for(let word of words){
        let isMatch = true
        let matchedWord = ""
        for(let i = 0; i < 5; i++){
            if(string[i] === "_" || string[i] === "."){
                
            }
        }
    }
}
// node index.js exactly a_ie_


// Update the function lettersMatch to handle duplicate letters


// Create a new function that can handle both inputs
// One input for matched letters in the wrong position
// The second input for matched letters in the correct position

// node index.js al__a o


