const enough = (cap, on, wait) => {
  return cap - on >= wait ? 0 : wait - (cap - on);
};

console.log(enough(10, 5, 5));
console.log(enough(100, 60, 50));
console.log(enough(20, 5, 5));
