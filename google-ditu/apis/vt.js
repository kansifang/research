var vt;

'use strict';
Op.prototype.L = Z(217, function (a, b, c, d) {
    var e = Yp(a),
        f = this.F[e] || k,
        g = f ? f.fE.sf() : e;
    (b = jia(this, g, f, Ap(new L(b, c), d), d, hia)) ? Xp(this, "pth", e) : Xp(this, "ptm", e);
    return ra(b) ? b : !a.epoch && (this.D[g] || Og(this.C, g)) ? -1 : k
});
mz.prototype.wK = Z(215, function (a) {
    for (var b = this.clone(), a = sy(a), c = a.length, d = 0; d < c; d++) b.remove(a[d]);
    return b
});
KB.prototype.wK = Z(214, function (a) {
    var b;
    b: {
        b = Math.max(this.left, a.left);
        var c = Math.min(this.left + this.width, a.left + a.width);
        if (b <= c) {
            var d = Math.max(this.top, a.top),
                e = Math.min(this.top + this.height, a.top + a.height);
            if (d <= e) {
                b = new KB(b, d, c - b, e - d);
                break b
            }
        }
        b = k
    }
    if (!b || !b.height || !b.width) a = [this.clone()];
    else {
        b = [];
        var c = this.top,
            d = this.height,
            e = this.left + this.width,
            f = this.top + this.height,
            g = a.left + a.width,
            j = a.top + a.height;
        a.top > this.top && (b.push(new KB(this.left, this.top, this.width, a.top - this.top)), c = a.top, d -= a.top - this.top);
        j < f && (b.push(new KB(this.left, j, this.width, f - j)), d = j - c);
        a.left > this.left && b.push(new KB(this.left, c, a.left - this.left, d));
        g < e && b.push(new KB(g, c, e - g, d));
        a = b
    }
    return a
});
var dVa = function (a) {
    var b = {};

    b.id = a.getId();
    b.epoch = a.hh();
    a.D.length && (b.parameters = oia(a.D, a.C));
    return b
},
    eVa = function (a, b) {
        var c = b instanceof Bj ? Vp(b) : Yp(b);
        return a.G[c] || 0
    },
    W_ = {},
    fVa = function (a) {
        if (W_[a]) return W_[a];
        a = String(a);
        if (!W_[a]) {
            var b = /function ([^\\(]+)/.exec(a);
            W_[a] = b ? b[1] : "[Anonymous]"
        }
        return W_[a]
    },
    X_ = function (a, b, c, d) {
        a[0] = b;
        a[1] = c;
        a[2] = d
    },
    gVa = function (a, b) {
        var c = [];
        if (Og(b, a)) c.push("[...circular reference...]");
        else if (a && 50 > b.length) {
            c.push(fVa(a) + "(");
            for (var d = a.arguments, e = 0; e < d.length; e++) {
                0 < e && c.push(", ");
                var f;
                f = d[e];
                switch (typeof f) {
                case "object":
                    f = f ? "object" : "null";
                    break;
                case "string":
                    break;
                case "number":
                    f = String(f);
                    break;
                case "boolean":
                    f = f ? "true" : "false";
                    break;
                case "function":
                    f = (f = fVa(f)) ? f : "[fn]";
                    break;
                default:
                    f = typeof f
                }
                40 < f.length && (f = f.substr(0, 40) + "...");
                c.push(f)
            }
            b.push(a);
            c.push(")\\n");
            try {
                c.push(gVa(a.caller, b))
            } catch (g) {
                c.push("[exception trying to get caller]\\n")
            }
        } else a ? c.push("[...long stack...]") : c.push("[end]");
        return c.join("")
    },
    hVa = function (a, b, c) {
        if (na(b)) for (var d = 0; d < b.length; d++) hVa(a, String(b[d]), c);
        else b != k && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
    },
    Y_ = function (a) {
        Error.captureStackTrace ? Error.captureStackTrace(this, Y_) : this.stack = Error().stack || "";
        a && (this.message = String(a))
    };

B(Y_, Error);
Y_.prototype.name = "CustomError";
var Z_ = function (a) {
    a[0] = 1;
    a[1] = 0;
    a[2] = 0;
    a[3] = 0;
    a[4] = 0;
    a[5] = 1;
    a[6] = 0;
    a[7] = 0;
    a[8] = 0;
    a[9] = 0;
    a[10] = 1;
    a[11] = 0;
    a[12] = 0;
    a[13] = 0;
    a[14] = 0;
    a[15] = 1
},
    $_ = function (a, b, c, d, e) {
        a[12] = b;
        a[13] = c;
        a[14] = d;
        a[15] = e
    },
    a0 = function (a, b, c, d, e, f, g, j, m, n, p, q, s, t, x, D, I) {
        a[0] = b;
        a[1] = c;
        a[2] = d;
        a[3] = e;
        a[4] = f;
        a[5] = g;
        a[6] = j;
        a[7] = m;
        a[8] = n;
        a[9] = p;
        a[10] = q;
        a[11] = s;
        a[12] = t;
        a[13] = x;
        a[14] = D;
        a[15] = I;
        return a
    },
    b0 = function () {
        return new Float32Array(4)
    },
    iVa = function (a, b) {
        return a.length == b.length && a[0] == b[0] && a[1] == b[1] && a[2] == b[2]
    },
    c0 = function (a) {
        var b = a[0],
            c = a[1],
            a = a[2];
        return Math.sqrt(b * b + c * c + a * a)
    },
    d0 = function (a, b) {
        a[0] = b[0];
        a[1] = b[1];
        a[2] = b[2]
    },
    jVa = function () {
        var a = Array(3);
        X_(a, 0, 0, 0);
        return a
    },
    e0 = function () {
        return new Float32Array(3)
    },
    kVa = function (a) {
        return gVa(a || arguments.callee.caller, [])
    },
    f0 = function () {
        Y_.call(this)
    };

B(f0, Y_);
f0.prototype.message = "Deferred was cancelled";
f0.prototype.name = "CancelledError";
var g0 = function () {
    Y_.call(this)
};

B(g0, Y_);
g0.prototype.message = "Deferred has already fired";
g0.prototype.name = "AlreadyCalledError";
var lVa = function (a) {
    return 2 * Math.atan(1 / a)
},
    h0 = function (a) {
        return 1 / Math.tan(a / 2)
    },
    i0 = function (a, b) {
        this.origin = jVa();
        a && d0(this.origin, a);
        this.dir = jVa();
        b && d0(this.dir, b)
    };

i0.prototype.set = function (a, b) {
    d0(this.origin, a);
    d0(this.dir, b)
};

i0.prototype.equals = function (a) {
    return a != k && iVa(this.origin, a.origin) && iVa(this.dir, a.dir)
};

var j0 = function (a) {
    a = Nz(a);
    a = ip(a, -1.48442222974533, 1.48442222974533);
    return 1 / (6371010 * Math.cos(a))
},
    mVa = function (a, b) {
        var c = a[0],
            d = a[1],
            e = a[2],
            f = a[3],
            g = a[4],
            j = a[5],
            m = a[6],
            n = a[7],
            p = Math.cos(b),
            q = Math.sin(b);
        a[0] = c * p + g * q;
        a[1] = d * p + j * q;
        a[2] = e * p + m * q;
        a[3] = f * p + n * q;
        a[4] = c * -q + g * p;
        a[5] = d * -q + j * p;
        a[6] = e * -q + m * p;
        a[7] = f * -q + n * p
    },
    k0 = function (a, b, c, d) {
        var e = a[0],
            f = a[1],
            g = a[2],
            j = a[3],
            m = a[4],
            n = a[5],
            p = a[6],
            q = a[7],
            s = a[8],
            t = a[9],
            x = a[10],
            D = a[11],
            I = Math.cos(b),
            K = Math.sin(b),
            J = 1 - I,
            b = c * c * J + I,
            M = 0 * c * J + d * K,
            Q = c * d * J - 0 * K,
            aa = 0 * c * J - d * K,
            ba = 0 * J + I,
            ia = 0 * d * J + c * K,
            ha = c * d * J + 0 * K,
            c = 0 * d * J - c * K,
            d = d * d * J + I;
        a0(a, e * b + m * M + s * Q, f * b + n * M + t * Q, g * b + p * M + x * Q, j * b + q * M + D * Q, e * aa + m * ba + s * ia, f * aa + n * ba + t * ia, g * aa + p * ba + x * ia, j * aa + q * ba + D * ia, e * ha + m * c + s * d, f * ha + n * c + t * d, g * ha + p * c + x * d, j * ha + q * c + D * d, a[12], a[13], a[14], a[15])
    },
    l0 = function (a, b, c, d) {
        a0(a, a[0] * b, a[1] * b, a[2] * b, a[3] * b, a[4] * c, a[5] * c, a[6] * c, a[7] * c, a[8] * d, a[9] * d, a[10] * d, a[11] * d, a[12], a[13], a[14], a[15])
    },
    m0 = function (a, b, c, d) {
        $_(a, a[0] * b + a[4] * c + a[8] * d + a[12], a[1] * b + a[5] * c + a[9] * d + a[13], a[2] * b + a[6] * c + a[10] * d + a[14], a[3] * b + a[7] * c + a[11] * d + a[15])
    },
    nVa = function (a, b, c, d) {
        var e = Math.cos(b),
            b = Math.sin(b),
            f = Math.cos(c),
            c = Math.sin(c),
            g = Math.cos(d),
            d = Math.sin(d);
        a[0] = e * g - f * b * d;
        a[1] = f * e * d + g * b;
        a[2] = d * c;
        a[3] = 0;
        a[4] = -e * d - g * f * b;
        a[5] = e * f * g - b * d;
        a[6] = g * c;
        a[7] = 0;
        a[8] = c * b;
        a[9] = -e * c;
        a[10] = f;
        a[11] = 0;
        a[12] = 0;
        a[13] = 0;
        a[14] = 0;
        a[15] = 1
    },
    n0 = function (a, b) {
        var c = Math.cos(b),
            d = 1 - c,
            e = Math.sin(b);

        return a0(a, 0 * d + c, 0 * d + 1 * e, 0 * d - 0 * e, 0, 0 * d - 1 * e, 0 * d + c, 0 * d + 0 * e, 0, 0 * d + 0 * e, 0 * d - 0 * e, 1 * d + c, 0, 0, 0, 0, 1)
    },
    o0 = function (a, b, c, d) {
        Z_(a);
        a[0] = b;
        a[5] = c;
        a[10] = d;
        a[15] = 1;
        return a
    },
    oVa = function (a, b, c) {
        var d = b[0],
            e = b[1],
            f = b[2],
            b = b[3];
        c[0] = d * a[0] + e * a[4] + f * a[8] + b * a[12];
        c[1] = d * a[1] + e * a[5] + f * a[9] + b * a[13];
        c[2] = d * a[2] + e * a[6] + f * a[10] + b * a[14];
        c[3] = d * a[3] + e * a[7] + f * a[11] + b * a[15]
    },
    p0 = function (a, b, c) {
        var d = b[0],
            e = b[1],
            b = b[2];
        c[0] = d * a[0] + e * a[4] + b * a[8];
        c[1] = d * a[1] + e * a[5] + b * a[9];
        c[2] = d * a[2] + e * a[6] + b * a[10]
    },
    q0 = function (a, b, c) {
        var d = b[0],
            e = b[1],
            b = b[2];
        c[0] = d * a[0] + e * a[4] + b * a[8] + a[12];
        c[1] = d * a[1] + e * a[5] + b * a[9] + a[13];
        c[2] = d * a[2] + e * a[6] + b * a[10] + a[14];
        return c
    },
    r0 = function (a, b) {
        var c = a[0],
            d = a[1],
            e = a[2],
            f = a[3],
            g = a[4],
            j = a[5],
            m = a[6],
            n = a[7],
            p = a[8],
            q = a[9],
            s = a[10],
            t = a[11],
            x = a[12],
            D = a[13],
            I = a[14],
            K = a[15],
            J = c * j - d * g,
            M = c * m - e * g,
            Q = c * n - f * g,
            aa = d * m - e * j,
            ba = d * n - f * j,
            ia = e * n - f * m,
            ha = p * D - q * x,
            xa = p * I - s * x,
            Aa = p * K - t * x,
            Ra = q * I - s * D,
            Ba = q * K - t * D,
            kb = s * K - t * I,
            oa = J * kb - M * Ba + Q * Ra + aa * Aa - ba * xa + ia * ha;
        0 != oa && (oa = 1 / oa, b[0] = (j * kb - m * Ba + n * Ra) * oa, b[1] = (-d * kb + e * Ba - f * Ra) * oa, b[2] = (D * ia - I * ba + K * aa) * oa, b[3] = (-q * ia + s * ba - t * aa) * oa, b[4] = (-g * kb + m * Aa - n * xa) * oa, b[5] = (c * kb - e * Aa + f * xa) * oa, b[6] = (-x * ia + I * Q - K * M) * oa, b[7] = (p * ia - s * Q + t * M) * oa, b[8] = (g * Ba - j * Aa + n * ha) * oa, b[9] = (-c * Ba + d * Aa - f * ha) * oa, b[10] = (x * ba - D * Q + K * J) * oa, b[11] = (-p * ba + q * Q - t * J) * oa, b[12] = (-g * Ra + j * xa - m * ha) * oa, b[13] = (c * Ra - d * xa + e * ha) * oa, b[14] = (-x * aa + D * M - I * J) * oa, b[15] = (p * aa - q * M + s * J) * oa)
    },
    pVa = function (a, b) {
        if (b == a) {
            var c = a[1],
                d = a[2],
                e = a[3],
                f = a[6],
                g = a[7],
                j = a[11];
            b[1] = a[4];
            b[2] = a[8];
            b[3] = a[12];
            b[4] = c;
            b[6] = a[9];
            b[7] = a[13];
            b[8] = d;
            b[9] = f;
            b[11] = a[14];
            b[12] = e;
            b[13] = g;
            b[14] = j
        } else b[0] = a[0], b[1] = a[4], b[2] = a[8], b[3] = a[12], b[4] = a[1], b[5] = a[5], b[6] = a[9], b[7] = a[13], b[8] = a[2], b[9] = a[6], b[10] = a[10], b[11] = a[14], b[12] = a[3], b[13] = a[7], b[14] = a[11], b[15] = a[15]
    },
    s0 = function (a, b, c) {
        var d = a[0],
            e = a[1],
            f = a[2],
            g = a[3],
            j = a[4],
            m = a[5],
            n = a[6],
            p = a[7],
            q = a[8],
            s = a[9],
            t = a[10],
            x = a[11],
            D = a[12],
            I = a[13],
            K = a[14],
            a = a[15],
            J = b[0],
            M = b[1],
            Q = b[2],
            aa = b[3],
            ba = b[4],
            ia = b[5],
            ha = b[6],
            xa = b[7],
            Aa = b[8],
            Ra = b[9],
            Ba = b[10],
            kb = b[11],
            oa = b[12],
            rb = b[13],
            hb = b[14],
            b = b[15];
        c[0] = d * J + j * M + q * Q + D * aa;
        c[1] = e * J + m * M + s * Q + I * aa;
        c[2] = f * J + n * M + t * Q + K * aa;
        c[3] = g * J + p * M + x * Q + a * aa;
        c[4] = d * ba + j * ia + q * ha + D * xa;
        c[5] = e * ba + m * ia + s * ha + I * xa;
        c[6] = f * ba + n * ia + t * ha + K * xa;
        c[7] = g * ba + p * ia + x * ha + a * xa;
        c[8] = d * Aa + j * Ra + q * Ba + D * kb;
        c[9] = e * Aa + m * Ra + s * Ba + I * kb;
        c[10] = f * Aa + n * Ra + t * Ba + K * kb;
        c[11] = g * Aa + p * Ra + x * Ba + a * kb;
        c[12] = d * oa + j * rb + q * hb + D * b;
        c[13] = e * oa + m * rb + s * hb + I * b;
        c[14] = f * oa + n * rb + t * hb + K * b;
        c[15] = g * oa + p * rb + x * hb + a * b
    },
    qVa = function (a, b, c) {
        c[0] = a[b];
        c[1] = a[b + 4];
        c[2] = a[b + 8];
        c[3] = a[b + 12]
    },
    rVa = function (a, b, c) {
        b *= 4;
        c[0] = a[b];
        c[1] = a[b + 1];
        c[2] = a[b + 2];
        c[3] = a[b + 3]
    },
    sVa = function (a, b) {
        a[12] = b[0];
        a[13] = b[1];
        a[14] = b[2];
        a[15] = b[3]
    },
    t0 = function () {
        return new Float32Array(16)
    },
    tVa = function (a, b, c) {
        c[0] = a[0] * b;
        c[1] = a[1] * b;
        c[2] = a[2] * b;
        c[3] = a[3] * b
    },
    uVa = function (a, b, c) {
        var d = a[0],
            e = a[1],
            a = a[2],
            f = b[0],
            g = b[1],
            b = b[2];
        c[0] = e * b - a * g;
        c[1] = a * f - d * b;
        c[2] = d * g - e * f
    },
    u0 = function (a, b) {
        var c = 1 / c0(a);
        b[0] = a[0] * c;
        b[1] = a[1] * c;
        b[2] = a[2] * c
    },
    v0 = function (a, b, c) {
        c[0] = a[0] * b;
        c[1] = a[1] * b;
        c[2] = a[2] * b
    },
    w0 = function (a, b, c) {
        c[0] = a[0] - b[0];
        c[1] = a[1] - b[1];
        c[2] = a[2] - b[2];
        return c
    },
    vVa = function (a, b, c) {
        var d = qD();
        X_(d, a, b, c);
        return d
    },
    wVa = function (a) {
        var b = qD();
        d0(b, a);
        return b
    },
    x0 = function (a, b, c) {
        var d = e0();
        X_(d, a, b, c);
        return d
    },
    y0 = function (a) {
        var b = e0();
        d0(b, a);
        return b
    },
    xVa = function (a, b, c) {
        return a.left <= b.right + c && b.left <= a.right + c && a.top <= b.bottom + c && b.top <= a.bottom + c
    },
    z0 = function (a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    },
    yVa = function (a, b) {
        return a == b ? i : !a || !b ? l : a.top == b.top && a.right == b.right && a.bottom == b.bottom && a.left == b.left
    },
    A0 = function (a) {
        return 0 == a ? 0 : 0 > a ? -1 : 1
    },
    B0 = function (a, b, c) {
        return Math.abs(a - b) <= (c || 1E-6)
    },
    C0 = function (a, b, c) {
        return a + c * (b - a)
    },
    D0 = function (a, b) {
        this.F = [];
        this.I = a;
        this.K = b || k
    };

v = D0.prototype;
v.vw = l;
v.hE = l;
v.iE = 0;
v.DP = l;
v.b9 = l;
v.xO = 0;
v.cancel = function (a) {
    if (this.vw) this.D instanceof D0 && this.D.cancel();
    else {
        if (this.C) {
            var b = this.C;
            delete this.C;
            a ? b.cancel(a) : (b.xO--, 0 >= b.xO && b.cancel())
        }
        this.I ? this.I.call(this.K, this) : this.DP = i;
        this.vw || (a = new f0, E0(this), F0(this, l, a))
    }
};

v.QW = function (a, b) {
    F0(this, a, b);
    this.iE--;
    0 == this.iE && this.vw && zVa(this)
};

var F0 = function (a, b, c) {
    a.vw = i;
    a.D = c;
    a.hE = !b;
    zVa(a)
},
    E0 = function (a) {
        a.vw && (a.DP || ca(new g0), a.DP = l)
    };

D0.prototype.callback = function (a) {
    E0(this);
    F0(this, i, a)
};

D0.prototype.eK = function (a, b) {
    return AVa(this, a, k, b)
};

var AVa = function (a, b, c, d) {
    a.F.push([b, c, d]);
    a.vw && zVa(a);
    return a
},
    BVa = function (a) {
        return Mg(a.F, function (a) {
            return sa(a[1])
        })
    },
    zVa = function (a) {
        a.G && (a.vw && BVa(a)) && (ja.clearTimeout(a.G), delete a.G);
        a.C && (a.C.xO--, delete a.C);
        for (var b = a.D, c = l, d = l; a.F.length && 0 == a.iE;) {
            var e = a.F.shift(),
                f = e[0],
                g = e[1],
                e = e[2];
            if (f = a.hE ? g : f) try {
                var j = f.call(e || a.K, b);
                y(j) && (a.hE = a.hE && (j == b || j instanceof Error), a.D = b = j);
                b instanceof D0 && (d = i, a.iE++)
            } catch (m) {
                b = m, a.hE = i, BVa(a) || (c = i)
            }
        }
        a.D = b;
        d && a.iE && (AVa(b, A(a.QW, a, i), A(a.QW, a, l)), b.b9 = i);
        c && (a.G = ja.setTimeout(function () {
            ca(b)
        }, 0))
    },
    CVa = function (a) {
        var b = arguments.length;
        if (1 == b && na(arguments[0])) return CVa.apply(k, arguments[0]);
        for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = i;
        return c
    },
    DVa = function (a, b) {
        if (!pa(a) || !pa(b) || a.length != b.length) return l;
        for (var c = a.length, d = 0; d < c; d++) if (a[d] !== b[d]) return l;
        return i
    },
    EVa = function (a) {
        for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c), b %= 4294967296;
        return b
    };

CVa("action", "cite", "data", "formaction", "href", "icon", "manifest", "poster", "src");
new iB;
var G0 = function (a, b, c) {
    this.F = k;
    this.Eo = this;
    this.value = b;
    this.D = [];
    this.I = 0;
    this.K = c || 2;
    this.C = a;
    this.N = l
};

G0.prototype.equals = function (a) {
    return this.get() === a
};

G0.prototype.get = function () {
    return this.Eo.value
};

G0.prototype.Zb = function (a, b) {
    1 == this.K && ca(Error("Calling bindTo on a property that does not allow binding."));
    2 == this.K && this.N && ca(Error("Calling bindTo on a property that only allows a single bind and has already been bound."));
    var c = !this.equals(a.get());
    FVa(this);
    this.F = a;
    a.D.push(this);
    GVa(this, a.Eo);
    c && H0(this, b);
    this.N = i
};

var I0 = function (a, b, c) {
    a.equals(b) || (a.Eo.value = b, H0(a.Eo, c))
},
    FVa = function (a) {
        if (a.F) {
            a.value = h;
            var b = a.F,
                c = Ig(b.D, a);
            0 == b.I ? Qg(b.D, c) : b.D[c] = k;
            a.F = k;
            GVa(a, a)
        }
    },
    GVa = function (a, b) {
        a.Eo = b;
        for (var c = 0, d = a.D.length; c < d; c++) {
            var e = a.D[c];
            e && GVa(e, b)
        }
    },
    H0 = function (a, b) {
        a.C && a.C(b);
        var c = l;
        ++a.I;
        for (var d = 0, e = a.D.length; d < e; d++) {
            var f = a.D[d];
            f ? H0(f, b) : c = i
        }--a.I;
        if (!a.I && c) {
            c = 0;
            e = a.D.length;
            for (d = 0; d < e; d++) a.D[d] && (a.D[c] = a.D[d], ++c);
            a.D.length = c
        }
    };

var J0 = function (a, b, c) {
    if (a.equals(b)) c(h);
    else {
        var d = new G0(function (e) {
            if (a.equals(b)) {
                c(e);
                d.C = h;
                var f = d,
                    g = f.F && y(f.get());
                FVa(f);
                g && H0(f, e)
            }
        });
        d.Zb(a, h)
    }
};

var K0 = function (a, b, c) {
    G0.call(this, a, b, c)
};

B(K0, G0);
K0.prototype.Zb = function (a, b) {
    K0.ia.Zb.call(this, a, b)
};

var L0 = function (a, b, c) {
    G0.call(this, a, b, c)
};

B(L0, K0);
L0.prototype.Zb = function (a, b) {
    L0.ia.Zb.call(this, a, b)
};

L0.prototype.set = function (a, b) {
    I0(this, a, b)
};

L0.prototype.G = function (a) {
    H0(this.Eo, a)
};

var M0 = function (a, b, c, d) {
    G0.call(this, a, b, c);
    this.L = d || 0
};

B(M0, G0);
M0.prototype.Zb = function (a, b) {
    M0.ia.Zb.call(this, a, b)
};

M0.prototype.equals = function (a) {
    var b = this.get();
    return b === a ? i : this.L && y(b) && y(a) ? B0(b, a, this.L) : l
};

var N0 = function (a, b, c, d) {
    M0.call(this, a, b, c, d)
};

B(N0, M0);
N0.prototype.Zb = function (a, b) {
    N0.ia.Zb.call(this, a, b)
};

N0.prototype.set = function (a, b) {
    I0(this, a, b)
};

N0.prototype.G = function (a) {
    H0(this.Eo, a)
};

var O0 = function (a, b, c) {
    G0.call(this, a, b, c)
};

B(O0, G0);
O0.prototype.Zb = function (a, b) {
    O0.ia.Zb.call(this, a, b)
};

var P0 = function (a, b, c) {
    G0.call(this, a, b, c)
};

B(P0, O0);
P0.prototype.Zb = function (a, b) {
    P0.ia.Zb.call(this, a, b)
};

P0.prototype.set = function (a, b) {
    I0(this, a, b)
};

P0.prototype.G = function (a) {
    H0(this.Eo, a)
};

var HVa = function (a, b, c) {
    this.W = a;
    this.P = b;
    this.M = c;
    this.I = this.M.V;
    this.lat = this.W.lat;
    this.lng = this.W.lng;
    this.width = this.W.width;
    this.height = this.W.height;
    this.zoom = this.W.zoom;
    this.rotation = this.W.rotation;
    this.Dc = this.W.Dc;
    this.altitude = this.W.altitude;
    this.Q = this.W.N;
    this.C = this.W.F;
    this.mapTypes = this.W.mapTypes;
    this.D = this.W.C;
    this.V = this.W.I;
    this.Lg = this.W.Lg;
    this.G = this.W.V;
    this.K = this.W.X;
    this.N = this.W.M;
    this.L = this.W.Q;
    this.ca = this.W.ba;
    this.ea = this.W.ca;
    this.ha = this.W.P;
    this.ba = this.W.ha;
    this.Y = this.W.ea;
    this.F = this.W.K;
    this.ma = this.W.ma;
    this.X = this.U = new N0(h, 0);
    this.initialized = this.M.Wc;
    a = new M0;
    a.Zb(this.W.G);
    a.C = A(this.xU, this);
    a = new M0;
    a.Zb(this.M.L);
    a.C = A(this.xU, this)
};

v = HVa.prototype;
v.Tb = function () {
    return this.W.Tb()
};

v.Yy = function (a) {
    this.W.Yy(a)
};

v.Nu = function (a) {
    this.W.Nu(a)
};

v.hS = function (a, b) {
    this.P.hS(a, b)
};

v.xU = function () {
    this.U.set(this.U.get() + 1)
};

var Q0 = function (a) {
    this.K = this.F = this.L = this.I = this.C = 0;
    this.D = [];
    this.G = a || 0
};

Q0.prototype.JC = r("C");
var IVa = function (a) {
    if (a.G) if (1 == a.D.length) a = 0;
    else {
        for (var b = 0, c = 0, d = a.D.length; c < d; c++) b += Math.pow(a.D[c] - a.C, 2);
        a = b / (a.D.length - 1)
    } else a = a.L;
    return a
};

function JVa(a, b, c, d, e, f) {
    this.K = a;
    this.L = b;
    this.Q = c;
    this.U = d;
    this.V = e;
    this.D = f;
    this.M = {};

    this.N = {};

    this.hH = [];
    this.eH = [];
    this.C = [];
    this.MC = new L0(h, l);
    this.oN = new L0(h, l);
    this.I = new L0(h, l);
    this.F = new N0(h, 0);
    this.fH = new N0(h, 0);
    this.G = new P0(h, "");
    this.gH = new N0(h, 0);
    this.Vy = k;
    a = new G0;
    a.C = A(function (a) {
        for (var a = a.get(), b = 0, c; c = this.hH[b]; b++) c(a)
    }, this, a);
    a.Zb(this.L);
    a = new G0;
    a.C = A(function (a) {
        for (var a = a.get(), b = 0, c; c = this.eH[b]; b++) c(a)
    }, this, a);
    a.Zb(this.K);
    KVa(this)
}
var R0 = function (a, b, c) {
    var d = c;
    return function (c) {
        (b ? d != k && c > d : d != k && c < d) && a();
        d = c
    }
},
    LVa = function (a) {
        var b = k;
        return function () {
            if (b) {
                var c = za() - b;
                a.G && a.D.push(c);
                if (a.G && a.D.length > a.G) a.C = a.C - a.D.shift() / a.F + c / a.F;
                else {
                    var d = a.C;
                    a.C += (c - a.C) / ++a.F;
                    a.I += (c - a.C) * (c - d);
                    a.L = 1 == a.F ? 0 : a.I / (a.F - 1)
                }
                a.K = c > a.K ? c : a.K
            }
            b = za()
        }
    },
    KVa = function (a) {
        a.MC.set(i);
        a.oN.set(l);
        a.I.set(l);
        a.F.set(-1);
        a.fH.set(0);
        a.gH.set(0);
        a.G.set("");
        a.C = [];
        a.hH = [];
        a.eH = [];
        a.Oe = k
    };

JVa.prototype.P = function (a, b, c) {
    var d = this.C,
        e;
    for (e in d) d[e](a);
    ln(a, "t2");
    if (a && b && a && b) for (d = 0; d < b.length; ++d) if (Sp(b[d].id)) {
        var f = Yp(b[d]);
        e = eVa(this.D, b[d]) - this.M[f];
        var f = Zp(this.D, b[d]) - this.N[f],
            g = b[d].id;
        0 < e && a.Mb("vtpth" + g, e.toString());
        0 < f && a.Mb("vtptm" + g, f.toString())
    }
    Nl(a);
    c && c();
    KVa(this)
};

var S0 = function (a, b, c) {
    if (a.I.get()) {
        if (b.Ib() == a.G.get()) {
            (c = a.F.get()) && clearTimeout(c);
            a.MC.set(l);
            c = setTimeout(A(a.MC.set, a.MC, i), 1E3);
            a.F.set(c);
            return
        }
        a.pN && a.pN()
    }
    a.G.set(b.Ib());
    a.I.set(i);
    b = Ml(b);
    ln(b, "t0");
    var d = !a.Vy;
    a.Vy = b;
    d && (a.Vy = b, J0(a.U, i, A(function () {
        this.Vy && ln(this.Vy, "t1")
    }, a)), J0(a.V, i, A(function () {
        this.Vy = k;
        this.oN.set(i)
    }, a)));
    a.hH.push(R0(A(function () {
        this.gH.set(this.gH.get() + 1)
    }, a), i, a.L.get()));
    a.eH.push(R0(A(function () {
        this.fH.set(this.fH.get() + 1)
    }, a), i, a.K.get()));
    a.C.push(A(function (a) {
        mn(a, "vtp", this.gH.get())
    }, a));
    a.C.push(A(function (a) {
        mn(a, "vtf", this.fH.get())
    }, a));
    var e = new Q0;
    a.hH.push(R0(LVa(e), l, a.L.get()));
    var f = new Q0;
    a.eH.push(R0(LVa(f), l, a.K.get()));
    a.C.push(function (a) {
        mn(a, "vtpt", e.JC().toFixed(2) + "")
    });
    a.C.push(function (a) {
        mn(a, "vtpv", IVa(e).toFixed(2) + "")
    });
    a.C.push(function (a) {
        mn(a, "vtft", f.JC().toFixed(2) + "")
    });
    a.C.push(function (a) {
        mn(a, "vtfv", IVa(f).toFixed(2) + "")
    });
    var g = new Q0,
        j = 0,
        m = LVa(g),
        d = new G0;
    d.Zb(a.Q);
    d.C = function () {
        j++;
        m();
        return i
    };

    a.C.push(function (a) {
        mn(a, "vtfr", j + "")
    });
    a.C.push(function (a) {
        mn(a, "vtfrt", g.JC().toFixed(2) + "")
    });
    a.C.push(function (a) {
        mn(a, "vtfrv", IVa(g).toFixed(2) + "")
    });
    if (c && c) for (d = 0; d < c.length; ++d) if (Sp(c[d].id)) {
        var n = Yp(c[d]);
        a.M[n] = eVa(a.D, c[d]);
        a.N[n] = Zp(a.D, c[d])
    }
    a.pN = A(a.P, a, b, c, h);
    J0(a.oN, i, A(function () {
        J0(this.MC, i, this.pN)
    }, a))
};

function T0(a) {
    this.O = a;
    this.C = {}
}
var MVa = function (a) {
    return Lg(a, function (b) {
        return b - a[0]
    })
};

T0.prototype.D = function () {
    var a = za();
    bh(this.C, function (b) {
        b.push(a)
    })
};

T0.prototype.ZJ = function (a) {
    this.C[a] = []
};

T0.prototype.eL = function (a) {
    if (this.C[a]) {
        var b = [a, MVa(this.C[a]).join(","), "maps_gl"].join("-"),
            c = {
                ct: "vt_ct_fr"
            };

        c.cad = encodeURIComponent(b);
        this.O.ve("vt_imp", c);
        delete this.C[a]
    }
};

var NVa = ea();
var OVa = function (a, b, c, d) {
    this.ea = a ? a : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function (a) {
        setTimeout(a, 0)
    };

    this.ca = A(this.L, this);
    this.Q = l;
    this.D = U0;
    this.G = 0;
    this.F = 2;
    this.K = this.U = this.M = this.N = 0;
    this.V = l;
    this.C = [];
    this.C[0] = [];
    this.C[1] = [];
    this.C[2] = [];
    this.C[3] = [];
    this.I = [];
    this.ba = !! b;
    this.X = !! d;
    this.Y = c || NVa;
    this.P = l
},
    U0 = 1E3 / 60,
    PVa = 1E4 / 60,
    W0 = function (a, b, c) {
        QVa(b) ? a.V && a.I.push({
            n7: b,
            priority: c
        }) : (V0(b, b.start), b.__maps_realtime_JobScheduler_priority = c, a.C[c].push(b), RVa(a))
    };

OVa.prototype.L = function () {
    var a = za();
    this.Q = l;
    this.V = i;
    var b;
    this.ba ? (SVa(this, a), b = Infinity) : this.X ? (this.P && (b = a - this.K, this.F *= 0.97, this.F += 0.03 * (0 < b ? b : 0)), a - this.U < this.D - (6 + this.G) ? b = a + this.D - this.F : (SVa(this, a), b = za(), this.G *= 0.97, this.G += 0.03 * (b - a), this.D = Math.ceil(1 / U0 * (this.G + this.F + 6)) * U0, this.D = this.D < U0 ? U0 : this.D, this.D = this.D > PVa ? PVa : this.D, b = TVa(this, a, b))) : (SVa(this, a), b = za(), b = TVa(this, a, b));
    for (var c = 2; 0 <= c; c--) {
        var d;
        d = c;
        var e = b,
            f = 2 == d;
        if (!f && za() >= e) d = l;
        else {
            var g = this.C[d];
            if (0 == g.length) d = i;
            else {
                for (var j = [], m = l, n = 0; n < g.length && !m; n++) {
                    var p = g[n];
                    if (p) for (;;) {
                        var q = QVa(p);
                        if (!q) break;
                        var s = q,
                            t = p.constructor.__maps_realtime_JobScheduler_estimator;
                        t || (t = {}, p.constructor.__maps_realtime_JobScheduler_estimator = t);
                        var s = ua(s),
                            x = t[s];
                        x || (x = new this.Y, t[s] = x);
                        t = za();
                        if (f) f = l;
                        else if (t + 0 >= e) {
                            if (t >= e) {
                                m = i;
                                break
                            }
                            j.push(n);
                            break
                        }
                        q = q.apply(p);
                        V0(p, q);
                        za();
                        if (q == k) break
                    }
                }
                f = [];
                for (q = 0; q < j.length; q++)(p = g[j[q]]) && f.push(p);
                m ? (this.C[d] = f.concat(g.slice(n - 1)), d = l) : (this.C[d] = f, d = za() < e)
            }
        }
        if (!d) break
    }
    this.V = l;
    for (c = 0; c < this.I.length; c++) W0(this, this.I[c].n7, this.I[c].priority);
    this.I.length = 0;
    this.P = l;
    for (c = 3; 0 <= c; c--) if (0 < this.C[c].length) {
        this.P = i;
        RVa(this);
        break
    }
    a += U0;
    this.K = za();
    this.K = this.K > a ? this.K : a
};

var TVa = function (a, b, c) {
    a = b + a.D - a.F;
    c -= a;
    0 < c && (c = Math.ceil(c / U0) * U0, a += c);
    return a
},
    SVa = function (a, b) {
        if (a.P) {
            var c = 1E3 / (b - a.U);
            a.N *= 0.7;
            a.N += 0.3 * c;
            a.M *= 0.7;
            a.M += 0.3 * c * c
        }
        a.U = b;
        c = a.C[3];
        if (0 != c.length) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d];
                if (e) for (;;) {
                    var f = QVa(e);
                    if (!f) break;
                    f = f.apply(e);
                    V0(e, f);
                    if (f == k) break
                }
            }
            a.C[3].length = 0
        }
    },
    RVa = function (a) {
        if (!a.Q) {
            var b = a.ea;
            b(a.ca);
            a.Q = i
        }
    },
    QVa = function (a) {
        return a.__maps_realtime_JobScheduler_next_step
    },
    V0 = function (a, b) {
        a.__maps_realtime_JobScheduler_next_step = b
    };

var UVa = function (a) {
    NA.call(this, "RenderComplete", a)
};

B(UVa, NA);
var VVa = function (a) {
    NA.call(this, "RenderStart", a)
};

B(VVa, NA);
var X0 = function (a, b) {
    var c = this.I = new EB(this);
    this.Ak || (this.Ak = []);
    this.Ak.push(c);
    this.C = a;
    this.F = k;
    this.G = l;
    this.D = 3;
    var d = b || ja.document;
    if (d) {
        for (var c = "hidden visibilitychange mozHidden mozvisibilitychange msHidden msvisibilitychange webkitHidden webkitvisibilitychange".split(" "), e = k, f = k, g = 0; g < c.length; g += 2) if (y(d[c[g]])) {
            e = c[g];
            f = c[g + 1];
            break
        }
        e && f && this.I.listen(d, f, function () {
            d[e] || this.lr()
        })
    }
};

B(X0, iB);
var Y0 = function (a, b, c) {
    a.F = b;
    a.D = y(c) ? c : 3;
    a.lr()
};

X0.prototype.lr = function () {
    this.G || (W0(this.C, this, this.D), this.G = i)
};

X0.prototype.start = function () {
    this.G = l;
    this.F && (za(), this.dispatchEvent(new VVa(this)), this.F.run(), this.dispatchEvent(new UVa(this, za())));
    return k
};

var Z0 = function () {
    this.K = this.C = this.I = this.G = h;
    this.F = [];
    this.L = []
};

v = Z0.prototype;
v.clear = function () {
    this.A3();
    this.B3();
    this.C3();
    this.D3();
    for (var a = 0; 32 > a; ++a) this.E3(a), this.G3(a)
};

v.apply = function (a) {
    a.G !== h && a.G !== this.G && this.sD(a.G);
    a.I !== h && a.I !== this.I && this.tD(a.I);
    a.C !== h && a.C !== this.C && this.Hn(a.C);
    a.K !== h && a.K !== this.K && this.Rt(a.K);
    for (var b = 0; 32 > b; ++b) a.F[b] !== h && a.F[b] !== this.F[b] && this.Pv(b, a.F[b]), a.L[b] !== h && a.L[b] !== this.L[b] && this.mD(b, a.L[b])
};

v.sD = fa("G");
v.A3 = function () {
    this.G = h
};

v.tD = fa("I");
v.B3 = function () {
    this.I = h
};

v.Hn = fa("C");
v.C3 = function () {
    this.C = h
};

v.Rt = fa("K");
v.D3 = function () {
    this.K = h
};

v.Pv = function (a, b) {
    this.F[a] = b
};

v.E3 = function (a) {
    delete this.F[a]
};

v.mD = function (a, b) {
    this.L[a] = b
};

v.G3 = function (a) {
    delete this.L[a]
};

var $0 = function () {
    this.K = new ArrayBuffer(248);
    this.G = new Uint8Array(this.K);
    this.C = new Uint16Array(this.K);
    this.I = new Uint32Array(this.K);
    this.F = new Int32Array(this.K);
    this.D = new Float32Array(this.K);
    this.clear()
};

$0.prototype.clear = function () {
    this.Tq(3042);
    this.Tq(2884);
    this.Tq(2929);
    this.Tq(3024);
    this.Tq(32823);
    this.Tq(32926);
    this.Tq(32928);
    this.Tq(3089);
    this.Tq(2960);
    this.x2();
    this.y2();
    this.z2();
    this.G2();
    this.L2();
    this.N2();
    this.P2();
    this.A2();
    this.B2();
    this.C2();
    this.D2();
    this.H2();
    this.O2();
    this.I2();
    this.M2();
    this.T2();
    this.E2();
    this.J2();
    this.S2();
    this.K2();
    for (var a = 0; 32 > a; ++a) this.Q2(a);
    this.w2();
    this.LB(3317);
    this.LB(3333);
    this.LB(37440);
    this.LB(37441);
    this.LB(37443);
    this.R2(33170)
};

$0.prototype.apply = function (a) {
    a1(a, 3042) && b1(a, 3042) != b1(this, 3042) && this.Vk(3042, b1(a, 3042));
    a1(a, 2884) && b1(a, 2884) != b1(this, 2884) && this.Vk(2884, b1(a, 2884));
    a1(a, 2929) && b1(a, 2929) != b1(this, 2929) && this.Vk(2929, b1(a, 2929));
    a1(a, 3024) && b1(a, 3024) != b1(this, 3024) && this.Vk(3024, b1(a, 3024));
    a1(a, 32823) && b1(a, 32823) != b1(this, 32823) && this.Vk(32823, b1(a, 32823));
    a1(a, 32926) && b1(a, 32926) != b1(this, 32926) && this.Vk(32926, b1(a, 32926));
    a1(a, 32928) && b1(a, 32928) != b1(this, 32928) && this.Vk(32928, b1(a, 32928));
    a1(a, 3089) && b1(a, 3089) != b1(this, 3089) && this.Vk(3089, b1(a, 3089));
    a1(a, 2960) && b1(a, 2960) != b1(this, 2960) && this.Vk(2960, b1(a, 2960));
    if (0 <= a.D[3]) {
        var b = a.D[3],
            c = a.D[4],
            d = a.D[5],
            e = a.D[6];
        this.D[3] == b && this.D[4] == c && this.D[5] == d && this.D[6] == e || this.uI(b, c, d, e)
    }
    if (65535 != a.C[14] && (c1(this, l) != c1(a, l) || c1(this, i) != c1(a, i))) b = c1(a, l), c = c1(a, i), c == b && (c = h), this.mC(b, c);
    65535 != a.C[16] && (b = a.C[16], c = a.C[17], d = a.C[18], e = a.C[19], this.C[16] == b && this.C[17] == c && this.C[18] == d && this.C[19] == e || (d == b && e == c && (e = d = h), this.zo(b, c, d, e)));
    65535 != a.C[20] && d1(a) != d1(this) && this.ZD(d1(a));
    0 < a.G[48] && (b = a.D[11], c = 2 == a.G[48], this.D[11] == b && this.G[48] == (c ? 2 : 1) || this.tI(b, c));
    if (65535 != a.C[26]) {
        var b = a.C[26],
            c = a.C[27],
            d = a.F[14],
            e = a.F[15],
            f = a.I[16],
            g = a.I[17];
        this.C[26] == b && this.C[27] == c && this.F[14] == d && this.F[15] == e && this.I[16] == f && this.I[17] == g || (b == c && (d == e && f == g) && (g = e = c = h), this.vo(b, d, f, c, e, g))
    }
    65535 != a.C[36] && (b = a.C[36], c = a.C[37], d = a.C[38], e = a.C[39], f = a.C[40], g = a.C[41], this.C[36] == b && this.C[37] == c && this.C[38] == d && this.C[39] == e && this.C[40] == f && this.C[41] == g || (e == b && (f == c && g == d) && (g = f = e = h), this.er(b, c, d, e, f, g)));
    0 <= a.D[21] && (b = a.D[21], c = a.D[22], d = a.D[23], e = a.D[24], this.D[21] == b && this.D[22] == c && this.D[23] == d && this.D[24] == e || this.VD(b, c, d, e));
    0 <= a.D[25] && e1(a) != e1(this) && this.YD(e1(a));
    1 == a.G[108] && f1(a) != f1(this) && this.ny(f1(a));
    0 < a.G[112] && (b = 2 == a.G[112], c = 2 == a.G[113], d = 2 == a.G[114], e = 2 == a.G[115], WVa(this, b, c, d, e) || this.Fp(b, c, d, e));
    0 < a.G[116] && g1(a) != g1(this) && this.$D(g1(a));
    if (0 < a.G[128] && (h1(this, l) != h1(a, l) || h1(this, i) != h1(a, i))) b = h1(a, l), c = h1(a, i), c == b && (c = h), this.xI(b, c);
    0 <= a.D[33] && (b = a.D[33], c = a.D[34], this.D[33] == b && this.D[34] == c || this.vI(b, c));
    0 <= a.F[37] && (b = a.F[35], c = a.F[36], d = a.F[37], e = a.F[38], this.F[35] == b && this.F[36] == c && this.F[37] == d && this.F[38] == e || this.WD(b, c, d, e));
    a.pl() && (b = a.F[39], c = a.F[40], d = a.F[41], e = a.F[42], this.F[39] == b && this.F[40] == c && this.F[41] == d && this.F[42] == e || this.Mf(b, c, d, e));
    65535 != a.C[86] && i1(a) != i1(this) && this.wo(i1(a));
    65535 != a.C[88] && j1(a) != j1(this) && this.wI(j1(a));
    0 < a.D[45] && k1(a) != k1(this) && this.aE(k1(a));
    0 < a.G[192] && (b = a.D[46], c = a.D[47], (!(0 < this.G[192]) || !(this.D[46] == b && this.D[47] == c)) && this.sI(b, c));
    for (b = 0; 32 > b; ++b) 0 < a.G[196 + b] && l1(a, b) != l1(this, b) && this.Pz(b, l1(a, b));
    65535 != a.C[114] && m1(a) != m1(this) && this.hw(m1(a));
    65535 != a.C[116 + n1[3317]] && o1(a, 3317) != o1(this, 3317) && this.Kn(3317, o1(a, 3317));
    65535 != a.C[116 + n1[3333]] && o1(a, 3333) != o1(this, 3333) && this.Kn(3333, o1(a, 3333));
    65535 != a.C[116 + n1[37440]] && o1(a, 37440) != o1(this, 37440) && this.Kn(37440, o1(a, 37440));
    65535 != a.C[116 + n1[37441]] && o1(a, 37441) != o1(this, 37441) && this.Kn(37441, o1(a, 37441));
    65535 != a.C[116 + n1[37443]] && o1(a, 37443) != o1(this, 37443) && this.Kn(37443, o1(a, 37443));
    65535 != a.C[122] && p1(a) != p1(this) && this.XD(33170, p1(a))
};

var q1 = [];
q1[3042] = 0;
q1[2884] = 1;
q1[2929] = 2;
q1[3024] = 3;
q1[32823] = 4;
q1[32926] = 5;
q1[32928] = 6;
q1[3089] = 7;
q1[2960] = 8;
$0.prototype.Vk = function (a, b) {
    this.G[0 + q1[a]] = b ? 2 : 1
};

var b1 = function (a, b) {
    var c = a.G[0 + q1[b]];
    return 0 == c ? h : 2 == c
},
    a1 = function (a, b) {
        return 0 < a.G[0 + q1[b]]
    };

$0.prototype.Tq = function (a) {
    this.G[0 + q1[a]] = 0
};

$0.prototype.uI = function (a, b, c, d) {
    this.D[3] = a;
    this.D[4] = b;
    this.D[5] = c;
    this.D[6] = d
};

$0.prototype.x2 = function () {
    this.D[3] = -1;
    this.D[4] = -1;
    this.D[5] = -1;
    this.D[6] = -1
};

$0.prototype.mC = function (a, b) {
    this.C[14] = a;
    this.C[15] = b || a
};

var c1 = function (a, b) {
    var c;
    c = b ? a.C[15] : a.C[14];
    return 65535 == c ? h : c
};

$0.prototype.y2 = function () {
    this.C[14] = 65535;
    this.C[15] = 65535
};

$0.prototype.zo = function (a, b, c, d) {
    this.C[16] = a;
    this.C[17] = b;
    this.C[18] = c === h ? a : c;
    this.C[19] = d === h ? b : d
};

$0.prototype.z2 = function () {
    this.C[16] = 65535;
    this.C[17] = 65535;
    this.C[18] = 65535;
    this.C[19] = 65535
};

$0.prototype.ZD = function (a) {
    this.C[20] = a
};

var d1 = function (a) {
    a = a.C[20];
    return 65535 == a ? h : a
};

v = $0.prototype;
v.G2 = function () {
    this.C[20] = 65535
};

v.tI = function (a, b) {
    this.D[11] = a;
    this.G[48] = b ? 2 : 1
};

v.L2 = function () {
    this.G[48] = 0
};

v.vo = function (a, b, c, d, e, f) {
    this.C[26] = a;
    this.C[27] = d == h ? a : d;
    this.F[14] = b;
    this.F[15] = e == h ? b : e;
    this.I[16] = c;
    this.I[17] = f == h ? c : f
};

v.N2 = function () {
    this.C[26] = 65535;
    this.C[27] = 65535
};

v.er = function (a, b, c, d, e, f) {
    this.C[36] = a;
    this.C[37] = b;
    this.C[38] = c;
    this.C[39] = d === h ? a : d;
    this.C[40] = e === h ? b : e;
    this.C[41] = f === h ? c : f
};

v.P2 = function () {
    this.C[36] = 65535;
    this.C[37] = 65535;
    this.C[38] = 65535;
    this.C[39] = 65535;
    this.C[40] = 65535;
    this.C[41] = 65535
};

v.VD = function (a, b, c, d) {
    this.D[21] = a;
    this.D[22] = b;
    this.D[23] = c;
    this.D[24] = d
};

v.A2 = function () {
    this.D[21] = -1;
    this.D[22] = -1;
    this.D[23] = -1;
    this.D[24] = -1
};

v.YD = function (a) {
    this.D[25] = a
};

var e1 = function (a) {
    a = a.D[25];
    return 0 > a ? h : a
};

$0.prototype.B2 = function () {
    this.D[25] = -1
};

$0.prototype.ny = function (a) {
    this.I[26] = a;
    this.G[108] = 1
};

var f1 = function (a) {
    return 1 != a.G[108] ? h : a.I[26]
};

$0.prototype.C2 = function () {
    this.G[108] = 0
};

$0.prototype.Fp = function (a, b, c, d) {
    this.G[112] = a ? 2 : 1;
    this.G[113] = b ? 2 : 1;
    this.G[114] = c ? 2 : 1;
    this.G[115] = d ? 2 : 1
};

$0.prototype.D2 = function () {
    this.G[112] = 0;
    this.G[113] = 0;
    this.G[114] = 0;
    this.G[115] = 0
};

var WVa = function (a, b, c, d, e) {
    return a.G[112] == (b ? 2 : 1) && a.G[113] == (c ? 2 : 1) && a.G[114] == (d ? 2 : 1) && a.G[115] == (e ? 2 : 1)
};

$0.prototype.$D = function (a) {
    this.G[116] = a ? 2 : 1
};

var g1 = function (a) {
    a = a.G[116];
    return 0 == a ? h : 2 == a
};

$0.prototype.H2 = function () {
    this.G[116] = 0
};

$0.prototype.xI = function (a, b) {
    this.I[30] = a;
    this.I[31] = b === h ? a : b;
    this.G[128] = 1
};

var h1 = function (a, b) {
    return 0 == a.G[128] ? h : b ? a.I[31] : a.I[30]
};

v = $0.prototype;
v.O2 = function () {
    this.G[128] = 0
};

v.vI = function (a, b) {
    this.D[33] = a;
    this.D[34] = b
};

v.I2 = function () {
    this.D[33] = -1;
    this.D[34] = -1
};

v.WD = function (a, b, c, d) {
    this.F[35] = a;
    this.F[36] = b;
    this.F[37] = c;
    this.F[38] = d
};

v.M2 = function () {
    this.F[37] = -1;
    this.F[38] = -1
};

v.Mf = function (a, b, c, d) {
    this.F[39] = a;
    this.F[40] = b;
    this.F[41] = c;
    this.F[42] = d
};

var r1 = function (a) {
    var b = a.F[41];
    return 0 > b ? h : [a.F[39], a.F[40], b, a.F[42]]
};

$0.prototype.pl = function () {
    return 0 <= this.F[41]
};

$0.prototype.T2 = function () {
    this.F[41] = -1;
    this.F[42] = -1
};

$0.prototype.wo = function (a) {
    this.C[86] = a
};

var i1 = function (a) {
    a = a.C[86];
    return 65535 == a ? h : a
};

$0.prototype.E2 = function () {
    this.C[86] = 65535
};

$0.prototype.wI = function (a) {
    this.C[88] = a
};

var j1 = function (a) {
    a = a.C[88];
    return 65535 == a ? h : a
};

$0.prototype.J2 = function () {
    this.C[88] = 65535
};

$0.prototype.aE = function (a) {
    this.D[45] = a
};

var k1 = function (a) {
    a = a.D[45];
    return 0 > a ? h : a
};

$0.prototype.S2 = function () {
    this.D[45] = -1
};

$0.prototype.sI = function (a, b) {
    this.D[46] = a;
    this.D[47] = b;
    this.G[192] = 1
};

$0.prototype.K2 = function () {
    this.G[192] = 0
};

$0.prototype.Pz = function (a, b) {
    this.G[196 + a] = b ? 2 : 1
};

var l1 = function (a, b) {
    var c = a.G[196 + b];
    return 0 == c ? h : 2 == c
};

$0.prototype.Q2 = function (a) {
    this.G[196 + a] = 0
};

$0.prototype.hw = function (a) {
    this.C[114] = a
};

var m1 = function (a) {
    a = a.C[114];
    return 65535 == a ? h : a
};

$0.prototype.w2 = function () {
    this.C[114] = 65535
};

var n1 = [];
n1[3317] = 0;
n1[3333] = 1;
n1[37440] = 2;
n1[37441] = 3;
n1[37443] = 4;
$0.prototype.Kn = function (a, b) {
    this.C[116 + n1[a]] = b
};

var o1 = function (a, b) {
    var c = a.C[116 + n1[b]];
    return 65535 == c ? h : c
};

$0.prototype.LB = function (a) {
    this.C[116 + n1[a]] = 65535
};

$0.prototype.XD = function (a, b) {
    this.C[122] = b
};

var p1 = function (a) {
    a = a.C[122];
    return 65535 == a ? h : a
};

$0.prototype.R2 = function () {
    this.C[122] = 65535
};

var s1 = function (a) {
    this.Z = a;
    a.scissor(0, 0, 0, 0);
    a.viewport(0, 0, 0, 0);
    a.enable(3024);
    a.enableVertexAttribArray(0);
    a = this.Z;
    this.Z = k;
    $0.call(this);
    this.Z = a
};

B(s1, $0);
v = s1.prototype;
v.Vk = function (a, b) {
    if (b1(this, a) != b) {
        s1.ia.Vk.call(this, a, b);
        var c = this.Z;
        c && (b ? c.enable(a) : c.disable(a))
    }
};

v.Tq = function (a) {
    3024 == a ? this.Vk(a, i) : this.Vk(a, l)
};

v.uI = function (a, b, c, d) {
    if (!(this.D[3] == a && this.D[4] == b && this.D[5] == c && this.D[6] == d)) {
        s1.ia.uI.call(this, a, b, c, d);
        var e = this.Z;
        e && e.blendColor(a, b, c, d)
    }
};

v.x2 = function () {
    this.uI(0, 0, 0, 0)
};

v.mC = function (a, b) {
    var c = b === h ? a : b;
    if (!(c1(this, l) == a && c1(this, i) == c)) {
        s1.ia.mC.call(this, a, b);
        var d = this.Z;
        d && (c == a ? d.blendEquation(a) : d.blendEquationSeparate(a, c))
    }
};

v.y2 = function () {
    this.mC(32774)
};

v.zo = function (a, b, c, d) {
    var e = c === h ? a : c,
        f = d === h ? b : d;
    this.C[16] == a && this.C[17] == b && this.C[18] == e && this.C[19] == f || (s1.ia.zo.call(this, a, b, c, d), (c = this.Z) && (e == a && f == b ? c.blendFunc(a, b) : c.blendFuncSeparate(a, b, e, f)))
};

v.z2 = function () {
    this.zo(1, 0)
};

v.ZD = function (a) {
    if (d1(this) != a) {
        s1.ia.ZD.call(this, a);
        var b = this.Z;
        b && b.depthFunc(a)
    }
};

v.G2 = function () {
    this.ZD(513)
};

v.tI = function (a, b) {
    if (!(this.D[11] == a && this.G[48] == (b ? 2 : 1))) {
        s1.ia.tI.call(this, a, b);
        var c = this.Z;
        c && c.sampleCoverage(a, b)
    }
};

v.L2 = function () {
    this.tI(1, l)
};

v.vo = function (a, b, c, d, e, f) {
    var g = d === h ? a : d,
        j = e === h ? b : e,
        m = f === h ? c : f;
    if (!(this.C[26] == a && this.C[27] == g && this.F[14] == b && this.F[15] == j && this.I[16] == c && this.I[17] == m) && (s1.ia.vo.call(this, a, b, c, d, e, f), d = this.Z)) g == a && j == b && m == c ? d.stencilFunc(a, b, c) : (d.stencilFuncSeparate(1028, a, b, c), d.stencilFuncSeparate(1029, g, j, m))
};

v.N2 = function () {
    this.vo(519, 0, 4294967295)
};

v.er = function (a, b, c, d, e, f) {
    var g = d === h ? a : d,
        j = e === h ? b : e,
        m = f === h ? c : f;
    if (!(this.C[36] == a && this.C[37] == b && this.C[38] == c && this.C[39] == g && this.C[40] == j && this.C[41] == m) && (s1.ia.er.call(this, a, b, c, d, e, f), d = this.Z)) g == a && j == b && m == c ? d.stencilOp(a, b, c) : (d.stencilOpSeparate(1028, a, b, c), d.stencilOpSeparate(1029, g, j, m))
};

v.P2 = function () {
    this.er(7680, 7680, 7680)
};

v.VD = function (a, b, c, d) {
    if (!(this.D[21] == a && this.D[22] == b && this.D[23] == c && this.D[24] == d)) {
        s1.ia.VD.call(this, a, b, c, d);
        var e = this.Z;
        e && e.clearColor(a, b, c, d)
    }
};

v.A2 = function () {
    this.VD(0, 0, 0, 0)
};

v.YD = function (a) {
    if (e1(this) != a) {
        s1.ia.YD.call(this, a);
        var b = this.Z;
        b && b.clearDepth(a)
    }
};

v.B2 = function () {
    this.YD(1)
};

v.ny = function (a) {
    if (f1(this) != a) {
        s1.ia.ny.call(this, a);
        var b = this.Z;
        b && b.clearStencil(a)
    }
};

v.C2 = function () {
    this.ny(0)
};

v.Fp = function (a, b, c, d) {
    if (!WVa(this, a, b, c, d)) {
        s1.ia.Fp.call(this, a, b, c, d);
        var e = this.Z;
        e && e.colorMask(a, b, c, d)
    }
};

v.D2 = function () {
    this.Fp(i, i, i, i)
};

v.$D = function (a) {
    if (g1(this) != a) {
        s1.ia.$D.call(this, a);
        var b = this.Z;
        b && b.depthMask(a)
    }
};

v.H2 = function () {
    this.$D(i)
};

v.xI = function (a, b) {
    var c = b === h ? a : b;
    if (!(h1(this, l) == a && h1(this, i) == c)) {
        s1.ia.xI.call(this, a, b);
        var d = this.Z;
        d && (c == a ? d.stencilMask(a) : (d.stencilMaskSeparate(1028, a), d.stencilMaskSeparate(1029, c)))
    }
};

v.O2 = function () {
    this.xI(4294967295)
};

v.vI = function (a, b) {
    if (!(this.D[33] == a && this.D[34] == b)) {
        s1.ia.vI.call(this, a, b);
        var c = this.Z;
        c && c.depthRange(a, b)
    }
};

v.I2 = function () {
    this.vI(0, 1)
};

v.WD = function (a, b, c, d) {
    if (!(this.F[35] == a && this.F[36] == b && this.F[37] == c && this.F[38] == d)) {
        s1.ia.WD.call(this, a, b, c, d);
        var e = this.Z;
        e && e.scissor(a, b, c, d)
    }
};

v.M2 = function () {
    this.WD(0, 0, 0, 0)
};

v.Mf = function (a, b, c, d) {
    if (!(this.F[39] == a && this.F[40] == b && this.F[41] == c && this.F[42] == d)) {
        s1.ia.Mf.call(this, a, b, c, d);
        var e = this.Z;
        e && e.viewport(a, b, c, d)
    }
};

v.T2 = function () {
    this.Mf(0, 0, 0, 0)
};

v.wo = function (a) {
    if (i1(this) != a) {
        s1.ia.wo.call(this, a);
        var b = this.Z;
        b && b.cullFace(a)
    }
};

v.E2 = function () {
    this.wo(1029)
};

v.wI = function (a) {
    if (j1(this) != a) {
        s1.ia.wI.call(this, a);
        var b = this.Z;
        b && b.frontFace(a)
    }
};

v.J2 = function () {
    this.wI(2305)
};

v.aE = function (a) {
    if (k1(this) != a) {
        s1.ia.aE.call(this, a);
        var b = this.Z;
        b && b.lineWidth(a)
    }
};

v.S2 = function () {
    this.aE(1)
};

v.sI = function (a, b) {
    if (!(0 < this.G[192]) || !(this.D[46] == a && this.D[47] == b)) {
        s1.ia.sI.call(this, a, b);
        var c = this.Z;
        c && c.polygonOffset(a, b)
    }
};

v.K2 = function () {
    this.sI(0, 0)
};

v.Pz = function (a, b) {
    if (l1(this, a) != b) {
        s1.ia.Pz.call(this, a, b);
        var c = this.Z;
        c && (b ? c.enableVertexAttribArray(a) : c.disableVertexAttribArray(a))
    }
};

v.Q2 = function (a) {
    this.Pz(a, l)
};

v.hw = function (a) {
    if (m1(this) != a) {
        s1.ia.hw.call(this, a);
        var b = this.Z;
        b && b.activeTexture(a)
    }
};

v.w2 = function () {
    this.hw(33984)
};

v.Kn = function (a, b) {
    if (o1(this, a) != b) {
        s1.ia.Kn.call(this, a, b);
        var c = this.Z;
        c && c.pixelStorei(a, b)
    }
};

v.LB = function (a) {
    switch (a) {
    case 3317:
    case 3333:
        this.Kn(a, 4);
        break;
    case 37440:
    case 37441:
        this.Kn(a, 0);
        break;
    default:
        this.Kn(a, 37444)
    }
};

v.XD = function (a, b) {
    if (p1(this) != b) {
        s1.ia.XD.call(this, a, b);
        var c = this.Z;
        c && c.hint(a, b)
    }
};

v.R2 = function (a) {
    this.XD(a, 4352)
};

var t1 = function (a, b) {
    Z0.call(this);
    this.D = a;
    this.N = b;
    this.M = nr && !tr("563.3");
    var c = this.D;
    this.D = k;
    this.clear();
    this.D = c
};

B(t1, Z0);
v = t1.prototype;
v.sD = function (a) {
    if (this.M || this.G !== a) t1.ia.sD.call(this, a), this.D && this.D.bindBuffer(34962, a)
};

v.A3 = function () {
    this.sD(k)
};

v.tD = function (a) {
    if (this.M || this.I !== a) t1.ia.tD.call(this, a), this.D && this.D.bindBuffer(34963, a)
};

v.B3 = function () {
    this.tD(k)
};

v.Hn = function (a) {
    if (this.M || this.C !== a) t1.ia.Hn.call(this, a), this.D && this.D.bindFramebuffer(36160, a)
};

v.C3 = function () {
    this.Hn(k)
};

v.Rt = function (a) {
    if (this.M || this.K !== a) t1.ia.Rt.call(this, a), this.D && this.D.bindRenderbuffer(36161, a)
};

v.D3 = function () {
    this.Rt(k)
};

v.Pv = function (a, b) {
    if (this.M || this.F[a] !== b) t1.ia.Pv.call(this, a, b), this.D && (this.D.getParameter(35661), this.N.hw(33984 + a), this.D.bindTexture(3553, b))
};

v.E3 = function (a) {
    this.Pv(a, k)
};

v.mD = function (a, b) {
    if (this.M || this.L[a] !== b) t1.ia.mD.call(this, a, b), this.D && (this.D.getParameter(35661), this.N.hw(33984 + a), this.D.bindTexture(34067, b))
};

v.G3 = function (a) {
    this.mD(a, k)
};

var u1 = function () {
    this.D = [0, 0];
    this.C = [0, 0];
    this.K = 0;
    this.I = this.F = k;
    this.G = {}
},
    XVa = function (a, b, c, d, e, f) {
        this.G = a;
        this.item = b;
        this.I = c;
        this.C = k;
        this.next = d;
        this.D = e;
        this.F = f
    },
    YVa = function (a, b, c) {
        a.D[0] = y(b) ? b : a.D[0];
        a.D[1] = y(c) ? c : a.D[1]
    };

u1.prototype.add = function (a, b, c, d) {
    c = c || 0;
    d = d || 0;
    if (c > this.D[0] || d > this.D[1]) return -1;
    var e = this.K++,
        a = new XVa(e, a, b, this.F, c, d);
    this.G[e] = a;
    this.F && (this.F.C = a);
    this.F = a;
    this.C[0] += c;
    this.C[1] += d;
    this.I == k && (this.I = a);
    ZVa(this);
    return e
};

u1.prototype.get = function (a) {
    return (a = this.G[a]) ? a.item : h
};

var ZVa = function (a) {
    for (var b = a.I; b && (a.C[0] > a.D[0] || a.C[1] > a.D[1]);) {
        var c = b,
            b = b.C;
        if (a.C[0] > a.D[0] && 0 < c.D || a.C[1] > a.D[1] && 0 < c.F || 0 == c.D && 0 == c.F) c.I && c.I(c.G, c.item), a.remove(c.G)
    }
};

v = u1.prototype;
v.wb = function (a) {
    if ((a = this.G[a]) && a.C)(a.C.next = a.next) ? a.next.C = a.C : this.I = a.C, a.C = k, a.next = this.F, this.F = this.F.C = a
};

v.remove = function (a) {
    var b = this.G[a];
    b && (b.C ? b.C.next = b.next : this.F = b.next, b.next ? b.next.C = b.C : this.I = b.C, b.C = b.next = b.item = k, b.G = -1, delete this.G[a], this.C[0] -= b.D, this.C[1] -= b.F)
};

v.Se = function (a, b, c) {
    var d = this.G[a];
    if (!d) return l;
    b = y(b) ? b : d.D;
    c = y(c) ? c : d.F;
    if (b > this.D[0] || c > this.D[1]) return d.I(a, d.item), this.remove(a), l;
    this.C[0] -= d.D;
    this.C[1] -= d.F;
    d.D = b;
    d.F = c;
    this.C[0] += d.D;
    this.C[1] += d.F;
    ZVa(this);
    return -1 != d.G
};

v.contains = function (a) {
    return a in this.G
};

v.clear = function () {
    for (var a = this.F; a; a = a.next) a.I(a.G, a.item);
    this.F = this.I = k;
    this.G = [];
    this.C[0] = this.C[1] = 0
};

var v1 = function (a, b, c, d) {
    this.eb = new u1;
    YVa(this.eb, b, c || Infinity);
    this.Z = a;
    this.L = d || 0;
    this.G = 0;
    this.C = [];
    this.F = [];
    this.D = [];
    this.K = A(this.I, this, this.F);
    this.M = A(this.I, this, this.C);
    this.N = A(this.I, this, this.D)
};

v = v1.prototype;
v.contains = function (a) {
    return this.eb.contains(a)
};

v.wb = function (a) {
    this.eb.wb(a)
};

v.Se = function (a, b, c) {
    return this.eb.Se(a, b, c)
};

v.clear = function () {
    this.eb.clear()
};

v.remove = function (a) {
    this.eb.remove(a)
};

var w1 = function (a, b, c) {
    return a.eb.add(b, a.M, c, 0)
};

v1.prototype.sj = function (a, b, c, d) {
    return this.eb.add(a, b, c, d)
};

var x1 = function (a, b) {
    return a.eb.get(b)
};

v1.prototype.createTexture = function (a) {
    var b = this.Z,
        c = b.createTexture();
    b.bindTexture(3553, c);
    b.texParameteri(3553, 10241, a);
    b.texParameteri(3553, 10240, a);
    b.texParameteri(3553, 10242, 33071);
    b.texParameteri(3553, 10243, 33071);
    return this.eb.add(c, this.K, 0, 1)
};

v1.prototype.I = function (a, b, c) {
    b = this.eb.G[b];
    this.G += b && b.D;
    a.push(c);
    if (this.G >= this.L) {
        for (a = 0; a < this.C.length; a++) this.Z.D.deleteBuffer(this.C[a]);
        for (a = 0; a < this.F.length; a++) this.Z.D.deleteTexture(this.F[a]);
        for (a = 0; a < this.D.length; a++) this.Z.D.deleteRenderbuffer(this.D[a]);
        this.G = 0;
        this.C.splice(0, this.C.length);
        this.F.splice(0, this.F.length);
        this.D.splice(0, this.D.length)
    }
};

var $Va = function (a, b) {
    this.G = a.createProgram();
    this.D = a;
    this.M = b;
    this.N = [];
    this.F = [];
    this.L = [];
    this.C = [];
    this.I = {};

    this.K = {}
};

v = $Va.prototype;
v.activate = function () {
    this.M.G != this && (this.M.G = this, this.D.useProgram(this.G))
};

v.attachShader = function (a) {
    this.N.push(a);
    this.D.attachShader(this.G, a)
};

v.getAttribLocation = function (a) {
    var b = this.K[a];
    b === h && (b = this.D.getAttribLocation(this.G, a), this.K[a] = b);
    return b
};

v.getParameter = function (a) {
    return this.D.getProgramParameter(this.G, a)
};

v.X3 = function () {
    return this.D.getProgramInfoLog(this.G)
};

v.Fb = function () {
    return this.D.isProgram(this.G)
};

v.link = function () {
    this.D.linkProgram(this.G);
    this.K = {};

    this.F = [];
    this.C = [];
    this.I = {};

    for (var a = this.D.getProgramParameter(this.G, 35718), b = 0, c, d = 0; d < a; ++d) {
        var e = this.D.getActiveUniform(this.G, d);
        if (0 <= e.name.indexOf("[")) {
            var f = e.name.substr(0, e.name.indexOf("[")),
                g = e.size;
            this.I[f] = b;
            for (var j = 0; j < g; ++j) {
                c = b++;
                var m = f + "[" + j + "]";
                this.I[m] = c;
                this.L[c] = g - j;
                this.F[c] = this.D.getUniformLocation(this.G, m);
                this.C[c] = aWa(e.type)
            }
        } else c = b++, this.I[e.name] = c, this.L[c] = 0, this.F[c] = this.D.getUniformLocation(this.G, e.name), this.C[c] = aWa(e.type)
    }
};

v.getUniformLocation = function (a) {
    return this.I[a] !== h ? this.I[a] : -1
};

v.W0 = function (a, b) {
    -1 != a && b != this.C[a] && (this.C[a] = b, this.D.uniform1f(this.F[a], b))
};

v.R0 = function (a, b, c) {
    if (-1 != a) {
        var d = this.C[a];
        if (b != d[0] || c != d[1]) d[0] = b, d[1] = c, this.D.uniform2f(this.F[a], b, c)
    }
};

v.S0 = function (a, b, c, d) {
    if (-1 != a) {
        var e = this.C[a];
        if (b != e[0] || c != e[1] || d != e[2]) e[0] = b, e[1] = c, e[2] = d, this.D.uniform3f(this.F[a], b, c, d)
    }
};

v.pK = function (a, b, c, d, e) {
    if (-1 != a) {
        var f = this.C[a];
        if (b != f[0] || c != f[1] || d != f[2] || e != f[3]) f[0] = b, f[1] = c, f[2] = d, f[3] = e, this.D.uniform4f(this.F[a], b, c, d, e)
    }
};

v.X0 = function (a, b) {
    if (-1 != a) {
        var c = b;
        "boolean" == typeof this.C[a] && (c = !! b);
        c != this.C[a] && (this.C[a] = c, this.D.uniform1i(this.F[a], b))
    }
};

v.lZ = function (a, b) {
    if (-1 != a) {
        var c = l,
            d;
        for (d = 0; !c && d < b.length / 4; ++d) c = b[4 * d] != this.C[a + d][0] || b[4 * d + 1] != this.C[a + d][1] || b[4 * d + 2] != this.C[a + d][2] || b[4 * d + 3] != this.C[a + d][3];
        if (c) {
            for (d = 0; d < b.length / 4; ++d) this.C[a + d][0] = b[4 * d], this.C[a + d][1] = b[4 * d + 1], this.C[a + d][2] = b[4 * d + 2], this.C[a + d][3] = b[4 * d + 3];
            this.D.uniform4fv(this.F[a], b)
        }
    }
};

v.T0 = function (a, b, c) {
    if (-1 != a) {
        var b = l,
            d;
        for (d = 0; !b && d < c.length / 4; ++d) b = c[4 * d] != this.C[a + d][0] || c[4 * d + 1] != this.C[a + d][1] || c[4 * d + 2] != this.C[a + d][2] || c[4 * d + 3] != this.C[a + d][3];
        if (b) {
            for (d = 0; d < c.length / 4; ++d) this.C[a + d][0] = c[4 * d], this.C[a + d][1] = c[4 * d + 1], this.C[a + d][2] = c[4 * d + 2], this.C[a + d][3] = c[4 * d + 3];
            this.D.uniformMatrix2fv(this.F[a], l, c)
        }
    }
};

v.qK = function (a, b, c) {
    if (-1 != a) {
        for (var d = l, e, b = 0; !d && b < c.length / 16; ++b) d = 16 * b, e = this.C[a + b], d = c[d] != e[0] || c[d + 1] != e[1] || c[d + 2] != e[2] || c[d + 3] != e[3] || c[d + 4] != e[4] || c[d + 5] != e[5] || c[d + 6] != e[6] || c[d + 7] != e[7] || c[d + 8] != e[8] || c[d + 9] != e[9] || c[d + 10] != e[10] || c[d + 11] != e[11] || c[d + 12] != e[12] || c[d + 13] != e[13] || c[d + 14] != e[14] || c[d + 15] != e[15];
        if (d) {
            for (b = 0; b < c.length / 16; ++b) {
                e = this.C[a + b];
                for (var d = 16 * b, f = 0; 16 > f; ++f) e[f] = c[d + f]
            }
            this.D.uniformMatrix4fv(this.F[a], l, c)
        }
    }
};

var aWa = function (a) {
    switch (a) {
    case 35670:
        return l;
    case 5124:
    case 5126:
    case 35678:
    case 35680:
        return 0;
    case 35664:
        return new Float32Array(2);
    case 35667:
        return new Int32Array(2);
    case 35671:
        return [l, l];
    case 35665:
        return new Float32Array(3);
    case 35668:
        return new Int32Array(3);
    case 35672:
        return [l, l, l];
    case 35666:
        return new Float32Array(4);
    case 35669:
        return new Int32Array(4);
    case 35673:
        return [l, l, l, l];
    case 35674:
        return new Float32Array(4);
    case 35675:
        return new Float32Array(9);
    case 35676:
        return new Float32Array(16)
    }
    return k
};

var y1 = function (a, b, c, d) {
    this.D = a;
    this.state = new s1(this.D);
    this.F = new t1(this.D, this.state);
    this.C = new v1(this, b || 125829120, c || 1500, d || 8388608);
    this.G = k;
    aB(a.canvas, "webglcontextlost", this.L9, l, this);
    aB(a.canvas, "webglcontextrestored", this.M9, l, this)
};

y1.prototype.ql = function () {
    return this.D.canvas
};

y1.prototype.K = function () {
    return this.D.drawingBufferWidth || this.D.canvas.width
};

y1.prototype.I = function () {
    return this.D.drawingBufferHeight || this.D.canvas.height
};

var z1 = function (a, b, c, d, e, f) {
    a.D.texImage2D(3553, 0, b, c, d, 0, e, 5121, f)
};

v = y1.prototype;
v.texImage2D = function () {
    this.D.texImage2D.apply(this.D, arguments)
};

v.activeTexture = function (a) {
    this.state.hw(a)
};

v.clearColor = function (a, b, c, d) {
    this.state.VD(a, b, c, d)
};

v.clearDepth = function (a) {
    this.state.YD(a)
};

v.depthFunc = function (a) {
    this.state.ZD(a)
};

var A1 = function (a, b) {
    a.state.$D(b)
};

y1.prototype.disable = function (a) {
    this.state.Vk(a, l)
};

var B1 = function (a, b) {
    a.state.Pz(b, l)
};

v = y1.prototype;
v.enable = function (a) {
    this.state.Vk(a, i)
};

v.enableVertexAttribArray = function (a) {
    this.state.Pz(a, i)
};

v.hint = function (a, b) {
    this.state.XD(a, b)
};

v.isEnabled = function (a) {
    return b1(this.state, a)
};

v.lineWidth = function (a) {
    this.state.aE(a)
};

v.RM = function (a, b, c, d) {
    this.state.WD(a, b, c, d)
};

v.viewport = function (a, b, c, d) {
    this.state.Mf(a, b, c, d)
};

v.bindBuffer = function (a, b) {
    34962 == a ? this.F.sD(b) : this.F.tD(b)
};

v.bindTexture = function (a, b) {
    var c = m1(this.state) - 33984;
    3553 == a ? this.F.Pv(c, b) : this.F.mD(c, b)
};

v.attachShader = function (a, b) {
    a.attachShader && a.attachShader(b)
};

v.createProgram = function () {
    return new $Va(this.D, this)
};

v.getAttribLocation = function (a, b) {
    return a.getAttribLocation ? a.getAttribLocation(b) : -1
};

v.getProgramParameter = function (a, b) {
    return a.getParameter ? a.getParameter(b) : -1
};

v.getProgramInfoLog = function (a) {
    return a.X3 ? a.X3() : ""
};

v.getUniformLocation = function (a, b) {
    return a.getUniformLocation ? a.getUniformLocation(b) : -1
};

v.tfa = function (a) {
    return a.Fb ? a.Fb() : l
};

v.linkProgram = function (a) {
    a.link && a.link()
};

v.uniform1f = function (a, b) {
    var c = this.G;
    c && c.W0 && c.W0(a, b)
};

v.uniform1i = function (a, b) {
    var c = this.G;
    c && c.X0 && c.X0(a, b)
};

v.useProgram = function (a) {
    a.activate && a.activate()
};

v.bufferData = function (a, b, c) {
    this.D.bufferData(a, b, c)
};

v.MV = function (a) {
    return this.D.checkFramebufferStatus(a)
};

v.clear = function (a) {
    this.D.clear(a)
};

v.compileShader = function (a) {
    this.D.compileShader(a)
};

v.createBuffer = function () {
    return this.D.createBuffer()
};

v.NV = function () {
    return this.D.createFramebuffer()
};

v.OV = function () {
    return this.D.createRenderbuffer()
};

v.createShader = function (a) {
    return this.D.createShader(a)
};

v.createTexture = function () {
    return this.D.createTexture()
};

v.drawArrays = function (a, b, c) {
    this.D.drawArrays(a, b, c)
};

v.drawElements = function (a, b, c, d) {
    this.D.drawElements(a, b, c, d)
};

v.finish = function () {
    this.D.finish()
};

v.getParameter = function (a) {
    return this.D.getParameter(a)
};

v.getShaderParameter = function (a, b) {
    return this.D.getShaderParameter(a, b)
};

v.getShaderInfoLog = function (a) {
    return this.D.getShaderInfoLog(a)
};

v.rfa = function (a, b) {
    return this.D.getVertexAttrib(a, b)
};

v.sfa = function (a) {
    return this.D.isBuffer(a)
};

v.PV = function (a) {
    return this.D.isFramebuffer(a)
};

v.ufa = function (a) {
    return this.D.isRenderbuffer(a)
};

v.vfa = function (a) {
    return this.D.isShader(a)
};

v.wfa = function (a) {
    return this.D.isTexture(a)
};

v.readPixels = function (a, b, c, d, e, f, g) {
    this.D.readPixels(a, b, c, d, e, f, g)
};

v.shaderSource = function (a, b) {
    this.D.shaderSource(a, b)
};

v.texParameteri = function (a, b, c) {
    this.D.texParameteri(a, b, c)
};

v.vertexAttribPointer = function (a, b, c, d, e, f) {
    this.D.vertexAttribPointer(a, b, c, d, e, f)
};

v.L9 = function (a) {
    a.preventDefault()
};

v.M9 = function () {
    this.C.clear();
    this.G = k;
    this.F.clear();
    this.state.clear()
};

var bWa = function (a) {
    this.Z = a;
    for (var b in this.Z) b in this || (this[b] = "function" == typeof this.Z[b] ? A(this.Z[b], this.Z) : this.Z[b]);
    this.D = [];
    this.C = [];
    aB(a.canvas, "webglcontextlost", this.mba, l, this)
};

v = bWa.prototype;
v.createTexture = function () {
    return C1(this, this.Z.createTexture())
};

v.deleteTexture = function (a) {
    D1(a.C);
    this.Z.deleteTexture(a)
};

v.bindTexture = function (a, b) {
    b.C.wb();
    this.Z.bindTexture.apply(this.Z, arguments)
};

v.framebufferTexture2D = function (a, b, c, d, e) {
    d.C.wb();
    this.Z.framebufferTexture2D.apply(this.Z, arguments)
};

v.createBuffer = function () {
    return C1(this, this.Z.createBuffer())
};

v.deleteBuffer = function (a) {
    D1(a.C);
    this.Z.deleteBuffer(a)
};

v.bindBuffer = function (a, b) {
    b.C.wb();
    this.Z.bindBuffer.apply(this.Z, arguments)
};

v.createFramebuffer = function () {
    return C1(this, this.Z.createFramebuffer())
};

v.deleteFramebuffer = function (a) {
    D1(a.C);
    this.Z.deleteFramebuffer(a)
};

v.bindFramebuffer = function (a, b) {
    b && b.C.wb();
    this.Z.bindFramebuffer.apply(this.Z, arguments)
};

v.createRenderbuffer = function () {
    return C1(this, this.Z.createRenderbuffer())
};

v.deleteRenderbuffer = function (a) {
    D1(a.C);
    this.Z.deleteRenderbuffer(a)
};

v.bindRenderbuffer = function (a, b) {
    b && b.C.wb();
    this.Z.bindRenderbuffer.apply(this.Z, arguments)
};

v.framebufferRenderbuffer = function (a, b, c, d) {
    d.C.wb();
    this.Z.framebufferRenderbuffer.apply(this.Z, arguments)
};

v.createProgram = function () {
    return C1(this, this.Z.createProgram())
};

v.deleteProgram = function (a) {
    D1(a.C);
    this.Z.deleteProgram(a)
};

v.attachShader = function (a, b) {
    a.C.wb();
    b.C.wb();
    this.Z.attachShader.apply(this.Z, arguments)
};

v.detachShader = function (a, b) {
    a.C.wb();
    b.C.wb();
    this.Z.detachShader.apply(this.Z, arguments)
};

v.getActiveAttrib = function (a, b) {
    a.C.wb();
    return this.Z.getActiveAttrib.apply(this.Z, arguments)
};

v.getActiveUniform = function (a, b) {
    a.C.wb();
    return this.Z.getActiveUniform.apply(this.Z, arguments)
};

v.getAttachedShaders = function (a) {
    a.C.wb();
    return this.Z.getAttachedShaders.apply(this.Z, arguments)
};

v.getProgramParameter = function (a, b) {
    a.C.wb();
    return this.Z.getProgramParameter.apply(this.Z, arguments)
};

v.getProgramInfoLog = function (a) {
    a.C.wb();
    return this.Z.getProgramInfoLog.apply(this.Z, arguments)
};

v.getUniform = function (a, b) {
    a.C.wb();
    return this.Z.getUniform.apply(this.Z, arguments)
};

v.getUniformLocation = function (a, b) {
    a.C.wb();
    return this.Z.getUniformLocation.apply(this.Z, arguments)
};

v.linkProgram = function (a) {
    a.C.wb();
    this.Z.linkProgram.apply(this.Z, arguments)
};

v.useProgram = function (a) {
    a && a.C.wb();
    this.Z.useProgram.apply(this.Z, arguments)
};

v.validateProgram = function (a) {
    a.C.wb();
    this.Z.validateProgram.apply(this.Z, arguments)
};

v.bindAttribLocation = function (a, b, c) {
    a.C.wb();
    this.Z.bindAttribLocation.apply(this.Z, arguments)
};

v.createShader = function () {
    return C1(this, this.Z.createShader.apply(this.Z, arguments))
};

v.deleteShader = function (a) {
    D1(a.C);
    this.Z.deleteShader(a)
};

v.compileShader = function (a) {
    a.C.wb();
    this.Z.compileShader.apply(this.Z, arguments)
};

v.getShaderParameter = function (a, b) {
    a.C.wb();
    return this.Z.getShaderParameter.apply(this.Z, arguments)
};

v.getShaderInfoLog = function (a) {
    a.C.wb();
    return this.Z.getShaderInfoLog.apply(this.Z, arguments)
};

v.getShaderSource = function (a) {
    a.C.wb();
    return this.Z.getShaderSource.apply(this.Z, arguments)
};

v.shaderSource = function (a, b) {
    a.C.wb();
    this.Z.shaderSource.apply(this.Z, arguments)
};

v.mba = function () {
    for (var a = this.C.length, b = 0; b < a; ++b) {
        var c = this.C[b];
        c.C || (c.C = i, za())
    }
    this.C = []
};

var C1 = function (a, b) {
    var c = new cWa(b);
    a.D.push(c);
    a.C.push(c);
    return b
},
    cWa = function (a) {
        a.C = this;
        za();
        this.C = this.D = l
    },
    D1 = function (a) {
        a.D && ca(Error("WebGL Object deleted more than once!"));
        a.D = i;
        za()
    };

cWa.prototype.wb = function () {
    this.C && ca(Error("WebGL Object used after context lost!"));
    this.D && ca(Error("WebGL Object used after being deleted!"));
    za()
};

var dWa = ["experimental-webgl", "moz-webgl", "webgl"],
    kWa = function (a, b, c, d) {
        if (d) {
            c = function (a) {
                ja.WebGLRenderingContext && y1.call(this, a)
            };

            B(c, y1);
            var e = eWa(a),
                c = new c(e);
            fWa(y1.prototype, c);
            c.ql = function () {
                return a
            };

            c.K = function () {
                return a.width
            };

            c.I = function () {
                return a.height
            };

            c.state = new $0;
            c.state.Mf(0, 0, 512, 512);
            c.F = new Z0;
            c.createBuffer = function () {
                return {}
            };

            c.createTexture = function () {
                return {}
            };

            c.OV = function () {
                return {}
            };

            c.NV = function () {
                return {}
            };

            c.createProgram = gWa;
            c.createShader = function () {
                return {}
            };

            c.getParameter = hWa;
            c.getShaderParameter = u(1);
            c.rfa = function (a, b) {
                return 34338 == b && 0 == a
            };

            c.isEnabled = iWa;
            c.PV = u(i);
            c.ufa = u(i);
            c.sfa = u(i);
            c.tfa = u(i);
            c.vfa = u(i);
            c.wfa = u(i);
            c.MV = u(36053);
            return c
        }
        if (d) c = eWa(a);
        else {
            (d = jWa(a, h, h)) || ca(Error("Could not find a 3d context"));
            if (b) {
                var f = d,
                    g;
                g = ja.console && ja.console.log ?
                function (a, b, c, d) {

                    ja.console.log(a + " gave error " + c + " (" + d + ") with arguments " + b)
                } : z;
                var b = {},
                    j = {};

                for (e in f)"number" == typeof f[e] && (j[f[e]] = e);
                for (var m in f) b[m] = "function" == typeof f[m] ? A(function (a) {
                    var b = Array.prototype.slice.call(arguments, 1),
                        c = f[a].apply(f, b),
                        d = f.getError();
                    d && g(a, b, j[d], d);
                    return c
                }, k, m) : f[m];
                d = b
            }
            c && (d = new bWa(d));
            c = d
        }
        return new y1(c)
    },
    jWa = function (a, b, c) {
        for (var d = k, b = b || {
            stencil: i,
            preserveDrawingBuffer: i
        }, e = dWa.length, f = 0; f < e; ++f) {
            try {
                d = a.getContext(dWa[f], b)
            } catch (g) {}
            if (d) break
        }
        d && (!c && 4 > d.getParameter(35660)) && (d = k);
        return d
    },
    eWa = function (a) {
        var b = ea(),
            c = ja.WebGLRenderingContext;
        c && B(b, WebGLRenderingContext);
        b = new b;
        b.canvas = a;
        b.drawingBufferWidth = a.width;
        b.drawingBufferHeight = a.height;
        c && fWa(c.prototype, b);
        b.createBuffer = function () {
            return {}
        };

        b.createTexture = function () {
            return {}
        };

        b.createRenderbuffer = function () {
            return {}
        };

        b.createFramebuffer = function () {
            return {}
        };

        b.createProgram = gWa;
        b.createShader = function () {
            return {}
        };

        b.getParameter = hWa;
        b.getShaderParameter = u(1);
        b.getVertexAttrib = function (a, b) {
            return 34338 == b && 0 == a
        };

        b.isEnabled = iWa;
        b.isFramebuffer = u(i);
        b.isRenderbuffer = u(i);
        b.isBuffer = u(i);
        b.isProgram = u(i);
        b.isShader = u(i);
        b.isTexture = u(i);
        b.checkFramebufferStatus = u(36053);
        return b
    },
    fWa = function (a, b) {
        for (var c in a) {
            var d = k;
            try {
                d = a[c]
            } catch (e) {
                continue
            }
            b[c] = "function" == typeof d ? u(0) : d
        }
    },
    hWa = function (a) {
        switch (a) {
        case 37443:
            return 37444;
        case 33170:
            return 4352;
        case 34016:
            return 33984;
        case 2886:
            return 2305;
        case 2885:
            return 1029;
        case 2964:
        case 34817:
        case 2965:
        case 34818:
        case 2966:
        case 34819:
            return 7680;
        case 34816:
        case 2962:
            return 519;
        case 2932:
            return 513;
        case 32971:
        case 32969:
            return 1;
        case 34877:
        case 32777:
            return 32774;
        case 2978:
        case 3088:
        case 3106:
        case 32773:
            return [0, 0, 0, 0];
        case 2928:
            return [0, 1];
        case 3107:
            return [i, i, i, i];
        case 2930:
            return i;
        case 2963:
        case 36004:
        case 2968:
        case 36005:
            return 4294967295;
        case 3379:
            return 8192;
        case 35661:
        case 34930:
            return 16;
        case 3415:
            return 8;
        case 3333:
        case 3317:
            return 4;
        case 2849:
        case 2931:
        case 32938:
            return 1;
        case 34964:
        case 34965:
        case 36006:
        case 36007:
        case 32873:
        case 34068:
            return k;
        default:
            return 0
        }
    },
    iWa = function (a) {
        switch (a) {
        case 3024:
            return i;
        default:
            return l
        }
    },
    gWa = function () {
        return {
            activate: z,
            attachShader: z,
            getAttribLocation: u(1),
            getUniformLocation: u(1),
            link: z
        }
    };

var E1 = function (a, b, c, d) {
    this.Ja = this.ba = l;
    var e = vB && vB.Yx();
    MA(vB);
    vB = k;
    uB = ja;
    e && wB();
    AB.call(this, a, b, c, d)
};

B(E1, AB);
v = E1.prototype;
v.play = function (a) {
    if (a || 0 == this.W) this.Ja = i, this.vr(),

    this.Ja = l;
    return E1.ia.play.call(this, a)
};

v.GK = function (a) {
    this.ba ? (this.ba = l, xB(this), this.aj()) : (E1.ia.GK.call(this, a), !this.ba && 0 == this.W && (eqa(this), this.ba = i))
};

v.stop = function (a) {
    E1.ia.stop.call(this, a);
    this.aj()
};

v.Gj = function () {
    this.Ff();
    E1.ia.Gj.call(this)
};

v.vr = function () {
    this.dispatchEvent(new BB("PreBegin", this))
};

v.aj = function () {
    this.dispatchEvent(new BB("PostEnd", this))
};

v.Ut = fa("duration");
v.uf = function () {
    return 1 == this.W || this.Ja
};

v.OE = function () {
    return !this.uf() && !this.ba
};

var F1 = function (a, b, c, d, e, f, g, j) {
    this.C = a;
    this.M = b;
    this.F = c;
    this.I = d;
    this.G = e;
    this.K = f;
    this.D = g;
    this.L = j
};

F1.prototype.clone = function () {
    return new F1(this.C, this.M, this.F, this.I, this.G, this.K, this.D, this.L)
};

F1.prototype.equals = function (a) {
    return this.C == a.C && this.M == a.M && this.F == a.F && this.I == a.I && this.G == a.G && this.K == a.K && this.D == a.D && this.L == a.L
};

F1.prototype.Ha = function (a) {
    if (0 == a) return new Cw(this.C, this.M);
    if (1 == a) return new Cw(this.D, this.L);
    var b = C0(this.C, this.F, a),
        c = C0(this.M, this.I, a),
        d = C0(this.F, this.G, a),
        e = C0(this.I, this.K, a),
        f = C0(this.G, this.D, a),
        g = C0(this.K, this.L, a),
        b = C0(b, d, a),
        c = C0(c, e, a),
        d = C0(d, f, a),
        e = C0(e, g, a);
    return new Cw(C0(b, d, a), C0(c, e, a))
};

var lWa = function (a, b) {
    var c = (b - a.C) / (a.D - a.C);
    if (0 >= c) return 0;
    if (1 <= c) return 1;
    for (var d = 0, e = 1, f = 0; 8 > f; f++) {
        var g = a.Ha(c).x,
            j = (a.Ha(c + 1E-6).x - g) / 1E-6;
        if (1E-6 > Math.abs(g - b)) return c;
        if (1E-6 > Math.abs(j)) break;
        else g < b ? d = c : e = c, c -= (g - b) / j
    }
    for (f = 0; 1E-6 < Math.abs(g - b) && 8 > f; f++) g < b ? (d = c, c = (c + e) / 2) : (e = c, c = (c + d) / 2), g = a.Ha(c).x;
    return c
};

var G1 = function (a, b, c) {
    var d = new F1(0, 0, a, b, c, 1, 1, 1);
    return function (a) {
        return d.Ha(lWa(d, a)).y
    }
},
    mWa = G1(0, 0, 0.58),
    nWa = G1(0.52, 0, 0.48),
    H1 = G1(0.52, 0, 0.25),
    oWa = G1(0.36, 1, 0.36),
    pWa = G1(0.56, 1, 0.56);
var I1 = function (a) {
    this.map = a;
    E1.call(this, [], [], 300)
};

B(I1, E1);
I1.prototype.extend = function (a) {
    qWa(this).F = a
};

var qWa = function (a) {
    for (; a.F;) a = a.F;
    return a
},
    rWa = function (a, b, c) {
        var d = J1(a.map.W.D, b.x, b.y),
            b = [0, 0, 0];
        tD(d.x, d.y, 0, b);
        d = [0, 0, 0];
        tD(a.map.lng.get(), a.map.lat.get(), 0, d);
        var e = [0, 0, 0];
        tD(c.x, c.y, 0, e);
        c = [e[0] + d[0] - b[0], e[1] + d[1] - b[1], 0];
        b = qD();
        uD(c[0], c[1], c[2], b);
        a.map.lng.set(b[0]);
        a.map.lat.set(b[1])
    };

I1.prototype.Ff = function () {
    var a = this.qa(this.fh),
        b = C0(this.Ba, this.I, a),
        a = new Cw(C0(this.ea.x, this.C.x, a), C0(this.ea.y, this.C.y, a));
    I1.ia.Ff.call(this);
    this.map.zoom.set(b);
    rWa(this, a, this.K)
};

I1.prototype.Gj = function () {
    I1.ia.Gj.call(this);
    var a = this.C;
    this.map.zoom.set(this.I);
    rWa(this, a, this.K);
    this.F && this.F.play()
};

I1.prototype.qa = nWa;
var K1 = function (a) {
    I1.call(this, a)
};

B(K1, I1);
I1.prototype.xa = function (a, b) {
    sWa(this, (b.C - a) / (1 - a))
};

var sWa = function (a, b) {
    var c = a.qa(b),
        d = C0(a.ma, a.Y, c),
        e = C0(a.ca, a.M, c);
    a.map.ba.set(C0(a.ha, a.U, c));
    a.map.Y.set(e);
    a.map.Dc.set(d)
};

K1.prototype.Ff = function () {
    sWa(this, this.fh);
    K1.ia.Ff.call(this)
};

var L1 = 2 * Math.PI,
    tWa = function (a, b, c, d) {
        c = M1(c);
        d[0] = a * c - Math.PI;
        d[1] = -b * c + Math.PI;
        d[2] = 0 * c
    },
    uWa = function (a, b, c, d) {
        c = M1(c);
        d[0] = (Math.PI + a) / c;
        d[1] = (Math.PI - b) / c;
        d[2] = 0 / c
    },
    M1 = function (a) {
        return L1 / (1 << a)
    };

var N1 = function (a, b) {
    var c = [0, 0, 0];
    b.F = h;
    b.G = h;
    b.I = h;
    b.near = h;
    b.L = h;
    b.De = -Nz(a.rotation);
    b.Dc = Nz(a.Dc);
    b.K = 0;
    b.C = Nz(a.C);
    b.width = a.width;
    b.height = a.height;
    var d = L1 / 256 / Math.pow(2, a.zoom),
        e = h0(b.C);
    b.D = e * b.height / 2 * d;
    tD(a.lng, a.lat, a.alt, c);
    b.M = c[0];
    b.N = c[1];
    b.P = c[2]
},
    vWa = function (a, b) {
        var c = qD();
        qD();
        a.M = a.M;
        a.N = a.N;
        a.P = a.P;
        a.D = a.D;
        a.De = a.De;
        a.Dc = a.Dc;
        a.C = a.C;
        a.width = a.width;
        a.height = a.height;
        b.rotation = -Ty(a.De);
        b.Dc = Ty(a.Dc);
        b.C = Ty(a.C);
        b.width = a.width;
        b.height = a.height;
        uD(a.M, a.N, a.P, c);
        b.lng = c[0];
        b.lat = c[1];
        b.alt = c[2];
        c = h0(a.C) * (a.height / 2) / a.D * L1 / 256;
        b.zoom = Math.log(c) / Math.LN2
    };

var wWa = function (a, b) {
    var c = Math.cos(a),
        d = 0.99330562000986 + 0.00669437999014 * c * c;
    b[0] = 6378137 * c / Math.sqrt(d);
    b[1] = 6335439.327292829 / Math.pow(d, 1.5)
},
    O1 = function (a, b, c, d) {
        var e = [0, 0];
        wWa(b, e);
        a = (a - c) * e[0];
        b = (b - d) * e[1];
        return Math.sqrt(a * a + b * b)
    };

var xWa = function (a, b) {
    NA.call(this, "AddEvent", a);
    this.C = b
};

B(xWa, NA);
var yWa = {
    zV: 1,
    g7: 2,
    h7: 3
};

var P1 = fa("type");
P1.prototype.equals = function (a) {
    return !!a && this.type == a.type
};

P1.prototype.Bc = function () {
    return this.type + ":"
};

var Q1 = function (a) {
    this.type = 3;
    this.F = a
};

B(Q1, P1);
Q1.prototype.getPanoId = r("F");
Q1.prototype.equals = function (a) {
    return Q1.ia.equals.call(this, a) && this.F == a.F
};

Q1.prototype.Bc = function () {
    this.D || (this.D = this.type + ":" + this.F);
    return this.D
};

Q1.prototype.Me = function () {
    return this
};

var zWa = {
    PG: 0,
    nla: 1,
    yU: 2
};

var BWa = function (a, b) {
    qVa(b, 3, R1);
    var c = R1,
        d = R1;
    d[0] = -c[0];
    d[1] = -c[1];
    d[2] = -c[2];
    d[3] = -c[3];
    for (c = 0; 3 > c; c++) {
        d = 2 * c;
        qVa(b, c, AWa);
        var e = a[d],
            f = e,
            g = R1,
            j = AWa;
        f[0] = g[0] - j[0];
        f[1] = g[1] - j[1];
        f[2] = g[2] - j[2];
        f[3] = g[3] - j[3];
        f = 1 / c0(e);
        tVa(e, f, e);
        e = d = a[d + 1];
        f = R1;
        g = AWa;
        e[0] = f[0] + g[0];
        e[1] = f[1] + g[1];
        e[2] = f[2] + g[2];
        e[3] = f[3] + g[3];
        f = 1 / c0(d);
        tVa(d, f, d)
    }
},
    R1 = rD(),
    AWa = rD();
var CWa = function (a, b, c) {
    a[0] = b[c + 0];
    a[1] = b[c + 1];
    a[2] = b[c + 2];
    a[3] = b[c + 3];
    a[4] = b[c + 4];
    a[5] = b[c + 5]
},
    DWa = function (a, b) {
        for (var c = i, d = 0; 6 > d; ++d) {
            var e;
            e = b[d];
            for (var f = e[3], g = e[3], j = 0; 3 > j; ++j) var m = 0 > e[j],
                n = m ? a[j] : a[3 + j],
                f = f + e[j] * (m ? a[3 + j] : a[j]),
                g = g + e[j] * n;
            e = 0 < f ? 1 : !(0 < g) ? -1 : 0;
            if (1 == e) return 0;
            0 == e && (c = l)
        }
        return c ? 2 : 1
    };

var S1 = function () {
    this.C = qD();
    this.D = e0();
    var a = new Float32Array(9);
    a[0] = a[4] = a[8] = 1;
    this.F = a
},
    T1 = new Float32Array(6),
    EWa = function (a) {
        var b = new S1,
            c = b.center(),
            d = b.D,
            e = y(h) ? h : 3,
            f = Math.floor(((a ? a.length : 0) - 0 + e - 1) / e);
        if (1 >= f) return 1 == f && (c[0] = a[0], c[1] = a[1], c[2] = a[2]), b;
        for (var g = a[0], j = a[1], m = a[2], n = a[0], p = a[1], q = a[2], s = 1, t = 0 + e; s < f; s++, t += e) {
            var x = a[t],
                D = a[t + 1],
                I = a[t + 2];
            g > x && (g = x);
            j > D && (j = D);
            m > I && (m = I);
            n < x && (n = x);
            p < D && (p = D);
            q < I && (q = I)
        }
        c[0] = 0.5 * (g + n);
        c[1] = 0.5 * (j + p);
        c[2] = 0.5 * (m + q);
        d[0] = 0.5 * (n - g);
        d[1] = 0.5 * (p - j);
        d[2] = 0.5 * (q - m);
        return b
    };

S1.prototype.center = r("C");
S1.prototype.rotation = r("F");
var GWa = function (a, b, c) {
    var d = a.C,
        e = a.D,
        f = a.F,
        a = e[0],
        g = e[1],
        e = e[2],
        j = f[0],
        m = f[1],
        n = f[2],
        p = f[3],
        q = f[4],
        s = f[5],
        t = f[6],
        x = f[7],
        f = f[8],
        D = b[0] - d[0],
        I = b[1] - d[1],
        b = b[2] - d[2];
    X_(U1, D * j + I * p + b * t, D * m + I * q + b * x, D * n + I * s + b * f);
    X_(V1, 1 / (c[0] * j + c[1] * p + c[2] * t), 1 / (c[0] * m + c[1] * q + c[2] * x), 1 / (c[0] * n + c[1] * s + c[2] * f));
    T1[0] = -a;
    T1[1] = -g;
    T1[2] = -e;
    T1[3] = a;
    T1[4] = g;
    T1[5] = e;
    c = FWa;
    b = U1;
    d = V1;
    g = d[0] * (T1[0] - b[0]);
    e = d[0] * (T1[3] - b[0]);
    0 > d[0] ? (c[0] = e, c[1] = g) : (c[0] = g, c[1] = e);
    Infinity < c[1] && (c[1] = Infinity);
    0 > c[1] || c[0] > c[1] ? c = l : (g = d[1] * (T1[1] - b[1]), e = d[1] * (T1[4] - b[1]), 0 > d[1] ? a = e : (a = g, g = e), a > c[0] && (c[0] = a), g < c[1] && (c[1] = g), c[0] > c[1] || 0 > c[1] ? c = l : (g = d[2] * (T1[2] - b[2]), e = d[2] * (T1[5] - b[2]), 0 > d[2] ? a = e : (a = g, g = e), a > c[0] && (c[0] = a), g < c[1] && (c[1] = g), c = c[0] <= c[1] && 0 <= c[1]));
    return c
};

S1.prototype.clone = function () {
    var a = new S1;
    d0(a.center(), this.C);
    d0(a.D, this.D);
    var b = a.rotation(),
        c = this.F;
    b[0] = c[0];
    b[1] = c[1];
    b[2] = c[2];
    b[3] = c[3];
    b[4] = c[4];
    b[5] = c[5];
    b[6] = c[6];
    b[7] = c[7];
    b[8] = c[8];
    return a
};

var HWa = function (a, b) {
    q0(b, a.C, V1);
    for (var c = 0; 3 > c; c++) {
        var d = a.F,
            e = c,
            f = U1;
        f[0] = d[e];
        f[1] = d[e + 3];
        f[2] = d[e + 6];
        v0(U1, a.D[c], U1);
        d = a.C;
        f = e = U1;
        f[0] = e[0] + d[0];
        f[1] = e[1] + d[1];
        f[2] = e[2] + d[2];
        q0(b, U1, U1);
        w0(U1, V1, U1);
        d = c0(U1);
        v0(U1, 1 / d, U1);
        a.D[c] = d;
        d = a.F;
        e = c;
        f = U1;
        d[e] = f[0];
        d[e + 3] = f[1];
        d[e + 6] = f[2]
    }
    d0(a.C, V1)
},
    U1 = qD(),
    V1 = qD(),
    FWa = new Float64Array(2);
var W1 = function (a, b) {
    this.F = b;
    this.K = {};

    this.D = [];
    this.N = l;
    this.C = k;
    var c = -4.525 - 0.025,
        d = this.D;
    d.push(x0(-0.44, 1.05, c));
    d.push(x0(-0.44, 1.2 + 0.15, c));
    d.push(x0(0, 1.2, c));
    d.push(x0(0, 1.5, c));
    d.push(x0(0.44, 1.05, c));
    d.push(x0(0.44, 1.2 + 0.15, c));
    d.push(y0(d[d.length - 1]));
    d.push(x0(-0.44, 1.2 + 0.15, -4.5));
    d.push(y0(d[d.length - 1]));
    d.push(x0(-0.44, 1.05, -4.5));
    d.push(x0(0, 1.5, -4.5));
    d.push(x0(0, 1.2, -4.5));
    d.push(x0(0.44, 1.2 + 0.15, -4.5));
    d.push(x0(0.44, 1.05, -4.5));
    for (c = 0; c < d.length; c++) for (var e = 0; 3 > e; e++) this.I[3 * c + e] = d[c][e];
    this.C = EWa(this.I);
    n0(this.G, -Nz(a));
    for (c = 0; c < d.length; c++) p0(this.G, d[c], d[c]);
    HWa(this.C, this.G)
};

W1.prototype.getPanoId = r("F");
W1.prototype.Ij = fa("N");
W1.prototype.G = t0();
W1.prototype.I = new Float32Array(42);
var X1 = function (a, b, c, d) {
    this.L = b;
    this.K = c;
    this.I = d;
    this.G = t0();
    this.F = sD();
    this.C = [];
    this.D = "";
    for (b = 0; b < a.links.length; b++) c = a.links[b], this.C.push(new W1(c.yawDeg - a.D, c.mg))
};

X1.prototype.JH = function (a, b) {
    this.I();
    this.D = "";
    var c = this.K.xo(a, b, this.M);
    q0(this.F, c.origin, c.origin);
    p0(this.F, c.dir, c.dir);
    u0(c.dir, c.dir);
    for (var d = 0; d < this.C.length; d++) {
        var e = this.C[d];
        GWa(this.C[d].C, c.origin, c.dir) ? (e.Ij(i), this.D = e.getPanoId()) : e.Ij(l)
    }
};

X1.prototype.N = e0();
X1.prototype.M = new i0;
var Y1 = function (a, b, c, d) {
    this.type = 4;
    this.F = a;
    this.Q = b;
    this.U = c;
    this.V = d
};

B(Y1, P1);
v = Y1.prototype;
v.equals = function (a) {
    return !!a && this.type == a.type && this.F == a.getPanoId() && this.Q == a.Ic() && this.U == a.Nc() && this.V == a.da()
};

v.Bc = function () {
    this.D || (this.D = this.type + ":" + this.F + "," + this.Q + "," + this.U + "," + this.V);
    return this.D
};

v.getPanoId = r("F");
v.Ic = r("Q");
v.Nc = r("U");
v.da = r("V");
v.Me = function () {
    return this
};

var Z1 = function (a, b) {
    this.C = a;
    this.Y = [];
    this.P = k;
    this.ea = [];
    this.L = k;
    this.D = b;
    this.ba = -1;
    this.G = t0();
    this.qa = t0();
    this.ma = t0();
    this.F = qD();
    this.X = this.ca = this.V = 0;
    this.K = qD();
    this.M = l;
    this.N = [b0(), b0(), b0(), b0(), b0(), b0()];
    this.iC = new X1(a.md, a.C, b, A(this.U, this));
    this.hv = 1;
    for (var c = this.C.C.C, d = this.C.C.D, e = 0; e < d; e++) for (var f = 0; f < c; f++) {
        var g = new IWa;
        g.owner = this;
        g.x = f;
        g.y = e;
        this.ea.push(g)
    }
    this.L = new Uint8Array(d)
},
    JWa = function (a, b, c) {
        var d = a.C.C.L,
            e = b.x >> d - c,
            b = b.y >> d - c,
            d = e + "," + b + "," + c,
            f = a.Y[d];
        f || (f = new Y1(a.C.md.mg, e, b, c), a.Y[d] = f);
        return f
    },
    $1 = function (a) {
        a.U();
        return a.P
    };

Z1.prototype.U = function () {
    if (this.ba != this.D.I) {
        this.ba = this.D.I;
        var a = this.G;
        a2(this.D, this.C.C.I, a);
        s0(b2(this.D), a, this.G);
        s0(KWa(this.D), this.G, this.ma);
        r0(this.G, this.qa);
        var a = this.iC,
            b = this.G,
            c = a.N;
        c[0] = b[2];
        c[1] = b[6];
        c[2] = b[10];
        u0(c, c);
        var d = a.G;
        Z_(d);
        d[12] = 10 * c[0];
        d[13] = 10 * c[1];
        s0(b, d, a.G);
        b = a.F;
        Z_(b);
        b[12] = -10 * c[0];
        b[13] = -10 * c[1];
        s0(b, a.L.K, a.F);
        var a = this.D.Bf(),
            c = this.D.Cf(),
            b = this.D.xg(),
            d = this.D.Yh(),
            e = this.D.getWidth(),
            f = this.D.getHeight();
        this.V == d && this.ca == e && this.X == f && this.F[0] == a && this.F[1] == c && this.F[2] == b ? a = l : (this.F[0] = a, this.F[1] = c, this.F[2] = b, this.V = d, this.ca = e, this.X = f, a = i);
        if (a && (q0(this.C.C.K, this.F, this.K), this.M = 1E-4 > c0(this.K))) {
            a = this.Q;
            c = this.ha;
            b = this.C.C.D;
            for (d = 0; d < b; d++) e = LWa(this, 0, d, a, c), this.L[d] = MWa(this, a, c, e)
        }
        BWa(this.N, NWa(this));
        this.P = [];
        a = this.xa;
        c = this.C.C;
        b = c.C;
        d = c.D;
        for (e = 0; e < d; ++e) for (f = 0; f < b; ++f) {
            var g = zWa;
            CWa(a, c.M, 6 * (e * c.C + f));
            var j = DWa(a, this.N);
            if (j != g.PG) {
                if (j != g.yU) {
                    a: {
                        for (var j = f, m = e, n = l, p = this.Q, q = this.C.C.F, s = 0; 6 > s; ++s) this.I[s] = i;
                        for (var t = 0; t < q + 1 && !n; ++t) for (var x = 0; x < q + 1 && !n; ++x) {
                            c2(this.C.C, j, m, x, t, p);
                            n = i;
                            for (s = 0; 6 > s; s++) {
                                var D = this.N[s],
                                    D = !(0 < p[0] * D[0] + p[1] * D[1] + p[2] * D[2] + D[3]),
                                    n = n && D;
                                this.I[s] = this.I[s] && !D
                            }
                        }
                        for (s = 0; 6 > s; ++s) if (this.I[s]) {
                            j = 0;
                            break a
                        }
                        j = 2
                    }
                    if (j == g.PG) continue
                }
                j = g = this.ea[e * b + f];
                this.M ? m = this.L[e] : (m = this.Q, p = this.ha, q = LWa(this, f, e, m, p), w0(m, this.K, m), w0(p, this.K, p), m = MWa(this, m, p, q));
                j.SG = m;
                this.P.push(g)
            }
        }
    }
};

var LWa = function (a, b, c, d, e) {
    var a = a.C.C,
        f = a.F;
    if (c >= a.D / 2) return c2(a, b, c, 0, 0, d), c2(a, b, c, f, 0, e), c;
    c2(a, b, c, 0, f, d);
    c2(a, b, c, f, f, e);
    return c + 1
},
    MWa = function (a, b, c, d) {
        var e = c0(b) * c0(c),
            b = (b[0] * c[0] + b[1] * c[1] + b[2] * c[2]) / e,
            e = 1E-6 < Math.abs(e) ? Math.acos(b) : 0,
            b = a.D.getWidth(),
            c = a.D.getHeight(),
            f = a.D.Yh(),
            f = 2 * Math.atan((0 != c ? b / c : 0) * Math.tan(0.5 * f)),
            c = a.C.md.K,
            a = Math.ceil(Math.log((1E-6 < Math.abs(f) ? e * b / f : 0) / (a.C.md.G / (1 << c) / (1 / Math.sin(Math.PI * d / (a.C.C.D + 1)) * a.C.C.C))) / Math.LN2);
        return Math.max(0, Math.min(c, a))
    };

Z1.prototype.I = [l, l, l, l, l, l];
var NWa = function (a) {
    a.U();
    return a.G
};

Z1.prototype.Q = e0();
Z1.prototype.ha = e0();
Z1.prototype.xa = new Float32Array(6);
var IWa = function () {
    this.owner = k;
    this.SG = this.y = this.x = 0;
    this.C = {}
};

var d2 = function () {
    var a;
    try {
        a = new Image(2, 2)
    } catch (b) {
        a = {}, a.width = a.height = 2
    }
    a.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAAAAABX3VL4AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sKEAQ5Hl0GEXcAAAAIdEVYdENvbW1lbnQA9syWvwAAAA5JREFUCNdjYGBgYGAAAAAGAAHCqQSnAAAAAElFTkSuQmCC";
    return a
};

var e2 = ea();
B(e2, iB);
var f2 = function (a, b, c, d, e) {
    this.G = a;
    this.pd = b || k;
    this.C = c || d2();
    this.F = d || 2;
    this.D = e || k
};

B(f2, e2);
f2.prototype.Tb = r("G");
var g2 = function (a, b, c, d, e) {
    this.children = a;
    this.data = b;
    this.C = c;
    this.Oa = d;
    this.D = e;
    this.Ui = k
},
    h2 = function (a) {
        for (var b = 0; b < a.length; ++b);
    },
    i2 = function (a) {
        for (var b = 0; b < a.children.length; ++b);
    };

var OWa = function (a) {
    this.C = a || k
};

B(OWa, e2);
var j2 = function (a, b, c) {
    M0.call(this, b, c, h, h);
    this.M = a
};

B(j2, N0);
j2.prototype.set = function (a, b) {
    this.M(a) && j2.ia.set.call(this, a, b)
};

var k2 = function (a, b, c) {
    G0.call(this, b, c, h);
    this.L = a
};

B(k2, P0);
k2.prototype.set = function (a, b) {
    this.L(a) && k2.ia.set.call(this, a, b)
};

var l2 = function () {
    this.height = this.width = this.C = this.Dc = this.rotation = this.zoom = this.alt = this.lng = this.lat = 0
};

l2.prototype.clone = function () {
    var a = new l2;
    a.lat = this.lat;
    a.lng = this.lng;
    a.alt = this.alt;
    a.zoom = this.zoom;
    a.rotation = this.rotation;
    a.Dc = this.Dc;
    a.C = this.C;
    a.width = this.width;
    a.height = this.height;
    return a
};

var m2 = function (a, b, c, d) {
    this.JM = a;
    this.ba = k;
    this.Y = b;
    this.P = c;
    this.Q = d;
    t0();
    t0();
    this.V = [0, 0];
    this.X = this.D = this.I = this.G = this.U = this.Ai = k;
    this.M = l;
    this.ea = e0();
    this.ha = e0();
    this.N = l;
    this.L = new Cw(0, 0);
    this.K = {};

    aB(this.Y, "AddEvent", A(this.ma, this));
    this.ro = new k2(A(function () {
        return !this.Sp()
    }, this), A(this.S6, this), "");
    this.Uj = new k2(A(function () {
        return !this.Sp()
    }, this), A(this.T6, this), "");
    this.C = new j2(A(function (a) {
        return 0 == a || !this.Sp()
    }, this), h, 0);
    this.qa = this.Tp = new N0(h, 0);
    this.ca = new N0(h, 0);
    this.Ep = new L0(A(function () {
        this.Tp.set(za())
    }, this), l)
};

m2.prototype.ma = function (a) {
    var b = (a = a.C.Oa) && a.getPanoId();
    if (b in this.K) {
        var c = this.Ml(a);
        Jg(this.K[b], function (a) {
            a(c)
        });
        delete this.K[b]
    }
};

m2.prototype.$C = function (a, b) {
    var c = this.Ml(a);
    c ? b(c) : (c = a.getPanoId(), this.K[c] || (this.K[c] = []), this.K[c].push(b))
};

var n2 = new i0,
    PWa = new vD,
    o2 = new l2;
m2.prototype.JH = function (a, b) {
    this.L.x = a;
    this.L.y = b;
    p2(this)
};

m2.prototype.m0 = function () {
    var a = this.Ai;
    if (!a) return l;
    a = q2(this, a);
    if (!a) return l;
    a = a.iC;
    return !!a && !! a.D
};

var p2 = function (a) {
    a.N = l;
    if (!a.Sp()) {
        var b = a.Ai;
        if (b && (b = q2(a, b))) {
            var c = b.iC;
            c.JH(a.L.x, a.L.y);
            var c = c.D,
                d;
            if (d = !c) {
                d = a.ea;
                var e = a.ha,
                    f = a.V;
                a.JM.xo(a.L.x, a.L.y, n2);
                p0(b.C.C.K, n2.dir, d);
                u0(d, d);
                isFinite(d[0]) && !isNaN(d[0]) ? (e = b.C.D.kt(d, e, f), 0 == e ? d = l : (v0(d, e, d), d = i)) : d = l
            }
            d && (b = b.C.F, c = a.V[0], d = a.V[1], b.init_() ? (c = b.K[d * b.D + c], c = 0 == c ? "" : b.C[c - 1]) : c = "", a.N = i);
            a.Uj.set(c);
            a.Tp.set(za())
        }
    }
},
    r2 = function (a, b) {
        a.X = b;
        if (a.X && a.D) {
            var c = a.D.Tb().clone(),
                d = new vD;
            d.width = b.C.getWidth();
            d.height = b.C.getHeight();
            d.near = 1;
            d.L = 1.1;
            c.Vd(d);
            c = new f2(c, h, h, h, a.X);
            a.Q.zm(c, a.D)
        }
    },
    q2 = function (a, b) {
        var c = a.Y.fg(b),
            d = c.Y;
        if (!d) {
            var e = a.Ml(b);
            e && (d = new Z1(e, a.JM), c.Y = d)
        }
        return d
    };

v = m2.prototype;
v.Ml = function (a) {
    return this.Y.getData(a)
};

v.S6 = function () {
    var a = this.ro.get();
    a ? (this.Ai = new Q1(a), this.U = new Y1(a, 0, 0, 0)) : this.U = this.Ai = k;
    p2(this);
    QWa(this)
};

v.T6 = function () {
    this.C.set(0);
    this.F && mB(this.F);
    var a = this.Uj.get();
    "" == a ? this.I = this.G = k : (this.G = new Q1(a), this.I = new Y1(a, 0, 0, 0), this.F = lB(A(this.C.set, this.C, 1), 200))
};

v.sL = function () {
    this.M = i;
    p2(this)
};

v.jL = function () {
    this.M = l;
    p2(this)
};

var s2 = function (a) {
    return !a.M || !a.N ? k : a.ha
};

m2.prototype.Sp = function () {
    return 2 == this.C.get()
};

var RWa = function (a) {
    var b = a.Ai;
    if (b && (a = q2(a, b))) a.hv = 1
};

m2.prototype.wX = function (a) {
    (new P0(a, this.ro.get())).Zb(this.ro)
};

var QWa = function (a) {
    var b = a.Ai;
    b && (b = a.Ml(b), a.ba && (b && b.md) && (o2.lat = b.md.lat, o2.lng = b.md.lng, o2.alt = 0, o2.Dc = 0, o2.rotation = 0, o2.zoom = 20, o2.width = 1024, o2.height = 1024, o2.C = 53, N1(o2, PWa), a.ba.Vd(PWa)))
};

m2.prototype.iW = function () {
    return s2(this) ? 0.9 < Math.abs(s2(this)[2]) ? 1 : 2 : 0
};

var t2 = function (a, b, c) {
    this.C = a;
    this.oa = b;
    this.I = !! c;
    E1.call(this, [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], 0, this.hda)
};

B(t2, E1);
t2.prototype.play = function () {
    return 0 == this.W && !this.$S() ? i : t2.ia.play.call(this)
};

t2.prototype.$S = function () {
    this.oa.C.set(2);
    var a = this.oa.Ai;
    if (!a) return l;
    var b = this.oa.Ml(a);
    if (!b) return l;
    var c = this.oa.Uj.get(),
        d = this.oa.G,
        a = k;
    d && (a = this.oa.Ml(d));
    var e = new Cw;
    a: {
        var f = b.F;
        if (f.init_()) for (var g = 0; g < f.C.length; ++g) if (f.C[g] == c) {
            e.x = f.I[2 * g];
            e.y = f.I[2 * g + 1];
            c = i;
            break a
        }
        c = l
    }
    if (!a && !c && d) return this.oa.$C(d, A(this.play, this)),
    l;
    b = b.md;
    tD(b.lng, b.lat, b.F, this.D);
    this.D[3] = jp(this.C.lf(), 2 * Math.PI);
    this.D[4] = jp(this.C.Yd(), 2 * Math.PI);
    this.G = [0, 0, 0, 0, 0];
    this.duration = 0;
    this.F = this.oa.iW();
    a ? SWa(this, a.md.lng, a.md.lat, a.md.F) : (a = vVa(e.x, e.y, 0), e = sD(), n0(e, -Nz(b.D)), q0(e, a, a), e = [0, 0], wWa(Nz(b.lat), e), SWa(this, b.lng + a[0] * Ty(1 / e[0]), b.lat + a[1] * Ty(1 / e[1]), b.F));
    return i
};

var SWa = function (a, b, c, d) {
    var e = a.oa.Ai;
    if (e && (e = a.oa.Ml(e))) {
        tD(b, c, d, a.G);
        a.G[3] = a.D[3];
        a.G[4] = a.D[4];
        if (a.I && 2 == a.F) {
            var f = [];
            q0(e.C.I, !a.oa.M || !a.oa.N ? k : a.oa.ea, f);
            d = [];
            w0(f, a.G, d);
            var f = Math.atan2(d[1], d[0]) - Math.PI / 2,
                f = jp(f, 2 * Math.PI),
                g = f - a.D[3];
            g > Math.PI && (f -= 2 * Math.PI);
            g < -Math.PI && (f += 2 * Math.PI);
            a.G[3] = f;
            a.G[4] = Math.PI / 2 + Math.atan2(d[2], Math.sqrt(d[0] * d[0] + d[1] * d[1]))
        }
        d = a.oa.G;
        f = k;
        d && (f = a.oa.Ml(d));
        f ? a.jW(f) : d && a.oa.$C(d, A(a.jW, a));
        b = O1(Nz(e.md.lng), Nz(e.md.lat), Nz(b), Nz(c));
        a.duration = 750 * Math.sqrt(0.5 * b + 10) / Math.sqrt(10)
    }
};

v = t2.prototype;
v.jW = function (a) {
    if (!(0.75 < this.fh)) {
        var b = this.oa.Ai;
        if (b) {
            for (var c = i, d = this.oa.Ml(b).md.text.split(" / "), e = a.md.text.split(" / "), b = 0; b < d.length; b++) if (-1 < e.indexOf(d[b])) {
                c = l;
                break
            }
            if (c && this.I && 1 != a.md.C && 1 == this.F) {
                for (var d = Uy(Uy(Ty(Math.atan2(this.G[1] - this.D[1], this.G[0] - this.D[0]))) - 90), f, c = k, g = Infinity, b = 0; b < a.md.links.length; b++) e = a.md.links[b], f = Math.abs(Mz(d, -e.yawDeg)), f < g && (c = e, g = f);
                90 > g && (b = this.G[3], d = this.G[4], this.G[3] = this.D[3] + Nz(Mz(Ty(this.D[3]), -c.yawDeg)), c = n0([], Nz(c.yawDeg - a.md.D)), c = q0(c, [0, 1, 0], []), a = q0(a.C.I, c, []), a = w0(a, this.G, []), this.G[4] = jp(Math.PI / 2 + Math.atan2(a[2], Math.sqrt(a[0] * a[0] + a[1] * a[1])), 2 * Math.PI), this.D[3] -= this.fh * (this.G[3] - b), this.D[4] -= this.fh * (this.G[4] - d))
            }
        }
    }
};

v.wA = new vD;
v.hda = function (a) {
    a = 2 * a - 1;
    return 0.5 * (a * (2 + a * ((0 <= a ? -1 : 1) + 0 * a)) + 1)
};

v.Ff = function () {
    this.oa.ca.set(this.fh);
    TWa(this, this.coords);
    t2.ia.Ff.call(this)
};

v.Gj = function () {
    var a = this.oa.G;
    a && this.oa.$C(a, A(this.Iga, this))
};

v.Iga = function () {
    var a = this.oa.Uj.get();
    this.oa.C.set(0);
    this.oa.Uj.set("");
    this.oa.ca.set(0);
    this.oa.ro.set(a);
    RWa(this.oa);
    TWa(this, this.coords);
    t2.ia.Gj.call(this)
};

var TWa = function (a, b) {
    a.wA.F = b[0];
    a.wA.G = b[1];
    a.wA.I = b[2];
    a.wA.De = b[3];
    a.wA.Dc = b[4];
    a.C.Vd(a.wA)
};

var u2 = function (a) {
    this.J = a;
    this.I = this.F = 0;
    this.C = k;
    E1.call(this, [], [], 700)
};

B(u2, E1);
u2.prototype.K = pWa;
var UWa = ea(),
    VWa = function (a) {
        a.Ut(700 * (Math.abs(Mz(a.F, a.I)) / 90))
    };

u2.prototype.Ff = function () {
    var a = this.K(this.fh);
    this.J.rotation.set(this.F + C0(0, Mz(this.F, this.I), a));
    u2.ia.Ff.call(this)
};

u2.prototype.aj = function () {
    this.C && (this.J.I.set(this.C.D), this.J.N.set(this.C.C), this.J.Lg.set(this.C.F), this.C = k);
    u2.ia.aj.call(this)
};

u2.prototype.vr = function () {
    this.C = new UWa;
    this.C.D = this.J.I.get();
    this.C.F = this.J.Lg.get();
    this.C.C = this.J.N.get();
    this.J.I.set(l);
    this.J.N.set(l);
    this.J.Lg.set(l);
    u2.ia.vr.call(this)
};

var v2 = fa("C");
v2.prototype.run = function () {
    for (var a = 0; a < this.C.length; a++) this.C[a].run()
};

var w2 = function (a, b, c, d, e, f) {
    this.L = a || [];
    this.K = k;
    this.yf = b || WWa;
    this.I = k;
    this.C = c || "";
    this.D = d || k;
    this.F = e || -1;
    this.G = f || k
},
    XWa = /([,|*@])|(%2C)|(%7D)|(%40)/ig,
    YWa = function (a) {
        return "*" + a
    },
    WWa = [];
WWa.push({});
WWa[0].id = "m";
var x2 = function (a) {
    a.K || (a.K = a.L.join(","));
    return a.K
};

w2.prototype.Kr = function (a, b, c) {
    if (!this.I || this.D) {
        for (var d = [], e = 0; e < this.yf.length; ++e) {
            var f;
            a: {
                var g = this.yf[e],
                    j = a,
                    m = b,
                    n = c;
                f = [];
                f.push(g.id.replace(XWa, YWa));
                var p = k;
                this.D && (ra(j) && ra(m) && ra(n)) && (p = this.D(g, j, m, n));
                !ra(p) && ra(g.epoch) && (p = g.epoch);
                if (ra(p)) {
                    if (-1 == p) {
                        f = k;
                        break a
                    }
                    f.push("@", p)
                }
                g = g.parameters;
                qa(g) && f.push("|", g);
                f = f.join("")
            }
            f && d.push(f)
        }
        this.I = d.join()
    }
    return this.I
};

var ZWa = function (a) {
    if ("m" == a.Kr()) return a;
    a.G || (a.G = new w2(h, h, a.C, a.D, a.F));
    return a.G
};

var y2 = function (a, b, c) {
    this.type = 8;
    this.Ua = a;
    this.U = b;
    this.Q = c;
    this.D = k
};

B(y2, P1);
v = y2.prototype;
v.getId = r("Ua");
v.Tb = r("U");
v.da = r("Q");
v.equals = function (a) {
    return y2.ia.equals.call(this, a) && this.getId() == a.getId() && this.da() == a.da() && this.Tb().lf() == a.Tb().lf()
};

v.Bc = function () {
    this.D || (this.D = this.type + ":" + this.Ua + ":" + (y(this.Q) ? this.Q : "") + ":" + this.U.lf());
    return this.D
};

v.Me = function () {
    return this
};

var z2 = function () {
    this.G = sD();
    this.H = k;
    this.D = h;
    this.I = 0;
    this.K = {};

    this.F = this.C = -1
};

z2.prototype.hasData = function () {
    return !!this.H
};

var A2 = function (a) {
    this.Y = !! a
};

A2.prototype.ba = new vD;
A2.prototype.ca = qD();
A2.prototype.X = new i0;
var $Wa = function (a, b, c) {
    var d = a.ba;
    d.Dc = a.Yd(b);
    d.De = a.lf(b);
    d.K = a.YV(b);
    d.C = a.Yh(b);
    if (a.Y) {
        d.F = h;
        d.G = h;
        d.I = h;
        d.D = h;
        c.Vd(d);
        var e = a.VV(b),
            f = a.WV(b),
            g = a.ca,
            j = c.getWidth() / c.getHeight();
        B2(c, e / j, f, 0, g);
        c.xo(g[0], g[1], a.X);
        e = a.XV(b);
        f = a.UV(b);
        d.F = f[0] - e * a.X.dir[0];
        d.G = f[1] - e * a.X.dir[1];
        d.I = f[2] - e * a.X.dir[2]
    } else d.F = a.Bf(b), d.G = a.Cf(b), d.I = a.xg(b);
    d.D = a.ZV(b);
    c.Vd(d)
};

var E2 = function (a, b, c) {
    this.C = a.clone();
    this.D = b.clone();
    this.F = qD();
    this.I = [];
    this.G = [];
    this.K = this.L = 0;
    this.N = this.C.C / C2(this.C);
    this.M = this.D.C / C2(this.D);
    a = new vD;
    a.width = 1;
    a.height = 1;
    this.C.Vd(a);
    a.De = this.C.lf() + Nz(Mz(Ty(this.C.lf()), Ty(this.D.lf())));
    this.D.Vd(a);
    c && (this.F = wVa(c), D2(this.C, this.F[0], this.F[1], this.F[2], this.I), aXa(this.C, this.I[0], this.I[1], this.I[2], this.I), D2(this.D, this.F[0], this.F[1], this.F[2], this.G), aXa(this.D, this.G[0], this.G[1], this.G[2], this.G), this.L = bXa(this.C, this.F), this.K = bXa(this.D, this.F));
    this.Y = c != k
};

B(E2, A2);
var cXa = [0, 0, 0],
    bXa = function (a, b) {
        w0([a.Bf(), a.Cf(), a.xg()], b, cXa);
        return c0(cXa) / C2(a)
    };

v = E2.prototype;
v.Yd = function (a) {
    return C0(this.C.Yd(), this.D.Yd(), a)
};

v.lf = function (a) {
    return C0(this.C.lf(), this.D.lf(), a)
};

v.YV = function (a) {
    return C0(this.C.K, this.D.K, a)
};

v.Yh = function (a) {
    return C0(this.C.Yh(), this.D.Yh(), a)
};

v.Bf = function (a) {
    return C0(this.C.Bf(), this.D.Bf(), a)
};

v.Cf = function (a) {
    return C0(this.C.Cf(), this.D.Cf(), a)
};

v.xg = function (a) {
    return C0(this.C.xg(), this.D.xg(), a)
};

v.ZV = function (a) {
    var b = h0(this.Yh(a));
    return C0(this.N, this.M, a) * b
};

v.XV = function (a) {
    var b = h0(this.Yh(a));
    return C0(this.L, this.K, a) * b
};

v.VV = function (a) {
    return C0(this.I[0], this.G[0], a)
};

v.WV = function (a) {
    return C0(this.I[1], this.G[1], a)
};

v.UV = r("F");
var F2 = function (a, b) {
    this.C = a;
    this.Va = this.Y = this.I = this.Wb = k;
    this.U = this.Jd = l;
    b && (this.Ba = b);
    this.xa = A(function () {
        this.Jd = i
    }, this);
    E1.call(this, [], [], 1E3)
};

B(F2, E1);
F2.prototype.Ba = oWa;
F2.prototype.Wz = function (a) {
    this.I && pA(this.I.Ia, this.xa);
    this.I = a.clone();
    this.I.Ia.push(this.xa);
    this.Jd = i
};

F2.prototype.cw = function (a) {
    this.Y && pA(this.Y.Ia, this.xa);
    this.Y = a.clone();
    this.Y.Ia.push(this.xa);
    this.Jd = i
};

var G2 = function (a) {
    var b = a.U ? 1 - a.ik() : a.ik();
    return a.Ba(b)
};

F2.prototype.Ff = function () {
    var a = G2(this);
    $Wa(this.Wb, a, this.C);
    F2.ia.Ff.call(this)
};

var dXa = function (a) {
    a.Jd && (a.I && a.Y) && (a.Wb = new E2(a.I, a.Y, a.Va), a.Jd = l)
};

F2.prototype.play = function () {
    this.U = l;
    dXa(this);
    return F2.ia.play.call(this)
};

F2.prototype.X = function () {
    this.U = i;
    dXa(this);
    E1.prototype.play.call(this)
};

F2.prototype.V = r("Y");
var H2 = function (a, b) {
    this.map = a;
    this.M = b;
    this.Ka = k;
    this.ca = -1;
    this.Rb = i;
    F2.call(this, a.Tb(), H1)
};

B(H2, F2);
var I2 = function (a, b) {
    a.Ka = b;
    var c = b.Tb(),
        d = [c.D, c.F, c.G];
    a.cw(c);
    d ? a.Va = wVa(d) : a.Va = k;
    a.Jd = i
};

H2.prototype.Q = function () {
    this.Rb = this.map.I.get();
    this.map.I.set(l);
    this.ca = -1;
    H2.ia.Q.call(this)
};

H2.prototype.aj = function () {
    this.map.I.set(this.Rb);
    H2.ia.aj.call(this)
};

H2.prototype.Ff = function () {
    0 > this.ca && (this.ca = this.U ? 1 - G2(this) : G2(this));
    var a = (G2(this) - this.ca) / (1 - this.ca);
    this.Ka && J2(this, this.Ka, a);
    H2.ia.Ff.call(this)
};

var J2 = function (a, b, c) {
    a = a.M.fg(b);
    b = a.F;
    b || (b = new z2, a.F = b);
    b.D = c
};

var K2 = function (a, b, c) {
    this.qa = b;
    this.Nd = c;
    this.oa = c.oa;
    this.K = k;
    this.fb = new w2(["streetview"], [{
        id: "h"
    }]);
    this.ha = new OWa;
    this.ma = 0;
    this.F = k;
    this.Ta = l;
    this.ea = k;
    H2.call(this, a, this.oa.Q)
};

B(K2, H2);
var eXa = ea();
K2.prototype.Bb = fa("fb");
var fXa = function (a, b, c) {
    c ? c = 1 : (c = 850 + 110 * Math.max(0, 19 - a.ma), b && (c *= 0.85));
    a.Ut(c)
};

v = K2.prototype;
v.UY = function (a, b, c, d, e, f) {
    this.F = a;
    f !== this.ma && (this.ma = f, f = 850 + 110 * Math.max(0, 19 - this.ma), f = (f - 850) / f, 0 < f ? (f = Math.sqrt(f), this.Ba = G1(f, 1, f)) : this.Ba = H1);
    a = gXa(this, a, b, c, d, e);
    this.oa.D = a;
    I2(this, a)
};

v.TY = function (a) {
    this.ea = a;
    bB(this.ea, "PostEnd", A(this.AY, this))
};

v.vr = function () {
    if (this.F) {
        this.oa.ro.set(this.F);
        this.oa.Uj.set(this.F);
        var a = this.oa;
        "" != a.Uj.get() && (a.F && mB(a.F), a.C.set(1))
    }
    this.Ta = l;
    hXa(this.Nd, this.ha, this.C.getWidth(), this.C.getHeight());
    this.U ? (this.ha.C.wb(), iXa(this), this.map.mapTypes.set(this.K.mapTypes), this.map.C.set(this.K.M), this.map.D.set(this.K.L), this.map.K.set(this.K.D), this.oa.Ep.set(l)) : (this.K = new eXa, this.K.mapTypes = this.map.mapTypes.get().slice(), this.K.M = this.map.C.get().slice(), this.K.L = this.map.D.get(), this.K.K = this.map.Lg.get(), this.K.F = this.map.G.get(), this.K.D = this.map.K.get(), this.K.C = this.qa.F, this.K.G = this.Nd.D);
    this.Nd.D = 1280;
    Y0(this.qa, new v2([this.K.C, this.Nd]));
    this.K.I = this.map.L.get();
    this.map.L.set(l);
    a = this.oa;
    a.ba = k;
    QWa(a);
    this.map.F.set(this.I.clone());
    this.map.Lg.set(l);
    this.map.G.set(l);
    this.oa.C.set(2);
    K2.ia.vr.call(this)
};

v.aj = function () {
    this.ea ? (this.map.C.set([1]), this.oa.D = k, K2.ia.aj.call(this), this.ea.play()) : (this.AY(), K2.ia.aj.call(this))
};

v.AY = function () {
    this.map.L.set(this.K.I);
    this.oa.C.set(0);
    if (this.U) this.map.Lg.set(this.K.K), this.map.G.set(this.K.F), this.map.K.set(this.K.D), Y0(this.qa, this.K.C), this.Nd.D = this.K.G & 17664, this.K = k, this.oa.ro.set(""), this.oa.Uj.set(""), this.map.F.set(k);
    else {
        this.map.D.set(this.fb);
        this.map.C.set([1, 0]);
        this.map.mapTypes.set([0]);
        this.map.K.set(l);
        this.oa.Ep.set(i);
        this.map.Lg.set(i);
        var a = this.oa,
            b = this.map.F.get();
        a.ba = b;
        QWa(a);
        this.Nd.D = 17664;
        Y0(this.qa, this.Nd)
    }
    this.oa.D = k;
    RWa(this.oa);
    r2(this.oa, k);
    this.ea = this.F = k
};

v.Ff = function () {
    this.ha.C.wb();
    var a = this.oa.G,
        b = this.oa.I;
    !this.oa.X && (a && b) && (a = q2(this.oa, a), b = this.oa.P.getData(b), a && b && (this.Ta ? iXa(this) : this.Ta = i));
    K2.ia.Ff.call(this)
};

var iXa = function (a) {
    var b = a.C.xi(),
        c = a.map.C.get(),
        d = a.map.Lg.get();
    RWa(a.oa);
    a.U || (a.C.Vd(a.V().xi()), a.map.C.set([1]), a.map.Lg.set(l));
    var e = a.Nd,
        f = a.ha,
        g = e.Z,
        j = g.F.C || k,
        m = r1(g.state),
        n = m[2],
        p = m[3];
    hXa(e, f, n, p);
    f.C.activate(n, p);
    f = [];
    n = e.oa;
    n.D && n.Ai && (n = q2(n, n.Ai), f.push(n));
    jXa(e.F, f);
    e.F.yg();
    kXa(e.F, f);
    g.disable(2884);
    g.enable(3042);
    g.F.Hn(j);
    g.state.Mf(m[0], m[1], m[2], m[3]);
    r2(a.oa, a.ha);
    a.U || (a.map.Tb().Vd(b), a.map.C.set(c), a.map.Lg.set(d))
},
    gXa = function (a, b, c, d, e, f) {
        var g = [0, 0, 0];
        tD(d, c, e, g);
        d = j0(c);
        c = new vD;
        c.F = g[0];
        c.G = g[1];
        c.I = g[2];
        c.Dc = Math.PI / 2;
        c.De = -Nz(f);
        c.C = Nz(75);
        c.D = e * d / Math.tan(c.C / 2);
        a = a.C.clone();
        a.Vd(c);
        return new y2(b, a)
    };

K2.prototype.play = function () {
    0 == this.W && (fXa(this, l, l), this.Wz(this.C), r2(this.oa, k));
    return K2.ia.play.call(this)
};

K2.prototype.X = function (a) {
    fXa(this, i, !! a);
    if (0 == this.W) {
        var a = this.I.xi(),
            b = this.I.Bf() - this.V().Bf(),
            c = this.I.Cf() - this.V().Cf();
        a.F = this.C.Bf() + b;
        a.G = this.C.Cf() + c;
        this.I.Vd(a);
        r2(this.oa, k);
        a = qD();
        uD(this.C.Bf(), this.C.Cf(), this.C.xg(), a);
        a = gXa(this, this.oa.ro.get(), a[1], a[0], a[2], Ty(-this.C.lf()));
        this.oa.D = a;
        I2(this, a);
        J2(this, a, 1)
    }
    K2.ia.X.call(this)
};

var L2 = fa("$b");
L2.prototype.getContext = r("$b");
L2.prototype.MB = ea();
var M2 = function (a) {
    this.$b = a;
    this.C = this.D = 0
};

B(M2, L2);
M2.prototype.activate = function (a, b) {
    this.D = a;
    this.C = b;
    this.$b.F.Hn(k);
    this.$b.F.Rt(k);
    this.$b.viewport(0, 0, a, b);
    return i
};

M2.prototype.bindTexture = function (a) {
    var b = this.$b.F.C || k,
        c = r1(this.$b.state);
    this.activate(this.D, this.C);
    this.$b.activeTexture(33984 + a);
    a = this.$b.C.createTexture(9729);
    this.$b.bindTexture(3553, x1(this.$b.C, a));
    this.$b.D.copyTexImage2D(3553, 0, 6408, 0, 0, this.D, this.C, 0);
    this.$b.F.Hn(b);
    c && this.$b.state.Mf(c[0], c[1], c[2], c[3]);
    return i
};

var N2 = function (a, b, c, d) {
    this.$b = a;
    this.K = b;
    this.L = c;
    this.D = k;
    this.Gi = -1;
    this.F = k;
    this.C = -1;
    this.scale = d || 1;
    this.G = this.I = 0;
    this.Wc = l
};

B(N2, L2);
N2.prototype.activate = function (a, b) {
    if (!lXa(this, a, b)) return l;
    this.$b.F.Hn(this.D);
    this.$b.viewport(0, 0, this.I, this.G);
    this.$b.C.wb(this.Gi);
    this.$b.C.wb(this.C);
    return i
};

var lXa = function (a, b, c) {
    b = Math.ceil(b * a.scale);
    c = Math.ceil(c * a.scale);
    if (41943040 < 4 * 2 * b * c) return l;
    if (!a.D || !a.$b.C.contains(a.Gi) || !a.$b.C.contains(a.C) || a.I != b || a.G != c) {
        if (!a.D || !a.$b.PV(a.D)) a.D = a.$b.NV();
        a.$b.C.contains(a.C) ? a.F = a.$b.C.eb.get(a.C) : (a.F = a.$b.OV(), a.C = a.$b.C.eb.add(a.F, a.$b.C.N, 4 * b * c, 0));
        a.$b.C.contains(a.Gi) || (a.Gi = a.$b.C.createTexture(a.L));
        a.$b.C.Se(a.Gi, 4 * b * c);
        a.$b.C.Se(a.C, 4 * b * c);
        a.$b.bindTexture(3553, x1(a.$b.C, a.Gi));
        z1(a.$b, 6408, b, c, 6408, k);
        a.$b.F.Rt(a.F);
        a.$b.D.renderbufferStorage(36161, a.K ? 34041 : 33189, b, c);
        a.Wc = l
    }
    if (!a.Wc) {
        var d;
        a.$b.F.Hn(a.D);
        (d = x1(a.$b.C, a.Gi)) && a.$b.D.framebufferTexture2D(36160, 36064, 3553, d, 0);
        a.F && a.$b.D.framebufferRenderbuffer(36160, a.K ? 33306 : 36096, 36161, a.F);
        36053 != a.$b.MV(36160) ? (a.$b.F.Hn(k), a.$b.F.Rt(k), d = l) : (a.$b.F.Hn(k), a.$b.F.Rt(k), d = i);
        a.Wc = d;
        if (!a.Wc) return l
    }
    a.I = b;
    a.G = c;
    return i
};

v = N2.prototype;
v.MB = function () {
    this.D = k;
    this.C = this.Gi = -1;
    this.Wc = l
};

v.bindTexture = function (a) {
    var b = x1(this.$b.C, this.Gi);
    if (!b) return l;
    this.$b.activeTexture(33984 + a);
    this.$b.bindTexture(3553, b);
    this.$b.C.wb(this.Gi);
    return i
};

v.getWidth = r("I");
v.getHeight = r("G");
v.wb = function () {
    this.$b.C.wb(this.Gi);
    this.$b.C.wb(this.C)
};

var mXa = function (a, b) {
    this.D = a;
    this.G = b;
    this.C = this.F = -1
};

mXa.prototype.run = function () {
    var a = this.D.getContext(),
        b = a.F.C || k,
        c = r1(a.state);
    this.D.activate(this.F, this.C);
    this.G.run();
    a.F.Hn(b);
    c && a.state.Mf(c[0], c[1], c[2], c[3])
};

var O2 = function (a, b, c, d) {
    this.K = a;
    this.Le = this.F = k;
    this.ma = new OWa;
    this.ea = c;
    this.Nd = d;
    this.ha = l;
    H2.call(this, b, a.F)
};

B(O2, H2);
var nXa = ea();
v = O2.prototype;
v.r$ = function (a, b) {
    var c = a || this.K.Jt();
    if (c) {
        oXa(this.K);
        var d = this.K,
            e = A(this.Ida, this, b);
        d.D = new P2(c);
        (c = d.K.getData(d.D)) ? (d.qf = d.N ? pXa(d.N, c) : c, qXa(d), d.I.set(l), e && e(d.D, d.qf)) : (e && (d.Q[d.D.Bc()] = e), d.I.set(i))
    }
};

v.j9 = function () {
    this.lN(l);
    var a = this.ma,
        b = this.map.width.get(),
        c = this.map.height.get();
    if (!a.C) {
        var d = this.Nd.getContext();
        a.C = new N2(d, l, 9729, 0.25)
    }
    a = new mXa(a.C, this.Nd);
    a.F = b;
    a.C = c;
    a.run();
    b = rXa(this, this.map.Tb());
    c = new y2("tour-swoop-out", b);
    a = new f2(b, h, h, h, this.ma);
    J2(this, c, 1);
    c && a && this.K.F.zm(a, c);
    this.K.C[2] = c;
    this.K.C[1] = k;
    this.K.C[0] = k;
    I2(this, c);
    c = b.clone();
    a = new vD;
    a.D = b.C / 2;
    c.Vd(a);
    this.cw(c);
    this.Ut(this.ha ? 1 : 1E3);
    this.map.F.set(this.I);
    this.F && this.map.C.set(this.F.I);
    this.Nd.D = 1280;
    Y0(this.ea, new v2([this.F.C, this.Nd]));
    this.X()
};

v.lN = fa("ha");
v.Ida = function (a) {
    var b = this.K.qf;
    if (b && 0 < b.C.length) {
        this.F = new nXa;
        this.F.I = this.map.C.get().slice();
        this.F.G = this.map.Lg.get();
        this.F.D = this.map.G.get();
        this.F.C = this.ea.F;
        this.F.F = this.Nd.D;
        this.map.G.set(l);
        this.map.Lg.set(l);
        var c = za(),
            d = this.K,
            b = Q2(b, 0),
            e = A(function (a, b) {
                var d = Math.max(0, 1E3 - za() + c);
                lB(A(this.h8, this, a, b), d)
            }, this);
        if (b) {
            var f = R2(d, b);
            f ? e(b, f) : d.Q[b.Bc()] = e
        }
        a && a(i)
    } else a && a(l)
};

v.h8 = function (a, b) {
    var c = rXa(this, b.Tb()),
        d = new y2(a.getId() + "-swoop", c, a.da()),
        e = new f2(c, b.pd);
    d && e && this.K.F.zm(e, d);
    this.K.C[2] = d;
    I2(this, d);
    this.Wz(this.map.Tb());
    var d = this.K.qf.D(0).F[0],
        e = c.clone(),
        f = new vD;
    f.C = lVa(C2(d) * C2(c) / C2(b.Tb()));
    e.Vd(f);
    this.cw(e);
    this.Ut(this.ha ? 1 : 1E3);
    J2(this, a, h);
    this.K.C[0] = a;
    this.map.F.set(this.map.Tb().clone());
    this.Nd.D = 1280;
    Y0(this.ea, new v2([this.F.C, this.Nd]));
    this.play()
};

v.vda = fa("Le");
v.aj = function () {
    this.U ? (this.F && (this.map.Lg.set(this.F.G), this.map.G.set(this.F.D), this.map.F.set(k), Y0(this.ea, this.F.C), this.Nd.D = this.F.F & 17664, this.F = k), this.K.C = []) : (this.map.C.set([2]), this.map.F.set(k), Y0(this.ea, this.Nd), this.Nd.D = 17664, this.Le && (sXa(this.Le), tXa(this.Le, 0), this.Le.play()));
    O2.ia.aj.call(this)
};

var rXa = function (a, b) {
    var c = b.clone(),
        d = new vD,
        e = a.K.qf.Fa(),
        f = [0, 0, 0];
    tD(e.x, e.y, 3, f);
    d.F = f[0];
    d.G = f[1];
    d.I = f[2];
    d.Dc = Math.PI / 2;
    d.De = a.map.Tb().lf();
    d.K = 0;
    d.C = Nz(13.1);
    d.D = d.I / Math.tan(c.Yh() / 2);
    c.Vd(d);
    return c
};

var S2 = function () {
    this.F = [];
    this.G = []
};

S2.prototype.D = function (a, b) {
    1 == a.length ? (this.F = [a[0], a[0] + 1], this.G = [b[0], b[0]]) : (this.F = a.slice(), this.G = b.slice())
};

S2.prototype.C = function (a) {
    var b = $y(this.F, a);
    0 > b && (b = -b - 2);
    b = ip(b, 0, this.F.length - 2);
    return C0(this.G[b], this.G[b + 1], (a - this.F[b]) / (this.F[b + 1] - this.F[b]))
};

S2.prototype.K = function () {
    var a = new S2;
    a.D(this.G, this.F);
    return a
};

var T2 = function () {
    this.F = [];
    this.G = [
        [0, 0, 0, Number.NaN]
    ]
};

T2.prototype.D = function (a, b) {
    if (0 < a.length) {
        for (var c = a.length - 1, d = Array(c), e = Array(c), f = 0; f < c; ++f) d[f] = a[f + 1] - a[f], e[f] = (b[f + 1] - b[f]) / d[f];
        var g = [];
        if (0 == c) g[0] = [0, 0, 0, b[0]];
        else if (1 == c) g[0] = [0, 0, e[0], b[0]];
        else if (2 == c) {
            var j, m = (e[1] - e[0]) / (d[0] + d[1]),
                n = e[0] - m * d[0],
                p = b[0];
            g[0] = [0, m, n, p]
        } else
        for (var q = this.I(d, e), f = 0; f < c; ++f) j = (q[f] - 2 * e[f] + q[f + 1]) / (d[f] * d[f]), m = (3 * e[f] - 2 * q[f] - q[f + 1]) / d[f], n = q[f], p = b[f], g[f] = [j, m, n, p];
        this.G = g;
        this.F = a.slice()
    } else this.G = [
        [0, 0, 0, Number.NaN]
    ], this.F = []
};

T2.prototype.C = function (a) {
    var b = $y(this.F, a);
    0 > b && (b = -b - 2);
    var b = ip(b, 0, this.G.length - 1),
        a = a - this.F[b],
        c = a * a,
        b = this.G[b];
    return b[0] * c * a + b[1] * c + b[2] * a + b[3]
};

T2.prototype.I = function (a, b) {
    var c = a.length,
        d = Array(c + 1);
    d[0] = a[1];
    for (var e = 1; e < c; ++e) d[e] = 2 * (a[e] + a[e - 1]);
    d[c] = a[c - 2];
    for (var f = Array(c), e = 0; e < c; ++e) f[e] = a[e + 1];
    f[c - 1] = a[c - 2] + a[c - 1];
    var g = Array(c);
    g[0] = a[0] + a[1];
    for (e = 1; e < c; ++e) g[e] = a[e - 1];
    var j = Array(c + 1);
    j[0] = ((a[0] + 2 * g[0]) * a[1] * b[0] + a[0] * a[0] * b[1]) / g[0];
    for (e = 1; e < c; ++e) j[e] = 3 * (a[e] * b[e - 1] + a[e - 1] * b[e]);
    j[c] = (a[c - 1] * a[c - 1] * b[c - 2] + (2 * f[c - 1] + a[c - 1]) * a[c - 2] * b[c - 1]) / f[c - 1];
    c = j;
    d = d.slice();
    c = c.slice();
    e = d.length;
    for (j = 1; j < e; ++j) {
        var m = f[j - 1] / d[j - 1];
        d[j] -= m * g[j - 1];
        c[j] -= m * c[j - 1]
    }
    f = Array(c.length);
    f[e - 1] = c[e - 1] / d[e - 1];
    for (j = e - 2; 0 <= j; --j) f[j] = (c[j] - g[j] * f[j + 1]) / d[j];
    return f
};

T2.prototype.K = function () {
    for (var a = new T2, b = [], c = 0; c < this.F.length; c++) b[c] = this.C(this.F[c]);
    a.D(b, this.F);
    return a
};

var U2 = function () {
    T2.call(this)
};

B(U2, T2);
U2.prototype.I = function (a, b) {
    for (var c = a.length, d = Array(c + 1), e = 1; e < c; ++e) if (0 >= A0(b[e - 1]) * A0(b[e])) d[e] = 0;
    else {
        var f = 2 * a[e] + a[e - 1],
            g = a[e] + 2 * a[e - 1];
        d[e] = (f + g) / (f / b[e - 1] + g / b[e])
    }
    d[0] = uXa(a[0], a[1], b[0], b[1]);
    d[c] = uXa(a[c - 1], a[c - 2], b[c - 1], b[c - 2]);
    return d
};

var uXa = function (a, b, c, d) {
    a = ((2 * a + b) * c - a * d) / (a + b);
    A0(a) != A0(c) ? a = 0 : A0(c) != A0(d) && Math.abs(a) > Math.abs(3 * c) && (a = 3 * c);
    return a
};

var vXa = function (a, b, c, d) {
    this.F = this.K = this.I = this.G = this.N = this.M = this.L = this.U = this.D = this.P = this.V = this.Q = k;
    this.C = b.slice();
    0 == c ? (this.Q = new S2, this.V = new S2, this.P = new S2, this.D = new S2, this.U = new S2, this.L = new S2, this.M = new S2, this.N = new S2, this.G = new S2, this.I = new S2, this.K = new S2, this.F = new S2) : 1 == c ? (this.Q = new T2, this.V = new T2, this.P = new T2, this.D = new T2, this.U = new T2, this.L = new T2, this.M = new T2, this.N = new T2, this.G = new T2, this.I = new T2, this.K = new T2, this.F = new T2) : 2 == c && (this.Q = new U2, this.V = new U2, this.P = new U2, this.D = new U2, this.U = new U2, this.L = new U2, this.M = new U2, this.N = new U2, this.G = new U2, this.I = new U2, this.K = new U2, this.F = new U2);
    this.init_(a);
    this.Y = !! d
};

B(vXa, A2);
v = vXa.prototype;
v.init_ = function (a) {
    for (var b = [], c = 0; c < a.length; ++c) b[c] = a[c].lf();
    wXa(b);
    this.Q.D(this.C, b);
    for (c = 0; c < a.length; ++c) b[c] = a[c].Yd();
    wXa(b);
    this.V.D(this.C, b);
    for (c = 0; c < a.length; ++c) b[c] = a[c].K;
    wXa(b);
    this.P.D(this.C, b);
    for (c = 0; c < a.length; ++c) b[c] = a[c].Yh();
    this.D.D(this.C, b);
    for (c = 0; c < a.length; ++c) b[c] = a[c].C / C2(a[c]);
    this.U.D(this.C, b);
    for (c = 0; c < a.length; ++c) b[c] = a[c].Bf();
    this.L.D(this.C, b);
    for (c = 0; c < a.length; ++c) b[c] = a[c].Cf();
    this.M.D(this.C, b);
    for (c = 0; c < a.length; ++c) b[c] = a[c].xg();
    this.N.D(this.C, b);
    for (c = 0; c < a.length; ++c) b[c] = a[c].D;
    this.G.D(this.C, b);
    for (c = 0; c < a.length; ++c) b[c] = a[c].F;
    this.I.D(this.C, b);
    for (c = 0; c < a.length; ++c) b[c] = a[c].G;
    this.K.D(this.C, b);
    for (c = 0; c < a.length; ++c) b[c] = a[c].C / C2(a[c]);
    this.F.D(this.C, b)
};

v.Yd = function (a) {
    return this.V.C(a)
};

v.lf = function (a) {
    return this.Q.C(a)
};

v.YV = function (a) {
    return this.P.C(a)
};

v.Yh = function (a) {
    return this.D.C(a)
};

v.Bf = function (a) {
    return this.L.C(a)
};

v.Cf = function (a) {
    return this.M.C(a)
};

v.xg = function (a) {
    return this.N.C(a)
};

v.ZV = function (a) {
    var b = h0(this.D.C(a));
    return this.U.C(a) * b
};

v.XV = function (a) {
    var b = h0(this.D.C(a));
    return this.F.C(a) * b
};

v.VV = u(0);
v.WV = u(0);
v.UV = function (a) {
    var b = this.G.C(a),
        c = this.I.C(a),
        a = this.K.C(a);
    return vVa(b, c, a)
};

var wXa = function (a) {
    for (var b = 1; b < a.length; b++) a[b] = a[b - 1] + Nz(Mz(Ty(a[b - 1]), Ty(a[b])))
};

var xXa = function () {
    this.G = k;
    this.D = this.C = this.position = 0;
    this.F = [];
    this.L = this.I = 0;
    this.K = 1;
    this.aD = 0;
    this.userName = this.bD = this.Qo = ""
};

xXa.prototype.clone = function () {
    var a = new xXa;
    a.G = this.G;
    a.position = this.position;
    a.C = this.C;
    a.D = this.D;
    a.I = this.I;
    a.L = this.L;
    a.K = this.K;
    a.F = this.F.slice();
    a.aD = this.aD;
    a.Qo = this.Qo;
    a.bD = this.bD;
    a.userName = this.userName;
    return a
};

var yXa = function (a, b, c, d) {
    this.J = b;
    this.N = a.F;
    this.C = a;
    this.M = this.K = this.D = this.F = this.G = k;
    this.I = 0;
    this.L = 1;
    var a = this.C.qf,
        b = a.D(c),
        e = a.D(d);
    this.I = b.position;
    this.L = e.position;
    this.F = Q2(a, c);
    this.G = Q2(a, d);
    this.K = b.F[0];
    this.M = e.F[0]
};

yXa.prototype.Im = function (a) {
    if (a < this.I || a >= this.L) return l;
    var b;
    if (this.D) b = i;
    else {
        var c = R2(this.C, this.F);
        b = R2(this.C, this.G);
        if (!c || !b) b = l;
        else {
            var d = b.Tb(),
                c = c.Tb().clone(),
                e = new vD;
            e.width = d.getWidth();
            e.height = d.getHeight();
            e.near = d.N;
            e.L = d.M;
            e.C = lVa(C2(d) * C2(this.K) / C2(this.M));
            c.Vd(e);
            this.D = new y2("xfade-proxy", c);
            b = new f2(c, b.pd);
            (d = this.D) && b && this.C.F.zm(b, d);
            b = i
        }
    }
    if (!b) return i;
    a = (a - this.I) / (this.L - this.I);
    this.G && zXa(this, this.G, h, 0);
    this.F && zXa(this, this.F, 1, 0.05);
    this.D && zXa(this, this.D, a ? a : h, 0.05);
    this.C.C[0] = this.F;
    this.C.C[1] = this.G;
    this.C.C[2] = this.D;
    a = this.K.xi();
    a.width = h;
    a.height = h;
    a.near = h;
    a.L = h;
    this.J.Tb().Vd(a);
    this.J.W.Xi();
    return i
};

var zXa = function (a, b, c, d) {
    a = a.N.fg(b);
    b = a.F;
    b || (b = new z2, a.F = b);
    b.D = c;
    b.I = d
};

var AXa = function (a, b, c, d) {
    this.D = a;
    this.J = b;
    this.L = a.F;
    this.K = b.Tb();
    this.I = k;
    this.C = [];
    this.F = [];
    this.G = [];
    for (var a = this.D.qf, b = [], e = [], f = 0; f < c.length; ++f) {
        var g = a.D(c[f]);
        0 < g.F.length && (b.push(g.F[0]), e.push(g.position))
    }
    this.I = new vXa(b, e, d, i);
    d = this.D.qf;
    for (a = 0; a < c.length; ++a) b = d.D(c[a]), this.F.push(c[a]), b.C != b.D ? (this.C.push(b.C), this.C.push(b.D), this.G.push(c[a]), this.F.push(c[a])) : this.C.push(b.C), this.G.push(c[Math.min(a + 1, c.length - 1)])
};

AXa.prototype.Im = function (a) {
    if (a < this.C[0] || a >= this.C[this.C.length - 1]) return l;
    $Wa(this.I, a, this.K);
    this.D.C[2] = k;
    var b;
    b = $y(this.C, a);
    0 > b && (b = -b - 2);
    b = Math.min(b, this.C.length - 1);
    var c = this.D,
        d = this.F[b];
    BXa(c, d) && (d = Q2(c.qf, d), (c.C[0] = d) && !c.F.getData(d) && c.G.set(i));
    c = this.D;
    d = this.G[b];
    BXa(c, d) && (d = Q2(c.qf, d), (c.C[1] = d) && !c.F.getData(d) ? c.G.set(i) : CXa(c));
    var c = this.K,
        d = R2(this.D, this.D.C[0]),
        e = R2(this.D, this.D.C[1]),
        d = d ? d.Tb().C : h,
        e = e ? e.Tb().C : h,
        f = new vD;
    d && e ? f.D = Math.min(d, e) : d ? f.D = d : f.D = e;
    c.Vd(f);
    a = b < this.C.length - 1 ? (a - this.C[b]) / (this.C[b + 1] - this.C[b]) : 1;
    this.F[b] != this.G[b] ? (c = Math.min((1 - a) / 0.2, 1), (b = this.D.C[0]) && DXa(this, b, c), a = Math.min(a / 0.8, 1), (b = this.D.C[1]) && DXa(this, b, a)) : (b = this.D.C[0]) && DXa(this, b, 1);
    return i
};

var DXa = function (a, b, c) {
    a = a.L.fg(b);
    b = a.F;
    b || (b = new z2, a.F = b);
    b.D = c;
    b.I = 0.05
};

var V2 = function (a, b) {
    E1.call(this, [], [], 0);
    this.C = a;
    this.J = b;
    this.I = [];
    this.M = [];
    this.F = [];
    this.U = this.K = k;
    this.Y = -1;
    sXa(this)
};

B(V2, E1);
V2.prototype.Ff = function () {
    EXa(this);
    V2.ia.Ff.call(this)
};

V2.prototype.Pc = function () {
    var a = W2(this, this.ik());
    a == this.I.length - 1 ? this.stop(l) : tXa(this, a + 1)
};

V2.prototype.Td = function () {
    tXa(this, W2(this, this.ik()) - 1);
    this.uf() && (this.pause(), setTimeout(A(function () {
        this.Rr() && this.play()
    }, this), 500))
};

var tXa = function (a, b) {
    b = ip(b, 0, a.I.length - 1);
    a.Im(a.I[b]);
    0 == a.W || EXa(a)
},
    sXa = function (a) {
        if (a.C.qf != k) {
            a.I = [];
            a.M = [];
            for (var b = a.C.qf.F, c = 0; c < b.length; ++c) a.I.push(b[c].position);
            for (c = 0; c < b.length - 1; ++c) a.M.push((b[c].D + b[c + 1].C) / 2);
            a.M.push(Number.MAX_VALUE);
            a.F = [];
            for (var b = a.C.qf, c = b.C, d = [], e = 0; e < c.length; ++e) switch (b.D(e).I) {
            case 3:
                1 < d.length && a.F.push(new AXa(a.C, a.J, d, 2));
                0 < e && a.F.push(new yXa(a.C, a.J, e - 1, e));
                d = [e];
                break;
            case 1:
            case 2:
                d.push(e)
            }
            1 < d.length && a.F.push(new AXa(a.C, a.J, d, 2));
            a.Ut(b.Ro);
            a.K = b.I;
            a.U = a.K ? a.K.K() : k
        }
    },
    EXa = function (a) {
        for (var b = a.ik(), c = 0; c < a.F.length && !a.F[c].Im(b); ++c);
        b = W2(a, b);
        b != a.Y && (a.Y = b, a.dispatchEvent(new X2("PhotoChanged", b)));
        a.C.Lk() || (a.dispatchEvent(new X2("ModelNotReady", W2(a, a.ik()))), (c = a.uf()) && a.pause(), b = a.C, a = A(a.ca, a, c), b.V = a, b.Lk() && CXa(b))
    };

V2.prototype.ca = function (a) {
    this.dispatchEvent(new X2("ModelReady", W2(this, this.ik())));
    a ? this.play() : EXa(this)
};

var W2 = function (a, b) {
    var c = $y(a.M, b);
    return 0 > c ? -c - 1 : c
};

V2.prototype.ik = function () {
    var a = V2.ia.ik.call(this);
    return this.K ? this.K.C(a) : a
};

V2.prototype.Im = function (a) {
    V2.ia.Im.call(this, this.U ? this.U.C(a) : a)
};

var X2 = function (a, b) {
    NA.call(this, a);
    this.qba = b
};

B(X2, NA);
var P2 = function (a) {
    this.type = 7;
    this.K = a
};

B(P2, P1);
P2.prototype.equals = function (a) {
    return P2.ia.equals.call(this, a) && this.K == a.K
};

P2.prototype.Bc = function () {
    return this.type + ":" + this.K
};

P2.prototype.Me = function () {
    return this
};

var Y2 = function (a, b, c, d, e, f, g, j) {
    this.pg = b || "";
    this.K = e || k;
    this.L = f || "";
    this.C = a;
    this.F = c || k;
    this.Ro = d || 500 * a.length;
    this.I = g || k;
    this.G = j || []
};

B(Y2, e2);
var Q2 = function (a, b) {
    return 0 <= b && b < a.C.length ? a.C[b] : k
};

Y2.prototype.Fa = r("K");
Y2.prototype.Gr = r("L");
Y2.prototype.getName = r("pg");
Y2.prototype.D = function (a) {
    return this.F && 0 <= a && a < this.F.length ? this.F[a] : k
};

var FXa = function () {
    this.G = 700;
    this.D = 2E3;
    this.I = 700;
    this.C = this.F = 1
};

FXa.prototype.clone = function () {
    var a = new FXa;
    a.G = this.G;
    a.D = this.D;
    a.I = this.I;
    a.F = this.F;
    a.C = this.C;
    return a
};

var pXa = function (a, b) {
    for (var c = [], d = b.F, e = 0; e < d.length; ++e) c.push(d[e].clone());
    for (d = 0; d < c.length; ++d) {
        var e = c[d],
            f = l;
        switch (a.F) {
        case 1:
            f = i;
            break;
        case 0:
            f = l;

            break;
        case 2:
            f = 1 == e.L
        }
        f || (e.D = e.position, e.C = e.position)
    }
    for (d = 0; d < c.length; ++d) e = c[d], e.C = e.position + a.C * (e.C - e.position), e.D = e.position + a.C * (e.D - e.position);
    for (var g = 0, d = [], e = [], f = 0; f < c.length; ++f) {
        var j = c[f],
            m = j.K * a.D;
        3 == j.I ? g += a.G : 2 == j.I && (g += a.I);
        j.C != j.D ? (d.push(g), e.push(j.C), g += m, d.push(g), e.push(j.D)) : (d.push(g), e.push(j.position))
    }
    g = d[d.length - 1];
    for (f = 0; f < d.length; ++f) d[f] /= g;
    f = new S2;
    f.D(d, e);
    d = new GXa;
    d.C = f;
    d.duration = g;
    return new Y2(b.C, b.getName(), c, d.duration, b.Fa(), b.Gr(), d.C, b.G)
},
    GXa = ea();
var Z2 = function (a, b) {
    this.K = a;
    this.N = new FXa;
    this.F = b;
    this.P = [];
    this.M = [];
    this.qf = this.D = k;
    this.C = [];
    this.Q = {};

    this.V = k;
    aB(this.K, "AddEvent", A(this.ma, this));
    aB(this.F, "AddEvent", A(this.ha, this));
    this.ca = this.U = new L0(h, l);
    this.Y = this.I = new L0(h, l);
    this.ba = this.L = new L0(h, l);
    this.X = this.G = new L0(h, l);
    this.ea = {};

    this.qy = k;
    oXa(this)
},
    oXa = function (a) {
        a.P = [];
        a.M = [];
        a.D = k;
        a.qf = k;
        a.qy = k;
        a.C = [];
        a.U.set(l);
        a.I.set(l);
        a.L.set(l);
        a.G.set(l)
    };

Z2.prototype.ma = function (a) {
    HXa(this.P, a.C.Oa) && 0 == this.P.length && this.U.set(l);
    if (a.C.Oa && this.D) {
        if (a.C.Oa.equals(this.D)) {
            var b = this.K.getData(this.D);
            this.qf = b && this.N ? pXa(this.N, b) : b;
            qXa(this);
            this.I.set(l)
        }
        IXa(this, a.C.Oa, this.K.getData(a.C.Oa))
    }
};

Z2.prototype.ha = function (a) {
    if (HXa(this.M, a.C.Oa)) {
        0 == this.M.length && (this.L.set(l), this.G.set(l));
        var b = R2(this, a.C.Oa);
        b && a.C.Oa && IXa(this, a.C.Oa, b)
    }
    this.Lk() && CXa(this)
};

var IXa = function (a, b, c) {
    var d = a.Q[b.Bc()];
    d && (delete a.Q[b.Bc()], d(b, c))
};

Z2.prototype.Jt = function () {
    return this.D && this.D.K
};

var qXa = function (a) {
    if (a.qf) {
        a.C = [];
        a.M = Rg(a.qf.C);
        a.L.set(i);
        a.ea[a.Jt()] = i;
        var b;
        a: if (!a.qf || 0 == a.qf.G.length) b = k;
        else {
            b = a.qf.G;
            for (var c = 0; c < b.length; ++c) {
                var d = b[c];
                if (!a.ea[d.getId()]) {
                    b = d;
                    break a
                }
            }
            b = b[Math.floor(Math.random() * b.length)]
        }
        a.qy = b
    }
},
    R2 = function (a, b) {
        return b ? a.F.getData(b) : k
    };

Z2.prototype.Lk = function () {
    return this.C[1] ? !! R2(this, this.C[1]) : i
};

var KXa = function (a, b) {
    if (!a.D || !a.qf) return [];
    for (var c = a.qf.C, d = a.C[1], d = d ? JXa(c, d) : 0, e = [], f = 0; f < Math.min(b, c.length - d); f++) {
        var g = c[d + f];
        !a.F.getData(g) && e.push(g)
    }
    return e
},
    BXa = function (a, b) {
        if (a.qf) {
            var c = a.qf.C;
            return !(!c || !(0 <= b && b < c.length))
        }
        return l
    },
    JXa = function (a, b) {
        for (var c = 0; c < a.length; c++) if (b.equals(a[c])) return c;
        return -1
    },
    HXa = function (a, b) {
        var c = JXa(a, b);
        return 0 <= c ? Qg(a, c) : l
    },
    CXa = function (a) {
        var b = a.V;
        a.V = k;
        b && b()
    };

/*  Public Domain. Authored by the US Department of Commerce, NOAA,  Earth System Research Laboratory */
var $2 = function (a) {
    return Math.PI * a / 180
},
    LXa = function (a) {
        for (a = 280.46646 + a * (36000.76983 + 3.032E-4 * a); 360 < a;) a -= 360;
        for (; 0 > a;) a += 360;
        return a
    };

var MXa = function (a) {
    this.J = a;
    this.D = new N0(A(this.C, this), this.J.lat.get());
    this.F = new N0(A(this.C, this), this.J.lng.get());
    this.D.Zb(this.J.lat);
    this.F.Zb(this.J.lng);
    setInterval(A(this.C, this), 6E4);
    this.C()
};

MXa.prototype.C = function () {
    for (var a = new Date, b = this.D.get(), c = this.F.get(), d = (a.getTime() / 864E5 + 2440587.5 - 2451545) / 36525, e = 60 * a.getHours() + a.getMinutes() + a.getSeconds() / 60, a = -a.getTimezoneOffset() / 60, f = LXa(d), g = 0.016708634 - d * (4.2037E-5 + 1.267E-7 * d), j = 357.52911 + d * (35999.05029 - 1.537E-4 * d), m = Math.tan($2(23 + (26 + (21.448 - d * (46.815 + d * (5.9E-4 - 0.001813 * d))) / 60) / 60 + 0.00256 * Math.cos($2(125.04 - 1934.136 * d))) / 2), m = m * m, n = Math.sin($2(j)), p = $2(357.52911 + d * (35999.05029 - 1.537E-4 * d)), d = 180 * Math.asin(Math.sin($2(23 + (26 + (21.448 - d * (46.815 + d * (5.9E-4 - 0.001813 * d))) / 60) / 60 + 0.00256 * Math.cos($2(125.04 - 1934.136 * d)))) * Math.sin($2(LXa(d) + (Math.sin(p) * (1.914602 - d * (0.004817 + 1.4E-5 * d)) + Math.sin(p + p) * (0.019993 - 1.01E-4 * d) + 2.89E-4 * Math.sin(p + p + p)) - 0.00569 - 0.00478 * Math.sin($2(125.04 - 1934.136 * d))))) / Math.PI, c = e + (4 * (180 * (m * Math.sin(2 * $2(f)) - 2 * g * n + 4 * g * m * n * Math.cos(2 * $2(f)) - 0.5 * m * m * Math.sin(4 * $2(f)) - 1.25 * g * g * Math.sin(2 * $2(j))) / Math.PI) + 4 * c - 60 * a); 1440 < c;) c -= 1440;
    e = c / 4 - 180; - 180 > e && (e += 360);
    c = Math.sin($2(b)) * Math.sin($2(d)) + Math.cos($2(b)) * Math.cos($2(d)) * Math.cos($2(e));
    1 < c ? c = 1 : -1 > c && (c = -1);
    c = 180 * Math.acos(c) / Math.PI;
    a = Math.cos($2(b)) * Math.sin($2(c));
    0.001 < Math.abs(a) ? (b = (Math.sin($2(b)) * Math.cos($2(c)) - Math.sin($2(d))) / a, 1 < Math.abs(b) && (b = 0 > b ? -1 : 1), b = 180 - 180 * Math.acos(b) / Math.PI, 0 < e && (b = -b)) : b = 0 < b ? 180 : 0;
    0 > b && (b += 360);
    d = 90 - c;
    85 < d ? d = 0 : (e = Math.tan($2(d)), d = (5 < d ? 58.1 / e - 0.07 / (e * e * e) + 8.6E-5 / (e * e * e * e * e) : -0.575 < d ? 1735 + d * (-518.2 + d * (103.4 + d * (-12.79 + 0.711 * d))) : -20.774 / e) / 3600);
    d = c - d;
    d = 90 - d;
    50 > d && (d = 50);
    this.J.ca.set(-b);
    this.J.ea.set(d)
};

var b3 = function () {
    a3 || ca(Error("Module loader requested but none has been injected."));
    return a3
},
    c3 = function (a, b) {
        a3 ? a3.C[a] = b : NXa.push({
            id: a,
            Pj: b
        })
    },
    a3 = k,
    NXa = [];
var d3 = function (a) {
    this.ba = a || 0;
    this.P = t0();
    this.xa = t0();
    this.Ba = t0();
    this.L = qD();
    this.U = rD();
    this.Q = sD();
    this.Jd = i;
    this.G = this.F = this.D = 0;
    this.C = 1;
    this.ca = this.K = this.ma = this.ha = this.Y = this.X = this.V = 0;
    this.N = 1 / 3;
    this.M = Number.MAX_VALUE;
    this.ea = this.qa = 0;
    this.I = 1;
    this.Ia = []
};

v = d3.prototype;
v.clone = function () {
    var a = new d3;
    a.Vd(this.xi());
    a.I = this.I;
    return a
};

v.equals = function (a) {
    return this.D === a.D && this.F === a.F && this.G === a.G && this.C === a.C && this.Bf() === a.Bf() && this.Cf() === a.Cf() && this.xg() === a.xg() && this.lf() === a.lf() && this.Yd() === a.Yd() && this.K === a.K && this.Yh() === a.Yh() && this.N === a.N && this.M === a.M && this.getWidth() === a.getWidth() && this.getHeight() === a.getHeight()
};

v.Bf = r("V");
v.Cf = r("X");
v.xg = r("Y");
v.lf = r("ha");
v.Yd = r("ma");
v.Yh = r("ca");
var C2 = function (a) {
    return h0(a.Yh())
};

d3.prototype.getWidth = r("qa");
d3.prototype.getHeight = r("ea");
d3.prototype.Vd = function (a) {
    var b = l,
        c = l,
        d = l,
        e = l;
    y(a.M) && (this.D = a.M, b = i);
    y(a.N) && (this.F = a.N, b = i);
    y(a.P) && (this.G = a.P, b = i);
    y(a.D) && (this.C = a.D, c = i);
    y(a.F) && (this.V = a.F, d = i);
    y(a.G) && (this.X = a.G, d = i);
    y(a.I) && (this.Y = a.I, d = i);
    y(a.De) && (this.ha = a.De, e = i);
    y(a.Dc) && (this.ma = a.Dc, e = i);
    y(a.K) && (this.K = a.K, e = i);
    y(a.C) && (this.ca = a.C);
    y(a.near) && (this.N = a.near);
    y(a.L) && (this.M = a.L);
    y(a.width) && (this.qa = a.width);
    y(a.height) && (this.ea = a.height);
    e && (!b && !d) && (d = i);
    !c && (d && b) && (a = this.Bf() - this.D, c = this.Cf() - this.F, e = this.xg() - this.G, this.C = Math.sqrt(a * a + c * c + e * e));
    d && !b && (OXa(this, this.L), this.D = this.Bf() + this.L[0], this.F = this.Cf() + this.L[1], this.G = this.xg() + this.L[2]);
    b && !d && (OXa(this, this.L), this.V = this.D - this.L[0], this.X = this.F - this.L[1], this.Y = this.G - this.L[2]);
    this.Jd = i;
    this.I++;
    for (b = 0; b < this.Ia.length; b++) this.Ia[b]()
};

d3.prototype.xi = function (a) {
    a = a || new vD;
    a.M = this.D;
    a.N = this.F;
    a.P = this.G;
    a.D = this.C;
    a.F = this.Bf();
    a.G = this.Cf();
    a.I = this.xg();
    a.De = this.lf();
    a.Dc = this.Yd();
    a.K = this.K;
    a.C = this.Yh();
    a.near = this.N;
    a.L = this.M;
    a.width = this.getWidth();
    a.height = this.getHeight();
    return a
};

var b2 = function (a) {
    PXa(a);
    return a.P
},
    KWa = function (a) {
        var b = a.Ba,
            c = a.L,
            d = a.U;
        B2(a, 0, 0, 0, c);
        B2(a, 1, 1, 1, d);
        w0(d, c, d);
        a0(b, d[0], 0, 0, 0, 0, d[1], 0, 0, 0, 0, d[2], 0, c[0], c[1], c[2], 1);
        return b
    },
    PXa = function (a) {
        if (a.Jd) {
            var b = a.Yh(),
                c = a.getWidth() / a.getHeight(),
                d = a.N,
                e = a.M,
                f = b / 2,
                b = e - d,
                g = Math.sin(f);
            0 == b || (0 == g || 0 == c) || (f = Math.cos(f) / g, a0(a.P, f / c, 0, 0, 0, 0, f, 0, 0, 0, 0, -(e + d) / b, -1, 0, 0, -(2 * d * e) / b, 0));
            nVa(a.Q, -a.K, -a.Yd(), -a.lf());
            s0(a.P, a.Q, a.P);
            e = 1 / a.C;
            c = e * (a.D - a.Bf());
            d = e * (a.F - a.Cf());
            e *= a.G - a.xg();
            m0(a.P, c, d, e);
            r0(a.P, a.xa);
            a.Jd = l
        }
    },
    a2 = function (a, b, c, d) {
        var e = 1 / a.C;
        d ? (d = a.U, d[0] = b[0], d[1] = b[5], d[2] = b[10], d[3] = b[15], o0(c, e * d[0], e * d[1], e * d[2]), d = a.U, rVa(b, 3, d), d[0] = e * (d[0] - a.D), d[1] = e * (d[1] - a.F), d[2] = e * (d[2] - a.G), sVa(c, d)) : (d = a.Q, o0(d, e, e, e), m0(d, -a.D, -a.F, -a.G), s0(d, b, c))
    };

d3.prototype.xo = function (a, b, c) {
    var c = c || new i0,
        d = this.L,
        e = this.N,
        f = this.M;
    aXa(this, a, b, f / (f - e), d);
    d[2] = (f + e) / (f - e);
    PXa(this);
    q0(this.xa, d, c.dir);
    u0(c.dir, c.dir);
    X_(c.origin, this.Bf(), this.Cf(), this.xg());
    return c
};

var D2 = function (a, b, c, d, e) {
    var e = e || e0(),
        f = 1 / a.C,
        g = a.U;
    g[0] = (b - a.D) * f;
    g[1] = (c - a.F) * f;
    g[2] = (d - a.G) * f;
    g[3] = 1;
    oVa(b2(a), g, g);
    b = 1 / g[3];
    B2(a, g[0] * b, g[1] * b, g[2] * b, e)
},
    B2 = function (a, b, c, d, e) {
        e = e || [0, 0, 0];
        e[0] = 0.5 * (b + 1) * a.getWidth();
        e[1] = 0.5 * (-c + 1) * a.getHeight();
        e[2] = 0.5 * (d + 1)
    },
    aXa = function (a, b, c, d, e) {
        e = e || [0, 0, 0];
        e[0] = 2 * b / a.getWidth() - 1;
        e[1] = 2 * -c / a.getHeight() + 1;
        e[2] = 2 * d - 1
    },
    QXa = function (a, b, c) {
        var d = C2(a),
            e = a.getHeight(),
            f = y(c) ? c : a.Yd(),
            a = y(c) ? a.C * Math.cos(c) + a.G : a.xg(),
            b = d * Math.cos(f) - (1 - 2 * b / e) * Math.sin(f);
        return 0 > b ? Infinity : 2 / e * a * d / (b * b)
    },
    RXa = function (a) {
        var b = C2(a),
            c = a.Yd(),
            a = a.getHeight();
        return (1 - b / Math.tan(c)) * a / 2
    },
    OXa = function (a, b) {
        X_(b, 0, 0, -a.C);
        nVa(a.Q, a.lf(), a.Yd(), a.K);
        p0(a.Q, b, b)
    };

var f3 = function (a, b, c, d, e, f) {
    this.C = a;
    this.D = c;
    this.Hc = b;
    this.F = d;
    this.fd = e;
    this.style = f
};

f3.prototype.Kc = function () {
    return this.Hc.Kc(this.fd)
};

f3.prototype.Ec = function () {
    for (var a = this.Hc.Bl(), b = 0; b < a; b++) if (this.fd == this.Hc.wH(b)) return a = this.Hc.Ar(this.Hc.oz(b)), b = qD(), SXa(this.Hc, a[0], a[1], b), b;
    return k
};

var i3 = function (a) {
    return a.data && a.C && a.Oa && 0 == a.Oa.type && a.data instanceof g3 && a.Oa instanceof h3 ? a : k
};

var TXa = function (a) {
    this.D = a;
    this.F = [];
    this.C = [];
    this.K = [];
    this.G = this.I = new N0(h, 0);
    this.L = this.M = new N0(h, 0);
    this.P = this.N = new L0(h, l)
};

TXa.prototype.hS = function (a, b) {
    var c = this.G.get() + 1;
    this.F[c] = a;
    this.C[c] = b;
    this.I.set(c)
};

var UXa, VXa, WXa = function (a, b) {
    UXa || (UXa = new l2, VXa = new vD);
    var c = UXa,
        d = VXa;
    vWa(a.xi(), c);
    c.zoom = b;
    N1(c, d);
    a.Vd(d)
};

var XXa = function (a) {
    this.D = a;
    this.C = k
};

XXa.prototype.F = qD();
var j3 = new i0,
    J1 = function (a, b, c, d) {
        var e = a.D;
        isNaN(d) || (a.C ? a.C.Vd(a.D.xi()) : a.C = a.D.clone(), WXa(a.C, d), e = a.C);
        a = a.F;
        e.xo(b, c, j3);
        b = -j3.origin[2] / j3.dir[2];
        $qa(j3.origin[0] + j3.dir[0] * b, j3.origin[1] + j3.dir[1] * b, j3.origin[2] + j3.dir[2] * b, a);
        b = new Cw(a[0], a[1]);
        b.x = Ty(b.x);
        b.y = Ty(b.y);
        return b
    },
    k3 = function (a, b, c, d) {
        d ? (a.C || (a.C = a.D.clone()), a.C.Vd(a.D.xi()), a.C.Vd(d), d = a.C) : d = a.D;
        a = a.F;
        tD(b, c, 0, a);
        D2(d, a[0], a[1], a[2], a);
        return new Cw(a[0], a[1])
    },
    YXa = function (a, b, c) {
        this.D = a - b / 2;
        this.F = a + b / 2;
        this.I = b;
        this.G = c
    };

YXa.prototype.C = function (a, b, c, d, e, f) {
    for (var g = this.D, j = this.F, m = this.I, n = this.G, p = 0; p < 2 * a; p += 2) {
        var q = b[p] + d,
            s = b[p + 1] + e;
        q > j ? q -= m : q < g && (q += m);
        var t = n[0] * q + n[4] * s + n[8] * f + n[12],
            x = n[1] * q + n[5] * s + n[9] * f + n[13],
            q = n[3] * q + n[7] * s + n[11] * f + n[15];
        0.01 > q && (q = 0.01);
        c[p] = t / q;
        c[p + 1] = x / q
    }
};

var l3 = function (a, b) {
    G0.call(this, a, b)
};

B(l3, G0);
l3.prototype.Zb = function (a, b) {
    l3.ia.Zb.call(this, a, b)
};

l3.prototype.set = function (a, b) {
    I0(this, a, b)
};

l3.prototype.G = function (a) {
    H0(this.Eo, a)
};

l3.prototype.equals = function (a) {
    return DVa(a, this.get())
};

var m3 = function (a, b, c, d, e) {
    M0.call(this, c, d, h, e);
    this.M = a;
    this.P = b
};

B(m3, N0);
m3.prototype.set = function (a, b) {
    m3.ia.set.call(this, ip(a, this.M, this.P), b)
};

var n3 = function (a, b, c, d, e) {
    M0.call(this, c, d, h, e);
    this.P = b - a;
    this.M = a
};

B(n3, N0);
n3.prototype.set = function (a, b) {
    n3.ia.set.call(this, jp(a - this.M, this.P) + this.M, b)
};

var o3 = function (a) {
    this.G = [];
    this.I = [];
    this.F = [];
    this.K = [];
    this.lng = this.lat = this.D = this.C = 0;
    for (var b = 256, c = 0; c < a; c++) {
        var d = b / 2;
        this.G.push(b / 360);
        this.I.push(b / (2 * Math.PI));
        this.F.push(d);
        this.K.push(b);
        b *= 2
    }
},
    p3 = function (a, b, c, d) {
        var e, f;
        d == Math.floor(d) && d < a.F.length ? (e = a.F[d], f = a.G[d], d = a.I[d]) : (d = 256 * Math.pow(2, d), e = d / 2, f = d / 360, d /= 2 * Math.PI);
        a.C = e + b * f;
        b = ip(Math.sin(Nz(c)), -0.9999, 0.9999);
        a.D = e - 0.5 * Math.log((1 + b) / (1 - b)) * d
    },
    q3 = function (a, b, c, d) {
        var e, f;
        d == Math.floor(d) && d < a.F.length ? (e = a.F[d], f = a.G[d], d = a.I[d]) : (d = 256 * Math.pow(2, d), e = d / 2, f = d / 360, d /= 2 * Math.PI);
        a.lng = (b - e) / f;
        a.lat = Ty(2 * Math.atan(Math.exp((c - e) / -d)) - Math.PI / 2)
    };

o3.prototype.zj = function (a) {
    return a == Math.floor(a) && a < this.F.length ? this.K[a] : 256 * Math.pow(2, a)
};

var ZXa = function (a) {
    G0.call(this, a)
};

B(ZXa, G0);
ZXa.prototype.set = function (a) {
    I0(this, a)
};

var r3 = function (a, b) {
    G0.call(this, a, b)
};

B(r3, G0);
r3.prototype.Zb = function (a, b) {
    r3.ia.Zb.call(this, a, b)
};

r3.prototype.set = function (a, b) {
    I0(this, a, b)
};

r3.prototype.G = function (a) {
    H0(this.Eo, a)
};

var $Xa = function (a, b) {
    this.Ba = a;
    this.D = new XXa(a);
    this.L = new o3(21);
    var c = new w2(h, h, h, b),
        d = new w2(h, h, h, b);
    this.qa = 0;
    this.lat = new m3(-90, 90, A(this.ov, this), 0, 1E-12);
    this.lng = new n3(-180, 180, A(this.ov, this), 0, 1E-12);
    this.width = new N0(A(this.Xi, this), 0);
    this.height = new N0(A(this.Xi, this), 0);
    this.zoom = new m3(0, Infinity, A(this.ov, this), 0, 1E-12);
    this.rotation = new n3(0, 360, A(this.ov, this), 0, 1E-12);
    this.G = this.Ka = new N0(h, 0);
    this.F = new l3(A(this.Xi, this), [0]);
    this.mapTypes = new l3(A(this.Xi, this), [0]);
    this.C = new r3(A(this.Xi, this), c);
    this.Ta = new ZXa(A(this.Xi, this));
    this.Dc = new m3(0, 179.9, A(this.ov, this), 0, 1E-12);
    this.Lg = new L0(A(this.Xi, this), i);
    this.ba = new N0(A(this.Xi, this), 0);
    this.N = new N0(A(this.ov, this), 13.1, h, 1E-12);
    this.xa = new N0(h, 0.02);
    this.I = new r3(A(this.Xi, this), d);
    this.ma = this.U = new L0(h, l);
    this.P = new L0(h, i);
    this.ha = new m3(0, 1, A(this.Xi, this), 1);
    this.ea = new m3(0, 1, A(this.Xi, this), 1);
    this.altitude = new N0(A(this.ov, this), 0);
    this.V = new L0(A(this.Xi, this), i);
    this.X = new L0(A(this.Xi, this), i);
    this.Y = new L0(A(this.Xi, this), i);
    this.K = new G0(A(this.Xi, this), k);
    this.K.set = A(function (a, b) {
        I0(this, a, b)
    }, this.K);
    this.K.G = A(function (a) {
        H0(this.Eo, a)
    }, this.K);
    this.M = new L0(h, i);
    this.Q = new L0(h, i);
    this.Ja = new L0(h, i);
    this.ca = new N0(A(this.Xi, this), 0)
};

v = $Xa.prototype;
v.Xi = function () {
    this.G.set(this.G.get() + 1)
};

v.Yy = function (a) {
    var b = this.mapTypes.get();
    0 > b.indexOf(a) && (b = b.slice(), b.push(a), this.mapTypes.set(b))
};

v.Nu = function (a) {
    var b = this.mapTypes.get().slice();
    pA(b, a) && this.mapTypes.set(b)
};

v.Tb = r("Ba");
v.ov = function () {
    this.Xi();
    this.qa = za() + 50;
    this.ma.get() || (setTimeout(A(this.Q1, this), 50), this.U.set(i))
};

v.Q1 = function () {
    var a = this.qa - za();
    0 >= a ? this.U.set(l) : setTimeout(A(this.Q1, this), a)
};

var t3 = function (a, b) {
    this.I = a;
    this.G = b;
    this.D = l;
    s3(this, a.lat);
    s3(this, a.lng);
    s3(this, a.zoom);
    s3(this, a.rotation);
    s3(this, a.Dc);
    s3(this, a.N);
    s3(this, a.width);
    s3(this, a.height);
    var c = A(this.K, this);
    this.G.Ia.push(c)
};

t3.prototype.C = new vD;
t3.prototype.F = new l2;
var s3 = function (a, b) {
    (new M0(A(a.L, a))).Zb(b)
};

t3.prototype.L = function () {
    if (!this.D) {
        this.D = i;
        var a = this.I,
            b = this.F || new l2;
        b.lat = a.lat.get();
        b.lng = a.lng.get();
        b.alt = a.altitude.get();
        b.zoom = a.zoom.get();
        b.rotation = a.rotation.get();
        b.Dc = a.Dc.get();
        b.C = a.N.get();
        b.width = a.width.get();
        b.height = a.height.get();
        N1(this.F, this.C);
        this.G.Vd(this.C);
        this.D = l
    }
};

t3.prototype.K = function () {
    if (!this.D) {
        this.D = i;
        this.G.xi(this.C);
        0 != this.C.K && 0 > this.I.F.get().indexOf(2) && (this.C.K = 0, this.G.Vd(this.C));
        vWa(this.C, this.F);
        var a = this.I,
            b = this.F;
        a.lat.set(b.lat);
        a.lng.set(b.lng);
        a.altitude.set(b.alt);
        a.zoom.set(b.zoom);
        a.rotation.set(b.rotation);
        a.Dc.set(b.Dc);
        a.N.set(b.C);
        a.width.set(b.width);
        a.height.set(b.height);
        this.D = l
    }
};

var aYa = function (a) {
    this.Si = a ? a.Si : k;
    this.oj = a ? a.oj : za();
    this.zk = a ? a.zk : 1E3;
    this.ha = a ? a.ha : 17664;
    this.Ak = a ? a.Ak : i;
    this.M = a ? a.M : 1;
    this.yb = a ? a.yb : 255;
    this.D = a ? a.we() : 256;
    this.Ae = a ? a.Ae : 0.02;
    this.ea = a ? a.ea : i;
    this.Ta = a ? a.Ta : i;
    this.P = a ? a.P : i;
    this.ee = a ? a.ee : i;
    this.Dk = a ? a.Dk : new w2;
    this.G = a ? a.G : ["/vt/vec?src=vector"];
    this.fb = a ? a.fb : k;
    this.ma = a ? a.ma : i;
    this.ba = a ? a.ba : i;
    this.Ja = a ? a.Ja : i;
    this.xa = a ? a.xa : i;
    this.Ka = a ? a.Ka : i;
    this.Pc = a ? a.Pc : 0;
    this.Td = a ? a.Td : 0;
    this.vh = a ? a.vh : l;
    this.Q = a ? a.Q : ["/kh?v=0"];
    this.Ti = a ? a.Ti : l;
    this.U = a ? a.U : ["//mt0.google.com/vt?lyrs=t"];
    this.nf = a ? a.nf : l;
    this.I = a ? a.I : ["/kh?v=0"];
    this.K = a ? a.K : ["/kh?v=0"];
    this.kf = a ? a.kf : 1;
    this.Re = a ? a.Re : 1;
    this.Jg = a ? a.Jg : l;
    this.L = a ? a.L : ["/vt?"];
    this.Nf = a ? a.Nf : new w2;
    this.N = a ? a.N : ["www.gstatic.com/landmark/depth/"];
    this.X = a ? a.X : "webgl5";
    this.Rb = a ? a.Rb : l;
    this.Bb = a ? a.Bb : k;
    this.Y = a ? a.Y : 1;
    this.qa = a ? a.qa : 1;
    this.C = a ? a.C : "";
    this.F = a ? a.F : l;
    this.Va = a ? a.Va : "";
    this.Ba = a ? a.Ba : l;
    this.Wb = a ? a.Wb : l;
    this.ca = a ? a.ca : l;
    this.V = a ? a.V : 5
};

aYa.prototype.we = r("D");
aYa.prototype.setLanguage = fa("Va");
var bYa = ea();
B(bYa, iB);
var cYa = function (a) {
    NA.call(this, "FrameComplete", a)
};

B(cYa, NA);
var dYa = function (a) {
    NA.call(this, "FramePrepared", a)
};

B(dYa, NA);
var eYa = function (a) {
    NA.call(this, "FrameStart", a)
};

B(eYa, NA);
var u3 = ea();
u3.prototype.TN = u(l);
u3.prototype.u0 = function (a, b, c, d) {
    d(a, c)
};

u3.prototype.tU = ea();
u3.prototype.stop = ea();
var v3 = function (a, b, c) {
    for (var d = 0, e = 0; 4 > e; e++) var f = a & 255,
        d = d | f + c * ((b & 255) - f) << 8 * e,
        a = a >> 8,
        b = b >> 8;
    return d
};

var w3 = function () {
    this.width = 0;
    this.D = k;
    this.I = this.K = i;
    this.G = this.L = this.F = this.C = 0;
    this.M = -1
},
    fYa = function (a, b) {
        if (a === b) return i;
        if (a == k || b == k || a.width != b.width || a.K != b.K || a.I != b.I || a.C != b.C || a.F != b.F || a.L != b.L || a.G != b.G || a.M != b.M) return l;
        if (a.D) {
            if (!b.D || a.D.length != b.D.length) return l;
            for (var c = 0; c < a.D.length; ++c) if (a.D[c] != b.D[c]) return l
        } else if (b.D) return l;
        return i
    },
    gYa = function (a, b) {
        a.width = b.width;
        a.K = b.K;
        a.I = b.I;
        a.C = b.C;
        a.F = b.F;
        a.L = b.L;
        a.M = b.M;
        a.G = b.G;
        a.D = b.D ? b.D.slice(0) : k
    },
    x3 = function (a, b, c) {
        a.width += (b.width - a.width) * c;
        a.K += (b.K - a.K) * c;
        a.I += (b.I - a.I) * c;
        a.F += (b.F - a.F) * c;
        a.L += (b.L - a.L) * c;
        a.M += (b.M - a.M) * c;
        a.G += (b.G - a.G) * c;
        a.C = v3(a.C, b.C, c)
    };

var y3 = function () {
    this.C = 0;
    this.D = k;
    this.F = 1
},
    hYa = function (a, b) {
        return a === b || a != k && b != k && a.C == b.C && a.D == b.D && a.F == b.F
    };

var iYa = function () {
    this.C = this.D = 1
};

var z3 = function () {
    this.fillStyle = new y3;
    this.strokeStyle = new w3
};

var jYa = function () {
    this.C = this.Bi = 0;
    this.sr = this.D = k;
    this.nt = 0
},
    kYa = function (a, b) {
        return a === b || a != k && b != k && a.C == b.C && a.Bi == b.Bi && a.D == b.D && a.sr == b.sr
    },
    nYa = function (a) {
        var b = new jYa;
        b.C = a.C;
        b.Bi = a.Bi;
        b.D = a.D;
        b.sr = a.sr;
        return b
    };

var A3 = function () {
    this.C = [];
    this.D = [];
    this.rd = k;
    this.xd = new jYa;
    this.F = new jYa;
    this.I = [];
    this.G = this.ef = k
};

B(A3, e2);
var pYa = function (a) {
    var b = new A3;
    oYa(b, a);
    return b
},
    oYa = function (a, b) {
        var c = a.C.length,
            d = b.C.length;
        d < c && a.C.splice(d, c - d);
        for (c = 0; c < b.C.length; c++) a.C[c] || (a.C[c] = new w3), gYa(a.C[c], b.C[c]);
        c = a.D.length;
        d = b.D.length;
        d < c && a.D.splice(d, c - d);
        for (c = 0; c < b.D.length; ++c) a.D[c] || (a.D[c] = new y3), a.D[c].C = b.D[c].C, a.D[c].D = b.D[c].D, a.D[c].F = b.D[c].F;
        b.xd && (a.xd = nYa(b.xd));
        b.F && (a.F = nYa(b.F));
        b.rd && (a.rd = new z3, a.rd.fillStyle.C = b.rd.fillStyle.C, a.rd.strokeStyle.C = b.rd.strokeStyle.C, a.rd.strokeStyle.width = b.rd.strokeStyle.width);
        b.ef && (a.ef = new w3, a.ef.width = b.ef.width, a.ef.C = b.ef.C);
        b.G && (c = b.G, d = new iYa, d.D = c.D, d.C = c.C, a.G = d)
    },
    qYa = function (a, b) {
        if (a === b) return i;
        if (a == k || b == k || (a.C.length != b.C.length || a.D.length != b.D.length) || !(a.rd === b.rd || (a.rd == k || b.rd == k ? 0 : fYa(a.rd.strokeStyle, b.rd.strokeStyle) && hYa(a.rd.fillStyle, b.rd.fillStyle))) || !kYa(a.xd, b.xd) || !kYa(a.F, b.F) || !(a.G === b.G || a.G != k && b.G != k && a.G.D == b.G.D && a.G.C == b.G.C) || !fYa(a.ef, b.ef)) return l;
        for (var c = 0; c < a.C.length; ++c) if (!fYa(a.C[c], b.C[c])) return l;
        for (c = 0; c < a.D.length; ++c) if (!hYa(a.D[c], b.D[c])) return l;
        return i
    },
    B3 = function (a) {
        for (var b = {}, c = 0; c < a.C.length; c++) {
            var d = a.C[c];
            0 < d.F && (b.line_gradient = i);
            0 <= d.M && (b.line_gradient = i);
            0 < d.G && (b.line_drop_shadow = i);
            32 <= d.width && (b.line_wide = i, 0 < d.F && (b.line_wide_gradient = i))
        }
        return b
    };

var C3 = function (a) {
    this.F = a;
    this.D = [];
    this.C = 0
};

C3.prototype.get = function () {
    this.C == this.D.length && this.D.push(new this.F);
    return this.D[this.C++]
};

var rYa = function (a, b) {
    this.C = (this.I = a) ? pYa(a) : new A3;
    this.G = this.D = k;
    this.id = b;
    this.F = 500
};

var D3 = function (a) {
    this.C = {};

    this.N = a;
    this.M = new C3(A3)
};

B(D3, u3);
D3.prototype.F = da();
var sYa = function (a) {
    return 0.75 <= a ? 1 : mWa(a / 0.75)
};

D3.prototype.I = sYa;
D3.prototype.L = sYa;
D3.prototype.K = sYa;
var tYa = function (a, b) {
    for (var c = b.C.length - a.C.length - 1; 0 <= c; --c) {
        var d;
        d = new w3;
        gYa(d, b.C[c]);
        d.C = d.C & 16777215;
        a.C.unshift(d)
    }
    for (c = a.D.length; c < b.D.length; ++c) a.D.push(new y3), a.D[c].C = b.D[c].C & 16777215;
    b.rd && !a.rd && (a.rd = new z3, a.rd.fillStyle.C = b.rd.fillStyle.C & 16777215, a.rd.strokeStyle.width = 0, a.rd.strokeStyle.C = b.rd.strokeStyle.C & 16777215);
    b.ef && !a.ef && (a.ef = new w3, a.ef.width = 0, a.ef.C = b.ef.C & 16777215)
};

v = D3.prototype;
v.TN = function (a, b) {
    return !this.C[a] ? l : !y(b) ? i : qYa(this.C[a].I, b)
};

v.u0 = function (a, b, c, d) {
    if (!this.TN(a, c)) {
        c = new rYa(c, a);
        this.C[a] = c;
        c.G = d;
        if (b) {
            c.D = this.M.get();
            oYa(c.D, b);
            a = c.D;
            d = c.C;
            tYa(a, d);
            tYa(d, a);
            for (b = 0; b < a.C.length; b++) {
                var e = d.C[b].D;
                a.C[b].D = e ? e.slice(0) : k
            }
        } else b = c.C, e = new A3, tYa(e, b), e.xd.Bi = b.xd.Bi, e.xd.C = b.xd.C & 16777215, e.F.C = b.F.C & 16777215, c.D = e, d(a, c.D);
        if (!this.N) {
            for (a = 0; a < c.D.C.length; ++a) c.D.C[a].width = c.C.C[a].width;
            c.D.ef && (c.D.ef.width = c.C.ef.width);
            c.D.rd && (c.D.rd.strokeStyle.width = c.C.rd.strokeStyle.width)
        }
        this.D || (this.D = setTimeout(A(this.fW, this), 0), this.G = za())
    }
};

v.fW = function () {
    this.D = k;
    var a = l,
        b = za() - this.G;
    this.G += b;
    for (var c in this.C) {
        var d = this.C[c];
        if (d) if (d.F <= b) uYa(this, c);
        else {
            a = i;
            d.F -= b;
            var e = pYa(d.D);
            this.wW(d, e);
            var f = d,
                g = e,
                j = this.F(1 - f.F / 500);
            g.xd.C = v3(g.xd.C, f.C.xd.C, j);
            g.F.C = v3(g.F.C, f.C.F.C, j);
            g.rd && (x3(g.rd.strokeStyle, f.C.rd.strokeStyle, j), g.rd.fillStyle.C = v3(g.rd.fillStyle.C, f.C.rd.fillStyle.C, j));
            for (var f = d, g = e, j = this.L(1 - f.F / 500), m = 0; m < g.D.length; ++m) g.D[m].C = v3(g.D[m].C, f.C.D[m].C, j), g.D[m].D = f.C.D[m].D, g.D[m].F = f.C.D[m].F;
            f = d;
            g = e;
            j = this.K(1 - f.F / 500);
            g.ef && x3(g.ef, f.C.ef, j);
            d.G(c, e)
        }
    }
    a && (this.D = setTimeout(A(this.fW, this), 25))
};

v.wW = function (a, b) {
    for (var c = this.I(1 - a.F / 500), d = 0; d < b.C.length; ++d) x3(b.C[d], a.C.C[d], c)
};

v.tU = function () {
    this.M.C = 0;
    this.C = {}
};

v.stop = function () {
    if (this.D) {
        clearTimeout(this.D);
        this.D = k;
        for (var a in this.C) uYa(this, a)
    }
};

var uYa = function (a, b) {
    var c = a.C[b];
    c && (delete a.C[b], c.G(b, c.I))
};

var E3 = function (a) {
    D3.call(this, a)
};

B(E3, D3);
E3.prototype.F = u(1);
E3.prototype.wW = function (a, b) {
    var c = this.I(1 - a.F / 500);
    b.C[1] ? (b.C[0].width = b.C[1].width + c * (a.C.C[0].width - b.C[1].width), b.C[0].C = v3(b.C[1].C, a.C.C[0].C, c), b.C[1].width = c * a.C.C[1].width, b.C[1].C = a.C.C[1].C) : b.C[0] && x3(b.C[0], a.C.C[0], c)
};

var vYa = function (a) {
    D3.call(this, a)
};

B(vYa, D3);
vYa.prototype.F = u(1);
var wYa = function (a) {
    D3.call(this, a)
};

B(wYa, D3);
wYa.prototype.F = u(1);
var F3 = function (a) {
    D3.call(this, a)
};

B(F3, D3);
var xYa = 1 / 3,
    yYa = function (a) {
        a = Math.max(a - xYa, 0);
        return mWa(1.5 * a)
    };

F3.prototype.I = yYa;
F3.prototype.F = function (a) {
    return mWa(Math.min(1.5 * a, 1))
};

F3.prototype.L = yYa;
F3.prototype.K = yYa;
var G3 = function (a) {
    this.D = new D3(a);
    this.F = new E3(a);
    this.G = new vYa(a);
    this.I = new wYa(a);
    this.K = new F3(a)
};

G3.prototype.C = function (a, b) {
    return "satellite" == a && "terrain" == b || "terrain" == a && "satellite" == b ? this.F : "satellite" == a && "transit_layer" == b || "transit_layer" == a && "satellite" == b ? this.G : "" == a && "satellite" == b || "satellite" == a && "" == b ? this.I : "none" == a ? this.K : this.D
};

G3.prototype.stop = function () {
    this.F.stop();
    this.G.stop();
    this.I.stop();
    this.K.stop();
    this.D.stop()
};

var zYa = function () {
    G3.call(this, l);
    this.L = new u3
};

B(zYa, G3);
zYa.prototype.C = r("L");
var H3 = function (a, b, c) {
    this.F = a;
    this.X = b;
    this.Q = c;
    this.U = new zYa;
    this.G = c;
    this.I = this.G.C("", "");
    this.C = [];
    this.L = {};

    this.D = new w2;
    this.K = {};

    a = A(this.V, this);
    aB(this.F, "StyleLoad", a);
    this.M = i;
    this.P = A(this.N, this);
    this.Y = this.Tp = new N0(h, 0)
};

B(H3, iB);
var J3 = function (a, b) {
    if (a.L[b] === h) {
        a.L[b] = a.C.length;
        a.C.push(b);
        var c = I3(a.F, a.D, b);
        c && a.P(b, c);
        a.dispatchEvent(new AYa(b))
    }
    return a.L[b]
},
    K3 = function (a, b, c) {
        return !a.K[b] && !c ? I3(a.F, a.D, b) : a.K[b] || k
    },
    BYa = function (a, b) {
        b || a.G.stop();
        a.G = b ? a.Q : a.U;
        a.I = a.G.C("", "")
    },
    CYa = function (a, b, c) {
        a.I.u0(b, a.K[b] || k, c, a.P)
    };

H3.prototype.V = function (a) {
    if (a.C == k || a.C == x2(this.D)) y(this.L[a.id]) && !qYa(a.style, this.K[a.id]) && (this.M || this.I.TN(a.id) ? CYa(this, a.id, a.style) : this.N(a.id, a.style))
};

H3.prototype.N = function (a, b) {
    y(b) && (this.K[a] = b);
    this.Tp.set(za());
    this.dispatchEvent(new AYa(a))
};

var AYa = function (a) {
    NA.call(this, "styleUpdate");
    this.id = a
};

B(AYa, NA);
var DYa = function () {
    this.F = this.D = this.height = this.width = this.Dc = this.De = this.zoom = this.lng = this.lat = 0;
    this.C = this.L = 1;
    this.K = this.I = this.G = 0
};

var EYa = [0.2, 0.2, 0.2, 1],
    FYa = [242 / 255, 239 / 255, 233 / 255, 1],
    GYa = [0, 0, 0, 1],
    HYa = [0, 0, 0, 0],
    IYa = function (a, b) {
        return 0 <= a.indexOf(3) ? HYa : 0 <= a.indexOf(0) ? 0 <= b.indexOf(1) || 0 <= b.indexOf(5) ? EYa : FYa : GYa
    };

var JYa = function (a, b, c, d) {
    this.F = a;
    this.D = b;
    this.size = c;
    this.C = k;
    this.next = d
},
    L3 = function () {
        this.K = this.D = this.I = 0;
        this.G = this.C = k;
        this.F = {}
    };

L3.prototype.add = function (a, b) {
    if (a > this.I) return -1;
    var c = this.K++,
        d = new JYa(c, b, a, this.C);
    this.F[c] = d;
    this.C && (this.C.C = d);
    this.C = d;
    this.D += a;
    this.G == k && (this.G = d);
    KYa(this);
    return c
};

var KYa = function (a) {
    for (; a.D > a.I;) {
        var b = a.G;
        b.D && b.D(b.F);
        a.remove(b.F)
    }
};

v = L3.prototype;
v.wb = function (a) {
    if ((a = this.F[a]) && a.C)(a.C.next = a.next) ? a.next.C = a.C : this.G = a.C, a.C = k, a.next = this.C, this.C = this.C.C = a
};

v.remove = function (a) {
    var b = this.F[a];
    b && (b.C ? b.C.next = b.next : this.C = b.next, b.next ? b.next.C = b.C : this.G = b.C, b.C = b.next = k, delete this.F[a], this.D -= b.size)
};

v.Se = function (a, b) {
    var c = this.F[a];
    if (!c) return l;
    if (b > this.I) return c.D && c.D(a), this.remove(a), l;
    this.D -= c.size;
    c.size = b;
    this.D += c.size;
    KYa(this);
    return a in this.F
};

v.contains = function (a) {
    return a in this.F
};

v.clear = function () {
    for (var a = this.C; a; a = a.next) a.D && a.D(a.F);
    this.G = this.C = k;
    this.F = [];
    this.D = 0
};

var LYa = function (a, b) {
    var c = "";
    b & 2 && (c += "italic ");
    b & 1 && (c += "bold ");
    return c = c + (a + "px ") + "arial,sans-serif"
};

var MYa = function () {
    this.D = 0;
    this.C = new Float32Array(0)
},
    NYa = function (a, b, c) {
        a.C.length < b && (a.C = new Float32Array(b));
        a.D = b;
        for (var a = a.C, d = c[0], e = c[1], f = a[0] = 0, g = 1; g < b; g++) {
            var j = 2 * g,
                m = c[j],
                j = c[j + 1],
                d = d - m,
                e = e - j,
                f = f + Math.sqrt(d * d + e * e);
            a[g] = f;
            d = m;
            e = j
        }
    },
    M3 = function (a, b) {
        for (var c = 0, d = a.D - 1; 1 < d - c;) {
            var e = Math.floor((c + d) / 2);
            b > a.C[e] ? c = e : d = e
        }
        return c + (b - a.C[c]) / (a.C[d] - a.C[c])
    };

MYa.prototype.Ef = r("D");
var N3 = function (a, b, c) {
    var c = c || 0,
        d = a.Mm(b);
    this.C = a.Ar(b);
    for (var a = 2, b = this.C[0], e = this.C[1], d = d - 1, f = 1; f < d; ++f) {
        var g = this.C[2 * f],
            j = this.C[2 * f + 1],
            m = g - b,
            n = j - e;
        m * m + n * n >= c && (this.C[a] = g, this.C[a + 1] = j, a += 2, b = g, e = j)
    }
    this.C[a] = this.C[2 * d];
    this.C[a + 1] = this.C[2 * d + 1];
    this.C = new Float32Array(this.C.buffer || this.C, 0, a + 2);
    this.F = this.C.length / 2;
    this.D = new Float32Array(2 * this.F);
    this.G = new Float32Array(this.F);
    OYa(this);
    this.Iy = k;
    this.altitude = 0
},
    OYa = function (a) {
        var b = 0;
        a.G[0] = 0;
        for (var c = 2; c < 2 * a.F; c += 2) {
            var d = a.C[c] - a.C[c - 2],
                e = a.C[c + 1] - a.C[c - 1],
                b = b + Math.sqrt(d * d + e * e);
            a.G[c / 2] = b
        }
    },
    PYa = function (a, b, c, d) {
        b.C(a.F, a.C, a.D, c, d, a.altitude)
    };

N3.prototype.he = r("D");
N3.prototype.Ef = r("F");
var QYa = function (a, b) {
    var c = Math.floor(b),
        d = Math.ceil(b),
        e = b - c;
    return (1 - e) * a.G[c] + e * a.G[d]
};

N3.prototype.Ic = function (a) {
    var b = Math.floor(a),
        c = Math.ceil(a),
        a = a - b;
    return (1 - a) * this.D[2 * b] + a * this.D[2 * c]
};

N3.prototype.Nc = function (a) {
    var b = Math.floor(a),
        c = Math.ceil(a),
        a = a - b;
    return (1 - a) * this.D[2 * b + 1] + a * this.D[2 * c + 1]
};

var O3 = function (a, b) {
    var c = Math.floor(b),
        d = Math.ceil(b),
        e = b - c;
    return (1 - e) * a.C[2 * c] + e * a.C[2 * d]
},
    P3 = function (a, b) {
        var c = Math.floor(b),
            d = Math.ceil(b),
            e = b - c;
        return (1 - e) * a.C[2 * c + 1] + e * a.C[2 * d + 1]
    };

var Q3 = function () {
    JB.call(this, 0, 0, 0, 0);
    this.Q = this.V = this.X = this.U = this.P = this.G = this.F = this.N = this.L = this.M = this.K = this.D = this.C = 0;
    this.I = l;
    this.data = k
};

B(Q3, JB);
var R3 = function (a, b, c, d, e, f, g) {
    a.data = g || k;
    var g = d - b,
        j = e - c,
        m = Math.sqrt(g * g + j * j),
        n;
    0 < m ? (n = f * -j / (2 * m), f = f * g / (2 * m)) : (n = f / 2, f /= 2);
    a.C = b + n;
    a.D = c + f;
    a.K = b - n;
    a.M = c - f;
    a.L = d + n;
    a.N = e + f;
    a.F = d - n;
    a.G = e - f;
    n = 0 < n ? n : -n;
    f = 0 < f ? f : -f;
    b < d ? (a.left = b - n, a.right = d + n) : (a.left = d - n, a.right = b + n);
    c < e ? (a.top = c - f, a.bottom = e + f) : (a.top = e - f, a.bottom = c + f);
    0 != g && 0 != j ? (a.I = i, j /= g, a.P = j, c = b = a.C + j * a.D, e = d = a.D - j * a.C, g = a.F + j * a.G, j = a.G - j * a.F, g < b && (b = g), g > c && (c = g), j < d && (d = j), j > e && (e = j), a.U = b, a.V = c, a.X = d, a.Q = e) : a.I = l
},
    SYa = function (a, b, c) {
        return !(a.left <= b.right + c && b.left <= a.right + c && a.top <= b.bottom + c && b.top <= a.bottom + c) || a.I && !RYa(a, b, c) || b.I && !RYa(b, a, c) ? l : i
    },
    RYa = function (a, b, c) {
        var d = a.P,
            c = c * Math.sqrt(d * d + 1),
            e = b.C + d * b.D,
            f = b.D - d * b.C,
            g = b.K + d * b.M,
            j = b.M - d * b.K,
            m = b.L + d * b.N,
            n = b.N - d * b.L,
            p = b.F + d * b.G,
            d = b.G - d * b.F,
            b = Math.min(e, g, m, p),
            e = Math.max(e, g, m, p),
            g = Math.min(f, j, n, d),
            f = Math.max(f, j, n, d);
        return a.U <= e + c && b <= a.V + c && a.X <= f + c && g <= a.Q + c
    };

var T3 = function (a, b, c, d) {
    S3 || (S3 = new Q3);
    b = y(b) ? b : 5;
    this.Q = c || 10;
    this.L = d || new C3(Q3);
    this.F = (a.left + a.right) / 2;
    this.D = (a.top + a.bottom) / 2;
    this.C = a;
    this.K = this.I = this.P = this.M = k;
    this.N = l;
    this.U = [];
    this.G = 0;
    0 < b && (a = b - 1, this.M = new T3(new JB(this.C.top, this.F, this.D, this.C.left), a, this.Q, this.L), this.I = new T3(new JB(this.D, this.F, this.C.bottom, this.C.left), a, this.Q, this.L), this.P = new T3(new JB(this.C.top, this.C.right, this.D, this.F), a, this.Q, this.L), this.K = new T3(new JB(this.D, this.C.right, this.C.bottom, this.F), a, this.Q, this.L))
};

T3.prototype.reset = function (a, b, c, d) {
    U3(this, a, b, c, d);
    this.L.C = 0
};

var U3 = function (a, b, c, d, e) {
    if (a.C.top != b || a.C.bottom != d || a.C.left != e || a.C.right != c) a.C.top = b, a.C.right = c, a.C.bottom = d, a.C.left = e, a.F = (e + c) / 2, a.D = (b + d) / 2;
    a.G = 0;
    a.N = l
},
    V3 = function (a, b) {
        if (!z0(b, a.C)) return l;
        if (a.M && (a.N || a.G > a.Q)) {
            if (!a.N) {
                U3(a.M, a.C.top, a.F, a.D, a.C.left);
                U3(a.P, a.C.top, a.C.right, a.D, a.F);
                U3(a.I, a.D, a.F, a.C.bottom, a.C.left);
                U3(a.K, a.D, a.C.right, a.C.bottom, a.F);
                a.N = i;
                for (var c = a.G, d = a.G = 0; d < c; ++d) TYa(a, a.U[d])
            }
            TYa(a, b)
        } else a.U[a.G++] = b;
        return i
    },
    TYa = function (a, b) {
        if (b.left <= a.F) {
            if (b.right < a.F) if (b.top <= a.D) {
                if (b.bottom < a.D) {
                    V3(a.M, b);
                    return
                }
            } else {
                V3(a.I, b);
                return
            }
        } else if (b.top <= a.D) {
            if (b.bottom < a.D) {
                V3(a.P, b);
                return
            }
        } else {
            V3(a.K, b);
            return
        }
        a.U[a.G++] = b
    },
    S3 = k,
    W3 = function (a, b, c) {
        c = c || 0;
        if (!xVa(b, a.C, c)) return l;
        for (var d = 0; d < a.G; ++d) if (SYa(b, a.U[d], c)) return i;
        if (!a.N) return l;
        if (b.left - c <= a.F) if (b.right + c >= a.F) if (b.top - c <= a.D) {
            if (W3(a.M, b, c) || W3(a.P, b, c) || b.bottom + c >= a.D && (W3(a.I, b, c) || W3(a.K, b, c))) return i
        } else {
            if (W3(a.I, b, c) || W3(a.K, b, c)) return i
        } else if (b.top - c <= a.D) {
            if (W3(a.M, b, c) || b.bottom + c >= a.D && W3(a.I, b, c)) return i
        } else {
            if (W3(a.I, b, c)) return i
        } else if (b.top - c <= a.D) {
            if (W3(a.P, b, c) || b.bottom + c >= a.D && W3(a.K, b, c)) return i
        } else if (W3(a.K, b, c)) return i;
        return l
    },
    X3 = function (a, b, c, d) {
        if (xVa(b, a.C, c)) {
            for (var e = 0; e < a.G; ++e) {
                var f = a.U[e];
                f.data && SYa(b, f, c) && d.push(f.data)
            }
            a.N && (X3(a.M, b, c, d), X3(a.P, b, c, d), X3(a.I, b, c, d), X3(a.K, b, c, d))
        }
    };

var Y3 = function (a, b) {
    this.Sy = a;
    this.Ty = b;
    this.Mv = this.Lv = this.altitude = 0;
    this.screenX = a;
    this.screenY = b
},
    UYa = new Float32Array(2),
    VYa = new Float32Array(2);
Y3.prototype.transform = function (a, b, c, d) {
    UYa[0] = this.Sy;
    UYa[1] = this.Ty;
    a.C(1, UYa, VYa, b, c, this.altitude);
    this.screenX = VYa[0];
    this.screenY = VYa[1];
    if (0 != this.Lv || 0 != this.Mv) a = Math.cos(d), d = Math.sin(d), this.screenX += this.Lv * a + this.Mv * d, this.screenY += -this.Lv * d + this.Mv * a
};

var WYa = function (a, b) {
    this.type = b;
    this.Ed = a;
    this.Kv = l;
    this.fd = this.gg = this.group = 0;
    this.gi = k;
    this.Qg = l;
    this.sN = 0;
    this.Jv = l;
    this.C = this.D = 0;
    this.K = l;
    this.labels = k;
    this.F = -1;
    this.Wd = k;
    this.M = l;
    this.L = k;
    this.P = this.G = this.I = this.Jd = l;
    this.Pk = this.pH = this.shift = 0;
    this.N = -1
},
    XYa = function (a) {
        a.sN = 32 * (a.group % 1024 + 1024 * (a.N + 4096 * 64 * (1024 - Math.floor(10 * a.gg) + 1024 * (a.Qg ? 1 : 0))))
    },
    Z3 = function (a, b) {
        a.K = b;
        if (a.labels) for (var c = 0; c < a.labels.length; ++c) Z3(a.labels[c], b)
    };

WYa.prototype.tc = function (a, b, c) {
    var d = 0,
        e = 0,
        f = this.labels;
    if (f) for (var g = this.F, j = 0; j < f.length; ++j) d = f[j].tc(a && (-1 == g || g == j), b, c), d > e && (e = d);
    this.Jv != a && (c ? this.D = b - $3 : (c = this.D + $3 - b, this.D = 0 < c ? b - c : b), this.Jv = a, d = this.D + $3 - b, d > e && (e = d));
    return e
};

var YYa = function (a, b) {
    var c = a.labels;
    if (c) for (var d = 0; d < c.length; ++d) YYa(c[d], b);
    a.Jv && 1 > a.C ? (a.C = 0 < $3 ? (b - a.D) / $3 : 1, 1 < a.C && (a.C = 1), a.Jd = i) : !a.Jv && 0 < a.C && (a.C = 0 < $3 ? 1 - (b - a.D) / $3 : 0, 0 > a.C && (a.C = 0), a.Jd = i);
    a.Jd && a.L && (a.L(a), a.Jd = l)
},
    ZYa = function (a, b) {
        a.Wd = b;
        if (a.labels) for (var c = 0; c < a.labels.length; ++c) ZYa(a.labels[c], b)
    },
    $Ya = function (a, b) {
        a.M = b;
        if (a.labels) for (var c = 0; c < a.labels.length; ++c) $Ya(a.labels[c], b)
    },
    aZa = function (a, b) {
        b != a.I && (a.I = b, a.Jd = i)
    },
    a4 = function (a, b) {
        a.labels || (a.labels = []);
        a.labels.push(b);
        b.fd = a.fd;
        b.group = a.group;
        b.gg = a.gg;
        b.Qg = a.Qg
    },
    $3 = 250,
    b4 = function (a) {
        this.base = new WYa(this, a)
    };

var c4 = function (a, b) {
    this.x = a;
    this.y = b
};

B(c4, Cw);
c4.prototype.clone = function () {
    return new c4(this.x, this.y)
};

c4.prototype.scale = function (a) {
    this.x *= a;
    this.y *= a;
    return this
};

c4.prototype.add = function (a) {
    this.x += a.x;
    this.y += a.y;
    return this
};

c4.prototype.equals = function (a) {
    return this == a || !! a && this.x == a.x && this.y == a.y
};

var bZa = function (a, b, c) {
    this.C = a;
    this.vertical = b;
    this.D = c
};

var d4 = function (a) {
    b4.call(this, a);
    this.C = k;
    this.F = this.D = 0
};

B(d4, b4);
d4.prototype.mq = function (a) {
    for (var b = S3, c = this.I(), d = Math.min(this.D, this.F), e = Math.max(this.D, this.F), f = l; d < e; d = Math.floor(d + 1)) {
        var g = Math.min(Math.floor(d + 1), e),
            j = this.C.Ic(d),
            m = this.C.Nc(d),
            n = this.C.Ic(g),
            g = this.C.Nc(g),
            p = this.base.shift,
            q = this.base.pH;
        if (p || q) var s = n - j,
            t = g - m,
            x = Math.sqrt(s * s + t * t),
            D = -t / x,
            I = s / x,
            s = s / x,
            t = t / x,
            j = j + (D * p + s * q),
            m = m + (I * p + t * q),
            n = n + (D * p + s * q),
            g = g + (I * p + t * q);
        R3(b, j, m, n, g, c);
        j = p ? 0 : 2;
        f = f || z0(b, a.C);
        if (W3(a, b, j)) return i
    }
    return !f
};

d4.prototype.oq = function (a) {
    for (var b = i, c = this.I(), d = Math.min(this.D, this.F), e = Math.max(this.D, this.F); d < e; d = Math.floor(d + 1)) {
        var f = Math.min(Math.floor(d + 1), e),
            g = this.C.Ic(d),
            j = this.C.Nc(d),
            m = this.C.Ic(f),
            f = this.C.Nc(f),
            n = this.base.shift || 0,
            p = this.base.pH || 0;
        if (n || p) var q = m - g,
            s = f - j,
            t = Math.sqrt(q * q + s * s),
            x = -s / t,
            D = q / t,
            q = q / t,
            s = s / t,
            g = g + (x * n + q * p),
            j = j + (D * n + s * p),
            m = m + (x * n + q * p),
            f = f + (D * n + s * p);
        n = a;
        p = c;
        x = this.base;
        D = a.L.get();
        R3(D, g, j, m, f, p, x);
        b = V3(n, D) && b
    }
    return b
};

var e4 = function () {
    d4.call(this, 0);
    this.M = this.L = this.Q = this.P = 0
};

B(e4, d4);
e4.prototype.I = u(10);
e4.prototype.G = function (a) {
    var b = this.base;
    b.Pk = a.C++;
    a.xy.push(b)
};

var f4 = function () {
    d4.call(this, 1);
    this.K = k;
    this.text = "";
    this.lk = this.fontSize = 0;
    this.GN = this.N = l
};

B(f4, d4);
f4.prototype.I = function () {
    return this.K.height
};

f4.prototype.G = function (a) {
    var b = this.base;
    b.Pk = a.C++;
    a.ir.push(b)
};

var g4 = function (a) {
    b4.call(this, a);
    this.height = this.width = this.I = this.Vg = this.zn = this.cf = 0
};

B(g4, b4);
g4.prototype.mq = function (a) {
    var b = S3,
        c = this.base.Wd;
    R3(b, c.screenX + this.cf, c.screenY + this.Vg, c.screenX + this.zn, c.screenY + this.I, this.height);
    return !z0(b, a.C) || W3(a, b, 2)
};

g4.prototype.oq = function (a) {
    var b = this.base.Wd,
        c = b.screenX + this.cf,
        d = b.screenY + this.Vg,
        e = b.screenX + this.zn,
        b = b.screenY + this.I,
        f = this.height,
        g = this.base,
        j = a.L.get();
    R3(j, c, d, e, b, f, g);
    return V3(a, j)
};

var h4 = function (a) {
    g4.call(this, a);
    this.iconUrl = "";
    this.K = l;
    this.iconSize = this.L = h
};

B(h4, g4);
h4.prototype.G = function (a) {
    var b = this.base;
    b.Pk = a.C++;
    a.fv.push(b);
    b.Ed.K && (a.M = i)
};

var cZa = function () {
    h4.call(this, 3)
};

B(cZa, h4);
var dZa = function () {
    h4.call(this, 4)
};

B(dZa, h4);
var eZa = function () {
    g4.call(this, 2);
    this.K = k
};

B(eZa, g4);
eZa.prototype.G = function (a) {
    var b = this.base;
    b.Pk = a.C++;
    a.jt.push(b)
};

var i4 = function () {
    g4.call(this, 5);
    this.K = 0
};

B(i4, g4);
i4.prototype.G = function (a) {
    var b = this.base;
    b.Pk = a.C++;
    a.vy.push(b);
    this.base.labels && this.base.labels[0].Ed.G(a)
};

i4.prototype.mq = function (a) {
    a = i4.ia.mq.call(this, a);
    if (!a && this.base.labels) {
        var b = this.base.labels[0].Ed;
        b.cf = this.cf + (this.width - b.width) / 2;
        b.Vg = this.Vg
    }
    return a
};

var j4 = function () {
    b4.call(this, 6);
    this.base.labels = []
};

B(j4, b4);
j4.prototype.G = function (a) {
    for (var b = this.base.labels, c = 0; c < b.length; ++c) b[c].Ed.G(a)
};

j4.prototype.mq = function (a) {
    for (var b = this.base.labels, c = 0; c < b.length; ++c) if (b[c].Ed.mq(a)) return i;
    return l
};

j4.prototype.oq = function (a) {
    for (var b = i, c = this.base.labels, d = 0; d < c.length; ++d) b = c[d].Ed.oq(a) && b;
    return b
};

var k4 = function () {
    j4.call(this);
    this.base.type = 7;
    this.base.F = 0
};

B(k4, j4);
k4.prototype.mq = function (a) {
    for (var b = this.base.labels, c = this.base.F, d = c; d < c + b.length; ++d) {
        var e = d % b.length;
        if (!b[e].Ed.mq(a)) return this.base.F = e, l
    }
    this.base.F = 0;
    return i
};

k4.prototype.oq = function (a) {
    var b = this.base.labels;
    return b && 0 < b.length ? b[this.base.F].Ed.oq(a) : l
};

var l4 = function () {
    b4.call(this, 8);
    this.xe = [];
    this.I = [];
    this.K = -1
};

B(l4, b4);
l4.prototype.G = function (a) {
    for (var b = 0; b < this.xe.length; ++b) for (var c = 0; c < this.xe[b].length; ++c) this.xe[b][c].G(a)
};

l4.prototype.mq = function (a) {
    if (0 <= this.K && fZa(this, this.I[this.K], a)) return l;
    for (var b = 0; b < this.I.length; ++b) if (b != this.K && fZa(this, this.I[b], a)) {
        this.K = b;
        for (a = 0; a < this.xe.length; ++a) for (b = 0; b < this.xe[a].length; ++b) this.xe[a][b].base.Jd = i;
        return l
    }
    return i
};

var fZa = function (a, b, c) {
    for (var d = 0; d < a.xe.length; ++d) for (var e = 0; e < a.xe[d].length; ++e) {
        var f = a.xe[d][e];
        f.cf = b[d][2 * e];
        f.Vg = b[d][2 * e + 1];
        f.zn = f.cf + f.width;
        f.I = f.Vg;
        if (f.mq(c)) return l
    }
    return i
};

l4.prototype.oq = function (a) {
    for (var b = 0; b < this.xe.length; ++b) for (var c = 0; c < this.xe[b].length; ++c) if (!this.xe[b][c].oq(a)) return l;
    return i
};

var gZa = function (a, b, c, d) {
    this.type = a;
    this.text = 2 == a ? b : k;
    this.D = this.C = c || 0;
    this.Qg = !! d
};

var hZa = function (a) {
    this.D = a;
    this.C = 0
},
    iZa = Math.cos(0.25 * Math.PI),
    jZa = new JB(0, 0, 0, 0),
    kZa = [],
    lZa = function (a, b, c, d) {
        this.D = this.C = 0;
        this.G = [];
        this.F = [];
        this.Ie(a, b, c, d)
    };

lZa.prototype.Ie = function (a, b, c, d) {
    for (var e = 0, f = 0, g = 0, j = 0, m = 0; m < a.length; ++m) {
        var n = d.cP(d.Hp(d.yo(b), c), m) || m == a.length - 1,
            p = new mZa;
        p.C = j;
        p.D = f;
        this.F.push(p);
        e = Math.max(e, a[m].height);
        f += a[m].width;
        n || (f += 2);
        n && (n = new nZa, n.lineHeight = e, n.lineWidth = f, n.C = g, this.G.push(n), this.D += e, this.C = Math.max(this.C, f), g = this.D, f = e = 0, j += 1)
    }
};

var nZa = function () {
    this.C = this.lineHeight = this.lineWidth = 0
},
    mZa = function () {
        this.D = this.C = 0
    },
    oZa = function (a, b, c, d, e) {
        var f;
        switch (b.vertical) {
        case 2:
            f = 0;
            break;
        case 3:
            f = 1;
            break;
        default:
            f = 0.5
        }
        for (var g = 0; g < d.length; ++g) {
            var j = e.G[e.F[g].C];
            a[2 * g + 1] = j.C + (j.lineHeight - d[g].height) * f + d[g].height / 2
        }
        switch (b.D) {
        case 2:
            f = 0;
            break;
        case 3:
            f = 1;
            break;
        default:
            f = 0.5
        }
        for (g = 0; g < d.length; ++g) j = e.F[g], a[2 * g] = j.D + (e.C - e.G[j.C].lineWidth) * f;
        switch (b.C) {
        case 7:
        case 11:
        case 15:
            d = c.right + 2;
            break;
        case 6:
        case 10:
        case 14:
            d = c.left - e.C - 2;
            break;
        default:
            d = e.C / -2
        }
        if (9 == b.C || 13 == b.C) f = (c.right - c.left) / 2, 2 == b.D ? d = c.left - f : 3 == b.D && (d = c.right + f - e.C);
        switch (b.C) {
        case 9:
        case 10:
        case 11:
            c = c.top - e.D;
            break;
        case 13:
        case 15:
        case 14:
            c = c.bottom;
            break;
        default:
            c = e.D / -2 + (c.top + c.bottom) / 2
        }
        b = d;
        for (e = 0; e < a.length - 1; e += 2) a[e] += b, a[e + 1] += c
    },
    sZa = function (a, b, c, d, e, f, g, j, m, n, p, q, s, t, x, D) {
        if (!(p >= 1 * b.Iy.length)) {
            var I = b.Iy[p % b.Iy.length],
                K = n - m,
                J = 0,
                M = s.C;
            switch (I.type) {
            case 0:
                var Q = 0.1 * -p;
                if (!(13 > K)) {
                    var aa = m + K / 2,
                        J = M3(c, aa - 6.5),
                        ba = M3(c, aa),
                        aa = M3(c, aa + 6.5);
                    if (4 != f.hc() || pZa(f, b, J, aa)) {
                        var Q = f.Jo(g) + Q,
                            ia = f.Qf(g),
                            ha = new e4;
                        ha.C = b;
                        ha.D = J;
                        ha.F = aa;
                        var xa = O3(b, ba),
                            ba = P3(b, ba);
                        ha.P = O3(b, J) - xa;
                        ha.Q = P3(b, J) - ba;
                        ha.L = O3(b, aa) - xa;
                        ha.M = P3(b, aa) - ba;
                        ha.gi = ia;
                        J = ha.base;
                        J.gg = Q;
                        J.fd = g;
                        J.Wd = new Y3(xa, ba);
                        J.Qg = l;
                        m4(s, J)
                    }
                }
                J = 13;
                break;
            case 1:
                var J = I.Qg,
                    ia = 0.1 * -p,
                    Aa = I.D,
                    Ra = f.Cn(g),
                    aa = f.tv(Ra, Aa);
                if (t[aa]) J = 0;
                else {
                    var Q = f.YG(Ra, Aa),
                        xa = f.Jy(Ra, Aa),
                        Ba = qZa(a, Q, xa, aa),
                        ba = Ba.width + Ba.height;
                    if (!(K < ba)) {
                        var kb = M3(c, m + K / 2);
                        if (4 != f.hc() || f.aq(O3(b, kb), P3(b, kb), ba)) {
                            t[aa] = i;
                            var ia = f.Jo(g) + ia,
                                ha = O3(b, kb),
                                kb = P3(b, kb),
                                oa = Ba.YM,
                                rb = f.yC(Ra, Aa),
                                Aa = f.ZG(Ra, Aa),
                                Ra = Ba.width,
                                Ba = Ba.height,
                                hb = new cZa;
                            hb.iconUrl = aa;
                            hb.K = oa;
                            hb.L = Q;
                            hb.iconSize = xa;
                            rb ? (hb.cf = -rb.x, hb.Vg = -rb.y) : (hb.cf = -Ra / 2, hb.Vg = 0);
                            rb && Aa && (hb.cf = -Ra - hb.cf);
                            hb.width = Ra;
                            hb.height = Ba;
                            hb.zn = hb.cf + hb.width;
                            hb.I = hb.Vg;
                            aa = hb.base;
                            aa.gg = ia;
                            aa.fd = g;
                            aa.Qg = J;
                            aa.Wd = new Y3(ha, kb);
                            m4(s, aa)
                        }
                    }
                    J = ba
                }
                break;
            case 2:
                if (J = I.Qg, ba = 0.1 * -p, aa = I.text, Q = I.C, xa = n4(j, g, Q)) if (K < xa.width) J = xa.width;
                else {
                    ha = ia = 0;
                    0 == e ? (ia = M3(c, m + (K - xa.width) / 2), ha = M3(c, m + (K + xa.width) / 2)) : (ia = M3(c, 0), ha = M3(c, xa.width));
                    Ba = Math.floor(ia);
                    kb = Math.ceil(ha);
                    if (oa = 1 < kb - Ba) b: {
                        oa = [];
                        rb = [];
                        oa[0] = new c4(b.Ic(Ba), b.Nc(Ba));
                        oa[1] = new c4(b.Ic(Ba + 1), b.Nc(Ba + 1));
                        rb[0] = new c4(0, 0);
                        rb[1] = new c4(oa[1].x - oa[0].x, oa[1].y - oa[0].y);
                        for (Ba += 2; Ba < kb + 1; ++Ba) if (oa[0].x = oa[1].x, oa[0].y = oa[1].y, oa[1].x = b.Ic(Ba), oa[1].y = b.Nc(Ba), rb[0].x = rb[1].x, rb[0].y = rb[1].y, rb[1].x = oa[1].x - oa[0].x, rb[1].y = oa[1].y - oa[0].y, (rb[0].x * rb[1].x + rb[0].y * rb[1].y) / (Math.sqrt(rb[0].x * rb[0].x + rb[0].y * rb[0].y) * Math.sqrt(rb[1].x * rb[1].x + rb[1].y * rb[1].y)) < iZa) {
                            oa = i;
                            break b
                        }
                        oa = l
                    }
                    oa ? J = 0 : ((4 != f.hc() || pZa(f, b, ia, ha)) && m4(s, rZa(f.Jo(g) + ba, g, J, b, ia, ha, d, e, xa, aa, j.G(g, Q), x, D)), J = xa.width)
                } else J = 0
            }!(2 == I.type && 1 == b.Iy.length && s.C > M) && !(J > K) && (p++, 0 == e && (e = q ? p + 1 : p, sZa(a, b, c, d, 0, f, g, j, (n + m + J) / 2 + 30, n, q ? p : p + 1, !q, s, t, x, D), sZa(a, b, c, d, 0, f, g, j, m, (n + m - J) / 2 - 30, e, q, s, t, x, D)))
        }
    },
    qZa = function (a, b, c, d) {
        var e = l;
        b ? (a = b.width, b = b.height) : c ? (a = c.width, b = c.height) : (b = a.D(d)) ? (a = b.width, b = b.height) : (e = i, b = a = 1);
        return {
            width: a,
            height: b,
            YM: e
        }
    },
    pZa = function (a, b, c, d) {
        var e = Math.ceil(c),
            f = Math.floor(d),
            g;
        if (d <= e) return o4(a, O3(b, c), P3(b, c), O3(b, d), P3(b, d));
        if (o4(a, O3(b, c), P3(b, c), c = O3(b, e), g = P3(b, e))) return i;
        for (; e < f; ++e) {
            var j = O3(b, e + 1),
                m = P3(b, e + 1);
            if (o4(a, c, g, j, m)) return i;
            c = j;
            g = m
        }
        return o4(a, c, g, O3(b, d), P3(b, d)) ? i : l
    },
    p4 = function (a, b, c, d, e, f, g, j, m, n, p) {
        var q = tZa(0, 0, l);
        a4(f, q);
        var c = c.St(d),
            s = 0;
        if (n) if (0.5 == g) s = b + m * j * n, b += 2 * m * j * (n + 1.5);
        else if (0 == j) {
            for (d = j = 0; d < c; ++d)(f = n4(e, p, d)) && (j += f.height);
            a += (1 - 2 * g) * (n + 1.5);
            b -= m * j / 2;
            j = 0.5;
            s = b - m * (n / 2 + 1.5)
        }
        for (var t = 0, d = 0; d < c; ++d) if (f = n4(e, p, 0 < m ? d : c - d - 1)) t = Math.max(t, f.width), b += m * j * f.height, a4(q, uZa(a - g * f.width, b, a + (1 - g) * f.width, b, f.height, f, "", 0, 0)), b += m * (1 - j) * f.height;
        n && vZa(a, s, a, b + m * (n / 2 + 1.5), g, t, n, q)
    },
    vZa = function (a, b, c, d, e, f, g, j) {
        var m = a - (e * f + g / 2 + 1.5),
            n = m,
            p = b,
            q = p,
            a = a + ((1 - e) * f + g / 2 + 1.5),
            m = Math.min(m, a),
            n = Math.max(n, a),
            p = Math.min(p, b),
            q = Math.max(q, b),
            a = c - (e * f + g / 2 + 1.5),
            m = Math.min(m, a),
            n = Math.max(n, a),
            p = Math.min(p, d),
            q = Math.max(q, d),
            a = c + ((1 - e) * f + g / 2 + 1.5),
            m = Math.min(m, a),
            n = Math.max(n, a),
            p = Math.min(p, d),
            q = Math.max(q, d),
            b = p,
            c = new i4;
        c.width = n - m;
        c.height = q - b;
        c.cf = m;
        c.zn = n;
        c.Vg = (b + q) / 2;
        c.I = c.Vg;
        c.K = g;
        a4(j, c.base)
    },
    wZa = function (a, b, c, d, e, f, g, j, m, n, p) {
        var q = new dZa;
        q.iconUrl = f;
        q.K = g;
        q.L = j;
        q.iconSize = m;
        q.cf = d;
        q.zn = d + n;
        q.Vg = e;
        q.I = e;
        q.width = n;
        q.height = p;
        d = q.base;
        d.gg = a;
        d.fd = b;
        d.Qg = c;
        return d
    },
    rZa = function (a, b, c, d, e, f, g, j, m, n, p, q, s) {
        var t = new f4;
        t.C = d;
        t.D = e;
        t.F = f;
        t.K = m;
        t.text = n;
        t.GN = l;
        t.fontSize = q;
        t.lk = s;
        d = t.base;
        d.gg = a;
        d.fd = b;
        d.Qg = c;
        d.shift = g;
        d.pH = j;
        d.P = p;
        return d
    },
    tZa = function (a, b, c) {
        var d = (new j4).base;
        d.gg = a;
        d.fd = b;
        d.Qg = c;
        return d
    },
    uZa = function (a, b, c, d, e, f, g, j, m) {
        var n = new eZa;
        n.cf = a;
        n.zn = c;
        n.Vg = b;
        n.I = d;
        n.height = e;
        n.K = f;
        n.text = g;
        n.fontSize = j;
        n.lk = m;
        return n.base
    };

var xZa = function () {
    this.tn = [];
    this.xy = [];
    this.dV = l;
    this.fv = [];
    this.jt = [];
    this.ir = [];
    this.vy = [];
    this.CV = this.ON = l;
    this.C = 0;
    this.K = this.M = l;
    this.N = za();
    this.yV = 0;
    this.F = this.I = k;
    this.G = this.D = l;
    this.L = 0
},
    m4 = function (a, b) {
        b.N = a.tn.length;
        a.tn.push(b);
        b.Ed.G(a)
    };

var yZa = function () {
    this.D = new T3(new JB(0, 0, 0, 0), 3, h, h);
    this.C = []
};

yZa.prototype.reset = function (a, b, c, d, e) {
    this.D.reset(a - 25, b + 25, c + 25, d - 25);
    this.C = e
};

var zZa = function (a, b, c) {
    var d = [],
        a = a.D,
        e = S3;
    R3(e, b - 0.1, c, b + 0.1, c, 0.2);
    X3(a, e, 1, d);
    b = [];
    for (c = 0; c < d.length; ++c) d[c] instanceof WYa && b.push(d[c]);
    b.sort(function (a, b) {
        return a.Qg == b.Qg ? a.gg - b.gg : a.Qg ? -1 : 1
    });
    return b
};

var q4 = function (a, b, c, d, e, f) {
    this.C = a;
    this.ba = b;
    this.Pc = c;
    this.X = new MYa;
    this.F = l;
    this.N = new hZa(A(this.Ka, this));
    this.D = new yZa;
    this.P = l;
    this.Y = -1;
    this.ca = l;
    this.Ba = 0;
    this.yb = e;
    this.Rb = f;
    this.ma = d;
    this.xa = {};

    this.U = [];
    this.Q = [];
    this.M = [];
    this.V = [];
    this.K = [];
    this.qa = new Float32Array(2)
};

q4.prototype.ha = function (a) {
    this.C.Lg.get() && AZa(this, a)
};

var AZa = function (a, b) {
    var c = b.data,
        d = b.C.qt;
    d || (d = new r4(a.Z, a.Ta, c), b.C.qt = d, b.C.ba = d);
    d.Eh() || s4(d);
    var e = b.C.iv;
    e || (e = new BZa(a.Z, c, a.Wb), b.C.iv = e, b.C.ca = e);
    e.Eh() || s4(e);
    var f = CZa(a, b),
        g = t4(a, b),
        j = b.C,
        m = b.data;
    if (!g || a.BV(g, b)) {
        var n = !! g,
            p = j.ba,
            q = j.ca,
            s = new xZa;
        s.G = m.jN();
        for (var t = a.ba.D, x = a.C.C.get(), D = m.Bl(), I = 0; I < D; ++I) {
            var K = m.Ar(m.oz(I), a.qa);
            if (!(0 > K[0] || K[0] > m.getWidth() || 0 > K[1] || K[1] > m.getHeight())) {
                var J = a.N,
                    M = I,
                    Q = new Cw(K[0], K[1]),
                    aa = m,
                    ba = q,
                    ia = s,
                    ha = x,
                    xa = t,
                    Aa = new l4,
                    Ra = Aa.base;
                Ra.fd = aa.wH(M);
                Ra.gg = aa.Jo(Ra.fd);
                for (var Ba = J, kb = M, oa = aa, rb = ba, hb = Aa, pb = ha, Oa = xa, Hb = hb.base, ib = oa.yo(kb), ec = oa.kr(ib), Ib = 0; Ib < ec; ++Ib) {
                    for (var yc = [], Wc = oa.Hp(ib, Ib), zc = oa.jr(Wc), Xb = yWa, Xc = 0; Xc < zc; ++Xc) {
                        var Ub = oa.Ny(Wc, Xc);
                        switch (Ub) {
                        case Xb.g7:
                            var de = oa.Oy(Wc, Xc),
                                kf = oa.xH(Wc, Xc),
                                sc = qZa(Ba, k, kf, de),
                                Rc = wZa(Hb.gg, Hb.fd, Hb.Qg, 0, 0, de, sc.YM, k, k, sc.width, sc.height);
                            yc.push(Rc.Ed);
                            a4(Hb, Rc);
                            break;
                        case Xb.zV:
                        case Xb.h7:
                            var ac, gb;
                            Ub == Xb.zV && (de = oa.Oy(Wc, Xc), ac = oa.nz(Wc, Xc), gb = oa.mz(Wc, Xc));
                            var xb, lf = rb,
                                mf = kb,
                                nf = Ib,
                                Yc = Xc;
                            lf.C.D || s4(lf);
                            xb = lf.mk[mf] && lf.mk[mf][nf] && lf.mk[mf][nf][Yc] || k;
                            var Pd = oa.ty(Wc, Xc),
                                pc = uZa(0, 0, 0, 0, xb.height, xb, de, ac, gb);
                            pc.gi = Pd;
                            pc.Ed.width = xb.width;
                            pc.fd = Hb.fd;
                            var Cd = I3(Oa, pb, Pd);
                            if (Cd && Cd.rd) {
                                var tc = new i4,
                                    Kc = Cd.rd.strokeStyle.width;
                                tc.width = xb.width + Kc + 3;
                                tc.height = xb.height + Kc + 3;
                                tc.K = Kc;
                                tc.base.gi = Pd;
                                tc.base.fd = Hb.fd;
                                a4(tc.base, pc);
                                yc.push(tc);
                                a4(Hb, tc.base)
                            } else yc.push(pc.Ed), a4(Hb, pc)
                        }
                    }
                    hb.xe.push(yc)
                }
                for (var xf = [], Dd = 0; Dd < Aa.xe.length; ++Dd) xf.push(new lZa(Aa.xe[Dd], M, Dd, aa));
                var Ud = Aa,
                    Sc = aa,
                    Vd = Aa,
                    Lc = Sc.yo(M),
                    qh = Sc.yH(Lc, 0),
                    Pf = Sc.AH(qh),
                    hg = Vd.xe[1];
                if (hg) var Je = Sc.yH(Lc, 1),
                    ig = Sc.AH(Je);
                for (var wa = [], Wd = 0; Wd < Pf; ++Wd) {
                    var Ke = new bZa(Sc.BH(qh, Wd), Sc.CH(qh, Wd), Sc.DH(qh, Wd));
                    if (hg) for (var Ed = 0; Ed < ig; ++Ed) wa.push([Ke, new bZa(Sc.BH(Je, Ed), Sc.CH(Je, Ed), Sc.DH(Je, Ed))]), Vd.I.push([
                        [],
                        []
                    ]);
                    else wa.push([Ke]), Vd.I.push([
                        []
                    ])
                }
                for (var oe = Ud, Qf = wa, Zc = xf, yf = oe.xe[0], of = oe.xe[1], rh = new JB(0, 0, 0, 0), Le = 0; Le < Qf.length; ++Le) {
                    var jg = oe.I[Le][0];
                    oZa(jg, Qf[Le][0], rh, yf, Zc[0]);
                    if (of) {
                        for (var pe = new JB(0, 0, 0, 0), kg = 0; kg < yf.length; ++kg) {
                            var Ce = yf[kg],
                                zf = jg[2 * kg + 1];
                            pe.left = Math.min(pe.left, jg[2 * kg]);
                            pe.top = Math.min(pe.top, zf - Ce.height / 2)
                        }
                        pe.right = pe.left + Zc[0].C;
                        pe.bottom = pe.top + Zc[0].D;
                        oZa(oe.I[Le][1], Qf[Le][1], pe, of, Zc[1])
                    }
                }
                var hd = new Y3(Q.x, Q.y),
                    Rf = aa.AV(M);
                Rf && (hd.Lv = Rf.x, hd.Mv = Rf.y);
                ZYa(Ra, hd);
                m4(ia, Ra)
            }
        }
        for (var af = a.F ? new DZa : new EZa, sh = m.rn(), Xd = {}, fc = 0; fc < sh; fc++) {
            var th = m.Ct(fc),
                pf = m.$j(fc),
                lg = m.Cn(pf),
                Vg = m.Qf(pf),
                id = I3(t, x, Vg),
                Nh = m.St(lg),
                Hc = m.Zp(lg);
            if (1 == m.Mm(th)) {
                if (Nh || Hc) {
                    var bf = m.Ar(th, a.qa);
                    if (!(0 > bf[0] || bf[0] > m.getWidth() || 0 > bf[1] || bf[1] > m.getHeight())) {
                        for (var Fg = a.N, Oh = new Cw(bf[0], bf[1]), Af = m, Bf = pf, Ik = id, $o = q, wt = s, qi = Af.Cn(Bf), xt = Af.Zp(qi), Wl = l, yt = 0; yt < xt; ++yt) Wl = Wl || Af.zH(qi, yt);
                        for (var Wq = tZa(Af.Jo(Bf), Bf, Wl), ap = h, Xq = 0, bp = 0, Yq = 0, fH = 0, SA = Af.Zp(qi), gH = l, Ph = 0; Ph < SA; ++Ph) {
                            var Zq = jZa,
                                hH, Kw = Fg,
                                zt = Af,
                                Lw = qi,
                                Mw = Ph,
                                e3 = bp,
                                At = Zq,
                                iH = zt.YG(Lw, Mw),
                                jQ = zt.Jy(Lw, Mw),
                                jH = zt.tv(Lw, Mw),
                                Xl = qZa(Kw, iH, jQ, jH),
                                TA = zt.yC(Lw, Mw),
                                Nw = h,
                                UA = h;
                            TA ? (Nw = zt.ZG(Lw, Mw) ? -(Xl.width - TA.x) : -TA.x, UA = -TA.y + Xl.height / 2) : (Nw = e3, UA = 0);
                            At.left = Nw;
                            At.right = At.left + Xl.width;
                            At.top = UA - Xl.height / 2;
                            At.bottom = At.top + Xl.height;
                            hH = wZa(0, 0, l, Nw, UA, jH, Xl.YM, iH, jQ, Xl.width, Xl.height);
                            kZa[Ph] = hH.Ed;
                            a4(Wq, hH);
                            Xq = Math.min(Xq, Zq.left);
                            bp = Math.max(bp, Zq.right);
                            Yq = Math.min(Yq, Zq.top);
                            fH = Math.max(fH, Zq.bottom);
                            Af.yC(qi, Ph) && (gH = i)
                        }
                        if (!gH) {
                            for (var VA = (Xq + bp) / 2, Ph = 0; Ph < SA; ++Ph) {
                                var Xi = kZa[Ph];
                                Xi.cf -= VA;
                                Xi.zn = Xi.cf + Xi.width
                            }
                            bp -= VA;
                            Xq -= VA
                        }
                        ap = new JB(Yq, bp, fH, Xq);
                        if (Ik && Ik.xd && 0 != (Ik.xd.C & 4278190080)) {
                            var cp = 0;
                            Ik.rd && (cp = Ik.rd.strokeStyle.width);
                            if (0 < xt) {
                                var Bt = (new k4).base;
                                a4(Wq, Bt);
                                var Ow = Af.PN(Bf);
                                Ow & 8 && p4(0, ap.bottom, Af, qi, $o, Bt, 0.5, 0.5, 1, cp, Bf);
                                Ow & 2 && p4(ap.right, 0, Af, qi, $o, Bt, 0, 0, 1, cp, Bf);
                                Ow & 1 && p4(ap.left, 0, Af, qi, $o, Bt, 1, 0, -1, cp, Bf);
                                Ow & 4 && p4(0, ap.top, Af, qi, $o, Bt, 0.5, 0.5, -1, cp, Bf)
                            } else {
                                for (var wn = cp, lH = 0, mH = 0, nH = Af.St(qi), Yl = 0; Yl < nH; ++Yl) {
                                    var Ij = n4($o, Bf, Yl);
                                    Ij && (lH += Ij.height, mH = Math.max(mH, Ij.width))
                                }
                                for (var Zl = -lH / 2, WA = Zl - (wn / 2 + 1.5), Yl = 0; Yl < nH; ++Yl) if (Ij = n4($o, Bf, Yl)) Zl += Ij.height / 2, a4(Wq, uZa(-Ij.width / 2, Zl, Ij.width / 2, Zl, Ij.height, Ij, "", 0, 0)), Zl += Ij.height / 2;
                                wn && vZa(0, WA, 0, Zl + (wn / 2 + 1.5), 0.5, mH, wn, Wq)
                            }
                        }
                        ZYa(Wq, new Y3(Oh.x, Oh.y));
                        m4(wt, Wq)
                    }
                }
            } else if (id) if (id.xd.nt & 8) {
                if (!f[fc]) {
                    for (var xn = 0, oH = 0; oH < Nh; ++oH) {
                        var lQ = n4(p, pf, oH).width;
                        lQ > xn && (xn = lQ)
                    }
                    f[fc] = new N3(m, th, 49);
                    var Wg = f[fc],
                        Pw = Wg.C[0],
                        XA = Wg.C[1],
                        Ct = Wg.C[2],
                        YA = Wg.C[3],
                        pH = (Pw + Ct) / 2,
                        qH = (XA + YA) / 2,
                        Dt = Ct - pH,
                        Et = YA - qH,
                        Joa = Math.sqrt(Dt * Dt + Et * Et),
                        Dt = Dt / Joa,
                        Et = Et / Joa,
                        Ct = pH + Dt * xn / 2,
                        YA = qH + Et * xn / 2,
                        Pw = pH - Dt * xn / 2,
                        XA = qH - Et * xn / 2;
                    Wg.C[0] = Pw;
                    Wg.C[1] = XA;
                    Wg.C[2] = Ct;
                    Wg.C[3] = YA;
                    OYa(Wg)
                }
                PYa(f[fc], af, 0, 0);
                NYa(a.X, f[fc].Ef(), f[fc].he());
                for (var lYa = f[fc], mYa = a.X, eH = m, Ry = pf, kNa = p, z6a = s, A6a = m.kq(fc), B6a = m.jq(fc), lNa = eH.Cn(Ry), mNa = eH.St(lNa), Pea = 0, Av = 0; Av < mNa; ++Av) Pea += n4(kNa, Ry, Av).height;
                for (var fM = -Pea / 2, nNa = tZa(eH.Jo(Ry), Ry, l), Av = 0; Av < mNa; ++Av) {
                    var tY = n4(kNa, Ry, Av),
                        fM = fM + tY.height / 2,
                        oNa = rZa(eH.Jo(Ry), Ry, l, lYa, 0, M3(mYa, tY.width), fM, 0, tY, eH.Xv(lNa, Av), l, A6a, B6a);
                    oNa.Ed.N = i;
                    a4(nNa, oNa);
                    fM += tY.height / 2
                }
                m4(z6a, nNa)
            } else if ((Nh || Hc) && (id && 0 != (id.xd.C & 4278190080) || (id && (0 == id.C.length || 0 == id.C[0].width) ? 0 : m.Zp(m.Cn(m.$j(fc))) || id && id.ef && 0 < id.ef.width))) {
                f[fc] || (f[fc] = new N3(m, th, 49));
                PYa(f[fc], af, 0, 0);
                NYa(a.X, f[fc].Ef(), f[fc].he());
                var C6a = a.N,
                    gM = f[fc],
                    Qea = a.X,
                    D6a = m.kD(fc),
                    E6a = m.jD(fc),
                    pNa = m,
                    qNa = pf,
                    F6a = p,
                    G6a = !(!id.ef || !(0 < id.ef.width && id.ef.C & 4278190080)),
                    H6a = s,
                    I6a = Xd,
                    J6a = m.kq(fc),
                    K6a = m.jq(fc);
                gM.Ef();
                Qea.Ef();
                if (!gM.Iy) {
                    var L6a = gM,
                        hM = pNa,
                        M6a = qNa,
                        uY = [];
                    G6a && uY.push(new gZa(0));
                    for (var vY = hM.Cn(M6a), N6a = hM.Zp(vY), wY = 0; wY < N6a; ++wY) uY.push(new gZa(1, h, wY, hM.zH(vY, wY)));
                    for (var O6a = hM.St(vY), xY = 0; xY < O6a; ++xY) uY.push(new gZa(2, hM.Xv(vY, xY), xY, l));
                    L6a.Iy = uY
                }
                var P6a = sZa,
                    Q6a = C6a,
                    R6a = gM,
                    S6a = Qea,
                    T6a = D6a,
                    U6a = E6a,
                    V6a = pNa,
                    W6a = qNa,
                    X6a = F6a,
                    rNa = Qea,
                    Rea = gM.Ef() - 1,
                    sNa = Math.floor(Rea),
                    Y6a = Math.ceil(Rea),
                    tNa = Rea - sNa;
                P6a(Q6a, R6a, S6a, T6a, U6a, V6a, W6a, X6a, 0, (1 - tNa) * rNa.C[sNa] + tNa * rNa.C[Y6a], 0, l, H6a, I6a, J6a, K6a)
            }
        }
        g = s;
        g.D = n;
        a.MN(b, g)
    }
};

v = q4.prototype;
v.BV = u(l);
v.MN = function (a, b) {
    this.mF(a, b)
};

v.mF = function (a, b) {
    this.F ? a.C.U = b : a.C.Sg = b
};

v.ry = function (a, b, c, d, e) {
    FZa(this, a, b);
    for (var f = 0; f < a.length; ++f) for (var g = b[f].ir, j = 0; j < g.length; ++j) {
        var m = g[j],
            n = m.Ed,
            p = n.C.Ic(n.D),
            q = n.C.Ic(n.F);
        if (m.P) {
            var s = n.C.Nc(n.D),
                n = n.C.Nc(n.F);
            Math.abs(s - n) > Math.abs(p - q) + 0.001 ? (p = m, i != p.G && (p.G = i, p.Jd = i), aZa(m, s > n + 0.001)) : (s = m, l != s.G && (s.G = l, s.Jd = i), aZa(m, p > q + 0.001))
        } else aZa(m, p > q + 0.001)
    }
    f = [];
    for (g = 0; g < a.length; ++g) if (j = a[g].data.wv()) for (m = 0; m < a.length; ++m) if (a[m].data == j) {
        f[m] = a[g];
        break
    }
    for (g = 0; g < a.length; ++g) j = b[g], (m = f[g]) ? (j.I = m.data, j.F = m.C.Sg) : (j.I = k, j.F = k);
    for (a = 0; a < b.length; ++a) {
        g = b[a];
        j = g.ir;
        for (f = 0; f < j.length; ++f) j[f].group = a;
        j = g.xy;
        for (f = 0; f < j.length; ++f) j[f].group = a;
        j = g.jt;
        for (f = 0; f < j.length; f++) j[f].group = a;
        j = g.fv;
        for (f = 0; f < j.length; f++) j[f].group = a;
        g = g.vy;
        for (f = 0; f < g.length; f++) g[f].group = a
    }
    a = this.xa;
    f = {};

    f.zoom = this.C.zoom.get();
    f.De = this.C.rotation.get();
    f.Dc = this.C.Dc.get();
    f.width = this.C.width.get();
    f.height = this.C.height.get();
    f.mapTypes = this.C.mapTypes.get().slice();
    g = this.C.C.get();
    f.language = g.C;
    f.layers = g.Kr();
    this.xa = f;
    g = i;
    0 != f.Dc ? g = l : a && (a.De != f.De ? g = l : a.zoom != f.zoom ? g = l : a.language != f.language ? g = l : a.layers != f.layers ? g = l : DVa(a.mapTypes, f.mapTypes) || (g = l));
    this.C.Ja.get() || (g = l);
    a = this.D.C;
    for (f = 0; f < a.length; ++f) b[f].K = !a[f].C.D;
    for (var a = this.N, f = this.D.D, t = d ? u(l) : c, m = g, c = 0, p = [], q = Array(b.length), s = {}, d = [], g = 0; g < b.length; ++g) {
        q[g] = {};

        var x = b[g],
            D = x.tn,
            n = x.D || x.G;
        if (x.K) for (var I = 0; I < D.length; ++I) {
            var j = D[I],
                K = j.tc(l, e, n);
            K > c && (c = K);
            j.Kv = l
        } else
        for (var J = 0, M = x.L == a.C, I = 0; I < D.length; ++I) {
            var j = D[I],
                Q = j.Ed;
            M || (j.Kv = l);
            j.group = g;
            K = l;
            x.F && !x.F.K && (K = x.I.HN(j.fd));
            if (K || !t(j) || j.K) K = j.tc(l, e, n), K > c && (c = K), j.Kv = l;
            else if (j.Qg) d.push(j);
            else if (m && M) j.Jv && j.Kv ? Q.oq(f) ? 1 == j.type && !Q.GN && (q[g][Q.text] = i, J++, s[g] = J) : j.Kv = l : j.Kv || (XYa(j), p.push(j));
            else {
                if (!M) {
                    Q = x.L;
                    K = e;
                    if (j.Jv) var aa = j.tc(l, Q, n),
                        aa = aa - (K - Q),
                        K = 0 < aa ? aa : 0;
                    else K = 0;
                    K > c && (c = K)
                }
                XYa(j);
                p.push(j)
            }
        }
    }
    p.sort(function (a, b) {
        return a.sN - b.sN
    });
    for (g = 0; g < p.length; g++) {
        j = p[g];
        Q = j.Ed;
        x = b[j.group];
        n = x.D || x.G;
        t = 1 == j.type && !Q.GN;
        x = j.group;
        D = !(t && q[j.group][Q.text]);
        if (t && (J = s[x] || 0, 9 <= J && (!m || !j.Jv))) D = l;
        D && !Q.mq(f) ? (K = j.tc(i, e, n), j.Kv = Q.oq(f), t && (q[j.group][Q.text] = i, J++, s[x] = J)) : K = j.tc(l, e, n);
        K > c && (c = K)
    }
    for (g = 0; g < d.length; ++g) j = d[g], J = j.Ed, j.tc(i, e, i), J.oq(f);
    for (g = 0; g < b.length; ++g) b[g].L = e, b[g].D = l;
    a.C = e;
    b = c;
    0 < b && (e += b, this.ma(e), this.Y = e)
};

v.uU = ea();
var u4 = function (a, b) {
    if (a.F) return b.E0 = b.E0 || {}, b.E0;
    b.F0 = b.F0 || {};

    return b.F0
};

q4.prototype.Ka = function (a) {
    var b = this.ba.D,
        c = v4(b, a);
    return c ? new Bw(c.width, c.height) : b.K[a] ? k : new Bw(1, 1)
};

var t4 = function (a, b) {
    return a.F ? b.C.U : b.C.Sg
},
    CZa = function (a, b) {
        var c = a.F ? b.C.X : b.C.ha;
        c || (c = [], a.F ? b.C.X = c : b.C.ha = c);
        return c
    },
    GZa = function (a, b) {
        return Xg(a.Oa.Bc(), b.Oa.Bc())
    },
    FZa = function (a, b, c) {
        var d = Nz(a.C.rotation.get()),
            e = {};

        new Float32Array(2);
        new Float32Array(2);
        for (var f = 0; f < b.length; ++f) {
            var g = b[f],
                j = g.data,
                m = c[f],
                n = e[j.da()];
            if (!n) {
                var p = a.C.D,
                    n = j.da(),
                    q = sD(),
                    s = M1(n);
                a0(q, s, 0, 0, 0, 0, -s, 0, 0, 0, 0, s, 0, -Math.PI, Math.PI, 0, 1);
                s = 1 / 256;
                l0(q, s, s, s);
                a2(p.D, q, q);
                s0(b2(p.D), q, q);
                s0(KWa(p.D), q, q);
                p = p.D.D;
                s = qD();
                uWa(p, 0, n, s);
                n = new YXa(256 * s[0], 256 << n, q);
                e[j.da()] = n
            }
            q = j.getWidth() * j.$g();
            j = j.getHeight() * j.ah();
            p = CZa(a, g);
            for (g = 0; g < p.length; ++g) p[g] && PYa(p[g], n, q, j);
            m = m.tn;
            for (g = 0; g < m.length; ++g)(p = m[g].Wd) && p.transform(n, q, j, d)
        }
    },
    HZa = function (a, b) {
        var c = a.D.C[b.group];
        if (!c) return k;
        var d = c.data,
            e = b.fd;
        return new f3(0, d, c.Oa, c.C, e, K3(a.Pc, d.Qf(e)))
    },
    EZa = ea();
EZa.prototype.C = function (a, b, c, d, e) {
    for (var f = 0; f < 2 * a; f += 2) c[f] = b[f] + d, c[f + 1] = b[f + 1] + e
};

var DZa = ea();
DZa.prototype.C = function (a, b, c, d, e) {
    for (var f = Math.SQRT1_2, g = 0; g < 2 * a; g += 2) {
        var j = b[g + 1] + e;
        c[g] = f * (b[g] + d);
        c[g + 1] = f * j
    }
};

var IZa = function () {
    this.D = k;
    this.G = new vD;
    this.F = new vD;
    this.P = rD();
    this.I = sD();
    this.K = [];
    this.N = new C3(function () {
        return new Float32Array(16)
    });
    this.C = new Float32Array(16);
    this.Q = this.L = this.M = 0
},
    JZa = function (a, b, c, d, e) {
        var f = a.K[d];
        f || (f = a.K[d] = []);
        var g = f[b];
        g || (g = f[b] = []);
        f = g[c];
        if (!f) {
            f = M1(d) / 256;
            o0(a.I, f, -f, f);
            f = a.P;
            tWa(b, c, d, f);
            var j = f[0];
            tWa(b + 1, c, d, f);
            var m = f[0];
            f[3] = 1;
            for (var b = a.L, d = a.Q, n = [], j = j - d * Math.floor((m - a.M) / d); j < b; j += d) f[0] = j, sVa(a.I, f), m = a.N.get(), a2(a.D, a.I, m, i), s0(a.C, m, m), n.push(m);
            f = g[c] = n
        }
        return e >= f.length ? k : f[e]
    };

rD();
var w4 = function (a, b, c, d) {
    this.jv = d;
    this.map = a;
    this.nn = b;
    this.C = c;
    this.K = c.Q.C;
    this.I = c.Br.F;
    this.D = new N0(h, 0);
    this.$B = new L0(h, l);
    this.aC = new L0(h, l);
    aB(this.C, "ViewportLoaded", A(this.$B.set, this.$B, i), l);
    aB(this.C, "ViewportReady", A(this.aC.set, this.aC, i), l);
    (new M0(A(function () {
        this.$B.set(l);
        this.aC.set(l)
    }, this))).Zb(this.C.L);
    (new M0(A(function () {
        this.$B.set(l);
        this.aC.set(l)
    }, this))).Zb(this.map.X)
};

w4.prototype.run = function () {
    this.jv.run()
};

w4.prototype.$ = r("map");
w4.prototype.G = function () {
    this.D.set(this.D.get() + 1)
};

var KZa = function (a, b, c) {
    this.D = a;
    this.C = c;
    this.F = b
};

KZa.prototype.run = function () {
    this.D.getData([], this.F, this.C)
};

var LZa = function (a, b, c, d, e, f) {
    NA.call(this, "boundingChanged");
    this.C = a;
    this.L = b;
    this.K = c;
    this.I = d;
    this.F = e;
    this.G = f
};

B(LZa, NA);
var x4 = function (a, b, c, d, e, f) {
    this.D = a;
    this.C = b;
    this.gi = d;
    this.gg = e;
    this.L = c;
    this.fontSize = 10;
    this.fd = this.F = this.lk = 0;
    this.points = f || k
};

var MZa = function (a, b, c, d, e) {
    this.url = a;
    this.anchor = b || k;
    this.C = c || k;
    this.rect = d || k;
    this.Qg = i;
    this.Bt = !! e
};

var y4 = function (a, b, c, d, e, f, g) {
    x4.call(this, [], [], d, "", e);
    this.image = a;
    this.I = b;
    this.K = c;
    this.G = f || 0;
    this.scale = g || 1;
    this.zIndex = 0
};

B(y4, x4);
var NZa = function (a, b, c, d, e, f) {
    this.point = a;
    this.anchor = b;
    this.zoomLevel = c;
    this.C = d;
    this.url = qa(e) ? e : k;
    this.image = e instanceof HTMLImageElement || e instanceof HTMLCanvasElement ? e : k;
    this.loading = l;
    this.rotation = f || 0
};

NZa.prototype.dr = function (a) {
    if (this.image) {
        p3(this.C, this.point.x, this.point.y, 20);
        for (var b = this.C.C, c = this.C.D, d = Math.pow(2, 20 - this.zoomLevel), e = 0; 1 >= e; e++) for (var f = 0; 1 >= f; f++) {
            var g = this.image.width * d * (e - this.anchor.x),
                j = this.image.height * d * (f - this.anchor.y);
            q3(this.C, b + g * Math.cos(this.rotation) + j * Math.sin(this.rotation), c - g * Math.sin(this.rotation) + j * Math.cos(this.rotation), 20);
            this.C.lng < a.left && (a.left = this.C.lng);
            this.C.lng > a.right && (a.right = this.C.lng);
            this.C.lat < a.bottom && (a.bottom = this.C.lat);
            this.C.lat > a.top && (a.top = this.C.lat)
        }
    }
};

var OZa = function (a, b, c, d, e, f, g, j) {
    x4.call(this, b, c, d, e, g, a);
    this.priority = f;
    this.attributes = j;
    this.G = this.zIndex = 0
};

B(OZa, x4);
var PZa = function (a, b) {
    this.points = a;
    this.D = [];
    this.F = [];
    this.gi = b;
    this.gg = 0;
    this.zIndex = y(h) ? h : 1024;
    this.G = y(h) ? h : 1023;
    this.fontSize = 10;
    this.C = this.lk = 0
},
    QZa = new Q3;
R3(QZa, 0, 128, 256, 128, 256);
var RZa = new Q3;
var SZa = function (a, b, c, d, e, f, g, j, m, n, p) {
    x4.call(this, c, d, f, g, j, new Float32Array([a, b]));
    this.snippet = e;
    this.M = p || 15
};

B(SZa, x4);
var TZa = function (a, b, c, d) {
    this.point = a;
    this.D = [];
    this.C = b;
    this.gi = "localStyle!!";
    this.gg = c;
    this.F = d || "";
    this.fontSize = 10;
    this.lk = 0
};

var z4 = function () {
    this.C = [];
    this.points = [];
    this.D = [];
    this.G = [];
    this.F = []
};

B(z4, iB);
z4.prototype.dr = function () {
    for (var a = 1E100, b = -1E100, c = 90, d = -90, e = 0; e < this.points.length; ++e) this.points[e].point.x < a && (a = this.points[e].point.x), this.points[e].point.x > b && (b = this.points[e].point.x), this.points[e].point.y < c && (c = this.points[e].point.y), this.points[e].point.y > d && (d = this.points[e].point.y);
    for (e = 0; e < this.D.length; ++e) for (var f = this.D[e], g = 0; g < f.points.length; ++g) f.points[g].x < a && (a = f.points[g].x), f.points[g].x > b && (b = f.points[g].x), f.points[g].y < c && (c = f.points[g].y), f.points[g].y > d && (d = f.points[g].y);
    for (e = 0; e < this.G.length; ++e) {
        f = this.G[e];
        for (g = 0; g < f.points.length; ++g) f.points[g].x < a && (a = f.points[g].x), f.points[g].x > b && (b = f.points[g].x), f.points[g].y < c && (c = f.points[g].y), f.points[g].y > d && (d = f.points[g].y)
    }
    a = new JB(d, b, c, a);
    for (e = 0; e < this.F.length; ++e) this.F[e].dr(a);
    c = Math.floor((a.left + 180) / 360);
    b = Math.floor((a.right + 180) / 360);
    e = [];
    if (a.left <= a.right) for (; c <= b; ++c) d = a.left - 360 * c, g = a.right - 360 * c, -180 > d && (d = -180), 180 < g && (g = 180), e.push(new KB(d, a.bottom, g - d, a.top - a.bottom));
    a = this.C;
    this.C = e;
    this.dispatchEvent(new LZa(a, e, 0 < this.points.length, 0 < this.D.length, 0 < this.G.length, 0 < this.F.length))
};

var UZa = function (a) {
    this.nh = new ArrayBuffer(a);
    this.C = [];
    this.C[5126] = new Float32Array(this.nh);
    this.C[5124] = new Int32Array(this.nh);
    this.C[5125] = new Uint32Array(this.nh);
    this.C[5122] = new Int16Array(this.nh);
    this.C[5123] = new Uint16Array(this.nh);
    this.C[5120] = new Int8Array(this.nh);
    this.C[5121] = new Uint8Array(this.nh);
    this.D = this.C[5126];
    this.I = this.C[5124];
    this.F = this.C[5122];
    this.G = this.C[5123];
    this.sq = this.C[5121];
    this.offset = 0
};

var VZa = function () {
    this.Km = this.count = 0;
    this.nh = k;
    this.kk = [];
    this.D = this.C = 0
};

var A4 = function () {
    this.C = k
},
    WZa = {
        5120: 1,
        5121: 1,
        5122: 2,
        5123: 2,
        5124: 4,
        5125: 4,
        5126: 4
    };

A4.prototype.init = function (a, b, c, d, e, f, g) {
    var j = this.C = new XZa;
    j.F = a;
    j.X = new b(a, e, g);
    j.V = j.X.C;
    j.P = d;
    j.N = c;
    0 < this.lu.length && (a = this.lu, b = a.join(), f[b] || (f[b] = new YZa(f.Z, a)), j.I = f[b]);
    this.wf();
    0 != j.G % j.M && (j.G += j.M - j.G % j.M)
};

A4.prototype.Fd = "";
A4.prototype.lu = [];
var B4 = [0, 1, 2, 0, 2, 3],
    C4 = function (a, b, c, d) {
        var e = a.C.G,
            f = WZa[c];
        0 != e % 4 && (e += 4 - e % 4);
        a.C.L.push(new ZZa(b, c, e, f, !! d));
        b.C = i;
        a.C.G = e + b.size * f;
        a.C.M = 4
    },
    D4 = function (a, b, c, d) {
        for (var a = a.C.U, e = 0; e < a.length; ++e) {
            var f = a[e];
            if (f.C == b) {
                f.D[c] = d;
                return
            }
        }
        e = [];
        e[c] = d;
        a.push(new $Za(b, e))
    },
    E4 = function (a) {
        return a.C.N
    },
    F4 = function (a) {
        return a.C.X
    };

A4.prototype.getContext = function () {
    return this.C.F
};

A4.prototype.yg = function () {
    this.C.Q = i
};

A4.prototype.Ot = function (a, b) {
    if (!a) return l;
    var c = a[this.Fd];
    return !c || c.count != c.Km || b && this.dw(b) || !a_a(c, this.C) || b && this.Ur(b, a) ? l : i
};

var a_a = function (a, b) {
    if (!a || a.count != a.Km) return l;
    if (0 != a.Km) {
        if (0 == a.kk.length || b.I && !b.I.C.C.eb.get(b.I.G)) return l;
        for (var c = 0; c < a.kk.length; c++) if (-1 == a.kk[c] || !b.F.C.eb.get(a.kk[c])) return l
    }
    return i
};

v = A4.prototype;
v.df = ea();
v.dw = u(l);
v.Ur = u(l);
v.ip = ea();
v.pj = function (a, b) {
    var c;
    c = a[this.Fd];
    var d = this.dw(b),
        e = this.C;
    if (!d && a_a(c, e)) c = 2;
    else if (c ? d && (c.Km = this.zb(b), c.count = 0) : (c = new VZa, c.Km = this.zb(b), a[this.Fd] = c), 0 == c.Km) c = 2;
    else {
        if (!c.nh || d) {
            c.count = 0;
            if (e.I) {
                var f = e.I,
                    g = c.Km,
                    d = c.kk,
                    j = f.C.C,
                    m = j.eb.get(f.G);
                m || (m = f.C.createBuffer(), f.G = w1(f.C.C, m, 0), f.F = 0);
                var n = Math.min(f.K, g / f.D);
                if (f.F < n) {
                    f.bind();
                    n = Math.min(f.K, Math.pow(2, Math.ceil(Math.log(n) * Math.LOG2E)));
                    f.nh = new Uint16Array(f.I * n);
                    for (m = 0; m < n; m++) for (var p = 0; p < f.I; p++) f.nh[m * f.I + p] = f.L[p] + m * f.D;
                    j.Se(f.G, f.nh.byteLength);
                    f.C.bufferData(34963, f.nh, 35044);
                    f.F = n
                }
                f = Math.ceil(g / (f.F * f.D));
                for (m = 0; m < f; m++) m >= d.length && (d[m] = -1);
                d.splice(f, d.length - f)
            } else 0 == c.kk.length && (c.kk[0] = -1);
            c.nh = new UZa(e.G * (c.Km + 1));
            c.nh.offset = 0
        }
        e.C = c.nh;
        c.count < c.Km && (c.count += this.Fg(b, c));
        if (c.Km == c.count) {
            if (1 < c.kk.length && e.I) {
                d = e.I;
                f = c.nh.nh;
                g = c.kk;
                j = e.G;
                e = e.P;
                m = d.C.C;
                n = d.F * d.D;
                for (p = 0; p < g.length; p++) {
                    var q = m.eb.get(g[p]);
                    q ? m.wb(g[p]) : (q = d.C.createBuffer(), g[p] = w1(m, q, 0));
                    d.C.bindBuffer(34962, q);
                    q = p * n * j;
                    q = new Uint8Array(f, q, Math.min(f.byteLength - q, n * j));
                    m.Se(g[p], q.byteLength);
                    d.C.bufferData(34962, q, e)
                }
            } else d = e.F, f = c.kk, g = d.C, (j = g.eb.get(f[0])) ? g.wb(f[0]) : (j = d.createBuffer(), f[0] = w1(g, j, 0)), d.bindBuffer(34962, j), d.C.Se(c.kk[0], c.nh.sq.byteLength), d.bufferData(34962, c.nh.sq, e.P);
            c.nh = k;
            c = 2
        } else c = 1
    }
    return 2 != c ? c : this.Ur(b, a) && !this.ew(b, a) ? 1 : 2
};

var XZa = function () {
    this.V = this.X = this.F = k;
    this.P = 0;
    this.N = this.I = k;
    this.L = [];
    this.U = [];
    this.G = 0;
    this.K = 1;
    this.D = 4;
    this.C = k;
    this.M = 1;
    this.Q = l
},
    G4 = function (a, b) {
        for (var c = b.F, d = 0; d < b.K; ++d) {
            for (var e = 0; e < b.U.length; e++) {
                var f = b.U[e];
                f.C.D(f.D[d])
            }
            for (var e = b.V, f = b.N, g = 0; g < e.D.length; ++g) {
                var j = e.D[g]; - 1 != j.location && j.D(f).F(e.Z, j.location)
            }
            e = a.count;
            for (f = 0; f < a.kk.length; f++) {
                c.C.wb(a.kk[f]);
                g = c.C.eb.get(a.kk[f]);
                c.bindBuffer(34962, g);
                for (var g = b, j = g.F, m = 255, n = 0; n < g.L.length; ++n) {
                    var p = g.L[n],
                        q = p.C;
                    0 <= q.index && (m &= ~ (1 << q.index), j.enableVertexAttribArray(q.index), j.vertexAttribPointer(q.index, q.size, p.D, p.G, g.G, p.offset))
                }
                for (n = 0; m; n++, m >>>= 1) m & 1 && B1(j, n);
                b.I ? e -= b.I.Rd(b.D, e) : c.drawArrays(b.D, 0, e)
            }
        }
    };

A4.prototype.Rd = function (a, b) {
    var c;
    c = this.Fd;
    var d = this.C,
        e = a[c];
    !e || 0 == e.kk.length ? c = i : d.F.C.eb.get(e.kk[0]) ? (d.Q && (d.V.activate(d.N), this.ip(), d.Q = l), this.df(b, a), e = a[c], G4(e, d), c = e.count == e.Km) : c = l;
    return c
};

A4.prototype.Lb = function (a) {
    for (var b = this.C, c = b.L, d = 0, e = c.length, f = 0; f < e; ++f) for (var g = c[f], j = 0; j < g.C.size; ++j) b.C.C[g.D][(b.C.offset + g.offset) / g.F + j] = arguments[d++];
    b.C.offset += b.G
};

var b_a = [0, 0],
    H4 = function (a, b, c, d, e) {
        var a = a.C.F,
            f = s4(b);
        b_a[0] = b.C.lh.width;
        b_a[1] = b.C.lh.height;
        a.activeTexture(33984 + c);
        d.set(c);
        a.bindTexture(3553, f);
        e && e.C(b_a)
    },
    I4 = function (a, b, c, d) {
        a = a.C.F;
        a.activeTexture(33984 + c);
        d.set(c);
        a.bindTexture(3553, b)
    },
    c_a = function (a, b, c, d, e) {
        var f = 9729;
        if (!e && B0(b[6], 0)) {
            var e = c / 2,
                g = d / 2,
                d = Math.abs(b[0]) * e,
                c = Math.abs(b[1]) * g,
                e = Math.abs(b[4]) * e,
                b = Math.abs(b[5]) * g;
            if (B0(d, 1) && B0(c, 0) && B0(e, 0) && B0(b, 1) || B0(d, 0) && B0(c, 1) && B0(e, 1) && B0(b, 0)) f = 9728
        }
        a.C.F.texParameteri(3553, 10240, f)
    },
    ZZa = function (a, b, c, d, e) {
        this.C = a;
        this.D = b;
        this.offset = c;
        this.F = d;
        this.G = e
    },
    $Za = function (a, b) {
        this.C = a;
        this.D = b
    },
    J4 = function (a, b) {
        try {
            return a.C.F.D.texImage2D(3553, 0, 6408, 6408, 5121, b), 4 * b.width * b.height
        } catch (c) {
            ja.console && ja.console.log(c);
            var d = new Uint8Array([0, 0, 0, 0]);
            z1(a.C.F, 6408, 1, 1, 6408, d);
            return 4
        }
    };

var d_a = function () {
    this.C = k;
    this.G = {
        dO: i,
        PM: l,
        IG: {}
    };

    this.I = {
        dO: l,
        PM: l,
        IG: {}
    };

    e0();
    e0();
    this.K = e0();
    this.L = e0();
    this.D = t0();
    this.F = k;
    this.V = [0, 0]
};

B(d_a, A4);
v = d_a.prototype;
v.Fd = "panoCursor";
v.wf = function () {
    this.C.D = 6;
    C4(this, F4(this).X, 5126)
};

v.df = function (a) {
    E4(this).alpha.set(a.PM ? 0.15 : 0.3)
};

v.zb = function (a) {
    return !a ? 0 : a.dO ? 36 : 4
};

v.Fg = function (a, b) {
    var c = b.Km;
    if (a.dO) for (var d = 2 * Math.PI / (c - 1), e = 0; e < c; e++) {
        var f = e * d;
        this.Lb(Math.cos(f), Math.sin(f), 0)
    } else this.Lb(1.941640788, 0, 1.2), this.Lb(-1.941640788, 0, 1.2), this.Lb(-1.941640788, 0, -1.2), this.Lb(1.941640788, 0, -1.2);
    return c
};

v.ip = function () {
    var a = this.getContext();
    a.disable(2884);
    a.enable(3042);
    a.disable(2929);
    a.disable(2960);
    a.disable(3089)
};

var K4 = function (a, b, c, d, e, f, g) {
    this.Ed = a;
    this.C = [];
    this.D = [];
    this.Z = b;
    this.F = [];
    c.Vh && (this.F = ["VERTEX_TEXTURES"]);
    d && this.F.push.apply(this.F, d);
    this.N = f;
    this.P = g;
    this.M = [];
    this.G = [];
    this.I = [];
    this.K = "";
    this.L = e
};

K4.prototype.activate = function (a) {
    if (!this.K) {
        for (var b = [], c = 0; c < this.C.length; ++c) this.C[c].C || b.push(this.C[c]);
        Yg(b, function (a, b) {
            return Xg(a.dD, b.dD)
        });
        for (var d = "", e = 0, c = 0; c < b.length; ++c) {
            var f = b[c],
                d = d + this.N.substr(e, f.dD - e),
                g = f,
                e = this.N.substr(f.dD, f.nV),
                e = e.replace("attribute", "const"),
                j = "";
            switch (g.size) {
            case 1:
                g = "" + g.Gn[0];
                j = 0 > g.indexOf(".") ? g + "." : g;
                break;
            case 2:
                j = "vec2(" + g.Gn[0] + "," + g.Gn[1] + ")";
                break;
            case 3:
                j = "vec3(" + g.Gn[0] + "," + g.Gn[1] + "," + g.Gn[2] + ")";
                break;
            case 4:
                j = "vec4(" + g.Gn[0] + "," + g.Gn[1] + "," + g.Gn[2] + "," + g.Gn[3] + ")"
            }
            e = e.replace(";", "=" + j + ";");
            d = d + e;
            e = f.dD + f.nV
        }
        d += this.N.substr(e);
        b = "";
        for (c = 0; c < this.F.length; ++c) b += "#define " + this.F[c] + "\\n";
        this.K = d;
        this.L = b + this.L
    }
    for (b = c = 0; b < this.G.length; ++b) c *= this.G[b].length, c += this.Ed.F(b, a);
    a = c;
    if (!this.M[a]) {
        c = this.Z;
        b = this.L;
        f = a;
        for (d = this.I.length - 1; 0 <= d; d--) e = this.G[d], g = this.I[d], j = f % e.length, f = (f - j) / e.length, b += "#define " + g + " " + e[j] + "\\n";
        f = c.createShader(35632);
        c.shaderSource(f, b + this.P);
        c.compileShader(f);
        d = c.createShader(35633);
        c.shaderSource(d, b + this.K);
        c.compileShader(d);
        b = c.createProgram();
        c.attachShader(b, d);
        c.attachShader(b, f);
        c.linkProgram(b);
        c.useProgram(b);
        this.Ed.D(b);
        this.M[a] = b;
        for (c = 0; c < this.C.length; ++c) this.C[c].QC[a] = this.C[c].index;
        for (c = 0; c < this.D.length; ++c) this.D[c].C[a] = this.D[c].location
    }
    this.Z.useProgram(this.M[a]);
    for (c = 0; c < this.C.length; ++c) this.C[c].index = this.C[c].QC[a];
    for (c = 0; c < this.D.length; ++c) this.D[c].location = this.D[c].C[a]
};

var L4 = function (a, b, c, d) {
    b = new e_a(b, c, d);
    a.C.push(b);
    return b
},
    M4 = function (a, b) {
        a.D.push(b)
    },
    N4 = function (a, b) {
        a.I.push(b);
        a.G.push([0, 1])
    },
    e_a = function (a, b, c) {
        this.index = 0;
        this.QC = [];
        this.size = a;
        this.dD = b;
        this.nV = c;
        this.C = l;
        b = [];
        for (c = 0; c < a; c++) b[c] = 0;
        this.Gn = b
    },
    O4 = function (a) {
        this.location = -1;
        this.C = [];
        this.D = a
    };

var f_a = function (a, b, c) {
    this.C = new K4(this, a, b, c || [], "", "attribute vec3 b;uniform mat4 a;void main(){gl_Position=a*vec4(b,1);}", "precision highp float;uniform float b;void main(){gl_FragColor=vec4(1,1,1,b);}");
    this.Z = a;
    this.X = L4(this.C, 3, 0, 17);
    this.Y = new O4(function (a) {
        return a.transform
    });
    M4(this.C, this.Y);
    this.V = new O4(function (a) {
        return a.alpha
    });
    M4(this.C, this.V)
};

f_a.prototype.D = function (a) {
    var b = this.Z;
    this.X.index = b.getAttribLocation(a, "b");
    this.Y.location = b.getUniformLocation(a, "a");
    this.V.location = b.getUniformLocation(a, "b")
};

f_a.prototype.F = function (a) {
    switch (a) {
    default:
        return 0
    }
};

var g_a = function () {
    this.C = k
};

B(g_a, A4);
v = g_a.prototype;
v.Fd = "navigationArrows";
v.wf = function () {
    this.C.D = 5;
    C4(this, F4(this).Y, 5126)
};

v.df = function () {
    var a = this.getContext();
    a.disable(2884);
    a.enable(3042);
    a.disable(2929);
    a.disable(2960);
    a.disable(3089)
};

v.zb = function (a) {
    return a.D.length
};

v.Fg = function (a) {
    for (var a = a.D, b = 0; b < a.length; b++) {
        var c = a[b];
        this.Lb(c[0], c[1], c[2])
    }
    return a.length
};

var h_a = function (a, b, c) {
    this.C = new K4(this, a, b, c || [], "", "attribute vec3 b;uniform mat4 a;void main(){gl_Position=a*vec4(b,1);}", "precision highp float;uniform bool b;void main(){vec4 c,d;c=vec4(.95,.95,.95,.6);d=vec4(.95,.95,.95,1);if(!gl_FrontFacing){c.xyz/=2.7;d.xyz/=2.7;}gl_FragColor=mix(c,d,float(b));}");
    this.Z = a;
    this.Y = L4(this.C, 3, 0, 17);
    this.V = new O4(function (a) {
        return a.Wq
    });
    M4(this.C, this.V);
    this.X = new O4(function (a) {
        return a.highlight
    });
    M4(this.C, this.X)
};

h_a.prototype.D = function (a) {
    var b = this.Z;
    this.Y.index = b.getAttribLocation(a, "b");
    this.V.location = b.getUniformLocation(a, "a");
    this.X.location = b.getUniformLocation(a, "b")
};

h_a.prototype.F = function (a) {
    switch (a) {
    default:
        return 0
    }
};

var P4 = function (a) {
    this.C = k;
    this.oa = a
};

B(P4, A4);
P4.prototype.Fd = "pano";
P4.prototype.F = {
    desc: k,
    data: k
};

P4.prototype.wf = function () {
    this.C.D = 5;
    C4(this, F4(this).ca, 5126)
};

var jXa = function (a, b) {
    for (var c = 0; 2 > c; c++) {
        a.D = 0 == c ? l : i;
        for (var d = 0; d < b.length; d++) for (var e = $1(b[d]), f = 0; f < e.length; f++) {
            var g = e[f],
                g = a.pj(g.C, g);
            if (2 != g) return g
        }
    }
    return 2
};

P4.prototype.zb = function (a) {
    a = a.owner.C.C.F;
    return 2 * a * (a + 2) - 2
};

P4.prototype.Fg = function (a, b) {
    for (var c = b.Km, d = a.owner.C.D, e = a.owner.C.C, f = e.F, g = f * e.C, e = f * e.D, j = a.x * f, m = a.y * f, n = (a.x + 1) * f, f = (a.y + 1) * f, p = m; p < f; p++) {
        p > m && (Q4(this, n / g, p / e, d), Q4(this, j / g, p / e, d));
        for (var q = j; q < n + 1; q++) Q4(this, q / g, p / e, d), Q4(this, q / g, (p + 1) / e, d)
    }
    return c
};

var Q4 = function (a, b, c, d) {
    d = d.qR(b * d.getWidth(), c * d.getHeight());
    0 == d && (d = 500);
    a.Lb(b, c, d)
},
    i_a = function (a, b) {
        for (var c, d = b.SG; 0 <= d; d--) if (c = JWa(b.owner, b, d), c = a.oa.P.getData(c)) return c;
        return k
    };

P4.prototype.Ur = function (a) {
    if (!this.D) return l;
    a = i_a(this, a);
    if (!a) return l;
    var b = this.getContext(),
        c = b.C.contains(a.C);
    c && b.C.wb(a.C);
    return !c
};

P4.prototype.ew = function (a) {
    j_a(this, i_a(this, a));
    return i
};

var j_a = function (a, b) {
    if (b && b.image) {
        b.C = a.getContext().C.createTexture(9729);
        var c = J4(a, b.image);
        a.getContext().C.Se(b.C, c)
    }
};

P4.prototype.ip = function () {
    var a = this.getContext();
    a.enable(2884);
    a.state.wo(1029);
    a.enable(2929);
    a.disable(2960);
    a.disable(3089)
};

P4.prototype.df = function (a) {
    var b = a.owner,
        c = b.C,
        d = this.F;
    a: {
        for (var e = a.SG; 0 <= e; e--) if (d.desc = JWa(a.owner, a, e), d.data = this.oa.P.getData(d.desc), d.data && this.getContext().C.contains(d.data.C)) break a;
        j_a(this, d.data)
    }
    a = E4(this);
    a.ma.C(NWa(b));
    a.alpha.set(b.hv);
    var e = c.C.L - d.desc.da(),
        b = c.C.C / (1 << e),
        c = c.C.D / (1 << e),
        e = -d.desc.Ic(),
        f = -d.desc.Nc();
    a.Xq.set(b, c, e, f);
    d.data && (d = d.data.C, c = x1(this.getContext().C, d), I4(this, c, 0, a.ca), this.getContext().C.wb(d))
};

var kXa = function (a, b) {
    if (!(1 > b.length)) {
        var c = a.getContext();
        c.state.zo(1, 0, 0, 1);
        c.enable(3042);
        var d = b[0];
        c.clear(256);
        for (var d = $1(d), e = 0; e < d.length; e++) {
            var f = d[e];
            a.Rd(f.C, f)
        }
        c.state.zo(770, 771, 1, 771);
        if (!(2 > b.length)) {
            d = b[1];
            c.clear(256);
            d = $1(d);
            for (e = 0; e < d.length; e++) f = d[e], a.Rd(f.C, f)
        }
    }
};

P4.prototype.activate = function () {
    F4(this).C.activate(E4(this))
};

var k_a = function (a, b, c) {
    this.C = new K4(this, a, b, c || [], "", "const float d=3.1415926;vec4 i(vec3 e){float f,g,h;f=2.*d*(e.x-.5);g=d*(.5-e.y);h=e.z;return vec4(sin(f)*cos(g)*h,cos(f)*cos(g)*h,sin(g)*h,1);}attribute vec3 e;uniform vec4 a;uniform mat4 b;varying vec3 c;void main(){float f=e.z;gl_Position=b*i(e);c=vec3(e.xy*a.xy+a.zw,1);c*=f;}", "precision highp float;uniform float d;uniform sampler2D e;varying vec3 c;void main(){gl_FragColor=vec4(texture2DProj(e,c).rgb,d);}");
    this.Z = a;
    this.ca = L4(this.C, 3, 143, 17);
    this.V = new O4(function (a) {
        return a.Xq
    });
    M4(this.C, this.V);
    this.Y = new O4(function (a) {
        return a.ma
    });
    M4(this.C, this.Y);
    this.X = new O4(function (a) {
        return a.alpha
    });
    M4(this.C, this.X);
    this.ba = new O4(function (a) {
        return a.ca
    });
    M4(this.C, this.ba)
};

k_a.prototype.D = function (a) {
    var b = this.Z;
    this.ca.index = b.getAttribLocation(a, "e");
    this.V.location = b.getUniformLocation(a, "a");
    this.Y.location = b.getUniformLocation(a, "b");
    this.X.location = b.getUniformLocation(a, "d");
    this.ba.location = b.getUniformLocation(a, "e")
};

k_a.prototype.F = function (a) {
    switch (a) {
    default:
        return 0
    }
};

var l_a = function (a, b) {
    this.J = a;
    this.C = b;
    this.D = ""
},
    m_a = function (a) {
        a.fillStyle = "rgba(255, 255, 255, 1.0)";
        a.font = "80px Arial";
        a.textBaseline = "top";
        a.strokeStyle = "rgba(150, 150, 150, 0.5)";
        a.lineWidth = 0.5;
        a.shadowOffsetX = -1.5;
        a.shadowOffsetY = -1.5;
        a.shadowBlur = 4;
        a.shadowColor = "rgba(67, 67, 67, 0.8)"
    };

var R4 = function () {
    this.C = k
};

B(R4, A4);
var n_a = function (a, b, c) {
    for (var d = 0, e = 0; e < b; e++) for (var f = 0; f < a; f++) c[d + 0] = f, c[d + 1] = e, d += 2
},
    S4 = function (a, b, c, d, e) {
        for (var f, g = 0; g < c - 1; g++) if (0 == g % 2) for (var j = 0; j < b; j++) f = j + g * b, a.Lb(d[2 * f], d[2 * f + 1], e[4 * f]), f = j + (g + 1) * b, a.Lb(d[2 * f], d[2 * f + 1], e[4 * f]);
        else
        for (j = b - 1; 0 <= j; j--) f = j + (g + 1) * b, a.Lb(d[2 * f], d[2 * f + 1], e[4 * f]), f = j + g * b, a.Lb(d[2 * f], d[2 * f + 1], e[4 * f])
    };

R4.prototype.zb = function (a) {
    return !a || !a.width || !a.height ? 4 : 2 * a.width * (a.height - 1)
};

var o_a = function (a) {
    var b = k;
    a instanceof HTMLCanvasElement ? b = a.getContext("2d") : (b = vz("canvas", {
        width: a.width,
        height: a.height
    }).getContext("2d"), b.drawImage(a, 0, 0));
    b = b.getImageData(0, 0, a.width, a.height);
    return b.width * b.height != a.width * a.height ? k : new Uint8Array(b.data)
};

var T4 = function (a) {
    this.C = k;
    this.F = t0();
    this.D = y(a) ? !! a : l
};

B(T4, R4);
var p_a = 14 / 9;
v = T4.prototype;
v.wf = function () {
    this.C.D = 5;
    var a = F4(this);
    this.D ? C4(this, a.qa, 5121) : C4(this, a.xa, 5121)
};

v.Fd = "photo3d";
v.df = function (a) {
    var b = E4(this);
    b.opacity.set(a.D || 0);
    b.kf.set(a.I);
    b.ma.C(this.F);
    var c = a.H.C.width,
        d = a.H.C.height;
    b.qo.set(0, 0, 1 / (c - 1), 1 / (d - 1));
    a.H.D ? b.ee.set(0, 1, 1 / (c - 1), -1 / (d - 1)) : b.ee.set(0, 0, 1 / (c - 1), 1 / (d - 1));
    c = this.getContext();
    d = x1(c.C, a.C);
    I4(this, d, 0, b.Va);
    c.C.wb(a.C);
    this.D && (d = x1(c.C, a.F), I4(this, d, 1, b.qa), c.C.wb(a.F))
};

v.Ur = function (a) {
    var b = this.getContext(),
        c = b.C.contains(a.C),
        d = !this.D || b.C.contains(a.F);
    c && b.C.wb(a.C);
    d && this.D && b.C.wb(a.F);
    return !d || !c
};

v.ew = function (a) {
    var b = this.getContext(),
        c = a.H.pd;
    if (c) {
        if (!b.C.contains(a.C)) {
            var d = b.C.createTexture(9729),
                c = J4(this, c);
            b.C.Se(d, c);
            a.C = d
        }
    } else a.H.D && (a.C = a.H.D.C.Gi, b.C.wb(a.C));
    if (!this.D) return i;
    if (!b.C.contains(a.F) && (c = a.H.C)) d = b.C.createTexture(9729), b.D.texImage2D(3553, 0, 6409, 6409, 5121, c), b.C.Se(d, c.width * c.height), a.F = d;
    return i
};

v.zb = function (a) {
    return T4.ia.zb.call(this, a.H.C)
};

v.Fg = function (a) {
    var b = a.H.C,
        a = b.width,
        c = b.height,
        d = new Uint8Array(2 * a * c);
    n_a(a, c, d);
    this.D ? S4(this, a, c, d, []) : (b = o_a(b), S4(this, a, c, d, b));
    return 2 * a * (c - 1)
};

v.activate = function () {
    F4(this).C.activate(E4(this))
};

var q_a = function (a, b) {
    var c = y(b) ? b : 1,
        d = c * a.getWidth(),
        c = c * a.getHeight(),
        e = Math.floor(Math.min(d, c * p_a));
    return [Math.floor(Math.max(0, (d - e) / 2)), 0, e, c]
};

var r_a = function (a, b, c) {
    this.C = new K4(this, a, b, c || [], "", "precision highp float;varying vec2 a;uniform mat4 b;uniform vec2 c;uniform vec4 d,e;\\n#ifdef VERTEX_TEXTURES\\nattribute vec2 g;uniform sampler2D f;\\n#else\\nattribute vec3 h;\\n#endif\\nvoid main(){\\n#ifdef VERTEX_TEXTURES\\na=e.xy+g*e.zw;vec2 i=d.xy+(g+.5)*d.zw;float j=texture2D(f,i).x;gl_Position=b*vec4(g.xy,j,1);\\n#else\\na=e.xy+h.xy*e.zw;float j=h.z/255.;gl_Position=b*vec4(h.xy,j,1);\\n#endif\\n}", "precision highp float;varying vec2 a;uniform sampler2D g;uniform float h,i;float l(){if(i==0.)return 1.;else{vec2 j=abs(a-.5)-.5+i;return 1.-length(max(j,0.))/i;}}void main(){vec4 j=texture2D(g,a);float k=l();gl_FragColor=vec4(j.rgb,h*k);}");
    this.Z = a;
    this.qa = L4(this.C, 2, 108, 17);
    this.xa = L4(this.C, 3, 152, 17);
    this.ea = new O4(function (a) {
        return a.ma
    });
    M4(this.C, this.ea);
    this.ha = new O4(function (a) {
        return a.Td
    });
    M4(this.C, this.ha);
    this.Y = new O4(function (a) {
        return a.qo
    });
    M4(this.C, this.Y);
    this.ba = new O4(function (a) {
        return a.ee
    });
    M4(this.C, this.ba);
    this.ca = new O4(function (a) {
        return a.qa
    });
    M4(this.C, this.ca);
    this.ma = new O4(function (a) {
        return a.Va
    });
    M4(this.C, this.ma);
    this.X = new O4(function (a) {
        return a.opacity
    });
    M4(this.C, this.X);
    this.V = new O4(function (a) {
        return a.kf
    });
    M4(this.C, this.V)
};

r_a.prototype.D = function (a) {
    var b = this.Z;
    this.qa.index = b.getAttribLocation(a, "g");
    this.xa.index = b.getAttribLocation(a, "h");
    this.ea.location = b.getUniformLocation(a, "b");
    this.ha.location = b.getUniformLocation(a, "c");
    this.Y.location = b.getUniformLocation(a, "d");
    this.ba.location = b.getUniformLocation(a, "e");
    this.ca.location = b.getUniformLocation(a, "f");
    this.ma.location = b.getUniformLocation(a, "g");
    this.X.location = b.getUniformLocation(a, "h");
    this.V.location = b.getUniformLocation(a, "i")
};

r_a.prototype.F = function (a) {
    switch (a) {
    default:
        return 0
    }
};

var U4 = function (a, b, c, d, e, f, g, j, m) {
    this.Z = a;
    this.Q = b;
    this.M = c;
    this.J = d;
    this.N = e;
    this.oa = f;
    this.wg = g;
    this.C = m;
    this.P = this.N.L;
    this.D = 17664;
    this.L = this.I = this.G = this.F = k;
    this.K = new z4;
    this.U = new l_a(d, this.K);
    b && (a = new M0(A(b.lr, b)), a.Zb(this.oa.qa), a = new M0(A(b.lr, b)), a.Zb(this.P));
    this.C.C.Pa(this.K);
    this.C.C.Rp(this.K);
    b = new K0;
    b.C = A(this.V, this, b);
    b.Zb(this.oa.Ep);
    b = this.C.ra;
    a = b.N.Vh;
    c = [];
    this.F = new P4(this.oa);
    c.push(this.F);
    this.G = new d_a;
    c.push(this.G);
    this.I = new g_a;
    c.push(this.I);
    this.L = new T4(a);
    c.push(this.L);
    b.L = b.L.concat(c);
    var n = b.VB,
        p = b.N,
        q = b.F,
        s = this.Z,
        b = function (a, b) {
            a.init(s, b, q, 35044, p, n)
        };

    b(this.F, k_a);
    b(this.G, f_a);
    b(this.I, h_a);
    b(this.L, r_a)
};

U4.prototype.getContext = r("Z");
U4.prototype.run = function () {
    this.Xp()
};

U4.prototype.Xp = function () {
    var a = this.Z;
    if (a && !a.D.isContextLost()) {
        this.P.get();
        za();
        var b = [],
            c = [];
        this.getData(b, c);
        a.disable(2929);
        a.depthFunc(515);
        a.clearDepth(1);
        a.state.ny(0);
        a.enable(3089);
        if (!a.F.C) {
            var d = this.M.getWidth(),
                e = this.M.getHeight(),
                f = a.ql();
            if (f.width != d || f.height != e) f.width = d, f.height = e, a.viewport(0, 0, d, e), this.Q && this.Q.lr()
        }
        a.clearColor.apply(a, IYa(this.J.C.get(), this.J.mapTypes.get()));
        e = 0 <= this.J.C.get().indexOf(1);
        d = 0 <= this.J.C.get().indexOf(2);
        this.D && a.clear(this.D);
        for (var f = l, g = 0; g < b.length; g++) {
            var j = b[g];
            this.L.pj(j.K, j)
        }
        if (c.length) {
            var g = jXa(this.F, c),
                f = f | 1 == g,
                g = this.oa.Uj.get() == this.oa.ro.get(),
                j = this.G,
                m = s2(this.oa);
            m && (m = 0.9 < Math.abs(m[2]) ? j.G : j.I, m.PM = g, j.pj(m.IG, m))
        }
        if (e && c.length && !f) a: {
            f = this.I;
            g = c[0].iC.C;
            for (j = 0; j < g.length; j++) if (m = g[j], 2 != f.pj(m.K, m)) break a
        }
        if (e = e && c.length) {
            0 != c.length && (f = this.Z, A1(f, l), this.F.yg(), kXa(this.F, c), f.disable(2884));
            if (f = this.oa.Ep.get()) if (f = this.U, g = c[0].C, !g || 0 != g.md.C || f.D == g.md.mg) f = l;
            else {
                f.D = g.md.mg;
                f.C.F = [];
                var m = new Cw(g.md.lng, g.md.lat),
                    j = f.J.W.L,
                    n = f.J.zoom.get();
                p3(j, m.x, m.y, n);
                for (var m = new Cw(j.C, j.D), n = g.md.links.length, p = 0; p < n; p++) {
                    var q = Nz(-g.md.links[p].yawDeg),
                        s = Nz(90 - g.md.links[p].yawDeg),
                        t;
                    b: {
                        var x = g.md.links[p].text,
                            D = g.md.text;
                        t = x.split("/");
                        if (1 == t.length) t = x;
                        else {
                            for (x = 0; x < t.length; ++x) {
                                var I = Eg(t[x]);
                                if (I == D) {
                                    t = I;
                                    break b
                                }
                            }
                            t = Eg(t[0])
                        }
                    }
                    if ("" != t) {
                        x = 0;
                        D = vz("canvas", {
                            height: 100
                        });
                        I = D.getContext("2d");
                        m_a(I);
                        var K = I.measureText(t),
                            x = Math.max(x, K.width);
                        D.width = x;
                        m_a(I);
                        I.strokeText(t, 0, 0);
                        I.fillText(t, 0, 0);
                        q = new Cw(-850 * Math.sin(q), -850 * Math.cos(q));
                        q = new Cw(m.x + q.x, m.y + q.y);
                        t = j;
                        x = f.J.zoom.get();
                        q3(t, q.x, q.y, x);
                        f.C.F.push(new NZa(new Cw(t.lng, t.lat), new Cw(0, 0.5), 23, j, D, s))
                    }
                }
                f = i
            }
            f && (f = this.C.C, this.K.dr(), f.D());
            A1(this.Z, i)
        }
        j = r1(a.state)[2];
        if (b.length) {
            a = this.Z;
            a.enable(2929);
            a.enable(2884);
            this.L.yg();
            f = this.L;
            g = this.M;
            m = j / this.M.getWidth();
            j = f.getContext();
            d && j.RM.apply(j, q_a(g, m));
            for (n = m = 0; n < b.length; ++n) y(b[n].D) && (0 < m && j.clear(256), a2(g, b[n].G, f.F), s0(b2(g), f.F, f.F), f.Rd(b[n].K, b[n]), m++);
            d && j.RM(0, 0, g.getWidth(), g.getHeight());
            a.disable(2929);
            a.disable(2884)
        }
        if (e) {
            b = this.C.ra.ca;
            this.C.ra.ca = 1280;
            var d = this.C,
                a = this.oa,
                J = this.J.W.D,
                M = c[0],
                e = M.C.md,
                Q = Nz(e.lng),
                aa = Nz(e.lat),
                a = 1 == e.C ? u(l) : A(function (a, b) {
                    var c = J1(J, a, b),
                        c = O1(Q, aa, Nz(c.x), Nz(c.y));
                    if (100 < c) return l;
                    var d;
                    this.JM.xo(a, b, n2);
                    p0(M.C.C.K, n2.dir, n2.dir);
                    u0(n2.dir, n2.dir);
                    d = !isFinite(n2.dir[0]) || isNaN(n2.dir[0]) ? 0 : M.C.D.kt(n2.dir);
                    return !d || c < d + 5
                }, a);
            d.jv.nf = a;
            this.C.run();
            this.C.ra.ca = b & 17664;
            this.C.jv.nf = k;
            f = c[0];
            "" != this.oa.Uj.get() && (this.G.yg(), b = this.G, a = !this.oa.M || !this.oa.N ? k : this.oa.ea, e = s2(this.oa), f && (a && e) && (d = 1 == f.C.md.C, b.F = NWa(f), 0.9 < Math.abs(e[2]) ? (f = b.K, g = b.L, X_(g, 0, -e[2], e[1]), u0(g, g), uVa(e, g, f), a0(b.D, f[0], f[1], f[2], 0, g[0], g[1], g[2], 0, e[0], e[1], e[2], 0, a[0], a[1], a[2], 1), a = [], s0(b.F, b.D, a), d && s0(a, o0([], 0.65, 0.65, 1), a), E4(b).transform.C(a), b.Rd(b.G.IG, b.G)) : (f = b.K, g = b.L, X_(f, -e[1], e[0], 0), u0(f, f), uVa(e, f, g), a0(b.D, f[0], f[1], f[2], 0, e[0], e[1], e[2], 0, g[0], g[1], g[2], 0, a[0], a[1], a[2], 1), a = [], s0(b.F, b.D, a), d && s0(a, o0([], 0.65, 1, 0.65), a), E4(b).transform.C(a), b.Rd(b.I.IG, b.I))));
            e = c[0].iC;
            c = this.Z;
            this.I.yg();
            b = this.I;
            if (e != k) {
                d = E4(b);
                a = e.C;
                e.I();
                d.Wq.C(e.G);
                for (e = 0; e < a.length; e++) f = a[e], d.highlight.set(f.N ? 1 : 0), b.Rd(f.K, f)
            }
            c.disable(2884);
            c.disable(2929);
            c.enable(3042);
            c.enable(3089)
        }
    }
};

var s_a = function (a, b, c) {
    var d = a.oa.Q,
        a = d.fg(b).F;
    a || (a = new z2, d.fg(b).F = a);
    if (!a.hasData()) {
        b = a;
        b.H = c;
        if (2 == c.F) {
            var e = c.Tb(),
                d = b.G;
            Z_(d);
            a2(e, d, d, i);
            s0(b2(e), d, d);
            e = c.C;
            r0(d, b.G);
            m0(b.G, -1, 1, -1);
            l0(b.G, 2 / (e.width - 1), -2 / (e.height - 1), 2)
        }
        c.D != k && (b.C = c.D.C.Gi)
    }
    return a
},
    hXa = function (a, b, c, d) {
        b.C || (b.C = new N2(a.Z, l, 9729, 0.25));
        lXa(b.C, c, d);
        b.C.wb()
    };

U4.prototype.V = function (a) {
    a.get() ? this.C.C.ps(this.K) : this.C.C.Rp(this.K)
};

U4.prototype.getData = function (a, b) {
    var c = this.N.getData([], this.C.nn);
    t_a(this, c, a, b)
};

var t_a = function (a, b, c, d) {
    for (var e = 0; e < b.length; e++) {
        var f = b[e];
        0 < f.children.length && t_a(a, f.children, c, d);
        if (f.Oa && f.data) {
            var g = f.Oa;
            8 == g.type ? c.push(s_a(a, g, f.data)) : 3 == g.type && (f = q2(a.oa, g)) && d.push(f)
        }
    }
};

var u_a = function () {
    this.G = ["www.gstatic.com/landmark/tour/"];
    this.F = ["www.gstatic.com/landmark/image/"];
    this.D = ["www.gstatic.com/landmark/depth/"];
    this.C = l
};

var v_a = ea();
v_a.prototype.create = function (a, b, c, d) {
    var e;
    e = d || new u_a;
    d = c.$();
    b3();
    var f = b.C,
        g = e.G.slice(),
        j = e.F.slice(),
        m = e.D.slice(),
        n = [];
    n.push(new V4(d.D, "xdc", y(h) ? [h] : h));
    e.C && (n.push(new W4(g, "xhr")), n.push(new w_a(j, m, "xhr")));
    g = new X4(n);
    j = [];
    m = d.Tb();
    j.push(new Y4(f));
    j.push(new Z4(f));
    j.push(new $4(f));
    e.C && j.push(new a5(f, d));
    var f = new b5(f, j),
        n = new c5(10),
        p = new c5(200),
        q = new c5(0),
        s = new c5(0),
        j = [];
    j[3] = n;
    j[4] = p;
    j[8] = q;
    j[7] = s;
    j = new d5(j);
    m = new m2(m, n, p, q);
    q = new Z2(s, q);
    s = [];
    e.C && s.push(new x_a(q));
    s.push(new e5(m, n, p));
    e = new y_a(q, m);
    s.push(e);
    e = new f5(s);
    e = new g5(g, f, j, e);
    return new U4(a, b, d.Tb(), d, e, m, q, 0, c)
};

var z_a = function (a, b, c, d) {
    w4.call(this, a, b, c, d);
    this.ra = d;
    this.F = k;
    aB(this.ra, "FrameComplete", A(this.G, this))
};

B(z_a, w4);
z_a.prototype.getContext = function () {
    return this.ra.getContext()
};

var A_a = function (a, b, c, d, e) {
    this.Z = a;
    this.G = b;
    this.C = c;
    this.F = d;
    this.D = e
};

A_a.prototype.getContext = r("Z");
A_a.prototype.Tb = r("G");
var i5 = function (a, b) {
    this.C = new B_a(a, !! b);
    0 > h5 && (h5 = a.getParameter(35661) + 33984 - 1, 34015 < h5 && (h5 = 34015));
    C_a(this.C)
},
    h5 = -1,
    s4 = function (a) {
        var b = a.C;
        b.C.C.contains(b.F) || C_a(b);
        b.D || (b.C.activeTexture(h5), a.F());
        return j5(b)
    };

i5.prototype.Eh = function () {
    return this.C.D && this.C.C.C.contains(this.C.F)
};

var B_a = function (a, b) {
    this.C = a;
    this.lh = new Bw(0, 0);
    this.G = b;
    this.F = -1;
    this.D = l
},
    j5 = function (a) {
        a.C.C.wb(a.F);
        return x1(a.C.C, a.F)
    },
    C_a = function (a) {
        var b = a.C;
        b.activeTexture(h5);
        var c = b.createTexture();
        b.bindTexture(3553, c);
        b.texParameteri(3553, 10240, a.G ? 9729 : 9728);
        b.texParameteri(3553, 10241, a.G ? 9729 : 9728);
        b.texParameteri(3553, 10242, 33071);
        b.texParameteri(3553, 10243, 33071);
        a.F = a.C.C.eb.add(c, a.C.C.K, 0, 1);
        a.lh.width = 0;
        a.lh.height = 0;
        a.D = l
    };

B_a.prototype.clear = function () {
    this.C.C.remove(this.F);
    this.lh.width = this.lh.height = 0;
    this.F = -1
};

B_a.prototype.Pf = function (a, b, c) {
    this.C.C.Se(this.F, a * b * c);
    this.lh.width = a;
    this.lh.height = b
};

var k5 = function (a, b, c, d) {
    i5.call(this, d, i);
    this.G = a;
    this.K = b;
    this.L = c;
    this.eb = new L3;
    this.eb.I = b;
    this.D = {};

    this.I = Array(b);
    for (a = 0; a < b; ++a) this.I.push(a)
};

B(k5, i5);
k5.prototype.M = function (a) {
    var b = this.D[a];
    b && (this.I.push(b.D), delete this.D[a])
};

var D_a = function (a, b) {
    var c = a.D[b];
    return c && c.C && c.C.width ? i : l
};

k5.prototype.RH = function (a) {
    a = this.D[a];
    return !a ? -1 : a.D
};

k5.prototype.getSize = function (a) {
    a = this.D[a];
    return !a || !a.C ? k : new Bw(a.C.width, a.C.height)
};

k5.prototype.F = function () {
    var a = this.C.C,
        b = j5(this.C);
    a.activeTexture(h5);
    a.bindTexture(3553, b);
    var b = this.G.width * this.K,
        c = this.G.height;
    if (this.C.lh.width != b || this.C.lh.height != c) z1(a, 6408, b, c, 6408, k), this.C.Pf(b, c, 4);
    var b = i,
        d;
    for (d in this.D) if (c = this.D[d], !c.F) if (c.C || (c.C = v4(this.L, d)), c.C && c.C.width) {
        var e = c.D,
            f = document.createElement("canvas"),
            g = c.C.width,
            j = c.C.height;
        f.width = g + 2;
        f.height = j + 2;
        var m = f.getContext("2d");
        m.drawImage(c.C, 1, 1);
        m.drawImage(c.C, 1, 1 + j);
        m.drawImage(c.C, 1, 1 - j);
        m.drawImage(c.C, 1 + g, 1);
        m.drawImage(c.C, 1 - g, 1);
        m.drawImage(c.C, 1 + g, 1 + j);
        m.drawImage(c.C, 1 - g, 1 + j);
        m.drawImage(c.C, 1 + g, 1 - j);
        m.drawImage(c.C, 1 - g, 1 - j);
        a.D.texSubImage2D(3553, 0, e * this.G.width, 0, 6408, 5121, f);
        c.F = i
    } else b = l;
    this.C.D = b
};

var E_a = function (a) {
    this.C = k;
    this.F = l;
    this.D = -1;
    this.G = a
};

var l5 = function (a, b, c) {
    i5.call(this, a);
    this.I = b;
    this.P = c;
    this.K = k;
    F_a(this);
    this.G = {};

    this.V = a.getParameter(3379);
    this.N = this.D = k;
    this.M = -1;
    this.L = [];
    aB(this.I, "styleUpdate", this.Q, l, this)
};

B(l5, i5);
var F_a = function (a) {
    var b = G_a(a.P);
    a.K = {};

    a.K[b] = i
};

l5.prototype.F = function () {
    var a = this.C.C,
        b = j5(this.C);
    a.activeTexture(h5);
    a.bindTexture(3553, b);
    var b = this.I.C.length,
        c = Math.max(Math.ceil(b / this.V), 1),
        b = Math.min(512 * Math.ceil(b / 512), this.V),
        d = l;
    b != this.C.lh.width && (d = i);
    c = Math.min(26 * c, this.V);
    c != this.C.lh.height && (d = i);
    d && this.C.Pf(b, c, 4);
    for (var e = 4 * b, f = this.I.C.length, g = 0, j = 0; j < f; ++j) {
        var m = this.I.C[j];
        this.K[m] && !this.G[m] && g++
    }
    d = d || 0.1 < g / f;
    m = 4 * b * c;
    d || (m = 104, e = 4);
    this.M < m && (this.N = new Uint8Array(4 * m), this.M = 4 * m, this.L = []);
    g = this.N;
    j = this.L[m];
    j || (this.L[m] = new Uint8Array(g.buffer, 0, m), j = this.L[m]);
    for (var n = 0; n < f; ++n) {
        var p = 26 * Math.floor(n / b);
        if (p + 26 > c) break;
        var q = n % b,
            m = this.I.C[n];
        if (this.K[m]) {
            var s = l,
                t = K3(this.I, m, i);
            if (t) {
                for (var s = t, x = m, D = l, I = s.D.length, K = 0; K < I; ++K) {
                    var J = s.D[K];
                    if (J.D) {
                        this.D || (this.D = new k5(new Bw(64, 64), 16, this.P, this.C.C));
                        var M = this.D,
                            Q = J.D;
                        if (Q in M.D) M.eb.wb(M.D[Q].G);
                        else {
                            var aa = M.eb.add(1, A(M.M, M, Q)); - 1 != aa && (aa = new E_a(aa), aa.C = v4(M.L, Q), aa.D = M.I.pop(), M.D[Q] = aa, M.C.D = l)
                        }
                        D_a(this.D, J.D) || (D = this.I, H_a(D.X, J.D, A(D.N, D, x)), D = i)
                    }
                }
                s = D
            }
            d ? (I_a(t, g, p * e + 4 * q, e, this.D), this.G[m] = !s) : this.G[m] || (I_a(t, g, 0, e, this.D), this.G[m] = !s, a.D.texSubImage2D(3553, 0, q, p, 1, 26, 6408, 5121, j))
        } else d && (this.G[m] = l)
    }
    d && z1(a, 6408, b, c, 6408, j);
    this.C.D = i
};

var I_a = function (a, b, c, d, e) {
    var f = [],
        g = k,
        j = k,
        m = k,
        n = k,
        p = k,
        q = k,
        s = k;
    a && (f = a.C, 0 < a.D.length && (g = a.D[0]), j = a.ef, a.rd && (m = a.rd.strokeStyle, n = a.rd.fillStyle), p = a.xd, q = a.F, s = a.G);
    var t = a = k,
        x = 0;
    1 == f.length ? a = f[0] : 1 < f.length && (a = f[f.length - 2], t = f[f.length - 1], a.width > t.width && (x = a.width - t.width));
    a ? m5(b, c + 0 * d, d, a.C, a.width, x, a.D, a.K, a.I, a.F, a.L, a.G, a.M) : m5(b, c + 0 * d, d, 0, 0, 0, [], l, l, 0, 0, 0, 0);
    t ? m5(b, c + 5 * d, d, t.C, t.width, 0, t.D, t.K, t.I, t.F, t.L, t.G, t.M) : m5(b, c + 5 * d, d, 0, 0, 0, [], l, l, 0, 0, 0, 0);
    g ? (f = c + 11 * d, n5(b, c + 10 * d, g.C), g.D && e && D_a(e, g.D) ? (a = e.RH(g.D), e = e.getSize(g.D), b[f + 0] = e.width, b[f + 1] = e.height, b[f + 2] = a, b[f + 3] = 255 * ip(g.F, 0, 1)) : (b[f + 0] = 0, b[f + 1] = 0, b[f + 2] = 0, b[f + 3] = 0)) : n5(b, c + 10 * d, 0);
    j ? m5(b, c + 12 * d, d, j.C, j.width, 0, j.D, l, l, 0, 0, 0, 0) : m5(b, c + 12 * d, d, 0, 0, 0, [], l, l, 0, 0, 0, 0);
    m ? m5(b, c + 17 * d, d, m.C, m.width, 0, m.D, l, l, 0, 0, 0, 0) : m5(b, c + 17 * d, d, 0, 0, 0, [], l, l, 0, 0, 0, 0);
    n ? n5(b, c + 22 * d, n.C) : n5(b, c + 22 * d, 0);
    p ? n5(b, c + 23 * d, p.C) : n5(b, c + 23 * d, 0);
    q ? n5(b, c + 24 * d, q.C) : n5(b, c + 24 * d, 0);
    j = g = 1;
    s && (g = s.D, j = s.C);
    b[c + 25 * d] = 128 * g;
    b[c + 25 * d + 1] = 255 * j
},
    m5 = function (a, b, c, d, e, f, g, j, m, n, p, q, s) {
        n5(a, b, d);
        a[b + c] = Math.floor(e / 4 % 256);
        a[b + c + 1] = Math.floor(64 * e) % 256;
        a[b + c + 2] = Math.floor(f / 4 % 256);
        a[b + c + 3] = Math.floor(64 * f) % 256;
        g && 0 < g.length ? (a[b + 2 * c] = Math.floor(2 * g[0]), a[b + 2 * c + 1] = Math.floor(2 * (g[0] + g[1]))) : (a[b + 2 * c] = 254, a[b + 2 * c + 1] = 254);
        a[b + 2 * c + 2] = j ? 1 : 0;
        a[b + 2 * c + 3] = m ? 1 : 0;
        d = 0 > s || 65535 < s ? 65535 : s;
        n5(a, b + 3 * c, Math.floor(255 * n) << 8 | Math.floor(8 * q));
        n5(a, b + 4 * c, d << 16 | Math.floor(255 * ip(p, 0, 1)))
    },
    n5 = function (a, b, c) {
        a[b] = c >> 16 & 255;
        a[b + 1] = c >> 8 & 255;
        a[b + 2] = c & 255;
        a[b + 3] = c >> 24 & 255
    };

l5.prototype.Q = function (a) {
    this.G[a.id] = l;
    this.K[a.id] && (this.C.D = l)
};

var J_a = function (a) {
    this.D = a;
    this.C = []
},
    K_a = function (a, b, c) {
        for (var d = 0; d < b.length; ++d) {
            var e = b[d];
            e.C && (e.C.D = c);
            e.Ui && e.Ui.C && (e.Ui.C.D = c);
            e.children && K_a(a, e.children, c)
        }
    },
    L_a = function (a, b, c, d, e) {
        for (var f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g.data && g.Oa && g.C) {
                var j = g.Oa,
                    m = j.da(),
                    n = j.Ic() << 30 - m,
                    p = n + (1 << 30 - m) - 1,
                    q = j.Nc() << 30 - m,
                    m = q + (1 << 30 - m) - 1;
                n < e.left && (e.left = n);
                p > e.right && (e.right = p);
                q < e.top && (e.top = q);
                m > e.bottom && (e.bottom = m);
                g.Ui ? (c[g.Ui.Oa.Bc()] = i, d[j.Bc()] = i) : c[j.Bc()] = i
            }
            g.children && L_a(a, g.children, c, d, e)
        }
    },
    M_a = function (a, b, c, d, e) {
        for (var f = b.slice(), g = b.length = 0; g < f.length; ++g) {
            var j = f[g];
            j.children && M_a(a, j.children, c, d, e);
            var m;
            a: {
                m = a;
                var n = j,
                    p = c,
                    q = e;
                if (!n.data || !n.Oa || !n.C) m = l;
                else {
                    if (n.Ui) {
                        if (d[n.Oa.Bc()]) {
                            m = l;
                            break a
                        }
                    } else if (p[n.Oa.Bc()]) {
                        m = l;
                        break a
                    }
                    var s = n.Oa,
                        t = s.da(),
                        p = s.Ic() << 30 - t,
                        s = s.Nc() << 30 - t;
                    m = p < q.left || p > q.right || s < q.top || s > q.bottom ? l : m.D(n)
                }
            }(m || j.children && j.children.length) && b.push(j)
        }
    };

var o5 = function (a, b) {
    this.C = k;
    this.F = a;
    this.L = b
};

B(o5, A4);
o5.prototype.df = function (a, b) {
    var c = E4(this);
    H4(this, this.L, 0, c.G, c.I);
    H4(this, a.Ih, 1, c.D, c.F);
    o5.ia.df.call(this, a, b)
};

o5.prototype.G = function () {
    return {}
};

var p5 = function (a, b) {
    o5.call(this, a, b);
    this.D = [];
    this.I = [];
    this.K = k
};

B(p5, o5);
var q5 = function (a, b) {
    var c = a.D.length,
        d = b.G(),
        e;
    for (e in d) y(a.I[e]) || (a.I[e] = c);
    a.D.push(b)
},
    N_a = function (a, b) {
        var c = 0;
        if (y(b)) {
            var d = b.xa,
                e;
            for (e in d) d = a.I[e] || 0, c = c > d ? c : d
        }
        return a.D[c]
    };

v = p5.prototype;
v.pj = function (a, b) {
    return N_a(this, b.Hc).pj(a, b)
};

v.yg = function () {
    this.K = k
};

v.Rd = function (a, b) {
    var c = N_a(this, b.Hc);
    this.K != c && (c.yg(), this.K = c);
    return c.Rd(a, b)
};

v.Ot = function (a, b) {
    for (var c = 0; c < this.D.length; c++) if (this.D[c].Ot(a, b)) return i;
    return l
};

v.wf = z;
var r5 = function (a, b) {
    o5.call(this, a, b);
    this.D = new Float32Array(6144)
};

B(r5, o5);
v = r5.prototype;
v.wf = function () {
    var a = F4(this);
    D4(this, E4(this).C, 0, [10]);
    C4(this, a.xa, 5126);
    C4(this, a.V, 5123)
};

v.Fd = "areas";
v.df = function (a, b) {
    r5.ia.df.call(this, a, b);
    var c = E4(this),
        d = this.L.D;
    d && (c.nf[0] = d.K, H4(this, d, 2, c.Nf, c.Jg))
};

v.zb = function (a) {
    for (var b = 0, a = a.Hc, c = a.Jk(), d = 0; d < c; ++d) b += 3 * a.wq(a.Zr(d));
    return b
};

v.Fg = function (a) {
    for (var a = a.Hc, b = 0, c = a.Jk(), d = 0; d < c; ++d) {
        for (var e = a.Zr(d), f = a.wq(e), g = a.Kk(d), j = J3(this.F, a.Qf(g)), m = a.Jr(d), n = a.Gz(e, this.D), e = 3 * f, m = 65535 - m, p = this.C.C, q = p.G, s = p.I, t = p.offset >> 1, x = t >> 1, n = new Int32Array(n.buffer, n.byteOffset), D = 0; D < e; ++D) s[x + 4 * D] = n[2 * D], s[x + 4 * D + 1] = n[2 * D + 1];
        q[t + 4] = g;
        q[t + 5] = j;
        q[t + 6] = m;
        for (D = 1; D < e; ++D) s[x + 4 * D + 2] = s[x + 2], s[x + 4 * D + 3] = s[x + 3];
        p.offset += 16 * e;
        b += 3 * f
    }
    return b
};

var O_a = function (a, b, c) {
    this.C = new K4(this, a, b, c || [], "#define _c 26\\n", "#if _a==1\\nuniform vec3 b;vec4 K(float z){vec4 A=vec4(b,mod(z,256.)/255.);A.z+=mod(floor(z/256.),128.)/255.;return A;}vec4 L(vec4 z,float A){return K(A);}\\n#else\\nvec4 L(vec4 z,float A){return z;}\\n#endif\\nuniform vec2 c,j;uniform sampler2D d;vec2 M(float z,float A){z=(z+.5)/c.x;return vec2(fract(z),(float(_c)*floor(z)+A+.5)/c.y);}\\n#ifdef VERTEX_TEXTURES\\nuniform vec2 e,f;uniform float g;\\n#endif\\n#if _b==1\\nuniform vec2 h;uniform sampler2D i;\\n#ifdef VERTEX_TEXTURES\\nfloat N(vec2 z){float A=(z.x+.5)/h.x;vec2 B=vec2(fract(A),(floor(A)+.5)/h.y);return dot(floor(.5+255.*texture2D(i,B)),vec4(16777216.,65536.,256,1));}\\n#endif\\n#else\\nfloat N(vec2 z){return z.y;}\\n#endif\\nprecision highp float;\\n#ifdef VERTEX_TEXTURES\\nvarying vec4 k;varying float l;\\n#else\\nvarying vec2 p;\\n#endif\\nuniform float r,s,t;attribute vec2 x;attribute vec3 y;uniform mat4 u;void main(){float z,B;z=y.x;vec2 A=y.xy;B=y.z;gl_Position=u*vec4(x,0,1);gl_Position.z=gl_Position.w*(B/65535.-t);\\n#ifdef VERTEX_TEXTURES\\nvec2 C=M(N(A),r);k=L(texture2D(d,C),z);\\n#else\\np=A;\\n#endif\\n#ifdef VERTEX_TEXTURES\\nl=0.;gl_Position.xy*=sign(k.a*abs(s-floor(k.a))+l);\\n#else\\n#endif\\n}", "precision mediump float;\\n#if _a==1\\nuniform vec3 b;vec4 L(float A){vec4 B=vec4(b,mod(A,256.)/255.);B.z+=mod(floor(A/256.),128.)/255.;return B;}vec4 M(vec4 A,float B){return L(B);}\\n#else\\nvec4 M(vec4 A,float B){return A;}\\n#endif\\nuniform vec2 c,e,f;uniform sampler2D d;vec2 N(float A,float B){A=(A+.5)/c.x;return vec2(fract(A),(float(_c)*floor(A)+B+.5)/c.y);}uniform float g,r,s;\\n#if _b==1\\nuniform vec2 h;uniform sampler2D i;\\n#ifndef VERTEX_TEXTURES\\nfloat O(vec2 A){float B=(A.x+.5)/h.x;vec2 C=vec2(fract(B),(floor(B)+.5)/h.y);return dot(floor(.5+255.*texture2D(i,C)),vec4(16777216.,65536.,256,1));}\\n#endif\\n#else\\nfloat O(vec2 A){return A.y;}\\n#endif\\nprecision highp float;\\n#ifdef VERTEX_TEXTURES\\nvarying vec4 k;varying float l;\\n#else\\nvarying vec2 p;\\n#endif\\nvoid main(){float A=0.;vec4 E;\\n#ifdef VERTEX_TEXTURES\\nE=k;A=l;\\n#else\\nvec2 F=N(O(p),r);E=M(texture2D(d,F),p.x);if((E.a==0.||E.a<1.!=s>0.)&&A==0.)discard;\\n#endif\\ngl_FragColor=E;}");
    this.Z = a;
    this.xa = L4(this.C, 2, 788, 17);
    this.V = L4(this.C, 3, 805, 17);
    this.Va = new O4(function (a) {
        return a.M
    });
    M4(this.C, this.Va);
    this.Ka = new O4(function (a) {
        return a.I
    });
    M4(this.C, this.Ka);
    this.Ta = new O4(function (a) {
        return a.G
    });
    M4(this.C, this.Ta);
    this.ca = new O4(function (a) {
        return a.vh
    });
    M4(this.C, this.ca);
    this.ba = new O4(function (a) {
        return a.Jg
    });
    M4(this.C, this.ba);
    this.X = new O4(function (a) {
        return a.nf
    });
    M4(this.C, this.X);
    this.ma = new O4(function (a) {
        return a.F
    });
    M4(this.C, this.ma);
    this.qa = new O4(function (a) {
        return a.D
    });
    M4(this.C, this.qa);
    this.Ba = new O4(function (a) {
        return a.Q
    });
    M4(this.C, this.Ba);
    this.Ja = new O4(function (a) {
        return a.C
    });
    M4(this.C, this.Ja);
    this.ea = new O4(function (a) {
        return a.Ta
    });
    M4(this.C, this.ea);
    this.ha = new O4(function (a) {
        return a.X
    });
    M4(this.C, this.ha);
    this.fb = new O4(function (a) {
        return a.transform
    });
    M4(this.C, this.fb);
    this.Y = new O4(function (a) {
        return a.Nf
    });
    M4(this.C, this.Y);
    N4(this.C, "_a");
    N4(this.C, "_b")
};

O_a.prototype.D = function (a) {
    var b = this.Z;
    this.xa.index = b.getAttribLocation(a, "x");
    this.V.index = b.getAttribLocation(a, "y");
    this.Va.location = b.getUniformLocation(a, "b");
    this.Ka.location = b.getUniformLocation(a, "c");
    this.Ta.location = b.getUniformLocation(a, "d");
    this.ca.location = b.getUniformLocation(a, "e");
    this.ba.location = b.getUniformLocation(a, "f");
    this.X.location = b.getUniformLocation(a, "g");
    this.ma.location = b.getUniformLocation(a, "h");
    this.qa.location = b.getUniformLocation(a, "i");
    this.Ba.location = b.getUniformLocation(a, "j");
    this.Ja.location = b.getUniformLocation(a, "r");
    this.ea.location = b.getUniformLocation(a, "s");
    this.ha.location = b.getUniformLocation(a, "t");
    this.fb.location = b.getUniformLocation(a, "u");
    this.Y.location = b.getUniformLocation(a, "v")
};

O_a.prototype.F = function (a, b) {
    switch (a) {
    case 0:
        return b.K;
    case 1:
        return b.N;
    default:
        return 0
    }
};

var s5 = ea(),
    P_a = new s5,
    Q_a = 1 / 6378137,
    t5 = 2 * Math.atan(Math.exp(Math.PI)) - Math.PI / 2,
    u5 = function (a, b, c, d) {
        b = 2 * Math.atan(Math.exp(b)) - Math.PI / 2;
        c /= Q_a;
        b = ip(b, -t5, t5);
        d[0] = Ty(a);
        d[1] = Ty(b);
        d[2] = c / (1 / Math.cos(b))
    };

s5.prototype.C = function (a, b) {
    var c = Nz(b),
        c = ip(c, -t5, t5);
    return 1 / Math.cos(c) * Q_a
};

var v5 = function (a, b, c, d) {
    c = 2 * Math.PI / (1 << c);
    d[0] = a * c - Math.PI;
    d[1] = -b * c + Math.PI;
    d[2] = 0 * c
},
    R_a = function (a) {
        return 2 * Math.PI / (1 << a)
    };

var w5 = function (a, b) {
    this.C = k;
    this.D = a;
    this.G = b;
    this.F = new Float32Array(2048)
};

B(w5, A4);
v = w5.prototype;
v.wf = function () {
    this.C.D = 1;
    D4(this, E4(this).C, 0, [0]);
    var a = F4(this);
    a.X.Gn = [0, 0, 1];
    C4(this, a.Y, 5126);
    C4(this, a.V, 5123)
};

v.Fd = "building outlines";
v.df = function (a) {
    this.getContext().lineWidth(1);
    var b = E4(this);
    H4(this, this.G, 0, b.G, b.I);
    H4(this, a.Ih, 1, b.D, b.F)
};

v.zb = function (a) {
    for (var a = a.Hc, b = a.Ao(), c = 0, d = 0; d < b; ++d) for (var e = a.ku(d), f = a.wq(e), g = 0; g < f; ++g) {
        var j = a.ap(e, g);
        j & 1 && (c += 6);
        j & 2 && (c += 6);
        j & 4 && (c += 6)
    }
    return c
};

v.Fg = function (a, b) {
    for (var c = a.Hc, d = c.Ao(), e = 0, f = b.count, g = new s5, j = qD(), m = qD(), n = 0; n < d; ++n) {
        var p = c.ku(n),
            q = c.wq(p),
            s = c.ju(n),
            t = J3(this.D, c.Qf(s)),
            x = c.$z(n);
        v5(c.$g(), c.ah(), c.da(), j);
        u5(j[0], j[1], j[2], m);
        var D = g.C(m[0], m[1], m[2]),
            I = R_a(c.da()),
            x = 256 * (x * D / I);
        if (0 < f) for (D = 0; D < q; ++D) I = c.ap(p, D), I & 1 && (f -= 6), I & 2 && (f -= 6), I & 4 && (f -= 6);
        else
        for (var K = c.Gz(p, this.F), D = 0; D < q; ++D) {
            var I = c.ap(p, D),
                J = K[6 * D],
                M = K[6 * D + 1],
                Q = K[6 * D + 2],
                aa = K[6 * D + 3],
                ba = K[6 * D + 4],
                ia = K[6 * D + 5];
            I & 1 && (S_a(this, J, M, Q, aa, x, s, t), e += 6);
            I & 2 && (S_a(this, Q, aa, ba, ia, x, s, t), e += 6);
            I & 4 && (S_a(this, ba, ia, J, M, x, s, t), e += 6)
        }
    }
    return e
};

var S_a = function (a, b, c, d, e, f, g, j) {
    a.Lb(b, c, 0, g, j);
    a.Lb(b, c, f, g, j);
    a.Lb(b, c, 0, g, j);
    a.Lb(d, e, 0, g, j);
    a.Lb(b, c, f, g, j);
    a.Lb(d, e, f, g, j)
};

var x5 = function (a, b, c) {
    this.C = new K4(this, a, b, c || [], "#define _c 26\\n", "#if _a==1\\nuniform vec3 a;\\n#else\\n#endif\\nuniform vec2 b;uniform sampler2D c;vec2 r(float n,float o){n=(n+.5)/b.x;return vec2(fract(n),(float(_c)*floor(n)+o+.5)/b.y);}\\n#if _b==1\\nuniform vec2 d;uniform sampler2D e;\\n#ifdef VERTEX_TEXTURES\\nfloat s(vec2 n){float o=(n.x+.5)/d.x;vec2 p=vec2(fract(o),(floor(o)+.5)/d.y);return dot(floor(.5+255.*texture2D(e,p)),vec4(16777216.,65536.,256,1));}\\n#endif\\n#else\\nfloat s(vec2 n){return n.y;}\\n#endif\\nuniform float f,g,j;varying vec2 h;attribute vec3 k;attribute vec3 l;attribute vec2 m;uniform mat4 i;void main(){vec2 n,o;n=normalize(vec2(sin(j),cos(j)));o=k.z/tan(g)*n;o/=2.;h=m;vec3 p=vec3(k.xy+o,0);gl_Position=i*vec4(p,1);\\n#ifdef VERTEX_TEXTURES\\nvec4 q=texture2D(c,r(s(m),f));gl_Position*=ceil(q.a);\\n#endif\\n}", "precision mediump float;\\n#if _a==1\\nuniform vec3 a;\\n#else\\n#endif\\nuniform vec2 b;uniform sampler2D c;vec2 n(float k,float l){k=(k+.5)/b.x;return vec2(fract(k),(float(_c)*floor(k)+l+.5)/b.y);}\\n#if _b==1\\nuniform vec2 d;uniform sampler2D e;\\n#ifndef VERTEX_TEXTURES\\nfloat o(vec2 k){float l=(k.x+.5)/d.x;vec2 m=vec2(fract(l),(floor(l)+.5)/d.y);return dot(floor(.5+255.*texture2D(e,m)),vec4(16777216.,65536.,256,1));}\\n#endif\\n#else\\nfloat o(vec2 k){return k.y;}\\n#endif\\nprecision highp float;uniform float f,g;varying vec2 h;void main(){\\n#if _a==1\\ndiscard;\\n#endif\\nfloat k,l;\\n#ifndef VERTEX_TEXTURES\\nk=ceil(texture2D(c,n(o(h),f)).a);\\n#else\\nk=1.;\\n#endif\\nl=g/(.5*3.1416);gl_FragColor=vec4(0,.18,.33,min(.06,.75*l)*ceil(k));}");
    this.Z = a;
    this.ha = L4(this.C, 3, 468, 17);
    this.ea = L4(this.C, 3, 485, 17);
    this.X = L4(this.C, 2, 502, 17);
    this.Ba = new O4(function (a) {
        return a.M
    });
    M4(this.C, this.Ba);
    this.qa = new O4(function (a) {
        return a.I
    });
    M4(this.C, this.qa);
    this.xa = new O4(function (a) {
        return a.G
    });
    M4(this.C, this.xa);
    this.Y = new O4(function (a) {
        return a.F
    });
    M4(this.C, this.Y);
    this.ba = new O4(function (a) {
        return a.D
    });
    M4(this.C, this.ba);
    this.ma = new O4(function (a) {
        return a.C
    });
    M4(this.C, this.ma);
    this.V = new O4(function (a) {
        return a.Yq
    });
    M4(this.C, this.V);
    this.Ja = new O4(function (a) {
        return a.transform
    });
    M4(this.C, this.Ja);
    this.ca = new O4(function (a) {
        return a.ba
    });
    M4(this.C, this.ca);
    N4(this.C, "_a");
    N4(this.C, "_b")
};

x5.prototype.D = function (a) {
    var b = this.Z;
    this.ha.index = b.getAttribLocation(a, "k");
    this.ea.index = b.getAttribLocation(a, "l");
    this.X.index = b.getAttribLocation(a, "m");
    this.Ba.location = b.getUniformLocation(a, "a");
    this.qa.location = b.getUniformLocation(a, "b");
    this.xa.location = b.getUniformLocation(a, "c");
    this.Y.location = b.getUniformLocation(a, "d");
    this.ba.location = b.getUniformLocation(a, "e");
    this.ma.location = b.getUniformLocation(a, "f");
    this.V.location = b.getUniformLocation(a, "g");
    this.Ja.location = b.getUniformLocation(a, "i");
    this.ca.location = b.getUniformLocation(a, "j")
};

x5.prototype.F = function (a, b) {
    switch (a) {
    case 0:
        return b.K;
    case 1:
        return b.N;
    default:
        return 0
    }
};

var y5 = function (a, b) {
    this.C = k;
    this.F = a;
    this.I = b;
    this.G = new Float32Array(2048)
};

B(y5, A4);
v = y5.prototype;
v.wf = function () {
    D4(this, E4(this).C, 0, [10]);
    if (F4(this) instanceof x5) {
        var a = F4(this);
        C4(this, a.ha, 5126);
        C4(this, a.ea, 5120);
        C4(this, a.X, 5123)
    } else a = F4(this), C4(this, a.Y, 5126), C4(this, a.X, 5120), C4(this, a.V, 5123)
};

v.Fd = "buildings";
v.df = function (a) {
    var b = E4(this);
    H4(this, this.I, 0, b.G, b.I);
    H4(this, a.Ih, 1, b.D, b.F)
};

v.zb = function (a) {
    for (var a = a.Hc, b = a.Ao(), c = 0, d = 0; d < b; ++d) for (var e = a.ku(d), f = a.wq(e), g = 0; g < f; ++g) {
        var j = a.ap(e, g),
            c = c + 3;
        j & 1 && (c += 6);
        j & 2 && (c += 6);
        j & 4 && (c += 6)
    }
    return c
};

v.Fg = function (a, b) {
    for (var c = a.Hc, d = c.Ao(), e = 0, f = b.count, g = new s5, j = qD(), m = qD(), n = 0; n < d; ++n) {
        var p = c.ku(n),
            q = c.wq(p),
            s = c.ju(n),
            t = J3(this.F, c.Qf(s)),
            x = c.$z(n);
        v5(c.$g(), c.ah(), c.da(), j);
        u5(j[0], j[1], j[2], m);
        var D = g.C(m[0], m[1], m[2]),
            I = R_a(c.da()),
            x = 256 * (x * D / I);
        if (0 < f) for (D = 0; D < q; ++D) I = c.ap(p, D), f -= 3, I & 1 && (f -= 6), I & 2 && (f -= 6), I & 4 && (f -= 6);
        else
        for (var K = c.Gz(p, this.G), D = 0; D < q; ++D) {
            var I = c.ap(p, D),
                J = K[6 * D],
                M = K[6 * D + 1],
                Q = K[6 * D + 2],
                aa = K[6 * D + 3],
                ba = K[6 * D + 4],
                ia = K[6 * D + 5];
            this.Lb(J, M, x, 0, 0, 1, s, t);
            this.Lb(Q, aa, x, 0, 0, 1, s, t);
            this.Lb(ba, ia, x, 0, 0, 1, s, t);
            e += 3;
            I & 1 && (T_a(this, J, M, Q, aa, x, s, t), e += 6);
            I & 2 && (T_a(this, Q, aa, ba, ia, x, s, t), e += 6);
            I & 4 && (T_a(this, ba, ia, J, M, x, s, t), e += 6)
        }
    }
    return e
};

var T_a = function (a, b, c, d, e, f, g, j) {
    var m = e - c,
        n = b - d,
        p = Math.sqrt(m * m + n * n),
        m = m * (127 / p),
        n = n * (127 / p);
    a.Lb(d, e, 0, m, n, 0, g, j);
    a.Lb(b, c, f, m, n, 0, g, j);
    a.Lb(b, c, 0, m, n, 0, g, j);
    a.Lb(b, c, f, m, n, 0, g, j);
    a.Lb(d, e, 0, m, n, 0, g, j);
    a.Lb(d, e, f, m, n, 0, g, j)
};

var z5 = function (a, b, c) {
    this.C = new K4(this, a, b, c || [], "#define _c 26\\n", "#if _a==1\\nuniform vec3 a;\\n#else\\n#endif\\nuniform vec2 b;uniform sampler2D c;vec2 v(float o,float p){o=(o+.5)/b.x;return vec2(fract(o),(float(_c)*floor(o)+p+.5)/b.y);}\\n#if _b==1\\nuniform vec2 d;uniform sampler2D e;\\n#ifdef VERTEX_TEXTURES\\nfloat w(vec2 o){float p=(o.x+.5)/d.x;vec2 q=vec2(fract(p),(floor(p)+.5)/d.y);return dot(floor(.5+255.*texture2D(e,q)),vec4(16777216.,65536.,256,1));}\\n#endif\\n#else\\nfloat w(vec2 o){return o.y;}\\n#endif\\nuniform float f,g;varying vec2 h;\\n#ifdef VERTEX_TEXTURES\\nvarying vec4 i;\\n#else\\nvarying vec3 j;\\n#endif\\nvec4 x(vec4 o,float p,vec3 q){vec3 r,s,t;r=normalize(vec3(sin(p),cos(p),0));s=vec3(1.08,1.09,1.02);t=vec3(.82,.84,.93);float u=dot(q,r);o.rgb*=mix(mix(t,s,clamp((u+.05)*10.,0.,1.)),vec3(1),float(q.z>.25));return o;}attribute vec3 l;attribute vec3 m;attribute vec2 n;uniform mat4 k;void main(){gl_Position=k*vec4(l,1);vec4 o=k*vec4(l.xy,0,1);float p=clamp((o.z+o.w)/(o.w-gl_Position.w+o.z-gl_Position.z+.001),0.,1.);gl_Position=k*vec4(l.xy,p*l.z,1);\\n#ifdef VERTEX_TEXTURES\\nvec4 q=texture2D(c,v(w(n),g));i=x(q,f,normalize(m));\\n#else\\nj=normalize(m);\\n#endif\\nh=n;}", "precision mediump float;\\n#if _a==1\\nuniform vec3 a;vec4 s(float l){vec4 m=vec4(a,mod(l,256.)/255.);m.z+=mod(floor(l/256.),128.)/255.;return m;}vec4 t(vec4 l,float m){return s(m);}\\n#else\\nvec4 t(vec4 l,float m){return l;}\\n#endif\\nuniform vec2 b;uniform sampler2D c;vec2 u(float l,float m){l=(l+.5)/b.x;return vec2(fract(l),(float(_c)*floor(l)+m+.5)/b.y);}\\n#if _b==1\\nuniform vec2 d;uniform sampler2D e;\\n#ifndef VERTEX_TEXTURES\\nfloat v(vec2 l){float m=(l.x+.5)/d.x;vec2 n=vec2(fract(m),(floor(m)+.5)/d.y);return dot(floor(.5+255.*texture2D(e,n)),vec4(16777216.,65536.,256,1));}\\n#endif\\n#else\\nfloat v(vec2 l){return l.y;}\\n#endif\\nprecision highp float;uniform float f,g;varying vec2 h;\\n#ifdef VERTEX_TEXTURES\\nvarying vec4 i;\\n#else\\nvarying vec3 j;\\n#endif\\nvec4 w(vec4 l,float m,vec3 n){vec3 o,p,q;o=normalize(vec3(sin(m),cos(m),0));p=vec3(1.08,1.09,1.02);q=vec3(.82,.84,.93);float r=dot(n,o);l.rgb*=mix(mix(q,p,clamp((r+.05)*10.,0.,1.)),vec3(1),float(n.z>.25));return l;}void main(){\\n#ifdef VERTEX_TEXTURES\\ngl_FragColor=t(i,h.x);\\n#else\\nvec4 l=texture2D(c,u(v(h),g));gl_FragColor=w(l,f,j);\\n#endif\\n}");
    this.Z = a;
    this.Y = L4(this.C, 3, 750, 17);
    this.X = L4(this.C, 3, 767, 17);
    this.V = L4(this.C, 2, 784, 17);
    this.xa = new O4(function (a) {
        return a.M
    });
    M4(this.C, this.xa);
    this.ma = new O4(function (a) {
        return a.I
    });
    M4(this.C, this.ma);
    this.qa = new O4(function (a) {
        return a.G
    });
    M4(this.C, this.qa);
    this.ba = new O4(function (a) {
        return a.F
    });
    M4(this.C, this.ba);
    this.ca = new O4(function (a) {
        return a.D
    });
    M4(this.C, this.ca);
    this.ea = new O4(function (a) {
        return a.ba
    });
    M4(this.C, this.ea);
    this.ha = new O4(function (a) {
        return a.C
    });
    M4(this.C, this.ha);
    this.Ba = new O4(function (a) {
        return a.transform
    });
    M4(this.C, this.Ba);
    N4(this.C, "_a");
    N4(this.C, "_b")
};

z5.prototype.D = function (a) {
    var b = this.Z;
    this.Y.index = b.getAttribLocation(a, "l");
    this.X.index = b.getAttribLocation(a, "m");
    this.V.index = b.getAttribLocation(a, "n");
    this.xa.location = b.getUniformLocation(a, "a");
    this.ma.location = b.getUniformLocation(a, "b");
    this.qa.location = b.getUniformLocation(a, "c");
    this.ba.location = b.getUniformLocation(a, "d");
    this.ca.location = b.getUniformLocation(a, "e");
    this.ea.location = b.getUniformLocation(a, "f");
    this.ha.location = b.getUniformLocation(a, "g");
    this.Ba.location = b.getUniformLocation(a, "k")
};

z5.prototype.F = function (a, b) {
    switch (a) {
    case 0:
        return b.K;
    case 1:
        return b.N;
    default:
        return 0
    }
};

var U_a = function (a, b, c) {
    this.C = new K4(this, a, b, c || [], "#define _c 26\\n#define _d 8\\n", "#if _a==1\\nuniform vec3 a;vec4 D(float u){vec4 v=vec4(a,mod(u,256.)/255.);v.z+=mod(floor(u/256.),128.)/255.;return v;}vec4 E(vec4 u,float v){return D(v);}\\n#else\\nvec4 E(vec4 u,float v){return u;}\\n#endif\\nuniform vec2 b,f;uniform sampler2D c;vec2 F(float u,float v){u=(u+.5)/b.x;return vec2(fract(u),(float(_c)*floor(u)+v+.5)/b.y);}vec2 G(){return vec2(0,1./b.y);}\\n#if _b==1\\nuniform vec2 d;uniform sampler2D e;\\n#ifdef VERTEX_TEXTURES\\nfloat H(vec2 u){float v=(u.x+.5)/d.x;vec2 w=vec2(fract(v),(floor(v)+.5)/d.y);return dot(floor(.5+255.*texture2D(e,w)),vec4(16777216.,65536.,256,1));}\\n#endif\\n#else\\nfloat H(vec2 u){return u.y;}\\n#endif\\n#ifdef VERTEX_TEXTURES\\nvec4 I(vec2 u,vec2 v){return vec4(127.5,127.5,255,255)*texture2D(c,u+2.*v);}vec2 J(vec2 u,vec2 v){vec4 w=255./64.*texture2D(c,u+v);return 256.*w.rb+w.ga;}\\n#endif\\nvarying float g;\\n#ifdef VERTEX_TEXTURES\\nvarying vec4 h,i;\\n#else\\nvarying vec2 j;\\n#endif\\nuniform float k,l,m,n,p;attribute vec2 q;attribute vec3 r;\\n#ifndef VERTEX_TEXTURES\\nattribute vec4 s;\\n#endif\\nattribute vec2 t;uniform mat4 o;\\n#ifndef VERTEX_TEXTURES\\nvec2 K(){return mix(s.xy,s.zw,float(n>0.))/float(_d);}\\n#endif\\nvec4 L(vec2 u,vec2 v,vec2 w){vec4 x=o*vec4(q,0,1);return x;}vec4 M(vec4 u){return vec4(u.xy/u.w,mix(t.x,t.y,float(n>.5))-m,1);}void N(vec2 u,vec4 v){gl_PointSize=p*(u.y+(u.x-u.y)/v.w);gl_PointSize*=step(gl_PointSize,l);}void main(){float u,w;u=r.x;vec2 v,x,y,z;v=r.xy;w=r.z;\\n#ifdef VERTEX_TEXTURES\\ny=F(H(v),k);z=G();x=J(y,z);\\n#else\\nx=K();j=v;\\n#endif\\nvec4 A=L(y,z,x);N(x,A);gl_Position=M(A);g=w;\\n#ifdef VERTEX_TEXTURES\\nh=E(texture2D(c,y),u);i=I(y,z);\\n#endif\\n}", "precision mediump float;\\n#if _a==1\\nuniform vec3 a;vec4 w(float q){vec4 r=vec4(a,mod(q,256.)/255.);r.z+=mod(floor(q/256.),128.)/255.;return r;}vec4 x(vec4 q,float r){return w(r);}\\n#else\\nvec4 x(vec4 q,float r){return q;}\\n#endif\\nuniform vec2 b;uniform sampler2D c;vec2 y(float q,float r){q=(q+.5)/b.x;return vec2(fract(q),(float(_c)*floor(q)+r+.5)/b.y);}vec2 z(){return vec2(0,1./b.y);}\\n#if _b==1\\nuniform vec2 d;uniform sampler2D e;\\n#ifndef VERTEX_TEXTURES\\nfloat A(vec2 q){float r=(q.x+.5)/d.x;vec2 s=vec2(fract(r),(floor(r)+.5)/d.y);return dot(floor(.5+255.*texture2D(e,s)),vec4(16777216.,65536.,256,1));}\\n#endif\\n#else\\nfloat A(vec2 q){return q.y;}\\n#endif\\nvec4 B(vec2 q,vec2 r){return vec4(127.5,127.5,255,255)*texture2D(c,q+2.*r);}varying float g;\\n#ifdef VERTEX_TEXTURES\\nvarying vec4 h,i;\\n#else\\nvarying vec2 j;\\n#endif\\nuniform float k;void C(float q){float r=length(gl_PointCoord-.5);q*=step(r,.5);if(q==0.)discard;}vec4 D(vec4 q){return q;}void main(){vec4 q,r;\\n#ifdef VERTEX_TEXTURES\\nq=h;r=i;\\n#else\\nvec2 s,t;s=y(A(j),k);t=z();q=x(texture2D(c,s),j.x);r=B(s,t);\\n#endif\\nfloat u,v;u=step(252.,r.r+r.g);v=u*(g>.5?r.b:g<-.5?1.:r.a);C(v);gl_FragColor=D(q);}");
    this.Z = a;
    this.Q = L4(this.C, 2, 925, 17);
    this.L = L4(this.C, 3, 942, 17);
    this.I = L4(this.C, 4, 984, 17);
    this.G = L4(this.C, 2, 1009, 17);
    this.Ba = new O4(function (a) {
        return a.M
    });
    M4(this.C, this.Ba);
    this.qa = new O4(function (a) {
        return a.I
    });
    M4(this.C, this.qa);
    this.xa = new O4(function (a) {
        return a.G
    });
    M4(this.C, this.xa);
    this.X = new O4(function (a) {
        return a.F
    });
    M4(this.C, this.X);
    this.Y = new O4(function (a) {
        return a.D
    });
    M4(this.C, this.Y);
    this.ea = new O4(function (a) {
        return a.Q
    });
    M4(this.C, this.ea);
    this.ma = new O4(function (a) {
        return a.C
    });
    M4(this.C, this.ma);
    this.ba = new O4(function (a) {
        return a.maxWidth
    });
    M4(this.C, this.ba);
    this.V = new O4(function (a) {
        return a.X
    });
    M4(this.C, this.V);
    this.ha = new O4(function (a) {
        return a.P
    });
    M4(this.C, this.ha);
    this.Ja = new O4(function (a) {
        return a.transform
    });
    M4(this.C, this.Ja);
    this.ca = new O4(function (a) {
        return a.L
    });
    M4(this.C, this.ca);
    N4(this.C, "_a");
    N4(this.C, "_b")
};

U_a.prototype.D = function (a) {
    var b = this.Z;
    this.Q.index = b.getAttribLocation(a, "q");
    this.L.index = b.getAttribLocation(a, "r");
    this.I.index = b.getAttribLocation(a, "s");
    this.G.index = b.getAttribLocation(a, "t");
    this.Ba.location = b.getUniformLocation(a, "a");
    this.qa.location = b.getUniformLocation(a, "b");
    this.xa.location = b.getUniformLocation(a, "c");
    this.X.location = b.getUniformLocation(a, "d");
    this.Y.location = b.getUniformLocation(a, "e");
    this.ea.location = b.getUniformLocation(a, "f");
    this.ma.location = b.getUniformLocation(a, "k");
    this.ba.location = b.getUniformLocation(a, "l");
    this.V.location = b.getUniformLocation(a, "m");
    this.ha.location = b.getUniformLocation(a, "n");
    this.Ja.location = b.getUniformLocation(a, "o");
    this.ca.location = b.getUniformLocation(a, "p")
};

U_a.prototype.F = function (a, b) {
    switch (a) {
    case 0:
        return b.K;
    case 1:
        return b.N;
    default:
        return 0
    }
};

var V_a = function (a) {
    this.C = a;
    this.D = (this.C[1] & 1) << 1 | (this.C[2] & 128) >> 7;
    this.G = (this.C[0] & 248) >> 3;
    this.I = (this.C[0] & 7) << 2 | (this.C[1] & 192) >> 6;
    this.K = (this.C[1] & 62) >> 1;
    this.F = (this.C[2] & 127) << 8 | this.C[3]
};

var YZa = function (a, b) {
    this.C = a;
    this.G = -1;
    this.nh = k;
    this.F = 0;
    this.L = b;
    this.I = b.length;
    this.D = 1;
    for (var c = 0; c < this.I; c++) this.D = Math.max(this.L[c] + 1, this.D);
    this.K = Math.floor(65536 / this.D)
};

YZa.prototype.bind = function () {
    var a = this.C.C.eb.get(this.G);
    a && (this.C.C.wb(this.G), this.C.bindBuffer(34963, a))
};

YZa.prototype.Rd = function (a, b) {
    this.bind();
    b = Math.min(b, this.F * this.D);
    this.C.drawElements(a, b * this.I / this.D, 5123, 0);
    return b
};

var W_a = fa("Z");
var A5 = function (a, b, c) {
    this.C = k;
    this.F = a;
    this.G = b;
    this.D = c || {
        jy: i
    }
};

B(A5, A4);
v = A5.prototype;
v.lu = B4;
v.wf = function () {
    var a = F4(this);
    C4(this, a.Ja, 5126);
    C4(this, a.Va, 5126);
    C4(this, a.Y, 5126);
    C4(this, a.ea, 5122, i);
    C4(this, a.ha, 5123);
    C4(this, a.ba, 5121);
    this.D.Vh || (C4(this, a.V, 5120, i), C4(this, a.Ta, 5126))
};

v.Fd = "iconBuf";
v.df = function (a, b) {
    var c = E4(this);
    H4(this, a.Ry, 3, c.ca, k);
    H4(this, a.At, 2, c.U, c.V);
    H4(this, this.G, 0, c.G, c.I);
    H4(this, a.Ih, 1, c.D, c.F);
    c.Dk.set(this.D.jy);
    this.getContext().state.zo(1, 771);
    A5.ia.df.call(this, a, b)
};

v.Ur = function (a) {
    var a = a.Ry,
        b = a.Eh();
    b && j5(a.C);
    return !b
};

v.ew = function (a) {
    s4(a.Ry);
    return i
};

v.dw = function (a) {
    return a.Ry.M >= a.Sg.yV
};

v.zb = function (a) {
    return 4 * a.Sg.fv.length
};

v.Fg = function (a) {

    a.Sg.yV = za();
    var b = a.Sg.fv,
        c = a.Ry,
        a = a.Hc;
    b.sort(function (a, b) {
        return b.gg - a.gg
    });
    for (var d = b.length, e = 0; e < d; ++e) {
        var f = b[e],
            g = f.Ed,
            j;
        var m = c;
        j = g.iconUrl;
        m.G[j] ? j = new JB(0, 0, 0, 0) : (m.C.D || s4(m), (j = m.I[j]) ? (j = LB(j), j.left *= 32767 / m.D, j.right *= 32767 / m.D, j.top *= 32767 / m.K, j.bottom *= 32767 / m.K) : j = k);
        var m = J3(this.F, a.Qf(f.fd)),
            n = g.L;
        if (n) {
            var p, q;
            (q = g.iconSize) ? p = q.width : (q = c.rv(g.iconUrl), p = q.width);
            q = q.height;
            p = (j.right - j.left) / p;
            q = (j.bottom - j.top) / q;
            j.left += n.left * p;
            j.top += n.top * q;
            j.right = j.left + n.width * p;
            j.bottom = j.top + n.height * q
        }
        n = f.Wd.Sy;
        p = f.Wd.Ty;
        q = f.Wd.altitude;
        var s = f.Wd.Lv,
            t = f.Wd.Mv,
            x = g.width,
            D = -0.5 * g.height,
            I = -D,
            K = (j.right + j.left) / 2,
            J = (j.top + j.bottom) / 2,
            M = j.left - K,
            Q = j.top - J,
            aa = j.right - K;
        j = j.bottom - J;
        this.Lb(n, p, q, s, t, 0, I, K, J, M, j, f.fd, m, f.Pk, f.Qg ? 1 : 0, -128, 127, g.cf, g.Vg);
        this.Lb(n, p, q, s, t, 0, D, K, J, M, Q, f.fd, m, f.Pk, f.Qg ? 1 : 0, -128, -128, g.cf, g.Vg);
        this.Lb(n, p, q, s, t, x, D, K, J, aa, Q, f.fd, m, f.Pk, f.Qg ? 1 : 0, 127, -128, g.cf, g.Vg);
        this.Lb(n, p, q, s, t, x, I, K, J, aa, j, f.fd, m, f.Pk, f.Qg ? 1 : 0, 127, 127, g.cf, g.Vg)
    }
    return 4 * d
};

var B5 = function (a) {
    i5.call(this, a);
    this.I = k;
    this.L = A(this.K, this);
    this.G = this.D = 0
};

B(B5, i5);
B5.prototype.K = function (a) {
    var b = 4 * a.Pk,
        c = 0;
    0 < a.C && (c |= 31 * a.C);
    a.I && (c |= 32);
    a.G && (c |= 64);
    this.I[b] = c;
    var c = a.Ed,
        a = c.cf,
        c = c.Vg,
        b = b + 1,
        d = this.I;
    if (y(a) && y(c)) {
        var a = 2 * (a - -1023),
            c = 2 * (c - -1023),
            e = Math.floor(c / 16),
            c = 16 * (a % 16) | c % 16;
        d[b] = Math.floor(a / 16);
        d[b + 1] = e;
        d[b + 2] = c
    }
    this.C.D = l
};

B5.prototype.initialize = function (a) {
    0 < a.C ? (this.D = Math.min(64, a.C), this.G = Math.ceil(a.C / this.D)) : this.G = this.D = 1;
    this.I = new Uint8Array(4 * this.D * this.G);
    C5(this, a.ir);
    C5(this, a.jt);
    C5(this, a.fv);
    C5(this, a.vy);
    C5(this, a.xy)
};

var C5 = function (a, b) {
    for (var c = 0; c < b.length; c++) a.K(b[c]), b[c].L = a.L
};

B5.prototype.F = function () {
    var a = this.C.C,
        b = j5(this.C);
    this.C.Pf(this.D, this.G, 4);
    a.activeTexture(h5);
    a.bindTexture(3553, b);
    z1(a, 6408, this.D, this.G, 6408, this.I);
    this.C.D = i
};

var X_a = function (a, b, c) {
    this.C = new K4(this, a, b, c || [], "#define _c 26\\n#define _d -1023\\n#define _e 25\\n#define _f 128\\n", "#if _a==1\\nuniform vec3 a;\\n#else\\n#endif\\nuniform vec2 b,g,h;uniform sampler2D c,f;vec2 J(float A,float B){A=(A+.5)/b.x;return vec2(fract(A),(float(_c)*floor(A)+B+.5)/b.y);}\\n#if _b==1\\nuniform vec2 d;uniform sampler2D e;\\n#ifdef VERTEX_TEXTURES\\nfloat K(vec2 A){float B=(A.x+.5)/d.x;vec2 C=vec2(fract(B),(floor(B)+.5)/d.y);return dot(floor(.5+255.*texture2D(e,C)),vec4(16777216.,65536.,256,1));}\\n#endif\\n#else\\nfloat K(vec2 A){return A.y;}\\n#endif\\n#ifdef VERTEX_TEXTURES\\nvec4 L(float A){A=(A+.5)/g.x;return floor(.5+255.*texture2D(f,vec2(fract(A),(floor(A)+.5)/g.y)));}float M(vec4 A){return mod(A.r,32.)/31.;}float N(vec4 A){float B=A.g*16.+floor(A.a/16.);return B/2.+float(_d);}float O(vec4 A){float B=A.b*16.+mod(A.a,16.);return B/2.+float(_d);}vec2 P(vec4 A){return vec2(N(A),O(A));}\\n#endif\\nvec2 Q(vec4 A,vec2 B,vec2 C,bool D){vec2 E,F,G,H,I;E=h/2.;F=mod(h,2.)/2.;G=E*A.xy/A.w;H=G+B*vec2(1,-1);I=floor(H+.5-F)+F;I+=(1.-float(D))*(H-I);I+=C*vec2(1,-1);return I*A.w/E;}varying vec2 i;varying vec3 j;\\n#ifdef VERTEX_TEXTURES\\nvarying float k;\\n#else\\nvarying vec2 l,m,n;\\n#endif\\nattribute vec3 s;attribute vec2 t;attribute vec2 u;attribute vec4 v;attribute vec3 w;attribute float x;\\n#ifndef VERTEX_TEXTURES\\nattribute vec2 y;attribute vec2 z;\\n#endif\\nuniform mat4 o;uniform float p;uniform bool q;uniform mat2 r;void main(){gl_Position=o*vec4(s,1);vec2 A,C;A=r*t;float B=1.;C=A+u;\\n#ifdef VERTEX_TEXTURES\\nvec2 D=texture2D(c,J(K(w.xy),float(_e))).rg;B=D.r/float(_f)*255.;k=D.g;i=v.xy+v.zw;vec4 E=L(w.z);C+=P(E);\\n#else\\ni=v.xy;l=v.zw;m=y;C+=z;n=z;\\n#endif\\ngl_Position.xy=Q(gl_Position,C,C*(B-1.),q);j=w;gl_Position.xy*=mod(floor(p/(1.+x)),2.);\\n#ifdef VERTEX_TEXTURES\\nfloat F=M(E);gl_Position.xy*=sign(F);k*=F;\\n#endif\\n}", "precision mediump float;\\n#if _a==1\\nuniform vec3 a;vec4 B(float t){vec4 u=vec4(a,mod(t,256.)/255.);u.z+=mod(floor(t/256.),128.)/255.;return u;}vec4 C(vec4 t,float u){return B(u);}\\n#else\\nvec4 C(vec4 t,float u){return t;}\\n#endif\\nuniform vec2 b,g;uniform sampler2D c,f,s;vec2 D(float t,float u){t=(t+.5)/b.x;return vec2(fract(t),(float(_c)*floor(t)+u+.5)/b.y);}\\n#if _b==1\\nuniform vec2 d;uniform sampler2D e;\\n#ifndef VERTEX_TEXTURES\\nfloat E(vec2 t){float u=(t.x+.5)/d.x;vec2 v=vec2(fract(u),(floor(u)+.5)/d.y);return dot(floor(.5+255.*texture2D(e,v)),vec4(16777216.,65536.,256,1));}\\n#endif\\n#else\\nfloat E(vec2 t){return t.y;}\\n#endif\\n#ifndef VERTEX_TEXTURES\\nvec4 F(float t){t=(t+.5)/g.x;return floor(.5+255.*texture2D(f,vec2(fract(t),(floor(t)+.5)/g.y)));}float G(vec4 t){return mod(t.r,32.)/31.;}float H(vec4 t){float u=t.g*16.+floor(t.a/16.);return u/2.+float(_d);}float I(vec4 t){float u=t.b*16.+mod(t.a,16.);return u/2.+float(_d);}vec2 J(vec4 t){return vec2(H(t),I(t));}\\n#endif\\nprecision highp float;varying vec2 i;varying vec3 j;\\n#ifdef VERTEX_TEXTURES\\nvarying float k;\\n#else\\nvarying vec2 l,m,n;\\n#endif\\nvoid main(){float t=1.;vec2 u=i;\\n#ifdef VERTEX_TEXTURES\\nt=k;\\n#else\\nvec2 v,y,z;v=texture2D(c,D(E(j.xy),float(_e))).rg;float w=v.r*255./float(_f);u=i+l/w;t=max(abs(m.x),abs(m.y))<w?v.g:0.;vec4 x=F(j.z);y=J(x);z=n-y;if(dot(z,z)>=.01)discard;t*=G(x);\\n#endif\\nvec4 A=texture2D(s,u);A*=t;if(A.a==0.)discard;gl_FragColor=C(A,j.x);}");
    this.Z = a;
    this.Ja = L4(this.C, 3, 1066, 17);
    this.Va = L4(this.C, 2, 1083, 17);
    this.Y = L4(this.C, 2, 1100, 17);
    this.ea = L4(this.C, 4, 1117, 17);
    this.ha = L4(this.C, 3, 1134, 17);
    this.ba = L4(this.C, 1, 1151, 18);
    this.V = L4(this.C, 2, 1194, 17);
    this.Ta = L4(this.C, 2, 1211, 17);
    this.Wb = new O4(function (a) {
        return a.M
    });
    M4(this.C, this.Wb);
    this.Bb = new O4(function (a) {
        return a.I
    });
    M4(this.C, this.Bb);
    this.Rb = new O4(function (a) {
        return a.G
    });
    M4(this.C, this.Rb);
    this.ma = new O4(function (a) {
        return a.F
    });
    M4(this.C, this.ma);
    this.qa = new O4(function (a) {
        return a.D
    });
    M4(this.C, this.qa);
    this.Ba = new O4(function (a) {
        return a.U
    });
    M4(this.C, this.Ba);
    this.xa = new O4(function (a) {
        return a.V
    });
    M4(this.C, this.xa);
    this.yb = new O4(function (a) {
        return a.Q
    });
    M4(this.C, this.yb);
    this.Pc = new O4(function (a) {
        return a.transform
    });
    M4(this.C, this.Pc);
    this.X = new O4(function (a) {
        return a.Wb
    });
    M4(this.C, this.X);
    this.ca = new O4(function (a) {
        return a.Dk
    });
    M4(this.C, this.ca);
    this.Ka = new O4(function (a) {
        return a.Ka
    });
    M4(this.C, this.Ka);
    this.fb = new O4(function (a) {
        return a.ca
    });
    M4(this.C, this.fb);
    N4(this.C, "_a");
    N4(this.C, "_b")
};

X_a.prototype.D = function (a) {
    var b = this.Z;
    this.Ja.index = b.getAttribLocation(a, "s");
    this.Va.index = b.getAttribLocation(a, "t");
    this.Y.index = b.getAttribLocation(a, "u");
    this.ea.index = b.getAttribLocation(a, "v");
    this.ha.index = b.getAttribLocation(a, "w");
    this.ba.index = b.getAttribLocation(a, "x");
    this.V.index = b.getAttribLocation(a, "y");
    this.Ta.index = b.getAttribLocation(a, "z");
    this.Wb.location = b.getUniformLocation(a, "a");
    this.Bb.location = b.getUniformLocation(a, "b");
    this.Rb.location = b.getUniformLocation(a, "c");
    this.ma.location = b.getUniformLocation(a, "d");
    this.qa.location = b.getUniformLocation(a, "e");
    this.Ba.location = b.getUniformLocation(a, "f");
    this.xa.location = b.getUniformLocation(a, "g");
    this.yb.location = b.getUniformLocation(a, "h");
    this.Pc.location = b.getUniformLocation(a, "o");
    this.X.location = b.getUniformLocation(a, "p");
    this.ca.location = b.getUniformLocation(a, "q");
    this.Ka.location = b.getUniformLocation(a, "r");
    this.fb.location = b.getUniformLocation(a, "s")
};

X_a.prototype.F = function (a, b) {
    switch (a) {
    case 0:
        return b.K;
    case 1:
        return b.N;
    default:
        return 0
    }
};

var D5 = function () {
    this.C = k;
    this.D = new Cw(0, 0)
};

B(D5, A4);
v = D5.prototype;
v.wf = function () {
    this.C.D = 5;
    var a = F4(this);
    C4(this, a.X, 5126);
    C4(this, a.V, 5121)
};

v.Fd = "imageBuf";
v.df = function (a, b) {
    var c = E4(this),
        d = this.getContext();
    c.fd[0] = a.Hc.BF(a.SH);
    var e = x1(d.C, a.image.C);
    I4(this, e, 0, c.ca);
    c_a(this, a.transform, a.az.width, a.az.height);
    d.C.wb(a.image.C);
    D5.ia.df.call(this, a, b)
};

v.Ur = function (a) {
    var b = this.getContext(),
        c = b.C.contains(a.image.C);
    c && b.C.wb(a.image.C);
    return !c
};

v.ew = function (a) {
    var b = this.getContext(),
        a = a.image;
    a.C = b.C.createTexture(9729);
    var c = J4(this, a);
    b.C.Se(a.C, c);
    return i
};

v.zb = u(4);
v.Fg = function (a, b) {
    var c = a.image;
    if (0 < b.count) return 0;
    var d = a.Hc,
        e = a.SH;
    this.Lb(d.oB(e), d.pB(e), 0, 0, 0);
    var f = this.D;
    f.x = c.width;
    f.y = 0;
    Y_a(f, d.aG(e), d.$F(e));
    this.Lb(d.oB(e) + f.x, d.pB(e) + f.y, 0, 255, 0);
    f.x = 0;
    f.y = c.height;
    Y_a(f, d.aG(e), d.$F(e));
    this.Lb(d.oB(e) + f.x, d.pB(e) + f.y, 0, 0, 255);
    f.x = c.width;
    f.y = c.height;
    Y_a(f, d.aG(e), d.$F(e));
    this.Lb(d.oB(e) + f.x, d.pB(e) + f.y, 0, 255, 255);
    return 4
};

var Y_a = function (a, b, c) {
    var d = a.x,
        e = a.y;
    a.x = b * (Math.cos(c) * d + Math.sin(c) * e);
    a.y = b * (-Math.sin(c) * d + Math.cos(c) * e)
};

var E5 = function (a, b, c) {
    this.C = new K4(this, a, b, c || [], "", "#if _a==1\\nuniform vec3 a;\\n#else\\n#endif\\nvarying vec2 b;attribute vec3 e;attribute vec2 f;uniform mat4 c;uniform float d;void main(){gl_Position=c*vec4(e,1);gl_Position.z*=d;b=f/255.;}", "precision mediump float;\\n#if _a==1\\nuniform vec3 a;vec4 j(float h){vec4 i=vec4(a,mod(h,256.)/255.);i.z+=mod(floor(h/256.),128.)/255.;return i;}vec4 k(vec4 h,float i){return j(i);}\\n#else\\nvec4 k(vec4 h,float i){return h;}\\n#endif\\nprecision highp float;varying vec2 b;uniform sampler2D e;uniform float f,g;void main(){vec4 h=texture2D(e,b);h.a*=g;if(h.a==0.)discard;gl_FragColor=k(h,f);}");
    this.Z = a;
    this.X = L4(this.C, 3, 54, 17);
    this.V = L4(this.C, 2, 71, 17);
    this.ha = new O4(function (a) {
        return a.M
    });
    M4(this.C, this.ha);
    this.ma = new O4(function (a) {
        return a.transform
    });
    M4(this.C, this.ma);
    this.ca = new O4(function (a) {
        return a.ea
    });
    M4(this.C, this.ca);
    this.ea = new O4(function (a) {
        return a.ca
    });
    M4(this.C, this.ea);
    this.Y = new O4(function (a) {
        return a.fd
    });
    M4(this.C, this.Y);
    this.ba = new O4(function (a) {
        return a.oj
    });
    M4(this.C, this.ba);
    N4(this.C, "_a")
};

E5.prototype.D = function (a) {
    var b = this.Z;
    this.X.index = b.getAttribLocation(a, "e");
    this.V.index = b.getAttribLocation(a, "f");
    this.ha.location = b.getUniformLocation(a, "a");
    this.ma.location = b.getUniformLocation(a, "c");
    this.ca.location = b.getUniformLocation(a, "d");
    this.ea.location = b.getUniformLocation(a, "e");
    this.Y.location = b.getUniformLocation(a, "f");
    this.ba.location = b.getUniformLocation(a, "g")
};

E5.prototype.F = function (a, b) {
    switch (a) {
    case 0:
        return b.K;
    default:
        return 0
    }
};

var F5 = function (a, b, c) {
    o5.call(this, a, b);
    this.D = c;
    this.K = new Float32Array(2048);
    this.I = this.D.Vh ? 8 : 9
};

B(F5, o5);
F5.prototype.lu = B4;
F5.prototype.wf = function () {
    this.C.K = 2;
    var a = E4(this),
        b = F4(this);
    D4(this, a.C, 0, [5]);
    D4(this, a.C, 1, [0]);
    D4(this, a.P, 0, [1]);
    D4(this, a.P, 1, [0]);
    b.U.Gn = [32];
    C4(this, b.P, 5126);
    C4(this, b.M, 5122);
    C4(this, b.N, 5126);
    C4(this, b.G, 5123, i);
    this.D.Vh || (C4(this, b.I, 5121), F5.prototype.Lb = F5.prototype.HH)
};

F5.prototype.Fd = "lines";
F5.prototype.ip = function () {
    E4(this).maxWidth.set(36);
    this.getContext().depthFunc(513)
};

var Z_a = [0, 1, 1, 2, 1, 2, 2, 3];
F5.prototype.zb = function (a) {
    for (var a = a.Hc, b = a.Ik(), c = 0, d = 0; d < b; d++) {
        var e = a.Mm(a.hs(d)) - 1;
        0 < e && (c += e)
    }
    b = a.Jk();
    for (d = 0; d < b; d++) for (var e = a.Zr(d), f = 0; f < a.wq(e); f++) c += Z_a[a.ap(e, f) & 7];
    return 4 * c
};

F5.prototype.Fg = function (a, b) {
    for (var c = za() + 4, d = a.Hc, e = d.Ik(), f = d.Jk(), g = 0, j = b.count, m = -1, n = 0, p = 0; p < e; p++) {
        var q = d.Mm(d.hs(p));
        if (!(2 > q)) if (0 < j) j -= 4 * (q - 1);
        else {
            if (za() >= c && 500 <= g) return g;
            var s = d.rk(p),
                t = d.Qf(s),
                x = J3(this.F, t),
                q = k;
            this.D.Vh || (q = K3(this.F, t));
            s != m ? (n = 0, m = s) : n++;
            var s = g,
                g = x,
                D = d.hs(p),
                t = d.rk(p),
                I = 65535 - d.Ir(p),
                x = 65535 - d.Rv(p),
                K = d.Mm(D),
                J = 0,
                M = 0,
                Q = 0,
                aa = 0;
            q && 0 < q.C.length && (1 < q.C.length && (aa = 8 * q.C[1].width, Q = 8 * (q.C[0].width - q.C[1].width)), M = 8 * q.C[0].width);
            for (var q = [][n] || 0, ba = 0, ia = 0, D = d.Ar(D, this.K), ha = D[0], xa = D[1], Aa = 0; Aa < K - 1; ++Aa) ba = ha, ia = xa, ha = D[2 * Aa + 2], xa = D[2 * Aa + 3], q = G5(this, ba, ia, ha, xa, t, g, q, x, I, M, Q, aa), J += 4;
            g = s + J
        }
    }
    for (p = 0; p < f; p++) {
        e = d.Zr(p);
        m = d.wq(e);
        n = k;
        for (s = 0; s < m; s++) q = Z_a[d.ap(e, s) & 7], 0 != q && (0 < j ? j -= 4 * q : (n || (n = d.Gz(e, this.K)), t = d.Qf(d.Kk(p)), x = J3(this.F, t), q = k, this.D.Vh || (q = K3(this.F, t)), t = n, I = s, K = d.Kk(p), J = 65535 - (d.Jr(p) + 1), M = d.ap(d.Zr(p), I), ia = ba = aa = Q = 0, q && 0 < q.C.length && (1 < q.C.length && (ia = 8 * q.C[1].width, ba = 8 * (q.C[0].width - q.C[1].width)), aa = 8 * q.C[0].width), M & 1 && (q = t[6 * I], D = t[6 * I + 1], ha = t[6 * I + 2], xa = t[6 * I + 3], G5(this, q, D, ha, xa, K, x, 0, J, J, aa, ba, ia), Q += 4), M & 2 && (q = t[6 * I + 2], D = t[6 * I + 3], ha = t[6 * I + 4], xa = t[6 * I + 5], G5(this, q, D, ha, xa, K, x, 0, J, J, aa, ba, ia), Q += 4), M & 4 && (q = t[6 * I + 4], D = t[6 * I + 5], ha = t[6 * I + 0], xa = t[6 * I + 1], G5(this, q, D, ha, xa, K, x, 0, J, J, aa, ba, ia), Q += 4), g = g + Q));
        if (za() >= c && 500 <= g) break
    }
    return g
};

var G5 = function (a, b, c, d, e, f, g, j, m, n, p, q, s) {
    var t = d - b,
        x = e - c,
        t = Math.sqrt(t * t + x * x);
    a.Lb(b, c, d, e, f, g, -1, j, m, n, p, q, s, 0);
    $_a(a);
    b = a.C.C;
    c = b.I;
    d = b.F;
    e = b.D;
    f = b.offset >> 2;
    g = a.I;
    m = f - g;
    c[f] = c[m + 2];
    c[f + 1] = c[m + 3];
    c[f + 2] = c[m];
    c[f + 3] = c[m + 1];
    for (n = 4; n < g; ++n) c[f + n] = c[m + n];
    d[2 * f + 10] = -1;
    e[f + 6] = j + t;
    b.offset += g << 2;
    $_a(a);
    return t + j
};

F5.prototype.Lb = function (a, b, c, d, e, f, g, j, m, n) {
    var p = this.C.C,
        q = p.D,
        s = p.G,
        t = p.F,
        x = p.offset,
        D = x >> 2,
        x = x >> 1;
    q[D] = a;
    q[D + 1] = b;
    q[D + 2] = c;
    q[D + 3] = d;
    t[x + 8] = e;
    t[x + 9] = f;
    t[x + 10] = g;
    q[D + 6] = j;
    s[x + 14] = m;
    s[x + 15] = n;
    p.offset += 32
};

F5.prototype.HH = function (a, b, c, d, e, f, g, j, m, n, p, q, s, t) {
    var x = this.C.C,
        D = x.D,
        I = x.G,
        K = x.F,
        J = x.sq,
        M = x.offset,
        Q = M >> 2,
        aa = M >> 1;
    D[Q] = a;
    D[Q + 1] = b;
    D[Q + 2] = c;
    D[Q + 3] = d;
    K[aa + 8] = e;
    K[aa + 9] = f;
    K[aa + 10] = g;
    D[Q + 6] = j;
    I[aa + 14] = m;
    I[aa + 15] = n;
    J[M + 32] = p & 255;
    J[M + 33] = q & 255;
    J[M + 34] = s & 255;
    J[M + 35] = t & 255;
    x.offset += 36
};

var $_a = function (a) {
    for (var b = a.C.C, c = b.I, d = b.F, e = b.offset >> 2, a = a.I, f = e - a, g = 0; g < a; ++g) c[e + g] = c[f + g];
    d[2 * e + 10] = 1;
    b.offset += a << 2
};

var H5 = function (a, b, c) {
    o5.call(this, a, b);
    this.D = c;
    this.I = new Float32Array(2048)
};

B(H5, o5);
v = H5.prototype;
v.wf = function () {
    this.C.K = 2;
    this.C.D = 0;
    var a = E4(this),
        b = F4(this);
    D4(this, a.C, 0, [5]);
    D4(this, a.C, 1, [0]);
    D4(this, a.P, 0, [1]);
    D4(this, a.P, 1, [0]);
    C4(this, b.Q, 5126);
    C4(this, b.L, 5122);
    C4(this, b.G, 5123, i);
    this.D.Vh || (C4(this, b.I, 5121), this.LH = this.rD)
};

v.Fd = "joints and caps";
v.ip = function () {
    E4(this).maxWidth.set(36);
    this.getContext().depthFunc(513)
};

v.zb = function (a) {
    for (var a = a.Hc, b = 0, c = a.Ik(), d = 0; d < c; d++) b += a.Mm(a.hs(d));
    return b
};

v.Fg = function (a, b) {
    var c = a.Hc,
        d = za() + 4;
    0 == b.count && (b.C = 0, b.D = 0);
    var e = {
        cJ: 0
    };

    e.Ska = b.D;
    for (var f = c.Ik(), g = b.C; g < f && !(za() >= d && 500 <= e.cJ); g++) {
        var j = c.rk(g),
            m = k,
            n = c.Qf(j),
            p = J3(this.F, n);
        this.D.Vh || (m = K3(this.F, n));
        var n = e,
            q = c,
            s = c.hs(g),
            t = 65535 - c.Rv(g),
            x = 65535 - c.Ir(g),
            D = q.Mm(s),
            q = q.Ar(s, this.I),
            I = s = 0,
            K = 0;
        m && 0 < m.C.length && (1 < m.C.length && (K = m.C[1].width, I = m.C[0].width - m.C[1].width), s = m.C[0].width);
        this.LH(q, D, j, p, t, x, 8 * s, 8 * I, 8 * K, 0);
        n.cJ += D
    }
    b.C = g;
    b.D = 0;
    return e.cJ
};

v.LH = function (a, b, c, d, e, f, g, j, m, n, p) {
    for (var g = p || 5, j = this.C.C, m = j.G, n = j.F, p = j.I, q = j.D, s = j.offset, t = s >> 2, s = s >> 1, x = 0; x < b; ++x) q[t + g * x] = a[2 * x], q[t + g * x + 1] = a[2 * x + 1];
    n[s + 4] = c;
    n[s + 5] = d;
    n[s + 6] = -1;
    m[s + 8] = e;
    m[s + 9] = f;
    for (x = 1; x < b; ++x) p[t + g * x + 2] = p[t + 2], p[t + g * x + 3] = p[t + 3], p[t + g * x + 4] = p[t + 4];
    n[s + 6] = 1;
    n[s + 2 * g * (b - 1) + 6] = 0;
    j.offset += 4 * g * b
};

v.rD = function (a, b, c, d, e, f, g, j, m, n, p) {
    for (var p = p || 6, q = this.C.C, s = q.G, t = q.F, x = q.I, D = q.D, I = q.sq, K = q.offset, J = K >> 2, M = K >> 1, Q = 0; Q < b; ++Q) D[J + p * Q] = a[2 * Q], D[J + p * Q + 1] = a[2 * Q + 1];
    t[M + 4] = c;
    t[M + 5] = d;
    t[M + 6] = -1;
    s[M + 8] = e;
    s[M + 9] = f;
    I[K + 20] = g & 255;
    I[K + 21] = j & 255;
    I[K + 22] = m & 255;
    I[K + 23] = n & 255;
    for (Q = 1; Q < b; ++Q) x[J + p * Q + 2] = x[J + 2], x[J + p * Q + 3] = x[J + 3], x[J + p * Q + 4] = x[J + 4], x[J + p * Q + 5] = x[J + 5];
    t[M + 6] = 1;
    t[M + 2 * p * (b - 1) + 6] = 0;
    q.offset += 4 * p * b
};

var I5 = function (a, b) {
    w5.call(this, a, b)
};

B(I5, w5);
I5.prototype.Fd = "mesh outlines";
I5.prototype.zb = function (a) {
    var a = a.Hc,
        b = a.vm(),
        c = 0;
    if (b) for (var d = 0; d < b; ++d) var e = a.vt(a.Mp(d)),
        c = c + 2 * e;
    return c
};

I5.prototype.Fg = function (a, b) {
    var c = a.Hc,
        d = c.vm(),
        e = 0,
        f = b.count;
    if (d) for (var g = 0; g < d; ++g) {
        var j = c.vt(c.Mp(g)),
            m = c.gB(g),
            n = c.hB(g),
            p = J3(this.D, c.Qf(m));
        if (0 < f) f -= 2 * j;
        else
        for (var q = 0; q < j; ++q) {
            var s = c.lL(n, g, 2 * q + 1),
                t = c.mL(n, g, 2 * q + 1),
                x = c.nL(n, g, 2 * q + 1);
            this.Lb(c.lL(n, g, 2 * q), c.mL(n, g, 2 * q), c.nL(n, g, 2 * q), m, p);
            this.Lb(s, t, x, m, p);
            e += 2
        }
    }
    return e
};

var J5 = function (a, b) {
    y5.call(this, a, b);
    this.D = {}
};

B(J5, y5);
J5.prototype.Fd = "meshes";
J5.prototype.zb = function (a) {
    var a = a.Hc,
        b = a.vm(),
        c = 0;
    if (b) for (var d = 0; d < b; ++d) var e = a.rt(a.Lp(d)),
        c = c + 3 * e;
    return c
};

J5.prototype.Fg = function (a, b) {
    var c = a.Hc,
        d = c.vm(),
        e = 0,
        f = b.count;
    if (d) for (var g = 0; g < d; ++g) {
        var j = c.rt(c.Lp(g)),
            m = c.gB(g),
            n = J3(this.F, c.Qf(m)),
            p = c.hB(g);
        if (0 < f) f -= 3 * j;
        else
        for (var q = 0; q < j; ++q) {
            var s = c.OF(p, g, 3 * q),
                t = c.PF(p, g, 3 * q),
                x = c.QF(p, g, 3 * q),
                D = c.OF(p, g, 3 * q + 1),
                I = c.PF(p, g, 3 * q + 1),
                K = c.QF(p, g, 3 * q + 1),
                J = c.OF(p, g, 3 * q + 2),
                M = c.PF(p, g, 3 * q + 2),
                Q = c.QF(p, g, 3 * q + 2),
                aa = this.D,
                ba = -(M - t) * (K - x) + (Q - x) * (I - t),
                ia = +(J - s) * (K - x) - (Q - x) * (D - s),
                ha = -(J - s) * (I - t) + (M - t) * (D - s),
                xa = Math.sqrt(ba * ba + ia * ia + ha * ha),
                ba = ba * (127 / xa),
                ia = ia * (127 / xa),
                ha = ha * (127 / xa);
            aa.x = ba;
            aa.y = ia;
            aa.z = ha;
            aa = this.D.x;
            ba = this.D.y;
            ia = this.D.z;
            this.Lb(s, t, x, aa, ba, ia, m, n);
            this.Lb(D, I, K, aa, ba, ia, m, n);
            this.Lb(J, M, Q, aa, ba, ia, m, n);
            e += 3
        }
    }
    return e
};

var K5 = function (a, b, c) {
    this.C = new K4(this, a, b, c || [], "", "uniform vec2 a;attribute vec2 d;uniform mat4 b;uniform float c;void main(){gl_Position=b*vec4(d,0,1);gl_Position.z*=c;}", "void main(){}");
    this.Z = a;
    this.V = L4(this.C, 2, 15, 17);
    this.Y = new O4(function (a) {
        return a.Q
    });
    M4(this.C, this.Y);
    this.ba = new O4(function (a) {
        return a.transform
    });
    M4(this.C, this.ba);
    this.X = new O4(function (a) {
        return a.ea
    });
    M4(this.C, this.X)
};

K5.prototype.D = function (a) {
    var b = this.Z;
    this.V.index = b.getAttribLocation(a, "d");
    this.Y.location = b.getUniformLocation(a, "a");
    this.ba.location = b.getUniformLocation(a, "b");
    this.X.location = b.getUniformLocation(a, "c")
};

K5.prototype.F = function (a) {
    switch (a) {
    default:
        return 0
    }
};

var L5 = ea(),
    a0a = fa("Vc"),
    b0a = function (a, b, c, d) {
        this.Vc[0] = a;
        this.Vc[1] = b;
        this.Vc[2] = c;
        this.Vc[3] = d

    },
    M5 = function () {
        this.Vc = 0
    };

B(M5, L5);
M5.prototype.F = function (a, b) {
    a.uniform1f(b, this.Vc)
};

M5.prototype.set = a0a;
M5.prototype.D = function (a) {
    this.set(a[0])
};

var N5 = function () {
    this.Vc = 0
};

B(N5, L5);
N5.prototype.F = function (a, b) {
    a.uniform1i(b, this.Vc)
};

N5.prototype.set = a0a;
N5.prototype.D = function (a) {
    this.set(a[0])
};

var O5 = function () {
    this.Vc = new Float32Array(4)
};

B(O5, L5);
O5.prototype.F = function (a, b) {
    var c = a.G;
    c && c.T0 && c.T0(b, 0, this.Vc)
};

O5.prototype.set = b0a;
O5.prototype.C = function (a) {
    this.set(a[0], a[1], a[2], a[3])
};

O5.prototype.D = O5.prototype.C;
var P5 = function () {
    this.Vc = new Float32Array(16)
};

B(P5, L5);
P5.prototype.F = function (a, b) {
    var c = a.G;
    c && c.qK && c.qK(b, 0, this.Vc)
};

P5.prototype.set = function (a, b, c, d, e, f, g, j, m, n, p, q, s, t, x, D) {
    this.Vc[0] = a;
    this.Vc[1] = b;
    this.Vc[2] = c;
    this.Vc[3] = d;
    this.Vc[4] = e;
    this.Vc[5] = f;
    this.Vc[6] = g;
    this.Vc[7] = j;
    this.Vc[8] = m;
    this.Vc[9] = n;
    this.Vc[10] = p;
    this.Vc[11] = q;
    this.Vc[12] = s;
    this.Vc[13] = t;
    this.Vc[14] = x;
    this.Vc[15] = D
};

P5.prototype.C = function (a) {
    this.set(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15])
};

P5.prototype.D = P5.prototype.C;
var Q5 = function () {
    this.Vc = new Float32Array(2)
};

B(Q5, L5);
Q5.prototype.F = function (a, b) {
    var c = a.G;
    c && c.R0 && c.R0(b, this.Vc[0], this.Vc[1])
};

Q5.prototype.set = function (a, b) {
    this.Vc[0] = a;
    this.Vc[1] = b
};

Q5.prototype.C = function (a) {
    this.set(a[0], a[1])
};

Q5.prototype.D = Q5.prototype.C;
var R5 = function () {
    this.Vc = new Float32Array(3)
};

B(R5, L5);
R5.prototype.F = function (a, b) {
    var c = a.G;
    c && c.S0 && c.S0(b, this.Vc[0], this.Vc[1], this.Vc[2])
};

R5.prototype.set = function (a, b, c) {
    this.Vc[0] = a;
    this.Vc[1] = b;
    this.Vc[2] = c
};

R5.prototype.C = function (a) {
    this.set(a[0], a[1], a[2])
};

R5.prototype.D = R5.prototype.C;
var S5 = function () {
    this.Vc = new Float32Array(4)
};

B(S5, L5);
S5.prototype.F = function (a, b) {
    var c = a.G;
    c && c.pK && c.pK(b, this.Vc[0], this.Vc[1], this.Vc[2], this.Vc[3])
};

S5.prototype.set = b0a;
S5.prototype.C = function (a) {
    this.set(a[0], a[1], a[2], a[3])
};

S5.prototype.D = S5.prototype.C;
var c0a = function () {
    this.alpha = new M5;
    this.yb = new M5;
    this.Ae = new M5;
    this.Wq = new P5;
    this.ea = new M5;
    this.X = new M5;
    this.qa = new N5;
    this.Re = new M5;
    this.Bb = new M5;
    this.xa = new N5;
    this.Ba = new Q5;
    this.Ja = new P5;
    this.Rb = new M5;
    this.kf = new M5;
    this.fd = new M5;
    this.D = new N5;
    this.F = new Q5;
    this.nf = new M5;
    this.Nf = new N5;
    this.Jg = new Q5;
    this.Y = new Q5;
    this.vh = new Q5;
    this.Ti = new N5;
    this.Si = new Q5;
    this.highlight = new N5;
    this.Wb = new M5;
    this.oj = new M5;
    this.U = new N5;
    this.V = new Q5;
    this.ba = new M5;
    this.Yq = new M5;
    this.ma = new P5;
    this.maxWidth = new M5;
    this.opacity = new M5;
    this.Ka = new O5;
    this.L = new M5;
    this.Td = new Q5;
    this.ca = new N5;
    this.Q = new Q5;
    this.Ta = new M5;
    this.Dk = new N5;
    this.P = new M5;
    this.C = new M5;
    this.G = new N5;
    this.I = new Q5;
    this.Va = new N5;
    this.Xq = new S5;
    this.text = new N5;
    this.zk = new M5;
    this.fb = new Q5;
    this.M = new R5;
    this.transform = new P5;
    this.qo = new S5;
    this.ee = new S5;
    this.N = this.Pc = this.Ak = this.K = this.ha = 0
};

var T5 = function (a, b) {
    this.C = k;
    this.K = t0();
    this.D = !! a;
    this.P = y(b) ? b : 0;
    this.N = new Uint8Array(16);
    this.F = [];
    this.G = [];
    this.L = -1;
    this.I = 1;
    this.M = d2()
};

B(T5, R4);
v = T5.prototype;
v.wf = function () {
    this.C.D = 5;
    var a = F4(this);
    this.D ? C4(this, a.ma, 5121) : C4(this, a.qa, 5121)
};

v.Fd = "oblique";
v.df = function (a) {
    var b = a.C,
        c = b ? b.width : 2,
        b = E4(this);
    b.ma.C(this.K);
    b.Td.set(a.K * this.I, a.M * this.I);
    b.Re.set(c);
    var c = this.getContext(),
        d = x1(c.C, a.F);
    I4(this, d, 0, b.Va);
    c.C.wb(a.F);
    this.D && (d = x1(c.C, a.D), I4(this, d, 1, b.qa), c.C.wb(a.D))
};

v.Ur = function (a) {
    var b = this.getContext(),
        c = b.C.contains(a.F),
        d = !this.D || b.C.contains(a.D);
    c && b.C.wb(a.F);
    d && this.D && b.C.wb(a.D);
    return !(d && c)
};

v.ew = function (a) {
    var b = this.getContext();
    if (!b.C.contains(a.F)) {
        var c = a.pd;
        if (c) {
            var d = b.C.createTexture(9729),
                c = J4(this, c);
            b.C.Se(d, c);
            a.F = d
        }
    }
    d = !this.D || b.C.contains(a.D);
    !d && !a.C && (a.D = this.L, d = b.C.contains(a.D));
    d || (c = a.C, d = b.C.createTexture(9729), c || (c = this.M, this.L = d), b.D.texImage2D(3553, 0, 6409, 6409, 5121, c), b.C.Se(d, c.width * c.height), a.D = d);
    return i
};

v.zb = function (a) {
    return T5.ia.zb.call(this, a.C)
};

v.Fg = function (a) {
    var b = a.C,
        a = b ? b.width : 2,
        c = b ? b.height : 2,
        d = this.F[a];
    d || (this.F[a] = new Uint8Array(2 * a * c), n_a(a, c, this.F[a]), d = this.F[a]);
    this.D ? S4(this, a, c, d, []) : (b = b ? o_a(b) : this.N, S4(this, a, c, d, b));
    return 2 * a * (c - 1)
};

var d0a = function (a, b, c, d) {
    if (!b.length) return d;
    var e = a.getContext(),
        f = a.P - 1,
        g = b[0].da() - b[b.length - 1].da(),
        j = d + g;
    e.state.vo(518, j, f);
    e.clear(256);
    for (var m = 0; m < b.length; m++) {
        var n = b[m];
        m && n.da() != b[m - 1].da() && (j--, e.state.vo(518, j, f));
        var p = a.K;
        a2(c, n.L, p);
        s0(b2(c), p, a.K);
        a.Rd(n.I, n)
    }
    return d + g + 1
};

T5.prototype.activate = function () {
    F4(this).C.activate(E4(this))
};

var e0a = function (a) {
    this.F = a;
    this.H = [];
    this.C = 0;
    this.D = k
};

e0a.prototype.start = function () {
    if (0 == this.H.length) return k;
    var a = this.F,
        b = this.H[this.C];
    if (!b.I) {
        var c = b.C,
            d = c ? c.width : 2,
            e = a.G[d];
        e || (a.G[d] = {}, e = a.G[d]);
        b.I = a.D ? e : c ? {} : e
    }
    return 2 == a.pj(b.I, b) && (this.C++, this.D && this.D(), this.C == this.H.length) ? (this.H = [], this.C = 0, k) : this.start
};

var U5 = function (a, b, c, d, e) {
    var d = 256 * Math.pow(2, d),
        f = d / 2;
    switch (c) {
    case 0:
        e.x = a;
        e.y = (b - f) / Math.sqrt(2) + f;
        break;
    case 90:
        e.x = b;
        e.y = (d - a - f) / Math.sqrt(2) + f;
        break;
    case 180:
        e.x = d - a;
        e.y = (d - b - f) / Math.sqrt(2) + f;
        break;
    case 270:
        e.x = d - b, e.y = (a - f) / Math.sqrt(2) + f
    }
};

var g0a = function (a) {
    this.pd = a.kH(0);
    this.C = a.RN(0);
    var b = a.SN(0);
    this.M = b ? b.near : 0;
    this.K = b ? b.C : 0;
    this.G = a.bc();
    this.N = a.da();
    a.getWidth();
    a.getHeight();
    var b = f0a[0],
        c = a.$g() * a.getWidth(),
        d = a.ah() * a.getHeight(),
        e = new Cw(0, 0),
        f = a.da(),
        f = 256 * Math.pow(2, f),
        g = f / 2;
    switch (a.bc()) {
    case 0:
        e.x = c;
        e.y = (d - g) * Math.sqrt(2) + g;
        break;
    case 90:
        e.x = f - ((d - g) * Math.sqrt(2) + g);
        e.y = c;
        break;
    case 180:
        e.x = f - c;
        e.y = f - ((d - g) * Math.sqrt(2) + g);
        break;
    case 270:
        e.x = (d - g) * Math.sqrt(2) + g, e.y = f - c
    }

    e.x /= a.getWidth();
    e.y /= a.getHeight();
    tWa(e.x, e.y, a.da(), b);
    c = f0a[1];
    uD(b[0], b[1], b[2], c);
    e = j0(c[1]);
    f = Math.sqrt(2);
    c = M1(a.da());
    d = c * f;
    e /= f;
    f = sD();
    switch (a.bc()) {
    case 0:
        f[0] = c;
        f[5] = -d;
        f[9] = -e;
        break;
    case 90:
        f[1] = -c;
        f[4] = -d;
        f[8] = -e;
        break;
    case 180:
        f[0] = -c;
        f[5] = d;
        f[9] = e;
        break;
    case 270:
        f[1] = c, f[4] = d, f[8] = e
    }
    f[10] = e;
    f[12] = b[0];
    f[13] = b[1];
    f[15] = 1;
    this.L = f;
    this.I = k;
    this.D = this.F = -1
},
    f0a = [qD(), qD()];
g0a.prototype.bc = r("G");
g0a.prototype.da = r("N");
var h0a = function (a, b, c) {
    this.C = new K4(this, a, b, c || [], "", "varying vec2 a;\\n#if defined(VERTEX_TEXTURES)&&_a==1\\nvarying float b;\\n#endif\\nuniform mat4 c;uniform vec2 d;uniform float e;const float g=(256.+1.)/256.;\\n#ifdef VERTEX_TEXTURES\\nattribute vec2 h;uniform sampler2D f;float o(vec2 j,vec2 d,vec2 k){return mix(d.x,d.y,texture2D(f,j+k/e).r);}\\n#else\\nattribute vec3 i;\\n#endif\\nvoid main(){\\n#ifdef VERTEX_TEXTURES\\na=h/(e-1.);vec2 j=(h+.5)/e;float k=o(j,d,vec2(0));\\n#if _a==1\\nfloat l,m,n;l=o(j,d,vec2(1,0))-k;m=o(j,d,vec2(0,1))-k;n=o(j,d,vec2(1))-k;b=step(15.,max(abs(l),max(abs(m),abs(n))));\\n#endif\\n#else\\na=i.xy/(e-1.);float k=mix(d.x,d.y,i.z/255.);\\n#endif\\ngl_Position=c*vec4(a*g,k,1);}", "precision mediump float;varying vec2 a;\\n#if defined(VERTEX_TEXTURES)&&_a==1\\nvarying float b;\\n#endif\\nuniform sampler2D g;uniform float h,i;void main(){\\n#if defined(VERTEX_TEXTURES)&&_a==1\\nfloat j=mix(h,i,smoothstep(0.,.25,b));\\n#else\\nfloat j=h;\\n#endif\\ngl_FragColor=vec4(texture2D(g,a).rgb,j);}");
    this.Z = a;
    this.ma = L4(this.C, 2, 175, 17);
    this.qa = L4(this.C, 3, 291, 17);
    this.ca = new O4(function (a) {
        return a.ma
    });
    M4(this.C, this.ca);
    this.ea = new O4(function (a) {
        return a.Td
    });
    M4(this.C, this.ea);
    this.X = new O4(function (a) {
        return a.Re
    });
    M4(this.C, this.X);
    this.ba = new O4(function (a) {
        return a.qa
    });
    M4(this.C, this.ba);
    this.ha = new O4(function (a) {
        return a.Va
    });
    M4(this.C, this.ha);
    this.Y = new O4(function (a) {
        return a.alpha
    });
    M4(this.C, this.Y);
    this.V = new O4(function (a) {
        return a.yb
    });
    M4(this.C, this.V);
    N4(this.C, "_a")
};

h0a.prototype.D = function (a) {
    var b = this.Z;
    this.ma.index = b.getAttribLocation(a, "h");
    this.qa.index = b.getAttribLocation(a, "i");
    this.ca.location = b.getUniformLocation(a, "c");
    this.ea.location = b.getUniformLocation(a, "d");
    this.X.location = b.getUniformLocation(a, "e");
    this.ba.location = b.getUniformLocation(a, "f");
    this.ha.location = b.getUniformLocation(a, "g");
    this.Y.location = b.getUniformLocation(a, "h");
    this.V.location = b.getUniformLocation(a, "i")
};

h0a.prototype.F = function (a, b) {
    switch (a) {
    case 0:
        return b.Ak;
    default:
        return 0
    }
};

var i0a = function (a, b) {
    this.C = k;
    this.G = a;
    this.I = b;
    this.D = [0, 0.5, 0, -0.5, 0.115, 0.5, 0.115, -0.5, 0, -0.5, 0.115, 0.5, 0.115, 1.15, 0.5, 0, 0.115, -1.15];
    this.F = [0, 0.5, 0, -0.5, 0.5, 0.5, 0.5, -0.5, 0, -0.5, 0.5, 0.5]
};

B(i0a, A4);
v = i0a.prototype;
v.Fd = "oneWay";
v.wf = function () {
    var a = F4(this);
    C4(this, a.ma, 5126);
    C4(this, a.V, 5126);
    C4(this, a.X, 5126);
    C4(this, a.Y, 5123)
};

v.dw = function (a) {
    return !a.Sg.dV
};

v.df = function (a) {
    var b = E4(this);
    H4(this, this.I, 0, b.G, b.I);
    H4(this, a.Ih, 1, b.D, b.F);
    H4(this, a.At, 2, b.U, b.V)
};

v.zb = function (a) {
    return 15 * a.Sg.xy.length
};

v.Fg = function (a, b) {
    if (0 < b.count) return 0;
    for (var c = a.Sg.xy, d = c.length, e = 0; e < d; ++e) {
        for (var f = c[e], g = f.Ed, j = f.fd, m = a.Hc.Qf(j), n = J3(this.G, m), m = K3(this.G, m).ef.width, p = f.Wd.Sy, q = f.Wd.Ty, s = f.Wd.altitude, t = 0; t < this.F.length; t += 2) this.Lb(p, q, s, g.P, g.Q, 13 * this.F[t], m * this.F[t + 1], j, n, f.Pk);
        for (t = 0; t < this.D.length; t += 2) this.Lb(p, q, s, g.L, g.M, 13 * this.D[t], m * this.D[t + 1], j, n, f.Pk)
    }
    a.Sg.dV = i;
    return 15 * d
};

var j0a = function (a, b, c) {
    this.C = new K4(this, a, b, c || [], "#define _c 26\\n#define _d -1023\\n#define _e 12\\n", "#if _a==1\\nuniform vec3 a;vec4 D(float q){vec4 r=vec4(a,mod(q,256.)/255.);r.z+=mod(floor(q/256.),128.)/255.;return r;}vec4 E(vec4 q,float r){return D(r);}\\n#else\\nvec4 E(vec4 q,float r){return q;}\\n#endif\\nuniform vec2 b,g,h;uniform sampler2D c,f;vec2 F(float q,float r){q=(q+.5)/b.x;return vec2(fract(q),(float(_c)*floor(q)+r+.5)/b.y);}\\n#if _b==1\\nuniform vec2 d;uniform sampler2D e;\\n#ifdef VERTEX_TEXTURES\\nfloat G(vec2 q){float r=(q.x+.5)/d.x;vec2 s=vec2(fract(r),(floor(r)+.5)/d.y);return dot(floor(.5+255.*texture2D(e,s)),vec4(16777216.,65536.,256,1));}\\n#endif\\n#else\\nfloat G(vec2 q){return q.y;}\\n#endif\\n#ifdef VERTEX_TEXTURES\\nvec4 H(float q){q=(q+.5)/g.x;return floor(.5+255.*texture2D(f,vec2(fract(q),(floor(q)+.5)/g.y)));}float I(vec4 q){return mod(q.r,32.)/31.;}\\n#endif\\n#ifdef VERTEX_TEXTURES\\nvarying float i;varying vec4 j;\\n#else\\nvarying vec3 k;\\n#endif\\nattribute vec3 m;attribute vec2 n;attribute vec2 o;attribute vec3 p;uniform mat4 l;void main(){vec4 q,r;q=l*vec4(m,1);r=l*vec4(m.xy+n,m.z,1);vec2 s,t,u,v,w,x;s=h/2.;t=s*q.xy/q.w;u=s*r.xy/r.w;v=normalize(u-t);w=mat2(v.x,-v.y,v.y,v.x)*o;x=t+w*vec2(1,-1);gl_Position.xy=x*q.w/s;gl_Position.zw=q.zw;\\n#ifdef VERTEX_TEXTURES\\nvec2 y,A;y=p.xy;float z,C;z=G(y);A=F(z,float(_e));j=E(texture2D(c,A),y.x);vec4 B=H(p.z);C=I(B);i=C;gl_Position.xy*=sign(C);\\n#else\\nk=p;\\n#endif\\n}", "precision mediump float;\\n#if _a==1\\nuniform vec3 a;vec4 r(float m){vec4 n=vec4(a,mod(m,256.)/255.);n.z+=mod(floor(m/256.),128.)/255.;return n;}vec4 s(vec4 m,float n){return r(n);}\\n#else\\nvec4 s(vec4 m,float n){return m;}\\n#endif\\nuniform vec2 b,g;uniform sampler2D c,f;vec2 t(float m,float n){m=(m+.5)/b.x;return vec2(fract(m),(float(_c)*floor(m)+n+.5)/b.y);}\\n#if _b==1\\nuniform vec2 d;uniform sampler2D e;\\n#ifndef VERTEX_TEXTURES\\nfloat u(vec2 m){float n=(m.x+.5)/d.x;vec2 o=vec2(fract(n),(floor(n)+.5)/d.y);return dot(floor(.5+255.*texture2D(e,o)),vec4(16777216.,65536.,256,1));}\\n#endif\\n#else\\nfloat u(vec2 m){return m.y;}\\n#endif\\n#ifndef VERTEX_TEXTURES\\nvec4 v(float m){m=(m+.5)/g.x;return floor(.5+255.*texture2D(f,vec2(fract(m),(floor(m)+.5)/g.y)));}float w(vec4 m){return mod(m.r,32.)/31.;}\\n#endif\\nprecision highp float;\\n#ifdef VERTEX_TEXTURES\\nvarying float i;varying vec4 j;\\n#else\\nvarying vec3 k;\\n#endif\\nvoid main(){float m=1.;vec4 n;\\n#ifdef VERTEX_TEXTURES\\nm=i;n=j;\\n#else\\nvec4 o=v(k.z);m=w(o);if(m==0.)discard;vec2 p=k.xy;float q=u(p);n=texture2D(c,t(q,float(_e)));n=s(n,k.x);\\n#endif\\nn.a*=m;gl_FragColor=n;}");
    this.Z = a;
    this.ma = L4(this.C, 3, 855, 17);
    this.V = L4(this.C, 2, 872, 17);
    this.X = L4(this.C, 2, 889, 17);
    this.Y = L4(this.C, 3, 906, 17);
    this.Ja = new O4(function (a) {
        return a.M
    });
    M4(this.C, this.Ja);
    this.xa = new O4(function (a) {
        return a.I
    });
    M4(this.C, this.xa);
    this.Ba = new O4(function (a) {
        return a.G
    });
    M4(this.C, this.Ba);
    this.ba = new O4(function (a) {
        return a.F
    });
    M4(this.C, this.ba);
    this.ca = new O4(function (a) {
        return a.D
    });
    M4(this.C, this.ca);
    this.ha = new O4(function (a) {
        return a.U
    });
    M4(this.C, this.ha);
    this.ea = new O4(function (a) {
        return a.V
    });
    M4(this.C, this.ea);
    this.qa = new O4(function (a) {
        return a.Q
    });
    M4(this.C, this.qa);
    this.Ka = new O4(function (a) {
        return a.transform
    });
    M4(this.C, this.Ka);
    N4(this.C, "_a");
    N4(this.C, "_b")
};

j0a.prototype.D = function (a) {
    var b = this.Z;
    this.ma.index = b.getAttribLocation(a, "m");
    this.V.index = b.getAttribLocation(a, "n");
    this.X.index = b.getAttribLocation(a, "o");
    this.Y.index = b.getAttribLocation(a, "p");
    this.Ja.location = b.getUniformLocation(a, "a");
    this.xa.location = b.getUniformLocation(a, "b");
    this.Ba.location = b.getUniformLocation(a, "c");
    this.ba.location = b.getUniformLocation(a, "d");
    this.ca.location = b.getUniformLocation(a, "e");
    this.ha.location = b.getUniformLocation(a, "f");
    this.ea.location = b.getUniformLocation(a, "g");
    this.qa.location = b.getUniformLocation(a, "h");
    this.Ka.location = b.getUniformLocation(a, "l")
};

j0a.prototype.F = function (a, b) {
    switch (a) {
    case 0:
        return b.K;
    case 1:
        return b.N;
    default:
        return 0
    }
};

var k0a = function (a, b) {
    i5.call(this, a, i);
    this.L = b;
    this.K = [];
    this.M = {};

    this.G = {};

    this.D = {
        tq: 0,
        xz: k,
        uD: 0,
        vD: k
    };

    if (!V5) {
        var c = a.getParameter(3379);
        V5 = 8192 >= c ? c + 1 : 1024;
        this.L.height = 64;
        this.L.width = V5
    }
    this.I = this.L.getContext("2d")
};

B(k0a, i5);
var V5 = 0,
    l0a = [],
    m0a = 0,
    W5 = {},
    n0a = {},
    X5 = {},
    Y5 = {},
    o0a = {
        40: i,
        41: i,
        91: i,
        93: i,
        12540: i,
        64830: i,
        64831: i,
        65288: i,
        65289: i
    },
    p0a = function (a, b, c) {
        W5[a] = W5[a] || {};

        W5[a][b] = W5[a][b] || {};

        if (!ra(W5[a][b][c])) {
            var d = m0a;
            m0a += 2;
            W5[a][b][c] = d;
            l0a.push({
                fontSize: a,
                lk: b,
                text: c
            });
            l0a.push(k)
        }
        return W5[a][b][c]
    },
    q0a = function (a, b) {
        var c = b || {},
            d = l0a[a];
        c.fontSize = d.fontSize;
        c.lk = d.lk;
        c.text = d.text;
        return c
    },
    r0a = function (a, b, c) {
        a = p0a(a, b, c);
        a = (a = X5[a]) || {};

        return a = new KB(a.left / 2 + 2, a.top / 2 + 2, a.width / 2 - 4, a.height / 2 - 4)
    };

k0a.prototype.F = function () {
    a: {
        if (0 == this.D.tq) {
            for (var a = [], b = 0; b < this.K.length; ++b) {
                var c = this.K[b];
                if (!Y5[c]) {
                    var d = {};

                    d.MI = c;
                    a.push(d)
                }
            }
            if (!a.length) {
                this.D.tq = 100;
                break a
            }
            this.D.tq = 1;
            this.D.xz = a
        }
        if (1 == this.D.tq) {
            for (var d = a = this.D.xz, e = b = 0, f = c = 0; f < d.length; f++) {
                var g = d[f],
                    j = g.MI;
                q0a(j, g);
                j = n0a[j];
                j += 4;
                j *= 2;
                c + j >= V5 && (e += b, c = b = 0);
                var m;
                m = 2 * g.fontSize;
                m += 4;
                m *= 2;
                var n = e + m / 2;
                n - e + m / 2 > b && (b = n - e + m / 2);
                g.width = j;
                g.height = m;
                g.offsetX = c;
                g.offsetY = e;
                c += j
            }
            d = e;
            0 < c && (d += b);
            b = new Bw(V5, d);
            c = this.L;
            c.width < b.width && (c.width = b.width);
            c.height < b.height && (c.height = b.height);
            this.I.clearRect(0, 0, b.width, b.height);
            c = this.I;
            c.save();
            c.scale(2, 2);
            c.fillStyle = "rgba(255, 255, 255, 1)";
            c.textAlign = "center";
            c.textBaseline = "middle";
            d = -1;
            for (f = e = 0; f < a.length; f++) {
                g = a[f];
                j = g.offsetX + g.width / 2;
                m = g.offsetY + g.height / 2;
                if (g.fontSize != d || g.lk != e) d = g.fontSize, e = g.lk, c.font = LYa(d, e);
                c.fillText(g.text, j / 2, m / 2)
            }
            c.restore();
            a = this.I.getImageData(0, 0, b.width, b.height);
            this.D.vD = a;
            this.D.tq = 2
        }
        if (2 == this.D.tq) {
            a = this.D;
            b = this.D.xz;
            c = this.D.vD.data;
            d = this.D.vD.width;
            for (e = this.D.uD; e < b.length; e++) {
                f = b[e];
                g = new KB(0, 0, 0, 0);
                j = c;
                m = f.offsetX;
                for (var n = f.offsetY, p = f.width, q = f.height, s = d, t = g, x = p, D = 0, I = q, K = 0, J = 0; J < q; ++J) for (var M = 0, Q = -100, aa = p * J, ba = 0; ba < p; ++ba) {
                    var ia = m + ba,
                        ha = n + J,
                        ia = j[4 * (ia + s * ha) + 3];
                    0 < ia && (ba < x && (x = ba), ba > D && (D = ba), J < I && (I = J), K = J);
                    if ((ia == M || 1.5 > ba - Q) && 0 == ia % 255) Z5[ba + aa] = 255 == ia ? ba - Q : Q - ba;
                    else {
                        if (ia != M) for (var M = 0 < ia - M ? 1 : -1, ha = Q, Q = ba + M * (0.5 - ia / 255), xa = ba - 1; 0 <= xa && Q - xa <= xa - ha; xa--) M * Z5[xa + aa] < xa - Q && (Z5[xa + aa] = M * (xa - Q));
                        Z5[ba + aa] = (ia - 128) / 255
                    }
                    M = ia
                }
                if (x > D || I > K) x = 4, D = p - 4 - 1, K = I = Math.floor(q / 2);
                x -= 4;
                D += 4;
                I -= 4;
                K += 4;
                t.left = x - p / 2;
                t.width = D - x + 1;
                t.top = I - q / 2;
                t.height = K - I + 1;
                D = 4 * Math.ceil(t.width / 4);
                K = new Uint8Array(D * t.height);
                for (Q = 0; Q < t.height; ++Q) {
                    J = Q + I;
                    aa = p * J;
                    for (M = 0; M < t.width; ++M) {
                        ba = M + x;
                        ia = m + ba;
                        ha = n + J;
                        ia = 0 > ba || ba >= p || 0 > J || J >= q ? 0 : j[4 * (ia + s * ha) + 3];
                        ha = 0;
                        0 > ba && (ha = -ba, ba = 0);
                        ba >= p && (ha = ba - p + 1, ba = p - 1);
                        if (255 == ia || 0 == ia) {
                            ia = ia ? 1 : -1;
                            xa = Infinity;
                            0 <= J && J < q && (xa = ia * Z5[ba + aa] + ha);
                            for (var Aa = xa * xa, Ra = 1; 6 > Ra && Ra * Ra < Aa; Ra = -Ra + (0 < Ra ? 0 : 1)) if (!(0 > J + Ra || J + Ra >= q)) {
                                0 <= ba && (ba < p && 0 <= J + Ra && J + Ra < q) && (xa = ia * Z5[ba + p * (J + Ra)] + ha);
                                var Ba;
                                0 >= xa ? (-0.5 > xa && (xa = -0.5), Ba = Math.abs(Ra) + xa, Ba *= Ba) : Ba = Ra * Ra + xa * xa;
                                Ba < Aa && (Aa = Ba)
                            }
                            ba = 12 * ia * Math.sqrt(Aa) + 128
                        } else ba = 12 * (ia - 128) / 255 + 128;
                        0 > ba && (ba = 0);
                        255 < ba && (ba = 255);
                        K[M + D * Q] = ba + 0.5
                    }
                }
                j = K;
                Y5[f.MI] = j;
                X5[f.MI] = g;
                if ($5(f.text)) {
                    m = 4 * Math.ceil(g.height / 4);
                    n = new Uint8Array(g.width * m);
                    p = j.byteLength / g.height;
                    for (q = 0; q < g.width; ++q) for (s = 0; s < g.height; ++s) n[s + m * q] = j[q + p * (g.height - s)];
                    Y5[f.MI + 1] = n
                }
            }
            a.uD = e;
            this.D.uD == this.D.xz.length && (this.D.tq = 100, this.D.xz = k, this.D.vD = k, this.D.uD = 0)
        }
    }
    if (100 == this.D.tq) {
        a = this.K;
        b = this.G;
        c = {
            x: 0,
            y: 0
        };

        d = {
            x: 0,
            y: 0
        };

        for (f = e = 0; f < a.length; ++f) g = a[f], j = q0a(g), m = X5[g], e = s0a(m, e, c, d), b[g] = b[g] || {}, b[g].x = d.x, b[g].y = d.y, $5(j.text) && (e = s0a(new KB(m.top, m.left, m.height, m.width), e, c, d), b[g].aO = d.x, b[g].JV = d.y);
        0 < c.x && (c.y += e);
        b = c.y + 2;
        a = this.C.C;
        c = j5(this.C);
        a.bindTexture(3553, c);
        if (1024 != this.C.lh.width || b != this.C.lh.height) z1(a, 6406, 1024, b, 6406, k), this.C.Pf(1024, b, 1);
        for (b = 0; b < this.K.length; ++b) c = this.K[b], d = this.G[c].x, e = this.G[c].y, f = X5[c], a.D.texSubImage2D(3553, 0, d + f.left + 1, e + f.top + 1, f.width, f.height, 6406, 5121, Y5[c]), y(this.G[c].aO) && (d = this.G[c].aO, e = this.G[c].JV, a.D.texSubImage2D(3553, 0, d + f.top + 1, e + f.left + 1, f.height, f.width, 6406, 5121, Y5[c + 1]));
        this.C.D = i
    }
};

var $5 = function (a) {
    return 1 == a.length && !! o0a[a.charCodeAt(0)]
},
    s0a = function (a, b, c, d) {
        var e = c.x - a.left;
        0 < e % 4 && (c.x += 4 - e % 4);
        3 < c.x && 1022 <= c.x + a.width && (c.y += b + 24, b = 0, c.x = 0, 0 < -a.left / 2 % 4 && (c.x += 4 - -a.left % 4));
        d.y = c.y - a.top;
        0 < d.y % 4 && (d.y += 4 - d.y % 4);
        d.y - c.y + a.height + a.top > b && (b = d.y - c.y + a.height + a.top);
        d.x = c.x - a.left;
        c.x += a.width;
        return b
    },
    Z5 = [];
var t0a = function (a, b, c) {
    this.C = new K4(this, a, b, c || [], "#define _c 26\\n#define _d -1023\\n#define _e 2\\n", "#if _a==1\\nuniform vec3 a;\\n#else\\n#endif\\nuniform vec2 b,g,p;uniform sampler2D c,f;vec2 ea(float x,float y){x=(x+.5)/b.x;return vec2(fract(x),(float(_c)*floor(x)+y+.5)/b.y);}\\n#if _b==1\\nuniform vec2 d;uniform sampler2D e;\\n#ifdef VERTEX_TEXTURES\\nfloat fa(vec2 x){float y=(x.x+.5)/d.x;vec2 z=vec2(fract(y),(floor(y)+.5)/d.y);return dot(floor(.5+255.*texture2D(e,z)),vec4(16777216.,65536.,256,1));}\\n#endif\\n#else\\nfloat fa(vec2 x){return x.y;}\\n#endif\\n#ifdef VERTEX_TEXTURES\\nvec4 ga(float x){x=(x+.5)/g.x;return floor(.5+255.*texture2D(f,vec2(fract(x),(floor(x)+.5)/g.y)));}float ha(vec4 x){return mod(x.r,32.)/31.;}\\n#endif\\nvarying vec2 h;varying vec3 i,k;varying float j;varying vec4 l;uniform float m,q;\\n#ifdef VERTEX_TEXTURES\\nvarying float n;\\n#else\\nvarying float o;\\n#endif\\nattribute vec3 s;attribute vec4 t;attribute vec4 u;attribute vec4 v;attribute vec3 w;uniform mat4 r;void main(){const float x=float(_e);vec2 y,z,F,H,J,V,W;y=p/2.;z=vec2(2,-2)/p;float A,B,C,D,I,M,N,O,P,Q,S,T,U,X,Y,Z,aa;A=abs(s.z);B=v.w;C=v.x;D=w.z;vec4 E,G;E=r*vec4(u.xy,D,1);E.y=-E.y;F=y*E.xy/E.w;G=r*vec4(u.zw,D,1);G.y=-G.y;H=y*G.xy/G.w;I=distance(F,H);J=vec2(0,I);J-=(I-A)/2.;bool K,L,ba;K=abs(r[2][1])>.001;L=E.w<1e-4||G.w<1e-4;M=q;i=s;i.z=A;i.xy*=M;N=M*A;i.xy-=(N-A)/2.;i.xy=mix(i.xy,J,float(K));i*=x;j=t.w;O=2.*floor(C/2.)-1.;P=-2.*mod(floor((C+1.)/2.),2.)+1.;Q=t.y/4.;\\n#ifdef VERTEX_TEXTURES\\nvec4 R=ga(B);n=clamp(floor(R.r/64.),0.,1.);Q*=1.-n*.5;\\n#else\\no=Q;\\n#endif\\nS=t.x;T=mix(i.y+x*S,i.x-x*S,float(O<0.));U=P*Q;h=vec2(T+t.z,U);k=v.yzw;V=normalize(H-F);W=vec2(-V.y,V.x);X=O*-w.x;Y=step(s.z,0.);Z=sign(O*V.x+1e-4);X*=mix(1.,Z,Y);aa=O*-w.y;F-=S*V;F-=Q/x*W*P*O;F+=W*X+V*aa;gl_Position=vec4(F*z,0,1);ba=L||K&&I<A;gl_Position.xy*=float(!ba);\\n#ifdef VERTEX_TEXTURES\\nfloat ca=ha(R);gl_Position.xy*=sign(ca);bool da=mod(R.r/32.,2.)>=1.;h=mix(h,vec2(i.z,0)-h,float(da));i.xy=mix(i.xy,i.zz-i.yx,float(da));l=texture2D(c,ea(fa(v.yz),m));l.a*=ca;\\n#endif\\n}", "precision mediump float;\\n#if _a==1\\nuniform vec3 a;vec4 R(float x){vec4 y=vec4(a,mod(x,256.)/255.);y.z+=mod(floor(x/256.),128.)/255.;return y;}vec4 S(vec4 x,float y){return R(y);}\\n#else\\nvec4 S(vec4 x,float y){return x;}\\n#endif\\nuniform vec2 b,g,t,v;uniform sampler2D c,f,s,u;vec2 T(float x,float y){x=(x+.5)/b.x;return vec2(fract(x),(float(_c)*floor(x)+y+.5)/b.y);}\\n#if _b==1\\nuniform vec2 d;uniform sampler2D e;\\n#ifndef VERTEX_TEXTURES\\nfloat U(vec2 x){float y=(x.x+.5)/d.x;vec2 z=vec2(fract(y),(floor(y)+.5)/d.y);return dot(floor(.5+255.*texture2D(e,z)),vec4(16777216.,65536.,256,1));}\\n#endif\\n#else\\nfloat U(vec2 x){return x.y;}\\n#endif\\n#ifndef VERTEX_TEXTURES\\nvec4 V(float x){x=(x+.5)/g.x;return floor(.5+255.*texture2D(f,vec2(fract(x),(floor(x)+.5)/g.y)));}float W(vec4 x){return mod(x.r,32.)/31.;}\\n#endif\\nprecision highp float;varying vec2 h;varying vec3 i,k;varying float j;varying vec4 l;uniform float m,w;\\n#ifdef VERTEX_TEXTURES\\nvarying float n;\\n#else\\nvarying float o;\\n#endif\\nvoid main(){const float x=float(_e);vec2 y,z,E,F,G,H,I,J,K,L,M;y=h;z=i.xy;bool A;\\n#ifdef VERTEX_TEXTURES\\nA=n>.5;\\n#else\\nvec4 B=V(k.z);float C=W(B);if(C==0.)discard;A=clamp(floor(B.r/64.),0.,1.)>.5;if(A&&abs(y.y)>o*.5)discard;if(mod(B.r/32.,2.)>=1.){y=vec2(i.z,0)-y;z=i.zz-z.yx;}\\n#endif\\nfloat D,N,O,P;D=floor(y.x);E=texture2D(s,(vec2(D,j)+.5)/t).rg;F=128.-255.*E;G=D+F;H=step(z.xx,G)*step(G,z.yy)*ceil(E);if(H.x+H.y==0.)discard;I=4.*255.*texture2D(s,(vec2(G.x+(A?1.:0.),j)+.5)/t).ba+1.;J=A?vec2(-y.y,-F.x):vec2(-F.x,y.y);K=I+J;I=4.*255.*texture2D(s,(vec2(G.y+(A?1.:0.),j)+.5)/t).ba+1.;J=A?vec2(-y.y,-F.y):vec2(-F.y,y.y);L=I+J;M=vec2(texture2D(u,K/v).a,texture2D(u,L/v).a);M*=H;N=max(M.x,M.y);O=(N-.5)*255./12./x;P=clamp(O+.5+w,0.,1.);if(P==0.)discard;vec4 Q;\\n#ifdef VERTEX_TEXTURES\\nQ=l;\\n#else\\nQ=texture2D(c,T(U(k.xy),m));Q.a*=C;\\n#endif\\nQ.a*=P;gl_FragColor=S(Q,k.x);}");
    this.Z = a;
    this.ma = L4(this.C, 3, 766, 17);
    this.ca = L4(this.C, 4, 783, 17);
    this.ha = L4(this.C, 4, 800, 17);
    this.ba = L4(this.C, 4, 817, 17);
    this.ea = L4(this.C, 3, 834, 17);
    this.Wb = new O4(function (a) {
        return a.M
    });
    M4(this.C, this.Wb);
    this.fb = new O4(function (a) {
        return a.I
    });
    M4(this.C, this.fb);
    this.yb = new O4(function (a) {
        return a.G
    });
    M4(this.C, this.yb);
    this.xa = new O4(function (a) {
        return a.F
    });
    M4(this.C, this.xa);
    this.Ba = new O4(function (a) {
        return a.D
    });
    M4(this.C, this.Ba);
    this.Ka = new O4(function (a) {
        return a.U
    });
    M4(this.C, this.Ka);
    this.Ja = new O4(function (a) {
        return a.V
    });
    M4(this.C, this.Ja);
    this.Va = new O4(function (a) {
        return a.C
    });
    M4(this.C, this.Va);
    this.Ta = new O4(function (a) {
        return a.Q
    });
    M4(this.C, this.Ta);
    this.qa = new O4(function (a) {
        return a.zk
    });
    M4(this.C, this.qa);
    this.Pc = new O4(function (a) {
        return a.transform
    });
    M4(this.C, this.Pc);
    this.Rb = new O4(function (a) {
        return a.text
    });
    M4(this.C, this.Rb);
    this.Bb = new O4(function (a) {
        return a.fb
    });
    M4(this.C, this.Bb);
    this.Y = new O4(function (a) {
        return a.Ti
    });
    M4(this.C, this.Y);
    this.X = new O4(function (a) {
        return a.Si
    });
    M4(this.C, this.X);
    this.V = new O4(function (a) {
        return a.Rb
    });
    M4(this.C, this.V);
    N4(this.C, "_a");
    N4(this.C, "_b")
};

t0a.prototype.D = function (a) {
    var b = this.Z;
    this.ma.index = b.getAttribLocation(a, "s");
    this.ca.index = b.getAttribLocation(a, "t");
    this.ha.index = b.getAttribLocation(a, "u");
    this.ba.index = b.getAttribLocation(a, "v");
    this.ea.index = b.getAttribLocation(a, "w");
    this.Wb.location = b.getUniformLocation(a, "a");
    this.fb.location = b.getUniformLocation(a, "b");
    this.yb.location = b.getUniformLocation(a, "c");
    this.xa.location = b.getUniformLocation(a, "d");
    this.Ba.location = b.getUniformLocation(a, "e");
    this.Ka.location = b.getUniformLocation(a, "f");
    this.Ja.location = b.getUniformLocation(a, "g");
    this.Va.location = b.getUniformLocation(a, "m");
    this.Ta.location = b.getUniformLocation(a, "p");
    this.qa.location = b.getUniformLocation(a, "q");
    this.Pc.location = b.getUniformLocation(a, "r");
    this.Rb.location = b.getUniformLocation(a, "s");
    this.Bb.location = b.getUniformLocation(a, "t");
    this.Y.location = b.getUniformLocation(a, "u");
    this.X.location = b.getUniformLocation(a, "v");
    this.V.location = b.getUniformLocation(a, "w")
};

t0a.prototype.F = function (a, b) {
    switch (a) {
    case 0:
        return b.K;
    case 1:
        return b.N;
    default:
        return 0
    }
};

var a6 = function (a, b, c) {
    this.C = k;
    this.F = a;
    this.G = b;
    this.D = c || {
        jy: i
    }
};

B(a6, A4);
v = a6.prototype;
v.lu = B4;
v.wf = function () {
    var a = F4(this);
    C4(this, a.V, 5121);
    C4(this, a.K, 5121);
    C4(this, a.X, 5123);
    C4(this, a.ma, 5126);
    C4(this, a.Ba, 5126);
    C4(this, a.Y, 5123);
    this.D.Vh || (C4(this, a.xa, 5122), this.Lb = this.gfa)
};

v.Fd = "point text";
v.dw = function (a) {
    return !a.Sg.ON
};

v.df = function (a, b) {
    var c = E4(this);
    H4(this, a.iv, 2, c.text, c.fb);
    H4(this, a.Ih, 1, c.D, c.F);
    H4(this, this.G, 0, c.G, c.I);
    H4(this, a.At, 3, c.U, c.V);
    c_a(this, a.transform, a.az.width, a.az.height, !this.D.jy);
    a6.ia.df.call(this, a, b)
};

v.ip = function () {
    this.getContext().disable(2929)
};

v.zb = function (a) {
    return 4 * a.Sg.jt.length
};

v.Fg = function (a, b) {
    for (var c = 0, d = a.Sg.jt, e = d.length, f = a.Hc, g = b.count / 4; g < e; ++g) {
        var j = d[g],
            m = j.Ed,
            n = m.K;
        if (n) {
            for (var p = j.fd, p = j.gi || f.Qf(p), q = J3(this.F, p), p = j.Wd.Sy, s = j.Wd.Ty, t = j.Wd.altitude, x = j.Wd.Lv, D = j.Wd.Mv, I = j.fd, j = j.Pk, K = m.cf, m = m.Vg, J = 0; 4 > J; ++J) this.Lb(n.width, n.height, J, n.left, n.top, p, s, t, x, D, I, q, j, K, m);
            c += 4
        }
    }
    a.Sg.ON = i;
    return c
};

v.Lb = function (a, b, c, d, e, f, g, j, m, n, p, q, s) {
    var t = this.C.C,
        x = t.D,
        D = t.G,
        I = t.sq,
        K = t.offset,
        J = K / 4,
        M = K / 2;
    I[K] = a;
    I[K + 1] = b;
    I[K + 4] = c;
    D[M + 4] = d;
    D[M + 5] = e;
    x[J + 3] = f;
    x[J + 4] = g;
    x[J + 5] = j;
    x[J + 6] = m;
    x[J + 7] = n;
    D[M + 16] = p;
    D[M + 17] = q;
    D[M + 18] = s;
    t.offset += 40
};

v.gfa = function (a, b, c, d, e, f, g, j, m, n, p, q, s, t, x) {
    var D = this.C.C,
        I = D.D,
        K = D.G,
        J = D.sq,
        M = D.F,
        Q = D.offset,
        aa = Q / 4,
        ba = Q / 2;
    J[Q] = a;
    J[Q + 1] = b;
    J[Q + 4] = c;
    K[ba + 4] = d;
    K[ba + 5] = e;
    I[aa + 3] = f;
    I[aa + 4] = g;
    I[aa + 5] = j;
    I[aa + 6] = m;
    I[aa + 7] = n;
    K[ba + 16] = p;
    K[ba + 17] = q;
    K[ba + 18] = s;
    M[ba + 20] = t;
    M[ba + 21] = x;
    D.offset += 44
};

var u0a = function (a, b, c) {
    this.C = new K4(this, a, b, c || [], "#define _d 26\\n#define _e -1023\\n", "#if _a==1\\nuniform vec3 a;\\n#else\\n#endif\\nuniform vec2 b,g,h;uniform sampler2D c,f;vec2 F(float w,float x){w=(w+.5)/b.x;return vec2(fract(w),(float(_d)*floor(w)+x+.5)/b.y);}\\n#if _b==1\\nuniform vec2 d;uniform sampler2D e;\\n#ifdef VERTEX_TEXTURES\\nfloat G(vec2 w){float x=(w.x+.5)/d.x;vec2 y=vec2(fract(x),(floor(x)+.5)/d.y);return dot(floor(.5+255.*texture2D(e,y)),vec4(16777216.,65536.,256,1));}\\n#endif\\n#else\\nfloat G(vec2 w){return w.y;}\\n#endif\\n#ifdef VERTEX_TEXTURES\\nvec4 H(float w){w=(w+.5)/g.x;return floor(.5+255.*texture2D(f,vec2(fract(w),(floor(w)+.5)/g.y)));}float I(vec4 w){return mod(w.r,32.)/31.;}float J(vec4 w){float x=w.g*16.+floor(w.a/16.);return x/2.+float(_e);}float K(vec4 w){float x=w.b*16.+mod(w.a,16.);return x/2.+float(_e);}vec2 L(vec4 w){return vec2(J(w),K(w));}\\n#endif\\nvec2 M(vec4 w,vec2 x,vec2 y,bool z){vec2 A,B,C,D,E;A=h/2.;B=mod(h,2.)/2.;C=A*w.xy/w.w;D=C+x*vec2(1,-1);E=floor(D+.5-B)+B;E+=(1.-float(z))*(D-E);E+=y*vec2(1,-1);return E*w.w/A;}vec2 N(vec4 w,vec2 x){return M(w,x,vec2(0),false);}varying vec2 i;varying vec3 j;varying vec4 k;\\n#ifndef VERTEX_TEXTURES\\nvarying vec2 l;\\n#endif\\nuniform float m;attribute vec2 p;attribute float q;attribute vec2 r;attribute vec3 s;attribute vec2 t;attribute vec3 u;\\n#ifndef VERTEX_TEXTURES\\nattribute vec2 v;\\n#endif\\nuniform mat4 n;uniform mat2 o;void main(){vec2 w,x,z,B;w=p;w.x+=4.;x=vec2(floor(q/2.),-2.*mod(floor((q+1.)/2.),2.)+1.);i=x*w+r;i.x-=2.;j=u;vec4 y=n*vec4(s,1);\\n#ifdef VERTEX_TEXTURES\\nvec4 A=H(u.z);z=L(A);\\n#else\\nz=v;l=v;\\n#endif\\nB=o*t;gl_Position=vec4(N(y,B+z+x*w-vec2(2,0)),0,y.w);\\n#ifdef VERTEX_TEXTURES\\nfloat C=I(A);gl_Position.xy*=sign(C);k=texture2D(c,F(G(u.xy),m));k.a*=C;\\n#endif\\n}", "precision mediump float;\\n#if _a==1\\nuniform vec3 a;vec4 C(float r){vec4 s=vec4(a,mod(r,256.)/255.);s.z+=mod(floor(r/256.),128.)/255.;return s;}vec4 D(vec4 r,float s){return C(s);}\\n#else\\nvec4 D(vec4 r,float s){return r;}\\n#endif\\nuniform vec2 b,g,q;uniform sampler2D c,f,p;vec2 E(float r,float s){r=(r+.5)/b.x;return vec2(fract(r),(float(_d)*floor(r)+s+.5)/b.y);}\\n#if _b==1\\nuniform vec2 d;uniform sampler2D e;\\n#ifndef VERTEX_TEXTURES\\nfloat F(vec2 r){float s=(r.x+.5)/d.x;vec2 t=vec2(fract(s),(floor(s)+.5)/d.y);return dot(floor(.5+255.*texture2D(e,t)),vec4(16777216.,65536.,256,1));}\\n#endif\\n#else\\nfloat F(vec2 r){return r.y;}\\n#endif\\n#ifndef VERTEX_TEXTURES\\nvec4 G(float r){r=(r+.5)/g.x;return floor(.5+255.*texture2D(f,vec2(fract(r),(floor(r)+.5)/g.y)));}float H(vec4 r){return mod(r.r,32.)/31.;}float I(vec4 r){float s=r.g*16.+floor(r.a/16.);return s/2.+float(_e);}float J(vec4 r){float s=r.b*16.+mod(r.a,16.);return s/2.+float(_e);}vec2 K(vec4 r){return vec2(I(r),J(r));}\\n#endif\\nprecision highp float;varying vec2 i;varying vec3 j;varying vec4 k;\\n#ifndef VERTEX_TEXTURES\\nvarying vec2 l;\\n#endif\\nuniform float m;void main(){\\n#ifndef VERTEX_TEXTURES\\nvec4 r=G(j.z);vec2 s,u;s=K(r);float t=H(r);u=l-s;if(t==0.||dot(u,u)>=.6)discard;\\n#endif\\nfloat v=texture2D(p,i/q).a;\\n#if _c=1\\nvec2 w,x,y;w=i/q;x=vec2(1,0)/q;y=vec2(0,1)/q;const float z=.9717;const float A=.5454;v+=A*texture2D(p,w-x-y).a+z*texture2D(p,w-x).a+A*texture2D(p,w-x+y).a+z*texture2D(p,w-y).a+z*texture2D(p,w+y).a+A*texture2D(p,w+x-y).a+z*texture2D(p,w+x).a+A*texture2D(p,w+x+y).a;v=min(v,1.);\\n#endif\\nif(v==0.)discard;vec4 B;\\n#ifdef VERTEX_TEXTURES\\nB=k;\\n#else\\nB=texture2D(c,E(F(j.xy),m));B.a*=t;\\n#endif\\nB.a*=v;gl_FragColor=D(B,j.x);}");
    this.Z = a;
    this.V = L4(this.C, 2, 1122, 17);
    this.K = L4(this.C, 1, 1139, 18);
    this.X = L4(this.C, 2, 1157, 17);
    this.ma = L4(this.C, 3, 1174, 17);
    this.Ba = L4(this.C, 2, 1191, 17);
    this.Y = L4(this.C, 3, 1208, 17);
    this.xa = L4(this.C, 2, 1250, 17);
    this.Bb = new O4(function (a) {
        return a.M
    });
    M4(this.C, this.Bb);
    this.Ta = new O4(function (a) {
        return a.I
    });
    M4(this.C, this.Ta);
    this.Va = new O4(function (a) {
        return a.G
    });
    M4(this.C, this.Va);
    this.ba = new O4(function (a) {
        return a.F
    });
    M4(this.C, this.ba);
    this.ca = new O4(function (a) {
        return a.D
    });
    M4(this.C, this.ca);
    this.ha = new O4(function (a) {
        return a.U
    });
    M4(this.C, this.ha);
    this.ea = new O4(function (a) {
        return a.V
    });
    M4(this.C, this.ea);
    this.Ja = new O4(function (a) {
        return a.Q
    });
    M4(this.C, this.Ja);
    this.Ka = new O4(function (a) {
        return a.C
    });
    M4(this.C, this.Ka);
    this.Rb = new O4(function (a) {
        return a.transform
    });
    M4(this.C, this.Rb);
    this.qa = new O4(function (a) {
        return a.Ka
    });
    M4(this.C, this.qa);
    this.yb = new O4(function (a) {
        return a.text
    });
    M4(this.C, this.yb);
    this.fb = new O4(function (a) {
        return a.fb
    });
    M4(this.C, this.fb);
    N4(this.C, "_a");
    N4(this.C, "_b");
    N4(this.C, "_c")
};

u0a.prototype.D = function (a) {
    var b = this.Z;
    this.V.index = b.getAttribLocation(a, "p");
    this.K.index = b.getAttribLocation(a, "q");
    this.X.index = b.getAttribLocation(a, "r");
    this.ma.index = b.getAttribLocation(a, "s");
    this.Ba.index = b.getAttribLocation(a, "t");
    this.Y.index = b.getAttribLocation(a, "u");
    this.xa.index = b.getAttribLocation(a, "v");
    this.Bb.location = b.getUniformLocation(a, "a");
    this.Ta.location = b.getUniformLocation(a, "b");
    this.Va.location = b.getUniformLocation(a, "c");
    this.ba.location = b.getUniformLocation(a, "d");
    this.ca.location = b.getUniformLocation(a, "e");
    this.ha.location = b.getUniformLocation(a, "f");
    this.ea.location = b.getUniformLocation(a, "g");
    this.Ja.location = b.getUniformLocation(a, "h");
    this.Ka.location = b.getUniformLocation(a, "m");
    this.Rb.location = b.getUniformLocation(a, "n");
    this.qa.location = b.getUniformLocation(a, "o");
    this.yb.location = b.getUniformLocation(a, "p");
    this.fb.location = b.getUniformLocation(a, "q")
};

u0a.prototype.F = function (a, b) {
    switch (a) {
    case 0:
        return b.K;
    case 1:
        return b.N;
    case 2:
        return b.Pc;
    default:
        return 0
    }
};

var v0a = function (a, b, c) {
    this.C = new K4(this, a, b, c || [], "#define _c 26\\n#define _d 8\\n", "#if _a==1\\nuniform vec3 a;vec4 D(float v){vec4 w=vec4(a,mod(v,256.)/255.);w.z+=mod(floor(v/256.),128.)/255.;return w;}vec4 E(vec4 v,float w){return D(w);}\\n#else\\nvec4 E(vec4 v,float w){return v;}\\n#endif\\nuniform vec2 b,n;uniform sampler2D c;vec2 F(float v,float w){v=(v+.5)/b.x;return vec2(fract(v),(float(_c)*floor(v)+w+.5)/b.y);}vec2 G(){return vec2(0,1./b.y);}\\n#if _b==1\\nuniform vec2 d;uniform sampler2D e;\\n#ifdef VERTEX_TEXTURES\\nfloat H(vec2 v){float w=(v.x+.5)/d.x;vec2 x=vec2(fract(w),(floor(w)+.5)/d.y);return dot(floor(.5+255.*texture2D(e,x)),vec4(16777216.,65536.,256,1));}\\n#endif\\n#else\\nfloat H(vec2 v){return v.y;}\\n#endif\\n#ifdef VERTEX_TEXTURES\\nvec2 I(vec2 v,vec2 w){return 127.5*texture2D(c,v+2.*w).rg;}vec2 J(vec2 v,vec2 w){vec4 x=255./64.*texture2D(c,v+w);return 256.*x.rb+x.ga;}\\n#endif\\nvarying float f;\\n#ifdef VERTEX_TEXTURES\\nvarying vec4 g;varying vec2 h;\\n#else\\nvarying vec2 i;\\n#endif\\nuniform float j,k,l,o;attribute vec4 p;attribute vec3 q;attribute float r;attribute vec2 s;\\n#ifndef VERTEX_TEXTURES\\nattribute vec4 t;\\n#endif\\nattribute float u;uniform mat4 m;\\n#ifndef VERTEX_TEXTURES\\nvec2 K(){return mix(t.xy,t.zw,float(o>0.))/float(_d);}\\n#endif\\nvec3 L(vec2 v){vec4 w=m*vec4(v,0,1);return vec3(n*w.xy/w.w,w.w);}vec2 M(vec2 v,vec3 w,vec2 x,vec2 y,vec2 z){float A,B;A=q.z;B=.5*mix(v.y,v.x,1./w.z);return w.xy+A*B*z;}vec4 N(vec2 v,vec2 w,vec2 x){vec3 y=L(p.xy);vec2 z,A,B,C;z=y.xy;A=normalize(L(p.zw).xy-z);B=vec2(-A.y,A.x);C=M(x,y,v,w,B);return sign(y.z)*vec4(C/n,mix(s.x,s.y,float(o>.5))-l,1);}void main(){float v=q.x;vec2 w,x,y,z;w=q.xy;\\n#ifdef VERTEX_TEXTURES\\nx=F(H(w),j);y=G();z=J(x,y)*max(u/32.,.001);\\n#else\\nz=K();i=w;\\n#endif\\ngl_Position=N(x,y,z);f=r;\\n#ifdef VERTEX_TEXTURES\\ng=E(texture2D(c,x),v);h=I(x,y);\\n#endif\\n}", "precision mediump float;\\n#if _a==1\\nuniform vec3 a;vec4 t(float p){vec4 q=vec4(a,mod(p,256.)/255.);q.z+=mod(floor(p/256.),128.)/255.;return q;}vec4 u(vec4 p,float q){return t(q);}\\n#else\\nvec4 u(vec4 p,float q){return p;}\\n#endif\\nuniform vec2 b;uniform sampler2D c;vec2 v(float p,float q){p=(p+.5)/b.x;return vec2(fract(p),(float(_c)*floor(p)+q+.5)/b.y);}vec2 w(){return vec2(0,1./b.y);}\\n#if _b==1\\nuniform vec2 d;uniform sampler2D e;\\n#ifndef VERTEX_TEXTURES\\nfloat x(vec2 p){float q=(p.x+.5)/d.x;vec2 r=vec2(fract(q),(floor(q)+.5)/d.y);return dot(floor(.5+255.*texture2D(e,r)),vec4(16777216.,65536.,256,1));}\\n#endif\\n#else\\nfloat x(vec2 p){return p.y;}\\n#endif\\nvec2 y(vec2 p,vec2 q){return 127.5*texture2D(c,p+2.*q).rg;}varying float f;\\n#ifdef VERTEX_TEXTURES\\nvarying vec4 g;varying vec2 h;\\n#else\\nvarying vec2 i;\\n#endif\\nuniform float j;vec4 z(vec4 p){return p;}void main(){vec4 p;vec2 q;\\n#ifdef VERTEX_TEXTURES\\np=g;q=h;\\n#else\\nvec2 r=v(x(i),j);p=u(texture2D(c,r),i.x);q=y(r,w());\\n#endif\\nfloat s=step(q.x,mod(f,q.y));if(s>.5)discard;gl_FragColor=z(p);}");
    this.Z = a;
    this.P = L4(this.C, 4, 919, 17);
    this.M = L4(this.C, 3, 936, 17);
    this.N = L4(this.C, 1, 953, 18);
    this.G = L4(this.C, 2, 971, 17);
    this.I = L4(this.C, 4, 1013, 17);
    this.U = L4(this.C, 1, 1038, 18);
    this.xa = new O4(function (a) {
        return a.M
    });
    M4(this.C, this.xa);
    this.ma = new O4(function (a) {
        return a.I
    });
    M4(this.C, this.ma);
    this.qa = new O4(function (a) {
        return a.G
    });
    M4(this.C, this.qa);
    this.X = new O4(function (a) {
        return a.F
    });
    M4(this.C, this.X);
    this.Y = new O4(function (a) {
        return a.D
    });
    M4(this.C, this.Y);
    this.ha = new O4(function (a) {
        return a.C
    });
    M4(this.C, this.ha);
    this.ca = new O4(function (a) {
        return a.maxWidth
    });
    M4(this.C, this.ca);
    this.V = new O4(function (a) {
        return a.X
    });
    M4(this.C, this.V);
    this.Ba = new O4(function (a) {
        return a.transform
    });
    M4(this.C, this.Ba);
    this.ba = new O4(function (a) {
        return a.Y
    });
    M4(this.C, this.ba);
    this.ea = new O4(function (a) {
        return a.P
    });
    M4(this.C, this.ea);
    N4(this.C, "_a");
    N4(this.C, "_b")
};

v0a.prototype.D = function (a) {
    var b = this.Z;
    this.P.index = b.getAttribLocation(a, "p");
    this.M.index = b.getAttribLocation(a, "q");
    this.N.index = b.getAttribLocation(a, "r");
    this.G.index = b.getAttribLocation(a, "s");
    this.I.index = b.getAttribLocation(a, "t");
    this.U.index = b.getAttribLocation(a, "u");
    this.xa.location = b.getUniformLocation(a, "a");
    this.ma.location = b.getUniformLocation(a, "b");
    this.qa.location = b.getUniformLocation(a, "c");
    this.X.location = b.getUniformLocation(a, "d");
    this.Y.location = b.getUniformLocation(a, "e");
    this.ha.location = b.getUniformLocation(a, "j");
    this.ca.location = b.getUniformLocation(a, "k");
    this.V.location = b.getUniformLocation(a, "l");
    this.Ba.location = b.getUniformLocation(a, "m");
    this.ba.location = b.getUniformLocation(a, "n");
    this.ea.location = b.getUniformLocation(a, "o")
};

v0a.prototype.F = function (a, b) {
    switch (a) {
    case 0:
        return b.K;
    case 1:
        return b.N;
    default:
        return 0
    }
};

var w0a = function () {
    this.C = k
};

B(w0a, A4);
var x0a = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
v = w0a.prototype;
v.Fd = "scaling";
v.wf = function () {
    this.C.D = 5;
    var a = F4(this);
    C4(this, a.X, 5120);
    C4(this, a.V, 5121)
};

v.df = function (a) {
    var b = this.getContext();
    b.disable(3042);
    b.disable(2929);
    b.disable(3089);
    b = E4(this);
    a.source.bindTexture(0);
    b.ca.set(0);
    a.y5.activate(a.width, a.height);
    b.transform.C(x0a)
};

v.zb = u(4);
v.Fg = function () {
    this.Lb(-1, -1, 0, 0, 0);
    this.Lb(1, -1, 0, 255, 0);
    this.Lb(-1, 1, 0, 0, 255);
    this.Lb(1, 1, 0, 255, 255);
    return 4
};

var b6 = function () {
    this.C = k
};

B(b6, A4);
b6.prototype.Fd = "fullscreen";
b6.prototype.wf = function () {
    C4(this, F4(this).K, 5121);
    this.C.D = 5
};

b6.prototype.zb = u(4);
b6.prototype.Fg = function () {
    this.Lb(0);
    this.Lb(1);
    this.Lb(2);
    this.Lb(3);
    return 4
};

var y0a = function () {
    this.C = k
};

B(y0a, b6);
y0a.prototype.df = function (a) {
    E4(this).Ae.set(a)
};

var z0a = function (a, b, c) {
    this.C = new K4(this, a, b, c || [], "", "varying vec2 a;attribute float b;void main(){a=vec2(mod(b,2.),floor(b/2.));gl_Position=vec4(a*2.-1.,0,1);}", "precision highp float;varying vec2 a;uniform float b;void main(){if(gl_FragCoord.y<b-40.)discard;vec4 c=gl_FragCoord.y<b?vec4(.9,.9,.9,0):vec4(.7,.8,1,1);float d=smoothstep(0.,40.,abs(gl_FragCoord.y-b));gl_FragColor=mix(vec4(.95,.95,.95,1),c,d);}");
    this.Z = a;
    this.K = L4(this.C, 1, 15, 18);
    this.V = new O4(function (a) {
        return a.Ae
    });
    M4(this.C, this.V)
};

z0a.prototype.D = function (a) {
    var b = this.Z;
    this.K.index = b.getAttribLocation(a, "b");
    this.V.location = b.getUniformLocation(a, "b")
};

z0a.prototype.F = function (a) {
    switch (a) {
    default:
        return 0
    }
};

var c6 = function () {
    this.C = k
};

B(c6, A4);
c6.prototype.wf = function () {
    this.C.D = 5;
    C4(this, F4(this).V, 5123)
};

c6.prototype.Fd = "stencil";
c6.prototype.zb = u(4);
c6.prototype.Fg = function (a) {
    a = a.Hc;
    this.Lb(0, a.getHeight());
    this.Lb(0, 0);
    this.Lb(a.getWidth(), a.getHeight());
    this.Lb(a.getWidth(), 0);
    return 4
};

var A0a = function (a) {
    this.C = k;
    this.D = t0();
    this.F = sD();
    this.G = {};

    this.I = a - 1
};

B(A0a, A4);
v = A0a.prototype;
v.wf = function () {
    this.C.D = 5;
    C4(this, F4(this).V, 5126)
};

v.Fd = "stencilviewport";
v.df = function () {
    E4(this).transform.C(this.D)
};

v.zb = u(4);
v.Fg = function () {
    this.Lb(-0.5, 0.5);
    this.Lb(-0.5, -0.5);
    this.Lb(0.5, 0.5);
    this.Lb(0.5, -0.5);
    return 4
};

var d6 = function (a, b) {
    N2.call(this, a, l, 9728, b || 0.5);
    this.TK = {}
};

B(d6, N2);
var B0a = function (a, b, c) {
    if (!a.activate(b, c)) return l;
    a.$b.enable(2929);
    a.$b.disable(2960);
    a.$b.disable(3042);
    if (!a.Gi || !a.$b.C.contains(a.Gi)) a.$b.clear(16640), a.TK = {};

    return i
};

d6.prototype.eh = function (a) {
    this.$b.disable(2929);
    this.$b.enable(2960);
    this.$b.enable(3042);
    this.TK[a] = i
};

var C0a = function (a, b, c) {
    this.C = new K4(this, a, b, c || [], "#define _d 26\\n#define _e 8\\n#define _f 3\\n#define _g 4\\n#define _h 8\\n#define _i 100\\n#define _j 65535\\n#define _k 65534.5\\n#define _l 5\\n#define _m " + 1 / Math.cos(Math.PI / 5) + "\\n#define _n " + Math.PI + "\\n", "#if _a==1\\nuniform vec3 a;vec4 P(float G){vec4 H=vec4(a,mod(G,256.)/255.);H.z+=mod(floor(G/256.),128.)/255.;return H;}vec4 Q(vec4 G,float H){return P(H);}\\n#else\\nvec4 Q(vec4 G,float H){return G;}\\n#endif\\nuniform vec2 b,f,y;uniform sampler2D c;vec2 R(float G,float H){G=(G+.5)/b.x;return vec2(fract(G),(float(_d)*floor(G)+H+.5)/b.y);}vec2 S(){return vec2(0,1./b.y);}\\n#if _b==1\\nuniform vec2 d;uniform sampler2D e;\\n#ifdef VERTEX_TEXTURES\\nfloat T(vec2 G){float H=(G.x+.5)/d.x;vec2 I=vec2(fract(H),(floor(H)+.5)/d.y);return dot(floor(.5+255.*texture2D(e,I)),vec4(16777216.,65536.,256,1));}\\n#endif\\n#else\\nfloat T(vec2 G){return G.y;}\\n#endif\\n#ifdef VERTEX_TEXTURES\\nvec4 U(vec2 G,vec2 H){return vec4(127.5,127.5,255,255)*texture2D(c,G+2.*H);}vec2 V(vec2 G,vec2 H){vec4 I=255./64.*texture2D(c,G+H);return 256.*I.rb+I.ga;}\\n#endif\\nvarying float g,r,t;\\n#ifdef VERTEX_TEXTURES\\nvarying vec4 h,i;\\n#else\\nvarying vec2 j;\\n#endif\\nuniform float k,l,m,n,p,s;attribute vec2 z;attribute vec3 A;\\n#ifndef VERTEX_TEXTURES\\nattribute vec4 B;\\n#endif\\nattribute vec2 C;uniform mat4 o;\\n#ifndef VERTEX_TEXTURES\\nvec2 W();\\n#endif\\nvec4 X(vec2 G,vec2 H,vec2 I);vec4 Y(vec4 G);void Z(vec2 G,vec4 H);void main(){float G,I;G=A.x;vec2 H,J,K,L;H=A.xy;I=A.z;\\n#ifdef VERTEX_TEXTURES\\nK=R(T(H),k);L=S();J=V(K,L);\\n#else\\nJ=W();j=H;\\n#endif\\nvec4 M=X(K,L,J);Z(J,M);gl_Position=Y(M);g=I;\\n#ifdef VERTEX_TEXTURES\\nh=Q(texture2D(c,K),G);i=U(K,L);\\n#endif\\n}\\n#ifdef VERTEX_TEXTURES\\nvarying vec2 q;\\n#endif\\nvec2 aa(vec2 G,vec2 H){vec4 I=texture2D(c,G+float(_g)*H);return vec2(I.b,dot(I.ar,vec2(65536.,256)));}vec2 ba(vec2 G,vec2 H){vec4 I=texture2D(c,G+float(_f)*H);return vec2(I.g,I.b*255./float(_h));}vec2 ca(float G){return G*normalize((o*vec4(sin(s),cos(s),0,0)).xy);}float da(float G){return .2*G+.4*t;}varying vec2 u;\\n#if _c==0\\nvarying vec2 v;\\n#endif\\n#if _c==1\\nuniform mat4 w;\\n#else\\nuniform vec2 x;\\n#endif\\nattribute vec4 D;\\n#ifndef VERTEX_TEXTURES\\nattribute vec4 E;attribute vec4 F;vec2 W(){return mix(E.xy*256.+B.xy,E.zw*256.+B.zw,float(n>0.))/float(_e);}\\n#endif\\nvoid Z(vec2 G,vec4 H){}vec4 X(vec2 G,vec2 H,vec2 I){float J,L,M;\\n#ifdef VERTEX_TEXTURES\\nvec2 F=ba(G,H);r=F.x;J=F.y;q=aa(G,H);\\n#else\\nvec2 K=mix(F.zw,F.xy,float(n<.5));r=K.x/255.;J=K.y/float(_h);\\n#endif\\nL=.5*I.x;t=floor(I.x/75.);M=2.*_n*D.x/float(_l);u=vec2(cos(M),sin(M))*D.y*_m;vec2 N=L*u;\\n#if _c==0\\nvec4 O=o*vec4(z+N,0,1);\\n#else\\nvec4 O=w*vec4(z+N,0,1);\\n#endif\\n#if _c==0\\nv=x*(z+N);O.xy+=ca(J)/y;\\n#endif\\nreturn O;}vec4 Y(vec4 G){\\n#if _c==1\\nreturn vec4(G.xy,da(length(u)),G.w);\\n#else\\nreturn vec4(G.xy,G.w*(mix(C.x,C.y,float(n>.5))-m),G.w);\\n#endif\\n}", "precision mediump float;\\n#if _a==1\\nuniform vec3 a;vec4 G(float A){vec4 B=vec4(a,mod(A,256.)/255.);B.z+=mod(floor(A/256.),128.)/255.;return B;}vec4 H(vec4 A,float B){return G(B);}\\n#else\\nvec4 H(vec4 A,float B){return A;}\\n#endif\\nuniform vec2 b;uniform sampler2D c;vec2 I(float A,float B){A=(A+.5)/b.x;return vec2(fract(A),(float(_d)*floor(A)+B+.5)/b.y);}vec2 J(){return vec2(0,1./b.y);}\\n#if _b==1\\nuniform vec2 d;uniform sampler2D e;\\n#ifndef VERTEX_TEXTURES\\nfloat K(vec2 A){float B=(A.x+.5)/d.x;vec2 C=vec2(fract(B),(floor(B)+.5)/d.y);return dot(floor(.5+255.*texture2D(e,C)),vec4(16777216.,65536.,256,1));}\\n#endif\\n#else\\nfloat K(vec2 A){return A.y;}\\n#endif\\nvec4 L(vec2 A,vec2 B){return vec4(127.5,127.5,255,255)*texture2D(c,A+2.*B);}varying float g,r,t;\\n#ifdef VERTEX_TEXTURES\\nvarying vec4 h,i;\\n#else\\nvarying vec2 j;\\n#endif\\nuniform float k;void M(float A);vec4 N(vec4 A);void main(){vec4 A,B;\\n#ifdef VERTEX_TEXTURES\\nA=h;B=i;\\n#else\\nvec2 C,D;C=I(K(j),k);D=J();A=H(texture2D(c,C),j.x);B=L(C,D);\\n#endif\\nfloat E,F;E=step(252.,B.r+B.g);F=E*(g>.5?B.b:g<-.5?1.:B.a);M(F);gl_FragColor=N(A);}\\n#ifdef VERTEX_TEXTURES\\nvarying vec2 q;\\n#endif\\nvec2 O(vec2 A,vec2 B){vec4 C=texture2D(c,A+float(_g)*B);return vec2(C.b,dot(C.ar,vec2(65536.,256)));}vec2 P(){\\n#ifndef VERTEX_TEXTURES\\nvec2 A=I(K(j),k);return O(A,J());\\n#else\\nreturn q;\\n#endif\\n}float Q(float A,float B){return clamp(1.-r/(1.01-B)*(abs(A)-B),0.,1.);}float R(vec4 A){return clamp((1.-A.r)*2.-t,0.,1.);}vec4 S(float A){float B=.5*A+.5*t;return vec4(vec3(1)*(1.-B),1);}varying vec2 u;\\n#if _c==0\\nvarying vec2 v;\\n#endif\\n#if _c==0\\nuniform sampler2D z;\\n#endif\\nvoid M(float A){\\n#if _c==0\\nfloat B=P().y;if(g<.5&&B<_k)A=0.;\\n#endif\\nif(A==0.||length(u)>1.)discard;}vec4 N(vec4 A){\\n#if _c==1\\nreturn S(length(u));\\n#else\\nfloat B,C;B=R(texture2D(z,v));B=min(B,length(u));C=P().x;return vec4(A.rgb,Q(B,C)*A.a);\\n#endif\\n}");
    this.Z = a;
    this.Q = L4(this.C, 2, 933, 17);
    this.L = L4(this.C, 3, 950, 17);
    this.I = L4(this.C, 4, 992, 17);
    this.G = L4(this.C, 2, 1017, 17);
    this.V = L4(this.C, 4, 1847, 17);
    this.Wb = L4(this.C, 4, 1889, 17);
    this.qa = L4(this.C, 4, 1906, 17);
    this.Bb = new O4(function (a) {
        return a.M
    });
    M4(this.C, this.Bb);
    this.fb = new O4(function (a) {
        return a.I
    });
    M4(this.C, this.fb);
    this.yb = new O4(function (a) {
        return a.G
    });
    M4(this.C, this.yb);
    this.ea = new O4(function (a) {
        return a.F
    });
    M4(this.C, this.ea);
    this.ha = new O4(function (a) {
        return a.D
    });
    M4(this.C, this.ha);
    this.Ka = new O4(function (a) {
        return a.Q
    });
    M4(this.C, this.Ka);
    this.Va = new O4(function (a) {
        return a.C
    });
    M4(this.C, this.Va);
    this.Ba = new O4(function (a) {
        return a.maxWidth
    });
    M4(this.C, this.Ba);
    this.X = new O4(function (a) {
        return a.X
    });
    M4(this.C, this.X);
    this.Ta = new O4(function (a) {
        return a.P
    });
    M4(this.C, this.Ta);
    this.Rb = new O4(function (a) {
        return a.transform
    });
    M4(this.C, this.Rb);
    this.Ja = new O4(function (a) {
        return a.L
    });
    M4(this.C, this.Ja);
    this.xa = new O4(function (a) {
        return a.ba
    });
    M4(this.C, this.xa);
    this.ca = new O4(function (a) {
        return a.Ja
    });
    M4(this.C, this.ca);
    this.ba = new O4(function (a) {
        return a.Ba
    });
    M4(this.C, this.ba);
    this.ma = new O4(function (a) {
        return a.Y
    });
    M4(this.C, this.ma);
    this.Y = new O4(function (a) {
        return a.xa
    });
    M4(this.C, this.Y);
    N4(this.C, "_a");
    N4(this.C, "_b");
    N4(this.C, "_c")
};

C0a.prototype.D = function (a) {
    var b = this.Z;
    this.Q.index = b.getAttribLocation(a, "z");
    this.L.index = b.getAttribLocation(a, "A");
    this.I.index = b.getAttribLocation(a, "B");
    this.G.index = b.getAttribLocation(a, "C");
    this.V.index = b.getAttribLocation(a, "D");
    this.Wb.index = b.getAttribLocation(a, "E");
    this.qa.index = b.getAttribLocation(a, "F");
    this.Bb.location = b.getUniformLocation(a, "a");
    this.fb.location = b.getUniformLocation(a, "b");
    this.yb.location = b.getUniformLocation(a, "c");
    this.ea.location = b.getUniformLocation(a, "d");
    this.ha.location = b.getUniformLocation(a, "e");
    this.Ka.location = b.getUniformLocation(a, "f");
    this.Va.location = b.getUniformLocation(a, "k");
    this.Ba.location = b.getUniformLocation(a, "l");
    this.X.location = b.getUniformLocation(a, "m");
    this.Ta.location = b.getUniformLocation(a, "n");
    this.Rb.location = b.getUniformLocation(a, "o");
    this.Ja.location = b.getUniformLocation(a, "p");
    this.xa.location = b.getUniformLocation(a, "s");
    this.ca.location = b.getUniformLocation(a, "w");
    this.ba.location = b.getUniformLocation(a, "x");
    this.ma.location = b.getUniformLocation(a, "y");
    this.Y.location = b.getUniformLocation(a, "z")
};

C0a.prototype.F = function (a, b) {
    switch (a) {
    case 0:
        return b.K;
    case 1:
        return b.N;
    case 2:
        return b.ha;
    default:
        return 0
    }
};

var e6 = function (a, b, c) {
    F5.call(this, a, b, c);
    this.D.Vh || (this.I += 2)
};

B(e6, F5);
v = e6.prototype;
v.d0 = function () {
    if (!this.D.Vh) {
        var a = F4(this);
        C4(this, a.ca, 5121);
        C4(this, a.Ta, 5121)
    }
};

v.wf = function () {
    e6.ia.wf.call(this);
    this.d0();
    this.D.Vh || (e6.prototype.Lb = e6.prototype.HH)
};

v.Fd = "tactile lines";
v.ip = function () {
    E4(this).maxWidth.set(255);
    this.getContext().depthFunc(515)
};

v.Lb = function (a, b, c, d, e, f, g, j, m, n, p, q, s, t) {
    e6.ia.Lb.call(this, a, b, c, d, e, f, g, j, m, n, p, q, s, t)
};

v.HH = function (a, b, c, d, e, f, g, j, m, n, p, q, s, t) {
    e6.ia.HH.call(this, a, b, c, d, e, f, g, j, m, n, p, q, s, t);
    d = c = b = a = 0;
    if (y(f) && (f = K3(this.F, this.F.C[f])) && f.C && 0 < f.C.length) a = 255 * f.C[0].F, b = 8 * f.C[0].G, 1 < f.C.length ? (c = 255 * f.C[1].F, d = 8 * f.C[1].G) : d = c = 0;
    f = this.C.C;
    e = f.sq;
    g = f.offset;
    e[g] = a;
    e[g + 1] = b;
    e[g + 2] = c;
    e[g + 3] = d;
    e[g + 4] = p >> 8;
    e[g + 5] = q >> 8;
    e[g + 6] = s >> 8;
    e[g + 7] = t >> 8;
    f.offset += 8
};

var D0a = {
    line_gradient: i,
    line_drop_shadow: i,
    line_wide: i
};

e6.prototype.G = function () {
    return D0a
};

var f6 = function (a, b, c, d) {
    e6.call(this, a, b, c);
    this.M = d
};

B(f6, e6);
v = f6.prototype;
v.d0 = ea();
v.wf = function () {
    f6.ia.wf.call(this);
    if (!this.D.Vh) {
        var a = F4(this);
        C4(this, a.qa, 5121);
        C4(this, a.Bb, 5121)
    }
};

v.Fd = "tactile broad line";
v.ew = function (a, b) {
    var c = a.Hc,
        d = b[this.Fd],
        e = b[f6.prototype.Fd],
        f = this.getContext(),
        g = F4(this),
        j = E4(this);
    f && !e.Pi && (e.Pi = new d6(f, 0.5));
    e = e.Pi;
    if (!B0a(e, c.getWidth(), c.getHeight())) return l;
    j.ha = 1;
    g.C.activate(j);
    j.maxWidth.set(255);
    g = [2 / c.getWidth(), 0, 0, 0, 0, 2 / c.getHeight(), 0, 0, 0, 0, 0, 0, -1, -1, 0, 1];
    j.Ja.C(g);
    j.Y.set(c.getWidth() / 2, c.getHeight() / 2);
    o5.prototype.df.call(this, a, k);
    this.C.K = 1;
    D4(this, j.C, 0, [0]);
    D4(this, j.P, 0, [0]);
    j.Bb.set(1);
    G4(d, this.C);
    j.Bb.set(-1);
    G4(d, this.C);
    e.eh(this.Fd);
    this.M();
    return i
};

v.Ur = function (a, b) {
    var c = b[f6.prototype.Fd];
    return !c.Pi || !(c.Pi.Gi && c.Pi.TK[this.Fd] && c.Pi.$b.C.contains(c.Pi.Gi))
};

v.ip = function () {
    var a = E4(this);
    a.maxWidth.set(255);
    this.C.K = 2;
    D4(this, a.C, 0, [5]);
    D4(this, a.P, 0, [1]);
    a.ha = 0;
    F4(this).C.activate(a);
    this.getContext().depthFunc(513)
};

v.df = function (a, b) {
    f6.ia.df.call(this, a, b);
    var c = b[this.Fd],
        d = a.Hc,
        e = E4(this);
    c.Pi && (c.Pi.bindTexture(2), e.xa.set(2));
    e.Ba.set(1 / d.getWidth(), 1 / d.getHeight())
};

var E0a = {
    line_gradient: i,
    line_drop_shadow: i,
    line_wide: i,
    line_wide_gradient: i
};

f6.prototype.G = function () {
    return E0a
};

var g6 = function (a, b, c) {
    H5.call(this, a, b, c)
};

B(g6, H5);
v = g6.prototype;
v.j2 = function () {
    if (!this.D.Vh) {
        var a = F4(this);
        C4(this, a.ca, 5121);
        C4(this, a.fb, 5121)
    }
};

v.wf = function () {
    g6.ia.wf.call(this);
    this.j2()
};

v.Fd = "tactile joints and caps";
v.ip = function () {
    E4(this).maxWidth.set(255);
    this.getContext().depthFunc(513)
};

v.rD = function (a, b, c, d, e, f, g, j, m, n, p) {
    var p = p || 8,
        q = this.C.C,
        s = q.sq,
        q = q.offset;
    g6.ia.rD.call(this, a, b, c, d, e, f, g, j, m, n, p);
    f = e = c = a = 0;
    if (y(d) && (d = K3(this.F, this.F.C[d])) && 0 < d.C.length) a = 255 * d.C[0].F, c = 8 * d.C[0].G, 1 < d.C.length ? (e = 255 * d.C[1].F, f = 8 * d.C[1].G) : f = e = 0;
    for (d = 0; d < b; ++d) s[q + 4 * p * d + 24] = a, s[q + 4 * p * d + 25] = c, s[q + 4 * p * d + 26] = e, s[q + 4 * p * d + 27] = f, s[q + 4 * p * d + 28] = g >> 8, s[q + 4 * p * d + 29] = j >> 8, s[q + 4 * p * d + 30] = m >> 8, s[q + 4 * p * d + 31] = n >> 8
};

var F0a = {
    line_gradient: i,
    line_drop_shadow: i,
    line_wide: i
};

g6.prototype.G = function () {
    return F0a
};

var h6 = function (a, b, c, d) {
    H5.call(this, a, b, c);
    this.K = d
};

B(h6, g6);
v = h6.prototype;
v.lu = [0, 1, 2, 0, 2, 3, 0, 3, 4, 0, 4, 5, 0, 5, 1];
v.j2 = ea();
v.wf = function () {
    h6.ia.wf.call(this);
    this.C.D = 4;
    var a = F4(this);
    this.D.Vh || (C4(this, a.qa, 5121), C4(this, a.Wb, 5121));
    C4(this, a.V, 5121)
};

v.Fd = "tactile broad joints and caps";
v.zb = function (a) {
    return 6 * h6.ia.zb.call(this, a)
};

v.Fg = function (a, b) {
    return 6 * h6.ia.Fg.call(this, a, b)
};

v.df = function (a, b) {
    h6.ia.df.call(this, a, b);
    var c = E4(this),
        d = b[f6.prototype.Fd],
        e = a.Hc;
    c.ha = 0;
    F4(this).C.activate(c);
    d.Pi && (d.Pi.bindTexture(2), c.xa.set(2));
    c.Ba.set(1 / e.getWidth(), 1 / e.getHeight())
};

v.ip = function () {
    var a = E4(this);
    a.maxWidth.set(255);
    this.C.K = 2;
    D4(this, a.C, 0, [5]);
    D4(this, a.P, 0, [1]);
    this.getContext().depthFunc(513)
};

v.ew = function (a, b) {
    var c = a.Hc,
        d = b[this.Fd],
        e = b[f6.prototype.Fd],
        f = this.getContext();
    f && !e.Pi && (e.Pi = new d6(f));
    e = e.Pi;
    if (!B0a(e, c.getWidth(), c.getHeight())) return l;
    f = E4(this);
    f.ha = 1;
    F4(this).C.activate(f);
    f.maxWidth.set(255);
    var g = [2 / c.getWidth(), 0, 0, 0, 0, 2 / c.getHeight(), 0, 0, 0, 0, 0, 0, -1, -1, 0, 1];
    f.Ja.C(g);
    f.Y.set(c.getWidth() / 2, c.getHeight() / 2);
    f.L.set(1);
    o5.prototype.df.call(this, a, k);
    this.C.K = 1;
    D4(this, f.C, 0, [0]);
    D4(this, f.P, 0, [0]);
    G4(d, this.C);
    e.eh(this.Fd);
    this.K();
    return i
};

v.Ur = function (a, b) {
    var c = b[f6.prototype.Fd];
    return !c.Pi || !(c.Pi.Gi && c.Pi.TK[this.Fd] && c.Pi.$b.C.contains(c.Pi.Gi))
};

v.LH = function (a, b, c, d, e, f, g, j, m, n, p) {
    for (var p = p || 6, q = new Float32Array(12 * b), s = 0, t = 0; t < b; ++t) for (var x = 0; 5 >= x; x++) q[s++] = a[2 * t], q[s++] = a[2 * t + 1];
    s >>= 1;
    t = this.C.C;
    a = t.offset;
    b = t.sq;
    h6.ia.LH.call(this, q, s, c, d, e, f, g, j, m, n, p);
    for (t = 0; t < s; ++t) x = t % 6, b[a + 4 * p * t + 20] = x, b[a + 4 * p * t + 21] = 0 == x ? 0 : 1
};

v.rD = function (a, b, c, d, e, f, g, j, m, n, p) {
    for (var p = p || 9, q = new Float32Array(12 * b), s = 0, t = 0; t < b; ++t) for (var x = 0; 5 >= x; x++) q[s++] = a[2 * t], q[s++] = a[2 * t + 1];
    s >>= 1;
    t = this.C.C;
    a = t.offset;
    b = t.sq;
    h6.ia.rD.call(this, q, s, c, d, e, f, g, j, m, n, p);
    for (t = 0; t < s; ++t) x = t % 6, b[a + 32] = x, b[a + 33] = 0 == x ? 0 : 1, a += 4 * p
};

var G0a = {
    line_gradient: i,
    line_drop_shadow: i,
    line_wide: i,
    line_wide_gradient: i
};

h6.prototype.G = function () {
    return G0a
};

var H0a = function (a, b, c) {
    this.C = new K4(this, a, b, c || [], "#define _d 26\\n#define _e 8\\n#define _f 3\\n#define _g 4\\n#define _h 8\\n#define _i 100\\n#define _j 65535\\n#define _k 65534.5\\n", "#if _a==1\\nuniform vec3 a;vec4 U(float G){vec4 H=vec4(a,mod(G,256.)/255.);H.z+=mod(floor(G/256.),128.)/255.;return H;}vec4 V(vec4 G,float H){return U(H);}\\n#else\\nvec4 V(vec4 G,float H){return G;}\\n#endif\\nuniform vec2 b,n;uniform sampler2D c;vec2 W(float G,float H){G=(G+.5)/b.x;return vec2(fract(G),(float(_d)*floor(G)+H+.5)/b.y);}vec2 X(){return vec2(0,1./b.y);}\\n#if _b==1\\nuniform vec2 d;uniform sampler2D e;\\n#ifdef VERTEX_TEXTURES\\nfloat Y(vec2 G){float H=(G.x+.5)/d.x;vec2 I=vec2(fract(H),(floor(H)+.5)/d.y);return dot(floor(.5+255.*texture2D(e,I)),vec4(16777216.,65536.,256,1));}\\n#endif\\n#else\\nfloat Y(vec2 G){return G.y;}\\n#endif\\n#ifdef VERTEX_TEXTURES\\nvec2 Z(vec2 G,vec2 H){return 127.5*texture2D(c,G+2.*H).rg;}vec2 aa(vec2 G,vec2 H){vec4 I=255./64.*texture2D(c,G+H);return 256.*I.rb+I.ga;}\\n#endif\\nvarying float f,q,s,t;\\n#ifdef VERTEX_TEXTURES\\nvarying vec4 g;varying vec2 h;\\n#else\\nvarying vec2 i;\\n#endif\\nuniform float j,k,l,o,r;attribute vec4 y;attribute vec3 z;attribute float A;attribute vec2 B;\\n#ifndef VERTEX_TEXTURES\\nattribute vec4 C;\\n#endif\\nattribute float D;uniform mat4 m;\\n#ifndef VERTEX_TEXTURES\\nvec2 ba();\\n#endif\\nvec4 ca(vec2 G,vec2 H,vec2 I);void main(){float G=z.x;vec2 H,I,J,K;H=z.xy;\\n#ifdef VERTEX_TEXTURES\\nI=W(Y(H),j);J=X();K=aa(I,J)*max(D/32.,.001);\\n#else\\nK=ba();i=H;\\n#endif\\ngl_Position=ca(I,J,K);f=A;\\n#ifdef VERTEX_TEXTURES\\ng=V(texture2D(c,I),G);h=Z(I,J);\\n#endif\\n}\\n#ifdef VERTEX_TEXTURES\\nvarying vec2 p;\\n#endif\\nvec2 da(vec2 G,vec2 H){vec4 I=texture2D(c,G+float(_g)*H);return vec2(I.b,dot(I.ar,vec2(65536.,256)));}vec2 ea(vec2 G,vec2 H){vec4 I=texture2D(c,G+float(_f)*H);return vec2(I.g,I.b*255./float(_h));}vec2 fa(float G){return G*normalize((m*vec4(sin(r),cos(r),0,0)).xy);}float ga(float G){return .2*G+.4*s;}\\n#if _c==0\\nvarying vec2 u;\\n#endif\\n#if _c==1\\nuniform mat4 v;uniform float w;\\n#else\\nuniform vec2 x;\\n#endif\\n#ifndef VERTEX_TEXTURES\\nattribute vec4 E;attribute vec4 F;vec2 ba(){return mix(E.xy*256.+C.xy,E.zw*256.+C.zw,float(o>0.))/float(_e);}\\n#endif\\nvec4 ca(vec2 G,vec2 H,vec2 I){float J,O,Q,R;\\n#ifdef VERTEX_TEXTURES\\nvec2 F=ea(G,H);q=F.x;J=F.y;p=da(G,H);\\n#else\\nvec2 K=mix(F.zw,F.xy,float(o<.5));q=K.x/255.;J=K.y/float(_h);\\n#endif\\ns=floor(I.x/75.);vec2 L,M,N,P,S;L=y.xy;M=y.zw;N=normalize(M-L);O=z.z;P=O*vec2(-N.y,N.x);Q=sign(P.x);Q=mix(sign(P.y),Q,abs(Q));\\n#if _c==1\\nQ*=w;Q=max(Q,0.);P*=Q;\\n#endif\\nt=Q;R=.5*I.x;S=L+R*P;\\n#if _c==0\\nu=x*S;\\n#endif\\n#if _c==1\\nvec4 T=v*vec4(S,0,1);T.z=ga(t);\\n#else\\nvec4 T=m*vec4(S,0,1);T.xy=T.xy+fa(J)/n;T.z=T.w*(mix(B.x,B.y,float(o>.5))-l);\\n#endif\\nreturn T;}", "precision mediump float;\\n#if _a==1\\nuniform vec3 a;vec4 D(float z){vec4 A=vec4(a,mod(z,256.)/255.);A.z+=mod(floor(z/256.),128.)/255.;return A;}vec4 E(vec4 z,float A){return D(A);}\\n#else\\nvec4 E(vec4 z,float A){return z;}\\n#endif\\nuniform vec2 b;uniform sampler2D c;vec2 F(float z,float A){z=(z+.5)/b.x;return vec2(fract(z),(float(_d)*floor(z)+A+.5)/b.y);}vec2 G(){return vec2(0,1./b.y);}\\n#if _b==1\\nuniform vec2 d;uniform sampler2D e;\\n#ifndef VERTEX_TEXTURES\\nfloat H(vec2 z){float A=(z.x+.5)/d.x;vec2 B=vec2(fract(A),(floor(A)+.5)/d.y);return dot(floor(.5+255.*texture2D(e,B)),vec4(16777216.,65536.,256,1));}\\n#endif\\n#else\\nfloat H(vec2 z){return z.y;}\\n#endif\\nvec2 I(vec2 z,vec2 A){return 127.5*texture2D(c,z+2.*A).rg;}varying float f,q,s,t;\\n#ifdef VERTEX_TEXTURES\\nvarying vec4 g;varying vec2 h;\\n#else\\nvarying vec2 i;\\n#endif\\nuniform float j;vec4 J(vec4 z);void main(){vec4 z;vec2 A;\\n#ifdef VERTEX_TEXTURES\\nz=g;A=h;\\n#else\\nvec2 B=F(H(i),j);z=E(texture2D(c,B),i.x);A=I(B,G());\\n#endif\\nfloat C=step(A.x,mod(f,A.y));if(C>.5)discard;gl_FragColor=J(z);}\\n#ifdef VERTEX_TEXTURES\\nvarying vec2 p;\\n#endif\\nvec2 K(vec2 z,vec2 A){vec4 B=texture2D(c,z+float(_g)*A);return vec2(B.b,dot(B.ar,vec2(65536.,256)));}vec2 L(){\\n#ifndef VERTEX_TEXTURES\\nvec2 z=F(H(i),j);return K(z,G());\\n#else\\nreturn p;\\n#endif\\n}float M(float z,float A){return mix(clamp((A-z)/float(_i),0.,1.),1.,float(A>_k));}float N(float z,float A){return clamp(1.-q/(1.01-A)*(abs(z)-A),0.,1.);}float O(float z,float A){vec2 B=L();return N(z,B.x)*M(A,B.y);}float P(vec4 z){return clamp((1.-z.r)*2.-s,0.,1.);}vec4 Q(float z){float A=.5*z+.5*s;return vec4(vec3(1)*(1.-A),1);}\\n#if _c==0\\nvarying vec2 u;\\n#endif\\n#if _c==0\\nuniform sampler2D y;\\n#endif\\nvec4 J(vec4 z){\\n#if _c==1\\nreturn Q(abs(t));\\n#else\\nfloat A=P(texture2D(y,u));A=min(A,abs(t));return vec4(z.rgb,O(A,f)*z.a);\\n#endif\\n}");
    this.Z = a;
    this.P = L4(this.C, 4, 928, 17);
    this.M = L4(this.C, 3, 945, 17);
    this.N = L4(this.C, 1, 962, 18);
    this.G = L4(this.C, 2, 980, 17);
    this.I = L4(this.C, 4, 1022, 17);
    this.U = L4(this.C, 1, 1047, 18);
    this.Bb = L4(this.C, 4, 1858, 17);
    this.qa = L4(this.C, 4, 1875, 17);
    this.fb = new O4(function (a) {
        return a.M
    });
    M4(this.C, this.fb);
    this.Ta = new O4(function (a) {
        return a.I
    });
    M4(this.C, this.Ta);
    this.Va = new O4(function (a) {
        return a.G
    });
    M4(this.C, this.Va);
    this.ea = new O4(function (a) {
        return a.F
    });
    M4(this.C, this.ea);
    this.ha = new O4(function (a) {
        return a.D
    });
    M4(this.C, this.ha);
    this.Ka = new O4(function (a) {
        return a.C
    });
    M4(this.C, this.Ka);
    this.Ba = new O4(function (a) {
        return a.maxWidth
    });
    M4(this.C, this.Ba);
    this.X = new O4(function (a) {
        return a.X
    });
    M4(this.C, this.X);
    this.yb = new O4(function (a) {
        return a.transform
    });
    M4(this.C, this.yb);
    this.ma = new O4(function (a) {
        return a.Y
    });
    M4(this.C, this.ma);
    this.Ja = new O4(function (a) {
        return a.P
    });
    M4(this.C, this.Ja);
    this.xa = new O4(function (a) {
        return a.ba
    });
    M4(this.C, this.xa);
    this.ca = new O4(function (a) {
        return a.Ja
    });
    M4(this.C, this.ca);
    this.V = new O4(function (a) {
        return a.Bb
    });
    M4(this.C, this.V);
    this.ba = new O4(function (a) {
        return a.Ba
    });
    M4(this.C, this.ba);
    this.Y = new O4(function (a) {
        return a.xa
    });
    M4(this.C, this.Y);
    N4(this.C, "_a");
    N4(this.C, "_b");
    N4(this.C, "_c")
};

H0a.prototype.D = function (a) {
    var b = this.Z;
    this.P.index = b.getAttribLocation(a, "y");
    this.M.index = b.getAttribLocation(a, "z");
    this.N.index = b.getAttribLocation(a, "A");
    this.G.index = b.getAttribLocation(a, "B");
    this.I.index = b.getAttribLocation(a, "C");
    this.U.index = b.getAttribLocation(a, "D");
    this.Bb.index = b.getAttribLocation(a, "E");
    this.qa.index = b.getAttribLocation(a, "F");
    this.fb.location = b.getUniformLocation(a, "a");
    this.Ta.location = b.getUniformLocation(a, "b");
    this.Va.location = b.getUniformLocation(a, "c");
    this.ea.location = b.getUniformLocation(a, "d");
    this.ha.location = b.getUniformLocation(a, "e");
    this.Ka.location = b.getUniformLocation(a, "j");
    this.Ba.location = b.getUniformLocation(a, "k");
    this.X.location = b.getUniformLocation(a, "l");
    this.yb.location = b.getUniformLocation(a, "m");
    this.ma.location = b.getUniformLocation(a, "n");
    this.Ja.location = b.getUniformLocation(a, "o");
    this.xa.location = b.getUniformLocation(a, "r");
    this.ca.location = b.getUniformLocation(a, "v");
    this.V.location = b.getUniformLocation(a, "w");
    this.ba.location = b.getUniformLocation(a, "x");
    this.Y.location = b.getUniformLocation(a, "y")
};

H0a.prototype.F = function (a, b) {
    switch (a) {
    case 0:
        return b.K;
    case 1:
        return b.N;
    case 2:
        return b.ha;
    default:
        return 0
    }
};

var I0a = function (a, b, c) {
    this.C = new K4(this, a, b, c || [], "#define _c 26\\n#define _d 8\\n#define _e 3\\n#define _f 4\\n#define _g 8\\n#define _h 100\\n#define _i 65535\\n#define _j 65534.5\\n", "#if _a==1\\nuniform vec3 a;vec4 J(float A){vec4 B=vec4(a,mod(A,256.)/255.);B.z+=mod(floor(A/256.),128.)/255.;return B;}vec4 K(vec4 A,float B){return J(B);}\\n#else\\nvec4 K(vec4 A,float B){return A;}\\n#endif\\nuniform vec2 b,f,t;uniform sampler2D c;vec2 L(float A,float B){A=(A+.5)/b.x;return vec2(fract(A),(float(_c)*floor(A)+B+.5)/b.y);}vec2 M(){return vec2(0,1./b.y);}\\n#if _b==1\\nuniform vec2 d;uniform sampler2D e;\\n#ifdef VERTEX_TEXTURES\\nfloat N(vec2 A){float B=(A.x+.5)/d.x;vec2 C=vec2(fract(B),(floor(B)+.5)/d.y);return dot(floor(.5+255.*texture2D(e,C)),vec4(16777216.,65536.,256,1));}\\n#endif\\n#else\\nfloat N(vec2 A){return A.y;}\\n#endif\\n#ifdef VERTEX_TEXTURES\\nvec4 O(vec2 A,vec2 B){return vec4(127.5,127.5,255,255)*texture2D(c,A+2.*B);}vec2 P(vec2 A,vec2 B){vec4 C=255./64.*texture2D(c,A+B);return 256.*C.rb+C.ga;}\\n#endif\\nvarying float g,r;\\n#ifdef VERTEX_TEXTURES\\nvarying vec4 h,i;\\n#else\\nvarying vec2 j;\\n#endif\\nuniform float k,l,m,n,p,s;attribute vec2 u;attribute vec3 v;\\n#ifndef VERTEX_TEXTURES\\nattribute vec4 w;\\n#endif\\nattribute vec2 x;uniform mat4 o;\\n#ifndef VERTEX_TEXTURES\\nvec2 Q();\\n#endif\\nvec4 R(vec2 A,vec2 B,vec2 C);vec4 S(vec2 A,vec2 B,vec2 C){vec4 D=o*vec4(u,0,1);return D;}vec4 T(vec4 A){return vec4(A.xy/A.w,mix(x.x,x.y,float(n>.5))-m,1);}void U(vec2 A,vec4 B){gl_PointSize=p*(A.y+(A.x-A.y)/B.w);gl_PointSize*=step(gl_PointSize,l);}void main(){float A,C;A=v.x;vec2 B,D,E,F;B=v.xy;C=v.z;\\n#ifdef VERTEX_TEXTURES\\nE=L(N(B),k);F=M();D=P(E,F);\\n#else\\nD=Q();j=B;\\n#endif\\nvec4 G=R(E,F,D);U(D,G);gl_Position=T(G);g=C;\\n#ifdef VERTEX_TEXTURES\\nh=K(texture2D(c,E),A);i=O(E,F);\\n#endif\\n}\\n#ifdef VERTEX_TEXTURES\\nvarying vec2 q;\\n#endif\\nvec2 V(vec2 A,vec2 B){vec4 C=texture2D(c,A+float(_f)*B);return vec2(C.b,dot(C.ar,vec2(65536.,256)));}vec2 W(vec2 A,vec2 B){vec4 C=texture2D(c,A+float(_e)*B);return vec2(C.g,C.b*255./float(_g));}vec2 X(float A){return A*normalize((o*vec4(sin(s),cos(s),0,0)).xy);}\\n#ifndef VERTEX_TEXTURES\\nattribute vec4 y;attribute vec4 z;vec2 Q(){return mix(z.xy*256.+w.xy,z.zw*256.+w.zw,float(n>0.))/float(_d);}\\n#endif\\nvec4 R(vec2 A,vec2 B,vec2 C){float D;\\n#ifdef VERTEX_TEXTURES\\nvec2 y,E;y=W(A,B);r=y.x;D=y.y;E=V(A,B);q=E;\\n#else\\nvec2 F=mix(y.zw,y.xy,float(n<.5));r=F.x/255.;D=F.y/float(_g);\\n#endif\\nvec4 G=S(A,B,C);G.xy+=X(D)/t;return G;}", "precision mediump float;\\n#if _a==1\\nuniform vec3 a;vec4 A(float u){vec4 v=vec4(a,mod(u,256.)/255.);v.z+=mod(floor(u/256.),128.)/255.;return v;}vec4 B(vec4 u,float v){return A(v);}\\n#else\\nvec4 B(vec4 u,float v){return u;}\\n#endif\\nuniform vec2 b;uniform sampler2D c;vec2 C(float u,float v){u=(u+.5)/b.x;return vec2(fract(u),(float(_c)*floor(u)+v+.5)/b.y);}vec2 D(){return vec2(0,1./b.y);}\\n#if _b==1\\nuniform vec2 d;uniform sampler2D e;\\n#ifndef VERTEX_TEXTURES\\nfloat E(vec2 u){float v=(u.x+.5)/d.x;vec2 w=vec2(fract(v),(floor(v)+.5)/d.y);return dot(floor(.5+255.*texture2D(e,w)),vec4(16777216.,65536.,256,1));}\\n#endif\\n#else\\nfloat E(vec2 u){return u.y;}\\n#endif\\nvec4 F(vec2 u,vec2 v){return vec4(127.5,127.5,255,255)*texture2D(c,u+2.*v);}varying float g,r;\\n#ifdef VERTEX_TEXTURES\\nvarying vec4 h,i;\\n#else\\nvarying vec2 j;\\n#endif\\nuniform float k;void G(float u);void H(float u){float v=length(gl_PointCoord-.5);u*=step(v,.5);if(u==0.)discard;}vec4 I(vec4 u);void main(){vec4 u,v;\\n#ifdef VERTEX_TEXTURES\\nu=h;v=i;\\n#else\\nvec2 w,x;w=C(E(j),k);x=D();u=B(texture2D(c,w),j.x);v=F(w,x);\\n#endif\\nfloat y,z;y=step(252.,v.r+v.g);z=y*(g>.5?v.b:g<-.5?1.:v.a);G(z);gl_FragColor=I(u);}\\n#ifdef VERTEX_TEXTURES\\nvarying vec2 q;\\n#endif\\nvec2 J(vec2 u,vec2 v){vec4 w=texture2D(c,u+float(_f)*v);return vec2(w.b,dot(w.ar,vec2(65536.,256)));}vec2 K(){\\n#ifndef VERTEX_TEXTURES\\nvec2 u=C(E(j),k);return J(u,D());\\n#else\\nreturn q;\\n#endif\\n}float L(float u,float v){return clamp(1.-r/(1.01-v)*(abs(u)-v),0.,1.);}void G(float u){float v=K().y;if(g<.5&&v<_j)u=0.;H(u);}vec4 I(vec4 u){float v,w;v=length(gl_PointCoord-.5)*2.;w=K().x;return vec4(u.rgb,L(v,w)*u.a);}");
    this.Z = a;
    this.Q = L4(this.C, 2, 931, 17);
    this.L = L4(this.C, 3, 948, 17);
    this.I = L4(this.C, 4, 990, 17);
    this.G = L4(this.C, 2, 1015, 17);
    this.ca = L4(this.C, 4, 1910, 17);
    this.fb = L4(this.C, 4, 1927, 17);
    this.Ta = new O4(function (a) {
        return a.M
    });
    M4(this.C, this.Ta);
    this.Ja = new O4(function (a) {
        return a.I
    });
    M4(this.C, this.Ja);
    this.Ka = new O4(function (a) {
        return a.G
    });
    M4(this.C, this.Ka);
    this.X = new O4(function (a) {
        return a.F
    });
    M4(this.C, this.X);
    this.Y = new O4(function (a) {
        return a.D
    });
    M4(this.C, this.Y);
    this.qa = new O4(function (a) {
        return a.Q
    });
    M4(this.C, this.qa);
    this.Ba = new O4(function (a) {
        return a.C
    });
    M4(this.C, this.Ba);
    this.ha = new O4(function (a) {
        return a.maxWidth
    });
    M4(this.C, this.ha);
    this.V = new O4(function (a) {
        return a.X
    });
    M4(this.C, this.V);
    this.xa = new O4(function (a) {
        return a.P
    });
    M4(this.C, this.xa);
    this.Va = new O4(function (a) {
        return a.transform
    });
    M4(this.C, this.Va);
    this.ma = new O4(function (a) {
        return a.L
    });
    M4(this.C, this.ma);
    this.ea = new O4(function (a) {
        return a.ba
    });
    M4(this.C, this.ea);
    this.ba = new O4(function (a) {
        return a.Y
    });
    M4(this.C, this.ba);
    N4(this.C, "_a");
    N4(this.C, "_b")
};

I0a.prototype.D = function (a) {
    var b = this.Z;
    this.Q.index = b.getAttribLocation(a, "u");
    this.L.index = b.getAttribLocation(a, "v");
    this.I.index = b.getAttribLocation(a, "w");
    this.G.index = b.getAttribLocation(a, "x");
    this.ca.index = b.getAttribLocation(a, "y");
    this.fb.index = b.getAttribLocation(a, "z");
    this.Ta.location = b.getUniformLocation(a, "a");
    this.Ja.location = b.getUniformLocation(a, "b");
    this.Ka.location = b.getUniformLocation(a, "c");
    this.X.location = b.getUniformLocation(a, "d");
    this.Y.location = b.getUniformLocation(a, "e");
    this.qa.location = b.getUniformLocation(a, "f");
    this.Ba.location = b.getUniformLocation(a, "k");
    this.ha.location = b.getUniformLocation(a, "l");
    this.V.location = b.getUniformLocation(a, "m");
    this.xa.location = b.getUniformLocation(a, "n");
    this.Va.location = b.getUniformLocation(a, "o");
    this.ma.location = b.getUniformLocation(a, "p");
    this.ea.location = b.getUniformLocation(a, "s");
    this.ba.location = b.getUniformLocation(a, "t")
};

I0a.prototype.F = function (a, b) {
    switch (a) {
    case 0:
        return b.K;
    case 1:
        return b.N;
    default:
        return 0
    }
};

var J0a = function (a, b, c) {
    this.C = new K4(this, a, b, c || [], "#define _c 26\\n#define _d 8\\n#define _e 3\\n#define _f 4\\n#define _g 8\\n#define _h 100\\n#define _i 65535\\n#define _j 65534.5\\n", "#if _a==1\\nuniform vec3 a;vec4 M(float B){vec4 C=vec4(a,mod(B,256.)/255.);C.z+=mod(floor(B/256.),128.)/255.;return C;}vec4 N(vec4 B,float C){return M(C);}\\n#else\\nvec4 N(vec4 B,float C){return B;}\\n#endif\\nuniform vec2 b,n;uniform sampler2D c;vec2 O(float B,float C){B=(B+.5)/b.x;return vec2(fract(B),(float(_c)*floor(B)+C+.5)/b.y);}vec2 P(){return vec2(0,1./b.y);}\\n#if _b==1\\nuniform vec2 d;uniform sampler2D e;\\n#ifdef VERTEX_TEXTURES\\nfloat Q(vec2 B){float C=(B.x+.5)/d.x;vec2 D=vec2(fract(C),(floor(C)+.5)/d.y);return dot(floor(.5+255.*texture2D(e,D)),vec4(16777216.,65536.,256,1));}\\n#endif\\n#else\\nfloat Q(vec2 B){return B.y;}\\n#endif\\n#ifdef VERTEX_TEXTURES\\nvec2 R(vec2 B,vec2 C){return 127.5*texture2D(c,B+2.*C).rg;}vec2 S(vec2 B,vec2 C){vec4 D=255./64.*texture2D(c,B+C);return 256.*D.rb+D.ga;}\\n#endif\\nvarying float f,q,s;\\n#ifdef VERTEX_TEXTURES\\nvarying vec4 g;varying vec2 h;\\n#else\\nvarying vec2 i;\\n#endif\\nuniform float j,k,l,o,r;attribute vec4 t;attribute vec3 u;attribute float v;attribute vec2 w;\\n#ifndef VERTEX_TEXTURES\\nattribute vec4 x;\\n#endif\\nattribute float y;uniform mat4 m;\\n#ifndef VERTEX_TEXTURES\\nvec2 T();\\n#endif\\nvec3 U(vec2 B){vec4 C=m*vec4(B,0,1);return vec3(n*C.xy/C.w,C.w);}vec2 V(vec2 B,vec3 C,vec2 D,vec2 E,vec2 F);vec2 W(vec2 B,vec3 C,vec2 D,vec2 E,vec2 F){float G,H;G=u.z;H=.5*mix(B.y,B.x,1./C.z);return C.xy+G*H*F;}vec4 X(vec2 B,vec2 C,vec2 D){vec3 E=U(t.xy);vec2 F,G,H,I;F=E.xy;G=normalize(U(t.zw).xy-F);H=vec2(-G.y,G.x);I=V(D,E,B,C,H);return sign(E.z)*vec4(I/n,mix(w.x,w.y,float(o>.5))-l,1);}void main(){float B=u.x;vec2 C,D,E,F;C=u.xy;\\n#ifdef VERTEX_TEXTURES\\nD=O(Q(C),j);E=P();F=S(D,E)*max(y/32.,.001);\\n#else\\nF=T();i=C;\\n#endif\\ngl_Position=X(D,E,F);f=v;\\n#ifdef VERTEX_TEXTURES\\ng=N(texture2D(c,D),B);h=R(D,E);\\n#endif\\n}\\n#ifdef VERTEX_TEXTURES\\nvarying vec2 p;\\n#endif\\nvec2 Y(vec2 B,vec2 C){vec4 D=texture2D(c,B+float(_f)*C);return vec2(D.b,dot(D.ar,vec2(65536.,256)));}vec2 Z(vec2 B,vec2 C){vec4 D=texture2D(c,B+float(_e)*C);return vec2(D.g,D.b*255./float(_g));}vec2 aa(float B){return B*normalize((m*vec4(sin(r),cos(r),0,0)).xy);}\\n#ifndef VERTEX_TEXTURES\\nattribute vec4 z;attribute vec4 A;vec2 T(){return mix(A.xy*256.+x.xy,A.zw*256.+x.zw,float(o>0.))/float(_d);}\\n#endif\\nvec2 V(vec2 B,vec3 C,vec2 D,vec2 E,vec2 F){float G,J,L;\\n#ifdef VERTEX_TEXTURES\\nvec2 z,H;z=Z(D,E);q=z.x;G=z.y;H=Y(D,E);p=H;\\n#else\\nvec2 I=mix(z.zw,z.xy,float(o<.5));q=I.x/255.;G=I.y/float(_g);\\n#endif\\nJ=u.z;vec2 K=J*F;L=sign(K.x);s=mix(sign(K.y),L,abs(L));return W(B,C,D,E,F)+aa(G);}", "precision mediump float;\\n#if _a==1\\nuniform vec3 a;vec4 x(float t){vec4 u=vec4(a,mod(t,256.)/255.);u.z+=mod(floor(t/256.),128.)/255.;return u;}vec4 y(vec4 t,float u){return x(u);}\\n#else\\nvec4 y(vec4 t,float u){return t;}\\n#endif\\nuniform vec2 b;uniform sampler2D c;vec2 z(float t,float u){t=(t+.5)/b.x;return vec2(fract(t),(float(_c)*floor(t)+u+.5)/b.y);}vec2 A(){return vec2(0,1./b.y);}\\n#if _b==1\\nuniform vec2 d;uniform sampler2D e;\\n#ifndef VERTEX_TEXTURES\\nfloat B(vec2 t){float u=(t.x+.5)/d.x;vec2 v=vec2(fract(u),(floor(u)+.5)/d.y);return dot(floor(.5+255.*texture2D(e,v)),vec4(16777216.,65536.,256,1));}\\n#endif\\n#else\\nfloat B(vec2 t){return t.y;}\\n#endif\\nvec2 C(vec2 t,vec2 u){return 127.5*texture2D(c,t+2.*u).rg;}varying float f,q,s;\\n#ifdef VERTEX_TEXTURES\\nvarying vec4 g;varying vec2 h;\\n#else\\nvarying vec2 i;\\n#endif\\nuniform float j;vec4 D(vec4 t);void main(){vec4 t;vec2 u;\\n#ifdef VERTEX_TEXTURES\\nt=g;u=h;\\n#else\\nvec2 v=z(B(i),j);t=y(texture2D(c,v),i.x);u=C(v,A());\\n#endif\\nfloat w=step(u.x,mod(f,u.y));if(w>.5)discard;gl_FragColor=D(t);}\\n#ifdef VERTEX_TEXTURES\\nvarying vec2 p;\\n#endif\\nvec2 E(vec2 t,vec2 u){vec4 v=texture2D(c,t+float(_f)*u);return vec2(v.b,dot(v.ar,vec2(65536.,256)));}vec2 F(){\\n#ifndef VERTEX_TEXTURES\\nvec2 t=z(B(i),j);return E(t,A());\\n#else\\nreturn p;\\n#endif\\n}float G(float t,float u){return mix(clamp((u-t)/float(_h),0.,1.),1.,float(u>_j));}float H(float t,float u){return clamp(1.-q/(1.01-u)*(abs(t)-u),0.,1.);}float I(float t,float u){vec2 v=F();return H(t,v.x)*G(u,v.y);}vec4 D(vec4 t){return vec4(t.rgb,I(s,f)*t.a);}");
    this.Z = a;
    this.P = L4(this.C, 4, 925, 17);
    this.M = L4(this.C, 3, 942, 17);
    this.N = L4(this.C, 1, 959, 18);
    this.G = L4(this.C, 2, 977, 17);
    this.I = L4(this.C, 4, 1019, 17);
    this.U = L4(this.C, 1, 1044, 18);
    this.ca = L4(this.C, 4, 2069, 17);
    this.Ta = L4(this.C, 4, 2086, 17);
    this.Ja = new O4(function (a) {
        return a.M
    });
    M4(this.C, this.Ja);
    this.xa = new O4(function (a) {
        return a.I
    });
    M4(this.C, this.xa);
    this.Ba = new O4(function (a) {
        return a.G
    });
    M4(this.C, this.Ba);
    this.X = new O4(function (a) {
        return a.F
    });
    M4(this.C, this.X);
    this.Y = new O4(function (a) {
        return a.D
    });
    M4(this.C, this.Y);
    this.qa = new O4(function (a) {
        return a.C
    });
    M4(this.C, this.qa);
    this.ha = new O4(function (a) {
        return a.maxWidth
    });
    M4(this.C, this.ha);
    this.V = new O4(function (a) {
        return a.X
    });
    M4(this.C, this.V);
    this.Ka = new O4(function (a) {
        return a.transform
    });
    M4(this.C, this.Ka);
    this.ba = new O4(function (a) {
        return a.Y
    });
    M4(this.C, this.ba);
    this.ma = new O4(function (a) {
        return a.P
    });
    M4(this.C, this.ma);
    this.ea = new O4(function (a) {
        return a.ba
    });
    M4(this.C, this.ea);
    N4(this.C, "_a");
    N4(this.C, "_b")
};

J0a.prototype.D = function (a) {
    var b = this.Z;
    this.P.index = b.getAttribLocation(a, "t");
    this.M.index = b.getAttribLocation(a, "u");
    this.N.index = b.getAttribLocation(a, "v");
    this.G.index = b.getAttribLocation(a, "w");
    this.I.index = b.getAttribLocation(a, "x");
    this.U.index = b.getAttribLocation(a, "y");
    this.ca.index = b.getAttribLocation(a, "z");
    this.Ta.index = b.getAttribLocation(a, "A");
    this.Ja.location = b.getUniformLocation(a, "a");
    this.xa.location = b.getUniformLocation(a, "b");
    this.Ba.location = b.getUniformLocation(a, "c");
    this.X.location = b.getUniformLocation(a, "d");
    this.Y.location = b.getUniformLocation(a, "e");
    this.qa.location = b.getUniformLocation(a, "j");
    this.ha.location = b.getUniformLocation(a, "k");
    this.V.location = b.getUniformLocation(a, "l");
    this.Ka.location = b.getUniformLocation(a, "m");
    this.ba.location = b.getUniformLocation(a, "n");
    this.ma.location = b.getUniformLocation(a, "o");
    this.ea.location = b.getUniformLocation(a, "r")
};

J0a.prototype.F = function (a, b) {
    switch (a) {
    case 0:
        return b.K;
    case 1:
        return b.N;
    default:
        return 0
    }
};

var K0a = function (a, b, c) {
    this.C = k;
    this.F = a;
    this.G = b;
    this.D = c
};

B(K0a, A4);
v = K0a.prototype;
v.Fd = "textBox";
v.wf = function () {
    var a = F4(this);
    C4(this, a.K, 5121);
    C4(this, a.X, 5121);
    C4(this, a.ma, 5126);
    C4(this, a.Ba, 5126);
    C4(this, a.V, 5126);
    C4(this, a.Y, 5123);
    this.D.Vh || C4(this, a.xa, 5122)
};

v.lu = B4;
v.dw = function (a) {
    return !a.Sg.ON
};

v.df = function (a) {
    var b = E4(this);
    H4(this, this.G, 0, b.G, b.I);
    H4(this, a.Ih, 1, b.D, b.F);
    H4(this, a.At, 1, b.U, b.V)
};

v.zb = function (a) {
    return 4 * a.Sg.vy.length
};

v.Fg = function (a) {
    for (var b = 0, c = a.Sg.vy, a = a.Hc, d = 0; d < c.length; ++d) {
        for (var e = c[d], f = e.Ed, g = e.fd, j = e.gi || a.Qf(g), j = J3(this.F, j), m = 0; 4 > m; ++m) this.Lb(m, f.width, f.height, e.Wd.Sy, e.Wd.Ty, e.Wd.altitude, e.Wd.Lv, e.Wd.Mv, f.K, g, j, e.Pk, f.cf, f.Vg);
        b += 4
    }
    return b
};

var L0a = function (a, b, c) {
    this.C = new K4(this, a, b, c || [], "#define _c 26\\n#define _d -1023\\n#define _e 22\\n#define _f 17\\n", "#if _a==1\\nuniform vec3 a;vec4 L(float x){vec4 y=vec4(a,mod(x,256.)/255.);y.z+=mod(floor(x/256.),128.)/255.;return y;}vec4 M(vec4 x,float y){return L(y);}\\n#else\\nvec4 M(vec4 x,float y){return x;}\\n#endif\\nuniform vec2 b,g,h;uniform sampler2D c,f;vec2 N(float x,float y){x=(x+.5)/b.x;return vec2(fract(x),(float(_c)*floor(x)+y+.5)/b.y);}\\n#if _b==1\\nuniform vec2 d;uniform sampler2D e;\\n#ifdef VERTEX_TEXTURES\\nfloat O(vec2 x){float y=(x.x+.5)/d.x;vec2 z=vec2(fract(y),(floor(y)+.5)/d.y);return dot(floor(.5+255.*texture2D(e,z)),vec4(16777216.,65536.,256,1));}\\n#endif\\n#else\\nfloat O(vec2 x){return x.y;}\\n#endif\\n#ifdef VERTEX_TEXTURES\\nvec4 P(float x){x=(x+.5)/g.x;return floor(.5+255.*texture2D(f,vec2(fract(x),(floor(x)+.5)/g.y)));}float Q(vec4 x){return mod(x.r,32.)/31.;}float R(vec4 x){float y=x.g*16.+floor(x.a/16.);return y/2.+float(_d);}float S(vec4 x){float y=x.b*16.+mod(x.a,16.);return y/2.+float(_d);}vec2 T(vec4 x){return vec2(R(x),S(x));}\\n#endif\\nvec2 U(vec4 x,vec2 y,vec2 z,bool A){vec2 B,C,D,E,F;B=h/2.;C=mod(h,2.)/2.;D=B*x.xy/x.w;E=D+y*vec2(1,-1);F=floor(E+.5-C)+C;F+=(1.-float(A))*(E-F);F+=z*vec2(1,-1);return F*x.w/B;}vec2 V(vec4 x,vec2 y,vec2 z){return U(x,y,z,true);}vec2 V(vec4 x,vec2 y){return U(x,y,vec2(0),true);}\\n#ifdef VERTEX_TEXTURES\\nvarying float i;varying vec4 j,k;\\n#else\\nvarying vec3 l;varying vec2 m;\\n#endif\\nvarying vec4 n;attribute float q;attribute vec2 r;attribute vec3 s;attribute vec2 t;attribute float u;attribute vec3 v;\\n#ifndef VERTEX_TEXTURES\\nattribute vec2 w;\\n#endif\\nuniform mat4 o;uniform mat2 p;void main(){vec2 x,B,I,J,K;x=vec2(floor(q/2.),-2.*mod(floor((q+1.)/2.),2.)+1.);float y=u/2.;vec4 z,A;z=step(vec4(0,0,1,1),x.yyxx);z*=vec4(y+r.y,-u,y+r.x,-u);A=vec4(-x.y/2.+.5,-x.y/2.+.5,1.-x.x,1.-x.x);A*=vec4(-u,y+r.y,-u,y+r.x);n=z+A;\\n#ifdef VERTEX_TEXTURES\\nvec2 C,E,F;C=v.xy;float D,H;D=O(C);E=N(D,float(_e));j=M(texture2D(c,E),C.x);F=N(D,float(_f));k=M(texture2D(c,F),C.x);vec4 G=P(v.z);H=Q(G);i=H;B=T(G);\\n#else\\nB=w;m=w;l=v;\\n#endif\\nI=p*t;gl_Position=o*vec4(s,1);J=x;J.x=J.x*2.-1.;K=I+B+x*(r/vec2(1,2))+J*y;gl_Position.xy=V(gl_Position,K);\\n#ifdef VERTEX_TEXTURES\\ngl_Position.xy*=sign(H);\\n#endif\\n}", "precision mediump float;\\n#if _a==1\\nuniform vec3 a;vec4 z(float q){vec4 r=vec4(a,mod(q,256.)/255.);r.z+=mod(floor(q/256.),128.)/255.;return r;}vec4 A(vec4 q,float r){return z(r);}\\n#else\\nvec4 A(vec4 q,float r){return q;}\\n#endif\\nuniform vec2 b,g;uniform sampler2D c,f;vec2 B(float q,float r){q=(q+.5)/b.x;return vec2(fract(q),(float(_c)*floor(q)+r+.5)/b.y);}\\n#if _b==1\\nuniform vec2 d;uniform sampler2D e;\\n#ifndef VERTEX_TEXTURES\\nfloat C(vec2 q){float r=(q.x+.5)/d.x;vec2 s=vec2(fract(r),(floor(r)+.5)/d.y);return dot(floor(.5+255.*texture2D(e,s)),vec4(16777216.,65536.,256,1));}\\n#endif\\n#else\\nfloat C(vec2 q){return q.y;}\\n#endif\\n#ifndef VERTEX_TEXTURES\\nvec4 D(float q){q=(q+.5)/g.x;return floor(.5+255.*texture2D(f,vec2(fract(q),(floor(q)+.5)/g.y)));}float E(vec4 q){return mod(q.r,32.)/31.;}float F(vec4 q){float r=q.g*16.+floor(q.a/16.);return r/2.+float(_d);}float G(vec4 q){float r=q.b*16.+mod(q.a,16.);return r/2.+float(_d);}vec2 H(vec4 q){return vec2(F(q),G(q));}\\n#endif\\nprecision highp float;\\n#ifdef VERTEX_TEXTURES\\nvarying float i;varying vec4 j,k;\\n#else\\nvarying vec3 l;varying vec2 m;\\n#endif\\nvarying vec4 n;void main(){float q=1.;vec4 r,s,y;\\n#ifdef VERTEX_TEXTURES\\nq=i;r=j;s=k;\\n#else\\nvec4 t=D(l.z);vec2 u,v,w;u=H(t);q=E(t);v=m-u;if(q==0.||dot(v,v)>=.6)discard;w=l.xy;float x=C(w);r=texture2D(c,B(x,float(_e)));s=texture2D(c,B(x,float(_f)));\\n#endif\\ny=any(lessThan(n,vec4(0)))?s:r;\\n#ifndef VERTEX_TEXTURES\\ny=A(y,l.x);\\n#endif\\ny.a*=q;gl_FragColor=y;}");
    this.Z = a;
    this.K = L4(this.C, 1, 1342, 18);
    this.X = L4(this.C, 2, 1360, 17);
    this.ma = L4(this.C, 3, 1377, 17);
    this.Ba = L4(this.C, 2, 1394, 17);
    this.V = L4(this.C, 1, 1411, 18);
    this.Y = L4(this.C, 3, 1429, 17);
    this.xa = L4(this.C, 2, 1471, 17);
    this.Va = new O4(function (a) {
        return a.M
    });
    M4(this.C, this.Va);
    this.Ka = new O4(function (a) {
        return a.I
    });
    M4(this.C, this.Ka);
    this.Ta = new O4(function (a) {
        return a.G
    });
    M4(this.C, this.Ta);
    this.ba = new O4(function (a) {
        return a.F
    });
    M4(this.C, this.ba);
    this.ca = new O4(function (a) {
        return a.D
    });
    M4(this.C, this.ca);
    this.ha = new O4(function (a) {
        return a.U
    });
    M4(this.C, this.ha);
    this.ea = new O4(function (a) {
        return a.V
    });
    M4(this.C, this.ea);
    this.Ja = new O4(function (a) {
        return a.Q
    });
    M4(this.C, this.Ja);
    this.fb = new O4(function (a) {
        return a.transform
    });
    M4(this.C, this.fb);
    this.qa = new O4(function (a) {
        return a.Ka
    });
    M4(this.C, this.qa);
    N4(this.C, "_a");
    N4(this.C, "_b")
};

L0a.prototype.D = function (a) {
    var b = this.Z;
    this.K.index = b.getAttribLocation(a, "q");
    this.X.index = b.getAttribLocation(a, "r");
    this.ma.index = b.getAttribLocation(a, "s");
    this.Ba.index = b.getAttribLocation(a, "t");
    this.V.index = b.getAttribLocation(a, "u");
    this.Y.index = b.getAttribLocation(a, "v");
    this.xa.index = b.getAttribLocation(a, "w");
    this.Va.location = b.getUniformLocation(a, "a");
    this.Ka.location = b.getUniformLocation(a, "b");
    this.Ta.location = b.getUniformLocation(a, "c");
    this.ba.location = b.getUniformLocation(a, "d");
    this.ca.location = b.getUniformLocation(a, "e");
    this.ha.location = b.getUniformLocation(a, "f");
    this.ea.location = b.getUniformLocation(a, "g");
    this.Ja.location = b.getUniformLocation(a, "h");
    this.fb.location = b.getUniformLocation(a, "o");
    this.qa.location = b.getUniformLocation(a, "p")
};

L0a.prototype.F = function (a, b) {
    switch (a) {
    case 0:
        return b.K;
    case 1:
        return b.N;
    default:
        return 0
    }
};

var i6 = function (a, b) {
    this.C = k;
    this.D = a;
    this.F = b
};

B(i6, A4);
v = i6.prototype;
v.lu = B4;
v.wf = function () {
    this.C.K = 2;
    var a = E4(this),
        b = F4(this);
    D4(this, a.C, 0, [24]);
    D4(this, a.C, 1, [23]);
    D4(this, a.Rb, 0, [1.5]);
    D4(this, a.Rb, 1, [0]);
    C4(this, b.ma, 5126);
    C4(this, b.ca, 5123);
    C4(this, b.ha, 5126);
    C4(this, b.ba, 5123);
    C4(this, b.ea, 5122)
};

v.Fd = "text";
v.dw = function (a) {
    return !a.Sg.CV
};

v.df = function (a, b) {
    var c = E4(this);
    c.zk.set(Math.pow(2, a.zoom - a.Hc.da()));
    H4(this, a.qt, 0, c.text, c.fb);
    var d = a.qt;
    d.Uo || s4(d);
    H4(this, d.Uo, 1, c.Ti, c.Si);
    H4(this, a.Ih, 2, c.D, c.F);
    H4(this, this.F, 3, c.G, c.I);
    H4(this, a.At, 4, c.U, c.V);
    i6.ia.df.call(this, a, b)
};

v.ip = function () {
    this.getContext().disable(2929)
};

v.zb = function (a) {
    for (var b = 0, a = a.Sg.ir, c = a.length, d = 0; d < c; ++d) var e = a[d].Ed,
        e = 0 < (e.F > e.D ? 1 : -1) ? Math.ceil(e.F) - Math.floor(e.D) : Math.ceil(e.D) - Math.floor(e.F),
        b = b + 4 * e;
    return b
};

v.Fg = function (a, b) {
    for (var c = b.count, d = 0, e = a.Sg.ir, f = e.length, g = a.Hc, j = 0; j < f; ++j) {
        var m = e[j],
            n = m.Ed,
            p = n.F > n.D ? 1 : -1,
            q, s;
        0 < p ? (q = Math.ceil(n.F) - Math.floor(n.D), s = Math.floor(n.D + 1)) : (q = Math.ceil(n.D) - Math.floor(n.F), s = Math.ceil(n.D - 1));
        if (0 < c) c -= 4 * q;
        else {
            var t = n.K;
            if (t) for (var x = 2 * t.height - 2, D = J3(this.D, g.Qf(m.fd)), I = QYa(n.C, n.D), K = 0; K < q; ++K) {
                var J = 0 == K ? n.D : s + p * (K - 1),
                    M = K == q - 1 ? n.F : s + p * K,
                    Q = O3(n.C, J),
                    aa = P3(n.C, J),
                    ba = O3(n.C, M),
                    ia = P3(n.C, M),
                    ha = n.C.altitude,
                    xa = p * (QYa(n.C, J) - I),
                    Aa = p * (QYa(n.C, M) - I),
                    M = m.shift,
                    J = m.pH,
                    Ra = Aa,
                    Aa = x,
                    Ba = t,
                    kb = m.fd,
                    oa = D,
                    rb = m.Pk,
                    hb = n.N;
                if (Ra === h) var Ra = ba - Q,
                    pb = ia - aa,
                    Ra = Math.sqrt(Ra * Ra + pb * pb);
                for (var Oa = pb = h, Hb = h, ib = h, ec = 0; 4 > ec; ++ec) 2 > ec ? (pb = Q, Oa = aa, Hb = ba, ib = ia) : (Hb = Q, ib = aa, pb = ba, Oa = ia), this.Lb(xa, Ra, (hb ? -1 : 1) * Ba.width, Ba.z7, 4 * Aa, Ba.left, Ba.top, pb, Oa, ha, Hb, ib, M, J, ec, kb, oa, rb);
                d += 4
            }
        }
    }
    a.Sg.CV = i;
    return d
};

v.Lb = function (a, b, c, d, e, f, g, j, m, n, p, q, s, t, x, D, I, K) {
    var J = this.C.C,
        M = J.D,
        Q = J.G,
        aa = J.F,
        ba = J.offset,
        ia = ba / 4,
        ba = ba / 2;
    M[ia] = a;
    M[ia + 1] = b;
    M[ia + 2] = c;
    Q[ba + 6] = d;
    Q[ba + 7] = e;
    Q[ba + 8] = f;
    Q[ba + 9] = g;
    M[ia + 5] = j;
    M[ia + 6] = m;
    M[ia + 7] = p;
    M[ia + 8] = q;
    Q[ba + 18] = x;
    Q[ba + 19] = D;
    Q[ba + 20] = I;
    Q[ba + 21] = K;
    aa[ba + 22] = s;
    aa[ba + 23] = t;
    aa[ba + 24] = n;
    J.offset += 52
};

var j6 = function (a, b) {
    i5.call(this, a, b);
    this.Qn = [];
    this.mk = []
};

B(j6, i5);
var n4 = function (a, b, c) {
    a.C.D || s4(a);
    return a.Qn[b] && a.Qn[b][c] || k
};

j6.prototype.G = u(l);
j6.prototype.cleanup = function () {
    this.C.clear()
};

var k6 = function (a, b, c, d, e) {
    for (var f = b.rn(), g = [], j = 0; j < f; ++j) {
        var m = b.$j(j);
        if (!g[m]) {
            g[m] = i;
            var n = b.Cn(m),
                p = b.St(n),
                q = 1 < b.Mm(b.Ct(j));
            if (!(q && !c || !q && !d)) for (var s = 0; s < p; ++s) {
                var t = b.Xv(n, s);
                e.call(a, j, t, q, m, s)
            }
        }
    }
},
    M0a = function (a, b, c) {
        for (var d = b.Bl(), e = 0; e < d; ++e) {
            var f = 1 < b.Mm(b.oz(e));
            if (!f) for (var g = b.yo(e), j = b.kr(g), m = 0; m < j; ++m) for (var n = b.Hp(g, m), p = b.jr(n), q = 0; q < p; ++q) if (1 == b.Ny(n, q)) {
                var s = b.Oy(n, q);
                c.call(a, s, f, e, m, n, q)
            }
        }
    },
    N0a = function (a, b, c) {
        for (var d = b.Bl(), e = 0; e < d; ++e) {
            var f = 1 < b.Mm(b.oz(e));
            if (!f) for (var g = b.yo(e), j = b.kr(g), m = 0; m < j; ++m) for (var n = b.Hp(g, m), p = b.jr(n), q = 0; q < p; ++q) if (3 == b.Ny(n, q)) {
                var s = b.dM(n, q);
                s && c.call(a, s, f, e, m, n, q)
            }
        }
    };

var r4 = function (a, b, c) {
    j6.call(this, a);
    this.D = b;
    this.Qe = c;
    this.Dz = [];
    this.Uo = k
};

B(r4, j6);
var l6 = {
    x: -0.03,
    y: 0.05
},
    O0a = {
        12353: l6,
        12355: l6,
        12357: l6,
        12359: l6,
        12361: l6,
        12387: l6,
        12419: l6,
        12421: l6,
        12423: l6,
        12430: l6,
        12449: l6,
        12451: l6,
        12453: l6,
        12455: l6,
        12457: l6,
        12483: l6,
        12515: l6,
        12517: l6,
        12519: l6,
        12526: l6,
        12533: l6,
        12534: l6
    };

r4.prototype.G = function (a, b) {
    this.C.D || s4(this);
    return !(!this.Dz[a] || !this.Dz[a][b])
};

r4.prototype.F = function () {
    this.Uo || (this.Uo = new k0a(this.C.C, this.D));
    this.Qn = [];
    this.Dz = [];
    var a;
    var b = 5,
        c = 0;
    k6(this, this.Qe, i, l, function (a, b) {
        for (var c = this.Qe.kq(a), d = this.Qe.jq(a), e = 0; e < b.length;) {
            var f;
            f = 0 == e && P0a(b) ? b.length : e + 1;
            var g = this.Uo,
                j = c,
                I = d,
                e = b.substr(e, f - e),
                K = p0a(j, I, e);
            if (!g.M[K]) {
                g.K.push(K);
                g.M[K] = i;
                g.C.D = l;
                !Y5[K] && 0 != g.D.tq && (g.D = {
                    tq: 0,
                    xz: k,
                    uD: 0,
                    vD: k
                });
                var J = n0a[K];
                J || (j = LYa(j, I), g.I.font != j && (g.I.font = j), J = Math.ceil(g.I.measureText(e).width), n0a[K] = J)
            }
            e = f
        }
    });
    s4(this.Uo);
    this.Uo.Eh() ? (k6(this, this.Qe, i, l, function (a, d, e, f, g) {
        for (var e = e && (m6(d.charCodeAt(0)) || m6(d.charCodeAt(d.length - 2))), j = this.Qe.kq(a), x = this.Qe.jq(a), a = this.Qe.ED(a) * j, D = 5, I = 0, K = 0, J = 0; J < d.length;) {
            var M;
            M = 0 == J && P0a(d) ? d.length : J + 1;
            var Q = d.substr(J, M - J),
                J = $5(Q),
                aa = r0a(j, x, Q),
                Q = aa.width,
                aa = 2 * Math.max(-aa.top, aa.height + aa.top);
            e && !J && (aa = Q = Q > aa ? Q : aa);
            I = Q > I ? Q : I;
            K = aa > K ? aa : K;
            D += Q + a + 1;
            J = M
        }
        this.Qn[f] = this.Qn[f] || [];
        this.Qn[f][g] = new KB(0, c, D, K);
        this.Qn[f][g].z7 = I;
        e && (this.Dz[f] = this.Dz[f] || Array(1), this.Dz[f][g] = e);
        b = Math.max(b, D);
        c++
    }), a = new Bw(2 * b, c)) : a = k;
    if (a) {
        a: {
            var d = a;
            if (0 != d.width * d.height) {
                var e = 4 * d.width,
                    f = new Uint8Array(e * d.height),
                    g = 0;
                if (!this.Uo.Eh() && (this.Uo.F(), !this.Uo.Eh())) {
                    a = l;
                    break a
                }
                k6(this, this.Qe, i, l, function (a, b, c) {
                    for (var c = c && (m6(b.charCodeAt(0)) || m6(b.charCodeAt(b.length - 2))), d = this.Qe.kq(a), j = this.Qe.jq(a), a = this.Qe.ED(a) * d, t = 5, x = e * g, D = 0; D < b.length;) {
                        var I;
                        I = 0 == D && P0a(b) ? b.length : D + 1;
                        var K = b.substr(D, I - D),
                            J = $5(K),
                            D = I,
                            M = D % 2;
                        I = r0a(d, j, K);
                        var Q = -I.left,
                            aa = I.width + I.left;
                        c && (!J && I.height > I.width) && (Q += (I.height - I.width) / 2, aa += (I.height - I.width) / 2);
                        var Q = 2 * Q,
                            aa = 2 * aa,
                            ba;
                        ba = this.Uo;
                        var ia = p0a(d, j, K);
                        ba = ba.G[ia];
                        for (var ia = ba.x / 4, ha = ba.y / 4, t = t + Q, Q = -Q - 4; Q < aa + 4; ++Q) {
                            var xa = 4 * Math.floor(t + Q);
                            Math.abs(f[M + xa + x] - 128) > Math.abs(Q) && (f[M + xa + x] = Math.round(128 + Q))
                        }
                        M = 4 * Math.floor(t);
                        f[M + x + 2] = ia;
                        f[M + x + 3] = ha;
                        c && (K = 1 == K.length ? O0a[K.charCodeAt(0)] : k, f[M + x + 6] = K ? Math.floor(2 * K.x * (I.width + 1) + ia) : J ? ba.aO / 4 : ia, f[M + x + 7] = K ? Math.floor(2 * K.y * (I.width + 1) + ha) : J ? ba.JV / 4 : ha);
                        t += aa + 2 * a + 2
                    }
                    g++
                });
                var j = j5(this.C);
                a = this.C.C;
                a.bindTexture(3553, j);
                j = d.width || 1;
                d = d.height || 1;
                z1(a, 6408, j, d, 6408, f);
                this.C.Pf(j, d, 4)
            }
            a = i
        }
        this.C.D = a
    }
};

var P0a = function (a) {
    for (var b = 0; b < a.length; ++b) {
        var c;
        c = a.charCodeAt(b || 0);
        if (!(c = 1424 <= c && 1792 > c)) c = a.charCodeAt(b || 0), c = !(0 <= c && 1536 > c || 12288 <= c && 65520 > c);
        if (c) return i
    }
    return l
},
    m6 = function (a) {
        return 11904 <= a && 40960 > a || 44032 <= a && 64256 > a
    };

var BZa = function (a, b, c) {
    j6.call(this, a, c);
    this.TE = this.UE = 0;
    this.D = k;
    n6 || (n6 = uq("canvas"), n6.width = 128, n6.height = 127);
    this.Qe = b
};

B(BZa, j6);
var n6 = k;
BZa.prototype.F = function () {
    if (!this.D) {
        this.Qn = [];
        this.mk = [];
        var a = this.UE = this.TE = 0,
            b = 0,
            c = n6.getContext("2d");
        k6(this, this.Qe, l, i, function (d, e, f, g, j) {
            f = this.Qe.kq(d);
            o6(f, this.Qe.jq(d), c);
            d = Math.ceil(c.measureText(e).width);
            this.Qn[g] = this.Qn[g] || [];
            this.Qn[g][j] = new KB(1, b + f, d, f);
            a = Math.max(a, d);
            b += 2 * f;
            this.UE++
        });
        M0a(this, this.Qe, function (d, e, f, g, j, m) {
            e = this.Qe.nz(j, m);
            j = this.Qe.mz(j, m);
            o6(e, j, c);
            d = Math.ceil(c.measureText(d).width);
            this.UE++;
            this.mk[f] = this.mk[f] || [];
            this.mk[f][g] = this.mk[f][g] || [];
            this.mk[f][g][m] = new KB(1, b + e, d, e);
            a = Math.max(a, d);
            b += 2 * e
        });
        N0a(this, this.Qe, function (c, d, e, f, g, j) {
            c = d = 0;
            g = this.Qe.CJ(g, j);
            c = g.height;
            d = g.width;
            this.TE++;
            this.mk[e] = this.mk[e] || [];
            this.mk[e][f] = this.mk[e][f] || [];
            this.mk[e][f][j] = new KB(1, b + c, d, c);
            a = Math.max(a, d);
            b += 2 * c
        });
        this.D = new Bw(a + 2, b)
    }
    var d;
    if (d = this.TE) {
        var e = 0;
        N0a(this, this.Qe, function (a) {
            a.complete || e++
        });
        d = 0 != e
    }
    if (d) this.C.I = l;
    else {
        d = this.D;
        var f = i;
        if ((this.UE || this.TE) && 0 < d.width * d.height) {
            d = new Bw(128 * Math.ceil(d.width / 128), 127 * Math.ceil(d.height / 127));
            var g = this.C.C,
                j = j5(this.C);
            g.bindTexture(3553, j);
            z1(g, 6406, d.width, d.height, 6406, k);
            this.C.Pf(d.width, d.height, 1);
            if (this.UE && f) {
                var f = this.C.C,
                    m = n6.getContext("2d");
                m.textBaseline = "middle";
                m.textAlign = "left";
                for (g = 0; g < d.width; g += 128) for (j = 0; j < d.height; j += 127) m.clearRect(0, 0, 128, 127), m.save(), m.translate(-g, -j), k6(this, this.Qe, l, i, function (a, b, c, d, e) {
                    o6(this.Qe.kq(a), this.Qe.jq(a), m);
                    a = this.Qn[d][e];
                    m.fillText(b, a.left, a.top)
                }), M0a(this, this.Qe, function (a, b, c, d, e, f) {
                    b = this.Qe.nz(e, f);
                    e = this.Qe.mz(e, f);
                    o6(b, e, m);
                    c = this.mk[c][d][f];
                    m.fillText(a, c.left, c.top)
                }), m.restore(), f.D.texSubImage2D(3553, 0, g, j, 6406, 5121, n6);
                f = i
            }
            if (this.TE) {
                if (d = f) {
                    var n = this.C.C,
                        p = 0;
                    N0a(this, this.Qe, function (a, b, c, d, e, f) {
                        a.complete ? (b = this.mk[c][d][f], n.D.texSubImage2D(3553, 0, b.left, b.top - b.height / 2, 6406, 5121, a)) : p++
                    });
                    d = 0 == p
                }
                f = d
            }
        }
        this.C.D = f
    }
};

var o6 = function (a, b, c) {
    a = LYa(a, b);
    c.font != a && (c.font = a)
};

var p6 = function (a, b, c, d) {
    i5.call(this, a, i);
    this.L = b;
    this.I = {};

    this.N = [];
    this.Q = d;
    this.G = {};

    this.M = 0;
    this.P = k;
    this.V = a.getParameter(3379);
    this.K = this.D = -1;
    a = c.length;
    for (b = 0; b < a; ++b) d = c[b], this.I[d] || (this.N.push(d), this.I[d] = new KB(0, 0, 0, 0), v4(this.L, d) || (this.G[d] = i, H_a(this.L, d, A(this.U, this, d))));
    this.M = za()
};

B(p6, i5);
p6.prototype.F = function () {
    var a = this.N.length;
    this.D = 1;
    for (var b = 0, c = 0, d = 0, e = 0; e < a; ++e) {
        var f = this.N[e],
            g = v4(this.L, f);
        !this.G[f] && g && (0 < c && c + g.width > this.V && (d += b + 1, c = b = 0), f = this.I[f], f.left = c, f.top = d, f.width = g.width, f.height = g.height, f.height > b && (b = f.height), c += f.width + 1, c - 1 > this.D && (this.D = c - 1))
    }
    this.K = Math.max(1, d + b);
    b = this.C.C;
    this.Q && b.state.Kn(37441, 1);
    e = j5(this.C);
    b.bindTexture(3553, e);
    z1(b, 6408, this.D, this.K, 6408, k);
    this.C.Pf(this.D, this.K, 4);
    for (e = 0; e < a; ++e) if (f = this.N[e], g = v4(this.L, f), !this.G[f] && g) {
        f = this.I[f];
        try {
            b.D.texSubImage2D(3553, 0, f.left, f.top, 6408, 5121, g)
        } catch (j) {}
    }
    this.Q && b.state.Kn(37441, 0);
    this.C.D = i
};

p6.prototype.rv = function (a) {
    if (this.G[a]) return new Bw(0, 0);
    a = v4(this.L, a);
    return !a ? new Bw(0, 0) : new Bw(a.width, a.height)
};

p6.prototype.U = function (a) {
    this.C.D = l;
    this.M = za();
    delete this.G[a];
    this.P && this.P()
};

var Q0a = function (a, b, c, d, e) {
    this.Hc = a;
    this.Oa = b;
    this.Sg = c;
    this.At = d;
    this.Ih = e;
    this.zoom = this.az = this.transform = this.Ry = this.iv = this.qt = k
};

var q6 = function (a, b, c, d, e, f, g, j) {
    q4.call(this, a, b, d, e, g, l);
    this.Z = c;
    this.fb = f;
    this.I = [];
    this.Ta = uq("canvas");
    this.Wb = !! j
};

B(q6, q4);
q6.prototype.BV = function (a, b) {
    var c = this.F ? b.C.M : b.C.L;
    return !(!a.M || !(c && c.M >= a.N))
};

q6.prototype.mF = function (a, b) {
    q6.ia.mF.call(this, a, b);
    R0a(this, a).initialize(b)
};

q6.prototype.uU = function (a, b, c) {
    var d = a.C,
        c = this.I[c] = new Q0a(a.data, a.Oa, b, R0a(this, a), d.Ih);
    b.ir.length && (c.qt = d.qt);
    b.jt.length && (c.iv = d.iv);
    if (b.fv.length) {
        var d = a.data,
            b = a.C,
            a = a.Oa,
            e = this.F ? b.M : b.L;
        if (!e) {
            for (var e = [], f = d.rn(), g = 0; g < f; g++) for (var j = d.Cn(d.$j(g)), m = d.Zp(j), n = 0; n < m; n++) e.push(d.tv(j, n));
            f = d.Bl();
            for (g = 0; g < f; g++) {
                j = d.yo(g);
                m = d.kr(j);
                for (n = 0; n < m; ++n) for (var p = d.Hp(j, n), q = d.jr(p), s = 0; s < q; ++s) if (2 == d.Ny(p, s)) {
                    var t = d.Oy(p, s);
                    e.push(t)
                }
            }
            e = new p6(this.Z, this.ba.D, e, i);
            d = ya(this.fb, a.Bc());
            e.P = d;
            this.F ? b.M = e : b.L = e
        }
        c.Ry = e
    }
};

var S0a = function (a, b) {
    for (var c = a.D.C, d = 0; d < a.U.length; ++d) {
        var e = a.U[d];
        if (!b(c[e], a.I[e])) break
    }
},
    T0a = function (a, b) {
        for (var c = a.D.C, d = 0; d < a.Q.length; ++d) {
            var e = a.Q[d];
            if (!b(c[e], a.I[e])) break
        }
    },
    U0a = function (a, b) {
        for (var c = a.D.C, d = 0; d < a.M.length; ++d) {
            var e = a.M[d];
            if (!b(c[e], a.I[e])) break
        }
    },
    V0a = function (a, b) {
        for (var c = a.D.C, d = 0; d < a.V.length; ++d) {
            var e = a.V[d];
            if (!b(c[e], a.I[e])) break
        }
    },
    W0a = function (a, b) {
        for (var c = a.D.C, d = 0; d < a.K.length; ++d) {
            var e = a.K[d];
            if (!b(c[e], a.I[e])) break
        }
    },
    R0a = function (a, b) {
        var c = b.C,
            d = a.F ? c.Q : c.At;
        d || (d = new B5(a.Z), a.F ? c.Q = d : c.At = d);
        return d
    };

var X0a = function (a, b) {
    NA.call(this, "RemoveEvent", a);
    this.Oa = b
};

B(X0a, NA);
var r6 = function (a, b, c, d, e, f, g, j, m, n) {
    q6.call(this, a, b, c, d, e, f, g, y(n) ? n : i);
    this.Ja = j;
    this.L = {};

    this.G = qD();
    aB(m, "RemoveEvent", A(this.Va, this))
};

B(r6, q6);
r6.prototype.ha = function (a) {
    r6.ia.ha.call(this, a);
    var b = t4(this, a);
    if (b) {
        var c = a.Oa.Bc();
        if (!y(this.L[c])) {
            for (var d = a.data, e = [], b = b.tn, f = 0; f < b.length; f++) {
                var g = b[f],
                    j = 0,
                    m = 0;
                g.Wd ? (j = g.Wd.Sy, m = g.Wd.Ty) : g.Ed.C && (m = (g.Ed.D + g.Ed.F) / 2, j = g.Ed.C.Ic(m), m = g.Ed.C.Nc(m));
                j = j / 256 + d.$g();
                m = m / 256 + d.ah();
                v5(j, m, d.da(), this.G);
                u5(this.G[0], this.G[1], 0, this.G);
                e[2 * f] = this.G[0];
                e[2 * f + 1] = this.G[1]
            }
            d = new Float64Array(e);
            a = this.Ja.C(d, A(this.Bb, this, a), A(this.ea, this, a));
            this.L[c] = a
        }
    }
};

r6.prototype.MN = function (a, b) {
    if (b.D) for (var c = t4(this, a).tn, d = b.tn, e = 0; e < d.length && e < c.length; ++e) d[e].Wd && c[e].Wd ? d[e].Wd.altitude = c[e].Wd.altitude : d[e].Ed.C && c[e].Ed.C && (d[e].Ed.C.altitude = c[e].Ed.C.altitude), Z3(d[e], c[e].K);
    r6.ia.MN.call(this, a, b)
};

r6.prototype.Bb = function (a, b, c) {
    var d = t4(this, a),
        e = d.tn,
        d = Y0a(d),
        f = a.data,
        g = f.getWidth();
    SXa(f, g / 2, g / 2, this.G);
    for (var j = P_a.C(0, this.G[1], 0), j = j / R_a(f.da()), j = j * g, g = f = 0; g < e.length; g++) f < b.length && b[f] == g && (e[g].Wd ? e[g].Wd.altitude = c[g] * j : e[g].Ed.C && (e[g].Ed.C.altitude = c[g] * j), Z3(e[g], e[g].M || !isFinite(c[g]) || !e[g].Wd && !e[g].Ed.C), f++), m4(d, e[g]);
    this.mF(a, d)
};

r6.prototype.ea = function (a, b, c) {
    for (var d = t4(this, a), e = d.tn, d = Y0a(d), f = 0, g = 0; g < e.length; g++) {
        if (f < b.length && b[f] == g) {
            $Ya(e[g], !c[g]);
            var j = e[g].Wd ? e[g].Wd.altitude : e[g].Ed.C ? e[g].Ed.C.altitude : Infinity;
            Z3(e[g], !c[g] || !isFinite(j));
            f++
        }
        m4(d, e[g])
    }
    this.mF(a, d)
};

var Y0a = function (a) {
    var b = new xZa;
    b.K = a.K;
    b.I = a.I;
    b.F = a.F;
    b.D = a.D;
    b.G = a.G;
    b.L = a.L;
    return b
};

r6.prototype.Va = function (a) {
    var b = this.L[a.Oa.Bc()];
    y(b) && (this.Ja.D(b), delete this.L[a.Oa.Bc()])
};

var s6 = function (a, b, c, d, e) {
    i5.call(this, a);
    this.Qe = b;
    this.G = c;
    this.V = d;
    this.D = e || k
};

B(s6, i5);
s6.prototype.F = function () {
    var a = this.C.C,
        b = j5(this.C);
    a.activeTexture(h5);
    a.bindTexture(3553, b);
    for (var b = Math.max(Math.ceil(this.Qe.Cm() / this.V), 1), c = Math.max(Math.ceil(this.Qe.Cm() / b), 1), d = new Uint8Array(4 * c * b), e = this.Qe.Cm(), f = 0; f < e; ++f) {
        var g = this.D ? this.D[f] : h,
            g = (g = y(g) ? g : this.Qe.Qf(f)) ? J3(this.G, g) : 0;
        d[4 * f] = g >> 24;
        d[4 * f + 1] = (g >> 16) % 256;
        d[4 * f + 2] = (g >> 8) % 256;
        d[4 * f + 3] = g % 256
    }
    z1(a, 6408, c, b, 6408, d);
    this.C.Pf(c, b, 4);
    this.C.D = i
};

var t6 = function (a, b, c, d, e, f, g, j, m) {
    this.Q = a;
    this.D = b;
    this.ba = c;
    this.X = d;
    this.M = [];
    for (a = 0; a < d.length; ++a) this.M[a] = A(this.B6, this, d[a]);
    this.U = e;
    this.Z = f;
    this.Y = g;
    this.V = j;
    this.C = [];
    this.K = {};

    this.L = {};

    this.I = this.F = 0;
    this.G = {};

    this.N = k;
    this.$e = [];
    this.C.push(m);
    for (d = this.UU; d != this.start && d != k; d = d.apply(this)) this.$e.push(d);
    this.C.pop();
    this.F = 0
},
    Z0a = function (a, b) {
        var c = b.Oa.Bc();
        a.L[c] = l;
        a.K[c] || (a.C.push(b), a.K[c] = i, W0(a.Q, a, a.D))
    };

t6.prototype.P = function (a) {
    var b = a.Oa.Bc();
    return !this.K[b] ? (this.C.push(a), this.K[b] = i, this.L[b] = i, W0(this.Q, this, this.D), i) : l
};

t6.prototype.clear = function () {
    var a = this.C[this.F];
    this.C = [];
    this.K = {};

    this.F = 0;
    if (a) {
        var b = a.Oa.Bc();
        this.L[b] ? this.P(a) : Z0a(this, a)
    }
};

t6.prototype.start = function () {
    if (this.F < this.C.length) return this.L[this.C[this.F].Oa.Bc()] ? this.iX : this.UU;
    this.clear();
    return k
};

var $0a = function (a, b, c, d) {
    var e = a.C.Ih;
    e || (e = new s6(b, a.data, c, d), a.C.Ih = e);
    var e = a.data.wv(),
        f = a.C.G;
    if (e && !f) {
        for (var f = a.data.XP(), g = [], j = 0; j < f.length; ++j) g[f[j]] = G_a(c.F);
        f = new s6(b, e, c, d, g);
        a.C.G = f
    }
};

v = t6.prototype;
v.UU = function () {
    this.ba.ha(this.C[this.F]);
    return this.pca
};

v.pca = function () {
    var a = this.C[this.F],
        b = a.C;
    $0a(a, this.Z, this.Y, this.V);
    a = b.Ih;
    a.Eh() || s4(a);
    (a = b.G) && !a.Eh() && s4(a);
    this.G.Ih = b.Ih;
    return this.Caa
};

v.Caa = function () {
    var a = this.C[this.F];
    this.G.Hc = a.data;
    this.G.Oa = a.Oa;
    return this.M[0]
};

v.B6 = function (a) {
    var b = 2,
        c = this.C[this.F].C.C;
    a.Ot(c, this.G) || (b = a.pj(c, this.G));
    2 == b && this.I++;
    return this.I == this.X.length ? (this.I = 0, this.iX) : this.M[this.I]
};

v.iX = function () {
    var a = this.C[this.F];
    this.G.Hc = a.data;
    this.G.Oa = a.Oa;
    var b = a.C.P,
        c = a.C.N,
        d = a.data,
        e = d.bq(),
        f = i;
    if (0 != e) for (var g = 0; g < e; ++g) this.G.SH = g, c[g] || (c[g] = d.kH(g)), c[g].complete == l ? (f = l, bB(c[g], "load", A(this.P, this, a))) : (this.G.image = c[g], b[g] = b[g] || {}, this.U.pj(b[g], this.G));
    this.N && f && this.N();
    this.F++;
    return this.start
};

var u6 = function (a, b, c, d, e, f, g, j, m, n) {
    this.eU = d.getContext().ql();
    this.mn = d.D ? d.D.C : k;
    this.iU = m || k;
    this.N = f;
    this.H = [];
    this.I = a;
    this.Y = b;
    this.Ti = c;
    this.Y4 = !! j;
    this.YT = this.ZT = -1;
    this.ca = 17664;
    this.Wb = this.Pc = this.Jg = this.gU = this.dC = this.qa = this.Va = this.ha = this.Ja = this.Rb = this.U = this.ee = this.ba = this.Bb = this.fb = this.kf = this.yb = this.Ka = this.Nf = this.Ta = this.Td = this.xa = this.L = k;
    this.fU = new Uint8Array(4);
    this.ZB = l;
    this.vh = [];
    this.EM = this.Si = k;
    this.oj = [];
    this.VB = k;
    this.Yq = {};

    this.K = {};

    this.C = new DYa;
    this.Re = this.Ba = this.qo = 0;
    this.pM = 1;
    this.Xq = new K0;
    this.bC = new K0;
    this.YB = new K0;
    this.Q = l;
    this.ea = i;
    this.ma = this.cU = this.CM = 0;
    this.F = new c0a;
    this.ly = new IZa;
    this.bU = this.Ae = l;
    this.GM = 0;
    this.cC = l;
    this.G = k;
    this.X = new J_a(A(this.Z4, this));
    this.M = 2;
    this.V4 = A(this.f5, this);
    this.U4 = A(this.a5, this);
    this.W4 = A(this.g5, this);
    this.X4 = A(this.i5, this);
    this.S4 = A(this.c5, this);
    this.kU = A(this.b5, this);
    this.T4 = A(this.d5, this);
    this.$T = A(this.e5, this);
    this.FM = A(this.Ws, this);
    this.F.oj.set(1);
    this.DM = new N0(h, 0);
    this.hU = e;
    this.nf = k;
    this.fC = new L0(h, l);
    a = d.getContext();
    this.V = a.getParameter(3379);
    b = a.getParameter(3415);
    0 < b && (this.ma = 1 << b);
    b = a.ql();
    aB(b, "webglcontextlost", this.j5, l, this);
    aB(b, "webglcontextrestored", this.k5, l, this);
    a.D.isContextLost() || (this.L && a1a(this), this.fC.set(i));
    this.D = d;
    this.P = this.Wq = g;
    this.dU = new N2(a, 0 < this.ma, 9729);
    this.zk = new N2(a, 0 < this.ma, 9728);
    this.aU = n ? new b1a(this) : k;
    this.init_()
};

B(u6, iB);
u6.prototype.init_ = function () {
    var a = this.D.getContext(),
        b = this.D.D,
        c = this.D.C;
    this.G = this.iU ? new r6(this.I, this.Y, a, c, A(this.IU, this), A(this.LU, this), this.hU, this.iU, this.Ti, !this.N.jy) : new q6(this.I, this.Y, a, c, A(this.IU, this), A(this.LU, this), this.hU, !this.N.jy);
    this.L = [];
    var d = this.D.F,
        e = this.D.C;
    this.xa = new r5(e, d);
    this.L.push(this.xa);
    this.Td = new c6;
    this.L.push(this.Td);
    this.Ta = new y5(e, d);
    this.L.push(this.Ta);
    this.Nf = new y5(e, d);
    this.L.push(this.Nf);
    this.Ka = new w5(e, d);
    this.L.push(this.Ka);
    this.yb = new J5(e, d);
    this.L.push(this.yb);
    this.kf = new J5(e, d);
    this.L.push(this.kf);
    this.fb = new I5(e, d);
    this.L.push(this.fb);
    this.Bb = new i0a(e, d);
    this.L.push(this.Bb);
    this.ba = new p5(e, d);
    q5(this.ba, new F5(e, d, this.N));
    q5(this.ba, new e6(e, d, this.N));
    q5(this.ba, new f6(e, d, this.N, A(this.KU, this)));
    this.L.push(this.ba);
    this.ee = new K0a(e, d, this.N);
    this.L.push(this.ee);
    this.U = new p5(e, d);
    q5(this.U, new H5(e, d, this.N));
    q5(this.U, new g6(e, d, this.N));
    q5(this.U, new h6(e, d, this.N, A(this.KU, this)));
    this.L.push(this.U);
    this.Rb = new i6(e, d);
    this.L.push(this.Rb);
    this.Ja = new a6(e, d, this.N);
    this.L.push(this.Ja);
    this.ha = new D5;
    this.L.push(this.ha);
    this.Va = new A5(e, d, this.N);
    this.L.push(this.Va);
    this.qa = new T5(this.N.Vh, this.ma);
    this.L.push(this.qa);
    this.dC = new e0a(this.qa);
    this.gU = new e0a(this.qa);
    this.Jg = new A0a(this.ma);
    this.L.push(this.Jg);
    this.Pc = new y0a;
    this.L.push(this.Pc);
    this.Wb = new w0a;
    this.L.push(this.Wb);
    a1a(this);
    this.vh = [this.Td, this.xa, this.ba, this.U, this.Ta, this.Ka, this.yb, this.fb];
    this.Si = new t6(b.C, 2, this.G, this.vh, this.ha, a, c, this.V, c1a());
    this.EM = new t6(b.C, 0, this.G, this.vh, this.ha, a, c, this.V, c1a());
    this.Pc.pj(this.Yq, 0);
    (new M0(this.FM)).Zb(this.I.G);
    (new M0(this.FM)).Zb(this.Ti.L);
    (new M0(this.FM)).Zb(c.Y);
    a = new M0;
    a.C = A(this.a6, this, a);
    a.Zb(this.Y.G);
    a = new M0;
    a.C = A(this.JU, this, a);
    a.Zb(this.Y.L);
    var f = new K0;
    f.C = A(function () {
        f.get() && this.JU()
    }, this);
    f.Zb(this.Y.P);
    this.Xq.Zb(this.I.Lg);
    this.bC.Zb(this.I.X);
    this.YB.Zb(this.I.Y);
    a = new K0;
    a.C = A(this.Y5, this, a);
    a.Zb(this.I.M);
    a = new K0;
    a.C = A(this.Z5, this, a);
    a.Zb(this.I.Q)
};

rD();
v = u6.prototype;
v.Ws = function () {
    this.D.D && this.D.D.lr()
};

v.run = function () {
    this.CM = za();
    this.Xp()
};

v.a6 = function (a) {
    if (0 < a.get()) a: {
        var a = a.get(),
            b;
        b = this.Y;
        var c = b.F[a] || k;
        c && delete b.F[a];
        c ? (b = c.clone(), b.y = this.C.height - b.y, b = 0 > b.x || b.x >= this.C.width || 0 > b.y || b.y >= this.C.height ? k : b) : b = k;
        if (b) {
            if (!this.ZB || !this.zk.bindTexture(0)) c = this.P, this.zk.activate(this.C.width, this.C.height), this.P = this.zk, this.Q = i, this.ea = 0 < this.ma, this.F.K = 1, this.Xp(), this.F.K = 0, this.ea = i, this.Q = l, this.P = c, this.ZB = i, this.P.activate(this.C.width, this.C.height);
            c = this.D.getContext();
            try {
                this.zk.activate(this.C.width, this.C.height), c.readPixels(Math.floor(b.x), Math.floor(b.y), 1, 1, 6408, 5121, this.fU)
            } catch (d) {
                this.P.activate(this.C.width, this.C.height);
                break a
            }
            this.P.activate(this.C.width, this.C.height);
            var e = new V_a(this.fU),
                c = 0 == e.D ? 1 == e.C[0] ? 1 : 2 : 0,
                f = e.F;
            b = k;
            if (0 == c) {
                var g = [e.G, e.I, e.K, e.D];
                b: {
                    var e = g[0],
                        j = g[1],
                        m = g[2],
                        g = g[3];
                    if (0 != g) for (var n = this.X.C.slice(); 0 < n.length;) {
                        var p = n.shift();
                        0 < p.children.length && (n = n.concat(p.children));
                        if (p = i3(p)) {
                            var q = p.data;
                            if (q.da() == m && q.$g() % 32 == e && q.ah() % 32 == j) {
                                var s = 1;
                                q instanceof v6 ? s = 3 : q.wv() && (s = 2);
                                if (g === s) {
                                    e = p;
                                    break b
                                }
                            }
                        }
                    }
                    e = k
                }
                e && f < e.data.Cm() && (b = new f3(c, e.data, e.Oa, e.C, f, K3(this.D.C, e.data.Qf(f))))
            }
            c = this.Y;
            if (f = c.C[a]) c.C[a] = k, f(b)
        } else if (b = this.Y, c = b.C[a]) b.C[a] = k, c(k)
    }
};

v.KU = function () {
    this.F.Y.set(this.C.width / 2, this.C.height / 2);
    this.P.activate(this.C.width, this.C.height)
};

v.JU = function (a) {
    y(a) ? (a = a.get(), a = this.Y.K[a]) : a = this.Y.K[this.Y.Q] || k;
    if (a && (a.Hc.vh = k, a.D)) {
        var b = a.F.Ih;
        if (b) {
            var c = a.fd,
                d = a.Hc.Qf(a.fd),
                d = J3(b.G, d);
            if (b.C.D) {
                var e = j5(b.C);
                if (e) {
                    var f = b.C.C,
                        g = m1(f.state) - 33984,
                        j = f.F.F[g];
                    f.F.Pv(g, e);
                    e = new Uint8Array(4);
                    e[0] = d >> 24;
                    e[1] = (d >> 16) % 256;
                    e[2] = (d >> 8) % 256;
                    e[3] = d % 256;
                    f.D.texSubImage2D(3553, 0, c % b.C.lh.width, Math.floor(c / b.C.lh.width), 1, 1, 6408, 5121, e);
                    j && f.F.Pv(g, j)
                } else b.C.D = l
            }
            a = a.D.Bc();
            d1a(this.X.C, a) && this.Ws()
        }
    }
};

v.getContext = function () {
    return this.D.getContext()
};

v.j5 = function () {
    this.fC.set(l)
};

v.k5 = function () {
    this.C = new DYa;
    this.L && a1a(this);
    this.fC.set(i);
    this.Ws()
};

v.Xp = function () {
    this.Q || (this.dispatchEvent(new eYa(this)), this.ZB = l);
    var a = this.D.getContext();
    if (a && !a.D.isContextLost()) {
        var b = [],
            c = l;
        F_a(this.D.F);
        var d = this.D.getContext(),
            e, f = this.X.C,
            g;
        this.ZT < this.I.G.get() || this.YT < this.Ti.L.get() ? this.aU ? (W0(this.mn, this.aU, 2), g = f) : g = e1a(this) : g = f;
        e = g;
        this.ZT = this.I.G.get();
        this.YT = this.Ti.L.get();
        if (this.Q) d.clearColor(0, 0, 0, 0), d.disable(3042);
        else {
            var j = this.D.Tb(),
                m = RXa(j) + 1,
                n = this.ca & 16384 ? this.pM : 1,
                p, q = this.C,
                s = this.I,
                t = q.lat,
                x = q.lng;
            q.lat = s.lat.get();
            q.lng = s.lng.get();
            q.zoom = s.zoom.get();
            var D = l,
                I = s.width.get(),
                K = s.height.get();
            I != q.width && (D = i, q.width = I);
            K != q.height && (D = i, q.height = K);
            n != q.L && (D = i, q.L = n);
            q.K = ip(m, 0, K);
            q.C = j0(q.lat);
            q.D = q.width * q.L;
            q.F = q.height * q.L;
            var J = s.rotation.get();
            q.De = J;
            q.Dc = -Nz(s.Dc.get());
            var M = q.lat,
                Q = q.lng,
                aa = new vD;
            aa.Dc = 0;
            aa.De = 0;
            var ba = k3(s.D, Q, M, aa),
                ia = k3(s.D, x, t, aa),
                ha = ba.x - ia.x,
                xa = ba.y - ia.y;
            64 < Math.abs(ha) || 64 < Math.abs(xa) ? (q.G = 0, q.I = 0) : (q.G += ha, q.I += xa);
            p = D;
            var Aa = this.ly;
            j.xi(Aa.F);
            if (!Aa.F.equals(Aa.G)) {
                var Ra = Aa.G;
                Aa.G = Aa.F;
                Aa.F = Ra;
                Aa.N.C = 0;
                Aa.K = [];
                Aa.D = j;
                var Ba = Aa.P;
                Aa.Q = L1;
                var kb = j.getWidth(),
                    oa = j.getHeight(),
                    rb = ip(RXa(j) + 1, 0, oa),
                    hb = new XXa(j),
                    pb = J1(hb, 0, rb);
                tD(pb.x, pb.y, 0, Ba);
                var Oa = Ba[0],
                    Hb = Ba[0],
                    pb = J1(hb, kb, rb);
                tD(pb.x, pb.y, 0, Ba);
                Ba[0] < Oa && (Oa = Ba[0]);
                Ba[0] > Hb && (Hb = Ba[0]);
                pb = J1(hb, 0, oa);
                tD(pb.x, pb.y, 0, Ba);
                Ba[0] < Oa && (Oa = Ba[0]);
                Ba[0] > Hb && (Hb = Ba[0]);
                pb = J1(hb, kb, oa);
                tD(pb.x, pb.y, 0, Ba);
                Ba[0] < Oa && (Oa = Ba[0]);
                Ba[0] > Hb && (Hb = Ba[0]);
                Aa.M = Oa;
                Aa.L = Hb;
                var ib = Aa.C,
                    ec = b2(Aa.D);
                ib[0] = ec[0];
                ib[1] = ec[1];
                ib[2] = ec[2];
                ib[3] = ec[3];
                ib[4] = ec[4];
                ib[5] = ec[5];
                ib[6] = ec[6];
                ib[7] = ec[7];
                ib[8] = ec[8];
                ib[9] = ec[9];
                ib[10] = ec[10];
                ib[11] = ec[11];
                ib[12] = ec[12];
                ib[13] = ec[13];
                ib[14] = ec[14];
                ib[15] = ec[15];
                var Ib = Aa.C,
                    yc = Aa.D,
                    Wc = yc.Yh() / 2,
                    zc = 1 / (yc.xg() / yc.C * Math.cos(Wc) / Math.cos(yc.Yd() - Wc)),
                    Xb = Aa.C;
                Xb[0] = Ib[0] * zc;
                Xb[1] = Ib[1] * zc;
                Xb[2] = Ib[2] * zc;
                Xb[3] = Ib[3] * zc;
                Xb[4] = Ib[4] * zc;
                Xb[5] = Ib[5] * zc;
                Xb[6] = Ib[6] * zc;
                Xb[7] = Ib[7] * zc;
                Xb[8] = Ib[8] * zc;
                Xb[9] = Ib[9] * zc;
                Xb[10] = Ib[10] * zc;
                Xb[11] = Ib[11] * zc;
                Xb[12] = Ib[12] * zc;
                Xb[13] = Ib[13] * zc;
                Xb[14] = Ib[14] * zc;
                Xb[15] = Ib[15] * zc
            }
            this.F.Y.set(this.C.width / 2, this.C.height / 2);
            this.F.L.set(this.C.L);
            var Xc = this.I.ba.get(),
                Ub = this.I.ca.get();
            this.F.ba.set(Xc * (Math.PI / 180));
            this.F.Yq.set(Ub * (Math.PI / 180));
            p && (this.F.Q.set(this.C.width, this.C.height), this.eU.width = this.C.width, this.eU.height = this.C.height);
            if (p || this.C.width != this.C.D || this.C.height != this.C.F) 1 < n ? (this.P = this.dU, this.dU.scale = this.pM, this.P.activate(this.C.width, this.C.height) || (this.P = this.Wq, this.C.L = 1, this.C.F = this.C.height, this.C.D = this.C.width, this.P.activate(this.C.width, this.C.height))) : this.P.activate(this.C.D, this.C.F);
            d.enable(3042);
            d.state.zo(770, 771, 1, 771);
            d.state.mC(32774);
            d.clearColor.apply(d, IYa(this.I.F.get(), this.I.mapTypes.get()));
            this.z5 = this.I.C.get();
            f1a(this, e, b);
            for (var de = 0; de < b.length; ++de) $0a(b[de], d, this.D.C, this.V);
            for (var kf = 0; kf < b.length; ++kf) {
                var sc = b[kf];
                g1a(this, sc);
                var Rc = sc.Ui && i3(sc.Ui);
                Rc && g1a(this, Rc)
            }
            var ac = this.D.C,
                gb = this.z5,
                xb = ac.D;
            ac.D = gb;
            if (x2(gb) != x2(xb)) {
                ac.M = i;
                ac.I.tU();
                ac.I = ac.G.C(x2(xb), x2(gb));
                for (var lf = ac.F.D[x2(ac.D)] || {}, mf = ac.F.C, nf = 0; nf < ac.C.length; ++nf) {
                    var Yc = ac.C[nf];
                    lf[Yc] ? CYa(ac, Yc, lf[Yc]) : mf[Yc] && CYa(ac, Yc, mf[Yc])
                }
            } else ac.M = l;
            this.cC = l;
            this.bU = 0 <= this.I.mapTypes.get().indexOf(5);
            this.G.F = this.bU
        }
        this.F.N = 0;
        d.disable(2929);
        d.depthFunc(515);
        d.clearDepth(1);
        d.state.ny(0);
        d.enable(3089);
        w6(this, 0, this.C.height);
        this.ca && d.clear(this.ca);
        var Pd = 0 <= this.I.mapTypes.get().indexOf(5),
            pc = 0 <= this.I.F.get().indexOf(1);
        this.I.F.get();
        for (var Cd = 0 <= this.I.F.get().indexOf(0), tc = 0; tc < b.length; ++tc) x6(this, b[tc]) || y6(this, b[tc], l);
        var Kc;
        if (this.Y4) Kc = l;
        else {
            var xf = this.D.getContext().ql(),
                Dd = Ut(document.body, xf);
            Dd && (Dd = !zoa(xf, function (a) {
                return a.style && ("hidden" == a.style.visibility || "none" == a.style.display)
            }));
            Kc = !Dd
        }
        if (!Kc) {
            var Ud = this.nf,
                Sc = this.Xq.get() ? Ud ? A(h1a, k, Ud, this.bC.get()) : A(i1a, k, this.bC.get()) : u(l),
                Vd = this.Q && this.cC;
            if (!this.Q) {
                var Lc = this.G,
                    qh = this.X.C,
                    Pf = !this.Xq.get(),
                    hg = this.CM,
                    Je = Lc.P ^ Pf && 0 < $3,
                    ig = Je || Lc.Y > hg;
                Lc.P = Pf;
                if (Lc.P && !ig && !Lc.ca) Vd = l;
                else {
                    var wa = l;
                    Je && (wa = i);
                    0 == Lc.Ba % Lc.yb && (wa = i);
                    Lc.Ba++;
                    for (var Wd = {}, Ke = qh.slice(), Ed = []; 0 < Ke.length;) {
                        var oe = Ke.shift();
                        if (oe.Oa) {
                            if (Wd[oe.Oa.Bc()]) continue;
                            Wd[oe.Oa.Bc()] = i
                        }
                        oe.Ui && Ke.push(oe.Ui);
                        0 < oe.children.length && (Ke = Ke.concat(oe.children));
                        var Qf = i3(oe);
                        Qf && Ed.push(Qf)
                    }
                    Ed.sort(GZa);
                    for (var Zc = [], yf = [], of = 0; of < Ed.length; ++of) {
                        var rh = Ed[of];
                        AZa(Lc, rh);
                        var Le = t4(Lc, rh);
                        if (Le.D || Le.G) wa = i;
                        0 < Le.tn.length && (Zc.push(Le), yf.push(rh))
                    }
                    if (0 == Zc.length) Vd = l;
                    else {
                        Lc.D.reset(0, Lc.C.width.get(), Lc.C.height.get(), 0, yf);
                        wa ? (Lc.ry(yf, Zc, Sc, Pf, hg), Lc.ca = l) : (Lc.ma(hg + 1), Lc.ca = i, Lc.Rb && FZa(Lc, yf, Zc));
                        for (of = 0; of < yf.length; ++of) for (var Le = Zc[of], jg = Le.tn, pe = 0; pe < jg.length; ++pe) jg[pe].Qg && jg[pe].tc(i, hg, i), YYa(jg[pe], hg);
                        var ig = Lc.Y > hg,
                            kg = Lc.P && !ig,
                            Vd = 0 < yf.length && !kg
                    }
                }
                if (this.cC = Vd) {
                    var Ce = this.G;
                    Ce.U = [];
                    Ce.Q = [];
                    Ce.M = [];
                    Ce.V = [];
                    Ce.K = [];
                    for (var zf = Ce.D.C, hd = 0; hd < zf.length; ++hd) {
                        var Rf = zf[hd];
                        if (z6(Rf.data)) {
                            var af = t4(Ce, Rf);
                            af && (Ce.uU(Rf, af, hd), af.ir.length && Ce.U.push(hd), af.jt.length && Ce.Q.push(hd), af.fv.length && Ce.M.push(hd), af.vy.length && Ce.V.push(hd), af.xy.length && Ce.K.push(hd))
                        }
                    }
                    var sh;
                    var Xd;
                    this.M = 2;
                    W0a(this.G, this.V4);
                    Xd = this.M;
                    if (2 != Xd) sh = Xd;
                    else if (this.M = 2, V0a(this.G, A(this.B5, this)), Xd = this.M, 2 != Xd) sh = Xd;
                    else {
                        this.M = 2;
                        U0a(this.G, this.U4);
                        Xd = this.M;
                        var fc;
                        2 != Xd ? fc = Xd : (this.M = 2, S0a(this.G, this.W4), T0a(this.G, this.X4), fc = this.M);
                        sh = fc
                    }
                    switch (sh) {
                    case 2:
                        break;
                    case 1:
                        c = i;
                        break;
                    default:
                        Vd = l
                    }
                }
            }
            this.Q || this.dispatchEvent(new dYa(this, za()));
            this.Ae = l;
            if (this.YB.get() && (!pc || !this.Q)) {
                var th = this.X.C;
                this.F.X.set(0);
                this.Ba = this.oC = 0;
                this.jC = l;
                this.lU = i;
                j1a(this, th)
            }
            if (Cd && (!pc && !Pd) && !(this.Q || 0 == this.C.Dc)) {
                var pf = this.C.K;
                0 < pf && pf < this.C.height && (this.Pc.yg(), this.Pc.Rd(this.Yq, this.C.L * (this.C.height - pf)))
            }
            var lg;
            if (lg = this.I.V.get()) a: {
                for (var Vg = 0; Vg < b.length; Vg++) {
                    var id = b[Vg].data;
                    if (id && (0 < id.Ao() || 0 < id.vm())) {
                        lg = i;
                        break a
                    }
                }
                lg = l
            }
            var Nh = lg;
            this.YB.get() && (Cd && Nh) && a.clear(1280);
            if (Nh) {
                var Hc = this.D.getContext(),
                    bf = this.X.C;
                Hc.enable(2929);
                Hc.depthFunc(515);
                Hc.enable(2884);
                Hc.state.wo(1029);
                Hc.disable(2960);
                Hc.state.Fp(l, l, l, l);
                k1a(this, bf);
                this.ea && (Hc.enable(2960), Hc.state.er(7680, 7680, 7682), Hc.state.vo(514, 0, 4294967295));
                Hc.depthFunc(514);
                Hc.state.Fp(i, i, i, i);
                k1a(this, bf);
                Hc.state.wo(1028);
                Hc.disable(2929);
                l1a(this, bf);
                Hc.state.wo(1029);
                Hc.disable(2960);
                Hc.disable(2884)
            }
            if (this.C.D != this.C.width || this.C.F != this.C.height) {
                var Fg = {};

                Fg.width = this.C.width;
                Fg.height = this.C.height;
                Fg.source = this.P;
                Fg.y5 = this.Wq;
                this.Wb.pj(this.Yq, Fg);
                this.Wb.yg();
                this.Wb.Rd(this.Yq, Fg);
                a.enable(3042);
                this.P = this.Wq
            }
            if (Vd) {
                a.disable(3089);
                var Oh = this.D.getContext();
                this.Q && Oh.disable(3042);
                Oh.disable(2929);
                var Af = Nz(this.C.De),
                    Bf = Math.cos(Af),
                    Ik = Math.sin(Af);
                this.F.Ka.set(Bf, -Ik, Ik, Bf);
                this.D.getContext().disable(2929);
                this.Bb.yg();
                W0a(this.G, this.S4);
                this.ee.yg();
                V0a(this.G, A(this.A5, this));
                this.Rb.yg();
                S0a(this.G, this.T4);
                this.F.Pc = 1;
                this.F.C.set(24);
                this.Ja.yg();
                T0a(this.G, this.$T);
                this.F.Pc = 0;
                this.F.C.set(23);
                this.Ja.yg();
                T0a(this.G, this.$T);
                m1a(this, i, !this.Ae);
                this.Q && Oh.enable(3042)
            }
            this.Ae && !this.Q && (pc || n1a(this, this.X.C), Vd && m1a(this, l, i));
            this.Q || this.dispatchEvent(new cYa(this, za()));
            c && 300 > this.cU++ ? this.Ws() : this.cU = 0;
            this.CM < this.DM.get() && !(0 < this.Si.C.length) && this.Ws()
        }
    }
};

v.IU = function (a) {
    a > this.DM.get() && this.DM.set(a)
};

var b1a = fa("mu");
b1a.prototype.start = function () {
    e1a(this.mu);
    this.mu.Ws();
    return k
};

var e1a = function (a) {
    var b = a.Ti.getData(a.X.C, a.I, a),
        a = a.X,
        c = {},
        d = {},
        e = new JB(1073741824, 0, 0, 1073741824);
    L_a(a, b, c, d, e);
    M_a(a, a.C, c, d, e);
    K_a(a, a.C, l);
    K_a(a, b, i);
    b.push.apply(b, a.C);
    a.C = b.slice();
    return b
},
    f1a = function (a, b, c) {
        Yg(b, o1a);
        for (var d = 0; d < b.length; d++) {
            var e = b[d];
            0 < e.children.length && f1a(a, e.children, c);
            (e = i3(e)) && c.push(e)
        }
    },
    j1a = function (a, b) {
        a.qo = 0;
        a.Re = 0;
        for (var c = [], d = 0; d < b.length; ++d) {
            var e = b[d];
            if (e.D) {
                var f = a;
                i2(e);
                if (!(0 == e.children.length || e.children[0].C && !e.children[0].C.D)) {
                    w6(f, f.C.height - e.D.bottom, e.D.bottom - e.D.uP);
                    for (var g = [], j = 0; j < e.children.length; ++j) {
                        var m = i3(e.children[j]);
                        m && g.push(m)
                    }
                    p1a(f, g);
                    w6(f, 0, f.C.height)
                }
            } else 0 < e.children.length && j1a(a, e.children), e.C && e.C.D && (f = i3(e)) && c.push(f)
        }
        p1a(a, c);
        a.oC += a.qo + 1;
        a.F.X.set(a.oC / 65535);
        a.Ba += a.Re + 1
    },
    p1a = function (a, b) {
        var c, d = a.D.getContext();
        if (0 != b.length) if (h2(b), 5 == b[0].Oa.hc()) {
            if (a.lU) {
                w6(a, 0, a.C.height);
                var e = a.X.C,
                    d = a.D.getContext(),
                    f = [];
                q1a(a, f, e);
                for (e = 0; e < f.length; ++e) Yg(f[e], function (a, b) {
                    return Xg(b.da(), a.da())
                });
                a.qa.yg();
                var e = a.qa,
                    g = a.D.Tb();
                c = a.I.ha.get();
                var j = a.I.ea.get(),
                    m = a.Ba;
                e.I = j;
                j = e.getContext();
                j.enable(2929);
                j.enable(2884);
                j.state.wo(1029);
                j.enable(2960);
                j.state.er(7680, 7680, 7681);
                var n = Mz(f[0][0].bc(), -Ty(g.lf())) / 90,
                    p = E4(e);
                p.Ak = 0;
                j.enable(3042);
                p.alpha.set(c);
                p.yb.set(c);
                m = d0a(e, f[0], g, m);
                p.alpha.set(c * n);
                p.yb.set(c * n);
                for (c = 1; c < f.length; ++c) m = d0a(e, f[c], g, m);
                j.disable(2929);
                j.disable(2884);
                j.disable(2960);
                a.Ba = m;
                f = l;
                0 == a.C.De % 90 && (a.Jg.yg(), f = 10 * a.C.C, d.state.Fp(l, l, l, l), e = a.Jg, g = a.D.Tb(), c = a.ma - 1, m = e.getContext(), m.enable(2929), m.enable(2960), m.depthFunc(513), m.state.vo(519, c, e.I), m.state.er(7680, 7681, 7680), c = e.F, j = g.D, n = g.F, Z_(c), $_(c, j, n, f, 1), l0(e.F, L1 / 2, L1 / 2, 1), a2(g, e.F, e.D), s0(b2(g), e.D, e.D), e.pj(e.G, k), e.Rd(e.G, k), m.disable(2929), m.disable(2960), m.depthFunc(515), d.state.Fp(i, i, i, i), f = i);
                d.clear(256);
                a.jC = f;
                a.lU = l
            }
        } else if (4 == b[0].Oa.hc() && a.jC && (d.clear(1024), a.Ba = 0, a.Re = 0, a.jC = l), d = a.D.getContext(), h2(b), b.length && !(b[0].Oa && 5 == b[0].Oa.hc())) {
            d.disable(2929);
            a.ea && (d.enable(2960), d.state.er(7680, 7681, 7681));
            for (f = A6.length = 0; f < b.length; ++f) A6.push(f);
            A6.sort(function (a, c) {
                a = b[a].data;
                c = b[c].data;
                return a.da() - c.da() || a.ah() - c.ah() || a.$g() - c.$g()
            });
            m = a.Ba;
            for (f = 0; f < A6.length; ++f) e = b[A6[f]], e.C.K = m, f < A6.length - 1 && (g = e.data, e = b[A6[f + 1]].data, (e.da() != g.da() || e.$g() != g.$g() || e.ah() != g.ah()) && m++);
            a.ea && (a.Td.yg(), m > a.Re && (a.Re = m), a.F.ea.set(0));
            for (f = 0; f < b.length; f++) if (e = b[f], c = e.Oa, g = e.data, m = e.C.C, a.ea) {
                d.state.Fp(l, l, l, l);
                d.state.vo(516, e.C.K, 255);
                a.K.Hc = g;
                a.K.Oa = c;
                for (g = 0; r1a(a, e, g); ++g) a.Td.Rd(m, a.K);
                d.state.Fp(i, i, i, i)
            }
            a.ea && (a.F.ea.set(1), d.state.er(7680, 7680, 7680));
            s1a(a, b, l);
            f = a.D.getContext();
            h2(b);
            for (e = 0; e < b.length; e++) {
                c = b[e];
                g = c.data;
                if (0 > c.C.I) {
                    j = 0;
                    m = g.Ik();
                    for (p = 0; p < m; ++p) n = g.Ir(p), n > j && (j = n), n = g.Rv(p), n > j && (j = n);
                    p = g.Jk();
                    for (m = 0; m < p; ++m) n = g.Jr(m), n > j && (j = n);
                    c.C.I = j
                }
                c.C.I > a.qo && (a.qo = c.C.I)
            }
            f.enable(2929);
            a.F.vh.set(a.C.G, a.C.I);
            a.F.Ta.set(0);
            B6(a, a.xa, b);
            f.depthFunc(513);
            B6(a, a.ba, b);
            a.ma < b.length ? B6(a, a.U, b.slice(0, a.ma)) : B6(a, a.U, b);
            if (a.N.Vh) a.F.Ta.set(1), B6(a, a.xa, b);
            else {
                c = [];
                for (e = 0; e < b.length; ++e) {
                    g = b[e].data;
                    for (m = 0; m < g.Jk(); ++m) if (j = g.Qf(g.Kk(m)), (j = K3(a.D.C, j)) && 0 < j.D.length && 0 < (j.D[0].C >> 24 & 255) % 255) {
                        c.push(b[e]);
                        break
                    }
                }
                0 < c.length && (a.F.Ta.set(1), B6(a, a.xa, c))
            }
            f.depthFunc(515);
            for (e = 0; e < a.oj.length; e++) B6(a, a.oj[e], b);
            f.depthFunc(515);
            f.disable(2929);
            d.disable(2960)
        }
    },
    n1a = function (a, b) {
        for (var c = [], d = 0; d < b.length; ++d) {
            var e = b[d];
            if (e.D) {
                var f = a;
                i2(e);
                w6(f, f.C.height - e.D.bottom, e.D.bottom - e.D.uP);
                for (var g = [], j = 0; j < e.children.length; ++j) {
                    var m = i3(e.children[j]);
                    m && g.push(m)
                }
                s1a(f, g, i);
                w6(f, 0, f.C.height)
            } else 0 < e.children.length && n1a(a, e.children), e.C && e.C.D && (f = i3(e)) && c.push(f)
        }
        0 != c.length && s1a(a, c, i)
    },
    k1a = function (a, b) {
        for (var c = [], d = 0; d < b.length; ++d) {
            var e = b[d];
            if (e.D) {
                var f = a;
                i2(e);
                w6(f, f.C.height - e.D.bottom, e.D.bottom);
                for (var g = [], j = 0; j < e.children.length; ++j) {
                    var m = i3(e.children[j]);
                    m && g.push(m)
                }
                C6(f, g, f.Ta, f.Ka, f.yb, f.fb);
                w6(f, 0, f.C.height)
            } else 0 < e.children.length && k1a(a, e.children), e.C && e.C.D && (f = i3(e)) && c.push(f)
        }
        0 != c.length && C6(a, c, a.Ta, a.Ka, a.yb, a.fb)
    },
    l1a = function (a, b) {
        for (var c = [], d = 0; d < b.length; ++d) {
            var e = b[d];
            if (e.D) {
                var f = a;
                i2(e);
                w6(f, f.C.height - e.D.bottom, e.D.bottom);
                for (var g = [], j = 0; j < e.children.length; ++j) {
                    var m = i3(e.children[j]);
                    m && g.push(m)
                }
                C6(f, g, f.Nf, k, f.kf, k);
                w6(f, 0, f.C.height)
            } else 0 < e.children.length && l1a(a, e.children), e.C && e.C.D && (f = i3(e)) && c.push(f)
        }
        0 != c.length && C6(a, c, a.Nf, k, a.kf, k)
    },
    t1a = function (a, b) {
        var c = b.data,
            d = c.bq();
        if (0 == d) return i;
        var e = b.C.P,
            f = b.C.N;
        a.K.Hc = c;
        a.K.Oa = b.Oa;
        for (c = 0; c < d; ++c) if (a.K.SH = c, a.K.image = f[c], !f[c] || !e[c] || !a.ha.Ot(e[c], a.K)) return l;
        return i
    },
    D6 = function (a, b, c) {
        var d = b.data;
        if (a.Q) {
            var e = 1;
            d.wv() ? e = 2 : d instanceof v6 && (e = 3);
            var f = d.da(),
                g = d.ah() % 32;
            a.F.M.C([(d.$g() % 32 << 3 | g >> 2) / 255, ((g & 3) << 6 | f << 1 | (e & 2) >> 1) / 255, (0 | (e & 1) << 7) / 255])
        }
        return r1a(a, b, c)
    },
    o1a = function (a, b) {
        return Xg(a.D ? a.D.bottom : 0, b.D ? b.D.bottom : 0)
    },
    g1a = function (a, b) {
        var c = b.data,
            d = b.C.ea;
        if (!d) {
            for (var e = {}, d = [], f = c.Cm(), g = 0; g < f; ++g) {
                var j = c.Qf(g);
                j != k && !e[j] && (e[j] = i, d.push(j))
            }
            f = c.Bl();
            for (g = 0; g < f; ++g) for (var m = c.yo(g), n = c.kr(m), p = 0; p < n; ++p) for (var q = c.Hp(m, p), s = c.jr(q), t = 0; t < s; ++t) j = c.ty(q, t), j != k && !e[j] && (e[j] = i, d.push(j));
            b.C.ea = d
        }
        c = a.D.F;
        e = l;
        g = d.length;
        for (j = 0; j < g; ++j) f = d[j], c.K[f] = i, c.G[f] || (e = i);
        e && (c.C.D = l)
    },
    s1a = function (a, b, c) {
        var d = a.D.getContext();
        h2(b);
        d.disable(2884);
        d.disable(2929);
        a.F.ea.set(0);
        a.ha.yg();
        for (var e = 0; e < b.length; ++e) {
            var f = b[e],
                g = f.Oa;
            if (g && !(0 != g.type || 5 == g.hc())) {
                var j = 6 == g.hc();
                a.Ae = a.Ae || j;
                if (j == c) {
                    var m = f.data,
                        n = m.bq();
                    if (0 != n) {
                        a.ea && !j && d.state.vo(514, f.C.K, 255);
                        a.K.Hc = m;
                        a.K.Oa = g;
                        a.K.az = a.C;
                        for (var g = f.C.P, j = f.C.N, p = m.$g(), q = m.ah(), m = m.da(), s = 0; D6(a, f, s); ++s) {
                            a.K.transform = JZa(a.ly, p, q, m, s);
                            for (var t = 0; t < n; ++t) g[t] && a.ha.Ot(g[t]) && (a.K.SH = t, a.K.image = j[t], a.ha.Rd(g[t], a.K))
                        }
                    }
                }
            }
        }
        a.F.ea.set(1)
    },
    q1a = function (a, b, c) {
        for (var d = [], e = 0; e < c.length; ++e) {
            var f = c[e];
            0 < f.children.length && (f.D ? c = c.concat(f.children) : q1a(a, b, f.children));
            f.Oa && (f.data && 0 == f.Oa.type && 5 == f.Oa.hc()) && d.push(u1a(f))
        }
        0 < d.length && b.push(d)
    },
    A6 = [],
    B6 = function (a, b, c) {
        h2(c);
        b.yg();
        for (var d = 0; d < c.length; d++) {
            var e = c[d];
            a.ea && a.D.getContext().state.vo(514, e.C.K, 255);
            v1a(a, b, e);
            var f = e.Ui && i3(e.Ui);
            f && v1a(a, b, f, e.C.G)
        }
    },
    v1a = function (a, b, c, d) {
        var e = c.Oa,
            f = c.C.C;
        a.K.Hc = c.data;
        a.K.Oa = e;
        a.K.Ih = d || c.C.Ih;
        for (d = 0; D6(a, c, d); d++) b.Rd(f, a.K)
    },
    r1a = function (a, b, c) {
        b = b.data;
        c = JZa(a.ly, b.$g(), b.ah(), b.da(), c);
        if (!c) return l;
        a.F.transform.C(c);
        return i
    },
    C6 = function (a, b, c, d, e, f) {
        a.D.getContext();
        h2(b);
        0 != b.length && b[0].C.D && (c.yg(), E6(a, b, c), d && (d.yg(), E6(a, b, d)), e.yg(), E6(a, b, e), f && (f.yg(), E6(a, b, f)))
    };

u6.prototype.a5 = function (a, b) {
    var c = u4(this.G, a.C.C);
    this.M = this.Va.pj(c, b);
    return 2 == this.M
};

var m1a = function (a, b, c) {
    a.Va.yg();
    b && (a.F.Wb.set(1), U0a(a.G, a.kU));
    c && (a.F.Wb.set(2), U0a(a.G, a.kU));
    a.D.getContext().state.zo(770, 771, 1, 771)
};

v = u6.prototype;
v.b5 = function (a, b) {
    for (var c = u4(this.G, a.C.C), d = 0; D6(this, a, d); ++d) this.Va.Rd(c, b);
    return i
};

v.g5 = function (a, b) {
    var c = u4(this.G, a.C.C);
    this.M = this.Rb.pj(c, b);
    return 2 == this.M
};

v.i5 = function (a, b) {
    var c = u4(this.G, a.C.C);
    this.M = this.Ja.pj(c, b);
    return 2 == this.M
};

v.d5 = function (a, b) {
    b.zoom = this.C.zoom;
    for (var c = u4(this.G, a.C.C), d = 0; D6(this, a, d); ++d) this.Rb.Rd(c, b);
    return i
};

v.e5 = function (a, b) {
    b.zoom = this.C.zoom;
    b.az = this.C;
    for (var c = u4(this.G, a.C.C), d = a.data, e = 0; D6(this, a, e); ++e) b.transform = JZa(this.ly, d.$g(), d.ah(), d.da(), e), this.Ja.Rd(c, b);
    return i
};

v.B5 = function (a, b) {
    this.M = this.ee.pj(a.C.C, b);
    return 2 == this.M
};

v.A5 = function (a, b) {
    for (var c = a.C.C, d = 0; D6(this, a, d); ++d) this.ee.Rd(c, b);
    return i
};

v.f5 = function (a, b) {
    this.M = this.Bb.pj(a.C.C, b);
    return 2 == this.M
};

v.c5 = function (a, b) {
    for (var c = a.C.C, d = 0; D6(this, a, d); ++d) this.Bb.Rd(c, b);
    return i
};

var E6 = function (a, b, c) {
    h2(b);
    for (var d = 0; d < b.length; ++d) {
        var e = b[d],
            f = e.Oa,
            g = e.C.C;
        a.K.Hc = e.data;
        a.K.Oa = f;
        a.K.Ih = e.C.Ih;
        for (f = 0; D6(a, e, f); ++f) c.Rd(g, a.K)
    }
};

u6.prototype.Y5 = function (a) {
    a = a.get();
    BYa(this.D.C, a && this.I.Q.get());
    !a && $3 && (this.GM = $3, $3 = 0);
    a && this.GM && ($3 = this.GM)
};

u6.prototype.Z5 = function (a) {
    a = a.get();
    BYa(this.D.C, a && this.I.M.get())
};

var u1a = function (a) {
    if (!a.C) return k;
    var b = a.C.V;
    !b && (a.data && a.data instanceof g3) && (b = new g0a(a.data), a.C.V = b);
    return b
},
    x6 = function (a, b) {
        if (!b.Oa || !b.data) return i;
        if (b.Ui && !x6(a, b.Ui)) return l;
        var c = b.Oa;
        if (0 != c.type) return l;
        var d = c.hc();
        if (5 == d) return c = u1a(b), !! c && a.qa.Ot(c.I, c);
        if (c = i3(b)) if (1 == d || 2 == d || 6 == d) c = t1a(a, c);
        else {
            d = (d = c.C.Ih) && d.Eh();
            c.data.wv() && (d = d && c.C.G && c.C.G.Eh());
            if (a.Xq.get() && d) if (z6(c.data)) {
                var e = t4(a.G, c);
                if (e) {
                    d = i;
                    if (e.ir.length) var f = c.C.qt,
                        d = d && f && f.Eh();
                    e.jt.length && (e = c.C.iv, d = d && e && e.Eh());
                    d = !! d
                } else d = l
            } else d = i;
            e = c.C.C;
            a.K.Hc = c.data;
            a.K.Oa = c.Oa;
            for (f = 0; d && f < a.vh.length; ++f) d = d && a.vh[f].Ot(e, a.K);
            for (f = 0; d && f < a.oj.length; ++f) d = d && a.oj[f].Ot(e, a.K);
            d = d && t1a(a, c);
            c = !! d
        } else c = i;
        return c
    },
    y6 = function (a, b, c) {
        if (b.Oa && b.data) {
            b.Ui && !x6(a, b.Ui) && y6(a, b.Ui, c);
            var d = b.Oa;
            if (0 == d.type) {
                var e = c ? 0 : 2,
                    f = b.data.jN();
                if (5 == d.hc()) f = u1a(b), c = c ? a.gU : a.dC, c.H.push(f), W0(a.mn, c, e);
                else if (e = i3(b)) {
                    c = c ? a.EM : a.Si;
                    if (f) {
                        a = c;
                        f = a.F;
                        b = a.I;
                        d = a.G;
                        a.I = 0;
                        a.G = {};

                        a.C.push(e);
                        a.F = a.C.length - 1;
                        for (var g = 0; g < a.$e.length; ++g) a.$e[g].apply(a);
                        a.C.pop();
                        a.F = f;
                        a.I = b;
                        a.G = d
                    }
                    Z0a(c, e)
                }
            }
        }
    },
    a1a = function (a) {
        var b = a.D.getContext();
        a.VB = new W_a(b);
        var c = a.VB,
            d = a.N,
            e = a.F,
            f = function (a, f) {
                a.init(b, f, e, 35040, d, c)
            },
            g = function (a, f) {
                a.init(b, f, e, 35044, d, c)
            };

        g(a.xa, O_a);
        g(a.Td, K5);
        g(a.Ta, z5);
        g(a.Nf, x5);
        g(a.Ka, z5);
        g(a.yb, z5);
        g(a.kf, x5);
        g(a.fb, z5);
        g(a.Bb, j0a);
        g(a.ba.D[0], v0a);
        f(a.ba.D[1], J0a);
        f(a.ba.D[2], H0a);
        g(a.ee, L0a);
        g(a.U.D[0], U_a);
        f(a.U.D[1], I0a);
        f(a.U.D[2], C0a);
        g(a.Rb, t0a);
        g(a.Ja, u0a);
        g(a.ha, E5);
        f(a.Va, X_a);
        g(a.qa, h0a);
        g(a.Jg, K5);
        g(a.Pc, z0a);
        g(a.Wb, E5)
    },
    w6 = function (a, b, c) {
        b *= a.C.L;
        c *= a.C.L;
        a.D.getContext().RM(0, b, a.C.D, c)
    };

u6.prototype.Z4 = function (a) {
    if (0 == $3) return l;
    a = i3(a);
    if (!a || 4 == a.Oa.hc()) a = l;
    else a: {
        if (a = t4(this.G, a)) for (var a = a.tn, b = a.length, c = 0; c < b; ++c) if (0 < a[c].C) {
            a = i;
            break a
        }
        a = l
    }
    return a
};

var i1a = function (a, b) {
    return a || 1 != b.type && 3 != b.type && 0 != b.type
},
    h1a = function (a, b, c) {
        switch (c.type) {
        case 0:
        case 1:
        case 3:
            return b;
        case 6:
        case 7:
            for (var c = c.labels, d = 0; d < c.length; ++d) if (!h1a(a, b, c[d])) return l;
            return i;
        case 2:
        case 4:
        case 5:
            return a(c.Wd.screenX, c.Wd.screenY)
        }
        return l
    },
    d1a = function (a, b) {
        for (var c = 0; c < a.length; ++c) {
            var d = a[c];
            if (d.Oa && d.data && d.Oa.Bc() == b || 0 < d.children.length && d1a(d.children, b)) return i
        }
        return l
    };

u6.prototype.LU = function (a) {
    d1a(this.X.C, a) && this.Ws()
};

var w1a = ea();
B(w1a, bYa);
c3(1, new(ea()));
var x1a = function () {
    this.C = {}
},
    y1a = function (a, b, c) {
        c = Math.floor(c);
        a.C[c] || (a.C[c] = new pl);
        var d = a.C[c];
        d.D[d.F++] = b;
        if (!y(a.F) || c < a.F) a.F = c;
        if (!y(a.D) || c > a.D) a.D = c
    };

x1a.prototype.remove = function (a) {
    if (y(this.D)) for (var b = this.D; b >= this.F && (!this.C[b] || !this.C[b].remove(a)); b--);
};

var F6 = function (a) {
    this.I = {};

    this.D = 0;
    this.C = {};

    this.P = a || 24;
    this.G = 0;
    this.M = new x1a;
    this.L = 0;
    this.K = {};

    this.F = -1
},
    z1a = function (a, b) {
        this.request = a;
        this.active = this.C = l;
        this.priority = b;
        this.D = 0
    },
    C1a = function (a, b, c) {
        var d = ua(b),
            e = a.I[d];
        if (!(e && e.priority == c)) {
            if (e) if (b = e, b.C) {
                for (var d = a.M, e = Math.floor(c), f = d.D; f >= d.F; f--) if (d.C[f] && d.C[f].remove(b)) {
                    y1a(d, b, e);
                    break
                }
                b.priority = c
            } else {
                if (b.active) {
                    d = c > b.priority;
                    e = 0 == a.G;
                    b: {
                        f = a.M;
                        if (y(f.D)) for (var g = f.D; g >= f.F; g--) if (f.C[g] && !f.C[g].dc()) {
                            f = g;
                            break b
                        }
                        f = -1
                    }
                    d || e || f <= c ? (G6(a, b), A1a(a, b, c)) : a.remove(b.request) && H6(a, b, c)
                }
            } else e = new z1a(b, c), a.I[d] = e, H6(a, e, c);
            if (a.D == a.P) {
                b = l;
                for (d = 0; d < c; d++) {
                    if (a.C[d] && 0 < a.C[d].length) {
                        e = a.C[d];
                        for (f = e.length - 1; g = e[f]; f--) if (g.request.cancel()) {
                            b = i;
                            a.I[ua(g.request)] && G6(a, g);
                            H6(a, g, d);
                            break
                        }
                    }
                    if (b) break
                }
            }
            B1a(a)
        }
    },
    B1a = function (a) {
        for (; a.D < a.P;) {
            var b;
            a: {
                for (b = a;;) {
                    var c;
                    c = b.M;
                    var d = h;
                    b: {
                        if (y(c.D)) for (d = c.D; d >= c.F; d--) if (c.C[d] && !c.C[d].dc()) {
                            d = c.C[d];
                            break b
                        }
                        d = k
                    }
                    c = d ? ql(d) : h;
                    if (!c) {
                        b = k;
                        break a
                    }
                    if (c && c.C) {
                        c.C = l;
                        b.G += -1;
                        b = c;
                        break a
                    }
                }
                b = h
            }
            if (!b) break;
            A1a(a, b, b.priority);
            b.request.start(A(a.Q, a, b))
        }
        b = 0;
        for (b = 2; 0 <= b && !(a.C[b] && 0 < a.C[b].length); b--);
        for (c = 0; 2 >= c; c++) if (c < b && (d = a.K[c]) && 0 < d.length) for (; 0 < d.length;) {
            var e = d.pop(),
                f = a;
            e.x7 = l;
            f.L += -1;
            e.request.cancel();
            H6(a, e, c)
        }
    },
    H6 = function (a, b, c) {
        b.priority = c;
        b.C = i;
        a.G += 1;
        y1a(a.M, b, c)
    },
    G6 = function (a, b) {
        a.C[b.priority] && pA(a.C[b.priority], b);
        b.active = l;
        a.D += -1;
        0 == a.D && -1 != a.F && (mB(a.F), a.F = -1)
    },
    A1a = function (a, b, c) {
        a.C[c] ? a.C[c].push(b) : a.C[c] = [b];
        b.D = za();
        b.active = i;
        a.D += 1;
        b.priority = c; - 1 == a.F && (a.F = lB(A(a.N, a), 1E4))
    };

F6.prototype.N = function () {
    if (0 < this.D && -1 != this.F) {
        for (var a = za(), b = [], c = 0; 2 >= c; c++) {
            var d = this.C[c];
            if (d) for (var e = 0; e < d.length; ++e) {
                var f = d[e];
                1E4 < a - f.D && b.push(f)
            }
        }
        for (a = 0; a < b.length; ++a) c = b[a], G6(this, c), this.K[c.priority] ? this.K[c.priority].push(c) : this.K[c.priority] = [c], c.x7 = i, this.L += 1, B1a(this);
        this.F = 0 < this.D ? lB(A(this.N, this), 1E4) : -1
    }
};

F6.prototype.Q = function (a) {
    a && (a.active && G6(this, a), delete this.I[ua(a.request)]);
    B1a(this)
};

F6.prototype.remove = function (a, b) {
    var c = ua(a),
        d = this.I[c],
        e = l;
    if (d && d.active) {
        if (a.cancel() || b) this.Q(d), e = i
    } else d && d.C && (d.C = l, this.G += -1, e = i);
    e && delete this.I[c];
    return e
};

var I6 = function () {
    this.I = {};

    this.initialized = new L0(h, l);
    this.F = new N0(h, 0);
    D1a || (D1a = new F6);
    this.mn = D1a
},
    D1a = k;
I6.prototype.G = k;
I6.prototype.aN = fa("G");
var J6 = function (a, b) {
    var c = a.search(/[&=?]/),
        d = 0 <= c && c < a.length - 1 ? "&" : "";
    bh(b, function (b, c) {
        b != k && "" !== b && (a += d + c + "=" + b, d = "&")
    });
    return a
};

I6.prototype.Q = function (a, b) {
    var c;
    c = za();
    if (this.I[a]) {
        var d = this.I[a][1]++,
            d = 1E3 * Math.pow(2, d - 1),
            d = d - (c - this.I[a][0]);
        0 > d && (d = 0);
        this.I[a][0] = c + d;
        c = d
    } else this.I[a] = [c, 1], c = 0;
    0 < c ? setTimeout(b, c) : b()
};

var K6 = function (a, b, c) {
    b = b.C.Me().Bc();
    c = A(a.Q, a, b, A(a.P, a, c));
    a.G ? (b = a.G, b.D[b.F++] = c, 1 == a.G.Ef() && c()) : c()
};

I6.prototype.P = function (a) {
    this.F.set(this.F.get() + 1);
    a()
};

I6.prototype.vu = function (a, b) {
    b && delete this.I[a.C.Me().Bc()];
    this.G && (ql(this.G), this.G.dc() || (this.G.C == this.G.F ? h : this.G.D[this.G.C])());
    this.F.set(this.F.get() - 1);
    a.eh.set(i)
};

var X4 = function (a) {
    I6.call(this);
    this.C = a;
    for (var b = 0, c = 0; c < this.C.length; ++c) J0(a[c].initialized, i, A(function () {
        b++;
        b == a.length && this.initialized.set(i)
    }, this));
    this.D = [];
    for (c = 0; c < this.C.length; ++c) this.D[c] = new N0(A(this.EX, this), 0), this.D[c].Zb(this.C[c].F)
};

B(X4, I6);
v = X4.prototype;
v.EX = function () {
    for (var a = 0, b = 0; b < this.D.length; ++b) a += this.D[b].get();
    this.F.set(a)
};

v.mh = function (a) {
    for (var b = 0; b < this.C.length; ++b) if (this.C[b].mh(a)) return i;
    return l
};

v.Is = function (a, b, c) {
    for (var d = 0; d < this.C.length; ++d) {
        var e = this.C[d].Is(a, b, c);
        if (e !== k) return e
    }
    return k
};

v.$m = function (a) {
    for (var b = 0; b < this.C.length; ++b) {
        var c = this.C[b].$m(a);
        if (c !== k) return c
    }
    return k
};

v.EE = function (a, b, c, d) {
    for (var e = 0; e < this.C.length; ++e) {
        var f = this.C[e].EE(a, b, c, d);
        if (f !== k) return f
    }
    return k
};

v.aN = function (a) {
    for (var b = 0; b < this.C.length; ++b) this.C[b].aN(a)
};

var E1a = function (a, b, c) {
    this.image = a || k;
    this.Oa = b || k;
    this.id = c || k
};

var L6 = function (a, b) {
    this.type = b;
    this.D = a
};

B(L6, P1);
L6.prototype.Za = r("D");
L6.prototype.equals = function (a) {
    return L6.ia.equals.call(this, a) && this.D == a.Za()
};

L6.prototype.Bc = function () {
    return this.type + ":" + this.D
};

L6.prototype.Me = function () {
    return this
};

var M6 = function (a, b, c) {
    this.type = a;
    this.C = b;
    this.data = y(c) ? c : k;
    this.eh = new L0(h, l);
    this.Je = new L0(h, l)
};

var F1a = function () {
    if (this && this.jp) {
        var a = this.jp;
        a && "SCRIPT" == a.tagName && N6(a, i, this.Bj)
    }
},
    N6 = function (a, b, c) {
        c != k && ja.clearTimeout(c);
        a.onload = z;
        a.onerror = z;
        a.onreadystatechange = z;
        b && window.setTimeout(function () {
            Rt(a)
        }, 0)
    },
    G1a = function (a, b) {
        var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        Y_.call(this, c);
        this.code = a
    };

B(G1a, Y_);
var O6 = function (a, b) {
    this.D = new fD(a);
    this.C = b ? b : "callback";
    this.Bj = 5E3
},
    H1a = 0;
O6.prototype.send = function (a, b, c, d) {
    var e = a || k,
        f = d || "_" + (H1a++).toString(36) + za().toString(36);
    ja._callbacks_ || (ja._callbacks_ = {});
    a = this.D.clone();
    if (e) for (var g in e) if (!e.hasOwnProperty || e.hasOwnProperty(g)) {
        var d = a,
            j = g,
            m = e[g];
        na(m) || (m = [String(m)]);
        kD(d.C, j, m)
    }
    b && (ja._callbacks_[f] = function (a) {
        I1a(f, i);
        b.apply(h, arguments)
    }, g = this.C, d = "_callbacks_." + f, na(d) || (d = [String(d)]), kD(a.C, g, d));
    var n = a.toString(),
        p = {
            timeout: this.Bj,
            oba: i
        },
        a = p.document || document,
        q = uq("SCRIPT");
    g = {
        jp: q,
        Bj: h
    };

    var s = new D0(F1a, g),
        t = k,
        d = p.timeout != k ? p.timeout : 5E3;
    0 < d && (t = window.setTimeout(function () {
        N6(q, i);
        var a = new G1a(1, "Timeout reached for loading script " + n);
        E0(s);
        F0(s, l, a)
    }, d), g.Bj = t);
    q.onload = q.onreadystatechange = function () {
        if (!q.readyState || "loaded" == q.readyState || "complete" == q.readyState) N6(q, p.oba || l, t), s.callback(k)
    };

    q.onerror = function () {
        N6(q, i, t);
        var a = new G1a(0, "Error while loading script " + n);
        E0(s);
        F0(s, l, a)
    };

    Jla(q, {
        type: "text/javascript",
        charset: "UTF-8",
        src: n
    });
    g = a.getElementsByTagName("HEAD");
    (!g || 0 == g.length ? a.documentElement : g[0]).appendChild(q);
    AVa(s, k, function () {
        I1a(f, l);
        c && c(e)
    }, h);
    return {
        Ua: f,
        FY: s
    }
};

O6.prototype.cancel = function (a) {
    a && (a.FY && a.FY.cancel(), a.Ua && I1a(a.Ua, l))
};

var I1a = function (a, b) {
    ja._callbacks_[a] && (b ? delete ja._callbacks_[a] : ja._callbacks_[a] = z)
};

var P6 = function (a, b, c, d, e) {
    this.reset(a, b, c, d, e)
};

P6.prototype.F = 0;
P6.prototype.D = k;
P6.prototype.C = k;
var J1a = 0;
P6.prototype.reset = function (a, b, c, d, e) {
    this.F = "number" == typeof e ? e : J1a++;
    d || za();
    this.G = b;
    delete this.D;
    delete this.C
};

P6.prototype.JF = r("F");
var Q6 = fa("pg");
Q6.prototype.C = k;
Q6.prototype.F = k;
Q6.prototype.D = k;
Q6.prototype.Qm = k;
var R6 = function (a, b) {
    this.name = a;
    this.value = b
};

R6.prototype.toString = r("name");
var K1a = new R6("SEVERE", 1E3),
    L1a = new R6("WARNING", 900),
    M1a = new R6("CONFIG", 700),
    N1a = new R6("FINE", 500),
    O1a = new R6("FINER", 400),
    P1a = new R6("FINEST", 300);
Q6.prototype.getName = r("pg");
var Q1a = function (a) {
    return a.F ? a.F : a.C ? Q1a(a.C) : k
};

Q6.prototype.log = function (a, b, c) {
    if (a.value >= Q1a(this).value) {
        a = this.G(a, b, c);
        b = "log:" + a.G;
        ja.console && (ja.console.timeStamp ? ja.console.timeStamp(b) : ja.console.markTimeline && ja.console.markTimeline(b));
        ja.msWriteProfilerMark && ja.msWriteProfilerMark(b);
        for (b = this; b;) {
            var c = b,
                d = a;
            if (c.Qm) for (var e = 0, f = h; f = c.Qm[e]; e++) f(d);
            b = b.C
        }
    }
};

Q6.prototype.G = function (a, b, c) {
    var d = new P6(a, String(b), this.pg);
    if (c) {
        d.D = c;
        var e;
        var f = arguments.callee.caller;
        try {
            var g;
            var j = Poa("window.location.href");
            if (qa(c)) g = {
                message: c,
                name: "Unknown error",
                lineNumber: "Not available",
                fileName: j,
                stack: "Not available"
            };

            else {
                var m, n, p = l;
                try {
                    m = c.lineNumber || c.line || "Not available"
                } catch (q) {
                    m = "Not available", p = i
                }
                try {
                    n = c.fileName || c.filename || c.sourceURL || j
                } catch (s) {
                    n = "Not available", p = i
                }
                g = p || !c.lineNumber || !c.fileName || !c.stack ? {
                    message: c.message,
                    name: c.name,
                    lineNumber: m,
                    fileName: n,
                    stack: c.stack || "Not available"
                } : c
            }
            e = "Message: " + Gg(g.message) + '\\nUrl: <a href="view-source:' + g.fileName + '" target="_new">' + g.fileName + "</a>\\nLine: " + g.lineNumber + "\\n\\nBrowser stack:\\n" + Gg(g.stack + "-> ") + "[end]\\n\\nJS stack traversal:\\n" + Gg(kVa(f) + "-> ")
        } catch (t) {
            e = "Exception trying to expose exception! You win, we lose. " + t
        }
        d.C = e
    }
    return d
};

Q6.prototype.md = function (a, b) {
    this.log(M1a, a, b)
};

var S6 = function (a, b) {
    a.log(N1a, b, h)
},
    R1a = {},
    T6 = k,
    U6 = function (a) {
        T6 || (T6 = new Q6(""), R1a[""] = T6, T6.F = M1a);
        var b;
        if (!(b = R1a[a])) {
            b = new Q6(a);
            var c = a.lastIndexOf("."),
                d = a.substr(c + 1),
                c = U6(a.substr(0, c));
            c.D || (c.D = {});
            c.D[d] = b;
            b.C = c;
            R1a[a] = b
        }
        return b
    };

var V6 = ea();
V6.prototype.D = k;
V6.prototype.C = function () {
    var a;
    if (!(a = this.D)) a = {}, S1a(this) && (a[0] = i, a[1] = i), a = this.D = a;
    return a
};

var W6 = function (a, b) {
    this.G = a;
    this.F = b
};

B(W6, V6);
W6.prototype.createInstance = function () {
    return this.G()
};

W6.prototype.C = function () {
    return this.F()
};

var X6 = function () {
    return X6.C.createInstance()
};

X6.F = l;
X6.G = function () {
    return X6.C.C()
};

X6.I = function (a, b) {
    X6.D(new W6(a, b))
};

X6.D = function (a) {
    X6.C = a
};

var T1a = ea();
B(T1a, V6);
T1a.prototype.createInstance = function () {
    var a = S1a(this);
    return a ? new ActiveXObject(a) : new XMLHttpRequest
};

var S1a = function (a) {
    if (X6.F) return "";
    if (!a.F && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
            var d = b[c];
            try {
                return new ActiveXObject(d), a.F = d
            } catch (e) {}
        }
        ca(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
    }
    return a.F
};

X6.D(new T1a);
var Y6 = function (a) {
    this.G = new Ey;
    this.D = a || k
};

B(Y6, iB);
Y6.prototype.C = U6("goog.net.XhrIo");
var U1a = /^https?$/i;
v = Y6.prototype;
v.eu = l;
v.Sd = k;
v.GI = k;
v.KO = "";
v.OW = "";
v.gE = "";
v.LO = l;
v.fI = l;
v.sO = l;
v.Bx = l;
v.OD = 0;
v.Gw = k;
v.TD = "";
v.V8 = l;
v.send = function (a, b, c, d) {
    this.Sd && ca(Error("[goog.net.XhrIo] Object is active with another request"));
    b = b ? b.toUpperCase() : "GET";
    this.KO = a;
    this.gE = "";
    this.OW = b;
    this.LO = l;
    this.eu = i;
    this.Sd = this.D ? this.D.createInstance() : X6();
    this.GI = this.D ? this.D.C() : X6.G();
    this.Sd.onreadystatechange = A(this.F, this);
    try {
        S6(this.C, Z6(this, "Opening Xhr")), this.sO = i, this.Sd.open(b, a, i), this.sO = l
    } catch (e) {
        S6(this.C, Z6(this, "Error opening Xhr: " + e.message));
        V1a(this, e);
        return
    }
    var a = c || "",
        f = this.G.clone();
    d && nz(d, function (a, b) {
        f.set(b, a)
    });
    d = ja.FormData && a instanceof ja.FormData;
    "POST" == b && (!ry(f.J, "Content-Type") && !d) && f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    nz(f, function (a, b) {
        this.Sd.setRequestHeader(b, a)
    }, this);
    this.TD && (this.Sd.responseType = this.TD);
    "withCredentials" in this.Sd && (this.Sd.withCredentials = this.V8);
    try {
        this.Gw && (jB.clearTimeout(this.Gw), this.Gw = k), 0 < this.OD && (S6(this.C, Z6(this, "Will abort after " + this.OD + "ms if incomplete")), this.Gw = jB.setTimeout(A(this.Bj, this), this.OD)), S6(this.C, Z6(this, "Sending request")), this.fI = i, this.Sd.send(a), this.fI = l
    } catch (g) {
        S6(this.C, Z6(this, "Send error: " + g.message)), V1a(this, g)
    }
};

v.Bj = function () {
    "undefined" != typeof ga && this.Sd && (this.gE = "Timed out after " + this.OD + "ms, aborting", S6(this.C, Z6(this, this.gE)), this.dispatchEvent("timeout"), this.abort(8))
};

var V1a = function (a, b) {
    a.eu = l;
    a.Sd && (a.Bx = i, a.Sd.abort(), a.Bx = l);
    a.gE = b;
    W1a(a);
    $6(a)
},
    W1a = function (a) {
        a.LO || (a.LO = i, a.dispatchEvent("complete"), a.dispatchEvent("error"))
    };

Y6.prototype.abort = function () {
    this.Sd && this.eu && (S6(this.C, Z6(this, "Aborting")), this.eu = l, this.Bx = i, this.Sd.abort(), this.Bx = l, this.dispatchEvent("complete"), this.dispatchEvent("abort"), $6(this))
};

Y6.prototype.zc = function () {
    this.Sd && (this.eu && (this.eu = l, this.Bx = i, this.Sd.abort(), this.Bx = l), $6(this, i));
    Y6.ia.zc.call(this)
};

Y6.prototype.F = function () {
    !this.sO && !this.fI && !this.Bx ? this.I() : X1a(this)
};

Y6.prototype.I = function () {
    X1a(this)
};

var X1a = function (a) {
    if (a.eu && "undefined" != typeof ga) if (a.GI[1] && 4 == a7(a) && 2 == a.Gf()) S6(a.C, Z6(a, "Local request error detected and ignored"));
    else if (a.fI && 4 == a7(a)) jB.setTimeout(A(a.F, a), 0);
    else if (a.dispatchEvent("readystatechange"), 4 == a7(a)) {
        S6(a.C, Z6(a, "Request complete"));
        a.eu = l;
        try {
            if (a.fK()) a.dispatchEvent("complete"), a.dispatchEvent("success");
            else {
                var b;
                try {
                    b = 2 < a7(a) ? a.Sd.statusText : ""
                } catch (c) {
                    S6(a.C, "Can not get status: " + c.message), b = ""
                }
                a.gE = b + " [" + a.Gf() + "]";
                W1a(a)
            }
        } finally {
            $6(a)
        }
    }
},
    $6 = function (a, b) {
        if (a.Sd) {
            var c = a.Sd,
                d = a.GI[0] ? z : k;
            a.Sd = k;
            a.GI = k;
            a.Gw && (jB.clearTimeout(a.Gw), a.Gw = k);
            b || a.dispatchEvent("ready");
            try {
                c.onreadystatechange = d
            } catch (e) {
                a.C.log(K1a, "Problem encountered resetting onreadystatechange: " + e.message, h)
            }
        }
    };

Y6.prototype.fK = function () {
    var a = this.Gf(),
        b;
    a: switch (a) {
    case 200:
    case 201:
    case 202:
    case 204:
    case 206:
    case 304:
    case 1223:
        b = i;
        break a;
    default:
        b = l
    }
    if (!b) {
        if (a = 0 === a) a = wr(String(this.KO))[1] || k, !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1)), a = !U1a.test(a ? a.toLowerCase() : "");
        b = a
    }
    return b
};

var a7 = function (a) {
    return a.Sd ? a.Sd.readyState : 0
};

Y6.prototype.Gf = function () {
    try {
        return 2 < a7(this) ? this.Sd.status : -1
    } catch (a) {
        return this.C.log(L1a, "Can not get status: " + a.message, h), -1
    }
};

var Y1a = function (a) {
    try {
        if (!a.Sd) return k;
        if ("response" in a.Sd) return a.Sd.response;
        switch (a.TD) {
        case "":
        case "text":
            return a.Sd.responseText;
        case "arraybuffer":
            if ("mozResponseArrayBuffer" in a.Sd) return a.Sd.mozResponseArrayBuffer
        }
        a.C.log(K1a, "Response type " + a.TD + " is not supported on this browser", h);
        return k
    } catch (b) {
        return S6(a.C, "Can not get response: " + b.message), k
    }
},
    Z6 = function (a, b) {
        return b + " [" + a.OW + " " + a.KO + " " + a.Gf() + "]"
    };

var Z1a = function (a) {
    this.start = a;
    this.cancel = $g
};

var b7 = function (a, b, c) {
    I6.call(this);
    this.C = a;
    this.IE = b;
    this.V = c || "xdc";
    this.U = lr && tr("9") && !tr("10");
    a = [];
    a[338] = 140;
    a[339] = 156;
    a[352] = 138;
    a[353] = 154;
    a[376] = 159;
    a[381] = 142;
    a[382] = 158;
    a[402] = 131;
    a[710] = 136;
    a[732] = 152;
    a[8211] = 150;
    a[8212] = 151;
    a[8216] = 145;
    a[8217] = 146;
    a[8218] = 130;
    a[8220] = 147;
    a[8221] = 148;
    a[8222] = 132;
    a[8224] = 134;
    a[8225] = 135;
    a[8226] = 149;
    a[8230] = 133;
    a[8240] = 137;
    a[8249] = 139;
    a[8250] = 155;
    a[8364] = 128;
    a[8482] = 153;
    this.K = a;
    this.initialized.set(i)
};

B(b7, I6);
b7.prototype.EE = function (a, b) {
    return a != this.C ? k : c7(this, b[0])
};

b7.prototype.mh = function (a) {
    return a.type == this.C
};

b7.prototype.$m = function (a) {
    return !this.mh(a.Me()) ? k : c7(this, a.Me().Za(), a)
};

var c7 = function (a, b, c, d) {
    c = c || new L6(b, a.C);
    d = d || new M6(a.IE, c);
    K6(a, d, A(a.X, a, b, d));
    return d
};

b7.prototype.X = function (a, b) {
    if ("xhr" == this.V) {
        var c;
        if (this.U) {
            var d;
            c = A(function (c) {
                d = new XDomainRequest;
                d.onload = A(this.Xha, this, d, b, c);
                d.open("get", a);
                d.send()
            }, this)
        } else {
            var e;
            c = A(function (c) {
                e = new Y6;
                5 == this.IE && (e.TD = "arraybuffer");
                aB(e, "complete", A(this.Yha, this, e, b, c));
                e.send(a)
            }, this)
        }
    } else {
        var f;
        c = A(function (c) {
            f = new O6(a);
            f.send({}, A(this.Ds, this, b, i, c), A(this.Ds, this, b, l, c))
        }, this)
    }
    c = new Z1a(c);
    C1a(this.mn, c, 1)
};

b7.prototype.Ds = function (a, b, c, d) {
    b && (a.data = d, a.Je.set(i));
    this.vu(a, b);
    c()
};

b7.prototype.Yha = function (a, b, c) {
    var d = a.fK(),
        e = {};

    if (d) try {
        var f;
        f = 5 == this.IE ? Y1a(a) : a.Sd ? jC(a.Sd.responseText) : h;
        e = f
    } catch (g) {}
    fB(a);
    this.Ds(b, d, c, e)
};

b7.prototype.Xha = function (a, b, c) {
    for (var a = a.responseText, d = [], e = 0; e < a.length; e++) d.push(255 < a.charCodeAt(e) && this.K[a.charCodeAt(e)] ? this.K[a.charCodeAt(e)] : a.charCodeAt(e));
    this.Ds(b, i, c, new Uint8Array(d))
};

var d7 = function () {
    I6.call(this);
    this.initialized.set(i)
};

B(d7, I6);
d7.prototype.EE = function (a, b) {
    return 1 != a ? k : $1a(this, b[0], k, b[0])
};

d7.prototype.mh = function (a) {
    return 1 == a.type
};

d7.prototype.Is = function (a) {
    return !this.mh(a) ? k : a
};

d7.prototype.$m = function (a) {
    a = a.Me();
    return !this.mh(a) ? k : $1a(this, a.Za(), a)
};

var $1a = function (a, b, c, d) {
    var e = uq("IMG"),
        f = new M6(0, c || new L6(b, 1), new E1a(e, c ? c.Me() : h, d));
    e.crossOrigin = "";
    var c = A(function (a) {
        bB(e, "load", A(this.Ds, this, e, f, i, a));
        bB(e, "error", A(this.Ds, this, e, f, l, a));
        e.src = b
    }, a),
        g = new Z1a(c);
    K6(a, f, A(function () {
        C1a(this.mn, g, 1)
    }, a));
    return f
};

d7.prototype.Ds = function (a, b, c, d) {
    c && a.complete && b.Je.set(i);
    fB(a);
    this.vu(b, c);
    d()
};

var V4 = function (a, b, c) {
    I6.call(this);
    this.D = new b7(3, 4, b);
    this.K = new d7;
    this.L = a;
    this.C = "undefined" != typeof document && "https:" == document.location.protocol ? a2a : b2a;
    c && pa(c) && (this.C = c);
    this.initialized.set(i)
};

B(V4, I6);
var b2a = ["//cbk0.google.com/cbk", "//cbk1.google.com/cbk", "//cbk2.google.com/cbk", "//cbk3.google.com/cbk"],
    a2a = ["//cbks0.google.com/cbk", "//cbks1.google.com/cbk", "//cbks2.google.com/cbk", "//cbks3.google.com/cbk"];
V4.prototype.mh = function (a) {
    return 3 == a.type || 4 == a.type
};

V4.prototype.Is = function (a) {
    return !this.mh(a) ? k : a
};

V4.prototype.$m = function (a) {
    a = a.Me();
    if (!this.mh(a)) return k;
    if (3 == a.type) {
        var b = new M6(4, a, k),
            c = this.C[0 % this.C.length] + "?",
            d = {
                output: "json"
            },
            e = this.L.get();
        d.hl = e.C;
        d.cb_client = "maps_gl";
        d.dmz = "1";
        d.pmz = "1";
        d.panoid = a.getPanoId();
        d.ph = "1";
        var c = J6(c, d),
            f = this.D.$m(new L6(c, 3));
        K6(this, f, z);
        J0(f.eh, i, A(function () {
            f.Je.get() == i ? (b.data = f.data, b.Je.set(i), this.vu(b, i)) : b.eh.get() || this.vu(b, l)
        }, this));
        return b
    }
    if (4 == a.type) {
        c = a.Ic() + a.Nc() + 1;
        c = this.C[c % this.C.length] + "?";
        d = {
            output: "tile",
            cb_client: "maps_gl"
        };

        d.panoid = a.getPanoId();
        d.x = a.Ic();
        d.y = a.Nc();
        d.zoom = a.da();
        var c = J6(c, d),
            g = this.K.$m(new L6(c, 1)),
            j = new M6(0, a, new E1a(g.data.image, a));
        K6(this, j, z);
        J0(g.eh, i, A(function () {
            j.Je.set(g.Je.get());
            this.vu(j, g.Je.get())
        }, this));
        return j
    }
    return k
};

var c2a = function (a) {
    this.Wk = this.image = k;
    this.Oa = a || k
};

var e7 = function (a, b, c) {
    I6.call(this);
    this.IE = a;
    this.L = b;
    this.D = c;
    this.initialized.set(i)
};

B(e7, I6);
e7.prototype.$m = function (a) {
    if (!this.mh(a.Me())) return k;
    a = new M6(this.IE, a, new c2a(a.Me()));
    K6(this, a, A(this.K, this, a));
    return a
};

e7.prototype.K = function (a) {
    var b = this.tY(a.C),
        b = this.L.$m(b);
    J0(b.eh, i, A(this.rY, this, b, a));
    b = this.sY(a.C);
    b = this.D.$m(b);
    J0(b.eh, i, A(this.qY, this, b, a));
    J0(a.Je, i, A(this.vu, this, a, i))
};

e7.prototype.rY = function (a, b) {
    a.Je.get() ? (b.data.image = a.data.image, b.data.Wk && b.Je.set(i)) : this.vu(b, l)
};

e7.prototype.qY = function (a, b) {
    a.Je.get() ? (b.data.Wk = a.data, b.data.image && b.Je.set(i)) : this.vu(b, l)
};

var w_a = function (a, b, c) {
    var d = new d7,
        c = new b7(6, 7, c);
    e7.call(this, 9, d, c);
    this.C = a;
    this.M = b
};

B(w_a, e7);
v = w_a.prototype;
v.mh = function (a) {
    return 8 == a.type && !! a.getId()
};

v.Is = function (a) {
    return !this.mh(a) ? k : a
};

v.sY = function (a) {
    a = d2a(this.M, a.Me(), l, ".json");
    return new L6(a, 6)
};

v.tY = function (a) {
    a = d2a(this.C, a.Me(), i, ".jpg");
    return new L6(a, 1)
};

v.rY = function (a, b) {
    b.data.image = a.data.image || d2();
    b.data.Wk && b.Je.set(i)
};

v.qY = function (a, b) {
    b.data.Wk = a.data || {};

    b.data.image && b.Je.set(i)
};

var d2a = function (a, b, c, d) {
    var e = b.getId();
    if (0 == a.length) a = "/";
    else
    var a = a[EVa(e) % a.length],
        f = a.length - 1,
        a = a + (!(0 <= f && a.indexOf("/", f) == f) ? "/" : "");
    f = "";
    c && y(b.da()) && (f = "." + b.da());
    return a + e + f + d
};

var W4 = function (a, b) {
    this.Mi = a;
    b7.call(this, 7, 8, b)
};

B(W4, b7);
W4.prototype.Is = function (a) {
    return !this.mh(a) ? k : a
};

W4.prototype.$m = function (a) {
    var b = a.Me();
    if (!this.mh(b)) return k;
    var c = new M6(8, a, "{}");
    c.Je.set(i);
    return c7(this, (0 == this.Mi.length ? "" : this.Mi[EVa(b.K) % this.Mi.length]) + b.K + ".json", a, c)
};

var f7 = function () {
    this.data = [];
    this.Dr = [];
    this.C = [];
    this.eh = new L0(h, l);
    this.Je = new L0(h, l)
};

var e2a = function (a, b) {
    this.C = a;
    this.D = b
},
    g7 = function (a) {
        this.initialized = new L0(h, l);
        this.C = new N0(h, 0);
        this.L = [];
        this.K = 0;
        this.mn = a
    };

g7.prototype.start = function () {
    if (this.K >= this.L.length) return this.L = [], this.K = 0, k;
    this.I(this.L[this.K].C, this.L[this.K].D);
    this.K++;
    return this.start
};

var h7 = function (a, b, c) {
    var d = new f7;
    a.C.set(a.C.get() + 1);
    c && d.Dr.push(c);
    J0(b.eh, i, A(a.P, a, b, d));
    return d
};

g7.prototype.P = function (a, b) {
    a.Je.get() ? (this.L.push(new e2a(a, b)), W0(this.mn, this, 2)) : (this.C.set(this.C.get() - 1), b.eh.set(i))
};

var b5 = function (a, b) {
    g7.call(this, a);
    this.D = b;
    for (var c = 0, d = 0; d < this.D.length; ++d) J0(b[d].initialized, i, A(function () {
        c++;
        c == b.length && this.initialized.set(i)
    }, this));
    this.G = [];
    for (d = 0; d < this.D.length; ++d) this.G[d] = new N0(A(this.M, this), 0), this.G[d].Zb(this.D[d].C)
};

B(b5, g7);
b5.prototype.M = function () {
    for (var a = 0, b = 0; b < this.G.length; ++b) a += this.G[b].get();
    this.C.set(a)
};

b5.prototype.F = function (a) {
    for (var b = 0; b < this.D.length; ++b) {
        var c = this.D[b].F(a);
        if (c !== k) return c
    }
    return k
};

var f2a = fa("image");
B(f2a, e2);
var g3 = function () {
    this.xa = {}
};

B(g3, e2);
g3.prototype.wv = u(k);
var z6 = function (a) {
    return !(!a.rn() && !a.Bl())
},
    g2a = function (a, b) {
        for (var c = a.rn(), d = 0; d < c; ++d) if (a.$j(d) == b) return 1 == a.Mm(a.Ct(d)) ? 4 : 0;
        c = a.Jk();
        for (d = 0; d < c; ++d) if (a.Kk(d) == b) return 1;
        c = a.Ao();
        for (d = 0; d < c; ++d) if (a.ju(d) == b) return 2;
        c = a.Ik();
        for (d = 0; d < c; ++d) if (a.rk(d) == b) return 0;
        c = a.bq();
        for (d = 0; d < c; ++d) if (a.BF(d) == b) return 5;
        return -1
    },
    h2a = function (a, b) {
        for (var c = a.Ik(), d = 0; d < c; ++d) if (a.rk(d) == b) return d;
        c = a.rn();
        for (d = 0; d < c; ++d) if (a.$j(d) == b) return d;
        c = a.Jk();
        for (d = 0; d < c; ++d) if (a.Kk(d) == b) return d;
        c = a.Ao();
        for (d = 0; d < c; ++d) if (a.ju(d) == b) return d;
        c = a.bq();
        for (d = 0; d < c; ++d) if (a.BF(d) == b) return d;
        return -1
    };

g3.prototype.aq = function (a, b, c) {
    c = c || 0;
    return -c <= a && a <= this.getWidth() + c && -c <= b && b <= this.getHeight() + c
};

var SXa = function (a, b, c, d) {
    b = a.$g() + b / a.getWidth();
    c = a.ah() + c / a.getHeight();
    v5(b, c, a.da(), d);
    u5(d[0], d[1], d[2], d)
},
    o4 = function (a, b, c, d, e) {
        var f;
        d < b && (f = d, d = b, b = f);
        e < c && (f = e, e = c, c = f);
        return !(a.getWidth() + 25 < b || -25 > d || a.getHeight() + 25 < c || -25 > e)
    };

g3.prototype.AV = u(k);
g3.prototype.HN = u(l);
g3.prototype.XP = u(k);
g3.prototype.jN = u(l);
var i7 = function (a, b) {
    for (var c in b) a.xa[c] = i
};

var v6 = function (a, b, c, d, e, f, g, j, m) {
    this.xa = {};

    this.Gl = a;
    this.ea = b;
    this.ha = c;
    this.ma = d;
    this.ca = e;
    this.X = f;
    this.zd = g;
    this.G = ra(j) ? j : 0;
    this.Y = !! m;
    this.gd = [];
    this.F = [];
    this.I = [];
    this.K = [];
    this.C = k;
    this.U = this.V = this.N = this.M = this.Q = 0;
    this.P = [];
    this.L = [];
    this.ba = [];
    this.D = []
};

B(v6, g3);
var i2a = function (a) {
    a.Q = 0;
    a.C = [];
    for (var b = function (b) {
        b.fd = a.Q++;
        a.C.push(b)
    }, c = a.gd.length, d = 0; d < c; ++d) b(a.gd[d]);
    c = a.Ik();
    for (d = 0; d < c; ++d) b(a.F[d]);
    c = a.K.length;
    for (d = 0; d < c; ++d) b(a.K[d]);
    c = a.Jk();
    for (d = 0; d < c; ++d) b(a.I[d]);
    c = a.Bl();
    for (d = 0; d < c; ++d) b(a.D[d]);
    a.M = a.bq();
    a.V = a.M + a.Ik();
    a.N = a.V + a.K.length;
    a.U = a.N + a.I.length
};

v = v6.prototype;
v.$g = r("ea");
v.ah = r("ha");
v.da = r("ma");
v.hh = r("Gl");
v.getWidth = r("ca");
v.getHeight = r("X");
v.hc = r("zd");
v.bc = r("G");
v.Ik = function () {
    return this.F.length
};

v.rk = function (a) {
    return this.M + a
};

v.hs = function (a) {
    return this.rk(a)
};

v.Ir = function (a) {
    return this.F[a].zIndex
};

v.Rv = function (a) {
    return this.F[a].G
};

v.Jk = function () {
    return this.I.length
};

v.Zr = function (a) {
    return this.Kk(a)
};

v.Jr = function (a) {
    return this.I[a].zIndex
};

v.Kk = function (a) {
    return this.N + a
};

v.Ao = u(0);
v.ku = u(0);
v.ju = u(0);
v.$z = u(0);
v.bq = function () {
    return this.gd.length
};

v.JB = u(k);
v.kH = function (a) {
    return this.gd[a].image
};

v.BF = da();
v.oB = function (a) {
    return this.gd[a].I
};

v.pB = function (a) {
    return this.gd[a].K
};

v.aG = function (a) {
    return this.gd[a].scale
};

v.$F = function (a) {
    return this.gd[a].G
};

v.rn = function () {
    return this.F.length + this.K.length
};

v.Bl = function () {
    return this.D.length
};

v.wH = function (a) {
    return this.D[a].fd
};

v.oz = function (a) {
    return this.U + a
};

v.yo = da();
v.kr = function (a) {
    return this.D[a].xe.length
};

v.yH = function (a, b) {
    return a << 1 | b & 1
};

v.AH = function (a) {
    return this.D[a >> 1].xe[a & 1].fz.length
};

v.Hp = function (a, b) {
    return a << 1 | b & 1
};

v.jr = function (a) {
    return this.D[a >> 1].xe[a & 1].elements.length
};

var j7 = function (a, b, c) {
    return a.D[b >> 1].xe[b & 1].elements[c]
};

v = v6.prototype;
v.Ny = function (a, b) {
    return j7(this, a, b).type
};

v.cP = function (a, b) {
    return j7(this, a, b).C
};

v.ty = function (a, b) {
    return j7(this, a, b).gi
};

v.Oy = function (a, b) {
    return j7(this, a, b).text
};

v.nz = function (a, b) {
    return j7(this, a, b).fontSize
};

v.mz = function (a, b) {
    return j7(this, a, b).lk
};

v.xH = u(k);
v.dM = u(k);
v.CJ = u(k);
v.BH = function (a, b) {
    return this.D[a >> 1].xe[a & 1].fz[b].C
};

v.CH = function (a, b) {
    return this.D[a >> 1].xe[a & 1].fz[b].vertical
};

v.DH = function (a, b) {
    return this.D[a >> 1].xe[a & 1].fz[b].D
};

v.$j = function (a) {
    return this.M + a
};

v.Ct = function (a) {
    return this.$j(a)
};

v.kD = u(0);
v.jD = u(0);
v.kq = function (a) {
    return this.C[this.$j(a)].fontSize
};

v.jq = function (a) {
    return this.C[this.$j(a)].lk
};

v.ED = function (a) {
    return this.C[this.$j(a)].F
};

v.wq = function (a) {
    return this.C[a].points.length / 6
};

v.Gz = function (a) {
    return this.C[a].points || new Float32Array(0)
};

v.ap = function (a, b) {
    return this.C[a].N[b]
};

v.Mm = function (a) {
    return this.C[a].points.length / 2
};

v.Ar = function (a) {
    return this.C[a].points || new Float32Array(0)
};

v.St = function (a) {
    a = this.C[a];
    return a.D ? a.D.length : 0
};

v.Xv = function (a, b) {
    return this.C[a].D[b]
};

v.Zp = function (a) {
    a = this.C[a];
    return a.C ? a.C.length : 0
};

v.tv = function (a, b) {
    return this.C[a].C[b].url
};

v.YG = function (a, b) {
    return this.C[a].C[b].rect
};

v.Jy = function (a, b) {
    return this.C[a].C[b].C
};

v.yC = function (a, b) {
    return this.C[a].C[b].anchor
};

v.zH = function (a, b) {
    return this.C[a].C[b].Qg
};

v.ZG = function (a, b) {
    return this.C[a].C[b].Bt
};

v.Cm = r("Q");
v.Cn = da();
v.Qf = function (a) {
    return this.ba[a] || this.C[a].gi
};

v.Jo = function (a) {
    return this.C[a].gg
};

v.Kc = function (a) {
    return this.C[a].L || ""
};

v.PN = function (a) {
    return this.C[a].M
};

v.wL = u(k);
v.tL = u(l);
v.RN = function (a) {
    return this.L[a] ? this.L[a].image : k
};

v.SN = function (a) {
    return this.P[a] || k
};

v.vm = u(0);
v.Lp = u(0);
v.Mp = u(0);
v.gB = u(0);
v.hB = u(0);
v.rt = u(0);
v.OF = u(0);
v.PF = u(0);
v.QF = u(0);
v.vt = u(0);
v.lL = u(0);
v.mL = u(0);
v.nL = u(0);
v.jN = r("Y");
var j2a = function (a, b) {
    this.Oa = a;
    this.data = b
};

var Y4 = function (a, b) {
    g7.call(this, a);
    this.D = b || 256;
    this.initialized.set(i)
};

B(Y4, g7);
Y4.prototype.F = function (a) {
    return 0 != a.type ? k : h7(this, a)
};

Y4.prototype.I = function (a, b) {
    var c = a.data;
    c.Oa ? 0 == c.Oa.type ? (b.Dr.push(c.Oa), b.data.push(k2a(this, c))) : 4 == c.Oa.type ? (b.Dr.push(c.Oa), b.data.push(new f2a(c.image))) : ca(Error("unknown descriptor type " + c.Oa.type + " for image parser")) : b.C.push(new j2a(new L6(c.id || "", 1), new f2a(c.image)));
    this.C.set(this.C.get() - 1);
    b.Je.set(i);
    b.eh.set(i)
};

var k2a = function (a, b) {
    var c = b.Oa,
        d = 5 == c.hc(),
        e = new v6(0, c.Ic(), c.Nc(), c.da(), a.D, a.D, c.hc(), d ? c.bc() : h);
    e.gd.push(new y4(b.image, 0, 0, k, 0, d ? -Nz(c.bc()) : h));
    return e
};

var l2a = function () {
    this.init_()
};

l2a.prototype.init_ = function () {
    this.C = 0;
    this.mg = this.zh = "";
    this.isDisabled = l;
    this.K = this.eV = this.lng = this.lat = this.tileWidth = this.tileHeight = this.G = this.L = 0;
    this.country = this.region = this.streetRange = this.M = this.text = this.Q = this.copyright = "";
    this.N = this.P = this.D = 0;
    this.F = 3;
    this.links = [];
    this.levels = [];
    this.photos = []
};

var m2a = function () {
    this.text = this.mg = this.zh = ""
},
    n2a = function () {
        this.yawDeg = 0;
        this.text = this.mg = ""
    },
    o2a = function () {
        this.RG = this.QG = ""
    };

var p2a = function (a, b) {
    this.C = [0, 0, 0];
    this.D = [0, 0];
    this.G = a;
    this.F = a / (2 * Math.PI);
    this.K = 1 / this.F;
    this.I = b / Math.PI;
    this.L = 1 / this.I
};

var q2a = function (a, b, c) {
    this.buffer = a;
    this.byteOffset = b || 0;
    this.byteLength = y(c) ? c : a.byteLength - this.byteOffset;
    this.C = new Uint8Array(a, this.byteOffset);
    this.G = new Int8Array(a, this.byteOffset);
    this.K = new Float32Array(1);
    this.F = new Uint8Array(this.K.buffer);
    "undefined" == typeof Float64Array && (this.L = new Float64Array(1), this.D = new Uint8Array(this.L.buffer));
    this.I = l;
    a = new Uint16Array(1);
    a[0] = 1;
    1 == (new Uint8Array(a.buffer))[0] && (this.I = i)
};

v = q2a.prototype;
v.getInt8 = function (a) {
    return this.G[a]
};

v.getUint8 = function (a) {
    return this.C[a]
};

v.getInt16 = function (a, b) {
    return b ? this.C[a] + (this.G[a + 1] << 8) : this.C[a + 1] + (this.G[a] << 8)
};

v.getUint16 = function (a, b) {
    return b ? this.C[a] + (this.C[a + 1] << 8) : this.C[a + 1] + (this.C[a] << 8)
};

v.getInt32 = function (a, b) {
    return b ? this.C[a] + (this.C[a + 1] << 8) + (this.C[a + 2] << 16) + (this.G[a + 3] << 24) : this.C[a + 3] + (this.C[a + 2] << 8) + (this.C[a + 1] << 16) + (this.G[a] << 24)
};

v.getUint32 = function (a, b) {
    return b ? this.C[a] + (this.C[a + 1] << 8) + (this.C[a + 2] << 16) + 16777216 * this.C[a + 3] : this.C[a + 3] + (this.C[a + 2] << 8) + (this.C[a + 1] << 16) + 16777216 * this.C[a]
};

v.getFloat32 = function (a, b) {
    b == this.I ? (this.F[0] = this.C[a], this.F[1] = this.C[a + 1], this.F[2] = this.C[a + 2], this.F[3] = this.C[a + 3]) : (this.F[0] = this.C[a + 3], this.F[1] = this.C[a + 2], this.F[2] = this.C[a + 1], this.F[3] = this.C[a]);
    return this.K[0]
};

v.getFloat64 = function (a, b) {
    if (!this.D) return NaN;
    b == this.I ? (this.D[0] = this.C[a], this.D[1] = this.C[a + 1], this.D[2] = this.C[a + 2], this.D[3] = this.C[a + 3], this.D[4] = this.C[a + 4], this.D[5] = this.C[a + 5], this.D[6] = this.C[a + 6], this.D[7] = this.C[a + 7]) : (this.D[0] = this.C[a + 7], this.D[1] = this.C[a + 6], this.D[2] = this.C[a + 5], this.D[3] = this.C[a + 4], this.D[4] = this.C[a + 3], this.D[5] = this.C[a + 2], this.D[6] = this.C[a + 1], this.D[7] = this.C[a]);
    return this.L[0]
};

var r2a = k,
    s2a = k,
    t2a = k,
    u2a = function (a) {
        if (!r2a) {
            r2a = {};

            s2a = {};

            t2a = {};

            for (var b = 0; 65 > b; b++) r2a[b] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b), s2a[b] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(b), t2a[s2a[b]] = b
        }
        for (var b = t2a, c = Math.floor(0.75 * a.length), d = a.length - 1; 64 == b[a.charAt(d--)];) c--;
        c = new Uint8Array(c);
        0 <= a.search(/[^A-Za-z0-9\\-\\_\\.]/) && ca(Error("Base64-decode invalid"));
        for (var e = 0, d = 0; d < a.length;) {
            var f = b[a.charAt(d++)],
                g = d < a.length ? b[a.charAt(d)] : 0;
            ++d;
            var j = d < a.length ? b[a.charAt(d)] : 64;
            ++d;
            var m = d < a.length ? b[a.charAt(d)] : 64;
            ++d;
            f = f << 2 | g >> 4;
            c[e++] = f;
            64 != j && (g = g << 4 & 240 | j >> 2, c[e++] = g, 64 != m && (j = j << 6 & 192 | m, c[e++] = j))
        }
        return c
    };

var k7 = function (a) {
    this.length = a.length || a;
    for (var b = 0; b < this.length; b++) this[b] = a[b] || 0
};

v = k7.prototype;
v.wka = 2;
v.set = function (a, b) {
    for (var b = b || 0, c = 0; c < a.length && b + c < this.length; c++) this[b + c] = a[c]
};

v.toString = Array.prototype.join;
v.slice = function () {
    ca("slice not implemented")
};

v.xka = function () {
    ca("subarray not implemented")
};

"undefined" == typeof Int16Array && (k7.BYTES_PER_ELEMENT = 2, k7.prototype.BYTES_PER_ELEMENT = k7.prototype.wka, k7.prototype.set = k7.prototype.set, k7.prototype.toString = k7.prototype.toString, k7.prototype.slice = k7.prototype.slice, k7.prototype.subarray = k7.prototype.xka, ka("Int16Array", k7, h));
var l7 = function (a) {
    this.length = a.length || a;
    for (var b = 0; b < this.length; b++) this[b] = a[b] || 0
};

v = l7.prototype;
v.yka = 4;
v.set = function (a, b) {
    for (var b = b || 0, c = 0; c < a.length && b + c < this.length; c++) this[b + c] = a[c]
};

v.toString = Array.prototype.join;
v.slice = function () {
    ca("slice not implemented")
};

v.zka = function () {
    ca("subarray not implemented")
};

"undefined" == typeof Int32Array && (l7.BYTES_PER_ELEMENT = 4, l7.prototype.BYTES_PER_ELEMENT = l7.prototype.yka, l7.prototype.set = l7.prototype.set, l7.prototype.toString = l7.prototype.toString, l7.prototype.slice = l7.prototype.slice, l7.prototype.subarray = l7.prototype.zka, ka("Int32Array", l7, h));
var m7 = function (a) {
    this.length = a.length || a;
    for (var b = 0; b < this.length; b++) this[b] = a[b] || 0
};

v = m7.prototype;
v.Aka = 1;
v.set = function (a, b) {
    for (var b = b || 0, c = 0; c < a.length && b + c < this.length; c++) this[b + c] = a[c]
};

v.toString = Array.prototype.join;
v.slice = function () {
    ca("slice not implemented")
};

v.Bka = function () {
    ca("subarray not implemented")
};

"undefined" == typeof Int8Array && (m7.BYTES_PER_ELEMENT = 1, m7.prototype.BYTES_PER_ELEMENT = m7.prototype.Aka, m7.prototype.set = m7.prototype.set, m7.prototype.toString = m7.prototype.toString, m7.prototype.slice = m7.prototype.slice, m7.prototype.subarray = m7.prototype.Bka, ka("Int8Array", m7, h));
var n7 = function (a, b, c) {
    b = b ? b : 0;
    this.length = c || a.length || a;
    for (c = 0; c < this.length; c++) this[c] = a[c + b] || 0
};

v = n7.prototype;
v.Cka = 2;
v.set = function (a, b) {
    for (var b = b || 0, c = 0; c < a.length && b + c < this.length; c++) this[b + c] = a[c]
};

v.toString = Array.prototype.join;
v.slice = function () {
    ca("slice not implemented")
};

v.Dka = function () {
    ca("subarray not implemented")
};

"undefined" == typeof Uint16Array && (n7.BYTES_PER_ELEMENT = 2, n7.prototype.BYTES_PER_ELEMENT = n7.prototype.Cka, n7.prototype.set = n7.prototype.set, n7.prototype.toString = n7.prototype.toString, n7.prototype.slice = n7.prototype.slice, n7.prototype.subarray = n7.prototype.Dka, ka("Uint16Array", n7, h));
var o7 = function (a) {
    this.length = a.length || a;
    for (var b = 0; b < this.length; b++) this[b] = a[b] || 0
};

v = o7.prototype;
v.Eka = 4;
v.set = function (a, b) {
    for (var b = b || 0, c = 0; c < a.length && b + c < this.length; c++) this[b + c] = a[c]
};

v.toString = Array.prototype.join;
v.slice = function () {
    ca("slice not implemented")
};

v.Fka = function () {
    ca("subarray not implemented")
};

"undefined" == typeof Uint32Array && (o7.BYTES_PER_ELEMENT = 4, o7.prototype.BYTES_PER_ELEMENT = o7.prototype.Eka, o7.prototype.set = o7.prototype.set, o7.prototype.toString = o7.prototype.toString, o7.prototype.slice = o7.prototype.slice, o7.prototype.subarray = o7.prototype.Fka, ka("Uint32Array", o7, h));
var p7 = function (a, b, c) {
    b = b ? b : 0;
    this.length = c || a.length || a;
    for (c = 0; c < this.length; c++) this[c] = a[c + b] || 0
};

v = p7.prototype;
v.Gka = 1;
v.set = function (a, b) {
    for (var b = b || 0, c = 0; c < a.length && b + c < this.length; c++) this[b + c] = a[c]
};

v.toString = Array.prototype.join;
v.slice = function () {
    ca("slice not implemented")
};

v.Hka = function () {
    ca("subarray not implemented")
};

"undefined" == typeof Uint8Array && (p7.BYTES_PER_ELEMENT = 1, p7.prototype.BYTES_PER_ELEMENT = p7.prototype.Gka, p7.prototype.set = p7.prototype.set, p7.prototype.toString = p7.prototype.toString, p7.prototype.slice = p7.prototype.slice, p7.prototype.subarray = p7.prototype.Hka, ka("Uint8Array", p7, h));
var v2a;
try {
    var w2a = new Uint16Array(1);
    w2a[0] = 1;
    v2a = 1 == (new Uint8Array(w2a.buffer))[0]
} catch (x2a) {
    v2a = i
}
var y2a = v2a,
    z2a = function (a, b, c) {
        (0 > b || b + 4 * c > a.length) && ca("INDEX_SIZE_ERR");
        var d = y2a == i;
        if (d && 0 == b % 4) return new Float32Array(a.buffer, b, c);
        var e = new Float32Array(c),
            f = new Uint8Array(e.buffer);
        if (d) for (d = 0; d < 4 * c; d++) f[d] = a[b + d];
        else
        for (d = 0; d < c; d++) f[4 * d + 0] = a[b + 4 * d + 3], f[4 * d + 1] = a[b + 4 * d + 2], f[4 * d + 2] = a[b + 4 * d + 1], f[4 * d + 3] = a[b + 4 * d + 0];
        return e
    };

var A2a = function () {
    this.K = this.D = this.C = 0;
    this.G = this.I = this.F = this.L = k;
    this.Wc = l
};

v = A2a.prototype;
v.getWidth = function () {
    return !this.init_() ? 0 : this.C
};

v.getHeight = function () {
    return !this.init_() ? 0 : this.D
};

v.init_ = function () {
    if (this.Wc) return i;
    if (!this.G) return l;
    var a = u2a(this.G);
    this.G = k;
    var b;
    b = "undefined" != typeof DataView ? new DataView(a.buffer) : new q2a(a.buffer);
    if (8 != b.getUint8(0)) return l;
    this.K = b.getUint16(1, i);
    this.C = b.getUint16(3, i);
    this.D = b.getUint16(5, i);
    b = b.getUint8(7);
    if (8 != b) return l;
    this.L = new Uint8Array(a.buffer, b, this.C * this.D);
    b += this.C * this.D;
    this.F = z2a(a, b, 4 * this.K);
    this.I = new p2a(this.C, this.D);
    return this.Wc = i
};

v.qR = function (a, b) {
    if (!this.init_()) return 0;
    var c = this.I,
        d = (b + 0.5) * c.L,
        e = Math.sin(d),
        d = Math.cos(d),
        f = 1.5 * Math.PI - a * c.K,
        g = Math.sin(f);
    c.C[0] = e * Math.cos(f);
    c.C[1] = e * g;
    c.C[2] = d;
    return this.kt(c.C)
};

v.kt = function (a, b, c) {
    if (!this.init_()) return 0;
    var d, e = this.I;
    d = Math.acos(a[2]) * e.I - 0.5;
    var f = (Math.atan2(a[0], a[1]) + Math.PI) * e.F;
    f >= e.G - 0.5 && (f -= e.G);
    e.D[0] = f;
    e.D[1] = d;
    d = e.D;
    e = Math.floor(d[0] + 0.5);
    d = Math.floor(d[1] + 0.5);
    e >= this.C ? e -= this.C : 0 > e && (e += this.C);
    d >= this.D ? d -= this.D : 0 > d && (d += this.D);
    c && (c[0] = e, c[1] = d);
    f = this.L[d * this.C + e];
    if (0 == f) return 0;
    f *= 4;
    c = this.F[f++];
    e = this.F[f++];
    d = this.F[f++];
    f = this.F[f++];
    b && (b[0] = c, b[1] = e, b[2] = d);
    return ip(f / (a[0] * c + a[1] * e + a[2] * d), 3, 500)
};

var B2a = function () {
    this.I = sD();
    this.K = sD();
    this.F = this.L = this.D = this.C = 0;
    this.M = this.G = k;
    this.P = b0()
};

B2a.prototype.init = function (a, b) {
    var c = a.lat,
        d = a.D,
        e = a.P,
        f = a.N,
        g = this.I,
        j = [0, 0, 0];
    tD(a.lng, c, a.F, j);
    var m = j[0],
        n = j[1],
        j = j[2];
    Z_(g);
    $_(g, m, n, j, 1);
    c = j0(c);
    l0(g, c, c, c);
    k0(g, -Nz(e), 0, 1);
    k0(g, Nz(f), 1, 0);
    k0(g, Nz(e), 0, 1);
    k0(g, -Nz(d), 0, 1);
    rVa(this.I, 2, this.P);
    r0(this.I, this.K);
    this.C = a.G / a.tileWidth;
    this.D = a.L / a.tileHeight;
    for (this.L = a.K; this.C != Math.floor(this.C) || this.D != Math.floor(this.D);) this.C *= 2, this.D *= 2, this.L++;
    d = Math.max(360 / this.C, 180 / this.D);
    for (this.F = 1; 6 < d;) d /= 2, this.F *= 2;
    d = this.D * this.F + 1;
    m = d - 1;
    e = this.C * this.F;
    this.G = new Float32Array(3 * e * d);
    f = this.N;
    g = -Math.PI;
    c = 2 * Math.PI / e;
    m = -Math.PI / m;
    n = 0.5 * Math.PI;
    for (j = 0; j < d; ++j, n += m) for (var p = g, q = 0; q < e; ++q, p += c) {
        X_(f, Math.sin(p) * Math.cos(n), Math.cos(p) * Math.cos(n), Math.sin(n));
        var s = b.kt(f);
        0 == s && (s = 500);
        v0(f, s, f);
        s = 3 * (j * e + q);
        this.G[s + 0] = f[0];
        this.G[s + 1] = f[1];
        this.G[s + 2] = f[2]
    }
    d = this.M = new Float32Array(6 * this.C * this.D);
    e = this.N;
    f = this.F;
    for (g = 0; g < this.D; g++) for (c = 0; c < this.C; c++) {
        m = 6 * (g * this.C + c);
        d[m + 0] = Infinity;
        d[m + 1] = Infinity;
        d[m + 2] = Infinity;
        d[m + 3] = -Infinity;
        d[m + 4] = -Infinity;
        d[m + 5] = -Infinity;
        for (n = 0; n < f + 1; n++) for (j = 0; j < f + 1; j++) c2(this, c, g, j, n, e), e[0] < d[m + 0] && (d[m + 0] = e[0]), e[1] < d[m + 1] && (d[m + 1] = e[1]), e[2] < d[m + 2] && (d[m + 2] = e[2]), e[0] > d[m + 3] && (d[m + 3] = e[0]), e[1] > d[m + 4] && (d[m + 4] = e[1]), e[2] > d[m + 5] && (d[m + 5] = e[2])
    }
};

var c2 = function (a, b, c, d, e, f) {
    var g = a.F * a.C,
        b = 3 * ((c * a.F + e) * g + (b * a.F + d) % g);
    f[0] = a.G[b + 0];
    f[1] = a.G[b + 1];
    f[2] = a.G[b + 2]
};

B2a.prototype.N = e0();
var q7 = function () {
    this.G = this.D = 0;
    this.K = k;
    this.C = [];
    this.F = this.I = k;
    this.Wc = l
};

q7.prototype.getWidth = function () {
    return !this.init_() ? 0 : this.D
};

q7.prototype.getHeight = function () {
    return !this.init_() ? 0 : this.G
};

q7.prototype.init_ = function () {
    if (this.Wc) return i;
    if (!this.F) return l;
    var a = u2a(this.F);
    this.F = k;
    var b;
    b = ja.DataView ? new DataView(a.buffer) : new q2a(a.buffer);
    if (8 != b.getUint8(0)) return l;
    var c = b.getUint16(1, i) - 1;
    this.D = b.getUint16(3, i);
    this.G = b.getUint16(5, i);
    b = b.getUint8(7);
    if (8 != b) return l;
    this.K = new Uint8Array(a.buffer, b, this.D * this.G);
    this.C = Array(c);
    this.C[0] = "";
    b += this.D * this.G;
    for (var d = 0; d < c; d++) {
        this.C[d] = "";
        for (var e = 0; 22 > e; e++) this.C[d] += String.fromCharCode(a[b++])
    }
    this.I = z2a(a, b, 2 * c);
    return this.Wc = i
};

var C2a = function (a) {
    this.md = a ? a : new l2a;
    this.C = new B2a;
    this.D = new A2a;
    this.F = new q7
};

B(C2a, e2);
var Z4 = function (a) {
    g7.call(this, a);
    this.initialized.set(i)
};

B(Z4, g7);
Z4.prototype.F = function (a) {
    return 4 != a.type ? k : h7(this, a)
};

Z4.prototype.I = function (a, b) {
    if (a.data) {
        var c = a.data,
            d = c.Data,
            e = c.Projection,
            f = c.Location;
        if (!d || !e || !f) b.data = [], D2a(this, b);
        else {
            var g = f.panoId,
                j = new Q1(g),
                m = new l2a;
            m.mg = g;
            1 == parseFloat(d.scene) && (m.C = 1);
            m.L = parseFloat(d.image_height);
            m.G = parseFloat(d.image_width);
            m.tileHeight = parseFloat(d.tile_height);
            m.tileWidth = parseFloat(d.tile_width);
            m.isDisabled = !! d.disabled;
            m.eV = parseFloat(f.zoomLevels);
            m.K = Math.ceil(Math.log(m.G / m.tileWidth) / Math.LN2);
            m.zh = f.level_id;
            m.lat = parseFloat(f.lat);
            m.lng = parseFloat(f.lng);
            m.V = parseFloat(f.original_lat);
            m.X = parseFloat(f.original_lng);
            m.copyright = d.copyright;
            m.Q = d.image_date;
            m.text = f.description;
            m.M = f.text_url;
            m.streetRange = f.streetRange;
            m.region = f.region;
            m.country = f.country;
            m.U = "\\u65e5\\u672c" == m.country || "Japan" == m.country;
            m.Y = "spherical" === e.projection_type ? 1 : "cubic" === e.projection_type ? 2 : 0;
            m.D = parseFloat(e.pano_yaw_deg);
            m.P = parseFloat(e.tilt_yaw_deg);
            m.N = parseFloat(e.tilt_pitch_deg);
            m.links = [];
            if (c.Links) {
                e = c.Links;
                for (d = 0; d < e.length; d++) f = e[d], g = new n2a, g.yawDeg = parseFloat(f.yawDeg), g.mg = f.panoId, g.C = f.road_argb, g.text = f.description, m.links.push(g)
            }
            m.levels = [];
            if (c.levels) {
                e = c.levels.level;
                for (d = 0; d < e.length; d++) f = e[d], g = new m2a, g.zh = f.level_id, g.mg = f.pano_id, g.F = parseFloat(f.ordinal), g.C = f.road_argb, g.text = f.text, g.D = f.abbreviation, m.levels.push(g)
            }
            m.photos = Lg(a.data.photos && a.data.photos.photo || [], function (a) {
                var b = new o2a;
                b.QG = a.authorid;
                b.RG = a.docid;
                return b
            });
            d = new C2a(m);
            if (c = c.model) c.uncompressed_depth_map && (e = d.D, e.G = c.uncompressed_depth_map, e.Wc = l), c.uncompressed_pano_map && (e = d.F, e.F = c.uncompressed_pano_map, e.Wc = l);
            d.C.init(m, d.D);
            b.data = [d];
            b.Dr = [j];
            b.Je.set(i);
            D2a(this, b)
        }
    } else b.data = [], D2a(this, b)
};

var D2a = function (a, b) {
    a.C.set(a.C.get() - 1);
    b.eh.set(i)
};

var $4 = function (a) {
    g7.call(this, a);
    this.D = qD();
    this.initialized.set(i)
};

B($4, g7);
$4.prototype.F = function (a) {
    return 9 != a.type ? k : h7(this, a, a.data.Oa)
};

$4.prototype.I = function (a, b) {
    var c = a.data;
    (!c || !c.Wk || !c.image) && this.G(b, l);
    var d = a.C.Me(),
        e = c.image,
        f = new Image,
        g = parseFloat(c.Wk.near) || h,
        j = parseFloat(c.Wk.far) || h;
    var m = c.Wk.format;
    var m = ("range_linear" == m ? 1 : "range_perspective" == m ? 2 : "plane" == m ? 3 : h) || 2,
        n = c.Wk.depth_mime,
        c = c.Wk.depth_data;
    n && c ? f.src = "data:" + n + ";base64," + c : f = d2();
    d = d.Tb().clone();
    c = e.width;
    n = e.height;
    uD(d.Bf(), d.Cf(), d.xg(), this.D);
    var p = j0(this.D[1]),
        q = d.xi();
    q.M = h;
    q.N = h;
    q.P = h;
    q.D = y(g) ? p * g : h;
    q.near = 1;
    q.L = y(g) && y(j) ? j / g : 1.1;
    q.width = c;
    q.height = n;
    d.Vd(q);
    e = new f2(d, e, f, m);
    b.data.push(e);
    bB(f, "load", A(this.G, this, b, i))
};

$4.prototype.G = function (a, b) {
    this.C.set(this.C.get() - 1);
    a.Je.set(b);
    a.eh.set(i)
};

var E2a = function (a, b) {
    this.Ua = a;
    this.pg = b
};

E2a.prototype.getId = r("Ua");
E2a.prototype.getName = r("pg");
var a5 = function (a, b) {
    g7.call(this, a);
    this.J = b;
    this.D = qD();
    this.G = rD();
    this.N = sD();
    this.M = ip(Math.floor(1.2 * this.J.height.get() / 384) - 1, 0, 3);
    this.initialized.set(i)
};

B(a5, g7);
a5.prototype.F = function (a) {
    return 8 != a.type ? k : h7(this, a, a.C.Me())
};

a5.prototype.I = function (a, b) {
    if (a.data) {
        this.M = ip(Math.floor(1.2 * this.J.height.get() / 384) - 1, 0, 3);
        var c, d = a.data;
        c = [];
        var e = [],
            f = d.name || "",
            g = d.version,
            j = d.view;
        if (j && j.length) for (var m = 0; m < j.length; m++) {
            var n;
            var p = j[m];
            if (p) {
                n = p.id;
                var q = new xXa,
                    s = p.cameras;
                q.G = F2a(this, s.projector);
                q.position = parseFloat(s.p);
                q.C = parseFloat(s.p_start);
                q.D = parseFloat(s.p_end);
                q.K = parseFloat(s.duration_multiplier);
                if (s = s.cameras) for (var t = 0; t < s.length; t++) q.F.push(F2a(this, s[t], q.G.clone()));
                else q.F.push(q.G.clone());
                q.L = parseInt(p.view_type, 10) || 0;
                q.I = parseInt(p.transition_type, 10) || 0;
                if (p = p.metadata) q.aD = parseInt(p.source, 10) || 0, q.Qo = p.photo_id || "", q.bD = p.user_id || "", q.userName = p.user_name || "";
                p = new G2a;
                p.C = new y2(n, q.G, this.M);
                p.D = q;
                n = p
            } else n = k;
            c.push(n.C);
            e.push(n.D)
        }
        j = (m = d.center) ? new Cw(parseFloat(m.lng_d), parseFloat(m.lat_d)) : k;
        n = [];
        if ((d = d.related_tour) && d.length) for (m = 0; m < d.length; ++m) n.push(new E2a(d[m].id || "", d[m].landmark_name || ""));
        if (c = new Y2(c, f, e, h, j, g, h, n)) {
            b.data.push(c);
            this.C.set(this.C.get() - 1);
            b.Je.set(i);
            b.eh.set(i);
            return
        }
    }
    this.C.set(this.C.get() - 1);
    b.Je.set(l);
    b.eh.set(i)
};

var F2a = function (a, b, c) {
    var c = c || new d3,
        d = new vD,
        e;
    var f = b.rotation;
    e = a.D;
    if (f) {
        a.G[0] = parseFloat(f.x);
        a.G[1] = parseFloat(f.y);
        a.G[2] = parseFloat(f.z);
        a.G[3] = parseFloat(f.w);
        var g = f = a.G,
            j = f[0],
            m = f[1],
            n = f[2],
            p = f[3],
            j = 1 / Math.sqrt(j * j + m * m + n * n + p * p);
        g[0] = f[0] * j;
        g[1] = f[1] * j;
        g[2] = f[2] * j;
        g[3] = f[3] * j;
        var j = a.G,
            f = a.N,
            q = j[0],
            n = j[1],
            g = j[2],
            s = j[3],
            t = 2 * q,
            x = 2 * n,
            p = 2 * g,
            j = t * s,
            m = x * s,
            s = p * s,
            t = t * q,
            D = x * q,
            q = p * q,
            x = x * n,
            n = p * n,
            g = p * g;
        f[0] = 1 - (x + g);
        f[1] = D + s;
        f[2] = q - m;
        f[3] = 0;
        f[4] = D - s;
        f[5] = 1 - (t + g);
        f[6] = n + j;
        f[7] = 0;
        f[8] = q + m;
        f[9] = n - j;
        f[10] = 1 - (t + x);
        f[11] = 0;
        f[12] = 0;
        f[13] = 0;
        f[14] = 0;
        f[15] = 1;
        f = a.N;
        g = Math.sqrt(f[2] * f[2] + f[6] * f[6]);
        1E-6 < g ? (e[2] = Math.atan2(1 * f[2], 1 * f[6]), e[1] = Math.atan2(1 * g, f[10]), e[0] = Math.atan2(1 * f[8], 1 * -f[9])) : (e[0] = 0, e[1] = Math.atan2(1 * g, f[10]), e[2] = Math.atan2(f[1], f[0]));
        e[0] = (e[0] + 2 * Math.PI) % (2 * Math.PI);
        e[2] = (e[2] + 2 * Math.PI) % (2 * Math.PI);
        e[1] = 1 * ((1 * e[1] + 2 * Math.PI) % (2 * Math.PI));
        e[0] = e[0];
        e[1] = Nz(180) - e[1];
        e[2] = -e[2];
        e = i
    } else e = l;
    e && (d.K = a.D[0], d.Dc = a.D[1], d.De = a.D[2]);
    if (e = b.position) if (e = [parseFloat(e.lng_d), parseFloat(e.lat_d), parseFloat(e.alt_m)], tD(e[0], e[1], e[2], a.D), d.F = a.D[0], d.G = a.D[1], d.I = a.D[2], a = j0(e[1]), e = parseFloat(b.dist_m)) d.D = a * e;
    if (b = parseFloat(b.fovy)) d.C = b;
    c.Vd(d);
    return c
},
    G2a = function () {
        this.D = this.C = k
    };

var r7 = function () {
    this.initialized = new L0(h, l)
};

B(r7, iB);
var f5 = function (a) {
    r7.call(this);
    this.C = a;
    for (var b = a.length, c = 0; c < a.length; c++) a[c].rA(this), J0(a[c].initialized, i, A(function () {
        b--;
        0 == b && this.initialized.set(i)
    }, this))
};

B(f5, r7);
f5.prototype.Hs = function (a) {
    for (var b = [], c = 0; c < this.C.length; c++) {
        var d = this.C[c].Hs(a);
        d && 0 < d.length && (b = b.concat(d))
    }
    return b
};

f5.prototype.mp = function (a, b) {
    for (var c = [], d = 0; d < this.C.length; d++) {
        var e = this.C[d].mp(a, b);
        e && 0 < e.length && (c = c.concat(e))
    }
    return c
};

f5.prototype.Zn = function (a, b, c, d) {
    for (var e = [], f = 0; f < this.C.length; f++) {
        var g = this.C[f].Zn(a, b, c, d);
        g && 0 < g.length && (e = e.concat(g))
    }
    return e
};

var s7 = function (a) {
    NA.call(this, "FetchingRequestedEvent", a)
};

B(s7, NA);
var t7 = function (a) {
    NA.call(this, "PrefetchingRequestedEvent", a)
};

B(t7, NA);
var e5 = function (a, b, c) {
    r7.call(this);
    this.oa = a;
    this.F = b;
    this.C = c;
    a = A(this.D, this);
    b = this.oa;
    (new P0(a, b.Uj.get())).Zb(b.Uj);
    b = this.oa;
    (new N0(a, b.C.get())).Zb(b.C);
    this.initialized.set(i)
};

B(e5, r7);
e5.prototype.Hs = function () {
    var a = [];
    this.oa.Sp() || H2a(this, this.oa.Ai, this.oa.U, i, a);
    2 == this.oa.C.get() && H2a(this, this.oa.G, this.oa.I, l, a);
    return a
};

var H2a = function (a, b, c, d, e) {
    if (b && c) {
        var f = I2a(a.F, b, e);
        I2a(a.C, c, e);
        if (d && f) {
            b = $1(q2(a.oa, b));
            for (c = 0; c < b.length; c++) I2a(a.C, JWa(b[c].owner, b[c], b[c].SG), e)
        }
    }
},
    I2a = function (a, b, c) {
        if (!b) return k;
        (a = a.getData(b)) || c.push(b);
        return a
    };

e5.prototype.mp = function () {
    var a = [];
    1 == this.oa.C.get() && H2a(this, this.oa.G, this.oa.I, l, a);
    return a
};

e5.prototype.Zn = function () {
    var a = [],
        b = [],
        c = [];
    J2a(this, this.oa.Ai, this.oa.U, a, b, c);
    if (this.oa.Sp()) {
        var d = J2a(this, this.oa.G, this.oa.I, a, b, c);
        if (d) {
            var e = this.oa.ca.get();
            d.hv = e
        }
    }
    d = [];
    for (e = 0; e < a.length; ++e) d.push(new g2([], b[e], c[e], a[e], k));
    return d
};

var J2a = function (a, b, c, d, e, f) {
    if (b && c) {
        var g = a.oa.Ml(b),
            c = a.oa.P.getData(c);
        if (g && c) return d.push(b), f.push(a.oa.Y.fg(b)), e.push(g), q2(a.oa, b)
    }
    return k
};

e5.prototype.D = function () {
    if ("" != this.oa.Uj.get() && 0 != this.oa.C.get()) {
        var a = this.oa.G,
            b = this.oa.I;
        if (!a || !this.oa.Ml(a) || !b || !this.oa.P.getData(b)) 1 == this.oa.C.get() ? this.dispatchEvent(new t7(this)) : 2 == this.oa.C.get() && this.dispatchEvent(new s7(this))
    }
};

var u7 = function () {
    this.D = i;
    this.G = this.Ih = k;
    this.C = {};

    this.P = [];
    this.N = [];
    this.V = this.ea = k;
    this.I = -1;
    this.Y = this.F = this.OG = this.M = this.L = this.X = this.ha = this.Q = this.At = this.U = this.Sg = this.ca = this.iv = this.ba = this.qt = k;
    this.K = -1
};

var y_a = function (a, b) {
    r7.call(this);
    this.wg = a;
    this.oa = b;
    (new K0(A(this.aia, this))).Zb(this.wg.ba);
    (new K0(A(this.$ha, this))).Zb(this.wg.X);
    this.initialized.set(i)
};

B(y_a, r7);
v = y_a.prototype;
v.aia = function () {
    this.wg.ba.get() && this.dispatchEvent(new t7(this))
};

v.$ha = function () {
    this.wg.X.get() && this.dispatchEvent(new s7(this))
};

v.mp = function () {
    return KXa(this.wg, 1)
};

v.Hs = function () {
    return KXa(this.wg, 3)
};

v.Zn = function () {
    var a = [],
        b;
    b = this.wg;
    if (b.qf) {
        for (var c = [], d = [], e = 0; e < b.C.length; e++) {
            var f = b.C[e];
            if (f && b.F.getData(f) && 0 > JXa(c, f)) {
                c.push(f);
                var g = b.F.fg(f);
                d.push(new g2([], R2(b, f), g, f, k))
            }
        }
        b = 0 < d.length ? d : k
    } else b = k;
    b && a.push(b);
    a: {
        b = this.oa;
        if (b.D && (c = b.Q.getData(b.D))) {
            d = b.Q.fg(b.D);
            b = [new g2([], c, d, b.D, k)];
            break a
        }
        b = k
    }
    b && a.push(b);
    if (1 == a.length) return a[0];
    b = [];
    for (c = 0; c < a.length; ++c) b.push(new g2(a[c], k, k, k, k));
    return b
};

var x_a = function (a) {
    r7.call(this);
    this.C = a;
    (new K0(A(this.Xda, this))).Zb(this.C.ca);
    (new K0(A(this.Wda, this))).Zb(this.C.Y);
    this.initialized.set(i)
};

B(x_a, r7);
v = x_a.prototype;
v.Xda = function () {
    this.C.ca.get() && this.dispatchEvent(new t7(this))
};

v.Wda = function () {
    this.C.Y.get() && this.dispatchEvent(new s7(this))
};

v.mp = function () {
    return this.C.P
};

v.Hs = function () {
    return this.C.D && !this.C.K.getData(this.C.D) ? [this.C.D] : []
};

v.Zn = function () {
    return []
};

var K2a = function (a) {
    NA.call(this, "ModifyEvent", a)
};

B(K2a, NA);
var v7 = function () {
    this.initialized = new L0(h, l)
};

B(v7, iB);
var c5 = function (a) {
    v7.call(this);
    this.I = {};

    this.G = {};

    this.F = {};

    this.C = k;
    a && (this.C = new u1, YVa(this.C, a), this.D = {});
    this.initialized.set(i)
};

B(c5, v7);
v = c5.prototype;
v.zm = function (a, b) {
    var c = b.Bc();
    this.C && (y(this.D[c]) ? this.C.wb(this.D[c]) : this.D[c] = this.C.add(c, A(this.pX, this, b), 1));
    this.I[c] = a;
    this.G[c] = b;
    c = new g2([], a, this.fg(b), b, k);
    this.dispatchEvent(new xWa(this, c))
};

v.pX = function (a) {
    this.dispatchEvent(new X0a(this, a));
    this.Vz(a);
    a = a.Bc();
    delete this.I[a];
    delete this.G[a];
    this.D && delete this.D[a]
};

v.getData = function (a) {
    if (!a) return k;
    var a = a.Bc(),
        b = this.I[a] || k;
    b && this.C && this.C.wb(this.D[a]);
    return b
};

v.fg = function (a) {
    var b = a.Bc();
    if (!this.F[b]) {
        this.F[b] = new u7;
        var c = this.getData(a);
        new g2([], c, this.F[b], a, k);
        this.dispatchEvent(new K2a(this))
    }
    return this.F[b]
};

v.Vz = function (a) {
    a = a.Bc();
    this.F[a] && delete this.F[a]
};

v.UF = function (a) {
    for (var b in this.G) {
        var c = this.G[b];
        a(c) && (this.C && this.C.remove(this.D[c.Bc()]), this.pX(c))
    }
};

var w7 = function (a) {
    v7.call(this);
    this.C = a;
    for (var b = a.length, c = b, d = 0; d < b; ++d) a[d] ? (J0(a[d].initialized, i, A(function () {
        c--;
        0 == c && this.initialized.set(i)
    },

    this)), a[d].rA(this)) : c--
};

B(w7, v7);
w7.prototype.zm = function (a, b) {
    for (var c = this.C.length, d = 0; d < c; ++d) this.C[d].zm(a, b)
};

w7.prototype.fg = function (a) {
    return 0 < this.C.length ? this.C[0].fg(a) : new u7
};

w7.prototype.Vz = function (a) {
    0 < this.C.length && this.C[0].Vz(a)
};

w7.prototype.getData = function (a) {
    for (var b = this.C.length, c = 0; c < b; ++c) {
        var d = this.C[c].getData(a);
        if (d != k) {
            for (c -= 1; 0 <= c; --c) this.C[c].zm(d, a);
            return d
        }
    }
    return k
};

var d5 = function (a) {
    w7.call(this, a)
};

B(d5, w7);
d5.prototype.zm = function (a, b) {
    this.C[b.type] && this.C[b.type].zm(a, b)
};

d5.prototype.fg = function (a) {
    return this.C[a.type] ? this.C[a.type].fg(a) : new u7
};

d5.prototype.Vz = function (a) {
    this.C[a.type] && this.C[a.type].Vz(a)
};

d5.prototype.getData = function (a) {
    return this.C[a.type] ? this.C[a.type].getData(a) : k
};

var L2a = function (a, b, c) {
    NA.call(this, "FetchDone", a);
    this.Oa = b;
    this.data = c
};

B(L2a, NA);
var g5 = function (a, b, c, d) {
    this.Br = a;
    this.Q = b;
    this.F = c;
    this.C = d;
    this.V = new L0(h, i);
    this.L = new N0(h, 0);
    this.P = {};

    this.N = {};

    this.I = [];
    this.K = [];
    this.G = [];
    this.Ba = A(this.D, this);
    this.Wc = new L0(h, l);
    aB(this.C, "FetchingRequestedEvent", this.ca, l, this);
    aB(this.C, "PrefetchingRequestedEvent", this.xN, l, this);
    aB(this.C, "ViewportReady", this.dispatchEvent, l, this);
    aB(this.C, "ViewportLoaded", this.dispatchEvent, l, this);
    aB(this.F, "AddEvent", this.dispatchEvent, l, this);
    aB(this.F, "ModifyEvent", this.dispatchEvent, l, this);
    aB(this.F, "RemoveEvent", this.dispatchEvent, l, this);
    a = new M0;
    a.Zb(this.Br.F);
    a.C = A(function () {
        0 == this.Br.F.get() && this.xN()
    }, this);
    for (var a = [this.C.initialized, this.Br.initialized, this.Q.initialized, this.F.initialized], e = a.length, b = A(function () {
        e--;
        0 == e && this.Wc.set(i)
    }, this), c = 0; c < a.length; ++c) J0(a[c], i, b)
};

B(g5, iB);
g5.prototype.D = function () {
    this.L.set(this.L.get() + 1)
};

g5.prototype.getData = function (a, b, c) {
    var d = this.ca(b);
    if (c) {
        var e = this.Ba;
        c.Si.N = e;
        c.dC.D = e
    }
    a = this.ha(d, a, b, c);
    a: {
        for (e = 0; e < this.I.length; ++e) if (this.I[e].nn === b) {
            this.I[e].QX = d;
            this.I[e].$w = c || k;
            break a
        }
        this.I.push({
            nn: b,
            QX: d,
            $w: c || k
        })
    }
    0 == this.Br.F.get() && setTimeout(A(this.xN, this), 0);
    return a
};

g5.prototype.ha = function (a, b, c, d) {
    return this.C.Zn(a, b, c, d)
};

var x7 = function (a, b, c, d) {
    var e = b.Bc();
    return a.P[e] || a.N[e] ? k : a.Br.Is(b, c, d)
};

g5.prototype.X = function (a, b) {
    for (var c = this.C.mp(a, b), d = [], e = 0; e < c.length; ++e) {
        var f = x7(this, c[e]);
        f && d.push(f)
    }
    return d
};

g5.prototype.ea = function () {
    return []
};

g5.prototype.ma = function (a) {
    for (var b = [], a = this.C.Hs(a), c = 0; c < a.length; ++c) {
        var d = x7(this, a[c]);
        d && b.push(d)
    }
    return b
};

g5.prototype.ca = function (a) {
    var b = this.ea(a);
    if (this.V.get()) for (var a = this.ma(b, a), c = 0; c < a.length; ++c) a: {
        var d = a[c],
            e = d.Me().Bc();
        if (!this.P[e]) {
            var f = this.N[e];
            if (f) delete this.N[e];
            else if (f = M2a(this, d), f === k) break a;
            this.P[e] = i;
            J0(f.eh, i, A(this.D, this))
        }
    }
    return b
};

var M2a = function (a, b) {
    var c = a.Br.$m(b);
    if (c === k) return k;
    c = a.Q.F(c);
    if (c === k) return k;
    J0(c.eh, i, A(a.U, a, b, c));
    return c
};

g5.prototype.U = function (a, b) {
    delete this.P[a.Me().Bc()];
    delete this.N[a.Me().Bc()];
    this.dispatchEvent(new L2a(this, a.Me(), b));
    if (b.Je.get()) for (var c = 0; c < b.data.length; ++c) this.F.zm(b.data[c], a.Me());
    for (c = this.G.length - 1; 0 <= c; --c) {
        var d = this.G[c],
            e;
        e = d.Dr;
        var f = d.KZ;
        if (f) {
            for (var g = [], j = 0; j < e.length; ++j) {
                var m = e[j],
                    n = this.F.getData(m);
                n ? (m = new g2([], n, this.F.fg(m), m, k), x6(f, m) || y6(f, m, i)) : g.push(m)
            }
            e = g
        } else e = [];
        0 == e.length ? this.G.splice(c, 0) : d.Dr = e
    }
};

g5.prototype.xN = function () {
    if (this.V.get() && 0 == this.Br.F.get()) {
        this.MZ();
        for (var a = this.K.length - 1; 0 <= a; --a) {
            for (var b = this.K[a]; 0 < b.jK.length;) {
                var c = b.jK.shift();
                if (b.$w) a: {
                    for (var d = b.nn, e = c.Me(), f = b.$w, g = 0; g < this.G.length; ++g) if (this.G[g].nn === d) {
                        this.G[g].Dr.push(e);
                        this.G[g].KZ = f;
                        break a
                    }
                    this.G.push({
                        nn: d,
                        Dr: [e],
                        KZ: f
                    })
                }
                d = c;
                c = d.Me().Bc();
                this.P[c] || this.N[c] ? c = l : (d = M2a(this, d)) ? (this.N[c] = d, c = i) : c = l;
                if (c) return
            }
            this.K.splice(a, 0)
        }
    }
};

g5.prototype.MZ = function () {
    for (var a = this.X([], k), b = [], c = 0; c < a.length; ++c) this.F.getData(a[c].Me()) || b.push(a[c]);
    this.K = [];
    this.K.push({
        nn: k,
        jK: b,
        $w: k
    })
};

var N2a = function (a, b, c, d) {
    NA.call(this, "StyleLoad", a);
    this.id = b;
    this.C = c;
    this.style = d
};

B(N2a, NA);
var y7 = function (a, b, c) {
    this.U = a;
    this.X = b;
    this.Q = c;
    this.K = {};

    this.G = {};

    this.D = {};

    this.C = {};

    this.F = l;
    this.L = [];
    this.M = [];
    this.P = k
};

B(y7, iB);
var v4 = function (a, b) {
    var c = a.Q.getData(new L6(b, 1));
    if (c) return c.image;
    if (!a.K[b]) if (a.K[b] = i, a.F && a.M.push(b), c = a.U.EE(1, [b])) {
        var d = a.X.F(c);
        d ? (c = a.F ? A(a.N, a, b, d) : A(a.I, a, b, d), J0(d.eh, i, c)) : a.F ? a.N(b, new f7) : a.I(b, new f7)
    } else a.F ? a.N(b, new f7) : a.I(b, new f7);
    return k
},
    H_a = function (a, b, c) {
        v4(a, b) ? c() : (a.G[b] = a.G[b] || [], a.G[b].push(c))
    };

y7.prototype.I = function (a, b) {
    O2a(this, b.C);
    delete this.K[a];
    if (this.G[a]) {
        var c = this.G[a];
        delete this.G[a];
        for (var d = 0; d < c.length; ++d) c[d]()
    }
};

var I3 = function (a, b, c) {
    var d = a.D[x2(b)];
    if (d && (d = d[c]) || (d = a.C[c])) return d;
    if (d = a.D[x2(ZWa(b))]) if (d = d[c]) return d;
    return k
},
    O2a = function (a, b) {
        for (var c = b.length, d = 0; d < c; ++d) if (2 == b[d].Oa.type) {
            var e = b[d].Oa.L;
            a.D[e] || (a.D[e] = {});
            a.D[e][b[d].Oa.id] = b[d].data;
            a.dispatchEvent(new N2a(a, b[d].Oa.id, b[d].Oa.L, b[d].data))
        } else a.Q.zm(b[d].data, b[d].Oa)
    };

y7.prototype.V = 0;
var P2a = function (a) {
    var b = new A3,
        c = "localStyle!" + ++a.V;
    a.C[c] = b;
    return c
},
    G_a = function (a) {
        a.P == k && (a.P = P2a(a));
        return a.P
    };

y7.prototype.N = function (a, b) {
    var c = this.M.indexOf(a);
    if (!(0 > c)) {
        this.L[c] = A(this.I, this, a, b);
        for (c = 0; c < this.M.length; ++c) if (!this.L[c]) return;
        var d = this.L;
        this.L = [];
        this.M = [];

        for (c = 0; c < d.length; ++c) d[c]()
    }
};

var z7 = function (a, b, c, d) {
    this.C = a;
    this.X = b;
    this.ba = c || -1;
    this.Y = d || ""
};

z7.prototype.Me = r("C");
var Q2a = function (a, b, c) {
    return a[(b + c) % a.length]
};

var A7 = function (a, b, c, d, e, f) {
    b7.call(this, 0, 5, d);
    this.D = a;
    this.Mi = b;
    this.L = c;
    this.N = !! e;
    this.M = f;
    this.initialized.set(i)
};

B(A7, b7);
A7.prototype.mh = function (a) {
    return 0 == a.type && 0 == a.hc() && 22 >= a.da()
};

A7.prototype.Is = function (a, b) {
    if (!this.mh(a)) return k;
    var c = "";
    b && (c = R2a(a) ? x2(ZWa(b)) : x2(b));
    return new z7(a, c, b ? b.F : -1)
};

A7.prototype.$m = function (a) {
    var b = a.Me();
    if (!this.mh(b)) return k;
    var c = new M6(5, a, ""),
        d = Q2a(this.Mi, b.Ic(), b.Nc()),
        e = {};

    e.x = b.Ic();
    e.y = b.Nc();
    e.z = b.da();
    e.hl = b.I;
    e.lyrs = b.yf;
    e.style = a.X;
    "b" != this.L && (e.output = this.L);
    this.M && (e.vrl = this.M);
    this.N && !R2a(b) && (e.cts = "df");
    b.da() <= a.ba && (e.rb = "t");
    d = J6(d, e);
    return c7(this, d, a, c)
};

A7.prototype.EE = u(k);
var B7 = function (a, b, c, d) {
    this.D = a;
    this.Mi = b;
    this.C = c;
    this.K = y(d) ? d : 21;
    d7.call(this)
};

B(B7, d7);
B7.prototype.mh = function (a) {
    return 0 == a.type && a.hc() == this.C && a.da() <= this.K
};

B7.prototype.Is = function (a, b, c) {
    if (!this.mh(a)) return k;
    var d = "",
        d = 6 == this.C ? c ? x2(c) : "" : b ? x2(b) : "";
    return new z7(a, d, b ? b.F : -1, c ? c.Kr() : h)
};

B7.prototype.$m = function (a) {
    var b = a.Me();
    if (!this.mh(b)) return k;
    var c = Q2a(this.Mi, b.Ic(), b.Nc()),
        d = {};

    d.x = b.Ic();
    d.y = b.Nc();
    d.z = b.da();
    5 == this.C && (d.deg = b.bc());
    6 == this.C && (d.lyrs = a.Y, d.style = a.X);
    b = J6(c, d);
    return $1a(this, b, a)
};

var S2a = function () {
    this.data = this.area = k
},
    C7 = function (a, b, c, d, e) {
        this.Q = y(b) ? b : 10;
        this.U = c || 5;
        this.N = d || new C3(JB);
        this.P = e || new C3(S2a);
        this.I = (a.left + a.right) / 2;
        this.C = (a.top + a.bottom) / 2;
        this.M = a;
        this.F = this.D = this.L = this.K = k;
        this.V = l;
        this.G = []
    },
    D7 = function (a, b, c, d, e) {
        a = a.N.get();
        a.top = b;
        a.right = c;
        a.bottom = d;
        a.left = e;
        return a
    };

C7.prototype.insert = function (a, b) {
    var c = this.P.get();
    c.area = a;
    c.data = b;
    E7(this, c)
};

var E7 = function (a, b) {
    if (0 < a.Q && (a.V || a.G.length > a.U)) {
        if (!a.V) {
            a.V = i;
            var c = a.G;
            a.G = [];
            for (var d = 0, e = c.length; d < e; ++d) T2a(a, c[d])
        }
        T2a(a, b)
    } else a.G.push(b)
},
    T2a = function (a, b) {
        var c = l,
            d = b.area;
        if (d.left <= a.I) if (d.right >= a.I) c = i;
        else if (d.top <= a.C) if (d.bottom >= a.C) c = i;
        else {
            a.K == k && (a.K = new C7(D7(a, a.M.top, a.I, a.C, a.M.left), a.Q - 1, a.U, a.N, a.P));
            E7(a.K, b);
            return
        } else {
            a.D == k && (a.D = new C7(D7(a, a.C, a.I, a.M.bottom, a.M.left), a.Q - 1, a.U, a.N, a.P));
            E7(a.D, b);
            return
        } else d.top <= a.C ? d.bottom >= a.C ? c = i : (a.L == k && (a.L = new C7(D7(a, a.M.top, a.M.right, a.C, a.I), a.Q - 1, a.U, a.N, a.P)), E7(a.L, b)) : (a.F == k && (a.F = new C7(D7(a, a.C, a.M.right, a.M.bottom, a.I), a.Q - 1, a.U, a.N, a.P)), E7(a.F, b));
        c && a.G.push(b)
    },
    F7 = function (a, b) {
        var c = [];
        b.left <= a.I ? b.right >= a.I ? b.top <= a.C ? (a.K && c.push.apply(c, F7(a.K, b)), a.L && c.push.apply(c, F7(a.L, b)), b.bottom >= a.C && (a.D && c.push.apply(c, F7(a.D, b)), a.F && c.push.apply(c, F7(a.F, b)))) : (a.D && c.push.apply(c, F7(a.D, b)), a.F && c.push.apply(c, F7(a.F, b))) : b.top <= a.C ? (a.K && c.push.apply(c, F7(a.K, b)), b.bottom >= a.C && a.D && c.push.apply(c, F7(a.D, b))) : a.D && c.push.apply(c, F7(a.D, b)) : b.top <= a.C ? (a.L && c.push.apply(c, F7(a.L, b)), b.bottom >= a.C && a.F && c.push.apply(c, F7(a.F, b))) : a.F && c.push.apply(c, F7(a.F, b));
        for (var d = 0, e = a.G.length; d < e; ++d) z0(b, a.G[d].area) && c.push(a.G[d].data);
        return c
    },
    G7 = function (a, b) {
        var c = l;
        if (b.left <= a.I) if (b.right >= a.I) c = i;
        else if (b.top <= a.C) if (b.bottom >= a.C) c = i;
        else {
            if (a.K) return G7(a.K, b)
        } else {
            if (a.D) return G7(a.D, b)
        } else if (b.top <= a.C) if (b.bottom >= a.C) c = i;
        else {
            if (a.L) return G7(a.L, b)
        } else if (a.F) return G7(a.F, b);
        if (c || !a.V) {
            for (var c = [], d = 0, e = a.G.length; d < e; ++d) yVa(b, a.G[d].area) && c.push(a.G[d].data);
            return c
        }
        return []
    },
    H7 = function (a, b, c) {
        var d = l;
        if (b.left <= a.I) if (b.right >= a.I) d = i;
        else if (b.top <= a.C) if (b.bottom >= a.C) d = i;
        else {
            if (a.K) return H7(a.K, b, c)
        } else {
            if (a.D) return H7(a.D, b, c)
        } else if (b.top <= a.C) if (b.bottom >= a.C) d = i;
        else {
            if (a.L) return H7(a.L, b, c)
        } else if (a.F) return H7(a.F, b, c);
        if (d || !a.V) for (d = 0; d < a.G.length; ++d) yVa(b, a.G[d].area) && c(a.G[d].data) && (a.G.splice(d, 1), --d)
    };

var U2a = function (a, b) {
    this.Qr = a;
    this.visible = i;
    this.callback = b;
    this.listener = h
};

var h3 = function (a, b, c, d, e, f, g) {
    this.type = 0;
    this.P = c;
    this.M = a;
    this.N = b;
    this.C = d || 0;
    this.yf = e || "";
    this.I = g || "";
    this.G = f || 0;
    d = this.I;
    e = this.G;
    f = "v:" + this.yf;
    f = f + ":" + V2a(this.C);
    f += ":";
    f += d;
    f += ":";
    f += W2a(a);
    f += ",";
    f += W2a(b);
    f += ",";
    f += V2a(c);
    f += ",";
    this.D = f += V2a(e >> 6)
};

B(h3, P1);
var W2a = function (a) {
    for (var a = a & 4294967295, b = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#" [a & 63], a = a >> 6; a;) b += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#" [a & 63], a >>= 6;
    return b
},
    V2a = function (a) {
        return "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#" [a & 63]
    };

h3.prototype.equals = function (a) {
    return !!a && this.type == a.type && this.P == a.da() && this.M == a.Ic() && this.N == a.Nc() && this.C == a.hc() && this.yf == a.yf && this.I == a.I && this.G == a.bc()
};

h3.prototype.Bc = r("D");
h3.prototype.clone = function () {
    return I7(this, this.M, this.N, this.P)
};

var X2a = function (a, b) {
    return new h3(a.M, a.N, a.P, a.C, b, a.G, a.I)
},
    I7 = function (a, b, c, d, e) {
        return new h3(b, c, d, a.C, e || a.yf, a.G, a.I)
    },
    R2a = function (a) {
        return 0 == a.C && (!a.yf || "m" == a.yf)
    },
    J7 = function (a) {
        return 0 == a.C && !R2a(a) ? X2a(a, "m") : k
    };

v = h3.prototype;
v.Ic = r("M");
v.Nc = r("N");
v.da = r("P");
v.hc = r("C");
v.bc = r("G");
var Y2a = function (a, b, c) {
    NA.call(this, "OverlayTileGenerated", a);
    this.Hc = b;
    this.Oa = c
};

B(Y2a, NA);
var K7 = function () {
    this.D = new C7(new JB(-90, 180, 90, -180));
    this.C = [];
    this.tz = new c5(200);
    this.rz = new c5(200)
};

B(K7, iB);
var Z2a = function (a) {
    return new v6(0, a.Ic(), a.Nc(), a.da(), 256, 256, a.hc())
},
    $2a = function (a, b) {
        var c = new KB(0, 0, 0, 0);
        q3(b, 256 * a.Ic(), 256 * (a.Nc() + 1), a.da());
        c.top = b.lat;
        c.left = b.lng;
        q3(b, 256 * (a.Ic() + 1), 256 * a.Nc(), a.da());
        c.height = b.lat - c.top;
        c.width = b.lng - c.left;
        return c
    };

K7.prototype.Pa = function (a, b) {
    var c = new U2a(a, b);
    c.listener = aB(a, "boundingChanged", A(this.F, this, c));
    a3a(this, a.C, c);
    L7(this, a.C, 0 < a.points.length || 0 < a.F.length, 0 < a.D.length || 0 < a.G.length)
};

var a3a = function (a, b, c) {
    if (0 < b.length) for (var d = 0; d < b.length; ++d) a.D.insert(LB(b[d]), c);
    else a.C.push(c)
};

K7.prototype.nb = function (a) {
    if (0 < a.C.length) for (var b = 0; b < a.C.length; ++b) H7(this.D, LB(a.C[b]), function (b) {
        return b.Qr == a ? (eB(b.listener), i) : l
    });
    else
    for (b = this.C.length - 1; 0 <= b; --b) this.C[b].Qr == a && (eB(this.C[b].listener), this.C.splice(b, 1));
    L7(this, a.C, 0 < a.points.length || 0 < a.F.length, 0 < a.D.length || 0 < a.G.length)
};

K7.prototype.Rp = function (a) {
    var b = this.C;
    if (0 < a.C.length) for (var b = [], c = 0; c < a.C.length; ++c) b.push.apply(b, G7(this.D, LB(a.C[c])));
    for (c = 0; c < b.length; ++c) b[c].Qr == a && (b[c].visible = l);
    L7(this, a.C, 0 < a.points.length || 0 < a.F.length, 0 < a.D.length || 0 < a.G.length)
};

K7.prototype.ps = function (a) {
    var b = this.C;
    if (0 < a.C.length) for (var b = [], c = 0; c < a.C.length; ++c) b.push.apply(b, G7(this.D, LB(a.C[c])));
    for (c = 0; c < b.length; ++c) b[c].Qr == a && (b[c].visible = i);
    L7(this, a.C, 0 < a.points.length || 0 < a.F.length, 0 < a.D.length || 0 < a.G.length)
};

K7.prototype.F = function (a, b) {
    if (0 < b.C.length) for (var c = 0; c < b.C.length; ++c) H7(this.D, LB(b.C[c]), function (b) {
        return a == b
    });
    else
    for (c = this.C.length - 1; 0 <= c; --c) if (this.C[c] == a) {
        this.C.splice(c, 1);
        break
    }
    a3a(this, b.L, a);
    L7(this, b.C, b.K || b.G, b.I || b.F);
    L7(this, b.L, b.K || b.G, b.I || b.F)
};

var c3a = function (a, b) {
    var c = F7(a.D, LB(b));
    return Kg(c, b3a)
},
    b3a = function (a) {
        return a.visible
    },
    L7 = function (a, b, c, d) {
        for (var e = b.length, f = 0; f < e; ++f) {
            var g = LB(b[f]);
            c && a.tz.UF(A(function (a) {
                a = this.tz.fg(a).OG;
                return z0(g, a)
            }, a));
            d && a.rz.UF(A(function (a) {
                a = this.rz.fg(a).OG;
                return z0(g, a)
            }, a))
        }
    };

var M7 = k,
    d3a = k,
    e3a = function () {
        if (!M7) {
            M7 = {};

            d3a = {};

            for (var a = 0; 65 > a; a++) M7[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), d3a[M7[a]] = a
        }
    };

var f3a = function () {
    this.I = l;
    this.F = this.D = k;
    this.G = l;
    this.C = k;
    ja.URL ? (this.D = A(ja.URL.createObjectURL, ja.URL), this.F = A(ja.URL.revokeObjectURL, ja.URL)) : ja.webkitURL && (this.D = A(ja.webkitURL.createObjectURL, ja.webkitURL), this.F = A(ja.webkitURL.revokeObjectURL, ja.webkitURL));
    if (this.D) {
        try {
            var a = new Uint8Array(100);
            100 == (new ja.Blob([a])).size && (this.I = i)
        } catch (b) {}
        this.I || (this.G = i, ja.BlobBuilder ? this.C = ja.BlobBuilder : ja.WebKitBlobBuilder ? this.C = ja.WebKitBlobBuilder : ja.W8 ? this.C = ja.W8 : this.G = l)
    }
},
    g3a = function (a, b) {
        var c = k;
        if (a.I) c = new ja.Blob([b], {
            type: "image/png"
        });
        else if (a.G) {
            var c = new a.C,
                d = b.buffer;
            if (0 != b.byteOffset || b.byteLength != b.buffer.byteLength) d = b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength);
            c.append(d);
            c = c.getBlob("image/png")
        }
        if (c) d = a.D(c);
        else {
            pa(b) || ca(Error("encodeByteArray takes an array as a parameter"));
            e3a();
            for (var d = M7, e = [], f = 0; f < b.length; f += 3) {
                var g = b[f],
                    j = f + 1 < b.length,
                    m = j ? b[f + 1] : 0,
                    n = f + 2 < b.length,
                    p = n ? b[f + 2] : 0,
                    q = g >> 2,
                    g = (g & 3) << 4 | m >> 4,
                    m = (m & 15) << 2 | p >> 6,
                    p = p & 63;
                n || (p = 64, j || (m = 64));
                e.push(d[q], d[g], d[m], d[p])
            }
            d = "data:image/png;base64," + e.join("")
        }
        e = uq("IMG");
        c && aB(e, "load", A(a.F, a, d));
        e.src = d;
        return e
    };

var Q7 = function (a, b) {
    this.xa = {};

    this.C = a;
    this.D = a.C;
    this.fb = [];
    this.Bb = k;
    this.X = [];
    this.Ba = this.D.La(17);
    this.N = this.D.La(21);
    this.nf = this.D.La(25);
    this.Rb = this.D.La(29);
    this.ca = this.D.La(33);
    this.M = this.D.La(37);
    this.I = this.D.La(41);
    this.L = this.D.La(45);
    this.Q = this.D.La(49);
    this.G = this.D.La(53);
    this.K = this.D.La(57);
    this.V = this.D.La(61);
    this.kf = this.D.La(65);
    this.Jg = this.D.La(69);
    for (var c = this.vm(), d = c, e = 0; e < c; e++) d += 3 * this.rt(this.Lp(e));
    for (var d = new Int32Array(d), f = c, e = 0; e < c; e++) {
        d[e] = f;
        var g = this.Lp(e);
        this.rt(g);
        var j = this.kf,
            j = j + g;
        this.C.od = j;
        g = N7(this.C);
        for (j = 0; j < g; j++) for (var m = N7(this.C), n = N7(this.C), p = N7(this.C), q = i, s = 2; s < m; s++) {
            var t = N7(this.C);
            q ? (d[f++] = n, d[f++] = p) : (d[f++] = p, d[f++] = n);
            d[f++] = t;
            n = p;
            p = t;
            q = !q
        }
    }
    this.ma = d;
    d = c = this.vm();
    for (e = 0; e < c; e++) d += 2 * this.vt(this.Mp(e));
    d = new Int32Array(d);
    f = c;
    for (e = 0; e < c; e++) {
        d[e] = f;
        g = this.vt(this.Mp(e));
        for (j = 0; j < g; j++) d[f++] = N7(this.C), d[f++] = N7(this.C)
    }
    this.ba = d;
    this.ha = 81;
    this.Y = this.D.La(73);
    this.ea = this.D.La(77);
    this.Nf = [];
    this.Ae = [];
    this.ee = [];
    this.Re = [];
    this.yb = [];
    this.Ja = [];
    O7 || (O7 = new f3a);
    b || P7(this)
};

B(Q7, g3);
var O7 = k;
v = Q7.prototype;
v.$g = function () {
    return this.D.La(9)
};

v.ah = function () {
    return this.D.La(13)
};

v.da = function () {
    return this.D.Xb(8)
};

v.hh = function () {
    return this.D.sc(6)
};

v.getWidth = u(256);
v.getHeight = u(256);
v.hc = u(0);
v.bc = u(0);
v.Ik = function () {
    return (this.L - this.I) / 10
};

v.rk = function (a) {
    var b = this.I;
    return this.D.sc(b + 10 * a)
};

v.hs = function (a) {
    var b = this.I;
    return this.D.La(b + 10 * a + 2)
};

v.Ir = function (a) {
    var b = this.I;
    return this.D.sc(b + 10 * a + 8)
};

v.Rv = function (a) {
    var b = this.I;
    return this.D.sc(b + 10 * a + 6)
};

v.Jk = function () {
    return (this.I - this.M) / 8
};

v.Zr = function (a) {
    var b = this.M;
    return this.D.La(b + 8 * a + 2)
};

v.Jr = function (a) {
    var b = this.M;
    return this.D.sc(b + 8 * a + 6)
};

v.Kk = function (a) {
    var b = this.M;
    return this.D.sc(b + 8 * a)
};

v.Ao = function () {
    return (this.Q - this.L) / 8
};

v.ku = function (a) {
    var b = this.L;
    return this.D.sc(b + 8 * a + 2)
};

v.ju = function (a) {
    var b = this.L;
    return this.D.sc(b + 8 * a)
};

v.$z = function (a) {
    var b = this.L;
    return this.D.vi(b + 8 * a + 6)
};

v.bq = function () {
    return (this.G - this.Q) / 10
};

v.JB = function (a) {
    a = this.Ba + this.D.sc(this.Q + 10 * a);
    return new Uint8Array(this.C.D, 0 + a + 2, this.D.sc(a))
};

v.kH = function (a) {
    var b = this.Nf[a];
    if (b) return b;
    b = this.JB(a);
    b = g3a(O7, b);
    return this.Nf[a] = b
};

v.BF = u(0);
v.oB = u(0);
v.pB = u(0);
v.aG = u(1);
v.$F = u(0);
v.rn = function () {
    return (this.K - this.G) / 8
};

v.Bl = u(0);
v.$j = function (a) {
    var b = this.G;
    return this.D.sc(b + 8 * a)
};

v.Ct = function (a) {
    var b = this.G;
    return this.D.La(b + 8 * a + 2)
};

v.kD = function (a) {
    var b = this.G;
    return this.D.Ks(b + 8 * a + 6) / 8
};

v.jD = function (a) {
    var b = this.G;
    return this.D.Ks(b + 8 * a + 7)
};

v.wq = function (a) {
    var b = this.Rb;
    return this.D.La(b + a)
};

v.ap = function (a, b) {
    var c = this.Rb;
    return this.D.Xb(b + (c + a + 4))
};

v.Mm = function (a) {
    var b = this.nf;
    return this.D.La(b + a)
};

v.St = function (a) {
    var b = this.N;
    return this.D.Xb(b + a)
};

var R7 = function (a, b) {
    if (!y(a.fb[b])) {
        var c = a.Ba,
            c = c + b,
            d = a.D.sc(c),
            e = a.C.od;
        a.C.od = c + 2;
        a.fb[b] = h3a(a.C, d);
        a.C.od = e
    }
    return a.fb[b]
};

v = Q7.prototype;
v.Xv = function (a, b) {
    var c = this.N,
        c = c + a + (1 + 2 * b);
    return R7(this, this.D.sc(c))
};

v.Zp = function (a) {
    var b = this.N,
        b = b + a,
        b = b + (1 + 2 * this.D.Xb(b));
    return this.D.Xb(b)
};

v.tv = function (a, b) {
    var c = this.N,
        c = c + a,
        c = c + (1 + 2 * this.D.Xb(c));
    return R7(this, this.D.sc(c + (1 + 2 * b)))
};

v.YG = u(k);
v.Jy = u(k);
v.yC = u(k);
v.zH = u(l);
v.ZG = u(l);
v.lj = function (a) {
    return this.ca + 7 * a
};

v.Cm = function () {
    return (this.M - this.ca) / 7
};

v.Cn = function (a) {
    return this.D.sc(this.lj(a) + 4)
};

v.Qf = function (a) {
    return y(this.X[a]) ? this.X[a] : R7(this, this.D.sc(this.lj(a) + 2))
};

v.Jo = function (a) {
    return this.D.Xb(this.lj(a) + 6)
};

v.Kc = function (a) {
    return R7(this, this.D.sc(this.lj(a)))
};

v.PN = u(15);
v.RN = u(k);
v.SN = u(k);
v.vm = function () {
    return (this.V - this.K) / 8
};

v.Lp = function (a) {
    var b = this.K;
    return this.D.sc(b + 8 * a + 4)
};

v.Mp = function (a) {
    var b = this.K;
    return this.D.sc(b + 8 * a + 6)
};

v.gB = function (a) {
    var b = this.K;
    return this.D.sc(b + 8 * a)
};

v.hB = function (a) {
    var b = this.K;
    return this.D.sc(b + 8 * a + 2)
};

v.rt = function (a) {
    var b = this.kf;
    this.C.od = b + a;
    for (var a = N7(this.C), c = b = 0; c < a; c++) for (var d = N7(this.C), b = b + (d - 2), e = 0; e < d; e++) for (var f = this.C; 128 <= f.C.Xb(f.od++););
    return b
};

v.OF = function (a, b, c) {
    b = this.ma[this.ma[b] + c];
    c = this.V;
    c = c + a + 6 * b;
    return this.D.vi(c) / 16
};

v.PF = function (a, b, c) {
    b = this.ma[this.ma[b] + c];
    c = this.V;
    c = c + a + (6 * b + 2);
    return this.D.vi(c) / 16
};

v.QF = function (a, b, c) {
    b = this.ma[this.ma[b] + c];
    c = this.V;
    c = c + a + (6 * b + 4);
    return this.D.vi(c) / 16
};

v.vt = function (a) {
    var b = this.Jg;
    this.C.od = b + a;
    return N7(this.C)
};

v.lL = function (a, b, c) {
    b = this.ba[this.ba[b] + c];
    c = this.V;
    c = c + a + 6 * b;
    return this.D.vi(c) / 16
};

v.mL = function (a, b, c) {
    b = this.ba[this.ba[b] + c];
    c = this.V;
    c = c + a + (6 * b + 2);
    return this.D.vi(c) / 16
};

v.nL = function (a, b, c) {
    b = this.ba[this.ba[b] + c];
    c = this.V;
    c = c + a + (6 * b + 4);
    return this.D.vi(c) / 16
};

v.$O = function () {
    return this.D.sc(this.ha)
};

v.DG = function () {
    if (this.Bb) return this.Bb;
    var a = this.Bb = [],
        b = this.$O();
    this.C.od = this.ha + 2;
    for (var c = 0; c < b; ++c) {
        var d = this.lR();
        i7(this, B3(d));
        a.push(d)
    }
    return a
};

v.lR = function () {
    for (var a = new A3, b = S7(this.C), c = 0; c < b; c++) a.C.push(this.BE());
    b = S7(this.C);
    for (c = 0; c < b; c++) a.D.push(i3a(this));
    b = S7(this.C);
    for (c = 0; c < b; c++) a.rd = j3a(this);
    b = S7(this.C);
    for (c = 0; c < b; c++) a.xd.Bi = S7(this.C), a.xd.nt = S7(this.C), a.xd.C = T7(this.C), a.F.C = T7(this.C), a.xd.D = U7(this.C), a.xd.sr = U7(this.C);
    b = S7(this.C);
    for (c = 0; c < b; c++) a.ef = k3a(this);
    b = S7(this.C);
    for (c = 0; c < b; c++) {
        var d = U7(this.C);
        a.I.push(R7(this, d))
    }
    return a
};

v.BE = function () {
    var a = new w3;
    a.C = T7(this.C);
    a.width = S7(this.C) / 8;
    var b = S7(this.C);
    if (0 < b) {
        for (var c = [], d = 0; d < b; d++) c.push(S7(this.C) / 8);
        1 == c.length % 2 && c.push.apply(c, c.slice());
        a.D = c
    }
    b = S7(this.C);
    a.K = 0 != (b & 1);
    a.I = 0 != (b & 2);
    return a
};

var i3a = function (a) {
    var b = new y3;
    b.C = T7(a.C);
    return b
},
    j3a = function (a) {
        var b = new z3;
        b.fillStyle.C = T7(a.C);
        b.strokeStyle.C = T7(a.C);
        b.strokeStyle.width = S7(a.C) / 8;
        return b
    },
    k3a = function (a) {
        var b = new w3;
        b.C = T7(a.C);
        b.width = S7(a.C) / 8;
        return b
    },
    l3a = function (a) {
        return a >> 1 ^ -(a & 1)
    },
    m3a = function (a, b, c) {
        var d = 0,
            e = 0,
            f = c;
        if (!c || c.length < 2 * b) f = new Float32Array(2 * b);
        a = a.C;
        for (c = 0; c < b; c++) {
            var g = l3a(N7(a)),
                j = l3a(N7(a)),
                d = d + g,
                e = e + j;
            f[2 * c] = d / 16;
            f[2 * c + 1] = e / 16
        }
        return f
    };

v = Q7.prototype;
v.Ar = function (a, b) {
    this.C.od = this.nf + a;
    var c = V7(this.C);
    return m3a(this, c, b)
};

v.Gz = function (a, b) {
    var c = this.Rb + a,
        d = this.D.La(c);
    this.C.od = c + 4 + d;
    return m3a(this, 3 * d, b)
};

v.kq = function (a) {
    a = this.Ae[a];
    return a === h ? 10 : a
};

v.jq = function (a) {
    return this.ee[a] || 0
};

v.ED = function (a) {
    return this.Re[a] || 0
};

v.nz = function (a, b) {
    var c = h,
        d = this.yb[a];
    d && (c = d[b]);
    return c === h ? 10 : c
};

v.mz = function (a, b) {
    return !this.Ja[a] ? 0 : this.Ja[a][b] || 0
};

v.xH = u(k);
v.dM = u(k);
v.CJ = u(k);
var P7 = function (a) {
    if (z6(a)) {
        for (var b = a.DG(), c = {}, d = 0; d < b.length; ++d) for (var e = b[d], f = 0; f < e.I.length; ++f) c[e.I[f]] = e;
        for (d = 0; d < a.rn(); ++d) if (e = c[a.Qf(a.$j(d))]) a.Ae[d] = e.xd.Bi, a.ee[d] = e.xd.nt, a.Re[d] = e.xd.sr;
        for (d = 0; d < a.Bl(); ++d) {
            b = a.yo(d);
            for (f = 0; f < a.kr(b); ++f) {
                var g = a.Hp(b, f);
                a.yb[g] = [];
                a.Ja[g] = [];
                for (var j = 0; j < a.jr(g); ++j) if (e = c[a.ty(g, j)]) a.yb[g][j] = e.xd.Bi, a.Ja[g][j] = e.xd.nt
            }
        }
    }
};

var W7 = function (a, b) {
    Q7.call(this, a, i);
    this.qa = this.D.La(81);
    this.Ta = this.D.La(85);
    this.Va = this.D.La(89);
    this.U = this.D.La(93);
    this.ha = 97;
    this.F = this.Ka = this.Wb = this.P = k;
    b || P7(this)
};

B(W7, Q7);
v = W7.prototype;
v.Ik = function () {
    return (this.L - this.I) / 12
};

v.rk = function (a) {
    var b = this.I;
    return this.D.La(b + 12 * a)
};

v.hs = function (a) {
    var b = this.I;
    return this.D.La(b + 12 * a + 4)
};

v.Jk = function () {
    return (this.I - this.M) / 10
};

v.Zr = function (a) {
    var b = this.M;
    return this.D.La(b + 10 * a + 4)
};

v.Kk = function (a) {
    var b = this.M;
    return this.D.La(b + 10 * a)
};

v.Ao = function () {
    return (this.Q - this.L) / 12
};

v.ku = function (a) {
    var b = this.L;
    return this.D.La(b + 12 * a + 4)
};

v.ju = function (a) {
    var b = this.L;
    return this.D.La(b + 12 * a)
};

v.$z = function (a) {
    var b = this.L;
    return this.D.vi(b + 12 * a + 10)
};

v.bq = function () {
    return (this.G - this.Q) / 12
};

v.JB = function (a) {
    a = this.Ba + this.D.La(this.Q + 12 * a);
    return new Uint8Array(this.C.D, 0 + a + 2, this.D.sc(a))
};

v.rn = function () {
    return (this.K - this.G) / 10
};

v.$j = function (a) {
    var b = this.G;
    return this.D.La(b + 10 * a)
};

v.Ct = function (a) {
    var b = this.G;
    return this.D.La(b + 10 * a + 4)
};

v.kD = function (a) {
    var b = this.G;
    return this.D.Ks(b + 10 * a + 8) / 8
};

v.jD = function (a) {
    var b = this.G;
    return this.D.Ks(b + 10 * a + 9)
};

v.Xv = function (a, b) {
    var c = this.N,
        c = c + a + (1 + 4 * b);
    return R7(this, this.D.La(c))
};

v.Zp = function (a) {
    var b = this.N,
        b = b + a,
        b = b + (1 + 4 * this.D.Xb(b));
    return this.D.Xb(b)
};

v.lj = function (a) {
    return this.ca + 21 * a
};

v.Cm = function () {
    return (this.M - this.ca) / 21
};

v.Cn = function (a) {
    return this.D.La(this.lj(a) + 8)
};

v.Qf = function (a) {
    return y(this.X[a]) ? this.X[a] : R7(this, this.D.La(this.lj(a) + 4))
};

v.Jo = function (a) {
    return this.D.Xb(this.lj(a) + 12)
};

v.Kc = function (a) {
    return R7(this, this.D.La(this.lj(a)))
};

v.vm = function () {
    return (this.V - this.K) / 16
};

v.Lp = function (a) {
    var b = this.K;
    return this.D.La(b + 16 * a + 8)
};

v.Mp = function (a) {
    var b = this.K;
    return this.D.La(b + 16 * a + 12)
};

v.gB = function (a) {
    var b = this.K;
    return this.D.La(b + 16 * a)
};

v.hB = function (a) {
    var b = this.K;
    return this.D.La(b + 16 * a + 4)
};

v.lR = function () {
    for (var a = new A3, b = S7(this.C), c = 0; c < b; c++) a.C.push(this.BE());
    b = S7(this.C);
    for (c = 0; c < b; c++) a.D.push(i3a(this));
    b = S7(this.C);
    for (c = 0; c < b; c++) a.rd = j3a(this);
    b = S7(this.C);
    for (c = 0; c < b; c++) a.xd.Bi = S7(this.C), a.xd.nt = S7(this.C), a.xd.C = T7(this.C), a.F.C = T7(this.C), a.xd.D = U7(this.C), a.xd.sr = U7(this.C);
    b = S7(this.C);
    for (c = 0; c < b; c++) a.ef = k3a(this);
    b = S7(this.C);
    for (c = 0; c < b; c++) {
        var d = V7(this.C);
        a.I.push(R7(this, d))
    }
    return a
};

v.HN = function (a) {
    return this.Ka ? !! this.Ka[a] : l
};

v.uL = function () {
    return (this.ea - this.Y) / 8
};

v.vL = function (a) {
    var b = this.Y;
    return this.D.La(b + 8 * a)
};

v.xL = function () {
    return (this.qa - this.ea) / 4
};

v.BE = function () {
    var a = new w3;
    a.C = T7(this.C);
    a.width = N7(this.C) / 8;
    var b = S7(this.C);
    if (0 < b) {
        for (var c = [], d = 0; d < b; d++) c.push(S7(this.C) / 4);
        1 == c.length % 2 && c.push.apply(c, c.slice());
        a.D = c
    }
    b = S7(this.C);
    a.K = 0 != (b & 1);
    a.I = 0 != (b & 2);
    b = S7(this.C);
    a.F = b & 128 ? 1 : 0;
    a.L = (b & 127) / 128;
    a.G = S7(this.C) / 8;
    return a
};

v.Bl = function () {
    return (this.Ta - this.qa) / 15
};

v.wH = function (a) {
    return this.D.La(this.qa + 15 * a)
};

v.oz = function (a) {
    var b = this.qa;
    return this.D.La(b + 15 * a + 4)
};

v.yo = function (a) {
    return this.D.La(this.qa + 15 * a + 11)
};

v.kr = function (a) {
    return this.D.Xb(this.Ta + a)
};

v.yH = function (a, b) {
    var c = this.Ta + a;
    return this.D.La(c + (8 * b + 1))
};

v.Hp = function (a, b) {
    var c = this.Ta + a;
    return this.D.La(c + (8 * b + 1) + 4)
};

v.AH = function (a) {
    return this.D.Xb(this.Va + a)
};

v.BH = function (a, b) {
    return 15 & this.D.Xb(this.Va + a + 1 + b) >> 4
};

v.CH = function (a, b) {
    return 3 & this.D.Xb(this.Va + a + 1 + b) >> 2
};

v.DH = function (a, b) {
    return 3 & this.D.Xb(this.Va + a + 1 + b)
};

v.jr = function (a) {
    return this.D.Xb(this.U + a)
};

v.Ny = function (a, b) {
    var c = this.U + a + 1;
    return 3 & this.D.Xb(c + 11 * b)
};

v.cP = function (a, b) {
    var c = this.U + a + 1;
    return !!(128 & this.D.Xb(c + 11 * b))
};

v.ty = function (a, b) {
    var c = this.U + a + 1;
    return R7(this, this.D.La(c + 11 * b + 1))
};

v.Oy = function (a, b) {
    var c = this.U + a + 1;
    return R7(this, this.D.La(c + 11 * b + 5))
};

v.wv = r("F");
v.P1 = function (a) {
    if (this.F !== a) if (this.F && !(this.F.$g() != a.$g() || this.F.ah() != a.ah() || this.F.da() != a.da() || this.F.hh() != a.hh())) this.F = a;
    else {
        this.F = a;
        for (var b = {}, c = a.Cm(), d = 0; d < c; ++d) if (a.tL(d)) {
            var e = a.wL(d),
                f = b[e];
            f || (f = [], b[e] = f);
            f.push(d)
        }
        this.Ka = [];
        this.Wb = [];
        a = this.xL();
        for (c = 0; c < a; ++c) if (d = b[this.VR(c)], y(d)) for (e = 0; e < d.length; ++e) f = d[e], this.Wb.push(f), this.Ka[f] = i;
        this.P = {};

        c = [];
        a = [];
        d = this.uL();
        for (e = 0; e < d; ++e) {
            var f = this.vL(e),
                g = b[this.UR(e)],
                g = y(g) ? g[0] : h;
            y(g) ? (y(c[g]) || (c[g] = []), c[g].push(f)) : a.push(f)
        }
        b = n3a(this, c, A(this.F.Ik, this.F), A(this.F.rk, this.F), A(this.F.Ir, this.F));
        c = n3a(this, c, A(this.F.Jk, this.F), A(this.F.Kk, this.F), A(this.F.Jr, this.F));
        b = Math.max(c, b) + 2;
        for (c = 0; c < a.length; ++c) this.P[a[c]] = b, b += 2
    }
};

v.XP = r("Wb");
v.wL = function (a) {
    a = this.D.La(this.lj(a) + 13);
    return -2147483648 != a ? a : k
};

v.tL = function (a) {
    return -2147483648 != this.D.La(this.lj(a) + 13)
};

v.UR = function (a) {
    var b = this.Y;
    return this.D.La(b + 8 * a + 4)
};

v.VR = function (a) {
    var b = this.ea;
    return this.D.La(b + 4 * a)
};

v.Ir = function (a) {
    var b = this.rk(a);
    if (this.P && y(this.P[b])) return this.P[b];
    if (this.F) return 65535;
    b = this.I;
    return this.D.sc(b + 12 * a + 10)
};

v.Rv = function (a) {
    var b = this.rk(a);
    if (this.P && y(this.P[b])) return this.P[b] - 1;
    if (this.F) return 65534;
    b = this.I;
    return this.D.sc(b + 12 * a + 8)
};

v.Jr = function (a) {
    var b = this.Kk(a);
    if (this.P && y(this.P[b])) return this.P[b];
    b = this.M;
    return this.D.sc(b + 10 * a + 8)
};

v.Jy = function (a, b) {
    var c = this.N,
        c = c + a,
        c = c + (1 + 4 * this.D.Xb(c)),
        c = c + (1 + 6 * b);
    return new Bw(this.D.Xb(c + 4), this.D.Xb(c + 5))
};

v.tv = function (a, b) {
    var c = this.N,
        c = c + a,
        c = c + (1 + 4 * this.D.Xb(c));
    return R7(this, this.D.La(c + (1 + 6 * b)))
};

var n3a = function (a, b, c, d, e) {
    for (var f = 0, c = c(), g = 0; g < c; ++g) {
        var j = d(g),
            m = e(g);
        m > f && (f = m);
        j = b[j];
        if (y(j)) for (var m = m - 2, n = 0; n < j.length; ++n) a.P[j[n]] = m
    }
    return f
};

var o3a = function (a, b) {
    W7.call(this, a, i);
    this.ha = 105;
    b || P7(this)
};

B(o3a, W7);
var X7 = function (a, b) {
    Q7.call(this, a, i);
    this.qa = this.D.La(81);
    this.Ta = this.D.La(85);
    this.Va = this.D.La(89);
    this.U = this.D.La(93);
    this.ha = 101;
    this.F = this.Ka = this.Wb = this.P = k;
    this.Td = this.D.La(97);
    this.Pc = [];
    b || P7(this)
};

B(X7, Q7);
v = X7.prototype;
v.Ik = function () {
    return (this.L - this.I) / 12
};

v.rk = function (a) {
    var b = this.I;
    return this.D.La(b + 12 * a)
};

v.hs = function (a) {
    var b = this.I;
    return this.D.La(b + 12 * a + 4)
};

v.Jk = function () {
    return (this.I - this.M) / 10
};

v.Zr = function (a) {
    var b = this.M;
    return this.D.La(b + 10 * a + 4)
};

v.Kk = function (a) {
    var b = this.M;
    return this.D.La(b + 10 * a)
};

v.Ao = function () {
    return (this.Q - this.L) / 12
};

v.ku = function (a) {
    var b = this.L;
    return this.D.La(b + 12 * a + 4)
};

v.ju = function (a) {
    var b = this.L;
    return this.D.La(b + 12 * a)
};

v.$z = function (a) {
    var b = this.L;
    return this.D.vi(b + 12 * a + 10)
};

v.bq = function () {
    return (this.G - this.Q) / 12
};

v.JB = function (a) {
    var b = this.D.La(this.Q + 12 * a);
    if (0 <= b) return a = this.Ba + b, b = this.D.sc(a), a = new Uint8Array(this.C.D, 0 + (a + 2), b);
    a = this.D.La(this.Q + 12 * a + 4);
    return 0 <= a ? (a = this.Td + a, b = this.D.KJ(a), a += 4, a = new Uint8Array(this.C.D, 0 + a, b)) : k
};

v.rn = function () {
    return (this.K - this.G) / 14
};

v.$j = function (a) {
    var b = this.G;
    return this.D.La(b + 14 * a)
};

v.Ct = function (a) {
    var b = this.G;
    return this.D.La(b + 14 * a + 4)
};

v.kD = function (a) {
    var b = this.G;
    return this.D.Ks(b + 14 * a + 8) / 8
};

v.jD = function (a) {
    var b = this.G;
    return this.D.Ks(b + 14 * a + 9)
};

v.kq = function (a) {
    return this.D.Xb(this.G + 14 * a + 10)
};

v.jq = function (a) {
    return this.D.Xb(this.G + 14 * a + 11)
};

v.ED = function (a) {
    return this.D.vi(this.G + 14 * a + 12) / 256
};

v.Xv = function (a, b) {
    var c = this.N,
        c = c + a + (1 + 4 * b);
    return R7(this, this.D.La(c))
};

v.Zp = function (a) {
    var b = this.N,
        b = b + a,
        b = b + (1 + 4 * this.D.Xb(b));
    return this.D.Xb(b)
};

v.lj = function (a) {
    return this.ca + 25 * a
};

v.Cm = function () {
    return (this.M - this.ca) / 25
};

v.Cn = function (a) {
    return this.D.La(this.lj(a) + 8)
};

v.Qf = function (a) {
    return y(this.X[a]) ? this.X[a] : R7(this, this.D.La(this.lj(a) + 4))
};

v.Jo = function (a) {
    return this.D.Xb(this.lj(a) + 12)
};

v.Kc = function (a) {
    return R7(this, this.D.La(this.lj(a)))
};

v.vm = function () {
    return (this.V - this.K) / 16
};

v.Lp = function (a) {
    var b = this.K;
    return this.D.La(b + 16 * a + 8)
};

v.Mp = function (a) {
    var b = this.K;
    return this.D.La(b + 16 * a + 12)
};

v.gB = function (a) {
    var b = this.K;
    return this.D.La(b + 16 * a)
};

v.hB = function (a) {
    var b = this.K;
    return this.D.La(b + 16 * a + 4)
};

v.lR = function () {
    for (var a = new A3, b = S7(this.C), c = 0; c < b; c++) a.C.push(this.BE());
    b = S7(this.C);
    for (c = 0; c < b; c++) a.D.push(i3a(this));
    b = S7(this.C);
    for (c = 0; c < b; c++) a.rd = j3a(this);
    b = S7(this.C);
    for (c = 0; c < b; c++) a.xd.C = T7(this.C), a.F.C = T7(this.C);
    b = S7(this.C);
    for (c = 0; c < b; c++) a.ef = k3a(this);
    b = S7(this.C);
    for (c = 0; c < b; c++) {
        var d = V7(this.C);
        a.I.push(R7(this, d))
    }
    return a
};

v.HN = function (a) {
    return this.Ka ? !! this.Ka[a] : l
};

v.uL = function () {
    return (this.ea - this.Y) / 8
};

v.vL = function (a) {
    var b = this.Y;
    return this.D.La(b + 8 * a)
};

v.xL = function () {
    return (this.qa - this.ea) / 4
};

v.BE = function () {
    var a = new w3;
    a.C = T7(this.C);
    a.width = N7(this.C) / 8;
    var b = S7(this.C);
    if (0 < b) {
        for (var c = [], d = 0; d < b; d++) c.push(S7(this.C) / 4);
        1 == c.length % 2 && c.push.apply(c, c.slice());
        a.D = c
    }
    b = S7(this.C);
    a.K = 0 != (b & 1);
    a.I = 0 != (b & 2);
    b = S7(this.C);
    a.F = b & 128 ? 1 : 0;
    a.L = (b & 127) / 128;
    a.G = S7(this.C) / 8;
    return a
};

v.Bl = function () {
    return (this.Ta - this.qa) / 19
};

v.wH = function (a) {
    return this.D.La(this.qa + 19 * a)
};

v.oz = function (a) {
    var b = this.qa;
    return this.D.La(b + 19 * a + 4)
};

v.yo = function (a) {
    return this.D.La(this.qa + 19 * a + 11)
};

v.AV = function (a) {
    var b = this.qa,
        b = b + 19 * a,
        a = this.D.vi(b + 15),
        b = this.D.vi(b + 17);
    return 0 == a && 0 == b ? k : new Cw(a / 16, b / 16)
};

v.kr = function (a) {
    return this.D.Xb(this.Ta + a)
};

v.yH = function (a, b) {
    var c = this.Ta + a;
    return this.D.La(c + (8 * b + 1))
};

v.Hp = function (a, b) {
    var c = this.Ta + a;
    return this.D.La(c + (8 * b + 1) + 4)
};

v.AH = function (a) {
    return this.D.Xb(this.Va + a)
};

v.BH = function (a, b) {
    return 15 & this.D.Xb(this.Va + a + 1 + b) >> 4
};

v.CH = function (a, b) {
    return 3 & this.D.Xb(this.Va + a + 1 + b) >> 2
};

v.DH = function (a, b) {
    return 3 & this.D.Xb(this.Va + a + 1 + b)
};

v.jr = function (a) {
    return this.D.Xb(this.U + a) & 63
};

v.Ny = function (a, b) {
    var c = this.U + a + 1;
    return 127 & this.D.Xb(c + 13 * b)
};

v.cP = function (a, b) {
    var c = this.U + a + 1;
    return !!(128 & this.D.Xb(c + 13 * b))
};

v.ty = function (a, b) {
    var c = this.U + a + 1;
    return R7(this, this.D.La(c + 13 * b + 1))
};

v.nz = function (a, b) {
    var c = this.U + a + 1;
    return this.D.Xb(c + 13 * b + 9)
};

v.mz = function (a, b) {
    var c = this.U + a + 1;
    return this.D.Xb(c + 13 * b + 10)
};

v.Oy = function (a, b) {
    var c = this.U + a + 1;
    return R7(this, this.D.La(c + 13 * b + 5))
};

v.xH = function (a, b) {
    var c = this.U + a + 1,
        c = c + 13 * b;
    return new Bw(this.D.Xb(c + 9), this.D.Xb(c + 10))
};

v.dM = function (a, b) {
    var c = this.U + a + 1,
        c = this.D.La(c + 13 * b + 5),
        d = this.Pc[c];
    if (!d) {
        var d = this.Td + c,
            e = this.D.KJ(d),
            d = new Uint8Array(this.C.D, 0 + (d + 4), e),
            d = g3a(O7, d);
        this.Pc[c] = d
    }
    return d
};

v.CJ = function (a, b) {
    var c = this.U + a + 1,
        c = c + 13 * b;
    return new Bw(this.D.sc(c + 9), this.D.sc(c + 11))
};

v.wv = r("F");
v.P1 = function (a) {
    if (this.F !== a) if (this.F && !(this.F.$g() != a.$g() || this.F.ah() != a.ah() || this.F.da() != a.da() || this.F.hh() != a.hh())) this.F = a;
    else {
        this.F = a;
        for (var b = {}, c = a.Cm(), d = 0; d < c; ++d) if (a.tL(d)) {
            var e = a.wL(d),
                f = b[e];
            f || (f = [], b[e] = f);
            f.push(d)
        }
        this.Ka = [];
        this.Wb = [];
        a = this.xL();
        for (c = 0; c < a; ++c) if (d = b[this.VR(c)], y(d)) for (e = 0; e < d.length; ++e) f = d[e], this.Wb.push(f), this.Ka[f] = i;
        this.P = {};

        c = [];
        a = [];
        d = this.uL();
        for (e = 0; e < d; ++e) {
            var f = this.vL(e),
                g = b[this.UR(e)],
                g = y(g) ? g[0] : h;
            y(g) ? (y(c[g]) || (c[g] = []), c[g].push(f)) : a.push(f)
        }
        b = p3a(this, c, A(this.F.Ik, this.F), A(this.F.rk, this.F), A(this.F.Ir, this.F));
        c = p3a(this, c, A(this.F.Jk, this.F), A(this.F.Kk, this.F), A(this.F.Jr, this.F));
        b = Math.max(c, b) + 2;
        for (c = 0; c < a.length; ++c) this.P[a[c]] = b, b += 2
    }
};

v.XP = r("Wb");
v.wL = function (a) {
    a = this.D.La(this.lj(a) + 13);
    return -2147483648 != a ? a : k
};

v.tL = function (a) {
    return -2147483648 != this.D.La(this.lj(a) + 13)
};

v.UR = function (a) {
    var b = this.Y;
    return this.D.La(b + 8 * a + 4)
};

v.VR = function (a) {
    var b = this.ea;
    return this.D.La(b + 4 * a)
};

v.Ir = function (a) {
    var b = this.rk(a);
    if (this.P && y(this.P[b])) return this.P[b];
    if (this.F) return 65535;
    b = this.I;
    return this.D.sc(b + 12 * a + 10)
};

v.Rv = function (a) {
    var b = this.rk(a);
    if (this.P && y(this.P[b])) return this.P[b] - 1;
    if (this.F) return 65534;
    b = this.I;
    return this.D.sc(b + 12 * a + 8)
};

v.Jr = function (a) {
    var b = this.Kk(a);
    if (this.P && y(this.P[b])) return this.P[b];
    b = this.M;
    return this.D.sc(b + 10 * a + 8)
};

v.Jy = function (a, b) {
    var c = this.N,
        c = c + a,
        c = c + (1 + 4 * this.D.Xb(c)),
        c = c + (1 + 6 * b);
    return new Bw(this.D.Xb(c + 4), this.D.Xb(c + 5))
};

v.tv = function (a, b) {
    var c = this.N,
        c = c + a,
        c = c + (1 + 4 * this.D.Xb(c));
    return R7(this, this.D.La(c + (1 + 6 * b)))
};

var p3a = function (a, b, c, d, e) {
    for (var f = 0, c = c(), g = 0; g < c; ++g) {
        var j = d(g),
            m = e(g);
        m > f && (f = m);
        j = b[j];
        if (y(j)) for (var m = m - 2, n = 0; n < j.length; ++n) a.P[j[n]] = m
    }
    return f
};

var q3a = function (a, b) {
    X7.call(this, a, i);
    this.ha = 109;
    b || P7(this)
};

B(q3a, X7);
var Y7 = function (a, b) {
    this.xa = {};

    this.C = a;
    this.D = a.C;
    this.Y = [];
    this.ca = k;
    this.Ta = [];
    this.ha = this.D.La(17);
    this.N = this.D.La(21);
    this.Va = this.D.La(25);
    this.ea = this.D.La(29);
    this.Q = this.D.La(33);
    this.U = this.D.La(37);
    this.K = this.D.La(41);
    this.P = this.D.La(45);
    this.X = this.D.La(49);
    this.I = this.D.La(53);
    this.L = this.D.La(57);
    this.F = this.D.La(61);
    this.Ka = this.D.La(65);
    this.Bb = this.D.La(69);
    for (var c = this.vm(), d = c, e = 0; e < c; e++) d += 3 * this.rt(this.Lp(e));
    for (var d = new Int32Array(d), f = c, e = 0; e < c; e++) {
        d[e] = f;
        var g = this.Lp(e);
        this.rt(g);
        var j = this.Ka,
            j = j + g;
        this.C.od = j;
        g = N7(this.C);
        for (j = 0; j < g; j++) for (var m = N7(this.C), n = N7(this.C), p = N7(this.C), q = i, s = 2; s < m; s++) {
            var t = N7(this.C);
            q ? (d[f++] = n, d[f++] = p) : (d[f++] = p, d[f++] = n);
            d[f++] = t;
            n = p;
            p = t;
            q = !q
        }
    }
    this.M = d;
    d = c = this.vm();
    for (e = 0; e < c; e++) d += 2 * this.vt(this.Mp(e));
    d = new Int32Array(d);
    f = c;
    for (e = 0; e < c; e++) {
        d[e] = f;
        g = this.vt(this.Mp(e));
        for (j = 0; j < g; j++) d[f++] = N7(this.C), d[f++] = N7(this.C)
    }
    this.G = d;
    this.ma = this.D.La(73);
    this.yb = this.D.La(77);
    this.fb = [];
    this.Ba = [];
    this.qa = [];
    this.Ja = [];
    this.ba = [];
    this.V = [];
    r3a || (r3a = new f3a);
    if (!b && z6(this)) {
        g = this.DG();
        c = {};

        for (e = 0; e < g.length; ++e) {
            d = g[e];
            for (f = 0; f < d.I.length; ++f) c[d.I[f]] = d
        }
        for (e = 0; e < this.rn(); ++e) if (d = c[this.Qf(this.$j(e))]) this.Ba[e] = d.xd.Bi, this.qa[e] = d.xd.nt, this.Ja[e] = d.xd.sr;
        for (e = 0; e < this.Bl(); ++e) {
            g = this.yo(e);
            for (f = 0; f < this.kr(g); ++f) {
                j = this.Hp(g, f);
                this.ba[j] = [];
                this.V[j] = [];
                for (m = 0; m < this.jr(j); ++m) if (d = c[this.ty(j, m)]) this.ba[j][m] = d.xd.Bi, this.V[j][m] = d.xd.nt
            }
        }
    }
};

B(Y7, g3);
var r3a = k;
v = Y7.prototype;
v.$g = function () {
    return this.D.La(9)
};

v.ah = function () {
    return this.D.La(13)
};

v.da = function () {
    return this.D.Xb(8)
};

v.hh = function () {
    return this.D.sc(6)
};

v.getWidth = u(256);
v.getHeight = u(256);
v.hc = u(0);
v.bc = u(0);
v.Ik = function () {
    return (this.P - this.K) / 10
};

v.rk = function (a) {
    var b = this.K;
    return this.D.sc(b + 10 * a)
};

v.hs = function (a) {
    var b = this.K;
    return this.D.La(b + 10 * a + 2)
};

v.Ir = function (a) {
    var b = this.K;
    return this.D.sc(b + 10 * a + 8)
};

v.Rv = function (a) {
    var b = this.K;
    return this.D.sc(b + 10 * a + 6)
};

v.Jk = function () {
    return (this.K - this.U) / 8
};

v.Zr = function (a) {
    var b = this.U;
    return this.D.La(b + 8 * a + 2)
};

v.Jr = function (a) {
    var b = this.U;
    return this.D.sc(b + 8 * a + 6)
};

v.Kk = function (a) {
    var b = this.U;
    return this.D.sc(b + 8 * a)
};

v.Ao = function () {
    return (this.X - this.P) / 8
};

v.ku = function (a) {
    var b = this.P;
    return this.D.sc(b + 8 * a + 2)
};

v.ju = function (a) {
    var b = this.P;
    return this.D.sc(b + 8 * a)
};

v.$z = function (a) {
    var b = this.P;
    return this.D.vi(b + 8 * a + 6)
};

v.bq = function () {
    return (this.I - this.X) / 10
};

v.kH = function (a) {
    var b = this.fb[a];
    if (b) return b;
    b = this.JB(a);
    b = g3a(r3a, b);
    return this.fb[a] = b
};

v.JB = function (a) {
    a = this.ha + this.D.sc(this.X + 10 * a);
    return new Uint8Array(this.C.D, 0 + a + 2, this.D.sc(a))
};

v.BF = u(0);
v.oB = u(0);
v.pB = u(0);
v.aG = u(1);

v.$F = u(0);
v.rn = function () {
    return (this.L - this.I) / 8
};

v.Bl = u(0);
v.$j = function (a) {
    var b = this.I;
    return this.D.sc(b + 8 * a)
};

v.Ct = function (a) {
    var b = this.I;
    return this.D.La(b + 8 * a + 2)
};

v.kD = function (a) {
    var b = this.I;
    return this.D.Ks(b + 8 * a + 6) / 8
};

v.jD = function (a) {
    var b = this.I;
    return this.D.Ks(b + 8 * a + 7)
};

v.wq = function (a) {
    var b = this.ea;
    return this.D.La(b + a)
};

v.ap = function (a, b) {
    var c = this.ea;
    return this.D.Xb(b + (c + a + 4))
};

v.Mm = function (a) {
    var b = this.Va;
    return this.D.La(b + a)
};

v.St = function (a) {
    var b = this.N;
    return this.D.Xb(b + a)
};

var Z7 = function (a, b) {
    if (!y(a.Y[b])) {
        var c = a.ha,
            c = c + b,
            d = a.D.sc(c),
            e = a.C.od;
        a.C.od = c + 2;
        a.Y[b] = h3a(a.C, d);
        a.C.od = e
    }
    return a.Y[b]
};

v = Y7.prototype;
v.Xv = function (a, b) {
    var c = this.N,
        c = c + a + (1 + 2 * b);
    return Z7(this, this.D.sc(c))
};

v.Zp = function (a) {
    var b = this.N,
        b = b + a,
        b = b + (1 + 2 * this.D.Xb(b));
    return this.D.Xb(b)
};

v.YG = u(k);
v.yC = u(k);
v.zH = u(l);
v.ZG = u(l);
v.Cm = function () {
    return (this.U - this.Q) / 7
};

v.Cn = function (a) {
    return this.D.sc(this.Q + 7 * a + 4)
};

v.Qf = function (a) {
    return y(this.Ta[a]) ? this.Ta[a] : Z7(this, this.D.sc(this.Q + 7 * a + 2))
};

v.Jo = function (a) {
    return this.D.Xb(this.Q + 7 * a + 6)
};

v.Kc = function (a) {
    return Z7(this, this.D.sc(this.Q + 7 * a))
};

v.PN = u(15);
v.RN = u(k);
v.SN = u(k);
v.vm = function () {
    return (this.F - this.L) / 8
};

v.Lp = function (a) {
    var b = this.L;
    return this.D.sc(b + 8 * a + 4)
};

v.Mp = function (a) {
    var b = this.L;
    return this.D.sc(b + 8 * a + 6)
};

v.gB = function (a) {
    var b = this.L;
    return this.D.sc(b + 8 * a)
};

v.hB = function (a) {
    var b = this.L;
    return this.D.sc(b + 8 * a + 2)
};

v.rt = function (a) {
    var b = this.Ka;
    this.C.od = b + a;
    for (var a = N7(this.C), c = b = 0; c < a; c++) for (var d = N7(this.C), b = b + (d - 2), e = 0; e < d; e++) for (var f = this.C; 128 <= f.C.Xb(f.od++););
    return b
};

v.OF = function (a, b, c) {
    b = this.M[this.M[b] + c];
    c = this.F;
    c = c + a + 6 * b;
    return this.D.vi(c) / 16
};

v.PF = function (a, b, c) {
    b = this.M[this.M[b] + c];
    c = this.F;
    c = c + a + (6 * b + 2);
    return this.D.vi(c) / 16
};

v.QF = function (a, b, c) {
    b = this.M[this.M[b] + c];
    c = this.F;
    c = c + a + (6 * b + 4);
    return this.D.vi(c) / 16
};

v.vt = function (a) {
    var b = this.Bb;
    this.C.od = b + a;
    return N7(this.C)
};

v.lL = function (a, b, c) {
    b = this.G[this.G[b] + c];
    c = this.F;
    c = c + a + 6 * b;
    return this.D.vi(c) / 16
};

v.mL = function (a, b, c) {
    b = this.G[this.G[b] + c];
    c = this.F;
    c = c + a + (6 * b + 2);
    return this.D.vi(c) / 16
};

v.nL = function (a, b, c) {
    b = this.G[this.G[b] + c];
    c = this.F;
    c = c + a + (6 * b + 4);
    return this.D.vi(c) / 16
};

v.$O = function () {
    return this.D.sc(81)
};

v.DG = function () {
    if (this.ca) return this.ca;
    var a = this.ca = [],
        b = this.$O();
    this.C.od = 83;
    for (var c = 0; c < b; ++c) {
        var d;
        d = new A3;
        for (var e = S7(this.C), f = 0; f < e; f++) d.C.push(s3a(this));
        e = S7(this.C);
        for (f = 0; f < e; f++) d.D.push(t3a(this));
        e = S7(this.C);
        for (f = 0; f < e; f++) {
            var g = d,
                j = new z3;
            j.fillStyle.C = T7(this.C);
            j.strokeStyle.C = T7(this.C);
            j.strokeStyle.width = S7(this.C) / 8;
            g.rd = j
        }
        e = S7(this.C);
        for (f = 0; f < e; f++) d.xd.Bi = S7(this.C), d.xd.nt = S7(this.C), d.xd.C = T7(this.C), d.F.C = T7(this.C), d.xd.D = U7(this.C), d.xd.sr = U7(this.C);
        e = S7(this.C);
        for (f = 0; f < e; f++) g = d, j = new w3, j.C = T7(this.C), j.width = S7(this.C) / 8, g.ef = j;
        e = S7(this.C);
        for (f = 0; f < e; f++) g = U7(this.C), d.I.push(Z7(this, g));
        i7(this, B3(d));
        a.push(d)
    }
    return a
};

var s3a = function (a) {
    var b = new w3;
    b.C = T7(a.C);
    b.width = S7(a.C) / 8;
    var c = S7(a.C);
    if (0 < c) {
        for (var d = [], e = 0; e < c; e++) d.push(S7(a.C) / 8);
        1 == d.length % 2 && d.push.apply(d, d.slice());
        b.D = d
    }
    a = S7(a.C);
    b.K = 0 != (a & 1);
    b.I = 0 != (a & 2);
    return b
},
    t3a = function (a) {
        var b = new y3;
        b.C = T7(a.C);
        return b
    };

Y7.prototype.uL = function () {
    return (this.yb - this.ma) / 7
};

Y7.prototype.vL = function (a) {
    var b = this.ma;
    return this.D.sc(b + 7 * a) / 7
};

Y7.prototype.xL = function () {
    return (this.C.F - this.yb) / 2
};

var u3a = function (a) {
    return a >> 1 ^ -(a & 1)
},
    v3a = function (a, b, c) {
        var d = 0,
            e = 0,
            f = c;
        if (!c || c.length < 2 * b) f = new Float32Array(2 * b);
        a = a.C;
        for (c = 0; c < b; c++) {
            var g = u3a(N7(a)),
                j = u3a(N7(a)),
                d = d + g,
                e = e + j;
            f[2 * c] = d / 16;
            f[2 * c + 1] = e / 16
        }
        return f
    };

v = Y7.prototype;
v.Ar = function (a, b) {
    this.C.od = this.Va + a;
    var c = V7(this.C);
    return v3a(this, c, b)
};

v.Gz = function (a, b) {
    var c = this.ea + a,
        d = this.D.La(c);
    this.C.od = c + 4 + d;
    return v3a(this, 3 * d, b)
};

v.Jy = function (a, b) {
    var c = this.N,
        c = c + a,
        c = c + (1 + 2 * this.D.Xb(c)),
        c = c + (1 + 4 * b);
    return new Bw(this.D.Xb(c + 2), this.D.Xb(c + 3))
};

v.tv = function (a, b) {
    var c = this.N,
        c = c + a,
        c = c + (1 + 2 * this.D.Xb(c));
    return Z7(this, this.D.sc(c + (1 + 4 * b)))
};

v.kq = function (a) {
    a = this.Ba[a];
    return a === h ? 10 : a
};

v.jq = function (a) {
    return this.qa[a] || 0
};

v.ED = function (a) {
    return this.Ja[a] || 0
};

v.nz = function (a, b) {
    var c = h,
        d = this.ba[a];
    d && (c = d[b]);
    return c === h ? 10 : c
};

v.mz = function (a, b) {
    return !this.V[a] ? 0 : this.V[a][b] || 0
};

v.xH = u(k);
v.dM = u(k);
v.CJ = u(k);
var $7 = function (a, b) {
    this.type = 2;
    this.id = a;
    this.L = b
};

B($7, P1);
$7.prototype.equals = function (a) {
    return $7.ia.equals.call(this, a) && this.id == a.id && this.L == a.L
};

$7.prototype.Bc = function () {
    return this.type + "::" + this.id + ":" + this.L
};

$7.prototype.Me = function () {
    return this
};

var w3a = function (a, b) {
    this.C = new Uint8Array(a, b || 0);
    this.D = new Int8Array(a, b || 0)
};

v = w3a.prototype;
v.Ks = function (a) {
    return this.D[a]
};

v.Xb = function (a) {
    return this.C[a]
};

v.vi = function (a) {
    return this.C[a + 1] | this.D[a] << 8
};

v.sc = function (a) {
    return this.C[a + 1] | this.C[a] << 8
};

v.La = function (a) {
    return this.C[a + 3] | this.C[a + 2] << 8 | this.C[a + 1] << 16 | this.D[a] << 24
};

v.KJ = function (a) {
    return this.C[a + 3] + (this.C[a + 2] << 8) + (this.C[a + 1] << 16) + 16777216 * this.C[a]
};

var x3a = function (a, b) {
    this.D = a;
    this.C = b || 0
};

v = x3a.prototype;
v.Ks = function (a) {
    return this.D[a + this.C]
};

v.Xb = function (a) {
    return this.D[a + this.C]
};

v.vi = function (a) {
    return this.D[a + this.C + 1] | this.D[a + this.C] << 8
};

v.sc = function (a) {
    return this.D[a + this.C + 1] | this.D[a + this.C] << 8
};

v.La = function (a) {
    return this.D[a + this.C + 3] | this.D[a + this.C + 2] << 8 | this.D[a + this.C + 1] << 16 | this.D[a + this.C] << 24
};

v.KJ = function (a) {
    return this.D[a + this.C + 3] + (this.D[a + this.C + 2] << 8) + (this.D[a + this.C + 1] << 16) + 16777216 * this.D[a + this.C]
};

var y3a = function (a) {
    this.D = a;
    this.F = "byteLength" in this.D ? this.D.byteLength : this.D.length;
    this.C = "byteLength" in a ? new w3a(a, h) : new x3a(a, h);
    this.od = 0
},
    S7 = function (a) {
        var b = a.C.Xb(a.od);
        a.od++;
        return b
    },
    U7 = function (a) {
        var b = a.C.sc(a.od);
        a.od += 2;
        return b
    },
    T7 = function (a) {
        var b = a.C.KJ(a.od);
        a.od += 4;
        return b
    },
    V7 = function (a) {
        var b = a.C.La(a.od);
        a.od += 4;
        return b
    },
    h3a = function (a, b) {
        for (var c = [], d = a.od, e = d + (y(b) ? b : 1073741824), f = a.C; d < e;) {
            var g = f.Xb(d++);
            if (0 == g) break;
            224 <= g ? (g &= 15, g <<= 6, g |= f.Xb(d++) & 63, g <<= 6, g |= f.Xb(d++) & 63) : 128 <= g && (g &= 31, g <<= 6, g |= f.Xb(d++) & 63);
            c.push(g)
        }
        a.od = d;
        return String.fromCharCode.apply(k, c)
    },
    N7 = function (a) {
        var b = a.od,
            c = a.C,
            d = c.Xb(b++);
        if (128 <= d) for (var d = d & 127, e = 1;; e++) {
            var f = c.Xb(b++),
                d = d | (f & 127) << 7 * e;
            if (128 > f) break
        }
        a.od = b;
        return d
    };

var a8 = function (a) {
    g7.call(this, a);
    this.D = !! ja.ArrayBuffer;
    this.initialized.set(i)
};

B(a8, g7);
a8.prototype.F = function (a) {
    return 5 != a.type ? k : h7(this, a)
};

a8.prototype.I = function (a, b) {
    var c = a.data,
        d = a.C.Me(),
        e = new y3a(c),
        f = T7(e),
        g = U7(e);
    U7(e);
    for (var c = this.D ? new Uint8Array(c) : c, j = 8; j < c.length; j++) c[j] ^= 155;
    var c = S7(e),
        j = T7(e),
        m = T7(e);
    if (d.Ic() != j || d.Nc() != m || d.da() != c) this.iq(b);
    else if (e = z3a(f, g, e), e === k) this.iq(b);
    else {
        f = e.DG();
        g = [];
        for (c = 0; c < f.length; ++c) for (var j = f[c], m = j.I.length, n = 0; n < m; ++n) g.push(new j2a(new $7(j.I[n], a.C.X), j));
        b.C = g;
        b.data.push(e);
        b.Dr.push(d);
        b.Je.set(i);
        this.iq(b)
    }
};

var z3a = function (a, b, c) {
    switch (a) {
    case 1414485838:
        switch (b) {
        case 4:
            return new Q7(c);
        case 5:
            return new Y7(c);
        case 7:
            return new W7(c);
        case 8:
            return new X7(c)
        }
    case 1129207379:
        switch (b) {
        case 7:
            return new o3a(c);
        case 8:
            return new q3a(c)
        }
    }
    return k
};

a8.prototype.iq = function (a) {
    this.C.set(this.C.get() - 1);
    a.eh.set(i)
};

var b8 = function (a) {
    r7.call(this);
    this.M = a;
    this.initialized.set(i)
};

B(b8, r7);
var A3a = [];
b8.prototype.Hs = function (a) {
    var b = [];
    B3a(this, b, a);
    return b
};

var B3a = function (a, b, c) {
    for (var d = 0; d < c.length; ++d) {
        var e = c[d];
        0 < e.children.length && B3a(a, b, e.children);
        e.Oa && a.v2(e.Oa, b)
    }
};

b8.prototype.v2 = function (a, b) {
    this.M.getData(a) || b.push(a)
};

b8.prototype.mp = function () {
    return A3a
};

b8.prototype.Zn = function (a, b, c) {
    for (var d = [], e = 0; e < a.length; ++e) {
        var f = a[e],
            g = [];
        0 < f.children.length && (g = this.Zn(f.children, b, c));
        var j = k,
            m = f.Oa;
        m && (j = this.M.getData(m));
        if (j || 0 < g.length) {
            var n = k;
            m && j && (n = this.M.fg(m));
            f = new g2(g, j, n, m, f.D);
            d.push(f)
        }
    }
    return d
};

var C3a = function (a) {
    NA.call(this, "ViewportLoaded", a)
};

B(C3a, NA);
var c8 = function (a, b, c) {
    this.G = 0 < b ? b : 0;
    this.I = y(c) ? c : Infinity;
    this.C = l;
    b8.call(this, a)
};

B(c8, b8);
c8.prototype.mp = function (a, b) {
    var c = [];
    b && 0 != this.G && D3a(this, c, a, b.C.get());
    return c
};

var D3a = function (a, b, c, d) {
    for (var e = [], f = 0; f < c.length; ++f) {
        var g = c[f];
        0 < g.children.length && D3a(a, b, g.children, d);
        g.Oa && 0 == g.Oa.type && e.push(g.Oa)
    }
    if (c = E3a(e)) {
        var f = c.cf,
            g = c.zn,
            j = c.minY,
            m = c.maxY;
        if (e.length) {
            var n = e[0],
                p = n.da();
            if (0 != p) {
                var q = p - 3;
                14 < q ? q = 14 : 0 > q && (q = 0);
                p -= q;
                f >>= p;
                g >>= p;
                j >>= p;
                m >>= p;
                for (p = q; 0 <= p; p -= 3) {
                    q = 1 << p;
                    0 == p && (g = f = 0);
                    for (var s = f; s <= g; ++s) {
                        var t = s;
                        t >= q && (t -= q);
                        for (var x = j; x <= m; ++x) b.push(I7(n, t, x, p, d.Kr(t, x, p)))
                    }
                    f >>= 3;
                    g >>= 3;
                    j >>= 3;
                    m >>= 3
                }
            }
        }
        p = a.G;
        q = c.cf;
        a = c.zn;
        f = c.minY;
        c = c.maxY;
        if (g = e.length) if (j = e[0], m = j.da(), !(0 == m || 0 == p)) {
            n = 1 << m;
            q -= p;
            0 > q && (q = n + q);
            a += p;
            a - q >= n && (a = q + n - 1);
            f -= p;
            0 > f && (f = 0);
            c += p;
            c >= n && (c = n - 1);
            for (p = q; p <= a; ++p) {
                q = p;
                q >= n && (q -= n);
                for (s = f; s <= c; ++s) {
                    t = i;
                    for (x = 0; x < g; ++x) if (e[x].Ic() == q && e[x].Nc() == s) {
                        t = l;
                        break
                    }
                    t && b.push(I7(j, q, s, m, d.Kr(q, s, m)))
                }
            }
        }
    }
},
    E3a = function (a) {
        var b = a.length;
        if (!b) return k;
        for (var c = a[0].Ic(), d = c, e = a[0].Nc(), f = e, g = 1; g < b; ++g) {
            var j = a[g].Ic(),
                m = a[g].Nc();
            j < c ? c = j : j > d && (d = j);
            m < e ? e = m : m > f && (f = m)
        }
        m = 1 << a[0].da();
        if (0 == c && d == m - 1) {
            d = 0;
            c = m - 1;
            for (g = 0; g < b; ++g) j = a[g].Ic(), j > d && j < c && (c - j > j - d ? d = j : c = j);
            d += m
        }
        return {
            cf: c,
            zn: d,
            minY: e,
            maxY: f
        }
    };

c8.prototype.Zn = function (a, b, c, d) {
    this.C = l;
    a = F3a(this, a, b, c.C.get(), d);
    this.C || this.dispatchEvent(new C3a(this));
    return a
};

var F3a = function (a, b, c, d, e) {
    for (var f = [], g = [], j = 0; j < b.length; ++j) {
        var m = b[j];
        if (0 < m.children.length) {
            var n = F3a(a, m.children, c, d, e);
            0 < n.length && f.push(new g2(n, k, k, k, m.D))
        }
        m.Oa && g.push(m.Oa)
    }
    b = [];
    for (j = n = 0; j < g.length; ++j) {
        var p = g[j];
        0 == p.type && (6 == p.hc() && (n = p.da()), m = a.zJ(p), m.data || (a.C = i), m.data && a.KE(m, e) ? f.push(m) : b.push(p))
    }
    if (0 < b.length) {
        j = Math.max(0, b[0].da() - 1);
        a = a.D(b, f, c, d, e, n, j);
        for (j = 0; j < a.length; j++) m = new g2([], k, k, a[j], k), f.push(m)
    }
    return f
};

c8.prototype.D = function (a, b, c, d, e, f, g) {
    var j = E3a(a);
    if (!j) return a;
    var m = c = a[0].da();
    g && g < c && (m = g);
    g = 0;
    f && 0 < f && (g = f);
    g < m - this.I && (g = m - this.I);
    for (var n = c - m, f = j.cf >> n, p = j.zn >> n, q = j.minY >> n, j = j.maxY >> n; m >= g; --m) {
        var n = c - m,
            s = 1 << m;
        0 == m && (p = f = 0);
        for (var t = f; t <= p; ++t) {
            var x = t;
            x >= s && (x -= s);
            for (var D = q; D <= j; ++D) {
                for (var I = l, K = l, J = k, J = k, M = 0; M < a.length; ++M) if (x == a[M].Ic() >> n && D == a[M].Nc() >> n) {
                    if (!I && (I = i, K = d ? d.Kr(x, D, m) : h, J = I7(a[M], x, D, m, K), J = this.zJ(J), K = J.data && this.KE(J, e), !K)) break;
                    K && a.splice(M--, 1)
                }
                K && J && b.push(J);
                if (0 == a.length) return a
            }
        }
        f >>= 1;
        p >>= 1;
        q >>= 1;
        j >>= 1
    }
    return a
};

c8.prototype.KE = u(i);
c8.prototype.zJ = function (a) {
    return new g2([], this.M.getData(a), this.M.fg(a), a, k)
};

var G3a = function (a) {
    NA.call(this, "ViewportReady", a)
};

B(G3a, NA);
var d8 = function (a, b, c) {
    this.F = l;
    c8.call(this, a, b, c)
};

B(d8, c8);
d8.prototype.Zn = function (a, b, c, d) {
    this.F = l;
    d && (d.Si.clear(), d.EM.clear());
    a = d8.ia.Zn.call(this, a, b, c, d);
    !this.F && !this.C && this.dispatchEvent(new G3a(this));
    return a
};

d8.prototype.KE = function (a, b) {
    if (!b || x6(b, a)) return i;
    y6(b, a, l);
    this.F = i;
    return l
};

d8.prototype.D = function (a, b, c, d, e, f, g) {
    a = d8.ia.D.call(this, a, b, c, d, e, f, g);
    if (0 == a.length) return a;
    0 < c.length && (this.f0() && H3a(this, c, a, b, i, e), H3a(this, c, a, b, l, e));
    return a
};

var H3a = function (a, b, c, d, e, f) {
    for (var g = 0; g < b.length; g++) {
        var j = b[g];
        0 < j.children.length && H3a(a, j.children, c, d, e, f);
        if (j.Oa && j.data && (j = j.Oa, 0 == j.type)) for (var m = 0; m < c.length; m++) if (c[m] && (j.type == c[m].type && j.P == c[m].da() && j.M == c[m].Ic() && j.N == c[m].Nc() && j.C == c[m].hc() && j.G == c[m].bc()) && a.OJ(j, d, e, f)) {
            c.splice(m--, 1);
            break
        }
    }
};

d8.prototype.f0 = u(l);
d8.prototype.OJ = function (a, b, c, d) {
    a = this.zJ(a);
    return a.data && (!d || x6(d, a)) ? (b.push(a), a.C.D = i) : l
};

var e8 = function (a, b, c) {
    d8.call(this, a, b, c)
};

B(e8, d8);
v = e8.prototype;
v.v2 = function (a, b) {
    this.M.getData(a) || b.push(a);
    var c = J7(a);
    c && !this.M.getData(c) && b.push(c)
};

v.mp = function (a, b) {
    for (var c = e8.ia.mp.call(this, a, b), d = 0; d < c.length; ++d) {
        var e = J7(c[d]);
        e && !this.M.getData(e) && (c.splice(0, 0, e), ++d)
    }
    return c
};

v.zJ = function (a) {
    var b = this.M.fg(a),
        c = this.M.getData(a);
    if (!c) return new g2([], k, k, a, k);
    var d = J7(a);
    if (!d) return new g2([], c, b, a, k);
    d = this.M.getData(d);
    if (!d) return new g2([], k, k, a, k);
    c.P1(d);
    return new g2([], c, b, a, k)
};

v.KE = function (a, b) {
    if (!b) return i;
    var c = J7(a.Oa);
    if (c) {
        var d = this.M.getData(c);
        if (!d) return l;
        c = new g2([], d, this.M.fg(c), c, k);
        a.Ui = c
    }
    return e8.ia.KE.call(this, a, b)
};

v.f0 = u(i);
v.OJ = function (a, b, c, d) {
    var e = J7(a),
        f;
    if (e) f = a;
    else {
        if (c) return l;
        e = a
    }(a = e8.ia.OJ.call(this, e, b, c, d)) && f && e8.ia.OJ.call(this, f, b, c, d);
    return a
};

var I3a = ea();
var J3a = fa("D");
B(J3a, I3a);
J3a.prototype.C = function (a, b, c, d, e) {
    for (var f = k, g = 0; g < this.D.length; ++g) {
        var j = this.D[g].C(a, b, c, d, e);
        j != k && (f ? f.push.apply(f, j) : f = j)
    }
    return f
};

var K3a = function (a, b, c, d) {
    this.bottom = a;
    this.top = b;
    this.zoom = c;
    this.uP = d
};

var L3a = function () {
    this.ga = new Float32Array(6)
};

L3a.prototype.set = function (a, b, c, d, e, f) {
    this.ga[0] = a;
    this.ga[1] = b;
    this.ga[2] = c;
    this.ga[3] = d;
    this.ga[4] = e;
    this.ga[5] = f
};

var M3a = function (a) {
    var b = a.ga[0],
        b = a.ga[2] < b ? a.ga[2] : b;
    return a.ga[4] < b ? a.ga[4] : b
},
    N3a = function (a) {
        var b = a.ga[0],
            b = a.ga[2] > b ? a.ga[2] : b;
        return a.ga[4] > b ? a.ga[4] : b
    };

L3a.prototype.Fa = function () {
    return new Cw((this.ga[0] + this.ga[2] + this.ga[4]) / 3, (this.ga[1] + this.ga[3] + this.ga[5]) / 3)
};

var O3a = function (a, b) {
    a.ga[0] += b;
    a.ga[2] += b;
    a.ga[4] += b
},
    R3a = function (a, b, c) {
        var d = b.left + b.width,
            e = b.top,
            f = b.top + b.height,
            g = [],
            j = [],
            m = [];
        P3a(a, b.left, c, m, g);
        for (a = 0; a < g.length; ++a) Q3a(g[a], e, c, m, j);
        g = j;
        j = [];
        for (a = 0; a < g.length; ++a) P3a(g[a], d, c, j, m);
        g = j;
        j = [];
        for (a = 0; a < g.length; ++a) Q3a(g[a], f, c, j, m);
        return m
    },
    P3a = function (a, b, c, d, e) {
        var f = a.ga[0],
            g = a.ga[1],
            j = a.ga[2],
            m = a.ga[3],
            n = a.ga[4],
            p = a.ga[5];
        j < f && (f = j, j = a.ga[0], g = m, m = a.ga[1]);
        n < j && (n = j, j = a.ga[4], p = m, m = a.ga[5], j < f && (j = f, f = a.ga[4], m = g, g = a.ga[5]));
        if (n <= b) f < b && d.push(a);
        else if (f >= b) e.push(a);
        else {
            var a = g + (b - f) / (n - f) * (p - g),
                q;
            if (j == b) q = c.get(), q.set(f, g, j, m, b, a), d.push(q), q = c.get(), q.set(j, m, b, a, n, p), e.push(q);
            else if (j < b) {
                var s = m + (b - j) / (n - j) * (p - m);
                f8(f, g, b, a, b, s, j, m, c, d);
                q = c.get();
                q.set(b, a, b, s, n, p);
                e.push(q)
            } else s = g + (b - f) / (j - f) * (m - g), q = c.get(), q.set(f, g, b, a, b, s), d.push(q), f8(b, a, n, p, j, m, b, s, c, e)
        }
    },
    Q3a = function (a, b, c, d, e) {
        var f = a.ga[0],
            g = a.ga[1],
            j = a.ga[2],
            m = a.ga[3],
            n = a.ga[4],
            p = a.ga[5];
        m < g && (f = j, j = a.ga[0], g = m, m = a.ga[1]);
        p < m && (n = j, j = a.ga[4], p = m, m = a.ga[5], m < g && (j = f, f = a.ga[4], m = g, g = a.ga[5]));
        if (p <= b) g < b && d.push(a);
        else if (g >= b) e.push(a);
        else {
            var a = f + (b - g) / (p - g) * (n - f),
                q;
            if (m == b) q = c.get(), q.set(f, g, j, m, a, b), d.push(q), q = c.get(), q.set(j, m, a, b, n, p), e.push(q);
            else if (m < b) {
                var s = j + (b - m) / (p - m) * (n - j);
                f8(f, g, a, b, s, b, j, m, c, d);
                q = c.get();
                q.set(a, b, s, b, n, p);
                e.push(q)
            } else s = f + (b - g) / (m - g) * (j - f), q = c.get(), q.set(f, g, a, b, s, b), d.push(q), f8(a, b, n, p, j, m, s, b, c, e)
        }
    },
    f8 = function (a, b, c, d, e, f, g, j, m, n) {
        var p;
        (e - a) * (e - a) + (f - b) * (f - b) < (g - c) * (g - c) + (j - d) * (j - d) ? (p = m.get(), p.set(a, b, c, d, e, f), n.push(p), p = m.get(), p.set(a, b, e, f, g, j)) : (p = m.get(), p.set(a, b, c, d, g, j), n.push(p), p = m.get(), p.set(c, d, e, f, g, j));
        n.push(p)
    },
    S3a = function () {
        this.ga = new Float32Array(4)
    };

S3a.prototype.set = function (a, b, c, d) {
    b < d ? (this.ga[0] = a, this.ga[1] = b, this.ga[2] = c, this.ga[3] = d) : (this.ga[2] = a, this.ga[3] = b, this.ga[0] = c, this.ga[1] = d)
};

var g8 = function (a) {
    this.tileSize = a;
    this.G = new o3(19);
    this.I = new C3(S3a);
    this.D = new C3(L3a)
};

B(g8, I3a);
var h8 = qD(),
    T3a = [0];
g8.prototype.C = function (a, b, c, d, e) {
    return !(0 <= a.F.get().indexOf(0)) || 5 == b ? k : U3a(this, a, b, c || k, d || "", T3a, ra(e) ? e : this.tileSize)
};

var U3a = function (a, b, c, d, e, f, g, j) {
    var j = j || b.Tb(),
        m = j.getWidth(),
        n = j.getHeight(),
        p = n * b.xa.get(),
        b = [],
        q = n,
        s;
    s = V3a(n, g, j);
    var t = V3a(n, g, j, 0);
    s < t && (s = t);
    for (t = s = Math.floor(s + 0.01); 0 <= t && 0 < q;) {
        var x = Math.round(W3a(t, s, n, j));
        q - x >= p && b.push(new K3a(q, x, t, x));
        q = x;
        --t
    }!x && b.length && (b[b.length - 1].top = 0);
    b.length && (b[b.length - 1].uP = 0);
    if (0 == b.length || 0 == f.length) a = k;
    else if (1 < f.length) {
        x = [];
        for (n = 0; n < f.length; ++n)(p = 1 < b.length ? X3a(a, m, f[n], c, d, e, b, g, j) : Y3a(a, m, f[n], c, d, e, b[0], g, j)) && x.push(new g2(p, k, k, k, k));
        a = x
    } else a = 1 < b.length ? X3a(a, m, f[0], c, d, e, b, g, j) : Y3a(a, m, f[0], c, d, e, b[0], g, j);
    return a
},
    X3a = function (a, b, c, d, e, f, g, j, m) {
        for (var n = [], p = 0; p < g.length; ++p) {
            var q = Y3a(a, b, c, d, e, f, g[p], j, m);
            q && n.push(new g2(q, k, k, k, g[p]))
        }
        return n
    },
    Y3a = function (a, b, c, d, e, f, g, j, m) {
        var n = g.zoom,
            p = new i0;
        i8(m, 0, g.top, p);
        var q = h8[0],
            s = h8[1];
        i8(m, b, g.top, p);
        var t = h8[0],
            x = h8[1];
        i8(m, 0, g.bottom, p);
        var D = h8[0],
            I = h8[1];
        i8(m, b, g.bottom, p);
        b = h8[0];
        g = h8[1];
        p = a.D.get();
        p.set(q, s, t, x, D, I);
        q = a.D.get();
        q.set(D, I, b, g, t, x);
        x = [p, q];
        q = new KB(-1E50, -90, 2E50, 5);
        t = new KB(-1E50, 85, 2E50, 5);
        D = [];
        for (I = 0; 2 > I; ++I) D = D.concat(R3a(x[I], q, a.D));
        x = [];
        for (I = 0; I < D.length; ++I) x = x.concat(R3a(D[I], t, a.D));
        if (0 == x.length) return k;
        I = M3a(x[0]);
        q = N3a(x[0]);
        for (D = 1; D < x.length; ++D) I = Math.min(M3a(x[D]), I), q = Math.max(N3a(x[D]), q);
        t = []; - 180 > I && 180 > q ? Z3a(a, -180, 360, 0, d, e, f, t, x, n, c, j) : 180 < q && -180 < I ? Z3a(a, 180, 0, -360, d, e, f, t, x, n, c, j) : $3a(a, t, {}, x.slice(), n, c, d, e, f, j);
        a.D.C = 0;
        if (t.length) {
            a.F(m, m.D, m.F, t[0], h8);
            h8[0] -= 0.5;
            h8[1] -= 0.5;
            a = t.length;
            c = Array(a);
            for (d = 0; d < a; d++) e = t[d].Ic() - h8[0], f = t[d].Nc() - h8[1], c[d] = {
                BX: e * e + f * f,
                Oa: t[d]
            };

            c.sort(function (a, b) {
                return a.BX - b.BX
            });
            for (d = 0; d < a; d++) t[d] = c[d].Oa
        }
        a = [];
        for (D = 0; D < t.length; ++D) a.push(new g2([], k, k, t[D], k));
        return a
    },
    i8 = function (a, b, c, d) {
        a.xo(b, c, d);
        uD(d.origin[0] - d.dir[0] * d.origin[2] / d.dir[2], d.origin[1] - d.dir[1] * d.origin[2] / d.dir[2], 0, h8)
    };

g8.prototype.F = function (a, b, c, d, e) {
    uWa(b, c, d.da(), e)
};

var Z3a = function (a, b, c, d, e, f, g, j, m, n, p, q) {
    for (var s = [], t = [], x = 0; x < m.length; ++x) P3a(m[x], b, a.D, s, t);
    for (x = 0; x < s.length; ++x) O3a(s[x], c);
    for (x = 0; x < t.length; ++x) O3a(t[x], d);
    b = {};

    $3a(a, j, b, s, n, p, e, f, g, q);
    $3a(a, j, b, t, n, p, e, f, g, q)
},
    $3a = function (a, b, c, d, e, f, g, j, m, n) {
        var p = [];
        a.K(d, e, f, p);
        if (0 != p.length) {
            for (var q = p[0].ga[1], s = p[0].ga[3], t = 1; t < p.length; ++t) d = p[t].ga[1], d < q && (q = d), d = p[t].ga[3], d > s && (s = d);
            q += 2;
            s -= 2;
            d = a.G.zj(e) / n - 1;
            s = Math.round(s - s % n);
            for (q = Math.round(q - q % n); q <= s; q += n) {
                for (var x = 1E100, D = 0, I = q + n, t = 0; t < p.length; ++t) {
                    var K = p[t].ga[0],
                        J = p[t].ga[1],
                        M = p[t].ga[2],
                        Q = p[t].ga[3];
                    if (J <= I && Q >= q) {
                        var aa = M - K,
                            ba = Q - J,
                            ia = J >= q ? K : K + (q - J) / ba * aa,
                            K = Q <= I ? M : K + (I - J) / ba * aa;
                        ia < K ? (x = Math.min(x, ia), D = Math.max(D, K)) : (x = Math.min(x, K), D = Math.max(D, ia))
                    }
                }
                x += 2;
                D -= 2;
                t = Math.floor(D / n);
                t = Math.min(t, d);
                for (x = Math.max(Math.floor(x / n), 0); x <= t; x++) ia = x, K = q / n, J = e, M = f, Q = g, aa = m, D = b, I = c, ba = j ? j.Kr(ia, K, J) : "", ia = new h3(ia, K, J, Q, ba, M, aa), K = ia.Bc(), I[K] || (I[K] = i, D.push(ia))
            }
            a.I.C = 0
        }
    };

g8.prototype.K = function (a, b, c, d) {
    for (c = 0; c < a.length; ++c) {
        var e = a[c],
            f = this.G,
            g = b,
            j = this.I,
            m = d;
        p3(f, e.ga[0], e.ga[1], g);
        var n = f.C,
            p = f.D;
        p3(f, e.ga[2], e.ga[3], g);
        var q = f.C,
            s = f.D;
        p3(f, e.ga[4], e.ga[5], g);
        e = f.C;
        f = f.D;
        g = j.get();
        g.set(n, p, q, s);
        m.push(g);
        g = j.get();
        g.set(n, p, e, f);
        m.push(g);
        g = j.get();
        g.set(q, s, e, f);
        m.push(g)
    }
};

var V3a = function (a, b, c, d) {
    a = 1 / QXa(c, a, d);
    return Math.log(a * M1(0) * (1 / b)) / Math.LN2
},
    W3a = function (a, b, c, d) {
        var a = Math.floor(a) - 0.5,
            c = QXa(d, c),
            b = Math.pow(2, b - a) * c,
            c = C2(d),
            a = d.getHeight(),
            e = d.Yd(),
            f = d.xg(),
            d = c * Math.cos(e) / Math.sin(e),
            c = -Math.sqrt(2 / a * f * c / b) / Math.sin(e),
            b = d + c,
            d = d - c,
            a = (1 - (b < d ? -1.01 > b || 1.01 < b ? d : b : -1.01 > d || 1.01 < d ? b : d)) * a / 2;
        return 0 > a || isNaN(a) || Infinity == a ? 0 : a
    };

var j8 = function (a, b) {
    var c = a.I.slice(),
        d = a.U.slice(),
        e = a.K.slice(),
        f = a.L.slice(),
        g = a.P.slice(),
        j = a.N.slice(),
        m = a.V.slice(),
        n = a.tileSize,
        c = [new A7(n, c, a.X, "xhr", a.G, a.Q || h), new B7(n, d, 1), new B7(n, m, 2), new B7(n, g, 3), new B7(n, j, 6)],
        c = new X4(c),
        d = b3(),
        e = A(a4a, k, c, e, f, a.M, n);
    d.C[4] && e(4, d.C[4]);
    e = a.tileSize;
    f = [new a8(b), new Y4(b, e)];
    f = new b5(b, f);
    n = new c5(500);
    d = new c5(0);
    g = [];
    g[0] = n;
    g[1] = d;
    n = new d5(g);
    d = new J3a([new g8(e)]);
    g = a.G ? new e8(n, a.F, a.D) : new d8(n, a.F, a.D);
    g = new f5([g]);
    a.C && c.aN(new pl);
    j = b3();
    e = A(b4a, k, this, f, d, g, b, e);
    j.C[4] && e(4, j.C[4]);
    g5.call(this, c, f, n, g);
    this.Y = d;
    this.M = new y7(this.Br, this.Q, this.F);
    a.C && (this.M.F = i);
    this.Ah = new K7;
    this.ba = [];
    this.Ja = [];
    this.xa = [];
    this.qa = [];
    aB(this.Ah, "OverlayTileGenerated", this.e6, l, this)
};

B(j8, g5);
var a4a = function (a, b, c, d, e) {
    var f = new k8(b, c, d ? "xhr" : "xdc", e);
    J0(f.initialized, i, function () {
        f.initialized.get();
        a.C.push(f);
        a.D.push(new N0(A(a.EX, a), 0));
        a.D[a.C.length - 1].Zb(f.F)
    })
},
    b4a = function (a, b, c, d, e, f) {
        var g = new l8(e, f),
            e = new m8(f),
            j = new n8(f, e);
        J0(g.initialized, i, function () {
            g.initialized.get();
            b.D.push(g);
            b.G.push(new N0(A(b.M, b), 0));
            b.G[b.D.length - 1].Zb(g.C);
            a.Wc && a.Wc.get() && a.D()
        });
        c.D.push(e);
        a.Wc && a.Wc.get() && a.D();
        J0(j.initialized, i, function () {
            j.initialized.get();
            d.C.unshift(j);
            j.rA(d);
            a.Wc && a.Wc.get() && a.D()
        })
    },
    c1a = function () {
        return new g2([], new v6(0, 0, 0, 0, 256, 256, 0), new u7, new h3(0, 0, 0), k)
    };

j8.prototype.ha = function (a, b, c, d) {
    return this.C.Zn(a, b, c, d)
};

j8.prototype.X = function (a, b) {
    var c = [],
        d, e, f = b.Ta.get();
    if (f) {
        d = c4a(this, b, f);
        d = this.C.Hs(d);
        for (e = 0; e < d.length; ++e) {
            var g = x7(this, d[e], f, b.I.get());
            g && c.push(g)
        }
    }
    d = this.C.mp(a, b);
    for (e = 0; e < d.length; ++e)(g = x7(this, d[e], b.C.get(), b.I.get())) && c.push(g);
    return c
};

j8.prototype.U = function (a, b) {
    j8.ia.U.call(this, a, b);
    b.Je.get() && O2a(this.M, b.C)
};

j8.prototype.getData = function (a, b, c) {
    0 <= b.mapTypes.get().indexOf(5) && b3();
    for (var a = j8.ia.getData.call(this, a, b, c), c = b.C.get(), d = [], e = 0; e < this.ba.length; ++e) {
        var f = this.ba[e],
            g = this.xa[e],
            j = this.qa[e];
        if (f) {
            var m = this.Y.C(b, 4, c, c.C, this.Ja[e]);
            if (m) {
                for (var n = [], p = [], q = 0; q < m.length; ++q) m[q].Oa && (n.push(m[q].Oa), p.push(k));
                f.C(n, p);
                f = ":dse" + e;
                n = [];
                for (q = 0; q < m.length; ++q) {
                    var s = p[q] || k;
                    if (s) {
                        var t = m[q].Oa.Bc(),
                            x = g.get(j[t]);
                        x || (x = new u7, j[t] = g.add(x, kfa, 1));
                        m[q].data = s;
                        m[q].C = x;
                        m[q].Oa = X2a(m[q].Oa, m[q].Oa.yf + f);
                        n.push(m[q])
                    }
                }
                0 < n.length && d.push(new g2(n, k, k, k, k))
            }
        }
    }
    if (0 < d.length) {
        0 < a.length && (a = [new g2(a, k, k, k, k)]);
        for (e = 0; e < d.length; ++e) a.push(d[e])
    }
    c = this.Ah;
    (d = this.Y.C(b, 4)) ? (b = d4a(this, b, 4, c, d), b = 0 < b.length ? new g2(b, k, k, k, k) : k) : b = k;
    return b ? (c = Array(2), c[0] = new g2(a, k, k, k, k), c[1] = b, c) : a
};

var d4a = function (a, b, c, d, e) {
    for (var f = [], g = 0; g < e.length; ++g) {
        var j = e[g];
        if (0 < j.children.length) {
            var m = d4a(a, b, c, d, j.children);
            0 < m.length && f.push(new g2(m, k, k, k, j.D))
        }
        if (j.Oa) {
            var n = d,
                p = j.Oa,
                q = b.L,
                s = b.C.get(),
                t = a.M,
                x = f,
                D = new h3(p.Ic(), p.Nc(), p.da(), p.hc(), "pi"),
                I = n.tz.getData(D);
            if (!I) {
                for (var K = n, J = D, M = q, Q = s, aa = t, ba = Z2a(J), ia = $2a(J, M), ha = LB(ia), xa = c3a(K, ia), Aa = xa.length, Ra = aa.D[x2(Q)] || {}, Ba = 0; Ba < Aa; ++Ba) {
                    for (var kb = i, oa = xa[Ba].Qr, rb = oa.points, hb = rb.length, pb = 0; pb < hb; ++pb) {
                        var Oa;
                        var Hb = rb[pb],
                            ib = M,
                            ec = J,
                            Ib = Hb.point.x,
                            Ib = ((Ib + 180) % 360 + 360) % 360 - 180;
                        p3(ib, Ib, Hb.point.y, ec.da());
                        if (ib.C < 256 * ec.Ic() || ib.C > 256 * (ec.Ic() + 1) || ib.D < 256 * ec.Nc() || ib.D > 256 * (ec.Nc() + 1)) Oa = k;
                        else {
                            var yc = new SZa(ib.C - 256 * ec.Ic(), ib.D - 256 * ec.Nc(), Hb.D, Hb.C, "", Hb.F, Hb.gi, Hb.gg, 0, 0, 15);
                            yc.fontSize = Hb.fontSize;
                            yc.lk = Hb.lk;
                            Oa = yc
                        }
                        if (Oa) {
                            ba.K.push(Oa);
                            var Wc = aa.C[Oa.gi] || Ra[Oa.gi];
                            Wc && i7(ba, B3(Wc))
                        }
                    }
                    for (var zc = oa.F, Xb = zc.length, pb = 0; pb < Xb; ++pb) {
                        var Xc;
                        a: {
                            var Ub = zc[pb],
                                de = aa,
                                kf = A(oa.dr, oa),
                                sc = J;
                            if (Ub.url && (Ub.image = v4(de, Ub.url), !Ub.image)) {
                                Ub.loading || (H_a(de, Ub.url, kf), Ub.loading = i);
                                Xc = k;
                                break a
                            }
                            Ub.loading = l;
                            var Rc = Math.pow(2, sc.da() - Ub.zoomLevel);
                            p3(Ub.C, Ub.point.x, Ub.point.y, sc.da());
                            var ac = Ub.C.C,
                                gb = Ub.C.D,
                                ac = ac - 256 * sc.Ic(),
                                gb = gb - 256 * sc.Nc(),
                                xb = Rc * Ub.image.width * Ub.anchor.x,
                                lf = Rc * Ub.image.height * Ub.anchor.y,
                                ac = ac - (xb * Math.cos(Ub.rotation) + lf * Math.sin(Ub.rotation)),
                                gb = gb - (-xb * Math.sin(Ub.rotation) + lf * Math.cos(Ub.rotation));
                            Xc = new y4(Ub.image, ac, gb, "", 0, Ub.rotation, Rc)
                        }
                        Xc ? (ba.gd.push(Xc), (Wc = aa.C[Xc.gi] || Ra[Xc.gi]) && i7(ba, B3(Wc))) : kb = l
                    }
                    if (kb && xa[Ba].callback && (hb || Xb)) xa[Ba].callback(), delete xa[Ba].callback
                }
                i2a(ba);
                K.tz.zm(ba, J);
                K.tz.fg(J).OG = ha;
                K.dispatchEvent(new Y2a(K, ba, J));
                I = ba
            }
            0 < I.Cm() && x.push(new g2([], I, n.tz.fg(D), D, k));
            var mf = new h3(p.Ic(), p.Nc(), p.da(), p.hc(), "la"),
                nf = n.rz.getData(mf);
            if (!nf) {
                for (var Yc = n, Pd = mf, pc = q, Cd = s, tc = t, Kc = Z2a(Pd), xf = $2a(Pd, pc), Dd = LB(xf), Ud = c3a(Yc, xf), Sc = Ud.length, Vd = tc.D[x2(Cd)] || {}, Lc = 0; Lc < Sc; ++Lc) {
                    for (var qh = Ud[Lc].Qr, Pf = qh.D, hg = Pf.length, Je = 0; Je < hg; ++Je) {
                        var ig;
                        var wa = Pf[Je],
                            Wd = pc,
                            Ke = Pd,
                            Ed = wa.points.length;
                        if (0 == Ed) ig = [];
                        else {
                            for (var oe = wa.points[0].x, Qf = oe, Zc = 1; Zc < Ed; ++Zc) {
                                var yf = wa.points[Zc].x;
                                yf < oe && (oe = yf);
                                yf > Qf && (Qf = yf)
                            }
                            for (var of = Math.floor((oe + 180) / 360), rh = Math.floor((Qf + 180) / 360), Le = Wd.zj(Ke.da()), jg = [], pe = 256 * Ke.Nc(), kg = of; kg <= rh; ++kg) {
                                var Ce = 256 * Ke.Ic() + kg * Le;
                                p3(Wd, wa.points[0].x, wa.points[0].y, Ke.da());
                                var zf = Wd.C - Ce,
                                    hd = Wd.D - pe,
                                    Rf = [
                                        []
                                    ],
                                    af = Rf[0]; - 80 <= zf && (336 >= zf && -80 <= hd && 336 >= hd) && af.push(zf, hd);
                                var sh = 1;
                                1 == Ed && (sh = 0);
                                for (Zc = sh; Zc < Ed; ++Zc) {
                                    p3(Wd, wa.points[Zc].x, wa.points[Zc].y, Ke.da());
                                    var Xd = Wd.C - Ce,
                                        fc = Wd.D - pe;
                                    R3(RZa, zf, hd, Xd, fc, 0);
                                    if (SYa(QZa, RZa, 80)) {
                                        var th = -80 <= Xd && 336 >= Xd && -80 <= fc && 336 >= fc; - 80 <= zf && 336 >= zf && -80 <= hd && 336 >= hd || af.push(zf, hd);
                                        af.push(Xd, fc);
                                        th || (af = [], Rf.push(af))
                                    }
                                    zf = Xd;
                                    hd = fc
                                }
                                for (var pf = 0; pf < Rf.length; ++pf) {
                                    var lg = Rf[pf];
                                    if (0 != lg.length) {
                                        for (var Vg = new Float32Array(lg.length), Zc = 0; Zc < lg.length; ++Zc) Vg[Zc] = lg[Zc];
                                        var id = new OZa(Vg, wa.D, wa.F, "", wa.gi, 0, wa.gg, 0);
                                        id.fontSize = wa.fontSize;
                                        id.lk = wa.lk;
                                        id.F = wa.C;
                                        id.zIndex = wa.zIndex;
                                        id.G = wa.G;
                                        jg.push(id)
                                    }
                                }
                            }
                            ig = jg
                        }
                        Kc.F.push.apply(Kc.F, ig);
                        if (0 < ig.length) {
                            var Nh = ig[0],
                                Hc = tc.C[Nh.gi] || Vd[Nh.gi];
                            Hc && i7(Kc, B3(Hc))
                        }
                    }
                    for (var bf = qh.G, Fg = bf.length, Je = 0; Je < Fg; ++Je) {
                        var Oh = bf[Je].C(pc, Pd);
                        Oh && (Kc.I.push(Oh), (Hc = tc.C[Oh.gi] || Vd[Oh.gi]) && i7(Kc, B3(Hc)))
                    }
                    if (Ud[Lc].callback && (hg || Fg)) Ud[Lc].callback(), delete Ud[Lc].callback
                }
                i2a(Kc);
                Yc.rz.zm(Kc, Pd);
                Yc.rz.fg(Pd).OG = Dd;
                Yc.dispatchEvent(new Y2a(Yc, Kc, Pd));
                nf = Kc
            }
            0 < nf.Cm() && x.push(new g2([], nf, n.rz.fg(mf), mf, k))
        }
    }
    return f
};

j8.prototype.ea = function (a) {
    var b = a.C.get();
    return c4a(this, a, b)
};

j8.prototype.ma = function (a, b) {
    for (var c = [], d = this.C.Hs(a), e = 0; e < d.length; ++e) {
        var f = x7(this, d[e], b.C.get(), b.I.get());
        f && c.push(f)
    }
    return c
};

var c4a = function (a, b, c) {
    for (var d = [], e = b.mapTypes.get(), f = 0; f < e.length; f++) {
        var g = c;
        6 == e[f] && (g = b.I.get());
        (g = a.Y.C(b, e[f], g, c.C)) && g.length && d.push(g)
    }
    if (1 == d.length) return d[0];
    a = [];
    for (f = 0; f < d.length; ++f) a.push(new g2(d[f], k, k, k, k));
    return a
};

v = j8.prototype;
v.MZ = function () {
    for (var a = 0; a < this.I.length; ++a) {
        for (var b = this.I[a].nn, c = this.I[a].$w, d = this.X(this.I[a].QX, b), e = [], f = 0; f < d.length; ++f) {
            var g = d[f].Me(),
                j = this.F.getData(g);
            j ? c && (g = new g2([], j, this.F.fg(g), g, k), x6(c, g) || y6(c, g, i)) : e.push(d[f])
        }
        for (f = this.G.length - 1; 0 <= f; --f) if (this.G[f].nn === b) {
            this.G.splice(f, 1);
            break
        }
        d = l;
        for (f = 0; f < this.K.length; ++f) this.K[f].nn === b && (this.K[f].jK = e, this.K[f].$w = c || k, d = i);
        d || this.K.push({
            nn: b,
            jK: e,
            $w: c || k
        })
    }
    this.I = []
};

v.Pa = function (a, b) {
    this.Ah.Pa(a, b);
    this.D()
};

v.nb = function (a) {
    this.Ah.nb(a);
    this.D()
};

v.Rp = function (a) {
    this.Ah.Rp(a);
    this.D()
};

v.ps = function (a) {
    this.Ah.ps(a);
    this.D()
};

v.e6 = function (a) {
    a.Oa && this.F.Vz(a.Oa)
};

var e4a = function (a) {
    this.F = 1;
    this.D = 255;
    this.tileSize = 256;
    this.I = ["/vt/vec?src=vector"];
    this.U = ["/kh?v=0"];
    this.V = ["//mt0.google.com/vt?lyrs=t"];
    this.K = ["/kh?v=0"];
    this.L = ["/kh?v=0"];
    this.N = ["/vt?"];
    this.P = ["//www.gstatic.com/landmark/depth/"];
    this.X = "webgl5";
    this.G = l;
    this.Q = k;
    this.M = this.C = l;
    a && (this.F = a.M, this.D = a.yb, this.tileSize = a.we(), this.I = a.G, this.U = a.Q, this.V = a.U, this.K = a.I, this.L = a.K, this.N = a.L, this.P = a.N, this.X = a.X, this.G = a.Rb, this.Q = a.Bb, this.C = a.F, this.M = a.Ba)
};

c3(2, new(ea()));
c3(3, new(ea()));
var k8 = function (a, b, c, d) {
    this.C = b;
    a = new B7(d, a, 5);
    c = new b7(6, 7, c);
    e7.call(this, 3, a, c)
};

B(k8, e7);
k8.prototype.mh = function (a) {
    return 0 == a.type && 5 == a.hc() && 21 >= a.da()
};

k8.prototype.Is = function (a, b) {
    return !this.mh(a) ? k : new z7(a, b ? x2(b) : "", b ? b.F : -1)
};

k8.prototype.sY = function (a) {
    var a = a.Me(),
        b = Q2a(this.C, a.Ic(), a.Nc()),
        c = {};

    c.x = a.Ic();
    c.y = a.Nc();
    c.z = a.da();
    c.deg = a.bc();
    c.db = "dp";
    return new L6(J6(b, c), 6)
};

k8.prototype.tY = da();
var f4a = function (a) {
    this.near = a.near;
    this.C = a.far
};

var l8 = function (a, b) {
    g7.call(this, a);
    this.D = b || 256;
    this.initialized.set(i)
};

B(l8, g7);
l8.prototype.F = function (a) {
    return 3 != a.type ? k : h7(this, a, a.data.Oa)
};

l8.prototype.I = function (a, b) {
    if (a.data) {
        var c = a.data,
            d = A(this.G, this, b),
            e = c.Oa,
            f = new v6(0, e.Ic(), e.Nc(), e.da(), this.D, this.D, e.hc(), e.bc());
        b.data.push(f);
        f.gd.push(new y4(c.image, 0, 0, k, 0));
        if (!c.Wk || "empty" == c.Wk.format || !c.Wk.depth_data) f.L.push(k), f.P.push(k), d();
        else {
            var g = c.Wk.depth_data,
                j = uq("img");
            bB(j, "load", d);
            j.src = "data:image/jpeg;base64," + g;
            f.L.push(new y4(j, 0, 0, k, 0, -Nz(e.bc())));
            f.P.push(new f4a(c.Wk))
        }
    } else this.G(b)
};

l8.prototype.G = function (a) {
    this.C.set(this.C.get() - 1);
    a.Je.set(i);
    a.eh.set(i)
};

var n8 = function (a, b) {
    r7.call(this);
    this.D = a;
    this.F = new o3(21);
    this.C = b;
    this.initialized.set(i)
};

B(n8, r7);
var o8 = new Cw(0, 0);
n8.prototype.Hs = function () {
    return []
};

n8.prototype.Zn = function () {
    return []
};

n8.prototype.mp = function (a, b) {
    if (!b) return [];
    var c;
    c = b.zoom.get();
    var d = 0 <= b.mapTypes.get().indexOf(5),
        e = 0 <= b.mapTypes.get().indexOf(1);
    if (!b.P.get() || d || !e || 18 < c || 16 > c) c = [];
    else if (c = b.C.get(), d = b.Tb().clone(), WXa(d, 16), e = d.xi(), e.Dc = Nz(45), d.Vd(e), c = g4a(this.C, b, c, c.C, d)) {
        for (d = []; 0 < c.length;) e = c.shift(), 0 < e.children.length && (c = c.concat(e.children)), e.Oa && d.push(e.Oa);
        c = d
    } else c = [];
    return c = c.concat(h4a(this, a, b))
};

var h4a = function (a, b, c) {
    var d = [],
        e = 0 <= c.mapTypes.get().indexOf(5);
    if (!c.P.get() || 0 != c.rotation.get() % 90 || !e) return d;
    i4a(a, d, b, c);
    return d
},
    i4a = function (a, b, c, d) {
        for (var e = [], f = 0; f < c.length; ++f) {
            var g = c[f];
            0 < g.children.length && i4a(a, b, g.children, d);
            g.Oa && 0 == g.Oa.type && e.push(g.Oa)
        }
        j4a(a, e, d, b, 90);
        j4a(a, e, d, b, -90);
        j4a(a, e, d, b, 180)
    },
    j4a = function (a, b, c, d, e) {
        var f = b.length;
        if (0 != f) {
            var g = b[0].clone(),
                j = g.da(),
                m = g.hc();
            if (!(0 == j || 5 != m)) {
                var n = g.bc(),
                    e = Uy(n + e),
                    m = a.F,
                    a = a.D;
                p3(m, c.lng.get(), c.lat.get(), j);
                U5(m.C, m.D, n, j, o8);
                c = o8.x / a;
                n = o8.y / a;
                U5(m.C, m.D, e, j, o8);
                for (var c = Math.floor(o8.x / a - c), m = Math.floor(o8.y / a - n), n = a = b[0].Ic() + c, p = b[0].Nc() + m, q = p, s = 1; s < f; ++s) var t = b[s].Ic() + c,
                    x = b[s].Nc() + m,
                    a = Math.min(a, t),
                    n = Math.max(n, t),
                    p = Math.min(p, x),
                    q = Math.max(q, x);
                a = Math.floor(0.25 * a);
                n = Math.floor(0.25 * (n + 1));
                p = Math.floor(0.25 * p);
                q = Math.floor(0.25 * (q + 1));
                j -= 2;
                for (x = p; x <= q; x++) for (t = a; t <= n; t++) d.push(new h3(t, x, j, g.C, g.yf, e, g.I))
            }
        }
    };

var m8 = function (a) {
    g8.call(this, a)
};

B(m8, g8);
var k4a = new Cw(0, 0);
m8.prototype.C = function (a, b, c, d) {
    return !(0 <= a.F.get().indexOf(0)) || 5 != b ? k : g4a(this, a, c || a.C.get(), d || "")
};

var g4a = function (a, b, c, d, e) {
    var e = e || b.Tb(),
        f = ra(h) ? h : a.tileSize,
        g = Uy(-Ty(e.lf())),
        j = 90 * Math.floor(g / 90),
        m = [j];
    j != g && m.push(Uy(m[0] + 90));
    return U3a(a, b, 5, c, d, m, f, e)
};

m8.prototype.K = function (a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e],
            g = this.G,
            j = b,
            m = c,
            n = this.I,
            p = d,
            q = new Cw;
        p3(g, f.ga[0], f.ga[1], j);
        U5(g.C, g.D, m, j, q);
        var s = q.x,
            t = q.y;
        p3(g, f.ga[2], f.ga[3], j);
        U5(g.C, g.D, m, j, q);
        var x = q.x,
            D = q.y;
        p3(g, f.ga[4], f.ga[5], j);
        U5(g.C, g.D, m, j, q);
        f = q.x;
        q = q.y;
        g = n.get();
        g.set(s, t, x, D);
        p.push(g);
        g = n.get();
        g.set(s, t, f, q);
        p.push(g);
        g = n.get();
        g.set(x, D, f, q);
        p.push(g)
    }
};

m8.prototype.F = function (a, b, c, d, e) {
    m8.ia.F.call(this, a, b, c, d, e);
    5 == d.hc() && (U5(e[0] * this.tileSize, e[1] * this.tileSize, d.bc(), d.da(), k4a), e[0] = k4a.x / this.tileSize, e[1] = k4a.y / this.tileSize)
};

c3(4, new(ea()));
c3(5, new(ea()));
for (a3 = new

function () {
    this.C = []
};
NXa.length;) {
    var l4a = NXa.shift();
    c3(l4a.id, l4a.Pj)
};

var n4a = function (a, b, c, d) {
    a.style.position = "absolute";
    a.id || (a.id = "htmldiv_" + m4a++);
    this.content = a;
    this.lJ = b;
    this.dx = c;
    this.dy = d
},
    m4a = 0;
var o4a = function () {
    this.C = [];
    this.F = this.D = new N0(h, 0)
};

o4a.prototype.refresh = function () {
    this.D.set(this.D.get() + 1)
};

o4a.prototype.UF = function (a) {
    for (var b = [], c = 0, d = 0; d < this.C.length; d++) a(this.C[d]) ? (Rt(this.C[d].content), c++) : b.push(this.C[d]);
    0 < c && (this.C = b, this.D.set(this.D.get() + 1));
    return c
};

var p8 = function (a, b, c, d) {
    this.D = b;
    this.G = c;
    this.J = a;
    this.C = d || k;
    J0(a.initialized, i, A(this.init_, this))
};

B(p8, iB);
p8.prototype.init_ = function () {
    (new G0(A(this.Xp, this))).Zb(this.J.X);
    (new M0(A(this.Xp, this))).Zb(this.D.F);
    (new M0(A(this.F, this))).Zb(this.J.width);
    (new M0(A(this.F, this))).Zb(this.J.height)
};

p8.prototype.F = function () {
    this.C && (this.C.style.width = this.J.width.get(), this.C.style.height = this.J.height.get());
    this.Xp()
};

p8.prototype.I = function (a) {
    if (!a) return l;
    if (!this.C) {
        var b = uq("div");
        b.id = "overlay_div";
        b.style.width = this.J.width.get();
        b.style.height = this.J.height.get();
        this.G.appendChild(b);
        this.C = b
    }
    b = a.content;
    b.parentNode != this.C && (b.parentNode && Rt(b), this.C.appendChild(b));
    b = k3(this.J.W.D, a.lJ.x, a.lJ.y);
    a.content.style.top = Math.round(b.y - a.dy) + "px";
    a.content.style.left = Math.round(b.x - a.dx) + "px";
    return i
};

p8.prototype.Xp = function () {
    a: for (var a = this.D, b = A(this.I, this), c = 0; c < a.C.length; c++) if (!b(a.C[c])) break a
};

var q8 = function (a) {
    this.C = new L3;
    this.H = {};

    this.D = {};

    a && (this.C.I = a)
},
    r8 = function (a, b, c) {
        var d = a.D[b];
        d ? a.C.wb(d) : (d = a.C.add(1, A(a.F, a, b)), a.D[b] = d);
        a.H[b] = c
    };

q8.prototype.getData = function (a) {
    var b = this.D[a],
        a = this.H[a];
    b && this.C.wb(b);
    return a
};

q8.prototype.F = function (a) {
    delete this.D[a];
    delete this.H[a]
};

var s8 = function (a, b, c, d) {
    this.C = new N0;
    this.C.set(0);
    this.mn = a;
    this.P = b;
    this.L = c;
    this.Q = new q8(5);
    this.X = d;
    this.D = [];
    this.G = [];
    this.I = [];
    this.K = [];
    this.M = [];
    this.Ia = [];
    this.N = 0
},
    p4a = new i0;
v = s8.prototype;
v.Yz = function (a, b, c) {
    if (1 > this.D.length) return c.C = k, c.D = k, l;
    var d = this.D[0];
    this.P.xo(a, b, p4a);
    a = c.D ? c.D : new Cw;
    d.Em().SO(p4a, a);
    c.D = a;
    c.C = d;
    return i
};

v.En = function (a) {
    this.D = [];
    for (var b = 0; b < a.length; ++b) this.D.push(a[b]);
    q4a(this)
};

v.OI = function (a) {
    this.G = [];
    for (var b = 0; b < a.length; ++b) this.G.push(a[b]);
    q4a(this)
};

v.hz = fa("N");
v.run = function () {
    this.C.set(1);
    for (this.SW(); this.I.length;) for (var a = this.I.shift(), b = a.start(); b != k;) b = b.apply(a);
    this.I = [];
    0 < this.D.length && this.Rd(this.D);
    1 > this.K.length && this.C.set(0)
};

v.SW = function () {
    for (this.I = []; this.K.length;) {
        var a = this.K.shift();
        V0(a, k)
    }
    for (; this.M.length;) a = this.M.shift(), V0(a, k);
    for (a = 0; a < this.D.length; ++a) {
        var b = this.D[a],
            b = t8(this, b);
        if (2 != this.N) {
            var c = b;
            u8(c);
            for (var d = 0; d < c.C.length; ++d) {
                var e = c.C[d],
                    f = Math.max(0, e.F.Em().sH() - e.G),
                    g = e.F,
                    j = e.M >> f,
                    f = e.N >> f,
                    e = e.G,
                    m = j + "|" + f + "|" + e;
                !g.L[m] && !g.F[m] && (g.F[m] = i, g.N(g, [j, f, e]))
            }
        }
        r4a(b) && (this.I.push(s4a(b)), b = t4a(b, A(this.L.lr, this.L)), W0(this.mn, b, 2), this.K.push(b))
    }
    for (a = 0; a < this.G.length; ++a) b = this.G[a], b = t8(this, b), r4a(b) && (b = t4a(b), W0(this.mn, b, 0), this.M.push(b))
};

var t8 = function (a, b) {
    var c = a.Q.getData(b);
    c || (c = a.X.create(b, a.P), r8(a.Q, b, c));
    return c
},
    q4a = function (a) {
        for (var b = 0; b < a.Ia.length; ++b) eB(a.Ia[b]);
        a.Ia = [];
        for (b = 0; b < a.D.length; ++b) a.Ia.push(a.D[b].listen("TileReady", A(a.L.lr, a.L)));
        for (b = 0; b < a.G.length; ++b) a.Ia.push(a.G[b].listen("TileReady", A(a.SW, a)))
    };

var v8 = function () {
    this.screen = new Float32Array(2);
    this.C = new Float32Array(2);
    this.visible = l
},
    v4a = function (a, b) {
        var c = u4a,
            d = a.C[0] - c[0],
            c = a.C[1] - c[1],
            e = 3 / Math.sqrt(d * d + c * c);
        b.C[0] = a.C[0] + d * e;
        b.C[1] = a.C[1] + c * e
    };

var w8 = function (a, b, c) {
    this.F = a;
    this.C = b;
    this.D = c;
    this.G = k
},
    x8 = new Float32Array(6),
    u4a = new Float32Array(2),
    y8 = new w8(new v8, new v8, new v8);
w8.prototype.Ob = function () {
    return this.F.visible || this.C.visible || this.D.visible
};

var w4a = function () {
    this.y = this.x = 0;
    this.canvas = k;
    this.C = -1
};

var x4a = function (a) {
    this.D = a.canvas;
    this.Z = a;
    this.C = [];
    this.F = new q8(200)
},
    z8 = b0(),
    A8 = b0(),
    B8 = b0();
x4a.prototype.Rd = function (a) {
    var b;
    if (b = C8(a)) b = D8(a).pd.C;
    if (b) {
        b = this.F.getData(a);
        if (!b) {
            var c = a.zb();
            if (this.C.length != c) for (var d = this.C.length; d < c; ++d) this.C.push(new v8);
            b = [];
            for (d = 0; d < c - 3; d += 2) b.push(new w8(this.C[d], this.C[d + 1], this.C[d + 2])), b.push(new w8(this.C[d + 2], this.C[d + 1], this.C[d + 3]));
            r8(this.F, a, b)
        }
        var c = a.P,
            d = a.zb(),
            e = a.V(),
            f = this.C,
            g = D8(a),
            j = g.F,
            m = g.pd.getWidth() - 1,
            g = g.pd.getHeight() - 1;
        z8[0] = j[0] * m;
        z8[1] = j[1] * g;
        z8[2] = j[2] * m + 0.5;
        z8[3] = j[3] * g + 0.5;
        j = this.D.width;
        m = this.D.height;
        A8[0] = j / 2;
        A8[1] = -m / 2;
        A8[2] = j / 2;
        A8[3] = m / 2;
        for (m = j = 0; m < d; j += 5, m++) {
            var g = e,
                n = j,
                p = c,
                q = f[m];
            B8[0] = g[n];
            B8[1] = g[n + 1];
            B8[2] = g[n + 2];
            B8[3] = 1;
            oVa(p, B8, B8);
            v0(B8, 1 / B8[3], B8);
            q.visible = -1.1 > B8[0] || 1.1 < B8[0] || -1.1 > B8[1] || 1.1 < B8[1] || -1 > B8[2] || 1 < B8[2] ? l : i;
            p = q.screen;
            p[0] = B8[0] * A8[0] + A8[2];
            p[1] = B8[1] * A8[1] + A8[3];
            q = q.C;
            q[0] = g[n + 3] * z8[0] + z8[2];
            q[1] = g[n + 4] * z8[1] + z8[3]
        }
        a = D8(a).pd.getData();
        for (c = 0; c < b.length; ++c) {
            f = b[c];
            d = this.Z;
            e = a;
            if (j = f.Ob()) {
                var s = f.F,
                    t = f.C,
                    x = f.D,
                    j = s.screen[0],
                    m = s.screen[1],
                    g = t.screen[0],
                    n = t.screen[1],
                    q = x.screen[0],
                    p = x.screen[1],
                    D = s.C[0],
                    s = s.C[1],
                    I = t.C[0],
                    t = t.C[1],
                    K = x.C[0],
                    x = x.C[1],
                    J = D * (x - t) - I * x + K * t + (I - K) * s;
                0 == J ? j = l : (J = 1 / J, x8[0] = -(s * (q - g) - t * q + x * g + (t - x) * j) * J, x8[1] = (t * p + s * (n - p) - x * n + (x - t) * m) * J, x8[2] = (D * (q - g) - I * q + K * g + (I - K) * j) * J, x8[3] = -(I * p + D * (n - p) - K * n + (K - I) * m) * J, x8[4] = (D * (x * g - t * q) + s * (I * q - K * g) + (K * t - I * x) * j) * J, x8[5] = (D * (x * n - t * p) + s * (I * p - K * n) + (K * t - I * x) * m) * J, j = 1E-6 > Math.abs(x8[0]) || 1E-6 > Math.abs(x8[3]) ? l : i)
            }
            j && (j = f, f = ua(e), j.G && j.G.C == f ? e = j.G : (m = j, u4a[0] = (m.F.C[0] + m.C.C[0] + m.D.C[0]) / 3, u4a[1] = (m.F.C[1] + m.C.C[1] + m.D.C[1]) / 3, v4a(m.F, y8.F), v4a(m.C, y8.C), v4a(m.D, y8.D), m = y8.F.C[0], g = y8.F.C[1], n = y8.C.C[0], q = y8.C.C[1], p = y8.D.C[0], D = y8.D.C[1], s = Math.min(m, n, p) - 1, t = Math.max(m, n, p) + 1, I = Math.min(g, q, D) - 1, K = Math.max(g, q, D) + 1, t = t - s + 1, K = K - I + 1, x = j.G || new w4a, j.G = x, j = x.canvas || uq("CANVAS"), J = j.getContext("2d"), j.width != t || j.height != K ? (j.width = t, j.height = K) : J.clearRect(0, 0, t, K), J.beginPath(), J.moveTo(m - s, g - I), J.lineTo(n - s, q - I), J.lineTo(p - s, D - I), J.closePath(), J.clip(), J.drawImage(e, -s, -I), x.x = -s, x.y = -I, x.canvas = j, x.C = f, e = x), x8[4] -= x8[0] * e.x + x8[2] * e.y, x8[5] -= x8[1] * e.x + x8[3] * e.y, d.save(), d.setTransform(x8[0], x8[1], x8[2], x8[3], x8[4], x8[5]), d.drawImage(e.canvas, 0, 0), d.restore())
        }
    }
};

var y4a = function (a, b, c, d, e) {
    this.Z = d;
    this.V = new x4a(this.Z);
    this.F = uq("CANVAS");
    this.U = new x4a(this.F.getContext("2d"));
    s8.call(this, a, b, c, e)
};

B(y4a, s8);
y4a.prototype.Rd = function (a) {
    for (var b = 0; b < a.length; ++b) {
        var c = a[b],
            d = c.Mt();
        if (1 > d) {
            var e = this.Z.canvas;
            if (e.width != this.F.width || e.height != this.F.height) this.F.width = e.width, this.F.height = e.height;
            z4a(this, this.U, c);
            this.Z.globalAlpha = d;
            this.Z.drawImage(this.F, 0, 0);
            this.Z.globalAlpha = 1
        } else z4a(this, this.V, c)
    }
};

var z4a = function (a, b, c) {
    a = A4a(t8(a, c));
    for (c = 0; c < a.length; ++c) b.Rd(a[c])
};

var E8 = function (a, b, c, d) {
    this.L = a;
    this.M = b;
    this.N = c;
    this.pd = d;
    this.K = a + "|" + b + "|" + c
};

E8.prototype.Ic = r("L");
E8.prototype.Nc = r("M");
E8.prototype.da = r("N");
E8.prototype.toString = r("K");
var F8 = function (a, b, c, d, e) {
    this.F = e;
    E8.call(this, a, b, c, d)
};

B(F8, E8);
F8.prototype.G = u(k);
F8.prototype.C = u(i);
F8.prototype.I = ea();
var G8 = function (a, b, c, d, e, f) {
    this.F = a;
    this.P = b;
    this.X = c;
    this.M = d;
    this.N = e;
    this.G = 0;
    this.C = f
},
    D8 = function (a) {
        for (var b = a.G; 0 <= b; b--) {
            var c = H8(a, b);
            if (c && c.C()) return c
        }
        return k
    };

G8.prototype.zb = function () {
    return 2 * this.C * (this.C + 2) - 2
};

var B4a = function (a) {
    if (a.I()) {
        var b = H8(a, a.G);
        return b ? !b.C() : (b = H8(a, 0)) ? !b.C() : l
    }
    return i
};

G8.prototype.Q = u(k);
G8.prototype.V = u(k);
var C8 = function (a) {
    return a.I() ? (a = D8(a)) ? a.C() : l : l
};

G8.prototype.I = u(i);
G8.prototype.K = ea();
var C4a = function (a, b) {
    for (var c = a.F.Em(), d = a.C * c.Dv(), e = a.C * c.Ft(), f = a.M * a.C, g = a.N * a.C, j = (a.M + 1) * a.C, m = (a.N + 1) * a.C, n = 0, p = g; p < m; p++) {
        p > g && (I8(c, b, n, j / d, p / e), n += 3, I8(c, b, n, f / d, p / e), n += 3);
        for (var q = f; q < j + 1; q++) I8(c, b, n, q / d, p / e), n += 3, I8(c, b, n, q / d, (p + 1) / e), n += 3
    }
},
    I8 = function (a, b, c, d, e) {
        b[c] = d;
        b[c + 1] = e;
        b[c + 2] = a.V3(d, e)
    },
    H8 = function (a, b) {
        var c;
        c = Math.max(0, a.F.Em().sH() - b);
        if (c = a.F.L[(a.M >> c) + "|" + (a.N >> c) + "|" + b] || k) {
            var d = a.X[c];
            d || (d = a.U(c, D4a(a, c)), a.X[c] = d);
            c = d
        } else c = k;
        return c
    },
    D4a = function (a, b) {
        var c = b.Ic(),
            d = b.Nc();
        b.da();
        var e = a.F.Em(),
            f = e.y0(b.da()),
            g = e.Dv() / f,
            f = e.Ft() / f;
        e.z0() && (f *= -1, d = -d - 1);
        e = f;
        c = -c;
        d = -d;
        f = b0();
        f[0] = g;
        f[1] = e;
        f[2] = c;
        f[3] = d;
        return f
    };

G8.prototype.U = function (a, b) {
    return new F8(a.Ic(), a.Nc(), a.da(), a.pd, b)
};

var J8 = function (a, b, c, d, e) {
    this.L = k;
    this.D = d + ":" + e;
    G8.call(this, a, b, c, d, e, 2)
};

B(J8, G8);
J8.prototype.I = function () {
    return !!this.L
};

J8.prototype.V = r("L");
J8.prototype.K = function () {
    if (!this.L) {
        var a = 3 * this.zb(),
            b = new Float32Array(a);
        C4a(this, b);
        for (var c = new Float32Array(5 * this.zb()), d = 0, e = 0; d < a; d += 3) {
            var f = 2 * Math.PI * (b[d] - 0.5),
                g = Math.PI * (0.5 - b[d + 1]),
                j = b[d + 2];
            c[e++] = Math.sin(f) * Math.cos(g) * j;
            c[e++] = Math.cos(f) * Math.cos(g) * j;
            c[e++] = Math.sin(g) * j;
            c[e++] = b[d];
            c[e++] = b[d + 1]
        }
        this.L = c
    }
};

J8.prototype.toString = r("D");
var E4a = ea();
E4a.prototype.create = function (a, b, c, d, e) {
    return new J8(a, b, c, d, e)
};

var K8 = function (a, b) {
    this.C = a;
    this.Oe = b || k
};

K8.prototype.start = function () {
    return 0 == this.C.length ? k : this.F()
};

K8.prototype.F = function () {
    var a = this.C.shift();
    this.D(a);
    this.Oe && this.Oe();
    return 0 == this.C.length ? k : this.F
};

K8.prototype.D = function (a) {
    a.K();
    for (var b = k, c = a.G; 0 <= c && !(b = H8(a, c)); c--);
    b && b.I()
};

var F4a = function (a, b) {
    K8.call(this, a, b)
};

B(F4a, K8);
F4a.prototype.D = function (a) {
    a.K();
    (a = H8(a, 0)) && a.I()
};

var G4a = function (a, b, c) {
    this.F = a;
    this.D = b;
    this.M = c;
    this.I = [];
    this.C = [];
    this.K = -1;
    this.G = t0();
    this.N = {};

    a = this.F.Em().Dv();
    b = this.F.Em().Ft();
    this.I = [];
    for (c = 0; c < b; c++) for (var d = 0; d < a; d++) {
        var e = this.M.create(this.F, this.G, this.N, d, c);
        this.I.push(e)
    }
    this.L = Array(b)
},
    A4a = function (a) {
        u8(a);
        for (var b = [], c = 0; c < a.C.length; ++c) {
            var d = a.C[c];
            C8(d) && b.push(d)
        }
        return b
    },
    r4a = function (a) {
        u8(a);
        for (var b = 0; b < a.C.length; ++b) if (B4a(a.C[b])) return i;
        return l
    },
    t4a = function (a, b) {
        u8(a);
        for (var c = [], d = 0; d < a.C.length; ++d) {
            var e = a.C[d];
            B4a(e) && c.push(e)
        }
        return new K8(c, b)
    },
    s4a = function (a) {
        u8(a);
        for (var b = [], c = 0; c < a.C.length; ++c) {
            var d = a.C[c];
            C8(d) || b.push(d)
        }
        return new F4a(b, h)
    },
    u8 = function (a) {
        if (a.K != a.D.I) {
            a.K = a.D.I;
            var b = a.G;
            a2(a.D, a.F.Em().Ky(), b);
            s0(b2(a.D), b, a.G);
            var c = a.F.Em(),
                b = c.rW(a.D),
                c = c.Dv();
            a.C = [];
            for (var d = 0; d < b.length; d++) {
                var e = a.I[b[d].x + c * b[d].y];
                e.G = b[d].z;
                a.C.push(e)
            }
        }
    },
    L8 = fa("C");
L8.prototype.create = function (a, b) {
    return new G4a(a, b, this.C)
};

var M8 = function (a, b, c) {
    this.Z = a;
    this.C = k;
    this.G = b;
    this.F = c
},
    H4a = function (a, b, c) {
        c = a.createShader(c);
        a.shaderSource(c, b);
        a.compileShader(c);
        a.getShaderParameter(c, 35713);
        return c
    };

M8.prototype.getContext = r("Z");
var I4a = function (a) {
    if (!a.C) {
        var b = H4a(a.Z, a.G, 35633),
            c = H4a(a.Z, a.F, 35632);
        a.C = a.Z.createProgram();
        a.C.attachShader(b);
        a.C.attachShader(c);
        a.C.link()
    }
    return a.C
};

M8.prototype.wb = function () {
    this.Z.useProgram(I4a(this))
};

var N8 = function (a, b) {
    this.name = a;
    this.C = b
};

N8.prototype.Ec = function () {
    return I4a(this.C).getAttribLocation(this.name)
};

N8.prototype.vertexAttribPointer = function (a, b, c, d, e, f) {
    var g = this.C.getContext(),
        j = this.Ec();
    g.vertexAttribPointer(j, a, b, c, d, e);
    f && g.enableVertexAttribArray(j)
};

var O8 = function (a, b) {
    this.name = a;
    this.C = b
};

O8.prototype.Ec = function () {
    return I4a(this.C).getUniformLocation(this.name)
};

var J4a = function (a, b) {
    O8.call(this, a, b)
};

B(J4a, O8);
J4a.prototype.set = function (a) {
    this.C.getContext().uniform1i(this.Ec(), a ? 1 : 0)
};

var P8 = function (a, b) {
    O8.call(this, a, b)
};

B(P8, O8);
P8.prototype.set = function (a) {
    this.C.getContext().uniform1i(this.Ec(), a)
};

var Q8 = function (a, b) {
    O8.call(this, a, b)
};

B(Q8, O8);
Q8.prototype.set = function (a) {
    this.C.getContext().uniform1f(this.Ec(), a)
};

var R8 = function (a, b) {
    O8.call(this, a, b)
};

B(R8, O8);
R8.prototype.set = function (a, b, c, d) {
    var e = this.C.getContext(),
        f = this.Ec();
    (e = e.G) && e.pK && e.pK(f, a, b, c, d)
};

var K4a = function (a, b) {
    var c = a.C.getContext(),
        d = a.Ec();
    (c = c.G) && c.lZ && c.lZ(d, b)
},
    S8 = function (a, b) {
        O8.call(this, a, b)
    };

B(S8, O8);
var T8 = function (a, b) {
    var c = a.C.getContext(),
        d = a.Ec();
    (c = c.G) && c.qK && c.qK(d, 0, b)
};

var N4a = function (a) {
    M8.call(this, a, "const float d=3.1415926;vec4 i(vec3 e){float f,g,h;f=2.*d*(e.x-.5);g=d*(.5-e.y);h=e.z;return vec4(sin(f)*cos(g)*h,cos(f)*cos(g)*h,sin(g)*h,1);}attribute vec3 e;uniform vec4 a;uniform mat4 b;varying vec3 c;void main(){float f=e.z;gl_Position=b*i(e);c=vec3(e.xy*a.xy+a.zw,1);c*=f;}", "precision highp float;uniform float d;uniform sampler2D e;varying vec3 c;void main(){gl_FragColor=vec4(texture2DProj(e,c).rgb,d);}");
    this.D = new L4a(this);
    this.attributes = new M4a(this)
};

B(N4a, M8);
var L4a = function (a) {
    this.F = new R8("a", a);
    this.C = new S8("b", a);
    this.alpha = new Q8("d", a);
    this.D = new P8("e", a)
},
    M4a = function (a) {
        this.C = new N8("e", a)
    };

var O4a = function (a) {
    this.Z = a;
    this.C = new N4a(a)
};

O4a.prototype.Rd = function (a) {
    if (C8(a)) {
        var b = this.Z;
        this.C.wb();
        T8(this.C.D.C, a.P);
        this.C.D.alpha.set(a.F.Mt());
        var c = D8(a);
        K4a(this.C.D.F, c.F);
        b.activeTexture(33984);
        b.bindTexture(3553, c.G());
        this.C.D.D.set(0);
        b.bindBuffer(34962, a.Q());
        c = this.C.attributes.C.Ec();
        b.enableVertexAttribArray(c);
        this.C.attributes.C.vertexAttribPointer(3, 5126, l, 0, 0);
        b.drawArrays(5, 0, a.zb());
        B1(b, c)
    }
};

var U8 = function (a, b, c, d) {
    this.F = b;
    this.D = c;
    this.H = a;
    this.C = !! d
};

U8.prototype.getWidth = r("F");
U8.prototype.getHeight = r("D");
U8.prototype.getData = r("H");
var V8 = function (a, b, c, d, e, f) {
    this.Z = f;
    this.D = -1;
    F8.call(this, a, b, c, d, e)
};

B(V8, F8);
V8.prototype.G = function () {
    this.Z.C.wb(this.D);
    return x1(this.Z.C, this.D)
};

V8.prototype.C = function () {
    return this.Z.C.contains(this.D)
};

V8.prototype.I = function () {
    if (this.C()) this.Z.C.wb(this.D);
    else {
        this.D = this.Z.C.createTexture(9729);
        var a;
        a: {
            a = this.Z;
            var b = this.pd;
            if (b.C) try {
                var c = b.getData();
                a.D.texImage2D(3553, 0, 6408, 6408, 5121, c)
            } catch (d) {
                ja.console && ja.console.log(d);
                b = new Uint8Array([0, 0, 0, 0]);
                z1(a, 6408, 1, 1, 6408, b);
                a = 4;
                break a
            } else z1(a, 6408, b.getWidth(), b.getHeight(), 6408, b.getData());
            a = 4 * b.getWidth() * b.getHeight()
        }
        this.Z.C.Se(this.D, a)
    }
};

var W8 = function (a, b, c, d, e, f) {
    this.Z = f;
    this.D = -1;
    G8.call(this, a, b, c, d, e, a.Em().lK())
};

B(W8, G8);
var P4a = new Float32Array(0);
W8.prototype.I = function () {
    return this.Z.C.contains(this.D)
};

W8.prototype.K = function () {
    if (this.Z.C.contains(this.D)) this.Z.C.wb(this.D);
    else {
        var a = this.Z.createBuffer(),
            b = 3 * this.zb();
        this.D = w1(this.Z.C, a, b);
        P4a.length != 3 * this.zb() && (P4a = new Float32Array(3 * this.zb()));
        b = P4a;
        C4a(this, b);
        this.Z.bindBuffer(34962, a);
        this.Z.bufferData(34962, b, 35044)
    }
};

W8.prototype.Q = function () {
    this.Z.C.wb(this.D);
    return this.Z.C.eb.get(this.D) || k
};

W8.prototype.U = function (a, b) {
    return new V8(a.Ic(), a.Nc(), a.da(), a.pd, b, this.Z)
};

var Q4a = fa("Z");
Q4a.prototype.create = function (a, b, c, d, e) {
    return new W8(a, b, c, d, e, this.Z)
};

var R4a = function (a, b, c, d) {
    this.Z = d;
    this.F = new O4a(this.Z);
    s8.call(this, a, b, c, new L8(new Q4a(this.Z)))
};

B(R4a, s8);
R4a.prototype.Rd = function (a) {
    var b = this.Z;
    A1(b, l);
    b.enable(2884);
    b.state.wo(1029);
    b.disable(2929);
    b.disable(2960);
    b.disable(3089);
    b.state.zo(770, 771, 1, 771);
    for (var c = 0; c < a.length; ++c) {
        0 < c && b.clear(256);
        for (var d = A4a(t8(this, a[c])), e = 0; e < d.length; ++e) this.F.Rd(d[e])
    }
    b.disable(2884);
    A1(b, i)
};

var S4a = function (a) {
    return a.F ? new R4a(a.I, a.C, a.G, a.F) : a.D ? new y4a(a.I, a.C, a.G, a.D, new L8(new E4a)) : k
},
    T4a = function (a, b, c, d, e) {
        this.I = a;
        this.C = b;
        this.G = c;
        this.F = d || k;
        this.D = e || k
    };

var X8 = function (a) {
    this.H = a || []
},
    Y8 = function (a) {
        this.H = a || []
    },
    Z8 = function (a) {
        this.H = a || []
    },
    $8 = function (a) {
        this.H = a || []
    };

X8.prototype.Ya = r("H");
var U4a = new Y8;
X8.prototype.hasLocation = function () {
    return this.H[0] != k
};

X8.prototype.Ec = function () {
    var a = this.H[0];
    return a ? new Y8(a) : U4a
};

var a9 = function (a) {
    a.H[0] = a.H[0] || [];
    return new Y8(a.H[0])
},
    V4a = new Z8,
    b9 = function (a) {
        a.H[1] = a.H[1] || [];
        return new Z8(a.H[1])
    },
    W4a = new $8;
X8.prototype.getScreenSize = function () {
    var a = this.H[2];
    return a ? new $8(a) : W4a
};

var c9 = function (a) {
    a.H[2] = a.H[2] || [];
    return new $8(a.H[2])
};

Y8.prototype.Ya = r("H");
Y8.prototype.sm = function () {
    var a = this.H[1];
    return a != k ? a : 0
};

Y8.prototype.Vj = function () {
    var a = this.H[2];
    return a != k ? a : 0
};

Y8.prototype.Fe = function () {
    var a = this.H[0];
    return a != k ? a : 0
};

Z8.prototype.Ya = r("H");
Z8.prototype.bc = function () {
    var a = this.H[0];
    return a != k ? a : 0
};

Z8.prototype.Yd = function () {
    var a = this.H[1];
    return a != k ? a : 0
};

$8.prototype.Ya = r("H");
$8.prototype.getWidth = function () {
    var a = this.H[0];
    return a != k ? a : 0
};

$8.prototype.getHeight = function () {
    var a = this.H[1];
    return a != k ? a : 0
};

$8.prototype.Dl = function (a) {
    this.H[1] = a
};

var d9 = new vD,
    e9 = [0, 0, 0],
    X4a = function (a, b) {
        var c, d = a.H[1];
        c = d ? new Z8(d) : V4a;
        var d = a.getScreenSize(),
            e = a.Ec(),
            f;
        f = a.H[3];
        f = f != k ? f : 0;
        Math.tan(Nz(f) / 2);
        d9.F = h;
        d9.G = h;
        d9.I = h;
        d9.M = h;
        d9.N = h;
        d9.P = h;
        d9.near = h;
        d9.L = h;
        d9.De = -Nz(c.bc());
        d9.Dc = Nz(c.Yd());
        c = c.H[2];
        d9.K = -Nz(c != k ? c : 0);
        d9.C = Nz(f);
        d9.width = d.getWidth();
        d9.height = d.getHeight();
        d9.D = e.Fe() / (6371010 * Math.cos(Nz(e.Vj())));
        tD(e.sm(), e.Vj(), e.Fe(), e9);
        d9.F = e9[0];
        d9.G = e9[1];
        d9.I = e9[2];
        b.Vd(d9);
        b.ba = 0
    },
    Y4a = function (a, b) {
        0 != a.ba && ca(Error("Invalid Coordinate System"));
        a.xi(d9);
        var c = b9(b),
            d = c9(b),
            e = a9(b);
        y(d9.De) && (c.H[0] = -Ty(d9.De));
        y(d9.Dc) && (c.H[1] = Ty(d9.Dc));
        y(d9.K) && (c.H[2] = -Ty(d9.K));
        y(d9.C) && (b.H[3] = Ty(d9.C));
        y(d9.width) && (d.H[0] = d9.width);
        y(d9.height) && d.Dl(d9.height);
        uD(d9.F, d9.G, d9.I, e9, h);
        e.H[1] = e9[0];
        e.H[2] = e9[1];
        e.H[0] = e9[2]
    };

var f9 = function (a) {
    this.H = a || []
},
    g9 = function (a) {
        this.H = a || []
    },
    h9 = function (a) {
        this.H = a || []
    },
    i9 = function (a) {
        this.H = a || []
    };

f9.prototype.Ya = r("H");
var Z4a = new g9,
    j9 = function (a) {
        return (a = a.H[1]) ? new g9(a) : Z4a
    },
    k9 = function (a) {
        a.H[1] = a.H[1] || [];
        return new g9(a.H[1])
    },
    $4a = new h9,
    a5a = function (a) {
        return (a = a.H[5]) ? new h9(a) : $4a
    };

g9.prototype.Ya = r("H");
var b5a = function (a) {
    a = a.H[1];
    return a != k ? a : 0
},
    c5a = function (a) {
        a = a.H[2];
        return a != k ? a : 0
    },
    d5a = function (a) {
        a = a.H[3];
        return a != k ? a : ""
    },
    e5a = new X8;
g9.prototype.Tb = function () {
    var a = this.H[0];
    return a ? new X8(a) : e5a
};

var l9 = function (a) {
    a.H[0] = a.H[0] || [];
    return new X8(a.H[0])
};

h9.prototype.Ya = r("H");
h9.prototype.getWidth = function () {
    var a = this.H[0];
    return a != k ? a : 0
};

h9.prototype.getHeight = function () {
    var a = this.H[1];
    return a != k ? a : 0
};

h9.prototype.Dl = function (a) {
    this.H[1] = a
};

var f5a = function (a) {
    a = a.H[2];
    return a != k ? a : ""
};

i9.prototype.Ya = r("H");
i9.prototype.getId = function () {
    var a = this.H[0];
    return a != k ? a : ""
};

i9.prototype.Za = function () {
    var a = this.H[1];
    return a != k ? a : ""
};

i9.prototype.sk = function (a) {
    this.H[1] = a
};

var g5a = new X8;
i9.prototype.Tb = function () {
    var a = this.H[2];
    return a ? new X8(a) : g5a
};

var m9 = function () {
    this.C = [0, 0, 0];
    this.D = 2
};

var n9 = function (a, b, c) {
    this.x = y(a) ? a : 0;
    this.y = y(b) ? b : 0;
    this.z = y(c) ? c : 0
};

n9.prototype.clone = function () {
    return new n9(this.x, this.y, this.z)
};

n9.prototype.Ya = function () {
    return [this.x, this.y, this.z]
};

var h5a = function (a, b) {
    this.P = a;
    this.N = b || [1];
    this.F = k;
    this.C = sD();
    this.K = sD();
    this.Q = sD();
    this.xr = l;
    this.U = Math.max(0, this.P.length - 1);
    this.G = 1;
    this.M = new Uint8Array([1, 1, 1, 1]);
    this.L = this.I = 1;
    this.V = qD();
    this.X = qD();
    this.D = rD()
};

v = h5a.prototype;
v.initialize = function (a, b) {
    if (!this.xr && !this.F) {
        this.F = a;
        var c = this.C;
        Z_(c);
        var d = j9(this.F),
            e = new d3,
            f = d.Tb();
        X4a(f, e);
        var g = e.xi(),
            j = b5a(d) || 1,
            d = c5a(d) || 1.1 * j,
            f = j0(f.Ec().Vj());
        g.M = h;
        g.N = h;
        g.P = h;
        g.D = j * f;
        g.near = 1;
        g.L = d / j;
        e.Vd(g);
        a2(e, c, c, i);
        s0(b2(e), c, c);
        r0(c, this.C);
        m0(this.C, -1, 1, -1);
        l0(this.C, 2, -2, 2);
        r0(this.C, this.K);
        pVa(this.K, this.Q);
        var e = this.F,
            m = A(this.r8, this, b),
            c = "";
        j9(e) && d5a(j9(e)) && (c = "data:image/jpeg;base64," + d5a(j9(e)));
        c ? (e = vz("IMG"), bB(e, ["load", "error"], function (a) {
            if ("error" == a.type) m(new Uint8Array([1, 1, 1, 1]), 1, 1);
            else {
                var a = a.target,
                    b = vz("CANVAS", {
                        width: a.width,
                        height: a.height
                    }).getContext("2d");
                b.drawImage(a, 0, 0);
                b = b.getImageData(0, 0, a.width, a.height);
                m(b.data, a.width, a.height)
            }
        }), e.src = c) : m(new Uint8Array([1, 1, 1, 1]), 1, 1)
    }
};

v.wh = r("xr");
v.Dv = u(1);
v.Ft = u(1);
v.sH = r("U");
v.lK = r("G");
v.y0 = function (a) {
    a = ip(a, 0, this.N.length - 1);
    return this.N[a]
};

v.rW = function (a) {
    for (var b = [], c = 0; 1 > c; c++) for (var d = 0; 1 > d; d++) {
        var e, f = c,
            g = d,
            j = a;
        e = this.V;
        var m = this.X;
        e[0] = 1 * f / (1 * this.G);
        m[0] = (1 * f + this.G) / (1 * this.G);
        e[1] = g / (1 * this.G);
        m[1] = e[1];
        e[2] = 0;
        m[2] = 0;
        q0(this.C, e, e);
        q0(this.C, m, m);
        D2(j, e[0], e[1], e[2], e);
        D2(j, m[0], m[1], m[2], m);
        f = e[0] - m[0];
        e = e[1] - m[1];
        e = Math.sqrt(f * f + e * e);
        a: {
            if (this.xr) for (m = this.U; 0 < m; m--) if (this.P[m] <= 1.4 * e) {
                e = m;
                break a
            }
            e = 0
        }
        m = new n9;
        m.x = d;
        m.y = c;
        m.z = e;
        b.push(m)
    }
    return b
};

v.Ky = r("C");
v.gY = r("K");
v.Q0 = r("Q");
v.V3 = function (a, b) {
    var c = 1;
    this.xr && (c = this.M[4 * (Math.floor((this.I - 1) * a) + Math.floor((this.L - 1) * b) * this.I)] / 255);
    return c
};

v.SO = function (a, b) {
    d0(this.D, a.dir);
    this.D[3] = 0;
    oVa(this.K, this.D, this.D);
    b.x = this.D[0] / this.D[3];
    b.y = this.D[1] / this.D[3]
};

v.r8 = function (a, b, c, d) {
    this.M = b;
    this.I = c;
    this.L = d;
    this.G = Math.max(this.I, this.L);
    this.xr = i;
    a()
};

v.z0 = function () {
    var a;
    this.F ? (a = this.F.H[6], a = a != k ? a : l) : a = l;
    return a
};

var o9 = function (a) {
    this.cg = new N0;
    this.cg.set(0);
    this.N = a || z;
    this.L = {};

    this.F = {};

    this.Q = "" + ua(this)
};

B(o9, iB);
o9.prototype.toString = r("Q");
o9.prototype.initialize = function () {
    this.N(this)
};

var j5a = function (a, b) {
    var c = b.toString();
    a.L[c] = b;
    a.F[c] && delete a.F[c];
    a.dispatchEvent(new i5a("TileReady", a, b.Ic(), b.Nc(), b.da()))
},
    k5a = function (a) {
        for (var b in a.F) return i;
        return l
    };

o9.prototype.listen = function (a, b, c, d) {
    return aB(this, a, b, c, d)
};

var i5a = function (a, b, c, d, e) {
    NA.call(this, a, b);
    this.x = c;
    this.y = d;
    this.zoom = e
};

B(i5a, NA);
var p9 = function (a, b, c, d) {
    o9.call(this, d);
    this.id = a;
    this.url = b;
    this.kc = k;
    this.C = c || [];
    this.No = new h5a(this.C);
    this.D = 1;
    this.mc = new m9;
    this.listen(["TileReady", "TileError"], A(this.JD, this))
};

B(p9, o9);
v = p9.prototype;
v.xh = r("kc");
v.dF = u(l);
v.Zz = function (a, b, c) {
    c.id = k;
    c.url = k;
    c.C = k;
    var d = b;
    if (!this.kc || this.kc.H[5] == k) b = -1;
    else if (b = a5a(this.kc), 0 == b.getWidth() || 0 == b.getHeight() || 0 == f5a(b).length) b = -1;
    else {
        a = ip(a, 0, 1);
        d = ip(d, 0, 1);
        a = Math.round(a * (b.getWidth() - 1));
        d = Math.round(d * (b.getHeight() - 1));
        a += d * b.getWidth();
        d = f5a(b).substr(4 * Math.floor(a / 3), 4);
        e3a();
        for (var e = d3a, f = [], g = 0; g < d.length;) {
            var j = e[d.charAt(g++)],
                m = g < d.length ? e[d.charAt(g)] : 0;
            ++g;
            var n = g < d.length ? e[d.charAt(g)] : 0;
            ++g;
            var p = g < d.length ? e[d.charAt(g)] : 0;
            ++g;
            (j == k || m == k || n == k || p == k) && ca(Error());
            f.push(j << 2 | m >> 4);
            64 != n && (f.push(m << 4 & 240 | n >> 2), 64 != p && f.push(n << 6 & 192 | p))
        }
        a = f[a % 3];
        b = 255 == a || a >= yd(b.H, 3) ? -1 : a
    }
    return 0 > b ? l : (b = new i9(xd(a5a(this.kc).H, 3)[b])) && b.H[0] != k && b.H[1] != k ? (c.id = b.getId(), c.url = b.Za(), c.C = b.Tb(), c.D = 2, c.F = 3, i) : l
};

v.gq = function (a) {
    this.D = ip(a, 0, 1)
};

v.setPosition = function (a, b, c, d) {
    this.mc.C[0] = a;
    this.mc.C[1] = b;
    this.mc.C[2] = c;
    y(d) && (this.mc.D = d)
};

v.Mt = r("D");
v.DC = function (a) {
    a.C[0] = this.mc.C[0];
    a.C[1] = this.mc.C[1];
    a.C[2] = this.mc.C[2];
    a.D = this.mc.D
};

v.Em = r("No");
var q9 = function (a, b) {
    1E-6 > c5a(j9(b)) - b5a(j9(b)) && (k9(b).H[2] = c5a(j9(b)) + 1E-6);
    a.kc = b;
    var c = j9(a.kc).Tb().Ec();
    a.setPosition(c.sm(), c.Vj(), c.Fe(), 1);
    var d = new h5a(a.C);
    d.initialize(b, A(function () {
        this.No = d;
        this.JD()
    }, a))
};

p9.prototype.JD = function (a) {
    a && "TileError" == a.type ? this.cg.set(2) : this.kc && (this.No.wh() && !k5a(this)) && this.cg.set(3)
};

var m5a = function (a, b, c, d) {
    this.K = a;
    this.ra = b;
    this.I = c;
    this.G = d;
    this.C = k;
    this.D = [];
    (new G0(A(function () {
        b.C.equals(0) && l5a(this)
    }, this))).Zb(b.C)
};

m5a.prototype.Gp = function (a) {
    var b = this.K.Gp(a);
    if (!b) return k;
    var c = new n5a;
    c.source = b;
    c.photo = new p9(a, "");
    J0(c.source.cg, 2, A(c.photo.cg.set, c.photo.cg, 2));
    J0(c.source.cg, 3, A(this.F, this, c));
    return c.photo
};

m5a.prototype.F = function (a) {
    3 == a.photo.cg.get() || (this.C === a || -1 != this.D.indexOf(a)) || (this.D.push(a), 0 == this.ra.C.get() && l5a(this))
};

var l5a = function (a) {
    if (a.C) {
        var b = a.G.vC(),
            c = new f9;
        c.H[6] = i;
        var d = k9(c);
        Y4a(a.I, l9(d));
        var e = c9(l9(d)),
            f = b.getWidth();
        e.H[0] = f;
        c9(l9(d)).Dl(b.getHeight());
        d.H[1] = 1;
        d.H[2] = 1.1;
        j5a(a.C.photo, new E8(0, 0, 0, b));
        q9(a.C.photo, c);
        delete a.C
    }
    0 < a.D.length && (a.C = a.D.shift(), 0 < a.D.length && a.ra.OI([a.D[0].source]), a.ra.En([a.C.source]), a.ra.run())
},
    n5a = ea();
var o5a = z;
o5a.C = function (a) {
    return a instanceof y1 ? new p5a(a) : new q5a(a)
};

var q5a = fa("Z");
q5a.prototype.vC = function () {
    var a = this.Z.canvas.width,
        b = this.Z.canvas.height,
        c = this.Z.getImageData(0, 0, a, b),
        d = new Uint8Array([0, 0, 0, 0]);
    if (c.data && c.data instanceof CanvasPixelArray) {
        for (var d = [], e = 0; e < c.length; e++) d.push(c[e]);
        d = new Uint8Array(d)
    } else c.data && c.data instanceof Uint8Array && (d = c.data);
    return new U8(d, a, b)
};

var p5a = fa("Z");
p5a.prototype.vC = function () {
    var a = this.Z,
        b = a.ql(),
        c = b.width,
        b = b.height,
        d = new ArrayBuffer(4 * c * b),
        d = new Uint8Array(d);
    a.readPixels(0, 0, c, b, 6408, 5121, d);
    return new U8(d, c, b)
};

var r5a = fa("C");
r5a.prototype.Gp = function (a) {
    var b = this.C.vC(),
        a = new p9(a, "", [b.getWidth()]);
    j5a(a, new E8(0, 0, 0, b));
    b = new f9;
    b.H[6] = i;
    q9(a, b);
    return a
};

var s5a = function (a) {
    return 4 == a.F ? new r5a(a.D) : 1 == a.F ? ((!a.source || !a.mu) && ca(Error("Incomplete configuration options.")), new m5a(a.source, a.mu, a.C, a.D)) : k
},
    t5a = function (a, b, c, d, e) {
        this.F = a;
        this.D = o5a.C(b);
        this.source = c || k;
        this.mu = d || k;
        this.C = e || k
    };

function u5a(a, b, c, d, e, f, g, j, m, n) {
    this.Z = a;
    this.oa = b;
    this.wg = c;
    this.C = e;
    this.I = 17664;
    this.F = f;
    this.L = g;
    this.D = m;
    this.K = j;
    this.G = n;
    this.M = [new v5a(a), this.F, this.D, this.K, this.L, this.C, this.G];
    a = new K0;
    a.C = A(this.U6, this, a);
    a.Zb(this.oa.Ep);
    this.dN = new d3;
    this.EC = uq("canvas");
    a = this.Z.ql();
    this.EC.width = a.width;
    this.EC.height = a.height;
    if (a = jWa(this.EC)) {
        var a = new y1(a),
            p;
        d && (b = new X0(d), p = S4a(new T4a(d, this.dN, b, a, k)), p.hz(2), Y0(b, new v2([new v5a(a), p])));
        d = s5a(new t5a(1, a, this.oa.Y, p, this.dN))
    } else d = k;
    this.NU = d;
    this.N = s5a(new t5a(4, this.Z))
}
v = u5a.prototype;
v.getContext = r("Z");
v.vC = function (a) {
    var b = this.oa.Kf;
    if (b) {
        b = this.N.Gp(b.id);
        if (a) {
            var c = new f9;
            c.H[6] = i;
            var d = k9(c);
            Y4a(a, l9(d));
            c9(l9(d)).H[0] = this.Z.ql().width;
            c9(l9(d)).Dl(this.Z.ql().height);
            q9(b, c)
        }
        b.initialize();
        this.oa.L = b
    }
};

v.H6 = function (a) {
    a.initialize();
    this.oa.L = a
};

v.run = function () {
    for (var a = 0; 8 > a; ++a) B1(this.Z, a);
    var b = w5a(this.oa);
    this.F && this.F.En(b);
    if (this.L) {
        var b = this.oa,
            c = b.lC();
        this.L.En([!b.G || !b.I || 0 === c ? k : b.M])
    }(b = this.oa.Kf) && (this.K && r9(b)) && this.K.En(x5a(b));
    this.D && (b && this.oa.Ep.get() ? this.D.En(y5a(b)) : this.D.En([]));
    b = [];
    (c = this.oa.L) && 3 == c.cg.get() && b.push(c);
    this.G && this.G.En(b);
    var b = 0 <= this.C.$().C.get().indexOf(1),
        d = w5a(this.oa),
        b = b && d.length,
        c = 0;
    if (b) {
        c = this.C.ra.ca;
        this.C.ra.ca = 1280;
        a = this.C;
        var e = this.oa,
            f;
        f = this.C.$().W.D;
        var g = u(l);
        if (!d || 1 > d.length) d = g;
        else {
            d = d[0];
            d.DC(z5a);
            var j = Nz(z5a.C[0]),
                m = Nz(z5a.C[1]),
                d = 2 == d.xh().I() ? g : A(function (a, b) {
                    var c;
                    c = J1(f, a, b, h);
                    c = O1(j, m, Nz(c.x), Nz(c.y));
                    if (100 < c) return l;
                    A5a(this, a, b, B5a, C5a);
                    var d = O1(j, m, B5a[0], B5a[1]);
                    return !d || c < d + 5
                }, e)
        }
        a.jv.nf = d
    }
    for (a = 0; a < this.M.length; a++)(d = this.M[a]) && d.run();
    b && (this.C.ra.ca = c & 17664, this.C.jv.nf = k)
};

v.U6 = function (a) {
    if (this.D) {
        var b = this.oa.Kf;
        a.get() && b ? this.D.En(y5a(b)) : this.D.En([])
    }
};

var s9 = function (a, b) {
    a.F && a.F.hz(b);
    a.G && a.G.hz(b)
},
    v5a = fa("Z");
v5a.prototype.run = function () {
    this.Z.viewport(0, 0, this.Z.ql().width, this.Z.ql().height);
    this.Z.clearColor(0, 0, 0, 1);
    this.Z.clear(16640)
};

var t9 = function (a, b, c) {
    this.cg = new N0;
    this.cg.set(3);
    this.N = String(ua(this));
    this.K = a;
    this.M = c;
    a = b0();
    a[0] = b[0];
    a[1] = b[1];
    a[2] = b[2];
    a[3] = b[3];
    this.F = a;
    this.mc = qD();
    this.I = e0();
    this.G = 2;
    this.C = i;
    this.D = sD();
    this.L = new s5
};

v = t9.prototype;
v.initialize = z;
v.toString = r("N");
v.dF = function (a, b, c, d) {
    X_(c, 0, 0, 0);
    X_(d, 0, 0, 0);
    return l
};

v.Zz = function (a, b, c) {
    c.id = k;
    c.D = k;
    c.F = k;
    return l
};

v.gq = function (a) {
    this.F[3] = a
};

v.Mt = function () {
    return this.F[3]
};

v.setPosition = function (a, b, c, d) {
    X_(this.mc, a, b, c);
    y(d) && (this.G = d);
    this.C = i
};

v.DC = function (a) {
    a.C[0] = this.mc[0];
    a.C[1] = this.mc[1];
    a.C[2] = this.mc[2];
    a.D = this.G
};

for (var u9 = new Float32Array(108), D5a = 2 * Math.PI / 35, v9 = 0, E5a = 0; 36 > E5a; E5a++) {
    var F5a = E5a * D5a;
    u9[v9] = Math.cos(F5a) / 2;
    u9[v9 + 1] = Math.sin(F5a) / 2;
    u9[v9 + 2] = 0;
    v9 += 3
}
var G5a = new Float32Array([0.809016995, 0.5, 0, -0.809016995, 0.5, 0, -0.809016995, -0.5, 0, 0.809016995, -0.5, 0]),
    w9 = qD(),
    x9 = e0(),
    y9 = e0(),
    H5a = sD();
t9.prototype.zb = function () {
    var a = 0;
    switch (this.K) {
    case 0:
        a = 4;
        break;
    case 1:
        a = 36
    }
    return a
};

var I5a = function (a, b, c) {
    this.F = a;
    this.C = b;
    this.D = c
};

I5a.prototype.Gp = function () {
    return new t9(this.F, this.C, this.D)
};

var J5a = function (a) {
    var b = new Float32Array([1, 1, 1, 0.3]);
    this.shape = a;
    this.color = b;
    this.scale = 1;
    this.scale = 2
},
    K5a = new J5a(1),
    L5a = new J5a(0);
var z9 = function (a) {
    this.H = a || []
},
    M5a = function (a) {
        this.H = a || []
    },
    N5a = function (a) {
        this.H = a || []
    },
    A9 = function (a) {
        this.H = a || []
    };

v = z9.prototype;
v.Ya = r("H");
v.getPanoId = function () {
    var a = this.H[0];
    return a != k ? a : ""
};

v.mW = function () {
    var a = this.H[2];
    return a != k ? a : ""
};

v.Ip = function (a) {
    this.H[2] = a
};

v.Oia = function () {
    var a = this.H[4];
    return a != k ? a : 0
};

var O5a = function (a) {
    a = a.H[5];
    return a != k ? a : 0
};

z9.prototype.I = function () {
    var a = this.H[6];
    return a != k ? a : 1
};

var P5a = function (a) {
    a = a.H[10];
    return a != k ? a : 0
};

v = z9.prototype;
v.ND = function () {
    var a = this.H[11];
    return a != k ? a : ""
};

v.o8 = function () {
    var a = this.H[12];
    return a != k ? a : ""
};

v.Ag = function () {
    var a = this.H[13];
    return a != k ? a : ""
};

v.Df = function (a) {
    this.H[13] = a
};

v.Dga = function () {
    var a = this.H[14];
    return a != k ? a : ""
};

v.Cga = function () {
    var a = this.H[15];
    return a != k ? a : ""
};

v.Ega = function () {
    var a = this.H[16];
    return a != k ? a : ""
};

v.OR = function () {
    var a = this.H[17];
    return a != k ? a : ""
};

var Q5a = new $8;
z9.prototype.we = function () {
    var a = this.H[3];
    return a ? new $8(a) : Q5a
};

var R5a = function (a) {
    a.H[3] = a.H[3] || [];
    return new $8(a.H[3])
},
    S5a = new X8;
z9.prototype.Tb = function () {
    var a = this.H[8];
    return a ? new X8(a) : S5a
};

var B9 = function (a) {
    a.H[8] = a.H[8] || [];
    return new X8(a.H[8])
},
    T5a = function (a) {
        a.H[9] = a.H[9] || [];
        return new Y8(a.H[9])
    };

v = z9.prototype;
v.bz = function () {
    return yd(this.H, 19)
};

v.SC = function (a) {
    return new N5a(xd(this.H, 19)[a])
};

v.UN = function () {
    return yd(this.H, 20)
};

v.EV = function (a) {
    return new M5a(xd(this.H, 20)[a])
};

v.t$ = function () {
    return yd(this.H, 21)
};

v.getPhotos = function (a) {
    return new A9(xd(this.H, 21)[a])
};

v = M5a.prototype;
v.Ya = r("H");
v.Sca = function () {
    var a = this.H[0];
    return a != k ? a : ""
};

v.Ip = function (a) {
    this.H[0] = a
};

v.getPanoId = function () {
    var a = this.H[1];
    return a != k ? a : ""
};

v.Ag = function () {
    var a = this.H[3];
    return a != k ? a : ""
};

v.Df = function (a) {
    this.H[3] = a
};

v = N5a.prototype;
v.Ya = r("H");
v.Sv = function () {
    var a = this.H[0];
    return a != k ? a : 0
};

v.getPanoId = function () {
    var a = this.H[1];
    return a != k ? a : ""
};

v.Ag = function () {
    var a = this.H[3];
    return a != k ? a : ""
};

v.Df = function (a) {
    this.H[3] = a
};

A9.prototype.Ya = r("H");
A9.prototype.Nt = function () {
    var a = this.H[1];
    return a != k ? a : ""
};

var U5a = function (a, b) {
    this.C = [0, 0, 0];
    this.D = [0, 0];
    this.G = a;
    this.F = a / (2 * Math.PI);
    this.K = 1 / this.F;
    this.I = b / Math.PI;
    this.L = 1 / this.I
},
    V5a = function (a, b, c) {
        var d = (c + 0.5) * a.L,
            c = Math.sin(d),
            d = Math.cos(d),
            b = 1.5 * Math.PI - b * a.K,
            e = Math.sin(b);
        a.C[0] = c * Math.cos(b);
        a.C[1] = c * e;
        a.C[2] = d;
        return a.C
    };

var W5a = function () {
    this.D = this.C = 0;
    this.Wc = l
};

v = W5a.prototype;
v.initialize = function (a, b, c, d, e) {
    this.C = a;
    this.D = b;
    this.I = d;
    this.F = e;
    this.G = new U5a(a, b);
    this.Wc = i
};

v.getWidth = r("C");
v.getHeight = r("D");
v.qR = function (a, b) {
    if (!this.Wc) return 0;
    var c = V5a(this.G, a, b);
    return this.kt(c)
};

v.kt = function (a, b, c) {
    if (!this.Wc) return 0;
    var d, e = this.G;
    d = Math.acos(a[2]) * e.I - 0.5;
    var f = (Math.atan2(a[0], a[1]) + Math.PI) * e.F;
    f >= e.G - 0.5 && (f -= e.G);
    e.D[0] = f;
    e.D[1] = d;
    d = e.D;
    e = Math.floor(d[0] + 0.5);
    d = Math.floor(d[1] + 0.5);
    e >= this.C ? e -= this.C : 0 > e && (e += this.C);
    d >= this.D ? d -= this.D : 0 > d && (d += this.D);
    c && (c[0] = e, c[1] = d);
    f = this.I[d * this.C + e];
    if (0 == f) return 0;
    f *= 4;
    c = this.F[f++];
    e = this.F[f++];
    d = this.F[f++];
    f = this.F[f++];
    b && (b[0] = c, b[1] = e, b[2] = d);
    return ip(f / (a[0] * c + a[1] * e + a[2] * d), 3, 500)
};

var X5a = function () {
    this.wh = l;
    this.I = sD();
    this.M = sD();
    this.ba = sD();
    this.Y = this.F = this.P = this.X = this.G = this.D = 0;
    this.U = this.K = k;
    this.N = e0();
    this.ea = e0();
    this.L = qD();
    this.ca = new Float32Array(6);
    this.ha = [i, i, i, i, i, i];
    this.Q = t0();
    this.V = [b0(), b0(), b0(), b0(), b0(), b0()]
};

v = X5a.prototype;
v.initialize = function (a, b) {
    if (!this.wh) {
        this.C = b;
        var c = new d3;
        X4a(a.Tb(), c);
        var d = this.I,
            e = c.Bf(),
            f = c.Cf(),
            g = c.xg();
        Z_(d);
        $_(d, e, f, g, 1);
        d = j0(a.Tb().Ec().Vj());
        l0(this.I, d, d, d);
        mVa(this.I, c.K);
        var d = this.I,
            j = c.Yd(),
            e = d[4],
            f = d[5],
            g = d[6],
            m = d[7],
            n = d[8],
            p = d[9],
            q = d[10],
            s = d[11],
            t = Math.cos(j),
            j = Math.sin(j);
        d[4] = e * t + n * j;
        d[5] = f * t + p * j;
        d[6] = g * t + q * j;
        d[7] = m * t + s * j;
        d[8] = e * -j + n * t;
        d[9] = f * -j + p * t;
        d[10] = g * -j + q * t;
        d[11] = m * -j + s * t;
        mVa(this.I, c.lf());
        r0(this.I, this.M);
        pVa(this.M, this.ba);
        this.D = a.Tb().getScreenSize().getWidth() / a.we().getWidth();
        this.G = a.Tb().getScreenSize().getHeight() / a.we().getHeight();
        this.X = O5a(a);
        for (this.P = O5a(a); this.D != Math.floor(this.D) || this.G != Math.floor(this.G);) this.D *= 2, this.G *= 2, this.P++;
        this.Y = a.Tb().getScreenSize().getWidth() / (1 << this.P) / this.D;
        c = Math.max(360 / this.D, 180 / this.G);
        for (this.F = 1; 6 < c;) c /= 2, this.F *= 2;
        c = this.C;
        d = this.G * this.F + 1;
        n = d - 1;
        e = this.D * this.F;
        this.K = new Float32Array(3 * e * d);
        f = this.N;
        g = -Math.PI;
        m = 2 * Math.PI / e;
        n = -Math.PI / n;
        p = 0.5 * Math.PI;
        for (q = 0; q < d; ++q, p += n) {
            s = g;
            for (t = 0; t < e; ++t, s += m) X_(f, Math.sin(s) * Math.cos(p), Math.cos(s) * Math.cos(p), Math.sin(p)), j = c.kt(f), 0 == j && (j = 500), v0(f, j, f), j = 3 * (q * e + t), this.K[j + 0] = f[0], this.K[j + 1] = f[1], this.K[j + 2] = f[2]
        }
        c = this.U = new Float32Array(6 * this.D * this.G);
        d = this.N;
        e = this.F;
        for (f = 0; f < this.G; f++) for (g = 0; g < this.D; g++) {
            m = 6 * (f * this.D + g);
            c[m + 0] = Infinity;
            c[m + 1] = Infinity;
            c[m + 2] = Infinity;
            c[m + 3] = -Infinity;
            c[m + 4] = -Infinity;
            c[m + 5] = -Infinity;
            for (n = 0; n < e + 1; n++) for (p = 0; p < e + 1; p++) C9(this, g, f, p, n, d), d[0] < c[m + 0] && (c[m + 0] = d[0]), d[1] < c[m + 1] && (c[m + 1] = d[1]), d[2] < c[m + 2] && (c[m + 2] = d[2]), d[0] > c[m + 3] && (c[m + 3] = d[0]), d[1] > c[m + 4] && (c[m + 4] = d[1]), d[2] > c[m + 5] && (c[m + 5] = d[2])
        }
        this.wh = i
    }
};

v.sH = r("P");
v.Dv = r("D");
v.Ft = r("G");
v.y0 = function (a) {
    return 1 << this.sH() - a
};

v.lK = r("F");
v.rW = function (a) {
    a2(a, this.Ky(), this.Q);
    s0(b2(a), this.Q, this.Q);
    BWa(this.V, this.Q);
    var b = [],
        c = this.ca,
        d = new i0,
        e = new Cw,
        f = a.getWidth(),
        g = a.getHeight();
    a.xo(f / 2, g / 2, d);
    this.SO(d, e);
    d = Math.floor(e.x * this.Dv());
    e = Math.floor(e.y * this.Ft());
    this.L[0] = a.Bf();
    this.L[1] = a.Cf();
    this.L[2] = a.xg();
    q0(this.M, this.L, this.L);
    var j = this.L,
        a = a.Yh(),
        m = this.N,
        n = this.ea;
    var p = this.lK();
    e >= Math.floor(this.Ft() / 2) ? (C9(this, d, e, 0, 0, m), C9(this, d, e, p, 0, n)) : (C9(this, d, e, 0, p, m), C9(this, d, e, p, p, n));
    w0(m, j, m);
    w0(n, j, n);
    j = c0(m) * c0(n);
    m = (m[0] * n[0] + m[1] * n[1] + m[2] * n[2]) / j;
    j = 1E-6 < Math.abs(j) ? Math.acos(m) : 0;
    g = 2 * Math.atan((0 != g ? f / g : 0) * Math.tan(0.5 * a));
    f = Math.ceil(Math.log((1E-6 < Math.abs(g) ? j * f / g : 0) / (Math.sin(Math.PI * e / (this.Ft() + 1)) || 1) / this.Y) / Math.LN2);
    g = Math.max(0, Math.min(this.X, f));
    f = new n9;
    f.x = d;
    f.y = e;
    f.z = g;
    for (d = 0; d < this.Ft(); ++d) for (e = 0; e < this.Dv(); ++e) if (g = zWa, CWa(c, this.U, 6 * (d * this.D + e)), a = DWa(c, this.V), a != g.PG) {
        if (a != g.yU) {
            a: {
                for (var a = this.V, j = e, m = d, q = l, n = this.N, p = this.lK(), s = this.ha, t = 0; 6 > t; ++t) s[t] = i;
                for (var x = 0; x < p + 1 && !q; ++x) for (var D = 0; D < p + 1 && !q; ++D) {
                    C9(this, j, m, D, x, n);
                    q = i;
                    for (t = 0; 6 > t; t++) {
                        var I = a[t],
                            I = !(0 < n[0] * I[0] + n[1] * I[1] + n[2] * I[2] + I[3]),
                            q = q && I;
                        s[t] = s[t] && !I
                    }
                }
                for (t = 0; 6 > t; ++t) if (s[t]) {
                    a = 0;
                    break a
                }
                a = 2
            }
            if (a == g.PG) continue
        }
        g = new n9;
        g.x = e;
        g.y = d;
        g.z = f.z;
        b.push(g)
    }
    return b
};

v.Ky = r("I");
v.gY = r("M");
v.Q0 = r("ba");
v.V3 = function (a, b) {
    var c = this.C.qR(a * this.C.getWidth(), b * this.C.getHeight());
    0 == c && (c = 500);
    return c
};

v.SO = function (a, b) {
    var c = this.N;
    p0(this.M, a.dir, c);
    u0(c, c);
    b.x = Math.atan2(c[0], c[1]) / (2 * Math.PI) + 0.5;
    b.y = Math.acos(c[2]) / Math.PI
};

var C9 = function (a, b, c, d, e, f) {
    var g = a.F * a.D,
        b = 3 * ((c * a.F + e) * g + (b * a.F + d) % g);
    f[0] = a.K[b + 0];
    f[1] = a.K[b + 1];
    f[2] = a.K[b + 2]
};

X5a.prototype.z0 = u(l);
var D9 = function () {
    this.D = this.C = 0;
    this.Wc = l
};

D9.prototype.initialize = function (a, b, c, d) {
    this.C = a;
    this.D = b;
    this.F = c;
    this.G = d;
    this.Wc = i
};

D9.prototype.getWidth = r("C");
D9.prototype.getHeight = r("D");
D9.prototype.getPanoId = function (a, b) {
    if (!this.Wc) return "";
    var c = this.F[b * this.C + a];
    return 0 == c ? "" : this.G[c - 1]
};

var E9 = function (a, b, c) {
    this.cg = new N0;
    this.cg.set(3);
    this.G = String(ua(this));
    this.F = b;
    this.No = c;
    this.C = [];
    this.N = l;
    this.D = k;
    t0();
    c = -4.525 - 0.025;
    b = this.C;
    b.push(x0(-0.44, 1.05, c));
    b.push(x0(-0.44, 1.2 + 0.15, c));
    b.push(x0(0, 1.2, c));
    b.push(x0(0, 1.5, c));
    b.push(x0(0.44, 1.05, c));
    b.push(x0(0.44, 1.2 + 0.15, c));
    b.push(y0(b[b.length - 1]));
    b.push(x0(-0.44, 1.2 + 0.15, -4.5));
    b.push(y0(b[b.length - 1]));
    b.push(x0(-0.44, 1.05, -4.5));
    b.push(x0(0, 1.5, -4.5));
    b.push(x0(0, 1.2, -4.5));
    b.push(x0(0.44, 1.2 + 0.15, -4.5));
    b.push(x0(0.44, 1.05, -4.5));
    for (var c = new Float32Array(42), d = 0; d < b.length; d++) for (var e = 0; 3 > e; e++) c[3 * d + e] = b[d][e];
    this.D = EWa(c);
    n0(Y5a, -Nz(a));
    for (d = 0; d < b.length; d++) p0(Y5a, b[d], b[d]);
    HWa(this.D, Y5a)
},
    Y5a = t0();
v = E9.prototype;
v.initialize = z;
v.toString = r("G");
v.dF = function (a, b, c, d) {
    X_(c, 0, 0, 0);
    X_(d, 0, 0, 0);
    return l
};

v.Zz = function (a, b, c) {
    c.id = this.F;
    c.D = 1;
    c.F = 1;
    return i
};

v.gq = ea();
v.Mt = u(1);
v.setPosition = ea();
v.DC = function (a) {
    a.C[0] = 0;
    a.C[1] = 0;
    a.C[2] = 0;
    a.D = 2
};

v.Ij = fa("N");
v.getPanoId = r("F");
var F9 = function (a, b, c) {
    this.cg = new N0;
    this.cg.set(3);
    this.N = String(ua(this));
    this.M = a;
    this.F = c;
    this.L = l;
    this.K = [];
    this.C = 0;
    if (!this.F || 1 > this.F.length) a = k;
    else {
        a = vz("canvas");
        c = a.getContext("2d");
        Z5a(c);
        var d = this.F,
            e = [],
            f = "",
            g = d;
        if (1024 < c.measureText(d).width) for (var d = d.split(" "), j = 0, m = 1, n = 0; n < d.length && j < m; n++) f = f + d[n] + " ", g = g.substring(d[n].length + 1), j = c.measureText(f).width, m = c.measureText(g).width;
        f && e.push(f);
        g && e.push(g);
        f = 0;
        g = 100 * e.length;
        0 != (g & g - 1) && (d = $5a(g), this.G = g / d, g = d);
        a.height = g;
        Z5a(c);
        g = c.measureText(e[0]);
        this.C = f = Math.max(f, g.width);
        0 != (f & f - 1) && (g = $5a(f), this.I = f / g, f = g);
        a.width = f;
        Z5a(c);
        c.strokeText(e[0], 0, 0);
        c.fillText(e[0], 0, 0);
        e[1] && (this.L = i, f = (this.C - c.measureText(e[1]).width) / 4, c.strokeText(e[1], f, 100), c.fillText(e[1], f, 100))
    }
    this.P = a;
    this.D = this.I = this.G = 1;
    c = 0.6 * (this.L ? 2 : 1);
    e = 2 * c / 1.25 / 80;
    f = 1.25 * c;
    a = this.K;
    a.push(x0(1 * c, 3.5, -3));
    a.push(x0(-1 * c, 3.5, -3));
    a.push(x0(f, this.C * e + 3.5, -3));
    a.push(x0(-1 * f, this.C * e + 3.5, -3));
    for (c = 0; c < a.length; c++) for (e = 0; 3 > e; e++) a6a[3 * c + e] = a[c][e];
    n0(b6a, -Nz(b));
    for (c = 0; c < a.length; c++) p0(b6a, a[c], a[c])
},
    b6a = t0(),
    a6a = new Float32Array(12),
    $5a = function (a) {
        for (var b = 1; b < a;) b <<= 1;
        return b
    };

F9.prototype.initialize = z;
F9.prototype.toString = r("N");
F9.prototype.Mt = r("D");
F9.prototype.gq = fa("D");
var Z5a = function (a) {
    a.fillStyle = "rgba(255, 255, 255, 0.7)";
    a.font = "bold 80px Arial";
    a.textBaseline = "top";
    a.strokeStyle = "rgba(0, 0, 0, 0.15)";
    a.lineWidth = 2;
    a.shadowOffsetX = -1.5;
    a.shadowOffsetY = -1.5;
    a.shadowBlur = 4;
    a.shadowColor = "rgba(0, 0, 0, 0.5)"
};

F9.prototype.dF = function (a, b, c, d) {
    X_(c, 0, 0, 0);
    X_(d, 0, 0, 0);
    return l
};

F9.prototype.Zz = function (a, b, c) {
    c.id = k;
    c.D = k;
    c.F = k;
    return l
};

var G9 = function (a, b) {
    o9.call(this, b);
    this.id = a;
    this.kc = k;
    this.C = new W5a;
    this.P = new D9;
    this.K = this.I = k;
    this.No = new X5a;
    this.D = 1;
    this.M = [];
    this.mc = new m9;
    this.G = [];
    this.listen(["TileReady", "TileError"], A(this.JD, this))
};

B(G9, o9);
v = G9.prototype;
v.xh = r("kc");
v.dF = function (a, b, c, d) {
    var e;
    e = c6a(this);
    e.Wc ? (a = ip(a, 0, 1), b = ip(b, 0, 1), a *= e.getWidth() - 1, b *= e.getHeight() - 1, b = V5a(e.G, a, b), e = e.kt(b, d), 0 == e ? e = l : (v0(b, e, c), e = i)) : e = l;
    if (!e) return X_(c, 0, 0, 0), X_(d, 0, 0, 0), l;
    q0(this.Em().Ky(), c, c);
    p0(this.Em().Q0(), d, d);
    u0(d, d);
    return i
};

v.Zz = function (a, b, c) {
    a = ip(a, 0, 1);
    b = ip(b, 0, 1);
    a = Math.round(a * (d6a(this).getWidth() - 1));
    b = Math.round(b * (d6a(this).getHeight() - 1));
    c.id = d6a(this).getPanoId(a, b);
    if (!c.id) return c.id = k, c.D = k, c.F = k, l;
    c.D = 1;
    c.F = 1;
    return i
};

v.gq = function (a) {
    this.D = a;
    for (var b = 0; b < this.G.length; b++) this.G[b].gq(a)
};

v.Mt = r("D");
v.setPosition = function (a, b, c, d) {
    this.mc.C[0] = a;
    this.mc.C[1] = b;
    this.mc.C[2] = c;
    y(d) && (this.mc.D = d)
};

v.DC = function (a) {
    a.C[0] = this.mc.C[0];
    a.C[1] = this.mc.C[1];
    a.C[2] = this.mc.C[2];
    a.D = this.mc.D
};

var x5a = function (a) {
    if (0 == a.M.length) for (var b = 0; b < a.kc.bz(); b++) {
        var c = a.kc.SC(b);
        a.M.push(new E9(c.Sv() - P5a(a.kc), c.getPanoId(), a.No))
    }
    return a.M
},
    d6a = function (a) {
        a.K && (a.K(a.P), a.K = k);
        return a.P
    },
    c6a = function (a) {
        a.I && (a.I(a.C), a.I = k);
        return a.C
    };

G9.prototype.Em = function () {
    !this.No.wh && this.kc && this.No.initialize(this.kc, c6a(this));
    return this.No
};

var y5a = function (a) {
    if (a.kc) {
        var b = a.kc.bz();
        if (0 === a.G.length && 0 < b) for (var c = 0; c < b; c++) {
            var d = a.kc.SC(c),
                e = d.Sv() - P5a(a.kc);
            a: {

                var f = d.Ag(),
                    d = a.kc.Ag(),
                    g = f.split("/");
                if (1 == g.length) d = f;
                else {
                    for (f = 0; f < g.length; ++f) {
                        var j = Eg(g[f]);
                        if (j == d) {
                            d = j;
                            break a
                        }
                    }
                    d = Eg(g[0])
                }
            }
            e = new F9(a.No, e, d);
            e.gq(a.D);
            a.G.push(e)
        }
    }
    return a.G
};

G9.prototype.JD = function (a) {
    if (a && "TileError" == a.type && 0 == a.x && 0 == a.y && 0 == a.zoom) this.cg.set(2);
    else {
        if (a = this.kc) a = !! this.L["0|0|0"] && !k5a(this);
        a && this.cg.set(3)
    }
};

var H9 = function () {
    this.C = 0;
    this.D = 1;
    this.G = 0;
    this.F = k
};

v = H9.prototype;
v.cancel = function () {
    return 3 != this.C ? (this.C = 3, this.F ? this.F() : l) : l
};

v.start = function () {
    0 != this.C && ca(Error("Trying to reuse an Rpc object. Status is not INACTIVE"));
    this.C = 1
};

v.done = ea();
v.ao = function (a) {
    0 == a && ca(Error("Trying to set the Rpc status to INACTIVE."));
    this.C = a
};

v.Gf = r("C");
v.clone = function () {
    var a = new H9;
    a.D = this.D;
    return a
};

var I9 = function (a) {
    this.Eb = {};

    this.Eb.panoid = a
};

I9.prototype.toString = function () {
    var a;
    a: {
        if (a = this.Eb) {
            var b = [],
                c;
            for (c in a) hVa(c, a[c], b);
            b[0] = "";
            a = b.join("");
            if ("" != a) break a
        }
        a = ""
    }
    return a
};

var e6a = function (a) {
    I9.call(this, a);
    this.Eb.output = "json";
    this.Eb.dmz = "1";
    this.Eb.pmz = "1";
    this.Eb.ph = "1"
};

B(e6a, I9);
window.google || (window.google = {});
window.google.time = function () {
    return (new Date).getTime()
};

google.VZ = "";
var J9 = {
    ie: l,
    i3: l,
    webkit: l,
    opera: l
},
    K9 = {
        ie: l,
        g3: l,
        OB: l,
        j3: l,
        k3: l,
        f3: l,
        pja: l,
        oja: l,
        iM: l,
        zT: l,
        opera: l,
        jM: l
    },
    L9 = "",
    M9 = "",
    f6a = function (a) {
        for (var b in J9) J9[b] = l;
        for (var c in K9) K9[c] = l;
        b = c = k;
        if (window.opera) {
            J9.opera = i;
            K9.opera = i;
            var d = window.opera.version;
            d ? M9 = L9 = sa(d) ? d() : d : c = b = /Opera[\\/\\s](\\S + ) /
        } else {
            0 <= a.indexOf("MSIE") ? (J9.ie = i, K9.ie = i, c = b = /MSIE\s+([^\);]+)(\)|;)/) : 0 <= a.indexOf("WebKit") ? (J9.webkit = i, c = /Version\/ (\S + ) /, 0 <= a.indexOf("Silk-Accelerated") ? (K9.iM = i, K9.jM = i, b = c) : 0 <= a.indexOf("Android") && 0 > a.indexOf("Mobile") ? (K9.iM = i, 0 <= a.indexOf("Chrome") && (K9.pja = i), b = c) : 0 <= a.indexOf("Android") && 0 <= a.indexOf("Mobile") ? (K9.zT = i, 0 <= a.indexOf("Chrome") && (K9.oja = i), b = c) : 0 <= a.indexOf("Chrome") ? (K9.f3 = i, b = /Chrome\/ (\S + ) /) : 0 <= a.indexOf("Safari") && (K9.OB = i, b = c), 0 <= a.indexOf("iPad") ? (K9.j3 = i, K9.OB || (K9.OB = i, b = c)) : 0 <= a.indexOf("iPhone") && (K9.k3 = i, K9.OB || (K9.OB = i, b = c)), c = /WebKit\/ (\S + ) /) : 0 <= a.indexOf("Gecko") && (J9.i3 = i, 0 <= a.indexOf("Firefox") && (K9.g3 = i, b = /Firefox\/ (\S + ) /), c = /rv\:([^\);]+)(\)|;)/);
        }
        c && (L9 = (c = c.exec(a)) ? c[1] : "");
        b && (M9 = (c = b.exec(a)) ? c[1] : "", K9.ie && (a = document ? document.documentMode : h) && a > parseFloat(M9) && (M9 = a.toFixed(1).toString()));
        ka("google.browser.engine.IE", J9.ie, h);
        ka("google.browser.engine.GECKO", J9.i3, h);
        ka("google.browser.engine.WEBKIT", J9.webkit, h);
        ka("google.browser.engine.OPERA", J9.opera, h);
        ka("google.browser.engine.version", L9, h);
        ka("google.browser.product.IE", K9.ie, h);
        ka("google.browser.product.FIREFOX", K9.g3, h);
        ka("google.browser.product.SAFARI", K9.OB, h);
        ka("google.browser.product.IPAD", K9.j3, h);
        ka("google.browser.product.IPHONE", K9.k3, h);
        ka("google.browser.product.CHROME", K9.f3, h);
        ka("google.browser.product.ANDROID_TABLET", K9.iM, h);
        ka("google.browser.product.ANDROID_MOBILE", K9.zT, h);
        ka("google.browser.product.KINDLE_FIRE", K9.jM, h);
        ka("google.browser.product.OPERA", K9.opera, h);
        ka("google.browser.product.version", M9, h)
    };

f6a(google.ua || window.navigator.userAgent);
var g6a = function (a, b) {
    for (var c = 0, d = a.replace(/^\\s+|\\s+$/g, "").split("."), e = b.replace(/^\\s+|\\s+$/g, "").split("."), f = Math.max(d.length, e.length), g = 0; 0 == c && g < f; g++) {
        var j = d[g] || "",
            m = e[g] || "",
            n = /(\\d*)(\\D*)/g,
            p = /(\\d*)(\\D*)/g;
        do {
            var q = n.exec(j) || ["", "", ""],
                s = p.exec(m) || ["", "", ""];
            if (0 == q[0].length && 0 == s[0].length) break;
            c = ((0 == q[1].length ? 0 : parseInt(q[1], 10)) < (0 == s[1].length ? 0 : parseInt(s[1], 10)) ? -1 : (0 == q[1].length ? 0 : parseInt(q[1], 10)) > (0 == s[1].length ? 0 : parseInt(s[1], 10)) ? 1 : 0) || ((0 == q[2].length) < (0 == s[2].length) ? -1 : (0 == q[2].length) > (0 == s[2].length) ? 1 : 0) || (q[2] < s[2] ? -1 : q[2] > s[2] ? 1 : 0)
        } while (0 == c)
    }
    return c
},
    N9 = function (a) {
        return 0 <= g6a(M9, a)
    };

ka("google.browser.init", f6a, h);
ka("google.browser.compareVersions", g6a, h);
ka("google.browser.isEngineVersion", function (a) {
    return 0 <= g6a(L9, a)
}, h);
ka("google.browser.isProductVersion", N9, h);
ka("google.browser.getBrowserDimension", function (a) {
    var b = 0 == a || 2 == a,
        a = 0 == a || 1 == a ? "Height" : "Width";
    if (J9.webkit && (K9.iM || K9.zT || K9.jM)) {
        if (K9.jM) return b = window.screen.width, 600 == b ? "Width" == a ? 600 : 1024 : 1024 == b ? "Width" == a ? 1024 : 600 : window.screen[a.toLowerCase()];
        if ("Width" == a) return document.documentElement.offsetWidth;
        b = window.screen.height / window.screen.width;
        0 < b && b < Number.MAX_VALUE || (b = 1);
        return Math.round(document.documentElement.offsetWidth * b)
    }
    if (b) {
        if (window["inner" + a]) return window["inner" + a];
        if (document.documentElement && document.documentElement["offset" + a]) return document.documentElement["offset" + a]
    } else
    return ("CSS1Compat" == document.compatMode ? document.documentElement : document.body)["client" + a];
    return 0
}, h);
ka("google.browser.Dimension", {
    kla: 0,
    jla: 1,
    Lla: 2,
    Kla: 3
}, h);
var h6a = /^(\\w+)?(?:\\.(.+))?$/,
    i6a = /^#([\\w-]+)$/,
    j6a = function (a) {
        return (document.getElementById("xjsc") || document.body).appendChild(a)
    },
    k6a = function (a, b) {
        var c;
        if (c = a.match(i6a)) {
            var d = document.getElementById(c[1]);
            return d ? [d] : []
        }
        c = a.match(h6a);
        d = c[2] && RegExp("\\\\b" + c[2] + "\\\\b");
        c = (b || document).getElementsByTagName(c[1] || "*");
        for (var e = [], f = 0, g; g = c[f++];)(!d || d.test(g.className)) && e.push(g);
        return e
    },
    O9 = function (a, b) {
        for (var c = 1; c < arguments.length; c += 2) {
            var d = arguments[c],
                e = arguments[c + 1],
                f = a.style;
            f && d in f ? f[d] = e : d in a ? a[d] = e : J9.ie && (f && "opacity" == d) && (a.zoom = 1, d = (f.filter || "").replace(/alpha\\([^)]*\\)/, ""), isNaN(parseFloat(e)) || (d += "alpha(opacity=" + 100 * e + ")"), f.filter = d)
        }
        return a
    };

ka("google.dom.append", j6a, h);
ka("google.dom.create", function (a, b) {
    var c = a.match(h6a),
        d = document.createElement(c[1]);
    c[2] && (d.className = c[2]);
    b && (d.innerHTML = b);
    return d
}, h);
ka("google.dom.get", function (a, b) {
    return k6a(a, b)[0] || k
}, h);
ka("google.dom.getAll", k6a, h);
ka("google.dom.remove", Rt, h);
ka("google.dom.set", O9, h);
var P9 = 0,
    l6a = 0,
    Q9 = [],
    m6a = da(),
    n6a = function () {
        ++l6a;
        for (var a = 0, b; b = Q9[a++];) {
            var c = google.time() - b.mja;
            if (c >= b.Ro || b.iq) {
                for (var d = 0, e = h; e = b.e3[d++];) O9(e[0], e[1], e[6] ? "rgb(" + e[3].join(",") + ")" : e[3] + e[5]);
                b.iq = i;
                b.Oe && b.Oe();
                b = 0
            } else {
                for (d = 0; e = b.e3[d++];) {
                    var f = e[4](c / b.Ro),
                        g;
                    if (e[6]) {
                        g = R9(e[2][0], e[3][0], f, i);
                        var j = R9(e[2][1], e[3][1], f, i),
                            f = R9(e[2][2], e[3][2], f, i);
                        g = "rgb(" + [g, j, f].join() + ")"
                    } else g = R9(e[2], e[3], f, "px" == e[5]);
                    O9(e[0], e[1], g + e[5])
                }
                b = 1
            }
            b || Q9.splice(--a, 1)
        }
        Q9.length || (window.clearInterval(P9), P9 = 0)
    },
    R9 = function (a, b, c, d) {
        a += (b - a) * c;
        return d ? Math.round(a) : a
    },
    o6a = function (a) {
        for (var a = a.match(/#(..)(..)(..)/).slice(1), b = 0; 3 > b; ++b) a[b] = parseInt(a[b], 16);
        return a
    };

var p6a, S9, q6a = {},
    T9 = {},
    r6a = [],
    s6a = l,
    t6a = l,
    v6a = function (a, b) {
        r6a.push(a);
        T9[a] = b;
        if (s6a && google.bla) for (var c = 0, d = google.gm.length; c < d; c++) google.gm[c][0] == a && u6a("init", google.gm, c)
    },
    u6a = function (a, b, c) {
        try {
            var d = T9[b[c][0]];
            if (d && d[a]) d[a](b[c][1])
        } catch (e) {
            google.ml(e, l, {
                cause: "m" + a,
                index: c,
                mid: b[c] && b[c][0]
            })
        }
    };

if (google.Ula) if (google.gm) for (var w6a = 0, x6a; x6a = google.gm[w6a++];) {
    if (29 == x6a[0]) {
        google.j.cfg = x6a[1];
        break
    }
} else google.zp && (google.j.cfg = google.zp[29]);
var U9 = k,
    y6a = function () {
        var a = U9.value;
        a ? S9 = eval("(" + a + ")") : S9 = {}
    };

ka("google.initHistory", function () {
    p6a = google.VZ;
    if (U9 = document.getElementById("hcache")) {
        y6a();
        var a = S9[p6a];
        a && (google.gm = a, t6a = i)
    }
}, h);
ka("google.med", function (a) {
    if (google.gm || google.zp) {
        if (google.zp && (!google.gm || !t6a)) {
            var b;
            if (google.zp == q6a) b = [];
            else {
                b = [];
                for (var c = {}, d = 0; d < r6a.length; ++d) {
                    var e = r6a[d];
                    if (google.zp[e] || T9[e] && T9[e]._e) b.push([e, google.zp[e] || {}]), c[e] = i, delete google.zp[e]
                }
                for (e in google.zp) d = parseInt(e, 10), d in c || (b.push([d, google.zp[d]]), c[d] = i);
                google.zp = q6a
            }
            b.length && (google.gm = b)
        }
        b = google.gm;
        c = 0;
        for (e = b.length; c < e; c++) u6a(a, b, "dispose" == a ? e - c - 1 : c);
        "dispose" == a && (google.gm = k, google.zp = k);
        "init" == a ? s6a = i : "dispose" == a && (s6a = l)
    }
}, h);
ka("google.register", v6a, h);
ka("google.save", function (a, b) {
    if (U9) {
        var c;
        a: {
            if (google.gm) {
                c = 0;
                for (var d; d = google.gm[c++];) if (d[0] == a) {
                    c = c - 1;
                    break a
                }
            }
            c = -1
        }
        0 <= c && (google.gm[c][1] = b, y6a(), S9[p6a] = google.gm, U9.value = lC(S9))
    }
}, h);
ka("google.exportSymbol", function (a, b, c) {
    ka(a, b, c)
}, h);
ka("google.exportProperty", function (a, b, c) {
    a[b] = c
}, h);
ka("google.bindFn", A, h);
ka("google.partial", ya, h);
ka("google.xhr", X6, h);
ka("google.fx.animate", function (a, b, c) {
    for (var d = 0, e; e = b[d++];) {
        var f = "string" == typeof e[2];
        f ? (e[2] = o6a(e[2]), e[3] = o6a(e[3]), e[5] = "") : e[5] = e[5] == k ? "px" : e[5];
        e[4] = e[4] || m6a;
        e[6] = f;
        O9(e[0], e[1], f ? "rgb(" + e[2].join(",") + ")" : e[2] + e[5])
    }
    var g = {
        Ro: a,
        Oe: c,
        mja: google.time(),
        e3: b
    };

    Q9.push(g);
    P9 = P9 || window.setInterval(n6a, 15);
    return {
        finish: function () {
            g.iq || (g.iq = i, n6a())
        }
    }
}, h);
var V9 = {
    dispose: function () {
        window.clearInterval(P9);
        P9 = 0;
        Q9 = []
    }
},
    V9 = V9 || {};

V9._e = z;
v6a(60, V9);
var W9 = function (a, b, c, d) {
    a.addEventListener ? a.addEventListener(b, c, l) : a.attachEvent("on" + b, c);
    (a == window || a == window.document || a == window.document.documentElement || a == document.body) && google.Kja && google.JT && google.JT.cla(b, c, !! d)
};

ka("google.listen", W9, h);
ka("google.unlisten", function (a, b, c) {
    a.removeEventListener ? a.removeEventListener(b, c, l) : a.detachEvent("on" + b, c);
    (a == window || a == document || a == document.documentElement || a == document.body) && google.Kja && google.JT && google.JT.dla(b, c)
}, h);
var X9 = {},
    Z6a = function (a, b) {
        return a[1] - b[1]
    },
    Y9 = function (a, b, c, d) {
        var e = c === h ? i : c,
            f = c === l,
            g = b && b[0] === c;
        if (a in X9) {
            d === h && (d = l);
            var j;
            j = "function" == typeof d ? d : function (a) {
                return a === d
            };

            for (var m = 0, n; n = X9[a][m++];) if (n = n[0].apply(k, b || []), f) e = e || n;
            else if (g && (b[0] = n), e = n, j(e)) return e
        }
        return "function" == typeof d ? c : e
    };

ka("google.msg.listen", function (a) {
    var b = 0,
        c = arguments,
        d = c.length;
    1 == d % 2 && (b = c[d - 1]);
    for (var e = 0; e < d - 1; e += 2) {
        var f = c[e];
        X9[f] || (X9[f] = []);
        X9[f].push([c[e + 1], b]);
        X9[f].sort(Z6a)
    }
}, h);
ka("google.msg.unlisten", function (a) {
    for (var b = 0; b < arguments.length - 1; b += 2) {
        var c = X9[arguments[b]];
        if (c) for (var d = arguments[b + 1], e = 0; e < c.length; ++e) if (c[e][0] == d) {
            c.splice(e, 1);
            break
        }
    }
}, h);
ka("google.msg.send", Y9, h);
var Z9, $6a = window.location.protocol + "//" + window.location.host,
    a7a = function (a, b, c) {
        if (!Y9(32, [a, b, c], 0, i)) try {
            RegExp("^(" + $6a + ")?/(url|aclk)\\?.*&rct=j(&|$)").test(a) ? b ? (google.r = 1, b.location.replace(a)) : (Z9 || (Z9 = document.createElement("iframe"), Z9.style.display = "none", j6a(Z9)), google.r = 1, Z9.src = a) : ((/#.*\/blank\.html$ /.test(a) || /#.*about:blank$/.test(a)) && google.ml(Error("navbl"), l), window.location.href = a)
        } catch (d) {
            window.location.href = a
        }
    },
    b7a = function () {
        var a = window.location,
            b = a.hash ? a.href.substr(a.href.indexOf("#") + 1) : "",
            c = b && b.match(/(^|&)q=/),
            d = a.search ? a.href.substr(a.href.indexOf("?") + 1).replace(/#.*/, "") : "",
            b = (c ? b : d).replace(/(^|&)(fp|tch)=[^&]*/g, "").replace(/^&/, "");
        return (c ? "/search" : a.pathname) + (b ? "?" + b : "")
    };

ka("google.nav.getLocation", b7a, h);
ka("google.nav.getParam", function (a, b) {
    var c, d;
    b ? d = 0 <= (c = b.indexOf("#")) && b.substr(c) : (c = window.location, d = c.hash ? c.href.substr(c.href.indexOf("#")) : "");
    if ((c = d) && c.match("[#&]" + (b ? "((q|fp)=|tbs=simg|tbs=sbi)" : "fp="))) {
        if (c = c.match("[#&]" + a + "=([^&]*)")) return c[1]
    } else if (c = (b ? b.match(/(\\?|$)[^#]*/)[0] : window.location.search).match("[?&]" + a + "=([^&]*)")) return c[1];
    return k
}, h);
ka("google.nav.go", a7a, h);
ka("google.nav.search", function (a, b) {
    var c = b7a().match(/[?&][\\w\\.\\-~]+=([^&]*)/g),
        d = {};

    if (c) for (var e = 0, f; f = c[e++];) {
        f = f.match(/([\\w\\.\\-~]+?)=(.*)/);
        var g = f[2];
        d[f[1]] = g
    }
    for (f in a) a.hasOwnProperty(f) && (g = a[f], g == k ? delete d[f] : d[f] = g);
    c = ["/search?"];
    e = i;
    for (f in d) d.hasOwnProperty(f) && (c.push((e ? "" : "&") + f + "=" + d[f]), e = l);
    a7a(c.join(""), h, b)
}, h);
var $9 = {
    Jla: 0,
    cB: 1,
    FF: 2,
    Ou: 3,
    Hx: 4,
    dB: 5
},
    a$ = {
        gR: i,
        $Z: l
    },
    c7a = {
        a_: 0,
        hR: 1,
        nea: 2
    },
    d7a = /[&\\?]ech=([0-9]+)/,
    e7a = /[\\?&#](tch|ech|psi|wrapid)=[^&]*/g;
var f7a = function (a) {
    function b() {
        return k
    }

    function c() {}

    function d() {
        return l
    }

    function e(a, b, c) {
        for (var d = 0, e; e = n[d++];) e.px(a, b, c)
    }

    function f(a, b, c, d, e) {
        for (var c = 0, f; f = n[c++];) f.handleError(a, b, d, e)
    }

    function g(a, b, c) {
        try {
            return J9.ie ? eval("(" + a + ")") : (new Function("return " + a))()
        } catch (d) {
            f(1, 9, 0, d, c)
        }
        return a
    }
    var j = a.zd,
        m, n = [],
        p = 1,
        q = U6("gws.comm.Connection"),
        s = {
            px: e,
            C: g,
            k_: function (a, b, c, d, f) {
                a = a.split('/*""*/');
                f = f ? 0 : -1;
                for (c = b; c < a.length + f; ++c)++b, a[c] && e(g(a[c], 0, d));
                return [b, 0 == a[a.length - 1].length && b == a.length]
            },
            oR: function (a) {
                return {
                    zd: a
                }
            },
            handleError: f,
            j_: function (a) {
                google.log("omcr", a.toString())
            }
        },
        t;
    switch (j) {
    case $9.Ou:
        t = "IFrame";
        var x = a.$Q,
            D = a.bR,
            I = function (a, b, c) {
                for (var d = function () {
                    a: {
                        var b, d;
                        try {
                            b = a.location.href, d = 7 >= Ra || "complete" == a.document.readyState
                        } catch (e) {
                            K(13, e);
                            break a
                        }
                        try {
                            !ba.test(b) && ((!a.google || !a.google.loc) && d && 0 > b.indexOf(ia[c])) && K(19)
                        } catch (f) {
                            K(7, f)
                        }
                        Ba == J.nR && a && (a.src = "about:blank")
                    }
                }, b = document.getElementsByName(b), e = 0, f; f = b[e++];) if ("IFRAME" == f.nodeName && (W9(f, "load", d), Ba == J.nR && 8 <= Ra)) {
                    var g = document.createElement("div");
                    g.style.display = "none";
                    Qt(g, f)
                }
                if (Ba == J.mR && !ia[c]) try {
                    a.document.title = document.title
                } catch (j) {}
            },
            K = function (a, b) {
                s.handleError(1, a, aa, b, h)
            },
            J = {
                nR: 0,
                mR: 1
            },
            M = a.aR || "tlif" + google.time() + x,
            Q = "^" + M + "[0-9]+$",
            aa = s.oR(3),
            ba = /(\/blank\.html | about: blank) $ /,
            ia = [],
            ha = {},
            xa = [],
            Aa = 0,
            Ra = 0,
            Ba, kb = document;
        if ("number" != typeof D || 1 > D) D = 1;
        J9.ie && (Ra = document.documentMode ? document.documentMode : parseInt(L9.split(".")[0], 10));
        Ba = Ra && 7 >= Ra ? J.mR : J.nR;
        m = {
            open: function () {
                if (J9.ie && !N9("10")) try {
                    var a = google.ihtmlfile = new ActiveXObject("htmlfile");
                    a.open();
                    a.close();
                    a.parentWindow.google = google;
                    W9(window, "unload", function () {
                        google.ihtmlfile && (google.ihtmlfile.parentWindow.google = k, google.ihtmlfile = k)
                    });
                    kb = a
                } catch (b) {
                    return K(2, b), l
                }
                for (a = 0; a < D; ++a) {
                    var c = M + a,
                        d;
                    if (!xa[a]) try {
                        var e = kb.createElement("IFRAME");
                        e.name = c;
                        e.style.display = "none";
                        e.src = "about:blank";
                        var f = kb.createElement("DIV");
                        f.id = c;
                        f.appendChild(e);
                        kb.body.appendChild(f);
                        d = xa[a] = e.contentWindow
                    } catch (g) {
                        return K(5, g), l
                    }
                    if (!d) return l;
                    I(d, c, a)
                }
                return i
            },
            Tv: function (a, b) {
                Aa = (Aa + 1) % D;
                var c = M + Aa,
                    a = a + ("&wrapid=" + encodeURIComponent(c)),
                    d = xa[Aa].location;
                Ba == J.mR ? d.href = a : d.replace(a);
                b && (ha[c] = b);
                ia[Aa] = a
            },
            EF: function (a, b, c) {
                a && a.match(Q) && (s.px(b), c && ha[a] && (ha[a](), delete ha[a]))
            },
            getName: function () {
                return M
            },
            GF: function () {
                return aa
            },
            HF: u(i),
            close: function () {
                for (var a = 0; a < D; ++a) {
                    var b = M + a;
                    Rt(kb.getElementById(b));
                    ha[b] && (ha[b](), delete ha[b])
                }
            }
        };

        break;
    case $9.Hx:
        t = "Jsonp";
        var x = a.$Q,
            oa = a.Ix,
            rb = a.Kx,
            hb = a.Jx,
            pb = function () {
                return oa && Ib.length >= rb
            },
            Oa = function (a) {
                var b = Wc[a];
                if (b) {
                    delete Wc[a];
                    for (var c = 0; c < Ib.length; ++c) if (Ib[c] == a) {
                        Ib.splice(c, 1);
                        break
                    }
                    window.setTimeout(function () {
                        try {
                            Rt(b), b.src = J9.ie ? "blank.html" : "about:blank"
                        } catch (a) {}
                    }, 0);
                    yc[a] && (yc[a](), delete yc[a])
                }
            },
            Hb = "tljp" + google.time() + x,
            ib = s.oR(4),
            ec = 0,
            Ib = [],
            yc = {},
            Wc = {};

        m = {
            open: u(i),
            Tv: function (a, b) {
                var c = document.createElement("script"),
                    d = Hb + ec++;
                c.src = a + "&wrapid=" + d;
                Wc[d] = c;
                if (pb()) {
                    for (; Ib.length;) Oa(Ib[0]);
                    hb && s.j_(rb)
                }
                Ib.push(d);
                b && (yc[d] = b);
                J9.ie ? c.onreadystatechange = function () {
                    var a = c.readyState;
                    ("loaded" == a || "complete" == a) && Oa(d)
                } : c.onload = function () {
                    Oa(d)
                };

                j6a(c)
            },
            EF: function (a, b, c) {
                Wc[a] && (s.px(b), c && yc[a] && (yc[a](), delete yc[a]))
            },
            getName: function () {
                return Hb
            },
            GF: function () {
                return ib
            },
            HF: u(l),
            LK: pb,
            close: function () {
                for (var a in Wc) Oa(a), yc[a] && (yc[a](), delete yc[a])
            }
        };

        break;
    case $9.cB:
    case $9.FF:
    case $9.dB:
        t = "Xhr";
        var zc = j == $9.dB ? i : l,
            Xb = j == $9.cB || j == $9.dB,
            Xc = a.Ix,
            Ub = a.Kx,
            de = a.Jx,
            kf = function (a) {
                a && (a.send(k), gb.push(a))
            },
            sc = function (a) {
                for (var b = 0, c; c = gb[b]; ++b) if (a == c) {
                    gb.splice(b, 1);
                    break
                }
                for (; gb.length < Ub && xb.length;) kf(xb.shift());
                a.eB && a.eB()
            },
            Rc = function (a, b) {
                s.handleError(1, a, ac, k, b)
            },
            ac = s.oR(zc ? 5 : Xb ? 1 : 2),
            gb = [],
            xb = [];
        if ("number" != typeof Ub || 1 > Ub) Ub = 5;
        m = {
            open: function () {
                var a = X6();
                return zc ? !! a && "withCredentials" in a : !! a
            },
            Tv: function (a, b) {
                var c = X6();
                if (c) {
                    c.open("GET", a);
                    zc && (c.withCredentials = i);
                    c.eB = b;
                    var d = [0, l];
                    c.onreadystatechange = function () {
                        if (!K9.ie || !(N9("9") && 1 == c.readyState)) {
                            try {
                                if (4 == c.readyState && 0 == c.status) {
                                    Rc(21, a);
                                    sc(c);
                                    return
                                }
                            } catch (b) {
                                Rc(21, a);
                                sc(c);
                                return
                            }(3 == c.readyState || 4 == c.readyState) && 200 == c.status && 0 > (c.getResponseHeader("Content-Type") || "").indexOf("application/json") ? (Rc(12, a), sc(c)) : 3 == c.readyState && Xb ? d = s.k_(c.responseText, d[0], ac, a) : 4 == c.readyState && (200 == c.status ? d = s.k_(c.responseText, d[0], ac, a, i) : 400 <= c.status && 500 > c.status ? Rc(0, a) : 500 <= c.status && 600 > c.status && Rc(1, a), d[1] && sc(c))
                        }
                    };

                    if (gb.length < Ub) kf(c);
                    else if (Xc) {
                        for (; gb.length;) {
                            var e = gb.shift();
                            e.onreadystatechange = ea();
                            e.abort();
                            e.eB && e.eB()
                        }
                        kf(c);
                        de && s.j_(Ub)
                    } else xb.push(c)
                }
            },
            GF: function () {
                return ac
            },
            HF: function () {
                return Xb
            },
            LK: function () {
                return Xc && gb.length >= Ub
            },
            close: function () {
                xb = [];
                for (var a = 0; a < gb.length; ++a) {
                    var b = gb[a];
                    b && (b.onreadystatechange = ea());
                    b && (0 != b.readyState && 4 != b.readyState) && b.abort();
                    b.eB && b.eB()
                }
                gb = []
            }
        }
    }
    q.log(O1a, "Initializing with " + t + "Connection.", h);
    if (!m) return k;
    a = {
        Ib: function () {
            return j
        },
        bea: function (a) {
            n.push(a)
        },
        cea: function (a) {
            for (var b = 0, c; c = n[b]; ++b) if (c == a) {
                n.splice(b, 1);
                break
            }
            n.length || (a.cR(), m.close())
        },
        aea: function () {
            return (p++).toString()
        },
        open: m.open,
        Tv: m.Tv,
        EF: m.EF || c,
        LK: m.LK || d,
        getName: m.getName || b,
        GF: m.GF,
        HF: m.HF
    };


    a.px = e;
    return a
};

var g7a = function (a, b) {
    function c() {
        return a == i
    }
    var d = b || google.time(),
        e = i,
        f, g, j, m, n = i,
        p, q, s, t;
    return {
        dea: function (a, b, d, q, t) {
            j || (j = [], m = {}, n = i, p = a);
            if (t) {
                var s = m,
                    Q;
                for (Q in t) s[Q] = t[Q]
            }
            b && c() && j.push({
                data: b,
                url: a
            });
            d && (e = l);
            f = google.time();
            g = q
        },
        sF: function () {
            return m ? m : {}
        },
        dR: function () {
            return j ? j.length : 0
        },
        WZ: function () {
            return q
        },
        XZ: function (a) {
            return j ? j[a].data : k
        },
        Wj: function () {
            return t
        },
        IF: function () {
            return e == l
        },
        eR: c,
        eea: function () {
            return n
        },
        fR: function () {
            return d
        },
        fea: function (a) {
            return a && j && j.length > a && j[a].url ? j[a].url : p
        },
        JF: function () {
            return s
        },
        refresh: function () {
            var a = google.time();
            f + 1E3 * g < a && (j = [], n = l)
        },
        YZ: function (a) {
            q = a
        },
        setEventId: function (a) {
            t = a
        },
        ZZ: function (a) {
            s = a
        },
        gea: function (a) {
            g = a
        }
    }
};

var h7a = function () {
    function a(a, b) {
        return {
            zd: g.Ou,
            aR: b,
            bR: a || 1
        }
    }

    function b(a, b, c) {
        return {
            zd: g.Hx,
            Ix: !! a,
            Kx: b || 5,
            Jx: !! c
        }
    }

    function c(a, b, c) {
        return {
            zd: g.FF,
            Ix: !! a,
            Kx: b || 5,
            Jx: !! c
        }
    }

    function d(a, b, c) {
        return {
            zd: g.cB,
            Ix: !! a,
            Kx: b || 5,
            Jx: !! c
        }
    }

    function e(a, b, c, d) {
        if (b == g.Ou || b == g.Hx) {
            var b = n[b],
                e;
            for (e in b) b[e].EF(a, c, d)
        }
    }

    function f(a) {
        switch (a) {
        case g.Ou:
        case g.Hx:
        case g.FF:
            return i;
        case g.cB:
            return !J9.ie || J9.ie && N9("10");
        case g.dB:
            return !J9.ie
        }
        return l
    }
    var g = $9,
        j, m = [],
        n = {},
        p = 0,
        q, s = U6("gws.comm.CommLayer");
    n[g.Ou] = {};

    n[g.Hx] = {};

    var t = function (a, b) {
        var c = K[a];
        if (c) {
            var d = b.JF();
            delete c.KF[d];
            delete c.NK[b.Wj()]
        }
    },
        x = function () {
            var a = function (a) {
                for (var b in a) I(a[b]) || delete a[b]
            },
                b;
            for (b in K) {
                var c = D(b);
                a(c.KF);
                a(c.NK);
                a(c.Lx)
            }
        },
        D = function (a) {
            var b = K[a];
            b || (b = K[a] = {
                KF: {},
                NK: {},
                Lx: {}
            });
            return b
        },
        I = function (a) {
            return a && (a.refresh(), a.eea()) ? a : k
        },
        K = {};

    window.setInterval(x, 9E4);
    q = {
        oea: function (a, b, c, d) {
            a = D(a);
            c && (a.KF[c] = d, d.ZZ(c));
            b && d.eR() && (a.Lx[b] = d, d.YZ(b))
        },
        c_: function (a, b, c, d) {
            a = D(a);
            c && (a.NK[c] = d, d.setEventId(c));
            b && d.eR() && (a.Lx[b] = d, d.YZ(b));
            b = d.JF();
            delete a.KF[b]
        },
        tea: function (a, b, c) {
            return (a = K[a]) ? (b = a.KF[b], c ? b : I(b)) : k
        },
        sea: function (a, b, c) {
            return (a = K[a]) ? (b = a.NK[b], c ? b : I(b)) : k
        },
        d_: function (a, b) {
            var c = K[a];
            return c ? I(c.Lx[b]) : k
        },
        qea: t,
        clear: function (a) {
            if (a) for (var b = 0, c; c = a[b++];) {
                if (c = K[c]) c.Lx = {}
            } else
            for (c in K) if (a = K[c]) a.Lx = {}
        },
        abort: function (a, b) {
            var c = K[a];
            c && (t(a, b), delete c.Lx[b.WZ()])
        },
        C: x
    };

    ka("google.td", e, h);
    var J = {
        Aea: function () {
            return p++
        },
        Eea: function (a) {
            var b = n[a.Ib()];
            b && (b[a.getName()] = a)
        },
        cR: function (a) {
            var b = n[a.Ib()];
            b && delete b[a.getName()]
        },
        uea: function () {
            return q
        }
    };

    return {
        a: a,
        b: b,
        c: c,
        d: d,
        e: function (a, b, c) {
            return {
                zd: g.dB,
                Ix: !! a,
                Kx: b || 5,
                Jx: !! c
            }
        },
        g: function (e) {
            if (e) {
                for (var n = [], p = 0, q; q = e[p++];) f(q.zd) && n.push(q);
                e = n.length ? n : k
            } else if ("undefined" != typeof j) e = j;
            else {
                e = [
                    [g.cB, d],
                    [g.FF, c],
                    [g.Ou, a],
                    [g.Hx, b]
                ];
                n = [];
                for (p = 0; q = e[p++];) f(q[0]) && (q = q[1](), n.push(q));
                e = j = n.length ? n : k
            }
            var t = e;
            if (!t) return k;
            var e = function (a, b) {
                b ? (Ib[b] && !(Ib[b].name == a.name && Ib[b].toString() == a.toString()) && x(pb.nea, 4, k, b), Ib[b] = a) : ec = function (b, c) {
                    var d = Ib[c];
                    return d ? d(b) : a(b)
                }
            },
                n = function () {
                    ++Rc
                },
                s = function (a) {
                    if ("string" == typeof a) {
                        var b = yc(a);
                        if (b) return a = ec(a, b), ac.d_(b, a)
                    }
                    return k
                },
                p = function () {
                    return Xb
                },
                x = function (a, b, c, d) {
                    if (a == pb.a_ || a == pb.hR) {
                        var e = ib ? ib.GF() : k,
                            e = {
                                _svty: a,
                                _err: b,
                                _type: e && e.zd
                            };

                        d && (e._data = encodeURIComponent("" + d));
                        try {
                            e._wl = encodeURIComponent(b7a()), google.ml(c || Error("comm"), l, e)
                        } catch (f) {}
                    }
                    for (c = 0; e = zc[c++];) e.KD(a, b, d)
                },
                D = function (a) {
                    if (a = f7a(a)) if (a.bea(Vd), a.open()) return ib = a, J.Eea(ib), Xb = i;
                    return l
                },
                I = function (a, b, c) {
                    a.push({
                        KD: b,
                        priority: c || 0
                    });
                    a.sort(function (a, b) {
                        return b.priority - a.priority
                    })
                },
                K = function (a, b) {
                    for (var c = 0, d; d = a[c]; ++c) if (d.KD == b) {
                        a.splice(c, 1);
                        break
                    }
                },
                kb = function (a, b, c) {
                    return !a.eR() ?
                    function () {
                        return b
                    } : function () {
                        var d = [];
                        if (a) for (var e = a.dR(), e = c ? Math.min(c, e) : e, f = 0; f < e; ++f) {
                            var g = a.XZ(f);
                            g && d.push(g)
                        }
                        return !d.length ? b : d.join("")
                    }
                },
                oa = function (a) {
                    return ib && Xb ? ib.Ib() == a : l
                },
                rb = function (a, b, c, d, e, f, g, j, m, n) {
                    var p = Wc[d] || Wc["_?"];
                    if (!p || !p.length) x(pb.hR, 10, k, d);
                    else
                    for (var d = 0, q; q = p[d]; ++d) q.KD(a, c, f, !b, g == hb.b_, e, j, m, n)
                },
                hb = {
                    b_: i,
                    mea: l
                },
                pb = c7a,
                Oa = function (a) {
                    return a.substring(a.indexOf("?") + 1).split("&").sort().join("&")
                },
                Hb = google.VZ + "." + google.time(),
                ib, ec, Ib = {},
                yc = function (a) {
                    var a = a.replace(/^http[s]?:\/\/[^\/]*/, ""),
                        b = a.indexOf("?");
                    return -1 == b ? a : a.substring(0, b)
                },
                Wc = {},
                zc = [],
                Xb = l,
                Xc = 59,
                Ub, de = {},
                kf = {},
                sc, Rc = 0,
                ac, gb;
            U6("gws.comm.Transport");
            e(Oa);
            var xb = function () {
                Cd.reset();
                tc.reset();
                for (var a = 0, b = 0, c = 0, d = 0; d < Pd.length; ++d) {
                    var e = Yc[Pd[d]],
                        f = e.jl || 0,
                        g = e.am,
                        e = e.il;
                    0 < f && (Cd.jl += f, a++);
                    0 < g && (Cd.am += g, b++);
                    0 < e && (Cd.il += e, c++);
                    tc.jl = Math.max(f, tc.jl);
                    tc.am = Math.max(g, tc.am);
                    tc.il = Math.max(e, tc.il)
                }
                1 < a && (Cd.jl = (Cd.jl - tc.jl) / (a - 1));
                1 < b && (Cd.am = (Cd.am - tc.am) / (b - 1));
                1 < c && (Cd.il = (Cd.il - tc.il) / (c - 1))
            },
                lf = function () {
                    var a = {
                        jl: k,
                        am: 0,
                        il: 0,
                        reset: function () {
                            a.jl = a.am = a.il = 0
                        }
                    };

                    return a
                },
                mf = function (a, b, c, d) {
                    var e = Yc[a];
                    if (!e) {
                        var f = e = lf(),
                            g = Pd[pc];
                        g && delete Yc[g];
                        Yc[a] = f;
                        Pd[pc] = a;
                        pc = (pc + 1) % 10
                    }
                    b != k && e.jl == k && (e.jl = b);
                    c != k && (e.am = c);
                    d != k && (e.il += d)
                },
                nf = function (a, b) {
                    for (var c = 0, d; c < a.length; ++c) if (d = b[c], 0 < d && a[c] > d) return i;
                    return l
                },
                Yc = {},
                Pd = [],
                pc = 0,
                Cd = lf(),
                tc = lf(),
                Kc = {
                    Gea: function (a, b) {
                        mf(a, b, k, k)
                    },
                    Hea: function (a, b) {
                        mf(a, k, b, k)
                    },
                    Fea: function (a, b) {
                        mf(a, k, k, b)
                    },
                    pea: function (a, b, c) {
                        xb();
                        var d = [Cd.jl, Cd.am, Cd.il],
                            e = [tc.jl, tc.am, tc.il];
                        if (a = a.zea(b, c)) if (b = 10 == Pd.length && nf(d, a[0]), nf(e, a[1]) || b) return d.concat(e);
                        return k
                    },
                    Dea: xb,
                    JC: function () {
                        return Cd
                    },
                    xea: function () {
                        return tc
                    },
                    yea: function () {
                        return Pd.length
                    }
                };

            Kc.Xka = mf;
            ac = J.uea();
            var xf = function () {
                Ud = [];
                window.postMessage && W9(window, "message", Dd)
            },
                Dd = function (a) {
                    if (a && a.source == window && Ud.length && ("comm.df" == a.data || "comm.df.daisy" == a.data)) {
                        var b = google.time();
                        do Ud.shift()();
                        while (Ud.length && 20 > google.time() - b);
                        Ud.length && "comm.df.daisy" == a.data && window.setTimeout(function () {
                            Dd(a)
                        }, 0)
                    }
                },
                Ud, Sc = l;
            gb = {
                defer: function (a) {
                    Sc && Y9(76, []) ? (Ud || xf(), Ud.push(a), 1 == Ud.length && window.setTimeout(function () {
                        Dd({
                            source: window,
                            data: "comm.df.daisy"
                        })
                    }, 0)) : window.postMessage ? (Ud || xf(), Ud.push(a), window.postMessage("comm.df", window.location.href)) : window.setTimeout(a, 0)
                },
                Cea: function () {
                    return Sc || !! Ud && 0 < Ud.length
                },
                mV: function (a) {
                    Sc = a
                }
            };

            var Vd = {
                px: function (a, b, c) {
                    if (Xb) {
                        var d = a.u,
                            e = d ? yc(d) : "",
                            f;
                        a: {
                            if (d && (b = d.match(d7a))) {
                                f = b[1];
                                break a
                            }
                            f = ""
                        }
                        var g = a.e,
                            j, b = f,
                            m = ac.sea(e, g, i);
                        if (!m) if (m = ac.tea(e, b, i)) ac.c_(e, m.WZ(), g, m);
                        else {
                            var m = c ? a$.$Z : a$.gR,
                                n = ec(d, e),
                                m = g7a(m, kf[b]);
                            m.ZZ(b);
                            ac.c_(e, n, g, m)
                        }
                        j = m;
                        de[e] || (b = google.time() - j.fR(), n = j.JF(), Kc.Gea(n, b), j.IF() && Kc.Hea(n, b));
                        var b = a.c,
                            p = !b || 1 != b,
                            q = a.d,
                            a = a.a;
                        if ("undefined" != typeof q && q != k) {
                            var t = d ? d.replace(e7a, "") : "";
                            j.dea(t, q, p, Xc, a);
                            a = function () {
                                var a = google.time();
                                rb(q, p, kb(j, q), e, j.fR(), t, hb.mea, f, g, j.sF());
                                1 < j.dR() && (a = google.time() - a, Kc.Fea(f, a), p && Ub && (a = Kc.pea(Ub, e, d)) && Ub.e_ && Ub.e_(a))
                            };

                            gb.Cea() ? gb.defer(a) : a()
                        }
                        a = j.IF(); - 1 == b || a && c ? ac.abort(e, j) : a && ac.qea(e, j)
                    }
                },
                handleError: x,
                cR: function () {
                    J.cR(ib)
                }
            },
                e = {
                    a: u("_?"),
                    b: p,
                    c: function () {
                        Kc.Dea();
                        var a = Kc.JC(),
                            b = Kc.xea(),
                            c = Kc.yea(),
                            a = [
                                [c, a.jl, a.am, a.il],
                                [c, b.jl, b.am, b.il]
                            ];
                        return sc ? a.concat([sc.rea()]) : a
                    },
                    d: function (a) {
                        Xc = a
                    },
                    e: function (a) {
                        Ub = {
                            zea: a.a,
                            e_: a.b
                        }
                    },
                    f: function (a) {
                        "function" == typeof a && (yc = a)
                    },
                    g: e,
                    h: function (a, b, c) {
                        if (b) {
                            var d = Wc[b];
                            d || (d = Wc[b] = []);
                            I(d, a, c)
                        }
                    },
                    i: function (a, b) {
                        I(zc, a, b)
                    },
                    j: function (a) {
                        if (Xb) return i;
                        ++Rc;
                        var b = J.Aea();
                        if (a) {
                            for (var c = k, d = 0, e; e = t[d]; ++d) if (e.zd == $9.Ou ? e.zd == a.zd && e.aR == a.aR && e.bR == a.bR : e.zd == a.zd && e.Ix == a.Ix && e.Kx == a.Kx && e.Jx == a.Jx) {
                                c = e;
                                break
                            }
                            c || (c = a, t.push(c));
                            c.$Q = b;
                            return D(c)
                        }
                        for (d = 0; e = t[d]; ++d) {
                            e.$Q = b;
                            if (D(e)) return i;
                            t.splice(d--, 1)
                        }
                        return l
                    },
                    k: function (a, b, c, d) {
                        if (Xb) {
                            var e = yc(a),
                                f = ec(a, e),
                                g = h,
                                j;
                            if (j = !b) {
                                if (c = !c) {
                                    var m = ac.d_(e, f);
                                    if (m) {
                                        var n = m.JF(),
                                            p = m.Wj(),
                                            g = m.IF(),
                                            c = m.dR(),
                                            q = m.sF(),
                                            t = google.time();
                                        for (j = 0; j < c; ++j)(function (a, b, c) {
                                            gb.defer(function () {
                                                rb(a, b, kb(m, a, c + 1), e, t, m.fea(c), hb.b_, n, p, q)
                                            })
                                        })(m.XZ(j), g && j == c - 1, j);
                                        g = n
                                    } else g = h;
                                    c = g
                                }
                                j = c
                            }
                            if (j) return gb.defer(function () {
                                Y9(82, [a, d]) && d && d()
                            }), g;
                            g = ib.aea();
                            b = g7a(b ? a$.$Z : a$.gR);
                            kf[g] = b.fR();
                            ac.oea(e, f, g, b);
                            ib.LK() && ++Rc;
                            f = a;
                            b = -1 == f.indexOf("?") ? "?" : "&";
                            c = Hb;
                            google.mcp && (c = Hb.split("."), j = google.mcp(c[1]), c = c[0] + "." + j);
                            a = [f, b, "tch=" + ib.Ib(), "&ech=", g, "&psi=", c, ".", Rc].join("");
                            ib.Tv(a, function () {
                                var b = a,
                                    c = yc(b);
                                (b = s(b)) && !b.IF() && ac.abort(c, b);
                                d && gb.defer(d)
                            });
                            return g
                        }
                        x(pb.a_, 14)
                    },
                    l: function (a) {
                        return !!s(a)
                    },
                    m: function () {
                        return oa($9.Ou)
                    },
                    n: function () {
                        return oa($9.Hx)
                    },
                    o: function () {
                        return oa($9.FF)
                    },
                    p: function () {
                        return oa($9.cB)
                    },
                    r: function () {
                        return oa($9.dB)
                    },
                    s: function () {
                        return ib && Xb ? ib.HF() : l
                    },
                    t: n,
                    u: function () {
                        Xb ? (Xb = l, ib.cea(Vd), ib = k) : x(pb.hR, 3)
                    },
                    v: function (a, b) {
                        var c = Wc[b];
                        c && K(c, a)
                    },
                    w: function (a) {
                        K(zc, a)
                    },
                    x: function (a) {
                        gb.mV(a)
                    },
                    y: function (a) {
                        de[a] = 1
                    },
                    z: function (a) {
                        if (0 < a && !window.google.commPmActive) {
                            window.google.commPmActive = i;
                            var b = function (b) {
                                b -= a;
                                0 > b && (b = 0);
                                c[d] = b;
                                d = (d + 1) % 20
                            },
                                c = [],
                                d = 0,
                                e = l,
                                f = {
                                    start: function () {
                                        var c = google.time(),
                                            d = function () {
                                                var f = google.time();
                                                b(f - c);
                                                e && (c = f, window.setTimeout(d, a))
                                            };

                                        e = i;
                                        window.setTimeout(d, a)
                                    },
                                    stop: function () {
                                        e = l
                                    },
                                    rea: function () {
                                        return c.slice(d).concat(c.slice(0, d))
                                    }
                                };

                            f.Wka = b;
                            sc = f;
                            sc.start()
                        }
                    },
                    aa: function (a) {
                        return a && Ib[a] ? Ib[a] : Oa
                    },
                    ab: function (a, b) {
                        var c = s(a);
                        return c && c.IF() ? (c.gea(b), i) : l
                    },
                    vea: p,
                    Bea: n
                };

            m.push(e);
            return e
        },
        h: e,
        i: function (a) {
            q.clear(a);
            if (a) if ("undefined" == typeof a) a = "undefined";
            else if (a == k) a = "NULL";
            else {
                var b = [],
                    c;
                for (c in a) if (!sa(a[c])) {
                    var d = c + " = ";
                    try {
                        d += a[c]
                    } catch (e) {
                        d += "*** " + e + " ***"
                    }
                    b.push(d)
                }
                a = b.join("\\n")
            } else a = "all";
            s.log(P1a, "Clearing cache: " + a, h);
            for (a = 0; b = m[a++];) b.vea() && b.Bea()
        }
    }
},
    i7a = h7a();
ka("google.comm", i7a, h);
var j7a = function (a) {
    this.api = a;
    this.C = a.a;
    this.P = a.h;
    this.N = a.i;
    this.M = a.j;
    this.Tv = a.k;
    this.D = a.l;
    this.F = a.m;
    this.G = a.n;
    this.I = a.o;
    this.K = a.p;
    this.L = a.r;
    this.mV = a.x
};

var k7a = function () {
    var a = h7a();
    this.C = a.g;
    this.EF = a.h
};

var b$ = function (a, b) {
    this.Th = this.C = z;
    this.D = a;
    this.F = b
};
b$.prototype.UA = function (a, b) {
    this.C = a || z;
    this.Th = b || z
};
b$.prototype.start = function (a) {
    this.D.fetch(this.F.Za(), A(this.C, this), A(function () {
        a();
        this.Th()
    }, this))
};
b$.prototype.cancel = u(l);
var c$ = function () {
    this.C = new Ey;
    this.D = new Ey;
    this.I = [];
    this.F = {};

    this.G = []
};
c$.prototype.K = function (a, b, c, d) {
    if (this.F[b]) return this.G.push(arguments), a ? A(this.M, this, b, c, d) : A(this.L, this, b);
    var e = this.C.get(b),
        f = this.D.get(b);
    e ? e.LD.add(c) : (e = new mz, e.add(c), this.C.set(b, {
        kW: a,
        LD: e
    }));
    var e = this.C.get(b).kW,
        g = A(this.M, this, b, c, d);
    f ? (f.add(d), e || (g = z)) : (f = new mz, f.add(d), this.D.set(b, f), e || (g = A(this.L, this, b)));
    return g
};
c$.prototype.px = function (a, b) {
    if (this.C.get(a).kW) this.I.push(b);
    else
    for (var c = this.C.get(a).LD.clone(), d = c.ej(), e = 0, f; f = d[e]; e++) f(i, b), f = this.C.get(a).LD, f.Ef() > c.Ef() && (f = f.wK(c), c = this.C.get(a).LD.clone(), d = oA(d, f.ej()))
};
c$.prototype.L = function (a) {
    var b = this.D.get(a);
    if (b) {
        b = b.ej();
        this.F[a] = i;
        for (var c = 0, d; d = b[c]; c++) d();
        delete this.F[a];
        this.D.remove(a);
        this.C.remove(a);
        if (0 < this.G.length) for (a = 0; b = this.G[a]; a++) this.K.apply(this, b)
    }
};
c$.prototype.M = function (a, b, c) {
    var d = this.D.get(a);
    d.remove(c);
    var e = this.C.get(a).LD;
    e.remove(b);
    d.dc() && this.D.remove(a);
    e.dc() && this.C.remove(a);
    Jg(this.I, function (a) {
        b(i, a)
    });
    Pg(this.I);
    c()
};

var d$ = function (a) {
    this.C = a;
    a.P(A(this.G, this), a.C());
    a.N(A(this.F, this));
    this.D = new c$
};
d$.prototype.F = function (a, b, c) {
    a = (0 == a ? "FATAL" : 1 == a ? "ERROR" : "INFO") + " error in Comm Layer " + (this.C.F() ? "IFrame Connection" : this.C.G() ? "Jsonp Connection" : this.C.I() ? "Non-Progressive XHR Connection" : this.C.K() ? "Progressive XHR Connection" : this.C.L() ? "XDR Connection" : "Connection") + ": " + b;
    c && ("string" === typeof c && (b = Error(), b.message = a + "; " + c, ca(b)), c.message = a + "; " + c.message, ca(c));
    b = Error();
    b.message = a;
    ca(b)
};
d$.prototype.G = function (a, b, c, d, e, f, g) {
    a = b ? b() : a;
    this.D.px(g, a)
};
d$.prototype.fetch = function (a, b, c) {
    var d = new fD(a),
        a = this.C.D(d.toString()),
        e = z,
        f = A(function () {
            e()
        }, this),
        d = this.C.Tv(d.toString(), h, h, f),
        e = this.D.K(a, d, b, c)
};

var l7a = function () {
    this.D = new Ey;
    this.C = new k7a
};
l7a.prototype.TA = function (a) {
    var b = a.D(),
        c = this.D;
    if (!c[b]) {
        var d;
        d = this.C.C(a.C(), h);
        d = !d ? k : new j7a(d);
        d.M();
        d = new d$(d);
        c[b] = d
    }
    return new b$(c[b], a)
};

var e$ = fa("D");
e$.prototype.Ib = u("image");
e$.prototype.Bc = r("D");
e$.prototype.Za = r("D");
var m7a = function (a) {
    this.G = this.Th = this.C = z;
    var b = ua(this),
        b = {
            name: b,
            id: b
        };

    lr && 7 > aja && (b.src = 'javascript:""');
    var b = vz("iframe", b),
        c = b.style;
    c.visibility = "hidden";
    c.width = c.height = "10px";
    nr ? c.marginTop = c.marginLeft = "-10px" : (c.position = "absolute", c.top = c.left = "-10px");
    document.body.appendChild(b);
    this.Xo = b;
    this.F = this.Xo.contentWindow || Pt(this.Xo.contentDocument || this.Xo.contentWindow.document);
    this.D = a
};
v = m7a.prototype;
v.sk = fa("D");
v.UA = function (a, b) {
    this.C = a || z;
    this.Th = b || z
};
v.start = function (a) {
    this.G = a;
    var b = this.F.document,
        c = Ot(b),
        d = c.wc("img");
    aB(d, [lr ? "readystatechange" : "load", "abort", "error"], A(this.$ca, this, a));
    c.appendChild(b.body, d);
    d.src = this.D
};
v.$ca = function (a, b) {
    var c = b.currentTarget;
    if (c) {
        if ("readystatechange" == b.type) if ("complete" == c.readyState) b.type = "load";
        else
        return;
        "undefined" == typeof c.naturalWidth && ("load" == b.type ? (c.naturalWidth = c.width, c.naturalHeight = c.height) : (c.naturalWidth = 0, c.naturalHeight = 0));
        if (document.adoptNode)(c = document.adoptNode(c)) ? this.C(i, c) : this.C(l, k);
        else {
            var d = Ot(window).wc("IMG");
            d.crossOrigin = "";
            d.src = c.src;
            this.C(i, d)
        }
        a();
        this.Th()
    } else this.C(l, k), a()
};
v.cancel = function () {
    lr ? this.F.document.execCommand("Stop") : mr && this.F.stop();
    this.C(l, k);
    this.G();
    this.Th();
    return i
};
v.dispose = function () {
    var a = this.Xo;
    a && (a.onreadystatechange = k, a.onload = k, a.onerror = k, Rt(a))
};

var n7a = ea();
n7a.prototype.TA = function (a) {
    a = a.Za();
    return new m7a(a)
};

var f$ = function (a) {
    this.D = a;
    this.Th = this.C = z
},
    o7a = [lr ? "readystatechange" : "load", "abort", "error"];
f$.prototype.UA = function (a, b) {
    this.C = a || z;
    this.Th = b || z
};
f$.prototype.start = function (a) {
    var b = vz("IMG");
    b.crossOrigin = "";
    aB(b, o7a, A(this.F, this, b, a));
    b.src = this.D
};
f$.prototype.F = function (a, b, c) {
    if ("readystatechange" == c.type) if ("complete" == a.readyState) c.type = "load";
    else
    return;
    "undefined" == typeof a.naturalWidth && ("load" == c.type ? (a.naturalWidth = a.width, a.naturalHeight = a.height) : (a.naturalWidth = 0, a.naturalHeight = 0));
    "error" == c.type || "abort" == c.type ? this.C(l, k) : this.C(i, a);
    b();
    this.Th()
};
f$.prototype.cancel = u(l);
var p7a = ea();
p7a.prototype.TA = function (a) {
    a = a.Za();
    return new f$(a)
};

var g$ = function (a, b) {
    this.C = new fD(a);
    for (var c in b) lD(this.C, c, b[c])
};
g$.prototype.Ib = u("xhr");
g$.prototype.Bc = function () {
    return this.C.toString()
};

var h$ = function (a, b, c, d) {
    g$.call(this, a, b);
    this.D = c;
    this.F = d
};
B(h$, g$);
h$.prototype.Ib = u("jsonp");
h$.prototype.Bc = function () {
    var a = this.C.toString(),
        b = "";
    y(this.F) && (b += "&", b = y(this.D) ? b + this.D : b + "callBack", b += "=" + this.F);
    return a + b
};

var i$ = function (a, b, c, d) {
    this.Th = this.dQ = z;
    this.Ba = b || {};

    this.D = d;
    this.C = new O6(a, c);
    this.C.Bj = -1
};
i$.prototype.UA = function (a, b) {
    this.dQ = a || z;
    this.Th = b || z
};
i$.prototype.eN = function (a) {
    this.dQ(l, a);
    this.Th()
};
i$.prototype.start = function (a) {
    this.C.send(this.Ba, A(function (b) {
        a();
        this.dQ(i, b);
        this.Th()
    }, this), A(function (b) {
        a();
        this.eN(b)
    }, this), this.D)
};
i$.prototype.cancel = u(l);
var q7a = ea();
q7a.prototype.TA = function (a) {
    return new i$(a.C.toString(), h, a.D, a.F)
};

var j$ = function (a, b) {
    this.Th = this.C = z;
    this.F = a ? a.toString() : "";
    this.D = b || "get";
    this.uu = new XDomainRequest;
    this.uu.timeout = 0
};
j$.prototype.UA = function (a, b) {
    this.C = a || z;
    this.Th = b || z
};
j$.prototype.lF = function (a, b) {
    this.C(a, b);
    this.Th()
};
j$.prototype.start = function (a) {
    var b = A(function () {
        a();
        this.lF(i, this.uu.responseText)
    }, this),
        c = A(function () {
            a();
            this.lF(l, k)
        }, this);
    this.uu.onload = b;
    this.uu.onerror = c;
    this.uu.ontimeout = c;
    this.uu.open(this.D, this.F);
    this.uu.send()
};
j$.prototype.cancel = function () {
    this.uu.abort();
    return i
};

var r7a = ea();
r7a.prototype.TA = function (a) {
    return new j$(a.C.toString(), a.D)
};

var k$ = function (a, b, c, d) {
    this.Th = this.C = z;
    this.I = a;
    this.G = b;
    this.F = c;
    this.D = d;
    this.Sd = new Y6;
    this.Sd.OD = Math.max(0, 0)
};
k$.prototype.UA = function (a, b) {
    this.C = a || z;
    this.Th = b || z
};
k$.prototype.lF = function (a, b) {
    this.C(a, b);
    this.Th()
};
k$.prototype.start = function (a) {
    aB(this.Sd, "success", A(function () {
        a();
        this.lF(i, Y1a(this.Sd))
    }, this));
    var b = A(function () {
        a();
        this.lF(l, k)
    }, this);
    aB(this.Sd, "error", b);
    aB(this.Sd, "abort", b);
    this.Sd.send(this.I, this.G, this.F, this.D)
};
k$.prototype.cancel = function () {
    this.Sd.abort();
    return i
};

var s7a = ea();
s7a.prototype.TA = function (a) {
    return new k$(a.C.toString())
};

var l$ = function (a) {
    this.mn = a;
    this.D = new Ey;
    this.F = new Ey;
    this.I = new Ey;
    this.G = new Ey;
    this.C("commlayer", new l7a);
    this.C("image", new p7a);
    this.C("iframe-image", new n7a);
    this.C("jsonp", new q7a);
    this.C("xdr", new r7a);
    this.C("xhr", new s7a)
};
l$.prototype.fetch = function (a, b, c, d) {
    var e = a.Ib();
    ry(this.I.J, e) && (a = this.I.get(e).KD(a));
    ry(this.F.J, e) ? (e = this.F.get(e).TA(a), this.D.set(a.Bc(), e), e.UA(A(this.Ds, this, a, c), d || z), C1a(this.mn, e, b)) : ca("No FetchFactory registered for Type: " + e)
};
l$.prototype.cancel = function (a) {
    var b = this.D.get(a.Bc());
    return b ? b.cancel() ? (this.D.remove(a.Bc()), i) : l : i
};
l$.prototype.Ds = function (a, b, c, d) {
    var e = a.Ib();
    this.D.remove(a.Bc());
    ry(this.G.J, e) && c ? this.G.get(e).KD(d, function (a) {
        b && b(c, a)
    }) : b && b(c, d)
};
l$.prototype.C = function (a, b) {
    this.F.set(a, b)
};

var m$ = function (a, b) {
    this.tu = a;
    this.D = new fD(b)
},
    t7a = function (a, b) {
        if ("?" == b[0] || "&" == b[0]) b = b.slice(1);
        return a + (-1 == a.indexOf("?") ? "?" : "&") + b
    };
m$.prototype.send = function (a, b, c, d) {
    var b = A(this.cE, this, b, d),
        e = this.C(t7a(this.D.toString(), a));
    d && (a = A(function () {
        this.tu.cancel(e);
        return i
    }, this), d.F = a);
    this.tu.fetch(e, d ? d.D : (new H9).D, b, c)
};
m$.prototype.cE = function (a, b, c, d) {
    !c && b && b.ao(2);
    a(d)
};

var u7a = function (a, b) {
    m$.call(this, a, b)
};
B(u7a, m$);
u7a.prototype.C = function (a) {
    return new h$(a)
};

var n$ = function (a, b, c, d) {
    this.C = a;
    this.G = c;
    this.I = d
};
n$.prototype.send = function (a, b, c) {
    a = a.toString();
    c = c || new H9;
    c.start(this.I);
    this.C.send(a, A(this.F, this, b, c), A(this.D, this, b, c), c)
};
n$.prototype.F = function (a, b, c) {
    if (3 != b.Gf() && (++b.G, 1 == b.G)) {
        var d = k;
        try {
            d = this.G.C(c)
        } catch (e) {
            b.ao(2), d = k
        }
        a(d)
    }
};
n$.prototype.D = function (a, b) {
    3 != b.Gf() && (0 == b.G && a(k), b.done())
};

var v7a = k,
    w7a = k,
    x7a = function (a) {
        if (!v7a) {
            v7a = {};

            w7a = {};

            for (var b = 0; 65 > b; b++) v7a["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b)] = b, w7a["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(b)] = b
        }
        for (var b = w7a, c = Math.floor(0.75 * a.length), d = a.length - 1; 64 == b[a.charAt(d--)];) c--;
        c = new Uint8Array(c);
        0 <= a.search(/[^A-Za-z0-9\\-\\_\\.]/) && ca(Error("Base64-decode invalid"));
        for (var e = 0, d = 0; d < a.length;) {
            var f = b[a.charAt(d++)],
                g = d < a.length ? b[a.charAt(d)] : 0;
            ++d;
            var j = d < a.length ? b[a.charAt(d)] : 64;
            ++d;
            var m = d < a.length ? b[a.charAt(d)] : 64;
            ++d;
            f = f << 2 | g >> 4;
            c[e++] = f;
            64 != j && (g = g << 4 & 240 | j >> 2, c[e++] = g, 64 != m && (j = j << 6 & 192 | m, c[e++] = j))
        }
        return c
    },
    y7a;
try {
    var z7a = new Uint16Array(1);
    z7a[0] = 1;
    y7a = 1 == (new Uint8Array(z7a.buffer))[0]
} catch (A7a) {
    y7a = i
}
var B7a = y7a,
    C7a = function (a, b, c) {
        (0 > b || b + 4 * c > a.length) && ca("INDEX_SIZE_ERR");
        var d = B7a == i;
        if (d && 0 == b % 4) return new Float32Array(a.buffer, b, c);
        var e = new Float32Array(c),
            f = new Uint8Array(e.buffer);
        if (d) for (d = 0; d < 4 * c; d++) f[d] = a[b + d];
        else
        for (d = 0; d < c; d++) f[4 * d + 0] = a[b + 4 * d + 3], f[4 * d + 1] = a[b + 4 * d + 2], f[4 * d + 2] = a[b + 4 * d + 1], f[4 * d + 3] = a[b + 4 * d + 0];
        return e
    };

var D7a = function (a, b, c) {
    this.buffer = a;
    this.byteOffset = b || 0;
    this.byteLength = y(c) ? c : a.byteLength - this.byteOffset;
    this.C = new Uint8Array(a, this.byteOffset);
    this.G = new Int8Array(a, this.byteOffset);
    this.I = new Float32Array(1);
    this.F = new Uint8Array(this.I.buffer);
    "undefined" == typeof Float64Array && (this.K = new Float64Array(1), this.D = new Uint8Array(this.K.buffer))
};
v = D7a.prototype;
v.getInt8 = function (a) {
    return this.G[a]
};
v.getUint8 = function (a) {
    return this.C[a]
};
v.getInt16 = function (a, b) {
    return b ? this.C[a] + (this.G[a + 1] << 8) : this.C[a + 1] + (this.G[a] << 8)
};
v.getUint16 = function (a, b) {
    return b ? this.C[a] + (this.C[a + 1] << 8) : this.C[a + 1] + (this.C[a] << 8)
};
v.getInt32 = function (a, b) {
    return b ? this.C[a] + (this.C[a + 1] << 8) + (this.C[a + 2] << 16) + (this.G[a + 3] << 24) : this.C[a + 3] + (this.C[a + 2] << 8) + (this.C[a + 1] << 16) + (this.G[a] << 24)
};
v.getUint32 = function (a, b) {
    return b ? this.C[a] + (this.C[a + 1] << 8) + (this.C[a + 2] << 16) + 16777216 * this.C[a + 3] : this.C[a + 3] + (this.C[a + 2] << 8) + (this.C[a + 1] << 16) + 16777216 * this.C[a]
};
v.getFloat32 = function (a, b) {
    b == B7a ? (this.F[0] = this.C[a], this.F[1] = this.C[a + 1], this.F[2] = this.C[a + 2], this.F[3] = this.C[a + 3]) : (this.F[0] = this.C[a + 3], this.F[1] = this.C[a + 2], this.F[2] = this.C[a + 1], this.F[3] = this.C[a]);
    return this.I[0]
};
v.getFloat64 = function (a, b) {
    if (!this.D) return NaN;
    b == B7a ? (this.D[0] = this.C[a], this.D[1] = this.C[a + 1], this.D[2] = this.C[a + 2], this.D[3] = this.C[a + 3], this.D[4] = this.C[a + 4], this.D[5] = this.C[a + 5], this.D[6] = this.C[a + 6], this.D[7] = this.C[a + 7]) : (this.D[0] = this.C[a + 7], this.D[1] = this.C[a + 6], this.D[2] = this.C[a + 5], this.D[3] = this.C[a + 4], this.D[4] = this.C[a + 3], this.D[5] = this.C[a + 2], this.D[6] = this.C[a + 1], this.D[7] = this.C[a]);
    return this.K[0]
};

var E7a = ea();
var o$ = ea();
o$.prototype.C = function (a) {
    var b = new E7a;
    b.Taa = A(this.G, this, a);
    b.Uaa = A(this.D, this, a);
    b.Vaa = A(this.F, this, a);
    return b
};
o$.prototype.G = function (a, b) {
    var c = a.Data,
        d = a.Projection,
        e = a.Location;
    if (!c || !d || !e) return l;
    b.H[0] = e.panoId;
    1 == parseFloat(c.scene) && (b.H[6] = 2);
    var f = parseFloat(c.image_width),
        g = parseFloat(c.tile_width);
    c9(B9(b)).Dl(parseFloat(c.image_height));
    c9(B9(b)).H[0] = f;
    R5a(b).Dl(parseFloat(c.tile_height));
    R5a(b).H[0] = g;
    b.H[1] = !! c.disabled;
    b.H[4] = parseFloat(e.zoomLevels);
    f = Math.ceil(Math.log(f / g) / Math.LN2);
    b.H[5] = f;
    b.Ip(e.level_id);
    a9(B9(b)).H[2] = parseFloat(e.lat);
    a9(B9(b)).H[1] = parseFloat(e.lng);
    a9(B9(b)).H[0] = 3;
    T5a(b).H[2] = parseFloat(e.original_lat);
    T5a(b).H[1] = parseFloat(e.original_lng);
    b.H[11] = c.copyright;
    b.H[12] = c.image_date;
    b.Df(e.description);
    b.H[14] = e.text_url;
    b.H[15] = e.streetRange;
    b.H[16] = e.region;
    b.H[17] = e.country;
    b.H[18] = "\\u65e5\\u672c" == b.OR() || "Japan" == b.OR();
    b.H[7] = "spherical" === d.projection_type ? 1 : "cubic" === d.projection_type ? 2 : 0;
    c = parseFloat(d.pano_yaw_deg);
    e = parseFloat(d.tilt_yaw_deg);
    d = parseFloat(d.tilt_pitch_deg);
    b9(B9(b)).H[0] = c - e;
    b9(B9(b)).H[1] = d;
    b9(B9(b)).H[2] = e;
    b.H[10] = c;
    if (a.Links) {
        c = a.Links;
        for (d = 0; d < c.length; d++) e = c[d], f = [], xd(b.H, 19).push(f), f = new N5a(f), f.H[0] = parseFloat(e.yawDeg), f.H[1] = e.panoId, f.H[2] = e.road_argb, f.Df(e.description)
    }
    if (a.levels) {
        c = a.levels.level;
        for (d = 0; d < c.length; d++) e = c[d], f = [], xd(b.H, 20).push(f), f = new M5a(f), f.Ip(e.level_id), f.H[1] = e.pano_id, f.H[2] = parseFloat(e.ordinal), f.Df(e.text), f.H[4] = e.abbreviation
    }
    if (a.photos) {
        c = a.photos.photo;
        for (d = 0; d < c.length; d++) e = [], xd(b.H, 21).push(e), e = new A9(e), e.H[0] = c.authorid, e.H[1] = c.docid
    }
    return i
};
o$.prototype.D = function (a, b) {
    var c = a.model;
    if (!c || !c.uncompressed_depth_map || "undefined" == typeof Uint8Array) return l;
    var d = x7a(c.uncompressed_depth_map),
        e = F7a(d.buffer);
    if (8 != e.getUint8(0)) return l;
    var c = e.getUint16(1, i),
        f = e.getUint16(3, i),
        g = e.getUint16(5, i),
        j = e.getUint8(7);
    if (8 != j) return l;
    e = new Uint8Array(d.buffer, j, f * g);
    d = C7a(d, j + f * g, 4 * c);
    b.initialize(f, g, c, e, d);
    return i
};
o$.prototype.F = function (a, b) {
    var c = a.model;
    if (!c || !c.uncompressed_pano_map || "undefined" == typeof Uint8Array) return l;
    var d = x7a(c.uncompressed_pano_map),
        e = F7a(d.buffer);
    if (8 != e.getUint8(0)) return l;
    var f = e.getUint16(1, i) - 1,
        c = e.getUint16(3, i),
        g = e.getUint16(5, i),
        j = e.getUint8(7);
    if (8 != j) return l;
    var e = new Uint8Array(d.buffer, j, c * g),
        m = Array(f);
    m[0] = "";
    for (var j = j + c * g, n = 0; n < f; n++) {
        m[n] = "";
        for (var p = 0; 22 > p; p++) m[n] += String.fromCharCode(d[j++])
    }
    d = C7a(d, j, 2 * f);
    b.initialize(c, g, e, m, d);
    return i
};

var F7a = function (a) {
    return "undefined" != typeof DataView ? new DataView(a) : new D7a(a)
};

var G7a = function (a, b) {
    this.D = new n$(new u7a(new l$(a), b), 0, new o$, "CityblockConfigService.getPanoConfig")
};
G7a.prototype.C = function (a, b, c) {
    this.D.send(a, b, c)
};

var H7a = function (a, b, c, d) {
    I9.call(this, a);
    this.Eb.output = "tile";
    this.Eb.x = "" + b;
    this.Eb.y = "" + c;
    this.Eb.zoom = "" + d
};
B(H7a, I9);
var p$ = function (a, b) {
    this.tu = a;
    this.eb = b
};
p$.prototype.fetch = function (a, b, c, d) {
    var e = this.eb.getData(a.Bc());
    e ? (c && c(i, e), d && d()) : this.tu.fetch(a, b, A(this.D, this, a, c), d)
};
p$.prototype.D = function (a, b, c, d) {
    r8(this.eb, a.Bc(), d);
    b && b(c, d)
};
p$.prototype.cancel = function (a) {
    return this.tu.cancel(a)
};
p$.prototype.C = function (a, b) {
    this.tu.C(a, b)
};

var I7a = function (a, b) {
    this.tu = new p$(new l$(a), new q8(b))
};
I7a.prototype.F = function (a, b, c) {
    a(b, b ? c : k)
};

var J7a = function (a, b) {
    I7a.call(this, a);
    this.C = new fD(b)
};
B(J7a, I7a);
J7a.prototype.D = function (a, b) {
    var c = this.C.toString(),
        d = a.toString();
    this.tu.fetch(new e$(-1 == c.indexOf("?") ? c + "?" + d : c + "&" + d), 2, A(this.F, this, b))
};

var q$ = function (a, b, c) {
    this.G = !! c;
    this.F = new G7a(a, b[0]);
    this.C = [];
    for (c = 0; c < b.length; c++) this.C.push(new J7a(a, b[c]))
};
q$.prototype.Gp = function (a) {
    a = new G9(a, A(this.D, this));
    this.G && this.D(a);
    return a
};
q$.prototype.D = function (a, b) {
    if (0 == a.cg.get()) {
        a.cg.set(1);
        var c = new e6a(a.id),
            d = new H9;
        this.F.C(c, A(this.I, this, a, d), d);
        K7a(this, a, 0, 0, 0)
    } else b && 3 == b.length && K7a(this, a, b[0], b[1], b[2])
};

var K7a = function (a, b, c, d, e) {
    (0 < c || 0 < d || 0 < e) && b.cg.set(4);
    var f = (c + d) % a.C.length,
        g = new H7a(b.id, c, d, e);
    a.C[f].D(g, A(a.K, a, b, c, d, e))
};
q$.prototype.I = function (a, b, c) {
    1 != b.Gf() ? a.cg.set(2) : (b = c.Taa, a.kc = new z9, b(a.kc) ? (a.setPosition(a.kc.Tb().Ec().sm(), a.kc.Tb().Ec().Vj(), a.kc.Tb().Ec().Fe(), 1), a.JD()) : (a.kc = k, a.cg.set(2)), a.I = c.Uaa, a.K = c.Vaa)
};
q$.prototype.K = function (a, b, c, d, e, f) {
    e ? j5a(a, new E8(b, c, d, new U8(f, f.width, f.height, i))) : (e = b + "|" + c + "|" + d, a.F[e] && delete a.F[e], a.dispatchEvent(new i5a("TileError", a, b, c, d)))
};

var L7a = fa("C");

function r$(a, b, c, d, e) {
    this.ha = a;
    this.U = c;
    this.ba = d;
    this.V = k;
    this.Y = new q$(b, (new L7a(e)).C, i);
    this.L = this.C = this.Kf = k;
    this.xa = (new I5a(L5a.shape, L5a.color, L5a.scale)).Gp("");
    this.qa = (new I5a(K5a.shape, K5a.color, K5a.scale)).Gp("");
    this.N = this.ea = this.M = k;
    this.G = l;
    this.ca = qD();
    this.X = qD();
    this.I = l;
    this.D = k;
    this.K = new Cw(0, 0);
    this.P = l;
    this.ma = this.Tp = new N0(h, 0);
    this.F = 0;
    this.Ep = new L0(A(function () {
        this.Tp.set(za())
    }, this), l);
    this.Q = new P0(z, "")
}
var M7a = new vD,
    s$ = new l2,
    B5a = qD(),
    C5a = qD(),
    t$ = new(ea()),
    u$ = new(ea()),
    z5a = new m9,
    r9 = function (a) {
        if (!a) return l;
        a = a.cg.get();
        return 3 == a || 4 == a
    },
    v$ = function (a, b) {
        a && (r9(a) ? b && b() : J0(a.cg, 3, b))
    };
r$.prototype.JH = function (a, b) {
    this.K.x = a;
    this.K.y = b;
    w$(this)
};
r$.prototype.m0 = function () {
    return !!this.D
};

var w$ = function (a) {
    a.I = l;
    if (!a.Sp() && a.Kf) {
        var b = a.K.x,
            c = a.K.y,
            d = u$;
        if (a.ba && a.ba.Yz(b, c, d) && d.C) d.C != a.D && (a.D = d.C, a.D.Ij(i)), a.M = k, d.C.Zz(b, c, t$) && t$.id && a.zy(t$.id);
        else if (a.D && (a.D.Ij(l), a.D = k), (d = a.U && a.U.Yz(b, c, u$) && u$.C && u$.C.Zz(u$.D.x, u$.D.y, t$) && t$.id ? t$ : k) && d.id) {
            a.zy(d.id);
            var e = a.ca,
                d = a.X;
            A5a(a, b, c, e, d) && (a.I = i, a.M = a.xa, 1 === a.lC() && (a.M = a.qa), a.M.setPosition(e[0], e[1], e[2]), b = a.M, X_(b.I, d[0], d[1], d[2]), b.C = i)
        }
        a.Tp.set(za())
    }
},
    A5a = function (a, b, c, d, e) {
        return a.U && (a.U.Yz(b, c, u$) && u$.C) && u$.C.dF(u$.D.x, u$.D.y, d, e) ? i : l
    },
    w5a = function (a) {
        var b = [];
        r9(a.Kf) && b.push(a.Kf);
        a.Sp() && r9(a.C) && b.push(a.C);
        return b
    };
r$.prototype.h_ = function () {
    if (!this.N) return k;
    this.F && mB(this.F);
    if (1 == this.lC() && this.Kf && this.N === this.Kf.id) {
        var a = this.Kf.xh();
        if (a && a.bz()) {
            for (var b = this.ha.xo(this.K.x, this.K.y), b = Ty(-(Math.atan2(b.dir[1], b.dir[0]) - Math.PI / 2)), c = k, d = Infinity, e = 0; e < a.bz(); e++) {
                var f = a.SC(e),
                    g = Uy(b - f.Sv());
                180 < g && (g = 360 - g);
                g < d && (c = f, d = g)
            }
            this.N = (90 > Math.abs(Mz(c.Sv(), b)) ? c.getPanoId() : k) || "";
            if (!this.N) return k
        }
    }
    return this.ea = this.Y.Gp(this.N)
};
r$.prototype.SM = function (a) {
    this.Kf && this.Kf.id === a || (a ? N7a(this, this.Y.Gp(a)) : (this.Kf = k, this.Q.set("")))
};

var N7a = function (a, b) {
    if (!a.Kf || !(b && a.Kf.id === b.id)) a.Kf = b, v$(b, A(a.p_, a, b, i))
};
v = r$.prototype;
v.ZM = function () {
    this.C = k
};
v.cga = function (a) {
    if (!this.C || !(a && this.C.id === a.id)) this.C = a, v$(a, A(this.p_, this, a, l))
};
v.p_ = function (a, b) {
    b && (w$(this), O7a(this), this.Q.set(a.id))
};
v.wX = function (a) {
    (new P0(a, this.Q.get())).Zb(this.Q)
};
v.Sp = r("P");
var O7a = function (a) {
    var b = a.Kf;
    a.V && (b && b.xh()) && (b = b.xh(), s$.lat = b.Tb().Ec().Vj(), s$.lng = b.Tb().Ec().sm(), s$.alt = 0, s$.Dc = 0, s$.rotation = 0, s$.zoom = 20, s$.width = 1024, s$.height = 1024, s$.C = 53, N1(s$, M7a), a.V.Vd(M7a))
};
r$.prototype.sL = function () {
    this.G = i;
    w$(this)
};
r$.prototype.jL = function () {
    this.G = l;
    w$(this)
};
r$.prototype.lC = function () {
    return (!this.G || !this.I ? 0 : this.X) ? 0.9 < Math.abs((!this.G || !this.I ? k : this.X)[2]) ? 1 : 2 : 0
};
r$.prototype.zy = function (a) {
    this.F && mB(this.F);
    this.N = a || k;
    a && (this.F = lB(A(this.h_, this), 200))
};

function x$(a, b, c) {
    this.C = a;
    this.Nd = b;
    this.oa = b.oa;
    this.I = !! c;
    E1.call(this, [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], 0, P7a)
}
B(x$, E1);
var y$ = new vD,
    P7a = function (a) {
        a = 2 * a - 1;
        return 0.5 * (a * (2 + a * ((0 <= a ? -1 : 1) + 0 * a)) + 1)
    };
x$.prototype.play = function () {
    return 0 == this.W && !this.$S() ? i : x$.ia.play.call(this)
};
x$.prototype.$S = function () {
    this.oa.P = i;
    var a = this.oa.Kf;
    if (a) {
        if (!r9(a)) return v$(a, A(this.play, this)), l
    } else
    return l;
    var b = this.oa.C;
    if (b) {
        if (!r9(b)) return v$(b, A(this.play, this)), l
    } else
    return l;
    var c = a.xh();
    tD(c.Tb().Ec().sm(), c.Tb().Ec().Vj(), c.Tb().Ec().Fe(), this.D);
    this.D[3] = jp(this.C.lf(), 2 * Math.PI);
    this.D[4] = jp(this.C.Yd(), 2 * Math.PI);
    this.G = [0, 0, 0, 0, 0];
    this.duration = 0;
    this.F = this.oa.lC();
    var d = b.xh(),
        c = d.Tb().Ec().sm(),
        e = d.Tb().Ec().Vj(),
        d = d.Tb().Ec().Fe(),
        a = a.xh(),
        b = b.xh();
    tD(c, e, d, this.G);
    this.G[3] = this.D[3];
    this.G[4] = this.D[4];
    if (this.I && 2 == this.F) {
        if (d = !this.oa.G || !this.oa.I ? k : this.oa.ca) {
            b = [];
            w0(d, this.G, b);
            var d = Math.atan2(b[1], b[0]) - Math.PI / 2,
                d = jp(d, 2 * Math.PI),
                f = d - this.D[3];
            f > Math.PI && (d -= 2 * Math.PI);
            f < -Math.PI && (d += 2 * Math.PI);
            this.G[3] = d;
            this.G[4] = Math.PI / 2 + Math.atan2(b[2], Math.sqrt(b[0] * b[0] + b[1] * b[1]))
        }
    } else if (this.I && (1 == this.F && 2 != b.I()) && (new mz(a.Ag().split(" / "))).intersection(b.Ag().split(" / ")).dc()) {
        for (var d = Uy(Uy(Ty(Math.atan2(this.G[1] - this.D[1], this.G[0] - this.D[0]))) - 90), g, j = k, m = Infinity, n = 0; n < b.bz(); n++) f = b.SC(n), g = Math.abs(Mz(d, -f.Sv())), g < m && (j = f, m = g);
        90 > m && (this.G[3] = this.D[3] + Nz(Mz(Ty(this.D[3]), -j.Sv())))
    }
    a = a.Tb().Ec();
    c = O1(Nz(a.sm()), Nz(a.Vj()), Nz(c), Nz(e));
    this.duration = 750 * Math.sqrt(0.5 * c + 10) / Math.sqrt(10);
    return i
};
x$.prototype.Ff = function () {
    var a = this.oa.C;
    a && a.gq(this.fh);
    Q7a(this, this.coords);
    x$.ia.Ff.call(this)
};
x$.prototype.Gj = function () {
    var a = this.oa.C;
    a && (this.oa.P = l, this.oa.ZM(), this.oa.zy(""), N7a(this.oa, a), (a = this.oa.Kf) && a.gq(1), Q7a(this, this.coords), x$.ia.Gj.call(this))
};

var Q7a = function (a, b) {
    y$.F = b[0];
    y$.G = b[1];
    y$.I = b[2];
    y$.De = b[3];
    y$.Dc = b[4];
    a.C.Vd(y$)
};
x$.prototype.vr = function () {
    s9(this.Nd, 2);
    x$.ia.vr.call(this)
};
x$.prototype.aj = function () {
    s9(this.Nd, 0);
    x$.ia.aj.call(this)
};

function z$(a, b) {
    this.C = a;
    this.xa = this.M = this.I = this.fb = k;
    this.U = this.Jd = l;
    this.Ba = b || oWa;
    this.ma = A(function () {
        this.Jd = i
    }, this);
    E1.call(this, [], [], 1E3)
}
B(z$, E1);
z$.prototype.Wz = function (a) {
    this.I && pA(this.I.Ia, this.ma);
    this.I = a.clone();
    this.I.Ia.push(this.ma);
    this.Jd = i
};
z$.prototype.cw = function (a) {
    this.M && pA(this.M.Ia, this.ma);
    this.M = a.clone();
    this.M.Ia.push(this.ma);
    this.Jd = i
};

var A$ = function (a) {
    var b = a.U ? 1 - a.ik() : a.ik();
    return a.Ba(b)
};
z$.prototype.Ff = function () {
    var a = A$(this);
    $Wa(this.fb, a, this.C);
    z$.ia.Ff.call(this)
};

var R7a = function (a) {
    a.Jd && (a.fb = new E2(a.I, a.M, a.xa), a.Jd = l)
};
z$.prototype.play = function () {
    this.U = l;
    R7a(this);
    return z$.ia.play.call(this)
};
z$.prototype.X = function () {
    this.U = i;
    R7a(this);
    E1.prototype.play.call(this)
};
z$.prototype.V = r("M");

function B$(a) {
    this.map = a;
    this.Ka = k;
    this.ca = -1;
    this.Va = i;
    z$.call(this, a.Tb(), H1)
}
B(B$, z$);
B$.prototype.kA = function (a) {
    var b = [a.D, a.F, a.G];
    this.cw(a);
    b ? this.xa = wVa(b) : this.xa = k;
    this.Jd = i
};
B$.prototype.Q = function () {
    this.Va = this.map.I.get();
    this.map.I.set(l);
    this.ca = -1;
    B$.ia.Q.call(this)
};
B$.prototype.aj = function () {
    this.map.I.set(this.Va);
    B$.ia.aj.call(this)
};
B$.prototype.Ff = function () {
    0 > this.ca && (this.ca = this.U ? 1 - A$(this) : A$(this));
    var a = (A$(this) - this.ca) / (1 - this.ca);
    this.Ka && this.Ka.gq(a);
    B$.ia.Ff.call(this)
};

function C$(a, b, c) {
    this.ha = b;
    this.Nd = c;
    this.oa = c.oa;
    this.K = k;
    this.Ta = new w2(["streetview"], [{
        id: "h"
    }]);
    this.ea = 0;
    this.Y = this.F = k;
    this.qa = l;
    B$.call(this, a)
}
B(C$, B$);
var S7a = ea();
C$.prototype.Bb = fa("Ta");
var T7a = function (a, b, c) {
    c ? c = 1 : (c = 850 + 110 * Math.max(0, 19 - a.ea), b && (c *= 0.85));
    a.Ut(c)
};
v = C$.prototype;
v.UY = function (a, b, c, d, e, f) {
    this.F = a;
    f !== this.ea && (this.ea = f, a = 850 + 110 * Math.max(0, 19 - this.ea), a = (a - 850) / a, 0 < a ? (a = Math.sqrt(a), this.Ba = G1(a, 1, a)) : this.Ba = H1);
    b = U7a(this, b, c, d, e);
    this.kA(b)
};
v.TY = function (a) {
    this.Y = a;
    bB(this.Y, "PostEnd", A(this.tZ, this))
};
v.vr = function () {
    this.F && this.oa.SM(this.F);
    s9(this.Nd, 2);
    if (this.U) this.Nd.vC(this.C), this.map.mapTypes.set(this.K.mapTypes), this.map.C.set(this.K.M), this.map.D.set(this.K.L), this.map.K.set(this.K.D), this.oa.Ep.set(l);
    else {
        var a = this.Nd,
            b = a.oa.Kf;
        b && a.NU && v$(b, A(function () {
            var a = new m9;
            b.DC(a);
            var d = new vD,
                e = a.C,
                f = [0, 0, 0];
            tD(e[0], e[1], e[2], f);
            var g = j0(e[1]),
                a = this.Z.ql();
            d.width = a.width;
            d.height = a.height;
            d.F = f[0];
            d.G = f[1];
            d.I = f[2];
            d.C = Nz(75);
            d.D = e[2] * g / Math.tan(d.C / 2);
            d.K = 0;
            d.heading = 0;
            d.Dc = Math.PI / 2;
            this.dN.Vd(d);
            d = a.width;
            a = a.height;
            e = Math.floor(ip(a, 0, 128));
            this.EC.width = Math.floor(d * (e / a));
            this.EC.height = e;
            d = this.NU.Gp(b.id);
            J0(d.cg, 3, A(this.H6, this, d))
        }, a));
        this.K = new S7a;
        this.K.mapTypes = this.map.mapTypes.get().slice();
        this.K.M = this.map.C.get().slice();
        this.K.L = this.map.D.get();
        this.K.K = this.map.Lg.get();
        this.K.F = this.map.G.get();
        this.K.D = this.map.K.get();
        this.K.C = this.ha.F;
        this.K.G = this.Nd.I
    }
    this.Nd.I = 1280;
    Y0(this.ha, new v2([this.K.C, this.Nd]));
    this.K.I = this.map.L.get();
    this.map.L.set(l);
    a = this.oa;
    a.V = k;
    O7a(a);
    this.map.F.set(this.I.clone());
    this.map.Lg.set(l);
    this.map.G.set(l);
    this.oa.P = i;
    C$.ia.vr.call(this)
};
v.aj = function () {
    this.Y ? (this.map.C.set([1]), this.oa.L = k, this.qa = l, C$.ia.aj.call(this), this.Y.play()) : (this.tZ(), C$.ia.aj.call(this))
};
v.tZ = function () {
    s9(this.Nd, 0);
    this.map.L.set(this.K.I);
    this.oa.P = l;
    if (this.U) this.map.Lg.set(this.K.K), this.map.G.set(this.K.F), this.map.K.set(this.K.D), Y0(this.ha, this.K.C), this.Nd.I = this.K.G & 17664, this.K = k, this.oa.SM(""), this.oa.ZM(), this.oa.zy(""), this.map.F.set(k);
    else {
        this.map.D.set(this.Ta);
        this.map.C.set([1, 0]);
        this.map.mapTypes.set([0]);
        this.map.K.set(l);
        this.oa.Ep.set(i);
        this.map.Lg.set(i);
        var a = this.oa,
            b = this.map.F.get();
        a.V = b;
        O7a(a);
        this.Nd.I = 17664;
        Y0(this.ha, this.Nd)
    }(a = this.oa.Kf) && a.gq(1);
    this.oa.L = k;
    this.qa = l;
    this.Y = this.F = k
};
v.Ff = function () {
    if (!this.qa) {
        var a = this.oa.L;
        if (a && 3 == a.cg.get()) {
            var b = a.xh();
            k9(b).H[1] = 3;
            q9(a, b);
            this.qa = i;
            this.Ka = a
        }
    }
    C$.ia.Ff.call(this)
};

var U7a = function (a, b, c, d, e) {
    var f = [0, 0, 0];
    tD(c, b, d, f);
    c = j0(b);
    b = new vD;
    b.F = f[0];
    b.G = f[1];
    b.I = f[2];
    b.Dc = Math.PI / 2;
    b.De = -Nz(e);
    b.C = Nz(75);
    b.D = d * c / Math.tan(b.C / 2);
    a = a.C.clone();
    a.Vd(b);
    return a
};
C$.prototype.play = function () {
    0 == this.W && (T7a(this, l, l), this.Wz(this.C));
    return C$.ia.play.call(this)
};
C$.prototype.X = function (a) {
    T7a(this, i, !! a);
    if (0 == this.W) {
        var a = this.I.xi(),
            b = this.I.Bf() - this.V().Bf(),
            c = this.I.Cf() - this.V().Cf();
        a.F = this.C.Bf() + b;
        a.G = this.C.Cf() + c;
        this.I.Vd(a);
        var a = qD(),
            b = this.C.Bf(),
            c = this.C.Cf(),
            d = this.C.xg();
        uD(b, c, d, a, h);
        a = U7a(this, a[1], a[0], a[2], Ty(-this.C.lf()));
        this.kA(a)
    }
    C$.ia.X.call(this)
};

var X7a = function (a) {
    M8.call(this, a, "attribute vec3 b;uniform mat4 a;void main(){gl_Position=a*vec4(b,1);}", "precision highp float;uniform vec4 b;void main(){gl_FragColor=b;}");
    this.D = new V7a(this);
    this.attributes = new W7a(this)
};
B(X7a, M8);
var V7a = function (a) {
    this.C = new S8("a", a);
    this.color = new R8("b", a)
},
    W7a = function (a) {
        this.position = new N8("b", a)
    };

var Y7a = function (a) {
    this.Z = a;
    this.C = new X7a(a)
};
Y7a.prototype.Rd = function (a) {
    if (a.Z.C.contains(a.C)) {
        var b = this.Z;
        this.C.wb();
        var c = this.C.D.C,
            d = a.D,
            e = a.F,
            f = a.od;
        if (f.C) {
            var g = f.mc,
                j = f.I;
            X_(y9, 0, -j[2], j[1]);
            u0(y9, y9);
            uVa(j, y9, x9);
            a0(f.D, x9[0], x9[1], x9[2], 0, y9[0], y9[1], y9[2], 0, j[0], j[1], j[2], 0, g[0], g[1], g[2], 1);
            j = f.L;
            u5(g[0], g[1], g[2], w9);
            g = j.C(w9[0], w9[1], w9[2]) * f.M;
            g = o0(H5a, g, g, g);
            s0(f.D, g, f.D);
            f.C = l
        }
        a2(e, f.D, d);
        s0(b2(a.F), d, a.D);
        T8(c, a.D);
        K4a(this.C.D.color, a.od.F);
        b.bindBuffer(34962, Z7a(a));
        c = this.C.attributes.position.Ec();
        b.enableVertexAttribArray(c);
        this.C.attributes.position.vertexAttribPointer(3, 5126, l, 0, 0);
        b.drawArrays(6, 0, a.od.zb());
        B1(b, c)
    }
};

var $7a = function (a, b, c) {
    this.od = a;
    this.F = b;
    this.Z = c;
    this.D = t0();
    this.C = -1
},
    Z7a = function (a) {
        a.Z.C.wb(a.C);
        return a.Z.C.eb.get(a.C)
    };

var a8a = function (a, b) {
    this.C = new N0;
    this.C.set(0);
    this.Z = b;
    this.K = a;
    this.I = new Y7a(this.Z);
    this.F = new q8;
    this.D = [];
    this.G = []
};
v = a8a.prototype;
v.Yz = u(l);
v.En = function (a) {
    this.D = [];
    for (var b = 0; b < a.length; ++b) a[b] instanceof t9 && this.D.push(a[b])
};
v.OI = function (a) {
    this.G = [];
    for (var b = 0; b < a.length; ++b) a[b] instanceof t9 && this.G.push(a[b])
};
v.hz = ea();
v.run = function () {
    this.C.set(1);
    for (var a = 0; a < this.D.length; ++a) {
        var b = b8a(this, this.D[a]);
        if (b.Z.C.contains(b.C)) b.Z.C.wb(b.C);
        else {
            var c = b.od,
                d = b.Z.createBuffer(),
                e = 3 * c.zb();
            b.C = w1(b.Z.C, d, e);
            b.Z.bindBuffer(34962, d);
            a: {
                switch (c.K) {
                case 0:
                    c = G5a;
                    break a;
                case 1:
                    c = u9;
                    break a
                }
                c = k
            }
            b.Z.bufferData(34962, c, 35044)
        }
    }
    a = this.Z;
    A1(a, l);
    a.disable(2884);
    a.enable(3042);
    a.disable(2929);
    a.disable(2960);
    a.disable(3089);
    for (b = 0; b < this.D.length; ++b) c = b8a(this, this.D[b]), this.I.Rd(c);
    A1(a, i);
    this.C.set(0)
};

var b8a = function (a, b) {
    var c = a.F.getData(b);
    c || (c = new $7a(b, a.K, a.Z), r8(a.F, b, c));
    return c
};

var c8a = function (a, b) {
    this.C = a;
    this.D = b || k
};

var f8a = function (a) {
    M8.call(this, a, "attribute vec3 b;uniform mat4 a;void main(){gl_Position=a*vec4(b,1);}", "precision highp float;uniform bool b;void main(){vec4 c,d;c=vec4(.95,.95,.95,.6);d=vec4(.95,.95,.95,1);if(!gl_FrontFacing){c.xyz/=2.7;d.xyz/=2.7;}gl_FragColor=mix(c,d,float(b));}");
    this.D = new d8a(this);
    this.attributes = new e8a(this)
};
B(f8a, M8);
var d8a = function (a) {
    this.C = new S8("a", a);
    this.highlight = new J4a("b", a)
},
    e8a = function (a) {
        this.position = new N8("b", a)
    };

var g8a = function (a) {
    this.Z = a;
    this.C = new f8a(a)
};
g8a.prototype.Rd = function (a) {
    if (a.Z.C.contains(a.C)) {
        var b = this.Z,
            c = a.G;
        this.C.wb();
        var d = this.C.D.C;
        h8a(a);
        T8(d, a.I);
        this.C.D.highlight.set(c.N);
        b.bindBuffer(34962, i8a(a));
        a = this.C.attributes.position.Ec();
        b.enableVertexAttribArray(a);
        this.C.attributes.position.vertexAttribPointer(3, 5126, l, 0, 0);
        b.drawArrays(5, 0, c.C.length);
        B1(b, a)
    }
};

var j8a = function (a, b, c) {
    this.G = a;
    this.D = b;
    this.L = -1;
    this.Z = c;
    this.K = t0();
    t0();
    this.I = t0();
    this.F = sD();
    this.C = -1
},
    k8a = new i0,
    D$ = e0(),
    i8a = function (a) {
        a.Z.C.wb(a.C);
        return a.Z.C.eb.get(a.C)
    },
    h8a = function (a) {
        if (a.L != a.D.I) {
            a.L = a.D.I;
            var b = a.K,
                c = a.G.No;
            a2(a.D, c.Ky(), b);
            s0(b2(a.D), b, a.K);
            b = a.K;
            D$[0] = b[2];
            D$[1] = b[6];
            D$[2] = b[10];
            u0(D$, D$);
            var d = a.I;
            Z_(d);
            d[12] = 10 * D$[0];
            d[13] = 10 * D$[1];
            s0(b, d, a.I);
            b = a.F;
            Z_(b);
            b[12] = -10 * D$[0];
            b[13] = -10 * D$[1];
            s0(b, c.gY(), a.F)
        }
    };

var l8a = function (a, b) {
    this.C = new N0;
    this.C.set(0);
    this.Z = b;
    this.K = a;
    this.I = new g8a(this.Z);
    this.F = new q8;
    this.D = [];
    this.G = []
};
v = l8a.prototype;
v.Yz = function (a, b, c) {
    if (1 > this.D.length) return c.C = k, c.D = k, l;
    for (var d = 0; d < this.D.length; ++d) {
        var e = this.D[d];
        if (e instanceof E9) {
            var f;
            f = m8a(this, e);
            var g = a,
                j = b;
            h8a(f);
            var m = k8a,
                m = f.D.xo(g, j, m);
            q0(f.F, m.origin, m.origin);
            p0(f.F, m.dir, m.dir);
            u0(m.dir, m.dir);
            f = m;
            if (GWa(e.D, f.origin, f.dir)) return c.D = c.D || new Cw, c.C = e, i
        }
    }
    return l
};
v.En = function (a) {
    this.D = [];
    for (var b = 0; b < a.length; ++b) a[b] instanceof E9 && this.D.push(a[b])
};
v.OI = function (a) {
    this.G = [];
    for (var b = 0; b < a.length; ++b) a[b] instanceof E9 && this.G.push(a[b])
};
v.hz = ea();
v.run = function () {
    this.C.set(1);
    for (var a = 0; a < this.D.length; ++a) {
        var b = m8a(this, this.D[a]);
        if (b.Z.C.contains(b.C)) b.Z.C.wb(b.C);
        else {
            var c = b.G,
                d = b.Z.createBuffer();
            b.C = w1(b.Z.C, d, 3 * c.C.length);
            b.Z.bindBuffer(34962, d);
            for (var d = c.C, c = new Float32Array(3 * c.C.length), e = 0; e < d.length; e++) for (var f = 0; 3 > f; f++) c[3 * e + f] = d[e][f];
            b.Z.bufferData(34962, c, 35044)
        }
    }
    a = this.Z;
    A1(a, l);
    a.disable(2884);
    a.enable(3042);
    a.disable(2929);
    a.disable(2960);
    a.disable(3089);
    for (b = 0; b < this.D.length; ++b) d = m8a(this, this.D[b]), this.I.Rd(d);
    A1(a, i);
    this.C.set(0)
};

var m8a = function (a, b) {
    var c = a.F.getData(b);
    c || (c = new j8a(b, a.K, a.Z), r8(a.F, b, c));
    return c
};

var n8a = function (a, b) {
    this.C = a;
    this.D = b || k
};

var q8a = function (a) {
    M8.call(this, a, "attribute vec3 c;attribute vec2 d;uniform mat4 a;varying vec3 b;void main(){gl_Position=a*vec4(c,1);b=vec3(d.xy,1);}", "precision mediump float;uniform float c;uniform sampler2D d;varying vec3 b;void main(){vec4 e=texture2DProj(d,b);gl_FragColor=vec4(e.rgb,e.a*c);}");
    this.D = new o8a(this);
    this.attributes = new p8a(this)
};
B(q8a, M8);
var o8a = function (a) {
    this.C = new S8("a", a);
    this.opacity = new Q8("c", a);
    this.D = new P8("d", a)
},
    p8a = function (a) {
        this.position = new N8("c", a);
        this.C = new N8("d", a)
    };

var r8a = function (a) {
    this.Z = a;
    this.C = new q8a(a)
};
r8a.prototype.Rd = function (a) {
    if (a.Z.C.contains(a.G) && a.Z.C.contains(a.F) && a.Z.C.contains(a.D)) {
        var b = this.Z,
            c;
        a.Z.C.wb(a.G);
        c = a.Z.C.eb.get(a.G);
        var d;
        a.Z.C.wb(a.F);
        d = a.Z.C.eb.get(a.F);
        var e = a.C.Mt(),
            f = this.Z,
            g = this.C;
        g.wb();
        g.D.D.set(0);
        g.D.opacity.set(e);
        var e = g.attributes.position.Ec(),
            j = g.attributes.C.Ec();
        f.enableVertexAttribArray(e);
        f.enableVertexAttribArray(j);
        f.bindBuffer(34962, c);
        g.attributes.position.vertexAttribPointer(3, 5126, l, 0, 0);
        f.bindBuffer(34962, d);
        g.attributes.C.vertexAttribPointer(2, 5126, l, 0, 0);
        d = this.C.D.C;
        a.L != a.I.I && (a.L = a.I.I, f = a.K, a2(a.I, a.C.M.Ky(), f), s0(b2(a.I), f, a.K));
        T8(d, a.K);
        b.bindBuffer(34962, c);
        b.bindTexture(3553, s8a(a));
        b.drawArrays(5, 0, 4);
        B1(b, this.C.attributes.position.Ec());
        B1(b, this.C.attributes.C.Ec())
    }
};

var t8a = function (a, b, c) {
    this.C = a;
    this.I = b;
    this.Z = c;
    this.K = t0();
    this.L = this.D = this.F = this.G = -1
},
    u8a = function (a, b) {
        return a.Z.C.contains(b) ? (a.Z.C.wb(b), i) : l
    },
    s8a = function (a) {
        a.Z.C.wb(a.D);
        return x1(a.Z.C, a.D)
    };

var v8a = function (a, b) {
    this.C = new N0;
    this.C.set(0);
    this.Z = b;
    this.I = a;
    this.K = new r8a(this.Z);
    this.F = new q8;
    this.D = [];
    this.G = []
};
v = v8a.prototype;
v.Yz = u(l);
v.En = function (a) {
    this.D = [];
    for (var b = 0; b < a.length; ++b) a[b] instanceof F9 && this.D.push(a[b])
};
v.OI = function (a) {
    this.G = [];
    for (var b = 0; b < a.length; ++b) a[b] instanceof F9 && this.G.push(a[b])
};
v.hz = ea();
v.run = function () {
    this.C.set(1);
    for (var a = 0; a < this.D.length; ++a) {
        var b = w8a(this, this.D[a]);
        if (!u8a(b, b.G)) {
            var c = b,
                d = c.Z.createBuffer();
            c.G = w1(c.Z.C, d, 12);
            for (var e = c.C.K, f = new Float32Array(12), g = 0; g < e.length; g++) for (var j = 0; 3 > j; j++) f[3 * g + j] = e[g][j];
            c.Z.bindBuffer(34962, d);
            c.Z.bufferData(34962, f, 35044)
        }
        u8a(b, b.F) || (c = b, d = [0, c.C.G, 0, 0, c.C.I, c.C.G, c.C.I, 0], e = c.Z.createBuffer(), c.F = w1(c.Z.C, e, 8), c.Z.bindBuffer(34962, e), c.Z.bufferData(34962, new Float32Array(d), 35044), c.Z.activeTexture(33984));
        if (!u8a(b, b.D)) {
            c = b.Z.createTexture();
            b.D = b.Z.C.eb.add(c, b.Z.C.K, 8, 1);
            b.Z.bindTexture(3553, c);
            b.Z.texParameteri(3553, 10240, 9729);
            b.Z.texParameteri(3553, 10241, 9985);
            b.Z.texParameteri(3553, 10242, 33071);
            b.Z.texParameteri(3553, 10243, 33071);
            if (c = b.C.P) b.Z.D.texImage2D(3553, 0, 6408, 6408, 5121, c), b.Z.D.generateMipmap(3553);
            b.Z.bindTexture(3553, k)
        }
    }
    a = this.Z;
    A1(a, l);
    a.disable(2884);
    a.enable(3042);
    a.disable(2929);
    a.disable(2960);
    a.disable(3089);
    for (b = 0; b < this.D.length; ++b) c = w8a(this, this.D[b]), this.K.Rd(c);
    A1(a, i);
    this.C.set(0)
};

var w8a = function (a, b) {
    var c = a.F.getData(b);
    c || (c = new t8a(b, a.I, a.Z), r8(a.F, b, c));
    return c
};

var x8a = function (a, b) {
    this.C = a;
    this.D = b || k
};

var A8a = function (a) {
    M8.call(this, a, "attribute vec3 d;uniform vec4 a;uniform mat4 b;varying vec2 c;void main(){gl_Position=b*vec4(d.xyz,1);c=d.xy*a.xy+a.zw;}", "precision highp float;uniform float d;uniform sampler2D e;varying vec2 c;void main(){gl_FragColor=vec4(texture2D(e,c).rgb,d);}");
    this.D = new y8a(this);
    this.attributes = new z8a(this)
};
B(A8a, M8);
var y8a = function (a) {
    this.F = new R8("a", a);
    this.C = new S8("b", a);
    this.alpha = new Q8("d", a);
    this.D = new P8("e", a)
},
    z8a = function (a) {
        this.C = new N8("d", a)
    };

var B8a = function (a) {
    this.Z = a;
    this.C = new A8a(a)
};
B8a.prototype.Rd = function (a) {
    if (C8(a)) {
        var b = this.Z;
        this.C.wb();
        T8(this.C.D.C, a.P);
        this.C.D.alpha.set(a.F.Mt());
        var c = D8(a);
        K4a(this.C.D.F, c.F);
        b.activeTexture(33984);
        b.bindTexture(3553, c.G());
        this.C.D.D.set(0);
        b.bindBuffer(34962, a.Q());
        c = this.C.attributes.C.Ec();
        b.enableVertexAttribArray(c);
        this.C.attributes.C.vertexAttribPointer(3, 5126, l, 0, 0);
        b.drawArrays(5, 0, a.zb());
        B1(b, c)
    }
};

var C8a = function (a, b, c, d) {
    this.Z = d;
    this.F = new B8a(this.Z);
    s8.call(this, a, b, c, new L8(new Q4a(this.Z)))
};
B(C8a, s8);
C8a.prototype.Rd = function (a) {
    var b = this.Z;
    A1(b, l);
    b.enable(2884);
    b.state.wo(1029);
    b.disable(2929);
    b.disable(2960);
    b.enable(3042);
    b.state.zo(770, 771, 1, 771);
    for (var c = 0; c < a.length; ++c) {
        0 < c && b.clear(256);
        for (var d = A4a(t8(this, a[c])), e = 0; e < d.length; ++e) this.F.Rd(d[e])
    }
    b.disable(3042);
    b.disable(2884);
    A1(b, i)
};

var D8a = function (a, b, c, d) {
    this.G = a;
    this.C = b;
    this.F = c;
    this.D = d || k
};

function E8a() {};

function F8a() {}
F8a.prototype.create = function (a, b, c, d) {
    var e = c.$().Tb(),
        f = new F6,
        g, j, m, n, p;
    b && (p = k, g = S4a(new T4a(b.C, e, b, a)), j = new c8a(e, a), j = j.D ? new a8a(j.C, j.D) : k, m = new n8a(e, a), m = m.D ? new l8a(m.C, m.D) : k, n = new x8a(e, a), n = n.D ? new v8a(n.C, n.D) : k, p = new D8a(b.C, e, b, a), p = p.D ? new C8a(p.G, p.C, p.F, p.D) : k);
    d = new r$(e, f, g, m, d);
    a = new u5a(a, d, new E8a, b && b.C, c, g, j, m, n, p);
    b && (new M0(A(b.lr, b))).Zb(d.ma);
    return a
};

function E$(a, b, c) {
    this.J = a;
    this.L = (this.N = b || k) ? A(this.N.L, this.N) : k;
    this.yf = k;
    this.Zu = c || k;
    this.Nd = this.Q = this.Yi = k;
    this.Da = this.Rc = l;
    this.C = k;
    this.Y = l;
    this.F = {};

    this.jm = k;
    this.xt = {};

    this.ih = this.K = k;
    this.P = l;

    this.vv = k;
    c && (c.D && Dx()) && c.D.ac().ya(A(function (a) {
        this.vv = new T0(a)
    }, this));
    this.qj = k;
    this.J.Cp() && (c && c.D) && (this.qj = js(c.D, "svl", Fpa), this.qj.Qd(A(function (a) {
        this.ih = a;
        R(a, Gb, A(this.J.I, this.J, l));
        R(a, Jb, A(this.cr, this));
        ml(a, Gb, this.J);
        ml(a, Jb, this.J);
        ml(a, FA, this.J)
    }, this)));
    this.G = [];
    this.Ho = [];
    this.U = [];
    this.Cc = [];
    this.X = l;
    this.V = h
}
E$.prototype.ea = function (a, b) {
    H(b, A(function (b) {
        this.nF(b, a)
    }, this))
};
E$.prototype.nF = function (a, b) {
    var c = this.xt[a];
    c && b.Vu(new c(b, this.J, this))
};

var G8a = function (a, b, c) {
    H(b, A(function (a) {
        this.xt[a] = c
    }, a))
},
    F$ = function (a) {
        var a = new mp(a, new Ri(mk(rk)), 19, nk(rk), vk(rk)),
            b = [];
        H(a.gM(), function (a) {
            var d = "";
            "&" != a[a.length - 1] && (d = "&");
            b.push(a + d + "host=" + window.location.host)
        });
        return b
    },
    G$ = function () {
        var a = xd(rk.H, 5);
        return Lg(a, function (a) {
            return a.substr(0, a.indexOf("?"))
        })
    },
    H8a = function () {
        var a = xd(rk.H, 0)[0].match(/m@([0-9]+)/);
        return bq(+a[1])
    },
    I8a = function () {
        var a = uk(rk);
        return a && "us" != a.toLowerCase() ? "gl=" + a : ""
    },
    J8a = function (a) {
        var b = rk.H[83],
            b = [b != k ? b : ""],
            c = "";
        a != k && (c = "&hl=" + a);
        return Lg(b, function (a) {
            return a + "/cbk?cb_client=maps_gl" + c
        })
    };
E$.prototype.init_ = function (a) {
    if (!this.X) {
        ln(a, "vvis");
        var b = qo("wgl-ctx") === k;
        F(this.J, "webglcontextcreationstart", b);
        Gw("wgl-ctx", Jw(l));
        rn() && xs("http://ditu.google.cn/maps/gen_204?imp=vvis&jsv=" + kk(rk));
        this.vl = wo(this.J.tl, "vectorContainer");
        jm(this.vl);
        Pl(this.vl, pi);
        sm(this.vl, 0);
        if (Jca && (b = U("canvas"), mn(a, "cnvs", b ? "1" : "0"), b)) {
            var c = {
                antialias: i,
                stencil: i
            };

            try {
                var d = b.getContext("experimental-webgl", c);
                mn(a, "wgl", d ? "1" : "0");
                d && (mn(a, "rndr", d.getParameter(d.RENDERER)), mn(a, "vtx", d.getParameter(d.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), mn(a, "stcb", d.getParameter(d.STENCIL_BITS)), mn(a, "smpl", d.getParameter(d.SAMPLES)))
            } catch (e) {}
        }
        d = new OVa;
        d = this.Q = new X0(d);
        b = (b = this.Zu ? this.Zu.Y : k) ? new y1(b) : k;
        b || (c = uq("canvas"), b = hi().fkwgl, b = kWa(c, h, h, b));
        var c = b.ql(),
            f = this.J.getSize();
        c.width = f.width;
        c.height = f.height;
        this.vl.appendChild(c);
        c = new w1a;
        f = new aYa;
        f.D = 256;
        f.fb = this.L;
        f.X = "b";
        var g;
        g = G$();
        var j = I8a(),
            m = (j ? "&" : "") + j;
        g = Lg(g, function (a) {
            var b = rk.H[131];
            return a + "/vec?src=vector&format=" + (b != k ? b : "") + m
        });
        f.G = g;
        g = G$();
        var n = I8a();
        g = Lg(g, function (a) {
            return a + "?" + n
        });
        f.L = g;
        g = G$();
        var j = I8a(),
            p = (j ? "&" : "") + j;
        g = Lg(g, function (a) {
            return a + "?lyrs=m&imgtp=png32" + p
        });
        f.N = g;
        g = F$(xd(rk.H, 1));
        f.Q = g;
        g = F$(xd(rk.H, 3));
        g = Lg(g, function (a) {
            return a.replace(/,r@[0-9]*/, "")
        });
        f.U = g;
        g = F$(xd(rk.H, 4));
        f.I = g;
        g = F$(xd(rk.H, 112));
        f.K = g;
        f.P = l;
        (g = this.J.mj) && f.setLanguage(g);
        f.V = 1;
        b3();
        g = new e4a(f);
        g = new j8(g, d.C);
        var q = b,
            j = new d3,
            j = new $Xa(j),
            s = k;
        if (!(q instanceof y1)) {
            var s = k,
                s = 0 <= f.C.split(",").indexOf("r"),
                t = 0 <= f.C.split(",").indexOf("gl");
            t && ja.maps && (ja.maps.render && ja.maps.render.webgl) && (ja.maps.render.webgl.DEBUG = i);
            (s = kWa(q, t, s, f.ca)) || ca(Error("Could not get a WebGL context"));
            q = s
        }
        var s = q,
            q = {
                Vh: f.Wb ? l : 0 < s.getParameter(35660),
                jy: f.Ka
            },
            t = new H3(g.M, g.M, new G3(q.Vh)),
            x = new l5(s, t, g.M);
        (s = new A_a(s, j.Tb(), t, x, d)) || ca(Error("No context supplied"));
        t = s.getContext().ql();
        j.width.set(t.width);
        j.height.set(t.height);
        j.Lg.set(f.xa);
        j.X.set(f.Ja);
        j.V.set(f.ba);
        j.Y.set(f.ma);
        j.M.set(f.ea);
        j.Q.set(f.Ta);
        f.M || j.P.set(l);
        new t3(j, j.Tb());
        f.F && (g.M.F = i);
        var t = new TXa(g.M),
            x = new HVa(j, t, g),
            D = new M2(s.getContext()),
            I = new u6(j, t, g, s, f.V, q, D, f.P, k, l);
        I.ca = f.ha & 17664;
        var K = f.Y,
            J = f.qa;
        1 == J && !(1 < I.D.getContext().getParameter(32937)) && (J = 2);
        if (1 != K || 1 != J) {
            var M = new G0;
            M.C = A(function () {
                var a = M.get() ? K : J;
                I.pM = a;
                (!I.C || I.C.L != a) && I.Ws()
            }, c);
            M.Zb(x.ma)
        }
        c = this.M = new z_a(x, j, g, I);
        c.F || (c.F = new KZa(c.C, c.nn, c.ra));
        Y0(d, c.F, 2);
        Zd && (f = new F8a, this.Nd = f.create(b, d, c, J8a(this.J.mj)));
        g = new u_a;
        g.F = xd(rk.H, 128);
        g.D = xd(rk.H, 129);
        Sd && (g.C = i, g.G = xd(rk.H, 127));
        f = new v_a;
        b = f.create(b, d, c, g);
        this.kb = c.$();
        this.ha = c.C;
        this.R4 = Zd ? this.Nd.oa : b.oa;
        this.XT = b.wg;
        this.ba.kb = this.kb;
        new MXa(this.kb);
        this.jm = new u2(this.kb);
        this.Qj = Zd ? new C$(this.kb, d, this.Nd) : new K2(this.kb, d, b);
        this.yk = new O2(this.XT, this.kb, d, b);
        d = {
            id: "h"
        };

        d.epoch = H8a();
        this.Qj.Bb(new w2(["streetview"], [d]));
        this.K = new JVa(c.I, c.K, c.D, c.$B, c.aC, this.N);
        this.qj && this.qj.Qd(A(function (a) {
            a.xM(this.J, this.kb, this.kb.Tb(), this.R4, this.XT, this.Qj, this.yk, this.Nd)
        }, this));
        Hn("mglp", 2)(A(this.Q4, this));
        if (a) {
            var Q = setTimeout(A(function () {
                Q = k;
                K8a(this)
            }, this), 5E3);
            bB(this.ha, "ViewportReady", function () {
                Q && (K8a(this), clearTimeout(Q))
            }, l, this);
            S0(this.K, a, this.yf);
            this.Se()
        } else this.Se(), K8a(this);
        rn() && xs("http://ditu.google.cn/maps/gen_204?imp=vvie&jsv=" + kk(rk));
        Gw("wgl-ctx", Jw(i));
        F(this.J, "webglcontextcreationend");
        ln(a, "vvie")
    }
};
E$.prototype.cs = function (a, b) {
    this.J.ub && this.ih && this.ih.cs(a, b)
};
E$.prototype.Fn = function () {
    return !!this.ih && this.ih.It()
};

var H$ = function (a, b, c, d) {
    var e = {},
        f = V(b);
    f || (f = U("div", a.vl, pi), f.id = b, sm(f, c));
    e.mf = f;
    e.AR = new o4a;
    new p8(a.kb, e.AR, a.vl, f);
    d[b] = e
};
v = E$.prototype;
v.getId = u("vector");
v.rQ = fa("Yi");
v.Se = function () {
    if (this.Da) {
        var a = this.J.getSize();
        if (this.J.ub) {
            var b = new vD;
            b.width = a.width;
            b.height = a.height;
            this.kb.Tb().Vd(b)
        } else b = this.J.Fa(), this.kb.width.set(a.width), this.kb.height.set(a.height), this.kb.lat.set(b.y), this.kb.lng.set(b.x)
    }
};
v.zoom = function (a, b, c, d, e, f) {
    this.Fn() || (L8a(this), this.J.ub && this.ih ? (c && (a = this.ih.GQ() + a), this.ih.eha(a, f)) : this.ca.zoomContinuously(a, b, c, d, e, f))
};
v.IZ = function (a, b, c) {
    var c = ri(b, c),
        b = I$(this, c),
        c = I$(this, c, a),
        d = this.J.Fa();
    d.x += b.x - c.x;
    d.y += b.y - c.y;
    b = new C(d.y, d.x);
    this.kb.zoom.set(a);
    this.kb.lat.set(b.y);
    this.kb.lng.set(b.x)
};
v.moveEnd = function () {
    M8a(this)
};
v.enable = function (a) {
    this.Rc || (this.init_(a), a = {}, H$(this, "vector-overlay-pane", 1, a), H$(this, "vector-mouse-pane", 2, a), H$(this, "vector-shadow-pane", 3, a), H$(this, "vector-window-pane", 4, a), Pn(a["vector-window-pane"].mf, "default"), this.D = a, Ia(this.J.$q, A(this.nF, this)), this.G.push(O(this.J, "addoverlaymanager", this, this.ea)), this.G.push(O(this.J, Oc, this, this.Hda)), this.G.push(O(this.Yi, $a, this, this.Gda)), this.G.push(O(this.Yi, bb, this, this.Fda)), this.X = this.Rc = i)
};
v.Gda = function () {
    this.Iw();
    this.P = i
};
v.Fda = function () {
    this.P = l;
    this.Hw()
};
v.show = function (a) {
    if (this.Rc && !this.Da) {
        this.vl && gm(this.vl);
        var b = Sh(this.Cc);
        H(b, A(function (a) {
            this.nb(a)
        }, this));
        Xo(this.J, A(function (a) {
            this.Pa(a)
        }, this));
        this.Da = i;
        this.J.U ? this.configure(a) : a && S0(this.K, a, this.yf);
        this.Se(a);
        J$(this)
    }
};
v.hide = function (a) {
    this.Rc && this.Da && (Xo(this.J, A(function (a) {
        if (a instanceof Dj) for (var c = 0; c < this.Ho.length; ++c) if (this.Ho[c].id == a.dh().getId()) {
            Qg(this.Ho, c);
            break
        }
    }, this)), J$(this, a), this.vl && W(this.vl), this.Da = l)
};
v.disable = function (a) {
    if (this.Rc) {
        this.hide(a);
        for (var b in this.D) this.D[b].AR.UF(ah);
        H(this.G, function (a) {
            cl(a)
        });
        this.G = [];
        this.Rc = l
    }
};
v.Pa = function (a, b) {
    if (Fh(this.Cc, a)) {
        var c = a.Db(),
            d = new(this.F[c] || N8a)(a, this.J, this.kb, this.M.C, this);
        (c = this.J.te(c)) ? c.Pa(a, b, d) : (a.initialize(this.J, d, b), a.redraw(i))
    }
};
v.nb = function (a, b) {
    Eh(this.Cc, a);
    var c = this.J.te(a.Db());
    return c ? (c.nb(a, b), i) : l
};

var O8a = function (a, b, c) {
    b = b.dh();
    if (c) Fh(a.Ho, dVa(b));
    else
    for (c = 0; c < a.Ho.length; ++c) if (a.Ho[c].id == b.getId()) {
        Qg(a.Ho, c);
        break
    }
    J$(a)
},
    P8a = function (a, b) {
        var c = [];
        if (b && b.lyrs) if ("8bit" == b.lyrs) {
            var d = {
                id: "m"
            };

            d.epoch = H8a();
            c.push(d);
            d = {};

            d.id = b.lyrs;
            c.push(d)
        } else d = {}, d.id = b.lyrs, d.epoch = H8a(), c.push(d);
        for (d = 0; d < a.Ho.length; d++) c.push(gh(a.Ho[d]));
        return a.yf = c
    },
    R8a = function (a, b) {
        var c = [];
        b && (c = b.stylers);
        for (var d = 0; d < a.Ho.length; ++d) {
            var e = Q8a[a.Ho[d].id];
            e && (c = oA(c, e))
        }
        a.J.ub && (c = c.concat("streetview"));
        return c
    },
    J$ = function (a, b) {
        var c = S8a(a.J.va()),
            d = P8a(a, c),
            c = R8a(a, c);
        b && S0(a.K, b, d);
        a.kb.D.set(new w2(c, d, a.J.mj, a.L, a.V))
    },
    T8a = function (a, b, c, d) {
        a.htmlBlob ? (a.htmlBlob.lJ.y = b.lat(), a.htmlBlob.lJ.x = b.lng(), a.htmlBlob.dx = d.x, a.htmlBlob.dy = d.y) : (a.htmlBlob = new n4a(a, new Cw(b.lng(), b.lat()), d.x, d.y), c.C.push(a.htmlBlob))
    },
    U8a = function (a, b) {
        for (var c in a.D) if (kpa(b, c)) return a.D[c].AR;
        return k
    };
E$.prototype.Kh = function (a, b) {
    var c = U8a(this, a);
    c && (T8a(a, I$(this, b), c, pi), c.refresh())
};
E$.prototype.NE = function (a, b, c) {
    var d = U8a(this, a);
    d && (T8a(a, b, d, c), d.refresh())
};
E$.prototype.moveBy = function (a, b) {
    if (this.Fn()) return this.J.Fa();
    if (this.J.ub && this.ih) return this.ih.moveBy(a), this.J.Fa();
    b && S0(this.K, b, this.yf);
    L8a(this);
    var c = this.kb.W.D,
        d = this.kb.lng.get(),
        e = this.kb.lat.get(),
        d = k3(c, d, e);
    d.x -= a.width;
    d.y -= a.height;
    c = J1(c, d.x, d.y, h);
    this.kb.lat.set(c.y);
    this.kb.lng.set(c.x);
    return new C(c.y, c.x)
};
E$.prototype.configure = function (a) {
    if (this.Da && this.J.Fa() && !(this.J.ub && 2 != this.J.L || this.Fn())) {
        ln(a, "vvc0");
        var b = this.J.va();
        if (b != this.C) {
            var c = this.C && b.bc() != this.C.bc(),
                d = this.C ? this.C.lc() instanceof Mp : l,
                e = b.lc() instanceof Mp,
                d = d != e;
            this.C = b;
            var f = S8a(b);
            if (c) if (d) {
                var g = Ml(a);
                V8a(this, A(function () {
                    W8a(this, f, g);
                    Nl(g)
                }, this))
            } else V8a(this);
            else W8a(this, f, a);
            M8a(this)
        }
        a && S0(this.K, a, this.yf);
        b = this.J.da();
        c = this.J.Fa();
        this.kb.zoom.set(b);
        this.kb.lat.set(c.y);
        this.kb.lng.set(c.x);
        this.Ov(i);
        ln(a, "vvc1")
    }
};

var X8a = {
    v: {
        types: [0],
        lyrs: "m",
        stylers: []
    },
    u: {
        types: [1],
        lyrs: "",
        stylers: ["none"]
    },
    w: {
        types: [1, 0],
        lyrs: "h",
        stylers: ["satellite"]
    },
    t: {
        types: [2, 0],
        lyrs: "r",
        stylers: ["terrain"]
    },
    9: {
        types: [0],
        lyrs: "8bit",
        stylers: []
    }
},
    Y8a = {
        u: {
            types: [5],
            lyrs: "",
            stylers: [],
            tilt: 45,
            fovy: 0.1
        },
        w: {
            types: [5, 0],
            lyrs: "h",
            stylers: ["satellite"],
            tilt: 45,
            fovy: 0.1
        }
    },
    Q8a = {
        bike: ["bike"],
        "transit:comp": ["transit_layer"]
    },
    S8a = function (a) {
        var b = a.Sb();
        return a.lc() instanceof Mp ? Y8a[b] : X8a[b]
    },
    W8a = function (a, b, c) {
        var d = Sh(b.types);
        Qh(d, a.U);
        a.kb.mapTypes.set(d);
        d = P8a(a, b);
        a.kb.D.set(new w2(R8a(a, b), d, a.J.mj, a.L));
        a.kb.Dc.set(b.tilt || 0);
        a.kb.Q.set(b.fovy || 13.1);
        a.kb.ba.set(1);
        a.kb.Y.set(1);
        ln(c, "vcmd")
    };
E$.prototype.Ov = function (a) {
    Xo(this.J, function (b) {
        b && b.redraw(a)
    })
};
E$.prototype.Iw = function () {
    if (!this.P) for (var a in this.D) jm(this.D[a].mf)
};
E$.prototype.Hw = function () {
    if (!this.P) {
        this.Ov(i);
        for (var a in this.D) lm(this.D[a].mf)
    }
};
E$.prototype.Yb = function (a) {
    return I$(this, a)
};

var I$ = function (a, b, c) {
    var d = k;
    y(c) && (d = a.ma, d.zoom = c);
    a = J1(a.kb.W.D, b.x, b.y, c);
    return new C(a.y, a.x, i)
};
E$.prototype.Gb = function (a, b) {
    var c = b || new L(this.kb.width.get() / 2, this.kb.height.get() / 2),
        c = I$(this, c);
    180 < c.lng() - a.lng() && (a = new C(a.lat(), a.lng() + 360 * Math.floor((c.lng() - a.lng() + 180) / 360), i));
    180 < a.lng() - c.lng() && (a = new C(a.lat(), a.lng() - 360 * Math.floor((a.lng() - c.lng() + 180) / 360), i));
    c = a;
    c = k3(this.kb.W.D, c.lng(), c.lat());
    return new L(c.x, c.y)
};
E$.prototype.mN = function () {
    var a = this.kb.D.get().Kr().split(",");
    return 0 == a.length ? k : yp(a[0])
};
E$.prototype.Rm = r("qj");
var L8a = function (a, b) {
    a.jm.OE() || a.jm.stop(y(b) ? b : i)
},
    V8a = function (a, b) {
        var c = a.J.va().bc(),
            d = a.kb.rotation.get();
        if (c != d) {
            var e = A(function () {
                var a = this.jm;
                a.F = Uy(d);
                VWa(a);
                a = this.jm;
                a.I = Uy(c);
                VWa(a);
                bB(this.jm, "PreBegin", A(this.Iw, this));
                bB(this.jm, "PostEnd", A(this.Hw, this));
                b && bB(this.jm, "PostEnd", b);
                Dx() && (bB(this.jm, "PostEnd", A(this.eL, this, "ani-obl")), bB(this.jm, "PreBegin", A(this.ZJ, this, "ani-obl")));
                this.jm.play()
            }, a);
            a.jm.OE() ? e() : (bB(a.jm, "PostEnd", e), L8a(a, l))
        }
    };
v = E$.prototype;
v.ZJ = function (a) {
    this.vv && (this.vv.ZJ(a), this.Y || (this.Y = i, aB(this.Q, "RenderStart", this.vv.D, l, this.vv)))
};
v.eL = function (a) {
    this.vv && this.vv.eL(a)
};
v.nO = function (a) {
    this.I.x = a.x;
    this.I.y = a.y;
    var b = this.M.jv,
        a = this.I;
    b.G ? (b = b.G, a = zZa(b.D, a.x, a.y), a = a.length ? HZa(b, a[0]) : k) : a = k;
    return a
};
v.kZ = function (a) {
    this.I.x = a.x;
    this.I.y = a.y;
    for (var b = this.I, a = this.M.jv.G, c = [], b = zZa(a.D, b.x, b.y), d = 0; d < b.length; ++d) c.push(HZa(a, b[d]));
    return c
};
v.Hda = function () {
    J$(this)
};
v.raa = function (a) {
    a = this.nO(a);
    if (!a || !a.Hc || 0 != a.C || 4 != g2a(a.Hc, a.fd)) return k;
    var b = a.Hc,
        c = b.Kc(a.fd);
    if (!c || "mtgt_" == c.substr(0, 5)) return k;
    var a = b.Ar(b.Ct(h2a(b, a.fd))),
        d = new L(vh(b.$g() * b.getWidth() + a[0]), vh(b.ah() * b.getHeight() + a[1])),
        a = {};

    a.id = c;
    a.key = this.mN().getId();
    c = this.kb.W.L;
    b = b.da();
    q3(c, d.x, d.y, b);
    b = new Cw(c.lng, c.lat);
    b = new C(b.y, b.x);
    b = this.J.va().lc().qd(b, 23);
    a.a = [];
    a.a[0] = b.x;
    a.a[1] = b.y;
    return a
};

var Z8a = function (a) {
    if (0 < Eh(a.U, 6)) {
        var b = a.kb.mapTypes.get().slice();
        Eh(b, 6);
        a.kb.mapTypes.set(b)
    }
},
    K$ = function (a, b) {
        var c = b || new Cw(a.x, a.y);
        b && (c.x = a.x, c.y = a.y);
        return c
    };
v = E$.prototype;
v.da = function () {
    return this.kb.zoom.get()
};
v.iea = function () {
    return this.kb.D.get()
};
v.jea = function () {
    return this.kb.rotation.get()
};
v.Yd = function () {
    return this.kb.Dc.get()
};
v.hea = function () {
    return this.kb.V.get()
};
v.kea = function (a, b, c, d) {
    var e = this.da(),
        f = this.kb.lng.get(),
        g = this.kb.lat.get(),
        j = this.kb.W.L;
    p3(j, f, g, e);
    e = new Cw(j.C, j.D);
    e = new Cw(e.x / 256, e.y / 256);
    return a <= e.x && e.x <= b && c <= e.y && e.y <= d
};
v.lea = function (a) {
    return Ng(G$(), function (b) {
        return !!b.match(a)
    })
};
v.Q4 = function (a, b, c) {
    c < b && (a = (c - a) / (b - a), 0 > a && (a = 0), this.V = Math.ceil(15 + -9 * a), J$(this))
};

var M8a = function (a) {
    var b = l;
    a.J.zl.ya(function (a) {
        b = a.bw
    });
    if (b) {
        var c = Gk(a.J.va());
        c ? c.C(a.J.hb(), c.F, A(a.$P, a)) : a.$P(l)
    } else a.$P(l)
};
v = E$.prototype;
v.$P = function (a) {
    this.kb.ha.set(a)
};
v.$t = function () {
    this.Fn() || this.J.ub && this.ih && this.ih.$t()
};
v.Zt = function () {
    this.Fn() || this.J.ub && this.ih && this.ih.Zt()
};
v.Ku = function () {
    this.Fn() || this.J.ub && this.ih && this.ih.Ku()
};
v.Lu = function () {
    this.Fn() || this.J.ub && this.ih && this.ih.Lu()
};
v.Cx = function () {
    this.Fn() || this.J.ub && this.ih && this.ih.Cx()
};
v.Dx = function () {
    this.Fn() || this.J.ub && this.ih && this.ih.Dx()
};
v.cr = function (a) {
    this.J.I(i);
    this.J.L = a.type
};

var K8a = function (a) {
    Y0(a.Q, a.M);
    lm(a.vl);
    a.M.run();
    F(a.J, Kb)
};

function L$(a, b, c, d) {
    this.C = a;
    this.D = d
}
L$.prototype.init = function () {
    this.to = this.C.GD();
    this.bd = new MZa(this.to, K$(ui(this.C.D, -1)), h, h);
    var a = K$(this.C.Ha());
    this.hd = new TZa(a, [this.bd], 99);
    this.kd = new z4;
    this.kd.points.push(this.hd);
    this.D.Pa(this.kd)
};
L$.prototype.redraw = function (a) {
    a && this.Da && (a = this.C.GD(), this.to != a && (this.bd.url = a, K$(ui(this.C.D, -1), this.bd.anchor)), $8a(this), a = this.D, this.kd.dr(), a.D())
};
L$.prototype.tF = function (a) {
    this.Da = a;
    $8a(this)
};

var $8a = function (a) {
    a.Da ? a.D.ps(a.kd) : a.D.Rp(a.kd)
};
L$.prototype.remove = function () {
    this.D.nb(this.kd)
};

function a9a(a, b, c) {
    this.J = a;
    this.kb = k;
    this.ra = b;
    this.Ld = c;
    this.D = this.C = k
}
var b9a = function (a, b, c, d, e, f, g, j) {
    var m = new I1(a.kb);
    m.Ba = b;
    m.I = c;
    m.ea = d;
    m.C = e;
    m.K = f;
    j && m.Ut(j);
    aB(m, "begin", A(a.nca, a, b, c, g, m));
    aB(m, "animate", A(a.mca, a));
    aB(m, "end", A(a.lca, a));
    aB(m, "PostEnd", A(a.oca, a, c, m));
    return m
};
v = a9a.prototype;
v.nca = function (a, b, c, d) {
    this.C = d;
    var e = Gk(this.J.va());
    if (e && !c) {
        var f = l;
        this.J.zl.ya(A(function (a) {
            f = a.bw
        }, this));
        f && e.C(this.J.hb(), b, A(this.dda, this, a, b, c, d))
    }
};
v.mca = function () {
    F(this.J, "zooming")
};
v.lca = function () {
    this.C = k
};
v.oca = function (a, b) {
    b == qWa(b) && setTimeout(A(function () {
        F(this, "done", a)
    }, this), 0)
};
v.Bv = function (a, b, c, d, e) {
    if (!this.C) {
        var f = this.Ld.Yb(d),
            f = new Cw(f.x, f.y),
            g = a + b,
            j = d;
        c && (j = ri(d, c));
        b = 3 < jh(b) ? 800 : 300;
        e && (b = 0);
        a = b9a(this, a, g, new Cw(d.x, d.y), new Cw(j.x, j.y), f, e, b);
        e ? a.stop(i) : a.play()
    }
};
v.cancelContinuousZoom = function () {
    this.C && this.C.stop(i);
    this.D = this.C = k
};
v.AN = function (a, b, c) {
    if (!this.C || b) return l;
    var d = qWa(this.C),
        e = d.I,
        a = No(this.J, e + a, this.J.va(), this.J.Fa());
    if (e == a) return l;
    var f = d.C.clone(),
        g = d.K.clone(),
        d = 0.85 * d.duration;
    this.ra.C(new L(f.x, f.y), a, c);
    b = b9a(this, e, a, f, f, g, b, d);
    this.C.extend(b);
    return i
};
v.dda = function (a, b, c, d, e) {
    a = 0 <= this.kb.mapTypes.get().indexOf(5);
    e == a || (this.D || !this.kb || !d || 1 == d.ik() || c) || (this.D = new K1(this.kb), e ? (this.kb.Q.set(0.1), c = this.kb.mapTypes.get().slice(), c.splice(1, 0, 5), this.kb.mapTypes.set(c), c = this.D, c.ma = c.map.Dc.get(), c.Y = 45, c.ha = 0, c.U = 1, c.ca = 0, c.M = 1, aB(d, "end", A(this.Xea, this))) : (c = this.kb.mapTypes.get().slice(), c.unshift(1), this.kb.mapTypes.set(c), c = this.D, c.ma = c.map.Dc.get(), c.Y = 0, c.ha = 1, c.U = 0, c.ca = 1, c.M = 0, aB(d, "end", A(this.Yea, this))), c = this.D, aB(d, "animate", A(c.xa, c, d.fh)))
};
v.Xea = function () {
    this.kb.Nu(1);
    this.D = k
};
v.Yea = function () {
    this.kb.Nu(5);
    this.kb.Q.set(13.1);
    this.D = k
};

function M$(a, b) {
    this.J = a;
    this.Ld = b
}
M$.prototype.F = function () {
    this.Ld.Iw()
};
M$.prototype.C = z;
M$.prototype.D = function (a, b, c, d) {
    this.Ld.Hw();
    M8a(this.Ld);
    a = new Cw(this.Ld.kb.lng.get(), this.Ld.kb.lat.get());
    this.J.Ac(new C(a.y, a.x), c, h, h, d)
};

function N8a(a, b, c, d, e) {
    this.Ld = e;
    a[xo] || Vo(b, a)
}
B(N8a, iA);
v = N8a.prototype;
v.Nz = function (a) {
    this.Ld.D["vector-window-pane"].mf.appendChild(a)
};
v.hZ = function (a) {
    this.Ld.D["vector-mouse-pane"].mf.appendChild(a)
};
v.UP = function (a) {
    this.Ld.D["vector-shadow-pane"].mf.appendChild(a)
};
v.fY = function (a) {
    this.Ld.D["vector-overlay-pane"].mf.appendChild(a)
};
v.init = z;
v.redraw = z;
v.bl = function (a) {
    var b = this.Ld,
        c = a.htmlBlob;
    c && (a = U8a(b, a)) && a.UF(function (a) {
        return a == c
    })
};

function N$(a, b, c) {
    this.ke = a;
    this.J = b;
    this.Ld = c
}
N$.prototype.refresh = function () {
    var a = [],
        b = [],
        c = this.ke.C;
    if (c.length) {
        var d = this.Ld;
        if (Fh(d.U, 6)) {
            var e = d.kb.mapTypes.get().slice();
            e.push(6);
            d.kb.mapTypes.set(e)
        }
        H(c, function (c) {
            var d = c.dh();
            d && (a.push(dVa(d)), c.Rk && (b = oA(b, c.Rk)))
        })
    } else Z8a(this.Ld);
    c = this.Ld;
    c.kb.V.set(new w2(b || h, a, h, c.L))
};
N$.prototype.remove = function () {
    var a = this.Ld;
    a.kb.V.set(new w2(h, [], h, a.L));
    Z8a(this.Ld)
};
N$.prototype.mK = function (a) {
    var b;
    Ma("lyrs", 7, A(function (c) {
        b = new c(this.J, this.ke, a, this.Ld)
    }, this));
    return b
};

function O$(a, b, c, d) {
    this.la = a;
    this.J = b;
    this.K = d;
    this.Q = c.W.D;
    this.NC = new N(0, 0)
}
O$.prototype.wh = r("xr");
O$.prototype.init = function () {
    this.Wc = l;
    var a = this.bd = this.la.He(),
        b = this.C = this.la.C,
        c = c9a(this),
        d = h,
        e = h,
        f = a.sprite;
    if (f) {
        var e = this.la.ca,
            g = this.la.ba,
            e = new KB(g.x || 0, g.y || 0, e.width, e.height);
        f.spriteAnimateSize && (d = new Bw(f.spriteAnimateSize.width, f.spriteAnimateSize.height))
    }
    g = h;
    a.iconAnchor && (g = new Cw(a.iconAnchor.x, a.iconAnchor.y));
    f = new z4;
    this.N = P$(this.la.nw, this.J.Yb(c.position), 1, !! this.la.C.Bt, g, d, e, this.la.Q(this.la));
    f.points.push(this.N);
    a.shadow && !b.ground && (this.P = P$(a.shadow, this.J.Yb(c.shadowPosition), 100, !! this.la.C.Bt, g, a.shadowSize), f.points.push(this.P));
    (this.la.dragging() || this.la.Y) && d9a(this, a, c.Gk, f.points);
    a.label && (d = a.label.anchor, e = a.iconAnchor, b = f.points, d = new Cw(e.x - d.y, e.y - d.y), this.Qv = P$(a.label.url, this.J.Yb(c.Gk), 0, l, d), b.push(this.Qv));
    f.dr();
    this.F = f;
    this.K.Pa(f, A(function () {
        this.Wc = i;
        F(this.la, uc)
    }, this));
    this.tc(!this.la.Cb());
    this.$f()
};

var d9a = function (a, b, c, d) {
    a.G = P$(b.dragCrossImage || fi("drag_cross_67_16"), e9a(a, a.bd, c), 0, l, new Cw(0, 0));
    d.push(a.G)
},
    P$ = function (a, b, c, d, e, f, g, j) {
        a = new MZa(a, e, f, g, d);
        b = K$(b);
        return new TZa(b, [a], c, j)
    },
    c9a = function (a) {
        var b = lx(a.la, pi);
        a.la.C.Bt && (b.position.x *= -1, b.shadowPosition.x += 2 * b.position.x);
        return b
    };
O$.prototype.redraw = function () {
    var a = c9a(this);
    K$(this.J.Yb(a.position), this.N.point);
    this.P && K$(this.J.Yb(a.shadowPosition), this.P.point);
    this.Qv && K$(this.J.Yb(a.position), this.Qv.point);
    this.la.dragging() || this.la.Y ? this.G ? K$(e9a(this, this.bd, a.Gk), this.G.point) : d9a(this, this.bd, a.Gk, this.F.points) : this.G && (Eh(this.F.points, this.G), this.G = k);
    a = this.K;
    this.F.dr();
    a.D()
};

var e9a = function (a, b, c) {
    b = b.dragCrossAnchor || $t;
    return a.J.Yb(new L(c.x - b.x, c.y - b.y))
};
v = O$.prototype;
v.$f = function () {
    if (this.M) {
        var a = kx(this.la);
        a != this.I.zIndex && (this.I.zIndex = a, this.M.update(this.I))
    }
};
v.Gm = ea();
v.Uw = ea();
v.remove = function (a) {
    !a && this.M && (Eh(this.M.Hz, this.I), this.I = this.M = k);
    this.D && (Qm(this.D), this.D = k);
    this.K.nb(this.F)
};
v.q0 = function () {
    if (!this.D) {
        var a = U("div", document.body);
        this.D = a;
        R(this.la, G, function () {
            var b = {};

            b.srcElement = a;
            F(document, oc, b)
        })
    }
    return this.D
};
v.WR = function () {
    var a = this.la.Ha(),
        a = k3(this.Q, a.x, a.y);
    return new L(a.x, a.y)
};
v.tc = function (a) {
    a ? this.K.ps(this.F) : this.K.Rp(this.F)
};
v.JW = function () {
    this.L = i;
    this.$f()
};
v.g_ = function () {
    this.L = l;
    this.$f()
};
v.highlight = function () {
    this.C.zIndexProcess && this.$f()
};
v.YQ = r("NC");
v.s0 = ea();

function Q$(a, b, c) {
    this.Ld = c;
    this.I = a;
    this.J = b;
    this.ak = "";
    this.C = this.D = k;
    this.K = new f9a
}
Q$.prototype.up = function (a, b, c) {
    var d = k;
    c && (d = this.Ld.nO(c));
    if (this.C) {
        var c = d,
            e = l;
        c ? this.C.Q(this.C) != c.Kc() && (e = i) : b == jb && (e = i);
        e && (F(this.C, mb, this.C.Ha()), this.C = k, this.ak && (Pn(this.J.tl, this.ak), this.ak = ""))
    }
    if (d) if (this.D) b == jb ? a = i : (b == nb && (this.D = k), a = l);
    else a: {
        if (d && d.Kc() && (d = d.Kc(), d = this.I.markers[d])) {
            if (b == Xa) {
                F(d, b, a);
                a = i;
                break a
            }
            if (b == jb) this.ak = vx(this.J.Wa()), Pn(this.J.tl, "pointer"), this.C = d, F(d, lb, d.Ha());
            else {
                if (b == G) {
                    F(d, b, d.Ha());
                    a = i;
                    break a
                }
                if (b == fb && d.yt()) {
                    this.D = d;
                    this.D.tb.MG(a);
                    a = i;
                    break a
                }
            }
        }
        a = l
    } else a = l;
    return a
};
Q$.prototype.F = function (a) {
    var b = this.K,
        c = kx(a.la);
    a.I = new g9a(c, a);
    h9a(b, a.I);
    a.M = b
};
Q$.prototype.G = function (a) {
    for (var a = this.Ld.kZ(a), b = 0; b < a.length; ++b) {
        var c = this.I.markers[a[b].Kc()];
        if (c) return c
    }
    return k
};

function f9a() {
    this.Hz = [];
    this.C = l
}
var g9a = function (a, b) {
    this.zIndex = a;
    this.mu = b
},
    h9a = function (a, b) {
        Gh(a.Hz, b, function (a, b) {
            return a.zIndex < b.zIndex
        });
        a.C || (Om(a, a.D, 0), a.C = i)
    };
f9a.prototype.update = function (a) {
    Eh(this.Hz, a);
    h9a(this, a)
};
f9a.prototype.D = function () {
    if (0 != this.Hz.length) {
        var a = 0;
        H(this.Hz, function (b) {
            a += b.mu.Qv ? 2 : 1
        });
        var b = ph(1, 99 / a),
            c = 1;
        H(this.Hz, function (a) {
            var e = c,
                a = a.mu,
                f = c;
            a.Qv && (a.Qv.gg = f, f += b);
            a.N.gg = a.L ? 0 : f;
            a.F.dr();
            c = e + b * (a.Qv ? 2 : 1)
        });
        this.C = l
    }
};

function R$(a, b, c, d) {
    this.J = b;
    this.kb = c;
    this.C = d;
    this.D = P2a(c.P.D)
}
R$.prototype.init = z;
R$.prototype.redraw = z;
R$.prototype.expandBounds = Bz;
R$.prototype.Su = function (a, b) {
    var c = a.Xr(k, b),
        d = c.vectors,
        c = c.bounds,
        e;
    if (0 < E(d) && !c.dc()) {
        var f = a instanceof zj,
            c = a;
        f && (c = a.outline && 0 < E(a.qb) ? a.qb[0] : k);
        e = new z4;
        if (f) for (f = 0; f < E(d); ++f) for (var g = i9a(this, d[f]), j = 0; j < g.length; ++j) e.D.push(new PZa(g[j], this.D));
        else {
            g = i9a(this, d);
            for (j = 0; j < g.length; ++j) e.D.push(new PZa(g[j], this.D))
        }
        c && (f = new A3, f.C.push(new w3), g = c.color, j = vh(255 * c.opacity), g = parseInt(g.match(/#(.*)/)[1], 16) + j * uh(2, 24), j = f.C[0], j.width = c.weight, j.C = g, j.K = i, j.I = i, c = this.D, g = this.kb.P.D, g.C[c] = f, g.dispatchEvent(new N2a(g, c, k, f)));
        e.dr();
        this.C.Pa(e)
    }
    return {
        fa: e,
        Qz: d
    }
};

var i9a = function (a, b) {
    var c = E(b);
    if (4 > c) return [];
    var d = [],
        e = [d],
        f = b[0],
        g = b[1];
    d.push(sx(a.J, new L(f, g), i));
    for (var j = 0; j < c;) {
        var m = b[j++],
            n = b[j++];
        if (m != f || n != g) d = [sx(a.J, new L(m, n), i)], e.push(d);
        f = b[j++];
        g = b[j++];
        m = sx(a.J, new L(f, g), i);
        d.push(m)
    }
    return e
};
R$.prototype.bl = function (a) {
    this.C.nb(a)
};
R$.prototype.tc = function (a, b) {
    a && (b ? this.C.ps(a) : this.C.Rp(a))
};

function j9a() {}
v = j9a.prototype;
v.init = z;
v.redraw = z;
v.refresh = z;
v.remove = z;
v.Dq = z;
v.show = z;
v.hide = z;
v.$f = z;

function S$(a, b) {
    this.J = b;
    this.C = k;
    this.D = ""
}
S$.prototype.init = function (a, b) {
    this.F = a;
    k9a(this, a.sf(), b)
};

var k9a = function (a, b, c) {
    if (b != a.D) {
        a.C && a.J.nb(a.C, c);
        if (b) {
            var d = yp(b);
            a.C = a.J.te("CompositedLayer").Pp(d, a.J);
            a.C.rE(d);
            a.J.Pa(a.C, c)
        }
        a.D = b
    }
};
S$.prototype.redraw = z;
S$.prototype.refresh = function (a) {
    k9a(this, this.F.sf(), a)
};
S$.prototype.remove = function () {
    k9a(this, "")
};

function l9a(a, b, c) {
    this.D = a;
    this.J = b;
    this.Ld = c
}
v = l9a.prototype;
v.k1 = function (a) {
    for (var a = a.un(), b = [], c = 0, d = E(a); c < d; ++c) a[c] instanceof np && b.push(a[c]);
    return b
};
v.refresh = z;
v.remove = function () {
    this.Ld = this.J = this.D = k
};
v.mK = u(k);
v.ps = function (a) {
    O8a(this.Ld, a, i)
};
v.Rp = function (a) {
    O8a(this.Ld, a, l)
};

var m9a = k;
X("vt", 1, function (a, b, c) {
    m9a == k && (a = m9a = new E$(a, as, c), c = new M$(a.J, a), a.ba = new a9a(a.J, c, a), a.ca = new Gz(a.J, c, a.ba), a.F.Arrow = L$, a.F.Polyline = R$, a.F.Polygon = R$, a.F.Marker = O$, a.F.TrafficIncident = O$, a.F.trafficlayeroverlay = S$, a.F.TileLayerOverlay = j9a, a.F.CityblockLayerOverlay = j9a, G8a(a, ["Marker", "TrafficIncident"], Q$), G8a(a, ["Layer"], N$), G8a(a, ["CompositedLayer"], l9a), a.I = new Cw(0, 0), a.ma = new l2, a = m9a, a.getId(), b.CI[a.getId()] = a, a.rQ(b.Yi))
});
X("vt", 2, t2);
X("vt", 3, V2);
X("vt", 4, F2);
X("vt", 5, x$);
X("vt", 6, z$);
X("vt", 7, v$);
X("vt");