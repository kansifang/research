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