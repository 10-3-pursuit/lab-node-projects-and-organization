const wordsJSON = require("./words.json")
// console.log(wordsJSON)
//---------------------------------------------------------

// logs all the words
function allWords(words){
    console.log(words)
}
// console.log(allWords(wordsJSON))
//---------------------------------------------------------


// logs the first ten words.
function firstTenWords(words){
    return words.slice(0, 10)
}
// console.log(firstTenWords(wordsJSON))
//---------------------------------------------------------


// logs the next 10 words.
function nextTenWords(words){
    return words.slice(10, 20)
}
// console.log(nextTenWords(wordsJSON))
//---------------------------------------------------------


// logs from 0 to x words.
function firstXWords(words, x){
    return words.slice(0, x)
}
// console.log(firstXWords(wordsJSON, 16))
//---------------------------------------------------------


// logs from x to y words.
function subsetOfWords(words, x, y){
    const start = Math.min(x, y)
    const end = Math.max(x, y)
return words.slice(start - 1, end)
}
// console.log(subsetOfWords(wordsJSON, 18, 10))
//---------------------------------------------------------


// logs all the words, sorted alphabetically.
function sortWords(words){
    return words.sort((a, b) => a.localeCompare(b))
}
// console.log(sortWords(wordsJSON))
//---------------------------------------------------------


// returns all the words that contain the letter q
function wordsWithQ(words){
    const qWords = words.filter((word) => word.includes("q"))
    if(qWords.length === 0){
        return "There are no words with the letter Q"
    } else {
        return qWords
    }
}
// console.log(wordsWithQ(wordsJSON))
//---------------------------------------------------------


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
// console.log(findWordsWithLetter(wordsJSON, "z"))
// console.log(findWordsWithLetter(wordsJSON, "M"))
// console.log(findWordsWithLetter(wordsJSON, process.argv[2]))
//---------------------------------------------------------


// BONUS --------------------------------------------------


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
// console.log(lettersMatch(wordsJSON, process.argv[2]))
// node index.js aeiou
//---------------------------------------------------------


// input a five-character string. 
// put letters with the exact placement in their place
// put a placeholder like . or _ for unknown letters
function lettersExactMatch(words, string){
    const result = []
    if(string.length !== 5){
        return "Input must be a 5 character string"
    }
    for(let word of words){
        // initialize as true for each word
        let isMatch = true 
        for(let i = 0; i < 5; i++){
            if(string[i] !== word[i] && string[i] !== "_" && string[i] !== "."){
                isMatch = false
                // no need to check further if a mismatch is found, will move on to next word
                break;
            }
        }
        if(isMatch === true){
            result.push(word)
        }
    }
    if(result.length === 0){
        return "There are no matches"
    } else {
        return result
    }
}
// console.log(lettersExactMatch(wordsJSON, process.argv[2]))
// node index.js a_ie_
// node index.js p.er.
// node index.js zxcvb
//---------------------------------------------------------


// Update the function lettersMatch to handle duplicate letters
function lettersMatch2(words, letters){

    const lettersArr = letters.toLowerCase().split('')
    
    if(lettersArr.length > 5 || lettersArr.length === 0){
        return "Please enter up to 5 letters"
    }
    // count how many occurences of each letter in letters
    const letterCount = lettersArr.reduce((count, current) => {
        if(count[current]){
            count[current] += 1
        } else {
            count[current] = 1
        }
        return count
    }, {})
    console.log(letterCount)

    let isMatch;
    const result = []
    for(let word of words){
        // initialize as true for each word
        let isMatch = true
        for(let letter of lettersArr){
            if(word.includes(letter) && letterCount[letter] > 0){
                // if found, decrease the count for this letter
                letterCount[letter] -= 1
            } else {
                // letter not found or not found enough times
                isMatch = false
                // no need to look any further at the word if letter doesn't match
                break;
            }
        }
        if(isMatch === true){
            result.push(word)
        }
    }
    
    if(result.length === 0){
        return "There are no matches"
    } else {
        return result
    } 
}
console.log(lettersMatch2(wordsJSON, process.argv[2]))
//---------------------------------------------------------


// Create a new function that can handle both inputs
// One input for matched letters in the wrong position
// The second input for matched letters in the correct position

// node index.js al__a o


