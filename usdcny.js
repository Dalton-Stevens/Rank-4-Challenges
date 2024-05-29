const usdcny = (usd) => {
  return (usd * 6.75).toFixed(2) + " Chinese Yuan";
};

console.log(usdcny(15));
console.log(usdcny(465));
