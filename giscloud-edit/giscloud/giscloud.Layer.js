(function(a, c, e) {
    giscloud.Layer = function() {
        var f = arguments[0];
        c.extend(this, {
            id: f.id,
            name: f.name || null,
            owner: f.owner,
            source: (f.source && JSON.parse(f.source)) || null,
            columns: f.columns || null,
            onscale: f.onscale || null,
            offscale: f.offscale || null,
            label: f.label || null,
            textfield: f.textfield || null,
            styles: (f.styles && JSON.parse(f.styles)) || null,
            alpha: f.alpha || null,
            encoding: f.encoding || null,
            margin: f.margin || null,
            created: (f.created && new Date(f.created * 1000)) || null,
            visible: f.visible || null,
            lock: f.lock || null,
            raster: f.raster || null,
            grp: f.grp || null,
            exportable: f.exportable || null,
            parent: f.parent || null,
            tooltip: f.tooltip || null,
            label_placement: (f.label_placement && JSON.parse(f.label_placement)) || null,
            mapId: f.map_id || null,
            type: f.type || null,
            order: f.order,
            useInfoWindow: f.use_info_window || null,
            modified: (f.modified && new Date(f.modified * 1000)) || null,
            bounds: new giscloud.Bounds(f.x_min, f.y_min, f.x_max, f.y_max)
        });
        this.copyStylesFrom = function(g) {
            var h, j, m, k;
            k = this;
            h = new c.Deferred();
            j = this.styles;
            giscloud.layers.byId(g).done(function(n) {
                m = n.styles;
                k.styles = m;
                h.resolve({
                    newStyles: m,
                    oldStyles: j
                })
            }).fail(function() {
                h.reject()
            });
            return h.promise()
        };
        this.remove = function() {
            return giscloud.layers.remove(this.id)
        };
        this.update = function() {
            var g;
            f.name = this.name || null;
            f.source = (this.source && JSON.stringify(this.source)) || null;
            f.columns = this.columns || null;
            f.onscale = this.onscale || null;
            f.offscale = this.offscale || null;
            f.label = this.label || null;
            f.textfield = this.textfield || null;
            f.alpha = this.alpha || null;
            f.encoding = this.encoding || null;
            f.margin = this.margin || null;
            f.visible = this.visible || null;
            f.lock = this.lock || null;
            f.raster = this.raster || null;
            f.grp = this.grp || null;
            f.exportable = this.exportable || null;
            f.parent = this.parent || null;
            f.tooltip = this.tooltip || null;
            f.label_placement = (this.label_placement && JSON.stringify(this.label_placement)) || null;
            f.styles = (this.styles && JSON.stringify(this.styles)) || null;
            f.mapId = this.map_id || null;
            f.type = this.type || null;
            f.order = this.order || null;
            g = this.bounds;
            f.x_min = (g && g.left);
            f.y_min = (g && g.bottom);
            f.x_max = (g && g.right);
            f.y_max = (g && g.top);
            return giscloud.layers.update(f.id, f)
        };
        this.clone = function() {
            var g = {};
            c.extend(g, f);
            delete g.id;
            return giscloud.layers.create(g)
        };
        this.reset = function() {
            return giscloud.layers.reset(this.mapId, [this.id])
        }
    }
})(window, window.giscloud.exposeJQuery()); 