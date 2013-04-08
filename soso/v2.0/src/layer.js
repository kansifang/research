function a(b, c) {
    this._flashTileCanvas = b;
    this._loaderName = c;
    this._pendingMap = {};
    var d = this;
    r.addListener(b, "pushImages", function (a) {
        d._handlePushImages(a)
    })
}

function b(a) {
    this._tileContext = a
}

function c(a, b) {
    O.call(this, b);
    this._flashId = "_ssflc" + ++t;
    var d = {},
        e = this;
    d.ready = function () {
        e._flashReady = !0;
        e._laterSend();
        return !0
    };
    d.pushImages = function (a) {
        a = a.split("\\u7779\\u78ff");
        q.trigger(e, "pushImages", a)
    };
    window[this._flashId] = d;
    this._toLoads = {};
    this._drops = [];
    this._pending = [];
    this.render(a)
}

function d(a) {
    for (var b = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"], c = null, e = 0; e < b.length; ++e) {
        try {
            c = a.getContext(b[e])
        } catch (f) {}
        if (c) break
    }
    return c
}

function g(a, b) {
    this.tileCoord = a;
    this.url = b
}

function j(a, b, c) {
    this.z = a;
    this.x = b;
    this.y = c
}

function i(a, b) {
    n.call(this, b);
    this.render(a)
}

function l(a, b) {
    T.call(this, b);
    var c = b.getBackgroundColor();
    if (c) {
        var d = document.createElement("canvas");
        d.width = 1;
        d.height = 1;
        d = d.getContext("2d");
        d.fillStyle = c;
        d.rect(0, 0, 1, 1);
        d.fill();
        c = d.getImageData(0, 0, 1, 1);
        this._bgColor = [c.data[0] / 256, c.data[1] / 256, c.data[2] / 256, c.data[3] / 256]
    }
    this.render(a)
}

function h(a, b) {
    ca.call(this, b);
    this.render(a)
}

function m(a) {
    this._tileLayer = a;
    var b = a.get("tileSize");
    this._tileWidth = b.width;
    this._tileHeight = b.height;
    this._ready = !1;
    this._rev = 0;
    this.bindTo("map", a);
    this.bindTo("visible", a)
}

function o(a) {
    fa.call(this, a);
    this._priList = ["webgl", "canvas", "flash", "cssdom"];
    na ? this._priList = ["cssdom"] : la ? this._priList = ["webgl", "canvas", "cssdom"] : ma && (this._priList = ["canvas", "flash", "cssdom"]);
    this._useWebGL = !! a.get("useWebGL");
    this._useFlash = !! a.get("useFlash");
    this.bindsTo(["map", "baseLayer", "raster", "zIndex"], a);
    this._tileContext = new ga(a);
    this._tileCache = new ia(!0, pa ? 100 : 1024);
    var b = this;
    pa && qa.addDomListener(window, "unload", function () {
        b._tileCache.clear();
        b = null
    });
    this._tileCache.ondrop = ja(this._onDropTile, this);
    this._constructed = !1;
    this._rev = 1;
    this._blend = !0;
    this._blendTime = 1e3;
    this.get("baseLayer") ? this.get("raster") ? (this._alwaysBlend = !0, this._onlyFindDrawns = !1, this._findDownLevels = this._findUpLevels = !0, this._preloadUpLevel = this._loadUpLevels = 2) : (this._alwaysBlend = !1, this._findDownLevels = this._findUpLevels = this._onlyFindDrawns = !0, this._loadUpLevels = 0) : (this._blend = this._alwaysBlend = !1, this._onlyFindDrawns = !0, this._findDownLevels = this._findUpLevels = !1, this._preloadUpLevel = this._loadUpLevels = 0);
    this.bindTo("display", this._tileContext)
}
var r = p;
a.prototype.loadImage = function (a, b) {
    (this._pendingMap[a] || (this._pendingMap[a] = [])).push(b);
    this._flashTileCanvas.loaderLoadImage(this._loaderName, a)
};
a.prototype.clearQueue = function (a) {
    this._flashTileCanvas.clearLoaderQueue(this._loaderName, a);
    this._pendingMap = {}
};
a.prototype._handlePushImages = function (a) {
    for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if (jc.call(this._pendingMap, c)) {
            var d = this._pendingMap[c],
                e = {};
            e.src = c;
            for (b = 0; b < d.length; b++) d[b](e);
            delete this._pendingMap[c]
        }
    }
};
a.prototype.destroy = function () {
    this.clearQueue(!0);
    this._flashTileCanvas.destroyLoader(this._loaderName)
};
var y = function (a) {
    var b;
    return function () {
        a && (b = a(), a = null);
        return b
    }
},
    u = " -webkit- ms- -ms- -moz- -o-".split(" "),
    w = zb(function (a) {
        for (var b = b || document.createElement("div"), b = b.style, c = 0; c < u.length; c++) {
            var d = u[c] + a;
            if (Ab(d) in b) return "ms-" === u[c] ? "-ms-" + a : d
        }
        return null
    }),
    v = document.documentElement,
    D = function (a, b) {
        var c, d = document.createElement("div"),
            e = document.body,
            f = e || document.createElement("body");
        c = ['&#173;<style id="smodernizr">', a, "</style>"].join("");
        d.id = "modernizr";
        (e ? d : f).innerHTML += c;
        f.appendChild(d);
        e || (f.style.background = "", v.appendChild(f));
        c = b(d, a);
        !e ? f.parentNode.removeChild(f) : d.parentNode.removeChild(d);
        return !!c
    },
    E = !! w("perspective");
