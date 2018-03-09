//发货订单信息
var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var OrderSchema = new Schema({
    order_no : { type: String },                                        //订单编号
    customer: {type: Schema.Types.Mixed},                               //客户
    products: [{type: Schema.Types.ObjectId}],                          //商品
    status : Boolean,                                                   //是否完成
    create_date :{type: Date,default: Date.now }                       //订单创建时间
});

module.exports = mongoose.model('Order',OrderSchema);