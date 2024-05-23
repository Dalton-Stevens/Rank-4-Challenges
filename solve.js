const solve = (s) => {
  const charValue = (c) => {
    return c.charCodeAt(0) - "a".charCodeAt(0) + 1;
  };

  let maxSum = 0;
  let currSum = 0;

  for (let i = 0; i < s.length; i++) {
    if (!"aeiou".includes(s[i])) {
      currSum += charValue(s[i]);
    } else {
      if (currSum > maxSum) {
        maxSum = currSum;
      }

      currSum = 0;
    }
  }

  if (currSum > maxSum) {
    maxSum = currSum;
  }

  return maxSum;
};

console.log(solve("zodiac"));
console.log(solve("strength"));
console.log(solve("catchphrase"));