E && "webkitPerspective" in v.style && D("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (a) {
    E = 9 === a.offsetLeft && 3 === a.offsetHeight
});
var G = E,
    D = /webkit/i.test(Ka),
    F = "undefined" !== typeof Float32Array ? Float32Array : function () {
        function a(b) {
            this.length = b.length || b;
            for (var c = 0; c < this.length; c++) this[c] = b[c] || 0
        }
        a.BYTES_PER_ELEMENT = 4;
        a.prototype.BYTES_PER_ELEMENT = 4;
        a.prototype.set = function (a, b) {
            for (var b = b || 0, c = 0; c < a.length && b + c < this.length; c++) this[b + c] = a[c]
        };
        a.prototype.toString = Array.prototype.join;
        return a
    }();
b.prototype.getTileContext = function () {
    return this._tileContext
};
b.prototype.render = function () {};
b.prototype.blankFrame = function () {};
b.prototype.beginFrame = function () {};
b.prototype.endFrame = function () {};
b.prototype.createLoader = function (a) {
    return new V(a)
};
b.prototype.bufferTile = function () {
    return !0
};
b.prototype.unbufferTile = function () {
    return !0
};
b.prototype.drawTile = function () {};
b.prototype.getTileSize = function (a) {
    return this._tileContext.getTileSizeOfLevel(a.tileCoord.z)
};
b.prototype.getTileLeftTop = function (a) {
    return this._tileContext.getTileLeftTop(a)
};
b.prototype.notUseSubpixels = function () {
    return this._tileContext.notUseSubpixels()
};
b.prototype.destroy = function () {};
var K = Q,
    K = 6 === K || 7 === K,
    L = Kb || Jb || Hb,
    M = oa[13],
    N = oa[12],
    q = p,
    O = b,
    t = -1;
