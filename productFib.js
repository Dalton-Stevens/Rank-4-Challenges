const productFib = (prod) => {
  let a = 0;
  let b = 1;

  while (a * b < prod) {
    let next = a + b;
    a = b;
    b = next;
  }

  return [a, b, a * b === prod];
};

console.log(productFib(4895));
console.log(productFib(5895));
console.log(productFib(74049690));
