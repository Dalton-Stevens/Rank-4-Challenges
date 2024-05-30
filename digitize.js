const digitize = (num) => {
  return num
    .toString()
    .split("")
    .reverse()
    .map((x) => +x);
};

console.log(digitize(1234));
console.log(digitize(0));
console.log(digitize(8584393));
