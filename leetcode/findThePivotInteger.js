var pivotInteger = function (n) {
  let valueLeft = 1;
  let valueRight = n;
  let sumLeft = valueLeft;
  let sumRight = valueRight;

  if (n == 1) {
    return 1;
  }

  while (valueLeft < valueRight) {
    if (sumLeft < sumRight) {
      sumLeft += valueLeft + 1;
      valueLeft += 1;
    } else {
      sumRight += valueRight - 1;
      valueRight -= 1;
    }

    if (sumLeft == sumRight && valueLeft + 1 == valueRight - 1) {
      return valueLeft + 1;
    }
  }
  return -1;
};

// for (let i = 1; i <= 8; i++) {
//   console.log(pivotInteger(i));
// }

console.log(pivotInteger(8));
