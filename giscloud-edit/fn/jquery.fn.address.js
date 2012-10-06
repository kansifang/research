(function(a) {
    a.address = (function() {
        var f = function(at) {
            a(a.address).trigger(a.extend(a.Event(at), (function() {
                var ax = {},
                aw = a.address.parameterNames();
                for (var av = 0,
                au = aw.length; av < au; av++) {
                    ax[aw[av]] = a.address.parameter(aw[av])
                }
                return {
                    value: a.address.value(),
                    path: a.address.path(),
                    pathNames: a.address.pathNames(),
                    parameterNames: aw,
                    parameters: ax,
                    queryString: a.address.queryString()
                }
            }).call(a.address)))
        },
        n = function(av, au, at) {
            a().bind.apply(a(a.address), Array.prototype.slice.call(arguments));
            return a.address
        },
        V = function() {
            return (aj.pushState && M.state !== Q)
        },
        P = function() {
            return ("/" + af.pathname.replace(new RegExp(M.state), "") + af.search + (ab() ? "#" + ab() : "")).replace(X, "/")
        },
        ab = function() {
            var at = af.href.indexOf("#");
            return at != -1 ? K(af.href.substr(at + 1), ak) : ""
        },
        G = function() {
            return V() ? P() : ab()
        },
        c = function() {
            return window
        },
        q = function() {
            return "javascript"
        },
        aq = function(at) {
            at = at.toString();
            return (M.strict && at.substr(0, 1) != "/" ? "/": "") + at
        },
        K = function(at, au) {
            if (M.crawlable && au) {
                return (at !== "" ? "!": "") + at
            }
            return at.replace(/^\!/, "")
        },
        aa = function(at, au) {
            return parseInt(at.css(au), 10)
        },
        o = function(ax) {
            var au, aw;
            for (var av = 0,
            at = ax.childNodes.length; av < at; av++) {
                try {
                    if ("src" in ax.childNodes[av] && ax.childNodes[av].src) {
                        au = String(ax.childNodes[av].src)
                    }
                } catch(ay) {}
                aw = o(ax.childNodes[av]);
                if (aw) {
                    au = aw
                }
            }
            return au
        },
        ai = function() {
            if (!z) {
                var au = G(),
                at = ad != au;
                if (at) {
                    if (k && w < 7) {
                        af.reload()
                    } else {
                        if (k && w < 8 && M.history) {
                            t(N, 50)
                        }
                        ad = au;
                        ag(ak)
                    }
                }
            }
        },
        ag = function(at) {
            f(O);
            f(at ? j: ap);
            t(D, 10)
        },
        D = function() {
            if (M.tracker !== "null" && M.tracker !== null) {
                var at = a.isFunction(M.tracker) ? M.tracker: Y[M.tracker],
                au = (af.pathname + af.search + (a.address && !V() ? a.address.value() : "")).replace(/\/\//, "/").replace(/^\/$/, "");
                if (a.isFunction(at)) {
                    at(au)
                } else {
                    if (a.isFunction(Y.urchinTracker)) {
                        Y.urchinTracker(au)
                    } else {
                        if (Y.pageTracker !== Q && a.isFunction(Y.pageTracker._trackPageview)) {
                            Y.pageTracker._trackPageview(au)
                        } else {
                            if (Y._gaq !== Q && a.isFunction(Y._gaq.push)) {
                                Y._gaq.push(["_trackPageview", decodeURI(au)])
                            }
                        }
                    }
                }
            }
        },
        N = function() {
            var at = q() + ":" + ak + ";document.open();document.writeln('<html><head><title>" + an.title.replace("'", "\\'") + "</title><script>var " + F + ' = "' + encodeURIComponent(G()) + (an.domain != af.hostname ? '";document.domain="' + an.domain: "") + "\";<\/script></head></html>');document.close();";
            if (w < 7) {
                g.src = at
            } else {
                g.contentWindow.location.replace(at)
            }
        },
        al = function() {
            if (m && e != -1) {
                var au, at = m.substr(e + 1).split("&");
                for (i = 0; i < at.length; i++) {
                    au = at[i].split("=");
                    if (/^(autoUpdate|crawlable|history|strict|wrap)$/.test(au[0])) {
                        M[au[0]] = (isNaN(au[1]) ? /^(true|yes)$/i.test(au[1]) : (parseInt(au[1], 10) !== 0))
                    }
                    if (/^(state|tracker)$/.test(au[0])) {
                        M[au[0]] = au[1]
                    }
                }
                m = null
            }
            ad = G()
        },
        Z = function() {
            if (!ae) {
                ae = J;
                al();
                var av = function() {
                    C.call(this);
                    x.call(this)
                },
                au = a("body").ajaxComplete(av);
                av();
                if (M.wrap) {
                    var aw = a("body > *").wrapAll('<div style="padding:' + (aa(au, "marginTop") + aa(au, "paddingTop")) + "px " + (aa(au, "marginRight") + aa(au, "paddingRight")) + "px " + (aa(au, "marginBottom") + aa(au, "paddingBottom")) + "px " + (aa(au, "marginLeft") + aa(au, "paddingLeft")) + 'px;" />').parent().wrap('<div id="' + F + '" style="height:100%;overflow:auto;position:relative;' + (y && !window.statusbar.visible ? "resize:both;": "") + '" />');
                    a("html, body").css({
                        height: "100%",
                        margin: 0,
                        padding: 0,
                        overflow: "hidden"
                    });
                    if (y) {
                        a('<style type="text/css" />').appendTo("head").text("#" + F + "::-webkit-resizer { background-color: #fff; }")
                    }
                }
                if (k && w < 8) {
                    var at = an.getElementsByTagName("frameset")[0];
                    g = an.createElement((at ? "": "i") + "frame");
                    if (at) {
                        at.insertAdjacentElement("beforeEnd", g);
                        at[at.cols ? "cols": "rows"] += ",0";
                        g.noResize = J;
                        g.frameBorder = g.frameSpacing = 0
                    } else {
                        g.style.display = "none";
                        g.style.width = g.style.height = 0;
                        g.tabIndex = -1;
                        an.body.insertAdjacentElement("afterBegin", g)
                    }
                    t(function() {
                        a(g).bind("load",
                        function() {
                            var ax = g.contentWindow;
                            ad = ax[F] !== Q ? ax[F] : "";
                            if (ad != G()) {
                                ag(ak);
                                af.hash = K(ad, J)
                            }
                        });
                        if (g.contentWindow[F] === Q) {
                            N()
                        }
                    },
                    50)
                }
                t(function() {
                    f("init");
                    ag(ak)
                },
                1);
                if (!V()) {
                    if ((k && w > 7) || (!k && ("on" + ac) in Y)) {
                        if (Y.addEventListener) {
                            Y.addEventListener(ac, ai, ak)
                        } else {
                            if (Y.attachEvent) {
                                Y.attachEvent("on" + ac, ai)
                            }
                        }
                    } else {
                        A(ai, 50)
                    }
                }
            }
        },
        C = function() {
            var aw, ay = a("a"),
            ax = ay.size(),
            au = 1,
            at = -1,
            av = function() {
                if (++at != ax) {
                    aw = a(ay.get(at));
                    if (aw.is('[rel*="address:"]')) {
                        aw.address()
                    }
                    t(av, au)
                }
            };
            t(av, au)
        },
        v = function() {
            if (ad != G()) {
                ad = G();
                ag(ak)
            }
        },
        u = function() {
            if (Y.removeEventListener) {
                Y.removeEventListener(ac, ai, ak)
            } else {
                if (Y.detachEvent) {
                    Y.detachEvent("on" + ac, ai)
                }
            }
        },
        x = function() {
            if (M.crawlable) {
                var au = af.pathname.replace(/\/$/, ""),
                at = "_escaped_fragment_";
                if (a("body").html().indexOf(at) != -1) {
                    a('a[href]:not([href^=http]), a[href*="' + document.domain + '"]').each(function() {
                        var av = a(this).attr("href").replace(/^http:/, "").replace(new RegExp(au + "/?$"), "");
                        if (av === "" || av.indexOf(at) != -1) {
                            a(this).attr("href", "#" + av.replace(new RegExp("/(.*)\\?" + at + "=(.*)$"), "!$2"))
                        }
                    })
                }
            }
        },
        Q,
        F = "jQueryAddress",
        ah = "string",
        ac = "hashchange",
        r = "init",
        O = "change",
        j = "internalChange",
        ap = "externalChange",
        J = true,
        ak = false,
        M = {
            autoUpdate: J,
            crawlable: ak,
            history: J,
            strict: J,
            wrap: ak
        },
        I = a.browser,
        w = parseFloat(a.browser.version),
        am = I.mozilla,
        k = I.msie,
        U = I.opera,
        y = I.webkit || I.safari,
        ao = ak,
        Y = c(),
        an = Y.document,
        aj = Y.history,
        af = Y.location,
        A = setInterval,
        t = setTimeout,
        X = /\/{2,9}/g,
        ar = navigator.userAgent,
        g,
        S,
        m = o(document),
        e = m ? m.indexOf("?") : -1,
        R = an.title,
        z = ak,
        ae = ak,
        W = J,
        T = J,
        E = ak,
        H = {},
        ad = G();
        if (k) {
            w = parseFloat(ar.substr(ar.indexOf("MSIE") + 4));
            if (an.documentMode && an.documentMode != w) {
                w = an.documentMode != 8 ? 7 : 8
            }
            var B = an.onpropertychange;
            an.onpropertychange = function() {
                if (B) {
                    B.call(an)
                }
                if (an.title != R && an.title.indexOf("#" + G()) != -1) {
                    an.title = R
                }
            }
        }
        ao = (am && w >= 1) || (k && w >= 6) || (U && w >= 9.5) || (y && w >= 523);
        if (ao) {
            if (U) {
                history.navigationMode = "compatible"
            }
            if (document.readyState == "complete") {
                var h = setInterval(function() {
                    if (a.address) {
                        Z();
                        clearInterval(h)
                    }
                },
                50)
            } else {
                al();
                a(Z)
            }
            a(window).bind("popstate", v).bind("unload", u)
        } else {
            if (!ao && ab() !== "") {
                af.replace(af.href.substr(0, af.href.indexOf("#")))
            } else {
                D()
            }
        }
        return {
            bind: function(au, av, at) {
                return n(au, av, at)
            },
            init: function(at) {
                return n(r, at)
            },
            change: function(at) {
                return n(O, at)
            },
            internalChange: function(at) {
                return n(j, at)
            },
            externalChange: function(at) {
                return n(ap, at)
            },
            baseURL: function() {
                var at = af.href;
                if (at.indexOf("#") != -1) {
                    at = at.substr(0, at.indexOf("#"))
                }
                if (/\/$/.test(at)) {
                    at = at.substr(0, at.length - 1)
                }
                return at
            },
            autoUpdate: function(at) {
                if (at !== Q) {
                    M.autoUpdate = at;
                    return this
                }
                return M.autoUpdate
            },
            crawlable: function(at) {
                if (at !== Q) {
                    M.crawlable = at;
                    return this
                }
                return M.crawlable
            },
            history: function(at) {
                if (at !== Q) {
                    M.history = at;
                    return this
                }
                return M.history
            },
            state: function(at) {
                if (at !== Q) {
                    M.state = at;
                    var au = P();
                    if (M.state !== Q) {
                        if (aj.pushState) {
                            if (au.substr(0, 3) == "/#/") {
                                af.replace(M.state.replace(/^\/$/, "") + au.substr(2))
                            }
                        } else {
                            if (au != "/" && au.replace(/^\/#/, "") != ab()) {
                                t(function() {
                                    af.replace(M.state.replace(/^\/$/, "") + "/#" + au)
                                },
                                1)
                            }
                        }
                    }
                    return this
                }
                return M.state
            },
            strict: function(at) {
                if (at !== Q) {
                    M.strict = at;
                    return this
                }
                return M.strict
            },
            tracker: function(at) {
                if (at !== Q) {
                    M.tracker = at;
                    return this
                }
                return M.tracker
            },
            wrap: function(at) {
                if (at !== Q) {
                    M.wrap = at;
                    return this
                }
                return M.wrap
            },
            update: function() {
                E = J;
                this.value(ad);
                E = ak;
                return this
            },
            title: function(at) {
                if (at !== Q) {
                    t(function() {
                        R = an.title = at;
                        if (T && g && g.contentWindow && g.contentWindow.document) {
                            g.contentWindow.document.title = at;
                            T = ak
                        }
                        if (!W && am) {
                            af.replace(af.href.indexOf("#") != -1 ? af.href: af.href + "#")
                        }
                        W = ak
                    },
                    50);
                    return this
                }
                return an.title
            },
            value: function(at) {
                if (at !== Q) {
                    at = aq(at);
                    if (at == "/") {
                        at = ""
                    }
                    if (ad == at && !E) {
                        return
                    }
                    W = J;
                    ad = at;
                    if (M.autoUpdate || E) {
                        ag(J);
                        if (V()) {
                            aj[M.history ? "pushState": "replaceState"]({},
                            "", M.state.replace(/\/$/, "") + (ad === "" ? "/": ad))
                        } else {
                            z = J;
                            if (y) {
                                if (M.history) {
                                    af.hash = "#" + K(ad, J)
                                } else {
                                    af.replace("#" + K(ad, J))
                                }
                            } else {
                                if (ad != G()) {
                                    if (M.history) {
                                        af.hash = "#" + K(ad, J)
                                    } else {
                                        af.replace("#" + K(ad, J))
                                    }
                                }
                            }
                            if ((k && w < 8) && M.history) {
                                t(N, 50)
                            }
                            if (y) {
                                t(function() {
                                    z = ak
                                },
                                1)
                            } else {
                                z = ak
                            }
                        }
                    }
                    return this
                }
                if (!ao) {
                    return null
                }
                return aq(ad)
            },
            path: function(au) {
                if (au !== Q) {
                    var at = this.queryString(),
                    av = this.hash();
                    this.value(au + (at ? "?" + at: "") + (av ? "#" + av: ""));
                    return this
                }
                return aq(ad).split("#")[0].split("?")[0]
            },
            pathNames: function() {
                var au = this.path(),
                at = au.replace(X, "/").split("/");
                if (au.substr(0, 1) == "/" || au.length === 0) {
                    at.splice(0, 1)
                }
                if (au.substr(au.length - 1, 1) == "/") {
                    at.splice(at.length - 1, 1)
                }
                return at
            },
            queryString: function(au) {
                if (au !== Q) {
                    var av = this.hash();
                    this.value(this.path() + (au ? "?" + au: "") + (av ? "#" + av: ""));
                    return this
                }
                var at = ad.split("?");
                return at.slice(1, at.length).join("?").split("#")[0]
            },
            parameter: function(au, aC, aw) {
                var aA, ay;
                if (aC !== Q) {
                    var aB = this.parameterNames();
                    ay = [];
                    aC = aC ? aC.toString() : "";
                    for (aA = 0; aA < aB.length; aA++) {
                        var ax = aB[aA],
                        aD = this.parameter(ax);
                        if (typeof aD == ah) {
                            aD = [aD]
                        }
                        if (ax == au) {
                            aD = (aC === null || aC === "") ? [] : (aw ? aD.concat([aC]) : [aC])
                        }
                        for (var az = 0; az < aD.length; az++) {
                            ay.push(ax + "=" + aD[az])
                        }
                    }
                    if (a.inArray(au, aB) == -1 && aC !== null && aC !== "") {
                        ay.push(au + "=" + aC)
                    }
                    this.queryString(ay.join("&"));
                    return this
                }
                aC = this.queryString();
                if (aC) {
                    var at = [];
                    ay = aC.split("&");
                    for (aA = 0; aA < ay.length; aA++) {
                        var av = ay[aA].split("=");
                        if (av[0] == au) {
                            at.push(av.slice(1).join("="))
                        }
                    }
                    if (at.length !== 0) {
                        return at.length != 1 ? at: at[0]
                    }
                }
            },
            parameterNames: function() {
                var at = this.queryString(),
                aw = [];
                if (at && at.indexOf("=") != -1) {
                    var ax = at.split("&");
                    for (var av = 0; av < ax.length; av++) {
                        var au = ax[av].split("=")[0];
                        if (a.inArray(au, aw) == -1) {
                            aw.push(au)
                        }
                    }
                }
                return aw
            },
            hash: function(au) {
                if (au !== Q) {
                    this.value(ad.split("#")[0] + (au ? "#" + au: ""));
                    return this
                }
                var at = ad.split("#");
                return at.slice(1, at.length).join("#")
            }
        }
    })();
    a.fn.address = function(c) {
        if (!a(this).attr("address")) {
            var e = function(g) {
                if (g.shiftKey || g.ctrlKey || g.metaKey) {
                    return true
                }
                if (a(this).is("a")) {
                    var f = c ? c.call(this) : /address:/.test(a(this).attr("rel")) ? a(this).attr("rel").split("address:")[1].split(" ")[0] : a.address.state() !== undefined && a.address.state() != "/" ? a(this).attr("href").replace(new RegExp("^(.*" + a.address.state() + "|\\.)"), "") : a(this).attr("href").replace(/^(#\!?|\.)/, "");
                    a.address.value(f);
                    g.preventDefault()
                }
            };
            a(this).click(e).live("click", e).live("submit",
            function(h) {
                if (a(this).is("form")) {
                    var g = a(this).attr("action"),
                    f = c ? c.call(this) : (g.indexOf("?") != -1 ? g.replace(/&$/, "") : g + "?") + a(this).serialize();
                    a.address.value(f);
                    h.preventDefault()
                }
            }).attr("address", true)
        }
        return this
    }
})(jQuery); 