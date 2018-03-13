//产品信息
var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var  ProductSchema = new Schema({
    product_no:String,
    name:String,                    //牌号
    spec:String,                    //基本规格
    description:String,             //备注描述
    color:String,                   //颜色
    category:String,                //特料 普料
    identity:Boolean                //是否确认

});
module.exports = mongoose.model('Product',ProductSchema);