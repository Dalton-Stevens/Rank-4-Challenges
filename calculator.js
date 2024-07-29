const calculator = (a, b, sign) => {
  if (typeof a !== "number" || typeof b !== "number") return "unknown value";

  return sign === "+"
    ? a + b
    : sign === "-"
    ? a - b
    : sign === "*"
    ? a * b
    : sign === "/"
    ? a / b
    : "unknown value";
};

console.log(calculator(1, 2, "+"));
console.log(calculator(3, 5, "*"));
console.log(calculator(6, 2, "$"));
