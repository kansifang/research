function b(a) {
    c.call(this, a);
    this.init()
}
var c = a;
e(b, c);
var d = b.prototype;
d.init = function() {
    var a = "position:absolute;border:1px solid #ffffff;width:2px;height:6px;background:" + this.getModel().get("barColor") + ";font-size:0;line-height:0;";
    this.m_cssStyle = a + "z-index:1;border-left-width:0px;";
    this.u_cssStyle = a + "border-bottom-width:0px;";
    this.d_cssStyle = a + "border-top-width:0px;";
    a = ga("div");
    a.style.cssText = "position:absolute";
    this.set("content", a);
    var b;
    if (w(this.get("unit"))) b = this.scaleBuiler("up"),
    a.appendChild(b),
    this.get("up_rl").style.borderBottomWidth = "1px";
    else {
        b = this.scaleBuiler("up");
        var c = this.scaleBuiler("down");
        a.appendChild(b);
        a.appendChild(c)
    }
    this.redraw()
};
d.createLeftPart = function(a) {
    var b = ga("div");
    "up" == a ? (b.style.cssText = this.u_cssStyle, b.style.top = "7px", b.style.height = "9px") : "down" == a && (b.style.cssText = this.d_cssStyle, b.style.top = "17px", b.style.height = "6px");
    b.style.left = 0;
    b.style.zIndex = 0;
    return b
};
d.createRightPart = function(a) {
    var b = ga("div");
    "up" == a ? (b.style.cssText = this.u_cssStyle, b.style.top = "0px") : "down" == a && (b.style.cssText = this.d_cssStyle, b.style.top = "9px");
    b.style.left = "81px";
    b.style.zIndex = 2;
    return b
};
d.createMiddlePart = function() {
    var a = ga("div");
    a.style.cssText = this.m_cssStyle;
    a.style.left = "3px";
    a.style.width = "80px";
    a.style.height = "2px";
    a.style.top = "6px";
    return a
};
d.createTextPart = function(a) {
    var b = ga("div");
    b.style.cssText = "position:relative; " + ("up" == a ? "top: 0px;": "bottom:-16px;") + " font:11px arial,simsun;color:" + this.getModel().textColor + ";text-align:left; left:5px;";
    return b
};
d.scaleBuiler = function(a) {
    var b = ga("div");
    b.style.cssText = "width:100px;position:absolute;";
    var c = ga("div");
    c.style.cssText = "position:absolute;height:7px;width:84px;bottom:0px;";
    var d = this.createLeftPart(a),
    e = this.createRightPart(a),
    g = this.createMiddlePart(),
    l = this.createTextPart(a);
    b.appendChild(d);
    c.appendChild(e);
    c.appendChild(g);
    b.appendChild(l);
    b.appendChild(c);
    this.set(a + "_rl", d);
    this.set(a + "_rr", e);
    this.set(a + "_rm", g);
    this.set(a + "_ruler", c);
    this.set(a + "_text", l);
    return b
};
d.unit_changed = function() {
    this.init()
};
d.zoom_changed = d.center_changed = function() {
    this.redraw()
};
d.textcolor_changed = function() {
    var a = this.get("up_text"),
    b = this.get("down_text");
    a && (a.style.color = this.get("textColor"));
    b && (b.style.color = this.get("textColor"))
};
d.barcolor_changed = function() {
    var a = this.get("up_rr"),
    b = this.get("up_rl"),
    c = this.get("up_rm"),
    d = this.get("down_rr"),
    e = this.get("down_rl"),
    g = this.get("down_rm"),
    l = this.get("barColor");
    a && c && b && (a.style.backgroundColor = l, b.style.backgroundColor = l, c.style.backgroundColor = l);
    d && g && e && (d.style.backgroundColor = l, g.style.backgroundColor = l, e.style.backgroundColor = l)
};
d.draw = function() {
    this.get("map");
    var a = this.getResolution() * this.get("maxWidth"),
    b = this.get("unit"),
    c = this.get("align"),
    c = Math.floor(c / 3),
    d = this.get("content");
    switch (c) {
    case 0:
        d.style.bottom = "0px";
        break;
    case 2:
        d.style.bottom = "30px"
    }
    if (void 0 != b) if (w(b)) this.updateScale("up", b, a);
    else {
        var e = this,
        g = !0;
        T(b,
        function(b) {
            g ? (e.updateScale("up", b, a), g = !1) : e.updateScale("down", b, a)
        })
    }
};
d.getResolution = function() {
    var a = this.get("center"),
    b = this.get("zoom");
    if (a && b) return Math.abs(156543.04 * Math.cos(a.getLat() * Math.PI / 180)) / Math.pow(2, b)
};
d.updateScale = function(a, b, c) {
    var d = {};
    b == cc.METRIC && (d = this.updateMetric(c));
    b == cc.IMPERIAL && (d = this.updateImperial(c));
    switch (a) {
    case "up":
        this.updateUp(d);
        break;
    case "down":
        this.updateDown(d)
    }
};
d.getScaleInfo = function(a, b) {
    switch (a) {
    case cc.METRIC:
        return this.updateMetric(b);
    case cc.IMPERIAL:
        return this.updateImperial(b)
    }
};
d.updateMetric = function(a) {
    var b = this.getRoundNum(a),
    a = this.getScaleWidth(b / a);
    return {
        text: 1e3 > b ? b + " " + ua.Scale.m: b / 1e3 + " " + ua.Scale.km,
        width: a
    }
};
d.updateUp = function(a) {
    var b = this.get("up_rr"),
    c = this.get("up_rm"),
    d = this.get("up_text");
    d.innerHTML = a.text;
    d.style.width = "80px";
    c.style.width = a.width + "px";
    b.style.left = a.width + 0 + "px"
};
d.updateImperial = function(a) {
    var a = 3.2808399 * a,
    b;
    5280 < a ? (a /= 5280, b = this.getRoundNum(a), a = this.getScaleWidth(b / a), b = b + " " + ua.Scale.mile) : (b = this.getRoundNum(a), a = this.getScaleWidth(b / a), b = b + " " + ua.Scale.feet);
    return {
        text: b,
        width: a
    }
};
d.updateDown = function(a) {
    var b = this.get("down_rr"),
    c = this.get("down_rm"),
    d = this.get("up_rm"),
    e = this.get("up_ruler"),
    g = this.get("down_ruler"),
    l = this.get("down_text"),
    f = a.width;
    l.innerHTML = a.text;
    a = parseInt(d.style.width);
    l.style.width = "80px";
    c.style.width = (f > a ? f: a) + "px";
    b.style.left = f + "px";
    c.style.visibility = f > a ? "": "hidden";
    d.style.visibility = f > a ? "hidden": "";
    g.style.zIndex = f > a ? 0 : 1;
    e.style.zIndex = f > a ? 1 : 0
};
d.getScaleWidth = function(a) {
    return Math.round(this.get("maxWidth") * a) - 10
};
d.getRoundNum = function(a) {
    var b = Math.pow(10, (Math.floor(a) + "").length - 1),
    a = a / b;
    return b * (10 <= a ? 10 : 5 <= a ? 5 : 2 <= a ? 2 : 1)
};
d.bindKeys = function() {
    var a = this.getModel();
    this.bindTo("textColor", a);
    this.bindTo("barColor", a);
    this.bindTo("maxWidth", a);
    this.bindTo("unit", a);
    a = this.get("map");
    this.bindTo("center", a);
    this.bindTo("zoom", a)
};
d.unbindKeys = function() {
    this.unbind("content");
    this.unbind("textColor");
    this.unbind("barColor");
    this.unbind("maxWidth");
    this.unbind("center");
    this.unbind("zoom");
    this.unbind("map");
    this.set("content", null)
};
B.$setExports(b)
// JavaScript Document
