var b = 1;
var aB = 2;
var bC = 3;
var b7 = new aF(23, 25);
var bW = new aF(9, 25);
var q = new aF(9, 0);
al.addSearchPoi = function (cM, T, cI, cN) {
    var cL = X(T);
    if (!cL) {
        return
    }
    if (cI < 0 || cI > 9) {
        return
    }
    var cK = new K(v + "img/markers.png", b7, {
        anchor: bW,
        imageOffset: new aF(0, -25 * cI),
        infoWindowAnchor: q
    });
    var cJ = new ab(cL, {
        icon: cK
    });
    cM.addOverlay(cJ);
    if (cN) {
        cJ.setTitle(cN)
    }
    return cJ
};
al.addCenterPoi = function (cL, T, cM) {
    var cK = X(T);
    if (!cK) {
        return
    }
    var cJ = new K(v + "img/markers.png", b7, {
        anchor: bW,
        imageOffset: new aF(0, -250),
        infoWindowAnchor: q
    });
    var cI = new ab(cK, {
        icon: cJ
    });
    cL.addOverlay(cI);
    if (cM) {
        cI.setTitle(cM)
    }
    return cI
};
al.addSearchInBoundsPoi = function (cL, T, cM) {
    var cK = X(T);
    if (!cK) {
        return
    }
    var cJ = new K(v + "img/markers.png", b7, {
        anchor: bW,
        imageOffset: new aF(0, -300),
        infoWindowAnchor: q
    });
    var cI = new ab(cK, {
        icon: cJ
    });
    cL.addOverlay(cI);
    if (cM) {
        cI.setTitle(cM)
    }
    return cI
};

