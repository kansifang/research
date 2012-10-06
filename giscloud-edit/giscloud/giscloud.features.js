(function (c, e, a, f) {
    giscloud.features = {
        byLayer: function (g, j, m) {
            var h = "layers/" + g + "/features",
                k = new e.Deferred();
            j = j || {};
            if (typeof j === "function") {
                m = j;
                j = null
            } else {
                m = m || j.callback
            }
            a.rest.get(h, j).done(function () {
                var n = arguments[0],
                    o = [];
                try {
                    e.each(n.data, function () {
                        this.layerId = g;
                        o.push(new giscloud.Feature(this))
                    });
                    if (typeof m == "function") {
                        m(o)
                    }
                    k.resolve(o)
                } catch (q) {
                    k.reject()
                }
            }).fail(function () {
                k.reject()
            });
            return k.promise()
        },
        byId: function (g, m, j, n) {
            var h = "layers/" + g + "/features/" + m,
                k = new e.Deferred();
            j = j || {};
            if (typeof j === "function") {
                n = j;
                j = null
            } else {
                n = n || j.callback
            }
            a.rest.get(h, j).done(function () {
                var r = arguments[0],
                    o;
                r.layerId = g;
                try {
                    o = new giscloud.Feature(r);
                    if (typeof n == "function") {
                        n(o)
                    }
                    k.resolve(o)
                } catch (q) {
                    k.reject()
                }
            }).fail(function () {
                k.reject()
            });
            return k.promise()
        },
        byBounds: function (g, k, j, n) {
            var h = "layers/" + g + "/features",
                m = new e.Deferred();
            j.bounds = k.toString();
            a.rest.get(h, j).done(function () {
                var o = arguments[0],
                    q = [];
                try {
                    e.each(o.data, function () {
                        this.layerId = g;
                        q.push(new giscloud.Feature(this))
                    });
                    if (typeof n == "function") {
                        n(q)
                    }
                    m.resolve(q)
                } catch (r) {
                    m.reject()
                }
            }).fail(function () {
                m.reject()
            });
            return m.promise()
        },
        remove: function (g, k) {
            var h = new e.Deferred(),
                j = this;
            a.rest.call("DELETE", "layers/" + g + "/features/" + k).done(function () {
                h.resolveWith(j)
            }).fail(function () {
                h.rejectWith(j, arguments)
            });
            return h.promise()
        },
        update: function (g, m, k) {
            var h = new e.Deferred(),
                j = this;
            if (m == null) {
                return this.create(g, k)
            }
            a.rest.call("PUT", "layers/" + g + "/features/" + m, JSON.stringify(k), "application/json").done(function () {
                h.resolveWith(j, [m])
            }).fail(function () {
                h.rejectWith(j, arguments)
            });
            return h.promise()
        },
        create: function (g, k) {
            var h = new e.Deferred(),
                j = this;
            a.rest.call("post", "layers/" + g + "/features/", JSON.stringify(k), "application/json").done(function (q, o) {
                var n = o && o.match(/features\/(\d+)/);
                h.resolveWith(j, [n && n[1]])
            }).fail(function () {
                h.rejectWith(j, arguments)
            });
            return h.promise()
        }
    }
})(window, window.giscloud.exposeJQuery(), window.giscloud.common());