const words = require('./words.json')
const inform = console.log

function allWords(){
    inform("All words:");
    words.forEach(word =>{
        inform(word)
    });
}

function firstTenWords(){
    inform("First 10 words:");
    for(let i =0; i <10 && i < words.length; i++){
        inform(words[i])
    }
}


function nextTenWords(startOf) {
    inform("Next 10 words:");
    const endOf = Math.min(startOf + 10, words.length);
    for (let i = startOf; i < endOf; i++) {
      inform(words[i]);
    }
  }
  
  
  function firstXWords(x) {
    inform(`First ${x} words:`);
    const endOf1 = Math.min(x, words.length);
    for (let i = 0; i < endOf1; i++) {
      inform(words[i]);
    }
  }
  

function subsetOfWords(a, b) {
    inform(`Words from index ${a} to ${b}:`);
    const endOf2 = Math.min(b + 1, words.length);
    for (let i = a; i < endOf2; i++) {
      inform(words[i]);
    }
  }
  
  
  function sortWords() {
    inform("Sorted words:");
    const sortedWords = [...words].sort();
    sortedWords.forEach(word => {
      inform(word);
    });
  }
  
 
function wordsWithQ() {
    const wordsWithQ1 = words.filter(word => word.includes('q'));
    return wordsWithQ1;
  }
  
  
  function findWordsWithLetter(letter) {
    const wordsWithLetter1 = words.filter(word => word.includes(letter));
    return wordsWithLetter1;
  }
  

  
 wordsWithQ();
findWordsWithLetter(); 
allWords();
firstTenWords();
nextTenWords(10);
firstXWords(11);
subsetOfWords(13, 24);
sortWords();
