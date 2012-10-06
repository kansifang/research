(function(c, e, a, f) {
    giscloud.Map = function() {
        var n = this,
        j = arguments,
        k = j.length,
        h = {},
        m = a.oid(),
        o,
        g;
        e.extend(this, {
            id: null,
            name: null,
            description: null,
            owner: null,
            active: null,
            copyright: null,
            proj4: null,
            units: null,
            maxzoom: null,
            share: null,
            mobileacess: null,
            bgcolor: null,
            wmsaccess: null,
            modified: null,
            accessed: null,
            created: null,
            bounds: null
        });
        if (typeof j[0] == "number") {
            this.id = j[0];
            this.refresh(j[2], j[1])
        } else {
            if (typeof j[0] == "object") {
                o = j[0];
                this.id = parseInt(o.id, 10);
                this.name = o.name;
                this.description = o.description;
                this.owner = o.owner;
                this.active = o.active;
                this.copyright = o.copyright;
                this.proj4 = o.proj4;
                this.units = o.units;
                this.maxzoom = o.maxzoom;
                this.share = o.share;
                this.mobileacess = o.mobileacess;
                this.bgcolor = o.bgcolor;
                this.wmsaccess = o.wmsaccess;
                this.modified = new Date(o.modified * 1000);
                this.accessed = new Date(o.accessed * 1000);
                this.created = new Date(o.created * 1000);
                if (o.bounds) {
                    g = o.bounds && e.parseJSON(o.bounds);
                    if (g) {
                        this.bounds = new giscloud.Bounds(parseFloat(g.xmin), parseFloat(g.ymin), parseFloat(g.xmax), parseFloat(g.ymax))
                    }
                }
                if (j[1]) {
                    this.refreshLayers(j[2])
                }
                e.extend(true, this, {
                    remove: function() {
                        return giscloud.maps.remove(this.id)
                    },
                    update: function() {
                        var q;
                        o.name = this.name;
                        if (this.bounds) {
                            q = {
                                xmin: this.bounds.left,
                                ymin: this.bounds.bottom,
                                xmax: this.bounds.right,
                                ymax: this.bounds.top
                            }
                        }
                        if (JSON === f) {
                            giscloud.includeJs(document.location.protocol + "//giscloud.local/libs/json2/json2.min.js").done(function() {
                                o.bounds = JSON.stringify(q);
                                return giscloud.maps.update(o.id, o)
                            })
                        } else {
                            o.bounds = JSON.stringify(q)
                        }
                        o.description = this.description;
                        o.active = this.active;
                        o.copyright = this.copyright;
                        o.proj4 = this.proj4;
                        o.units = this.units;
                        o.maxzoom = this.maxzoom;
                        o.share = this.share;
                        o.mobileacess = this.mobileacess;
                        o.bgcolor = this.bgcolor;
                        o.wmsaccess = this.wmsaccess;
                        return giscloud.maps.update(o.id, o)
                    },
                    clone: function() {
                        var q = {};
                        e.extend(q, o);
                        delete q.id;
                        return giscloud.maps.create(q)
                    }
                })
            } else {
                a.setError(this, "constructor", "Invalid constructor arguments")
            }
        }
    };
    e.extend(giscloud.Map.prototype, {
        refresh: function(m, j) {
            var h = this,
            k = this.id,
            g = function(n) {
                if (typeof m == "function") {
                    m(n)
                }
            };
            if (typeof k === f || k === null) {
                a.setError(this, "refresh", "Map id is not set.")
            } else {
                giscloud.maps.byId(k,
                function(n) {
                    h.name = n.name;
                    h.description = n.description;
                    h.owner = n.owner;
                    h.active = n.active;
                    h.copyright = n.copyright;
                    h.proj4 = n.proj4;
                    h.units = n.units;
                    h.maxzoom = n.maxzoom;
                    h.share = n.share;
                    h.mobileacess = n.mobileacess;
                    h.bgcolor = n.bgcolor;
                    h.wmsaccess = n.wmsaccess;
                    h.modified = new Date(n.modified);
                    h.accessed = new Date(n.accessed);
                    h.created = new Date(n.created);
                    if (n.bounds) {
                        b = n.bounds && e.parseJSON(n.bounds);
                        if (b) {
                            h.bounds = new giscloud.Bounds(parseFloat(b.xmin), parseFloat(b.ymin), parseFloat(b.xmax), parseFloat(b.ymax))
                        }
                    }
                    if (j) {
                        h.refreshLayers(g)
                    } else {
                        g(h)
                    }
                },
                true)
            }
            return this
        },
        refreshLayers: function(j) {
            var g = this,
            h = this.id;
            if (!isFinite(h)) {
                a.setError(this, "refreshLayers", "Map id is not set.")
            } else {
                giscloud.layers.byMapId(h,
                function(k) {
                    g.layers = k;
                    if (typeof j == "function") {
                        j(g)
                    }
                })
            }
            return this
        },
        reset: function(g) {
            return giscloud.maps.reset(this.id, g)
        },
        imageUrl: function(h, g) {
            if (typeof h !== "number" && typeof g !== "number") {
                h = 400;
                g = 400
            }
            return a.rest.url("maps/" + this.id + "/render.png?width=" + h + "&height=" + g + "&timestamp=" + this.modified)
        },
        iframeUrl: function(m, g) {
            var j, h, o, k, n;
            if (typeof m === "object") {
                h = m
            }
            j = a.rest.url("maps/" + this.id + "/render.iframe");
            if (h) {
                o = [];
                for (k in h) {
                    if (h.hasOwnProperty(k)) {
                        n = (h[k] != null) ? h[k].toString() : "";
                        o.push(k + "=" + n)
                    }
                }
                j += o.length > 0 ? "?" + o.join("&") : ""
            } else {
                if (typeof m === "number" && typeof g === "number") {
                    j += "?width=" + m + "&height=" + g
                }
            }
            return j
        }
    })
})(window, giscloud.exposeJQuery(), giscloud.common());