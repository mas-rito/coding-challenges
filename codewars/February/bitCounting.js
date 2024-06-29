// Bit Counting
// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
// 25 February 2024

var countBits = function (n) {
  let count = 0;

  while (n > 0) {
    count += n & 1;
    n >>= 1;
  }
  return count;
};

console.log(countBits(476));
