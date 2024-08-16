const number = (busStops) => {
  let people = 0;

  for (let i = 0; i < busStops.length; i++) {
    people += busStops[i][0];
    people -= busStops[i][1];
  }

  return people;
};

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
);
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8],
  ])
);
