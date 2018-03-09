//订单信息
var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var OrderSchema = new Schema({
    order_no : { type: String },                                        //订单编号
    customer: {type: Schema.Types.Mixed},                               //客户
    contract_no: {type: String},                                        //合同编号
    products: [{type: Schema.Types.ObjectId}],                          //商品
    status : { type: Number ,enum: ["创建", "生产" , "发货" ,"完成"]  },                    //订单状态 1:创建;2:生产;3:发货;4:完成
    stock_orders:[{}],
    delivery_orders:[{}],
    create_date :{type: Date,default: Date.now }                        //订单创建时间
});

module.exports = mongoose.model('Order',OrderSchema);