e(c, O);
c.prototype.getFlashId = function () {
    return this._flashId
};
c.prototype.render = function (a) {
    var b = a.ownerDocument.createElement("div");
    b.style.cssText = "position:absolute;left:0;top:0;";
    b.innerHTML = cb({
        id: this._flashId,
        movie: Ea + "c.swf",
        wmode: "transparent",
        allowscriptaccess: "always",
        flashvars: "id=" + this._flashId
    });
    a.appendChild(b);
    this._canvasElm = b
};
c.prototype.unbufferTile = function (a) {
    this._drops.push(a.image.src);
    this._laterSend()
};
c.prototype.createLoader = function (b) {
    var c = "loader" + ++t;
    this._toLoads[c] = [];
    var d = this._pending;
    d.push(1);
    d.push(c);
    d.push(b);
    this._laterSend();
    return new a(this, c)
};
c.prototype.loaderLoadImage = function (a, b) {
    this._toLoads[a].push(b);
    this._laterSend()
};
c.prototype.clearLoaderQueue = function (a, b) {
    this._toLoads[a] = [];
    var c = this._pending;
    c.push(2);
    c.push(a);
    c.push( !! b);
    this._laterSend()
};
c.prototype.blankFrame = function () {
    this._canvasElm.style.display = "none"
};
c.prototype.drawTile = function (a, b) {
    var c = this.getTileLeftTop(a),
        d = this.getTileSize(a),
        e = this._pending;
    e.push(6);
    e.push(b);
    e.push(5);
    e.push(5);
    e.push(a.image.src);
    e.push(c.x);
    e.push(c.y);
    this.notUseSubpixels() ? (e.push(d.x), e.push(d.y)) : (e.push(d.x + .5), e.push(d.y + .5))
};
c.prototype.beginFrame = function (a) {
    var b = document.getElementById(this._flashId);
    if (b) {
        if (a.x !== this._viewWidth || a.y !== this._viewHeight) this._viewWidth = a.x, this._viewHeight = a.y, b.width = this._viewWidth, b.height = this._viewHeight, this._canvasElm.style.cssText = "position:absolute;left:0;top:0;margin-left:-" + a.x / 2 + "px;margin-top:-" + a.y / 2 + "px";
        a = this._pending;
        a.push(7);
        a.push(0);
        a.push(0);
        a.push(this._viewWidth);
        a.push(this._viewHeight)
    }
};
c.prototype.endFrame = function () {
    this._send()
};
c.prototype._send = function () {
    var a = this._pending;
    if (this._drops.length) {
        a.push(4);
        a.push(this._drops.length);
        for (var b = 0; b < this._drops.length; b++) a.push(this._drops[b]);
        this._drops = []
    }
    for (var c = Qe(this._toLoads), b = 0; b < c.length; b++) {
        var d = c[b],
            e = this._toLoads[d];
        if (e.length) {
            a.push(3);
            a.push(d);
            a.push(e.length);
            for (var f = 0; f < e.length; f++) a.push(e[f]);
            this._toLoads[d] = []
        }
    }
    if (a.length && this._flashReady) {
        try {
            document.getElementById(this._flashId).CallFunction('<invoke name="postMessage" returntype="javascript"><arguments><string>' + a.join("\\u7779\\u78ff") + "</string></arguments></invoke>")
        } catch (g) {}
        this._pending = []
    }
};
c.prototype._laterSend = function () {
    var a = this;
    this._laterTimer || (this._laterTimer = setTimeout(function () {
        a._laterTimer = null;
        a._send()
    }, 0))
};
c.prototype.destroyLoader = function (a) {
    delete this._toLoads[a]
};
c.prototype.destroy = function () {
    this._send();
    clearTimeout(this._laterTimer);
    this._canvasElm.innerHTML = "";
    this._canvasElm = null
};
var R = y(function () {
    var a = document.createElement("canvas");
    a.width = 16;
    a.height = 16;
    return !(!a || !a.getContext)
}),
    S = y(function () {
        var a = !0;
        try {
            var b = document.createElement("canvas");
            b.addEventListener && b.addEventListener("webglcontextcreationerror", function () {
                a = !1
            }, !1);
            d(b) || (a = !1)
        } catch (c) {} finally {}
        return a
    });
g.prototype.failedCount = 0;
g.prototype.getKey = function () {
    return this._key || (this._key = this.tileCoord.buildKey())
};
j.prototype.buildKey = function () {
    return this.z + "/" + this.x + "_" + this.y
};
j.prototype.clone = function () {
    return new j(this.z, this.x, this.y)
};
var n = b,
    I = D ? 0 : 1;
