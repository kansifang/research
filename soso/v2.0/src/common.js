function a() {
    var a = "shape image rect oval fill stroke imagedata group textbox".split(" ");
    if (!document.namespaces.v) {
        document.namespaces.add("v", "urn:schemas-microsoft-com:vml");
        var b = document.createStyleSheet();
        ab(a, function (a) {
            b.addRule("v\\\\:" + a, "behavior:url(#default#VML);");
            document.createElement("v:" + a)
        })
    }
}
function b(b) {
    var c = qb[b];
    if (!c) {
        c = document.createDocumentFragment();
        if (b === aa) {
            tb || (a(), tb = !0);
            var ja = document.createElement("v:image");
            ja.style.cssText = "position:absolute;left:0;top:0;-moz-user-select:none;-khtml-user-select:none;";
            ja.galleryImg = !1;
            ja.className = "csssprite";
            ja.setAttribute(dc, aa);
            c.appendChild(ja)
        } else if (ja = document.createElement("img"), ja.style.cssText = "position:absolute;left:0;top:0;-moz-user-select:none;-khtml-user-select:none;border:none", ja.galleryImg = !1, c.appendChild(ja), b === ib) {
            var d = document.createElement("div");
            d.style.cssText = "position:absolute;left:0;top:0;font-size:0;";
            c.appendChild(d);
            ja.className = "smnoscreen";
            d.className = "smnoprint";
            ja.setAttribute(dc, ib);
            d.setAttribute(dc, ib)
        } else b === pa && (ja.className = "csssprite", ja.setAttribute(dc, pa));
        qb[b] = c
    }
    if (c) return c.cloneNode(!0)
}
function c(a, b, c, d, e, g, j, p) {
    var S = arguments;
    0 < b.toUpperCase().indexOf(".PNG") && pb ? Ib ? o.apply(null, S) : Z.apply(null, S) : v.apply(null, S)
}
function d(a, b) {
    var c;
    ab(a.childNodes, function (d) {
        (c = d.getAttribute(dc)) && c != b && a.removeChild(d)
    })
}
function j(a, b, c, d) {
    var e = null;
    ab(a.childNodes, function (a) {
        if ((!d || "tag" === a.nodeName) && (!c || a.className === c) && a.getAttribute(dc) == b) return e = a, !1
    });
    return e
}
function o(a, c, ja, e, g, xd, p) {
    d(a, aa);
    var wa = j(a, aa);
    if (!wa) {
        var S = b(aa),
            wa = S.childNodes[0];
        eb(a, S)
    }
    Na(wa, g, xd);
    Oa(wa, ja, e);
    bb(wa, p);
    wa.src = c
}
function v(a, c, ja, e, g, xd, p) {
    d(a, pa);
    var wa = j(a, pa, "csssprite");
    if (!wa) {
        var S = b(pa),
            wa = S.childNodes[0];
        eb(a, S)
    }
    Na(wa, g, xd);
    Oa(wa, ja, e);
    bb(wa, p);
    wa.src = c;
    Db(wa)
}
function Z(a, c, ja, e, g, p, x, wa) {
    d(a, ib);
    var S = j(a, ib, "smnoscreen", "img"),
        B = j(a, ib, "smnoprint", "div");
    if (!S || !B) {
        S && a.removeChild(S);
        B && a.removeChild(B);
        var o = b(ib),
            S = o.childNodes[0],
            B = o.childNodes[1];
        eb(a, o)
    }
    Na(B, g, p);
    Oa(B, ja, e);
    B.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + c + "', sizingMethod='scale')";
    Na(S, g, p);
    Oa(S, ja, e);
    bb(S, x);
    S.src = c;
    S.style.display = wa ? "none" : ""
}
function H(a, b) {
    this._asCache = !! a;
    this._reinit();
    null != b && this.setMaxCount(b)
}
function L(a, b) {
    this._key = a;
    this._value = b
}
function V(a, b, c) {
    this.timeout = b || 15e3;
    this.queue = new xb;
    this.pending = new xb;
    this.concurrent = a;
    this.cors = c;
    this._domain = document.domain
}
function U(a, b, c) {
    return function () {
        return b.call(this, a, c)
    }
}
function W(a, b) {
    if (!a.cancelled) {
        a.endTime = yb();
        a.loaded = b;
        clearTimeout(a.timer);
        var c = a.loader;
        c.pending.remove(a.url) && c._laterCheck();
        c = a.image;
        if (!a.cancelled && (b || a.force)) a.callback(!b ? null : c, a);
        c.onload = null;
        c.onerror = null;
        c.onabort = null;
        a.image = null
    }
}
function va(a, b, c) {
    this.url = a;
    this.callback = b;
    this.force = c
}
function ta(a) {
    a = a || {};
    a.delay = a.delay || 0;
    a.duration = a.duration || 0;
    this.setValues(a)
}
function ma(a) {
    this.guid = bc++;
    a = a || {};
    a.begins = a.begins || [];
    a.ends = a.ends || [];
    a.transition = a.transition || ac;
    a.precision = a.precision || 1e-4;
    Bb.call(this, a)
}
function fa(a) {
    var b = this;
    hc ? B.$require("e3", function (c) {
        new c(b, a)
    }) : document.body.addEventListener ? B.$require("e1", function (c) {
        new c(b, a)
    }) : B.$require("e2", function (c) {
        new c(b, a)
    });
    this.start()
}
function qa() {
    this.views = [];
    this.count = 0;
    this.renderNum = 15;
    this.anim = new ic({
        duration: 500
    });
    this.isRun = !1
}
function xa(a, b) {
    this._model = a;
    this._renderTimer = b || 0;
    a && (this._fdrawListener = Ob.addListener(this, "forceredraw", this.forcedraw, this), this.forwardEvents(["forceredraw"]))
}
function Ha(a, b, c, d) {
    var e = new Sb,
        g = !1,
        p = {};
    nc(b, function (a) {
        p[a] = 1
    });
    var j = function (a, b) {
        return d ? d(a, b) : function () {
            var b = !0;
            nc(a, function (a) {
                if (!a) return b = !1
            });
            return b
        }()
    };
    e.changed = function (d) {
        if (!(g || d && !p[d])) {
            var cf = [];
            nc(b, function (b) {
                cf.push(a.get(b))
            });
            j(cf, b) && (g = !0, e.unbindAll(b), c())
        }
    };
    e.bindsTo(b, a)
}
var aa, ib, pa, za = function (a, b, c, d) {
    return -c * (a /= d) * (a - 2) + b
},
    Ca, Ja = function () {
        if (null == Ca) {
            var a = navigator;
            if (a.plugins && a.mimeTypes.length)(a = a.plugins["Shockwave Flash"]) && a.description && (Ca = a.description.replace(/([a-zA-Z]|\\s)+/, "").replace(/(\\s)+r/, ".") + ".0");
            else if (Q) try {
                var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                b && (Ca = b.GetVariable("$version").replace(/WIN/g, "").replace(/,/g, "."))
            } catch (c) {}
        }
        return Ca
    },
    La = function (a, b) {
        for (var a = a.split("."), b = b.split("."), c = Math.max(a.length, b.length), d = 0; d < c; d++) {
            var e = a[d],
                g = b[d];
            if (!e || !g) return !e && !g ? 0 : e ? 1 : -1;
            e = Number(e);
            g = Number(g);
            if (e < g) return -1;
            if (e > g) return 1
        }
        return 0
    },
    fb = Q ? ' classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0"' : ' type="application/x-shockwave-flash"',
    Ua = ["id", "width", "height", "align", "data"],
    Za = "wmode movie flashvars scale quality play loop menu salign bgcolor base allowscriptaccess allownetworking allowfullscreen seamlesstabbing devicefont swliveconnect".split(" "),
    cb = function (a) {
        var b, c;
        b = a.minVer;
        c = a.maxVer;
        if (b || c) {
            var d = Ja();
            if (!d || b && 0 > La(d, b) || c && 0 < La(d, c)) return a.altHtml || ""
        }
        d = ["<object", fb];
        a.data = a.movie;
        for (b = 0; b < Ua.length; b++) c = Ua[b], a.hasOwnProperty(c) && d.push(" ", c, '="', a[c], '"');
        d.push(">");
        for (b = 0; b < Za.length; b++) c = Za[b], a.hasOwnProperty(c) && d.push('<param name="', c, '" value="', a[c], '"/>');
        d.push("</object>");
        return d.join("")
    },
    Ma = function (a, b) {
        if (b) {
            var c = document.createElement("div");
            c.appendChild(a);
            c.innerHTML = ""
        } else a.parentNode && a.parentNode.removeChild(a), Te(a)
    },
    r = function (a) {
        var b = document,
            c = b.createElement("style");
        c.setAttribute("type", "text/css");
        c.styleSheet ? c.styleSheet.cssText = a : (a = b.createTextNode(a), c.appendChild(a));
        a = b.getElementsByTagName("head");
        a.length ? a[0].appendChild(c) : b.documentElement.appendChild(c)
    };
