var b = 1;
var ax = 2;
var bx = 3;
var b0 = new aA(23, 25);
var bQ = new aA(9, 25);
var p = new aA(9, 0);
ai.addSearchPoi = function (cF, T, cB, cG) {
    var cE = U(T);
    if (!cE) {
        return
    }
    if (cB < 0 || cB > 9) {
        return
    }
    var cD = new J(u + "img/markers.png", b0, {
        anchor: bQ,
        imageOffset: new aA(0, -25 * cB),
        infoWindowAnchor: p
    });
    var cC = new Y(cE, {
        icon: cD
    });
    cF.addOverlay(cC);
    if (cG) {
        cC.setTitle(cG)
    }
    return cC
};
ai.addCenterPoi = function (cE, T, cF) {
    var cD = U(T);
    if (!cD) {
        return
    }
    var cC = new J(u + "img/markers.png", b0, {
        anchor: bQ,
        imageOffset: new aA(0, -250),
        infoWindowAnchor: p
    });
    var cB = new Y(cD, {
        icon: cC
    });
    cE.addOverlay(cB);
    if (cF) {
        cB.setTitle(cF)
    }
    return cB
};
ai.addSearchInBoundsPoi = function (cE, T, cF) {
    var cD = U(T);
    if (!cD) {
        return
    }
    var cC = new J(u + "img/markers.png", b0, {
        anchor: bQ,
        imageOffset: new aA(0, -300),
        infoWindowAnchor: p
    });
    var cB = new Y(cD, {
        icon: cC
    });
    cE.addOverlay(cB);
    if (cF) {
        cB.setTitle(cF)
    }
    return cB
};

