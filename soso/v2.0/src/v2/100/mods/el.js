function a(b) {
    b = e(b);
    return new m(b[0], b[1])
}
var b = p,
c = qc,
d = aa,
e = rc,
m = x,
y = pc,
E = null,
Xa = 0,
u = !1,
N = !1; (function() {
    b.addDomListener(window, "mousedown",
    function() {
        u = !0
    });
    b.addDomListener(window, "mouseup",
    function() {
        u = !1
    })
})();
B.$setExports(function(e, m) {
    function l(a, c, k, n) {
        k.listener && f(a, c, k);
        k.listener = "mousewheel" === c ? d(a, k) : b.addDomListener(a, c, k, n)
    }
    function f(a, c, f) {
        f.listener && (b.removeListener(f.listener), delete f.listener)
    }
    function k() {
        B && (f(window, "mouseup", z, !0), f(window, "mousemove", ka, !0), B = !1)
    }
    function C(c) {
        var f = a(c);
        if (2 == c.button) X = f;
        else {
            x = !0;
            r = b.exist(e, "dragstart") || b.exist(e, "dragging") || b.exist(e, "dragend");
            ha = w = f;
            y();
            i("mousedown", c);
            if (r && (!E || E === J)) E = J,
            v = 0,
            B || (l(window, "mouseup", z, !0), l(window, "mousemove", ka, !0), B = !0);
            N = !1
        }
    }
    function s(a) {
        2 !== a.button && (2 !== v && (v = -1), x = !1, i("mouseup", a))
    }
    function z(a) {
        1 == v && (v = 2, i("dragend", a));
        E = null;
        k()
    }
    function A(c) {
        var f = a(c);
        w && 2 > f.distanceTo(w) || (w = f, b.exist(e, "mousemove") && i("mousemove", c))
    }
    function ka(b) {
        var c = a(b),
        f = !1;
        0 === v && 0 < c.distanceTo(ha) && (v = 1, f = N = !0, i("dragstart", b));
        1 === v && (f = c.minus(f ? ha: w), b.delta = f, i("dragging", b, f));
        w = c
    }
    function g(a) {
        i("mouseover", a, x, u);
        var b = a.target,
        f = a.relatedTarget;
        if (!o && (J === b || c(J, b)) && !(J === f || c(J, f))) o = !0,
        i("mouseenter", a, x, u)
    }
    function h(a) {
        i("mouseout", a, x, u);
        var b = a.target,
        f = a.relatedTarget;
        if (o && (J === b || c(J, b)) && !(J === f || c(J, f))) o = !1,
        i("mouseleave", a, x, u)
    }
    function df(a) {
        if (!N) {
            var b = y();
            200 < b - q && (O = 0, q = b);
            O++;
            x = !1;
            1 < O ? (i("dblclick", a), O = 0) : i("click", a)
        }
    }
    function da(a) {
        i("mousewheel", a)
    }
    function j(c) {
        var f = a(c);
        b.exist(e, "rightclick") && X && 2 >= f.distanceTo(X) && (c.preventDefault(), i("rightclick", c))
    }
    function i(c, f) {
        for (var k = [e, c, f, a(f)], n = 2, I = null; I = arguments[n++];) k.push(I);
        b.trigger.apply(b, k)
    }
    function p() {
        e.get("tracking") ? P || (l(J, "mouseover", g), l(J, "mouseout", h), l(J, "mousedown", C), l(J, "mouseup", s), l(J, "mousemove", A), l(J, "click", df), l(J, "mousewheel", da), l(J, "contextmenu", j), P = !0) : P && (f(J, "mouseover", g), f(J, "mouseout", h), f(J, "mousedown", C), f(J, "mouseup", s), f(J, "mousemove", A), f(J, "click", df), f(J, "mousewheel", da), f(J, "contextmenu", j), k(), P = !1)
    }
    Xa++;
    var J = m,
    P = !1,
    B = !1,
    x = !1,
    o = !1,
    r = !1,
    v = -1,
    w = null,
    X = null,
    ha = null,
    q = 0,
    O = 0;
    b.addListener(e, "tracking_changed", p);
    p()
}) // JavaScript Document
