//产品信息
var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var  ProductSchema = new Schema({
    product_no:String,              //牌号
    product_name:String,                    //名称
    spec:String,                    //基本规格
    color:String,                   //颜色
    description:String,             //备注描述
    category:String,                //特料 普料
    identity:Boolean                //是否确认

});
module.exports = mongoose.model('Product',ProductSchema);