r("@media screen{.smnoscreen {display:none}} @media print{.smnoprint{display:none}}");
var ub = [],
    vb = [],
    db = function (a, b) {
        var c, d, e = !1;
        c = 0;
        for (d = ub.length; c < d; ++c) if (ub[c].url === a) return b(ub[c].width, ub[c].height, a, ub[c].image), ub[c].image;
        c = 0;
        for (d = vb.length; c < d; c++) vb[c].url === a && (vb[c].callbacks.push(b), e = !0);
        if (!e) {
            vb.push({
                url: a,
                callbacks: [b]
            });
            var g = new Image,
                j = function (a, b) {
                    for (var c = 0; c < vb.length; c++) if (vb[c].url === b) {
                        for (var bf = vb[c].callbacks, d = 0; d < bf.length; d++) bf[d](a.width, a.height, b, a);
                        vb.splice(c, 1);
                        break
                    }
                };
            p.addDomListenerOnce(g, "load", function () {
                ub.push({
                    url: a,
                    width: g.width,
                    height: g.height,
                    image: g
                });
                j(g, a);
                g = null
            });
            p.addDomListenerOnce(g, "error", function () {
                ub.push({
                    url: a,
                    width: 0,
                    height: 0,
                    image: g
                });
                b(0, 0, a);
                j(g, a);
                g = null
            });
            a.indexOf("?");
            g.src = a;
            return g
        }
    },
    Qa = function () {
        return !1
    },
    Sa = function (a) {
        Q || window.opera ? (a.unselectable = "on", a.attachEvent("selectstart", Qa), a.attachEvent("dragstart", Qa)) : (a.style.MozUserSelect = "none", a.style.WebkitUserSelect = "none", a.addEventListener("ondragstart", Qa))
    },
    $a = function (a, b) {
        var c = a.style;
        0 <= parseFloat(b) && 1 > parseFloat(b) ? (c.filter = "alpha(opacity=" + 100 * b + ")", c.opacity = b) : 1 == parseFloat(b) && (c.filter = "", c.opacity = "")
    },
    ec = function (a) {
        if ("number" == typeof a) return a + "px";
        if ("string" == typeof a) return a = a.replace(RegExp("\\\\s", "g"), ""), /^\\d+(px|%)+$/i.exec(a) || "auto" === a ? a : /^\\d+$/.exec(a) ? a + "px" : "0px"
    },
    na = function (a, b, c) {
        null != b && (a.style.width = ec(b));
        null != c && (a.style.height = ec(c))
    },
    ca = function (a, b, c, d, e) {
        null != b && (a.style.left = ec(b));
        null != c && (a.style.top = ec(c));
        null != d && (a.style.right = ec(d));
        null != e && (a.style.bottom = ec(e))
    },
    ab = T,
    Na = ca,
    Oa = na,
    bb = $a,
    Db = Sa,
    eb = function (a, b, c) {
        c = c || 0;
        a.childNodes.length > c ? a.insertBefore(b, a.childNodes[c]) : a.appendChild(b)
    },
    gb = null,
    dc = "dn",
    pb = function () {
        if (null == gb) {
            var a = !1;
            try {
                a = !! document.body.filters
            } catch (b) {}
            gb = a && 5.5 <= Q && 7 > Q
        }
        return gb
    }(),
    Ib = 6 <= Q && 9 > Q;
