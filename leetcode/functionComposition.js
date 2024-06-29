var compose = function (functions) {
  // return function (x) {
  //   let res = x;
  //   for (let i = functions.length; i > 0; i--) {
  //     res = functions[i - 1](res);
  //   }
  //   return res;
  // };

  // more efficient solution
  return function (x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
};

const functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
const x = 4;

const fn = compose(functions);

console.log(fn(x));
