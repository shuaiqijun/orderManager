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

    //监听工具条
    table.on('tool(mtable)', function(obj){
        var data = obj.data;
        var layEvent = obj.event;
        var tr = obj.tr;
        if(layEvent === 'detail'){ //查看
            //do somehing
            layer.msg(11111);
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
    $('#order_item').on('click', function() {
        console.log("order_item  click");
        table.render({
            elem: '#orderData_table'
            ,height: 485
            ,url: '../test/data1.json' //数据接口
            ,page: true //开启分页
            ,cols: [[ //表头
                {field: 'id', title: 'ID', width:69,fixed: 'left'}
                ,{field: 'order_data', title: '日期', width:80,sort: true}
                ,{field: 'order_number', title: '订单号', width:100, sort: true}
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
                ,{fixed: 'right', width:178, align:'center', toolbar: '#barDemo'}
            ]]
        });
//        //监听状态操作
        form.on('checkbox(lockDemo)', function(obj){
            layer.tips(this.value + ' ' + this.name + '：'+ obj.elem.checked, obj.othis);
        });
        //监听表格复选框选择
        table.on('checkbox(demo)', function(obj){
            console.log(obj)
        });
        //监听工具条
        table.on('tool(demo)', function(obj){
            var data = obj.data;
            if(obj.event === 'detail'){
                layer.msg('ID：'+ data.id + ' 的查看操作');
            } else if(obj.event === 'del'){
                layer.confirm('真的删除行么', function(index){
                    obj.del();
                    layer.close(index);
                });
            } else if(obj.event === 'edit'){
                layer.alert('编辑行：<br>'+ JSON.stringify(data))
            }
        });

        var $ = layui.$, active = {
            getCheckData: function(){ //获取选中数据
                var checkStatus = table.checkStatus('idTest')
                    ,data = checkStatus.data;
                layer.alert(JSON.stringify(data));
            }
            ,getCheckLength: function(){ //获取选中数目
                var checkStatus = table.checkStatus('idTest')
                    ,data = checkStatus.data;
                layer.msg('选中了：'+ data.length + ' 个');
            }
            ,isAll: function(){ //验证是否全选
                var checkStatus = table.checkStatus('idTest');
                layer.msg(checkStatus.isAll ? '全选': '未全选')
            }
        };

        $('.demoTable .layui-btn').on('click', function(){
            var type = $(this).data('type');
            active[type] ? active[type].call(this) : '';
        });
    });

    layui.use('table', function() {
        var table = layui.table;
        var form = layui.form;
        //第一个实例
        table.render({
            elem: '#orderData_table'
            ,height: 485
            ,url: '../test/data1.json' //数据接口
            ,page: true //开启分页
            ,cols: [[ //表头
                {field: 'id', title: 'ID', width:69,fixed: 'left'}
                ,{field: 'order_data', title: '日期', width:80,sort: true}
                ,{field: 'order_number', title: '订单号', width:100, sort: true}
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
                ,{fixed: 'right', width:178, align:'center', toolbar: '#barDemo'}
            ]]
        });
//        //监听状态操作
        form.on('checkbox(lockDemo)', function(obj){
            layer.tips(this.value + ' ' + this.name + '：'+ obj.elem.checked, obj.othis);
        });
        //监听表格复选框选择
        table.on('checkbox(demo)', function(obj){
            console.log(obj)
        });
        //监听工具条
        table.on('tool(demo)', function(obj){
            var data = obj.data;
            if(obj.event === 'detail'){
                layer.msg('ID：'+ data.id + ' 的查看操作');
            } else if(obj.event === 'del'){
                layer.confirm('真的删除行么', function(index){
                    obj.del();
                    layer.close(index);
                });
            } else if(obj.event === 'edit'){
                layer.alert('编辑行：<br>'+ JSON.stringify(data))
            }
        });

        var $ = layui.$, active = {
            getCheckData: function(){ //获取选中数据
                var checkStatus = table.checkStatus('idTest')
                    ,data = checkStatus.data;
                layer.alert(JSON.stringify(data));
            }
            ,getCheckLength: function(){ //获取选中数目
                var checkStatus = table.checkStatus('idTest')
                    ,data = checkStatus.data;
                layer.msg('选中了：'+ data.length + ' 个');
            }
            ,isAll: function(){ //验证是否全选
                var checkStatus = table.checkStatus('idTest');
                layer.msg(checkStatus.isAll ? '全选': '未全选')
            }
        };

        $('.demoTable .layui-btn').on('click', function(){
            var type = $(this).data('type');
            active[type] ? active[type].call(this) : '';
        });
    });

    //订单管理 渲染 表格
    $('#product_item').on('click', function() {
        console.log("product_item  click");
        table.render({
            elem: '#data_table',
            height: 485,
            url: '../test/data1.json', //数据接口
            page: true ,//开启分页
            cols: [[ //表头
                {field: 'id', title: 'ID', width:69,fixed: 'left'}
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