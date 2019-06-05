const path = require('path');
const rootDir = require('../util/path');
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  // path module works for both windows, mac and linux os
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
