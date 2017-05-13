function redPack(options) {
    this.el = options.el;
    this.rains = [];
    this.speed = options.speed; // 控制红包落下的速度
    this.density = options.density; // 红包密度
    this.callback = options.callback; // 回调
    this.start();

};
redPack.prototype.create = function() {
    var el = this.el;
    var This = this;
    var nRed = document.createElement("div");
    nRed.className = "redpack";
    nRed.style.left = Math.random() * (el.clientWidth - 30) + "px";
    nRed.style.top = -el.clientHeight / 10 + "px";
    nRed.onclick = function() {
        nRed.className = "redpack redpacked";
        This.callback();
    }
    el.appendChild(nRed);
    this.move(nRed);
    this.rains.push(nRed);
};
redPack.prototype.start = function() {
    var This = this;
    This.timer = setInterval(function() {
        This.create();
    }, This.density);
};
redPack.prototype.stop = function() {
    var This = this;
    clearInterval(This.timer);
    for (var i = 0; i < This.rains.length; i++) {
        clearInterval(This.rains[i].timer);
    }
};
redPack.prototype.move = function(rains) {
    var el = this.el;
    var This = this;
    var diffY = Math.random() + 1; // 垂直上的轻微偏移
    var diffX = Math.random(); // 水平上的轻微偏移
    rains.timer = setInterval(function() {
        if (diffY > 1.5) {
            rains.style.left = parseInt(rains.style.left) + parseInt(diffX * rains.clientHeight / 30) + "px";
        } else {
            rains.style.left = parseInt(rains.style.left) - parseInt(diffX * rains.clientHeight / 30) + "px";
        }
        rains.style.top = parseInt(rains.style.top) + parseInt(diffY * rains.clientHeight / 20) + "px";
        if (el.clientHeight < parseInt(rains.style.top)) {
            // 超出 区域过后，关闭定时器，删除红包
            clearInterval(rains.timer);
            el.removeChild(rains);
        }
    }, This.speed);
};
