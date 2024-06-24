const thirt = (n) => {
  const sequence = [1, 10, 9, 12, 3, 4];

  const nextSum = (num) => {
    const digits = num.toString().split("").reverse();
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
      sum += digits[i] * sequence[i % sequence.length];
    }

    return sum;
  };

  let curr = n;
  let next = nextSum(curr);

  while (curr !== next) {
    curr = next;
    next = nextSum(curr);
  }

  return curr;
};

console.log(thirt(8529));
console.log(thirt(85299258));
console.log(thirt(5634));
