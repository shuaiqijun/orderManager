var CustomerModel = require("../model/customer.js");

/*
var json = [{"customer_no":"10001","name":"百度科技", "catogory":"A", "creditRating":"A", "invoiceInfo":"123"},
    {"customer_no":"10002","name":"马化腾腾讯", "catogory":"A", "creditRating":"A", "invoiceInfo":"123"},
    {"customer_no":"10003","name":"马云阿里", "catogory":"123", "creditRating":"123", "invoiceInfo":"123"},
    {"customer_no":"10004","name":"新浪科技","catogory":"123", "creditRating":"123", "invoiceInfo":"123"},
    {"customer_no":"10005","name":"淘宝科技", "catogory":"123", "creditRating":"123", "invoiceInfo":"123"},
    {"customer_no":"10006","name":"科大讯飞","catogory":"123", "creditRating":"123", "invoiceInfo":"123"},
    {"customer_no":"10007","name":"快播科技","catogory":"123", "creditRating":"123", "invoiceInfo":"123"},
    {"customer_no":"10008","name":"上汽雪佛兰","catogory":"123", "creditRating":"123", "invoiceInfo":"123"}
    ];

for(var i in json){
    //console.log(json[i]);
    var customer = new CustomerModel(json[i]);
    customer.save(function(err){
        if(err){
            console.log("insert err")
        }else{
            console.log("insert sucess")
        }
    });
}
*/

// function appendCustomer(customer_number,customer_name,customer_catogory,creditRating,customer_address,business_area,salesman,payment_method,invoiceInfo) {
//     var this.customer_number = customer_number;
//     var this.customer_name = customer_name;
// }

var Query = CustomerModel.find({});
CustomerModel.find().$where(function () {
    return this.customer_no == '10001' || this.customer_no == '10002';
}).exec(function (err, data) {
    if (!err) {
        console.log("data size:" + data.length);
    }
});
