function a(b) {
    function c(a) {
        return function() {
            d.isMapDragging = a;
            d.updateHoverCursor()
        }
    }
    this.map = b;
    this.polys = new H;
    this.isEnable = !1;
    this.currentHoverShape = this.lastMousePoint = null;
    this.isMapDragging = !1;
    this.outTimer = null;
    var d = this,
    e = [];
    L.addListener(d.polys, "length_changed",
    function() {
        d.polys.get("length") ? (d.enabled(e), d.checkHover(d.lastMousePoint)) : d.disable(e)
    });
    L.addListener(b, "dragstart", c(!0));
    L.addListener(b, "dragend", c(!1))
}
function b(a) {
    this.viewModel = a;
    this.currentEventManager = null;
    this.bindTo("enableEvent", a)
}
var c = function(a) {
    var b = {
        name: a.cname,
        latLng: new D(Number(a.pointy), Number(a.pointx))
    };
    a.level && (b.level = a.level);
    var c = [];
    a.path && (T(a.path,
    function(a) {
        c.push(a.cname || "")
    }), b.detail = c.join(","));
    return b
},
d = function(a) {
    var b = {
        id: a.uid || "",
        name: a.name || "",
        latLng: new D(Number(a.pointy), Number(a.pointx))
    };
    a.addr && (b.address = a.addr);
    a.phone && (b.phone = a.phone);
    a.zip && (b.postcode = a.zip);
    if (a.classes || a.catalog) b.category = a.classes || a.catalog;
    if (a.dist || a.dis) b.dist = Number(a.dist || a.dis);
    b.type = a.poitype || 0;
    return b
},
j = function(a, b) {
    return {
        type: a,
        detail: b
    }
},
o = function(a) {
    var b = [];
    ba(a,
    function(a, c) {
        b.push(c + "=" + encodeURIComponent(a))
    });
    return b.join("&")
},
r = oa[17],
v = function(a, b, c) {
    var d = [];
    if (c) {
        for (b = b.firstChild; b;) b.tagName.toLowerCase() === a && d.push(b),
        b = b.nextSibling;
        return d
    }
    var b = (b || document).getElementsByTagName(a),
    c = -1,
    e,
    m = 0,
    y = b.length;
    if (Q && "*" === a) for (; m < y; ++m) 1 === (e = b[m]).nodeType && (d[++c] = e);
    else for (; m < y; ++m) d[m] = b[m];
    return d
},
S = e,
H = Vb,
L = p,
U = Qb(),
Z = {},
G = a.prototype;
G.add = function(a) {
    this.polys.push(a)
};
G.remove = function(a) {
    this.polys.remove(a)
};
G.addEvent = function(a, b, c, d) {
    var e = this,
    b = L.addListener(b, c,
    function() {
        d.apply(e, arguments)
    });
    a.push(b)
};
G.enabled = function(a) {
    if (!this.isEnable) {
        var b = this.map;
        this.addEvent.call(this, a, b, "mousedown", this.createEventHandler("mousedown", !0));
        this.addEvent.call(this, a, b, "mouseup", this.createEventHandler("mouseup", !0));
        this.addEvent.call(this, a, b, "click", this.createEventHandler("click", !0));
        this.addEvent.call(this, a, b, "dblclick", this.createEventHandler("dblclick", !0));
        this.addEvent.call(this, a, b, "rightclick", this.createEventHandler("rightclick", !0));
        this.addEvent.call(this, a, b, "mousemove", this.doMouseMove);
        this.addEvent.call(this, a, b, "mouseover", this.doMapIn);
        this.addEvent.call(this, a, b, "mouseout", this.doMapOut);
        this.isEnable = !0
    }
};
G.disable = function(a) {
    if (this.isEnable) for (this.isEnable = !1; a[0];) L.removeListener(a.pop())
};
G.getMouseRelativePoint = function(a) {
    return a ? this.map.get("mapCanvasProjection").fromLatLngToDivPixel(a.latLng) : this.lastMousePoint
};
G.getHoverByPoint = function(a) {
    var b = this.polys,
    c = null,
    d = null,
    e = null;
    a && b.forEach(function(b) {
        var y = null;
        if ((y = b.isMouseIn(a)) && (!c || c.get("zIndex") < b.get("zIndex"))) c = b,
        d = [y[0], y[1]],
        e = y[2]
    });
    return c ? {
        shape: c,
        point: d,
        segmentIndex: e
    }: null
};
G.createEventHandler = function(a, b) {
    var c = this;
    return function(d) {
        var e = c.getMouseRelativePoint(d);
        if (d = c.getHoverByPoint(e)) e = [d.shape, a],
        b && (e.push(d.point), e.push(d.segmentIndex)),
        c.triggerShapeEvent.apply(c, e)
    }
};
G.doMapOut = function() {
    var a = this.currentHoverShape;
    if (a) {
        var b = this;
        this.outTimer = setTimeout(function() {
            b.triggerShapeEvent(a, "mouseout");
            b.currentHoverShape === a && (b.currentHoverShape = null)
        },
        0)
    }
    this.lastMousePoint = null
};
G.doMapIn = function() {
    clearTimeout(this.outTimer);
    this.outTimer = null
};
G.doMouseMove = function(a) {
    a = this.getMouseRelativePoint(a);
    this.checkHover(a);
    this.lastMousePoint = a
};
G.checkHover = function(a) {
    if (a = this.getHoverByPoint(a)) {
        var b = a.shape;
        b !== this.currentHoverShape && (this.currentHoverShape && this.triggerShapeEvent(this.currentHoverShape, "mouseout"), this.triggerShapeEvent(b, "mouseover", a.point, a.segmentIndex), this.currentHoverShape = b);
        this.triggerShapeEvent(b, "mousemove", a.point, a.segmentIndex)
    } else this.currentHoverShape && (this.triggerShapeEvent(this.currentHoverShape, "mouseout"), this.currentHoverShape = null);
    this.updateHoverCursor()
};
G.triggerShapeEvent = function(a, b, c, d) {
    a.triggerEvent(b, c, d)
};
G.updateHoverCursor = function() {
    var a = this.currentHoverShape,
    a = a && !this.isMapDragging ? a.get("cursor") : "",
    b = this.map;
    b && (b = (b = b.get("panes")) ? b.maskPane: null) && Ta(b, "cursor") !== a && Pb(b, a)
};
a.getInstanceByMap = function(b) {
    var c = null;
    if (b) {
        var d = b[U];
        d || (d = b[U] = Qb()); (c = Z[d]) || (c = Z[d] = new a(b))
    }
    return c
};
S(b, $);
S = b.prototype;
S.enableEvent_changed = function() {
    if (this.get("enableEvent")) {
        var a = this.viewModel;
        this.bindTo("zIndex", a);
        this.bindTo("cursor", a);
        this.bindTo("map", a)
    } else this.unbind("map"),
    this.unbind("zIndex"),
    this.unbind("cursor"),
    this.set("map", null),
    this.set("zIndex", null),
    this.set("cursor", null)
};
S.map_changed = function() {
    var b = this.get("map"),
    b = a.getInstanceByMap(b),
    c = this.currentEventManager;
    c && c.remove(this);
    b && b.add(this);
    this.currentEventManager = b
};
S.isMouseIn = function(a) {
    var b = this.viewModel;
    return b && b.isMouseIn ? b.isMouseIn(a) : !1
};
S.triggerEvent = function(a, b) {
    var c = this.get("map"),
    d = null;
    c && (c = c.get("mapCanvasProjection"), b && (d = c.fromDivPixelToLatLng(new x(Math.round(b[0]), Math.round(b[1])))), this.viewModel.triggerCustomEvent(a, d))
};
var W = function(a, b) {
    var b = b || document.createElement("div"),
    a = "on" + a,
    c = a in b;
    b.setAttribute && !c && (b.setAttribute(a, "return;"), c = "function" === typeof b[a]);
    return c
},
i = null,
aa = function(a, b) {
    i || (i = W("mousewheel") ? "mousewheel": "DOMMouseScroll");
    return p.addDomListener(a, i,
    function(c) {
        var d = 0;
        c.wheelDelta ? (d = c.wheelDelta / 120, window.opera && 10 > window.opera.version() && (d = -d)) : c.detail && (d = -c.detail / 3);
        c.delta = Math.round(d);
        b.call(a, c)
    })
};
// JavaScript Document
