const sumDigits = (num) => {
  let sum = 0;

  for (let char of Math.abs(num).toString()) {
    sum += +char;
  }

  return sum;
};

console.log(sumDigits(10));
console.log(sumDigits(99));
console.log(sumDigits(-32));