pb && r("@media screen{.smnoscreen {display:none}} @media print{.smnoprint{display:none}}");
pa = ib = aa = void 0;
ib = 1;
pa = 2;
aa = 3;
var qb = {},
    tb = !1,
    oc = function (a, b, d, e, g, p, j) {
        var B = Ta(a, "position");
        "relative" !== B && "absolute" !== B && (a.style.position = "relative");
        if (b) {
            var x = e ? e.getWidth() : 0,
                o = e ? e.getHeight() : 0,
                r = d ? d.length ? -d[0] : -d.getX() : 0,
                w = d ? d.length ? -d[1] : -d.getY() : 0;
            a.style.overflow = "hidden";
            !e || p ? db(b, function (d, e) {
                c(a, b, x || d, o || e, r, w, g, j)
            }) : c(a, b, x, o, r, w, g, j)
        }
    },
    wb = /firefox\\/ (\\d + \\.\\d + ) / i.test(Ka) ? +RegExp.$1 : 0,
    mb = /(\\d+\\.\\d)?(?:\\.\\d)?\\s+safari\\/ ? (\\d + \\.\\d + ) ? /i.test(Ka)&&!/chrome / i.test(Ka) ? +(RegExp.$1 || RegExp.$2) : 0,
    nb = /chrome\\/ (\\d + \\.\\d + ) / i.test(Ka) ? +RegExp.$1 : 0,
    Pb = function (a, b, c) {
        "grab" == b && (b = Ea + "grab.cur", b = wb ? "-moz-grab" : "url(" + b + ")" + (nb || mb ? " 10 10" : "") + ", " + c);
        "grabbing" == b && (b = Ea + "grabbing.cur", b = wb ? "-moz-grabbing" : "url(" + b + ")" + (nb || mb ? " 10 10" : "") + ", " + c);
        var b = b || "",
            c = c || "auto",
            d = b.toLowerCase();
        0 < d.indexOf(".cur") && 0 > d.indexOf("url") && (b = "url(" + b + ")," + c);
        "hand" == d && !Q && (b = "pointer");
        a.style.cursor = b
    },
    Wb = /:\\/\\ / ([ ^ \\ / ] * ) / ,
    Xb = 0,
    Qb = function (a) {
        a = a || {};
        return a["\\u7779\\u7805"] || (a["\\u7779\\u7805"] = "" + ++Xb)
    };
