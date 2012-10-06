/*
 * L.Util is a namespace for various utility functions.
 * L.Util是各种实用功能的命名空间。
 */

L.Util = {
	//继承
	extend: function (/*Object*/ dest) /*-> Object*/ {	// merge src properties into dest
		//获取除第一项外的参数数组
		var sources = Array.prototype.slice.call(arguments, 1);
		//循环继承对象
		for (var j = 0, len = sources.length, src; j < len; j++) {
			src = sources[j] || {};
			for (var i in src) {
				if (src.hasOwnProperty(i)) {//如果含有非继承对象属性
					dest[i] = src[i];//写入（含覆盖）目标对象
				}
			}
		}
		return dest;//返回目标对象
	},
	//调用obj的fn方法
	bind: function (fn, obj) { // (Function, Object) -> Function
		//除前两项参数外的参数数组
		var args = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null;
		return function () {
			//调用obj的fn方法
			return fn.apply(obj, args || arguments);
		};
	},
	//获取对象唯一标记
	stamp: (function () {
		var lastId = 0, key = '_leaflet_id';
		return function (/*Object*/ obj) {
			var a = obj[key], b= lastId;
			obj[key] = obj[key] || ++lastId;
			//console.log(b +' , '+key+' , '+a+" , "+obj[key]);
			return obj[key];//该回调函数已注册则返回之前注册的ID，否则产生新ID
		};
	}()),


	// TODO refactor: remove repetition
	// 动画
	requestAnimFrame: (function () {
		//定义定时器方式的动画执行
		function timeoutDefer(callback) {
			//60帧
			window.setTimeout(callback, 1000 / 60);
		}
		//定义动画函数
		var requestFn = window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			timeoutDefer;
		//返回一个动画函数
		return function (/*完成后的回调函数*/callback, /*上下文*/context, /*是否立即执行*/immediate, contextEl) {
			//定义动画执行回调函数：如果存在上下文，则执行上下文的回调方法，否则直接执行回调函数。
			callback = context ? L.Util.bind(callback, context) : callback;
			if (immediate && requestFn === timeoutDefer) {//如果立即执行，并且为定时器方法，则直接执行回调
				callback();
			} else {//否则
				//调用window的requestFn方法，将后俩参数传参
				return requestFn.call(window, callback, contextEl);
			}
		};
	}()),
	// 取消动画
	cancelAnimFrame: (function () {
		//定义动画函数
		var requestFn = window.cancelAnimationFrame ||
			window.webkitCancelRequestAnimationFrame ||
			window.mozCancelRequestAnimationFrame ||
			window.oCancelRequestAnimationFrame ||
			window.msCancelRequestAnimationFrame ||
			clearTimeout;
		//返回一个取消动画的函数
		return function (/*动画timer*/handle) {
			if (!handle) { return; }
			//调用window的 requestFn方法，并传入timer
			return requestFn.call(window, handle);
		};
	}()),
	//通过区间限制执行
	limitExecByInterval: function (/*回调函数*/fn, /*间隔时间*/time, /*上下文*/context) {
		var lock, //延迟锁
			execOnUnlock;//执行锁
		
		//返回一个函数
		return function wrapperFn() {
			//参数数组
			var args = arguments;
			if (lock) {//延迟锁已锁，则打开执行锁，并返回
				execOnUnlock = true;
				return;
			}
			lock = true;//打开延迟锁
			//延迟执行
			setTimeout(function () {
				lock = false;//关闭延迟锁
				
				if (execOnUnlock) {
					//执行上下文的wrapperFn方法，并传参
					wrapperFn.apply(context, args);
					execOnUnlock = false;//执行完毕，关闭执行锁
				}
			}, time);
			//初次执行上下文的回调函数
			fn.apply(context, args);
		};
	},
	//返回false，为了减少代码
	falseFn: function () {
		return false;
	},
	//格式化浮点数数字
	formatNum: function (num, digits) {
		var pow = Math.pow(10, digits || 5);
		return Math.round(num * pow) / pow;
	},
	//合并参数
	setOptions: function (obj, options) {
		//使用集成的方式合并参数，高明！
		obj.options = L.Util.extend({}, obj.options, options);
		return obj.options;
	},
	//获取URL参数字符串
	getParamString: function (obj) {
		var params = [];
		for (var i in obj) {
			if (obj.hasOwnProperty(i)) {
				params.push(i + '=' + obj[i]);
			}
		}
		return '?' + params.join('&');
	},
	
	template: function (str, data) {
		return str.replace(/\{ *([\w_]+) *\}/g, function (str, key) {
			var value = data[key];
			if (!data.hasOwnProperty(key)) {
				throw new Error('No value provided for variable ' + str);
			}
			return value;
		});
	},
	//空图像BASE64码
	emptyImageUrl: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
};
