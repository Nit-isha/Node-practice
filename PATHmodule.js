const path = require("path");

console.log(path.sep);

//platform specific separator

//platform join

const filePath = path.join("/text.txt/");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "text.txt");
console.log(absolute);
