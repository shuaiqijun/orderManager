//客户信息
var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var  CustomerSchema = new Schema({
    customer_number:{ type:String, unique: true },          //编码
    customer_name:{ type:String, unique: true },            //名称唯一
    customer_category:String,                               //类别
    customer_address:String,                                //客户地址
    business_area:String,                                   //所属业务片区
    salesman:String,                                        //所属业务员
    payment_method:String,                                  //付款方式
    creditRating:String,                                    //信用等级
    invoiceInfo:String                                      //开票信息
});
var Model = mongoose.model('Customer',CustomerSchema);
exports.CustomerModel = Model;

exports.customerExist = function (customer,callback) {
    
} ;

exports.queryCustomerByPage = function (req,res) {
    console.log("queryCustomer:" + req.query);
/*    var limit = (Number)(req.query.limit);
    var page = (Number)(req.query.page);
    var Query = CustomerModel.find({});
    Query.skip((page - 1) * limit);
    Query.limit(limit);
    Query.exec(function (err, docs) {
        if (err) {
            res.json({"code": -1, "msg": "data error"});
        } else {
            CustomerModel.count(function (err, count) {
                if (!err) {
                    console.log("CustomerModel count");
                    res.json({"code": 0, "msg": "", "count": count, "data": docs});
                }
            });
        }
    });*/
}


exports.queryCustomerById = function (objectId,callback) {
    console.log("queryCustomerById:"+objectId);
    CustomerSchema.findOne({_id:objectId},function (err,data) {
        if(err){
            callback(err,"msg");
        }else{
            callback(err,data);
        }
    });
}

exports.delCustomerById =function (objectId,callback) {
    Model.remove({_id:objectId}, function (err) {
        if(err){
            callback(err,"msg:database");
        }else{
            callback(null,null);
        }
    });
};

exports.addCustomer = function(customer,callback){
    console.log("customer:"+customer);
    Model.customerExist(user,function (err) {
        if(!err){
            customer.save(function (err) {
                if(!err){
                    callback(err,"msg:database");
                }else{
                    callback(null,null);
                }
            });
        }else{
            callback(err,"msg:exist");
        }
    });
};



