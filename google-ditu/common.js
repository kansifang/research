function tick() {};

function getTick() {};

function actionData() {};

function branch() {};

function done() {};

function setFlowType() {};

function beforeReport() {};
(function () {
    var a = function (d) {
        this.t = {};
        this.tick = function (d, i, e) {
            this.t[d] = [void 0 != e ? e : (new Date).getTime(), i]
        };
        this.tick("start", null, d)
    },
        b = new a;
    window.gmapstiming = {
        Timer: a,
        load: b
    };
    if (window.performance && window.performance.timing) {
        var c = window.performance.timing,
            f = window.gmapstiming.load,
            g = c.navigationStart,
            h = c.responseStart;
        0 < g && h >= g && (f.tick("_wtsrt", void 0, g), f.tick("wtsrt_", "_wtsrt", h), f.tick("tbsd_", "wtsrt_"))
    }
    try {
        var j = null;
        window.chrome && window.chrome.csi && (j = Math.floor(window.chrome.csi().pageT), f && 0 < g && (f.tick("_tbnd", void 0, window.chrome.csi().startE), f.tick("tbnd_", "_tbnd", g)));
        null == j && window.gtbExternal && (j = window.gtbExternal.pageT());
        null == j && window.external && (j = window.external.pageT, f && 0 < g && (f.tick("_tbnd", void 0, window.external.startE), f.tick("tbnd_", "_tbnd", g)));
        j && (window.gmapstiming.pt = j)
    } catch (k) {};
})();


