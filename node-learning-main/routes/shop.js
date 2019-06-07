const path = require('path');
const rootDir = require('../util/path');
const express = require('express');

const router = express.Router();
const adminData = require('./admin');

router.get('/', (req, res, next) => {
  console.log(adminData.products);
  // path module works for both windows, mac and linux os
  res.render('shop');
});

module.exports = router;
