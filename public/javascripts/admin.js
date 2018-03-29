//layui 模块开始
layui.use(['element','table', 'layer','jquery'], function() {
    var element = layui.element,
        $ = layui.jquery,
        layer = layui.layer,
        table = layui.table;
    //新增客户弹层
    $("#add_customer").click(function () {
        layer.open({
            type: 2 ,
            title: '新增客户',
            shadeClose: false,
            shade: 0.8,
            area: ['800px', '650px'],
            maxmin:false,
            content: '../html/add_customer.html',
            zIndex: layer.zIndex ,
        });
    });
});



function time(){
    var mydate = new Date();
    var week;
    switch (mydate.getDay()) {
        case 1:
            week = "星期一";
            break;
        case 2:
            week = "星期二";
            break;
        case 3:
            week = "星期三";
            break;
        case 4:
            week = "星期四";
            break;
        case 5:
            week = "星期五";
            break;
        case 6:
            week = "星期六";
            break;
        default:
            week = "星期天";
    }

    function add_zero(temp) {
        if (temp < 10) return "0" + temp;
        else return temp;
    }
    var years = mydate.getFullYear();
    var month = add_zero(mydate.getMonth() + 1);
    var days = add_zero(mydate.getDate());
    var hours = add_zero(mydate.getHours());
    var minutes = add_zero(mydate.getMinutes());
    var seconds = add_zero(mydate.getSeconds());
    var ndate = "现在时间：" + years + "年" + month + "月" + days + "日 " + hours + ":" + minutes + ":" + seconds + " " + week;
    document.getElementById("welcomtime").innerHTML=ndate;
}
    setInterval("time();",1000);