(function () {
    try {
        var f = !0,
            j = !1;
        var aa = function (a, b, c, d) {
            d = d || {};
            d._sn = ["cfg", b, c].join(".");
            window.gbar.logger.ml(a, d)
        };
        var k = window.gbar = window.gbar || {},
            l = window.gbar.i = window.gbar.i || {},
            m = {},
            n;

        function _tvn(a, b) {
            var c = parseInt(a, 10);
            return isNaN(c) ? b : c
        }
        function _tvf(a, b) {
            var c = parseFloat(a);
            return isNaN(c) ? b : c
        }
        function _tvv(a) {
            return !!a
        }
        function p(a, b, c) {
            (c || k)[a] = b
        }
        k.bv = {
            n: _tvn("2", 0),
            r: "r_gc.r_pw.",
            f: "",
            m: _tvn("0", 1)
        };

        function q(a, b, c) {
            var d = "on" + b;
            if (a.addEventListener) a.addEventListener(b, c, j);
            else if (a.attachEvent) a.attachEvent(d, c);
            else {
                var g = a[d];
                a[d] = function () {
                    var a = g.apply(this, arguments),
                        b = c.apply(this, arguments);
                    return void 0 == a ? b : void 0 == b ? a : b && a
                }
            }
        }
        var r = function (a) {
            return function () {
                return k.bv.m == a
            }
        },
            ba = r(1),
            ca = r(2);
        p("sb", ba);
        p("kn", ca);
        l.a = _tvv;
        l.b = _tvf;
        l.c = _tvn;
        l.i = aa;
        var da = window.gbar.i.i;
        var s, t, u, v;

        function ea(a) {
            u = a
        }
        function fa(a) {
            var b = u && window.encodeURIComponent && !a.href.match(/^http[s]?:\/\/accounts\.google\.[^/]*\/ClearSID/i) && !a.href.match(/^http[s]?:\/\/[^/]*\/accounts\/ClearSID/i) && encodeURIComponent(u());
            b && (a.href = a.href.replace(/([?&]continue=)[^&]*/, "$1" + b))
        }
        function ga(a) {
            window.gApplication && (a.href = window.gApplication.getTabUrl(a.href))
        }

        function ha(a) {
            var b = document.forms[0].q,
                c = window.encodeURIComponent && b && b.value,
                b = b && b.placeholder;
            c && c != b && (a.href = a.href.replace(/([?&])q=[^&]*|$/, function (a, b) {
                return (b || "&") + "q=" + encodeURIComponent(c)
            }))
        }
        n = l.a("1") ? ga : ha;
        var ia = ea,
            ja = fa;

        function w(a, b, c, d, g, e) {
            var i = document.getElementById(a);
            if (i) {
                var h = i.style;
                h.left = d ? "auto" : b + "px";
                h.right = d ? b + "px" : "auto";
                h.top = c + "px";
                h.visibility = t ? "hidden" : "visible";
                g && e ? (h.width = g + "px", h.height = e + "px") : (w(s, b, c, d, i.offsetWidth, i.offsetHeight), t = t ? "" : a)
            }
        }
        var x = [],
            ka = function (a, b) {
                x.push(b)
            },
            la = function (a) {
                var a = a || window.event,
                    b = a.target || a.srcElement;
                a.cancelBubble = f;
                null == s && (a = document.createElement(Array.every || window.createPopup ? "iframe" : "div"), a.frameBorder = "0", s = a.id = "gbs", a.src = "javascript:''", b.parentNode.appendChild(a), q(document, "click", A));
                var c = b,
                    b = 0;
                "gb3" != c.className && (c = c.parentNode);
                var a = c.getAttribute("aria-owns") || "gbi",
                    d = c.offsetWidth,
                    g = 20 < c.offsetTop ? 46 : 24;
                document.getElementById("tphdr") && (g -= 3);
                var e = j;
                do b += c.offsetLeft || 0;
                while (c = c.offsetParent);
                var c = (document.documentElement.clientWidth || document.body.clientWidth) - b - d,
                    i, d = document.body,
                    h = document.defaultView;
                h && h.getComputedStyle ? (d = h.getComputedStyle(d, "")) && (i = d.direction) : i = d.currentStyle ? d.currentStyle.direction : d.style.direction;
                i = "rtl" == i;
                if ("gbi" == a) {
                    for (d = 0; h = x[d++];) h();
                    B(null, window.navExtra);
                    i && (b = c, e = f)
                } else i || (b = c, e = f);
                t != a && A();
                w(a, b, g, e)
            },
            A = function () {
                t && w(t, 0, 0)
            },
            B = function (a, b) {
                var c, d = document.getElementById("gbi"),
                    g = a;
                g || (g = d.firstChild);
                for (; b && (c = b.pop());) {
                    var e = d,
                        i = c,
                        h = g;
                    v || (v = "gb2");
                    e.insertBefore(i, h).className = v
                }
            },
            ma = function (a, b, c) {
                if ((b = document.getElementById(b)) && a) {
                    a.className = "gb4";
                    var d = document.createElement("span");
                    d.appendChild(a);
                    d.appendChild(document.createTextNode(" | "));
                    d.id = c;
                    b.appendChild(d)
                }
            },
            na = function () {
                return document.getElementById("gb_70")
            };
        p("qs", n);
        p("setContinueCb", ia);
        p("pc", ja);
        p("tg", la);
        p("close", A);
        p("addLink", ma);
        p("almm", B);
        p("si", na);
        p("adh", ka);
        var C = function () {},
            D = function () {},
            G = function (a) {
                var b = new Image,
                    c = E;
                b.onerror = b.onload = b.onabort = function () {
                    try {
                        delete F[c]
                    } catch (a) {}
                };
                F[c] = b;
                b.src = a;
                E = c + 1
            },
            F = [],
            E = 0;
        p("logger", {
            il: D,
            ml: C,
            log: G
        });
        var H = window.gbar.logger;
        var oa = l.a("1"),
            I = {},
            pa = {},
            J = [],
            qa = function (a, b) {
                J.push([a, b])
            },
            ra = function (a, b) {
                I[a] = b
            },
            sa = function (a) {
                return a in I
            },
            K = {},
            L = function (a, b) {
                K[a] || (K[a] = []);
                K[a].push(b)
            },
            ta = function (a) {
                L("m", a)
            },
            M = function (a, b) {
                var c = document.createElement("script");
                c.src = a;
                oa && (c.async = f); - 1 == navigator.userAgent.search(/MSIE/) && (c.onerror = function () {
                    c.onerror = null;
                    C(Error("Bundle load failed: name=" + (b || "UNK") + " url=" + a))
                });
                (document.getElementById("xjsc") || document.body).appendChild(c)
            },
            O = function (a) {
                for (var b = 0, c;
                (c = J[b]) && !(c[0] == a); ++b);
                c && !c[1].l && !c[1].s && (c[1].s = f, N(2, a), c[1].url && M(c[1].url, a), c[1].libs && m.d && m.d(c[1].libs))
            },
            P = function (a) {
                L("gc", a)
            },
            Q = null,
            ua = function (a) {
                Q = a
            },
            N = function (a, b, c) {
                if (Q) {
                    a = {
                        t: a,
                        b: b
                    };
                    if (c) for (var d in c) a[d] = c[d];
                    try {
                        Q(a)
                    } catch (g) {}
                }
            };
        p("mdc", I);
        p("mdi", pa);
        p("bnc", J);
        p("qGC", P);
        p("qm", ta);
        p("qd", K);
        p("lb", O);
        p("mcf", ra);
        p("bcf", qa);
        p("aq", L);
        p("mdd", "");
        p("has", sa);
        p("trh", ua);
        p("tev", N);
        var R = l.b("0.001", 1.0E-4),
            S = 0;

        function _mlToken(a, b) {
            try {
                if (1 > S) {
                    S++;
                    var c, d = a,
                        g = b || {},
                        e = encodeURIComponent,
                        i = "es_plusone_gc_20120731.0_p0",
                        h = ["//www.google.com/gen_204?atyp=i&zx=", (new Date).getTime(), "&jexpid=", e("17483"), "&srcpg=", e("prop=8"), "&jsr=", Math.round(1 / R), "&ogf=", k.bv.f, "&ogrp=", e("1"), "&ogv=", e("1348253329.0"), i ? "&oggv=" + e(i) : "", "&ogd=", e("cn"), "&ogl=", e("zh-CN")];
                    g._sn && (g._sn = "og." + g._sn);
                    for (var y in g) h.push("&"), h.push(e(y)), h.push("="), h.push(e(g[y]));
                    h.push("&emsg=");
                    h.push(e(d.name + ":" + d.message));
                    var z = h.join("");
                    T(z) && (z = z.substr(0, 2E3));
                    c = z;
                    var za = window.gbar.logger._aem(a, c);
                    G(za)
                }
            } catch (Ka) {}
        }
        var T = function (a) {
            return 2E3 <= a.length
        },
            va = function (a, b) {
                return b
            };

        function U(a) {
            C = a;
            p("_itl", T, H);
            p("_aem", va, H);
            p("ml", C, H);
            a = {};
            I.er = a
        }
        l.a("") ? U(function (a) {
            throw a;
        }) : l.a("1") && Math.random() < R && U(_mlToken);
        J.push(["m",
        {
            url: "//ssl.gstatic.com/gb/js/scm_5c5215de048693b7716ff9478b1f62ce.js"
        }]);
        k.mcf("c", {});
        k.sg = {
            c: ""
        };
        if (l.a("1")) {
            var wa = l.a("");
            J.push(["gc",
            {
                auto: wa,
                url: "//ssl.gstatic.com/gb/js/abc/gci_91f30755d6a6b787dcc2a4062e6e9824.js",
                libs: "googleapis.client:plusone"
            }]);
            var xa = {
                version: "gci_91f30755d6a6b787dcc2a4062e6e9824.js",
                index: "",
                lang: "zh-CN"
            };
            I.gc = xa;
            var V = function (a) {
                window.googleapis && window.iframes ? a && a() : (a && P(a), O("gc"))
            };
            p("lGC", V);
            l.a("1") && p("lPWF", V)
        };
        window.__PVT = "";
        if (l.a("1") && l.a("1")) {
            var W = function (a) {
                V(function () {
                    L("pw", a);
                    O("pw")
                })
            };
            p("lPW", W);
            J.push(["pw",
            {
                url: "//ssl.gstatic.com/gb/js/abc/pwm_45f73e4df07a0e388b0fa1f3d30e7280.js"
            }]);
            var X = [],
                ya = function (a) {
                    X[0] = a
                },
                Aa = function (a, b) {
                    var c = b || {};
                    c._sn = "pw";
                    C(a, c)
                },
                Ba = {
                    signed: X,
                    elog: Aa,
                    base: "https://plusone.google.com/u/0",
                    loadTime: (new Date).getTime()
                };
            I.pw = Ba;
            var Y = function (a, b) {
                for (var c = b.split("."), d = function () {
                    var b = arguments;
                    a(function () {
                        for (var a = k, d = 0, e = c.length - 1; d < e; ++d) a = a[c[d]];
                        a[c[d]].apply(a, b)
                    })
                }, g = k, e = 0, i = c.length - 1; e < i; ++e) g = g[c[e]] = g[c[e]] || {};
                return g[c[e]] = d
            };
            Y(W, "pw.clk");
            Y(W, "pw.hvr");
            p("su", ya, k.pw)
        };

        function Ca() {
            function a() {
                for (var b;
                (b = e[i++]) && !("m" == b[0] || b[1].auto););
                b && (N(2, b[0]), b[1].url && M(b[1].url, b[0]), b[1].libs && m.d && m.d(b[1].libs));
                i < e.length && setTimeout(a, 0)
            }
            function b() {
                0 < g-- ? setTimeout(b, 0) : a()
            }
            var c = l.a("1"),
                d = l.a(""),
                g = 3,
                e = J,
                i = 0,
                h = window.gbarOnReady;
            if (h) try {
                h()
            } catch (y) {
                da(y, "ml", "or")
            }
            d ? p("ldb", a) : c ? q(window, "load", b) : b()
        }
        p("rdl", Ca);
        var Da = {
            C: 1,
            F: 2,
            Y: 3,
            u: 4,
            R: 5,
            K: 6,
            j: 7,
            e: 8,
            ba: 9,
            Q: 10,
            J: 11,
            o: 12,
            P: 13,
            k: 14,
            N: 15,
            M: 16,
            $: 17,
            z: 18,
            L: 19,
            aa: 20,
            Z: 21,
            v: 22,
            D: 23,
            da: 24,
            ea: 25,
            ca: 26,
            A: 27,
            g: 28,
            p: 29,
            h: 30,
            X: 31,
            T: 32,
            U: 33,
            H: 34,
            I: 35,
            W: 36,
            V: 37,
            S: 38,
            B: 39,
            O: 40,
            w: 41,
            G: 500
        };
        var Z = l.b("0.001", 1.0E-4),
            Ea = l.b("1.0", 1),
            Fa = j,
            Ga = j;
        if (l.a("1")) {
            var Ha = Math.random();
            Ha <= Z && (Fa = f);
            Ha <= Ea && (Ga = f)
        }
        var $ = Da;

        function Ia(a, b) {
            var c = Z,
                d = Fa,
                g;
            g = 34 >= a ? a <= $.k ? a == $.j || a == $.e || a == $.o ? j : f : a >= $.g && a <= $.h ? f : j : 200 <= a ? f : j;
            g && (c = Ea, d = Ga);
            if (d) {
                d = encodeURIComponent;
                g = "es_plusone_gc_20120731.0_p0";
                var e;
                k.rp ? (e = k.rp(), e = "-1" != e ? e : "1") : e = "1";
                var i = 0;
                l.a("") && (i |= 1);
                l.a("") && (i |= 2);
                c = ["//www.google.com/gen_204?atyp=i&zx=", (new Date).getTime(), "&oge=", a, "&ogex=", d("17483"), "&ogf=", k.bv.f, "&ogp=", d("8"), "&ogrp=", d(e), "&ogsr=", Math.round(1 / c), "&ogv=", d("1348253329.0"), g ? "&oggv=" + d(g) : "", "&ogd=", d("cn"), "&ogl=", d("zh-CN"), "&ogus=", i];
                if (b) {
                    "ogw" in b && (c.push("&ogw=" + b.ogw), delete b.ogw);
                    var h;
                    g = b;
                    e = [];
                    for (h in g) 0 != e.length && e.push(","), e.push(h), e.push("."), e.push(g[h]);
                    h = e.join("");
                    "" != h && (c.push("&ogad="), c.push(d(h)))
                }
                G(c.join(""))
            }
        }
        D = Ia;
        p("il", D, H);
        var Ja = {};
        I.il = Ja;
        setTimeout(function () {
            D($.e)
        }, 0);
    } catch (e) {
        window.gbar && gbar.logger && gbar.logger.ml(e, {
            "_sn": "cfg.init"
        });
    }
})();
(function () {
    try {
        var a = window.gbar;
        a.mcf("pm", {
            p: ""
        });
    } catch (e) {
        window.gbar && gbar.logger && gbar.logger.ml(e, {
            "_sn": "cfg.init"
        });
    }
})();
(function () {
    try {
        window.gbar.rdl();
    } catch (e) {
        window.gbar && gbar.logger && gbar.logger.ml(e, {
            "_sn": "cfg.init"
        });
    }
})();

