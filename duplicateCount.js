const duplicateCount = (text) => {
  let lower = text.toLowerCase();

  let charCount = {};

  for (let char of lower) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  let count = 0;

  for (let key in charCount) {
    if (charCount[key] > 1) {
      count++;
    }
  }

  return count;
};

console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("Indivisibility"));
