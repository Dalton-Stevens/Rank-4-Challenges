const arrayDiff = (a, b) => {
  return a.filter((x) => !b.includes(x));
};

console.log(arrayDiff([1, 2], [1]));
console.log(arrayDiff([1, 2, 2], [1]));
console.log(arrayDiff([1, 2, 2], [2]));
