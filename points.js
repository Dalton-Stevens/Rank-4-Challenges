const points = (games) => {
  let totalPoints = 0;

  for (let game of games) {
    let [x, y] = game.split(":").map(Number);

    if (x > y) {
      totalPoints += 3;
    } else if (x === y) {
      totalPoints += 1;
    } else {
      totalPoints += 0;
    }
  }

  return totalPoints;
};

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);
console.log(
  points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
);
console.log(
  points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])
);
