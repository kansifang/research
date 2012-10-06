/*
 * L.Transition 继承并覆盖Transition类，以CSS方式实现动画
 */

L.Transition = L.Transition.extend({
	// 静态
	statics: (function () {
		var transition = L.DomUtil.TRANSITION,
			transitionEnd = (transition === 'webkitTransition' || transition === 'OTransition' ?
				transition + 'End' : 'transitionend');

		return {
			// 是否支持过渡
			NATIVE: !!transition,
			// CSS3过渡类型
			TRANSITION: transition,
			// CSS3过度属性
			PROPERTY: transition + 'Property',
			// CSS3过度持续
			DURATION: transition + 'Duration',
			// CSS3过渡效果函数
			EASING: transition + 'TimingFunction',
			// CSS3过渡结束事件名称
			END: transitionEnd,
			
			// 使用逗号分隔的自定义动画属性
			CUSTOM_PROPS_PROPERTIES: {
				position: L.Browser.webkit ? L.DomUtil.TRANSFORM : 'top, left'
			}
		};
	}()),

	options: {
		fakeStepInterval: 100// 步长
	},

	initialize: function (/*HTMLElement*/ el, /*Object*/ options) {
		
		this._el = el;
		L.Util.setOptions(this, options);
		// 注册过渡效果结束事件
		L.DomEvent.addListener(el, L.Transition.END, this._onTransitionEnd, this);
		//触发步进事件
		this._onFakeStep = L.Util.bind(this._onFakeStep, this);
	},
	//动画执行
	run: function (/*执行动画的dom属性*/ props) {
		var prop,
			propsList = [],//执行动画的dom属性
			customProp = L.Transition.CUSTOM_PROPS_PROPERTIES;//自定义的动画属性
		//获取需要执行动画的dom属性
		for (prop in props) {
			if (props.hasOwnProperty(prop)) {//非继承属性
				prop = customProp[prop] ? customProp[prop] : prop;
				prop = this._dasherize(prop);
				propsList.push(prop);
			}
		}
		// 过渡持续时间
		this._el.style[L.Transition.DURATION] = this.options.duration + 's';
		// 过渡函数
		this._el.style[L.Transition.EASING] = this.options.easing;
		// 过渡属性
		this._el.style[L.Transition.PROPERTY] = propsList.join(', ');
		
		this.lastTime  = +new Date();
		
		//逐个设置动画属性
		for (prop in props) {
			if (props.hasOwnProperty(prop)) {
				this._setProperty(prop, props[prop]);
			}
		}
		//打开执行标识
		this._inProgress = true;

		this.fire('start');
		
		if (L.Transition.NATIVE) {//如果存在原生支持类
			clearInterval(this._timer);//预清除动画
			//每100ms执行一次动画步进事件
			this._timer = setInterval(this._onFakeStep, this.options.fakeStepInterval);
		} else {//否则，执行动画结束
			this._onTransitionEnd();
		}
	},
	//格式化dom标识，MozTransform -> moz-transform
	_dasherize: (function () {
		var re = /([A-Z])/g;

		function replaceFn(w) {
			return '-' + w.toLowerCase();
		}

		return function (str) {
			return str.replace(re, replaceFn);
		};
	}()),

	_onFakeStep: function () {
		this.fire('step');
	},
	//动画结束
	_onTransitionEnd: function (e) {
		if (this._inProgress) {//如果动画还在执行
			this._inProgress = false;//关闭标识
			clearInterval(this._timer);//清除动画
			//关闭缓动Transition元素
			this._el.style[L.Transition.PROPERTY] = 'none';

			this.fire('step');

			if (e && e.type) {
				this.fire('end');
			}
		}
	}
});
