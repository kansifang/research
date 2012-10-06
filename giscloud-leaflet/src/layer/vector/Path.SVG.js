L.Path.SVG_NS = 'http://www.w3.org/2000/svg';

L.Browser.svg = !!(document.createElementNS && document.createElementNS(L.Path.SVG_NS, 'svg').createSVGRect);

L.Path = L.Path.extend({
	statics: {
		SVG: L.Browser.svg
	},

	getPathString: function () {
		// form path string here
	},
	//创建绘制命名节点
	_createElement: function (name) {
		return document.createElementNS(L.Path.SVG_NS, name);
	},

	_initElements: function () {
		this._map._initPathRoot();//初始化容器
		this._initPath();//初始化路径
		this._initStyle();//初始化样式
	},
	//初始化路径容器
	_initPath: function () {
		//创建本路径根节点
		this._container = this._createElement('g');
		//创建本路径节点
		this._path = this._createElement('path');
		this._container.appendChild(this._path);
		//添加根节点到渲染容器
		this._map._pathRoot.appendChild(this._container);
	},

	_initStyle: function () {
		if (this.options.stroke) {
			this._path.setAttribute('stroke-linejoin', 'round');
			this._path.setAttribute('stroke-linecap', 'round');
		}
		if (this.options.fill) {
			this._path.setAttribute('fill-rule', 'evenodd');
		}
		this._updateStyle();
	},

	_updateStyle: function () {
		if (this.options.stroke) {
			this._path.setAttribute('stroke', this.options.color);
			this._path.setAttribute('stroke-opacity', this.options.opacity);
			this._path.setAttribute('stroke-width', this.options.weight);
		} else {
			this._path.setAttribute('stroke', 'none');
		}
		if (this.options.fill) {
			this._path.setAttribute('fill', this.options.fillColor || this.options.color);
			this._path.setAttribute('fill-opacity', this.options.fillOpacity);
		} else {
			this._path.setAttribute('fill', 'none');
		}
	},

	_updatePath: function () {
		var str = this.getPathString();
		if (!str) {
			// fix webkit empty string parsing bug
			str = 'M0 0';
		}
		this._path.setAttribute('d', str);
	},

	// TODO remove duplication with L.Map
	_initEvents: function () {
		if (this.options.clickable) {
			if (L.Browser.svg || !L.Browser.vml) {
				this._path.setAttribute('class', 'leaflet-clickable');
			}
			//绑定事件到本路径跟容器
			L.DomEvent.addListener(this._container, 'click', this._onMouseClick, this);

			var events = ['dblclick', 'mousedown', 'mouseover', 'mouseout', 'mousemove', 'contextmenu'];
			for (var i = 0; i < events.length; i++) {
				L.DomEvent.addListener(this._container, events[i], this._fireMouseEvent, this);
			}
		}
	},
	//点击回调
	_onMouseClick: function (e) {
		if (this._map.dragging && this._map.dragging.moved()) {
			return;
		}

		if (e.type === 'contextmenu') {
			L.DomEvent.preventDefault(e);
		}

		this._fireMouseEvent(e);
	},

	_fireMouseEvent: function (e) {
		if (!this.hasEventListeners(e.type)) {
			return;
		}
		var map = this._map,
			containerPoint = map.mouseEventToContainerPoint(e),
			layerPoint = map.containerPointToLayerPoint(containerPoint),
			latlng = map.layerPointToLatLng(layerPoint);

		this.fire(e.type, {
			latlng: latlng,
			layerPoint: layerPoint,
			containerPoint: containerPoint,
			originalEvent: e
		});

		L.DomEvent.stopPropagation(e);
	}
});

L.Map.include({
	//初始化绘制容器
	_initPathRoot: function () {
		if (!this._pathRoot) {
			this._pathRoot = L.Path.prototype._createElement('svg');
			this._panes.overlayPane.appendChild(this._pathRoot);

			this.on('moveend', this._updateSvgViewport);
			this._updateSvgViewport();
		}
	},
	//更新绘制容器视野
	_updateSvgViewport: function () {
		this._updatePathViewport();

		var vp = this._pathViewport,
			min = vp.min,
			max = vp.max,
			width = max.x - min.x,
			height = max.y - min.y,
			root = this._pathRoot,
			pane = this._panes.overlayPane;

		// Hack to make flicker on drag end on mobile webkit less irritating
		// Unfortunately I haven't found a good workaround for this yet
		if (L.Browser.webkit) {
			pane.removeChild(root);
		}

		L.DomUtil.setPosition(root, min);
		root.setAttribute('width', width);
		root.setAttribute('height', height);
		root.setAttribute('viewBox', [min.x, min.y, width, height].join(' '));

		if (L.Browser.webkit) {
			pane.appendChild(root);
		}
	}
});