e(i, n);
i.prototype.render = function (a) {
    var b = a.ownerDocument.createElement("div");
    a.appendChild(b);
    this._canvasElm = b
};
i.prototype.blankFrame = function () {
    this._canvasElm.style.display = "none"
};
i.prototype.beginFrame = function (a) {
    this._canvasElm.style.cssText = "position:absolute;margin-left:-" + Math.round(a.x / 2) + "px;margin-top:-" + Math.round(a.y / 2) + "px;";
    this._canvasElm.innerHTML = ""
};
i.prototype.drawTile = function (a, b) {
    var c = this.getTileLeftTop(a),
        d = this.getTileSize(a),
        e = a.image,
        f = ["position:absolute;"],
        g = w("transform"),
        h = d.x !== (d.x | 0) || d.y !== (d.y | 0) ? 1 : 0;
    g ? (f.push(w("transform-origin")), f.push(":0 0;"), f.push(g), f.push(":"), G && f.push("translate3d(0,0,0)"), f.push("matrix("), f.push(((d.x + I) / 256).toFixed(8)), f.push(",0,0,"), f.push(((d.y + I) / 256).toFixed(8)), f.push(","), f.push(c.x), f.push(","), f.push(c.y), f.push(");")) : (f.push("left:"), f.push(c.x), f.push("px;top:"), f.push(c.y), f.push("px;width:"), f.push(d.x + h), f.push("px;height:"), f.push(d.y + h), f.push("px;"));
    1 > b && ((c = w("opacity")) ? (f.push(c), f.push(":"), f.push(b), f.push(";")) : 8 <= document.documentMode ? (f.push('-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(opacity='), f.push(Math.ceil(100 * b)), f.push(')";')) : (f.push("filter:alpha(opacity="), f.push(Math.ceil(100 * b)), f.push(");")));
    e.style.cssText = f.join("");
    this._canvasElm.appendChild(e)
};
i.prototype.destroy = function () {
    this._canvasElm.innerHTML = "";
    Ma(this._canvasElm);
    this._canvasCtx = this._canvasElm = null
};
var T = b,
    U = function () {
        var a = new F(9);
        a[0] = 1;
        a[1] = 0;
        a[2] = 0;
        a[3] = 0;
        a[4] = 1;
        a[5] = 0;
        a[6] = 0;
        a[7] = 0;
        a[8] = 1;
        return a
    },
    W = function (a, b, c) {
        c || (c = a);
        var d = a[0],
            e = a[1],
            f = a[2],
            g = a[3],
            h = a[4],
            j = a[5],
            k = a[6],
            i = a[7],
            a = a[8],
            l = b[0],
            m = b[1],
            o = b[2],
            p = b[3],
            s = b[4],
            q = b[5],
            n = b[6],
            r = b[7],
            b = b[8];
        c[0] = l * d + m * g + o * k;
        c[1] = l * e + m * h + o * i;
        c[2] = l * f + m * j + o * a;
        c[3] = p * d + s * g + q * k;
        c[4] = p * e + s * h + q * i;
        c[5] = p * f + s * j + q * a;
        c[6] = n * d + r * g + b * k;
        c[7] = n * e + r * h + b * i;
        c[8] = n * f + r * j + b * a;
        return c
    },
    Z = function (a, b) {
        var c = new F(9);
        c[0] = 1;
        c[1] = 0;
        c[2] = 0;
        c[3] = 0;
        c[4] = 1;
        c[5] = 0;
        c[6] = a;
        c[7] = b;
        c[8] = 1;
        return c
    },
    aa = function (a, b, c) {
        var d = new F(9);
        d[0] = a;
        d[1] = 0;
        d[2] = 0;
        d[3] = 0;
        d[4] = b;
        d[5] = 0;
        d[6] = 0;
        d[7] = 0;
        d[8] = c;
        return d
    };
