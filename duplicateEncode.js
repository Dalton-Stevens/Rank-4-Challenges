const duplicateEncode = (word) => {
  let lower = word.toLowerCase();

  let charCount = {};

  for (let char of lower) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let result = "";

  for (let char of lower) {
    result += charCount[char] === 1 ? "(" : ")";
  }

  return result;
};

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
