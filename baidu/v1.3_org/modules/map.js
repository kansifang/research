BMap.register(function (cK) {
    if (cK.config && cK.config.isOverviewMap) {
        return
    }
    if (cK.isLoaded()) {
        bj(cK)
    } else {
        cK.addEventListener("load", function () {
            bj(this)
        })
    }
    cK.cityName = "\u4e2d\u56fd";
    var T = {};
    T.enableRequest = true;
    T.request = function () {
        if (T.enableRequest) {
            T.enableRequest = false;
            setTimeout(function () {
                T._request()
            }, 500)
        }
    };
    T._request = function () {
        var cM = cK.getBounds(),
            cO = cK.getZoom(),
            cL = a9.convertLL2MC(cM.getSouthWest()),
            cN = a9.convertLL2MC(cM.getNorthEast());
        ba.request(function (cP) {
            T.enableRequest = true;
            if (cP && cP.current_city && cP.current_city["name"]) {
                cK.cityName = cP.current_city["name"];
                aY(cK)
            }
        }, {
            qt: "cen",
            b: cL.lng + "," + cL.lat + ";" + cN.lng + "," + cN.lat,
            l: cO
        }, "", "", true)
    };
    cK.addEventListener("load", function (cL) {
        T.request()
    });
    cK.addEventListener("moveend", function (cL) {
        T.request()
    });
    cK.addEventListener("zoomend", function (cL) {
        T.request()
    })
});

