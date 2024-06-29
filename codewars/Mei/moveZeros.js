// Moving Zeros To The End
// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  const nonZero = [];
  const zeros = [];
  for (const element of arr) {
    if (element !== 0) {
      nonZero.push(element);
    } else {
      zeros.push(element);
    }
  }
  return [...nonZero, ...zeros];
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
