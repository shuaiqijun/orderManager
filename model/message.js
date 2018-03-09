//消息
var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var  MessageSchema = new Schema({
    form:String,
    to:String,
    msg:String,
    read:Boolean,
    create_date :{type: Date,default: Date.now }

});
module.exports = mongoose.model('Message',MessageSchema);