e(l, T);
var ba = {
    alpha: !1,
    preserveDrawingBuffer: !1,
    antialias: !0,
    stencil: !1,
    depth: !1
};
l.prototype.createLoader = function (a) {
    return new V(a, 16e3, !0)
};
l.prototype.clearColor = function () {
    this._bgColor ? this._gl.clearColor(this._bgColor[0], this._bgColor[1], this._bgColor[2], this._bgColor[3]) : this._gl.clearColor(.95703125, .95703125, .95703125, 1);
    this._gl.clear(this._gl.COLOR_BUFFER_BIT)
};
l.prototype.render = function (a) {
    var b = a.ownerDocument.createElement("canvas");
    a.appendChild(b);
    this._canvasElm = b;
    this._gl = b.getContext("webgl", ba) || b.getContext("experimental-webgl", ba);
    var c = this;
    this._canvasElm.addEventListener("webglcontextlost", function () {
        if (c.onlost) c.onlost()
    }, !1);
    this.initGL()
};
l.prototype.initGL = function () {
    var a = this._gl,
        b = a.createShader(a.VERTEX_SHADER);
    a.shaderSource(b, "precision mediump float;attribute vec4 aVertexPosition;uniform mat3 uMatrix;varying vec2 vTextureCoord;void main(void){vTextureCoord = aVertexPosition.zw;gl_Position = vec4(uMatrix * vec3(aVertexPosition.xy, 1), 1);}");
    a.compileShader(b);
    var c = a.createShader(a.FRAGMENT_SHADER);
    a.shaderSource(c, "precision mediump float;varying vec2 vTextureCoord;uniform sampler2D uSampler;uniform float uAlpha;void main(void){gl_FragColor = vec4(vec3(texture2D(uSampler, vTextureCoord)), uAlpha);}");
    a.compileShader(c);
    var d = a.createProgram();
    a.attachShader(d, b);
    a.attachShader(d, c);
    a.linkProgram(d);
    a.useProgram(d);
    a.disable(a.DEPTH_TEST);
    a.disable(a.SCISSOR_TEST);
    a.disable(a.CULL_FACE);
    a.enable(a.BLEND);
    a.blendFunc(a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA);
    this.clearColor();
    b = a.getAttribLocation(d, "aVertexPosition");
    a.enableVertexAttribArray(b);
    this._aVertexPosition = b;
    b = a.createBuffer();
    a.bindBuffer(a.ARRAY_BUFFER, b);
    a.bufferData(a.ARRAY_BUFFER, new F([0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1]), a.STATIC_DRAW);
    a.bindBuffer(a.ARRAY_BUFFER, null);
    this._aVertexPosition_buffer = b;
    this._uSampler = a.getUniformLocation(d, "uSampler");
    this._uMatrix = a.getUniformLocation(d, "uMatrix");
    this._uAlpha = a.getUniformLocation(d, "uAlpha");
    a = U();
    W(a, Z(-1, 1));
    this._matrix = a
};
l.prototype.blankFrame = function () {
    this._canvasElm.style.display = "none"
};
l.prototype.beginFrame = function (a) {
    this._canvasElm.width = a.x;
    this._canvasElm.height = a.y;
    this._canvasElm.style.cssText = "position:absolute;margin-left:-" + Math.round(a.x / 2) + "px;margin-top:-" + Math.round(a.y / 2) + "px;";
    this._gl.viewport(0, 0, a.x, a.y);
    this.clearColor();
    var b = U();
    W(b, Z(-1, 1));
    W(b, aa(2 / a.x, -2 / a.y, 1));
    this._matrix = b;
    this._beginTime = +(new Date)
};
l.prototype.bufferTile = function (a) {
    var b = this._gl,
        c = a._glTexture;
    c || (c = b.createTexture(), b.bindTexture(b.TEXTURE_2D, c), b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, b.RGBA, b.UNSIGNED_BYTE, a.image), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.LINEAR), b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.LINEAR), b.bindTexture(b.TEXTURE_2D, null), a._glTexture = c);
    return !0
};
l.prototype.unbufferTile = function (a) {
    var b = this._gl,
        c = a._glTexture;
    c && (b.deleteTexture(c), a._glTexture = null);
    return !0
};
l.prototype.drawTile = function (a, b) {
    var c = a._glTexture,
        d = this.getTileLeftTop(a),
        e = this.getTileSize(a),
        f = d.x,
        d = d.y,
        g = e.x,
        h = e.y,
        e = this._gl;
    e.bindTexture(e.TEXTURE_2D, c);
    e.uniform1i(this._uSampler, 0);
    e.activeTexture(e.TEXTURE0);
    e.bindBuffer(e.ARRAY_BUFFER, this._aVertexPosition_buffer);
    e.vertexAttribPointer(this._aVertexPosition, 4, e.FLOAT, !1, 0, 0);
    c = W(W(this._matrix, Z(f, d), new F(9)), aa(g, h, 1));
    e.uniformMatrix3fv(this._uMatrix, !1, c);
    e.uniform1f(this._uAlpha, b);
    e.drawArrays(e.TRIANGLE_FAN, 0, 4);
    e.bindTexture(e.TEXTURE_2D, null);
    e.bindBuffer(e.ARRAY_BUFFER, null)
};
l.prototype.destroy = function () {
    this._canvasElm && (Ma(this._canvasElm), this._gl = this._canvasElm = null)
};
var ca = b;
e(h, ca);
h.prototype.render = function (a) {
    var b = a.ownerDocument.createElement("canvas");
    a.appendChild(b);
    this._canvasElm = b;
    this._canvasCtx = b.getContext("2d")
};
h.prototype.blankFrame = function () {
    this._canvasElm.style.display = "none"
};
h.prototype.beginFrame = function (a) {
    this._canvasCtx.clearRect(0, 0, this._canvasElm.width, this._canvasElm.height);
    this._canvasElm.width = a.x;
    this._canvasElm.height = a.y;
    this._canvasElm.style.cssText = "position:absolute;margin-left:-" + Math.round(a.x / 2) + "px;margin-top:-" + Math.round(a.y / 2) + "px;"
};
h.prototype.drawTile = function (a, b) {
    var c = this.getTileLeftTop(a),
        d = this.getTileSize(a);
    this._canvasCtx.globalAlpha = null != b ? b : 1;
    this._canvasCtx.drawImage(a.image, c.x, c.y, d.x + 0, d.y + 0)
};
h.prototype.destroy = function () {
    Ma(this._canvasElm);
    this._canvasCtx = this._canvasElm = null
};
e(m, $);
var ea = "mapType projection mapCanvasProjection viewWidth viewHeight zoom center backgroundColor".split(" ");
m.prototype.changed = function (a) {
    if ("map" === a) {
        this._ready = !1;
        this.unbindAll(ea);
        this.set("display", 0);
        var b = this.get("map");
        b && this.bindsTo(ea, b)
    }
    this.get("mapType") && (this._ready = !0);
    "display" !== a && this._ready && this.get("visible") && this.set("display", ++this._rev)
};
m.prototype.getBackgroundColor = function () {
    return this.get("backgroundColor")
};
m.prototype.update = function () {
    if (!this._ready) return !1;
    var a = this._tileLayer,
        b = this.get("projection"),
        c = this.get("mapCanvasProjection"),
        d = this.get("viewWidth"),
        e = this.get("viewHeight"),
        f = this.get("zoom");
    this._mcp = c;
    this._viewSize = new x(d, e);
    this._level = f;
    var g = a.get("map");
    this._minLevel = Math.max(g.get("minZoom"), a.get("minZoom"));
    this._maxLevel = Math.min(g.get("maxZoom"), a.get("maxZoom"));
    this._optimalLevel = Math.round(f);
    g = c.fromLatLngToWorldPixel(this.get("center"), f);
    this._leftTopPixel = new x(g.x - d / 2, g.y - e / 2);
    this._optimalLevel === this._level && (this._leftTopPixel = new x(Math.round(this._leftTopPixel.x), Math.round(this._leftTopPixel.y)));
    this._leftTopPoint = c.fromWorldPixelToPoint(this._leftTopPixel, f);
    this._tileOrigin = a.get("tileOrigin") || new x(0, 0);
    this._scheme = a = a.get("scheme");
    var h;
    if (a && (h = b.getMaxExtent()))"xyz" === a ? this._tileOrigin = new x(h.minX, h.minY) : "tms" === a && (this._tileOrigin = new x(h.minX, h.maxY));
    this._tileOriginPixel = c.fromPointToWorldPixel(this._tileOrigin, f);
    return !0
};
m.prototype.getViewSize = function () {
    return this._viewSize
};
m.prototype.computeTileGrid = function (a) {
    var b = this._viewSize,
        c = this._leftTopPixel,
        d = this._tileOriginPixel,
        e = this.getTileSizeOfLevel(a),
        a = Math.floor((c.x - d.x) / e.x),
        f = Math.floor((c.y - d.y) / e.y),
        g = Math.ceil((c.x + b.x - d.x) / e.x),
        b = Math.ceil((c.y + b.y - d.y) / e.y);
    return new sa(a, f, g, b)
};
m.prototype.getZoomLevel = function () {
    return this._level
};
m.prototype.getOptimalLevel = function () {
    return this._optimalLevel
};
m.prototype.getMinLevel = function () {
    return this._minLevel
};
m.prototype.getMaxLevel = function () {
    return this._maxLevel
};
m.prototype.computeScale = function (a, b) {
    return Math.pow(2, a - b)
};
m.prototype.getTileSizeOfLevel = function (a) {
    a = this.computeScale(this._level, a);
    return new x(this._tileWidth * a, this._tileHeight * a)
};
m.prototype.getTileLeftTop = function (a) {
    var a = this.getTileWorldLeftTop(a),
        b = this.getViewWorldLeftTop();
    return new x(a.x - b.x, a.y - b.y)
};
m.prototype.getViewWorldLeftTop = function () {
    return this._leftTopPixel
};
m.prototype.notUseSubpixels = function () {
    return this._optimalLevel === this._level
};
m.prototype.getTileWorldLeftTop = function (a) {
    var a = a.tileCoord,
        b = this.getTileSizeOfLevel(a.z),
        c = this._tileOriginPixel;
    return new x(a.x * b.x + c.x, a.y * b.y + c.y)
};
m.prototype.sortTiles = function (a, b) {
    var c = this.getTileSizeOfLevel(b),
        d = new x(this._viewSize.x / 2 - c.x / 2, this._viewSize.y / 2 - c.y / 2),
        e = this;
    a.sort(function (a, b) {
        var c = e.getTileLeftTop(a),
            f = e.getTileLeftTop(b);
        return (c.x - d.x) * (c.x - d.x) + (c.y - d.y) * (c.y - d.y) - ((f.x - d.x) * (f.x - d.x) + (f.y - d.y) * (f.y - d.y))
    });
    return a
};
m.prototype.buildTileUrl = function (a, b) {
    return this._tileLayer.getTileUrl("xyz" === this._scheme ? new x(a.x, -a.y - 1) : new x(a.x, a.y), a.z, b)
};
var ga = m,
    ia = H,
    fa = xa,
    ja = Cb,
    la = nb,
    ma = Q,
    na = L,
    qa = p,
    pa = K;
