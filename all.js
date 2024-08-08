const all = (arr, fn) => {
  for (let item of arr) {
    if (!fn(item)) {
      return false;
    }
  }

  return true;
};

console.log(
  all([1, 2, 3, 4, 5], function (v) {
    return v < 9;
  })
);
console.log(
  all([1, 2, 3, 4, 5], function (v) {
    return v > 9;
  })
);
