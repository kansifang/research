 (function(g, e, h, c) {
    var j, f, q, a, m, k = h.uploadUrl,
    o = h.appSite() + "libs/plupload/plupload.flash.swf",
    n = h.appSite() + "libs/plupload/plupload.silverlight.xap";
    giscloud.upload = {
        init: function(r) {
            j = new e.Deferred();
            a = r;
            if (!g.plupload) {
                giscloud.includeJs(h.appSite() + "libs/plupload/plupload.full.js").done(function() {
                    q()
                })
            } else {
                q()
            }
            return j.promise()
        },
        url: function(r) {
            if (r === c) {
                return k
            } else {
                k = r
            }
        },
        instance: function() {
            return f
        }
    };
    q = function() {
        var t, r;
        if (f) {
            f.destroy()
        }
        r = {
            runtimes: "gears,html5,flash,silverlight,html4",
            url: k,
            flash_swf_url: o,
            silverlight_xap_url: n
        };
        if (a) {
            for (t in a) {
                r[t] = a[t]
            }
        }
        f = new plupload.Uploader(r);
        f.bind("Init", m);
        f.init()
    };
    m = function() {
        j.resolve(giscloud.upload)
    }
})(window, window.giscloud.exposeJQuery(), window.giscloud.common()); 

