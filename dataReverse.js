const dataReverse = (data) => {
  const totalBytes = data.length / 8;
  const arr = [];

  for (let i = totalBytes - 1; i >= 0; i--) {
    const start = i * 8;
    const end = start + 8;
    arr.push(...data.slice(start, end));
  }

  return arr;
};

console.log(
  dataReverse([
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
    0, 1, 0, 1, 0, 1, 0,
  ])
);
console.log(dataReverse([0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1]));
