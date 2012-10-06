(function (n, g, t, h) {
    var v, k, f, r, q, u, w, a, x, c, y, z = false,
        j = false,
        o = false;
    try {
        o = (n !== n.parent && n.parent.giscloud && n.parent.giscloud.oauth2 && n.name === n.parent.giscloud.oauth2.frameId())
    } catch (A) {}
    if (o) {
        if (document.location.search.indexOf("error=redirect_uri_mismatch") > -1) {
            n.parent.giscloud.oauth2.uriMismatch(document.location)
        } else {
            v = document.location.href.match(/access_token=(\w+)/);
            k = v && v[1];
            n.parent.giscloud.oauth2.setToken(k, document.location)
        }
    } else {
        if (document.location.search.indexOf("error=redirect_uri_mismatch") > -1) {
            n.parent.giscloud.oauth2.uriMismatch(document.location)
        } else {
            f = t.authHost();
            giscloud.oauth2 = {
                token: function (e) {
                    if (e) {
                        k = e;
                        return this
                    } else {
                        return k
                    }
                },
                frameId: function () {
                    return c
                },
                authorize: function (C, E, D) {
                    var B, m, e = t.oid();
                    r = E;
                    if (!z) {
                        giscloud.includeCss(t.apiHost() + "/assets/api/1/auth.css");
                        z = true
                    }
                    if (k === h || k === null) {
                        q = "win_" + e;
                        c = "frame_" + q;
                        m = n.location.protocol + "//" + n.location.hostname + n.location.pathname;
                        u = f + "/oauth/authorize?client_id=" + C + "&redirect_uri=" + m + "?nch=" + Math.random() + "&response_type=token&fr=" + c;
                        B = g('<iframe name="' + c + '" id="' + c + '" style="position:absolute;visibility:hidden;width:1px;height:1px;"></iframe>');
                        if (D !== h) {
                            B.one("load", D)
                        }
                        g("body").append(B);
                        B.attr("src", u + "&authorize=true")
                    }
                    return this
                },
                signIn: function (B) {
                    var e, m;
                    B = B || {};
                    if (typeof B.template === "string") {
                        m = u + "&template=" + B.template
                    } else {
                        m = u
                    }
                    if (typeof B.iframeContainer === "string" && g("#" + B.iframeContainer).length > 0) {
                        x = new g.Deferred();
                        x.then(B.onSuccess, B.onCancel);
                        if (a) {
                            a.destroy()
                        }
                        a = new easyXDM.Rpc({
                            remote: m,
                            container: g("#" + B.iframeContainer)[0],
                            props: B.frameProperties,
                            onReady: B.onReady,
                            channel: c
                        }, {
                            remote: {
                                invalidCredentials: {}
                            },
                            local: {
                                onCancel: function () {
                                    x.reject()
                                },
                                onAuthStart: function () {
                                    g("#" + c).one("load", function () {
                                        if (!k) {
                                            a.invalidCredentials()
                                        } else {
                                            x.resolve()
                                        }
                                    })
                                }
                            }
                        })
                    } else {
                        e = "status=1, toolbar=1,  width=450, height=400";
                        w = n.open(m, q, e)
                    }
                },
                signOut: function (B) {
                    var m, e;
                    m = g("#" + c);
                    e = new g.Deferred();
                    if (typeof B == "function") {
                        e.done(B)
                    }
                    k = null;
                    m.one("load", function () {
                        e.resolve()
                    });
                    m.attr("src", f + "/oauth/sign_out?redirect_uri=" + n.location.href);
                    return e.promise()
                },
                setToken: function (e, m) {
                    k = e;
                    if (w) {
                        w.close();
                        w = null
                    }
                    if (typeof r == "function") {
                        r(k)
                    }
                    if (m) {
                        m.href = f + "/oauth/blank"
                    }
                    this.button(y)
                },
                uriMismatch: function (e) {
                    j = true;
                    if (e) {
                        e.href = f + "/oauth/blank"
                    }
                    if (typeof r == "function") {
                        r()
                    }
                },
                thisIsOauthFrame: function () {
                    return o
                },
                button: function (m, B) {
                    var e, C;
                    y = m;
                    e = g("<div/>", {
                        "class": "gc-auth-button"
                    });
                    if (j) {
                        e.addClass("gc-redirect-uri-mismatch");
                        e.append("This is not a registered<br/>GIS Cloud app.")
                    } else {
                        if (k) {
                            e.addClass("gc-authorized");
                            e.append("You are signed in. <a href='#'>Sign out.</a>");
                            e.click(function (D) {
                                giscloud.oauth2.signOut();
                                D.preventDefault()
                            })
                        } else {
                            e.click(function (D) {
                                giscloud.oauth2.signIn(B);
                                D.preventDefault()
                            })
                        }
                    }
                    if (m) {
                        C = g("#" + m);
                        if (C.length) {
                            C.html("");
                            C.append(e)
                        }
                        return this
                    } else {
                        return e
                    }
                }
            }
        }
    }
})(window, giscloud.exposeJQuery(), giscloud.common());