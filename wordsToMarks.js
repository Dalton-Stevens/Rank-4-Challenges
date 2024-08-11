const wordToMarks = (str) => {
  let total = 0;

  for (let i = 0; i < str.length; i++) {
    total += str.charCodeAt(i) - 96;
  }

  return total;
};

console.log(wordToMarks("attitude"));
console.log(wordToMarks("friends"));
console.log(wordToMarks("family"));
