//non blocking code

const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// console.log(first, second);

writeFileSync(
  "./content/result-sync.txt", //creates folder automatically
  `Here is result : ${first}, ${second}`
  //   { flag: "a" }
);
