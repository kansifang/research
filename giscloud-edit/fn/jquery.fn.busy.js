(function(c) {
    function a(e) {
        this.options = c.extend({},a.defaults, e)
    }
    a.instances = [];
    a.repositionAll = function() {
        for (var f = 0; f < a.instances.length; f++) {
            if (!a.instances[f]) {
                continue
            }
            var e = a.instances[f].options;
            new a(e).positionImg(c(a.instances[f].target), c.data(a.instances[f].target, "busy"), e.position)
        }
    };
    a.prototype.hide = function(e) {
        e.each(function() {
            var g = c.data(this, "busy");
            if (g) {
                g.remove()
            }
            c(this).css("visibility", "");
            c.data(this, "busy", null);
            for (var f = 0; f < a.instances.length; f++) {
                if (a.instances[f] != null && a.instances[f].target == this) {
                    a.instances[f] = null
                }
            }
        })
    };
    a.prototype.show = function(e) {
        var f = this;
        e.each(function() {
            if (c.data(this, "busy")) {
                return
            }
            var h = c(this);
            var g = f.buildImg();
            g.css("visibility", "hidden");
            g.load(function() {
                f.positionImg(h, g, f.options.position);
                g.css("visibility", "")
            });
            c("body").append(g);
            if (f.options.hide) {
                h.css("visibility", "hidden")
            }
            c.data(this, "busy", g);
            a.instances.push({
                target: this,
                options: f.options
            })
        })
    };
    a.prototype.preload = function() {
        var e = this.buildImg();
        e.css("visibility", "hidden");
        e.load(function() {
            c(this).remove()
        });
        c("body").append(e)
    };
    a.prototype.buildImg = function() {
        var e = "<img src='" + this.options.img + "' alt='" + this.options.alt + "' title='" + this.options.title + "'";
        if (this.options.width) {
            e += " width='" + this.options.width + "'"
        }
        if (this.options.height) {
            e += " height='" + this.options.height + "'"
        }
        e += " />";
        return c(e)
    };
    a.prototype.positionImg = function(m, e, j) {
        var h = m.offset();
        var n = m.outerWidth();
        var k = m.outerHeight();
        var o = e.outerWidth();
        var q = e.outerHeight();
        if (j == "left") {
            var f = h.left - o - this.options.offset
        } else {
            if (j == "right") {
                var f = h.left + n + this.options.offset
            } else {
                var f = h.left + (n - o) / 2
            }
        }
        var g = h.top + (k - q) / 2;
        e.css("position", "absolute");
        e.css("left", f + "px");
        e.css("top", g + "px")
    };
    a.defaults = {
        img: "busy.gif",
        alt: "Please wait...",
        title: "Please wait...",
        hide: true,
        position: "center",
        zIndex: 1001,
        width: null,
        height: null,
        offset: 10
    };
    c.fn.busy = function(e, f) {
        if (c.inArray(e, ["clear", "hide", "remove"]) != -1) {
            new a(e).hide(c(this))
        } else {
            if (e == "defaults") {
                c.extend(a.defaults, f || {})
            } else {
                if (e == "preload") {
                    new a(e).preload()
                } else {
                    if (e == "reposition") {
                        a.repositionAll()
                    } else {
                        new a(e).show(c(this));
                        return c(this)
                    }
                }
            }
        }
    }
})(jQuery); 