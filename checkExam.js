const checkExam = (arr1, arr2) => {
  let score = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (arr2[i] === "") {
      continue;
    } else if (arr1[i] === arr2[i]) {
      score += 4;
    } else {
      score -= 1;
    }
  }

  return score < 0 ? 0 : score;
};

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]));
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]));
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]));
