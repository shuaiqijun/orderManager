var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var index = require('./routes/index');
var home = require('./routes/home');
var add_order = require('./routes/add_order');
var excelindb = require('./routes/excelindb');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//session持久化配置
app.use(session({
    secret: "jimmy",
    key: "order",
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 30},//超时时间
    saveUninitialized: true,
    resave: false,
}));

//登录验证中间件
app.use(function(req,res,next){
    if (!req.session.user) {
        if(req.url=="/" ||req.url=="/login"){
            next();//如果请求的地址是登录则通过，进行下一个请求
        } else {
            res.redirect('/');
        }
    } else {
        next();
    }
});

//路由设置
app.use('/', index);
app.use('/home', home);
app.use('/add_order', add_order);
app.use('/excelindb', excelindb);

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