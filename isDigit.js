const isDigit = (str) => {
  return /^-?\d+(\.\d+)?$/.test(str.trim());
};

console.log(isDigit("s2324"));
console.log(isDigit("-234.4"));
