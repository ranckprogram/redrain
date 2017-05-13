# redrain
红包雨的javascript插件

html 部分
<div id="box"></div>

style 部分

/* 红包的样式*/
.redpack {
    position: absolute;
    display: block;
    width: 30px;
    height: 44px;
    background: #f00;
}
/*点击后的红包*/
.redpacked {
    background: #f80;
}

javascript 部分
var el = document.getElementById("box");
var rain = new redPack({
    el: el, // 容器
    //chance: 0.5, // 几率,暂时不要
    speed: 10, // 速度，越小越快
    density: 200, //  红包密度，越小越多
    callback: function() {
            console.log("callback");
        } // 点击红包的回调
});

document.onclick = function() {
    //停止
    // rain.stop();
}