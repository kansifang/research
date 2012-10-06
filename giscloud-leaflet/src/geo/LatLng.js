/*
	CM.LatLng represents a geographical point with latitude and longtitude coordinates.
	L.LatLng 代表与地理纬度和经度坐标点。
*/

L.LatLng = function (/*Number*/ rawLat, /*Number*/ rawLng, /*Boolean*/ noWrap) {
	var lat = parseFloat(rawLat),
		lng = parseFloat(rawLng);

	if (isNaN(lat) || isNaN(lng)) {
		throw new Error('Invalid LatLng object: (' + rawLat + ', ' + rawLng + ')');
	}
	//是否跨图幅
	if (noWrap !== true) {
		//确保维度在-90至90之间
		lat = Math.max(Math.min(lat, 90), -90);					// clamp latitude into -90..90
		//确保在当前图幅的-180至180之间
		lng = (lng + 180) % 360 + ((lng < -180 || lng === 180) ? 180 : -180);	// wrap longtitude into -180..180
	}
	//TODO change to lat() & lng()
	this.lat = lat;
	this.lng = lng;
};

L.Util.extend(L.LatLng, {
	//扩展常量
	DEG_TO_RAD: Math.PI / 180,
	RAD_TO_DEG: 180 / Math.PI,
	MAX_MARGIN: 1.0E-9 // max margin of error for the "equals" check
});

L.LatLng.prototype = {
	//判断两个经纬度是否相同
	equals: function (/*LatLng*/ obj) {
		if (!(obj instanceof L.LatLng)) {
			return false;
		}

		var margin = Math.max(Math.abs(this.lat - obj.lat), Math.abs(this.lng - obj.lng));
		return margin <= L.LatLng.MAX_MARGIN;
	},
	//重写toString方法，将经纬度转字符串
	toString: function () {
		return 'LatLng(' +
				L.Util.formatNum(this.lat) + ', ' +
				L.Util.formatNum(this.lng) + ')';
	},
	//球面两点距离，半正矢距离公式：http://en.wikipedia.org/wiki/Haversine_formula
	distanceTo: function (/*LatLng*/ other)/*->Double*/ {
		var R = 6378137, // earth radius in meters
			d2r = L.LatLng.DEG_TO_RAD,
			dLat = (other.lat - this.lat) * d2r,
			dLon = (other.lng - this.lng) * d2r,
			lat1 = this.lat * d2r,
			lat2 = other.lat * d2r,
			sin1 = Math.sin(dLat / 2),
			sin2 = Math.sin(dLon / 2);

		var a = sin1 * sin1 + sin2 * sin2 * Math.cos(lat1) * Math.cos(lat2);

		return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	}
};
