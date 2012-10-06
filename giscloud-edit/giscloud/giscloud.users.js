(function(c, e, a, f) {
    giscloud.users = {
        list: function(h, k) {
            var g = "users",
            j = new e.Deferred();
            h = h || {};
            if (typeof h === "function") {
                k = h;
                h = {}
            } else {
                k = k || h.callback
            }
            h.expand = "roles";
            a.rest.get(g, h).done(function(n) {
                var o, m, r = [];
                try {
                    for (o = 0, m = n.data.length; o < m; o++) {
                        r.push(new giscloud.User(n.data[o]))
                    }
                    if (typeof k == "function") {
                        k(r)
                    }
                    j.resolve(r)
                } catch(q) {
                    j.reject()
                }
            }).fail(function() {
                j.reject()
            });
            return j.promise()
        },
        byId: function(m, h, k) {
            var g = "users/" + m,
            j = new e.Deferred();
            h = h || {};
            if (typeof h === "function") {
                k = h;
                h = {}
            } else {
                k = k || h.callback
            }
            h.expand = "roles";
            a.rest.get(g, h).done(function(o) {
                var n;
                try {
                    n = new giscloud.User(o);
                    if (typeof k == "function") {
                        k(n)
                    }
                    j.resolve(n)
                } catch(q) {
                    j.reject()
                }
            }).fail(function() {
                j.reject()
            });
            return j.promise()
        },
        current: function(h, k) {
            var g = "users/current",
            j = new e.Deferred();
            h = h || {};
            if (typeof h === "function") {
                k = h;
                h = {}
            } else {
                k = k || h.callback
            }
            h.expand = "roles";
            a.rest.get(g, h).done(function(n) {
                var m;
                try {
                    m = new giscloud.User(n);
                    if (typeof k == "function") {
                        k(m)
                    }
                    j.resolve(m)
                } catch(o) {
                    j.reject()
                }
            }).fail(function() {
                j.reject()
            });
            return j.promise()
        },
        remove: function(j) {
            var g = new e.Deferred(),
            h = this;
            a.rest.call("DELETE", "users/" + j).done(function() {
                g.resolveWith(h)
            }).fail(function() {
                g.rejectWith(h, arguments)
            });
            return g.promise()
        },
        update: function(k, j) {
            var g = new e.Deferred(),
            h = this;
            a.rest.call("PUT", "users/" + k, JSON.stringify(j), "application/json").done(function() {
                g.resolveWith(h)
            }).fail(function() {
                g.rejectWith(h, arguments)
            });
            return g.promise()
        },
        create: function(j) {
            var g = new e.Deferred(),
            h = this;
            a.rest.call("post", "users/", JSON.stringify(j), "application/json").done(function(o, n) {
                var k = n && n.match(/users\/(\d+)/);
                g.resolveWith(h, [k && k[1]])
            }).fail(function() {
                g.rejectWith(h, arguments)
            });
            return g.promise()
        }
    }
} (window, giscloud.exposeJQuery(), window.giscloud.common()));