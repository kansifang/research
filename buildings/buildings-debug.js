var OSMBuildings = (function (global) {
    // 常量
    var PI = Math.PI,
        HALF_PI = PI / 2,
        QUARTER_PI = PI / 4,
        RAD = 180 / PI,

        MIN_ZOOM = 14,
        // for buildings only, GeoJSON should not be affected

        CAM_Z = 400,
        MAX_HEIGHT = CAM_Z - 50,

        LAT = 'latitude',
        LON = 'longitude',
        HEIGHT = 0,
        FOOTPRINT = 1,
        COLOR = 2,
        IS_NEW = 3;

    // 对象访问快捷方式
    var Int32Array = Int32Array || Array,
        exp = Math.exp,
        log = Math.log,
        tan = Math.tan,
        atan = Math.atan,
        min = Math.min,
        max = Math.max,
        doc = global.document;


    // 颜色处理对象
    var Color = (function () {

        function hsla2rgb(hsla) {
            var r, g, b;

            if (hsla.s === 0) {
                r = g = b = hsla.l; // achromatic
            } else {
                var
                q = hsla.l < 0.5 ? hsla.l * (1 + hsla.s) : hsla.l + hsla.s - hsla.l * hsla.s,
                    p = 2 * hsla.l - q;
                r = hue2rgb(p, q, hsla.h + 1 / 3);
                g = hue2rgb(p, q, hsla.h);
                b = hue2rgb(p, q, hsla.h - 1 / 3);
            }
            return new Color(~~ (r * 255), ~~ (g * 255), ~~ (b * 255), hsla.a);
        }

        function hue2rgb(p, q, t) {
            if (t < 0) {
                t += 1;
            }
            if (t > 1) {
                t -= 1;
            }
            if (t < 1 / 6) {
                return p + (q - p) * 6 * t;
            }
            if (t < 1 / 2) {
                return q;
            }
            if (t < 2 / 3) {
                return p + (q - p) * (2 / 3 - t) * 6;
            }
            return p;
        }

        function C(r, g, b, a) {
            this.r = r;
            this.g = g;
            this.b = b;
            this.a = arguments.length < 4 ? 1 : a;
        }

        var proto = C.prototype;

        proto.toString = function () {
            return 'rgba(' + [this.r, this.g, this.b, this.a.toFixed(2)].join(',') + ')';
        };

        proto.adjustLightness = function (l) {
            var hsla = Color.toHSLA(this);
            hsla.l *= l;
            hsla.l = Math.min(1, Math.max(0, hsla.l));
            return hsla2rgb(hsla);
        };

        proto.adjustAlpha = function (a) {
            return new Color(this.r, this.g, this.b, this.a * a);
        };

        C.parse = function (str) {
            var m;
            if (~str.indexOf('#')) {
                m = str.match(/^#?(\w{2})(\w{2})(\w{2})(\w{2})?$/);
                return new Color(
                parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16), m[4] ? parseInt(m[4], 16) / 255 : 1);
            }

            m = str.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/);
            if (m) {
                return new Color(
                parseInt(m[1], 10), parseInt(m[2], 10), parseInt(m[3], 10), m[4] ? parseFloat(m[5], 10) : 1);
            }
        };

        C.toHSLA = function (rgba) {
            var
            r = rgba.r / 255,
                g = rgba.g / 255,
                b = rgba.b / 255,
                max = Math.max(r, g, b),
                min = Math.min(r, g, b),
                h, s, l = (max + min) / 2,
                d;

            if (max === min) {
                h = s = 0; // achromatic
            } else {
                d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
                }
                h /= 6;
            }

            return {
                h: h,
                s: s,
                l: l,
                a: rgba.a
            };
        };

        return C;

    }());

    function B() {

        // 特定实例的私有变量
        var width = 0,
            height = 0,
            halfWidth = 0,
            halfHeight = 0,
            originX = 0,
            originY = 0,
            zoom, size,

            req,

            canvas, context,

            url, strokeRoofs, wallColor = new Color(200, 190, 180),
            roofColor = null,
            strokeColor = new Color(145, 140, 135),

            rawData, meta, data,

            zoomAlpha = 1,//透明度
            fadeFactor = 1,
            fadeTimer,

            minZoom = MIN_ZOOM,
            maxZoom = 20,
            camX, camY,

            isZooming = false;


		// 创建canvas 节点
        function createCanvas(parentNode) {
            canvas = doc.createElement('canvas');
            canvas.style.webkitTransform = 'translate3d(0,0,0)';
            canvas.style.position = 'absolute';
            canvas.style.pointerEvents = 'none';
            canvas.style.left = 0;
            canvas.style.top = 0;
            canvas.style.imageRendering = 'optimizeSpeed';
            parentNode.appendChild(canvas);
			
			
            context = canvas.getContext('2d');
            context.lineCap = 'round';
            context.lineJoin = 'round';
            context.lineWidth = 1;

            try{
				// 缩放时是否圆滑
                context.mozImageSmoothingEnabled = false;
            }catch(err){
				
			}
        }
		// 像素转经纬度
        function pixelToGeo(x, y) {
			
            var res = {};
            x /= size;
            y /= size;
            res[LAT] = y <= 0 ? 90 : y >= 1 ? -90 : RAD * (2 * atan(exp(PI * (1 - 2 * y))) - HALF_PI), res[LON] = (x === 1 ? 1 : (x % 1 + 1) % 1) * 360 - 180;
            return res;
        }
		// 经纬度转像素
        function geoToPixel(lat, lon) {
            var latitude = min(1, max(0, 0.5 - (log(tan(QUARTER_PI + HALF_PI * lat / 180)) / PI) / 2)),
                longitude = lon / 360 + 0.5;
            return {
                x: ~~ (longitude * size),
                y: ~~ (latitude * size)
            };
        }
        // 检测多边形环绕方向：顺时针或逆时针旋转
        function getPolygonWinding(points) {
            var x1, y1, x2, y2, a = 0;
            for (var i = 0, il = points.length - 3; i < il; i += 2) {
                x1 = points[i];
                y1 = points[i + 1];
                x2 = points[i + 2];
                y2 = points[i + 3];
                a += x1 * y2 - x2 * y1;
            }
            return (a / 2) > 0 ? 'CW' : 'CCW';
        }

		// 做多边形绕组顺时针。这是在客户端需要适当的背面剔除。
        function makeClockwiseWinding(points) {
            var winding = getPolygonWinding(points);
            if (winding === 'CW') {//顺时针
                return points;
            }
			//逆时针时，将数据反向排序，以正序
            var revPoints = [];
            for (var i = points.length - 2; i >= 0; i -= 2) {
                revPoints.push(points[i], points[i + 1]);
            }
            return revPoints;
        }
		// 将经纬度数据转化为当前视野级别地理像素坐标数据
        function scaleData(data, isNew) {
            var res = [],
                z = maxZoom - zoom;

            for (var i = 0, il = data.length; i < il; i++) {
                var item = data[i];
                var coords = item[FOOTPRINT];
				//多边形坐标数组
                var footprint = new Int32Array(coords.length);
                for (var j = 0, jl = coords.length - 1; j < jl; j += 2) {
                    var p = geoToPixel(coords[j], coords[j + 1]);
                    footprint[j] = p.x;
                    footprint[j + 1] = p.y;
                }
                res[i] = [];
				// 多边形高度
                res[i][HEIGHT] = min(item[HEIGHT] >> z, MAX_HEIGHT);
				// 多边形数组
                res[i][FOOTPRINT] = footprint;
				// 颜色
                res[i][COLOR] = item[COLOR];
				// ？
                res[i][IS_NEW] = isNew;
            }

            return res;
        }
		
		// 解析GEOJSON数据
        function parseGeoJSON(json, isLonLat, res) {
            if (res === undefined) {
                res = [];
            }

            var features = json[0] ? json : json.features,
                geometry, polygons, coords, properties, footprint, heightSum, propHeight, propWallColor, propRoofColor, lat = isLonLat ? 1 : 0,
                lon = isLonLat ? 0 : 1,
                alt = 2;

            if (features) {
                for (var i = 0, il = features.length; i < il; i++) {
                    parseGeoJSON(features[i], isLonLat, res);
                }
                return res;
            }

            if (json.type === 'Feature') {
                geometry = json.geometry;
                properties = json.properties;
            }
            //      else geometry = json

            if (geometry.type === 'Polygon') {
                polygons = [geometry.coordinates];
            }
            if (geometry.type === 'MultiPolygon') {
                polygons = geometry.coordinates;
            }

            if (polygons) {
                propHeight = properties.height;
                if (properties.color || properties.wallColor) {
                    propWallColor = Color.parse(properties.color || properties.wallColor);
                }
                if (properties.roofColor) {
                    propRoofColor = Color.parse(properties.roofColor);
                }

                for (var i = 0, il = polygons.length; i < il; i++) {
                    coords = polygons[i][0];
                    footprint = [];
                    heightSum = 0;
                    for (var j = 0, jl = coords.length; j < jl; j++) {
                        footprint.push(coords[j][lat], coords[j][lon]);
                        heightSum += propHeight || coords[j][alt] || 0;
                    }

                    if (heightSum) {
                        var item = [];
						// 平均高度
                        item[HEIGHT] = ~~ (heightSum / coords.length);
						// 多边形经纬度数组，顺时针
                        item[FOOTPRINT] = makeClockwiseWinding(footprint);
						// 颜色
                        if (propWallColor || propRoofColor) {
                            item[COLOR] = [propWallColor, propRoofColor];
                        }
                        res.push(item);
                    }
                }
            }

            return res;
        }
		
        function setData(json, isLonLat) {
            if (!json) {// 如果不存在GEOJSON数据
                rawData = null;
                render(); // effectively clears
                return;
            }
			// 解析GEOJSON数据
            rawData = parseGeoJSON(json, isLonLat);
            minZoom = 0;
            setZoom(zoom); // recalculating all zoom related variables
			
            meta = {
                n: 90,
                w: -180,
                s: -90,
                e: 180,
                x: 0,
                y: 0,
                z: zoom
            };
			// 将经纬度数据转化为地理像素坐标数据
            data = scaleData(rawData, true);

            fadeIn();
        }

		// 设置画布大小
        function setSize(w, h) {
            width = w;
            height = h;
            halfWidth = ~~ (width / 2);
            halfHeight = ~~ (height / 2);
            camX = halfWidth;
            camY = height;
            canvas.width = width;
            canvas.height = height;
        }
		
		// 设置原点，左上角点
        function setOrigin(x, y) {
            originX = x;
            originY = y;
        }
		// 设置视野
        function setZoom(z) {
            zoom = z;
			// 算zoom级别时地理像素宽度
            size = 256 << zoom;
			// 根据视野级别计算透明度
            zoomAlpha = 1 - (zoom - minZoom) * 0.3 / (maxZoom - minZoom);
        }

		// 当容器发生改变时，重渲染
        function onResize(e) {
            setSize(e.width, e.height);
            render();
        }
		// 移动时
        function onMove(e) {
            setOrigin(e.x, e.y);
            render();
        }
		// 移动结束，发送请求，重新渲染
        function onMoveEnd(e) {
            var nw = pixelToGeo(originX, originY),// northwest
                se = pixelToGeo(originX + width, originY + height); //southeast
            // check, whether viewport is still within loaded data bounding box
            
        }
		// 拖拽开始
        function onZoomStart(e) {
            isZooming = true;
            render(); // effectively clears
        }
		// 缩放结束
        function onZoomEnd(e) {
            isZooming = false;
            setZoom(e.zoom);
            if (!rawData) {
                return;
            }
            data = scaleData(rawData);
            render();// 重新渲染
        }


		// 开始显示，多边形高度变化效果
        function fadeIn() {
            fadeFactor = 0;
            clearInterval(fadeTimer);
            fadeTimer = setInterval(function () {
                fadeFactor += 0.1; //amount * easing
                if (fadeFactor > 1) {
                    clearInterval(fadeTimer);
                    fadeFactor = 1;
                    // unset 'already present' marker
                    for (var i = 0, il = data.length; i < il; i++) {
                        data[i][IS_NEW] = 0;
                    }
                }
                render();
            }, 33);
        }
		// 渲染，主函数
        function render() {
			// 清空画布
            context.clearRect(0, 0, width, height);
		
            // 渲染必备数据对象检验
            if (!meta || !data) {
                return;
            }

			// 尽在高级别下显示buildings，避免在缩放时渲染
            if (zoom < minZoom || isZooming) {
                return;
            }
			
            var h, m, x, y, 
				offX = originX - meta.x,//与原点的偏移量大小
                offY = originY - meta.y,
				// 墙壁rgba
				wallColorAlpha = wallColor.adjustAlpha(zoomAlpha) + '',
				// 屋顶rgba
                roofColorAlpha = (roofColor || wallColor.adjustLightness(1.2)).adjustAlpha(zoomAlpha) + '';
				
            if (strokeRoofs) {//线颜色
                context.strokeStyle = strokeColor.adjustAlpha(zoomAlpha) + '';
            }

            for (var i = 0, il = data.length; i < il; i++) {
                var item = data[i];

                var isVisible = false;
				// buildings 底部坐标
                var f = item[FOOTPRINT];
                var footprint = []; // typed array would be created each pass and is way too slow
                for (var j = 0, jl = f.length - 1; j < jl; j += 2) {
                    footprint[j] = x = (f[j] - offX);
                    footprint[j + 1] = y = (f[j + 1] - offY);

					// 检查轨迹是否有足够的能见度
                    if (!isVisible) {
                        isVisible = (x > 0 && x < width && y > 0 && y < height);
                    }
                }

                if (!isVisible) {
                    continue;
                }
				// 填充色
                context.fillStyle = item[COLOR] && item[COLOR][0] ? item[COLOR][0].adjustAlpha(zoomAlpha) + '' : wallColorAlpha;

				// 在fading in 时，动态计算高度
                h = item[IS_NEW] ? item[HEIGHT] * fadeFactor : item[HEIGHT];

                // 预先计算投影与高度比例 precalculating projection height scale
                m = CAM_Z / (CAM_Z - h);
				
                var roof = [],// typed array would be created each pass and is way too slow
                	walls = [];
				
                for (var j = 0, jl = footprint.length - 3; j < jl; j += 2) {
                    var ax = footprint[j],
						ay = footprint[j + 1],
						bx = footprint[j + 2],
						by = footprint[j + 3],

						// project 3d to 2d on extruded footprint
						// 
						_a = project(ax, ay, m),
						_b = project(bx, by, m);

                    // backface culling check. could this be precalculated partially?
                    if ((bx - ax) * (_a.y - ay) > (_a.x - ax) * (by - ay)) {
                        // face combining
                        if (!walls.length) {
                            walls.unshift(ay);
                            walls.unshift(ax);
                            walls.push(_a.x, _a.y);
                        }
                        walls.unshift(by);
                        walls.unshift(bx);
                        walls.push(_b.x, _b.y);
                    } else {
                        drawShape(walls);
                        walls = [];
                    }
                    roof[j] = _a.x;
                    roof[j + 1] = _a.y;
                }
				// 绘制墙壁
                drawShape(walls);

                // TODO refactor this to a lookup table
                // fill roof and optionally stroke it
                context.fillStyle = !item[COLOR] ? roofColorAlpha : // no item color => use default roof color (which is in worst case build from default wall color)
                item[COLOR][1] ? item[COLOR][1].adjustAlpha(zoomAlpha) + '' : // item roof color exists => adapt & use it
                roofColor ? roofColorAlpha : // default roof color exists => use it
                item[COLOR][0].adjustLightness(1.2).adjustAlpha(zoomAlpha) + '' // item wall color exists => adapt & use it
                ;
				//绘制屋顶
                drawShape(roof, strokeRoofs);
            }
        }

		// 绘制多边形
        function drawShape(points, stroke) {
            if (!points.length) {
                return;
            }

            context.beginPath();
            context.moveTo(points[0], points[1]);
            for (var i = 2, il = points.length; i < il; i += 2) {
                context.lineTo(points[i], points[i + 1]);
            }
            context.closePath();
            if (stroke) {
                context.stroke();
            }
            context.fill();
        }
		
        function project(x, y, m) {
            return {
                x: ~~ ((x - camX) * m + camX),
                y: ~~ ((y - camY) * m + camY)
            };
        }
		
		
		// 公共接口
        this.geoJSON = function (url, isLatLon) {
            setData(url, !isLatLon);
            return this;
        };
		 // needed as Leaflet fires moveend and zoomend together
        var mapOnMove, mapOnMoveEnd, mapOnZoomEnd, blockMoveEvent;
        

        this.addTo = function (map) {
            map.addLayer(this);
            return this;
        };

        this.onAdd = function (map) {
            this.map = map;

            createCanvas(map._panes.overlayPane);
            maxZoom = map._layersMaxZoom;
			
            setSize(map._size.x, map._size.y);
            var po = map.getPixelOrigin(); // changes on zoom only!
            setOrigin(po.x, po.y);
            setZoom(map._zoom);

            var lastX = 0,
                lastY = 0;

            mapOnMove = function () {
                var mp = L.DomUtil.getPosition(map._mapPane);
                camX = halfWidth - (mp.x - lastX);
                camY = height - (mp.y - lastY);
                render();
            };
			
            mapOnMoveEnd = function () {
                if (blockMoveEvent) {
                    blockMoveEvent = false;
                    return;
                }

                var mp = L.DomUtil.getPosition(map._mapPane),
                    po = map.getPixelOrigin();

                lastX = mp.x;
                lastY = mp.y;
                canvas.style.left = -mp.x + 'px';
                canvas.style.top = -mp.y + 'px';

                camX = halfWidth;
                camY = height;

                setSize(map._size.x, map._size.y); // in case this is triggered by resize
                setOrigin(po.x - mp.x, po.y - mp.y);
                onMoveEnd();
                render();
            };

            mapOnZoomEnd = function () {
                var mp = L.DomUtil.getPosition(map._mapPane),
                    po = map.getPixelOrigin();
                setOrigin(po.x - mp.x, po.y - mp.y);
                onZoomEnd({
                    zoom: map._zoom
                });
                blockMoveEvent = true;
            };

            map.on({
                move: mapOnMove,
                moveend: mapOnMoveEnd,
                zoomstart: onZoomStart,
                zoomend: mapOnZoomEnd
            });

            if (map.options.zoomAnimation) {
                canvas.className = 'leaflet-zoom-animated';
                //             map.on('zoomanim', onZoom);
            }


            render(); // in case of for re-adding this layer
        };
		
        //如果已经传递地图对象，则直接实例化
        if (arguments.length) {
            this.addTo(arguments[0]);
        }
    }
    return B;
	
}(this));