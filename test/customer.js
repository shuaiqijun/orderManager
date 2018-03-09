var CustomerModel = require("../model/customer.js");


var json = [{"name":"百度科技", "catogory":"A", "creditRating":"A", "invoiceInfo":"123"},
    {"name":"马化腾腾讯", "catogory":"A", "creditRating":"A", "invoiceInfo":"123"},
    {"name":"马云阿里", "catogory":"123", "creditRating":"123", "invoiceInfo":"123"},
    {"name":"新浪科技","catogory":"123", "creditRating":"123", "invoiceInfo":"123"},
    {"name":"淘宝科技", "catogory":"123", "creditRating":"123", "invoiceInfo":"123"},
    {"name":"科大讯飞","catogory":"123", "creditRating":"123", "invoiceInfo":"123"},
    {"name":"快播科技","catogory":"123", "creditRating":"123", "invoiceInfo":"123"},
    {"name":"上汽雪佛兰","catogory":"123", "creditRating":"123", "invoiceInfo":"123"}
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



