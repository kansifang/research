(function(f, g, e, c, j) {
    var h = /^layer(\d+)\|\|(\d+)$/,
    a;
    giscloud.Viewer = function() {
        var q = this,
        t = arguments,
        r = t.length,
        v = /^layer(\d+)$/,
        m = e.oid(),
        n = {},
        u,
        o,
        w,
        k;
        if (typeof t[0] === "string") {
            this.containerId = o = t[0];
            this.mapId = w = t[1];
            k = t[2] || {};
            this.initializing = new g.Deferred();
            this.loading = new g.Deferred();
            a(o, k).done(function(x) {
                var z = new c(x);
                z.plugins = {};
                z.plugins.marker = new fnMarker(z);
                z.plugins.kartehr = new fnKartehr(z);
                z.plugins.canvas = new fnCanvas(z);
                z.plugins.tooltip = new fnTooltip(z);
                z.plugins.kartehr.liveSite("http://www.mapcow.org/");
                if (k.scalebar) {
                    z.plugins.scalebar = new fnScalebar(z)
                }
                if (k.slider) {
                    z.plugins.slider = new fnSlider(z)
                }
                z.enablePanWithMiddleButton();
                q.instance = z;
                q.initializing.resolveWith(q, []);
                z.addEventListener("load",
                function() {
                    var H = {},
                    B, G, F, E, A, C, D;
                    q.layers = [];
                    try {
                        for (F = 0, E = z.getLayerCount(); F < E; F++) {
                            G = z.getLayer(F);
                            B = G.getId();
                            C = B.match(v);
                            if (C) {
                                B = C[1];
                                H[B] = F;
                                D = new giscloud.ViewerLayer(G);
                                D.selectable(true);
                                q.layers.push(D)
                            }
                        }
                    } catch(I) {
                        console.log(I)
                    }
                    g.data(q, "layerIndex", H);
                    q.graphic = new giscloud.Graphic(q);
                    if (!q.selection) {
                        q.selection = new giscloud.ViewerSelection(q);
                        q.selection.featureAdd(function() {
                            g(n).triggerHandler("selectionChange", {
                                action: "add",
                                feature: arguments[0]
                            })
                        });
                        q.selection.featureRemove(function() {
                            g(n).triggerHandler("selectionChange", {
                                action: "remove",
                                feature: arguments[0]
                            })
                        });
                        q.selection.selectionClear(function() {
                            g(n).triggerHandler("selectionChange", {
                                action: "clear"
                            })
                        })
                    }
                    A = q.loading;
                    A.resolveWith(q, []);
                    g(n).triggerHandler("ready", [q])
                });
                if (q.instance.setLayerFeatureFilter && flashnavigator.extraOptions) {
                    for (var y in flashnavigator.extraOptions.data) {
                        q.instance.setLayerFeatureFilter("layer" + y, flashnavigator.extraOptions.data[y])
                    }
                }
                q.loadMap(w)
            })
        } else {
            e.setError(this, "constructor", "Invalid constructor arguments")
        }
        this.activeLayer = null;
        this.markers = [];
        g.extend(this, {
            bind: function(x, z) {
                var y = this,
                A;
                if (x && typeof x === "string" && typeof z === "function") {
                    switch (x) {
                    case "mouseDown":
                        A = function(B) {
                            z.call(y, new giscloud.LonLat(B.x, B.y))
                        };
                        this.initializing.done(function() {
                            y.instance.addEventListener("mousedown", A)
                        });
                        break;
                    case "mouseMove":
                        A = function(B) {
                            z.call(y, new giscloud.LonLat(B.x, B.y))
                        };
                        this.initializing.done(function() {
                            y.instance.addEventListener("mousemove", A)
                        });
                        break;
                    case "scaleChange":
                        A = function(B) {
                            z.call(y, y.instance.convertScale(B.zoom))
                        };
                        this.initializing.done(function() {
                            y.instance.addEventListener("scalechange", A)
                        });
                        break;
                    case "featureClick":
                        A = function(C) {
                            var B = C.id.match(h);
                            z.call(y, {
                                layerId: parseInt(B[1], 10),
                                featureId: parseInt(B[2], 10),
                                key: C.key,
                                attributes: C.object.attributes
                            })
                        };
                        this.initializing.done(function() {
                            y.instance.addEventListener("object_click", A)
                        });
                        break;
                    case "featureDoubleclick":
                        A = function(C) {
                            var B = C.id.match(h);
                            z.call(y, {
                                layerId: parseInt(B[1], 10),
                                featureId: parseInt(B[2], 10),
                                key: C.key,
                                attributes: C.object.attributes
                            })
                        };
                        this.initializing.done(function() {
                            y.instance.addEventListener("object_dblclick", A)
                        });
                        break;
                    case "featureOver":
                        A = function(C) {
                            var B = C.id.match(h);
                            z.call(y, {
                                layerId: parseInt(B[1], 10),
                                featureId: parseInt(B[2], 10),
                                key: C.key,
                                attributes: C.object.attributes
                            })
                        };
                        this.initializing.done(function() {
                            y.instance.addEventListener("object_over", A)
                        });
                        break;
                    case "featureOut":
                        A = function(C) {
                            var B = C.id.match(h);
                            z.call(y, {
                                layerId: parseInt(B[1], 10),
                                featureId: parseInt(B[2], 10),
                                key: C.key,
                                attributes: C.object.attributes
                            })
                        };
                        this.initializing.done(function() {
                            y.instance.addEventListener("object_out", A)
                        });
                        break;
                    default:
                        A = function() {
                            var B = Array.prototype.slice.call(arguments, 1);
                            z.apply(y, B)
                        };

                        g(n).bind(x, A);
                        break
                    }
                    if (!z.gcunbind) {
                        z.gcunbind = {}
                    }
                    z.gcunbind[m + x] = A
                }
                return this
            },
            unbind: function(x, z) {
                var y = this,
                A;
                if (x && typeof x === "string" && typeof z === "function") {
                    A = z.gcunbind && z.gcunbind[m + x];
                    if (A) {
                        switch (x) {
                        case "mouseDown":
                            this.initializing.done(function() {
                                y.instance.removeEventListener("mousedown", A)
                            });
                            break;
                        case "mouseMove":
                            this.initializing.done(function() {
                                y.instance.removeEventListener("mousemove", A)
                            });
                            break;
                        case "scaleChange":
                            this.initializing.done(function() {
                                y.instance.removeEventListener("scalechange", A)
                            });
                            break;
                        case "featureClick":
                            this.initializing.done(function() {
                                y.instance.removeEventListener("object_click", A)
                            });
                            break;
                        case "featureDoubleclick":
                            this.initializing.done(function() {
                                y.instance.removeEventListener("object_dblclick", A)
                            });
                            break;
                        case "featureOver":
                            this.initializing.done(function() {
                                y.instance.removeEventListener("object_over", A)
                            });
                            break;
                        case "featureOut":
                            this.initializing.done(function() {
                                y.instance.removeEventListener("object_out", A)
                            });
                            break;
                        default:
                            g(n).unbind(x, A);
                            break
                        }
                    }
                }
                return this
            }
        })
    };
    g.extend(giscloud.Viewer.prototype, {
        loadMap: function(m, n) {
            var k = this.instance;
            if (!k) {
                e.setError(this, "loadMap", "No viewer instance.");
                return this
            }
            if (m) {
                if (this.loading.isResolved()) {
                    this.loading = new g.Deferred()
                }
                k.src(true);
                k.load(e.liveSite() + "maps/map" + m + ".xml");
                this.mapId = m
            } else {
                e.setError(this, "loadMap", "Invalid map id.")
            }
            return this
        },
        ready: function(k) {
            return this.bind("ready", k)
        },
        mouseDown: function(k) {
            return this.bind("mouseDown", k)
        },
        mouseMove: function(k) {
            return this.bind("mouseMove", k)
        },
        scaleChange: function(k) {
            return this.bind("scaleChange", k)
        },
        featureClick: function(k) {
            return this.bind("featureClick", k)
        },
        featureDoubleclick: function(k) {
            this.instance.addEventListener("object_dblclick",
            function(o) {
                var n = o.id.match(h);
                k({
                    layerId: n[1],
                    featureId: n[2],
                    key: o.key,
                    attributes: o.object.attributes
                })
            })
        },
        featureOver: function(k) {
            this.instance.addEventListener("object_over",
            function(o) {
                var n = o.id.match(h);
                k({
                    layerId: n[1],
                    featureId: n[2],
                    key: o.key,
                    attributes: o.object.attributes
                })
            })
        },
        featureOut: function(k) {
            this.instance.addEventListener("object_out",
            function(o) {
                var n = o.id.match(h);
                k({
                    layerId: n[1],
                    featureId: n[2],
                    key: o.key,
                    attributes: o.object.attributes
                })
            })
        },
        selectionChange: function(k) {
            return this.bind("selectionChange", k)
        },
        width: function() {
            var k = g("#" + this.containerId);
            if (arguments[0]) {
                k.width(arguments[0]);
                return this
            } else {
                return k.width()
            }
        },
        height: function() {
            var k = g("#" + this.containerId);
            if (arguments[0]) {
                k.height(arguments[0]);
                return this
            } else {
                return k.height()
            }
        },
        bounds: function(m) {
            if (m !== j) {
                if (!m || m.constructor !== giscloud.Bounds) {
                    throw "Parameter 'bounds' should be a giscloud.Bounds instance."
                } else {
                    this.loading.done(function() {
                        this.instance.setViewBound(m.left, m.bottom, m.right, m.top, true)
                    });
                    return this
                }
            } else {
                var k = this.instance.getViewBound();
                return new giscloud.Bounds(k.xMin, k.yMin, k.xMax, k.yMax)
            }
        },
        center: function(k) {
            if (k !== j) {
                if (!k || k.constructor !== giscloud.LonLat) {
                    throw "Parameter 'center' should be a giscloud.LonLat instance."
                } else {
                    this.loading.done(function() {
                        var m = this.bounds(),
                        o,
                        n,
                        q = m && m.center();
                        if (q) {
                            o = k.lon - q.lon;
                            n = k.lat - q.lat;
                            this.bounds(new giscloud.Bounds(m.left + o, m.bottom + n, m.right + o, m.top + n))
                        } else {
                            throw "Viewer bounds are not set."
                        }
                    });
                    return this
                }
            } else {
                return this.bounds().center()
            }
        },
        scale: function(k) {
            if (k !== j) {
                if (!isFinite(k)) {
                    throw "Parameter 'scale' should be a finite number."
                } else {
                    this.loading.done(function() {
                        this.instance.setScale(k)
                    });
                    return this
                }
            } else {
                return this.instance.getScale()
            }
        },
        showLayer: function(m) {
            var k = g.data(this, "layerIndex")[m.toString()];
            this.layers[k] && this.layers[k].visible(true);
            this.showLayerLabels(m);
            return this
        },
        hideLayer: function(m) {
            var k = g.data(this, "layerIndex")[m.toString()];
            this.layers[k] && this.layers[k].visible(false);
            this.hideLayerLabels(m);
            return this
        },
        showLayerLabels: function(n) {
            var k = "llayer" + n,
            m = this.instance.getLayerByName(k);
            if (m) {
                m.enable()
            }
        },
        hideLayerLabels: function(n) {
            var k = "llayer" + n,
            m = this.instance.getLayerByName(k);
            if (m) {
                m.disable()
            }
        },
        layerById: function(m) {
            if (this.loading.isResolved()) {
                var k = g(this).data("layerIndex")[m];
                if (isFinite(k)) {
                    return this.layers[k]
                } else {
                    return null
                }
            }
        },
        showTip: function(m) {
            var k = this;
            this.initializing.done(function() {
                k.instance.plugins.tooltip.show(m)
            })
        },
        hideTip: function() {
            var k = this;
            this.initializing.done(function() {
                k.instance.plugins.tooltip.hide()
            })
        },
        addMarker: function(k) {
            this.loading.done(function() {
                var n = this.instance.plugins.marker,
                q, o, r;
                if (k instanceof giscloud.FlagMarker) {
                    q = k.sig;
                    if (q && e.markers[q].m) {
                        throw "This marker has already been added to a viewer."
                    } else {
                        k.sig = "m" + e.oid();
                        q = k.sig;
                        if (!e.markers) {
                            e.markers = {}
                        }
                        e.markers[q] = {
                            m: n
                        };
                        o = k.visible();
                        r = k.position();
                        if (o && r) {
                            e.markers[q].id = n.add(r.lon, r.lat, k.color().hex("0x"), k.title(), k.content(), null, true)
                        } else {
                            e.markers[q].id = null
                        }
                        this.markers.push(k)
                    }
                } else {
                    throw "Not a giscloud.FlagMarker instance."
                }
            });
            return this
        },
        removeMarker: function(k) {
            this.loading.done(function() {
                var n = this.instance.plugins.marker,
                o;
                if (k instanceof giscloud.FlagMarker) {
                    if (k.sig && e.markers[k.sig].m === n) {
                        e.markers[k.sig].m.remove(e.markers[k.sig].id);
                        delete e.markers[k.sig];
                        o = g.inArray(k, this.markers);
                        if (o > -1) {
                            this.markers.splice(o, 1)
                        }
                        delete k.sig
                    } else {
                        throw "This is not a marker which belongs to this viewer."
                    }
                } else {
                    throw "Not a giscloud.FlagMarker instance."
                }
            });
            return this
        },
        fullExtent: function() {
            var k = this;
            this.loading.done(function() {
                k.instance.setViewBound()
            });
            return this
        },
        measure: function() {
            var k = this;
            this.loading.done(function() {
                k.select(false);
                k.instance.setTool("MeasureTool")
            });
            return this
        },
        areaZoom: function() {
            var k = this;
            this.loading.done(function() {
                k.select(false);
                k.instance.setTool("SelectAreaTool")
            });
            return this
        },
        pan: function() {
            var k = this;
            this.loading.done(function() {
                k.select(false);
                k.instance.setTool("DragTool")
            });
            return this
        },
        zoomToLayer: function(k) {
            var m = this;
            this.loading.done(function() {
                var n = m.layerById(k);
                if (n) {
                    m.bounds(n.bounds)
                }
            });
            return this
        },
        select: function(q, u) {
            var t = this,
            o = 0,
            m = this.layers,
            n = m.length,
            r;
            if (q) {
                this.instance.setTool("DragTool");
                this.instance.enableSelection();
                r = g(this).data("selectFeatureClickCallback");
                if (!r) {
                    r = function(v) {
                        var k = v.id.match(h),
                        B = parseInt(k[2], 10),
                        z = parseInt(k[1], 10),
                        A = v.key === 17,
                        y = t.selection,
                        x = t.instance,
                        w = function(E, D, C) {
                            e.highlight(x, E, D, C)
                        };
                        if (A) {
                            if (y.isSelected(B, z)) {
                                x.demodifyObjectsColor();
                                y.remove(B, z);
                                g.each(t.selection.selected().slice(0),
                                function() {
                                    var D = this.featureId.toString(),
                                    C = this.layerId.toString();
                                    w(D, C, false)
                                })
                            } else {
                                w(B, z, false);
                                y.add(B, z)
                            }
                        } else {
                            if (y.isSelected(B, z) && y.count() === 1) {
                                x.demodifyObjectsColor();
                                y.remove(B, z)
                            } else {
                                y.clear();
                                w(B, z, true);
                                y.add(B, z)
                            }
                        }
                    };
                    g(this).data("selectFeatureClickCallback", r)
                }
                this.instance.addEventListener("object_click", r)
            } else {
                this.instance.disableSelection();
                this.instance.removeEventListener("object_click", g(this).data("selectFeatureClickCallback"))
            }
            return this
        },
        selectFeature: function(m, u, n) {
            var r = this.selection,
            k = r.isSelected(u, m),
            t = parseInt(u, 10),
            q = parseInt(m, 10),
            o = this;
            this.loading.done(function() {
                if (k && !n) {
                    o.instance.demodifyObjectsColor();
                    r.remove(t, q);
                    g.each(r.selected().slice(0),
                    function() {
                        var w = this.featureId.toString(),
                        v = this.layerId.toString();
                        e.highlight(o.instance, w, v, false)
                    })
                } else {
                    if (!k && n) {
                        e.highlight(o.instance, t, q, false);
                        r.add(t, q)
                    }
                }
            });
            return this
        },
        selectFeaturesByBounds: function(m, n, k) {
            this.loading.done(function() {
                var o = this;
                if (k) {
                    this.instance.demodifyObjectsColor();
                    this.selection.clear()
                }
                if (m !== null || m !== j) {
                    giscloud.features.byBounds(m, n).done(function(t) {
                        var r, q;
                        for (r = 0, q = t.length; r < q; r++) {
                            if (t[r].id !== j) {
                                o.selectFeature(m, t[r].id, true)
                            }
                        }
                    })
                }
            })
        }
    });
    a = function(k, o, q) {
        var n = "tooltip,marker,kartehr,canvas",
        m = new g.Deferred();
        o = o || {};
        if (o.scalebar) {
            n += ",scalebar"
        }
        if (o.slider) {
            n += ",slider"
        }
        flashnavigator.include(n);
        flashnavigator.setOptions(o);
        if (e.deferreds.flashnavigator === j) {
            e.deferreds.flashnavigator = {}
        }
        e.deferreds.flashnavigator[k] = m;
        m.done(q || null);
        flashnavigator.container(k, {
            onLoad: function(r) {
                m.resolve(r)
            }
        });
        return m
    }
})(window, giscloud.exposeJQuery(), giscloud.common(), fnViewer); 