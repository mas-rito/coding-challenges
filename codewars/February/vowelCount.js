// Vowel Count
// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// 26 February 2024

function getCount(str) {
  let count = 0;

  str.split("").map((latter) => {
    if (
      latter === "a" ||
      latter === "u" ||
      latter === "i" ||
      latter === "e" ||
      latter === "o"
    ) {
      count++;
    }
  });
  return count;
}

// best solution
function getCount(str) {
  return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
}

console.log(getCount("assua"));
