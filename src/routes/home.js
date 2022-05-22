const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});
router.get('/hospitalFind', (req, res) => {
  res.render('hospitalFind');
});
router.get('/clinicFind', (req, res) => {
  res.render('clinic');
});
module.exports = router;
