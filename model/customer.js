//客户信息
var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var  CustomerSchema = new Schema({
    customer_number:{ type:String, unique: true },          //编码
    customer_name:{ type:String, unique: true },                 //名称唯一
    customer_catogory:String,                                    //类别
    customer_address:String,                                    //客户地址
    business_area:String,                               //所属业务片区
    salesman:String,                                     //所属业务员
    payment_method:String,                               //付款方式
    creditRating:String,                                 //信用等级
    invoiceInfo:String                                  //开票信息
});

module.exports = mongoose.model('Customer',CustomerSchema);

