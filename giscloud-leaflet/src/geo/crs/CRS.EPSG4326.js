
L.CRS.EPSG4326 = L.Util.extend({}, L.CRS, {
	code: 'EPSG:4326',
	//投影方式
	projection: L.Projection.LonLat,
	
	transformation: new L.Transformation(1 / 360, 0.5, -1 / 360, 0.5)
});
