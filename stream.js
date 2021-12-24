const { createReadStream } = require("fs");

// const stream = createReadStream("./content/big.txt");

// data is read in chunks each for 64KB.
//default : 64kb
// last buffer: remainder
//highWaterMark - control size

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});

//ReadStream : open, data, close, end, error...

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
