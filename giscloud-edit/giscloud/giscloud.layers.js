(function (c, e, a, f) {
    giscloud.layers = {
        list: function (h, k) {
            var g = "layers",
                j = new e.Deferred();
            h = h || {};
            if (typeof h === "function") {
                k = h;
                h = null
            } else {
                k = k || h.callback
            }
            a.rest.get(g, h).done(function () {
                var m = arguments[0],
                    o = [];
                try {
                    e.each(m.data, function () {
                        o.push(new giscloud.Layer(this))
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
        byId: function (m, h, k) {
            var g = "layers/" + m,
                j = new e.Deferred();
            h = h || {};
            if (typeof h === "function") {
                k = h;
                h = null
            } else {
                k = k || h.callback
            }
            a.rest.get(g, h).done(function () {
                var q = arguments[0],
                    n;
                try {
                    n = new giscloud.Layer(q);
                    if (typeof k == "function") {
                        k(n)
                    }
                    j.resolve(n)
                } catch (o) {
                    j.reject()
                }
            }).fail(function () {
                j.reject()
            });
            return j.promise()
        },
        byMapId: function (j, h, m) {
            var g = "maps/" + j + "/layers",
                k = new e.Deferred();
            h = h || {};
            if (typeof h === "function") {
                m = h;
                h = null
            } else {
                m = m || h.callback
            }
            a.rest.get(g).done(function () {
                var n = arguments[0],
                    q = [];
                try {
                    e.each(n.data, function () {
                        q.push(new giscloud.Layer(this))
                    });
                    if (typeof m == "function") {
                        m(q)
                    }
                    k.resolve(q)
                } catch (o) {
                    k.reject()
                }
            }).fail(function () {
                k.reject()
            });
            return k.promise()
        },
        remove: function (j) {
            var g = new e.Deferred(),
                h = this;
            a.rest.call("DELETE", "layers/" + j).done(function () {
                g.resolveWith(h)
            }).fail(function () {
                g.rejectWith(h, arguments)
            });
            return g.promise()
        },
        update: function (k, j) {
            var g = new e.Deferred(),
                h = this;
            a.rest.call("PUT", "layers/" + k, JSON.stringify(j), "application/json").done(function () {
                g.resolveWith(h)
            }).fail(function () {
                g.rejectWith(h, arguments)
            });
            return g.promise()
        },
        create: function (j) {
            var g = new e.Deferred(),
                h = this;
            delete j.id;
            delete j.modified;
            delete j.created;
            delete j.accessed;
            a.rest.call("post", "layers/", a.toXml("layer", j), "text/xml").done(function (o, n) {
                var k = n && n.match(/layers\/(\d+)/);
                g.resolveWith(h, [k && k[1]])
            }).fail(function () {
                g.rejectWith(h, arguments)
            });
            return g.promise()
        },
        reset: function (h, j) {
            var g = new e.Deferred(),
                k = this;
            a.rest.call("DELETE", "map_cache/" + h + "/2", {
                layers: j.join()
            }).done(function () {
                g.resolveWith(k)
            }).fail(function () {
                g.rejectWith(k, arguments)
            });
            return g.promise()
        },
        render: function (m, k, j, g) {
            var h = a.rest.url() + "layers/" + m + "/render." + k + "?invalidate=true";
            if (j && g) {
                h += "&width=" + j + "&height=" + g
            }
            return h
        },
        "export": function (k, j, h) {
            var g = a.rest.url() + "layers/" + k + "/export." + j;
            if (h) {
                g += ".zip"
            }
            return g
        }
    }
})(window, window.giscloud.exposeJQuery(), window.giscloud.common());
