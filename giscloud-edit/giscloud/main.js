/*
 * GIS Cloud JavaScript API
 *
 * web: http://www.giscloud.com/
 * dev: http://dev.giscloud.com/
 *
 * copyright GIS Cloud ltd. 2011.
 *
 *
 * Included in this lib are also:
 *     json2 - http://json.org
 *     jQuery 1.5.1 - http://jquery.com
 *     jstree 1.0 rc3 - http://jstree.com
 *     easyXDM - http://easyxdm.net
 */

giscloud_config = {
    restHost: function () {
        return "https://api.giscloud.com";
    },
    apiHost: function () {
        if (document.location.protocol === "https:") return "https://api.giscloud.com";
        else
        return "http://api.giscloud.com";
    },
    apiHostname: function () {
        return "api.giscloud.com";
    },
    authHost: function () {
        return "https://www.giscloud.com";
    },
    liveSite: function () {
        return "http://www.giscloud.com/";
    },
    appSite: function () {
        return "http://www.giscloud.com/";
    },
    tileSite: function () {
        return "http://cft1.giscloud.com/";
    },
    leafletScript: function () {
        return "leaflet.js";
    },
    nch: "5554b431348e524ea58c5990e2e3af63fc3d1b76"
};
if (!this.JSON) {
    this.JSON = {}
}

(function () {
    function f(n) {
        return n < 10 ? "0" + n : n
    }
    if (typeof Date.prototype.toJSON !== "function") {
        Date.prototype.toJSON = function (key) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        };
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (key) {
            return this.valueOf()
        }
    }
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap, indent, meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        rep;

    function quote(string) {
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + string + '"'
    }

    function str(key, holder) {
        var i, k, v, length, mind = gap,
            partial, value = holder[key];
        if (value && typeof value === "object" && typeof value.toJSON === "function") {
            value = value.toJSON(key)
        }
        if (typeof rep === "function") {
            value = rep.call(holder, key, value)
        }
        switch (typeof value) {
        case "string":
            return quote(value);
        case "number":
            return isFinite(value) ? String(value) : "null";
        case "boolean":
        case "null":
            return String(value);
        case "object":
            if (!value) {
                return "null"
            }
            gap += indent;
            partial = [];
            if (Object.prototype.toString.apply(value) === "[object Array]") {
                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || "null"
                }
                v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                gap = mind;
                return v
            }
            if (rep && typeof rep === "object") {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === "string") {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ": " : ":") + v)
                        }
                    }
                }
            } else {
                for (k in value) {
                    if (Object.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ": " : ":") + v)
                        }
                    }
                }
            }
            v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
            gap = mind;
            return v
        }
    }
    if (typeof JSON.stringify !== "function") {
        JSON.stringify = function (value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else {
                if (typeof space === "string") {
                    indent = space
                }
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {
                "": value
            })
        }
    }
    if (typeof JSON.parse !== "function") {
        JSON.parse = function (text, reviver) {
            var j;

            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({
                    "": j
                }, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    }
}());

(function (a) {
    var c, f, e;
    c = ["assert", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "time", "timeEnd", "trace", "warn"];
    f = function () {};
    do {
        e = c.pop();
        if (!a[e]) {
            a[e] = f
        }
    } while (c.length > 0);
    window.console = a
}(window.console || {}));

if (typeof deconcept == "undefined") {
    var deconcept = new Object()
}
if (typeof deconcept.util == "undefined") {
    deconcept.util = new Object()
}
if (typeof deconcept.SWFObjectUtil == "undefined") {
    deconcept.SWFObjectUtil = new Object()
}
deconcept.SWFObject = function (t, e, u, g, n, o, k, j, f, r) {
    if (!document.getElementById) {
        return
    }
    this.DETECT_KEY = r ? r : "detectflash";
    this.skipDetect = deconcept.util.getRequestParameter(this.DETECT_KEY);
    this.params = new Object();
    this.variables = new Object();
    this.attributes = new Array();
    if (t) {
        this.setAttribute("swf", t)
    }
    if (e) {
        this.setAttribute("id", e)
    }
    if (u) {
        this.setAttribute("width", u)
    }
    if (g) {
        this.setAttribute("height", g)
    }
    if (n) {
        this.setAttribute("version", new deconcept.PlayerVersion(n.toString().split(".")))
    }
    this.installedVer = deconcept.SWFObjectUtil.getPlayerVersion();
    if (!window.opera && document.all && this.installedVer.major > 7) {
        deconcept.SWFObject.doPrepUnload = true
    }
    if (o) {
        this.addParam("bgcolor", o)
    }
    var a = k ? k : "high";
    this.addParam("quality", a);
    this.setAttribute("useExpressInstall", false);
    this.setAttribute("doExpressInstall", false);
    var m = (j) ? j : window.location;
    this.setAttribute("xiRedirectUrl", m);
    this.setAttribute("redirectUrl", "");
    if (f) {
        this.setAttribute("redirectUrl", f)
    }
};
deconcept.SWFObject.prototype = {
    useExpressInstall: function (a) {
        this.xiSWFPath = !a ? "expressinstall.swf" : a;
        this.setAttribute("useExpressInstall", true)
    },
    setAttribute: function (a, c) {
        this.attributes[a] = c
    },
    getAttribute: function (a) {
        return this.attributes[a]
    },
    addParam: function (c, a) {
        this.params[c] = a
    },
    getParams: function () {
        return this.params
    },
    addVariable: function (c, a) {
        this.variables[c] = a
    },
    getVariable: function (a) {
        return this.variables[a]
    },
    getVariables: function () {
        return this.variables
    },
    getVariablePairs: function () {
        var e = new Array();
        var c;
        var a = this.getVariables();
        for (c in a) {
            e[e.length] = c + "=" + a[c]
        }
        return e
    },
    getSWFHTML: function () {
        var c = "";
        if (navigator.plugins && navigator.mimeTypes && navigator.mimeTypes.length) {
            if (this.getAttribute("doExpressInstall")) {
                this.addVariable("MMplayerType", "PlugIn");
                this.setAttribute("swf", this.xiSWFPath)
            }
            c = '<embed type="application/x-shockwave-flash" src="' + this.getAttribute("swf") + '" width="' + this.getAttribute("width") + '" height="' + this.getAttribute("height") + '" style="' + this.getAttribute("style") + '"';
            c += ' id="' + this.getAttribute("id") + '" name="' + this.getAttribute("id") + '" ';
            var h = this.getParams();
            for (var g in h) {
                c += [g] + '="' + h[g] + '" '
            }
            var f = this.getVariablePairs().join("&");
            if (f.length > 0) {
                c += 'flashvars="' + f + '"'
            }
            c += "/>"
        } else {
            if (this.getAttribute("doExpressInstall")) {
                this.addVariable("MMplayerType", "ActiveX");
                this.setAttribute("swf", this.xiSWFPath)
            }
            c = '<object id="' + this.getAttribute("id") + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + this.getAttribute("width") + '" height="' + this.getAttribute("height") + '" style="' + this.getAttribute("style") + '">';
            c += '<param name="movie" value="' + this.getAttribute("swf") + '" />';
            var e = this.getParams();
            for (var g in e) {
                c += '<param name="' + g + '" value="' + e[g] + '" />'
            }
            var a = this.getVariablePairs().join("&");
            if (a.length > 0) {
                c += '<param name="flashvars" value="' + a + '" />'
            }
            c += "</object>"
        }
        return c
    },
    write: function (c) {
        if (this.getAttribute("useExpressInstall")) {
            var a = new deconcept.PlayerVersion([6, 0, 65]);
            if (this.installedVer.versionIsValid(a) && !this.installedVer.versionIsValid(this.getAttribute("version"))) {
                this.setAttribute("doExpressInstall", true);
                this.addVariable("MMredirectURL", escape(this.getAttribute("xiRedirectUrl")));
                document.title = document.title.slice(0, 47) + " - Flash Player Installation";
                this.addVariable("MMdoctitle", document.title)
            }
        }
        if (this.skipDetect || this.getAttribute("doExpressInstall") || this.installedVer.versionIsValid(this.getAttribute("version"))) {
            var e = (typeof c == "string") ? document.getElementById(c) : c;
            e.innerHTML = this.getSWFHTML();
            return true
        } else {
            if (this.getAttribute("redirectUrl") != "") {
                document.location.replace(this.getAttribute("redirectUrl"))
            }
        }
        return false
    }
};
deconcept.SWFObjectUtil.getPlayerVersion = function () {
    var h = new deconcept.PlayerVersion([0, 0, 0]);
    if (navigator.plugins && navigator.mimeTypes.length) {
        var a = navigator.plugins["Shockwave Flash"];
        if (a && a.description) {
            h = new deconcept.PlayerVersion(a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, ".").split("."))
        }
    } else {
        if (navigator.userAgent && navigator.userAgent.indexOf("Windows CE") >= 0) {
            var c = 1;
            var f = 3;
            while (c) {
                try {
                    f++;
                    c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + f);
                    h = new deconcept.PlayerVersion([f, 0, 0])
                } catch (g) {
                    c = null
                }
            }
        } else {
            try {
                var c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.9")
            } catch (g) {
                try {
                    var c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
                } catch (g) {
                    try {
                        var c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                        h = new deconcept.PlayerVersion([6, 0, 21]);
                        c.AllowScriptAccess = "always"
                    } catch (g) {
                        if (h.major == 6) {
                            return h
                        }
                    }
                    try {
                        c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                    } catch (g) {}
                }
            }
            if (c != null) {
                h = new deconcept.PlayerVersion(c.GetVariable("$version").split(" ")[1].split(","))
            }
        }
    }
    return h
};
deconcept.PlayerVersion = function (a) {
    this.major = a[0] != null ? parseInt(a[0]) : 0;
    this.minor = a[1] != null ? parseInt(a[1]) : 0;
    this.rev = a[2] != null ? parseInt(a[2]) : 0
};
deconcept.PlayerVersion.prototype.versionIsValid = function (a) {
    if (this.major < a.major) {
        return false
    }
    if (this.major > a.major) {
        return true
    }
    if (this.minor < a.minor) {
        return false
    }
    if (this.minor > a.minor) {
        return true
    }
    if (this.rev < a.rev) {
        return false
    }
    return true
};
deconcept.util = {
    getRequestParameter: function (e) {
        var f = document.location.search || document.location.hash;
        if (e == null) {
            return f
        }
        if (f) {
            var c = f.substring(1).split("&");
            for (var a = 0; a < c.length; a++) {
                if (c[a].substring(0, c[a].indexOf("=")) == e) {
                    return c[a].substring((c[a].indexOf("=") + 1))
                }
            }
        }
        return ""
    }
};
deconcept.SWFObjectUtil.cleanupSWFs = function () {
    var c = document.getElementsByTagName("OBJECT");
    for (var e = c.length - 1; e >= 0; e--) {
        c[e].style.display = "none";
        for (var a in c[e]) {
            if (typeof c[e][a] == "function") {
                c[e][a] = function () {}
            }
        }
    }
};
if (deconcept.SWFObject.doPrepUnload) {
    if (!deconcept.unloadSet) {
        deconcept.SWFObjectUtil.prepUnload = function () {
            __flash_unloadHandler = function () {};
            __flash_savedUnloadHandler = function () {};
            window.attachEvent("onunload", deconcept.SWFObjectUtil.cleanupSWFs)
        };
        window.attachEvent("onbeforeunload", deconcept.SWFObjectUtil.prepUnload);
        deconcept.unloadSet = true
    }
}
if (!document.getElementById && document.all) {
    document.getElementById = function (a) {
        return document.all[a]
    }
}
var getQueryParamValue = deconcept.util.getRequestParameter;
var FlashObject = deconcept.SWFObject;
var SWFObject = deconcept.SWFObject;
if (!window.flashnavigator) {
    window.flashnavigator = new Object();
    flashnavigator.requiredFlashVersion = 8;
    flashnavigator.__flashInstalled = deconcept.SWFObjectUtil.getPlayerVersion().major >= flashnavigator.requiredFlashVersion;
    flashnavigator.__flashnavigator_uid = 0;
    flashnavigator.__container_num = 0;
    flashnavigator.__initialized = false;
    flashnavigator._containers = new Array();
    flashnavigator._plugins = new Array();
    flashnavigator.__event_funcs = new Array();
    flashnavigator.__event_funcs_c = 0;
    if (window.fno && fno.liveSite) {
        flashnavigator.server = fno.liveSite + "assets/fnViewer/"
    } else {
        flashnavigator.server = giscloud_config.liveSite() + "assets/fnViewer/"
    }
    flashnavigator.setOptions = function (a) {
        flashnavigator.extraOptions = a
    };
    flashnavigator.include = function (p0, notPlugin) {
        var p = p0.split(",");
        for (var i = 0; i < p.length; i++) {
            if (!notPlugin) {
                var flag = 1;
                for (var k = 0; k < flashnavigator._plugins.length; k++) {
                    if (flashnavigator._plugins[k] == p[i]) {
                        flag = 0
                    }
                }
                if (flag) {
                    flashnavigator._plugins.push(p[i])
                }
            }
            p[i] = p[i].split("?")[0];
            if (p[i] == "viewer" || p[i] == "import" || p[i] == "__load" || p[i] == "isInitialized") {
                alert("Fatal error - import not allowed: " + p[i]);
                return
            }
            var p1 = p[i].substr(0, 1).toUpperCase() + p[i].substr(1);
            if (notPlugin) {
                flashnavigator[p[i]] = function (flash, d) {
                    this.flash = flash;
                    this.refId = d
                }
            } else {
                flashnavigator[p[i]] = function (p) {
                    this.setParent(p)
                }
            }
            flashnavigator[p[i]].prototype.name = p[i];
            eval("fn" + p1 + " = flashnavigator[p[i]];");
            flashnavigator[p[i]].prototype.addEventListener = function (evt, func) {
                var eid = this.name + "_" + evt + "_" + flashnavigator.__event_funcs_c;
                flashnavigator.__event_funcs_c++;
                flashnavigator.__event_funcs[eid] = func;
                this.flash._addEventListenerInternal(evt, "flashnavigator.__event_funcs." + eid, this.name)
            };
            flashnavigator[p[i]].prototype.removeEventListener = function (evt, func) {
                var eid = this.name + "_" + evt + "_";
                for (i = 0; i < flashnavigator.__event_funcs_c; i++) {
                    if (flashnavigator.__event_funcs[eid + i] && (!func || flashnavigator.__event_funcs[eid + i] == func)) {
                        flashnavigator.__event_funcs[eid + i] = null;
                        this.flash._removeEventListenerInternal(evt, eid + i, this.name)
                    }
                }
            };
            flashnavigator[p[i]].prototype.setParent = function (p) {
                if (p) {
                    this.flash = p.flash;
                    p._children.push(this)
                }
            }
        }
    };
    flashnavigator.container = function (j, f) {
        if (!flashnavigator.__flashInstalled) {
            return
        }
        if (!window._nch) {
            _nch = "5554b431348e524ea58c5990e2e3af63fc3d1b76"
        }
        var h = document.getElementById(j);
        h.innerHTML = "";
        var c = "flashnavigator_cont_" + flashnavigator.__flashnavigator_uid;
        flashnavigator.__flashnavigator_uid++;
        flashnavigator.__container_num++;
        var g = new SWFObject(flashnavigator.server + "preloader.swf?nch=" + _nch, c, "100%", "100%", flashnavigator.requiredFlashVersion, "#ffffff");
        g.addVariable("path", flashnavigator.server);
        g.addVariable("_js", 1);
        g.addVariable("_uid", j);
        g.addVariable("_nch", _nch);
        _children = new Array();
        g.addParam("allowScriptAccess", "always");
        if (f && f.wmode) {
            g.addParam("wmode", f.wmode)
        }
        g.addVariable("_plugins", flashnavigator._plugins.join());
        g.write(j);
        var a = document.getElementById(c);
        if (f && f.onLoad) {
            h.onLoadFunc = f.onLoad
        }
        h.flash = a;
        this._containers[j] = new Object();
        this._containers[j].flash = a;
        this._containers[j]._children = _children;
        if (this._children) {
            for (var e = 0; e < _children.length; e++) {
                _children[e].flash = a
            }
        }
    };
    flashnavigator.isInitialized = function () {
        return this.__initialized
    };
    flashnavigator.__load = function (a) {
        flashnavigator.__container_num--;
        if (a && document.getElementById(a) && document.getElementById(a).onLoadFunc) {
            document.getElementById(a).onLoadFunc(document.getElementById(a).id)
        }
        if (flashnavigator.__container_num == 0) {
            flashnavigator.__initialized = true;
            if (flashnavigator.initialize) {
                flashnavigator.initialize()
            }
        }
    };
    var fnViewer = function (a) {
        this.flash = flashnavigator._containers[a].flash;
        this._children = flashnavigator._containers[a]._children
    };
    flashnavigator.viewer = fnViewer;
    fnInclude = flashnavigator.include;
    fnViewer.prototype.getContainer = function () {
        return document.getElementById(this.objID)
    };
    fnViewer.prototype.addEventListener = function (a, c) {
        flashnavigator.__event_funcs["e_" + a + "_" + flashnavigator.__event_funcs_c] = c;
        this.flash._addEventListenerInternal(a, "flashnavigator.__event_funcs.e_" + a + "_" + flashnavigator.__event_funcs_c);
        flashnavigator.__event_funcs_c++
    };
    fnViewer.prototype.removeEventListener = function (a, c) {
        for (i = 0; i < flashnavigator.__event_funcs_c; i++) {
            if (flashnavigator.__event_funcs["e_" + a + "_" + i] && (!c || flashnavigator.__event_funcs["e_" + a + "_" + i] == c)) {
                flashnavigator.__event_funcs["e_" + a + "_" + i] = null;
                this.flash._removeEventListenerInternal(a, "flashnavigator.__event_funcs.e_" + a + "_" + i)
            }
        }
    };
    var __fnArgsArray = Array();

    function __fnCreateArgsString(a) {
        if (a < 1) {
            return ""
        }
        if (__fnArgsArray[a]) {
            return __fnArgsArray[a]
        }
        var c = "arguments[0]";
        for (i = 1; i < a; i++) {
            c += ",arguments[" + i + "]"
        }
        __fnArgsArray[a] = c;
        return c
    }

    function __fnAddClass(a) {
        flashnavigator.include(a, true)
    }

    function __fnExpandClass(obj, func, returnCast, prefixData) {
        var o;
        var fname_flash = func;
        var flash_func = 3;
        if (obj && obj != "null") {
            fname_flash = obj + "___" + func
        }
        if (obj && obj != null && obj != "null") {
            o = flashnavigator[obj].prototype
        } else {
            o = fnViewer.prototype
        }
        if (!o[func]) {
            if (returnCast) {
                eval("o[func] = function() { var r = this.flash." + fname_flash + "(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7],arguments[8]); if (r != null) return new " + returnCast + "(this.flash,r); return null; } ")
            } else {
                if (prefixData) {
                    eval("o[func] = function() { return this.flash." + fname_flash + "(this.refId,arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7],arguments[8]) } ")
                } else {
                    eval("o[func] = function() { return this.flash." + fname_flash + "(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7],arguments[8]) } ")
                }
            }
        }
    }
}

