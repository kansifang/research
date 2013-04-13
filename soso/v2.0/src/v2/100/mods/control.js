function a(c) {
    b.call(this, c);
    this.bindTo("map", c)
}
var b = xa;
e(a, b);
var c = a.prototype,
d = ["mapContainer", "panes"];
c.changed = function(a) {
    var b, c, d = this.getModel();
    if ("map" !== a) {
        var e = d.get("container");
        if (d.ready && e) {
            var u = this.get(a);
            switch (a) {
            case "align":
            case "margin":
                var g = this.get("margin") || new la(0, 0),
                M = this.get("align"),
                a = e.style,
                u = d = 0;
                g && (d = g.getWidth(), u = g.getHeight());
                g = M % 3;
                M = Math.floor(M / 3);
                b = Ta(e, "width");
                c = Ta(e, "height"); - 1 === b.indexOf("px") && (b = 0); - 1 === c.indexOf("px") && (c = 0);
                b = parseInt(b) || e.offsetWidth || e.clientWidth;
                c = parseInt(c) || e.offsetHeight || e.clientHeight;
                1 === g && (a.left = Math.floor(e.parentNode.offsetWidth / 2) - d - b / 2 + "px", a.right = "");
                1 === M && (a.top = Math.floor(e.parentNode.offsetHeight / 2) - u - c / 2 + "px", a.bottom = "");
                2 === g && (a.right = d + "px", a.left = "");
                0 === g && (a.left = d + "px", a.right = "");
                0 === M && (a.top = u + "px", a.bottom = "");
                2 === M && (a.bottom = u + "px", a.top = "");
                break;
            case "content":
                "string" === typeof u ? e.innerHTML = u: u && u.parentNode != e && (hb(e), e.appendChild(u));
                d.set("width", e.offsetWidth);
                d.set("height", e.offsetHeight);
                break;
            case "visible":
                e.style.display = !0 === u ? "": "none";
                break;
            case "zIndex":
                Ia(e, "z-index", u)
            }
            this.redraw()
        }
    } else this.destroy(),
    this.get("map") && !this.constructed && this.construct()
};
c.construct = function() {
    var a = this,
    b = a.get("map"),
    c = a.getModel();
    a.constructed = !0;
    this.targetMap = b;
    a.keysReady(d,
    function() {
        if (a.constructed) {
            c.ready = !0;
            if (!c.get("container")) {
                var d = ga("div");
                d.style.position = "absolute";
                Sa(d);
                a.get("mapContainer").appendChild(d);
                c.set("container", d);
                c.bindTo("panes", b);
                c.construct()
            }
            a.bindsTo(["content", "align", "margin", "zIndex", "visible"], c);
            a.bindKeys && a.bindKeys();
            a.init && a.init();
            a.redraw()
        }
    });
    a.ready || a.bindsTo(d, b)
};
c.destroy = function() {
    if (this.targetMap) {
        var a = this.getModel();
        if (this.constructed) {
            this.constructed = !1;
            this.unbindAll(d);
            a.destroy();
            a.unbindAll(d);
            var b = a.get("container");
            b && Ma(b);
            a.set("mapContainer", null);
            a.set("container", null);
            a.set("panes", null);
            a.ready = !1
        }
    }
};
c.draw = function() {
    this.getModel().draw()
};
B.$setExports(a)