a5.extend(bO.prototype, {
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
        });
        T._addOtherEvt(cI)
    },
    loadTiles: function () {
        var T = this;
        if (a5.browser.ie) {
            try {
                document.execCommand("BackgroundImageCache", false, true)
            } catch (cI) {}
        }
        if (T.zoomsDiv) {
            a5.dom.hide(T.zoomsDiv)
        }
        if (!this.loaded) {
            T.initMapTypeTiles();
            this.loaded = true
        }
        T.moveGridTiles()
    },
    _asyncLoadTiles: function () {
        var T = this,
            cI = T.map;
        T._addOtherEvt(cI);
        T.loadTiles()
    },
    _addOtherEvt: function (cI) {
        var T = this;
        cI.addEventListener("mousewheel", function (cJ) {
            T.mouseWheel(cJ)
        });
        cI.addEventListener("dblclick", function (cJ) {
            T.dblClick(cJ)
        });
        cI.addEventListener("rightdblclick", function (cJ) {
            T.dblClick(cJ)
        });
        cI.addEventListener("minuspress", function (cJ) {
            T.keypress(cJ)
        });
        cI.addEventListener("pluspress", function (cJ) {
            T.keypress(cJ)
        });
        cI.addEventListener("moving", function (cJ) {
            T.moveGridTiles()
        });
        cI.addEventListener("resize", function (cJ) {
            T.moveGridTiles()
        })
    },
    addTileLayer: function (cK) {
        var cJ = this;
        var T = cK.target;
        for (var cI = 0; cI < cJ.tileLayers.length; cI++) {
            if (cJ.tileLayers[cI] == T) {
                return
            }
        }
        cJ.tileLayers.push(T);
        T.initialize(this.map, this._normalLayerContainer);
        if (cJ.map.loaded) {
            cJ.moveGridTiles()
        }
    },
    removeTileLayer: function (cN) {
        var cO = this;
        var cL = cN.target;
        var cJ = cL.mapType;
        var cI = cO.mapTiles;
        var cQ = cO.bufferTiles;
        for (var T in cQ) {
            var cP = T.split("-")[1];
            if (cP == cL.guid) {
                delete cQ[T]
            }
        }
        for (var T in cI) {
            var cP = T.split("-")[1];
            if (cP == cL.guid) {
                delete cI[T]
            }
        }
        for (var cM = 0, cK = cO.tileLayers.length; cM < cK; cM++) {
            if (cL == cO.tileLayers[cM]) {
                cO.tileLayers.splice(cM, 1)
            }
        }
        cL.remove();
        cO.moveGridTiles()
    },
    mouseWheel: function (cL) {
        var cK = this.map;
        if (!cK.config.enableWheelZoom) {
            return
        }
        var cM = cK.zoomLevel + (cL.trend == true ? 1 : -1);
        var cJ = cK._getProperZoom(cM);
        if (cJ.exceeded) {
            return
        }
        cK.dispatchEvent(new bd("onzoomstart"));
        cK.lastLevel = cK.zoomLevel;
        cK.zoomLevel = cJ.zoom;
        var T = cL.pixel;
        var cI = this._getMercatorCenter(T);
        zoomUnits = cK.getMapType().getZoomUnits(cK.getZoom());
        cK.mercatorCenter = new ca(cI.lng + (cK.width / 2 - T.x) * zoomUnits, cI.lat - (cK.height / 2 - T.y) * zoomUnits);
        cK.centerPoint = cK.projection.mercatorToLngLat(cK.mercatorCenter, cK.currentCity);
        this.zoom(T)
    },
    dblClick: function (cO) {
        var cK = this.map;
        if (!cK.config.enableDblclickZoom) {
            return
        }
        var cP = cO.pixel;
        var cL = 1;
        var cI = cP;
        var cM = new aF(0, 0);
        if (cO.type == "onrightdblclick") {
            cL = -1;
            cI = new br(cK.width / 2, cK.height / 2)
        }
        var cJ = cK.zoomLevel + cL;
        var cN = cK._getProperZoom(cJ);
        if (!cN.exceeded) {
            cK.dispatchEvent(new bd("onzoomstart"));
            cK.lastLevel = cK.zoomLevel;
            cK.zoomLevel = cN.zoom;
            if (cL == 1) {
                cK.mercatorCenter = this._getMercatorCenter(cP);
                cK.centerPoint = cK.projection.mercatorToLngLat(cK.mercatorCenter, cK.currentCity);
                var T = cK.getMapType().getZoomUnits(cK.lastLevel) / cK.getMapType().getZoomUnits(cN.zoom) * 0.5;
                cM.width = cP.x - Math.round(cK.width / 2) * T;
                cM.height = cP.y - Math.round(cK.height / 2) * T
            }
            this.zoom(cI, cM)
        } else {
            if (cL == 1) {
                var cQ = cK.pixelToPoint(cP);
                cK.panTo(cQ)
            }
        }
    },
    keypress: function (cL) {
        var cK = this.map;
        if (!cK.config.enableContinuousZoom) {
            cL.type == "onpluspress" ? cK.zoomIn() : cK.zoomOut();
            return
        }
        if (this._zTimeLine) {
            return
        }
        var cM = cK.zoomLevel + (cL.type == "onpluspress" ? 1 : -1);
        var cJ = cK._getProperZoom(cM);
        if (cJ.exceeded) {
            return
        }
        cK.dispatchEvent(new bd("onzoomstart"));
        var T = new br(cK.width / 2, cK.height / 2);
        cK.lastLevel = cK.zoomLevel;
        cK.zoomLevel = cJ.zoom;
        if (cK.getInfoWindow()) {
            T = cK.pointToPixel(cK.getInfoWindow().getPosition(), cK.lastLevel);
            var cI = cK.pixelToPoint(T, cK.lastLevel);
            cK._updateCenterPoint(cK.width / 2 - T.x, cK.height / 2 - T.y, cI, true)
        }
        this.zoom(T)
    },
    _getMercatorCenter: function (T) {
        var cM = this.map;
        var cK = cM.mercatorCenter;
        var cI = cM.getMapType().getZoomUnits(cM.lastLevel);
        var cJ = cK.lng + cI * (T.x - cM.width / 2);
        var cL = cK.lat - cI * (T.y - cM.height / 2);
        return new ca(cJ, cL)
    },
    zoom: function (cK, cJ) {
        var cM = cJ ? cJ.width : 0;
        var cL = cJ ? cJ.height : 0;
        var cW = this.map;
        var cY = cW.config;
        var cX = this;
        var cV = {
            x: cK.x - parseInt(cX.tilesDiv.style.left) - cW.offsetX,
            y: cK.y - parseInt(cX.tilesDiv.style.top) - cW.offsetY
        };
        if (cW.overlayDiv) {
            a5.dom.hide(cW.overlayDiv)
        }
        var T;
        cX._normalLayerContainer.style.visibility = "hidden";
        this._showAvatarDivs();
        cX._mapTypeLayerContainer.style.visibility = "hidden";
        var cU = [];
        var cN = cW.zoomLevel - cW.lastLevel;
        if (!cX._diff) {
            cX._diff = cN
        } else {
            if (cW.zoomLevel - cW.lastLevel > 0) {
                cX._diff++
            } else {
                cX._diff--
            }
        }
        if (this._zTimeLine && this._zTimeLine.schedule == 0) {
            this._zTimeLine.stop();
            this._zTimeLine = null;
            cN = cX._diff
        }
        if ((!cJ || cJ.width == 0 && cJ.height == 0) && cY.enableContinuousZoom) {
            cW.temp.zoomer.action(cK, cN > 0 ? true : false)
        }
        var cO = Math.pow(2, cN);
        var cI = this.zoomsDiv;
        var cP = cI.style;
        cP.visibility = "";
        var cT = cI.children.length;
        for (var cS = cT - 1; cS > -1; cS--) {
            var cQ = {};
            var cR = cI.children[cS].style;
            cQ.top = parseInt(cR.top) || 0;
            cQ.left = parseInt(cR.left) || 0;
            cQ.width = parseInt(cR.width);
            cQ.height = parseInt(cR.height);
            cQ.dw = cQ.width * cO - cQ.width;
            cQ.dh = cQ.height * cO - cQ.height;
            cQ.dx = (cQ.left - cV.x) * cO - (cQ.left - cV.x);
            cQ.dy = (cQ.top - cV.y) * cO - (cQ.top - cV.y);
            cU[cS] = cQ
        }
        cI._ol = parseInt(cI.style.left);
        cI._ot = parseInt(cI.style.top);
        if (this._zTimeLine) {
            this._zTimeLine.stop();
            this._zTimeLine = null
        }
        this._zTimeLine = new g({
            fps: 20,
            duration: cY.enableContinuousZoom ? cY.zoomerDuration : 1,
            transition: au.easeInQuad,
            render: function (c1) {
                if (c1 < 0.1) {
                    return
                }
                for (var c0 = cU.length - 1; c0 > -1; c0--) {
                    var c2 = cU[c0];
                    if (cI.children[c0]) {
                        var cZ = cI.children[c0].style;
                        cZ.top = Math.round(c2.top + c2.dy * c1) + "px";
                        cZ.left = Math.round(c2.left + c2.dx * c1) + "px";
                        cZ.width = Math.ceil(c2.width + c2.dw * c1) + "px";
                        cZ.height = Math.ceil(c2.height + c2.dh * c1) + "px"
                    }
                }
                if (cM || cL) {
                    cP.left = cI._ol - (cM * c1) + "px";
                    cP.top = cI._ot - (cL * c1) + "px"
                }
            },
            finish: function () {
                cX.moveGridTiles();
                if (cW.overlayDiv) {
                    if (a5.browser.ie && a5.browser.ie < 8 || document.compatMode == "BackCompat") {
                        a5.dom.show(cW.overlayDiv)
                    } else {
                        setTimeout(function () {
                            a5.dom.show(cW.overlayDiv)
                        }, 100)
                    }
                }
                cX._normalLayerContainer.style.visibility = "";
                cX._mapTypeLayerContainer.style.visibility = "";
                delete cX._diff;
                cW.dispatchEvent(new bd("onzoomend"));
                cI = null;
                cX._zTimeLine = null
            }
        })
    },
    setMapType: function (cN) {
        var cK = this;
        var cM = cK.map;
        this._showAvatarDivs(true);
        cM.addEventListener("tilesloaded", function () {
            setTimeout(function () {
                cK._removeAvatarDivs()
            }, 200);
            cM.removeEventListener("tilesloaded", arguments.callee)
        });
        for (var cJ in this.mapTiles) {
            this.hideTile(this.mapTiles[cJ])
        }
        for (var cJ in this.bufferTiles) {
            this.hideTile(this.bufferTiles[cJ])
        }
        var cL = this.mapTypeLayers;
        for (var cI = 0, T = cL.length; cI < T; cI++) {
            cL[cI].remove()
        }
        delete this.tilesDiv;
        this.mapTypeLayers = [];
        this.bufferTiles = this.mapTiles = {};
        this.initMapTypeTiles();
        this.moveGridTiles()
    },
    _showAvatarDivs: function (cJ) {
        var cI = this.map;
        cJ = cJ || false;
        if (!this.zoomsDiv) {
            if (!cJ) {
                this.zoomsDiv = this.tilesDiv.cloneNode(true)
            } else {
                this.zoomsDiv = this._mapTypeLayerContainer.cloneNode(true)
            }
        } else {
            if (this.zoomsDiv.parentNode && !this._zTimeLine) {
                this.zoomsDiv.parentNode.removeChild(this.zoomsDiv);
                this.zoomsDiv = null;
                if (!cJ) {
                    this.zoomsDiv = this.tilesDiv.cloneNode(true)
                } else {
                    this.zoomsDiv = this._mapTypeLayerContainer.cloneNode(true)
                }
            }
        }
        var T = this.zoomsDiv,
            cK = T.style;
        cK.display = "";
        cK.zIndex = cK.zIndex - 100;
        cI.platform.insertBefore(T, cI.platform.firstChild)
    },
    _removeAvatarDivs: function () {
        var T = this;
        if (T.zoomsDiv) {
            H(T.zoomsDiv);
            if (T.zoomsDiv.parentNode) {
                T.zoomsDiv.parentNode.removeChild(T.zoomsDiv);
                T.zoomsDiv.innerHTML = "";
                T.zoomsDiv = null
            }
        }
    }
});