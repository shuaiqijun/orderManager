var UserModel = require("../model/user.js");

var user = new UserModel({
    username:'admin',
    password:'123456',
    realname:'admin',
    phone:'13800000000',
    permission:'1'
});

user.save(function(err){
    if(err){
       console.log("insert err")
    }else{
        console.log("insert sucess")
    }
});