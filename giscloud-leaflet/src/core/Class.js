/*
 * Class powers the OOP facilities of the library. Thanks to John Resig and Dean Edwards for inspiration!
 * 类库的面向对象的设施。感谢约翰Resig的院长爱德华兹的灵感！
 */

//类对象
L.Class = function () {};
// 扩展类，增加继承的方法
L.Class.extend = function (/*Object*/ props) /*-> Class*/ {

	// extended class with the new prototype
	// 使用新原型扩展类
	var NewClass = function () {
		if (this.initialize) {
			//调用初始化方法
			this.initialize.apply(this, arguments);
		}
	};

	// instantiate class without calling constructor
	// 没有调用构造函数实例化类
	var F = function () {};
	F.prototype = this.prototype;

	var proto = new F();
	proto.constructor = NewClass;

	NewClass.prototype = proto;

	//继承父类的静态属性
	for (var i in this) {
		if (this.hasOwnProperty(i) && i !== 'prototype') {
			NewClass[i] = this[i];
		}
	}

	// mix static properties into the class
	// 混合静态属性到类中
	if (props.statics) {
		L.Util.extend(NewClass, props.statics);
		delete props.statics;
	}

	// mix includes into the prototype
	// 混合包含对象到原型
	if (props.includes) {
		L.Util.extend.apply(null, [proto].concat(props.includes));
		delete props.includes;
	}

	// merge options
	// 合并参数
	if (props.options && proto.options) {
		props.options = L.Util.extend({}, proto.options, props.options);
	}

	// mix given properties into the prototype
	// 混合成的原型给定的属性
	L.Util.extend(proto, props);

	return NewClass;
};


// method for adding properties to prototype
// 扩展类：增加属性或方法到原型
L.Class.include = function (props) {
	L.Util.extend(this.prototype, props);
};
// 扩展类：合并属性
L.Class.mergeOptions = function (options) {
	L.Util.extend(this.prototype.options, options);
};