function e(id) {
    return document.getElementById(id)
}
function v(id) {
    return e(id).value
}
function vs(id, val) {
    e(id).value = val
}
function d0(id) {
    e(id).style.display = "none"
}
function d1(id) {
    e(id).style.display = ""
}
function u(v) {
    return "undefined" == typeof v
}

function GXhrGet(url, opt_callback) {
    var req;
    window.XMLHttpRequest ? req = new XMLHttpRequest : "undefined" != typeof ActiveXObject && (req = new ActiveXObject("Microsoft.XMLHTTP"));
    req.onreadystatechange = function () {
        4 == req.readyState && 200 == req.status && (opt_callback && opt_callback(req.responseText), req.onreadystatechange = function () {})
    };
    req.open("GET", url, !0);
    req.send("")
}

function dac(e, c) {
    var name = e.className ? String(e.className) : "";
    if (name) {
        for (var cn = name.split(/\s+/), found = !1, i = 0; i < cn.length; ++i) if (cn[i] == c) {
            found = !0;
            break
        }
        found || cn.push(c);
        e.className = cn.join(" ")
    } else e.className = c
}
function drc(e, c) {
    var o = e.className ? String(e.className) : "";
    if (o && -1 != o.indexOf(c)) {
        for (var cn = o.split(/\s+/), i = 0; i < cn.length; ++i) cn[i] == c && cn.splice(i--, 1);
        e.className = cn.join(" ")
    }
}
function msbi(isOGHeader, gbar) {
    return isOGHeader && gbar && gbar.qfgq ? gbar.qfgq() : e("q_d")
};

