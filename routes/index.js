var express = require('express');
var routers = express.Router();
var UserModel = require('../model/user.js');
var ProductModel = require('../model/product.js');

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
