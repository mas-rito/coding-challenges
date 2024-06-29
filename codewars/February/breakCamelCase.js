// Break Camel Case
// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
//* "camelCasing"  =>  "camel Casing"
//* "identifier"   =>  "identifier"
//* ""             =>  ""
// 26 February 2024

function solution(string) {
  return string.replace(/([a-z])([A-Z])/g, "$1 $2");
}

console.log(solution("camelCasing"));
