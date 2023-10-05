const importedData = require ("./words.json");
//console.log(importedData);

/**
 * Returns and logs to the console a string of all of the words in array input.
 * @param {String[]} wordsArr - An array of strings.
 * @returns {String | Undefined} - A string of words or undefined if argument is not an array.
 */
function allWords(wordsArr) {
    if (!Array.isArray(wordsArr)) return console.log(undefined);
    let loggedWords = "";
    for (let word of wordsArr) {
        loggedWords += `${word}\n`; // the new line character inserts line break after each word
    }
    return console.log(loggedWords.trim()); // logs all the words and trims trailing spaces when allWords is invoked
};
//allWords(importedData); // there is no test file so invoking fx won't break anything ;-)
//allWords("Words"); // returns undefined because argument must be array

/**
 * Returns and logs to the console a string of first 10 words in array input.
 * @param {String[]} wordsArr - An array of strings where each element is a word.
 * @returns {String | Undefined} - A string of words first 10 words in array input or undefined if input is not an array or is an array but has less than 10 string elements.
 */
function firstTenWords (wordsArr) {
    if (!Array.isArray(wordsArr)) return console.log(undefined);
    if (wordsArr.length < 10) return undefined;
    let loggedFirst10Words = "";
    for (let i=0; i < 10; i++) {
        loggedFirst10Words += `${wordsArr[i]}\n`;
    }
    return console.log(loggedFirst10Words.trim()); // logs first ten words and trims trailing spaces to make string look neat when firstTenWords is invoked
};
//firstTenWords(importedData); // logs first 10 words (string)
//firstTenWords ("words"); // returns undefined

/**
 * Returns and logs to the console a string of the next 10 words in array input starting at the 10th word, but not including it.
 * @param {String[]} wordsArr - An array of strings.
 * @returns {String | Undefined} - A string of words or undefined when array input doesn't contain at least 20 elements or argument isn't an array.
 */
function nextTenWords (wordsArr) {
    //array must contain at least 20 strings so it can return and log next 10 words
    if (!Array.isArray(wordsArr)) return console.log(undefined);
    if (wordsArr.length < 20) return undefined;
    let loggedNext10Words = "";
    for (let i=10; i < 20; i++) { // 10th word is "woops" so next word is "fanos"
        loggedNext10Words += `${wordsArr[i]}\n`;
    }
    return console.log(loggedNext10Words.trim()); // logs next ten words and trims trailing spaces when nextTenWords is invoked
};
//nextTenWords(importedData); // returns and logs next ten words
//nextTenWords("words"); // returns and logs undefined

/**
 * Returns and logs to the console a string of first x words in an array of strings where x is an integer number greater than 0.
 * @param {String[]} wordsArr - An array of strings.
 * @param {Number} x - ending index (inclusive).
 * @returns {String | Undefined} - A string of words between indices 0 and x of array argument or returns undefined when argument for wordsArr parameter is not an array, when array argument is empty when x is greater than 0 (bc that makes no sense), when x is less than 0, and/or when x is not an integer.
 */
function firstXWords (wordsArr, x) {
    if (!Array.isArray(wordsArr)) return console.log(undefined);
    if (x < 0 || Number.isInteger(x) === false) return undefined;
    if (wordsArr.length === 0 && x > 0) return undefined;
    let loggedXWords = "";
    for (let i=0; i < x; i++) {
        loggedXWords += `${wordsArr[i]}\n`;
    }
    return console.log(loggedXWords.trim());
};
//firstXWords(importedData, 5); // prints first 5 words (string type)
//firstXWords(importedData, 1); // prints first word (string type)
//firstXWords (importedData, 0); // returns empty string as expected
//firstXWords (["word1"], 1); // prints only word
//firstXWords ([],1); // returns undefined
//firstXWords ("words",1); // returns undefined
//firstXWords ([],0); // returns empty string

/**
 * Returns and logs to the console a string of words between x and y in an array of strings where x and y are integer numbers greater than 0.
 * @param {String[]} wordsArr - An array of strings.
 * @param {Number} x - starting index (not inclusive).
 * @param {Number} y - ending index (inclusive).
 * @returns {String | Undefined} - A string of words between indices x and y or returns undefined when argument for wordsArr parameter is not an array, when x is greater than y, when array argument is empty when x is greater than 0 and/or when y is greater than 0, when either x is less than 0 and/or y is less than 0, and/or when either x and/or y are not integers.
 */
