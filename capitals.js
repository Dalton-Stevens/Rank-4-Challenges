const capitals = (word) => {
  let indices = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() === word[i]) {
      indices.push(i);
    }
  }

  return indices;
};

console.log(capitals("CodEWaRs"));
