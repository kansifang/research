function b(a) {
    c.call(this, a)
}
var c = a;
e(b, c);
var d = b.prototype;
d.init = function() {
    var a = "background-image:url(" + (Ea + "default/imgs/zoomhint.gif") + ");background-repeat:no-repeat;overflow:hidden;font-size:1px; position:absolute;width:7px;height:7px;",
    b = ['<div  style="position:absolute;z-index:0;top:0;left:0;overflow:hidden;display:none;">'];
    b.push('<div style="' + a + 'top:0;left:0;"></div>');
    b.push('<div style="' + a + 'top:0;right:0;"></div>');
    b.push('<div style="' + a + 'bottom:0;left:0;"></div>');
    b.push('<div style="' + a + 'bottom:0;right:0;"></div>');
    b.push("</div>");
    b = b.join("");
    this.set("content", b)
};
d.draw = function() {
    var a = this.get("zoom"),
    b = this.get("targetZoom") || a,
    a = a - b;
    if (0 !== a) {
        this.get("content");
        this.get("map");
        var c = this.getModel().get("container");
        if ((b = this.get("focusPixel")) && c) {
            var d = c.lastChild,
            c = !!(0 > a),
            e = 4 / 3,
            g = Math.ceil(c ? 60 : 120),
            e = Math.max(30, g / e),
            l = d.style;
            l.width = "0px";
            l.height = "0px";
            l.display = "";
            d = d.children;
            c ? (d[0].style.backgroundPosition = "0 0", d[1].style.backgroundPosition = "-7px 0", d[2].style.backgroundPosition = "0 -7px", d[3].style.backgroundPosition = "-7px -7px") : (d[0].style.backgroundPosition = "-7px -7px", d[1].style.backgroundPosition = "0 -7px", d[2].style.backgroundPosition = "-7px 0", d[3].style.backgroundPosition = "0 0");
            d = a;
            c && (d = 2 - Math.abs(a), d = 0 < d ? d: 0);
            l.width = g * d + "px";
            l.height = e * d + "px";
            l.left = b.x - g / 2 * d + "px";
            l.top = b.y - e / 2 * d + "px";
            this.boxStyle = l
        }
    }
};
d.hide = function() {
    this.boxStyle && (this.boxStyle.display = "none")
};
d.zoom_changed = function() {
    this.redraw()
};
d.bindKeys = function() {
    var a = this.getModel(),
    b = a.get("panes").maskPane,
    a = a.get("container"),
    c = this.get("map");
    p.forwardDom(a, "mousedown", b);
    p.forwardDom(a, "mousemove", b);
    p.forwardDom(a, "mouseup", b);
    p.forwardDom(a, "mousewheel", b, !0);
    this.bindTo("focusPixel", c);
    this.bindTo("targetZoom", c);
    this.bindTo("zoom", c);
    p.bind(c, "zoomend", this.hide, this)
};
d.unbindKeys = function() {
    var a = this.get("map");
    this.unbind("zoom", a);
    this.unbind("focusPixel", a);
    this.unbind("targetZoom", a)
};
B.$setExports(b)
// JavaScript Document