function U(T) {
    var cC = [];
    var cB = null;
    if (T instanceof b3) {
        cB = T
    } else {
        if (typeof T == "string") {
            cC = a0.trim(T).split(",");
            if (cC.length < 2) {
                return
            }
            cC[0] = parseFloat(a0.trim(cC[0]));
            cC[1] = parseFloat(a0.trim(cC[1]))
        } else {
            cC = T.slice(0);
            if (cC.length < 2) {
                return
            }
        }
        cB = new b3(cC[0], cC[1])
    }
    return cB
}
ai.createSearchInfoWnd = function (cC, T) {
    var cK = cC.title;
    var cJ = cC.addr;
    var cF = cC.tel;
    var cH = cC.uid || "";
    var cB = cC.url;
    var cI = cC.poiType || BMAP_POI_TYPE_NORMAL;
    T = T || {};
    if (!cK) {
        return null
    }
    var cG = cK;
    if (cI == BMAP_POI_TYPE_BUSSTOP) {
        cG = cG + "-\u516c\u4ea4\u8f66\u7ad9"
    } else {
        if (cI == BMAP_POI_TYPE_SUBSTOP) {
            cG = cG + "-\u5730\u94c1\u7ad9"
        }
    }
    if (cG.replace(/[\u0100-\uffff]/g, "##").length > 27) {
        cG = cG.substring(0, 13) + "&#8230"
    }
    var cE = "<p style='width:210px;font:bold 14px/16px " + b2.fontFamily + ";margin:0;color:#cc5522;white-space:nowrap;overflow:hidden' title='" + cK + "'>" + cG + "</p>";
    var cM = [];
    cM.push("<div style='font:12px " + b2.fontFamily + ";margin-top:10px'>");
    if (cJ) {
        var cL = "\u5730\u5740\uff1a";
        if (cI == BMAP_POI_TYPE_BUSSTOP || cI == BMAP_POI_TYPE_SUBSTOP) {
            cL = "\u8f66\u6b21\uff1a"
        }
        cM.push('<table cellspacing="0" style="table-layout:fixed;width:100%;font:12px ' + b2.fontFamily + '" >');
        cM.push('<tr><td style="vertical-align:top;width:38px;white-space:nowrap;word-break:keep-all">' + cL + '&nbsp;</td><td style="line-height:16px">');
        cM.push(cJ + "&nbsp;</td></tr>");
        if (cF) {
            cM.push("<tr><td>\u7535\u8bdd\uff1a</td><td>" + cF + "</td></tr>")
        }
        cM.push("</table>")
    } else {
        if (cF) {
            cM.push('<table cellspacing="0" style="table-layout:fixed;width:100%;font:12px ' + b2.fontFamily + '">');
            cM.push('<tr><td style="vertical-align:top;width:36px;white-space:nowrap;word-break:keep-all">\u7535\u8bdd\uff1a</td><td>' + cF + "</td></tr></table>")
        }
    }
    cM.push("</div>");
    var cD = new bG(cM.join(""), {
        title: cE,
        height: 0,
        width: 230,
        margin: [10, 10, 20, 10]
    });
    return cD
};
ai.addDestPoi = function (cF, T, cG, cC) {
    var cE = U(T);
    if (!cE) {
        return
    }
    var cD = new J(u + "img/dest_markers.png", new aA(42, 34), {
        anchor: new aA(14, 32),
        imageOffset: new aA(0, -34 * cC),
        infoWindowAnchor: new aA(14, 0)
    });
    var cB = new Y(cE, {
        icon: cD,
        baseZIndex: 3500000,
        draggingCursor: "pointer"
    });
    cF.addOverlay(cB);
    if (cG) {
        cB.setTitle(cG)
    }
    return cB
};
ai.addLine = function (cB, T) {
    return ai.addRoute(cB, T, a9)
};
ai.ROUTE_STYLE_CONFIG = [{
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
ai.addRoute = function (cH, cE, cD) {
    var cC = ai.ROUTE_STYLE_CONFIG;
    if (typeof cD == "undefined") {
        cD = 0
    }
    if (!cC[cD]) {
        return
    }
    var T = cE;
    var cB = cC[cD];
    var cG = new f(T, {
        strokeWeight: cB.stroke,
        strokeColor: cB.color,
        strokeOpacity: cB.opacity,
        strokeStyle: cB.style,
        clickable: false
    });
    cH.addOverlay(cG);
    cG._routeType = cD;
    if (cD == a9) {
        var cF = new f(T, {
            strokeWeight: cB.stroke - 2,
            strokeColor: "#fff",
            strokeOpacity: 0.3,
            clickable: false
        });
        cG._p = cF;
        cH.addOverlay(cF)
    }
    return cG
};
ai.createTransInfoWnd = function (cB) {
    var cF = cB.content;
    var T = cB.curIndex;
    var cG = cB.total;
    var cD = cB.nextTransCbk;
    var cE = cB.obj;
    var cH = cB.hideStep;
    var cI = ["<div style='font:12px " + b2.fontFamily + "'>"];
    if (cF) {
        cI.push("<div style='margin:0 1em 24px 0'>" + cF + "</div>")
    }
    if (!cH) {
        cI.push(ai.genStepNavHtml(cG, T))
    }
    cI.push("</div>");
    var cC = new bG(cI.join(""), {
        title: "",
        height: 0,
        width: 220,
        margin: [10, 10, 20, 10]
    });
    if (cH) {
        return cC
    }
    cC.addEventListener("open", function () {
        if (a0.G("trans_prev")) {
            a0.on(a0.G("trans_prev"), "click", function () {
                if (cD && typeof cD == "function") {
                    cD(T - 1, cE)
                }
            })
        }
        if (a0.G("trans_next")) {
            a0.on(a0.G("trans_next"), "click", function () {
                if (cD && typeof cD == "function") {
                    cD(T + 1, cE)
                }
            })
        }
    });
    return cC
};
ai.genStepNavHtml = function (cC, T) {
    var cB = [];
    cB.push('<table width="99%" cols="2" style="background:#eaf2ff;font:12px ' + b2.fontFamily + '"><tbody><tr>');
    cB.push('<td nowrap="nowrap" width="50%" align="left">');
    if (T == 0) {
        cB.push('<span unselectable="on" style="color:#9c9d99;-moz-user-select:none" >\u4e0a\u4e00\u6b65</span>')
    } else {
        cB.push('<a id="trans_prev" style="color:#7777cc;-moz-user-select:none" href="javascript:void(0)">\u4e0a\u4e00\u6b65</a>')
    }
    cB.push("</td>");
    cB.push('<td nowrap="nowrap" width="50%" align="right">');
    if (T == cC + 1) {
        cB.push('<span unselectable="on" style="color:#9c9d99;-moz-user-select:none" >\u4e0b\u4e00\u6b65</span>')
    } else {
        cB.push('<a style="color:#7777cc" id="trans_next" href="javascript:void(0)">\u4e0b\u4e00\u6b65</a>')
    }
    cB.push("</td></tr></tbody></table>");
    return cB.join("")
};
ai.addTransPoi = function (cF, T, cC, cG) {
    var cE = U(T);
    if (!cE) {
        return
    }
    cC = cC || BMAP_LINE_TYPE_BUS;
    var cH = -55;
    if (cC == BMAP_LINE_TYPE_SUBWAY) {
        cH = -76
    }
    var cD = new J(u + "img/trans_icons.png", new aA(21, 21), {
        imageOffset: new aA(0, cH),
        infoWindowAnchor: new aA(10, 0)
    });
    var cB = new Y(cE, {
        icon: cD
    });
    cF.addOverlay(cB);
    if (cG) {
        cB.setTitle(cG)
    }
    return cB
};
ai.getInfoWindowDom = function (T) {
    if (T && T.infoWindowDoms && T.infoWindowDoms.contentDiv) {
        return T.infoWindowDoms.contentDiv.childNodes[0]
    }
    return null
};
ai.addStationPoi = function (cC, T, cD) {
    var cB = new Y(T, {
        icon: new J(be._stopUrl, new aA(11, 11))
    });
    if (cD) {
        cB.setTitle(cD)
    }
    cC.addOverlay(cB);
    return cB
};
ai.addDragMkr = function (cC, T) {
    var cB = new Y(T, {
        icon: new J(b2.imgPath + "drag.png", new aA(11, 11)),
        draggingCursor: "pointer"
    });
    cC.addOverlay(cB);
    cB.setZIndex(10);
    return cB
};
ai.createTipLbl = function (cB) {
    var T = new ab(cB, {
        offset: new aA(30, -10)
    });
    T.setStyle({
        border: "solid 1px gray",
        padding: "2px",
        whiteSpace: "nowrap",
        background: "#fff"
    });
    return T
};
ai.getDistanceByPixel = function (cB, T) {
    if (!cB || !T) {
        return
    }
    return Math.round(Math.sqrt(Math.pow(cB.x - T.x, 2) + Math.pow(cB.y - T.y, 2)))
};
t.CBK_SEARCH_COMPLETE = 1;
t.CBK_MARKERS_SET = 2;
t.CBK_INFO_HTML_SET = 3;
t.CBK_POLYLINES_SET = 4;
t.CBK_RESULTS_HTML_SET = 5;
t.CBK_BUSLIST_COMPLETE = 6;
t.CBK_BUSLINE_COMPLETE = 7;
t.CBK_BUSLISTHTML_SET = 8;
t.CBK_BUSLINEHTML_SET = 9;
t._getPoiUrl = function (T, cB) {
    if (T) {
        return cy + "?s=" + encodeURIComponent("inf&uid=" + T + "&c=" + cB) + "&i=0&sr=1"
    }
    return ""
};
t._getLocType = function (T) {
    if (!T) {
        return aS
    }
    if (typeof T == "string") {
        return aY
    }
    if (T instanceof b3) {
        return cg
    }
    if (T instanceof br) {
        return W
    }
    if (typeof T == "number") {
        return y
    }
    return aS
};
a0.extend(t.prototype, {
    _getIdByLoc: function (cE, T) {
        var cB = t._getLocType(cE.src);
        if (cB == aS) {
            return
        }
        var cC = this;
        if (cB == y) {
            T && T(cE.src);
            return
        }
        if (cB == aY) {
            if (cE.curLocType == cB && cE.curSrc == cE.src && cE.curId) {
                T && T(cE.curId);
                return
            }
            cE.curLocType = cB;
            cE.curSrc = cE.src;
            a3.request(function (cG) {
                if (cG && cG.result && cG.result.type == o) {
                    cC._loc.curId = cG.content.code;
                    T && T(cC._loc.curId)
                }
            }, {
                qt: cl,
                wd: cE.src
            })
        } else {
            var cD;
            var cF = 18;
            if (cB == W) {
                cD = cE.src.getCenter();
                cF = cE.src.getZoom()
            } else {
                cD = cE.src
            }
            if (cB == cE.curLocType && cE.curSrc.equals(cD) && cE.curId) {
                T && T(cE.curId);
                return
            }
            if (cB == W) {
                cD = a2.convertLL2MC(cD)
            }
            if (cB == cg) {
                cD = a2.convertLL2MC(cD)
            }
            cE.curLocType = cB;
            cE.curSrc = new b3(cD.lng, cD.lat);
            a3.request(function (cG) {
                if (cG && cG.result && cG.result.type == aX) {
                    cC._loc.curId = cG.content ? cG.content.uid : 1;
                    T && T(cC._loc.curId)
                }
            }, {
                qt: c,
                b: cD.lng + "," + cD.lat + ";" + cD.lng + "," + cD.lat,
                l: cF
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
    _triggerCbk: function (cB, cD, cC) {
        var T;
        switch (cB) {
        case t.CBK_SEARCH_COMPLETE:
            T = this._opts.onSearchComplete;
            break;
        case t.CBK_MARKERS_SET:
            T = this._opts.onMarkersSet;
            break;
        case t.CBK_POLYLINES_SET:
            T = this._opts.onPolylinesSet;
            break;
        case t.CBK_INFO_HTML_SET:
            T = this._opts.onInfoHtmlSet;
            break;
        case t.CBK_RESULTS_HTML_SET:
            T = this._opts.onResultsHtmlSet;
            break;
        case t.CBK_BUSLIST_COMPLETE:
            T = this._opts.onGetBusListComplete;
            break;
        case t.CBK_BUSLINE_COMPLETE:
            T = this._opts.onGetBusLineComplete;
            break;
        case t.CBK_BUSLISTHTML_SET:
            T = this._opts.onBusListHtmlSet;
            break;
        case t.CBK_BUSLINEHTML_SET:
            T = this._opts.onBusLineHtmlSet;
            break;
        default:
            break
        }
        T && T(cD, cC)
    }
});
var aK = 0;
var bo = 1;
var aF = 2;
O.unique = function (cB) {
    var cE = false;
    var cD = [],
        cF = {};
    for (var cC = 0, T = cB.length; cC < T; cC++) {
        if (!cF[cB[cC]]) {
            cF[cB[cC]] = true;
            cD.push(cB[cC])
        }
    }
    return cD
};
O.getBestLevel = function (cC, cB) {
    if (cB) {
        var T = Math.min(cB.width / 1100, cB.height / 660);
        cC = Math.round(cC + (Math.log(T) / Math.log(2)))
    }
    if (cC < 1) {
        cC = 1
    }
    if (cC > 18) {
        cC = 18
    }
    return cC
};
O.parseGeo = function (cF, cI) {
    if (typeof cF != "string" || !cF) {
        return
    }
    var cK = cF.split("|");
    var T;
    var cD;
    var cB;
    if (cK.length == 1) {
        T = Q(cF)
    } else {
        T = Q(cK[2]);
        cD = Q(cK[0]);
        cB = Q(cK[1])
    }
    var cG = {
        type: T.geoType
    };
    if (cI) {
        switch (cG.type) {
        case aF:
            var cH = new b3(T.geo[0][0], T.geo[0][1]);
            var cJ = a2.convertMC2LL(cH);
            cG.point = cJ;
            cG.points = [cJ];
            break;
        case bo:
            cG.points = [];
            var cL = T.geo[0];
            for (var cE = 0, cC = cL.length - 1; cE < cC; cE += 2) {
                var cM = new b3(cL[cE], cL[cE + 1]);
                cM = a2.convertMC2LL(cM);
                cG.points.push(cM)
            }
            cD = new b3(cD.geo[0][0], cD.geo[0][1]);
            cB = new b3(cB.geo[0][0], cB.geo[0][1]);
            cD = a2.convertMC2LL(cD);
            cB = a2.convertMC2LL(cB);
            cG.bounds = new bE(cD, cB);
            break;
        default:
            break
        }
    }
    return cG
};
O.parseGeoExt = function (cV, cM) {
    if (!cM) {
        cM = 0
    } else {
        if (cM < 0.25) {
            cM = 0
        } else {
            if (cM > 0.25 && cM < 1) {
                cM = 1
            } else {
                if (cM > 32) {
                    cM = 32
                }
            }
        }
    }
    var cH = cV.split("|");
    if (cH.length == 1) {
        var cC = Q(cH[0]);
        return {
            type: cC.type,
            bound: "",
            points: cC.geo.join(",")
        }
    } else {
        if (cH.length > 1) {
            var cN = cV.split(";.=");
            var cJ = [];
            var cD = [];
            var cO = 0;
            var cS = cN.length;
            for (var cP = 0; cP < cS; cP++) {
                var cU = cN[cP];
                if (cS > 1) {
                    if (cP == 0) {
                        cU = cU + ";"
                    }
                    if (cP > 0 && cP < cS - 1) {
                        cU = ".=" + cU + ";"
                    }
                    if (cP == cS - 1) {
                        cU = ".=" + cU
                    }
                }
                var cE = cU.split("|");
                var cR = Q(cE[0]);
                var cQ = Q(cE[1]);
                cJ.push(cR.geo.join(","));
                cJ.push(cQ.geo.join(","));
                var cC = Q(cE[2]);
                cO = cC.type;
                var cT = cC.geo.join(",");
                cT = O.parseGeoExtReg1(cT);
                if (cM > 0) {
                    cT = O.parseGeoExtReg2(cT, cM)
                }
                cD.push(cT)
            }
            if (cS <= 1) {
                cD = cD.join(";")
            }
            if (cS == 2) {
                var cB = cD[0] + ";" + cD[1];
                var cF = cB.split(";");
                var T = [];
                for (var cP = 0; cP < cF.length; cP++) {
                    var cI = cF[cP].split(",")[0];
                    var cG = cF[cP].split(",")[1];
                    var cK = new b3(cI, cG);
                    var cL = a2.convertMC2LL(cK);
                    T.push(cL)
                }
                cD = T
            }
            return {
                type: cO,
                bound: cJ.join(";"),
                points: cD
            }
        }
    }
};
O.parseGeoStr = function (cC) {
    var cB = cC.split(",");
    var T = new b3(cB[0], cB[1]);
    return a2.convertMC2LL(T)
};
var at = ["=", ".", "-", "*"];
var bO = 1 << 23;

function Q(cI) {
    var cH = aj(cI.charAt(0));
    var cB = cI.substr(1);
    var cK = 0;
    var T = cB.length;
    var cL = [];
    var cF = [];
    var cG = [];
    while (cK < T) {
        if (cB.charAt(cK) == at[0]) {
            if ((T - cK) < 13) {
                return 0
            }
            cG = cr(cB.substr(cK, 13), cL);
            if (cG < 0) {
                return 0
            }
            cK += 13
        } else {
            if (cB.charAt(cK) == ";") {
                cF.push(cL.slice(0));
                cL.length = 0;
                ++cK
            } else {
                if ((T - cK) < 8) {
                    return 0
                }
                cG = aL(cB.substr(cK, 8), cL);
                if (cG < 0) {
                    return 0
                }
                cK += 8
            }
        }
    }
    for (var cE = 0, cC = cF.length; cE < cC; cE++) {
        for (var cD = 0, cJ = cF[cE].length; cD < cJ; cD++) {
            cF[cE][cD] /= 100
        }
    }
    return {
        geoType: cH,
        geo: cF
    }
}
function aj(cB) {
    var T = -1;
    if (cB == at[1]) {
        T = aF
    } else {
        if (cB == at[2]) {
            T = bo
        } else {
            if (cB == at[3]) {
                T = aK
            }
        }
    }
    return T
}
function cr(cD, cB) {
    var T = 0;
    var cF = 0;
    var cE = 0;
    for (var cC = 0; cC < 6; cC++) {
        cE = X(cD.substr(1 + cC, 1));
        if (cE < 0) {
            return -1 - cC
        }
        T += cE << (6 * cC);
        cE = X(cD.substr(7 + cC, 1));
        if (cE < 0) {
            return -7 - cC
        }
        cF += cE << (6 * cC)
    }
    cB.push(T);
    cB.push(cF);
    return 0
}
function aL(cE, cC) {
    var cB = cC.length;
    if (cB < 2) {
        return -1
    }
    var T = 0;
    var cG = 0;
    var cF = 0;
    for (var cD = 0; cD < 4; cD++) {
        cF = X(cE.substr(cD, 1));
        if (cF < 0) {
            return -1 - cD
        }
        T += cF << (6 * cD);
        cF = X(cE.substr(4 + cD, 1));
        if (cF < 0) {
            return -5 - cD
        }
        cG += cF << (6 * cD)
    }
    if (T > bO) {
        T = bO - T
    }
    if (cG > bO) {
        cG = bO - cG
    }
    cC.push(cC[cB - 2] + T);
    cC.push(cC[cB - 1] + cG);
    return 0
}
function X(cB) {
    var T = cB.charCodeAt(0);
    if (cB >= "A" && cB <= "Z") {
        return T - "A".charCodeAt(0)
    } else {
        if (cB >= "a" && cB <= "z") {
            return (26 + T - "a".charCodeAt(0))
        } else {
            if (cB >= "0" && cB <= "9") {
                return (52 + T - "0".charCodeAt(0))
            } else {
                if (cB == "+") {
                    return 62
                } else {
                    if (cB == "/") {
                        return 63
                    }
                }
            }
        }
    }
    return -1
}