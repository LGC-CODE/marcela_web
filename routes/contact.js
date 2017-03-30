var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('contact', { marcela : '510-827-7603' });
});

module.exports = router;
