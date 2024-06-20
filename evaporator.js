const evaporator = (content, evapPerDay, threshold) => {
  let days = 0;
  let percentage = 100;

  while (percentage > threshold) {
    percentage -= percentage * (evapPerDay / 100);
    days++;
  }

  return days;
};

console.log(evaporator(10, 10, 10));
