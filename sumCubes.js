const sumCubes = (n) => {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum += i ** 3;
  }

  return sum;
};

console.log(sumCubes(2));
console.log(sumCubes(3));
