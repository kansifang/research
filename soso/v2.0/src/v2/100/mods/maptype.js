function b(a) {
    c.call(this, a)
}
var c = a;
e(b, c);
var d = b.prototype;
d.init = function() {
    var a = ga("div");
    a.style.cssText = "cursor:pointer;";
    this.set("content", a)
};
d.draw = function() {
    if (this.get("map")) {
        var a = this.get("content");
        hb(a);
        for (var b = this.getStyleDoms(), c = 0; c < b.length; c++) a.appendChild(b[c])
    }
};
d.mapTypeIds_changed = function() {
    this.redraw()
};
d.bindKeys = function() {
    this.bindTo("mapTypeId", this.get("map"));
    this.bindTo("mapTypeIds", this.getModel())
};
d.unbindKeys = function() {
    this.unbind("mapTypeIds");
    this.unbind("mapTypeId")
};
d.getStyleDoms = function(a) {
    switch (a) {
    case 1:
        break;
    case 3:
        break;
    default:
        return this.createMenuTypeStyle()
    }
};
d.addDivLayers = function(a, b) {
    for (var c = this.get("map"), d = a.layers.length, e = 0; e < a.layers.length; e++) {
        var g = a.layers[e];
        if (!g.get("baseLayer") && 1 < d) {
            var l = ga("div", b);
            l.style.cssText = "font-size:13px;padding:3px 8px 1px 1px;_padding-right:2px;;background-color: white;font-family: Arial, sans-serif;line-height:18px;font-size:13px;width:46px";
            l.title = g.get("alt");
            var f = Qb(),
            k = c.get("mapType").fullLoad,
            C = k ? "checked": "",
            s = "top";
            Q && (s = 6 < Q ? "baseline": "middle");
            k ? g.set("map", c) : g.set("map", null);
            l.innerHTML = "<input id=" + f + " " + C + ' style = "cursor: pointer;" type="checkbox"/><label for=' + f + ' style="color:#333;vertical-align: ' + s + ';cursor: pointer;">' + g.get("name") + "</label>"; (function(a, b) {
                p.addDomListener(l, "click",
                function() {
                    document.getElementById(b).checked ? a.set("map", c) : a.set("map", null)
                })
            })(g, f)
        }
    }
};
d.createMenuTypeStyle = function() {
    for (var a = this.get("map"), b = this.get("mapTypeIds"), c = {},
    d = [], e, g = [], l = 0, f = b.length; l < f; l++) {
        var k = b[l],
        C = a.mapTypes.get(k);
        if (1 < f && k == Aa.HYBRID) e = C;
        else {
            var s = ga("div");
            s.style.cssText = "float:left;";
            var z = 0 < l ? "border-left:0px": "",
            A = Q ? "1px": "0px",
            y = ga("div");
            y.style.cssText = "color: #333;font-size:13px;border:1px solid #717B87;padding:1px 6px;-webkit-box-shadow: rgba(0, 0, 0, 0.398438) 0px 2px 4px;box-shadow: rgba(0, 0, 0, 0.398438) 0px 2px 4px;background-color: white;min-width:30px;font-family: Arial, sans-serif;line-height:20px;padding-top:" + A + ";text-align:center;overflow: hidden;" + z;
            y.title = C.alt;
            y.innerHTML = C.name;
            if (a.get("mapTypeId") == k || b.toString().indexOf( - 1 < Aa.HYBRID) && a.get("mapTypeId") == Aa.HYBRID && k == Aa.SATELLITE) y.style.fontWeight = "bold",
            y.style.color = "#fff",
            y.style.backgroundColor = "#269AEA";
            d.push(y);
            s.appendChild(y);
            z = ga("div");
            z.style.cssText = "color: #333;font-size:13px;background-color:#fff;border: 1px solid #717B87;position: absolute;-webkit-box-shadow: rgba(0, 0, 0, 0.398438) 0px 2px 4px;box-shadow: rgba(0, 0, 0, 0.398438) 0px 2px 4px;text-align: left;line-height:20px;z-index:-1;display:none;top:20px;left:" + 30 * l + "px;"; (function(f, k) {
                p.addDomListener(y, "click",
                function() {
                    e && f == Aa.SATELLITE ? a.set("mapTypeId", Aa.HYBRID) : a.set("mapTypeId", f);
                    for (var l = 0; l < d.length; l++) d[l].style.color = "#333",
                    d[l].style.fontWeight = "normal";
                    this.style.color = "#fff";
                    this.style.fontWeight = "bold";
                    this.style.backgroundColor = "#269AEA";
                    for (l = 0; l < b.length; l++) {
                        var C = b[l];
                        c[C] && (c[C].style.display = "none")
                    }
                    if (c[f].childNodes.length) {
                        c[f].style.display = "";
                        for (var l = c[f].getElementsByTagName("input"), C = k.fullLoad ? "checked": "", h = 0; h < l.length; h++) l[h].checked = C
                    }
                });
                p.addDomListener(y, "mouseover",
                function() {
                    if ((a.get("mapTypeId") == f || a.get("mapTypeId") == Aa.HYBRID && f == Aa.SATELLITE) && c[f].childNodes.length) c[f].style.display = "block"
                });
                p.addDomListener(y, "mouseout",
                function() {
                    h && clearTimeout(h);
                    h = setTimeout(function() {
                        j || (c[f].style.display = "none")
                    },
                    2e3)
                })
            })(k, C);
            var m, h, j;
            p.addDomListener(z, "mouseover",
            function(a) {
                if (qc(this, a.target || a.srcElement)) j = !0,
                m && clearTimeout(m),
                this.style.display = "block"
            });
            p.addDomListener(z, "mouseout",
            function() {
                var a = this;
                j = !1;
                m = setTimeout(function() {
                    a.style.display = "none"
                },
                1e3)
            });
            s.appendChild(z);
            c[k] = z;
            this.addDivLayers(C, z);
            g.push(s)
        }
    }
    e && this.addDivLayers(e, c[Aa.SATELLITE]);
    return g
};
d.createHierarchicalStyle = function() {};
B.$setExports(b)
// JavaScript Document
