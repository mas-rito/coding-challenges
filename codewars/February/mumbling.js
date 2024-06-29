// Mumbling
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// 26 February 2024

function accum(s) {
  return s
    .split("")
    .map(
      (latter, index) =>
        latter.toUpperCase() + latter.toLowerCase().repeat(index)
    )
    .join("-");
}

console.log(accum("abcd"));
