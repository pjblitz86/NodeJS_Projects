const express = require('express');
const app = express();

app.use('/users', (req, res, next) => {
  console.log('In users middleware');
  res.send('<h1>my users response</h1>');
});

app.use('/', (req, res, next) => {
  console.log('In 1st middleware');
  next();
});

app.use('/', (req, res, next) => {
  console.log('In 2nd middleware');
  res.send('<h1>my index response</h1>');
});

app.listen(3000);
