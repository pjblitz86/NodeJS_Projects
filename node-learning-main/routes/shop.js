const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  // path module works for both windows and linux os
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;
