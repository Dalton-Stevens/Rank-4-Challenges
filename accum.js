const accum = (str) => {
  return str
    .split("")
    .map((char, index) => {
      return char.toUpperCase() + char.toLowerCase().repeat(index);
    })
    .join("-");
};

console.log(accum("ZpglnRxqenU"));
console.log(accum("NyffsGeyylB"));
console.log(accum("MjtkuBovqrU"));
