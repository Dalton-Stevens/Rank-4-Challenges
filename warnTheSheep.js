const warnTheSheep = (queue) => {
  return queue.indexOf("wolf") === queue.length - 1
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${
        queue.length - 1 - queue.indexOf("wolf")
      }! You are about to be eaten by a wolf!`;
};

console.log(
  warnTheSheep([
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "wolf",
    "sheep",
    "sheep",
  ])
);
console.log(
  warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"])
);
console.log(
  warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"])
);
console.log(warnTheSheep(["sheep", "sheep", "wolf"]));