function ErrorLogger(opt_debug, opt_reloadMessageEnabled, opt_expIds) {
    this.counter_ = 0;
    this.eventId_ = null;
    this.debug_ = opt_debug;
    this.expIds_ = opt_expIds;
    this.ticks_ = [];
    this.showReload_ = !0;
    this.reloadMessageEnabled_ = opt_reloadMessageEnabled;
    this.errorListener_ = null;
    var previousErrorHandler = window.onerror,
        me = this;
    window.onerror = function (var_args) {
        previousErrorHandler && previousErrorHandler.apply(null, arguments);
        me.log_.apply(me, arguments);
        me.errorListener_ && me.errorListener_.apply(me, arguments)
    }
}
ErrorLogger.prototype.createXhr_ = function () {
    var r = null;
    try {
        "undefined" != typeof ActiveXObject && (r = new ActiveXObject("Microsoft.XMLHTTP"))
    } catch (error) {
        r = null
    }!r && window.XMLHttpRequest && (r = new XMLHttpRequest);
    return r
};
ErrorLogger.prototype.setErrorListener = function (eventListener) {
    this.errorListener_ = eventListener
};
ErrorLogger.prototype.clearErrorListener = function () {
    this.errorListener_ = null
};
ErrorLogger.prototype.setEventId = function (vpage) {
    this.eventId_ = vpage.ei
};
ErrorLogger.prototype.tick = function (flowType, tick) {
    flowType ? this.ticks_.push(flowType + "." + tick) : this.ticks_.push(tick)
};
ErrorLogger.prototype.updatePageUrl = function (url) {
    var node = e("errormessage");
    node && (node.href = -1 != this.getWindowLocation_().href.indexOf("err=") ? "/" : url + "&err=1")
};
ErrorLogger.prototype.disableReloadMessage = function () {
    this.showReload_ = !1
};
ErrorLogger.prototype.enableReloadMessage = function () {
    this.showReload_ = !0
};
ErrorLogger.prototype.log_ = function (msg, file, line) {
    this.reloadMessageEnabled_ && this.showReload_ && this.showReloadMessage();
    if (this.debug_) {
        var c = window.console;
        c && c.log.apply(c, arguments)
    } else if (5 >= this.counter_) {
        ++this.counter_;
        var urlLines = [];
        try {
            for (var stacktrace = [], counter = 0, c = this.log_.caller; null != c; c = c.caller) {
                var matches = c.toString().match(/function (\w*)/);
                if (matches && matches[1] && (stacktrace.push(matches[1]), c.caller == c)) {
                    stacktrace.push("*");
                    break
                }
                if (40 < counter) break;
                ++counter
            }
            var enc =
            encodeURIComponent;
            this.eventId_ && urlLines.push("ei=" + this.eventId_);
            this.expIds_ && 0 < this.expIds_.length && urlLines.push("e=" + this.expIds_.join(","));
            if (0 < this.ticks_.length) {
                var ticksStr = this.ticks_.join(";"),
                    len = ticksStr.length;
                400 < len && (ticksStr = ticksStr.substr(len - 400), ticksStr.indexOf(";") && (ticksStr = ticksStr.substr(ticksStr.indexOf(";") + 1)));
                urlLines.push("cad=ticks:" + ticksStr)
            }
            urlLines.push("jsest=" + enc(stacktrace.join("/").substr(0, 400)));
            msg.substr ? (urlLines.push("jsem=" + enc(msg.substr(0, 400))), urlLines.push("jsef=" + enc(file.substr(0, 800))), urlLines.push("jsel=" + enc(line))) : urlLines.push("jsem=ERROR_EVENT_NO_MSG_FILE_LINE");
            document.cookie && -1 != document.cookie.indexOf("vt") && urlLines.push("vt=fts");
            document.cookie && -1 != document.cookie.indexOf("mgoic") && urlLines.push("vt=mge")
        } catch (e) {
            urlLines.push("ERROR_PROCESSING_ERROR")
        }
        var url = "http://ditu.google.cn/maps/gen_204/jse?" + urlLines.join("&"),
            r = this.createXhr_();
        r && setTimeout(function () {
            r.open("GET", url, !0);
            r.send(null)
        }, 0)
    }
};
ErrorLogger.prototype.getWindowLocation_ = function () {
    return window.location
};
ErrorLogger.prototype.showReloadMessage = function () {
    e("errormessagehtml") && d1("errormessagehtml")
};
(function () {
    var debug_mode = false;
    var reload_message_enabled = false;
    var exp_ids = [];
    window.gErrorLogger = new ErrorLogger(debug_mode, reload_message_enabled, exp_ids);
})();

