const arr = [0, 10, 20, 30];
const fn = function greaterThan10(n) {
  return n > 10;
};

var filter = function (arr, fn) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i) && result.push(arr[i]);
  }

  return result;
};
