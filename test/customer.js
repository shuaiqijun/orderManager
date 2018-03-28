var Customer = require("../model/customer.js");
//console.log(CustomerModel);
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



/*var c =new Customer.model({
    customer_number:"1121ass2122222",          //编码
    customer_name:"asdassssdasdasd",            //名称唯一
    customer_category:"ssda",                               //类别
    customer_address:"dasdas",                                //客户地址
    business_area:"dasdasd",                                   //所属业务片区
    salesman:"dasdas",                                        //所属业务员
    payment_method:"adsdasda",                                  //付款方式
    creditRating:"asdas",                                    //信用等级
    invoiceInfo:"dasdasd"
});*/

var d = {
    customer_number:"1121AAAass2122222",          //编码
    customer_name:"asdassssAAAAdasdasd",            //名称唯一
    customer_category:"ssda",                               //类别
    customer_address:"dasdas",                                //客户地址
    business_area:"dasdasd",                                   //所属业务片区
    salesman:"dasdas",                                        //所属业务员
    payment_method:"adsdasda",                                  //付款方式
    creditRating:"asdas",                                    //信用等级
    invoiceInfo:"dasdasd"
};

Customer.addCustomer(d,function (err,msg) {
    console.log(err+","+msg);
    if(!err){
        console.log("ssss")
    }else{
        console.log("aaaa")
    }
});

/*var Query = CustomerModel.find({});
CustomerModel.find().$where(function () {
    return this.customer_no =='10001' ||this.customer_no =='10002' ;
}).exec(function(err,data){
   if(!err){
       console.log("data size:"+data.length);
   }
});*/