function switchForm(name) {
    try {
        var formElem = e(name + "_d");
        if (formElem) {
            formElem.focus();
        }
    } catch (ex) {}
    return false;
}
function flipDForm() {
    var f = e("d_form");
    var tmp = v("d_d");
    f.saddr.value = v("d_daddr");
    f.daddr.value = tmp;
    return false;
}


function B(c) {

    var args = [];
    var func;
    this.arg = function (pos, val) {
        args[pos] = val;
        return this;
    };
    this.func = function (f) {
        func = f;
        return this;
    };
    this.check = function () {
        if (!func) return;
        for (var i = 0; i < c; ++i)
        if (u(args[i])) return;
        func.apply(this, args);
    };
}























var vpLoad = new B(5);











var vpLoadHome = new B(2);
var gApplication = null;
var gMasterPrintHandler = null;
(function () {
    window.gPanelDefaultUrls = ['/maps?ie\x3dUTF8\x26hl\x3dzh-CN', '/maps/ms?ie\x3dUTF8\x26hl\x3dzh-CN\x26oe\x3dUTF8\x26msa\x3d10', '', '', '', '', '/maps', '', '/maps/myplaces'];
})();
(function () {
    window.gDeviceCapabilities = [, , 1];
})();

function getWindowHeight() {
    if (window.self && self.innerHeight) {
        return self.innerHeight;
    }

    if (document.documentElement && document.documentElement.clientHeight) {
        return document.documentElement.clientHeight;
    }
    return 0;
}

