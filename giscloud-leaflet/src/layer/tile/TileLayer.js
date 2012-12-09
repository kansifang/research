/*
 * L.TileLayer is used for standard xyz-numbered tile layers.
 * L.TileLayer 被用来支援 xyz-数字化 切片图层.
 */

L.TileLayer = L.Class.extend({
	//包含事件
	includes: L.Mixin.Events,
	//切片图层默认参数
	options: {
		//最小级别
		minZoom: 0,
		//最大级别
		maxZoom: 18,
		//切片大小
		tileSize: 256,
		// 子域名:unknown
		subdomains: 'abc',
		//错误时的取图地址
		errorTileUrl: '',
		//属性
		attribution: '',
		//透明度
		opacity: 1,
		//方案
		scheme: 'xyz',
		//连续的世界图
		continuousWorld: false,
		//不循环
		noWrap: false,
		//视野偏移量
		zoomOffset: 0,
		//视野逆转：unknown
		zoomReverse: false,
		/*
		 * URL:http://mobile.51cto.com/hot-276474.htm
		 */
		//检测视网膜:unknown
		detectRetina: false,
		// 卸载隐形切片，即移出视野的切片
		unloadInvisibleTiles: L.Browser.mobile,
		//更新空闲时:unknown
		updateWhenIdle: L.Browser.mobile,
		//切片复用:unknown
		reuseTiles: false
	},
	//初始化
	initialize: function (url, options) {
		//混合参数
		options = L.Util.setOptions(this, options);
		
		// detecting retina displays, adjusting tileSize and zoom levels
		//视网膜屏显示，自适应切片大小和视野级别
		if (options.detectRetina && window.devicePixelRatio > 1 && options.maxZoom > 0) {
			//切片大小缩小一半
			options.tileSize = Math.floor(options.tileSize / 2);
			//视野级别增加一码
			options.zoomOffset++;
			//最大最小视野级别减小一码
			if (options.minZoom > 0) {
				options.minZoom--;
			}
			this.options.maxZoom--;
		}

		this._url = url;

		var subdomains = this.options.subdomains;

		if (typeof subdomains === 'string') {
			this.options.subdomains = subdomains.split('');
		}
	},
	//图层被添加时调用的接口
	onAdd: function (map, insertAtTheBottom) {
		this._map = map;
		this._insertAtTheBottom = insertAtTheBottom;

		// create a container div for tiles
		//初始化本图层容器
		this._initContainer();

		// create an image to clone for tiles
		//为切片创建切片克隆
		this._createTileProto();
		
		// set up events
		//注册视野重置事件
		map.on('viewreset', this._resetCallback, this);
		//注册地图移动事件
		map.on('moveend', this._update, this);
		
		//间歇时更新
		if (!this.options.updateWhenIdle) {
			this._limitedUpdate = L.Util.limitExecByInterval(this._update, 150, this);
			map.on('move', this._limitedUpdate, this);
		}
		//重置图层
		this._reset();
		//更新切片
		this._update();
	},
	//删除时执行的回调
	onRemove: function (map) {
		map._panes.tilePane.removeChild(this._container);
		//注销视野重置事件
		map.off('viewreset', this._resetCallback, this);
		//注销地图移动事件
		map.off('moveend', this._update, this);
		
		if (!this.options.updateWhenIdle) {
			map.off('move', this._limitedUpdate, this);
		}

		this._container = null;
		this._map = null;
	},
	//获取属性
	getAttribution: function () {
		return this.options.attribution;
	},
	//设置透明度
	setOpacity: function (opacity) {
		this.options.opacity = opacity;

		if (this._map) {
			this._updateOpacity();
		}

		// stupid webkit hack to force redrawing of tiles
		var i, tiles = this._tiles;

		if (L.Browser.webkit) {//如果是webkit内核，则单个接片都增加透明度
			for (i in tiles) {
				if (tiles.hasOwnProperty(i)) {
					tiles[i].style.webkitTransform += ' translate(0,0)';
				}
			}
		}
	},
	//更新透明度
	_updateOpacity: function () {
		//容器设置透明度
		L.DomUtil.setOpacity(this._container, this.options.opacity);
	},
	//初始化地图容器
	_initContainer: function () {
		//获取切片跟容器
		var tilePane = this._map._panes.tilePane,
			first = tilePane.firstChild;

		if (!this._container || tilePane.empty) {
			//创建切片图层容器
			this._container = L.DomUtil.create('div', 'leaflet-layer');
			
			if (this._insertAtTheBottom && first) {//加入到最前
				tilePane.insertBefore(this._container, first);
			} else {//否则，加到最后
				tilePane.appendChild(this._container);
			}

			if (this.options.opacity < 1) {//如果需要设置透明度
				this._updateOpacity();
			}
		}
	},
	//重置图层回调函数
	_resetCallback: function (e) {
		this._reset(e.hard);
	},
	//重置图层
	_reset: function (clearOldContainer) {
		var key, tiles = this._tiles;

		for (key in tiles) {
			if (tiles.hasOwnProperty(key)) {
				this.fire('tileunload', {tile: tiles[key]});
			}
		}

		this._tiles = {};

		if (this.options.reuseTiles) {//切片复用
			this._unusedTiles = [];
		}

		if (clearOldContainer && this._container) {
			this._container.innerHTML = "";
		}
		//初始化容器
		this._initContainer();
	},
	//更新切片图层
	_update: function (e) {
		//如果还在移动中，则返回
		//ps:如拖拽调整一次结束才更新切片
		if (this._map._panTransition && this._map._panTransition._inProgress) { return; }
		
		var bounds   = this._map.getPixelBounds(),//获取当前切片Bounds
		    zoom     = this._map.getZoom(),
		    tileSize = this.options.tileSize;
		//如果当前视野级别不再此图层视野级别要求内，则返回
		if (zoom > this.options.maxZoom || zoom < this.options.minZoom) {
			return;
		}
		//西北切片坐标
		var nwTilePoint = new L.Point(
				Math.floor(bounds.min.x / tileSize),
				Math.floor(bounds.min.y / tileSize)),
			//东南切片坐标
			seTilePoint = new L.Point(
				Math.floor(bounds.max.x / tileSize),
				Math.floor(bounds.max.y / tileSize)),
			//像素bounds
			tileBounds = new L.Bounds(nwTilePoint, seTilePoint);
		//加载切片
		this._addTilesFromCenterOut(tileBounds);
		//卸载隐形切片、切片复用
		if (this.options.unloadInvisibleTiles || this.options.reuseTiles) {
			//删除范围外的切片
			this._removeOtherTiles(tileBounds);
		}
	},
	//加载切片
	_addTilesFromCenterOut: function (bounds) {
		var queue = [],//待添加切片号数组
			center = bounds.getCenter();//bounds中心切片号
		
		for (var j = bounds.min.y; j <= bounds.max.y; j++) {
			for (var i = bounds.min.x; i <= bounds.max.x; i++) {
				if (!((i + ':' + j) in this._tiles)) {//如果此切片号不存在，则添加
					queue.push(new L.Point(i, j));//切片号坐标对象
				}
			}
		}

		// load tiles in order of their distance to center
		//对数组进行排序
		queue.sort(function (a, b) {
			return a.distanceTo(center) - b.distanceTo(center);
		});
		
		var fragment = document.createDocumentFragment();
		//切片预加载数量
		this._tilesToLoad = queue.length;

		var k, len;
		for (k = 0, len = this._tilesToLoad; k < len; k++) {
			this._addTile(queue[k], fragment);//加载切片
		}
		//记载已加切片到容器
		this._container.appendChild(fragment);
	},
	//删除额外切片
	_removeOtherTiles: function (bounds) {
		var kArr, x, y, key, tile;

		for (key in this._tiles) {
			if (this._tiles.hasOwnProperty(key)) {
				kArr = key.split(':');
				x = parseInt(kArr[0], 10);
				y = parseInt(kArr[1], 10);

				// remove tile if it's out of bounds
				//删除超出范围的切片
				//ps:可以使用bounds.contains方法来判断
				if (x < bounds.min.x || x > bounds.max.x || y < bounds.min.y || y > bounds.max.y) {
					this._removeTile(key);
				}
			}
		}
	},
	//删除切片
	_removeTile: function (/*切片号*/key) {
		var tile = this._tiles[key];
		//触发切片卸载事件
		this.fire("tileunload", {tile: tile, url: tile.src});
		//判断切片是否加载，并在容器内，安全删除的方法
		if (tile.parentNode === this._container) {
			this._container.removeChild(tile);
		}
		//如果需要复用，则缓存
		if (this.options.reuseTiles) {
			this._unusedTiles.push(tile);
		}
		//清空URL
		tile.src = L.Util.emptyImageUrl;
		//删除此切片对象
		delete this._tiles[key];
	},
	//增加切片
	_addTile: function (/*切片号*/tilePoint, /*装载容器*/container) {
		var tilePos = this._getTilePos(tilePoint),//获取切片位置
			zoom = this._map.getZoom(),//获取切片视野级别
		    key = tilePoint.x + ':' + tilePoint.y,
		    limit = Math.pow(2, this._getOffsetZoom(zoom));//该级别时，最大像素宽度

		// wrap tile coordinates
		if (!this.options.continuousWorld) {//世界图支持
			if (!this.options.noWrap) {//是否连续
				tilePoint.x = ((tilePoint.x % limit) + limit) % limit;//横向修正
			}else if (tilePoint.x < 0 || tilePoint.x >= limit) {//超出范围，不叠加
				this._tilesToLoad--;
				return;
			}

			if (tilePoint.y < 0 || tilePoint.y >= limit) {//超出范围，不处理
				this._tilesToLoad--;
				return;
			}
		}

		// get unused tile - or create a new tile
		//获取切片节点
		var tile = this._getTile();
		//设置切片位置
		L.DomUtil.setPosition(tile, tilePos);
		//缓存切片对象
		this._tiles[key] = tile;
		//方案
		if (this.options.scheme === 'tms') {
			tilePoint.y = limit - tilePoint.y - 1;
		}
		//加载切片
		this._loadTile(tile, tilePoint, zoom);
		//将切片放入容器
		container.appendChild(tile);
	},
	//获取偏移后的视野级别
	_getOffsetZoom: function (zoom) {
		var options = this.options;
		zoom = options.zoomReverse ? options.maxZoom - zoom : zoom;
		return zoom + options.zoomOffset;
	},
	//根据切片号获取切片位置
	_getTilePos: function (tilePoint) {
		var origin = this._map.getPixelOrigin(),
			tileSize = this.options.tileSize;

		return tilePoint.multiplyBy(tileSize).subtract(origin);
	},

	// image-specific code (override to implement e.g. Canvas or SVG tile layer)

	getTileUrl: function (tilePoint, zoom) {
		var subdomains = this.options.subdomains,
			index = (tilePoint.x + tilePoint.y) % subdomains.length,
			s = this.options.subdomains[index];

		return L.Util.template(this._url, L.Util.extend({
			s: s,
			z: this._getOffsetZoom(zoom),
			x: tilePoint.x,
			y: tilePoint.y
		}, this.options));
	},
	//为创建切片节点克隆对象
	_createTileProto: function () {
		var img = this._tileImg = L.DomUtil.create('img', 'leaflet-tile');
		//for ie6, 设置是否显示图片工具条
		img.galleryimg = 'no';
		
		var tileSize = this.options.tileSize;
		img.style.width = tileSize + 'px';
		img.style.height = tileSize + 'px';
	},
	//获取
	_getTile: function () {
		//切片复用
		if (this.options.reuseTiles && this._unusedTiles.length > 0) {
			var tile = this._unusedTiles.pop();
			this._resetTile(tile);
			return tile;
		}
		//否则，创建切片
		return this._createTile();
	},
	//重置切片
	_resetTile: function (tile) {
		// Override if data stored on a tile needs to be cleaned up before reuse
	},
	//创建切片
	_createTile: function () {
		var tile = this._tileImg.cloneNode(false);
		//阻止切片默认行为
		tile.onselectstart = tile.onmousemove = L.Util.falseFn;
		return tile;
	},
	//加载切片
	_loadTile: function (tile, tilePoint, zoom) {
		tile._layer  = this;
		tile.onload  = this._tileOnLoad;//切片加载事件
		tile.onerror = this._tileOnError;//切片加载错误事件

		tile.src     = this.getTileUrl(tilePoint, zoom);
	},
	//切片加载完毕
    _tileLoaded: function () {
        this._tilesToLoad--;
        if (!this._tilesToLoad) {//如果切片全部加载完毕
            this.fire('load');//触发切片加载事件
        }
    },
	//切片加载
	_tileOnLoad: function (e) {
		var layer = this._layer;
		//unknown
		this.className += ' leaflet-tile-loaded';
		//触发切片加载事件
		layer.fire('tileload', {
			tile: this,
			url: this.src
		});
		//切片加载完成判断
        layer._tileLoaded();
	},
	//切片加载错误
	_tileOnError: function (e) {
		var layer = this._layer;
		layer.fire('tileerror', {
			tile: this,
			url: this.src
		});

		var newUrl = layer.options.errorTileUrl;
		if (newUrl) {
			this.src = newUrl;
		}

        layer._tileLoaded();
    }
});
