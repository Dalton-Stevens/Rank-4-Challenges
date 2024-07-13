const multiply = (num) => {
  return num * Math.pow(5, Math.abs(num).toString().length);
};

console.log(multiply(10));
console.log(multiply(5));
console.log(multiply(200));
