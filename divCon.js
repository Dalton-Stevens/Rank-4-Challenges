const divCon = (arr) => {
  let sum = 0;
  let sub = 0;

  for (let el of arr) {
    if (typeof el === "number") {
      sum += el;
    } else if (typeof el === "string" && !isNaN(el)) {
      sub += +el;
    }
  }

  return sum - sub;
};

console.log(divCon([9, 3, "7", "3"]));
console.log(divCon(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
console.log(divCon(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));
