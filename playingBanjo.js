const playingBanjo = (name) => {
  return name[0].toLowerCase() === "r"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
};

console.log(playingBanjo("Adam"));
console.log(playingBanjo("Paul"));
console.log(playingBanjo("Ringo"));