function subsetOfWords (wordsArr, x, y) {
    if (!Array.isArray(wordsArr)) return console.log(undefined);
    if (x < 0 || y < 0 || x > y || Number.isInteger(x) === false || Number.isInteger(y) === false) return undefined;
    if (wordsArr.length === 0 && x > 0 || wordsArr.length === 0 && y > 0) return undefined;
    let loggedsubsetOfWords = "";
    for (let i=x; i < y; i++) {
        loggedsubsetOfWords += `${wordsArr[i]}\n`;
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
//subsetOfWords("words",0,1); // output is undefined

/**
 * Returns and logs a sorted string of words in alphabetical order.
 * @param {String[]} wordsArr - An array of strings.
 * @returns {String | Undefined} - A string of words in alphabetical order; undefined if argument is not an array.
 */
function sortWords (wordsArr) {
    if (!Array.isArray(wordsArr)) return console.log(undefined);
    wordsArr.sort();
    let sortedWords = "";
    for (let word of wordsArr) {
        sortedWords += `${word}\n`; // this makes it look like a column for readability
    }
    return console.log(sortedWords.trim());
};
//sortWords(importedData); //prints sorted words (string)
//sortWords("words"); //prints sorted words (string)

// (>^_^)> ---- Wordle Solver Functions: ---- <(^_^<)

// array of strings
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
// array of numbers
const testData2 = [1,2,3,4];

/**
 * Returns and logs to the console an array of strings with words containing any instances of the letter q or the original array if there are no words that contain the letter q.
 * @param {String[]} wordsArr - An array of strings.
 * @returns {String | Undefined} - String of words containing any instances of the letter q or the original array if there are no words that contain the letter q or undefined if input is not an array of strings.
 */
function wordsWithQ(wordsArr) {
    if (!Array.isArray(wordsArr)) return console.log(undefined);
    
    for (let word of wordsArr) {
        if (typeof word !== 'string') return console.log(undefined);
    }

    const wordsWithQArr = wordsArr.filter(word => word.includes('q'));
    const result = wordsWithQArr.length === 0 ? wordsArr : wordsWithQArr; // condition being checked is wordsWithQArr.length === 0 so if it evaluates to true result will be original array words (string type) if false it'll be new array elements (string) with words that have letter q
    return console.log(result.join(" ").trim());
};
//wordsWithQ(importedData); // returns and logs array of string elements with words that contain any instances of letter q
//wordsWithQ(testData); // returns and logs original array of string elements (bc doesn't contain letter q)
//wordsWithQ([1,2,3,4]); // returns and logs undefined
//wordsWithQ("hello"); // returns and logs undefined
//wordsWithQ (testData2); // returns and logs undefined
//wordsWithQ(testData2); // returns and logs undefined

/**
 * Returns and logs to the console an array of strings with words containing any instances of the letter argument or the original array if there are no words that contain the letter argument.
 * @param {String[]} wordsArr - An array of strings.
 * @param {String} letter - a non-numerical string with length 1 representing a letter from the english alphabet.
 * @returns {String | Undefined} - Returns and logs string with words containing any instances of the letter argument or return and logs the original array if there are no words that contain the letter argument. Returns and logs undefined when array argument is not an array of strings, or when letter argument is not 1 letter (character that is string type).
 */
function findWordsWithLetter (wordsArr, letter) {
    // edge cases
    if (typeof letter !== 'string' && letter.length !== 1) return console.log(undefined);
    if (Number(letter) >= 0 || Number(letter) <= 0) return console.log(undefined); // for instances where letter is "1" for example
    let caseInsensitiveLetter = letter.toLowerCase();
    if (!Array.isArray(wordsArr)) return console.log(undefined);    
    if (!wordsArr.every(word => typeof word === 'string')) return console.log(undefined); //instead of a for loop and if statement use .every to iterate through array and check the condition typeof word === 'string' when entire callback has bang operator (to check if any and not all contain strings)

    // finally getting to the point
        let wordsWithLetterArr = wordsArr.filter(words => words.toLowerCase().includes(caseInsensitiveLetter)); // saves to variable all the words that contain instances of letter argument
        if (wordsWithLetterArr.length === 0) { // if empty array
        return console.log(wordsArr.join(" ").trim()); // returns and logs string of words of original array
        } else return console.log(wordsWithLetterArr.join(" ").trim()); // returns and logs string of words that contain instances of letter argument
};
//findWordsWithLetter(testData, "X"); // returns and logs all words (string) in array argument since x isn't included in any of them
//findWordsWithLetter(testData, "L"); // returns and logs only words (string) with letter L
//findWordsWithLetter(importedData, "p"); // returns and logs only words (string) with letter p
//findWordsWithLetter(importedData, 1); // returns and logs undefined
//findWordsWithLetter(importedData, "1"); // returns and logs undefined
//findWordsWithLetter(testData2, "l"); // returns and logs undefined
//findWordsWithLetter({name: "Bob"}, "b"); // returns and logs undefined