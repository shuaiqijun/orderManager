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