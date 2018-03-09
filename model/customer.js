//客户信息
var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var  CustomerSchema = new Schema({
    name:{ type:String, unique: true },                 //名称唯一
    catogory:String,                                    //类别
    creditRating:String,                                 //信用等级
    invoiceInfo:String                                  //开票信息
});
module.exports = mongoose.model('Customer',CustomerSchema);

