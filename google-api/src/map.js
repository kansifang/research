function Wt() {}
function Xt(a, b, c) {
    this.ie = a;
    this.duration = c;
    ej(this, b)
}
function Yt(a) {
    this.b = a || []
}
Xn[F].d = zk(9, function () {
    for (var a in this.b) {
        var b = this.b[a],
            c = b.ie;
        c[x][this.f] = "opacity " + b[ik] + "ms ease-out";
        om(c, b[yc])
    }
    this.b = {};
    this.e = ba
});
Yn[F].d = zk(8, function () {
    for (var a = [], b = 0, c = this.b[E]; b < c; ++b) {
        var d = this.b[b],
            e = d.b;
        e.time = e[Cj] + 50;
        var f = e[Cj] / e[ik];
        1 <= f ? (om(d, e.xg), d.b = ba) : (e = e.yg + wd(0, f) * (e.xg - e.yg), om(d, e), a[B](d))
    }
    this.b = a;
    0 == this.b[E] && (m[Nj](this.f), this.f = ba)
});
Xn[F].cd = zk(6, function (a, b, c) {
    this.b[Gf(a)] = new Xt(a, b, c);
    this.e || (this.e = m[Hb](N(this, this.d), 1))
});
Yn[F].cd = zk(5, function (a, b, c) {
    var d;
    d = Pd(a[x][yc]) ? a[x][yc] : Pd(a[x].filter) && a[uk][nk] ? a[uk][nk][yc] / 100 : ba;
    var e = a.b;
    e || (e = new Wt, a.b = e, this.b[B](a));
    e.time = 0;
    e.duration = c;
    e.yg = d;
    e.xg = b;
    this.f || (this.f = m[jk](N(this, this.d), 50))
});
Do[F].e = zk(4, function (a, b) {
    var c = this.d;
    return c[b] && c[b][a.x] && c[b][a.x][a.y] || 0
});
function Zt(a, b) {
    for (var c = a.b, d = 0, e = c[E]; d < e; ++d) {
        var f = c[d];
        if (f[0] == b) return f[1]
    }
}
function $t(a, b) {
    return new Yt(fd(a.b, 4)[b])
}
function au(a) {
    return (a = a.b[1]) ? new ng(a) : qg
}
function bu(a) {
    return (a = a.b[0]) ? new ng(a) : pg
}
function cu(a) {
    a = a.b[1];
    return a != k ? a : 0
}
function du(a) {
    a = a.b[0];
    return a != k ? a : 0
}
function eu(a) {
    this.b = a || []
}
eu[F].ae = function () {
    var a = this.b[6];
    return a ? new og(a) : rg
};
eu[F].clearRect = function () {
    this.b[4] = k
};
function fu(a, b) {
    var c = a.x,
        d = a.y;
    switch (b) {
    case 90:
        a.x = d;
        a.y = 256 - c;
        break;
    case 180:
        a.x = 256 - c;
        a.y = 256 - d;
        break;
    case 270:
        a.x = 256 - d, a.y = c
    }
}
function gu() {
    sa(this, -1);
    Ga(this, -1);
    this.b = [];
    this.ia = []
}
function hu(a) {
    for (var b = 0; b < gd(a.b, 0); ++b) {
        var c = a[Mj](b)[eb](/(\\?|&)src=api(&|$)/, "$1src=apiv3$2"),
            d = b;
        fd(a.b, 0)[d] = c
    }
}
function iu(a, b) {
    this.f = b || new Sg;
    this.b = new Tf(a % 360, 45);
    this.e = new T(0, 0);
    this.d = j
}
iu[F].fromLatLngToPoint = function (a, b) {
    var c = this.f[db](a, b);
    fu(c, this.b[yj]());
    c.y = (c.y - 128) / No + 128;
    return c
};
iu[F].fromPointToLatLng = function (a, b) {
    var c = this.e;
    c.x = a.x;
    c.y = (a.y - 128) * No + 128;
    fu(c, 360 - this.b[yj]());
    return this.f[vj](c, b)
};
iu[F].getPov = Yc("b");

function ju(a, b, c, d, e, f, g) {
    Mi(this, b);
    Ga(this, c);
    xa(this, new U(256, 256));
    Ta(this, d);
    this.alt = e;
    this.Q = f;
    this.Zc = g;
    a = new Jh(a);
    Ba(this, Rd);
    this.J = N(a, a[Db]);
    Xa(this, N(a, a[Dc]));
    this.Pa = N(a, a.Pa)
}
ju[F].Ab = j;
function ku(a, b, c, d) {
    this.f = [];
    for (var e = 0; e < I(a); ++e) {
        var f = a[e],
            g = new gu,
            h = f.b[2];
        sa(g, (h != k ? h : 0) || 0);
        h = f.b[3];
        Ga(g, (h != k ? h : 0) || d);
        for (h = 0; h < gd(f.b, 5); ++h) g.b[B](fd(f.b, 5)[h]);
        for (h = 0; h < gd(f.b, 4); ++h) {
            var i = Xk(b, new ne(new P(du(bu($t(f, h))) / 1E7, cu(bu($t(f, h))) / 1E7), new P(du(au($t(f, h))) / 1E7, cu(au($t(f, h))) / 1E7)), g[Vb]);
            g.ia[h] = new tf([new T(vd(i.F / c[s]), vd(i.D / c[A])), new T(vd(i.G / c[s]), vd(i.H / c[A]))])
        }
        this.f[B](g)
    }
}
Ki(ku[F], function (a, b) {
    var c = this.b(a, b);
    return c && Eo(c, a, b)
});
ku[F].b = function (a, b) {
    for (var c = this.f, d = new T(a.x % (1 << b), a.y), e = 0; e < c[E]; ++e) {
        var f = c[e];
        if (!(f[ob] > b || f[Vb] < b)) {
            var g = I(f.ia);
            if (0 == g) return f.b;
            for (var h = f[Vb] - b, i = 0; i < g; ++i) {
                var p = f.ia[i];
                if (Ek(new tf([new T(p.F >> h, p.D >> h), new T(1 + (p.G >> h), 1 + (p.H >> h))]), d)) return f.b
            }
        }
    }
    return k
};

