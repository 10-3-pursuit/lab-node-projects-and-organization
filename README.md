# Wordle Word Solver

This lab requires you to create a new node project, import the data from `words.json`, and create some functionality to use the data.

[What is wordle?](https://www.nytimes.com/games/wordle/index.html)

[Word list provided by tabatkins on GitHub](https://github.com/tabatkins/wordle-list)

## Getting started

1. Fork and clone this repository.
1. Navigate to the cloned repository's directory on your command line.
1. Turn this project into a Node.js project by running `npm init -y`.
1. Open up the repository in VSCode.
1. Create an `index.js` file.
1. Import `words.json` into `index.js` and confirm that it has been imported into your file by logging the value.

## Instructions

To complete this lab, you will need to complete the functions listed below.

Wordle is a simple guessing game where you must guess a five-letter word in 6 tries or less.

Every time you guess a word, you learn if you have found any letters that are correct and in the correct position or correct but in the wrong position.

The goal will be to build two functions that will return a list of possible words that match your guesses so far.

You can see an implementation of this functionality using the instructions from [tabatkin's version](https://github.com/tabatkins/wordle-list#filtering-guesses-with-grep)

### Start simple

Write the following functions:

- `allWords` logs all the words.
- `firstTenWords` logs the first ten words.
- `nextTenWords` logs the next 10 words.
- `firstXWords` logs from 0 to x words.
- `subsetOfWords` logs from x to y words.
- `sortWords` logs all the words, sorted alphabetically.

### Begin building the wordle solver functions

One of the biggest challenges in learning to code is learning how to break down a complex set of logic into small testable functions.

The worlde solver requires two functions:

- One that returns a list of words that has matching letters in any position
- One that returns a list of words that has matching letters that also match the position

Let's start with some simpler versions:

Write the following functions

- `wordsWithQ` returns all the words that contain the letter q
- `findWordsWithLetter` takes an argument `letter` and returns all the words with that matching letter

**Note:** When creating this functionality, it's okay to use just a sample set of 3-10 words. This step can make troubleshooting a bit easier. Be sure to test for the following scenarios:

- find a word with the matching letter
- find a word with more than one of the matching letter
- find a word with no matching letters

### Upgrade your functionality

Instead of hard-coding the value for `findWordsWithLetter`, instead set it up so the user can input a letter from the terminal.

The following would test the letter P with the `findWordsWithLetter` function:

```bash
node index.js p
```

### Bonus

- Write a function `lettersMatch` that lets you input up to 5 letters in any order and returns the words that match the criteria (don't worry about solving for duplicate letters).
  - `node index.js aeiou`
- Write a function `lettersExactMatch` that lets you input a five-character string. Put letters with the exact placement in their place, and put a placeholder like `.` or `_` for unknown letters.
- `node index.js exactly a_ie_`
- Update the function `lettersMatch` to handle duplicate letters
- Create a new function that can handle both inputs
  - One input for matched letters in the wrong position
  - The second input for matched letters in the correct position
  - `node index.js al__a o`
