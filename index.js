const wordList = require('./words.json');

function allWords(words){
    words.forEach(word => console.log(word))
}
// allWords(wordList)

function firstTenWords(words){
    for(let i = 0; i < 10; i++){
        console.log(words[i])
    }
}
// firstTenWords(wordList)

function nextTenWords(words){
    for(let i = 10; i < 20; i++){
        console.log(words[i])
    }
}

// nextTenWords(wordList)

function firstXwords(words,num){
    for(let i = 0; i < num;i++){
        console.log(words[i])
    }
}

// firstXwords(wordList,5)

function subsetOfWords(words,start,end){
    for(let i = start; i < end; i++){
        console.log(words[i])
    }
}

// subsetOfWords(wordList,5,10)

function sortWords(words){
    words.sort((a,b)=> a.localeCompare(b)).forEach(word => console.log(word))
}

// sortWords(wordList)

function wordsWithQ(words){
    return words.filter(word => word.toUpperCase().includes('Q'))
}

// console.log(wordsWithQ(wordList))

function findWordsWithLetter(words,letter){
    return words.filter(word=> word.toUpperCase().includes(letter.toUpperCase()))
}

// console.log(findWordsWithLetter(wordList,process.argv[2]))

function findWordsWithMoreThanOneLetter(words,letter){

    return words.filter(word => word.toUpperCase().includes(letter.toUpperCase() && word.toUpperCase().indexOf(letter.toUpperCase() === word.toUpperCase())))
}

function lettersMatch(words,letters){
    letters = [...letters]
    letters = letters.filter(letter => letter !== '_' && letter !== '.')
    return words.filter(word => {
        if(letters.every(letter=> word.toUpperCase().includes(letter.toUpperCase()))){
            return word
        }
    })
}

// console.log(lettersMatch(wordList,process.argv[2]))

function lettersExactMatch(words,letters){
    letters = [...letters]
    return words.filter(word => {
        let exactMatch = true
        for(let i = 0; i < word.length; i++){
            const input = letters[i].toUpperCase()
            const wordLetter = word[i].toUpperCase()
            if(input !== '_' && input !== '.' && input !== wordLetter){
                exactMatch = false
                break;
            }
        }
        return exactMatch
    })
}
console.log(lettersExactMatch(wordList,process.argv[2]))

function MatchChecker(words,exactLetters,letters){
    const exactMatch = lettersExactMatch(words,exactLetters)
    return lettersMatch(exactMatch,letters)
}

// console.log(MatchChecker(wordList, process.argv[2],process.argv[3]))