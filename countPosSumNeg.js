const countPosNegSum = (input) => {
  if (!input || input.length === 0) {
    return [];
  }

  let posCount = 0;
  let negSum = 0;

  input.forEach((num) => {
    if (num > 0) {
      posCount++;
    } else if (num < 0) {
      negSum += num;
    }
  });

  return [posCount, negSum];
};

console.log(
  countPosNegSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
);
console.log(
  countPosNegSum([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])
);
