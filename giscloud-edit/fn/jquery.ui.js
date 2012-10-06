/*!
 * jQuery UI 1.8.10
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(f, e) {
    function a(c) {
        return ! f(c).parents().andSelf().filter(function() {
            return f.curCSS(this, "visibility") === "hidden" || f.expr.filters.hidden(this)
        }).length
    }
    f.ui = f.ui || {};
    if (!f.ui.version) {
        f.extend(f.ui, {
            version: "1.8.10",
            keyCode: {
                ALT: 18,
                BACKSPACE: 8,
                CAPS_LOCK: 20,
                COMMA: 188,
                COMMAND: 91,
                COMMAND_LEFT: 91,
                COMMAND_RIGHT: 93,
                CONTROL: 17,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                INSERT: 45,
                LEFT: 37,
                MENU: 93,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SHIFT: 16,
                SPACE: 32,
                TAB: 9,
                UP: 38,
                WINDOWS: 91
            }
        });
        f.fn.extend({
            _focus: f.fn.focus,
            focus: function(g, c) {
                return typeof g === "number" ? this.each(function() {
                    var h = this;
                    setTimeout(function() {
                        f(h).focus();
                        c && c.call(h)
                    },
                    g)
                }) : this._focus.apply(this, arguments)
            },
            scrollParent: function() {
                var c;
                c = f.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                    return /(relative|absolute|fixed)/.test(f.curCSS(this, "position", 1)) && /(auto|scroll)/.test(f.curCSS(this, "overflow", 1) + f.curCSS(this, "overflow-y", 1) + f.curCSS(this, "overflow-x", 1))
                }).eq(0) : this.parents().filter(function() {
                    return /(auto|scroll)/.test(f.curCSS(this, "overflow", 1) + f.curCSS(this, "overflow-y", 1) + f.curCSS(this, "overflow-x", 1))
                }).eq(0);
                return /fixed/.test(this.css("position")) || !c.length ? f(document) : c
            },
            zIndex: function(g) {
                if (g !== e) {
                    return this.css("zIndex", g)
                }
                if (this.length) {
                    g = f(this[0]);
                    for (var c; g.length && g[0] !== document;) {
                        c = g.css("position");
                        if (c === "absolute" || c === "relative" || c === "fixed") {
                            c = parseInt(g.css("zIndex"), 10);
                            if (!isNaN(c) && c !== 0) {
                                return c
                            }
                        }
                        g = g.parent()
                    }
                }
                return 0
            },
            disableSelection: function() {
                return this.bind((f.support.selectstart ? "selectstart": "mousedown") + ".ui-disableSelection",
                function(c) {
                    c.preventDefault()
                })
            },
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            }
        });
        f.each(["Width", "Height"],
        function(g, c) {
            function n(r, q, o, h) {
                f.each(m,
                function() {
                    q -= parseFloat(f.curCSS(r, "padding" + this, true)) || 0;
                    if (o) {
                        q -= parseFloat(f.curCSS(r, "border" + this + "Width", true)) || 0
                    }
                    if (h) {
                        q -= parseFloat(f.curCSS(r, "margin" + this, true)) || 0
                    }
                });
                return q
            }
            var m = c === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
            k = c.toLowerCase(),
            j = {
                innerWidth: f.fn.innerWidth,
                innerHeight: f.fn.innerHeight,
                outerWidth: f.fn.outerWidth,
                outerHeight: f.fn.outerHeight
            };
            f.fn["inner" + c] = function(h) {
                if (h === e) {
                    return j["inner" + c].call(this)
                }
                return this.each(function() {
                    f(this).css(k, n(this, h) + "px")
                })
            };
            f.fn["outer" + c] = function(o, h) {
                if (typeof o !== "number") {
                    return j["outer" + c].call(this, o)
                }
                return this.each(function() {
                    f(this).css(k, n(this, o, true, h) + "px")
                })
            }
        });
        f.extend(f.expr[":"], {
            data: function(g, c, h) {
                return !! f.data(g, h[3])
            },
            focusable: function(g) {
                var c = g.nodeName.toLowerCase(),
                h = f.attr(g, "tabindex");
                if ("area" === c) {
                    c = g.parentNode;
                    h = c.name;
                    if (!g.href || !h || c.nodeName.toLowerCase() !== "map") {
                        return false
                    }
                    g = f("img[usemap=#" + h + "]")[0];
                    return !! g && a(g)
                }
                return (/input|select|textarea|button|object/.test(c) ? !g.disabled: "a" == c ? g.href || !isNaN(h) : !isNaN(h)) && a(g)
            },
            tabbable: function(g) {
                var c = f.attr(g, "tabindex");
                return (isNaN(c) || c >= 0) && f(g).is(":focusable")
            }
        });
        f(function() {
            var g = document.body,
            c = g.appendChild(c = document.createElement("div"));
            f.extend(c.style, {
                minHeight: "100px",
                height: "auto",
                padding: 0,
                borderWidth: 0
            });
            f.support.minHeight = c.offsetHeight === 100;
            f.support.selectstart = "onselectstart" in c;
            g.removeChild(c).style.display = "none"
        });
        f.extend(f.ui, {
            plugin: {
                add: function(g, c, j) {
                    g = f.ui[g].prototype;
                    for (var h in j) {
                        g.plugins[h] = g.plugins[h] || [];
                        g.plugins[h].push([c, j[h]])
                    }
                },
                call: function(g, c, j) {
                    if ((c = g.plugins[c]) && g.element[0].parentNode) {
                        for (var h = 0; h < c.length; h++) {
                            g.options[c[h][0]] && c[h][1].apply(g.element, j)
                        }
                    }
                }
            },
            contains: function(g, c) {
                return document.compareDocumentPosition ? g.compareDocumentPosition(c) & 16 : g !== c && g.contains(c)
            },
            hasScroll: function(g, c) {
                if (f(g).css("overflow") === "hidden") {
                    return false
                }
                c = c && c === "left" ? "scrollLeft": "scrollTop";
                var h = false;
                if (g[c] > 0) {
                    return true
                }
                g[c] = 1;
                h = g[c] > 0;
                g[c] = 0;
                return h
            },
            isOverAxis: function(g, c, h) {
                return g > c && g < c + h
            },
            isOver: function(g, c, n, m, k, j) {
                return f.ui.isOverAxis(g, n, k) && f.ui.isOverAxis(c, m, j)
            }
        })
    }
})(jQuery);
/*!
 * jQuery UI Widget 1.8.10
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(a, f) {
    if (a.cleanData) {
        var e = a.cleanData;
        a.cleanData = function(g) {
            for (var j = 0,
            h; (h = g[j]) != null; j++) {
                a(h).triggerHandler("remove")
            }
            e(g)
        }
    } else {
        var c = a.fn.remove;
        a.fn.remove = function(g, h) {
            return this.each(function() {
                if (!h) {
                    if (!g || a.filter(g, [this]).length) {
                        a("*", this).add([this]).each(function() {
                            a(this).triggerHandler("remove")
                        })
                    }
                }
                return c.call(a(this), g, h)
            })
        }
    }
    a.widget = function(g, m, k) {
        var j = g.split(".")[0],
        h;
        g = g.split(".")[1];
        h = j + "-" + g;
        if (!k) {
            k = m;
            m = a.Widget
        }
        a.expr[":"][h] = function(n) {
            return !! a.data(n, g)
        };
        a[j] = a[j] || {};
        a[j][g] = function(n, o) {
            arguments.length && this._createWidget(n, o)
        };
        m = new m;
        m.options = a.extend(true, {},
        m.options);
        a[j][g].prototype = a.extend(true, m, {
            namespace: j,
            widgetName: g,
            widgetEventPrefix: a[j][g].prototype.widgetEventPrefix || g,
            widgetBaseClass: h
        },
        k);
        a.widget.bridge(g, a[j][g])
    };
    a.widget.bridge = function(g, h) {
        a.fn[g] = function(n) {
            var m = typeof n === "string",
            k = Array.prototype.slice.call(arguments, 1),
            j = this;
            n = !m && k.length ? a.extend.apply(null, [true, n].concat(k)) : n;
            if (m && n.charAt(0) === "_") {
                return j
            }
            m ? this.each(function() {
                var q = a.data(this, g),
                o = q && a.isFunction(q[n]) ? q[n].apply(q, k) : q;
                if (o !== q && o !== f) {
                    j = o;
                    return false
                }
            }) : this.each(function() {
                var o = a.data(this, g);
                o ? o.option(n || {})._init() : a.data(this, g, new h(n, this))
            });
            return j
        }
    };
    a.Widget = function(g, h) {
        arguments.length && this._createWidget(g, h)
    };
    a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: false
        },
        _createWidget: function(g, j) {
            a.data(j, this.widgetName, this);
            this.element = a(j);
            this.options = a.extend(true, {},
            this.options, this._getCreateOptions(), g);
            var h = this;
            this.element.bind("remove." + this.widgetName,
            function() {
                h.destroy()
            });
            this._create();
            this._trigger("create");
            this._init()
        },
        _getCreateOptions: function() {
            return a.metadata && a.metadata.get(this.element[0])[this.widgetName]
        },
        _create: function() {},
        _init: function() {},
        destroy: function() {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName);
            this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
        },
        widget: function() {
            return this.element
        },
        option: function(g, j) {
            var h = g;
            if (arguments.length === 0) {
                return a.extend({},
                this.options)
            }
            if (typeof g === "string") {
                if (j === f) {
                    return this.options[g]
                }
                h = {};
                h[g] = j
            }
            this._setOptions(h);
            return this
        },
        _setOptions: function(g) {
            var h = this;
            a.each(g,
            function(k, j) {
                h._setOption(k, j)
            });
            return this
        },
        _setOption: function(g, h) {
            this.options[g] = h;
            if (g === "disabled") {
                this.widget()[h ? "addClass": "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", h)
            }
            return this
        },
        enable: function() {
            return this._setOption("disabled", false)
        },
        disable: function() {
            return this._setOption("disabled", true)
        },
        _trigger: function(g, m, k) {
            var j = this.options[g];
            m = a.Event(m);
            m.type = (g === this.widgetEventPrefix ? g: this.widgetEventPrefix + g).toLowerCase();
            k = k || {};
            if (m.originalEvent) {
                g = a.event.props.length;
                for (var h; g;) {
                    h = a.event.props[--g];
                    m[h] = m.originalEvent[h]
                }
            }
            this.element.trigger(m, k);
            return ! (a.isFunction(j) && j.call(this.element[0], m, k) === false || m.isDefaultPrevented())
        }
    }
})(jQuery);
/*!
 * jQuery UI Mouse 1.8.10
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(a) {
    a.widget("ui.mouse", {
        options: {
            cancel: ":input,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var c = this;
            this.element.bind("mousedown." + this.widgetName,
            function(e) {
                return c._mouseDown(e)
            }).bind("click." + this.widgetName,
            function(e) {
                if (true === a.data(e.target, c.widgetName + ".preventClickEvent")) {
                    a.removeData(e.target, c.widgetName + ".preventClickEvent");
                    e.stopImmediatePropagation();
                    return false
                }
            });
            this.started = false
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName)
        },
        _mouseDown: function(g) {
            g.originalEvent = g.originalEvent || {};
            if (!g.originalEvent.mouseHandled) {
                this._mouseStarted && this._mouseUp(g);
                this._mouseDownEvent = g;
                var c = this,
                j = g.which == 1,
                h = typeof this.options.cancel == "string" ? a(g.target).parents().add(g.target).filter(this.options.cancel).length: false;
                if (!j || h || !this._mouseCapture(g)) {
                    return true
                }
                this.mouseDelayMet = !this.options.delay;
                if (!this.mouseDelayMet) {
                    this._mouseDelayTimer = setTimeout(function() {
                        c.mouseDelayMet = true
                    },
                    this.options.delay)
                }
                if (this._mouseDistanceMet(g) && this._mouseDelayMet(g)) {
                    this._mouseStarted = this._mouseStart(g) !== false;
                    if (!this._mouseStarted) {
                        g.preventDefault();
                        return true
                    }
                }
                this._mouseMoveDelegate = function(e) {
                    return c._mouseMove(e)
                };
                this._mouseUpDelegate = function(e) {
                    return c._mouseUp(e)
                };
                a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
                g.preventDefault();
                return g.originalEvent.mouseHandled = true
            }
        },
        _mouseMove: function(c) {
            if (a.browser.msie && !(document.documentMode >= 9) && !c.button) {
                return this._mouseUp(c)
            }
            if (this._mouseStarted) {
                this._mouseDrag(c);
                return c.preventDefault()
            }
            if (this._mouseDistanceMet(c) && this._mouseDelayMet(c)) { (this._mouseStarted = this._mouseStart(this._mouseDownEvent, c) !== false) ? this._mouseDrag(c) : this._mouseUp(c)
            }
            return ! this._mouseStarted
        },
        _mouseUp: function(c) {
            a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            if (this._mouseStarted) {
                this._mouseStarted = false;
                c.target == this._mouseDownEvent.target && a.data(c.target, this.widgetName + ".preventClickEvent", true);
                this._mouseStop(c)
            }
            return false
        },
        _mouseDistanceMet: function(c) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - c.pageX), Math.abs(this._mouseDownEvent.pageY - c.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return true
        }
    })
})(jQuery); (function(a) {
    a.widget("ui.sortable", a.ui.mouse, {
        widgetEventPrefix: "sort",
        options: {
            appendTo: "parent",
            axis: false,
            connectWith: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            dropOnEmpty: true,
            forcePlaceholderSize: false,
            forceHelperSize: false,
            grid: false,
            handle: false,
            helper: "original",
            items: "> *",
            opacity: false,
            placeholder: false,
            revert: false,
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1000
        },
        _create: function() {
            this.containerCache = {};
            this.element.addClass("ui-sortable");
            this.refresh();
            this.floating = this.items.length ? /left|right/.test(this.items[0].item.css("float")) : false;
            this.offset = this.element.offset();
            this._mouseInit()
        },
        destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");
            this._mouseDestroy();
            for (var c = this.items.length - 1; c >= 0; c--) {
                this.items[c].item.removeData("sortable-item")
            }
            return this
        },
        _setOption: function(e, c) {
            if (e === "disabled") {
                this.options[e] = c;
                this.widget()[c ? "addClass": "removeClass"]("ui-sortable-disabled")
            } else {
                a.Widget.prototype._setOption.apply(this, arguments)
            }
        },
        _mouseCapture: function(h, g) {
            if (this.reverting) {
                return false
            }
            if (this.options.disabled || this.options.type == "static") {
                return false
            }
            this._refreshItems(h);
            var m = null,
            k = this;
            a(h.target).parents().each(function() {
                if (a.data(this, "sortable-item") == k) {
                    m = a(this);
                    return false
                }
            });
            if (a.data(h.target, "sortable-item") == k) {
                m = a(h.target)
            }
            if (!m) {
                return false
            }
            if (this.options.handle && !g) {
                var j = false;
                a(this.options.handle, m).find("*").andSelf().each(function() {
                    if (this == h.target) {
                        j = true
                    }
                });
                if (!j) {
                    return false
                }
            }
            this.currentItem = m;
            this._removeCurrentsFromItems();
            return true
        },
        _mouseStart: function(g, f, j) {
            f = this.options;
            var h = this;
            this.currentContainer = this;
            this.refreshPositions();
            this.helper = this._createHelper(g);
            this._cacheHelperProportions();
            this._cacheMargins();
            this.scrollParent = this.helper.scrollParent();
            this.offset = this.currentItem.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };
            this.helper.css("position", "absolute");
            this.cssPosition = this.helper.css("position");
            a.extend(this.offset, {
                click: {
                    left: g.pageX - this.offset.left,
                    top: g.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            });
            this.originalPosition = this._generatePosition(g);
            this.originalPageX = g.pageX;
            this.originalPageY = g.pageY;
            f.cursorAt && this._adjustOffsetFromHelper(f.cursorAt);
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            };
            this.helper[0] != this.currentItem[0] && this.currentItem.hide();
            this._createPlaceholder();
            f.containment && this._setContainment();
            if (f.cursor) {
                if (a("body").css("cursor")) {
                    this._storedCursor = a("body").css("cursor")
                }
                a("body").css("cursor", f.cursor)
            }
            if (f.opacity) {
                if (this.helper.css("opacity")) {
                    this._storedOpacity = this.helper.css("opacity")
                }
                this.helper.css("opacity", f.opacity)
            }
            if (f.zIndex) {
                if (this.helper.css("zIndex")) {
                    this._storedZIndex = this.helper.css("zIndex")
                }
                this.helper.css("zIndex", f.zIndex)
            }
            if (this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML") {
                this.overflowOffset = this.scrollParent.offset()
            }
            this._trigger("start", g, this._uiHash());
            this._preserveHelperProportions || this._cacheHelperProportions();
            if (!j) {
                for (j = this.containers.length - 1; j >= 0; j--) {
                    this.containers[j]._trigger("activate", g, h._uiHash(this))
                }
            }
            if (a.ui.ddmanager) {
                a.ui.ddmanager.current = this
            }
            a.ui.ddmanager && !f.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, g);
            this.dragging = true;
            this.helper.addClass("ui-sortable-helper");
            this._mouseDrag(g);
            return true
        },
        _mouseDrag: function(h) {
            this.position = this._generatePosition(h);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.lastPositionAbs) {
                this.lastPositionAbs = this.positionAbs
            }
            if (this.options.scroll) {
                var g = this.options,
                m = false;
                if (this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML") {
                    if (this.overflowOffset.top + this.scrollParent[0].offsetHeight - h.pageY < g.scrollSensitivity) {
                        this.scrollParent[0].scrollTop = m = this.scrollParent[0].scrollTop + g.scrollSpeed
                    } else {
                        if (h.pageY - this.overflowOffset.top < g.scrollSensitivity) {
                            this.scrollParent[0].scrollTop = m = this.scrollParent[0].scrollTop - g.scrollSpeed
                        }
                    }
                    if (this.overflowOffset.left + this.scrollParent[0].offsetWidth - h.pageX < g.scrollSensitivity) {
                        this.scrollParent[0].scrollLeft = m = this.scrollParent[0].scrollLeft + g.scrollSpeed
                    } else {
                        if (h.pageX - this.overflowOffset.left < g.scrollSensitivity) {
                            this.scrollParent[0].scrollLeft = m = this.scrollParent[0].scrollLeft - g.scrollSpeed
                        }
                    }
                } else {
                    if (h.pageY - a(document).scrollTop() < g.scrollSensitivity) {
                        m = a(document).scrollTop(a(document).scrollTop() - g.scrollSpeed)
                    } else {
                        if (a(window).height() - (h.pageY - a(document).scrollTop()) < g.scrollSensitivity) {
                            m = a(document).scrollTop(a(document).scrollTop() + g.scrollSpeed)
                        }
                    }
                    if (h.pageX - a(document).scrollLeft() < g.scrollSensitivity) {
                        m = a(document).scrollLeft(a(document).scrollLeft() - g.scrollSpeed)
                    } else {
                        if (a(window).width() - (h.pageX - a(document).scrollLeft()) < g.scrollSensitivity) {
                            m = a(document).scrollLeft(a(document).scrollLeft() + g.scrollSpeed)
                        }
                    }
                }
                m !== false && a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, h)
            }
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.options.axis || this.options.axis != "y") {
                this.helper[0].style.left = this.position.left + "px"
            }
            if (!this.options.axis || this.options.axis != "x") {
                this.helper[0].style.top = this.position.top + "px"
            }
            for (g = this.items.length - 1; g >= 0; g--) {
                m = this.items[g];
                var k = m.item[0],
                j = this._intersectsWithPointer(m);
                if (j) {
                    if (k != this.currentItem[0] && this.placeholder[j == 1 ? "next": "prev"]()[0] != k && !a.ui.contains(this.placeholder[0], k) && (this.options.type == "semi-dynamic" ? !a.ui.contains(this.element[0], k) : true)) {
                        this.direction = j == 1 ? "down": "up";
                        if (this.options.tolerance == "pointer" || this._intersectsWithSides(m)) {
                            this._rearrange(h, m)
                        } else {
                            break
                        }
                        this._trigger("change", h, this._uiHash());
                        break
                    }
                }
            }
            this._contactContainers(h);
            a.ui.ddmanager && a.ui.ddmanager.drag(this, h);
            this._trigger("sort", h, this._uiHash());
            this.lastPositionAbs = this.positionAbs;
            return false
        },
        _mouseStop: function(f, e) {
            if (f) {
                a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, f);
                if (this.options.revert) {
                    var g = this;
                    e = g.placeholder.offset();
                    g.reverting = true;
                    a(this.helper).animate({
                        left: e.left - this.offset.parent.left - g.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                        top: e.top - this.offset.parent.top - g.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                    },
                    parseInt(this.options.revert, 10) || 500,
                    function() {
                        g._clear(f)
                    })
                } else {
                    this._clear(f, e)
                }
                return false
            }
        },
        cancel: function() {
            var e = this;
            if (this.dragging) {
                this._mouseUp({
                    target: null
                });
                this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var c = this.containers.length - 1; c >= 0; c--) {
                    this.containers[c]._trigger("deactivate", null, e._uiHash(this));
                    if (this.containers[c].containerCache.over) {
                        this.containers[c]._trigger("out", null, e._uiHash(this));
                        this.containers[c].containerCache.over = 0
                    }
                }
            }
            if (this.placeholder) {
                this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
                this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove();
                a.extend(this, {
                    helper: null,
                    dragging: false,
                    reverting: false,
                    _noFinalSort: null
                });
                this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem)
            }
            return this
        },
        serialize: function(f) {
            var e = this._getItemsAsjQuery(f && f.connected),
            g = [];
            f = f || {};
            a(e).each(function() {
                var c = (a(f.item || this).attr(f.attribute || "id") || "").match(f.expression || /(.+)[-=_](.+)/);
                if (c) {
                    g.push((f.key || c[1] + "[]") + "=" + (f.key && f.expression ? c[1] : c[2]))
                }
            }); ! g.length && f.key && g.push(f.key + "=");
            return g.join("&")
        },
        toArray: function(f) {
            var e = this._getItemsAsjQuery(f && f.connected),
            g = [];
            f = f || {};
            e.each(function() {
                g.push(a(f.item || this).attr(f.attribute || "id") || "")
            });
            return g
        },
        _intersectsWith: function(y) {
            var x = this.positionAbs.left,
            w = x + this.helperProportions.width,
            v = this.positionAbs.top,
            u = v + this.helperProportions.height,
            t = y.left,
            r = t + y.width,
            q = y.top,
            n = q + y.height,
            o = this.offset.click.top,
            m = this.offset.click.left;
            o = v + o > q && v + o < n && x + m > t && x + m < r;
            return this.options.tolerance == "pointer" || this.options.forcePointerForContainers || this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width": "height"] > y[this.floating ? "width": "height"] ? o: t < x + this.helperProportions.width / 2 && w - this.helperProportions.width / 2 < r && q < v + this.helperProportions.height / 2 && u - this.helperProportions.height / 2 < n
        },
        _intersectsWithPointer: function(f) {
            var e = a.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, f.top, f.height);
            f = a.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, f.left, f.width);
            e = e && f;
            f = this._getDragVerticalDirection();
            var g = this._getDragHorizontalDirection();
            if (!e) {
                return false
            }
            return this.floating ? g && g == "right" || f == "down" ? 2 : 1 : f && (f == "down" ? 2 : 1)
        },
        _intersectsWithSides: function(g) {
            var f = a.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, g.top + g.height / 2, g.height);
            g = a.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, g.left + g.width / 2, g.width);
            var j = this._getDragVerticalDirection(),
            h = this._getDragHorizontalDirection();
            return this.floating && h ? h == "right" && g || h == "left" && !g: j && (j == "down" && f || j == "up" && !f)
        },
        _getDragVerticalDirection: function() {
            var c = this.positionAbs.top - this.lastPositionAbs.top;
            return c != 0 && (c > 0 ? "down": "up")
        },
        _getDragHorizontalDirection: function() {
            var c = this.positionAbs.left - this.lastPositionAbs.left;
            return c != 0 && (c > 0 ? "right": "left")
        },
        refresh: function(c) {
            this._refreshItems(c);
            this.refreshPositions();
            return this
        },
        _connectWith: function() {
            var c = this.options;
            return c.connectWith.constructor == String ? [c.connectWith] : c.connectWith
        },
        _getItemsAsjQuery: function(k) {
            var j = [],
            r = [],
            q = this._connectWith();
            if (q && k) {
                for (k = q.length - 1; k >= 0; k--) {
                    for (var o = a(q[k]), n = o.length - 1; n >= 0; n--) {
                        var m = a.data(o[n], "sortable");
                        if (m && m != this && !m.options.disabled) {
                            r.push([a.isFunction(m.options.items) ? m.options.items.call(m.element) : a(m.options.items, m.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), m])
                        }
                    }
                }
            }
            r.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (k = r.length - 1; k >= 0; k--) {
                r[k][0].each(function() {
                    j.push(this)
                })
            }
            return a(j)
        },
        _removeCurrentsFromItems: function() {
            for (var f = this.currentItem.find(":data(sortable-item)"), e = 0; e < this.items.length; e++) {
                for (var g = 0; g < f.length; g++) {
                    f[g] == this.items[e].item[0] && this.items.splice(e, 1)
                }
            }
        },
        _refreshItems: function(k) {
            this.items = [];
            this.containers = [this];
            var j = this.items,
            t = [[a.isFunction(this.options.items) ? this.options.items.call(this.element[0], k, {
                item: this.currentItem
            }) : a(this.options.items, this.element), this]],
            r = this._connectWith();
            if (r) {
                for (var q = r.length - 1; q >= 0; q--) {
                    for (var o = a(r[q]), n = o.length - 1; n >= 0; n--) {
                        var m = a.data(o[n], "sortable");
                        if (m && m != this && !m.options.disabled) {
                            t.push([a.isFunction(m.options.items) ? m.options.items.call(m.element[0], k, {
                                item: this.currentItem
                            }) : a(m.options.items, m.element), m]);
                            this.containers.push(m)
                        }
                    }
                }
            }
            for (q = t.length - 1; q >= 0; q--) {
                k = t[q][1];
                r = t[q][0];
                n = 0;
                for (o = r.length; n < o; n++) {
                    m = a(r[n]);
                    m.data("sortable-item", k);
                    j.push({
                        item: m,
                        instance: k,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
                }
            }
        },
        refreshPositions: function(g) {
            if (this.offsetParent && this.helper) {
                this.offset.parent = this._getParentOffset()
            }
            for (var f = this.items.length - 1; f >= 0; f--) {
                var j = this.items[f],
                h = this.options.toleranceElement ? a(this.options.toleranceElement, j.item) : j.item;
                if (!g) {
                    j.width = h.outerWidth();
                    j.height = h.outerHeight()
                }
                h = h.offset();
                j.left = h.left;
                j.top = h.top
            }
            if (this.options.custom && this.options.custom.refreshContainers) {
                this.options.custom.refreshContainers.call(this)
            } else {
                for (f = this.containers.length - 1; f >= 0; f--) {
                    h = this.containers[f].element.offset();
                    this.containers[f].containerCache.left = h.left;
                    this.containers[f].containerCache.top = h.top;
                    this.containers[f].containerCache.width = this.containers[f].element.outerWidth();
                    this.containers[f].containerCache.height = this.containers[f].element.outerHeight()
                }
            }
            return this
        },
        _createPlaceholder: function(g) {
            var f = g || this,
            j = f.options;
            if (!j.placeholder || j.placeholder.constructor == String) {
                var h = j.placeholder;
                j.placeholder = {
                    element: function() {
                        var c = a(document.createElement(f.currentItem[0].nodeName)).addClass(h || f.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        if (!h) {
                            c.style.visibility = "hidden"
                        }
                        return c
                    },
                    update: function(e, c) {
                        if (! (h && !j.forcePlaceholderSize)) {
                            c.height() || c.height(f.currentItem.innerHeight() - parseInt(f.currentItem.css("paddingTop") || 0, 10) - parseInt(f.currentItem.css("paddingBottom") || 0, 10));
                            c.width() || c.width(f.currentItem.innerWidth() - parseInt(f.currentItem.css("paddingLeft") || 0, 10) - parseInt(f.currentItem.css("paddingRight") || 0, 10))
                        }
                    }
                }
            }
            f.placeholder = a(j.placeholder.element.call(f.element, f.currentItem));
            f.currentItem.after(f.placeholder);
            j.placeholder.update(f, f.placeholder)
        },
        _contactContainers: function(k) {
            for (var j = null,
            r = null,
            q = this.containers.length - 1; q >= 0; q--) {
                if (!a.ui.contains(this.currentItem[0], this.containers[q].element[0])) {
                    if (this._intersectsWith(this.containers[q].containerCache)) {
                        if (! (j && a.ui.contains(this.containers[q].element[0], j.element[0]))) {
                            j = this.containers[q];
                            r = q
                        }
                    } else {
                        if (this.containers[q].containerCache.over) {
                            this.containers[q]._trigger("out", k, this._uiHash(this));
                            this.containers[q].containerCache.over = 0
                        }
                    }
                }
            }
            if (j) {
                if (this.containers.length === 1) {
                    this.containers[r]._trigger("over", k, this._uiHash(this));
                    this.containers[r].containerCache.over = 1
                } else {
                    if (this.currentContainer != this.containers[r]) {
                        j = 10000;
                        q = null;
                        for (var o = this.positionAbs[this.containers[r].floating ? "left": "top"], n = this.items.length - 1; n >= 0; n--) {
                            if (a.ui.contains(this.containers[r].element[0], this.items[n].item[0])) {
                                var m = this.items[n][this.containers[r].floating ? "left": "top"];
                                if (Math.abs(m - o) < j) {
                                    j = Math.abs(m - o);
                                    q = this.items[n]
                                }
                            }
                        }
                        if (q || this.options.dropOnEmpty) {
                            this.currentContainer = this.containers[r];
                            q ? this._rearrange(k, q, null, true) : this._rearrange(k, null, this.containers[r].element, true);
                            this._trigger("change", k, this._uiHash());
                            this.containers[r]._trigger("change", k, this._uiHash(this));
                            this.options.placeholder.update(this.currentContainer, this.placeholder);
                            this.containers[r]._trigger("over", k, this._uiHash(this));
                            this.containers[r].containerCache.over = 1
                        }
                    }
                }
            }
        },
        _createHelper: function(e) {
            var c = this.options;
            e = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [e, this.currentItem])) : c.helper == "clone" ? this.currentItem.clone() : this.currentItem;
            e.parents("body").length || a(c.appendTo != "parent" ? c.appendTo: this.currentItem[0].parentNode)[0].appendChild(e[0]);
            if (e[0] == this.currentItem[0]) {
                this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }
            }
            if (e[0].style.width == "" || c.forceHelperSize) {
                e.width(this.currentItem.width())
            }
            if (e[0].style.height == "" || c.forceHelperSize) {
                e.height(this.currentItem.height())
            }
            return e
        },
        _adjustOffsetFromHelper: function(c) {
            if (typeof c == "string") {
                c = c.split(" ")
            }
            if (a.isArray(c)) {
                c = {
                    left: +c[0],
                    top: +c[1] || 0
                }
            }
            if ("left" in c) {
                this.offset.click.left = c.left + this.margins.left
            }
            if ("right" in c) {
                this.offset.click.left = this.helperProportions.width - c.right + this.margins.left
            }
            if ("top" in c) {
                this.offset.click.top = c.top + this.margins.top
            }
            if ("bottom" in c) {
                this.offset.click.top = this.helperProportions.height - c.bottom + this.margins.top
            }
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var c = this.offsetParent.offset();
            if (this.cssPosition == "absolute" && this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0])) {
                c.left += this.scrollParent.scrollLeft();
                c.top += this.scrollParent.scrollTop()
            }
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && a.browser.msie) {
                c = {
                    top: 0,
                    left: 0
                }
            }
            return {
                top: c.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: c.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition == "relative") {
                var c = this.currentItem.position();
                return {
                    top: c.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: c.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            } else {
                return {
                    top: 0,

                    left: 0
                }
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var f = this.options;
            if (f.containment == "parent") {
                f.containment = this.helper[0].parentNode
            }
            if (f.containment == "document" || f.containment == "window") {
                this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, a(f.containment == "document" ? document: window).width() - this.helperProportions.width - this.margins.left, (a(f.containment == "document" ? document: window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]
            }
            if (!/^(document|window|parent)$/.test(f.containment)) {
                var e = a(f.containment)[0];
                f = a(f.containment).offset();
                var g = a(e).css("overflow") != "hidden";
                this.containment = [f.left + (parseInt(a(e).css("borderLeftWidth"), 10) || 0) + (parseInt(a(e).css("paddingLeft"), 10) || 0) - this.margins.left, f.top + (parseInt(a(e).css("borderTopWidth"), 10) || 0) + (parseInt(a(e).css("paddingTop"), 10) || 0) - this.margins.top, f.left + (g ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(a(e).css("borderLeftWidth"), 10) || 0) - (parseInt(a(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, f.top + (g ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(a(e).css("borderTopWidth"), 10) || 0) - (parseInt(a(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function(g, f) {
            if (!f) {
                f = this.position
            }
            g = g == "absolute" ? 1 : -1;
            var j = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent: this.scrollParent,
            h = /(html|body)/i.test(j[0].tagName);
            return {
                top: f.top + this.offset.relative.top * g + this.offset.parent.top * g - (a.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : h ? 0 : j.scrollTop()) * g),
                left: f.left + this.offset.relative.left * g + this.offset.parent.left * g - (a.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : h ? 0 : j.scrollLeft()) * g)
            }
        },
        _generatePosition: function(j) {
            var h = this.options,
            o = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent: this.scrollParent,
            n = /(html|body)/i.test(o[0].tagName);
            if (this.cssPosition == "relative" && !(this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0])) {
                this.offset.relative = this._getRelativeOffset()
            }
            var m = j.pageX,
            k = j.pageY;
            if (this.originalPosition) {
                if (this.containment) {
                    if (j.pageX - this.offset.click.left < this.containment[0]) {
                        m = this.containment[0] + this.offset.click.left
                    }
                    if (j.pageY - this.offset.click.top < this.containment[1]) {
                        k = this.containment[1] + this.offset.click.top
                    }
                    if (j.pageX - this.offset.click.left > this.containment[2]) {
                        m = this.containment[2] + this.offset.click.left
                    }
                    if (j.pageY - this.offset.click.top > this.containment[3]) {
                        k = this.containment[3] + this.offset.click.top
                    }
                }
                if (h.grid) {
                    k = this.originalPageY + Math.round((k - this.originalPageY) / h.grid[1]) * h.grid[1];
                    k = this.containment ? !(k - this.offset.click.top < this.containment[1] || k - this.offset.click.top > this.containment[3]) ? k: !(k - this.offset.click.top < this.containment[1]) ? k - h.grid[1] : k + h.grid[1] : k;
                    m = this.originalPageX + Math.round((m - this.originalPageX) / h.grid[0]) * h.grid[0];
                    m = this.containment ? !(m - this.offset.click.left < this.containment[0] || m - this.offset.click.left > this.containment[2]) ? m: !(m - this.offset.click.left < this.containment[0]) ? m - h.grid[0] : m + h.grid[0] : m
                }
            }
            return {
                top: k - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (a.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : n ? 0 : o.scrollTop()),
                left: m - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (a.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : n ? 0 : o.scrollLeft())
            }
        },
        _rearrange: function(j, h, o, n) {
            o ? o[0].appendChild(this.placeholder[0]) : h.item[0].parentNode.insertBefore(this.placeholder[0], this.direction == "down" ? h.item[0] : h.item[0].nextSibling);
            this.counter = this.counter ? ++this.counter: 1;
            var m = this,
            k = this.counter;
            window.setTimeout(function() {
                k == m.counter && m.refreshPositions(!n)
            },
            0)
        },
        _clear: function(g, f) {
            this.reverting = false;
            var j = []; ! this._noFinalSort && this.currentItem[0].parentNode && this.placeholder.before(this.currentItem);
            this._noFinalSort = null;
            if (this.helper[0] == this.currentItem[0]) {
                for (var h in this._storedCSS) {
                    if (this._storedCSS[h] == "auto" || this._storedCSS[h] == "static") {
                        this._storedCSS[h] = ""
                    }
                }
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else {
                this.currentItem.show()
            }
            this.fromOutside && !f && j.push(function(c) {
                this._trigger("receive", c, this._uiHash(this.fromOutside))
            });
            if ((this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !f) {
                j.push(function(c) {
                    this._trigger("update", c, this._uiHash())
                })
            }
            if (!a.ui.contains(this.element[0], this.currentItem[0])) {
                f || j.push(function(c) {
                    this._trigger("remove", c, this._uiHash())
                });
                for (h = this.containers.length - 1; h >= 0; h--) {
                    if (a.ui.contains(this.containers[h].element[0], this.currentItem[0]) && !f) {
                        j.push(function(c) {
                            return function(e) {
                                c._trigger("receive", e, this._uiHash(this))
                            }
                        }.call(this, this.containers[h]));
                        j.push(function(c) {
                            return function(e) {
                                c._trigger("update", e, this._uiHash(this))
                            }
                        }.call(this, this.containers[h]))
                    }
                }
            }
            for (h = this.containers.length - 1; h >= 0; h--) {
                f || j.push(function(c) {
                    return function(e) {
                        c._trigger("deactivate", e, this._uiHash(this))
                    }
                }.call(this, this.containers[h]));
                if (this.containers[h].containerCache.over) {
                    j.push(function(c) {
                        return function(e) {
                            c._trigger("out", e, this._uiHash(this))
                        }
                    }.call(this, this.containers[h]));
                    this.containers[h].containerCache.over = 0
                }
            }
            this._storedCursor && a("body").css("cursor", this._storedCursor);
            this._storedOpacity && this.helper.css("opacity", this._storedOpacity);
            if (this._storedZIndex) {
                this.helper.css("zIndex", this._storedZIndex == "auto" ? "": this._storedZIndex)
            }
            this.dragging = false;
            if (this.cancelHelperRemoval) {
                if (!f) {
                    this._trigger("beforeStop", g, this._uiHash());
                    for (h = 0; h < j.length; h++) {
                        j[h].call(this, g)
                    }
                    this._trigger("stop", g, this._uiHash())
                }
                return false
            }
            f || this._trigger("beforeStop", g, this._uiHash());
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
            this.helper[0] != this.currentItem[0] && this.helper.remove();
            this.helper = null;
            if (!f) {
                for (h = 0; h < j.length; h++) {
                    j[h].call(this, g)
                }
                this._trigger("stop", g, this._uiHash())
            }
            this.fromOutside = false;
            return true
        },
        _trigger: function() {
            a.Widget.prototype._trigger.apply(this, arguments) === false && this.cancel()
        },
        _uiHash: function(e) {
            var c = e || this;
            return {
                helper: c.helper,
                placeholder: c.placeholder || a([]),
                position: c.position,
                originalPosition: c.originalPosition,
                offset: c.positionAbs,
                item: c.currentItem,
                sender: e ? e.element: null
            }
        }
    });
    a.extend(a.ui.sortable, {
        version: "1.8.10"
    })
})(jQuery); 


(function(a) {
    a.widget("ui.slider", a.ui.mouse, {
        widgetEventPrefix: "slide",
        options: {
            animate: false,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: false,
            step: 1,
            value: 0,
            values: null
        },
        _create: function() {
            var c = this,
            e = this.options;
            this._mouseSliding = this._keySliding = false;
            this._animateOff = true;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all");
            e.disabled && this.element.addClass("ui-slider-disabled ui-disabled");
            this.range = a([]);
            if (e.range) {
                if (e.range === true) {
                    this.range = a("<div></div>");
                    if (!e.values) {
                        e.values = [this._valueMin(), this._valueMin()]
                    }
                    if (e.values.length && e.values.length !== 2) {
                        e.values = [e.values[0], e.values[0]]
                    }
                } else {
                    this.range = a("<div></div>")
                }
                this.range.appendTo(this.element).addClass("ui-slider-range");
                if (e.range === "min" || e.range === "max") {
                    this.range.addClass("ui-slider-range-" + e.range)
                }
                this.range.addClass("ui-widget-header")
            }
            a(".ui-slider-handle", this.element).length === 0 && a("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");
            if (e.values && e.values.length) {
                for (; a(".ui-slider-handle", this.element).length < e.values.length;) {
                    a("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle")
                }
            }
            this.handles = a(".ui-slider-handle", this.element).addClass("ui-state-default ui-corner-all");
            this.handle = this.handles.eq(0);
            this.handles.add(this.range).filter("a").click(function(f) {
                f.preventDefault()
            }).hover(function() {
                e.disabled || a(this).addClass("ui-state-hover")
            },
            function() {
                a(this).removeClass("ui-state-hover")
            }).focus(function() {
                if (e.disabled) {
                    a(this).blur()
                } else {
                    a(".ui-slider .ui-state-focus").removeClass("ui-state-focus");
                    a(this).addClass("ui-state-focus")
                }
            }).blur(function() {
                a(this).removeClass("ui-state-focus")
            });
            this.handles.each(function(f) {
                a(this).data("index.ui-slider-handle", f)
            });
            this.handles.keydown(function(q) {
                var o = true,
                n = a(this).data("index.ui-slider-handle"),
                k,
                m,
                j;
                if (!c.options.disabled) {
                    switch (q.keyCode) {
                    case a.ui.keyCode.HOME:
                    case a.ui.keyCode.END:
                    case a.ui.keyCode.PAGE_UP:
                    case a.ui.keyCode.PAGE_DOWN:
                    case a.ui.keyCode.UP:
                    case a.ui.keyCode.RIGHT:
                    case a.ui.keyCode.DOWN:
                    case a.ui.keyCode.LEFT:
                        o = false;
                        if (!c._keySliding) {
                            c._keySliding = true;
                            a(this).addClass("ui-state-active");
                            k = c._start(q, n);
                            if (k === false) {
                                return
                            }
                        }
                        break
                    }
                    j = c.options.step;
                    k = c.options.values && c.options.values.length ? (m = c.values(n)) : (m = c.value());
                    switch (q.keyCode) {
                    case a.ui.keyCode.HOME:
                        m = c._valueMin();
                        break;
                    case a.ui.keyCode.END:
                        m = c._valueMax();
                        break;
                    case a.ui.keyCode.PAGE_UP:
                        m = c._trimAlignValue(k + (c._valueMax() - c._valueMin()) / 5);
                        break;
                    case a.ui.keyCode.PAGE_DOWN:
                        m = c._trimAlignValue(k - (c._valueMax() - c._valueMin()) / 5);
                        break;
                    case a.ui.keyCode.UP:
                    case a.ui.keyCode.RIGHT:
                        if (k === c._valueMax()) {
                            return
                        }
                        m = c._trimAlignValue(k + j);
                        break;
                    case a.ui.keyCode.DOWN:
                    case a.ui.keyCode.LEFT:
                        if (k === c._valueMin()) {
                            return
                        }
                        m = c._trimAlignValue(k - j);
                        break
                    }
                    c._slide(q, n, m);
                    return o
                }
            }).keyup(function(g) {
                var f = a(this).data("index.ui-slider-handle");
                if (c._keySliding) {
                    c._keySliding = false;
                    c._stop(g, f);
                    c._change(g, f);
                    a(this).removeClass("ui-state-active")
                }
            });
            this._refreshValue();
            this._animateOff = false
        },
        destroy: function() {
            this.handles.remove();
            this.range.remove();
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");
            this._mouseDestroy();
            return this
        },
        _mouseCapture: function(j) {
            var k = this.options,
            r, q, o, m, n;
            if (k.disabled) {
                return false
            }
            this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            };
            this.elementOffset = this.element.offset();
            r = this._normValueFromMouse({
                x: j.pageX,
                y: j.pageY
            });
            q = this._valueMax() - this._valueMin() + 1;
            m = this;
            this.handles.each(function(e) {
                var c = Math.abs(r - m.values(e));
                if (q > c) {
                    q = c;
                    o = a(this);
                    n = e
                }
            });
            if (k.range === true && this.values(1) === k.min) {
                n += 1;
                o = a(this.handles[n])
            }
            if (this._start(j, n) === false) {
                return false
            }
            this._mouseSliding = true;
            m._handleIndex = n;
            o.addClass("ui-state-active").focus();
            k = o.offset();
            this._clickOffset = !a(j.target).parents().andSelf().is(".ui-slider-handle") ? {
                left: 0,
                top: 0
            }: {
                left: j.pageX - k.left - o.width() / 2,
                top: j.pageY - k.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            };
            this.handles.hasClass("ui-state-hover") || this._slide(j, n, r);
            return this._animateOff = true
        },
        _mouseStart: function() {
            return true
        },
        _mouseDrag: function(c) {
            var e = this._normValueFromMouse({
                x: c.pageX,
                y: c.pageY
            });
            this._slide(c, this._handleIndex, e);
            return false
        },
        _mouseStop: function(c) {
            this.handles.removeClass("ui-state-active");
            this._mouseSliding = false;
            this._stop(c, this._handleIndex);
            this._change(c, this._handleIndex);
            this._clickOffset = this._handleIndex = null;
            return this._animateOff = false
        },
        _detectOrientation: function() {
            this.orientation = this.options.orientation === "vertical" ? "vertical": "horizontal"
        },
        _normValueFromMouse: function(c) {
            var e;
            if (this.orientation === "horizontal") {
                e = this.elementSize.width;
                c = c.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left: 0)
            } else {
                e = this.elementSize.height;
                c = c.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top: 0)
            }
            e = c / e;
            if (e > 1) {
                e = 1
            }
            if (e < 0) {
                e = 0
            }
            if (this.orientation === "vertical") {
                e = 1 - e
            }
            c = this._valueMax() - this._valueMin();
            return this._trimAlignValue(this._valueMin() + e * c)
        },
        _start: function(e, f) {
            var g = {
                handle: this.handles[f],
                value: this.value()
            };
            if (this.options.values && this.options.values.length) {
                g.value = this.values(f);
                g.values = this.values()
            }
            return this._trigger("start", e, g)
        },
        _slide: function(f, g, j) {
            var h;
            if (this.options.values && this.options.values.length) {
                h = this.values(g ? 0 : 1);
                if (this.options.values.length === 2 && this.options.range === true && (g === 0 && j > h || g === 1 && j < h)) {
                    j = h
                }
                if (j !== this.values(g)) {
                    h = this.values();
                    h[g] = j;
                    f = this._trigger("slide", f, {
                        handle: this.handles[g],
                        value: j,
                        values: h
                    });
                    this.values(g ? 0 : 1);
                    f !== false && this.values(g, j, true)
                }
            } else {
                if (j !== this.value()) {
                    f = this._trigger("slide", f, {
                        handle: this.handles[g],
                        value: j
                    });
                    f !== false && this.value(j)
                }
            }
        },
        _stop: function(e, f) {
            var g = {
                handle: this.handles[f],
                value: this.value()
            };
            if (this.options.values && this.options.values.length) {
                g.value = this.values(f);
                g.values = this.values()
            }
            this._trigger("stop", e, g)
        },
        _change: function(e, f) {
            if (!this._keySliding && !this._mouseSliding) {
                var g = {
                    handle: this.handles[f],
                    value: this.value()
                };
                if (this.options.values && this.options.values.length) {
                    g.value = this.values(f);
                    g.values = this.values()
                }
                this._trigger("change", e, g)
            }
        },
        value: function(c) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(c);
                this._refreshValue();
                this._change(null, 0)
            }
            return this._value()
        },
        values: function(g, h) {
            var m, k, j;
            if (arguments.length > 1) {
                this.options.values[g] = this._trimAlignValue(h);
                this._refreshValue();
                this._change(null, g)
            }
            if (arguments.length) {
                if (a.isArray(arguments[0])) {
                    m = this.options.values;
                    k = arguments[0];
                    for (j = 0; j < m.length; j += 1) {
                        m[j] = this._trimAlignValue(k[j]);
                        this._change(null, j)
                    }
                    this._refreshValue()
                } else {
                    return this.options.values && this.options.values.length ? this._values(g) : this.value()
                }
            } else {
                return this._values()
            }
        },
        _setOption: function(f, g) {
            var j, h = 0;
            if (a.isArray(this.options.values)) {
                h = this.options.values.length
            }
            a.Widget.prototype._setOption.apply(this, arguments);
            switch (f) {
            case "disabled":
                if (g) {
                    this.handles.filter(".ui-state-focus").blur();
                    this.handles.removeClass("ui-state-hover");
                    this.handles.attr("disabled", "disabled");
                    this.element.addClass("ui-disabled")
                } else {
                    this.handles.removeAttr("disabled");
                    this.element.removeClass("ui-disabled")
                }
                break;
            case "orientation":
                this._detectOrientation();
                this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
                this._refreshValue();
                break;
            case "value":
                this._animateOff = true;
                this._refreshValue();
                this._change(null, 0);
                this._animateOff = false;
                break;
            case "values":
                this._animateOff = true;
                this._refreshValue();
                for (j = 0; j < h; j += 1) {
                    this._change(null, j)
                }
                this._animateOff = false;
                break
            }
        },
        _value: function() {
            var c = this.options.value;
            return c = this._trimAlignValue(c)
        },
        _values: function(e) {
            var f, g;
            if (arguments.length) {
                f = this.options.values[e];
                return f = this._trimAlignValue(f)
            } else {
                f = this.options.values.slice();
                for (g = 0; g < f.length; g += 1) {
                    f[g] = this._trimAlignValue(f[g])
                }
                return f
            }
        },
        _trimAlignValue: function(e) {
            if (e <= this._valueMin()) {
                return this._valueMin()
            }
            if (e >= this._valueMax()) {
                return this._valueMax()
            }
            var f = this.options.step > 0 ? this.options.step: 1,
            g = (e - this._valueMin()) % f;
            alignValue = e - g;
            if (Math.abs(g) * 2 >= f) {
                alignValue += g > 0 ? f: -f
            }
            return parseFloat(alignValue.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var v = this.options.range,
            w = this.options,
            u = this,
            t = !this._animateOff ? w.animate: false,
            r,
            o = {},
            q,
            n,
            m,
            k;
            if (this.options.values && this.options.values.length) {
                this.handles.each(function(c) {
                    r = (u.values(c) - u._valueMin()) / (u._valueMax() - u._valueMin()) * 100;
                    o[u.orientation === "horizontal" ? "left": "bottom"] = r + "%";
                    a(this).stop(1, 1)[t ? "animate": "css"](o, w.animate);
                    if (u.options.range === true) {
                        if (u.orientation === "horizontal") {
                            if (c === 0) {
                                u.range.stop(1, 1)[t ? "animate": "css"]({
                                    left: r + "%"
                                },
                                w.animate)
                            }
                            if (c === 1) {
                                u.range[t ? "animate": "css"]({
                                    width: r - q + "%"
                                },
                                {
                                    queue: false,
                                    duration: w.animate
                                })
                            }
                        } else {
                            if (c === 0) {
                                u.range.stop(1, 1)[t ? "animate": "css"]({
                                    bottom: r + "%"
                                },
                                w.animate)
                            }
                            if (c === 1) {
                                u.range[t ? "animate": "css"]({
                                    height: r - q + "%"
                                },
                                {
                                    queue: false,
                                    duration: w.animate
                                })
                            }
                        }
                    }
                    q = r
                })
            } else {
                n = this.value();
                m = this._valueMin();
                k = this._valueMax();
                r = k !== m ? (n - m) / (k - m) * 100 : 0;
                o[u.orientation === "horizontal" ? "left": "bottom"] = r + "%";
                this.handle.stop(1, 1)[t ? "animate": "css"](o, w.animate);
                if (v === "min" && this.orientation === "horizontal") {
                    this.range.stop(1, 1)[t ? "animate": "css"]({
                        width: r + "%"
                    },
                    w.animate)
                }
                if (v === "max" && this.orientation === "horizontal") {
                    this.range[t ? "animate": "css"]({
                        width: 100 - r + "%"
                    },
                    {
                        queue: false,
                        duration: w.animate
                    })
                }
                if (v === "min" && this.orientation === "vertical") {
                    this.range.stop(1, 1)[t ? "animate": "css"]({
                        height: r + "%"
                    },
                    w.animate)
                }
                if (v === "max" && this.orientation === "vertical") {
                    this.range[t ? "animate": "css"]({
                        height: 100 - r + "%"
                    },
                    {
                        queue: false,
                        duration: w.animate
                    })
                }
            }
        }
    });
    a.extend(a.ui.slider, {
        version: "1.8.10"
    })
})(jQuery); 


(function(a, c) {
    a.widget("ui.draggable", a.ui.mouse, {
        widgetEventPrefix: "drag",
        options: {
            addClasses: true,
            appendTo: "parent",
            axis: false,
            connectToSortable: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            grid: false,
            handle: false,
            helper: "original",
            iframeFix: false,
            opacity: false,
            refreshPositions: false,
            revert: false,
            revertDuration: 500,
            scope: "default",
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: false,
            snapMode: "both",
            snapTolerance: 20,
            stack: false,
            zIndex: false
        },
        _create: function() {
            if (this.options.helper == "original" && !(/^(?:r|a|f)/).test(this.element.css("position"))) {
                this.element[0].style.position = "relative"
            } (this.options.addClasses && this.element.addClass("ui-draggable")); (this.options.disabled && this.element.addClass("ui-draggable-disabled"));
            this._mouseInit()
        },
        destroy: function() {
            if (!this.element.data("draggable")) {
                return
            }
            this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
            this._mouseDestroy();
            return this
        },
        _mouseCapture: function(e) {
            var f = this.options;
            if (this.helper || f.disabled || a(e.target).is(".ui-resizable-handle")) {
                return false
            }
            this.handle = this._getHandle(e);
            if (!this.handle) {
                return false
            }
            a(f.iframeFix === true ? "iframe": f.iframeFix).each(function() {
                a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1000
                }).css(a(this).offset()).appendTo("body")
            });
            return true
        },
        _mouseStart: function(e) {
            var f = this.options;
            this.helper = this._createHelper(e);
            this._cacheHelperProportions();
            if (a.ui.ddmanager) {
                a.ui.ddmanager.current = this
            }
            this._cacheMargins();
            this.cssPosition = this.helper.css("position");
            this.scrollParent = this.helper.scrollParent();
            this.offset = this.positionAbs = this.element.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };
            a.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            });
            this.originalPosition = this.position = this._generatePosition(e);
            this.originalPageX = e.pageX;
            this.originalPageY = e.pageY; (f.cursorAt && this._adjustOffsetFromHelper(f.cursorAt));
            if (f.containment) {
                this._setContainment()
            }
            if (this._trigger("start", e) === false) {
                this._clear();
                return false
            }
            this._cacheHelperProportions();
            if (a.ui.ddmanager && !f.dropBehaviour) {
                a.ui.ddmanager.prepareOffsets(this, e)
            }
            this.helper.addClass("ui-draggable-dragging");
            this._mouseDrag(e, true);
            return true
        },
        _mouseDrag: function(e, g) {
            this.position = this._generatePosition(e);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!g) {
                var f = this._uiHash();
                if (this._trigger("drag", e, f) === false) {
                    this._mouseUp({});
                    return false
                }
                this.position = f.position
            }
            if (!this.options.axis || this.options.axis != "y") {
                this.helper[0].style.left = this.position.left + "px"
            }
            if (!this.options.axis || this.options.axis != "x") {
                this.helper[0].style.top = this.position.top + "px"
            }
            if (a.ui.ddmanager) {
                a.ui.ddmanager.drag(this, e)
            }
            return false
        },
        _mouseStop: function(f) {
            var g = false;
            if (a.ui.ddmanager && !this.options.dropBehaviour) {
                g = a.ui.ddmanager.drop(this, f)
            }
            if (this.dropped) {
                g = this.dropped;
                this.dropped = false
            }
            if ((!this.element[0] || !this.element[0].parentNode) && this.options.helper == "original") {
                return false
            }
            if ((this.options.revert == "invalid" && !g) || (this.options.revert == "valid" && g) || this.options.revert === true || (a.isFunction(this.options.revert) && this.options.revert.call(this.element, g))) {
                var e = this;
                a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10),
                function() {
                    if (e._trigger("stop", f) !== false) {
                        e._clear()
                    }
                })
            } else {
                if (this._trigger("stop", f) !== false) {
                    this._clear()
                }
            }
            return false
        },
        _mouseUp: function(e) {
            if (this.options.iframeFix === true) {
                a("div.ui-draggable-iframeFix").each(function() {
                    this.parentNode.removeChild(this)
                })
            }
            return a.ui.mouse.prototype._mouseUp.call(this, e)
        },
        cancel: function() {
            if (this.helper.is(".ui-draggable-dragging")) {
                this._mouseUp({})
            } else {
                this._clear()
            }
            return this
        },
        _getHandle: function(e) {
            var f = !this.options.handle || !a(this.options.handle, this.element).length ? true: false;
            a(this.options.handle, this.element).find("*").andSelf().each(function() {
                if (this == e.target) {
                    f = true
                }
            });
            return f
        },
        _createHelper: function(f) {
            var g = this.options;
            var e = a.isFunction(g.helper) ? a(g.helper.apply(this.element[0], [f])) : (g.helper == "clone" ? this.element.clone().removeAttr("id") : this.element);
            if (!e.parents("body").length) {
                e.appendTo((g.appendTo == "parent" ? this.element[0].parentNode: g.appendTo))
            }
            if (e[0] != this.element[0] && !(/(fixed|absolute)/).test(e.css("position"))) {
                e.css("position", "absolute")
            }
            return e
        },
        _adjustOffsetFromHelper: function(e) {
            if (typeof e == "string") {
                e = e.split(" ")
            }
            if (a.isArray(e)) {
                e = {
                    left: +e[0],
                    top: +e[1] || 0
                }
            }
            if ("left" in e) {
                this.offset.click.left = e.left + this.margins.left
            }
            if ("right" in e) {
                this.offset.click.left = this.helperProportions.width - e.right + this.margins.left
            }
            if ("top" in e) {
                this.offset.click.top = e.top + this.margins.top
            }
            if ("bottom" in e) {
                this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top
            }
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            if (this.cssPosition == "absolute" && this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0])) {
                e.left += this.scrollParent.scrollLeft();
                e.top += this.scrollParent.scrollTop()
            }
            if ((this.offsetParent[0] == document.body) || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && a.browser.msie)) {
                e = {
                    top: 0,
                    left: 0
                }
            }
            return {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition == "relative") {
                var e = this.element.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            } else {
                return {
                    top: 0,
                    left: 0
                }
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: (parseInt(this.element.css("marginLeft"), 10) || 0),
                top: (parseInt(this.element.css("marginTop"), 10) || 0),
                right: (parseInt(this.element.css("marginRight"), 10) || 0),
                bottom: (parseInt(this.element.css("marginBottom"), 10) || 0)
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var h = this.options;
            if (h.containment == "parent") {
                h.containment = this.helper[0].parentNode
            }
            if (h.containment == "document" || h.containment == "window") {
                this.containment = [(h.containment == "document" ? 0 : a(window).scrollLeft()) - this.offset.relative.left - this.offset.parent.left, (h.containment == "document" ? 0 : a(window).scrollTop()) - this.offset.relative.top - this.offset.parent.top, (h.containment == "document" ? 0 : a(window).scrollLeft()) + a(h.containment == "document" ? document: window).width() - this.helperProportions.width - this.margins.left, (h.containment == "document" ? 0 : a(window).scrollTop()) + (a(h.containment == "document" ? document: window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]
            }
            if (! (/^(document|window|parent)$/).test(h.containment) && h.containment.constructor != Array) {
                var j = a(h.containment);
                var f = j[0];
                if (!f) {
                    return
                }
                var g = j.offset();
                var e = (a(f).css("overflow") != "hidden");
                this.containment = [(parseInt(a(f).css("borderLeftWidth"), 10) || 0) + (parseInt(a(f).css("paddingLeft"), 10) || 0), (parseInt(a(f).css("borderTopWidth"), 10) || 0) + (parseInt(a(f).css("paddingTop"), 10) || 0), (e ? Math.max(f.scrollWidth, f.offsetWidth) : f.offsetWidth) - (parseInt(a(f).css("borderLeftWidth"), 10) || 0) - (parseInt(a(f).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(f.scrollHeight, f.offsetHeight) : f.offsetHeight) - (parseInt(a(f).css("borderTopWidth"), 10) || 0) - (parseInt(a(f).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
                this.relative_container = j
            } else {
                if (h.containment.constructor == Array) {
                    this.containment = h.containment
                }
            }
        },
        _convertPositionTo: function(h, k) {
            if (!k) {
                k = this.position
            }
            var f = h == "absolute" ? 1 : -1;
            var g = this.options,
            e = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent: this.scrollParent,
            j = (/(html|body)/i).test(e[0].tagName);
            return {
                top: (k.top + this.offset.relative.top * f + this.offset.parent.top * f - (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : (j ? 0 : e.scrollTop())) * f)),
                left: (k.left + this.offset.relative.left * f + this.offset.parent.left * f - (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : j ? 0 : e.scrollLeft()) * f))
            }
        },
        _generatePosition: function(f) {
            var g = this.options,
            r = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && a.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent: this.scrollParent,
            m = (/(html|body)/i).test(r[0].tagName);
            var k = f.pageX;
            var j = f.pageY;
            if (this.originalPosition) {
                var e;
                if (this.containment) {
                    if (this.relative_container) {
                        var q = this.relative_container.offset();
                        e = [this.containment[0] + q.left, this.containment[1] + q.top, this.containment[2] + q.left, this.containment[3] + q.top]
                    } else {
                        e = this.containment
                    }
                    if (f.pageX - this.offset.click.left < e[0]) {
                        k = e[0] + this.offset.click.left
                    }
                    if (f.pageY - this.offset.click.top < e[1]) {
                        j = e[1] + this.offset.click.top
                    }
                    if (f.pageX - this.offset.click.left > e[2]) {
                        k = e[2] + this.offset.click.left
                    }
                    if (f.pageY - this.offset.click.top > e[3]) {
                        j = e[3] + this.offset.click.top
                    }
                }
                if (g.grid) {
                    var n = this.originalPageY + Math.round((j - this.originalPageY) / g.grid[1]) * g.grid[1];
                    j = e ? (!(n - this.offset.click.top < e[1] || n - this.offset.click.top > e[3]) ? n: (!(n - this.offset.click.top < e[1]) ? n - g.grid[1] : n + g.grid[1])) : n;
                    var h = this.originalPageX + Math.round((k - this.originalPageX) / g.grid[0]) * g.grid[0];
                    k = e ? (!(h - this.offset.click.left < e[0] || h - this.offset.click.left > e[2]) ? h: (!(h - this.offset.click.left < e[0]) ? h - g.grid[0] : h + g.grid[0])) : h
                }
            }
            return {
                top: (j - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : (m ? 0 : r.scrollTop())))),
                left: (k - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (a.browser.safari && a.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : m ? 0 : r.scrollLeft())))
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging");
            if (this.helper[0] != this.element[0] && !this.cancelHelperRemoval) {
                this.helper.remove()
            }
            this.helper = null;
            this.cancelHelperRemoval = false
        },
        _trigger: function(e, f, g) {
            g = g || this._uiHash();
            a.ui.plugin.call(this, e, [f, g]);
            if (e == "drag") {
                this.positionAbs = this._convertPositionTo("absolute")
            }
            return a.Widget.prototype._trigger.call(this, e, f, g)
        },
        plugins: {},
        _uiHash: function(e) {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    });
    a.extend(a.ui.draggable, {
        version: "@VERSION"
    });
    a.ui.plugin.add("draggable", "connectToSortable", {
        start: function(f, h) {
            var g = a(this).data("draggable"),
            j = g.options,
            e = a.extend({},
            h, {
                item: g.element
            });
            g.sortables = [];
            a(j.connectToSortable).each(function() {
                var k = a.data(this, "sortable");
                if (k && !k.options.disabled) {
                    g.sortables.push({
                        instance: k,
                        shouldRevert: k.options.revert
                    });
                    k.refreshPositions();
                    k._trigger("activate", f, e)
                }
            })
        },
        stop: function(f, h) {
            var g = a(this).data("draggable"),
            e = a.extend({},
            h, {
                item: g.element
            });
            a.each(g.sortables,
            function() {
                if (this.instance.isOver) {
                    this.instance.isOver = 0;
                    g.cancelHelperRemoval = true;
                    this.instance.cancelHelperRemoval = false;
                    if (this.shouldRevert) {
                        this.instance.options.revert = true
                    }
                    this.instance._mouseStop(f);
                    this.instance.options.helper = this.instance.options._helper;
                    if (g.options.helper == "original") {
                        this.instance.currentItem.css({
                            top: "auto",
                            left: "auto"
                        })
                    }
                } else {
                    this.instance.cancelHelperRemoval = false;
                    this.instance._trigger("deactivate", f, e)
                }
            })
        },
        drag: function(f, j) {
            var h = a(this).data("draggable"),
            e = this;
            var g = function(n) {
                var v = this.offset.click.top,
                u = this.offset.click.left;
                var k = this.positionAbs.top,
                r = this.positionAbs.left;
                var q = n.height,
                t = n.width;
                var w = n.top,
                m = n.left;
                return a.ui.isOver(k + v, r + u, w, m, q, t)
            };
            a.each(h.sortables,
            function(k) {
                this.instance.positionAbs = h.positionAbs;
                this.instance.helperProportions = h.helperProportions;
                this.instance.offset.click = h.offset.click;
                if (this.instance._intersectsWith(this.instance.containerCache)) {
                    if (!this.instance.isOver) {
                        this.instance.isOver = 1;
                        this.instance.currentItem = a(e).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", true);
                        this.instance.options._helper = this.instance.options.helper;
                        this.instance.options.helper = function() {
                            return j.helper[0]
                        };
                        f.target = this.instance.currentItem[0];
                        this.instance._mouseCapture(f, true);
                        this.instance._mouseStart(f, true, true);
                        this.instance.offset.click.top = h.offset.click.top;
                        this.instance.offset.click.left = h.offset.click.left;
                        this.instance.offset.parent.left -= h.offset.parent.left - this.instance.offset.parent.left;
                        this.instance.offset.parent.top -= h.offset.parent.top - this.instance.offset.parent.top;
                        h._trigger("toSortable", f);
                        h.dropped = this.instance.element;
                        h.currentItem = h.element;
                        this.instance.fromOutside = h
                    }
                    if (this.instance.currentItem) {
                        this.instance._mouseDrag(f)
                    }
                } else {
                    if (this.instance.isOver) {
                        this.instance.isOver = 0;
                        this.instance.cancelHelperRemoval = true;
                        this.instance.options.revert = false;
                        this.instance._trigger("out", f, this.instance._uiHash(this.instance));
                        this.instance._mouseStop(f, true);
                        this.instance.options.helper = this.instance.options._helper;
                        this.instance.currentItem.remove();
                        if (this.instance.placeholder) {
                            this.instance.placeholder.remove()
                        }
                        h._trigger("fromSortable", f);
                        h.dropped = false
                    }
                }
            })
        }
    });
    a.ui.plugin.add("draggable", "cursor", {
        start: function(f, g) {
            var e = a("body"),
            h = a(this).data("draggable").options;
            if (e.css("cursor")) {
                h._cursor = e.css("cursor")
            }
            e.css("cursor", h.cursor)
        },
        stop: function(e, f) {
            var g = a(this).data("draggable").options;
            if (g._cursor) {
                a("body").css("cursor", g._cursor)
            }
        }
    });
    a.ui.plugin.add("draggable", "opacity", {
        start: function(f, g) {
            var e = a(g.helper),
            h = a(this).data("draggable").options;
            if (e.css("opacity")) {
                h._opacity = e.css("opacity")
            }
            e.css("opacity", h.opacity)
        },
        stop: function(e, f) {
            var g = a(this).data("draggable").options;
            if (g._opacity) {
                a(f.helper).css("opacity", g._opacity)
            }
        }
    });
    a.ui.plugin.add("draggable", "scroll", {
        start: function(f, g) {
            var e = a(this).data("draggable");
            if (e.scrollParent[0] != document && e.scrollParent[0].tagName != "HTML") {
                e.overflowOffset = e.scrollParent.offset()
            }
        },
        drag: function(g, h) {
            var f = a(this).data("draggable"),
            j = f.options,
            e = false;
            if (f.scrollParent[0] != document && f.scrollParent[0].tagName != "HTML") {
                if (!j.axis || j.axis != "x") {
                    if ((f.overflowOffset.top + f.scrollParent[0].offsetHeight) - g.pageY < j.scrollSensitivity) {
                        f.scrollParent[0].scrollTop = e = f.scrollParent[0].scrollTop + j.scrollSpeed
                    } else {
                        if (g.pageY - f.overflowOffset.top < j.scrollSensitivity) {
                            f.scrollParent[0].scrollTop = e = f.scrollParent[0].scrollTop - j.scrollSpeed
                        }
                    }
                }
                if (!j.axis || j.axis != "y") {
                    if ((f.overflowOffset.left + f.scrollParent[0].offsetWidth) - g.pageX < j.scrollSensitivity) {
                        f.scrollParent[0].scrollLeft = e = f.scrollParent[0].scrollLeft + j.scrollSpeed
                    } else {
                        if (g.pageX - f.overflowOffset.left < j.scrollSensitivity) {
                            f.scrollParent[0].scrollLeft = e = f.scrollParent[0].scrollLeft - j.scrollSpeed
                        }
                    }
                }
            } else {
                if (!j.axis || j.axis != "x") {
                    if (g.pageY - a(document).scrollTop() < j.scrollSensitivity) {
                        e = a(document).scrollTop(a(document).scrollTop() - j.scrollSpeed)
                    } else {
                        if (a(window).height() - (g.pageY - a(document).scrollTop()) < j.scrollSensitivity) {
                            e = a(document).scrollTop(a(document).scrollTop() + j.scrollSpeed)
                        }
                    }
                }
                if (!j.axis || j.axis != "y") {
                    if (g.pageX - a(document).scrollLeft() < j.scrollSensitivity) {
                        e = a(document).scrollLeft(a(document).scrollLeft() - j.scrollSpeed)
                    } else {
                        if (a(window).width() - (g.pageX - a(document).scrollLeft()) < j.scrollSensitivity) {
                            e = a(document).scrollLeft(a(document).scrollLeft() + j.scrollSpeed)
                        }
                    }
                }
            }
            if (e !== false && a.ui.ddmanager && !j.dropBehaviour) {
                a.ui.ddmanager.prepareOffsets(f, g)
            }
        }
    });
    a.ui.plugin.add("draggable", "snap", {
        start: function(f, g) {
            var e = a(this).data("draggable"),
            h = e.options;
            e.snapElements = [];
            a(h.snap.constructor != String ? (h.snap.items || ":data(draggable)") : h.snap).each(function() {
                var k = a(this);
                var j = k.offset();
                if (this != e.element[0]) {
                    e.snapElements.push({
                        item: this,
                        width: k.outerWidth(),
                        height: k.outerHeight(),
                        top: j.top,
                        left: j.left
                    })
                }
            })
        },
        drag: function(x, u) {
            var h = a(this).data("draggable"),
            v = h.options;
            var B = v.snapTolerance;
            var A = u.offset.left,
            z = A + h.helperProportions.width,
            g = u.offset.top,
            f = g + h.helperProportions.height;
            for (var y = h.snapElements.length - 1; y >= 0; y--) {
                var w = h.snapElements[y].left,
                q = w + h.snapElements[y].width,
                n = h.snapElements[y].top,
                D = n + h.snapElements[y].height;
                if (! ((w - B < A && A < q + B && n - B < g && g < D + B) || (w - B < A && A < q + B && n - B < f && f < D + B) || (w - B < z && z < q + B && n - B < g && g < D + B) || (w - B < z && z < q + B && n - B < f && f < D + B))) {
                    if (h.snapElements[y].snapping) { (h.options.snap.release && h.options.snap.release.call(h.element, x, a.extend(h._uiHash(), {
                            snapItem: h.snapElements[y].item
                        })))
                    }
                    h.snapElements[y].snapping = false;
                    continue
                }
                if (v.snapMode != "inner") {
                    var e = Math.abs(n - f) <= B;
                    var C = Math.abs(D - g) <= B;
                    var k = Math.abs(w - z) <= B;
                    var m = Math.abs(q - A) <= B;
                    if (e) {
                        u.position.top = h._convertPositionTo("relative", {
                            top: n - h.helperProportions.height,
                            left: 0
                        }).top - h.margins.top
                    }
                    if (C) {
                        u.position.top = h._convertPositionTo("relative", {
                            top: D,
                            left: 0
                        }).top - h.margins.top
                    }
                    if (k) {
                        u.position.left = h._convertPositionTo("relative", {
                            top: 0,
                            left: w - h.helperProportions.width
                        }).left - h.margins.left
                    }
                    if (m) {
                        u.position.left = h._convertPositionTo("relative", {
                            top: 0,
                            left: q
                        }).left - h.margins.left
                    }
                }
                var j = (e || C || k || m);
                if (v.snapMode != "outer") {
                    var e = Math.abs(n - g) <= B;
                    var C = Math.abs(D - f) <= B;
                    var k = Math.abs(w - A) <= B;
                    var m = Math.abs(q - z) <= B;
                    if (e) {
                        u.position.top = h._convertPositionTo("relative", {
                            top: n,
                            left: 0
                        }).top - h.margins.top
                    }
                    if (C) {
                        u.position.top = h._convertPositionTo("relative", {
                            top: D - h.helperProportions.height,
                            left: 0
                        }).top - h.margins.top
                    }
                    if (k) {
                        u.position.left = h._convertPositionTo("relative", {
                            top: 0,
                            left: w
                        }).left - h.margins.left
                    }
                    if (m) {
                        u.position.left = h._convertPositionTo("relative", {
                            top: 0,
                            left: q - h.helperProportions.width
                        }).left - h.margins.left
                    }
                }
                if (!h.snapElements[y].snapping && (e || C || k || m || j)) { (h.options.snap.snap && h.options.snap.snap.call(h.element, x, a.extend(h._uiHash(), {
                        snapItem: h.snapElements[y].item
                    })))
                }
                h.snapElements[y].snapping = (e || C || k || m || j)
            }
        }
    });
    a.ui.plugin.add("draggable", "stack", {
        start: function(f, g) {
            var j = a(this).data("draggable").options;
            var h = a.makeArray(a(j.stack)).sort(function(m, k) {
                return (parseInt(a(m).css("zIndex"), 10) || 0) - (parseInt(a(k).css("zIndex"), 10) || 0)
            });
            if (!h.length) {
                return
            }
            var e = parseInt(h[0].style.zIndex) || 0;
            a(h).each(function(k) {
                this.style.zIndex = e + k
            });
            this[0].style.zIndex = e + h.length
        }
    });
    a.ui.plugin.add("draggable", "zIndex", {
        start: function(f, g) {
            var e = a(g.helper),
            h = a(this).data("draggable").options;
            if (e.css("zIndex")) {
                h._zIndex = e.css("zIndex")
            }
            e.css("zIndex", h.zIndex)
        },
        stop: function(e, f) {
            var g = a(this).data("draggable").options;
            if (g._zIndex) {
                a(f.helper).css("zIndex", g._zIndex)
            }
        }
    })
})(jQuery); 