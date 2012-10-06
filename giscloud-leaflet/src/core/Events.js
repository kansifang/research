/*
 * L.Mixin.Events adds custom events functionality to Leaflet classes
 * L.Mixin.Events 添加自定义功能类到 Leaflet classes
 */

L.Mixin = {};

L.Mixin.Events = {
	//注册事件
	addEventListener: function (/*String*/ type, /*Function*/ fn, /*(optional) Object*/ context) {
		var events = this._leaflet_events = this._leaflet_events || {};
		events[type] = events[type] || [];
		events[type].push({
			action: fn,
			context: context || this
		});
		return this;
	},
	//是否有事件监听
	hasEventListeners: function (/*String*/ type) /*-> Boolean*/ {
		var k = '_leaflet_events';
		return (k in this) && (type in this[k]) && (this[k][type].length > 0);
	},
	//删除事件
	removeEventListener: function (/*String*/ type, /*Function*/ fn, /*(optional) Object*/ context) {
		if (!this.hasEventListeners(type)) {
			return this;
		}

		for (var i = 0, events = this._leaflet_events, len = events[type].length; i < len; i++) {
			if((events[type][i].action === fn) && (!context || (events[type][i].context === context))){
				events[type].splice(i, 1);
				return this;
			}
		}
		return this;
	},
	//触发事件
	fireEvent: function (/*String*/ type, /*(optional) Object*/ data) {
		//判断此类型是否存在事件监听
		if (!this.hasEventListeners(type)) {
			return this;
		}

		var event = L.Util.extend({
			type: type,
			target: this
		}, data);
		//返回一个非相同指针数组
		var listeners = this._leaflet_events[type].slice();
		
		for (var i = 0, len = listeners.length; i < len; i++) {
			listeners[i].action.call(listeners[i].context || this, event);
		}
		//返回原型链
		return this;
	}
};

L.Mixin.Events.on = L.Mixin.Events.addEventListener;
L.Mixin.Events.off = L.Mixin.Events.removeEventListener;
L.Mixin.Events.fire = L.Mixin.Events.fireEvent;