function __fnJsInterface(func, args) {
    return eval(func + "(" + args + ")")
}

function GCMap(c) {
    c.obj = this;
    var a = "tooltip,marker,canvas";
    if (c.slider) {
        a = a + ",slider"
    }
    if (c.scalebar) {
        a = a + ",scalebar"
    }
    flashnavigator.include(a);
    flashnavigator.container(c.container, {
        onLoad: function (e) {
            fn = new fnViewer(e);
            fn.src(1);
            var f = "http://www.giscloud.com/";
            if (f.indexOf("?php") > -1) {
                f = "http:///"
            }
            fn.load(f + "maps/map" + c.map + ".xml");
            c.viewer = fn;
            c.obj.viewer = fn;
            canvas = new fnCanvas(fn);
            c.canvas = canvas;
            fn.addEventListener("load", function () {
                if (c.onload) {
                    c.onload()
                }
            })
        }
    })
}

function FnEmbedMAP(a) {
    return GCMap(a)
}
fnCanvas2 = function (h) {
    var a = [],
        g = 0;

    function c(m) {
        return typeof m == "string" && parseInt(m.replace(/s(\d+)/, "$1"), 10)
    }

    function f(m) {
        return "s" + m
    }

    function e(m) {
        if (m != null) {
            return giscloud.Color.fromHex(m).hex()
        }
        return null
    }

    function j(q, n, o) {
		// 暴露 Leaflet
        var m = n.exposeLeaflet();
        this.id = q;
        this.color = e(o.color) || "#ff0088";
        this.alpha = (o.alpha != null) ? o.alpha : 1;
        this.width = (o.width != null) ? o.width : 1;
        this.cursor = null;
        this.lines = [];
        this.currentLine = function () {
            return this.lines[this.lines.length - 1]
        };
        this.addLine = function () {
            var r = new L.Polyline([this.cursor], {
                color: this.color,
                opacity: this.alpha,
                width: this.width
            });
            this.lines.push(r);
            m.addLayer(r)
        };
        this.extendLine = function () {
            var r = this.currentLine();
            if (r) {
                r.addLatLng(this.cursor)
            }
        };
        this.clear = function () {
            var t, r;
            for (t = 0, r = this.lines.length; t < r; t++) {
                m.removeLayer(this.lines[t]);
                this.lines[t] = null
            }
            this.lines = [];
            this.cursor = null
        }
    }

    function k(q, n) {
        var r, m, o = n && n.points && n.points.length;
        if (q != null && o) {
            m = n.points[0];
			// 转Leaflet坐标
            q.cursor = h.toLeafletCoords(m.x, m.y);
            q.addLine();
            for (r = 1; r < o; r++) {
                m = n.points[r];
                q.cursor = h.toLeafletCoords(m.x, m.y);
                q.extendLine()
            }
        }
    }
    this.fn = h;
    this.viewer = h.exposeLeaflet();
    this.addEventListener = function () {};
    this.newShape = function (m) {
        var n = f(g);
        a.push(new j(n, this.fn, m));
        g++;
        return n
    };
    this.moveTo = function (q, m, o) {
        var n = a[c(q)];
        if (n) {
            n.cursor = this.fn.toLeafletCoords(m, o);
            n.addLine();
            return q
        }
    };
    this.lineTo = function (q, m, o) {
        var n = a[c(q)];
        if (n) {
            n.cursor = this.fn.toLeafletCoords(m, o);
            n.extendLine();
            return q
        }
    };
    this.remove = function (o) {
        var n = c(o),
            m = a[n];
        if (m) {
            m.clear();
            a[n] = null;
            return o
        }
    };
    this.removeAll = function () {
        var n, m;
        for (n = 0, m = a.length; n < m; n++) {
            this.remove(f(n))
        }
    };
    this.deserializeGeometryOpenGISSimple = function (n) {
        var q = n && n.geom,
            o = giscloud.geometry.fromOGC(q),
            m, r;
        if (o instanceof giscloud.geometry.Line) {
            r = this.newShape(n);
            m = a[c(r)];
            k(m, o);
            return r
        }
    }
};
fnMarker2 = function (h) {
    var e = giscloud.exposeJQuery(),
        m = {},
        k = {},
        a = {},
        n = [],
        g = 0;
    this.fn = h;
    this.viewer = h.exposeLeaflet();
    this.markers = [];

    function j(o) {
        var q = giscloud.md5(o);
        if (!m[q]) {
            m[q] = {
                loading: new e.Deferred(),
                Icon: null
            };
            e.loadImage(o).done(function (t) {
                var r = t.width,
                    u = t.height;
                m[q].Icon = L.Icon.Label.extend({
                    options: {
                        iconUrl: o,
                        shadowUrl: null,
                        iconSize: new L.Point(r, u),
                        iconAnchor: new L.Point(r / 2, u / 2),
                        labelAnchor: new L.Point(Math.max(r, u) * 1.5 + 5, 0),
                        wrapperAnchor: new L.Point(r / 2, u)
                    }
                });
                m[q].loading.resolve(m[q])
            })
        }
        return m[q]
    }

    function f(r, o, q) {
        if (o && e.isFunction(o.on) && q && q.name && e.isFunction(q.handler)) {
            if (q.name === "poi_click") {
                o.on("click", e.proxy(function () {
                    q.handler.call(this, {
                        id: r,
                        data: a[r],
                        type: "poi_click"
                    })
                }))
            } else {
                o.on(q.name, e.proxy(function () {
                    var u = [{
                        id: r,
                        data: a[r],
                        type: q.name
                    }],
                        t = Array.prototype.slice.call(arguments);
                    q.handler.apply(this, u.concat(t))
                }))
            }
        }
    }

    function c(o) {
        return typeof o == "string" && parseInt(o.replace(/m(\d+)/, "$1"), 10)
    }
    this.add = function (C, z, t, B, w, A, v) {
        var r, o, u, q;
        if (C.x && C.y) {
            A = C.icon;
            B = C.title;
            w = C.content;
            t = C.color;
            v = C.open;
            z = C.y;
            C = C.x
        }
        r = this.fn.toLeafletCoords(C, z);
        o = new L.Popup({
            className: "gc-info-popup",
            minWidth: 180
        });
        o._fnMarker = {
            x: C,
            y: z,
            color: t,
            title: B,
            content: w,
            icon: A,
            open: v
        };
        u = v ? '<p class="gc-info-popup-title">' + B + '</p><div class="gc-info-popup-content">' + w + "</div>" : '<p class="gc-info-popup-title">' + B + "</p>";
        o.setLatLng(r);
        o.setContent(u);
        q = "m" + g;
        g++;
        this.markers.push(o);
        this.viewer.addLayer(o);
        e(o._wrapper).mousemove(function (x) {
            x.stopPropagation()
        });
        e(o._closeButton).bind("click mousedown mouseup mousemove", function (x) {
            x.stopPropagation()
        });
        return q
    };
    this.setTitle = function (o, q) {};
    this.remove = function (r) {
        var q = c(r),
            o = this.markers[q];
        if (o) {
            this.viewer.removeLayer(o);
            this.markers[q] = null
        }
    };
    this.removeAll = function () {
        e.each(this.markers, e.proxy(function (q, o) {
            if (o instanceof L.Marker) {
                this.removePoi("m" + q)
            } else {
                if (o instanceof L.Popup) {
                    this.remove("m" + q)
                }
            }
        }, this))
    };
    this.closeAll = function () {
        e.each(this.markers, e.proxy(function (q, o) {
            if (o instanceof L.Popup) {
                this.remove("m" + q)
            }
        }, this))
    };
    this.loadPoi = function (A, z, o, t, w) {
        var q, v, r, u;
        v = this;
        q = new e.Deferred();
        r = "m" + g;
        k[r] = new e.Deferred();
        a[r] = t;
        g++;
        u = j(o);
        u.loading.done(function (B) {
            var E, x, C, y, D;
            E = v.fn.toLeafletCoords(A, z);
            x = new L.Marker(E, {
                icon: new B.Icon()
            });
            y = n.length;
            if (y) {
                for (C = 0; C < y; C++) {
                    D = n[C];
                    if (D) {
                        f.call(v, r, x, D)
                    }
                }
            }
            v.markers.push(x);
            v.viewer.addLayer(x);
            k[r].resolve(x)
        });
        return r
    };
    this.removePoi = function (r) {
        var q, o;
        o = k[r];
        if (o) {
            q = this;
            o.done(function () {
                q.remove(r);
                delete k[r];
                delete a[r]
            })
        }
    };
    this.move = function (u, o, v, q) {
        var t, r;
        r = k[u];
        if (r) {
            t = this;
            r.done(function (w) {
                var x;
                if (w && w.setLatLng) {
                    x = t.fn.toLeafletCoords(o, v);
                    w.setLatLng(x);
                    w.setRotation(q)
                }
            })
        }
    };
    this.move2 = this.move;
    this.attachLabel = function (r) {
        var q = k[r.marker];
        if (q) {
            q.done(function (o) {
                o.setLabelText(r.data)
            })
        }
    };
    this.addEventListener = function (r, u) {
        var t, q, o, v = {
            name: r,
            handler: u
        };
        for (t = 0, q = this.markers.length; t < q; t++) {
            o = this.markers[t];
            if (o) {
                f.call(this, "m" + t, o, v)
            }
        }
        n.push(v)
    }
};
fnTooltip2 = function (a) {
    var c = giscloud.exposeJQuery();
    this.fn = a;
    this.viewer = a.exposeLeaflet();
    c(document).mousemove(function (f) {
        c("#simpleTooltip").offset({
            left: f.pageX + 15,
            top: f.pageY - 5
        })
    });
    this.show = function (e) {
        console.log(e, c("#simpleTooltip"));
        c("#simpleTooltip").html(e).show()
    };
    this.hide = function () {
        c("#simpleTooltip").hide()
    }
};
fnAgent2 = function (a) {
    this.setData = function (c) {};
    this.setZoom = function (c) {}
};
(function (o, f, t, j) {
    var g, e, n, m, h, r, w, c, v, u, x;
    e = 0;
    x = false;
    u = 1;
    var k = "http:///";
    if (t) {
        k = t.appSite()
    }
    var z = k;

    function y() {
        if (e) {
            return
        }
        n = giscloud.exposeLeaflet();
        e = 1;
        fnLayer2 = n.TileLayer.extend({
            getId: function () {
                return this.id
            },
            disable: function () {
                this.visible = false;
                this.setVisible(false)
            },
            enable: function () {
                this.visible = true;
                this.setVisible(true)
            },
            getAlpha: function () {
                return Math.round(this.options.opacity * 100)
            },
            setAlpha: function (G) {
                this.setOpacity(G / 100)
            },
            getCurrentLevel: function () {
                return g.map._zoom
            },
            setSelectable: function (G) {
                this._selectable = G;
                return 0
            },
            getSelectable: function (G) {
                return this._selectable
            },
            getBound: function (G) {
                return {
                    xMin: this.source.xmin,
                    xMax: this.source.xmax,
                    yMin: this.source.ymin,
                    yMax: this.source.ymax
                }
            },
            getData: function (G) {
                return this.source
            },
            _loadTile: function (J, H, I) {
                var G = (1 << I);
                this.nxmin = (this.source.xmin - m.xmin) / m.max * G;
                this.tnxmin = Math.floor(this.nxmin);
                this.nxmax = (this.source.xmax - m.xmin) / m.max * G;
                this.tnxmax = Math.floor(this.nxmax);
                this.nymin = (m.ymax - this.source.ymax) / m.max * G;
                this.tnymin = Math.floor(this.nymin);
                this.nymax = (m.ymax - this.source.ymin) / m.max * G;
                this.tnymax = Math.floor(this.nymax);
                if (H.x >= this.tnxmin && H.x <= this.tnxmax && H.y >= this.tnymin && H.y <= this.tnymax) {
                    J._layer = this;
                    J.onload = this._tileOnLoad;
                    J.onerror = this._tileOnError;
                    this._processTile(J, H, I)
                } else {
                    this._tilesToLoad--
                }
            },
            _processTile: function (I, G, H) {
                I.src = this.getTileUrl(G, H)
            },
            redraw: function () {
                this.gcmap.redraw()
            },
            getRules: function () {
                return this.features
            },
            setRule: function (G, H) {
                this.features[G] = H
            },
            resetRules: function () {
                this.features = [];
                for (var H = 0; H < this.features_original.length; H++) {
                    var I = {};
                    for (var G in this.features_original[H]) {
                        I[G] = this.features_original[H][G]
                    }
                    this.features[H] = I
                }
            },
            setDynamicMode: function (G) {
                this.gcmap.url = this.gcmap.url_prefix + "/dyn," + G + "/"
            },
            setStyleOverride: function (G) {
                this.gcmap.overrideFunc = G
            },
            reload: function () {
                this.gcmap.reload()
            }
        });
        fnTileLayer = fnLayer2.extend({
            initialize: function (G) {
                this.visible = G.visible;
                this.id = G.id;
                this.source = G.source;
                this.gcmap = new giscloud.Html5Map(G);
                this.gcmap.setBounds(m);
                this.gcmap.selectablePoly(0);
                this.gcmap.feature_filter = null;
                var H = this;
                this.gcmap.getCanvases = function () {
                    return H._tiles
                };
                this.gcmap.getFeatureClass = function (I) {
                    return H.features[I]
                };
                this.gcmap.getFeatures = function () {
                    return H.features
                };
                this.gcmap.getSelectable = function () {
                    return H.getSelectable()
                };
                this.on("stoploadingtiles", function () {
                    H.gcmap.resetLoader()
                });
                this.on("tileunload", function (I) {
                    delete I.tile.data;
                    delete I.tile.lista;
                    delete I.tile.styles;
                    delete I.tile.fields
                });
                G.noWrap = true;
                n.Util.setOptions(this, G)
            },
            _createTileProto: function () {
                this._canvasProto = n.DomUtil.create("canvas", "leaflet-tile leaflet-tile-loaded");
                var G = this.options.tileSize;
                this._canvasProto.width = G;
                this._canvasProto.height = G
            },
            _createTile: function () {
                return this._canvasProto.cloneNode(false)
            },
            _processTile: function (I, G, H) {
                I._layer = this;
                I.ontileload = function () {
                    this._layer._tileOnLoad.call(this);
                    if (this._layer._oldContainer) {
                        D(this)
                    }
                };
                if (this.getVisible()) {
                    this.gcmap.loadTile(I, G, H)
                }
            },
            redraw: function () {
                this.gcmap.redraw()
            },
            setFeatureFilter: function (G) {
                this.gcmap.feature_filter = G
            },
            getFeature: function (G) {
                return this.gcmap.getFeature(G)
            }
        });

        function D(R) {
            var U = R._leaflet_pos.x;
            var T = R._leaflet_pos.y;
            var N = g.map._animateScale;
            if (!N) {
                return
            }
            var J = Math.round(g.map._animateOrigin.x);
            var H = Math.round(g.map._animateOrigin.y);
            var S = R._layer._oldContainer.childNodes;
            for (var P = 0, Q = S.length; P < Q; P++) {
                if (!S[P]._drawn) {
                    continue
                }
                var O = (S[P]._leaflet_pos.x - J - S[P]._offset) * N + J;
                var M = (S[P]._leaflet_pos.y - H - S[P]._offset) * N + H;
                var V = S[P].width * N;
                var K = {
                    xmin: U,
                    ymin: T,
                    xmax: U + R.width - R._offset * 2,
                    ymax: T + R.height - R._offset * 2
                };
                var I = {
                    xmin: O,
                    ymin: M,
                    xmax: O + V,
                    ymax: M + V
                };
                if (C(K, I)) {
                    rect = {
                        xmin: B(K.xmin, I.xmin),
                        ymin: B(K.ymin, I.ymin),
                        xmax: F(K.xmax, I.xmax),
                        ymax: F(K.ymax, I.ymax)
                    };
                    var G = {
                        x: Math.floor((rect.xmin - O) / N),
                        y: Math.floor((rect.ymin - M) / N),
                        w: Math.ceil((rect.xmax - rect.xmin) / N),
                        h: Math.ceil((rect.ymax - rect.ymin) / N),
                        c: S[P]
                    };
                    var W = G.c.getContext("2d");
                    W.clearRect(G.x, G.y, G.w, G.h)
                }
            }
        }

        function C(H, G) {
            if (H.xmax < G.xmin || H.xmin > G.xmax || H.ymax < G.ymin || H.ymin > G.ymax) {
                return false
            }
            return true
        }

        function B(H, G) {
            if (H > G) {
                return H
            }
            return G
        }

        function F(H, G) {
            if (H < G) {
                return H
            }
            return G
        }
        fnRasterLayer = fnLayer2.extend({
            _processTile: function (M, I, K) {
                var J = false;
                var O, H, G, N;
                O = N = "0px";
                G = H = "256px";
                if (I.x == this.tnxmin) {
                    O = Math.round((this.nxmin - this.tnxmin) * 256) + "px";
                    J = true
                }
                if (I.y == this.tnymin) {
                    N = Math.round((this.nymin - this.tnymin) * 256) + "px";
                    J = true
                }
                if (I.x == this.tnxmax) {
                    H = Math.round((this.nxmax - this.tnxmax) * 256) + "px";
                    J = true
                }
                if (I.y == this.tnymax) {
                    G = Math.round((this.nymax - this.tnymax) * 256) + "px";
                    J = true
                }
                if (J) {
                    M.style.clip = "rect(" + N + "," + H + "," + G + "," + O + ")"
                }
                M.src = this.getTileUrl(I, K)
            }
        });

        function E(M, K, H) {
            var I = "";
            for (var J = H; J > 0; J--) {
                var N = "0";
                var G = 1 << (J - 1);
                if ((M & G) != 0) {
                    N++
                }
                if ((K & G) != 0) {
                    N++;
                    N++
                }
                I += N
            }
            return I
        }
        fnQuadLayer = fnLayer2.extend({
            _processTile: function (K, I, J) {
                var G = this.options.subdomains,
                    H = this.options.subdomains[(I.x + I.y) % G.length];
                K.src = this._url[(I.x + I.y) % this._url.length].replace("{s}", H).replace("{q}", E(I.x, I.y, J))
            }
        });
        fnWmsLayer = fnLayer2.extend({
            _processTile: function (M, I, K) {
                var G = m.max / (1 << K);
                var H = m.xmin + G * I.x;
                var J = m.ymax - G * I.y;
                M.src = this._url[(I.x + I.y) % this._url.length].replace("$x1", H).replace("$y1", J - G).replace("$x2", H + G).replace("$y2", J)
            }
        });
        fnGoogleLayer = fnLayer2.extend({
            includes: n.Mixin.Events,
            initialize: function (G) {
                G.zoomAnimation = false;
                n.Util.setOptions(this, G);
                n.DomUtil.addClass(g.map.attributionControl._container.parentNode, "leaflet-top");
                n.DomUtil.removeClass(g.map.attributionControl._container.parentNode, "leaflet-bottom")
            },
            onAdd: function (H, G) {
                this._map = H;
                this._noScale = true;
                this._insertAtTheBottom = G;
                this._initContainer();
                if (!o.google) {
                    if (!giscloud.fnGoogleLayerLoadCallback) {
                        giscloud.fnGoogleLayers = [];
                        giscloud.fnGoogleLayerLoadCallback = function () {
                            for (var I = 0; I < giscloud.fnGoogleLayers.length; I++) {
                                giscloud.fnGoogleLayers[I].onGoogleReady()
                            }
                            o.setTimeout(function () {
                                delete giscloud.fnGoogleLayerLoadCallback;
                                delete giscloud.fnGoogleLayers
                            }, 1)
                        };
                        giscloud.includeJs("http://maps.googleapis.com/maps/api/js?sensor=false&callback=giscloud.fnGoogleLayerLoadCallback")
                    }
                    giscloud.fnGoogleLayers.push(this)
                } else {
                    this.onGoogleReady()
                }
            },
            onGoogleReady: function () {

                this._initMapObject();
                this._map.on("move", this._update, this);
                this._reset();
                this._update()
            },
            onRemove: function (G) {
                this._container.parentNode.removeChild(this._container);
                this._map.off("move", this._update, this)
            },
            _initContainer: function () {
                var G = this._map.getPanes().tilePane,
                    I = G.firstChild;
                if (!this._container) {
                    this._container = n.DomUtil.create("div", "leaflet-google-layer leaflet-top leaflet-left");
                    this._container.id = "gmaps_" + this.id;
                    var H = this._map.getSize();
                    G.insertBefore(this._container, I);
                    this.setOpacity(this.options.opacity);
                    this._container.style.width = H.x + "px";
                    this._container.style.height = H.y + "px"
                }
            },
            _initMapObject: function () {
                this._google_center = new google.maps.LatLng(0, 0);
                var G = new google.maps.Map(this._container, {
                    center: this._google_center,
                    zoom: 0,
                    mapTypeId: google.maps.MapTypeId[this.options.google_map_type],
                    disableDefaultUI: true,
                    keyboardShortcuts: false,
                    draggable: false,
                    disableDoubleClickZoom: true,
                    scrollwheel: false,
                    streetViewControl: false
                });
                this._google = G;
                this.setVisible(this.options.visible)
            },
            _reset: function (G) {
                this._initContainer()
            },
            _update: function () {
                if (!this.options.visible) {
                    return
                }
                this._resize();
                var G = this._map.getCenter();
                var H = new google.maps.LatLng(G.lat, G.lng);
                var J = {
                    x: -this._container.parentNode.parentNode._leaflet_pos.x,
                    y: -this._container.parentNode.parentNode._leaflet_pos.y
                };
                n.DomUtil.setPosition(this._container, J);
                this._google.setCenter(H);
                var I = this._map.getZoom();
                if (I != this._lastzoom) {
                    this._google.setZoom(I);
                    this._lastzoom = I
                }
            },
            _resize: function () {
                var G = this._map.getSize();
                if (this._container.style.width == G.x && this._container.style.height == G.y) {
                    return
                }
                this._container.style.width = G.x + "px";
                this._container.style.height = G.y + "px";
                google.maps.event.trigger(this._google, "resize")
            },
            _addTile: function () {},
            _addTilesFromCenterOut: function () {}
        });
        if (flashnavigator.ready) {
            flashnavigator.ready()
        }
    }
    fnViewer2 = function (W, Q, D) {
        var O, aa, B;
        O = [];
        layers_feature_filter = [];
        this.disableAnimation = function () {};
        this.setQuality = function () {};
        this.demodifyObjectsColor = function () {};
        this.modifyObject = function (ak, aj, ap, an, am, al) {
            for (var ao in g.map._layers) {
                if (g.map._layers[ao].gcmap) {
                    g.map._layers[ao].gcmap.modifyObject(ak, aj, ap, an, am, al)
                }
            }
        };
        this.disablePanWithMiddleButton = function () {};
        this.enablePanWithMiddleButton = function () {};
        this.enableSelection = function () {
            giscloud.Html5MapSetSelection(true)
        };
        this.disableSelection = function () {
            giscloud.Html5MapSetSelection(false)
        };
        this.fireSelectAreaEvent = function (al, at) {
            var am = (1 << g.map._zoom) * 256;
            var aq = g.map.getPixelBounds();
            var ar = Math.abs(at.x - al.x);
            var an = Math.abs(at.y - al.y);
            if (ar > 10 && an > 10) {
                var ak = m.xmin + m.max * (al.x + g.map._mapPane._leaflet_pos.x + aq.min.x) / am;
                var ap = m.ymax - m.max * (al.y + g.map._mapPane._leaflet_pos.y + aq.min.y) / am;
                var aj = m.xmin + m.max * (at.x + g.map._mapPane._leaflet_pos.x + aq.min.x) / am;
                var ao = m.ymax - m.max * (at.y + g.map._mapPane._leaflet_pos.y + aq.min.y) / am;
                ai("areaselection", {
                    xMin: ak,
                    yMin: ap,
                    xMax: aj,
                    yMax: ao
                })
            }
        };
        this.setTool = function (aj) {
            if (this._currentTool == aj) {
                return
            }
            g.map.boxZoom._onDone = null;
            g.map.boxZoom.force(false);
            if (aj == "SelectAreaTool" || aj == "AreaSelection") {
                g.map.dragging.disable();
                if (aj == "AreaSelection") {
                    g.map.boxZoom._onDone = this.fireSelectAreaEvent
                }
                g.map.boxZoom.force(true)
            } else {
                if (aj == "DragTool" && aj != this._currentTool) {
                    g.map.dragging.enable()
                } else {
                    if (aj == "MeasureTool") {}
                }
            }
            var ak = {
                tool: aj,
                previous_tool: this._currentTool
            };
            this._currentTool = aj;
            ai("toolchange", ak)
        };
        this.src = function () {};
        this.enableAnimation = function () {};
        this.convertScale = function (aj) {
            return h / aj
        };
        this.unload = function () {
            this._reloadBound = null;
            while (l = O.pop()) {
                g.map.removeLayer(l)
            }
            g.map.setView(new n.LatLng(0, 0), 0, true)
        };
        this.reload = function () {
            if (O.length > 0) {
                this._reloadBound = this.getViewBound()
            }
            this.load(aa, true)
        };
        this.setLayerFeatureFilter = function (ak, al) {
            layers_feature_filter[ak] = al;
            var aj = this.getLayerByName(ak);
            if (aj) {
                aj.setFeatureFilter(al)
            }
        };
        this.getLayerByName = function (ak) {
            for (var aj = 0; aj < O.length; aj++) {
                if (O[aj].id == ak) {
                    return O[aj]
                }
            }
            return 0
        };
        this.getLayerCount = function () {
            return O.length
        };
        this.getLayer = function (aj) {
            return O[aj]
        };
        this.setLayersOrder = function (aj) {
            S(aj)
        };
        this.removeLayer = function (ak) {
            var aj = O[ak.refId];
            for (var al = ak.refId; al < O.length - 1; al++) {
                O[al] = O[al + 1];
                O[al].refId = al
            }
            O.length--;
            g.map.removeLayer(aj)
        };
        this.getViewBound = function () {
            var aj = g.map.getPixelBounds();
            var ak = m.max / (Math.pow(2, g.map._zoom) * 256);
            var al = new Object();
            al.xMin = m.xmin + ak * aj.min.x;
            al.yMin = m.ymax - ak * aj.min.y;
            al.xMax = m.xmin + ak * aj.max.x;
            al.yMax = m.ymax - ak * aj.max.y;
            return al
        };
        this.setViewBound = function (aq, aw, au, ay, ao, al) {
            if (!O[0]) {
                return
            }
            aq *= 1;
            au *= 1;
            aw *= 1;
            ay *= 1;
            if (!ao) {
                ao = 1
            }
            if (isNaN(aq) || isNaN(aw) || isNaN(au) || isNaN(ay)) {
                if (this._startBound && !isNaN(this._startBound.xMin) && !isNaN(this._startBound.xMax) && !isNaN(this._startBound.yMin) && !isNaN(this._startBound.yMax)) {
                    aq = this._startBound.xMin;
                    aw = this._startBound.yMin;
                    au = this._startBound.xMax;
                    ay = this._startBound.yMax
                } else {
                    aq = m.xmin;
                    aw = m.ymin;
                    au = m.xmax;
                    ay = m.ymax
                }
            }
            var aC = m.max * 2.5e-8;
            if (Math.abs(aq - au) < aC) {
                var an = m.max * 0.000025;
                aq -= an;
                au += an
            }
            if (Math.abs(aw - ay) < aC) {
                var an = m.max * 0.000025;
                aw -= an;
                ay += an
            }
            if (g.map._loaded && !al) {
                var av = (1 << g.map._zoom) * 256;
                var ak = g.map.getPixelBounds();
                var aB = new n.LatLngBounds(this.toLeafletCoords(aq, aw), this.toLeafletCoords(au, ay));
                g.map.fitBounds(aB)
            } else {
                var av = (au - aq > ay - aw) ? au - aq : ay - aw;
                var ap = g.map.getSize();
                var ar = g.map.getSize(),
                    aj = g.map.getMinZoom(),
                    at = g.map.getMaxZoom(),
                    az, ax, am;
                do {
                    aj++;
                    var aA = Math.pow(2, aj) * 256;
                    ax = {
                        x: au / m.max * aA,
                        y: aw / m.max * aA
                    };
                    am = {
                        x: aq / m.max * aA,
                        y: ay / m.max * aA
                    };
                    az = new n.Point(ax.x - am.x, am.y - ax.y);
                } while ((az.x - ar.x < 0.0001) && (az.y - ar.y < 0.0001) && (aj <= at));
                aj -= ao;
                Y((au + aq) / 2, (ay + aw) / 2, aj)
            }
        };
        this.setViewBoundAnim = this.setViewBound;
        this.setScale = function (ak) {
            var aj = this.getViewBound();
            this.setLocation((aj.xMin + aj.xMax) / 2, (aj.yMin + aj.yMax) / 2, ak)
        };
        this.toLeafletCoords = function (ak, am) {
            var aj = (1 << g.map._zoom) * 256,
                al = g.map.getPixelBounds(),
                ak = (ak - m.xmin) / m.max * aj - g.map._mapPane._leaflet_pos.x - al.min.x,
                am = (m.ymax - am) / m.max * aj - g.map._mapPane._leaflet_pos.y - al.min.y;
            return g.map.layerPointToLatLng(new n.Point(ak, am))
        };
        this.setLocation = function (aj, al, ak) {
            if (g.map._loaded) {
                if (!(ak >= 0)) {
                    ak = g.map._zoom
                }
                g.map.setView(this.toLeafletCoords(aj, al), ak)
            } else {
                if (ak) {
                    ak = Math.floor(Math.log(h / ak * m.max / 256) / Math.log(2))
                } else {
                    ak = g.map._zoom
                }
                Y(aj, al, ak)
            }
        };
        this.exposeLeaflet = function () {
            return g.map
        };
        this.invalidateSize = function () {
            g.map.invalidateSize()
        };

        function Y(aj, an, am) {
            var al = g.map.getSize();
            g.map._zoom = am;
            var ak = m.max / (Math.pow(2, am) * 256);
            aj = (aj - m.xmin) / ak - al.x / 2;
            an = (m.ymax - an) / ak - al.y / 2;
            g.map._initialTopLeftPoint = new n.Point(aj, an);
            n.DomUtil.setPosition(g.map._mapPane, new n.Point(0, 0));
            g.map._tileLayersToLoad = g.map._tileLayersNum;
            if (g.map._tileBg) {
                g.map._tileBg.innerHTML = ""
            }
            g.map.fire("viewreset", {
                hard: true
            });
            g.map.fire("move");
            g.map.fire("zoomend");
            g.map.fire("moveend");
            if (!g.map._loaded) {
                g.map._loaded = true;
                g.map.fire("load")
            }
        }

        function C(al) {
            var aj = al.length;
            for (var ak = 0; ak < aj; ak++) {
                if (al[ak].nodeType == 1) {
                    return al[ak]
                }
            }
            return null
        }
        var N = [];
        var F = 0;

        function ae(ak) {
            F = N.length;
            if (F == 0) {
                ab(ak);
                return
            }
            var aj;
            while (aj = N.pop()) {
                aj.img.onerror = aj.img.onload = function () {
                    this.feature.predominantColor = a(this.feature);
                    this.feature.iready = true;
                    F--;
                    if (F == 0) {
                        ab(ak)
                    }
                };
                aj.img.src = aj.url
            }
        }
        this.load = function (aj, ak) {
            var al = giscloud.exposeJQuery();
            aa = aj;
            this._is_reload = ak;
            f.ajax({
                url: aj + "?t=" + (new Date()).getTime(),
                context: this,
                success: function (au) {
                    var aF = "";
                    var aJ = null;
                    var aA = C(au.childNodes);
                    var ax = aA.childNodes.length;
                    var ar = 100;
                    if (aA.attributes) {
                        for (var aH = 0; aH < aA.attributes.length; aH++) {
                            if (aA.attributes[aH].name == "id") {
                                aF = aA.attributes[aH].value
                            } else {
                                if (aA.attributes[aH].name == "unit") {
                                    r = aA.attributes[aH].value;
                                    h = w[r]
                                } else {
                                    if (aA.attributes[aH].name == "maxzoom") {
                                        ar = parseInt(aA.attributes[aH].value)
                                    }
                                }
                            }
                        }
                    }
                    this._mid = aF;
                    var aq = new Array();
                    v = new Array();
                    var ap = false;
                    for (var aC = 0; aC < ax; aC++) {
                        if (aA.childNodes[aC].tagName == "sources") {
                            ag(aA.childNodes[aC].childNodes, v, aq)
                        }
                        if (aA.childNodes[aC].tagName == "bound") {
                            var an = aA.childNodes[aC].attributes;
                            aJ = {};
                            for (var aH = 0; aH < an.length; aH++) {
                                if (an[aH].name == "xmin") {
                                    aJ.xMin = parseInt(an[aH].value)
                                } else {
                                    if (an[aH].name == "ymin") {
                                        aJ.yMin = parseInt(an[aH].value)
                                    } else {
                                        if (an[aH].name == "xmax") {
                                            aJ.xMax = parseInt(an[aH].value)
                                        } else {
                                            if (an[aH].name == "ymax") {
                                                aJ.yMax = parseInt(an[aH].value)
                                            }
                                        }
                                    }
                                }
                            }
                            ap = true
                        }
                    }
                    if (!ap) {
                        aJ = new Object()
                    }
                    var aG = new Object();
                    var av;
                    if (Math.abs(h - 420735083.313146) < 0.00001) {
                        av = 180
                    } else {
                        av = 20037508.3427892 * (h / 3779.527559055)
                    }
                    aG.xmin = -av;
                    aG.ymin = -av;
                    aG.xmax = av;
                    aG.ymax = av;
                    var az = ["osm", "bing", "gmaps", "gmaps_sat", "gmaps_terr"];
                    var aI = false;
                    for (var aC = 0; aC < aq.length; aC++) {
                        if (al.inArray(aq[aC].src, az) == -1) {
                            aI = true
                        }
                        if (aG.xmin == j || aq[aC].xmin * 1 < aG.xmin) {
                            aG.xmin = aq[aC].xmin * 1
                        }
                        if (aG.ymin == j || aq[aC].ymin * 1 < aG.ymin) {
                            aG.ymin = aq[aC].ymin * 1
                        }
                        if (aG.xmax == j || aq[aC].xmax * 1 > aG.xmax) {
                            aG.xmax = aq[aC].xmax * 1
                        }
                        if (aG.ymax == j || aq[aC].ymax * 1 > aG.ymax) {
                            aG.ymax = aq[aC].ymax * 1
                        }
                    }
                    var ao = aG.xmax - aG.xmin;
                    var am = aG.yamx - aG.ymin;
                    if (am > ao) {
                        ao = am
                    }
                    aG.max = ao;
                    var at = Math.floor(Math.log(h / (256 / aG.max) / ar) / Math.log(2));
                    if (!this._is_reload || !m || m.xmin != aG.xmin || m.ymin != aG.ymin || m.xmax != aG.xmax || m.ymax != aG.ymax) {
                        this._reloadBound = null
                    }
                    m = aG;
                    for (var aC = 0; aC < ax; aC++) {
                        if (aA.childNodes[aC].tagName == "layers") {
                            Z(aA.childNodes[aC].childNodes, v, aF, O, at)
                        }
                    }
                    T(aF, O, at);
                    for (var aC = 0; aC < O.length; aC++) {
                        if (O[aC].has_icon && O[aC].features) {
                            for (var aE = 0; aE < O[aC].features.length; aE++) {
                                if (O[aC].features[aE].icon) {
                                    O[aC].features[aE].icon_image = new Image();
                                    O[aC].features[aE].icon_image.feature = O[aC].features[aE];
                                    N.push({
                                        img: O[aC].features[aE].icon_image,
                                        url: O[aC].features[aE].icon
                                    })
                                }
                            }
                        }
                    }
                    for (var aC = 0; aC < aq.length; aC++) {
                        if (!aq[aC].visible || (al.inArray(aq[aC].src, az) > -1 && aI) || ap) {
                            continue
                        }
                        var aw = parseInt(aq[aC].xmin);
                        var aB = parseInt(aq[aC].ymin);
                        var ay = parseInt(aq[aC].xmax);
                        var aD = parseInt(aq[aC].ymax);
                        if (aw == 0 && aB == 0 && ay == 0 && aD == 0) {
                            continue
                        }
                        if (aJ.xMin == j || aw < aJ.xMin) {
                            aJ.xMin = aw
                        }
                        if (aJ.yMin == j || aB < aJ.yMin) {
                            aJ.yMin = aB
                        }
                        if (aJ.xMax == j || ay > aJ.xMax) {
                            aJ.xMax = ay
                        }
                        if (aJ.yMax == j || aD > aJ.yMax) {
                            aJ.yMax = aD
                        }
                    }
                    this._startBound = aJ;
                    ae(this)
                }
            })
        };

        function S(aj) {
            var al = [];
            for (var ak = 0; ak < O.length; ak++) {
                var am = O[aj[ak]]._container;
                if (am) {
                    am.parentNode.insertBefore(am, am.parentNode.childNodes[O.length - ak - 1])
                }
                al[ak] = O[aj[ak]]
            }
            for (var ak = 0; ak < O.length; ak++) {
                O[ak] = al[O.length - ak - 1];
                O[ak].refId = ak
            }
        }

        function ab(ao) {
            var aq = [];
            var an = false;
            if (!ao._reloadBound) {
                var aj = ao._startBound;
                ao.setViewBound(aj.xMin, aj.yMin, aj.xMax, aj.yMax)
            }
            for (var am = 0; am < O.length; am++) {
                aq.unshift(O[am].refId);
                if (O[am].should_add) {
                    O[am].should_add = false;
                    g.map.addLayer(O[am]);
                    an = true;
                    O[am].features_original = [];
                    for (var al = 0; al < O[am].features.length; al++) {
                        var ap = {};
                        for (var ak in O[am].features[al]) {
                            ap[ak] = O[am].features[al][ak]
                        }
                        O[am].features_original[al] = ap
                    }
                }
            }
            if (g.map._loaded && an) {
                S(aq)
            }
            x = true;
            if (ao._is_reload) {
                ai("reload", {
                    id: ao._mid
                })
            } else {
                ai("load", {
                    id: ao._mid
                })
            }
        }

        function ag(ak, ar, am) {
            for (var ao = ak.length - 1; ao >= 0; ao--) {
                var aj = ak[ao];
                if (aj.tagName == "source") {
                    var al = "";
                    var at = new Array();
                    for (var au = 0; au < aj.attributes.length; au++) {
                        if (aj.attributes[au].name == "id") {
                            al = aj.attributes[au].value
                        }
                        at[aj.attributes[au].name] = aj.attributes[au].value
                    }
                    ar[al] = at;
                    ar[al].tileservers = [];
                    for (var ap = aj.childNodes.length - 1; ap >= 0; ap--) {
                        if (aj.childNodes[ap].tagName == "tileservers") {
                            var an = aj.childNodes[ap];
                            if (an.attributes) {
                                for (var au = 0; au < an.attributes.length; au++) {
                                    if (an.attributes[au].name == "maxzoom") {
                                        ar[al].maxzoom = parseInt(an.attributes[au].value)
                                    }
                                    if (an.attributes[au].name == "minzoom") {
                                        ar[al].minzoom = parseInt(an.attributes[au].value)
                                    }
                                    if (an.attributes[au].name == "attribution") {
                                        ar[al].attribution = an.attributes[au].value
                                    }
                                }
                            }
                            for (var aq = aj.childNodes[ap].childNodes.length - 1; aq >= 0; aq--) {
                                var an = aj.childNodes[ap].childNodes[aq];
                                if (an.attributes) {
                                    for (var au = 0; au < an.attributes.length; au++) {
                                        if (an.attributes[au].name == "value") {
                                            ar[al].tileservers.push(an.attributes[au].value)
                                        }
                                    }
                                }
                            }
                        }
                        if (aj.childNodes[ap].tagName == "tilepath") {
                            var an = aj.childNodes[ap];
                            if (an.attributes) {
                                for (var au = 0; au < an.attributes.length; au++) {
                                    if (an.attributes[au].name == "value") {
                                        ar[al].tilepath = an.attributes[au].value
                                    }
                                }
                            }
                        }
                    }
                    am.push(ar[al])
                }
            }
        }
        var P;

        function Z(ar, an, at, am, ap) {
            P = [];
            for (var ak = ar.length - 1; ak >= 0; ak--) {
                var ao = ar[ak];
                if (ao.tagName == "layer") {
                    var aj = {
                        id: "",
                        alpha: 1,
                        visible: true
                    };
                    if (ao.attributes) {
                        for (var aq = 0; aq < ao.attributes.length; aq++) {
                            if (ao.attributes[aq].name == "id") {
                                aj.id = ao.attributes[aq].value
                            } else {
                                if (ao.attributes[aq].name == "src") {
                                    aj.src = ao.attributes[aq].value
                                } else {
                                    if (ao.attributes[aq].name == "timestamp") {
                                        aj.timestamp = ao.attributes[aq].value
                                    } else {
                                        if (ao.attributes[aq].name == "offset") {
                                            aj.offset = ao.attributes[aq].value
                                        } else {
                                            if (ao.attributes[aq].name == "precision") {
                                                aj.precision = ao.attributes[aq].value * 1
                                            } else {
                                                if (ao.attributes[aq].name == "dynamic") {
                                                    aj.dynamic = ao.attributes[aq].value * 1
                                                } else {
                                                    if (ao.attributes[aq].name == "visible") {
                                                        aj.visible = ao.attributes[aq].value == "true"
                                                    } else {
                                                        if (ao.attributes[aq].name == "alpha") {
                                                            aj.alpha = parseInt(ao.attributes[aq].value) / 100
                                                        } else {
                                                            if (ao.attributes[aq].name == "type") {
                                                                aj.type = ao.attributes[aq].value
                                                            } else {
                                                                if (ao.attributes[aq].name == "format") {
                                                                    aj.format = ao.attributes[aq].value
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    aj.features = [];
                    for (var al = 0; al < ao.childNodes.length; al++) {
                        if (ao.childNodes[al].tagName == "features") {
                            I(ao.childNodes[al].childNodes, aj)
                        }
                    }
                    aj.xmin = an[aj.src].xmin;
                    aj.ymin = an[aj.src].ymin;
                    aj.xmax = an[aj.src].xmax;
                    aj.ymax = an[aj.src].ymax;
                    P.push(aj)
                }
            }
        }

        function G(ak, aj) {
            if (aj.id != ak.id) {
                return 0
            } else {
                ak.refId = aj.refId
            }
            if (aj.timestamp != ak.timestamp) {
                return 0
            }
            if (aj.xmin != ak.xmin) {
                return 0
            }
            if (aj.xmax != ak.xmax) {
                return 0
            }
            if (aj.ymin != ak.ymin) {
                return 0
            }
            if (aj.ymax != ak.ymax) {
                return 0
            }
            if (aj.features.length != ak.features.length) {
                return 0
            }
            return 2
        }

        function T(aw, ap, au) {
            for (var an = 0; an < P.length; an++) {
                P[an].prev_layer = null
            }
            var am = ap.length;
            for (var at = 0; at < ap.length; at++) {
                var aq = ap[at];
                var ax = true;
                for (var an = 0; an < P.length; an++) {
                    var al = P[an];
                    if (G(al, aq.layer_info)) {
                        ax = false;
                        al.prev_layer = aq
                    }
                }
                if (ax) {
                    g.map.removeLayer(aq);
                    am--
                }
            }
            ap.length = 0;
            add_index = 0;
            for (var an = 0; an < P.length; an++) {
                var al = P[an];
                if (al.prev_layer) {
                    ap[an] = al.prev_layer;
                    ap[an].add_index = add_index++;
                    continue
                }
                ap[an] = null
            }
            var av = false;
            for (var an = 0; an < P.length; an++) {
                var al = P[an];
                if (al.visible) {
                    v[al.src].visible = true
                }
                var ak = v[al.src].src;
                if (ak == "osm" || ak == "croatianq" || ak == "gmaps" || ak == "gmaps_sat" || ak == "gmaps_terr" || ak == "bing" || ak == "mapquest-osm" || ak == "mapquest-oarial" || ak == "tilejson") {
                    av = true
                }
                if (ap[an]) {
                    continue
                }
                if (al.type == "raster") {
                    if (!al.format) {
                        al.format = "swf"
                    }
                    var ar = new fnRasterLayer(z + "t/" + al.timestamp + "/" + aw + "/" + al.id + "/{z}/{x}/{y}." + al.format, {
                        maxZoom: 18,
                        noWrap: true,
                        visible: al.visible,
                        opacity: al.alpha
                    });
                    ar.id = al.id;
                    ar.source = v[al.src];
                    if (au > 18) {
                        au = 18
                    }
                } else {
                    if (ak == "osm") {
                        var ar = new fnLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                            maxZoom: 18,
                            noWrap: true,
                            visible: al.visible,
                            opacity: al.alpha,
                            attribution: "<a href='http://www.openstreetmap.org/' target='_blank'>OpenStreetMap</a>"
                        });
                        ar.id = al.id;
                        ar.source = v[al.src];
                        if (au > 18) {
                            au = 18
                        }
                    } else {
                        if (ak == "mapquest-osm") {
                            var ar = new fnLayer("http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.jpg", {
                                maxZoom: 18,
                                noWrap: true,
                                visible: al.visible,
                                opacity: al.alpha,
                                subdomains: "1234",
                                attribution: "<a href='http://developer.mapquest.com/' target='_blank'>MapQuest</a>"
                            });
                            ar.id = al.id;
                            ar.source = v[al.src];
                            if (au > 18) {
                                au = 18
                            }
                        } else {
                            if (ak == "mapquest-oarial") {
                                var ar = new fnLayer("http://oatile{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg", {
                                    maxZoom: 18,
                                    noWrap: true,
                                    visible: al.visible,
                                    opacity: al.alpha,
                                    subdomains: "1234",
                                    attribution: "<a href='http://developer.mapquest.com/' target='_blank'>MapQuest</a>"
                                });
                                ar.id = al.id;
                                ar.source = v[al.src];
                                if (au > 18) {
                                    au = 18
                                }
                            } else {
                                if (ak == "croatianq") {
                                    var ar = new fnLayer("http://d27e19ohwv96uz.cloudfront.net/tilestache88/{z}/{x}/{y}.png", {
                                        maxZoom: 18,
                                        noWrap: true,
                                        visible: al.visible,
                                        opacity: al.alpha
                                    });
                                    ar.id = al.id;
                                    ar.source = v[al.src];
                                    if (au > 18) {
                                        au = 18
                                    }
                                } else {
                                    if (ak == "gmaps") {
                                        ar = new fnGoogleLayer({
                                            maxZoom: 22,
                                            noWrap: true,
                                            visible: al.visible,
                                            opacity: al.alpha,
                                            google_map_type: "ROADMAP"
                                        });
                                        ar.id = al.id;
                                        ar.source = v[al.src];
                                        if (au > 22) {
                                            au = 22
                                        }
                                    } else {
                                        if (ak == "gmaps_sat") {
                                            ar = new fnGoogleLayer({
                                                maxZoom: 20,
                                                noWrap: true,
                                                visible: al.visible,
                                                opacity: al.alpha,
                                                google_map_type: "SATELLITE"
                                            });
                                            ar.id = al.id;
                                            ar.source = v[al.src];
                                            if (au > 20) {
                                                au = 20
                                            }
                                        } else {
                                            if (ak == "gmaps_terr") {
                                                ar = new fnGoogleLayer({
                                                    maxZoom: 15,
                                                    noWrap: true,
                                                    visible: al.visible,
                                                    opacity: al.alpha,
                                                    google_map_type: "TERRAIN"
                                                });
                                                ar.id = al.id;
                                                ar.source = v[al.src];
                                                if (au > 15) {
                                                    au = 15
                                                }
                                            } else {
                                                if (ak == "bing") {
                                                    var ar = new fnQuadLayer("http://ecn.t{s}.tiles.virtualearth.net/tiles/r{q}?g=811&mkt=en-us&lbl=l1&stl=h&shading=hill&n=z", {
                                                        maxZoom: 19,
                                                        noWrap: true,
                                                        visible: al.visible,
                                                        subdomains: "0123",
                                                        opacity: al.alpha,
                                                        attribution: "<a href='http://maps.bing.com/' target='_blank'>Bing Maps</a>&nbsp;© NAVTEQ, © Microsoft Corporation"
                                                    });
                                                    ar.id = al.id;
                                                    ar.source = v[al.src];
                                                    if (au > 19) {
                                                        au = 19
                                                    }
                                                } else {
                                                    if (ak == "wms" || v[al.src].tilepath) {
                                                        var ar = new fnWmsLayer(v[al.src].tileservers[0] + v[al.src].tilepath, {
                                                            maxZoom: au,
                                                            noWrap: true,
                                                            visible: al.visible,
                                                            subdomains: "0123",
                                                            opacity: al.alpha
                                                        });
                                                        ar.id = al.id;
                                                        ar.source = v[al.src]
                                                    } else {
                                                        if (ak == "tilejson") {
                                                            var aj = v[al.src];
                                                            console.log(aj);
                                                            var ar = new fnLayer(aj.tileservers, {
                                                                maxZoom: aj.maxzoom,
                                                                noWrap: true,
                                                                visible: al.visible,
                                                                opacity: al.alpha,
                                                                attribution: aj.attribution
                                                            });
                                                            ar.id = al.id;
                                                            ar.source = aj;
                                                            if (au > aj.maxzoom) {
                                                                au = aj.maxzoom
                                                            }
                                                        } else {
                                                            var ar = new fnTileLayer({
                                                                mid: aw,
                                                                id: al.id,
                                                                modified: al.timestamp,
                                                                lmap: g.map,
                                                                maxZoom: au,
                                                                offset: al.offset,
                                                                visible: al.visible,
                                                                precision: al.precision,
                                                                dynamic: al.dynamic,
                                                                opacity: al.alpha,
                                                                source: v[al.src]
                                                            });
                                                            if (layers_feature_filter[al.id]) {
                                                                ar.setFeatureFilter(layers_feature_filter[al.id])
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                ar.features = al.features;
                ar.has_icon = al.has_icon;
                ar.layer_info = al;
                ar.should_add = true;
                ap[an] = ar
            }
            if (av) {
                g.map.options.crs = n.CRS.EPSG3857
            } else {
                g.map.options.crs = n.CRS.EPSG4326
            }
            for (var ao = 0; ao < ap.length; ao++) {
                ap[ao].refId = ao;
                if (ap[ao].options.maxZoom > au) {
                    ap[ao].options.maxZoom = au
                }
            }
        }

        function I(am, ak) {
            ak.features = new Array();
            for (var an = 0; an < am.length; an++) {
                var al = am[an];
                if (al.tagName != "feature") {
                    continue
                }
                var ao = {};
                if (al.attributes) {
                    for (var aj = 0; aj < al.attributes.length; aj++) {
                        if (al.attributes[aj].name == "icon") {
                            ao.icon = al.attributes[aj].value;
                            ak.has_icon = true
                        } else {
                            if (al.attributes[aj].name == "outline") {
                                ao.outline = al.attributes[aj].value
                            } else {
                                if (al.attributes[aj].name == "color") {
                                    ao.color = al.attributes[aj].value
                                } else {
                                    if (al.attributes[aj].name == "strokecolor") {
                                        ao.strokecolor = al.attributes[aj].value
                                    } else {
                                        if (al.attributes[aj].name == "innerstrokecolor") {
                                            ao.innerstrokecolor = al.attributes[aj].value
                                        } else {
                                            if (al.attributes[aj].name == "fillcolor") {
                                                ao.fillcolor = al.attributes[aj].value
                                            } else {
                                                if (al.attributes[aj].name == "linewidth") {
                                                    ao.linewidth = al.attributes[aj].value * 1
                                                } else {
                                                    if (al.attributes[aj].name == "innerlinewidth") {
                                                        ao.innerlinewidth = al.attributes[aj].value * 1
                                                    } else {
                                                        if (al.attributes[aj].name == "width") {
                                                            ao.width = al.attributes[aj].value * 1
                                                        } else {
                                                            if (al.attributes[aj].name == "anchor") {
                                                                ao.anchor = al.attributes[aj].value
                                                            } else {
                                                                if (al.attributes[aj].name == "dx") {
                                                                    ao.dx = al.attributes[aj].value * 1
                                                                } else {
                                                                    if (al.attributes[aj].name == "dy") {
                                                                        ao.dy = al.attributes[aj].value * 1
                                                                    } else {
                                                                        if (al.attributes[aj].name == "type") {
                                                                            ao.type = al.attributes[aj].value
                                                                        } else {
                                                                            if (al.attributes[aj].name == "text" || al.attributes[aj].name == "label") {}
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                ak.features.unshift(ao)
            }
        }
        B = [];

        function ai(al, ak) {
            if (!B[al]) {
                return
            }
            for (var aj = 0; aj < B[al].length; aj++) {
                B[al][aj](ak)
            }
        }
        var X = 0;
        g.map.on("dragstart", function () {
            X = 1
        });
        g.map.on("dragend", function () {
            X = 0
        });

        function M(ak) {
            var aj = g.map.getPixelBounds();
            return {
                x: (aj.min.x + ak.layerPoint.x + g.map._mapPane._leaflet_pos.x) / 256,
                y: (aj.min.y + ak.layerPoint.y + g.map._mapPane._leaflet_pos.y) / 256
            }
        }
        var R;

        function af(ao, an, ap) {
            if (!x || !g.map._layers || g.map._layers.length == 0) {
                return 0
            }
            ao.mp = M(ao);
            R = ao.mp;
            var ak = Math.floor(ao.mp.x);
            var aj = Math.floor(ao.mp.y);
            ao.offsetX = 256 * (ao.mp.x - ak);
            ao.offsetY = 256 * (ao.mp.y - aj);
            ao.showMousePointer = 0;
            U.length = 0;
            for (var am = 0; am < ac.length; am++) {
                U.push(ac[am])
            }
            ac.length = 0;
            for (var aq = 0; aq < O.length; aq++) {
                if (O[aq]._tiles && O[aq].getVisible() && O[aq]._tiles[ak + ":" + aj] && O[aq]._tiles[ak + ":" + aj].obj) {
                    ao.currentTarget = O[aq]._tiles[ak + ":" + aj];
                    var al = O[aq]._tiles[ak + ":" + aj].obj.onMouseMove(ao, an, ap);
                    if (al) {
                        ac.push(al);
                        ao.showMousePointer = 1
                    }
                }
            }
            return 1
        }

        function E(ao, an, am) {
            am = am || ac;
            if (B[an]) {
                var aj = (1 << g.map._zoom);
                var ak = new Object();
                for (var al = am.length - 1; al >= 0; al--) {
                    for (var ao = 0; ao < am[al].length; ao++) {
                        var ap = {
                            id: am[al][ao].c ? am[al][ao].c.replace("_", "||") : "",
                            object: am[al][ao]
                        };
                        if (R) {
                            ap.x = m.xmin + m.max * R.x / aj;
                            ap.y = m.ymax - m.max * R.y / aj
                        }
                        ai(an, ap);
                        return
                    }
                }
            }
        }
        var ah = f(g.map._container);
        var ac = new Array();
        var U = new Array();
        var H;
        var K;
        var V;

        function J() {
            if (!af(V, true, 10)) {
                return
            }
            E(V, "object_click")
        }
        f(g.map._mapPane).bind("touchstart", function (ak) {
            if (ak.originalEvent.targetTouches.length != 1) {
                return
            }
            V = ak.originalEvent.targetTouches[0];
            K = {
                x: V.pageX,
                y: V.pageY
            };
            V.layerPoint = g.map.mouseEventToLayerPoint(V);
            o.clearTimeout(H);
            H = o.setTimeout(J, 200);
            if (V.layerPoint) {
                V.mp = M(V);
                if (B.mousemove) {
                    var aj = (1 << g.map._zoom);
                    ai("mousemove", {
                        x: m.xmin + m.max * V.mp.x / aj,
                        y: m.ymax - m.max * V.mp.y / aj
                    })
                }
            }
        });
        f(g.map._mapPane).bind("touchend", function (aj) {
            o.clearTimeout(H);
            if (V) {
                J()
            }
        });
        f(g.map._mapPane).bind("touchmove", function (am) {
            var ak = am.originalEvent.targetTouches[0];
            var al = Math.abs(ak.pageX - K.x);
            var aj = Math.abs(ak.pageY - K.y);
            if (al > 2 || aj > 2) {
                V = null;
                o.clearTimeout(H)
            }
        });
        if (!t.isMobileBrowser) {
            var ad = null;
            g.map.on("mousemove", function (al) {
                if (X || !af(al)) {
                    return 0
                }
                if (al.showMousePointer) {
                    g.map._container.style.cursor = "pointer";
                    E(al, "object_over");
                    ad = al
                } else {
                    g.map._container.style.cursor = "default";
                    if (ad) {
                        E(ad, "object_out", U);
                        ad = null
                    }
                }
                if (B.mousemove) {
                    var aj = (1 << g.map._zoom);
                    var ak = {
                        x: m.xmin + m.max * al.mp.x / aj,
                        y: m.ymax - m.max * al.mp.y / aj
                    };
                    ai("mousemove", ak)
                }
            });
            ah.mouseup(function (aj) {
                E(aj, "object_click")
            });
            g.map.on("dblclick", function (aj) {
                E(aj, "object_dblclick")
            })
        }
        g.map.on("mousedown", function (al) {
            if (!af(al)) {
                return 0
            }
            if (B.mousedown) {
                var aj = (1 << g.map._zoom);
                var ak = {
                    x: m.xmin + m.max * al.mp.x / aj,
                    y: m.ymax - m.max * al.mp.y / aj
                };
                ai("mousedown", ak)
            }
        });
        this.addEventListener = function (aj, ak) {
            if (aj == "scalechange") {
                if (!B.scalechange) {
                    B.scalechange = new Array();
                    g.map.on("zoomend", function (am) {
                        var al = new Object();
                        if (m && m.max) {
                            al.zoom = Math.pow(2, g.map._zoom) * 256 / m.max
                        }
                        ai("scalechange", al)
                    })
                }
            } else {
                if (!B[aj]) {
                    B[aj] = new Array()
                }
            }
            B[aj].push(ak)
        };
        this.removeEventListener = function (aj, al) {
            if (!B[aj]) {
                return
            }
            for (var ak = 0; ak < B[aj].length; ak++) {
                if ("" + B[aj][ak] == "" + al) {
                    B.splice(ak, 1)
                }
            }
        }
    };
    fnPrinter2 = function (B) {};
    fnBitmap2 = function (B) {};
    fnSlider2 = function (B) {};
    flashnavigator2 = {};
    flashnavigator2.html5 = true;
    flashnavigator2.include = function () {};
    flashnavigator2.setOptions = function (B) {
        flashnavigator2.extraOptions = B
    };
    flashnavigator2.container = function (C, B) {
        var D = {
            maxZoom: 25,
            zoom: 0,
            latloncrs: true,
            center: new giscloud.LonLat(0, 0),
            host: z,
            background: "#fff",
            attribution: {
                prefix: "Powered by <a href='http://www.giscloud.com/' target='_blank'>GIS Cloud</a>"
            }
        };
        if (flashnavigator2.extraOptions && flashnavigator2.extraOptions.lockZoom) {
            D.lockZoom = true
        }
        g = new giscloud.Viewer.Leaflet(C, null, D);
        g.onViewerLoad = B;
        g.init.done(function () {
            y();
            g.onViewerLoad.onLoad()
        })
    };
    w = new Array();
    units_label = new Array();
    var q = 3779.527559055;
    w.meter = q;
    units_label.meter = "m";
    w.kilometer = q * 1000;
    units_label.kilometer = "km";
    w.centimeter = q * 0.01;
    units_label.centimeter = "cm";
    w.degree = q * 111319.49079327357;
    units_label.degree = "°";
    w.foot = q * 0.3048;
    units_label.foot = "ft";
    w.foot_us = q * 0.30480061;
    units_label.foot_us = "ft";
    w.mile = q * 1609.344;
    units_label.mile = "m";
    w.inch = q * 0.0254;
    units_label.mile = '"';
    w.yard = q * 0.9144;
    w.link_ben = q * 0.201167651;
    w.link_srs = q * 0.201167651;
    w.ind_yard = q * 0.914398554;
    w.srs_yard = q * 0.914398415;
    w.fathom = q * 1.8288;
    h = w.meter;
    r = "meter";

    function a(G) {
        try {
            var F = G.icon_image;
            var K = document.createElement("canvas");
            K.width = F.width;
            K.height = F.height;
            var O = K.getContext("2d");
            O.drawImage(F, 0, 0);
            var C = O.getImageData(0, 0, K.width, K.height);
            var J = C.data;
            var B = 0,
                H = 0,
                M = 0;
            var I = 0;
            for (var E = 0, D = J.length; E < D; E += 4) {
                if (J[E + 3] > 0) {
                    B += J[E];
                    H += J[E + 1];
                    M += J[E + 2];
                    I++
                }
            }
            return giscloud.Color.rgbToHex(Math.floor(B / I), Math.floor(H / I), Math.floor(M / I))
        } catch (N) {
            return giscloud.Color.rgbToHex(255, 255, 255)
        }
    }

    function A(C) {
        var E = C + "=";
        var B = document.cookie.split(";");
        for (var D = 0; D < B.length; D++) {
            var F = B[D];
            while (F.charAt(0) == " ") {
                F = F.substring(1, F.length)
            }
            if (F.indexOf(E) == 0) {
                return F.substring(E.length, F.length)
            }
        }
        return null
    }
    flashnavigator.html5Compatible = !! document.createElement("canvas").getContext;
    if (flashnavigator.html5Compatible && !o.gcForceFlashViewer && (A("gc-html5") != "off" || !flashnavigator.__flashInstalled)) {
        flashnavigator = flashnavigator2;
        flashnavigator.html5Compatible = true;
        flashnavigator.ready = function () {
            fnLayer = fnLayer2;
            fnMarker = fnMarker2;
            fnAgent = fnAgent2;
            fnCanvas = fnCanvas2;
            fnPrinter = fnPrinter2;
            fnBitmap = fnBitmap2;

            fnTooltip = fnTooltip2;
            fnSlider = fnSlider2;
            fnKartehr = function () {
                this.liveSite = function () {}
            }
        };
        fnViewer = fnViewer2
    }
    flashnavigator.html5Enabled = true
}(window, giscloud.exposeJQuery(), giscloud.common()));
(function (a) {
    giscloud.rest = {
        get: a
    }
}(giscloud.common().rest.get));








(function (h, f) {
    if (!giscloud.oauth2 || giscloud.oauth2.thisIsOauthFrame()) {
        return
    }
    var j, m, e, g, c, k, a;
    j = h.address;
    e = {};
    k = {};
    a = {};
    c = h({});
    m = new h.Deferred();
    j.init(function (n) {
        h.extend(k, n.parameters);
        for (p in k) {
            if (k.hasOwnProperty(p)) {
                k[p] = unescape(k[p])
            }
        }
        m.resolve()
    });
    j.externalChange(function (y) {
        var u, r, n, t, w, v, q, o, x;
        q = function (A, z) {
            return h.map(z, function (C, B) {
                if (A[B] === f) {
                    return B
                } else {
                    return null
                }
            })
        };
        o = function (A, z) {
            return q(z, A)
        };
        x = function (A, z) {
            return h.map(z, function (C, B) {
                if (A[B] !== C) {
                    A[B] = C;
                    return B
                } else {
                    return null
                }
            })
        };
        a = y.parameters;
        for (n in a) {
            if (a.hasOwnProperty(n)) {
                a[n] = unescape(a[n])
            }
        }
        w = q(k, a);
        v = o(k, a);
        for (u = 0, r = w.length; u < r; u++) {
            k[w[u]] = unescape(a[w[u]])
        }
        for (u = 0, r = v.length; u < r; u++) {
            delete k[v[u]]
        }
        t = x(k, a);
        for (u = 0, r = w.length; u < r; u++) {
            n = w[u];
            c.triggerHandler(n, [{
                type: "add",
                param: n,
                value: giscloud.address.param(n)
            }])
        }
        for (u = 0, r = v.length; u < r; u++) {
            n = v[u];
            c.triggerHandler(n, [{
                type: "remove",
                param: n
            }])
        }
        for (u = 0, r = t.length; u < r; u++) {
            n = t[u];
            c.triggerHandler(n, [{
                type: "change",
                param: n,
                value: giscloud.address.param(n)
            }])
        }
    });
    giscloud.address = {
        registerParam: function (n) {
            if (e[n.name]) {
                throw {
                    msg: "Param by that name already exists",
                    data: n
                }
            }
            e[n.name] = {
                name: n.name,
                query: n.query || n.name,
                serialize: n.serialize,
                deserialize: n.deserialize
            };
            if (n.onChange) {
                this.change(n.name, n.onChange)
            }
            this.param(n.name, j.parameter(n.query));
            return this
        },
        param: function (q, o) {
            var r, n = e[q];
            if (o === f) {
                r = k[q];
                if (r == null) {
                    return null
                } else {
                    if (n && n.deserialize) {
                        return n.deserialize(unescape(r))
                    } else {
                        return unescape(r)
                    }
                }
            } else {
                if (n && n.serialize) {
                    r = n.serialize(o)
                } else {
                    r = (typeof o === "string") ? o : o.toString()
                }
                k[q] = r;
                j.parameter(q, r);
                return this
            }
        },
        change: function (o, n) {
            c.bind(o, n)
        },
        init: m.promise()
    }
}(giscloud.exposeJQuery()));

(function (e, c) {
    var h, g, a, f = /[a-z0-9._%+\-]+@[a-z0-9.\-]+/i;
    if (c) {
        h = c.exposeJQuery();
        g = c.common().md5
    } else {
        h = e.jQuery;
        g = e.md5
    }
    a = {
        hash: function (j) {
            if (typeof j === "string") {
                return g(j.toLowerCase())
            } else {
                return null
            }
        },
        url: function (k, j, n) {
            var m, o;
            if (f.test(k)) {
                m = this.hash(k)
            } else {
                m = k
            }
            if (typeof j !== "number") {
                j = 80
            }
            if (n) {
                o = "https:"
            } else {
                o = e.document.location.protocol
            }
            return o + "//www.gravatar.com/avatar/" + m + "?r=g&s=" + j
        },
        image: function (o, m, j, q) {
            var n, k;
            k = h("<img/>", {
                src: this.url(o, m, q)
            });
            if (j) {
                n = h("#" + j)
            }
            if (n && n.length === 1) {
                n.append(k)
            }
            return k
        }
    };
    if (c) {
        c.gravatar = a
    } else {
        e.gravatar = a
    }
}(window, typeof giscloud !== "undefined" ? giscloud : null));


if (!window.giscloud) {
    window.giscloud = {};
    giscloud.common = function () {
        return null
    }
}

/*
 * 以下为绘制部分
 */


(function (window, $, common, undefined){
	// 最大下载线程
    var MAX_NUMBER_OF_LOADERS = 5;
    var giscloud_url = "http:///";
    if (common) {
        giscloud_url = common.appSite()
    }
	// 取图地址
    var giscloud_tile_url = (giscloud_config.tileSite()) ? giscloud_config.tileSite() : giscloud_url;
    var isWebKit = (navigator.userAgent.indexOf("WebKit") > 0);
    var tile_buffer = new Array();
    var isMouseDown;
    var fields;
    var _selectablePoly;
    var bounds;
    var selectionEnabled = false;
    var laycount = 0;
    var loader_id = 0;
    var active_loaders = {};
    giscloud.Html5MapSetSelection = function (v) {
        selectionEnabled = v
    };
    giscloud.Html5Map = function (o) {
        _init(o, this);
        laycount++;
        MAX_NUMBER_OF_LOADERS = Math.round(3 / laycount);
        if (MAX_NUMBER_OF_LOADERS < 1) {
            MAX_NUMBER_OF_LOADERS = 1
        }
        var load_requests = [];
        var running_loader = 0;
		// 加载下一个切片
        function loadNextTile(/*请求ID*/last_req) {
            if (active_loaders[last_req]) { // 如果此线程已在加载，则删除，用于纠错
                delete active_loaders[last_req]
            }
			(running_loader > 0) && running_loader--; //当前加载队列数量减一
            var r = load_requests.shift();// 取出最先请求对象
            if (r) {
                r.dest._loader_id = loader_id; //为回调函数绑定请求ID
                ajaxLoader(r.func, r.url, r.dest) //加载
            }
        }
		// 加载切片
        function _getTile(/*切片号*/coord, /*视野级别*/zoom, ownerDocument, that) {
			//验证切片
            var m = Math.pow(2, zoom);
            var y = coord.y;
            if (y < 0 || y >= m) {// 如果当前切片已超过坐标系允许，则创建空节点
                return ownerDocument.createElement("div")
            }
            var x = coord.x % m;
			
            var tile = jsonCanvas(ownerDocument, that);
            var uri = zoom + "/" + x + "/" + y;
            if (that.url) {
                var tileurl = that.url + uri;
                if (fields) {
                    ajaxLoader(drawGeomCanvas, tileurl + ".json?fields=" + fields, tile.c)
                } else {
                    ajaxLoader(drawGeomCanvas, tileurl + ".json", tile.c)
                }
            } else {
                tile_buffer.push({
                    tile: tile.c,
                    uri: uri
                })
            }
            return tile
        }

        function _loadTile(tile, coord, zoom, that) {
            var uri = "";
            if (that.feature_filter) {
                uri = that.feature_filter.attributes + "/"
            }
            uri += zoom + "/" + coord.x + "/" + coord.y;
            tile.obj = that;
            tile.zoom = zoom;
            tile.coord = coord;
            tile._loader_id = loader_id;
            if (that.url) {
                ajaxLoader(drawTile, that.url + uri + ".json", tile)
            } else {
                tile_buffer.push({
                    tile: tile,
                    uri: uri
                })
            }
        }
        var a_uid = 0;

        function ajaxLoader(func, url, dest) {
            if (running_loader == MAX_NUMBER_OF_LOADERS) {// 如果已经达到最大线程，就直接返回
                load_requests.push({
                    func: func,
                    url: url,
                    dest: dest
                });
                return
            }
            running_loader++;//线程增加
			
			
			// 以下为异步加载数据
            if (document.getElementById) {
                var x = (window.XDomainRequest) ? new XDomainRequest() : new XMLHttpRequest();
                if (window.XDomainRequest) {
                    x.xdomain = 1
                }
            }
            if (x) {
                a_uid++;
                active_loaders[a_uid] = x;
                x.a_uid = a_uid;
                x.dest = dest;
                x.onreadystatechange = function () {
                    var el = el || {};
                    if (x.xdomain || x.readyState == 4) {
                        var d = 0;
                        var el;
                        if (x.xdomain || x.status == 200) {
                            el = x.dest;// 回调函数
                            if (x.responseText && x.responseText[0] != "<" && x.responseText != "[0]") {
								// 格式化JSON对象
                                if (window.JSON) {
                                    d = window.JSON.parse(x.responseText)
                                } else {
                                    d = eval("(" + x.responseText + ")")
                                }
                            }
                        }
                        if (el) {
                            if (d) {
                                func(el, d)
                            }
                            if (el.ontileload) {
                                el.ontileload()
                            }
                        }
						// 加载下张切片
                        loadNextTile(this.a_uid)
                    }
                };
                if (x.xdomain) {
                    x.onerror = function () { // 出错
                        loadNextTile(this.a_uid)
                    };
                    x.ontimeout = function () { // 超时
                        loadNextTile(this.a_uid)
                    };
                    x.onprogress = function () {};	
                    x.onload = x.onreadystatechange //兼容不懂浏览器回调
                }
                x.open("GET", url);
                x._url = url;
                x.send()
            }
        }
        this.setFields = function (_fields) {
            fields = _fields
        };
        this.getTile = function (coord, zoom, ownerDocument) {
            return _getTile(coord, zoom, ownerDocument, this)
        };
        this.loadTile = function (tile, coord, zoom) {
            _loadTile(tile, coord, zoom, this)
        };
        this.selectablePoly = function (v) {
            _selectablePoly = v
        };
        this.setBounds = function (b) {
            bounds = b
        };
        this.onMouseMove = function (evt, force, offset) {
            return checkForEvent(evt, force, offset)
        };
        this.onMouseUp = function (evt) {};
        this.onMouseDown = function (evt) {};
        this.getCanvases = function () {
            return document.getElementsByTagName("canvas")
        };
		// 修改对象
        this.modifyObject = function (a, b, c, d, e, f) {
            a = new String(a).split(",");
            if (!c) {
                c = ""
            }
            var color;
            if (isNaN(b.color)) {
                color = b.color
            } else {
                color = "#" + b.color.toString(16)
            }
            var h = new Object();
            h.color = color;
            h.linewidth = 1;
            var toClear = null;
            if (d) {
                toClear = this.modifier;
                this.modifier = {}
            }
            for (var i = 0; i < a.length; i++) {
                var key = (c + a[i]).replace("||", "_");
                this.modifier[key] = h
            }
            drawAcrossTiles(this, toClear);
            toClear = null
        };
        this.redraw = function () {
            redraw(this)
        };
        this.reload = function () {
            var c = this.getCanvases();
            for (var i in c) {
                if (c[i].coord) {
                    c[i].styles = null;
                    _loadTile(c[i], c[i].coord, c[i].zoom, this)
                }
            }
        };
        this.resetLoader = function () {
            var r;
            for (r in active_loaders) {
                active_loaders[r].dest._layer._tileOnError.call(active_loaders[r].dest);
                if (active_loaders[r].abort) {
                    active_loaders[r].abort()
                }
                delete active_loaders[r]
            }
            while (r = load_requests.pop()) {
                r.dest._layer._tileOnError.call(r.dest)
            }
            loader_id++;
            running_loader = 0
        };
        this.getFeature = function (feature) {
            var f = feature.replace("||", "_");
            var c = this.getCanvases();
            for (var i in c) {
                if (c[i].fields && c[i].fields[f]) {
                    return c[i].fields[f]
                }
            }
        };
        return this
    };

    function _init(o, that) {
        if (o.map) {
            that.gmap = 1;
            that.tileSize = new google.maps.Size(256, 256)
        }
        that.modifier = {};
        that.hoverStyle = {
            fill: "rgba(255,0,0,0.8)",
            stroke: "rgba(255,0,0,0.8)"
        };
        that.mid = o.mid;
        that.timestamp = o.timestamp;
        that.lid = o.id;
        that.lmap = o.lmap;
        fields = "";
        that.map = o.map;
        if (o.tooltip) {
            that.tooltip = document.createElement("div");
            that.tooltip.style.position = "absolute";
            that.tooltip.style.padding = "1px";
            that.tooltip.style.border = "1px solid #CCC";
            that.tooltip.style.backgroundColor = "#FAF3A9";
            that.tooltip.style.zIndex = 1000;
            document.body.appendChild(that.tooltip);
            giscloud.Html5MapTooltip = that.tooltip
        }
        _selectablePoly = 0;
        $(document).mousedown(function (evt) {
            isMouseDown = true
        });
        $(document).mouseup(function (evt) {
            isMouseDown = false
        });
        if (!o.modified) {
            ajaxLoader(getTimestamp, giscloud_url + "rest/1/maps/" + mid + "/get_modified_timestamp.json?" + Math.random(), that)
        } else {
            getTimestamp(that, o)
        }
    }
	// 点在多边形内判断
	// URL: http://local.wasp.uwa.edu.au/~pbourke/geometry/insidepoly/
    function InsidePolygon(/*多边形数组*/d, x, y) {
        var counter = 0;
        var xinters;
        var p1, p2;
        var N = d.length / 2;
        p1x = d[0];
        p1y = d[1];
        for (var i = 1; i <= N; i++) {
            p2x = d[2 * (i % N)];
            p2y = d[2 * (i % N) + 1];
            if (y > minn(p1y, p2y)) {
                if (y <= maxx(p1y, p2y)) {
                    if (x <= maxx(p1x, p2x)) {
                        if (p1y != p2y) {
                            xinters = (y - p1y) * (p2x - p1x) / (p2y - p1y) + p1x;
                            if (p1x == p2x || x <= xinters) {
                                counter++
                            }
                        }
                    }
                }
            }
            p1x = p2x;
            p1y = p2y
        }
        if (counter % 2 == 0) {
            return 0
        } else {
            return 1
        }
    }
	
    function TouchesPath(d, x, y, r) {
        var i;
        var N = d.length;
        var p1x = d[0];
        var p1y = d[1];
        for (var i = 2; i < N; i += 2) {
            var p2x = d[i];
            var p2y = d[i + 1];
            var dirx = p2x - p1x;
            var diry = p2y - p1y;
            var diffx = x - p1x;
            var diffy = y - p1y;
            var t = 1 * (diffx * dirx + diffy * diry * 1) / (dirx * dirx + diry * diry * 1);
            if (t < 0) {
                t = 0
            }
            if (t > 1) {
                t = 1
            }
            var closestx = p1x + t * dirx;
            var closesty = p1y + t * diry;
            var dx = x - closestx;
            var dy = y - closesty;
            if ((dx * dx + dy * dy) <= r * r) {
                return 1
            }
            p1x = p2x;
            p1y = p2y
        }
        return 0
    }

    function checkForEvent(evt, force, delta) {
        if (!force && isMouseDown) {
            return
        }
        var c = evt.currentTarget;
        var x, y;
        if (evt.offsetX >= 0) {
            x = evt.offsetX;
            y = evt.offsetY
        } else {
            x = evt.layerX;
            y = evt.layerY
        }
        x += c._offset;
        y += c._offset;
        return handleEvent(c, x, y, evt, delta)
    }
    var hoverModifier = {};

    function handleEvent(c, x, y, evt, delta) {
        if (!selectionEnabled || !c.obj.getSelectable() || c.data_type == "text") {
            return false
        }
        var cc = c;
        var d = c.data;
        if (!d) {
            return false
        }
        var r = 4;
        if (!delta) {
            delta = 0
        }
        if (c.data_type == "point") {
            r = delta
        }
        var xr = x + r;
        var xl = x - r;
        var yt = y - r;
        var yb = y + r;
        var minpoint_dist = 100000;
        var last_point_index = -1;
        var candidate = -1;
        var i;
        for (i = d.length - 1; i >= 0; i--) {
            if (d[i].visible && xr >= d[i].b.xmin && xl <= d[i].b.xmax && yb >= d[i].b.ymin && yt <= d[i].b.ymax && (d[i].ispoint || (d[i].ispoly && !d[i].ispoint && InsidePolygon(d[i].p, x, y)) || (!d[i].ispoly && !d[i].ispoint && TouchesPath(d[i].p, x, y, r)))) {
                if (d[i].ispoint) {
                    var dist = pointDistance(d[i].x, d[i].y, x, y);
                    if (dist < minpoint_dist) {
                        candidate = i;
                        minpoint_dist = dist
                    }
                } else {
                    candidate = i
                }
            }
        }
        if (candidate >= 0) {
            var elems = new Array();
            var firstElem = candidate;
            elems[0] = d[candidate];
            var selected = d[firstElem];
            if (hoverModifier.isset) {
                if (c.obj._hoveredElement === selected.c && c.obj === hoverModifier.orig_obj) {
                    return elems
                }
                clearHover()
            }
            if (!c.obj.modifier[selected.c]) {
                var style_index = 0;
                if (selected.ispoint) {
                    style_index = selected.i
                } else {
                    style_index = selected.s
                }
                hoverModifier.isset = true;
                hoverModifier.color = c.styles[style_index].highlightcolor;
                hoverModifier.hover = true;
                hoverModifier.orig = c.obj.modifier[selected.c];
                hoverModifier.orig_obj = c.obj;
                hoverModifier.orig_key = selected.c;
                c.obj.modifier[selected.c] = hoverModifier;
                c.obj._hoveredElement = selected.c
            } else {
                c.obj._hoverModifier = null
            }
            drawAcrossTiles(c.obj, true);
            if (c.fields && c.fields[elems[0].c]) {
                elems[0].attributes = c.fields[elems[0].c]
            }
            return elems
        }
        if (hoverModifier.isset && c.obj === hoverModifier.orig_obj) {
            clearHover()
        }
        return false
    }

    function setupTile(el, data) {
        if (!el.dyndata || !data.tile) {
            return
        }
        el.styles = el.obj.getFeatures();
        var g = data.geom;
        var c = 0;
        var s;
        var sindex;
        var l = data.tile.l;
        var slen = l.length - 1;
        var style = 0;
        var id;
        for (var i = 0, len = g.length; i < len; i++) {
            var c = g[i].c.split("_")[1];
            if (el.dyndata[c]) {
                g[i].dyn = el.dyndata[c]
            }
        }
        for (var i = 0; i < slen; i += 5) {
            if (l[i] < 0) {
                id = -l[i];
                style = l[i + 1];
                i++
            } else {
                id = l[i]
            }
            var x = l[i + 1];
            var y = l[i + 2];
            var dx = l[i + 3];
            var dy = l[i + 4];
            var o = {
                p: [x, y, x + dx, y + dy],
                id: id,
                s: style,
                c: el._layer.id + "_" + id,
                px: true
            };
            if (el.dyndata[o.id] >= 0) {
                o.dyn = el.dyndata[o.id]
            }
            g.push(o)
        }
        data.geom.sort(function (a, b) {
            return b.dyn - a.dyn
        });
        el.pixels2 = null;
        data.tile.pixels = null
    }

    function drawTile(el, data) {
        if (loader_id === el._loader_id) {
            el._offset = 0;
            if (el._drawn) {
                ctx = el.getContext("2d");
                ctx.clearRect(0, 0, el.width, el.height)
            }
            el._drawn = true;
            el.draw = function () {};
            if (el._layer.options.dynamic && data[1]) {
                el.dyndata = data[1];
                data = data[0]
            }
            if (data.tile) {
                if (data.tile.type == "text") {
                    drawText(el, data);
                    delete data.geom
                }
                if (data.tile.type == "point") {
                    initStyles(el);
                    parsePoint(el, data);
                    el.draw();
                    delete data.geom
                }
            }
            if (data.geom) {
                setupTile(el, data);
                el.styles = data.styles;
                initStyles(el);
                drawGeom(el, data)
            }
        }
        delete data.tile;
        delete data.fields;
        delete data
    }

    function redraw(that) {
        var ctx, w, o;
        var c = that.getCanvases();
        for (var i in c) {
            o = c[i];
            ctx = o.getContext("2d");
            ctx.clearRect(0, 0, o.width, o.height);
            if (o.data_type == "point") {
                if (!o._drawn) {
                    continue
                }
                w = o.width;
                o.width = 1;
                o.width = w;
                o._original = null;
                o.draw()
            } else {
                drawGeomInternal(o)
            }
        }
    }

    function drawAcrossTiles(that, toClear) {
        var i;
        var c = that.getCanvases();
        for (i in c) {
            toClear && clearTile(c[i]);
            drawTileUsingModifier(c[i], that)
        }
    }

    function clearTile(tile) {
        if (tile._modified && tile._original) {
            ctx = tile.getContext("2d");
            rectCrop(tile._invalidateRect, 0, ctx.canvas.width);
            var w = tile._invalidateRect.xmax - tile._invalidateRect.xmin;
            var h = tile._invalidateRect.ymax - tile._invalidateRect.ymin;
            if (w > 0 && h > 0) {
                ctx.clearRect(tile._invalidateRect.xmin, tile._invalidateRect.ymin, w, h);
                ctx.drawImage(tile._original, tile._invalidateRect.xmin, tile._invalidateRect.ymin, w, h, tile._invalidateRect.xmin, tile._invalidateRect.ymin, w, h)
            }
            tile._invalidateRect = null;
            tile._modified = false
        }
    }

    function drawTileUsingModifier(tile, that) {
        var ctx, id, j, lst, use_custom_renderer;
        tile._path = null;
        ctx = null;
        use_custom_renderer = giscloud.mapFeatureRenderer != null;
        for (id in that.modifier) {
            if (!tile.lista || !tile.lista[id] || tile.lista[id].length == 0) {
                continue
            }
            if (!tile._original) {
                tile._original = document.createElement("canvas");
                tile._original.width = tile.width;
                tile._original.height = tile.height;
                tile._original.getContext("2d").drawImage(tile, 0, 0)
            }
            if (!ctx) {
                ctx = tile.getContext("2d")
            }
            lst = tile.lista[id];
            for (j in lst) {
                var d = tile.data[lst[j]];
                if (!d || !d.b) {
                    continue
                }
                tile._modified = true;
                var offset = 0;
                if (d.ispoint) {
                    drawImage(that, ctx, d, null, that.modifier[id])
                } else {
                    finishPoly(ctx);
                    var s = overrideStyle(tile.styles[d.s], that.modifier[id]);
                    offset = 0;
                    if (use_custom_renderer) {
                        var w = {};
                        for (var k in s) {
                            w[k] = s[k]
                        }
                        s = w;
                        giscloud.mapFeatureRendererHighlight(d, s)
                    }
                    s.linewidth && (offset = s.linewidth);
                    s.width && (offset += s.width);
                    drawCanvasPolygon(ctx, d.p, s, d.s, id, null, 1, use_custom_renderer)
                }
                if (!tile._invalidateRect) {
                    tile._invalidateRect = {};
                    rectAssign(tile._invalidateRect, d.b, offset)
                } else {
                    rectUnion(tile._invalidateRect, d.b, offset)
                }
            }
        }
        if (ctx) {
            finishPoly(ctx)
        }
    }

    function clearHover() {
        var o_obj = hoverModifier.orig_obj;
        if (o_obj.modifier[hoverModifier.orig_key] && o_obj.modifier[hoverModifier.orig_key].hover) {
            if (hoverModifier.orig) {
                o_obj.modifier[hoverModifier.orig_key] = hoverModifier.orig
            } else {
                delete o_obj.modifier[hoverModifier.orig_key]
            }
            drawAcrossTiles(o_obj, true)
        }
        hoverModifier.isset = false
    }
	// 样式覆盖
    function overrideStyle(orig, o) {
        var r = {};
        if (o.color) {
            var color;
            if (o.color === "selectcolor") {
                color = orig.selectcolor
            } else {
                color = o.color
            }
            r.color = color;
            if (orig.strokecolor) {
                if (orig.type != "polygon") {
                    r.strokecolor = color
                } else {
                    r.strokecolor = orig.strokecolor
                }
            }
            if (orig.fillcolor) {
                r.fillcolor = color
            }
        } else {
            if (orig.strokecolor && o.strokecolor) {
                r.strokecolor = o.strokecolor
            } else {
                r.strokecolor = orig.strokecolor
            }
            if (orig.fillcolor && o.fillcolor) {
                r.fillcolor = o.fillcolor
            } else {
                r.fillcolor = orig.fillcolor
            }
            r.innerlinewidth = orig.innerlinewidth
        }
        r.linewidth = orig.linewidth;
        r.type = orig.type;
        r.visible = orig.visible;
        return r
    }
	// 调整传统样式
    function adjustLegacyStyles(styles) {
        for (var i = 0, len = styles.length; i < len; i++) {
            if (styles[i].lw * 1 > 0) {
                styles[i].linewidth = styles[i].lw * 1
            }
            if (styles[i].iw * 1 > 0) {
                styles[i].innerlinewidth = styles[i].iw * 1
            }
            styles[i].fillcolor = styles[i].f;
            styles[i].strokecolor = styles[i].s;
            if (styles[i].i) {
                styles[i].innerstrokecolor = styles[i].i
            }
            if (styles[i].f) {
                styles[i].type = "polygon"
            }
        }
    }

    function initStyles(el) {
        if (el.styles) {
            adjustLegacyStyles(el.styles)
        } else {
            el.styles = el.obj.getFeatures()
        }
        for (var i = 0, len = el.styles.length; i < len; i++) {
            if (el.styles[i].type == "polygon") {
                if (!el.styles[i].linewidth) {
                    el.styles[i].linewidth = 1
                }
                if (el.styles[i].fillcolor) {
                    el.styles[i].predominantColor = el.styles[i].fillcolor
                } else {
                    el.styles[i].predominantColor = el.styles[i].strokecolor
                }
            } else {
                if (el.styles[i].innerstrokecolor && el.styles[i].innerlinewidth > 0) {
                    el.has_inner_line = true
                }
            }
            if (!el.styles[i].predominantColor) {
                if (el.styles[i].strokecolor) {
                    el.styles[i].predominantColor = el.styles[i].strokecolor
                } else {
                    if (el.styles[i].color) {
                        el.styles[i].predominantColor = el.styles[i].color
                    } else {
                        el.styles[i].predominantColor = "#000000"
                    }
                }
            }
            var c = common.getHighlightAndSelectColors(el.styles[i].predominantColor);
            el.styles[i].highlightcolor = c[0];
            el.styles[i].selectcolor = c[1]
        }
    }

    function drawGeom(el, data) {
        if (!el.getContext) {
            return
        }
        var geom = data.geom;
        if (!el.lista) {
            el.lista = []
        }
        var ctx = el.getContext("2d");
        el.data = geom;
        el.data_type = "geom";
        el.fields = data.fields;
        var that = el.obj;
        var len = geom.length;
        var sindex = -1;
        var s = null;
        var object, g;
        var i, j, glen;
        var offset = 0;
        var precision = 0;
        if (el._layer.options.offset) {
            offset = el._layer.options.offset
        }
        if (el._layer.options.precision) {
            precision = el._layer.options.precision
        }
        if (data.tile && data.tile.pixels) {
            el.pixels = data.tile.pixels;
            data.tile.pixels = null
        }
        for (i = len - 1; i >= 0; i--) {
            object = geom[i];
            if (object.s >= 0) {
                sindex = object.s
            } else {
                object.s = sindex
            }
            b = {};
            if (!el.lista[object.c]) {
                el.lista[object.c] = []
            }
            el.lista[object.c].push(i);
            if (sindex != -1) {
                s = el.styles[sindex]
            }
            if (s.type == "polygon") {
                object.ispoly = 1
            }
            if (!object.initialized) {
                var g = object.p;
                glen = g.length;
                if (precision > 0) {
                    for (j = 0; j < glen; j++) {
                        g[j] /= precision
                    }
                }
                if (offset > 0) {
                    doOffset(object, offset)
                }
                g = object.p;
                b = {};
                b.xmin = b.xmax = g[0];
                b.ymin = b.ymax = g[1];
                for (j = 2; j < glen; j += 2) {
                    if (g[j] < b.xmin) {
                        b.xmin = g[j]
                    } else {
                        if (g[j] > b.xmax) {
                            b.xmax = g[j]
                        }
                    }
                    if (g[j + 1] < b.ymin) {
                        b.ymin = g[j + 1]
                    } else {
                        if (g[j + 1] > b.ymax) {
                            b.ymax = g[j + 1]
                        }
                    }
                }
                b.xmin = Math.floor(b.xmin);
                b.ymin = Math.floor(b.ymin);
                b.xmax = Math.ceil(b.xmax);
                b.ymax = Math.ceil(b.ymax);
                object.initialized = true;
                object.b = b;
                object.visible = true
            }
        }
        el.data = geom;
        geom = null;
        data.geom = null;
        data.style = null;
        drawGeomInternal(el)
    }

    function drawGeomInternal(el) {
        var geom, ctx, len, user_custom_renderer;
        geom = el.data;
        el._original = null;
        if (!geom) {
            return
        }
        ctx = el.getContext("2d");
        len = geom.length;
        if (el.pixels) {
            drawPixels(ctx, el)
        }
        use_custom_renderer = giscloud.mapFeatureRenderer != null;
        for (i = len - 1; i >= 0; i--) {
            object = geom[i];
            sindex = object.s;
            if (sindex != -1) {
                s = el.styles[sindex]
            }
            if (use_custom_renderer) {
                var w = {};
                for (var k in s) {
                    w[k] = s[k]
                }
                s = w;
                giscloud.mapFeatureRenderer(object, s)
            }
            object.curs = s;
            drawCanvasPolygon(ctx, object.p, object.curs, object.s, el.lastP, null, 1, use_custom_renderer)
        }
        finishPoly(ctx);
        if (el.has_inner_line) {
            for (i = len - 1; i >= 0; i--) {
                object = geom[i];
                drawCanvasPolygon(ctx, object.p, object.curs, object.s, el.lastP, null, 2, use_custom_renderer)
            }
            finishPoly2(ctx)
        }
        if (el.obj.modifier) {
            drawTileUsingModifier(el, el.obj)
        }
    }

    function drawCanvasPolygon(ctx, d, c, cindex, id, clear, mode, forcerender) {
        if (c.visible === false) {
            return
        }
        var el, len, j;
        el = ctx.canvas;
        if (el.last_c && el.last_c_index != cindex || forcerender) {
            if (mode != 2) {
                finishPoly(ctx)
            } else {
                finishPoly2(ctx)
            }
        }
        if (!el._path) {
            if (clear) {
                ctx.globalCompositeOperation = "destination-out"
            }
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.beginPath();
            el._path = 1;
            el.last_c = c;
            el.last_c_index = cindex
        }
        len = d.length;
        ctx.moveTo(d[0], d[1]);
        for (j = 2; j < len; j += 2) {
            ctx.lineTo(d[j], d[j + 1])
        }
        if (clear) {
            finishPoly(ctx);
            ctx.globalCompositeOperation = "source-over"
        }
        el.lastP = id
    }

    function finishPoly(ctx) {
        var el = ctx.canvas;
        if (!el.last_c) {
            return
        }
        var c = el.last_c;
        if (c.icon && c.icon_image) {
            if (!c.pattern) {
                c.pattern = ctx.createPattern(c.icon_image, "repeat")
            }
            ctx.fillStyle = c.pattern;
            ctx.fill()
        } else {
            if (c.fillcolor) {
                ctx.fillStyle = c.fillcolor;
                ctx.fill()
            }
        }
        if (c.strokecolor && c.linewidth > 0) {
            ctx.lineWidth = c.linewidth;
            ctx.strokeStyle = c.strokecolor;
            ctx.stroke()
        }
        el.last_c = null;
        el.last_c_index = null;
        el._path = 0
    }

    function finishPoly2(ctx) {
        var el = ctx.canvas;
        if (!el.last_c) {
            return
        }
        var c = el.last_c;
        if (c.innerstrokecolor) {
            ctx.strokeStyle = c.innerstrokecolor;
            ctx.lineWidth = c.innerlinewidth;
            ctx.stroke()
        }
        el.last_c = null;
        el.last_c_index = null;
        el._path = 0
    }

    function parsePoint(el, data) {
        var offset = 10;
        var i, d;
        var has_fields = 0;
        expandCanvas(el, offset);
        el.data_type = "point";
        el.data = data.tile.data;
        el.fields = data.fields;
        el.lista = [];
        if (data.fields) {
            has_fields = 1
        }
        for (i = 0; i < el.data.length; i++) {
            d = el.data[i];
            d.x = offset + Math.round(((d.x - bounds.xmin) / bounds.max * Math.pow(2, el.zoom) - el.coord.x) * 256);
            d.y = offset + Math.round(((bounds.ymax - d.y) / bounds.max * Math.pow(2, el.zoom) - el.coord.y) * 256);
            d.id = d.id.replace("||", "_");
            d.c = d.id;
            d.ispoint = true;
            if (has_fields) {
                d.data = data.fields[d.id]
            }
            if (!el.lista[d.c]) {
                el.lista[d.c] = []
            }
            el.lista[d.c].push(i)
        }
        el.draw = drawPoint
    }

    function drawPoint(use_modifier) {
        var ctx = this.getContext("2d");
        var f = null;
        if (this.obj.feature_filter && this.obj.feature_filter.filter) {
            f = this.obj.feature_filter.filter
        }
        for (var i = 0; i < this.data.length; i++) {
            drawImage(this.obj, ctx, this.data[i], f)
        }
        if (this.obj.modifier) {
            drawTileUsingModifier(this, this.obj)
        }
    }

    function getImageOverlay(imgs, modifier) {
        var c;
        if (imgs.icon_image_overlay && imgs.icon_image_overlay[modifier.color]) {
            c = imgs.icon_image_overlay[modifier.color]
        } else {
            c = document.createElement("canvas");
            c.width = img.width;
            c.height = img.height;
            var ic_ctx = c.getContext("2d");
            ic_ctx.drawImage(img, 0, 0);
            ic_ctx.globalAlpha = 0.7;
            var style = overrideStyle(imgs, modifier);
            ic_ctx.fillStyle = style.color;
            ic_ctx.beginPath();
            ic_ctx.rect(0, 0, c.width, c.height);
            ic_ctx.globalCompositeOperation = "source-in";
            ic_ctx.fill();
            if (!imgs.icon_image_overlay) {
                imgs.icon_image_overlay = []
            }
            imgs.icon_image_overlay[modifier.color] = c
        }
        return c
    }

    function drawImage(obj, ctx, d, f, modifier) {
        if (!f) {
            if (obj.feature_filter && obj.feature_filter.filter) {
                f = obj.feature_filter.filter
            }
        }
        var magnify = 1;
        var imgs = obj.getFeatureClass(d.i);
        if (imgs.iready && (!f || (d.data && f(d.data)))) {
            img = imgs.icon_image;
            if (modifier) {
                var w = Math.round(img.width * magnify);
                var h = Math.round(img.height * magnify);
                d.b = {
                    xmin: Math.floor(d.x - w / 2),
                    ymin: Math.floor(d.y - h / 2),
                    xmax: d.x + w,
                    ymax: d.y + h
                };
                ctx.drawImage(img, 0, 0, img.width, img.height, d.b.xmin, d.b.ymin, w, h);
                var c = getImageOverlay(imgs, modifier);
                ctx.drawImage(c, 0, 0, img.width, img.height, d.b.xmin, d.b.ymin, w, h)
            } else {
                d.b = {
                    xmin: Math.floor(d.x - img.width / 2),
                    ymin: Math.floor(d.y - img.height / 2),
                    xmax: d.x + img.width / 2,
                    ymax: d.y + img.height / 2
                };
                ctx.drawImage(img, d.b.xmin, d.b.ymin)
            }
            d.visible = true
        } else {
            d.visible = false
        }
    }

    function drawText(el, data) {
        var d = 100;
        expandCanvas(el, d);
        el.data_type = "text";
        var data = data.tile.data;
        var dlen = data.length;
        if (dlen < 1) {
            return
        }
        var f = el.obj.getFeatureClass(data[0].i);
        var ctx = el.getContext("2d");
        if (f.outline) {
            ctx.strokeStyle = "#" + f.outline.substr(2)
        } else {
            ctx.strokeStyle = "#fff"
        }
        if (f.color) {
            ctx.fillStyle = "#" + f.color.substr(2)
        } else {
            ctx.fillStyle = "#000"
        }
        var dx = 0;
        var dy = 0;
        f.dx && (dx = f.dx);
        f.dy && (dy = f.dy);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        var al = f.anchor;
        if (al) {
            if (al == "TL") {
                ctx.textBaseline = "top";
                ctx.textAlign = "left"
            } else {
                if (al == "T") {
                    ctx.textBaseline = "top"
                } else {
                    if (al == "TR") {
                        ctx.textBaseline = "top";
                        ctx.textAlign = "right"
                    } else {
                        if (al == "R") {
                            ctx.textAlign = "right"
                        } else {
                            if (al == "BR") {
                                ctx.textBaseline = "bottom";
                                ctx.textAlign = "right"
                            } else {
                                if (al == "B") {
                                    ctx.textBaseline = "bottom"
                                } else {
                                    if (al == "BL") {
                                        ctx.textBaseline = "bottom";
                                        ctx.textAlign = "left"
                                    } else {
                                        if (al == "L") {
                                            ctx.textAlign = "left"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        ctx.lineWidth = 3;
        ctx.font = data[0].fs + "px arial";
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        for (var i = 0; i < dlen; i++) {
            var text = data[i].text;
            var p = data[i].p;
            var plen = p.length;
            for (var k = 0; k < plen; k++) {
                ctx.save();
                ctx.translate(p[k][0] + d + dx, p[k][1] + d + dy);
                ctx.rotate(p[k][2] / 180 * Math.PI);
                ctx.strokeText(text, 0, 0);
                ctx.fillText(text, 0, 0);
                ctx.restore()
            }
        }
    }
	//绘制像素
    function drawPixels(/*上下文*/ctx, /*数据*/data) {
		// 创建空白ImageData对象
        var imgd = ctx.createImageData(ctx.canvas.width, ctx.canvas.height);
        var pix = imgd.data;
        var px = data.pixels;//数据的像素
        var slen = px.length;
        var c = 0;
        var r, g, b, k, i;
        r = g = b = 0;
        for (i = 1; i < slen; i++) {
            if (px[i] < 0) {
                k = px[i];
                if (px[i + 1] == 0) {
                    i++;
                    r = px[++i];
                    g = px[++i];
                    b = px[++i]
                }
                while (k++) {
                    pix[c * 4] = r;
                    pix[c * 4 + 1] = g;
                    pix[c * 4 + 2] = b;
                    pix[c * 4 + 3] = 255;
                    c++
                }
            } else {
                c += px[i]
            }
        }
        ctx.putImageData(imgd, 0, 0)
    }
	// 扩大、扩展
    function expandCanvas(el, d) {
        el.style.marginLeft = "-" + d + "px";
        el.style.marginTop = "-" + d + "px";
        el.width = el.width + d * 2;
        el.height = el.height + d * 2;
        el._offset = d
    }
	// 
    function rectUnion(a, b, offset) {
        if (b.xmin - offset < a.xmin) {
            a.xmin = b.xmin - offset
        }
        if (b.ymin - offset < a.ymin) {
            a.ymin = b.ymin - offset
        }
        if (b.xmax + offset > a.xmax) {
            a.xmax = b.xmax + offset
        }
        if (b.ymax + offset > a.ymax) {
            a.ymax = b.ymax + offset
        }
    }
	// 设置一组数据中最大最小值
    function rectCrop(a, min, max) {
        var i;
        for (i in a) {
            if (a[i] < min) {
                a[i] = min
            } else {
                if (a[i] > max) {
                    a[i] = max
                }
            }
        }
    }
	// 扩大区域
    function rectAssign(a, b, offset) {
        a.xmin = b.xmin - offset;
        a.ymin = b.ymin - offset;
        a.xmax = b.xmax + offset;
        a.ymax = b.ymax + offset
    }
	// 点间距离
    function pointDistance(x1, y1, x2, y2) {
        var dx = x1 - x2;
        var dy = y1 - y2;
        return Math.sqrt(dx * dx + dy * dy)
    }
	// 返回矢量对象
    function vector(x, y) {
        return {
            x: x,
            y: y
        }
    }

    function vectorAdd(V1, V2) {
        return vector(V1.x + V2.x, V1.y + V2.y)
    }

    function vectorSub(V1, V2) {
        return vector(V1.x - V2.x, V1.y - V2.y)
    }

    function scalarMul(s, V) {
        return vector(s * V.x, s * V.y)
    }

    function length(V) {
        return Math.sqrt(V.x * V.x + V.y * V.y)
    }

    function normalize(V) {
        return scalarMul(1 / length(V), V)
    }

    function offset(d, P1, P2) {
        var O, OP1, OP2;
        O = scalarMul(d, normalize(vector(P1.y - P2.y, P2.x - P1.x)));
        OP1 = vectorAdd(O, P1);
        OP2 = vectorAdd(O, P2);
        return [OP1, OP2]
    }

    function intersectLines(p1, p2, p3, p4, dist) {
        var dx1 = p2.x - p1.x;
        var dx2 = p4.x - p3.x;
        var dy1 = p2.y - p1.y;
        var dy2 = p4.y - p3.y;
        var den = dx1 * dy2 - dy1 * dx2;
        if (den < 0.0001) {
            return p3
        }
        var ub = (dx1 * (p1.y - p3.y) - dy1 * (p1.x - p3.x)) / den;
        if (ub * Math.sqrt(dx2 * dx2 + dy2 * dy2) > dist) {
            return p3
        } else {
            return {
                x: p3.x + ub * dx2,
                y: p3.y + ub * dy2
            }
        }
    }

    function doOffset(element, dist) {
        if (!element.px) {
            var a = element.p;
            var len = a.length;
            var v0 = vector(a[0], a[1]);
            var p1;
            var p2 = null;
            for (var i = 2; i < len; i += 2) {
                var v1 = v0;
                var v2 = vector(a[i], a[i + 1]);
                v0 = v2;
                var o = offset(dist / 10, v1, v2);
                if (p2) {
                    p1 = intersectLines(p1, p2, o[0], o[1], dist)
                } else {
                    p1 = o[0]
                }
                p2 = o[1];
                a[i - 2] = Math.round(p1.x * 10) / 10;
                a[i - 1] = Math.round(p1.y * 10) / 10;
                p1 = o[0]
            }
            a[len - 2] = Math.round(p2.x * 10) / 10;
            a[len - 1] = Math.round(p2.y * 10) / 10
        }
    }
	// 返回最大值
    function maxx(a, b) {
        if (a > b) {
            return a
        }
        return b
    }
	// 返回最小值
    function minn(a, b) {
        if (a < b) {
            return a
        }
        return b
    }

    function getTimestamp(el, d) {
        if (el.lid) {
            if (d.dynamic) {
                el.url_prefix = giscloud_tile_url + "d/" + d.modified + "/" + el.mid + "/" + el.lid;
                var t = new Date().getTime();
                el.url = giscloud_tile_url + "d/" + d.modified + "/" + el.mid + "/" + el.lid + "/dyn," + t + "/"
            } else {
                el.url = giscloud_tile_url + "t/" + d.modified + "/" + el.mid + "/" + el.lid + "/"
            }
        } else {
            if (fields) {
                el.url = giscloud_tile_url + "vt3/" + d.modified + "/" + el.mid + "/" + fields + "/"
            } else {
                el.url = giscloud_tile_url + "vt2/" + d.modified + "/" + el.mid + "/"
            }
        }
        var t;
        while (t = tile_buffer.pop()) {
            if (fields) {
                ajaxLoader(drawGeomCanvas, el.url + t.uri + ".json?fields=" + fields, t.tile)
            } else {
                ajaxLoader(drawGeomCanvas, el.url + t.uri + ".json", t.tile)
            }
        }
        if (el.map) {
            el.map.getDiv().firstChild.firstChild.firstChild.firstChild.style.zIndex = 150
        }
    }

    function jsonCanvas(ownerDocument, obj) {
        var d = ownerDocument.createElement("div");
        var c = ownerDocument.createElement("canvas");
        d.appendChild(c);
        d.c = c;
        c.od = ownerDocument;
        c.setAttribute("width", 256);
        c.setAttribute("height", 256);
        c.setAttribute("style", "position:relative");
        c.style.position = "relative";
        c.obj = obj;
        if (window.G_vmlCanvasManager) {
            G_vmlCanvasManager.initElement(c)
        }
        google.maps.event.addDomListener(c, "mousemove", function (evt) {
            checkForEvent(evt)
        });
        return d
    }

    function intersects(a, b) {
        if (a.xmax < b.xmin || a.xmin > b.xmax || a.ymax < b.ymin || a.ymin > b.ymax) {
            return false
        }
        return true
    }

    function intersects_array_element(a, b) {
        for (var i = 0; i < a.length; b++) {
            if (intersects(a[i], b)) {
                return true
            }
        }
        return false
    }
})(window, giscloud.exposeJQuery(), giscloud.common());
delete giscloud.common;