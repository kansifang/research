(function(c, e, a, f) {
    giscloud.ViewerLayer = function(h) {
        var g, j;
        if (h && h instanceof fnLayer) {
            this.id = parseInt(h.getId().replace(/layer(\d+)/, "$1"), 10);
            j = h.getData();
            this.sourceId = j && j.srcId;
            this.source = j && j.src;
            g = h.getBound();
            this.bounds = g && new giscloud.Bounds(g.xMin, g.yMin, g.xMax, g.yMax);
            this.instance = h
        } else {
            throw "Invalid arguments."
        }
    };
    e.extend(giscloud.ViewerLayer.prototype, {
        visible: function() {
            var g = arguments[0];
            if (e.type(g) == "boolean") {
                if (g) {
                    this.instance.enable()
                } else {
                    this.instance.disable()
                }
                return this
            } else {
                return ! this.instance.isEnabled()
            }
        },
        selectable: function() {
            var g = arguments[0];
            if (e.type(g) == "boolean") {
                this.instance.setSelectable(g);
                return this
            } else {
                return this.instance.getSelectable()
            }
        },
        opacity: function() {
            var g = arguments[0];
            if (e.type(g) == "number") {
                this.instance.setAlpha(g);
                return this
            } else {
                return this.instance.getAlpha()
            }
        }
    })
})(window, giscloud.exposeJQuery(), giscloud.common()); 
