const partList = (arr) => {
  let result = [];

  for (let i = 1; i < arr.length; i++) {
    let p1 = arr.slice(0, i).join(" ");
    let p2 = arr.slice(i).join(" ");
    result.push([p1, p2]);
  }

  return result;
};

console.log(partList(["I", "wish", "I", "hadn't", "come"]));
console.log(partList(["cdIw", "tzIy", "xDu", "rThG"]));
console.log(partList(["vJQ", "anj", "mQDq", "sOZ"]));
