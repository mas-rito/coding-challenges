// Simple Pig Latin
// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// 07 Maret 2024

function pigIt(str) {
  return str
    .split(" ")
    .map((word) =>
      word.match(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/)
        ? word.slice(1) + word[0]
        : word.slice(1) + word[0] + "ay"
    )
    .join(" ");
}

// best solution from someone
function pigIt(str) {
  return str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3");
}

console.log(pigIt("Pig latin is cool !"));
