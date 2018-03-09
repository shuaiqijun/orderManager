var express = require('express');
var router = express.Router();
var UserCtr =  require('../controller/user.js');
var OrderCtr =  require('../controller/order.js');
var CustomerCtr =  require('../controller/customer.js');

//home
router.get('/', function (req,res) {
    var user = req.session.user ;
    console.log(user.realname);
    res.render('add_order');
});
module.exports = router;