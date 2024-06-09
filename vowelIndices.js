const vowelIndices = (word) => {
  const vowels = "aeiouyAEIOUY";

  let arr = [];

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      arr.push(i + 1);
    }
  }

  return arr;
};

console.log(vowelIndices("mmm"));
console.log(vowelIndices("apple"));
console.log(vowelIndices("super"));
