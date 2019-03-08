const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello World!!</h1>');
});

// usually created in seperate config file
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
