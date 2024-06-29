// String incrementer
// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100

// 28 April 2024

function incrementString(strng) {
  let string = "";
  let number = "";

  strng.split("").map((latter) => {
    if (parseInt(latter)) {
      number += latter;
    } else {
      string += latter;
    }
  });

  if (!!number) {
    return string + (parseInt(number) + 1);
  } else {
    return string.slice(0, string.length - 1) + 1;
  }
}

console.log(incrementString("foobar00"));
