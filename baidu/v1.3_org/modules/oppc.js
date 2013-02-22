function cG() {
    this._container = null
}
BMap.register(function (cK) {
    if (cK.config.isOverviewMap) {
        return
    }
    var T = new cG();
    ar(cK.container, T.render(cK.config.defaultCursor));
    T._container = cK.container.lastChild;
    cK.temp.zoomer = T
});
cG.prototype.render = function (cK) {
    var T = ['<div id=zoomer style="position:absolute;z-index:0;top:0px;left:0px;overflow:hidden;visibility:hidden;cursor:' + cK + '">'];
    T.push('<div class="BMap_zoomer" style="top:0;left:0;"></div>');
    T.push('<div class="BMap_zoomer" style="top:0;right:0;"></div>');
    T.push('<div class="BMap_zoomer" style="bottom:0;left:0;"></div>');
    T.push('<div class="BMap_zoomer" style="bottom:0;right:0;"></div>');
    T.push("</div>");
    return T.join("")
};
cG.prototype.action = function (cR, cS) {
    if (cG._timeline) {
        return
    }
    var cQ = this._container;
    if (!cQ) {
        return
    }
    var cZ = cS;
    var cL = 60;
    var cY = 120;
    var cT = 4 / 3,
        cN = Math.ceil((cZ ? cL : cY) / 2),
        cO = Math.max(15, cN / cT),
        cP = cQ.style;
    cP.width = cN * 2 + "px";
    cP.height = cO * 2 + "px";
    cP.visibility = "visible";
    var cV = cQ.children;
    if (cZ) {
        cV[0].style.backgroundPosition = "0 0";
        cV[1].style.backgroundPosition = "-7px 0";
        cV[2].style.backgroundPosition = "0 -7px";
        cV[3].style.backgroundPosition = "-7px -7px"
    } else {
        cV[0].style.backgroundPosition = "-7px -7px";
        cV[1].style.backgroundPosition = "0 -7px";
        cV[2].style.backgroundPosition = "-7px 0";
        cV[3].style.backgroundPosition = "0 0"
    }
    cV = null;
    var cX = cR.x - cN;
    var cW = cR.y - cO;
    if (isNaN(cX) || isNaN(cW)) {
        return
    }
    cP.left = cX + "px";
    cP.top = cW + "px";
    var cK = Math.ceil((cZ ? cY : cL) / 2);
    var cM = Math.max(15, cK / cT);
    cK = cK - cN;
    cM = Math.ceil(cM - cO);
    var cU = this;
    var T = cU._container.style;
    if (cG._timeline) {
        cG._timeline.end()
    }
    cG._timeline = new g({
        fps: 20,
        duration: 240,
        transition: av.easeInQuad,
        delay: 100,
        render: function (c1) {
            if (c1 < 0.1) {
                return
            }
            var c2 = Math.ceil(cK * c1);
            var c0 = Math.ceil(cM * c1);
            T.width = (cN + c2) * 2 + "px";
            T.height = (cO + c0) * 2 + "px";
            T.left = cX - c2 + "px";
            T.top = cW - c0 + "px"
        },
        finish: function () {
            cG._timeline = false;
            setTimeout(function () {
                cP.visibility = "hidden"
            }, 300)
        }
    })
};
BMap.register(function (cO) {
    var cN = cO;
    var cM = cO.platform;

    function cP(cZ, cV) {
        var cR = cZ.srcElement || cZ.target,
            cY = cZ.offsetX || cZ.layerX || 0,
            cX = cZ.offsetY || cZ.layerY || 0,
            cU = null,
            cT = null;
        if (cR.nodeType != 1) {
            cR = cR.parentNode
        }
        while (cR && cR != cN.container) {
            if (cR.guid) {
                if (a7.lang.instance(cR.guid) instanceof X) {
                    cU = a7.lang.instance(cR.guid)
                }
                if (a7.lang.instance(cR.guid) instanceof bO) {
                    cT = a7.lang.instance(cR.guid)
                }
            }
            if (!(cR.clientWidth == 0 && cR.clientHeight == 0 && cR.offsetParent && cR.offsetParent.nodeName == "TD") && cR.namespaceURI != "http://www.w3.org/2000/svg") {
                cY += cR.offsetLeft || 0;
                cX += cR.offsetTop || 0
            } else {
                if (cR.namespaceURI == "http://www.w3.org/2000/svg" && BMap.DrawerSelector) {
                    var cS = BMap.DrawerSelector.getDrawer(cN);
                    var cQ = cS.getPalette();
                    if (navigator.userAgent.indexOf("Opera") > -1 && cR.tagName != "svg") {
                        var c0 = a7.lang.instance(cR.guid);
                        if (c0) {
                            var cW = c0.getBounds();
                            cY = cY + cN.pointToPixel(cW.getSouthWest()).x;
                            cX = cX + cN.pointToPixel(cW.getNorthEast()).y
                        }
                        break
                    }
                    if (cQ && (!a7.browser.ie || (a7.browser.ie == 9 && cR.nodeName.toLowerCase() == "svg"))) {
                        cY += parseFloat(cQ.style.left) + cN.offsetX;
                        cX += parseFloat(cQ.style.top) + cN.offsetY
                    }
                    if (a7.browser.ie == 9 && cR.nodeName.toLowerCase() != "svg") {
                        cY += cN.offsetX;
                        cX += cN.offsetY;
                        break
                    }
                    if (!a7.browser.ie) {
                        break
                    }
                }
            }
            cR = cR.offsetParent
        }
        cV.offsetX = cY;
        cV.offsetY = cX;
        cV.pixel = new bt(cY, cX);
        cV.point = cN.pixelToPoint(cV.pixel);
        cV.overlay = cU;
        cV.infoWindow = cT;
        return cV
    }
    cO.container.onselectstart = function () {
        return false
    };
    a7.on(cN.platform, "mousemove", function (cQ) {
        if (cN.currentOperation == 0) {
            cN.dispatchEvent(cP(cQ, new bf("onmousemove").inherit(cQ)))
        }
    });
    a7.on(cN.platform, "mousedown", function (cU) {
        if (!cN.config.enableMouseDown) {
            return
        }
        var cU = window.event || cU;
        if (!a7.browser.ie) {
            cB(cU)
        }
        var cS = cN.temp;
        cS.operating = true;
        var cR = cU.srcElement || cU.target;
        if (cS.dragAni) {
            cS.dragAni.stop()
        }
        cS.tpx = cU.clientX || cU.pageX || 0;
        cS.tpy = cU.clientY || cU.pageY || 0;
        var cQ = cR;
        while (cQ) {
            if (cQ == cN.container) {
                break
            }
            if (a7.dom.hasClass(cQ, "BMap_Marker")) {
                cS.operating = false;
                var cT = a7.lang.instance(cQ.guid);
                if (cT instanceof ac && cT._config.clickable == true || cT._config.enableDragging == true) {
                    return
                }
            }
            cQ = cQ.parentNode
        }
        if (cR.nodeType != 1) {
            cR = cR.parentNode
        }
        if (a7.browser.ie && cN.maskLayer.setCapture) {
            cN.maskLayer.setCapture()
        }
        cN.dispatchEvent(cP(cU, new bf("onmousedown").inherit(cU)));
        if (cN.config.enableDragging && !(cN.currentOperation & bm.drag) && cU.button != 2) {
            cS.mx = cS.tpx;
            cS.my = cS.tpy;
            cS.pl = cN.offsetX;
            cS.pt = cN.offsetY;
            cN.currentOperation |= bm.drag;
            if (cN.temp.curSpots.length == 0) {
                cN.platform.style.cursor = cN.config.draggingCursor
            } else {
                cN.platform.style.cursor = "pointer"
            }
        }
    });
    a7.on(document, "mousemove", function (cT) {
        var cT = window.event || cT;
        if (!a7.browser.ie) {
            cB(cT)
        }
        var cS = cN.temp;
        var cQ = cT.clientX || cT.pageX || 0;
        var cW = cT.clientY || cT.pageY || 0;
        if (cS.tpx || cS.tpy) {
            cS.mox = cQ - cS.tpx;
            cS.moy = cW - cS.tpy
        }
        var cU = aD(),
            cV = (cU - cS.lastLoadTileTime) > 40;
        if (cU - cS.lastDomMoveTime < 18) {
            return
        }
        if (cV) {
            cS.lastLoadTileTime = cU
        }
        cS.lastDomMoveTime = cU;
        if (cN.currentOperation & bm.drag && cN.config.enableDragging) {
            var cR = cN.platform.style;
            if (cR.cursor.replace(/"|\s/g, "") != cN.config.draggingCursor) {
                cR.cursor = cN.config.draggingCursor
            }
            if (!cS._moved) {
                cN.dispatchEvent(cP(cT, new bf("ondragstart").inherit(cT)));
                cN.dispatchEvent(new bf("onmovestart"));
                cS.dragStartPos = new bt(cQ, cW);
                cS.dragStartTime = cU
            }
            if (cS.mx == 0 && cS.my == 0 && cN.temp.keyboardDrag) {
                cS.mx = cQ;
                cS.my = cW;
                cS.pl = cN.offsetX;
                cS.pt = cN.offsetY
            }
            if (cQ - cS.mx != 0 || cW - cS.my != 0) {
                cN.temp._moved = true;
                cN.dispatchEvent(cP(cT, new bf("ondragging").inherit(cT)));
                cN._setPlatformPosition(cS.pl + cQ - cS.mx, cS.pt + cW - cS.my, null, cV)
            }
        }
    });
    a7.on(document, "mouseup", function (cT) {
        if (a7.browser.ie && cN.maskLayer.releaseCapture) {
            cN.maskLayer.releaseCapture()
        }
        var cR = cN.temp;
        if (cR.preEnableClickPan) {
            cN.enableClickPan(true)
        }
        var cT = window.event || cT,
            cQ = cT.clientX || cT.pageX,
            cU = cT.clientY || cT.pageY;
        if (cN.currentOperation & bm.drag && cN.config.enableDragging) {
            cN.currentOperation ^= bm.drag;
            if (cR.curSpots.length == 0) {
                cN.platform.style.cursor = cN.config.defaultCursor
            } else {
                cN.platform.style.cursor = "pointer"
            }
            if (cN.temp._moved) {
                var cS = cP(cT, new bf("ondragend").inherit(cT));
                cN.dispatchEvent(cS);
                cN._processInertialDragging(new bt(cQ, cU))
            }
            cR._moved = false
        }
        cR.operating = false;
        if (cT.button == 2) {
            cR.tpx = null;
            cR.tpy = null;
            cR.mox = 0;
            cR.moy = 0
        }
    });

    function cL(cT) {
        var cS = cN.temp,
            cR = !cS.mox && !cS.moy;
        if (cS.rightDblclickTimer) {
            clearTimeout(cS.rightDblclickTimer);
            cS.rightDblclickTimer = null;
            if (cR) {
                cN.dispatchEvent(cP(cT, new bf("onrightclick").inherit(cT)));
                cN.currentOperation |= bm.dblclick;
                cN.dispatchEvent(cP(cT, new bf("onrightdblclick").inherit(cT)));
                cN.currentOperation ^= bm.dblclick
            }
        } else {
            if (cR) {
                cN.dispatchEvent(cP(cT, new bf("onrightclick").inherit(cT)))
            }
            var cQ = cP(cT, new bf("onrightclickex").inherit(cT));
            cS.rightDblclickTimer = setTimeout(function () {
                cS.rightDblclickTimer = null;
                if (cR) {
                    cN.dispatchEvent(cQ)
                }
            }, cN.config.clickInterval)
        }
    }
    if (a7.browser.firefox >= 4) {
        a7.on(cN.container, "mouseup", function (cQ) {
            if (cQ.button == 2) {
                cL(cQ)
            }
        });
        a7.on(cN.container, "contextmenu", function (cQ) {
            cn(cQ)
        })
    } else {
        a7.on(cN.container, "contextmenu", function (cQ) {
            cL(cQ);
            cn(cQ)
        })
    }
    var T = new Date();

    function cK(cT) {
        if (cN.config.enableWheelZoom) {
            var cS = cN.temp;
            if (cS.dragAni) {
                cS.dragAni.stop()
            }
            cN.currentOperation |= bm.mousewheel;
            var cT = window.event || cT;
            cN.lastLevel = cN.zoomLevel;
            var cR = new bf("onmousewheel");
            cR.trend = cT.wheelDelta >= 0 || cT.detail < 0;
            var cQ = new Date();
            if (cR.trend == true && cN.zoomLevel == cN.getMapType().getMaxZoom() || cR.trend == false && cN.zoomLevel == cN.getMapType().getMinZoom() || cQ - T < 220) {
                cN.currentOperation ^= bm.mousewheel;
                cB(cT);
                return
            }
            T = cQ;
            cP(cT, cR.inherit(cT));
            cN.dispatchEvent(cR);
            cN.currentOperation ^= bm.mousewheel;
            cB(cT)
        }
    }
    a7.on(cN.container, "mousewheel", cK);
    if (window.addEventListener) {
        cN.container.addEventListener("DOMMouseScroll", cK, false)
    }
    a7.on(cN.platform, "click", function (cU) {
        var cS = new bf("onclick"),
            cT = new bf("onclickex"),
            cR = cN.temp;
        cP(cU, cS.inherit(cU));
        cP(cU, cT.inherit(cU));
        if (!cN.currentOperation) {
            var cQ = !cR.mox && !cR.moy;
            if (cQ) {
                cN.dispatchEvent(cS)
            }
            if (!cR._clickTimer) {
                cR._clickTimer = setTimeout(function () {
                    cR._clickTimer = null;
                    if (cQ) {
                        cN.dispatchEvent(cT)
                    }
                }, cN.config.clickInterval)
            }
        }
        cR.tpx = null;
        cR.tpy = null;
        cR.mox = 0;
        cR.moy = 0
    });
    a7.on(cN.platform, "dblclick", function (cR) {
        if (!cN.currentOperation) {
            cN.currentOperation |= bm.dblclick;
            if (a7.browser.ie) {
                cN.dispatchEvent(cP(cR, new bf("onclick").inherit(cR)))
            }
            var cQ = cN.temp;
            if (cQ._clickTimer) {
                clearTimeout(cQ._clickTimer);
                cQ._clickTimer = null
            }
            cN.dispatchEvent(cP(cR, new bf("ondblclick").inherit(cR)));
            cN.currentOperation ^= bm.dblclick
        }
    });
    a7.on(document, "mousedown", function (cS) {
        var cS = window.event || cS;
        var cR = cS.srcElement || cS.target;
        var cQ = cN.temp;
        if (cQ.canKeyboard) {
            cQ.canKeyboard = a7.dom.contains(cO.container, cR)
        } else {
            cQ.canKeyboard = a7.dom.contains(cO.platform, cR)
        }
    })
});
by.prototype._processInertialDragging = function (c1) {
    var c4 = this;
    if (!c4.config.enableInertialDragging) {
        c4.dispatchEvent(new bf("onmoveend"));
        return
    }
    var cS = c4.temp;
    var cK = aD();
    if (cK - cS.lastDomMoveTime > 100) {
        c4.dispatchEvent(new bf("onmoveend"));
        cS._moved = false;
        return
    } else {
        var c2 = cS.dragStartPos,
            cV = c1,
            T = cs(c2, cV),
            cZ = [cV.x - c2.x > 0 ? 1 : -1, cV.y - c2.y > 0 ? 1 : -1],
            cM = (cK - cS.dragStartTime) / 1000,
            cQ = T / cM / 2,
            cR = 0.5,
            c0 = cQ / (2 * cR),
            cY = 0.4 * c0 * cQ / 1000,
            cP = Math.abs(c2.x - cV.x),
            cO = Math.abs(c2.y - cV.y),
            cW = 0,
            cT = 0;
        if (cO == 0) {
            cW = cP
        } else {
            var cN = Math.abs(c2.x - cV.x) / Math.abs(c2.y - cV.y);
            cT = Math.round(Math.sqrt(cY * cY / (1 + cN * cN)));
            cW = Math.round(cN * cT)
        }
        if (cZ[0] == -1) {
            cW = -cW
        }
        if (cZ[1] == -1) {
            cT = -cT
        }
        if (cS.dragAni) {
            cS.dragAni.stop()
        }
        var cL = cQ / 1000,
            cX = c4.offsetX,
            cU = c4.offsetY,
            c3 = false;
        cS.dragAni = new g({
            duration: c0,
            fps: 30,
            transition: function (c5) {
                var c5 = c5 * cL / (2 * cR);
                return cL * c5 - cR * c5 * c5
            },
            render: function (c5) {
                c5 = c5 * (4 * cR) / (cL * cL);
                c3 = !c3;
                c4._setPlatformPosition(cX + Math.round(c5 * cW), cU + Math.round(c5 * cT), null, c3)
            },
            finish: function () {
                cS.dragAni = null;
                c4._setPlatformPosition(cX + Math.round(cW), cU + Math.round(cT));
                c4.dispatchEvent(new bf("onmoveend"))
            },
            onStop: function (c5) {
                cS.dragAni = null;
                c5 = c5 * (4 * cR) / (cL * cL);
                c4._setPlatformPosition(cX + Math.round(c5 * cW), cU + Math.round(c5 * cT));
                setTimeout(function () {
                    c4.dispatchEvent(new bf("onmoveend"))
                }, 1)
            }
        })
    }
};
BMap.register(function (cK) {
    var T = cK;
    a7.on(document, "keydown", function (cL) {
        if (T.temp.stopArrow == true) {
            T.temp.stopArrow = false
        }
        if (T.config.enableKeyboard && T.temp.canKeyboard) {
            var cL = window.event || cL;
            switch (cL.keyCode || cL.which) {
            case 43:
            case 189:
            case 109:
                T.temp.operating = true;
                T.dispatchEvent(new bf("onminuspress"));
                break;
            case 43:
            case 61:
            case 187:
            case 107:
                T.temp.operating = true;
                T.dispatchEvent(new bf("onpluspress"));
                break;
            case 33:
                T.temp.operating = false;
                T.temp.stopArrow = true;
                T.panBy(0, Math.round(T.height * 0.8));
                cn(cL);
                break;
            case 34:
                T.temp.operating = false;
                T.temp.stopArrow = true;
                T.panBy(0, -Math.round(T.height * 0.8));
                cn(cL);
                break;
            case 35:
                T.temp.operating = false;
                T.temp.stopArrow = true;
                T.panBy(-Math.round(T.width * 0.8), 0);
                cn(cL);
                break;
            case 36:
                T.temp.operating = false;
                T.temp.stopArrow = true;
                T.panBy(Math.round(T.width * 0.8), 0);
                cn(cL);
                break;
            case 37:
                T.temp.operating = true;
                T.temp.arrow |= 1;
                T._arrow();
                cn(cL);
                break;
            case 38:
                T.temp.operating = true;
                T.temp.arrow |= 2;
                T._arrow();
                cn(cL);
                break;
            case 39:
                T.temp.operating = true;
                T.temp.arrow |= 4;
                T._arrow();
                cn(cL);
                break;
            case 40:
                T.temp.operating = true;
                T.temp.arrow |= 8;
                T._arrow();
                cn(cL);
                break
            }
        }
    });
    a7.on(document, "keyup", function (cL) {
        if (T.config.enableKeyboard) {
            var cL = window.event || cL;
            switch (cL.keyCode || cL.which) {
            case 37:
                T.temp.arrow = T.temp.arrow & ~1;
                if (T.temp.arrow != 0) {
                    T._arrow()
                }
                break;
            case 38:
                T.temp.arrow = T.temp.arrow & ~2;
                if (T.temp.arrow != 0) {
                    T._arrow()
                }
                break;
            case 39:
                T.temp.arrow = T.temp.arrow & ~4;
                if (T.temp.arrow != 0) {
                    T._arrow()
                }
                break;
            case 40:
                T.temp.arrow = T.temp.arrow & ~8;
                if (T.temp.arrow != 0) {
                    T._arrow()
                }
                break
            }
        }
        T.temp.operating = false
    });
    by.prototype._arrow = function () {
        if (this._arrow.occurrent && this._arrow._lastArrow == this.temp.arrow && this.temp.stopArrow == true) {
            return
        }
        var cL = this;
        var cN = cL.temp.arrow;
        cL._arrow._lastArrow = cN;
        cL._arrow.interval = 30;
        cL._arrow.duration = 999;
        cL._arrow.dx = cL._arrow.dy = 0;
        if (cN & 1) {
            cL._arrow.dx = 1
        }
        if (cN & 2) {
            cL._arrow.dy = 1
        }
        if (cN & 4) {
            cL._arrow.dx = -1
        }
        if (cN & 8) {
            cL._arrow.dy = -1
        }
        if (cN & 1 && cN & 4) {
            cL._arrow.dx = 0
        }
        if (cN & 2 && cN & 8) {
            cL._arrow.dy = 0
        }
        if (!cL._arrow.occurrent) {
            cL._arrow.occurrent = true;
            cL._arrow.time = aD();
            cL._arrow.beginTime = cL._arrow.time;
            cL.dispatchEvent(new bf("onmovestart"));
            var cM = new g({
                fps: cL._arrow.interval,
                duration: cL._arrow.duration,
                transition: av.linear,
                render: function (cU) {
                    var cP = cL._arrow;
                    var cS = cL.temp.arrow;
                    if (cL._arrow._lastArrow != cS) {
                        cL._arrow._lastArrow = cS;
                        if (cS & 1) {
                            cP.dx = 1
                        }
                        if (cS & 2) {
                            cP.dy = 1
                        }
                        if (cS & 4) {
                            cP.dx = -1
                        }
                        if (cS & 8) {
                            cP.dy = -1
                        }
                        if (cS & 1 && cS & 4) {
                            cP.dx = 0
                        }
                        if (cS & 2 && cS & 8) {
                            cP.dy = 0
                        }
                    }
                    if (cL.temp.stopArrow == true) {
                        cP.dx = 0;
                        cP.dy = 0
                    }
                    var cT = aD();
                    var cR = Math.pow((cT - cP.beginTime) / cP.duration, 2);
                    if (!cL.temp.arrow) {
                        cP.occurrent = false;
                        cM.terminative = true;
                        cL._arrow.time = aD();
                        setTimeout(function () {
                            cL.dispatchEvent(new bf("onmoveend"))
                        }, 40)
                    }
                    var cV = (cT - cP.time);
                    var cQ = cP.dx * cV * cR >= 0 ? Math.ceil(cP.dx * cV * cR) : Math.floor(cP.dx * cV * cR);
                    var cO = cP.dy * cV * cR >= 0 ? Math.ceil(cP.dy * cV * cR) : Math.floor(cP.dy * cV * cR);
                    if (cQ != 0 && cO != 0) {
                        cQ = Math.round(cQ * 0.7);
                        cO = Math.round(cO * 0.7)
                    }
                    cP.time = cT;
                    cL._setPlatformPosition(cL.offsetX + cQ, cL.offsetY + cO)
                },
                finish: function () {
                    cL._arrow.time = aD();
                    setTimeout(function () {
                        cL._arrowPan()
                    }, cL._arrow.interval)
                }
            })
        }
    };
    by.prototype._arrowPan = function () {
        var cO = this;
        var cM = cO._arrow;
        if (cO.temp.stopArrow) {
            cM.dx = 0;
            cM.dy = 0
        }
        if (!cO.temp.arrow) {
            cM.occurrent = false;
            cO.dispatchEvent(new bf("onmoveend"));
            return
        }
        var cP = aD();
        var cQ = (cP - cM.time);
        var cN = Math.ceil(cM.dx * cQ);
        var cL = Math.ceil(cM.dy * cQ);
        cM.time = cP;
        cO._setPlatformPosition(cO.offsetX + cN, cO.offsetY + cL);
        setTimeout(function () {
            cO._arrowPan()
        }, cM.interval)
    }
});