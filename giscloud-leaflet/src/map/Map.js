/*
 * L.Map is the central class of the API - it is used to create a map.
 * L.Map 是API的入口类，用于创建地图
 */

L.Map = L.Class.extend({
	//包含事件类
	includes: L.Mixin.Events,
	//原始参数对象
	options: {
		//默认坐标参考，即通俗的900913
		crs: L.CRS.EPSG3857,

		/*
		center: LatLng,
		zoom: Number,
		layers: Array,
		*/
		//渐变动画
		fadeAnimation: L.DomUtil.TRANSITION && !L.Browser.android,
		trackResize: true
	},
	//实例化
	initialize: function (id, options) { // (HTMLElement or String, Object)
		//更新参数
		options = L.Util.setOptions(this, options);
		//获取地图对象
		this._initContainer(id);
		//初始化布局
		this._initLayout();
		//暂未看懂
		this._initHooks();
		//初始化事件
		this._initEvents();
		//如果存在最大视野，则设置视野
		if (options.maxBounds) {
			this.setMaxBounds(options.maxBounds);
		}
		//设置视野级别和中心点
		if (options.center && typeof options.zoom !== 'undefined') {
			this.setView(options.center, options.zoom, true);
		}
		//初始化图层
		this._initLayers(options.layers);
	},


	//设置视野，含中心点和视野级别	
	// 被Map.PanAnimation.js中animation-powered接口替换
	setView: function (center, zoom) {
		this._resetView(center, this._limitZoom(zoom));
		return this;
	},
	//设置视野级别
	setZoom: function (zoom) { // (Number)
		return this.setView(this.getCenter(), zoom);
	},
	//视野放大
	zoomIn: function () {
		return this.setZoom(this._zoom + 1);
	},
	//视野缩小
	zoomOut: function () {
		return this.setZoom(this._zoom - 1);
	},
	//设置适合的视野级别
	fitBounds: function (bounds) { // (LatLngBounds)
		var zoom = this.getBoundsZoom(bounds);
		return this.setView(bounds.getCenter(), zoom);
	},
	//设置适合的世界图范围
	fitWorld: function () {
		var sw = new L.LatLng(-60, -170),
		    ne = new L.LatLng(85, 179);

		return this.fitBounds(new L.LatLngBounds(sw, ne));
	},
	//移动到指定点
	panTo: function (center) { // (LatLng)
		return this.setView(center, this._zoom);
	},
	//按像素移动
	panBy: function (offset) { // (Point)
		// replaced with animated panBy in Map.Animation.js
		this.fire('movestart');

		this._rawPanBy(offset);

		this.fire('move');
		return this.fire('moveend');
	},
	//设置最大bounds 
	setMaxBounds: function (bounds) {
		this.options.maxBounds = bounds;

		if (!bounds) {//如果不存在，则禁用最小级别
			this._boundsMinZoom = null;
			return this;
		}
		//计算最小视野级别
		var minZoom = this.getBoundsZoom(bounds, true);
		//设置最小视野级别
		this._boundsMinZoom = minZoom;

		if (this._loaded) {//地图加载完成
			if (this._zoom < minZoom) {//当前级别小于最小级别，则重新设置视野
				this.setView(bounds.getCenter(), minZoom);
			} else {//否则移动视野
				this.panInsideBounds(bounds);
			}
		}

		return this;
	},
	//移动到当前世界图副内
	panInsideBounds: function (bounds) {
		//当前bounds
		var viewBounds = this.getBounds(),
			//当前：西南坐标
		    viewSw = this.project(viewBounds.getSouthWest()),
			//当前：东北坐标
		    viewNe = this.project(viewBounds.getNorthEast()),
			//目标:西南坐标
		    sw = this.project(bounds.getSouthWest()),
			//目标：东北坐标
		    ne = this.project(bounds.getNorthEast()),
			//横向移动量
		    dx = 0,
			//纵向移动量
		    dy = 0;

		if (viewNe.y < ne.y) { // north
			dy = ne.y - viewNe.y;
		}
		if (viewNe.x > ne.x) { // east
			dx = ne.x - viewNe.x;
		}
		if (viewSw.y > sw.y) { // south
			dy = sw.y - viewSw.y;
		}
		if (viewSw.x < sw.x) { // west
			dx = sw.x - viewSw.x;
		}
		//地图移动，第三参数：求整
		return this.panBy(new L.Point(dx, dy, true));
	},
	//叠加图层
	addLayer: function (layer, insertAtTheBottom) {//此方法太大，需重构
		//生成此图层唯一ID
		var id = L.Util.stamp(layer);
		//如果已经添加，则返回
		if (this._layers[id]) { return this; }
		//保存当前图层
		this._layers[id] = layer;

		// TODO getMaxZoom, getMinZoom in ILayer (instead of options)
		if (layer.options && !isNaN(layer.options.maxZoom)) {//如果存在最大级别限制
			this._layersMaxZoom = Math.max(this._layersMaxZoom || 0, layer.options.maxZoom);
		}
		if (layer.options && !isNaN(layer.options.minZoom)) {//如果最在最小级别限制
			this._layersMinZoom = Math.min(this._layersMinZoom || Infinity, layer.options.minZoom);
		}
		
		// TODO looks ugly, refactor!!!
		// 看，多恶心，重构！！
		if (this.options.zoomAnimation && L.TileLayer && (layer instanceof L.TileLayer)) {//如果是切片图层
			this._tileLayersNum++;
            this._tileLayersToLoad++;
            layer.on('load', this._onTileLayerLoad, this);
		}
		//地图完成事件，回调函数
		var onMapLoad = function () {
			//叠加图层的onAdd方法
			layer.onAdd(this, insertAtTheBottom);
			//触发叠加图层事件
			this.fire('layeradd', {layer: layer});
		};
		
		if (this._loaded) {//如果地图加载完毕，直接加入
			onMapLoad.call(this);
		} else {//否则，加入事件待加
			this.on('load', onMapLoad, this);
		}
		//返回原型链
		return this;
	},
	//删除图层
	removeLayer: function (layer) {
		//生成此图层唯一ID
		var id = L.Util.stamp(layer);
		//如果此图层已删除，则返回
		if (!this._layers[id]) { return; }
		//删除此图层，清理此图层对象
		layer.onRemove(this);
		delete this._layers[id];

		// TODO looks ugly, refactor
		// 看，多恶心，重构！！
		if (this.options.zoomAnimation && L.TileLayer && (layer instanceof L.TileLayer)) {//如果是切片图层
			this._tileLayersNum--;
            this._tileLayersToLoad--;
            layer.off('load', this._onTileLayerLoad, this);
		}
		//触发图层删除事件
		return this.fire('layerremove', {layer: layer});
	},
	//是否已经叠加某图层
	hasLayer: function (layer) {
		var id = L.Util.stamp(layer);
		return this._layers.hasOwnProperty(id);//高明啊！
	},
	//无效大小
	invalidateSize: function () {
		//旧的size
		var oldSize = this.getSize();
		//标识地图大小已改变
		this._sizeChanged = true;
		
		if (this.options.maxBounds) {//如果设置了最大bounds
			this.setMaxBounds(this.options.maxBounds);//调整最大Bounds
		}
		//如果地图未加载完毕，则返回
		if (!this._loaded) { return this; }
		//计算偏移：旧大小减去当前大小，处以2，并求整
		var offset = oldSize.subtract(this.getSize()).divideBy(2, true);
		//根据偏移量移动地图
		this._rawPanBy(offset);
		//触发地图移动事件
		this.fire('move');
		//200毫秒后触发移动结束事件
		clearTimeout(this._sizeTimer);
		//通过this的fire 方法来触发moveend方法
		this._sizeTimer = setTimeout(L.Util.bind(this.fire, this, 'moveend'), 200);
		//返回原型链
		return this;
	},

	// TODO handler.addTo
	//增加挂在方法
	addHandler: function (name, HandlerClass) {
		if (!HandlerClass) { return; }
		this[name] = new HandlerClass(this);

		if (this.options[name]) {
			this[name].enable();
		}
		//返回原型链
		return this;
	},


	// public methods for getting map state
	//获取地图中心点
	getCenter: function (unbounded) { // (Boolean) -> LatLng
		var viewHalf = this.getSize().divideBy(2),//地图大小除以2
		    centerPoint = this._getTopLeftPoint().add(viewHalf);//换算得到地图中心点像素坐标
		//反投影得到经纬度坐标
		return this.unproject(centerPoint, this._zoom, unbounded);
	},
	//返回当前视野级别
	getZoom: function () {
		return this._zoom;
	},
	//获取bounds
	getBounds: function () {
		var bounds = this.getPixelBounds(),//当前像素范围
		    sw = this.unproject(new L.Point(bounds.min.x, bounds.max.y), this._zoom, true),
		    ne = this.unproject(new L.Point(bounds.max.x, bounds.min.y), this._zoom, true);
		//返回经纬度范围
		return new L.LatLngBounds(sw, ne);
	},
	//获取最小级别
	getMinZoom: function () {
		var z1 = this.options.minZoom || 0,//参数的最小级别
		    z2 = this._layersMinZoom || 0,//图层的最小级别
		    z3 = this._boundsMinZoom || 0;//bounds的最小级别
		//比较获取最大
		return Math.max(z1, z2, z3);
	},
	//获取最大级别
	getMaxZoom: function () {
		var z1 = typeof this.options.maxZoom === 'undefined' ? Infinity : this.options.maxZoom,
		    z2 = typeof this._layersMaxZoom  === 'undefined' ? Infinity : this._layersMaxZoom;
		//比较获取最小
		return Math.min(z1, z2);
	},
	//计算获取bounds的视野级别
	getBoundsZoom: function (bounds, inside) { // (LatLngBounds, Boolean) -> Number
		var size = this.getSize(),//获取当前大小
		    zoom = this.options.minZoom || 0,
		    maxZoom = this.getMaxZoom(),//获取最大视野级别
		    ne = bounds.getNorthEast(),//东北
		    sw = bounds.getSouthWest(),//西南
		    boundsSize,
		    nePoint,
		    swPoint,
		    zoomNotFound = true;

		if (inside) {
			zoom--;
		}
		//通过各个视野级别比对的方式确定适当的比对
		do {
			zoom++;
			nePoint = this.project(ne, zoom);
			swPoint = this.project(sw, zoom);
			boundsSize = new L.Point(nePoint.x - swPoint.x, swPoint.y - nePoint.y);

			if (!inside) {
				zoomNotFound = boundsSize.x <= size.x && boundsSize.y <= size.y;
			} else {
				zoomNotFound = boundsSize.x < size.x || boundsSize.y < size.y;
			}
		} while (zoomNotFound && zoom <= maxZoom);

		if (zoomNotFound && inside) {
			return null;
		}
		
		return inside ? zoom : zoom - 1;
	},
	//返回当前地图大小
	getSize: function () {
		//当前窗体不存在或已改变
		if (!this._size || this._sizeChanged) {
			//重新计算大小
			this._size = new L.Point(this._container.clientWidth, this._container.clientHeight);
			this._sizeChanged = false;//标识窗体未改变
		}
		return this._size;
	},
	//获取像素bounds
	getPixelBounds: function () {
		var topLeftPoint = this._getTopLeftPoint();
		return new L.Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));
	},
	//获取像素原点，左上角点
	getPixelOrigin: function () {
		return this._initialTopLeftPoint;
	},
	//获取图层根容器
	getPanes: function () {
		return this._panes;
	},
	//获取地图容器
	getContainer: function () {
		return this._container;
	},

	// conversion methods
	//鼠标事件转容器坐标
	mouseEventToContainerPoint: function (e) { // (MouseEvent)
		return L.DomEvent.getMousePosition(e, this._container);
	},
	//鼠标事件转图层坐标
	mouseEventToLayerPoint: function (e) { // (MouseEvent)
		return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
	},
	//鼠标事件转经纬度
	mouseEventToLatLng: function (e) { // (MouseEvent)
		return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
	},
	//容器点转图层点
	containerPointToLayerPoint: function (point) { // (Point)
		return point.subtract(L.DomUtil.getPosition(this._mapPane));
	},
	//图层点转容器点
	layerPointToContainerPoint: function (point) { // (Point)
		return point.add(L.DomUtil.getPosition(this._mapPane));
	},
	//图层点转经纬度
	layerPointToLatLng: function (point) { // (Point)
		return this.unproject(point.add(this._initialTopLeftPoint));
	},
	//经纬度转图层点
	latLngToLayerPoint: function (latlng) { // (LatLng)
		return this.project(latlng)._round()._subtract(this._initialTopLeftPoint);
	},
	//容器点转经纬度
	containerPointToLatLng: function (point) {
		return this.layerPointToLatLng(this.containerPointToLayerPoint(point));
	},
	//经纬度转容器点
	latLngToContainerPoint: function (latlng) {
		return this.layerPointToContainerPoint(this.latLngToLayerPoint(latlng));
	},
	//投影
	project: function (latlng, zoom) { // (LatLng[, Number]) -> Point
		zoom = typeof zoom === 'undefined' ? this._zoom : zoom;
		//调用坐标参考投影
		return this.options.crs.latLngToPoint(latlng, zoom);
	},
	//反投影
	unproject: function (point, zoom, unbounded) { // (Point[, Number, Boolean]) -> LatLng
		// TODO remove unbounded, making it true all the time?
		zoom = typeof zoom === 'undefined' ? this._zoom : zoom;
		//调用坐标参考
		return this.options.crs.pointToLatLng(point, zoom, unbounded);
	},


	// private methods that modify map state
	//获取地图容器，实例化表示
	_initContainer: function (id) {
		var container = this._container = L.DomUtil.get(id);
		//拒绝地图重复实例化
		if (container._leaflet) {
			throw new Error("Map container is already initialized.");
		}
		//表示地图已实例化
		container._leaflet = true;
	},
	// 地图容器样式
	_initLayout: function () {
		var container = this._container;

		container.innerHTML = '';
		container.className += ' leaflet-container';

		if (L.Browser.touch) {
			container.className += ' leaflet-touch';
		}

		if (this.options.fadeAnimation) {
			container.className += ' leaflet-fade-anim';
		}

		var position = L.DomUtil.getStyle(container, 'position');

		if (position !== 'absolute' && position !== 'relative') {
			container.style.position = 'relative';
		}

		this._initPanes();
		
		if (this._initControlPos) {//初始化控件
			this._initControlPos();
		}
	},
	//初始化内部容器
	_initPanes: function () {
		//节点容器对象
		var panes = this._panes = {};
		//地图图层集节点容器
		this._mapPane = panes.mapPane = this._createPane('leaflet-map-pane', this._container);
			//切片根容器
			this._tilePane = panes.tilePane = this._createPane('leaflet-tile-pane', this._mapPane);
			//对象根容器
			this._objectsPane = panes.objectsPane = this._createPane('leaflet-objects-pane', this._mapPane);
		
		//创建阴影容器
		panes.shadowPane = this._createPane('leaflet-shadow-pane');
		//创建覆盖物容器
		panes.overlayPane = this._createPane('leaflet-overlay-pane');
		//创建点标注覆盖物容器
		panes.markerPane = this._createPane('leaflet-marker-pane');
		//创建信息窗体容器
		panes.popupPane = this._createPane('leaflet-popup-pane');
	},
	//创建div容器
	_createPane: function (className, container) {
		return L.DomUtil.create('div', className, container || this._objectsPane);
	},
	
	_initializers: [],
	//初始化挂载
	_initHooks: function () {
		var i, len;
		for (i = 0, len = this._initializers.length; i < len; i++) {
			this._initializers[i].call(this);
		}
	},
	//重新设置视野
	_resetView: function (center, zoom,/*保存地图偏移*/preserveMapOffset, /*视野调整动画*/afterZoomAnim) {

		var zoomChanged = (this._zoom !== zoom);

		if (!afterZoomAnim) {
			this.fire('movestart');

			if (zoomChanged) {
				this.fire('zoomstart');
			}
		}

		this._zoom = zoom;

		this._initialTopLeftPoint = this._getNewTopLeftPoint(center);

		if (!preserveMapOffset) {
			L.DomUtil.setPosition(this._mapPane, new L.Point(0, 0));
		} else {
			this._initialTopLeftPoint._add(L.DomUtil.getPosition(this._mapPane));
		}

		this._tileLayersToLoad = this._tileLayersNum;
		//触发视野移动事件
		this.fire('viewreset', {hard: !preserveMapOffset});
		//触发地图移动事件
		this.fire('move');

		if (zoomChanged || afterZoomAnim) {
			this.fire('zoomend');
		}

		this.fire('moveend');

		if (!this._loaded) {
			this._loaded = true;
			this.fire('load');
		}
	},
	//初始化图层
	_initLayers: function (layers) {
		//兼容传参方式
		layers = layers ? (layers instanceof Array ? layers : [layers]) : [];
		//清空图层缓存对象
		this._layers = {};
		//重置切片数字
		this._tileLayersNum = 0;
		var i, len;
		//循环图层集
		for (i = 0, len = layers.length; i < len; i++) {
			this.addLayer(layers[i]);//添加图层
		}
	},
	//移动地图
	_rawPanBy: function (offset) {
		//获取新位置：当前容器位置减去偏移量
		var newPos = L.DomUtil.getPosition(this._mapPane).subtract(offset);
		//修改地图
		L.DomUtil.setPosition(this._mapPane, newPos);
	},


	// map events
	//初始化事件
	_initEvents: function () {
		if (!L.DomEvent) { return; }

		L.DomEvent.addListener(this._container, 'click', this._onMouseClick, this);

		var events = ['dblclick', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'contextmenu'];

		var i, len;

		for (i = 0, len = events.length; i < len; i++) {
			L.DomEvent.addListener(this._container, events[i], this._fireMouseEvent, this);
		}

		if (this.options.trackResize) {
			L.DomEvent.addListener(window, 'resize', this._onResize, this);
		}
	},
	//重新调整大小回调
	_onResize: function () {
		L.Util.requestAnimFrame(this.invalidateSize, this, false, this._container);
	},
	//鼠标点击回调
	_onMouseClick: function (e) {
		if (!this._loaded || (this.dragging && this.dragging.moved())) { return; }

		this.fire('pre' + e.type);
		this._fireMouseEvent(e);
	},
	//触发鼠标事件
	_fireMouseEvent: function (e) {
		//地图没加载完毕则返回
		if (!this._loaded) { return; }
		//事件类型
		var type = e.type;
		//替换mouseenter/mouseleave
		type = (type === 'mouseenter' ? 'mouseover' : (type === 'mouseleave' ? 'mouseout' : type));
		//如果不是自由事件监听，则返回
		if (!this.hasEventListeners(type)) { return; }

		if (type === 'contextmenu') {
			L.DomEvent.preventDefault(e);
		}

		var containerPoint = this.mouseEventToContainerPoint(e),
			layerPoint = this.containerPointToLayerPoint(containerPoint),
			latlng = this.layerPointToLatLng(layerPoint);

		this.fire(type, {
			latlng: latlng,
			layerPoint: layerPoint,
			containerPoint: containerPoint,
			originalEvent: e
		});
	},
	//图层加载完毕回调
	_onTileLayerLoad: function () {
		// TODO super-ugly, refactor!!!
		// clear scaled tiles after all new tiles are loaded (for performance)
		this._tileLayersToLoad--;
		if (this._tileLayersNum && !this._tileLayersToLoad && this._tileBg) {
			clearTimeout(this._clearTileBgTimer);
			this._clearTileBgTimer = setTimeout(L.Util.bind(this._clearTileBg, this), 500);
		}
	},


	// private methods for getting map state
	//获取左上角点，参考点
	_getTopLeftPoint: function () {
		if (!this._loaded) {
			throw new Error('Set map center and zoom first.');
		}
		//获取图层偏移位置
		var mapPanePos = L.DomUtil.getPosition(this._mapPane);
		//初始化时左上角点
		return this._initialTopLeftPoint.subtract(mapPanePos);
	},
	//重新获取新左上角点
	_getNewTopLeftPoint: function (center) {
		var viewHalf = this.getSize().divideBy(2);//获取视野大小一半
		// TODO round on display, not calculation to increase precision?
		return this.project(center)._subtract(viewHalf)._round();
	},
	//获取有效级别
	_limitZoom: function (zoom) {
		var min = this.getMinZoom(),
			max = this.getMaxZoom();

		return Math.max(min, Math.min(max, zoom));
	}
});

L.Map.addInitHook = function (fn) {
	var args = Array.prototype.slice.call(arguments, 1);

	var init = typeof fn === 'function' ? fn : function () {
		this[fn].apply(this, args);
	};
	//增加挂在到数组
	this.prototype._initializers.push(init);
};