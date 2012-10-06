(function(c, e, a, g) {
    var f = {};
    giscloud.Graphic = function(q) {
        var r = this,
        t = {},
        n = {},
        m = a.oid(),
        y = false,
        k,
        j,
        v,
        h,
        o,
        x,
        w,
        u;
        o = function(z) {
            var B, A;
            if (!y) {
                e.each(t,
                function(C, D) {
                    if (D.gid === z.name) {
                        B = D.feat;
                        return null
                    }
                });
                if (z.type === "click") {
                    A = "click"
                } else {
                    if (z.type === "mouseover") {
                        A = "mouseOver"
                    } else {
                        if (z.type === "mouseout") {
                            A = "mouseOut"
                        }
                    }
                }
                if (A && B) {
                    e(n).triggerHandler(A, [B]);
                    e(B).triggerHandler(A)
                }
            }
        };
        x = function(A) {
            var E = t[this.id],
            C = E && E.gid,
            D,
            B,
            z;
            if (k && C) {
                z = A && A.toOGC();
                if (z) {
                    k.remove(C);
                    E.gid = null;
                    if (A instanceof giscloud.geometry.Point) {
                        D = new giscloud.GraphicStyle("point")
                    } else {
                        if (A instanceof giscloud.geometry.Line) {
                            D = new giscloud.GraphicStyle("line")
                        } else {
                            if (A instanceof giscloud.geometry.Polygon) {
                                D = new giscloud.GraphicStyle("polygon")
                            }
                        }
                    }
                    B = E.feat.style();
                    B.fill = D.fill ? B.fill || D.fill: null;
                    B.size = D.size ? B.size || D.size: null;
                    E.feat.style(B);
                    C = k.deserializeGeometryOpenGIS({
                        geom: z,
                        color: B.color.hex("0x"),
                        fillcolor: B.fill && B.fill.hex("0x"),
                        alpha: (B.fill && (B.color.alpha() < B.fill.alpha())) ? B.fill.alpha() : B.color.alpha(),
                        width: B.size,
                        size: B.size
                    });
                    E.gid = C
                }
            }
        };
        w = function(A) {
            var B = t[this.id],
            z = B && B.gid;
            if (k && z) {
                k.setAttributeGeometry(z, "color", A.color.hex("#"));
                if (A.fill) {
                    k.setAttributeGeometry(z, "fillcolor", A.fill.hex("#"))
                }
                if (A.size) {
                    k.setAttributeGeometry(z, "size", A.size);
                    k.setAttributeGeometry(z, "width", A.size)
                }
            }
        };
        u = function(B) {
            var A = t[this.id],
            z = A && A.gid;
            if (k && z) {
                k.setGeometryVisible(z, B.toString())
            }
        };
        q.initializing.done(function() {
            k = q.instance.plugins.canvas;
            k.addEventListener("click", o);
            k.addEventListener("mouseover", o);
            k.addEventListener("mouseout", o)
        });
        j = this.features = [];
        this.bind = function(z, A) {
            var B = this,
            C = function() {
                var D = Array.prototype.slice.call(arguments, 1);
                A.apply(B, D)
            };
            e(n).bind(z, C);
            if (!A.gcunbind) {
                A.gcunbind = {}
            }
            A.gcunbind[m + z] = C;
            return this
        };
        this.unbind = function(z, B) {
            var A = this,
            C;
            C = B.gcunbind && B.gcunbind[m + z];
            e(n).unbind(z, C);
            return this
        };
        this.draw = function(A, D, C) {
            var z, B = this;
            if (v && !v.isResolved() && !v.isRejected()) {
                k.endDraw()
            }
            if (A === false) {
                return v.promise()
            } else {
                h = function(E) {
                    var F;
                    if (E && E.geom) {
                        F = new giscloud.GraphicFeature(giscloud.geometry.fromOGC(E.geom));
                        if (F) {
                            t[F.id] = {
                                gid: z,
                                feat: F,
                                ind: B.features.length
                            };
                            w.call(F, F.style());
                            B.features.push(F);
                            F.bind("geometryChanged", x);
                            F.bind("styleChanged", w);
                            F.bind("visibilityChanged", u);
                            v.resolveWith(B, [F])
                        } else {
                            v.rejectWith(B, [])
                        }
                    } else {
                        v.rejectWith(B, [])
                    }
                    y = false
                };
                if (A === "point" || A === "line" || A === "polygon") {
                    v = new e.Deferred();
                    k.addEventListener("add", h);
                    v.then(function() {
                        k.removeEventListener("add", h)
                    },
                    function() {
                        k.removeEventListener("add", h)
                    });
                    if (typeof D === "function") {
                        v.done(D)
                    }
                    if (typeof C === "function") {
                        v.fail(C)
                    }
                    z = k.add(A);
                    y = true;
                    return v.promise()
                } else {
                    throw "Invalid type. Use 'point', 'line' or 'polygon'."
                }
            }
        };
        this.add = function(z) {
            var A = this;
            q.initializing.done(function() {
                var C, B;
                if (z.constructor === giscloud.GraphicFeature) {
                    B = z.toOGC();
                    if (B) {
                        C = k.deserializeGeometryOpenGIS({
                            geom: B,
                            color: z.style.color.hex("0x"),
                            fillcolor: z.style.fill.hex("0x"),
                            alpha: (z.style.fill && (z.style.color.alpha() < z.style.fill.alpha())) ? z.style.fill.alpha() : z.style.color.alpha(),
                            width: z.style.size,
                            size: z.style.size
                        });
                        t[z.id] = {
                            gid: C,
                            feat: z,
                            ind: A.features.length
                        };
                        A.features.push(z);
                        z.bind("geometryChanged", x);
                        z.bind("styleChanged", w);
                        z.bind("visibilityChanged", u)
                    }
                }
            });
            return this
        };
        this.remove = function(z) {
            var A = this;
            q.initializing.done(function() {
                var B;
                if (z.constructor === giscloud.GraphicFeature) {
                    z = z.id
                }
                B = t[z];
                if (B !== g) {
                    k.remove(B.gid);
                    A.features.splice(B.ind, 1);
                    B.feat.unbind("geometryChanged", x);
                    B.feat.unbind("styleChanged", w);
                    B.feat.unbind("visibilityChanged", u);
                    delete t[z];
                    B = null
                }
            });
            return this
        };
        this.clear = function() {
            var z = this;
            q.initializing.done(function() {
                k.clear();
                e.each(z.features,
                function(A, B) {
                    B.unbind("geometryChanged", x);
                    B.unbind("styleChanged", w);
                    B.unbind("visibilityChanged", u)
                });
                z.features = [];
                t = {}
            });
            return this
        }
    };
    giscloud.GraphicFeature = function(h, k) {
        var m = a.oid(),
        o,
        j,
        n = true;
        if (!k || k.constructor !== giscloud.GraphicStyle) {
            if (h instanceof giscloud.geometry.Point) {
                j = new giscloud.GraphicStyle("point")
            } else {
                if (h instanceof giscloud.geometry.Line) {
                    j = new giscloud.GraphicStyle("line")
                } else {
                    if (h instanceof giscloud.geometry.Polygon) {
                        j = new giscloud.GraphicStyle("polygon")
                    }
                }
            }
        } else {
            j = k
        }
        o = h;
        this.geometry = function(q) {
            if (q) {
                o = q;
                e(this).triggerHandler("geometryChanged", [o]);
                return this
            } else {
                return o
            }
        };
        this.style = function(q) {
            if (q) {
                j = q;
                e(this).triggerHandler("styleChanged", [j]);
                return this
            } else {
                return j
            }
        };
        this.visibility = function(q) {
            if (typeof q === "boolean") {
                n = q;
                e(this).triggerHandler("visibilityChanged", [n]);
                return this
            } else {
                return n
            }
        };
        this.id = "graphic" + m;
        this.bind = function(q, r) {
            var t = this,
            u = function() {
                var v = Array.prototype.slice.call(arguments, 1);
                r.apply(t, v)
            };
            e(this).bind(q, u);
            if (!r.gcunbind) {
                r.gcunbind = {}
            }
            r.gcunbind[m + q] = u;
            return this
        };
        this.unbind = function(q, r) {
            var t;
            t = r.gcunbind && r.gcunbind[m + q];
            e(this).unbind(q, t);
            return this
        };
        this.toOGC = function() {
            if (o) {
                return o.toOGC()
            } else {
                return null
            }
        }
    };
    giscloud.GraphicStyle = function() {
        var h = arguments[0];
        if (typeof h === "string") {
            switch (h) {
            case "point":
                e.extend(true, this, f.pointStyle);
                break;
            case "line":
                e.extend(true, this, f.lineStyle);
                break;
            case "polygon":
                e.extend(true, this, f.polygonStyle);
                break;
            default:
                break
            }
        } else {
            this.color = (h.color !== g && h.color.constructor === giscloud.Color) ? h.color: null;
            this.fill = (h.fill !== g && h.fill.constructor === giscloud.Color) ? h.fill: null;
            this.size = (typeof h.size === "number") ? h.size: null
        }
    };
    f = {
        pointStyle: new giscloud.GraphicStyle({
            color: new giscloud.Color(0, 0, 0, 100),
            fill: new giscloud.Color(255, 0, 0, 100),
            size: 10
        }),
        lineStyle: new giscloud.GraphicStyle({
            color: new giscloud.Color(0, 0, 0, 100),
            size: 1
        }),
        polygonStyle: new giscloud.GraphicStyle({
            color: new giscloud.Color(0, 0, 0, 100),
            fill: new giscloud.Color(255, 0, 0, 100)
        })
    }
})(window, giscloud.exposeJQuery(), giscloud.common()); 