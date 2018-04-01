//计划安排
var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var  PlanSchema = new Schema({
    order_no:String,                                //主订单编号
    productsInfo: [{product:Schema.Types.ObjectId,plan_quantity:Number,stock:Number,delivery:Number}],                          //产品
    is_complete:Boolean ,                            // 是否完成
    start_date:{type: Date },                       //计划开始时间
    end_date:{type: Date }                          //计划结束时间
});


module.exports = mongoose.model('Plan',PlanSchema);