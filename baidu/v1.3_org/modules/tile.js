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
        });
        T._addOtherEvt(cK)
    },
    loadTiles: function () {
        var T = this;
        if (a7.browser.ie) {
            try {
                document.execCommand("BackgroundImageCache", false, true)
            } catch (cK) {}
        }
        if (T.zoomsDiv) {
            a7.dom.hide(T.zoomsDiv)
        }
        if (!this.loaded) {
            T.initMapTypeTiles();
            this.loaded = true
        }
        T.moveGridTiles()
    },
    _asyncLoadTiles: function () {
        var T = this,
            cK = T.map;
        T._addOtherEvt(cK);
        T.loadTiles()
    },
    _addOtherEvt: function (cK) {
        var T = this;
        cK.addEventListener("mousewheel", function (cL) {
            T.mouseWheel(cL)
        });
        cK.addEventListener("dblclick", function (cL) {
            T.dblClick(cL)
        });
        cK.addEventListener("rightdblclick", function (cL) {
            T.dblClick(cL)
        });
        cK.addEventListener("minuspress", function (cL) {
            T.keypress(cL)
        });
        cK.addEventListener("pluspress", function (cL) {
            T.keypress(cL)
        });
        cK.addEventListener("moving", function (cL) {
            T.moveGridTiles()
        });
        cK.addEventListener("resize", function (cL) {
            T.moveGridTiles()
        })
    },
    addTileLayer: function (cM) {
        var cL = this;
        var T = cM.target;
        for (var cK = 0; cK < cL.tileLayers.length; cK++) {
            if (cL.tileLayers[cK] == T) {
                return
            }
        }
        cL.tileLayers.push(T);
        T.initialize(this.map, this._normalLayerContainer);
        if (cL.map.loaded) {
            cL.moveGridTiles()
        }
    },
    removeTileLayer: function (cP) {
        var cQ = this;
        var cN = cP.target;
        var cL = cN.mapType;
        var cK = cQ.mapTiles;
        var cS = cQ.bufferTiles;
        for (var T in cS) {
            var cR = T.split("-")[1];
            if (cR == cN.guid) {
                delete cS[T]
            }
        }
        for (var T in cK) {
            var cR = T.split("-")[1];
            if (cR == cN.guid) {
                delete cK[T]
            }
        }
        for (var cO = 0, cM = cQ.tileLayers.length; cO < cM; cO++) {
            if (cN == cQ.tileLayers[cO]) {
                cQ.tileLayers.splice(cO, 1)
            }
        }
        cN.remove();
        cQ.moveGridTiles()
    },
    mouseWheel: function (cN) {
        var cM = this.map;
        if (!cM.config.enableWheelZoom) {
            return
        }
        var cO = cM.zoomLevel + (cN.trend == true ? 1 : -1);
        var cL = cM._getProperZoom(cO);
        if (cL.exceeded) {
            return
        }
        cM.dispatchEvent(new bf("onzoomstart"));
        cM.lastLevel = cM.zoomLevel;
        cM.zoomLevel = cL.zoom;
        var T = cN.pixel;
        var cK = this._getMercatorCenter(T);
        zoomUnits = cM.getMapType().getZoomUnits(cM.getZoom());
        cM.mercatorCenter = new cc(cK.lng + (cM.width / 2 - T.x) * zoomUnits, cK.lat - (cM.height / 2 - T.y) * zoomUnits);
        cM.centerPoint = cM.projection.mercatorToLngLat(cM.mercatorCenter, cM.currentCity);
        this.zoom(T)
    },
    dblClick: function (cQ) {
        var cM = this.map;
        if (!cM.config.enableDblclickZoom) {
            return
        }
        var cR = cQ.pixel;
        var cN = 1;
        var cK = cR;
        var cO = new aG(0, 0);
        if (cQ.type == "onrightdblclick") {
            cN = -1;
            cK = new bt(cM.width / 2, cM.height / 2)
        }
        var cL = cM.zoomLevel + cN;
        var cP = cM._getProperZoom(cL);
        if (!cP.exceeded) {
            cM.dispatchEvent(new bf("onzoomstart"));
            cM.lastLevel = cM.zoomLevel;
            cM.zoomLevel = cP.zoom;
            if (cN == 1) {
                cM.mercatorCenter = this._getMercatorCenter(cR);
                cM.centerPoint = cM.projection.mercatorToLngLat(cM.mercatorCenter, cM.currentCity);
                var T = cM.getMapType().getZoomUnits(cM.lastLevel) / cM.getMapType().getZoomUnits(cP.zoom) * 0.5;
                cO.width = cR.x - Math.round(cM.width / 2) * T;
                cO.height = cR.y - Math.round(cM.height / 2) * T
            }
            this.zoom(cK, cO)
        } else {
            if (cN == 1) {
                var cS = cM.pixelToPoint(cR);
                cM.panTo(cS)
            }
        }
    },
    keypress: function (cN) {
        var cM = this.map;
        if (!cM.config.enableContinuousZoom) {
            cN.type == "onpluspress" ? cM.zoomIn() : cM.zoomOut();
            return
        }
        if (this._zTimeLine) {
            return
        }
        var cO = cM.zoomLevel + (cN.type == "onpluspress" ? 1 : -1);
        var cL = cM._getProperZoom(cO);
        if (cL.exceeded) {
            return
        }
        cM.dispatchEvent(new bf("onzoomstart"));
        var T = new bt(cM.width / 2, cM.height / 2);
        cM.lastLevel = cM.zoomLevel;
        cM.zoomLevel = cL.zoom;
        if (cM.getInfoWindow()) {
            T = cM.pointToPixel(cM.getInfoWindow().getPosition(), cM.lastLevel);
            var cK = cM.pixelToPoint(T, cM.lastLevel);
            cM._updateCenterPoint(cM.width / 2 - T.x, cM.height / 2 - T.y, cK, true)
        }
        this.zoom(T)
    },
    _getMercatorCenter: function (T) {
        var cO = this.map;
        var cM = cO.mercatorCenter;
        var cK = cO.getMapType().getZoomUnits(cO.lastLevel);
        var cL = cM.lng + cK * (T.x - cO.width / 2);
        var cN = cM.lat - cK * (T.y - cO.height / 2);
        return new cc(cL, cN)
    },
    zoom: function (cM, cL) {
        var cO = cL ? cL.width : 0;
        var cN = cL ? cL.height : 0;
        var cY = this.map;
        var c0 = cY.config;
        var cZ = this;
        var cX = {
            x: cM.x - parseInt(cZ.tilesDiv.style.left) - cY.offsetX,
            y: cM.y - parseInt(cZ.tilesDiv.style.top) - cY.offsetY
        };
        if (cY.overlayDiv) {
            a7.dom.hide(cY.overlayDiv)
        }
        var T;
        cZ._normalLayerContainer.style.visibility = "hidden";
        this._showAvatarDivs();
        cZ._mapTypeLayerContainer.style.visibility = "hidden";
        var cW = [];
        var cP = cY.zoomLevel - cY.lastLevel;
        if (!cZ._diff) {
            cZ._diff = cP
        } else {
            if (cY.zoomLevel - cY.lastLevel > 0) {
                cZ._diff++
            } else {
                cZ._diff--
            }
        }
        if (this._zTimeLine && this._zTimeLine.schedule == 0) {
            this._zTimeLine.stop();
            this._zTimeLine = null;
            cP = cZ._diff
        }
        if ((!cL || cL.width == 0 && cL.height == 0) && c0.enableContinuousZoom) {
            cY.temp.zoomer.action(cM, cP > 0 ? true : false)
        }
        var cQ = Math.pow(2, cP);
        var cK = this.zoomsDiv;
        var cR = cK.style;
        cR.visibility = "";
        var cV = cK.children.length;
        for (var cU = cV - 1; cU > -1; cU--) {
            var cS = {};
            var cT = cK.children[cU].style;
            cS.top = parseInt(cT.top) || 0;
            cS.left = parseInt(cT.left) || 0;
            cS.width = parseInt(cT.width);
            cS.height = parseInt(cT.height);
            cS.dw = cS.width * cQ - cS.width;
            cS.dh = cS.height * cQ - cS.height;
            cS.dx = (cS.left - cX.x) * cQ - (cS.left - cX.x);
            cS.dy = (cS.top - cX.y) * cQ - (cS.top - cX.y);
            cW[cU] = cS
        }
        cK._ol = parseInt(cK.style.left);
        cK._ot = parseInt(cK.style.top);
        if (this._zTimeLine) {
            this._zTimeLine.stop();
            this._zTimeLine = null
        }
        this._zTimeLine = new g({
            fps: 20,
            duration: c0.enableContinuousZoom ? c0.zoomerDuration : 1,
            transition: av.easeInQuad,
            render: function (c3) {
                if (c3 < 0.1) {
                    return
                }
                for (var c2 = cW.length - 1; c2 > -1; c2--) {
                    var c4 = cW[c2];
                    if (cK.children[c2]) {
                        var c1 = cK.children[c2].style;
                        c1.top = Math.round(c4.top + c4.dy * c3) + "px";
                        c1.left = Math.round(c4.left + c4.dx * c3) + "px";
                        c1.width = Math.ceil(c4.width + c4.dw * c3) + "px";
                        c1.height = Math.ceil(c4.height + c4.dh * c3) + "px"
                    }
                }
                if (cO || cN) {
                    cR.left = cK._ol - (cO * c3) + "px";
                    cR.top = cK._ot - (cN * c3) + "px"
                }
            },
            finish: function () {
                cZ.moveGridTiles();
                if (cY.overlayDiv) {
                    if (a7.browser.ie && a7.browser.ie < 8 || document.compatMode == "BackCompat") {
                        a7.dom.show(cY.overlayDiv)
                    } else {
                        setTimeout(function () {
                            a7.dom.show(cY.overlayDiv)
                        }, 100)
                    }
                }
                cZ._normalLayerContainer.style.visibility = "";
                cZ._mapTypeLayerContainer.style.visibility = "";
                delete cZ._diff;
                cY.dispatchEvent(new bf("onzoomend"));
                cK = null;
                cZ._zTimeLine = null
            }
        })
    },
    setMapType: function (cP) {
        var cM = this;
        var cO = cM.map;
        this._showAvatarDivs(true);
        cO.addEventListener("tilesloaded", function () {
            setTimeout(function () {
                cM._removeAvatarDivs()
            }, 200);
            cO.removeEventListener("tilesloaded", arguments.callee)
        });
        for (var cL in this.mapTiles) {
            this.hideTile(this.mapTiles[cL])
        }
        for (var cL in this.bufferTiles) {
            this.hideTile(this.bufferTiles[cL])
        }
        var cN = this.mapTypeLayers;
        for (var cK = 0, T = cN.length; cK < T; cK++) {
            cN[cK].remove()
        }
        delete this.tilesDiv;
        this.mapTypeLayers = [];
        this.bufferTiles = this.mapTiles = {};
        this.initMapTypeTiles();
        this.moveGridTiles()
    },
    _showAvatarDivs: function (cL) {
        var cK = this.map;
        cL = cL || false;
        if (!this.zoomsDiv) {
            if (!cL) {
                this.zoomsDiv = this.tilesDiv.cloneNode(true)
            } else {
                this.zoomsDiv = this._mapTypeLayerContainer.cloneNode(true)
            }
        } else {
            if (this.zoomsDiv.parentNode && !this._zTimeLine) {
                this.zoomsDiv.parentNode.removeChild(this.zoomsDiv);
                this.zoomsDiv = null;
                if (!cL) {
                    this.zoomsDiv = this.tilesDiv.cloneNode(true)
                } else {
                    this.zoomsDiv = this._mapTypeLayerContainer.cloneNode(true)
                }
            }
        }
        var T = this.zoomsDiv,
            cM = T.style;
        cM.display = "";
        cM.zIndex = cM.zIndex - 100;
        cK.platform.insertBefore(T, cK.platform.firstChild)
    },
    _removeAvatarDivs: function () {
        var T = this;
        if (T.zoomsDiv) {
            I(T.zoomsDiv);
            if (T.zoomsDiv.parentNode) {
                T.zoomsDiv.parentNode.removeChild(T.zoomsDiv);
                T.zoomsDiv.innerHTML = "";
                T.zoomsDiv = null
            }
        }
    }
});