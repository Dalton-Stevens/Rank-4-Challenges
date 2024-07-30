class Player {
  constructor(name) {
    this.name = name;
  }
}

let names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = names.map((n) => new Player(n));

const duckDuckGoose = (players, goose) => {
  return players[(goose - 1) % players.length].name;
};

console.log(duckDuckGoose(players, 1));
console.log(duckDuckGoose(players, 10));
console.log(duckDuckGoose(players, 18));
