var UserModel = require("../model/user.js");
exports.queryUser = function (req,res){

};

exports.addUser = function (req,res) {


    user.save(function (err) {
        if(err){
            res.send("sucess:0");
        }else{
            res.send("sucess:-1");
        }
    });
};

exports.delUser =function (req,res){
    //UserMode
    res.send("sucess:-1");
};

exports.updateUser = function (req,res) {
    res.send("sucess:-1");
};