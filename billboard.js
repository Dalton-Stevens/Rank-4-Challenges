const billboard = (name, price = 30) => {
  let cost = 0;

  for (let i = 0; i < name.length; i++) {
    cost += price;
  }
  return cost;
};

console.log(billboard("Abishai Charalampos"));
console.log(billboard("Claude Miljenko"));
console.log(billboard("Hadufuns John", 20));
