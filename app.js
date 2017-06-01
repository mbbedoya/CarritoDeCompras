var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var rouProd= require('./routes/products');
var rouReport= require('./routes/reports');
var rouController = require('./routes/controller');

var port = process.env.PORT || 5000;

var app = express();

require('./routes/model/connection');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'views')));
app.use("/javascripts",express.static(__dirname + "/public/javascripts"));
app.use("/stylesheets",express.static(__dirname + "/public/stylesheets"));
app.use("/images",express.static(__dirname + "/public/images"));


app.use('/', routes);
app.use('/users', users);
app.use('/controller',rouController);


//app.use('/products',rouProd);
//app.use('/reports',rouReport);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
app.listen(port);
console.log('APP por el puerto  '+ port);

module.exports = app;