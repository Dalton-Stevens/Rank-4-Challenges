const stockList = (listOfArt, listOfCat) => {
  if (listOfArt.length === 0 || listOfCat.length === 0) return "";

  const catSums = {};

  listOfCat.forEach((cat) => {
    catSums[cat] = 0;
  });

  listOfArt.forEach((book) => {
    const [code, quantity] = book.split(" ");
    const cat = code[0];

    if (catSums.hasOwnProperty(cat)) {
      catSums[cat] += +quantity;
    }
  });

  return listOfCat.map((cat) => `(${cat} : ${catSums[cat]})`).join(" - ");
};

console.log(
  stockList(
    ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"],
    ["A", "B", "C", "D"]
  )
);
console.log(
  stockList(
    ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"],
    ["A", "B"]
  )
);
