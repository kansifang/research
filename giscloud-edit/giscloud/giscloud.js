(function(e, j, m, c) {
    var n = new e.Deferred(),
    a,
    k,
    f,
    o = new e.Deferred(),
    g,
    h;
    e(function() {
        try {
            if (a.oauth2 && !a.oauth2.thisIsOauthFrame()) {
                n.resolveWith(a, [a])
            }
        } catch(q) {
            console.log(q)
        }
    });
    a = {
        exposeJQuery: function() {
            return e
        },
        ready: function(q) {
            if (arguments.length === 0) {
                return n.promise()
            }
            if (typeof q === "function") {
                n.done(q)
            }
            return this
        },
        includeCss: function(v, w) {
            var r = new e.Deferred(),
            u = j.document.getElementsByTagName("head")[0],
            t = m.createElement("link"),
            q = function() {
                if (typeof w === "function" && !r.isResolved()) {
                    w()
                }
                r.resolve()
            };
            v += (v.indexOf("?") > -1 ? "&": "?") + "_nch=" + giscloud_config.nch;
            t.setAttribute("rel", "stylesheet");
            t.setAttribute("type", "text/css");
            t.setAttribute("href", v);
            t.onreadystatechange = function() {
                if (t.readyState === "complete" || t.readyState === "loaded") {
                    q()
                }
            };
            if (t.addEventListener) {
                t.addEventListener("load",
                function() {
                    q()
                },
                false)
            }
            t.onload = function() {
                q()
            };
            u.appendChild(t);
            return r.promise()
        },
        includeJs: function(v, w) {
            var r = new e.Deferred(),
            t = m.getElementsByTagName("head")[0],
            u = m.createElement("script"),
            q = function() {
                if (typeof w === "function" && !r.isResolved()) {
                    w()
                }
                r.resolve()
            };
            v += (v.indexOf("?") > -1 ? "&": "?") + "_nch=" + giscloud_config.nch;
            u.setAttribute("type", "text/javascript");
            u.setAttribute("src", v);
            u.onreadystatechange = function() {
                if (u.readyState === "complete" || u.readyState === "loaded") {
                    q()
                }
            };
            if (u.addEventListener) {
                u.addEventListener("load",
                function() {
                    q()
                },
                false)
            }
            u.onload = function() {
                q()
            };
            t.appendChild(u);
            return r.promise()
        },
        formats: {
            IFRAME: "iframe",
            HTML: "iframe",
            PNG: "png",
            JPEG: "jpg",
            SHAPEFILE: "shp",
            GPX: "gpx",
            MIF: "mif",
            GML: "gml",
            exportFormats: {
                SHAPEFILE: "shp",
                GPX: "gpx",
                MIF: "mif",
                GML: "gml"
            },
            renderFormats: {
                IFRAME: "iframe",
                PNG: "png",
                JPEG: "jpg"
            }
        },
        apiKey: function(q) {
            if (typeof q == "string") {
                h = q;
                return this
            } else {
                return h
            }
        },
        logDeferredResults: function(w, y, u, x) {
            var t, v = function() {
                console.log("DONE", arguments)
            },
            r = function() {
                console.log("FAIL", arguments)
            };
            try {
                if (e.isFunction(w.done) && e.isFunction(w.fail)) {
                    if (y != null && u == null && x == null) {
                        x = y;
                        y = null
                    }
                    t = w
                } else {
                    if (u == c) {
                        u = j
                    }
                    if (y == null) {
                        y = []
                    } else {
                        if (!e.isArray(y)) {
                            y = [y]
                        }
                    }
                    t = w.apply(u, y)
                }
                if (e.isFunction(t.done) && e.isFunction(t.fail)) {
                    t.done(v);
                    t.fail(r);
                    if (x) {
                        t.done(function(z) {
                            if (typeof x == "string") {
                                j[x] = z
                            } else {
                                x = z
                            }
                        })
                    }
                } else {
                    console.log("NOT DEFERRED", t)
                }
            } catch(q) {
                console.log("ERROR", q, w, y, u)
            }
        },
        common: function() {
            return k
        }
    };
    f = function() {
        var q = this,
        r;
        if (!o.isResolved()) {
            r = function() {
                var t = k.restHost() + "/assets/api/1/gcremote.php?restUrl=" + k.rest.url();
                g = new easyXDM.Rpc({
                    remote: t,
                    onReady: function() {
                        o.resolve(arguments)
                    }
                },
                {
                    remote: {
                        ping: {},
                        execute: {},
                        getJSON: {},
                        rest: {},
                        restGet: {},
                        restPost: {},
                        restPut: {},
                        restDelete: {}
                    },
                    local: {
                        restUrl: function() {
                            return k.rest.url()
                        },
                        pingback: function(u, v, w, x) {
                            console.log(JSON.stringify({
                                pingOrigin: v,
                                pingTime: x,
                                pingbackOrigin: u,
                                pingbackTime: w,
                                duration: w - x
                            }))
                        }
                    }
                })
            };
            if (typeof JSON !== "undefined") {
                r()
            } else {
                a.includeJs(k.apiHost() + "/libs/json2/json2.min.js").done(r)
            }
        }
        return o.promise()
    };
    a.pingRpc = function() {
        f().done(function() {
            g.ping(m.location, e.now())
        })
    };
    a.remoteGetJSON = function(r, u) {
        var t, q;
        q = new e.Deferred();
        t = function() {
            g.getJSON(r, u, q.resolve, q.reject)
        };
        if ( !! g) {
            t()
        } else {
            f().done(t)
        }
        return q.promise()
    };
    a.construct = function(r, q) {
        var t = {};
        if (q) {
            if (e.isArray(q)) {
                e.each(q,
                function(u, v) {
                    e.extend(t, v)
                })
            } else {
                e.extend(t, q)
            }
        }
        t.higher = t;
        r.prototype = t;
        return r
    };
    k = {
        restHost: giscloud_config.restHost,
        apiHost: giscloud_config.apiHost,
        apiHostname: giscloud_config.apiHostname,
        authHost: giscloud_config.authHost,
        liveSite: giscloud_config.liveSite,
        appSite: giscloud_config.appSite,
        isMobileBrowser: /android.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4)),
        clone: function(r) {
            var q = function() {};
            e.extend(true, q.prototype, r);
            return new q()
        },
        oid: function() {
            var q = Math.random,
            u = Math.ceil,
            t = (e.now().toString() + u(q() * 100000)).substr(3),
            v = u(q() * 15);
            return t.substr(v) + t.substr(0, v)
        },
        setError: function(q, t, r) {
            if (q.errors === c) {
                q.errors = []
            }
            q.errors.push({
                time: new Date(),
                src: t,
                msg: r
            })
        },
        highlight: function(r, u, t, q) {
            r.modifyObject(u.toString(), {
                color: 16760576,
                alpha: 100,
                from_color: 13421772,
                glow: {
                    color: 65280,
                    strength: 2,
                    blurX: 10,
                    blurY: 10
                }
            },
            "layer" + t + "||", q)
        },
        getHighlightAndSelectColors: function(u) {
            var x, q, y, w, r, t;
            if (u && u.length) {
                x = a.Color.fromString(u);
                hsv = x && x.hsv(true);
                if (hsv && hsv.length) {
                    w = hsv[1];
                    r = hsv[2];
                    if (w < 15) {
                        w = 100;
                        q = 180;
                        y = Math.ceil(r / 2 - 10);
                        r = 100
                    } else {
                        q = hsv[0] + 120;
                        y = hsv[0] - 120;
                        r += (100 - r) * 2 / 3;
                        r = Math.ceil(r)
                    }
                    return [a.Color.fromHsv(q, w, r).hex(), a.Color.fromHsv(y, w, r).hex()]
                }
            }
            return null
        },
        deferreds: {},
        refs: {},
        toXml: function(q, w) {
            var u = "",
            v, t, r;
            if (w === null || w === c || w === "") {
                return "<" + q + "/>"
            } else {
                if (typeof w === "object") {
                    u += "<" + q + ">";
                    if (e.isArray(w)) {
                        if (q[q.length - 1] === "s") {
                            r = q.substr(0, q.length - 1)
                        } else {
                            r = q
                        }
                        for (v = 0, t = w.length; v < t; v++) {
                            u += this.toXml(r, w[v])
                        }
                    } else {
                        for (v in w) {
                            if (w.hasOwnProperty(v)) {
                                u += this.toXml(v, w[v])
                            }
                        }
                    }
                    u += "</" + q + ">"
                } else {
                    u += "<" + q + ">" + w.toString() + "</" + q + ">"
                }
            }
            return u
        },
        rest: (function() {
            var q = function(t) {
                var u = t || {};
                if (u.sort) {
                    if (typeof u.sort === "string" || u.sort.length === c) {
                        u.order_by = u.sort
                    } else {
                        u.order_by = u.sort.join()
                    }
                    delete u.sort
                }
                if (u.page || u.perPage) {
                    u.page = u.page || 1;
                    u.perpage = u.perPage || 10;
                    delete u.page;
                    delete u.perPage
                }
                if (u.field && u.field.length && u.value && u.value.length) {
                    u.where = u.field + "='" + u.value + "'";
                    delete u.field;
                    delete u.value
                }
                return u
            },
            r = function() {
                var u = m.location,
                t = u.protocol + "//" + u.host + u.port;
                return k.liveSite().indexOf(t) === 0 || k.restHost().indexOf(t) === 0
            };
            this.url = function(v) {
                var w = m.location,
                u = w.protocol + "//" + w.host + w.port,
                t = k.liveSite().indexOf(u) === 0 ? k.liveSite() + "rest/1/": k.restHost() + "/1/";
                if (typeof v === "string") {
                    return t + v
                } else {
                    return t
                }
            };
            this.local = function(x, u, t, w) {
                var v;
                if (x === "get" || x === "GET") {
                    v = e.ajax({
                        url: this.url(t),
                        type: "GET",
                        cache: false,
                        dataType: "json",
                        data: w
                    })
                } else {
                    v = e.ajax({
                        url: this.url(t),
                        type: x,
                        cache: false,
                        dataType: "json",
                        accept: "application/json",
                        contentType: u || "application/x-www-form-urlencoded",
                        data: w
                    }).promise()
                }
                return v
            };
            this.call = function(A, x, z, w) {
                var v, t, u, y;
                z = q(z);
                u = a.oauth2.token();
                if (u) {
                    z.oauth_token = u
                }
                y = a.apiKey();
                if (y) {
                    z.api_key = y

                }
                if (r()) {
                    return this.local(A, w, x, z)
                }
                t = new e.Deferred();
                v = function() {
                    g.rest(A, w, x, z, u, y,
                    function(B) {
                        t.resolve.apply(t, B)
                    },
                    function() {
                        t.reject.apply(t, arguments && arguments[0] && arguments[0].message)
                    })
                };
                if ( !! g) {
                    v()
                } else {
                    f().done(v)
                }
                return t.promise()
            };
            this.get = function(w, x) {
                var v, t, u;
                x = q(x);
                u = a.oauth2.token();
                if (u) {
                    x.oauth_token = u
                }
                h = a.apiKey();
                if (h) {
                    x.api_key = h
                }
                if (r()) {
                    return this.local("GET", null, w, x)
                }
                t = new e.Deferred();
                v = function() {
                    g.restGet(w, x, t.resolve, t.reject)
                };
                if ( !! g) {
                    v()
                } else {
                    f().done(v)
                }
                return t.promise()
            };
            return this
        })()
    };
    e().busy("defaults", {
        img: k.apiHost() + "/assets/api/1/images/busy.gif"
    });
    j.giscloud = a
})(jQuery.noConflict(true), window, window.document);