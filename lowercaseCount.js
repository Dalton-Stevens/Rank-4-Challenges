const lowercaseCount = (str) => {
  const regex = str.match(/[a-z]/g);

  return regex ? regex.length : 0;
};

console.log(lowercaseCount("abc"));
console.log(lowercaseCount("abcABC123"));
console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"));
