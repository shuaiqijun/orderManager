//layui 模块开始
layui.use(['element','table', 'layer','jquery'], function() {
    var element = layui.element,
        $ = layui.jquery,
        layer = layui.layer,
        table = layui.table;
    //第一个实例
    function renderCustomer() {
        table.render({
            elem: '#data_table',
            height: 'full-150',
            url: '../test/data1.json' ,//数据接口
            page: true ,//开启分页
            limit:10,
            cols: [[ //表头
                {field: 'id', title: 'ID', width:80, sort: true, fixed: 'left'}
                ,{field: 'username', title: '用户名', width:80}
                ,{field: 'sex', title: '性别', width:80, sort: true}
                ,{field: 'city', title: '城市', width:80}
                ,{field: 'sign', title: '签名', width: 177}
                ,{field: 'experience', title: '积分', width: 80, sort: true}
                ,{field: 'score', title: '评分', width: 80, sort: true}
                ,{field: 'classify', title: '职业', width: 80},
                {field: 'wealth', title: '财富', width: 135, sort: true},
                {fixed: 'right', width: 165, align:'center', toolbar: '#barDemo'}
            ]]
        });
    } ;
    renderCustomer();
    //监听工具条
    table.on('tool', function(obj){
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

    //新增客户弹层
    $("#add_customer").on('click',function () {
        var index =layer.open({
            type: 2 ,
            title: '新增客户',
            id: "info_form",
            shadeClose: false,
            shade: 0.4,
            area: ['800px', '650px'],
            maxmin:false,
            resize:false,
            content: '../html/customer_form.html'
        });
    });
});







