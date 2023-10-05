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
allWords(wordsJson)

function firstTenWords(arr) {
for(let word of arr) {
console.log(arr)
}
}