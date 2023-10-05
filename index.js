const wordsJson = require("./words.json")
//console.log(wordsJson)
function allWords(arr) {
   for( let i = 0; i < arr.length; i++){
    console.log(arr[i])
// or use arr.map((word)=> console.log(word))

// for(let word of arr) {
    //console.log(word)
// }
   } 
}
//allWords(wordsJson)

function firstTenWords(arr) {
    for( let i = 0; i < 10; i++){
        console.log(arr[i])
//for(let word of arr) {
//console.log(arr.map())
}
}
//console.log(firstTenWords(wordsJson))
function nextTenWords(arr) {
    for( let i = 10; i < 20; i++){
        console.log(arr[i])  
    }
}
//console.log(nextTenWords(wordsJson))
function firstXWords(words, x) {
    for( let i = 0; i < x; i++) {
        console.log(words[i])    
    }
}
//console.log(firstXWords(wordsJson, 9))
function subsetOfWords(words, x, y) {
let min = Math.min(x, y)
let max = Math.max(x, y)
for( let i = min - 1; i < max; i++) {
    console.log(words[i]) 
}
}
console.log(subsetOfWords(wordsJson,25 , 5))