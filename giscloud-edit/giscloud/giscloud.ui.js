(function(c, e, a, f) {
    giscloud.ui = {
        Toolbar: function(w) {
            var q = this,
            n, h, o = w.viewer,
            g = a.oid(),
            t = {},
            x,
            v = [],
            m = {},
            u = function(y) {
                var k = "gctoolbar_" + g + "_" + y.name,
                z;
                z = e("<div/>", {
                    id: k,
                    "class": w.type === "vertical" ? "gc-toolbar-placeholder gc-toolbar-placeholder-vertical": "gc-toolbar-placeholder gc-toolbar-placeholder-horizontal"
                });
                z.appendTo(x);
                y.render(k);
                t[y.name] = k
            },
            r = function(k) {
                var y = v.length > 0 ? v[v.length - 1] : null,
                z;
                if (y) {
                    z = q.tools[y];
                    z.deactivate()
                }
                v.push(k.name);
                if (v.length > 99) {
                    v.shift()
                }
                e(m).triggerHandler("toolChange", [z, k])
            },
            j = function(k) {
                var y = v.length > 0 ? v[v.length - 1] : null;
                if (y) {
                    q.tools[y].activate()
                }
            };
            if (!a.toolbarCssIncluded) {
                giscloud.includeCss(a.apiHost() + "/assets/api/1/toolbar.css");
                a.toolbarCssIncluded = true
            }
            this.viewer = o;
            this.tools = {};
            if (w.container) {
                x = e("#" + w.container);
                x.addClass("gc-toolbar");
                if (w.type === "vertical") {
                    x.addClass("gc-toolbar-vertical")
                } else {
                    x.addClass("gc-toolbar-horizontal")
                }
            }
            this.add = function() {
                var B, y, A, D, z, C = true;
                for (B = 0, y = arguments.length; B < y; B++) {
                    A = arguments[B];
                    if (A && A instanceof giscloud.ui.Toolbar.Tool) {
                        if (!A.toolbar || A.toolbar !== this) {
                            A.toolbar = this
                        } else {
                            C = false
                        }
                        this.tools[A.name] = A;
                        A.bind("activation", r);
                        A.bind("deactivation", j);
                        if (w.container && C) {
                            u(A)
                        }
                    }
                }
                return this
            };
            if (w.defaultTools) {
                for (n = 0, h = w.defaultTools.length; n < h; n++) {
                    this.add(giscloud.ui.defaultTools.tool(w.defaultTools[n]))
                }
                if (e.inArray("pan", w.defaultTools) > -1) {
                    this.tools.pan.activate()
                }
            }
            this.remove = function(k) {
                var y = e.inArray(k, v);
                if (y > -1 && y === v.length - 1) {
                    this.deactivateTool()
                } else {
                    if (y > -1) {
                        v.splice(y, 1)
                    }
                }
                delete this.tools[k];
                if (t[k]) {
                    e("#" + t[k]).remove();
                    delete t[k]
                }
                return this
            };
            this.bind = function(k, z) {
                var y = this,
                A;
                if (k && typeof k == "string" && typeof z == "function") {
                    A = function() {
                        var B = Array.prototype.slice.call(arguments, 1);
                        z.apply(y, B)
                    };
                    e(m).bind(k, A);
                    if (!z.gcunbind) {
                        z.gcunbind = {}
                    }
                    z.gcunbind[g + k] = A
                }
                return this
            };
            this.unbind = function(k, z) {
                var y = this,
                A;
                if (k && typeof k == "string" && typeof z == "function") {
                    A = z.gcunbind && z.gcunbind[g + k];
                    if (A) {
                        e(m).unbind(k, A)
                    }
                }
                return this
            };
            this.toolChange = function(k) {
                return this.bind("toolChange", k)
            }
        }
    };
    giscloud.ui.Toolbar.Tool = function(g, q) {
        var n, o, j = false,
        m, r, h = a.oid(),
        k = {};
        this.name = g;
        this.isToggle = function() {
            return m
        };
        this.isActive = function() {
            return j
        };
        this.toolbar = q.toolbar;
        this.viewer = q.viewer;
        n = q.actions.activation;
        o = q.actions.deactivation;
        m = q.toggle;
        this.activate = function(x) {
            var u = this,
            v = (this.toolbar && this.toolbar.viewer) || this.viewer,
            t = Array.prototype.slice.call(arguments, 0),
            w = "gctool_" + this.name + "_" + h;
            if (!j && v) {
                v.initializing.done(function() {
                    if (q.instant) {
                        t.splice(0, 0, this);
                        n.apply(this, t)
                    } else {
                        j = true;
                        e("#" + w).addClass(q.styles.active || "gc-tool-active");
                        if (!x) {
                            e(k).triggerHandler("activation", [u])
                        }
                        if (n) {
                            t.splice(0, 0, this);
                            n.apply(this, t)
                        }
                    }
                })
            }
            return this
        };
        this.deactivate = function(x) {
            var u = this,
            v = (this.toolbar && this.toolbar.viewer) || this.viewer,
            t = Array.prototype.slice.call(arguments, 0),
            w = "gctool_" + this.name + "_" + h;
            if (j && v) {
                v.initializing.done(function() {
                    j = false;
                    e("#" + w).removeClass(q.styles.active || "gc-tool-active");
                    if (!x) {
                        e(k).triggerHandler("deactivation", [u])
                    }
                    if (o) {
                        t.splice(0, 0, this);
                        o.apply(this, t)
                    }
                })
            }
            return this
        };
        this.render = function(t) {
            var B = this,
            D = q.styles || {},
            u = "gctool_" + this.name + "_" + h,
            C, y, v, z, A, x, w;
            if (!a.toolbarCssIncluded) {
                giscloud.includeCss(a.apiHost() + "/assets/api/1/toolbar.css");
                a.toolbarCssIncluded = true
            }
            r = e("#" + t);
            r.html("");
            if (D.icon) {
                C = "gctoolicon_" + this.name + "_" + h;
                A = e("<img/>", {
                    id: C,
                    src: D.icon,
                    alt: D.caption || ""
                });
                if (D.iconHover) {
                    y = "gctoolicon_hover_" + this.name + "_" + h;
                    x = e("<img/>", {
                        id: y,
                        src: D.iconHover,
                        alt: D.caption || "",
                        css: {
                            display: "none"
                        }
                    })
                }
                if (D.iconActive) {
                    v = "gctoolicon_active_" + this.name + "_" + h;
                    w = e("<img/>", {
                        id: v,
                        src: D.iconActive,
                        alt: D.caption || "",
                        css: {
                            display: "none"
                        }
                    })
                }
            }
            z = e("<div/>", {
                id: u,
                "class": D.cssClass || "gc-tool",
                title: D.caption || "",
                mouseover: function(E) {
                    e(this).addClass(D.hover || "gc-tool-hover");
                    if (x) {
                        x.show();
                        w.hide();
                        A.hide()
                    }
                    E.stopPropagation();
                    E.preventDefault()
                },
                mouseout: function(E) {
                    e(this).removeClass(D.hover || "gc-tool-hover");
                    if (x) {
                        x.hide();
                        if (j) {
                            w.show();
                            A.hide()
                        } else {
                            w.hide();
                            A.show()
                        }
                    }
                    E.stopPropagation();
                    E.preventDefault()
                },
                click: function(E) {
                    if (q.instant) {
                        B.activate()
                    } else {
                        if (j && m) {
                            B.deactivate()
                        } else {
                            if (!j) {
                                B.activate()
                            }
                        }
                        E.stopPropagation();
                        E.preventDefault()
                    }
                }
            });
            if (C) {
                z.append(A);
                if (v) {
                    z.append(w)
                }
                if (y) {
                    z.append(x)
                }
            } else {
                if (D.caption && D.showCaption) {
                    z.append(D.caption)
                } else {
                    z.append("&nbsp;")
                }
            }
            z.appendTo("#" + t);
            return this
        };
        this.bind = function(t, v) {
            var u = this,
            w;
            if (t && typeof t == "string" && typeof v == "function") {
                w = function() {
                    var x = Array.prototype.slice.call(arguments, 1);
                    v.apply(u, x)
                };
                e(k).bind(t, w);
                if (!v.gcunbind) {
                    v.gcunbind = {}
                }
                v.gcunbind[h + t] = w
            }
            return this
        };
        this.unbind = function(t, v) {
            var u = this,
            w;
            if (t && typeof t == "string" && typeof v == "function") {
                w = v.gcunbind && v.gcunbind[h + t];
                if (w) {
                    e(k).unbind(t, w)
                }
            }
            return this
        }
    };
    giscloud.ui.defaultTools = {
        pan: function() {
            return new giscloud.ui.Toolbar.Tool("pan", {
                styles: {
                    caption: "Pan",
                    showCaption: false,
                    cssClass: "gc-tool-pan",
                    active: "gc-tool-pan-active",
                    hover: "gc-tool-pan-hover"
                },
                actions: {
                    activation: function(g) {
                        g.pan()
                    }
                }
            })
        },
        zoom: function() {
            return new giscloud.ui.Toolbar.Tool("zoom", {
                styles: {
                    caption: "Zoom",
                    showCaption: false,
                    cssClass: "gc-tool-zoom",
                    active: "gc-tool-zoom-active",
                    hover: "gc-tool-zoom-hover"
                },
                actions: {
                    activation: function(g) {
                        g.areaZoom()
                    }
                }
            })
        },
        full: function() {
            return new giscloud.ui.Toolbar.Tool("full", {
                styles: {
                    caption: "Full",
                    showCaption: false,
                    cssClass: "gc-tool-full",
                    active: "gc-tool-full-active",
                    hover: "gc-tool-full-hover"
                },
                actions: {
                    activation: function(g) {
                        g.fullExtent()
                    }
                },
                instant: true
            })
        },
        measure: function() {
            return new giscloud.ui.Toolbar.Tool("measure", {
                styles: {
                    caption: "Measure",
                    showCaption: false,
                    cssClass: "gc-tool-measure",
                    active: "gc-tool-measure-active",
                    hover: "gc-tool-measure-hover"
                },
                actions: {
                    activation: function(g) {
                        g.measure()
                    }
                }
            })
        },
        select: function() {
            return new giscloud.ui.Toolbar.Tool("select", {
                styles: {
                    caption: "Select",
                    showCaption: false,
                    cssClass: "gc-tool-select",
                    active: "gc-tool-select-active",
                    hover: "gc-tool-select-hover"
                },
                actions: {
                    activation: function(g) {
                        g.select(true)
                    }
                }
            })
        },
        info: function() {
            return new giscloud.ui.Toolbar.Tool("info", {
                styles: {
                    caption: "Select",
                    showCaption: false,
                    cssClass: "gc-tool-info",
                    active: "gc-tool-info-active",
                    hover: "gc-tool-info-hover"
                },
                actions: {
                    activation: function(g) {
                        g.select(true)
                    }
                }
            })
        },
        areaSelect: function() {
            var h = a.oid(),
            g = function(k) {
                var j = new giscloud.Bounds(parseFloat(k.xMin), parseFloat(k.yMin), parseFloat(k.xMax), parseFloat(k.yMax)),
                m = a.refs[h];
                a.refs[h].selectFeaturesByBounds(m.activeLayer, j)
            };
            return new giscloud.ui.Toolbar.Tool("areaSelect", {
                styles: {
                    caption: "Select area",
                    showCaption: false,
                    cssClass: "gc-tool-areaselect",
                    active: "gc-tool-areaselect-active",
                    hover: "gc-tool-areaselect-hover"
                },
                actions: {
                    activation: function(j) {
                        j.loading.done(function() {
                            var k = this.instance;
                            a.refs[h] = this;
                            k.addEventListener("areaselection", g);
                            k.setTool("AreaSelection")
                        })
                    },
                    deactivation: function(j) {
                        j.loading.done(function() {
                            this.instance.removeEventListener("areaselection", g);
                            delete a.refs[h]
                        })
                    }
                }
            })
        },
        tool: function(g) {
            switch (g) {
            case "pan":
                return this.pan();
            case "zoom":
                return this.zoom();
            case "full":
                return this.full();
            case "measure":
                return this.measure();
            case "select":
                return this.select();
            case "info":
                return this.info();
            case "areaSelect":
                return this.areaSelect();
            default:
                return null
            }
        }
    }
})(window, giscloud.exposeJQuery(), giscloud.common()); 