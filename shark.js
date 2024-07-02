const shark = (
  pontoonDistance,
  sharkDistance,
  youSpeed,
  sharkSpeed,
  dolphin
) => {
  if (dolphin) {
    sharkSpeed /= 2;
  }

  return pontoonDistance / youSpeed < sharkDistance / sharkSpeed
    ? "Alive!"
    : "Shark Bait!";
};

console.log(shark(12, 50, 4, 8, true));
console.log(shark(7, 55, 4, 16, true));
console.log(shark(24, 0, 4, 8, true));
