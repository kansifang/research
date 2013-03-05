// OverlayInternal
a7.extend(X.prototype, {
    initialize: function (T) {
        this.map = T;
        this._addDom();
        this._bind();
        if (this._menu) {
            this._menu.initialize(this.map, this)
        }
		// guid
        this.domElement.guid = this.guid;
        a7.lang.Class.call(this, this.guid);
        if (!this._visible) {
            a7.dom.hide(this.domElement)
        }
        return this.domElement
    },
    _bind: function () {
        if (!this.domElement) {
            return
        }
        var T = this;
        var cL = this.map;

        function cK(cQ, cP) {
            var cO = cQ.srcElement || cQ.target;
            var cN = cQ.clientX || cQ.pageX;
            var cS = cQ.clientY || cQ.pageY;
            if (cQ && cP && cN && cS && cO) {
                var cR = a7.dom.getPosition(cL.container);
                var cM = cF();
                cP.pixel = new bt(cN - cR.left + cM[1], cS - cR.top + cM[0]);
                cP.point = cL.pixelToPoint(cP.pixel);
                return cP
            } else {
                return cP
            }
        }
        a7.on(this.domElement, "mouseover", function (cM) {
            if (!T._dragstarted) {
                T.dispatchEvent(cK(cM, new bf("onmouseover").inherit(cM)))
            }
        });
        a7.on(this.domElement, "mouseout", function (cM) {
            if (!T._dragstarted) {
                T.dispatchEvent(cK(cM, new bf("onmouseout").inherit(cM)))
            }
        });
        if (T._config.clickable) {
            a7.on(this.domElement, "touchstart", function (cM) {
                T._bind._touchStartPos = new bt(cM.changedTouches[0].clientX, cM.changedTouches[0].clientY)
            });
            a7.on(this.domElement, "touchend", function (cO) {
                var cN = aD(),
                    cM = new bt(cO.changedTouches[0].clientX, cO.changedTouches[0].clientY);
                if (Math.abs(cM.x - T._bind._touchStartPos.x) > 10 || Math.abs(cM.y - T._bind._touchStartPos.y) > 10) {
                    T._bind._touchStartPos = null;
                    return
                }
                T.dispatchEvent(cK(cO, new bf("onclick").inherit(cO)));
                if (cN - T._dblclickTime < T.map.config.clickInterval) {
                    T.dispatchEvent(cK(cO, new bf("ondblclick").inherit(cO)))
                }
                T._dblclickTime = cN
            });
            a7.on(this.domElement, "click", function (cN) {
                var cM = cN.srcElement || cN.target;
                while (cM) {
                    if (cM == T.domElement) {
                        if (!(T instanceof ac) || T instanceof ac && (!T._lastPt || T._lastPt && T.getPosition().equals(T._lastPt))) {
                            T.dispatchEvent(cK(cN, new bf("onclick").inherit(cN)))
                        }
                        break
                    } else {
                        if (T.map && T.map.infoWindowDoms && cM == T.map.infoWindowDoms.popDom) {
                            break
                        }
                    }
                    cM = cM.parentNode
                }
            });
            a7.on(this.domElement, "dblclick", function (cM) {
                T.dispatchEvent(cK(cM, new bf("ondblclick").inherit(cM)));
                cn(cM)
            });
            if (!a7.browser.firefox || a7.browser.firefox < 4) {
                a7.on(this.domElement, "contextmenu", function (cM) {
                    T.dispatchEvent(cK(cM, new bf("onrightclick").inherit(cM)))
                })
            }
        }
        a7.on(this.domElement, "mousedown", function (cM) {
            if (T instanceof ac) {
                T._lastPt = T.getPosition()
            }
            T.dispatchEvent(cK(cM, new bf("onmousedown").inherit(cM)))
        });
        a7.on(this.domElement, "mouseup", function (cM) {
            T.dispatchEvent(cK(cM, new bf("onmouseup").inherit(cM)));
            if (a7.browser.firefox >= 4 && cM.button == 2 && T._config.clickable) {
                T.dispatchEvent(cK(cM, new bf("onrightclick").inherit(cM)))
            }
        })
    },
    hide: function () {
        if (this._visible == false) {
            return
        }
        this._visible = false;
        bF.prototype.hide.call(this);
        if (this.infoWindow && this.infoWindow.overlay && this.infoWindow.overlay == this) {
            this.closeInfoWindow()
        }
    },
    show: function () {
        if (this._visible == true) {
            return
        }
        this._visible = true;
        bF.prototype.show.call(this)
    },
    setConfig: function (cK) {
        if (!cK) {
            return
        }
        for (var T in cK) {
            if (typeof(this._config[T]) == typeof(cK[T])) {
                this._config[T] = cK[T]
            }
        }
    },
    setZIndex: function (T) {
        var cK = this;
        cK.zIndex = T;
        cK._updateDomZIndex()
    },
    _updateDomZIndex: function () {
        var cK = this,
            T;
        if (cg(cK.zIndex)) {
            T = cK.zIndex
        } else {
            T = 0;
            if (cK.map && cK.getPosition()) {
                var cL = cK.getPosition() ? cK.getPosition().lat : 0;
                T = bF.getZIndex(cL) + (cK._config.baseZIndex || 0)
            }
        }
        if (cK.domElement) {
            cK.domElement.style.zIndex = T
        }
    },
    addContextMenu: function (T) {
        this._menu = T;
        if (this.map) {
            T.initialize(this.map, this)
        }
    },
    removeContextMenu: function () {
        this._menu.remove();
        this._menu = null
    }
});
var bi = new L(cb.imgPath + "marker_red_hd.png", new aG(47, 50), {
    anchor: new aG(20, 50),
    infoWindowAnchor: new aG(20, 0)
});

