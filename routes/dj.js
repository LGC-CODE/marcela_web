var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dj', { marcela : '510-827-7603' });
});

module.exports = router;
