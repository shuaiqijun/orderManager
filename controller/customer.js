var Customer = require("../model/customer.js");

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
};


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
};


exports.addCustomer = function (req,res) {
    console.log("addCustomer:" + req.body);
    var customer_number = req.body.customer_number,
        customer_name = req.body.customer_name,
        customer_category = req.body.customer_catogory,                                    //类别
        customer_address = req.body.customer_address,                                    //客户地址
        business_area = req.body.business_area,                               //所属业务片区
        salesman = req.body.salesman,                                     //所属业务员
        payment_method = req.body.payment_method,                               //付款方式
        creditRating = req.body.creditRating,                                 //信用等级
        invoiceInfo = req.body.invoiceInfo;

    Customer.addCustomer(new Customer.model({
        customer_number:customer_number,          //编码
        customer_name:customer_name,            //名称唯一
        customer_category:customer_category,                               //类别
        customer_address:customer_address,                                //客户地址
        business_area:business_area,                                   //所属业务片区
        salesman:salesman,                                        //所属业务员
        payment_method:payment_method,                                  //付款方式
        creditRating:creditRating,                                    //信用等级
        invoiceInfo:invoiceInfo
    }),function (err,msg) {
        if(!err){
            res.json({"code":0,"msg":""});
        }else{
            res.json({"code":-1,"msg":msg});
        }
    });
};

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
};

exports.updateCustomer = function (req,res) {




    res.send("sucess:0");
};