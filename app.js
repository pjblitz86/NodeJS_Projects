const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write(
      '<html><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></html>'
    );
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, err => {
        // writeFileSync blocks code execution until file is created
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
  // process.exit();
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>Hello</html>');
  res.end();
}); // runs for every request which reaches our server

server.listen(3000);
