//矢量数据传递标准
var JSON = {
    // 样式信息:本次请求所有包含的样式信息
    sty: {/* ID编号 ： 样式信息 */
        'id_1': {	//for polyline style
            "s": "#884478" 	//边线色
        },
        'id_2': {	// for polygon style
            "f": "#006600",//填充色
            "s": "#884478" 	//边线色
        },
        'id_3': {	// for marker style
            'u': {x: 24, y: 24}//css sprite位置
        }
    },
    geom: {
        '840.386': {	//for each tile
            m: [{	// for markers
                'i': 123456,	//PGUID
                's': 'id_3',	//样式ID，无此属性，为无图标类型标注
                'x': 12,		//相对于切片左上角位置，X
                'y': 24 		// Y
            }],
            y: [{	// for polylines
                'i': 2345678,	//PGUID
                's': 'id_1',	//样式ID
                'p': [10, 23, 13, 25, 18, 36]	//相对于切片左上角路径
            }],
            g: [{	// for polygons
                'i': 2345678,
                's': 'id_3',
                'p': [11, 22, 15, 28, 19, 100]
            }]
        }
    }
}