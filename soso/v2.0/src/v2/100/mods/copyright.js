function b(a) {
    c.call(this, a)
}
var c = a;
e(b, c);
var d = b.prototype;
d.init = function() {
    var a = document.createElement("div");
    a.style.cssText = "display:block;*width:1%;height:15px;font:11px arial,simsun;white-space:nowrap;filter:alpha(opacity=60 finishopacity=30 style=1 startx=0,starty=0,finishx=200,finishy=20) progid:DXImageTransform.Microsoft.gradient(startcolorstr=#FFFFFF,endcolorstr=#FFFFFF,gradientType=1);background-image:-moz-linear-gradient(right center , rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.45) 50px);background-image:-o-linear-gradient(right , rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.45) 50px);background-image:-webkit-gradient(linear,100 100,80 20,from(rgba(255, 255, 255, 0)),to(rgba(255, 255, 255, 0.45)))";
    a.innerHTML = Wa.Coryright.text;
    this.set("content", a)
};
d.draw = function() {
    var a = this.get("content"),
    b = this.get("map");
    if (b) {
        for (var c = b.get("mapType").layers, d = [], e = b.getBounds(), y = this.get("zoom"), l = 0; l < c.length; l++) {
            var f = c[l].get("copyrights");
            f && (f = f.getCopyrightNotice(e, y)) && d.push(f)
        } (c = this.get("copySpan")) || (c = document.createElement("span"), c.style.cssText = "color:#000000", a.appendChild(c), this.set("copySpan", c));
        c.innerHTML = d.join(",");
        a = this.get("viewWidth");
        if (this.get("content").offsetWidth > 2 * a / 3) {
            a = Qb();
            c.innerHTML = '&nbsp;&nbsp;<a style = "color:#000" id= ' + a + ' href="javascript:void(0)">\\u5730\\u56fe\\u6570\\u636e</a>';
            var k = this;
            document.getElementById(a).onclick = function() {
                k.dataCtrl ? (k.dataCtrl.set("map", null), k.dataCtrl = null) : k.dataCtrl = new Pa({
                    map: b,
                    align: 4,
                    content: '<div style="background: #fff;">Tencent' + d.join(",") + "</div>"
                })
            }
        }
    }
};
d.zoom_changed = d.center_changed = function() {
    this.redraw()
};
d.viewWidth_changed = function() {
    this.redraw()
};
d.bindKeys = function() {
    var a = this.get("map");
    this.bindTo("zoom", a);
    this.bindTo("center", a);
    this.bindTo("viewWidth", a)
};
d.unbindKeys = function() {
    this.unbind("zoom");
    this.unbind("center")
};
B.$setExports(b)
// JavaScript Document
