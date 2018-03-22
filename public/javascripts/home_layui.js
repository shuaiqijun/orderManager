//layui 模块开始
layui.use(['element','table', 'layer','jquery'], function() {
    var element = layui.element,
        $ = layui.jquery,
        layer = layui.layer,
        table = layui.table;

    //客户管理 渲染 表格
    $('#customer_item').on('click', function() {
        console.log("customer_item  click");
        table.render({
            id: 'customerTableIn',
            elem: '#data_table'
            ,height: 485
            ,url: '/home/customer' //数据接口
            ,page: true //开启分页
            ,cols: [[ //表头
                {field: 'name', title: '客户名称', width:200,sort: true},
                {field: 'catogory', title: '类别', width:200, sort: true},
                {field: 'creditRating', title: '信用等级', width: 200, sort: true},
                {field: 'invoiceInfo', title: '开票信息', width: 200},
                {fixed: 'right', width:200, align:'center', toolbar: '#barDemo'}
            ]]
        });
    });
    //订单管理 渲染 表格
    $('#order_item').on('click', function() {
        console.log("order_item  click");
        table.render({
            elem: '#order_list'
            ,height: 485
            ,url: '../test/data1.json' //数据接口
            ,page: true //开启分页
            ,cols: [[ //表头
                {field: 'id', title: 'ID', width:69,fixed: 'left'}
                ,{field: 'order_data', title: '日期', width:80,sort: true}
                ,{field: 'order_number', title: '订单号', width:100, sort: true, edit: 'text'}
                ,{field: 'customer_name', title: '客户名称', width:200,sort: true}
                ,{field: 'product_model', title: '规格', width: 80, sort: true}
                ,{field: 'color', title: '颜色', width: 80, sort: true}
                ,{field: 'evaluating', title: '评审单号', width: 100,sort: true}
//                ,{field: 'rating', title: '信用等级', width: 100, sort: true}
//                ,{field: 'customer_classtiy', title: '客户类别', width: 100, sort: true}
                ,{field: 'classify', title: '产品类型', width: 100, sort: true}
                ,{field: 'quantity', title: '数量(T)', width: 80, sort: true}
                ,{field: 'price', title: '含税单价', width: 100, sort: true}
                ,{field: 'money', title: '金额(元)', width: 130, sort: true}
                ,{field:'state', title:'状态', width:110, templet: '#checkboxTpl', unresize: true}
                ,{fixed: 'right', width:150, align:'center', toolbar: '#barDemo'}
            ]]
        });
//        //监听状态操作

    });
    //监听工具条
    table.on('tool(mtable)', function(obj){
        var data = obj.data;
        var layEvent = obj.event;
        var tr = obj.tr;
        if(layEvent === 'edit'){ //查看
            //do somehing
            layer.open({
                type: 1
                ,title: false //不显示标题栏
                ,closeBtn: false
                ,area: '300px;'
                ,shade: 0.8
                ,id: 'LAY_layuipro' //设定一个id，防止重复弹出
                ,btn: ['火速围观', '残忍拒绝']
                ,btnAlign: 'c'
                ,moveType: 1 //拖拽模式，0或者1
                ,content: '<div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;"><% include order_det %></div>'
                ,success: function(layero){
                    var btn = layero.find('.layui-layer-btn');
                    btn.find('.layui-layer-btn0').attr({
                        href: 'http://www.layui.com/'
                        ,target: '_blank'
                    });
                }
            });
        } else if(layEvent === 'del'){ //删除
            layer.confirm('真的删除行么', function(index){
                obj.del(); //删除对应行（tr）的DOM结构，并更新缓存
                layer.close(index);
                //向服务端发送删除指令
                var id= data._id ;
                layer.msg(id);
                $.ajax({
                    url:"/home/customer/"+id,
                    type:"DELETE"
                });
            });
        }
    });
    //监听单元格编辑
    table.on('edit(mtable)', function(obj){
        console.log(value);
        var value = obj.value //得到修改后的值
            ,data = obj.data //得到所在行所有键值
            ,field = obj.field; //得到字段
        layer.open({
            type: 1
            ,title: false //不显示标题栏
            ,closeBtn: false
            ,area: '300px;'
            ,shade: 0.8
            ,id: 'LAY_layuipro' //设定一个id，防止重复弹出
            ,btn: ['火速围观', '残忍拒绝']
            ,btnAlign: 'c'
            ,moveType: 1 //拖拽模式，0或者1
            ,content: '[ID: <%= data.id %> ]  <=% field %>  字段更改为： value'
            ,success: function(layero){
                var btn = layero.find('.layui-layer-btn');
                btn.find('.layui-layer-btn0').attr({
                    href: 'http://www.layui.com/'
                    ,target: '_blank'
                });
            }
        });
        // layer.msg('[ID: '+ data.id +'] ' + field + ' 字段更改为：'+ value);
    });

    /*table.reload('customerTableIn', {
        where: { //设定异步数据接口的额外参数，任意设
            aaaaaa: 'xxx',
            ,bbb: 'yyy'
        }
        ,page: {
            curr: 1 //重新从第 1 页开始
        }
    });*/


    //订单管理 渲染 表格
    $('#product_item').on('click', function() {
        console.log("product_item  click");
        table.render({
            elem: '#data_table',
            height: 485,
            url: '../test/data1.json', //数据接口
            page: true ,//开启分页
            cols: [[ //表头
                {type: 'checkbox'}
                ,{type:'numbers'}
                ,{field: 'id', title: 'ID', width:69,fixed: 'left'}
                ,{field: 'datatime', title: '日期', width:80,sort: true}
                ,{field: 'order_number', title: '订单号', width:100, sort: true}
                ,{field: 'customer_name', title: '客户名称', width:200,sort: true}
                ,{field: 'wealth', title: '规格', width: 80, sort: true}
                ,{field: 'color', title: '颜色', width: 80, sort: true}
                ,{field: 'evaluating', title: '评审单号', width: 100,sort: true}
                ,{field: 'classify', title: '产品类型', width: 100, sort: true}
                ,{field: 'quantity', title: '数量(T)', width: 80, sort: true}
                ,{field: 'price', title: '含税单价', width: 100, sort: true}
                ,{field: 'money', title: '金额(元)', width: 130, sort: true}
            ]]
        });
    });

    //新增订单弹层
    $("#addOrder").click(function () {
        var $ = layui.jquery;
        var that = this;
        layer.open({
            type: 2 //此处以iframe举例
            , title: '新增订单'
            , area: ['800px', '600px']
            , shade: 0
            , maxmin: true
            , offset: [ //为了演示，随机坐标
//                    Math.random() * ($(window).height() - 300)
                30,
//                    , Math.random() * ($(window).width() - 390)
            ]
            , content: '/add_order'
//                , btn: [''] //只是为了演示
//                , yes: function () {
//                    layer.closeAll();
//                }

            , zIndex: layer.zIndex //重点1
            , success: function (layero) {
                layer.btnExcelInDB(layero); //重点2
            }
        });

        $('#layerDemo .layui-btn').on('click', function () {
            var othis = $(this), method = othis.data('method');
            active[method] ? active[method].call(this, othis) : '';
        });
    });

    $("#addOrder1").click(function () {
        var $ = layui.jquery;
        var that = this;
        layer.open({
            type: 2 //此处以iframe举例
            , title: '新增订单'
            , area: ['800px', '600px']
            , shade: 0
            , maxmin: true
            , offset: [ //为了演示，随机坐标
//                    Math.random() * ($(window).height() - 300)
                30,
//                    , Math.random() * ($(window).width() - 390)
            ]
            , content: '/add_order'
//                , btn: [''] //只是为了演示
//                , yes: function () {
//                    layer.closeAll();
//                }

            , zIndex: layer.zIndex //重点1
            , success: function (layero) {
                layer.btnExcelInDB(layero); //重点2
            }
        });

        $('#layerDemo .layui-btn').on('click', function () {
            var othis = $(this), method = othis.data('method');
            active[method] ? active[method].call(this, othis) : '';
        });
    });


//新增客户弹层
    $("#add_customer").click(function () {
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
                30,
//                    , Math.random() * ($(window).width() - 390)
            ]
            , content: '/add_customer'
//                , btn: [''] //只是为了演示
//                , yes: function () {
//                    layer.closeAll();
//                }

            , zIndex: layer.zIndex //重点1
            , success: function (layero) {
                layer.btnExcelInDB(layero); //重点2
            }
        });

        $('#layerDemo .layui-btn').on('click', function () {
            var othis = $(this), method = othis.data('method');
            active[method] ? active[method].call(this, othis) : '';
        });
    });



