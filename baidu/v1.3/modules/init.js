window.BMAP_AUTHENTIC_KEY = "";
(function () {
    var bZ, a5, bmap = bZ = a5 = bmap || {
        version: "1.3.4"
    };
    bmap.guid = "$BAIDU$";
    window[bmap.guid] = window[bmap.guid] || {};
	
	/* class 构建 */
    bmap.object = bmap.object || {};
    bmap.extend = bmap.object.extend = function (cJ, T) {
        for (var cI in T) {
            if (T.hasOwnProperty(cI)) {
                cJ[cI] = T[cI]
            }
        }
        return cJ
    };
	
	/* dom 节点操作 */
    bmap.dom = bmap.dom || {};
	// 返回一个dom对象
    bmap.dom.g = function (T) {
        if ("string" == typeof T || T instanceof String) {
            return document.getElementById(T)
        } else {
            if (T && T.nodeName && (T.nodeType == 1 || T.nodeType == 9)) {
                return T
            }
        }
        return null
    };
    bmap.g = bmap.G = bmap.dom.g;// 快捷键
	// 隐藏
    bmap.dom.hide = function (T) {
        T = bmap.dom.g(T);
        T.style.display = "none";
        return T
    };
    bmap.hide = bmap.dom.hide;// 快捷键
	// 语言包
    bmap.lang = bmap.lang || {};
    bmap.lang.isString = function (T) {
        return "[object String]" == Object.prototype.toString.call(T)
    };
    bmap.isString = bmap.lang.isString;// 快捷键
    bmap.dom._g = function (T) {
        if (bmap.lang.isString(T)) {
            return document.getElementById(T)
        }
        return T
    };
    bmap._g = bmap.dom._g;
    bmap.dom.contains = function (T, cI) {
        var cJ = bmap.dom._g;
        T = cJ(T);
        cI = cJ(cI);
        return T.contains ? T != cI && T.contains(cI) : !! (T.compareDocumentPosition(cI) & 16)
    };
	
	/* browser 浏览器判断对象 */
    bmap.browser = bmap.browser || {};
    if (/msie (\d+\.\d)/i.test(navigator.userAgent)) {
        bmap.browser.ie = bmap.ie = document.documentMode || +RegExp["\x241"]
    }
    bmap.dom._NAME_ATTRS = (function () {
        var T = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            rowspan: "rowSpan",
            valign: "vAlign",
            usemap: "useMap",
            frameborder: "frameBorder"
        };
        if (bmap.browser.ie < 8) {
            T["for"] = "htmlFor";
            T["class"] = "className"
        } else {
            T.htmlFor = "for";
            T.className = "class"
        }
        return T
    })();
	// 设置节点属性
    bmap.dom.setAttr = function (node, key, val) {
        node = bmap.dom.g(node);
        if ("style" == key) {
            node.style.cssText = val
        } else {
            key = bmap.dom._NAME_ATTRS[key] || key;
            node.setAttribute(key, val)
        }
        return node
    };
    bmap.setAttr = bmap.dom.setAttr;
    bmap.dom.setAttrs = function (node, obj) {
        node = bmap.dom.g(node);
        for (var key in obj) {
            bmap.dom.setAttr(node, key, obj[key])
        }
        return node
    };
    bmap.setAttrs = bmap.dom.setAttrs;
    bmap.string = bmap.string || {};
    (function () {
        var T = new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)", "g");
        bmap.string.trim = function (cI) {
            return String(cI).replace(T, "")
        }
    })();
    bmap.trim = bmap.string.trim;
    bmap.string.format = function (cJ, T) {
        cJ = String(cJ);
        var cI = Array.prototype.slice.call(arguments, 1),
            cK = Object.prototype.toString;
        if (cI.length) {
            cI = cI.length == 1 ? (T !== null && (/\[object Array\]|\[object Object\]/.test(cK.call(T))) ? T : cI) : cI;
            return cJ.replace(/#\{(.+?)\}/g, function (cL, cN) {
                var cM = cI[cN];
                if ("[object Function]" == cK.call(cM)) {
                    cM = cM(cN)
                }
                return ("undefined" == typeof cM ? "" : cM)
            })
        }
        return cJ
    };
    bmap.format = bmap.string.format;
    bmap.dom.removeClass = function (cM, cN) {
        cM = bmap.dom.g(cM);
        var cK = cM.className.split(/\s+/),
            cO = cN.split(/\s+/),
            cI, T = cO.length,
            cJ, cL = 0;
        for (; cL < T; ++cL) {
            for (cJ = 0, cI = cK.length; cJ < cI; ++cJ) {
                if (cK[cJ] == cO[cL]) {
                    cK.splice(cJ, 1);
                    break
                }
            }
        }
        cM.className = cK.join(" ");
        return cM
    };
    bmap.removeClass = bmap.dom.removeClass;
    bmap.dom.insertHTML = function (cK, T, cJ) {
        cK = bmap.dom.g(cK);
        var cI, cL;
        if (cK.insertAdjacentHTML) {
            cK.insertAdjacentHTML(T, cJ)
        } else {
            cI = cK.ownerDocument.createRange();
            T = T.toUpperCase();
            if (T == "AFTERBEGIN" || T == "BEFOREEND") {
                cI.selectNodeContents(cK);
                cI.collapse(T == "AFTERBEGIN")
            } else {
                cL = T == "BEFOREBEGIN";
                cI[cL ? "setStartBefore" : "setEndAfter"](cK);
                cI.collapse(cL)
            }
            cI.insertNode(cI.createContextualFragment(cJ))
        }
        return cK
    };
    bmap.insertHTML = bmap.dom.insertHTML;
    bmap.dom.show = function (T) {
        T = bmap.dom.g(T);
        T.style.display = "";
        return T
    };
    bmap.show = bmap.dom.show;
    bmap.dom.getDocument = function (T) {
        T = bmap.dom.g(T);
        return T.nodeType == 9 ? T : T.ownerDocument || T.document
    };
    bmap.dom.addClass = function (cM, cN) {
        cM = bmap.dom.g(cM);
        var cI = cN.split(/\s+/),
            T = cM.className,
            cL = " " + T + " ",
            cK = 0,
            cJ = cI.length;
        for (; cK < cJ; cK++) {
            if (cL.indexOf(" " + cI[cK] + " ") < 0) {
                T += " " + cI[cK]
            }
        }
        cM.className = T;
        return cM
    };
    bmap.addClass = bmap.dom.addClass;
    bmap.dom._styleFixer = bmap.dom._styleFixer || {};
    bmap.dom._styleFilter = bmap.dom._styleFilter || [];
    bmap.dom._styleFilter.filter = function (cI, cL, cM) {
        for (var T = 0, cK = bmap.dom._styleFilter, cJ; cJ = cK[T]; T++) {
            if (cJ = cJ[cM]) {
                cL = cJ(cI, cL)
            }
        }
        return cL
    };
    bmap.string.toCamelCase = function (T) {
        if (T.indexOf("-") < 0 && T.indexOf("_") < 0) {
            return T
        }
        return T.replace(/[-_][^-_]/g, function (cI) {
            return cI.charAt(1).toUpperCase()
        })
    };
    bmap.dom.getStyle = function (cJ, cI) {
        var cM = bmap.dom;
        cJ = cM.g(cJ);
        cI = bmap.string.toCamelCase(cI);
        var cL = cJ.style[cI];
        if (!cL) {
            var T = cM._styleFixer[cI],
                cK = cJ.currentStyle || (bmap.browser.ie ? cJ.style : getComputedStyle(cJ, null));
            cL = T && T.get ? T.get(cJ, cK) : cK[T || cI]
        }
        if (T = cM._styleFilter) {
            cL = T.filter(cI, cL, "get")
        }
        return cL
    };
    bmap.getStyle = bmap.dom.getStyle;
    if (/opera\/(\d+\.\d)/i.test(navigator.userAgent)) {
        bmap.browser.opera = +RegExp["\x241"]
    }
    bmap.browser.isWebkit = /webkit/i.test(navigator.userAgent);
    bmap.browser.isGecko = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
    bmap.browser.isStrict = document.compatMode == "CSS1Compat";
    bmap.dom.getPosition = function (T) {
        T = bmap.dom.g(T);
        var cQ = bmap.dom.getDocument(T),
            cK = bmap.browser,
            cN = bmap.dom.getStyle,
            cJ = cK.isGecko > 0 && cQ.getBoxObjectFor && cN(T, "position") == "absolute" && (T.style.top === "" || T.style.left === ""),
            cO = {
                left: 0,
                top: 0
            },
            cM = (cK.ie && !cK.isStrict) ? cQ.body : cQ.documentElement,
            cR, cI;
        if (T == cM) {
            return cO
        }
        if (T.getBoundingClientRect) {
            cI = T.getBoundingClientRect();
            cO.left = Math.floor(cI.left) + Math.max(cQ.documentElement.scrollLeft, cQ.body.scrollLeft);
            cO.top = Math.floor(cI.top) + Math.max(cQ.documentElement.scrollTop, cQ.body.scrollTop);
            cO.left -= cQ.documentElement.clientLeft;
            cO.top -= cQ.documentElement.clientTop;
            var cP = cQ.body,
                cS = parseInt(cN(cP, "borderLeftWidth")),
                cL = parseInt(cN(cP, "borderTopWidth"));
            if (cK.ie && !cK.isStrict) {
                cO.left -= isNaN(cS) ? 2 : cS;
                cO.top -= isNaN(cL) ? 2 : cL
            }
        } else {
            cR = T;
            do {
                cO.left += cR.offsetLeft;
                cO.top += cR.offsetTop;
                if (cK.isWebkit > 0 && cN(cR, "position") == "fixed") {
                    cO.left += cQ.body.scrollLeft;
                    cO.top += cQ.body.scrollTop;
                    break
                }
                cR = cR.offsetParent
            } while (cR && cR != T);
            if (cK.opera > 0 || (cK.isWebkit > 0 && cN(T, "position") == "absolute")) {
                cO.top -= cQ.body.offsetTop
            }
            cR = T.offsetParent;
            while (cR && cR != cQ.body) {
                cO.left -= cR.scrollLeft;
                if (!cK.opera || cR.tagName != "TR") {
                    cO.top -= cR.scrollTop
                }
                cR = cR.offsetParent
            }
        }
        return cO
    };
    if (/firefox\/(\d+\.\d)/i.test(navigator.userAgent)) {
        bmap.browser.firefox = +RegExp["\x241"]
    }(function () {
        var T = navigator.userAgent;
        if (/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(T) && !/chrome/i.test(T)) {
            bmap.browser.safari = +(RegExp["\x241"] || RegExp["\x242"])
        }
    })();
    if (/chrome\/(\d+\.\d)/i.test(navigator.userAgent)) {
        bmap.browser.chrome = +RegExp["\x241"]
    }
    bmap.array = bmap.array || {};
    bmap.array.each = function (cM, cK) {
        var cJ, cL, cI, T = cM.length;
        if ("function" == typeof cK) {
            for (cI = 0; cI < T; cI++) {
                cL = cM[cI];
                cJ = cK.call(cM, cL, cI);
                if (cJ === false) {
                    break
                }
            }
        }
        return cM
    };
    bmap.each = bmap.array.each;
    bmap.lang.guid = function () {
        return "TANGRAM__" + (window[bmap.guid]._counter++).toString(36)
    };
    window[bmap.guid]._counter = window[bmap.guid]._counter || 1;
    window[bmap.guid]._instances = window[bmap.guid]._instances || {};
    bmap.lang.isFunction = function (T) {
        return "[object Function]" == Object.prototype.toString.call(T)
    };
    bmap.lang.Class = function (T) {
        this.guid = T || bmap.lang.guid();
        window[bmap.guid]._instances[this.guid] = this
    };
    window[bmap.guid]._instances = window[bmap.guid]._instances || {};
    bmap.lang.Class.prototype.dispose = function () {
        delete window[bmap.guid]._instances[this.guid];
        for (var T in this) {
            if (!bmap.lang.isFunction(this[T])) {
                delete this[T]
            }
        }
        this.disposed = true
    };
    bmap.lang.Class.prototype.toString = function () {
        return "[object " + (this._className || "Object") + "]"
    };
    bmap.lang.Event = function (T, cI) {
        this.type = T;
        this.returnValue = true;
        this.target = cI || null;
        this.currentTarget = null
    };
    bmap.lang.Class.prototype.addEventListener = function (cK, cJ, cI) {
        if (!bmap.lang.isFunction(cJ)) {
            return
        }!this.__listeners && (this.__listeners = {});
        var T = this.__listeners,
            cL;
        if (typeof cI == "string" && cI) {
            if (/[^\w\-]/.test(cI)) {
                throw ("nonstandard key:" + cI)
            } else {
                cJ.hashCode = cI;
                cL = cI
            }
        }
        cK.indexOf("on") != 0 && (cK = "on" + cK);
        typeof T[cK] != "object" && (T[cK] = {});
        cL = cL || bmap.lang.guid();
        cJ.hashCode = cL;
        T[cK][cL] = cJ
    };
    bmap.lang.Class.prototype.removeEventListener = function (cJ, cI) {
        if (bmap.lang.isFunction(cI)) {
            cI = cI.hashCode
        } else {
            if (!bmap.lang.isString(cI)) {
                return
            }
        }!this.__listeners && (this.__listeners = {});
        cJ.indexOf("on") != 0 && (cJ = "on" + cJ);
        var T = this.__listeners;
        if (!T[cJ]) {
            return
        }
        T[cJ][cI] && delete T[cJ][cI]
    };
    bmap.lang.Class.prototype.dispatchEvent = function (cK, T) {
        if (bmap.lang.isString(cK)) {
            cK = new bmap.lang.Event(cK)
        }!this.__listeners && (this.__listeners = {});
        T = T || {};
        for (var cJ in T) {
            cK[cJ] = T[cJ]
        }
        var cJ, cI = this.__listeners,
            cL = cK.type;
        cK.target = cK.target || this;
        cK.currentTarget = this;
        cL.indexOf("on") != 0 && (cL = "on" + cL);
        bmap.lang.isFunction(this[cL]) && this[cL].apply(this, arguments);
        if (typeof cI[cL] == "object") {
            for (cJ in cI[cL]) {
                cI[cL][cJ].apply(this, arguments)
            }
        }
        return cK.returnValue
    };
    bmap.lang.inherits = function (cN, cL, cK) {
        var cJ, cM, T = cN.prototype,
            cI = new Function();
        cI.prototype = cL.prototype;
        cM = cN.prototype = new cI();
        for (cJ in T) {
            cM[cJ] = T[cJ]
        }
        cN.prototype.constructor = cN;
        cN.superClass = cL.prototype;
        if ("string" == typeof cK) {
            cM._className = cK
        }
    };
    bmap.inherits = bmap.lang.inherits;
    bmap.lang.instance = function (T) {
        return window[bmap.guid]._instances[T] || null
    };
    bmap.platform = bmap.platform || {};
    bmap.platform.isMacintosh = /macintosh/i.test(navigator.userAgent);
    bmap.platform.isWindows = /windows/i.test(navigator.userAgent);
    bmap.platform.isX11 = /x11/i.test(navigator.userAgent);
    bmap.platform.isAndroid = /android/i.test(navigator.userAgent);
    bmap.platform.isIpad = /ipad/i.test(navigator.userAgent);
    bmap.platform.isIphone = /iphone/i.test(navigator.userAgent);
    bmap.lang.Event.prototype.inherit = function (cJ) {
        var cI = this;
        this.domEvent = cJ = window.event || cJ;
        cI.clientX = cJ.clientX || cJ.pageX;
        cI.clientY = cJ.clientY || cJ.pageY;
        cI.offsetX = cJ.offsetX || cJ.layerX;
        cI.offsetY = cJ.offsetY || cJ.layerY;
        cI.screenX = cJ.screenX;
        cI.screenY = cJ.screenY;
        cI.ctrlKey = cJ.ctrlKey || cJ.metaKey;
        cI.shiftKey = cJ.shiftKey;
        cI.altKey = cJ.altKey;
        if (cJ.touches) {
            cI.touches = [];
            for (var T = 0; T < cJ.touches.length; T++) {
                cI.touches.push({
                    clientX: cJ.touches[T].clientX,
                    clientY: cJ.touches[T].clientY,
                    screenX: cJ.touches[T].screenX,
                    screenY: cJ.touches[T].screenY,
                    pageX: cJ.touches[T].pageX,
                    pageY: cJ.touches[T].pageY,
                    target: cJ.touches[T].target,
                    identifier: cJ.touches[T].identifier
                })
            }
        }
        if (cJ.changedTouches) {
            cI.changedTouches = [];
            for (var T = 0; T < cJ.changedTouches.length; T++) {
                cI.changedTouches.push({
                    clientX: cJ.changedTouches[T].clientX,
                    clientY: cJ.changedTouches[T].clientY,
                    screenX: cJ.changedTouches[T].screenX,
                    screenY: cJ.changedTouches[T].screenY,
                    pageX: cJ.changedTouches[T].pageX,
                    pageY: cJ.changedTouches[T].pageY,
                    target: cJ.changedTouches[T].target,
                    identifier: cJ.changedTouches[T].identifier
                })
            }
        }
        if (cJ.targetTouches) {
            cI.targetTouches = [];
            for (var T = 0; T < cJ.targetTouches.length; T++) {
                cI.targetTouches.push({
                    clientX: cJ.targetTouches[T].clientX,
                    clientY: cJ.targetTouches[T].clientY,
                    screenX: cJ.targetTouches[T].screenX,
                    screenY: cJ.targetTouches[T].screenY,
                    pageX: cJ.targetTouches[T].pageX,
                    pageY: cJ.targetTouches[T].pageY,
                    target: cJ.targetTouches[T].target,
                    identifier: cJ.targetTouches[T].identifier
                })
            }
        }
        cI.rotation = cJ.rotation;
        cI.scale = cJ.scale;
        return cI
    };
    bmap.lang.decontrol = function (cI) {
        var T = window[bmap.guid];
        T._instances && (delete T._instances[cI])
    };
    bmap.event = {};
    bmap.on = bmap.event.on = function (cJ, cI, T) {
        if (!(cJ = bmap.g(cJ))) {
            return cJ
        }
        cI = cI.replace(/^on/, "");
        if (cJ.addEventListener) {
            cJ.addEventListener(cI, T, false)
        } else {
            if (cJ.attachEvent) {
                cJ.attachEvent("on" + cI, T)
            }
        }
        return cJ
    };
    bmap.un = bmap.event.un = function (cJ, cI, T) {
        if (!(cJ = bmap.g(cJ))) {
            return cJ
        }
        cI = cI.replace(/^on/, "");
        if (cJ.removeEventListener) {
            cJ.removeEventListener(cI, T, false)
        } else {
            if (cJ.detachEvent) {
                cJ.detachEvent("on" + cI, T)
            }
        }
        return cJ
    };
    bmap.dom.hasClass = function (cJ, cI) {
        if (!cJ || !cJ.className || typeof cJ.className != "string") {
            return false
        }
        var T = -1;
        try {
            T = cJ.className == cI || cJ.className.search(new RegExp("(\\s|^)" + cI + "(\\s|$)"))
        } catch (cK) {
            return false
        }
        return T > -1
    };
    window.BMap = window.BMap || {};
    window.BMap.version = "1.3";
    window.BMap._register = [];
    window.BMap.register = function (T) {
        this._register.push(T)
    };
    window.BMap.apiLoad = window.BMap.apiLoad || function () {};
    var bG = window.BMAP_AUTHENTIC_KEY;
    window.BMAP_AUTHENTIC_KEY = null;

    var bw, Map = bw = function(cK, cM) {
        cK = bmap.g(cK);
        if (!cK) {
            return
        }
        var cL = this;
        bmap.lang.Class.call(cL);
        cL.config = {
            clickInterval: 200,
            enableDragging: true,
            enableKeyboard: false,
            enableDblclickZoom: true,
            enableContinuousZoom: false,
            enableWheelZoom: false,
            enableMouseDown: true,
            enablePinchToZoom: true,
            enableAutoResize: true,
            fps: 25,
            zoomerDuration: 240,
            actionDuration: 450,
            defaultCursor: staticSource.defaultCursor,
            draggingCursor: staticSource.draggingCursor,
            isOverviewMap: false,
            minZoom: 1,
            maxZoom: 18,
            mapType: BMAP_NORMAL_MAP,
            restrictBounds: false,
            drawer: BMAP_SYS_DRAWER,
            enableInertialDragging: false,
            drawMargin: 500,
            enableHighResolution: false
        };
        bmap.extend(cL.config, cM || {});
        if (cL.highResolutionEnabled()) {
            var cO = document.querySelector("meta[name=viewport]");
            cO.content = "initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5, user-scalable=no, target-densitydpi=high-dpi"
        }
        cL.container = cK;
        cL._setStyle(cK);
        cK.unselectable = "on";
        cK.innerHTML = "";
        cK.appendChild(cL.render());
        var cI = cL.getSize();
        cL.width = cI.width;
        cL.height = cI.height;
        cL.offsetX = 0;
        cL.offsetY = 0;
        cL.platform = cK.firstChild;
        cL.maskLayer = cL.platform.firstChild;
        cL.maskLayer.style.width = cL.width + "px";
        cL.maskLayer.style.height = cL.height + "px";
        cL._panes = {};
        cL.centerPoint = new Point(0, 0);
        cL.mercatorCenter = new Point(0, 0);
        cL.zoomLevel = 1;
        cL.lastLevel = 0;
        cL.defaultZoomLevel = null;
        cL.defaultCenter = null;
        cL.currentCity = "";
        cL.cityCode = "";
        cL._hotspots = {};
        cL.currentOperation = 0;
        cM = cM || {};
        var cN = cL.mapType = cL.config.mapType;
        cL.projection = cN.getProjection();
        if (cN === BMAP_PERSPECTIVE_MAP) {
            _addStat(5002)
        }
        if (cN === BMAP_SATELLITE_MAP || cN === BMAP_HYBRID_MAP) {
            _addStat(5003)
        }
        var T = cL.config;
        T.userMinZoom = cM.minZoom;
        T.userMaxZoom = cM.maxZoom;
        cL._checkZoom();
        cL.temp = {
            operating: false,
            arrow: 0,
            lastDomMoveTime: 0,
            lastLoadTileTime: 0,
            lastMovingTime: 0,
            canKeyboard: false,
            registerIndex: -1,
            curSpots: []
        };
        cL.platform.style.cursor = cL.config.defaultCursor;
        for (var cJ = 0; cJ < BMap._register.length; cJ++) {
            BMap._register[cJ](cL)
        }
        cL.temp.registerIndex = cJ;
        cL._bind();
        cx.load("map", function () {
            cL._draw()
        });
        if (bL()) {
            cx.load("oppc", function () {
                cL._asyncRegister()
            })
        }
        if (ay()) {
            cx.load("opmb", function () {
                cL._asyncRegister()
            })
        }
        cK = null
    }
    bmap.lang.inherits(Map, bmap.lang.Class, "Map");
    bmap.extend(Map.prototype, {
        render: function () {
            var T = Y("div");
            var cK = T.style;
            cK.overflow = "visible";
            cK.position = "absolute";
            cK.zIndex = "0";
            cK.top = cK.left = "0px";
            var cI = Y("div", {
                "class": "BMap_mask"
            });
            var cJ = cI.style;
            cJ.position = "absolute";
            cJ.top = cJ.left = "0px";
            cJ.zIndex = "9";
            cJ.overflow = "hidden";
            cJ.WebkitUserSelect = "none";
            T.appendChild(cI);
            return T
        },
        _setStyle: function (cI) {
            var T = cI.style;
            T.overflow = "hidden";
            if (aH(cI).position != "absolute") {
                T.position = "relative";
                T.zIndex = 0
            }
            T.backgroundColor = "#F3F1EC";
            T.color = "#000";
            T.textAlign = "left"
        },
        _bind: function () {
            var T = this;
            T._watchSize = function () {
                var cI = T.getSize();
                if (T.width != cI.width || T.height != cI.height) {
                    var cK = new Size(T.width, T.height);
                    var cL = new bd("onbeforeresize");
                    cL.size = cK;
                    T.dispatchEvent(cL);
                    T._updateCenterPoint((cI.width - T.width) / 2, (cI.height - T.height) / 2);
                    T.maskLayer.style.width = (T.width = cI.width) + "px";
                    T.maskLayer.style.height = (T.height = cI.height) + "px";
                    var cJ = new bd("onresize");
                    cJ.size = cI;
                    T.dispatchEvent(cJ)
                }
            };
            if (T.config.enableAutoResize) {
                T.temp.autoResizeTimer = setInterval(T._watchSize, 80)
            }
        },
        _updateCenterPoint: function (cK, cI, cO, cN) {
            var cL = this.getMapType().getZoomUnits(this.getZoom());
            var cP = this.projection;
            var cM = true;
            if (cO && Point.isInRange(cO)) {
                this.centerPoint = new Point(cO.lng, cO.lat);
                cM = false
            }
            var cJ = (cO && cN) ? cP.lngLatToMercator(cO, this.currentCity) : this.mercatorCenter;
            if (cJ) {
                this.mercatorCenter = new Point(cJ.lng + cK * cL, cJ.lat - cI * cL);
                var T = cP.mercatorToLngLat(this.mercatorCenter, this.currentCity);
                if (T && cM) {
                    this.centerPoint = T
                }
            }
        },
        zoomTo: function (cK, cI) {
            if (!aI(cK)) {
                return
            }
            cK = this._getProperZoom(cK).zoom;
            if (cK == this.zoomLevel) {
                return
            }
            this.lastLevel = this.zoomLevel;
            this.zoomLevel = cK;
            var cJ;
            if (cI) {
                cJ = cI
            } else {
                if (this.getInfoWindow()) {
                    cJ = this.getInfoWindow().getPosition()
                }
            }
            if (cJ) {
                var T = this.pointToPixel(cJ, this.lastLevel);
                this._updateCenterPoint(this.width / 2 - T.x, this.height / 2 - T.y, this.pixelToPoint(T, this.lastLevel), true)
            }
            this.dispatchEvent(new bd("onzoomstart"));
            this.dispatchEvent(new bd("onzoomstartcode"))
        },
        setZoom: function (T) {
            this.zoomTo(T)
        },
        zoomIn: function (T) {
            this.zoomTo(this.zoomLevel + 1, T)
        },
        zoomOut: function (T) {
            this.zoomTo(this.zoomLevel - 1, T)
        },
        panTo: function (T, cI) {
            if (!(T instanceof Point)) {
                return
            }
            this.mercatorCenter = this.projection.lngLatToMercator(T, this.currentCity);
            if (Point.isInRange(T)) {
                this.centerPoint = new Point(T.lng, T.lat)
            } else {
                this.centerPoint = this.projection.mercatorToLngLat(this.mercatorCenter, this.currentCity)
            }
        },
        panBy: function (cI, T) {
            cI = Math.round(cI) || 0;
            T = Math.round(T) || 0;
            this._updateCenterPoint(-cI, -T)
        },
        addControl: function (T) {
            if (T && G(T._i)) {
                T._i(this);
                this.dispatchEvent(new bd("onaddcontrol", T))
            }
        },
        removeControl: function (T) {
            if (T && G(T.remove)) {
                T.remove();
                this.dispatchEvent(new bd("onremovecontrol", T))
            }
        },
        addContextMenu: function (T) {
            if (T && G(T.initialize)) {
                T.initialize(this);
                this.dispatchEvent(new bd("onaddcontextmenu", T))
            }
        },
        removeContextMenu: function (T) {
            if (T && G(T.remove)) {
                this.dispatchEvent(new bd("onremovecontextmenu", T));
                T.remove()
            }
        },
        addOverlay: function (T) {
            if (T && G(T._i)) {
                T._i(this);
                this.dispatchEvent(new bd("onaddoverlay", T))
            }
        },
        removeOverlay: function (T) {
            if (T && G(T.remove)) {
                T.remove();
                this.dispatchEvent(new bd("onremoveoverlay", T))
            }
        },
        clearOverlays: function () {
            this.dispatchEvent(new bd("onclearoverlays"))
        },
        addTileLayer: function (T) {
            if (T) {
                this.dispatchEvent(new bd("onaddtilelayer", T))
            }
        },
        removeTileLayer: function (T) {
            if (T) {
                this.dispatchEvent(new bd("onremovetilelayer", T))
            }
        },
        setMapType: function (cI) {
            if (this.mapType === cI) {
                return
            }
            var cJ = new bd("onsetmaptype");
            var T = this.mapType;
            cJ.preMapType = T;
            this.mapType = this.config.mapType = cI;
            this.projection = this.mapType.getProjection();
            this._updateCenterPoint(0, 0, this.getCenter(), true);
            this._checkZoom();
            var cK = this._getProperZoom(this.getZoom()).zoom;
            this.zoomTo(cK);
            this.dispatchEvent(cJ);
            var cJ = new bd("onmaptypechange");
            cJ.zoomLevel = cK;
            cJ.mapType = cI;
            this.dispatchEvent(cJ);
            if (cI === BMAP_SATELLITE_MAP || cI === BMAP_HYBRID_MAP) {
                _addStat(5003)
            }
        },
        setCenter: function (T) {
            var cJ = this;
            if (T instanceof Point) {
                cJ.panTo(T, {
                    noAnimation: true
                })
            } else {
                if (b0(T)) {
                    var cI = this._getLocal();
                    cI.setSearchCompleteCallback(function (cK) {
                        if (cI.getStatus() == 0 && cI._json.result.type == 2) {
                            cJ.setCenter(cK.getPoi(0).point);
                            if (BMAP_PERSPECTIVE_MAP.getCityName(T)) {
                                cJ.setCurrentCity(T)
                            }
                        }
                    });
                    cI.search(T)
                }
            }
        },
        centerAndZoom: function (T, cJ) {
            var cI = this;
            if (b0(T)) {
                var cM = cI._getLocal();
                cM.setSearchCompleteCallback(function (cN) {
                    if (cM.getStatus() == 0 && cM._json.result.type == 2) {
                        var cP = cN.getPoi(0).point;
                        var cO = cJ || Q.getBestLevel(cM._json.content.level, cI);
                        cI.centerAndZoom(cP, cO);
                        if (BMAP_PERSPECTIVE_MAP.getCityName(T)) {
                            cI.setCurrentCity(T)
                        }
                    }
                });
                cM.search(T);
                return
            }
            if (!(T instanceof Point) || !cJ) {
                return
            }
            cJ = cI._getProperZoom(cJ).zoom;
            cI.lastLevel = cI.zoomLevel || cJ;
            cI.zoomLevel = cJ;
            cI.centerPoint = new Point(T.lng, T.lat);
            cI.mercatorCenter = cI.projection.lngLatToMercator(cI.centerPoint, cI.currentCity);
            cI.defaultZoomLevel = cI.defaultZoomLevel || cI.zoomLevel;
            cI.defaultCenter = cI.defaultCenter || cI.centerPoint;
            var cL = new bd("onload");
            var cK = new bd("onloadcode");
            cL.point = new Point(T.lng, T.lat);
            cL.pixel = cI.pointToPixel(cI.centerPoint, cI.zoomLevel);
            cL.zoom = cJ;
            if (!cI.loaded) {
                cI.loaded = true;
                cI.dispatchEvent(cL)
            }
            cI.dispatchEvent(cK);
            cI.dispatchEvent(new bd("onmoveend"));
            if (cI.lastLevel != cI.zoomLevel) {
                cI.dispatchEvent(new bd("onzoomend"))
            }
        },
        _getLocal: function () {
            if (!this.temp.local) {
                this.temp.local = new LocalSearch(1)
            }
            return this.temp.local
        },
        reset: function () {
            this.centerAndZoom(this.defaultCenter, this.defaultZoomLevel, true)
        },
        enableDragging: function () {
            this.config.enableDragging = true
        },
        disableDragging: function () {
            this.config.enableDragging = false
        },
        enableInertialDragging: function () {
            this.config.enableInertialDragging = true
        },
        disableInertialDragging: function () {
            this.config.enableInertialDragging = false
        },
        enableScrollWheelZoom: function () {
            this.config.enableWheelZoom = true
        },
        disableScrollWheelZoom: function () {
            this.config.enableWheelZoom = false
        },
        enableContinuousZoom: function () {
            this.config.enableContinuousZoom = true
        },
        disableContinuousZoom: function () {
            this.config.enableContinuousZoom = false
        },
        enableDoubleClickZoom: function () {
            this.config.enableDblclickZoom = true
        },
        disableDoubleClickZoom: function () {
            this.config.enableDblclickZoom = false
        },
        enableKeyboard: function () {
            this.config.enableKeyboard = true
        },
        disableKeyboard: function () {
            this.config.enableKeyboard = false
        },
        enablePinchToZoom: function () {
            this.config.enablePinchToZoom = true
        },
        disablePinchToZoom: function () {
            this.config.enablePinchToZoom = false
        },
        enableAutoResize: function () {
            this.config.enableAutoResize = true;
            this._watchSize();
            if (!this.temp.autoResizeTimer) {
                this.temp.autoResizeTimer = setInterval(this._watchSize, 80)
            }
        },
        disableAutoResize: function () {
            this.config.enableAutoResize = false;
            if (this.temp.autoResizeTimer) {
                clearInterval(this.temp.autoResizeTimer);
                this.temp.autoResizeTimer = null
            }
        },
        getSize: function () {
            return new Size(this.container.clientWidth, this.container.clientHeight)
        },
        getCenter: function () {
            return this.centerPoint
        },
        getZoom: function () {
            return this.zoomLevel
        },
        checkResize: function () {
            this._watchSize()
        },
        _getProperZoom: function (cJ) {
            var cI = this.config.minZoom,
                T = this.config.maxZoom,
                cK = false;
            if (cJ < cI) {
                cK = true;
                cJ = cI
            }
            if (cJ > T) {
                cK = true;
                cJ = T
            }
            return {
                zoom: cJ,
                exceeded: cK
            }
        },
        getContainer: function () {
            return this.container
        },
        pointToPixel: function (T, cI) {
            cI = cI || this.getZoom();
            return this.projection.pointToPixel(T, cI, this.mercatorCenter, this.getSize(), this.currentCity)
        },
        pixelToPoint: function (T, cI) {
            cI = cI || this.getZoom();
            return this.projection.pixelToPoint(T, cI, this.mercatorCenter, this.getSize(), this.currentCity)
        },
        pointToOverlayPixel: function (T, cJ) {
            if (!T) {
                return
            }
            var cK = new Point(T.lng, T.lat);
            var cI = this.pointToPixel(cK, cJ);
            cI.x -= this.offsetX;
            cI.y -= this.offsetY;
            return cI
        },
        overlayPixelToPoint: function (T, cJ) {
            if (!T) {
                return
            }
            var cI = new Pixel(T.x, T.y);
            cI.x += this.offsetX;
            cI.y += this.offsetY;
            return this.pixelToPoint(cI, cJ)
        },
        getBounds: function () {
            if (!this.isLoaded()) {
                return new Bounds()
            }
            var cI = arguments[0] || {},
                cK = cI.margins || [0, 0, 0, 0],
                T = cI.zoom || null,
                cL = this.pixelToPoint({
                    x: cK[3],
                    y: this.height - cK[2]
                }, T),
                cJ = this.pixelToPoint({
                    x: this.width - cK[1],
                    y: cK[0]
                }, T);
            return new Bounds(cL, cJ)
        },
        isLoaded: function () {
            return !!this.loaded
        },
        _getBestLevel: function (cI, cJ) {
            var cM = this.getMapType();
            var cO = cJ.margins || [10, 10, 10, 10],
                cL = cJ.zoomFactor || 0,
                cP = cO[1] + cO[3],
                cN = cO[0] + cO[2],
                T = cM.getMinZoom(),
                cR = cM.getMaxZoom();
            for (var cK = cR; cK >= T; cK--) {
                var cQ = this.getMapType().getZoomUnits(cK);
                if (cI.toSpan().lng / cQ < this.width - cP && cI.toSpan().lat / cQ < this.height - cN) {
                    break
                }
            }
            cK += cL;
            if (cK < T) {
                cK = T
            }
            if (cK > cR) {
                cK = cR
            }
            return cK
        },
        getViewport: function (cQ, cI) {
            var cU = {
                center: this.getCenter(),
                zoom: this.getZoom()
            };
            if (!cQ || !cQ instanceof Bounds && cQ.length == 0 || cQ instanceof Bounds && cQ.isEmpty()) {
                return cU
            }
            var cS = [];
            if (cQ instanceof Bounds) {
                cS.push(cQ.getNorthEast());
                cS.push(cQ.getSouthWest())
            } else {
                cS = cQ.slice(0)
            }
            cI = cI || {};
            var cM = [];
            for (var cN = 0, cL = cS.length; cN < cL; cN++) {
                cM.push(this.projection.lngLatToMercator(cS[cN], this.currentCity))
            }
            var cJ = new Bounds();
            for (var cN = cM.length - 1; cN >= 0; cN--) {
                cJ.extend(cM[cN])
            }
            if (cJ.isEmpty()) {
                return cU
            }
            var T = cJ.getCenter();
            var cT = this._getBestLevel(cJ, cI);
            if (cI.margins) {
                var cP = cI.margins,
                    cO = (cP[1] - cP[3]) / 2,
                    cR = (cP[0] - cP[2]) / 2,
                    cK = this.getMapType().getZoomUnits(cT);
                T.lng = T.lng + cK * cO;
                T.lat = T.lat + cK * cR
            }
            T = this.projection.mercatorToLngLat(T, this.currentCity);
            return {
                center: T,
                zoom: cT
            }
        },
        setViewport: function (cI, cL) {
            var T;
            if (cI && cI.center) {
                T = cI
            } else {
                T = this.getViewport(cI, cL)
            }
            cL = cL || {};
            var cJ = cL.delay || 200;
            if (T.zoom == this.zoomLevel && cL.enableAnimation != false) {
                var cK = this;
                setTimeout(function () {
                    cK.panTo(T.center, {
                        duration: 210
                    })
                }, cJ)
            } else {
                this.centerAndZoom(T.center, T.zoom)
            }
        },
        getPanes: function () {
            return this._panes
        },
        getInfoWindow: function () {
            if (this.temp.infoWin && this.temp.infoWin.isOpen()) {
                return this.temp.infoWin
            }
            return null
        },
        getDistance: function (cJ, T) {
            if (!cJ || !T) {
                return
            }
            var cI = 0;
            cI = MercatorProjection.getDistanceByLL(cJ, T);
            return cI
        },
        getOverlays: function () {
            var cK = [],
                cL = this._overlays,
                cJ = this._customOverlays;
            if (cL) {
                for (var cI in cL) {
                    if (cL[cI] instanceof W) {
                        cK.push(cL[cI])
                    }
                }
            }
            if (cJ) {
                for (var cI = 0, T = cJ.length; cI < T; cI++) {
                    cK.push(cJ[cI])
                }
            }
            return cK
        },
        getMapType: function () {
            return this.mapType
        },
        _asyncRegister: function () {
            for (var T = this.temp.registerIndex; T < BMap._register.length; T++) {
                BMap._register[T](this)
            }
            this.temp.registerIndex = T
        },
        setCurrentCity: function (T) {
            this.currentCity = BMAP_PERSPECTIVE_MAP.getCityName(T);
            this.cityCode = BMAP_PERSPECTIVE_MAP.getCityCode(this.currentCity)
        },
        setDefaultCursor: function (T) {
            if (bmap.browser.firefox && T.indexOf("url") == 0) {
                T = T += ", -moz-grab"
            }
            this.config.defaultCursor = T;
            if (this.platform) {
                this.platform.style.cursor = this.config.defaultCursor
            }
        },
        getDefaultCursor: function () {
            return this.config.defaultCursor
        },
        setDraggingCursor: function (T) {
            if (bmap.browser.firefox && T.indexOf("url") == 0) {
                T = T += ", -moz-grabbing"
            }
            this.config.draggingCursor = T
        },
        getDraggingCursor: function () {
            return this.config.draggingCursor
        },
        highResolutionEnabled: function () {
            return this.config.enableHighResolution && window.devicePixelRatio > 1
        },
        addHotspot: function (cI) {
            if (cI instanceof Hotspot) {
                this._hotspots[cI.guid] = cI;
                cI.initialize(this)
            }
            var T = this;
            cx.load("hotspot", function () {
                T._asyncRegister()
            })
        },
        removeHotspot: function (T) {
            if (this._hotspots[T.guid]) {
                delete this._hotspots[T.guid]
            }
        },
        clearHotspots: function () {
            this._hotspots = {}
        },
        _checkZoom: function () {
            var cI = this.mapType.getMinZoom();
            var cJ = this.mapType.getMaxZoom();
            var T = this.config;
            T.minZoom = T.userMinZoom || cI;
            T.maxZoom = T.userMaxZoom || cJ;
            if (T.minZoom < cI) {
                T.minZoom = cI
            }
            if (T.maxZoom > cJ) {
                T.maxZoom = cJ
            }
        },
        setMinZoom: function (T) {
            if (T > this.config.maxZoom) {
                T = this.config.maxZoom
            }
            this.config.userMinZoom = T;
            this._updateZoom()
        },
        setMaxZoom: function (T) {
            if (T < this.config.minZoom) {
                T = this.config.minZoom
            }
            this.config.userMaxZoom = T;
            this._updateZoom()
        },
        _updateZoom: function () {
            this._checkZoom();
            var T = this.config;
            if (this.zoomLevel < T.minZoom) {
                this.setZoom(T.minZoom)
            } else {
                if (this.zoomLevel > T.maxZoom) {
                    this.setZoom(T.maxZoom)
                }
            }
            var cI = new bd("onzoomspanchange");
            cI.minZoom = T.minZoom;
            cI.maxZoom = T.maxZoom;
            this.dispatchEvent(cI)
        }
    });
    window.BMAP_API_VERSION = "1.3";
    window.BMAP_COORD_LNGLAT = 0;
    window.BMAP_COORD_MERCATOR = 1;
    window.BMAP_SYS_DRAWER = 0;
    window.BMAP_SVG_DRAWER = 1;
    window.BMAP_VML_DRAWER = 2;
    window.BMAP_CANVAS_DRAWER = 3;
    window._addStat = function (cM, cL) {
        if (!cM) {
            return
        }
        cL = cL || {};
        var cK = "";
        for (var cI in cL) {
            cK = cK + "&" + cI + "=" + encodeURIComponent(cL[cI])
        }
        var cN = function (cO) {
            if (!cO) {
                return
            }
            _addStat._sending = true;
            setTimeout(function () {
                _addStat._img.src = staticSource.imgPath + "blank.gif?" + cO.src
            }, 50)
        };
        var T = function () {
            var cO = _addStat._reqQueue.shift();
            if (cO) {
                cN(cO)
            }
        };
        var cJ = (Math.random() * 100000000).toFixed(0);
        if (_addStat._sending) {
            _addStat._reqQueue.push({
                src: "t=" + cJ + "&code=" + cM + cK
            })
        } else {
            cN({
                src: "t=" + cJ + "&code=" + cM + cK
            })
        }
        if (!_addStat._binded) {
            bmap.on(_addStat._img, "load", function () {
                _addStat._sending = false;
                T()
            });
            bmap.on(_addStat._img, "error", function () {
                _addStat._sending = false;
                T()
            });
            _addStat._binded = true
        }
    };
    window._addStat._reqQueue = [];
    window._addStat._img = new Image();
    _addStat(5000);

    function g(cK) {
        var T = {
            duration: 1000,
            fps: 30,
            delay: 0,
            transition: tween.linear,
            onStop: function () {}
        };
        this._anis = [];
        if (cK) {
            for (var cI in cK) {
                T[cI] = cK[cI]
            }
        }
        this._opts = T;
        if (aI(T.delay)) {
            var cJ = this;
            setTimeout(function () {
                cJ.start()
            }, T.delay)
        } else {
            if (T.delay != g.INFINITE) {
                this.start()
            }
        }
    }
    g.INFINITE = "INFINITE";
    g.prototype.start = function () {
        this._beginTime = aC();
        this._endTime = this._beginTime + this._opts.duration;
        this._launch()
    };
    g.prototype.add = function (T) {
        this._anis.push(T)
    };
    g.prototype._launch = function () {
        var cJ = this;
        var T = aC();
        if (T >= cJ._endTime) {
            if (G(cJ._opts.render)) {
                cJ._opts.render(cJ._opts.transition(1))
            }
            if (G(cJ._opts.finish)) {
                cJ._opts.finish()
            }
            if (cJ._anis.length > 0) {
                var cI = cJ._anis[0];
                cI._anis = [].concat(cJ._anis.slice(1));
                cI.start()
            }
            return
        }
        cJ.schedule = cJ._opts.transition((T - cJ._beginTime) / cJ._opts.duration);
        if (G(cJ._opts.render)) {
            cJ._opts.render(cJ.schedule)
        }
        if (!cJ.terminative) {
            cJ._timer = setTimeout(function () {
                cJ._launch()
            }, 1000 / cJ._opts.fps)
        }
    };
    g.prototype.stop = function (cI) {
        this.terminative = true;
        for (var T = 0; T < this._anis.length; T++) {
            this._anis[T].stop();
            this._anis[T] = null
        }
        this._anis.length = 0;
        if (this._timer) {
            clearTimeout(this._timer);
            this._timer = null
        }
        this._opts.onStop(this.schedule);
        if (cI) {
            this._endTime = this._beginTime;
            this._launch()
        }
    };
    g.prototype.cancel = function () {
        if (this._timer) {
            clearTimeout(this._timer)
        }
        this._endTime = this._beginTime;
        this.schedule = 0
    };
    g.prototype.setFinishCallback = function (T) {
        if (this._anis.length > 0) {
            this._anis[this._anis.length - 1]._opts.finish = T
        } else {
            this._opts.finish = T
        }
    };
    var au, tween = au = {
        linear: function (T) {
            return T
        },
        reverse: function (T) {
            return 1 - T
        },
        easeInQuad: function (T) {
            return T * T
        },
        easeInCubic: function (T) {
            return Math.pow(T, 3)
        },
        easeOutQuad: function (T) {
            return -(T * (T - 2))
        },
        easeOutCubic: function (T) {
            return Math.pow((T - 1), 3) + 1
        },
        easeInOutQuad: function (T) {
            if (T < 0.5) {
                return T * T * 2
            } else {
                return -2 * (T - 2) * T - 1
            }
            return
        },
        easeInOutCubic: function (T) {
            if (T < 0.5) {
                return Math.pow(T, 3) * 4
            } else {
                return Math.pow(T - 1, 3) * 4 + 1
            }
        },
        easeInOutSine: function (T) {
            return (1 - Math.cos(Math.PI * T)) / 2
        }
    };
    au["ease-in"] = tween.easeInQuad;
    au["ease-out"] = tween.easeOutQuad;
    var b9, staticSource = b9 = {
        imgPath: "http://api.map.baidu.com/images/",
        cityNames: {
            "\u5317\u4eac": "bj",
            "\u4e0a\u6d77": "sh",
            "\u6df1\u5733": "sz",
            "\u5e7f\u5dde": "gz"
        },
        fontFamily: "arial,sans-serif"
    };
    if (bmap.browser.firefox) {
        bmap.extend(staticSource, {
            distCursor: "url(" + staticSource.imgPath + "ruler.cur),crosshair",
            defaultCursor: "-moz-grab",
            draggingCursor: "-moz-grabbing"
        });
        if (bmap.platform.isWindows) {
            staticSource.fontFamily = "arial,simsun,sans-serif"
        }
    } else {
        if (bmap.browser.chrome || bmap.browser.safari) {
            bmap.extend(staticSource, {
                distCursor: "url(" + staticSource.imgPath + "ruler.cur) 2 6,crosshair",
                defaultCursor: "url(" + staticSource.imgPath + "openhand.cur) 8 8,default",
                draggingCursor: "url(" + staticSource.imgPath + "closedhand.cur) 8 8,move"
            })
        } else {
            bmap.extend(staticSource, {
                distCursor: "url(" + staticSource.imgPath + "ruler.cur),crosshair",
                defaultCursor: "url(" + staticSource.imgPath + "openhand.cur),default",
                draggingCursor: "url(" + staticSource.imgPath + "closedhand.cur),move"
            })
        }
    }
    var Copyright = function at(cJ, cI, T) {
        this.id = cJ;
        this.bounds = cI;
        this.content = T
    }
    var bk = {
        undo: 1,
        redo: 2,
        zoom: 4,
        drag: 8,
        move: 16,
        mousewheel: 32,
        toolbarOperation: 64,
        stdMapCtrlDrag: 128,
        dblclick: 256
    };

    function bF(cJ, T) {
        var cI = cJ.style;
        cI.left = T[0] + "px";
        cI.top = T[1] + "px"
    }
    function ct(T) {
        if (bmap.browser.ie > 0) {
            T.unselectable = "on"
        } else {
            T.style.MozUserSelect = "none"
        }
    }
    function w(T) {
        return T && T.parentNode && T.parentNode.nodeType != 11
    }
    function aq(cI, T) {
        bmap.dom.insertHTML(cI, "beforeEnd", T);
        return cI.lastChild
    }
    function bV(T) {
        var cI = {
            left: 0,
            top: 0
        };
        while (T && T.offsetParent) {
            cI.left += T.offsetLeft;
            cI.top += T.offsetTop;
            T = T.offsetParent
        }
        return cI
    }
    function aN(T) {
        var T = window.event || T;
        T.stopPropagation ? T.stopPropagation() : T.cancelBubble = true
    }
    function cz(T) {
        var T = window.event || T;
        T.preventDefault ? T.preventDefault() : T.returnValue = false;
        return false
    }
    function cl(T) {
        aN(T);
        return cz(T)
    }
    function cD() {
        var T = document.documentElement,
            cI = document.body;
        if (T && (T.scrollTop || T.scrollLeft)) {
            return [T.scrollTop, T.scrollLeft]
        } else {
            if (cI) {
                return [cI.scrollTop, cI.scrollLeft]
            } else {
                return [0, 0]
            }
        }
    }
    function cq(cI, T) {
        if (!cI || !T) {
            return
        }
        return Math.round(Math.sqrt(Math.pow(cI.x - T.x, 2) + Math.pow(cI.y - T.y, 2)))
    }
    function M(T, cJ) {
        var cI = [];
        cJ = cJ ||
        function (cL) {
            return cL
        };
        for (var cK in T) {
            cI.push(cK + "=" + cJ(T[cK]))
        }
        return cI.join("&")
    }
	// 创建dom 节点
    function Y(cI, T, cJ) {
        var cK = document.createElement(cI);
        if (cJ) {
            cK = document.createElementNS(cJ, cI)
        }
        return bmap.dom.setAttrs(cK, T || {})
    }
    function aH(T) {
        if (T.currentStyle) {
            return T.currentStyle
        } else {
            if (T.ownerDocument && T.ownerDocument.defaultView) {
                return T.ownerDocument.defaultView.getComputedStyle(T, null)
            }
        }
    }
    function G(T) {
        return typeof T == "function"
    }
    function aI(T) {
        return typeof T == "number"
    }
    function b0(T) {
        return typeof T == "string"
    }
    function ce(T) {
        return typeof T != "undefined"
    }
    function cG(T) {
        return typeof T == "object"
    }
    function aW(T) {
        return "[object Array]" == Object.prototype.toString.call(T)
    }
    var cc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    function bS(cK) {
        var cI = "";
        var cR, cP, cN = "";
        var cQ, cO, cM, cL = "";
        var cJ = 0;
        var T = /[^A-Za-z0-9\+\/\=]/g;
        if (!cK || T.exec(cK)) {
            return cK
        }
        cK = cK.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do {
            cQ = cc.indexOf(cK.charAt(cJ++));
            cO = cc.indexOf(cK.charAt(cJ++));
            cM = cc.indexOf(cK.charAt(cJ++));
            cL = cc.indexOf(cK.charAt(cJ++));
            cR = (cQ << 2) | (cO >> 4);
            cP = ((cO & 15) << 4) | (cM >> 2);
            cN = ((cM & 3) << 6) | cL;
            cI = cI + String.fromCharCode(cR);
            if (cM != 64) {
                cI = cI + String.fromCharCode(cP)
            }
            if (cL != 64) {
                cI = cI + String.fromCharCode(cN)
            }
            cR = cP = cN = "";
            cQ = cO = cM = cL = ""
        } while (cJ < cK.length);
        return cI
    }
    var bd = bmap.lang.Event;

    function ay() {
        return !!(bmap.platform.isIphone || bmap.platform.isIpad || bmap.platform.isAndroid)
    }
    function bL() {
        return !!(bmap.platform.isWindows || bmap.platform.isMacintosh || bmap.platform.isX11)
    }
    function aC() {
        return (new Date).getTime()
    }
	/* Request */
    var cu, http = cu = {
        request: function (url) {
            var node = Y("script", {
                src: url,
                type: "text/javascript",
                charset: "utf-8"
            });
            if (node.addEventListener) {
                node.addEventListener("load", function (cK) {
                    var cJ = cK.target;
                    cJ.parentNode.removeChild(cJ)
                }, false)
            } else {
                if (node.attachEvent) {
                    node.attachEvent("onreadystatechange", function (cK) {
                        var cJ = window.event.srcElement;
                        if (cJ && (cJ.readyState == "loaded" || cJ.readyState == "complete")) {
                            cJ.parentNode.removeChild(cJ)
                        }
                    })
                }
            }
            setTimeout(function () {
                document.getElementsByTagName("head")[0].appendChild(node);
                node = null
            }, 1)
        }
    };
	// 模块加载代码
    function cx() {}
    bmap.object.extend(cx, {
		// 请求状态类型
        Request: {
            INITIAL: -1,//初始化
            WAITING: 0,//出现异常
            COMPLETED: 1//完成
        },
		// Package 依赖
        Dependency: {
            control: [],
            marker: [],
            poly: ["marker"],
            infowindow: ["marker"],
            menu: [],
            oppc: [],
            opmb: [],
            scommon: [],
            local: ["scommon"],
            route: ["scommon"],
            othersearch: ["scommon"],
            autocomplete: ["scommon"],
            buslinesearch: ["route"],
            hotspot: []
        },
		// 需要与加载的模块
        preLoaded: {},
        Config: {
            _baseUrl: "http://api.map.baidu.com/getmodules?v=1.3",
            _timeout: 5000
        },
        delayFlag: false,
        Module: {
            _modules: {},//模块数组
            _arrMdls: [] //待加载的模块名称
        },
        load: function (cls_name, cbk) {
            var cls = this.current(cls_name);
            if (cls._status == this.Request.COMPLETED) {//请求完成
                return
            } else {
                if (cls._status == this.Request.INITIAL) {// 初始化
                    this.combine(cls_name);
                    this.pushUniqueMdl(cls_name);
                    var that = this;
                    if (that.delayFlag == false) {
                        that.delayFlag = true;
                        window.setTimeout(function () {
							// 将当前队列中的模块全部一次加载
                            var url = that.Config._baseUrl + "&mod=" + that.Module._arrMdls.join(",");
                            http.request(url);// 发送请求
                            that.Module._arrMdls.length = 0;
                            that.delayFlag = false
                        }, 1)
                    }
                    cls._status = this.Request.WAITING//标识为警告
                }
                cls._callbacks.push(cbk)//将需要执行的回调函数加入队列
            }
        },
		// 根据当前模块检查其依赖，进行合并加载
        combine: function (cls_name) {
            if (cls_name && this.Dependency[cls_name]) {
                var dependency = this.Dependency[cls_name];// 此包依赖
                for (var i = 0; i < dependency.length; i++) {
                    this.combine(dependency[i]);// 递归检查此包的依赖
                    if (!this.Module._modules[dependency[i]]) {// 如果此模块尚未加载，则加入队列
                        this.pushUniqueMdl(dependency[i])
                    }
                }
            }
        },
		// 加入唯一包名到队列
        pushUniqueMdl: function (cls_name) {
            for (var i = 0; i < this.Module._arrMdls.length; i++) {
                if (this.Module._arrMdls[i] == cls_name) {
                    return
                }
            }
            this.Module._arrMdls.push(cls_name)
        },
		// 将字符流转化为对象
        run: function (cls_name, cls_text) {
            var cls = this.current(cls_name);// 获取此类对应的状态和回调函数等
			// 异常捕获
            try {
                eval(cls_text)// text 2 class
            } catch (e) {
                return
            }
            cls._status = this.Request.COMPLETED;//标识为完成
            for (var i = 0, j = cls._callbacks.length; i < j; i++) {
                cls._callbacks[i]()
            }
            cls._callbacks.length = 0
        },
		// 模块检查，如不存在则加载
        check: function (cI, cJ) {
            var that = this;
            that.timeout = setTimeout(function () {
                var status = that.Module._modules[cI]._status;
                if (status != that.Request.COMPLETED) {
                    that.remove(cI);
                    that.load(cI, cJ)
                } else {
                    clearTimeout(that.timeout)
                }
            }, that.Config._timeout)
        },
		// 获取当前模块对应的数据，含状态，回调函数数组等
        current: function (/*模块名称*/cI) {
            var T;
            if (!this.Module._modules[cI]) {
                this.Module._modules[cI] = {};
                this.Module._modules[cI]._status = this.Request.INITIAL;
                this.Module._modules[cI]._callbacks = []
            }
            T = this.Module._modules[cI];
            return T
        },
		// 移出此模块
        remove: function (cI) {
            var T = this.current(cI);
            delete T
        }
    });
	// 动态加载模块
    window._jsload = function (cls_name, cls_text) {
        cx.run(cls_name, cls_text)
    };
	
	/* Pixel */
    var br,Pixel = br = function(T, cI) {
        this.x = T || 0;
        this.y = cI || 0
    }
    Pixel.prototype.equals = function (T) {
        return T && T.x == this.x && T.y == this.y
    };

    var aF,Size = aF = function(cI, T) {
        this.width = cI || 0;
        this.height = T || 0
    }
    Size.prototype.equals = function (T) {
        return T && this.width == T.width && this.height == T.height
    };
	/* Hotspot */
    var Hotspot = function cj(T, cI) {
        if (!T) {
            return
        }
        this._position = T;
        this.guid = "spot" + (Hotspot.guid++);
        cI = cI || {};
        this._text = cI.text || "";
        this._offsets = cI.offsets ? cI.offsets.slice(0) : [5, 5, 5, 5];
        this._userData = cI.userData || null;
        this._minZoom = cI.minZoom || null;
        this._maxZoom = cI.maxZoom || null
    }
    Hotspot.guid = 0;
    bmap.extend(Hotspot.prototype, {
        initialize: function (T) {
            if (this._minZoom == null) {
                this._minZoom = T.config.minZoom
            }
            if (this._maxZoom == null) {
                this._maxZoom = T.config.maxZoom
            }
        },
        setPosition: function (T) {
            if (T instanceof Point) {
                this._position = T
            }
        },
        getPosition: function () {
            return this._position
        },
        setText: function (T) {
            this._text = T
        },
        getText: function () {
            return this._text
        },
        setUserData: function (T) {
            this._userData = T
        },
        getUserData: function () {
            return this._userData
        }
    });

    var cm, Control = cm = function() {
        this._map = null;
        this._container;
        this._type = "control";
        this.blockInfoWindow = true;
        this._visible = true
    }
    bmap.lang.inherits(Control, bmap.lang.Class, "Control");
    bmap.extend(Control.prototype, {
        initialize: function (T) {
            this._map = T;
            if (this._container) {
                T.container.appendChild(this._container);
                return this._container
            }
            return
        },
        _i: function (T) {
            if (!this._container && this.initialize && G(this.initialize)) {
                this._container = this.initialize(T)
            }
            this._opts = this._opts || {
                printable: false
            };
            this._setStyle();
            this._setPosition();
            if (this._container) {
                this._container._jsobj = this
            }
        },
        _setStyle: function () {
            var cI = this._container;
            if (cI) {
                var T = cI.style;
                T.position = "absolute";
                T.zIndex = this._cZIndex || "10";
                T.MozUserSelect = "none";
                T.WebkitTextSizeAdjust = "none";
                if (!this._opts.printable) {
                    bmap.dom.addClass(cI, "BMap_noprint")
                }
                bmap.on(cI, "contextmenu", cl)
            }
        },
        remove: function () {
            this._map = null;
            if (!this._container) {
                return
            }
            this._container.parentNode && this._container.parentNode.removeChild(this._container);
            this._container._jsobj = null;
            this._container = null
        },
        _render: function () {
            this._container = aq(this._map.container, "<div unselectable='on'></div>");
            if (this._visible == false) {
                bmap.dom.hide(this._container)
            }
            return this._container
        },
        _setPosition: function () {
            this.setAnchor(this._opts.anchor)
        },
        setAnchor: function (cK) {
            if (this.anchorFixed || !aI(cK) || isNaN(cK) || cK < BMAP_ANCHOR_TOP_LEFT || cK > BMAP_ANCHOR_BOTTOM_RIGHT) {
                cK = this.defaultAnchor
            }
            this._opts = this._opts || {
                printable: false
            };
            this._opts.offset = this._opts.offset || this.defaultOffset;
            var cJ = this._opts.anchor;
            this._opts.anchor = cK;
            if (!this._container) {
                return
            }
            var cM = this._container;
            var T = this._opts.offset.width;
            var cL = this._opts.offset.height;
            cM.style.left = cM.style.top = cM.style.right = cM.style.bottom = "auto";
            switch (cK) {
            case BMAP_ANCHOR_TOP_LEFT:
                cM.style.top = cL + "px";
                cM.style.left = T + "px";
                break;
            case BMAP_ANCHOR_TOP_RIGHT:
                cM.style.top = cL + "px";
                cM.style.right = T + "px";
                break;
            case BMAP_ANCHOR_BOTTOM_LEFT:
                cM.style.bottom = cL + "px";
                cM.style.left = T + "px";
                break;
            case BMAP_ANCHOR_BOTTOM_RIGHT:
                cM.style.bottom = cL + "px";
                cM.style.right = T + "px";
                break;
            default:
                break
            }
            var cI = ["TL", "TR", "BL", "BR"];
            bmap.dom.removeClass(this._container, "anchor" + cI[cJ]);
            bmap.dom.addClass(this._container, "anchor" + cI[cK])
        },
        getAnchor: function () {
            return this._opts.anchor
        },
        setOffset: function (T) {
            if (!(T instanceof Size)) {
                return
            }
            this._opts = this._opts || {
                printable: false
            };
            this._opts.offset = new Size(T.width, T.height);
            if (!this._container) {
                return
            }
            this.setAnchor(this._opts.anchor)
        },
        getOffset: function () {
            return this._opts.offset
        },
        getDom: function () {
            return this._container
        },
        show: function () {
            if (this._visible == true) {
                return
            }
            this._visible = true;
            if (this._container) {
                bmap.dom.show(this._container)
            }
        },
        hide: function () {
            if (this._visible == false) {
                return
            }
            this._visible = false;
            if (this._container) {
                bmap.dom.hide(this._container)
            }
        },
        isPrintable: function () {
            return !!this._opts.printable
        },
        isVisible: function () {
            if (!this._container && !this._map) {
                return false
            }
            return !!this._visible
        }
    });
    window.BMAP_ANCHOR_TOP_LEFT = 0;
    window.BMAP_ANCHOR_TOP_RIGHT = 1;
    window.BMAP_ANCHOR_BOTTOM_LEFT = 2;
    window.BMAP_ANCHOR_BOTTOM_RIGHT = 3;
    window.BMAP_NAVIGATION_CONTROL_LARGE = 0;
    window.BMAP_NAVIGATION_CONTROL_SMALL = 1;
    window.BMAP_NAVIGATION_CONTROL_PAN = 2;
    window.BMAP_NAVIGATION_CONTROL_ZOOM = 3;

    var J, NavigationControl = J = function(T) {
        Control.call(this);
        T = T || {};
        this._opts = {
            printable: false,
            showZoomInfo: true
        };
        bmap.object.extend(this._opts, T);
        this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
        this.defaultOffset = new Size(10, 10);
        this.setAnchor(T.anchor);
        this.setType(T.type);
        this._asyncLoadCode()
    }
    bmap.lang.inherits(NavigationControl, Control, "NavigationControl");
    bmap.extend(NavigationControl.prototype, {
        initialize: function (T) {
            this._map = T;
            return this._container
        },
        setType: function (T) {
            if (aI(T) && T >= BMAP_NAVIGATION_CONTROL_LARGE && T <= BMAP_NAVIGATION_CONTROL_ZOOM) {
                this._opts.type = T
            } else {
                this._opts.type = BMAP_NAVIGATION_CONTROL_LARGE
            }
        },
        getType: function () {
            return this._opts.type
        },
        _asyncLoadCode: function () {
            var T = this;
            cx.load("control", function () {
                T._asyncDraw()
            })
        }
    });

    var ak,CopyrightControl = ak = function(T) {
        Control.call(this);
        T = T || {};
        this._opts = {
            printable: false
        };
        bmap.object.extend(this._opts, T);
        this._copyrightCollection = [];
        this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
        this.defaultOffset = new Size(5, 2);
        this.setAnchor(T.anchor);
        this._canShow = true;
        this.blockInfoWindow = false;
        this._asyncLoadCode()
    }
    bmap.lang.inherits(CopyrightControl, Control, "CopyrightControl");
    bmap.object.extend(CopyrightControl.prototype, {
        initialize: function (T) {
            this._map = T;
            return this._container
        },
        addCopyright: function (cJ) {
            if (!cJ || !aI(cJ.id) || isNaN(cJ.id)) {
                return
            }
            var T = {
                bounds: null,
                content: ""
            };
            for (var cI in cJ) {
                T[cI] = cJ[cI]
            }
            var cK = this.getCopyright(cJ.id);
            if (cK) {
                for (var cL in T) {
                    cK[cL] = T[cL]
                }
            } else {
                this._copyrightCollection.push(T)
            }
        },
        getCopyright: function (cJ) {
            for (var cI = 0, T = this._copyrightCollection.length; cI < T; cI++) {
                if (this._copyrightCollection[cI].id == cJ) {
                    return this._copyrightCollection[cI]
                }
            }
        },
        getCopyrightCollection: function () {
            return this._copyrightCollection
        },
        removeCopyright: function (cJ) {
            for (var cI = 0, T = this._copyrightCollection.length; cI < T; cI++) {
                if (this._copyrightCollection[cI].id == cJ) {
                    r = this._copyrightCollection.splice(cI, 1);
                    cI--;
                    T = this._copyrightCollection.length
                }
            }
        },
        _asyncLoadCode: function () {
            var T = this;
            cx.load("control", function () {
                T._asyncDraw()
            })
        }
    });

    var cH,OverviewMapControl = cH = function(T) {
        Control.call(this);
        T = T || {};
        this._opts = {
            printable: false
        };
        this._opts = bmap.extend(bmap.extend(this._opts, {
            size: new Size(150, 150),
            padding: 5,
            isOpen: false,
            zoomInterval: 4
        }), T);
        this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;
        this.defaultOffset = new Size(0, 0);
        this._btnWidth = 13;
        this._btnHeight = 13;
        this.setAnchor(T.anchor);
        this.setSize(this._opts.size);
        this._asyncLoadCode()
    }
    bmap.lang.inherits(OverviewMapControl, Control, "OverviewMapControl");
    bmap.extend(OverviewMapControl.prototype, {
        initialize: function (T) {
            this._map = T;
            return this._container
        },
        setAnchor: function (T) {
            Control.prototype.setAnchor.call(this, T)
        },
        changeView: function () {
            this.changeView._running = true;
            this._opts.isOpen = !this._opts.isOpen;
            if (!this._container) {
                this.changeView._running = false
            }
        },
        setSize: function (T) {
            if (!(T instanceof Size)) {
                T = new Size(150, 150)
            }
            T.width = T.width > 0 ? T.width : 150;
            T.height = T.height > 0 ? T.height : 150;
            this._opts.size = T
        },
        getSize: function () {
            return this._opts.size
        },
        isOpen: function () {
            return this._opts.isOpen
        },
        _asyncLoadCode: function () {
            var T = this;
            cx.load("control", function () {
                T._asyncDraw()
            })
        }
    });

    var bH, ScaleControl = bH = function(T) {
        Control.call(this);
        T = T || {};
        this._opts = {
            printable: false
        };
        this._opts = bmap.object.extend(bmap.object.extend(this._opts, {
            color: "black",
            unit: "metric"
        }), T);
        this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
        this.defaultOffset = new Size(81, 18);
        this.setAnchor(T.anchor);
        this._units = {
            metric: {
                name: "metric",
                conv: 1,
                incon: 1000,
                u1: "\u7c73",
                u2: "\u516c\u91cc"
            },
            us: {
                name: "us",
                conv: 3.2808,
                incon: 5280,
                u1: "\u82f1\u5c3a",
                u2: "\u82f1\u91cc"
            }
        };
        if (!this._units[this._opts.unit]) {
            this._opts.unit = "metric"
        }
        this._scaleText = null;
        this._numberArray = {};
        this._asyncLoadCode()
    }
    window.BMAP_UNIT_METRIC = "metric";
    window.BMAP_UNIT_IMPERIAL = "us";
    bmap.lang.inherits(ScaleControl, Control, "ScaleControl");
    bmap.object.extend(ScaleControl.prototype, {
        initialize: function (T) {
            this._map = T;
            return this._container
        },
        setColor: function (T) {
            this._opts.color = T + ""
        },
        getColor: function () {
            return this._opts.color
        },
        setUnit: function (T) {
            this._opts.unit = this._units[T] && this._units[T].name || this._opts.unit
        },
        getUnit: function () {
            return this._opts.unit
        },
        _asyncLoadCode: function () {
            var T = this;
            cx.load("control", function () {
                T._asyncDraw()
            })
        }
    });
    window.BMAP_MAPTYPE_CONTROL_HORIZONTAL = 0;
    window.BMAP_MAPTYPE_CONTROL_DROPDOWN = 1;

    var aJ,MapTypeControl = aJ = function(T) {
        Control.call(this);
        T = T || {};
        this._opts = {
            printable: false,
            mapTypes: [BMAP_NORMAL_MAP, BMAP_SATELLITE_MAP, BMAP_HYBRID_MAP, BMAP_PERSPECTIVE_MAP],
            type: BMAP_MAPTYPE_CONTROL_HORIZONTAL
        };
        this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT;
        this.defaultOffset = new Size(10, 10);
        this.setAnchor(T.anchor);
        this._opts = bmap.extend(bmap.extend(this._opts, {
            offset: this.defaultOffset,
            enableSwitch: true
        }), T);
        if (aW(T.mapTypes)) {
            this._opts.mapTypes = T.mapTypes.slice(0)
        }
        this._asyncLoadCode()
    }
    bmap.lang.inherits(MapTypeControl, Control, "MapTypeControl");
    bmap.object.extend(MapTypeControl.prototype, {
        initialize: function (T) {
            this._map = T;
            return this._container
        },
        _asyncLoadCode: function () {
            var T = this;
            cx.load("control", function () {
                T._asyncDraw()
            })
        }
    });

    var ContextMenu = function cw(cI) {
        bmap.lang.Class.call(this);
        this._opts = {
            container: null,
            cursor: "default"
        };
        this._opts = bmap.extend(this._opts, cI);
        this._type = "contextmenu";
        this._map = null;
        this._container;
        this._shadow;
        this._left = 0;
        this._top = 0;
        this._items = [];
        this._rItems = [];
        this._dividers = [];
        this.curPixel = null;
        this.curPoint = null;
        this._isOpen = false;
        var T = this;
        cx.load("menu", function () {
            T._draw()
        })
    }
    bmap.lang.inherits(ContextMenu, bmap.lang.Class, "ContextMenu");
    bmap.object.extend(ContextMenu.prototype, {
        initialize: function (cI, T) {
            this._map = cI;
            this._overlay = T || null
        },
        remove: function () {
            this._map = this._overlay = null
        },
        addItem: function (cJ) {
            if (!cJ || cJ._type != "menuitem" || cJ._text == "" || cJ._width <= 0) {
                return
            }
            for (var cI = 0, T = this._items.length; cI < T; cI++) {
                if (this._items[cI] === cJ) {
                    return
                }
            }
            this._items.push(cJ);
            this._rItems.push(cJ)
        },
        removeItem: function (cJ) {
            if (!cJ || cJ._type != "menuitem") {
                return
            }
            for (var cI = 0, T = this._items.length; cI < T; cI++) {
                if (this._items[cI] === cJ) {
                    this._items[cI].remove();
                    this._items.splice(cI, 1);
                    T--
                }
            }
            for (var cI = 0, T = this._rItems.length; cI < T; cI++) {
                if (this._rItems[cI] === cJ) {
                    this._rItems[cI].remove();
                    this._rItems.splice(cI, 1);
                    T--
                }
            }
        },
        addSeparator: function () {
            this._items.push({
                _type: "divider",
                _dIndex: this._dividers.length
            });
            this._dividers.push({
                dom: null
            })
        },
        removeSeparator: function (cI) {
            if (!this._dividers[cI]) {
                return
            }
            for (var cJ = 0, T = this._items.length; cJ < T; cJ++) {
                if (this._items[cJ] && this._items[cJ]._type == "divider" && this._items[cJ]._dIndex == cI) {
                    this._items.splice(cJ, 1);
                    T--
                }
                if (this._items[cJ] && this._items[cJ]._type == "divider" && this._items[cJ]._dIndex > cI) {
                    this._items[cJ]._dIndex--
                }
            }
            this._dividers.splice(cI, 1)
        },
        getDom: function () {
            return this._container
        },
        show: function () {
            if (this._isOpen == true) {
                return
            }
            this._isOpen = true
        },
        hide: function () {
            if (this._isOpen == false) {
                return
            }
            this._isOpen = false
        },
        setCursor: function (T) {
            if (!T) {
                return
            }
            this._opts.cursor = T
        },
        getItem: function (T) {
            return this._rItems[T]
        }
    });

    var MenuItem = function bb(cJ, cK, cI) {
        if (!cJ || !G(cK)) {
            return
        }
        bmap.lang.Class.call(this);
        this._opts = {
            width: 100,
            id: ""
        };
        cI = cI || {};
        this._opts.width = (cI.width * 1) ? cI.width : 100;
        this._opts.id = cI.id ? cI.id : "";
        this._text = cJ + "";
        this._callback = cK;
        this._map = null;
        this._type = "menuitem";
        this._contextmenu = null;
        this._container = null;
        this._enabled = true;
        var T = this;
        cx.load("menu", function () {
            T._draw()
        })
    }
    bmap.lang.inherits(MenuItem, bmap.lang.Class, "MenuItem");
    bmap.object.extend(MenuItem.prototype, {
        initialize: function (T, cI) {
            this._map = T;
            this._contextmenu = cI
        },
        remove: function () {
            this._contextmenu = null;
            this._map = null
        },
        setText: function (T) {
            if (!T) {
                return
            }
            this._text = T + ""
        },
        getDom: function () {
            return this._container
        },
        enable: function () {
            this._enabled = true
        },
        disable: function () {
            this._enabled = false
        }
    });

    var bK,Bounds = bK = function(T, cI) {
        if (T && !cI) {
            cI = T
        }
        this._sw = this._ne = null;
        this._swLng = this._swLat = null;
        this._neLng = this._neLat = null;
        if (T) {
            this._sw = new Point(T.lng, T.lat);
            this._ne = new Point(cI.lng, cI.lat);
            this._swLng = T.lng;
            this._swLat = T.lat;
            this._neLng = cI.lng;
            this._neLat = cI.lat
        }
    }
    bmap.object.extend(Bounds.prototype, {
        isEmpty: function () {
            return !this._sw || !this._ne
        },
        equals: function (T) {
            if (!(T instanceof Bounds) || this.isEmpty()) {
                return false
            }
            return this.getSouthWest().equals(T.getSouthWest()) && this.getNorthEast().equals(T.getNorthEast())
        },
        getSouthWest: function () {
            return this._sw
        },
        getNorthEast: function () {
            return this._ne
        },
        containsBounds: function (T) {
            if (!(T instanceof Bounds) || this.isEmpty() || T.isEmpty()) {
                return false
            }
            return (T._swLng > this._swLng && T._neLng < this._neLng && T._swLat > this._swLat && T._neLat < this._neLat)
        },
        getCenter: function () {
            if (this.isEmpty()) {
                return null
            }
            return new Point((this._swLng + this._neLng) / 2, (this._swLat + this._neLat) / 2)
        },
        intersects: function (cJ) {
            if (!(cJ instanceof Bounds)) {
                return null
            }
            if (Math.max(cJ._swLng, cJ._neLng) < Math.min(this._swLng, this._neLng) || Math.min(cJ._swLng, cJ._neLng) > Math.max(this._swLng, this._neLng) || Math.max(cJ._swLat, cJ._neLat) < Math.min(this._swLat, this._neLat) || Math.min(cJ._swLat, cJ._neLat) > Math.max(this._swLat, this._neLat)) {
                return null
            }
            var cL = Math.max(this._swLng, cJ._swLng);
            var cI = Math.min(this._neLng, cJ._neLng);
            var cK = Math.max(this._swLat, cJ._swLat);
            var T = Math.min(this._neLat, cJ._neLat);
            return new Bounds(new Point(cL, cK), new Point(cI, T))
        },
        containsPoint: function (T) {
            if (!(T instanceof Point) || this.isEmpty()) {
                return false
            }
            return (T.lng >= this._swLng && T.lng <= this._neLng && T.lat >= this._swLat && T.lat <= this._neLat)
        },
        extend: function (T) {
            if (!(T instanceof Point)) {
                return
            }
            var cI = T.lng,
                cJ = T.lat;
            if (!this._sw) {
                this._sw = new Point(0, 0)
            }
            if (!this._ne) {
                this._ne = new Point(0, 0)
            }
            if (!this._swLng || this._swLng > cI) {
                this._sw.lng = this._swLng = cI
            }
            if (!this._neLng || this._neLng < cI) {
                this._ne.lng = this._neLng = cI
            }
            if (!this._swLat || this._swLat > cJ) {
                this._sw.lat = this._swLat = cJ
            }
            if (!this._neLat || this._neLat < cJ) {
                this._ne.lat = this._neLat = cJ
            }
        },
        toSpan: function () {
            if (this.isEmpty()) {
                return new Point(0, 0)
            }
            return new Point(Math.abs(this._neLng - this._swLng), Math.abs(this._neLat - this._swLat))
        }
    });

    var ca,Point = ca = function(T, cI) {
        if (isNaN(T)) {
            T = bS(T);
            T = isNaN(T) ? 0 : T
        }
        if (b0(T)) {
            T = parseFloat(T)
        }
        if (isNaN(cI)) {
            cI = bS(cI);
            cI = isNaN(cI) ? 0 : cI
        }
        if (b0(cI)) {
            cI = parseFloat(cI)
        }
        this.lng = T;
        this.lat = cI
    }
    Point.isInRange = function (T) {
        return T && T.lng <= 180 && T.lng >= -180 && T.lat <= 74 && T.lat >= -74
    };
    Point.prototype.equals = function (T) {
        return T && this.lat == T.lat && this.lng == T.lng
    };

    var Projection = function ba() {}
    Projection.prototype.lngLatToPoint = function () {
        throw "lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0"
    };
    Projection.prototype.pointToLngLat = function () {
        throw "pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0"
    };

    function b3() {}
    bmap.extend(b3, {
        num: {
            bj: {
                num: Math.sin(Math.PI / 4),
                num2: Math.sin(Math.PI / 6)
            },
            gz: {
                num: Math.sin(Math.PI / 4),
                num2: Math.sin(Math.PI / 4)
            },
            sz: {
                num: Math.sin(Math.PI / 4),
                num2: Math.sin(Math.PI / 4)
            },
            sh: {
                num: Math.sin(Math.PI / 4),
                num2: Math.sin(Math.PI / 4)
            }
        },
        correct_pts: {
            bj: [{
                j: 116.305687,
                w: 39.990912,
                utm_x: 12947230.73,
                utm_y: 4836903.65,
                x: 630412,
                y: 547340
            }, {
                j: 116.381837,
                w: 40.000198,
                utm_x: 12955707.8,
                utm_y: 4838247.62,
                x: 667412,
                y: 561832
            }, {
                j: 116.430651,
                w: 39.995216,
                utm_x: 12961141.81,
                utm_y: 4837526.55,
                x: 686556,
                y: 573372
            }, {
                j: 116.474111,
                w: 39.976323,
                utm_x: 12965979.81,
                utm_y: 4834792.55,
                x: 697152,
                y: 586816
            }, {
                j: 116.280328,
                w: 39.953159,
                utm_x: 12944407.75,
                utm_y: 4831441.53,
                x: 603272,
                y: 549976
            }, {
                j: 116.316117,
                w: 39.952496,
                utm_x: 12948391.8,
                utm_y: 4831345.64,
                x: 618504,
                y: 557872
            }, {
                j: 116.350477,
                w: 39.938107,
                utm_x: 12952216.78,
                utm_y: 4829264.65,
                x: 627044,
                y: 568220
            }, {
                j: 116.432025,
                w: 39.947158,
                utm_x: 12961294.76,
                utm_y: 4830573.59,
                x: 666280,
                y: 584016
            }, {
                j: 116.46873,
                w: 39.949516,
                utm_x: 12965380.79,
                utm_y: 4830914.63,
                x: 683328,
                y: 591444
            }, {
                j: 116.280077,
                w: 39.913823,
                utm_x: 12944379.8,
                utm_y: 4825753.62,
                x: 586150,
                y: 558552
            }, {
                j: 116.308625,
                w: 39.91374,
                utm_x: 12947557.79,
                utm_y: 4825741.62,
                x: 598648,
                y: 564732
            }, {
                j: 116.369853,
                w: 39.912979,
                utm_x: 12954373.73,
                utm_y: 4825631.62,
                x: 624561,
                y: 578039
            }, {
                j: 116.433552,
                w: 39.914694,
                utm_x: 12961464.75,
                utm_y: 4825879.53,
                x: 652972,
                y: 591348
            }, {
                j: 116.457034,
                w: 39.914273,
                utm_x: 12964078.78,
                utm_y: 4825818.67,
                x: 663028,
                y: 596444
            }, {
                j: 116.490927,
                w: 39.914127,
                utm_x: 12967851.77,
                utm_y: 4825797.57,
                x: 677968,
                y: 604188
            }, {
                j: 116.483839,
                w: 39.877198,
                utm_x: 12967062.73,
                utm_y: 4820460.67,
                x: 658596,
                y: 610312
            }, {
                j: 116.405777,
                w: 39.864461,
                utm_x: 12958372.82,
                utm_y: 4818620.62,
                x: 619256,
                y: 596088
            }, {
                j: 116.35345,
                w: 39.859774,
                utm_x: 12952547.74,
                utm_y: 4817943.6,
                x: 594633,
                y: 585851
            }, {
                j: 116.403818,
                w: 39.9141,
                utm_x: 12958154.74,
                utm_y: 4825793.66,
                x: 639699,
                y: 585226
            }, {
                j: 116.318111,
                w: 39.891101,
                utm_x: 12948613.78,
                utm_y: 4822469.56,
                x: 592856,
                y: 571480
            }, {
                j: 116.413047,
                w: 39.907238,
                utm_x: 12959182.12,
                utm_y: 4824801.76,
                x: 640680,
                y: 588704
            }, {
                j: 116.390843,
                w: 39.906113,
                utm_x: 12956710.35,
                utm_y: 4824639.16,
                x: 630620,
                y: 584108
            }, {
                j: 116.446527,
                w: 39.899438,
                utm_x: 12962909.14,
                utm_y: 4823674.4,
                x: 651752,
                y: 597416
            }, {
                j: 116.388665,
                w: 39.95527,
                utm_x: 12956467.9,
                utm_y: 4831746.87,
                x: 650656,
                y: 572800
            }, {
                j: 116.398343,
                w: 39.939704,
                utm_x: 12957545.26,
                utm_y: 4829495.6,
                x: 648036,
                y: 578452
            }, {
                j: 116.355101,
                w: 39.973581,
                utm_x: 12952731.53,
                utm_y: 4834395.82,
                x: 643268,
                y: 560944
            }, {
                j: 116.380727,
                w: 39.88464,
                utm_x: 12955584.23,
                utm_y: 4821535.94,
                x: 616920,
                y: 586496
            }, {
                j: 116.360843,
                w: 39.946452,
                utm_x: 12953370.73,
                utm_y: 4830471.48,
                x: 635293,
                y: 568765
            }, {
                j: 116.340955,
                w: 39.973421,
                utm_x: 12951156.79,
                utm_y: 4834372.67,
                x: 638420,
                y: 558632
            }, {
                j: 116.322585,
                w: 40.023941,
                utm_x: 12949111.83,
                utm_y: 4841684.79,
                x: 652135,
                y: 543802
            }, {
                j: 116.356486,
                w: 39.883341,
                utm_x: 12952885.71,
                utm_y: 4821348.24,
                x: 606050,
                y: 581443
            }, {
                j: 116.339592,
                w: 39.992259,
                utm_x: 12951005.06,
                utm_y: 4837098.59,
                x: 645664,
                y: 554400
            }, {
                j: 116.3778,
                w: 39.86392,
                utm_x: 12955258.4,
                utm_y: 4818542.48,
                x: 606848,
                y: 590328
            }, {
                j: 116.377354,
                w: 39.964124,
                utm_x: 12955208.75,
                utm_y: 4833027.64,
                x: 649911,
                y: 568581
            }, {
                j: 116.361837,
                w: 39.963897,
                utm_x: 12953481.39,
                utm_y: 4832994.8,
                x: 643286,
                y: 565175
            }, {
                j: 116.441397,
                w: 39.939403,
                utm_x: 12962338.06,
                utm_y: 4829452.07,
                x: 666772,
                y: 587728
            }, {
                j: 116.359176,
                w: 40.006631,
                utm_x: 12953185.16,
                utm_y: 4839178.78,
                x: 660440,
                y: 555411
            }],
            sz: [{
                w: 22.498861,
                utm_x: 12677279.029193671,
                utm_y: 2555027.9501714734,
                j: 113.880696,
                y: 1104472,
                x: 947240
            }, {
                w: 22.500706,
                utm_x: 12683920.978881944,
                utm_y: 2555248.973138607,
                j: 113.940361,
                y: 1122320,
                x: 974864
            }, {
                w: 22.576848,
                utm_x: 12675897.984563945,
                utm_y: 2564373.058056766,
                j: 113.86829,
                y: 1074048,
                x: 979136
            }, {
                w: 22.55689,
                utm_x: 12680064.05051775,
                utm_y: 2561981.0013635466,
                j: 113.905714,
                y: 1092484,
                x: 986240
            }, {
                w: 22.58066,
                utm_x: 12678671.98513852,
                utm_y: 2564829.983373251,
                j: 113.893209,
                y: 1080528,
                x: 992088
            }, {
                w: 22.595751,
                utm_x: 12678298.949465925,
                utm_y: 2566638.9913895614,
                j: 113.889858,
                y: 1074484,
                x: 997960
            }, {
                w: 22.557499,
                utm_x: 12684523.001238672,
                utm_y: 2562053.9875916084,
                j: 113.945769,
                y: 1104696,
                x: 1004564
            }, {
                w: 22.648419,
                utm_x: 12676422.97299485,
                utm_y: 2572954.0513219936,
                j: 113.873006,
                y: 1051384,
                x: 1015916
            }, {
                w: 22.562664,
                utm_x: 12690460.958807131,
                utm_y: 2562673.0054078405,
                j: 113.99911,
                y: 1119860,
                x: 1030228
            }, {
                w: 22.646618,
                utm_x: 12683008.037804369,
                utm_y: 2572738.0652955617,
                j: 113.93216,
                y: 1070324,
                x: 1041496
            }, {
                w: 22.571091,
                utm_x: 12695789.992135335,
                utm_y: 2563683.019582462,
                j: 114.046981,
                y: 1131924,
                x: 1055628
            }, {
                w: 22.704467,
                utm_x: 12682276.994753957,
                utm_y: 2579677.075645295,
                j: 113.925593,
                y: 1048536,
                x: 1066348
            }, {
                w: 22.547152,
                utm_x: 12702917.96800879,
                utm_y: 2560813.9850610085,
                j: 114.111012,
                y: 1160352,
                x: 1072596
            }, {
                w: 22.546192,
                utm_x: 12704502.952164687,
                utm_y: 2560698.9417545213,
                j: 114.12525,
                y: 1165256,
                x: 1078452
            }, {
                w: 22.5714,
                utm_x: 12702350.00978689,
                utm_y: 2563720.0558210905,
                j: 114.10591,
                y: 1150556,
                x: 1081960
            }, {
                w: 22.555004,
                utm_x: 12704883.001041513,
                utm_y: 2561754.9738317807,
                j: 114.128664,
                y: 1163304,
                x: 1084172
            }, {
                w: 22.551925,
                utm_x: 12706255.028694374,
                utm_y: 2561385.978019464,
                j: 114.140989,
                y: 1168216,
                x: 1088116
            }, {
                w: 22.693756,
                utm_x: 12690318.02302569,
                utm_y: 2578392.0635360866,
                j: 113.997826,
                y: 1075100,
                x: 1092860
            }, {
                w: 22.573769,
                utm_x: 12705731.042149788,
                utm_y: 2564004.003107545,
                j: 114.136282,
                y: 1159404,
                x: 1096572
            }, {
                w: 22.583238,
                utm_x: 12706369.021093281,
                utm_y: 2565139.002548978,
                j: 114.142013,
                y: 1157896,
                x: 1103632
            }, {
                w: 22.605844,
                utm_x: 12704694.980375737,
                utm_y: 2567848.984570506,
                j: 114.126975,
                y: 1145540,
                x: 1107972
            }, {
                w: 22.637228,
                utm_x: 12702545.043656897,
                utm_y: 2571612.010208761,
                j: 114.107662,
                y: 1128764,
                x: 1114460
            }, {
                w: 22.62496,
                utm_x: 12707132.013185183,
                utm_y: 2570140.9407190788,
                j: 114.148867,
                y: 1145732,
                x: 1127028
            }, {
                w: 22.644524,
                utm_x: 12707016.01701364,
                utm_y: 2572486.9446672536,
                j: 114.147825,
                y: 1138800,
                x: 1135876
            }, {
                w: 22.640188,
                utm_x: 12711515.0431873,
                utm_y: 2571966.966986786,
                j: 114.18824,
                y: 1152692,
                x: 1151836
            }, {
                w: 22.59807,
                utm_x: 12720011.039168343,
                utm_y: 2566916.995355996,
                j: 114.26456,
                y: 1191212,
                x: 1165180
            }, {
                w: 22.668221,
                utm_x: 12714081.987256048,
                utm_y: 2575329.007304823,
                j: 114.211299,
                y: 1150576,
                x: 1175404
            }, {
                w: 22.702591,
                utm_x: 12717292.031020584,
                utm_y: 2579452.0022288463,
                j: 114.240135,
                y: 1148204,
                x: 1204600
            }, {
                w: 22.731786,
                utm_x: 12717795.9798388,
                utm_y: 2582955.0308636553,
                j: 114.244662,
                y: 1139532,
                x: 1220540
            }, {
                w: 22.727494,
                utm_x: 12720675.957721734,
                utm_y: 2582439.9980541077,
                j: 114.270533,
                y: 1148992,
                x: 1230084
            }, {
                w: 22.716335,
                utm_x: 12725500.040345404,
                utm_y: 2581101.0132384477,
                j: 114.313868,
                y: 1166316,
                x: 1244102
            }],
            gz: [{
                j: 113.335098,
                w: 23.147289,
                utm_x: 12616542.68,
                utm_y: 2632892.7,
                x: 1129109,
                y: 1073920
            }, {
                j: 113.320932,
                w: 23.146956,
                utm_x: 12614965.71,
                utm_y: 2632852.62,
                x: 1125620,
                y: 1071640
            }, {
                j: 113.321435,
                w: 23.140119,
                utm_x: 12615021.7,
                utm_y: 2632029.65,
                x: 1124032,
                y: 1072882
            }, {
                j: 113.321471,
                w: 23.119165,
                utm_x: 12615025.71,
                utm_y: 2629507.68,
                x: 1118932,
                y: 1076530
            }, {
                j: 113.340201,
                w: 23.118616,
                utm_x: 12617110.75,
                utm_y: 2629441.61,
                x: 1123238,
                y: 1079667
            }, {
                j: 113.358068,
                w: 23.116323,
                utm_x: 12619099.71,
                utm_y: 2629165.66,
                x: 1126968,
                y: 1083116
            }, {
                j: 113.357529,
                w: 23.131271,
                utm_x: 12619039.71,
                utm_y: 2630964.68,
                x: 1130508,
                y: 1080440
            }, {
                j: 113.365811,
                w: 23.150595,
                utm_x: 12619961.67,
                utm_y: 2633290.66,
                x: 1137205,
                y: 1078567
            }, {
                j: 113.294145,
                w: 23.118467,
                utm_x: 12611983.76,
                utm_y: 2629423.68,
                x: 1112245,
                y: 1072043
            }, {
                j: 113.28615,
                w: 23.121525,
                utm_x: 12611093.75,
                utm_y: 2629791.7,
                x: 1110993,
                y: 1070197
            }, {
                j: 113.307152,
                w: 23.055497,
                utm_x: 12613431.71,
                utm_y: 2621847.21,
                x: 1100144,
                y: 1085123
            }, {
                j: 113.333445,
                w: 23.052687,
                utm_x: 12616358.66,
                utm_y: 2621509.2,
                x: 1105784,
                y: 1089948
            }, {
                j: 113.347476,
                w: 23.048755,
                utm_x: 12617920.6,
                utm_y: 2621036.24,
                x: 1108099,
                y: 1093064
            }, {
                j: 113.385774,
                w: 23.036574,
                utm_x: 12622183.96,
                utm_y: 2619571.12,
                x: 1113850,
                y: 1101834
            }, {
                j: 113.364185,
                w: 22.89798,
                utm_x: 12619780.66,
                utm_y: 2602910.64,
                x: 1073186,
                y: 1123374
            }, {
                j: 113.404577,
                w: 22.906481,
                utm_x: 12624277.13,
                utm_y: 2603932.06,
                x: 1084888,
                y: 1128692
            }, {
                j: 113.430856,
                w: 22.913156,
                utm_x: 12627202.52,
                utm_y: 2604734.12,
                x: 1092892,
                y: 1131761
            }, {
                j: 113.384554,
                w: 22.933021,
                utm_x: 12622048.15,
                utm_y: 2607121.32,
                x: 1086975,
                y: 1120403
            }, {
                j: 113.263566,
                w: 23.146333,
                utm_x: 12608579.68,
                utm_y: 2632777.63,
                x: 1111742,
                y: 1062098
            }, {
                j: 113.239213,
                w: 23.152996,
                utm_x: 12605868.69,
                utm_y: 2633579.69,
                x: 1107616,
                y: 1056740
            }, {
                j: 113.253865,
                w: 23.131628,
                utm_x: 12607499.76,
                utm_y: 2631007.65,
                x: 1105912,
                y: 1062966
            }, {
                j: 113.240767,
                w: 23.088434,
                utm_x: 12606041.68,
                utm_y: 2625809.7,
                x: 1092270,
                y: 1068184
            }, {
                j: 113.279628,
                w: 23.088284,
                utm_x: 12610367.72,
                utm_y: 2625791.65,
                x: 1101412,
                y: 1074883
            }, {
                j: 113.462271,
                w: 23.107058,
                utm_x: 12630699.66,
                utm_y: 2628050.7,
                x: 1148752,
                y: 1101736
            }, {
                j: 113.401618,
                w: 23.052957,
                utm_x: 12623947.73,
                utm_y: 2621541.68,
                x: 1121925,
                y: 1101535
            }, {
                j: 113.422504,
                w: 23.05905,
                utm_x: 12626272.77,
                utm_y: 2622274.61,
                x: 1128470,
                y: 1104049
            }, {
                j: 113.362506,
                w: 23.107149,
                utm_x: 12619593.75,
                utm_y: 2628061.65,
                x: 1125835,
                y: 1085505
            }, {
                j: 113.419629,
                w: 23.143176,
                utm_x: 12625952.73,
                utm_y: 2632397.61,
                x: 1148133,
                y: 1089052
            }, {
                j: 113.23315,
                w: 23.062251,
                utm_x: 12605193.75,
                utm_y: 2622659.67,
                x: 1084184,
                y: 1071368
            }, {
                j: 113.314525,
                w: 23.101412,
                utm_x: 12614252.48,
                utm_y: 2627371.29,
                x: 1113011,
                y: 1078426
            }, {
                j: 113.307947,
                w: 23.131369,
                utm_x: 12613520.21,
                utm_y: 2630976.47,
                x: 1118622,
                y: 1072198
            }],
            sh: [{
                j: 121.524411,
                w: 31.245875,
                utm_x: 13528182.75,
                utm_y: 3642354.51,
                x: 1086581,
                y: 1065728
            }, {
                j: 121.419229,
                w: 31.244887,
                utm_x: 13516473.81,
                utm_y: 3642226.51,
                x: 1032616,
                y: 1029148
            }, {
                j: 121.405637,
                w: 31.237871,
                utm_x: 13514960.74,
                utm_y: 3641317.54,
                x: 1022724,
                y: 1027244
            }, {
                j: 121.415348,
                w: 31.222879,
                utm_x: 13516041.78,
                utm_y: 3639375.47,
                x: 1018548,
                y: 1036980
            }, {
                j: 121.422561,
                w: 31.224261,
                utm_x: 13516844.73,
                utm_y: 3639554.48,
                x: 1022976,
                y: 1038908
            }, {
                j: 121.412581,
                w: 31.204148,
                utm_x: 13515733.75,
                utm_y: 3636949.48,
                x: 1006568,
                y: 1043696
            }, {
                j: 121.443025,
                w: 31.206202,
                utm_x: 13519122.8,
                utm_y: 3637215.49,
                x: 1022656,
                y: 1053704
            }, {
                j: 121.524061,
                w: 31.246917,
                utm_x: 13528143.79,
                utm_y: 3642489.52,
                x: 1082052,
                y: 1064124
            }, {
                j: 121.529343,
                w: 31.217769,
                utm_x: 13528731.78,
                utm_y: 3638713.59,
                x: 1072696,
                y: 1079064
            }, {
                j: 121.530268,
                w: 31.210341,
                utm_x: 13528834.75,
                utm_y: 3637751.53,
                x: 1068748,
                y: 1082416
            }, {
                j: 121.511601,
                w: 31.227303,
                utm_x: 13526756.73,
                utm_y: 3639948.53,
                x: 1069276,
                y: 1068716
            }, {
                j: 121.4966,
                w: 31.243614,
                utm_x: 13525086.81,
                utm_y: 3642061.58,
                x: 1071220,
                y: 1056805
            }, {
                j: 121.485021,
                w: 31.26138,
                utm_x: 13523797.82,
                utm_y: 3644363.54,
                x: 1075708,
                y: 1045540
            }, {
                j: 121.465114,
                w: 31.278803,
                utm_x: 13521581.76,
                utm_y: 3646621.48,
                x: 1073740,
                y: 1031268
            }, {
                j: 121.454784,
                w: 31.266566,
                utm_x: 13520431.82,
                utm_y: 3645035.58,
                x: 1063591,
                y: 1033191
            }, {
                j: 121.46851,
                w: 31.24951,
                utm_x: 13521959.81,
                utm_y: 3642825.48,
                x: 1060200,
                y: 1044520
            }, {
                j: 121.446384,
                w: 31.248422,
                utm_x: 13519496.73,
                utm_y: 3642684.51,
                x: 1048784,
                y: 1037750
            }, {
                j: 121.509499,
                w: 31.246469,
                utm_x: 13526522.73,
                utm_y: 3642431.47,
                x: 1079309,
                y: 1060105
            }, {
                j: 121.481643,
                w: 31.283943,
                utm_x: 13523421.78,
                utm_y: 3647287.68,
                x: 1087096,
                y: 1035304
            }, {
                j: 121.508054,
                w: 31.280609,
                utm_x: 13526361.87,
                utm_y: 3646855.56,
                x: 1098432,
                y: 1045648
            }, {
                j: 121.493854,
                w: 31.19121,
                utm_x: 13524781.12,
                utm_y: 3635274.07,
                x: 1039624,
                y: 1077288
            }, {
                j: 121.500079,
                w: 31.185541,
                utm_x: 13525474.09,
                utm_y: 3634540.04,
                x: 1039960,
                y: 1081640
            }, {
                j: 121.484482,
                w: 31.202846,
                utm_x: 13523737.82,
                utm_y: 3636780.87,
                x: 1041388,
                y: 1069232
            }, {
                j: 121.480877,
                w: 31.189587,
                utm_x: 13523336.51,
                utm_y: 3635063.92,
                x: 1032484,
                y: 1073640
            }, {
                j: 121.502652,
                w: 31.195209,
                utm_x: 13525760.52,
                utm_y: 3635791.9,
                x: 1046384,
                y: 1078728
            }]
        },
        getLnglatIndex: function (cK, cO, cN) {
            var cJ = 0;
            var cI = 0;
            var cP = 10000000,
                cM = 1000000000;
            for (var cL = 0; cL < this.correct_pts[cK].length; cL++) {
                var T = this.getDis(this.correct_pts[cK][cL].x, this.correct_pts[cK][cL].y, cO, cN);
                if (T < cM) {
                    if (T < cP) {
                        cM = cP;
                        cP = T;
                        cI = cJ;
                        cJ = cL
                    } else {
                        sedMinDis = T;
                        cI = cL
                    }
                }
            }
            return {
                lt: cJ,
                rb: cI
            }
        },
        getOMapIndex_mm: function (cK, cP, cO) {
            var cJ = 0;
            var cI = 0;
            var cN = 1294723000,
                cM = 1294723000;
            for (var cL = 0; cL < this.correct_pts[cK].length; cL++) {
                var T = this.getDis(this.correct_pts[cK][cL].utm_x, this.correct_pts[cK][cL].utm_y, cP, cO);
                if (T < cM) {
                    if (T < cN) {
                        cM = cN;
                        cN = T;
                        cI = cJ;
                        cJ = cL
                    } else {
                        sedMinDis = T;
                        cI = cL
                    }
                }
            }
            return {
                lt: cJ,
                rb: cI
            }
        },
        getDis: function (T, cK, cI, cJ) {
            return Math.abs(T - cI) + Math.abs(cK - cJ)
        },
        toMap: function (cK, T, cL) {
            var cI = (T - cL) * this.num[cK].num;
            var cJ = (T + cL) * this.num[cK].num * this.num[cK].num2;
            return {
                x: cI,
                y: cJ
            }
        },
        fromMap: function (cK, T, cL) {
            cL = cL / this.num[cK].num2;
            var cI = (T + cL) / (this.num[cK].num * 2);
            var cJ = (cL - T) / (this.num[cK].num * 2);
            return {
                x: cI,
                y: cJ
            }
        },
        getDgPix_mm: function (cL, cQ, cM) {
            var cP = this.fromMap(cL, this.correct_pts[cL][cQ].x, this.correct_pts[cL][cQ].y);
            var cN = this.fromMap(cL, this.correct_pts[cL][cM].x, this.correct_pts[cL][cM].y);
            var cV = cP.x,
                cI = cP.y;
            var cU = cN.x,
                T = cN.y;
            var cS = this.correct_pts[cL][cQ].utm_x,
                cK = this.correct_pts[cL][cQ].utm_y;
            var cO = this.correct_pts[cL][cM].utm_x,
                cJ = this.correct_pts[cL][cM].utm_y;
            var cT = Math.abs((cO - cS) * 100000 / (cU - cV));
            var cR = Math.abs((cJ - cK) * 100000 / (T - cI));
            return {
                j: cT,
                w: cR,
                x: 100000 / cT,
                y: 100000 / cR
            }
        },
        getPx_mm: function (cY, cU, cT, cL, cK) {
            var cJ = this.correct_pts[cY][cL];
            var T = this.correct_pts[cY][cL];
            var cR = this.getDgPix_mm(cY, cL, cK);
            var cN = this.fromMap(cY, cJ.x, cJ.y);
            var cM = T.utm_x,
                c0 = T.utm_y;
            var cZ = cU,
                cS = cT;
            var cX = cN.x;
            var cI = cN.y;
            var cP = cZ - cM,
                cW = cS - c0;
            var cQ = cP * cR.x + cX;
            var cO = -cW * cR.y + cI;
            var cV = this.toMap(cY, cQ, cO);
            return cV
        },
        getJw_mm: function (cW, cR, cQ, cM, cL) {
            var cP = this.correct_pts[cW][cM];
            var cI = this.correct_pts[cW][cM];
            var cS = this.getDgPix_mm(cW, cM, cL);
            var cU = this.fromMap(cW, cR, cQ);
            var cK = this.fromMap(cW, cP.x, cP.y);
            var cN = cI.utm_x,
                cX = cI.utm_y;
            var cV = cK.x;
            var cJ = cK.y;
            var cY = cU.x - cV,
                cT = cJ - cU.y;
            var cO = cY / cS.x + cN;
            var T = cT / cS.y + cX;
            return {
                lng: cO,
                lat: T
            }
        },
        getOMap_pts: function (cI, T) {
            return this.getOMap_index(cI, T.lng, T.lat, T.lt, T.rb)
        },
        getMapJw_pts: function (cI, T) {
            return this.getMapJw_index(cI, T.lng, 9998336 - T.lat, T.lt, T.rb)
        },
        getOMap_index: function (cN, cM, cL, T, cK) {
            if (!T || !cK) {
                var cI = this.getOMapIndex_mm(cN, cM, cL)
            } else {
                var cI = {
                    lt: T,
                    rb: cK
                }
            }
            var cJ = this.getPx_mm(cN, cM, cL, cI.lt, cI.rb);
            return {
                x: Math.floor(cJ.x),
                y: 9998336 - Math.floor(cJ.y),
                lt: cI.lt,
                rb: cI.rb
            }
        },
        getMapJw_index: function (cM, cJ, cN, cI, cL) {
            if (!cI || !cL) {
                var cK = this.getLnglatIndex(cM, cJ, cN)
            } else {
                var cK = {
                    lt: cI,
                    rb: cL
                }
            }
            var T = this.getJw_mm(cM, cJ, cN, cK.lt, cK.rb);
            return {
                lng: T.lng,
                lat: T.lat,
                lt: cK.lt,
                rb: cK.rb
            }
        }
    });

    var MercatorProjection = function() {}
    MercatorProjection.prototype = new Projection();
    bmap.extend(MercatorProjection, {
        EARTHRADIUS: 6370996.81,
        MCBAND: [12890594.86, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
        LLBAND: [75, 60, 45, 30, 15, 0],
        MC2LL: [
            [1.410526172116255e-8, 0.00000898305509648872, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 17337981.2],
            [-7.435856389565537e-9, 0.000008983055097726239, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 10260144.86],
            [-3.030883460898826e-8, 0.00000898305509983578, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37],
            [-1.981981304930552e-8, 0.000008983055099779535, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06],
            [3.09191371068437e-9, 0.000008983055096812155, 0.00006995724062, 23.10934304144901, -0.00023663490511, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4],
            [2.890871144776878e-9, 0.000008983055095805407, -3.068298e-8, 7.47137025468032, -0.00000353937994, -0.02145144861037, -0.00001234426596, 0.00010322952773, -0.00000323890364, 826088.5]
        ],
        LL2MC: [
            [-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5],
            [0.0008277824516172526, 111320.7020463578, 647795574.6671607, -4082003173.641316, 10774905663.51142, -15171875531.51559, 12053065338.62167, -5124939663.577472, 913311935.9512032, 67.5],
            [0.00337398766765, 111320.7020202162, 4481351.045890365, -23393751.19931662, 79682215.47186455, -115964993.2797253, 97236711.15602145, -43661946.33752821, 8477230.501135234, 52.5],
            [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5],
            [-0.0003441963504368392, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5],
            [-0.0003218135878613132, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]
        ],
        getDistanceByMC: function (cM, cK) {
            if (!cM || !cK) {
                return 0
            }
            var cI, cL, T, cJ;
            cM = this.convertMC2LL(cM);
            if (!cM) {
                return 0
            }
            cI = this.toRadians(cM.lng);
            cL = this.toRadians(cM.lat);
            cK = this.convertMC2LL(cK);
            if (!cK) {
                return 0
            }
            T = this.toRadians(cK.lng);
            cJ = this.toRadians(cK.lat);
            return this.getDistance(cI, T, cL, cJ)
        },
        getDistanceByLL: function (cM, cK) {
            if (!cM || !cK) {
                return 0
            }
            cM.lng = this.getLoop(cM.lng, -180, 180);
            cM.lat = this.getRange(cM.lat, -74, 74);
            cK.lng = this.getLoop(cK.lng, -180, 180);
            cK.lat = this.getRange(cK.lat, -74, 74);
            var cI, T, cL, cJ;
            cI = this.toRadians(cM.lng);
            cL = this.toRadians(cM.lat);
            T = this.toRadians(cK.lng);
            cJ = this.toRadians(cK.lat);
            return this.getDistance(cI, T, cL, cJ)
        },
        convertMC2LL: function (cI) {
            var cJ, cL;
            cJ = new Point(Math.abs(cI.lng), Math.abs(cI.lat));
            for (var cK = 0; cK < this.MCBAND.length; cK++) {
                if (cJ.lat >= this.MCBAND[cK]) {
                    cL = this.MC2LL[cK];
                    break
                }
            }
            var T = this.convertor(cI, cL);
            var cI = new Point(T.lng.toFixed(6), T.lat.toFixed(6));
            return cI
        },
        convertLL2MC: function (T) {
            var cI, cK;
            T.lng = this.getLoop(T.lng, -180, 180);
            T.lat = this.getRange(T.lat, -74, 74);
            cI = new Point(T.lng, T.lat);
            for (var cJ = 0; cJ < this.LLBAND.length; cJ++) {
                if (cI.lat >= this.LLBAND[cJ]) {
                    cK = this.LL2MC[cJ];
                    break
                }
            }
            if (!cK) {
                for (var cJ = this.LLBAND.length - 1; cJ >= 0; cJ--) {
                    if (cI.lat <= -this.LLBAND[cJ]) {
                        cK = this.LL2MC[cJ];
                        break
                    }
                }
            }
            var cL = this.convertor(T, cK);
            var T = new Point(cL.lng.toFixed(2), cL.lat.toFixed(2));
            return T
        },
        convertor: function (cJ, cK) {
            if (!cJ || !cK) {
                return
            }
            var T = cK[0] + cK[1] * Math.abs(cJ.lng);
            var cI = Math.abs(cJ.lat) / cK[9];
            var cL = cK[2] + cK[3] * cI + cK[4] * cI * cI + cK[5] * cI * cI * cI + cK[6] * cI * cI * cI * cI + cK[7] * cI * cI * cI * cI * cI + cK[8] * cI * cI * cI * cI * cI * cI;
            T *= (cJ.lng < 0 ? -1 : 1);
            cL *= (cJ.lat < 0 ? -1 : 1);
            return new Point(T, cL)
        },
        getDistance: function (cI, T, cK, cJ) {
            return this.EARTHRADIUS * Math.acos((Math.sin(cK) * Math.sin(cJ) + Math.cos(cK) * Math.cos(cJ) * Math.cos(T - cI)))
        },
        toRadians: function (T) {
            return Math.PI * T / 180
        },
        toDegrees: function (T) {
            return (180 * T) / Math.PI
        },
        getRange: function (cJ, cI, T) {
            if (cI != null) {
                cJ = Math.max(cJ, cI)
            }
            if (T != null) {
                cJ = Math.min(cJ, T)
            }
            return cJ
        },
        getLoop: function (cJ, cI, T) {
            while (cJ > T) {
                cJ -= T - cI
            }
            while (cJ < cI) {
                cJ += T - cI
            }
            return cJ
        }
    });
    bmap.extend(MercatorProjection.prototype, {
        lngLatToMercator: function (T) {
            return MercatorProjection.convertLL2MC(T)
        },
        lngLatToPoint: function (T) {
            var cI = MercatorProjection.convertLL2MC(T);
            return new Pixel(cI.lng, cI.lat)
        },
        mercatorToLngLat: function (T) {
            return MercatorProjection.convertMC2LL(T)
        },
        pointToLngLat: function (T) {
            var cI = new Point(T.x, T.y);
            return MercatorProjection.convertMC2LL(cI)
        },
        pointToPixel: function (cI, cM, cL, cK, cN) {
            if (!cI) {
                return
            }
            cI = this.lngLatToMercator(cI, cN);
            var cJ = this.getZoomUnits(cM);
            var T = Math.round((cI.lng - cL.lng) / cJ + cK.width / 2);
            var cO = Math.round((cL.lat - cI.lat) / cJ + cK.height / 2);
            return new Pixel(T, cO)
        },
        pixelToPoint: function (T, cP, cL, cJ, cI) {
            if (!T) {
                return
            }
            var cO = this.getZoomUnits(cP);
            var cM = cL.lng + cO * (T.x - cJ.width / 2);
            var cK = cL.lat - cO * (T.y - cJ.height / 2);
            var cN = new Point(cM, cK);
            return this.mercatorToLngLat(cN, cI)
        },
        getZoomUnits: function (T) {
            return Math.pow(2, (18 - T))
        }
    });
	a7 = MercatorProjection;

    var PerspectiveProjection = function() {}
    PerspectiveProjection.prototype = new MercatorProjection();
    bmap.extend(PerspectiveProjection.prototype, {
        lngLatToMercator: function (cI, T) {
            return this._convert2DTo3D(T, MercatorProjection.convertLL2MC(cI))
        },
        mercatorToLngLat: function (cI, T) {
            return MercatorProjection.convertMC2LL(this._convert3DTo2D(T, cI))
        },
        lngLatToPoint: function (cJ, T) {
            var cI = this._convert2DTo3D(T, MercatorProjection.convertLL2MC(cJ));
            return new Pixel(cI.lng, cI.lat)
        },
        pointToLngLat: function (cI, T) {
            var cJ = new Point(cI.x, cI.y);
            return MercatorProjection.convertMC2LL(this._convert3DTo2D(T, cJ))
        },
        _convert2DTo3D: function (cJ, T) {
            var cI = b3.getOMap_pts(cJ || "bj", T);
            return new Point(cI.x, cI.y)
        },
        _convert3DTo2D: function (cJ, T) {
            var cI = b3.getMapJw_pts(cJ || "bj", T);
            return new Point(cI.lng, cI.lat)
        },
        getZoomUnits: function (T) {
            return Math.pow(2, (20 - T))
        }
    });
	cB = PerspectiveProjection;

    var Overlay = function() {
        this._type = "overlay"
    }
    bmap.lang.inherits(Overlay, bmap.lang.Class, "Overlay");
    Overlay.getZIndex = function (T) {
        T = T * 1;
        if (!T) {
            return 0
        }
        return (T * -100000) << 1
    };
    bmap.extend(Overlay.prototype, {
        _i: function (T) {
            if (!this.domElement && G(this.initialize)) {
                this.domElement = this.initialize(T);
                if (this.domElement) {
                    this.domElement.style.WebkitUserSelect = "none"
                }
            }
            this.draw()
        },
        initialize: function (T) {
            throw "initialize\u65b9\u6cd5\u672a\u5b9e\u73b0"
        },
        draw: function () {
            throw "draw\u65b9\u6cd5\u672a\u5b9e\u73b0"
        },
        remove: function () {
            if (this.domElement && this.domElement.parentNode) {
                this.domElement.parentNode.removeChild(this.domElement)
            }
            this.domElement = null;
            this.dispatchEvent(new bd("onremove"))
        },
        hide: function () {
            if (this.domElement) {
                bmap.dom.hide(this.domElement)
            }
        },
        show: function () {
            if (this.domElement) {
                bmap.dom.show(this.domElement)
            }
        },
        isVisible: function () {
            if (!this.domElement) {
                return false
            }
            if (this.domElement.style.display == "none" || this.domElement.style.visibility == "hidden") {
                return false
            }
            return true
        }
    });
	bD = Overlay;
	
    BMap.register(function (cJ) {
        var T = cJ.temp;
        T.overlayDiv = cJ.overlayDiv = cI(cJ.platform, 200);
        cJ._panes.floatPane = cI(T.overlayDiv, 800);
        cJ._panes.markerMouseTarget = cI(T.overlayDiv, 700);
        cJ._panes.floatShadow = cI(T.overlayDiv, 600);
        cJ._panes.labelPane = cI(T.overlayDiv, 500);
        cJ._panes.markerPane = cI(T.overlayDiv, 400);
        cJ._panes.markerShadow = cI(T.overlayDiv, 300);
        cJ._panes.mapPane = cI(T.overlayDiv, 200);

        function cI(cK, cN) {
            var cM = Y("div"),
                cL = cM.style;
            cL.position = "absolute";
            cL.top = cL.left = cL.width = cL.height = "0";
            cL.zIndex = cN;
            cK.appendChild(cM);
            return cM
        }
    });

    function W() {
        bmap.lang.Class.call(this);
        Overlay.call(this);
        this.map = null;
        this._visible = true;
        this.infoWindow = null;
        this._dblclickTime = 0
    }
    bmap.lang.inherits(W, Overlay, "OverlayInternal");
    bmap.extend(W.prototype, {
        initialize: function (T) {
            this.map = T;
            bmap.lang.Class.call(this, this.guid);
            return null
        },
        getMap: function () {
            return this.map
        },
        draw: function () {},
        remove: function () {
            this.map = null;
            bmap.lang.decontrol(this.guid);
            Overlay.prototype.remove.call(this)
        },
        hide: function () {
            if (this._visible == false) {
                return
            }
            this._visible = false
        },
        show: function () {
            if (this._visible == true) {
                return
            }
            this._visible = true
        },
        isVisible: function () {
            if (!this.domElement) {
                return false
            }
            return !!this._visible
        },
        getContainer: function () {
            return this.domElement
        },
        setConfig: function (cI) {
            cI = cI || {};
            for (var T in cI) {
                this._config[T] = cI[T]
            }
        },
        setZIndex: function (T) {
            this.zIndex = T
        },
        enableMassClear: function () {
            this._config.enableMassClear = true
        },
        disableMassClear: function () {
            this._config.enableMassClear = false
        },
        addContextMenu: function (T) {
            this._menu = T
        },
        removeContextMenu: function (T) {
            this._menu = null
        }
    });

    function cp() {
        this.map = null;
        this._overlays = {};
        this._customOverlays = []
    }
    BMap.register(function (cI) {
        var T = new cp();
        T.map = cI;
        cI._overlays = T._overlays;
        cI._customOverlays = T._customOverlays;
        cI.addEventListener("load", function (cJ) {
            T.draw(cJ)
        });
        cI.addEventListener("moveend", function (cJ) {
            T.draw(cJ)
        });
        if (bmap.browser.ie && bmap.browser.ie < 8 || document.compatMode == "BackCompat") {
            cI.addEventListener("zoomend", function (cJ) {
                setTimeout(function () {
                    T.draw(cJ)
                }, 20)
            })
        } else {
            cI.addEventListener("zoomend", function (cJ) {
                T.draw(cJ)
            })
        }
        cI.addEventListener("maptypechange", function (cJ) {
            T.draw(cJ)
        });
        cI.addEventListener("addoverlay", function (cN) {
            var cK = cN.target;
            if (cK instanceof W) {
                if (!T._overlays[cK.guid]) {
                    T._overlays[cK.guid] = cK
                }
            } else {
                var cM = false;
                for (var cL = 0, cJ = T._customOverlays.length; cL < cJ; cL++) {
                    if (T._customOverlays[cL] === cK) {
                        cM = true;
                        break
                    }
                }
                if (!cM) {
                    T._customOverlays.push(cK)
                }
            }
        });
        cI.addEventListener("removeoverlay", function (cM) {
            var cK = cM.target;
            if (cK instanceof W) {
                delete T._overlays[cK.guid]
            } else {
                for (var cL = 0, cJ = T._customOverlays.length; cL < cJ; cL++) {
                    if (T._customOverlays[cL] === cK) {
                        T._customOverlays.splice(cL, 1);
                        break
                    }
                }
            }
        });
        cI.addEventListener("clearoverlays", function (cM) {
            this.closeInfoWindow();
            for (var cL in T._overlays) {
                if (T._overlays[cL]._config.enableMassClear) {
                    T._overlays[cL].remove();
                    delete T._overlays[cL]
                }
            }
            for (var cK = 0, cJ = T._customOverlays.length; cK < cJ; cK++) {
                if (T._customOverlays[cK].enableMassClear != false) {
                    T._customOverlays[cK].remove();
                    T._customOverlays[cK] = null;
                    T._customOverlays.splice(cK, 1);
                    cK--;
                    cJ--
                }
            }
        });
        cI.addEventListener("infowindowopen", function (cK) {
            var cJ = this.infoWindow;
            if (cJ) {
                bmap.dom.hide(cJ.popDom);
                bmap.dom.hide(cJ.shadowDom)
            }
        });
        cI.addEventListener("movestart", function () {
            if (this.getInfoWindow()) {
                this.getInfoWindow()._setOverflow()
            }
        });
        cI.addEventListener("moveend", function () {
            if (this.getInfoWindow()) {
                this.getInfoWindow()._resetOverflow()
            }
        })
    });
    cp.prototype.draw = function (cJ) {
        for (var cI in this._overlays) {
            this._overlays[cI].draw()
        }
        bmap.array.each(this._customOverlays, function (cK) {
            cK.draw()
        });
        if (this.map.temp.infoWin) {
            this.map.temp.infoWin.setPosition()
        }
        if (BMap.DrawerSelector) {
            var T = BMap.DrawerSelector.getDrawer(this.map);
            T.setPalette()
        }
    };

    function cC(T) {
        W.call(this);
        this._config = {
            strokeColor: "#3a6bdb",
            strokeWeight: 5,
            strokeOpacity: 0.65,
            strokeStyle: "solid",
            enableMassClear: true,
            getParseTolerance: null,
            getParseCacheIndex: null,
            enableEditing: false,
            mouseOverTolerance: 15,
            use3DCoords: false,
            clickable: true
        };
        T = T || {};
        this.setConfig(T);
        if (this._config.strokeWeight <= 0) {
            this._config.strokeWeight = 5
        }
        if (this._config.strokeOpacity < 0 || this._config.strokeOpacity > 1) {
            this._config.strokeOpacity = 0.65
        }
        if (this._config.fillOpacity < 0 || this._config.fillOpacity > 1) {
            this._config.fillOpacity = 0.65
        }
        if (this._config.strokeStyle != "solid" && this._config.strokeStyle != "dashed") {
            this._config.strokeStyle = "solid"
        }
        if (ce(T.enableClicking)) {
            this._config.clickable = T.enableClicking
        }
        this.domElement = null;
        this._bounds = new BMap.Bounds(0, 0, 0, 0);
        this._parseCache = [];
        this.vertexMarkers = [];
        this._temp = {}
    }
    bmap.lang.inherits(cC, W, "Graph");
    cC.getGraphPoints = function (cI) {
        var T = [];
        if (!cI) {
            return T
        }
        if (b0(cI)) {
            var cJ = cI.split(";");
            bmap.array.each(cJ, function (cL) {
                var cK = cL.split(",");
                T.push(new Point(cK[0], cK[1]))
            })
        }
        if (cI.constructor == Array && cI.length > 0) {
            T = cI
        }
        return T
    };
    cC.parseTolerance = [0.09, 0.005, 0.0001, 0.00001];
    bmap.extend(cC.prototype, {
        initialize: function (T) {
            this.map = T;
            return null
        },
        draw: function () {
            return;
            if (!this.domElement) {
                return
            }
            if (this._drawer) {
                this._drawer.setPath(this.domElement, this._getDisplayPixels(this.points))
            }
        },
        setPath: function (T) {
            this._parseCache.length = 0;
            this.points = cC.getGraphPoints(T).slice(0);
            this._calcBounds()
        },
        _calcBounds: function () {
            if (!this.points) {
                return
            }
            var T = this;
            T._bounds = new Bounds();
            bmap.array.each(this.points, function (cI) {
                T._bounds.extend(cI)
            })
        },
        getPath: function () {
            return this.points
        },
        setPositionAt: function (cI, T) {
            if (!T || !this.points[cI]) {
                return
            }
            this._parseCache.length = 0;
            this.points[cI] = new Point(T.lng, T.lat);
            this._calcBounds()
        },
        setStrokeColor: function (T) {
            this._config.strokeColor = T
        },
        getStrokeColor: function () {
            return this._config.strokeColor
        },
        setStrokeWeight: function (T) {
            if (T > 0) {
                this._config.strokeWeight = T
            }
        },
        getStrokeWeight: function () {
            return this._config.strokeWeight
        },
        setStrokeOpacity: function (T) {
            if (!T || T > 1 || T < 0) {
                return
            }
            this._config.strokeOpacity = T
        },
        getStrokeOpacity: function () {
            return this._config.strokeOpacity
        },
        setFillOpacity: function (T) {
            if (T > 1 || T < 0) {
                return
            }
            this._config.fillOpacity = T
        },
        getFillOpacity: function () {
            return this._config.fillOpacity
        },
        setStrokeStyle: function (T) {
            if (T != "solid" && T != "dashed") {
                return
            }
            this._config.strokeStyle = T
        },
        getStrokeStyle: function () {
            return this._config.strokeStyle
        },
        setFillColor: function (T) {
            this._config.fillColor = T || ""
        },
        getFillColor: function () {
            return this._config.fillColor
        },
        getBounds: function () {
            return this._bounds
        },
        remove: function () {
            if (this.map) {
                this.map.removeEventListener("onmousemove", this._graphMouseEvent)
            }
            W.prototype.remove.call(this);
            this._parseCache.length = 0
        },
        enableEditing: function () {
            this._config.enableEditing = true
        },
        disableEditing: function () {
            this._config.enableEditing = false
        }
    });

    function l(T) {
        W.call(this);
        this.map = null;
        this.domElement = null;
        this._config = {
            width: 0,
            height: 0,
            offset: new Size(0, 0),
            opacity: 1,
            background: "transparent",
            lineStroke: 1,
            lineColor: "#000",
            lineStyle: "solid",
            point: null
        };
        this.setConfig(T);
        this.point = this._config.point
    }
    bmap.lang.inherits(l, W, "Division");
    bmap.extend(l.prototype, {
        _addDom: function () {
            var T = this._config;
            var cJ = this.content;
            var cI = ['<div class="BMap_Division" style="position:absolute;'];
            cI.push("width:" + T.width + "px;display:block;");
            cI.push("overflow:hidden;");
            if (T.borderColor != "none") {
                cI.push("border:" + T.lineStroke + "px " + T.lineStyle + " " + T.lineColor + ";")
            }
            cI.push("opacity:" + T.opacity + "; filter:(opacity=" + T.opacity * 100 + ")");
            cI.push("background:" + T.background + ";");
            cI.push('z-index:60;">');
            cI.push(cJ);
            cI.push("</div>");
            this.domElement = aq(this.map.getPanes().markerMouseTarget, cI.join(""))
        },
        initialize: function (T) {
            this.map = T;
            this._addDom();
            if (this.domElement) {
                bmap.on(this.domElement, "mousedown", function (cI) {
                    aN(cI)
                })
            }
            return this.domElement
        },
        draw: function () {
            var T = this.map.pointToOverlayPixel(this._config.point);
            this._config.offset = new Size(-Math.round(this._config.width / 2) - Math.round(this._config.lineStroke), -Math.round(this._config.height / 2) - Math.round(this._config.lineStroke));
            this.domElement.style.left = T.x + this._config.offset.width + "px";
            this.domElement.style.top = T.y + this._config.offset.height + "px"
        },
        getPosition: function () {
            return this._config.point
        },
        _getPixel: function (T) {
            return this.map.pointToPixel(this.getPosition())
        },
        setPosition: function (T) {
            this._config.point = T;
            this.draw()
        },
        setDimension: function (T, cI) {
            this._config.width = Math.round(T);
            this._config.height = Math.round(cI);
            if (this.domElement) {
                this.domElement.style.width = this._config.width + "px";
                this.domElement.style.height = this._config.height + "px";
                this.draw()
            }
        }
    });

    var Icon = function(cI, cJ, cK) {
        if (!cI || !cJ) {
            return
        }
        this.imageUrl = cI;
        this.size = cJ;
        var T = new Size(Math.floor(cJ.width / 2), Math.floor(cJ.height / 2));
        var cL = {
            anchor: T,
            imageOffset: new Size(0, 0)
        };
        cK = cK || {};
        bmap.extend(cL, cK);
        this.anchor = cL.anchor;
        this.imageOffset = cL.imageOffset;
        this.infoWindowAnchor = cK.infoWindowAnchor || this.anchor;
        this.printImageUrl = cK.printImageUrl || ""
    }
    var bA = Icon.prototype;
    bA.setImageUrl = function (T) {
        if (!T) {
            return
        }
        this.imageUrl = T
    };
    bA.setPrintImageUrl = function (T) {
        if (!T) {
            return
        }
        this.printImageUrl = T
    };
    bA.setSize = function (T) {
        if (!T) {
            return
        }
        this.size = new Size(T.width, T.height)
    };
    bA.setAnchor = function (T) {
        if (!T) {
            return
        }
        this.anchor = new Size(T.width, T.height)
    };
    bA.setImageOffset = function (T) {
        if (!T) {
            return
        }
        this.imageOffset = new Size(T.width, T.height)
    };
    bA.setInfoWindowAnchor = function (T) {
        if (!T) {
            return
        }
        this.infoWindowAnchor = new Size(T.width, T.height)
    };
    bA.toString = function () {
        return "Icon"
    };
	K = Icon;

    var InfoWindow = function(cJ, cI) {
        bmap.lang.Class.call(this);
        this.content = cJ;
        this.map = null;
        this._config = {
            width: 0,
            height: 0,
            maxWidth: 600,
            offset: new Size(0, 0),
            title: "",
            maxContent: "",
            enableMaximize: false,
            enableAutoPan: true,
            enableCloseOnClick: true,
            margin: [10, 10, 40, 10],
            collisions: [
                [10, 10],
                [10, 10],
                [10, 10],
                [10, 10]
            ],
            ifMaxScene: false,
            onClosing: function () {
                return true
            }
        };
        bmap.extend(this._config, cI || {});
        if (this._config.width != 0) {
            if (this._config.width < 220) {
                this._config.width = 220
            }
            if (this._config.width > 730) {
                this._config.width = 730
            }
        }
        if (this._config.height != 0) {
            if (this._config.height < 60) {
                this._config.height = 60
            }
            if (this._config.height > 650) {
                this._config.height = 650
            }
        }
        if (this._config.maxWidth != 0) {
            if (this._config.maxWidth < 220) {
                this._config.maxWidth = 220
            }
            if (this._config.maxWidth > 730) {
                this._config.maxWidth = 730
            }
        }
        this.isWinMax = false;
        this.IMG_PATH = staticSource.imgPath;
        this.overlay = null;
        var T = this;
        cx.load("infowindow", function () {
            T._draw()
        })
    }
    bmap.lang.inherits(InfoWindow, bmap.lang.Class, "InfoWindow");
    bmap.extend(InfoWindow.prototype, {
        setWidth: function (T) {
            if (!T && T != 0 || isNaN(T) || T < 0) {
                return
            }
            if (T != 0) {
                if (T < 220) {
                    T = 220
                }
                if (T > 730) {
                    T = 730
                }
            }
            this._config.width = T
        },
        setHeight: function (T) {
            if (!T && T != 0 || isNaN(T) || T < 0) {
                return
            }
            if (T != 0) {
                if (T < 60) {
                    T = 60
                }
                if (T > 650) {
                    T = 650
                }
            }
            this._config.height = T
        },
        setMaxWidth: function (T) {
            if (!T && T != 0 || isNaN(T) || T < 0) {
                return
            }
            if (T != 0) {
                if (T < 220) {
                    T = 220
                }
                if (T > 730) {
                    T = 730
                }
            }
            this._config.maxWidth = T
        },
        setTitle: function (T) {
            this._config.title = T
        },
        getTitle: function () {
            return this._config.title
        },
        setContent: function (T) {
            this.content = T
        },
        getContent: function () {
            return this.content
        },
        setMaxContent: function (T) {
            this._config.maxContent = T + ""
        },
        redraw: function () {},
        enableAutoPan: function () {
            this._config.enableAutoPan = true
        },
        disableAutoPan: function () {
            this._config.enableAutoPan = false
        },
        enableCloseOnClick: function () {
            this._config.enableCloseOnClick = true
        },
        disableCloseOnClick: function () {
            this._config.enableCloseOnClick = false
        },
        enableMaximize: function () {
            this._config.enableMaximize = true
        },
        disableMaximize: function () {
            this._config.enableMaximize = false
        },
        show: function () {
            this._visible = true
        },
        hide: function () {
            this._visible = false
        },
        close: function () {
            this.hide()
        },
        maximize: function () {
            this.isWinMax = true
        },
        restore: function () {
            this.isWinMax = false
        },
        isVisible: function () {
            return this.isOpen()
        },
        isOpen: function () {
            return false
        },
        getPosition: function () {
            if (this.overlay && this.overlay.getPosition) {
                return this.overlay.getPosition()
            }
        },
        getOffset: function () {
            return this._config.offset
        }
    });
	bM = InfoWindow;
	
    Map.prototype.openInfoWindow = function (cK, T) {
        if (!(cK instanceof InfoWindow) || !(T instanceof Point)) {
            return
        }
        var cI = this.temp;
        if (!cI.marker) {
            var cJ = new Icon(staticSource.imgPath + "blank.gif", {
                width: 1,
                height: 1
            });
            cI.marker = new ab(T, {
                icon: cJ,
                width: 1,
                height: 1,
                offset: new Size(0, 0),
                infoWindowOffset: new Size(0, 0),
                clickable: false
            });
            cI.marker._fromMap = 1
        } else {
            cI.marker.setPosition(T)
        }
        this.addOverlay(cI.marker);
        cI.marker.openInfoWindow(cK)
    };
    Map.prototype.closeInfoWindow = function () {
        var T = this.temp.infoWin || this.temp._infoWin;
        if (T && T.overlay) {
            T.overlay.closeInfoWindow()
        }
    };
    W.prototype.openInfoWindow = function (T) {
        if (this.map) {
            this.map.closeInfoWindow();
            T._visible = true;
            this.map.temp._infoWin = T;
            T.overlay = this;
            bmap.lang.Class.call(T, T.guid)
        }
    };
    W.prototype.closeInfoWindow = function () {
        if (this.map && this.map.temp._infoWin) {
            this.map.temp._infoWin._visible = false;
            bmap.lang.decontrol(this.map.temp._infoWin.guid);
            this.map.temp._infoWin = null
        }
    };

    var Label = function(cJ, cI) {
        W.call(this);
        this.content = cJ;
        this.map = null;
        this.domElement = null;
        this._config = {
            width: 0,
            offset: new Size(0, 0),
            styles: {
                backgroundColor: "#fff",
                border: "1px solid #f00",
                padding: "1px",
                whiteSpace: "nowrap",
                font: "12px " + staticSource.fontFamily,
                zIndex: "80",
                MozUserSelect: "none"
            },
            position: null,
            enableMassClear: true,
            clickable: true
        };
        cI = cI || {};
        this.setConfig(cI);
        if (this._config.width < 0) {
            this._config.width = 0
        }
        if (ce(cI.enableClicking)) {
            this._config.clickable = cI.enableClicking
        }
        this.point = this._config.position;
        var T = this;
        cx.load("marker", function () {
            T._draw()
        })
    }
    bmap.lang.inherits(Label, W, "Label");
    bmap.extend(Label.prototype, {
        getPosition: function () {
            if (this._marker) {
                return this._marker.getPosition()
            }
            return this.point
        },
        setPosition: function (T) {
            if (T instanceof Point && !this.getMarker()) {
                this.point = this._config.position = new Point(T.lng, T.lat)
            }
        },
        setContent: function (T) {
            this.content = T
        },
        setOpacity: function (T) {
            if (T >= 0 && T <= 1) {
                this._config.opacity = T
            }
        },
        setOffset: function (T) {
            if (!(T instanceof Size)) {
                return
            }
            this._config.offset = new Size(T.width, T.height)
        },
        getOffset: function () {
            return this._config.offset
        },
        setStyle: function (T) {
            T = T || {};
            this._config.styles = bmap.extend(this._config.styles, T)
        },
        setStyles: function (T) {
            return this.setStyle(T)
        },
        setTitle: function (T) {
            this._config.title = T || ""
        },
        getTitle: function () {
            return this._config.title
        },
        setMarker: function (T) {
            this._marker = T;
            if (T) {
                this.point = this._config.position = T.getPosition()
            } else {
                this.point = this._config.position = null
            }
        },
        getMarker: function () {
            return this._marker || null
        }
    });
	ae = Label;
	
    window.BMAP_ANIMATION_DROP = 1;
    window.BMAP_ANIMATION_BOUNCE = 2;
    var ar = new Icon(staticSource.imgPath + "marker_red_sprite.png", new Size(19, 25), {
        anchor: new Size(10, 25),
        infoWindowAnchor: new Size(10, 0)
    });
    var ap = new Icon(staticSource.imgPath + "marker_red_sprite.png", new Size(20, 11), {
        anchor: new Size(6, 11),
        imageOffset: new Size(-19, -13)
    });

    var Marker = function(T, cJ) {
        W.call(this);
        cJ = cJ || {};
        this.point = T;
        this.map = null;
        this._animation = null;
        this._config = {
            offset: new Size(0, 0),
            icon: ar,
            shadow: ap,
            title: "",
            label: null,
            baseZIndex: 0,
            clickable: true,
            zIndexFixed: false,
            isTop: false,
            enableMassClear: true,
            enableDragging: false,
            raiseOnDrag: false,
            restrictDraggingArea: false,
            draggingCursor: staticSource.draggingCursor
        };
        this.setConfig(cJ);
        if (cJ.icon && !cJ.shadow) {
            this._config.shadow = null
        }
        if (ce(cJ.enableClicking)) {
            this._config.clickable = cJ.enableClicking
        }
        var cI = this;
        cx.load("marker", function () {
            cI._draw()
        })
    }
    Marker.TOP_ZINDEX = Overlay.getZIndex(-90) + 1000000;
    Marker.DRAG_ZINDEX = Marker.TOP_ZINDEX + 1000000;
    bmap.lang.inherits(Marker, W, "Marker");
    bmap.extend(Marker.prototype, {
        setIcon: function (T) {
            if (T instanceof K) {
                this._config.icon = T
            }
        },
        getIcon: function () {
            return this._config.icon
        },
        setShadow: function (T) {
            if (T instanceof K) {
                this._config.shadow = T
            }
        },
        getShadow: function () {
            return this._config.shadow
        },
        setLabel: function (T) {
            this._config.label = T || null
        },
        getLabel: function () {
            return this._config.label
        },
        enableDragging: function () {
            this._config.enableDragging = true
        },
        disableDragging: function () {
            this._config.enableDragging = false
        },
        getPosition: function () {
            return this.point
        },
        setPosition: function (T) {
            if (T instanceof Point) {
                this.point = new Point(T.lng, T.lat)
            }
        },
        setTop: function (cI, T) {
            this._config.isTop = !! cI;
            if (cI) {
                this._addi = T || 0
            }
        },
        setTitle: function (T) {
            this._config.title = T + ""
        },
        getTitle: function () {
            return this._config.title
        },
        setOffset: function (T) {
            if (T instanceof Size) {
                this._config.offset = T
            }
        },
        getOffset: function () {
            return this._config.offset
        },
        setAnimation: function (T) {
            this._animation = T
        }
    });
	ab = Marker;

    var Polygon = function ck(T, cJ) {
        cC.call(this, cJ);
        cJ = cJ || {};
        this._config.fillOpacity = cJ.fillOpacity ? cJ.fillOpacity : 0.65;
        if (cJ.fillColor == "") {
            this._config.fillColor = ""
        } else {
            this._config.fillColor = cJ.fillColor ? cJ.fillColor : "#fff"
        }
        this.setPath(T);
        var cI = this;
        cx.load("poly", function () {
            cI._draw()
        })
    }
    bmap.lang.inherits(Polygon, cC, "Polygon");
    bmap.extend(Polygon.prototype, {
        setPath: function (cI, T) {
            this._userPoints = cC.getGraphPoints(cI).slice(0);
            var cJ = cC.getGraphPoints(cI).slice(0);
            if (cJ.length > 1 && !cJ[0].equals(cJ[cJ.length - 1])) {
                cJ.push(new Point(cJ[0].lng, cJ[0].lat))
            }
            cC.prototype.setPath.call(this, cJ, T)
        },
        setPositionAt: function (cI, T) {
            if (!this._userPoints[cI]) {
                return
            }
            this._userPoints[cI] = new Point(T.lng, T.lat);
            this.points[cI] = new Point(T.lng, T.lat);
            if (cI == 0 && !this.points[0].equals(this.points[this.points.length - 1])) {
                this.points[this.points.length - 1] = new Point(T.lng, T.lat)
            }
            this._calcBounds()
        },
        getPath: function () {
            var T = this._userPoints;
            if (T.length == 0) {
                T = this.points
            }
            return T
        }
    });

    var Polyline = function f(T, cJ) {
        cC.call(this, cJ);
        this.setPath(T);
        var cI = this;
        cx.load("poly", function () {
            cI._draw()
        })
    }
    bmap.lang.inherits(Polyline, cC, "Polyline");

    var Circle = function a(cI, T, cJ) {
        this.point = cI;
        this.radius = Math.abs(T);
        Polygon.call(this, [], cJ)
    }
    Circle.parseTolerance = [0.01, 0.0001, 0.00001, 0.000004];
    bmap.lang.inherits(Circle, Polygon, "Circle");
    bmap.extend(Circle.prototype, {
        initialize: function (T) {
            this.map = T;
            this.points = this._getPerimeterPoints(this.point, this.radius);
            this._calcBounds();
            return null
        },
        getCenter: function () {
            return this.point
        },
        setCenter: function (T, cI) {
            if (!T) {
                return
            }
            this.point = T
        },
        getRadius: function () {
            return this.radius
        },
        setRadius: function (T) {
            this.radius = Math.abs(T)
        },
        _getPerimeterPoints: function (T, cP) {
            if (!T || !cP || !this.map) {
                return []
            }
            var cI = this.map;
            var cM = T.lng,
                cK = T.lat;
            var cW = [];
            var cR = cP / 6378800,
                cO = (Math.PI / 180) * cK,
                cU = (Math.PI / 180) * cM;
            for (var cN = 0; cN < 360; cN += 9) {
                var cL = (Math.PI / 180) * cN,
                    cS = Math.asin(Math.sin(cO) * Math.cos(cR) + Math.cos(cO) * Math.sin(cR) * Math.cos(cL)),
                    cQ = Math.atan2(Math.sin(cL) * Math.sin(cR) * Math.cos(cO), Math.cos(cR) - Math.sin(cO) * Math.sin(cS)),
                    cT = ((cU - cQ + Math.PI) % (2 * Math.PI)) - Math.PI,
                    cV = new Point(cT * (180 / Math.PI), cS * (180 / Math.PI));
                cW.push(cV)
            }
            var cJ = cW[0];
            cW.push(new Point(cJ.lng, cJ.lat));
            return cW
        }
    });

    function bO(T) {
        this.map = T;
        this.mapTypeLayers = [];
        this.tileLayers = [];
        this.bufferNumber = 300;
        this.realBufferNumber = 0;
        this.mapTiles = {};
        this.bufferTiles = {};
        this.numLoading = 0;
        this._mapTypeLayerContainer = this._createDiv(1);
        this._normalLayerContainer = this._createDiv(2);
        T.platform.appendChild(this._mapTypeLayerContainer);
        T.platform.appendChild(this._normalLayerContainer)
    }
    BMap.register(function (cI) {
        var T = new bO(cI);
        T.initialize()
    });
    bmap.extend(bO.prototype, {
        initialize: function () {
            var T = this,
                cI = T.map;
            cI.addEventListener("loadcode", function () {
                T.loadTiles()
            });
            cI.addEventListener("addtilelayer", function (cJ) {
                T.addTileLayer(cJ)
            });
            cI.addEventListener("removetilelayer", function (cJ) {
                T.removeTileLayer(cJ)
            });
            cI.addEventListener("setmaptype", function (cJ) {
                T.setMapType(cJ)
            });
            cI.addEventListener("zoomstartcode", function (cJ) {
                T._zoom(cJ)
            })
        },
        loadTiles: function () {
            var T = this;
            if (bmap.browser.ie) {
                try {
                    document.execCommand("BackgroundImageCache", false, true)
                } catch (cI) {}
            }
            if (!this.loaded) {
                T.initMapTypeTiles()
            }
            T.moveGridTiles();
            if (!this.loaded) {
                this.loaded = true;
                cx.load("tile", function () {
                    T._asyncLoadTiles()
                })
            }
        },
        initMapTypeTiles: function () {
            var cI = this.map.getMapType();
            var cJ = cI.getTileLayers();
            for (var T = 0; T < cJ.length; T++) {
                var cK = new TileLayer ();
                bmap.extend(cK, cJ[T]);
                this.mapTypeLayers.push(cK);
                cK.initialize(this.map, this._mapTypeLayerContainer)
            }
        },
        _createDiv: function (cI) {
            var T = Y("div");
            T.style.position = "absolute";
            T.style.left = T.style.top = "0";
            T.style.zIndex = cI;
            return T
        },
        showTile: function (cM, cL, cP) {
            var cS = this;
            cS.centerPos = cL;
            var cO = this.map.getMapType();
            var cJ = cS.getTileName(cM, cP);
            var cW = cO.getTileSize();
            var cK = (cM[0] * cW) + cL[0];
            var cV = 0;
            if (cO === BMAP_PERSPECTIVE_MAP && cS.map.getZoom() == 15) {
                cV = 0.5
            }
            var cI = (cV - 1 - cM[1]) * cW + cL[1];
            var cQ = [cK, cI];
            var cR = this.mapTiles[cJ];
            if (cR && cR.img) {
                bF(cR.img, cQ);
                if (cR.loaded) {
                    this._checkTilesLoaded()
                } else {
                    cR._addLoadCbk(function () {
                        cS._checkTilesLoaded()
                    })
                }
                return
            }
            cR = this.bufferTiles[cJ];
            if (cR && cR.img) {
                cP.tilesDiv.insertBefore(cR.img, cP.tilesDiv.lastChild);
                this.mapTiles[cJ] = cR;
                bF(cR.img, cQ);
                if (cR.loaded) {
                    this._checkTilesLoaded()
                } else {
                    cR._addLoadCbk(function () {
                        cS._checkTilesLoaded()
                    })
                }
                return
            }
            var cU = 256 * Math.pow(2, (cO.getMaxZoom() - cM[2]));
            var cT = new Point(cM[0] * cU, cM[1] * cU);
            var cN = new Pixel(cM[0], cM[1]);
            var T = cP.getTilesUrl(cN, cM[2]);
            cR = new bR(this, T, cQ, cM, cP);
            cR._addLoadCbk(function () {
                cS._checkTilesLoaded()
            });
            cR._load();
            this.mapTiles[cJ] = cR
        },
        _checkTilesLoaded: function () {
            this.numLoading--;
            var T = this;
            if (this.numLoading == 0) {
                if (this._checkLoadedTimer) {
                    clearTimeout(this._checkLoadedTimer);
                    this._checkLoadedTimer = null
                }
                this._checkLoadedTimer = setTimeout(function () {
                    if (T.numLoading == 0) {
                        T.map.dispatchEvent(new bd("ontilesloaded"))
                    }
                    T._checkLoadedTimer = null
                }, 80)
            }
        },
        getTileName: function (T, cI) {
            if (this.map.getMapType() === BMAP_PERSPECTIVE_MAP) {
                return "TILE-" + cI.guid + "-" + this.map.cityCode + "-" + T[0] + "-" + T[1] + "-" + T[2]
            } else {
                return "TILE-" + cI.guid + "-" + T[0] + "-" + T[1] + "-" + T[2]
            }
        },
        hideTile: function (cI) {
            var T = cI.img;
            if (T) {
                H(T);
                if (w(T)) {
                    T.parentNode.removeChild(T)
                }
            }
            delete this.mapTiles[cI.name];
            if (!cI.loaded) {
                H(T);
                T = null;
                cI._callCbks();
                cI.img = null;
                cI.mgr = null
            }
        },
        moveGridTiles: function () {
            var c7 = this.mapTypeLayers;
            var cT = c7.concat(this.tileLayers);
            var cZ = cT.length;
            for (var c1 = 0; c1 < cZ; c1++) {
                var cM = cT[c1];
                if (cM.baseLayer) {
                    this.tilesDiv = cM.tilesDiv
                }
                var dd = this.map;
                var c9 = dd.getMapType();
                var de = c9.getProjection();
                var c0 = dd.zoomLevel;
                var c3 = dd.mercatorCenter;
                this.mapCenterPoint = c3;
                var cR = c9.getZoomUnits(c0);
                var cU = c9.getZoomFactor(c0);
                var cS = Math.ceil(c3.lng / cU);
                var cN = Math.ceil(c3.lat / cU);
                var cY = c9.getTileSize();
                var cL = [cS, cN, (c3.lng - cS * cU) / cU * cY, (c3.lat - cN * cU) / cU * cY];
                var c8 = cL[0] - Math.ceil((dd.width / 2 - cL[2]) / cY);
                var cK = cL[1] - Math.ceil((dd.height / 2 - cL[3]) / cY);
                var c4 = cL[0] + Math.ceil((dd.width / 2 + cL[2]) / cY);
                var cW = 0;
                if (c9 === BMAP_PERSPECTIVE_MAP && dd.getZoom() == 15) {
                    cW = 1
                }
                var cV = cL[1] + Math.ceil((dd.height / 2 + cL[3]) / cY) + cW;
                this.areaCenter = new Point(c3.lng, c3.lat);
                var cJ = this.mapTiles;
                var cQ = -this.areaCenter.lng / cR;
                var cP = this.areaCenter.lat / cR;
                var db = [Math.round(cQ), Math.round(cP)];
                var cI = dd.getZoom();
                for (var dc in cJ) {
                    var df = cJ[dc];
                    var da = df.info;
                    if (da[2] != cI || (da[2] == cI && (c8 > da[0] || c4 <= da[0] || cK > da[1] || cV <= da[1]))) {
                        this.hideTile(df)
                    }
                }
                var cO = -dd.offsetX + dd.width / 2;
                var cX = -dd.offsetY + dd.height / 2;
                cM.tilesDiv.style.left = Math.round(cQ + cO) - db[0] + "px";
                cM.tilesDiv.style.top = Math.round(cP + cX) - db[1] + "px";
                var T = [];
                for (var c6 = c8; c6 < c4; c6++) {
                    for (var c5 = cK; c5 < cV; c5++) {
                        T.push([c6, c5])
                    }
                }
                T.sort((function (dg) {
                    return function (dh, di) {
                        return ((0.4 * Math.abs(dh[0] - dg[0]) + 0.6 * Math.abs(dh[1] - dg[1])) - (0.4 * Math.abs(di[0] - dg[0]) + 0.6 * Math.abs(di[1] - dg[1])))
                    }
                })([cL[0] - 1, cL[1] - 1]));
                this.numLoading += T.length;
                for (var c6 = 0, c2 = T.length; c6 < c2; c6++) {
                    this.showTile([T[c6][0], T[c6][1], cI], db, cM)
                }
            }
            return
        },
        addTileLayer: function (cK) {
            var cJ = this;
            var T = cK.target;
            for (var cI = 0; cI < cJ.tileLayers.length; cI++) {
                if (cJ.tileLayers[cI] == T) {
                    return
                }
            }
            T.initialize(this.map, this._normalLayerContainer);
            cJ.tileLayers.push(T)
        },
        removeTileLayer: function (cL) {
            var cK = this;
            var cI = cL.target;
            for (var cJ = 0, T = cK.tileLayers.length; cJ < T; cJ++) {
                if (cI == cK.tileLayers[cJ]) {
                    cK.tileLayers.splice(cJ, 1)
                }
            }
            cI.remove()
        },
        setMapType: function () {
            var cJ = this;
            var cK = this.mapTypeLayers;
            for (var cI = 0, T = cK.length; cI < T; cI++) {
                cK[cI].remove()
            }
            delete this.tilesDiv;
            this.mapTypeLayers = [];
            this.bufferTiles = this.mapTiles = {};
            this.initMapTypeTiles();
            this.moveGridTiles()
        },
        _zoom: function () {
            var T = this;
            if (T.zoomsDiv) {
                bmap.dom.hide(T.zoomsDiv)
            }
            setTimeout(function () {
                T.moveGridTiles();
                T.map.dispatchEvent(new bd("onzoomend"))
            }, 10)
        }
    });

    function bR(cO, T, cL, cI, cK) {
        this.mgr = cO;
        this.position = cL;
        this._cbks = [];
        this.name = cO.getTileName(cI, cK);
        this.info = cI;
        this._transparentPng = cK.isTransparentPng();
        var cP = Y("img");
        ct(cP);
        cP.galleryImg = false;
        var cN = cP.style;
        var cJ = cO.map.getMapType();
        cN.position = "absolute";
        cN.border = "none";
        cN.width = cJ.getTileSize() + "px";
        cN.height = cJ.getTileSize() + "px";
        cN.left = cL[0] + "px";
        cN.top = cL[1] + "px";
        this.img = cP;
        this.src = T;
        if (C) {
            this.img.style.opacity = 0
        }
        var cM = this;
        this.img.onload = function (cV) {
            cM.loaded = true;
            if (!cM.mgr) {
                return
            }
            var cR = cM.mgr;
            var cQ = cR.bufferTiles;
            if (!cQ[cM.name]) {
                cR.realBufferNumber++;
                cQ[cM.name] = cM
            }
            if (cM.img && !w(cM.img)) {
                if (cK.tilesDiv) {
                    cK.tilesDiv.appendChild(cM.img);
                    if (bmap.browser.ie <= 6 && bmap.browser.ie > 0 && cM._transparentPng) {
                        cM.img.style.cssText += ';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + cM.src + '",sizingMethod=scale);'
                    }
                }
            }
            var cT = cR.realBufferNumber - cR.bufferNumber;
            for (var cU in cQ) {
                if (cT <= 0) {
                    break
                }
                if (!cR.mapTiles[cU]) {
                    cQ[cU].mgr = null;
                    var cS = cQ[cU].img;
                    if (cS && cS.parentNode) {
                        cS.parentNode.removeChild(cS);
                        H(cS)
                    }
                    cS = null;
                    cQ[cU].img = null;
                    delete cQ[cU];
                    cR.realBufferNumber--;
                    cT--
                }
            }
            if (C) {
                new g({
                    fps: 20,
                    duration: 200,
                    render: function (cW) {
                        if (cM.img && cM.img.style) {
                            cM.img.style.opacity = cW * 1
                        }
                    },
                    finish: function () {
                        if (cM.img && cM.img.style) {
                            delete cM.img.style.opacity
                        }
                    }
                })
            }
            cM._callCbks()
        };
        this.img.onerror = function () {
            cM._callCbks();
            if (!cM.mgr) {
                return
            }
            var cQ = cM.mgr;
            var cR = cQ.map.getMapType();
            if (cR.getErrorImageUrl()) {
                cM.error = true;
                cM.img.src = cR.getErrorImageUrl();
                if (cM.img && !w(cM.img)) {
                    cK.tilesDiv.appendChild(cM.img)
                }
            }
        };
        cP = null
    }
    bR.prototype._addLoadCbk = function (T) {
        this._cbks.push(T)
    };
    bR.prototype._load = function () {
        if (bmap.browser.ie > 0 && bmap.browser.ie <= 6 && this._transparentPng) {
            this.img.src = staticSource.imgPath + "blank.gif"
        } else {
            this.img.src = this.src
        }
    };
    bR.prototype._callCbks = function () {
        var cI = this;
        for (var T = 0; T < cI._cbks.length; T++) {
            cI._cbks[T]()
        }
        cI._cbks.length = 0
    };

    function H(cK) {
        if (!cK) {
            return
        }
        cK.onload = cK.onerror = null;
        var cI = cK.attributes,
            cJ, T, cL;
        if (cI) {
            T = cI.length;
            for (cJ = 0; cJ < T; cJ += 1) {
                cL = cI[cJ].name;
                if (G(cK[cL])) {
                    cK[cL] = null
                }
            }
        }
        cI = cK.children;
        if (cI) {
            T = cI.length;
            for (cJ = 0; cJ < T; cJ += 1) {
                H(cK.children[cJ])
            }
        }
    }
    var C = (!bmap.browser.ie || bmap.browser.ie > 8);

    var TileLayer = function n(T) {
        this.opts = T || {};
        this.copyright = this.opts.copyright || null;
        this.transparentPng = this.opts.transparentPng || false;
        this.baseLayer = this.opts.baseLayer || false;
        this.zIndex = this.opts.zIndex || 0;
        this.guid = n._guid++
    }
    TileLayer._guid = 0;
    bmap.lang.inherits(TileLayer , bmap.lang.Class, "TileLayer");
    bmap.extend(TileLayer.prototype, {
        initialize: function (cJ, T) {
            if (this.baseLayer) {
                this.zIndex = -100
            }
            this.map = cJ;
            if (!this.tilesDiv) {
                var cK = Y("div");
                var cI = cK.style;
                if (!bmap.platform.isAndroid) {
                    T.style.WebkitBackfaceVisibility = "hidden"
                }
                cI.position = "absolute";
                cI.zIndex = this.zIndex;
                cI.left = Math.ceil(-cJ.offsetX + cJ.width / 2) + "px";
                cI.top = Math.ceil(-cJ.offsetY + cJ.height / 2) + "px";
                T.appendChild(cK);
                this.tilesDiv = cK
            }
        },
        remove: function () {
            if (this.tilesDiv && this.tilesDiv.parentNode) {
                this.tilesDiv.innerHTML = "";
                this.tilesDiv.parentNode.removeChild(this.tilesDiv)
            }
            delete this.tilesDiv
        },
        isTransparentPng: function () {
            return this.transparentPng
        },
        getTilesUrl: function (cI, cJ) {
            var T = "";
            if (this.opts.tileUrlTemplate) {
                T = this.opts.tileUrlTemplate.replace(/\{X\}/, cI.x);
                T = T.replace(/\{Y\}/, cI.y);
                T = T.replace(/\{Z\}/, cJ)
            }
            return T
        },
        getCopyright: function () {
            return this.copyright
        },
        getMapType: function () {
            return this.mapType || BMAP_NORMAL_MAP
        }
    });

    var TrafficLayer = function aA(T) {
        TileLayer.call(this, T);
        this._opts = {};
        T = T || {};
        this._opts = bmap.object.extend(this._opts, T);
        if (this._opts.predictDate) {
            if (this._opts.predictDate.weekday < 1 || this._opts.predictDate.weekday > 7) {
                this._opts.predictDate = 1
            }
            if (this._opts.predictDate.hour < 0 || this._opts.predictDate.hour > 23) {
                this._opts.predictDate.hour = 0
            }
        }
        this._tileUrl = "http://its.map.baidu.com:8002/traffic/"
    }
    TrafficLayer.prototype = new TileLayer ();
    TrafficLayer.prototype.initialize = function (cI, T) {
        TileLayer.prototype.initialize.call(this, cI, T);
        this._map = cI
    };
    TrafficLayer.prototype.isTransparentPng = function () {
        return true
    };
    TrafficLayer.prototype.getTilesUrl = function (cN, cI) {
        var cO = "";
        if (this._opts.predictDate) {
            cO = "HistoryService?day=" + (this._opts.predictDate.weekday - 1) + "&hour=" + this._opts.predictDate.hour + "&t=" + new Date().getTime() + "&"
        } else {
            cO = "TrafficTileService?time=" + new Date().getTime() + "&"
        }
        var cJ = this._map,
            cP = cN.x,
            cK = cN.y,
            cM = Math.floor(cP / 200),
            cL = Math.floor(cK / 200),
            T = this._tileUrl + cO + "level=" + cI + "&x=" + cP + "&y=" + cK;
        return T.replace(/-(\d+)/gi, "M$1")
    };

    var MapType = function cr(T, cI, cJ) {
        this._name = T;
        this._layers = cI instanceof TileLayer ? [cI] : cI.slice(0);
        this._opts = {
            tips: "",
            labelText: "",
            minZoom: 1,
            maxZoom: 19,
            tileSize: 256,
            textColor: "black",
            errorImageUrl: "",
            projection: new MercatorProjection()
        };
        if (this._layers.length == 1) {
            this._layers[0].baseLayer = true
        }
        bmap.extend(this._opts, cJ || {})
    }
    bmap.extend(MapType.prototype, {
        getName: function () {
            return this._name
        },
        getTips: function () {
            return this._opts.tips
        },
        getLabelText: function () {
            return this._opts.labelText
        },
        getTileLayer: function () {
            return this._layers[0]
        },
        getTileLayers: function () {
            return this._layers
        },
        getTileSize: function () {
            return this._opts.tileSize
        },
        getMinZoom: function () {
            return this._opts.minZoom
        },
        getMaxZoom: function () {
            return this._opts.maxZoom
        },
        getTextColor: function () {
            return this._opts.textColor
        },
        getProjection: function () {
            return this._opts.projection
        },
        getErrorImageUrl: function () {
            return this._opts.errorImageUrl
        },
        getZoomUnits: function (T) {
            return Math.pow(2, (18 - T))
        },
        getZoomFactor: function (T) {
            return this.getZoomUnits(T) * 256
        }
    });
    var b4 = ["http://q1.baidu.com/it/", "http://q2.baidu.com/it/", "http://q3.baidu.com/it/", "http://q4.baidu.com/it/", "http://q5.baidu.com/it/", "http://q6.baidu.com/it/", "http://q7.baidu.com/it/", "http://q8.baidu.com/it/"];
    var aR = new TileLayer ();
    aR.getTilesUrl = function (cJ, cM) {
        var cN = cJ.x;
        var cK = cJ.y;
        var cL = "44",
            T = "012";
        if (this.map.highResolutionEnabled()) {
            cL = "41";
            T = "011"
        }
        var cI = b4[Math.abs(cN + cK) % b4.length] + "u=x=" + cN + ";y=" + cK + ";z=" + cM + ";v=" + T + ";type=web&fm=" + cL;
        return cI.replace(/-(\d+)/gi, "M$1")
    };
    window.BMAP_NORMAL_MAP = new MapType("\u5730\u56fe", aR, {
        tips: "\u663e\u793a\u666e\u901a\u5730\u56fe"
    });
    var bp = new TileLayer ();
    bp.tileUrls = ["http://d0.map.baidu.com/resource/mappic/", "http://d1.map.baidu.com/resource/mappic/", "http://d2.map.baidu.com/resource/mappic/", "http://d3.map.baidu.com/resource/mappic/"];
    bp.getTilesUrl = function (T, cJ) {
        var cL = T.x;
        var cI = T.y;
        var cK = Math.pow(2, (20 - cJ)) * 256;
        cI = Math.round((9998336 - cK * (cI)) / cK) - 1;
        url = this.tileUrls[Math.abs(cL + cI) % this.tileUrls.length] + this.map.currentCity + "/" + this.map.cityCode + "/3/lv" + (21 - cJ) + "/" + cL + "," + cI + ".jpg";
        return url
    };
    window.BMAP_PERSPECTIVE_MAP = new MapType("\u4e09\u7ef4", bp, {
        tips: "\u663e\u793a\u4e09\u7ef4\u5730\u56fe",
        minZoom: 15,
        maxZoom: 20,
        textColor: "white",
        projection: new PerspectiveProjection()
    });
    BMAP_PERSPECTIVE_MAP.getZoomUnits = function (T) {
        return Math.pow(2, (20 - T))
    };
    BMAP_PERSPECTIVE_MAP.getCityName = function (T) {
        if (!T) {
            return ""
        }
        var cI = staticSource.cityNames;
        for (var cJ in cI) {
            if (T.search(cJ) > -1) {
                return cI[cJ]
            }
        }
        return ""
    };
    BMAP_PERSPECTIVE_MAP.getCityCode = function (T) {
        return ({
            bj: 2,
            gz: 1,
            sz: 14,
            sh: 4
        })[T]
    };
    var bN = new TileLayer ({
        baseLayer: true
    });
    bN.getTilesUrl = function (cI, cK) {
        var cL = cI.x;
        var cJ = cI.y;
        var T = b4[Math.abs(cL + cJ) % b4.length] + "u=x=" + cL + ";y=" + cJ + ";z=" + cK + ";v=009;type=sate&fm=46";
        return T.replace(/-(\d+)/gi, "M$1")
    };
    window.BMAP_SATELLITE_MAP = new MapType("\u536b\u661f", bN, {
        tips: "\u663e\u793a\u536b\u661f\u5f71\u50cf",
        minZoom: 1,
        maxZoom: 19,
        textColor: "white"
    });
    var m = new TileLayer ({
        transparentPng: true
    });
    m.getTilesUrl = function (cI, cK) {
        var cL = cI.x;
        var cJ = cI.y;
        var T = b4[Math.abs(cL + cJ) % b4.length] + "u=x=" + cL + ";y=" + cJ + ";z=" + cK + ";v=012;type=trans&fm=47";
        return T.replace(/-(\d+)/gi, "M$1")
    };
    window.BMAP_HYBRID_MAP = new MapType("\u6df7\u5408", [bN, m], {
        tips: "\u663e\u793a\u5e26\u6709\u8857\u9053\u7684\u536b\u661f\u5f71\u50cf",
        labelText: "\u8def\u7f51",
        minZoom: 1,
        maxZoom: 19,
        textColor: "white"
    });
    window.BMAP_POI_TYPE_NORMAL = 0;
    window.BMAP_POI_TYPE_BUSSTOP = 1;
    window.BMAP_POI_TYPE_BUSLINE = 2;
    window.BMAP_POI_TYPE_SUBSTOP = 3;
    window.BMAP_POI_TYPE_SUBLINE = 4;
    var F = 0;
    var be = 1;
    var al = {};

    function u(cI, T) {
        bmap.lang.Class.call(this);
        this._loc = {};
        this.setLocation(cI);
        this._opts = {
            renderOptions: {
                panel: null,
                map: null,
                autoViewport: true
            },
            onSearchComplete: function () {},
            onMarkersSet: function () {},
            onInfoHtmlSet: function () {},
            onResultsHtmlSet: function () {},
            onGetBusListComplete: function () {},
            onGetBusLineComplete: function () {},
            onBusListHtmlSet: function () {},
            onBusLineHtmlSet: function () {},
            onPolylinesSet: function () {},
            reqFrom: ""
        };
        bmap.extend(this._opts, T);
        if (typeof T != "undefined" && typeof T.renderOptions != "undefined" && typeof T.renderOptions.autoViewport != "undefined") {
            this._opts.renderOptions.autoViewport = T.renderOptions.autoViewport
        } else {
            this._opts.renderOptions.autoViewport = true
        }
        this._opts.renderOptions.panel = bmap.G(this._opts.renderOptions.panel)
    }
    bmap.inherits(u, bmap.lang.Class);
    bmap.extend(u.prototype, {
        getResults: function () {
            if (!this._isMultiKey) {
                return this._results
            } else {
                return this._arrResults
            }
        },
        enableAutoViewport: function () {
            this._opts.renderOptions.autoViewport = true
        },
        disableAutoViewport: function () {
            this._opts.renderOptions.autoViewport = false
        },
        setLocation: function (T) {
            if (!T) {
                return
            }
            this._loc.src = T
        },
        setSearchCompleteCallback: function (T) {
            this._opts.onSearchComplete = T ||
            function () {}
        },
        setMarkersSetCallback: function (T) {
            this._opts.onMarkersSet = T ||
            function () {}
        },
        setPolylinesSetCallback: function (T) {
            this._opts.onPolylinesSet = T ||
            function () {}
        },
        setInfoHtmlSetCallback: function (T) {
            this._opts.onInfoHtmlSet = T ||
            function () {}
        },
        setResultsHtmlSetCallback: function (T) {
            this._opts.onResultsHtmlSet = T ||
            function () {}
        },
        getStatus: function () {
            return this._status
        }
    });
    var a8 = {
        REQ_BASE_URL: "http://api.map.baidu.com/",
        request: function (cI, cO, T, cN) {
            var cJ = (Math.random() * 100000).toFixed(0);
            BMap._rd["_cbk" + cJ] = function (cP) {
                T = T || {};
                cI && cI(cP, T);
                delete BMap._rd["_cbk" + cJ]
            };
            cN = cN || "";
            var cL;
            if (T && T.useEncodeURI) {
                cL = M(cO, encodeURI)
            } else {
                cL = M(cO, encodeURIComponent)
            }
            var cM = this,
                cK = cM.REQ_BASE_URL + cN + "?" + cL + "&ie=utf-8&oue=1&res=api&callback=BMap._rd._cbk" + cJ;
            http.request(cK)
        }
    };
    BMap._rd = {};
    var Q = {};
    Q.removeHtml = function (T) {
        return T.replace(/<\/?b>/g, "")
    };
    Q.parseGeoExtReg1 = function (T) {
        return T.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;")
    };
    Q.parseGeoExtReg2 = function (cI, T) {
        var cJ = new RegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" + T + "}", "ig");
        return cI.replace(cJ, "$1")
    };
    window.BMAP_STATUS_SUCCESS = 0;
    window.BMAP_STATUS_CITY_LIST = 1;
    window.BMAP_STATUS_UNKNOWN_LOCATION = 2;
    window.BMAP_STATUS_UNKNOWN_ROUTE = 3;
    window.BMAP_STATUS_INVALID_KEY = 4;
    window.BMAP_STATUS_INVALID_REQUEST = 5;
    window.BMAP_STATUS_PERMISSION_DENIED = 6;
    window.BMAP_STATUS_SERVICE_UNAVAILABLE = 7;
    window.BMAP_STATUS_TIMEOUT = 8;
    window.BMAP_ROUTE_TYPE_WALKING = 2;
    window.BMAP_ROUTE_TYPE_DRIVING = 3;
    var cs = "cur";
    var c = "cen";
    var cg = "s";
    var O = "con";
    var aj = "bd";
    var b8 = "nb";
    var D = "bt";
    var bJ = "nav";
    var bs = "walk";
    var bx = "gc";
    var d = "rgc";
    var R = "dec";
    var aO = "bse";
    var e = "nse";
    var E = "bl";
    var bc = "bsl";
    var aE = "bda";
    var ag = "sa";
    var aY = "nba";
    var cf = "drag";
    var b1 = "ext";
    var p = 2;
    var a2 = 4;
    var bq = 7;
    var V = 11;
    var aL = 12;
    var bf = 14;
    var aZ = 15;
    var cv = 18;
    var s = 20;
    var P = 21;
    var an = 26;
    var bB = 28;
    var x = 31;
    var bn = 35;
    var bz = 44;
    var av = 45;
    var ac = 46;
    var bP = 47;
    var aX = -1;
    var Z = 0;
    var cn = 1;
    var a3 = 2;
    var z = 3;
    var cF = "http://map.baidu.com/";
    var v = "http://api.map.baidu.com/";
    BMap.I = window.Instance = bmap.lang.instance;
    var a1,
	LocalSearch = a1 = function (cJ, cI) {
        u.call(this, cJ, cI);
        cI = cI || {};
        cI.renderOptions = cI.renderOptions || {};
        this.setPageCapacity(cI.pageCapacity);
        if (typeof cI.renderOptions.selectFirstResult != "undefined" && !cI.renderOptions.selectFirstResult) {
            this.disableFirstResultSelection()
        } else {
            this.enableFirstResultSelection()
        }
        this._overlays = [];
        this._arrPois = [];
        this._curIndex = -1;
        this._queryList = [];
        var T = this;
        //cx.load("local", function () {
            T._check()
        //})
    };
    bmap.inherits(LocalSearch, u, "LocalSearch");
    LocalSearch.DEFAULT_PAGE_CAPACITY = 10;
    LocalSearch.MIN_PAGE_CAPACITY = 1;
    LocalSearch.MAX_PAGE_CAPACITY = 100;
    LocalSearch.DEFAULT_RADIUS = 2000;
    LocalSearch.MAX_RADIUS = 100000;
    bmap.extend(LocalSearch.prototype, {
        search: function (T) {
            this._queryList.push({
                method: "search",
                arguments: [T]
            })
        },
        searchInBounds: function (T, cI) {
            this._queryList.push({
                method: "searchInBounds",
                arguments: [T, cI]
            })
        },
        searchNearby: function (cJ, cI, T) {
            this._queryList.push({
                method: "searchNearby",
                arguments: [cJ, cI, T]
            })
        },
        clearResults: function () {
            delete this._json;
            delete this._status;
            delete this._results;
            delete this._ud;
            this._curIndex = -1;
            this._setStatus();
            if (this._opts.renderOptions.panel) {
                this._opts.renderOptions.panel.innerHTML = ""
            }
        },
        gotoPage: function () {},
        enableFirstResultSelection: function () {
            this._opts.renderOptions.selectFirstResult = true
        },
        disableFirstResultSelection: function () {
            this._opts.renderOptions.selectFirstResult = false
        },
        setPageCapacity: function (T) {
            if (typeof T == "number" && !isNaN(T)) {
                this._opts.pageCapacity = T < 1 ? LocalSearch.DEFAULT_PAGE_CAPACITY : (T > LocalSearch.MAX_PAGE_CAPACITY ? LocalSearch.DEFAULT_PAGE_CAPACITY : T)
            } else {
                this._opts.pageCapacity = LocalSearch.DEFAULT_PAGE_CAPACITY
            }
        },
        getPageCapacity: function () {
            return this._opts.pageCapacity
        },
        toString: function () {
            return "LocalSearch"
        }
    });
    var b2 = function (cI, T) {
        u.call(this, cI, T)
    };
    bmap.inherits(b2, u, "BaseRoute");
    bmap.extend(b2.prototype, {
        clearResults: function () {}
    });
    window.BMAP_TRANSIT_POLICY_LEAST_TIME = 0;
    window.BMAP_TRANSIT_POLICY_LEAST_TRANSFER = 2;
    window.BMAP_TRANSIT_POLICY_LEAST_WALKING = 3;
    window.BMAP_TRANSIT_POLICY_AVOID_SUBWAYS = 4;
    window.BMAP_LINE_TYPE_BUS = 0;
    window.BMAP_LINE_TYPE_SUBWAY = 1;
    window.BMAP_LINE_TYPE_FERRY = 2;

    var TransitRoute = function aS(cJ, cI) {
        b2.call(this, cJ, cI);
        cI = cI || {};
        this.setPolicy(cI.policy);
        this.setPageCapacity(cI.pageCapacity);
        this.QUERY_TYPE = D;
        this.RETURN_TYPE = bf;
        this.ROUTE_TYPE = be;
        this._overlays = [];
        this._curIndex = -1;
        this._queryList = [];
        var T = this;
        cx.load("route", function () {
            T._asyncSearch()
        })
    }
    TransitRoute.MAX_PAGE_CAPACITY = 100;
    TransitRoute.LINE_TYPE_MAPPING = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
    bmap.inherits(TransitRoute, b2, "TransitRoute");
    bmap.extend(TransitRoute.prototype, {
        setPolicy: function (T) {
            if (T >= BMAP_TRANSIT_POLICY_LEAST_TIME && T <= BMAP_TRANSIT_POLICY_AVOID_SUBWAYS) {
                this._opts.policy = T
            } else {
                this._opts.policy = BMAP_TRANSIT_POLICY_LEAST_TIME
            }
        },
        _internalSearch: function (cI, T) {
            this._queryList.push({
                method: "_internalSearch",
                arguments: [cI, T]
            })
        },
        search: function (cI, T) {
            this._queryList.push({
                method: "search",
                arguments: [cI, T]
            })
        },
        setPageCapacity: function (T) {
            if (typeof T == "string") {
                T = parseInt(T);
                if (isNaN(T)) {
                    this._opts.pageCapacity = TransitRoute.MAX_PAGE_CAPACITY;
                    return
                }
            }
            if (typeof T != "number") {
                this._opts.pageCapacity = TransitRoute.MAX_PAGE_CAPACITY;
                return
            }
            if (T >= 1 && T <= TransitRoute.MAX_PAGE_CAPACITY) {
                this._opts.pageCapacity = Math.round(T)
            } else {
                this._opts.pageCapacity = TransitRoute.MAX_PAGE_CAPACITY
            }
        },
        toString: function () {
            return "TransitRoute"
        },
        _shortTitle: function (T) {
            return T.replace(/\(.*\)/, "")
        }
    });
    window.BMAP_HIGHLIGHT_STEP = 1;
    window.BMAP_HIGHLIGHT_ROUTE = 2;
    var bi = function (T, cK) {
        b2.call(this, T, cK);
        this._overlays = [];
        this._curIndex = -1;
        this._queryList = [];
        var cJ = this;
        var cI = this._opts.renderOptions;
        if (cI.highlightMode != BMAP_HIGHLIGHT_STEP && cI.highlightMode != BMAP_HIGHLIGHT_ROUTE) {
            cI.highlightMode = BMAP_HIGHLIGHT_STEP
        }
        this._enableDragging = this._opts.renderOptions.enableDragging ? true : false;
        cx.load("route", function () {
            cJ._asyncSearch()
        })
    };
    bi.ROAD_TYPE = ["", "\u73af\u5c9b", "\u65e0\u5c5e\u6027\u9053\u8def", "\u4e3b\u8def", "\u9ad8\u901f\u8fde\u63a5\u8def", "\u4ea4\u53c9\u70b9\u5185\u8def\u6bb5", "\u8fde\u63a5\u9053\u8def", "\u505c\u8f66\u573a\u5185\u90e8\u9053\u8def", "\u670d\u52a1\u533a\u5185\u90e8\u9053\u8def", "\u6865", "\u6b65\u884c\u8857", "\u8f85\u8def", "\u531d\u9053", "\u5168\u5c01\u95ed\u9053\u8def", "\u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df", "POI\u8fde\u63a5\u8def", "\u96a7\u9053", "\u6b65\u884c\u9053", "\u516c\u4ea4\u4e13\u7528\u9053", "\u63d0\u524d\u53f3\u8f6c\u9053"];
    bmap.inherits(bi, b2, "DWRoute");
    bmap.extend(bi.prototype, {
        search: function (cI, T) {
            this._queryList.push({
                method: "search",
                arguments: [cI, T]
            })
        }
    });
    window.BMAP_DRIVING_POLICY_LEAST_TIME = 0;
    window.BMAP_DRIVING_POLICY_LEAST_DISTANCE = 1;
    window.BMAP_DRIVING_POLICY_AVOID_HIGHWAYS = 2;

    var DrivingRoute = function o(T, cI) {
        bi.call(this, T, cI);
        cI = cI || {};
        this.setPolicy(cI.policy);
        this.QUERY_TYPE = bJ;
        this.RETURN_TYPE = s;
        this.ROUTE_TYPE = BMAP_ROUTE_TYPE_DRIVING
    }
    bmap.inherits(DrivingRoute, bi, "DrivingRoute");
    bmap.extend(DrivingRoute.prototype, {
        setPolicy: function (T) {
            if (T >= BMAP_DRIVING_POLICY_LEAST_TIME && T <= BMAP_DRIVING_POLICY_AVOID_HIGHWAYS) {
                this._opts.policy = T
            } else {
                this._opts.policy = BMAP_DRIVING_POLICY_LEAST_TIME
            }
        }
    });

    var WalkingRoute = function cA(T, cI) {
        bi.call(this, T, cI);
        this.QUERY_TYPE = bs;
        this.RETURN_TYPE = x;
        this.ROUTE_TYPE = BMAP_ROUTE_TYPE_WALKING;
        this._enableDragging = false
    }
    bmap.inherits(WalkingRoute, bi, "WalkingRoute");

    var Geocoder = function(cI) {
        this._opts = {};
        bmap.extend(this._opts, cI);
        this._queryList = [];
        var T = this;
        //cx.load("othersearch", function () {
            T._asyncSearch()
        //})
    }
    bmap.inherits(Geocoder, bmap.lang.Class, "Geocoder");
    bmap.extend(Geocoder.prototype, {
        getPoint: function (T, cJ, cI) {
            this._queryList.push({
                method: "getPoint",
                arguments: [T, cJ, cI]
            })
        },
        getLocation: function (T, cJ, cI) {
            this._queryList.push({
                method: "getLocation",
                arguments: [T, cJ, cI]
            })
        },
        toString: function () {
            return "Geocoder"
        }
    });
	aV = Geocoder;
    var Geolocation = function(cI) {
        this._opts = {};
        bmap.extend(this._opts, cI);
        this._queryList = [];
        var T = this;
        //cx.load("othersearch", function () {
            T._asyncSearch()
        //})
    }
    bmap.extend(Geolocation.prototype, {
        getCurrentPosition: function (cI, T) {
            this._queryList.push({
                method: "getCurrentPosition",
                arguments: [cI, T]
            })
        },
        getStatus: function () {
            return this._status
        }
    });
	ai = Geolocation;
	
    var LocalCity = function(cI) {
        this._opts = {
            renderOptions: {
                map: null
            }
        };
        bmap.extend(this._opts, cI);
        this._queryList = [];
        var T = this;
        //cx.load("othersearch", function () {
            T._asyncSearch()
        //})
    }
    bmap.inherits(LocalCity, bmap.lang.Class, "LocalCity");
    bmap.extend(LocalCity.prototype, {
        get: function (T) {
            this._queryList.push({
                method: "get",
                arguments: [T]
            })
        },
        toString: function () {
            return "LocalCity"
        }
    });
	b6 = LocalCity;

    function S() {
        this._queryList = [];
        var T = this;
        //cx.load("othersearch", function () {
            T._asyncSearch()
        //})
    }
    bmap.inherits(S, bmap.lang.Class, "Boundary");
    bmap.extend(S.prototype, {
        get: function (cI, T) {
            this._queryList.push({
                method: "get",
                arguments: [cI, T]
            })
        },
        toString: function () {
            return "Boundary"
        }
    });

    var BusLineSearch = function bj(cJ, cI) {
        u.call(this, cJ, cI);
        this.QUERY_TYPE_BUSLIST = E;
        this.RETURN_TYPE_BUSLIST = aZ;
        this.QUERY_TYPE_BUSLINE = bc;
        this.RETURN_TYPE_BUSLINE = cv;
        this._queryList = [];
        var T = this;
        cx.load("buslinesearch", function () {
            T._asyncSearch()
        })
    }
    BusLineSearch._iconOpen = staticSource.imgPath + "iw_plus.gif";
    BusLineSearch._iconClose = staticSource.imgPath + "iw_minus.gif";
    BusLineSearch._stopUrl = staticSource.imgPath + "stop_icon.png";
    bmap.inherits(BusLineSearch, u);
    bmap.extend(BusLineSearch.prototype, {
        getBusList: function (T) {
            this._queryList.push({
                method: "getBusList",
                arguments: [T]
            })
        },
        getBusLine: function (T) {
            this._queryList.push({
                method: "getBusLine",
                arguments: [T]
            })
        },
        setGetBusListCompleteCallback: function (T) {
            this._opts.onGetBusListComplete = T ||
            function () {}
        },
        setGetBusLineCompleteCallback: function (T) {
            this._opts.onGetBusLineComplete = T ||
            function () {}
        },
        setBusListHtmlSetCallback: function (T) {
            this._opts.onBusListHtmlSet = T ||
            function () {}
        },
        setBusLineHtmlSetCallback: function (T) {
            this._opts.onBusLineHtmlSet = T ||
            function () {}
        },
        setPolylinesSetCallback: function (T) {
            this._opts.onPolylinesSet = T ||
            function () {}
        }
    });

    var Autocomplete = function bv(cI) {
        u.call(this, cI);
        cI = cI || {};
        this._options = {
            input: null,
            types: [],
            onSearchComplete: function () {}
        };
        bmap.extend(this._options, cI);
        this._loc.src = cI.location || "\u5168\u56fd";
        this._word = "";
        this._show = false;
        this._suggestion = null;
        this._inputValue = "";
        this._initialize();
        _addStat(5011);
        var T = this;
        cx.load("autocomplete", function () {
            T._asyncSearch()
        })
    }
    bmap.inherits(Autocomplete, u, "Autocomplete");
    bmap.extend(Autocomplete.prototype, {
        _initialize: function () {},
        show: function () {
            this._show = true
        },
        hide: function () {
            this._show = false
        },
        setTypes: function (T) {
            this._options.types = T
        },
        setLocation: function (T) {
            this._loc.src = T
        },
        search: function (T) {
            this._word = T
        },
        setInputValue: function (T) {
            this._inputValue = T
        }
    });
		/* othersearch */
	var b = 1;
	var aB = 2;
	var bC = 3;
	var b7 = new aF(23, 25);
	var bW = new aF(9, 25);
	var q = new aF(9, 0);
	al.addSearchPoi = function (cM, T, cI, cN) {
		var cL = X(T);
		if (!cL) {
			return
		}
		if (cI < 0 || cI > 9) {
			return
		}
		var cK = new K(v + "img/markers.png", b7, {
			anchor: bW,
			imageOffset: new aF(0, -25 * cI),
			infoWindowAnchor: q
		});
		var cJ = new ab(cL, {
			icon: cK
		});
		cM.addOverlay(cJ);
		if (cN) {
			cJ.setTitle(cN)
		}
		return cJ
	};
	al.addCenterPoi = function (cL, T, cM) {
		var cK = X(T);
		if (!cK) {
			return
		}
		var cJ = new K(v + "img/markers.png", b7, {
			anchor: bW,
			imageOffset: new aF(0, -250),
			infoWindowAnchor: q
		});
		var cI = new ab(cK, {
			icon: cJ
		});
		cL.addOverlay(cI);
		if (cM) {
			cI.setTitle(cM)
		}
		return cI
	};
	al.addSearchInBoundsPoi = function (cL, T, cM) {
		var cK = X(T);
		if (!cK) {
			return
		}
		var cJ = new K(v + "img/markers.png", b7, {
			anchor: bW,
			imageOffset: new aF(0, -300),
			infoWindowAnchor: q
		});
		var cI = new ab(cK, {
			icon: cJ
		});
		cL.addOverlay(cI);
		if (cM) {
			cI.setTitle(cM)
		}
		return cI
	};
	
	function X(T) {
		var cJ = [];
		var cI = null;
		if (T instanceof ca) {
			cI = T
		} else {
			if (typeof T == "string") {
				cJ = a5.trim(T).split(",");
				if (cJ.length < 2) {
					return
				}
				cJ[0] = parseFloat(a5.trim(cJ[0]));
				cJ[1] = parseFloat(a5.trim(cJ[1]))
			} else {
				cJ = T.slice(0);
				if (cJ.length < 2) {
					return
				}
			}
			cI = new ca(cJ[0], cJ[1])
		}
		return cI
	}
	al.createSearchInfoWnd = function (cJ, T) {
		var cR = cJ.title;
		var cQ = cJ.addr;
		var cM = cJ.tel;
		var cO = cJ.uid || "";
		var cI = cJ.url;
		var cP = cJ.poiType || BMAP_POI_TYPE_NORMAL;
		T = T || {};
		if (!cR) {
			return null
		}
		var cN = cR;
		if (cP == BMAP_POI_TYPE_BUSSTOP) {
			cN = cN + "-\u516c\u4ea4\u8f66\u7ad9"
		} else {
			if (cP == BMAP_POI_TYPE_SUBSTOP) {
				cN = cN + "-\u5730\u94c1\u7ad9"
			}
		}
		if (cN.replace(/[\u0100-\uffff]/g, "##").length > 27) {
			cN = cN.substring(0, 13) + "&#8230"
		}
		var cL = "<p style='width:210px;font:bold 14px/16px " + b9.fontFamily + ";margin:0;color:#cc5522;white-space:nowrap;overflow:hidden' title='" + cR + "'>" + cN + "</p>";
		var cT = [];
		cT.push("<div style='font:12px " + b9.fontFamily + ";margin-top:10px'>");
		if (cQ) {
			var cS = "\u5730\u5740\uff1a";
			if (cP == BMAP_POI_TYPE_BUSSTOP || cP == BMAP_POI_TYPE_SUBSTOP) {
				cS = "\u8f66\u6b21\uff1a"
			}
			cT.push('<table cellspacing="0" style="overflow:hidden;table-layout:fixed;width:100%;font:12px ' + b9.fontFamily + '" >');
			cT.push('<tr><td style="vertical-align:top;width:38px;white-space:nowrap;word-break:keep-all">' + cS + '&nbsp;</td><td style="line-height:16px">');
			cT.push(cQ + "&nbsp;</td></tr>");
			if (cM) {
				cT.push('<tr><td style="vertical-align:top;">\u7535\u8bdd\uff1a</td><td>' + cM + "</td></tr>")
			}
			cT.push("</table>")
		} else {
			if (cM) {
				cT.push('<table cellspacing="0" style="table-layout:fixed;width:100%;font:12px ' + b9.fontFamily + '">');
				cT.push('<tr><td style="vertical-align:top;width:36px;white-space:nowrap;word-break:keep-all">\u7535\u8bdd\uff1a</td><td>' + cM + "</td></tr></table>")
			}
		}
		cT.push("</div>");
		var cK = new bM(cT.join(""), {
			title: cL,
			height: 0,
			width: 230,
			margin: [10, 10, 20, 10]
		});
		return cK
	};
	al.addDestPoi = function (cM, T, cN, cJ) {
		var cL = X(T);
		if (!cL) {
			return
		}
	
		var cK = new K(v + "img/dest_markers.png", new aF(42, 34), {
			anchor: new aF(14, 32),
			imageOffset: new aF(0, -34 * cJ),
			infoWindowAnchor: new aF(14, 0)
		});
		var cI = new ab(cL, {
			icon: cK,
			baseZIndex: 3500000,
			draggingCursor: "pointer"
		});
		cM.addOverlay(cI);
		if (cN) {
			cI.setTitle(cN)
		}
		return cI
	};
	al.addLine = function (cI, T) {
		return al.addRoute(cI, T, be)
	};
	al.ROUTE_STYLE_CONFIG = [{
		stroke: 6,
		color: "#0030ff",
		opacity: 0.45,
		style: "solid"
	}, {
		stroke: 6,
		color: "#0030ff",
		opacity: 0.45,
		style: "solid"
	}, {
		stroke: 4,
		color: "#30a208",
		opacity: 0.55,
		style: "dashed"
	}, {
		stroke: 5,
		color: "#0030ff",
		opacity: 0.45,
		style: "solid"
	}, {
		stroke: 4,
		color: "#ff0103",
		opacity: 0.65,
		style: "dashed"
	}, {
		stroke: 5,
		color: "#ff0103",
		opacity: 0.65,
		style: "solid"
	}];
	al.addRoute = function (cO, cL, cK) {
		var cJ = al.ROUTE_STYLE_CONFIG;
		if (typeof cK == "undefined") {
			cK = 0
		}
		if (!cJ[cK]) {
			return
		}
		var T = cL;
		var cI = cJ[cK];
		var cN = new f(T, {
			strokeWeight: cI.stroke,
			strokeColor: cI.color,
			strokeOpacity: cI.opacity,
			strokeStyle: cI.style,
			clickable: false
		});
		cO.addOverlay(cN);
		cN._routeType = cK;
		if (cK == be) {
			var cM = new f(T, {
				strokeWeight: cI.stroke - 2,
				strokeColor: "#fff",
				strokeOpacity: 0.3,
				clickable: false
			});
			cN._p = cM;
			cO.addOverlay(cM)
		}
		return cN
	};
	al.createTransInfoWnd = function (cI) {
		var cM = cI.content;
		var T = cI.curIndex;
		var cN = cI.total;
		var cK = cI.nextTransCbk;
		var cL = cI.obj;
		var cO = cI.hideStep;
		var cP = ["<div style='font:12px " + b9.fontFamily + "'>"];
		if (cM) {
			cP.push("<div style='margin:0 1em 24px 0'>" + cM + "</div>")
		}
		if (!cO) {
			cP.push(al.genStepNavHtml(cN, T))
		}
		cP.push("</div>");
		var cJ = new bM(cP.join(""), {
			title: "",
			height: 0,
			width: 220,
			margin: [10, 10, 20, 10]
		});
		if (cO) {
			return cJ
		}
		cJ.addEventListener("open", function () {
			if (a5.G("trans_prev")) {
				a5.on(a5.G("trans_prev"), "click", function () {
					if (cK && typeof cK == "function") {
						cK(T - 1, cL)
					}
				})
			}
			if (a5.G("trans_next")) {
				a5.on(a5.G("trans_next"), "click", function () {
					if (cK && typeof cK == "function") {
						cK(T + 1, cL)
					}
				})
			}
		});
		return cJ
	};
	al.genStepNavHtml = function (cJ, T) {
		var cI = [];
		cI.push('<table width="99%" cols="2" style="background:#eaf2ff;font:12px ' + b9.fontFamily + '"><tbody><tr>');
		cI.push('<td nowrap="nowrap" width="50%" align="left">');
		if (T == 0) {
			cI.push('<span unselectable="on" style="color:#9c9d99;-moz-user-select:none" >\u4e0a\u4e00\u6b65</span>')
		} else {
			cI.push('<a id="trans_prev" style="color:#7777cc;-moz-user-select:none" href="javascript:void(0)">\u4e0a\u4e00\u6b65</a>')
		}
		cI.push("</td>");
		cI.push('<td nowrap="nowrap" width="50%" align="right">');
		if (T == cJ + 1) {
			cI.push('<span unselectable="on" style="color:#9c9d99;-moz-user-select:none" >\u4e0b\u4e00\u6b65</span>')
		} else {
			cI.push('<a style="color:#7777cc" id="trans_next" href="javascript:void(0)">\u4e0b\u4e00\u6b65</a>')
		}
		cI.push("</td></tr></tbody></table>");
		return cI.join("")
	};
	al.addTransPoi = function (cM, T, cJ, cN) {
		var cL = X(T);
		if (!cL) {
			return
		}
		cJ = cJ || BMAP_LINE_TYPE_BUS;
		var cO = -55;
		if (cJ == BMAP_LINE_TYPE_SUBWAY) {
			cO = -76
		}
		var cK = new K(v + "img/trans_icons.png", new aF(21, 21), {
			imageOffset: new aF(0, cO),
			infoWindowAnchor: new aF(10, 0)
		});
		var cI = new ab(cL, {
			icon: cK
		});
		cM.addOverlay(cI);
		if (cN) {
			cI.setTitle(cN)
		}
		return cI
	};
	al.getInfoWindowDom = function (T) {
		if (T && T.infoWindowDoms && T.infoWindowDoms.contentDiv) {
			return T.infoWindowDoms.contentDiv.childNodes[0]
		}
		return null
	};
	al.addStationPoi = function (cJ, T, cK) {
		var cI = new ab(T, {
			icon: new K(bj._stopUrl, new aF(11, 11))
		});
		if (cK) {
			cI.setTitle(cK)
		}
		cJ.addOverlay(cI);
		return cI
	};
	al.addDragMkr = function (cJ, T) {
		var cI = new ab(T, {
			icon: new K(b9.imgPath + "drag.png", new aF(11, 11)),
			draggingCursor: "pointer"
		});
		cJ.addOverlay(cI);
		cI.setZIndex(10);
		return cI
	};
	al.createTipLbl = function (cI) {
		var T = new ae(cI, {
			offset: new aF(30, -10)
		});
		T.setStyle({
			border: "solid 1px gray",
			padding: "2px",
			whiteSpace: "nowrap",
			background: "#fff"
		});
		return T
	};
	al.getDistanceByPixel = function (cI, T) {
		if (!cI || !T) {
			return
		}
		return Math.round(Math.sqrt(Math.pow(cI.x - T.x, 2) + Math.pow(cI.y - T.y, 2)))
	};
	u.CBK_SEARCH_COMPLETE = 1;
	u.CBK_MARKERS_SET = 2;
	u.CBK_INFO_HTML_SET = 3;
	u.CBK_POLYLINES_SET = 4;
	u.CBK_RESULTS_HTML_SET = 5;
	u.CBK_BUSLIST_COMPLETE = 6;
	u.CBK_BUSLINE_COMPLETE = 7;
	u.CBK_BUSLISTHTML_SET = 8;
	u.CBK_BUSLINEHTML_SET = 9;
	u._getPoiUrl = function (T, cI) {
		if (T) {
			return cF + "?s=" + encodeURIComponent("inf&uid=" + T + "&c=" + cI) + "&i=0&sr=1"
		}
		return ""
	};
	u._getLocType = function (T) {
		if (!T) {
			return aX
		}
		if (typeof T == "string") {
			return a3
		}
		if (T instanceof ca) {
			return cn
		}
		if (T instanceof bw) {
			return Z
		}
		if (typeof T == "number") {
			return z
		}
		return aX
	};
	a5.extend(u.prototype, {
		_getIdByLoc: function (cL, T) {
			var cI = u._getLocType(cL.src);
			if (cI == aX) {
				return
			}
			var cJ = this;
			if (cI == z) {
				T && T(cL.src);
				return
			}
			if (cI == a3) {
				if (cL.curLocType == cI && cL.curSrc == cL.src && cL.curId) {
					T && T(cL.curId);
					return
				}
				cL.curLocType = cI;
				cL.curSrc = cL.src;
				a8.request(function (cN) {
					if (cN && cN.result && cN.result.type == p) {
						cJ._loc.curId = cN.content.code;
						T && T(cJ._loc.curId)
					}
				}, {
					qt: cs,
					wd: cL.src
				})
			} else {
				var cK;
				var cM = 18;
				if (cI == Z) {
					cK = cL.src.getCenter();
					cM = cL.src.getZoom()
				} else {
					cK = cL.src
				}
				if (cI == cL.curLocType && cL.curSrc.equals(cK) && cL.curId) {
					T && T(cL.curId);
					return
				}
				if (cI == Z) {
					cK = a7.convertLL2MC(cK)
				}
				if (cI == cn) {
					cK = a7.convertLL2MC(cK)
				}
				cL.curLocType = cI;
				cL.curSrc = new ca(cK.lng, cK.lat);
				a8.request(function (cN) {
					if (cN && cN.result && cN.result.type == a2) {
						cJ._loc.curId = cN.content ? cN.content.uid : 1;
						T && T(cJ._loc.curId)
					}
				}, {
					qt: c,
					b: cK.lng + "," + cK.lat + ";" + cK.lng + "," + cK.lat,
					l: cM
				})
			}
		},
		_setStatus: function (T) {
			if (typeof T == "number") {
				this._status = T
			} else {
				delete this._status
			}
		},
		_triggerCbk: function (cI, cK, cJ) {
			var T;
			switch (cI) {
			case u.CBK_SEARCH_COMPLETE:
				T = this._opts.onSearchComplete;
				break;
			case u.CBK_MARKERS_SET:
				T = this._opts.onMarkersSet;
				break;
			case u.CBK_POLYLINES_SET:
				T = this._opts.onPolylinesSet;
				break;
			case u.CBK_INFO_HTML_SET:
				T = this._opts.onInfoHtmlSet;
				break;
			case u.CBK_RESULTS_HTML_SET:
				T = this._opts.onResultsHtmlSet;
				break;
			case u.CBK_BUSLIST_COMPLETE:
				T = this._opts.onGetBusListComplete;
				break;
			case u.CBK_BUSLINE_COMPLETE:
				T = this._opts.onGetBusLineComplete;
				break;
			case u.CBK_BUSLISTHTML_SET:
				T = this._opts.onBusListHtmlSet;
				break;
			case u.CBK_BUSLINEHTML_SET:
				T = this._opts.onBusLineHtmlSet;
				break;
			default:
				break
			}
			T && T(cK, cJ)
		}
	});
	var aP = 0;
	var bt = 1;
	var aK = 2;
	Q.unique = function (cI) {
		var cL = false;
		var cK = [],
			cM = {};
		for (var cJ = 0, T = cI.length; cJ < T; cJ++) {
			if (!cM[cI[cJ]]) {
				cM[cI[cJ]] = true;
				cK.push(cI[cJ])
			}
		}
		return cK
	};
	Q.getBestLevel = function (cJ, cI) {
		if (cI) {
			var T = Math.min(cI.width / 1100, cI.height / 660);
			cJ = Math.round(cJ + (Math.log(T) / Math.log(2)))
		}
		if (cJ < 1) {
			cJ = 1
		}
		if (cJ > 18) {
			cJ = 18
		}
		return cJ
	};
	Q.parseGeo = function (cM, cP) {
		if (typeof cM != "string" || !cM) {
			return
		}
		var cR = cM.split("|");
		var T;
		var cK;
		var cI;
		if (cR.length == 1) {
			T = U(cM)
		} else {
			T = U(cR[2]);
			cK = U(cR[0]);
			cI = U(cR[1]);
			if (!cP) {
				return T
			}
		}
		var cN = {
			type: T.geoType
		};
		if (cP) {
			switch (cN.type) {
			case aK:
				var cO = new ca(T.geo[0][0], T.geo[0][1]);
				var cQ = a7.convertMC2LL(cO);
				cN.point = cQ;
				cN.points = [cQ];
				break;
			case bt:
				cN.points = [];
				var cS = T.geo[0];
				for (var cL = 0, cJ = cS.length - 1; cL < cJ; cL += 2) {
					var cT = new ca(cS[cL], cS[cL + 1]);
					cT = a7.convertMC2LL(cT);
					cN.points.push(cT)
				}
				cK = new ca(cK.geo[0][0], cK.geo[0][1]);
				cI = new ca(cI.geo[0][0], cI.geo[0][1]);
				cK = a7.convertMC2LL(cK);
				cI = a7.convertMC2LL(cI);
				cN.bounds = new bK(cK, cI);
				break;
			default:
				break
			}
		}
		return cN
	};
	Q.parseGeoExt = function (c2, cT) {
		if (!cT) {
			cT = 0
		} else {
			if (cT < 0.25) {
				cT = 0
			} else {
				if (cT > 0.25 && cT < 1) {
					cT = 1
				} else {
					if (cT > 32) {
						cT = 32
					}
				}
			}
		}
		var cO = c2.split("|");
		if (cO.length == 1) {
			var cJ = U(cO[0]);
			return {
				type: cJ.type,
				bound: "",
				points: cJ.geo.join(",")
			}
		} else {
			if (cO.length > 1) {
				var cU = c2.split(";.=");
				var cQ = [];
				var cK = [];
				var cV = 0;
				var cZ = cU.length;
				for (var cW = 0; cW < cZ; cW++) {
					var c1 = cU[cW];
					if (cZ > 1) {
						if (cW == 0) {
							c1 = c1 + ";"
						}
						if (cW > 0 && cW < cZ - 1) {
							c1 = ".=" + c1 + ";"
						}
						if (cW == cZ - 1) {
							c1 = ".=" + c1
						}
					}
					var cL = c1.split("|");
					var cY = U(cL[0]);
					var cX = U(cL[1]);
					cQ.push(cY.geo.join(","));
					cQ.push(cX.geo.join(","));
					var cJ = U(cL[2]);
					cV = cJ.type;
					var c0 = cJ.geo.join(",");
					c0 = Q.parseGeoExtReg1(c0);
					if (cT > 0) {
						c0 = Q.parseGeoExtReg2(c0, cT)
					}
					cK.push(c0)
				}
				if (cZ <= 1) {
					cK = cK.join(";")
				}
				if (cZ == 2) {
					var cI = cK[0] + ";" + cK[1];
					var cM = cI.split(";");
					var T = [];
					for (var cW = 0; cW < cM.length; cW++) {
						var cP = cM[cW].split(",")[0];
						var cN = cM[cW].split(",")[1];
						var cR = new ca(cP, cN);
						var cS = a7.convertMC2LL(cR);
						T.push(cS)
					}
					cK = T
				}
				return {
					type: cV,
					bound: cQ.join(";"),
					points: cK
				}
			}
		}
	};
	Q.parseGeoStr = function (cJ) {
		var cI = cJ.split(",");
		var T = new ca(cI[0], cI[1]);
		return a7.convertMC2LL(T)
	};
	var ax = ["=", ".", "-", "*"];
	var bU = 1 << 23;
	
	function U(cP) {
		var cO = am(cP.charAt(0));
		var cI = cP.substr(1);
		var cR = 0;
		var T = cI.length;
		var cS = [];
		var cM = [];
		var cN = [];
		while (cR < T) {
			if (cI.charAt(cR) == ax[0]) {
				if ((T - cR) < 13) {
					return 0
				}
				cN = cy(cI.substr(cR, 13), cS);
				if (cN < 0) {
					return 0
				}
				cR += 13
			} else {
				if (cI.charAt(cR) == ";") {
					cM.push(cS.slice(0));
					cS.length = 0;
					++cR
				} else {
					if ((T - cR) < 8) {
						return 0
					}
					cN = aQ(cI.substr(cR, 8), cS);
					if (cN < 0) {
						return 0
					}
					cR += 8
				}
			}
		}
		for (var cL = 0, cJ = cM.length; cL < cJ; cL++) {
			for (var cK = 0, cQ = cM[cL].length; cK < cQ; cK++) {
				cM[cL][cK] /= 100
			}
		}
		return {
			geoType: cO,
			geo: cM
		}
	}
	function am(cI) {
		var T = -1;
		if (cI == ax[1]) {
			T = aK
		} else {
			if (cI == ax[2]) {
				T = bt
			} else {
				if (cI == ax[3]) {
					T = aP
				}
			}
		}
		return T
	}
	function cy(cK, cI) {
		var T = 0;
		var cM = 0;
		var cL = 0;
		for (var cJ = 0; cJ < 6; cJ++) {
			cL = aa(cK.substr(1 + cJ, 1));
			if (cL < 0) {
				return -1 - cJ
			}
			T += cL << (6 * cJ);
			cL = aa(cK.substr(7 + cJ, 1));
			if (cL < 0) {
				return -7 - cJ
			}
			cM += cL << (6 * cJ)
		}
		cI.push(T);
		cI.push(cM);
		return 0
	}
	function aQ(cL, cJ) {
		var cI = cJ.length;
		if (cI < 2) {
			return -1
		}
		var T = 0;
		var cN = 0;
		var cM = 0;
		for (var cK = 0; cK < 4; cK++) {
			cM = aa(cL.substr(cK, 1));
			if (cM < 0) {
				return -1 - cK
			}
			T += cM << (6 * cK);
			cM = aa(cL.substr(4 + cK, 1));
			if (cM < 0) {
				return -5 - cK
			}
			cN += cM << (6 * cK)
		}
		if (T > bU) {
			T = bU - T
		}
		if (cN > bU) {
			cN = bU - cN
		}
		cJ.push(cJ[cI - 2] + T);
		cJ.push(cJ[cI - 1] + cN);
		return 0
	}
	function aa(cI) {
		var T = cI.charCodeAt(0);
		if (cI >= "A" && cI <= "Z") {
			return T - "A".charCodeAt(0)
		} else {
			if (cI >= "a" && cI <= "z") {
				return (26 + T - "a".charCodeAt(0))
			} else {
				if (cI >= "0" && cI <= "9") {
					return (52 + T - "0".charCodeAt(0))
				} else {
					if (cI == "+") {
						return 62
					} else {
						if (cI == "/") {
							return 63
						}
					}
				}
			}
		}
		return -1
	}
	a5.extend(aV.prototype, {
		_asyncSearch: function () {
			for (var cI = 0, T = this._queryList.length; cI < T; cI++) {
				var cJ = this._queryList[cI];
				this[cJ.method].apply(this, cJ.arguments)
			}
			delete this._queryList
		},
		getPoint: function (T, cK, cJ) {
			var cI = this;
			cJ = cJ || "\u5317\u4eac\u5e02";
			a8.request(function (cP) {
				if (cP && cP.result && cP.result.type == bn) {
					var cN = cP.result,
						cQ = cP.content,
						cM = null,
						cO = null;
					if (cN) {
						if (cN.error == 0) {
							var cL = cQ.coord.x,
								cR = cQ.coord.y;
							cM = new BMap.Point(cL, cR);
							cM = a7.convertMC2LL(cM);
							cI.point = cM;
							cI.city = cQ.cn;
							cI.citycode = cQ.sc;
							cI.address = cQ.wd;
							cI.precision = cQ.precision;
							cO = {
								city: cQ.cn,
								address: cQ.wd,
								citycode: cQ.sc
							}
						}
					}
					cK && cK(cM, cO)
				}
			}, {
				qt: bx,
				wd: T,
				cn: cJ
			})
		},
		getLocation: function (cI, cO, cL) {
			if (!(cI instanceof ca) && cO) {
				cO(null);
				return
			}
			var cK = this,
				cI = a7.convertLL2MC(cI),
				T = cI.lng,
				cN = cI.lat,
				cL = cL || {},
				cJ = cL.poiRadius || 100,
				cM = cL.numPois || 10;
			a8.request(function (c5) {
				var cS = null;
				if (c5 && c5.result && c5.result.type == bz) {
					var cV = c5.result,
						c2 = c5.content,
						cU, cW = {},
						cX = [],
						cZ;
					if (cV.error == 0) {
						var c6 = c2.address_detail,
							c3 = c6.city;
						if (c6) {
							cW.streetNumber = c6.street_number;
							cW.street = c6.street;
							cW.district = c6.district;
							cW.city = c3;
							cW.province = c6.province
						}
						cZ = c2.point;
						var c1 = new BMap.Point(cZ.x, cZ.y);
						c1 = a7.convertMC2LL(c1);
						var cR = c2.surround_poi;
						if (cR && cR.length) {
							for (var c4 = 0, c0 = cR.length; c4 < c0; c4++) {
								var cQ = {},
									cT = cR[c4];
								cQ.title = cT.name;
								cQ.uid = cT.uid;
								var cY = new BMap.Point(cT.point.x, cT.point.y);
								cY = a7.convertMC2LL(cY);
								cQ.point = cY;
								cQ.city = c3;
								cQ._poiType = cT.poiType;
								cQ.type = BMAP_POI_TYPE_NORMAL;
								cQ.address = cT.addr;
								cQ.postcode = cT.zip || null;
								cQ.phoneNumber = cT.tel || null;
								var cP = cQ._poiType;
								if (cP.length !== 0) {
									cQ.tags = cP.split(",")
								}
								cX.push(cQ)
							}
						}
						cS = {
							point: c1,
							address: c2.address,
							addressComponents: cW,
							surroundingPois: cX,
							business: c2.business
						}
					}
				}
				cO && cO(cS)
			}, {
				qt: d,
				x: T,
				y: cN,
				dis_poi: cJ,
				poi_num: cM
			})
		}
	});
	a5.extend(ai.prototype, {
		_asyncSearch: function () {
			for (var cI = 0, T = this._queryList.length; cI < T; cI++) {
				var cJ = this._queryList[cI];
				this[cJ.method].apply(this, cJ.arguments)
			}
			delete this._queryList
		},
		getCurrentPosition: function (cJ, cI) {
			this._callback = cJ ||
			function () {};
			if (!navigator.geolocation) {
				this._onErrorCallback(BMAP_STATUS_SERVICE_UNAVAILABLE);
				return
			}
			var T = this;
			navigator.geolocation.getCurrentPosition(function (cK) {
				T._onSuccessCallback(cK)
			}, function (cK) {
				T._onErrorCallback(cK.code + 5)
			}, cI)
		},
		_onSuccessCallback: function (T) {
			var cK = T.coords,
				cJ = this,
				cI = {
					x: cK.longitude,
					y: cK.latitude,
					from: "0",
					to: "4"
				};
			a8.request(function (cN) {
				var cM = (cN && cN.error == 0) ? new BMap.Point(cN.x, cN.y) : new BMap.Point(cK.longitude, cK.latitude);
				cJ._status = BMAP_STATUS_SUCCESS;
				var cL = {
					point: cM,
					accuracy: cK.accuracy
				};
				cJ._callback(cL)
			}, cI, null, "ag/coord/convert")
		},
		_onErrorCallback: function (T) {
			this._status = T;
			this._callback(null)
		}
	});
	a5.extend(b6.prototype, {
		_asyncSearch: function () {
			for (var cI = 0, T = this._queryList.length; cI < T; cI++) {
				var cJ = this._queryList[cI];
				this[cJ.method].apply(this, cJ.arguments)
			}
			delete this._queryList
		},
		get: function (cI) {
			var T = this;
			a8.request(function (cM) {
				if (cM && cM.result && cM.result.type == p) {
					var cK = cM.result,
						cO = cM.content;
					if (cK) {
						if (cK.error == 0) {
							var cP = T._opts.renderOptions.map;
							var cQ = cO.level;
							var cL = cO.cname;
							var cN = cO.code;
							var cJ = Q.parseGeo(cO.geo, true).point;
							cQ = Q.getBestLevel(cQ, cP);
							if (cP) {
								cP.centerAndZoom(cJ, cQ)
							}
						}
					}
					cI && cI({
						center: cJ,
						level: cQ,
						name: cL,
						code: cN
					})
				}
			}, {
				qt: R
			})
		}
	});
	a5.extend(S.prototype, {
		_asyncSearch: function () {
			for (var cI = 0, T = this._queryList.length; cI < T; cI++) {
				var cJ = this._queryList[cI];
				this[cJ.method].apply(this, cJ.arguments)
			}
			delete this._queryList
		},
		get: function (cI, T) {
			var cJ = {};
			cJ.boundaries = [];
			var cK = this;
			a8.request(function (cL) {
				if (cL && cL.content && cL.content.uid) {
					var cM = cL.content.uid;
					a8.request(function (cV) {
						if (cV && cV.content && cV.content.geo) {
							if (cI.indexOf("\u798f\u5efa") > -1 || cI.indexOf("\u6d59\u6c5f") > -1) {
								var cW = cK._parseGeoSpecial(cV.content.geo);
								cJ.boundaries = cW
							} else {
								var cP = Q.parseGeo(cV.content.geo, false);
								if (cP.geo && cP.geo.length && cP.geo.length > 0) {
									var cN = cP.geo.length;
									for (i = 0; i < cN; i++) {
										var cO = cP.geo[i];
										if (cO && cO.length && cO.length > 0) {
											var cT = cO.length - 1;
											var cR = [];
											for (var cQ = 0; cQ < cT; cQ += 2) {
												var cU = cO[cQ];
												var cS = cO[cQ + 1];
												var cX = new BMap.Point(cU, cS);
												cX = a7.convertMC2LL(cX);
												cR.push(cX.lng + ", " + cX.lat)
											}
											cJ.boundaries.push(cR.join(";"))
										}
									}
								}
							}
						}
						T && T(cJ)
					}, {
						qt: b1,
						num: 1000,
						l: 10,
						uid: cM
					})
				} else {
					T && T(cJ)
				}
			}, {
				qt: cg,
				wd: cI
			})
		},
		_parseGeoSpecial: function (cM) {
			var cP = this;
			var cJ = [];
			if (typeof(cM) != "string") {
				return cJ
			}
			var cI = cM.split("|");
			var cT = cI[2];
			var cL = cT.split(";");
			for (var cN = 0; cN < cL.length - 1; cN++) {
				var cS = cL[cN];
				var cO = [];
				var T = cS.split(",");
				for (var cK = 0; cK < T.length; cK += 2) {
					var cR = T[cK];
					var cQ = T[cK + 1];
					var cU = new BMap.Point(cR, cQ);
					cU = a7.convertMC2LL(cU);
					cO.push(cU.lng + ", " + cU.lat)
				}
				cJ.push(cO.join(";"))
			}
			return cJ
		}
	});
	/* scommon */
	var b = 1;
	var aB = 2;
	var bC = 3;
	var b7 = new aF(23, 25);
	var bW = new aF(9, 25);
	var q = new aF(9, 0);
	al.addSearchPoi = function (cM, T, cI, cN) {
		var cL = X(T);
		if (!cL) {
			return
		}
		if (cI < 0 || cI > 9) {
			return
		}
		var cK = new K(v + "img/markers.png", b7, {
			anchor: bW,
			imageOffset: new aF(0, -25 * cI),
			infoWindowAnchor: q
		});
		var cJ = new ab(cL, {
			icon: cK
		});
		cM.addOverlay(cJ);
		if (cN) {
			cJ.setTitle(cN)
		}
		return cJ
	};
	al.addCenterPoi = function (cL, T, cM) {
		var cK = X(T);
		if (!cK) {
			return
		}
		var cJ = new K(v + "img/markers.png", b7, {
			anchor: bW,
			imageOffset: new aF(0, -250),
			infoWindowAnchor: q
		});
		var cI = new ab(cK, {
			icon: cJ
		});
		cL.addOverlay(cI);
		if (cM) {
			cI.setTitle(cM)
		}
		return cI
	};
	al.addSearchInBoundsPoi = function (cL, T, cM) {
		var cK = X(T);
		if (!cK) {
			return
		}
		var cJ = new K(v + "img/markers.png", b7, {
			anchor: bW,
			imageOffset: new aF(0, -300),
			infoWindowAnchor: q
		});
		var cI = new ab(cK, {
			icon: cJ
		});
		cL.addOverlay(cI);
		if (cM) {
			cI.setTitle(cM)
		}
		return cI
	};
	
	function X(T) {
		var cJ = [];
		var cI = null;
		if (T instanceof ca) {
			cI = T
		} else {
			if (typeof T == "string") {
				cJ = a5.trim(T).split(",");
				if (cJ.length < 2) {
					return
				}
				cJ[0] = parseFloat(a5.trim(cJ[0]));
				cJ[1] = parseFloat(a5.trim(cJ[1]))
			} else {
				cJ = T.slice(0);
				if (cJ.length < 2) {
					return
				}
			}
			cI = new ca(cJ[0], cJ[1])
		}
		return cI
	}
	al.createSearchInfoWnd = function (cJ, T) {
		var cR = cJ.title;
		var cQ = cJ.addr;
		var cM = cJ.tel;
		var cO = cJ.uid || "";
		var cI = cJ.url;
		var cP = cJ.poiType || BMAP_POI_TYPE_NORMAL;
		T = T || {};
		if (!cR) {
			return null
		}
		var cN = cR;
		if (cP == BMAP_POI_TYPE_BUSSTOP) {
			cN = cN + "-\u516c\u4ea4\u8f66\u7ad9"
		} else {
			if (cP == BMAP_POI_TYPE_SUBSTOP) {
				cN = cN + "-\u5730\u94c1\u7ad9"
			}
		}
		if (cN.replace(/[\u0100-\uffff]/g, "##").length > 27) {
			cN = cN.substring(0, 13) + "&#8230"
		}
		var cL = "<p style='width:210px;font:bold 14px/16px " + b9.fontFamily + ";margin:0;color:#cc5522;white-space:nowrap;overflow:hidden' title='" + cR + "'>" + cN + "</p>";
		var cT = [];
		cT.push("<div style='font:12px " + b9.fontFamily + ";margin-top:10px'>");
		if (cQ) {
			var cS = "\u5730\u5740\uff1a";
			if (cP == BMAP_POI_TYPE_BUSSTOP || cP == BMAP_POI_TYPE_SUBSTOP) {
				cS = "\u8f66\u6b21\uff1a"
			}
			cT.push('<table cellspacing="0" style="overflow:hidden;table-layout:fixed;width:100%;font:12px ' + b9.fontFamily + '" >');
			cT.push('<tr><td style="vertical-align:top;width:38px;white-space:nowrap;word-break:keep-all">' + cS + '&nbsp;</td><td style="line-height:16px">');
			cT.push(cQ + "&nbsp;</td></tr>");
			if (cM) {
				cT.push('<tr><td style="vertical-align:top;">\u7535\u8bdd\uff1a</td><td>' + cM + "</td></tr>")
			}
			cT.push("</table>")
		} else {
			if (cM) {
				cT.push('<table cellspacing="0" style="table-layout:fixed;width:100%;font:12px ' + b9.fontFamily + '">');
				cT.push('<tr><td style="vertical-align:top;width:36px;white-space:nowrap;word-break:keep-all">\u7535\u8bdd\uff1a</td><td>' + cM + "</td></tr></table>")
			}
		}
		cT.push("</div>");
		var cK = new bM(cT.join(""), {
			title: cL,
			height: 0,
			width: 230,
			margin: [10, 10, 20, 10]
		});
		return cK
	};
	al.addDestPoi = function (cM, T, cN, cJ) {
		var cL = X(T);
		if (!cL) {
			return
		}
	
		var cK = new K(v + "img/dest_markers.png", new aF(42, 34), {
			anchor: new aF(14, 32),
			imageOffset: new aF(0, -34 * cJ),
			infoWindowAnchor: new aF(14, 0)
		});
		var cI = new ab(cL, {
			icon: cK,
			baseZIndex: 3500000,
			draggingCursor: "pointer"
		});
		cM.addOverlay(cI);
		if (cN) {
			cI.setTitle(cN)
		}
		return cI
	};
	al.addLine = function (cI, T) {
		return al.addRoute(cI, T, be)
	};
	al.ROUTE_STYLE_CONFIG = [{
		stroke: 6,
		color: "#0030ff",
		opacity: 0.45,
		style: "solid"
	}, {
		stroke: 6,
		color: "#0030ff",
		opacity: 0.45,
		style: "solid"
	}, {
		stroke: 4,
		color: "#30a208",
		opacity: 0.55,
		style: "dashed"
	}, {
		stroke: 5,
		color: "#0030ff",
		opacity: 0.45,
		style: "solid"
	}, {
		stroke: 4,
		color: "#ff0103",
		opacity: 0.65,
		style: "dashed"
	}, {
		stroke: 5,
		color: "#ff0103",
		opacity: 0.65,
		style: "solid"
	}];
	al.addRoute = function (cO, cL, cK) {
		var cJ = al.ROUTE_STYLE_CONFIG;
		if (typeof cK == "undefined") {
			cK = 0
		}
		if (!cJ[cK]) {
			return
		}
		var T = cL;
		var cI = cJ[cK];
		var cN = new f(T, {
			strokeWeight: cI.stroke,
			strokeColor: cI.color,
			strokeOpacity: cI.opacity,
			strokeStyle: cI.style,
			clickable: false
		});
		cO.addOverlay(cN);
		cN._routeType = cK;
		if (cK == be) {
			var cM = new f(T, {
				strokeWeight: cI.stroke - 2,
				strokeColor: "#fff",
				strokeOpacity: 0.3,
				clickable: false
			});
			cN._p = cM;
			cO.addOverlay(cM)
		}
		return cN
	};
	al.createTransInfoWnd = function (cI) {
		var cM = cI.content;
		var T = cI.curIndex;
		var cN = cI.total;
		var cK = cI.nextTransCbk;
		var cL = cI.obj;
		var cO = cI.hideStep;
		var cP = ["<div style='font:12px " + b9.fontFamily + "'>"];
		if (cM) {
			cP.push("<div style='margin:0 1em 24px 0'>" + cM + "</div>")
		}
		if (!cO) {
			cP.push(al.genStepNavHtml(cN, T))
		}
		cP.push("</div>");
		var cJ = new bM(cP.join(""), {
			title: "",
			height: 0,
			width: 220,
			margin: [10, 10, 20, 10]
		});
		if (cO) {
			return cJ
		}
		cJ.addEventListener("open", function () {
			if (a5.G("trans_prev")) {
				a5.on(a5.G("trans_prev"), "click", function () {
					if (cK && typeof cK == "function") {
						cK(T - 1, cL)
					}
				})
			}
			if (a5.G("trans_next")) {
				a5.on(a5.G("trans_next"), "click", function () {
					if (cK && typeof cK == "function") {
						cK(T + 1, cL)
					}
				})
			}
		});
		return cJ
	};
	al.genStepNavHtml = function (cJ, T) {
		var cI = [];
		cI.push('<table width="99%" cols="2" style="background:#eaf2ff;font:12px ' + b9.fontFamily + '"><tbody><tr>');
		cI.push('<td nowrap="nowrap" width="50%" align="left">');
		if (T == 0) {
			cI.push('<span unselectable="on" style="color:#9c9d99;-moz-user-select:none" >\u4e0a\u4e00\u6b65</span>')
		} else {
			cI.push('<a id="trans_prev" style="color:#7777cc;-moz-user-select:none" href="javascript:void(0)">\u4e0a\u4e00\u6b65</a>')
		}
		cI.push("</td>");
		cI.push('<td nowrap="nowrap" width="50%" align="right">');
		if (T == cJ + 1) {
			cI.push('<span unselectable="on" style="color:#9c9d99;-moz-user-select:none" >\u4e0b\u4e00\u6b65</span>')
		} else {
			cI.push('<a style="color:#7777cc" id="trans_next" href="javascript:void(0)">\u4e0b\u4e00\u6b65</a>')
		}
		cI.push("</td></tr></tbody></table>");
		return cI.join("")
	};
	al.addTransPoi = function (cM, T, cJ, cN) {
		var cL = X(T);
		if (!cL) {
			return
		}
		cJ = cJ || BMAP_LINE_TYPE_BUS;
		var cO = -55;
		if (cJ == BMAP_LINE_TYPE_SUBWAY) {
			cO = -76
		}
		var cK = new K(v + "img/trans_icons.png", new aF(21, 21), {
			imageOffset: new aF(0, cO),
			infoWindowAnchor: new aF(10, 0)
		});
		var cI = new ab(cL, {
			icon: cK
		});
		cM.addOverlay(cI);
		if (cN) {
			cI.setTitle(cN)
		}
		return cI
	};
	al.getInfoWindowDom = function (T) {
		if (T && T.infoWindowDoms && T.infoWindowDoms.contentDiv) {
			return T.infoWindowDoms.contentDiv.childNodes[0]
		}
		return null
	};
	al.addStationPoi = function (cJ, T, cK) {
		var cI = new ab(T, {
			icon: new K(bj._stopUrl, new aF(11, 11))
		});
		if (cK) {
			cI.setTitle(cK)
		}
		cJ.addOverlay(cI);
		return cI
	};
	al.addDragMkr = function (cJ, T) {
		var cI = new ab(T, {
			icon: new K(b9.imgPath + "drag.png", new aF(11, 11)),
			draggingCursor: "pointer"
		});
		cJ.addOverlay(cI);
		cI.setZIndex(10);
		return cI
	};
	al.createTipLbl = function (cI) {
		var T = new ae(cI, {
			offset: new aF(30, -10)
		});
		T.setStyle({
			border: "solid 1px gray",
			padding: "2px",
			whiteSpace: "nowrap",
			background: "#fff"
		});
		return T
	};
	al.getDistanceByPixel = function (cI, T) {
		if (!cI || !T) {
			return
		}
		return Math.round(Math.sqrt(Math.pow(cI.x - T.x, 2) + Math.pow(cI.y - T.y, 2)))
	};
	u.CBK_SEARCH_COMPLETE = 1;
	u.CBK_MARKERS_SET = 2;
	u.CBK_INFO_HTML_SET = 3;
	u.CBK_POLYLINES_SET = 4;
	u.CBK_RESULTS_HTML_SET = 5;
	u.CBK_BUSLIST_COMPLETE = 6;
	u.CBK_BUSLINE_COMPLETE = 7;
	u.CBK_BUSLISTHTML_SET = 8;
	u.CBK_BUSLINEHTML_SET = 9;
	u._getPoiUrl = function (T, cI) {
		if (T) {
			return cF + "?s=" + encodeURIComponent("inf&uid=" + T + "&c=" + cI) + "&i=0&sr=1"
		}
		return ""
	};
	u._getLocType = function (T) {
		if (!T) {
			return aX
		}
		if (typeof T == "string") {
			return a3
		}
		if (T instanceof ca) {
			return cn
		}
		if (T instanceof bw) {
			return Z
		}
		if (typeof T == "number") {
			return z
		}
		return aX
	};
	a5.extend(u.prototype, {
		_getIdByLoc: function (cL, T) {
			var cI = u._getLocType(cL.src);
			if (cI == aX) {
				return
			}
			var cJ = this;
			if (cI == z) {
				T && T(cL.src);
				return
			}
			if (cI == a3) {
				if (cL.curLocType == cI && cL.curSrc == cL.src && cL.curId) {
					T && T(cL.curId);
					return
				}
				cL.curLocType = cI;
				cL.curSrc = cL.src;
				a8.request(function (cN) {
					if (cN && cN.result && cN.result.type == p) {
						cJ._loc.curId = cN.content.code;
						T && T(cJ._loc.curId)
					}
				}, {
					qt: cs,
					wd: cL.src
				})
			} else {
				var cK;
				var cM = 18;
				if (cI == Z) {
					cK = cL.src.getCenter();
					cM = cL.src.getZoom()
				} else {
					cK = cL.src
				}
				if (cI == cL.curLocType && cL.curSrc.equals(cK) && cL.curId) {
					T && T(cL.curId);
					return
				}
				if (cI == Z) {
					cK = a7.convertLL2MC(cK)
				}
				if (cI == cn) {
					cK = a7.convertLL2MC(cK)
				}
				cL.curLocType = cI;
				cL.curSrc = new ca(cK.lng, cK.lat);
				a8.request(function (cN) {
					if (cN && cN.result && cN.result.type == a2) {
						cJ._loc.curId = cN.content ? cN.content.uid : 1;
						T && T(cJ._loc.curId)
					}
				}, {
					qt: c,
					b: cK.lng + "," + cK.lat + ";" + cK.lng + "," + cK.lat,
					l: cM
				})
			}
		},
		_setStatus: function (T) {
			if (typeof T == "number") {
				this._status = T
			} else {
				delete this._status
			}
		},
		_triggerCbk: function (cI, cK, cJ) {
			var T;
			switch (cI) {
			case u.CBK_SEARCH_COMPLETE:
				T = this._opts.onSearchComplete;
				break;
			case u.CBK_MARKERS_SET:
				T = this._opts.onMarkersSet;
				break;
			case u.CBK_POLYLINES_SET:
				T = this._opts.onPolylinesSet;
				break;
			case u.CBK_INFO_HTML_SET:
				T = this._opts.onInfoHtmlSet;
				break;
			case u.CBK_RESULTS_HTML_SET:
				T = this._opts.onResultsHtmlSet;
				break;
			case u.CBK_BUSLIST_COMPLETE:
				T = this._opts.onGetBusListComplete;
				break;
			case u.CBK_BUSLINE_COMPLETE:
				T = this._opts.onGetBusLineComplete;
				break;
			case u.CBK_BUSLISTHTML_SET:
				T = this._opts.onBusListHtmlSet;
				break;
			case u.CBK_BUSLINEHTML_SET:
				T = this._opts.onBusLineHtmlSet;
				break;
			default:
				break
			}
			T && T(cK, cJ)
		}
	});
	var aP = 0;
	var bt = 1;
	var aK = 2;
	Q.unique = function (cI) {
		var cL = false;
		var cK = [],
			cM = {};
		for (var cJ = 0, T = cI.length; cJ < T; cJ++) {
			if (!cM[cI[cJ]]) {
				cM[cI[cJ]] = true;
				cK.push(cI[cJ])
			}
		}
		return cK
	};
	Q.getBestLevel = function (cJ, cI) {
		if (cI) {
			var T = Math.min(cI.width / 1100, cI.height / 660);
			cJ = Math.round(cJ + (Math.log(T) / Math.log(2)))
		}
		if (cJ < 1) {
			cJ = 1
		}
		if (cJ > 18) {
			cJ = 18
		}
		return cJ
	};
	Q.parseGeo = function (/*geo*/cM, /*boolean*/cP) {
		if (typeof cM != "string" || !cM) {
			return
		}
		var cR = cM.split("|");//多个GEO，竖线分割
		var T;
		var cK;
		var cI;
		if (cR.length == 1) {
			T = U(cM)
		} else {
			T = U(cR[2]);
			cK = U(cR[0]);
			cI = U(cR[1]);
			if (!cP) {
				return T
			}
		}
		var cN = {
			type: T.geoType
		};
		if (cP) {
			switch (cN.type) {
			case aK:
				var cO = new ca(T.geo[0][0], T.geo[0][1]);
				var cQ = a7.convertMC2LL(cO);
				cN.point = cQ;
				cN.points = [cQ];
				break;
			case bt:
				cN.points = [];
				var cS = T.geo[0];
				for (var cL = 0, cJ = cS.length - 1; cL < cJ; cL += 2) {
					var cT = new ca(cS[cL], cS[cL + 1]);
					cT = a7.convertMC2LL(cT);
					cN.points.push(cT)
				}
				cK = new ca(cK.geo[0][0], cK.geo[0][1]);
				cI = new ca(cI.geo[0][0], cI.geo[0][1]);
				cK = a7.convertMC2LL(cK);
				cI = a7.convertMC2LL(cI);
				cN.bounds = new bK(cK, cI);
				break;
			default:
				break
			}
		}
		return cN
	};
	Q.parseGeoExt = function (c2, cT) {
		if (!cT) {
			cT = 0
		} else {
			if (cT < 0.25) {
				cT = 0
			} else {
				if (cT > 0.25 && cT < 1) {
					cT = 1
				} else {
					if (cT > 32) {
						cT = 32
					}
				}
			}
		}
		var cO = c2.split("|");
		if (cO.length == 1) {
			var cJ = U(cO[0]);
			return {
				type: cJ.type,
				bound: "",
				points: cJ.geo.join(",")
			}
		} else {
			if (cO.length > 1) {
				var cU = c2.split(";.=");
				var cQ = [];
				var cK = [];
				var cV = 0;
				var cZ = cU.length;
				for (var cW = 0; cW < cZ; cW++) {
					var c1 = cU[cW];
					if (cZ > 1) {
						if (cW == 0) {
							c1 = c1 + ";"
						}
						if (cW > 0 && cW < cZ - 1) {
							c1 = ".=" + c1 + ";"
						}
						if (cW == cZ - 1) {
							c1 = ".=" + c1
						}
					}
					var cL = c1.split("|");
					var cY = U(cL[0]);
					var cX = U(cL[1]);
					cQ.push(cY.geo.join(","));
					cQ.push(cX.geo.join(","));
					var cJ = U(cL[2]);
					cV = cJ.type;
					var c0 = cJ.geo.join(",");
					c0 = Q.parseGeoExtReg1(c0);
					if (cT > 0) {
						c0 = Q.parseGeoExtReg2(c0, cT)
					}
					cK.push(c0)
				}
				if (cZ <= 1) {
					cK = cK.join(";")
				}
				if (cZ == 2) {
					var cI = cK[0] + ";" + cK[1];
					var cM = cI.split(";");
					var T = [];
					for (var cW = 0; cW < cM.length; cW++) {
						var cP = cM[cW].split(",")[0];
						var cN = cM[cW].split(",")[1];
						var cR = new ca(cP, cN);
						var cS = a7.convertMC2LL(cR);
						T.push(cS)
					}
					cK = T
				}
				return {
					type: cV,
					bound: cQ.join(";"),
					points: cK
				}
			}
		}
	};
	Q.parseGeoStr = function (cJ) {
		var cI = cJ.split(",");
		var T = new ca(cI[0], cI[1]);
		return a7.convertMC2LL(T)
	};
	var ax = ["=", ".", "-", "*"];
	var bU = 1 << 23;
	
	function U(cP) {
		var cO = am(cP.charAt(0));
		var cI = cP.substr(1);
		var cR = 0;
		var T = cI.length;
		var cS = [];
		var cM = [];
		var cN = [];
		while (cR < T) {
			if (cI.charAt(cR) == ax[0]) {
				if ((T - cR) < 13) {
					return 0
				}
				cN = cy(cI.substr(cR, 13), cS);
				if (cN < 0) {
					return 0
				}
				cR += 13
			} else {
				if (cI.charAt(cR) == ";") {
					cM.push(cS.slice(0));
					cS.length = 0;
					++cR
				} else {
					if ((T - cR) < 8) {
						return 0
					}
					cN = aQ(cI.substr(cR, 8), cS);
					if (cN < 0) {
						return 0
					}
					cR += 8
				}
			}
		}
		for (var cL = 0, cJ = cM.length; cL < cJ; cL++) {
			for (var cK = 0, cQ = cM[cL].length; cK < cQ; cK++) {
				cM[cL][cK] /= 100
			}
		}
		return {
			geoType: cO,
			geo: cM
		}
	}
	function am(cI) {
		var T = -1;
		if (cI == ax[1]) {
			T = aK
		} else {
			if (cI == ax[2]) {
				T = bt
			} else {
				if (cI == ax[3]) {
					T = aP
				}
			}
		}
		return T
	}
	function cy(cK, cI) {
		var T = 0;
		var cM = 0;
		var cL = 0;
		for (var cJ = 0; cJ < 6; cJ++) {
			cL = aa(cK.substr(1 + cJ, 1));
			if (cL < 0) {
				return -1 - cJ
			}
			T += cL << (6 * cJ);
			cL = aa(cK.substr(7 + cJ, 1));
			if (cL < 0) {
				return -7 - cJ
			}
			cM += cL << (6 * cJ)
		}
		cI.push(T);
		cI.push(cM);
		return 0
	}
	function aQ(cL, cJ) {
		var cI = cJ.length;
		if (cI < 2) {
			return -1
		}
		var T = 0;
		var cN = 0;
		var cM = 0;
		for (var cK = 0; cK < 4; cK++) {
			cM = aa(cL.substr(cK, 1));
			if (cM < 0) {
				return -1 - cK
			}
			T += cM << (6 * cK);
			cM = aa(cL.substr(4 + cK, 1));
			if (cM < 0) {
				return -5 - cK
			}
			cN += cM << (6 * cK)
		}
		if (T > bU) {
			T = bU - T
		}
		if (cN > bU) {
			cN = bU - cN
		}
		cJ.push(cJ[cI - 2] + T);
		cJ.push(cJ[cI - 1] + cN);
		return 0
	}
	function aa(cI) {
		var T = cI.charCodeAt(0);
		if (cI >= "A" && cI <= "Z") {
			return T - "A".charCodeAt(0)
		} else {
			if (cI >= "a" && cI <= "z") {
				return (26 + T - "a".charCodeAt(0))
			} else {
				if (cI >= "0" && cI <= "9") {
					return (52 + T - "0".charCodeAt(0))
				} else {
					if (cI == "+") {
						return 62
					} else {
						if (cI == "/") {
							return 63
						}
					}
				}
			}
		}
		return -1
	}
	/* local */
	function az(T, cL, cI) {
		a5.lang.Class.call(this);
		if (!T) {
			return
		}
		this.container = (typeof(T) == "object") ? T : a5.G(T);
		this.page = 1;
		this.pageCount = 100;
		this.argName = "pg";
		this.pagecap = 4;
		this.callback = cL;
		this.update = true;
		var cJ = {
			page: 1,
			totalCount: 100,
			pageCount: 100,
			pagecap: 4,
			argName: "pg",
			update: true
		};
		if (!cI) {
			cI = cJ
		}
		for (var cK in cI) {
			if (typeof(cI[cK]) != "undefined") {
				this[cK] = cI[cK]
			}
		}
		this.render()
	}
	a5.extend(az.prototype, {
		render: function () {
			this.initialize()
		},
		initialize: function () {
			this.checkPages();
			this.container.innerHTML = this.createHtml()
		},
		checkPages: function () {
			if (isNaN(parseInt(this.page))) {
				this.page = 1
			}
			if (isNaN(parseInt(this.pageCount))) {
				this.pageCount = 1
			}
			if (this.page < 1) {
				this.page = 1
			}
			if (this.pageCount < 1) {
				this.pageCount = 1
			}
			if (this.page > this.pageCount) {
				this.page = this.pageCount
			}
			this.page = parseInt(this.page);
			this.pageCount = parseInt(this.pageCount)
		},
		getPage: function () {
			var cI = location.search;
			var cJ = new RegExp("[?&]?" + this.argName + "=([^&]*)[&$]?", "gi");
			var T = cI.match(cJ);
			this.page = RegExp.$1
		},
		createHtml: function () {
			var cP = [],
				cJ = this.page - 1,
				cM = this.page + 1;
			cP.push('<p style="margin:0;padding:0;white-space:nowrap">');
			if (cJ < 1) {} else {
				if (this.page >= this.pagecap) {
					var cI = '<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp1}">\u9996\u9875</a></span>';
					cP.push(cI.replace("{temp1}", "BMap.I('" + this.guid + "').toPage(1);"))
				}
				var cI = '<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp2}">\u4e0a\u4e00\u9875</a></span>';
				cP.push(cI.replace("{temp2}", "BMap.I('" + this.guid + "').toPage(" + cJ + ");"))
			}
			if (this.page < this.pagecap) {
				if (this.page % this.pagecap == 0) {
					var cK = this.page - this.pagecap - 1
				} else {
					var cK = this.page - this.page % this.pagecap + 1
				}
				var cN = cK + this.pagecap - 1
			} else {
				var cO = Math.floor(this.pagecap / 2);
				var cL = this.pagecap % 2 - 1;
				if (this.pageCount > this.page + cO) {
					var cN = this.page + cO;
					var cK = this.page - cO - cL
				} else {
					var cN = this.pageCount;
					var cK = this.page - cO - cL
				}
			}
			if (this.page > this.pageCount - this.pagecap && this.page >= this.pagecap) {
				var cK = this.pageCount - this.pagecap + 1;
				var cN = this.pageCount
			}
			for (var T = cK; T <= cN; T++) {
				if (T > 0) {
					if (T == this.page) {
						cP.push('<span style="margin-right:3px">' + T + "</span>")
					} else {
						if (T >= 1 && T <= this.pageCount) {
							var cI = '<span><a style="color:#7777cc;margin-right:3px" href="javascript:void(0)" onclick="{temp3}">[' + T + "]</a></span>";
							cP.push(cI.replace("{temp3}", "BMap.I('" + this.guid + "').toPage(" + T + ");"))
						}
					}
				}
			}
			if (cM > this.pageCount) {} else {
				var cI = '<span><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp4}">\u4e0b\u4e00\u9875</a></span>';
				cP.push(cI.replace("{temp4}", "BMap.I('" + this.guid + "').toPage(" + cM + ");"))
			}
			cP.push("</p>");
			return cP.join("")
		},
		toPage: function (cI) {
			var T = cI ? cI : 1;
			if (typeof(this.callback) == "function") {
				this.callback(T);
				this.page = T
			}
			if (this.update) {
				this.render()
			}
		}
	});
	a1.isReqDataMap = function (cI, T) {
		if (!cI || typeof T == "undefined") {
			return false
		}
		if (cI == cg && T != V && T != bq && T != p && T != an && T != bB) {
			return false
		}
		if (cI == b8 && T != aL) {
			return false
		}
		if (cI == aj && T != P) {
			return false
		}
		if (cI == aE && T != av) {
			return false
		}
		if (cI == ag && T != ac) {
			return false
		}
		if (cI == aY && T != bP) {
			return false
		}
		return true
	};
	a5.extend(a1.prototype, {
		_check: function () {
			for (var cI = 0, T = this._queryList.length; cI < T; cI++) {
				var cJ = this._queryList[cI];
				this[cJ.method].apply(this, cJ.arguments)
			}
			delete this._queryList;
			this.initialize()
		},
		initialize: function () {
			var T = this;
			this.renderMap = new ao(T);
			this.renderList = new N(T)
		},
		search: function (T, cI) {
			if (!T || (T instanceof Array && (T.length < 1 || T.length > 10))) {
				this.clearResults();
				this._setStatus(BMAP_STATUS_INVALID_REQUEST);
				this._triggerCbk(u.CBK_SEARCH_COMPLETE);
				return
			}
			cI = cI || {};
			if (cI.customData) {
				this._createCustomSearchInstance();
				this.customSearch.search({
					keyword: T,
					customData: cI.customData
				});
				this._useCustomdata = true;
				return
			} else {
				this._useCustomdata = false
			}
			var cK = arguments[2] || {};
			var cJ = this;
			this._getIdByLoc(this._loc, function (cP) {
				cP = cP || 1;
				cJ._isMultiKey = cJ._isKeywordArray(T);
				var cO;
				if (!cJ._isMultiKey) {
					cO = {
						qt: cI.forceLocal ? O : cg,
						c: cP,
						wd: T,
						rn: cJ.getPageCapacity()
					}
				} else {
					var cN = T.join("$$");
					var cL = T.length;
					cO = {
						qt: ag,
						c: cP,
						wd: cN,
						wdn: cL,
						rn: cJ.getPageCapacity()
					}
				}
				if (cJ._opts.reqFrom) {
					a5.extend(cO, {
						from: cJ._opts.reqFrom
					})
				}
				a5.extend(cO, cK.params);
				var cM = {
					params: cO,
					options: cI,
					userKw: cK.userKw || T
				};
				a5.extend(cM, cK);
				a8.request(function (cR, cQ) {
					cJ._rawDataCbk(cR, cQ)
				}, cO, cM)
			})
		},
		_isKeywordArray: function (T) {
			if (T && T instanceof Array) {
				return true
			} else {
				return false
			}
		},
		searchInBounds: function (T, cL, cI) {
			if (!T || !cL || (T instanceof Array && (T.length < 1 || T.length > 10))) {
				this.clearResults();
				this._setStatus(BMAP_STATUS_INVALID_REQUEST);
				this._triggerCbk(u.CBK_SEARCH_COMPLETE);
				return
			}
			var cI = cI || {};
			var cK = this;
			if (cI.customData) {
				this._createCustomSearchInstance();
				this.customSearch.search({
					keyword: T,
					bounds: cL,
					customData: cI.customData
				});
				this._useCustomdata = true;
				return
			} else {
				this._useCustomdata = false
			}
			var cJ = arguments[2] || {};
			this._getIdByLoc(this._loc, function (cT) {
				cT = cT || 1;
				var cS = cL.getSouthWest();
				var cR = cL.getNorthEast();
				cS = a7.convertLL2MC(cS);
				cR = a7.convertLL2MC(cR);
				var cN = "(" + cS.lng + "," + cS.lat + ";" + cR.lng + "," + cR.lat + ")";
				cK._isMultiKey = cK._isKeywordArray(T);
				var cQ;
				if (!cK._isMultiKey) {
					cQ = {
						qt: aj,
						c: cT,
						wd: T,
						ar: cN,
						rn: cK._opts.pageCapacity,
						l: 18
					}
				} else {
					var cP = T.join("$$");
					var cM = T.length;
					cQ = {
						qt: aE,
						c: cT,
						wd: cP,
						wdn: cM,
						ar: cN,
						rn: cK.getPageCapacity(),
						l: 18
					}
				}
				if (cK._opts.reqFrom) {
					a5.extend(cQ, {
						from: cK._opts.reqFrom
					})
				}
				a5.extend(cQ, cJ.params);
				var cO;
				if (cJ && cJ.center && cJ.radius) {
					cO = {
						params: cQ,
						bounds: cL,
						center: cJ.center,
						radius: cJ.radius,
						userKw: cJ.userKw || T
					}
				} else {
					cO = {
						params: cQ,
						bounds: cL,
						userKw: cJ.userKw || T
					}
				}
				a8.request(function (cV, cU) {
					cK._rawDataCbk(cV, cU)
				}, cQ, cO)
			})
		},
		searchNearby: function (cL, cJ, cM, cS) {
			if (!cL || !cJ || (!(cJ instanceof ca) && typeof cJ == "object" && !cJ.uid) || (cL instanceof Array && (cL.length < 1 || cL.length > 10))) {
				this.clearResults();
				this._setStatus(BMAP_STATUS_INVALID_REQUEST);
				this._triggerCbk(u.CBK_SEARCH_COMPLETE);
				return
			}
			var cS = cS || {};
			if (cS.customData) {
				this._createCustomSearchInstance();
				this.customSearch.search({
					keyword: cL,
					center: cJ,
					radius: cM,
					customData: cS.customData
				});
				this._useCustomdata = true;
				return
			} else {
				this._useCustomdata = false
			}
			cM = cM || a1.DEFAULT_RADIUS;
			cM = cM < 0 ? a1.DEFAULT_RADIUS : (cM > a1.MAX_RADIUS ? a1.MAX_RADIUS : cM);
			var cP = this;
			var cI = arguments[3] || {};
			if (cJ instanceof ca) {
				var cK = a7.convertLL2MC(cJ);
				var cO = new ca(cK.lng - cM, cK.lat - cM);
				var cN = new ca(cK.lng + cM, cK.lat + cM);
				var cR = a7.convertMC2LL(cO);
				var cQ = a7.convertMC2LL(cN);
				var T = new bK(new ca(cR.lng, cR.lat), new ca(cQ.lng, cQ.lat));
				cI.center = cJ;
				cI.radius = cM;
				this.searchInBounds(cL, T, cI);
				return
			}
			this._getIdByLoc(this._loc, function (cX) {
				cX = cX || 1;
				cP._isMultiKey = cP._isKeywordArray(cL);
				var cV;
				if (!cP._isMultiKey) {
					cV = {
						qt: b8,
						c: cX,
						wd: cL,
						rn: cP.getPageCapacity(),
						uid: cJ.uid,
						r: cM
					}
				} else {
					cV = {
						qt: aY,
						c: cX,
						wd: cL.join("$$"),
						wdn: cL.length,
						rn: cP.getPageCapacity(),
						uid: cJ.uid,
						r: cM
					}
				}
				if (typeof cJ == "string") {
					if (!cP._isMultiKey) {
						cV.qt = cg;
						cV.wd = cJ + " " + cL
					} else {
						cV.qt = ag;
						var cT = [];
						for (var cU = 0; cU < cL.length; cU++) {
							var cW = cJ + " " + cL[cU];
							cT.push(cW)
						}
						cV.wd = cT.join("$$");
						cV.wdn = cT.length
					}
					delete cV.r;
					delete cV.uid
				}
				if (cP._opts.reqFrom) {
					a5.extend(cV, {
						from: cP._opts.reqFrom
					})
				}
				a5.extend(cV, cI.params);
				a8.request(function (cZ, cY) {
					cP._rawDataCbk(cZ, cY)
				}, cV, {
					params: cV,
					center: cJ,
					radius: cM,
					userKw: cI.userKw || cL
				})
			})
		},
		_rawDataCbk: function (cR, cJ) {
			var cQ = this;
			if (cR.result.type == av || cR.result.type == ac || cR.result.type == bP) {
				cQ._isMultiKey = true
			} else {
				cQ._isMultiKey = false
			}
			this.clearResults();
			cQ._json = cR;
			this._ud = cJ;
			var T = cR.result;
			var cP = cJ.params.qt;
			if (!cQ._isMultiKey) {
				if (T.error != 0 || !a1.isReqDataMap(cP, T.type)) {
					var cK = cR.current_city;
					this._results = new ci({
						keyword: cJ.userKw,
						city: cK.name,
						province: cK.up_province_name || "",
						ccode: cK.code,
						pc: cQ.getPageCapacity(),
						center: cJ.center,
						radius: cJ.radius,
						bounds: ((cJ.center && cJ.radius) ? undefined : cJ.bounds),
						moreUrl: this._getMoreUrl(cJ, cK)
					});
					this._results._qt = cJ.params.qt;
					this._setStatus(BMAP_STATUS_UNKNOWN_LOCATION);
					this._triggerCbk(u.CBK_SEARCH_COMPLETE, this._results);
					this._renderList();
					return
				}
			} else {
				if (T.error != 0 || !a1.isReqDataMap(cP, T.type)) {
					var cK = cR.current_city;
					this._arrResults = [];
					var cI = cJ.userKw;
					for (var cO = 0, cL = cI.length; cO < cL; cO++) {
						var cN = new ci({
							keyword: cI[cO],
							city: cK.name,
							province: cK.up_province_name || "",
							ccode: cK.code,
							pc: cQ.getPageCapacity(),
							center: cJ.center,
							radius: cJ.radius,
							bounds: ((cJ.center && cJ.radius) ? undefined : cJ.bounds),
							moreUrl: ""
						});
						cN._qt = cJ.params.qt;
						this._arrResults.push(cN)
					}
					this._setStatus(BMAP_STATUS_UNKNOWN_LOCATION);
					this._triggerCbk(u.CBK_SEARCH_COMPLETE, this._arrResults);
					this._renderList();
					return
				}
			}
			cQ._processRaw(cJ);
			cQ._renderMap();
			cQ._renderList();
			var cM;
			if (!this._isMultiKey) {
				cM = this._results
			} else {
				cM = this._getMaxResults()
			}
			if (this._opts.renderOptions.selectFirstResult && cM && cM.getNumPois() > 0) {
				var cQ = this;
				setTimeout(function () {
					cQ._select(0)
				}, 240)
			}
		},
		_processRaw: function (cN) {
			var c7 = this._json.result,
				di = this._json.content,
				c3 = this._json.current_city,
				dj = c7.type,
				cR = this,
				cO = c7.page_num || 0,
				c0 = 0,
				c8 = 0,
				cU = [],
				c5 = [],
				T = [],
				dh = [],
				c2 = [],
				cW = [];
			if (this._json.psrs && this._json.psrs.SEResult) {
				var cK = this._json.psrs.SEResult;
				if (cK.length > 0) {
					for (var df = 0, cS = cK.length; df < cS; ++df) {
						cW.push(cK[df])
					}
				}
			}
			var da = this._json.suggest_query;
			if (da) {
				for (var df = 0, cS = da.length; df < cS; ++df) {
					cW.push(da[df].query)
				}
			}
			cW = Q.unique(cW);
			if (dj != bq && dj != an) {
				var cY;
				if (!this._isMultiKey) {
					c8 = c7.count - (cO == 0 ? (c7.spec_dispnum || 0) : 0);
					c0 = c7.total < 760 ? c7.total : 760;
					cY = cO == 0 ? (c7.spec_dispnum || 0) : 0
				}
				if (dj != p) {
					if (!this._isMultiKey) {
						for (var df = cY; df < c7.count; df++) {
							if (di && di[df]) {
								var cL = di[df];
								var cV = this._formatAddr(cL.addr, cL.poiType);
								var cZ = [];
								if (cL.cla && cL.cla.length > 0) {
									var cJ = cL.cla.length;
									while (cJ--) {
										var c6 = cL.cla[cJ][1];
										c6 = c6.replace("<b>", "").replace("</b>", "");
										cZ.unshift(c6)
									}
								}
								var c4 = {
									title: cL.name,
									uid: cL.uid,
									point: Q.parseGeo(cL.geo, true).point,
									url: u._getPoiUrl(cL.uid, c3.code),
									address: cV,
									city: c3.name,
									province: c3.up_province_name || "",
									phoneNumber: cL.tel,
									postcode: cL.zip,
									type: cL.poiType || BMAP_POI_TYPE_NORMAL,
									isAccurate: (cL.acc_flag && cL.acc_flag == 1) ? true : false
								};
								if (cZ.length > 0) {
									c4.tags = cZ
								}
								cU.push(c4);
								c5.push(c4.point)
							}
						}
					} else {
						var cQ = c7.result_array;
						var c9 = cN.userKw.length;
						for (var df = 0; df < c9; df++) {
							dh[df] = [];
							c2[df] = [];
							T[df] = [];
							if (!cQ[df]) {
								continue
							}
							if (cQ[df].type == bq) {
								if (di && di[df]) {
									for (var dd = 0; dd < di[df].length; dd++) {
										var cI = di[df][dd];
										T[df].push({
											city: cI.name,
											_code: cI.code,
											numResults: cI.num
										})
									}
								}
								if (this._json.more_city && this._json.more_city[df]) {
									var cT = this._json.more_city[df];
									for (var dd = 0, db = cT.length; dd < db; dd++) {
										for (var dc = 0, c1 = cT[dd].city.length; dc < c1; dc++) {
											var cI = cT[dd].city[dc];
											T[df].push({
												city: cI.name,
												_code: cI.code,
												numResults: cI.num
											})
										}
									}
								}
								continue
							}
							var cX = cQ[df].count;
							var cP = cQ[df].page_num || 0;
							var dg = cQ[df].total > 760 ? 760 : cQ[df].total;
							var cM = {
								count: cX,
								pagenum: cP,
								total: dg
							};
							c2[df].push(cM);
							for (var dd = 0; dd < cX; dd++) {
								if (di && di[df] && di[df][dd]) {
									var cL = di[df][dd];
									var cV = this._formatAddr(cL.addr, cL.poiType);
									var cZ = [];
									if (cL.cla && cL.cla.length > 0) {
										var cJ = cL.cla.length;
										while (cJ--) {
											var c6 = cL.cla[cJ][1];
											c6 = c6.replace("<b>", "").replace("</b>", "");
											cZ.unshift(c6)
										}
									}
									var c4 = {
										title: cL.name,
										uid: cL.uid,
										point: Q.parseGeo(cL.geo, true).point,
										url: u._getPoiUrl(cL.uid, c3.code),
										address: cV,
										city: c3.name,
										province: c3.up_province_name || "",
										phoneNumber: cL.tel,
										postcode: cL.zip,
										type: cL.poiType || BMAP_POI_TYPE_NORMAL,
										isAccurate: (cL.acc_flag && cL.acc_flag == 1) ? true : false,
										tags: cZ
									};
									dh[df].push(c4)
								}
							}
						}
					}
				} else {
					c8 = c0 = 1;
					var c4 = {
						title: di.cname,
						uid: di.uid,
						point: Q.parseGeo(di.geo, true).point,
						address: di.cname,
						url: cF + "?s=" + encodeURIComponent("s&wd=" + c7.wd)
					};
					cU.push(c4);
					c5.push(c4.point)
				}
			} else {
				if (dj == an) {
					c8 = c0 = 1;
					var c4 = {
						title: c7.wd,
						point: Q.parseGeoStr(di[0]),
						url: cF + "?s=" + encodeURIComponent("s&wd=" + c7.wd)
					};
					cU.push(c4);
					c5.push(c4.point)
				}
				if (dj == bq) {
					c8 = c0 = 0;
					for (var df = 0; df < di.length; df++) {
						T.push({
							city: di[df].name,
							_code: di[df].code,
							numResults: di[df].num
						})
					}
					if (this._json.more_city) {
						var cT = this._json.more_city;
						for (var df = 0, db = cT.length; df < db; df++) {
							for (var dd = 0, c1 = cT[df].city.length; dd < c1; dd++) {
								var di = cT[df].city[dd];
								T.push({
									city: di.name,
									_code: di.code,
									numResults: di.num
								})
							}
						}
					}
				}
			}
			if (!this._isMultiKey) {
				this._results = new ci({
					keyword: cN.userKw,
					count: c8,
					total: c0,
					pageIdx: c7.page_num,
					city: c3.name,
					province: c3.up_province_name || "",
					ccode: c3.code,
					pois: cU,
					cityList: T,
					pc: cR.getPageCapacity(),
					center: cN.center,
					radius: cN.radius,
					bounds: ((cN.center && cN.radius) ? undefined : cN.bounds),
					moreUrl: this._getMoreUrl(cN, c3),
					suggestions: cW
				});
				this._results._qt = cN.params.qt;
				if (c0 == 0 && dj != bq) {
					this._setStatus(BMAP_STATUS_UNKNOWN_LOCATION)
				} else {
					if (dj != bq) {
						this._setStatus(BMAP_STATUS_SUCCESS)
					} else {
						this._setStatus(BMAP_STATUS_CITY_LIST)
					}
				}
				this._triggerCbk(u.CBK_SEARCH_COMPLETE, this._results)
			} else {
				this._arrResults = [];
				var c9 = cN.userKw.length;
				var de = true;
				for (var df = 0; df < c9; df++) {
					if (c2[df].length > 0 && c2[df][0].total > 0) {
						de = false
					}
					var cU = new ci({
						keyword: cN.userKw[df] || "",
						count: c2[df].length > 0 ? c2[df][0].count : 0,
						total: c2[df].length > 0 ? c2[df][0].total : 0,
						pageIdx: c2[df].length > 0 ? c2[df][0].pagenum : 0,
						city: c3.name,
						province: c3.up_province_name || "",
						ccode: c3.code,
						pois: dh[df] || [],
						cityList: T[df] || [],
						pc: cR.getPageCapacity(),
						center: cN.center,
						radius: cN.radius,
						bounds: ((cN.center && cN.radius) ? undefined : cN.bounds),
						moreUrl: "",
						suggestions: cW
					});
					cU._qt = cN.params.qt;
					this._arrResults.push(cU)
				}
				if (de) {
					this._setStatus(BMAP_STATUS_UNKNOWN_LOCATION)
				} else {
					this._setStatus(BMAP_STATUS_SUCCESS)
				}
				this._triggerCbk(u.CBK_SEARCH_COMPLETE, this._arrResults)
			}
		},
		_getMoreUrl: function (cI, cJ) {
			var cN = "";
			var cL = typeof cI.center == "string" ? (cI.center + " " + cI.userKw) : cI.userKw;
			var cM = "s",
				cK = "",
				cP = "";
			if (typeof cI.center == "object" && !(cI.center instanceof ca)) {
				cM = "nb";
				var cO = cI.center.point;
				cO = a7.convertLL2MC(cO);
				cK = encodeURIComponent("&uid=" + cI.center.uid + "&r=" + cI.radius) + "&l=13&c=" + cO.lng + "," + cO.lat
			}
			if (cI.bounds && !cI.center) {
				cM = "bd";
				var cO = cI.bounds.getCenter();
				cO = a7.convertLL2MC(cO);
				cP = "&c=" + cO.lng + "," + cO.lat + "&l=13"
			}
			if (cI.center && cI.center instanceof ca) {
				var cO = cI.center;
				cO = a7.convertLL2MC(cO);
				cP = "&c=" + cO.lng + "," + cO.lat + "&l=13";
				var T = cI.radius;
				cM = "tpl:PoiSearch?nb&ar=(" + (cO.lng - T) + "," + (cO.lat - T) + ";" + (cO.lng + T) + "," + (cO.lat + T) + ")"
			}
			cN = cF + "?sr=1" + cP + "&s=" + encodeURIComponent(cM + "&wd=" + cL + "&c=" + cJ.code) + cK;
			return cN
		},
		_formatAddr: function (cI, T) {
			T = T || BMAP_POI_TYPE_NORMAL;
			if (T == BMAP_POI_TYPE_BUSSTOP || T == BMAP_POI_TYPE_SUBSTOP) {
				return Q.unique(cI.split(";")).join("; ")
			}
			return cI
		},
		_chkMultiKeyResults: function (cK) {
			for (var cJ = 0, T = cK.length; cJ < T; cJ++) {
				var cI = cK[cJ];
				if (cI.getCurrentNumPois() > 0) {
					return true
				}
			}
			return false
		},
		_renderMap: function () {
			if (this._opts.renderOptions.map && ((this._results && this._results.getCurrentNumPois() > 0) || (this._arrResults && this._chkMultiKeyResults(this._arrResults)))) {
				var cS = this,
					cI = this._opts.renderOptions.map,
					cU = [];
				if (!cS._isMultiKey) {
					for (var cP = 0; cP < this._results.getCurrentNumPois(); cP++) {
						var cT = this._results.getPoi(cP);
						cU.push(cT.point);
						var cQ = this._addPoi(cT.point, cP, cT.title);
						if (!cQ) {
							continue
						}
						cT.marker = cQ;
						(function () {
							var cW = cP;
							cQ.addEventListener("click", function () {
								cS._select(cW)
							})
						})();
						this._overlays.push(cQ)
					}
				} else {
					var cV = 0;
					for (var cP = 0, cM = this._arrResults.length; cP < cM; cP++) {
						var cN = this._arrResults[cP];
						for (var cO = 0, cL = cN.getCurrentNumPois(); cO < cL; cO++) {
							var cT = cN.getPoi(cO);
							cU.push(cT.point);
							var cQ = al.addSearchInBoundsPoi(cI, cT.point, cT.title);
							if (!cQ) {
								continue
							}
							cT.marker = cQ;
							cT._kwIndex = cP;
							(function () {
								var cW = cV;
								cQ.addEventListener("click", function () {
									cS._select(cW)
								})
							})();
							this._overlays.push(cQ);
							this._arrPois.push(cT);
							cV++
						}
					}
				}
				var T = this._ud.center;
				if (T && typeof T != "string" && !(T instanceof ca)) {
					var cK = this._centerMkr = al.addCenterPoi(cI, T.point, T.title);
					cK.addEventListener("click", function () {
						cS._select(-1);
						cS._curIndex = "c";
						var cW = al.createSearchInfoWnd({
							title: T.title,
							addr: T.address,
							tel: T.phoneNumber,
							url: T.url,
							poiType: T.type
						});
						cW.addEventListener("open", function () {
							cS._triggerCbk(u.CBK_INFO_HTML_SET, T, al.getInfoWindowDom(cI))
						});
						cK.openInfoWindow(cW)
					})
				}
				var cR = this._json.result && this._json.result.type;
				var cJ = {};
				switch (cR) {
				case V:
				case aL:
				case P:
				case av:
				case ac:
				case bP:
					cJ.points = cU;
					break;
				case p:
					cJ.center = this._results.getPoi(0).point;
					cJ.level = this._json.content.level;
					break;
				case bB:
					cJ.center = this._results.getPoi(0).point;
					cJ.level = 13;
					break;
				case an:
					cJ.center = this._results.getPoi(0).point;
					cJ.level = parseInt(this._json.content[1]);
					break;
				default:
					break
				}
				this._getBestViewport(cJ);
				if (!cS._isMultiKey) {
					this._triggerCbk(u.CBK_MARKERS_SET, this._results._pois)
				} else {
					this._triggerCbk(u.CBK_MARKERS_SET, this._arrPois)
				}
			}
		},
		_addPoi: function (cI, T, cJ) {
			if (this._opts.pageCapacity <= a1.DEFAULT_PAGE_CAPACITY) {
				return al.addSearchPoi(this._opts.renderOptions.map, cI, T, cJ)
			} else {
				return al.addSearchInBoundsPoi(this._opts.renderOptions.map, cI, cJ)
			}
		},
		_select: function (cK) {
			var cJ = this._curIndex,
				cN = this._opts.renderOptions.map,
				T = this._opts.renderOptions.panel;
			if (cN && cK > -1 && this._overlays[cK]) {
				var cL = this._overlays[cK];
				cN.closeInfoWindow();
				var cO;
				if (!this._isMultiKey) {
					cO = this._results.getPoi(cK)
				} else {
					cO = this._arrPois[cK]
				}
				if (!cO) {
					return
				}
				var cI = al.createSearchInfoWnd({
					title: cO.title,
					addr: cO.address,
					tel: cO.phoneNumber,
					url: cO.url,
					poiType: cO.type
				});
				var cM = this;
				cI.addEventListener("close", function () {
					if (T) {
						if (typeof cM._curIndex == "number" && cM._curIndex != -1 && T.getElementsByTagName("li")[cM._curIndex]) {
							T.getElementsByTagName("li")[cM._curIndex].style.backgroundColor = ""
						}
					}
					cM._curIndex = -1
				});
				cI.addEventListener("open", function () {
					cM._triggerCbk(u.CBK_INFO_HTML_SET, cO, al.getInfoWindowDom(cN))
				});
				cL.openInfoWindow(cI)
			}
			if (T) {
				if (typeof cJ == "number" && cJ != -1 && T.getElementsByTagName("li")[cJ]) {
					T.getElementsByTagName("li")[cJ].style.backgroundColor = ""
				}
				if (typeof cK == "number" && cK != -1 && T.getElementsByTagName("li")[cK]) {
					T.getElementsByTagName("li")[cK].style.backgroundColor = "#f0f0f0"
				}
			}
			this._curIndex = cK
		},
		_clearOverlays: function () {
			for (var cI = 0, T = this._overlays.length; cI < T; cI++) {
				this._overlays[cI].remove();
				this._overlays[cI] = null
			}
			this._overlays.length = 0;
			for (var cI = 0, T = this._arrPois.length; cI < T; cI++) {
				this._arrPois[cI] = null
			}
			this._arrPois.length = 0;
			if (this._centerMkr) {
				this._centerMkr.remove();
				this._centerMkr = null
			}
		},
		_renderList: function () {
			if (this._opts.renderOptions.panel && this._opts.renderOptions.panel.appendChild && (this._results || this._arrResults)) {
				var cJ = Y("div", {
					style: "font:12px " + b9.fontFamily + ";border:1px solid #999;"
				});
				var cP = this.getStatus();
				var cQ = Y("div", {
					style: "background:#fff"
				});
				var cS = Y("ol", {
					style: "list-style:none;padding:0;margin:0"
				});
				if (cP == BMAP_STATUS_SUCCESS) {
					if (!this._isMultiKey) {
						for (var cR = 0, cM = this._results.getCurrentNumPois(); cR < cM; cR++) {
							var cX = this._createItem(cR);
							cS.appendChild(cX)
						}
					} else {
						var cU = 0;
						for (var cR = 0, cM = this._arrResults.length; cR < cM; cR++) {
							var cN = this._arrResults[cR];
							for (var cO = 0, cL = cN.getCurrentNumPois(); cO < cL; cO++) {
								var cX = this._createItem(cU);
								cS.appendChild(cX);
								cU++
							}
						}
					}
				}
				if (cP == BMAP_STATUS_CITY_LIST) {
					if (!this._isMultiKey) {
						for (var cR = 0, cM = Math.min(6, this._results.getCityList().length); cR < cM; cR++) {
							var cX = this._createCityItem(cR);
							cS.appendChild(cX)
						}
					}
				}
				if (cP == BMAP_STATUS_UNKNOWN_LOCATION) {
					var cX = Y("li", {
						style: "margin:2px 0;padding:0 5px 0 3px;overflow:hidden;line-height:17px"
					});
					cX.innerHTML = "\u62b1\u6b49\uff0c\u672a\u627e\u5230\u76f8\u5173\u5730\u70b9\u3002";
					cS.appendChild(cX)
				}
				cQ.appendChild(cS);
				cJ.appendChild(cQ);
				var cV = this;
				var cI = Y("div", {
					style: "white-space:nowrap;text-align:right;background:#e5ecf9;margin-top:5px;padding:2px"
				});
				var T;
				if (!this._isMultiKey) {
					T = Y("a", {
						style: "color:#7777cc",
						href: this._results.moreResultsUrl,
						target: "_blank",
						title: "\u5230\u767e\u5ea6\u5730\u56fe\u67e5\u770b\u66f4\u591a\u7ed3\u679c"
					});
					T.innerHTML = "\u66f4\u591a\u7ed3\u679c&#187;"
				} else {
					T = Y("a", {
						style: "color:#7777cc"
					});
					T.innerHTML = "&nbsp;"
				}
				var cK = Y("div", {
					style: "float:left;margin-right:5px"
				});
				if (!this._isMultiKey) {
					if (this._results.getNumPages() > 1) {
						var cT = new az(cK, function (cY) {
							cV.gotoPage(cY - 1)
						}, {
							pageCount: cV._results.getNumPages(),
							page: cV._results.getPageIndex() + 1,
							update: false
						})
					}
				} else {
					var cW = this._getMaxResults();
					if (cW && cW.getNumPages() > 1) {
						var cT = new az(cK, function (cY) {
							cV.gotoPage(cY - 1)
						}, {
							pageCount: cW.getNumPages(),
							page: cW.getPageIndex() + 1,
							update: false
						})
					}
				}
				cI.appendChild(cK);
				cI.appendChild(T);
				cJ.appendChild(cI);
				this._opts.renderOptions.panel.appendChild(cJ);
				this._triggerCbk(u.CBK_RESULTS_HTML_SET, cJ)
			}
		},
		_getMaxResults: function () {
			var cL, T = -1;
			for (var cK = 0, cI = this._arrResults.length; cK < cI; cK++) {
				var cJ = this._arrResults[cK];
				if (cJ.getNumPages() > T) {
					cL = cJ;
					T = cJ.getNumPages()
				}
			}
			return cL
		},
		_createItem: function (cL) {
			var cP, cI;
			if (!this._isMultiKey) {
				cP = this._results;
				if (!cP || !cP.getPoi(cL)) {
					return
				}
				cI = cP.getPoi(cL)
			} else {
				var cM = 0,
					cK = false;
				for (var cT = 0, cR = this._arrResults.length; cT < cR; cT++) {
					var cN = this._arrResults[cT];
					for (var cS = 0, cQ = cN.getCurrentNumPois(); cS < cQ; cS++) {
						if (cM == cL) {
							cI = cN.getPoi(cS);
							cI._kwIndex = cT;
							cK = true;
							break
						}
						cM++
					}
					if (cK) {
						break
					}
				}
			}
			var cV = Y("li", {
				style: "margin:2px 0;padding:0 5px 0 3px;cursor:pointer;overflow:hidden;line-height:17px"
			});
			if (this._curIndex > -1 && cL == this._curIndex) {
				cV.style.backgroundColor = "#f0f0f0"
			}
			var cU = cL == 0 ? cL + 2 + "px" : "-" + (cL * 20 - 2) + "px";
			if (!this._isMultiKey) {
				if (this._opts.pageCapacity > a1.DEFAULT_PAGE_CAPACITY) {
					cU = "-218px"
				}
			} else {
				cU = "-218px"
			}
			var T = ["<span style='background:url(" + v + "bmap/red_labels.gif) 0 " + cU + " no-repeat;padding-left:10px;margin-right:3px'>&nbsp;</span>"];
			var cY, cO;
			if (!this._isMultiKey) {
				var cW = this._results.keyword;
				var cJ = new RegExp(cW, "ig");
				if (cI.title) {
					cY = cI.title.replace(cJ, "<b>$&</b>")
				}
				if (cI.address) {
					cO = cI.address.replace(cJ, "<b>$&</b>")
				}
			} else {
				if (typeof cI._kwIndex != "undefined" && this._ud.userKw instanceof Array) {
					var cW = this._ud.userKw[cI._kwIndex];
					if (cW) {
						var cJ = new RegExp(cW, "ig");
						if (cI.title) {
							cY = cI.title.replace(cJ, "<b>$&</b>")
						}
						if (cI.address) {
							cO = cI.address.replace(cJ, "<b>$&</b>")
						}
					}
				} else {
					cY = cI.title;
					cO = cI.address
				}
			}
			if (cI.type == BMAP_POI_TYPE_BUSSTOP) {
				cY += "-\u516c\u4ea4\u8f66\u7ad9"
			} else {
				if (cI.type == BMAP_POI_TYPE_SUBSTOP) {
					cY += "-\u5730\u94c1\u7ad9"
				}
			}
			T.push("<span style='color:#00c;text-decoration:underline'>" + cY + "</span>");
			if (cI.address) {
				T.push("<span style='color:#666;'> - " + cO + "</span>")
			}
			cV.innerHTML = T.join("");
			var cX = this;
			cV.onclick = function () {
				cX._select(cL)
			};
			return cV
		},
		_createCityItem: function (T) {
			var cJ = Y("li", {
				style: "margin:2px 0;padding:0 5px 0 3px;cursor:pointer;overflow:hidden;line-height:17px"
			});
			cJ._index = T;
			var cK = this._results.getCityList();
			cJ.innerHTML = "<span style='color:#00c;text-decoration:underline'>" + cK[T].city + "</span> <span style='color:#666'>(\u5171" + cK[T].numResults + "\u6761\u7ed3\u679c)</span>";
			var cI = this;
			cJ.onclick = function () {
				cI.setLocation(cI._results.getCityList()[T].city);
				cI.search(cI._results.keyword)
			};
			return cJ
		},
		clearResults: function () {
			delete this._json;
			delete this._status;
			delete this._results;
			if (this._isMultiKey) {
				delete this._arrResults
			}
			delete this._ud;
			this._curIndex = -1;
			this._setStatus();
			this._clearOverlays();
			if (this._opts.renderOptions.panel) {
				this._opts.renderOptions.panel.innerHTML = ""
			}
		},
		gotoPage: function (cI) {
			if (this._useCustomdata) {
				this.customSearch.gotoPage(cI);
				return
			}
			if (this._ud) {
				var T;
				if (!this._isMultiKey) {
					T = this._results
				} else {
					T = this._getMaxResults()
				}
				if (typeof cI == "number" && !isNaN(cI) && cI >= 0 && cI <= T.getNumPages() - 1) {
					this._ud.params.pn = cI;
					var cJ = this._ud.params.qt;
					switch (cJ) {
					case cg:
					case O:
						this.search(this._ud.params.wd, this._ud.options, this._ud);
						break;
					case aj:
						this.searchInBounds(this._ud.params.wd, this._ud.bounds, this._ud);
						break;
					case b8:
						this.searchNearby(this._ud.params.wd, this._ud.center, this._ud.radius, this._ud);
						break;
					case aE:
						this.searchInBounds(this._ud.userKw, this._ud.bounds, this._ud);
						break;
					case ag:
						this.search(this._ud.userKw, this._ud.options, this._ud);
						break;
					case aY:
						this.searchNearby(this._ud.userKw, this._ud.center, this._ud.radius, this._ud);
						break;
					default:
						break
					}
				} else {
					this._setStatus(BMAP_STATUS_INVALID_REQUEST);
					this._triggerCbk(u.CBK_SEARCH_COMPLETE)
				}
			}
		},
		_getBestViewport: function (cI) {
			var T = this._opts.renderOptions,
				cM = T.map;
			if (cM) {
				if (cI.points) {
					var cN = cI.points;
					var cK = !T.autoViewport,
						cL = !T.selectFirstResult && T.autoViewport,
						cJ = cM.getViewport(cN, {
							margins: [30, 30, 30, 30]
						});
					if (!cK) {
						cM.setViewport(cJ, {
							enableAnimation: cL
						})
					}
				} else {
					cI.level = Q.getBestLevel(cI.level, cM);
					if (this._opts.renderOptions.autoViewport) {
						cM.centerAndZoom(cI.center, cI.level)
					}
				}
			}
		},
		_createCustomSearchInstance: function () {
			if (!this.customSearch) {
				var T = this;
				this.customSearch = new aD(T)
			}
		},
		select: function (T) {
			this.renderMap.select(T);
			this.renderList.select(T);
			this._curIndex = T
		}
	});
	
	function ci(T) {
		this.keyword = T.keyword || "";
		this._pageIndex = T.pageIdx || 0;
		this._currentNumPois = T.count || 0;
		this._numPois = T.total || 0;
		this._numPages = Math.ceil(T.total / T.pc);
		this.center = T.center;
		this.radius = T.radius;
		this.bounds = T.bounds;
		this.city = T.city;
		this.province = T.province;
		this.viewport = T.viewport;
		this.moreResultsUrl = T.moreUrl;
		this._pois = T.pois && T.pois.slice(0) || [];
		this._cityList = T.cityList && T.cityList.slice(0);
		this.suggestions = T.suggestions || []
	}
	a5.extend(ci.prototype, {
		getPoi: function (T) {
			if (this._pois[T]) {
				return this._pois[T]
			}
		},
		getNumPois: function () {
			return this._numPois
		},
		getNumPages: function () {
			return this._numPages
		},
		getCurrentNumPois: function () {
			return this._currentNumPois
		},
		getPageIndex: function () {
			return this._pageIndex
		},
		getCityList: function () {
			return this._cityList
		},
		toString: function () {
			return "LocalResult"
		}
	});
	
	function aD(T) {
		a5.lang.Class.call(this);
		this.localSearch = T;
		this.localSearch._curIndex = -1
	}
	a5.lang.inherits(aD, a5.lang.Class, "CustomSearch");
	a5.extend(aD.prototype, {
		search: function (T) {
			this.localSearch._isMultiKey = false;
			if (!this._check(T)) {
				return
			}
			var cI = this;
			this.localSearch._getIdByLoc(this.localSearch._loc, function (cL) {
				T.region = cL;
				var cK = cI._getParams(T);
				var cJ = {
					params: cK,
					options: T
				};
				cI.searchRequest(cK, cJ)
			})
		},
		_check: function () {
			var T = true;
			if (!bG) {
				this.localSearch._setStatus(BMAP_STATUS_INVALID_KEY);
				this.localSearch._triggerCbk(u.CBK_SEARCH_COMPLETE);
				T = false
			}
			return T
		},
		_getParams: function (cJ) {
			var cM = {
				region: cJ.region,
				page_size: this.localSearch.getPageCapacity(),
				ak: bG
			};
			if (cJ.page_index) {
				cM.page_index = cJ.page_index
			}
			if (cJ.keyword) {
				cM.q = cJ.keyword
			}
			if (cJ.bounds) {
				var cI = cJ.bounds.getSouthWest();
				var cL = cJ.bounds.getNorthEast();
				var cK = cL.lat + "," + cI.lng + ";" + cI.lat + "," + cL.lng;
				cM.bounds = cK
			}
			if (cJ.center && (cJ.center instanceof ca || cJ.center.point instanceof ca)) {
				var T = null;
				if (cJ.center instanceof ca) {
					T = cJ.center
				} else {
					if (cJ.center.point instanceof ca) {
						T = cJ.center.point
					}
				}
				cM.location = T.lat + "," + T.lng
			}
			if (typeof cJ.center == "string") {
				cM.q = cJ.center + " " + cJ.keyword
			}
			if (cJ.radius) {
				cM.radius = cJ.radius
			}
			if (cJ.customData && cJ.customData.databoxId) {
				cM.filter = "databox:" + cJ.customData.databoxId
			}
			return cM
		},
		searchRequest: function (cJ, T) {
			var cI = this;
			a8.request(function (cL, cK) {
				cI._rawDataCbk(cL, cK)
			}, cJ, T, "geosearch/poi")
		},
		_rawDataCbk: function (cK, cI) {
			this.localSearch.clearResults();
			this.localSearch._ud = cI;
			if (cK.status != 0) {
				this._results = new ci({
					keyword: cI.options.keyword,
					pc: this.localSearch.getPageCapacity(),
					center: cI.options.center || "",
					radius: cI.options.radius || "",
					bounds: cI.options.bounds || "",
					moreUrl: ""
				});
				if (cK.status == 5) {
					this.localSearch._setStatus(BMAP_STATUS_INVALID_KEY)
				} else {
					this.localSearch._setStatus(BMAP_STATUS_UNKNOWN_LOCATION)
				}
				this.localSearch._results = this._results;
				this.localSearch._triggerCbk(u.CBK_SEARCH_COMPLETE, this._results);
				this.localSearch.renderList.dispatchEvent("render");
				return
			}
			this._processRaw(cK, cI);
			this.localSearch.renderMap.dispatchEvent("render");
			this.localSearch.renderList.dispatchEvent("render");
			var T = cI.options.center;
			if (T && typeof T != "string" && !(T instanceof ca) && this.localSearch.getStatus() == BMAP_STATUS_SUCCESS) {
				this.localSearch.renderMap.addCenterPoi(T)
			}
			var cJ = this.localSearch._results;
			if (this.localSearch._opts.renderOptions.selectFirstResult && cJ && cJ.getNumPois() > 0) {
				var cL = this;
				setTimeout(function () {
					cL.localSearch.select(0)
				}, 240)
			}
		},
		_processRaw: function (cR, T) {
			var cM = cR.content || {},
				cN = this,
				cJ = [],
				cQ = [],
				cL = cM.length;
			for (var cK = 0, cS = cR.size; cK < cS && cM[cK]; cK++) {
				var cP = cM[cK];
				var cO = new ca(cP.longitude, cP.latitude);
				var cI = {
					title: cP.name,
					uid: cP.uid,
					point: cO,
					url: "",
					address: cP.addr,
					city: cP.city,
					province: cP.province,
					phoneNumber: cP.tel,
					postcode: cP.zip,
					type: cP.cla
				};
				cJ.push(cI);
				cQ.push(cO)
			}
			this._results = new ci({
				keyword: T.options.keyword,
				count: cR.size,
				total: cR.total,
				pageIdx: T.params.page_index,
				city: "",
				province: "",
				ccode: "",
				pois: cJ,
				pc: this.localSearch.getPageCapacity(),
				center: T.options.center,
				radius: T.options.radius,
				bounds: T.options.bounds,
				moreUrl: ""
			});
			if (cR.total == 0) {
				this.localSearch._setStatus(BMAP_STATUS_UNKNOWN_LOCATION)
			} else {
				this.localSearch._setStatus(BMAP_STATUS_SUCCESS)
			}
			this.localSearch._results = this._results;
			this.localSearch._triggerCbk(u.CBK_SEARCH_COMPLETE, this._results)
		},
		gotoPage: function (cI) {
			var T = this.localSearch._results;
			if (typeof cI == "number" && !isNaN(cI) && cI >= 0 && cI <= T.getNumPages() - 1) {
				this.localSearch._ud.params.page_index = cI;
				this.searchRequest(this.localSearch._ud.params, this.localSearch._ud)
			} else {
				this.localSearch._setStatus(BMAP_STATUS_INVALID_REQUEST);
				this.localSearch._triggerCbk(u.CBK_SEARCH_COMPLETE)
			}
		}
	});
	
	function ao(T) {
		a5.lang.Class.call(this);
		this.localSearch = T;
		this.map = T._opts.renderOptions.map;
		this._overlays = T._overlays;
		this.initialize()
	}
	a5.lang.inherits(ao, a5.lang.Class, "RenderMap");
	a5.extend(ao.prototype, {
		initialize: function () {
			this.addEventListener("render", this._render)
		},
		_render: function () {
			var cM = this,
				cN = this.localSearch._results._pois,
				cL = [];
			for (var cK = 0, T = cN.length; cK < T; cK++) {
				var cO = cN[cK];
				cL.push(cO.point);
				var cJ = this._addPoi(cO.point, cK, cO.title);
				if (!cJ) {
					continue
				}
				cO.marker = cJ;
				(function () {
					var cP = cK;
					cJ.addEventListener("click", function () {
						cM.localSearch.select(cP)
					})
				})();
				this._overlays.push(cJ)
			}
			var cI = {};
			cI.points = cL;
			this._getBestViewport(cI);
			this.localSearch._triggerCbk(u.CBK_MARKERS_SET, cN)
		},
		addCenterPoi: function (cK) {
			var T = cK;
			var cI = this;
			if (T && typeof T != "string" && !(T instanceof ca)) {
				var cJ = this.localSearch._centerMkr = al.addCenterPoi(this.map, T.point, T.title);
				cJ.addEventListener("click", function () {
					cI.localSearch.select(-1);
					cI.localSearch._curIndex = "c";
					var cL = cI._createInfoWindowByPoi(cK);
					cJ.openInfoWindow(cL)
				})
			}
		},
		_addPoi: function (cI, T, cJ) {
			if (this.localSearch._opts.pageCapacity <= a1.DEFAULT_PAGE_CAPACITY) {
				return al.addSearchPoi(this.map, cI, T, cJ)
			} else {
				return al.addSearchInBoundsPoi(this.map, cI, cJ)
			}
		},
		select: function (cI) {
			if (this.map && cI > -1 && this._overlays[cI]) {
				this.map.closeInfoWindow();
				var cK = this.localSearch._results.getPoi(cI);
				if (!cK) {
					return
				}
				var T = this._createInfoWindowByPoi(cK);
				var cJ = this._overlays[cI];
				cJ.openInfoWindow(T)
			}
		},
		_createInfoWindowByPoi: function (cJ) {
			var T = al.createSearchInfoWnd({
				title: cJ.title,
				addr: cJ.address,
				tel: cJ.phoneNumber,
				url: cJ.url,
				poiType: cJ.type
			});
			var cI = this;
			T.addEventListener("close", function () {
				cI.localSearch.renderList.clearSelected()
			});
			T.addEventListener("open", function () {
				cI.localSearch._triggerCbk(u.CBK_INFO_HTML_SET, cJ, al.getInfoWindowDom(cI.map))
			});
			return T
		},
		_getBestViewport: function (cI) {
			var T = this.localSearch._opts.renderOptions;
			if (this.map) {
				var cM = cI.points;
				var cK = !T.autoViewport,
					cL = !T.selectFirstResult && T.autoViewport,
					cJ = this.map.getViewport(cM, {
						margins: [30, 30, 30, 30]
					});
				if (!cK) {
					this.map.setViewport(cJ, {
						enableAnimation: cL
					})
				}
			}
		}
	});
	
	function N(T) {
		a5.lang.Class.call(this);
		this.localSearch = T;
		this.panel = T._opts.renderOptions.panel;
		this.initialize()
	}
	a5.lang.inherits(N, a5.lang.Class, "RenderList");
	a5.extend(N.prototype, {
		initialize: function () {
			this.addEventListener("render", this._render)
		},
		_render: function () {
			if (!this.panel) {
				return
			}
			var cI = Y("div", {
				style: "font:12px " + b9.fontFamily + ";border:1px solid #999;"
			}),
				cL = Y("div", {
					style: "background:#fff"
				}),
				cN = Y("ol", {
					style: "list-style:none;padding:0;margin:0"
				}),
				cK = this.localSearch.getStatus(),
				T = null;
			if (cK == BMAP_STATUS_SUCCESS) {
				for (var cM = 0, cJ = this.localSearch._results.getCurrentNumPois(); cM < cJ; cM++) {
					var cP = this._createItem(cM);
					cN.appendChild(cP)
				}
			} else {
				var cO = "";
				switch (cK) {
				case BMAP_STATUS_UNKNOWN_LOCATION:
					cO = "\u62b1\u6b49\uff0c\u672a\u627e\u5230\u76f8\u5173\u5730\u70b9\u3002";
					break;
				case BMAP_STATUS_INVALID_KEY:
					cO = "\u62b1\u6b49\uff0c\u60a8\u6240\u63d0\u4f9b\u7684key\u65e0\u6548\u3002";
					break
				}
				var cP = Y("li", {
					style: "margin:2px 0;padding:0 5px 0 3px;overflow:hidden;line-height:17px"
				});
				cP.innerHTML = cO;
				cN.appendChild(cP)
			}
			cL.appendChild(cN);
			cI.appendChild(cL);
			T = this._createResultsControl();
			cI.appendChild(T);
			this.panel.appendChild(cI);
			this.localSearch._triggerCbk(u.CBK_RESULTS_HTML_SET, cI)
		},
		_createItem: function (cK) {
			var T = this.localSearch._results;
			if (!T || !T.getPoi(cK)) {
				return
			}
			var cI = T.getPoi(cK),
				cR = Y("li", {
					style: "margin:2px 0;padding:0 5px 0 3px;cursor:pointer;overflow:hidden;line-height:17px"
				});
			if (this.localSearch._curIndex > -1 && cK == this.localSearch._curIndex) {
				cR.style.backgroundColor = "#f0f0f0"
			}
			var cJ = cK == 0 ? cK + 2 + "px" : "-" + (cK * 20 - 2) + "px";
			if (this.localSearch._opts.pageCapacity > a1.DEFAULT_PAGE_CAPACITY) {
				cJ = "-218px"
			}
			var cQ = ["<span style='background:url(" + v + "bmap/red_labels.gif) 0 " + cJ + " no-repeat;padding-left:10px;margin-right:3px'>&nbsp;</span>"];
			var cP, cN;
			var cL = this.localSearch._results.keyword;
			var cO = new RegExp(cL, "ig");
			if (cI.title) {
				cP = cI.title.replace(cO, "<b>$&</b>")
			}
			cQ.push("<span style='color:#00c;text-decoration:underline'>" + cP + "</span>");
			if (cI.address) {
				cN = cI.address.replace(cO, "<b>$&</b>");
				cQ.push("<span style='color:#666;'> - " + cN + "</span>")
			}
			cR.innerHTML = cQ.join("");
			var cM = this;
			cR.onclick = function () {
				cM.localSearch.select(cK)
			};
			return cR
		},
		_createResultsControl: function () {
			var cI = this,
				cJ = Y("div", {
					style: "white-space:nowrap;text-align:right;background:#e5ecf9;margin-top:5px;padding:2px;overflow:hidden;zoom:1;"
				});
			var T = Y("div", {
				style: "float:left;margin-right:5px"
			});
			if (this.localSearch._results.getNumPages() > 1) {
				var cK = new az(T, function (cL) {
					cI.localSearch.gotoPage(cL - 1)
				}, {
					pageCount: cI.localSearch._results.getNumPages(),
					page: cI.localSearch._results.getPageIndex() + 1,
					update: false
				})
			}
			cJ.appendChild(T);
			return cJ
		},
		clearSelected: function () {
			if (this.panel) {
				if (typeof this.localSearch._curIndex == "number" && this.localSearch._curIndex != -1 && this.panel.getElementsByTagName("li")[this.localSearch._curIndex]) {
					this.panel.getElementsByTagName("li")[this.localSearch._curIndex].style.backgroundColor = ""
				}
			}
			this.localSearch._curIndex = -1
		},
		select: function (cI) {
			if (this.panel) {
				var T = this.localSearch._curIndex;
				if (typeof T == "number" && T != -1 && this.panel.getElementsByTagName("li")[T]) {
					this.panel.getElementsByTagName("li")[T].style.backgroundColor = ""
				}
				if (typeof cI == "number" && cI != -1 && this.panel.getElementsByTagName("li")[cI]) {
					this.panel.getElementsByTagName("li")[cI].style.backgroundColor = "#f0f0f0"
				}
			}
		}
	});
	
	
		
	// 设置命名空间
    var setClass = function ah(name, cls) {
        window.BMap[name] = cls;
    }
	
    setClass("Map", Map);
    setClass("Hotspot", Hotspot);
    setClass("MapType", MapType);
    setClass("Point", Point);
    setClass("Pixel", Pixel);
    setClass("Size", Size);
    setClass("Bounds", Bounds);
    setClass("TileLayer", TileLayer);
    setClass("Projection", Projection);
    setClass("MercatorProjection", MercatorProjection);
    setClass("PerspectiveProjection", PerspectiveProjection);
    setClass("Copyright", Copyright);
    setClass("Overlay", Overlay);
    setClass("Label", Label);
    setClass("Marker", Marker);
    setClass("Icon", Icon);
    setClass("Polyline", Polyline);
    setClass("Polygon", Polygon);
    setClass("InfoWindow", InfoWindow);
    setClass("Circle", Circle);
    setClass("Control", Control);
    setClass("NavigationControl", NavigationControl);
    setClass("OverviewMapControl", OverviewMapControl);
    setClass("CopyrightControl", CopyrightControl);
    setClass("ScaleControl", ScaleControl);
    setClass("MapTypeControl", MapTypeControl);
    setClass("TrafficLayer", TrafficLayer);
    setClass("ContextMenu", ContextMenu);
    setClass("MenuItem", MenuItem);
    setClass("LocalSearch", LocalSearch);
    setClass("TransitRoute", TransitRoute);
    setClass("DrivingRoute", DrivingRoute);
    setClass("WalkingRoute", WalkingRoute);
    setClass("Autocomplete", Autocomplete);
    setClass("Geocoder", Geocoder);
    setClass("LocalCity", LocalCity);
    setClass("Geolocation", Geolocation);
    setClass("BusLineSearch", BusLineSearch);
    setClass("Boundary", S);// not found
    window.BMap.apiLoad();
	
})();