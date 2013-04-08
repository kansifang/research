function a(b) {
    b = w(b, ["baseLayer", !1, "name", D.MapType.HYBRID.name, "alt", D.MapType.HYBRID.alt, "useWebGL", !0, "useFlash", !0]);
    G.call(this, b)
}
function b(a) {
    a = F(a, ["raster", !0, "useFlash", !0, "useWebGL", !1]);
    L.call(this, a)
}
function c() {}
function d(a, b, c, e) {
    var g = a.get("viewWidth") / 2,
        A = a.get("viewHeight") / 2,
        c = c || a.get("center"),
        g = b.x - g,
        b = b.y - A,
        A = a.fromLatLngToWorldPixel(c, e);
    return a.fromWorldPixelToLatLng(new K(A.x + g, A.y + b), e)
}
function g(a, b, c, d) {
    var e = a.get("viewWidth") / 2,
        A = a.get("viewHeight") / 2,
        c = c || a.get("center"),
        b = a.fromLatLngToWorldPixel(b, d),
        a = a.fromLatLngToWorldPixel(c, d);
    return new K(e + (b.x - a.x), A + (b.y - a.y))
}
function j(a) {
    this.mapView = a;
    this.eventTracker = null;
    var b = this.enableEvents = {};
    ea(m.concat(y), function (a) {
        b[a] = 1
    })
}
function o(a) {
    E.call(this, a);
    this.mapAction = new u(this);
    this.registerMapType(a);
    this.createPanes(a);
    this.initAutoUpdateSize();
    this.mapAction.start();
    a.set("$exec", N(this._exec, this))
}
function r(a) {
    return a * a
}
function v(a) {
    return (Math.exp(a) + Math.exp(-a)) / 2
}
var w = ia,
    D = Wa,
    G = $b;
e(a, G);
a.prototype.getTileUrl = function (a, b) {
    var c = a.x,
        d = a.y,
        e = Lb(c + d, 4),
        c = Lb(c, 1 << b);
    return "http://p" + e + ".map.soso.com/sateTranTiles/" + b + "/" + (c >> 4) + "/" + (d >> 4) + "/" + c + "_" + d + ".png"
};
var F = ia,
    L = $b;
e(b, L);
b.prototype.getTileUrl = function (a, b) {
    var c = a.x,
        d = a.y,
        e = Lb(c + d, 4),
        c = Lb(c, 1 << b);
    return "http://p" + e + ".map.soso.com/sateTiles/" + b + "/" + (c >> 4) + "/" + (d >> 4) + "/" + c + "_" + d + ".jpg"
};
var K = x;
e(c, $);
var i = c.prototype;
i.fromContainerPixelToLatLng = function (a, b, c) {
    return d(this, a, null, b, c)
};
i.fromLatLngToContainerPixel = function (a, b) {
    return g(this, a, null, b)
};
i.fromDivPixelToLatLng = function (a, b, c) {
    var e = this.get("origin");
    return d(this, a, e, b, c)
};
i.fromLatLngToDivPixel = function (a, b) {
    var c = this.get("origin");
    return g(this, a, c, b)
};
i.fromContainerPixelToPoint = function (a) {
    var b = this.get("viewWidth"),
        c = this.get("viewHeight"),
        d = this.fromLatLngToWorldPixel(this.get("center")),
        a = new K(d.x - b / 2 + a.x, d.y - c / 2 + a.y);
    return this.fromWorldPixelToPoint(a)
};
i.fromPointToContainerPixel = function (a) {
    var b = this.get("viewWidth"),
        c = this.get("viewHeight"),
        d = this.fromLatLngToWorldPixel(this.get("center")),
        a = this.fromPointToWorldPixel(a);
    return new K(a.x - d.x + b / 2, a.y - d.y + c / 2)
};
i.fromPointToDivPixel = function (a) {
    var b = this.get("viewWidth"),
        c = this.get("viewHeight"),
        d = this.fromLatLngToWorldPixel(this.get("origin")),
        a = this.fromPointToWorldPixel(a);
    return new K(a.x - d.x + b / 2, a.y - d.y + c / 2)
};
i.fromLatLngToPoint = function (a) {
    return this.get("projection").project(a)
};
i.fromPointToLatLng = function (a) {
    return this.get("projection").unproject(a)
};
i.fromWorldPixelToPoint = function (a, b) {
    var c = this.getResolution(b);
    return new K(a.x * c, -a.y * c)
};
i.fromPointToWorldPixel = function (a, b) {
    var c = this.getResolution(b);
    return new K(a.x / c, -a.y / c)
};
i.fromWorldPixelToLatLng = function (a, b) {
    this.get("projection");
    return this.fromPointToLatLng(this.fromWorldPixelToPoint(a, b))
};
i.fromLatLngToWorldPixel = function (a, b) {
    this.get("projection");
    return this.fromPointToWorldPixel(this.fromLatLngToPoint(a), b)
};
i.getScale = function () {
    return this.get("projection").scale ||
    function (a) {
        return Math.pow(2, a)
    }
};
i.getResolution = function (a) {
    a = null == a ? this.get("zoom") : a;
    return this.get("baseResolution") / Math.pow(2, a)
};
var U = Pb,
    Z = qc,
    W = Eb,
    aa = x,
    ba = pc,
    ea = T,
    m = "mousedown mouseup click dblclick rightclick drag".split(" "),
    y = "mousemove mouseenter mouseleave mousewheel keyboard gesture".split(" ");
