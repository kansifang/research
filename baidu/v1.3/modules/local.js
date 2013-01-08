	function az(T, cL, cI) {
		a5.lang.Class.call(this);
		if (!T) {
			return
		}
		this.container = (typeof(T) == "object") ? T : a5.G(T);
		this.page = 1;
		this.pageCount = 100;
		this.argName = "pg";
		this.pagecap = 4;
		this.callback = cL;
		this.update = true;
		var cJ = {
			page: 1,
			totalCount: 100,
			pageCount: 100,
			pagecap: 4,
			argName: "pg",
			update: true
		};
		if (!cI) {
			cI = cJ
		}
		for (var cK in cI) {
			if (typeof(cI[cK]) != "undefined") {
				this[cK] = cI[cK]
			}
		}
		this.render()
	}
	a5.extend(az.prototype, {
		render: function () {
			this.initialize()
		},
		initialize: function () {
			this.checkPages();
			this.container.innerHTML = this.createHtml()
		},
		checkPages: function () {
			if (isNaN(parseInt(this.page))) {
				this.page = 1
			}
			if (isNaN(parseInt(this.pageCount))) {
				this.pageCount = 1
			}
			if (this.page < 1) {
				this.page = 1
			}
			if (this.pageCount < 1) {
				this.pageCount = 1
			}
			if (this.page > this.pageCount) {
				this.page = this.pageCount
			}
			this.page = parseInt(this.page);
			this.pageCount = parseInt(this.pageCount)
		},
		getPage: function () {
			var cI = location.search;
			var cJ = new RegExp("[?&]?" + this.argName + "=([^&]*)[&$]?", "gi");
			var T = cI.match(cJ);
			this.page = RegExp.$1
		},
		createHtml: function () {
			var cP = [],
				cJ = this.page - 1,
				cM = this.page + 1;
			cP.push('<p style="margin:0;padding:0;white-space:nowrap">');
			if (cJ < 1) {} else {
				if (this.page >= this.pagecap) {
					var cI = '<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp1}">\u9996\u9875</a></span>';
					cP.push(cI.replace("{temp1}", "BMap.I('" + this.guid + "').toPage(1);"))
				}
				var cI = '<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp2}">\u4e0a\u4e00\u9875</a></span>';
				cP.push(cI.replace("{temp2}", "BMap.I('" + this.guid + "').toPage(" + cJ + ");"))
			}
			if (this.page < this.pagecap) {
				if (this.page % this.pagecap == 0) {
					var cK = this.page - this.pagecap - 1
				} else {
					var cK = this.page - this.page % this.pagecap + 1
				}
				var cN = cK + this.pagecap - 1
			} else {
				var cO = Math.floor(this.pagecap / 2);
				var cL = this.pagecap % 2 - 1;
				if (this.pageCount > this.page + cO) {
					var cN = this.page + cO;
					var cK = this.page - cO - cL
				} else {
					var cN = this.pageCount;
					var cK = this.page - cO - cL
				}
			}
			if (this.page > this.pageCount - this.pagecap && this.page >= this.pagecap) {
				var cK = this.pageCount - this.pagecap + 1;
				var cN = this.pageCount
			}
			for (var T = cK; T <= cN; T++) {
				if (T > 0) {
					if (T == this.page) {
						cP.push('<span style="margin-right:3px">' + T + "</span>")
					} else {
						if (T >= 1 && T <= this.pageCount) {
							var cI = '<span><a style="color:#7777cc;margin-right:3px" href="javascript:void(0)" onclick="{temp3}">[' + T + "]</a></span>";
							cP.push(cI.replace("{temp3}", "BMap.I('" + this.guid + "').toPage(" + T + ");"))
						}
					}
				}
			}
			if (cM > this.pageCount) {} else {
				var cI = '<span><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp4}">\u4e0b\u4e00\u9875</a></span>';
				cP.push(cI.replace("{temp4}", "BMap.I('" + this.guid + "').toPage(" + cM + ");"))
			}
			cP.push("</p>");
			return cP.join("")
		},
		toPage: function (cI) {
			var T = cI ? cI : 1;
			if (typeof(this.callback) == "function") {
				this.callback(T);
				this.page = T
			}
			if (this.update) {
				this.render()
			}
		}
	});
	a1.isReqDataMap = function (cI, T) {
		if (!cI || typeof T == "undefined") {
			return false
		}
		if (cI == cg && T != V && T != bq && T != p && T != an && T != bB) {
			return false
		}
		if (cI == b8 && T != aL) {
			return false
		}
		if (cI == aj && T != P) {
			return false
		}
		if (cI == aE && T != av) {
			return false
		}
		if (cI == ag && T != ac) {
			return false
		}
		if (cI == aY && T != bP) {
			return false
		}
		return true
	};
	a5.extend(a1.prototype, {
		_check: function () {
			for (var cI = 0, T = this._queryList.length; cI < T; cI++) {
				var cJ = this._queryList[cI];
				this[cJ.method].apply(this, cJ.arguments)
			}
			delete this._queryList;
			this.initialize()
		},
		initialize: function () {
			var T = this;
			this.renderMap = new ao(T);
			this.renderList = new N(T)
		},
		search: function (T, cI) {
			if (!T || (T instanceof Array && (T.length < 1 || T.length > 10))) {
				this.clearResults();
				this._setStatus(BMAP_STATUS_INVALID_REQUEST);
				this._triggerCbk(u.CBK_SEARCH_COMPLETE);
				return
			}
			cI = cI || {};
			if (cI.customData) {
				this._createCustomSearchInstance();
				this.customSearch.search({
					keyword: T,
					customData: cI.customData
				});
				this._useCustomdata = true;
				return
			} else {
				this._useCustomdata = false
			}
			var cK = arguments[2] || {};
			var cJ = this;
			this._getIdByLoc(this._loc, function (cP) {
				cP = cP || 1;
				cJ._isMultiKey = cJ._isKeywordArray(T);
				var cO;
				if (!cJ._isMultiKey) {
					cO = {
						qt: cI.forceLocal ? O : cg,
						c: cP,
						wd: T,
						rn: cJ.getPageCapacity()
					}
				} else {
					var cN = T.join("$$");
					var cL = T.length;
					cO = {
						qt: ag,
						c: cP,
						wd: cN,
						wdn: cL,
						rn: cJ.getPageCapacity()
					}
				}
				if (cJ._opts.reqFrom) {
					a5.extend(cO, {
						from: cJ._opts.reqFrom
					})
				}
				a5.extend(cO, cK.params);
				var cM = {
					params: cO,
					options: cI,
					userKw: cK.userKw || T
				};
				a5.extend(cM, cK);
				a8.request(function (cR, cQ) {
					cJ._rawDataCbk(cR, cQ)
				}, cO, cM)
			})
		},
		_isKeywordArray: function (T) {
			if (T && T instanceof Array) {
				return true
			} else {
				return false
			}
		},
		searchInBounds: function (T, cL, cI) {
			if (!T || !cL || (T instanceof Array && (T.length < 1 || T.length > 10))) {
				this.clearResults();
				this._setStatus(BMAP_STATUS_INVALID_REQUEST);
				this._triggerCbk(u.CBK_SEARCH_COMPLETE);
				return
			}
			var cI = cI || {};
			var cK = this;
			if (cI.customData) {
				this._createCustomSearchInstance();
				this.customSearch.search({
					keyword: T,
					bounds: cL,
					customData: cI.customData
				});
				this._useCustomdata = true;
				return
			} else {
				this._useCustomdata = false
			}
			var cJ = arguments[2] || {};
			this._getIdByLoc(this._loc, function (cT) {
				cT = cT || 1;
				var cS = cL.getSouthWest();
				var cR = cL.getNorthEast();
				cS = a7.convertLL2MC(cS);
				cR = a7.convertLL2MC(cR);
				var cN = "(" + cS.lng + "," + cS.lat + ";" + cR.lng + "," + cR.lat + ")";
				cK._isMultiKey = cK._isKeywordArray(T);
				var cQ;
				if (!cK._isMultiKey) {
					cQ = {
						qt: aj,
						c: cT,
						wd: T,
						ar: cN,
						rn: cK._opts.pageCapacity,
						l: 18
					}
				} else {
					var cP = T.join("$$");
					var cM = T.length;
					cQ = {
						qt: aE,
						c: cT,
						wd: cP,
						wdn: cM,
						ar: cN,
						rn: cK.getPageCapacity(),
						l: 18
					}
				}
				if (cK._opts.reqFrom) {
					a5.extend(cQ, {
						from: cK._opts.reqFrom
					})
				}
				a5.extend(cQ, cJ.params);
				var cO;
				if (cJ && cJ.center && cJ.radius) {
					cO = {
						params: cQ,
						bounds: cL,
						center: cJ.center,
						radius: cJ.radius,
						userKw: cJ.userKw || T
					}
				} else {
					cO = {
						params: cQ,
						bounds: cL,
						userKw: cJ.userKw || T
					}
				}
				a8.request(function (cV, cU) {
					cK._rawDataCbk(cV, cU)
				}, cQ, cO)
			})
		},
		searchNearby: function (cL, cJ, cM, cS) {
			if (!cL || !cJ || (!(cJ instanceof ca) && typeof cJ == "object" && !cJ.uid) || (cL instanceof Array && (cL.length < 1 || cL.length > 10))) {
				this.clearResults();
				this._setStatus(BMAP_STATUS_INVALID_REQUEST);
				this._triggerCbk(u.CBK_SEARCH_COMPLETE);
				return
			}
			var cS = cS || {};
			if (cS.customData) {
				this._createCustomSearchInstance();
				this.customSearch.search({
					keyword: cL,
					center: cJ,
					radius: cM,
					customData: cS.customData
				});
				this._useCustomdata = true;
				return
			} else {
				this._useCustomdata = false
			}
			cM = cM || a1.DEFAULT_RADIUS;
			cM = cM < 0 ? a1.DEFAULT_RADIUS : (cM > a1.MAX_RADIUS ? a1.MAX_RADIUS : cM);
			var cP = this;
			var cI = arguments[3] || {};
			if (cJ instanceof ca) {
				var cK = a7.convertLL2MC(cJ);
				var cO = new ca(cK.lng - cM, cK.lat - cM);
				var cN = new ca(cK.lng + cM, cK.lat + cM);
				var cR = a7.convertMC2LL(cO);
				var cQ = a7.convertMC2LL(cN);
				var T = new bK(new ca(cR.lng, cR.lat), new ca(cQ.lng, cQ.lat));
				cI.center = cJ;
				cI.radius = cM;
				this.searchInBounds(cL, T, cI);
				return
			}
			this._getIdByLoc(this._loc, function (cX) {
				cX = cX || 1;
				cP._isMultiKey = cP._isKeywordArray(cL);
				var cV;
				if (!cP._isMultiKey) {
					cV = {
						qt: b8,
						c: cX,
						wd: cL,
						rn: cP.getPageCapacity(),
						uid: cJ.uid,
						r: cM
					}
				} else {
					cV = {
						qt: aY,
						c: cX,
						wd: cL.join("$$"),
						wdn: cL.length,
						rn: cP.getPageCapacity(),
						uid: cJ.uid,
						r: cM
					}
				}
				if (typeof cJ == "string") {
					if (!cP._isMultiKey) {
						cV.qt = cg;
						cV.wd = cJ + " " + cL
					} else {
						cV.qt = ag;
						var cT = [];
						for (var cU = 0; cU < cL.length; cU++) {
							var cW = cJ + " " + cL[cU];
							cT.push(cW)
						}
						cV.wd = cT.join("$$");
						cV.wdn = cT.length
					}
					delete cV.r;
					delete cV.uid
				}
				if (cP._opts.reqFrom) {
					a5.extend(cV, {
						from: cP._opts.reqFrom
					})
				}
				a5.extend(cV, cI.params);
				a8.request(function (cZ, cY) {
					cP._rawDataCbk(cZ, cY)
				}, cV, {
					params: cV,
					center: cJ,
					radius: cM,
					userKw: cI.userKw || cL
				})
			})
		},
		_rawDataCbk: function (cR, cJ) {
			var cQ = this;
			if (cR.result.type == av || cR.result.type == ac || cR.result.type == bP) {
				cQ._isMultiKey = true
			} else {
				cQ._isMultiKey = false
			}
			this.clearResults();
			cQ._json = cR;
			this._ud = cJ;
			var T = cR.result;
			var cP = cJ.params.qt;
			if (!cQ._isMultiKey) {
				if (T.error != 0 || !a1.isReqDataMap(cP, T.type)) {
					var cK = cR.current_city;
					this._results = new ci({
						keyword: cJ.userKw,
						city: cK.name,
						province: cK.up_province_name || "",
						ccode: cK.code,
						pc: cQ.getPageCapacity(),
						center: cJ.center,
						radius: cJ.radius,
						bounds: ((cJ.center && cJ.radius) ? undefined : cJ.bounds),
						moreUrl: this._getMoreUrl(cJ, cK)
					});
					this._results._qt = cJ.params.qt;
					this._setStatus(BMAP_STATUS_UNKNOWN_LOCATION);
					this._triggerCbk(u.CBK_SEARCH_COMPLETE, this._results);
					this._renderList();
					return
				}
			} else {
				if (T.error != 0 || !a1.isReqDataMap(cP, T.type)) {
					var cK = cR.current_city;
					this._arrResults = [];
					var cI = cJ.userKw;
					for (var cO = 0, cL = cI.length; cO < cL; cO++) {
						var cN = new ci({
							keyword: cI[cO],
							city: cK.name,
							province: cK.up_province_name || "",
							ccode: cK.code,
							pc: cQ.getPageCapacity(),
							center: cJ.center,
							radius: cJ.radius,
							bounds: ((cJ.center && cJ.radius) ? undefined : cJ.bounds),
							moreUrl: ""
						});
						cN._qt = cJ.params.qt;
						this._arrResults.push(cN)
					}
					this._setStatus(BMAP_STATUS_UNKNOWN_LOCATION);
					this._triggerCbk(u.CBK_SEARCH_COMPLETE, this._arrResults);
					this._renderList();
					return
				}
			}
			cQ._processRaw(cJ);
			cQ._renderMap();
			cQ._renderList();
			var cM;
			if (!this._isMultiKey) {
				cM = this._results
			} else {
				cM = this._getMaxResults()
			}
			if (this._opts.renderOptions.selectFirstResult && cM && cM.getNumPois() > 0) {
				var cQ = this;
				setTimeout(function () {
					cQ._select(0)
				}, 240)
			}
		},
		_processRaw: function (cN) {
			var c7 = this._json.result,
				di = this._json.content,
				c3 = this._json.current_city,
				dj = c7.type,
				cR = this,
				cO = c7.page_num || 0,
				c0 = 0,
				c8 = 0,
				cU = [],
				c5 = [],
				T = [],
				dh = [],
				c2 = [],
				cW = [];
			if (this._json.psrs && this._json.psrs.SEResult) {
				var cK = this._json.psrs.SEResult;
				if (cK.length > 0) {
					for (var df = 0, cS = cK.length; df < cS; ++df) {
						cW.push(cK[df])
					}
				}
			}
			var da = this._json.suggest_query;
			if (da) {
				for (var df = 0, cS = da.length; df < cS; ++df) {
					cW.push(da[df].query)
				}
			}
			cW = Q.unique(cW);
			if (dj != bq && dj != an) {
				var cY;
				if (!this._isMultiKey) {
					c8 = c7.count - (cO == 0 ? (c7.spec_dispnum || 0) : 0);
					c0 = c7.total < 760 ? c7.total : 760;
					cY = cO == 0 ? (c7.spec_dispnum || 0) : 0
				}
				if (dj != p) {
					if (!this._isMultiKey) {
						for (var df = cY; df < c7.count; df++) {
							if (di && di[df]) {
								var cL = di[df];
								var cV = this._formatAddr(cL.addr, cL.poiType);
								var cZ = [];
								if (cL.cla && cL.cla.length > 0) {
									var cJ = cL.cla.length;
									while (cJ--) {
										var c6 = cL.cla[cJ][1];
										c6 = c6.replace("<b>", "").replace("</b>", "");
										cZ.unshift(c6)
									}
								}
								var c4 = {
									title: cL.name,
									uid: cL.uid,
									point: Q.parseGeo(cL.geo, true).point,
									url: u._getPoiUrl(cL.uid, c3.code),
									address: cV,
									city: c3.name,
									province: c3.up_province_name || "",
									phoneNumber: cL.tel,
									postcode: cL.zip,
									type: cL.poiType || BMAP_POI_TYPE_NORMAL,
									isAccurate: (cL.acc_flag && cL.acc_flag == 1) ? true : false
								};
								if (cZ.length > 0) {
									c4.tags = cZ
								}
								cU.push(c4);
								c5.push(c4.point)
							}
						}
					} else {
						var cQ = c7.result_array;
						var c9 = cN.userKw.length;
						for (var df = 0; df < c9; df++) {
							dh[df] = [];
							c2[df] = [];
							T[df] = [];
							if (!cQ[df]) {
								continue
							}
							if (cQ[df].type == bq) {
								if (di && di[df]) {
									for (var dd = 0; dd < di[df].length; dd++) {
										var cI = di[df][dd];
										T[df].push({
											city: cI.name,
											_code: cI.code,
											numResults: cI.num
										})
									}
								}
								if (this._json.more_city && this._json.more_city[df]) {
									var cT = this._json.more_city[df];
									for (var dd = 0, db = cT.length; dd < db; dd++) {
										for (var dc = 0, c1 = cT[dd].city.length; dc < c1; dc++) {
											var cI = cT[dd].city[dc];
											T[df].push({
												city: cI.name,
												_code: cI.code,
												numResults: cI.num
											})
										}
									}
								}
								continue
							}
							var cX = cQ[df].count;
							var cP = cQ[df].page_num || 0;
							var dg = cQ[df].total > 760 ? 760 : cQ[df].total;
							var cM = {
								count: cX,
								pagenum: cP,
								total: dg
							};
							c2[df].push(cM);
							for (var dd = 0; dd < cX; dd++) {
								if (di && di[df] && di[df][dd]) {
									var cL = di[df][dd];
									var cV = this._formatAddr(cL.addr, cL.poiType);
									var cZ = [];
									if (cL.cla && cL.cla.length > 0) {
										var cJ = cL.cla.length;
										while (cJ--) {
											var c6 = cL.cla[cJ][1];
											c6 = c6.replace("<b>", "").replace("</b>", "");
											cZ.unshift(c6)
										}
									}
									var c4 = {
										title: cL.name,
										uid: cL.uid,
										point: Q.parseGeo(cL.geo, true).point,
										url: u._getPoiUrl(cL.uid, c3.code),
										address: cV,
										city: c3.name,
										province: c3.up_province_name || "",
										phoneNumber: cL.tel,
										postcode: cL.zip,
										type: cL.poiType || BMAP_POI_TYPE_NORMAL,
										isAccurate: (cL.acc_flag && cL.acc_flag == 1) ? true : false,
										tags: cZ
									};
									dh[df].push(c4)
								}
							}
						}
					}
				} else {
					c8 = c0 = 1;
					var c4 = {
						title: di.cname,
						uid: di.uid,
						point: Q.parseGeo(di.geo, true).point,
						address: di.cname,
						url: cF + "?s=" + encodeURIComponent("s&wd=" + c7.wd)
					};
					cU.push(c4);
					c5.push(c4.point)
				}
			} else {
				if (dj == an) {
					c8 = c0 = 1;
					var c4 = {
						title: c7.wd,
						point: Q.parseGeoStr(di[0]),
						url: cF + "?s=" + encodeURIComponent("s&wd=" + c7.wd)
					};
					cU.push(c4);
					c5.push(c4.point)
				}
				if (dj == bq) {
					c8 = c0 = 0;
					for (var df = 0; df < di.length; df++) {
						T.push({
							city: di[df].name,
							_code: di[df].code,
							numResults: di[df].num
						})
					}
					if (this._json.more_city) {
						var cT = this._json.more_city;
						for (var df = 0, db = cT.length; df < db; df++) {
							for (var dd = 0, c1 = cT[df].city.length; dd < c1; dd++) {
								var di = cT[df].city[dd];
								T.push({
									city: di.name,
									_code: di.code,
									numResults: di.num
								})
							}
						}
					}
				}
			}
			if (!this._isMultiKey) {
				this._results = new ci({
					keyword: cN.userKw,
					count: c8,
					total: c0,
					pageIdx: c7.page_num,
					city: c3.name,
					province: c3.up_province_name || "",
					ccode: c3.code,
					pois: cU,
					cityList: T,
					pc: cR.getPageCapacity(),
					center: cN.center,
					radius: cN.radius,
					bounds: ((cN.center && cN.radius) ? undefined : cN.bounds),
					moreUrl: this._getMoreUrl(cN, c3),
					suggestions: cW
				});
				this._results._qt = cN.params.qt;
				if (c0 == 0 && dj != bq) {
					this._setStatus(BMAP_STATUS_UNKNOWN_LOCATION)
				} else {
					if (dj != bq) {
						this._setStatus(BMAP_STATUS_SUCCESS)
					} else {
						this._setStatus(BMAP_STATUS_CITY_LIST)
					}
				}
				this._triggerCbk(u.CBK_SEARCH_COMPLETE, this._results)
			} else {
				this._arrResults = [];
				var c9 = cN.userKw.length;
				var de = true;
				for (var df = 0; df < c9; df++) {
					if (c2[df].length > 0 && c2[df][0].total > 0) {
						de = false
					}
					var cU = new ci({
						keyword: cN.userKw[df] || "",
						count: c2[df].length > 0 ? c2[df][0].count : 0,
						total: c2[df].length > 0 ? c2[df][0].total : 0,
						pageIdx: c2[df].length > 0 ? c2[df][0].pagenum : 0,
						city: c3.name,
						province: c3.up_province_name || "",
						ccode: c3.code,
						pois: dh[df] || [],
						cityList: T[df] || [],
						pc: cR.getPageCapacity(),
						center: cN.center,
						radius: cN.radius,
						bounds: ((cN.center && cN.radius) ? undefined : cN.bounds),
						moreUrl: "",
						suggestions: cW
					});
					cU._qt = cN.params.qt;
					this._arrResults.push(cU)
				}
				if (de) {
					this._setStatus(BMAP_STATUS_UNKNOWN_LOCATION)
				} else {
					this._setStatus(BMAP_STATUS_SUCCESS)
				}
				this._triggerCbk(u.CBK_SEARCH_COMPLETE, this._arrResults)
			}
		},
		_getMoreUrl: function (cI, cJ) {
			var cN = "";
			var cL = typeof cI.center == "string" ? (cI.center + " " + cI.userKw) : cI.userKw;
			var cM = "s",
				cK = "",
				cP = "";
			if (typeof cI.center == "object" && !(cI.center instanceof ca)) {
				cM = "nb";
				var cO = cI.center.point;
				cO = a7.convertLL2MC(cO);
				cK = encodeURIComponent("&uid=" + cI.center.uid + "&r=" + cI.radius) + "&l=13&c=" + cO.lng + "," + cO.lat
			}
			if (cI.bounds && !cI.center) {
				cM = "bd";
				var cO = cI.bounds.getCenter();
				cO = a7.convertLL2MC(cO);
				cP = "&c=" + cO.lng + "," + cO.lat + "&l=13"
			}
			if (cI.center && cI.center instanceof ca) {
				var cO = cI.center;
				cO = a7.convertLL2MC(cO);
				cP = "&c=" + cO.lng + "," + cO.lat + "&l=13";
				var T = cI.radius;
				cM = "tpl:PoiSearch?nb&ar=(" + (cO.lng - T) + "," + (cO.lat - T) + ";" + (cO.lng + T) + "," + (cO.lat + T) + ")"
			}
			cN = cF + "?sr=1" + cP + "&s=" + encodeURIComponent(cM + "&wd=" + cL + "&c=" + cJ.code) + cK;
			return cN
		},
		_formatAddr: function (cI, T) {
			T = T || BMAP_POI_TYPE_NORMAL;
			if (T == BMAP_POI_TYPE_BUSSTOP || T == BMAP_POI_TYPE_SUBSTOP) {
				return Q.unique(cI.split(";")).join("; ")
			}
			return cI
		},
		_chkMultiKeyResults: function (cK) {
			for (var cJ = 0, T = cK.length; cJ < T; cJ++) {
				var cI = cK[cJ];
				if (cI.getCurrentNumPois() > 0) {
					return true
				}
			}
			return false
		},
		_renderMap: function () {
			if (this._opts.renderOptions.map && ((this._results && this._results.getCurrentNumPois() > 0) || (this._arrResults && this._chkMultiKeyResults(this._arrResults)))) {
				var cS = this,
					cI = this._opts.renderOptions.map,
					cU = [];
				if (!cS._isMultiKey) {
					for (var cP = 0; cP < this._results.getCurrentNumPois(); cP++) {
						var cT = this._results.getPoi(cP);
						cU.push(cT.point);
						var cQ = this._addPoi(cT.point, cP, cT.title);
						if (!cQ) {
							continue
						}
						cT.marker = cQ;
						(function () {
							var cW = cP;
							cQ.addEventListener("click", function () {
								cS._select(cW)
							})
						})();
						this._overlays.push(cQ)
					}
				} else {
					var cV = 0;
					for (var cP = 0, cM = this._arrResults.length; cP < cM; cP++) {
						var cN = this._arrResults[cP];
						for (var cO = 0, cL = cN.getCurrentNumPois(); cO < cL; cO++) {
							var cT = cN.getPoi(cO);
							cU.push(cT.point);
							var cQ = al.addSearchInBoundsPoi(cI, cT.point, cT.title);
							if (!cQ) {
								continue
							}
							cT.marker = cQ;
							cT._kwIndex = cP;
							(function () {
								var cW = cV;
								cQ.addEventListener("click", function () {
									cS._select(cW)
								})
							})();
							this._overlays.push(cQ);
							this._arrPois.push(cT);
							cV++
						}
					}
				}
				var T = this._ud.center;
				if (T && typeof T != "string" && !(T instanceof ca)) {
					var cK = this._centerMkr = al.addCenterPoi(cI, T.point, T.title);
					cK.addEventListener("click", function () {
						cS._select(-1);
						cS._curIndex = "c";
						var cW = al.createSearchInfoWnd({
							title: T.title,
							addr: T.address,
							tel: T.phoneNumber,
							url: T.url,
							poiType: T.type
						});
						cW.addEventListener("open", function () {
							cS._triggerCbk(u.CBK_INFO_HTML_SET, T, al.getInfoWindowDom(cI))
						});
						cK.openInfoWindow(cW)
					})
				}
				var cR = this._json.result && this._json.result.type;
				var cJ = {};
				switch (cR) {
				case V:
				case aL:
				case P:
				case av:
				case ac:
				case bP:
					cJ.points = cU;
					break;
				case p:
					cJ.center = this._results.getPoi(0).point;
					cJ.level = this._json.content.level;
					break;
				case bB:
					cJ.center = this._results.getPoi(0).point;
					cJ.level = 13;
					break;
				case an:
					cJ.center = this._results.getPoi(0).point;
					cJ.level = parseInt(this._json.content[1]);
					break;
				default:
					break
				}
				this._getBestViewport(cJ);
				if (!cS._isMultiKey) {
					this._triggerCbk(u.CBK_MARKERS_SET, this._results._pois)
				} else {
					this._triggerCbk(u.CBK_MARKERS_SET, this._arrPois)
				}
			}
		},
		_addPoi: function (cI, T, cJ) {
			if (this._opts.pageCapacity <= a1.DEFAULT_PAGE_CAPACITY) {
				return al.addSearchPoi(this._opts.renderOptions.map, cI, T, cJ)
			} else {
				return al.addSearchInBoundsPoi(this._opts.renderOptions.map, cI, cJ)
			}
		},
		_select: function (cK) {
			var cJ = this._curIndex,
				cN = this._opts.renderOptions.map,
				T = this._opts.renderOptions.panel;
			if (cN && cK > -1 && this._overlays[cK]) {
				var cL = this._overlays[cK];
				cN.closeInfoWindow();
				var cO;
				if (!this._isMultiKey) {
					cO = this._results.getPoi(cK)
				} else {
					cO = this._arrPois[cK]
				}
				if (!cO) {
					return
				}
				var cI = al.createSearchInfoWnd({
					title: cO.title,
					addr: cO.address,
					tel: cO.phoneNumber,
					url: cO.url,
					poiType: cO.type
				});
				var cM = this;
				cI.addEventListener("close", function () {
					if (T) {
						if (typeof cM._curIndex == "number" && cM._curIndex != -1 && T.getElementsByTagName("li")[cM._curIndex]) {
							T.getElementsByTagName("li")[cM._curIndex].style.backgroundColor = ""
						}
					}
					cM._curIndex = -1
				});
				cI.addEventListener("open", function () {
					cM._triggerCbk(u.CBK_INFO_HTML_SET, cO, al.getInfoWindowDom(cN))
				});
				cL.openInfoWindow(cI)
			}
			if (T) {
				if (typeof cJ == "number" && cJ != -1 && T.getElementsByTagName("li")[cJ]) {
					T.getElementsByTagName("li")[cJ].style.backgroundColor = ""
				}
				if (typeof cK == "number" && cK != -1 && T.getElementsByTagName("li")[cK]) {
					T.getElementsByTagName("li")[cK].style.backgroundColor = "#f0f0f0"
				}
			}
			this._curIndex = cK
		},
		_clearOverlays: function () {
			for (var cI = 0, T = this._overlays.length; cI < T; cI++) {
				this._overlays[cI].remove();
				this._overlays[cI] = null
			}
			this._overlays.length = 0;
			for (var cI = 0, T = this._arrPois.length; cI < T; cI++) {
				this._arrPois[cI] = null
			}
			this._arrPois.length = 0;
			if (this._centerMkr) {
				this._centerMkr.remove();
				this._centerMkr = null
			}
		},
		_renderList: function () {
			if (this._opts.renderOptions.panel && this._opts.renderOptions.panel.appendChild && (this._results || this._arrResults)) {
				var cJ = Y("div", {
					style: "font:12px " + b9.fontFamily + ";border:1px solid #999;"
				});
				var cP = this.getStatus();
				var cQ = Y("div", {
					style: "background:#fff"
				});
				var cS = Y("ol", {
					style: "list-style:none;padding:0;margin:0"
				});
				if (cP == BMAP_STATUS_SUCCESS) {
					if (!this._isMultiKey) {
						for (var cR = 0, cM = this._results.getCurrentNumPois(); cR < cM; cR++) {
							var cX = this._createItem(cR);
							cS.appendChild(cX)
						}
					} else {
						var cU = 0;
						for (var cR = 0, cM = this._arrResults.length; cR < cM; cR++) {
							var cN = this._arrResults[cR];
							for (var cO = 0, cL = cN.getCurrentNumPois(); cO < cL; cO++) {
								var cX = this._createItem(cU);
								cS.appendChild(cX);
								cU++
							}
						}
					}
				}
				if (cP == BMAP_STATUS_CITY_LIST) {
					if (!this._isMultiKey) {
						for (var cR = 0, cM = Math.min(6, this._results.getCityList().length); cR < cM; cR++) {
							var cX = this._createCityItem(cR);
							cS.appendChild(cX)
						}
					}
				}
				if (cP == BMAP_STATUS_UNKNOWN_LOCATION) {
					var cX = Y("li", {
						style: "margin:2px 0;padding:0 5px 0 3px;overflow:hidden;line-height:17px"
					});
					cX.innerHTML = "\u62b1\u6b49\uff0c\u672a\u627e\u5230\u76f8\u5173\u5730\u70b9\u3002";
					cS.appendChild(cX)
				}
				cQ.appendChild(cS);
				cJ.appendChild(cQ);
				var cV = this;
				var cI = Y("div", {
					style: "white-space:nowrap;text-align:right;background:#e5ecf9;margin-top:5px;padding:2px"
				});
				var T;
				if (!this._isMultiKey) {
					T = Y("a", {
						style: "color:#7777cc",
						href: this._results.moreResultsUrl,
						target: "_blank",
						title: "\u5230\u767e\u5ea6\u5730\u56fe\u67e5\u770b\u66f4\u591a\u7ed3\u679c"
					});
					T.innerHTML = "\u66f4\u591a\u7ed3\u679c&#187;"
				} else {
					T = Y("a", {
						style: "color:#7777cc"
					});
					T.innerHTML = "&nbsp;"
				}
				var cK = Y("div", {
					style: "float:left;margin-right:5px"
				});
				if (!this._isMultiKey) {
					if (this._results.getNumPages() > 1) {
						var cT = new az(cK, function (cY) {
							cV.gotoPage(cY - 1)
						}, {
							pageCount: cV._results.getNumPages(),
							page: cV._results.getPageIndex() + 1,
							update: false
						})
					}
				} else {
					var cW = this._getMaxResults();
					if (cW && cW.getNumPages() > 1) {
						var cT = new az(cK, function (cY) {
							cV.gotoPage(cY - 1)
						}, {
							pageCount: cW.getNumPages(),
							page: cW.getPageIndex() + 1,
							update: false
						})
					}
				}
				cI.appendChild(cK);
				cI.appendChild(T);
				cJ.appendChild(cI);
				this._opts.renderOptions.panel.appendChild(cJ);
				this._triggerCbk(u.CBK_RESULTS_HTML_SET, cJ)
			}
		},
		_getMaxResults: function () {
			var cL, T = -1;
			for (var cK = 0, cI = this._arrResults.length; cK < cI; cK++) {
				var cJ = this._arrResults[cK];
				if (cJ.getNumPages() > T) {
					cL = cJ;
					T = cJ.getNumPages()
				}
			}
			return cL
		},
		_createItem: function (cL) {
			var cP, cI;
			if (!this._isMultiKey) {
				cP = this._results;
				if (!cP || !cP.getPoi(cL)) {
					return
				}
				cI = cP.getPoi(cL)
			} else {
				var cM = 0,
					cK = false;
				for (var cT = 0, cR = this._arrResults.length; cT < cR; cT++) {
					var cN = this._arrResults[cT];
					for (var cS = 0, cQ = cN.getCurrentNumPois(); cS < cQ; cS++) {
						if (cM == cL) {
							cI = cN.getPoi(cS);
							cI._kwIndex = cT;
							cK = true;
							break
						}
						cM++
					}
					if (cK) {
						break
					}
				}
			}
			var cV = Y("li", {
				style: "margin:2px 0;padding:0 5px 0 3px;cursor:pointer;overflow:hidden;line-height:17px"
			});
			if (this._curIndex > -1 && cL == this._curIndex) {
				cV.style.backgroundColor = "#f0f0f0"
			}
			var cU = cL == 0 ? cL + 2 + "px" : "-" + (cL * 20 - 2) + "px";
			if (!this._isMultiKey) {
				if (this._opts.pageCapacity > a1.DEFAULT_PAGE_CAPACITY) {
					cU = "-218px"
				}
			} else {
				cU = "-218px"
			}
			var T = ["<span style='background:url(" + v + "bmap/red_labels.gif) 0 " + cU + " no-repeat;padding-left:10px;margin-right:3px'>&nbsp;</span>"];
			var cY, cO;
			if (!this._isMultiKey) {
				var cW = this._results.keyword;
				var cJ = new RegExp(cW, "ig");
				if (cI.title) {
					cY = cI.title.replace(cJ, "<b>$&</b>")
				}
				if (cI.address) {
					cO = cI.address.replace(cJ, "<b>$&</b>")
				}
			} else {
				if (typeof cI._kwIndex != "undefined" && this._ud.userKw instanceof Array) {
					var cW = this._ud.userKw[cI._kwIndex];
					if (cW) {
						var cJ = new RegExp(cW, "ig");
						if (cI.title) {
							cY = cI.title.replace(cJ, "<b>$&</b>")
						}
						if (cI.address) {
							cO = cI.address.replace(cJ, "<b>$&</b>")
						}
					}
				} else {
					cY = cI.title;
					cO = cI.address
				}
			}
			if (cI.type == BMAP_POI_TYPE_BUSSTOP) {
				cY += "-\u516c\u4ea4\u8f66\u7ad9"
			} else {
				if (cI.type == BMAP_POI_TYPE_SUBSTOP) {
					cY += "-\u5730\u94c1\u7ad9"
				}
			}
			T.push("<span style='color:#00c;text-decoration:underline'>" + cY + "</span>");
			if (cI.address) {
				T.push("<span style='color:#666;'> - " + cO + "</span>")
			}
			cV.innerHTML = T.join("");
			var cX = this;
			cV.onclick = function () {
				cX._select(cL)
			};
			return cV
		},
		_createCityItem: function (T) {
			var cJ = Y("li", {
				style: "margin:2px 0;padding:0 5px 0 3px;cursor:pointer;overflow:hidden;line-height:17px"
			});
			cJ._index = T;
			var cK = this._results.getCityList();
			cJ.innerHTML = "<span style='color:#00c;text-decoration:underline'>" + cK[T].city + "</span> <span style='color:#666'>(\u5171" + cK[T].numResults + "\u6761\u7ed3\u679c)</span>";
			var cI = this;
			cJ.onclick = function () {
				cI.setLocation(cI._results.getCityList()[T].city);
				cI.search(cI._results.keyword)
			};
			return cJ
		},
		clearResults: function () {
			delete this._json;
			delete this._status;
			delete this._results;
			if (this._isMultiKey) {
				delete this._arrResults
			}
			delete this._ud;
			this._curIndex = -1;
			this._setStatus();
			this._clearOverlays();
			if (this._opts.renderOptions.panel) {
				this._opts.renderOptions.panel.innerHTML = ""
			}
		},
		gotoPage: function (cI) {
			if (this._useCustomdata) {
				this.customSearch.gotoPage(cI);
				return
			}
			if (this._ud) {
				var T;
				if (!this._isMultiKey) {
					T = this._results
				} else {
					T = this._getMaxResults()
				}
				if (typeof cI == "number" && !isNaN(cI) && cI >= 0 && cI <= T.getNumPages() - 1) {
					this._ud.params.pn = cI;
					var cJ = this._ud.params.qt;
					switch (cJ) {
					case cg:
					case O:
						this.search(this._ud.params.wd, this._ud.options, this._ud);
						break;
					case aj:
						this.searchInBounds(this._ud.params.wd, this._ud.bounds, this._ud);
						break;
					case b8:
						this.searchNearby(this._ud.params.wd, this._ud.center, this._ud.radius, this._ud);
						break;
					case aE:
						this.searchInBounds(this._ud.userKw, this._ud.bounds, this._ud);
						break;
					case ag:
						this.search(this._ud.userKw, this._ud.options, this._ud);
						break;
					case aY:
						this.searchNearby(this._ud.userKw, this._ud.center, this._ud.radius, this._ud);
						break;
					default:
						break
					}
				} else {
					this._setStatus(BMAP_STATUS_INVALID_REQUEST);
					this._triggerCbk(u.CBK_SEARCH_COMPLETE)
				}
			}
		},
		_getBestViewport: function (cI) {
			var T = this._opts.renderOptions,
				cM = T.map;
			if (cM) {
				if (cI.points) {
					var cN = cI.points;
					var cK = !T.autoViewport,
						cL = !T.selectFirstResult && T.autoViewport,
						cJ = cM.getViewport(cN, {
							margins: [30, 30, 30, 30]
						});
					if (!cK) {
						cM.setViewport(cJ, {
							enableAnimation: cL
						})
					}
				} else {
					cI.level = Q.getBestLevel(cI.level, cM);
					if (this._opts.renderOptions.autoViewport) {
						cM.centerAndZoom(cI.center, cI.level)
					}
				}
			}
		},
		_createCustomSearchInstance: function () {
			if (!this.customSearch) {
				var T = this;
				this.customSearch = new aD(T)
			}
		},
		select: function (T) {
			this.renderMap.select(T);
			this.renderList.select(T);
			this._curIndex = T
		}
	});
	
	function ci(T) {
		this.keyword = T.keyword || "";
		this._pageIndex = T.pageIdx || 0;
		this._currentNumPois = T.count || 0;
		this._numPois = T.total || 0;
		this._numPages = Math.ceil(T.total / T.pc);
		this.center = T.center;
		this.radius = T.radius;
		this.bounds = T.bounds;
		this.city = T.city;
		this.province = T.province;
		this.viewport = T.viewport;
		this.moreResultsUrl = T.moreUrl;
		this._pois = T.pois && T.pois.slice(0) || [];
		this._cityList = T.cityList && T.cityList.slice(0);
		this.suggestions = T.suggestions || []
	}
	a5.extend(ci.prototype, {
		getPoi: function (T) {
			if (this._pois[T]) {
				return this._pois[T]
			}
		},
		getNumPois: function () {
			return this._numPois
		},
		getNumPages: function () {
			return this._numPages
		},
		getCurrentNumPois: function () {
			return this._currentNumPois
		},
		getPageIndex: function () {
			return this._pageIndex
		},
		getCityList: function () {
			return this._cityList
		},
		toString: function () {
			return "LocalResult"
		}
	});
	
	function aD(T) {
		a5.lang.Class.call(this);
		this.localSearch = T;
		this.localSearch._curIndex = -1
	}
	a5.lang.inherits(aD, a5.lang.Class, "CustomSearch");
	a5.extend(aD.prototype, {
		search: function (T) {
			this.localSearch._isMultiKey = false;
			if (!this._check(T)) {
				return
			}
			var cI = this;
			this.localSearch._getIdByLoc(this.localSearch._loc, function (cL) {
				T.region = cL;
				var cK = cI._getParams(T);
				var cJ = {
					params: cK,
					options: T
				};
				cI.searchRequest(cK, cJ)
			})
		},
		_check: function () {
			var T = true;
			if (!bG) {
				this.localSearch._setStatus(BMAP_STATUS_INVALID_KEY);
				this.localSearch._triggerCbk(u.CBK_SEARCH_COMPLETE);
				T = false
			}
			return T
		},
		_getParams: function (cJ) {
			var cM = {
				region: cJ.region,
				page_size: this.localSearch.getPageCapacity(),
				ak: bG
			};
			if (cJ.page_index) {
				cM.page_index = cJ.page_index
			}
			if (cJ.keyword) {
				cM.q = cJ.keyword
			}
			if (cJ.bounds) {
				var cI = cJ.bounds.getSouthWest();
				var cL = cJ.bounds.getNorthEast();
				var cK = cL.lat + "," + cI.lng + ";" + cI.lat + "," + cL.lng;
				cM.bounds = cK
			}
			if (cJ.center && (cJ.center instanceof ca || cJ.center.point instanceof ca)) {
				var T = null;
				if (cJ.center instanceof ca) {
					T = cJ.center
				} else {
					if (cJ.center.point instanceof ca) {
						T = cJ.center.point
					}
				}
				cM.location = T.lat + "," + T.lng
			}
			if (typeof cJ.center == "string") {
				cM.q = cJ.center + " " + cJ.keyword
			}
			if (cJ.radius) {
				cM.radius = cJ.radius
			}
			if (cJ.customData && cJ.customData.databoxId) {
				cM.filter = "databox:" + cJ.customData.databoxId
			}
			return cM
		},
		searchRequest: function (cJ, T) {
			var cI = this;
			a8.request(function (cL, cK) {
				cI._rawDataCbk(cL, cK)
			}, cJ, T, "geosearch/poi")
		},
		_rawDataCbk: function (cK, cI) {
			this.localSearch.clearResults();
			this.localSearch._ud = cI;
			if (cK.status != 0) {
				this._results = new ci({
					keyword: cI.options.keyword,
					pc: this.localSearch.getPageCapacity(),
					center: cI.options.center || "",
					radius: cI.options.radius || "",
					bounds: cI.options.bounds || "",
					moreUrl: ""
				});
				if (cK.status == 5) {
					this.localSearch._setStatus(BMAP_STATUS_INVALID_KEY)
				} else {
					this.localSearch._setStatus(BMAP_STATUS_UNKNOWN_LOCATION)
				}
				this.localSearch._results = this._results;
				this.localSearch._triggerCbk(u.CBK_SEARCH_COMPLETE, this._results);
				this.localSearch.renderList.dispatchEvent("render");
				return
			}
			this._processRaw(cK, cI);
			this.localSearch.renderMap.dispatchEvent("render");
			this.localSearch.renderList.dispatchEvent("render");
			var T = cI.options.center;
			if (T && typeof T != "string" && !(T instanceof ca) && this.localSearch.getStatus() == BMAP_STATUS_SUCCESS) {
				this.localSearch.renderMap.addCenterPoi(T)
			}
			var cJ = this.localSearch._results;
			if (this.localSearch._opts.renderOptions.selectFirstResult && cJ && cJ.getNumPois() > 0) {
				var cL = this;
				setTimeout(function () {
					cL.localSearch.select(0)
				}, 240)
			}
		},
		_processRaw: function (cR, T) {
			var cM = cR.content || {},
				cN = this,
				cJ = [],
				cQ = [],
				cL = cM.length;
			for (var cK = 0, cS = cR.size; cK < cS && cM[cK]; cK++) {
				var cP = cM[cK];
				var cO = new ca(cP.longitude, cP.latitude);
				var cI = {
					title: cP.name,
					uid: cP.uid,
					point: cO,
					url: "",
					address: cP.addr,
					city: cP.city,
					province: cP.province,
					phoneNumber: cP.tel,
					postcode: cP.zip,
					type: cP.cla
				};
				cJ.push(cI);
				cQ.push(cO)
			}
			this._results = new ci({
				keyword: T.options.keyword,
				count: cR.size,
				total: cR.total,
				pageIdx: T.params.page_index,
				city: "",
				province: "",
				ccode: "",
				pois: cJ,
				pc: this.localSearch.getPageCapacity(),
				center: T.options.center,
				radius: T.options.radius,
				bounds: T.options.bounds,
				moreUrl: ""
			});
			if (cR.total == 0) {
				this.localSearch._setStatus(BMAP_STATUS_UNKNOWN_LOCATION)
			} else {
				this.localSearch._setStatus(BMAP_STATUS_SUCCESS)
			}
			this.localSearch._results = this._results;
			this.localSearch._triggerCbk(u.CBK_SEARCH_COMPLETE, this._results)
		},
		gotoPage: function (cI) {
			var T = this.localSearch._results;
			if (typeof cI == "number" && !isNaN(cI) && cI >= 0 && cI <= T.getNumPages() - 1) {
				this.localSearch._ud.params.page_index = cI;
				this.searchRequest(this.localSearch._ud.params, this.localSearch._ud)
			} else {
				this.localSearch._setStatus(BMAP_STATUS_INVALID_REQUEST);
				this.localSearch._triggerCbk(u.CBK_SEARCH_COMPLETE)
			}
		}
	});
	
	function ao(T) {
		a5.lang.Class.call(this);
		this.localSearch = T;
		this.map = T._opts.renderOptions.map;
		this._overlays = T._overlays;
		this.initialize()
	}
	a5.lang.inherits(ao, a5.lang.Class, "RenderMap");
	a5.extend(ao.prototype, {
		initialize: function () {
			this.addEventListener("render", this._render)
		},
		_render: function () {
			var cM = this,
				cN = this.localSearch._results._pois,
				cL = [];
			for (var cK = 0, T = cN.length; cK < T; cK++) {
				var cO = cN[cK];
				cL.push(cO.point);
				var cJ = this._addPoi(cO.point, cK, cO.title);
				if (!cJ) {
					continue
				}
				cO.marker = cJ;
				(function () {
					var cP = cK;
					cJ.addEventListener("click", function () {
						cM.localSearch.select(cP)
					})
				})();
				this._overlays.push(cJ)
			}
			var cI = {};
			cI.points = cL;
			this._getBestViewport(cI);
			this.localSearch._triggerCbk(u.CBK_MARKERS_SET, cN)
		},
		addCenterPoi: function (cK) {
			var T = cK;
			var cI = this;
			if (T && typeof T != "string" && !(T instanceof ca)) {
				var cJ = this.localSearch._centerMkr = al.addCenterPoi(this.map, T.point, T.title);
				cJ.addEventListener("click", function () {
					cI.localSearch.select(-1);
					cI.localSearch._curIndex = "c";
					var cL = cI._createInfoWindowByPoi(cK);
					cJ.openInfoWindow(cL)
				})
			}
		},
		_addPoi: function (cI, T, cJ) {
			if (this.localSearch._opts.pageCapacity <= a1.DEFAULT_PAGE_CAPACITY) {
				return al.addSearchPoi(this.map, cI, T, cJ)
			} else {
				return al.addSearchInBoundsPoi(this.map, cI, cJ)
			}
		},
		select: function (cI) {
			if (this.map && cI > -1 && this._overlays[cI]) {
				this.map.closeInfoWindow();
				var cK = this.localSearch._results.getPoi(cI);
				if (!cK) {
					return
				}
				var T = this._createInfoWindowByPoi(cK);
				var cJ = this._overlays[cI];
				cJ.openInfoWindow(T)
			}
		},
		_createInfoWindowByPoi: function (cJ) {
			var T = al.createSearchInfoWnd({
				title: cJ.title,
				addr: cJ.address,
				tel: cJ.phoneNumber,
				url: cJ.url,
				poiType: cJ.type
			});
			var cI = this;
			T.addEventListener("close", function () {
				cI.localSearch.renderList.clearSelected()
			});
			T.addEventListener("open", function () {
				cI.localSearch._triggerCbk(u.CBK_INFO_HTML_SET, cJ, al.getInfoWindowDom(cI.map))
			});
			return T
		},
		_getBestViewport: function (cI) {
			var T = this.localSearch._opts.renderOptions;
			if (this.map) {
				var cM = cI.points;
				var cK = !T.autoViewport,
					cL = !T.selectFirstResult && T.autoViewport,
					cJ = this.map.getViewport(cM, {
						margins: [30, 30, 30, 30]
					});
				if (!cK) {
					this.map.setViewport(cJ, {
						enableAnimation: cL
					})
				}
			}
		}
	});
	
	function N(T) {
		a5.lang.Class.call(this);
		this.localSearch = T;
		this.panel = T._opts.renderOptions.panel;
		this.initialize()
	}
	a5.lang.inherits(N, a5.lang.Class, "RenderList");
	a5.extend(N.prototype, {
		initialize: function () {
			this.addEventListener("render", this._render)
		},
		_render: function () {
			if (!this.panel) {
				return
			}
			var cI = Y("div", {
				style: "font:12px " + b9.fontFamily + ";border:1px solid #999;"
			}),
				cL = Y("div", {
					style: "background:#fff"
				}),
				cN = Y("ol", {
					style: "list-style:none;padding:0;margin:0"
				}),
				cK = this.localSearch.getStatus(),
				T = null;
			if (cK == BMAP_STATUS_SUCCESS) {
				for (var cM = 0, cJ = this.localSearch._results.getCurrentNumPois(); cM < cJ; cM++) {
					var cP = this._createItem(cM);
					cN.appendChild(cP)
				}
			} else {
				var cO = "";
				switch (cK) {
				case BMAP_STATUS_UNKNOWN_LOCATION:
					cO = "\u62b1\u6b49\uff0c\u672a\u627e\u5230\u76f8\u5173\u5730\u70b9\u3002";
					break;
				case BMAP_STATUS_INVALID_KEY:
					cO = "\u62b1\u6b49\uff0c\u60a8\u6240\u63d0\u4f9b\u7684key\u65e0\u6548\u3002";
					break
				}
				var cP = Y("li", {
					style: "margin:2px 0;padding:0 5px 0 3px;overflow:hidden;line-height:17px"
				});
				cP.innerHTML = cO;
				cN.appendChild(cP)
			}
			cL.appendChild(cN);
			cI.appendChild(cL);
			T = this._createResultsControl();
			cI.appendChild(T);
			this.panel.appendChild(cI);
			this.localSearch._triggerCbk(u.CBK_RESULTS_HTML_SET, cI)
		},
		_createItem: function (cK) {
			var T = this.localSearch._results;
			if (!T || !T.getPoi(cK)) {
				return
			}
			var cI = T.getPoi(cK),
				cR = Y("li", {
					style: "margin:2px 0;padding:0 5px 0 3px;cursor:pointer;overflow:hidden;line-height:17px"
				});
			if (this.localSearch._curIndex > -1 && cK == this.localSearch._curIndex) {
				cR.style.backgroundColor = "#f0f0f0"
			}
			var cJ = cK == 0 ? cK + 2 + "px" : "-" + (cK * 20 - 2) + "px";
			if (this.localSearch._opts.pageCapacity > a1.DEFAULT_PAGE_CAPACITY) {
				cJ = "-218px"
			}
			var cQ = ["<span style='background:url(" + v + "bmap/red_labels.gif) 0 " + cJ + " no-repeat;padding-left:10px;margin-right:3px'>&nbsp;</span>"];
			var cP, cN;
			var cL = this.localSearch._results.keyword;
			var cO = new RegExp(cL, "ig");
			if (cI.title) {
				cP = cI.title.replace(cO, "<b>$&</b>")
			}
			cQ.push("<span style='color:#00c;text-decoration:underline'>" + cP + "</span>");
			if (cI.address) {
				cN = cI.address.replace(cO, "<b>$&</b>");
				cQ.push("<span style='color:#666;'> - " + cN + "</span>")
			}
			cR.innerHTML = cQ.join("");
			var cM = this;
			cR.onclick = function () {
				cM.localSearch.select(cK)
			};
			return cR
		},
		_createResultsControl: function () {
			var cI = this,
				cJ = Y("div", {
					style: "white-space:nowrap;text-align:right;background:#e5ecf9;margin-top:5px;padding:2px;overflow:hidden;zoom:1;"
				});
			var T = Y("div", {
				style: "float:left;margin-right:5px"
			});
			if (this.localSearch._results.getNumPages() > 1) {
				var cK = new az(T, function (cL) {
					cI.localSearch.gotoPage(cL - 1)
				}, {
					pageCount: cI.localSearch._results.getNumPages(),
					page: cI.localSearch._results.getPageIndex() + 1,
					update: false
				})
			}
			cJ.appendChild(T);
			return cJ
		},
		clearSelected: function () {
			if (this.panel) {
				if (typeof this.localSearch._curIndex == "number" && this.localSearch._curIndex != -1 && this.panel.getElementsByTagName("li")[this.localSearch._curIndex]) {
					this.panel.getElementsByTagName("li")[this.localSearch._curIndex].style.backgroundColor = ""
				}
			}
			this.localSearch._curIndex = -1
		},
		select: function (cI) {
			if (this.panel) {
				var T = this.localSearch._curIndex;
				if (typeof T == "number" && T != -1 && this.panel.getElementsByTagName("li")[T]) {
					this.panel.getElementsByTagName("li")[T].style.backgroundColor = ""
				}
				if (typeof cI == "number" && cI != -1 && this.panel.getElementsByTagName("li")[cI]) {
					this.panel.getElementsByTagName("li")[cI].style.backgroundColor = "#f0f0f0"
				}
			}
		}
	});