function getWindowWidth() {
    if (window.self && self.innerWidth) {
        return self.innerWidth;
    }

    if (document.documentElement && document.documentElement.clientWidth) {
        return document.documentElement.clientWidth;
    }
    return 0;
}

function getIFrameDocument(iframe) {

    if (iframe.contentWindow) {
        return iframe.contentWindow.document;
    } else {
        return iframe.contentDocument;
    }
}










function loadUrl(url, opt_opts) {
    getIFrameDocument(e("vp")).location = url;
    return false;
}








function openInfoWindow(id) {
    return true;
}










function openLbaInfoWindow(id, label) {
    return true;
}





function calculateOffsetTop(element, opt_top) {
    var top = opt_top || null;
    var offset = 0;
    for (var elem = element; elem && elem != opt_top; elem = elem.offsetParent) {
        offset += elem.offsetTop;
    }
    return offset;
}(function () {
    var css_workaround_for_earth_plugin = true;
    var resize_app_height_firefox = false;
    var resize_app_height_mac = false;
    window.resizeAppCalcHeight = function () {
        var height = getWindowHeight();
        if (css_workaround_for_earth_plugin) {


            e("main").style.height = height + 'px';
        }


        if (resize_app_height_firefox) {



            height -= 3;
        }




        if (resize_app_height_mac && window.statusbar && !window.statusbar.visible) {
            height -= 10;
        }
        return height;
    };
})();
(function () {
    var adjust_map_height = true;
    var cityblock_pano_ratio = 1;
    var small_height = 630;
    var small_width = 1000;
    var is_ie6 = false;
    window.setSizeMode = function () {
        var height = resizeAppCalcHeight();
        var width = getWindowWidth();
        var newSize = '';
        if (height < small_height || width < small_width) {
            newSize = 'small';
        }
        drc(document.body, 'small');
        dac(document.body, newSize);
    };
    window.resizeApp = function () {


        if (!is_ie6) {
            setSizeMode();
        }
        var height = resizeAppCalcHeight();
        var panelElem = e("panel");
        var mapElem = e("map");
        if (!mapElem) {


            return;
        }
        var mapHeight = height - calculateOffsetTop(mapElem);
        var panelHeight = height - calculateOffsetTop(panelElem);
        panelHeight += 4;
        var sp = e("spsizer");
        var resizerHeight = height - calculateOffsetTop(sp);
        if (adjust_map_height) {
            var mclip = e("mclip");
            mapHeight -= mclip.offsetHeight;
        }
        mapElem.style.height = Math.max(0, mapHeight) + "px";
        panelElem.style.height = Math.max(0, panelHeight) + "px";
        resizerHeight -= e("rv_panel").offsetHeight;
        sp.style.height = Math.max(0, resizerHeight) + "px";

        var inlineCityblockDiv = e("inline_pano_div");
        if (inlineCityblockDiv) {
            var cityblockDivHeight = mapHeight * cityblock_pano_ratio;
            inlineCityblockDiv.style.height = Math.max(0, cityblockDivHeight) + "px";
        }
    };
})();
setTimeout(function () {
    if (gApplication) {
        return;
    }
    e("loadmessage") && d0("loadmessage");
    e("slowmessage") && d1("slowmessage");
}, 10000);

function onSearch(form) {
    if (gApplication) {
        gApplication.prepareMainForm(form);
    }
    return true;
}

function loadHomePage() {
    eval("try { var sbi =  e('q_d') || gbar.qfgq(); sbi.focus(); } " + "catch (ex) {}");
    vpLoadHome.arg(1, "homestate").check();
}

function loadVPageStarted() {}

function loadVPage(v, s) {
    loadVPageStarted();
    vpLoad.arg(1, v).arg(2, s).arg(4, false).check();
}

function recordCityblockLightningFlashLoadTime() {
    tick('cbl');
}

function recordCityblockHeavyFlashLoadTime() {
    tick('cbh');
}