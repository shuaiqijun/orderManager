//管理用户
var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var  UserSchema = new Schema({
    username:{ type:String, unique: true },
    password:String,
    realname:String,
    phone:String,
    permission:Number       //1.admin 2.normal
});
module.exports = mongoose.model('User',UserSchema);