H.prototype._asCache = !1;
H.prototype._count = 0;
H.prototype._maxCount = Infinity;
H.prototype.ondrop = null;
H.prototype._reinit = function () {
    this._map = {};
    this._head = new L(null, null);
    this._head._prev = this._head._next = this._head
};
H.prototype._removeNode = function (a) {
    this._dropNode(a);
    delete this._map[a._key];
    a._remove();
    this._count--
};
H.prototype._insert = function (a) {
    var b = this._head;
    this._asCache ? (a._next = b._next, a._prev = b, b._next = a, a._next._prev = a) : (a._prev = b._prev, a._next = b, b._prev = a, a._prev._next = a);
    this._truncate()
};
H.prototype._truncate = function () {
    for (var a = this._count; a >= this._maxCount; a--) this._removeNode(this._asCache ? this._head._prev : this._head._next)
};
H.prototype._dropNode = function (a) {
    if (this.ondrop) this.ondrop(a._value, a.key, this)
};
H.prototype._findAndUseNode = function (a) {
    return this.exists(a) ? (a = this._map[a], this._asCache && a !== this._head._next && (a._remove(), this._insert(a)), a) : null
};
H.prototype._popNode = function (a) {
    var b = a._value;
    a !== this._head && this._removeNode(a);
    return b
};
H.prototype.isFull = function () {
    return this._count >= this._maxCount
};
H.prototype.isEmpty = function () {
    return 0 === this._count
};
H.prototype.forEach = function (a, b) {
    for (var c = this._head._next; c !== this._head; c = c._next) a.call(b, c._value, c._key, this)
};
H.prototype.getCount = function () {
    return this._count
};
H.prototype.getMaxCount = function () {
    return this._maxCount
};
H.prototype.setMaxCount = function (a) {
    this._maxCount = a;
    this._truncate()
};
H.prototype.getFirst = function () {
    return this._head._next._value
};
H.prototype.getLast = function () {
    return this._head._prev._value
};
H.prototype.shift = function () {
    return this._popNode(this._head._next)
};
H.prototype.pop = function () {
    return this._popNode(this._head._prev)
};
H.prototype.exists = function (a) {
    return jc.call(this._map, a)
};
H.prototype.get = function (a, b) {
    var c = this._findAndUseNode(a);
    return c ? c._value : b
};
H.prototype.set = function (a, b) {
    var c = this._findAndUseNode(a);
    c ? c._value = b : (c = new L(a, b), this._map[a] = c, this._insert(c), this._count++)
};
H.prototype.peek = function (a, b) {
    return this.exists(a) ? this._map[a]._value : b
};
H.prototype.remove = function (a) {
    return this.exists(a) ? (this._removeNode(this._map[a]), !0) : !1
};
H.prototype.clear = function () {
    this.ondrop && this.forEach(this.ondrop);
    this._reinit();
    this._count = 0
};
L.prototype._prev = null;
L.prototype._next = null;
L.prototype._remove = function () {
    this._prev._next = this._next;
    this._next._prev = this._prev
};
var pc = function () {
    return +(new Date)
},
    xb = H,
    yb = pc;