function X(T) {
    var cJ = [];
    var cI = null;
    if (T instanceof ca) {
        cI = T
    } else {
        if (typeof T == "string") {
            cJ = a5.trim(T).split(",");
            if (cJ.length < 2) {
                return
            }
            cJ[0] = parseFloat(a5.trim(cJ[0]));
            cJ[1] = parseFloat(a5.trim(cJ[1]))
        } else {
            cJ = T.slice(0);
            if (cJ.length < 2) {
                return
            }
        }
        cI = new ca(cJ[0], cJ[1])
    }
    return cI
}
al.createSearchInfoWnd = function (cJ, T) {
    var cR = cJ.title;
    var cQ = cJ.addr;
    var cM = cJ.tel;
    var cO = cJ.uid || "";
    var cI = cJ.url;
    var cP = cJ.poiType || BMAP_POI_TYPE_NORMAL;
    T = T || {};
    if (!cR) {
        return null
    }
    var cN = cR;
    if (cP == BMAP_POI_TYPE_BUSSTOP) {
        cN = cN + "-\u516c\u4ea4\u8f66\u7ad9"
    } else {
        if (cP == BMAP_POI_TYPE_SUBSTOP) {
            cN = cN + "-\u5730\u94c1\u7ad9"
        }
    }
    if (cN.replace(/[\u0100-\uffff]/g, "##").length > 27) {
        cN = cN.substring(0, 13) + "&#8230"
    }
    var cL = "<p style='width:210px;font:bold 14px/16px " + b9.fontFamily + ";margin:0;color:#cc5522;white-space:nowrap;overflow:hidden' title='" + cR + "'>" + cN + "</p>";
    var cT = [];
    cT.push("<div style='font:12px " + b9.fontFamily + ";margin-top:10px'>");
    if (cQ) {
        var cS = "\u5730\u5740\uff1a";
        if (cP == BMAP_POI_TYPE_BUSSTOP || cP == BMAP_POI_TYPE_SUBSTOP) {
            cS = "\u8f66\u6b21\uff1a"
        }
        cT.push('<table cellspacing="0" style="overflow:hidden;table-layout:fixed;width:100%;font:12px ' + b9.fontFamily + '" >');
        cT.push('<tr><td style="vertical-align:top;width:38px;white-space:nowrap;word-break:keep-all">' + cS + '&nbsp;</td><td style="line-height:16px">');
        cT.push(cQ + "&nbsp;</td></tr>");
        if (cM) {
            cT.push('<tr><td style="vertical-align:top;">\u7535\u8bdd\uff1a</td><td>' + cM + "</td></tr>")
        }
        cT.push("</table>")
    } else {
        if (cM) {
            cT.push('<table cellspacing="0" style="table-layout:fixed;width:100%;font:12px ' + b9.fontFamily + '">');
            cT.push('<tr><td style="vertical-align:top;width:36px;white-space:nowrap;word-break:keep-all">\u7535\u8bdd\uff1a</td><td>' + cM + "</td></tr></table>")
        }
    }
    cT.push("</div>");
    var cK = new bM(cT.join(""), {
        title: cL,
        height: 0,
        width: 230,
        margin: [10, 10, 20, 10]
    });
    return cK
};
al.addDestPoi = function (cM, T, cN, cJ) {
    var cL = X(T);
    if (!cL) {
        return
    }
    var cK = new K(v + "img/dest_markers.png", new aF(42, 34), {
        anchor: new aF(14, 32),
        imageOffset: new aF(0, -34 * cJ),
        infoWindowAnchor: new aF(14, 0)
    });
    var cI = new ab(cL, {
        icon: cK,
        baseZIndex: 3500000,
        draggingCursor: "pointer"
    });
    cM.addOverlay(cI);
    if (cN) {
        cI.setTitle(cN)
    }
    return cI
};
al.addLine = function (cI, T) {
    return al.addRoute(cI, T, be)
};
al.ROUTE_STYLE_CONFIG = [{
    stroke: 6,
    color: "#0030ff",
    opacity: 0.45,
    style: "solid"
}, {
    stroke: 6,
    color: "#0030ff",
    opacity: 0.45,
    style: "solid"
}, {
    stroke: 4,
    color: "#30a208",
    opacity: 0.55,
    style: "dashed"
}, {
    stroke: 5,
    color: "#0030ff",
    opacity: 0.45,
    style: "solid"
}, {
    stroke: 4,
    color: "#ff0103",
    opacity: 0.65,
    style: "dashed"
}, {
    stroke: 5,
    color: "#ff0103",
    opacity: 0.65,
    style: "solid"
}];
al.addRoute = function (cO, cL, cK) {
    var cJ = al.ROUTE_STYLE_CONFIG;
    if (typeof cK == "undefined") {
        cK = 0
    }
    if (!cJ[cK]) {
        return
    }
    var T = cL;
    var cI = cJ[cK];
    var cN = new f(T, {
        strokeWeight: cI.stroke,
        strokeColor: cI.color,
        strokeOpacity: cI.opacity,
        strokeStyle: cI.style,
        clickable: false
    });
    cO.addOverlay(cN);
    cN._routeType = cK;
    if (cK == be) {
        var cM = new f(T, {
            strokeWeight: cI.stroke - 2,
            strokeColor: "#fff",
            strokeOpacity: 0.3,
            clickable: false
        });
        cN._p = cM;
        cO.addOverlay(cM)
    }
    return cN
};
al.createTransInfoWnd = function (cI) {
    var cM = cI.content;
    var T = cI.curIndex;
    var cN = cI.total;
    var cK = cI.nextTransCbk;
    var cL = cI.obj;
    var cO = cI.hideStep;
    var cP = ["<div style='font:12px " + b9.fontFamily + "'>"];
    if (cM) {
        cP.push("<div style='margin:0 1em 24px 0'>" + cM + "</div>")
    }
    if (!cO) {
        cP.push(al.genStepNavHtml(cN, T))
    }
    cP.push("</div>");
    var cJ = new bM(cP.join(""), {
        title: "",
        height: 0,
        width: 220,
        margin: [10, 10, 20, 10]
    });
    if (cO) {
        return cJ
    }
    cJ.addEventListener("open", function () {
        if (a5.G("trans_prev")) {
            a5.on(a5.G("trans_prev"), "click", function () {
                if (cK && typeof cK == "function") {
                    cK(T - 1, cL)
                }
            })
        }
        if (a5.G("trans_next")) {
            a5.on(a5.G("trans_next"), "click", function () {
                if (cK && typeof cK == "function") {
                    cK(T + 1, cL)
                }
            })
        }
    });
    return cJ
};
al.genStepNavHtml = function (cJ, T) {
    var cI = [];
    cI.push('<table width="99%" cols="2" style="background:#eaf2ff;font:12px ' + b9.fontFamily + '"><tbody><tr>');
    cI.push('<td nowrap="nowrap" width="50%" align="left">');
    if (T == 0) {
        cI.push('<span unselectable="on" style="color:#9c9d99;-moz-user-select:none" >\u4e0a\u4e00\u6b65</span>')
    } else {
        cI.push('<a id="trans_prev" style="color:#7777cc;-moz-user-select:none" href="javascript:void(0)">\u4e0a\u4e00\u6b65</a>')
    }
    cI.push("</td>");
    cI.push('<td nowrap="nowrap" width="50%" align="right">');
    if (T == cJ + 1) {
        cI.push('<span unselectable="on" style="color:#9c9d99;-moz-user-select:none" >\u4e0b\u4e00\u6b65</span>')
    } else {
        cI.push('<a style="color:#7777cc" id="trans_next" href="javascript:void(0)">\u4e0b\u4e00\u6b65</a>')
    }
    cI.push("</td></tr></tbody></table>");
    return cI.join("")
};
al.addTransPoi = function (cM, T, cJ, cN) {
    var cL = X(T);
    if (!cL) {
        return
    }
    cJ = cJ || BMAP_LINE_TYPE_BUS;
    var cO = -55;
    if (cJ == BMAP_LINE_TYPE_SUBWAY) {
        cO = -76
    }
    var cK = new K(v + "img/trans_icons.png", new aF(21, 21), {
        imageOffset: new aF(0, cO),
        infoWindowAnchor: new aF(10, 0)
    });
    var cI = new ab(cL, {
        icon: cK
    });
    cM.addOverlay(cI);
    if (cN) {
        cI.setTitle(cN)
    }
    return cI
};
al.getInfoWindowDom = function (T) {
    if (T && T.infoWindowDoms && T.infoWindowDoms.contentDiv) {
        return T.infoWindowDoms.contentDiv.childNodes[0]
    }
    return null
};
al.addStationPoi = function (cJ, T, cK) {
    var cI = new ab(T, {
        icon: new K(bj._stopUrl, new aF(11, 11))
    });
    if (cK) {
        cI.setTitle(cK)
    }
    cJ.addOverlay(cI);
    return cI
};
al.addDragMkr = function (cJ, T) {
    var cI = new ab(T, {
        icon: new K(b9.imgPath + "drag.png", new aF(11, 11)),
        draggingCursor: "pointer"
    });
    cJ.addOverlay(cI);
    cI.setZIndex(10);
    return cI
};
al.createTipLbl = function (cI) {
    var T = new ae(cI, {
        offset: new aF(30, -10)
    });
    T.setStyle({
        border: "solid 1px gray",
        padding: "2px",
        whiteSpace: "nowrap",
        background: "#fff"
    });
    return T
};
al.getDistanceByPixel = function (cI, T) {
    if (!cI || !T) {
        return
    }
    return Math.round(Math.sqrt(Math.pow(cI.x - T.x, 2) + Math.pow(cI.y - T.y, 2)))
};
u.CBK_SEARCH_COMPLETE = 1;
u.CBK_MARKERS_SET = 2;
u.CBK_INFO_HTML_SET = 3;
u.CBK_POLYLINES_SET = 4;
u.CBK_RESULTS_HTML_SET = 5;
u.CBK_BUSLIST_COMPLETE = 6;
u.CBK_BUSLINE_COMPLETE = 7;
u.CBK_BUSLISTHTML_SET = 8;
u.CBK_BUSLINEHTML_SET = 9;
u._getPoiUrl = function (T, cI) {
    if (T) {
        return cF + "?s=" + encodeURIComponent("inf&uid=" + T + "&c=" + cI) + "&i=0&sr=1"
    }
    return ""
};
u._getLocType = function (T) {
    if (!T) {
        return aX
    }
    if (typeof T == "string") {
        return a3
    }
    if (T instanceof ca) {
        return cn
    }
    if (T instanceof bw) {
        return Z
    }
    if (typeof T == "number") {
        return z
    }
    return aX
};
a5.extend(u.prototype, {
    _getIdByLoc: function (cL, T) {
        var cI = u._getLocType(cL.src);
        if (cI == aX) {
            return
        }
        var cJ = this;
        if (cI == z) {
            T && T(cL.src);
            return
        }
        if (cI == a3) {
            if (cL.curLocType == cI && cL.curSrc == cL.src && cL.curId) {
                T && T(cL.curId);
                return
            }
            cL.curLocType = cI;
            cL.curSrc = cL.src;
            a8.request(function (cN) {
                if (cN && cN.result && cN.result.type == p) {
                    cJ._loc.curId = cN.content.code;
                    T && T(cJ._loc.curId)
                }
            }, {
                qt: cs,
                wd: cL.src
            })
        } else {
            var cK;
            var cM = 18;
            if (cI == Z) {
                cK = cL.src.getCenter();
                cM = cL.src.getZoom()
            } else {
                cK = cL.src
            }
            if (cI == cL.curLocType && cL.curSrc.equals(cK) && cL.curId) {
                T && T(cL.curId);
                return
            }
            if (cI == Z) {
                cK = a7.convertLL2MC(cK)
            }
            if (cI == cn) {
                cK = a7.convertLL2MC(cK)
            }
            cL.curLocType = cI;
            cL.curSrc = new ca(cK.lng, cK.lat);
            a8.request(function (cN) {
                if (cN && cN.result && cN.result.type == a2) {
                    cJ._loc.curId = cN.content ? cN.content.uid : 1;
                    T && T(cJ._loc.curId)
                }
            }, {
                qt: c,
                b: cK.lng + "," + cK.lat + ";" + cK.lng + "," + cK.lat,
                l: cM
            })
        }
    },
    _setStatus: function (T) {
        if (typeof T == "number") {
            this._status = T
        } else {
            delete this._status
        }
    },
    _triggerCbk: function (cI, cK, cJ) {
        var T;
        switch (cI) {
        case u.CBK_SEARCH_COMPLETE:
            T = this._opts.onSearchComplete;
            break;
        case u.CBK_MARKERS_SET:
            T = this._opts.onMarkersSet;
            break;
        case u.CBK_POLYLINES_SET:
            T = this._opts.onPolylinesSet;
            break;
        case u.CBK_INFO_HTML_SET:
            T = this._opts.onInfoHtmlSet;
            break;
        case u.CBK_RESULTS_HTML_SET:
            T = this._opts.onResultsHtmlSet;
            break;
        case u.CBK_BUSLIST_COMPLETE:
            T = this._opts.onGetBusListComplete;
            break;
        case u.CBK_BUSLINE_COMPLETE:
            T = this._opts.onGetBusLineComplete;
            break;
        case u.CBK_BUSLISTHTML_SET:
            T = this._opts.onBusListHtmlSet;
            break;
        case u.CBK_BUSLINEHTML_SET:
            T = this._opts.onBusLineHtmlSet;
            break;
        default:
            break
        }
        T && T(cK, cJ)
    }
});
var aP = 0;
var bt = 1;
var aK = 2;
Q.unique = function (cI) {
    var cL = false;
    var cK = [],
        cM = {};
    for (var cJ = 0, T = cI.length; cJ < T; cJ++) {
        if (!cM[cI[cJ]]) {
            cM[cI[cJ]] = true;
            cK.push(cI[cJ])
        }
    }
    return cK
};
Q.getBestLevel = function (cJ, cI) {
    if (cI) {
        var T = Math.min(cI.width / 1100, cI.height / 660);
        cJ = Math.round(cJ + (Math.log(T) / Math.log(2)))
    }
    if (cJ < 1) {
        cJ = 1
    }
    if (cJ > 18) {
        cJ = 18
    }
    return cJ
};
Q.parseGeo = function (cM, cP) {
    if (typeof cM != "string" || !cM) {
        return
    }
    var cR = cM.split("|");
    var T;
    var cK;
    var cI;
    if (cR.length == 1) {
        T = U(cM)
    } else {
        T = U(cR[2]);
        cK = U(cR[0]);
        cI = U(cR[1]);
        if (!cP) {
            return T
        }
    }
    var cN = {
        type: T.geoType
    };
    if (cP) {
        switch (cN.type) {
        case aK:
            var cO = new ca(T.geo[0][0], T.geo[0][1]);
            var cQ = a7.convertMC2LL(cO);
            cN.point = cQ;
            cN.points = [cQ];
            break;
        case bt:
            cN.points = [];
            var cS = T.geo[0];
            for (var cL = 0, cJ = cS.length - 1; cL < cJ; cL += 2) {
                var cT = new ca(cS[cL], cS[cL + 1]);
                cT = a7.convertMC2LL(cT);
                cN.points.push(cT)
            }
            cK = new ca(cK.geo[0][0], cK.geo[0][1]);
            cI = new ca(cI.geo[0][0], cI.geo[0][1]);
            cK = a7.convertMC2LL(cK);
            cI = a7.convertMC2LL(cI);
            cN.bounds = new bK(cK, cI);
            break;
        default:
            break
        }
    }
    return cN
};
Q.parseGeoExt = function (c2, cT) {
    if (!cT) {
        cT = 0
    } else {
        if (cT < 0.25) {
            cT = 0
        } else {
            if (cT > 0.25 && cT < 1) {
                cT = 1
            } else {
                if (cT > 32) {
                    cT = 32
                }
            }
        }
    }
    var cO = c2.split("|");
    if (cO.length == 1) {
        var cJ = U(cO[0]);
        return {
            type: cJ.type,
            bound: "",
            points: cJ.geo.join(",")
        }
    } else {
        if (cO.length > 1) {
            var cU = c2.split(";.=");
            var cQ = [];
            var cK = [];
            var cV = 0;
            var cZ = cU.length;
            for (var cW = 0; cW < cZ; cW++) {
                var c1 = cU[cW];
                if (cZ > 1) {
                    if (cW == 0) {
                        c1 = c1 + ";"
                    }
                    if (cW > 0 && cW < cZ - 1) {
                        c1 = ".=" + c1 + ";"
                    }
                    if (cW == cZ - 1) {
                        c1 = ".=" + c1
                    }
                }
                var cL = c1.split("|");
                var cY = U(cL[0]);
                var cX = U(cL[1]);
                cQ.push(cY.geo.join(","));
                cQ.push(cX.geo.join(","));
                var cJ = U(cL[2]);
                cV = cJ.type;
                var c0 = cJ.geo.join(",");
                c0 = Q.parseGeoExtReg1(c0);
                if (cT > 0) {
                    c0 = Q.parseGeoExtReg2(c0, cT)
                }
                cK.push(c0)
            }
            if (cZ <= 1) {
                cK = cK.join(";")
            }
            if (cZ == 2) {
                var cI = cK[0] + ";" + cK[1];
                var cM = cI.split(";");
                var T = [];
                for (var cW = 0; cW < cM.length; cW++) {
                    var cP = cM[cW].split(",")[0];
                    var cN = cM[cW].split(",")[1];
                    var cR = new ca(cP, cN);
                    var cS = a7.convertMC2LL(cR);
                    T.push(cS)
                }
                cK = T
            }
            return {
                type: cV,
                bound: cQ.join(";"),
                points: cK
            }
        }
    }
};
Q.parseGeoStr = function (cJ) {
    var cI = cJ.split(",");
    var T = new ca(cI[0], cI[1]);
    return a7.convertMC2LL(T)
};
var ax = ["=", ".", "-", "*"];
var bU = 1 << 23;

