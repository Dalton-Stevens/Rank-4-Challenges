const dirReduc = (directions) => {
  const newDirs = [];

  for (let i = 0; i < directions.length; i++) {
    const direction = directions[i];
    const last = newDirs[newDirs.length - 1];

    if (
      (last === "NORTH" && direction === "SOUTH") ||
      (last === "SOUTH" && direction === "NORTH") ||
      (last === "EAST" && direction === "WEST") ||
      (last === "WEST" && direction === "EAST")
    ) {
      newDirs.pop();
    } else {
      newDirs.push(direction);
    }
  }

  return newDirs;
};

console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));