V.prototype._blankUrl = Ea + "404.png";
V.prototype._check = function (a) {
    for (a && this.pending.getCount() >= this.concurrent && (a = this.pending.getLast(), a.cancelled && (this.pending.remove(a.url), this._abort(a))); this.queue.getCount() && !(this.pending.getCount() >= this.concurrent);) this._doIt(this.queue.shift())
};
V.prototype._laterCheck = function () {
    if (!this._checkRequested) {
        this._checkRequested = !0;
        var a = this;
        setTimeout(function () {
            a._checkRequested = !1;
            a._check()
        }, 0)
    }
};
V.prototype._doIt = function (a) {
    var b = document.createElement("img");
    a.crossOrigin && (b.crossOrigin = "anonymous");
    a.image = b;
    a.loader = this;
    a.startTime = yb();
    b.src = a.url;
    a.requested = !0;
    b.complete ? W(a, !0) : (this.pending.set(a.url, a), b.onload = U(a, W, !0), b.onerror = U(a, W, !1), b.onabort = U(a, W, !1), a.timer = setTimeout(U(a, W, !1), this.timeout))
};
V.prototype._abort = function (a) {
    if (a.requested) {
        var b = a.image;
        W(a, !1);
        b.crossOrigin = null;
        b.src = this._blankUrl;
        a.cancelled = !0;
        a.aborted = !0
    }
};
V.prototype.loadImage = function (a, b, c) {
    var d = this.pending.get(a);
    if (d && d.cancelled) d.cancelled = !1, d.callback = b, d.force = c;
    else {
        d = new va(a, b, c);
        if (b = this.cors) a = Wb.exec(a), b = (a && a[1]) !== this._domain;
        b && (d.crossOrigin = !0);
        this.queue.set(Qb(d), d);
        this._check(!0)
    }
    return d
};
V.prototype.cancelLoadImage = function (a) {
    a.cancelled || (a.cancelled = !0, this.queue.remove(Qb(a)))
};
V.prototype.clearQueue = function (a) {
    this.queue.forEach(function (a) {
        a.cancelled = !0
    });
    this.queue.clear();
    if (a) for (; a = this.pending.pop();) this._abort(a);
    else this.pending.forEach(function (a) {
        a.cancelled = !0
    })
};
V.prototype.destroy = function () {
    this.clearQueue(!0)
};
va.prototype.requested = !1;
va.prototype.cancelled = !1;
var Yb = /-./g,
    Zb = function (a) {
        return a.charAt(1).toUpperCase()
    },
    zb = function (a, b) {
        b = b || {};
        return function (c) {
            return jc.call(b, c) ? b[c] : b[c] = a(c)
        }
    },
    r = {};
