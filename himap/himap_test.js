window.addEventListener("load", eventWindowLoaded, false);

function canvasSupport() {
    return Modernizr.canvas;
}

function eventWindowLoaded() {
    canvasApp();
}
var himap = null;

function canvasApp() {

    if (!canvasSupport()) {
        return;
    }

    var theCanvas = document.getElementById("canvasOne");

    himap = new HiMap(theCanvas);

    himap.currentBBox = [116.124173828, 40.118023682, 116.685413282, 39.781390381]; //TODO:应该从各个图层中计算获取
    himap.fullExtentBBox = [116.124173828, 40.118023682, 116.685413282, 39.781390381]; //设置全局显示大小

    subwayline = new GeojsonLayer(subway_line);
    subwaypoint = new GeojsonLayer(subway_point);

    //样式
    subwayline.style = {
        strokeStyle: "#1C8607",
        lineWidth: 6,
        theme: {
            type: "uniqueTheme",
            field: "lineid",
            values: {
                1: {
                    strokeStyle: "#BE3830"
                },
                2: {
                    strokeStyle: "#0E6099"
                },
                4: {
                    strokeStyle: "#008F9D"
                },
                5: {
                    strokeStyle: "#A81D80"
                },
                13: {
                    strokeStyle: "#F4E80D"
                },
                18: {
                    strokeStyle: "#BE3830"
                },
                10: {
                    strokeStyle: "#0699C4"
                },
                21: {
                    strokeStyle: "#A29ABF"
                },
                22: {
                    strokeStyle: "#A29ABF"
                },
                8: {
                    strokeStyle: "#009E6C"
                },
                9: {
                    strokeStyle: "#DC0074"
                },
                14: {
                    strokeStyle: "#E183B5"
                },
                15: {
                    strokeStyle: "#6B337E"
                }
            }
        }
    };
    subwaypoint.style = {
        fillStyle: "#FFFFFF",
        strokeStyle: "#DE0006",
        radius: 3.5,
        labelField: "value",
        labelColor: "#000000",
        labelMinScale: 120000
    };



    himap.addLayer(subwayline);
    himap.addLayer(subwaypoint);
    himap.start();


    //====================工具栏====================
    var btnZoomIn = document.getElementById("btnZoomIn");
    btnZoomIn.addEventListener("click", zoomIn, false);

    var btnZoomOut = document.getElementById("btnZoomOut");
    btnZoomOut.addEventListener("click", zoomOut, false);

    var btnFullView = document.getElementById("btnFullView");
    btnFullView.addEventListener("click", fullView, false);

    var btnZoomInRect = document.getElementById("btnZoomInRect");
    btnZoomInRect.addEventListener("click", zoomInRect, false);

    var btnZoomOutRect = document.getElementById("btnZoomOutRect");
    btnZoomOutRect.addEventListener("click", zoomOutRect, false);


    function fullView() {
        himap.fullView();
    }

    function zoomIn() {
        himap.zoomIn();
    }

    function zoomOut() {
        himap.zoomOut();
    }

    function zoomInRect() {
        himap.zoomInWithRect();
    }

    function zoomOutRect() {
        himap.zoomOutWithRect();
    }

}