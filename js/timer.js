    // 设置id="day_show"
    // <strong><span class="fas fa-clock"></span> 本站已稳定运行：</strong>
    // <strong id="day_show">运行时间</strong>
    var now = new Date();
    function createtime(){
        var grt= new Date("08/02/2022 00:00:00");
        now.setTime(now.getTime()+250);
        days = (now - grt ) / 1000 / 60 / 60 / 24;
        dnum = Math.floor(days);
        hours = (now - grt ) / 1000 / 60 / 60 - (24 * dnum);
        hnum = Math.floor(hours);
        if(String(hnum).length ==1 ){hnum = "0" + hnum;}
        minutes = (now - grt ) / 1000 / 60 - (24 * 60 * dnum) - (60 * hnum);
        mnum = Math.floor(minutes);
        if(String(mnum).length ==1 ){mnum = "0" + mnum;}
        seconds = (now - grt ) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
        snum = Math.round(seconds);
        if(String(snum).length ==1 ){snum = "0" + snum;}
        document.getElementById("day_show").innerHTML = dnum+"天 "+hnum+"时 " +mnum+"分 " +snum+"秒"; //day_show
    }
    setInterval("createtime()",250);
    
    //2秒后显示
    //<div id="delay" style="display:none;">
    function showmsg(){
        $("#delay").show();
    }
    setInterval(showmsg,2000);