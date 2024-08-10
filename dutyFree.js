const dutyFree = (normPrice, discount, holiday) => {
  return Math.floor(holiday / ((normPrice * discount) / 100));
};

console.log(dutyFree(12, 50, 1000));
console.log(dutyFree(17, 10, 500));
console.log(dutyFree(24, 35, 3000));
