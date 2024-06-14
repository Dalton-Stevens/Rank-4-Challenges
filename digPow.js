const digPow = (n, p) => {
  let digits = String(n).split("").map(Number);

  let sum = digits.reduce(
    (acc, digit, index) => acc + Math.pow(digit, p + index),
    0
  );

  if (sum % n === 0) {
    return sum / n;
  } else {
    return -1;
  }
};

console.log(digPow(89, 1));
console.log(digPow(92, 1));
console.log(digPow(46288, 3));