e(j, $);
i = j.prototype;
i.start = function () {
    this.bindsTo(["panes", "mapContainer"], this.mapView)
};
i.stop = function () {
    this.unbindAll()
};
i.panes_changed = function () {
    var a = this.maskTracker,
        b = this.get("panes");
    a && (a.clearListeners(), a = this.maskTracker = null);
    b && b.maskPane && (a = this.maskTracker = new fa(b.maskPane));
    var c = this;
    ea(m, function (b) {
        c.registerEvent(a, b, c.enableEvents[b])
    })
};
i.mapContainer_changed = function () {
    var a = this.containerTracker,
        b = this.get("mapContainer");
    a && (a.clearListeners(), a = this.containerTracker = null);
    b && (a = this.containerTracker = new fa(b));
    var c = this;
    ea(y, function (b) {
        c.registerEvent(a, b, c.enableEvents[b])
    })
};
i.registerEvent = function (a, b, c) {
    c = a && c;
    switch (b) {
    case "drag":
        this.updateDragAction(a, c);
        break;
    case "keyboard":
        this.updateKeyBoardAction(a, c);
        break;
    case "mousewheel":
        this.updateMouseWheelAction(a, c);
        break;
    case "gesture":
        this.updateGestureAction(a, c);
        break;
    case "dblclick":
        this.updateDblClickAction(a, c);
        break;
    case "mouseenter":
    case "mouseleave":
        this.updateDefaultAction(a, b, c, "mouseenter" === b ? "mouseover" : "mouseout");
        break;
    default:
        this.updateDefaultAction(a, b, c)
    }
};
i.updateDragAction = function (a, b) {
    function c(a) {
        U(i, j.get("draggingCursor"), "move");
        h = j.getMouseContainerPixel(a);
        j.getPointAt(h);
        l = ba();
        m = new aa(0, 0);
        j.triggerMapsEvent("dragstart", a)
    }
    function d(a) {
        var b = j.getMouseContainerPixel(a),
            c = ba(),
            f = c - l;
        f && (m = new aa((b.x - h.x) / f, (b.y - h.y) / f));
        h = b;
        l = c;
        b = a.delta;
        j.panBy(b.x, b.y, !0);
        j.triggerMapsEvent("dragging", a)
    }
    function e(a) {
        U(i, j.get("draggableCursor"), "default");
        if (60 >= ba() - l) {
            var b = Math.sqrt(m.x * m.x + m.y * m.y);
            b ? j.panByFunc(new aa(m.x / b, m.y / b), x(b), Math.atan(Math.sqrt(p / o) * b) / Math.sqrt(p * o)) : j.resetOriginPosition()
        } else j.resetOriginPosition();
        j.triggerMapsEvent("dragend", a)
    }
    var g = this.dragListeners;
    g ? this.removeListeners(g) : g = this.dragListeners = [];
    if (b) {
        var j = this.mapView,
            i = j.get("mapContainer"),
            h, l, m, p = .003,
            o = 6e-4;
        a.addListener("mousedown", function (a) {
            W(a)
        });
        g.push(a.addListener("dragstart", c));
        g.push(a.addListener("dragging", d));
        g.push(a.addListener("dragend", e));
        var r = function (a, b) {
            return 1 / p * Math.log(Math.abs(Math.cos(-Math.sqrt(p * o) * b + Math.atan(Math.sqrt(p / o) * a))))
        },
            x = function (a) {
                return function (b) {
                    return r(a, b) - r(a, 0)
                }
            }
    }
};
i.updateKeyBoardAction = function (a, b) {
    function c(a) {
        a = a || window.event;
        (a = Z(i, a.srcElement || a.target)) && j._stopPan();
        l = a
    }
    function d(a) {
        if (l) {
            var b = [h[0], h[1]],
                c = !0;
            switch (a.keyCode || a.which || a.charCode) {
            case 33:
                j.panBy(0, j.get("viewHeight") / 2);
                break;
            case 34:
                j.panBy(0, -j.get("viewHeight") / 2);
                break;
            case 37:
                b[0] = 1;
                break;
            case 38:
                b[1] = 1;
                break;
            case 39:
                b[0] = -1;
                break;
            case 40:
                b[1] = -1;
                break;
            default:
                c = !1
            }
            c && W(a);
            if (b[0] !== h[0] || b[1] !== h[1]) j.autoPan(b), h = b
        }
    }
    function e(a) {
        if (l) {
            var b = [h[0], h[1]],
                c = !0;
            switch (a.keyCode || a.which || a.charCode) {
            case 187:
            case 107:
            case 61:
                j.zoomBy(1);
                break;
            case 189:
            case 109:
                j.zoomBy(-1);
                break;
            case 38:
            case 40:
                b[1] = 0;
                break;
            case 37:
            case 39:
                b[0] = 0;
                break;
            default:
                c = !1
            }
            c && W(a);
            if (b[0] !== h[0] || b[1] !== h[1]) j.autoPan(b), h = b
        }
    }
    var g = this.keyboardListeners;
    g ? this.removeListeners(g) : g = this.keyboardListeners = [];
    if (b) {
        var j = this.mapView,
            i = j.get("mapContainer"),
            h = [0, 0],
            l = !1;
        g.push(p.addDomListener(document, "mousedown", c));
        g.push(p.addDomListener(document, "keydown", d));
        g.push(p.addDomListener(document, "keyup", e))
    }
};
i.updateMouseWheelAction = function (a, b) {
    this.mousewheelListener && (this.removeListeners(this.mousewheelListener), this.mousewheelListener = null);
    if (b) {
        var c = this.mapView,
            d = null;
        this.mousewheelListener = a.addListener("mousewheel", function (a) {
            W(a);
            var b = c.getMouseContainerPixel(a),
                f = a.delta;
            d && clearTimeout(d);
            d = setTimeout(function () {
                c.zoomBy(f, b)
            }, 10)
        })
    }
};
i.updateGestureAction = function (a, b) {
    function c(a, b) {
        a.preventDefault();
        var d = g.get("zoom");
        g.set("targetZoom", d);
        var d = d + a.scale,
            f = e.getMouseContainerPixel(a, b);
        e.zoomTo(d, f)
    }
    var d = this.gestureListeners;
    d ? this.removeListeners(d) : d = this.gestureListeners = [];
    if (b) {
        var e = this.mapView,
            g = e.getModel();
        d.push(a.addListener("gesturechange", c))
    }
};
i.updateDblClickAction = function (a, b) {
    this.dblclickListener && (this.removeListeners(this.dblclickListener), this.dblclickListener = null);
    if (b) {
        var c = this.mapView;
        this.dblclickListener = a.addListener("dblclick", function (a) {
            var b = c.getMouseContainerPixel(a);
            c.zoomBy(1, b);
            c.triggerMapsEvent("dblclick", a)
        })
    }
};
i.updateDefaultAction = function (a, b, c, d) {
    var e = b + "Listener";
    this[e] && (this.removeListeners(this[e]), this[e] = null);
    if (c) {
        var g = this.mapView;
        this[e] = a.addListener(b, function (a) {
            g.triggerMapsEvent(d || b, a)
        })
    }
};
i.removeListeners = function (a) {
    if (Fb(a)) for (var b; b = a.pop();) b.remove();
    else a && a.remove()
};
i.setActionEnable = function (a, b) {
    this.enableEvents[a] = b;
    this.registerEvent(lc(m, a) ? this.maskTracker : this.containerTracker, a, b)
};
var E = xa,
    na = function (a) {
        for (var b = "mapPane overlayLayer overlayShadow overlayImage floatShadow maskPane overlayMouseTarget floatPane".split(" "), c = 0, d = b.length; c < d; c++) {
            var e = b[c],
                g = ga("div", a);
            g.style.cssText = "position:absolute;left:0;top:0;margin-left:0;margin-top:0";
            if ("floatPane" === e || "overlayMouseTarget" === e) g.style.cursor = "default";
            "maskPane" === e && (g.style.backgroundImage = "url(about:blank)", g.style.backgroundColor = "transparent", g.className = "smnoprint");
            ("overlayMouseTarget" === e || "maskPane" === e) && Sa(g);
            Ia(g, "z-index", 100 + c);
            this[e] = g
        }
    },
    u = j,
    i = function (a, b, c, d) {
        return c * (1 - Math.pow(1 - a / d, 4)) + b
    },
    N = Cb,
    M = 6 === Q ? 300 : 750,
    R = 6 === Q ? za : i;
