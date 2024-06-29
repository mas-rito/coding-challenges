// var once = function (fn) {
//   let i = 0;
//   return function (...args) {
//     i++;
//     return i === 1 ? fn(...args) : undefined;
//   };
// };

// more efficient solution
var once = function (fn) {
  let called = false;
  return function (...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
    return undefined;
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // returns undefined without calling fn

console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6));
