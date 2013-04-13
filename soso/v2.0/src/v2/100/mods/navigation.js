function b(a) {
    jb.call(this, a)
}
function c(a, b, n, f) {
    var d = function(b) {
        return function() {
            g(a, n, f[b])
        }
    };
    N.bindDom(b, "mouseover", d(1), this);
    N.bindDom(b, "mouseout", d(0), this);
    N.bindDom(b, "mouseup", d(1), this);
    N.bindDom(b, "mousedown", d(2), this)
}
function d(a) {
    var b = E();
    u(b, a[2], a[3]);
    g(b, ra, a);
    return b
}
var E = ga,
g = oc,
u = na,
N = p,
M = Ea + "default/imgs/ctrls.png",
R = [230, 58, 64, 64],
l = [165, 124, 64, 64],
f = [32, 124, 64, 64],
k = [98, 124, 64, 64],
C = [230, 124, 64, 64],
s = [164, 190, 64, 64],
z = [32, 190, 64, 64],
A = [97, 190, 64, 64],
ka = [230, 190, 64, 64],
Y = [88, 60, 26, 22],
h = [119, 60, 26, 22],
j = [150, 60, 26, 22],
i = [88, 87, 26, 22],
x = [119, 87, 26, 22],
o = [150, 87, 26, 22],
Ec = [4, 122, 26, 26],
J = [4, 148, 26, 26],
P = [4, 174, 26, 26],
r = [188, 70, 34, 6],
ef = [188, 76, 26, 6],
ff = [188, 82, 34, 6],
w = [188, 88, 34, 6],
D = [188, 93, 34, 6],
G = [188, 100, 34, 6],
X = {
    left: [228, 41, 25, 15],
    right: [258, 41, 25, 15]
},
ha = [22, 22, 8, 8, 2, 16, 0, 26, 2, 36, 44, 44],
q = [22, 22, 44, 8, 50, 16, 52, 26, 50, 36, 44, 44],
O = [22, 22, 8, 8, 16, 2, 26, 0, 36, 2, 44, 44],
t = [22, 22, 8, 44, 16, 50, 26, 52, 36, 50, 44, 44],
jb = a,
ra = M;
e(b, jb);
var n = b.prototype;
n.init = function() {
    var a = E();
    this.pan = this.createViewPan();
    a.appendChild(this.pan);
    var b = this.createViewZoom();
    this.zoomIn = b[0];
    this.zoomOut = b[1];
    a.appendChild(this.zoomIn);
    this.bar = b = this.createViewBar();
    this.updateViewBar();
    this.ruler = this.createViewRuler();
    b.appendChild(this.ruler);
    this.updateViewRuler();
    this.heat = this.createViewHeat();
    b.appendChild(this.heat);
    this.updateViewHeat();
    this.slide = this.createSlide();
    b.appendChild(this.slide);
    this.tips = this.createTips();
    b.appendChild(this.tips);
    a.appendChild(b);
    a.appendChild(this.zoomOut);
    this.set("content", a);
    this.updateHeat();
    N.bindDom(this.zoomIn, "mouseover", this.toggleTips(""), this);
    N.bindDom(this.zoomIn, "mouseout", this.toggleTips("none"), this);
    N.bindDom(this.zoomOut, "mouseover", this.toggleTips(""), this);
    N.bindDom(this.zoomOut, "mouseout", this.toggleTips("none"), this);
    N.bindDom(this.bar, "mouseover", this.toggleTips(""), this);
    N.bindDom(this.bar, "mouseout", this.toggleTips("none"), this);
    N.bindDom(this.tips, "mouseover", this.toggleTips(""), this);
    N.bindDom(this.tips, "mouseout", this.toggleTips("none"), this);
    N.addListener(this, "zoom_changed",
    function() {
        this.toggleTips("")();
        this.toggleTips("none")()
    })
};
n.bindKeys = function() {
    var a = this.getModel();
    this.bindTo("style", a);
    this.bindTo("zoomTips", a);
    this.bindTo("margin", a);
    this.bindTo("align", a);
    this.bindTo("container", a);
    a = this.get("map");
    this.bindTo("maxZoom", a);
    this.bindTo("minZoom", a);
    this.bindTo("zoom", a)
};
n.unbindKeys = function() {
    this.get("map");
    this.unbind("style");
    this.unbind("margin");
    this.unbind("zoom");
    this.unbind("maxZoom");
    this.unbind("minZoom")
};
n.zoom_changed = function() {
    this.updateHeat()
};
n.minZoom_changed = n.maxZoom_changed = function() {
    this.updateViewBar();
    this.updateViewRuler();
    this.updateViewHeat();
    this.updateSlide();
    this.updateTips(1)
};
n.getCurrentStyle = function() {
    var a = this.get("style"),
    b = this.get("container"),
    c = this.get("mapContainer"),
    n = this.pan.offsetHeight + this.zoomIn.offsetHeight + this.zoomOut.offsetHeight,
    f = n + this.bar.offsetHeight,
    d = this.pan.offsetWidth,
    k = sc(b),
    I = sc(c),
    b = k[0] - I[0],
    q = 0,
    k = c.offsetHeight - (k[1] - I[1]);
    a === sb.DEFAULT && (a = k < n ? sb.SMALL: k < f ? sb.ZOOM_PAN: sb.DEFAULT);
    c.offsetWidth - b < d && (q = 1);
    return [a, q]
};
n.updateViewBar = function() {
    var a = this.bar;
    if (a) {
        var b = this.get("minZoom"),
        c = this.get("maxZoom");
        u(a, 0, (c - b) * ef[3] + r[3] + ff[3] - 1)
    }
};
n.updateViewRuler = function() {
    var a = this.ruler;
    if (a) {
        hb(a);
        var b = this.get("minZoom"),
        c = this.get("maxZoom"),
        n = document.createDocumentFragment(),
        f = d(r);
        n.appendChild(f);
        for (f = 0; f < c - b; f++) {
            var k = d(ef);
            n.appendChild(k)
        }
        b = d(ff);
        n.appendChild(b);
        a.appendChild(n)
    }
};
n.updateViewHeat = function() {
    var a = this.get("minZoom"),
    b = this.get("maxZoom"),
    c = this.heat;
    if (c) {
        hb(c);
        var n = document.createDocumentFragment(),
        f = d(w);
        n.appendChild(f);
        for (f = 0; f < b - a; f++) {
            var k = d(D);
            n.appendChild(k)
        }
        a = d(G);
        n.appendChild(a);
        c.appendChild(n)
    }
};
n.updateSlide = function() {
    var a = this.slide;
    a && (this.slideStart = 0, ca(a, 21, this.slideStart), this.slideEnd = parseInt(this.bar.style.height) - 12)
};
n.updateHeat = function() {
    var a = this.get("zoom"),
    b = this.get("minZoom"),
    c = this.get("maxZoom"),
    n = this.slideEnd,
    f = this.slideStart,
    d = 0;
    a && n && (d = n - Math.floor((a - b) / (c - b) * (n - f) + 3));
    this.slide && (this.slide.style.top = Math.floor(d) + "px", this.setHeat(d))
};
n.draw = function() {
    var a = this.get("content"),
    b = this.get("map");
    a && b && (b = this.getCurrentStyle(), a = b[0], b = b[1], this.zoomIn.style.display = "", this.zoomOut.style.display = "", a === sb.DEFAULT ? (this.pan.style.display = "", this.bar.style.display = "") : a === sb.ZOOM_PAN ? (this.bar.style.display = "none", this.pan.style.display = "") : (this.pan.style.display = "none", this.bar.style.display = "none"), this.ctrlType = b, this.updateTips())
};
n.createViewPan = function() {
    var a = E();
    a.style.cssText = "position:relative;margin-bottom:0px;";
    var b = E();
    b.style.cssText = "position:absolute;z-index:0;";
    a.appendChild(b);
    u(a, R[2], R[3]);
    u(b, R[2], R[3]);
    g(b, ra, R);
    var n, d = ra;
    n = [R[2], R[3]];
    var I = E("div");
    I.style.cssText = "position:absolute;overflow:hidden;z-index:1;opacity:0.01;filter:alpha(opacity=1);cursor:pointer";
    var e = E("img");
    I.appendChild(e);
    e.src = d;
    var d = Qb(),
    h = null;
    e.setAttribute("usemap", "#" + d);
    u(e, n[0], n[1]);
    u(I, n[0], n[1]);
    Q && 9 > Q ? (e.setAttribute("useMap", "#" + d), h = E('<map name="' + d + '"></map>')) : (h = E("map"), h.setAttribute("name", d));
    I.appendChild(h);
    a.appendChild(I);
    n = h;
    I = [[O, ua.Navigation.up, k, A], [t, ua.Navigation.down, l, s], [ha, ua.Navigation.left, f, z], [q, ua.Navigation.right, C, ka]];
    for (e = 0; 4 > e; e++) {
        var d = n,
        h = I[e][0],
        y = I[e][1],
        M = E("area");
        M.href = "javascript:void(0)";
        d.appendChild(M);
        M.setAttribute("shape", "poly");
        M.setAttribute("coords", h.join(","));
        M.style.cursor = "pointer";
        y && (M.title = y);
        d = M;
        c(b, d, ra, [R, I[e][2], I[e][3]]);
        N.bindDom(d, "click", this.operate(e), this)
    }
    return a
};
n.createViewZoom = function() {
    var a = E();
    a.style.cssText = "position:relative;margin:0 0;left:18px;cursor:pointer;overflow:hidden;";
    a.title = ua.Navigation.zoomIn;
    var b = E();
    b.style.cssText = "position:relative;margin:0 0;left:18px;cursor:pointer;overflow:hidden;";
    b.title = ua.Navigation.zoomOut;
    u(a, Y[2], Y[3]);
    u(b, i[2], i[3]);
    g(a, M, Y);
    g(b, M, i);
    var n = [i, x, o];
    c(a, a, M, [Y, h, j]);
    c(b, b, M, n);
    N.bindDom(a, "click", this.operate(4), this);
    N.bindDom(b, "click", this.operate(5), this);
    return [a, b]
};
n.createViewBar = function() {
    var a = E();
    a.style.cssText = "position:relative;cursor:pointer;";
    return a
};
n.createViewRuler = function() {
    this.get("minZoom");
    this.get("maxZoom");
    var a = E();
    a.style.cssText = "position:absolute;margin:0 0;left:18px;cursor:pointer;";
    a.title = ua.Navigation.ruler;
    N.bindDom(a, "click", this.clickRuler, this);
    return a
};
n.createViewHeat = function() {
    var a = E();
    a.style.cssText = "position:absolute;margin:0 0;left:18px;cursor:pointer;";
    a.title = ua.Navigation.ruler;
    N.bindDom(a, "click", this.clickRuler, this);
    return a
};
n.createSlide = function() {
    this.slideStart = 0;
    this.slideEnd = parseInt(this.bar.style.height) - 12;
    var a = E();
    a.style.position = "absolute";
    a.style.margin = "0 0";
    a.title = ua.Navigation.slide;
    a.style.zIndex = 2;
    u(a, Ec[2], Ec[3]);
    g(a, ra, Ec);
    ca(a, 21, this.slideStart);
    c(a, a, ra, [Ec, J, P]);
    var b = this,
    n = 0,
    f, d = this.get("map");
    Pb(a, "grab");
    var k = new fa(a);
    k.addListener("mousedown",
    function(a) {
        Eb(a)
    });
    k.addListener("dragstart",
    function() {
        var b = d.get("_zoomFx");
        b && b.stop(!0);
        Pb(a, "grabbing")
    });
    k.addListener("dragging",
    function(c) {
        Eb(c);
        Pb(a, "grabbing");
        var c = rc(c),
        k = sc(b.ruler),
        I = b.slideEnd,
        e = c[1] - k[1] + b.slideStart - 9;
        0 > e && (e = 0);
        e >= I - 6 && (e = I - 6);
        b.slide.style.top = e + "px";
        b.setHeat(e);
        I = b.get("minZoom");
        e = b.get("maxZoom");
        f = (1 - (c[1] - k[1]) / (k[3] - 9)) * (e - I) + I + 1;
        n = b.get("zoom") - f;
        f = Gb(f, I, e);
        d.set("zoom", f)
    });
    k.addListener("dragend",
    function() {
        Pb(a, "grab");
        0 > n ? f = Math.ceil(f) : f = Math.floor(f);
        d.zoomTo(f)
    });
    return a
};
n.createTips = function() {
    return E()
};
n.updateTips = function() {
    var a = this.get("minZoom"),
    b = this.get("maxZoom"),
    c = this.get("zoomTips") || ua.Navigation.zoomTips,
    n = 1 === this.ctrlType ? "left": "right",
    f = this.tips;
    if (f) {
        hb(f);
        var d = this,
        k;
        for (k in c) if (k >= a && k <= b) {
            var I = X[n],
            f = E();
            f.style.cssText = "position:absolute;overflow:hidden;padding-left:" + ("left" == n ? "2px": "9px") + ";";
            u(f, I[2], I[3]);
            g(f, ra, I);
            var I = 8 == Q ? "1px": "",
            e = E("span");
            e.style.cssText = "position:absolute;color:#fff;_line-height:16px;*line-height:14px;font-family: Simsun;font-size: 12px;font-style: normal;font-variant: normal;font-weight: normal;top:" + I;
            e.innerHTML = c[k];
            f.appendChild(e);
            "right" === n ? f.style.left = "43px": f.style.left = "-8px";
            f.style.bottom = 6 * (k - a) - 3 + "px";
            this.tips.appendChild(f);
            N.addDomListener(f, "click",
            function(a) {
                return function() {
                    d.get("map").zoomTo(a)
                }
            } (k))
        }
    }
};
n.setHeat = function(a) {
    for (var a = (a - (this.slideStart - 0)) / 6, a = 0 < a ? Math.floor(a) : 0, b = v("div", this.heat, !0), c = 0, f = b.length; c < f; c++) c <= a + 1 ? b[c] && (b[c].style.visibility = "hidden") : b[c] && (b[c].style.visibility = "visible")
};
n.clickRuler = function(a) {
    var a = rc(a),
    b = sc(this.ruler),
    a = (1 - (a[1] - b[1]) / (b[3] - 9)) * (this.get("maxZoom") - this.get("minZoom")) + this.get("minZoom") + 1;
    this.get("map").zoomTo(Math.round(a))
};
n.operate = function(a) {
    var b = this;
    return function() {
        var c = b.get("map");
        if (c) {
            var f = Math.round(c.get("viewHeight") / 3),
            n = Math.round(c.get("viewWidth") / 3),
            d = null;
            switch (a) {
            case 4:
                c.zoomBy(1);
                break;
            case 5:
                c.zoomBy( - 1);
                break;
            case 0:
                d = [0, f];
                break;
            case 1:
                d = [0, -f];
                break;
            case 2:
                d = [n, 0];
                break;
            case 3:
                d = [ - n, 0]
            }
            d && c.panBy(d[0], d[1])
        }
    }
};
var I;
n.toggleTips = function(a) {
    var b = this.tips;
    return function() {
        I && (window.clearTimeout(I), I = null);
        "none" === a ? I = setTimeout(function() {
            b.style.display = a;
            I = null
        },
        2e3) : b.style.display = a
    }
};
B.$setExports(b)
// JavaScript Document
