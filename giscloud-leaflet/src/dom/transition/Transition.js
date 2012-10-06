/*
 * 缓动动画类
 * 
 */

L.Transition = L.Class.extend({
	includes: L.Mixin.Events,
	// 静态属性
	statics: {
		//自定义dom属性的设置方式
		CUSTOM_PROPS_SETTERS: {
			//终点位置
			position: L.DomUtil.setPosition
			//TODO transform custom attr
		},

		implemented: function () {
			return L.Transition.NATIVE || L.Transition.TIMER;
		}
	},
	// 参数
	options: {
		easing: 'ease',//缓动动画函数
		duration: 0.5//持续时间
	},
	// 设置属性
	_setProperty: function (prop, value) {
		//设置自定义属性的方法
		var setters = L.Transition.CUSTOM_PROPS_SETTERS;
		if (prop in setters) {//如果目标dom属性在预设值自定义属性中，则通过此方法执行
			setters[prop](this._el, value);
		} else {//直接设置样式属性
			this._el.style[prop] = value;
		}
	}
});
