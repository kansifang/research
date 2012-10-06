
L.Map.include(!(L.Transition && L.Transition.implemented()) ? {} : {
	//设置视野
	setView: function (/*中心点*/center, /*视野级别*/zoom, /*强制复位*/forceReset) {
		//确保视野级别有效范围内
		zoom = this._limitZoom(zoom);
		
		var zoomChanged = (this._zoom !== zoom);

		if (this._loaded && !forceReset && this._layers) {//加载完毕、不复位、存在图层
			// 求新中心点和原中心点间像素差
			var offset = this._getNewTopLeftPoint(center).subtract(this._getTopLeftPoint());
			// 重新构造经纬度对象
			center = new L.LatLng(center.lat, center.lng);
			if(zoomChanged){//存在视野级别差
				done = this._zoomToIfCenterInView && this._zoomToIfCenterInView(center, zoom, /*视野中心差*/offset);//
			}else{//不存在视野差
				done = this._panByIfClose(offset)//检查点是否在视野内
			}
			// 退出如果动画平移或缩放开始
			if (done) {
				return this;
			}
		}

		// 重新设置地图视野
		this._resetView(center, zoom);

		return this;
	},

	panBy: function (/*移动量*/offset, /*缓动参数*/options) {
		if (!(offset.x || offset.y)) {//验证有效性
			return this;
		}
		if (!this._panTransition) {//如果未定义移动动画，则定义
			//定义移动动画
			this._panTransition = new L.Transition(this._mapPane);
			//绑定步进事件
			this._panTransition.on('step', this._onPanTransitionStep, this);
			//绑定动画结束事件
			this._panTransition.on('end', this._onPanTransitionEnd, this);
		}
		//合并参数，设置缓动时间
		L.Util.setOptions(this._panTransition, L.Util.extend({duration: 0.25}, options));
		this.fire('movestart');
		//禁用CSS 过渡效果
		this._mapPane.className += ' leaflet-pan-anim';
		//开始移动动画
		this._panTransition.run({
			//相对于初始化时的移动位置
			position: L.DomUtil.getPosition(this._mapPane).subtract(offset)//终点位置
		});
		return this;
	},
	// 步进事件
	_onPanTransitionStep: function () {
		this.fire('move');
	},
	// 动画结束事件
	_onPanTransitionEnd: function () {
		this._mapPane.className = this._mapPane.className.replace(/ leaflet-pan-anim/g, '');
		this.fire('moveend');
	},
	// 检查点是否在当前视野内
	_panByIfClose: function (/*点位置*/offset) {
		if (this._offsetIsWithinView(offset)) {
			this.panBy(offset);
			return true;
		}
		return false;
	},
	//是否在窗体的大小的倍数内
	_offsetIsWithinView: function (/*点位置*/offset, /*当前窗体大小的倍数*/multiplyFactor) {
		var m = multiplyFactor || 1,
			size = this.getSize();

		return (Math.abs(offset.x) <= size.x * m) && (Math.abs(offset.y) <= size.y * m);
	}
});
