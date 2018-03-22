function callFunction(test,name) {
    console.log(test);  //1   test =function(name){}
    console.log(name);   //2   name  = '你好'
    test(name);          //3   将‘你好’传给function(name){}
    console.log(test);   //8  test =function(name){}
    console.log(name);   //9   name  = '你好'
}

//function callFunction(test,name) 
//test =function(name){}
//name ='你好'

callFunction(function(name) {
        console.log(name);    //4 name ='你好'  由test(name)传参进来
        var name = 'user';
        console.log(name);   //5   
        var name = 'newname';
        console.log(name);   //6
        console.log('w     ' + name);  //7
}, 'hello');