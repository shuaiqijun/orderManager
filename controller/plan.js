var PlanModel = require("../model/plan.js");

exports.queryPlan = function (req,res) {
    var orderno = req.body.orderno ;
    PlanModel.find({order_no:orderno},function (err,docs) {
        if(err){

        }else{
            if(docs !=null){
                res.json({code:0,msg:"",data:docs});
            }
        }
    });
}

exports.queryPlan = function (req,res) {

}
