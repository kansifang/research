 (function(j, h, k, f) {
    var e, c, m, g, a, n, o;
    giscloud.ui.LayerList = function(y, r) {
        var A = this,
        v = k.oid(),
        x = {},
        z,
        t,
        E,
        D,
        u,
        q,
        C,
        w,
        B;
        giscloud.layers.byMapId(y.mapId).done(function(F) {
            z = F;
            t = {};
            h.each(z,
            function(G, H) {
                t[H.id.toString()] = H
            });
            E = e(F, r, v, y);
            E.bind("before.jstree",
            function() {}).bind("check_node.jstree",
            function(G, H) {
                D(H.rslt.obj[0].id)
            }).bind("uncheck_node.jstree",
            function(G, H) {
                u(H.rslt.obj[0].id)
            }).bind("check_all.jstree",
            function(G, H) {
                q()
            }).bind("uncheck_all.jstree",
            function(G, H) {
                C()
            }).bind("select_node.jstree",
            function(H, I) {
                var G = I.rslt.obj[0].id.split("_");
                h(x).triggerHandler("select", ["select", G[1], G[2], t[G[2]]])
            }).bind("unselect_node.jstree",
            function(H, I) {
                var G = I.rslt.obj[0].id.split("_");
                h(x).triggerHandler("unselect", ["unselect", G[1], G[2], t[G[2]]])
            }).bind("dblclick.jstree",
            function(I) {
                var G = h(I.target).closest("li"),
                H = G.attr("id").split("_");
                h(x).triggerHandler("dblclick", ["dblclick", H[1], H[2], t[H[2]]])
            });
            h("#" + r).bind("move_node.jstree",
            function() {
                var G = n(E),
                H;
                H = {};
                h.each(y.layers,
                function(I, J) {
                    H[J.id] = J.instance.refId
                });
                y.instance.setLayersOrder(h.map(G,
                function(I) {
                    return H[I.id]
                }))
            })
        });
        this.bind = function(F, G) {
            var H = this,
            I = function() {
                var J = Array.prototype.slice.call(arguments, 1);
                G.apply(H, J)
            };
            h(x).bind(F, I);
            if (!G.gcunbind) {
                G.gcunbind = {}
            }
            G.gcunbind[v + F] = I;
            return this
        };
        this.unbind = function(F, G) {
            var H;
            H = G.gcunbind && G.gcunbind[v + F];
            h(x).unbind(F, H);
            return this
        };
        this.select = function(F) {
            if (F) {
                if (!h.isArray(F)) {
                    F = [F]
                }
                h.each(F,
                function(G, H) {
                    var I;
                    if (! (H instanceof giscloud.Layer)) {
                        H = t[H]
                    }
                    I = v + (H.type === "folder" ? "_folder_": "_layer_") + H.id;
                    E.jstree("select_node", "#" + I)
                })
            }
            return this
        };
        this.unselect = function(F) {
            if (F) {
                if (!h.isArray(F)) {
                    F = [F]
                }
                h.each(F,
                function(G, H) {
                    var I;
                    if (! (H instanceof giscloud.Layer)) {
                        H = t[H]
                    }
                    I = v + (H.type === "folder" ? "_folder_": "_layer_") + H.id;
                    E.jstree("deselect_node", "#" + I)
                })
            }
            return this
        };
        this.selected = function() {
            return h.map(E.jstree("get_selected"),
            function(F) {
                var G = F.id.split("_");
                return t[G[2]]
            })
        };
        this.check = function(F) {
            if (F) {
                if (!h.isArray(F)) {
                    F = [F]
                }
                h.each(F,
                function(G, H) {
                    var I;
                    if (! (H instanceof giscloud.Layer)) {
                        H = t[H]
                    }
                    I = v + (H.type === "folder" ? "_folder_": "_layer_") + H.id;
                    E.jstree("check_node", "#" + I)
                })
            }
            return this
        };
        this.uncheck = function(F) {
            if (F) {
                if (!h.isArray(F)) {
                    F = [F]
                }
                h.each(F,
                function(G, H) {
                    var I;
                    if (! (H instanceof giscloud.Layer)) {
                        H = t[H]
                    }
                    I = v + (H.type === "folder" ? "_folder_": "_layer_") + H.id;
                    E.jstree("uncheck_node", "#" + I)
                })
            }
            return this
        };
        this.checkAll = function() {
            E.jstree("check_all");
            return this
        };
        this.uncheckAll = function() {
            E.jstree("uncheck_all");
            return this
        };
        this.layers = function() {
            return z
        };
        this.width = function() {
            if (arguments.length === 0) {
                return h("#" + r).width()
            } else {
                h("#" + r).width(arguments[0]);
                return this
            }
        };
        this.height = function() {
            if (arguments.length === 0) {
                return h("#" + r).height()
            } else {
                h("#" + r).height(arguments[0]);
                return this
            }
        };
        this.layersOrder = function() {
            return n(E)
        };
        D = function(J) {
            var I, H, G, F = J.split("_");
            if (F[1] === "layer") {
                y.showLayer(F[2])
            } else {
                G = w(J);
                if (G) {
                    for (I = 0, H = G.length; I < H; I++) {
                        y.showLayer(G[I])
                    }
                }
            }
        };
        u = function(J) {
            var I, H, G, F = J.split("_");
            if (F[1] === "layer") {
                y.hideLayer(F[2])
            } else {
                G = w(J);
                if (G) {
                    for (I = 0, H = G.length; I < H; I++) {
                        y.hideLayer(G[I])
                    }
                }
            }
        };
        q = function() {
            h.each(y.layers,
            function(F, G) {
                G.visible(true)
            })
        };
        C = function() {
            h.each(y.layers,
            function(F, G) {
                G.visible(false)
            })
        };
        w = function(G) {
            var F = [];
            h("#" + G).find("li[rel!='style']").each(function(H, I) {
                if (this.id.indexOf("folder") === -1) {
                    F.push(this.id.split("_")[2])
                }
            });
            return a(F)
        };
        B = function(H, G) {
            var F = y.layerById(H);
            if (F) {
                F.selectable(G)
            }
        }
    };
    e = function(w, t, v, x) {
        var r, q = c(w, v),
        u = {
            plugins: ["themes", "json_data", "checkbox", "ui", "types", "dnd"],
            types: {
                max_depth: -2,
                max_children: -2,
                valid_children: ["layer", "folder"],
                types: {
                    layer: {
                        valid_children: ["style"]
                    },
                    folder: {
                        valid_children: ["layer", "folder"]
                    },
                    style: {
                        valid_children: [],
                        start_drag: false,
                        move_node: false,
                        hover_node: false,
                        dehover_node: false,
                        select_node: false
                    }
                }
            },
            json_data: {
                data: q
            },
            themes: {
                url: k.appSite() + "/libs/jstree/rc3/themes/giscloud/style.css",
                theme: "giscloud",
                dots: false
            },
            ui: {
                selected_parent_close: false
            },
            core: {
                animation: 0
            }
        };
        j.ccc = k;
        r = h("#" + t).bind("loaded.jstree",
        function(y) {
            o(h(y.target), x)
        }).jstree(u);
        return r
    };
    c = function(y, t) {
        var z, w, B, u, q, v, x, C = [],
        r = {},
        A = [];
        if (!y) {
            return {}
        }
        for (z = 0, w = y.length; z < w; z++) {
            B = y[z];
            u = null;
            if (B.type === "folder") {
                q = "folder" + B.id;
                if (r[q]) {
                    r[q].obj = B;
                    u = r[q]
                } else {
                    u = {
                        id: q,
                        obj: B,
                        nodes: []
                    };
                    r[q] = u
                }
            } else {
                q = "layer" + B.id;
                u = {
                    id: q,
                    obj: B
                }
            }
            if (B.parent === null) {
                C.push(u)
            } else {
                x = "folder" + B.parent;
                if (!r[x]) {
                    r[x] = {
                        id: B.parent,
                        obj: null,
                        nodes: []
                    }
                }
                r[x].nodes.push(u)
            }
        }
        v = function(E) {
            var D;
            D = E.sort(g);
            return h.map(D,
            function(F) {
                var G;
                if (F.nodes) {
                    return {
                        data: {
                            title: F.obj.name,
                            icon: m("folder")
                        },
                        children: v(F.nodes),
                        attr: {
                            rel: "folder",
                            id: t + "_folder_" + F.obj.id,
                            "class": "jstree-undetermined"
                        }
                    }
                } else {
                    G = F.obj.styles;
                    if (G && G.length > 1) {
                        return {
                            data: {
                                title: F.obj.name,
                                icon: m(null, "multi")
                            },
                            attr: {
                                rel: "layer",
                                id: t + "_layer_" + F.obj.id,
                                "class": F.obj.visible === "t" ? "jstree-checked": ""
                            },
                            children: h.map(G,
                            function(H) {
                                return {
                                    data: {
                                        title: H.expression,
                                        icon: m("geometry", H.symbol || {
                                            type: F.obj.type,
                                            color: H.color,
                                            border: H.bordercolor
                                        })
                                    },
                                    attr: {
                                        rel: "style",
                                        "class": "jstree-style-node"
                                    }
                                }
                            })
                        }
                    } else {
                        G = G && G[0];
                        return {
                            data: {
                                title: F.obj.name,
                                icon: m(F.obj.type, G && (G.symbol || (G.url && G) || {
                                    type: F.obj.type,
                                    color: G.color,
                                    border: G.bordercolor
                                }))
                            },
                            attr: {
                                rel: "layer",
                                id: t + "_layer_" + F.obj.id,
                                "class": F.obj.visible === "t" ? "jstree-checked": ""
                            }
                        }
                    }
                }
            })
        };
        A = v(C);
        return A
    };
    g = function(u, t) {
        var r, q;
        if (typeof u.obj.order === "string") {
            r = parseInt(u.obj.order, 10);
            q = parseInt(t.obj.order, 10)
        } else {
            r = u.obj.order;
            q = t.obj.order
        }
        return q - r
    };
    n = function(q, r) {
        var t = 0,
        u = function(v) {
            return h.map(v.find("ul:first").children(),
            function(x) {
                var y = h(x),
                w;
                if (y.is("[rel='folder']")) {
                    return u(y)
                } else {
                    if (r) {
                        return t++
                    } else {
                        w = x.id.split("_");
                        return {
                            id: w[2],
                            type: w[1],
                            order: t++
                        }
                    }
                }
            })
        };
        return u(q)
    };
    a = function(v) {
        var t, r, u, q = [];
        for (t = 0, r = v.length; t < r; t++) {
            u = v[t];
            if (Object.prototype.toString.call(u) === "[object Array]") {
                q = q.concat(a(u))
            } else {
                q.push(u)
            }
        }
        return q
    };
    m = function(r, t) {
        var q, u = document.location.protocol;
        if (t === "multi") {
            q = "/assets/images/layertree/color_swatch.gif"
        } else {
            switch (r) {
            case "folder":
                q = "/assets/images/layertree/folder.gif";
                break;
            case "raster":
                q = "/assets/images/image.gif";
                break;
            case "wms":
            case "tile":
                q = "/assets/images/world.gif";
                break;
            case "point":
            case "line":
            case "polygon":
            case "geometry":
                q = t.url ? "/assets/icon.php?p=" + encodeURI(t.url) : "/assets/icon.php?type=" + t.type + "&color=" + t.color + "&border=" + t.border + "&bw=0&size=10";
                break;
            default:
                return null
            }
        }
        return k.apiHost() + q
    };
    o = function(q, r) {
        h("<ins/>", {
            "class": "jstree-no-lock-icon",
            click: function(w) {
                if (!r) {
                    return
                }
                var u = h(w.target),
                v = u.closest("li"),
                t = v.attr("id").split("_");
                if (u.hasClass("jstree-lock-icon")) {
                    r.layerById(t[2]).selectable(true);
                    u.removeClass("jstree-lock-icon")
                } else {
                    r.layerById(t[2]).selectable(false);
                    u.addClass("jstree-lock-icon")
                }
                w.stopPropagation();
                w.preventDefault()
            }
        }).insertAfter(q.find("li[rel='layer'] > a > ins.jstree-checkbox"))
    }
})(window, giscloud.exposeJQuery(), giscloud.common());