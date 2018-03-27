var express = require('express');
var routers = express.Router();
var UserModel = require('../model/user.js');
var ProductModel = require('../model/product.js');
var CustomerModel = require("../model/customer.js");
var CustomerCtr = require("../controller/customer.js");

module.exports = function(app) {
    app.get('/', function (req, res) {
        res.render('index', { title: 'index' });
    });
    app.get('/home', function (req, res) {
        var user = req.session.user ;
        console.log(user.realname);
        console.log(user.permission);
        res.render('home',{ realname: user.realname, permission: user.permission});
    });
    app.get('/add_order', function (req, res) {
        var user = req.session.user ;
        console.log(user.realname);
        res.render('add_order',{ realname: user.realname });
    });
    app.get('/add_customer', function (req, res) {
        var user = req.session.user;
        console.log(user.realname);
        res.render('add_customer', { realname: user.realname });
    });
    app.get('/add_product', function (req, res) {
        var user = req.session.user;
        console.log(user.realname);
        res.render('add_product', { realname: user.realname });
    });
    app.get('/order_search', function (req, res) {
        var user = req.session.user ;
        console.log(user.realname);
        res.render('order_search',{ realname: user.realname });
    });
    app.get('/add_production', function (req, res) {
        var user = req.session.user ;
        console.log(user.realname);
        res.render('add_production',{ realname: user.realname });
    });
    app.get('/excel_in_db', function (req, res) {
        var user = req.session.user ;
        console.log(user.realname);
        res.render('excel_in_db',{ realname: user.realname });
    });
    app.get('/customer_list', function (req, res) {
        var user = req.session.user ;
        console.log(user.realname);
        res.render('customer_list',{ realname: user.realname });
    });
    app.get('/product_list', function (req, res) {
        var user = req.session.user ;
        console.log(user.realname);
        res.render('product_list',{ realname: user.realname });
    });
    app.get('/production_list', function (req, res) {
        var user = req.session.user ;
        console.log(user.realname);
        res.render('production_list',{ realname: user.realname });
    });
    app.post('/addCustomerToDb', function(req, res) {
        var customer_number = req.body.customer_number,
                customer_name = req.body.customer_name,
                customer_catogory = req.body.customer_catogory,                                    //类别
                    customer_address = req.body.customer_address,                                    //客户地址
                    business_area = req.body.business_area,                               //所属业务片区
                    salesman = req.body.salesman,                                     //所属业务员
                    payment_method = req.body.payment_method,                               //付款方式
                    creditRating = req.body.creditRating,                                 //信用等级
                    invoiceInfo = req.body.invoiceInfo;
        var datacustomer = new CustomerModel({
            customer_number:customer_number,
            customer_name:customer_name,
            customer_catogory:customer_catogory,                                    //类别
            customer_address:customer_address,                                    //客户地址
            business_area:business_area,                               //所属业务片区
            salesman:salesman,                                     //所属业务员
            payment_method:payment_method,                               //付款方式
            creditRating:creditRating,                                 //信用等级
            invoiceInfo:invoiceInfo
        });
        CustomerCtr.addCustomer(datacustomer);
        exports.addCustomer = addCustomer;
    });

    app.post('/login',function(req, res) {
        var username = req.body.username;
        var password = req.body.password;
        console.log(username +","+password);
        UserModel.findOne({username:username},function(err,doc){
            if(err){
                console.log('error');
                res.send("{code:-1,msg:\"数据异常\"}");
            } else {
                if(doc==null){
                    console.log('not exist');
                    res.send("{code:-2,msg:\"用户名不存在\"}");
                }else {
                    if(doc.password===password){
                        console.log('success');
                        //登录成功，将user保存到session中
                        req.session.user = doc;
                        res.send("{code:0,msg:\"success\"}");
                    }else {
                        res.send("{code:-3,msg:\"密码错误\"}");
                    }
                }
            }
        });
    });

};

// /* GET home page. */


// router.get('/order', OrderCtr.queryOrder);
//
// router.post('/order', OrderCtr.addOrder);
//
// router.put('/order', OrderCtr.updateOrder);
//
// router.delete('/order', OrderCtr.delOrder);
//
// //user
// router.get('/user', UserCtr.queryUser);
//
// router.post('/user', UserCtr.addUser);
//
// router.put('/user', UserCtr.updateUser);
//
// router.delete('/user', UserCtr.delUser);
//
//
// //customer
// router.get('/customer', CustomerCtr.queryCustomer);
//
// router.post('/customer', CustomerCtr.addCustomer);
//
// router.put('/customer', CustomerCtr.updateCustomer);
//
// router.delete('/customer/:id', CustomerCtr.delCustomerById);
// module.exports = routers;
