const maximumProduct = (arr) => {
  let maxProd = arr[0] * arr[1];

  for (let i = 1; i < arr.length - 1; i++) {
    const prod = arr[i] * arr[i + 1];

    if (prod > maxProd) {
      maxProd = prod;
    }
  }

  return maxProd;
};

console.log(maximumProduct([1, 2, 3]));
console.log(maximumProduct([1, 5, 10, 9]));
console.log(maximumProduct([4, 12, 3, 1, 5]));
