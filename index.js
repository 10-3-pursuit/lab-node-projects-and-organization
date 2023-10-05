const importedData = require ("./words.json");

//console.log(importedData);

/**
 * Returns a string of all of the words in array input
 * @param {String[]}  - An array of strings.
 * @returns {string} - A string of words.
 */
function allWords(wordsArr) {
    let loggedWords = "";
    for (let word of wordsArr) {
        loggedWords += `${word} `;
        loggedWords.trim();
    }
    return console.log(loggedWords); // logs all the words when allWords is invoked
};
//allWords(importedData); // there is no test file

/**
 * Returns a string of first 10 words in array input
 * @param {String[]}  - An array of strings.
 * @returns {string} - A string of words.
 */
function firstTenWords (wordsArr) {
    if (wordsArr.length >= 10) {
    let loggedFirst10Words = "";
    let word = "";
    for (let i=0; i < 10; i++) {
        word = wordsArr[i];
        loggedFirst10Words += `${word} `;
        loggedFirst10Words.trim();
    }}
    return console.log(loggedFirst10Words); // logs first ten words when firstTenWords is invoked
};
//firstTenWords(importedData);

/**
 * Returns a string of next 10 words in array input starting from the 10th word in an array
 * @param {String[]}  - An array of strings.
 * @returns {string} - A string of words.
 */
function nextTenWords (wordsArr) {
    //array must contain at least 20 strings
    if (wordsArr.length >= 20) {
    let loggedNext10Words = "";
    let word = "";
    for (let i=10; i < 20; i++) {
        word = wordsArr[i];
        loggedNext10Words += `${word} `;
        loggedNext10Words.trim();
    }
}
    return console.log(loggedNext10Words); // logs next ten words when nextTenWords is invoked
};
//nextTenWords(importedData)

// x is an integer number bigger than 0

function firstXWords (wordsArr, x) {
    if (wordsArr.length >= 2) {
    let loggedXWords = "";
    let word = "";
    if (x > 0) {
    for (let i=0; i < x; i++) {
        word = wordsArr[i];
        loggedXWords += `${word} `;
        loggedXWords.trim();
    }
}}
    return loggedXWords;
};
//console.log (firstXWords(importedData, 5));

//x is start (not inclusive)
//y is end (inclusive)
function subsetOfWords (wordsArr, x, y) {
    if (wordsArr.length >= 2) {
    let loggedsubsetOfWords = "";
    let word = "";
    if (x => 0 && y >= 0 && x < y && x !== y) {
    for (let i=x; i < y; i++) {
        word = wordsArr[i];
        loggedsubsetOfWords += `${word} `;
        loggedsubsetOfWords.trim();
    }
} else {
    return undefined;
}}
    return console.log(loggedsubsetOfWords);
};
//subsetOfWords(importedData,0,6) // Output includes words 1 - 6
//subsetOfWords(importedData,7,6) // output is error message
//subsetOfWords(importedData,6,6) // output is error message
//subsetOfWords(importedData,4,6) // output will not include word 4. Output will be words 5 and 6
function sortWords (wordsArr) {
    wordsArr.sort();
    let sortedWords = "";
    for (let word of wordsArr) {
        sortedWords += `${word} \n`;
        sortedWords.trim();
    }
    return sortedWords;
};
//sortWords(importedData)

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
"woops"
];
// fx wordsWithQ Returns list of words that contain letter q
// finds a word with matching letter q
// finds a word with more than 1 matching letter q
// finds a word with no matching letters? probably to return an error
// not complete because needs edge case for error return 
function wordsWithQ (wordsArr) {
    const wordsWithQArr = wordsArr.filter(word => word.includes('q'));
    if (wordsWithQArr.length === 0) {
        return console.log(wordsArr);
    }
    return console.log(wordsWithQArr);
};
//wordsWithQ(importedData)
//wordsWithQ(testData)
// I think complete? it has the edge case for error return
function findWordsWithLetter (wordsArr, letter) {
    if (typeof letter === 'string' && letter.length === 1) {
        let caseInsensitiveLetter = letter.toLowerCase();
        for (let words of wordsArr) {
            if (!words.toLowerCase().includes(caseInsensitiveLetter))
            return wordsArr.join(" ").trim();
        };
        let wordsWithLetterArr = wordsArr.filter(words => words.toLowerCase().includes(caseInsensitiveLetter))
        return wordsWithLetterArr.join(" ").trim();
    }
 };
//findWordsWithLetter(importedData)
//findWordsWithLetter(testData)
// ---- Test data: ----

//console.log (findWordsWithLetter(testData, "X")); // returns all words since x isn't included in any of them
//console.log (findWordsWithLetter(testData, "L")); // returns only words with letter L
//console.log (findWordsWithLetter(importedData, "L")); // should print out words that contain that letter