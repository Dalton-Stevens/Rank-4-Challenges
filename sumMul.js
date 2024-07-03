const sumMul = (n, m) => {
  if (n <= 0 || m <= 0) {
    return "INVALID";
  }

  let sum = 0;
  for (let i = n; i < m; i += n) {
    sum += i;
  }

  return sum;
};

console.log(sumMul(0, 0));
console.log(sumMul(2, 9));
console.log(sumMul(4, -7));
