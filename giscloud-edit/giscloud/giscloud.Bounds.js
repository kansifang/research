
(function () {
    giscloud.LonLat = function (c, a) {
        this.lon = isNaN(c) ? null : c;
        this.lat = isNaN(a) ? null : a;
        this.toArray = function () {
            return [this.lon, this.lat]
        };
        this.toString = function (f) {
            var e;
            if (f !== undefined) {
                e = Math.pow(10, f);
                return (Math.round(this.lon * e) / e) + ", " + (Math.round(this.lat * e) / e)
            } else {
                return this.lon + ", " + this.lat
            }
        };
        this.toBounds = function (e) {
            e = (isNaN(e) || e === null) ? 0 : e;
            return new giscloud.Bounds(this.lon - e, this.lat - e, this.lon + e, this.lat + e)
        };
        this.equals = function (e) {
            return e instanceof giscloud.LonLat && this.lon === e.lon && this.lat === e.lat
        };
        this.valid = function () {
            return !(isNaN(c) || isNaN(a))
        }
    };
    giscloud.LonLat.parse = function (c) {
        var a;
        if (typeof c === "string") {
            a = c.split(",");
            if (a.length === 2) {
                return new giscloud.LonLat(parseFloat(a[0]), parseFloat(a[1]))
            }
        }
        return null
    };
    giscloud.Bounds = function (f, a, c, e) {
        this.left = (typeof f === "number") ? f : (parseFloat(f));
        this.bottom = (typeof a === "number") ? a : (parseFloat(a));
        this.right = (typeof c === "number") ? c : (parseFloat(c));
        this.top = (typeof e === "number") ? e : (parseFloat(e));
        this.width = function () {
            if (isFinite(this.left) && isFinite(this.right)) {
                return Math.abs(this.right - this.left)
            } else {
                return null
            }
        };
        this.height = function () {
            if (isFinite(this.top) && isFinite(this.bottom)) {
                return Math.abs(this.top - this.bottom)
            } else {
                return null
            }
        };
        this.center = function (j) {
            var g, m, o, n, k;
            if (this.isPoint()) {
                if (j == null) {
                    return new giscloud.LonLat(this.left, this.bottom)
                } else {
                    this.left = this.right = j.lon;
                    this.top = this.bottom = j.lat;
                    return this
                }
            } else {

                g = this.width();
                m = this.height();
                o = new giscloud.LonLat((this.left + g / 2), (this.bottom + m / 2));
                if (j == null) {
                    return o
                } else {
                    n = j.lon - o.lon;
                    k = j.lat - o.lat;
                    this.left += n;
                    this.right += n;
                    this.top += k;
                    this.bottom += k;
                    return this
                }
            }
        };
        this.isPoint = function () {
            return this.left === this.right && this.top === this.bottom
        };
        this.valid = function () {
            return !(isNaN(this.left) || isNaN(this.bottom) || isNaN(this.right) || isNaN(this.top))
        };
        this.include = function (h, g) {
            g = (isNaN(g) || g === null) ? 0 : g;
            if (h instanceof giscloud.LonLat) {
                this.left = Math.min(h.lon - g, this.left);
                this.bottom = Math.min(h.lat - g, this.bottom);
                this.right = Math.max(h.lon + g, this.right);
                this.top = Math.max(h.lat + g, this.top)
            } else {
                if (h instanceof giscloud.Bounds) {
                    this.left = Math.min(h.left - g, this.left);
                    this.bottom = Math.min(h.bottom - g, this.bottom);
                    this.right = Math.max(h.right + g, this.right);
                    this.top = Math.max(h.top + g, this.top)
                }
            }
            return this
        };
        this.clone = function () {
            return new giscloud.Bounds(this.left, this.bottom, this.right, this.top)
        };
        this.toArray = function () {
            return [this.left, this.bottom, this.right, this.top]
        };
        this.toString = function (h) {
            var g;
            if (h !== undefined) {
                g = Math.pow(10, h);
                return (Math.round(this.left * g) / g) + ", " + (Math.round(this.bottom * g) / g) + (Math.round(this.right * g) / g) + ", " + (Math.round(this.top * g) / g)
            } else {
                return this.left + ", " + this.bottom + ", " + this.right + ", " + this.top
            }
        }
    };
    giscloud.Bounds.parse = function (c) {
        var a;
        if (typeof c === "string") {
            a = c.split(",");
            if (a.length === 4) {
                return new giscloud.Bounds(parseFloat(a[0]), parseFloat(a[1]), parseFloat(a[2]), parseFloat(a[3]))
            }
        }
        return null
    }
}());
