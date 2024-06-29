String.prototype.toJadenCase = function () {
  let words = this.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
};

const quote = "how can mirrors be real if our eyes aren't real";
console.log(quote.toJadenCase());
