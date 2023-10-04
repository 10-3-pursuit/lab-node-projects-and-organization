const words = require("./words.json");
//it works and prints array of words
//console.log(words); 

const allWords = (words) => {
    console.log(...words);
};
//it works and logs all the words without an array by calling the function
// allWords(words); 


const firstTenWords = (words) => {
    for(let i = 0; i < 10; i++){
        console.log(words[i]);
    }
};
//it works and prints the first 10 words from the words array
// firstTenWords(words);


const nextTenWords = (words) => {
    for(let i = 9; i < 20; i++){
        console.log(words[i]);
    }
    // could use slice to print array
};
// nextTenWords(words);
// it works (JD tested it). though it does not work on my machine for some reason


const firstXWords = (words,index) => {
    for(let i = 0; i<index; i++){
        console.log(words[i]);
    }
    words.s
};
// firstXWords(words, 20)
// it works i tested it. prints first 20 words or inputed number


const subsetOfWords = (words,indexX,indexY) => {
    for(i= indexX; i < indexY; i++){
        console.log(words[i]);
    }
};
// subsetOfWords(words,2,10);
// it works i tested it ptrints words from one index to the next


const sortWords = (words) => {
    const SortedWords = words.sort((a,b)=> a.localeCompare(b));
    console.log(...SortedWords);
};
// sortWords(words);
// it works and prints all the sorted words out


const wordsWithQ = (words) =>{
    const filterdArray = words.filter((word) => word.includes("q"));
    console.log(...filterdArray);
}
// wordsWithQ(words);
// it works and prints all the words that includes q in them  


const findWordsWithLetter = (words,letter) =>{
    const filterdArray = words.filter((word) => word.includes(letter));
    console.log(...filterdArray);
}
findWordsWithLetter(words,process.argv[2]);
// it works and prints any letter inputed which is included in the words array.

