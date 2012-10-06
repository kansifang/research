
L.CRS = {
	//经纬度转像素
	latLngToPoint: function (latlng, zoom) { // (LatLng, Number) -> Point
		var projectedPoint = this.projection.project(latlng), scale = this.scale(zoom);
		return this.transformation._transform(projectedPoint, scale);
	},
	//像素转经纬度
	pointToLatLng: function (point, zoom, unbounded) { // (Point, Number[, Boolean]) -> LatLng
		var scale = this.scale(zoom), untransformedPoint = this.transformation.untransform(point, scale);
		return this.projection.unproject(untransformedPoint, unbounded);
		//TODO get rid of 'unbounded' everywhere
	},
	//投影
	project: function (latlng) {
		return this.projection.project(latlng);
	},
	//当前级别的像素最大值
	scale: function (zoom) {
		return 256 * Math.pow(2, zoom);
	}
};
