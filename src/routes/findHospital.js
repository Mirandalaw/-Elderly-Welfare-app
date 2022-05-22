const express = require('express');
const router = express.Router();

router.get('/clinic', (req, res) => {
  res.render('clinic');
});

router.get('/generalH', (req, res) => {
  res.render('generalH');
});

router.get('/universalH', (req, res) => {
  res.render('universalH');
});

module.exports = router;
