var express = require('express');
var router = express.Router();
var UserModel = require('../model/user.js');

// /* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'order' });
});

router.post('/login',function(req, res) {
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
module.exports = router;
