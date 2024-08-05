const gps = (s, x) => {
  if (x.length <= 1) return 0;

  let maxSpeed = 0;

  for (let i = 1; i < x.length; i++) {
    let deltaDistance = x[i] - x[i - 1];
    let speed = (3600 * deltaDistance) / s;

    if (speed > maxSpeed) {
      maxSpeed = speed;
    }
  }

  return Math.floor(maxSpeed);
};

console.log(gps(20, [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61]));
console.log(
  gps(
    12,
    [
      0.0, 0.11, 0.22, 0.33, 0.44, 0.65, 1.08, 1.26, 1.68, 1.89, 2.1, 2.31,
      2.52, 3.25,
    ]
  )
);
console.log(
  gps(
    20,
    [
      0.0, 0.18, 0.36, 0.54, 0.72, 1.05, 1.26, 1.47, 1.92, 2.16, 2.4, 2.64,
      2.88, 3.12, 3.36, 3.6, 3.84,
    ]
  )
);
