//layui 模块开始
layui.use(['element','table', 'layer','jquery'], function() {
    var element = layui.element,
        $ = layui.jquery,
        layer = layui.layer,
        table = layui.table;


    var t = null;
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
        t = setTimeout(time,1000);
    }
    window.onload=function(){time()}

    /*//welcom time info
    (function getCurDate() {
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
        var years = mydate.getFullYear();
        var month = add_zero(mydate.getMonth() + 1);
        var days = add_zero(mydate.getDate());
        var hours = add_zero(mydate.getHours());
        var minutes = add_zero(mydate.getMinutes());
        var seconds = add_zero(mydate.getSeconds());

        function add_zero(temp) {
            if (temp < 10) return "0" + temp;
            else return temp;
        }

        var ndate = "现在时间：" + years + "年" + month + "月" + days + "日 " + hours + ":" + minutes + ":" + seconds + " " + week;
        document.getElementById('welcomtime').innerHTML = ndate;

        // setInterval("getCurDate();",1000);
        console.log(ndate)
    }());*/

    //新增客户弹层
    $("#add_customer").click(function () {
        console.log("1111");
        var $ = layui.jquery;
        var that = this;
        layer.open({
            type: 2 //此处以iframe举例
            , title: '新增客户'
            , area: ['800px', '600px']
            , shade: 0
            , maxmin: true
            , offset: [ //为了演示，随机坐标
//                    Math.random() * ($(window).height() - 300)
                30
//                    , Math.random() * ($(window).width() - 390)
            ]
            , content: '../admin/add_customer.html'
//                , btn: [''] //只是为了演示
//                , yes: function () {
//                    layer.closeAll();
//                }

            , zIndex: layer.zIndex //重点1
            , success: function (layero) {

            }
        });
    });


});