const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  const file=req.url==='/'?'index.html':req.url.slice(1);
  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("File not found");
    } else {
      res.writeHead(200);
      res.end(data);
    }
  });

}).listen(3000);

console.log("Server running at http://localhost:3000");
