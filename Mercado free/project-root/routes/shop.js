const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile('shop.html', { root: 'views' });
});

router.get('/product/:id', (req, res) => {
  res.sendFile('product.html', { root: 'views' });
});

module.exports = router;
