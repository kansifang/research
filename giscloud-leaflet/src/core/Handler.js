/*
 * L.Handler classes are used internally to inject interaction features to classes like Map and Marker.
 * L.Handler类用于内部注入互动功能，如地图和标记类。
 */

L.Handler = L.Class.extend({
	initialize: function (map) {
		this._map = map;
	},

	enable: function () {
		if (this._enabled) {
			return;
		}
		this._enabled = true;
		this.addHooks();
	},

	disable: function () {
		if (!this._enabled) {
			return;
		}
		this._enabled = false;
		this.removeHooks();
	},

	enabled: function () {
		return !!this._enabled;
	}
});
