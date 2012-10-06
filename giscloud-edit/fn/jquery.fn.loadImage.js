(function(g) {
    var h = {},
    e = {},
    n = {},
    k = {},
    q = {},
    j = null;
    function f(r, t) {
        if (r.height() && r.width()) {
            clearInterval(e[t]);
            clearTimeout(n[t]);
            delete e[t];
            delete n[t];
            delete k[t];
            h[t].resolveWith(r, [r[0]])
        }
    }
    function a(r) {
        console.log("timeout", r);
        if (e[r]) {
            clearInterval(e[r]);
            delete e[r];
            delete n[r];
            delete q[r];
            h[r].reject()
        }
    }
    function c(t, u) {
        var r = new g.Deferred();
        k[u] = function() {
            f(t, u)
        };
        q[u] = function() {
            a(u)
        };
        e[u] = setInterval(k[u], 100);
        n[u] = setTimeout(q[u], 1000);
        t.load(k[u]);
        h[u] = r;
        return h[u]
    }
    function m() {
        return g("<div/>", {
            id: "a" + Math.floor(Math.random() * 1000),
            css: {
                width: "1px",
                height: "1px",
                position: "absolute",
                top: "-5000px",
                left: "-5000px",
                overflow: "hidden"
            }
        }).appendTo("body")
    }
    function o(u) {
        var r, t = u && u.replace && u.replace(/[\W]+/g, "_");
        if (!t) {
            return null
        }
        if (h[t]) {
            return h[t].promise()
        }
        if (!j) {
            j = m()
        }
        r = g("<img/>", {
            src: u
        }).appendTo(j);
        return c(r, t).promise()
    }
    g.loadImage = o;
    g.fn.loadImage = function(r) {
        if (!this.is("img")) {
            return null
        }
        return o(this.attr("src") || r)
    }
} (jQuery));