e(o, E);
i = o.prototype;
i.initAutoUpdateSize = function () {
    function a() {
        b.notifyResize();
        setTimeout(a, 128)
    }
    var b = this.getModel();
    a()
};
i.registerMapType = function (c) {
    var d = new $b,
        e = new b,
        g = new a,
        c = c.mapTypes;
    c.set(Aa.ROADMAP, new Dc({
        name: Wa.MapType.ROADMAP.name,
        alt: Wa.MapType.ROADMAP.alt,
        layers: [d],
        system: !0
    }));
    c.set(Aa.SATELLITE, new Dc({
        name: Wa.MapType.SATELLITE.name,
        alt: Wa.MapType.SATELLITE.alt,
        layers: [e],
        system: !0
    }));
    c.set(Aa.HYBRID, new Dc({
        name: Wa.MapType.HYBRID.name,
        alt: Wa.MapType.HYBRID.alt,
        layers: [e, g],
        fullLoad: !0,
        system: !0
    }))
};
i.createPanes = function (a) {
    if (Q) {
        p.addDomListener(window, "unload", p.unload);
        try {
            document.execCommand("BackgroundImageCache", !1, !0)
        } catch (b) {}
    }
    var c = a.getContainer(),
        d = ga("div", c, null, "position:relative;height:100%;width:100%;overflow:hidden;");
    d.style.background = a.get("backgroundColor") || "url(" + Ea + "background.png)";
    this.set("mapContainer", d);
    d = ga("div", d, null, "position:absolute;left:50%;top:50%;overflow:visible;");
    this.set("centerContainer", d);
    a = ga("div", d, null, "position:absolute;left:0;top:0;z-index:0;");
    d = ga("div", d, 0, "position:absolute;left:0;top:0;z-index:0;");
    this.set("paneContainer", d);
    var e = new na(d);
    e.tilePane = a;
    var g = this;
    pd(function () {
        g.set("panes", e);
        g.bindKeys();
        g.initControl()
    });
    p.addDomListener(c, "contextmenu", Eb);
    this.registerEvents()
};
i.initControl = function () {
    var a = this.getModel(),
        b = a.get("__hideLogo__");
    if (!b) {
        var c = document.createElement("div");
        oc(c, Ea + "logo.png");
        c.style.cssText = "position:absolute;width:80px;bottom:16px;line-height:16px;cursor:pointer";
        c.title = Wa.Coryright.home;
        var d = document.createElement("a");
        d.target = "_blank";
        d.style.cssText = "";
        d.href = "http://map.soso.com";
        d.appendChild(c);
        new Pa({
            margin: new la(0, 0),
            map: a,
            align: 6,
            content: d
        })
    }
    a.get("__hideCopyRight__") || new dd({
        margin: new la(b ? 0 : 82, 0),
        map: a,
        align: 6
    })
};
i.setDefaultUI = function () {
    this.mapTypeCtrl = new Ac;
    this.zoomHintCtrl = new xc;
    this.navigationCtrl = new zc;
    this.scaleCtrl = new yc
};
i.removeDefaultUI = function () {
    !this.get("mapTypeControl") && this.mapTypeCtrl && this.mapTypeCtrl.set("map", null);
    !this.get("zoomHintControl") && this.zoomHintCtrl && this.zoomHintCtrl.set("map", null);
    !this.get("navigationControl") && this.navigationCtrl && this.navigationCtrl.set("map", null);
    !this.get("scaleControl") && this.scaleCtrl && this.scaleCtrl.set("map", null)
};
i.bindKeys = function () {
    var a = this.getModel();
    this.bindTo("viewWidth", a);
    this.bindTo("viewHeight", a);
    a.bindsTo(["mapContainer", "paneContainer", "panes"], this);
    this.set("origin", a.get("center"));
    a.bindTo("origin", this);
    a.bindTo("originPosition", this);
    a.bindTo("targetZoom", this);
    a.bindTo("status", this);
    var b = new c(a);
    b.bindsTo(["center", "viewWidth", "viewHeight", "zoom", "origin"], this);
    b.bindTo("projection", a);
    b.bindTo("baseResolution", a);
    this.mapCanvasProjection = b;
    this.bindTo("center", a);
    this.bindTo("zoom", a);
    this.bindTo("minZoom", a);
    this.bindTo("maxZoom", a);
    this.bindTo("mapTypeId", a);
    this.bindTo("mapType", a);
    this.setOriginPosition([0, 0]);
    this.bindTo("boundary", a);
    this.bindTo("draggableCursor", a);
    this.bindTo("draggingCursor", a);
    this.bindTo("scrollwheel", a);
    this.bindTo("disableDoubleClickZoom", a);
    this.bindTo("draggable", a);
    this.bindTo("keyboardShortcuts", a);
    this.bindTo("zoomHintControl", a);
    this.bindTo("mapTypeControl", a);
    this.bindTo("mapTypeControlOptions", a);
    this.bindTo("navigationControl", a);
    this.bindTo("navigationControlOptions", a);
    this.bindTo("scaleControl", a);
    this.bindTo("scaleControlOptions", a);
    this.bindTo("disableDefaultUI", a)
};
i.registerEvents = function () {
    p.bind(this.getModel(), "dragstart", this._handleDragStart, this)
};
i._handleDragStart = function () {
    this._panFx && (this._panFx.stop(), this._panFx = null)
};
i.setOriginPosition = function (a) {
    var b = this.get("paneContainer"),
        c = this.get("panes").maskPane,
        d = Math.round(-a[0] - this.get("viewWidth") / 2),
        e = Math.round(-a[1] - this.get("viewHeight") / 2);
    ca(c, a[0], a[1]);
    ca(b, d, e);
    this.notifyOverlayRedraw(a[0], a[1]);
    this.set("originPosition", a)
};
i.notifyOverlayRedraw = function (a, b) {
    var c = this.get("center"),
        d = this.getModel(),
        e = d.get("mapCanvasProjection"),
        g = this.getDrawPixelBounds();
    d.set("drawPixelBounds", g);
    var c = e.fromLatLngToWorldPixel(c),
        j = this.lastDrawPixelBounds;
    if (this.lastCenterPixel) {
        var d = Math.abs(a),
            e = Math.abs(b),
            i = Math.abs(g.maxX - g.minX) / 2,
            h = Math.abs(g.maxY - g.minY) / 2,
            l = Math.abs(j.maxX - j.minX) / 2,
            j = Math.abs(j.maxY - j.minY) / 2;
        if (d > i / 1.5 || e > h / 1.5 || i != l || h != j) this.lastCenterPixel = c, this.lastDrawPixelBounds = g, this.resetOriginPosition(!0, !0)
    } else this.lastCenterPixel = c, this.lastDrawPixelBounds = g
};
i.resetOriginPosition = function (a, b) {
    !b && this.set("status", 0);
    if (a) {
        var c = this.getModel();
        this.set("origin", this.get("center"));
        this.setOriginPosition([0, 0]);
        var d = this.getDrawPixelBounds();
        c.set("drawPixelBounds", d);
        c.notify("overlayRedraw")
    }
};
i.getDrawPixelBounds = function () {
    var a = this.getModel().get("mapCanvasProjection"),
        b = this.get("center"),
        c = 1.5 * this.get("viewWidth"),
        d = 1.5 * this.get("viewHeight"),
        a = a.fromLatLngToDivPixel(b);
    return new sa(a.x - c, a.y - d, a.x + c, a.y + d)
};
i.mapTypeId_changed = function () {
    var a = this.getModel(),
        b = this.get("mapTypeId"),
        b = a.mapTypes.get(b),
        c = this.get("mapType");
    if (b && b != c) {
        var d, e, g;
        if (c) {
            d = 0;
            for (e = c.layers.length; d < e; d++) g = c.layers[d], g.set("map", null)
        }
        a.set("mapType", b);
        if (b) {
            a.set("projection", b.projection || new wc);
            a.set("baseResolution", b.baseResolution);
            a.set("mapCanvasProjection", this.mapCanvasProjection);
            this.set("mapTypeMinZoom", b.minZoom | 0);
            this.set("mapTypeMaxZoom", null != b.maxZoom ? b.maxZoom : Infinity);
            this.updateBounds();
            d = 0;
            for (e = b.layers.length; d < e; d++) g = b.layers[d], (b.fullLoad || g.get("baseLayer")) && g.set("map", a);
            this.resetOriginPosition()
        }
    }
};
i.changed = function (a) {
    var b = this.get(a),
        c = this.get("panes"),
        d = this.get("disableDefaultUI"),
        d = b || !d,
        e = this.getModel();
    switch (a) {
    case "draggableCursor":
        a = this.get("mapContainer");
        Pb(a, b);
        break;
    case "viewWidth":
    case "viewHeight":
        if (c = c.maskPane) if ("viewWidth" == a && (c.style.width = b + "px"), "viewHeight" == a) c.style.height = b + "px";
        if ((b = this.get("mapContainer")) && 6 === Q) b = b.style, b.zoom = "100%", b.zoom = "";
        this.set("status", 1);
        this.updateBounds();
        this.redraw();
        break;
    case "disableDoubleClickZoom":
        this.mapAction.setActionEnable("dblclick", !b);
        break;
    case "scrollwheel":
        this.mapAction.setActionEnable("mousewheel", b);
        break;
    case "draggable":
        this.mapAction.setActionEnable("drag", b);
        break;
    case "keyboardShortcuts":
        this.mapAction.setActionEnable("keyboard", b);
        break;
    case "minZoom":
    case "maxZoom":
        this.set("zoom", this.clampZoom(this.get("zoom")));
        break;
    case "zoom":
    case "center":
        "zoom" === a ? (b = this.clampZoom(this.get("zoom")), this.get("zoom") !== b && this.set("zoom", b), this.set("status", 2)) : (this.get("targetZoom") || this.set("status", 1), (b = this.get("boundary")) && this.set("center", this.clampCenter(b)));
        this.updateBounds();
        this.redraw();
        break;
    case "disableDefaultUI":
        b ? this.removeDefaultUI() : this.setDefaultUI();
        break;
    case "mapTypeControl":
        this.mapTypeCtrl ? this.mapTypeCtrl.set("map", d ? e : null) : (void 0 == b || b) && (this.mapTypeCtrl = new Ac({
            map: e
        }));
        break;
    case "mapTypeControlOptions":
        b && this.mapTypeCtrl && this.mapTypeCtrl.setOptions(this.get("mapTypeControlOptions"));
        break;
    case "navigationControl":
        this.navigationCtrl ? this.navigationCtrl.set("map", d ? e : null) : (void 0 == b || b) && (this.navigationCtrl = new zc({
            map: e
        }));
        break;
    case "navigationControlOptions":
        b && this.navigationCtrl && this.navigationCtrl.setOptions(this.get("navigationControlOptions"));
        break;
    case "scaleControl":
        this.scaleCtrl ? this.scaleCtrl.set("map", d ? e : null) : (void 0 == b || b) && (this.scaleCtrl = new yc({
            map: e
        }));
        break;
    case "scaleControlOptions":
        b && this.scaleCtrl && this.scaleCtrl.setOptions(this.get("scaleControlOptions"));
        break;
    case "zoomHintControl":
        this.zoomHintCtrl ? this.zoomHintCtrl.set("map", d ? e : null) : (void 0 == b || b) && (this.zoomHintCtrl = new xc({
            map: e
        }))
    }
};
i.status_changed = function () {
    0 === this.get("status") && this.triggerMapsEvent("idle")
};
i.draw = function () {
    this.get("zoom");
    var a = this.getModel().get("mapCanvasProjection");
    if (a) {
        var b = a.fromLatLngToWorldPixel(this.get("origin")),
            c = a.fromLatLngToWorldPixel(this.get("center")),
            a = Math.floor(c.x - b.x),
            b = Math.floor(c.y - b.y),
            c = this.get("status");
        this.setOriginPosition([a, b]);
        2 === c && this.resetOriginPosition(!0, !0)
    }
};
i.updateBounds = function () {
    var a = this.getModel(),
        b = a.get("mapCanvasProjection");
    if (b) {
        var c = b.fromContainerPixelToPoint(new x(0, this.get("viewHeight"))),
            b = b.fromContainerPixelToPoint(new x(this.get("viewWidth"), 0)),
            c = new sa(c.x, c.y, b.x, b.y);
        a.set("bounds", a.get("projection").unprojectBounds(c))
    }
};
i.setPointAt = function (a, b) {
    var c = this.getModel().get("mapCanvasProjection").fromPointToContainerPixel(a);
    this.panBy(b.x - c.x, b.y - c.y, !0)
};
i.getPointAt = function (a) {
    return this.getModel().get("mapCanvasProjection").fromContainerPixelToPoint(a)
};
i.panBy = function (a, b, c) {
    if (!(0 === a && 0 === b)) {
        var d = this.getModel(),
            e = d.get("mapCanvasProjection"),
            d = e.fromLatLngToWorldPixel(d.get("center")),
            e = e.fromWorldPixelToLatLng(new x(d.x - a, d.y - b));
        if (c) this.set("center", e);
        else {
            var g = Math.sqrt(a * a + b * b);
            this.panByFunc(new x(a / g, b / g), function (a) {
                return g * a / 380
            }, 380)
        }
    }
};
i._stopPan = function () {
    this._panFx && (this._panFx.stop(!0), this._panFx = null)
};
i.panByFunc = function (a, b, c) {
    var d = a.x,
        e = a.y;
    if (!(0 === d && 0 === e)) {
        var g = this;
        g._stopPan();
        var j = new ma;
        g._panFx = j;
        j.duration = c;
        j._passedOffsetX = 0;
        j._passedOffsetY = 0;
        j.onEnterFrame = function (a) {
            var c = b(a),
                a = Math.round(c * d - j._passedOffsetX),
                c = Math.round(c * e - j._passedOffsetY);
            j._passedOffsetX += a;
            j._passedOffsetY += c;
            g.panBy(a, c, !0)
        };
        j.onEnd = function () {
            g.resetOriginPosition()
        };
        j.start()
    }
};
i.panTo = function (a) {
    var b = this.get("center");
    if (!a.equals(b)) {
        var c = this.getModel(),
            d = c.get("mapCanvasProjection"),
            b = d.fromLatLngToPoint(b),
            a = d.fromLatLngToPoint(a);
        this._stopPan();
        var e = new ma;
        this._panFx = e;
        e.duration = 380;
        e.precision = .01;
        e.begins = [b.x, b.y];
        e.ends = [a.x, a.y];
        e.onUpdate = function (a) {
            c.set("center", d.fromPointToLatLng(new x(a[0], a[1])))
        };
        var g = this;
        e.onEnd = function () {
            g.resetOriginPosition()
        };
        e.start()
    }
};
i.zoomBy = function (a, b, c) {
    if (0 !== a) {
        var d = this.get("zoom"),
            e = this.get("targetZoom"),
            e = null != e && e > d === 0 <= a ? e + a : d + a;
        c || (e = Math.round(e));
        this.zoomTo(e, b)
    }
};
i._stopZoom = function () {
    this._zoomFx && (this._zoomFx.stop(!0), this._zoomFx = null)
};
i.clampCenter = function (a) {
    var b = this.get("center"),
        c = this.getModel().get("mapCanvasProjection"),
        d = this.get("viewWidth"),
        e = this.get("viewHeight"),
        g = c.fromLatLngToContainerPixel(a.getNorthEast()),
        a = c.fromLatLngToContainerPixel(a.getSouthWest()),
        j = c.fromLatLngToContainerPixel(b),
        b = j.getX(),
        j = j.getY(),
        i = g.getX(),
        g = g.getY(),
        h = a.getX(),
        a = a.getY(),
        d = Math.abs(i - h) > d ? Math.min(Math.max(b, h + d / 2), i - d / 2) : (i + h) / 2,
        e = Math.abs(a - g) > e ? Math.min(Math.max(j, g + e / 2), a - e / 2) : (g + a) / 2;
    return c.fromContainerPixelToLatLng(new x(d, e))
};
i.clampZoom = function (a) {
    var b = this.getModel(),
        c = b.get("minZoom");
    "number" === typeof c && !isNaN(c) && (a = Math.max(c, a));
    b = b.get("maxZoom");
    "number" === typeof b && !isNaN(b) && (a = Math.min(b, a));
    b = this.get("mapTypeMinZoom");
    null != b && (a = Math.max(b, a));
    b = this.get("mapTypeMaxZoom");
    null != b && (a = Math.min(b, a));
    return a
};
i.zoomTo = function (a, b, c, d) {
    var e = this.getModel(),
        a = this.clampZoom(a);
    if (d) this.set("zoom", a);
    else {
        var g = this,
            j = e.get("mapCanvasProjection"),
            i = e.get("zoom");
        this._stopZoom();
        this._zoomFx = d = new ma;
        e.set("_zoomFx", d);
        d.precision = .02;
        d.duration = M;
        d.begins = [i];
        d.ends = [a];
        d.transition = R;
        this.set("targetZoom", a);
        var h = !b ? null : j.fromContainerPixelToPoint(b);
        h && c && (a = j.fromPointToContainerPixel(h), b = e.get("viewWidth") / 2, i = e.get("viewHeight") / 2, d.begins.push(a.x, a.y), d.ends.push(b, i));
        d.onUpdate = function (a) {
            var b = a[0],
                d;
            h && (d = c ? new x(a[1], a[2]) : j.fromPointToContainerPixel(h));
            g.set("zoom", b);
            h && (g.setPointAt(h, d), e.set("focusPixel", d))
        };
        d.onEnd = function () {
            g.set("targetZoom", null);
            g.resetOriginPosition();
            e.set("focusPixel", null);
            g.triggerMapsEvent("zoomend")
        };
        d.start()
    }
};
i.autoPan = function (a) {
    for (var b = this, c = b._autoPanSpeed || a, d = 0; d < a.length; d++) {
        var e = a[d];
        0 === e && (c[d] = 0);
        0 >= c[d] / e && (c[d] = e)
    }
    b.autoPanTimer || (b.autoPanTimer = setInterval(function () {
        var c = b._autoPanSpeed || a;
        if (0 === c[0] && 0 === c[1]) clearInterval(b.autoPanTimer), delete b.autoPanTimer;
        else {
            var d = 0 != c[0] ? Math.abs(c[0]) / c[0] : 0,
                e = 0 != c[1] ? Math.abs(c[1]) / c[1] : 0;
            c[0] += 1 * d;
            c[1] += 1 * e;
            50 < Math.abs(c[0]) && (c[0] = 50 * d);
            50 < Math.abs(c[1]) && (c[1] = 50 * e)
        }
        b._autoPanSpeed = c;
        b.panBy(c[0], c[1], !0)
    }, 20))
};
i.flyTo = function (a, b) {
    function c(a) {
        return (y * y - o * o + (a ? -1 : 1) * Math.pow(g, 4) * (B - u) * (B - u)) / (2 * (a ? y : o) * g * g * (B - u))
    }
    var d = this,
        e = this.getModel();
    null == a && (a = e.get("center"));
    null == b ? b = e.get("zoom") : d.set("targetZoom", b);
    var g = 1.42,
        j = e.get("mapCanvasProjection"),
        i = j.fromLatLngToPoint(e.get("center")),
        h = j.fromLatLngToPoint(a),
        l = e.get("zoom"),
        m = l - b,
        p = j.fromContainerPixelToPoint(new x(0, 0)),
        e = j.fromContainerPixelToPoint(new x(e.get("viewWidth"), e.get("viewHeight"))),
        o = Math.max(Math.abs(e.x - p.x), Math.abs(e.y - p.y)),
        y = o * Math.pow(2, m),
        u = 0,
        B = Math.sqrt((h.x - i.x) * (h.x - i.x) + (h.y - i.y) * (h.y - i.y)),
        w = Math.log(-c(0) + Math.sqrt(r(c(0)) + 1)),
        D = (Math.log(-c(1) + Math.sqrt(r(c(1)) + 1)) - w) / g,
        H = function (a) {
            return o * v(w) / v(g * a + w)
        },
        G = function (a) {
            return o / (g * g) * v(w) * ((Math.exp(g * a + w) - Math.exp(-(g * a + w))) / 2 / v(g * a + w)) - o / (g * g) * ((Math.exp(w) - Math.exp(-w)) / 2) + u
        };
    if (1e-6 > B) {
        if (1e-6 > Math.abs(o - y)) return;
        var F = 0 > m ? -1 : 1,
            D = Math.abs(Math.log(y / o)) / g,
            G = function () {
                return u
            },
            H = function (a) {
                return o * Math.exp(F * g * a)
            }
    }
    var E = d._zoomFx;
    E && E.stop();
    E = new ma;
    d._zoomFx = E;
    E.duration = 1e3 * (D / .9);
    E.onEnterFrame = function (c) {
        if (c >= E.duration) d.set("center", a), d.set("zoom", b);
        else {
            var c = c / E.duration * D,
                e = G(c) / B,
                e = isNaN(e) ? 1 : e,
                e = new x(0 === e ? i.x : 1 === e ? h.x : i.x + (h.x - i.x) * e, 0 === e ? i.y : 1 === e ? h.y : i.y + (h.y - i.y) * e),
                c = l + Math.log(o / H(c)) / Math.LN2;
            d.set("center", j.fromPointToLatLng(e));
            d.set("zoom", c)
        }
    };
    E.onEnd = function () {
        d.resetOriginPosition();
        d.set("targetZoom", null)
    };
    E.start()
};
i._getFitZoom = function (a, b) {
    var c = a.getSouthWest(),
        d = a.getNorthEast(),
        e = this.getModel().get("mapCanvasProjection"),
        g = this.get("viewWidth"),
        j = this.get("viewHeight");
    b && (g -= b.width, j -= b.height);
    for (var i = Ue; 0 <= i; i--) {
        var h = e.fromLatLngToWorldPixel(d, i),
            l = e.fromLatLngToWorldPixel(c, i),
            m = Math.abs(h.x - l.x),
            h = Math.abs(l.y - h.y);
        if (m <= g + 1 && h <= j + 1) break
    }
    return this.clampZoom(i)
};
i.fitBounds = function (a, b, c) {
    var c = c || {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },
        d = (parseInt(c.left) || 0) + (parseInt(c.right) || 0),
        e = (parseInt(c.top) || 0) + (parseInt(c.bottom) || 0),
        g = d / 2,
        j = e / 2,
        b = b || this._getFitZoom(a, new la(d, e));
    this.set("zoom", b);
    d = a.getCenter();
    a = this.getModel().get("mapCanvasProjection");
    d = a.fromLatLngToContainerPixel(d, b);
    d.x = d.x + g - parseInt(c.left);
    d.y = d.y + j - parseInt(c.top);
    d = a.fromContainerPixelToLatLng(d, b);
    this.set("center", d)
};
var l = {};
l.panTo = i.panTo;
l.flyTo = i.flyTo;
l.panBy = i.panBy;
l.zoomBy = i.zoomBy;
l.zoomTo = i.zoomTo;
l.fitBounds = i.fitBounds;
i._disptbl = l;
i._exec = function (a, b) {
    this._disptbl[a].apply(this, b)
};
B.$setExports(o)