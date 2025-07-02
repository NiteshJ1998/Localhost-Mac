const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} New Request Recived\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("HomePageee");
        break;
      case "/about":
        res.end("This is About Page");
        break;
      case "/cart":
        res.end("This is Cart Page");
        break;
      default:
        res.end("404 Not found");
    }
  });
});

myServer.listen(8000, () => console.log("Server Started.....!"));
