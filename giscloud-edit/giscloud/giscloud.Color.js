
(function (c, e, a, f) {
    giscloud.Color = function (o, t, j, m) {
        var y, D, F, G, C, E, z, A, w, u, H, n, B, x, q, k;
        if (o !== f && typeof o == "number") {
            if (o > 255) {
                y = 255
            } else {
                if (o < 0) {
                    y = 0
                } else {
                    y = Math.round(o)
                }
            }
            B = true;
            x = true;
            k = true
        } else {
            q = true
        }
        if (t !== f && typeof t == "number") {
            if (t > 255) {
                D = 255
            } else {
                if (t < 0) {
                    D = 0
                } else {
                    D = Math.round(t)
                }
            }
            B = true;
            x = true;
            k = true
        } else {
            q = true
        }
        if (j !== f && typeof j == "number") {
            if (j > 255) {
                F = 255
            } else {
                if (j < 0) {
                    F = 0
                } else {
                    F = Math.round(j)
                }
            }
            B = true;
            x = true;
            k = true
        } else {
            q = true
        }
        if (m !== f && typeof m == "number") {
            if (m > 100) {
                G = 100
            } else {
                if (m < 0) {
                    G = 0
                } else {
                    G = Math.round(m)
                }
            }
        } else {
            G = 0
        }
        B = true;
        x = true;
        k = true;
        this.hex = function () {
            var v = arguments[0],
                r = /^((#)|(0x))?([a-f0-9]{3}$)|([a-f0-9]{6}$)/i,
                g;
            if (v && typeof v == "string") {
                if (v.match(r)) {
                    g = giscloud.Color.hexToRgb(v);
                    y = g[0];
                    D = g[1];
                    F = g[2];
                    B = true;
                    x = true;
                    k = true;
                    return this
                } else {
                    return giscloud.Color.rgbToHex(this.rgb(), v)
                }
            } else {
                return giscloud.Color.rgbToHex(this.rgb(), v)
            }
        };
        this.rgb = function () {
            var g, h;
            if (arguments.length > 0) {
                for (g = 0; g < 3; g++) {
                    h = arguments[g];
                    if (h !== f && h !== null && typeof h == "number") {
                        if (h > 255) {
                            h = 255
                        } else {
                            if (h < 0) {
                                h = 0
                            } else {
                                h = Math.round(h)
                            }
                        }
                        switch (g) {
                        case 0:
                            y = h;
                            break;
                        case 1:
                            D = h;
                            break;
                        case 2:
                            F = h;
                            break
                        }
                        B = true;
                        x = true;
                        k = true
                    }
                }
                return this
            } else {
                if (q) {
                    if (!B) {
                        h = giscloud.Color.hslToRgb(C, E, A)
                    } else {
                        if (!x) {
                            h = giscloud.Color.hsvToRgb(C, z, w)
                        } else {
                            if (!k) {
                                h = giscloud.Color.labToRgb(u, H, n)
                            }
                        }
                    }
                    y = h[0];
                    D = h[1];
                    F = h[2];
                    q = false
                }
                return [y, D, F]
            }
        };
        this.hsl = function (g) {
            var h, r;
            if (arguments.length === 3) {
                for (h = 0; h < 3; h++) {
                    r = arguments[h];
                    if (r !== f && r !== null && typeof r == "number") {
                        if (h === 0) {
                            if (r >= 360) {
                                r -= 360
                            } else {
                                if (r < 0) {
                                    r += 360
                                } else {
                                    r = Math.round(r)
                                }
                            }
                            C = r
                        } else {
                            if (r > 100) {
                                r = 100
                            } else {
                                if (r < 0) {
                                    r = 0
                                }
                            }
                            if (h === 1) {
                                E = r
                            } else {
                                A = r
                            }
                        }
                        q = true;
                        x = true;
                        k = true
                    }
                }
                B = false;
                return this
            } else {
                if (B) {
                    if (!q) {
                        r = giscloud.Color.rgbToHsl(y, D, F)
                    } else {
                        if (!x) {
                            r = giscloud.Color.hsvToHsl(C, z, w)
                        } else {
                            if (!k) {
                                r = giscloud.Color.labToHsl(u, H, n)
                            }
                        }
                    }
                    C = r[0];
                    E = r[1];
                    A = r[2];
                    B = false
                }
                if (g) {
                    return [Math.round(C), Math.round(E), Math.round(A)]
                } else {
                    return [C, E, A]
                }
            }
        };
        this.hsv = function (g) {
            var h, r;
            if (arguments.length === 3) {
                for (h = 0; h < 3; h++) {
                    r = arguments[h];
                    if (r !== f && r !== null && typeof r == "number") {
                        if (h === 0) {
                            if (r >= 360) {
                                r -= 360
                            } else {
                                if (r < 0) {
                                    r += 360
                                } else {
                                    r = Math.round(r)
                                }
                            }
                            C = r
                        } else {
                            if (r > 100) {
                                r = 100
                            } else {
                                if (r < 0) {
                                    r = 0
                                }
                            }
                            if (h === 1) {
                                z = r
                            } else {
                                w = r
                            }
                        }
                        q = true;
                        B = true;
                        k = true
                    }
                }
                x = false;
                return this
            } else {
                if (x) {
                    if (!q) {
                        r = giscloud.Color.rgbToHsv(y, D, F)
                    } else {
                        if (!B) {
                            r = giscloud.Color.hslToHsv(C, E, A)
                        } else {
                            if (!k) {
                                r = giscloud.Color.labToRgb(u, H, n)
                            }
                        }
                    }
                    C = r[0];
                    z = r[1];
                    w = r[2];
                    x = false
                }
                if (g) {
                    return [Math.round(C), Math.round(z), Math.round(w)]
                } else {
                    return [C, z, w]
                }
            }
        };
        this.lab = function (g) {
            var h, r;
            if (arguments.length === 3) {
                for (h = 0; h < 3; h++) {
                    r = arguments[h];
                    if (r !== f && r !== null && typeof r == "number") {
                        if (h === 0) {
                            u = r
                        } else {
                            if (h === 1) {
                                H = r
                            } else {
                                n = r
                            }
                        }
                        q = true;
                        B = true;
                        x = true
                    }
                }
                k = false;
                return this
            } else {
                if (k) {
                    if (!q) {
                        r = giscloud.Color.rgbToLab(y, D, F)
                    } else {
                        if (!B) {
                            r = giscloud.Color.hslToLab(C, E, A)
                        } else {
                            if (!x) {
                                r.giscloud.Color.hsvToLab(C, z, w)
                            }
                        }
                    }
                    u = r[0];
                    H = r[1];
                    n = r[2];
                    k = false
                }
                if (g) {
                    return [Math.round(u), Math.round(H), Math.round(n)]
                } else {
                    return [u, H, n]
                }
            }
        };
        this.alpha = function (g) {
            if (g !== f && typeof g == "number") {
                if (g > 100) {
                    G = 100
                } else {
                    if (g < 0) {
                        G = 0
                    } else {
                        G = Math.round(g)
                    }
                }
            } else {
                return G
            }
        };
        this.brighter = function (h) {
            var g = this.hsl();
            h = h || 20;
            return giscloud.Color.fromHsl(g[0], g[1], g[2] + h)
        };
        this.darker = function (h) {
            var g = this.hsl();
            h = h || 20;
            return giscloud.Color.fromHsl(g[0], g[1], g[2] - h)
        };
        this.clone = function () {
            var g = this.rgb();
            return new giscloud.Color(g[0], g[1], g[2], G)
        };
        this.equals = function (h) {
            var g;
            if (h instanceof giscloud.Color) {
                g = h.rgb();
                return y === g[0] && D === g[1] && F === g[2] && G === h.alpha()
            } else {
                return false
            }
        }
    };
    giscloud.Color.fromRgb = function (k, j, h) {
        return new giscloud.Color(k, j, h)
    };
    giscloud.Color.fromHsl = function (m, k, g) {
        var j = new giscloud.Color();
        j.hsl(m, k, g);
        return j
    };
    giscloud.Color.fromHsv = function (m, k, g) {
        var j = new giscloud.Color();
        j.hsv(m, k, g);
        return j
    };
    giscloud.Color.fromLab = function (j, h, g) {
        var k = new giscloud.Color();
        k.lab(j, h, g);
        return k
    };
    giscloud.Color.fromHex = function (h) {
        var g = giscloud.Color.hexToRgb(h);
        return g && new giscloud.Color(g[0], g[1], g[2])
    };
    giscloud.Color.fromRgbString = function (h) {
        var j = /^rgb\((\d+)[,\s]*(\d+)[,\s]*(\d+)\)$/i,
            g = h && h.match && h.match(j);
        if (g && g.length === 4) {
            return new giscloud.Color(parseInt(g[1]), parseInt(g[2]), parseInt(g[3]))
        } else {
            return null
        }
    };
    giscloud.Color.fromString = function (g) {
        return giscloud.Color.fromRgbString(g) || giscloud.Color.fromHex(g)
    };
    giscloud.Color.hexToRgb = function (o) {
        var n, k, j, h;
        if (typeof o == "string") {
            h = o.match(/^(?:#|0x)?(?:([a-f0-9]{1,2})([a-f0-9]{1,2})([a-f0-9]{1,2}))$/i);
            if (h && h.length === 4) {
                n = parseInt(h[1], 16);
                k = parseInt(h[2], 16);
                j = parseInt(h[3], 16);
                return [n, k, j]
            } else {
                return null
            }
        } else {
            if (typeof o == "number") {
                n = (o & 16711680) >> 16;
                k = (o & 65280) >> 8;
                j = (o & 255);
                return (!isNaN(n + k + j) && [n, k, j]) || null
            }
        }
    };
    giscloud.Color.rgbToHex = function (o, n, h, q) {
        var k, j, m;
        if (o.length && o.length === 3) {
            if (typeof n == "string") {
                q = n
            }
            n = o[1];
            h = o[2];
            o = o[0]
        }
        k = (o > 15) ? o.toString(16) : "0" + o.toString(16);
        j = (n > 15) ? n.toString(16) : "0" + n.toString(16);
        m = (h > 15) ? h.toString(16) : "0" + h.toString(16);
        if (q === f || q === null) {
            q = "#"
        }
        return q + k + j + m
    };
    giscloud.Color.rgbToHsl = function (m, n, y) {
        var j, t, v, o, w, u, x, q, z, k;
        if (m.length && m.length === 3) {
            j = m[0] / 255;
            t = m[1] / 255;
            v = m[2] / 255
        } else {
            j = m / 255;
            t = n / 255;
            v = y / 255
        }
        o = Math.min(j, t, v);
        w = Math.max(j, t, v);
        u = w - o;
        x = w + o;
        k = x / 2;
        if (u === 0) {
            q = 0;
            z = 0
        } else {
            switch (w) {
            case j:
                q = (t - v) / u;
                break;
            case t:
                q = 2 + (v - j) / u;
                break;
            case v:
                q = 4 + (j - t) / u;
                break
            }
            q = Math.min(Math.round(q * 60), 360);
            q = (q < 0) ? q + 360 : q;
            if (k <= 0.5) {
                z = u / x
            } else {
                z = u / (2 - x)
            }
        }
        return [q, z * 100, k * 100]
    };
    giscloud.Color.hslToRgb = function (v, o, x) {
        var j, t, w, u, q, k, n, y, m;
        if (v.length && v.length === 3) {
            n = v[0] / 360;
            y = v[1] / 100;
            m = v[2] / 100
        } else {
            n = v / 360;
            y = o / 100;
            m = x / 100
        }
        if (y === 0) {
            j = t = w = Math.round(m * 255);
            return [j, t, w]
        } else {
            q = (m < 0.5) ? m * (1 + y) : m + y - m * y;
            u = 2 * m - q;
            k = function (r, h, g) {
                var z;
                if (g < 0) {
                    g = g + 1
                } else {
                    if (g > 1) {
                        g = g - 1
                    }
                }
                if (6 * g < 1) {
                    z = r + (h - r) * 6 * g
                } else {
                    if (2 * g < 1) {
                        z = h
                    } else {
                        if (3 * g < 2) {
                            z = r + (h - r) * (2 / 3 - g) * 6
                        } else {
                            z = r
                        }
                    }
                }
                return z
            };
            j = k(u, q, n + 1 / 3);
            t = k(u, q, n);
            w = k(u, q, n - 1 / 3);
            return [Math.round(j * 255), Math.round(t * 255), Math.round(w * 255)]
        }
    };
    giscloud.Color.rgbToHsv = function (k, m, x) {
        var j, q, u, n, w, t, o, z, y;
        if (k.length && k.length === 3) {
            j = k[0];
            q = k[1];
            u = k[2]
        } else {
            j = k;
            q = m;
            u = x
        }
        n = Math.min(j, q, u);
        w = Math.max(j, q, u);
        t = w - n;
        if (w === 0) {
            z = 0
        } else {
            z = t / w * 100
        }
        if (t === 0) {
            o = 0
        } else {
            switch (w) {
            case j:
                o = (q - u) / t;
                break;
            case q:
                o = 2 + (u - j) / t;
                break;
            case u:
                o = 4 + (j - q) / t;
                break
            }
            o = Math.min(Math.round(o * 60), 360);
            o = (o < 0) ? o + 360 : o
        }
        y = w / 255 * 100;
        return [o, z, y]
    };
    giscloud.Color.hsvToRgb = function (n, m, r) {
        var o, j, g, y, x, k, z, w;
        if (n.length && n.length === 3) {
            k = n[0];
            z = n[1] / 100;
            w = n[2] / 100
        } else {
            k = n;
            z = m / 100;
            w = r / 100
        }
        x = Math.floor(k / 60) % 6;
        o = k / 60 - Math.floor(k / 60);
        j = Math.round(255 * w * (1 - z));
        g = Math.round(255 * w * (1 - (z * o)));
        y = Math.round(255 * w * (1 - (z * (1 - o))));
        w = Math.round(255 * w);
        switch (x) {
        case 0:
            return [w, y, j];
        case 1:
            return [g, w, j];
        case 2:
            return [j, w, y];
        case 3:
            return [j, g, w];
        case 4:
            return [y, j, w];
        case 5:
            return [w, j, g]
        }
    };
    giscloud.Color.hslToHsv = function (j, n, o) {
        var m, k, g;
        if (j.length && j.length === 3) {
            m = j[0];
            k = j[1];
            g = j[2]
        } else {
            m = j;
            k = n;
            g = o
        }
        return giscloud.Color.rgbToHsv(giscloud.Color.hslToRgb(m, k, g))
    };
    giscloud.Color.hsvToHsl = function (j, n, o) {
        var m, k, g;
        if (j.length && j.length === 3) {
            m = j[0];
            k = j[1];
            g = j[2]
        } else {
            m = j;
            k = n;
            g = o
        }
        return giscloud.Color.rgbToHsl(giscloud.Color.hsvToRgb(m, k, g))
    };
    giscloud.Color.hsvToLab = function (j, n, o) {
        var m, k, g;
        if (j.length && j.length === 3) {
            m = j[0];
            k = j[1];
            g = j[2]
        } else {
            m = j;
            k = n;
            g = o
        }
        return giscloud.Color.rgbToLab(giscloud.Color.hsvToRgb(m, k, g))
    };
    giscloud.Color.hslToLab = function (j, n, o) {
        var m, k, g;
        if (j.length && j.length === 3) {
            m = j[0];
            k = j[1];
            g = j[2]
        } else {
            m = j;
            k = n;
            g = o
        }
        return giscloud.Color.rgbToLab(giscloud.Color.hslToRgb(m, k, g))
    };
    giscloud.Color.rgbToXyz = function (j, k, u) {
        var h, m, q, t, o, n;
        if (j.length && j.length === 3) {
            h = j[0] / 255;
            m = j[1] / 255;
            q = j[2] / 255
        } else {
            h = j / 255;
            m = k / 255;
            q = u / 255
        }
        if (h > 0.04045) {
            h = Math.pow((h + 0.055) / 1.055, 2.4)
        } else {
            h = h / 12.92
        }
        if (m > 0.04045) {
            m = Math.pow((m + 0.055) / 1.055, 2.4)
        } else {
            m = m / 12.92
        }
        if (q > 0.04045) {
            q = Math.pow((q + 0.055) / 1.055, 2.4)
        } else {
            q = q / 12.92
        }
        h = h * 100;
        m = m * 100;
        q = q * 100;
        t = h * 0.4124 + m * 0.3576 + q * 0.1805;
        o = h * 0.2126 + m * 0.7152 + q * 0.0722;
        n = h * 0.0193 + m * 0.1192 + q * 0.9505;
        return [t, o, n]
    };
    giscloud.Color.xyzToRgb = function (j, o, n) {
        var m, k, h;
        if (j.length && j.length === 3) {
            o = j[1] / 100;
            n = j[2] / 100;
            j = j[0] / 100
        } else {
            j = j / 100;
            o = o / 100;
            n = n / 100
        }
        m = j * 3.2406 + o * -1.5372 + n * -0.4986;
        k = j * -0.9689 + o * 1.8758 + n * 0.0415;
        h = j * 0.0557 + o * -0.204 + n * 1.057;
        if (m > 0.0031308) {
            m = 1.055 * Math.pow(m, 1 / 2.4) - 0.055
        } else {
            m = 12.92 * m
        }
        if (k > 0.0031308) {
            k = 1.055 * Math.pow(k, 1 / 2.4) - 0.055
        } else {
            k = 12.92 * k
        }
        if (h > 0.0031308) {
            h = 1.055 * Math.pow(h, 1 / 2.4) - 0.055
        } else {
            h = 12.92 * h
        }
        m = m * 255;
        k = k * 255;
        h = h * 255;
        return [m, k, h]
    };
    giscloud.Color.labToXyz = function (k, j, h) {
        var g, n, m;
        if (k.length && k.length === 3) {
            j = k[1];
            h = k[2];
            k = k[0]
        }
        n = (k + 16) / 116;
        g = j / 500 + n;
        m = n - h / 200;
        if (n * n * n > 0.008856) {
            n = n * n * n
        } else {
            n = (n - 16 / 116) / 7.787
        }
        if (g * g * g > 0.008856) {
            g = g * g * g
        } else {
            g = (g - 16 / 116) / 7.787
        }
        if (m * m * m > 0.008856) {
            m = m * m * m
        } else {
            m = (m - 16 / 116) / 7.787
        }
        g = 95.047 * g;
        n = 100 * n;
        m = 108.883 * m;
        return [g, n, m]
    };
    giscloud.Color.xyzToLab = function (h, n, m) {
        var k, j, g;
        if (h.length && h.length === 3) {
            n = h[1];
            m = h[2];
            h = h[0]
        }
        h = h / 95.047;
        n = n / 100;
        m = m / 108.883;
        if (h > 0.008856) {
            h = Math.pow(h, 1 / 3)
        } else {
            h = (7.787 * h) + (16 / 116)
        }
        if (n > 0.008856) {
            n = Math.pow(n, 1 / 3)
        } else {
            n = (7.787 * n) + (16 / 116)
        }
        if (m > 0.008856) {
            m = Math.pow(m, 1 / 3)
        } else {
            m = (7.787 * m) + (16 / 116)
        }
        k = (116 * n) - 16;
        j = 500 * (h - n);
        g = 200 * (n - m);
        return [k, j, g]
    };
    giscloud.Color.rgbToLab = function (m, k, h) {
        var j = giscloud.Color.rgbToXyz(m, k, h);
        return giscloud.Color.xyzToLab(j)
    };
    giscloud.Color.labToRgb = function (j, h, g) {
        var k = giscloud.Color.labToXyz(j, h, g);
        return giscloud.Color.xyzToRgb(k)
    };
    giscloud.Color.labToHsl = function (j, h, g) {
        var k = giscloud.Color.labToXyz(j, h, g);
        return giscloud.Color.rgbToHsl(giscloud.Color.xyzToRgb(k))
    };
    giscloud.Color.labToHsl = function (j, h, g) {
        var k = giscloud.Color.labToXyz(j, h, g);
        return giscloud.Color.rgbToHsv(giscloud.Color.xyzToRgb(k))
    };
    giscloud.Color.randomHue = function (g, h) {
        return giscloud.Color.fromHsv(Math.round(Math.random() * 360), g, h)
    };
    giscloud.Color.range = function (t, r, w, q) {
        var n, g, k, u, x, j, h, o = [];
        if (t instanceof giscloud.Color && r instanceof giscloud.Color && w >= 2) {
            if (w === 2) {
                return [t.clone(), r.clone()]
            } else {
                d = [];
                j = (q || "hsl cw").match(/^((\w+)?\s)?(ccw$|cw$)/);
                if (j) {
                    q = j[2] || "hsl";
                    h = j[3]
                } else {
                    h = "cw"
                }
                if (q === "rgb") {
                    g = t.rgb();
                    k = r.rgb();
                    d = [(k[0] - g[0]) / (w - 1), (k[1] - g[1]) / (w - 1), (k[2] - g[2]) / (w - 1), (k[3] - g[3]) / (w - 1)]
                } else {
                    if (q === "hsv") {
                        g = t.hsv();
                        k = r.hsv()
                    } else {
                        g = t.hsl();
                        k = r.hsl()
                    }
                    if (h === "cw") {
                        d = [(k[0] >= g[0]) ? (k[0] - g[0]) / (w - 1) : (360 - g[0] + k[0]) / (w - 1), (k[1] - g[1]) / (w - 1), (k[2] - g[2]) / (w - 1), (k[3] - g[3]) / (w - 1)]
                    } else {
                        d = [(k[0] < g[0]) ? (k[0] - g[0]) / (w - 1) : (k[0] - g[0] - 360) / (w - 1), (k[1] - g[1]) / (w - 1), (k[2] - g[2]) / (w - 1), (k[3] - g[3]) / (w - 1)]
                    }
                }
                g.push(t.alpha());
                k.push(r.alpha());
                x = [g[0], g[1], g[2], g[3]];
                for (n = 0; n < w; n++) {
                    if (q === "rgb") {
                        o.push(new giscloud.Color(x[0], x[1], x[2], x[3]))
                    } else {
                        if (q === "hsv") {
                            u = new giscloud.Color.fromHsv(x[0], x[1], x[2]);
                            u.alpha(x[3]);
                            o.push(u.clone())
                        } else {
                            u = new giscloud.Color.fromHsl(x[0], x[1], x[2]);
                            u.alpha(x[3]);
                            o.push(u.clone())
                        }
                    }
                    x[0] += d[0];
                    x[1] += d[1];
                    x[2] += d[2];
                    x[3] += d[3]
                }
                return o
            }
        } else {
            return null
        }
    };
    giscloud.Color.hexNrToString = function (g, h) {
        if (typeof g == "number") {
            return (h || "") + (16777216 | g).toString(16).substr(1)
        } else {
            return null
        }
    };
    giscloud.Color.hexStringToNr = function (j, h) {
        var g;
        if (typeof j == "string" && j) {
            h = h || "#";
            g = new RegExp("^(?:" + h + "|0x)?([a-f0-9]{3})([a-f0-9]{3})?$", "i");
            return parseInt(j.replace(g, "$1$2"), 16)
        } else {
            return NaN
        }
    }
})(window, giscloud.exposeJQuery(), giscloud.common());