//计划安排
var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var  PlanSchema = new Schema({
    order_no:String,                                //主订单编号
    products:[{type: Schema.Types.ObjectId}],      //计划生产发货的商品
    productsInfo: [{product:Schema.Types.ObjectId,quantity:Number,stock:Number,delivery:Number}],                          //产品
    //stock_order:{type: Schema.Types.ObjectId},      //备货订单编号
    //delivery_order:{type: Schema.Types.ObjectId},    //发货订单编号
    is_complete:Boolean ,                            // 是否完成
    start_date:{type: Date },                       //计划开始时间
    end_date:{type: Date }                          //计划结束时间
});






module.exports = mongoose.model('Plan',PlanSchema);