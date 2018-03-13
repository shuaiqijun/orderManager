var ProductModel = require("../model/product.js");
var ProductCtr = require("../controller/product.js");
var product = new ProductModel({
    product_no:"1212121",
    name:"345566",                    //牌号
    spec:"123456",                    //基本规格
    description:"bbbb",             //备注描述
    color:"red",                   //颜色
    category:"teliao",                //特料 普料
    identity:false
});


var product2 = new ProductModel({
    product_no:"qqqqqqq",
    name:"aaaaa",                    //牌号
    spec:"123456",                    //基本规格
    description:"bbbb",             //备注描述
    color:"red",                   //颜色
    category:"teliao",                //特料 普料
    identity:false
});

ProductCtr.addProductInfo(product);
ProductCtr.addProductInfo(product2);