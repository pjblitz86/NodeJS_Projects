const http = require('http'); // core module

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.write(
      '<html><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></html>'
    );
    return res.end();
  }
  // process.exit();
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>Hello</html>');
  res.end();
}); // runs for every request which reaches our server

server.listen(3000);
