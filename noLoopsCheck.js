const noLoopsCheck = (a, x) => {
  return a.includes(x);
};

console.log(noLoopsCheck([66, 101], 66));
console.log(noLoopsCheck([80, 117, 115, 104, 45, 85, 112, 115], 45));
console.log(noLoopsCheck(["what", "a", "great", "kata"], "kat"));