function bj(cK) {
    if (cK.temp.copyadded) {
        return
    }
    cK.temp.copyadded = true;
    var cM = new aG(81, 2);
    if (az()) {
        if (cK.highResolutionEnabled()) {
            cM.width = 148;
            fontSize = "21px"
        } else {
            cM.width = 72;
            cM.height = 0
        }
    }
    var cL = new al({
        offset: cM,
        printable: true
    });
    cK.cpyCtrl = cL;
    aY(cK);
    cK.addEventListener("maptypechange", function () {
        aY(cK)
    });
    cK.addControl(cL);
    var T = new b0();
    T._opts = {
        printable: true
    };
    cK.addControl(T);
    cK.addEventListener("resize", function () {
        if (this.getSize().width >= 220 && cK.getSize().height >= 100) {
            T.show();
            cL.setOffset(cM)
        } else {
            T.hide();
            cL.setOffset(new aG(4, 2))
        }
    });
    if (cK.getSize().width >= 220 && cK.getSize().height >= 100) {
        T.show()
    } else {
        T.hide();
        cL.setOffset(new aG(4, 2))
    }
    if (cK.highResolutionEnabled()) {
        T.setOffset(new aG(3, 2))
    }
}
function aY(T) {
    var cQ = "11px",
        cP = T.cityName || "\u4e2d\u56fd",
        cM = T.getMapType(),
        cR = ["\u5e38\u5dde\u5e02", "\u6210\u90fd\u5e02", "\u5927\u8fde\u5e02", "\u91cd\u5e86\u5e02", "\u5357\u4eac\u5e02", "\u5357\u660c\u5e02", "\u6b66\u6c49\u5e02"],
        cL = [],
        cO, cN = "color:#fff;font-size:" + cQ + ";text-shadow:0 1px 3px black";
    switch (cM) {
    case BMAP_SATELLITE_MAP:
    case BMAP_HYBRID_MAP:
        cL = ['<span style="' + cN + '">&copy; 2013 Baidu - Data &copy; '];
        cL.push('<a target="_blank" href="http://www.navinfo.com/" style="' + cN + '">NavInfo</a> &amp; ');
        for (var cK in cR) {
            if (cR[cK] == cP) {
                cO = true;
                break
            }
        }
        if (cO) {
            cL.push('<a target="_blank" href="http://www.yootu.com/" style="' + cN + '">yootu</a>')
        } else {
            cL.push('<a target="_blank" href="http://www.cennavi.com.cn/" style="' + cN + '">CenNavi</a>')
        }
        cL.push(' &amp; <a target="_blank" href="http://www.365ditu.com/" style="' + cN + '">\u9053\u9053\u901a</a>');
        cL.push(" , Image &copy; DigitalGlobe & </span>");
        cL.push('<a href="http://www.chinasiwei.com" target="_blank" style="' + cN + '">chinasiwei</a>');
        break;
    case BMAP_PERSPECTIVE_MAP:
        cL = ['<span style="' + cN + '">&copy; 2013 Baidu - Data &copy; </span>', '<a href="http://o.cn" target="_blank" style="color:#fff;font-size:' + cQ + ';text-shadow:0 1px 3px black">\u90fd\u5e02\u5708</a>'];
        break;
    default:
        cL = ['<span style="font-size:' + cQ + '">&copy; 2013 Baidu&nbsp;- Data &copy; '];
        cL.push('<a target="_blank" href="http://www.navinfo.com/">NavInfo</a> &amp; ');
        for (var cK in cR) {
            if (cR[cK] == cP) {
                cO = true;
                break
            }
        }
        if (cO) {
            cL.push('<a target="_blank" href="http://www.yootu.com/">yootu</a>')
        } else {
            cL.push('<a target="_blank" href="http://www.cennavi.com.cn/">CenNavi</a>')
        }
        cL.push(' &amp; <a target="_blank" href="http://www.365ditu.com/">\u9053\u9053\u901a</a>');
        cL.push("</span>");
        break
    }
    cL = cL.join("");
    T.cpyCtrl.addCopyright({
        id: 1,
        content: cL
    })
}
function b0(T) {
    this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT;
    this.defaultOffset = new aG(1, 0);
    this.IMG_URL = cb.imgPath + (az() ? "copyright_logo_s.png" : "copyright_logo.png")
}
b0.prototype = new co();
b0.prototype.initialize = function (cK) {
    this._map = cK;
    var cL = Z("div");
    cL.style.height = "32px";
    var T = Z("a", {
        title: "\u5230\u767e\u5ea6\u5730\u56fe\u67e5\u770b\u6b64\u533a\u57df",
        target: "_blank",
        href: "http://map.baidu.com/?sr=1"
    });
    T.style.outline = "none";
    if (a7.browser.ie == 6) {
        T.innerHTML = "<div style='cursor:pointer;width:77px;height:32px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + this.IMG_URL + ")'></div>"
    } else {
        T.innerHTML = "<img style='border:none;width:77px;height:32px' src='" + this.IMG_URL + "' />"
    }
    if (az()) {
        if (this._map.highResolutionEnabled()) {
            cL.style.height = "50px";
            T.href = "#";
            this.IMG_URL = cb.imgPath + "copyright_logo_hd.png";
            T.innerHTML = "<img style='border:none;width:136px;height:50px' src='" + this.IMG_URL + "' />"
        } else {
            cL.style.height = "25px";
            T.href = "#";
            T.innerHTML = "<img style='border:none;width:68px;height:25px' src='" + this.IMG_URL + "' />"
        }
    }
    cL.appendChild(T);
    cK.getContainer().appendChild(cL);
    return cL
};
a7.extend(by.prototype, {
    _draw: function () {
        this._bind()
    },
    _bind: function () {
        var T = this;
        T._watchSize = function () {
            var cL = T.getSize();
            if (T.width != cL.width || T.height != cL.height) {
                var cN = new aG(T.width, T.height);
                var cP = new bf("onbeforeresize");
                cP.size = cN;
                T.dispatchEvent(cP);
                T._updateCenterPoint((cL.width - T.width) / 2, (cL.height - T.height) / 2);
                T.maskLayer.style.width = (T.width = cL.width) + "px";
                T.maskLayer.style.height = (T.height = cL.height) + "px";
                var cM = new bf("onresize");
                cM.size = cL;
                T.dispatchEvent(cM);
                var cK = parseInt(T.platform.style.left) || 0;
                var cO = parseInt(T.platform.style.top) || 0;
                if (T.currentOperation != 0 && (T.offsetX != cK || T.offsetY != cO)) {
                    T._setPlatformPosition(cK, cO)
                }
            }
        };
        a7.on(T.maskLayer, "mouseover", function (cK) {
            T.dispatchEvent(new bf("onmouseover"))
        });
        a7.on(T.maskLayer, "mouseout", function (cK) {
            T.dispatchEvent(new bf("onmouseout"))
        })
    },
    _setPlatformPosition: function (T, cM, cK, cL) {
        if (isNaN(T) || isNaN(cM)) {
            return
        }
        if (this.offsetX == T && this.offsetY == cM) {
            return
        }
        this._updateCenterPoint(this.offsetX - T, this.offsetY - cM, cK);
        T = Math.round(T);
        cM = Math.round(cM);
        this.offsetX = T;
        this.offsetY = cM;
        this.platform.style.left = T + "px";
        this.platform.style.top = cM + "px";
        this.maskLayer.style.left = -T + "px";
        this.maskLayer.style.top = -cM + "px";
        if (cL != false) {
            this.dispatchEvent(new bf("onmoving"))
        }
    },
    panTo: function (cK, cM) {
        if (!(cK instanceof cc)) {
            return
        }
        var cL = this.pointToPixel(cK);
        var T = Math.round(this.width / 2);
        var cN = Math.round(this.height / 2);
        cM = cM || {};
        if (Math.abs(T - cL.x) > this.width || Math.abs(cN - cL.y) > this.height || cM.noAnimation) {
            this._panTo(T - cL.x, cN - cL.y, cK)
        } else {
            this._panBy(T - cL.x, cN - cL.y, {
                duration: cM.duration
            })
        }
    },
    _panTo: function (cK, T, cM) {
        var cL = this.temp;
        if (cL.operating == true) {
            return
        }
        if (cL.dragAni) {
            cL.dragAni.stop()
        }
        this.dispatchEvent(new bf("onmovestart"));
        this._setPlatformPosition(this.offsetX + cK, this.offsetY + T, cM);
        this.dispatchEvent(new bf("onmoveend"))
    },
    panBy: function (cK, T, cL) {
        cK = Math.round(cK) || 0;
        T = Math.round(T) || 0;
        cL = cL || {};
        if (Math.abs(cK) <= this.width && Math.abs(T) <= this.height && (!cL.noAnimation)) {
            this._panBy(cK, T)
        } else {
            this._panTo(cK, T)
        }
    },
    _panBy: function (cK, T, cN) {
        if (this.temp.operating == true) {
            return
        }
        cN = cN || {};
        this.dispatchEvent(new bf("onmovestart"));
        var cM = this,
            cL = cM.temp;
        cL.pl = cM.offsetX;
        cL.pt = cM.offsetY;
        if (cL.tlPan) {
            cL.tlPan.cancel()
        }
        if (cL.dragAni) {
            cL.dragAni.stop()
        }
        cL.tlPan = new g({
            fps: cN.fps || cM.config.fps,
            duration: cN.duration || cM.config.actionDuration,
            transition: cN.transition || av.easeInOutQuad,
            render: function (cO) {
                this.terminative = cM.temp.operating;
                if (cM.temp.operating) {
                    return
                }
                cM._setPlatformPosition(cL.pl + Math.ceil(cK * cO), cL.pt + Math.ceil(T * cO))
            },
            finish: function (cO) {
                cM.dispatchEvent(new bf("onmoveend"));
                cM.temp.tlPan = false;
                if (cM.temp.stopArrow == true) {
                    cM.temp.stopArrow = false;
                    if (cM.temp.arrow != 0) {
                        cM._arrow()
                    }
                }
            }
        })
    }
});