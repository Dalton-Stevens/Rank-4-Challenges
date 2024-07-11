const calculateTip = (amount, rating) => {
  let tipPer;

  switch (rating.toLowerCase()) {
    case "terrible":
      tipPer = 0;
      break;
    case "poor":
      tipPer = 0.05;
      break;
    case "good":
      tipPer = 0.1;
      break;
    case "great":
      tipPer = 0.15;
      break;
    case "excellent":
      tipPer = 0.2;
      break;
    default:
      return "Rating not recognised";
  }

  return Math.ceil(amount * tipPer);
};

console.log(calculateTip(20, "Excellent"));
console.log(calculateTip(26.95, "good"));
