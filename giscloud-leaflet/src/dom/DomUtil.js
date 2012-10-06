/*
 * L.DomUtil contains various utility functions for working with DOM
 * L.DomUtil包含各种与DOM相关的实用功能
 */

L.DomUtil = {
	//获取节点对象
	get: function (id) {
		return (typeof id === 'string' ? document.getElementById(id) : id);
	},
	//获取对象CSS值
	getStyle: function (el, style) {
		var value = el.style[style];
		if (!value && el.currentStyle) {
			value = el.currentStyle[style];
		}
		if (!value || value === 'auto') {
			var css = document.defaultView.getComputedStyle(el, null);
			value = css ? css[style] : null;
		}
		return (value === 'auto' ? null : value);
	},
	//获取视野相对位置
	getViewportOffset: function (element) {
		var top = 0,
			left = 0,
			el = element,
			docBody = document.body;

		do {
			top += el.offsetTop || 0;
			left += el.offsetLeft || 0;
			//如果是绝对定位
			if (el.offsetParent === docBody && L.DomUtil.getStyle(el, 'position') === 'absolute') {
				break;
			}
			//如果位置为fixed
			if (L.DomUtil.getStyle(el, 'position') === 'fixed') {
				top += docBody.scrollTop || 0;
				left += docBody.scrollLeft || 0;
				break;
			}
			//获取上一级相对偏移
			el = el.offsetParent;
		} while (el);

		el = element;

		do {
			if (el === docBody) {//直到到达Body节点
				break;
			}

			top -= el.scrollTop || 0;
			left -= el.scrollLeft || 0;

			el = el.parentNode;
		} while (el);
		//返回当前容器相对于窗体的坐标
		return new L.Point(left, top);
	},
	//创建节点名称
	create: function (/*节点类型*/tagName, /*样式名称*/className, /*上级节点对象*/container) {
		var el = document.createElement(tagName);
		el.className = className;
		if (container) {//如果存在上级节点，则添加至其中
			container.appendChild(el);
		}
		return el;
	},
	//禁止文本选中
	disableTextSelection: function () {
		//for ie
		if (document.selection && document.selection.empty) {
			document.selection.empty();
		}
		if (!this._onselectstart) {
			this._onselectstart = document.onselectstart;
			document.onselectstart = L.Util.falseFn;
		}
	},
	//启用文本选中
	enableTextSelection: function () {
		document.onselectstart = this._onselectstart;
		this._onselectstart = null;
	},
	//节点是否拥有某样式
	hasClass: function (el, name) {
		return (el.className.length > 0) &&
				new RegExp("(^|\\s)" + name + "(\\s|$)").test(el.className);
	},
	//节点添加样式
	addClass: function (el, name) {
		if (!L.DomUtil.hasClass(el, name)) {
			el.className += (el.className ? ' ' : '') + name;
		}
	},
	//节点删除某样式
	removeClass: function (el, name) {
		el.className = el.className.replace(/(\S+)\s*/g, function (w, match) {
			if (match === name) {
				return '';
			}
			return w;
		}).replace(/^\s+/, '');
	},
	//节点设置透明度
	setOpacity: function (el, value) {
		if (L.Browser.ie) {
		    el.style.filter += value !== 1 ? 'alpha(opacity=' + Math.round(value * 100) + ')' : '';
		} else {
			el.style.opacity = value;
		}
	},

	//TODO refactor away this ugly translate/position mess
	//验证当前浏览器支持的样式属性
	testProp: function (props) {
		var style = document.documentElement.style;
		for (var i = 0; i < props.length; i++) {
			if (props[i] in style) {
				return props[i];
			}
		}
		return false;
	},
	
	getTranslateString: function (point) {
		return L.DomUtil.TRANSLATE_OPEN +
				point.x + 'px,' + point.y + 'px' +
				L.DomUtil.TRANSLATE_CLOSE;
	},

	getScaleString: function (scale, origin) {
		var preTranslateStr = L.DomUtil.getTranslateString(origin),
			scaleStr = ' scale(' + scale + ') ',
			postTranslateStr = L.DomUtil.getTranslateString(origin.multiplyBy(-1));

		return preTranslateStr + scaleStr + postTranslateStr;
	},
	//设置位置
	setPosition: function (el, point) {
		el._leaflet_pos = point;//始终记录新位置
		if (L.Browser.webkit3d) {//如果支持3D
			el.style[L.DomUtil.TRANSFORM] =  L.DomUtil.getTranslateString(point);
			el.style['-webkit-backface-visibility'] = 'hidden';
		} else {
			el.style.left = point.x + 'px';
			el.style.top = point.y + 'px';
		}
	},
	//获取位置
	getPosition: function (el) {
		return el._leaflet_pos;//返回已经记录的新位置
	}
};

L.Util.extend(L.DomUtil, {
	//过渡
	TRANSITION: L.DomUtil.testProp(['transition', 'webkitTransition', 'OTransition', 'MozTransition', 'msTransition']),
	//变换
	TRANSFORM: L.DomUtil.testProp(['transformProperty', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform']),
	//变换开始
	TRANSLATE_OPEN: 'translate' + (L.Browser.webkit3d ? '3d(' : '('),
	//变换结束
	TRANSLATE_CLOSE: L.Browser.webkit3d ? ',0)' : ')'
});
