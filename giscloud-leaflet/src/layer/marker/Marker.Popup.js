/*
 * Popup extension to L.Marker, adding openPopup & bindPopup methods.
 * 为L.Marker扩展Popup, 增加 openPopup & bindPopup 方法.
 */

L.Marker.include({
	//打开信息窗体
	openPopup: function () {
		if (this._popup && this._map) {
			this._popup.setLatLng(this._latlng);
			this._map.openPopup(this._popup);
		}

		return this;
	},
	//关闭信息窗体
	closePopup: function () {
		if (this._popup) {
			this._popup._close();
		}
		return this;
	},
	//绑定信息窗体
	bindPopup: function (content, options) {
		var anchor = this.options.icon.options.popupAnchor || new L.Point(0, 0);

		if (options && options.offset) {
			anchor = anchor.add(options.offset);
		}

		options = L.Util.extend({offset: anchor}, options);

		if (!this._popup) {
			this.on('click', this.openPopup, this);
		}

		this._popup = new L.Popup(options, this)
			.setContent(content);

		return this;
	},
	//取消绑定信息窗体
	unbindPopup: function () {
		if (this._popup) {
			this._popup = null;
			this.off('click', this.openPopup);
		}
		return this;
	}
});
