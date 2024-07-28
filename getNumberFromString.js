const getNumberFromString = (str) => {
  return +str.replace(/\D/g, "");
};

console.log(getNumberFromString("this is number: 7"));
console.log(getNumberFromString("123"));
