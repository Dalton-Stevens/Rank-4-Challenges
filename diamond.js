const diamond = (num) => {
  if (num <= 0 || num % 2 === 0) {
    return null;
  }

  let diamond = "";

  for (let i = 0; i < num; i++) {
    let line = "";
    let stars = i <= Math.floor(num / 2) ? 2 * i + 1 : 2 * (num - i - 1) + 1;
    let spaces = (num - stars) / 2;

    line += " ".repeat(spaces);
    line += "*".repeat(stars);

    diamond += line + "\n";
  }

  return diamond;
};

console.log(diamond(1));
console.log(diamond(3));
console.log(diamond(5));
console.log(diamond(4));
