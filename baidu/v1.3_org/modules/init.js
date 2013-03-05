window.BMAP_AUTHENTIC_KEY = "";
(function () {
    var b1, a7 = b1 = a7 || {
        version: "1.3.4"
    };
    a7.guid = "$BAIDU$";
    window[a7.guid] = window[a7.guid] || {};
    a7.object = a7.object || {};
    a7.extend = a7.object.extend = function (cL, T) {
        for (var cK in T) {
            if (T.hasOwnProperty(cK)) {
                cL[cK] = T[cK]
            }
        }
        return cL
    };
    a7.dom = a7.dom || {};
    a7.dom.g = function (T) {
        if ("string" == typeof T || T instanceof String) {
            return document.getElementById(T)
        } else {
            if (T && T.nodeName && (T.nodeType == 1 || T.nodeType == 9)) {
                return T
            }
        }
        return null
    };
    a7.g = a7.G = a7.dom.g;
    a7.dom.hide = function (T) {
        T = a7.dom.g(T);
        T.style.display = "none";
        return T
    };
    a7.hide = a7.dom.hide;
    a7.lang = a7.lang || {};
    a7.lang.isString = function (T) {
        return "[object String]" == Object.prototype.toString.call(T)
    };
    a7.isString = a7.lang.isString;
    a7.dom._g = function (T) {
        if (a7.lang.isString(T)) {
            return document.getElementById(T)
        }
        return T
    };
    a7._g = a7.dom._g;
    a7.dom.contains = function (T, cK) {
        var cL = a7.dom._g;
        T = cL(T);
        cK = cL(cK);
        return T.contains ? T != cK && T.contains(cK) : !! (T.compareDocumentPosition(cK) & 16)
    };
    a7.browser = a7.browser || {};
    if (/msie (\d+\.\d)/i.test(navigator.userAgent)) {
        a7.browser.ie = a7.ie = document.documentMode || +RegExp["\x241"]
    }
    a7.dom._NAME_ATTRS = (function () {
        var T = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            rowspan: "rowSpan",
            valign: "vAlign",
            usemap: "useMap",
            frameborder: "frameBorder"
        };
        if (a7.browser.ie < 8) {
            T["for"] = "htmlFor";
            T["class"] = "className"
        } else {
            T.htmlFor = "for";
            T.className = "class"
        }
        return T
    })();
    a7.dom.setAttr = function (cK, T, cL) {
        cK = a7.dom.g(cK);
        if ("style" == T) {
            cK.style.cssText = cL
        } else {
            T = a7.dom._NAME_ATTRS[T] || T;
            cK.setAttribute(T, cL)
        }
        return cK
    };
    a7.setAttr = a7.dom.setAttr;
    a7.dom.setAttrs = function (cL, T) {
        cL = a7.dom.g(cL);
        for (var cK in T) {
            a7.dom.setAttr(cL, cK, T[cK])
        }
        return cL
    };
    a7.setAttrs = a7.dom.setAttrs;
    a7.string = a7.string || {};
    (function () {
        var T = new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)", "g");
        a7.string.trim = function (cK) {
            return String(cK).replace(T, "")
        }
    })();
    a7.trim = a7.string.trim;
    a7.string.format = function (cL, T) {
        cL = String(cL);
        var cK = Array.prototype.slice.call(arguments, 1),
            cM = Object.prototype.toString;
        if (cK.length) {
            cK = cK.length == 1 ? (T !== null && (/\[object Array\]|\[object Object\]/.test(cM.call(T))) ? T : cK) : cK;
            return cL.replace(/#\{(.+?)\}/g, function (cN, cP) {
                var cO = cK[cP];
                if ("[object Function]" == cM.call(cO)) {
                    cO = cO(cP)
                }
                return ("undefined" == typeof cO ? "" : cO)
            })
        }
        return cL
    };
    a7.format = a7.string.format;
    a7.dom.removeClass = function (cO, cP) {
        cO = a7.dom.g(cO);
        var cM = cO.className.split(/\s+/),
            cQ = cP.split(/\s+/),
            cK, T = cQ.length,
            cL, cN = 0;
        for (; cN < T; ++cN) {
            for (cL = 0, cK = cM.length; cL < cK; ++cL) {
                if (cM[cL] == cQ[cN]) {
                    cM.splice(cL, 1);
                    break
                }
            }
        }
        cO.className = cM.join(" ");
        return cO
    };
    a7.removeClass = a7.dom.removeClass;
    a7.dom.insertHTML = function (cM, T, cL) {
        cM = a7.dom.g(cM);
        var cK, cN;
        if (cM.insertAdjacentHTML) {
            cM.insertAdjacentHTML(T, cL)
        } else {
            cK = cM.ownerDocument.createRange();
            T = T.toUpperCase();
            if (T == "AFTERBEGIN" || T == "BEFOREEND") {
                cK.selectNodeContents(cM);
                cK.collapse(T == "AFTERBEGIN")
            } else {
                cN = T == "BEFOREBEGIN";
                cK[cN ? "setStartBefore" : "setEndAfter"](cM);
                cK.collapse(cN)
            }
            cK.insertNode(cK.createContextualFragment(cL))
        }
        return cM
    };
    a7.insertHTML = a7.dom.insertHTML;
    a7.dom.show = function (T) {
        T = a7.dom.g(T);
        T.style.display = "";
        return T
    };
    a7.show = a7.dom.show;
    a7.dom.getDocument = function (T) {
        T = a7.dom.g(T);
        return T.nodeType == 9 ? T : T.ownerDocument || T.document
    };
    a7.dom.addClass = function (cO, cP) {
        cO = a7.dom.g(cO);
        var cK = cP.split(/\s+/),
            T = cO.className,
            cN = " " + T + " ",
            cM = 0,
            cL = cK.length;
        for (; cM < cL; cM++) {
            if (cN.indexOf(" " + cK[cM] + " ") < 0) {
                T += " " + cK[cM]
            }
        }
        cO.className = T;
        return cO
    };
    a7.addClass = a7.dom.addClass;
    a7.dom._styleFixer = a7.dom._styleFixer || {};
    a7.dom._styleFilter = a7.dom._styleFilter || [];
    a7.dom._styleFilter.filter = function (cK, cN, cO) {
        for (var T = 0, cM = a7.dom._styleFilter, cL; cL = cM[T]; T++) {
            if (cL = cL[cO]) {
                cN = cL(cK, cN)
            }
        }
        return cN
    };
    a7.string.toCamelCase = function (T) {
        if (T.indexOf("-") < 0 && T.indexOf("_") < 0) {
            return T
        }
        return T.replace(/[-_][^-_]/g, function (cK) {
            return cK.charAt(1).toUpperCase()
        })
    };
    a7.dom.getStyle = function (cL, cK) {
        var cO = a7.dom;
        cL = cO.g(cL);
        cK = a7.string.toCamelCase(cK);
        var cN = cL.style[cK];
        if (!cN) {
            var T = cO._styleFixer[cK],
                cM = cL.currentStyle || (a7.browser.ie ? cL.style : getComputedStyle(cL, null));
            cN = T && T.get ? T.get(cL, cM) : cM[T || cK]
        }
        if (T = cO._styleFilter) {
            cN = T.filter(cK, cN, "get")
        }
        return cN
    };
    a7.getStyle = a7.dom.getStyle;
    if (/opera\/(\d+\.\d)/i.test(navigator.userAgent)) {
        a7.browser.opera = +RegExp["\x241"]
    }
    a7.browser.isWebkit = /webkit/i.test(navigator.userAgent);
    a7.browser.isGecko = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
    a7.browser.isStrict = document.compatMode == "CSS1Compat";
    a7.dom.getPosition = function (T) {
        T = a7.dom.g(T);
        var cS = a7.dom.getDocument(T),
            cM = a7.browser,
            cP = a7.dom.getStyle,
            cL = cM.isGecko > 0 && cS.getBoxObjectFor && cP(T, "position") == "absolute" && (T.style.top === "" || T.style.left === ""),
            cQ = {
                left: 0,
                top: 0
            },
            cO = (cM.ie && !cM.isStrict) ? cS.body : cS.documentElement,
            cT, cK;
        if (T == cO) {
            return cQ
        }
        if (T.getBoundingClientRect) {
            cK = T.getBoundingClientRect();
            cQ.left = Math.floor(cK.left) + Math.max(cS.documentElement.scrollLeft, cS.body.scrollLeft);
            cQ.top = Math.floor(cK.top) + Math.max(cS.documentElement.scrollTop, cS.body.scrollTop);
            cQ.left -= cS.documentElement.clientLeft;
            cQ.top -= cS.documentElement.clientTop;
            var cR = cS.body,
                cU = parseInt(cP(cR, "borderLeftWidth")),
                cN = parseInt(cP(cR, "borderTopWidth"));
            if (cM.ie && !cM.isStrict) {
                cQ.left -= isNaN(cU) ? 2 : cU;
                cQ.top -= isNaN(cN) ? 2 : cN
            }
        } else {
            cT = T;
            do {
                cQ.left += cT.offsetLeft;
                cQ.top += cT.offsetTop;
                if (cM.isWebkit > 0 && cP(cT, "position") == "fixed") {
                    cQ.left += cS.body.scrollLeft;
                    cQ.top += cS.body.scrollTop;
                    break
                }
                cT = cT.offsetParent
            } while (cT && cT != T);
            if (cM.opera > 0 || (cM.isWebkit > 0 && cP(T, "position") == "absolute")) {
                cQ.top -= cS.body.offsetTop
            }
            cT = T.offsetParent;
            while (cT && cT != cS.body) {
                cQ.left -= cT.scrollLeft;
                if (!cM.opera || cT.tagName != "TR") {
                    cQ.top -= cT.scrollTop
                }
                cT = cT.offsetParent
            }
        }
        return cQ
    };
    if (/firefox\/(\d+\.\d)/i.test(navigator.userAgent)) {
        a7.browser.firefox = +RegExp["\x241"]
    }(function () {
        var T = navigator.userAgent;
        if (/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(T) && !/chrome/i.test(T)) {
            a7.browser.safari = +(RegExp["\x241"] || RegExp["\x242"])
        }
    })();
    if (/chrome\/(\d+\.\d)/i.test(navigator.userAgent)) {
        a7.browser.chrome = +RegExp["\x241"]
    }
    a7.array = a7.array || {};
    a7.array.each = function (cO, cM) {
        var cL, cN, cK, T = cO.length;
        if ("function" == typeof cM) {
            for (cK = 0; cK < T; cK++) {
                cN = cO[cK];
                cL = cM.call(cO, cN, cK);
                if (cL === false) {
                    break
                }
            }
        }
        return cO
    };
    a7.each = a7.array.each;
    a7.lang.guid = function () {
        return "TANGRAM__" + (window[a7.guid]._counter++).toString(36)
    };
    window[a7.guid]._counter = window[a7.guid]._counter || 1;
    window[a7.guid]._instances = window[a7.guid]._instances || {};
    a7.lang.isFunction = function (T) {
        return "[object Function]" == Object.prototype.toString.call(T)
    };
    a7.lang.Class = function (T) {
        this.guid = T || a7.lang.guid();
        window[a7.guid]._instances[this.guid] = this
    };
    window[a7.guid]._instances = window[a7.guid]._instances || {};
    a7.lang.Class.prototype.dispose = function () {
        delete window[a7.guid]._instances[this.guid];
        for (var T in this) {
            if (!a7.lang.isFunction(this[T])) {
                delete this[T]
            }
        }
        this.disposed = true
    };
    a7.lang.Class.prototype.toString = function () {
        return "[object " + (this._className || "Object") + "]"
    };
    a7.lang.Event = function (T, cK) {
        this.type = T;
        this.returnValue = true;
        this.target = cK || null;
        this.currentTarget = null
    };
    a7.lang.Class.prototype.addEventListener = function (cM, cL, cK) {
        if (!a7.lang.isFunction(cL)) {
            return
        }!this.__listeners && (this.__listeners = {});
        var T = this.__listeners,
            cN;
        if (typeof cK == "string" && cK) {
            if (/[^\w\-]/.test(cK)) {
                throw ("nonstandard key:" + cK)
            } else {
                cL.hashCode = cK;
                cN = cK
            }
        }
        cM.indexOf("on") != 0 && (cM = "on" + cM);
        typeof T[cM] != "object" && (T[cM] = {});
        cN = cN || a7.lang.guid();
        cL.hashCode = cN;
        T[cM][cN] = cL
    };
    a7.lang.Class.prototype.removeEventListener = function (cL, cK) {
        if (a7.lang.isFunction(cK)) {
            cK = cK.hashCode
        } else {
            if (!a7.lang.isString(cK)) {
                return
            }
        }!this.__listeners && (this.__listeners = {});
        cL.indexOf("on") != 0 && (cL = "on" + cL);
        var T = this.__listeners;
        if (!T[cL]) {
            return
        }
        T[cL][cK] && delete T[cL][cK]
    };
    a7.lang.Class.prototype.dispatchEvent = function (cM, T) {
        if (a7.lang.isString(cM)) {
            cM = new a7.lang.Event(cM)
        }!this.__listeners && (this.__listeners = {});
        T = T || {};
        for (var cL in T) {
            cM[cL] = T[cL]
        }
        var cL, cK = this.__listeners,
            cN = cM.type;
        cM.target = cM.target || this;
        cM.currentTarget = this;
        cN.indexOf("on") != 0 && (cN = "on" + cN);
        a7.lang.isFunction(this[cN]) && this[cN].apply(this, arguments);
        if (typeof cK[cN] == "object") {
            for (cL in cK[cN]) {
                cK[cN][cL].apply(this, arguments)
            }
        }
        return cM.returnValue
    };
    a7.lang.inherits = function (cP, cN, cM) {
        var cL, cO, T = cP.prototype,
            cK = new Function();
        cK.prototype = cN.prototype;
        cO = cP.prototype = new cK();
        for (cL in T) {
            cO[cL] = T[cL]
        }
        cP.prototype.constructor = cP;
        cP.superClass = cN.prototype;
        if ("string" == typeof cM) {
            cO._className = cM
        }
    };
    a7.inherits = a7.lang.inherits;
    a7.lang.instance = function (T) {
        return window[a7.guid]._instances[T] || null
    };
    a7.platform = a7.platform || {};
    a7.platform.isMacintosh = /macintosh/i.test(navigator.userAgent);
    a7.platform.isWindows = /windows/i.test(navigator.userAgent);
    a7.platform.isX11 = /x11/i.test(navigator.userAgent);
    a7.platform.isAndroid = /android/i.test(navigator.userAgent);
    a7.platform.isIpad = /ipad/i.test(navigator.userAgent);
    a7.platform.isIphone = /iphone/i.test(navigator.userAgent);
    a7.lang.Event.prototype.inherit = function (cL) {
        var cK = this;
        this.domEvent = cL = window.event || cL;
        cK.clientX = cL.clientX || cL.pageX;
        cK.clientY = cL.clientY || cL.pageY;
        cK.offsetX = cL.offsetX || cL.layerX;
        cK.offsetY = cL.offsetY || cL.layerY;
        cK.screenX = cL.screenX;
        cK.screenY = cL.screenY;
        cK.ctrlKey = cL.ctrlKey || cL.metaKey;
        cK.shiftKey = cL.shiftKey;
        cK.altKey = cL.altKey;
        if (cL.touches) {
            cK.touches = [];
            for (var T = 0; T < cL.touches.length; T++) {
                cK.touches.push({
                    clientX: cL.touches[T].clientX,
                    clientY: cL.touches[T].clientY,
                    screenX: cL.touches[T].screenX,
                    screenY: cL.touches[T].screenY,
                    pageX: cL.touches[T].pageX,
                    pageY: cL.touches[T].pageY,
                    target: cL.touches[T].target,
                    identifier: cL.touches[T].identifier
                })
            }
        }
        if (cL.changedTouches) {
            cK.changedTouches = [];
            for (var T = 0; T < cL.changedTouches.length; T++) {
                cK.changedTouches.push({
                    clientX: cL.changedTouches[T].clientX,
                    clientY: cL.changedTouches[T].clientY,
                    screenX: cL.changedTouches[T].screenX,
                    screenY: cL.changedTouches[T].screenY,
                    pageX: cL.changedTouches[T].pageX,
                    pageY: cL.changedTouches[T].pageY,
                    target: cL.changedTouches[T].target,
                    identifier: cL.changedTouches[T].identifier
                })
            }
        }
        if (cL.targetTouches) {
            cK.targetTouches = [];
            for (var T = 0; T < cL.targetTouches.length; T++) {
                cK.targetTouches.push({
                    clientX: cL.targetTouches[T].clientX,
                    clientY: cL.targetTouches[T].clientY,
                    screenX: cL.targetTouches[T].screenX,
                    screenY: cL.targetTouches[T].screenY,
                    pageX: cL.targetTouches[T].pageX,
                    pageY: cL.targetTouches[T].pageY,
                    target: cL.targetTouches[T].target,
                    identifier: cL.targetTouches[T].identifier
                })
            }
        }
        cK.rotation = cL.rotation;
        cK.scale = cL.scale;
        return cK
    };
    a7.lang.decontrol = function (cK) {
        var T = window[a7.guid];
        T._instances && (delete T._instances[cK])
    };
    a7.event = {};
    a7.on = a7.event.on = function (cL, cK, T) {
        if (!(cL = a7.g(cL))) {
            return cL
        }
        cK = cK.replace(/^on/, "");
        if (cL.addEventListener) {
            cL.addEventListener(cK, T, false)
        } else {
            if (cL.attachEvent) {
                cL.attachEvent("on" + cK, T)
            }
        }
        return cL
    };
    a7.un = a7.event.un = function (cL, cK, T) {
        if (!(cL = a7.g(cL))) {
            return cL
        }
        cK = cK.replace(/^on/, "");
        if (cL.removeEventListener) {
            cL.removeEventListener(cK, T, false)
        } else {
            if (cL.detachEvent) {
                cL.detachEvent("on" + cK, T)
            }
        }
        return cL
    };
    a7.dom.hasClass = function (cL, cK) {
        if (!cL || !cL.className || typeof cL.className != "string") {
            return false
        }
        var T = -1;
        try {
            T = cL.className == cK || cL.className.search(new RegExp("(\\s|^)" + cK + "(\\s|$)"))
        } catch (cM) {
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
    var bI = window.BMAP_AUTHENTIC_KEY;
    window.BMAP_AUTHENTIC_KEY = null;
	// Map
    function by(cM, cO) {
        cM = a7.g(cM);
        if (!cM) {
            return
        }
        var cN = this;
        a7.lang.Class.call(cN);
        cN.config = {
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
            defaultCursor: cb.defaultCursor,
            draggingCursor: cb.draggingCursor,
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
        a7.extend(cN.config, cO || {});
        if (cN.highResolutionEnabled()) {
            var cQ = document.querySelector("meta[name=viewport]");
            cQ.content = "initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5, user-scalable=no, target-densitydpi=high-dpi"
        }
        cN.container = cM;
        cN._setStyle(cM);
        cM.unselectable = "on";
        cM.innerHTML = "";
        cM.appendChild(cN.render());
        var cK = cN.getSize();
        cN.width = cK.width;
        cN.height = cK.height;
        cN.offsetX = 0;
        cN.offsetY = 0;
        cN.platform = cM.firstChild;
        cN.maskLayer = cN.platform.firstChild;
        cN.maskLayer.style.width = cN.width + "px";
        cN.maskLayer.style.height = cN.height + "px";
        cN._panes = {};
        cN.centerPoint = new cc(0, 0);
        cN.mercatorCenter = new cc(0, 0);
        cN.zoomLevel = 1;
        cN.lastLevel = 0;
        cN.defaultZoomLevel = null;
        cN.defaultCenter = null;
        cN.currentCity = "";
        cN.cityCode = "";
        cN._hotspots = {};
        cN.currentOperation = 0;
        cO = cO || {};
        var cP = cN.mapType = cN.config.mapType;
        cN.projection = cP.getProjection();
        if (cP === BMAP_PERSPECTIVE_MAP) {
            _addStat(5002)
        }
        if (cP === BMAP_SATELLITE_MAP || cP === BMAP_HYBRID_MAP) {
            _addStat(5003)
        }
        var T = cN.config;
        T.userMinZoom = cO.minZoom;
        T.userMaxZoom = cO.maxZoom;
        cN._checkZoom();
        cN.temp = {
            operating: false,
            arrow: 0,
            lastDomMoveTime: 0,
            lastLoadTileTime: 0,
            lastMovingTime: 0,
            canKeyboard: false,
            registerIndex: -1,
            curSpots: []
        };
        cN.platform.style.cursor = cN.config.defaultCursor;
        for (var cL = 0; cL < BMap._register.length; cL++) {
            BMap._register[cL](cN)
        }
        cN.temp.registerIndex = cL;
        cN._bind();
        cz.load("map", function () {
            cN._draw()
        });
        if (bN()) {
            cz.load("oppc", function () {
                cN._asyncRegister()
            })
        }
        if (az()) {
            cz.load("opmb", function () {
                cN._asyncRegister()
            })
        }
        cM = null
    }
    a7.lang.inherits(by, a7.lang.Class, "Map");
    a7.extend(by.prototype, {
        render: function () {
            var T = Z("div");
            var cM = T.style;
            cM.overflow = "visible";
            cM.position = "absolute";
            cM.zIndex = "0";
            cM.top = cM.left = "0px";
            var cK = Z("div", {
                "class": "BMap_mask"
            });
            var cL = cK.style;
            cL.position = "absolute";
            cL.top = cL.left = "0px";
            cL.zIndex = "9";
            cL.overflow = "hidden";
            cL.WebkitUserSelect = "none";
            T.appendChild(cK);
            return T
        },
        _setStyle: function (cK) {
            var T = cK.style;
            T.overflow = "hidden";
            if (aI(cK).position != "absolute") {
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
                var cK = T.getSize();
                if (T.width != cK.width || T.height != cK.height) {
                    var cM = new aG(T.width, T.height);
                    var cN = new bf("onbeforeresize");
                    cN.size = cM;
                    T.dispatchEvent(cN);
                    T._updateCenterPoint((cK.width - T.width) / 2, (cK.height - T.height) / 2);
                    T.maskLayer.style.width = (T.width = cK.width) + "px";
                    T.maskLayer.style.height = (T.height = cK.height) + "px";
                    var cL = new bf("onresize");
                    cL.size = cK;
                    T.dispatchEvent(cL)
                }
            };
            if (T.config.enableAutoResize) {
                T.temp.autoResizeTimer = setInterval(T._watchSize, 80)
            }
        },
        _updateCenterPoint: function (cM, cK, cQ, cP) {
            var cN = this.getMapType().getZoomUnits(this.getZoom());
            var cR = this.projection;
            var cO = true;
            if (cQ && cc.isInRange(cQ)) {
                this.centerPoint = new cc(cQ.lng, cQ.lat);
                cO = false
            }
            var cL = (cQ && cP) ? cR.lngLatToMercator(cQ, this.currentCity) : this.mercatorCenter;
            if (cL) {
                this.mercatorCenter = new cc(cL.lng + cM * cN, cL.lat - cK * cN);
                var T = cR.mercatorToLngLat(this.mercatorCenter, this.currentCity);
                if (T && cO) {
                    this.centerPoint = T
                }
            }
        },
        zoomTo: function (cM, cK) {
            if (!aJ(cM)) {
                return
            }
            cM = this._getProperZoom(cM).zoom;
            if (cM == this.zoomLevel) {
                return
            }
            this.lastLevel = this.zoomLevel;
            this.zoomLevel = cM;
            var cL;
            if (cK) {
                cL = cK
            } else {
                if (this.getInfoWindow()) {
                    cL = this.getInfoWindow().getPosition()
                }
            }
            if (cL) {
                var T = this.pointToPixel(cL, this.lastLevel);
                this._updateCenterPoint(this.width / 2 - T.x, this.height / 2 - T.y, this.pixelToPoint(T, this.lastLevel), true)
            }
            this.dispatchEvent(new bf("onzoomstart"));
            this.dispatchEvent(new bf("onzoomstartcode"))
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
        panTo: function (T, cK) {
            if (!(T instanceof cc)) {
                return
            }
            this.mercatorCenter = this.projection.lngLatToMercator(T, this.currentCity);
            if (cc.isInRange(T)) {
                this.centerPoint = new cc(T.lng, T.lat)
            } else {
                this.centerPoint = this.projection.mercatorToLngLat(this.mercatorCenter, this.currentCity)
            }
        },
        panBy: function (cK, T) {
            cK = Math.round(cK) || 0;
            T = Math.round(T) || 0;
            this._updateCenterPoint(-cK, -T)
        },
        addControl: function (T) {
            if (T && H(T._i)) {
                T._i(this);
                this.dispatchEvent(new bf("onaddcontrol", T))
            }
        },
        removeControl: function (T) {
            if (T && H(T.remove)) {
                T.remove();
                this.dispatchEvent(new bf("onremovecontrol", T))
            }
        },
        addContextMenu: function (T) {
            if (T && H(T.initialize)) {
                T.initialize(this);
                this.dispatchEvent(new bf("onaddcontextmenu", T))
            }
        },
        removeContextMenu: function (T) {
            if (T && H(T.remove)) {
                this.dispatchEvent(new bf("onremovecontextmenu", T));
                T.remove()
            }
        },
		// 添加覆盖物到地图
        addOverlay: function (T) {
			console.log('addOverlay:'+new Date());
            if (T && H(T._i)) {// 如果覆盖物存在，且已加载扩展方法
                T._i(this);// 调用方法，传入地图实例
                this.dispatchEvent(new bf("onaddoverlay", T))
            }
        },
        removeOverlay: function (T) {
            if (T && H(T.remove)) {
                T.remove();
                this.dispatchEvent(new bf("onremoveoverlay", T))
            }
        },
        clearOverlays: function () {
            this.dispatchEvent(new bf("onclearoverlays"))
        },
        addTileLayer: function (T) {
            if (T) {
                this.dispatchEvent(new bf("onaddtilelayer", T))
            }
        },
        removeTileLayer: function (T) {
            if (T) {
                this.dispatchEvent(new bf("onremovetilelayer", T))
            }
        },
        setMapType: function (cK) {
            if (this.mapType === cK) {
                return
            }
            var cL = new bf("onsetmaptype");
            var T = this.mapType;
            cL.preMapType = T;
            this.mapType = this.config.mapType = cK;
            this.projection = this.mapType.getProjection();
            this._updateCenterPoint(0, 0, this.getCenter(), true);
            this._checkZoom();
            var cM = this._getProperZoom(this.getZoom()).zoom;
            this.zoomTo(cM);
            this.dispatchEvent(cL);
            var cL = new bf("onmaptypechange");
            cL.zoomLevel = cM;
            cL.mapType = cK;
            this.dispatchEvent(cL);
            if (cK === BMAP_SATELLITE_MAP || cK === BMAP_HYBRID_MAP) {
                _addStat(5003)
            }
        },
        setCenter: function (T) {
            var cL = this;
            if (T instanceof cc) {
                cL.panTo(T, {
                    noAnimation: true
                })
            } else {
                if (b2(T)) {
                    var cK = this._getLocal();
                    cK.setSearchCompleteCallback(function (cM) {
                        if (cK.getStatus() == 0 && cK._json.result.type == 2) {
                            cL.setCenter(cM.getPoi(0).point);
                            if (BMAP_PERSPECTIVE_MAP.getCityName(T)) {
                                cL.setCurrentCity(T)
                            }
                        }
                    });
                    cK.search(T)
                }
            }
        },
        centerAndZoom: function (T, cL) {
            var cK = this;
            if (b2(T)) {
                var cO = cK._getLocal();
                cO.setSearchCompleteCallback(function (cP) {
                    if (cO.getStatus() == 0 && cO._json.result.type == 2) {
                        var cR = cP.getPoi(0).point;
                        var cQ = cL || R.getBestLevel(cO._json.content.level, cK);
                        cK.centerAndZoom(cR, cQ);
                        if (BMAP_PERSPECTIVE_MAP.getCityName(T)) {
                            cK.setCurrentCity(T)
                        }
                    }
                });
                cO.search(T);
                return
            }
            if (!(T instanceof cc) || !cL) {
                return
            }
            cL = cK._getProperZoom(cL).zoom;
            cK.lastLevel = cK.zoomLevel || cL;
            cK.zoomLevel = cL;
            cK.centerPoint = new cc(T.lng, T.lat);
            cK.mercatorCenter = cK.projection.lngLatToMercator(cK.centerPoint, cK.currentCity);
            cK.defaultZoomLevel = cK.defaultZoomLevel || cK.zoomLevel;
            cK.defaultCenter = cK.defaultCenter || cK.centerPoint;
            var cN = new bf("onload");
            var cM = new bf("onloadcode");
            cN.point = new cc(T.lng, T.lat);
            cN.pixel = cK.pointToPixel(cK.centerPoint, cK.zoomLevel);
            cN.zoom = cL;
            if (!cK.loaded) {
                cK.loaded = true;
                cK.dispatchEvent(cN)
            }
            cK.dispatchEvent(cM);
            cK.dispatchEvent(new bf("onmoveend"));
            if (cK.lastLevel != cK.zoomLevel) {
                cK.dispatchEvent(new bf("onzoomend"))
            }
        },
        _getLocal: function () {
            if (!this.temp.local) {
                this.temp.local = new a3(1)
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
            return new aG(this.container.clientWidth, this.container.clientHeight)
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
        _getProperZoom: function (cL) {
            var cK = this.config.minZoom,
                T = this.config.maxZoom,
                cM = false;
            if (cL < cK) {
                cM = true;
                cL = cK
            }
            if (cL > T) {
                cM = true;
                cL = T
            }
            return {
                zoom: cL,
                exceeded: cM
            }
        },
        getContainer: function () {
            return this.container
        },
        pointToPixel: function (T, cK) {
            cK = cK || this.getZoom();
            return this.projection.pointToPixel(T, cK, this.mercatorCenter, this.getSize(), this.currentCity)
        },
        pixelToPoint: function (T, cK) {
            cK = cK || this.getZoom();
            return this.projection.pixelToPoint(T, cK, this.mercatorCenter, this.getSize(), this.currentCity)
        },
        pointToOverlayPixel: function (T, cL) {
            if (!T) {
                return
            }
            var cM = new cc(T.lng, T.lat);
            var cK = this.pointToPixel(cM, cL);
            cK.x -= this.offsetX;
            cK.y -= this.offsetY;
            return cK
        },
        overlayPixelToPoint: function (T, cL) {
            if (!T) {
                return
            }
            var cK = new bt(T.x, T.y);
            cK.x += this.offsetX;
            cK.y += this.offsetY;
            return this.pixelToPoint(cK, cL)
        },
        getBounds: function () {
            if (!this.isLoaded()) {
                return new bM()
            }
            var cK = arguments[0] || {},
                cM = cK.margins || [0, 0, 0, 0],
                T = cK.zoom || null,
                cN = this.pixelToPoint({
                    x: cM[3],
                    y: this.height - cM[2]
                }, T),
                cL = this.pixelToPoint({
                    x: this.width - cM[1],
                    y: cM[0]
                }, T);
            return new bM(cN, cL)
        },
        isLoaded: function () {
            return !!this.loaded
        },
        _getBestLevel: function (cK, cL) {
            var cO = this.getMapType();
            var cQ = cL.margins || [10, 10, 10, 10],
                cN = cL.zoomFactor || 0,
                cR = cQ[1] + cQ[3],
                cP = cQ[0] + cQ[2],
                T = cO.getMinZoom(),
                cT = cO.getMaxZoom();
            for (var cM = cT; cM >= T; cM--) {
                var cS = this.getMapType().getZoomUnits(cM);
                if (cK.toSpan().lng / cS < this.width - cR && cK.toSpan().lat / cS < this.height - cP) {
                    break
                }
            }
            cM += cN;
            if (cM < T) {
                cM = T
            }
            if (cM > cT) {
                cM = cT
            }
            return cM
        },
        getViewport: function (cS, cK) {
            var cW = {
                center: this.getCenter(),
                zoom: this.getZoom()
            };
            if (!cS || !cS instanceof bM && cS.length == 0 || cS instanceof bM && cS.isEmpty()) {
                return cW
            }
            var cU = [];
            if (cS instanceof bM) {
                cU.push(cS.getNorthEast());
                cU.push(cS.getSouthWest())
            } else {
                cU = cS.slice(0)
            }
            cK = cK || {};
            var cO = [];
            for (var cP = 0, cN = cU.length; cP < cN; cP++) {
                cO.push(this.projection.lngLatToMercator(cU[cP], this.currentCity))
            }
            var cL = new bM();
            for (var cP = cO.length - 1; cP >= 0; cP--) {
                cL.extend(cO[cP])
            }
            if (cL.isEmpty()) {
                return cW
            }
            var T = cL.getCenter();
            var cV = this._getBestLevel(cL, cK);
            if (cK.margins) {
                var cR = cK.margins,
                    cQ = (cR[1] - cR[3]) / 2,
                    cT = (cR[0] - cR[2]) / 2,
                    cM = this.getMapType().getZoomUnits(cV);
                T.lng = T.lng + cM * cQ;
                T.lat = T.lat + cM * cT
            }
            T = this.projection.mercatorToLngLat(T, this.currentCity);
            return {
                center: T,
                zoom: cV
            }
        },
        setViewport: function (cK, cN) {
            var T;
            if (cK && cK.center) {
                T = cK
            } else {
                T = this.getViewport(cK, cN)
            }
            cN = cN || {};
            var cL = cN.delay || 200;
            if (T.zoom == this.zoomLevel && cN.enableAnimation != false) {
                var cM = this;
                setTimeout(function () {
                    cM.panTo(T.center, {
                        duration: 210
                    })
                }, cL)
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
        getDistance: function (cL, T) {
            if (!cL || !T) {
                return
            }
            var cK = 0;
            cK = a9.getDistanceByLL(cL, T);
            return cK
        },
        getOverlays: function () {
            var cM = [],
                cN = this._overlays,
                cL = this._customOverlays;
            if (cN) {
                for (var cK in cN) {
                    if (cN[cK] instanceof X) {
                        cM.push(cN[cK])
                    }
                }
            }
            if (cL) {
                for (var cK = 0, T = cL.length; cK < T; cK++) {
                    cM.push(cL[cK])
                }
            }
            return cM
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
            if (a7.browser.firefox && T.indexOf("url") == 0) {
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
            if (a7.browser.firefox && T.indexOf("url") == 0) {
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
        addHotspot: function (cK) {
            if (cK instanceof cl) {
                this._hotspots[cK.guid] = cK;
                cK.initialize(this)
            }
            var T = this;
            cz.load("hotspot", function () {
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
            var cK = this.mapType.getMinZoom();
            var cL = this.mapType.getMaxZoom();
            var T = this.config;
            T.minZoom = T.userMinZoom || cK;
            T.maxZoom = T.userMaxZoom || cL;
            if (T.minZoom < cK) {
                T.minZoom = cK
            }
            if (T.maxZoom > cL) {
                T.maxZoom = cL
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
            var cK = new bf("onzoomspanchange");
            cK.minZoom = T.minZoom;
            cK.maxZoom = T.maxZoom;
            this.dispatchEvent(cK)
        }
    });
    window.BMAP_API_VERSION = "1.3";
    window.BMAP_COORD_LNGLAT = 0;
    window.BMAP_COORD_MERCATOR = 1;
    window.BMAP_SYS_DRAWER = 0;
    window.BMAP_SVG_DRAWER = 1;
    window.BMAP_VML_DRAWER = 2;
    window.BMAP_CANVAS_DRAWER = 3;
    window._addStat = function (cO, cN) {
        if (!cO) {
            return
        }
        cN = cN || {};
        var cM = "";
        for (var cK in cN) {
            cM = cM + "&" + cK + "=" + encodeURIComponent(cN[cK])
        }
        var cP = function (cQ) {
            if (!cQ) {
                return
            }
            _addStat._sending = true;
            setTimeout(function () {
                _addStat._img.src = cb.imgPath + "blank.gif?" + cQ.src
            }, 50)
        };
        var T = function () {
            var cQ = _addStat._reqQueue.shift();
            if (cQ) {
                cP(cQ)
            }
        };
        var cL = (Math.random() * 100000000).toFixed(0);
        if (_addStat._sending) {
            _addStat._reqQueue.push({
                src: "t=" + cL + "&code=" + cO + cM
            })
        } else {
            cP({
                src: "t=" + cL + "&code=" + cO + cM
            })
        }
        if (!_addStat._binded) {
            a7.on(_addStat._img, "load", function () {
                _addStat._sending = false;
                T()
            });
            a7.on(_addStat._img, "error", function () {
                _addStat._sending = false;
                T()
            });
            _addStat._binded = true
        }
    };
    window._addStat._reqQueue = [];
    window._addStat._img = new Image();
    _addStat(5000, {
        v: BMap.version
    });

    function g(cM) {
        var T = {
            duration: 1000,
            fps: 30,
            delay: 0,
            transition: av.linear,
            onStop: function () {}
        };
        this._anis = [];
        if (cM) {
            for (var cK in cM) {
                T[cK] = cM[cK]
            }
        }
        this._opts = T;
        if (aJ(T.delay)) {
            var cL = this;
            setTimeout(function () {
                cL.start()
            }, T.delay)
        } else {
            if (T.delay != g.INFINITE) {
                this.start()
            }
        }
    }
    g.INFINITE = "INFINITE";
    g.prototype.start = function () {
        this._beginTime = aD();
        this._endTime = this._beginTime + this._opts.duration;
        this._launch()
    };
    g.prototype.add = function (T) {
        this._anis.push(T)
    };
    g.prototype._launch = function () {
        var cL = this;
        var T = aD();
        if (T >= cL._endTime) {
            if (H(cL._opts.render)) {
                cL._opts.render(cL._opts.transition(1))
            }
            if (H(cL._opts.finish)) {
                cL._opts.finish()
            }
            if (cL._anis.length > 0) {
                var cK = cL._anis[0];
                cK._anis = [].concat(cL._anis.slice(1));
                cK.start()
            }
            return
        }
        cL.schedule = cL._opts.transition((T - cL._beginTime) / cL._opts.duration);
        if (H(cL._opts.render)) {
            cL._opts.render(cL.schedule)
        }
        if (!cL.terminative) {
            cL._timer = setTimeout(function () {
                cL._launch()
            }, 1000 / cL._opts.fps)
        }
    };
    g.prototype.stop = function (cK) {
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
        if (cK) {
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
    var av = {
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
    av["ease-in"] = av.easeInQuad;
    av["ease-out"] = av.easeOutQuad;
    var l = !! (window.BMAP_PROTOCOL == "https");
    var w = l ? "https://sapi.map.baidu.com/" : "http://api.map.baidu.com/";
    var cb = {
        imgPath: w + "images/",
        cityNames: {
            "\u5317\u4eac": "bj",
            "\u4e0a\u6d77": "sh",
            "\u6df1\u5733": "sz",
            "\u5e7f\u5dde": "gz"
        },
        fontFamily: "arial,sans-serif"
    };
    if (a7.browser.firefox) {
        a7.extend(cb, {
            distCursor: "url(" + cb.imgPath + "ruler.cur),crosshair",
            defaultCursor: "-moz-grab",
            draggingCursor: "-moz-grabbing"
        });
        if (a7.platform.isWindows) {
            cb.fontFamily = "arial,simsun,sans-serif"
        }
    } else {
        if (a7.browser.chrome || a7.browser.safari) {
            a7.extend(cb, {
                distCursor: "url(" + cb.imgPath + "ruler.cur) 2 6,crosshair",
                defaultCursor: "url(" + cb.imgPath + "openhand.cur) 8 8,default",
                draggingCursor: "url(" + cb.imgPath + "closedhand.cur) 8 8,move"
            })
        } else {
            a7.extend(cb, {
                distCursor: "url(" + cb.imgPath + "ruler.cur),crosshair",
                defaultCursor: "url(" + cb.imgPath + "openhand.cur),default",
                draggingCursor: "url(" + cb.imgPath + "closedhand.cur),move"
            })
        }
    }
    function au(cL, cK, T) {
        this.id = cL;
        this.bounds = cK;
        this.content = T
    }
    var bm = {
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

    function bH(cL, T) {
        var cK = cL.style;
        cK.left = T[0] + "px";
        cK.top = T[1] + "px"
    }
    function cv(T) {
        if (a7.browser.ie > 0) {
            T.unselectable = "on"
        } else {
            T.style.MozUserSelect = "none"
        }
    }
    function x(T) {
        return T && T.parentNode && T.parentNode.nodeType != 11
    }
    function ar(cK, T) {
        a7.dom.insertHTML(cK, "beforeEnd", T);
        return cK.lastChild
    }
    function bX(T) {
        var cK = {
            left: 0,
            top: 0
        };
        while (T && T.offsetParent) {
            cK.left += T.offsetLeft;
            cK.top += T.offsetTop;
            T = T.offsetParent
        }
        return cK
    }
    function aO(T) {
        var T = window.event || T;
        T.stopPropagation ? T.stopPropagation() : T.cancelBubble = true
    }
    function cB(T) {
        var T = window.event || T;
        T.preventDefault ? T.preventDefault() : T.returnValue = false;
        return false
    }
    function cn(T) {
        aO(T);
        return cB(T)
    }
    function cF() {
        var T = document.documentElement,
            cK = document.body;
        if (T && (T.scrollTop || T.scrollLeft)) {
            return [T.scrollTop, T.scrollLeft]
        } else {
            if (cK) {
                return [cK.scrollTop, cK.scrollLeft]
            } else {
                return [0, 0]
            }
        }
    }
    function cs(cK, T) {
        if (!cK || !T) {
            return
        }
        return Math.round(Math.sqrt(Math.pow(cK.x - T.x, 2) + Math.pow(cK.y - T.y, 2)))
    }
    function N(T, cL) {
        var cK = [];
        cL = cL ||
        function (cN) {
            return cN
        };
        for (var cM in T) {
            cK.push(cM + "=" + cL(T[cM]))
        }
        return cK.join("&")
    }
    function Z(cK, T, cL) {
        var cM = document.createElement(cK);
        if (cL) {
            cM = document.createElementNS(cL, cK)
        }
        return a7.dom.setAttrs(cM, T || {})
    }
    function aI(T) {
        if (T.currentStyle) {
            return T.currentStyle
        } else {
            if (T.ownerDocument && T.ownerDocument.defaultView) {
                return T.ownerDocument.defaultView.getComputedStyle(T, null)
            }
        }
    }
	// 判断是否为函数
    function H(T) {
        return typeof T == "function"
    }
    function aJ(T) {
        return typeof T == "number"
    }
    function b2(T) {
        return typeof T == "string"
    }
    function cg(T) {
        return typeof T != "undefined"
    }
    function cI(T) {
        return typeof T == "object"
    }
    function aX(T) {
        return "[object Array]" == Object.prototype.toString.call(T)
    }
    var ce = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    function bU(cM) {
        var cK = "";
        var cT, cR, cP = "";
        var cS, cQ, cO, cN = "";
        var cL = 0;
        var T = /[^A-Za-z0-9\+\/\=]/g;
        if (!cM || T.exec(cM)) {
            return cM
        }
        cM = cM.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do {
            cS = ce.indexOf(cM.charAt(cL++));
            cQ = ce.indexOf(cM.charAt(cL++));
            cO = ce.indexOf(cM.charAt(cL++));
            cN = ce.indexOf(cM.charAt(cL++));
            cT = (cS << 2) | (cQ >> 4);
            cR = ((cQ & 15) << 4) | (cO >> 2);
            cP = ((cO & 3) << 6) | cN;
            cK = cK + String.fromCharCode(cT);
            if (cO != 64) {
                cK = cK + String.fromCharCode(cR)
            }
            if (cN != 64) {
                cK = cK + String.fromCharCode(cP)
            }
            cT = cR = cP = "";
            cS = cQ = cO = cN = ""
        } while (cL < cM.length);
        return cK
    }
    var bf = a7.lang.Event;

    function az() {
        return !!(a7.platform.isIphone || a7.platform.isIpad || a7.platform.isAndroid)
    }
    function bN() {
        return !!(a7.platform.isWindows || a7.platform.isMacintosh || a7.platform.isX11)
    }
    function aD() {
        return (new Date).getTime()
    }
    var cw = {
        request: function (cK) {
            var T = Z("script", {
                src: cK,
                type: "text/javascript",
                charset: "utf-8"
            });
            if (T.addEventListener) {
                T.addEventListener("load", function (cM) {
                    var cL = cM.target;
                    cL.parentNode.removeChild(cL)
                }, false)
            } else {
                if (T.attachEvent) {
                    T.attachEvent("onreadystatechange", function (cM) {
                        var cL = window.event.srcElement;
                        if (cL && (cL.readyState == "loaded" || cL.readyState == "complete")) {
                            cL.parentNode.removeChild(cL)
                        }
                    })
                }
            }
            setTimeout(function () {
                document.getElementsByTagName("head")[0].appendChild(T);
                T = null
            }, 1)
        }
    };

    function cz() {}
    a7.object.extend(cz, {
        Request: {
            INITIAL: -1,
            WAITING: 0,
            COMPLETED: 1
        },
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
        preLoaded: {},
        Config: {
            //_baseUrl: w + "getmodules?v=1.3",
            _baseUrl: "getmodules.php?v=1.3",
            _timeout: 5000
        },
        delayFlag: false,
        Module: {
            _modules: {},
            _arrMdls: []
        },
        load: function (cK, cM) {
            var T = this.current(cK);
            if (T._status == this.Request.COMPLETED) {
                return
            } else {
                if (T._status == this.Request.INITIAL) {
                    this.combine(cK);
                    this.pushUniqueMdl(cK);
                    var cL = this;
                    if (cL.delayFlag == false) {
                        cL.delayFlag = true;
                        window.setTimeout(function () {
                            var cN = cL.Config._baseUrl + "&mod=" + cL.Module._arrMdls.join(",");
                            cw.request(cN);
                            cL.Module._arrMdls.length = 0;
                            cL.delayFlag = false
                        }, 1)
                    }
                    T._status = this.Request.WAITING
                }
                T._callbacks.push(cM)
            }
        },
        combine: function (T) {
            if (T && this.Dependency[T]) {
                var cL = this.Dependency[T];
                for (var cK = 0; cK < cL.length; cK++) {
                    this.combine(cL[cK]);
                    if (!this.Module._modules[cL[cK]]) {
                        this.pushUniqueMdl(cL[cK])
                    }
                }
            }
        },
        pushUniqueMdl: function (cK) {
            for (var T = 0; T < this.Module._arrMdls.length; T++) {
                if (this.Module._arrMdls[T] == cK) {
                    return
                }
            }
            this.Module._arrMdls.push(cK)
        },
        run: function (cL, cN) {
            var cK = this.current(cL);
            try {
                eval(cN)
            } catch (cO) {
				console.log(cO);
                return
            }
            cK._status = this.Request.COMPLETED;
            for (var cM = 0, T = cK._callbacks.length; cM < T; cM++) {
                cK._callbacks[cM]()
            }
            cK._callbacks.length = 0
        },
        check: function (cK, cL) {
            var T = this;
            T.timeout = setTimeout(function () {
                var cM = T.Module._modules[cK]._status;
                if (cM != T.Request.COMPLETED) {
                    T.remove(cK);
                    T.load(cK, cL)
                } else {
                    clearTimeout(T.timeout)
                }
            }, T.Config._timeout)
        },
        current: function (cK) {
            var T;
            if (!this.Module._modules[cK]) {
                this.Module._modules[cK] = {};
                this.Module._modules[cK]._status = this.Request.INITIAL;
                this.Module._modules[cK]._callbacks = []
            }
            T = this.Module._modules[cK];
            return T
        },
        remove: function (cK) {
            var T = this.current(cK);
            delete T
        }
    });
    window._jsload = function (T, cK) {
        cz.run(T, cK)
    };
	// Point
    function bt(T, cK) {
        this.x = T || 0;
        this.y = cK || 0
    }
    bt.prototype.equals = function (T) {
        return T && T.x == this.x && T.y == this.y
    };
	
	// Size
    function aG(cK, T) {
        this.width = cK || 0;
        this.height = T || 0
    }
    aG.prototype.equals = function (T) {
        return T && this.width == T.width && this.height == T.height
    };

    function cl(T, cK) {
        if (!T) {
            return
        }
        this._position = T;
        this.guid = "spot" + (cl.guid++);
        cK = cK || {};
        this._text = cK.text || "";
        this._offsets = cK.offsets ? cK.offsets.slice(0) : [5, 5, 5, 5];
        this._userData = cK.userData || null;
        this._minZoom = cK.minZoom || null;
        this._maxZoom = cK.maxZoom || null
    }
    cl.guid = 0;
    a7.extend(cl.prototype, {
        initialize: function (T) {
            if (this._minZoom == null) {
                this._minZoom = T.config.minZoom
            }
            if (this._maxZoom == null) {
                this._maxZoom = T.config.maxZoom
            }
        },
        setPosition: function (T) {
            if (T instanceof cc) {
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
	// Control
    function co() {
        this._map = null;
        this._container;
        this._type = "control";
        this.blockInfoWindow = true;
        this._visible = true
    }
    a7.lang.inherits(co, a7.lang.Class, "Control");
    a7.extend(co.prototype, {
        initialize: function (T) {
            this._map = T;
            if (this._container) {
                T.container.appendChild(this._container);
                return this._container
            }
            return
        },
		// 添加到地图时被调用
        _i: function (T) {
            if (!this._container && this.initialize && H(this.initialize)) {
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
            var cK = this._container;
            if (cK) {
                var T = cK.style;
                T.position = "absolute";
                T.zIndex = this._cZIndex || "10";
                T.MozUserSelect = "none";
                T.WebkitTextSizeAdjust = "none";
                if (!this._opts.printable) {
                    a7.dom.addClass(cK, "BMap_noprint")
                }
                a7.on(cK, "contextmenu", cn)
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
            this._container = ar(this._map.container, "<div unselectable='on'></div>");
            if (this._visible == false) {
                a7.dom.hide(this._container)
            }
            return this._container
        },
        _setPosition: function () {
            this.setAnchor(this._opts.anchor)
        },
        setAnchor: function (cM) {
            if (this.anchorFixed || !aJ(cM) || isNaN(cM) || cM < BMAP_ANCHOR_TOP_LEFT || cM > BMAP_ANCHOR_BOTTOM_RIGHT) {
                cM = this.defaultAnchor
            }
            this._opts = this._opts || {
                printable: false
            };
            this._opts.offset = this._opts.offset || this.defaultOffset;
            var cL = this._opts.anchor;
            this._opts.anchor = cM;
            if (!this._container) {
                return
            }
            var cO = this._container;
            var T = this._opts.offset.width;
            var cN = this._opts.offset.height;
            cO.style.left = cO.style.top = cO.style.right = cO.style.bottom = "auto";
            switch (cM) {
            case BMAP_ANCHOR_TOP_LEFT:
                cO.style.top = cN + "px";
                cO.style.left = T + "px";
                break;
            case BMAP_ANCHOR_TOP_RIGHT:
                cO.style.top = cN + "px";
                cO.style.right = T + "px";
                break;
            case BMAP_ANCHOR_BOTTOM_LEFT:
                cO.style.bottom = cN + "px";
                cO.style.left = T + "px";
                break;
            case BMAP_ANCHOR_BOTTOM_RIGHT:
                cO.style.bottom = cN + "px";
                cO.style.right = T + "px";
                break;
            default:
                break
            }
            var cK = ["TL", "TR", "BL", "BR"];
            a7.dom.removeClass(this._container, "anchor" + cK[cL]);
            a7.dom.addClass(this._container, "anchor" + cK[cM])
        },
        getAnchor: function () {
            return this._opts.anchor
        },
        setOffset: function (T) {
            if (!(T instanceof aG)) {
                return
            }
            this._opts = this._opts || {
                printable: false
            };
            this._opts.offset = new aG(T.width, T.height);
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
                a7.dom.show(this._container)
            }
        },
        hide: function () {
            if (this._visible == false) {
                return
            }
            this._visible = false;
            if (this._container) {
                a7.dom.hide(this._container)
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
	// NavigationControl
    function K(T) {
        co.call(this);
        T = T || {};
        this._opts = {
            printable: false,
            showZoomInfo: true
        };
        a7.object.extend(this._opts, T);
        this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
        this.defaultOffset = new aG(10, 10);
        this.setAnchor(T.anchor);
        this.setType(T.type);
        this._asyncLoadCode()
    }
    a7.lang.inherits(K, co, "NavigationControl");
    a7.extend(K.prototype, {
        initialize: function (T) {
            this._map = T;
            return this._container
        },
        setType: function (T) {
            if (aJ(T) && T >= BMAP_NAVIGATION_CONTROL_LARGE && T <= BMAP_NAVIGATION_CONTROL_ZOOM) {
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
            cz.load("control", function () {
                T._asyncDraw()
            })
        }
    });
	// CopyrightControl
    function al(T) {
        co.call(this);
        T = T || {};
        this._opts = {
            printable: false
        };
        a7.object.extend(this._opts, T);
        this._copyrightCollection = [];
        this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
        this.defaultOffset = new aG(5, 2);
        this.setAnchor(T.anchor);
        this._canShow = true;
        this.blockInfoWindow = false;
        this._asyncLoadCode()
    }
    a7.lang.inherits(al, co, "CopyrightControl");
    a7.object.extend(al.prototype, {
        initialize: function (T) {
            this._map = T;
            return this._container
        },
        addCopyright: function (cL) {
            if (!cL || !aJ(cL.id) || isNaN(cL.id)) {
                return
            }
            var T = {
                bounds: null,
                content: ""
            };
            for (var cK in cL) {
                T[cK] = cL[cK]
            }
            var cM = this.getCopyright(cL.id);
            if (cM) {
                for (var cN in T) {
                    cM[cN] = T[cN]
                }
            } else {
                this._copyrightCollection.push(T)
            }
        },
        getCopyright: function (cL) {
            for (var cK = 0, T = this._copyrightCollection.length; cK < T; cK++) {
                if (this._copyrightCollection[cK].id == cL) {
                    return this._copyrightCollection[cK]
                }
            }
        },
        getCopyrightCollection: function () {
            return this._copyrightCollection
        },
        removeCopyright: function (cL) {
            for (var cK = 0, T = this._copyrightCollection.length; cK < T; cK++) {
                if (this._copyrightCollection[cK].id == cL) {
                    r = this._copyrightCollection.splice(cK, 1);
                    cK--;
                    T = this._copyrightCollection.length
                }
            }
        },
        _asyncLoadCode: function () {
            var T = this;
            cz.load("control", function () {
                T._asyncDraw()
            })
        }
    });
	// OverviewMapControl
    function cJ(T) {
        co.call(this);
        T = T || {};
        this._opts = {
            printable: false
        };
        this._opts = a7.extend(a7.extend(this._opts, {
            size: new aG(150, 150),
            padding: 5,
            isOpen: false,
            zoomInterval: 4
        }), T);
        this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;
        this.defaultOffset = new aG(0, 0);
        this._btnWidth = 13;
        this._btnHeight = 13;
        this.setAnchor(T.anchor);
        this.setSize(this._opts.size);
        this._asyncLoadCode()
    }
    a7.lang.inherits(cJ, co, "OverviewMapControl");
    a7.extend(cJ.prototype, {
        initialize: function (T) {
            this._map = T;
            return this._container
        },
        setAnchor: function (T) {
            co.prototype.setAnchor.call(this, T)
        },
        changeView: function () {
            this.changeView._running = true;
            this._opts.isOpen = !this._opts.isOpen;
            if (!this._container) {
                this.changeView._running = false
            }
        },
        setSize: function (T) {
            if (!(T instanceof aG)) {
                T = new aG(150, 150)
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
            cz.load("control", function () {
                T._asyncDraw()
            })
        }
    });
	// ScaleControl
    function bJ(T) {
        co.call(this);
        T = T || {};
        this._opts = {
            printable: false
        };
        this._opts = a7.object.extend(a7.object.extend(this._opts, {
            color: "black",
            unit: "metric"
        }), T);
        this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
        this.defaultOffset = new aG(81, 18);
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
    a7.lang.inherits(bJ, co, "ScaleControl");
    a7.object.extend(bJ.prototype, {
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
            cz.load("control", function () {
                T._asyncDraw()
            })
        }
    });
    window.BMAP_MAPTYPE_CONTROL_HORIZONTAL = 0;
    window.BMAP_MAPTYPE_CONTROL_DROPDOWN = 1;
	// MapTypeControl
    function aK(T) {
        co.call(this);
        T = T || {};
        this._opts = {
            printable: false,
            mapTypes: [BMAP_NORMAL_MAP, BMAP_SATELLITE_MAP, BMAP_HYBRID_MAP, BMAP_PERSPECTIVE_MAP],
            type: BMAP_MAPTYPE_CONTROL_HORIZONTAL
        };
        this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT;
        this.defaultOffset = new aG(10, 10);
        this.setAnchor(T.anchor);
        this._opts = a7.extend(a7.extend(this._opts, {
            offset: this.defaultOffset,
            enableSwitch: true
        }), T);
        if (aX(T.mapTypes)) {
            this._opts.mapTypes = T.mapTypes.slice(0)
        }
        this._asyncLoadCode()
    }
    a7.lang.inherits(aK, co, "MapTypeControl");
    a7.object.extend(aK.prototype, {
        initialize: function (T) {
            this._map = T;
            return this._container
        },
        _asyncLoadCode: function () {
            var T = this;
            cz.load("control", function () {
                T._asyncDraw()
            })
        }
    });
	// ContextMenu
    function cy(cK) {
        a7.lang.Class.call(this);
        this._opts = {
            container: null,
            cursor: "default"
        };
        this._opts = a7.extend(this._opts, cK);
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
        cz.load("menu", function () {
            T._draw()
        })
    }
    a7.lang.inherits(cy, a7.lang.Class, "ContextMenu");
    a7.object.extend(cy.prototype, {
        initialize: function (cK, T) {
            this._map = cK;
            this._overlay = T || null
        },
        remove: function () {
            this._map = this._overlay = null
        },
        addItem: function (cL) {
            if (!cL || cL._type != "menuitem" || cL._text == "" || cL._width <= 0) {
                return
            }
            for (var cK = 0, T = this._items.length; cK < T; cK++) {
                if (this._items[cK] === cL) {
                    return
                }
            }
            this._items.push(cL);
            this._rItems.push(cL)
        },
        removeItem: function (cL) {
            if (!cL || cL._type != "menuitem") {
                return
            }
            for (var cK = 0, T = this._items.length; cK < T; cK++) {
                if (this._items[cK] === cL) {
                    this._items[cK].remove();
                    this._items.splice(cK, 1);
                    T--
                }
            }
            for (var cK = 0, T = this._rItems.length; cK < T; cK++) {
                if (this._rItems[cK] === cL) {
                    this._rItems[cK].remove();
                    this._rItems.splice(cK, 1);
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
        removeSeparator: function (cK) {
            if (!this._dividers[cK]) {
                return
            }
            for (var cL = 0, T = this._items.length; cL < T; cL++) {
                if (this._items[cL] && this._items[cL]._type == "divider" && this._items[cL]._dIndex == cK) {
                    this._items.splice(cL, 1);
                    T--
                }
                if (this._items[cL] && this._items[cL]._type == "divider" && this._items[cL]._dIndex > cK) {
                    this._items[cL]._dIndex--
                }
            }
            this._dividers.splice(cK, 1)
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
	// MenuItem
    function bd(cL, cM, cK) {
        if (!cL || !H(cM)) {
            return
        }
        a7.lang.Class.call(this);
        this._opts = {
            width: 100,
            id: ""
        };
        cK = cK || {};
        this._opts.width = (cK.width * 1) ? cK.width : 100;
        this._opts.id = cK.id ? cK.id : "";
        this._text = cL + "";
        this._callback = cM;
        this._map = null;
        this._type = "menuitem";
        this._contextmenu = null;
        this._container = null;
        this._enabled = true;
        var T = this;
        cz.load("menu", function () {
            T._draw()
        })
    }
    a7.lang.inherits(bd, a7.lang.Class, "MenuItem");
    a7.object.extend(bd.prototype, {
        initialize: function (T, cK) {
            this._map = T;
            this._contextmenu = cK
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

    function bM(T, cK) {
        if (T && !cK) {
            cK = T
        }
        this._sw = this._ne = null;
        this._swLng = this._swLat = null;
        this._neLng = this._neLat = null;
        if (T) {
            this._sw = new cc(T.lng, T.lat);
            this._ne = new cc(cK.lng, cK.lat);
            this._swLng = T.lng;
            this._swLat = T.lat;
            this._neLng = cK.lng;
            this._neLat = cK.lat
        }
    }
    a7.object.extend(bM.prototype, {
        isEmpty: function () {
            return !this._sw || !this._ne
        },
        equals: function (T) {
            if (!(T instanceof bM) || this.isEmpty()) {
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
            if (!(T instanceof bM) || this.isEmpty() || T.isEmpty()) {
                return false
            }
            return (T._swLng > this._swLng && T._neLng < this._neLng && T._swLat > this._swLat && T._neLat < this._neLat)
        },
        getCenter: function () {
            if (this.isEmpty()) {
                return null
            }
            return new cc((this._swLng + this._neLng) / 2, (this._swLat + this._neLat) / 2)
        },
        intersects: function (cL) {
            if (!(cL instanceof bM)) {
                return null
            }
            if (Math.max(cL._swLng, cL._neLng) < Math.min(this._swLng, this._neLng) || Math.min(cL._swLng, cL._neLng) > Math.max(this._swLng, this._neLng) || Math.max(cL._swLat, cL._neLat) < Math.min(this._swLat, this._neLat) || Math.min(cL._swLat, cL._neLat) > Math.max(this._swLat, this._neLat)) {
                return null
            }
            var cN = Math.max(this._swLng, cL._swLng);
            var cK = Math.min(this._neLng, cL._neLng);
            var cM = Math.max(this._swLat, cL._swLat);
            var T = Math.min(this._neLat, cL._neLat);
            return new bM(new cc(cN, cM), new cc(cK, T))
        },
        containsPoint: function (T) {
            if (!(T instanceof cc) || this.isEmpty()) {
                return false
            }
            return (T.lng >= this._swLng && T.lng <= this._neLng && T.lat >= this._swLat && T.lat <= this._neLat)
        },
        extend: function (T) {
            if (!(T instanceof cc)) {
                return
            }
            var cK = T.lng,
                cL = T.lat;
            if (!this._sw) {
                this._sw = new cc(0, 0)
            }
            if (!this._ne) {
                this._ne = new cc(0, 0)
            }
            if (!this._swLng || this._swLng > cK) {
                this._sw.lng = this._swLng = cK
            }
            if (!this._neLng || this._neLng < cK) {
                this._ne.lng = this._neLng = cK
            }
            if (!this._swLat || this._swLat > cL) {
                this._sw.lat = this._swLat = cL
            }
            if (!this._neLat || this._neLat < cL) {
                this._ne.lat = this._neLat = cL
            }
        },
        toSpan: function () {
            if (this.isEmpty()) {
                return new cc(0, 0)
            }
            return new cc(Math.abs(this._neLng - this._swLng), Math.abs(this._neLat - this._swLat))
        }
    });

    function cc(T, cK) {
        if (isNaN(T)) {
            T = bU(T);
            T = isNaN(T) ? 0 : T
        }
        if (b2(T)) {
            T = parseFloat(T)
        }
        if (isNaN(cK)) {
            cK = bU(cK);
            cK = isNaN(cK) ? 0 : cK
        }
        if (b2(cK)) {
            cK = parseFloat(cK)
        }
        this.lng = T;
        this.lat = cK
    }
    cc.isInRange = function (T) {
        return T && T.lng <= 180 && T.lng >= -180 && T.lat <= 74 && T.lat >= -74
    };
    cc.prototype.equals = function (T) {
        return T && this.lat == T.lat && this.lng == T.lng
    };

    function bc() {}
    bc.prototype.lngLatToPoint = function () {
        throw "lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0"
    };
    bc.prototype.pointToLngLat = function () {
        throw "pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0"
    };

    function b5() {}
    a7.extend(b5, {
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
        getLnglatIndex: function (cM, cQ, cP) {
            var cL = 0;
            var cK = 0;
            var cR = 10000000,
                cO = 1000000000;
            for (var cN = 0; cN < this.correct_pts[cM].length; cN++) {
                var T = this.getDis(this.correct_pts[cM][cN].x, this.correct_pts[cM][cN].y, cQ, cP);
                if (T < cO) {
                    if (T < cR) {
                        cO = cR;
                        cR = T;
                        cK = cL;
                        cL = cN
                    } else {
                        sedMinDis = T;
                        cK = cN
                    }
                }
            }
            return {
                lt: cL,
                rb: cK
            }
        },
        getOMapIndex_mm: function (cM, cR, cQ) {
            var cL = 0;
            var cK = 0;
            var cP = 1294723000,
                cO = 1294723000;
            for (var cN = 0; cN < this.correct_pts[cM].length; cN++) {
                var T = this.getDis(this.correct_pts[cM][cN].utm_x, this.correct_pts[cM][cN].utm_y, cR, cQ);
                if (T < cO) {
                    if (T < cP) {
                        cO = cP;
                        cP = T;
                        cK = cL;
                        cL = cN
                    } else {
                        sedMinDis = T;
                        cK = cN
                    }
                }
            }
            return {
                lt: cL,
                rb: cK
            }
        },
        getDis: function (T, cM, cK, cL) {
            return Math.abs(T - cK) + Math.abs(cM - cL)
        },
        toMap: function (cM, T, cN) {
            var cK = (T - cN) * this.num[cM].num;
            var cL = (T + cN) * this.num[cM].num * this.num[cM].num2;
            return {
                x: cK,
                y: cL
            }
        },
        fromMap: function (cM, T, cN) {
            cN = cN / this.num[cM].num2;
            var cK = (T + cN) / (this.num[cM].num * 2);
            var cL = (cN - T) / (this.num[cM].num * 2);
            return {
                x: cK,
                y: cL
            }
        },
        getDgPix_mm: function (cN, cS, cO) {
            var cR = this.fromMap(cN, this.correct_pts[cN][cS].x, this.correct_pts[cN][cS].y);
            var cP = this.fromMap(cN, this.correct_pts[cN][cO].x, this.correct_pts[cN][cO].y);
            var cX = cR.x,
                cK = cR.y;
            var cW = cP.x,
                T = cP.y;
            var cU = this.correct_pts[cN][cS].utm_x,
                cM = this.correct_pts[cN][cS].utm_y;
            var cQ = this.correct_pts[cN][cO].utm_x,
                cL = this.correct_pts[cN][cO].utm_y;
            var cV = Math.abs((cQ - cU) * 100000 / (cW - cX));
            var cT = Math.abs((cL - cM) * 100000 / (T - cK));
            return {
                j: cV,
                w: cT,
                x: 100000 / cV,
                y: 100000 / cT
            }
        },
        getPx_mm: function (c0, cW, cV, cN, cM) {
            var cL = this.correct_pts[c0][cN];
            var T = this.correct_pts[c0][cN];
            var cT = this.getDgPix_mm(c0, cN, cM);
            var cP = this.fromMap(c0, cL.x, cL.y);
            var cO = T.utm_x,
                c2 = T.utm_y;
            var c1 = cW,
                cU = cV;
            var cZ = cP.x;
            var cK = cP.y;
            var cR = c1 - cO,
                cY = cU - c2;
            var cS = cR * cT.x + cZ;
            var cQ = -cY * cT.y + cK;
            var cX = this.toMap(c0, cS, cQ);
            return cX
        },
        getJw_mm: function (cY, cT, cS, cO, cN) {
            var cR = this.correct_pts[cY][cO];
            var cK = this.correct_pts[cY][cO];
            var cU = this.getDgPix_mm(cY, cO, cN);
            var cW = this.fromMap(cY, cT, cS);
            var cM = this.fromMap(cY, cR.x, cR.y);
            var cP = cK.utm_x,
                cZ = cK.utm_y;
            var cX = cM.x;
            var cL = cM.y;
            var c0 = cW.x - cX,
                cV = cL - cW.y;
            var cQ = c0 / cU.x + cP;
            var T = cV / cU.y + cZ;
            return {
                lng: cQ,
                lat: T
            }
        },
        getOMap_pts: function (cK, T) {
            return this.getOMap_index(cK, T.lng, T.lat, T.lt, T.rb)
        },
        getMapJw_pts: function (cK, T) {
            return this.getMapJw_index(cK, T.lng, 9998336 - T.lat, T.lt, T.rb)
        },
        getOMap_index: function (cP, cO, cN, T, cM) {
            if (!T || !cM) {
                var cK = this.getOMapIndex_mm(cP, cO, cN)
            } else {
                var cK = {
                    lt: T,
                    rb: cM
                }
            }
            var cL = this.getPx_mm(cP, cO, cN, cK.lt, cK.rb);
            return {
                x: Math.floor(cL.x),
                y: 9998336 - Math.floor(cL.y),
                lt: cK.lt,
                rb: cK.rb
            }
        },
        getMapJw_index: function (cO, cL, cP, cK, cN) {
            if (!cK || !cN) {
                var cM = this.getLnglatIndex(cO, cL, cP)
            } else {
                var cM = {
                    lt: cK,
                    rb: cN
                }
            }
            var T = this.getJw_mm(cO, cL, cP, cM.lt, cM.rb);
            return {
                lng: T.lng,
                lat: T.lat,
                lt: cM.lt,
                rb: cM.rb
            }
        }
    });

    function a9() {}
    a9.prototype = new bc();
    a7.extend(a9, {
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
        getDistanceByMC: function (cO, cM) {
            if (!cO || !cM) {
                return 0
            }
            var cK, cN, T, cL;
            cO = this.convertMC2LL(cO);
            if (!cO) {
                return 0
            }
            cK = this.toRadians(cO.lng);
            cN = this.toRadians(cO.lat);
            cM = this.convertMC2LL(cM);
            if (!cM) {
                return 0
            }
            T = this.toRadians(cM.lng);
            cL = this.toRadians(cM.lat);
            return this.getDistance(cK, T, cN, cL)
        },
        getDistanceByLL: function (cO, cM) {
            if (!cO || !cM) {
                return 0
            }
            cO.lng = this.getLoop(cO.lng, -180, 180);
            cO.lat = this.getRange(cO.lat, -74, 74);
            cM.lng = this.getLoop(cM.lng, -180, 180);
            cM.lat = this.getRange(cM.lat, -74, 74);
            var cK, T, cN, cL;
            cK = this.toRadians(cO.lng);
            cN = this.toRadians(cO.lat);
            T = this.toRadians(cM.lng);
            cL = this.toRadians(cM.lat);
            return this.getDistance(cK, T, cN, cL)
        },
        convertMC2LL: function (cK) {
            var cL, cN;
            cL = new cc(Math.abs(cK.lng), Math.abs(cK.lat));
            for (var cM = 0; cM < this.MCBAND.length; cM++) {
                if (cL.lat >= this.MCBAND[cM]) {
                    cN = this.MC2LL[cM];
                    break
                }
            }
            var T = this.convertor(cK, cN);
            var cK = new cc(T.lng.toFixed(6), T.lat.toFixed(6));
            return cK
        },
        convertLL2MC: function (T) {
            var cK, cM;
            T.lng = this.getLoop(T.lng, -180, 180);
            T.lat = this.getRange(T.lat, -74, 74);
            cK = new cc(T.lng, T.lat);
            for (var cL = 0; cL < this.LLBAND.length; cL++) {
                if (cK.lat >= this.LLBAND[cL]) {
                    cM = this.LL2MC[cL];
                    break
                }
            }
            if (!cM) {
                for (var cL = this.LLBAND.length - 1; cL >= 0; cL--) {
                    if (cK.lat <= -this.LLBAND[cL]) {
                        cM = this.LL2MC[cL];
                        break
                    }
                }
            }
            var cN = this.convertor(T, cM);
            var T = new cc(cN.lng.toFixed(2), cN.lat.toFixed(2));
            return T
        },
        convertor: function (cL, cM) {
            if (!cL || !cM) {
                return
            }
            var T = cM[0] + cM[1] * Math.abs(cL.lng);
            var cK = Math.abs(cL.lat) / cM[9];
            var cN = cM[2] + cM[3] * cK + cM[4] * cK * cK + cM[5] * cK * cK * cK + cM[6] * cK * cK * cK * cK + cM[7] * cK * cK * cK * cK * cK + cM[8] * cK * cK * cK * cK * cK * cK;
            T *= (cL.lng < 0 ? -1 : 1);
            cN *= (cL.lat < 0 ? -1 : 1);
            return new cc(T, cN)
        },
        getDistance: function (cK, T, cM, cL) {
            return this.EARTHRADIUS * Math.acos((Math.sin(cM) * Math.sin(cL) + Math.cos(cM) * Math.cos(cL) * Math.cos(T - cK)))
        },
        toRadians: function (T) {
            return Math.PI * T / 180
        },
        toDegrees: function (T) {
            return (180 * T) / Math.PI
        },
        getRange: function (cL, cK, T) {
            if (cK != null) {
                cL = Math.max(cL, cK)
            }
            if (T != null) {
                cL = Math.min(cL, T)
            }
            return cL
        },
        getLoop: function (cL, cK, T) {
            while (cL > T) {
                cL -= T - cK
            }
            while (cL < cK) {
                cL += T - cK
            }
            return cL
        }
    });
    a7.extend(a9.prototype, {
        lngLatToMercator: function (T) {
            return a9.convertLL2MC(T)
        },
        lngLatToPoint: function (T) {
            var cK = a9.convertLL2MC(T);
            return new bt(cK.lng, cK.lat)
        },
        mercatorToLngLat: function (T) {
            return a9.convertMC2LL(T)
        },
        pointToLngLat: function (T) {
            var cK = new cc(T.x, T.y);
            return a9.convertMC2LL(cK)
        },
        pointToPixel: function (cK, cO, cN, cM, cP) {
            if (!cK) {
                return
            }
            cK = this.lngLatToMercator(cK, cP);
            var cL = this.getZoomUnits(cO);
            var T = Math.round((cK.lng - cN.lng) / cL + cM.width / 2);
            var cQ = Math.round((cN.lat - cK.lat) / cL + cM.height / 2);
            return new bt(T, cQ)
        },
        pixelToPoint: function (T, cR, cN, cL, cK) {
            if (!T) {
                return
            }
            var cQ = this.getZoomUnits(cR);
            var cO = cN.lng + cQ * (T.x - cL.width / 2);
            var cM = cN.lat - cQ * (T.y - cL.height / 2);
            var cP = new cc(cO, cM);
            return this.mercatorToLngLat(cP, cK)
        },
        getZoomUnits: function (T) {
            return Math.pow(2, (18 - T))
        }
    });

    function cD() {}
    cD.prototype = new a9();
    a7.extend(cD.prototype, {
        lngLatToMercator: function (cK, T) {
            return this._convert2DTo3D(T, a9.convertLL2MC(cK))
        },
        mercatorToLngLat: function (cK, T) {
            return a9.convertMC2LL(this._convert3DTo2D(T, cK))
        },
        lngLatToPoint: function (cL, T) {
            var cK = this._convert2DTo3D(T, a9.convertLL2MC(cL));
            return new bt(cK.lng, cK.lat)
        },
        pointToLngLat: function (cK, T) {
            var cL = new cc(cK.x, cK.y);
            return a9.convertMC2LL(this._convert3DTo2D(T, cL))
        },
        _convert2DTo3D: function (cL, T) {
            var cK = b5.getOMap_pts(cL || "bj", T);
            return new cc(cK.x, cK.y)
        },
        _convert3DTo2D: function (cL, T) {
            var cK = b5.getMapJw_pts(cL || "bj", T);
            return new cc(cK.lng, cK.lat)
        },
        getZoomUnits: function (T) {
            return Math.pow(2, (20 - T))
        }
    });
	// Overlay
    function bF() {
        this._type = "overlay"
    }
    a7.lang.inherits(bF, a7.lang.Class, "Overlay");
    bF.getZIndex = function (T) {
        T = T * 1;
        if (!T) {
            return 0
        }
        return (T * -100000) << 1
    };
    a7.extend(bF.prototype, {
		// 添加到地图时被调用
        _i: function (T) {
            if (!this.domElement && H(this.initialize)) {// 尚未创建DOM，初始化并创建节点
                this.domElement = this.initialize(T);// 执行初始化方法，创建节点
                if (this.domElement) {// 禁用鼠标选择
                    this.domElement.style.WebkitUserSelect = "none"
                }
            }
			console.log("被添加到地图时调用此基类方法");
            this.draw()
        },
        initialize: function (T) {
            throw "initialize\u65b9\u6cd5\u672a\u5b9e\u73b0"
        },
        draw: function () {
			console.log("基类 draw方法");
            throw "draw\u65b9\u6cd5\u672a\u5b9e\u73b0"
        },
        remove: function () {
            if (this.domElement && this.domElement.parentNode) {
                this.domElement.parentNode.removeChild(this.domElement)
            }
            this.domElement = null;
            this.dispatchEvent(new bf("onremove"))
        },
        hide: function () {
            if (this.domElement) {
                a7.dom.hide(this.domElement)
            }
        },
        show: function () {
            if (this.domElement) {
                a7.dom.show(this.domElement)
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
    BMap.register(function (cL) {
        var T = cL.temp;
        T.overlayDiv = cL.overlayDiv = cK(cL.platform, 200);
        cL._panes.floatPane = cK(T.overlayDiv, 800);
        cL._panes.markerMouseTarget = cK(T.overlayDiv, 700);
        cL._panes.floatShadow = cK(T.overlayDiv, 600);
        cL._panes.labelPane = cK(T.overlayDiv, 500);
        cL._panes.markerPane = cK(T.overlayDiv, 400);
        cL._panes.markerShadow = cK(T.overlayDiv, 300);
        cL._panes.mapPane = cK(T.overlayDiv, 200);

        function cK(cM, cP) {
            var cO = Z("div"),
                cN = cO.style;
            cN.position = "absolute";
            cN.top = cN.left = cN.width = cN.height = "0";
            cN.zIndex = cP;
            cM.appendChild(cO);
            return cO
        }
    });
	// OverlayInternal
    function X() {
        a7.lang.Class.call(this);
        bF.call(this);
        this.map = null;
        this._visible = true;
        this.infoWindow = null;
        this._dblclickTime = 0
    }
    a7.lang.inherits(X, bF, "OverlayInternal");
    a7.extend(X.prototype, {
		// 初始化方法，未加载自身初始化方法是被调用
        initialize: function (T) {
            this.map = T;//存储地图实例
            a7.lang.Class.call(this, this.guid);
            return null
        },
        getMap: function () {
            return this.map
        },
        draw: function () {
			console.log("OverlayInternal.draw function");
		},
        remove: function () {
            this.map = null;
            a7.lang.decontrol(this.guid);
            bF.prototype.remove.call(this)
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
        setConfig: function (cK) {
            cK = cK || {};
            for (var T in cK) {
                this._config[T] = cK[T]
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

    function cr() {
        this.map = null;
        this._overlays = {};
        this._customOverlays = []
    }
    BMap.register(function (cK) {
        var T = new cr();
        T.map = cK;
        cK._overlays = T._overlays;
        cK._customOverlays = T._customOverlays;
        cK.addEventListener("load", function (cL) {
            T.draw(cL)
        });
        cK.addEventListener("moveend", function (cL) {
            T.draw(cL)
        });
        if (a7.browser.ie && a7.browser.ie < 8 || document.compatMode == "BackCompat") {
            cK.addEventListener("zoomend", function (cL) {
                setTimeout(function () {
                    T.draw(cL)
                }, 20)
            })
        } else {
            cK.addEventListener("zoomend", function (cL) {
                T.draw(cL)
            })
        }
        cK.addEventListener("maptypechange", function (cL) {
            T.draw(cL)
        });
        cK.addEventListener("addoverlay", function (cP) {
            var cM = cP.target;
            if (cM instanceof X) {
                if (!T._overlays[cM.guid]) {
                    T._overlays[cM.guid] = cM
                }
            } else {
                var cO = false;
                for (var cN = 0, cL = T._customOverlays.length; cN < cL; cN++) {
                    if (T._customOverlays[cN] === cM) {
                        cO = true;
                        break
                    }
                }
                if (!cO) {
                    T._customOverlays.push(cM)
                }
            }
        });
        cK.addEventListener("removeoverlay", function (cO) {
            var cM = cO.target;
            if (cM instanceof X) {
                delete T._overlays[cM.guid]
            } else {
                for (var cN = 0, cL = T._customOverlays.length; cN < cL; cN++) {
                    if (T._customOverlays[cN] === cM) {
                        T._customOverlays.splice(cN, 1);
                        break
                    }
                }
            }
        });
        cK.addEventListener("clearoverlays", function (cO) {
            this.closeInfoWindow();
            for (var cN in T._overlays) {
                if (T._overlays[cN]._config.enableMassClear) {
                    T._overlays[cN].remove();
                    delete T._overlays[cN]
                }
            }
            for (var cM = 0, cL = T._customOverlays.length; cM < cL; cM++) {
                if (T._customOverlays[cM].enableMassClear != false) {
                    T._customOverlays[cM].remove();
                    T._customOverlays[cM] = null;
                    T._customOverlays.splice(cM, 1);
                    cM--;
                    cL--
                }
            }
        });
        cK.addEventListener("infowindowopen", function (cM) {
            var cL = this.infoWindow;
            if (cL) {
                a7.dom.hide(cL.popDom);
                a7.dom.hide(cL.shadowDom)
            }
        });
        cK.addEventListener("movestart", function () {
            if (this.getInfoWindow()) {
                this.getInfoWindow()._setOverflow()
            }
        });
        cK.addEventListener("moveend", function () {
            if (this.getInfoWindow()) {
                this.getInfoWindow()._resetOverflow()
            }
        })
    });
    cr.prototype.draw = function (cL) {
        for (var cK in this._overlays) {
            this._overlays[cK].draw()
        }
        a7.array.each(this._customOverlays, function (cM) {
            cM.draw()
        });
        if (this.map.temp.infoWin) {
            this.map.temp.infoWin.setPosition()
        }
        if (BMap.DrawerSelector) {
            var T = BMap.DrawerSelector.getDrawer(this.map);
            T.setPalette()
        }
    };

    function cE(T) {
        X.call(this);
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
        if (cg(T.enableClicking)) {
            this._config.clickable = T.enableClicking
        }
        this.domElement = null;
        this._bounds = new BMap.Bounds(0, 0, 0, 0);
        this._parseCache = [];
        this.vertexMarkers = [];
        this._temp = {}
    }
    a7.lang.inherits(cE, X, "Graph");
    cE.getGraphPoints = function (cK) {
        var T = [];
        if (!cK) {
            return T
        }
        if (b2(cK)) {
            var cL = cK.split(";");
            a7.array.each(cL, function (cN) {
                var cM = cN.split(",");
                T.push(new cc(cM[0], cM[1]))
            })
        }
        if (cK.constructor == Array && cK.length > 0) {
            T = cK
        }
        return T
    };
    cE.parseTolerance = [0.09, 0.005, 0.0001, 0.00001];
    a7.extend(cE.prototype, {
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
            this.points = cE.getGraphPoints(T).slice(0);
            this._calcBounds()
        },
        _calcBounds: function () {
            if (!this.points) {
                return
            }
            var T = this;
            T._bounds = new bM();
            a7.array.each(this.points, function (cK) {
                T._bounds.extend(cK)
            })
        },
        getPath: function () {
            return this.points
        },
        setPositionAt: function (cK, T) {
            if (!T || !this.points[cK]) {
                return
            }
            this._parseCache.length = 0;
            this.points[cK] = new cc(T.lng, T.lat);
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
            X.prototype.remove.call(this);
            this._parseCache.length = 0
        },
        enableEditing: function () {
            this._config.enableEditing = true
        },
        disableEditing: function () {
            this._config.enableEditing = false
        }
    });

    function m(T) {
        X.call(this);
        this.map = null;
        this.domElement = null;
        this._config = {
            width: 0,
            height: 0,
            offset: new aG(0, 0),
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
    a7.lang.inherits(m, X, "Division");
    a7.extend(m.prototype, {
        _addDom: function () {
            var T = this._config;
            var cL = this.content;
            var cK = ['<div class="BMap_Division" style="position:absolute;'];
            cK.push("width:" + T.width + "px;display:block;");
            cK.push("overflow:hidden;");
            if (T.borderColor != "none") {
                cK.push("border:" + T.lineStroke + "px " + T.lineStyle + " " + T.lineColor + ";")
            }
            cK.push("opacity:" + T.opacity + "; filter:(opacity=" + T.opacity * 100 + ")");
            cK.push("background:" + T.background + ";");
            cK.push('z-index:60;">');
            cK.push(cL);
            cK.push("</div>");
            this.domElement = ar(this.map.getPanes().markerMouseTarget, cK.join(""))
        },
        initialize: function (T) {
            this.map = T;
            this._addDom();
            if (this.domElement) {
                a7.on(this.domElement, "mousedown", function (cK) {
                    aO(cK)
                })
            }
            return this.domElement
        },
        draw: function () {
            var T = this.map.pointToOverlayPixel(this._config.point);
            this._config.offset = new aG(-Math.round(this._config.width / 2) - Math.round(this._config.lineStroke), -Math.round(this._config.height / 2) - Math.round(this._config.lineStroke));
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
        setDimension: function (T, cK) {
            this._config.width = Math.round(T);
            this._config.height = Math.round(cK);
            if (this.domElement) {
                this.domElement.style.width = this._config.width + "px";
                this.domElement.style.height = this._config.height + "px";
                this.draw()
            }
        }
    });

    function L(cK, cL, cM) {
        if (!cK || !cL) {
            return
        }
        this.imageUrl = cK;
        this.size = cL;
        var T = new aG(Math.floor(cL.width / 2), Math.floor(cL.height / 2));
        var cN = {
            anchor: T,
            imageOffset: new aG(0, 0)
        };
        cM = cM || {};
        a7.extend(cN, cM);
        this.anchor = cN.anchor;
        this.imageOffset = cN.imageOffset;
        this.infoWindowAnchor = cM.infoWindowAnchor || this.anchor;
        this.printImageUrl = cM.printImageUrl || ""
    }
    var bC = L.prototype;
    bC.setImageUrl = function (T) {
        if (!T) {
            return
        }
        this.imageUrl = T
    };
    bC.setPrintImageUrl = function (T) {
        if (!T) {
            return
        }
        this.printImageUrl = T
    };
    bC.setSize = function (T) {
        if (!T) {
            return
        }
        this.size = new aG(T.width, T.height)
    };
    bC.setAnchor = function (T) {
        if (!T) {
            return
        }
        this.anchor = new aG(T.width, T.height)
    };
    bC.setImageOffset = function (T) {
        if (!T) {
            return
        }
        this.imageOffset = new aG(T.width, T.height)
    };
    bC.setInfoWindowAnchor = function (T) {
        if (!T) {
            return
        }
        this.infoWindowAnchor = new aG(T.width, T.height)
    };
    bC.toString = function () {
        return "Icon"
    };
	// InfoWindow
    function bO(cL, cK) {
        a7.lang.Class.call(this);
        this.content = cL;
        this.map = null;
        this._config = {
            width: 0,
            height: 0,
            maxWidth: 600,
            offset: new aG(0, 0),
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
        a7.extend(this._config, cK || {});
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
        this.IMG_PATH = cb.imgPath;
        this.overlay = null;
        var T = this;
        cz.load("infowindow", function () {
            T._draw()
        })
    }
    a7.lang.inherits(bO, a7.lang.Class, "InfoWindow");
    a7.extend(bO.prototype, {
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
    by.prototype.openInfoWindow = function (cM, T) {
        if (!(cM instanceof bO) || !(T instanceof cc)) {
            return
        }
        var cK = this.temp;
        if (!cK.marker) {
            var cL = new L(cb.imgPath + "blank.gif", {
                width: 1,
                height: 1
            });
            cK.marker = new ac(T, {
                icon: cL,
                width: 1,
                height: 1,
                offset: new aG(0, 0),
                infoWindowOffset: new aG(0, 0),
                clickable: false
            });
            cK.marker._fromMap = 1
        } else {
            cK.marker.setPosition(T)
        }
        this.addOverlay(cK.marker);
        cK.marker.openInfoWindow(cM)
    };
    by.prototype.closeInfoWindow = function () {
        var T = this.temp.infoWin || this.temp._infoWin;
        if (T && T.overlay) {
            T.overlay.closeInfoWindow()
        }
    };
    X.prototype.openInfoWindow = function (T) {
        if (this.map) {
            this.map.closeInfoWindow();
            T._visible = true;
            this.map.temp._infoWin = T;
            T.overlay = this;
            a7.lang.Class.call(T, T.guid)
        }
    };
    X.prototype.closeInfoWindow = function () {
        if (this.map && this.map.temp._infoWin) {
            this.map.temp._infoWin._visible = false;
            a7.lang.decontrol(this.map.temp._infoWin.guid);
            this.map.temp._infoWin = null
        }
    };
	// Label
    function af(cL, cK) {
        X.call(this);
        this.content = cL;
        this.map = null;
        this.domElement = null;
        this._config = {
            width: 0,
            offset: new aG(0, 0),
            styles: {
                backgroundColor: "#fff",
                border: "1px solid #f00",
                padding: "1px",
                whiteSpace: "nowrap",
                font: "12px " + cb.fontFamily,
                zIndex: "80",
                MozUserSelect: "none"
            },
            position: null,
            enableMassClear: true,
            clickable: true
        };
        cK = cK || {};
        this.setConfig(cK);
        if (this._config.width < 0) {
            this._config.width = 0
        }
        if (cg(cK.enableClicking)) {
            this._config.clickable = cK.enableClicking
        }
        this.point = this._config.position;
        var T = this;
        cz.load("marker", function () {
            T._draw()
        })
    }
    a7.lang.inherits(af, X, "Label");
    a7.extend(af.prototype, {
        getPosition: function () {
            if (this._marker) {
                return this._marker.getPosition()
            }
            return this.point
        },
        setPosition: function (T) {
            if (T instanceof cc && !this.getMarker()) {
                this.point = this._config.position = new cc(T.lng, T.lat)
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
            if (!(T instanceof aG)) {
                return
            }
            this._config.offset = new aG(T.width, T.height)
        },
        getOffset: function () {
            return this._config.offset
        },
        setStyle: function (T) {
            T = T || {};
            this._config.styles = a7.extend(this._config.styles, T)
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
    window.BMAP_ANIMATION_DROP = 1;
    window.BMAP_ANIMATION_BOUNCE = 2;
    var at = new L(cb.imgPath + "marker_red_sprite.png", new aG(19, 25), {
        anchor: new aG(10, 25),
        infoWindowAnchor: new aG(10, 0)
    });
    var aq = new L(cb.imgPath + "marker_red_sprite.png", new aG(20, 11), {
        anchor: new aG(6, 11),
        imageOffset: new aG(-19, -13)
    });
	// Marker
    function ac(T, cL) {
        X.call(this);
        cL = cL || {};
        this.point = T;
        this.map = null;
        this._animation = null;
        this._config = {
            offset: new aG(0, 0),
            icon: at,
            shadow: aq,
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
            draggingCursor: cb.draggingCursor
        };
        this.setConfig(cL);
        if (cL.icon && !cL.shadow) {
            this._config.shadow = null
        }
        if (cg(cL.enableClicking)) {
            this._config.clickable = cL.enableClicking
        }
        var cK = this;
		console.log("will load marker extends");
        cz.load("marker", function () {
            cK._draw()
        })
		
    }
    ac.TOP_ZINDEX = bF.getZIndex(-90) + 1000000;
    ac.DRAG_ZINDEX = ac.TOP_ZINDEX + 1000000;
    a7.lang.inherits(ac, X, "Marker");
    a7.extend(ac.prototype, {
        setIcon: function (T) {
            if (T instanceof L) {
                this._config.icon = T
            }
        },
        getIcon: function () {
            return this._config.icon
        },
        setShadow: function (T) {
            if (T instanceof L) {
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
            if (T instanceof cc) {
                this.point = new cc(T.lng, T.lat)
            }
        },
        setTop: function (cK, T) {
            this._config.isTop = !! cK;
            if (cK) {
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
            if (T instanceof aG) {
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
	// Polygon
    function cm(T, cL) {
        cE.call(this, cL);
        cL = cL || {};
        this._config.fillOpacity = cL.fillOpacity ? cL.fillOpacity : 0.65;
        if (cL.fillColor == "") {
            this._config.fillColor = ""
        } else {
            this._config.fillColor = cL.fillColor ? cL.fillColor : "#fff"
        }
        this.setPath(T);
        var cK = this;
        cz.load("poly", function () {
            cK._draw()
        })
    }
    a7.lang.inherits(cm, cE, "Polygon");
    a7.extend(cm.prototype, {
        setPath: function (cK, T) {
            this._userPoints = cE.getGraphPoints(cK).slice(0);
            var cL = cE.getGraphPoints(cK).slice(0);
            if (cL.length > 1 && !cL[0].equals(cL[cL.length - 1])) {
                cL.push(new cc(cL[0].lng, cL[0].lat))
            }
            cE.prototype.setPath.call(this, cL, T)
        },
        setPositionAt: function (cK, T) {
            if (!this._userPoints[cK]) {
                return
            }
            this._userPoints[cK] = new cc(T.lng, T.lat);
            this.points[cK] = new cc(T.lng, T.lat);
            if (cK == 0 && !this.points[0].equals(this.points[this.points.length - 1])) {
                this.points[this.points.length - 1] = new cc(T.lng, T.lat)
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
	// Polyline
    function f(T, cL) {
        cE.call(this, cL);
        this.setPath(T);
        var cK = this;
        cz.load("poly", function () {
            cK._draw()
        })
    }
    a7.lang.inherits(f, cE, "Polyline");

    function a(cK, T, cL) {
        this.point = cK;
        this.radius = Math.abs(T);
        cm.call(this, [], cL)
    }
    a.parseTolerance = [0.01, 0.0001, 0.00001, 0.000004];
    a7.lang.inherits(a, cm, "Circle");
    a7.extend(a.prototype, {
        initialize: function (T) {
            this.map = T;
            this.points = this._getPerimeterPoints(this.point, this.radius);
            this._calcBounds();
            return null
        },
        getCenter: function () {
            return this.point
        },
        setCenter: function (T, cK) {
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
        _getPerimeterPoints: function (T, cR) {
            if (!T || !cR || !this.map) {
                return []
            }
            var cK = this.map;
            var cO = T.lng,
                cM = T.lat;
            var cY = [];
            var cT = cR / 6378800,
                cQ = (Math.PI / 180) * cM,
                cW = (Math.PI / 180) * cO;
            for (var cP = 0; cP < 360; cP += 9) {
                var cN = (Math.PI / 180) * cP,
                    cU = Math.asin(Math.sin(cQ) * Math.cos(cT) + Math.cos(cQ) * Math.sin(cT) * Math.cos(cN)),
                    cS = Math.atan2(Math.sin(cN) * Math.sin(cT) * Math.cos(cQ), Math.cos(cT) - Math.sin(cQ) * Math.sin(cU)),
                    cV = ((cW - cS + Math.PI) % (2 * Math.PI)) - Math.PI,
                    cX = new cc(cV * (180 / Math.PI), cU * (180 / Math.PI));
                cY.push(cX)
            }
            var cL = cY[0];
            cY.push(new cc(cL.lng, cL.lat));
            return cY
        }
    });
	
    function bQ(T) {
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
    BMap.register(function (cK) {
        var T = new bQ(cK);
        T.initialize()
    });
    a7.extend(bQ.prototype, {
        initialize: function () {
            var T = this,
                cK = T.map;
            cK.addEventListener("loadcode", function () {
                T.loadTiles()
            });
            cK.addEventListener("addtilelayer", function (cL) {
                T.addTileLayer(cL)
            });
            cK.addEventListener("removetilelayer", function (cL) {
                T.removeTileLayer(cL)
            });
            cK.addEventListener("setmaptype", function (cL) {
                T.setMapType(cL)
            });
            cK.addEventListener("zoomstartcode", function (cL) {
                T._zoom(cL)
            })
        },
        loadTiles: function () {
            var T = this;
            if (a7.browser.ie) {
                try {
                    document.execCommand("BackgroundImageCache", false, true)
                } catch (cK) {}
            }
            if (!this.loaded) {
                T.initMapTypeTiles()
            }
            T.moveGridTiles();
            if (!this.loaded) {
                this.loaded = true;
                cz.load("tile", function () {
                    T._asyncLoadTiles()
                })
            }
        },
        initMapTypeTiles: function () {
            var cK = this.map.getMapType();
            var cL = cK.getTileLayers();
            for (var T = 0; T < cL.length; T++) {
                var cM = new o();
                a7.extend(cM, cL[T]);
                this.mapTypeLayers.push(cM);
                cM.initialize(this.map, this._mapTypeLayerContainer)
            }
        },
        _createDiv: function (cK) {
            var T = Z("div");
            T.style.position = "absolute";
            T.style.left = T.style.top = "0";
            T.style.zIndex = cK;
            return T
        },
        showTile: function (cO, cN, cR) {
            var cU = this;
            cU.centerPos = cN;
            var cQ = this.map.getMapType();
            var cL = cU.getTileName(cO, cR);
            var cY = cQ.getTileSize();
            var cM = (cO[0] * cY) + cN[0];
            var cX = 0;
            if (cQ === BMAP_PERSPECTIVE_MAP && cU.map.getZoom() == 15) {
                cX = 0.5
            }
            var cK = (cX - 1 - cO[1]) * cY + cN[1];
            var cS = [cM, cK];
            var cT = this.mapTiles[cL];
            if (cT && cT.img) {
                bH(cT.img, cS);
                if (cT.loaded) {
                    this._checkTilesLoaded()
                } else {
                    cT._addLoadCbk(function () {
                        cU._checkTilesLoaded()
                    })
                }
                return
            }
            cT = this.bufferTiles[cL];
            if (cT && cT.img) {
                cR.tilesDiv.insertBefore(cT.img, cR.tilesDiv.lastChild);
                this.mapTiles[cL] = cT;
                bH(cT.img, cS);
                if (cT.loaded) {
                    this._checkTilesLoaded()
                } else {
                    cT._addLoadCbk(function () {
                        cU._checkTilesLoaded()
                    })
                }
                return
            }
            var cW = 256 * Math.pow(2, (cQ.getMaxZoom() - cO[2]));
            var cV = new cc(cO[0] * cW, cO[1] * cW);
            var cP = new bt(cO[0], cO[1]);
            var T = cR.getTilesUrl(cP, cO[2]);
            cT = new bT(this, T, cS, cO, cR);
            cT._addLoadCbk(function () {
                cU._checkTilesLoaded()
            });
            cT._load();
            this.mapTiles[cL] = cT
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
                        T.map.dispatchEvent(new bf("ontilesloaded"))
                    }
                    T._checkLoadedTimer = null
                }, 80)
            }
        },
        getTileName: function (T, cK) {
            if (this.map.getMapType() === BMAP_PERSPECTIVE_MAP) {
                return "TILE-" + cK.guid + "-" + this.map.cityCode + "-" + T[0] + "-" + T[1] + "-" + T[2]
            } else {
                return "TILE-" + cK.guid + "-" + T[0] + "-" + T[1] + "-" + T[2]
            }
        },
        hideTile: function (cK) {
            var T = cK.img;
            if (T) {
                I(T);
                if (x(T)) {
                    T.parentNode.removeChild(T)
                }
            }
            delete this.mapTiles[cK.name];
            if (!cK.loaded) {
                I(T);
                T = null;
                cK._callCbks();
                cK.img = null;
                cK.mgr = null
            }
        },
        moveGridTiles: function () {
            var c9 = this.mapTypeLayers;
            var cV = c9.concat(this.tileLayers);
            var c1 = cV.length;
            for (var c3 = 0; c3 < c1; c3++) {
                var cO = cV[c3];
                if (cO.baseLayer) {
                    this.tilesDiv = cO.tilesDiv
                }
                var df = this.map;
                var db = df.getMapType();
                var dg = db.getProjection();
                var c2 = df.zoomLevel;
                var c5 = df.mercatorCenter;
                this.mapCenterPoint = c5;
                var cT = db.getZoomUnits(c2);
                var cW = db.getZoomFactor(c2);
                var cU = Math.ceil(c5.lng / cW);
                var cP = Math.ceil(c5.lat / cW);
                var c0 = db.getTileSize();
                var cN = [cU, cP, (c5.lng - cU * cW) / cW * c0, (c5.lat - cP * cW) / cW * c0];
                var da = cN[0] - Math.ceil((df.width / 2 - cN[2]) / c0);
                var cM = cN[1] - Math.ceil((df.height / 2 - cN[3]) / c0);
                var c6 = cN[0] + Math.ceil((df.width / 2 + cN[2]) / c0);
                var cY = 0;
                if (db === BMAP_PERSPECTIVE_MAP && df.getZoom() == 15) {
                    cY = 1
                }
                var cX = cN[1] + Math.ceil((df.height / 2 + cN[3]) / c0) + cY;
                this.areaCenter = new cc(c5.lng, c5.lat);
                var cL = this.mapTiles;
                var cS = -this.areaCenter.lng / cT;
                var cR = this.areaCenter.lat / cT;
                var dd = [Math.round(cS), Math.round(cR)];
                var cK = df.getZoom();
                for (var de in cL) {
                    var dh = cL[de];
                    var dc = dh.info;
                    if (dc[2] != cK || (dc[2] == cK && (da > dc[0] || c6 <= dc[0] || cM > dc[1] || cX <= dc[1]))) {
                        this.hideTile(dh)
                    }
                }
                var cQ = -df.offsetX + df.width / 2;
                var cZ = -df.offsetY + df.height / 2;
                cO.tilesDiv.style.left = Math.round(cS + cQ) - dd[0] + "px";
                cO.tilesDiv.style.top = Math.round(cR + cZ) - dd[1] + "px";
                var T = [];
                for (var c8 = da; c8 < c6; c8++) {
                    for (var c7 = cM; c7 < cX; c7++) {
                        T.push([c8, c7])
                    }
                }
                T.sort((function (di) {
                    return function (dj, dk) {
                        return ((0.4 * Math.abs(dj[0] - di[0]) + 0.6 * Math.abs(dj[1] - di[1])) - (0.4 * Math.abs(dk[0] - di[0]) + 0.6 * Math.abs(dk[1] - di[1])))
                    }
                })([cN[0] - 1, cN[1] - 1]));
                this.numLoading += T.length;
                for (var c8 = 0, c4 = T.length; c8 < c4; c8++) {
                    this.showTile([T[c8][0], T[c8][1], cK], dd, cO)
                }
            }
            return
        },
        addTileLayer: function (cM) {
            var cL = this;
            var T = cM.target;
            for (var cK = 0; cK < cL.tileLayers.length; cK++) {
                if (cL.tileLayers[cK] == T) {
                    return
                }
            }
            T.initialize(this.map, this._normalLayerContainer);
            cL.tileLayers.push(T)
        },
        removeTileLayer: function (cN) {
            var cM = this;
            var cK = cN.target;
            for (var cL = 0, T = cM.tileLayers.length; cL < T; cL++) {
                if (cK == cM.tileLayers[cL]) {
                    cM.tileLayers.splice(cL, 1)
                }
            }
            cK.remove()
        },
        setMapType: function () {
            var cL = this;
            var cM = this.mapTypeLayers;
            for (var cK = 0, T = cM.length; cK < T; cK++) {
                cM[cK].remove()
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
                a7.dom.hide(T.zoomsDiv)
            }
            setTimeout(function () {
                T.moveGridTiles();
                T.map.dispatchEvent(new bf("onzoomend"))
            }, 10)
        }
    });

    function bT(cQ, T, cN, cK, cM) {
        this.mgr = cQ;
        this.position = cN;
        this._cbks = [];
        this.name = cQ.getTileName(cK, cM);
        this.info = cK;
        this._transparentPng = cM.isTransparentPng();
        var cR = Z("img");
        cv(cR);
        cR.galleryImg = false;
        var cP = cR.style;
        var cL = cQ.map.getMapType();
        cP.position = "absolute";
        cP.border = "none";
        cP.width = cL.getTileSize() + "px";
        cP.height = cL.getTileSize() + "px";
        cP.left = cN[0] + "px";
        cP.top = cN[1] + "px";
        this.img = cR;
        this.src = T;
        if (D) {
            this.img.style.opacity = 0
        }
        var cO = this;
        this.img.onload = function (cX) {
            cO.loaded = true;
            if (!cO.mgr) {
                return
            }
            var cT = cO.mgr;
            var cS = cT.bufferTiles;
            if (!cS[cO.name]) {
                cT.realBufferNumber++;
                cS[cO.name] = cO
            }
            if (cO.img && !x(cO.img)) {
                if (cM.tilesDiv) {
                    cM.tilesDiv.appendChild(cO.img);
                    if (a7.browser.ie <= 6 && a7.browser.ie > 0 && cO._transparentPng) {
                        cO.img.style.cssText += ';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + cO.src + '",sizingMethod=scale);'
                    }
                }
            }
            var cV = cT.realBufferNumber - cT.bufferNumber;
            for (var cW in cS) {
                if (cV <= 0) {
                    break
                }
                if (!cT.mapTiles[cW]) {
                    cS[cW].mgr = null;
                    var cU = cS[cW].img;
                    if (cU && cU.parentNode) {
                        cU.parentNode.removeChild(cU);
                        I(cU)
                    }
                    cU = null;
                    cS[cW].img = null;
                    delete cS[cW];
                    cT.realBufferNumber--;
                    cV--
                }
            }
            if (D) {
                new g({
                    fps: 20,
                    duration: 200,
                    render: function (cY) {
                        if (cO.img && cO.img.style) {
                            cO.img.style.opacity = cY * 1
                        }
                    },
                    finish: function () {
                        if (cO.img && cO.img.style) {
                            delete cO.img.style.opacity
                        }
                    }
                })
            }
            cO._callCbks()
        };
        this.img.onerror = function () {
            var cT = cO.img,
                cU = cO.img.getAttribute("isError") || 0;
            if (l && cU < 5) {
                cU++;
                cT.setAttribute("isError", cU);
                cT.src = T + "&t=" + new Date().getTime()
            } else {
                cO._callCbks();
                if (!cO.mgr) {
                    return
                }
                var cS = cO.mgr;
                var cV = cS.map.getMapType();
                if (cV.getErrorImageUrl()) {
                    cO.error = true;
                    cO.img.src = cV.getErrorImageUrl();
                    if (cO.img && !x(cO.img)) {
                        cM.tilesDiv.appendChild(cO.img)
                    }
                }
            }
        };
        cR = null
    }
    bT.prototype._addLoadCbk = function (T) {
        this._cbks.push(T)
    };
    bT.prototype._load = function () {
        if (a7.browser.ie > 0 && a7.browser.ie <= 6 && this._transparentPng) {
            this.img.src = cb.imgPath + "blank.gif"
        } else {
            this.img.src = this.src
        }
    };
    bT.prototype._callCbks = function () {
        var cK = this;
        for (var T = 0; T < cK._cbks.length; T++) {
            cK._cbks[T]()
        }
        cK._cbks.length = 0
    };

    function I(cM) {
        if (!cM) {
            return
        }
        cM.onload = cM.onerror = null;
        var cK = cM.attributes,
            cL, T, cN;
        if (cK) {
            T = cK.length;
            for (cL = 0; cL < T; cL += 1) {
                cN = cK[cL].name;
                if (H(cM[cN])) {
                    cM[cN] = null
                }
            }
        }
        cK = cM.children;
        if (cK) {
            T = cK.length;
            for (cL = 0; cL < T; cL += 1) {
                I(cM.children[cL])
            }
        }
    }
    var D = (!a7.browser.ie || a7.browser.ie > 8);
	// TileLayer
    function o(T) {
        this.opts = T || {};
        this.copyright = this.opts.copyright || null;
        this.transparentPng = this.opts.transparentPng || false;
        this.baseLayer = this.opts.baseLayer || false;
        this.zIndex = this.opts.zIndex || 0;
        this.guid = o._guid++
    }
    o._guid = 0;
    a7.lang.inherits(o, a7.lang.Class, "TileLayer");
    a7.extend(o.prototype, {
        initialize: function (cL, T) {
            if (this.baseLayer) {
                this.zIndex = -100
            }
            this.map = cL;
            if (!this.tilesDiv) {
                var cM = Z("div");
                var cK = cM.style;
                if (!a7.platform.isAndroid) {
                    T.style.WebkitBackfaceVisibility = "hidden"
                }
                cK.position = "absolute";
                cK.zIndex = this.zIndex;
                cK.left = Math.ceil(-cL.offsetX + cL.width / 2) + "px";
                cK.top = Math.ceil(-cL.offsetY + cL.height / 2) + "px";
                T.appendChild(cM);
                this.tilesDiv = cM
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
        getTilesUrl: function (cK, cL) {
            var T = "";
            if (this.opts.tileUrlTemplate) {
                T = this.opts.tileUrlTemplate.replace(/\{X\}/, cK.x);
                T = T.replace(/\{Y\}/, cK.y);
                T = T.replace(/\{Z\}/, cL)
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

    function aB(T) {
        o.call(this, T);
        this._opts = {};
        T = T || {};
        this._opts = a7.object.extend(this._opts, T);
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
    aB.prototype = new o();
    aB.prototype.initialize = function (cK, T) {
        o.prototype.initialize.call(this, cK, T);
        this._map = cK
    };
    aB.prototype.isTransparentPng = function () {
        return true
    };
    aB.prototype.getTilesUrl = function (cP, cK) {
        var cQ = "";
        if (this._opts.predictDate) {
            cQ = "HistoryService?day=" + (this._opts.predictDate.weekday - 1) + "&hour=" + this._opts.predictDate.hour + "&t=" + new Date().getTime() + "&"
        } else {
            cQ = "TrafficTileService?time=" + new Date().getTime() + "&"
        }
        var cL = this._map,
            cR = cP.x,
            cM = cP.y,
            cO = Math.floor(cR / 200),
            cN = Math.floor(cM / 200),
            T = this._tileUrl + cQ + "level=" + cK + "&x=" + cR + "&y=" + cM;
        return T.replace(/-(\d+)/gi, "M$1")
    };

    function ct(T, cK, cL) {
        this._name = T;
        this._layers = cK instanceof o ? [cK] : cK.slice(0);
        this._opts = {
            tips: "",
            labelText: "",
            minZoom: 1,
            maxZoom: 19,
            tileSize: 256,
            textColor: "black",
            errorImageUrl: "",
            projection: new a9()
        };
        if (this._layers.length == 1) {
            this._layers[0].baseLayer = true
        }
        a7.extend(this._opts, cL || {})
    }
    a7.extend(ct.prototype, {
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
    var b6 = ["http://q1.baidu.com/it/", "http://q2.baidu.com/it/", "http://q3.baidu.com/it/", "http://q4.baidu.com/it/", "http://q5.baidu.com/it/", "http://q6.baidu.com/it/", "http://q7.baidu.com/it/", "http://q8.baidu.com/it/"];
    if (l) {
        b6 = [w + "it/"]
    }
    var aS = new o();
    aS.getTilesUrl = function (cL, cO) {
        var cP = cL.x;
        var cM = cL.y;
        var cN = "44",
            T = "015";
        if (this.map.highResolutionEnabled()) {
            cN = "41";
            T = "014"
        }
        var cK = b6[Math.abs(cP + cM) % b6.length] + "u=x=" + cP + ";y=" + cM + ";z=" + cO + ";v=" + T + ";type=web&fm=" + cN;
        return cK.replace(/-(\d+)/gi, "M$1")
    };
    window.BMAP_NORMAL_MAP = new ct("\u5730\u56fe", aS, {
        tips: "\u663e\u793a\u666e\u901a\u5730\u56fe"
    });
    var br = new o();
    br.tileUrls = ["http://d0.map.baidu.com/resource/mappic/", "http://d1.map.baidu.com/resource/mappic/", "http://d2.map.baidu.com/resource/mappic/", "http://d3.map.baidu.com/resource/mappic/"];
    br.getTilesUrl = function (T, cL) {
        var cN = T.x;
        var cK = T.y;
        var cM = Math.pow(2, (20 - cL)) * 256;
        cK = Math.round((9998336 - cM * (cK)) / cM) - 1;
        url = this.tileUrls[Math.abs(cN + cK) % this.tileUrls.length] + this.map.currentCity + "/" + this.map.cityCode + "/3/lv" + (21 - cL) + "/" + cN + "," + cK + ".jpg";
        return url
    };
    window.BMAP_PERSPECTIVE_MAP = new ct("\u4e09\u7ef4", br, {
        tips: "\u663e\u793a\u4e09\u7ef4\u5730\u56fe",
        minZoom: 15,
        maxZoom: 20,
        textColor: "white",
        projection: new cD()
    });
    BMAP_PERSPECTIVE_MAP.getZoomUnits = function (T) {
        return Math.pow(2, (20 - T))
    };
    BMAP_PERSPECTIVE_MAP.getCityName = function (T) {
        if (!T) {
            return ""
        }
        var cK = cb.cityNames;
        for (var cL in cK) {
            if (T.search(cL) > -1) {
                return cK[cL]
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
    var bP = new o({
        baseLayer: true
    });
    bP.getTilesUrl = function (cK, cM) {
        var cN = cK.x;
        var cL = cK.y;
        var T = b6[Math.abs(cN + cL) % b6.length] + "u=x=" + cN + ";y=" + cL + ";z=" + cM + ";v=009;type=sate&fm=46";
        return T.replace(/-(\d+)/gi, "M$1")
    };
    window.BMAP_SATELLITE_MAP = new ct("\u536b\u661f", bP, {
        tips: "\u663e\u793a\u536b\u661f\u5f71\u50cf",
        minZoom: 1,
        maxZoom: 19,
        textColor: "white"
    });
    var n = new o({
        transparentPng: true
    });
    n.getTilesUrl = function (cK, cM) {
        var cN = cK.x;
        var cL = cK.y;
        var T = b6[Math.abs(cN + cL) % b6.length] + "u=x=" + cN + ";y=" + cL + ";z=" + cM + ";v=015;type=trans&fm=47";
        return T.replace(/-(\d+)/gi, "M$1")
    };
    window.BMAP_HYBRID_MAP = new ct("\u6df7\u5408", [bP, n], {
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
    var G = 0;
    var bg = 1;
    var am = {};

    function v(cK, T) {
        a7.lang.Class.call(this);
        this._loc = {};
        this.setLocation(cK);
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
        a7.extend(this._opts, T);
        if (typeof T != "undefined" && typeof T.renderOptions != "undefined" && typeof T.renderOptions.autoViewport != "undefined") {
            this._opts.renderOptions.autoViewport = T.renderOptions.autoViewport
        } else {
            this._opts.renderOptions.autoViewport = true
        }
        this._opts.renderOptions.panel = a7.G(this._opts.renderOptions.panel)
    }
    a7.inherits(v, a7.lang.Class);
    a7.extend(v.prototype, {
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
    var ba = {
        REQ_BASE_URL: w,
        request: function (cP, cM, cK, cR, cL) {
            var cN = (Math.random() * 100000).toFixed(0);
            BMap._rd["_cbk" + cN] = function (cS) {
                cK = cK || {};
                cP && cP(cS, cK);
                delete BMap._rd["_cbk" + cN]
            };
            cR = cR || "";
            var cQ;
            if (cK && cK.useEncodeURI) {
                cQ = N(cM, encodeURI)
            } else {
                cQ = N(cM, encodeURIComponent)
            }
            var cO = this,
                T = cO.REQ_BASE_URL + cR + "?" + cQ + "&ie=utf-8&oue=1&fromproduct=jsapi";
            if (!cL) {
                T += "&res=api"
            }
            T += "&callback=BMap._rd._cbk" + cN;
            cw.request(T)
        }
    };
    BMap._rd = {};
    var R = {};
    R.removeHtml = function (T) {
        return T.replace(/<\/?b>/g, "")
    };
    R.parseGeoExtReg1 = function (T) {
        return T.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;")
    };
    R.parseGeoExtReg2 = function (cK, T) {
        var cL = new RegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" + T + "}", "ig");
        return cK.replace(cL, "$1")
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
    var cu = "cur";
    var c = "cen";
    var ci = "s";
    var P = "con";
    var ak = "bd";
    var ca = "nb";
    var E = "bt";
    var bL = "nav";
    var bu = "walk";
    var bz = "gc";
    var d = "rgc";
    var S = "dec";
    var aP = "bse";
    var e = "nse";
    var F = "bl";
    var be = "bsl";
    var aF = "bda";
    var ah = "sa";
    var a0 = "nba";
    var ch = "drag";
    var b3 = "ext";
    var q = 2;
    var a4 = 4;
    var bs = 7;
    var W = 11;
    var aM = 12;
    var bh = 14;
    var a1 = 15;
    var cx = 18;
    var t = 20;
    var Q = 21;
    var ao = 26;
    var bD = 28;
    var y = 31;
    var bp = 35;
    var bB = 44;
    var aw = 45;
    var ad = 46;
    var bR = 47;
    var aZ = -1;
    var aa = 0;
    var cp = 1;
    var a5 = 2;
    var A = 3;
    var cH = "http://map.baidu.com/";
    BMap.I = window.Instance = a7.lang.instance;
    var a3 = function (cL, cK) {
        v.call(this, cL, cK);
        cK = cK || {};
        cK.renderOptions = cK.renderOptions || {};
        this.setPageCapacity(cK.pageCapacity);
        if (typeof cK.renderOptions.selectFirstResult != "undefined" && !cK.renderOptions.selectFirstResult) {
            this.disableFirstResultSelection()
        } else {
            this.enableFirstResultSelection()
        }
        this._overlays = [];
        this._arrPois = [];
        this._curIndex = -1;
        this._queryList = [];
        var T = this;
        cz.load("local", function () {
            T._check()
        })
    };
    a7.inherits(a3, v, "LocalSearch");
    a3.DEFAULT_PAGE_CAPACITY = 10;
    a3.MIN_PAGE_CAPACITY = 1;
    a3.MAX_PAGE_CAPACITY = 100;
    a3.DEFAULT_RADIUS = 2000;
    a3.MAX_RADIUS = 100000;
    a7.extend(a3.prototype, {
        search: function (T) {
            this._queryList.push({
                method: "search",
                arguments: [T]
            })
        },
        searchInBounds: function (T, cK) {
            this._queryList.push({
                method: "searchInBounds",
                arguments: [T, cK]
            })
        },
        searchNearby: function (cL, cK, T) {
            this._queryList.push({
                method: "searchNearby",
                arguments: [cL, cK, T]
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
                this._opts.pageCapacity = T < 1 ? a3.DEFAULT_PAGE_CAPACITY : (T > a3.MAX_PAGE_CAPACITY ? a3.DEFAULT_PAGE_CAPACITY : T)
            } else {
                this._opts.pageCapacity = a3.DEFAULT_PAGE_CAPACITY
            }
        },
        getPageCapacity: function () {
            return this._opts.pageCapacity
        },
        toString: function () {
            return "LocalSearch"
        }
    });
    var b4 = function (cK, T) {
        v.call(this, cK, T)
    };
    a7.inherits(b4, v, "BaseRoute");
    a7.extend(b4.prototype, {
        clearResults: function () {}
    });
    window.BMAP_TRANSIT_POLICY_LEAST_TIME = 0;
    window.BMAP_TRANSIT_POLICY_LEAST_TRANSFER = 2;
    window.BMAP_TRANSIT_POLICY_LEAST_WALKING = 3;
    window.BMAP_TRANSIT_POLICY_AVOID_SUBWAYS = 4;
    window.BMAP_LINE_TYPE_BUS = 0;
    window.BMAP_LINE_TYPE_SUBWAY = 1;
    window.BMAP_LINE_TYPE_FERRY = 2;

    function aT(cL, cK) {
        b4.call(this, cL, cK);
        cK = cK || {};
        this.setPolicy(cK.policy);
        this.setPageCapacity(cK.pageCapacity);
        this.QUERY_TYPE = E;
        this.RETURN_TYPE = bh;
        this.ROUTE_TYPE = bg;
        this._overlays = [];
        this._curIndex = -1;
        this._queryList = [];
        var T = this;
        cz.load("route", function () {
            T._asyncSearch()
        })
    }
    aT.MAX_PAGE_CAPACITY = 100;
    aT.LINE_TYPE_MAPPING = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
    a7.inherits(aT, b4, "TransitRoute");
    a7.extend(aT.prototype, {
        setPolicy: function (T) {
            if (T >= BMAP_TRANSIT_POLICY_LEAST_TIME && T <= BMAP_TRANSIT_POLICY_AVOID_SUBWAYS) {
                this._opts.policy = T
            } else {
                this._opts.policy = BMAP_TRANSIT_POLICY_LEAST_TIME
            }
        },
        _internalSearch: function (cK, T) {
            this._queryList.push({
                method: "_internalSearch",
                arguments: [cK, T]
            })
        },
        search: function (cK, T) {
            this._queryList.push({
                method: "search",
                arguments: [cK, T]
            })
        },
        setPageCapacity: function (T) {
            if (typeof T == "string") {
                T = parseInt(T);
                if (isNaN(T)) {
                    this._opts.pageCapacity = aT.MAX_PAGE_CAPACITY;
                    return
                }
            }
            if (typeof T != "number") {
                this._opts.pageCapacity = aT.MAX_PAGE_CAPACITY;
                return
            }
            if (T >= 1 && T <= aT.MAX_PAGE_CAPACITY) {
                this._opts.pageCapacity = Math.round(T)
            } else {
                this._opts.pageCapacity = aT.MAX_PAGE_CAPACITY
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
    var bk = function (T, cM) {
        b4.call(this, T, cM);
        this._overlays = [];
        this._curIndex = -1;
        this._queryList = [];
        var cL = this;
        var cK = this._opts.renderOptions;
        if (cK.highlightMode != BMAP_HIGHLIGHT_STEP && cK.highlightMode != BMAP_HIGHLIGHT_ROUTE) {
            cK.highlightMode = BMAP_HIGHLIGHT_STEP
        }
        this._enableDragging = this._opts.renderOptions.enableDragging ? true : false;
        cz.load("route", function () {
            cL._asyncSearch()
        })
    };
    bk.ROAD_TYPE = ["", "\u73af\u5c9b", "\u65e0\u5c5e\u6027\u9053\u8def", "\u4e3b\u8def", "\u9ad8\u901f\u8fde\u63a5\u8def", "\u4ea4\u53c9\u70b9\u5185\u8def\u6bb5", "\u8fde\u63a5\u9053\u8def", "\u505c\u8f66\u573a\u5185\u90e8\u9053\u8def", "\u670d\u52a1\u533a\u5185\u90e8\u9053\u8def", "\u6865", "\u6b65\u884c\u8857", "\u8f85\u8def", "\u531d\u9053", "\u5168\u5c01\u95ed\u9053\u8def", "\u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df", "POI\u8fde\u63a5\u8def", "\u96a7\u9053", "\u6b65\u884c\u9053", "\u516c\u4ea4\u4e13\u7528\u9053", "\u63d0\u524d\u53f3\u8f6c\u9053"];
    a7.inherits(bk, b4, "DWRoute");
    a7.extend(bk.prototype, {
        search: function (cK, T) {
            this._queryList.push({
                method: "search",
                arguments: [cK, T]
            })
        }
    });
    window.BMAP_DRIVING_POLICY_LEAST_TIME = 0;
    window.BMAP_DRIVING_POLICY_LEAST_DISTANCE = 1;
    window.BMAP_DRIVING_POLICY_AVOID_HIGHWAYS = 2;

    function p(T, cK) {
        bk.call(this, T, cK);
        cK = cK || {};
        this.setPolicy(cK.policy);
        this.QUERY_TYPE = bL;
        this.RETURN_TYPE = t;
        this.ROUTE_TYPE = BMAP_ROUTE_TYPE_DRIVING
    }
    a7.inherits(p, bk, "DrivingRoute");
    a7.extend(p.prototype, {
        setPolicy: function (T) {
            if (T >= BMAP_DRIVING_POLICY_LEAST_TIME && T <= BMAP_DRIVING_POLICY_AVOID_HIGHWAYS) {
                this._opts.policy = T
            } else {
                this._opts.policy = BMAP_DRIVING_POLICY_LEAST_TIME
            }
        }
    });

    function cC(T, cK) {
        bk.call(this, T, cK);
        this.QUERY_TYPE = bu;
        this.RETURN_TYPE = y;
        this.ROUTE_TYPE = BMAP_ROUTE_TYPE_WALKING;
        this._enableDragging = false
    }
    a7.inherits(cC, bk, "WalkingRoute");

    function aW(cK) {
        this._opts = {};
        a7.extend(this._opts, cK);
        this._queryList = [];
        var T = this;
        cz.load("othersearch", function () {
            T._asyncSearch()
        })
    }
    a7.inherits(aW, a7.lang.Class, "Geocoder");
    a7.extend(aW.prototype, {
        getPoint: function (T, cL, cK) {
            this._queryList.push({
                method: "getPoint",
                arguments: [T, cL, cK]
            })
        },
        getLocation: function (T, cL, cK) {
            this._queryList.push({
                method: "getLocation",
                arguments: [T, cL, cK]
            })
        },
        toString: function () {
            return "Geocoder"
        }
    });

    function aj(cK) {
        this._opts = {};
        a7.extend(this._opts, cK);
        this._queryList = [];
        var T = this;
        cz.load("othersearch", function () {
            T._asyncSearch()
        })
    }
    a7.extend(aj.prototype, {
        getCurrentPosition: function (cK, T) {
            this._queryList.push({
                method: "getCurrentPosition",
                arguments: [cK, T]
            })
        },
        getStatus: function () {
            return this._status
        }
    });

    function b8(cK) {
        this._opts = {
            renderOptions: {
                map: null
            }
        };
        a7.extend(this._opts, cK);
        this._queryList = [];
        var T = this;
        cz.load("othersearch", function () {
            T._asyncSearch()
        })
    }
    a7.inherits(b8, a7.lang.Class, "LocalCity");
    a7.extend(b8.prototype, {
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

    function U() {
        this._queryList = [];
        var T = this;
        cz.load("othersearch", function () {
            T._asyncSearch()
        })
    }
    a7.inherits(U, a7.lang.Class, "Boundary");
    a7.extend(U.prototype, {
        get: function (cK, T) {
            this._queryList.push({
                method: "get",
                arguments: [cK, T]
            })
        },
        toString: function () {
            return "Boundary"
        }
    });

    function bl(cL, cK) {
        v.call(this, cL, cK);
        this.QUERY_TYPE_BUSLIST = F;
        this.RETURN_TYPE_BUSLIST = a1;
        this.QUERY_TYPE_BUSLINE = be;
        this.RETURN_TYPE_BUSLINE = cx;
        this._queryList = [];
        var T = this;
        cz.load("buslinesearch", function () {
            T._asyncSearch()
        })
    }
    bl._iconOpen = cb.imgPath + "iw_plus.gif";
    bl._iconClose = cb.imgPath + "iw_minus.gif";
    bl._stopUrl = cb.imgPath + "stop_icon.png";
    a7.inherits(bl, v);
    a7.extend(bl.prototype, {
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

    function bx(cK) {
        v.call(this, cK);
        cK = cK || {};
        this._options = {
            input: null,
            types: [],
            onSearchComplete: function () {}
        };
        a7.extend(this._options, cK);
        this._loc.src = cK.location || "\u5168\u56fd";
        this._word = "";
        this._show = false;
        this._suggestion = null;
        this._inputValue = "";
        this._initialize();
        _addStat(5011);
        var T = this;
        cz.load("autocomplete", function () {
            T._asyncSearch()
        })
    }
    a7.inherits(bx, v, "Autocomplete");
    a7.extend(bx.prototype, {
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

    function ai(T, cK) {
        window.BMap[T] = cK
    }
    ai("Map", by);
    ai("Hotspot", cl);
    ai("MapType", ct);
    ai("Point", cc);
    ai("Pixel", bt);
    ai("Size", aG);
    ai("Bounds", bM);
    ai("TileLayer", o);
    ai("Projection", bc);
    ai("MercatorProjection", a9);
    ai("PerspectiveProjection", cD);
    ai("Copyright", au);
    ai("Overlay", bF);
    ai("Label", af);
    ai("Marker", ac);
    ai("Icon", L);
    ai("Polyline", f);
    ai("Polygon", cm);
    ai("InfoWindow", bO);
    ai("Circle", a);
    ai("Control", co);
    ai("NavigationControl", K);
    ai("OverviewMapControl", cJ);
    ai("CopyrightControl", al);
    ai("ScaleControl", bJ);
    ai("MapTypeControl", aK);
    ai("TrafficLayer", aB);
    ai("ContextMenu", cy);
    ai("MenuItem", bd);
    ai("LocalSearch", a3);
    ai("TransitRoute", aT);
    ai("DrivingRoute", p);
    ai("WalkingRoute", cC);
    ai("Autocomplete", bx);
    ai("Geocoder", aW);
    ai("LocalCity", b8);
    ai("Geolocation", aj);
    ai("BusLineSearch", bl);
    ai("Boundary", U);
    window.BMap.apiLoad();
})();