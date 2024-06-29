function findOdd(A) {
  let count = 0;
  A.map((a) => {
    count ^= a;
  });
  return count;
}

console.log(findOdd([7, 7, 1]));
