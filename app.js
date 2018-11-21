const http = require('http'); // core module

const server = http.createServer((req, res) => {
  console.log(req);
}); // runs for every request which reaches our server

server.listen(3000);
