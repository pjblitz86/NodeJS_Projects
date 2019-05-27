const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
  console.log('home route');
  next();
});

app.use('/users', (req, res, next) => {
  console.log('on employee route');
  res.send('<h1>The Employee Page</h1>');
});

app.listen(3000, () => 'server started');