//新增牌号弹层
    $("#addproduct").click(function () {
        var $ = layui.jquery;
        var that = this;
        layer.open({
            type: 2 //此处以iframe举例
            , title: '新增产品'
            , area: ['800px', '600px']
            , shade: 0
            , maxmin: true
            , offset: [ //为了演示，随机坐标
//                    Math.random() * ($(window).height() - 300)
                30,
//                    , Math.random() * ($(window).width() - 390)
            ]
            , content: '/add_product'
//                , btn: [''] //只是为了演示
//                , yes: function () {
//                    layer.closeAll();
//                }

            , zIndex: layer.zIndex //重点1
            , success: function (layero) {
                layer.btnExcelInDB(layero); //重点2
            }
        });

        $('#layerDemo .layui-btn').on('click', function () {
            var othis = $(this), method = othis.data('method');
            active[method] ? active[method].call(this, othis) : '';
        });
    });

//新增生产数据
    $("#add_production").click(function () {
        var $ = layui.jquery;
        var that = this;
        layer.open({
            type: 2 //此处以iframe举例
            , title: '新增生产数据'
            , area: ['800px', '600px']
            , shade: 0
            , maxmin: true
            , offset: [ //为了演示，随机坐标
//                    Math.random() * ($(window).height() - 300)
                30,
//                    , Math.random() * ($(window).width() - 390)
            ]
            , content: '/add_production'
//                , btn: [''] //只是为了演示
//                , yes: function () {
//                    layer.closeAll();
//                }

            , zIndex: layer.zIndex //重点1
            , success: function (layero) {
                layer.btnExcelInDB(layero); //重点2
            }
        });

        $('#layerDemo .layui-btn').on('click', function () {
            var othis = $(this), method = othis.data('method');
            active[method] ? active[method].call(this, othis) : '';
        });
    });

    //excel导入弹层
    $("#btnExcelInDB").click(function () {
        var $ = layui.jquery;
        var that = this;
        layer.open({
            type: 2 //此处以iframe举例
            , title: '订单导入'
            , area: ['600px', '300px']
            , shade: 0
            , maxmin: true
            , offset: [ //为了演示，随机坐标
//                    Math.random() * ($(window).height() - 300)
                120,300

//                    , Math.random() * ($(window).width() - 390)
            ]
            , content: '/excel_in_db'
//                , btn: [''] //只是为了演示
//                , yes: function () {
//                    layer.closeAll();
//                }

            , zIndex: layer.zIndex //重点1
            , success: function (layero) {
                layer.btnExcelInDB(layero); //重点2
            }
        });

        $('#layerDemo .layui-btn').on('click', function () {
            var othis = $(this), method = othis.data('method');
            active[method] ? active[method].call(this, othis) : '';
        });
    });
    //日期范围选择
    layui.use('laydate', function() {
        var laydate = layui.laydate;
        laydate.render({
            elem: '#startDate'
        });
        laydate.render({
            elem: '#endDate'
        });
        laydate.render({
            elem:'#orderDate'
        });
        laydate.render({
            elem:'#orderSendDate'
        });
    });
});
//layui  模块结束