function lu(a) {
    this.b = a || []
}
lu[F].f = function () {
    var a = this.b[2];
    return a != k ? a : 0
};
Ba(lu[F], function () {
    var a = this.b[1];
    return a ? new zo(a) : Ao
});
function mu(a, b) {
    var c = {},
        d = 1 << b,
        e = (1 - 1 / n[pc](2)) / 2;
    c.b = vd(a[A] * d * e);
    c.e = vd(d * e);
    c.f = a[A] * d - 2 * c.b;
    c.B = d - 2 * c.e;
    c.d = yd(c.B * a[A] - c.f);
    return c
}
var nu = {
    hue: "h",
    saturation: "s",
    lightness: "l",
    gamma: "g",
    invert_lightness: "il",
    visibility: "v",
    color: "c",
    weight: "w"
}, ou = {
    all: "",
    geometry: "g",
    "geometry.fill": "g.f",
    "geometry.stroke": "g.s",
    labels: "l",
    "labels.icon": "l.i",
    "labels.text": "l.t",
    "labels.text.fill": "l.t.f",
    "labels.text.stroke": "l.t.s"
}, pu = {
    all: 0,
    administrative: 1,
    "administrative.country": 17,
    "administrative.province": 18,
    "administrative.locality": 19,
    "administrative.neighborhood": 20,
    "administrative.land_parcel": 21,
    poi: 2,
    "poi.business": 33,
    "poi.government": 34,
    
 "poi.school": 35,
    "poi.medical": 36,
    "poi.attraction": 37,
    "poi.place_of_worship": 38,
    "poi.sports_complex": 39,
    "poi.park": 40,
    road: 3,
    "road.highway": 49,
    "road.highway.controlled_access": 785,
    "road.arterial": 50,
    "road.local": 51,
    transit: 4,
    "transit.line": 65,
    "transit.station": 66,
    "transit.station.rail": 1057,
    "transit.station.bus": 1058,
    "transit.station.airport": 1059,
    "transit.station.ferry": 1060,
    landscape: 5,
    "landscape.man_made": 81,
    "landscape.natural": 82,
    water: 6
};
function qu(a, b) {
    var c = xk();
    this.f = a;
    this.e = b;
    this.b = new Sg;
    this.d = new U(256, 256);
    for (var d = {}, e = 0, f = gd(c.b, 5); e < f; ++e) {
        var g = new eu(fd(c.b, 5)[e]),
            h;
        h = g.b[1];
        h = h != k ? h : 0;
        d[h] = d[h] || [];
        d[h][B](g)
    }
    this.A = ru(this, d[0], 21);
    this.j = (e = c.b[0]) ? new sg(e) : yg;
    hu(this.j);
    this.C = ru(this, d[1], 22);
    this.I = (e = c.b[1]) ? new sg(e) : zg;
    hu(this.I);
    this.n = ru(this, d[2], 22);
    this.B = Dk(c);
    hu(this.B);
    this.J = ru(this, d[3], 15);
    this.l = (d = c.b[3]) ? new sg(d) : Bg;
    hu(this.l);
    this.Z = (c = c.b[7]) ? new sg(c) : Cg;
    hu(this.Z)
}
function ru(a, b, c) {
    return new ku(b, a.b, new U(256, 256), c)
}
function su(a, b, c, d) {
    var e, f = K(d),
        g = "",
        h = c ? N(c, c.e) : Rd;
    "satellite" == b ? f ? (c = a.Z, g += "deg=" + d + "&", e = k) : (c = a.I, e = a.C) : "hybrid" == b ? (c = a.B, f ? (g += "deg=" + d + "&opts=o&", e = k) : e = a.n) : "terrain" == b ? (c = a.l, e = a.J) : (c = a.j, e = a.A);
    return Po(c, e, g, "satellite" == b || "hybrid" == b ? f ? 21 : 22 : "terrain" == b ? 15 : "roadmap" == b ? 21 : 22, "hybrid" == b && !f || "terrain" == b || "roadmap" == b, a.d, Oo(d), h)
}
function tu(a, b) {
    var c;
    c = k;
    "hybrid" == b ? c = a.B : "roadmap" == b ? c = a.j : "terrain" == b ? c = a.l : "satellite" == b && (c = a.I);
    c ? (c = c.b[5], c = c != k ? c : "") : c = k;
    return c
}
function uu(a, b) {
    var c = K(b),
        d = new If,
        e = new Ko(d, su(a, "satellite", k, b), su(a, "hybrid", a.e, b), "\\u62b1\\u6b49\\uff0c\\u6b64\\u5904\\u65e0\\u56fe\\u50cf\\u3002"),
        c = new ju(d, K(b) ? new iu(b) : a.b, c ? 21 : 22, "\\u6df7\\u5408", "\\u663e\\u793a\\u5e26\\u6709\\u8857\\u9053\\u540d\\u79f0\\u7684\\u56fe\\u50cf", fl.hybrid, tu(a, "hybrid"));
    vu(a, e);
    return c
}
function wu(a, b) {
    var c = K(b),
        d = new If;
    new Lo(d, su(a, "satellite", k, b), "\\u62b1\\u6b49\\uff0c\\u6b64\\u5904\\u65e0\\u56fe\\u50cf\\u3002");
    return new ju(d, K(b) ? new iu(b) : a.b, c ? 21 : 22, "\\u536b\\u661f", "\\u663e\\u793a\\u536b\\u661f\\u56fe\\u50cf", c ? "a" : fl.satellite, k)
}
function xu(a, b, c) {
    var d = k,
        e = [0, 90, 180, 270];
    if ("hybrid" == b) {
        for (var d = uu(a), c = [], b = 0, f = e[E]; b < f; ++b) c[B](uu(a, e[b]));
        d.Hc = new Un(d, c)
    } else if ("satellite" == b) {
        d = wu(a);
        c = [];
        b = 0;
        for (f = e[E]; b < f; ++b) c[B](wu(a, e[b]));
        d.Hc = new Un(d, c)
    } else {
        f = su(a, b, a.e);
        e = new If;
        f = new Lo(e, f, "\\u62b1\\u6b49\\uff0c\\u6b64\\u5904\\u65e0\\u56fe\\u50cf\\u3002");
        if ("terrain" == b) {
            if (d = tu(a, "terrain")) b = d[Ib](","), 2 == b[E] && (d = b[1]);
            d = new ju(e, a.b, 15, "\\u5730\\u5f62", "\\u663e\\u793a\\u5e26\\u5730\\u5f62\\u7684\\u8857\\u9053\\u5730\\u56fe", fl.terrain, 
d)
        } else "roadmap" == b && (d = new ju(e, a.b, 21, "\\u5730\\u56fe", "\\u663e\\u793a\\u8857\\u9053\\u5730\\u56fe", fl.roadmap, tu(a, "roadmap")));
        vu(a, f, c)
    }
    return d
}
function vu(a, b, c) {
    var d = a.f.N();
    c ? b.set("apistyle", c) : (b[q]("layers", d, "uniqueLayers"), b[q]("apistyle", d), b[q]("style", d), b[q]("opts", d, "uniqueTileUrlOpts"));
    b[q]("epochs", a.e)
}
function yu(a) {
    this.b = a || []
}
yu[F].f = function () {
    return gd(this.b, 0)
};
yu[F].d = function (a) {
    return new lu(fd(this.b, 0)[a])
};

function zu(a) {
    var b = ea[qb]("div");
    hm(b);
    mm(b, 0);
    a[Za](b);
    this.set("div", b)
}
J(zu, V);
zu[F].offset_changed = function () {
    this.set("newCenter", this.get("center"));
    var a = this.get("projectionBounds"),
        b = this.get("offset");
    if (a && b) {
        var c = this.get("div");
        fm(c, new T(a.F - b[s], a.D - b[A]));
        im(c)
    }
};

function Au() {
    Il[Ec](this)
}
J(Au, Il);
H = Au[F];
H.kf = k;
H.latLngCenter_changed = function () {
    this.b = j;
    Bu(this);
    this.b = l
};
Yi(H, bj(Au[F], function () {
    this.kf = k;
    Bu(this, this.zl());
    Cu(this)
}));
H.projectionTopLeft_changed = function () {
    Du(this)
};
Gi(H, function () {
    Du(this)
});
H.projectionBounds_changed = function () {
    var a = this.Ze(),
        b = this.$e(),
        c = this.Mg();
    if (a && K(b) && c) {
        var d = this,
            b = Vk(c, 1 / n.pow(2, b)),
            c = new T(b.G, b.H),
            b = a[vj](new T(b.F, b.D), j),
            e = a[vj](c, j),
            c = n.min(b.lat(), e.lat()),
            a = n.max(b.lat(), e.lat()),
            f = n.min(b.lng(), e.lng()),
            b = n.max(b.lng(), e.lng()),
            c = new P(c, f, j),
            b = new P(a, b, j);
        this.j = new ne(c, b);
        m[Hb](function () {
            d[Eb]("latLngBounds")
        }, 0)
    }
};
function Bu(a, b) {
    var c = a.af(),
        d = a.Ze(),
        e = a.$e();
    if (d && K(e) && c) {
        var f;
        f = a.td();
        var g = a.sd();
        if (b && a.d && K(a.Za) && f && g) {
            var c = new T(g.x + b.x, g.y + b.y),
                h = Yk(a.d, c, a.Za, j),
                h = Tg(d, h, e);
            f = new T(g.x + f[s] / 2, g.y + f[A] / 2);
            f = new T(h.x - (c.x - f.x), h.y - (c.y - f.y))
        } else f = Tg(d, c, e);
        if (g = f) g = a.Mc(), g = !(f && g && 1E-10 >= n.abs(f.x - g.x) && 1E-10 >= n.abs(f.y - g.y));
        g && a.Bg(f)
    }
    g = a.td();
    c = a.Mc();
    if (g && c && (f = c.x - g[s] / 2, g = c.y - g[A] / 2, c = a.sd(), !c || !(1E-10 >= n.abs(c.x - f) && 1E-10 >= n.abs(c.y - g)))) c || (c = new T(0, 0)), c.x = f, c.y = g, a.set("projectionTopLeft", 
c);
    Eu(a);
    a.Za = e;
    a.d = d
}
function Cu(a) {
    var b = a.Mc(),
        c = a.Ze(),
        d = a.$e();
    if (c && K(d) && b) {
        if (c = b = Yk(c, b, d, j)) c = a.af(), c = !(b && c && 1E-10 >= n.abs(b.lat() - c.lat()) && 1E-10 >= n.abs(b.lng() - c.lng()));
        c && a.set("latLngCenter", b)
    }
}
function Eu(a) {
    var b = a.af();
    b && (b = 18 * yd(b.lng() / 18), b != a.kf && (a.kf = b, a.set("projectionCenterQ", a.Mc())))
}
function Du(a) {
    var b = a.td(),
        c = a.sd();
    if (b && c) {
        var d = c.x + b[s] / 2,
            b = c.y + b[A] / 2,
            c = a.Mc();
        if (!c || !(1E-10 >= n.abs(c.x - d) && 1E-10 >= n.abs(c.y - b))) c || (c = new T(0, 0)), c.x = d, c.y = b, a.Bg(c)
    }
    var e = a.td(),
        f = a.sd();
    if (e && f) {
        var d = a.Mg() || new tf,
            b = f.x,
            c = f.y,
            g = f.x + e[s],
            e = f.y + e[A];
        if (d.F != b || d.D != c || d.G != g || d.H != e) d.F = b, d.D = c, d.G = g, d.H = e, a.set("projectionBounds", d)
    }
    a.b || (Cu(a), Eu(a))
}
H.$e = Jf("zoom");
H.td = Jf("size");
H.sd = Jf("projectionTopLeft");
H.Mc = Jf("center");
H.Bg = Kf("center");
H.af = Jf("latLngCenter");
H.Mg = Jf("projectionBounds");
H.Ze = Jf("projection");
H.getLatLngBounds = Yc("j");
H.zl = Jf("fixedPoint");

