var L, originalL;

if (typeof exports !== 'undefined') {
	L = exports;
} else {
	L = {};
	//保存冲突对象
	originalL = window.L;
	
	L.noConflict = function () {
		window.L = originalL;
		return L;
	};
	//写入对象到根对象
	window.L = L;
}

L.version = '0.4';
