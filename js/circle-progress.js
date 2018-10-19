/**
 * author: wonder.d.wang
 * 环形进度条组件（不依赖第三方库）
 * 圆点坐标：(x0,y0)
 * 半径：r
 * 角度：a0
 * 则圆上任一点为：（x1,y1） 
 * x1   =   x0   +   r   *   cos(ao   *   3.14   /180   )
 * y1   =   y0   +   r   *   sin(ao   *   3.14   /180   )
 **/
function Circle() {
    this.obj = {
        width: 100,
        height: 100,
        lineWidth: 10,
        lineColor: "#159963",
        round: "butt",
        startAngle: 0,
        percent: 0.6
    }
}
Circle.prototype.draw =  function (dom,obj) {
    this.obj = {
        width: obj.width,
        height: obj.height,
        lineWidth: obj.lineWidth,
        lineColor: obj.lineColor,
        round: obj.round,
        startAngle: 0,
        r: Number(obj.width - obj.lineWidth) / 2,
        percent: obj.percent
    }
    var startX = this.obj.r + this.obj.lineWidth / 2 + this.obj.r * Math.cos(this.obj.startAngle * 3.14 / 180),
        startY = this.obj.r + this.obj.lineWidth / 2 + this.obj.r * Math.sin(this.obj.startAngle * 3.14 / 180),
        endX = this.obj.r + this.obj.lineWidth / 2 + this.obj.r * Math.cos(this.obj.percent * 360 * 3.14 / 180),
        endY = this.obj.r + this.obj.lineWidth / 2 + this.obj.r * Math.sin(this.obj.percent * 360 * 3.14 / 180);
    // 圆弧
    // A rx ry x-deg large-arc sweep-flag x y
    // rx ry表示x轴半径和y轴半径，x-deg表示x轴旋转角度，large-arc表示大于180度还是小于180度(0为小，1为大)，
    // sweep-flag表示弧线方向(0为沿逆时针，1为沿顺时针)，x y为最终坐标。
    var path = 'M' + startX + ' ' + startY + ' A' + this.obj.r + ' ' + this.obj.r + ',0, 1, 1, ' + endX + ' ' + endY;
    var html = "<svg width='" + this.obj.width + "' height='" + this.obj.height + "' stroke-linecap='" + this.obj.round + "' stroke-linejoin='" + this.obj.round + "'>" +
        "<circle r='" + this.obj.r + "' cx='" + (this.obj.r + this.obj.lineWidth / 2) + "' cy='" + (this.obj.r + this.obj.lineWidth / 2) + "' " +
        "fill='#fff' stroke-width='" + this.obj.lineWidth + "' stroke='#E7EAED'></circle>" +
        "<path d='" + path + "' fill='none' stroke='" + this.obj.lineColor + "' stroke-width='" + this.obj.lineWidth + "' stroke-dasharray='628.4073486328125'>" +
        "<animate attributeName='stroke-dashoffset' from='628.4073486328125' to='0' dur='2s' repeatCount='0' />" +
        "</path>" +
        "</svg>";
    document.querySelector(dom).innerHTML = html
}