function Fu(a, b, c) {
    this.b = {};
    this.d = pm(c, a);
    this.f = b
}
za(Fu[F], function () {
    var a = this;
    Gd(this.b, function (b, c) {
        Gu(a, c)
    });
    delete this.f;
    delete this.b;
    al(this.d, j)
});
Fu[F].freeze = function () {
    if (this.f.Pa) {
        var a = this;
        Gd(this.b, function (b, c) {
            a.f.Pa(c)
        })
    }
};

function Gu(a, b) {
    delete a.b[b.oa];
    a.f[Dc] && a.f[Dc](b);
    al(b, j)
};

function Hu(a, b) {
    Vg[Ec](this);
    this.b = pm(this.get("zIndex") || 0, a);
    this.l = new U(0, 0);
    this.C = this.d = k;
    this.n = {};
    this.A = {};
    this.K = b;
    this.Q = l;
    this.Jd(1)
}
J(Hu, Vg);
H = Hu[F];
H.zIndex_changed = function () {
    mm(this.b, this.get("zIndex") || 0)
};
H.getDiv = Yc("b");
H.ob = Jf("mapType");
H.Oh = Jf("tileFadeMode");
H.Jd = Kf("tileFadeMode");
Wa(H, Jf("zoom"));
bj(H, function () {
    var a = this[gk]();
    this.e != a && (this.e = a, this.bf())
});
Ii(H, Jf("offset"));
H.offset_changed = function () {
    this.O()
};
H.getProjection = Jf("projection");
H.Ch = Kf("projection");
H.Gd = Jf("projectionBounds");
H.projectionBounds_changed = function () {
    this.O()
};
Gi(H, function () {
    this.O()
});
H.mapType_changed = function () {
    var a = this.ob();
    this.ka != a && (this.ka = a, this.bf())
};

function Iu(a) {
    var b = a.ob();
    return !(!a.K || !b || !b.Ab)
}
H.bf = function () {
    Ju(this);
    var a = this.ob();
    a && (this.d = new Fu(this.b, a, 1), this.O())
};
H.aa = function () {
    var a = this,
        b = a[gk](),
        c = a[uj](),
        d = a.Gd(),
        e = a.get("size"),
        f = a.ob(),
        g = a.d;
    if (e && c && d && f && g && !this.Q) {
        var e = new U(yd(c[s]), yd(c[A])),
            h = !a.l[nc](e);
        a.l = e;
        var e = a.C,
            i = this.ob()[vb],
            p = 0.25 * i[s],
            r = 0.25 * i[A],
            p = uf(d.F - p, d.D - r, d.G + p, d.H + r);
        if ((r = this[Zj]()) && r[kk]) {
            var t = this[gk]();
            if ((r = r[kk]() || Uf) && 45 == r.Fa() && 0 != r[yj]() % 180) var r = mu(i, t),
                t = vd((p.D - r.b) / r.f),
                w = vd((p.H - r.b) / r.f),
                p = uf(p.F, p.D + t * r.d, p.G, p.H + w * r.d)
        }
        r = new tf;
        r.F = vd(p.F / i[s]);
        r.D = vd(p.D / i[A]);
        r.G = td(p.G / i[s]);
        r.H = td(p.H / i[A]);
        var z = 
a.C = r;
        if (z[nc](e)) h && Gd(a.d.b, function (b, c) {
            Ku(a, c, c.oa)
        });
        else {
            Gd(g.b, function (b, c) {
                Ek(z, c.oa) || (Lu(a, c), Gu(g, c))
            });
            e = [];
            for (i = z.F; i < z.G; ++i) for (p = z.D; p < z.H; ++p) e[B](new T(i, p));
            var D = 0,
                G = 0,
                O = 0;
            L(e, function (a) {
                ++D;
                G += a.x;
                O += a.y
            });
            if (D) {
                var G = G / D,
                    O = O / D,
                    M = fa(D),
                    X = 0;
                L(e, function (a) {
                    var b = a.x - G,
                        c = a.y - O;
                    a.Hf = b * b + c * c;
                    M[X++] = a
                });
                M[sk](function (a, b) {
                    return a.Hf - b.Hf
                });
                e = M
            } else e = [];
            var R = function (b, c) {
                var d = Pd(c) ? c : 1,
                    e = a.Oh();
                Iu(a) && (2 == e || 1 == e && b == l) ? (om(this, 0), g.d[Za](this), a.K.cd(this, d, 200)) : (Iu(a) && 
g.d[Za](this), 1 != d && om(this, d));
                Lu(a, this)
            },
                ta = f[vb];
            L(e, function (e) {
                var f = g.b[e];
                f ? h && Ku(a, f, e) : (f = g.f, f = N(f, f[Db] == Rd ? f.J : f[Db])(e, b, em(g.d)), $l(f), f.oa = e, g.b[e] = f, Iu(a) || g.d[Za](f), hm(f), a.n[f.oa] = 1, f.Sd = Q[wb](f, xl, R), e = Ku(a, f, e), e.x < d.G - c[s] && (e.x > d.F - c[s] - ta[s] && e.y < d.H - c[A] && e.y > d.D - c[A] - ta[A]) && (a.A[f.oa] = 1))
            });
            im(g.d)
        }
        Q[o](this, "tilesloading")
    }
};
ua(H, function () {
    Ju(this);
    al(this.b)
});
function Ku(a, b, c) {
    var d = a.ob()[vb],
        d = new T(c.x * d[s] - a.l[s], c.y * d[A] - a.l[A]),
        e = a[Zj]();
    if (e && e[kk]) {
        var f = a.ob()[vb],
            a = a[gk]();
        if ((e = e[kk]() || Uf) && 45 == e.Fa() && 0 != e[yj]() % 180) a = mu(f, a), c = vd((c.y - a.e) / a.B), d = new T(d.x, d.y - c * a.d)
    }
    fm(b, d, ba, j);
    return d
}
function Mu(a) {
    Gd(a.d.b, function (b, c) {
        Lu(a, c)
    })
}
function Ju(a) {
    a.d && (Mu(a), a.d[wj](), a.d = k, a.C = k)
}
H.freeze = function () {
    this.Q = j;
    this.d && (Mu(this), this.d.freeze())
};
function Lu(a, b) {
    b.Sd && Q[jb](b.Sd);
    b.Sd = ba;
    var c = b.oa;
    if (a.n[c]) {
        var d = !! a.A[c];
        delete a.A[c];
        d && Hd(a.A) && fe(function () {
            Q[o](a, pl)
        });
        delete a.n[c];
        Hd(a.n) && fe(function () {
            Q[o](a, "tilesloaded")
        })
    }
};
var Nu = Vl() ? 2E3 : 500;

function Ou(a, b) {
    this.b = b;
    this.e = a;
    this.j = this.d = 0;
    Q.T(this.e, Ue, this, this.eg);
    if (!Wl()) {
        var c = new wn(this.b);
        c[q]("draggingCursor", this);
        c[q]("draggableCursor", this);
        c[q]("draggable", this);
        Pu(this, c);
        Qu(this, c)
    }
    Wl() || (c = new Kn(this.e), Q[u](c, sl, this, this.ig), Q[u](this, sl, this, this.ig), c[q]("enabled", this, "scrollwheel"));
    Wl() && (c = new Mn(this.e, j), Pu(this, c), Qu(this, c), c[q]("draggable", this), c[q]("scalable", this, "draggable"))
}
J(Ou, V);
H = Ou[F];
H.yh = Kf("zoom");
H.xh = Jf("zoom");
bj(H, Ou[F].zoomRange_changed = function () {
    var a = this.xh(),
        b = Ru(this, a);
    a != b && this.yh(b)
});