// marker
var ag = 3;
var bw = 4;
ac.TOP_ZINDEX = bF.getZIndex(-90) + 1000000;
ac.DRAG_ZINDEX = ac.TOP_ZINDEX + 1000000;
ac._getAnimationName = function (cL) {
    if (ac._cssAniNames[cL]) {
        return ac._cssAniNames[cL]
    }
    var cM = ac._cssAniNames[cL] = ["BMap_" + Math.round(Math.random() * 10000), "BMap_" + Math.round(Math.random() * 10000)];
    var T = bZ[cL];
    var cK = ac._styleElement;
    if (!cK) {
        cK = ac._styleElement = Z("style", {
            type: "text/css"
        });
        document.getElementsByTagName("head")[0].appendChild(cK)
    }
    cK.textContent += ac._generateAniCSS(T.iconAnis, cM[0]) + ac._generateAniCSS(T.shadowAnis, cM[1]);
    return ac._cssAniNames[cL]
};
ac._generateAniCSS = function (cL, cK) {
    var T = ["@-webkit-keyframes " + cK + " {\\n"];
    a7.array.each(cL, function (cM) {
        T.push(cM.percent * 100, "% { ");
        T.push("-webkit-transform: translate(", cM.translate[0], "px,", cM.translate[1], "px); ");
        T.push("-webkit-animation-timing-function: ", cM.timingFunc, "; ");
        T.push("}\\n")
    });
    T.push("}\\n");
    return T.join("")
};
ac._addDragCrossImg = function (cK, T) {
    if (!ac._dragCrossImg) {
        ac._dragCrossImg = Z("img", {
            src: cb.imgPath + "drag_cross.png",
            width: 13,
            height: 9
        });
        ac._dragCrossImg.style.position = "absolute";
        if (a7.browser.ie == 6) {
            delete ac._dragCrossImg;
            var cM = ac._dragCrossImg = Z("div");
            var cL = cM.style;
            cL.position = "absolute";
            cL.width = "13px";
            cL.height = "9px";
            cL.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=image,src="' + cb.imgPath + 'drag_cross.png")'
        }
    }
    var cL = ac._dragCrossImg.style;
    cL.left = cK.width - 6 + "px";
    cL.top = cK.height - 5 + "px";
    T.appendChild(ac._dragCrossImg)
};
ac._removeDragCrossImg = function () {
    if (ac._dragCrossImg && ac._dragCrossImg.parentNode) {
        ac._dragCrossImg.parentNode.removeChild(ac._dragCrossImg)
    }
};
ac._cssAniNames = [];
ac._aniEndHandler = function () {
    this.style.WebkitAnimation = ""
};
a7.extend(ac.prototype, {
	// 初始化
    initialize: function (T) {
		console.log("marker初始化");
        this._initParam();
		// 执行OverlayInternal初始化方法，创建节点
        X.prototype.initialize.call(this, T);
        if (!this._visible) {
            a7.dom.hide(this.siblingElement)
        }
        if (T.highResolutionEnabled() && this._config.icon == at) {
            this._config.icon = bi
        }
        this.setPosition(this.point);
        this.setIcon(this._config.icon);
        this.setShadow(this._config.shadow);
        if (this._config.label && this._cfgLabelEvent) {
            this._config.label.addEventListener("remove", this._cfgLabelEvent)
        }
        this.setLabel(this._config.label);
        this.setTitle(this._config.title);
        this._initDrag();
        return this.domElement
    },
	// 初始化参数
    _initParam: function () {
        if (this._init) {
            return
        }
        this._init = true;
        this.domElement = null;
        this.shadowElement = null;
        this.siblingElement = null;
        this.iconDom = null;
        this._isDragging = false
    },
    _addDom: function () {
        var T = this.map.getPanes();
        this.domElement = ar(T.markerMouseTarget, this._msTargetRender());
        this.siblingElement = ar(T.markerPane, this._markerRender());
        this.siblingElement.guid = this.guid
    },
    _msTargetRender: function () {
        var T = ['<span class="BMap_Marker BMap_noprint" unselectable="on" '];
        T.push(this._config.title ? 'title="' + this._config.title + '"' : '"');
        T.push(' style="position:absolute;padding:0;margin:0;border:0;width:0;height:0;-moz-user-select:none;');
        T.push(this._config.clickable ? "cursor:pointer;" : "");
        T.push("background:url(" + cb.imgPath + "blank.gif);");
        T.push("width:" + this._config.icon.size.width + "px;");
        T.push("height:" + this._config.icon.size.height + "px;");
        T.push('"></span>');
        return T.join("")
    },
    _markerRender: function () {
        var T = ['<span class="BMap_Marker" unselectable="on" '];
        T.push('style="position:absolute;padding:0;margin:0;border:0;');
        T.push('width:0;height:0;-moz-user-select:none"></span>');
        return T.join("")
    },
    _shadowRender: function () {
        var T = ['<span unselectable="on" '];
        T.push('style="position:absolute;padding:0;margin:0;border:0;');
        T.push('width:0;height:0;-moz-user-select:none"></span>');
        return T.join("")
    },
	// 
    draw: function () {
		console.log("marker.draw: "+new Date());
        if (!this.domElement) {// 尚未创建节点
            return
        }
        var T = this._getPixPos();
        this.domElement.style.left = T[0].x + "px";
        this.domElement.style.top = T[0].y + "px";
        if (this.siblingElement) {
            this.siblingElement.style.left = T[0].x + "px";
            this.siblingElement.style.top = T[0].y + "px"
        }
        if (this.shadowElement) {
            this.shadowElement.style.left = T[1].x + "px";
            this.shadowElement.style.top = T[1].y + "px"
        }
        if (this.infoWindow != null && this.infoWindow.isOpen()) {
            this.infoWindow.setPosition()
        }
        this._updateDomZIndex()
    },
    _getPixPos: function () {
        var cO = this._config.offset || new aG(0, 0);
        var T = this._config.icon.anchor || new aG(0, 0);
        var cK = this.map.pointToOverlayPixel(this.getPosition());
        var cN = new bt(cK.x + cO.width - T.width, cK.y + cO.height - T.height);
        var cM = [cN];
        if (this._config.shadow) {
            var cP = this._config.shadow.anchor || new aG(0, 0),
                cL = new bt(cK.x + cO.width - cP.width, cK.y + cO.height - cP.height);
            cM[1] = cL
        }
        return cM
    },
	// 扩展加载完毕后所调用的方法
    _draw: function () {
        if (this.map) {// 如果存在地图实例
            this.domElement = this.initialize(this.map);// 初始化，并创建节点
            if (this._animation) {
                this.setAnimation(this._animation);
                delete this._animation
            }
        } else {
            delete this._animation
        }
    },
    remove: function () {
        this.setAnimation(null);
        if (this.siblingElement && this.siblingElement.parentNode) {
            this.siblingElement.parentNode.removeChild(this.siblingElement)
        }
        if (this.shadowElement && this.shadowElement.parentNode) {
            this.shadowElement.parentNode.removeChild(this.shadowElement)
        }
        if (this.infoWindow && this.infoWindow.overlay && this.infoWindow.overlay === this) {
            this.closeInfoWindow();
            this.infoWindow = null
        }
        this.siblingElement = null;
        this.shadowElement = null;
        this.iconDom = null;
        this.shadowDom = null;
        if (this._config.label) {
            var T = this._config.label;
            T.removeEventListener("remove", this._cfgLabelEvent);
            a7.lang.decontrol(T.guid);
            T.setMarker(null);
            T.domElement = null;
            T = this._config.label = null
        }
        X.prototype.remove.call(this)
    },
    hide: function () {
        X.prototype.hide.call(this);
        if (this.domElement) {
            a7.dom.hide(this.domElement)
        }
        if (this.siblingElement) {
            a7.dom.hide(this.siblingElement)
        }
        if (this.shadowElement) {
            a7.dom.hide(this.shadowElement)
        }
    },
    show: function () {
        X.prototype.show.call(this);
        if (this.domElement) {
            a7.dom.show(this.domElement)
        }
        if (this.siblingElement) {
            a7.dom.show(this.siblingElement)
        }
        if (this.shadowElement) {
            a7.dom.show(this.shadowElement)
        }
    },
    setIcon: function (cL) {
        if (!(cL instanceof L)) {
            return
        }
        this._config.icon = cL;
        if (!this.map || !this.domElement || !this.siblingElement) {
            return
        }
        var cN = this.map;
        try {
            if (this.iconDom) {
                this.siblingElement.removeChild(this.iconDom);
                this.iconDom = null
            }
            this.domElement.style.width = cL.size.width + "px";
            this.domElement.style.height = cL.size.height + "px"
        } catch (cM) {}
        if (this._config.icon) {
            var T = this.iconDom = Z("div");
            var cK = T.style;
            cK.position = "absolute";
            cK.padding = cK.margin = "0";
            cK.width = cL.size.width + "px";
            cK.height = cL.size.height + "px";
            cK.overflow = "hidden";
            T.innerHTML = cL.getHTML();
            T.galleryImg = false;
            this.siblingElement.appendChild(this.iconDom)
        }
        this.draw()
    },
    setShadow: function (cK) {
        if (!(cK instanceof L)) {
            return
        }
        this._config.shadow = cK;
        if (!this.map || !this.domElement || !this.siblingElement) {
            return
        }
        if (!this.shadowElement) {
            this.shadowElement = ar(this.map.getPanes().markerShadow, this._shadowRender())
        }
        var cM = this.map;
        try {
            if (this.shadowDom) {
                this.shadowElement.removeChild(this.shadowDom);
                this.shadowDom = null
            }
            this.shadowElement.style.width = cK.size.width + "px";
            this.shadowElement.style.height = cK.size.height + "px"
        } catch (cL) {}
        if (this._config.shadow) {
            var cN = this.shadowDom = Z("div");
            var T = cN.style;
            T.position = "absolute";
            T.padding = T.margin = "0";
            T.width = cK.size.width + "px";
            T.height = cK.size.height + "px";
            T.overflow = "hidden";
            cN.innerHTML = cK.getHTML();
            cN.galleryImg = false;
            this.shadowElement.appendChild(this.shadowDom)
        }
        this.draw()
    },
    setLabel: function (T) {
        if (!(T instanceof af)) {
            return
        }
        this._config.label = T;
        var cL = this;
        if (!this._config.label._binded) {
            this._config.label._binded = true;
            this._cfgLabelEvent = function () {
                cL._config.label = null
            };
            this._config.label.addEventListener("remove", this._cfgLabelEvent)
        }
        if (!this.map) {
            return
        }
        T._i(this.map);
        if (T.domElement) {
            this.siblingElement.appendChild(T.domElement)
        } else {
            T.domElement = ar(this.domElement, T.render());
            T.domElement.guid = T.guid
        }
        var cK = T.domElement.style;
        cK.left = (T._config.offset.width) + "px";
        cK.top = (T._config.offset.height) + "px";
        T.setMarker(this)
    },
    _initDrag: function () {
        if (!this.domElement || this.domElement._binded) {
            return
        }
        this.domElement._binded = true;
        var cP = this.map,
            cM = this,
            T = 0,
            cQ = 0,
            cL = 0,
            cO = {
                x: 0,
                y: 0
            };

        function cN(cS, cR) {
            cR.pixel = cS.pixel;
            cR.point = cS.point;
            return cR
        }
        function cK(cT) {
            var cS = cT.clientX,
                cR = cT.clientY;
            if (cT.changedTouches) {
                cS = cT.changedTouches[0].clientX;
                cR = cT.changedTouches[0].clientY
            }
            return new bt(cS, cR)
        }
        this.dragStart = function (cT) {
            if (!cM._config.enableDragging) {
                return
            }
            if (cT.button == 2) {
                return
            }
            cM._isDragging = true;
            var cS = cP.pointToPixel(cM.point);
            var cR = cK(cT);
            T = cR.x - cS.x;
            cQ = cR.y - cS.y;
            cL = aD();
            cM.map.temp._draggingMarker = cM;
            a7.on(document, "mousemove", cM.dragIng);
            a7.on(document, "mouseup", cM.dragEnd);
            a7.on(document, "touchmove", cM.dragIng);
            a7.on(document, "touchend", cM.dragEnd);
            if (cM.domElement && cM.domElement.setCapture) {
                cM.domElement.setCapture()
            }
            cM.domElement.style.cursor = cM._config.draggingCursor;
            if (cT.type == "touchstart") {
                aO(cT)
            }
        };
        this.dragIng = function (cV) {
            if (!cM._isDragging) {
                return
            }
            var cS = cK(cV);
            var cT = new bt((cS.x - T), (cS.y - cQ));
            cO = cT;
            cM._draggingMovePixel = cT;
            if ((cM._config.restrictDraggingArea && (cT.x > 15 && cT.x < cM.map.width - 15) && (cT.y > 30 && cT.y < cM.map.height - 15)) || !cM._config.restrictDraggingArea) {
                var cR = cM.map.pixelToPoint(cT),
                    cU = {
                        pixel: cT,
                        point: cR
                    };
                cM._panByX = cM._panByY = 0;
                if (cT.x <= 20 || cT.x >= cM.map.width - 20 || cT.y <= 50 || cT.y >= cM.map.height - 10) {
                    if (cT.x <= 20) {
                        cM._panByX = 8
                    } else {
                        if (cT.x >= cM.map.width - 20) {
                            cM._panByX = -8
                        }
                    }
                    if (cT.y <= 50) {
                        cM._panByY = 8
                    } else {
                        if (cT.y >= cM.map.height - 10) {
                            cM._panByY = -8
                        }
                    }
                    if (!cM._draggingMoveTimer) {
                        cM._draggingMoveTimer = setInterval(function () {
                            cP.panBy(cM._panByX, cM._panByY, {
                                noAnimation: true
                            });
                            var cW = cP.pixelToPoint(cM._draggingMovePixel);
                            cM.setPosition(cW)
                        }, 30)
                    }
                } else {
                    if (cM._draggingMoveTimer) {
                        clearInterval(cM._draggingMoveTimer);
                        cM._draggingMoveTimer = null
                    }
                    cM.setPosition(cR)
                }
                if (!cM._dragstarted) {
                    cM.dispatchEvent(cN(cU, new bf("ondragstart")));
                    cM._dragstarted = true;
                    if (cM._config.raiseOnDrag) {
                        cM.setAnimation(ag);
                        ac._addDragCrossImg(cM._config.icon.anchor, cM.siblingElement)
                    }
                }
                cM.dispatchEvent(cN(cU, new bf("ondragging")))
            }
        };
        this.dragEnd = function (cR) {
            if (cM.domElement && cM.domElement.releaseCapture) {
                cM.domElement.releaseCapture()
            }
            cM._isDragging = false;
            cM.map.temp._draggingMarker = null;
            a7.un(document, "mousemove", cM.dragIng);
            a7.un(document, "mouseup", cM.dragEnd);
            a7.un(document, "touchmove", cM.dragIng);
            a7.un(document, "touchend", cM.dragEnd);
            T = cQ = 0;
            if (cM._draggingMoveTimer) {
                clearInterval(cM._draggingMoveTimer);
                cM._draggingMoveTimer = null
            }
            if (aD() - cL >= 100 && (cO.x > 2 || cO.y > 2)) {
                cM._dragstarted = false;
                cM.dispatchEvent(cN({
                    pixel: cM.map.pointToPixel(cM.getPosition()),
                    point: cM.getPosition()
                }, new bf("ondragend")));
                if (cM._config.raiseOnDrag) {
                    cM.setAnimation(bw);
                    ac._removeDragCrossImg()
                }
                cO.x = cO.y = 0
            }
            cM._updateDomZIndex();
            if (cM.domElement) {
                cM.domElement.style.cursor = cM._config.clickable ? "pointer" : ""
            }
        };
        a7.on(this.domElement, "mousedown", this.dragStart);
        a7.on(this.domElement, "touchstart", this.dragStart)
    },
    setPosition: function (T) {
        if (T instanceof cc) {
            this.point = this._config.point = new cc(T.lng, T.lat);
            this.draw()
        }
    },
    _updateDomZIndex: function () {
        var cK = this,
            T;
        if (cK._isDragging == true) {
            T = ac.DRAG_ZINDEX
        } else {
            if (cK._config.isTop == true) {
                T = ac.TOP_ZINDEX + (cK._addi || 0)
            } else {
                if (cg(cK.zIndex)) {
                    T = cK.zIndex
                } else {
                    T = 0;
                    if (cK.map && cK.getPosition()) {
                        T = bF.getZIndex(cK.getPosition().lat) + cK._config.baseZIndex
                    }
                }
            }
        }
        if (cK.domElement) {
            cK.domElement.style.zIndex = T
        }
        if (cK.siblingElement) {
            cK.siblingElement.style.zIndex = T
        }
    },
    setTop: function (cK, T) {
        this._config.isTop = !! cK;
        if (cK) {
            this._addi = T || 0
        }
        this._updateDomZIndex()
    },
    setTitle: function (T) {
        this._config.title = T + "";
        if (this.domElement) {
            this.domElement.title = this._config.title
        }
    },
    setOffset: function (T) {
        if (!(T instanceof aG)) {
            return
        }
        this._config.offset = T;
        this.setPosition(this.getPosition())
    },
    setAnimation: function (cL) {
        if (!this.iconDom) {
            return
        }
        this._clearAnimation(cL != null);
        var T = bZ[cL];
        if (!T) {
            return
        }
        var cK = T ? T.options.useJS : false;
        (!az() || cK) ? this._execJSAnimation(cL) : this._execCSSAnimation(cL)
    },
    _clearAnimation: function (cK) {
        this._clearCSSAni(this.iconDom);
        this._clearCSSAni(this.shadowDom);
        if (cK) {
            if (this._aniObj) {
                this._aniObj.stop();
                this._aniObj = null
            }
            this.iconDom.style.top = this.iconDom.style.left = "0px";
            if (this.shadowDom) {
                this.shadowDom.style.top = this.shadowDom.style.left = "0px"
            }
        } else {
            if (this._aniObj) {
                var T = this;
                this._aniObj.setFinishCallback(function () {
                    T._aniObj = null
                })
            }
        }
    },
    _execCSSAnimation: function (cK) {
        var T = bZ[cK];
        var cL = ac._getAnimationName(cK);
        this._setCSSAniStyle(this.iconDom, cL[0], T);
        this._setCSSAniStyle(this.shadowDom, cL[1], T)
    },
    _clearCSSAni: function (T) {
        if (T) {
            T.style.WebkitAnimation = "";
            a7.un(T, "webkitAnimationEnd", ac._aniEndHandler)
        }
    },
    _setCSSAniStyle: function (cL, cK, T) {
        if (cL) {
            a7.on(cL, "webkitAnimationEnd", ac._aniEndHandler);
            cL.style.WebkitAnimation = cK + " " + T.options.duration + "ms" + (T.options.loop == g.INFINITE ? " infinite" : "")
        }
    },
    _execJSAnimation: function (cN) {
        var cP = this.iconDom.style;
        var T = false;
        var cM;
        if (this.shadowDom) {
            T = true;
            cM = this.shadowDom.style
        }
        var cK = bZ[cN];
        var cR = this;
        var cQ = cK.iconAnis.length,
            cU = cK.options.duration,
            cT = cR._aniObj = new g({
                duration: 0,
                delay: g.INFINITE
            });
        var cS = cK.iconAnis;
        var cL = cK.shadowAnis;
        cP.top = cS[0].translate[1] + "px";
        if (T) {
            cM.left = cL[0].translate[0] + "px";
            cM.top = cL[0].translate[1] + "px"
        }
        for (var cO = 1; cO < cQ; cO++) {
            (function () {
                var c0 = [cS[cO].translate[0] - cS[cO - 1].translate[0], cS[cO].translate[1] - cS[cO - 1].translate[1]];
                var cZ = [cS[cO - 1].translate[0], cS[cO - 1].translate[1]];
                if (T) {
                    var cX = [cL[cO].translate[0] - cL[cO - 1].translate[0], cL[cO].translate[1] - cL[cO - 1].translate[1]];
                    var cW = [cL[cO - 1].translate[0], cL[cO - 1].translate[1]]
                }
                var cY = av[cS[cO - 1].timingFunc];
                var cV = function () {};
                if (cO == cQ - 1) {
                    if (cK.options.loop != g.INFINITE) {
                        cV = function () {
                            cR._aniObj = null
                        }
                    } else {
                        cV = function () {
                            cR._aniObj.start()
                        }
                    }
                }
                cT.add(new g({
                    duration: (cK.iconAnis[cO].percent - cS[cO - 1].percent) * cU,
                    fps: 40,
                    delay: g.INFINITE,
                    transition: cY,
                    render: function (c1) {
                        if (cR.iconDom) {
                            cR.iconDom.style.top = cZ[1] + Math.round(c1 * c0[1]) + "px"
                        }
                        if (T && cR.shadowDom) {
                            cR.shadowDom.style.left = cW[0] + Math.round(c1 * cX[0]) + "px";
                            cR.shadowDom.style.top = cW[1] + Math.round(c1 * cX[1]) + "px"
                        }
                    },
                    finish: cV
                }))
            })()
        }
        cT.start()
    }
});
var bZ = {};
bZ[1] = {
    options: {
        duration: 400
    },
    iconAnis: [{
        percent: 0,
        translate: [0, -500],
        timingFunc: "ease-in"
    }, {
        percent: 0.5,
        translate: [0, 0],
        timingFunc: "ease-out"
    }, {
        percent: 0.75,
        translate: [0, -20],
        timingFunc: "ease-in"
    }, {
        percent: 1,
        translate: [0, 0],
        timingFunc: "ease-out"
    }],
    shadowAnis: [{
        percent: 0,
        translate: [375, -375],
        timingFunc: "ease-in"
    }, {
        percent: 0.5,
        translate: [0, 0],
        timingFunc: "ease-out"
    }, {
        percent: 0.75,
        translate: [15, -15],
        timingFunc: "ease-in"
    }, {
        percent: 1,
        translate: [0, 0],
        timingFunc: "ease-out"
    }]
};
bZ[2] = {
    options: {
        duration: 700,
        loop: g.INFINITE
    },
    iconAnis: [{
        percent: 0,
        translate: [0, 0],
        timingFunc: "ease-out"
    }, {
        percent: 0.5,
        translate: [0, -20],
        timingFunc: "ease-in"
    }, {
        percent: 1,
        translate: [0, 0],
        timingFunc: "ease-out"
    }],
    shadowAnis: [{
        percent: 0,
        translate: [0, 0],
        timingFunc: "ease-out"
    }, {
        percent: 0.5,
        translate: [15, -15],
        timingFunc: "ease-in"
    }, {
        percent: 1,
        translate: [0, 0],
        timingFunc: "ease-out"
    }]
};
bZ[3] = {
    options: {
        duration: 200,
        useJS: true
    },
    iconAnis: [{
        percent: 0,
        translate: [0, 0],
        timingFunc: "ease-in"
    }, {
        percent: 1,
        translate: [0, -20],
        timingFunc: "ease-out"
    }],
    shadowAnis: [{
        percent: 0,
        translate: [0, 0],
        timingFunc: "ease-in"
    }, {
        percent: 1,
        translate: [15, -15],
        timingFunc: "ease-out"
    }]
};
bZ[4] = {
    options: {
        duration: 500,
        useJS: true
    },
    iconAnis: [{
        percent: 0,
        translate: [0, -20],
        timingFunc: "ease-in"
    }, {
        percent: 0.5,
        translate: [0, 0],
        timingFunc: "ease-out"
    }, {
        percent: 0.75,
        translate: [0, -10],
        timingFunc: "ease-in"
    }, {
        percent: 1,
        translate: [0, -0],
        timingFunc: "ease-out"
    }],
    shadowAnis: [{
        percent: 0,
        translate: [15, -15],
        timingFunc: "ease-in"
    }, {
        percent: 0.5,
        translate: [0, 0],
        timingFunc: "ease-out"
    }, {
        percent: 0.75,
        translate: [8, -8],
        timingFunc: "ease-in"
    }, {
        percent: 1,
        translate: [0, 0],
        timingFunc: "ease-out"
    }]
};
L.prototype.getHTML = function () {
    if (a7.browser.ie == 6 && this.imageUrl.toLowerCase().indexOf(".png") > 0) {
        var T = ["<div"];
        if (this.printImageUrl) {
            T.push(' class="BMap_noprint"')
        }
        T.push(' style="width: 1px; height: 1px;');
        T.push("; left:" + this.imageOffset.width + "px");
        T.push("; top:" + this.imageOffset.height + "px");
        T.push("; filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=image,src='" + this.imageUrl + "')");
        T.push('; position:absolute;"></div>');
        if (this.printImageUrl) {
            T.push('<img class="BMap_noscreen" style="border:none;left:' + this.imageOffset.width + "px;");
            T.push("top:" + this.imageOffset.height + 'px;position:absolute" src="' + this.printImageUrl + '" />')
        }
        return T.join("")
    } else {
        return ['<img src="', this.imageUrl, '" style="border:none;left:' + this.imageOffset.width + "px", "; top:" + this.imageOffset.height + "px", '; position:absolute;" />'].join("")
    }
};
a7.extend(af.prototype, {
    _addDom: function () {
        var cK = this._config;
        var cM = this.content;
        var T = Z("label", {
            "class": "BMapLabel",
            unselectable: "on"
        });
        if (cK.title) {
            T.title = cK.title
        }
        var cL = T.style;
        cL.position = "absolute";
        cL.MozUserSelect = "none";
        if (cK.width == 0 || cK.width == "auto") {
            cL.display = "inline"
        } else {
            cL.width = cK.width + "px";
            cL.display = "block";
            cL.overflow = "hidden"
        }
        if (cK.clickable == "true") {
            cL.cursor = "pointer"
        } else {
            if (!a7.browser.ie) {
                cL.cursor = "inherit"
            }
        }
        T.innerHTML = cM;
        this.map.getPanes().labelPane.appendChild(T);
        this.domElement = T;
        this.setStyle(cK.styles);
        return T
    },
    setPosition: function (T) {
        if (T instanceof cc && !this.getMarker()) {
            this.point = this._config.position = new cc(T.lng, T.lat);
            this.draw()
        }
    },
    draw: function () {
        if (this.domElement && this.getPosition() && !this.getMarker()) {
            var cK = this._config.offset || new aG(0, 0);
            var T = this.map.pointToOverlayPixel(this.getPosition());
            this.domElement.style.left = (T.x + cK.width) + "px";
            this.domElement.style.top = (T.y + cK.height) + "px";
            this._updateDomZIndex()
        }
    },
    _draw: function () {
        if (this.map && !this._marker) {
            this.domElement = this.initialize(this.map);
            this.draw()
        }
    },
    setContent: function (T) {
        this.content = T;
        if (this.domElement) {
            this.domElement.innerHTML = T
        }
    },
    setOpacity: function (cK) {
        if (cK >= 0 && cK <= 1) {
            this._config.opacity = cK
        }
        if (this.domElement) {
            var T = this.domElement.style;
            T.opacity = cK;
            T.filter = "alpha(opacity=" + (cK * 100) + ")"
        }
    },
    setOffset: function (T) {
        if (!(T instanceof aG)) {
            return
        }
        this._config.offset = new aG(T.width, T.height);
        if (this.getMarker() && this.domElement) {
            this.domElement.style.left = T.width + "px";
            this.domElement.style.top = T.height + "px"
        } else {
            this.draw()
        }
    },
    setStyle: function (T) {
        T = T || {};
        this._config.styles = a7.extend(this._config.styles, T);
        if (this.domElement) {
            for (var cL in T) {
                try {
                    this.domElement.style[cL] = T[cL]
                } catch (cK) {}
            }
        }
    },
    setTitle: function (T) {
        this._config.title = T + "";
        if (this.domElement) {
            this.domElement.title = this._config.title
        }
    }
});