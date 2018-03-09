var CustomerModel = require("../model/customer.js");

exports.queryCustomer = function (req,res) {
    console.log("queryCustomer:"+req.query);
    var limit = (Number)(req.query.limit);
    var page = (Number)(req.query.page);
    var Query = CustomerModel.find({});
    Query.skip((page-1)*limit);
    Query.limit(limit);
    Query.exec(function(err,docs){
        if(err){
            res.json({"code":-1,"msg":"data error"});
        }else{
            CustomerModel.count(function (err, count) {
                if (!err) {
                    console.log("CustomerModel count");
                    res.json({"code":0,"msg":"","count":count,"data":docs});
                }
            });
        }
    });
}


exports.queryCustomerById = function (req,res) {
    console.log("queryCustomerById:"+req.query);
    var id = req.param('id');
    CustomerModel.findOne({_id:id},function (err,data) {
        if(err){
            res.json(err);
        }else{
            res.json(data);
        }
    });
}


exports.addCustomer = function (req,res) {
    console.log("addCustomer:"+req.body);
    var name = req.body.name;
    var catogory = req.body.catogory;
    var creditRating = req.body.creditRating;
    var invoiceInfo = req.body.invoiceInfo;

    CustomerModel.count({name:name},function(err,count){
        if(err){
            res.json({"code":-1,"msg":"data error"});
        }else{
            if(count>0){
                console.log("用户存在");
                res.json({"code":-1,"msg":"用户存在"});
            }else{
                var customer = new CustomerModel({
                    name:name,
                    catogory:catogory,
                    creditRating:creditRating,
                    invoiceInfo:invoiceInfo
                });
                customer.save(function (err) {
                    if(!err){
                        res.json({"code":0,"msg":""});
                    }
                });
            }
        }
    });
}

exports.delCustomerById = function (req,res) {
    console.log("delCustomerById");
    var id = req.params.id ;
    CustomerModel.remove({_id:id}, function (err) {
        if(err){
            res.json(err);
        }else{
            res.json({"code":0,"msg":""});
        }
    });
}

exports.updateCustomer = function (req,res) {




    res.send("sucess:0");
}