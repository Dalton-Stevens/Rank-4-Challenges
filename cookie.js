const cookie = (x) => {
  const message = "Who ate the last cookie? It was";

  return typeof x === "string"
    ? `${message} Zach!`
    : typeof x === "number"
    ? `${message} Monica!`
    : `${message} the dog!`;
};

console.log(cookie("string"));
console.log(cookie(26));
console.log(cookie(true));