function Pu(a, b) {
    Q[u](b, Te, a, a.rl);
    Q[u](b, wl, a, a.vl);
    Q[u](b, vl, a, a.tl);
    L([Gk, ul, Fk, vl, tl], function (c) {
        Q[y](b, c, N(a, a.Bd, c))
    });
    var c = new jn(b, Nu);
    Q[v](c, il, a);
    Q[v](c, hl, a);
    Q[v](c, gl, a);
    c[q]("disabled", a, "disablePanMomentum")
}
function Qu(a, b) {
    Q[y](b, il, function () {
        Q[o](a, ll)
    });
    Q[y](b, hl, function () {
        Q[o](a, kl)
    });
    Q[y](b, gl, function () {
        Q[o](a, jl)
    })
}
function Ru(a, b) {
    var c = a.get("zoomRange");
    c && (b = wm(c, b));
    return b
}
H.eg = function (a) {
    var b = Xd();
    250 >= b - this.j ? (this.j = 0, this.get("disableDoubleClickZoom") || Su(this, -1)) : (this.j = b, this.Bd("rightclick", a));
    ae(a);
    this.l = j
};
H.vl = function (a) {
    !(1 < a[Wj]) && !Hk(a) && (this.Bd(wl, a), Hk(a) || (this.d = 0, this.get("disableDoubleClickZoom") || (a = vn(a, this.e), Su(this, 1, a))))
};
H.rl = function (a) {
    if (!Hk(a) && !this.l) {
        var b = Xd();
        250 >= b - this.d ? this.d = 0 : (this.d = b, this.Bd(Te, a))
    }
};
H.Bd = function (a, b) {
    var c = vn(b, this.b),
        d = vn(b, this.e);
    Q[o](this, a, c, d, b)
};
H.tl = function (a) {
    this.l = l;
    5 == Z[sc] && (2 == Z.b && 2 == a[Wj] && !a.ctrlKey) && this.eg(a)
};
H.ig = function (a, b) {
    var c = n.pow(2, b),
        d = new en(0, 0, c);
    fn(d, new T(-a.x, -a.y));
    c = new dn(c, new T(d.x, d.y), a);
    Q[o](this, il);
    Q[o](this, hl, c);
    Q[o](this, gl, c)
};

function Su(a, b, c) {
    if (c) {
        var d = a.get("size"),
            e = a.get("projectionTopLeft");
        e.x += c.x - d[s] / 2;
        e.y += c.y - d[A] / 2;
        a.set("projectionTopLeft", e)
    }
    c = a.xh();
    b = Ru(a, c + b);
    c != b && a.yh(b)
};

function Tu(a, b, c) {
    var d = this;
    d.L = a;
    d.d = b;
    Q[u](b, Nf, d, d.j);
    Q[u](b, Of, d, d.l);
    Q[u](b, Mf, d, d.n);
    d.b = [];
    d.e = k;
    c && (d.e = Uu(d, c));
    d.d[sb](function (a) {
        a = Uu(d, a);
        d.b[B](a)
    });
    Vu(d)
}
J(Tu, V);
Tu[F].j = function (a) {
    var b = this.b,
        c = Uu(this, this.d[zc](a));
    b[Jc](a, 0, c);
    Vu(this)
};
Tu[F].l = function (a) {
    var b = this.b;
    Wu(b[a]);
    b[Jc](a, 1);
    Vu(this)
};
Tu[F].n = function (a) {
    Wu(this.b[a]);
    var b = Uu(this, this.d[zc](a));
    b.set("zIndex", a);
    this.b[a] = b
};
function Vu(a) {
    L(a.b, function (a, c) {
        a.set("zIndex", c)
    });
    a.e && a.e.set("zIndex", a.b[E])
}
function Uu(a, b) {
    var c = new Hu(a.L, k);
    c[q]("size", a);
    c[q]("zoom", a);
    c[q]("offset", a);
    c[q]("projectionBounds", a);
    c.set("mapType", b);
    c.Fb = Q[v](c, "tilesloaded", b);
    return c
}
function Wu(a) {
    a[pb]();
    a[ic]("size");
    a[ic]("zoom");
    a[ic]("offset");
    a[ic]("projectionBounds");
    a.set("mapType", k);
    Q[jb](a.Fb);
    delete a.Fb
};

function Xu(a) {
    this.b = a
}
J(Xu, V);
Oi(Xu[F], function () {
    var a = this.get("mapTypeId");
    this.d(a)
});
Xu[F].setMapTypeId = function (a) {
    this.d(a);
    this.set("mapTypeId", a)
};
Xu[F].d = function (a) {
    var b = this.b.get(a);
    if (!(b && b == this.j)) {
        this.e && (Q[jb](this.e), this.e = k);
        var c = N(this, this.d, a);
        a && (this.e = Q[y](this.b, a[Lc]() + "_changed", c));
        b && b instanceof Lh && (a = b.K);
        this.set("styles", b && b.A);
        c = this.j;
        a = this.b.get(a);
        c && c.Hc && (c.Hc[tj](), this[ic]("mapType"));
        a && a.Hc ? (a = a.Hc, a[q]("heading", this), a[q]("tilt", this), this[q]("mapType", a)) : this.set("mapType", a);
        this.set("maxZoom", b && b[Vb]);
        this.set("minZoom", b && b[ob]);
        this.j = b
    }
};

function Yu(a, b, c, d, e, f, g, h) {
    this.x = a;
    this.y = b;
    this.b = c;
    this.d = d;
    this.B = e;
    this.e = f;
    this.j = g;
    this.I = h;
    a = 1 / n.cos(Ld(this.B));
    b = 1 / n.cos(Ld(this.e));
    e = Ld(this.d);
    c = n.cos(e);
    d = n.sin(e);
    0 == e && (d = 0);
    e = this.b;
    this.f = [c * e, d * e / a, -d * e * b, c * e * b / a];
    a = this.x;
    b = this.y;
    this.x = this.f[0] * a + this.f[2] * b;
    this.y = this.f[1] * a + this.f[3] * b
}
function Zu(a, b, c, d, e, f, g) {
    c = n.pow(2, c) / n.pow(2, f);
    f = Jd(d[yj]() - a[yj](), -180, 180);
    return new Yu(e.x - b.x, e.y - b.y, c, f, a.Fa(), d.Fa(), g.x, g.y)
}
function $u() {
    return 4 == Z[sc] && 526 >= Z[lj] || 5 == Z[sc] ? l : !! am.b
}
var av = new Yu(0, 0, 1, 0, 0, 0, 0, 0);

function bv() {}
J(bv, V);

function cv(a) {
    return !!a.e && !! a.d && 0 <= a.j
}
function dv(a) {
    if (!cv(a)) return av;
    var b = Tg(a.ka, a.d, a.l),
        c = Tg(a.ka, a.C, a.l);
    return Zu(a.e, b, a.j, a.J, c, a.l, a.ta)
}
function ev(a) {
    a.e = a.n = a.J = k;
    a.d = a.K = a.C = k;
    a.j = a.Q = a.l = -1;
    a.b = k;
    fv(a)
}
function fv(a) {
    a.A && (m[bb](a.A), a.A = k)
}
bv[F].ra = function () {
    if (this.b) {
        var a = this.b[Fj](),
            b = this.n,
            c = this.J,
            d = Jd(c[yj]() - b[yj](), -180, 180);
        this.e = new Tf(b[yj]() + a * d, (1 - a) * b.Fa() + a * c.Fa());
        b = this.K;
        c = this.C;
        this.d = new P((1 - a) * b.lat() + a * c.lat(), (1 - a) * b.lng() + a * c.lng(), j);
        this.j = (1 - a) * this.Q + a * this.l;
        a = dv(this);
        this.b.Na < this.b.eb ? this.A = Al(this, this.ra, 20) : ev(this);
        this.set("transform", a)
    }
};

function gv(a) {
    Vg[Ec](this);
    this.b = a;
    this.ka = this.R = l;
    this.e = new bv;
    this[q]("transform", this.e, k, j);
    this.l = [];
    this.Ba = new T(0, 0);
    this.d = new T(0, 0);
    this.ab = Zn();
    Q[u](this, pl, this, this.Fi);
    Q[u](this, il, this, this.zi);
    Q[u](this, hl, this, this.Ai);
    Q[u](this, gl, this, this.yi);
    Q[u](this, Ye, this, this.Ei);
    Q[u](this, Xe, this, this.Cc);
    Q[u](this, ol, this, this.Di);
    Q[u](this, nl, this, this.Bi);
    Q[u](this, ml, this, this.Ci);
    hv(this)
}
J(gv, Vg);
function iv(a) {
    var b = a.B = new Hu(a.b, a.ab);
    b[q]("size", a);
    b[q]("projectionBounds", a, "viewProjectionBounds");
    a.ib = [Q[v](b, "tilesloading", a), Q[v](b, "tilesloaded", a), Q[v](b, pl, a), Q[v](a, Ve, b)]
}
H = gv[F];
H.Af = function (a) {
    Ik(this.l, a) && a[pb]();
    this.B && this.B.Jd(jv(this, k, k))
};

