//扩展事件类，用于支持双击事件注册

//URL: https://gist.github.com/1016011
L.Util.extend(L.DomEvent, {
	//注册触摸屏的双击事件
	//灵感来自于托马斯·富克斯的Zepto触摸代码
	addDoubleTapListener: function (obj, handler, id) {
		var last,
			doubleTap = false,
			delay = 250,//延迟事件
			touch,
			pre = '_leaflet_',
			touchstart = 'touchstart',
			touchend = 'touchend';
		//触摸开始事件回调
		function onTouchStart(e) {
			if (e.touches.length !== 1) {//忽略多指触摸
				return;
			}

			var now = Date.now(),//记录当前时间
				delta = now - (last || now);

			touch = e.touches[0];
			doubleTap = (delta > 0 && delta <= delay);
			last = now;
		}
		//触摸结束事件回调
		function onTouchEnd(e) {
			if (doubleTap) {
				touch.type = 'dblclick';
				handler(touch);
				last = null;
			}
		}
		//绑定回调函数，用于注销事件时用
		obj[pre + touchstart + id] = onTouchStart;
		obj[pre + touchend + id] = onTouchEnd;

		obj.addEventListener(touchstart, onTouchStart, false);
		obj.addEventListener(touchend, onTouchEnd, false);
	},
	//用于移出触摸屏的双击事件
	removeDoubleTapListener: function (obj, id) {
		var pre = '_leaflet_';
		obj.removeEventListener(obj, obj[pre + 'touchstart' + id], false);
		obj.removeEventListener(obj, obj[pre + 'touchend' + id], false);
	}
});
