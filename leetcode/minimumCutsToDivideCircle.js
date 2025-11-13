var numberOfCuts = function (n) {
  if (n === 1) return 0;
  return n % 2 === 0 ? n / 2 : n;
};

for (let i = 1; i <= 7; i++) {
  console.log(numberOfCuts(i));
}