r["float"] = Q ? "styleFloat" : "cssFloat";
var Ab = zb(function (a) {
    return a.replace(Yb, Zb)
}, r),
    Ia = function (a, b, c) {
        a.style[Ab(b)] = c
    },
    ga = function (a, b, c, d, e) {
        a = document.createElement(a || "div");
        d && (a.style.cssText = d);
        void 0 != c && Ia(a, "z-index", c);
        b && !e && b.appendChild(a);
        return a
    },
    qc = function (a, b) {
        return a.contains ? a !== b && a.contains(b) : !! (a.compareDocumentPosition(b) & 16)
    },
    ob = {
        anims: [],
        timer: null,
        add: function (a) {
            a._startTime = +(new Date); - 1 === lc(this.anims, a) && this.anims.push(a);
            null === this.timer && (this.timer = setInterval(this.nextFrame, 16))
        },
        remove: function (a) {
            var b = this.anims;
            T(this.anims, function (c, d) {
                if (a === c) return delete a._startTime, b.splice(d, 1), !1
            });
            0 === b.length && (clearInterval(this.timer), this.timer = null)
        },
        nextFrame: function () {
            var a = +(new Date),
                b = [],
                c = null;
            T(ob.anims.concat(), function (d) {
                if (d._startTime) {
                    b.push(d);
                    c = +(new Date);
                    var e = a - d._startTime,
                        g = !1;
                    e >= d.duration && (e = d.duration, g = !0);
                    d.set("current", e);
                    d.onEnterFrame(e);
                    g ? d.stop() : d.status || (d.status = 1);
                    d._frameDuration = +(new Date) - c
                }
            });
            var d = +(new Date) - a;
            T(b, function (a) {
                a._startTime && (a.onExitFrame(a._frameDuration, d), delete a._frameDuration)
            })
        }
    };
e(ta, $);
r = ta.prototype;
r.start = function () {
    function a() {
        b.onStart();
        b.status = 0;
        ob.add(b);
        delete b._delayTimer
    }
    this.stop(!0);
    var b = this;
    this.delay ? b._delayTimer = setTimeout(a, b.delay) : a()
};
r.stop = function (a) {
    this._delayTimer && (clearTimeout(this._delayTimer), delete this._delayTimer);
    ob.remove(this);
    this.status = -1;
    if (!a) this.onEnd()
};
r.getStatus = function () {
    return this.status
};
r.onStart = function () {};
r.onEnterFrame = function () {};
r.onExitFrame = function () {};
r.onEnd = function () {};
var Bb = ta,
    ac = function (a, b, c, d) {
        return c * a / d + b
    },
    bc = 0;
