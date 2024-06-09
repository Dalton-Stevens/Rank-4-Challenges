const defineSuit = (card) => {
  const suit = {
    "♣": "clubs",
    "♦": "diamonds",
    "♥": "hearts",
    "♠": "spades",
  };

  return suit[card.slice(-1)];
};

console.log(defineSuit("Q♠"));
console.log(defineSuit("9♦"));
console.log(defineSuit("J♥"));
