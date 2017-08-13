var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var prerenderServer = require('prerender-node');
var assert = require('assert');


require('./models/articleModel');
require('./models/commentsModel');

var index = require('./routes/index');
var users = require('./routes/users');
var bartender = require('./routes/bartender');
var dj = require('./routes/dj');
var sweetsixteen = require('./routes/sweetsixteen');
var contact = require('./routes/contact');
var blog = require('./routes/blog');

mongoose.connect('mongodb://104.236.186.74:27017/marcela-db?ssl=true', null, function(err){
  assert.equal(null, err);
  console.log('servers running');
});


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(prerenderServer.set('prerenderServiceUrl', 'http://138.197.210.159:3000'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/blog/', blog);

app.use('/', index);
app.use('/users', users);
app.use('/bartender', bartender);
app.use('/dj', dj);
app.use('/sweetsixteen', sweetsixteen);
app.use('/contact', contact);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
