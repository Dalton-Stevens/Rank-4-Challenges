const chooseBestSum = (t, k, ls) => {
  let bestSum = null;

  const combinations = (arr, k) => {
    let result = [];
    let f = function (prefix, arr, k) {
      if (k == 0) {
        result.push(prefix);
        return;
      }

      for (let i = 0; i < arr.length; i++) {
        f(prefix.concat(arr[i]), arr.slice(i + 1), k - 1);
      }
    };

    f([], arr, k);
    return result;
  };

  let combs = combinations(ls, k);

  for (let i = 0; i < combs.length; i++) {
    let sum = combs[i].reduce((a, b) => a + b, 0);

    if (sum <= t && (bestSum === null || sum > bestSum)) {
      bestSum = sum;
    }
  }

  return bestSum;
};

console.log(chooseBestSum(163, 3, [50, 55, 56, 57, 58]));
console.log(chooseBestSum(163, 3, [50]));
console.log(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]));