//输入框限制输入类型  只能输入数字
function prevent(e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
}
function digitInput(el, e) {
    var ee = e || window.event; // FF、Chrome IE下获取事件对象
    var c = e.charCode || e.keyCode; //FF、Chrome IE下获取键盘码
    //var txt = $('label').text();
    //$('label').text(txt + ' ' + c);
    var val = el.val();
    if (c == 110 || c == 190){ // 110 (190) - 小(主)键盘上的点
        (val.indexOf(".") >= 0 || !val.length) && prevent(e); // 已有小数点或者文本框为空，不允许输入点
    } else {
        if ((c != 8 && c != 46 && // 8 - Backspace, 46 - Delete
                (c < 37 || c > 40) && // 37 (38) (39) (40) - Left (Up) (Right) (Down) Arrow
                (c < 48 || c > 57) && // 48~57 - 主键盘上的0~9
                (c < 96 || c > 105)) // 96~105 - 小键盘的0~9
            || e.shiftKey) { // Shift键，对应的code为16
            prevent(e); // 阻止事件传播到keypress
        }
    }
}
$(function(){
    $("input[name='unit_price']").keydown(function(e) {
        digitInput($(this), e);
    });
});
$(function() {
    $("input[name='quantity']").keydown(function (e) {
        digitInput($(this), e);
    });
});
$(function() {
    $("input[name='order_amount']").keydown(function (e) {
        digitInput($(this), e);
    });
});


//welcom time info
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
}());


//动态加载网页+点击隐藏DIV块
function turnoff(obj) {
    //关闭欢迎信息
    document.getElementById(obj).style.display = "none";
}

function openOrderList(obj) {
    //隐藏主区域
    document.getElementById(obj).style.display = "none";
    //显示主区域
    document.getElementById('order_list_div').style.display = ""
}

function openCustomerList(obj) {
    //隐藏主区域
    document.getElementById(obj).style.display="none";
    if(orderlist_div.style.display != "none"){
        document.getElementById('order_list_div').style.display = "none"
    }
    //显示主区域
    document.getElementById('customer_list_div').style.display = ""
}
