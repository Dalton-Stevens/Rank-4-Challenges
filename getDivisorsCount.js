const getDivisorsCount = (num) => {
  let count = 0;

  for (let i = 0; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      count++;

      if (i !== num / i) {
        count++;
      }
    }
  }

  return count;
};

console.log(getDivisorsCount(1));
console.log(getDivisorsCount(10));
console.log(getDivisorsCount(11));
console.log(getDivisorsCount(54));
