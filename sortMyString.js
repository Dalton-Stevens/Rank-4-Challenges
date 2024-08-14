const sortMyString = (str) => {
  let even = "";
  let odd = "";

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      even += str[i];
    } else {
      odd += str[i];
    }
  }

  return `${even} ${odd}`;
};

console.log(sortMyString("CodeWars"));
console.log(sortMyString("YCOLUE'VREER"));
