const express = require('express');
const router = express.Router();
const members = require('../../Members');

// Get all members
router.get('/', (req, res) => res.json(members));

// get single member
router.get('/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `Member with id ${req.params.id} not found` });
  }
});

// router.get('/', (req, res) => {
//   // res.send('<h1>Hello World!!</h1>');
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

module.exports = router;