function kv(a, b) {
    function c() {
        L(e, N(d, d.Af))
    }
    var d = a,
        e = Vd(d.l);
    b ? c() : m[Hb](c, 1E3)
}
Gi(H, function () {
    for (var a = 0, b = 0, c = this.b; c && c[Ij];) {
        var d = qm(c);
        if (!d) break;
        a += Ei(d.marginLeft);
        b += Ei(d.marginTop);
        c = c[Ic]
    }
    this.Ba = new T(yd(a) - a, yd(b) - b);
    this.O();
    this[Eb]("pixelBounds");
    this[Eb]("layoutPixelBounds")
});
H.mapType_changed = function () {
    this.O()
};
bj(H, function () {
    this.O()
});
H.projectionTopLeft_changed = function () {
    var a = this.B,
        b = this.Yb(),
        c = this.pb();
    a && (b && K(c)) && c == a[gk]() && (a = a[uj](), this.d.x = a[s] - b.x, this.d.y = a[A] - b.y);
    this.ra || this.O()
};
H.Fi = function () {
    this.va = j;
    kv(this, l)
};
H.zi = function () {
    this.R || (this.R = j, this.n = rf)
};
H.Ai = function (a) {
    if (this.R) {
        this.set("fixedPoint", a.X);
        var b = new en(a.b.x, a.b.y, a[Oj]);
        Wl() ? hv(this, new Yu(b.x, b.y, b.b, 0, 0, 0, b.x, b.y)) : (1 != b.b ? this.set("zoom", this.pb() + yd(Zk(b.b))) : (lv(this, this.n.x - a.b.x, this.n.y - a.b.y), this.n = a.b), mv(this))
    }
};
H.yi = function (a) {
    if (this.R) {
        this.set("fixedPoint", k);
        if (Wl()) {
            var a = new en(a.b.x, a.b.y, a[Oj]),
                b = this.ac(),
                c = this.pb(),
                d;
            d = c + yd(Zk(a.b));
            var e = this.get("zoomRange");
            e && (d = wm(e, d));
            var c = d - c,
                e = n.pow(2, c),
                f = b[s] / 2,
                b = b[A] / 2;
            fn(a, new T(f, b));
            a.b = e;
            fn(a, new T(-f, -b));
            c ? (this.set("fixedPoint", new T(a.x / (1 - a.b), a.y / (1 - a.b))), this.set("zoom", d)) : lv(this, -a.x, -a.y);
            hv(this);
            mv(this)
        }
        this.R = l;
        this.n = k
    }
};
H.Ei = function (a, b) {
    var c = this.ac();
    this.Cc(a + this.d.x - c[s] / 2, b + this.d.y - c[A] / 2)
};
H.Cc = function (a, b) {
    this.Q = j;
    lv(this, a, b);
    mv(this);
    this.Q = l
};
H.Di = function (a, b) {
    this.ka = j;
    this.Cc(a, b);
    this.ka = l
};
H.Bi = function (a, b) {
    var c = this.ac();
    this.Cc(a * c[s], b * c[A])
};
H.Ci = function (a) {
    var b = this.getLayoutPixelBounds();
    if (b && a) {
        var c = b.G - b.F,
            d = b.H - b.D,
            e = 0,
            f = a.F - 1 - b.F,
            g = a.G + 1 - b.G;
        0 > f ? e = f : 0 < g && (e = g);
        var g = 0,
            h = a.D - 1 - b.D,
            a = a.H + 1 - b.H;
        0 > h ? g = h : 0 < a && (g = a);
        if (e || g) e > c && (e = f), g > d && (g = h), this.Cc(e, g)
    }
};

function lv(a, b, c) {
    a = a.Yb();
    a.x += b;
    a.y += c
}
function mv(a) {
    a.ra = j;
    a[Eb]("projectionTopLeft");
    a[Eb]("pixelBounds");
    a[Eb]("layoutPixelBounds");
    a.ra = l;
    a.J()
}
H.aa = function () {
    var a = this.pb();
    if (this.ac() && (K(a) && this.Yb()) && (!this.ta || this.Q)) {
        this.ta = j;
        var b = this.get("mapType"),
            c = this.Nd(),
            d = this.B,
            e = d && d[uj](),
            f = !! d && a != d[gk]();
        if (!d || c != d[Zj]()) this.d.x = this.d.y = 0;
        var g, h = l,
            i;
        i = this.B;
        !i || !(this.pb() == this.B[gk]() || $u()) ? i = j : (g = this.pb(), 2 < sd(g - i[gk]()) ? i = j : (g = nv(this.Ld(), this.Nd(), g), i = nv(i.Gd(), i[Zj](), i[gk]()), i = !el(g, i)));
        if (i) kv(this, j), d || iv(this), ev(this.e), g = av, this.d.x = this.d.y = 0;
        else {
            if (f || b != d.ob()) {
                if (h = this.B) h.freeze(), L(this.ib, Q[jb]), 
h[ic]("size"), h[ic]("projectionBounds"), i = new tf, Fd(i, this.Md()), h.set("projectionBounds", i), this.l[B](h), i = this.pb() < h[gk]() ? 2 : 3, this.l[E] > i && this.l[ab]()[pb](), i = this.get("mapType"), (!i || !i.Ab) && m[Hb](N(this, this.Af, h), 5E3), this.B = k;
                iv(this)
            }
            h = ov(this);
            if (d) {
                g = this.K || av;
                var p = d[Zj]();
                i = d[gk]();
                g = Yk(p, new T(g.x + this.C.F + h.x, g.y + this.C.D + h.y), i, j);
                var r = this.Yb(),
                    r = Yk(c, new T(r.x + h.x, r.y + h.y), a, j),
                    t = c[kk] && c[kk]() || Uf,
                    p = p[kk] && p[kk]() || Uf,
                    w = this.e;
                p[yj]() == t[yj]() && p.Fa() == t.Fa() && g[nc](r) && i == a ? 
ev(w) : (fv(w), cv(w) ? (w.n = new Tf(w.e[yj](), w.e.Fa()), w.K = new P(w.d.lat(), w.d.lng(), j), w.Q = w.j) : (w.e = new Tf(p[yj](), p.Fa()), w.n = p, w.d = new P(g.lat(), g.lng(), j), w.K = g, w.j = w.Q = i), w.J = t, w.C = r, w.l = a, w.ka = c, w.ta = h)
            } else ev(this.e);
            g = dv(this.e);
            var h = this.get("animatedZoom") != l,
                h = !this.ka && (!Wl() || !f) && (f && h || this.Q || 0 != g.d || g.B != g.e),
                z = this.d,
                D = ov(this);
            i = this.Nd();
            var p = this.Yb(),
                p = new T(p.x + D.x, p.y + D.y),
                G = i[kk] && i[kk]() || Uf,
                O = this.pb(),
                M = Yk(i, p, O, j),
                X = this;
            L(X.l, function (a) {
                var b = a[uj]();
                a.Gd();
                var c = a[Zj](),
                    
d = c[kk] && c[kk]() || Uf,
                    e = a[gk](),
                    c = Tg(c, M, e),
                    b = Zu(G, c, O, d, new T(b[s] + D.x, b[A] + D.y), e, D);
                b.x = b.x - z.x;
                b.y = b.y - z.y;
                pv(X, b, rf, a[Gj]())
            })
        }
        this.va = l;
        i = this[uj]();
        p = this.B;
        p.set("zoom", a);
        p.set("offset", new U(i[s], i[A]));
        p.set("mapType", b);
        p.Ch(c);
        p.Jd(jv(this, h, f));
        a = h;
        b = g;
        c = this.Ld();
        g = this.Md() || new tf;
        a && 1 == b.b ? (g.F = c.F - b.x, g.D = c.D - b.y, g.G = c.G - b.x, g.H = c.H - b.y) : (g.F = c.F, g.D = c.D, g.G = c.G, g.H = c.H);
        this.zf(g);
        this.C = new tf;
        Fd(this.C, c);
        p.J();
        h ? (a = this.e, b = dv(a), 0 == b.x && 0 == b.y && 1 == b.b && 0 == b.d && b.B == b.e ? ev(a) : 
(c = wd(sd(b.d), sd(b.e - b.B)), b = xd(60, yd(wd(5, c / 6, 5 * (n[pc](b.x * b.x + b.y * b.y) / 256)))), a.b ? a.b[kb](b) : a.b = new Wn(b), a.ra())) : (ev(this.e), hv(this));
        a = l;
        if (!d || !i[nc](e)) this[Eb]("offset"), a = j;
        (f || a) && Q[o](this, Ve);
        this.ta = l
    }
};

function nv(a, b, c) {
    var d = new T(a.G, a.H),
        a = Yk(b, new T(a.F, a.D), c, j),
        b = Yk(b, d, c, j);
    return uf(xd(a.lng(), b.lng()), xd(a.lat(), b.lat()), wd(a.lng(), b.lng()), wd(a.lat(), b.lat()))
}
function jv(a, b, c) {
    return b == l && c == j || Sl.d && a.get("styles") ? 0 : a.l[E] || Wl() ? 2 : 1
}
H.transform_changed = function () {
    var a = this.get("transform");
    if (a) {
        hv(this, a);
        if (1 == a.b) {
            var b = a.x,
                a = a.y,
                c = this.Ld(),
                d = this.Md();
            d.F = c.F - b;
            d.D = c.D - a;
            d.G = c.G - b;
            d.H = c.H - a;
            this.zf(d)
        }!cv(this.e) && this.va && kv(this, l)
    }
};
function pv(a, b, c, d) {
    if ($u()) {
        var e = new Yu(0, 0, b.b, b.d, b.B, b.e, b.j, b.I);
        e.x = b.x + c.x * b.b;
        e.y = b.y + c.y * b.b;
        var f = a.Ba;
        if (a = am.b) b = e.f, c = n[C](e.x) + f.x, f = n[C](e.y) + f.y, b = "matrix(" + b[0][mj](16) + "," + b[1][mj](16) + "," + b[2][mj](16) + "," + b[3][mj](16) + "," + c + "," + f + ")", d[x][a + "Origin"] = n[C](e.j) + "px " + n[C](e.I) + "px", d[x][a] = b
    } else fm(d, new T(b.x + c.x, b.y + c.y))
}
function hv(a, b) {
    a.K = b || av;
    var c = a.K.b,
        d = a.get("panes");
    d && (1 == c ? (km(d[Rj]), km(d[sj])) : (jm(d[Rj]), jm(d[sj])));
    pv(a, a.K, a.d, a.b)
}
H.pb = Jf("zoom");
H.ac = Jf("size");
H.Nd = Jf("projection");
H.Yb = Jf("projectionTopLeft");

