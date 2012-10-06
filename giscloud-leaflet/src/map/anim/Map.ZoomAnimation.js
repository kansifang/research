L.Map.mergeOptions({
	zoomAnimation: L.DomUtil.TRANSITION && !L.Browser.android && !L.Browser.mobileOpera
});

L.Map.include(!L.DomUtil.TRANSITION ? {} : {
	// 如果视野中心在容器，则调整视野级别
	_zoomToIfCenterInView: function (/*中心点经纬度*/center, /*视野级别*/zoom, /*与视野中心点像素差*/centerOffset) {

		if (this._animatingZoom) {//如果还在缩放动画，则返回
			return true;
		}
		if (!this.options.zoomAnimation) {//如果禁止缩放动画，则撤销
			return false;
		}
	
		var scale = Math.pow(2, zoom - this._zoom),//缩放比例
			//中心点偏移的缩放偏移
			offset = centerOffset.divideBy(1 - 1 / scale);
		// 如果缩放中心点不在视野内，则返回
		if (!this._offsetIsWithinView(offset, 1)) {
			return false;
		}
		//增加缩放样式类别
		this._mapPane.className += ' leaflet-zoom-anim';
		//触发移动事件
        this.fire('movestart').fire('zoomstart');
		// 准备切片缩放图层
		this._prepareTileBg();
		//地图容器中心点坐标
		var centerPoint = this.containerPointToLayerPoint(this.getSize().divideBy(2)),//中心点像素坐标
			origin = centerPoint.add(offset);//缩放中心点
		//console.log(centerPoint);
		// 运行动画
		this._runAnimation(center, zoom, scale, origin);
		
		return true;
	},

	// 运行动画
	_runAnimation: function (/*中心点经纬度*/center, /*视野级别*/zoom, /*缩放比例*/scale, /*缩放中心点*/origin) {
		this._animatingZoom = true;

		this._animateToCenter = center;
		this._animateToZoom = zoom;

		var transform = L.DomUtil.TRANSFORM, tileBg = this._tileBg;

		clearTimeout(this._clearTileBgTimer);

		//dumb FireFox hack, I have no idea why this magic zero translate fixes the scale transition problem
		if (L.Browser.gecko || window.opera) {
			tileBg.style[transform] += ' translate(0,0)';
		}

		var scaleStr;

		// Android 2.* doesn't like translate/scale chains, transformOrigin + scale works better but
		// it breaks touch zoom which Anroid doesn't support anyway, so that's a really ugly hack
		
		// TODO work around this prettier
		if (L.Browser.android) {
			tileBg.style[transform + 'Origin'] = origin.x + 'px ' + origin.y + 'px';
			scaleStr = 'scale(' + scale + ')';
		} else {
			scaleStr = L.DomUtil.getScaleString(scale, origin);
		}

		L.Util.falseFn(tileBg.offsetWidth); //hack to make sure transform is updated before running animation

		var options = {};
		options[transform] = tileBg.style[transform] + ' ' + scaleStr;
		tileBg.transition.run(options);
	},
	// 准备切片缩放图层
	_prepareTileBg: function () {
		var tilePane = this._tilePane,
			tileBg = this._tileBg;

		if (!tileBg) {
			tileBg = this._tileBg = this._createPane('leaflet-tile-pane', this._mapPane);
			tileBg.style.zIndex = 1;
		}

		// prepare the background pane to become the main tile pane
		tileBg.style[L.DomUtil.TRANSFORM] = '';
		tileBg.style.visibility = 'hidden';

		// tells tile layers to reinitialize their containers
		tileBg.empty = true;
		tilePane.empty = false;

		this._tilePane = this._panes.tilePane = tileBg;
		var newTileBg = this._tileBg = tilePane;

		if (!newTileBg.transition) {
			// TODO move to Map options
			newTileBg.transition = new L.Transition(newTileBg, {
				duration: 0.25,
				easing: 'cubic-bezier(0.25,0.1,0.25,0.75)'
			});
			newTileBg.transition.on('end', this._onZoomTransitionEnd, this);
		}
		//停止所有未加载完成的切片
		this._stopLoadingImages(newTileBg);
	},

	// 停止加载所有背景图层未加载完成的切片
	_stopLoadingImages: function (container) {
		var tiles = Array.prototype.slice.call(container.getElementsByTagName('img')),
			i, len, tile;

		for (i = 0, len = tiles.length; i < len; i++) {
			tile = tiles[i];

			if (!tile.complete) {
				tile.onload = L.Util.falseFn;
				tile.onerror = L.Util.falseFn;
				tile.src = L.Util.emptyImageUrl;

				tile.parentNode.removeChild(tile);
			}
		}
	},
	// 过渡完成回调
	_onZoomTransitionEnd: function () {
		this._restoreTileFront();

		L.Util.falseFn(this._tileBg.offsetWidth);
		this._resetView(this._animateToCenter, this._animateToZoom, true, true);

		this._mapPane.className = this._mapPane.className.replace(' leaflet-zoom-anim', ''); //TODO toggleClass util
		this._animatingZoom = false;
	},
	
	_restoreTileFront: function () {
		this._tilePane.innerHTML = '';
		this._tilePane.style.visibility = '';
		this._tilePane.style.zIndex = 2;
		this._tileBg.style.zIndex = 1;
	},
	// 清空缩放图层
	_clearTileBg: function () {
		if (!this._animatingZoom && !this.touchZoom._zooming) {
			this._tileBg.innerHTML = '';
		}
	}
});
