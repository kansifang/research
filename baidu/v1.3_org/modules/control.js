a7.extend(K.prototype, {
    _asyncDraw: function () {
        if (this._map) {
            this._i(this._map)
        }
    },
    initialize: function (T) {
        co.prototype.initialize.call(this, T);
        this._initParam();
        this._setParam();
        this._render();
        this._bind();
        this._setSliderZoomLv(T.getZoom());
        this._bindMapEvent(T);
        return this._container
    },
    _initParam: function () {
        if (this._init) {
            return
        }
        this._init = true;
        this._maxTotalZoomLv = 19;
        this._minZoomLevel = -1;
        this._maxZoomLevel = -1;
        this._totalZoomLv = -1;
        this._sliderInterval = 6;
        this._minBarY = 1;
        this._maxBarY = -1;
        this._curBarY = -1;
        this._zoomDom = null;
        this._zoomBtnDom = null;
        this._sliderDom = null;
        this._sliderBaseDom = null;
        this._cZIndex = "1100"
    },
    _bindMapEvent: function (cK) {
        var T = this;
        cK.addEventListener("zoomend", function (cL) {
            if (!T._map) {
                return
            }
            T._setSliderZoomLv(T._map.getZoom());
            if (T._msover) {
                return
            }
            if (T._isShowLevelHint) {
                T._hideTimerId = setTimeout(function () {
                    T._hideLevelHint()
                }, 1000)
            }
        });
        cK.addEventListener("mousewheel", function () {
            if (!T._map) {
                return
            }
            if (T._map.config.enableWheelZoom && T._isShowLevelHint) {
                if (T._hideTimerId) {
                    clearTimeout(T._hideTimerId);
                    T._hideTimerId = null
                }
                T._showLevelHint()
            }
        });
        cK.addEventListener("load", function (cL) {
            if (!T._map) {
                return
            }
            T._setSliderZoomLv(T._map.getZoom())
        });
        cK.addEventListener("maptypechange", function (cL) {
            if (!T._map) {
                return
            }
            T.redraw()
        });
        cK.addEventListener("zoomspanchange", function (cL) {
            if (!T._map) {
                return
            }
            T.redraw()
        })
    },
    redraw: function () {
        this._setParam();
        this.setType(this._opts.type);
        if (this._map) {
            this._setSliderZoomLv(this._map.getZoom())
        }
    },
    _setParam: function () {
        var T = this._map.getMapType();
        this._minZoom = this._map.config.minZoom;
        this._maxZoom = this._map.config.maxZoom;
        if (T == BMAP_PERSPECTIVE_MAP || this._minZoom != T.getMinZoom() || this._maxZoom != T.getMaxZoom()) {
            this._isShowLevelHint = false
        } else {
            this._isShowLevelHint = true
        }
        if (this._container) {
            this._container.style.width = this._getControlHeight(0).width + "px"
        }
        if (!this._opts.showZoomInfo) {
            this._isShowLevelHint = false
        }
        this._totalZoomLv = this._maxZoom - this._minZoom + 1;
        this._maxBarY = this._minBarY + (this._totalZoomLv - 1) * this._sliderInterval
    },
    _render: function () {
        co.prototype._render.call(this);
        var cL = a7.browser.ie == 6 ? " BMap_ie6" : "";
        var cK = " BMap_stdMpType" + this._opts.type;
        var cM = this._container;
        a7.dom.addClass(cM, "BMap_stdMpCtrl");
        a7.dom.addClass(cM, cL);
        a7.dom.addClass(cM, cK);
        cM.innerHTML = this._generateHtml(this._opts.type);
        this._setSliderBarCursor(a7.browser.opera ? "pointer" : cb.defaultCursor);
        this._panBtnContainer = a7.g(cM.children[0]);
        this._zoomDom = a7.g(cM.children[1]);
        var T = this._zoomDom;
        this._btnZoomIn = a7.g(T.children[0]);
        this._btnZoomOut = a7.g(T.children[1]);
        this._sliderDom = a7.g(T.children[2]);
        this._sliderBaseDom = a7.g(T.children[2].children[0]);
        this._sliderBotDom = a7.g(T.children[2].children[1]);
        this.setType(this._opts.type)
    },
    _setSliderHeight: function () {
        var cR = this._opts.type;
        var T = this._getControlHeight(cR);
        var cP = T.width;
        var cK = T.height;
        var cN = T.zoomHeight;
        var cQ = T.zoomWidth;
        var cL = T.sliderHeight;
        var cO = T.sliderCHeight;
        var cM = (this._maxTotalZoomLv - this._totalZoomLv) * this._sliderInterval;
        if (this._opts.type == BMAP_NAVIGATION_CONTROL_LARGE) {
            cK = cK - cM >= 0 ? cK - cM : 0;
            cN = cN - cM >= 0 ? cN - cM : 0;
            cL = cL - cM >= 0 ? cL - cM : 0
        }
        this._container.style.width = cP + "px";
        this._container.style.height = cK + "px";
        this._zoomDom.style.height = cN + "px";
        this._zoomDom.style.width = cP + "px";
        this._btnZoomOut.style.top = cN - 21 + "px";
        this._sliderDom.style.height = cL + "px";
        this._sliderBaseDom.style.height = cL + "px";
        if (this._opts.type == BMAP_NAVIGATION_CONTROL_ZOOM) {
            this._zoomDom.children[0].style.left = this._zoomDom.children[1].style.left = "0"
        } else {
            this._zoomDom.children[0].style.left = this._zoomDom.children[1].style.left = ""
        }
    },
    _getControlHeight: function (cK) {
        var T = 62;
        if (!this._opts.showZoomInfo || this._map.getMapType() == BMAP_PERSPECTIVE_MAP) {
            T = 37
        }
        var cL = [{
            width: T,
            height: 204,
            zoomHeight: 159,
            zoomWidth: 37,
            sliderHeight: 120,
            sliderCHeight: 120
        }, {
            width: 37,
            height: 97,
            zoomHeight: 42,
            zoomWidth: 37,
            sliderHeight: 0,
            sliderCHeight: 0
        }, {
            width: 37,
            height: 57,
            zoomHeight: 0,
            zoomWidth: 0,
            sliderHeight: 0,
            sliderCHeight: 0
        }, {
            width: 22,
            height: 42,
            zoomHeight: 42,
            zoomWidth: 18,
            sliderHeight: 0,
            sliderCHeight: 0
        }];
        return cL[cK]
    },
    _generateHtml: function () {
        var T = [];
        T.push(this._generatePanHtml());
        T.push(this._generateZoomContainerHtml());
        return T.join("")
    },
    _generatePanHtml: function () {
        var T = '<div class="BMap_stdMpPan"><div class="BMap_button BMap_panN" title="\u5411\u4e0a\u5e73\u79fb"></div><div class="BMap_button BMap_panW" title="\u5411\u5de6\u5e73\u79fb"></div><div class="BMap_button BMap_panE" title="\u5411\u53f3\u5e73\u79fb"></div><div class="BMap_button BMap_panS" title="\u5411\u4e0b\u5e73\u79fb"></div><div class="BMap_stdMpPanBg BMap_smcbg"></div></div>';
        return T
    },
    _generateZoomContainerHtml: function () {
        var T = '<div class="BMap_stdMpZoom">' + this._generateZoomHtml() + this._generateSliderHtml() + this._generateZoomBalloonHtml() + "</div>";
        return T
    },
    _generateZoomHtml: function () {
        var T = '<div class="BMap_button BMap_stdMpZoomIn" title="\u653e\u5927\u4e00\u7ea7"><div class="BMap_smcbg"></div></div><div class="BMap_button BMap_stdMpZoomOut" title="\u7f29\u5c0f\u4e00\u7ea7"><div class="BMap_smcbg"></div></div>';
        return T
    },
    _generateSliderHtml: function () {
        var T = '<div class="BMap_stdMpSlider"><div class="BMap_stdMpSliderBgTop"><div class="BMap_smcbg"></div></div><div class="BMap_stdMpSliderBgBot"></div><div class="BMap_stdMpSliderMask" title="\u653e\u7f6e\u5230\u6b64\u7ea7\u522b"></div><div class="BMap_stdMpSliderBar" title="\u62d6\u52a8\u7f29\u653e"><div class="BMap_smcbg"></div></div></div>';
        return T
    },
    _generateZoomBalloonHtml: function () {
        var T = '<div class="BMap_zlHolder"><div class="BMap_zlSt"><div class="BMap_smcbg"></div></div><div class="BMap_zlCity"><div class="BMap_smcbg"></div></div><div class="BMap_zlProv"><div class="BMap_smcbg"></div></div><div class="BMap_zlCountry"><div class="BMap_smcbg"></div></div></div>';
        return T
    },
    _getElementByClassNamePattern: function (cN) {
        var cM = this._getElementByClassNamePattern;
        if (typeof(cM.cache) === "undefined") {
            cM.cache = me._container.getElementsByTagName("*")
        }
        var cK = cM.cache,
            cL = null,
            T = cK.length,
            cO = null;
        for (cL = 0; cL < T; ++cL) {
            cO = cK[cL];
            if (cO.className.toString().match(cN)) {
                return cO
            }
        }
        throw Error(String(cN) + " Not found!")
    },
    setType: function (T) {
        if (aJ(T) && T >= BMAP_NAVIGATION_CONTROL_LARGE && T <= BMAP_NAVIGATION_CONTROL_ZOOM) {
            this._opts.type = T
        } else {
            this._opts.type = BMAP_NAVIGATION_CONTROL_LARGE
        }
        if (!this._map || !this._container) {
            return
        }
        var cK = this._container;
        cK.className = cK.className.replace(/BMap_stdMpType[0-3]*/, "BMap_stdMpType" + this._opts.type);
        this._setSliderHeight();
        if (T != BMAP_NAVIGATION_CONTROL_LARGE) {
            a7.dom.removeClass(cK.children[1].children[2], "hvr")
        }
        this.setAnchor(this._opts.anchor)
    },
    getType: function () {
        return this._opts.type
    },
    _bind: function () {
        var cQ = this;
        var cP = cQ._container;
        a7.on(this._zoomDom, "mouseover", function () {
            if (!cQ._isShowLevelHint) {
                return
            }
            cQ._msover = true;
            if (cQ._hideTimerId) {
                clearTimeout(cQ._hideTimerId);
                cQ._hideTimerId = null
            }
            cQ._showLevelHint()
        });
        a7.on(this._zoomDom, "mouseout", function () {
            if (!cQ._isShowLevelHint) {
                return
            }
            if (cQ._hideTimerId) {
                clearTimeout(cQ._hideTimerId)
            }
            cQ._msover = false;
            cQ._hideTimerId = setTimeout(function () {
                cQ._hideLevelHint();
                cQ._hideTimerId = null
            }, 1000)
        });
        a7.on(cP.children[0], "mouseover", function () {
            cQ._hideLevelHint(true)
        });
        a7.on(cP.children[0].children[0], "click", function () {
            cQ._panBy(0, Math.round(cQ._map.height / 3))
        });
        a7.on(cP.children[0].children[1], "click", function () {
            cQ._panBy(Math.round(cQ._map.width / 3), 0)
        });
        a7.on(cP.children[0].children[2], "click", function () {
            cQ._panBy(-Math.round(cQ._map.width / 3), 0)
        });
        a7.on(cP.children[0].children[3], "click", function () {
            cQ._panBy(0, -Math.round(cQ._map.height / 3))
        });
        a7.on(cP.children[0].children[0], "mouseover", function () {
            cQ._panBtnContainer.style.backgroundPosition = "0 -44px"
        });
        a7.on(cP.children[0].children[1], "mouseover", function () {
            cQ._panBtnContainer.style.backgroundPosition = "0 -176px"
        });
        a7.on(cP.children[0].children[2], "mouseover", function () {
            cQ._panBtnContainer.style.backgroundPosition = "0 -88px"
        });
        a7.on(cP.children[0].children[3], "mouseover", function () {
            cQ._panBtnContainer.style.backgroundPosition = "0 -132px"
        });
        a7.on(cQ._panBtnContainer, "mouseout", function () {
            cQ._panBtnContainer.style.backgroundPosition = "0 0"
        });
        var cN = cP.children[1].children;
        a7.on(cN[0], "click", function () {
            cQ._zoomIn()
        });
        a7.on(cN[1], "click", function () {
            cQ._zoomOut()
        });
        for (var cL = 0; cL < 5; cL++) {
            a7.on(cP.children[0].children[cL], "mouseup", function (cS) {
                if ((cQ._map.currentOperation & bm.stdMapCtrlDrag) == 0 && (cQ._map.currentOperation & bm.drag) == 0) {
                    aO(cS)
                }
            });
            a7.on(cP.children[0].children[cL], "contextmenu", function (cS) {
                cB(cS)
            });
            a7.on(cP.children[0].children[cL], "click", function (cS) {
                cB(cS)
            })
        }
        a7.on(cN[0], "mouseup", function (cS) {
            if ((cQ._map.currentOperation & bm.stdMapCtrlDrag) == 0 && (cQ._map.currentOperation & bm.drag) == 0) {
                aO(cS)
            }
        });
        a7.on(cN[1], "mouseup", function (cS) {
            if ((cQ._map.currentOperation & bm.stdMapCtrlDrag) == 0 && (cQ._map.currentOperation & bm.drag) == 0) {
                aO(cS)
            }
        });
        a7.on(cN[0], "contextmenu", function (cS) {
            cB(cS)
        });
        a7.on(cN[1], "contextmenu", function (cS) {
            cB(cS)
        });
        var cR = cP.children[1].children[2].children[2];
        a7.on(cR, "mouseup", function (cS) {
            if ((cQ._map.currentOperation & bm.stdMapCtrlDrag) == 0 && (cQ._map.currentOperation & bm.drag) == 0) {
                aO(cS)
            }
        });
        a7.on(cN[0], "click", function (cS) {
            aO(cS)
        });
        a7.on(cN[1], "click", function (cS) {
            aO(cS)
        });
        a7.on(cN[0], "mouseover", function () {
            cN[0].style.backgroundPosition = "0 -243px"
        });
        a7.on(cN[0], "mouseout", function () {
            if ((cQ._map.currentOperation & bm.stdMapCtrlDrag) == 0) {
                cN[0].style.backgroundPosition = "0 -221px"
            }
        });
        a7.on(cN[1], "mouseover", function () {
            cN[1].style.backgroundPosition = "0 -287px"
        });
        a7.on(cN[1], "mouseout", function () {
            if ((cQ._map.currentOperation & bm.stdMapCtrlDrag) == 0) {
                cN[1].style.backgroundPosition = "0 -265px"
            }
        });
        a7.on(cR, "click", function (cS) {
            aO(cS)
        });
        var cO = cP.children[1].children[2].children[3];
        a7.on(cO, "mouseup", function (cS) {
            if (cS.button == 2) {
                aO(cS)
            }
        });
        a7.on(cO, "contextmenu", function (cS) {
            cB(cS)
        });
        a7.on(this._zoomDom.children[3].children[0], "click", function (cS) {
            cQ._map.zoomTo(18)
        });
        a7.on(this._zoomDom.children[3].children[1], "click", function (cS) {
            cQ._map.zoomTo(12)
        });
        a7.on(this._zoomDom.children[3].children[2], "click", function (cS) {
            cQ._map.zoomTo(8)
        });
        a7.on(this._zoomDom.children[3].children[3], "click", function (cS) {
            cQ._map.zoomTo(4)
        });
        a7.on(cR, "mousedown", function (cT) {
            cT = window.event || cT;
            var cS = cT.layerY || cT.offsetY || 0;
            var cU = 0;
            cU = (cQ._maxZoom + 1) - Math.round(cQ._totalZoomLv * parseFloat(cS / (cQ._totalZoomLv * cQ._sliderInterval)));
            cQ._map.zoomTo(cU)
        });
        a7.on(cO, "mouseover", function () {
            a7.dom.addClass(cO, "h")
        });
        a7.on(cO, "mouseout", function () {
            if ((cQ._map.currentOperation & bm.stdMapCtrlDrag) == 0) {
                a7.dom.removeClass(cO, "h")
            }
        });
        var cM = function (cS) {
            var cS = window.event || cS;
            if (cS.button == 2) {
                return
            }
            if ((a7.browser.ie && cS.button != 1)) {
                return
            }
            if (cO.setCapture) {
                cO.setCapture()
            }
            cQ._map.currentOperation |= bm.stdMapCtrlDrag;
            cQ._bind.my = cS.pageY || cS.clientY || 0;
            if (!a7.browser.opera) {
                cQ._setSliderBarCursor(cb.draggingCursor)
            }
            a7.on(document, "mousemove", T);
            a7.on(document, "mouseup", cK);
            aO(cS);
            return cB(cS)
        };
        var T = function (cT) {
            if ((cQ._map.currentOperation & bm.stdMapCtrlDrag) != 0) {
                var cT = window.event || cT;
                var cU = cT.pageY || cT.clientY;
                var cS = cQ._curBarY + cU - cQ._bind.my;
                if (cS < cQ._minBarY) {
                    cS = cQ._minBarY
                } else {
                    if (cS > cQ._maxBarY) {
                        cS = cQ._maxBarY
                    }
                }
                cO.style.top = cS + "px";
                cQ._sliderBotDom.style.top = cS + "px";
                cQ._sliderBotDom.style.height = parseInt(cQ._sliderBaseDom.style.height) - cS + 4 + "px"
            }
        };
        var cK = function (cT) {
            if ((cQ._map.currentOperation & bm.stdMapCtrlDrag) != 0) {
                var cS = a7.g(cO);
                cQ._curBarY = parseInt(cS.style.top);
                a7.dom.removeClass(cO, "h");
                cQ._map.currentOperation &= ~bm.stdMapCtrlDrag;
                if (cP && cO && cO.releaseCapture) {
                    cO.releaseCapture()
                }
                if (!a7.browser.opera) {
                    cQ._setSliderBarCursor(cb.defaultCursor)
                }
                var cU = (cQ._maxZoom + 1) - Math.round(parseFloat(cQ._curBarY - cQ._minBarY) / parseFloat(cQ._maxBarY - cQ._minBarY) * (cQ._totalZoomLv - 1) + 1);
                cQ._map.zoomTo(cU);
                a7.un(document, "mousemove", T);
                a7.un(document, "mouseup", cK)
            }
        };
        a7.on(cO, "mousedown", cM)
    },
    _setSliderBarCursor: function (T) {
        this._container.children[1].children[2].children[3].style.cursor = T
    },
    _panBy: function (cK, T) {
        this._map.panBy(cK, T)
    },
    _zoomIn: function () {
        this._map.zoomIn()
    },
    _zoomOut: function () {
        this._map.zoomOut()
    },
    _setSliderZoomLv: function (cK) {
        if (!this._container || this.getType() != BMAP_NAVIGATION_CONTROL_LARGE) {
            return
        }
        var T = (this._maxZoom - cK) * this._sliderInterval + this._minBarY;
        this._curBarY = T > this._maxBarY ? this._maxBarY : T < this._minBarY ? this._minBarY : T;
        this._container.children[1].children[2].children[3].style.top = this._curBarY + "px";
        this._sliderBotDom.style.top = this._curBarY + "px";
        this._sliderBotDom.style.height = parseInt(this._sliderBaseDom.style.height) - this._curBarY + 4 + "px"
    },
    _hideLevelHint: function (T) {
        if (this._opts.type == 0) {
            a7.dom.removeClass(this._container.children[1].children[3], "hvr")
        }
        if (T && this._hideTimerId) {
            clearTimeout(this._hideTimerId);
            this._hideTimerId = null
        }
    },
    _showLevelHint: function () {
        if (this._opts.type == 0 && this._opts.showZoomInfo) {
            a7.dom.addClass(this._container.children[1].children[3], "hvr")
        }
    },
    show: function () {
        co.prototype.show.call(this);
        if (a7.browser.ie < 8) {
            var T = this;
            setTimeout(function () {
                T.setType(T._opts.type)
            }, 1)
        }
    }
});
a7.extend(al.prototype, {
    _asyncDraw: function () {
        if (this._map) {
            this._i(this._map)
        }
    },
    initialize: function (T) {
        co.prototype.initialize.call(this, T);
        this._render();
        this._updateState();
        this._bind(T);
        return this._container
    },
    _bind: function (cK) {
        var T = this;
        cK.addEventListener("load", function (cL) {
            T._updateState()
        });
        cK.addEventListener("moveend", function (cL) {
            T._updateState()
        });
        cK.addEventListener("zoomend", function (cL) {
            T._updateState()
        });
        cK.addEventListener("maptypechange", function () {
            if (T._container) {
                T._container.style.color = T._map.getMapType().getTextColor()
            }
        })
    },
    _render: function () {
        co.prototype._render.call(this);
        a7.dom.addClass(this._container, "BMap_cpyCtrl");
        var T = this._container.style;
        T.cursor = "default";
        T.whiteSpace = "nowrap";
        T.MozUserSelect = "none";
        T.color = this._map.getMapType().getTextColor();
        T.background = "none";
        T.font = "11px/15px " + cb.fontFamily;
        co.prototype._setPosition.call(this)
    },
    _updateState: function () {
        if (!this._map || !this._container || this._copyrightCollection.length == 0) {
            return
        }
        for (var cN = 0, cL = this._copyrightCollection.length; cN < cL; cN++) {
            var cK;
            var T = this._map.getZoom();
            var cR = this._map.pixelToPoint({
                x: 0,
                y: 0
            });
            var cQ = this._map.pixelToPoint({
                x: this._map.width,
                y: this._map.height
            });
            var cP = new bM(cR, cQ);
            if (this._copyrightCollection[cN].bounds && cP.intersects(this._copyrightCollection[cN].bounds) == null) {
                cK = false
            } else {
                cK = true
            }
            if (cK) {
                if (this._container) {
                    var cS = false;
                    for (var cM = 0, cO = this._container.children.length; cM < cO; cM++) {
                        if (this._container.children[cM].getAttribute("_cid") == this._copyrightCollection[cN].id) {
                            cS = true;
                            this._container.children[cM].style.display = "inline";
                            if (this._container.children[cM].innerHTML != this._copyrightCollection[cN].content) {
                                this._container.children[cM].innerHTML = this._copyrightCollection[cN].content
                            }
                            break
                        }
                    }
                    if (!cS) {
                        this._generateHTML(this._copyrightCollection[cN])
                    }
                }
            } else {
                if (this._container) {
                    for (var cM = 0; cM < this._container.children.length; cM++) {
                        if (this._container.children[cM].getAttribute("_cid") == this._copyrightCollection[cN].id && this._container.children[cM].style.display != "none") {
                            this._container.children[cM].style.display = "none";
                            return
                        }
                    }
                }
            }
        }
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
        this._updateState()
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
    removeCopyright: function (cN) {
        var cL;
        for (var cK = 0, T = this._copyrightCollection.length; cK < T; cK++) {
            if (this._copyrightCollection[cK].id == cN) {
                cL = this._copyrightCollection.splice(cK, 1);
                cK--;
                T = this._copyrightCollection.length
            }
        }
        var cM = this.getDom(cN);
        if (cM && cM.parentNode) {
            cM.parentNode.removeChild(cM);
            cM = null
        }
        this._updateState();
        return cL
    },
    _generateHTML: function (T) {
        if (!this._container) {
            return
        }
        this._container.innerHTML += "<span _cid='" + T.id + "'>" + T.content + "</span>"
    },
    getDom: function (cM) {
        var cL = co.prototype.getDom.call(this);
        if (!cg(cM)) {
            return cL
        } else {
            if (cL) {
                for (var cK = 0, T = cL.children.length; cK < T; cK++) {
                    if (cL.children[cK].getAttribute("_cid") == cM) {
                        return cL.children[cK]
                    }
                }
            }
        }
    }
});
a7.object.extend(cJ.prototype, {
    _asyncDraw: function () {
        if (this._map) {
            this._i(this._map)
        }
    },
    initialize: function (T) {
        co.prototype.initialize.call(this, T);
        this._initParam();
        this._render();
        this._bind();
        this._initOverviewMap();
        a7.on(this._container, "click", aO);
        a7.on(this._container, "dblclick", aO);
        a7.on(this._container, "mousewheel", aO);
        a7.on(this._container, "mouseup", function (cK) {
            cK = window.event || cK;
            if (cK.button == 2) {
                aO(cK)
            }
        });
        if (window.addEventListener) {
            this._container.addEventListener("DOMMouseScroll", function (cK) {
                aO(cK)
            }, true)
        }
        return this._container
    },
    _initParam: function () {
        if (this._init) {
            return
        }
        this._init = true;
        this._omCanvas;
        this._omMapContainer;
        this._omView;
        this._omViewMv;
        this._omBtn;
        this._borderWidth = 1;
        this._quad = 4;
        this._overviewMap = null;
        this._minZoom = -1;
        this._maxZoom = -1;
        this._curOMZoomLevel = -1;
        this._wRatio = 1;
        this._hRatio = 1;
        this._temp = {};
        this._currentOp = "";
        this._overviewInitialized = false
    },
    _getCurOMZoomLevel: function () {
        if (!this._map) {
            return
        }
        var T = this._map.zoomLevel;
        var cK = T - this._opts.zoomInterval;
        if (cK < this._minZoom) {
            return this._minZoom
        } else {
            if (cK > this._maxZoom) {
                return this._maxZoom
            } else {
                return cK
            }
        }
        return -1
    },
    _render: function () {
        co.prototype._render.call(this);
        var T = a7.browser.ie != false ? " BMap_ie" + a7.browser.ie : "";
        var cK = this._container;
        cK.innerHTML = this._generateHTML();
        a7.dom.addClass(cK, "BMap_omCtrl" + T);
        this._omCanvas = cK.children[0].children[0];
        this._omMapContainer = this._omCanvas.children[0];
        this._omViewMv = this._omCanvas.children[1];
        this._omViewMvInn = this._omViewMv.children[0];
        this._omBtn = cK.children[1];
        this.setSize(this._opts.size);
        this._omViewMv.style.cursor = cb.defaultCursor
    },
    _generateHTML: function () {
        var T = ['<div class="BMap_omOutFrame"><div class="BMap_omInnFrame">', '<div class="BMap_omMapContainer"></div>', '<div class="BMap_omViewMv"><div class="BMap_omViewInnFrame"><div></div></div></div>', '</div></div><div class="BMap_omBtn"></div>'];
        return T.join("")
    },
    _bind: function () {
        var T = this;
        a7.on(this._omBtn, "click", function () {
            T.changeView()
        });
        if (a7.browser.ie) {
            a7.on(this._omBtn, "dblclick", function () {
                T.changeView()
            })
        }
        if (!a7.browser.ie || a7.browser.ie > 6) {
            this._omBtn.onmouseover = function (cK) {
                a7.dom.addClass(T._omBtn, "hover")
            };
            this._omBtn.onmouseout = function (cK) {
                a7.dom.removeClass(T._omBtn, "hover")
            }
        }
        a7.on(this._omViewMv, "mousedown", function (cK) {
            if (T._omViewMv && cg(T._omViewMv._drag) && T._omViewMv._drag == "true") {
                return
            }
            cK = window.event || cK;
            if (cK.button == 2) {
                return
            }
            T._omViewMv._drag = "true";
            var cK = window.event || cK;
            if (T._omViewMv.setCapture) {
                T._omViewMv.setCapture()
            }
            T._bind.iniX = parseInt(aI(T._omViewMv).left);
            T._bind.iniY = parseInt(aI(T._omViewMv).top);
            T._bind.mx = cK.pageX || cK.clientX;
            T._bind.my = cK.pageY || cK.clientY;
            T._bind.i = 0;
            T._bind.j = 0;
            T._setViewMvCursor(cb.draggingCursor);
            aO(cK);
            return cB(cK)
        });
        a7.on(document, "mousemove", function (cQ) {
            if (T._omViewMv && T._omViewMv._drag == "true") {
                var cQ = window.event || cQ;
                var cK = cQ.pageX || cQ.clientX;
                var cR = cQ.pageY || cQ.clientY;
                T._bind.curX = T._bind.iniX + cK - T._bind.mx;
                T._bind.curY = T._bind.iniY + cR - T._bind.my;
                var cP = 3;
                T._bind._moveX = 0;
                T._bind._moveY = 0;
                if (T._bind.curX <= 0) {
                    T._bind._moveX = cP
                }
                if (T._bind.curY <= 0) {
                    T._bind._moveY = cP
                }
                if (T._bind.curX + T._omViewMv.offsetWidth >= T._overviewMap.width) {
                    T._bind._moveX = -cP
                }
                if (T._bind.curY + T._omViewMv.offsetHeight >= T._overviewMap.height) {
                    T._bind._moveY = -cP
                }
                T._omViewMv.style.left = T._bind.curX + "px";
                T._omViewMv.style.top = T._bind.curY + "px";
                if ((T._bind._moveX != 0 || T._bind._moveY != 0) && !T._bind.intervalId) {
                    T._bind._mapMoving = true;
                    var cO = T._overviewMap.offsetX;
                    var cM = T._overviewMap.offsetY;
                    var cN = cO + T._bind._moveX;
                    var cL = cM + T._bind._moveY;
                    T._overviewMap._setPlatformPosition(cN, cL);
                    T._bind.intervalId = setInterval(function () {
                        var cT = T._bind._moveX != 0 ? (T._bind._moveX > 0 ? T._bind.i += cP : T._bind.i -= cP) : T._bind.i;
                        var cS = T._bind._moveY != 0 ? (T._bind._moveY > 0 ? T._bind.j += cP : T._bind.j -= cP) : T._bind.j;
                        T._overviewMap._setPlatformPosition(cN + cT, cL + cS)
                    }, 30)
                }
                if (T._bind._moveX == 0 && T._bind._moveY == 0) {
                    clearInterval(T._bind.intervalId);
                    delete T._bind.intervalId;
                    T._bind.i = 0;
                    T._bind.j = 0
                }
                aO(cQ);
                return cB(cQ)
            }
        });
        a7.on(document, "mouseup", function (cN) {
            if (T._omViewMv && T._omViewMv._drag == "true") {
                T._omViewMv._drag = "";
                T._setViewMvCursor(cb.defaultCursor);
                if (T._omViewMv.releaseCapture) {
                    T._omViewMv.releaseCapture()
                }
                if (T._bind.initX == T._bind.curX && T._bind.initY == T._bind.curY) {
                    aO(cN);
                    return cB(cN)
                }
                T._currentOp = "dragView";
                T._overviewMap.config.enableMouseDown = false;
                T._map.temp.operating = true;
                if (!cg(T._bind.curX) || !cg(T._bind.curY)) {
                    return
                }
                var cM = T._bind.curX + parseInt(T._omViewMv.style.width) / 2 + 1;
                var cL = T._bind.curY + parseInt(T._omViewMv.style.height) / 2 + 1;
                delete T._bind.curX;
                delete T._bind.curY;
                var cK = T._overviewMap.pixelToPoint({
                    x: cM,
                    y: cL
                }, T._overviewMap.zoomLevel);
                T._map.temp.operating = false;
                if (T._bind._mapMoving == true) {
                    clearInterval(T._bind.intervalId);
                    delete T._bind.intervalId;
                    T._bind._mapMoving = false
                }
                T._map.temp.operating = true;
                setTimeout(function () {
                    T._map.temp.operating = false;
                    T._map.panTo(cK)
                }, 50);
                aO(cN);
                return cB(cN)
            }
        })
    },
    _initOverviewMap: function () {
        if (this._overviewInitialized == true) {
            return
        }
        var cL = this;
        var cM = cL._map;
        cM.addEventListener("resize", function () {
            if (cL._overviewMap != null) {
                cL._overviewMap.setCenter(cM.getCenter())
            }
            if (cL._omView != null) {
                cL._omView.setPosition(cM.getCenter());
                cL._setRatio()
            }
            cL.setAnchor(cL._opts.anchor)
        });
        if (this._opts.isOpen == false) {
            return
        }
        if (!this._binded) {
            cM.addEventListener("loadcode", function () {
                cL._onMainZoomEnd()
            });
            cM.addEventListener("moving", function () {
                cL._moveView()
            });
            cM.addEventListener("moveend", function (cN) {
                cL._onMainMoveEnd(cN)
            });
            cM.addEventListener("zoomend", function (cN) {
                cL._onMainZoomEnd(cN)
            });
            cM.addEventListener("maptypechange", function (cN) {
                cL._setRatio()
            });
            this._binded = true
        }
        var T = cM.getCenter();
        this._minZoom = BMAP_NORMAL_MAP.getMinZoom();
        this._maxZoom = BMAP_NORMAL_MAP.getMaxZoom();
        this._curOMZoomLevel = this._getCurOMZoomLevel();
        this._overviewMap = new by(this._omMapContainer, {
            isOverviewMap: true
        });
        this._overviewMap.disableDoubleClickZoom();
        this._overviewMap.centerAndZoom(T, this._curOMZoomLevel);
        this._omView = new m({
            point: cM.getCenter(),
            lineStroke: 1,
            lineColor: "#6688cc"
        });
        this._overviewMap.addOverlay(this._omView);
        this._omView.getContainer().innerHTML = '<div class="BMap_omViewInnFrame"><div class="BMap_omViewMask"></div></div>';
        this._omViewInn = this._omView.getContainer().children[0];
        var cK = this._omView.getContainer().style;
        cK.borderLeftColor = "#84b0df";
        cK.borderTopColor = "#adcff4";
        cK.borderRightColor = "#274b8b";
        cK.borderBottomColor = "#274b8b";
        this._setRatio();
        this._overviewMap.addEventListener("dragend", function () {
            cL._currentOp = "dragMap";
            cM.panTo(cL._overviewMap.getCenter())
        });
        this._overviewMap.addEventListener("moveend", function () {
            cL._onViewMapMoveEnd()
        });
        this._overviewMap.addEventListener("mousedown", function (cN) {
            cL._temp._downX = cN.offsetX;
            cL._temp._downY = cN.offsetY
        });
        this._overviewMap.addEventListener("resize", function (cN) {
            if (cL._map && cL._overviewMap) {
                cL._overviewMap.setCenter(cL._map.getCenter())
            }
            cL._setRatio()
        });
        this._overviewInitialized = true
    },
    _setViewMvCursor: function (T) {
        this._omViewMv.style.cursor = T
    },
    setAnchor: function (cN) {
        co.prototype.setAnchor.call(this, cN);
        if (!this._map) {
            return
        }
        if (a7.browser.ie) {
            var cQ = this._map.width;
            var cM = this._map.height;
            var cK = this._opts.size.width;
            var cO = this._opts.size.height;
            var cL = this._opts.offset.width;
            var T = this._opts.offset.height;
            if (this._opts.isOpen == false) {
                cK = this._btnWidth;
                cO = this._btnHeight
            }
            var cP = this._container;
            switch (cN) {
            case BMAP_ANCHOR_TOP_RIGHT:
                cP.style.right = "auto";
                cP.style.left = cQ - cK - cL + "px";
                break;
            case BMAP_ANCHOR_BOTTOM_LEFT:
                cP.style.bottom = "auto";
                cP.style.top = cM - cO - T + "px";
                break;
            case BMAP_ANCHOR_BOTTOM_RIGHT:
                cP.style.bottom = "auto";
                cP.style.right = "auto";
                cP.style.top = cM - cO - T + "px";
                cP.style.left = cQ - cK - cL + "px";
                break;
            default:
                break
            }
        }
        this._setQuad();
        this._redraw()
    },
    changeView: function () {
        this.changeView._running = true;
        this._opts.isOpen = !this._opts.isOpen;
        if (!this._container) {
            this.changeView._running = false;
            return
        }
        var cO = this._container;
        var T = this._opts.size.width;
        var cL = this._opts.size.height;
        var cN = this._btnWidth;
        var cK = this._btnHeight;
        var cM = this;
        if (!this._opts.isOpen) {
            this.changeView._preBtnTop = this._omBtn.style.top;
            this.changeView._preBtnLeft = this._omBtn.style.left;
            new g({
                fps: 25,
                duration: 120,
                transition: av.easeInCubic,
                render: function (cP) {
                    cO.style.width = (T - Math.ceil((T - cN) * cP)) + "px";
                    cO.style.height = (cL - Math.ceil((cL - cK) * cP)) + "px";
                    if (a7.browser.ie) {
                        cM._omBtn.style.top = (cM._quad == 3 || cM._quad == 4) ? parseInt(cO.style.height) - cK + "px" : "0";
                        cM._omBtn.style.left = (cM._quad == 1 || cM._quad == 4) ? parseInt(cO.style.width) - cN + "px" : "0";
                        if (cM._opts.anchor >= 0 && cM._opts.anchor <= BMAP_ANCHOR_BOTTOM_RIGHT) {
                            if (cM._quad == 3 || cM._quad == 4) {
                                cO.style.top = cM._map.height - parseInt(cO.style.height) - cM._opts.offset.height + "px"
                            }
                            if (cM._quad == 1 || cM._quad == 4) {
                                cO.style.left = cM._map.width - parseInt(cO.style.width) - cM._opts.offset.width + "px"
                            }
                        }
                    }
                    cM.dispatchEvent(new bf("onviewchanging"))
                },
                finish: function () {
                    if (a7.browser.ie) {
                        cM._omBtn.style.left = "0";
                        cM._omBtn.style.top = "0";
                        if (cM._opts.anchor >= 0 && cM._opts.anchor <= BMAP_ANCHOR_BOTTOM_RIGHT) {
                            if (cM._quad == 3 || cM._quad == 4) {
                                cO.style.top = cM._map.height - cM._btnHeight - cM._opts.offset.height + "px"
                            }
                            if (cM._quad == 1 || cM._quad == 4) {
                                cO.style.left = cM._map.width - cM._btnWidth - cM._opts.offset.width + "px"
                            }
                        }
                    }
                    cM._redraw();
                    a7.dom.addClass(cM._omBtn, "BMap_omBtnClosed");
                    var cP = new bf("onviewchanged");
                    cP.isOpen = cM._opts.isOpen;
                    cM.dispatchEvent(cP);
                    cM.changeView._running = false
                }
            })
        } else {
            if (this._overviewInitialized == false) {
                this._initOverviewMap()
            }
            new g({
                fps: 40,
                duration: 120,
                transition: av.easeOutCubic,
                render: function (cP) {
                    cO.style.width = (Math.ceil(T * cP)) + "px";
                    cO.style.height = (Math.ceil(cL * cP)) + "px";
                    if (a7.browser.ie) {
                        cM._omBtn.style.top = (cM._quad == 3 || cM._quad == 4) ? parseInt(cO.style.height) - cK + "px" : "0";
                        cM._omBtn.style.left = (cM._quad == 1 || cM._quad == 4) ? parseInt(cO.style.width) - cN + "px" : "0";
                        if (cM._opts.anchor >= 0 && cM._opts.anchor <= BMAP_ANCHOR_BOTTOM_RIGHT) {
                            if (cM._quad == 3 || cM._quad == 4) {
                                cO.style.top = cM._map.height - parseInt(cO.style.height) - cM._opts.offset.height + "px"
                            }
                            if (cM._quad == 1 || cM._quad == 4) {
                                cO.style.left = cM._map.width - parseInt(cO.style.width) - cM._opts.offset.width + "px"
                            }
                        }
                    }
                    cM.dispatchEvent(new bf("onviewchanging"))
                },
                finish: function () {
                    if (cM._opts.anchor >= 0 && cM._opts.anchor <= BMAP_ANCHOR_BOTTOM_RIGHT) {
                        if (a7.browser.ie) {
                            if (cM._quad == 3 || cM._quad == 4) {
                                cO.style.top = cM._map.height - cL - cM._opts.offset.height + "px"
                            }
                            if (cM._quad == 1 || cM._quad == 4) {
                                cO.style.left = cM._map.width - T - cM._opts.offset.width + "px"
                            }
                        }
                    }
                    cM._redraw();
                    cM._setBtnPosition();
                    a7.dom.removeClass(cM._omBtn, "BMap_omBtnClosed");
                    var cP = new bf("onviewchanged");
                    cP.isOpen = cM._opts.isOpen;
                    cM.dispatchEvent(cP);
                    cM.changeView._running = false
                }
            })
        }
    },
    _setRatio: function () {
        if (!this._map) {
            return
        }
        var cP = this._map.zoomLevel;
        var cR = this._map.pixelToPoint({
            x: 0,
            y: 0
        }, cP);
        var cM = this._map.pixelToPoint({
            x: this._map.width,
            y: this._map.height
        }, cP);
        var cK = this._overviewMap.pixelToPoint({
            x: 0,
            y: 0
        }, this._curOMZoomLevel);
        var cL = this._overviewMap.pixelToPoint({
            x: this._overviewMap.width,
            y: this._overviewMap.height
        }, this._curOMZoomLevel);
        this._wRatio = (cM.lng - cR.lng) / (cL.lng - cK.lng);
        this._hRatio = (cM.lat - cR.lat) / (cL.lat - cK.lat);
        if (this._wRatio >= 1 || this._hRatio >= 1) {
            this._omViewMv.style.display = "none";
            this._omView.hide()
        } else {
            var cN = parseInt(this._overviewMap.width);
            var T = parseInt(this._overviewMap.height);
            var cQ = Math.round(cN * this._wRatio);
            var cO = Math.round(T * this._hRatio);
            if (this._map.getMapType() == BMAP_PERSPECTIVE_MAP) {
                cO = T * 0.35
            }
            this._omView.show();
            this._omView.setDimension(cQ, cO);
            this._omViewMv.style.display = ""
        }
        this._setOMViewMvPos()
    },
    _setOMViewMvPos: function () {
        if (!this._omView || !this._omView.getContainer()) {
            return
        }
        if (this._wRatio >= 1 || this._hRatio >= 1) {
            this._omViewMv.style.display = "none";
            return
        }
        var cK = this._omView.getContainer().style;
        this._omViewMv.style.display = "";
        this._omViewMv.style.width = cK.width;
        this._omViewMv.style.height = cK.height;
        var T = parseInt(cK.width) - 2;
        var cL = parseInt(cK.height) - 2;
        T = T < 0 ? 0 : T;
        cL = cL < 0 ? 0 : cL;
        this._omViewMvInn.style.width = T + "px";
        this._omViewMvInn.style.height = cL + "px";
        this._omViewInn.style.width = this._omViewMvInn.style.width;
        this._omViewInn.style.height = this._omViewMvInn.style.height;
        this._omViewMv.style.left = parseInt(cK.left) + this._overviewMap.offsetX + "px";
        this._omViewMv.style.top = parseInt(cK.top) + this._overviewMap.offsetY + "px"
    },
    setSize: function (cL) {
        if (!(cL instanceof aG)) {
            cL = new aG(150, 150)
        }
        var cK = cL.width;
        var cM = cL.height;
        cK = cK > 0 ? cK : 150;
        cM = cM > 0 ? cM : 150;
        cL.width = cK;
        cL.height = cM;
        this._opts.size = cL;
        if (!this._container) {
            return
        }
        if (this.changeView._running == true) {
            var T = arguments;
            var cN = this;
            setTimeout(function () {
                T.callee.call(cN, cL)
            }, 120);
            return
        }
        M(this._container, [cK, cM]);
        var cN = this;
        setTimeout(function () {
            if (cN._overviewMap && cN._map) {
                cN._overviewMap.setCenter(cN._map.getCenter())
            }
        }, 100);
        this.setAnchor(this._opts.anchor);
        this.dispatchEvent(new bf("resize"))
    },
    setOffset: function (T) {
        if (!(T instanceof aG)) {
            return
        }
        co.prototype.setOffset.call(this, T);
        if (!this._container) {
            return
        }
        if (T.width != 0 || T.height != 0) {
            a7.dom.addClass(this._container, "withOffset")
        } else {
            a7.dom.removeClass(this._container, "withOffset")
        }
    },
    _redraw: function () {
        if (!this._omCanvas) {
            return
        }
        var cL = this._opts.size.width;
        var cO = this._opts.size.height;
        var cQ = this._opts.padding;
        var T = this._borderWidth;
        var cM = 0;
        var cP = 0;
        var cK = 0;
        var cN = 0;
        this._omCanvas.style.left = this._omCanvas.style.top = this._omCanvas.style.right = this._omCanvas.style.bottom = "auto";
        this._omBtn.style.left = this._omBtn.style.top = this._omBtn.style.right = this._omBtn.style.bottom = "auto";
        if (this._opts.offset.width == 0 && this._opts.offset.height == 0) {
            switch (this._opts.anchor) {
            case BMAP_ANCHOR_TOP_LEFT:
                this._omCanvas.style.left = "0px";
                this._omCanvas.style.top = "0px";
                break;
            case BMAP_ANCHOR_TOP_RIGHT:
                this._omCanvas.style.left = cQ + "px";
                this._omCanvas.style.top = "0px";
                break;
            case BMAP_ANCHOR_BOTTOM_LEFT:
                this._omCanvas.style.top = cQ + "px";
                this._omCanvas.style.left = "0px";
                break;
            case BMAP_ANCHOR_BOTTOM_RIGHT:
                this._omCanvas.style.top = cQ + "px";
                this._omCanvas.style.left = cQ + "px";
                break;
            default:
                break
            }
            cM = cL - T;
            cP = cO - T;
            cK = cM - cQ - 2 * T;
            cN = cP - cQ - 2 * T;
            if (a7.browser.ie && document.compatMode == "BackCompat") {
                cM = cM + 1;
                cP = cP + 1;
                cK = cK + 2;
                cN = cN + 2
            }
        } else {
            this._omCanvas.style.left = this._omCanvas.style.top = this._omCanvas.style.right = this._omCanvas.style.bottom = cQ + "px";
            cM = cL - 2 * T;
            cP = cO - 2 * T;
            cK = cM - 2 * cQ - 2 * T;
            cN = cP - 2 * cQ - 2 * T;
            if (this._opts.offset.width != 0 || this._opts.offset.height != 0) {
                a7.dom.addClass(this._container, "withOffset")
            }
            if (a7.browser.ie && document.compatMode == "BackCompat") {
                cM = cM + 2;
                cP = cP + 2;
                cK = cK + 2;
                cN = cN + 2
            }
        }
        if (cM > 0 && cP > 0) {
            M(this._container.children[0], [cM, cP])
        }
        if (cK > 0 && cN > 0) {
            M(this._omCanvas, [cK, cN])
        }
        this._setBtnPosition();
        a7.dom.removeClass(this._omBtn, "BMap_omBtnClosed");
        if (!this._opts.isOpen) {
            this._container.style.width = this._btnWidth + "px";
            this._container.style.height = this._btnHeight + "px";
            if (a7.browser.ie) {
                this.changeView._preBtnTop = this._omBtn.style.top;
                this.changeView._preBtnLeft = this._omBtn.style.left;
                this._omBtn.style.left = "0";
                this._omBtn.style.top = "0"
            }
            a7.dom.addClass(this._omBtn, "BMap_omBtnClosed")
        }
    },
    _setQuad: function () {
        var cK = this._container;
        if (!cK) {
            return
        }
        var T = this._quad;
        switch (this._opts.anchor) {
        case BMAP_ANCHOR_TOP_LEFT:
            this._quad = 2;
            break;
        case BMAP_ANCHOR_TOP_RIGHT:
            this._quad = 1;
            break;
        case BMAP_ANCHOR_BOTTOM_LEFT:
            this._quad = 3;
            break;
        case BMAP_ANCHOR_BOTTOM_RIGHT:
            this._quad = 4;
            break;
        default:
            break
        }
        a7.dom.removeClass(cK, "quad" + T);
        a7.dom.addClass(cK, "quad" + this._quad)
    },
    _setBtnPosition: function () {
        if (!a7.browser.ie) {
            switch (this._quad) {
            case 2:
                this._omBtn.style.top = "0";
                this._omBtn.style.left = "0";
                break;
            case 1:
                this._omBtn.style.top = "0";
                this._omBtn.style.right = "0";
                break;
            case 4:
                this._omBtn.style.bottom = "0";
                this._omBtn.style.right = "0";
                break;
            case 3:
                this._omBtn.style.bottom = "0";
                this._omBtn.style.left = "0";
                break;
            default:
                break
            }
        } else {
            var cM = this._btnWidth;
            var cK = this._btnHeight;
            var T = this._opts.size.width;
            var cL = this._opts.size.height;
            this._omBtn.style.left = "auto";
            this._omBtn.style.top = "auto";
            this._omBtn.style.right = "auto";
            this._omBtn.style.bottom = "auto";
            switch (this._quad) {
            case 2:
                this._omBtn.style.left = "0px";
                this._omBtn.style.top = "0px";
                break;
            case 1:
                this._omBtn.style.left = T - cM + "px";
                this._omBtn.style.top = "0px";
                break;
            case 4:
                this._omBtn.style.top = cL - cK + "px";
                this._omBtn.style.left = T - cM + "px";
                break;
            case 3:
                this._omBtn.style.left = "0px";
                this._omBtn.style.top = cL - cK + "px";
                break;
            default:
                break
            }
        }
    },
    _moveView: function () {
        if (this._omView) {
            this._omView.setPosition(this._map.getCenter())
        }
    },
    _onMainMoveEnd: function (T) {
        switch (this._currentOp) {
        case "dragMap":
            this._setOMViewMvPos();
            this._currentOp = "";
            break;
        case "dragView":
            this._omViewMv.style.display = "none";
            this._overviewMap.panTo(this._map.getCenter(), {
                duration: 90
            });
            this._currentOp = "";
            break;
        default:
            if (this._overviewMap) {
                this._overviewMap.panTo(this._map.getCenter(), {
                    duration: 90
                })
            }
            break
        }
    },
    _onMainZoomEnd: function () {
        if (!this._overviewMap) {
            return
        }
        var T = this;
        T._curOMZoomLevel = T._getCurOMZoomLevel();
        setTimeout(function () {
            T._overviewMap.centerAndZoom(T._map.getCenter(), T._curOMZoomLevel);
            T._omView.setPosition(T._map.getCenter());
            T._setRatio()
        }, 100)
    },
    _onViewMapMoveEnd: function () {
        if (this._currentOp != "dragMap") {
            this._setOMViewMvPos();
            this._overviewMap.config.enableMouseDown = true
        }
    },
    remove: function () {
        co.prototype.remove.call(this);
        this._omCanvas = null;
        this._omMapContainer = null;
        this._omView = null;
        this._omViewInn = null;
        this._omViewMv = null;
        this._omViewMvInn = null;
        this._omBtn = null;
        this._overviewInitialized = false;
        this._overviewMap = null
    },
    isOpen: function () {
        if (!this._container) {
            return false
        }
        return this._opts.isOpen
    }
});

function M(cL, T) {
    var cK = cL.style;
    cK.width = T[0] + "px";
    cK.height = T[1] + "px"
}
a7.object.extend(bJ.prototype, {
    _asyncDraw: function () {
        if (this._map) {
            this._i(this._map)
        }
    },
    initialize: function (T) {
        co.prototype.initialize.call(this, T);
        this._render();
        this._setParam();
        this._updateScale();
        this._bind(T);
        return this._container
    },
    _setParam: function () {
        this._numberArray = {
            us: [5280 * 5000, 5280 * 2500, 5280 * 2000, 5280 * 1000, 5280 * 500, 5280 * 200, 5280 * 100, 5280 * 50, 5280 * 25, 5280 * 20, 5280 * 10, 5280 * 5, 5280 * 2, 5280, 2000, 1000, 500, 200, 100, 50, 20, 10, 5],
            metric: [10000000, 5000000, 2000000, 1000000, 500000, 200000, 100000, 50000, 25000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]
        }
    },
    _bind: function (cK) {
        var T = this;
        cK.addEventListener("zoomend", function () {
            T._updateScale()
        });
        cK.addEventListener("moveend", function () {
            T._updateScale()
        });
        cK.addEventListener("maptypechange", function () {
            T.setColor(T._map.getMapType().getTextColor())
        })
    },
    _render: function () {
        co.prototype._render.call(this);
        a7.dom.addClass(this._container, "BMap_scaleCtrl");
        this._container.innerHTML = this._generateHTML();
        this.setColor(this._map.getMapType().getTextColor());
        this._scaleText = this._container.children[0];
        co.prototype._setPosition.call(this)
    },
    _generateHTML: function () {
        var cK = cb.imgPath + "mapctrls.png";
        var T = '<div class="BMap_scaleTxt" unselectable="on"></div><div class="BMap_scaleBar BMap_scaleHBar"><img style="border:none" src="' + cK + '"/></div><div class="BMap_scaleBar BMap_scaleLBar"><img style="border:none" src="' + cK + '"/></div><div class="BMap_scaleBar BMap_scaleRBar"><img style="border:none" src="' + cK + '"/></div>';
        return T
    },
    setColor: function (T) {
        this._opts.color = T + "";
        if (!this._container) {
            return
        }
        this._container.children[0].style.backgroundColor = "transparent";
        this._container.children[0].style.color = T;
        for (var cL = 1, cK = this._container.children.length; cL < cK; cL++) {
            this._container.children[cL].style.backgroundColor = T
        }
    },
    setUnit: function (T) {
        this._opts.unit = this._units[T] && this._units[T].name || this._opts.unit;
        if (!this._map) {
            return
        }
        this._updateScale()
    },
    _setScaleText: function (cK, T) {
        this._scaleText.innerHTML = cK + "&nbsp;" + T
    },
    _updateScale: function () {
        if (!this._map || !this._container) {
            return
        }
        var cK = 10;
        var cN = new cc(this._map.getCenter().lng, this._map.getCenter().lat + cK);
        var cO = Math.abs(this._map.pointToPixel(this._map.getCenter()).y - this._map.pointToPixel(cN).y);
        var cS = a9.getDistanceByLL(this._map.getCenter(), cN) / cO;
        if (cS == 0 || isNaN(cS)) {
            return
        }
        var cQ = this._convertUnit(cS, this._opts.unit);
        var T = 0;
        var cL = this._units[this._opts.unit].incon;
        var cP = this._map.getZoom();
        var cM = this._numberArray[this._opts.unit][this._map.getZoom() - 1];
        T = cM / cQ;
        var cR = cM >= cL ? this._units[this._opts.unit].u2 : this._units[this._opts.unit].u1;
        if (cM >= cL) {
            cM = Math.round(cM / cL)
        }
        this._setScaleText(cM, cR);
        if (Math.round(T) % 2 != 0 && a7.browser.ie == 6) {
            T = T + 1
        }
        this._container.style.width = Math.round(T) + "px";
        if (this._map.mapType == BMAP_PERSPECTIVE_MAP) {
            this._container.style.width = Math.round(T) * 3 + "px";
            this._setScaleText(cM * 3, cR)
        }
    },
    _convertUnit: function (T, cK) {
        cK = cK || "metric";
        if (this._units[cK]) {
            return T * this._units[cK].conv
        }
        return T
    }
});
a7.extend(aK.prototype, {
    _asyncDraw: function () {
        if (this._map) {
            this._i(this._map)
        }
    },
    initialize: function (T) {
        this._initParams();
        co.prototype.initialize.call(this, T);
        co.prototype._render.call(this);
        co.prototype._setPosition.call(this);
        switch (this._opts.type) {
        case BMAP_MAPTYPE_CONTROL_DROPDOWN:
            this._createBtnsDropDown();
            break;
        default:
            this._createBtnsDefault()
        }
        this._bind();
        this._draw();
        return this._container
    },
    _initParams: function () {
        this._mapTypeRel = [
            [BMAP_HYBRID_MAP, BMAP_SATELLITE_MAP, true]
        ];
        this._btnDoms = [];
        this._lblDoms = []
    },
    _createBtnsDefault: function () {
        var cK = this._opts.mapTypes;
        for (var cM = 0; cM < cK.length; cM++) {
            if (!this._isMapTypeExist(this._getParentMapType(cK[cM]))) {
                this._createNormalBtn(cK[cM], cM)
            }
        }
        for (var cM = 0; cM < cK.length; cM++) {
            if (this._isMapTypeExist(this._getParentMapType(cK[cM]))) {
                this._createLabelBtn(cK[cM], cM)
            }
        }
        var cL = this._btnDoms[0];
        cL.firstChild.style.borderRadius = "3px 0 0 3px";
        var T = this._btnDoms[this._btnDoms.length - 1];
        T.firstChild.style.borderRight = "1px solid #8ba4dc";
        if (cL == T) {
            T.firstChild.style.borderRadius = "3px"
        } else {
            T.firstChild.style.borderRadius = "0 3px 3px 0"
        }
        this._container.style.whiteSpace = "nowrap";
        this._container.style.cursor = "pointer"
    },
    _isMapTypeExist: function (cK) {
        for (var T = 0; T < this._opts.mapTypes.length; T++) {
            if (this._opts.mapTypes[T] == cK) {
                return true
            }
        }
        return false
    },
    _getParentMapType: function (cK) {
        for (var T = 0; T < this._mapTypeRel.length; T++) {
            if (this._mapTypeRel[T][0] == cK) {
                return this._mapTypeRel[T][1]
            }
        }
        return null
    },
    _getInputCheckedInfo: function (cK) {
        for (var T = 0; T < this._mapTypeRel.length; T++) {
            if (this._mapTypeRel[T][0] == cK) {
                return this._mapTypeRel[T][2]
            }
        }
        return false
    },
    _createNormalBtn: function (cP, cL) {
        var cO = this;
        var cM = Z("div");
        cv(cM);
        var cN = cM.style;
        cN.boxShadow = "2px 2px 3px rgba(0, 0, 0, 0.35)";
        cN.borderLeft = "1px solid #8ba4dc";
        cN.borderTop = "1px solid #8ba4dc";
        cN.borderBottom = "1px solid #8ba4dc";
        cN.background = "white";
        cN.padding = "2px 6px";
        cN.font = "12px " + cb.fontFamily;
        cN.lineHeight = "1.3em";
        cN.textAlign = "center";
        cN.whiteSpace = "nowrap";
        cM.innerHTML = cP.getName();
        cM.title = cP.getTips();
        cM.onclick = function () {
            cO._map.setMapType(cO._getProperMapType(cP))
        };
        var cK = Z("div");
        cv(cK);
        var T = cK.style;
        if (a7.browser.ie) {
            T.styleFloat = "left"
        } else {
            T.cssFloat = "left"
        }
        cK.appendChild(cM);
        this._btnDoms[cL] = cK;
        if (!this._btnDoms[cL + 1]) {
            this._container.appendChild(cK)
        } else {
            this._container.insertBefore(cK, this._btnDoms[cL + 1])
        }
    },
    _createLabelBtn: function (cL, cP) {
        var cQ = this._getParentMapType(cL);
        var cN = this._getMapTypeIndex(cQ);
        var cK = this._btnDoms[cN];
        var cR = this;
        cK.onmouseover = function () {
            if ((cR._map.getMapType() == cQ || cR._map.getMapType() == cL) && this._labelDom) {
                if (this._hideLabelTimer) {
                    clearTimeout(this._hideLabelTimer);
                    this._hideLabelTimer = null
                }
                if (this._labelDom) {
                    a7.dom.show(this._labelDom)
                }
            }
        };
        cK.onmouseout = function () {
            var cU = this;
            if (this._hideLabelTimer) {
                clearTimeout(this._hideLabelTimer);
                this._hideLabelTimer = null
            }
            this._hideLabelTimer = setTimeout(function () {
                if (cU._labelDom) {
                    a7.dom.hide(cU._labelDom)
                }
            }, 1000)
        };
        cK.onmousedown = function () {
            if (this._hideLabelTimer) {
                clearTimeout(this._hideLabelTimer);
                this._hideLabelTimer = null
            }
            if (this._labelDom) {
                a7.dom.show(this._labelDom)
            }
        };
        cK._childMapType = cL;
        var cT = Z("div");
        cv(cT);
        labelContainerStyle = cT.style;
        labelContainerStyle.position = "absolute";
        labelContainerStyle.top = this._btnDoms[cN].offsetHeight + "px";
        var cO = this.getAnchor();
        if (this._getBtnNum() == 1) {
            if (cO == BMAP_ANCHOR_TOP_LEFT || cO == BMAP_ANCHOR_BOTTOM_LEFT) {
                labelContainerStyle.left = "0"
            } else {
                labelContainerStyle.right = "0"
            }
        } else {
            if (cN == 0 || cN != this._btnDoms.length - 1) {
                var T = 0,
                    cS = 0;
                while (cS < cN) {
                    if (this._btnDoms[cS]) {
                        T += this._btnDoms[cS].offsetWidth
                    }
                    cS++
                }
                labelContainerStyle.left = T + "px"
            } else {
                labelContainerStyle.right = "0"
            }
        }
        labelContainerStyle.zIndex = "-1";
        labelContainerStyle.display = "none";
        var cM = this._getInputCheckedInfo(cL) ? 'checked="checked"' : "";
        cT.innerHTML = '<div title="' + cL.getTips() + '" style="border-right:1px solid #8ba4dc;border-bottom:1px solid #8ba4dc;border-left:1px solid #8ba4dc;background:white;font:12px ' + cb.fontFamily + ';padding:0 8px 0 6px;line-height:1.6em;box-shadow:2px 2px 3px rgba(0, 0, 0, 0.35)"><span ' + cM + '" class="BMap_checkbox"></span><label style="vertical-align: middle; cursor: pointer;">' + (cL.getLabelText() || cL.getName()) + "</label></div>";
        cT.onclick = function () {
            cR._map.setMapType(cR._getProperMapType(cL))
        };
        cT.onmouseover = function (cU) {
            if (cK._hideLabelTimer) {
                clearTimeout(cK._hideLabelTimer);
                cK._hideLabelTimer = null
            }
            a7.dom.show(this);
            aO(cU)
        };
        cT.onmouseout = function () {
            var cU = this;
            if (cK._hideLabelTimer) {
                clearTimeout(cK._hideLabelTimer);
                cK._hideLabelTimer = null
            }
            cK._hideLabelTimer = setTimeout(function () {
                if (cU) {
                    a7.dom.hide(cU)
                }
            }, 1000)
        };
        cK._lblDom = this._lblDoms[cP] = cT;
        cK.appendChild(cT);
        cK._labelDom = cT
    },
    _createBtnsDropDown: function () {
        var cM = Z("div");
        cv(cM);
        cM.title = "\u66f4\u6539\u5730\u56fe\u7c7b\u578b";
        var cO = cM.style;
        cO.font = "bold 12px/1.5em " + cb.fontFamily;
        cO.background = "#fff";
        cO.boxShadow = "2px 2px 3px rgba(0, 0, 0, 0.35)";
        cO.padding = "0 6px";
        cO.border = "1px solid #8ba4dc";
        cM.innerHTML = '<span style="float:right;font-family:' + cb.fontFamily + '">\u25bc</span>' + this._map.getMapType().getName();
        this._mainBtn = cM;
        var cK = Z("div");
        cv(cK);
        dropDownStyle = cK.style;
        dropDownStyle.position = "relative";
        dropDownStyle.zIndex = "-1";
        dropDownStyle.background = "#fff";
        dropDownStyle.display = "none";
        dropDownStyle.borderLeft = dropDownStyle.borderRight = dropDownStyle.borderBottom = "1px solid #8ba4dc";
        var T = this._opts.mapTypes;
        for (var cL = 0; cL < T.length; cL++) {
            if (!this._isMapTypeExist(this._getParentMapType(T[cL]))) {
                this._createNormalBtnDropDown(T[cL], cL, cK)
            }
        }
        var cN = Z("div");
        cN.style.borderTop = "1px solid rgb(220, 220, 220)";
        cN.style.margin = "1px 4px";
        cK.appendChild(cN);
        for (var cL = 0; cL < T.length; cL++) {
            if (this._isMapTypeExist(this._getParentMapType(T[cL]))) {
                this._createLabelBtnDropDown(T[cL], cL, cK)
            }
        }
        this._container.style.width = "85px";
        this._container.style.whiteSpace = "nowrap";
        this._container.style.cursor = "pointer";
        this._container.appendChild(cM);
        this._container.appendChild(cK);
        cM._dropDownContainer = cK;
        cM.onclick = function () {
            if (this._hideDropDownTimer) {
                clearTimeout(this._hideDropDownTimer);
                this._hideDropDownTimer = null
            }
            if (this._dropDownContainer) {
                this._dropDownContainer.style.display = this._dropDownContainer.style.display == "none" ? "" : "none"
            }
        };
        cM.onmouseout = function () {
            if (this._hideDropDownTimer) {
                clearTimeout(this._hideDropDownTimer);
                this._hideDropDownTimer = null
            }
            var cP = this;
            this._hideDropDownTimer = setTimeout(function () {
                if (cP._dropDownContainer) {
                    a7.dom.hide(cP._dropDownContainer)
                }
            }, 1000)
        };
        cK.onmouseover = function () {
            if (cM._hideDropDownTimer) {
                clearTimeout(cM._hideDropDownTimer);
                cM._hideDropDownTimer = null
            }
            a7.dom.show(this)
        };
        cK.onmouseout = function () {
            if (cM._hideDropDownTimer) {
                clearTimeout(cM._hideDropDownTimer);
                cM._hideDropDownTimer = null
            }
            cM._hideDropDownTimer = setTimeout(function () {
                if (cM._dropDownContainer) {
                    a7.dom.hide(cM._dropDownContainer)
                }
            }, 1000)
        }
    },
    _createNormalBtnDropDown: function (cO, cL, T) {
        var cK = Z("div");
        cv(cK);
        var cN = cK.style;
        cN.color = "#000";
        cN.font = "12px/1.6em " + cb.fontFamily;
        cN.background = "#fff";
        cN.padding = "1px 6px";
        if (a7.browser.ie < 8) {
            cN.zoom = "1"
        }
        cK.innerHTML = cO.getName();
        cK.title = cO.getTips();
        var cM = this;
        cK.onclick = function () {
            cM._map.setMapType(cM._getProperMapType(cO))
        };
        T.appendChild(cK);
        this._btnDoms[cL] = cK
    },
    _createLabelBtnDropDown: function (cM, cP, T) {
        var cL = Z("div");
        cv(cL);
        var cS = cL.style;
        cS.font = "12px/1.6em " + cb.fontFamily;
        cS.padding = "1px 0 1px 4px";
        cS.whiteSpace = "nowrap";
        cL.title = cM.getTips();
        var cN = this._getInputCheckedInfo(cM) ? 'checked="checked"' : "";
        cL.innerHTML = "<span " + cN + ' class="BMap_checkbox"></span><label style="vertical-align:middle;cursor:pointer">' + (cM.getLabelText() || cM.getName()) + "</label>";
        var cR = this;
        cL.onclick = function () {
            cR._map.setMapType(cR._getProperMapType(cM))
        };
        T.appendChild(cL);
        this._lblDoms[cP] = cL;
        var cQ = this._getParentMapType(cM);
        var cO = this._getMapTypeIndex(cQ);
        var cK = this._btnDoms[cO];
        cK._childMapType = cM;
        cK._lblDom = cL
    },
    _getBtnNum: function () {
        var T = 0;
        for (var cK = 0; cK < this._btnDoms.length; cK++) {
            if (this._btnDoms[cK]) {
                T++
            }
        }
        return T
    },
    _getMapTypeIndex: function (cK) {
        for (var T = 0; T < this._opts.mapTypes.length; T++) {
            if (this._opts.mapTypes[T] == cK) {
                return T
            }
        }
        return -1
    },
    _getProperMapType: function (cL) {
        for (var T = 0; T < this._mapTypeRel.length; T++) {
            if (this._mapTypeRel[T][0] == cL && this._map.getMapType() == cL && this._isMapTypeExist(this._mapTypeRel[T][1])) {
                return this._mapTypeRel[T][1]
            }
            if (this._mapTypeRel[T][1] == cL) {
                var cM = this._lblDoms[this._getMapTypeIndex(this._mapTypeRel[T][0])];
                if (cM) {
                    var cK = cM.getElementsByTagName("span")[0];
                    if (cK.checked == "") {
                        b1.dom.removeClass(cK, "checked");
                        return cL
                    } else {
                        return this._mapTypeRel[T][0]
                    }
                }
            }
        }
        return cL
    },
    _renderSelBtn: function (cK) {
        var T = cK.style;
        T.background = "#8ea8e0";
        T.color = "#fff";
        T.fontWeight = "bold"
    },
    _renderUnSelBtn: function (cK) {
        var T = cK.style;
        T.background = "#fff";
        T.color = "#000";
        T.fontWeight = ""
    },
    _bind: function () {
        var T = this;
        T._map.addEventListener("onmaptypechange", function (cK) {
            T._draw()
        })
    },
    _draw: function () {
        switch (this._opts.type) {
        case BMAP_MAPTYPE_CONTROL_DROPDOWN:
            this._drawDropDown();
            break;
        default:
            this._drawDefault()
        }
    },
    _drawDefault: function () {
        var cL = this._map.getMapType();
        for (var T = 0; T < this._opts.mapTypes.length; T++) {
            var cK = null;
            if (!this._btnDoms[T]) {
                continue
            }
            if (cL == this._opts.mapTypes[T]) {
                this._renderSelBtn(this._btnDoms[T].children[0]);
                if (this._btnDoms[T]._childMapType && this._btnDoms[T]._lblDom) {
                    cK = this._btnDoms[T]._lblDom.getElementsByTagName("span")[0];
                    cK.checked = "";
                    b1.dom.removeClass(cK, "checked")
                }
            } else {
                if (this._btnDoms[T]._childMapType == cL) {
                    this._renderSelBtn(this._btnDoms[T].children[0]);
                    var cM = this._btnDoms[T]._lblDom;
                    cK = cM.getElementsByTagName("span")[0];
                    if (cM) {
                        cK.checked = "checked";
                        b1.dom.addClass(cK, "checked")
                    }
                } else {
                    this._renderUnSelBtn(this._btnDoms[T].children[0]);
                    if (this._btnDoms[T]._lblDom) {
                        a7.dom.hide(this._btnDoms[T]._lblDom);
                        clearTimeout(this._btnDoms[T]._hideLabelTimer);
                        this._btnDoms[T]._hideLabelTimer = null
                    }
                }
            }
        }
    },
    _drawDropDown: function () {
        var cO = this._map.getMapType();
        var cL = false;
        var cK = false;
        for (var cM = 0; cM < this._opts.mapTypes.length; cM++) {
            var cN = null;
            if (cO == this._opts.mapTypes[cM] && this._btnDoms[cM]) {
                cL = true;
                this._mainBtn.innerHTML = '<span style="float:right;font-family:' + cb.fontFamily + '">\u25bc</span>' + this._map.getMapType().getName();
                var T = this._btnDoms[cM];
                if (T && T._childMapType && T._lblDom) {
                    a7.dom.show(T._lblDom);
                    cN = T._lblDom.getElementsByTagName("span")[0];
                    cN.checked = "";
                    b1.dom.removeClass(cN, "checked")
                }
            } else {
                if (this._btnDoms[cM] && this._btnDoms[cM]._childMapType == cO) {
                    cK = true;
                    this._mainBtn.innerHTML = '<span style="float:right;font-family:' + cb.fontFamily + '">\u25bc</span>' + this._getParentMapType(cO).getName();
                    var cP = this._btnDoms[cM]._lblDom;
                    if (cP) {
                        a7.dom.show(cP);
                        cN = cP.getElementsByTagName("span")[0];
                        cN.checked = "checked";
                        b1.dom.addClass(cN, "checked")
                    }
                } else {
                    if (this._btnDoms[cM]) {
                        var cP = this._btnDoms[cM]._lblDom;
                        if (cP) {
                            a7.dom.hide(cP)
                        }
                    }
                }
            }
        }
        if (!cL && !cK) {
            this._mainBtn.innerHTML = '<span style="float:right;font-family:' + cb.fontFamily + '">\u25bc</span>' + this._map.getMapType().getName()
        }
    },
    remove: function () {
        this._btnDoms = this._lblDoms = [];
        this._mainBtn = null;
        co.prototype.remove.call(this)
    }
});