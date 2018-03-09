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
            elem: '#data_table'
            ,height: 485
            ,url: '../test/data1.json' //数据接口
            ,page: true //开启分页
            ,cols: [[ //表头
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

});


