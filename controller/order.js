var OrderModel = require("../model/order.js");
exports.queryOrder = function (req,res) {

}


exports.addOrder = function (req,res) {

    var order = new OrderModel();

    order.save(function (err) {
        if(err){
            res.send("sucess:0");
        }else{
            res.send("sucess:0");
        }
    });
}


exports.delOrder = function (req,res) {
    res.send("sucess:0");
}

exports.updateOrder = function (req,res) {
    res.send("sucess:0");
}