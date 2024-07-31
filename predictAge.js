const predictAge = (...ages) => {
  return Math.floor(
    Math.sqrt(ages.map((age) => age * age).reduce((sum, age) => sum + age, 0)) /
      2
  );
};

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));
