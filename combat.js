const combat = (health, damage) => {
  if (health - damage < 0) {
    return 0;
  }

  return health - damage;
};

console.log(combat(100, 5));
console.log(combat(92, 8));
console.log(combat(20, 30));
