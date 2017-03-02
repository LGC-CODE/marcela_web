var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('bartender');
});

router.get('/about', function(req, res, next) {
  res.render('bartenderAbout');
});

module.exports = router;