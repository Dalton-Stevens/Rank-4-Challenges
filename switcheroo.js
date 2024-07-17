const switcheroo = (str) => {
  let arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "a") {
      arr[i] = "b";
    } else if (arr[i] === "b") {
      arr[i] = "a";
    }
  }

  return arr.join("");
};

console.log(switcheroo("abc"));
console.log(switcheroo("aaabcccbaaa"));
