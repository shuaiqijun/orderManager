//订单信息
var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var OrderSchema = new Schema({
    order_no : { type: String },                                                                //订单编号
    customer: {type: Schema.Types.ObjectId},                                                    //客户id
    contract_no: {type: String},                                                                    //合同编号
    productsInfo: [{product:Schema.Types.ObjectId,quantity:Number,price:Number}],                          //产品
    status : { type: Number ,enum: ["创建", "生产" , "发货" ,"完成"]  },                    //订单状态 1:创建;2:生产;3:发货;4:完成
    plans:[{type: Schema.Types.ObjectId}],                              //计划
    create_date :{type: Date,default: Date.now }                        //订单创建时间
});

OrderSchema.virtual('total_price').get(function () {
    var total_price =0 ;
    for(var x in this.productsInfo){
        var item = this.productsInfo[x];
        total_price += (item.quantity*item.price);
    }
    return total_price;
});


module.exports = mongoose.model('Order',OrderSchema);