//产品信息
var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var  ProductSchema = new Schema({
    name:{ type:String, unique: true },
    spec:String,                    //基本规格
    specescription:String           //详细规格说明

});
module.exports = mongoose.model('Product',ProductSchema);