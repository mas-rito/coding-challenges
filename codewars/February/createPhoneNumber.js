// Create Phone Number
// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// 26 February 2024

function createPhoneNumber(numbers) {
  const countryCode = numbers.slice(0, 3).join("");
  const firstNumber = numbers.slice(3, 6).join("");
  const lastnumber = numbers.slice(6).join("");
  return `(${countryCode}) ${firstNumber}-${lastnumber}`;
}

// Better solution
function createPhoneNumber(numbers) {
  return numbers.reduce((p, c) => p.replace("x", c), "(xxx) xxx-xxxx");
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
