const express = require('express');
const path = require('path');

const app = express();

const members = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@gmail.com',
    status: 'acitve'
  },
  {
    id: 2,
    name: 'Paul Jukman',
    email: 'paul@gmail.com',
    status: 'inacitve'
  },
  {
    id: 1,
    name: 'Sneaky Pete',
    email: 'pete@gmail.com',
    status: 'acitve'
  }
];

app.get('/api/members', (req, res) => res.json(members));

// app.get('/', (req, res) => {
//   // res.send('<h1>Hello World!!</h1>');
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// usually created in seperate config file
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
