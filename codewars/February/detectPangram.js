// Detect Pangram
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
// 26 February 2024

// function isPangram(string) {
//   const clean = string.toLowerCase().replace(/[^a-z]/g, "");
//   const unique = new Set(clean);
//   return unique.size == 26;
// }

function isPangram(string) {
  return new Set(string.toLowerCase().replace(/[^a-z]/g, "")).size == 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