function U(cP) {
    var cO = am(cP.charAt(0));
    var cI = cP.substr(1);
    var cR = 0;
    var T = cI.length;
    var cS = [];
    var cM = [];
    var cN = [];
    while (cR < T) {
        if (cI.charAt(cR) == ax[0]) {
            if ((T - cR) < 13) {
                return 0
            }
            cN = cy(cI.substr(cR, 13), cS);
            if (cN < 0) {
                return 0
            }
            cR += 13
        } else {
            if (cI.charAt(cR) == ";") {
                cM.push(cS.slice(0));
                cS.length = 0;
                ++cR
            } else {
                if ((T - cR) < 8) {
                    return 0
                }
                cN = aQ(cI.substr(cR, 8), cS);
                if (cN < 0) {
                    return 0
                }
                cR += 8
            }
        }
    }
    for (var cL = 0, cJ = cM.length; cL < cJ; cL++) {
        for (var cK = 0, cQ = cM[cL].length; cK < cQ; cK++) {
            cM[cL][cK] /= 100
        }
    }
    return {
        geoType: cO,
        geo: cM
    }
}
function am(cI) {
    var T = -1;
    if (cI == ax[1]) {
        T = aK
    } else {
        if (cI == ax[2]) {
            T = bt
        } else {
            if (cI == ax[3]) {
                T = aP
            }
        }
    }
    return T
}
function cy(cK, cI) {
    var T = 0;
    var cM = 0;
    var cL = 0;
    for (var cJ = 0; cJ < 6; cJ++) {
        cL = aa(cK.substr(1 + cJ, 1));
        if (cL < 0) {
            return -1 - cJ
        }
        T += cL << (6 * cJ);
        cL = aa(cK.substr(7 + cJ, 1));
        if (cL < 0) {
            return -7 - cJ
        }
        cM += cL << (6 * cJ)
    }
    cI.push(T);
    cI.push(cM);
    return 0
}
function aQ(cL, cJ) {
    var cI = cJ.length;
    if (cI < 2) {
        return -1
    }
    var T = 0;
    var cN = 0;
    var cM = 0;
    for (var cK = 0; cK < 4; cK++) {
        cM = aa(cL.substr(cK, 1));
        if (cM < 0) {
            return -1 - cK
        }
        T += cM << (6 * cK);
        cM = aa(cL.substr(4 + cK, 1));
        if (cM < 0) {
            return -5 - cK
        }
        cN += cM << (6 * cK)
    }
    if (T > bU) {
        T = bU - T
    }
    if (cN > bU) {
        cN = bU - cN
    }
    cJ.push(cJ[cI - 2] + T);
    cJ.push(cJ[cI - 1] + cN);
    return 0
}
function aa(cI) {
    var T = cI.charCodeAt(0);
    if (cI >= "A" && cI <= "Z") {
        return T - "A".charCodeAt(0)
    } else {
        if (cI >= "a" && cI <= "z") {
            return (26 + T - "a".charCodeAt(0))
        } else {
            if (cI >= "0" && cI <= "9") {
                return (52 + T - "0".charCodeAt(0))
            } else {
                if (cI == "+") {
                    return 62
                } else {
                    if (cI == "/") {
                        return 63
                    }
                }
            }
        }
    }
    return -1
}