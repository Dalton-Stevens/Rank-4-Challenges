const pillars = (numPill, dist, width) => {
  if (numPill === 1) {
    return 0;
  }

  return (numPill - 1) * (dist * 100) + (numPill - 2) * width;
};

console.log(pillars(1, 10, 10));
console.log(pillars(2, 20, 25));
console.log(pillars(11, 15, 30));
