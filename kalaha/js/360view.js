/*!
 * 
 *  js-cloudimage-360-view v2.0.4
 *  https://github.com/scaleflex/js-cloudimage-360-view
 * 
 *  Copyright (c) 2019 scaleflex
 *  Released under the MIT license
 * 
 *  Date: 2019-04-17T08:02:12.381Z
 * 
 */
! function(t) {
	var e = {};

	function i(n) {
		if (e[n]) return e[n].exports;
		var o = e[n] = {
			i: n,
			l: !1,
			exports: {}
		};
		return t[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports
	}
	i.m = t, i.c = e, i.d = function(t, e, n) {
		i.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: n
		})
	}, i.r = function(t) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, i.t = function(t, e) {
		if (1 & e && (t = i(t)), 8 & e) return t;
		if (4 & e && "object" == typeof t && t && t.__esModule) return t;
		var n = Object.create(null);
		if (i.r(n), Object.defineProperty(n, "default", {
			enumerable: !0,
			value: t
		}), 2 & e && "string" != typeof t)
			for (var o in t) i.d(n, o, function(e) {
				return t[e]
			}.bind(null, o));
		return n
	}, i.n = function(t) {
		var e = t && t.__esModule ? function() {
			return t.default
		} : function() {
			return t
		};
		return i.d(e, "a", e), e
	}, i.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, i.p = "", i(i.s = 33)
}([function(t, e) {
	t.exports = "object" == typeof window && window && window.Math == Math ? window : "object" == typeof self && self && self.Math == Math ? self : Function("return this")()
}, function(t, e) {
	t.exports = function(t) {
		try {
			return !!t()
		} catch (t) {
			return !0
		}
	}
}, function(t, e) {
	t.exports = function(t) {
		return "object" == typeof t ? null !== t : "function" == typeof t
	}
}, function(t, e, i) {
	var n = i(10),
		o = i(26);
	t.exports = i(4) ? function(t, e, i) {
		return n.f(t, e, o(1, i))
	} : function(t, e, i) {
		return t[e] = i, t
	}
}, function(t, e, i) {
	t.exports = !i(1)(function() {
		return 7 != Object.defineProperty({}, "a", {
				get: function() {
					return 7
				}
			})
			.a
	})
}, function(t, e) {
	var i = {}.hasOwnProperty;
	t.exports = function(t, e) {
		return i.call(t, e)
	}
}, function(t, e, i) {
	var n = i(0),
		o = i(9),
		r = n["__core-js_shared__"] || o("__core-js_shared__", {});
	(t.exports = function(t, e) {
		return r[t] || (r[t] = void 0 !== e ? e : {})
	})("versions", [])
	.push({
		version: "3.0.0",
		mode: i(42) ? "pure" : "global",
		copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
	})
}, function(t, e, i) {
	var n = i(2);
	t.exports = function(t) {
		if (!n(t)) throw TypeError(String(t) + " is not an object");
		return t
	}
}, function(t, e, i) {
	var n = i(6)("wks"),
		o = i(27),
		r = i(0)
		.Symbol,
		s = i(43);
	t.exports = function(t) {
		return n[t] || (n[t] = s && r[t] || (s ? r : o)("Symbol." + t))
	}
}, function(t, e, i) {
	var n = i(0),
		o = i(3);
	t.exports = function(t, e) {
		try {
			o(n, t, e)
		} catch (i) {
			n[t] = e
		}
		return e
	}
}, function(t, e, i) {
	var n = i(4),
		o = i(23),
		r = i(7),
		s = i(25),
		a = Object.defineProperty;
	e.f = n ? a : function(t, e, i) {
		if (r(t), e = s(e, !0), r(i), o) try {
			return a(t, e, i)
		} catch (t) {}
		if ("get" in i || "set" in i) throw TypeError("Accessors not supported");
		return "value" in i && (t[e] = i.value), t
	}
}, function(t, e, i) {
	var n = i(0),
		o = i(28)
		.f,
		r = i(3),
		s = i(46),
		a = i(9),
		c = i(49),
		l = i(54);
	t.exports = function(t, e) {
		var i, u, h, f, d, v = t.target,
			p = t.global,
			y = t.stat;
		if (i = p ? n : y ? n[v] || a(v, {}) : (n[v] || {})
			.prototype)
			for (u in e) {
				if (f = e[u], h = t.noTargetGet ? (d = o(i, u)) && d.value : i[u], !l(p ? u : v + (y ? "." : "#") + u, t.forced) && void 0 !== h) {
					if (typeof f == typeof h) continue;
					c(f, h)
				}(t.sham || h && h.sham) && r(f, "sham", !0), s(i, u, f, t)
			}
	}
}, function(t, e, i) {
	var n = i(18),
		o = i(20);
	t.exports = function(t) {
		return n(o(t))
	}
}, function(t, e) {
	t.exports = {}
}, function(t, e) {
	t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function(t, e, i) {
	var n = i(0),
		o = i(17),
		r = Function.call;
	t.exports = function(t, e, i) {
		return o(r, n[t].prototype[e], i)
	}
}, function(t, e, i) {
	var n = i(17),
		o = i(18),
		r = i(39),
		s = i(21),
		a = i(40);
	t.exports = function(t, e) {
		var i = 1 == t,
			c = 2 == t,
			l = 3 == t,
			u = 4 == t,
			h = 6 == t,
			f = 5 == t || h,
			d = e || a;
		return function(e, a, v) {
			for (var p, y, g = r(e), m = o(g), w = n(a, v, 3), x = s(m.length), b = 0, I = i ? d(e, x) : c ? d(e, 0) : void 0; x > b; b++)
				if ((f || b in m) && (y = w(p = m[b], b, g), t))
					if (i) I[b] = y;
					else if (y) switch (t) {
				case 3:
					return !0;
				case 5:
					return p;
				case 6:
					return b;
				case 2:
					I.push(p)
			} else if (u) return !1;
			return h ? -1 : l || u ? u : I
		}
	}
}, function(t, e, i) {
	var n = i(38);
	t.exports = function(t, e, i) {
		if (n(t), void 0 === e) return t;
		switch (i) {
			case 0:
				return function() {
					return t.call(e)
				};
			case 1:
				return function(i) {
					return t.call(e, i)
				};
			case 2:
				return function(i, n) {
					return t.call(e, i, n)
				};
			case 3:
				return function(i, n, o) {
					return t.call(e, i, n, o)
				}
		}
		return function() {
			return t.apply(e, arguments)
		}
	}
}, function(t, e, i) {
	var n = i(1),
		o = i(19),
		r = "".split;
	t.exports = n(function() {
		return !Object("z")
			.propertyIsEnumerable(0)
	}) ? function(t) {
		return "String" == o(t) ? r.call(t, "") : Object(t)
	} : Object
}, function(t, e) {
	var i = {}.toString;
	t.exports = function(t) {
		return i.call(t)
			.slice(8, -1)
	}
}, function(t, e) {
	t.exports = function(t) {
		if (null == t) throw TypeError("Can't call method on " + t);
		return t
	}
}, function(t, e, i) {
	var n = i(22),
		o = Math.min;
	t.exports = function(t) {
		return t > 0 ? o(n(t), 9007199254740991) : 0
	}
}, function(t, e) {
	var i = Math.ceil,
		n = Math.floor;
	t.exports = function(t) {
		return isNaN(t = +t) ? 0 : (t > 0 ? n : i)(t)
	}
}, function(t, e, i) {
	t.exports = !i(4) && !i(1)(function() {
		return 7 != Object.defineProperty(i(24)("div"), "a", {
				get: function() {
					return 7
				}
			})
			.a
	})
}, function(t, e, i) {
	var n = i(2),
		o = i(0)
		.document,
		r = n(o) && n(o.createElement);
	t.exports = function(t) {
		return r ? o.createElement(t) : {}
	}
}, function(t, e, i) {
	var n = i(2);
	t.exports = function(t, e) {
		if (!n(t)) return t;
		var i, o;
		if (e && "function" == typeof(i = t.toString) && !n(o = i.call(t))) return o;
		if ("function" == typeof(i = t.valueOf) && !n(o = i.call(t))) return o;
		if (!e && "function" == typeof(i = t.toString) && !n(o = i.call(t))) return o;
		throw TypeError("Can't convert object to primitive value")
	}
}, function(t, e) {
	t.exports = function(t, e) {
		return {
			enumerable: !(1 & t),
			configurable: !(2 & t),
			writable: !(4 & t),
			value: e
		}
	}
}, function(t, e) {
	var i = 0,
		n = Math.random();
	t.exports = function(t) {
		return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++i + n)
			.toString(36))
	}
}, function(t, e, i) {
	var n = i(4),
		o = i(45),
		r = i(26),
		s = i(12),
		a = i(25),
		c = i(5),
		l = i(23),
		u = Object.getOwnPropertyDescriptor;
	e.f = n ? u : function(t, e) {
		if (t = s(t), e = a(e, !0), l) try {
			return u(t, e)
		} catch (t) {}
		if (c(t, e)) return r(!o.f.call(t, e), t[e])
	}
}, function(t, e, i) {
	t.exports = i(6)("native-function-to-string", Function.toString)
}, function(t, e, i) {
	var n = i(6)("keys"),
		o = i(27);
	t.exports = function(t) {
		return n[t] || (n[t] = o(t))
	}
}, function(t, e, i) {
	var n = i(5),
		o = i(12),
		r = i(32)(!1),
		s = i(13);
	t.exports = function(t, e) {
		var i, a = o(t),
			c = 0,
			l = [];
		for (i in a) !n(s, i) && n(a, i) && l.push(i);
		for (; e.length > c;) n(a, i = e[c++]) && (~r(l, i) || l.push(i));
		return l
	}
}, function(t, e, i) {
	var n = i(12),
		o = i(21),
		r = i(52);
	t.exports = function(t) {
		return function(e, i, s) {
			var a, c = n(e),
				l = o(c.length),
				u = r(s, l);
			if (t && i != i) {
				for (; l > u;)
					if ((a = c[u++]) != a) return !0
			} else
				for (; l > u; u++)
					if ((t || u in c) && c[u] === i) return t || u || 0;
			return !t && -1
		}
	}
}, function(t, e, i) {
	"use strict";
	i(34), i(55), i(59);
	var n, o = i(67),
		r = (n = o) && n.__esModule ? n : {
			default: n
		};

	function s() {
		var t = document.querySelectorAll(".cloudimage-360");
		[].slice.call(t)
			.forEach(function(t) {
				new r.default(t)
			})
	}
	window.CI360 = {
		init: s
	}, s()
}, function(t, e, i) {
	t.exports = i(35)
}, function(t, e, i) {
	i(36), t.exports = i(15)("Array", "forEach")
}, function(t, e, i) {
	"use strict";
	var n = i(37);
	i(11)({
		target: "Array",
		proto: !0,
		forced: [].forEach != n
	}, {
		forEach: n
	})
}, function(t, e, i) {
	"use strict";
	var n = [].forEach,
		o = i(16)(0),
		r = i(44)("forEach");
	t.exports = r ? function(t) {
		return o(this, t, arguments[1])
	} : n
}, function(t, e) {
	t.exports = function(t) {
		if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
		return t
	}
}, function(t, e, i) {
	var n = i(20);
	t.exports = function(t) {
		return Object(n(t))
	}
}, function(t, e, i) {
	var n = i(2),
		o = i(41),
		r = i(8)("species");
	t.exports = function(t, e) {
		var i;
		return o(t) && ("function" != typeof(i = t.constructor) || i !== Array && !o(i.prototype) ? n(i) && null === (i = i[r]) && (i = void 0) : i = void 0), new(void 0 === i ? Array : i)(0 === e ? 0 : e)
	}
}, function(t, e, i) {
	var n = i(19);
	t.exports = Array.isArray || function(t) {
		return "Array" == n(t)
	}
}, function(t, e) {
	t.exports = !1
}, function(t, e, i) {
	t.exports = !i(1)(function() {
		String(Symbol())
	})
}, function(t, e, i) {
	"use strict";
	var n = i(1);
	t.exports = function(t, e) {
		var i = [][t];
		return !i || !n(function() {
			i.call(null, e || function() {
				throw Error()
			}, 1)
		})
	}
}, function(t, e, i) {
	"use strict";
	var n = {}.propertyIsEnumerable,
		o = Object.getOwnPropertyDescriptor,
		r = o && !n.call({
			1: 2
		}, 1);
	e.f = r ? function(t) {
		var e = o(this, t);
		return !!e && e.enumerable
	} : n
}, function(t, e, i) {
	var n = i(0),
		o = i(3),
		r = i(5),
		s = i(9),
		a = i(29),
		c = i(47),
		l = c.get,
		u = c.enforce,
		h = String(a)
		.split("toString");
	i(6)("inspectSource", function(t) {
		return a.call(t)
	}), (t.exports = function(t, e, i, a) {
		var c = !!a && !!a.unsafe,
			l = !!a && !!a.enumerable,
			f = !!a && !!a.noTargetGet;
		"function" == typeof i && ("string" != typeof e || r(i, "name") || o(i, "name", e), u(i)
			.source = h.join("string" == typeof e ? e : "")), t !== n ? (c ? !f && t[e] && (l = !0) : delete t[e], l ? t[e] = i : o(t, e, i)) : l ? t[e] = i : s(e, i)
	})(Function.prototype, "toString", function() {
		return "function" == typeof this && l(this)
			.source || a.call(this)
	})
}, function(t, e, i) {
	var n, o, r, s = i(48),
		a = i(2),
		c = i(3),
		l = i(5),
		u = i(30),
		h = i(13),
		f = i(0)
		.WeakMap;
	if (s) {
		var d = new f,
			v = d.get,
			p = d.has,
			y = d.set;
		n = function(t, e) {
			return y.call(d, t, e), e
		}, o = function(t) {
			return v.call(d, t) || {}
		}, r = function(t) {
			return p.call(d, t)
		}
	} else {
		var g = u("state");
		h[g] = !0, n = function(t, e) {
			return c(t, g, e), e
		}, o = function(t) {
			return l(t, g) ? t[g] : {}
		}, r = function(t) {
			return l(t, g)
		}
	}
	t.exports = {
		set: n,
		get: o,
		has: r,
		enforce: function(t) {
			return r(t) ? o(t) : n(t, {})
		},
		getterFor: function(t) {
			return function(e) {
				var i;
				if (!a(e) || (i = o(e))
					.type !== t) throw TypeError("Incompatible receiver, " + t + " required");
				return i
			}
		}
	}
}, function(t, e, i) {
	var n = i(29),
		o = i(0)
		.WeakMap;
	t.exports = "function" == typeof o && /native code/.test(n.call(o))
}, function(t, e, i) {
	var n = i(5),
		o = i(50),
		r = i(28),
		s = i(10);
	t.exports = function(t, e) {
		for (var i = o(e), a = s.f, c = r.f, l = 0; l < i.length; l++) {
			var u = i[l];
			n(t, u) || a(t, u, c(e, u))
		}
	}
}, function(t, e, i) {
	var n = i(51),
		o = i(53),
		r = i(7),
		s = i(0)
		.Reflect;
	t.exports = s && s.ownKeys || function(t) {
		var e = n.f(r(t)),
			i = o.f;
		return i ? e.concat(i(t)) : e
	}
}, function(t, e, i) {
	var n = i(31),
		o = i(14)
		.concat("length", "prototype");
	e.f = Object.getOwnPropertyNames || function(t) {
		return n(t, o)
	}
}, function(t, e, i) {
	var n = i(22),
		o = Math.max,
		r = Math.min;
	t.exports = function(t, e) {
		var i = n(t);
		return i < 0 ? o(i + e, 0) : r(i, e)
	}
}, function(t, e) {
	e.f = Object.getOwnPropertySymbols
}, function(t, e, i) {
	var n = i(1),
		o = /#|\.prototype\./,
		r = function(t, e) {
			var i = a[s(t)];
			return i == l || i != c && ("function" == typeof e ? n(e) : !!e)
		},
		s = r.normalize = function(t) {
			return String(t)
				.replace(o, ".")
				.toLowerCase()
		},
		a = r.data = {},
		c = r.NATIVE = "N",
		l = r.POLYFILL = "P";
	t.exports = r
}, function(t, e, i) {
	t.exports = i(56)
}, function(t, e, i) {
	i(57), t.exports = i(15)("Array", "filter")
}, function(t, e, i) {
	"use strict";
	var n = i(16)(2),
		o = i(58)("filter");
	i(11)({
		target: "Array",
		proto: !0,
		forced: !o
	}, {
		filter: function(t) {
			return n(this, t, arguments[1])
		}
	})
}, function(t, e, i) {
	var n = i(1),
		o = i(8)("species");
	t.exports = function(t) {
		return !n(function() {
			var e = [];
			return (e.constructor = {})[o] = function() {
					return {
						foo: 1
					}
				}, 1 !== e[t](Boolean)
				.foo
		})
	}
}, function(t, e, i) {
	t.exports = i(60)
}, function(t, e, i) {
	i(61), t.exports = i(15)("Array", "includes")
}, function(t, e, i) {
	"use strict";
	var n = i(32)(!0);
	i(11)({
		target: "Array",
		proto: !0
	}, {
		includes: function(t) {
			return n(this, t, arguments.length > 1 ? arguments[1] : void 0)
		}
	}), i(62)("includes")
}, function(t, e, i) {
	var n = i(8)("unscopables"),
		o = i(63),
		r = i(3),
		s = Array.prototype;
	null == s[n] && r(s, n, o(null)), t.exports = function(t) {
		s[n][t] = !0
	}
}, function(t, e, i) {
	var n = i(7),
		o = i(64),
		r = i(14),
		s = i(66),
		a = i(24),
		c = i(30)("IE_PROTO"),
		l = function() {},
		u = function() {
			var t, e = a("iframe"),
				i = r.length;
			for (e.style.display = "none", s.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document)
				.open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; i--;) delete u.prototype[r[i]];
			return u()
		};
	t.exports = Object.create || function(t, e) {
		var i;
		return null !== t ? (l.prototype = n(t), i = new l, l.prototype = null, i[c] = t) : i = u(), void 0 === e ? i : o(i, e)
	}, i(13)[c] = !0
}, function(t, e, i) {
	var n = i(4),
		o = i(10),
		r = i(7),
		s = i(65);
	t.exports = n ? Object.defineProperties : function(t, e) {
		r(t);
		for (var i, n = s(e), a = n.length, c = 0; a > c;) o.f(t, i = n[c++], e[i]);
		return t
	}
}, function(t, e, i) {
	var n = i(31),
		o = i(14);
	t.exports = Object.keys || function(t) {
		return n(t, o)
	}
}, function(t, e, i) {
	var n = i(0)
		.document;
	t.exports = n && n.documentElement
}, function(t, e, i) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var n = function() {
			function t(t, e) {
				for (var i = 0; i < e.length; i++) {
					var n = e[i];
					n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
				}
			}
			return function(e, i, n) {
				return i && t(e.prototype, i), n && t(e, n), e
			}
		}(),
		o = i(68);
	var r = function() {
		function t(e, i, n) {
			! function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, t), this.container = e, this.activeImage = 1, this.movementStart = 0, this.isClicked = !1, this.loadedImages = 0, this.imagesLoaded = !1, this.reversed = !1, this.fullScreenView = !!i, this.ratio = n, this.images = [], this.devicePixelRatio = Math.round(window.devicePixelRatio || 1), this.isMobile = !!("ontouchstart" in window || navigator.msMaxTouchPoints), this.init(e)
		}
		return n(t, [{
			key: "mousedown",
			value: function(t) {
				t.preventDefault(), this.imagesLoaded && (this.glass && this.closeMagnifier(), this.view360Icon && this.remove360ViewIcon(), this.autoplay && (this.stop(), this.autoplay = !1), this.movementStart = t.pageX, this.isClicked = !0, this.container.style.cursor = "grabbing")
			}
		}, {
			key: "mouseup",
			value: function() {
				this.imagesLoaded && (this.movementStart = 0, this.isClicked = !1, this.container.style.cursor = "grab", this.bottomCircle && this.show360ViewCircleIcon())
			}
		}, {
			key: "mousemove",
			value: function(t) {
				this.isClicked && this.imagesLoaded && this.onMove(t.pageX)
			}
		}, {
			key: "touchstart",
			value: function(t) {
				this.imagesLoaded && (this.glass && this.closeMagnifier(), this.view360Icon && this.remove360ViewIcon(), this.autoplay && (this.stop(), this.autoplay = !1), this.movementStart = t.touches[0].clientX, this.isClicked = !0)
			}
		}, {
			key: "touchend",
			value: function() {
				this.imagesLoaded && (this.movementStart = 0, this.isClicked = !1, this.bottomCircle && this.show360ViewCircleIcon())
			}
		}, {
			key: "touchmove",
			value: function(t) {
				this.isClicked && this.imagesLoaded && this.onMove(t.touches[0].clientX)
			}
		}, {
			key: "keydownGeneral",
			value: function() {
				this.imagesLoaded && this.glass && this.closeMagnifier()
			}
		}, {
			key: "keydown",
			value: function(t) {
				var e = this;
				if (this.imagesLoaded && (this.glass && this.closeMagnifier(), -1 !== [37, 39].indexOf(t.keyCode))) {
					var i = 37 === t.keyCode;
					i ? this.prev() : this.next(), this.bottomCircle && this.hide360ViewCircleIcon(), this.view360Icon && this.remove360ViewIcon(), this.autoplay && (this.stop(), this.autoplay = !1), this.loopTimeoutId = window.setTimeout(function() {
						e.loop(i)
					}, 300)
				}
			}
		}, {
			key: "keyup",
			value: function(t) {
				this.imagesLoaded && -1 !== [37, 39].indexOf(t.keyCode) && (this.bottomCircle && this.show360ViewCircleIcon(), window.clearTimeout(this.loopTimeoutId))
			}
		}, {
			key: "onMove",
			value: function(t) {
				if (t - this.movementStart >= this.speedFactor) {
					var e = Math.floor((t - this.movementStart) / this.speedFactor) || 1;
					e >= 3 * this.speedFactor && (e = 3 * this.speedFactor), this.movementStart = t, this.spinReverse ? this.moveActiveIndexDown(e) : this.moveActiveIndexUp(e), this.bottomCircle && this.hide360ViewCircleIcon(), this.update(this.activeImage)
				} else if (this.movementStart - t >= this.speedFactor) {
					var i = Math.floor((this.movementStart - t) / this.speedFactor) || 1;
					i >= 3 * this.speedFactor && (i = 3 * this.speedFactor), this.movementStart = t, this.spinReverse ? this.moveActiveIndexUp(i) : this.moveActiveIndexDown(i), this.bottomCircle && this.hide360ViewCircleIcon(), this.update(this.activeImage)
				}
			}
		}, {
			key: "moveActiveIndexUp",
			value: function(t) {
				this.activeImage = (this.activeImage + t) % this.amount || 1
			}
		}, {
			key: "moveActiveIndexDown",
			value: function(t) {
				this.activeImage - t < 1 ? this.activeImage = this.amount + (this.activeImage - t) : this.activeImage = this.activeImage - t
			}
		}, {
			key: "loop",
			value: function(t) {
				t ? this.prev() : this.next()
			}
		}, {
			key: "next",
			value: function() {
				this.activeImage = this.activeImage % this.amount + 1, this.update(this.activeImage)
			}
		}, {
			key: "prev",
			value: function() {
				this.activeImage - 1 == 0 ? this.activeImage = this.amount : this.activeImage -= 1, this.update(this.activeImage)
			}
		}, {
			key: "update",
			value: function(t) {
				var e = this.images[t - 1],
					i = this.canvas.getContext("2d");
				if (i.scale(this.devicePixelRatio, this.devicePixelRatio), this.fullScreenView) {
					this.canvas.width = window.innerWidth * this.devicePixelRatio, this.canvas.style.width = window.innerWidth + "px", this.canvas.height = window.innerHeight * this.devicePixelRatio, this.canvas.style.height = window.innerHeight + "px";
					var n = (0, o.contain)(this.canvas.width, this.canvas.height, e.width, e.height),
						r = n.offsetX,
						s = n.offsetY,
						a = n.width,
						c = n.height;
					i.drawImage(e, r, s, a, c)
				} else this.canvas.width = this.container.offsetWidth * this.devicePixelRatio, this.canvas.style.width = this.container.offsetWidth + "px", this.canvas.height = this.container.offsetWidth * this.devicePixelRatio / e.width * e.height, this.canvas.style.height = this.container.offsetWidth / e.width * e.height + "px", i.drawImage(e, 0, 0, this.canvas.width, this.canvas.height)
			}
		}, {
			key: "updatePercentageInLoader",
			value: function(t) {
				this.loader && (this.loader.style.width = t + "%"), this.view360Icon && (this.view360Icon.innerText = t + "%")
			}
		}, {
			key: "onAllImagesLoaded",
			value: function(t) {
				if (this.imagesLoaded = !0, this.container.style.cursor = "grab", this.removeLoader(), this.fullScreenView) {
					var e = this.container.offsetHeight / this.container.offsetWidth,
						i = this.container.offsetWidth;
					this.ratio > e && (i = this.container.offsetHeight / this.ratio), this.speedFactor = Math.floor(36 / this.amount * 25 * i / 1500) || 1
				} else this.speedFactor = Math.floor(36 / this.amount * 25 * this.container.offsetWidth / 1500) || 1;
				this.autoplay && this.play(), this.view360Icon && (this.view360Icon.innerText = "", (0, o.setView360Icon)(this.view360Icon))
			}
		}, {
			key: "onFirstImageLoaded",
			value: function(t) {
				var e = this;
				if (this.add360ViewIcon(), this.fullScreenView) {
					this.canvas.width = window.innerWidth * this.devicePixelRatio, this.canvas.style.width = window.innerWidth + "px", this.canvas.height = window.innerHeight * this.devicePixelRatio, this.canvas.style.height = window.innerHeight + "px";
					var i = this.canvas.getContext("2d"),
						n = (0, o.contain)(this.canvas.width, this.canvas.height, t.target.width, t.target.height),
						r = n.offsetX,
						s = n.offsetY,
						a = n.width,
						c = n.height;
					i.drawImage(t.target, r, s, a, c)
				} else {
					this.canvas.width = this.container.offsetWidth * this.devicePixelRatio, this.canvas.style.width = this.container.offsetWidth + "px", this.canvas.height = this.container.offsetWidth * this.devicePixelRatio / t.target.width * t.target.height, this.canvas.style.height = this.container.offsetWidth / t.target.width * t.target.height + "px", this.canvas.getContext("2d")
						.drawImage(t.target, 0, 0, this.canvas.width, this.canvas.height)
				}
				this.lazyload && !this.fullScreenView && this.images.forEach(function(t, i) {
					0 !== i ? t.getAttribute("data-src") && (t.src = t.getAttribute("data-src")) : e.container.removeChild(e.lazyloadInitImage)
				}), this.ratio && (this.container.style.minHeight = "auto"), this.magnifier && !this.fullScreenView && this.addMagnifier(), this.boxShadow && !this.fullScreenView && this.addBoxShadow(), this.bottomCircle && !this.fullScreenView && this.add360ViewCircleIcon(), this.fullScreen && !this.fullScreenView ? this.addFullScreenIcon() : this.fullScreenView && this.addCloseFullScreenView()
			}
		}, {
			key: "onImageLoad",
			value: function(t) {
				var e = Math.round(this.loadedImages / this.amount * 100);
				this.loadedImages += 1, this.updatePercentageInLoader(e), this.loadedImages === this.amount ? this.onAllImagesLoaded(t) : 1 === this.loadedImages && this.onFirstImageLoaded(t)
			}
		}, {
			key: "addCloseFullScreenView",
			value: function() {
				var t = document.createElement("div");
				(0, o.setCloseFullScreenViewStyles)(t), t.onclick = this.closeFullScreenModal.bind(this), this.container.appendChild(t)
			}
		}, {
			key: "add360ViewIcon",
			value: function() {
				var t = document.createElement("div");
				(0, o.set360ViewIconStyles)(t), t.innerText = "0%", this.view360Icon = t, this.container.appendChild(t)
			}
		}, {
			key: "addFullScreenIcon",
			value: function() {
				var t = document.createElement("div");
				(0, o.setFullScreenIconStyles)(t), t.onclick = this.openFullScreenModal.bind(this), this.container.appendChild(t)
			}
		}, {
			key: "addMagnifier",
			value: function() {
				var t = document.createElement("div");
				(0, o.setMagnifyIconStyles)(t, this.fullScreen), t.onclick = this.magnify.bind(this), this.container.appendChild(t)
			}
		}, {
			key: "magnify",
			value: function() {
				var t = this,
					e = "" + this.folder + this.filename.replace("{index}", this.activeImage),
					i = new Image;
				i.src = e, i.onload = function() {
					t.glass && (t.glass.style.cursor = "none")
				}, this.glass = document.createElement("div"), this.container.style.overflow = "hidden", (0, o.magnify)(this.container, this.container.children[this.activeImage], e, this.glass, this.magnifier || 3)
			}
		}, {
			key: "closeMagnifier",
			value: function() {
				this.glass && (this.container.style.overflow = "visible", this.container.removeChild(this.glass), this.glass = null)
			}
		}, {
			key: "openFullScreenModal",
			value: function() {
				var e = document.createElement("div");
				(0, o.setFullScreenModalStyles)(e);
				var i = this.container.cloneNode(),
					n = this.images[0],
					r = n.height / n.width;
				i.style.height = "100%", i.style.maxHeight = "100%", e.appendChild(i), window.document.body.appendChild(e), new t(i, !0, r)
			}
		}, {
			key: "closeFullScreenModal",
			value: function() {
				document.body.removeChild(this.container.parentNode)
			}
		}, {
			key: "add360ViewCircleIcon",
			value: function() {
				var t = new Image;
				(0, o.set360ViewCircleIconStyles)(t, this.bottomCircleOffset), this.view360CircleIcon = t, this.container.appendChild(t)
			}
		}, {
			key: "hide360ViewCircleIcon",
			value: function() {
				this.view360CircleIcon && (this.view360CircleIcon.style.opacity = 0)
			}
		}, {
			key: "show360ViewCircleIcon",
			value: function() {
				this.view360CircleIcon && (this.view360CircleIcon.style.opacity = 1)
			}
		}, {
			key: "remove360ViewCircleIcon",
			value: function() {
				this.view360CircleIcon && (this.container.removeChild(this.view360CircleIcon), this.view360CircleIcon = null)
			}
		}, {
			key: "addLoader",
			value: function() {
				var t = document.createElement("div");
				(0, o.setLoaderStyles)(t), this.loader = t, this.container.appendChild(t)
			}
		}, {
			key: "addBoxShadow",
			value: function() {
				var t = document.createElement("div");
				(0, o.setBoxShadowStyles)(t, this.boxShadow), this.container.appendChild(t)
			}
		}, {
			key: "removeLoader",
			value: function() {
				this.loader && (this.container.removeChild(this.loader), this.loader = null)
			}
		}, {
			key: "remove360ViewIcon",
			value: function() {
				this.view360Icon && (this.container.removeChild(this.view360Icon), this.view360Icon = null)
			}
		}, {
			key: "play",
			value: function() {
				var t = this;
				this.bottomCircle && this.hide360ViewCircleIcon(), this.remove360ViewIcon(), this.loopTimeoutId = window.setInterval(function() {
					t.loop(t.reversed)
				}, 36 * this.speed / this.amount)
			}
		}, {
			key: "stop",
			value: function() {
				this.bottomCircle && this.show360ViewCircleIcon(), window.clearTimeout(this.loopTimeoutId)
			}
		}, {
			key: "getSrc",
			value: function(t, e, i, n, r, s, a, c) {
				var l = "" + i + n;
				if (t) {
					var u = e.offsetWidth;
					if (this.fullScreenView) {
						var h = e.offsetHeight / e.offsetWidth;
						this.ratio > h && (u = e.offsetHeight / this.ratio)
					}
					//l = l
						
					l = '/upload'+l
				}
				return l
			}
		}, {
			key: "preloadImages",
			value: function(t, e, i, n) {
				var o = this;
				[].concat(function(t) {
						if (Array.isArray(t)) {
							for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
							return i
						}
						return Array.from(t)
					}(new Array(t)))
					.map(function(t, r) {
						var s = new Image,
							a = e.replace("{index}", r + 1);
						i && !o.fullScreenView ? (s.setAttribute("data-src", a), s.className = s.className.length ? s.className + " " + n : n, 0 === r && (o.lazyloadInitImage = s, s.style.position = "absolute", s.style.top = "0", s.style.left = "0", o.container.appendChild(s))) : s.src = a, s.onload = o.onImageLoad.bind(o), s.onerror = o.onImageLoad.bind(o), o.images.push(s)
					})
			}
		}, {
			key: "init",
			value: function(t) {
				var e = (0, o.get360ViewProps)(t),
					i = e.folder,
					n = e.filename,
					r = e.amount,
					s = e.draggable,
					a = void 0 === s || s,
					c = e.swipeable,
					l = void 0 === c || c,
					u = e.keys,
					h = e.bottomCircle,
					f = e.bottomCircleOffset,
					d = e.boxShadow,
					v = e.autoplay,
					p = e.speed,
					y = e.autoplayReverse,
					g = e.fullScreen,
					m = e.magnifier,
					w = e.ratio,
					x = e.responsive,
					b = e.ciToken,
					I = e.ciSize,
					S = e.ciOperation,
					k = e.ciFilters,
					C = e.lazyload,
					M = e.lazySelector,
					O = e.spinReverse;
				this.addLoader(), this.folder = i, this.filename = n, this.amount = r, this.bottomCircle = h, this.bottomCircleOffset = f, this.boxShadow = d, this.autoplay = v && !this.isMobile, this.speed = p, this.reversed = y, this.fullScreen = g, this.magnifier = !(this.isMobile || !m) && m, this.lazyload = C, this.ratio = w, this.spinReverse = O, t.style.position = "relative", t.style.width = "100%", t.style.cursor = "wait", t.setAttribute("draggable", "false"), this.canvas = document.createElement("canvas"), this.canvas.style.width = "100%", this.canvas.style.fontSize = "0", w && (t.style.minHeight = t.offsetWidth * w + "px", this.canvas.height = t.style.minHeight), this.container.appendChild(this.canvas);
				var E = this.getSrc(x, t, i, n, I, b, S, k);
				this.preloadImages(r, E, C, M), a && (t.addEventListener("mousedown", this.mousedown.bind(this)), t.addEventListener("mouseup", this.mouseup.bind(this)), t.addEventListener("mousemove", this.mousemove.bind(this))), l && (t.addEventListener("touchstart", this.touchstart.bind(this), {
					passive: !0
				}), t.addEventListener("touchend", this.touchend.bind(this), {
					passive: !0
				}), t.addEventListener("touchmove", this.touchmove.bind(this))), u ? (document.addEventListener("keydown", this.keydown.bind(this)), document.addEventListener("keyup", this.keyup.bind(this))) : document.addEventListener("keydown", this.keydownGeneral.bind(this))
			}
		}]), t
	}();
	e.default = r
}, function(t, e, i) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var n, o = function(t, e) {
			return t.getAttribute(e)
		},
		r = (n = !0, function(t, e, i, o) {
			var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
				s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .5,
				a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : .5,
				c = i / o,
				l = t / e,
				u = t * r,
				h = e * r;
			return (n ? c > l : c < l) ? h = u / c : u = h * c, {
				width: u,
				height: h,
				offsetX: (t - u) * s,
				offsetY: (e - h) * a
			}
		});
	e.get360ViewProps = function(t) {
		return {
			folder: o(t, "folder") || o(t, "data-folder") || "/",
			filename: o(t, "filename") || o(t, "data-filename") || "image-{index}.jpg",
			amount: parseInt(o(t, "amount") || o(t, "data-amount") || 36, 10),
			speed: parseInt(o(t, "speed") || o(t, "data-speed") || 150, 10),
			keys: null !== o(t, "keys") || null !== o(t, "data-keys"),
			boxShadow: o(t, "box-shadow") || o(t, "data-box-shadow"),
			autoplay: null !== o(t, "autoplay") || null !== o(t, "data-autoplay"),
			autoplayReverse: null !== o(t, "autoplay-reverse") || null !== o(t, "data-autoplay-reverse"),
			bottomCircle: null !== o(t, "bottom-circle") || null !== o(t, "data-bottom-circle"),
			fullScreen: null !== o(t, "full-screen") || null !== o(t, "data-full-screen"),
			magnifier: (null !== o(t, "magnifier") || null !== o(t, "data-magnifier")) && parseInt(o(t, "magnifier") || o(t, "data-magnifier"), 10),
			bottomCircleOffset: parseInt(o(t, "bottom-circle-offset") || o(t, "data-bottom-circle-offset") || 5, 10),
			ratio: parseFloat(o(t, "ratio") || o(t, "data-ratio") || 0) || !1,
			responsive: null !== o(t, "responsive") || null !== o(t, "data-responsive"),
			ciToken: o(t, "responsive") || o(t, "data-responsive") || "demo",
			ciSize: o(t, "size") || o(t, "data-size"),
			ciOperation: o(t, "operation") || o(t, "data-operation") || "width",
			ciFilters: o(t, "filters") || o(t, "data-filters") || "q35",
			lazyload: null !== o(t, "lazyload") || null !== o(t, "data-lazyload"),
			lazySelector: o(t, "lazyload-selector") || o(t, "data-lazyload-selector") || "lazyload",
			spinReverse: null !== o(t, "spin-reverse") || null !== o(t, "data-spin-reverse")
		}
	}, e.set360ViewIconStyles = function(t) {
		t.style.position = "absolute", t.style.top = "0", t.style.bottom = "0", t.style.left = "0", t.style.right = "0", t.style.width = "100px", t.style.height = "100px", t.style.margin = "auto", t.style.backgroundColor = "rgba(255,255,255,0.8)", t.style.borderRadius = "50%", t.style.boxShadow = "rgb(255, 255, 255, 0.5) 0px 0px 4px", t.style.transition = "0.5s all", t.style.color = "rgb(80,80,80)", t.style.textAlign = "center", t.style.lineHeight = "100px", t.style.zIndex = "2"
	}, e.set360ViewCircleIconStyles = function(t, e) {
		t.src = "https://scaleflex.ultrafast.io/https://scaleflex.api.airstore.io/v1/get/_/2236d56f-914a-5a8b-a3ae-f7bde1c50000/360.svg", t.style.position = "absolute", t.style.top = "auto", t.style.bottom = e + "%", t.style.left = "0", t.style.right = "0", t.style.width = "80%", t.style.height = "auto", t.style.margin = "auto", t.style.transition = "0.5s all", t.style.zIndex = "2"
	}, e.setLoaderStyles = function(t) {
		t.className = "cloudimage-360-loader", t.style.position = "absolute", t.style.zIndex = "100", t.style.top = "0", t.style.left = "0", t.style.right = "0", t.style.width = "0%", t.style.height = "8px", t.style.background = "rgb(165,175,184)"
	}, e.setBoxShadowStyles = function(t, e) {
		t.className = "cloudimage-360-box-shadow", t.style.position = "absolute", t.style.zIndex = "99", t.style.top = "0", t.style.left = "0", t.style.right = "0", t.style.bottom = "0", t.style.boxShadow = e
	}, e.setView360Icon = function(t) {
		t.style.background = "rgba(255,255,255,0.8) url('https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/filerobot/js-cloudimage-360-view/360_view.svg') 50% 50% / contain no-repeat"
	}, e.magnify = function(t, e, i, n, o) {
		var r = void 0,
			s = void 0,
			a = void 0;

		function c(e) {
			var i, c = void 0,
				l = void 0;
			e.preventDefault(), i = function(e) {
				var i = void 0,
					n = 0,
					o = 0;
				return e = e || window.event, i = t.getBoundingClientRect(), n = e.pageX - i.left, o = e.pageY - i.top, n -= window.pageXOffset, o -= window.pageYOffset, {
					x: n,
					y: o
				}
			}(e), c = i.x, l = i.y, c > t.offsetWidth - r / o && (c = t.offsetWidth - r / o), c < r / o && (c = r / o), l > t.offsetHeight - s / o && (l = t.offsetHeight - s / o), l < s / o && (l = s / o), n.style.left = c - r + "px", n.style.top = l - s + "px", n.style.backgroundPosition = "-" + (c * o - r + a) + "px -" + (l * o - s + a) + "px"
		}
		n.setAttribute("class", "img-magnifier-glass"), t.prepend(n), n.style.backgroundColor = "#fff", n.style.backgroundImage = "url('" + i + "')", n.style.backgroundRepeat = "no-repeat", n.style.backgroundSize = t.offsetWidth * o + "px " + t.offsetHeight * o + "px", n.style.position = "absolute", n.style.border = "3px solid #000", n.style.borderRadius = "50%", n.style.cursor = "wait", n.style.lineHeight = "200px", n.style.textAlign = "center", n.style.zIndex = "1000", n.style.width = "250px", n.style.height = "250px", n.style.top = "-75px", n.style.right = "-85px", a = 3, r = n.offsetWidth / 2, s = n.offsetHeight / 2, n.addEventListener("mousemove", c), t.addEventListener("mousemove", c), n.addEventListener("touchmove", c), t.addEventListener("touchmove", c)
	}, e.setMagnifyIconStyles = function(t, e) {
		t.style.position = "absolute", t.style.top = e ? "35px" : "5px", t.style.right = "5px", t.style.width = "25px", t.style.height = "25px", t.style.zIndex = "101", t.style.cursor = "pointer", t.style.background = "url('https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/filerobot/js-cloudimage-360-view/loupe.svg') 50% 50% / cover no-repeat"
	}, e.setFullScreenModalStyles = function(t) {
		t.style.position = "fixed", t.style.top = "0", t.style.bottom = "0", t.style.left = "0", t.style.right = "0", t.style.width = "100%", t.style.height = "100%", t.style.zIndex = "999", t.style.background = "#fff"
	}, e.setFullScreenIconStyles = function(t) {
		t.style.position = "absolute", t.style.top = "5px", t.style.right = "5px", t.style.width = "25px", t.style.height = "25px", t.style.zIndex = "101", t.style.cursor = "pointer", t.style.background = "url('https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/filerobot/js-cloudimage-360-view/full_screen.svg') 50% 50% / cover no-repeat"
	}, e.setCloseFullScreenViewStyles = function(t) {
		t.style.position = "absolute", t.style.top = "5px", t.style.right = "5px", t.style.width = "25px", t.style.height = "25px", t.style.zIndex = "101", t.style.cursor = "pointer", t.style.background = "url('https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/filerobot/js-cloudimage-360-view/cross.svg') 50% 50% / cover no-repeat"
	}, e.getResponsiveWidthOfContainer = function(t) {
		return (e = t) <= 25 ? "25" : e <= 50 ? "50" : (100 * Math.ceil(e / 100))
			.toString();
		var e
	}, e.getSizeAccordingToPixelRatio = function(t) {
		var e = t.toString()
			.split("x"),
			i = [];
		return [].forEach.call(e, function(t) {
			i.push(t * Math.round(window.devicePixelRatio || 1))
		}), i.join("x")
	}, e.contain = r
}]);