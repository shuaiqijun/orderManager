$(function () {
    $("#btnExcelInDB").click(function () {
        var $ = layui.jquery;
        var that = this;
        layer.open({
            type: 2 //此处以iframe举例
            , title: '支持后缀名为.xls、.xlsx的Excel模板导入'
            , area: ['600px', '360px']
            , shade: 0
            , maxmin: true
            , offset: [ //为了演示，随机坐标
//                    Math.random() * ($(window).height() - 300)
//                    , Math.random() * ($(window).width() - 390)
                100,400
            ]
            , content: '/excelindb'
//                , btn: ['关闭'] //只是为了演示
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
    })
});
