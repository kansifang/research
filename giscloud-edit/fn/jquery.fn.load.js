(function(a) {
    function c(e) {
        this.options = a.extend({}, c.defaults, e)
    }
    c.prototype.hide = function(e) {
        e.each(function() {
            var f = a.data(this, "loader");
            if (f) {
                f.remove()
            }
            a.data(this, "loader", null)
        })
    };
    c.prototype.show = function(e) {
        var f = this;
        e.each(function() {
            if (a.data(this, "loader")) {
                return
            }
            var h = (h ? h: "Loading...");
            var g = jQuery("<div style='width:100%; text-align:center;' class='loader' ></div> ");
            g.html('<div style=\'margin:5px auto;\'><div class="loading" style="margin:0 auto;width:16px;height:16px" alt=\'' + h + "'></div></div>");
            var j = a(this);
            g.appendTo(j);
            a.data(this, "loader", g)
        })
    };
    a.fn.loader = function(e, f) {
        if (a.inArray(e, ["clear", "hide", "remove"]) != -1) {
            new c(e).hide(a(this));
            return a(this)
        } else {
            new c(e).show(a(this));
            return a(this)
        }
    }
})(jQuery); 
