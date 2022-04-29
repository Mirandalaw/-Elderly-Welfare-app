const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to Elderly Welfare Service ');
});

module.exports = router;