function ov(a) {
    var b = a.get("fixedPoint"),
        a = a.ac();
    return b || new T(a[s] / 2, a[A] / 2)
}
H.Ld = Jf("projectionBounds");
H.Md = Jf("viewProjectionBounds");
H.zf = Kf("viewProjectionBounds");
Ii(H, function () {
    var a = this.Yb();
    if (!a) return k;
    var b = this.d.x + a.x,
        a = this.d.y + a.y;
    if (!this.A || b != this.A[s] || a != this.A[A]) this.A = new U(b, a);
    return this.A
});
H.getLayoutPixelBounds = function () {
    return qv(this, this.get("layoutBounds"))
};
H.getPixelBounds = function () {
    return qv(this)
};
function qv(a, b) {
    var c = b || xf,
        d = a.ac();
    if (!d) return k;
    var e = a.d;
    return new tf([new T(c.F - e.x, c.D - e.y), new T((c.G || d[s]) - e.x, (c.H || d[A]) - e.y)])
};

function rv() {}
J(rv, V);
Qa(rv[F], function (a) {
    if ("maxZoomRects" == a || "latLng" == a) {
        var a = this.get("latLng"),
            b = this.get("maxZoomRects");
        if (a && b) {
            for (var c = ba, d = 0, e; e = b[d++];) e.ia[Xb](a) && (c = wd(c || 0, e[Vb]));
            a = c;
            a != this.get("maxZoom") && this.set("maxZoom", a)
        } else this.set("maxZoom", ba)
    }
});

function sv() {
    tv(this)
}
J(sv, V);
Qa(sv[F], function (a) {
    "zoomRange" != a && tv(this)
});

function tv(a) {
    var b = new vm(a.get("minZoom") || 0, a.get("maxZoom") || 30),
        c = a.get("mapTypeMinZoom"),
        d = a.get("mapTypeMaxZoom"),
        e = a.get("trackerMaxZoom");
    K(c) && (b.min = wd(b.min, c));
    K(e) ? b.max = xd(b.max, e) : K(d) && (b.max = xd(b.max, d));
    a.set("zoomRange", b)
};

function uv() {
    this.b = l
}
J(uv, V);
uv[F].desiredTilt_changed = function () {
    var a = this.get("desiredTilt");
    a != this.get("tilt") && this.set("tilt", a)
};
hj(uv[F], function () {
    this.b || (this.set("desiredTilt", this.get("tilt")), vv(this))
});
uv[F].aerial_changed = Oi(uv[F], bj(uv[F], function () {
    this.b = j;
    vv(this);
    this.b = l
}));
function vv(a) {
    var b, c = l,
        d = l,
        e = a.get("mapTypeId");
    if (e) {
        a.b = j;
        if ("satellite" == e || "hybrid" == e) {
            if (d = a.get("zoom"), d = (c = a.get("aerial")) && 18 <= d, c && (e = a.get("desiredTilt"), a.set("desiredTilt", K(e) && 22.5 > e ? 0 : 45)), Pd(d)) e = a.get("desiredTilt"), b = d ? e : 0
        } else b = 0;
        Pd(b) && b != a.get("tilt") && a.set("tilt", b);
        a.set("aerialAvailable", c);
        a.set("aerialAvailableAtZoom", d);
        a.b = l
    }
};

function wv(a) {
    for (var b = [], c = 0; c < I(a); ++c) {
        var d, e = a[c].elementType;
        d = a[c].stylers;
        var f = [],
            g;
        g = (g = a[c].featureType) && pu[g[Lc]()];
        (g = g != k ? g : k) && f[B]("s.t:" + g);
        (e = e && ou[e[Lc]()] || k) && f[B]("s.e:" + e);
        for (e = 0; e < I(d); ++e) {
            a: {
                g = d[e];
                var h = ba;
                for (h in g) {
                    var i = g[h],
                        p = h && nu[h[Lc]()] || k;
                    if (p && (K(i) || Td(i) || "boolean" == typeof i) && i) {
                        "color" == h && xv.test(i) && (i = "#ff" + i[Cb](1));
                        g = "p." + p + ":" + i;
                        break a
                    }
                }
                g = ba
            }
            g && f[B](g)
        }(d = f[Kc]("|")) && b[B](d)
    }
    a = b[Kc](",");
    return 1E3 >= a[E] ? a : ""
}
var xv = /^#[0-9a-fA-F]{6}$/;

function yv() {}
J(yv, V);
Qa(yv[F], function (a) {
    if ("apistyle" != a) {
        var b = this.get("mapTypeStyles") || this.get("styles"),
            c = [];
        vo[13] && c[B]({
            featureType: "poi.business",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        });
        Nd(c, b);
        this.b = wv(c);
        "styles" == a && this[Eb]("apistyle")
    }
});
yv[F].getApistyle = Yc("b");

function zv(a) {
    this.b = a
}
J(zv, V);
Qa(zv[F], function (a) {
    if ("available" != a) {
        var a = this.get("viewport"),
            b = this.get("featureRects"),
            a = this.b(a, b);
        a != k && a != this.get("available") && this.set("available", a)
    }
});

function Av(a, b) {
    if (a && b) {
        for (var c = 0, d; d = b[c++];) if (d[wc](a)) return j;
        return l
    }
}
function Bv(a) {
    return function (b, c) {
        var d;
        if (!b || !c) d = ba;
        else {
            a: {
                d = 0;
                for (var e = b.ca, f = b.ea, g = 0, h; h = c[g++];) if (b[wc](h)) {
                    var i = h.ca,
                        p = h.ea,
                        r = 0;
                    if (h.cb(b)) {
                        d = 1;
                        break a
                    }
                    r = f[Xb](p.b) && p[Xb](f.b) && !f[nc](p) ? ke(p.b, f.f) + ke(f.b, p.f) : ke(f[Xb](p.b) ? p.b : f.b, f[Xb](p.f) ? p.f : f.f);
                    h = xd(e.f, i.f) - wd(e.b, i.b);
                    d += r * h
                }
                d /= (e[ec]() ? 0 : e.f - e.b) * le(f)
            }
            d = a <= d
        }
        return d
    }
};

function Cv(a) {
    this.b = a || []
}
var Dv;

function Ev(a) {
    this.b = a || []
}
function Fv(a) {
    this.b = a || []
}
function Gv(a) {
    this.b = a || []
}
Wa(Cv[F], function () {
    var a = this.b[1];
    return a != k ? a : 0
});
wa(Cv[F], function (a) {
    this.b[1] = a
});
ij(Ev[F], function () {
    var a = this.b[4];
    return a != k ? a : -1
});
var Hv = new yu,
    Iv = new md;
Fv[F].clearRect = function () {
    delete this.b[1]
};
var Jv = new md;
Gv[F].clearRect = function () {
    delete this.b[1]
};
var Kv = {
    m: 0,
    k: 2,
    h: 3,
    r: 4,
    a: 5
};

function Lv(a, b, c, d) {
    Vg[Ec](this, 50);
    this.b = this.d = k;
    this.C = a;
    this.n = c;
    this.A = b;
    this.e = d
}
J(Lv, Vg);
Qa(Lv[F], function (a) {
    if ("epochs" != a) {
        "mapType" == a && Mv(this);
        if ("zoom" == a || "mapType" == a) this.d = this.b = k;
        this.O()
    }
});

function Mv(a) {
    var b, c = Nv(a);
    if ("k" == c || "h" == c) b = a.Q;
    a.A.set("maxZoomRects", b)
}
Lv[F].l = Jf("zoom");

