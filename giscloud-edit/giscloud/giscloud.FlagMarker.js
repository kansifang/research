
(function (e, g, c, h) {
    var a, f = new giscloud.Color(255, 180, 0);
    giscloud.FlagMarker = function (n, u, o, m) {
        var r = u || "",
            v = o || "",
            k = (m && m instanceof giscloud.Color) ? m : f,
            t = (n && n instanceof giscloud.LonLat) ? n : null,
            j = true,
            q = function () {
                var y, x = this.sig,
                    w;
                w = c.markers && c.markers[x];
                if (x && w) {
                    y = w.id;
                    if (y !== h && y !== null) {
                        w.m.remove(y)
                    }
                    if (j && t) {
                        w.id = w.m.add(t.lon, t.lat, k.hex("0x"), r, v, null, w.initiallyExtended)
                    } else {
                        w.id = null
                    }
                }
            };
        this.title = function () {
            var w;
            if (arguments.length > 0) {
                r = arguments[0];
                if (this.sig) {
                    w = c.markers[this.sig].id;
                    if (w) {
                        c.markers[this.sig].m.setTitle(w, r)
                    }
                }
                return this
            } else {
                return r
            }
        };
        this.content = function () {
            var w;
            if (arguments.length > 0) {
                v = arguments[0];
                if (this.sig) {
                    w = c.markers[this.sig].id;
                    if (w) {
                        c.markers[this.sig].m.setContent(w, v)
                    }
                }
                return this
            } else {
                return v
            }
        };
        this.color = function () {
            var w = arguments[0];
            if (arguments.length > 0) {
                if (w && w instanceof giscloud.Color && !w.equals(k)) {
                    k = (w) ? w : f;
                    q.call(this)
                }
                return this
            } else {
                return k
            }
        };
        this.visible = function (w) {
            if (arguments.length > 0) {
                if (w !== j) {
                    j = !! w;
                    q.call(this)
                }
                return this
            } else {
                return j
            }
        };
        this.position = function () {
            var w = arguments[0];
            if (arguments.length > 0) {
                if (w && !w.equals(t)) {
                    t = (w instanceof giscloud.LonLat) ? w : null;
                    q.call(this)
                }
                return this
            } else {
                return t
            }
        }
    };
    giscloud.Marker = function (j, o, m, k) {
        var n;
        k = k || {};
        n = {
            location: j || null,
            title: o == null ? null : o,
            content: m == null ? null : m,
            visible: k.visible === false ? false : true,
            icon: k.icon || null,
            color: k.color || f.clone()
        };
        this.title = a(n, "title");
        this.content = a(n, "content");
        this.location = a(n, "location");
        this.visible = a(n, "visible");
        this.icon = a(n, "icon")
    };
    a = function (k, m, j) {
        return function (q, o) {
            var n;
            if (q === h) {
                return k[m]
            } else {
                if (j && !j(q)) {
                    throw {
                        msg: "Invalid value for " + (m || "???"),
                        target: this
                    }
                } else {
                    n = k[m];
                    k[m] = q;
                    if (!o) {
                        g(this).triggerHandler("stateChanged", [{
                            property: m,
                            oldValue: n,
                            newValue: q,
                            state: k
                        }])
                    }
                    return this
                }
            }
        }
    }
})(window, giscloud.exposeJQuery(), giscloud.common());