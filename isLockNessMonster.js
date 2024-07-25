const isLockNessMonster = (str) => {
  const lower = str.toLowerCase();

  return (
    lower.includes("tree fiddy") ||
    lower.includes("3.50") ||
    lower.includes("three fifty")
  );
};

console.log(
  isLockNessMonster(
    "Your girlscout cookies are ready to ship. Your total comes to tree fiddy"
  )
);
console.log(
  isLockNessMonster(
    "Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."
  )
);
console.log(
  isLockNessMonster(
    "Your girlscout cookies are ready to ship. Your total comes to three fifty"
  )
);