e(ma, Bb);
r = ma.prototype;
r.onEnterFrame = function (a) {
    var b = this.begins,
        c = this.ends,
        d = this.helper,
        e = this.transition,
        g = this.duration,
        p = 1 / this.precision,
        j = [],
        B = [];
    a < g ? T(b, function (b, mc) {
        j.push(Math.round((Fb(e) ? e[mc] : e)(a, b, d && d[mc] ? d[mc](c[mc], !0) : c[mc] - b, g) * p) / p)
    }) : j = c.concat();
    var x = this._lastValues || b;
    T(j, function (a, b) {
        B.push(a - x[b]);
        j.toString() != c.toString() && (j[b] = d && d[b] ? d[b](a, !1) : a)
    });
    this._lastValues = j.concat();
    this.onUpdate(j, B)
};
r.onStart = function () {};
r.onUpdate = function () {};
r.onEnd = function () {};
var rc = function (a) {
    if (Q) a = [a.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft), a.clientY + (document.documentElement.scrollTop || document.body.scrollTop)];
    else if (a.touches) {
        var b = null;
        0 < a.targetTouches.length ? b = a.targetTouches[0] : 0 < a.changedTouches.length && (b = a.changedTouches[0]);
        a = [b.pageX, b.pageY]
    } else a = [a.pageX, a.pageY];
    return a
},
    Hb = /android\\s(\\d+\\.\\d)/i.test(Ka) ? +RegExp.$1 : 0,
    Jb = /iPhone\\sOS\\s(\\d[_\\d]*)/i.test(Ka) ? +parseFloat(RegExp.$1.replace(/_/g, ".")) : 0,
    Kb = /iPad.*OS\\s(\\d[_\\d]*)/i.test(Ka) ? +parseFloat(RegExp.$1.replace(/_/g, ".")) : 0,
    Rb = "ontouchstart" in window || Kb || Jb || Hb,
    sc = function (a) {
        if (null === a.parentNode || "none" == a.style.display) return [0, 0, 0, 0];
        var b = null,
            c = 0,
            d = 0,
            e = a.offsetWidth,
            g = a.offsetHeight;
        if (a.getBoundingClientRect && !Rb) b = a.getBoundingClientRect(), a = Math.max(document.documentElement.scrollTop, document.body.scrollTop), c = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft), c = b.left + c, d = b.top + a;
        else {
            if (document.getBoxObjectFor) b = document.getBoxObjectFor(a), c = a.style.borderLeftWidth ? parseInt(a.style.borderLeftWidth) : 0, d = a.style.borderTopWidth ? parseInt(a.style.borderTopWidth) : 0, c = b.x - c, d = b.y - d;
            else {
                c = a.offsetLeft;
                d = a.offsetTop;
                b = a.offsetParent;
                if (b != a) for (; b;) c += b.offsetLeft, d += b.offsetTop, b = b.offsetParent;
                if (Me || mb && "absolute" == a.style.position) c -= document.body.offsetLeft, d -= document.body.offsetTop
            }
            for (b = a.parentNode ? a.parentNode : null; b && "BODY" != b.tagName && "HTML" != b.tagName;) c -= b.scrollLeft, d -= b.scrollTop, b = b.parentNode ? b.parentNode : null
        }
        return [c, d, e, g]
    },
    tc = function (a) {
        return "undefined" === typeof a
    },
    hc = Rb;
e(fa, $);
r = fa.prototype;
r.start = function () {
    this.set("tracking", !0)
};
r.stop = function () {
    this.set("tracking", !1)
};
r.addListener = function (a, b) {
    return p.addListener(this, a, b)
};
r.removeListener = function (a) {
    return p.removeListener(a)
};
r.clearAllListener = function () {
    p.clearInstanceListeners(this)
};
var Sb = $,
    Ob = p,
    nc = T,
    ic = ta;
