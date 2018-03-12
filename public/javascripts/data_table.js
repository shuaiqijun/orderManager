//数据表单
layui.use('table', function(){
    var table = layui.table;
    var form = layui.form;
    //第一个实例
    table.render({
        elem: '#data_table'
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