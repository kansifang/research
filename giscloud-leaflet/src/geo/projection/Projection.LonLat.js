
L.Projection.LonLat = {
	//投影
	project: function (latlng) {
		return new L.Point(latlng.lng, latlng.lat);
	},
	//反投影
	unproject: function (point, unbounded) {
		return new L.LatLng(point.y, point.x, unbounded);
	}
};
