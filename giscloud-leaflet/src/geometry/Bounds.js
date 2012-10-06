/*
 * L.Bounds represents a rectangular area on the screen in pixel coordinates.
 * L.Bounds代表在屏幕像素坐标的矩形区域。
 */

L.Bounds = L.Class.extend({
	initialize: function (min, max) {	//(Point, Point) or Point[]
		if (!min) {
			return;
		}
		//兼容传参方式
		var points = (min instanceof Array ? min : [min, max]);
		for (var i = 0, len = points.length; i < len; i++) {
			this.extend(points[i]);
		}
	},
	
	//扩大范围包含给定的点
	extend: function (/*Point*/ point) {
		if (!this.min && !this.max) {//初次设置
			this.min = new L.Point(point.x, point.y);
			this.max = new L.Point(point.x, point.y);
		} else {
			this.min.x = Math.min(point.x, this.min.x);
			this.max.x = Math.max(point.x, this.max.x);
			this.min.y = Math.min(point.y, this.min.y);
			this.max.y = Math.max(point.y, this.max.y);
		}
	},
	//获取中心点
	getCenter: function (round)/*->Point*/ {
		return new L.Point(
				(this.min.x + this.max.x) / 2,
				(this.min.y + this.max.y) / 2,
		round);
	},
	//判断是否包含（bounds包含，point包含）
	contains: function (/*Bounds or Point*/ obj)/*->Boolean*/ {
		var min, max;

		if (obj instanceof L.Bounds) {
			min = obj.min;
			max = obj.max;
		} else {
			min = max = obj;
		}
		return (min.x >= this.min.x) && (max.x <= this.max.x) && (min.y >= this.min.y) && (max.y <= this.max.y);
	},
	//判断是否相交
	intersects: function (/*Bounds*/ bounds) {
		var min = this.min,
			max = this.max,
			min2 = bounds.min,
			max2 = bounds.max;

		var xIntersects = (max2.x >= min.x) && (min2.x <= max.x),
			yIntersects = (max2.y >= min.y) && (min2.y <= max.y);

		return xIntersects && yIntersects;
	}

});
