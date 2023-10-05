const importedData = require ("./words.json");

//console.log(importedData);

/**
 * Returns and logs to the console a string of all of the words in array input.
 * @param {String[]} wordsArr - An array of strings.
 * @returns {string} - A string of words.
 */
function allWords(wordsArr) {
    let loggedWords = "";
    for (let word of wordsArr) {
        loggedWords += `${word} `;
    }
    return console.log(loggedWords.trim()); // logs all the words when allWords is invoked
};
//allWords(importedData); // there is no test file so invoking fx won't break anything ;-)

/**
 * Returns and logs to the console a string of first 10 words in array input.
 * @param {String[]} wordsArr - An array of strings.
 * @returns {String | undefined} - A string of words first 10 words in array input or undefined if input has less than 10 words.
 */
function firstTenWords (wordsArr) {
    if (wordsArr.length < 10) return undefined;
    let loggedFirst10Words = "";
    for (let i=0; i < 10; i++) {
        loggedFirst10Words += `${wordsArr[i]} \n`;
    }
    return console.log(loggedFirst10Words.trim()); // logs first ten words when firstTenWords is invoked
};
//firstTenWords(importedData);

/**
 * Returns and logs to the console a string of the next 10 words in array input starting at the 10th word, but not including it.
 * @param {String[]} wordsArr - An array of strings.
 * @returns {string | undefined} - A string of words or undefined if array input doesn't contain at least 20 elements.
 */
function nextTenWords (wordsArr) {
    //array must contain at least 20 strings so it can return and log next 10 words
    if (wordsArr.length < 20) return undefined;
    let loggedNext10Words = "";
    let word = "";
    for (let i=10; i < 20; i++) { // 10th word is "woops" so next word is "fanos"
        word = wordsArr[i];
        loggedNext10Words += `${word} \n`;
    }
    return console.log(loggedNext10Words.trim()); // logs next ten words when nextTenWords is invoked
};
//nextTenWords(importedData);

/**
 * Returns and logs to the console a string of first x words in an array of strings where x is an integer number greater than 0.
 * @param {String[]} wordsArr - An array of strings.
 * @param {Number} x - ending index (inclusive).
 * @returns {String | Undefined} - A string of words between indices 0 and x of array argument or returns undefined if array argument is empty when x is greater than 0 (bc that makes no sense), x is less than 0, and/or x is not an integer.
 */
function firstXWords (wordsArr, x) {
    if (x < 0 || Number.isInteger(x) === false) return undefined;
    if (wordsArr.length === 0 && x > 0) return undefined;
    let loggedXWords = "";
    for (let i=0; i < x; i++) {
        loggedXWords += `${wordsArr[i]} \n`;
    }
    return console.log(loggedXWords.trim());
};
//firstXWords(importedData, 5); // prints first 5 words (string type)
//firstXWords(importedData, 1); // prints first word (string type)
//firstXWords (importedData, 0); // returns empty string as expected
//firstXWords (["word1"], 1); // prints only word
//firstXWords ([],1); // returns undefined
//firstXWords ([],0); // returns empty string

/**
 * Returns and logs to the console a string of words between x and y in an array of strings where x and y are integer numbers greater than 0.
 * @param {String[]} wordsArr - An array of strings.
 * @param {Number} x - starting index (not inclusive).
 * @param {Number} y - ending index (inclusive).
 * @returns {String | Undefined} - A string of words between indices x and y or returns undefined when x is greater than y, when array argument is empty when x is greater than 0 and/or when y is greater than 0, when either x is less than 0 and/or y is less than 0, and/or when either x and/or y are not integers.
 */
function subsetOfWords (wordsArr, x, y) {
    if (x < 0 || y < 0 || x > y || Number.isInteger(x) === false || Number.isInteger(y) === false) return undefined;
    if (wordsArr.length === 0 && x > 0 || wordsArr.length === 0 && y > 0) return undefined;
    let loggedsubsetOfWords = "";
    let word = "";
    for (let i=x; i < y; i++) {
        word = wordsArr[i];
        loggedsubsetOfWords += `${word} \n`;
    }
    return console.log(loggedsubsetOfWords.trim());
};
//subsetOfWords(importedData,0,6); // output includes words 1 - 6 (string)
//subsetOfWords(importedData,7,6); // output is undefined
//subsetOfWords(importedData,6,6); // output is empty string
//subsetOfWords(importedData,5,6); // output will not include word 5 but will include 6 (string)
//subsetOfWords(["word1"],1,2); // output is undefined because only index that exists is 0
//subsetOfWords(["word1"],0,1); // output is word 1 (a string at index 0)
//subsetOfWords(["word1"],0,0); // output is empty string

