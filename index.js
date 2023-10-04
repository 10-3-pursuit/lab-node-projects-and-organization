// this imports data from word.json file
const wordsJSON = require("./words.json");
// console.log(wordsJSON);

//this is a f(x) that prints the entire array of data the word.json file
const allWords = () => {
    return wordsJSON;
  };
//  console.log(allWords()) 

//this is a f(x) that prints the first 10 words of the word.json file 
const firstTenWords = () => {
   return wordsJSON.slice(0, 10);
}  
// console.log(firstTenWords())

//this is f(x) that prints the following 10 words of the word.json file 
const nextTenWords = () => {
    return wordsJSON.slice(10, 20);
}
// console.log(nextTenWords());

//this is a f(x) that prints a list of words starting from index 0, and ends at the given number argument 
const firstXWords = (words, number) => {
    return words.slice(0, number); 
  };
//   console.log(firstXWords(wordsJSON, 16)); 

//this f(x) that logs a list of words from the word.json file from index "x" to index "y"
const subsetOfWords = (words, x, y) => {
    //since .splice() method isn't inclusive for it's second index, I added 1 to y to work around this issue 
    return words.slice(x, y + 1);
}
// console.log(subsetOfWords(wordsJSON, 1, 4))

//this is a f(x) that logs a list of all words in alphabetical order 
const sortWords = (words) => {
    return words.sort((a,b) => a.localeCompare(b)); 
} 
// console.log(sortWords(wordsJSON)); 

//this is a f(x) that returns all words that contain a q
const wordsWithQ = (words) => {
    const qWord = (word) => {
        for (letter of word) {
            if (letter === "q") {
                return word 
            }
        }
    }
    return words.filter(qWord); 
}
// console.log(wordsWithQ(wordsJSON)) 

//initialized a variable that represents a f(x) which will take an argument `letter` and returns all the words with that matching letter
// const findWordsWithLetter = (words, x) => {
//     const wordsWithLetter = (word) => {
//         for (letter of word) {
//             if (letter === x) {
//                 return word 
//             }
//         }
//     }
//     return words.filter(wordsWithLetter)
// }
// const x = "z"
// console.log(findWordsWithLetter(wordsJSON, x));


// const findWordsWithLetter = (words, letter) => {
//     return words.filter((word) => word.includes(letter));
// }
// console.log(findWordsWithLetter(wordsJSON, letter));

//this is the same function with upgraded functionality
const args = process.argv.slice(2)
const letter = args[0].toLowerCase(); 
const findWordsWithLetter = (words, letter) => {
    return words.filter((word) => word.includes(letter))
}
//console.log(findWordsWithLetter(wordsJSON, letter))