const sumTriangularNumbers = (num) => {
  if (num < 0) return 0;

  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += (i * (i + 1)) / 2;
  }

  return sum;
};

console.log(sumTriangularNumbers(6));
console.log(sumTriangularNumbers(34));
console.log(sumTriangularNumbers(-291));
