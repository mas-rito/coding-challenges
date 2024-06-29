// Shortest Word
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// 26 February 2024

function findShort(s) {
  const wordsArray = s.split(" ");
  let shortestWord = wordsArray[0];

  wordsArray.map((word) => {
    if (word.length < shortestWord.length) {
      shortestWord = word;
    }
  });

  return shortestWord.length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
