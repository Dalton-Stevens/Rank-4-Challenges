const roundToNext5 = (num) => {
  return Math.ceil(num / 5) * 5;
};

console.log(roundToNext5(0));
console.log(roundToNext5(1));
console.log(roundToNext5(7));
