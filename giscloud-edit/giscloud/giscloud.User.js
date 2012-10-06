(function(h) {
    var a, f, e, g = ["id", "created", "username"],
    c = ["created"],
    j = ["language", {
        field: "firstname",
        alias: "firstName"
    },
    {
        field: "lastname",
        alias: "lastName"
    },
    "email", "info", "phone", "mobile", "company", {
        field: "web",
        alias: "website"
    },
    "roles"];
    giscloud.User = function(n) {
        var o, m, q;
        for (o = 0, m = g.length; o < m; o++) {
            q = g[o];
            this[q.alias || q] = a(q.field || q, n)
        }
        for (o = 0, m = j.length; o < m; o++) {
            q = j[o];
            this[q.alias || q] = f(q.field || q, n)
        }
        for (o = 0, m = c.length; o < m; o++) {
            q = c[o];
            n[q.field || q] = e(n[q.field || q])
        }
    };
    giscloud.User.prototype = {
        update: function() {
            var n, m, q, o;
            o = {};
            for (n = 0, m = j.length; n < m; n++) {
                q = j[n];
                o[q.field || q] = this[q.alias || q]()
            }
            return giscloud.users.update(this.id(), o)
        },
        remove: function() {
            return giscloud.users.remove(this.id())
        }
    };
    e = function(m) {
        var k = new Date(m);
        if (k && !isNaN(k.getTime())) {
            return k
        } else {
            return m
        }
    };
    a = function(m, k) {
        return function() {
            return k[m]
        }
    };
    f = function(n, k, m) {
        return function(o) {
            if (o !== h) {
                k[n] = o;
                return m
            } else {
                return k[n]
            }
        }
    }
} ()); 