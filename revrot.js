const revrot = (str, sz) => {
  if (sz <= 0 || str === "" || sz > str.length) {
    return "";
  }

  const chunks = [];
  for (let i = 0; i < str.length; i += sz) {
    if (i + sz <= str.length) {
      chunks.push(str.slice(i, i + sz));
    }
  }

  const modifiedChunks = chunks.map((chunk) => {
    const sum = chunk
      .split("")
      .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    if (sum % 2 === 0) {
      return chunk.split("").reverse().join("");
    } else {
      return chunk.slice(1) + chunk[0];
    }
  });

  return modifiedChunks.join("");
};

console.log(revrot("1234", 0));
console.log(revrot("733049910872815764", 5));
