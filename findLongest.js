const findLongest = (arr) => {
  let digits = 0;
  let mostDigits = arr[0];

  arr.forEach((num) => {
    const digCount = Math.abs(num).toString().length;

    if (digCount > digits) {
      digits = digCount;
      mostDigits = num;
    }
  });

  return mostDigits;
};

console.log(findLongest([1, 10, 100]));
console.log(findLongest([9000, 8, 800]));
console.log(findLongest([8, 900, 500]));