function Nv(a) {
    return (a = a.get("mapType")) && a.Q
}
Lv[F].aa = function () {
    var a = this.n,
        b = this.d,
        c;
    c = this.l();
    var d = this.get("bounds"),
        e = Nv(this);
    if (!K(c) || !d || !e) c = k;
    else {
        var f = d[Lb]();
        this.b || (this.b = f);
        var g = d[ak](),
            d = yd((f.lat() - this.b.lat()) / g.lat()),
            f = yd((f.lng() - this.b.lng()) / g.lng()),
            g = !this.get("mapMaker");
        c = e + "|" + d + "|" + f + "|" + c + "|" + g;
        45 == this.get("tilt") && (c += "|" + (this.get("heading") || 0))
    }
    if (c = this.d = c) {
        if (c != b) {
            for (var h in a) a[h].set("featureRects", ba);
            var i = N(this, this.K, c);
            c = this.get("bounds");
            b = Nv(this);
            e = Kv[b];
            if (c && K(e)) {
                b = new Cv;
                b.b[3] = 
this.C;
                b[tb](this.l());
                d = !! this.get("mapMaker");
                b.b[8] = d;
                b.b[4] = e;
                e = this.get("heading") || 0;
                b.b[7] = e;
                e = 45 == this.get("tilt");
                b.b[6] = e;
                if ((e = this.get("mapType")) && e.Zc) b.b[5] = e.Zc;
                var e = c.ca.b,
                    d = c.ca.f,
                    f = c.ea.b,
                    g = c.ea.f,
                    p = c[ak](),
                    r = p.lat(),
                    p = p.lng();
                je(c.ea) && (g += 360);
                e -= r;
                d += r;
                f -= p;
                g += p;
                c = n.min(r, p) / 10;
                c = n.max(1E-6, c);
                e = c * n[gb](e / c);
                d = c * n[fb](d / c);
                f = c * n[gb](f / c);
                g = c * n[fb](g / c);
                if (c = 360 <= g - f) f = -180, g = 180;
                c = new ne(new P(e, f, c), new P(d, g, c));
                b.b[0] = b.b[0] || [];
                e = new md(b.b[0]);
                d = Lk(e);
                f = c[Lb]().lat();
                d.b[0] = 
f;
                f = c[Lb]().lng();
                d.b[1] = f;
                e = Jk(e);
                d = c[nb]().lat();
                e.b[0] = d;
                c = c[nb]().lng();
                e.b[1] = c;
                Dv || (c = [], Dv = {
                    ba: -1,
                    $: c
                }, c[1] = {
                    type: "m",
                    label: 1,
                    Y: Tk()
                }, c[2] = {
                    type: "u",
                    label: 1
                }, c[5] = {
                    type: "e",
                    label: 1
                }, c[4] = {
                    type: "s",
                    label: 1
                }, c[6] = {
                    type: "s",
                    label: 1
                }, c[7] = {
                    type: "b",
                    label: 1
                }, c[8] = {
                    type: "e",
                    label: 1
                }, c[9] = {
                    type: "b",
                    label: 1
                });
                b = id(b.b, Dv);
                $n(m[xc], fg, Fl + "/maps/api/js/ViewportInfoService.GetViewportInfo", eg, b, function (a) {
                    i(new Ev(a))
                });
                S("stats", function (a) {
                    a.b.b("ev=api_viewport&cad=" + yl({
                        src: "apiv3",
                        ts: Xd()
                    }))
                })
            }
        }
    } else this.e[Zb](0, 
 "");
    b = this.get("bounds");
    this.A.set("latLng", b && b[Tj]());
    for (h in a) a[h].set("viewport", b)
};
Lv[F].K = function (a, b) {
    if (a == this.d) {
        var c = b.b[0];
        this.e[Zb](0, decodeURIComponent(c != k ? c : ""));
        c = b.b[3];
        this.set("epochs", c ? new yu(c) : Hv);
        for (var d = {}, c = 0, e = gd(b.b, 1); c < e; ++c) {
            var f = new Fv(fd(b.b, 1)[c]),
                g;
            g = f.b[0];
            g = g != k ? g : "";
            f = f.b[1];
            f = Ov(f ? new md(f) : Iv);
            d[g] = d[g] || [];
            d[g][B](f)
        }
        Gd(this.n, function (a, b) {
            b.set("featureRects", d[a] || [])
        });
        e = gd(b.b, 2);
        g = this.Q = fa(e);
        for (c = 0; c < e; ++c) {
            var f = new Gv(fd(b.b, 2)[c]),
                h;
            h = f.b[0];
            h = h != k ? h : 0;
            f = f.b[1];
            f = Ov(f ? new md(f) : Jv);
            g[c] = {
                ia: f,
                maxZoom: h
            }
        }
        Mv(this)
    }
};
function Ov(a) {
    var b = Mk(a),
        a = Kk(a);
    return new ne(new P(Ok(b), Nk(b), j), new P(Ok(a), Nk(a), j))
};

function Pv(a) {
    this.b = a;
    Q[u](this.b, Mf, this, this.d);
    Q[u](this.b, Nf, this, this.d);
    this.d()
}
J(Pv, V);
Pv[F].d = function () {
    this.set("attributionText", Qv(this))
};

function Qv(a) {
    var b = [];
    a.b && a.b[sb](function (a) {
        a && b[B](a)
    });
    return b[Kc](", ")
};

function Rv() {}
J(Rv, V);
Rv[F].input_changed = function () {
    for (var a = this.get("input"), b = [], c = 0, d = I(a); c < d; ++c) {
        var e = a[c];
        Ed(b, e) || b[B](e)
    }
    this.set("output", b)
};

function Sv(a) {
    this.e = a;
    this.d = k;
    this.set("idle", j)
}
J(Sv, V);
Sv[F].input_changed = function () {
    this.get("idle") && this.set("idle", l);
    this.d && m[bb](this.d);
    this.d = m[Hb](N(this, this.b), this.e)
};
Sv[F].b = function () {
    this.d = k;
    this.set("idle", j)
};

function Tv(a) {
    this.b = a
}
J(Tv, V);
Tv[F].title_changed = function () {
    var a = this.get("title");
    a ? this.b[W]("title", a) : this.b[Pj]("title")
};

