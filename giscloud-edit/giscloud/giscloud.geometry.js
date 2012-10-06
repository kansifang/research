(function () {
    var a;
    giscloud.geometry = {
        Point: function (c, e) {
            this.x = c;
            this.y = e
        },
        Line: function (c) {
            this.points = c
        },
        Polygon: function (c) {
            this.rings = c
        },
        toOGC: function (o) {
            var c, n, e, t, r, m, h, g, f;
            c = function (j, k) {
                return j + " " + k
            };
            n = function (j) {
                return j.join()
            };
            e = function (j) {
                return j.join()
            };
            try {
                if (o instanceof giscloud.geometry.Point && o.x != null && o.y != null) {
                    return "POINT(" + o.x + " " + o.y + ")"
                } else {
                    if (o instanceof giscloud.geometry.Line && o.points != null) {
                        t = [];
                        for (m = 0, g = o.points.length; m < g; m++) {
                            t.push(c(o.points[m].x, o.points[m].y))
                        }
                        return "LINESTRING(" + n(t) + ")"
                    } else {
                        if (o instanceof giscloud.geometry.Polygon && o.rings != null) {
                            t = [];
                            for (m = 0, g = o.rings.length; m < g; m++) {
                                r = [];
                                for (h = 0, f = o.rings[m].points.length; h < f; h++) {
                                    r.push(c(o.rings[m].points[h].x, o.rings[m].points[h].y))
                                }
                                r.push(c(o.rings[m].points[0].x, o.rings[m].points[0].y));
                                t.push("(" + n(r) + ")")
                            }
                            return "POLYGON(" + e(t) + ")"
                        } else {
                            return null
                        }
                    }
                }
            } catch (q) {
                return null
            }
        },
        fromOGC: function (o) {
            var u = /^([A-Z]+)\((.*)\)$/,
                q = /([+\-]?\d+\.?\d*) ([+\-]?\d+\.?\d*)/,
                e = /([+\-]?\d+\.?\d* [+\-]?\d+\.?\d*)/g,
                f = /(([+\-]?\d+\.?\d* [+\-]?\d+\.?\d*,?)+)/g,
                z, x, w, v, n, m, h, g, c, y;
            z = o.match && o.match(u);
            if (z && z[1]) {
                switch (z[1]) {
                case "POINT":
                    x = z[2].match(q);
                    if (x && x.length === 3) {
                        return new giscloud.geometry.Point(parseFloat(x[1]), parseFloat(x[2]))
                    }
                    break;
                case "LINESTRING":
                    x = z[2].match(e);
                    if (x) {
                        c = [];
                        for (n = 0, h = x.length; n < h; n++) {
                            w = x[n].match(q);
                            if (w && w.length === 3) {
                                c.push(new giscloud.geometry.Point(parseFloat(w[1]), parseFloat(w[2])))
                            }
                        }
                        return new giscloud.geometry.Line(c)
                    }
                    break;
                case "MULTILINESTRING":
                    console.log("MULTILINESTRING parsing not yet implemented.");
                    return;
                case "POLYGON":
                    x = z[2].match(f);
                    if (x) {
                        c = [];
                        for (n = 0, h = x.length; n < h; n++) {
                            w = x[n].match(e);
                            if (w) {
                                y = [];
                                for (m = 0, g = w.length - 1; m < g; m++) {
                                    v = w[m].match(q);
                                    if (v && v.length === 3) {
                                        y.push(new giscloud.geometry.Point(parseFloat(v[1]), parseFloat(v[2])))
                                    }
                                }
                                c.push(new giscloud.geometry.Line(y))
                            }
                        }
                        return new giscloud.geometry.Polygon(c)
                    }
                    break;
                default:
                    break
                }
            }
            return null
        }
    };
    a = {
        toOGC: function () {
            return giscloud.geometry.toOGC(this)
        }
    };
    giscloud.geometry.Point.prototype = a;
    giscloud.geometry.Line.prototype = a;
    giscloud.geometry.Polygon.prototype = a
})();