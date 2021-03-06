/**
 * New node file
 */
var mongoose = require('mongoose'),
    DB_URL = 'mongodb://localhost:27017/test';
mongoose.connect(DB_URL);
var connection = mongoose.connection;

/**
 * 连接成功
 */
connection.on('connected', function () {
    //console.log('Mongoose connection open to ' + DB_URL);
});

/**
 * 连接异常
 */
connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});
module.exports = mongoose;