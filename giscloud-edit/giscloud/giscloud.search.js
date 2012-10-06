(function (c, a, e) {
    giscloud.search = {
        features: function (k, f, g, h, m) {
            var j;
            h = h || {};
            if (typeof h === "function") {
                m = h;
                h = null
            } else {
                m = m || h.callback
            }
            h.query = k;
            h.fields = f && f.toString();
            if (g) {
                if (g instanceof giscloud.LonLat) {
                    h.x = g.lon;
                    h.y = g.lat
                } else {
                    if (g.x != null && g.y != null) {
                        h.x = g.x;
                        h.y = g.y
                    }
                }
            }
            j = new c.Deferred();
            a.rest.get("search", h).done(function (n) {
                var o = [];
                try {
                    c.each(n.data, function () {
                        o.push(new giscloud.Feature(this))
                    });
                    j.resolve(o)
                } catch (q) {
                    j.reject()
                }
            }).fail(function () {
                j.reject()
            });
            if (m) {
                j.done(m)
            }
            return j.promise()
        }
    }
}(giscloud.exposeJQuery(), giscloud.common()));