e(o, fa);
o.prototype.changed = function (a) {
    "display" === a ? this.get("display") ? (this._constructed || this.construct(), this.redraw()) : this._constructed && this.destroy() : "zIndex" === a && this._div && (this._div.style.zIndex = this._getZIndex())
};
o.prototype._createTileCanvas = function (a, b) {
    switch (a) {
    case "flash":
        if (N && this._useFlash && Ja() && 0 <= La(Ja(), "10.0.0")) return new c(b, this._tileContext);
        break;
    case "webgl":
        if (M && this._useWebGL && S() && this.get("baseLayer")) return new l(b, this._tileContext);
        break;
    case "canvas":
        if (R()) return new h(b, this._tileContext);
        break;
    default:
        return new i(b, this._tileContext)
    }
    return null
};
o.prototype.createTileCanvas = function (a) {
    if (this.get("baseLayer")) for (var b = 0; b < this._priList.length; b++) {
        var c = this._createTileCanvas(this._priList[b], a);
        if (c) return c
    }
    return new i(a, this._tileContext)
};
o.prototype.construct = function () {
    var a = this.get("map").get("panes").tilePane,
        b = a.ownerDocument.createElement("div");
    b.style.cssText = "position:absolute;left:0;top:0;";
    b.style.zIndex = this._getZIndex();
    a.appendChild(b);
    this._tileCanvas = this.createTileCanvas(b);
    var c = this;
    this._tileCanvas.onlost = function () {
        c._lastLostTime = +(new Date);
        c.destroy();
        setTimeout(function () {
            c.construct();
            c.redraw()
        })
    };
    this._div = b;
    this._loader = this._tileCanvas.createLoader(4);
    this._preloader = this._tileCanvas.createLoader(2);
    this._constructed = !0
};
o.prototype._getZIndex = function () {
    return this.get("baseLayer") ? 0 : Math.max(this.get("zIndex") | 0, 0) + 1
};
o.prototype.destroy = function () {
    this._loader.destroy();
    this._preloader.destroy();
    this._preloader = this._loader = null;
    this._tileCache.clear();
    this._tileCanvas.destroy();
    Ma(this._div);
    this._div = null;
    this._constructed = !1
};
o.prototype._onDropTile = function (a) {
    this._tileCanvas && this._tileCanvas.unbufferTile(a);
    a.image = null
};
o.prototype.draw = function () {
    var a = this._tileContext;
    if (!1 !== a.update()) {
        var b = this._tileCanvas;
        this._loader.clearQueue(!1);
        this._preloader.clearQueue(!1);
        if (!this.get("baseLayer") && a.getZoomLevel() !== a.getOptimalLevel()) b.blankFrame();
        else if (a.getZoomLevel() < a.getMinLevel() || a.getZoomLevel() > a.getMaxLevel()) b.blankFrame();
        else {
            var c = !1,
                d = a.getOptimalLevel(),
                e = a.computeTileGrid(d);
            if (e.isEmpty()) b.blankFrame();
            else {
                b.beginFrame(a.getViewSize());
                for (var f = this._tileCache, h = [], k = [], i = new j(0, 0, 0), l = [], m = [], o = [], m = this._drawnTiles || [], p = {}, s = {}, q = m.length; q--;) {
                    var n = m[q];
                    if (!(1 > n._alpha)) if (i.z = n.tileCoord.z, i.x = n.tileCoord.x, i.y = n.tileCoord.y, i.z === d) p[i.buildKey()] |= 16;
                    else if (i.z < d) {
                        if (p[i.buildKey()] |= 64, this._findUpLevels) {
                            var r = d - i.z,
                                t = Math.max(e.minX, i.x << r),
                                x = Math.min(e.maxX, (i.x + 1 << r) - 1),
                                y = Math.max(e.minY, i.y << r),
                                r = Math.min(e.maxY, (i.y + 1 << r) - 1);
                            i.z = d;
                            for (var u = t; u <= x; u++) {
                                i.x = u;
                                for (var w = y; w <= r; w++) {
                                    i.y = w;
                                    var v = i.buildKey();
                                    p[v] |= 32;
                                    s[v] = s[v] ? Math.max(n.tileCoord.z, s[v]) : n.tileCoord.z
                                }
                            }
                        }
                    } else if (this._findDownLevels) for (v = 1; i.z >= d;) {
                        p[i.buildKey()] |= v;
                        t = i.x >> 1;
                        y = i.y >> 1;
                        x = t << 1;
                        r = y << 1;
                        n = 0;
                        for (u = 2; u--;) {
                            i.x = x + u;
                            for (w = 2; w--;) i.y = r + w, p[i.buildKey()] & 5 && n++
                        }--i.z;
                        i.x = t;
                        i.y = y;
                        v = 4 === n ? 4 : 2
                    }
                }
                m = [];
                i.z = d;
                x = +(new Date);
                for (u = e.minX; u <= e.maxX; u++) {
                    i.x = u;
                    for (w = e.minY; w <= e.maxY; w++) {
                        i.y = w;
                        n = this.getTile(i);
                        v = i.buildKey();
                        t = !1;
                        if (n.image) if (m.push(n), v = p[v], v & 36) {
                            if (n._rev !== this._rev || 1 > n._alpha) t = !0
                        } else n._noAlpha = !0;
                        else t = !0, n.loaded || l.push(n);
                        t && o.push(n)
                    }
                }
                h.push(m);
                k.push(l);
                if (this._findDownLevels) {
                    o = o.slice(0);
                    l = [];
                    for (q = o.length; q--;) n = o[q], p[n.getKey()] & 4 || l.push(n);
                    n = a.getMaxLevel();
                    for (r = d + 1; o.length && r <= n; r++) {
                        var m = [],
                            B = o,
                            o = [];
                        i.z = r;
                        for (q = B.length; q--;) if (u = B[q], v = p[u.getKey()], v & 7) {
                            t = u.tileCoord.x << 1;
                            y = u.tileCoord.y << 1;
                            for (u = 2; u--;) {
                                i.x = t + u;
                                for (w = 2; w--;) {
                                    i.y = y + w;
                                    var v = i.buildKey(),
                                        C = f.peek(v);
                                    p[v] & 5 && C && C.image ? (C._noAlpha = !0, m.push(C)) : o.push(new g(i.clone(), ""))
                                }
                            }
                        }
                        h.push(m)
                    }
                    o = l
                }
                if (this._findUpLevels) {
                    f = a.getMinLevel();
                    u = Math.max(f, d - this._loadUpLevels);
                    for (r = d - 1; o.length && r >= f; r--) {
                        w = r >= u;
                        l = [];
                        m = [];
                        y = {};
                        B = o;
                        o = [];
                        for (q = B.length; q--;) n = B[q], i.z = r, i.x = n.tileCoord.x >> 1, i.y = n.tileCoord.y >> 1, n = this.getTile(i, !w), y[n.getKey()] || (y[n.getKey()] = 1, t = !1, n.image && (!this._onlyFindDrawns || p[n.getKey()] & 64) ? (i.x = Math.min(e.maxX, Math.max(e.minX, i.x << d - r)), i.y = Math.min(e.maxY, Math.max(e.minY, i.y << d - r)), i.z = d, v = i.buildKey(), "number" === typeof s[v] && n.tileCoord.z > s[v] ? t = !0 : n._noAlpha = !0, m.push(n)) : (t = !0, w && !n.loaded && l.push(n)), t && o.push(n));
                        m.length && h.push(m);
                        w && l.length && k.push(l)
                    }
                }
                d = [];
                e = this._rev;
                this._rev++;
                for (q = h.length; q--;) if (m = h[q], m.length) {
                    r = m[0].tileCoord.z;
                    for (i = m.length; i--;) {
                        n = m[i];
                        o = n.tileCoord;
                        p = 1;
                        if (!n._drawInTime || this._alwaysBlend && n._rev !== e) n._drawInTime = x;
                        n._rev = this._rev;
                        this._blend && !n._noAlpha ? (o = Math.max(0, Math.abs(o.z - a.getZoomLevel()) - 1), o = 1 / Math.pow(1.32, o), p = Math.min(1, (x - n._drawInTime) / (this._blendTime * o)), 1 !== p && (c = !0)) : n._noAlpha = !1;
                        n._alpha = p;
                        0 !== p && n.image && (b.bufferTile(n), b.drawTile(n, p));
                        d.push(n)
                    }
                }
                this._drawnTiles = d;
                for (q = k.length; q--;) if (l = k[q], l.length) {
                    a.sortTiles(l, l[0].tileCoord.z);
                    for (h = 0; h < l.length; h++) this.loadTile(l[h], this._loader)
                }
                b.endFrame();
                if (c) {
                    var D = this;
                    setTimeout(function () {
                        D.redraw()
                    })
                }
            }
        }
    }
};
o.prototype.getTile = function (a, b) {
    var c = a.buildKey();
    return (!b ? this._tileCache.get(c) : this._tileCache.peek(c)) || new g(a.clone(), this._tileContext.buildTileUrl(a))
};
o.prototype.loadTile = function (a, b) {
    var c = this,
        b = b || this._loader;
    b.loadImage(a.url, function (b) {
        a.image = b;
        c._tileCache.set(a.getKey(), a);
        c.redraw()
    })
};
B.$setExports(o)