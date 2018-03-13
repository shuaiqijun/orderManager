var ProductModel = require("../model/product.js");

exports.queryProduct = function (req,res) {
    console.log("queryProduct:"+req.query);
    ProductModel.find().exec(function(err,docs){
        if(err){
            res.json({"code":-1,"msg":"data error"});
        }else{
            if(docs !=null){
                var count = docs.length();
                res.json({"code":0,"msg":"","count":count,"data":docs});
            }else{
                res.json({"code":0,"msg":"data empty"});
            }
        }
    });
}


exports.queryProductById = function (req,res) {
    console.log("queryProductById:"+req.query);
    var id = req.param('id');
    ProductModel.findOne({_id:id},function (err,data) {
        if(err){
            res.json(err);
        }else{
            res.json(data);
        }
    });
}


exports.addProduct = function (req,res) {
    console.log("addCustomer:"+req.body);
    var name = req.body.name;
    var catogory = req.body.catogory;
    var creditRating = req.body.creditRating;
    var invoiceInfo = req.body.invoiceInfo;


    ProductModel.find().$where(function () {
        return this.product_no =='10001' ||this.name =='10002' ;
    }).exec(function(err,data){
        if(!err){
            console.log("data size:"+data.length);
            if(data.length>0){
                console.log("重复");
                res.json({"code":-1,"msg":"id or other 重复"});
            }else {
                var product = new ProductModel({

                });
                product.save(function (err) {
                    if(!err){
                        res.json({"code":0,"msg":""});
                    }
                });
            }
        }
    });
}


var addProductInfo = function (product) {
    var product_aa = product.product_no;
    var namen = product.name ;
    ProductModel.find().or([{ product_no: product_aa }, { name: namen }]).exec(function(err,data){
        if(!err){
            console.log("addProductInfo data size:"+data.length);
            if(data.length>0){
                console.log("重复");
                //res.json({"code":-1,"msg":"id or other 重复"});
            }else {
                product.save(function (err) {
                    if(!err){
                        //res.json({"code":0,"msg":""});
                        console.log("insert sucess");
                    }
                });
            }
        }else {
            console.log("insert error:"+err);
        }
    });
};

exports.addProductInfo = addProductInfo ;
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