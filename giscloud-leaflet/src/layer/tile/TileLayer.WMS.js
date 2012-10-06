L.TileLayer.WMS = L.TileLayer.extend({
	//默认WMS参数
	defaultWmsParams: {
		//服务名称
		service: 'WMS',
		//请求参数
		request: 'GetMap',
		//版本
		version: '1.1.1',
		
		layers: '',
		styles: '',
		format: 'image/jpeg',
		transparent: false
	},

	initialize: function (url, options) { // (String, Object)
		this._url = url;
		
		var wmsParams = L.Util.extend({}, this.defaultWmsParams);
		wmsParams.width = wmsParams.height = this.options.tileSize;

		for (var i in options) {
			// all keys that are not TileLayer options go to WMS params
			if (!this.options.hasOwnProperty(i)) {
				wmsParams[i] = options[i];
			}
		}

		this.wmsParams = wmsParams;
		//更新参数
		L.Util.setOptions(this, options);
	},
	//图层叠加后，被引擎调用的接口
	onAdd: function (map, insertAtTheBottom) {
		//wms版本大于1.3时参数有变化
		var projectionKey = parseFloat(this.wmsParams.version) >= 1.3 ? 'crs' : 'srs';
		//增加投影方式参数
		this.wmsParams[projectionKey] = map.options.crs.code;
		//调用基类的onAdd方法
		L.TileLayer.prototype.onAdd.call(this, map, insertAtTheBottom);
	},
	//获取图片URL
	getTileUrl: function (tilePoint, zoom) { // (Point, Number) -> String
		var map = this._map,
			crs = map.options.crs,
			
			tileSize = this.options.tileSize,
			//西北切片位置
			nwPoint = tilePoint.multiplyBy(tileSize),
			//东南点位置
			sePoint = nwPoint.add(new L.Point(tileSize, tileSize)),
			//反投影
			nwMap = map.unproject(nwPoint, zoom, true),
			seMap = map.unproject(sePoint, zoom, true),
			
			nw = crs.project(nwMap),
			se = crs.project(seMap),
			
			bbox = [nw.x, se.y, se.x, nw.y].join(',');
		
		return this._url + L.Util.getParamString(this.wmsParams) + "&bbox=" + bbox;
	}
});
