/*
 * L.Draggable allows you to add dragging capabilities to any element. Supports mobile devices too.
 * L.Draggable允许你添加任何元素拖动功能,并支持移动设备。
 */

L.Draggable = L.Class.extend({
	includes: L.Mixin.Events,
	//静态属性
	statics: {
		//开始事件
		START: L.Browser.touch ? 'touchstart' : 'mousedown',
		//结束事件
		END: L.Browser.touch ? 'touchend' : 'mouseup',
		//移动事件
		MOVE: L.Browser.touch ? 'touchmove' : 'mousemove',
		TAP_TOLERANCE: 15
	},

	initialize: function (/*位置影响DOM*/element, /*拖拽响应DOM*/dragStartTarget) {
		this._element = element;
		this._dragStartTarget = dragStartTarget || element;
	},
	//可用
	enable: function () {
		if (this._enabled) {//如果已设置，则返回
			return;
		}
		//注册拖拽开始事件
		L.DomEvent.addListener(this._dragStartTarget, L.Draggable.START, this._onDown, this);
		this._enabled = true;
	},
	//禁用
	disable: function () {
		if (!this._enabled) {//如果已设置，则返回
			return;
		}
		//注销拖拽开始事件
		L.DomEvent.removeListener(this._dragStartTarget, L.Draggable.START, this._onDown);
		this._enabled = false;
		this._moved = false;
	},
	//事件开始回调
	_onDown: function (e) {
		if ((!L.Browser.touch && e.shiftKey) || ((e.which !== 1) && (e.button !== 1) && !e.touches)) {
			return;
		}
		//模拟点击
		this._simulateClick = true;
		//如果是触摸事件，则返回
		if (e.touches && e.touches.length > 1) {
			this._simulateClick = false;
			return;
		}
		//获取事件触发对象
		var first = (e.touches && e.touches.length === 1 ? e.touches[0] : e), el = first.target;
		//阻止事件冒泡
		L.DomEvent.preventDefault(e);
		//如果是A标签，则增加样式类别
		if (L.Browser.touch && el.tagName.toLowerCase() === 'a') {
			el.className += ' leaflet-active';
		}
		//初始化移动标识
		this._moved = false;
		if (this._moving) {//如果在移动，则返回
			return;
		}

		if (!L.Browser.touch) {//非触摸设备
			L.DomUtil.disableTextSelection();//禁止文本选中
			this._setMovingCursor();//设置鼠标移动CURSOR
		}
		//拖拽开始点相对位置
		this._startPos = this._newPos = L.DomUtil.getPosition(this._element);
		//拖拽开始点绝对位置
		this._startPoint = new L.Point(first.clientX, first.clientY);
		//注册拖拽移动、结束事件
		L.DomEvent.addListener(document, L.Draggable.MOVE, this._onMove, this);
		L.DomEvent.addListener(document, L.Draggable.END, this._onUp, this);
	},
	//移动事件回调
	_onMove: function (e) {
		if (e.touches && e.touches.length > 1) {//多指移动不处理
			return;
		}
		//阻止冒泡
		L.DomEvent.preventDefault(e);
		//获取事件对象
		var first = (e.touches && e.touches.length === 1 ? e.touches[0] : e);
		
		if (!this._moved) {//初次移动，触发开始事件
			this.fire('dragstart');
			this._moved = true;
		}
		this._moving = true;
		//绝对位置
		var newPoint = new L.Point(first.clientX, first.clientY);
		//新相对位置
		this._newPos = this._startPos.subtract(this._startPoint).add(newPoint);
		//取消动画
		L.Util.cancelAnimFrame(this._animRequest);
		//执行更新位置动画
		this._animRequest = L.Util.requestAnimFrame(this._updatePosition, this, true, this._dragStartTarget);
	},
	//更新位置方法
	_updatePosition: function () {
		this.fire('predrag');
		L.DomUtil.setPosition(this._element, this._newPos);
		this.fire('drag');
	},
	//结束事件回调
	_onUp: function (e) {
		if (this._simulateClick && e.changedTouches) {//存在缩放改变
			var first = e.changedTouches[0],
				el = first.target,//事件触发对象
				dist = (this._newPos && this._newPos.distanceTo(this._startPos)) || 0;//中心点移动量

			if (el.tagName.toLowerCase() === 'a') {//取消激活样式
				el.className = el.className.replace(' leaflet-active', '');
			}

			if (dist < L.Draggable.TAP_TOLERANCE) {//移动量小于忽略值，则视为点击
				this._simulateEvent('click', first);//模拟点击事件
			}
		}

		if (!L.Browser.touch) {//非触摸设备
			L.DomUtil.enableTextSelection();//激活文本可选择
			this._restoreCursor();//重置鼠标手型
		}
		//移出移动、结束事件
		L.DomEvent.removeListener(document, L.Draggable.MOVE, this._onMove);
		L.DomEvent.removeListener(document, L.Draggable.END, this._onUp);
		//触发结束事件
		if (this._moved) {
			this.fire('dragend');
		}
		this._moving = false;
	},
	//打开鼠标移动手型
	_setMovingCursor: function () {
		document.body.className += ' leaflet-dragging';
	},
	//回复鼠标移动手型
	_restoreCursor: function () {
		document.body.className = document.body.className.replace(/ leaflet-dragging/g, '');
	},
	//模拟事件
	_simulateEvent: function (type, e) {
		var simulatedEvent = document.createEvent('MouseEvents');

		simulatedEvent.initMouseEvent(
				type, true, true, window, 1,
				e.screenX, e.screenY,
				e.clientX, e.clientY,
				false, false, false, false, 0, null);

		e.target.dispatchEvent(simulatedEvent);
	}
});
