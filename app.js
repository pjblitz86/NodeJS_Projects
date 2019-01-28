const express = require('express');

const app = express();
app.use((req, res, next) => {
  console.log('In the midddleware');
  next(); // If we dont send response, allows the request to continue to the next middleware
});

app.use((req, res, next) => {
  console.log('In another midddleware');
  res.send('<h1>Hello from express</h1>');
});

const server = http.createServer(app);

server.listen(3000);
