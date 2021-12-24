//Supply data in chunks
var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync("./content/big.txt", "utf8");
    // res.end(text);
    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res); //pipe push from read to write stream. We can read in chunks and also write in chunks.
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);

//One large instance

// var http = require("http");
// var fs = require("fs");

// http
//   .createServer(function (req, res) {
//     const text = fs.readFileSync("./content/big.txt", "utf8");
//     res.end(text);
//   })
//   .listen(5000);
