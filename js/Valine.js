! function(e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define
		.amd ? define([], t) : "object" == typeof exports ? exports.Valine = t() : e.Valine = t()
}(this, (function() {
	var t = String.fromCharCode,
		i = Math.round,
		e = String.prototype;
	return function(e) {
		function t(r) {
			if (n[r]) return n[r].exports;
			var i = n[r] = {
				i: r,
				l: !1,
				exports: {}
			};
			return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
		}
		var n = {};
		return t.m = e, t.c = n, t.i = function(e) {
			return e
		}, t.d = function(e, n, a) {
			t.o(e, n) || Object.defineProperty(e, n, {
				configurable: !1,
				enumerable: !0,
				get: a
			})
		}, t.n = function(e) {
			var n = e && e.__esModule ? function() {
				return e.default
			} : function() {
				return e
			};
			return t.d(n, "a", n), n
		}, t.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, t.p = "", t(t.s = 63)
	}([function(i, o, s) {
		function c(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		o.__esModule = !0;
		var p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" :
				typeof e
		};
		i = c(i = s(38));
		var a = s(28),
			k = c(a);
		a = c(a = s(27)), s = c(s = s(42));
		var g, A = document,
			l = navigator,
			u = /[&<>"'`\\]/g,
			r = RegExp(u.source),
			m = /&(?:amp|lt|gt|quot|#39|#x60|#x5c);/g,
			t = RegExp(m.source),
			n = {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#39;",
				"`": "&#x60;",
				"\\": "&#x5c;"
			},
			b = {};
		for (g in n) b[n[g]] = g;
		var y = null;
		Array.prototype.forEach || (Array.prototype.forEach = function(t, a) {
				var e, n;
				if (null == this) throw new TypeError(" this is null or not defined");
				var r = Object(this),
					i = r.length >>> 0;
				if ("function" != typeof t) throw new TypeError(t + " is not a function");
				for (1 < arguments.length && (e = a), n = 0; n < i;) {
					var o;
					n in r && (o = r[n], t.call(e, o, n, r)), n++
				}
			}), window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach), e
			.trim || (e.trim = function() {
				return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
			}), (0, i.default)(k.default.fn, {
				prepend: function(t) {
					return t instanceof HTMLElement || (t = t[0]), this.forEach((function(a) {
						a.insertAdjacentElement("afterBegin", t)
					})), this
				},
				append: function(t) {
					return t instanceof HTMLElement || (t = t[0]), this.forEach((function(a) {
						a.insertAdjacentElement("beforeEnd", t)
					})), this
				},
				remove: function() {
					return this.forEach((function(e) {
						try {
							e.parentNode.removeChild(e)
						} catch (t) {}
					})), this
				},
				find: function(e) {
					return (0, k.default)(e, this)
				},
				show: function() {
					return this.forEach((function(e) {
						e.style.display = "block"
					})), this
				},
				hide: function() {
					return this.forEach((function(e) {
						e.style.display = "none"
					})), this
				},
				on: function(t, n, e) {
					return k.default.fn.off(t, n, e), this.forEach((function(r) {
						t.split(" ").forEach((function(t) {
							r.addEventListener ? r.addEventListener(t, n, e || !1) : r.attachEvent ? r.attachEvent("on" + t, n) :
								r["on" + t] = n
						}))
					})), this
				},
				off: function(t, n, e) {
					return this.forEach((function(r) {
						t.split(" ").forEach((function(t) {
							r.removeEventListener ? r.removeEventListener(t, n, e || !1) : r.detachEvent ? r.detachEvent("on" +
								t, n) : r["on" + t] = null
						}))
					})), this
				},
				html: function(t) {
					return void 0 === t ? this[0].innerHTML : (this.forEach((function(a) {
						a.innerHTML = t
					})), this)
				},
				text: function(t) {
					return void 0 === t ? this[0].innerText : (this.forEach((function(a) {
						a.innerText = t
					})), this)
				},
				empty: function(t) {
					return t = t || 0, this.forEach((function(a) {
						setTimeout((function() {
							a.innerText = ""
						}), t)
					})), this
				},
				val: function(t) {
					return void 0 === t ? this[0].value || "" : (this.forEach((function(a) {
						a.value = t
					})), this)
				},
				attr: function() {
					var t = arguments;
					if ("object" == p(arguments[0])) {
						var n = arguments[0],
							e = this;
						return Object.keys(n).forEach((function(t) {
							e.forEach((function(e) {
								e.setAttribute(t, n[t])
							}))
						})), this
					}
					return "string" == typeof arguments[0] && 2 > arguments.length ? this[0].getAttribute(arguments[0]) || "" :
						(this.forEach((function(e) {
							e.setAttribute(t[0], t[1])
						})), this)
				},
				removeAttr: function(t) {
					return this.forEach((function(a) {
						var e, n = 0,
							r = t && t.match(/[^\x20\t\r\n\f\*\/\\]+/g);
						if (r && 1 === a.nodeType)
							for (; e = r[n++];) a.removeAttribute(e)
					})), this
				},
				hasClass: function(e) {
					return !!this[0] && new RegExp("(\\s|^)" + e + "(\\s|$)").test(this[0].getAttribute("class"))
				},
				addClass: function(t) {
					return this.forEach((function(a) {
						var n = (a = (0, k.default)(a)).attr("class");
						a.hasClass(t) || a.attr("class", n + " " + t)
					})), this
				},
				removeClass: function(t) {
					return this.forEach((function(a) {
						var n = (a = (0, k.default)(a)).attr("class");
						a.hasClass(t) && a.attr("class", n.replace(new RegExp("(\\s|^)" + t + "(\\s|$)"), ""))
					})), this
				}
			}), (0, i.default)(k.default, {
				extend: i.default,
				noop: function() {},
				navi: l,
				ua: l.userAgent,
				lang: l.language || l.languages[0],
				detect: a.default,
				store: s.default,
				escape: function(e) {
					return e && r.test(e) ? e.replace(u, (function(e) {
						return n[e]
					})) : e
				},
				unescape: function(e) {
					return e && t.test(e) ? e.replace(m, (function(e) {
						return b[e]
					})) : e
				},
				dynamicLoadSource: function(t, a) {
					if ((0, k.default)('script[src="' + t + '"]').length) a && a();
					else {
						var e = A.createElement("script");
						e.onload = e.onreadystatechange = function() {
								this.onload = this.onreadystatechange = null, a && a(), (0, k.default)(e).remove()
							}, e.async = !0, e.setAttribute("referrerPolicy", "no-referrer"), (0, k.default)("head")[0].appendChild(e),
							e.src = t
					}
				},
				sdkLoader: function(t, a, e) {
					a in window && window[a] ? (y && clearTimeout(y), e && e()) : k.default.dynamicLoadSource(t, (function() {
						y = setTimeout(k.default.sdkLoader(t, a, e), 100)
					}))
				},
				deleteInWin: function(t, a) {
					var e = function() {
						if (t in window) try {
							delete window[t]
						} catch (e) {
							window[t] = null
						}
					};
					0 === a ? e() : setTimeout(e, a || 500)
				},
				ajax: function(t) {
					(t = t || {}).type = (t.type || "GET").toUpperCase(), t.dataType = t.dataType || "json", t.async = t.async ||
						!0, t.timeout = t.timeout || 8e3;
					var n = "[object FormData]" == {}.toString.call(t.data) ? t.data : function(t) {
							var a, n = [];
							for (a in t) n.push(encodeURIComponent(a) + "=" + encodeURIComponent(t[a]));
							return n.push("t=" + Date.now()), n.join("&")
						}(t.data),
						r = null,
						i = "XMLHttpRequest" in window ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
					i.onreadystatechange = function(a) {
						4 == i.readyState && (clearTimeout(r), 200 <= (a = i.status) && 300 > a ? t.success && t.success(JSON.parse(
							i.responseText)) : t.fail && t.fail(a))
					}, "GET" == t.type ? (i.open("GET", t.url + "?" + n, t.async), i.send(null)) : "POST" == t.type && (i.open(
						"POST", t.url, t.async), null == t.contentType || null == t.contentType ? i.send(n) : (i.setRequestHeader(
						"Content-Type", t.contentType), i.send(JSON.stringify(t.data)))), r = setTimeout((function() {
						clearTimeout(r), i.abort()
					}), t.timeout)
				}
			}), o.default = k.default
	}, function(t, n, i) {
		var o = TypeError,
			d = Object.getOwnPropertyDescriptor;
		if (d) try {
			d({}, "")
		} catch (e) {
			d = null
		}
		var s = function() {
			throw new o
		};
		n = d ? function() {
			try {
				return arguments.callee, s
			} catch (e) {
				try {
					return d(arguments, "callee").get
				} catch (e) {
					return s
				}
			}
		}() : s;
		var p = i(47)(),
			f = Object.getPrototypeOf || function(e) {
				return e.__proto__
			},
			l = "undefined" == typeof Uint8Array ? void 0 : f(Uint8Array),
			u = {
				"%Array%": Array,
				"%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer,
				"%ArrayBufferPrototype%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer.prototype,
				"%ArrayIteratorPrototype%": p ? f([][Symbol.iterator]()) : void 0,
				"%ArrayPrototype%": Array.prototype,
				"%ArrayProto_entries%": Array.prototype.entries,
				"%ArrayProto_forEach%": Array.prototype.forEach,
				"%ArrayProto_keys%": Array.prototype.keys,
				"%ArrayProto_values%": Array.prototype.values,
				"%AsyncFromSyncIteratorPrototype%": void 0,
				"%AsyncFunction%": void 0,
				"%AsyncFunctionPrototype%": void 0,
				"%AsyncGenerator%": void 0,
				"%AsyncGeneratorFunction%": void 0,
				"%AsyncGeneratorPrototype%": void 0,
				"%AsyncIteratorPrototype%": void 0,
				"%Atomics%": "undefined" == typeof Atomics ? void 0 : Atomics,
				"%Boolean%": Boolean,
				"%BooleanPrototype%": Boolean.prototype,
				"%DataView%": "undefined" == typeof DataView ? void 0 : DataView,
				"%DataViewPrototype%": "undefined" == typeof DataView ? void 0 : DataView.prototype,
				"%Date%": Date,
				"%DatePrototype%": Date.prototype,
				"%decodeURI%": decodeURI,
				"%decodeURIComponent%": decodeURIComponent,
				"%encodeURI%": encodeURI,
				"%encodeURIComponent%": encodeURIComponent,
				"%Error%": Error,
				"%ErrorPrototype%": Error.prototype,
				"%eval%": eval,
				"%EvalError%": EvalError,
				"%EvalErrorPrototype%": EvalError.prototype,
				"%Float32Array%": "undefined" == typeof Float32Array ? void 0 : Float32Array,
				"%Float32ArrayPrototype%": "undefined" == typeof Float32Array ? void 0 : Float32Array.prototype,
				"%Float64Array%": "undefined" == typeof Float64Array ? void 0 : Float64Array,
				"%Float64ArrayPrototype%": "undefined" == typeof Float64Array ? void 0 : Float64Array.prototype,
				"%Function%": Function,
				"%FunctionPrototype%": Function.prototype,
				"%Generator%": void 0,
				"%GeneratorFunction%": void 0,
				"%GeneratorPrototype%": void 0,
				"%Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array,
				"%Int8ArrayPrototype%": "undefined" == typeof Int8Array ? void 0 : Int8Array.prototype,
				"%Int16Array%": "undefined" == typeof Int16Array ? void 0 : Int16Array,
				"%Int16ArrayPrototype%": "undefined" == typeof Int16Array ? void 0 : Int8Array.prototype,
				"%Int32Array%": "undefined" == typeof Int32Array ? void 0 : Int32Array,
				"%Int32ArrayPrototype%": "undefined" == typeof Int32Array ? void 0 : Int32Array.prototype,
				"%isFinite%": isFinite,
				"%isNaN%": isNaN,
				"%IteratorPrototype%": p ? f(f([][Symbol.iterator]())) : void 0,
				"%JSON%": "object" == typeof JSON ? JSON : void 0,
				"%JSONParse%": "object" == typeof JSON ? JSON.parse : void 0,
				"%Map%": "undefined" == typeof Map ? void 0 : Map,
				"%MapIteratorPrototype%": "undefined" != typeof Map && p ? f((new Map)[Symbol.iterator]()) : void 0,
				"%MapPrototype%": "undefined" == typeof Map ? void 0 : Map.prototype,
				"%Math%": Math,
				"%Number%": Number,
				"%NumberPrototype%": Number.prototype,
				"%Object%": Object,
				"%ObjectPrototype%": Object.prototype,
				"%ObjProto_toString%": Object.prototype.toString,
				"%ObjProto_valueOf%": Object.prototype.valueOf,
				"%parseFloat%": parseFloat,
				"%parseInt%": parseInt,
				"%Promise%": "undefined" == typeof Promise ? void 0 : Promise,
				"%PromisePrototype%": "undefined" == typeof Promise ? void 0 : Promise.prototype,
				"%PromiseProto_then%": "undefined" == typeof Promise ? void 0 : Promise.prototype.then,
				"%Promise_all%": "undefined" == typeof Promise ? void 0 : Promise.all,
				"%Promise_reject%": "undefined" == typeof Promise ? void 0 : Promise.reject,
				"%Promise_resolve%": "undefined" == typeof Promise ? void 0 : Promise.resolve,
				"%Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy,
				"%RangeError%": RangeError,
				"%RangeErrorPrototype%": RangeError.prototype,
				"%ReferenceError%": ReferenceError,
				"%ReferenceErrorPrototype%": ReferenceError.prototype,
				"%Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect,
				"%RegExp%": RegExp,
				"%RegExpPrototype%": RegExp.prototype,
				"%Set%": "undefined" == typeof Set ? void 0 : Set,
				"%SetIteratorPrototype%": "undefined" != typeof Set && p ? f((new Set)[Symbol.iterator]()) : void 0,
				"%SetPrototype%": "undefined" == typeof Set ? void 0 : Set.prototype,
				"%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer,
				"%SharedArrayBufferPrototype%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer.prototype,
				"%String%": String,
				"%StringIteratorPrototype%": p ? f("" [Symbol.iterator]()) : void 0,
				"%StringPrototype%": e,
				"%Symbol%": p ? Symbol : void 0,
				"%SymbolPrototype%": p ? Symbol.prototype : void 0,
				"%SyntaxError%": SyntaxError,
				"%SyntaxErrorPrototype%": SyntaxError.prototype,
				"%ThrowTypeError%": n,
				"%TypedArray%": l,
				"%TypedArrayPrototype%": l ? l.prototype : void 0,
				"%TypeError%": o,
				"%TypeErrorPrototype%": o.prototype,
				"%Uint8Array%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array,
				"%Uint8ArrayPrototype%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array.prototype,
				"%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray,
				"%Uint8ClampedArrayPrototype%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray.prototype,
				"%Uint16Array%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array,
				"%Uint16ArrayPrototype%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array.prototype,
				"%Uint32Array%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array,
				"%Uint32ArrayPrototype%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array.prototype,
				"%URIError%": URIError,
				"%URIErrorPrototype%": URIError.prototype,
				"%WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap,
				"%WeakMapPrototype%": "undefined" == typeof WeakMap ? void 0 : WeakMap.prototype,
				"%WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet,
				"%WeakSetPrototype%": "undefined" == typeof WeakSet ? void 0 : WeakSet.prototype
			},
			r = i(4).call(Function.call, e.replace),
			h = function(e) {
				var t = [];
				return r(e,
					/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, (
						function(n, a, i, e) {
							t[t.length] = i ? r(e, /\\(\\)?/g, "$1") : a || n
						})), t
			};
		t.exports = function(t, a) {
			if ("string" != typeof t || 0 === t.length) throw new TypeError("intrinsic name must be a non-empty string");
			if (1 < arguments.length && "boolean" != typeof a) throw new TypeError(
				'"allowMissing" argument must be a boolean');
			var n = h(t),
				r = "%" + (0 < n.length ? n[0] : "") + "%";
			if (!(r in u)) throw new SyntaxError("intrinsic " + r + " does not exist!");
			if (void 0 === u[r] && !a) throw new o("intrinsic " + r +
				" exists, but is not available. Please file an issue!");
			r = u[r];
			for (var i = 1; i < n.length; i += 1)
				if (null != r)
					if (d && i + 1 >= n.length) {
						var s = d(r, n[i]);
						if (!(a || n[i] in r)) throw new o("base intrinsic for " + t +
							" exists, but the property is not available.");
						r = s ? s.get || s.value : r[n[i]]
					} else r = r[n[i]];
			return r
		}
	}, function(e, t) {
		t.__esModule = !0, t.DEFAULT_EMOJI_CDN = "https://cdn.jsdelivr.net/gh/Sanarous/files/emojis/", t.DB_NAME =
			"Comment", t.defaultConfig = {
				lang: "zh-CN",
				langMode: null,
				appId: "",
				appKey: "",
				clazzName: "Comment",
				master: [],
				friends: [],
				tagMeta: ["博主", "小伙伴", "访客"],
				metaPlaceholder: {
					nick: "昵称/QQ号(必填)",
					mail: "邮箱(必填)",
					link: "网址(https://)"
				},
				meta: ["nick", "mail", "link"],
				path: location.pathname,
				placeholder: "Just Go Go",
				pageSize: 10,
				recordIP: !0,
				serverURLs: "",
				visitor: !1,
				emojiCDN: "",
				emojiMaps: void 0,
				enableQQ: !1,
				requiredFields: []
			}, t.defaultMeta = ["nick", "mail", "link"], t.QQCacheKey = "_v_Cache_Q", t.MetaCacheKey = "_v_Cache_Meta", t.RandomStr =
			(Date.now() + i(1e3 * Math.random())).toString(32), t.VERSION = "1.4.14"
	}, function(e, t, n) {
		var r = n(7),
			i = n(29);
		for (var a in (t = e.exports = function(e, t) {
				return new i(t).process(e)
			}).FilterCSS = i, r) t[a] = r[a];
		"undefined" != typeof window && (window.filterCSS = e.exports)
	}, function(e, t, a) {
		t = a(32), e.exports = Function.prototype.bind || t
	}, function(t) {
		t.exports = {
			indexOf: function(e, t) {
				var n;
				if (Array.prototype.indexOf) return e.indexOf(t);
				var r = 0;
				for (n = e.length; r < n; r++)
					if (e[r] === t) return r;
				return -1
			},
			forEach: function(e, t, n) {
				var a;
				if (Array.prototype.forEach) return e.forEach(t, n);
				var r = 0;
				for (a = e.length; r < a; r++) t.call(n, e[r], r, e)
			},
			trim: function(t) {
				return e.trim ? t.trim() : t.replace(/(^\s*)|(\s*$)/g, "")
			},
			spaceIndex: function(e) {
				return (e = /\s|\n|\t/.exec(e)) ? e.index : -1
			}
		}
	}, function(e, t, a) {
		t.__esModule = !0;
		var n = {
			cdn: a(2).DEFAULT_EMOJI_CDN,
			maps: a(53),
			parse: function(e) {
				return (e + "").replace(new RegExp(":(" + Object.keys(n.maps).join("|") + "):", "ig"), (function(e, t) {
					return n.maps[t] ? n.build(t) : e
				}))
			},
			build: function(e) {
				var t = /^(https?:)?\/\//i,
					a = n.maps[e];
				return a = t.test(a) ? a : n.cdn + a, t.test(a) ? '<img alt="' + e +
					'" referrerPolicy="no-referrer" class="vemoji" src="' + a + '" />' : ""
			}
		};
		t.default = n
	}, function(e, t) {
		function a() {
			var e = {
				"align-content": !1,
				"align-items": !1,
				"align-self": !1,
				"alignment-adjust": !1,
				"alignment-baseline": !1,
				all: !1,
				"anchor-point": !1,
				animation: !1,
				"animation-delay": !1,
				"animation-direction": !1,
				"animation-duration": !1,
				"animation-fill-mode": !1,
				"animation-iteration-count": !1,
				"animation-name": !1,
				"animation-play-state": !1,
				"animation-timing-function": !1,
				azimuth: !1,
				"backface-visibility": !1,
				background: !0,
				"background-attachment": !0,
				"background-clip": !0,
				"background-color": !0,
				"background-image": !0,
				"background-origin": !0,
				"background-position": !0,
				"background-repeat": !0,
				"background-size": !0,
				"baseline-shift": !1,
				binding: !1,
				bleed: !1,
				"bookmark-label": !1,
				"bookmark-level": !1,
				"bookmark-state": !1,
				border: !0,
				"border-bottom": !0,
				"border-bottom-color": !0,
				"border-bottom-left-radius": !0,
				"border-bottom-right-radius": !0,
				"border-bottom-style": !0,
				"border-bottom-width": !0,
				"border-collapse": !0,
				"border-color": !0,
				"border-image": !0,
				"border-image-outset": !0,
				"border-image-repeat": !0,
				"border-image-slice": !0,
				"border-image-source": !0,
				"border-image-width": !0,
				"border-left": !0,
				"border-left-color": !0,
				"border-left-style": !0,
				"border-left-width": !0,
				"border-radius": !0,
				"border-right": !0,
				"border-right-color": !0,
				"border-right-style": !0,
				"border-right-width": !0,
				"border-spacing": !0,
				"border-style": !0,
				"border-top": !0,
				"border-top-color": !0,
				"border-top-left-radius": !0,
				"border-top-right-radius": !0,
				"border-top-style": !0,
				"border-top-width": !0,
				"border-width": !0,
				bottom: !1,
				"box-decoration-break": !0,
				"box-shadow": !0,
				"box-sizing": !0,
				"box-snap": !0,
				"box-suppress": !0,
				"break-after": !0,
				"break-before": !0,
				"break-inside": !0,
				"caption-side": !1,
				chains: !1,
				clear: !0,
				clip: !1,
				"clip-path": !1,
				"clip-rule": !1,
				color: !0,
				"color-interpolation-filters": !0,
				"column-count": !1,
				"column-fill": !1,
				"column-gap": !1,
				"column-rule": !1,
				"column-rule-color": !1,
				"column-rule-style": !1,
				"column-rule-width": !1,
				"column-span": !1,
				"column-width": !1,
				columns: !1,
				contain: !1,
				content: !1,
				"counter-increment": !1,
				"counter-reset": !1,
				"counter-set": !1,
				crop: !1,
				cue: !1,
				"cue-after": !1,
				"cue-before": !1,
				cursor: !1,
				direction: !1,
				display: !0,
				"display-inside": !0,
				"display-list": !0,
				"display-outside": !0,
				"dominant-baseline": !1,
				elevation: !1,
				"empty-cells": !1,
				filter: !1,
				flex: !1,
				"flex-basis": !1,
				"flex-direction": !1,
				"flex-flow": !1,
				"flex-grow": !1,
				"flex-shrink": !1,
				"flex-wrap": !1,
				float: !1,
				"float-offset": !1,
				"flood-color": !1,
				"flood-opacity": !1,
				"flow-from": !1,
				"flow-into": !1,
				font: !0,
				"font-family": !0,
				"font-feature-settings": !0,
				"font-kerning": !0,
				"font-language-override": !0,
				"font-size": !0,
				"font-size-adjust": !0,
				"font-stretch": !0,
				"font-style": !0,
				"font-synthesis": !0,
				"font-variant": !0,
				"font-variant-alternates": !0,
				"font-variant-caps": !0,
				"font-variant-east-asian": !0,
				"font-variant-ligatures": !0,
				"font-variant-numeric": !0,
				"font-variant-position": !0,
				"font-weight": !0,
				grid: !1,
				"grid-area": !1,
				"grid-auto-columns": !1,
				"grid-auto-flow": !1,
				"grid-auto-rows": !1,
				"grid-column": !1,
				"grid-column-end": !1,
				"grid-column-start": !1,
				"grid-row": !1,
				"grid-row-end": !1,
				"grid-row-start": !1,
				"grid-template": !1,
				"grid-template-areas": !1,
				"grid-template-columns": !1,
				"grid-template-rows": !1,
				"hanging-punctuation": !1,
				height: !0,
				hyphens: !1,
				icon: !1,
				"image-orientation": !1,
				"image-resolution": !1,
				"ime-mode": !1,
				"initial-letters": !1,
				"inline-box-align": !1,
				"justify-content": !1,
				"justify-items": !1,
				"justify-self": !1,
				left: !1,
				"letter-spacing": !0,
				"lighting-color": !0,
				"line-box-contain": !1,
				"line-break": !1,
				"line-grid": !1,
				"line-height": !1,
				"line-snap": !1,
				"line-stacking": !1,
				"line-stacking-ruby": !1,
				"line-stacking-shift": !1,
				"line-stacking-strategy": !1,
				"list-style": !0,
				"list-style-image": !0,
				"list-style-position": !0,
				"list-style-type": !0,
				margin: !0,
				"margin-bottom": !0,
				"margin-left": !0,
				"margin-right": !0,
				"margin-top": !0,
				"marker-offset": !1,
				"marker-side": !1,
				marks: !1,
				mask: !1,
				"mask-box": !1,
				"mask-box-outset": !1,
				"mask-box-repeat": !1,
				"mask-box-slice": !1,
				"mask-box-source": !1,
				"mask-box-width": !1,
				"mask-clip": !1,
				"mask-image": !1,
				"mask-origin": !1,
				"mask-position": !1,
				"mask-repeat": !1,
				"mask-size": !1,
				"mask-source-type": !1,
				"mask-type": !1,
				"max-height": !0,
				"max-lines": !1,
				"max-width": !0,
				"min-height": !0,
				"min-width": !0,
				"move-to": !1,
				"nav-down": !1,
				"nav-index": !1,
				"nav-left": !1,
				"nav-right": !1,
				"nav-up": !1,
				"object-fit": !1,
				"object-position": !1,
				opacity: !1,
				order: !1,
				orphans: !1,
				outline: !1,
				"outline-color": !1,
				"outline-offset": !1,
				"outline-style": !1,
				"outline-width": !1,
				overflow: !1,
				"overflow-wrap": !1,
				"overflow-x": !1,
				"overflow-y": !1,
				padding: !0,
				"padding-bottom": !0,
				"padding-left": !0,
				"padding-right": !0,
				"padding-top": !0,
				page: !1,
				"page-break-after": !1,
				"page-break-before": !1,
				"page-break-inside": !1,
				"page-policy": !1,
				pause: !1,
				"pause-after": !1,
				"pause-before": !1,
				perspective: !1,
				"perspective-origin": !1,
				pitch: !1,
				"pitch-range": !1,
				"play-during": !1,
				position: !1,
				"presentation-level": !1,
				quotes: !1,
				"region-fragment": !1,
				resize: !1,
				rest: !1,
				"rest-after": !1,
				"rest-before": !1,
				richness: !1,
				right: !1,
				rotation: !1,
				"rotation-point": !1,
				"ruby-align": !1,
				"ruby-merge": !1,
				"ruby-position": !1,
				"shape-image-threshold": !1,
				"shape-outside": !1,
				"shape-margin": !1,
				size: !1,
				speak: !1,
				"speak-as": !1,
				"speak-header": !1,
				"speak-numeral": !1,
				"speak-punctuation": !1,
				"speech-rate": !1,
				stress: !1,
				"string-set": !1,
				"tab-size": !1,
				"table-layout": !1,
				"text-align": !0,
				"text-align-last": !0,
				"text-combine-upright": !0,
				"text-decoration": !0,
				"text-decoration-color": !0,
				"text-decoration-line": !0,
				"text-decoration-skip": !0,
				"text-decoration-style": !0,
				"text-emphasis": !0,
				"text-emphasis-color": !0,
				"text-emphasis-position": !0,
				"text-emphasis-style": !0,
				"text-height": !0,
				"text-indent": !0,
				"text-justify": !0,
				"text-orientation": !0,
				"text-overflow": !0,
				"text-shadow": !0,
				"text-space-collapse": !0,
				"text-transform": !0,
				"text-underline-position": !0,
				"text-wrap": !0,
				top: !1,
				transform: !1,
				"transform-origin": !1,
				"transform-style": !1,
				transition: !1,
				"transition-delay": !1,
				"transition-duration": !1,
				"transition-property": !1,
				"transition-timing-function": !1,
				"unicode-bidi": !1,
				"vertical-align": !1,
				visibility: !1,
				"voice-balance": !1,
				"voice-duration": !1,
				"voice-family": !1,
				"voice-pitch": !1,
				"voice-range": !1,
				"voice-rate": !1,
				"voice-stress": !1,
				"voice-volume": !1,
				volume: !1,
				"white-space": !1,
				widows: !1,
				width: !0,
				"will-change": !1,
				"word-break": !0,
				"word-spacing": !0,
				"word-wrap": !0,
				"wrap-flow": !1,
				"wrap-through": !1,
				"writing-mode": !1,
				"z-index": !1
			};
			return e
		}
		t.whiteList = a(), t.getDefaultWhiteList = a, t.onAttr = function() {}, t.onIgnoreAttr = function() {}, t.safeAttrValue =
			function(e, t) {
				return /javascript\s*:/gim.test(t) ? "" : t
			}
	}, function(t) {
		t.exports = {
			indexOf: function(e, t) {
				var n;
				if (Array.prototype.indexOf) return e.indexOf(t);
				var r = 0;
				for (n = e.length; r < n; r++)
					if (e[r] === t) return r;
				return -1
			},
			forEach: function(e, t, n) {
				var a;
				if (Array.prototype.forEach) return e.forEach(t, n);
				var r = 0;
				for (a = e.length; r < a; r++) t.call(n, e[r], r, e)
			},
			trim: function(t) {
				return e.trim ? t.trim() : t.replace(/(^\s*)|(\s*$)/g, "")
			},
			trimRight: function(t) {
				return e.trimRight ? t.trimRight() : t.replace(/(\s*$)/g, "")
			}
		}
	}, function(e, t, n) {
		var i = n(40),
			o = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
			a = Object.prototype.toString,
			s = Array.prototype.concat,
			g = Object.defineProperty,
			l = g && function() {
				var e = {};
				try {
					for (var t in g(e, "x", {
							enumerable: !1,
							value: e
						}), e) return !1;
					return e.x === e
				} catch (e) {
					return !1
				}
			}();
		(t = function(e, c) {
			var u = 2 < arguments.length ? arguments[2] : {},
				t = i(c);
			o && (t = s.call(t, Object.getOwnPropertySymbols(c)));
			for (var h = 0; h < t.length; h += 1) {
				var v = e,
					d = t[h],
					f = c[t[h]],
					m = u[t[h]];
				(!(d in v) || "function" == typeof m && "[object Function]" === a.call(m) && m()) && (l ? g(v, d, {
					configurable: !0,
					enumerable: !1,
					value: f,
					writable: !0
				}) : v[d] = f)
			}
		}).supportsDescriptors = !!l, e.exports = t
	}, function(e) {
		var t = Object.prototype.toString;
		e.exports = function(e) {
			var a = t.call(e),
				n = "[object Arguments]" === a;
			return n || (n = "[object Array]" !== a && null !== e && "object" == typeof e && "number" == typeof e.length &&
				0 <= e.length && "[object Function]" === t.call(e.callee)), n
		}
	}, function(e, t, n) {
		var r = n(45),
			i = n(44),
			a = n(46)("String.prototype.replace");
		e.exports = function() {
			var e = i(r(this));
			return a(a(e,
					/^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/,
					""),
				/[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/,
				"")
		}
	}, function(e, t, n) {
		var r = n(4),
			i = (t = n(1)("%Function%")).apply,
			a = t.call;
		e.exports = function() {
			return r.apply(a, arguments)
		}, e.exports.apply = function() {
			return r.apply(i, arguments)
		}
	}, function(t, a, n) {
		var r = n(11);
		t.exports = function() {
			return e.trim ? e.trim : r
		}
	}, function(e, t) {
		t = function() {
			return this
		}();
		try {
			t = t || Function("return this")() || (0, eval)("this")
		} catch (e) {
			"object" == typeof window && (t = window)
		}
		e.exports = t
	}, function(i, o, s) {
		function c() {
			return {
				a: ["target", "href", "title"],
				abbr: ["title"],
				address: [],
				area: ["shape", "coords", "href", "alt"],
				article: [],
				aside: [],
				audio: ["autoplay", "controls", "loop", "preload", "src"],
				b: [],
				bdi: ["dir"],
				bdo: ["dir"],
				big: [],
				blockquote: ["cite"],
				br: [],
				caption: [],
				center: [],
				cite: [],
				code: [],
				col: ["align", "valign", "span", "width"],
				colgroup: ["align", "valign", "span", "width"],
				dd: [],
				del: ["datetime"],
				details: ["open"],
				div: [],
				dl: [],
				dt: [],
				em: [],
				font: ["color", "size", "face"],
				footer: [],
				h1: [],
				h2: [],
				h3: [],
				h4: [],
				h5: [],
				h6: [],
				header: [],
				hr: [],
				i: [],
				img: ["src", "alt", "title", "width", "height"],
				ins: ["datetime"],
				li: [],
				mark: [],
				nav: [],
				ol: [],
				p: [],
				pre: [],
				s: [],
				section: [],
				small: [],
				span: [],
				sub: [],
				sup: [],
				strong: [],
				table: ["width", "border", "align", "valign"],
				tbody: ["align", "valign"],
				td: ["width", "rowspan", "colspan", "align", "valign"],
				tfoot: ["align", "valign"],
				th: ["width", "rowspan", "colspan", "align", "valign"],
				thead: ["align", "valign"],
				tr: ["rowspan", "align", "valign"],
				tt: [],
				u: [],
				ul: [],
				video: ["autoplay", "controls", "loop", "preload", "src", "height", "width"]
			}
		}

		function f(e) {
			return e.replace(y, "&lt;").replace(v, "&gt;")
		}

		function a(e) {
			return e.replace(w, "&quot;")
		}

		function h(e) {
			return e.replace(p, '"')
		}

		function g(n) {
			return n.replace(e, (function(n, a) {
				return "x" === a[0] || "X" === a[0] ? t(parseInt(a.substr(1), 16)) : t(parseInt(a, 10))
			}))
		}

		function l(e) {
			return e.replace(k, ":").replace(A, " ")
		}

		function u(t) {
			for (var a = "", r = 0, i = t.length; r < i; r++) a += 32 > t.charCodeAt(r) ? " " : t.charAt(r);
			return n.trim(a)
		}

		function r(e) {
			return u(e = l(e = g(e = h(e))))
		}

		function m(t) {
			return f(t = a(t))
		}
		i = s(3).FilterCSS;
		var b = s(3).getDefaultWhiteList,
			n = s(5),
			x = new i,
			y = /</g,
			v = />/g,
			w = /"/g,
			p = /&quot;/g,
			e = /&#([a-zA-Z0-9]*);?/gim,
			k = /&colon;?/gim,
			A = /&newline;?/gim,
			O = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi,
			_ = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
			S = /u\s*r\s*l\s*\(.*/gi;
		o.whiteList = {
				a: ["target", "href", "title"],
				abbr: ["title"],
				address: [],
				area: ["shape", "coords", "href", "alt"],
				article: [],
				aside: [],
				audio: ["autoplay", "controls", "loop", "preload", "src"],
				b: [],
				bdi: ["dir"],
				bdo: ["dir"],
				big: [],
				blockquote: ["cite"],
				br: [],
				caption: [],
				center: [],
				cite: [],
				code: [],
				col: ["align", "valign", "span", "width"],
				colgroup: ["align", "valign", "span", "width"],
				dd: [],
				del: ["datetime"],
				details: ["open"],
				div: [],
				dl: [],
				dt: [],
				em: [],
				font: ["color", "size", "face"],
				footer: [],
				h1: [],
				h2: [],
				h3: [],
				h4: [],
				h5: [],
				h6: [],
				header: [],
				hr: [],
				i: [],
				img: ["src", "alt", "title", "width", "height"],
				ins: ["datetime"],
				li: [],
				mark: [],
				nav: [],
				ol: [],
				p: [],
				pre: [],
				s: [],
				section: [],
				small: [],
				span: [],
				sub: [],
				sup: [],
				strong: [],
				table: ["width", "border", "align", "valign"],
				tbody: ["align", "valign"],
				td: ["width", "rowspan", "colspan", "align", "valign"],
				tfoot: ["align", "valign"],
				th: ["width", "rowspan", "colspan", "align", "valign"],
				thead: ["align", "valign"],
				tr: ["rowspan", "align", "valign"],
				tt: [],
				u: [],
				ul: [],
				video: ["autoplay", "controls", "loop", "preload", "src", "height", "width"]
			}, o.getDefaultWhiteList = c, o.onTag = function() {}, o.onIgnoreTag = function() {}, o.onTagAttr = function() {},
			o.onIgnoreTagAttr = function() {}, o.safeAttrValue = function(t, a, e, i) {
				if (e = r(e), "href" === a || "src" === a) {
					if ("#" === (e = n.trim(e))) return "#";
					if ("http://" !== e.substr(0, 7) && "https://" !== e.substr(0, 8) && "mailto:" !== e.substr(0, 7) && "tel:" !==
						e.substr(0, 4) && "#" !== e[0] && "/" !== e[0]) return ""
				} else if ("background" === a) {
					if (O.lastIndex = 0, O.test(e)) return ""
				} else if ("style" === a) {
					if (_.lastIndex = 0, _.test(e) || (S.lastIndex = 0, S.test(e) && (O.lastIndex = 0, O.test(e)))) return "";
					!1 !== i && (e = (i = i || x).process(e))
				}
				return m(e)
			}, o.escapeHtml = f, o.escapeQuote = a, o.unescapeQuote = h, o.escapeHtmlEntities = g, o.escapeDangerHtml5Entities =
			l, o.clearNonPrintableCharacter = u, o.friendlyAttrValue = r, o.escapeAttrValue = m, o.onIgnoreTagStripAll =
			function() {
				return ""
			}, o.StripTagBody = function(t, a) {
				"function" != typeof a && (a = function() {});
				var r = !Array.isArray(t),
					i = [],
					o = !1;
				return {
					onIgnoreTag: function(e, d, s) {
						return r || -1 !== n.indexOf(t, e) ? s.isClosing ? (i.push([!1 === o ? s.position : o, s.position + 10]), o = !
							1, "[/removed]") : (o || (o = s.position), "[removed]") : a(e, d, s)
					},
					remove: function(t) {
						var a = "",
							r = 0;
						return n.forEach(i, (function(e) {
							a += t.slice(r, e[0]), r = e[1]
						})), a += t.slice(r)
					}
				}
			}, o.stripCommentTag = function(e) {
				return e.replace(/\x3c!--[\s\S]*?--\x3e/g, "")
			}, o.stripBlankChar = function(e) {
				return (e = (e = e.split("")).filter((function(e) {
					return !(127 === (e = e.charCodeAt(0)) || 31 >= e && 10 !== e && 13 !== e)
				}))).join("")
			}, o.cssFilter = x, o.getDefaultCSSWhiteList = b
	}, function(e, t, n) {
		function r(e, t) {
			for (; t < e.length; t++) {
				var a = e[t];
				if (" " !== a) return "=" === a ? t : -1
			}
		}

		function i(e, t) {
			for (; 0 < t; t--) {
				var a = e[t];
				if (" " !== a) return "=" === a ? t : -1
			}
		}

		function a(e) {
			return '"' === e[0] && '"' === e[e.length - 1] || "'" === e[0] && "'" === e[e.length - 1] ? e.substr(1, e.length -
				2) : e
		}
		var o = n(5);
		t.parseTag = function(t, a, n) {
			var i, d = "",
				s = 0,
				c = !1,
				f = !1,
				g = t.length;
			for (i = 0; i < g; i++) {
				var v = t.charAt(i);
				if (!1 === c) "<" === v && (c = i);
				else if (!1 !== f) v === f && (f = !1);
				else if ("<" === v) d += n(t.slice(s, i)), s = c = i;
				else if (">" === v) {
					d += n(t.slice(s, c)), v = s = t.slice(c, i + 1);
					var b = o.spaceIndex(v);
					b = -1 === b ? v.slice(1, -1) : v.slice(1, b + 1), "/" === (b = o.trim(b).toLowerCase()).slice(0, 1) && (b =
						b.slice(1)), "/" === b.slice(-1) && (b = b.slice(0, -1)), v = b, d += a(c, d.length, v, s, "</" === s.slice(
						0, 2)), s = i + 1, c = !1
				} else '"' !== v && "'" !== v || "=" !== t.charAt(i - 1) || (f = v)
			}
			return s < t.length && (d += n(t.substr(s))), d
		}, t.parseAttr = function(e, n) {
			function s(t, r) {
				1 > (t = (t = o.trim(t)).replace(/[^a-zA-Z0-9_:\.\-]/gim, "").toLowerCase()).length || (t = n(t, r || "")) &&
					g.push(t)
			}
			for (var l, p = 0, g = [], u = !1, h = e.length, f = 0; f < h; f++)
				if (l = e.charAt(f), !1 === u && "=" === l) u = e.slice(p, f), p = f + 1;
				else if (!1 === u || f !== p || '"' !== l && "'" !== l || "=" !== e.charAt(f - 1)) /\s|\n|\t/.test(l) && (e =
				e.replace(/\s|\n|\t/g, " "), !1 === u ? -1 === (l = r(e, f)) ? (s(p = o.trim(e.slice(p, f))), u = !1, p = f +
					1) : f = l - 1 : -1 === (l = i(e, f - 1)) && (s(u, p = a(p = o.trim(e.slice(p, f)))), u = !1, p = f + 1));
			else {
				if (-1 === (l = e.indexOf(l, f + 1))) break;
				s(u, p = o.trim(e.slice(p + 1, l))), u = !1, p = (f = l) + 1
			}
			return p < e.length && (!1 === u ? s(e.slice(p)) : s(u, a(o.trim(e.slice(p))))), o.trim(g.join(" "))
		}
	}, function(e, t) {
		var n, r, o;
		! function(a, i) {
			r = [e, t], void 0 !== (o = "function" == typeof(n = i) ? n.apply(t, r) : n) && (e.exports = o)
		}(0, (function(e, t) {
			function n(t) {
				function a(a) {
					var e = t.style.width;
					t.style.width = "0px", t.offsetWidth, t.style.width = e, t.style.overflowY = a
				}

				function n(t) {
					for (var n = []; t && t.parentNode && t.parentNode instanceof Element;) t.parentNode.scrollTop && n.push({
						node: t.parentNode,
						scrollTop: t.parentNode.scrollTop
					}), t = t.parentNode;
					return n
				}

				function o() {
					if (0 !== t.scrollHeight) {
						var a = n(t),
							e = document.documentElement && document.documentElement.scrollTop;
						t.style.height = "", t.style.height = t.scrollHeight + c + "px", p = t.clientWidth, a.forEach((function(e) {
							e.node.scrollTop = e.scrollTop
						})), e && (document.documentElement.scrollTop = e)
					}
				}

				function d() {
					o();
					var n = i(parseFloat(t.style.height)),
						r = window.getComputedStyle(t, null),
						d = "content-box" === r.boxSizing ? i(parseFloat(r.height)) : t.offsetHeight;
					if (d < n ? "hidden" === r.overflowY && (a("scroll"), o(), d = "content-box" === r.boxSizing ? i(parseFloat(
							window.getComputedStyle(t, null).height)) : t.offsetHeight) : "hidden" !== r.overflowY && (a("hidden"), o(),
							d = "content-box" === r.boxSizing ? i(parseFloat(window.getComputedStyle(t, null).height)) : t.offsetHeight
						), u !== d) {
						u = d, n = l("autosize:resized");
						try {
							t.dispatchEvent(n)
						} catch (e) {}
					}
				}
				if (t && t.nodeName && "TEXTAREA" === t.nodeName && !s.has(t)) {
					var c = null,
						p = null,
						u = null,
						e = function() {
							t.clientWidth !== p && d()
						},
						f = function(a) {
							window.removeEventListener("resize", e, !1), t.removeEventListener("input", d, !1), t.removeEventListener(
								"keyup", d, !1), t.removeEventListener("autosize:destroy", f, !1), t.removeEventListener(
								"autosize:update", d, !1), Object.keys(a).forEach((function(n) {
								t.style[n] = a[n]
							})), s.delete(t)
						}.bind(t, {
							height: t.style.height,
							resize: t.style.resize,
							overflowY: t.style.overflowY,
							overflowX: t.style.overflowX,
							wordWrap: t.style.wordWrap
						});
					t.addEventListener("autosize:destroy", f, !1), "onpropertychange" in t && "oninput" in t && t.addEventListener(
							"keyup", d, !1), window.addEventListener("resize", e, !1), t.addEventListener("input", d, !1), t.addEventListener(
							"autosize:update", d, !1), t.style.overflowX = "hidden", t.style.wordWrap = "break-word", s.set(t, {
							destroy: f,
							update: d
						}),
						function() {
							var e = window.getComputedStyle(t, null);
							"vertical" === e.resize ? t.style.resize = "none" : "both" === e.resize && (t.style.resize = "horizontal"),
								c = "content-box" === e.boxSizing ? -(parseFloat(e.paddingTop) + parseFloat(e.paddingBottom)) :
								parseFloat(e.borderTopWidth) + parseFloat(e.borderBottomWidth), isNaN(c) && (c = 0), d()
						}()
				}
			}

			function r(e) {
				(e = s.get(e)) && e.destroy()
			}

			function o(e) {
				(e = s.get(e)) && e.update()
			}
			var s = "function" == typeof Map ? new Map : function() {
					var e = [],
						t = [];
					return {
						has: function(t) {
							return -1 < e.indexOf(t)
						},
						get: function(a) {
							return t[e.indexOf(a)]
						},
						set: function(a, n) {
							-1 === e.indexOf(a) && (e.push(a), t.push(n))
						},
						delete: function(a) {
							-1 < (a = e.indexOf(a)) && (e.splice(a, 1), t.splice(a, 1))
						}
					}
				}(),
				l = function(e) {
					return new Event(e, {
						bubbles: !0
					})
				};
			try {
				new Event("test")
			} catch (e) {
				l = function(e) {
					var t = document.createEvent("Event");
					return t.initEvent(e, !0, !1), t
				}
			}
			var a = null;
			"undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((a = function(e) {
				return e
			}).destroy = function(e) {
				return e
			}, a.update = function(e) {
				return e
			}) : ((a = function(e) {
				return e && Array.prototype.forEach.call(e.length ? e : [e], (function(e) {
					return n(e)
				})), e
			}).destroy = function(e) {
				return e && Array.prototype.forEach.call(e.length ? e : [e], r), e
			}, a.update = function(e) {
				return e && Array.prototype.forEach.call(e.length ? e : [e], o), e
			}), t.default = a, e.exports = t.default
		}))
	}, function(i, o, d) {
		function s(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function b(e) {
			return !!e && this.init(e), this
		}

		function a(t) {
			return new b(t)
		}
		var O = s(o = d(26)),
			h = s(o = d(17)),
			l = s(o = d(20)),
			g = s(o = d(6)),
			_ = d(2),
			r = s(o = d(24)),
			$ = s(o = d(0)),
			t = s(o = d(22)),
			n = s(o = d(19)),
			m = d(23),
			u = s(o = d(25)),
			v = s(d = d(21)),
			p = {
				comment: "",
				nick: "",
				mail: "",
				link: "",
				ua: $.default.ua,
				url: "",
				QQAvatar: ""
			},
			y = "",
			S = "https://gravatar.loli.net/avatar/",
			e = ["mp", "identicon", "monsterid", "wavatar", "robohash", "retro", ""],
			E = "",
			P = !1;
		b.prototype.init = function(e) {
			if ("undefined" == typeof document) throw Error("Sorry, Valine does not support Server-side rendering.");
			return e && (e = $.default.extend(_.defaultConfig, e), this.i18n = (0, l.default)(e.lang || $.default.lang, e.langMode),
				this.config = e, g.default.maps = !!e.emojiMaps && e.emojiMaps || g.default.maps, g.default.cdn = !!e.emojiCDN &&
				e.emojiCDN || g.default.cdn, this._init()), this
		}, b.prototype._init = function() {
			var i = this;
			try {
				var a = i.config,
					o = a.avatar,
					s = a.avatarForce,
					c = a.avatar_cdn,
					l = a.visitor,
					g = a.path,
					h = a.pageSize,
					b = a.recordIP;
				i.config.path = (void 0 === g ? location.pathname : g).replace(/index\.html?$/, "");
				var r = s ? "&q=" + _.RandomStr : "";
				E = "?d=" + (-1 < e.indexOf(o) ? o : "mp") + "&v=" + _.VERSION + r, P = "hide" === o, S = /^https?:\/\//.test(
					c) ? c : S, i.config.pageSize = isNaN(h) ? 10 : 1 > h ? 10 : h, b && (0, m.recordIPFn)((function(e) {
					return p.ip = e
				}));
				var d = i.config.el || null,
					y = (0, $.default)(d);
				if (d = d instanceof HTMLElement ? d : y[y.length - 1] || null) {
					i.$el = (0, $.default)(d), i.$el.addClass("v").attr("data-class", "v"), P && i.$el.addClass("hide-avatar"),
						i.config.meta = (i.config.guest_info || i.config.meta || _.defaultMeta).filter((function(e) {
							return -1 < _.defaultMeta.indexOf(e)
						})), i.config.requiredFields = i.config.requiredFields.filter((function(e) {
							return -1 < _.defaultMeta.indexOf(e)
						}));
					var f = (0 == i.config.meta.length ? _.defaultMeta : i.config.meta).map((function(t) {
							var a = "mail" == t ? "email" : "text";
							return -1 < _.defaultMeta.indexOf(t) ? '<input name="' + t + '" placeholder="' + (i.config.metaPlaceholder[
								t] || i.i18n.t(t)) + '" class="v' + t + ' vinput" type="' + a + '">' : ""
						})),
						u =
						'<div class="vpanel"><div class="vwrap"><p class="cancel-reply text-right" style="display:none;" title="' +
						i.i18n.t("cancelReply") +
						'"><svg class="vicon cancel-reply-btn" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4220" width="22" height="22"><path d="M796.454 985H227.545c-50.183 0-97.481-19.662-133.183-55.363-35.7-35.701-55.362-83-55.362-133.183V227.545c0-50.183 19.662-97.481 55.363-133.183 35.701-35.7 83-55.362 133.182-55.362h568.909c50.183 0 97.481 19.662 133.183 55.363 35.701 35.702 55.363 83 55.363 133.183v568.909c0 50.183-19.662 97.481-55.363 133.183S846.637 985 796.454 985zM227.545 91C152.254 91 91 152.254 91 227.545v568.909C91 871.746 152.254 933 227.545 933h568.909C871.746 933 933 871.746 933 796.454V227.545C933 152.254 871.746 91 796.454 91H227.545z" p-id="4221"></path><path d="M568.569 512l170.267-170.267c15.556-15.556 15.556-41.012 0-56.569s-41.012-15.556-56.569 0L512 455.431 341.733 285.165c-15.556-15.556-41.012-15.556-56.569 0s-15.556 41.012 0 56.569L455.431 512 285.165 682.267c-15.556 15.556-15.556 41.012 0 56.569 15.556 15.556 41.012 15.556 56.569 0L512 568.569l170.267 170.267c15.556 15.556 41.012 15.556 56.569 0 15.556-15.556 15.556-41.012 0-56.569L568.569 512z" p-id="4222" ></path></svg></p><div class="vheader item' +
						f.length + '">' + f.join("") +
						'</div><div class="vedit"><textarea id="veditor" class="veditor vinput" placeholder="' + i.config.placeholder +
						'"></textarea><div class="vrow"><div class="vcol vcol-60 status-bar"></div><div class="vcol vcol-40 vctrl text-right"><span title="' +
						i.i18n.t("emoji") +
						'"  class="vicon vemoji-btn"><svg  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16172" width="22" height="22" ><path d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zM512 56.888889a455.111111 455.111111 0 1 0 455.111111 455.111111 455.111111 455.111111 0 0 0-455.111111-455.111111zM312.888889 512A85.333333 85.333333 0 1 1 398.222222 426.666667 85.333333 85.333333 0 0 1 312.888889 512z" p-id="16173"></path><path d="M512 768A142.222222 142.222222 0 0 1 369.777778 625.777778a28.444444 28.444444 0 0 1 56.888889 0 85.333333 85.333333 0 0 0 170.666666 0 28.444444 28.444444 0 0 1 56.888889 0A142.222222 142.222222 0 0 1 512 768z" p-id="16174"></path><path d="M782.222222 391.964444l-113.777778 59.733334a29.013333 29.013333 0 0 1-38.684444-10.808889 28.444444 28.444444 0 0 1 10.24-38.684445l113.777778-56.888888a28.444444 28.444444 0 0 1 38.684444 10.24 28.444444 28.444444 0 0 1-10.24 36.408888z" p-id="16175"></path><path d="M640.568889 451.697778l113.777778 56.888889a27.875556 27.875556 0 0 0 38.684444-10.24 27.875556 27.875556 0 0 0-10.24-38.684445l-113.777778-56.888889a28.444444 28.444444 0 0 0-38.684444 10.808889 28.444444 28.444444 0 0 0 10.24 38.115556z" p-id="16176"></path></svg></span><span title="' +
						i.i18n.t("preview") +
						'" class="vicon vpreview-btn"><svg  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17688" width="22" height="22"><path d="M502.390154 935.384615a29.538462 29.538462 0 1 1 0 59.076923H141.430154C79.911385 994.461538 29.538462 946.254769 29.538462 886.153846V137.846154C29.538462 77.745231 79.950769 29.538462 141.390769 29.538462h741.218462c61.44 0 111.852308 48.206769 111.852307 108.307692v300.268308a29.538462 29.538462 0 1 1-59.076923 0V137.846154c0-26.899692-23.355077-49.230769-52.775384-49.230769H141.390769c-29.420308 0-52.775385 22.331077-52.775384 49.230769v748.307692c0 26.899692 23.355077 49.230769 52.775384 49.230769h360.999385z" p-id="17689"></path><path d="M196.923077 216.615385m29.538461 0l374.153847 0q29.538462 0 29.538461 29.538461l0 0q0 29.538462-29.538461 29.538462l-374.153847 0q-29.538462 0-29.538461-29.538462l0 0q0-29.538462 29.538461-29.538461Z" p-id="17690"></path><path d="M649.846154 846.769231a216.615385 216.615385 0 1 0 0-433.230769 216.615385 216.615385 0 0 0 0 433.230769z m0 59.076923a275.692308 275.692308 0 1 1 0-551.384616 275.692308 275.692308 0 0 1 0 551.384616z" p-id="17691"></path><path d="M807.398383 829.479768m20.886847-20.886846l0 0q20.886846-20.886846 41.773692 0l125.321079 125.321079q20.886846 20.886846 0 41.773693l0 0q-20.886846 20.886846-41.773693 0l-125.321078-125.321079q-20.886846-20.886846 0-41.773693Z" p-id="17692"></path></svg></span></div></div></div><div class="vrow"><div class="vcol vcol-30" ><a alt="Markdown is supported" href="https://guides.github.com/features/mastering-markdown/" class="vicon" target="_blank"><svg class="markdown" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z"></path></svg></a></div><div class="vcol vcol-70 text-right"><button type="button"  title="Cmd|Ctrl+Enter" class="vsubmit vbtn">' +
						i.i18n.t("submit") +
						'</button></div></div><div class="vemojis" style="display:none;"></div><div class="vinput vpreview" style="display:none;"></div><div style="display:none;" class="vmark"></div></div></div><div class="vcount" style="display:none;"><span class="vnum">0</span> ' +
						i.i18n.t("comments") +
						'</div><div class="vload-top text-center" style="display:none;"><i class="vspinner" style="width:30px;height:30px;"></i></div><div class="vcards"></div><div class="vload-bottom text-center" style="display:none;"><i class="vspinner" style="width:30px;height:30px;"></i></div><div class="vempty" style="display:none;"></div><div class="vpage txt-center" style="display:none"><button type="button" class="vmore vbtn">' +
						i.i18n.t("more") +
						'</button></div><div class="vpower txt-right">Powered By <a href="https://valine.js.org" target="_blank">Valine</a><br>v' +
						_.VERSION + "</div>";
					i.$el.html(u), i.$el.find(".cancel-reply").on("click", (function() {
						i.reset()
					}));
					var k = i.$el.find(".vempty");
					i.$nodata = {
						show: function(e) {
							return k.html(e || i.i18n.t("sofa")).show(), i
						},
						hide: function() {
							return k.hide(), i
						}
					};
					var x = i.$el.find(".vload-bottom"),
						A = i.$el.find(".vload-top");
					i.$loading = {
						show: function(e) {
							return e && A.show() || x.show(), i.$nodata.hide(), i
						},
						hide: function() {
							return A.hide(), x.hide(), 0 === i.$el.find(".vcard").length && i.$nodata.show(), i
						}
					}
				}(0, n.default)(i.config, (function(t) {
					t = (0, $.default)(".valine-comment-count");
					var a = 0;
					! function e(t) {
						var n = t[a++];
						if (n) {
							var r = (0, $.default)(n).attr("data-xid");
							r && i.Q(r).count().then((function(r) {
								n.innerText = r, e(t)
							})).catch((function() {
								n.innerText = 0
							}))
						}
					}(t), l && w.add(AV.Object.extend("Counter"), i.config.path), i.$el && i.bind()
				}))
			} catch (e) {
				(0, v.default)(i, e, "init")
			}
		};
		var x = function(t, n) {
				t = new t;
				var r = new AV.ACL;
				r.setPublicReadAccess(!0), r.setPublicWriteAccess(!0), t.setACL(r), t.set("url", n.url), t.set("xid", n.xid),
					t.set("title", n.title), t.set("time", 1), t.save().then((function() {
						(0, $.default)(n.el).find(".leancloud-visitors-count").text(1)
					})).catch((function() {}))
			},
			w = {
				add: function(t, a) {
					var n = this,
						e = (0, $.default)(".leancloud_visitors,.leancloud-visitors");
					if (1 === e.length) {
						var r = e[0],
							i = decodeURI((0, $.default)(r).attr("id")),
							o = (0, $.default)(r).attr("data-flag-title"),
							d = encodeURI(i),
							s = {
								el: r,
								url: i,
								xid: d,
								title: o
							};
						decodeURI(i) === decodeURI(a) ? ((a = new AV.Query(t)).equalTo("url", i), a.find().then((function(e) {
							0 < e.length ? ((e = e[0]).increment("time"), e.save().then((function(e) {
								(0, $.default)(r).find(".leancloud-visitors-count").text(e.get("time"))
							})).catch((function() {}))) : x(t, s)
						})).catch((function(e) {
							101 == e.code ? x(t, s) : (0, v.default)(n, e)
						}))) : w.show(t, e)
					} else w.show(t, e)
				},
				show: function(t, n) {
					var r = [];
					n.forEach((function(e) {
						var t = (0, $.default)(e).find(".leancloud-visitors-count");
						t && t.text("0"), r.push(/%/.test((0, $.default)(e).attr("id")) ? decodeURI((0, $.default)(e).attr("id")) :
							(0, $.default)(e).attr("id"))
					})), r.length && ((t = new AV.Query(t)).containedIn("url", r), t.find().then((function(e) {
						0 < e.length && n.forEach((function(t) {
							e.forEach((function(n) {
								var r = n.get("xid") || encodeURI(n.get("url"));
								n = n.get("time");
								var i = (0, $.default)(t),
									o = i.attr("id");
								(/%/.test(o) ? o : encodeURI(o)) == r && (r = i.find(".leancloud-visitors-count")) && r.text(n)
							}))
						}))
					})).catch((function() {})))
				}
			};
		b.prototype.Q = function(t) {
			var a = this.config.clazzName;
			if (1 == arguments.length) {
				var n = new AV.Query(a);
				return n.doesNotExist("rid"), (a = new AV.Query(a)).equalTo("rid", ""), a = AV.Query.or(n, a), "*" === t ? a.exists(
					"url") : a.equalTo("url", decodeURI(t)), a.addDescending("createdAt"), a.addDescending("insertedAt"), a
			}
			return n = JSON.stringify(arguments[1]).replace(/(\[|\])/g, ""), AV.Query.doCloudQuery("select * from " + a +
				" where rid in (" + n + ") order by -createdAt,-createdAt")
		}, b.prototype.installLocale = function(e, t) {
			return this.i18n(e, t), this
		}, b.prototype.setPath = function(e) {
			return this.config.path = e, this
		}, b.prototype.bind = function() {
			var n = this,
				i = n.$el.find(".vemojis"),
				a = n.$el.find(".vpreview"),
				e = n.$el.find(".vemoji-btn"),
				o = n.$el.find(".vpreview-btn"),
				d = n.$el.find(".veditor"),
				s = g.default.maps,
				l = !1,
				c = function(t) {
					for (var n in t = [], s) s.hasOwnProperty(n) && g.default.build(n) && t.push('<i title="' + n + '" >' + g.default
						.build(n) + "</i>");
					i.html(t.join("")), l = !0, i.find("i").on("click", (function(e) {
						e.preventDefault(), j(d[0], " :" + (0, $.default)(this).attr("title") + ":")
					}))
				};
			n.$emoji = {
				show: function() {
					return !l && c(), n.$preview.hide(), i.show(), e.addClass("actived"), n.$emoji
				},
				hide: function() {
					return e.removeClass("actived"), i.hide(), n.$emoji
				}
			}, n.$preview = {
				show: function() {
					return y ? (n.$emoji.hide(), o.addClass("actived"), a.html(y).show(), H()) : n.$preview.hide(), n.$preview
				},
				hide: function() {
					return o.removeClass("actived"), a.hide().html(""), n.$preview
				}
			};
			var f = function(r) {
				var i = (0, t.default)(r.val() || "");
				i || n.$preview.hide(), y != i && (y = i, -1 < o.hasClass("actived") && y != a.html() && a.html(y), (0, h.default)
					(r[0]), H())
			};
			e.on("click", (function() {
				e.hasClass("actived") ? n.$emoji.hide() : n.$emoji.show()
			})), o.on("click", (function() {
				o.hasClass("actived") ? n.$preview.hide() : n.$preview.show()
			}));
			var x = n.config.meta,
				k = {},
				w = {
					veditor: "comment"
				};
			for (var A in x.forEach((function(e) {
					w["v" + e] = e
				})), w) w.hasOwnProperty(A) && function() {
				var e = w[A],
					t = n.$el.find("." + A);
				k[e] = t, t.on("input change blur propertychange", (function(a) {
					n.config.enableQQ && "blur" === a.type && "nick" === e && (isNaN(t.val()) ? $.default.store.get(_.QQCacheKey) &&
						$.default.store.get(_.QQCacheKey).nick != t.val() && ($.default.store.remove(_.QQCacheKey), p.nick = t
							.val(), p.mail = "", p.QQAvatar = "") : (0, m.fetchQQFn)(t.val(), (function(e) {
							var a = e.nick || t.val(),
								n = e.qq + "@qq.com";
							(0, $.default)(".vnick").val(a), (0, $.default)(".vmail").val(n), p.nick = a, p.mail = n, p.QQAvatar =
								e.pic
						}))), "comment" === e ? f(t) : p[e] = $.default.escape(t.val().replace(/(^\s*)|(\s*$)/g, "")).substring(
						0, 40)
				}))
			}();
			var j = function(t, a) {
					if (document.selection) t.focus(), document.selection.createRange().text = a, t.focus();
					else if (t.selectionStart || "0" == t.selectionStart) {
						var n = t.selectionStart,
							e = t.selectionEnd,
							r = t.scrollTop;
						t.value = t.value.substring(0, n) + a + t.value.substring(e, t.value.length), t.focus(), t.selectionStart =
							n + a.length, t.selectionEnd = n + a.length, t.scrollTop = r
					} else t.focus(), t.value += a;
					setTimeout((function() {
						f((0, $.default)(t))
					}), 100)
				},
				L = 1,
				z = n.config.pageSize,
				R = n.config.pageSize,
				F = n.$el.find(".vpage");
			F.on("click", (function() {
				F.hide(), L++, q()
			}));
			var q = function() {
				var t = L,
					a = +n.$el.find(".vnum").text();
				n.$loading.show();
				var e = n.Q(n.config.path);
				e.limit(z), e.skip((t - 1) * z), e.find().then((function(e) {
					if (R = z, e && e.length) {
						var r = [];
						e.forEach((function(e) {
							r.push(e.id), N(e, n.$el.find(".vcards"), !0)
						})), n.Q(n.config.path, r).then((function(e) {
							(e && e.results || []).forEach((function(e) {
								N(e, (0, $.default)('.vquote[data-self-id="' + e.get("rid") + '"]'))
							})).catch((function() {}))
						})), z * t < a ? F.show() : F.hide()
					} else n.$nodata.show();
					n.$loading.hide()
				})).catch((function(e) {
					n.$loading.hide(), (0, v.default)(n, e, "query")
				}))
			};
			n.Q(n.config.path).count().then((function(e) {
				0 < e ? (n.$el.find(".vcount").show().find(".vnum").text(e), q()) : n.$loading.hide()
			})).catch((function(e) {
				(0, v.default)(n, e, "count")
			}));
			var B, U, D, N = function(t, a, i) {
					var o = (0, $.default)('<div class="vcard" id="' + t.id + '"></div>'),
						d = t.get("ua"),
						s = "";
					d && !/ja/.test(n.config.lang) && (d = $.default.detect(d), s = '<span class="vsys"><i class="fab fa-' + ([
								"xiaomi"
							].includes(d.browser.toLowerCase()) ? "mobile-alt fas" : d.browser.toLowerCase()) + '"></i>' + d.browser +
							" " + d.version + '</span> <span class="vsys"><i class="fab fa-' + (["macOs", "mac OS", "macos", "ios"].includes(
								d.os.toLowerCase()) ? "apple" : d.os.toLowerCase()) + '"></i>' + d.os + " " + d.osVersion + "</span>"),
						"*" === n.config.path && (s = '<a href="' + t.get("url") + '" class="vsys">' + t.get("url") + "</a>"), d =
						n.config.master.includes((0, O.default)(t.get("mail")));
					var l = n.config.friends.includes((0, O.default)(t.get("mail").toLowerCase()));
					d = d ? '<span class="vtag vmaster">' + n.config.tagMeta[0] + "</span>" : l ? '<span class="vtag vfriend">' +
						n.config.tagMeta[1] + "</span>" : '<span class="vtag vvisitor">' + n.config.tagMeta[2] + "</span>", l = (l =
							t.get("mail").match(/([\d]+)@(vip\.)?qq.com/)) ? "https://q2.qlogo.cn/headimg_dl?dst_uin=" + l +
						"&spec=100" : null, l = n.config.enableQQ && t.get("QQAvatar") ? t.get("QQAvatar") : l;
					var c = t.get("link") ? /^https?:\/\//.test(t.get("link")) ? t.get("link") : "http://" + t.get("link") : "";
					d = c ? '<a class="vnick" rel="nofollow" href="' + c + '" target="_blank" >' + t.get("nick") + "</a>" + d :
						'<span class="vnick">' + t.get("nick") + "</span>" + d, s = (P ? "" : l ? '<img class="vimg" src="' + l +
							'" referrerPolicy="no-referrer"/>' : '<img class="vimg" src="' + (S + (0, O.default)(t.get("mail")) + E) +
							'">') + '<div class="vh"><div class="vhead">' + d + " " + s +
						'</div><div class="vmeta"><span class="vtime" >' + (0, r.default)(t.get("insertedAt"), n.i18n) +
						'</span><span class="vat" data-vm-id="' + (t.get("rid") || t.id) + '" data-self-id="' + t.id + '">' + n.i18n
						.t("reply") + '</span></div><div class="vcontent" data-expand="' + n.i18n.t("expand") + '">' + (0, u.default)
						(t.get("comment")) + '</div><div class="vreply-wrapper" data-self-id="' + t.id +
						'"></div><div class="vquote" data-self-id="' + t.id + '"></div></div>', o.html(s), s = o.find(".vat"), o.find(
							"a").forEach((function(e) {
							e && !(0, $.default)(e).hasClass("at") && (0, $.default)(e).attr({
								target: "_blank",
								rel: "nofollow"
							})
						})), i ? a.append(o) : a.prepend(o), (a = o.find(".vcontent")) && T(a), s && Q(s, t), H()
				},
				Q = function(t, a) {
					t.on("click", (function(e) {
						e = t.attr("data-vm-id");
						var r = t.attr("data-self-id"),
							i = n.$el.find(".vwrap"),
							o = "@" + $.default.escape(a.get("nick"));
						(0, $.default)('.vreply-wrapper[data-self-id="' + r + '"]').append(i).find(".cancel-reply").show(), B =
							$.default.escape(o) + " ", U = e, D = r, a.get("mail"), k.comment.attr({
								placeholder: o
							})[0].focus()
					}))
				},
				H = function() {
					setTimeout((function() {
						try {
							"MathJax" in window && "version" in window.MathJax && (/^3.*/.test(window.MathJax.version) && MathJax.typeset() ||
									MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.querySelector(".v")])), "renderMathInElement" in
								window && renderMathInElement((0, $.default)(".v")[0], {
									delimiters: [{
										left: "$$",
										right: "$$",
										display: !0
									}, {
										left: "$",
										right: "$",
										display: !1
									}]
								})
						} catch (e) {}
					}), 100)
				},
				T = function(e) {
					setTimeout((function() {
						200 < e[0].offsetHeight && (e.addClass("expand"), e.on("click", (function() {
							e.removeClass("expand")
						})))
					}))
				};
			! function(e) {
				if (e = $.default.store.get(_.MetaCacheKey) || e)
					for (var t in x) {
						var a = x[t];
						n.$el.find(".v" + a).val($.default.unescape(e[a])), p[a] = e[a]
					}
				e = $.default.store.get(_.QQCacheKey), p.QQAvatar = n.config.enableQQ && !!e && e.pic || ""
			}(), n.reset = function() {
				p.comment = "", k.comment.val(""), f(k.comment), k.comment.attr("placeholder", n.config.placeholder), D = U =
					B = void 0, n.$preview.hide(), n.$el.find(".vpanel").append(n.$el.find(".vwrap")), n.$el.find(
						".cancel-reply").hide(), y = ""
			};
			var X = n.$el.find(".vsubmit"),
				I = function(e) {
					return -1 < n.config.requiredFields.indexOf("nick") && 3 > p.nick.length ? (k.nick[0].focus(), void n.$el.find(
							".status-bar").text("" + n.i18n.t("nickFail")).empty(3e3)) : -1 < n.config.requiredFields.indexOf("mail") &&
						!
						/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
						.test(p.mail) ? (k.mail[0].focus(), void n.$el.find(".status-bar").text("" + n.i18n.t("mailFail")).empty(
							3e3)) : "" == y ? void k.comment[0].focus() : (p.comment = y, p.nick = p.nick || "Anonymous", (e = $.default
							.store.get("vlx")) && 20 > Date.now() / 1e3 - e / 1e3 ? void n.$el.find(".status-bar").text(n.i18n.t(
							"busy")).empty(3e3) : void Y())
				},
				V = function() {
					var e = new AV.ACL;
					return e.setPublicReadAccess(!0), e.setPublicWriteAccess(!1), e
				},
				Y = function() {
					$.default.store.set("vlx", Date.now()), X.attr({
						disabled: !0
					}), n.$loading.show(!0);
					var e = new(AV.Object.extend(n.config.clazzName || "Comment"));
					if (p.url = decodeURI(n.config.path), p.insertedAt = new Date, U) {
						var t = D || U;
						e.set("rid", U), e.set("pid", t), p.comment = y.replace("<p>", '<p><a class="at" href="#' + t + '">' + B +
							"</a> , ")
					}
					for (var a in p) p.hasOwnProperty(a) && e.set(a, p[a]);
					e.setACL(V()), e.save().then((function(e) {
						"Anonymous" != p.nick && $.default.store.set(_.MetaCacheKey, {
							nick: p.nick,
							link: p.link,
							mail: p.mail
						});
						var t = n.$el.find(".vnum");
						try {
							U ? N(e, (0, $.default)('.vquote[data-self-id="' + U + '"]'), !0) : (+t.text() ? t.text(+t.text() + 1) :
								n.$el.find(".vcount").show().find(".vnum").text(+t.text() + 1), N(e, n.$el.find(".vcards")), R++), X.removeAttr(
								"disabled"), n.$loading.hide(), n.reset()
						} catch (e) {
							(0, v.default)(n, e, "save")
						}
					})).catch((function(e) {
						(0, v.default)(n, e, "commitEvt")
					}))
				};
			X.on("click", I), (0, $.default)(document).on("keydown", (function(e) {
				var t = (e = event || e).keyCode || e.which || e.charCode;
				(e.ctrlKey || e.metaKey) && 13 === t && I(), 9 === t && "veditor" == (document.activeElement.id || "") &&
					(e.preventDefault(), j(d[0], "    "))
			})).on("paste", (function(e) {
				(e = "clipboardData" in e ? e.clipboardData : e.originalEvent && e.originalEvent.clipboardData || window.clipboardData) &&
				b(e.items, !0)
			})), d.on("dragenter dragleave dragover drop", (function(e) {
				e.stopPropagation(), e.preventDefault(), "drop" === e.type && b(e.dataTransfer.items)
			}));
			var b = function(t, a) {
					for (var n, r = [], e = 0, i = t.length; e < i; e++) "string" === (n = t[e]).kind && n.type.match(
						"^text/html") ? !a && n.getAsString((function(e) {
						e && j(d[0], e.replace(/<[^>]+>/g, ""))
					})) : -1 !== n.type.indexOf("image") && r.push(n.getAsFile());
					W(r)
				},
				W = function t(a, r) {
					r = r || 0;
					var i = a.length;
					if (0 < i) {
						var o = a[r];
						X.attr({
							disabled: !0
						});
						var s = "![Uploading " + o.name + "...]()";
						j(d[0], s), ee(o, (function(e) {
							500 == e.code ? (d.val(d.val().replace(s, "")), (0, h.default)(d[0]), n.$el.find(".status-bar").text(e.msg)
								.empty(3e3), X.removeAttr("disabled")) : (d.val(d.val().replace(s, "![" + o.name + "](" + e.data.url +
								")\r\n")), (0, h.default)(d[0]), ++r < i ? t(a, r) : X.removeAttr("disabled"))
						}))
					}
				},
				ee = function(t, n) {
					var a = new FormData;
					a.append("image", t), $.default.ajax({
						type: "post",
						url: "https://pic.alexhchu.com/api/upload",
						data: a,
						success: function(e) {
							n && n(e)
						}
					})
				}
		}, i.exports = a, i.exports.default = a
	}, function(e, t, n) {
		t.__esModule = !0;
		var r = (e = n(0)) && e.__esModule ? e : {
				default: e
			},
			i = !1;
		t.default = function(e, t) {
			"AV" in window && (2 < parseInt((window.AV.version || window.AV.VERSION).split(".")[0]) ? i = !!AV.applicationId &&
				!!AV.applicationKey : r.default.deleteInWin("AV", 0)), i ? t && t() : r.default.sdkLoader(
				"//cdn.jsdelivr.net/npm/leancloud-storage@3/dist/av-min.js", "AV", (function(a) {
					a = "https://";
					var n = e.app_id || e.appId,
						r = e.app_key || e.appKey;
					if (!e.serverURLs) switch (n.slice(-9)) {
						case "-9Nh9j0Va":
							a += "tab.";
							break;
						case "-MdYXbMMI":
							a += "us."
					}
					AV.init({
						appId: n,
						appKey: r,
						serverURLs: e.serverURLs || a + "avoscloud.com"
					}), i = !0, t && t()
				}))
		}
	}, function(e, t, n) {
		function r(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		t.__esModule = !0;
		var i = r(e = n(37));
		e = r(e = n(56));
		var a = n(57);
		a = r(a);
		var o = n(54);
		o = r(o), n = r(n = n(55));
		var s = {
			zh: e.default,
			"zh-cn": e.default,
			"zh-CN": e.default,
			"zh-TW": a.default,
			en: o.default,
			"en-US": o.default,
			ja: n.default,
			"ja-JP": n.default
		};
		t.default = function(e, t) {
			return !s[e] && e && t && (s[e] = t), new i.default({
				phrases: s[e || "zh"],
				locale: e
			})
		}
	}, function(e, t) {
		t.__esModule = !0, t.default = function(e, t) {
			if (e.$el && e.$loading.hide().$nodata.hide(), "[object Error]" === {}.toString.call(t)) {
				var n = t.code || t.message || t.error || "";
				if (isNaN(n)) e.$el && e.$nodata.show('<pre style="text-align:left;"> ' + JSON.stringify(t) + "</pre>");
				else {
					var r = e.i18n.t("code-" + n);
					t = (r == "code-" + n ? void 0 : r) || t.message || t.error || "", 101 == n || -1 == n ? e.$nodata.show() :
						e.$el && e.$nodata.show('<pre style="text-align:left;">Code ' + n + ": " + t + "</pre>")
				}
			} else e.$el && e.$nodata.show('<pre style="text-align:left;">' + JSON.stringify(t) + "</pre>")
		}
	}, function(e, t, n) {
		function r(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		t.__esModule = !0;
		var i = r(e = n(36)),
			a = n(0),
			o = r(a),
			s = r(a = n(6)),
			l = n(33);
		(n = new e.Renderer).code = function(e, t) {
			return '<pre><code class="hljs language-' + t + '">' + (t && hljs.getLanguage(t) ? hljs.highlight(t, e).value :
				o.default.escape(e)) + "</code></pre>"
		}, i.default.setOptions({
			renderer: "hljs" in window ? n : new e.Renderer,
			highlight: function(e, t) {
				return "hljs" in window ? t && hljs.getLanguage(t) && hljs.highlight(t, e, !0).value || hljs.highlightAuto(
					e).value : l(e)
			},
			gfm: !0,
			tables: !0,
			breaks: !0,
			pedantic: !1,
			sanitize: !0,
			smartLists: !0,
			smartypants: !0,
			headerPrefi: "v-"
		}), t.default = function(e) {
			return s.default.parse((0, i.default)(e))
		}
	}, function(e, t, n) {
		t.__esModule = !0, t.recordIPFn = t.fetchQQFn = void 0;
		var r = (e = n(0)) && e.__esModule ? e : {
				default: e
			},
			i = n(2);
		t.fetchQQFn = function(e, t) {
			var a = r.default.store.get(i.QQCacheKey);
			a && a.qq == e ? t && t(a) : r.default.ajax({
				type: "POST",
				url: "//valine.api.ioliu.cn/getqqinfo",
				data: {
					qq: e
				},
				success: function(e) {
					e.errmsg || (r.default.store.set(i.QQCacheKey, e), t && t(e))
				}
			})
		}, t.recordIPFn = function(e) {
			r.default.sdkLoader("//api.ip.sb/jsonip?callback=getIP", "getIP"), window.getIP = function(t) {
				e && e(t.ip), r.default.deleteInWin("getIP")
			}
		}
	}, function(e) {
		var t = function e(t) {
				return t instanceof Date ? t : !isNaN(t) || /^\d+$/.test(t) ? new Date(parseInt(t)) : /GMT/.test(t || "") ? e(
					new Date(t).getTime()) : (t = (t || "").replace(/(^\s*)|(\s*$)/g, "").replace(/\.\d+/, "").replace(/-/, "/")
					.replace(/-/, "/").replace(/(\d)T(\d)/, "$1 $2").replace(/Z/, " UTC").replace(/([+-]\d\d):?(\d\d)/, " $1$2"),
					new Date(t))
			},
			n = function(e, t) {
				for (e = e.toString(); e.length < t;) e = "0" + e;
				return e
			};
		e.exports = function(e, a) {
			var r = Math.floor;
			if (!e) return "";
			try {
				var o = t(e).getTime(),
					s = (new Date).getTime() - o,
					d = r(s / 864e5);
				if (0 === d) {
					var l = r((e = s % 864e5) / 36e5);
					if (0 === l) {
						var c = r((l = e % 36e5) / 6e4);
						return 0 === c ? i(l % 6e4 / 1e3) + " " + a.t("seconds") : c + " " + a.t("minutes")
					}
					return l + " " + a.t("hours")
				}
				if (0 > d) var p = a.t("now");
				else {
					if (8 > d) var u = d + " " + a.t("days");
					else {
						var h = n(e.getDate(), 2),
							v = n(e.getMonth() + 1, 2);
						u = n(e.getFullYear(), 2) + "-" + v + "-" + h
					}
					p = u
				}
				return p
			} catch (e) {}
		}
	}, function(e, t, n) {
		t.__esModule = !0;
		var r = (e = n(51)) && e.__esModule ? e : {
			default: e
		};
		t.default = function(e) {
			return (0, r.default)(e, {
				onTagAttr: function(e, t, a, n) {
					return i(e, t, a, n)
				},
				onIgnoreTagAttr: function(e, t, a, n) {
					return i(e, t, a, n)
				}
			}).replace(/<\/?div>/gi, "")
		};
		var i = function(e, t, a) {
			if (/code|pre|span/gi.test(e)) {
				if ("style" == t) return t + '="' + (/^color/gi.test(a) ? a : "").replace(/(color:[#0-9a-fA-F]{1,6};?).+/gi,
					"$1") + '"';
				if ("class" == t) return t + "='" + r.default.escapeAttrValue(a) + "'"
			}
			return "img" === e && -1 < ["src", "class"].indexOf(t) ? t + '="' + r.default.escapeAttrValue(a) +
				'" referrerPolicy="no-referrer" ' : void 0
		}
	}, function(e) {
		var a;
		! function() {
			function i(t, a) {
				var n = (65535 & t) + (65535 & a);
				return (t >> 16) + (a >> 16) + (n >> 16) << 16 | 65535 & n
			}

			function o(t, n, r, e, o, d) {
				return t = i(i(n, t), i(e, d)), i(t << o | t >>> 32 - o, r)
			}

			function s(t, a, n, e, r, i, d) {
				return o(a & n | ~a & e, t, a, r, i, d)
			}

			function l(t, a, n, e, r, i, d) {
				return o(a & e | n & ~e, t, a, r, i, d)
			}

			function c(t, a, n, e, r, i, d) {
				return o(n ^ (a | ~e), t, a, r, i, d)
			}

			function r(n, a) {
				n[a >> 5] |= 128 << a % 32, n[14 + (a + 64 >>> 9 << 4)] = a;
				var r = 1732584193,
					p = -271733879,
					u = -1732584194,
					f = 271733878;
				for (a = 0; a < n.length; a += 16) {
					var g = r,
						v = p,
						y = u,
						m = f;
					r = s(r, p, u, f, n[a], 7, -680876936), f = s(f, r, p, u, n[a + 1], 12, -389564586), u = s(u, f, r, p, n[a +
							2], 17, 606105819), p = s(p, u, f, r, n[a + 3], 22, -1044525330), r = s(r, p, u, f, n[a + 4], 7, -176418897),
						f = s(f, r, p, u, n[a + 5], 12, 1200080426), u = s(u, f, r, p, n[a + 6], 17, -1473231341), p = s(p, u, f, r,
							n[a + 7], 22, -45705983), r = s(r, p, u, f, n[a + 8], 7, 1770035416), f = s(f, r, p, u, n[a + 9], 12, -
							1958414417), u = s(u, f, r, p, n[a + 10], 17, -42063), p = s(p, u, f, r, n[a + 11], 22, -1990404162), r = s(
							r, p, u, f, n[a + 12], 7, 1804603682), f = s(f, r, p, u, n[a + 13], 12, -40341101), u = s(u, f, r, p, n[a +
							14], 17, -1502002290), r = l(r, p = s(p, u, f, r, n[a + 15], 22, 1236535329), u, f, n[a + 1], 5, -165796510),
						f = l(f, r, p, u, n[a + 6], 9, -1069501632), u = l(u, f, r, p, n[a + 11], 14, 643717713), p = l(p, u, f, r,
							n[a], 20, -373897302), r = l(r, p, u, f, n[a + 5], 5, -701558691), f = l(f, r, p, u, n[a + 10], 9, 38016083),
						u = l(u, f, r, p, n[a + 15], 14, -660478335), p = l(p, u, f, r, n[a + 4], 20, -405537848), r = l(r, p, u, f,
							n[a + 9], 5, 568446438), f = l(f, r, p, u, n[a + 14], 9, -1019803690), u = l(u, f, r, p, n[a + 3], 14, -
							187363961), p = l(p, u, f, r, n[a + 8], 20, 1163531501), r = l(r, p, u, f, n[a + 13], 5, -1444681467), f =
						l(f, r, p, u, n[a + 2], 9, -51403784), u = l(u, f, r, p, n[a + 7], 14, 1735328473), r = o((p = l(p, u, f, r,
							n[a + 12], 20, -1926607734)) ^ u ^ f, r, p, n[a + 5], 4, -378558), f = o(r ^ p ^ u, f, r, n[a + 8], 11, -
							2022574463), u = o(f ^ r ^ p, u, f, n[a + 11], 16, 1839030562), p = o(u ^ f ^ r, p, u, n[a + 14], 23, -
							35309556), r = o(p ^ u ^ f, r, p, n[a + 1], 4, -1530992060), f = o(r ^ p ^ u, f, r, n[a + 4], 11,
							1272893353), u = o(f ^ r ^ p, u, f, n[a + 7], 16, -155497632), p = o(u ^ f ^ r, p, u, n[a + 10], 23, -
							1094730640), r = o(p ^ u ^ f, r, p, n[a + 13], 4, 681279174), f = o(r ^ p ^ u, f, r, n[a], 11, -358537222),
						u = o(f ^ r ^ p, u, f, n[a + 3], 16, -722521979), p = o(u ^ f ^ r, p, u, n[a + 6], 23, 76029189), r = o(p ^
							u ^ f, r, p, n[a + 9], 4, -640364487), f = o(r ^ p ^ u, f, r, n[a + 12], 11, -421815835), u = o(f ^ r ^ p,
							u, f, n[a + 15], 16, 530742520), r = c(r, p = o(u ^ f ^ r, p, u, n[a + 2], 23, -995338651), u, f, n[a], 6,
							-198630844), f = c(f, r, p, u, n[a + 7], 10, 1126891415), u = c(u, f, r, p, n[a + 14], 15, -1416354905), p =
						c(p, u, f, r, n[a + 5], 21, -57434055), r = c(r, p, u, f, n[a + 12], 6, 1700485571), f = c(f, r, p, u, n[a +
							3], 10, -1894986606), u = c(u, f, r, p, n[a + 10], 15, -1051523), p = c(p, u, f, r, n[a + 1], 21, -
							2054922799), r = c(r, p, u, f, n[a + 8], 6, 1873313359), f = c(f, r, p, u, n[a + 15], 10, -30611744), u = c(
							u, f, r, p, n[a + 6], 15, -1560198380), p = c(p, u, f, r, n[a + 13], 21, 1309151649), r = c(r, p, u, f, n[a +
							4], 6, -145523070), f = c(f, r, p, u, n[a + 11], 10, -1120210379), u = c(u, f, r, p, n[a + 2], 15,
							718787259), p = c(p, u, f, r, n[a + 9], 21, -343485551), r = i(r, g), p = i(p, v), u = i(u, y), f = i(f, m)
				}
				return [r, p, u, f]
			}

			function p(n) {
				var a, r = "",
					i = 32 * n.length;
				for (a = 0; a < i; a += 8) r += t(255 & n[a >> 5] >>> a % 32);
				return r
			}

			function u(t) {
				var a, n = [];
				for (n[(t.length >> 2) - 1] = void 0, a = 0; a < n.length; a += 1) n[a] = 0;
				var e = 8 * t.length;
				for (a = 0; a < e; a += 8) n[a >> 5] |= (255 & t.charCodeAt(a / 8)) << a % 32;
				return n
			}

			function n(e) {
				return p(r(u(e), 8 * e.length))
			}

			function d(t, n) {
				var i, o = u(t),
					s = [],
					l = [];
				for (s[15] = l[15] = void 0, 16 < o.length && (o = r(o, 8 * t.length)), t = 0; 16 > t; t += 1) s[t] =
					909522486 ^ o[t], l[t] = 1549556828 ^ o[t];
				return i = r(s.concat(u(n)), 512 + 8 * n.length), p(r(l.concat(i), 640))
			}

			function f(t) {
				var a, n = "";
				for (a = 0; a < t.length; a += 1) {
					var r = t.charCodeAt(a);
					n += "0123456789abcdef".charAt(15 & r >>> 4) + "0123456789abcdef".charAt(15 & r)
				}
				return n
			}
			void 0 !== (a = function(t, r, i) {
				return r ? i ? t = d(unescape(encodeURIComponent(r)), unescape(encodeURIComponent(t))) : t = f(t = d(
					unescape(encodeURIComponent(r)), unescape(encodeURIComponent(t)))) : t = i ? n(unescape(encodeURIComponent(
					t))) : f(n(unescape(encodeURIComponent(t)))), t
			}) && (e.exports = a)
		}()
	}, function(e, t) {
		t.__esModule = !0, t.default = function(e) {
			var t = {},
				a = {
					Trident: -1 < (e = e || navigator.userAgent).indexOf("Trident") || -1 < e.indexOf("NET CLR"),
					Presto: -1 < e.indexOf("Presto"),
					WebKit: -1 < e.indexOf("AppleWebKit"),
					Gecko: -1 < e.indexOf("Gecko/"),
					Safari: -1 < e.indexOf("Safari"),
					Edge: -1 < e.indexOf("Edge") || -1 < e.indexOf("Edg"),
					Chrome: -1 < e.indexOf("Chrome") || -1 < e.indexOf("CriOS"),
					IE: -1 < e.indexOf("MSIE") || -1 < e.indexOf("Trident"),
					Firefox: -1 < e.indexOf("Firefox") || -1 < e.indexOf("FxiOS"),
					"Firefox Focus": -1 < e.indexOf("Focus"),
					Chromium: -1 < e.indexOf("Chromium"),
					Opera: -1 < e.indexOf("Opera") || -1 < e.indexOf("OPR"),
					Vivaldi: -1 < e.indexOf("Vivaldi"),
					Yandex: -1 < e.indexOf("YaBrowser"),
					Kindle: -1 < e.indexOf("Kindle") || -1 < e.indexOf("Silk/"),
					360: -1 < e.indexOf("360EE") || -1 < e.indexOf("360SE"),
					UC: -1 < e.indexOf("UC") || -1 < e.indexOf(" UBrowser"),
					QQBrowser: -1 < e.indexOf("QQBrowser"),
					QQ: -1 < e.indexOf("QQ/"),
					Baidu: -1 < e.indexOf("Baidu") || -1 < e.indexOf("BIDUBrowser"),
					Maxthon: -1 < e.indexOf("Maxthon"),
					Sogou: -1 < e.indexOf("MetaSr") || -1 < e.indexOf("Sogou"),
					LBBROWSER: -1 < e.indexOf("LBBROWSER"),
					"2345Explorer": -1 < e.indexOf("2345Explorer"),
					TheWorld: -1 < e.indexOf("TheWorld"),
					XiaoMi: -1 < e.indexOf("MiuiBrowser"),
					Quark: -1 < e.indexOf("Quark"),
					Qiyu: -1 < e.indexOf("Qiyu"),
					Wechat: -1 < e.indexOf("MicroMessenger"),
					Taobao: -1 < e.indexOf("AliApp(TB"),
					Alipay: -1 < e.indexOf("AliApp(AP"),
					Weibo: -1 < e.indexOf("Weibo"),
					Douban: -1 < e.indexOf("com.douban.frodo"),
					Suning: -1 < e.indexOf("SNEBUY-APP"),
					iQiYi: -1 < e.indexOf("IqiyiApp"),
					Windows: -1 < e.indexOf("Windows"),
					Linux: -1 < e.indexOf("Linux") || -1 < e.indexOf("X11"),
					macOS: -1 < e.indexOf("Macintosh"),
					Android: -1 < e.indexOf("Android") || -1 < e.indexOf("Adr"),
					Ubuntu: -1 < e.indexOf("Ubuntu"),
					FreeBSD: -1 < e.indexOf("FreeBSD"),
					Debian: -1 < e.indexOf("Debian"),
					"Windows Phone": -1 < e.indexOf("IEMobile") || -1 < e.indexOf("Windows Phone"),
					BlackBerry: -1 < e.indexOf("BlackBerry") || -1 < e.indexOf("RIM") || -1 < e.indexOf("BB10"),
					MeeGo: -1 < e.indexOf("MeeGo"),
					Symbian: -1 < e.indexOf("Symbian"),
					iOS: -1 < e.indexOf("like Mac OS X"),
					"Chrome OS": -1 < e.indexOf("CrOS"),
					WebOS: -1 < e.indexOf("hpwOS"),
					Mobile: -1 < e.indexOf("Mobi") || -1 < e.indexOf("iPh") || -1 < e.indexOf("480"),
					Tablet: -1 < e.indexOf("Tablet") || -1 < e.indexOf("Pad") || -1 < e.indexOf("Nexus 7")
				};
			a.Mobile && (a.Mobile = !(-1 < e.indexOf("iPad")));
			var n, i = {
				browser: ["Safari", "Chrome", "Edge", "IE", "Firefox", "Firefox Focus", "Chromium", "Opera", "Vivaldi",
					"Yandex", "Kindle", "360", "UC", "QQBrowser", "QQ", "Baidu", "Maxthon", "Sogou", "LBBROWSER",
					"2345Explorer", "TheWorld", "XiaoMi", "Quark", "Qiyu", "Wechat", "Taobao", "Alipay", "Weibo", "Douban",
					"Suning", "iQiYi"
				],
				os: ["Windows", "Linux", "Mac OS", "macOS", "Android", "Ubuntu", "FreeBSD", "Debian", "iOS", "Windows Phone",
					"BlackBerry", "MeeGo", "Symbian", "Chrome OS", "WebOS"
				]
			};
			for (n in i)
				if (i.hasOwnProperty(n))
					for (var o, s = 0, l = i[n].length; s < l; s++) a[o = i[n][s]] && (t[n] = o);
			return a = {
					Windows: function() {
						var t = e.replace(/^.*Windows NT ([\d.]+).*$/, "$1");
						return {
							6.4: "10",
							6.3: "8.1",
							6.2: "8",
							6.1: "7",
							"6.0": "Vista",
							5.2: "XP",
							5.1: "XP",
							"5.0": "2000"
						} [t] || t
					},
					Android: e.replace(/^.*Android ([\d.]+);.*$/, "$1"),
					iOS: e.replace(/^.*OS ([\d_]+) like.*$/, "$1").replace(/_/g, "."),
					Debian: e.replace(/^.*Debian\/([\d.]+).*$/, "$1"),
					"Windows Phone": e.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, "$2"),
					macOS: e.replace(/^.*Mac OS X ([\d_]+).*$/, "$1").replace(/_/g, "."),
					WebOS: e.replace(/^.*hpwOS\/([\d.]+);.*$/, "$1"),
					BlackBerry: e.replace(/^.*BB([\d.]+);*$/, "$1")
				}, t.osVersion = "", (a = a[t.os]) && (t.osVersion = "function" == typeof a ? a() : a == e ? "" : a), a = {
					Safari: e.replace(/^.*Version\/([\d.]+).*$/, "$1"),
					Chrome: e.replace(/^.*Chrome\/([\d.]+).*$/, "$1").replace(/^.*CriOS\/([\d.]+).*$/, "$1"),
					IE: e.replace(/^.*MSIE ([\d.]+).*$/, "$1").replace(/^.*rv:([\d.]+).*$/, "$1"),
					Edge: e.replace(/^.*Edge?\/([\d.]+).*$/, "$1"),
					Firefox: e.replace(/^.*Firefox\/([\d.]+).*$/, "$1").replace(/^.*FxiOS\/([\d.]+).*$/, "$1"),
					"Firefox Focus": e.replace(/^.*Focus\/([\d.]+).*$/, "$1"),
					Chromium: e.replace(/^.*Chromium\/([\d.]+).*$/, "$1"),
					Opera: e.replace(/^.*Opera\/([\d.]+).*$/, "$1").replace(/^.*OPR\/([\d.]+).*$/, "$1"),
					Vivaldi: e.replace(/^.*Vivaldi\/([\d.]+).*$/, "$1"),
					Yandex: e.replace(/^.*YaBrowser\/([\d.]+).*$/, "$1"),
					Kindle: e.replace(/^.*Version\/([\d.]+).*$/, "$1"),
					Maxthon: e.replace(/^.*Maxthon\/([\d.]+).*$/, "$1"),
					QQBrowser: e.replace(/^.*QQBrowser\/([\d.]+).*$/, "$1"),
					QQ: e.replace(/^.*QQ\/([\d.]+).*$/, "$1"),
					Baidu: e.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, "$1"),
					UC: e.replace(/^.*UC?Browser\/([\d.]+).*$/, "$1"),
					Sogou: e.replace(/^.*SE ([\d.X]+).*$/, "$1").replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, "$1"),
					"2345Explorer": e.replace(/^.*2345Explorer\/([\d.]+).*$/, "$1"),
					TheWorld: e.replace(/^.*TheWorld ([\d.]+).*$/, "$1"),
					XiaoMi: e.replace(/^.*MiuiBrowser\/([\d.]+).*$/, "$1"),
					Quark: e.replace(/^.*Quark\/([\d.]+).*$/, "$1"),
					Qiyu: e.replace(/^.*Qiyu\/([\d.]+).*$/, "$1"),
					Wechat: e.replace(/^.*MicroMessenger\/([\d.]+).*$/, "$1"),
					Taobao: e.replace(/^.*AliApp\(TB\/([\d.]+).*$/, "$1"),
					Alipay: e.replace(/^.*AliApp\(AP\/([\d.]+).*$/, "$1"),
					Weibo: e.replace(/^.*weibo__([\d.]+).*$/, "$1"),
					Douban: e.replace(/^.*com.douban.frodo\/([\d.]+).*$/, "$1"),
					Suning: e.replace(/^.*SNEBUY-APP([\d.]+).*$/, "$1"),
					iQiYi: e.replace(/^.*IqiyiVersion\/([\d.]+).*$/, "$1")
				}, t.version = "", (a = a[t.browser]) && (t.version = "function" == typeof a ? a() : a == e ? "" : a), null ==
				t.browser && (t.browser = "Unknow App"), t
		}
	}, function(e, t) {
		var n, r;
		! function(a, i) {
			i = function(e, t, a) {
				function n(r, i, o) {
					return o = Object.create(n.fn), r && o.push.apply(o, r[t] ? [r] : "" + r === r ? /</.test(r) ? ((i = e.createElement(
						i)).innerHTML = r, i.children) : i ? (i = n(i)[0]) ? i[a](r) : o : e[a](r) : r), o
				}
				return n.fn = [], n.one = function(e, t) {
					return n(e, t)[0] || null
				}, n
			}(document, "addEventListener", "querySelectorAll"), void 0 !== (r = function() {
				return i
			}.apply(t, n = [])) && (e.exports = r)
		}()
	}, function(e, t, n) {
		function r(e) {
			e = e || {};
			var t, a = {};
			for (t in e) a[t] = e[t];
			(e = a).whiteList = e.whiteList || i.whiteList, e.onAttr = e.onAttr || i.onAttr, e.onIgnoreAttr = e.onIgnoreAttr ||
				i.onIgnoreAttr, e.safeAttrValue = e.safeAttrValue || i.safeAttrValue, this.options = e
		}
		var i = n(7),
			o = n(30);
		n(8), r.prototype.process = function(e) {
			if (!(e = (e = e || "").toString())) return "";
			var t = this.options,
				n = t.whiteList,
				r = t.onAttr,
				i = t.onIgnoreAttr,
				d = t.safeAttrValue;
			return o(e, (function(o, s, c, p, u) {
				var f = n[c],
					t = !1;
				if (!0 === f ? t = f : "function" == typeof f ? t = f(p) : f instanceof RegExp && (t = f.test(p)), !0 !==
					t && (t = !1), p = d(c, p)) return o = {
					position: s,
					sourcePosition: o,
					source: u,
					isWhite: t
				}, t ? null == (t = r(c, p, o)) ? c + ":" + p : t : null == (t = i(c, p, o)) ? void 0 : t
			}))
		}, e.exports = r
	}, function(e, t, a) {
		var r = a(8);
		e.exports = function(e, i) {
			function o() {
				if (!c) {
					var t = r.trim(e.slice(p, u)),
						a = t.indexOf(":");
					if (-1 !== a) {
						var n = r.trim(t.slice(0, a));
						a = r.trim(t.slice(a + 1)), n && (t = i(p, v.length, n, a, t)) && (v += t + "; ")
					}
				}
				p = u + 1
			}
			";" !== (e = r.trimRight(e))[e.length - 1] && (e += ";");
			for (var s, l = e.length, c = !1, p = 0, u = 0, v = ""; u < l; u++)
				if ("/" === (s = e[u]) && "*" === e[u + 1]) {
					if (-1 === (s = e.indexOf("*/", u + 2))) break;
					p = (u = s + 1) + 1, c = !1
				} else "(" === s ? c = !0 : ")" === s ? c = !1 : ";" === s ? c || o() : "\n" === s && o();
			return r.trim(v)
		}
	}, function(e, t, n) {
		var r = n(35),
			i = Object.prototype.toString,
			a = Object.prototype.hasOwnProperty;
		e.exports = function(e, n, o) {
			if (!r(n)) throw new TypeError("iterator must be a function");
			var d;
			if (3 <= arguments.length && (d = o), "[object Array]" === i.call(e)) {
				var s = d;
				d = 0;
				for (var c = e.length; d < c; d++) a.call(e, d) && (null == s ? n(e[d], d, e) : n.call(s, e[d], d, e))
			} else if ("string" == typeof e)
				for (s = d, d = 0, c = e.length; d < c; d++) null == s ? n(e.charAt(d), d, e) : n.call(s, e.charAt(d), d, e);
			else
				for (s in e) a.call(e, s) && (null == d ? n(e[s], s, e) : n.call(d, e[s], s, e))
		}
	}, function(e) {
		var n = Array.prototype.slice,
			r = Object.prototype.toString;
		e.exports = function(e) {
			var i = this;
			if ("function" != typeof i || "[object Function]" !== r.call(i)) throw new TypeError(
				"Function.prototype.bind called on incompatible " + i);
			for (var o, s = n.call(arguments, 1), a = Math.max(0, i.length - s.length), l = [], c = 0; c < a; c++) l.push(
				"$" + c);
			return o = Function("binder", "return function (" + l.join(",") + "){ return binder.apply(this,arguments); }")
				((function() {
					if (this instanceof o) {
						var t = i.apply(this, s.concat(n.call(arguments)));
						return Object(t) === t ? t : this
					}
					return i.apply(e, s.concat(n.call(arguments)))
				})), i.prototype && ((a = function() {}).prototype = i.prototype, o.prototype = new a, a.prototype = null), o
		}
	}, function(e) {
		! function(t, n) {
			e.exports = n()
		}(0, (function() {
			var e = function(e, t) {
					return e(t = {
						exports: {}
					}, t.exports), t.exports
				}((function(e) {
					var t = e.exports = function() {
						return new RegExp("(?:" + t.line().source + ")|(?:" + t.block().source + ")", "gm")
					};
					t.line = function() {
						return /(?:^|\s)\/\/(.+?)$/gm
					}, t.block = function() {
						return /\/\*([\S\s]*?)\*\//gm
					}
				})),
				t = ["23AC69", "91C132", "F19726", "E8552D", "1AAB8E", "E1147F", "2980C1", "1BA1E6", "9FA0A0", "F19726",
					"E30B20", "E30B20", "A3338B"
				];
			return function(a, n) {
				void 0 === n && (n = {});
				var r = n.colors;
				void 0 === r && (r = t);
				var i = 0,
					o = {};
				return n = new RegExp("(" +
					/[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/.source + "|" +
					/</.source + ")|(" + e().source + ")", "gmi"), a.replace(n, (function(e, t, a) {
					return a ? '<span style="color: slategray">' + a + "</span>" : "<" === t ? "&lt;" : (o[t] ? n = o[t] :
						(n = r[i], o[t] = n), i = ++i % r.length, '<span style="color: #' + n + '">' + t + "</span>");
					var n
				}))
			}
		}))
	}, function(e, t, a) {
		t = a(4), e.exports = t.call(Function.call, Object.prototype.hasOwnProperty)
	}, function(e) {
		var t = Function.prototype.toString,
			n = function(e) {
				try {
					var a = t.call(e);
					return /^\s*class\b/.test(a)
				} catch (e) {
					return !1
				}
			},
			r = Object.prototype.toString,
			i = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
		e.exports = function(e) {
			if (!e || "function" != typeof e && "object" != typeof e) return !1;
			if ("function" == typeof e && !e.prototype) return !0;
			if (i) {
				try {
					var o = !n(e) && (t.call(e), !0)
				} catch (e) {
					o = !1
				}
				return o
			}
			return !n(e) && ("[object Function]" === (e = r.call(e)) || "[object GeneratorFunction]" === e)
		}
	}, function(a, e, n) {
		(function() {
			! function() {
				function i(e) {
					this.tokens = [], this.tokens.links = {}, this.options = e || y.defaults, this.rules = p.normal, this.options
						.pedantic ? this.rules = p.pedantic : this.options.gfm && (this.options.tables ? this.rules = p.tables :
							this.rules = p.gfm)
				}

				function o(t, a) {
					if (this.options = a || y.defaults, this.links = t, this.rules = e.normal, this.renderer = this.options.renderer ||
						new d, this.renderer.options = this.options, !this.links) throw Error(
						"Tokens array requires a `links` property.");
					this.options.pedantic ? this.rules = e.pedantic : this.options.gfm && (this.options.breaks ? this.rules = e.breaks :
						this.rules = e.gfm)
				}

				function d(e) {
					this.options = e || y.defaults
				}

				function s() {}

				function l(e) {
					this.tokens = [], this.token = null, this.options = e || y.defaults, this.options.renderer = this.options.renderer ||
						new d, this.renderer = this.options.renderer, this.renderer.options = this.options
				}

				function r(e, t) {
					return e.replace(t ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(
						/"/g, "&quot;").replace(/'/g, "&#39;")
				}

				function u(e) {
					return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, (function(e, a) {
						return "colon" === (a = a.toLowerCase()) ? ":" : "#" === a.charAt(0) ? "x" === a.charAt(1) ? t(parseInt(
							a.substring(2), 16)) : t(+a.substring(1)) : ""
					}))
				}

				function c(t, e) {
					return t = t.source || t, e = e || "", {
						replace: function(a, n) {
							return n = (n = n.source || n).replace(/(^|[^\[])\^/g, "$1"), t = t.replace(a, n), this
						},
						getRegex: function() {
							return new RegExp(t, e)
						}
					}
				}

				function n(e, t) {
					return g[" " + e] || (/^[^:]+:\/*[^/]*$/.test(e) ? g[" " + e] = e + "/" : g[" " + e] = e.replace(/[^/]*$/,
						"")), e = g[" " + e], "//" === t.slice(0, 2) ? e.replace(/:[\s\S]*/, ":") + t : "/" === t.charAt(0) ? e.replace(
						/(:\/*[^/]*)[\s\S]*/, "$1") + t : e + t
				}

				function f() {}

				function m(t) {
					for (var a, n, r = 1; r < arguments.length; r++)
						for (n in a = arguments[r]) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
					return t
				}

				function v(t, n) {
					var r = 0;
					if ((t = t.replace(/([^\\])\|/g, "$1 |").split(/ +\| */)).length > n) t.splice(n);
					else
						for (; t.length < n;) t.push("");
					for (; r < t.length; r++) t[r] = t[r].replace(/\\\|/g, "|");
					return t
				}

				function y(t, n, o) {
					if (null == t) throw Error("marked(): input parameter is undefined or null");
					if ("string" != typeof t) throw Error("marked(): input parameter is of type " + Object.prototype.toString.call(
						t) + ", string expected");
					if (o || "function" == typeof n) {
						o || (o = n, n = null);
						var s = (n = m({}, y.defaults, n || {})).highlight,
							a = 0;
						try {
							var p = i.lex(t, n)
						} catch (e) {
							return o(e)
						}
						var d = p.length,
							u = function(e) {
								if (e) return n.highlight = s, o(e);
								try {
									var t = l.parse(p, n)
								} catch (t) {
									e = t
								}
								return n.highlight = s, e ? o(e) : o(null, t)
							};
						if (!s || 3 > s.length || (delete n.highlight, !d)) return u();
						for (; a < p.length; a++) ! function(t) {
							"code" === t.type ? s(t.text, t.lang, (function(a, n) {
								return a ? u(a) : null == n || n === t.text ? --d || u() : (t.text = n, t.escaped = !0, void(--d || u()))
							})) : --d || u()
						}(p[a])
					} else try {
						return n && (n = m({}, y.defaults, n)), l.parse(i.lex(t, n), n)
					} catch (e) {
						if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", (n || y.defaults).silent)
							return "<p>An error occurred:</p><pre>" + r(e.message + "", !0) + "</pre>";
						throw e
					}
				}
				var p = {
					newline: /^\n+/,
					code: /^( {4}[^\n]+\n*)+/,
					fences: f,
					hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
					heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
					nptable: f,
					blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
					list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
					html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$))",
					def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
					table: f,
					lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
					paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,
					text: /^[^\n]+/,
					_label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
					_title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
				};
				p.def = c(p.def).replace("label", p._label).replace("title", p._title).getRegex(), p.bullet =
					/(?:[*+-]|\d+\.)/, p.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, p.item = c(p.item, "gm").replace(
						/bull/g, p.bullet).getRegex(), p.list = c(p.list).replace(/bull/g, p.bullet).replace("hr",
						"\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + p.def.source +
						")").getRegex(), p._tag =
					"address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",
					p._comment = /\x3c!--(?!-?>)[\s\S]*?--\x3e/, p.html = c(p.html, "i").replace("comment", p._comment).replace(
						"tag", p._tag).replace("attribute",
						/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), p.paragraph = c(p.paragraph)
					.replace("hr", p.hr).replace("heading", p.heading).replace("lheading", p.lheading).replace("tag", p._tag).getRegex(),
					p.blockquote = c(p.blockquote).replace("paragraph", p.paragraph).getRegex(), p.normal = m({}, p), p.gfm = m({},
						p.normal, {
							fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,
							paragraph: /^/,
							heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
						}), p.gfm.paragraph = c(p.paragraph).replace("(?!", "(?!" + p.gfm.fences.source.replace("\\1", "\\2") + "|" +
						p.list.source.replace("\\1", "\\3") + "|").getRegex(), p.tables = m({}, p.gfm, {
						nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
						table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
					}), p.pedantic = m({}, p.normal, {
						html: c(
							"^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))"
						).replace("comment", p._comment).replace(/tag/g,
							"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
						).getRegex(),
						def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/
					}), i.rules = p, i.lex = function(t, a) {
						return new i(a).lex(t)
					}, i.prototype.lex = function(e) {
						return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g,
							"\n"), this.token(e, !0)
					}, i.prototype.token = function(e, n) {
						e = e.replace(/^ +$/gm, "");
						for (var r, i, o, s, u, b, y, x, w, A; e;)
							if ((o = this.rules.newline.exec(e)) && (e = e.substring(o[0].length), 1 < o[0].length && this.tokens.push({
									type: "space"
								})), o = this.rules.code.exec(e)) e = e.substring(o[0].length), o = o[0].replace(/^ {4}/gm, ""), this.tokens
								.push({
									type: "code",
									text: this.options.pedantic ? o : o.replace(/\n+$/, "")
								});
							else if (o = this.rules.fences.exec(e)) e = e.substring(o[0].length), this.tokens.push({
							type: "code",
							lang: o[2],
							text: o[3] || ""
						});
						else if (o = this.rules.heading.exec(e)) e = e.substring(o[0].length), this.tokens.push({
							type: "heading",
							depth: o[1].length,
							text: o[2]
						});
						else if (n && (o = this.rules.nptable.exec(e)) && (b = {
								type: "table",
								header: v(o[1].replace(/^ *| *\| *$/g, "")),
								align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
								cells: o[3] ? o[3].replace(/\n$/, "").split("\n") : []
							}).header.length === b.align.length) {
							for (e = e.substring(o[0].length), y = 0; y < b.align.length; y++) b.align[y] = /^ *-+: *$/.test(b.align[y]) ?
								"right" : /^ *:-+: *$/.test(b.align[y]) ? "center" : /^ *:-+ *$/.test(b.align[y]) ? "left" : null;
							for (y = 0; y < b.cells.length; y++) b.cells[y] = v(b.cells[y], b.header.length);
							this.tokens.push(b)
						} else if (o = this.rules.hr.exec(e)) e = e.substring(o[0].length), this.tokens.push({
							type: "hr"
						});
						else if (o = this.rules.blockquote.exec(e)) e = e.substring(o[0].length), this.tokens.push({
							type: "blockquote_start"
						}), o = o[0].replace(/^ *> ?/gm, ""), this.token(o, n), this.tokens.push({
							type: "blockquote_end"
						});
						else if (o = this.rules.list.exec(e)) {
							for (e = e.substring(o[0].length), r = 1 < (s = o[2]).length, this.tokens.push({
									type: "list_start",
									ordered: r,
									start: r ? +s : ""
								}), r = !1, x = (o = o[0].match(this.rules.item)).length, y = 0; y < x; y++) i = (b = o[y]).length, ~(b =
									b.replace(/^ *([*+-]|\d+\.) +/, "")).indexOf("\n ") && (i -= b.length, b = this.options.pedantic ? b.replace(
									/^ {1,4}/gm, "") : b.replace(new RegExp("^ {1," + i + "}", "gm"), "")), this.options.smartLists && y !==
								x - 1 && (s === (u = p.bullet.exec(o[y + 1])[0]) || 1 < s.length && 1 < u.length || (e = o.slice(y + 1).join(
									"\n") + e, y = x - 1)), i = r || /\n\n(?!\s*$)/.test(b), y !== x - 1 && (r = "\n" === b.charAt(b.length -
									1), i || (i = r)), A = void 0, (w = /^\[[ xX]\] /.test(b)) && (A = " " !== b[1], b = b.replace(
									/^\[[ xX]\] +/, "")), this.tokens.push({
									type: i ? "loose_item_start" : "list_item_start",
									task: w,
									checked: A
								}), this.token(b, !1), this.tokens.push({
									type: "list_item_end"
								});
							this.tokens.push({
								type: "list_end"
							})
						} else if (o = this.rules.html.exec(e)) e = e.substring(o[0].length), this.tokens.push({
							type: this.options.sanitize ? "paragraph" : "html",
							pre: !this.options.sanitizer && ("pre" === o[1] || "script" === o[1] || "style" === o[1]),
							text: o[0]
						});
						else if (n && (o = this.rules.def.exec(e))) e = e.substring(o[0].length), o[3] && (o[3] = o[3].substring(1,
							o[3].length - 1)), s = o[1].toLowerCase().replace(/\s+/g, " "), this.tokens.links[s] || (this.tokens.links[
							s] = {
							href: o[2],
							title: o[3]
						});
						else if (n && (o = this.rules.table.exec(e)) && (b = {
								type: "table",
								header: v(o[1].replace(/^ *| *\| *$/g, "")),
								align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
								cells: o[3] ? o[3].replace(/(?: *\| *)?\n$/, "").split("\n") : []
							}).header.length === b.align.length) {
							for (e = e.substring(o[0].length), y = 0; y < b.align.length; y++) b.align[y] = /^ *-+: *$/.test(b.align[y]) ?
								"right" : /^ *:-+: *$/.test(b.align[y]) ? "center" : /^ *:-+ *$/.test(b.align[y]) ? "left" : null;
							for (y = 0; y < b.cells.length; y++) b.cells[y] = v(b.cells[y].replace(/^ *\| *| *\| *$/g, ""), b.header.length);
							this.tokens.push(b)
						} else if (o = this.rules.lheading.exec(e)) e = e.substring(o[0].length), this.tokens.push({
							type: "heading",
							depth: "=" === o[2] ? 1 : 2,
							text: o[1]
						});
						else if (n && (o = this.rules.paragraph.exec(e))) e = e.substring(o[0].length), this.tokens.push({
							type: "paragraph",
							text: "\n" === o[1].charAt(o[1].length - 1) ? o[1].slice(0, -1) : o[1]
						});
						else if (o = this.rules.text.exec(e)) e = e.substring(o[0].length), this.tokens.push({
							type: "text",
							text: o[0]
						});
						else if (e) throw Error("Infinite loop on byte: " + e.charCodeAt(0));
						return this.tokens
					};
				var e = {
					escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
					autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
					url: f,
					tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
					link: /^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,
					reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
					nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
					strong: /^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)|^__([^\s])__(?!_)|^\*\*([^\s])\*\*(?!\*)/,
					em: /^_([^\s][\s\S]*?[^\s_])_(?!_)|^_([^\s_][\s\S]*?[^\s])_(?!_)|^\*([^\s][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*][\s\S]*?[^\s])\*(?!\*)|^_([^\s_])_(?!_)|^\*([^\s*])\*(?!\*)/,
					code: /^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,
					br: /^ {2,}\n(?!\s*$)/,
					del: f,
					text: /^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/,
					_escapes: /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,
					_scheme: /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,
					_email: /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/
				};
				e.autolink = c(e.autolink).replace("scheme", e._scheme).replace("email", e._email).getRegex(), e._attribute =
					/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, e.tag = c(e.tag).replace(
						"comment", p._comment).replace("attribute", e._attribute).getRegex(), e._label =
					/(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/, e._href =
					/\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f()\\]*\)|[^\s\x00-\x1f()\\])*?)/, e._title =
					/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, e.link = c(e.link).replace("label", e._label)
					.replace("href", e._href).replace("title", e._title).getRegex(), e.reflink = c(e.reflink).replace("label", e
						._label).getRegex(), e.normal = m({}, e), e.pedantic = m({}, e.normal, {
						strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
						em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
						link: c(/^!?\[(label)\]\((.*?)\)/).replace("label", e._label).getRegex(),
						reflink: c(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", e._label).getRegex()
					}), e.gfm = m({}, e.normal, {
						escape: c(e.escape).replace("])", "~|])").getRegex(),
						url: c(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("email", e._email).getRegex(),
						_backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
						del: /^~~(?=\S)([\s\S]*?\S)~~/,
						text: c(e.text).replace("]|", "~]|").replace("|",
							"|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|").getRegex()
					}), e.breaks = m({}, e.gfm, {
						br: c(e.br).replace("{2,}", "*").getRegex(),
						text: c(e.gfm.text).replace("{2,}", "*").getRegex()
					}), o.rules = e, o.output = function(t, a, n) {
						return new o(a, n).output(t)
					}, o.prototype.output = function(t) {
						for (var n, i, s, l, c, p = ""; t;)
							if (c = this.rules.escape.exec(t)) t = t.substring(c[0].length), p += c[1];
							else if (c = this.rules.autolink.exec(t)) t = t.substring(c[0].length), "@" === c[2] ? s = "mailto:" + (i =
							r(this.mangle(c[1]))) : s = i = r(c[1]), p += this.renderer.link(s, null, i);
						else if (!this.inLink && (c = this.rules.url.exec(t))) c[0] = this.rules._backpedal.exec(c[0])[0], t = t.substring(
							c[0].length), "@" === c[2] ? s = "mailto:" + (i = r(c[0])) : (i = r(c[0]), s = "www." === c[1] ?
							"http://" + i : i), p += this.renderer.link(s, null, i);
						else if (c = this.rules.tag.exec(t)) !this.inLink && /^<a /i.test(c[0]) ? this.inLink = !0 : this.inLink &&
							/^<\/a>/i.test(c[0]) && (this.inLink = !1), t = t.substring(c[0].length), p += this.options.sanitize ?
							this.options.sanitizer ? this.options.sanitizer(c[0]) : r(c[0]) : c[0];
						else if (c = this.rules.link.exec(t)) t = t.substring(c[0].length), this.inLink = !0, s = c[2], this.options
							.pedantic ? (n = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s)) ? (s = n[1], l = n[3]) : l = "" : l = c[3] ? c[3]
							.slice(1, -1) : "", s = s.trim().replace(/^<([\s\S]*)>$/, "$1"), p += this.outputLink(c, {
								href: o.escapes(s),
								title: o.escapes(l)
							}), this.inLink = !1;
						else if ((c = this.rules.reflink.exec(t)) || (c = this.rules.nolink.exec(t))) t = t.substring(c[0].length),
							n = (c[2] || c[1]).replace(/\s+/g, " "), (n = this.links[n.toLowerCase()]) && n.href ? (this.inLink = !0,
								p += this.outputLink(c, n), this.inLink = !1) : (p += c[0].charAt(0), t = c[0].substring(1) + t);
						else if (c = this.rules.strong.exec(t)) t = t.substring(c[0].length), p += this.renderer.strong(this.output(
							c[4] || c[3] || c[2] || c[1]));
						else if (c = this.rules.em.exec(t)) t = t.substring(c[0].length), p += this.renderer.em(this.output(c[6] ||
							c[5] || c[4] || c[3] || c[2] || c[1]));
						else if (c = this.rules.code.exec(t)) t = t.substring(c[0].length), p += this.renderer.codespan(r(c[2].trim(),
							!0));
						else if (c = this.rules.br.exec(t)) t = t.substring(c[0].length), p += this.renderer.br();
						else if (c = this.rules.del.exec(t)) t = t.substring(c[0].length), p += this.renderer.del(this.output(c[1]));
						else if (c = this.rules.text.exec(t)) t = t.substring(c[0].length), p += this.renderer.text(r(this.smartypants(
							c[0])));
						else if (t) throw Error("Infinite loop on byte: " + t.charCodeAt(0));
						return p
					}, o.escapes = function(e) {
						return e ? e.replace(o.rules._escapes, "$1") : e
					}, o.prototype.outputLink = function(t, a) {
						var n = a.href;
						return a = a.title ? r(a.title) : null, "!" === t[0].charAt(0) ? this.renderer.image(n, a, r(t[1])) : this.renderer
							.link(n, a, this.output(t[1]))
					}, o.prototype.smartypants = function(e) {
						return this.options.smartypants ? e.replace(/---/g, "—").replace(/--/g, "–").replace(
							/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(
							/"/g, "”").replace(/\.{3}/g, "…") : e
					}, o.prototype.mangle = function(t) {
						if (!this.options.mangle) return t;
						for (var a, n = "", r = t.length, i = 0; i < r; i++) a = t.charCodeAt(i), .5 < Math.random() && (a = "x" +
							a.toString(16)), n += "&#" + a + ";";
						return n
					}, d.prototype.code = function(t, n, i) {
						if (this.options.highlight) {
							var o = this.options.highlight(t, n);
							null != o && o !== t && (i = !0, t = o)
						}
						return n ? '<pre><code class="' + this.options.langPrefix + r(n, !0) + '">' + (i ? t : r(t, !0)) +
							"</code></pre>\n" : "<pre><code>" + (i ? t : r(t, !0)) + "</code></pre>"
					}, d.prototype.blockquote = function(e) {
						return "<blockquote>\n" + e + "</blockquote>\n"
					}, d.prototype.html = function(e) {
						return e
					}, d.prototype.heading = function(t, a, n) {
						return this.options.headerIds ? "<h" + a + ' id="' + this.options.headerPrefix + n.toLowerCase().replace(
							/[^\w]+/g, "-") + '">' + t + "</h" + a + ">\n" : "<h" + a + ">" + t + "</h" + a + ">\n"
					}, d.prototype.hr = function() {
						return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
					}, d.prototype.list = function(t, a, n) {
						var e = a ? "ol" : "ul";
						return "<" + e + (a && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + t + "</" + e + ">\n"
					}, d.prototype.listitem = function(e) {
						return "<li>" + e + "</li>\n"
					}, d.prototype.checkbox = function(e) {
						return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" :
							"") + "> "
					}, d.prototype.paragraph = function(e) {
						return "<p>" + e + "</p>\n"
					}, d.prototype.table = function(e, t) {
						return t && (t = "<tbody>" + t + "</tbody>"), "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
					}, d.prototype.tablerow = function(e) {
						return "<tr>\n" + e + "</tr>\n"
					}, d.prototype.tablecell = function(t, a) {
						var n = a.header ? "th" : "td";
						return (a.align ? "<" + n + ' align="' + a.align + '">' : "<" + n + ">") + t + "</" + n + ">\n"
					}, d.prototype.strong = function(e) {
						return "<strong>" + e + "</strong>"
					}, d.prototype.em = function(e) {
						return "<em>" + e + "</em>"
					}, d.prototype.codespan = function(e) {
						return "<code>" + e + "</code>"
					}, d.prototype.br = function() {
						return this.options.xhtml ? "<br/>" : "<br>"
					}, d.prototype.del = function(e) {
						return "<del>" + e + "</del>"
					}, d.prototype.link = function(t, i, o) {
						if (this.options.sanitize) {
							try {
								var e = decodeURIComponent(u(t)).replace(/[^\w:]/g, "").toLowerCase()
							} catch (e) {
								return o
							}
							if (0 === e.indexOf("javascript:") || 0 === e.indexOf("vbscript:") || 0 === e.indexOf("data:")) return o
						}
						this.options.baseUrl && !h.test(t) && (t = n(this.options.baseUrl, t));
						try {
							t = encodeURI(t).replace(/%25/g, "%")
						} catch (e) {
							return o
						}
						return t = '<a href="' + r(t) + '"', i && (t += ' title="' + i + '"'), t + ">" + o + "</a>"
					}, d.prototype.image = function(t, r, i) {
						return this.options.baseUrl && !h.test(t) && (t = n(this.options.baseUrl, t)), t = '<img src="' + t +
							'" alt="' + i + '"', r && (t += ' title="' + r + '"'), t + (this.options.xhtml ? "/>" : ">")
					}, d.prototype.text = function(e) {
						return e
					}, s.prototype.strong = s.prototype.em = s.prototype.codespan = s.prototype.del = s.prototype.text =
					function(e) {
						return e
					}, s.prototype.link = s.prototype.image = function(t, a, n) {
						return "" + n
					}, s.prototype.br = function() {
						return ""
					}, l.parse = function(e, t) {
						return new l(t).parse(e)
					}, l.prototype.parse = function(e) {
						for (this.inline = new o(e.links, this.options), this.inlineText = new o(e.links, m({}, this.options, {
								renderer: new s
							})), this.tokens = e.reverse(), e = ""; this.next();) e += this.tok();
						return e
					}, l.prototype.next = function() {
						return this.token = this.tokens.pop()
					}, l.prototype.peek = function() {
						return this.tokens[this.tokens.length - 1] || 0
					}, l.prototype.parseText = function() {
						for (var e = this.token.text;
							"text" === this.peek().type;) e += "\n" + this.next().text;
						return this.inline.output(e)
					}, l.prototype.tok = function() {
						switch (this.token.type) {
							case "space":
								return "";
							case "hr":
								return this.renderer.hr();
							case "heading":
								return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, u(this.inlineText.output(
									this.token.text)));
							case "code":
								return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
							case "table":
								var t, n, r = "",
									i = "",
									o = "";
								for (t = 0; t < this.token.header.length; t++) o += this.renderer.tablecell(this.inline.output(this.token
									.header[t]), {
									header: !0,
									align: this.token.align[t]
								});
								for (r += this.renderer.tablerow(o), t = 0; t < this.token.cells.length; t++) {
									var s = this.token.cells[t];
									for (o = "", n = 0; n < s.length; n++) o += this.renderer.tablecell(this.inline.output(s[n]), {
										header: !1,
										align: this.token.align[n]
									});
									i += this.renderer.tablerow(o)
								}
								return this.renderer.table(r, i);
							case "blockquote_start":
								for (i = "";
									"blockquote_end" !== this.next().type;) i += this.tok();
								return this.renderer.blockquote(i);
							case "list_start":
								for (i = "", t = this.token.ordered, s = this.token.start;
									"list_end" !== this.next().type;) i += this.tok();
								return this.renderer.list(i, t, s);
							case "list_item_start":
								for (i = "", this.token.task && (i += this.renderer.checkbox(this.token.checked));
									"list_item_end" !== this.next().type;) i += "text" === this.token.type ? this.parseText() : this.tok();
								return this.renderer.listitem(i);
							case "loose_item_start":
								for (i = "";
									"list_item_end" !== this.next().type;) i += this.tok();
								return this.renderer.listitem(i);
							case "html":
								return this.renderer.html(this.token.text);
							case "paragraph":
								return this.renderer.paragraph(this.inline.output(this.token.text));
							case "text":
								return this.renderer.paragraph(this.parseText())
						}
					};
				var g = {},
					h = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
				f.exec = f, y.options = y.setOptions = function(e) {
						return m(y.defaults, e), y
					}, y.getDefaults = function() {
						return {
							baseUrl: null,
							breaks: !1,
							gfm: !0,
							headerIds: !0,
							headerPrefix: "",
							highlight: null,
							langPrefix: "language-",
							mangle: !0,
							pedantic: !1,
							renderer: new d,
							sanitize: !1,
							sanitizer: null,
							silent: !1,
							smartLists: !1,
							smartypants: !1,
							tables: !0,
							xhtml: !1
						}
					}, y.defaults = y.getDefaults(), y.Parser = l, y.parser = l.parse, y.Renderer = d, y.TextRenderer = s, y.Lexer =
					i, y.lexer = i.lex, y.InlineLexer = o, y.inlineLexer = o.output, y.parse = y, a.exports = y
			}(this || "undefined" != typeof window && window)
		}).call(e, n(14))
	}, function(i, o, d) {
		function s(e) {
			var t = {};
			return l(e, (function(n, r) {
				l(n, (function(e) {
					t[e] = r
				}))
			})), t
		}

		function f(e, t) {
			return (e = s(e.pluralTypeToLanguages))[t] || e[m.call(t, /-/, 1)[0]] || e.en
		}

		function k(e, t, a) {
			return e.pluralTypes[f(e, t)](a)
		}

		function h(t, i, o, s, l) {
			if ("string" != typeof t) throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");
			if (null == i) return t;
			s = s || x, l = l || v;
			var c = "number" == typeof i ? {
				smart_count: i
			} : i;
			return null != c.smart_count && t && (i = m.call(t, y), t = g(i[k(l, o || "en", c.smart_count)] || i[0])), n.call(
				t, s, (function(e, t) {
					return r(c, t) && null != c[t] ? c[t] : e
				}))
		}

		function a(n) {
			n = n || {}, this.phrases = {}, this.extend(n.phrases || {}), this.currentLocale = n.locale || "en";
			var r = n.allowMissing ? h : null;
			this.onMissingKey = "function" == typeof n.onMissingKey ? n.onMissingKey : r, this.warn = n.warn || t;
			var i = n.interpolation;
			if (r = i && i.prefix || "%{", i = i && i.suffix || "}", r === y || i === y) throw new RangeError('"' + y +
				'" token is reserved for pluralization');
			this.tokenRegex = new RegExp(r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "(.*?)" + i.replace(
				/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), this.pluralRules = n.pluralRules || v
		}
		var l = d(31),
			u = d(50),
			r = d(34),
			g = d(43),
			t = function(e) {
				u(!1, e)
			},
			n = e.replace,
			m = e.split,
			y = "||||",
			v = {
				pluralTypes: {
					arabic: function(e) {
						return 3 > e ? e : 3 <= (e %= 100) && 10 >= e ? 3 : 11 <= e ? 4 : 5
					},
					bosnian_serbian: o = function(e) {
						var t = (e %= 100) % 10;
						return 11 !== e && 1 === t ? 0 : 2 <= t && 4 >= t && !(12 <= e && 14 >= e) ? 1 : 2
					},
					chinese: function() {
						return 0
					},
					croatian: o,
					french: function(e) {
						return 1 < e ? 1 : 0
					},
					german: function(e) {
						return 1 === e ? 0 : 1
					},
					russian: o,
					lithuanian: function(e) {
						return 1 == e % 10 && 11 != e % 100 ? 0 : 2 <= e % 10 && 9 >= e % 10 && (11 > e % 100 || 19 < e % 100) ? 1 :
							2
					},
					czech: function(e) {
						return 1 === e ? 0 : 2 <= e && 4 >= e ? 1 : 2
					},
					polish: function(e) {
						if (1 === e) return 0;
						var t = e % 10;
						return 2 <= t && 4 >= t && (10 > e % 100 || 20 <= e % 100) ? 1 : 2
					},
					icelandic: function(e) {
						return 1 != e % 10 || 11 == e % 100 ? 1 : 0
					},
					slovenian: function(e) {
						return 1 === (e %= 100) ? 0 : 2 === e ? 1 : 3 === e || 4 === e ? 2 : 3
					}
				},
				pluralTypeToLanguages: {
					arabic: ["ar"],
					bosnian_serbian: ["bs-Latn-BA", "bs-Cyrl-BA", "srl-RS", "sr-RS"],
					chinese: ["id", "id-ID", "ja", "ko", "ko-KR", "lo", "ms", "th", "th-TH", "zh"],
					croatian: ["hr", "hr-HR"],
					german: ["fa", "da", "de", "en", "es", "fi", "el", "he", "hi-IN", "hu", "hu-HU", "it", "nl", "no", "pt", "sv",
						"tr"
					],
					french: ["fr", "tl", "pt-br"],
					russian: ["ru", "ru-RU"],
					lithuanian: ["lt"],
					czech: ["cs", "cs-CZ", "sk"],
					polish: ["pl"],
					icelandic: ["is"],
					slovenian: ["sl-SL"]
				}
			},
			x = /%\{(.*?)\}/g;
		a.prototype.locale = function(e) {
			return e && (this.currentLocale = e), this.currentLocale
		}, a.prototype.extend = function(e, t) {
			l(e, (function(n, a) {
				a = t ? t + "." + a : a, "object" == typeof n ? this.extend(n, a) : this.phrases[a] = n
			}), this)
		}, a.prototype.unset = function(e, t) {
			"string" == typeof e ? delete this.phrases[e] : l(e, (function(n, a) {
				a = t ? t + "." + a : a, "object" == typeof n ? this.unset(n, a) : delete this.phrases[a]
			}), this)
		}, a.prototype.clear = function() {
			this.phrases = {}
		}, a.prototype.replace = function(e) {
			this.clear(), this.extend(e)
		}, a.prototype.t = function(t, a) {
			if (a = null == a ? {} : a, "string" == typeof this.phrases[t]) var n = this.phrases[t];
			else if ("string" == typeof a._) n = a._;
			else if (this.onMissingKey) {
				var r = this.onMissingKey;
				r = r(t, a, this.currentLocale, this.tokenRegex, this.pluralRules)
			} else this.warn('Missing translation for key: "' + t + '"'), r = t;
			return "string" == typeof n && (r = h(n, a, this.currentLocale, this.tokenRegex, this.pluralRules)), r
		}, a.prototype.has = function(e) {
			return r(this.phrases, e)
		}, a.transformPhrase = function(e, t, a) {
			return h(e, t, a)
		}, i.exports = a
	}, function(e) {
		var r = Object.getOwnPropertySymbols,
			n = Object.prototype.hasOwnProperty,
			a = Object.prototype.propertyIsEnumerable;
		e.exports = function() {
			try {
				if (!Object.assign) return !1;
				var e = new String("abc");
				if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
				var n = {};
				for (e = 0; 10 > e; e++) n["_" + t(e)] = e;
				if ("0123456789" !== Object.getOwnPropertyNames(n).map((function(e) {
						return n[e]
					})).join("")) return !1;
				var r = {};
				return ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"].forEach(
					(function(e) {
						r[e] = e
					})), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
			} catch (e) {
				return !1
			}
		}() ? Object.assign : function(e) {
			if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
			for (var i, o = Object(e), d = 1; d < arguments.length; d++) {
				for (var s in i = Object(arguments[d])) n.call(i, s) && (o[s] = i[s]);
				if (r)
					for (var t = r(i), c = 0; c < t.length; c++) a.call(i, t[c]) && (o[t[c]] = i[t[c]])
			}
			return o
		}
	}, function(e, i, o) {
		if (!Object.keys) var s = Object.prototype.hasOwnProperty,
			p = Object.prototype.toString,
			a = o(10),
			h = !(i = Object.prototype.propertyIsEnumerable).call({
				toString: null
			}, "toString"),
			g = i.call((function() {}), "prototype"),
			d = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable",
				"constructor"
			],
			l = function(e) {
				var t = e.constructor;
				return t && t.prototype === e
			},
			r = {
				$applicationCache: !0,
				$console: !0,
				$external: !0,
				$frame: !0,
				$frameElement: !0,
				$frames: !0,
				$innerHeight: !0,
				$innerWidth: !0,
				$outerHeight: !0,
				$outerWidth: !0,
				$pageXOffset: !0,
				$pageYOffset: !0,
				$parent: !0,
				$scrollLeft: !0,
				$scrollTop: !0,
				$scrollX: !0,
				$scrollY: !0,
				$self: !0,
				$webkitIndexedDB: !0,
				$webkitStorageInfo: !0,
				$window: !0
			},
			u = function() {
				if ("undefined" == typeof window) return !1;
				for (var e in window) try {
					if (!r["$" + e] && s.call(window, e) && null !== window[e] && "object" == typeof window[e]) try {
						l(window[e])
					} catch (e) {
						return !0
					}
				} catch (e) {
					return !0
				}
				return !1
			}(),
			t = function(t) {
				var r = null !== t && "object" == typeof t,
					i = "[object Function]" === p.call(t),
					o = a(t),
					c = r && "[object String]" === p.call(t),
					f = [];
				if (!r && !i && !o) throw new TypeError("Object.keys called on a non-object");
				if (r = g && i, c && 0 < t.length && !s.call(t, 0))
					for (c = 0; c < t.length; ++c) f.push(c + "");
				if (o && 0 < t.length)
					for (o = 0; o < t.length; ++o) f.push(o + "");
				else
					for (var e in t) r && "prototype" === e || !s.call(t, e) || f.push(e + "");
				if (h) {
					if ("undefined" != typeof window && u) try {
						var v = l(t)
					} catch (e) {
						v = !1
					} else v = l(t);
					for (o = 0; o < d.length; ++o) v && "constructor" === d[o] || !s.call(t, d[o]) || f.push(d[o])
				}
				return f
			};
		e.exports = t
	}, function(e, t, n) {
		var r = Array.prototype.slice,
			i = n(10),
			o = Object.keys,
			a = o ? function(e) {
				return o(e)
			} : n(39),
			d = Object.keys;
		a.shim = function() {
			return Object.keys ? function() {
				var e = Object.keys(arguments);
				return e && e.length === arguments.length
			}(1, 2) || (Object.keys = function(e) {
				return d(i(e) ? r.call(e) : e)
			}) : Object.keys = a, Object.keys || a
		}, e.exports = a
	}, function(e) {
		function i() {
			throw Error("setTimeout has not been defined")
		}

		function o() {
			throw Error("clearTimeout has not been defined")
		}

		function s(t) {
			if (r === setTimeout) return setTimeout(t, 0);
			if ((r === i || !r) && setTimeout) return r = setTimeout, setTimeout(t, 0);
			try {
				return r(t, 0)
			} catch (e) {
				try {
					return r.call(null, t, 0)
				} catch (a) {
					return r.call(this, t, 0)
				}
			}
		}

		function a(t) {
			if (u === clearTimeout) return clearTimeout(t);
			if ((u === o || !u) && clearTimeout) return u = clearTimeout, clearTimeout(t);
			try {
				return u(t)
			} catch (e) {
				try {
					return u.call(null, t)
				} catch (a) {
					return u.call(this, t)
				}
			}
		}

		function p() {
			k && g && (k = !1, g.length ? h = g.concat(h) : b = -1, h.length && f())
		}

		function f() {
			if (!k) {
				var e = s(p);
				k = !0;
				for (var t = h.length; t;) {
					for (g = h, h = []; ++b < t;) g && g[b].run();
					b = -1, t = h.length
				}
				g = null, k = !1, a(e)
			}
		}

		function l(e, t) {
			this.fun = e, this.array = t
		}

		function c() {}
		e = e.exports = {};
		try {
			var r = "function" == typeof setTimeout ? setTimeout : i
		} catch (e) {
			r = i
		}
		try {
			var u = "function" == typeof clearTimeout ? clearTimeout : o
		} catch (e) {
			u = o
		}
		var g, h = [],
			k = !1,
			b = -1;
		e.nextTick = function(t) {
				var a = Array(arguments.length - 1);
				if (1 < arguments.length)
					for (var n = 1; n < arguments.length; n++) a[n - 1] = arguments[n];
				h.push(new l(t, a)), 1 !== h.length || k || s(f)
			}, l.prototype.run = function() {
				this.fun.apply(null, this.array)
			}, e.title = "browser", e.browser = !0, e.env = {}, e.argv = [], e.version = "", e.versions = {}, e.on = c, e.addListener =
			c, e.once = c, e.off = c, e.removeListener = c, e.removeAllListeners = c, e.emit = c, e.prependListener = c, e.prependOnceListener =
			c, e.listeners = function() {
				return []
			}, e.binding = function() {
				throw Error("process.binding is not supported")
			}, e.cwd = function() {
				return "/"
			}, e.chdir = function() {
				throw Error("process.chdir is not supported")
			}, e.umask = function() {
				return 0
			}
	}, function(e, t) {
		function n(e) {
			return e = JSON.stringify(e), !!/^\{[\s\S]*\}$/.test(e)
		}

		function i(e) {
			if ("string" == typeof e) try {
				return JSON.parse(e)
			} catch (a) {
				return e
			}
		}

		function o() {
			if (!(this instanceof o)) return new o
		}

		function s(e, t) {
			var a = arguments,
				r = null;
			if (g || (g = o()), 0 === a.length) return g.get();
			if (1 === a.length) {
				if ("string" == typeof e) return g.get(e);
				if (n(e)) return g.set(e)
			}
			if (2 === a.length && "string" == typeof e) {
				if (!t) return g.remove(e);
				if (t && "string" == typeof t) return g.set(e, t);
				t && "[object Function]" === {}.toString.call(t) && (r = t(e, g.get(e)), s.set(e, r))
			}
			if (2 === a.length && "[object Array]" === Object.prototype.toString.call(e) && "[object Function]" === {}.toString
				.call(t)) {
				a = 0;
				for (var i = e.length; a < i; a++) r = t(e[a], g.get(e[a])), s.set(e[a], r)
			}
			return s
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var p = window.localStorage;
		p = function(e) {
			try {
				e.setItem("_Is_Incognit", "yes")
			} catch (a) {
				if ("QuotaExceededError" === a.name) {
					var t = function() {};
					e.__proto__ = {
						setItem: t,
						getItem: t,
						removeItem: t,
						clear: t
					}
				}
			} finally {
				"yes" === e.getItem("_Is_Incognit") && e.removeItem("_Is_Incognit")
			}
			return e
		}(p), o.prototype = {
			set: function(e, t) {
				if (e && !n(e)) p.setItem(e, void 0 === t || "function" == typeof t ? t + "" : JSON.stringify(t));
				else if (n(e))
					for (var a in e) this.set(a, e[a]);
				return this
			},
			get: function(e) {
				if (!e) {
					var t = {};
					return this.forEach((function(e, a) {
						return t[e] = a
					})), t
				}
				if ("?" === e.charAt(0)) return this.has(e.substr(1));
				var a = arguments;
				if (1 < a.length) {
					for (var n, r = {}, o = 0, d = a.length; o < d; o++)(n = i(p.getItem(a[o]))) && (r[a[o]] = n);
					return r
				}
				return i(p.getItem(e))
			},
			clear: function() {
				return p.clear(), this
			},
			remove: function(e) {
				var t = this.get(e);
				return p.removeItem(e), t
			},
			has: function(e) {
				return {}.hasOwnProperty.call(this.get(), e)
			},
			keys: function() {
				var e = [];
				return this.forEach((function(t) {
					e.push(t)
				})), e
			},
			forEach: function(e) {
				for (var t, a = 0, n = p.length; a < n; a++) e(t = p.key(a), this.get(t));
				return this
			},
			search: function(e) {
				for (var t = this.keys(), a = {}, n = 0, r = t.length; n < r; n++) - 1 < t[n].indexOf(e) && (a[t[n]] = this.get(
					t[n]));
				return a
			}
		};
		var a, g = null;
		for (a in o.prototype) s[a] = o.prototype[a];
		t.default = s
	}, function(e, t, n) {
		var r = n(12);
		t = n(9);
		var i = n(11),
			a = n(13);
		n = n(49), t(r = r(a()), {
			getPolyfill: a,
			implementation: i,
			shim: n
		}), e.exports = r
	}, function(e, t, n) {
		var r = (t = n(1))("%String%"),
			i = t("%TypeError%");
		e.exports = function(e) {
			if ("symbol" == typeof e) throw new i("Cannot convert a Symbol value to a string");
			return r(e)
		}
	}, function(e, t, a) {
		var n = a(1)("%TypeError%");
		e.exports = function(e, t) {
			if (null == e) throw new n(t || "Cannot call method on " + e);
			return e
		}
	}, function(e, t, n) {
		var r = n(1),
			i = n(12),
			a = i(r("String.prototype.indexOf"));
		e.exports = function(e, t) {
			return "function" == typeof(t = r(e, !!t)) && a(e, ".prototype.") ? i(t) : t
		}
	}, function(e, t, n) {
		(function(t) {
			var r = t.Symbol,
				a = n(48);
			e.exports = function() {
				return "function" == typeof r && "function" == typeof Symbol && "symbol" == typeof r("foo") && "symbol" ==
					typeof Symbol("bar") && a()
			}
		}).call(t, n(14))
	}, function(e) {
		e.exports = function() {
			if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
			if ("symbol" == typeof Symbol.iterator) return !0;
			var e = {},
				t = Symbol("test"),
				n = Object(t);
			if ("string" == typeof t || "[object Symbol]" !== Object.prototype.toString.call(t) || "[object Symbol]" !==
				Object.prototype.toString.call(n)) return !1;
			for (t in e[t] = 42, e) return !1;
			return ("function" != typeof Object.keys || 0 === Object.keys(e).length) && ("function" != typeof Object.getOwnPropertyNames ||
				0 === Object.getOwnPropertyNames(e).length) && (1 === (n = Object.getOwnPropertySymbols(e)).length && n[0] ===
				t && Object.prototype.propertyIsEnumerable.call(e, t) && ("function" != typeof Object.getOwnPropertyDescriptor ||
					42 === (e = Object.getOwnPropertyDescriptor(e, t)).value && !0 === e.enumerable))
		}
	}, function(t, n, r) {
		var i = r(9),
			o = r(13);
		t.exports = function() {
			var t = o();
			return i(String.prototype, {
				trim: t
			}, {
				trim: function() {
					return e.trim !== t
				}
			}), t
		}
	}, function(e, t, a) {
		(function(t) {
			var n = function() {};
			if ("production" !== t.env.NODE_ENV) {
				var r = function(e, t) {
					var a = arguments.length;
					t = Array(1 < a ? a - 1 : 0);
					for (var n = 1; n < a; n++) t[n - 1] = arguments[n];
					var r = 0;
					a = "Warning: " + e.replace(/%s/g, (function() {
						return t[r++]
					}));
					try {
						throw Error(a)
					} catch (e) {}
				};
				n = function(e, t, a) {
					var n = arguments.length;
					a = Array(2 < n ? n - 2 : 0);
					for (var i = 2; i < n; i++) a[i - 2] = arguments[i];
					if (void 0 === t) throw Error("`warning(condition, format, ...args)` requires a warning message argument");
					e || r.apply(null, [t].concat(a))
				}
			}
			e.exports = n
		}).call(t, a(41))
	}, function(e, t, n) {
		function r(e, t) {
			return new o(t).process(e)
		}
		var i = n(15),
			a = n(16),
			o = n(52);
		for (var d in (t = e.exports = r).filterXSS = r, t.FilterXSS = o, i) t[d] = i[d];
		for (d in a) t[d] = a[d];
		"undefined" != typeof window && (window.filterXSS = e.exports), "undefined" != typeof self && "undefined" !=
			typeof DedicatedWorkerGlobalScope && self instanceof DedicatedWorkerGlobalScope && (self.filterXSS = e.exports)
	}, function(e, t, n) {
		function i(e) {
			return null == e
		}

		function o(e) {
			var t = r.spaceIndex(e);
			return -1 === t ? {
				html: "",
				closing: "/" === e[e.length - 2]
			} : ((t = "/" === (e = r.trim(e.slice(t + 1, -1)))[e.length - 1]) && (e = r.trim(e.slice(0, -1))), {
				html: e,
				closing: t
			})
		}

		function a(e) {
			e = e || {};
			var t, n = {};
			for (t in e) n[t] = e[t];
			(e = n).stripIgnoreTag && (e.onIgnoreTag, e.onIgnoreTag = s.onIgnoreTagStripAll), e.whiteList = e.whiteList ||
				s.whiteList, e.onTag = e.onTag || s.onTag, e.onTagAttr = e.onTagAttr || s.onTagAttr, e.onIgnoreTag = e.onIgnoreTag ||
				s.onIgnoreTag, e.onIgnoreTagAttr = e.onIgnoreTagAttr || s.onIgnoreTagAttr, e.safeAttrValue = e.safeAttrValue ||
				s.safeAttrValue, e.escapeHtml = e.escapeHtml || s.escapeHtml, this.options = e, !1 === e.css ? this.cssFilter = !
				1 : (e.css = e.css || {}, this.cssFilter = new d(e.css))
		}
		var d = n(3).FilterCSS,
			s = n(15),
			l = (t = n(16)).parseTag,
			u = t.parseAttr,
			r = n(5);
		a.prototype.process = function(a) {
			if (!(a = (a = a || "").toString())) return "";
			var n = this.options,
				v = n.whiteList,
				f = n.onTag,
				g = n.onIgnoreTag,
				m = n.onTagAttr,
				t = n.onIgnoreTagAttr,
				p = n.safeAttrValue,
				e = n.escapeHtml,
				b = this.cssFilter;
			n.stripBlankChar && (a = s.stripBlankChar(a)), n.allowCommentTag || (a = s.stripCommentTag(a));
			var d = !1;
			return n.stripIgnoreTagBody && (d = s.StripTagBody(n.stripIgnoreTagBody, g), g = d.onIgnoreTag), a = l(a, (
				function(a, s, h, l, y) {
					if (a = {
							sourcePosition: a,
							position: s,
							isClosing: y,
							isWhite: v.hasOwnProperty(h)
						}, !i(s = f(h, l, a))) return s;
					if (a.isWhite) {
						if (a.isClosing) return "</" + h + ">";
						a = o(l);
						var x = v[h];
						return s = u(a.html, (function(e, a) {
							var n = -1 !== r.indexOf(x, e),
								o = m(h, e, a, n);
							return i(o) ? n ? (a = p(h, e, a, b)) ? e + '="' + a + '"' : e : i(o = t(h, e, a, n)) ? void 0 : o :
								o
						})), l = "<" + h, s && (l += " " + s), a.closing && (l += " /"), l + ">"
					}
					return i(s = g(h, l, a)) ? e(l) : s
				}), e), d && (a = d.remove(a)), a
		}, e.exports = a
	}, function(e) {
		function t(e) {
			return "oldtieba/tieba-" + e + ".png"
		}

		function a(e) {
			return "qq/qq-" + e + ".gif"
		}

		function n(e) {
			return "bilibili/bili_" + e + ".png"
		}

		function r(e) {
			return "aru/aru (" + e + ").png"
		}
		e.exports = {
			"彩虹滑稽": "https://cdn.jsdelivr.net/gh/drew233/cdn/caihongtiao.webp",
			"点赞": "https://cdn.jsdelivr.net/gh/drew233/cdn/kawayi.webp",
			"转圈圈": "https://cdn.jsdelivr.net/gh/drew233/cdn/zqq.webp",
			"揉左脸": "https://cdn.jsdelivr.net/gh/drew233/cdn/20200409130254.webp",
			"揉右脸": "https://cdn.jsdelivr.net/gh/drew233/cdn/20200409130249.webp",
			"傲娇": "https://cdn.jsdelivr.net/gh/drew233/cdn/20200409103906.webp",
			"开心": "https://cdn.jsdelivr.net/gh/drew233/cdn/20200409104757.webp",
			"扣手手": "https://cdn.jsdelivr.net/gh/drew233/cdn/20200409130304.webp",
			"仙女下凡": "https://cdn.jsdelivr.net/gh/drew233/cdn/20200409130301.webp"
		};
		for (var o = 1; 44 > o; o++) e.exports["tieba-" + o] = t(o);
		for (var o = 1; 140 > o; o++) e.exports["qq-" + o] = a(o);
		for (var o = 1; 50 > o; o++) e.exports["bili-" + o] = n(o);
		for (var o = 1; 164 > o; o++) e.exports["aru-" + o] = r(o)
	}, function(e) {
		e.exports = {
			nick: "NickName",
			mail: "E-Mail",
			link: "Website(http://)",
			nickFail: "NickName cannot be less than 3 bytes.",
			mailFail: "Please confirm your email address.",
			sofa: "No comment yet.",
			submit: "Submit",
			reply: "Reply",
			cancelReply: "Cancel reply",
			comments: "Comments",
			cancel: "Cancel",
			confirm: "Confirm",
			continue: "Continue",
			more: "Load More...",
			preview: "Preview",
			emoji: "Emoji",
			expand: "See more....",
			seconds: "seconds ago",
			minutes: "minutes ago",
			hours: "hours ago",
			days: "days ago",
			now: "just now",
			uploading: "Uploading ...",
			uploadDone: "Upload completed!",
			busy: "Submit is busy, please wait...",
			"code-98": "Valine initialization failed, please check your version of av-min.js.",
			"code-99": "Valine initialization failed, Please check the `el` element in the init method.",
			"code-100": "Valine initialization failed, Please check your appId and appKey.",
			"code-140": "The total number of API calls today has exceeded the development version limit.",
			"code-401": "Unauthorized operation, Please check your appId and appKey.",
			"code-403": "Access denied by API domain white list, Please check your security domain."
		}
	}, function(e) {
		e.exports = {
			nick: "ニックネーム",
			mail: "メールアドレス",
			link: "サイト(http://)",
			nickFail: "3バイト以上のニックネームをご入力ください.",
			mailFail: "メールアドレスをご確認ください.",
			sofa: "コメントしましょう~",
			submit: "提出する",
			reply: "返信する",
			cancelReply: "キャンセル",
			comments: "コメント",
			cancel: "キャンセル",
			confirm: "確認する",
			continue: "继续",
			more: "さらに読み込む...",
			preview: "プレビュー",
			emoji: "絵文字",
			expand: "もっと見る",
			seconds: "秒前",
			minutes: "分前",
			hours: "時間前",
			days: "日前",
			now: "たっだ今",
			uploading: "アップロード中...",
			uploadDone: "アップロードが完了しました!",
			busy: "20 秒間隔で提出してください    ...",
			"code-98": "ロードエラーです。av-min.js のバージョンを確認してください.",
			"code-99": "ロードエラーです。initにある`el`エレメントを確認ください.",
			"code-100": "ロードエラーです。AppIdとAppKeyを確認ください.",
			"code-140": "今日のAPIコールの総数が開発バージョンの上限を超えた.",
			"code-401": "権限が制限されています。AppIdとAppKeyを確認ください.",
			"code-403": "アクセスがAPIなどに制限されました、ドメイン名のセキュリティ設定を確認ください"
		}
	}, function(e) {
		e.exports = {
			nick: "昵称",
			mail: "邮箱",
			link: "网址(http://)",
			nickFail: "昵称不能少于3个字符",
			mailFail: "请填写正确的邮件地址",
			sofa: "来发评论吧~",
			submit: "提交",
			reply: "回复",
			cancelReply: "取消回复",
			comments: "评论",
			cancel: "取消",
			confirm: "确认",
			continue: "继续",
			more: "加载更多...",
			preview: "预览",
			emoji: "表情",
			expand: "查看更多...",
			seconds: "秒前",
			minutes: "分钟前",
			hours: "小时前",
			days: "天前",
			now: "刚刚",
			uploading: "正在传输...",
			uploadDone: "传输完成!",
			busy: "操作频繁，请稍候再试...",
			"code-98": "Valine 初始化失败，请检查 av-min.js 版本",
			"code-99": "Valine 初始化失败，请检查init中的`el`元素.",
			"code-100": "Valine 初始化失败，请检查你的AppId和AppKey.",
			"code-140": "今日 API 调用总次数已超过开发版限制.",
			"code-401": "未经授权的操作，请检查你的AppId和AppKey.",
			"code-403": "访问被API域名白名单拒绝，请检查你的安全域名设置."
		}
	}, function(e) {
		e.exports = {
			nick: "暱稱",
			mail: "郵箱",
			link: "網址(http://)",
			nickFail: "昵稱不能少於3個字符",
			mailFail: "請填寫正確的郵件地址",
			sofa: "來發評論吧~",
			submit: "提交",
			reply: "回覆",
			cancelReply: "取消回覆",
			comments: "評論",
			cancel: "取消",
			confirm: "確認",
			continue: "繼續",
			more: "加載更多...",
			preview: "預覽",
			emoji: "表情",
			expand: "查看更多...",
			seconds: "秒前",
			minutes: "分鐘前",
			hours: "小時前",
			days: "天前",
			now: "剛剛",
			uploading: "正在上傳...",
			uploadDone: "上傳完成!",
			busy: "操作頻繁，請稍候再試...",
			"code-98": "Valine 初始化失敗，請檢查 av-min.js 版本",
			"code-99": "Valine 初始化失敗，請檢查init中的`el`元素.",
			"code-100": "Valine 初始化失敗，請檢查你的AppId和AppKey.",
			"code-140": "今日 API 調用總次數已超過開發版限制.",
			"code-401": "未經授權的操作，請檢查你的AppId和AppKey.",
			"code-403": "訪問被API域名白名單拒絕，請檢查你的安全域名設置."
		}
	}, function(e, t, a) {
		"string" == typeof(t = a(59)) && (t = [
			[e.i, t, ""]
		]), a(61)(t, {
			transform: void 0
		}), t.locals && (e.exports = t.locals)
	}, function(e, t, a) {
		(t = e.exports = a(60)(!1)).push([e.i,
			'.v[data-class=v]{font-size:16px;text-align:left}.v[data-class=v] *{-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.75}.v[data-class=v] .status-bar,.v[data-class=v] .veditor,.v[data-class=v] .vinput,.v[data-class=v] p,.v[data-class=v] pre code{color:#555}.v[data-class=v] .vsys,.v[data-class=v] .vtime{color:#b3b3b3}.v[data-class=v] .text-right{text-align:right}.v[data-class=v] .text-center{text-align:center}.v[data-class=v] img{max-width:100%;border:none}.v[data-class=v] hr{margin:.825em 0;border-color:#f6f6f6;border-style:dashed}.v[data-class=v].hide-avatar .vimg{display:none}.v[data-class=v] a{position:relative;cursor:pointer;color:#1abc9c;text-decoration:none;display:inline-block}.v[data-class=v] a:hover{color:#d7191a}.v[data-class=v] code,.v[data-class=v] pre{background-color:#f8f8f8;padding:.2em .4em;border-radius:3px;font-size:85%;margin:0}.v[data-class=v] pre{padding:10px;overflow:auto;line-height:1.45}.v[data-class=v] pre code{padding:0;background:transparent;white-space:pre-wrap;word-break:keep-all}.v[data-class=v] blockquote{color:#666;margin:.5em 0;padding:0 0 0 1em;border-left:8px solid hsla(0,0%,93%,.5)}.v[data-class=v] .vinput{border:none;resize:none;outline:none;padding:10px 5px;max-width:100%;font-size:.775em}.v[data-class=v] input[type=checkbox],.v[data-class=v] input[type=radio]{display:inline-block;vertical-align:middle;margin-top:-2px}.v[data-class=v] .vicon{cursor:pointer;display:inline-block;overflow:hidden;fill:#555;vertical-align:middle}.v[data-class=v] .vicon+.vicon{margin-left:10px}.v[data-class=v] .vicon.actived{fill:#66b1ff}.v[data-class=v] .vrow{font-size:0;padding:10px 0}.v[data-class=v] .vrow .vcol{display:inline-block;vertical-align:middle;font-size:14px}.v[data-class=v] .vrow .vcol.vcol-20{width:20%}.v[data-class=v] .vrow .vcol.vcol-30{width:30%}.v[data-class=v] .vrow .vcol.vcol-40{width:40%}.v[data-class=v] .vrow .vcol.vcol-50{width:50%}.v[data-class=v] .vrow .vcol.vcol-60{width:60%}.v[data-class=v] .vrow .vcol.vcol-70{width:70%}.v[data-class=v] .vrow .vcol.vcol-80{width:80%}.v[data-class=v] .vrow .vcol.vctrl{font-size:12px}.v[data-class=v] .emoji,.v[data-class=v] .vemoji{max-width:25px;vertical-align:middle;margin:0 1px;display:inline-block}.v[data-class=v] .vwrap{border:1px solid #f0f0f0;border-radius:4px;margin-bottom:10px;overflow:hidden;position:relative;padding:10px}.v[data-class=v] .vwrap input{background:transparent}.v[data-class=v] .vwrap .vedit{position:relative;padding-top:10px}.v[data-class=v] .vwrap .cancel-reply-btn{position:absolute;right:5px;top:5px;cursor:pointer}.v[data-class=v] .vwrap .vemojis{display:none;font-size:18px;max-height:145px;overflow:auto;padding-bottom:10px;-webkit-box-shadow:0 0 1px #f0f0f0;box-shadow:0 0 1px #f0f0f0}.v[data-class=v] .vwrap .vemojis i{font-style:normal;padding-top:7px;width:36px;cursor:pointer;text-align:center;display:inline-block;vertical-align:middle}.v[data-class=v] .vwrap .vpreview{padding:7px;-webkit-box-shadow:0 0 1px #f0f0f0;box-shadow:0 0 1px #f0f0f0}.v[data-class=v] .vwrap .vheader .vinput{width:33.33%;border-bottom:1px dashed #dedede}.v[data-class=v] .vwrap .vheader.item2 .vinput{width:50%}.v[data-class=v] .vwrap .vheader.item1 .vinput{width:25%}.v[data-class=v] .vwrap .vheader .vinput:focus{border-bottom-color:#eb5055}@media screen and (max-width:520px){.v[data-class=v] .vwrap .vheader.item2 .vinput,.v[data-class=v] .vwrap .vheader .vinput{width:100%}}.v[data-class=v] .vpower{color:#999;font-size:.75em;padding:.5em 0}.v[data-class=v] .vpower a{font-size:.75em}.v[data-class=v] .vcount{padding:5px;font-weight:600;font-size:1.25em}.v[data-class=v] ol,.v[data-class=v] ul{padding:0;margin-left:1.25em}.v[data-class=v] .txt-center{text-align:center}.v[data-class=v] .txt-right{text-align:right}.v[data-class=v] .pd5{padding:5px}.v[data-class=v] .pd10{padding:10px}.v[data-class=v] .veditor{width:100%;min-height:8.75em;font-size:.875em;background:transparent;resize:vertical;-webkit-transition:all .25s ease;transition:all .25s ease}.v[data-class=v] .vbtn{-webkit-transition-duration:.4s;transition-duration:.4s;text-align:center;color:#555;border:1px solid #ededed;border-radius:.3em;display:inline-block;background:transparent;margin-bottom:0;font-weight:400;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;white-space:nowrap;padding:.5em 1.25em;font-size:.875em;line-height:1.42857143;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none}.v[data-class=v] .vbtn+.vbtn{margin-left:1.25em}.v[data-class=v] .vbtn:active,.v[data-class=v] .vbtn:hover{color:#3090e4;border-color:#3090e4}.v[data-class=v] .vbtn:disabled{border-color:#e1e1e1;color:#e1e1e1;background-color:#fdfafa;cursor:not-allowed}.v[data-class=v] .vempty{padding:1.25em;text-align:center;color:#555;overflow:auto}.v[data-class=v] .vsys{display:inline-block;padding:.2em .5em;font-size:.75em;border-radius:.2em;margin-right:.3em}@media screen and (max-width:520px){.v[data-class=v] .vsys{display:none}}.v[data-class=v] .vcards{width:100%}.v[data-class=v] .vcards .vcard{padding-top:1.25em;position:relative;display:block}.v[data-class=v] .vcards .vcard:after{content:"";clear:both;display:block}.v[data-class=v] .vcards .vcard .vimg{width:3.125em;height:3.125em;float:left;border-radius:50%;margin-right:.7525em;border:1px solid #f5f5f5;padding:.125em}@media screen and (max-width:720px){.v[data-class=v] .vcards .vcard .vimg{width:2.5em;height:2.5em}}.v[data-class=v] .vcards .vcard .vhead{line-height:1.5;margin-top:0}.v[data-class=v] .vcards .vcard .vhead .vnick{position:relative;font-size:.875em;font-weight:500;margin-right:.4em;cursor:pointer;text-decoration:none;display:inline-block}.vtag{font-size:12px;display:inline-block;line-height:20px;border-radius:2px;color:#fff;padding:0 5px;position:inherit;}.vtag.vmaster{background:#ffa51e}.vtag.vfriend{background:#6cf}.vtag.vvisitor{background:#828282}.v[data-class=v] .vcards .vcard .vhead .vnick:hover{color:#d7191a}.v[data-class=v] .vcards .vcard .vh{overflow:hidden;padding-bottom:.5em;border-bottom:1px dashed #f5f5f5}.v[data-class=v] .vcards .vcard .vh .vtime{font-size:.75em;margin-right:.875em}.v[data-class=v] .vcards .vcard .vh .vmeta{line-height:1;position:relative}.v[data-class=v] .vcards .vcard .vh .vmeta .vat{font-size:.8125em;color:#ef2f11;cursor:pointer;float:right}.v[data-class=v] .vcards .vcard:last-child .vh{border-bottom:none}.v[data-class=v] .vcards .vcard .vcontent{word-wrap:break-word;word-break:break-all;font-size:.875em;line-height:2;position:relative;margin-bottom:.75em;padding-top:.625em}.v[data-class=v] .vcards .vcard .vcontent.expand{cursor:pointer;max-height:8em;overflow:hidden}.v[data-class=v] .vcards .vcard .vcontent.expand:before{display:block;content:"";position:absolute;width:100%;left:0;top:0;bottom:3.15em;background:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,0)),to(hsla(0,0%,100%,.9)));background:linear-gradient(180deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.9));z-index:999}.v[data-class=v] .vcards .vcard .vcontent.expand:after{display:block;content:attr(data-expand);text-align:center;color:#828586;position:absolute;width:100%;height:3.15em;line-height:3.15em;left:0;bottom:0;z-index:999;background:hsla(0,0%,100%,.9)}.v[data-class=v] .vcards .vcard .vquote{padding-left:1em;border-left:1px dashed hsla(0,0%,93%,.5)}.v[data-class=v] .vcards .vcard .vquote .vimg{width:2.225em;height:2.225em}.v[data-class=v] .vpage .vmore{margin:1em 0}.v[data-class=v] .clear{content:"";display:block;clear:both}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes pulse{50%{background:#dcdcdc}}@keyframes pulse{50%{background:#dcdcdc}}.v[data-class=v] .vspinner{width:22px;height:22px;display:inline-block;border:6px double #a0a0a0;border-top-color:transparent;border-bottom-color:transparent;border-radius:50%;-webkit-animation:spin 1s infinite linear;animation:spin 1s infinite linear;position:relative;vertical-align:middle;margin:0 5px}.dark .v[data-class=v] .status-bar,.dark .v[data-class=v] .veditor,.dark .v[data-class=v] .vinput,.dark .v[data-class=v] p,.dark .v[data-class=v] pre code,.night .v[data-class=v] .status-bar,.night .v[data-class=v] .veditor,.night .v[data-class=v] .vinput,.night .v[data-class=v] p,.night .v[data-class=v] pre code,.theme__dark .v[data-class=v] .status-bar,.theme__dark .v[data-class=v] .veditor,.theme__dark .v[data-class=v] .vinput,.theme__dark .v[data-class=v] p,.theme__dark .v[data-class=v] pre code,[data-theme=dark] .v[data-class=v] .status-bar,[data-theme=dark] .v[data-class=v] .veditor,[data-theme=dark] .v[data-class=v] .vinput,[data-theme=dark] .v[data-class=v] p,[data-theme=dark] .v[data-class=v] pre code{color:#b2b2b5}.dark .v[data-class=v] .vsys,.dark .v[data-class=v] .vtime,.night .v[data-class=v] .vsys,.night .v[data-class=v] .vtime,.theme__dark .v[data-class=v] .vsys,.theme__dark .v[data-class=v] .vtime,[data-theme=dark] .v[data-class=v] .vsys,[data-theme=dark] .v[data-class=v] .vtime{color:#929298}.dark .v[data-class=v] code,.dark .v[data-class=v] pre,.dark .v[data-class=v] pre code,.night .v[data-class=v] code,.night .v[data-class=v] pre,.night .v[data-class=v] pre code,.theme__dark .v[data-class=v] code,.theme__dark .v[data-class=v] pre,.theme__dark .v[data-class=v] pre code,[data-theme=dark] .v[data-class=v] code,[data-theme=dark] .v[data-class=v] pre,[data-theme=dark] .v[data-class=v] pre code{color:#929298;background-color:#151414}.dark .v[data-class=v] .vwrap,.night .v[data-class=v] .vwrap,.theme__dark .v[data-class=v] .vwrap,[data-theme=dark] .v[data-class=v] .vwrap{border-color:#b2b2b5}.dark .v[data-class=v] .vicon,.night .v[data-class=v] .vicon,.theme__dark .v[data-class=v] .vicon,[data-theme=dark] .v[data-class=v] .vicon{fill:#b2b2b5}.dark .v[data-class=v] .vicon.actived,.night .v[data-class=v] .vicon.actived,.theme__dark .v[data-class=v] .vicon.actived,[data-theme=dark] .v[data-class=v] .vicon.actived{fill:#66b1ff}.dark .v[data-class=v] .vbtn,.night .v[data-class=v] .vbtn,.theme__dark .v[data-class=v] .vbtn,[data-theme=dark] .v[data-class=v] .vbtn{color:#b2b2b5;border-color:#b2b2b5}.dark .v[data-class=v] .vbtn:hover,.night .v[data-class=v] .vbtn:hover,.theme__dark .v[data-class=v] .vbtn:hover,[data-theme=dark] .v[data-class=v] .vbtn:hover{color:#66b1ff;border-color:#66b1ff}.dark .v[data-class=v] a:hover,.night .v[data-class=v] a:hover,.theme__dark .v[data-class=v] a:hover,[data-theme=dark] .v[data-class=v] a:hover{color:#d7191a}.dark .v[data-class=v] .vcards .vcard .vcontent.expand:before,.night .v[data-class=v] .vcards .vcard .vcontent.expand:before,.theme__dark .v[data-class=v] .vcards .vcard .vcontent.expand:before,[data-theme=dark] .v[data-class=v] .vcards .vcard .vcontent.expand:before{background:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.3)),to(rgba(0,0,0,.7)));background:linear-gradient(180deg,rgba(0,0,0,.3),rgba(0,0,0,.7))}.dark .v[data-class=v] .vcards .vcard .vcontent.expand:after,.night .v[data-class=v] .vcards .vcard .vcontent.expand:after,.theme__dark .v[data-class=v] .vcards .vcard .vcontent.expand:after,[data-theme=dark] .v[data-class=v] .vcards .vcard .vcontent.expand:after{background:rgba(0,0,0,.7)}@media (prefers-color-scheme:dark){.v[data-class=v] .status-bar,.v[data-class=v] .veditor,.v[data-class=v] .vinput,.v[data-class=v] p,.v[data-class=v] pre code{color:#b2b2b5}.v[data-class=v] .vsys,.v[data-class=v] .vtime{color:#929298}.v[data-class=v] code,.v[data-class=v] pre,.v[data-class=v] pre code{color:#929298;background-color:#151414}.v[data-class=v] .vwrap{border-color:#b2b2b5}.v[data-class=v] .vicon{fill:#b2b2b5}.v[data-class=v] .vicon.actived{fill:#66b1ff}.v[data-class=v] .vbtn{color:#b2b2b5;border-color:#b2b2b5}.v[data-class=v] .vbtn:hover{color:#66b1ff;border-color:#66b1ff}.v[data-class=v] a:hover{color:#d7191a}.v[data-class=v] .vcards .vcard .vcontent.expand:before{background:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.3)),to(rgba(0,0,0,.7)));background:linear-gradient(180deg,rgba(0,0,0,.3),rgba(0,0,0,.7))}.v[data-class=v] .vcards .vcard .vcontent.expand:after{background:rgba(0,0,0,.7)}}',
			""
		])
	}, function(e) {
		function t(e, t) {
			var a = e[1] || "",
				n = e[3];
			return n ? t && "function" == typeof btoa ? (e =
				"/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(
					n)))) + " */", [a].concat(n.sources.map((function(e) {
					return "/*# sourceURL=" + n.sourceRoot + e + " */"
				}))).concat([e]).join("\n")) : [a].join("\n") : a
		}
		e.exports = function(e) {
			var n = [];
			return n.toString = function() {
				return this.map((function(n) {
					var a = t(n, e);
					return n[2] ? "@media " + n[2] + "{" + a + "}" : a
				})).join("")
			}, n.i = function(e, t) {
				"string" == typeof e && (e = [
					[null, e, ""]
				]);
				for (var a, r = {}, i = 0; i < this.length; i++) "number" == typeof(a = this[i][0]) && (r[a] = !0);
				for (i = 0; i < e.length; i++) "number" == typeof(a = e[i])[0] && r[a[0]] || (t && !a[2] ? a[2] = t : t && (
					a[2] = "(" + a[2] + ") and (" + t + ")"), n.push(a))
			}, n
		}
	}, function(i, o, d) {
		function s(t, a) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n],
					e = m[i.id];
				if (e) {
					e.refs++;
					for (var o = 0; o < e.parts.length; o++) e.parts[o](i.parts[o]);
					for (; o < i.parts.length; o++) e.parts.push(r(i.parts[o], a))
				} else {
					for (e = [], o = 0; o < i.parts.length; o++) e.push(r(i.parts[o], a));
					m[i.id] = {
						id: i.id,
						refs: 1,
						parts: e
					}
				}
			}
		}

		function b(t, a) {
			for (var n = [], r = {}, e = 0; e < t.length; e++) {
				var i = t[e],
					o = a.base ? i[0] + a.base : i[0];
				i = {
					css: i[1],
					media: i[2],
					sourceMap: i[3]
				}, r[o] ? r[o].parts.push(i) : n.push(r[o] = {
					id: o,
					parts: [i]
				})
			}
			return n
		}

		function c(t, a) {
			var n = v(t.insertInto);
			if (!n) throw Error(
				"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
			);
			var r = w[w.length - 1];
			if ("top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(a, r.nextSibling) : n.appendChild(a) : n.insertBefore(
				a, n.firstChild), w.push(a);
			else {
				if ("bottom" !== t.insertAt) throw Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
				n.appendChild(a)
			}
		}

		function a(e) {
			return null !== e.parentNode && (e.parentNode.removeChild(e), void(0 <= (e = w.indexOf(e)) && w.splice(e, 1)))
		}

		function g(e) {
			var t = document.createElement("style");
			return e.attrs.type = "text/css", u(t, e.attrs), c(e, t), t
		}

		function l(e) {
			var t = document.createElement("link");
			return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", u(t, e.attrs), c(e, t), t
		}

		function u(e, t) {
			Object.keys(t).forEach((function(a) {
				e.setAttribute(a, t[a])
			}))
		}

		function r(e, r) {
			var i;
			if (r.transform && e.css) {
				if (!(i = r.transform(e.css))) return function() {};
				e.css = i
			}
			if (r.singleton) {
				i = x++;
				var o = y || (y = g(r)),
					s = f.bind(null, o, i, !1),
					p = f.bind(null, o, i, !0)
			} else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" ==
				typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (o = l(r), s = n.bind(
					null, o, r), p = function() {
					a(o), o.href && URL.revokeObjectURL(o.href)
				}) : (o = g(r), s = t.bind(null, o), p = function() {
					a(o)
				});
			return s(e),
				function(t) {
					t ? (t.css !== e.css || t.media !== e.media || t.sourceMap !== e.sourceMap) && s(e = t) : p()
				}
		}

		function f(e, t, a, n) {
			a = a ? "" : n.css, e.styleSheet ? e.styleSheet.cssText = A(t, a) : (a = document.createTextNode(a), (n = e.childNodes)[
				t] && e.removeChild(n[t]), n.length ? e.insertBefore(a, n[t]) : e.appendChild(a))
		}

		function t(e, t) {
			var a = t.css;
			if ((t = t.media) && e.setAttribute("media", t), e.styleSheet) e.styleSheet.cssText = a;
			else {
				for (; e.firstChild;) e.removeChild(e.firstChild);
				e.appendChild(document.createTextNode(a))
			}
		}

		function n(t, a, n) {
			var r = n.css;
			n = n.sourceMap;
			var i = void 0 === a.convertToAbsoluteUrls && n;
			(a.convertToAbsoluteUrls || i) && (r = k(r)), n && (r += "\n/*# sourceMappingURL=data:application/json;base64," +
				btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"), a = new Blob([r], {
				type: "text/css"
			}), r = t.href, t.href = URL.createObjectURL(a), r && URL.revokeObjectURL(r)
		}
		var m = {},
			h = function(e) {
				var t;
				return function() {
					return void 0 === t && (t = e.apply(this, arguments)), t
				}
			}((function() {
				return window && document && document.all && !window.atob
			})),
			v = function(e) {
				var t = {};
				return function(a) {
					return void 0 === t[a] && (t[a] = e.call(this, a)), t[a]
				}
			}((function(e) {
				return document.querySelector(e)
			})),
			y = null,
			x = 0,
			w = [],
			k = d(62);
		i.exports = function(t, a) {
			if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw Error(
				"The style-loader cannot be used in a non-browser environment");
			(a = a || {}).attrs = "object" == typeof a.attrs ? a.attrs : {}, a.singleton || (a.singleton = h()), a.insertInto ||
				(a.insertInto = "head"), a.insertAt || (a.insertAt = "bottom");
			var n = b(t, a);
			return s(n, a),
				function(e) {
					for (var t, r = [], i = 0; i < n.length; i++)(t = m[n[i].id]).refs--, r.push(t);
					for (e && s(b(e, a), a), i = 0; i < r.length; i++)
						if (0 === (t = r[i]).refs) {
							for (e = 0; e < t.parts.length; e++) t.parts[e]();
							delete m[t.id]
						}
				}
		};
		var A = function() {
			var e = [];
			return function(t, a) {
				return e[t] = a, e.filter(Boolean).join("\n")
			}
		}()
	}, function(e) {
		e.exports = function(e) {
			var t = "undefined" != typeof window && window.location;
			if (!t) throw Error("fixUrls requires window.location");
			if (!e || "string" != typeof e) return e;
			var n = t.protocol + "//" + t.host,
				a = n + t.pathname.replace(/\/[^\/]*$/, "/");
			return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (function(e, t) {
				return t = t.trim().replace(/^"(.*)"$/, (function(e, t) {
					return t
				})).replace(/^'(.*)'$/, (function(e, t) {
					return t
				})), /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(t) ? e : (r = 0 === t.indexOf("//") ? t : 0 ===
					t.indexOf("/") ? n + t : a + t.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")");
				var r
			}))
		}
	}, function(e, t, a) {
		a(58), e.exports = a(18)
	}])
}));
