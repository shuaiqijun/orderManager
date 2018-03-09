var express = require('express');
var router = express.Router();
var UserCtr =  require('../controller/user.js');
var OrderCtr =  require('../controller/order.js');
var CustomerCtr =  require('../controller/customer.js');

//home
router.get('/', function (req,res) {
    var user = req.session.user ;
    console.log(user.realname);
    res.render('home',{ realname: user.realname });
});

/*
REST架构
GET 用来获取资源，
POST 用来新建资源（也可以用于更新资源），
PUT 用来更新资源，
DELETE 用来删除资源。
*/
router.get('/order', OrderCtr.queryOrder);

router.post('/order', OrderCtr.addOrder);

router.put('/order', OrderCtr.updateOrder);

router.delete('/order', OrderCtr.delOrder);

//user
router.get('/user', UserCtr.queryUser);

router.post('/user', UserCtr.addUser);

router.put('/user', UserCtr.updateUser);

router.delete('/user', UserCtr.delUser);


//customer
router.get('/customer', CustomerCtr.queryCustomer);

router.post('/customer', CustomerCtr.addCustomer);

router.put('/customer', CustomerCtr.updateCustomer);

router.delete('/customer/:id', CustomerCtr.delCustomerById);

module.exports = router;