/*
 * L.Point represents a point with x and y coordinates.
 * L.Point 代表一对像素坐标点
 */
//round:是否求整
L.Point = function (/*Number*/ x, /*Number*/ y, /*Boolean*/ round) {
	this.x = (round ? Math.round(x) : x);
	this.y = (round ? Math.round(y) : y);
};

L.Point.prototype = {
	//返回一个经过叠加的克隆点
	add: function (point) {
		return this.clone()._add(point);
	},
	//叠加
	_add: function (point) {
		this.x += point.x;
		this.y += point.y;
		return this;
	},
	//返回一个经过叠减的克隆点
	subtract: function (point) {
		return this.clone()._subtract(point);
	},
	//叠减
	// destructive subtract (faster)
	_subtract: function (point) {
		this.x -= point.x;
		this.y -= point.y;
		return this;
	},
	//除以
	divideBy: function (num, round) {
		return new L.Point(this.x / num, this.y / num, round);
	},
	//乘以
	multiplyBy: function (num) {
		return new L.Point(this.x * num, this.y * num);
	},
	//到另一像素点的差
	distanceTo: function (point) {
		var x = point.x - this.x,
			y = point.y - this.y;
		return Math.sqrt(x * x + y * y);
	},
	//返回一个求整的克隆点
	round: function () {
		return this.clone()._round();
	},

	//求整
	_round: function () {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		return this;
	},
	//克隆一个相同点
	clone: function () {
		return new L.Point(this.x, this.y);
	},
	//转字符串
	toString: function () {
		return 'Point(' +
				L.Util.formatNum(this.x) + ', ' +
				L.Util.formatNum(this.y) + ')';
	}
};