/**
 * Returns and logs a sorted string of words in alphabetical order.
 * @param {String[]} wordsArr - An array of strings.
 * @returns {String} - A string of words in alphabetical order.
 */
function sortWords (wordsArr) {
    wordsArr.sort();
    let sortedWords = "";
    for (let word of wordsArr) {
        sortedWords += `${word} \n`; // this makes it look like a column for readability
    }
    return console.log(sortedWords.trim());
};
//sortWords(importedData); //prints sorted words (string)

// (>^_^)> ---- Wordle Solver Functions: ---- <(^_^<)
const testData =["women",
"nikau",
"swack",
"feens",
"fyles",
"poled",
"clags",
"starn",
"bindi",
"woops",
];

const testData2 = [1,2,3,4]

/**
 * Returns and logs to the console an array of strings with words containing any instances of the letter q or the original array if there are no words that contain the letter q.
 * @param {String[]} wordsArr - An array of strings.
 * @returns {Array[] | Undefined} - An array of strings with words containing any instances of the letter q or the original array if there are no words that contain the letter q or undefined if input is not an array of strings.
 */
function wordsWithQ(wordsArr) {
    if (!Array.isArray(wordsArr)) return console.log(undefined);
    
    for (let word of wordsArr) {
        if (typeof word !== 'string') return console.log(undefined);
    }

    const wordsWithQArr = wordsArr.filter(word => word.includes('q'));
    const result = wordsWithQArr.length === 0 ? wordsArr : wordsWithQArr; // condition being checked is wordsWithQArr.length === 0 so if it evaluates to true result will be original array if false it'll be new array with words that have letter q
    return console.log(result);
};
//wordsWithQ(importedData); // returns and logs array of strings with words that contain any instances of letter q
//wordsWithQ(testData); // returns and logs original array of strings (bc doesn't contain letter q)
//wordsWithQ([1,2,3,4]); // returns and logs undefined
//wordsWithQ("hello"); // returns and logs undefined
//wordsWithQ (testData2); // returns and logs undefined

// I think complete? it has the edge case for error return
function findWordsWithLetter (wordsArr, letter) {
    if (typeof letter !== 'string' && letter.length !== 1) return undefined;
    let caseInsensitiveLetter = letter.toLowerCase();
    if (!Array.isArray(wordsArr)) return console.log(undefined);
    
    for (let word of wordsArr) {
        if (typeof word !== 'string') return console.log(undefined);
        if (!words.toLowerCase().includes(caseInsensitiveLetter)) {
            return console.log(wordsArr.splice().join(" ").trim()); // if it doesn't contain the letter, return and log all the words (string) in array
        } else {
        let wordsWithLetterArr = wordsArr.filter(words => words.toLowerCase().includes(caseInsensitiveLetter));
        return console.log(wordsWithLetterArr.join(" ").trim());
        }
    }
;}







//     if (typeof letter === 'string' && Math.pow(Number(letter),1) !== letter && letter.length === 1) { // if true it means this is a string so proceed with rest of fx
//         let caseInsensitiveLetter = letter.toLowerCase();
//         for (let words of wordsArr) {
//             if (!words.toLowerCase().includes(caseInsensitiveLetter))
//             return console.log(wordsArr.splice().join(" ").trim()); // if it doesn't contain the letter, return and log all the words (string) in array
//         };
//         let wordsWithLetterArr = wordsArr.filter(words => words.toLowerCase().includes(caseInsensitiveLetter))
//         return console.log(wordsWithLetterArr.join(" ").trim());
//     }
//  };


//findWordsWithLetter(testData, "X"); // returns all words since x isn't included in any of them
//findWordsWithLetter(testData, "L"); // returns only words with letter L
//findWordsWithLetter(importedData, "L"); // returns only words with letter L
//findWordsWithLetter(importedData, 1); // returns and logs undefined
findWordsWithLetter(importedData, "1"); // Math.pow(Number(letter),1) !== letter evaluation in if statement makes this return undefined since "1" is not a number type
//findWordsWithLetter(testData2, "l"); // gives error message