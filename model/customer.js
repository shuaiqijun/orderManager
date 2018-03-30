//客户信息
var mongoose = require('./db.js');
var  CustomerSchema = new mongoose.Schema({
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
exports.model = Model;

function customerIsUnique (customer,callback) {
    Model.find({}).or([{ customer_number: customer.customer_number }, { customer_name:customer.customer_name },{customer_category:customer.customer_category},
        {customer_address:customer.customer_address},{business_area:customer.business_area},{creditRating:customer.creditRating},{invoiceInfo:customer.invoiceInfo}
        ,{salesman:customer.salesman},{payment_method:customer.payment_method}])
        .exec(function(err,data){
            if(!err){
                console.log("customerIsUnique : data size:"+data.length);
                callback(data.length==0);
            }else {
                callback(false);
            }
        })
}
exports.customerIsUnique = customerIsUnique ;

exports.queryAllCount = function (callback) {
    Model.count(function (err,count) {
        if (!err) {
            console.log("CustomerModel count:"+count);
            callback(err,count);
        }else {
            callback(err,"error");
        }
    });
};

exports.queryCustomerByPage = function (limit,page,callback) {
    console.log("queryCustomerByPage:limit:" +limit+",page:"+page);
    var Query = Model.find({});
    Query.skip((page - 1) * limit);
    Query.limit(limit);
    Query.exec(function (err, data) {
        if (err) {
            callback(err,"error");
        } else {
            callback(err,data);
        }
    });
};

exports.queryCustomerById = function (objectId,callback) {
    console.log("queryCustomerById:"+objectId);
    Model.findOne({_id:objectId},function (err,data) {
        if(err){
            callback(err,"msg");
        }else{
            callback(err,data);
        }
    });
};


exports.updateCustomer = function (customer,callback) {
    console.log("updateCustomer:"+customer);
    Model.findOne({_id:customer._id},function (err) {
        if(err){
            callback(err,"error");
        }else{
            customer.save(function (err) {
                if(!err){
                    callback(err,"success");
                }else{
                    callback(err,"error");
                }
            });
        }
    });
};

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
    customerIsUnique(customer,function (isUnique) {
        if(isUnique){
            customer.save(function (err) {
                if(!err){
                    console.log("2");
                    callback(err,customer);
                }else{
                    callback(err,"database error");
                }
            });
        }else{
            callback("error","datebase key is not Unique");
        }
    });
};
