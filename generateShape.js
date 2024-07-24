const generateShape = (num) => {
  let square = "";

  for (let i = 0; i < num; i++) {
    for (let x = 0; x < num; x++) {
      square += "+";
    }
    if (i < num - 1) {
      square += "\n";
    }
  }

  return square;
};

console.log(generateShape(4));
console.log(generateShape(6));
console.log(generateShape(8));
