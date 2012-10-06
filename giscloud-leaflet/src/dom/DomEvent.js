/*
 * L.DomEvent contains functions for working with DOM events.
 * L.DomEvent包含DOM事件的功能。
 */

L.DomEvent = {
	/* inpired by John Resig, Dean Edwards and YUI addEvent implementations */
	/* 由John Resig的启发，院长爱德华兹和YUI添加事件实现 */
	//注册事件
	addListener: function (/*HTMLElement*/ obj, /*事件类型*/ type, /*回调函数*/ fn, /*上下文*/ context) {
		var id = L.Util.stamp(fn), key = '_leaflet_' + type + id;
		//事件唯一性注册判断,没有意义
		if (obj[key]){
			return this;
		}
		//支持上下文的事件回调
		var handler = function (e) {
			return fn.call(context || obj, e || L.DomEvent._getEvent());
		};

		if (L.Browser.touch && (type === 'dblclick') && this.addDoubleTapListener) {//触摸屏双击
			this.addDoubleTapListener(obj, handler, id);
		} else if ('addEventListener' in obj) {//for w3c
			if (type === 'mousewheel') {//鼠标滚轮事件
				obj.addEventListener('DOMMouseScroll', handler, false);
				obj.addEventListener(type, handler, false);
			} else if ((type === 'mouseenter') || (type === 'mouseleave')) {//鼠标移入
				var originalHandler = handler,
					newType = (type === 'mouseenter' ? 'mouseover' : 'mouseout');
				handler = function (e) {
					if (!L.DomEvent._checkMouse(obj, e)) {
						return;
					}
					return originalHandler(e);
				};
				obj.addEventListener(newType, handler, false);
			} else {//其它事件
				obj.addEventListener(type, handler, false);
			}
		} else if ('attachEvent' in obj) {//for IE
			obj.attachEvent("on" + type, handler);
		}

		obj[key] = handler;

		return this;
	},
	//注销事件
	removeListener: function (/*HTMLElement*/ obj, /*String*/ type, /*Function*/ fn) {
		var id = L.Util.stamp(fn), key = '_leaflet_' + type + id, handler = obj[key];
		//如果没有注册过，则直接返回
		if (!handler) {
			return;
		}

		if (L.Browser.touch && (type === 'dblclick') && this.removeDoubleTapListener) {
			this.removeDoubleTapListener(obj, id);
		} else if ('removeEventListener' in obj) {
			if (type === 'mousewheel') {
				obj.removeEventListener('DOMMouseScroll', handler, false);
				obj.removeEventListener(type, handler, false);
			} else if ((type === 'mouseenter') || (type === 'mouseleave')) {
				obj.removeEventListener((type === 'mouseenter' ? 'mouseover' : 'mouseout'), handler, false);
			} else {
				obj.removeEventListener(type, handler, false);
			}
		} else if ('detachEvent' in obj) {
			obj.detachEvent("on" + type, handler);
		}
		obj[key] = null;

		return this;
	},
	//检查鼠标移入、移出
	_checkMouse: function (el, e) {
		var related = e.relatedTarget;

		if (!related) {
			return true;
		}

		try {
			while (related && (related !== el)) {
				related = related.parentNode;
			}
		} catch (err) {
			return false;
		}
		return (related !== el);
	},

	/*jshint noarg:false */ // evil magic for IE
	_getEvent: function () {
		var e = window.event;
		if (!e) {
			var caller = arguments.callee.caller;
			while (caller) {
				e = caller['arguments'][0];
				if (e && window.Event === e.constructor) {
					break;
				}
				caller = caller.caller;
			}
		}
		return e;
	},
	/*jshint noarg:false */
	//阻止冒泡
	stopPropagation: function (/*Event*/ e) {
		if (e.stopPropagation) {
			e.stopPropagation();
		} else {
			e.cancelBubble = true;
		}
		//链调用
		return this;
	},
	//禁止单击冒泡
	disableClickPropagation: function (/*HTMLElement*/ el) {
		return L.DomEvent
			.addListener(el, L.Draggable.START, L.DomEvent.stopPropagation)
			.addListener(el, 'click', L.DomEvent.stopPropagation)
			.addListener(el, 'dblclick', L.DomEvent.stopPropagation);
	},
	//阻止默认行为
	preventDefault: function (/*Event*/ e) {
		if (e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}
		//链调用
		return this;
	},
	//阻止默认行为和冒泡
	stop: function (e) {
		return L.DomEvent
			.preventDefault(e)
			.stopPropagation(e);
	},
	//获取鼠标位置
	getMousePosition: function (e, container) {
		var x = e.pageX ? e.pageX : e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft,
			y = e.pageY ? e.pageY : e.clientY + document.body.scrollTop + document.documentElement.scrollTop,
			//鼠标相对于窗体的位置
			pos = new L.Point(x, y);
		//如果存在容器对象，则返回容器像素坐标
		return (container ? pos.subtract(L.DomUtil.getViewportOffset(container)) : pos);
	},
	//整理鼠标滚轮事件
	getWheelDelta: function (e) {
		var delta = 0;
		if (e.wheelDelta) {
			delta = e.wheelDelta / 120;
		}
		if (e.detail) {
			delta = -e.detail / 3;
		}
		return delta;
	}
};

