const alphabetWar = (fight) => {
  const leftPower = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
  };

  const rightPower = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  };

  let leftScore = 0;
  let rightScore = 0;

  for (let char of fight) {
    if (leftPower[char]) {
      leftScore += leftPower[char];
    } else if (rightPower[char]) {
      rightScore += rightPower[char];
    }
  }

  if (leftScore > rightScore) {
    return "Left side wins!";
  } else if (rightScore > leftScore) {
    return "Right side wins!";
  } else {
    return "Let's fight again!";
  }
};

console.log(alphabetWar("zdqmwpbs"));
console.log(alphabetWar("zzzzs"));
console.log(alphabetWar("wwwwww"));
