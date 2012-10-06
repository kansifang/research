/*
 * L.Handler.MapDrag用于由L.Map内部，使地图拖动。
 */

L.Map.mergeOptions({
	dragging: true,
	//惯性，非android设备
	inertia: !L.Browser.android,
	//减速惯性
	inertiaDeceleration: L.Browser.touch ? 3000 : 2000, // px/s^2
	//最大速度
	inertiaMaxSpeed:     L.Browser.touch ? 1500 : 1000, // px/s
	//惯性阈值
	inertiaThreshold:    L.Browser.touch ? 32   : 16, // ms

	//待重构，移入CRS中
	worldCopyJump: true,
	continuousWorld: false
});

L.Map.Drag = L.Handler.extend({
	// 启用地图拖拽
	addHooks: function () {
		if (!this._draggable) {//如果尚未实例化拖拽，则实例化
			this._draggable = new L.Draggable(this._map._mapPane, this._map._container);
			//绑定事件
			this._draggable
				.on('dragstart', this._onDragStart, this)//拖拽开始
				.on('drag', this._onDrag, this)//拖拽中
				.on('dragend', this._onDragEnd, this);//拖拽结束

			var options = this._map.options;
			//如果世界图，非连续世界
			if (options.worldCopyJump && !options.continuousWorld) {
				this._draggable.on('predrag', this._onPreDrag, this);
				this._map.on('viewreset', this._onViewReset, this);
			}
		}
		this._draggable.enable();//启用拖拽
	},
	//弃用地图拖拽
	removeHooks: function () {
		this._draggable.disable();
	},
	
	moved: function () {
		return this._draggable && this._draggable._moved;
	},
	//拖拽开始
	_onDragStart: function () {
		var map = this._map;

		map.fire('movestart').fire('dragstart');

		if (map._panTransition) {//如果在缓动，则先停止
			map._panTransition._onTransitionEnd(true);
		}

		if (map.options.inertia) {//初始化记录数组
			this._positions = [];//位置记录数组
			this._times = [];//时间记录数组
		}
	},
	//拖拽过程中
	_onDrag: function () {
		if (this._map.options.inertia) {//惯性支持
			var time = this._lastTime = +new Date(),//上次时间
			    pos = this._lastPos = this._draggable._newPos;//上次位置
			//console.log(pos);
			this._positions.push(pos);
			this._times.push(time);

			if (time - this._times[0] > 200) {//如果本次移动距离开始超过200毫秒，则忽略
				this._positions.shift();
				this._times.shift();
			}
		}

		this._map.fire('move').fire('drag');
	},
	//
	_onViewReset: function () {
		var pxCenter = this._map.getSize().divideBy(2),
			pxWorldCenter = this._map.latLngToLayerPoint(new L.LatLng(0, 0));

		this._initialWorldOffset = pxWorldCenter.subtract(pxCenter);
	},
	//拖拽中
	_onPreDrag: function () {
		var map = this._map,
			//当前视野级别最大像素宽度
			worldWidth = map.options.crs.scale(map.getZoom()),
			halfWidth = Math.round(worldWidth / 2),
			dx = this._initialWorldOffset.x,
			x = this._draggable._newPos.x,
			newX1 = (x - halfWidth + dx) % worldWidth + halfWidth - dx,
			newX2 = (x + halfWidth + dx) % worldWidth - halfWidth - dx,
			newX = Math.abs(newX1 + dx) < Math.abs(newX2 + dx) ? newX1 : newX2;

		this._draggable._newPos.x = newX;
	},
	// 拖拽结束
	_onDragEnd: function () {
		var map = this._map,
			options = map.options,
			delay = +new Date() - this._lastTime,
			//没有惯性
			noInertia = !options.inertia ||
					delay > options.inertiaThreshold ||
					typeof this._positions[0] === 'undefined';

		if (noInertia) {
			map.fire('moveend');
		} else {
			// 缓动方向
			var direction = this._lastPos.subtract(this._positions[0]),
				// 持续时间
				duration = (this._lastTime + delay - this._times[0]) / 1000,
				// 速度向量
				speedVector = direction.multiplyBy(0.58 / duration),
				speed = speedVector.distanceTo(new L.Point(0, 0)),
				//限制速度
				limitedSpeed = Math.min(options.inertiaMaxSpeed, speed),
				//限制速度向量
				limitedSpeedVector = speedVector.multiplyBy(limitedSpeed / speed),
				//减速时间
				decelerationDuration = limitedSpeed / options.inertiaDeceleration,
				offset = limitedSpeedVector.multiplyBy(-decelerationDuration / 2).round();
				
			var panOptions = {
				duration: decelerationDuration,
				easing: 'ease-out'
			};

			L.Util.requestAnimFrame(L.Util.bind(function () {
				this._map.panBy(offset, panOptions);
			}, this));
		}

		map.fire('dragend');

		if (options.maxBounds) {
			// TODO predrag validation instead of animation
			L.Util.requestAnimFrame(this._panInsideMaxBounds, map, true, map._container);
		}
	},
	//移动到视野范围内
	_panInsideMaxBounds: function () {
		this.panInsideBounds(this.options.maxBounds);
	}
});

L.Map.addInitHook('addHandler', 'dragging', L.Map.Drag);