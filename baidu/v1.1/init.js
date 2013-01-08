window.BMAP_AUTHENTIC_KEY = "";
(function () {
    var l = l || {
        version: "20080809",
        emptyFn: function () {}
    };
    (function () {
        l._log = [];
        var i = 0;
        var aT = {};
        l.BaseClass = function (aU) {
            aT[(this.hashCode = (aU || l.BaseClass.guid()))] = this
        };
        l.BaseClass.guid = function () {
            return "mz_" + (i++).toString(36)
        };
        l.BaseClass.create = function () {
            var aU = new l.BaseClass();
            aU.decontrol();
            return aU
        };
        var e = l.instance = l.I = function (aU) {
            return aT[aU]
        };
        l.BaseClass.prototype.dispose = function () {
            if (this.hashCode) {
                delete aT[this.hashCode]
            }
            for (var aU in this) {
                if (typeof this[aU] != "function") {
                    delete this[aU]
                }
            }
        };
        l.BaseClass.prototype.getHashCode = function () {
            if (!this.hashCode) {
                aT[(this.hashCode = l.BaseClass.guid())] = this
            }
            return this.hashCode
        };
        l.BaseClass.prototype.decontrol = function () {
            delete aT[this.hashCode]
        };
        l.BaseClass.prototype.toString = function () {
            return "[object " + (this._className || "Object") + "]"
        };
        l.BaseClass.prototype._wlog = function (aV, aW) {
            var aU = l._log;
            if (aU.length > 100) {
                aU.reverse().length = 50;
                aU.reverse()
            }
            aU[aU.length] = "[" + aV + "][" + (this._className || "Object") + " " + this.hashCode + "] " + aW
        }
    })();
    Function.prototype.inherits = function (aU, aT) {
        var e, aV, aX = this.prototype,
            aW = function () {};
        aW.prototype = aU.prototype;
        aV = this.prototype = new aW();
        if (typeof(aT) == "string") {
            aV._className = aT
        }
        for (e in aX) {
            aV[e] = aX[e]
        }
        this.prototype.constructor = aX.constructor;
        aX = aW = null;
        return aV
    };
    l.BaseEvent = function (e, i) {
        this.type = e;
        this.returnValue = true;
        this.target = i || null;
        this.currentTarget = this.srcElement = null;
        this.cancelBubble = false;
        this.domEvent = null
    };
    l.BaseClass.prototype.addEventListener = function (aU, aT, i) {
        if (typeof aT != "function") {
            return this._wlog("error", "addEventListener:" + aT + " is not a function")
        }
        if (!this._listeners) {
            this._listeners = {}
        }
        var e = this._listeners,
            aV;
        if (typeof i == "string" && i) {
            if (/[^\w\-]/.test(i)) {
                this._wlog("warning", "nonstandard key:" + i)
            } else {
                aT.hashCode = i;
                aV = i
            }
        }
        if (aU.indexOf("on") != 0) {
            aU = "on" + aU
        }
        if (typeof e[aU] != "object") {
            e[aU] = {}
        }
        aV = aV || l.BaseClass.guid();
        aT.hashCode = aV;
        if (e[aU][aV]) {
            this._wlog("warning", "repeat key:" + aV)
        }
        e[aU][aV] = aT
    };
    l.BaseClass.prototype.removeEventListener = function (aT, i) {
        if (typeof i == "function") {
            i = i.hashCode
        } else {
            if (typeof i != "string") {
                return
            }
        }
        if (!this._listeners) {
            this._listeners = {}
        }
        if (aT.indexOf("on") != 0) {
            aT = "on" + aT
        }
        var e = this._listeners;
        if (!e[aT]) {
            return
        }
        if (e[aT][i]) {
            delete e[aT][i]
        }
    };
    l.BaseClass.prototype.dispatchEvent = function (aU) {
        if (!this._listeners) {
            this._listeners = {}
        }
        var aT, e = this._listeners,
            aV = aU.type;
        aU.target = aU.srcElement = aU.target || aU.srcElement || this;
        aU.currentTarget = this;
        if (typeof this[aV] == "function") {
            this[aV](aU)
        }
        if (typeof e[aV] == "object") {
            for (aT in e[aV]) {
                if (typeof e[aV][aT] == "function") {
                    e[aV][aT].call(this, aU)
                }
            }
        }
        return aU.returnValue
    };
    l.BaseEvent.prototype.inherit = function (aV) {
        var aU = this;
        this.domEvent = aV = window.event || aV;
        aU.clientX = aV.clientX || aV.pageX;
        aU.clientY = aV.clientY || aV.pageY;
        aU.offsetX = aV.offsetX || aV.layerX;
        aU.offsetY = aV.offsetY || aV.layerY;
        aU.screenX = aV.screenX;
        aU.screenY = aV.screenY;
        aU.ctrlKey = aV.ctrlKey || aV.metaKey;
        aU.shiftKey = aV.shiftKey;
        aU.altKey = aV.altKey;
        if (aV.touches) {
            aU.touches = [];
            for (var aT = 0; aT < aV.touches.length; aT++) {
                aU.touches.push({
                    clientX: aV.touches[aT].clientX,
                    clientY: aV.touches[aT].clientY,
                    screenX: aV.touches[aT].screenX,
                    screenY: aV.touches[aT].screenY,
                    pageX: aV.touches[aT].pageX,
                    pageY: aV.touches[aT].pageY,
                    target: aV.touches[aT].target,
                    identifier: aV.touches[aT].identifier
                })
            }
        }
        if (aV.changedTouches) {
            aU.changedTouches = [];
            for (var aT = 0; aT < aV.changedTouches.length; aT++) {
                aU.changedTouches.push({
                    clientX: aV.changedTouches[aT].clientX,
                    clientY: aV.changedTouches[aT].clientY,
                    screenX: aV.changedTouches[aT].screenX,
                    screenY: aV.changedTouches[aT].screenY,
                    pageX: aV.changedTouches[aT].pageX,
                    pageY: aV.changedTouches[aT].pageY,
                    target: aV.changedTouches[aT].target,
                    identifier: aV.changedTouches[aT].identifier
                })
            }
        }
        if (aV.targetTouches) {
            aU.targetTouches = [];
            for (var aT = 0; aT < aV.targetTouches.length; aT++) {
                aU.targetTouches.push({
                    clientX: aV.targetTouches[aT].clientX,
                    clientY: aV.targetTouches[aT].clientY,
                    screenX: aV.targetTouches[aT].screenX,
                    screenY: aV.targetTouches[aT].screenY,
                    pageX: aV.targetTouches[aT].pageX,
                    pageY: aV.targetTouches[aT].pageY,
                    target: aV.targetTouches[aT].target,
                    identifier: aV.targetTouches[aT].identifier
                })
            }
        }
        aU.rotation = aV.rotation;
        aU.scale = aV.scale;
        return aU
    };
    l.Browser = (function () {
        var aT = navigator.userAgent;
        var e = 0,
            aV = 0,
            i = 0,
            aY = 0,
            aW = 0;
        var aZ = 0,
            aU = 0,
            aX = 0;
        if (typeof(window.opera) == "object" && /Opera(\s|\/)(\d+(\.\d+)?)/.test(aT)) {
            aV = parseFloat(RegExp.$2)
        } else {
            if (/MSIE (\d+(\.\d+)?)/.test(aT)) {
                e = parseFloat(RegExp.$1)
            } else {
                if (/Firefox(\s|\/)(\d+(\.\d+)?)/.test(aT)) {
                    aY = parseFloat(RegExp.$2)
                } else {
                    if (navigator.vendor == "Netscape" && /Netscape(\s|\/)(\d+(\.\d+)?)/.test(aT)) {
                        aX = parseFloat(RegExp.$2)
                    } else {
                        if (aT.indexOf("Safari") > -1 && /Version\/(\d+(\.\d+)?)/.test(aT)) {
                            i = parseFloat(RegExp.$1)
                        }
                    }
                }
            }
        }
        if (aT.indexOf("Gecko") > -1 && aT.indexOf("KHTML") == -1 && /rv\:(\d+(\.\d+)?)/.test(aT)) {
            aU = parseFloat(RegExp.$1)
        }
        if (/chrome\/(\d+\.\d)/i.test(aT)) {
            aW = parseFloat(RegExp["\x241"])
        }
        return {
            ie: e,
            firefox: aY,
            gecko: aU,
            netscape: aX,
            opera: aV,
            safari: i,
            chrome: aW
        }
    })();
    window.FeBrowser = l.Browser;
    l.Dom = {};
    l.Dom.createDom = function (i, e) {
        if (l.isIE && e && e.name) {
            i = "<" + i + ' name="' + l.String.escapeHTML(e.name) + '">'
        }
        var aT = document.createElement(i);
        if (e) {
            l.Dom.setProperties(aT, e)
        }
        return aT
    };
    l.Dom.getOffset = function (aU) {
        var aX = l.Dom.getOwnerDocument(aU);
        var aW = l.isGecko > 0 && aX.getBoxObjectFor && l.Dom.getStyle(aU, "position") == "absolute" && (aU.style.top === "" || aU.style.left === "");
        var aY = {
            left: 0,
            top: 0
        };
        var i = (l.isIE && !l.isStrict) ? aX.body : aX.documentElement;
        if (aU == i) {
            return aY
        }
        var aT = null;
        var aV;
        if (aU.getBoundingClientRect) {
            aV = aU.getBoundingClientRect();
            aY.left = aV.left + Math.max(aX.documentElement.scrollLeft, aX.body.scrollLeft);
            aY.top = aV.top + Math.max(aX.documentElement.scrollTop, aX.body.scrollTop);
            aY.left -= aX.documentElement.clientLeft;
            aY.top -= aX.documentElement.clientTop;
            if (l.isIE && !l.isStrict) {
                aY.left -= 2;
                aY.top -= 2
            }
        } else {
            if (aX.getBoxObjectFor && !aW) {
                aV = aX.getBoxObjectFor(aU);
                var e = aX.getBoxObjectFor(i);
                aY.left = aV.screenX - e.screenX;
                aY.top = aV.screenY - e.screenY
            } else {
                aT = aU;
                do {
                    aY.left += aT.offsetLeft;
                    aY.top += aT.offsetTop;
                    if (l.isWebkit > 0 && l.Dom.getStyle(aT, "position") == "fixed") {
                        aY.left += aX.body.scrollLeft;
                        aY.top += aX.body.scrollTop;
                        break
                    }
                    aT = aT.offsetParent
                } while (aT && aT != aU);
                if (l.isOpera > 0 || (l.isWebkit > 0 && l.Dom.getStyle(aU, "position") == "absolute")) {
                    aY.top -= aX.body.offsetTop
                }
                aT = aU.offsetParent;
                while (aT && aT != aX.body) {
                    aY.left -= aT.scrollLeft;
                    if (!l.isOpera || aT.tagName != "TR") {
                        aY.top -= aT.scrollTop
                    }
                    aT = aT.offsetParent
                }
            }
        }
        return aY
    };
    l.Dom.getOwnerDocument = function (e) {
        return e.nodeType == 9 ? e : e.ownerDocument || e.document
    };
    l.Dom.setProperties = function (i, e) {
        l.each(e, function (aU, aT) {
            l.Dom._setProperty(i, aT, aU)
        })
    };
    l.Dom._setProperty = function (i, e, aT) {
        if (e == "style") {
            i.style.cssText = aT
        } else {
            if (e == "class") {
                i.className = aT
            } else {
                if (e == "for") {
                    i.htmlFor = aT
                } else {
                    if (e in l.Dom._DIRECT_ATTRIBUTE_MAP) {
                        i.setAttribute(l.Dom._DIRECT_ATTRIBUTE_MAP[e], aT)
                    } else {
                        i[e] = aT
                    }
                }
            }
        }
    };
    l.Dom._DIRECT_ATTRIBUTE_MAP = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        rowspan: "rowSpan",
        valign: "vAlign",
        height: "height",
        width: "width",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    l.G = function () {
        for (var aT = [], aU = arguments.length - 1; aU > -1; aU--) {
            var aV = arguments[aU];
            aT[aU] = null;
            if (typeof aV == "object" && aV && aV.dom) {
                aT[aU] = aV.dom
            } else {
                if ((typeof aV == "object" && aV && aV.tagName) || aV == window || aV == document) {
                    aT[aU] = aV
                } else {
                    if (typeof aV == "string" && (aV = document.getElementById(aV))) {
                        aT[aU] = aV
                    }
                }
            }
        }
        return aT.length < 2 ? aT[0] : aT
    };
    l.ac = function (e, i) {
        if (!(e = this.G(e))) {
            return
        }
        i = this.trim(i);
        if (!new RegExp("(^| )" + i.replace(/(\W)/g, "\\$1") + "( |$)").test(e.className)) {
            e.className = e.className.split(/\s+/).concat(i).join(" ")
        }
    };
    l.addClassName = l.ac;
    l.each = function (aW, e) {
        if (typeof e != "function") {
            return aW
        }
        if (aW) {
            if (aW.length === undefined) {
                for (var aT in aW) {
                    e.call(aW[aT], aW[aT], aT)
                }
            } else {
                for (var aU = 0, aV = aW.length; aU < aV; aU++) {
                    e.call(aW[aU], aW[aU], aU)
                }
            }
        }
        return aW
    };
    l.extend = function (aW, aU) {
        if (aW && aU && typeof(aU) == "object") {
            for (var aV in aU) {
                aW[aV] = aU[aV]
            }
            var aT = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
            for (var e = 0, i; e < aT.length; e++) {
                i = aT[e];
                if (Object.prototype.hasOwnProperty.call(aU, i)) {
                    aW[i] = aU[i]
                }
            }
        }
        return aW
    };
    l.hide = function () {
        l.each(arguments, function (e) {
            if (e = l.G(e)) {
                e.style.display = "none"
            }
        })
    };
    l.inherit = function (aY, aU, aT) {
        var aX = aY.prototype;
        var aW = function () {};
        aW.prototype = aU.prototype;
        var aV = aY.prototype = new aW();
        if (typeof aT == "string") {
            aV._className = aT
        }
        for (var e in aX) {
            aV[e] = aX[e]
        }
        aY.prototype.constructor = aX.constructor;
        aX = null;
        return aV
    };
    l.isIE = 0;
    (function () {
        if (navigator.userAgent.indexOf("MSIE") > 0 && !window.opera) {
            /MSIE (\d+(\.\d+)?)/.test(navigator.userAgent);
            l.isIE = parseFloat(RegExp.$1)
        }
    })();
    l.rc = function (e, i) {
        if (!(e = this.G(e))) {
            return
        }
        i = this.trim(i);
        var aT = e.className.replace(new RegExp("(^| +)" + i.replace(/(\W)/g, "\\$1") + "( +|$)", "g"), "$2");
        if (e.className != aT) {
            e.className = aT
        }
    };
    l.removeClassName = l.rc;
    l.show = function () {
        this.each(arguments, function (e) {
            if (e = l.G(e)) {
                e.style.display = ""
            }
        })
    };
    l.trim = function (e) {
        return e.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+$)/g, "")
    };
    var E = l.BaseClass;
    E.prototype.toString = function () {
        return this._className || ""
    };
    var aw = l.BaseEvent;
    l.on = function (aT, i, e) {
        if (!(aT = l.G(aT))) {
            return aT
        }
        i = i.replace(/^on/, "").toLowerCase();
        if (aT.addEventListener) {
            aT.addEventListener(i, e, false)
        } else {
            if (aT.attachEvent) {
                aT.attachEvent("on" + i, e)
            }
        }
        return aT
    };
    l.un = function (aT, i, e) {
        if (!(aT = l.G(aT))) {
            return aT
        }
        i = i.replace(/^on/, "").toLowerCase();
        if (aT.removeEventListener) {
            aT.removeEventListener(i, e, false)
        } else {
            if (aT.detachEvent) {
                aT.detachEvent("on" + i, e)
            }
        }
        return aT
    };
    l.hc = function (aU, aT) {
        if (!aU || !aU.className || typeof aU.className != "string") {
            return false
        }
        var i = -1;
        try {
            i = aU.className == aT || aU.className.search(new RegExp("(\\s|^)" + aT + "(\\s|$)"))
        } catch (aV) {
            return false
        }
        return i > -1
    };
    if (typeof HTMLElement != "undefined" && HTMLElement.prototype.__lookupGetter__ && !HTMLElement.prototype.__lookupGetter__("children") && !window.opera) {
        try {
            HTMLElement.prototype.__defineGetter__("children", function () {
                for (var aT = [], aU = 0, aW, aV = 0, e = this.childNodes.length; aV < e; aV++) {
                    aW = this.childNodes[aV];
                    if (aW.nodeType == 1) {
                        aT[aU++] = aW;
                        if (aW.name) {
                            if (!aT[aW.name]) {
                                aT[aW.name] = []
                            }
                            aT[aW.name][aT[aW.name].length] = aW
                        }
                        if (aW.id) {
                            aT[aW.id] = aW
                        }
                    }
                }
                return aT
            })
        } catch (Q) {}
    }
    if (typeof(HTMLElement) != "undefined" && !window.opera && HTMLElement.prototype && !HTMLElement.prototype.insertAdjacentHTML) {
        HTMLElement.prototype.insertAdjacentHTML = function (i, aT) {
            var aU = this.ownerDocument.createRange();
            aU.setStartBefore(this);
            aU = aU.createContextualFragment(aT);
            i = i.toLowerCase();
            switch (i) {
            case "beforebegin":
                this.parentNode.insertBefore(aU, this);
                break;
            case "afterbegin":
                this.insertBefore(aU, this.firstChild);
                break;
            case "beforeend":
                this.appendChild(aU);
                break;
            case "afterend":
                if (!this.nextSibling) {
                    this.parentNode.appendChild(aU)
                } else {
                    this.parentNode.insertBefore(aU, this.nextSibling)
                }
                break
            }
        }
    }
    if (typeof HTMLElement != "undefined" && !window.opera) {
        HTMLElement.prototype.contains = function (e) {
            if (e == this) {
                return true
            }
            while (e = e.parentNode) {
                if (e == this) {
                    return true
                }
            }
            return false
        }
    }
    if (!l.Browser.ie && typeof Event != "undefined" && !window.opera) {
        Event.prototype.__defineSetter__("returnValue", function (e) {
            if (!e) {
                this.preventDefault()
            }
            return e
        });
        Event.prototype.__defineSetter__("cancelBubble", function (e) {
            if (e) {
                this.stopPropagation()
            }
            return e
        })
    }
    l.each = function (aV, aU) {
        if (av(aU)) {
            for (var aT = 0, e = aV.length; aT < e; aT++) {
                if (aU.call(aV, aV[aT], aT) === false) {
                    break
                }
            }
        }
        return aV
    };
    l.Platform = {
        x11: 0,
        macintosh: 0,
        windows: 0,
        android: 0,
        iphone: 0,
        ipad: 0
    };
    for (var N in l.Platform) {
        if (l.Platform.hasOwnProperty(N)) {
            l.Platform[N] = new RegExp(N, "i").test(window.navigator.userAgent) ? 1 : 0
        }
    }
    function aG(aV) {
        var e = {
            duration: 1000,
            fps: 30,
            delay: 0,
            transition: k.linear
        };
        if (aV) {
            for (var aT in aV) {
                e[aT] = aV[aT]
            }
        }
        this._opts = e;
        if (e.delay) {
            var aU = this;
            setTimeout(function () {
                aU._beginTime = new Date().getTime();
                aU._endTime = aU._beginTime + aU._opts.duration;
                aU._launch()
            }, e.delay)
        } else {
            this._beginTime = new Date().getTime();
            this._endTime = this._beginTime + this._opts.duration;
            this._launch()
        }
    }
    aG.prototype._launch = function () {
        var i = this;
        var e = new Date().getTime();
        if (e >= i._endTime) {
            if (typeof i._opts.render == "function") {
                i._opts.render(i._opts.transition(1))
            }
            if (typeof i._opts.finish == "function") {
                i._opts.finish()
            }
            return
        }
        i.schedule = i._opts.transition((e - i._beginTime) / i._opts.duration);
        if (typeof i._opts.render == "function") {
            i._opts.render(i.schedule)
        }
        if (!i.terminative) {
            i._timer = setTimeout(function () {
                i._launch()
            }, 1000 / i._opts.fps)
        }
    };
    aG.prototype.stop = function (e) {
        this.terminative = true;
        if (this._timer) {
            clearTimeout(this._timer)
        }
        if (e) {
            this._endTime = this._beginTime;
            this._launch()
        }
    };
    aG.prototype.cancel = function () {
        if (this._timer) {
            clearTimeout(this._timer)
        }
        this._endTime = this._beginTime;
        this.schedule = 0
    };
    var k = {
        linear: function (e) {
            return e
        },
        reverse: function (e) {
            return 1 - e
        },
        easeInQuad: function (e) {
            return e * e
        },
        easeInCubic: function (e) {
            return Math.pow(e, 3)
        },
        easeOutQuad: function (e) {
            return -(e * (e - 2))
        },
        easeOutCubic: function (e) {
            return Math.pow((e - 1), 3) + 1
        },
        easeInOutQuad: function (e) {
            if (e < 0.5) {
                return e * e * 2
            } else {
                return -2 * (e - 2) * e - 1
            }
            return
        },
        easeInOutCubic: function (e) {
            if (e < 0.5) {
                return Math.pow(e, 3) * 4
            } else {
                return Math.pow(e - 1, 3) * 4 + 1
            }
        },
        easeInOutSine: function (e) {
            return (1 - Math.cos(Math.PI * e)) / 2
        }
    };

    function al(e) {
        return e.style
    }
    function aR(aT, e) {
        var i = al(aT);
        i.left = j(e[0]);
        i.top = j(e[1])
    }
    function B(aT, i) {
        var e = al(aT);
        e.opacity = i;
        e.MozOpacity = i;
        e.KhtmlOpacity = i;
        e.filter = "alpha(opacity=" + (i * 100) + ")";
        e = null
    }
    function j(aT) {
        if (typeof aT == "number") {
            return aT + "px"
        } else {
            if (typeof aT == "string") {
                var i = /"\\s","g"/;
                var aU = /"^\\d+(px|%)+$","i"/;
                var e = aT.replace(i, "");
                if (aU.exec(e)) {
                    return e
                }
                var aV = new RegExp("^\\d+$");
                if (aV.exec(e)) {
                    return e + "px"
                }
                return "0px"
            }
        }
    }
    function p(e) {
        if (l.Browser.ie > 0) {
            e.unselectable = "on";
            e.selectstart = function () {
                return false
            }
        } else {
            al(e).MozUserSelect = "none"
        }
    }
    function aP(aT, e) {
        var i = al(aT);
        i.width = j(e[0]);
        i.height = j(e[1])
    }
    function s(e) {
        return e && e.parentNode && e.parentNode.nodeType != 11
    }
    function Z(i, e) {
        i.insertAdjacentHTML("beforeEnd", e);
        return i.lastChild
    }
    function A(e) {
        var i = {
            left: 0,
            top: 0
        };
        while (e && e.offsetParent) {
            i.left += e.offsetLeft;
            i.top += e.offsetTop;
            e = e.offsetParent
        }
        return i
    }
    function ag(i) {
        var i = window.event || i;
        i.stopPropagation ? i.stopPropagation() : i.cancelBubble = true
    }
    function D(i) {
        var i = window.event || i;
        i.preventDefault ? i.preventDefault() : i.returnValue = false;
        return false
    }
    function aC(i) {
        ag(i);
        return D(i)
    }
    function M() {
        var e = document.documentElement,
            i = document.body;
        if (e && (e.scrollTop || e.scrollLeft)) {
            return [e.scrollTop, e.scrollLeft]
        } else {
            if (i) {
                return [i.scrollTop, i.scrollLeft]
            } else {
                return [0, 0]
            }
        }
    }
    function o(aV) {
        if (!aV) {
            return
        }
        var aT = aV.attributes,
            aU, e, aW;
        if (aT) {
            e = aT.length;
            for (aU = 0; aU < e; aU += 1) {
                aW = aT[aU].name;
                if (typeof aV[aW] === "function") {
                    aV[aW] = null
                }
            }
        }
        aT = aV.children;
        if (aT) {
            e = aT.length;
            for (aU = 0; aU < e; aU += 1) {
                o(aV.children[aU])
            }
        }
    }
    function aO(i, aX, aW) {
        var aV = aX.lng - aW.lng;
        var aU = aX.lat - aW.lat;
        if (aV == 0) {
            return Math.abs(i.lng - aX.lng)
        }
        if (aU == 0) {
            return Math.abs(i.lat - aX.lat)
        }
        var aT = aU / aV;
        var e = aX.lat - aT * aX.lng;
        return Math.abs(aT * i.lng - i.lat + e) / Math.sqrt(aT * aT + 1)
    }
    function v(i, e) {
        if (!i || !e) {
            return
        }
        return Math.round(Math.sqrt(Math.pow(i.x - e.x, 2) + Math.pow(i.y - e.y, 2)))
    }
    function aB(e, aT) {
        var i = [];
        aT = aT ||
        function (aV) {
            return aV
        };
        for (var aU in e) {
            i.push(aU + "=" + aT(e[aU]))
        }
        return i.join("&")
    }
    function t(aT, i, aW) {
        var aX = document.createElement(aT);
        if (aW) {
            aX = document.createElementNS(aW, aT)
        }
        i = i || {};
        for (var aU in i) {
            var aV = {
                "for": "htmlFor",
                "class": "cssClass"
            }[aU] || aU;
            if (aU == "style") {
                aX.style.cssText = i[aU];
                continue
            }
            if (aU == "class") {
                l.ac(aX, i[aU]);
                continue
            }
            if (aX.setAttribute) {
                aX.setAttribute(aV, i[aU])
            } else {
                try {
                    aX[aV] = i[aU]
                } catch (aX) {}
            }
        }
        return aX
    }
    function an(e) {
        if (e.currentStyle) {
            return e.currentStyle
        } else {
            if (e.ownerDocument && e.ownerDocument.defaultView) {
                return e.ownerDocument.defaultView.getComputedStyle(e, null)
            }
        }
    }
    function av(e) {
        return typeof e == "function"
    }
    var aS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    function aa(aV) {
        var aT = "";
        var a2, a0, aY = "";
        var a1, aZ, aX, aW = "";
        var aU = 0;
        var e = /[^A-Za-z0-9\+\/\=]/g;
        if (!aV || e.exec(aV)) {
            return aV
        }
        aV = aV.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do {
            a1 = aS.indexOf(aV.charAt(aU++));
            aZ = aS.indexOf(aV.charAt(aU++));
            aX = aS.indexOf(aV.charAt(aU++));
            aW = aS.indexOf(aV.charAt(aU++));
            a2 = (a1 << 2) | (aZ >> 4);
            a0 = ((aZ & 15) << 4) | (aX >> 2);
            aY = ((aX & 3) << 6) | aW;
            aT = aT + String.fromCharCode(a2);
            if (aX != 64) {
                aT = aT + String.fromCharCode(a0)
            }
            if (aW != 64) {
                aT = aT + String.fromCharCode(aY)
            }
            a2 = a0 = aY = "";
            a1 = aZ = aX = aW = ""
        } while (aU < aV.length);
        return aT
    }
    var aQ = {
        imgPath: "http://api.map.baidu.com/images/",
        cityNames: {
            "\u5317\u4eac": "bj",
            "\u4e0a\u6d77": "sh",
            "\u6df1\u5733": "sz",
            "\u5e7f\u5dde": "gz"
        }
    };
    if (l.Browser.firefox) {
        l.extend(aQ, {
            distCursor: "url(" + aQ.imgPath + "ruler.cur),crosshair",
            defaultCursor: "-moz-grab",
            draggingCursor: "-moz-grabbing"
        })
    } else {
        if (l.Browser.chrome || l.Browser.safari) {
            l.extend(aQ, {
                distCursor: "url(" + aQ.imgPath + "ruler.cur) 2 6,crosshair",
                defaultCursor: "url(" + aQ.imgPath + "openhand.cur) 8 8,default",
                draggingCursor: "url(" + aQ.imgPath + "closedhand.cur) 8 8,move"
            })
        } else {
            l.extend(aQ, {
                distCursor: "url(" + aQ.imgPath + "ruler.cur),crosshair",
                defaultCursor: "url(" + aQ.imgPath + "openhand.cur),default",
                draggingCursor: "url(" + aQ.imgPath + "closedhand.cur),move"
            })
        }
    }
    window.BMap = window.BMap || {};
    window.BMap.version = "1.1";
    window.BMap._register = [];
    window.BMap.register = function (e) {
        this._register.push(e)
    };
    window.BMap.apiLoad = window.BMap.apiLoad ||
    function () {};

    function C(aU, aW) {
        aU = l.G(aU);
        if (!aU) {
            return
        }
        E.call(this);
        this.container = aU;
        this._setStyle(aU);
        aU.unselectable = "on";
        aU.innerHTML = "";
        aU.appendChild(this.render());
        this.width = 0;
        this.height = 0;
        this.offsetX = 0;
        this.offsetY = 0;
        this.platform = aU.children[0];
        this.maskLayer = this.platform.children[0];
        this._panes = {};
        this._viewTiles = {};
        this._bind();
        this.centerPoint = new f(0, 0);
        this.zoomLevel = 1;
        this.lastLevel = 0;
        this.defaultZoomLevel = null;
        this.defaultCenter = null;
        this.currentCity = "";
        this.cityCode = "";
        this.currentOperation = 0;
        this.config = {
            clickInterval: 200,
            enableDragging: true,
            enableKeyboard: false,
            enableClickPan: false,
            enableDblclickZoom: true,
            enableContinuousZoom: false,
            enableWheelZoom: false,
            enableMouseDown: true,
            fps: 25,
            zoomerDuration: 240,
            actionDuration: 450,
            defaultCursor: aQ.defaultCursor,
            draggingCursor: aQ.draggingCursor,
            isOverviewMap: false,
            zoomLevelMin: 1,
            zoomLevelMax: 18,
            coordType: BMAP_COORD_LNGLAT,
            mapType: BMAP_NORMAL_MAP,
            restrictBounds: false,
            drawer: BMAP_SYS_DRAWER,
            enableInertialDragging: false,
            drawMargin: 500,
            enableFulltimeSpotClick: false
        };
        this.setConfig(aW);
        if (!aJ[this.config.mapType]) {
            this.config.mapType = BMAP_NORMAL_MAP
        }
        if (this.config.mapType == BMAP_PERSPECTIVE_MAP) {
            _addStat(5002)
        }
        aW = aW || {};
        this.config.zoomLevelMin = aW.zoomLevelMin || aJ[this.config.mapType].zoomLevelMin;
        this.config.zoomLevelMax = aW.zoomLevelMax || aJ[this.config.mapType].zoomLevelMax;
        this.mapType = this.config.mapType;
        this.temp = {
            operating: false,
            arrow: 0,
            lastDomMoveTime: 0,
            lastLoadTileTime: 0,
            lastMovingTime: 0,
            canKeyboard: false,
            I: function (i) {
                return l.I(i)
            },
            curSpots: [],
            curSpotsArray: [],
            spotsGuid: 1,
            registerIndex: -1
        };
        window.InstanceCore = this.temp.I;
        this.platform.style.cursor = this.config.defaultCursor;
        if (l.Browser.ie) {
            try {
                document.execCommand("BackgroundImageCache", false, true)
            } catch (aT) {}
        }
        for (var e = 0; e < BMap._register.length; e++) {
            BMap._register[e](this)
        }
        this.temp.registerIndex = e;
        var aV = this;
        if (l.Platform.windows || l.Platform.macintosh || l.Platform.x11) {
            aq.load("oppc", function () {
                aV._asyncRegister()
            })
        }
        if (l.Platform.iphone || l.Platform.ipad || l.Platform.android) {
            aq.load("opmb", function () {
                aV._asyncRegister()
            })
        }
        aU = null
    }
    C.inherits(E, "Map");
    l.extend(C.prototype, {
        render: function () {
            var e = t("div", {
                id: "platform"
            });
            var aU = e.style;
            aU.overflow = "visible";
            aU.position = "absolute";
            aU.zIndex = "0";
            aU.top = aU.left = "0px";
            var i = t("div", {
                id: "mask",
                "class": "BMap_mask"
            });
            var aT = i.style;
            aT.position = "absolute";
            aT.top = aT.left = "0px";
            aT.zIndex = "9";
            aT.overflow = "hidden";
            aT.WebkitUserSelect = "none";
            e.appendChild(i);
            return e
        },
        _setStyle: function (i) {
            var e = i.style;
            e.overflow = "hidden";
            if (an(i).position != "absolute") {
                e.position = "relative";
                e.zIndex = 0
            }
            e.backgroundImage = "url(" + aQ.imgPath + "bg.png)";
            e.color = "#000";
            e.textAlign = "left"
        },
        _bind: function () {
            var e = this;
            e._watchSize = function () {
                var aT = e.getSize();
                if (e.width != aT.width || e.height != aT.height) {
                    var aX = (aT.width - e.width) / 2;
                    var aZ = (aT.height - e.height) / 2;
                    var aU = e.getZoomUnits();
                    var aW = e.centerPoint;
                    if (aW) {
                        e.centerPoint = new f(aW.lng + aX * aU, aW.lat - aZ * aU)
                    }
                    e.maskLayer.style.width = (e.width = aT.width) + "px";
                    e.maskLayer.style.height = (e.height = aT.height) + "px";
                    if (e.divhs) {
                        e.divhs.style.width = (e.width = aT.width) + "px";
                        e.divhs.style.height = (e.height = aT.height) + "px"
                    }
                    var aV = new aw("onresize");
                    aV.size = aT;
                    e.dispatchEvent(aV);
                    var i = parseInt(e.platform.style.left) || 0;
                    var aY = parseInt(e.platform.style.top) || 0;
                    if (e.currentOperation != "undefined" && e.currentOperation != 0 && (e.offsetX != i || e.offsetY != aY)) {
                        e._setPlatformPosition(i, aY)
                    }
                }
            };
            e._watchSize();
            setInterval(e._watchSize, 80)
        },
        _setPlatformPosition: function (a2, a0, aU, a3) {
            if (isNaN(a2) || isNaN(a0)) {
                return
            }
            if (this.offsetX == a2 && this.offsetY == a0) {
                return
            }
            var aV = this.offsetX - a2;
            var aT = this.offsetY - a0;
            var aW = this.getZoomUnits();
            var a1 = this.centerPoint.lng;
            var aZ = this.centerPoint.lat;
            var aY = new f(a1, aZ);
            this.centerPoint = new f(aY.lng + aV * aW, aY.lat - aT * aW);
            if (aU) {
                this.centerPoint = aU
            }
            if (this.config.restrictBounds) {
                var i = aJ[this.mapType].bounds;
                if (this.centerPoint.lng - this.width / 2 * aW <= i.minX && aV < 0 || this.centerPoint.lng + this.width / 2 * aW > i.maxX && aV >= 0) {
                    a2 = this.offsetX
                }
                if (this.centerPoint.lat - this.height / 2 * aW <= i.minY && aT >= 0 || this.centerPoint.lat + this.height / 2 * aW > i.maxY && aT < 0) {
                    a0 = this.offsetY
                }
                this.centerPoint = new f(aY.lng + (this.offsetX - a2) * aW, aY.lat - (this.offsetY - a0) * aW);
                var aX = new aw("onreachbounds");
                this.dispatchEvent(aX)
            }
            a2 = Math.round(a2);
            a0 = Math.round(a0);
            this.offsetX = a2;
            this.offsetY = a0;
            this.platform.style.left = a2 + "px";
            this.platform.style.top = a0 + "px";
            this.maskLayer.style.left = -a2 + "px";
            this.maskLayer.style.top = -a0 + "px";
            if (this.divhs) {
                this.divhs.style.left = -a2 + "px";
                this.divhs.style.top = -a0 + "px"
            }
            if (a3 != false) {
                this.dispatchEvent(new aw("onmoving"))
            }
        },
        zoomTo: function (aX, i) {
            if (typeof aX != "number") {
                return
            }
            var aW = aJ[this.mapType];
            if (!aW) {
                return
            }
            aX = this._getProperZoom(aX).zoom;
            if (aX == this.zoomLevel) {
                return
            }
            this.lastLevel = this.zoomLevel;
            if (i) {
                this.temp._cPoint = i;
                this.temp._cPixel = this.pointToPixel(i)
            } else {
                if (this.getInfoWindow()) {
                    var aV = this.getInfoWindow().getPoint();
                    this.temp._cPixel = this.pointToPixel(aV);
                    this.temp._cPoint = aV
                }
            }
            if (i || this.temp.infoWin && this.temp.infoWin.isOpen()) {
                var aT = this.config.coordType == BMAP_COORD_LNGLAT ? ar.convertLL2MC(this.temp._cPoint) : this.temp._cPoint;
                var e = this.temp._cPixel;
                var aU = this.getZoomUnits(aX);
                this.centerPoint = new f(aT.lng + aU * (this.width / 2 - e.x), aT.lat - aU * (this.height / 2 - e.y))
            }
            this.dispatchEvent(new aw("onzoomstart"));
            this.dispatchEvent(new aw("onzoomstartcode"));
            this.zoomLevel = aX
        },
        zoomIn: function (e) {
            this.zoomTo(this.zoomLevel + 1, e)
        },
        zoomOut: function (e) {
            this.zoomTo(this.zoomLevel - 1, e)
        },
        panTo: function (i, aU, aV) {
            if (!i || i.toString() != "Point") {
                return
            }
            var aT = this.pointToPixel(i);
            i = this.config.coordType == BMAP_COORD_LNGLAT ? V.convertLL2MC(i) : i;
            i = this.mapType == BMAP_PERSPECTIVE_MAP ? V.convert2DTo3D(this.currentCity, i) : i;
            var e = Math.round(this.width / 2);
            var aW = Math.round(this.height / 2);
            if (Math.abs(e - aT.x) > this.width || Math.abs(aW - aT.y) > this.height || aU == true) {
                this._panTo(e - aT.x, aW - aT.y, i)
            } else {
                this._panBy(e - aT.x, aW - aT.y, {
                    duration: aV
                })
            }
        },
        _panTo: function (i, e, aU) {
            var aT = this.temp;
            if (aT.operating == true) {
                return
            }
            if (aT.dragAni) {
                aT.dragAni.stop();
                aT.dragAni = null;
                this.dispatchEvent(new aw("onmoveend"))
            }
            this.dispatchEvent(new aw("onmovestart"));
            this._setPlatformPosition(this.offsetX + i, this.offsetY + e, aU);
            this.dispatchEvent(new aw("onmoveend"))
        },
        panBy: function (i, e) {
            i = Math.round(i) || 0;
            e = Math.round(e) || 0;
            if (Math.abs(i) <= this.width && Math.abs(e) <= this.height && !arguments[3]) {
                this._panBy(i, e, {
                    fps: arguments[2]
                })
            } else {
                this._panTo(i, e)
            }
        },
        _panBy: function (i, e, aV) {
            if (this.temp.operating == true) {
                return
            }
            aV = aV || {};
            this.dispatchEvent(new aw("onmovestart"));
            var aU = this,
                aT = aU.temp;
            aT.pl = aU.offsetX;
            aT.pt = aU.offsetY;
            if (aT.tlPan) {
                aT.tlPan.cancel()
            }
            if (aT.dragAni) {
                aT.dragAni.stop();
                aT.dragAni = null;
                this.dispatchEvent(new aw("onmoveend"))
            }
            aT.tlPan = new aG({
                fps: aV.fps || aU.config.fps,
                duration: aV.duration || aU.config.actionDuration,
                transition: aV.transition || k.easeInOutQuad,
                render: function (aW) {
                    this.terminative = aU.temp.operating;
                    if (aU.temp.operating) {
                        return
                    }
                    aU._setPlatformPosition(aT.pl + Math.ceil(i * aW), aT.pt + Math.ceil(e * aW))
                },
                finish: function (aW) {
                    aU.dispatchEvent(new aw("onmoveend"));
                    aU.temp.tlPan = false;
                    if (aU.temp.stopArrow == true) {
                        aU.temp.stopArrow = false;
                        if (aU.temp.arrow != 0) {
                            aU._arrow()
                        }
                    }
                }
            })
        },
        addControl: function (e) {
            if (e && av(e._i)) {
                e._i(this);
                this.dispatchEvent(new aw("onaddcontrol", e))
            }
        },
        removeControl: function (e) {
            if (e && av(e.remove)) {
                e.remove();
                this.dispatchEvent(new aw("onremovecontrol", e))
            }
        },
        addContextMenu: function (e) {
            if (e && e._type == "contextmenu" && typeof e.initialize == "function") {
                e.initialize(this);
                this.dispatchEvent(new aw("onaddcontextmenu", e))
            }
        },
        removeContextMenu: function (e) {
            if (e && e._type == "contextmenu" && typeof e.remove == "function") {
                this.dispatchEvent(new aw("onremovecontextmenu", e));
                e.remove()
            }
        },
        addOverlay: function (e) {
            if (e && av(e._i)) {
                e._i(this);
                this.dispatchEvent(new aw("onaddoverlay", e))
            }
        },
        removeOverlay: function (e) {
            if (e && av(e.remove)) {
                e.remove();
                this.dispatchEvent(new aw("onremoveoverlay", e))
            }
        },
        clearOverlays: function () {
            this.dispatchEvent(new aw("onclearoverlays"))
        },
        addTileLayer: function (e) {
            for (var aU = 0; aU < this.tileMgr.tileLayers.length; aU++) {
                var aT = this.tileMgr.tileLayers[aU];
                if (aT == e || aT.getMapType() == e.getMapType()) {
                    return
                } else {
                    if (e.baseLayer == true) {
                        aT.baseLayer = false;
                        aT.zIndex = aU
                    }
                }
            }
            if (e && e._type == "tilelayer" && av(e.initialize)) {
                e.initialize(this);
                this.dispatchEvent(new aw("onaddtilelayer", e))
            }
        },
        removeTileLayer: function (e) {
            if (e && e._type == "tilelayer" && av(e.remove)) {
                e.remove();
                this.dispatchEvent(new aw("onremovetilelayer", e))
            }
        },
        getTileLayer: function (e) {
            if (this.tileMgr) {
                return this.tileMgr.getTileLayer(e)
            }
            return
        },
        setMapType: function (i) {
            if (this.mapType == i) {
                return
            }
            var e = this;
            if (e._changeMapType) {
                e._changeMapType(i)
            } else {
                aq.load("3dmap", function () {
                    e._asyncRegister();
                    e._changeMapType(i)
                })
            }
        },
        getTileId: function (e, aW) {
            var aU = aJ[this.mapType];
            if (typeof aU != "object") {
                return null
            }
            var i = aU.baseUnits * Math.pow(2, (aU.zoomLevelMax - aW));
            var aV = parseInt(e.lng / i);
            var aT = parseInt(e.lat / i);
            return {
                row: aV,
                column: aT,
                level: aW
            }
        },
        getViewTiles: function () {
            var i = this;
            var e = this._viewTiles[i.mapType];
            return e
        },
        setCenter: function (e) {
            this.panTo(e, true)
        },
        centerAndZoom: function (i, aX, aT) {
            if (!i || !aX) {
                return
            }
            aX = this._getProperZoom(aX).zoom;
            this.lastLevel = this.zoomLevel || aX;
            this.zoomLevel = aX;
            var aV = new aw("onload");
            aV.point = i;
            aV.zoom = aX;

            function aW(a4, a3, aZ) {
                a4.centerPoint = new f(aZ.lng, aZ.lat);
                a4.defaultZoomLevel = a4.defaultZoomLevel || a4.zoomLevel;
                a4.defaultCenter = a4.defaultCenter || a4.centerPoint;
                var aY = a4.tileMgr && a4.tileMgr.tileLayers.length;
                if (!a4.loaded && !aY) {
                    var a2 = new y(-21364736, -10616832, 23855104, 15859712);
                    var a1 = new af("baidu", a2, "\u767e\u5ea6\u5730\u56fe");
                    var a0 = new F({
                        mapType: a4.mapType,
                        copyright: a1
                    });
                    a0.baseLayer = true;
                    a4.addTileLayer(a0)
                }
                a3.pixel = a4.pointToPixel(a4.centerPoint, a4.zoomLevel, true);
                a4.dispatchEvent(a3)
            }
            if (!aT) {
                if (this.config.coordType == BMAP_COORD_LNGLAT) {
                    i = this.config.coordType == BMAP_COORD_LNGLAT ? V.convertLL2MC(i) : i
                }
                var aU = this;
                this._setCorrectPts();
                if (this.mapType == BMAP_PERSPECTIVE_MAP && !this._get3DHotspots) {
                    i = aU.mapType == BMAP_PERSPECTIVE_MAP ? V.convert2DTo3D(aU.currentCity, i) : i;
                    aW(aU, aV, i);
                    aU.config.zoomLevelMin = 15;
                    aU.config.zoomLevelMax = 20;
                    aq.load("3dmap", function () {
                        aU.temp.overlayDiv.appendChild(aU.divhs);
                        aU._clear3DHotspots();
                        aU._asyncRegister();
                        if (!aU.loaded) {
                            aU.addEventListener("zoomend", aU._get3DHotspots);
                            aU.addEventListener("moveend", aU._get3DHotspots)
                        }
                        aU._get3DHotspots();
                        return
                    })
                } else {
                    i = this.mapType == BMAP_PERSPECTIVE_MAP ? V.convert2DTo3D(this.currentCity, i) : i;
                    if (this.mapType == BMAP_PERSPECTIVE_MAP) {
                        this._get3DHotspots()
                    }
                }
            }
            if (this.mapType == BMAP_NORMAL_MAP || (this.mapType == BMAP_PERSPECTIVE_MAP && this._get3DHotspots)) {
                aW(this, aV, i)
            }
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
        enableClickPan: function (e) {
            this.config.enableClickPan = !! e
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
        getSize: function () {
            var e = new X(this.container.clientWidth, this.container.clientHeight);
            return e
        },
        getCenter: function () {
            var e = this.centerPoint;
            if (this.config.coordType == BMAP_COORD_LNGLAT) {
                if (this.mapType == BMAP_PERSPECTIVE_MAP) {
                    e = V.convert3DTo2D(this.currentCity, e)
                }
                e = ar.convertMC2LL(e)
            } else {
                if (this.mapType == BMAP_PERSPECTIVE_MAP) {
                    e = V.convert3DTo2D(this.currentCity, e)
                }
            }
            return e
        },
        getZoom: function () {
            return this.zoomLevel
        },
        _getProperZoom: function (aT) {
            var i = this.config.zoomLevelMin,
                e = this.config.zoomLevelMax,
                aU = false;
            if (aT < i) {
                aU = true;
                aT = i
            }
            if (aT > e) {
                aU = true;
                aT = e
            }
            return {
                zoom: aT,
                exceeded: aU
            }
        },
        getContainer: function () {
            return this.container
        },
        getZoomUnits: function (aT) {
            var e = aJ[this.mapType];
            if (typeof e != "object") {
                return null
            }
            var i = aT || this.zoomLevel;
            return Math.pow(2, (e.zoomLevelMax - i)) * e.baseUnits / e.tileSize
        },
        pointToPixel: function (i, aW, aU) {
            if (!i) {
                return
            }
            if (!aU) {
                i = this.config.coordType == BMAP_COORD_LNGLAT ? V.convertLL2MC(i) : i;
                i = this.mapType == BMAP_PERSPECTIVE_MAP ? V.convert2DTo3D(this.currentCity, i) : i
            }
            var aT = this.getZoomUnits(aW);
            var e = Math.round((i.lng - this.centerPoint.lng) / aT + this.width / 2);
            var aV = Math.round((this.centerPoint.lat - i.lat) / aT + this.height / 2);
            return new aK(e, aV)
        },
        pixelToPoint: function (aW, aY, aT) {
            if (!aW) {
                return
            }
            var i = this.getZoomUnits(aY);
            var aV = this.centerPoint.lng + i * (aW.x - this.width / 2);
            var aX = this.centerPoint.lat - i * (aW.y - this.height / 2);
            var e = new f(aV, aX);
            if (!aT) {
                if (this.mapType == BMAP_PERSPECTIVE_MAP) {
                    if (this.config.coordType == BMAP_COORD_LNGLAT) {
                        var aU = V.convert3DTo2D(this.currentCity, e);
                        e = V.convertMC2LL(aU)
                    } else {
                        e = this.mapType == BMAP_PERSPECTIVE_MAP ? V.convert3DTo2D(this.currentCity, e) : e
                    }
                } else {
                    if (this.config.coordType == BMAP_COORD_LNGLAT) {
                        e = this.config.coordType == BMAP_COORD_LNGLAT ? V.convertMC2LL(e) : e
                    }
                }
            }
            return e
        },
        pointToOverlayPixel: function (e, aU, i) {
            var aT = this.pointToPixel(e, aU, i);
            if (!aT) {
                return
            }
            aT.x -= this.offsetX;
            aT.y -= this.offsetY;
            return aT
        },
        overlayPixelToPoint: function (e, aT) {
            if (!e) {
                return
            }
            var i = new aK(e.x, e.y);
            i.x += this.offsetX;
            i.y += this.offsetY;
            return this.pixelToPoint(i, aT)
        },
        lnglatToMercator: function (i, aU) {
            var e = new f(i, aU);
            var aT = V.convertLL2MC(e);
            return [aT.lng, aT.lat]
        },
        mercatorToLnglat: function (aT, i) {
            if (isNaN(aT) || isNaN(i)) {
                return []
            }
            aT = parseFloat(aT);
            i = parseFloat(i);
            var aU = new f(aT, i);
            var e = V.convertMC2LL(aU);
            return [e.lng, e.lat]
        },
        getBounds: function () {
            if (!this.isLoaded()) {
                return new y()
            }
            var e = arguments[0] || {},
                aT = e.margins || [0, 0, 0, 0],
                aV = e.level || null,
                aU = this.pixelToPoint({
                    x: aT[3],
                    y: this.height - aT[2]
                }, aV, true),
                i = this.pixelToPoint({
                    x: this.width - aT[1],
                    y: aT[0]
                }, aV, true);
            if (this.config.coordType == BMAP_COORD_LNGLAT) {
                aU = V.convertMC2LL(aU);
                i = V.convertMC2LL(i)
            }
            if (this.mapType == BMAP_PERSPECTIVE_MAP) {
                aU = V.convert3DTo2D(this.currentCity, aU);
                i = V.convert3DTo2D(this.currentCity, i)
            }
            return new y(aU.lng, aU.lat, i.lng, i.lat)
        },
        setConfig: function (e) {
            if (!e) {
                return
            }
            for (var i in e) {
                if (typeof this.config[i] == typeof e[i]) {
                    this.config[i] = e[i]
                }
            }
        },
        isLoaded: function () {
            return !!this.loaded
        },
        _getBestLevel: function (i, aT) {
            var aX = aJ[this.mapType];
            if (!aX) {
                return this.getZoom()
            }
            var aY = aT.margins || [10, 10, 10, 10],
                aV = aT.zoomFactor || 0,
                aZ = aY[1] + aY[3],
                aW = aY[0] + aY[2],
                e = aX.zoomLevelMin,
                a1 = aX.zoomLevelMax;
            for (var aU = a1; aU >= e; aU--) {
                var a0 = this.getZoomUnits(aU);
                if ((i.maxX - i.minX) / a0 < this.width - aZ && (i.maxY - i.minY) / a0 < this.height - aW) {
                    break
                }
            }
            aU += aV;
            if (aU < e) {
                aU = e
            }
            if (aU > a1) {
                aU = a1
            }
            return aU
        },
        getViewport: function (a3, aT) {
            var a5 = {
                center: this.getCenter(),
                zoom: this.getZoom()
            };
            if (!a3 || a3.length == 0) {
                return a5
            }
            aT = aT || {};
            var aX = [];
            var a1 = [];
            if (this.config.coordType == BMAP_COORD_LNGLAT) {
                for (var aY = 0, aW = a3.length; aY < aW; aY++) {
                    aX.push(ar.convertLL2MC(a3[aY]))
                }
            } else {
                aX = a3
            }
            if (this.mapType != BMAP_PERSPECTIVE_MAP) {
                a1 = aX
            } else {
                for (var aY = 0, aW = aX.length; aY < aW; aY++) {
                    a1.push(ar.convert2DTo3D(this.currentCity, aX[aY]))
                }
            }
            var aU = new y();
            for (var aY = a1.length - 1; aY >= 0; aY--) {
                aU.extend(a1[aY])
            }
            if (aU.isEmpty()) {
                return a5
            }
            var e = aU.getCenter();
            var a4 = this._getBestLevel(aU, aT);
            if (aT.margins) {
                var a0 = aT.margins,
                    aZ = (a0[1] - a0[3]) / 2,
                    a2 = (a0[0] - a0[2]) / 2,
                    aV = this.getZoomUnits(a4);
                e.lng = e.lng + aV * aZ;
                e.lat = e.lat + aV * a2
            }
            if (this.mapType == BMAP_PERSPECTIVE_MAP) {
                e = ar.convert3DTo2D(this.currentCity, e)
            }
            if (this.config.coordType == BMAP_COORD_LNGLAT) {
                e = ar.convertMC2LL(e)
            }
            return {
                center: e,
                zoom: a4
            }
        },
        setViewport: function (i, aV) {
            var e;
            if (i && i.center) {
                e = i
            } else {
                e = this.getViewport(i, aV)
            }
            aV = aV || {};
            var aT = aV.delay || 200;
            if (e.zoom == this.zoomLevel && aV.enableAnimation != false) {
                var aU = this;
                setTimeout(function () {
                    aU.panTo(e.center, false, 210)
                }, aT)
            } else {
                this.centerAndZoom(e.center, e.zoom)
            }
        },
        addSpots: function (i, aU) {
            if (!i || i.length == 0) {
                return
            }
            aU = aU || {};
            var aW = aU.zIndex || 0,
                aV = typeof aU.enableMultiResponse == "undefined" ? true : !! aU.enableMultiResponse;
            this.spotsPool = this.spotsPool || {};
            var e = "sp" + (this.temp.spotsGuid++);
            this.spotsPool[e] = {
                spots: i.slice(0),
                zIndex: aW,
                enableMultiResponse: aV
            };
            var aT = this;
            aq.load("hotspot", function () {
                aT._asyncRegister()
            });
            return e
        },
        getSpots: function (e) {
            return this.spotsPool[e] && this.spotsPool[e].spots || []
        },
        removeSpots: function (e) {
            if (!e || !this.spotsPool[e]) {
                return
            }
            delete this.spotsPool[e]
        },
        clearSpots: function () {
            delete this.spotsPool
        },
        setBounds: function (e) {
            aJ[this.mapType].bounds = new y(e.minX, e.minY, e.maxX, e.maxY)
        },
        getCoordType: function () {
            return this.config.coordType
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
        getDistance: function (aT, e) {
            if (!aT || !e) {
                return
            }
            var i = 0;
            if (this.config.coordType == BMAP_COORD_LNGLAT) {
                i = V.getDistanceByLL(aT, e)
            } else {
                i = V.getDistanceByMC(aT, e)
            }
            return i
        },
        getOverlays: function () {
            var aV = [],
                aW = this._overlays,
                aU = this._customOverlays;
            if (aW) {
                for (var aT in aW) {
                    if (aW[aT] instanceof aF) {
                        aV.push(aW[aT])
                    }
                }
            }
            if (aU) {
                for (var aT = 0, e = aU.length; aT < e; aT++) {
                    aV.push(aU[aT])
                }
            }
            return aV
        },
        getMapType: function () {
            return this.mapType
        },
        _asyncRegister: function () {
            for (var e = this.temp.registerIndex; e < BMap._register.length; e++) {
                BMap._register[e](this)
            }
            this.temp.registerIndex = e
        },
        _setCorrectPts: function () {
            var i = aJ[BMAP_PERSPECTIVE_MAP].citys;
            for (var aU in i) {
                var aT = i[aU][1];
                var e = i[aU][0];
                if (aU == this.currentCity) {
                    if (this.mapType == BMAP_PERSPECTIVE_MAP) {
                        this.setBounds(e)
                    }
                    break
                }
            }
        },
        setCurrentCity: function (aT) {
            var e = this;
            if (this.mapType == BMAP_PERSPECTIVE_MAP) {
                aq.load("3dmap", function () {
                    e._asyncRegister();
                    e.addEventListener("zoomend", e._get3DHotspots);
                    e.addEventListener("moveend", e._get3DHotspots)
                })
            }
            if (this._clear3DHotspots) {
                this._clear3DHotspots()
            }
            var i = aJ[BMAP_PERSPECTIVE_MAP].citys;
            this.currentCity = this._get3DCityCode(aT);
            this.cityCode = i[this.currentCity][2];
            this._setCorrectPts()
        },
        _get3DCityCode: function (e) {
            if (!e) {
                return "bj"
            }
            var i = aQ.cityNames;
            for (var aT in i) {
                if (e.search(aT) > -1) {
                    return i[aT]
                }
            }
            return "bj"
        },
        setDefaultCursor: function (e) {
            this.config.defaultCursor = e;
            if (this.platform) {
                this.platform.style.cursor = this.config.defaultCursor
            }
        },
        getDefaultCursor: function () {
            return this.config.defaultCursor
        },
        setDraggingCursor: function (e) {
            this.config.draggingCursor = e
        },
        getDraggingCursor: function () {
            return this.config.draggingCursor
        }
    });
    window.BMAP_API_VERSION = "1.1";
    window.BMAP_NORMAL_MAP = "B_NORMAL_MAP";
    window.BMAP_PERSPECTIVE_MAP = "B_DIMENSIONAL_MAP";
    window.BMAP_COORD_LNGLAT = 0;
    window.BMAP_COORD_MERCATOR = 1;
    window.BMAP_SYS_DRAWER = 0;
    window.BMAP_SVG_DRAWER = 1;
    window.BMAP_VML_DRAWER = 2;
    window.BMAP_CANVAS_DRAWER = 3;
    window._addStat = function (aX, aW) {
        if (!aX) {
            return
        }
        aW = aW || {};
        var aV = "";
        for (var aT in aW) {
            aV = aV + "&" + aT + "=" + encodeURIComponent(aW[aT])
        }
        var aY = function (i) {
            if (!i) {
                return
            }
            _addStat._sending = true;
            setTimeout(function () {
                _addStat._img.src = "http://api.map.baidu.com/images/blank.gif?" + i.src
            }, 50)
        };
        var e = function () {
            var i = _addStat._reqQueue.shift();
            if (i) {
                aY(i)
            }
        };
        var aU = (Math.random() * 100000000).toFixed(0);
        if (_addStat._sending) {
            _addStat._reqQueue.push({
                src: "t=" + aU + "&code=" + aX + aV
            })
        } else {
            aY({
                src: "t=" + aU + "&code=" + aX + aV
            })
        }
        if (!_addStat._binded) {
            l.on(_addStat._img, "load", function () {
                _addStat._sending = false;
                e()
            });
            l.on(_addStat._img, "error", function () {
                _addStat._sending = false;
                e()
            });
            _addStat._binded = true
        }
    };
    window._addStat._reqQueue = [];
    window._addStat._img = new Image();
    var az = 5000;
    _addStat(az);
    var aJ = {
        B_NORMAL_MAP: {
            tileUrls: ["http://q1.baidu.com/it/", "http://q2.baidu.com/it/", "http://q3.baidu.com/it/", "http://q4.baidu.com/it/", "http://q5.baidu.com/it/", "http://q6.baidu.com/it/", "http://q7.baidu.com/it/", "http://q8.baidu.com/it/"],
            tileSize: 256,
            baseUnits: 256,
            zoomLevelMin: 1,
            zoomLevelMax: 18,
            errorUrl: aQ.imgPath + "bg.png",
            bounds: new y(-21364736, -10616832, 23855104, 15859712),
            imgExtend: "png"
        },
        B_DIMENSIONAL_MAP: {
            tileUrls: ["http://d0.map.baidu.com/resource/mappic/", "http://d1.map.baidu.com/resource/mappic/", "http://d2.map.baidu.com/resource/mappic/", "http://d3.map.baidu.com/resource/mappic/"],
            tileSize: 256,
            baseUnits: 256,
            zoomLevelMin: 15,
            zoomLevelMax: 20,
            errorUrl: aQ.imgPath + "bg.png",
            bounds: new y(-21364736, -10616832, 23855104, 15859712),
            imgExtend: "jpg",
            hotspotUrl: ["http://d0.map.baidu.com/resource/js/map/", "http://d1.map.baidu.com/resource/js/map/", "http://d2.map.baidu.com/resource/js/map/", "http://d3.map.baidu.com/resource/js/map/"],
            entityUrl: "http://d0.map.baidu.com/resource/js/entity/",
            citys: {
                bj: [new y(524288, 9363456, 727040, 9474048), new y(12821123.68, 4784960.94, 12958550, 4862821.56), 2],
                gz: [new y(1048576, 8857601, 1157119, 8949760), new y(12589292.4, 2591556.62, 12646784.64, 2647562.86), 1],
                sz: [new y(524288, 9375745, 668415, 9474048), new y(12668344.21, 2560434.57, 12710864.02, 2587497.06), 14],
                sh: [new y(983040, 8890369, 1130495, 8994816), new y(13507877.45, 3640466.88, 13537325.71, 3658712.59), 4]
            }
        },
        BMAP_CUSTOM_LAYER: {
            tileUrls: [""],
            tileSize: 256,
            baseUnits: 256,
            zoomLevelMin: 1,
            zoomLevelMax: 18,
            errorUrl: aQ.imgPath + "blank.gif",
            bounds: new y(-21364736, -10616832, 23855104, 15859712),
            imgExtend: "png"
        }
    };

    function m() {}
    l.extend(m, {
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
                j: 113.88099,
                w: 22.58884,
                utm_x: 12677311.76,
                utm_y: 2565810.52,
                x: 569078,
                y: 532290
            }, {
                j: 113.902002,
                w: 22.566098,
                utm_x: 12679650.83,
                utm_y: 2563084.58,
                x: 568318,
                y: 545457
            }, {
                j: 113.869843,
                w: 22.577711,
                utm_x: 12676070.87,
                utm_y: 2564476.5,
                x: 561115,
                y: 532494
            }, {
                j: 113.943387,
                w: 22.555192,
                utm_x: 12684257.84,
                utm_y: 2561777.5,
                x: 579437,
                y: 558427
            }, {
                j: 113.899505,
                w: 22.577052,
                utm_x: 12679372.86,
                utm_y: 2564397.51,
                x: 571923,
                y: 540181
            }, {
                j: 113.900376,
                w: 22.596431,
                utm_x: 12679469.82,
                utm_y: 2566720.51,
                x: 580142,
                y: 535463
            }, {
                j: 113.92101,
                w: 22.528931,
                utm_x: 12681766.81,
                utm_y: 2558630.58,
                x: 560296,
                y: 559780
            }, {
                j: 113.919672,
                w: 22.517839,
                utm_x: 12681617.86,
                utm_y: 2557301.57,
                x: 555296,
                y: 562549
            }, {
                j: 113.938716,
                w: 22.505569,
                utm_x: 12683737.86,
                utm_y: 2555831.55,
                x: 557349,
                y: 571072
            }, {
                j: 113.919203,
                w: 22.483494,
                utm_x: 12681565.66,
                utm_y: 2553187.17,
                x: 540853,
                y: 572118
            }, {
                j: 113.942875,
                w: 22.492046,
                utm_x: 12684200.84,
                utm_y: 2554211.57,
                x: 553296,
                y: 575994
            }, {
                j: 113.9567,
                w: 22.530183,
                utm_x: 12685739.85,
                utm_y: 2558780.59,
                x: 573378,
                y: 568442
            }, {
                j: 113.989102,
                w: 22.52697,
                utm_x: 12689346.86,
                utm_y: 2558395.61,
                x: 584796,
                y: 578728
            }, {
                j: 114.015467,
                w: 22.533746,
                utm_x: 12692281.83,
                utm_y: 2559207.53,
                x: 597126,
                y: 584075
            }, {
                j: 113.972977,
                w: 22.55702,
                utm_x: 12687551.81,
                utm_y: 2561996.58,
                x: 591204,
                y: 565924
            }, {
                j: 113.990368,
                w: 22.561133,
                utm_x: 12689487.79,
                utm_y: 2562489.51,
                x: 599240,
                y: 569528
            }, {
                j: 114.143745,
                w: 22.580535,
                utm_x: 12706561.83,
                utm_y: 2564815,
                x: 663830,
                y: 605622
            }, {
                j: 114.150374,
                w: 22.557704,
                utm_x: 12707299.77,
                utm_y: 2562078.56,
                x: 657016,
                y: 613828
            }, {
                j: 114.106905,
                w: 22.541858,
                utm_x: 12702460.77,
                utm_y: 2560179.58,
                x: 634284,
                y: 606528
            }, {
                j: 114.083927,
                w: 22.535065,
                utm_x: 12699902.85,
                utm_y: 2559365.58,
                x: 623132,
                y: 602096
            }, {
                j: 114.049584,
                w: 22.517997,
                utm_x: 12696079.76,
                utm_y: 2557320.5,
                x: 603390,
                y: 597564
            }, {
                j: 114.056304,
                w: 22.542425,
                utm_x: 12696827.84,
                utm_y: 2560247.52,
                x: 615980,
                y: 592534
            }, {
                j: 114.051552,
                w: 22.551321,
                utm_x: 12696298.84,
                utm_y: 2561313.59,
                x: 617887,
                y: 588719
            }, {
                j: 114.096377,
                w: 22.559064,
                utm_x: 12701288.79,
                utm_y: 2562241.55,
                x: 637568,
                y: 598739
            }, {
                j: 114.135858,
                w: 22.575851,
                utm_x: 12705683.84,
                utm_y: 2564253.55,
                x: 659024,
                y: 604806
            }, {
                j: 114.092029,
                w: 22.575592,
                utm_x: 12700804.77,
                utm_y: 2564222.51,
                x: 642776,
                y: 592932
            }, {
                j: 114.054795,
                w: 22.570617,
                utm_x: 12696659.85,
                utm_y: 2563626.21,
                x: 626988,
                y: 584142
            }, {
                j: 114.03075,
                w: 22.553687,
                utm_x: 12693983.15,
                utm_y: 2561597.14,
                x: 611068,
                y: 582552
            }, {
                j: 114.074153,
                w: 22.554124,
                utm_x: 12698814.8,
                utm_y: 2561649.51,
                x: 627380,
                y: 594008
            }, {
                j: 113.926721,
                w: 22.546028,
                utm_x: 12682402.56,
                utm_y: 2560679.29,
                x: 569340,
                y: 556468
            }, {
                j: 113.938125,
                w: 22.538296,
                utm_x: 12683672.07,
                utm_y: 2559752.74,
                x: 570548,
                y: 561748
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
        getLnglatIndex: function (aV, aZ, aY) {
            var aU = 0;
            var aT = 0;
            var a0 = 10000000,
                aX = 1000000000;
            for (var aW = 0; aW < this.correct_pts[aV].length; aW++) {
                var e = this.getDis(this.correct_pts[aV][aW].x, this.correct_pts[aV][aW].y, aZ, aY);
                if (e < aX) {
                    if (e < a0) {
                        aX = a0;
                        a0 = e;
                        aT = aU;
                        aU = aW
                    } else {
                        sedMinDis = e;
                        aT = aW
                    }
                }
            }
            return {
                lt: aU,
                rb: aT
            }
        },
        getOMapIndex_mm: function (aV, a0, aZ) {
            var aU = 0;
            var aT = 0;
            var aY = 1294723000,
                aX = 1294723000;
            for (var aW = 0; aW < this.correct_pts[aV].length; aW++) {
                var e = this.getDis(this.correct_pts[aV][aW].utm_x, this.correct_pts[aV][aW].utm_y, a0, aZ);
                if (e < aX) {
                    if (e < aY) {
                        aX = aY;
                        aY = e;
                        aT = aU;
                        aU = aW
                    } else {
                        sedMinDis = e;
                        aT = aW
                    }
                }
            }
            return {
                lt: aU,
                rb: aT
            }
        },
        getDis: function (e, aU, i, aT) {
            return Math.abs(e - i) + Math.abs(aU - aT)
        },
        toMap: function (aU, e, aV) {
            var i = (e - aV) * this.num[aU].num;
            var aT = (e + aV) * this.num[aU].num * this.num[aU].num2;
            return {
                x: i,
                y: aT
            }
        },
        fromMap: function (aU, e, aV) {
            aV = aV / this.num[aU].num2;
            var i = (e + aV) / (this.num[aU].num * 2);
            var aT = (aV - e) / (this.num[aU].num * 2);
            return {
                x: i,
                y: aT
            }
        },
        getDgPix_mm: function (aV, a0, aW) {
            var aZ = this.fromMap(aV, this.correct_pts[aV][a0].x, this.correct_pts[aV][a0].y);
            var aX = this.fromMap(aV, this.correct_pts[aV][aW].x, this.correct_pts[aV][aW].y);
            var a5 = aZ.x,
                i = aZ.y;
            var a4 = aX.x,
                e = aX.y;
            var a2 = this.correct_pts[aV][a0].utm_x,
                aU = this.correct_pts[aV][a0].utm_y;
            var aY = this.correct_pts[aV][aW].utm_x,
                aT = this.correct_pts[aV][aW].utm_y;
            var a3 = Math.abs((aY - a2) * 100000 / (a4 - a5));
            var a1 = Math.abs((aT - aU) * 100000 / (e - i));
            return {
                j: a3,
                w: a1,
                x: 100000 / a3,
                y: 100000 / a1
            }
        },
        getPx_mm: function (a8, a4, a3, aV, aU) {
            var aT = this.correct_pts[a8][aV];
            var e = this.correct_pts[a8][aV];
            var a1 = this.getDgPix_mm(a8, aV, aU);
            var aX = this.fromMap(a8, aT.x, aT.y);
            var aW = e.utm_x,
                ba = e.utm_y;
            var a9 = a4,
                a2 = a3;
            var a7 = aX.x;
            var i = aX.y;
            var aZ = a9 - aW,
                a6 = a2 - ba;
            var a0 = aZ * a1.x + a7;
            var aY = -a6 * a1.y + i;
            var a5 = this.toMap(a8, a0, aY);
            return a5
        },
        getJw_mm: function (a6, a1, a0, aW, aV) {
            var aZ = this.correct_pts[a6][aW];
            var i = this.correct_pts[a6][aW];
            var a2 = this.getDgPix_mm(a6, aW, aV);
            var a4 = this.fromMap(a6, a1, a0);
            var aU = this.fromMap(a6, aZ.x, aZ.y);
            var aX = i.utm_x,
                a7 = i.utm_y;
            var a5 = aU.x;
            var aT = aU.y;
            var a8 = a4.x - a5,
                a3 = aT - a4.y;
            var aY = a8 / a2.x + aX;
            var e = a3 / a2.y + a7;
            return {
                lng: aY,
                lat: e
            }
        },
        getOMap_pts: function (i, e) {
            return this.getOMap_index(i, e.lng, e.lat, e.lt, e.rb)
        },
        getMapJw_pts: function (i, e) {
            return this.getMapJw_index(i, e.lng, 9998336 - e.lat, e.lt, e.rb)
        },
        getOMap_mm: function (aU, aT, i) {
            var e = this.getOMapIndex_mm(aU, aT, i);
            return this.getOMap_index(aU, aT, i, e.lt, e.rb)
        },
        getMapJw_mm: function (aT, e, aU) {
            aU = 9998336 - aU;
            var i = this.getLnglatIndex(aT, e, aU);
            return this.getMapJw_index(aT, e, aU, i.lt, i.rb)
        },
        getMapJw_Array: function (aX, aW) {
            var aT = this.getLnglatIndex(aX, aW[0].lng, aW[0].lat);
            var e = new Array;
            for (var aV = 0; aV < aW.length; aV++) {
                var aU = this.getJw_mm(aX, aW[aV].lng, aW[aV].lat, aT.lt, aT.rb);
                e[aV] = {
                    lng: aU.lng,
                    lat: aU.lat,
                    lt: aT.lt,
                    rb: aT.rb
                }
            }
            return e
        },
        getOMap_Array: function (aX, aW) {
            var e = this.getOMapIndex_mm(aX, aW[0].lng, aW[0].lat);
            var aV = new Array;
            for (var aU = 0; aU < aW.length; aU++) {
                var aT = this.getPx_mm(aX, aW[aU].lng, aW[aU].lat, e.lt, e.rb);
                aV[aU] = {
                    lng: aT.x,
                    lat: aT.y,
                    lt: e.lt,
                    rb: e.rb
                }
            }
            return aV
        },
        getOMap_index: function (aX, aW, aV, e, aU) {
            if (!e || !aU) {
                var i = this.getOMapIndex_mm(aX, aW, aV)
            } else {
                var i = {
                    lt: e,
                    rb: aU
                }
            }
            var aT = this.getPx_mm(aX, aW, aV, i.lt, i.rb);
            return {
                x: Math.floor(aT.x),
                y: 9998336 - Math.floor(aT.y),
                lt: i.lt,
                rb: i.rb
            }
        },
        getMapJw_index: function (aW, aT, aX, i, aV) {
            if (!i || !aV) {
                var aU = this.getLnglatIndex(aW, aT, aX)
            } else {
                var aU = {
                    lt: i,
                    rb: aV
                }
            }
            var e = this.getJw_mm(aW, aT, aX, aU.lt, aU.rb);
            return {
                lng: e.lng,
                lat: e.lat,
                lt: aU.lt,
                rb: aU.rb
            }
        }
    });

    function z(e) {
        e = e || {};
        this.charset = e.charset || "utf-8";
        this.objName = e.objName || "mapData";
        this.callback = e.callback;
        this.errorUrl = e.errorUrl || ""
    }
    z.inherits(E, "DataRequest");
    l.extend(z.prototype, {
        send: function (i, e) {
            this.url = i;
            this.userData = e;
            var aT = this;
            var aU = t("script");
            aU.type = "text/javascript";
            aU.userData = e;
            aU.setAttribute("defer", "true");
            aU.defer = true;
            aU.loaded = false;
            aU.stime = new Date().getTime();
            if (aU.addEventListener) {
                aU.addEventListener("load", function (aV) {
                    aT._loadData(aT.objName, aU)
                }, false);
                aU.addEventListener("error", function (aV) {
                    aT._loadError(aT.objName, aU)
                }, false)
            } else {
                if (aU.attachEvent) {
                    aU.attachEvent("onreadystatechange", function (aW) {
                        var aV = window.event.srcElement;
                        aU.timer = setInterval(function () {
                            aU.etime = new Date().getTime();
                            var aX = parseInt(aU.etime - aU.stime);
                            if (aV && (aV.readyState == "loaded" || aV.readyState == "complete")) {
                                aU.loaded = true
                            }
                            if (aU.loaded == true) {
                                aT._loadData(aT.objName, aU);
                                clearInterval(aU.timer)
                            } else {
                                if (aX > 5000) {
                                    aT._loadError(aT.objName, aU);
                                    clearInterval(aU.timer)
                                }
                            }
                        }, 5)
                    })
                }
            }
            aU.charset = aT.charset;
            aU.src = aT.url;
            document.getElementsByTagName("head")[0].appendChild(aU)
        },
        _loadData: function (aW, aT) {
            var i = window[aW];
            var aV = new aw("onloaded");
            aV.data = i;
            for (var aU in aT.userData) {
                if (!aV[aU] && aT.userData[aU]) {
                    aV[aU] = aT.userData[aU]
                }
            }
            this.dispatchEvent(aV);
            aT.parentNode && aT.parentNode.removeChild(aT);
            aT = null
        },
        _loadError: function (i, e) {
            e.parentNode && e.parentNode.removeChild(e);
            e = null
        }
    });
    var aI = {
        request: function (i) {
            var e = t("script", {
                src: i,
                type: "text/javascript",
                charset: "utf-8"
            });
            if (e.addEventListener) {
                e.addEventListener("load", function (aU) {
                    var aT = aU.target;
                    aT.parentNode.removeChild(aT)
                }, false)
            } else {
                if (e.attachEvent) {
                    e.attachEvent("onreadystatechange", function (aU) {
                        var aT = window.event.srcElement;
                        if (aT && (aT.readyState == "loaded" || aT.readyState == "complete")) {
                            aT.parentNode.removeChild(aT)
                        }
                    })
                }
            }
            setTimeout(function () {
                document.getElementsByTagName("head")[0].appendChild(e);
                e = null
            }, 1)
        }
    };

    function aq() {}
    l.extend(aq, {
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
            hotspot: ["poly"],
            menu: [],
            tools: ["marker", "poly"],
            oppc: [],
            opmb: [],
            "3dmap": ["hotspot"]
        },
        preLoaded: {},
        Config: {
            _baseUrl: "http://api.map.baidu.com/getmodules?v=1.1",
            _timeout: 5000
        },
        delayFlag: false,
        Module: {
            _modules: {},
            _arrMdls: []
        },
        load: function (i, aU) {
            var e = this.current(i);
            if (e._status == this.Request.COMPLETED) {
                return
            } else {
                if (e._status == this.Request.INITIAL) {
                    this.combine(i);
                    this.pushUniqueMdl(i);
                    var aT = this;
                    if (aT.delayFlag == false) {
                        aT.delayFlag = true;
                        window.setTimeout(function () {
                            var aV = aT.Config._baseUrl + "&mod=" + aT.Module._arrMdls.join(",");
                            aI.request(aV);
                            aT.Module._arrMdls.length = 0;
                            aT.delayFlag = false
                        }, 1)
                    }
                    e._status = this.Request.WAITING
                }
                e._callbacks.push(aU)
            }
        },
        combine: function (e) {
            if (e && this.Dependency[e]) {
                var aU = this.Dependency[e];
                for (var aT = 0; aT < aU.length; aT++) {
                    this.combine(aU[aT]);
                    if (!this.Module._modules[aU[aT]]) {
                        this.pushUniqueMdl(aU[aT])
                    }
                }
            }
        },
        pushUniqueMdl: function (aT) {
            for (var e = 0; e < this.Module._arrMdls.length; e++) {
                if (this.Module._arrMdls[e] == aT) {
                    return
                }
            }
            this.Module._arrMdls.push(aT)
        },
        run: function (aV, aX) {
            var aU = this.current(aV);
            try {
                eval(aX)
            } catch (aY) {
                return
            }
            aU._status = this.Request.COMPLETED;
            for (var aW = 0, aT = aU._callbacks.length; aW < aT; aW++) {
                aU._callbacks[aW]()
            }
            aU._callbacks.length = 0
        },
        check: function (i, aT) {
            var e = this;
            e.timeout = setTimeout(function () {
                var aU = e.Module._modules[i]._status;
                if (aU != e.Request.COMPLETED) {
                    e.remove(i);
                    e.load(i, aT)
                } else {
                    clearTimeout(e.timeout)
                }
            }, e.Config._timeout)
        },
        current: function (i) {
            var e;
            if (!this.Module._modules[i]) {
                this.Module._modules[i] = {};
                this.Module._modules[i]._status = this.Request.INITIAL;
                this.Module._modules[i]._callbacks = []
            }
            e = this.Module._modules[i];
            return e
        },
        remove: function (i) {
            var e = this.current(i);
            delete e
        }
    });
    window._jsload = function (e, i) {
        aq.run(e, i)
    };

    function P() {
        this._map = null;
        this._container;
        this._type = "control";
        this.blockInfoWindow = true;
        this._visible = true
    }
    P.inherits(E, "Control");
    l.extend(P.prototype, {
        initialize: function (e) {
            this._map = e;
            if (this._container) {
                e.container.appendChild(this._container);
                return this._container
            }
            return
        },
        _i: function (e) {
            if (!this._container && this.initialize && av(this.initialize)) {
                this._container = this.initialize(e)
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
            var i = this._container;
            if (i) {
                var e = i.style;
                e.position = "absolute";
                e.zIndex = this._cZIndex || "10";
                e.MozUserSelect = "none";
                if (!this._opts.printable) {
                    l.ac(i, "BMap_noprint")
                }
                l.on(i, "contextmenu", aC)
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
            this._container = Z(this._map.container, "<div unselectable='on'></div>");
            if (this._visible == false) {
                this._container.style.display = "none"
            }
            return this._container
        },
        _setPosition: function () {
            this.setAnchor(this._opts.anchor)
        },
        setAnchor: function (aU) {
            if (this.anchorFixed || typeof aU != "number" || isNaN(aU) || aU < BMAP_ANCHOR_TOP_LEFT || aU > BMAP_ANCHOR_BOTTOM_RIGHT) {
                aU = this.defaultAnchor
            }
            this._opts = this._opts || {
                printable: false
            };
            this._opts.offset = this._opts.offset || this.defaultOffset;
            var aT = this._opts.anchor;
            this._opts.anchor = aU;
            if (!this._container) {
                return
            }
            var aW = this._container;
            var e = this._opts.offset.width;
            var aV = this._opts.offset.height;
            aW.style.left = aW.style.top = aW.style.right = aW.style.bottom = "auto";
            switch (aU) {
            case BMAP_ANCHOR_TOP_LEFT:
                aW.style.top = aV + "px";
                aW.style.left = e + "px";
                break;
            case BMAP_ANCHOR_TOP_RIGHT:
                aW.style.top = aV + "px";
                aW.style.right = e + "px";
                break;
            case BMAP_ANCHOR_BOTTOM_LEFT:
                aW.style.bottom = aV + "px";
                aW.style.left = e + "px";
                break;
            case BMAP_ANCHOR_BOTTOM_RIGHT:
                aW.style.bottom = aV + "px";
                aW.style.right = e + "px";
                break;
            default:
                break
            }
            var i = ["TL", "TR", "BL", "BR"];
            l.rc(this._container, "anchor" + i[aT]);
            l.ac(this._container, "anchor" + i[aU])
        },
        getAnchor: function () {
            return this._opts.anchor
        },
        setOffset: function (e) {
            if (!e || e && e.toString() != "Size") {
                return
            }
            this._opts = this._opts || {
                printable: false
            };
            this._opts.offset = new X(e.width, e.height);
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
                this._container.style.display = ""
            }
        },
        hide: function () {
            if (this._visible == false) {
                return
            }
            this._visible = false;
            if (this._container) {
                this._container.style.display = "none"
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

    function K(e) {
        P.call(this);
        e = e || {};
        this._opts = {
            printable: false
        };
        l.extend(this._opts, e);
        this._copyrightCollection = [];
        this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
        this.defaultOffset = new X(5, 2);
        this.setAnchor(e.anchor);
        this._canShow = true;
        this.blockInfoWindow = false;
        this._asyncLoadCode()
    }
    K.inherits(P, "CopyrightControl");
    l.extend(K.prototype, {
        initialize: function (e) {
            this._map = e;
            return this._container
        },
        addCopyright: function (aU) {
            if (!aU || typeof aU.id != "number" || isNaN(aU.id)) {
                return
            }
            var e = {
                minZoom: 0,
                bounds: null,
                content: "",
                mapType: ""
            };
            for (var aT in aU) {
                e[aT] = aU[aT]
            }
            if (this._map) {
                var aX = e.minZoom;
                if (aX == -1 || aX < aJ[this._map.mapType].zoomLevelMin || aX > aJ[this._map.mapType].zoomLevelMax) {
                    e.minZoom = aJ[this._map.mapType].zoomLevelMin
                }
                if (e.mapType != "" && !aJ[e.mapType]) {
                    e.mapType = BMAP_NORMAL_MAP
                }
            }
            var aV = this.getCopyright(aU.id);
            if (aV) {
                for (var aW in e) {
                    aV[aW] = e[aW]
                }
            } else {
                this._copyrightCollection.push(e)
            }
        },
        getCopyright: function (aU) {
            for (var aT = 0, e = this._copyrightCollection.length; aT < e; aT++) {
                if (this._copyrightCollection[aT].id == aU) {
                    return this._copyrightCollection[aT]
                }
            }
        },
        getCopyrightCollection: function () {
            return this._copyrightCollection
        },
        removeCopyright: function (aU) {
            for (var aT = 0, e = this._copyrightCollection.length; aT < e; aT++) {
                if (this._copyrightCollection[aT].id == aU) {
                    r = this._copyrightCollection.splice(aT, 1);
                    aT--;
                    e = this._copyrightCollection.length
                }
            }
        },
        _asyncLoadCode: function () {
            var e = this;
            aq.load("control", function () {
                e._asyncDraw()
            })
        }
    });

    function ah(e) {
        P.call(this);
        e = e || {};
        this._opts = {
            printable: false
        };
        this._opts = l.extend(l.extend(this._opts, {
            size: new X(150, 150),
            padding: 8,
            isOpen: false,
            zoomInterval: 4
        }), e);
        this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;
        this.defaultOffset = new X(0, 0);
        this.setAnchor(e.anchor);
        this.setSize(this._opts.size);
        this._asyncLoadCode()
    }
    ah.inherits(P, "OverviewMapControl");
    l.extend(ah.prototype, {
        initialize: function (e) {
            this._map = e;
            return this._container
        },
        setAnchor: function (e) {
            P.prototype.setAnchor.call(this, e)
        },
        changeView: function () {
            this.changeView._running = true;
            this._opts.isOpen = !this._opts.isOpen;
            if (!this._container) {
                this.changeView._running = false
            }
        },
        setSize: function (e) {
            if (!e || e.toString() != "Size") {
                e = new X(150, 150)
            }
            e.width = e.width > 0 ? e.width : 150;
            e.height = e.height > 0 ? e.height : 150;
            this._opts.size = e
        },
        getSize: function () {
            if (this.isOpen()) {
                return this._opts.size
            } else {
                return new X(this._btnWidth, this._btnHeight)
            }
        },
        isOpen: function () {
            return this._opts.isOpen
        },
        _asyncLoadCode: function () {
            var e = this;
            aq.load("control", function () {
                e._asyncDraw()
            })
        }
    });

    function T(e) {
        P.call(this);
        e = e || {};
        this._opts = {
            printable: false
        };
        this._opts = l.extend(l.extend(this._opts, {
            color: "black",
            unit: "metric"
        }), e);
        this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
        this.defaultOffset = new X(81, 18);
        this.setAnchor(e.anchor);
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
        this._asyncLoadCode()
    }
    window.BMAP_UNIT_METRIC = "metric";
    window.BMAP_UNIT_IMPERIAL = "us";
    T.inherits(P, "ScaleControl");
    l.extend(T.prototype, {
        initialize: function (e) {
            this._map = e;
            return this._container
        },
        setUnit: function (e) {
            this._opts.unit = this._units[e] && this._units[e].name || this._opts.unit
        },
        getUnit: function () {
            return this._opts.unit
        },
        _asyncLoadCode: function () {
            var e = this;
            aq.load("control", function () {
                e._asyncDraw()
            })
        }
    });
    window.BMAP_NAVIGATION_CONTROL_LARGE = 0;
    window.BMAP_NAVIGATION_CONTROL_SMALL = 1;
    window.BMAP_NAVIGATION_CONTROL_PAN = 2;
    window.BMAP_NAVIGATION_CONTROL_ZOOM = 3;

    function H(e) {
        P.call(this);
        e = e || {};
        this._opts = {
            printable: false,
            showZoomInfo: true
        };
        l.extend(this._opts, e);
        this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
        this.defaultOffset = new X(10, 10);
        this.setAnchor(e.anchor);
        this.setType(e.type);
        this._asyncLoadCode()
    }
    H.inherits(P, "NavigationControl");
    l.extend(H.prototype, {
        initialize: function (e) {
            this._map = e;
            return this._container
        },
        setType: function (e) {
            if (typeof e == "number" && e >= BMAP_NAVIGATION_CONTROL_LARGE && e <= BMAP_NAVIGATION_CONTROL_ZOOM) {
                this._opts.type = e
            } else {
                this._opts.type = BMAP_NAVIGATION_CONTROL_LARGE
            }
        },
        getType: function () {
            return this._opts.type
        },
        _asyncLoadCode: function () {
            var e = this;
            aq.load("control", function () {
                e._asyncDraw()
            })
        }
    });

    function ae(e) {
        P.call(this);
        e = e || {};
        this._opts = {
            printable: false
        };
        this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT;
        this.defaultOffset = new X(10, 10);
        this.setAnchor(e.anchor);
        this._opts = l.extend(l.extend(this._opts, {
            offset: this.defaultOffset,
            enableSwitch: true
        }), e);
        this._asyncLoadCode()
    }
    ae.inherits(P, "MapTypeControl");
    l.extend(ae.prototype, {
        initialize: function (e) {
            this._map = e;
            return this._container
        },
        select: function (e) {},
        _asyncLoadCode: function () {
            var e = this;
            aq.load("control", function () {
                e._asyncDraw()
            })
        }
    });

    function g(i) {
        E.call(this);
        this._opts = {
            container: null,
            cursor: "default"
        };
        this._opts = l.extend(this._opts, i);
        this._type = "contextmenu";
        this._map = null;
        this._container;
        this._shadow;
        this._left = 0;
        this._top = 0;
        this._items = [];
        this._rItems = [];
        this._dividers = [];
        this._enable = true;
        this.curPixel = null;
        this.curPoint = null;
        this._isOpen = false;
        var e = this;
        aq.load("menu", function () {
            e._draw()
        })
    }
    g.inherits(E, "ContextMenu");
    l.extend(g.prototype, {
        initialize: function (e) {
            this._map = e
        },
        remove: function () {
            this._map = null
        },
        addItem: function (aU) {
            if (!aU || aU._type != "menuitem" || aU._text == "" || aU._width <= 0) {
                return
            }
            for (var aT = 0, e = this._items.length; aT < e; aT++) {
                if (this._items[aT] === aU) {
                    return
                }
            }
            this._items.push(aU);
            this._rItems.push(aU)
        },
        removeItem: function (aU) {
            if (!aU || aU._type != "menuitem") {
                return
            }
            for (var aT = 0, e = this._items.length; aT < e; aT++) {
                if (this._items[aT] === aU) {
                    this._items[aT].remove();
                    this._items.splice(aT, 1);
                    e--
                }
            }
            for (var aT = 0, e = this._rItems.length; aT < e; aT++) {
                if (this._rItems[aT] === aU) {
                    this._rItems[aT].remove();
                    this._rItems.splice(aT, 1);
                    e--
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
        removeSeparator: function (aT) {
            if (!this._dividers[aT]) {
                return
            }
            for (var aU = 0, e = this._items.length; aU < e; aU++) {
                if (this._items[aU] && this._items[aU]._type == "divider" && this._items[aU]._dIndex == aT) {
                    this._items.splice(aU, 1);
                    e--
                }
                if (this._items[aU] && this._items[aU]._type == "divider" && this._items[aU]._dIndex > aT) {
                    this._items[aU]._dIndex--
                }
            }
            this._dividers.splice(aT, 1)
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
        setCursor: function (e) {
            if (!e) {
                return
            }
            this._opts.cursor = e
        },
        getItem: function (e) {
            return this._rItems[e]
        },
        enable: function () {
            this._enable = true
        },
        disable: function () {
            this._enable = false
        }
    });

    function L(aT, aU, i) {
        if (!aT || !aU || typeof aU != "function") {
            return
        }
        E.call(this);
        this._opts = {
            width: 100,
            id: ""
        };
        i = i || {};
        this._opts.width = (i.width * 1) ? i.width : 100;
        this._opts.id = i.id ? i.id : "";
        this._text = aT + "";
        this._callback = aU;
        this._map = null;
        this._type = "menuitem";
        this._contextmenu = null;
        this._container = null;
        this._enabled = true;
        var e = this;
        aq.load("menu", function () {
            e._draw()
        })
    }
    L.inherits(E, "MenuItem");
    l.extend(L.prototype, {
        initialize: function (e, i) {
            this._map = e;
            this._contextmenu = i
        },
        remove: function () {
            this._contextmenu = null;
            this._map = null
        },
        setText: function (e) {
            if (!e) {
                return
            }
            this._text = e + ""
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

    function y(e, aU, aT, i) {
        this.minX = e;
        this.minY = aU;
        this.maxX = aT;
        this.maxY = i
    }
    l.extend(y.prototype, {
        isEmpty: function () {
            var e = "number";
            return (typeof(this.minX) != e || typeof(this.minY) != e || typeof(this.maxX) != e || typeof(this.maxY) != e)
        },
        equals: function (e) {
            if (!e || e.toString() != "Bounds") {
                return
            }
            return (this.minX == e.minX && this.minY == e.minY && this.maxX == e.maxX && this.maxY == e.maxY)
        },
        getMaxX: function () {
            return this.maxX
        },
        getMaxY: function () {
            return this.maxY
        },
        getMinX: function () {
            return this.minX
        },
        getMinY: function () {
            return this.minY
        },
        containsBounds: function (e) {
            if (!e || e.toString() != "Bounds") {
                return
            }
            return (e.minX > this.minX && e.maxX < this.maxX && e.minY > this.minY && e.maxY < this.maxY)
        },
        getCenterPoint: function () {
            return new f((this.minX + this.maxX) / 2, (this.minY + this.maxY) / 2)
        },
        getCenter: function () {
            return this.getCenterPoint()
        },
        intersects: function (aT) {
            if (!aT || aT.toString() != "Bounds") {
                return
            }
            if (Math.max(aT.minX, aT.maxX) < Math.min(this.minX, this.maxX) || Math.min(aT.minX, aT.maxX) > Math.max(this.minX, this.maxX) || Math.max(aT.minY, aT.maxY) < Math.min(this.minY, this.maxY) || Math.min(aT.minY, aT.maxY) > Math.max(this.minY, this.maxY)) {
                return null
            }
            var aV = Math.max(this.minX, aT.minX);
            var i = Math.min(this.maxX, aT.maxX);
            var aU = Math.max(this.minY, aT.minY);
            var e = Math.min(this.maxY, aT.maxY);
            return new y(aV, aU, i, e)
        },
        containsPoint: function (e) {
            if (!e || e.toString() != "Point") {
                return
            }
            return (e.lng >= this.minX && e.lng <= this.maxX && e.lat >= this.minY && e.lat <= this.maxY)
        },
        extend: function (e) {
            if (!e || e.toString() != "Point") {
                return
            }
            var i = e.lng,
                aT = e.lat;
            if (!this.minX || this.minX > i) {
                this.minX = i
            }
            if (!this.maxX || this.maxX < i) {
                this.maxX = i
            }
            if (!this.minY || this.minY > aT) {
                this.minY = aT
            }
            if (!this.maxY || this.maxY < aT) {
                this.maxY = aT
            }
        },
        getIntersectLine: function (e) {
            if (!e || e.toString() != "Line") {
                return
            }
            var i = e.sPoint;
            var aU = e.ePoint;
            var aT = [];
            if (i.lat == aU.lat) {
                if (i.lng == aU.lng) {
                    return null
                }
                if (i.lat > this.minY && i.lat < this.maxY) {}
                var e = new Line(aT.lng, aT.lat);
                return e
            }
        },
        getMin: function () {
            return new f(this.minX, this.minY)
        },
        getMax: function () {
            return new f(this.maxX, this.maxY)
        },
        toString: function () {
            return "Bounds"
        }
    });

    function f(e, i) {
        if (isNaN(e)) {
            e = aa(e);
            e = isNaN(e) ? 0 : e
        }
        if (typeof e == "string") {
            e = parseFloat(e)
        }
        if (isNaN(i)) {
            i = aa(i);
            i = isNaN(i) ? 0 : i
        }
        if (typeof i == "string") {
            i = parseFloat(i)
        }
        this.lng = e;
        this.lat = i
    }
    var u = f.prototype;
    u.equals = function (e) {
        if (!e || e.toString() != "Point") {
            return
        }
        return (this.lat == e.lat && this.lng == e.lng)
    };
    u.toString = function () {
        return "Point"
    };

    function x(e) {
        if (Object.prototype.toString.call(e) != "[object Array]") {
            return
        }
        this.points = e
    }
    x.inherits(E, "Area");
    x.prototype = {
        containsPoint: function (e) {
            var aT = 0,
                aV = 0;
            var aW = this.points;
            for (var aU = 0; aU < aW.length; aU++) {
                aT = (aU == aW.length - 1) ? 0 : aT + 1;
                if ((aW[aU].lat != aW[aT].lat) && (((e.lat >= aW[aU].lat) && (e.lat < aW[aT].lat)) || ((e.lat >= aW[aT].lat) && (e.lat < aW[aU].lat))) && (e.lng < (aW[aT].lng - aW[aU].lng) * (e.lat - aW[aU].lat) / (aW[aT].lat - aW[aU].lat) + aW[aU].lng)) {
                    aV++
                }
            }
            return (aV % 2 > 0) ? true : false
        },
        getQuad: function (e) {
            return (e.lng >= 0) ? ((e.lat >= 0) ? 0 : 3) : ((e.lat >= 0) ? 1 : 2)
        }
    };
    var aL = {
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
    var ap = {
        _map: null,
        _html: "<div class='BMap_opMask' unselectable='on'></div>",
        _maskElement: null,
        _cursor: "default",
        inUse: false,
        show: function (e) {
            if (!this._map) {
                this._map = e
            }
            this.inUse = true;
            if (!this._maskElement) {
                this._createMask(e)
            }
            this._maskElement.style.display = "block"
        },
        _createMask: function (i) {
            if (!this._map) {
                this._map = i
            }
            if (!this._map) {
                return
            }
            var e = this._maskElement = Z(this._map.container, this._html);
            l.on(e, "mouseup", function (aT) {
                if (aT.button == 2) {
                    aC(aT)
                }
            });
            l.on(e, "contextmenu", aC);
            e.style.display = "none"
        },
        getDrawPoint: function (aU, aX, aV) {
            aU = window.event || aU;
            var i = aU.layerX || aU.offsetX || 0;
            var aW = aU.layerY || aU.offsetY || 0;
            var aT = aU.target || aU.srcElement;
            if (aT != ap.getDom(this._map) && aX == true) {
                while (aT && aT != this._map.container) {
                    if (!(aT.clientWidth == 0 && aT.clientHeight == 0 && aT.offsetParent && aT.offsetParent.nodeName.toLowerCase() == "td")) {
                        i += aT.offsetLeft;
                        aW += aT.offsetTop
                    }
                    aT = aT.offsetParent
                }
            }
            if (aT != ap.getDom(this._map) && aT != this._map.container) {
                return
            }
            if (typeof i === "undefined" || typeof aW === "undefined") {
                return
            }
            if (isNaN(i) || isNaN(aW)) {
                return
            }
            if (aV) {
                i = i + aV.x;
                aW = aW + aV.y
            }
            return this._map.pixelToPoint(new aK(i, aW))
        },
        hide: function () {
            if (!this._map) {
                return
            }
            this.inUse = false;
            if (this._maskElement) {
                this._maskElement.style.display = "none"
            }
        },
        getDom: function (e) {
            if (!this._maskElement) {
                this._createMask(e)
            }
            return this._maskElement
        },
        setCursor: function (e) {
            this._cursor = e || "default";
            if (this._maskElement) {
                this._maskElement.style.cursor = this._cursor
            }
        }
    };

    function O() {
        this._type = "overlay"
    }
    O.inherits(l.BaseClass, "Overlay");
    O.getZIndex = function (i, e) {
        i = i * 1;
        if (!i) {
            return 0
        }
        if (e && e == BMAP_COORD_MERCATOR) {
            i = V.convertMC2LL(new BMap.Point(0, i)).lat
        }
        return (i * -100000) << 1
    };
    l.extend(O.prototype, {
        _i: function (e) {
            if (!this.domElement && av(this.initialize)) {
                this.domElement = this.initialize(e);
                if (this.domElement) {
                    this.domElement.style.WebkitUserSelect = "none"
                }
            }
            this.draw()
        },
        initialize: function (e) {
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
            this.dispatchEvent(new aw("onremove"))
        },
        hide: function () {
            l.hide(this.domElement)
        },
        show: function () {
            l.show(this.domElement)
        },
        isVisible: function () {
            if (!this.domElement) {
                return false
            }
            if (this.domElement.style.display == "none" || this.domElement.style.visibility == "hidden") {
                return false
            }
            return true
        },
        dispose: function () {
            l.BaseClass.prototype.decontrol.call(this)
        }
    });
    BMap.register(function (i) {
        i.temp.overlayDiv = i.overlayDiv = e(i.platform, 200);
        i._panes.floatPane = e(i.temp.overlayDiv, 800);
        i._panes.markerMouseTarget = e(i.temp.overlayDiv, 700);
        i._panes.floatShadow = e(i.temp.overlayDiv, 600);
        i._panes.labelPane = e(i.temp.overlayDiv, 500);
        i._panes.markerPane = e(i.temp.overlayDiv, 400);
        i._panes.mapPane = e(i.temp.overlayDiv, 200);

        function e(aT, aW) {
            var aV = t("div"),
                aU = aV.style;
            aU.position = "absolute";
            aU.top = aU.left = aU.width = aU.height = "0";
            aU.zIndex = aW;
            aT.appendChild(aV);
            return aV
        }
    });

    function aF() {
        l.BaseClass.call(this);
        O.call(this);
        this._visible = true;
        this.infoWindow = null;
        this._dblclickTime = 0
    }
    aF.inherits(O, "OverlayInternal");
    l.extend(aF.prototype, {
        initialize: function (e) {
            this.map = e;
            l.BaseClass.call(this, this.hashCode);
            return null
        },
        draw: function () {},
        remove: function () {
            this.map = null;
            this.decontrol();
            O.prototype.remove.call(this)
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
        getDom: function () {
            return this.domElement
        },
        setConfig: function (i) {
            i = i || {};
            for (var e in i) {
                if (typeof(this._config[e]) == typeof(i[e])) {
                    this._config[e] = i[e]
                }
            }
        },
        getPoint: function () {
            return this.point
        },
        setZIndex: function (e) {
            this.zIndex = e
        },
        enableMassClear: function () {
            this._config.enableMassClear = true
        },
        disableMassClear: function () {
            this._config.enableMassClear = false
        }
    });

    function at() {
        this.map = null;
        this._overlays = {};
        this._customOverlays = []
    }
    BMap.register(function (i) {
        var e = new at();
        e.map = i;
        i._overlays = e._overlays;
        i._customOverlays = e._customOverlays;
        i.addEventListener("load", function (aT) {
            e.draw(aT)
        });
        i.addEventListener("moveend", function (aT) {
            e.draw(aT)
        });
        if (l.Browser.ie && l.Browser.ie < 8 || document.compatMode == "BackCompat") {
            i.addEventListener("zoomend", function (aT) {
                setTimeout(function () {
                    e.draw(aT)
                }, 20)
            })
        } else {
            i.addEventListener("zoomend", function (aT) {
                e.draw(aT)
            })
        }
        i.addEventListener("maptypechange", function (aT) {
            e.draw(aT)
        });
        i.addEventListener("addoverlay", function (aX) {
            var aU = aX.target;
            if (aU instanceof aF) {
                if (!e._overlays[aU.hashCode]) {
                    e._overlays[aU.hashCode] = aU
                }
            } else {
                var aW = false;
                for (var aV = 0, aT = e._customOverlays.length; aV < aT; aV++) {
                    if (e._customOverlays[aV] === aU) {
                        aW = true;
                        break
                    }
                }
                if (!aW) {
                    e._customOverlays.push(aU)
                }
            }
        });
        i.addEventListener("removeoverlay", function (aW) {
            var aU = aW.target;
            if (aU instanceof aF) {
                delete e._overlays[aU.hashCode]
            } else {
                for (var aV = 0, aT = e._customOverlays.length; aV < aT; aV++) {
                    if (e._customOverlays[aV] === aU) {
                        e._customOverlays.splice(aV, 1);
                        break
                    }
                }
            }
        });
        i.addEventListener("clearoverlays", function (aW) {
            this.closeInfoWindow();
            for (var aV in e._overlays) {
                if (e._overlays[aV]._config.enableMassClear) {
                    e._overlays[aV].remove();
                    delete e._overlays[aV]
                }
            }
            for (var aU = 0, aT = e._customOverlays.length; aU < aT; aU++) {
                if (e._customOverlays[aU].enableMassClear != false) {
                    e._customOverlays[aU].remove();
                    e._customOverlays[aU] = null;
                    e._customOverlays.splice(aU, 1);
                    aU--;
                    aT--
                }
            }
        });
        i.addEventListener("infowindowopen", function (aU) {
            var aT = this.infoWindow;
            if (aT) {
                l.hide(aT.popDom);
                l.hide(aT.shadowDom)
            }
        });
        i.addEventListener("movestart", function () {
            if (this.getInfoWindow()) {
                this.getInfoWindow()._setOverflow()
            }
        });
        i.addEventListener("moveend", function () {
            if (this.getInfoWindow()) {
                this.getInfoWindow()._resetOverflow()
            }
        })
    });
    at.prototype.draw = function (aU) {
        for (var aT in this._overlays) {
            this._overlays[aT].draw()
        }
        l.each(this._customOverlays, function (e) {
            e.draw()
        });
        if (this.map.temp.infoWin) {
            this.map.temp.infoWin.setPosition()
        }
        if (BMap.DrawerSelector) {
            var i = BMap.DrawerSelector.getDrawer(this.map);
            i.setPalette()
        }
    };

    function au(e) {
        aF.call(this);
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
        this.setConfig(e);
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
        this.domElement = null;
        this._bounds = new BMap.Bounds(0, 0, 0, 0);
        this._parseCache = [];
        this.vertexMarkers = [];
        this._temp = {}
    }
    au.inherits(aF, "Graph");
    au.getGraphPoints = function (i) {
        var e = [];
        if (!i) {
            return e
        }
        if (typeof i == "string") {
            var aT = i.split(";");
            l.each(aT, function (aV) {
                var aU = aV.split(",");
                e.push(new f(aU[0], aU[1]))
            })
        }
        if (i.constructor == Array && i.length > 0) {
            e = i
        }
        return e
    };
    au.parseTolerance = {
        0: [0.09, 0.005, 0.0001, 0.00001],
        1: [9000, 500, 10, 1]
    };
    l.extend(au.prototype, {
        initialize: function (e) {
            this.map = e;
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
        setPoints: function (e) {
            this._parseCache.length = 0;
            this.points = au.getGraphPoints(e).slice(0);
            this._calcBounds()
        },
        _calcBounds: function () {
            if (!this.points) {
                return
            }
            var e = this;
            e._bounds = new y();
            l.each(this.points, function (i) {
                e._bounds.extend(i)
            })
        },
        getPoints: function () {
            return this.points
        },
        setPointAt: function (i, e) {
            if (!e || !this.points[i]) {
                return
            }
            this._parseCache.length = 0;
            this.points[i] = new f(e.lng, e.lat);
            this._calcBounds()
        },
        setStrokeColor: function (e) {
            this._config.strokeColor = e
        },
        getStrokeColor: function () {
            return this._config.strokeColor
        },
        setStrokeWeight: function (e) {
            if (e > 0) {
                this._config.strokeWeight = e
            }
        },
        getStrokeWeight: function () {
            return this._config.strokeWeight
        },
        setStrokeOpacity: function (e) {
            if (!e || e > 1 || e < 0) {
                return
            }
            this._config.strokeOpacity = e
        },
        getStrokeOpacity: function () {
            return this._config.strokeOpacity
        },
        setFillOpacity: function (e) {
            if (e > 1 || e < 0) {
                return
            }
            this._config.fillOpacity = e
        },
        getFillOpacity: function () {
            return this._config.fillOpacity
        },
        setStrokeStyle: function (e) {
            if (e != "solid" && e != "dashed") {
                return
            }
            this._config.strokeStyle = e
        },
        getStrokeStyle: function () {
            return this._config.strokeStyle
        },
        setFillColor: function (e) {
            this._config.fillColor = e || ""
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
            aF.prototype.remove.call(this);
            this._parseCache.length = 0
        },
        enableEditing: function () {
            this._config.enableEditing = true
        },
        disableEditing: function () {
            this._config.enableEditing = false
        }
    });
    if (l.Browser.ie) {
        l.on(document.body, "load", function () {
            if (document.namespaces && !document.namespaces.olv) {
                document.namespaces.add("olv", "urn:schemas-microsoft-com:vml")
            }
        })
    }
    function aj(e) {
        aF.call(this);
        this.map = null;
        this.domElement = null;
        this._config = {
            width: 0,
            height: 0,
            offset: new X(0, 0),
            opacity: 1,
            background: "transparent",
            lineStroke: 1,
            lineColor: "#000",
            lineStyle: "solid",
            point: null
        };
        this.setConfig(e);
        this.point = this._config.point
    }
    aj.inherits(aF, "Division");
    l.extend(aj.prototype, {
        _addDom: function () {
            var e = this._config;
            var aT = this.content;
            var i = ['<div class="BMap_Division" style="position:absolute;'];
            i.push("width:" + e.width + "px;display:block;");
            i.push("overflow:hidden;");
            if (e.borderColor != "none") {
                i.push("border:" + e.lineStroke + "px " + e.lineStyle + " " + e.lineColor + ";")
            }
            i.push("opacity:" + e.opacity + "; filter:(opacity=" + e.opacity * 100 + ")");
            i.push("background:" + e.background + ";");
            i.push('z-index:60;">');
            i.push(aT);
            i.push("</div>");
            this.domElement = Z(this.map.getPanes().markerMouseTarget, i.join(""))
        },
        initialize: function (e) {
            this.map = e;
            this._addDom();
            if (this.domElement) {
                l.on(this.domElement, "mousedown", function (i) {
                    ag(i)
                })
            }
            return this.domElement
        },
        draw: function () {
            var e = this.map.pointToOverlayPixel(this._config.point);
            this._config.offset = new X(-Math.round(this._config.width / 2) - Math.round(this._config.lineStroke), -Math.round(this._config.height / 2) - Math.round(this._config.lineStroke));
            this.domElement.style.left = e.x + this._config.offset.width + "px";
            this.domElement.style.top = e.y + this._config.offset.height + "px"
        },
        getPoint: function () {
            return this._config.point
        },
        _getPixel: function (e) {
            return this.map.pointToPixel(this.getPoint())
        },
        setPoint: function (e) {
            this._config.point = e;
            this.draw()
        },
        setDimension: function (e, i) {
            this._config.width = Math.round(e);
            this._config.height = Math.round(i);
            if (this.domElement) {
                this.domElement.style.width = this._config.width + "px";
                this.domElement.style.height = this._config.height + "px";
                this.draw()
            }
        }
    });

    function w(i, aT, aV) {
        if (!i || !aT) {
            return
        }
        this.imageUrl = i;
        this.size = aT;
        var aU = new X(Math.floor(aT.width / 2), Math.floor(aT.height / 2));
        var aW = {
            offset: aU,
            imageOffset: new X(0, 0)
        };
        aV = aV || {};
        for (var e in aV) {
            if (typeof(aW[e]) == typeof(aV[e])) {
                aW[e] = aV[e]
            }
        }
        this.offset = aW.offset;
        this.imageOffset = aW.imageOffset;
        this.infoWindowOffset = aV.infoWindowOffset || this.offset;
        this.printImageUrl = aV.printImageUrl || ""
    }
    var R = w.prototype;
    R.setImageUrl = function (e) {
        if (!e) {
            return
        }
        this.imageUrl = e
    };
    R.setPrintImageUrl = function (e) {
        if (!e) {
            return
        }
        this.printImageUrl = e
    };
    R.setSize = function (e) {
        if (!e) {
            return
        }
        this.size = new X(e.width, e.height)
    };
    R.setOffset = function (e) {
        if (!e) {
            return
        }
        this.offset = new X(e.width, e.height)
    };
    R.setImageOffset = function (e) {
        if (!e) {
            return
        }
        this.imageOffset = new X(e.width, e.height)
    };
    R.setInfoWindowOffset = function (e) {
        if (!e) {
            return
        }
        this.infoWindowOffset = new X(e.width, e.height)
    };
    R.toString = function () {
        return "Icon"
    };

    function ay(aT, i) {
        l.BaseClass.call(this);
        this.content = aT;
        this.map = null;
        this._config = {
            width: 0,
            height: 0,
            maxWidth: 600,
            offset: new X(0, 0),
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
        this.setConfig(i);
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
        this.IMG_PATH = aQ.imgPath;
        this.overlay = null;
        var e = this;
        aq.load("infowindow", function () {
            e._draw()
        })
    }
    ay.inherits(l.BaseClass, "InfoWindow");
    l.extend(ay.prototype, {
        setWidth: function (e) {
            e = e * 1;
            if (!e && e != 0 || isNaN(e) || e < 0) {
                return
            }
            if (e != 0) {
                if (e < 220) {
                    e = 220
                }
                if (e > 730) {
                    e = 730
                }
            }
            this._config.width = e
        },
        setHeight: function (e) {
            e = e * 1;
            if (!e && e != 0 || isNaN(e) || e < 0) {
                return
            }
            if (e != 0) {
                if (e < 60) {
                    e = 60
                }
                if (e > 650) {
                    e = 650
                }
            }
            this._config.height = e
        },
        setMaxWidth: function (e) {
            e = e * 1;
            if (!e && e != 0 || isNaN(e) || e < 0) {
                return
            }
            if (e != 0) {
                if (e < 220) {
                    e = 220
                }
                if (e > 730) {
                    e = 730
                }
            }
            this._config.maxWidth = e
        },
        setTitle: function (e) {
            this._config.title = e || ""
        },
        setContent: function (e) {
            this.content = e || ""
        },
        setMaxContent: function (e) {
            this._config.maxContent = e || ""
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
        dispose: function () {
            l.BaseClass.prototype.decontrol.call(this)
        },
        maximize: function () {
            this.isWinMax = true
        },
        restore: function () {
            this.isWinMax = false
        },
        setConfig: function (i) {
            if (!i) {
                return
            }
            for (var e in i) {
                if (typeof(this._config[e]) == typeof(i[e])) {
                    this._config[e] = i[e]
                }
            }
        },
        isVisible: function () {
            return this.isOpen()
        },
        isOpen: function () {
            return false
        },
        getPoint: function () {
            if (this.overlay && this.overlay.getPoint) {
                return this.overlay.getPoint()
            }
        },
        getOffset: function () {
            return this._config.offset
        },
        toString: function () {
            return "InfoWindow"
        }
    });
    C.prototype.openInfoWindow = function (aU, e) {
        if (!aU || aU.toString() != "InfoWindow" || !e || e.toString() != "Point") {
            return
        }
        var i = this.temp;
        if (!i.marker) {
            var aT = new w(aQ.imgPath + "blank.gif", {
                width: 1,
                height: 1
            });
            i.marker = new J(e, {
                icon: aT,
                width: 1,
                height: 1,
                offset: new X(0, 0),
                infoWindowOffset: new X(0, 0),
                clickable: false
            });
            i.marker._fromMap = 1
        } else {
            i.marker.setPoint(e)
        }
        this.addOverlay(i.marker);
        i.marker.openInfoWindow(aU)
    };
    C.prototype.closeInfoWindow = function () {
        var e = this.temp.infoWin || this.temp._infoWin;
        if (e && e.overlay) {
            e.overlay.closeInfoWindow()
        }
    };
    aF.prototype.openInfoWindow = function (e) {
        if (this.map) {
            this.map.closeInfoWindow();
            e._visible = true;
            this.map.temp._infoWin = e;
            e.overlay = this;
            l.BaseClass.call(e, e.hashCode)
        }
    };
    aF.prototype.closeInfoWindow = function () {
        if (this.map && this.map.temp._infoWin) {
            this.map.temp._infoWin._visible = false;
            this.map.temp._infoWin.decontrol();
            this.map.temp._infoWin = null
        }
    };

    function q(aT, i) {
        aF.call(this);
        this.content = aT;
        this.map = null;
        this.domElement = null;
        this._config = {
            width: 0,
            offset: new X(0, 0),
            styles: {
                backgroundColor: "#fff",
                border: "1px solid #f00",
                padding: "1px",
                whiteSpace: "nowrap",
                font: "12px arial,simsun",
                zIndex: "80",
                MozUserSelect: "none"
            },
            point: null,
            enableMassClear: true,
            clickable: true
        };
        i = i || {};
        this.setConfig(i);
        if (this._config.width < 0) {
            this._config.width = 0
        }
        this.point = this._config.point;
        var e = this;
        aq.load("marker", function () {
            e._draw()
        })
    }
    q.inherits(aF, "Label");
    l.extend(q.prototype, {
        setPoint: function (e) {
            if (e && e.toString() == "Point" && !this.getMarker()) {
                this.point = this._config.point = new f(e.lng, e.lat)
            }
        },
        setContent: function (e) {
            this.content = e
        },
        setOpacity: function (e) {
            if (e >= 0 && e <= 1) {
                this._config.opacity = e
            }
        },
        setOffset: function (e) {
            if (!e || e.toString() != "Size") {
                return
            }
            this._config.offset = new X(e.width, e.height)
        },
        getOffset: function () {
            return this._config.offset
        },
        setStyle: function (e) {
            e = e || {};
            this._config.styles = l.extend(this._config.styles, e)
        },
        setStyles: function (e) {
            return this.setStyle(e)
        },
        setTitle: function (e) {
            this._config.title = e || ""
        },
        getTitle: function () {
            return this._config.title
        },
        setMarker: function (e) {
            this._marker = e;
            if (e) {
                this.point = this._config.point = e.getPoint()
            } else {
                this.point = this._config.point = null
            }
        },
        getMarker: function () {
            return this._marker || null
        }
    });

    function J(e, aT) {
        aF.call(this);
        aT = aT || {};
        this.point = e;
        this.map = null;
        this.domElement = null;
        this.iconDom = null;
        this.infoWindowDom = null;
        this.siblingElement = null;
        this.iconClassName = "";
        this._config = {
            offset: new X(0, 0),
            opacity: 1,
            icon: null,
            title: "",
            infoWindow: null,
            label: null,
            baseZIndex: 0,
            clickable: true,
            zIndexFixed: false,
            isTop: false,
            enableMassClear: true,
            enableDragging: false,
            restrictDraggingArea: false
        };
        this.setConfig(aT);
        if (!aT.icon) {
            this._config.icon = new BMap.Icon(aQ.imgPath + "marker_red.png", new X(23, 25), {
                offset: new X(10, 25),
                infoWindowOffset: new X(10, 0)
            })
        }
        this._isDragging = false;
        var i = this;
        aq.load("marker", function () {
            i._draw()
        })
    }
    J.TOP_ZINDEX = O.getZIndex(-90) + 1000000;
    J.DRAG_ZINDEX = J.TOP_ZINDEX + 1000000;
    J.inherits(aF, "Marker");
    l.extend(J.prototype, {
        setIcon: function (e) {
            if (e && e.toString() == "Icon") {
                this._config.icon = e
            }
        },
        setIconClassName: function (e) {
            if (this.iconDom) {
                this.iconDom.className = e
            }
        },
        getIcon: function () {
            return this._config.icon
        },
        setLabel: function (e) {
            if (e && e.toString() == "Label") {
                this._config.label = e
            }
        },
        getLabel: function () {
            return this._config.label
        },
        enableDragging: function (e) {
            this._config.enableDragging = true
        },
        disableDragging: function () {
            this._config.enableDragging = false
        },
        setPoint: function (e) {
            if (e && e.toString() == "Point") {
                this.point = this._config.point = new f(e.lng, e.lat)
            }
        },
        setTop: function (i, e) {
            this._config.isTop = !! i;
            if (i) {
                this._addi = e || 0
            }
        },
        setTitle: function (e) {
            this._config.title = e
        },
        getTitle: function () {
            return this._config.title || ""
        },
        setOffset: function (e) {
            if (e && e.toString() == "Size") {
                this._config.offset = e
            }
        },
        getOffset: function () {
            return this._config.offset
        }
    });

    function c(e, aT) {
        au.call(this, aT);
        aT = aT || {};
        this._config.fillOpacity = aT.fillOpacity ? aT.fillOpacity : 0.65;
        if (aT.fillColor == "") {
            this._config.fillColor = ""
        } else {
            this._config.fillColor = aT.fillColor ? aT.fillColor : "#fff"
        }
        this.setPoints(e);
        var i = this;
        aq.load("poly", function () {
            i._draw()
        })
    }
    c.inherits(au, "Polygon");
    l.extend(c.prototype, {
        setPoints: function (i, e) {
            this._userPoints = au.getGraphPoints(i).slice(0);
            var aT = au.getGraphPoints(i).slice(0);
            if (aT.length > 1 && !aT[0].equals(aT[aT.length - 1])) {
                aT.push(new f(aT[0].lng, aT[0].lat))
            }
            au.prototype.setPoints.call(this, aT, e)
        },
        setPointAt: function (i, e) {
            if (!this._userPoints[i]) {
                return
            }
            this._userPoints[i] = new f(e.lng, e.lat);
            this.points[i] = new f(e.lng, e.lat);
            if (i == 0 && !this.points[0].equals(this.points[this.points.length - 1])) {
                this.points[this.points.length - 1] = new f(e.lng, e.lat)
            }
            this._calcBounds()
        },
        getPoints: function () {
            var e = this._userPoints;
            if (e.length == 0) {
                e = this.points
            }
            return e
        }
    });

    function ai(e, aT) {
        au.call(this, aT);
        this.setPoints(e);
        var i = this;
        aq.load("poly", function () {
            i._draw()
        })
    }
    ai.inherits(au, "Polyline");

    function Y(i, e, aT) {
        this.point = i;
        this.radius = Math.abs(e);
        c.call(this, [], aT)
    }
    Y.parseTolerance = {
        0: [0.01, 0.0001, 0.00001, 0.000004],
        1: [1000, 10, 1, 0.4]
    };
    Y.inherits(c, "Circle");
    l.extend(Y.prototype, {
        initialize: function (e) {
            this.map = e;
            this.points = this._getPerimeterPoints(this.point, this.radius);
            this._calcBounds();
            return null
        },
        getPoint: function () {
            return this.point
        },
        getCenter: function () {
            return this.point
        },
        setPoint: function (e, i) {
            if (!e) {
                return
            }
            this.point = e
        },
        setCenter: function (e, i) {
            this.setPoint(e, i)
        },
        getRadius: function () {
            return this.radius
        },
        setRadius: function (e, i) {
            this.radius = Math.abs(e)
        },
        _getPerimeterPoints: function (e, a0) {
            if (!e || !a0 || !this.map) {
                return []
            }
            var aT = this.map;
            var aX = e.lng,
                aV = e.lat;
            if (aT.config.coordType == BMAP_COORD_MERCATOR) {
                var a6 = ar.convertMC2LL(e);
                aX = a6.lng;
                aV = a6.lat
            }
            var a8 = [];
            var a2 = a0 / 6378800,
                aZ = (Math.PI / 180) * aV,
                a5 = (Math.PI / 180) * aX;
            for (var aY = 0; aY < 360; aY += 9) {
                var aW = (Math.PI / 180) * aY,
                    a3 = Math.asin(Math.sin(aZ) * Math.cos(a2) + Math.cos(aZ) * Math.sin(a2) * Math.cos(aW)),
                    a1 = Math.atan2(Math.sin(aW) * Math.sin(a2) * Math.cos(aZ), Math.cos(a2) - Math.sin(aZ) * Math.sin(a3)),
                    a4 = ((a5 - a1 + Math.PI) % (2 * Math.PI)) - Math.PI,
                    a7 = new f(a4 * (180 / Math.PI), a3 * (180 / Math.PI));
                if (aT.config.coordType == BMAP_COORD_LNGLAT) {
                    a8.push(a7)
                } else {
                    a8.push(V.convertLL2MC(a7))
                }
            }
            var aU = a8[0];
            a8.push(new f(aU.lng, aU.lat));
            return a8
        }
    });

    function G(e, aT) {
        c.call(this, e, aT);
        var i = this;
        aq.load("poly", function () {
            i._draw()
        })
    }
    G.inherits(c, "Rectangle");
    l.extend(G.prototype, {
        setPoints: function (aU) {
            if (!aU) {
                return
            }
            var aT = aU[0],
                e = aU[1];
            if (!aT || !e || aT.toString() != "Point" || e.toString() != "Point") {
                return
            }
            var aY = aT;
            var aW = e;
            var aX = new f(aY.lng, aW.lat);
            var aV = new f(aW.lng, aY.lat);
            var i = aT;
            this.points = [aY, aX, aW, aV, i];
            this._calcBounds()
        },
        getPoints: function () {
            return [this.points[0], this.points[2]]
        }
    });

    function aK(e, i) {
        e = isNaN(e) ? 0 : e;
        i = isNaN(i) ? 0 : i;
        this.x = e;
        this.y = i
    }
    aK.prototype.equals = function (e) {
        if (!e) {
            return false
        }
        return e.x == this.x && e.y == this.y
    };
    aK.prototype.toString = function () {
        return "Pixel"
    };

    function V() {}
    var ar = V;
    l.extend(V, {
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
        getDistanceByMC: function (aW, aU) {
            if (typeof(aW) == "undefined" || typeof(aU) == "undefined") {
                return 0
            }
            var i, aV, e, aT;
            aW = this.convertMC2LL(aW);
            if (typeof(aW) == "undefined") {
                return 0
            }
            i = this.toRadians(aW.lng);
            aV = this.toRadians(aW.lat);
            aU = this.convertMC2LL(aU);
            if (typeof(aU) == "undefined") {
                return 0
            }
            e = this.toRadians(aU.lng);
            aT = this.toRadians(aU.lat);
            return this.getDistance(i, e, aV, aT)
        },
        getDistanceByLL: function (aW, aU) {
            if (typeof(aW) == "undefined" || typeof(aU) == "undefined") {
                return 0
            }
            aW.lng = this.getLoop(aW.lng, -180, 180);
            aW.lat = this.getRange(aW.lat, -74, 74);
            aU.lng = this.getLoop(aU.lng, -180, 180);
            aU.lat = this.getRange(aU.lat, -74, 74);
            var i, e, aV, aT;
            i = this.toRadians(aW.lng);
            aV = this.toRadians(aW.lat);
            e = this.toRadians(aU.lng);
            aT = this.toRadians(aU.lat);
            return this.getDistance(i, e, aV, aT)
        },
        convertMC2LL: function (aT) {
            var aU, aW;
            aU = new f(Math.abs(aT.lng), Math.abs(aT.lat));
            for (var aV = 0; aV < this.MCBAND.length; aV++) {
                if (aU.lat >= this.MCBAND[aV]) {
                    aW = this.MC2LL[aV];
                    break
                }
            }
            var e = this.convertor(aT, aW);
            var aT = new f(e.lng.toFixed(6), e.lat.toFixed(6));
            return aT
        },
        convertLL2MC: function (e) {
            var aT, aV;
            e.lng = this.getLoop(e.lng, -180, 180);
            e.lat = this.getRange(e.lat, -74, 74);
            aT = new f(e.lng, e.lat);
            for (var aU = 0; aU < this.LLBAND.length; aU++) {
                if (aT.lat >= this.LLBAND[aU]) {
                    aV = this.LL2MC[aU];
                    break
                }
            }
            if (!aV) {
                for (var aU = this.LLBAND.length - 1; aU >= 0; aU--) {
                    if (aT.lat <= -this.LLBAND[aU]) {
                        aV = this.LL2MC[aU];
                        break
                    }
                }
            }
            var aW = this.convertor(e, aV);
            var e = new f(aW.lng.toFixed(2), aW.lat.toFixed(2));
            return e
        },
        convertor: function (aT, aU) {
            if (!aT || !aU) {
                return
            }
            var e = aU[0] + aU[1] * Math.abs(aT.lng);
            var i = Math.abs(aT.lat) / aU[9];
            var aV = aU[2] + aU[3] * i + aU[4] * i * i + aU[5] * i * i * i + aU[6] * i * i * i * i + aU[7] * i * i * i * i * i + aU[8] * i * i * i * i * i * i;
            e *= (aT.lng < 0 ? -1 : 1);
            aV *= (aT.lat < 0 ? -1 : 1);
            return new f(e, aV)
        },
        getDistance: function (i, e, aU, aT) {
            return this.EARTHRADIUS * Math.acos((Math.sin(aU) * Math.sin(aT) + Math.cos(aU) * Math.cos(aT) * Math.cos(e - i)))
        },
        toRadians: function (e) {
            return Math.PI * e / 180
        },
        toDegrees: function (e) {
            return (180 * e) / Math.PI
        },
        getRange: function (aT, i, e) {
            if (i != null) {
                aT = Math.max(aT, i)
            }
            if (e != null) {
                aT = Math.min(aT, e)
            }
            return aT
        },
        getLoop: function (aT, i, e) {
            while (aT > e) {
                aT -= e - i
            }
            while (aT < i) {
                aT += e - i
            }
            return aT
        },
        convert2DTo3D: function (aT, e) {
            if (!aT) {
                aT = "bj"
            }
            var i = m.getOMap_pts(aT, e);
            return new f(i.x, i.y)
        },
        convert3DTo2D: function (aT, e) {
            if (!aT) {
                aT = "bj"
            }
            var i = m.getMapJw_pts(aT, e);
            return new f(i.lng, i.lat)
        },
        batch3DTo2D: function (aT, e) {
            if (!aT) {
                aT = "bj"
            }
            var i = m.getMapJw_Array(aT, e);
            return i
        },
        batch2DTo3D: function (aT, e) {
            if (!aT) {
                aT = "bj"
            }
            var i = m.getOMap_Array(aT, e);
            return i
        }
    });

    function X(i, e) {
        this.width = parseFloat(i) || 0;
        this.height = parseFloat(e) || 0
    }
    X.prototype.equals = function (e) {
        return !!(e && this.width == e.width && this.height == e.height)
    };
    X.prototype.toString = function () {
        return "Size"
    };

    function ax(aZ, i, aV, aT, aU) {
        this.mgr = aZ;
        this.position = aV;
        this.name = aZ.getTileName(aT, aU);
        this.info = aT;
        var a0 = t("img");
        p(a0);
        a0.galleryImg = false;
        var aY = a0.style;
        aY.position = "absolute";
        aY.border = "none";
        aY.width = aZ.tileSize + "px";
        aY.height = aZ.tileSize + "px";
        aY.left = aV[0] + "px";
        aY.top = aV[1] + "px";
        this.img = a0;
        this.src = i;
        var aX = this;
        this.img.onload = function (a7) {
            if (!aX.mgr) {
                return
            }
            var a4 = aX.mgr;
            if (a4.map.temp._beginLoadTile) {
                a4.map.temp._loadTileTime = new Date().getTime() - a4.map.temp._beginLoadTile
            }
            var a8 = a4.bufferTiles;
            if (a4.bufferNumber > 0) {
                a8[aX.name] = aX;
                a8.push(aX.name)
            }
            var bb = a8.length - a4.bufferNumber;
            for (var a5 = 0; bb > 0 && a5 < a8.length; a5++) {
                var a1 = a8[a5];
                if (!a4.mapTiles[a1]) {
                    if (a8[a1]) {
                        a8[a1].mgr = null;
                        var a6 = a8[a1].img;
                        if (a6.parentNode) {
                            o(a6);
                            a6.parentNode.removeChild(a6)
                        }
                        a6 = null;
                        a8[a1].img = null;
                        delete a8[a1]
                    }
                    a8.splice(a5, 1);
                    a5--;
                    bb--
                }
            }
            aX.loaded = true;
            a4.imgNumber++;
            if (!s(aX.img)) {
                if (aU.tilesDiv) {
                    aU.tilesDiv.appendChild(aX.img);
                    if (FeBrowser.ie <= 6 && FeBrowser.ie > 0 && aU.isTransparentPng() == true) {
                        var ba = aX.src.toUpperCase();
                        var a2 = aX.img.style;
                        var a3 = a2.width;
                        var bc = a2.height;
                        var a9 = 'position:absolute;FILTER: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + aX.src + '",sizingMethod=scale);';
                        a2.cssText = a9;
                        a2.width = a3;
                        a2.height = bc;
                        a2.left = aX.position[0] + "px";
                        a2.top = aX.position[1] + "px"
                    }
                }
            }
            var a7 = new aw("onimagechange");
            a7.action = "show";
            a7.tile = aX.name;
            a4.map.dispatchEvent(a7)
        };
        this.img.onerror = function (a3) {
            if (!aX.mgr) {
                return
            }
            var a1 = aX.mgr;
            aX.error = true;
            var a2 = aJ[aU.mapType];
            if (a2.errorUrl) {
                aX.img.src = a2.errorUrl
            }
            if (!s(aX.img)) {
                if (aU.tilesDiv) {
                    aU.tilesDiv.appendChild(aX.img)
                }
            }
        };
        if (FeBrowser.ie <= 6 && FeBrowser.ie > 0 && aU.isTransparentPng() == true) {
            a0.src = aQ.imgPath + "blank.gif"
        } else {
            a0.src = i
        }
        a0 = null;
        var aW = new aw("onimagebefore");
        aW.tile = aX.name;
        aZ.map.dispatchEvent(aW)
    }
    function aE(e) {
        this.tileLayers = [];
        this.cacheDiv = null;
        this.map = e;
        this.bufferNumber = 300;
        this.mapTiles = [];
        this.bufferTiles = [];
        this.slideMaxZoom = 4;
        this.config = aJ[this.map.mapType];
        this.errorUrl = this.config.errorUrl;
        this.tileSize = this.config.tileSize;
        this.baseUnits = this.config.baseUnits;
        this.minZoomLevel = this.config.zoomLevelMin;
        this.maxZoomLevel = this.config.zoomLevelMax;
        this.tileURLs = this.config.tileUrls;
        this.imgNumber = 0;
        this.temp = {}
    }
    BMap.register(function (i) {
        var e = i.tileMgr = new aE(i);
        i.addEventListener("dragstart", function (aT) {
            e.dragStart(aT)
        });
        i.addEventListener("dragend", function (aT) {
            e.dragEnd(aT)
        });
        i.addEventListener("click", function (aT) {
            e.click(aT)
        });
        i.addEventListener("mousewheel", function (aT) {
            e.mouseWheel(aT)
        });
        i.addEventListener("dblclick", function (aT) {
            e.dblClick(aT)
        });
        i.addEventListener("rightdblclick", function (aT) {
            e.dblClick(aT)
        });
        i.addEventListener("minuspress", function (aT) {
            e.keypress(aT)
        });
        i.addEventListener("pluspress", function (aT) {
            e.keypress(aT)
        });
        i.addEventListener("load", function (aT) {
            e.loadTiles()
        });
        i.addEventListener("zoomstartcode", function (aT) {
            e._zoom(aT)
        });
        i.addEventListener("moving", function (aT) {
            e.mend(aT)
        });
        i.addEventListener("resize", function (aT) {
            e.resizeMap(aT)
        });
        i.addEventListener("addtilelayer", function (aT) {
            e.addTileLayer(aT)
        });
        i.addEventListener("removetilelayer", function (aT) {
            e.removeTileLayer(aT)
        })
    });
    l.extend(aE.prototype, {
        addTileLayer: function (aU) {
            var aT = this;
            var i = aU.target;
            aT.tileLayers.push(i);
            if (aT.map.loaded) {
                aT.moveGridTiles(true)
            }
        },
        removeTileLayer: function (a0) {
            var a1 = this;
            var aY = a0.target;
            var aW = aY.mapType;
            var aV = a1.mapTiles;
            var a2 = a1.bufferTiles;
            for (var aT in a2) {
                var aU = aT.split("-")[1];
                if (aU == aW) {
                    delete a2[aT]
                }
            }
            for (var aT in aV) {
                var aU = aT.split("-")[1];
                if (aU == aW) {
                    delete aV[aT]
                }
            }
            if (a1.zoomsDiv && a1.zoomsDiv.parentNode) {
                a1.zoomsDiv.parentNode.removeChild(a1.zoomsDiv);
                a1.zoomsDiv.innerHTML = ""
            }
            for (var aZ = 0, aX = a1.tileLayers.length; aZ < aX; aZ++) {
                if (aY == a1.tileLayers[aZ]) {
                    a1.tileLayers.splice(aZ, 1);
                    delete aY
                }
            }
            a1.moveGridTiles(true)
        },
        getTileLayer: function (aV) {
            var aU = this;
            for (var aT = 0, e = aU.tileLayers.length; aT < e; aT++) {
                tilelayer = aU.tileLayers[aT];
                if (tilelayer.mapType == aV) {
                    return tilelayer
                }
            }
            return
        },
        mend: function (i) {
            this.moveGridTiles(true)
        },
        _zoom: function (aT) {
            var i = this;
            if (i.zoomsDiv && i.zoomsDiv.style.display != "none") {
                i.zoomsDiv.style.display = "none"
            }
            setTimeout(function () {
                i.moveGridTiles(true);
                i.map.dispatchEvent(new aw("onzoomend"))
            }, 10)
        },
        resizeMap: function (i) {
            this.loaded = false;
            this.moveGridTiles(true)
        },
        showTile: function (aY, aX, a4, a0) {
            this.centerPos = aX;
            var aZ = aJ[a0.mapType];
            var aU = this.getTileName(aY, a0);
            var aV = (aY[0] * aZ.tileSize) + aX[0];
            var a7 = 0;
            if (a0.mapType == BMAP_PERSPECTIVE_MAP && this.map.getZoom() == 15) {
                a7 = 0.5
            }
            var aT = (a7 - 1 - aY[1]) * aZ.tileSize + aX[1];
            var a1 = [aV, aT];
            var a3 = this.mapTiles[aU];
            if (a3) {
                if (a4) {
                    aR(a3.img, a1)
                }
                return
            }
            a3 = this.bufferTiles[aU];
            if (a3) {
                this.imgNumber++;
                a0.tilesDiv.insertBefore(a3.img, a0.tilesDiv.lastChild);
                this.mapTiles[aU] = a3;
                aR(a3.img, a1);
                var a2 = new aw("onimagechange");
                a2.action = "cache";
                a2.tile = this.getTileName(aY, a0);
                this.map.dispatchEvent(a2);
                return
            } else {
                var a6 = aZ.baseUnits * Math.pow(2, (aZ.zoomLevelMax - aY[2]));
                var a5 = new f(aY[0] * a6, aY[1] * a6);
                var aW = new aK(aY[0], aY[1]);
                var i = a0.getTilesUrl(aW, aY[2]);
                a3 = new ax(this, i, a1, aY, a0);
                this.mapTiles[aU] = a3
            }
        },
        getTileName: function (e, i) {
            var aU = i.mapType;
            var aT = "";
            if (aU == BMAP_PERSPECTIVE_MAP) {
                aT = "TILE-" + aU + "-" + this.map.cityCode + "-" + e[0] + "-" + e[1] + "-" + e[2]
            } else {
                aT = "TILE-" + aU + "-" + e[0] + "-" + e[1] + "-" + e[2]
            }
            return aT
        },
        hideTile: function (aV, aU) {
            var aT = false;
            var i = aV.img;
            if (s(i)) {
                if (aV.loaded) {
                    this.imgNumber--;
                    aT = true
                }
                if (i.parentNode) {
                    o(i);
                    i.parentNode.removeChild(i)
                }
            }
            var aW = new aw("onimagechange");
            aW.tile = this.getTileName(aV.info, aU);
            aW.action = "hide";
            delete this.mapTiles[aV.name];
            if (!aT) {
                if (i.parentNode) {
                    o(i);
                    i.parentNode.removeChild(i)
                }
                i = null;
                aV.img = null;
                aV.mgr = null;
                aV = null
            }
            this.map.dispatchEvent(aW)
        },
        loadTiles: function () {
            var i = this;
            if (l.Browser.ie) {
                try {
                    document.execCommand("BackgroundImageCache", false, true)
                } catch (aU) {}
            }
            if (this.zoomsDiv && this.zoomsDiv.style.display != "none") {
                this.zoomsDiv.style.display = "none"
            }
            i.moveGridTiles(true);
            var aT = i.map;
            aT.loaded = true
        },
        getCell: function (aV, aU) {
            var e = this.baseUnits * Math.pow(2, (this.maxZoomLevel - aU));
            var aT = parseInt(aV.lng / e);
            var i = parseInt(aV.lat / e);
            return [aT, i, e * (aT + 0.5), e * (i + 0.5)]
        },
        moveGridTiles: function (bc) {
            var a8 = this.tileLayers.length;
            for (var ba = 0; ba < a8; ba++) {
                var aW = this.tileLayers[ba];
                if (aW.baseLayer || a8 == 1) {
                    this.tilesDiv = aW.tilesDiv;
                    aW.baseLayer = true
                }
                var bi = aJ[aW.mapType];
                var bm = this.map;
                var a9 = bm.zoomLevel;
                var bd = bm.centerPoint;
                this.mapCenterPoint = bd;
                var a1 = bm.getZoomUnits(bm.zoomLevel);
                var a3 = bi.baseUnits * Math.pow(2, (bi.zoomLevelMax - a9));
                var a2 = parseInt(bd.lng / a3);
                if (bd.lng < 0) {
                    a2 -= 1
                }
                var aX = parseInt(bd.lat / a3);
                if (bd.lat < 0) {
                    aX -= 1
                }
                var a7 = bi.tileSize;
                var aV = [a2, aX, (bd.lng - a2 * a3) / a3 * a7, (bd.lat - aX * a3) / a3 * a7];
                var bh = aV[0] - Math.ceil((bm.width / 2 - aV[2]) / a7);
                var aU = aV[1] - Math.ceil((bm.height / 2 - aV[3]) / a7);
                var be = aV[0] + Math.ceil((bm.width / 2 + aV[2]) / a7);
                var a5 = 0;
                if (aW.mapType == BMAP_PERSPECTIVE_MAP && bm.getZoom() == 15) {
                    a5 = 1
                }
                var a4 = aV[1] + Math.ceil((bm.height / 2 + aV[3]) / a7) + a5;
                if (bc) {
                    this.areaCenter = new f(bd.lng, bd.lat)
                }
                var aT = this.mapTiles;
                var a0 = -this.areaCenter.lng / a1;
                var aZ = this.areaCenter.lat / a1;
                var bk = [Math.round(a0), Math.round(aZ)];
                for (var bl in aT) {
                    var bn = aT[bl];
                    var bj = bn.info;
                    if (!bj) {
                        continue
                    }
                    if (bj[2] == bm.zoomLevel && (bh > bj[0] || be <= bj[0] || aU > bj[1] || a4 <= bj[1])) {
                        this.hideTile(bn, aW)
                    } else {
                        if (bj[2] != bm.zoomLevel) {
                            this.hideTile(bn, aW)
                        } else {
                            if (bj[2] == bm.lastLevel) {
                                this.showTile(bj, [bk[0] * Math.pow(2, bm.zoomLevel - bm.lastLevel), bk[1] * Math.pow(2, bm.zoomLevel - bm.lastLevel)], bc, aW)
                            }
                        }
                    }
                }
                var aY = -bm.offsetX + bm.width / 2;
                var a6 = -bm.offsetY + bm.height / 2;
                aW.tilesDiv.style.left = Math.round(a0 + aY) - bk[0] + "px";
                aW.tilesDiv.style.top = Math.round(aZ + a6) - bk[1] + "px";
                var e = [];
                this.imgTotalNumber = 0;
                for (var bg = bh; bg < be; bg++) {
                    for (var bf = aU; bf < a4; bf++) {
                        e.push([bg, bf]);
                        this.imgTotalNumber++
                    }
                }
                e.sort((function (i) {
                    return function (bo, bp) {
                        return (Math.abs(bo[0] - i[0] + bo[1] - i[1]) - Math.abs(bp[0] - i[0] + bp[1] - i[1]))
                    }
                })([aV[0], aV[1]]));
                if (!bm.temp._beginLoadTile) {
                    bm.temp._beginLoadTile = new Date().getTime()
                }
                for (var bg = 0, bb = e.length; bg < bb; bg++) {
                    this.showTile([e[bg][0], e[bg][1], bm.zoomLevel], bk, bc, aW)
                }
            }
            return
        },
        dragStart: function (i) {
            this.temp.pps = {
                x: this.map.offsetX,
                y: this.map.offsetY
            }
        },
        dragEnd: function (i) {
            this.temp.ppe = {
                x: this.map.offsetX,
                y: this.map.offsetY
            };
            if (l.Platform.iphone || l.Platform.ipad || l.Platform.android) {
                if (this.zoomsDiv && this.zoomsDiv.style.display != "none") {
                    this.zoomsDiv.style.display = "none"
                }
            }
        },
        click: function (aT) {
            if (!this.map.config.enableClickPan) {
                return
            }
            var i = this.temp;
            if (this.map.currentOperation == 0 && !i.ppe && !i.pps || (i.ppe && i.pps && (i.ppe.x - i.pps.x == 0 && i.ppe.y - i.pps.y == 0))) {
                this.map.panBy(this.map.width / 2 - aT.offsetX, this.map.height / 2 - aT.offsetY)
            }
            i.pps = null;
            i.ppe = null
        },
        mouseWheel: function (aX) {
            var aW = this.map;
            if (!aW.config.enableWheelZoom) {
                return
            }
            var aY = aW.zoomLevel + (aX.trend == true ? 1 : -1);
            var aU = aW._getProperZoom(aY);
            if (aU.exceeded) {
                return
            }
            aW.dispatchEvent(new aw("onzoomstart"));
            aW.lastLevel = aW.zoomLevel;
            aW.zoomLevel = aU.zoom;
            var i = aX.pixel;
            var aT = aW.pixelToPoint(i, aW.lastLevel, true);
            var aV = aW.getZoomUnits(aW.zoomLevel);
            aW.centerPoint = new f(aT.lng + aV * (aW.width / 2 - i.x), aT.lat - aV * (aW.height / 2 - i.y));
            this.zoom(i)
        },
        dblClick: function (a0) {
            var aV = this.map;
            if (!aV.config.enableDblclickZoom) {
                return
            }
            var a1 = a0.pixel;
            var aW = aV.pixelToPoint(a1, null, true);
            var aX = 1;
            var aT = a1;
            var aY = new X(0, 0);
            if (a0.type == "onrightdblclick") {
                aX = -1;
                aT = new aK(aV.width / 2, aV.height / 2)
            }
            var aU = aV.zoomLevel + aX;
            var aZ = aV._getProperZoom(aU);
            if (!aZ.exceeded) {
                aV.dispatchEvent(new aw("onzoomstart"));
                aV.lastLevel = aV.zoomLevel;
                aV.zoomLevel = aZ.zoom;
                if (aX == 1) {
                    aV.centerPoint = new f(aW.lng, aW.lat);
                    var i = (aV.getZoomUnits(aV.lastLevel)) / aV.getZoomUnits(aZ.zoom) * 0.5;
                    aY.width = a1.x - Math.round(aV.width / 2) * i;
                    aY.height = a1.y - Math.round(aV.height / 2) * i
                }
                this.zoom(aT, aY)
            } else {
                if (aX == 1) {
                    var a2 = aV.pixelToPoint(a1, null);
                    aV.panTo(a2)
                }
            }
        },
        keypress: function (aX) {
            var aW = this.map;
            if (!aW.config.enableContinuousZoom) {
                aX.type == "onpluspress" ? aW.zoomIn() : aW.zoomOut();
                return
            }
            if (this._zTimeLine) {
                return
            }
            var aY = aW.zoomLevel + (aX.type == "onpluspress" ? 1 : -1);
            var aU = aW._getProperZoom(aY);
            if (aU.exceeded) {
                return
            }
            aW.dispatchEvent(new aw("onzoomstart"));
            var i = new aK(aW.width / 2, aW.height / 2);
            aW.lastLevel = aW.zoomLevel;
            aW.zoomLevel = aU.zoom;
            if (aW.getInfoWindow()) {
                i = aW.pointToPixel(aW.getInfoWindow().getPoint(), aW.lastLevel);
                var aT = aW.pixelToPoint(i, aW.lastLevel, true);
                var aV = aW.getZoomUnits(aW.zoomLevel);
                aW.centerPoint = new f(aT.lng + aV * (aW.width / 2 - i.x), aT.lat - aV * (aW.height / 2 - i.y))
            }
            this.zoom(i)
        }
    });

    function F(e) {
        this.opts = e || {};
        this.copyright = this.opts.copyright || {};
        this.transparentPng = this.opts.transparentPng || false;
        this.baseLayer = this.opts.baseLayer || false;
        this.offset = [0, 0];
        this._type = "tilelayer"
    }
    F.inherits(E, "TileLayer");
    l.extend(F.prototype, {
        isTransparentPng: function () {
            return this.transparentPng
        },
        getTilesUrl: function (aZ, i) {
            var aT = aJ[this.mapType];
            if (typeof aT != "object") {
                return null
            }
            var aY = aT.baseUnits * Math.pow(2, (aT.zoomLevelMax - i));
            var a0 = aZ.x;
            var aV = aZ.y;
            var aX = Math.floor(a0 / 200);
            var aW = Math.floor(aV / 200);
            var e = "";
            if (this.opts.tileUrlTemplate) {
                e = this.opts.tileUrlTemplate;
                e = e.replace(/\{X\}/, a0);
                e = e.replace(/\{Y\}/, aV);
                e = e.replace(/\{Z\}/, i)
            } else {
                if (this.mapType == BMAP_NORMAL_MAP) {
                    e = aT.tileUrls[Math.abs(a0 + aV) % aT.tileUrls.length] + "u=x=" + a0 + ";y=" + aV + ";z=" + i + ";v=013;type=web&fm=44";
                    e = e.replace(/-(\d+)/gi, "M$1")
                }
                if (this.mapType == BMAP_PERSPECTIVE_MAP) {
                    var aU = Math.pow(2, (aT.zoomLevelMax - i)) * aT.baseUnits;
                    aV = Math.round((9998336 - aU * (aV)) / aU) - 1;
                    e = aT.tileUrls[Math.abs(a0 + aV) % aT.tileUrls.length] + this.map.currentCity + "/" + this.map.cityCode + "/3/lv" + (21 - i) + "/" + a0 + "," + aV + "." + (aT.imgExtend || "jpg")
                }
            }
            return e
        },
        initialize: function (aT) {
            if (!aT.temp.layerZIndex) {
                aT.temp.layerZIndex = 0
            }
            this.zIndex = this.zIndex || 0;
            if (this.baseLayer) {
                this.zIndex = -1
            }
            if (!aT.temp.layid) {
                aT.temp.layid = 0
            }
            if (!this.opts.mapType) {
                this.mapType = "BMAP_CUSTOM_LAYER_" + aT.temp.layid;
                aT.temp.layid++
            } else {
                this.mapType = this.opts.mapType
            }
            var e = aJ[this.mapType];
            if (!e) {
                aJ[this.mapType] = {
                    tileUrls: [],
                    tileSize: 256,
                    baseUnits: 256,
                    zoomLevelMin: 1,
                    zoomLevelMax: 18,
                    errorUrl: aQ.imgPath + "/blank.gif",
                    bounds: new y(-21364736, -10616832, 23855104, 15859712),
                    imgExtend: "png"
                }
            }
            var i = Z(aT.platform, '<div style="position:absolute;z-index:' + this.zIndex + '"></div>');
            i.style.display = "";
            i.style.left = Math.ceil(-aT.offsetX + aT.width / 2) + "px";
            i.style.top = Math.ceil(-aT.offsetY + aT.height / 2) + "px";
            this.tilesDiv = i;
            this.map = aT
        },
        remove: function () {
            if (this.tilesDiv && this.tilesDiv.parentNode) {
                this.tilesDiv.innerHTML = "";
                this.tilesDiv.parentNode.removeChild(this.tilesDiv)
            }
            delete this.tilesDiv
        },
        getCopyright: function () {
            return this.copyright
        },
        getMapType: function () {
            return this.mapType
        },
        setZIndex: function (e) {
            this.zIndex = e;
            if (this.tilesDiv) {
                this.tilesDiv.style.zIndex = e
            }
        }
    });

    function af(i, e, aT) {
        this.bounds = i;
        this.content = e;
        this.mapType = aT
    }
    af.inherits(E, "Copyright");

    function aH(e) {
        this._opts = {};
        e = e || {};
        this._opts = l.extend(this._opts, e);
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
    aH.prototype = new F();
    aH.prototype.initialize = function (e) {
        F.prototype.initialize.call(this, e);
        this._map = e
    };
    aH.prototype.isTransparentPng = function () {
        return this._opts.transparentPng
    };
    aH.prototype.getTilesUrl = function (aX, i) {
        var aY = "";
        if (this._opts.predictDate) {
            aY = "HistoryService?day=" + (this._opts.predictDate.weekday - 1) + "&hour=" + this._opts.predictDate.hour + "&t=" + new Date().getTime() + "&"
        } else {
            aY = "TrafficTileService?time=" + new Date().getTime() + "&"
        }
        var aT = this._map,
            aZ = aX.x,
            aU = aX.y,
            aW = Math.floor(aZ / 200),
            aV = Math.floor(aU / 200),
            e = this._tileUrl + aY + "level=" + i + "&x=" + aZ + "&y=" + aU;
        return e.replace(/-(\d+)/gi, "M$1")
    };

    function ao(e) {
        E.call(this);
        if (!e) {
            return
        }
        this._opts = {};
        this._map = e
    }
    ao.inherits(E, "ToolbarItem");
    l.extend(ao.prototype, {
        open: function () {
            if (this._isOpen == true) {
                return true
            }
            if (this._map._toolInUse) {
                return false
            }
            this._map._toolInUse = true;
            this._isOpen = true;
            return true
        },
        close: function () {
            if (!this._isOpen) {
                return
            }
            this._map._toolInUse = false;
            this._isOpen = false
        },
        _checkStr: function (e) {
            if (!e) {
                return ""
            }
            return e.replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }
    });

    function ak(aT, i) {
        ao.call(this, aT);
        this._opts = l.extend(l.extend(this._opts, {
            icon: null,
            iconFollow: false,
            followText: "",
            cursor: "pointer"
        }), i);
        this._isOpen = false;
        this._opts.followText = this._checkStr(this._opts.followText);
        this.followTitle = this._opts.followText;
        this.followMarker = null;
        this._overlays = [];
        var e = this;
        aq.load("tools", function () {
            e._draw()
        })
    }
    ak.inherits(ao, "PushpinTool");
    l.extend(ak.prototype, {
        setIcon: function (e) {
            if (!e || e && e.toString() != "Icon") {
                return
            }
            this._opts.icon = e
        },
        getIcon: function () {
            return this._opts.icon
        },
        setCursor: function (e) {
            this._opts.cursor = e
        },
        getCursor: function () {
            return this._opts.cursor
        },
        clear: function () {
            for (var aT = 0, e = this._overlays.length; aT < e; aT++) {
                if (this._overlays[aT].remove) {
                    this._overlays[aT].remove();
                    this._overlays[aT].dispose()
                }
            }
            this._overlays.length = 0
        },
        toString: function () {
            return "PushPinTool"
        }
    });

    function S(aT, i) {
        ao.call(this, aT);
        i = i || {};
        this._opts = l.extend(l.extend(this._opts || {}, {
            autoClear: false,
            tips: "\u6d4b\u8ddd",
            followText: "\u5355\u51fb\u786e\u5b9a\u8d77\u70b9\uff0c\u53cc\u51fb\u7ed3\u675f\u7ed8\u5236",
            unit: "metric",
            showResult: true,
            lineColor: "blue",
            lineStroke: 2,
            opacity: 1,
            lineStyle: "solid",
            cursor: aQ.imgPath + "ruler.cur",
            styleCodes: {
                lnCode: 0,
                spCode: 0,
                slCode: 0,
                tlCode: 0
            },
            enableMassClear: true
        }), i);
        if (this._opts.showResult == false) {
            if (typeof i.tips == "undefined") {
                this._opts.tips = "\u7ed8\u5236\u6298\u7ebf"
            }
            if (!i.cursor) {
                this._opts.cursor = "crosshair"
            }
        }
        if (this._opts.lineStroke <= 0) {
            lineStroke = 2
        }
        if (this._opts.opacity > 1) {
            this._opts.opacity = 1
        } else {
            if (this._opts.opacity < 0) {
                this._opts.opacity = 0
            }
        }
        if (this._opts.lineStyle != "solid" && this._opts.lineStyle != "dashed") {
            this._opts.lineStyle = "solid"
        }
        this._checked = false;
        this._drawing = null;
        this.followTitle = null;
        this._totalDis = {};
        this._points = [];
        this._paths = [];
        this._dots = [];
        this._segDistance = [];
        this._overlays = [];
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
                incon: 5279.856,
                u1: "\u82f1\u5c3a",
                u2: "\u82f1\u91cc"
            }
        };
        if (!this._units[this._opts.unit]) {
            this._opts.unit = "metric"
        }
        this._dLineColor = "#ff6319";
        this._dLineStroke = 3;
        this._dOpacity = 0.8;
        this._dLineStyle = "solid";
        this._dCursor = aQ.imgPath + "ruler.cur";
        if (this._opts.showResult) {
            this._opts.followText = "\u5355\u51fb\u786e\u5b9a\u8d77\u70b9"
        }
        this._followTextM = "\u5355\u51fb\u786e\u5b9a\u5730\u70b9\uff0c\u53cc\u51fb\u7ed3\u675f";
        this._movingTimerId = null;
        if (this._opts.showResult) {
            this.text = "\u6d4b\u8ddd"
        } else {
            this.text = "\u7ed8\u7ebf"
        }
        this._isOpen = false;
        var e = this;
        aq.load("tools", function () {
            e._draw()
        })
    }
    S.inherits(ao, "PolylineTItem");
    l.extend(S.prototype, {
        setLineColor: function (e) {
            this._opts.lineColor = e
        },
        setLineStroke: function (e) {
            if (Math.round(e) > 0) {
                this._opts.lineStroke = Math.round(e)
            }
        },
        setOpacity: function (e) {
            if (e >= 0 && e <= 1) {
                this._opts.opacity = e
            }
        },
        setLineStyle: function (e) {
            if (e == "solid" || e == "dashed") {
                this._opts.lineStyle = e
            }
        },
        clear: function () {
            for (var aT = 0, e = this._overlays.length; aT < e; aT++) {
                if (this._overlays[aT]) {
                    this._map.removeOverlay(this._overlays[aT])
                }
            }
            this._overlays.length = 0;
            for (var aT = 0, e = this._dots.length; aT < e; aT++) {
                if (this._dots[aT] && this._dots[aT].parentNode) {
                    this._dots[aT].parentNode.removeChild(this._dots[aT])
                }
            }
            this._dots.length = 0
        },
        setCursor: function (e) {
            if (this._opts.showResult == true) {} else {
                this._opts.cursor = e
            }
        },
        getCursor: function () {
            if (this._opts.showResult == true) {
                return this._dCursor
            }
            var e = this._opts.cursor.match(/^url\((.+)\)(,.*)?/);
            if (e != null) {
                return e[1]
            } else {
                return this._opts.cursor
            }
        },
        showResult: function (e) {
            this._opts.showResult = !! e
        },
        toString: function () {
            return "DistanceTool"
        }
    });
    window.BMAP_ZOOM_IN = 0;
    window.BMAP_ZOOM_OUT = 1;

    function n(aT, i) {
        ao.call(this, aT);
        this._opts = l.extend(l.extend(this._opts, {
            zoomType: BMAP_ZOOM_IN,
            followText: "",
            strokeWeight: 2,
            strokeColor: "#111",
            style: "solid",
            fillColor: "#ccc",
            opacity: 0.4,
            cursor: "crosshair",
            autoClose: false
        }), i);
        this._opts.strokeWeight = this._opts.strokeWeight <= 0 ? 1 : this._opts.strokeWeight;
        this._opts.opacity = this._opts.opacity < 0 ? 0 : this._opts.opacity > 1 ? 1 : this._opts.opacity;
        if (this._opts.zoomType < BMAP_ZOOM_IN || this._opts.zoomType > BMAP_ZOOM_OUT) {
            this._opts.zoomType = BMAP_ZOOM_IN
        }
        this._isOpen = false;
        this._fDiv = null;
        this.followTitle = null;
        var e = this;
        aq.load("tools", function () {
            e._draw()
        })
    }
    n.inherits(ao, "DragAndZoomTool");
    l.extend(n.prototype, {
        setStrokeColor: function (e) {
            if (typeof e == "string") {
                this._opts.strokeColor = e
            }
        },
        setLineStroke: function (e) {
            if (typeof e == "number" && Math.round(e) > 0) {
                this._opts.strokeWeight = Math.round(e)
            }
        },
        setLineStyle: function (e) {
            if (e == "solid" || e == "dashed") {
                this._opts.style = e
            }
        },
        setOpacity: function (e) {
            if (typeof e == "number" && e >= 0 && e <= 1) {
                this._opts.opacity = e
            }
        },
        setLineStyle: function (e) {
            if (e == "solid" || e == "dashed") {
                this._opts.style = e
            }
        },
        setFillColor: function (e) {
            this._opts.fillColor = e
        },
        setCursor: function (e) {
            this._opts.cursor = e
        },
        getCursor: function () {
            return this._opts.cursor
        },
        toString: function () {
            return "DragAndZoomTool"
        }
    });

    function ad() {
        this._container = null
    }
    BMap.register(function (i) {
        if (i.config.isOverviewMap) {
            return
        }
        var e = new ad();
        i.container.insertAdjacentHTML("beforeEnd", e.render(i.config.defaultCursor));
        e._container = i.container.lastChild;
        i.temp.zoomer = e
    });
    ad.prototype.render = function (i) {
        var e = ['<div id=zoomer style="position:absolute;z-index:0;top:0px;left:0px;overflow:hidden;visibility:hidden;cursor:' + i + '">'];
        e.push('<div class="BMap_zoomer" style="top:0;left:0;"></div>');
        e.push('<div class="BMap_zoomer" style="top:0;right:0;"></div>');
        e.push('<div class="BMap_zoomer" style="bottom:0;left:0;"></div>');
        e.push('<div class="BMap_zoomer" style="bottom:0;right:0;"></div>');
        e.push("</div>");
        return e.join("")
    };
    ad.prototype.action = function (aZ, a0) {
        if (ad._timeline) {
            return
        }
        var aY = this._container;
        if (!aY) {
            return
        }
        var a7 = a0;
        var aT = 60;
        var a6 = 120;
        var a1 = 4 / 3,
            aV = Math.ceil((a7 ? aT : a6) / 2),
            aW = Math.max(15, aV / a1),
            aX = aY.style;
        aX.width = aV * 2 + "px";
        aX.height = aW * 2 + "px";
        aX.visibility = "visible";
        var a3 = aY.children;
        if (a7) {
            a3[0].style.backgroundPosition = "0 0";
            a3[1].style.backgroundPosition = "-7px 0";
            a3[2].style.backgroundPosition = "0 -7px";
            a3[3].style.backgroundPosition = "-7px -7px"
        } else {
            a3[0].style.backgroundPosition = "-7px -7px";
            a3[1].style.backgroundPosition = "0 -7px";
            a3[2].style.backgroundPosition = "-7px 0";
            a3[3].style.backgroundPosition = "0 0"
        }
        a3 = null;
        var a5 = aZ.x - aV;
        var a4 = aZ.y - aW;
        if (isNaN(a5) || isNaN(a4)) {
            return
        }
        aX.left = a5 + "px";
        aX.top = a4 + "px";
        var i = Math.ceil((a7 ? a6 : aT) / 2);
        var aU = Math.max(15, i / a1);
        i = i - aV;
        aU = Math.ceil(aU - aW);
        var a2 = this;
        var e = a2._container.style;
        if (ad._timeline) {
            ad._timeline.end()
        }
        ad._timeline = new aG({
            fps: 20,
            duration: 240,
            transition: k.easeInQuad,
            delay: 100,
            render: function (a9) {
                if (a9 < 0.1) {
                    return
                }
                var ba = Math.ceil(i * a9);
                var a8 = Math.ceil(aU * a9);
                e.width = (aV + ba) * 2 + "px";
                e.height = (aW + a8) * 2 + "px";
                e.left = a5 - ba + "px";
                e.top = a4 - a8 + "px"
            },
            finish: function () {
                ad._timeline = false;
                setTimeout(function () {
                    aX.visibility = "hidden"
                }, 300)
            }
        })
    };
    BMap.Map = C;
    BMap.MapType = aJ;
    BMap.Point = f;
    BMap.Pixel = aK;
    BMap.Size = X;
    BMap.Bounds = y;
    BMap.Area = x;
    BMap.TileLayer = F;
    BMap.Copyright = af;
    BMap.CoordTrans = m;
    BMap.Projection = V;
    BMap.Overlay = O;
    BMap.Label = q;
    BMap.Marker = J;
    BMap.Icon = w;
    BMap.Polyline = ai;
    BMap.Polygon = c;
    BMap.Rectangle = G;
    BMap.InfoWindow = ay;
    BMap.Circle = Y;
    BMap.Control = P;
    BMap.NavigationControl = H;
    BMap.OverviewMapControl = ah;
    BMap.CopyrightControl = K;
    BMap.ScaleControl = T;
    BMap.MapTypeControl = ae;
    BMap.PushpinTool = ak;
    BMap.DistanceTool = S;
    BMap.DragAndZoomTool = n;
    BMap.TrafficLayer = aH;
    BMap.ContextMenu = g;
    BMap.MenuItem = L;
    BMap.OperationMask = ap;
    BMap.register(function (e) {
        if (e.config && e.config.isOverviewMap) {
            return
        }
        e.addEventListener("load", function () {
            if (e.temp.copyadded) {
                return
            }
            e.temp.copyadded = true;
            var aU = new K({
                offset: new X(81, 2),
                printable: true
            });
            var aT = "&copy; 2012 Baidu";
            if (e.getMapType() == BMAP_PERSPECTIVE_MAP) {
                aT = '<span style="color:#fff">&copy; 2012 Baidu - Data &copy; </span><a href="http://o.cn" target="_blank" style="color:#fff">\u90fd\u5e02\u5708</a>'
            }
            aU.addCopyright({
                content: aT,
                id: 1
            });
            e.addEventListener("maptypechange", function () {
                var aV = e.getMapType();
                if (aV == BMAP_PERSPECTIVE_MAP) {
                    aU.addCopyright({
                        id: 1,
                        content: '<span style="color:#fff;text-shadow:0 1px 3px black">&copy; 2012 Baidu - Data &copy; </span><a href="http://o.cn" target="_blank" style="color:#fff;text-shadow:0 1px 3px black">\u90fd\u5e02\u5708</a>'
                    })
                }
                if (aV == BMAP_NORMAL_MAP) {
                    aU.addCopyright({
                        id: 1,
                        content: "&copy; 2012 Baidu"
                    })
                }
            });
            e.addControl(aU);
            var i = new I();
            i._opts = {
                printable: true
            };
            e.addControl(i);
            e.addEventListener("resize", function () {
                if (this.getSize().width >= 220 && e.getSize().height >= 100) {
                    i.show();
                    aU.setOffset(new X(81, 2))
                } else {
                    i.hide();
                    aU.setOffset(new X(4, 2))
                }
            });
            if (e.getSize().width >= 220 && e.getSize().height >= 100) {
                i.show()
            } else {
                i.hide();
                aU.setOffset(new X(4, 2))
            }
        })
    });

    function I(e) {
        this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
        this.defaultOffset = new X(1, 0);
        this._useSmallImage = !! (l.Platform.ipad || l.Platform.iphone || l.Platform.android);
        this.IMG_URL = aQ.imgPath + (this._useSmallImage ? "copyright_logo_s.png" : "copyright_logo.png")
    }
    I.prototype = new P();
    I.prototype.initialize = function (i) {
        this._map = i;
        var aT = t("div");
        aT.style.height = "32px";
        var e = t("a", {
            title: "\u5230\u767e\u5ea6\u5730\u56fe\u9996\u9875",
            target: "_blank",
            href: "http://map.baidu.com/?sr=1"
        });
        e.style.outline = "none";
        if (l.Browser.ie == 6) {
            e.innerHTML = "<div style='cursor:pointer;width:77px;height:32px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + this.IMG_URL + ")'></div>"
        } else {
            e.innerHTML = "<img style='border:none;width:77px;height:32px' src='" + this.IMG_URL + "' />"
        }
        if (this._useSmallImage) {
            aT.style.height = "25px";
            e.href = "#";
            e.innerHTML = "<img style='border:none;width:68px;height:25px' src='" + this.IMG_URL + "' />"
        }
        aT.appendChild(e);
        i.getContainer().appendChild(aT);
        e = null;
        return aT
    };
    window.BMap.apiLoad();
})();