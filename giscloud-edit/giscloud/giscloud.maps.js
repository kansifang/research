(function (c, e, a, f) {
    giscloud.maps = {
        list: function (h, k) {
            var g = "maps",
                j = new e.Deferred();
            if (typeof h === "function") {
                k = h;
                h = null
            } else {
                k = k || (h && h.callback)
            }
            a.rest.get(g, h).done(function () {
                var m = arguments[0],
                    o = [];
                try {
                    e.each(m.data, function () {
                        o.push(new giscloud.Map(this))
                    });
                    if (typeof k == "function") {
                        k(o)
                    }
                    j.resolve(o)
                } catch (n) {
                    j.reject()
                }
            }).fail(function () {
                j.reject()
            });
            return j.promise()
        },
        byId: function (m, k, j) {
            var g = "maps/" + m,
                h = new e.Deferred();
            a.rest.get(g).done(function () {
                var o = arguments[0],
                    q;
                try {
                    q = j ? o : new giscloud.Map(o);
                    if (typeof k == "function") {
                        k(q)
                    }
                    h.resolve(q)
                } catch (n) {
                    h.reject()
                }
            }).fail(function () {
                h.reject()
            });
            return h.promise()
        },
        remove: function (g) {
            return a.rest.call("DELETE", "maps/" + g)
        },
        update: function (h, g) {
            return a.rest.call("PUT", "maps/" + h, a.toXml("map", g), "text/xml")
        },
        create: function (g) {
            return a.rest.call("post", "maps/", a.toXml("map", g), "text/xml")
        },
        reset: function (k, j) {
            var g = new e.Deferred(),
                h = this;
            a.rest.call("DELETE", "map_cache/" + k + "/2/", j ? {
                layers: j.join()
            } : null).done(function () {
                g.resolveWith(h)
            }).fail(function () {
                g.rejectWith(h, arguments)
            });
            return g.promise()
        }
    }
})(window, window.giscloud.exposeJQuery(), window.giscloud.common());