let fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"],
];

const streetFighter = (fighters, position, moves) => {
  const result = [];
  let [x, y] = position;

  moves.forEach((move) => {
    if (move === "up") {
      x = Math.max(0, x - 1);
    } else if (move === "down") {
      x = Math.min(fighters.length - 1, x + 1);
    } else if (move === "left") {
      y = y === 0 ? fighters[x].length - 1 : y - 1;
    } else if (move === "right") {
      y = y === fighters[x].length - 1 ? 0 : y + 1;
    }

    result.push(fighters[x][y]);
  });

  return result;
};

console.log(
  streetFighter(fighters, [0, 0], ["up", "left", "right", "left", "left"])
);
console.log(streetFighter(fighters, [0, 0], []));
console.log(
  streetFighter(
    fighters,
    [0, 0],
    ["left", "left", "left", "left", "left", "left", "left", "left"]
  )
);
