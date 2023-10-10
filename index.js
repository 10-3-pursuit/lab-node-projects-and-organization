// importing the info of the words.json file into the wordsJSON variable.
const wordsJSON = require("./words.json");

// defining function named allWords that takes a parameter named wordsJSON.
function allWords(words) {
  // logs the info of the wordsJSON parameter to the console.
  console.log(words);
};
// calling the allWords function in order to have it log.
// allWords(wordsJSON);




function firstTenWords(words) {
    //looping through array until it reaches the 10th index (0-9)
    for (let i = 0; i < 10; i++) {
    //logging each element until it reaches the 10th index(0-9)
    //   console.log(words[i]);
    }
  };
  //must invoke
    firstTenWords(wordsJSON);


  function nextTenWords(words) {
    //creating loop to begin at the 10th index and ends 10 indices later.
    for (let i = 10; i < 20; i++) {
    //   console.log(words[i]);
    }
  };
  //invoke
    nextTenWords(wordsJSON);


  function firstXWords(words, x) {
    //creating loop beginning a 0, and having x at it's stopping point. 
    for (let i = 0; i < x; i++) {
    //   console.log(words[i]);
    }
  };
//invoking and giving the arguments (array, (place you want the loop to stop))
    firstXWords(wordsJSON , 3);
  

  function subsetOfWords(words, x, y) {
    if (x < 0 || y >= words.length || x > y) {
    //   console.log("Invalid.");
      return;
    }
  
    for (let i = x; i <= y; i++) {
    //   console.log(words[i]);
    }
  };
    subsetOfWords(wordsJSON,-4 ,118);
        

    const sortWords = (words) =>{
        // console.log(words.sort((a,b) => a.localeCompare(b)));
    };
       sortWords(wordsJSON);


       function wordsWithQ(words) {
        return words.filter(word => word.includes('q'));
      }

      wordsWithQ(wordsJSON);


      function findWordsWithLetter(words, letter) {
        return words.filter(word => word.includes(letter));
      }
      console.log(findWordsWithLetter(wordsJSON, "z"));

      function findWordsWithLetter(words, letter) {
        const wordsWithLetter = words.filter(word => word.includes(letter));
        return wordsWithLetter;
      }
      
      const letter = process.argv[2]; 
      
      if (letter) {
        console.log(`Words with the letter '${letter}':`, findWordsWithLetter(wordsJSON, letter));
      
      };
      
      