function Uv() {}
H = Uv[F];
H.Ti = function (a, b, c) {
    function d(a) {
        a = bc[zc](a);
        if (a instanceof Lh) {
            var b = wv(a.A),
                b = xu(r, a.K, b);
            Xa(a, b[Dc]);
            a.Pa = b.Pa;
            a.J = b.J
        }
    }
    var e = nh;

    function f(a) {
        mh(e, a);
        if (K(Zt(e, "mb")) && (K(Zt(e, "vt")) || K(Zt(e, "dm"))) && !K(Zt(e, "prt"))) a = mh(e, "prt"), mh(e, "plt", a - Zt(e, "mc") + Zt(e, "jl")), z()
    }
    var g = Jg(Lg(Mg)),
        h = a.N(),
        i = new Rv;
    h[q]("uniqueLayers", i, "output");
    i[q]("input", h, "layers");
    i = new Rv;
    h[q]("uniqueTileUrlOpts", i, "output");
    i[q]("input", h, "tileUrlOpts");
    var p = new Do,
        r = new qu(a, p),
        t = a[$j];
    Gd(ad, function (a, b) {
        t.set(b, 
xu(r, b))
    });
    var w = a[Gj](),
        z = Yd(3, function () {
            S("stats", function (b) {
                var c = Xg(w);
                b.b.e("apiboot", e, {
                    size: c[s] + "x" + c[A],
                    maptype: fl[a.get("mapTypeId") || "c"]
                })
            })
        }),
        D = new Qo(w, b),
        G = D.j;
    mm(D.b, 0);
    Q[v](a, ql, w);
    h.set("panes", D.d);
    h.set("innerContainer", D.e);
    var O = new Ou(D.e, G);
    O[q]("draggingCursor", a);
    O[q]("size", D);
    Q[y](a, "zoom_changed", function () {
        O.get("zoom") != a.get("zoom") && O.set("zoom", a.get("zoom"))
    });
    O.set("zoom", a.get("zoom"));
    O[q]("disablePanMomentum", a);
    c && (i = new zu(G), i[q]("center", a), i[q]("projectionBounds", 
h), i[q]("offset", h), c[q]("div", i), c[q]("center", i, "newCenter"), c[q]("zoom", O), c[q]("tilt", h), c[q]("size", h), Q[wb](c, We, function () {
        f("dm")
    }));
    S(Le, function (b) {
        b.Pd(a, p, new Pf)
    });
    var M;
    M = new gv(G);
    Q[v](O, ll, a);
    Q[v](O, kl, a);
    Q[v](O, jl, a);
    Q[v](M, Ve, a);
    Q[v](M, "tilesloaded", a);
    M.set("panes", D.d);
    M[q]("styles", a);
    vo[20] && M[q]("animatedZoom", a);
    var c = a[pk],
        i = new zv(Av),
        X = new zv(Av),
        R = new zv(Bv(0.999999)),
        ta = new zv(Bv(0.9));
    c[q]("streetView", i, "available");
    c[q]("traffic", X, "available");
    var la = {};
    la.obliques = 
R;
    la.street_view = i;
    la.traffic = X;
    la.report_map_issue = ta;
    var Aa = new uv;
    Aa[q]("tilt", a);
    Aa[q]("zoom", a);
    Aa[q]("mapTypeId", a);
    Aa[q]("aerial", la.obliques, "available");
    h[q]("tilt", Aa);
    var c = new rv,
        g = new Lv(g, c, la, a.Xb),
        ga = new Xu(a[$j]);
    ga[q]("bounds", a);
    ga[q]("heading", a);
    ga[q]("mapTypeId", a);
    ga[q]("tilt", a.N());
    g[q]("epochs", p);
    g[q]("tilt", a);
    g[q]("heading", a);
    g[q]("bounds", a);
    g[q]("zoom", a);
    g[q]("mapMaker", a);
    g[q]("mapType", ga);
    var Da = Q[y](p, "epochs_changed", function () {
        if (p.get("epochs")) {
            Q[jb](Da);
            mh(e, 
 "ep");
            z()
        }
    }),
        uc = new Pv(a.Xb),
        g = new yv;
    g[q]("styles", a);
    g[q]("mapTypeStyles", ga, "styles");
    h[q]("apistyle", g);
    g = new Co(["mapMaker"], "style", function (a) {
        return "api|smartmaps" + (a ? ",mapmaker" : "")
    });
    g[q]("mapMaker", a);
    h[q]("style", g);
    var La = new Au;
    h.set("projectionController", La);
    M[q]("zoom", O);
    M[q]("size", D);
    M[q]("projection", La);
    M[q]("projectionBounds", La);
    M[q]("mapType", ga);
    La[q]("projectionTopLeft", M);
    La[q]("offset", M);
    La[q]("latLngCenter", a, "center");
    La[q]("zoom", O);
    La[q]("size", D);
    La[q]("projection", 
a);
    M[q]("fixedPoint", La);
    a[q]("bounds", La, "latLngBounds", j);
    var Jb = new Tv(G);
    Jb[q]("title", a.N());
    O[q]("draggableCursor", a.N(), "cursor");
    var va = a.j;
    L([Te, wl, "rightclick", Gk, Fk, ul, vl, tl], function (b) {
        Q[y](O, b, function (c, d, e) {
            var f = La[Hj](c, j),
                c = new P(f.lat(), f.lng()),
                f = a.get("projection")[db](f),
                d = new dl(c, e, d, f),
                g;
            var e = Wl(),
                c = va.e,
                h = d.b && Hk(d.b);
            if (va.b) {
                f = va.b;
                g = va.f
            } else if (b == Fk || h) g = f = k;
            else {
                for (var i = 0; f = c[i++];) if (g = f.j(d, l)) break;
                if (!g && e) for (i = 0; f = c[i++];) if (g = f.j(d, j)) break
            }
            if (f != va.d || g != 
va.B) {
                va.d && va.d.e(Fk, d, va.B);
                va.d = f;
                va.B = g;
                f && f.e(Gk, d, g)
            }
            if (f) if (b == Gk || b == Fk) g = l;
            else {
                f.e(b, d, g);
                g = j
            } else g = !! h;
            if (!g) {
                O.set("draggableCursor", a.get("draggableCursor"));
                Jb.set("title", k);
                delete d.b;
                Q[o](a, b, d)
            }
        })
    });
    O[q]("projectionTopLeft", La);
    h[q]("zoom", O);
    h[q]("center", a);
    h[q]("size", D);
    h[q]("mapType", ga);
    h[q]("offset", M);
    h[q]("layoutPixelBounds", M);
    h[q]("pixelBounds", M);
    h[q]("projectionTopLeft", M);
    h[q]("projectionBounds", M, "viewProjectionBounds");
    h[q]("projectionCenterQ", La);
    g = new xm({
        projection: 1
    });
g[q]("immutable", h, "mapType");
    i = new Bo({
        projection: new Sg
    });
    i[q]("projection", g);
    a[q]("projection", i);
    g = {};
    h.set("mouseEventTarget", g);
    var ud = a.N(),
        vf = ud.get("mouseEventTarget");
    L([il, hl, gl], function (a) {
        Q[v](vf, a, O);
        Q[y](O, a, function (b) {
            b && (b.latLng = La.fromContainerPixelToLatLng(b.X));
            Q[o](ud, a, b);
            (!b || !b.handled) && Q[o](M, a, b)
        })
    });
    Q[v](g, sl, O);
    Q[v](h, Xe, M);
    Q[v](h, ol, M);
    Q[v](h, nl, M);
    Q[y](h, Ye, function (a) {
        if (a instanceof P) {
            a = La[tk](a);
            Q[o](M, Ye, a.x, a.y)
        } else aa(ja("panTo: latLng must be of type LatLng"))
    });
Q[v](h, ml, M);
    Q[y](h, "pantolatlngbounds", function (a) {
        if (a instanceof ne) Q[o](M, ml, cl(La.get("projection"), a, La.get("zoom"), La.get("offset"), La.get("center")));
        else aa(ja("panToBounds: latLngBounds must be of type LatLngBounds"))
    });
    Q[y](O, "zoom_changed", function () {
        O.get("zoom") != a.get("zoom") && a.set("zoom", O.get("zoom"))
    });
    var Sb = new sv;
    Sb[q]("mapTypeMaxZoom", ga, "maxZoom");
    Sb[q]("mapTypeMinZoom", ga, "minZoom");
    Sb[q]("maxZoom", a);
    Sb[q]("minZoom", a);
    Sb[q]("trackerMaxZoom", c, "maxZoom");
    O[q]("zoomRange", 
Sb);
    M[q]("zoomRange", Sb);
    O[q]("draggable", a);
    O[q]("scrollwheel", a);
    O[q]("disableDoubleClickZoom", a);
    g = a.n;
    g[q]("scrollwheel", a);
    g[q]("disableDoubleClickZoom", a);
    b.wf || (Q[wb](M, "tilesloading", function () {
        S("controls", function (b) {
            var c = new b.Bf(D.b);
            h.set("layoutManager", c);
            M[q]("layoutBounds", c, "bounds");
            b.Eh(c, a, ga, D.b, uc, la.street_view, la.report_map_issue, Sb, Aa, La);
            b.Fh(a, G)
        })
    }), Q[wb](M, pl, function () {
        f("vt");
        S("util", function (b) {
            b.f.b();
            m[Hb](N(b.b, b.b.f), 5E3);
            b.d(a)
        })
    }), Q[wb](M, "tilesloaded", function () {
        mh(e, 
 "mt");
        z()
    }));
    var jc = new Sv(300);
    jc[q]("input", a, "bounds");
    Q[y](jc, "idle_changed", function () {
        jc.get("idle") && Q[o](a, "idle")
    });
    var bc = a[rk];
    Q[y](bc, Nf, d);
    Q[y](bc, Mf, d);
    bc[sb](function (a, b) {
        d(b)
    });
    g = D.d.mapPane;
    0 == sm()[kc]("file://") && (!Tl(Sl) && !Ak() && !vo[14]) && S("stats", function (a) {
        a.b.b("ev=api_watermark&cad=" + yl({
            src: "apiv3"
        }))
    });
    g = new Tu(g, a[rk], k);
    c = a.N();
    g[q]("size", c);
    g[q]("zoom", c);
    g[q]("offset", c);
    g[q]("projectionBounds", c);
    b.wf || f("mb")
};
H.ei = Hu;
H.Wb = function (a, b, c, d, e) {
    function f() {
        var f = g.get("panes");
        if (!f) return l;
        f = new Hu(f[c], k);
        f[q]("size", g);
        f[q]("zoom", g);
        f[q]("offset", g);
        f[q]("projectionBounds", g);
        f.set("mapType", b);
        b.projection || Q[u](a, "projection_changed", f, f.bf);
        K(d) && f.set("zIndex", d);
        Q[v](a, Ve, f);
        e && e(f);
        return j
    }
    var g = a.N();
    if (g && !f()) var h = Q[y](g, "panes_changed", function () {
        f() && Q[jb](h)
    })
};
H.jl = Lo;
H.fitBounds = function (a, b) {
    function c() {
        var c = Xg(a[Gj]());
        pa(c, c[s] - 2 * d);
        pa(c, n.max(1, c[s]));
        Ja(c, c[A] - 2 * d);
        Ja(c, n.max(1, c[A]));
        var f = a[Zj]();
        var g = b,
            h = g[Lb](),
            g = g[nb](),
            i = h.lng(),
            p = g.lng();
        i > p && (h = new P(h.lat(), i - 360, j));
        h = f[db](h);
        i = f[db](g);
        g = n.max(h.x, i.x) - n.min(h.x, i.x);
        h = n.max(h.y, i.y) - n.min(h.y, i.y);
        g > c[s] || h > c[A] ? c = 0 : (g = Zk(c[s] + 1E-12) - Zk(g + 1E-12), c = Zk(c[A] + 1E-12) - Zk(h + 1E-12), c = n[gb](n.min(g, c)));
        h = Xk(f, b, 0);
        f = Yk(f, new T((h.F + h.G) / 2, (h.D + h.H) / 2), 0);
        K(c) && (a.setCenter(f), a[tb](c))
    }
    var d = 40;
    a[Zj]() ? 
c() : Q[wb](a, "projection_changed", c)
};
var Vv = new Uv;
lf[Ie] = function (a) {
    eval(a)
};
of(Ie, Vv);