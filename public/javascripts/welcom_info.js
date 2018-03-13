function getCurDate() {
    var mydate = new Date();
    var week;
    switch (mydate.getDay()){
        case 1: week="星期一"; break;
        case 2: week="星期二"; break;
        case 3: week="星期三"; break;
        case 4: week="星期四"; break;
        case 5: week="星期五"; break;
        case 6: week="星期六"; break;
        default: week="星期天";
    }
    var years = mydate.getFullYear();
    var month = add_zero(mydate.getMonth()+1);
    var days = add_zero(mydate.getDate());
    var hours = add_zero(mydate.getHours());
    var minutes = add_zero(mydate.getMinutes());
    var seconds=add_zero(mydate.getSeconds());

    function add_zero(temp)
    {
        if(temp<10) return "0"+temp;
        else return temp;
    }

    var ndate = "现在时间：" + years + "年" + month + "月" + days + "日 " + hours + ":" + minutes + ":" + seconds + " " + week;
    document.getElementById("welcom").innerHTML = ndate;

    setInterval("getCurDate();",1000);
    console.log(ndate)
}
getCurDate();