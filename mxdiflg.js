const mxdiflg = (a1, a2) => {
  if (a1.length === 0 || a2.length === 0) return -1;

  let maxA1 = Math.max(...a1.map((str) => str.length));
  let minA1 = Math.min(...a1.map((str) => str.length));
  let maxA2 = Math.max(...a2.map((str) => str.length));
  let minA2 = Math.min(...a2.map((str) => str.length));

  return Math.max(Math.abs(maxA1 - minA2), Math.abs(maxA2 - minA1));
};

console.log(
  mxdiflg(
    [
      "hoqq",
      "bbllkw",
      "oox",
      "ejjuyyy",
      "plmiis",
      "xxxzgpsssa",
      "xxwwkktt",
      "znnnnfqknaz",
      "qqquuhii",
      "dvvvwz",
    ],
    ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
  )
);
