function cE() {
    this._container = null
}
BMap.register(function (cI) {
    if (cI.config.isOverviewMap) {
        return
    }
    var T = new cE();
    aq(cI.container, T.render(cI.config.defaultCursor));
    T._container = cI.container.lastChild;
    cI.temp.zoomer = T
});
cE.prototype.render = function (cI) {
    var T = ['<div id=zoomer style="position:absolute;z-index:0;top:0px;left:0px;overflow:hidden;visibility:hidden;cursor:' + cI + '">'];
    T.push('<div class="BMap_zoomer" style="top:0;left:0;"></div>');
    T.push('<div class="BMap_zoomer" style="top:0;right:0;"></div>');
    T.push('<div class="BMap_zoomer" style="bottom:0;left:0;"></div>');
    T.push('<div class="BMap_zoomer" style="bottom:0;right:0;"></div>');
    T.push("</div>");
    return T.join("")
};
cE.prototype.action = function (cP, cQ) {
    if (cE._timeline) {
        return
    }
    var cO = this._container;
    if (!cO) {
        return
    }
    var cX = cQ;
    var cJ = 60;
    var cW = 120;
    var cR = 4 / 3,
        cL = Math.ceil((cX ? cJ : cW) / 2),
        cM = Math.max(15, cL / cR),
        cN = cO.style;
    cN.width = cL * 2 + "px";
    cN.height = cM * 2 + "px";
    cN.visibility = "visible";
    var cT = cO.children;
    if (cX) {
        cT[0].style.backgroundPosition = "0 0";
        cT[1].style.backgroundPosition = "-7px 0";
        cT[2].style.backgroundPosition = "0 -7px";
        cT[3].style.backgroundPosition = "-7px -7px"
    } else {
        cT[0].style.backgroundPosition = "-7px -7px";
        cT[1].style.backgroundPosition = "0 -7px";
        cT[2].style.backgroundPosition = "-7px 0";
        cT[3].style.backgroundPosition = "0 0"
    }
    cT = null;
    var cV = cP.x - cL;
    var cU = cP.y - cM;
    if (isNaN(cV) || isNaN(cU)) {
        return
    }
    cN.left = cV + "px";
    cN.top = cU + "px";
    var cI = Math.ceil((cX ? cW : cJ) / 2);
    var cK = Math.max(15, cI / cR);
    cI = cI - cL;
    cK = Math.ceil(cK - cM);
    var cS = this;
    var T = cS._container.style;
    if (cE._timeline) {
        cE._timeline.end()
    }
    cE._timeline = new g({
        fps: 20,
        duration: 240,
        transition: au.easeInQuad,
        delay: 100,
        render: function (cZ) {
            if (cZ < 0.1) {
                return
            }
            var c0 = Math.ceil(cI * cZ);
            var cY = Math.ceil(cK * cZ);
            T.width = (cL + c0) * 2 + "px";
            T.height = (cM + cY) * 2 + "px";
            T.left = cV - c0 + "px";
            T.top = cU - cY + "px"
        },
        finish: function () {
            cE._timeline = false;
            setTimeout(function () {
                cN.visibility = "hidden"
            }, 300)
        }
    })
};
BMap.register(function (cM) {
    var cL = cM;
    var cK = cM.platform;

    function cN(cX, cT) {
        var cP = cX.srcElement || cX.target,
            cW = cX.offsetX || cX.layerX || 0,
            cV = cX.offsetY || cX.layerY || 0,
            cS = null,
            cR = null;
        if (cP.nodeType != 1) {
            cP = cP.parentNode
        }
        while (cP && cP != cL.container) {
            if (cP.guid) {
                if (a5.lang.instance(cP.guid) instanceof W) {
                    cS = a5.lang.instance(cP.guid)
                }
                if (a5.lang.instance(cP.guid) instanceof bM) {
                    cR = a5.lang.instance(cP.guid)
                }
            }
            if (!(cP.clientWidth == 0 && cP.clientHeight == 0 && cP.offsetParent && cP.offsetParent.nodeName == "TD") && cP.namespaceURI != "http://www.w3.org/2000/svg") {
                cW += cP.offsetLeft || 0;
                cV += cP.offsetTop || 0
            } else {
                if (cP.namespaceURI == "http://www.w3.org/2000/svg" && BMap.DrawerSelector) {
                    var cQ = BMap.DrawerSelector.getDrawer(cL);
                    var cO = cQ.getPalette();
                    if (navigator.userAgent.indexOf("Opera") > -1 && cP.tagName != "svg") {
                        var cY = a5.lang.instance(cP.guid);
                        if (cY) {
                            var cU = cY.getBounds();
                            cW = cW + cL.pointToPixel(cU.getSouthWest()).x;
                            cV = cV + cL.pointToPixel(cU.getNorthEast()).y
                        }
                        break
                    }
                    if (cO && (!a5.browser.ie || (a5.browser.ie == 9 && cP.nodeName.toLowerCase() == "svg"))) {
                        cW += parseFloat(cO.style.left) + cL.offsetX;
                        cV += parseFloat(cO.style.top) + cL.offsetY
                    }
                    if (a5.browser.ie == 9 && cP.nodeName.toLowerCase() != "svg") {
                        cW += cL.offsetX;
                        cV += cL.offsetY;
                        break
                    }
                    if (!a5.browser.ie) {
                        break
                    }
                }
            }
            cP = cP.offsetParent
        }
        cT.offsetX = cW;
        cT.offsetY = cV;
        cT.pixel = new br(cW, cV);
        cT.point = cL.pixelToPoint(cT.pixel);
        cT.overlay = cS;
        cT.infoWindow = cR;
        return cT
    }
    cM.container.onselectstart = function () {
        return false
    };
    a5.on(cL.platform, "mousemove", function (cO) {
        if (cL.currentOperation == 0) {
            cL.dispatchEvent(cN(cO, new bd("onmousemove").inherit(cO)))
        }
    });
    a5.on(cL.platform, "mousedown", function (cS) {
        if (!cL.config.enableMouseDown) {
            return
        }
        var cS = window.event || cS;
        if (!a5.browser.ie) {
            cz(cS)
        }
        var cQ = cL.temp;
        cQ.operating = true;
        var cP = cS.srcElement || cS.target;
        if (cQ.dragAni) {
            cQ.dragAni.stop()
        }
        cQ.tpx = cS.clientX || cS.pageX || 0;
        cQ.tpy = cS.clientY || cS.pageY || 0;
        var cO = cP;
        while (cO) {
            if (cO == cL.container) {
                break
            }
            if (a5.dom.hasClass(cO, "BMap_Marker")) {
                cQ.operating = false;
                var cR = a5.lang.instance(cO.guid);
                if (cR instanceof ab && cR._config.clickable == true || cR._config.enableDragging == true) {
                    return
                }
            }
            cO = cO.parentNode
        }
        if (cP.nodeType != 1) {
            cP = cP.parentNode
        }
        if (a5.browser.ie && cL.maskLayer.setCapture) {
            cL.maskLayer.setCapture()
        }
        cL.dispatchEvent(cN(cS, new bd("onmousedown").inherit(cS)));
        if (cL.config.enableDragging && !(cL.currentOperation & bk.drag) && cS.button != 2) {
            cQ.mx = cQ.tpx;
            cQ.my = cQ.tpy;
            cQ.pl = cL.offsetX;
            cQ.pt = cL.offsetY;
            cL.currentOperation |= bk.drag;
            if (cL.temp.curSpots.length == 0) {
                cL.platform.style.cursor = cL.config.draggingCursor
            } else {
                cL.platform.style.cursor = "pointer"
            }
        }
    });
    a5.on(document, "mousemove", function (cR) {
        var cR = window.event || cR;
        if (!a5.browser.ie) {
            cz(cR)
        }
        var cQ = cL.temp;
        var cO = cR.clientX || cR.pageX || 0;
        var cU = cR.clientY || cR.pageY || 0;
        if (cQ.tpx || cQ.tpy) {
            cQ.mox = cO - cQ.tpx;
            cQ.moy = cU - cQ.tpy
        }
        var cS = aC(),
            cT = (cS - cQ.lastLoadTileTime) > 40;
        if (cS - cQ.lastDomMoveTime < 18) {
            return
        }
        if (cT) {
            cQ.lastLoadTileTime = cS
        }
        cQ.lastDomMoveTime = cS;
        if (cL.currentOperation & bk.drag && cL.config.enableDragging) {
            var cP = cL.platform.style;
            if (cP.cursor.replace(/"|\s/g, "") != cL.config.draggingCursor) {
                cP.cursor = cL.config.draggingCursor
            }
            if (!cQ._moved) {
                cL.dispatchEvent(cN(cR, new bd("ondragstart").inherit(cR)));
                cL.dispatchEvent(new bd("onmovestart"));
                cQ.dragStartPos = new br(cO, cU);
                cQ.dragStartTime = cS
            }
            if (cQ.mx == 0 && cQ.my == 0 && cL.temp.keyboardDrag) {
                cQ.mx = cO;
                cQ.my = cU;
                cQ.pl = cL.offsetX;
                cQ.pt = cL.offsetY
            }
            if (cO - cQ.mx != 0 || cU - cQ.my != 0) {
                cL.temp._moved = true;
                cL.dispatchEvent(cN(cR, new bd("ondragging").inherit(cR)));
                cL._setPlatformPosition(cQ.pl + cO - cQ.mx, cQ.pt + cU - cQ.my, null, cT)
            }
        }
    });
    a5.on(document, "mouseup", function (cR) {
        if (a5.browser.ie && cL.maskLayer.releaseCapture) {
            cL.maskLayer.releaseCapture()
        }
        var cP = cL.temp;
        if (cP.preEnableClickPan) {
            cL.enableClickPan(true)
        }
        var cR = window.event || cR,
            cO = cR.clientX || cR.pageX,
            cS = cR.clientY || cR.pageY;
        if (cL.currentOperation & bk.drag && cL.config.enableDragging) {
            cL.currentOperation ^= bk.drag;
            if (cP.curSpots.length == 0) {
                cL.platform.style.cursor = cL.config.defaultCursor
            } else {
                cL.platform.style.cursor = "pointer"
            }
            if (cL.temp._moved) {
                var cQ = cN(cR, new bd("ondragend").inherit(cR));
                cL.dispatchEvent(cQ);
                cL._processInertialDragging(new br(cO, cS))
            }
            cP._moved = false
        }
        cP.operating = false;
        if (cR.button == 2) {
            cP.tpx = null;
            cP.tpy = null;
            cP.mox = 0;
            cP.moy = 0
        }
    });

    function cJ(cR) {
        var cQ = cL.temp,
            cP = !cQ.mox && !cQ.moy;
        if (cQ.rightDblclickTimer) {
            clearTimeout(cQ.rightDblclickTimer);
            cQ.rightDblclickTimer = null;
            if (cP) {
                cL.dispatchEvent(cN(cR, new bd("onrightclick").inherit(cR)));
                cL.currentOperation |= bk.dblclick;
                cL.dispatchEvent(cN(cR, new bd("onrightdblclick").inherit(cR)));
                cL.currentOperation ^= bk.dblclick
            }
        } else {
            if (cP) {
                cL.dispatchEvent(cN(cR, new bd("onrightclick").inherit(cR)))
            }
            var cO = cN(cR, new bd("onrightclickex").inherit(cR));
            cQ.rightDblclickTimer = setTimeout(function () {
                cQ.rightDblclickTimer = null;
                if (cP) {
                    cL.dispatchEvent(cO)
                }
            }, cL.config.clickInterval)
        }
    }
    if (a5.browser.firefox >= 4) {
        a5.on(cL.container, "mouseup", function (cO) {
            if (cO.button == 2) {
                cJ(cO)
            }
        });
        a5.on(cL.container, "contextmenu", function (cO) {
            cl(cO)
        })
    } else {
        a5.on(cL.container, "contextmenu", function (cO) {
            cJ(cO);
            cl(cO)
        })
    }
    var T = new Date();

    function cI(cR) {
        if (cL.config.enableWheelZoom) {
            var cQ = cL.temp;
            if (cQ.dragAni) {
                cQ.dragAni.stop()
            }
            cL.currentOperation |= bk.mousewheel;
            var cR = window.event || cR;
            cL.lastLevel = cL.zoomLevel;
            var cP = new bd("onmousewheel");
            cP.trend = cR.wheelDelta >= 0 || cR.detail < 0;
            var cO = new Date();
            if (cP.trend == true && cL.zoomLevel == cL.getMapType().getMaxZoom() || cP.trend == false && cL.zoomLevel == cL.getMapType().getMinZoom() || cO - T < 220) {
                cL.currentOperation ^= bk.mousewheel;
                cz(cR);
                return
            }
            T = cO;
            cN(cR, cP.inherit(cR));
            cL.dispatchEvent(cP);
            cL.currentOperation ^= bk.mousewheel;
            cz(cR)
        }
    }
    a5.on(cL.container, "mousewheel", cI);
    if (window.addEventListener) {
        cL.container.addEventListener("DOMMouseScroll", cI, false)
    }
    a5.on(cL.platform, "click", function (cS) {
        var cQ = new bd("onclick"),
            cR = new bd("onclickex"),
            cP = cL.temp;
        cN(cS, cQ.inherit(cS));
        cN(cS, cR.inherit(cS));
        if (!cL.currentOperation) {
            var cO = !cP.mox && !cP.moy;
            if (cO) {
                cL.dispatchEvent(cQ)
            }
            if (!cP._clickTimer) {
                cP._clickTimer = setTimeout(function () {
                    cP._clickTimer = null;
                    if (cO) {
                        cL.dispatchEvent(cR)
                    }
                }, cL.config.clickInterval)
            }
        }
        cP.tpx = null;
        cP.tpy = null;
        cP.mox = 0;
        cP.moy = 0
    });
    a5.on(cL.platform, "dblclick", function (cP) {
        if (!cL.currentOperation) {
            cL.currentOperation |= bk.dblclick;
            if (a5.browser.ie) {
                cL.dispatchEvent(cN(cP, new bd("onclick").inherit(cP)))
            }
            var cO = cL.temp;
            if (cO._clickTimer) {
                clearTimeout(cO._clickTimer);
                cO._clickTimer = null
            }
            cL.dispatchEvent(cN(cP, new bd("ondblclick").inherit(cP)));
            cL.currentOperation ^= bk.dblclick
        }
    });
    a5.on(document, "mousedown", function (cQ) {
        var cQ = window.event || cQ;
        var cP = cQ.srcElement || cQ.target;
        var cO = cL.temp;
        if (cO.canKeyboard) {
            cO.canKeyboard = a5.dom.contains(cM.container, cP)
        } else {
            cO.canKeyboard = a5.dom.contains(cM.platform, cP)
        }
    })
});
bw.prototype._processInertialDragging = function (cZ) {
    var c2 = this;
    if (!c2.config.enableInertialDragging) {
        c2.dispatchEvent(new bd("onmoveend"));
        return
    }
    var cQ = c2.temp;
    var cI = aC();
    if (cI - cQ.lastDomMoveTime > 100) {
        c2.dispatchEvent(new bd("onmoveend"));
        cQ._moved = false;
        return
    } else {
        var c0 = cQ.dragStartPos,
            cT = cZ,
            T = cq(c0, cT),
            cX = [cT.x - c0.x > 0 ? 1 : -1, cT.y - c0.y > 0 ? 1 : -1],
            cK = (cI - cQ.dragStartTime) / 1000,
            cO = T / cK / 2,
            cP = 0.5,
            cY = cO / (2 * cP),
            cW = 0.4 * cY * cO / 1000,
            cN = Math.abs(c0.x - cT.x),
            cM = Math.abs(c0.y - cT.y),
            cU = 0,
            cR = 0;
        if (cM == 0) {
            cU = cN
        } else {
            var cL = Math.abs(c0.x - cT.x) / Math.abs(c0.y - cT.y);
            cR = Math.round(Math.sqrt(cW * cW / (1 + cL * cL)));
            cU = Math.round(cL * cR)
        }
        if (cX[0] == -1) {
            cU = -cU
        }
        if (cX[1] == -1) {
            cR = -cR
        }
        if (cQ.dragAni) {
            cQ.dragAni.stop()
        }
        var cJ = cO / 1000,
            cV = c2.offsetX,
            cS = c2.offsetY,
            c1 = false;
        cQ.dragAni = new g({
            duration: cY,
            fps: 30,
            transition: function (c3) {
                var c3 = c3 * cJ / (2 * cP);
                return cJ * c3 - cP * c3 * c3
            },
            render: function (c3) {
                c3 = c3 * (4 * cP) / (cJ * cJ);
                c1 = !c1;
                c2._setPlatformPosition(cV + Math.round(c3 * cU), cS + Math.round(c3 * cR), null, c1)
            },
            finish: function () {
                cQ.dragAni = null;
                c2._setPlatformPosition(cV + Math.round(cU), cS + Math.round(cR));
                c2.dispatchEvent(new bd("onmoveend"))
            },
            onStop: function (c3) {
                cQ.dragAni = null;
                c3 = c3 * (4 * cP) / (cJ * cJ);
                c2._setPlatformPosition(cV + Math.round(c3 * cU), cS + Math.round(c3 * cR));
                setTimeout(function () {
                    c2.dispatchEvent(new bd("onmoveend"))
                }, 1)
            }
        })
    }
};
BMap.register(function (cI) {
    var T = cI;
    a5.on(document, "keydown", function (cJ) {
        if (T.temp.stopArrow == true) {
            T.temp.stopArrow = false
        }
        if (T.config.enableKeyboard && T.temp.canKeyboard) {
            var cJ = window.event || cJ;
            switch (cJ.keyCode || cJ.which) {
            case 43:
            case 189:
            case 109:
                T.temp.operating = true;
                T.dispatchEvent(new bd("onminuspress"));
                break;
            case 43:
            case 61:
            case 187:
            case 107:
                T.temp.operating = true;
                T.dispatchEvent(new bd("onpluspress"));
                break;
            case 33:
                T.temp.operating = false;
                T.temp.stopArrow = true;
                T.panBy(0, Math.round(T.height * 0.8));
                cl(cJ);
                break;
            case 34:
                T.temp.operating = false;
                T.temp.stopArrow = true;
                T.panBy(0, -Math.round(T.height * 0.8));
                cl(cJ);
                break;
            case 35:
                T.temp.operating = false;
                T.temp.stopArrow = true;
                T.panBy(-Math.round(T.width * 0.8), 0);
                cl(cJ);
                break;
            case 36:
                T.temp.operating = false;
                T.temp.stopArrow = true;
                T.panBy(Math.round(T.width * 0.8), 0);
                cl(cJ);
                break;
            case 37:
                T.temp.operating = true;
                T.temp.arrow |= 1;
                T._arrow();
                cl(cJ);
                break;
            case 38:
                T.temp.operating = true;
                T.temp.arrow |= 2;
                T._arrow();
                cl(cJ);
                break;
            case 39:
                T.temp.operating = true;
                T.temp.arrow |= 4;
                T._arrow();
                cl(cJ);
                break;
            case 40:
                T.temp.operating = true;
                T.temp.arrow |= 8;
                T._arrow();
                cl(cJ);
                break
            }
        }
    });
    a5.on(document, "keyup", function (cJ) {
        if (T.config.enableKeyboard) {
            var cJ = window.event || cJ;
            switch (cJ.keyCode || cJ.which) {
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
    bw.prototype._arrow = function () {
        if (this._arrow.occurrent && this._arrow._lastArrow == this.temp.arrow && this.temp.stopArrow == true) {
            return
        }
        var cJ = this;
        var cL = cJ.temp.arrow;
        cJ._arrow._lastArrow = cL;
        cJ._arrow.interval = 30;
        cJ._arrow.duration = 999;
        cJ._arrow.dx = cJ._arrow.dy = 0;
        if (cL & 1) {
            cJ._arrow.dx = 1
        }
        if (cL & 2) {
            cJ._arrow.dy = 1
        }
        if (cL & 4) {
            cJ._arrow.dx = -1
        }
        if (cL & 8) {
            cJ._arrow.dy = -1
        }
        if (cL & 1 && cL & 4) {
            cJ._arrow.dx = 0
        }
        if (cL & 2 && cL & 8) {
            cJ._arrow.dy = 0
        }
        if (!cJ._arrow.occurrent) {
            cJ._arrow.occurrent = true;
            cJ._arrow.time = aC();
            cJ._arrow.beginTime = cJ._arrow.time;
            cJ.dispatchEvent(new bd("onmovestart"));
            var cK = new g({
                fps: cJ._arrow.interval,
                duration: cJ._arrow.duration,
                transition: au.linear,
                render: function (cS) {
                    var cN = cJ._arrow;
                    var cQ = cJ.temp.arrow;
                    if (cJ._arrow._lastArrow != cQ) {
                        cJ._arrow._lastArrow = cQ;
                        if (cQ & 1) {
                            cN.dx = 1
                        }
                        if (cQ & 2) {
                            cN.dy = 1
                        }
                        if (cQ & 4) {
                            cN.dx = -1
                        }
                        if (cQ & 8) {
                            cN.dy = -1
                        }
                        if (cQ & 1 && cQ & 4) {
                            cN.dx = 0
                        }
                        if (cQ & 2 && cQ & 8) {
                            cN.dy = 0
                        }
                    }
                    if (cJ.temp.stopArrow == true) {
                        cN.dx = 0;
                        cN.dy = 0
                    }
                    var cR = aC();
                    var cP = Math.pow((cR - cN.beginTime) / cN.duration, 2);
                    if (!cJ.temp.arrow) {
                        cN.occurrent = false;
                        cK.terminative = true;
                        cJ._arrow.time = aC();
                        setTimeout(function () {
                            cJ.dispatchEvent(new bd("onmoveend"))
                        }, 40)
                    }
                    var cT = (cR - cN.time);
                    var cO = cN.dx * cT * cP >= 0 ? Math.ceil(cN.dx * cT * cP) : Math.floor(cN.dx * cT * cP);
                    var cM = cN.dy * cT * cP >= 0 ? Math.ceil(cN.dy * cT * cP) : Math.floor(cN.dy * cT * cP);
                    if (cO != 0 && cM != 0) {
                        cO = Math.round(cO * 0.7);
                        cM = Math.round(cM * 0.7)
                    }
                    cN.time = cR;
                    cJ._setPlatformPosition(cJ.offsetX + cO, cJ.offsetY + cM)
                },
                finish: function () {
                    cJ._arrow.time = aC();
                    setTimeout(function () {
                        cJ._arrowPan()
                    }, cJ._arrow.interval)
                }
            })
        }
    };
    bw.prototype._arrowPan = function () {
        var cM = this;
        var cK = cM._arrow;
        if (cM.temp.stopArrow) {
            cK.dx = 0;
            cK.dy = 0
        }
        if (!cM.temp.arrow) {
            cK.occurrent = false;
            cM.dispatchEvent(new bd("onmoveend"));
            return
        }
        var cN = aC();
        var cO = (cN - cK.time);
        var cL = Math.ceil(cK.dx * cO);
        var cJ = Math.ceil(cK.dy * cO);
        cK.time = cN;
        cM._setPlatformPosition(cM.offsetX + cL, cM.offsetY + cJ);
        setTimeout(function () {
            cM._arrowPan()
        }, cK.interval)
    }
});