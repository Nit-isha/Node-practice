const http = require("http");

const server = http.createServer((req, res) => {
  //request,response
  if (req.url === "/") {
    res.end("Welcome to home page");
  }
  if (req.url === "/about") {
    res.end("About page");
  }
  res.end(`
  <h1> Ooops! </h1>
  <p> We can't seem to find page. </p>
  <a href = "/"> Back Home </a>
  `);
});

server.listen(5000);
//localhost:5000
//listen is async
