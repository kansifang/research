(function(a, c, e) {
    giscloud.Feature = function(g) {
        var f = g;
        if (f) {
            this.id = f.__id;
            this.owner = f.__owner;
            this.layerId = f.__layerId || f.__layer_id;
            this.geometry = f.geometry || null;
            this.bounds = new giscloud.Bounds(f.__xmin, f.__ymin, f.__xmax, f.__ymax);
            this.data = f.data || {}
        } else {
            f = {}
        }
        this.remove = function() {
            return giscloud.features.remove(this.layerId, this.id)
        };
        this.update = function() {
            var h;
            f.layerId = this.layerId;
            f.data = this.data;
            f.geometry = this.geometry;
            h = this.bounds;
            if (h) {
                f.__x_min = (h && h.left);
                f.__y_min = (h && h.bottom);
                f.__x_max = (h && h.right);
                f.__y_max = (h && h.top)
            }
            return giscloud.features.update(f.layerId, this.id, f)
        };
        this.clone = function() {
            return giscloud.features.create(this.layerId, {
                data: f.data,
                geometry: f.geometry
            })
        }
    }
})(window, window.giscloud.exposeJQuery()); 