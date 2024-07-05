const bump = (str) => {
  return (str.match(/n/g) || []).length <= 15 ? "Woohoo!" : "Car Dead";
};

console.log(bump("n"));
console.log(bump("nnn_n__n_n___nnnnn___n__nnn__"));
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"));
