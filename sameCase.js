const sameCase = (a, b) => {
  const isLetter = (char) => {
    return char.toLowerCase() !== char.toUpperCase();
  };

  return !isLetter(a) || !isLetter(b)
    ? -1
    : (a === a.toUpperCase() && b === b.toUpperCase()) ||
      (a === a.toLowerCase() && b === b.toLowerCase())
    ? 1
    : 0;
};

console.log(sameCase("C", "B"));
console.log(sameCase("d", "d"));
console.log(sameCase("A", "s"));
console.log(sameCase("H", ":"));
