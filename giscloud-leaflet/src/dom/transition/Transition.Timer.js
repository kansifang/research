/*
 * L.Transition 继承并覆盖Transition类，以非CSS方式实现动画
 */
L.Transition = L.Transition.NATIVE ? L.Transition : L.Transition.extend({
	statics: {
		getTime: Date.now || function () {
			return +new Date();
		},

		TIMER: true,
		//动画函数参数
		EASINGS: {
			'ease': [0.25, 0.1, 0.25, 1.0],
			'linear': [0.0, 0.0, 1.0, 1.0],
			'ease-in': [0.42, 0, 1.0, 1.0],
			'ease-out': [0, 0, 0.58, 1.0],
			'ease-in-out': [0.42, 0, 0.58, 1.0]
		},
		//自定义dom属性的获取方式
		CUSTOM_PROPS_GETTERS: {
			position: L.DomUtil.getPosition
		},
		//像素转数字正则 "10.5px" (->px)
		UNIT_RE: /^[\d\.]+(\D*)$/
	},

	options: {
		fps: 50//频率
	},

	initialize: function (/*dom对象*/el, /*参数对象*/options) {
		this._el = el;
		//参数合并
		L.Util.extend(this.options, options);
		//缓动曲线函数
		var easings = L.Transition.EASINGS[this.options.easing] || L.Transition.EASINGS.ease;

		this._p1 = new L.Point(0, 0);//起点
		this._p2 = new L.Point(easings[0], easings[1]);
		this._p3 = new L.Point(easings[2], easings[3]);
		this._p4 = new L.Point(1, 1);//终点
		//步进
		this._step = L.Util.bind(this._step, this);
		//将帧数转换为毫秒数
		this._interval = Math.round(1000 / this.options.fps);
	},
	//动画执行
	run: function (props) {
		this._props = {};
		
		var getters = L.Transition.CUSTOM_PROPS_GETTERS,
			re = L.Transition.UNIT_RE;

		this.fire('start');
		//获取每个属性上次的位置
		for (var prop in props) {//遍历对象
			if (props.hasOwnProperty(prop)) {//非继承属性
				var p = {};
				if (prop in getters) {
					p.from = getters[prop](this._el);
				} else {
					var matches = this._el.style[prop].match(re);
					p.from = parseFloat(matches[0]);
					p.unit = matches[1];//单位
				}
				p.to = props[prop];
				this._props[prop] = p;
			}
		}
		//清除timer
		clearInterval(this._timer);
		//执行动画
		this._timer = setInterval(this._step, this._interval);
		this._startTime = L.Transition.getTime();//记录开始时间
	},

	_step: function () {
		var time = L.Transition.getTime(),
			elapsed = time - this._startTime,//已经历时间
			duration = this.options.duration * 1000;//持续时间

		if (elapsed < duration) {//仍在持续时间范围内
			//三次方贝塞尔曲线
			this._runFrame(this._cubicBezier(elapsed / duration));
		} else {//超出持续时间，完成
			this._runFrame(1);
			this._complete();
		}
	},

	_runFrame: function (/*完成百分比*/percentComplete) {
		
		var setters = L.Transition.CUSTOM_PROPS_SETTERS,
			prop, p, value;

		for (prop in this._props) {
			if (this._props.hasOwnProperty(prop)) {//非继承属性
				p = this._props[prop];
				if (prop in setters) {//通过预定义方法设置
					//获取本次位置
					value = p.to.subtract(p.from).multiplyBy(percentComplete).add(p.from);
					setters[prop](this._el, value);
				} else {//直接设置
					this._el.style[prop] = ((p.to - p.from) * percentComplete + p.from) + p.unit;
				}
			}
		}
		this.fire('step');
	},

	_complete: function () {
		clearInterval(this._timer);
		this.fire('end');
	},
	// 三次方贝塞尔曲线
	_cubicBezier: function (/*完成时间百分比*/t) {
		var a = Math.pow(1 - t, 3),
			b = 3 * Math.pow(1 - t, 2) * t,
			c = 3 * (1 - t) * Math.pow(t, 2),
			d = Math.pow(t, 3),
			p1 = this._p1.multiplyBy(a),
			p2 = this._p2.multiplyBy(b),
			p3 = this._p3.multiplyBy(c),
			p4 = this._p4.multiplyBy(d);
		return p1.add(p2).add(p3).add(p4).y;
	}
});
