a0.extend(aQ.prototype, {
    _asyncSearch: function () {
        for (var cB = 0, T = this._queryList.length; cB < T; cB++) {
            var cC = this._queryList[cB];
            this[cC.method].apply(this, cC.arguments)
        }
        delete this._queryList
    },
    getPoint: function (T, cD, cC) {
        var cB = this;
        cC = cC || "\u5317\u4eac\u5e02";
        a3.request(function (cI) {
            if (cI && cI.result && cI.result.type == bi) {
                var cG = cI.result,
                    cJ = cI.content,
                    cF = null,
                    cH = null;
                if (cG) {
                    if (cG.error == 0) {
                        var cE = cJ.coord.x,
                            cK = cJ.coord.y;
                        cF = new BMap.Point(cE, cK);
                        cF = a2.convertMC2LL(cF);
                        cB.point = cF;
                        cB.city = cJ.cn;
                        cB.citycode = cJ.sc;
                        cB.address = cJ.wd;
                        cB.precision = cJ.precision;
                        cH = {
                            city: cJ.cn,
                            address: cJ.wd,
                            citycode: cJ.sc
                        }
                    }
                }
                cD && cD(cF, cH)
            }
        }, {
            qt: bs,
            wd: T,
            cn: cC
        })
    },
    getLocation: function (cB, cH, cE) {
        if (!(cB instanceof b3) && cH) {
            cH(null);
            return
        }
        var cD = this,
            cB = a2.convertLL2MC(cB),
            T = cB.lng,
            cG = cB.lat,
            cE = cE || {},
            cC = cE.poiRadius || 100,
            cF = cE.numPois || 10;
        a3.request(function (cY) {
            var cL = null;
            if (cY && cY.result && cY.result.type == bu) {
                var cO = cY.result,
                    cV = cY.content,
                    cN, cP = {},
                    cQ = [],
                    cS;
                if (cO.error == 0) {
                    var cZ = cV.address_detail,
                        cW = cZ.city;
                    if (cZ) {
                        cP.streetNumber = cZ.street_number;
                        cP.street = cZ.street;
                        cP.district = cZ.district;
                        cP.city = cW;
                        cP.province = cZ.province
                    }
                    cS = cV.point;
                    var cU = new BMap.Point(cS.x, cS.y);
                    cU = a2.convertMC2LL(cU);
                    var cK = cV.surround_poi;
                    if (cK && cK.length) {
                        for (var cX = 0, cT = cK.length; cX < cT; cX++) {
                            var cJ = {},
                                cM = cK[cX];
                            cJ.title = cM.name;
                            cJ.uid = cM.uid;
                            var cR = new BMap.Point(cM.point.x, cM.point.y);
                            cR = a2.convertMC2LL(cR);
                            cJ.point = cR;
                            cJ.city = cW;
                            cJ._poiType = cM.poiType;
                            cJ.type = BMAP_POI_TYPE_NORMAL;
                            cJ.address = cM.addr;
                            cJ.postcode = cM.zip || null;
                            cJ.phoneNumber = cM.tel || null;
                            var cI = cJ._poiType;
                            if (cI.length !== 0) {
                                cJ.tags = cI.split(",")
                            }
                            cQ.push(cJ)
                        }
                    }
                    cL = {
                        point: cU,
                        address: cV.address,
                        addressComponents: cP,
                        surroundingPois: cQ,
                        business: cV.business
                    }
                }
            }
            cH && cH(cL)
        }, {
            qt: d,
            x: T,
            y: cG,
            dis_poi: cC,
            poi_num: cF
        })
    }
});
a0.extend(af.prototype, {
    _asyncSearch: function () {
        for (var cB = 0, T = this._queryList.length; cB < T; cB++) {
            var cC = this._queryList[cB];
            this[cC.method].apply(this, cC.arguments)
        }
        delete this._queryList
    },
    getCurrentPosition: function (cC, cB) {
        this._callback = cC ||
        function () {};
        if (!navigator.geolocation) {
            this._onErrorCallback(BMAP_STATUS_SERVICE_UNAVAILABLE);
            return
        }
        var T = this;
        navigator.geolocation.getCurrentPosition(function (cD) {
            T._onSuccessCallback(cD)
        }, function (cD) {
            T._onErrorCallback(cD.code + 5)
        }, cB)
    },
    _onSuccessCallback: function (T) {
        var cD = T.coords,
            cC = this,
            cB = {
                x: cD.longitude,
                y: cD.latitude,
                from: "0",
                to: "4"
            };
        a3.request(function (cG) {
            var cF = (cG && cG.error == 0) ? new BMap.Point(cG.x, cG.y) : new BMap.Point(cD.longitude, cD.latitude);
            cC._status = BMAP_STATUS_SUCCESS;
            var cE = {
                point: cF,
                accuracy: cD.accuracy
            };
            cC._callback(cE)
        }, cB, null, "ag/coord/convert")
    },
    _onErrorCallback: function (T) {
        this._status = T;
        this._callback(null)
    }
});
a0.extend(bZ.prototype, {
    _asyncSearch: function () {
        for (var cB = 0, T = this._queryList.length; cB < T; cB++) {
            var cC = this._queryList[cB];
            this[cC.method].apply(this, cC.arguments)
        }
        delete this._queryList
    },
    get: function (cB) {
        var T = this;
        a3.request(function (cF) {
            if (cF && cF.result && cF.result.type == o) {
                var cD = cF.result,
                    cH = cF.content;
                if (cD) {
                    if (cD.error == 0) {
                        var cI = T._opts.renderOptions.map;
                        var cJ = cH.level;
                        var cE = cH.cname;
                        var cG = cH.code;
                        var cC = O.parseGeo(cH.geo, true).point;
                        cJ = O.getBestLevel(cJ, cI);
                        if (cI) {
                            cI.centerAndZoom(cC, cJ)
                        }
                    }
                }
                cB && cB({
                    center: cC,
                    level: cJ,
                    name: cE,
                    code: cG
                })
            }
        }, {
            qt: P
        })
    }
});