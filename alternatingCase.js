const alternatingCase = (str) => {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      newStr += str[i].toLowerCase();
    } else {
      newStr += str[i].toUpperCase();
    }
  }

  return newStr;
};

console.log(alternatingCase("hello world"));
console.log(alternatingCase("HELLO WORLD"));
console.log(alternatingCase("HeLLo WoRLD"));
