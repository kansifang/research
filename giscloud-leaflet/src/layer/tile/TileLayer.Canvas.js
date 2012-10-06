L.TileLayer.Canvas = L.TileLayer.extend({
	options: {
		//异步
		async: false
	},
	//初始化
	initialize: function (options) {
		//合并属性
		L.Util.setOptions(this, options);
	},
	//绘制
	redraw: function () {
		var i, tiles = this._tiles;

		for (i in tiles) {
			if (tiles.hasOwnProperty(i)) {
				this._redrawTile(tiles[i]);
			}
		}
	},
	//绘制切片
	_redrawTile: function (tile) {
		this.drawTile(tile, tile._tilePoint, tile._zoom);
	},
	//覆写基类方法:为创建切片节点克隆对象
	_createTileProto: function () {
		var proto = this._canvasProto = L.DomUtil.create('canvas', 'leaflet-tile');

		var tileSize = this.options.tileSize;
		proto.width = tileSize;
		proto.height = tileSize;
	},
	//克隆切片节点
	_createTile: function () {
		var tile = this._canvasProto.cloneNode(false);
		//阻止切片默认行为
		tile.onselectstart = tile.onmousemove = L.Util.falseFn;
		return tile;
	},
	//加载切片
	_loadTile: function (/*节点*/tile, /*行列号*/tilePoint, /*视野级别*/zoom) {
		tile._layer = this;//绑定图层对象
		tile._tilePoint = tilePoint;//绑定切片行列号
		tile._zoom = zoom;//绑定视野级别
		//请求接口
		this.drawTile(tile, tilePoint, zoom);
		
		if (!this.options.async) {//如果非异步加载
			this.tileDrawn(tile);
		}
	},
	//接口：用于绘制切片内容
	drawTile: function (tile, tilePoint, zoom) {
		// override with rendering code
	},
	//节点加载完成
	tileDrawn: function (tile) {
		this._tileOnLoad.call(tile);
	}
});