qa.prototype.add = function (a) {
    a.mvcRN || (a.mvcRN = ++this.count, this.views.push(a), !this.isRun && 0 < this.count && this.start())
};
qa.prototype.renderOne = function (a) {
    delete a.mvcRN;
    a.draw()
};
qa.prototype.renderViews = function () {
    for (var a = null, b = this.views; a = b.shift();) a.mvcRN && this.renderOne(a);
    this.count = 0
};
qa.prototype.start = function () {
    this.isRun = !0;
    var a = this,
        b = this.anim,
        c = this.views;
    b.onEnterFrame = function () {
        c[0] ? a.renderViews() : a.stop()
    };
    b.onEnd = function () {
        a.isRun && b.start()
    };
    b.delay = 10;
    b.start()
};
qa.prototype.stop = function () {
    this.isRun = !1;
    var a = this.anim;
    delete a.onEnd;
    a.stop()
};
var Tb = new qa;
e(xa, Sb);
r = xa.prototype;
r.redraw = function (a) {
    a ? this.forcedraw() : Tb.add(this)
};
r.forcedraw = function () {
    Tb.renderOne(this)
};
r.draw = function () {};
r.dispose = function () {
    Ob.removeListener(this._fdrawListener)
};
r.triggerEvents = function (a, b, c) {
    var d = this._model;
    if (d) {
        if (kd(b)) for (var e = new fa(b), g = this, j = 0, p = a.length; j < p; j++) e.addListener(a[j], function (a, b) {
            return function (c) {
                var d = g.getMouseContainerPixel(c),
                    e = g.getMouseEventLatLng(c, d),
                    c = new Ub(e, d, b, a, c);
                Ob.trigger(a, b, c)
            }
        }(d, a[j]));
        if (null == b || b == d) {
            b = new Ub;
            e = 0;
            for (j = c.length; e < j; e += 2) b[c[e]] = c[e + 1];
            b.target = d;
            b.type = a;
            Ob.trigger(d, a, b)
        }
    }
};
r.triggerMapsEvent = function (a, b) {
    var c = null,
        d = null,
        e = this._model;
    e && (b && (c = this.getMouseContainerPixel(b), d = this.getMouseEventLatLng(b, c)), c = new Ub(d, c, a, e, b), Ob.trigger(e, a, c))
};
r.triggerCustomEvent = function (a, b, c) {
    var d = null,
        e = this._model;
    if (e) {
        if (b) {
            var g = e.get("map") || e;
            g && (g = g.get("mapCanvasProjection")) && (d = g.fromLatLngToContainerPixel(b))
        }
        var j = new Ub(b, d, a, e);
        c && ba(c, function (a, b) {
            j[b] = a
        });
        Ob.trigger(e, a, j)
    }
};
r.forwardEvents = function (a) {
    var b = this._model;
    if (b) {
        b._eventTaget || (b._eventTaget = {});
        for (var c = 0, d = a.length; c < d; c++) Ob.forward(b._eventTaget, a[c], this)
    }
};
r.getMouseEventLatLng = function (a, b) {
    var c = this._model;
    if (c && (c = c.get("map") || c)) return b = b || this.getMouseContainerPixel(a), (c = c.get("mapCanvasProjection")) && c.fromContainerPixelToLatLng(b, null, !0)
};
r.getMouseEventPoint = function (a) {
    var b = this._model;
    if (b && (b = b.get("map") || b)) return a = this.getMouseContainerPixel(a), b.get("mapCanvasProjection").fromContainerPixelToPoint(a)
};
r.getMouseContainerPixel = function (a) {
    var b = this._model;
    if (b) return b = (b.get("map") || b).get("mapContainer"), b = sc(b), a = rc(a), new x(a[0] - b[0], a[1] - b[1])
};
r.getModel = function () {
    return this._model
};
r.keysReady = function (a, b, c) {
    Ha(this, a, b, function (a, b) {
        var d = !0;
        nc(a, function (a, e) {
            if (!(c && ea(c(a, b[e])) ? 0 : !g(a) && !tc(a))) return d = !1
        });
        return d
    })
};
r.keysUnReady = function (a, b, c) {
    Ha(this, a, b, function (a, b) {
        var d = !1;
        nc(a, function (a, e) {
            var j;
            if (c && ea(j = c(a, b[e])) ? j : g(a) || tc(a)) return d = !0, !1
        });
        return d
    })
};