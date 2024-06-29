// Split Strings
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// 26 February 2024

function solution(str) {
  if (str.length == 0) {
    return [];
  }
  let characters = [];

  str.match(/.{1,2}/g).map((character) => {
    character.length == 1
      ? characters.push(character + "_")
      : characters.push(character);
  });

  return characters;
}

console.log(solution(""));
