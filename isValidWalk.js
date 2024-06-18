const isValidWalk = (walk) => {
  if (walk.length !== 10) return false;

  let x = 0,
    y = 0;

  for (let direction of walk) {
    if (direction === "n") y += 1;
    if (direction === "s") y -= 1;
    if (direction === "e") x += 1;
    if (direction === "w") x -= 1;
  }

  return x === 0 && y === 0;
};

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
);
console.log(isValidWalk(["w"]));
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
