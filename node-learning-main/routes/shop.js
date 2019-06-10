const path = require('path');
const rootDir = require('../util/path');
const express = require('express');

const router = express.Router();
const adminData = require('./admin');

router.get('/', (req, res, next) => {
  const products = adminData.products;
  // passing to pug template
  res.render('shop', {prods: products, pageTitle: 'My Shop', path: '/'});
});

module.exports = router;
