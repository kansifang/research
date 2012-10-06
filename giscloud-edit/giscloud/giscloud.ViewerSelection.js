(function(c, e, a, f) {
    giscloud.ViewerSelection = function(n) {
        var j = {},
        h = n,
        g = {},
        m = 0,
        k = a.oid();
        if (n && n.constructor === giscloud.Viewer) {
            e.extend(this, {
                add: function(q, o) {
                    if (j[o] === f) {
                        j[o] = []
                    }
                    if (e.inArray(j[o], q) === -1) {
                        j[o].push(q);
                        m++;
                        e(g).triggerHandler("featureAdd", [{
                            featureId: q,
                            layerId: o
                        },
                        this])
                    }
                    return this
                },
                remove: function(t, q) {
                    var r, o = j[q];
                    if (o !== f) {
                        r = e.inArray(t, o);
                        if (r > -1) {
                            o.splice(r, 1);
                            m--;
                            e(g).triggerHandler("featureRemove", [{
                                featureId: t,
                                layerId: q
                            },
                            this])
                        }
                    }
                    return this
                },
                toggle: function(q, o) {
                    if (this.isSelected(q, o)) {
                        this.remove(q, o)
                    } else {
                        this.add(q, o)
                    }
                    return this
                },
                clear: function(o) {
                    if (o !== f && j[o] !== f) {
                        m -= j[o].length;
                        delete j[o]
                    } else {
                        m = 0;
                        j = {}
                    }
                    e(g).triggerHandler("selectionClear", [this]);
                    return this
                },
                isSelected: function(q, o) {
                    return j[o] !== f && e.inArray(q, j[o]) > -1
                },
                selected: function() {
                    var o = [];
                    e.each(j,
                    function(q) {
                        e.each(this,
                        function() {
                            o.push({
                                featureId: this,
                                layerId: q
                            })
                        })
                    });
                    return o
                },
                count: function() {
                    return m
                },
                bind: function(o, r) {
                    var q = this,
                    t;
                    if (o && typeof o == "string" && typeof r == "function") {
                        t = function() {
                            r.apply(q, Array.prototype.slice.call(arguments, 1))
                        };
                        e(g).bind(o, t);
                        if (!r.gcunbind) {
                            r.gcunbind = {}
                        }
                        r.gcunbind[k + o] = t
                    }
                    return this
                },
                unbind: function(o, q) {
                    var r;
                    if (o && typeof o == "string" && typeof q == "function") {
                        r = q.gcunbind && q.gcunbind[k + o];
                        if (r) {
                            e(g).unbind(o, r)
                        }
                    }
                    return this
                },
                featureAdd: function(o) {
                    return this.bind("featureAdd", o)
                },
                featureRemove: function(o) {
                    return this.bind("featureRemove", o)
                },
                selectionClear: function(o) {
                    return this.bind("selectionClear", o)
                }
            })
        } else {
            throw "Invalid constructor arguments."
        }
    }
})(window, giscloud.exposeJQuery(), giscloud.common()); 