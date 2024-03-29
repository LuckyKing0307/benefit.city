(() => {
    var __webpack_modules__ = {
        2: function(module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
 /*! smooth-scroll v16.1.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */            window.Element && !Element.prototype.closest && (Element.prototype.closest = function(e) {
                var t, n = (this.document || this.ownerDocument).querySelectorAll(e), o = this;
                do {
                    for (t = n.length; 0 <= --t && n.item(t) !== o; ) ;
                } while (t < 0 && (o = o.parentElement));
                return o;
            }), function() {
                if ("function" == typeof window.CustomEvent) return;
                function e(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var n = document.createEvent("CustomEvent");
                    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
                }
                e.prototype = window.Event.prototype, window.CustomEvent = e;
            }(), function() {
                for (var r = 0, e = [ "ms", "moz", "webkit", "o" ], t = 0; t < e.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"], 
                window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
                    var n = (new Date).getTime(), o = Math.max(0, 16 - (n - r)), a = window.setTimeout((function() {
                        e(n + o);
                    }), o);
                    return r = n + o, a;
                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                    clearTimeout(e);
                });
            }(), function(e, t) {
                true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return t(e);
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
            }("undefined" != typeof __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof window ? window : this, (function(M) {
                "use strict";
                var q = {
                    ignore: "[data-scroll-ignore]",
                    header: null,
                    topOnEmptyHash: !0,
                    speed: 500,
                    speedAsDuration: !1,
                    durationMax: null,
                    durationMin: null,
                    clip: !0,
                    offset: 0,
                    easing: "easeInOutCubic",
                    customEasing: null,
                    updateURL: !0,
                    popstate: !0,
                    emitEvents: !0
                }, I = function() {
                    var n = {};
                    return Array.prototype.forEach.call(arguments, (function(e) {
                        for (var t in e) {
                            if (!e.hasOwnProperty(t)) return;
                            n[t] = e[t];
                        }
                    })), n;
                }, r = function(e) {
                    "#" === e.charAt(0) && (e = e.substr(1));
                    for (var t, n = String(e), o = n.length, a = -1, r = "", i = n.charCodeAt(0); ++a < o; ) {
                        if (0 === (t = n.charCodeAt(a))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                        1 <= t && t <= 31 || 127 == t || 0 === a && 48 <= t && t <= 57 || 1 === a && 48 <= t && t <= 57 && 45 === i ? r += "\\" + t.toString(16) + " " : r += 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? n.charAt(a) : "\\" + n.charAt(a);
                    }
                    return "#" + r;
                }, F = function() {
                    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
                }, L = function(e) {
                    return e ? (t = e, parseInt(M.getComputedStyle(t).height, 10) + e.offsetTop) : 0;
                    var t;
                }, x = function(e, t, n) {
                    0 === e && document.body.focus(), n || (e.focus(), document.activeElement !== e && (e.setAttribute("tabindex", "-1"), 
                    e.focus(), e.style.outline = "none"), M.scrollTo(0, t));
                }, H = function(e, t, n, o) {
                    if (t.emitEvents && "function" == typeof M.CustomEvent) {
                        var a = new CustomEvent(e, {
                            bubbles: !0,
                            detail: {
                                anchor: n,
                                toggle: o
                            }
                        });
                        document.dispatchEvent(a);
                    }
                };
                return function(o, e) {
                    var b, a, A, O, C = {};
                    C.cancelScroll = function(e) {
                        cancelAnimationFrame(O), O = null, e || H("scrollCancel", b);
                    }, C.animateScroll = function(a, r, e) {
                        C.cancelScroll();
                        var i = I(b || q, e || {}), c = "[object Number]" === Object.prototype.toString.call(a), t = c || !a.tagName ? null : a;
                        if (c || t) {
                            var s = M.pageYOffset;
                            i.header && !A && (A = document.querySelector(i.header));
                            var n, o, u, l, m, d, f, h, p = L(A), g = c ? a : function(e, t, n, o) {
                                var a = 0;
                                if (e.offsetParent) for (;a += e.offsetTop, e = e.offsetParent; ) ;
                                return a = Math.max(a - t - n, 0), o && (a = Math.min(a, F() - M.innerHeight)), 
                                a;
                            }(t, p, parseInt("function" == typeof i.offset ? i.offset(a, r) : i.offset, 10), i.clip), y = g - s, v = F(), w = 0, S = (n = y, 
                            u = (o = i).speedAsDuration ? o.speed : Math.abs(n / 1e3 * o.speed), o.durationMax && u > o.durationMax ? o.durationMax : o.durationMin && u < o.durationMin ? o.durationMin : parseInt(u, 10)), E = function(e) {
                                var t, n, o;
                                l || (l = e), w += e - l, d = s + y * (n = m = 1 < (m = 0 === S ? 0 : w / S) ? 1 : m, 
                                "easeInQuad" === (t = i).easing && (o = n * n), "easeOutQuad" === t.easing && (o = n * (2 - n)), 
                                "easeInOutQuad" === t.easing && (o = n < .5 ? 2 * n * n : (4 - 2 * n) * n - 1), 
                                "easeInCubic" === t.easing && (o = n * n * n), "easeOutCubic" === t.easing && (o = --n * n * n + 1), 
                                "easeInOutCubic" === t.easing && (o = n < .5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1), 
                                "easeInQuart" === t.easing && (o = n * n * n * n), "easeOutQuart" === t.easing && (o = 1 - --n * n * n * n), 
                                "easeInOutQuart" === t.easing && (o = n < .5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n), 
                                "easeInQuint" === t.easing && (o = n * n * n * n * n), "easeOutQuint" === t.easing && (o = 1 + --n * n * n * n * n), 
                                "easeInOutQuint" === t.easing && (o = n < .5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n), 
                                t.customEasing && (o = t.customEasing(n)), o || n), M.scrollTo(0, Math.floor(d)), 
                                function(e, t) {
                                    var n = M.pageYOffset;
                                    if (e == t || n == t || (s < t && M.innerHeight + n) >= v) return C.cancelScroll(!0), 
                                    x(a, t, c), H("scrollStop", i, a, r), !(O = l = null);
                                }(d, g) || (O = M.requestAnimationFrame(E), l = e);
                            };
                            0 === M.pageYOffset && M.scrollTo(0, 0), f = a, h = i, c || history.pushState && h.updateURL && history.pushState({
                                smoothScroll: JSON.stringify(h),
                                anchor: f.id
                            }, document.title, f === document.documentElement ? "#top" : "#" + f.id), "matchMedia" in M && M.matchMedia("(prefers-reduced-motion)").matches ? x(a, Math.floor(g), !1) : (H("scrollStart", i, a, r), 
                            C.cancelScroll(!0), M.requestAnimationFrame(E));
                        }
                    };
                    var t = function(e) {
                        if (!e.defaultPrevented && !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) && "closest" in e.target && (a = e.target.closest(o)) && "a" === a.tagName.toLowerCase() && !e.target.closest(b.ignore) && a.hostname === M.location.hostname && a.pathname === M.location.pathname && /#/.test(a.href)) {
                            var t, n;
                            try {
                                t = r(decodeURIComponent(a.hash));
                            } catch (e) {
                                t = r(a.hash);
                            }
                            if ("#" === t) {
                                if (!b.topOnEmptyHash) return;
                                n = document.documentElement;
                            } else n = document.querySelector(t);
                            (n = n || "#top" !== t ? n : document.documentElement) && (e.preventDefault(), function(e) {
                                if (history.replaceState && e.updateURL && !history.state) {
                                    var t = M.location.hash;
                                    t = t || "", history.replaceState({
                                        smoothScroll: JSON.stringify(e),
                                        anchor: t || M.pageYOffset
                                    }, document.title, t || M.location.href);
                                }
                            }(b), C.animateScroll(n, a));
                        }
                    }, n = function(e) {
                        if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(b)) {
                            var t = history.state.anchor;
                            "string" == typeof t && t && !(t = document.querySelector(r(history.state.anchor))) || C.animateScroll(t, null, {
                                updateURL: !1
                            });
                        }
                    };
                    C.destroy = function() {
                        b && (document.removeEventListener("click", t, !1), M.removeEventListener("popstate", n, !1), 
                        C.cancelScroll(), O = A = a = b = null);
                    };
                    return function() {
                        if (!("querySelector" in document && "addEventListener" in M && "requestAnimationFrame" in M && "closest" in M.Element.prototype)) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                        C.destroy(), b = I(q, e || {}), A = b.header ? document.querySelector(b.header) : null, 
                        document.addEventListener("click", t, !1), b.updateURL && b.popstate && M.addEventListener("popstate", n, !1);
                    }(), C;
                };
            }));
        },
        732: function(module) {
            !function(n, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                "use strict";
                function n() {
                    return n = Object.assign || function(n) {
                        for (var t = 1; t < arguments.length; t++) {
                            var e = arguments[t];
                            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
                        }
                        return n;
                    }, n.apply(this, arguments);
                }
                var t = "undefined" != typeof window, e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), i = t && "IntersectionObserver" in window, o = t && "classList" in document.createElement("p"), a = t && window.devicePixelRatio > 1, r = {
                    elements_selector: ".lazy",
                    container: e || t ? document : null,
                    threshold: 300,
                    thresholds: null,
                    data_src: "src",
                    data_srcset: "srcset",
                    data_sizes: "sizes",
                    data_bg: "bg",
                    data_bg_hidpi: "bg-hidpi",
                    data_bg_multi: "bg-multi",
                    data_bg_multi_hidpi: "bg-multi-hidpi",
                    data_bg_set: "bg-set",
                    data_poster: "poster",
                    class_applied: "applied",
                    class_loading: "loading",
                    class_loaded: "loaded",
                    class_error: "error",
                    class_entered: "entered",
                    class_exited: "exited",
                    unobserve_completed: !0,
                    unobserve_entered: !1,
                    cancel_on_exit: !0,
                    callback_enter: null,
                    callback_exit: null,
                    callback_applied: null,
                    callback_loading: null,
                    callback_loaded: null,
                    callback_error: null,
                    callback_finish: null,
                    callback_cancel: null,
                    use_native: !1,
                    restore_on_error: !1
                }, c = function(t) {
                    return n({}, r, t);
                }, l = function(n, t) {
                    var e, i = "LazyLoad::Initialized", o = new n(t);
                    try {
                        e = new CustomEvent(i, {
                            detail: {
                                instance: o
                            }
                        });
                    } catch (n) {
                        (e = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
                            instance: o
                        });
                    }
                    window.dispatchEvent(e);
                }, u = "src", s = "srcset", d = "sizes", f = "poster", _ = "llOriginalAttrs", g = "data", v = "loading", b = "loaded", m = "applied", p = "error", h = "native", E = "data-", I = "ll-status", y = function(n, t) {
                    return n.getAttribute(E + t);
                }, k = function(n) {
                    return y(n, I);
                }, w = function(n, t) {
                    return function(n, t, e) {
                        var i = "data-ll-status";
                        null !== e ? n.setAttribute(i, e) : n.removeAttribute(i);
                    }(n, 0, t);
                }, A = function(n) {
                    return w(n, null);
                }, L = function(n) {
                    return null === k(n);
                }, O = function(n) {
                    return k(n) === h;
                }, x = [ v, b, m, p ], C = function(n, t, e, i) {
                    n && (void 0 === i ? void 0 === e ? n(t) : n(t, e) : n(t, e, i));
                }, N = function(n, t) {
                    o ? n.classList.add(t) : n.className += (n.className ? " " : "") + t;
                }, M = function(n, t) {
                    o ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
                }, z = function(n) {
                    return n.llTempImage;
                }, T = function(n, t) {
                    if (t) {
                        var e = t._observer;
                        e && e.unobserve(n);
                    }
                }, R = function(n, t) {
                    n && (n.loadingCount += t);
                }, G = function(n, t) {
                    n && (n.toLoadCount = t);
                }, j = function(n) {
                    for (var t, e = [], i = 0; t = n.children[i]; i += 1) "SOURCE" === t.tagName && e.push(t);
                    return e;
                }, D = function(n, t) {
                    var e = n.parentNode;
                    e && "PICTURE" === e.tagName && j(e).forEach(t);
                }, H = function(n, t) {
                    j(n).forEach(t);
                }, V = [ u ], F = [ u, f ], B = [ u, s, d ], J = [ g ], P = function(n) {
                    return !!n[_];
                }, S = function(n) {
                    return n[_];
                }, U = function(n) {
                    return delete n[_];
                }, $ = function(n, t) {
                    if (!P(n)) {
                        var e = {};
                        t.forEach((function(t) {
                            e[t] = n.getAttribute(t);
                        })), n[_] = e;
                    }
                }, q = function(n, t) {
                    if (P(n)) {
                        var e = S(n);
                        t.forEach((function(t) {
                            !function(n, t, e) {
                                e ? n.setAttribute(t, e) : n.removeAttribute(t);
                            }(n, t, e[t]);
                        }));
                    }
                }, K = function(n, t, e) {
                    N(n, t.class_applied), w(n, m), e && (t.unobserve_completed && T(n, t), C(t.callback_applied, n, e));
                }, Q = function(n, t, e) {
                    N(n, t.class_loading), w(n, v), e && (R(e, 1), C(t.callback_loading, n, e));
                }, W = function(n, t, e) {
                    e && n.setAttribute(t, e);
                }, X = function(n, t) {
                    W(n, d, y(n, t.data_sizes)), W(n, s, y(n, t.data_srcset)), W(n, u, y(n, t.data_src));
                }, Y = {
                    IMG: function(n, t) {
                        D(n, (function(n) {
                            $(n, B), X(n, t);
                        })), $(n, B), X(n, t);
                    },
                    IFRAME: function(n, t) {
                        $(n, V), W(n, u, y(n, t.data_src));
                    },
                    VIDEO: function(n, t) {
                        H(n, (function(n) {
                            $(n, V), W(n, u, y(n, t.data_src));
                        })), $(n, F), W(n, f, y(n, t.data_poster)), W(n, u, y(n, t.data_src)), n.load();
                    },
                    OBJECT: function(n, t) {
                        $(n, J), W(n, g, y(n, t.data_src));
                    }
                }, Z = [ "IMG", "IFRAME", "VIDEO", "OBJECT" ], nn = function(n, t) {
                    !t || function(n) {
                        return n.loadingCount > 0;
                    }(t) || function(n) {
                        return n.toLoadCount > 0;
                    }(t) || C(n.callback_finish, t);
                }, tn = function(n, t, e) {
                    n.addEventListener(t, e), n.llEvLisnrs[t] = e;
                }, en = function(n, t, e) {
                    n.removeEventListener(t, e);
                }, on = function(n) {
                    return !!n.llEvLisnrs;
                }, an = function(n) {
                    if (on(n)) {
                        var t = n.llEvLisnrs;
                        for (var e in t) {
                            var i = t[e];
                            en(n, e, i);
                        }
                        delete n.llEvLisnrs;
                    }
                }, rn = function(n, t, e) {
                    !function(n) {
                        delete n.llTempImage;
                    }(n), R(e, -1), function(n) {
                        n && (n.toLoadCount -= 1);
                    }(e), M(n, t.class_loading), t.unobserve_completed && T(n, e);
                }, cn = function(n, t, e) {
                    var i = z(n) || n;
                    on(i) || function(n, t, e) {
                        on(n) || (n.llEvLisnrs = {});
                        var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
                        tn(n, i, t), tn(n, "error", e);
                    }(i, (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            rn(t, e, i), N(t, e.class_loaded), w(t, b), C(e.callback_loaded, t, i), o || nn(e, i);
                        }(0, n, t, e), an(i);
                    }), (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            rn(t, e, i), N(t, e.class_error), w(t, p), C(e.callback_error, t, i), e.restore_on_error && q(t, B), 
                            o || nn(e, i);
                        }(0, n, t, e), an(i);
                    }));
                }, ln = function(n, t, e) {
                    !function(n) {
                        return Z.indexOf(n.tagName) > -1;
                    }(n) ? function(n, t, e) {
                        !function(n) {
                            n.llTempImage = document.createElement("IMG");
                        }(n), cn(n, t, e), function(n) {
                            P(n) || (n[_] = {
                                backgroundImage: n.style.backgroundImage
                            });
                        }(n), function(n, t, e) {
                            var i = y(n, t.data_bg), o = y(n, t.data_bg_hidpi), r = a && o ? o : i;
                            r && (n.style.backgroundImage = 'url("'.concat(r, '")'), z(n).setAttribute(u, r), 
                            Q(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var i = y(n, t.data_bg_multi), o = y(n, t.data_bg_multi_hidpi), r = a && o ? o : i;
                            r && (n.style.backgroundImage = r, K(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var i = y(n, t.data_bg_set);
                            if (i) {
                                var o = i.split("|"), a = o.map((function(n) {
                                    return "image-set(".concat(n, ")");
                                }));
                                n.style.backgroundImage = a.join(), "" === n.style.backgroundImage && (a = o.map((function(n) {
                                    return "-webkit-image-set(".concat(n, ")");
                                })), n.style.backgroundImage = a.join()), K(n, t, e);
                            }
                        }(n, t, e);
                    }(n, t, e) : function(n, t, e) {
                        cn(n, t, e), function(n, t, e) {
                            var i = Y[n.tagName];
                            i && (i(n, t), Q(n, t, e));
                        }(n, t, e);
                    }(n, t, e);
                }, un = function(n) {
                    n.removeAttribute(u), n.removeAttribute(s), n.removeAttribute(d);
                }, sn = function(n) {
                    D(n, (function(n) {
                        q(n, B);
                    })), q(n, B);
                }, dn = {
                    IMG: sn,
                    IFRAME: function(n) {
                        q(n, V);
                    },
                    VIDEO: function(n) {
                        H(n, (function(n) {
                            q(n, V);
                        })), q(n, F), n.load();
                    },
                    OBJECT: function(n) {
                        q(n, J);
                    }
                }, fn = function(n, t) {
                    (function(n) {
                        var t = dn[n.tagName];
                        t ? t(n) : function(n) {
                            if (P(n)) {
                                var t = S(n);
                                n.style.backgroundImage = t.backgroundImage;
                            }
                        }(n);
                    })(n), function(n, t) {
                        L(n) || O(n) || (M(n, t.class_entered), M(n, t.class_exited), M(n, t.class_applied), 
                        M(n, t.class_loading), M(n, t.class_loaded), M(n, t.class_error));
                    }(n, t), A(n), U(n);
                }, _n = [ "IMG", "IFRAME", "VIDEO" ], gn = function(n) {
                    return n.use_native && "loading" in HTMLImageElement.prototype;
                }, vn = function(n, t, e) {
                    n.forEach((function(n) {
                        return function(n) {
                            return n.isIntersecting || n.intersectionRatio > 0;
                        }(n) ? function(n, t, e, i) {
                            var o = function(n) {
                                return x.indexOf(k(n)) >= 0;
                            }(n);
                            w(n, "entered"), N(n, e.class_entered), M(n, e.class_exited), function(n, t, e) {
                                t.unobserve_entered && T(n, e);
                            }(n, e, i), C(e.callback_enter, n, t, i), o || ln(n, e, i);
                        }(n.target, n, t, e) : function(n, t, e, i) {
                            L(n) || (N(n, e.class_exited), function(n, t, e, i) {
                                e.cancel_on_exit && function(n) {
                                    return k(n) === v;
                                }(n) && "IMG" === n.tagName && (an(n), function(n) {
                                    D(n, (function(n) {
                                        un(n);
                                    })), un(n);
                                }(n), sn(n), M(n, e.class_loading), R(i, -1), A(n), C(e.callback_cancel, n, t, i));
                            }(n, t, e, i), C(e.callback_exit, n, t, i));
                        }(n.target, n, t, e);
                    }));
                }, bn = function(n) {
                    return Array.prototype.slice.call(n);
                }, mn = function(n) {
                    return n.container.querySelectorAll(n.elements_selector);
                }, pn = function(n) {
                    return function(n) {
                        return k(n) === p;
                    }(n);
                }, hn = function(n, t) {
                    return function(n) {
                        return bn(n).filter(L);
                    }(n || mn(t));
                }, En = function(n, e) {
                    var o = c(n);
                    this._settings = o, this.loadingCount = 0, function(n, t) {
                        i && !gn(n) && (t._observer = new IntersectionObserver((function(e) {
                            vn(e, n, t);
                        }), function(n) {
                            return {
                                root: n.container === document ? null : n.container,
                                rootMargin: n.thresholds || n.threshold + "px"
                            };
                        }(n)));
                    }(o, this), function(n, e) {
                        t && (e._onlineHandler = function() {
                            !function(n, t) {
                                var e;
                                (e = mn(n), bn(e).filter(pn)).forEach((function(t) {
                                    M(t, n.class_error), A(t);
                                })), t.update();
                            }(n, e);
                        }, window.addEventListener("online", e._onlineHandler));
                    }(o, this), this.update(e);
                };
                return En.prototype = {
                    update: function(n) {
                        var t, o, a = this._settings, r = hn(n, a);
                        G(this, r.length), !e && i ? gn(a) ? function(n, t, e) {
                            n.forEach((function(n) {
                                -1 !== _n.indexOf(n.tagName) && function(n, t, e) {
                                    n.setAttribute("loading", "lazy"), cn(n, t, e), function(n, t) {
                                        var e = Y[n.tagName];
                                        e && e(n, t);
                                    }(n, t), w(n, h);
                                }(n, t, e);
                            })), G(e, 0);
                        }(r, a, this) : (o = r, function(n) {
                            n.disconnect();
                        }(t = this._observer), function(n, t) {
                            t.forEach((function(t) {
                                n.observe(t);
                            }));
                        }(t, o)) : this.loadAll(r);
                    },
                    destroy: function() {
                        this._observer && this._observer.disconnect(), t && window.removeEventListener("online", this._onlineHandler), 
                        mn(this._settings).forEach((function(n) {
                            U(n);
                        })), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, 
                        delete this.toLoadCount;
                    },
                    loadAll: function(n) {
                        var t = this, e = this._settings;
                        hn(n, e).forEach((function(n) {
                            T(n, t), ln(n, e, t);
                        }));
                    },
                    restoreAll: function() {
                        var n = this._settings;
                        mn(n).forEach((function(t) {
                            fn(t, n);
                        }));
                    }
                }, En.load = function(n, t) {
                    var e = c(t);
                    ln(n, e);
                }, En.resetStatus = function(n) {
                    A(n);
                }, t && function(n, t) {
                    if (t) if (t.length) for (var e, i = 0; e = t[i]; i += 1) l(n, e); else l(n, t);
                }(En, window.lazyLoadOptions), En;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        __webpack_require__.g = function() {
            if (typeof globalThis === "object") return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if (typeof window === "object") return window;
            }
        }();
    })();
    (() => {
        "use strict";
        const flsModules = {
            mobile: window.matchMedia("(max-width: 1199px)").matches,
            desktop: window.matchMedia("(min-width: 1200px)").matches
        };
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        let isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function() {
                return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
            }
        };
        function addTouchClass() {
            if (isMobile.any()) document.documentElement.classList.add("touch");
        }
        function addLoadedClass() {
            window.addEventListener("load", (function() {
                setTimeout((function() {
                    document.documentElement.classList.add("loaded");
                }), 0);
            }));
        }
        function getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function menuInit() {
            let burgerBtn = document.querySelector(".burger-btn");
            let mobileMenu = document.getElementById("mobile-menu");
            if (burgerBtn && mobileMenu) {
                document.addEventListener("click", (function(e) {
                    if (bodyLockStatus && e.target.closest(".burger-btn")) {
                        bodyLockToggle();
                        document.documentElement.classList.toggle("menu-open");
                        if (e.target.getAttribute("aria-expanded") == "false") e.target.setAttribute("aria-expanded", "true"); else e.target.setAttribute("aria-expanded", "false");
                    }
                }));
                window.addEventListener("resize", (function(e) {
                    if (bodyLockStatus && window.matchMedia("(min-width: 75rem)").matches) {
                        bodyUnlock();
                        document.documentElement.classList.remove("menu-open");
                        burgerBtn.setAttribute("aria-expanded", "false");
                    }
                }));
                setTimeout((() => {
                    mobileMenu.classList.remove("hide");
                }), 1e3);
            }
        }
        function menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        function rootClass() {
            function setClass() {
                const header = document.querySelector("header.header"), rootHeight = document.querySelectorAll("[data-rootheight]");
                document.documentElement.style.setProperty("--vh", `${window.innerHeight * .01}px`);
                document.documentElement.style.setProperty("--head-height", header ? `${header.scrollHeight}px` : 0);
                document.documentElement.style.setProperty("--window-height", `${window.innerHeight}px`);
                document.documentElement.style.setProperty("--scroll-bar-width", `${window.innerWidth - document.documentElement.offsetWidth}px`);
                for (let i = 0; i < rootHeight.length; i++) {
                    const el = rootHeight[i], elValue = el.dataset.rootheight;
                    if (elValue) document.documentElement.style.setProperty(elValue, (el.offsetHeight > 500 ? 492 : el.offsetHeight) + "px");
                }
            }
            window.addEventListener("load", setClass);
            window.addEventListener("resize", setClass);
        }
        function FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        class Popup {
            constructor(options) {
                let config = {
                    logging: true,
                    init: true,
                    attributeOpenButton: "data-popup",
                    attributeCloseButton: "data-close",
                    youtubeAttribute: "data-popup-youtube",
                    fixElementSelector: "[data-lp]",
                    youtubePlaceAttribute: "data-popup-youtube-place",
                    setAutoplayYoutube: true,
                    classes: {
                        popup: "popup",
                        popupContent: "popup__content",
                        popupActive: "popup_show",
                        bodyActive: "popup-show"
                    },
                    focusCatch: true,
                    closeEsc: true,
                    bodyLock: true,
                    hashSettings: {
                        location: false,
                        goHash: false
                    },
                    on: {
                        beforeOpen: function() {},
                        afterOpen: function() {},
                        beforeClose: function() {},
                        afterClose: function() {}
                    }
                };
                this.youTubeCode;
                this.isOpen = false;
                this.targetOpen = {
                    selector: false,
                    element: false
                };
                this.previousOpen = {
                    selector: false,
                    element: false
                };
                this.lastClosed = {
                    selector: false,
                    element: false
                };
                this._dataValue = false;
                this.hash = false;
                this._reopen = false;
                this._selectorOpen = false;
                this.lastFocusEl = false;
                this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
                this.options = {
                    ...config,
                    ...options,
                    classes: {
                        ...config.classes,
                        ...options?.classes
                    },
                    hashSettings: {
                        ...config.hashSettings,
                        ...options?.hashSettings
                    },
                    on: {
                        ...config.on,
                        ...options?.on
                    }
                };
                this.bodyLock = false;
                this.options.init ? this.initPopups() : null;
            }
            initPopups() {
                this.eventsPopup();
                let popups = document.querySelectorAll(".popup");
                if (popups.length > 0) for (let index = 0; index < popups.length; index++) {
                    const el = popups[index];
                    el.style.display = "block";
                }
            }
            eventsPopup() {
                document.addEventListener("click", function(e) {
                    const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
                    if (buttonOpen) {
                        e.preventDefault();
                        this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                        this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ? buttonOpen.getAttribute(this.options.youtubeAttribute) : null;
                        if (this._dataValue !== "error") {
                            if (!this.isOpen) this.lastFocusEl = buttonOpen;
                            this.targetOpen.selector = `${this._dataValue}`;
                            this._selectorOpen = true;
                            this.open();
                            return;
                        } else this.popupLogging(`Oh oh, attribute y is not filled ${buttonOpen.classList}`);
                        return;
                    }
                    const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
                    if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    if (this.options.closeEsc && e.which == 27 && e.code === "Escape" && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                    if (this.options.focusCatch && e.which == 9 && this.isOpen) {
                        this._focusCatch(e);
                        return;
                    }
                }.bind(this));
                if (this.options.hashSettings.goHash) {
                    window.addEventListener("hashchange", function() {
                        if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
                    }.bind(this));
                    window.addEventListener("load", function() {
                        if (window.location.hash) this._openToHash();
                    }.bind(this));
                }
            }
            open(selectorValue) {
                if (bodyLockStatus) {
                    this.bodyLock = document.documentElement.classList.contains("lock") && !this.isOpen ? true : false;
                    if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") {
                        this.targetOpen.selector = selectorValue;
                        this._selectorOpen = true;
                    }
                    if (this.isOpen) {
                        this._reopen = true;
                        this.close();
                    }
                    if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                    if (!this._reopen) this.previousActiveElement = document.activeElement;
                    this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                    if (this.targetOpen.element) {
                        if (this.youTubeCode) {
                            const codeVideo = this.youTubeCode;
                            const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
                            const iframe = document.createElement("iframe");
                            iframe.className = "video-iframe";
                            iframe.setAttribute("allowfullscreen", "");
                            const autoplay = this.options.setAutoplayYoutube ? "autoplay" : "";
                            iframe.setAttribute("allow", `${autoplay}; encrypted-media`);
                            iframe.setAttribute("src", urlVideo);
                            if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
                                this.targetOpen.element.querySelector(".popup__text").setAttribute(`${this.options.youtubePlaceAttribute}`, "");
                            }
                            this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
                        }
                        if (this.options.hashSettings.location) {
                            this._getHash();
                            this._setHash();
                        }
                        this.options.on.beforeOpen(this);
                        document.dispatchEvent(new CustomEvent("beforePopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.targetOpen.element.classList.add(this.options.classes.popupActive);
                        document.documentElement.classList.add(this.options.classes.bodyActive);
                        if (!this._reopen) !this.bodyLock ? bodyLock() : null; else this._reopen = false;
                        this.targetOpen.element.removeAttribute("style");
                        this.targetOpen.element.setAttribute("aria-hidden", "false");
                        this.previousOpen.selector = this.targetOpen.selector;
                        this.previousOpen.element = this.targetOpen.element;
                        this._selectorOpen = false;
                        this.isOpen = true;
                        setTimeout((() => {
                            this._focusTrap();
                        }), 50);
                        this.options.on.afterOpen(this);
                        document.dispatchEvent(new CustomEvent("afterPopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                    } else this.popupLogging(`Oh oh, there is no such popup. Check the correctness of the input.`);
                }
            }
            close(selectorValue) {
                if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") this.previousOpen.selector = selectorValue;
                if (!this.isOpen || !bodyLockStatus) return;
                this.options.on.beforeClose(this);
                document.dispatchEvent(new CustomEvent("beforePopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                if (this.youTubeCode) if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = "";
                this.previousOpen.element.classList.remove(this.options.classes.popupActive);
                this.previousOpen.element.setAttribute("aria-hidden", "true");
                if (!this._reopen) {
                    document.documentElement.classList.remove(this.options.classes.bodyActive);
                    !this.bodyLock ? bodyUnlock() : null;
                    this.isOpen = false;
                }
                this._removeHash();
                if (this._selectorOpen) {
                    this.lastClosed.selector = this.previousOpen.selector;
                    this.lastClosed.element = this.previousOpen.element;
                }
                this.options.on.afterClose(this);
                document.dispatchEvent(new CustomEvent("afterPopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                setTimeout((() => {
                    this._focusTrap();
                }), 50);
            }
            _getHash() {
                if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
            }
            _openToHash() {
                let classInHash = document.querySelector(`.${window.location.hash.replace("#", "")}`) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
                const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace(".", "#")}"]`);
                if (buttons && classInHash) this.open(classInHash);
            }
            _setHash() {
                history.pushState("", "", this.hash);
            }
            _removeHash() {
                history.pushState("", "", window.location.href.split("#")[0]);
            }
            _focusCatch(e) {
                const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
                const focusArray = Array.prototype.slice.call(focusable);
                const focusedIndex = focusArray.indexOf(document.activeElement);
                if (e.shiftKey && focusedIndex === 0) {
                    focusArray[focusArray.length - 1].focus();
                    e.preventDefault();
                }
                if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                    focusArray[0].focus();
                    e.preventDefault();
                }
            }
            _focusTrap() {
                const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
                if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
            }
            popupLogging(message) {
                this.options.logging ? FLS(`[Popup MSG]: ${message}`) : null;
            }
        }
        flsModules.popup = new Popup({});
        function _assertThisInitialized(self) {
            if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return self;
        }
        function _inheritsLoose(subClass, superClass) {
            subClass.prototype = Object.create(superClass.prototype);
            subClass.prototype.constructor = subClass;
            subClass.__proto__ = superClass;
        }
        /*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/        var _suppressOverwrites, _reverting, _context, _globalTimeline, _win, _coreInitted, _doc, _coreReady, _lastRenderedFrame, _quickTween, _tickerActive, _config = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        }, _defaults = {
            duration: .5,
            overwrite: false,
            delay: 0
        }, _bigNum = 1e8, _tinyNum = 1 / _bigNum, _2PI = Math.PI * 2, _HALF_PI = _2PI / 4, _gsID = 0, _sqrt = Math.sqrt, _cos = Math.cos, _sin = Math.sin, _isString = function _isString(value) {
            return typeof value === "string";
        }, _isFunction = function _isFunction(value) {
            return typeof value === "function";
        }, _isNumber = function _isNumber(value) {
            return typeof value === "number";
        }, _isUndefined = function _isUndefined(value) {
            return typeof value === "undefined";
        }, _isObject = function _isObject(value) {
            return typeof value === "object";
        }, _isNotFalse = function _isNotFalse(value) {
            return value !== false;
        }, _windowExists = function _windowExists() {
            return typeof window !== "undefined";
        }, _isFuncOrString = function _isFuncOrString(value) {
            return _isFunction(value) || _isString(value);
        }, _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {}, _isArray = Array.isArray, _strictNumExp = /(?:-?\.?\d|\.)+/gi, _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, _relExp = /[+-]=-?[.\d]+/, _delimitedValueExp = /[^,'"\[\]\s]+/gi, _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, _globals = {}, _installScope = {}, _install = function _install(scope) {
            return (_installScope = _merge(scope, _globals)) && gsap;
        }, _missingPlugin = function _missingPlugin(property, value) {
            return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
        }, _warn = function _warn(message, suppress) {
            return !suppress && console.warn(message);
        }, _addGlobal = function _addGlobal(name, obj) {
            return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
        }, _emptyFunc = function _emptyFunc() {
            return 0;
        }, _startAtRevertConfig = {
            suppressEvents: true,
            isStart: true,
            kill: false
        }, _revertConfigNoKill = {
            suppressEvents: true,
            kill: false
        }, _revertConfig = {
            suppressEvents: true
        }, _reservedProps = {}, _lazyTweens = [], _lazyLookup = {}, _plugins = {}, _effects = {}, _nextGCFrame = 30, _harnessPlugins = [], _callbackNames = "", _harness = function _harness(targets) {
            var harnessPlugin, i, target = targets[0];
            _isObject(target) || _isFunction(target) || (targets = [ targets ]);
            if (!(harnessPlugin = (target._gsap || {}).harness)) {
                i = _harnessPlugins.length;
                while (i-- && !_harnessPlugins[i].targetTest(target)) ;
                harnessPlugin = _harnessPlugins[i];
            }
            i = targets.length;
            while (i--) targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
            return targets;
        }, _getCache = function _getCache(target) {
            return target._gsap || _harness(toArray(target))[0]._gsap;
        }, _getProperty = function _getProperty(target, property, v) {
            return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
        }, _forEachName = function _forEachName(names, func) {
            return (names = names.split(",")).forEach(func) || names;
        }, _round = function _round(value) {
            return Math.round(value * 1e5) / 1e5 || 0;
        }, _roundPrecise = function _roundPrecise(value) {
            return Math.round(value * 1e7) / 1e7 || 0;
        }, _parseRelative = function _parseRelative(start, value) {
            var operator = value.charAt(0), end = parseFloat(value.substr(2));
            start = parseFloat(start);
            return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
        }, _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
            var l = toFind.length, i = 0;
            for (;toSearch.indexOf(toFind[i]) < 0 && ++i < l; ) ;
            return i < l;
        }, _lazyRender = function _lazyRender() {
            var i, tween, l = _lazyTweens.length, a = _lazyTweens.slice(0);
            _lazyLookup = {};
            _lazyTweens.length = 0;
            for (i = 0; i < l; i++) {
                tween = a[i];
                tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
            }
        }, _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
            _lazyTweens.length && !_reverting && _lazyRender();
            animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
            _lazyTweens.length && !_reverting && _lazyRender();
        }, _numericIfPossible = function _numericIfPossible(value) {
            var n = parseFloat(value);
            return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
        }, _passThrough = function _passThrough(p) {
            return p;
        }, _setDefaults = function _setDefaults(obj, defaults) {
            for (var p in defaults) p in obj || (obj[p] = defaults[p]);
            return obj;
        }, _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
            return function(obj, defaults) {
                for (var p in defaults) p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
            };
        }, _merge = function _merge(base, toMerge) {
            for (var p in toMerge) base[p] = toMerge[p];
            return base;
        }, _mergeDeep = function _mergeDeep(base, toMerge) {
            for (var p in toMerge) p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
            return base;
        }, _copyExcluding = function _copyExcluding(obj, excluding) {
            var p, copy = {};
            for (p in obj) p in excluding || (copy[p] = obj[p]);
            return copy;
        }, _inheritDefaults = function _inheritDefaults(vars) {
            var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
            if (_isNotFalse(vars.inherit)) while (parent) {
                func(vars, parent.vars.defaults);
                parent = parent.parent || parent._dp;
            }
            return vars;
        }, _arraysMatch = function _arraysMatch(a1, a2) {
            var i = a1.length, match = i === a2.length;
            while (match && i-- && a1[i] === a2[i]) ;
            return i < 0;
        }, _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
            if (firstProp === void 0) firstProp = "_first";
            if (lastProp === void 0) lastProp = "_last";
            var t, prev = parent[lastProp];
            if (sortBy) {
                t = child[sortBy];
                while (prev && prev[sortBy] > t) prev = prev._prev;
            }
            if (prev) {
                child._next = prev._next;
                prev._next = child;
            } else {
                child._next = parent[firstProp];
                parent[firstProp] = child;
            }
            if (child._next) child._next._prev = child; else parent[lastProp] = child;
            child._prev = prev;
            child.parent = child._dp = parent;
            return child;
        }, _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
            if (firstProp === void 0) firstProp = "_first";
            if (lastProp === void 0) lastProp = "_last";
            var prev = child._prev, next = child._next;
            if (prev) prev._next = next; else if (parent[firstProp] === child) parent[firstProp] = next;
            if (next) next._prev = prev; else if (parent[lastProp] === child) parent[lastProp] = prev;
            child._next = child._prev = child.parent = null;
        }, _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
            child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
            child._act = 0;
        }, _uncache = function _uncache(animation, child) {
            if (animation && (!child || child._end > animation._dur || child._start < 0)) {
                var a = animation;
                while (a) {
                    a._dirty = 1;
                    a = a.parent;
                }
            }
            return animation;
        }, _recacheAncestors = function _recacheAncestors(animation) {
            var parent = animation.parent;
            while (parent && parent.parent) {
                parent._dirty = 1;
                parent.totalDuration();
                parent = parent.parent;
            }
            return animation;
        }, _rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
            return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
        }, _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
            return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
        }, _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
            return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
        }, _animationCycle = function _animationCycle(tTime, cycleDuration) {
            var whole = Math.floor(tTime /= cycleDuration);
            return tTime && whole === tTime ? whole - 1 : whole;
        }, _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
            return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
        }, _setEnd = function _setEnd(animation) {
            return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
        }, _alignPlayhead = function _alignPlayhead(animation, totalTime) {
            var parent = animation._dp;
            if (parent && parent.smoothChildTiming && animation._ts) {
                animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
                _setEnd(animation);
                parent._dirty || _uncache(parent, animation);
            }
            return animation;
        }, _postAddChecks = function _postAddChecks(timeline, child) {
            var t;
            if (child._time || child._initted && !child._dur) {
                t = _parentToChildTotalTime(timeline.rawTime(), child);
                if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) child.render(t, true);
            }
            if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
                if (timeline._dur < timeline.duration()) {
                    t = timeline;
                    while (t._dp) {
                        t.rawTime() >= 0 && t.totalTime(t._tTime);
                        t = t._dp;
                    }
                }
                timeline._zTime = -_tinyNum;
            }
        }, _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
            child.parent && _removeFromParent(child);
            child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
            child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
            _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
            _isFromOrFromStart(child) || (timeline._recent = child);
            skipChecks || _postAddChecks(timeline, child);
            timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime);
            return timeline;
        }, _scrollTrigger = function _scrollTrigger(animation, trigger) {
            return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
        }, _attemptInitTween = function _attemptInitTween(tween, time, force, suppressEvents, tTime) {
            _initTween(tween, time, tTime);
            if (!tween._initted) return 1;
            if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
                _lazyTweens.push(tween);
                tween._lazy = [ tTime, suppressEvents ];
                return 1;
            }
        }, _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
            var parent = _ref.parent;
            return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
        }, _isFromOrFromStart = function _isFromOrFromStart(_ref2) {
            var data = _ref2.data;
            return data === "isFromStart" || data === "isStart";
        }, _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
            var pt, iteration, prevIteration, prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0;
            if (repeatDelay && tween._repeat) {
                tTime = _clamp(0, tween._tDur, totalTime);
                iteration = _animationCycle(tTime, repeatDelay);
                tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
                if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
                    prevRatio = 1 - ratio;
                    tween.vars.repeatRefresh && tween._initted && tween.invalidate();
                }
            }
            if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
                if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) return;
                prevIteration = tween._zTime;
                tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
                suppressEvents || (suppressEvents = totalTime && !prevIteration);
                tween.ratio = ratio;
                tween._from && (ratio = 1 - ratio);
                tween._time = 0;
                tween._tTime = tTime;
                pt = tween._pt;
                while (pt) {
                    pt.r(ratio, pt.d);
                    pt = pt._next;
                }
                totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
                tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
                tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
                if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
                    ratio && _removeFromParent(tween, 1);
                    if (!suppressEvents && !_reverting) {
                        _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
                        tween._prom && tween._prom();
                    }
                }
            } else if (!tween._zTime) tween._zTime = totalTime;
        }, _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
            var child;
            if (time > prevTime) {
                child = animation._first;
                while (child && child._start <= time) {
                    if (child.data === "isPause" && child._start > prevTime) return child;
                    child = child._next;
                }
            } else {
                child = animation._last;
                while (child && child._start >= time) {
                    if (child.data === "isPause" && child._start < prevTime) return child;
                    child = child._prev;
                }
            }
        }, _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
            var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
            totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
            animation._dur = dur;
            animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
            totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
            animation.parent && _setEnd(animation);
            skipUncache || _uncache(animation.parent, animation);
            return animation;
        }, _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
            return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
        }, _zeroPosition = {
            _start: 0,
            endTime: _emptyFunc,
            totalDuration: _emptyFunc
        }, _parsePosition = function _parsePosition(animation, position, percentAnimation) {
            var i, offset, isPercent, labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur;
            if (_isString(position) && (isNaN(position) || position in labels)) {
                offset = position.charAt(0);
                isPercent = position.substr(-1) === "%";
                i = position.indexOf("=");
                if (offset === "<" || offset === ">") {
                    i >= 0 && (position = position.replace(/=/, ""));
                    return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
                }
                if (i < 0) {
                    position in labels || (labels[position] = clippedDuration);
                    return labels[position];
                }
                offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
                if (isPercent && percentAnimation) offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
                return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
            }
            return position == null ? clippedDuration : +position;
        }, _createTweenType = function _createTweenType(type, params, timeline) {
            var irVars, parent, isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex];
            isLegacy && (vars.duration = params[1]);
            vars.parent = timeline;
            if (type) {
                irVars = vars;
                parent = timeline;
                while (parent && !("immediateRender" in irVars)) {
                    irVars = parent.vars.defaults || {};
                    parent = _isNotFalse(parent.vars.inherit) && parent.parent;
                }
                vars.immediateRender = _isNotFalse(irVars.immediateRender);
                type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
            }
            return new Tween(params[0], vars, params[varsIndex + 1]);
        }, _conditionalReturn = function _conditionalReturn(value, func) {
            return value || value === 0 ? func(value) : func;
        }, _clamp = function _clamp(min, max, value) {
            return value < min ? min : value > max ? max : value;
        }, getUnit = function getUnit(value, v) {
            return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
        }, clamp = function clamp(min, max, value) {
            return _conditionalReturn(value, (function(v) {
                return _clamp(min, max, v);
            }));
        }, _slice = [].slice, _isArrayLike = function _isArrayLike(value, nonEmpty) {
            return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
        }, _flatten = function _flatten(ar, leaveStrings, accumulator) {
            if (accumulator === void 0) accumulator = [];
            return ar.forEach((function(value) {
                var _accumulator;
                return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
            })) || accumulator;
        }, toArray = function toArray(value, scope, leaveStrings) {
            return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [ value ] : [];
        }, selector = function selector(value) {
            value = toArray(value)[0] || _warn("Invalid scope") || {};
            return function(v) {
                var el = value.current || value.nativeElement || value;
                return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
            };
        }, shuffle = function shuffle(a) {
            return a.sort((function() {
                return .5 - Math.random();
            }));
        }, distribute = function distribute(v) {
            if (_isFunction(v)) return v;
            var vars = _isObject(v) ? v : {
                each: v
            }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
            if (_isString(from)) ratioX = ratioY = {
                center: .5,
                edges: .5,
                end: 1
            }[from] || 0; else if (!isDecimal && ratios) {
                ratioX = from[0];
                ratioY = from[1];
            }
            return function(i, target, a) {
                var originX, originY, x, y, d, j, max, min, wrapAt, l = (a || vars).length, distances = cache[l];
                if (!distances) {
                    wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [ 1, _bigNum ])[1];
                    if (!wrapAt) {
                        max = -_bigNum;
                        while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) ;
                        wrapAt--;
                    }
                    distances = cache[l] = [];
                    originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
                    originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
                    max = 0;
                    min = _bigNum;
                    for (j = 0; j < l; j++) {
                        x = j % wrapAt - originX;
                        y = originY - (j / wrapAt | 0);
                        distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
                        d > max && (max = d);
                        d < min && (min = d);
                    }
                    from === "random" && shuffle(distances);
                    distances.max = max - min;
                    distances.min = min;
                    distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
                    distances.b = l < 0 ? base - l : base;
                    distances.u = getUnit(vars.amount || vars.each) || 0;
                    ease = ease && l < 0 ? _invertEase(ease) : ease;
                }
                l = (distances[i] - distances.min) / distances.max || 0;
                return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
            };
        }, _roundModifier = function _roundModifier(v) {
            var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
            return function(raw) {
                var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
                return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
            };
        }, snap = function snap(snapTo, value) {
            var radius, is2D, isArray = _isArray(snapTo);
            if (!isArray && _isObject(snapTo)) {
                radius = isArray = snapTo.radius || _bigNum;
                if (snapTo.values) {
                    snapTo = toArray(snapTo.values);
                    if (is2D = !_isNumber(snapTo[0])) radius *= radius;
                } else snapTo = _roundModifier(snapTo.increment);
            }
            return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
                is2D = snapTo(raw);
                return Math.abs(is2D - raw) <= radius ? is2D : raw;
            } : function(raw) {
                var dx, dy, x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length;
                while (i--) {
                    if (is2D) {
                        dx = snapTo[i].x - x;
                        dy = snapTo[i].y - y;
                        dx = dx * dx + dy * dy;
                    } else dx = Math.abs(snapTo[i] - x);
                    if (dx < min) {
                        min = dx;
                        closest = i;
                    }
                }
                closest = !radius || min <= radius ? snapTo[closest] : raw;
                return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
            });
        }, random = function random(min, max, roundingIncrement, returnFunction) {
            return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, (function() {
                return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
            }));
        }, pipe = function pipe() {
            for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) functions[_key] = arguments[_key];
            return function(value) {
                return functions.reduce((function(v, f) {
                    return f(v);
                }), value);
            };
        }, unitize = function unitize(func, unit) {
            return function(value) {
                return func(parseFloat(value)) + (unit || getUnit(value));
            };
        }, normalize = function normalize(min, max, value) {
            return mapRange(min, max, 0, 1, value);
        }, _wrapArray = function _wrapArray(a, wrapper, value) {
            return _conditionalReturn(value, (function(index) {
                return a[~~wrapper(index)];
            }));
        }, wrap = function wrap(min, max, value) {
            var range = max - min;
            return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, (function(value) {
                return (range + (value - min) % range) % range + min;
            }));
        }, wrapYoyo = function wrapYoyo(min, max, value) {
            var range = max - min, total = range * 2;
            return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, (function(value) {
                value = (total + (value - min) % total) % total || 0;
                return min + (value > range ? total - value : value);
            }));
        }, _replaceRandom = function _replaceRandom(value) {
            var i, nums, end, isArray, prev = 0, s = "";
            while (~(i = value.indexOf("random(", prev))) {
                end = value.indexOf(")", i);
                isArray = value.charAt(i + 7) === "[";
                nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
                s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
                prev = end + 1;
            }
            return s + value.substr(prev, value.length - prev);
        }, mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
            var inRange = inMax - inMin, outRange = outMax - outMin;
            return _conditionalReturn(value, (function(value) {
                return outMin + ((value - inMin) / inRange * outRange || 0);
            }));
        }, interpolate = function interpolate(start, end, progress, mutate) {
            var func = isNaN(start + end) ? 0 : function(p) {
                return (1 - p) * start + p * end;
            };
            if (!func) {
                var p, i, interpolators, l, il, isString = _isString(start), master = {};
                progress === true && (mutate = 1) && (progress = null);
                if (isString) {
                    start = {
                        p: start
                    };
                    end = {
                        p: end
                    };
                } else if (_isArray(start) && !_isArray(end)) {
                    interpolators = [];
                    l = start.length;
                    il = l - 2;
                    for (i = 1; i < l; i++) interpolators.push(interpolate(start[i - 1], start[i]));
                    l--;
                    func = function func(p) {
                        p *= l;
                        var i = Math.min(il, ~~p);
                        return interpolators[i](p - i);
                    };
                    progress = end;
                } else if (!mutate) start = _merge(_isArray(start) ? [] : {}, start);
                if (!interpolators) {
                    for (p in end) _addPropTween.call(master, start, p, "get", end[p]);
                    func = function func(p) {
                        return _renderPropTweens(p, master) || (isString ? start.p : start);
                    };
                }
            }
            return _conditionalReturn(progress, func);
        }, _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
            var p, distance, label, labels = timeline.labels, min = _bigNum;
            for (p in labels) {
                distance = labels[p] - fromTime;
                if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
                    label = p;
                    min = distance;
                }
            }
            return label;
        }, _callback = function _callback(animation, type, executeLazyFirst) {
            var params, scope, result, v = animation.vars, callback = v[type], prevContext = _context, context = animation._ctx;
            if (!callback) return;
            params = v[type + "Params"];
            scope = v.callbackScope || animation;
            executeLazyFirst && _lazyTweens.length && _lazyRender();
            context && (_context = context);
            result = params ? callback.apply(scope, params) : callback.call(scope);
            _context = prevContext;
            return result;
        }, _interrupt = function _interrupt(animation) {
            _removeFromParent(animation);
            animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
            animation.progress() < 1 && _callback(animation, "onInterrupt");
            return animation;
        }, _registerPluginQueue = [], _createPlugin = function _createPlugin(config) {
            if (!_windowExists()) {
                _registerPluginQueue.push(config);
                return;
            }
            config = !config.name && config["default"] || config;
            var name = config.name, isFunc = _isFunction(config), Plugin = name && !isFunc && config.init ? function() {
                this._props = [];
            } : config, instanceDefaults = {
                init: _emptyFunc,
                render: _renderPropTweens,
                add: _addPropTween,
                kill: _killPropTweensOf,
                modifier: _addPluginModifier,
                rawVars: 0
            }, statics = {
                targetTest: 0,
                get: 0,
                getSetter: _getSetter,
                aliases: {},
                register: 0
            };
            _wake();
            if (config !== Plugin) {
                if (_plugins[name]) return;
                _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics));
                _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics)));
                _plugins[Plugin.prop = name] = Plugin;
                if (config.targetTest) {
                    _harnessPlugins.push(Plugin);
                    _reservedProps[name] = 1;
                }
                name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
            }
            _addGlobal(name, Plugin);
            config.register && config.register(gsap, Plugin, PropTween);
        }, _255 = 255, _colorLookup = {
            aqua: [ 0, _255, _255 ],
            lime: [ 0, _255, 0 ],
            silver: [ 192, 192, 192 ],
            black: [ 0, 0, 0 ],
            maroon: [ 128, 0, 0 ],
            teal: [ 0, 128, 128 ],
            blue: [ 0, 0, _255 ],
            navy: [ 0, 0, 128 ],
            white: [ _255, _255, _255 ],
            olive: [ 128, 128, 0 ],
            yellow: [ _255, _255, 0 ],
            orange: [ _255, 165, 0 ],
            gray: [ 128, 128, 128 ],
            purple: [ 128, 0, 128 ],
            green: [ 0, 128, 0 ],
            red: [ _255, 0, 0 ],
            pink: [ _255, 192, 203 ],
            cyan: [ 0, _255, _255 ],
            transparent: [ _255, _255, _255, 0 ]
        }, _hue = function _hue(h, m1, m2) {
            h += h < 0 ? 1 : h > 1 ? -1 : 0;
            return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
        }, splitColor = function splitColor(v, toHSL, forceAlpha) {
            var r, g, b, h, s, l, max, min, d, wasHSL, a = !v ? _colorLookup.black : _isNumber(v) ? [ v >> 16, v >> 8 & _255, v & _255 ] : 0;
            if (!a) {
                if (v.substr(-1) === ",") v = v.substr(0, v.length - 1);
                if (_colorLookup[v]) a = _colorLookup[v]; else if (v.charAt(0) === "#") {
                    if (v.length < 6) {
                        r = v.charAt(1);
                        g = v.charAt(2);
                        b = v.charAt(3);
                        v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
                    }
                    if (v.length === 9) {
                        a = parseInt(v.substr(1, 6), 16);
                        return [ a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255 ];
                    }
                    v = parseInt(v.substr(1), 16);
                    a = [ v >> 16, v >> 8 & _255, v & _255 ];
                } else if (v.substr(0, 3) === "hsl") {
                    a = wasHSL = v.match(_strictNumExp);
                    if (!toHSL) {
                        h = +a[0] % 360 / 360;
                        s = +a[1] / 100;
                        l = +a[2] / 100;
                        g = l <= .5 ? l * (s + 1) : l + s - l * s;
                        r = l * 2 - g;
                        a.length > 3 && (a[3] *= 1);
                        a[0] = _hue(h + 1 / 3, r, g);
                        a[1] = _hue(h, r, g);
                        a[2] = _hue(h - 1 / 3, r, g);
                    } else if (~v.indexOf("=")) {
                        a = v.match(_numExp);
                        forceAlpha && a.length < 4 && (a[3] = 1);
                        return a;
                    }
                } else a = v.match(_strictNumExp) || _colorLookup.transparent;
                a = a.map(Number);
            }
            if (toHSL && !wasHSL) {
                r = a[0] / _255;
                g = a[1] / _255;
                b = a[2] / _255;
                max = Math.max(r, g, b);
                min = Math.min(r, g, b);
                l = (max + min) / 2;
                if (max === min) h = s = 0; else {
                    d = max - min;
                    s = l > .5 ? d / (2 - max - min) : d / (max + min);
                    h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
                    h *= 60;
                }
                a[0] = ~~(h + .5);
                a[1] = ~~(s * 100 + .5);
                a[2] = ~~(l * 100 + .5);
            }
            forceAlpha && a.length < 4 && (a[3] = 1);
            return a;
        }, _colorOrderData = function _colorOrderData(v) {
            var values = [], c = [], i = -1;
            v.split(_colorExp).forEach((function(v) {
                var a = v.match(_numWithUnitExp) || [];
                values.push.apply(values, a);
                c.push(i += a.length + 1);
            }));
            values.c = c;
            return values;
        }, _formatColors = function _formatColors(s, toHSL, orderMatchData) {
            var c, shell, d, l, result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0;
            if (!colors) return s;
            colors = colors.map((function(color) {
                return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
            }));
            if (orderMatchData) {
                d = _colorOrderData(s);
                c = orderMatchData.c;
                if (c.join(result) !== d.c.join(result)) {
                    shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
                    l = shell.length - 1;
                    for (;i < l; i++) result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
                }
            }
            if (!shell) {
                shell = s.split(_colorExp);
                l = shell.length - 1;
                for (;i < l; i++) result += shell[i] + colors[i];
            }
            return result + shell[l];
        }, _colorExp = function() {
            var p, s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (p in _colorLookup) s += "|" + p + "\\b";
            return new RegExp(s + ")", "gi");
        }(), _hslExp = /hsl[a]?\(/, _colorStringFilter = function _colorStringFilter(a) {
            var toHSL, combined = a.join(" ");
            _colorExp.lastIndex = 0;
            if (_colorExp.test(combined)) {
                toHSL = _hslExp.test(combined);
                a[1] = _formatColors(a[1], toHSL);
                a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
                return true;
            }
        }, _ticker = function() {
            var _id, _req, _raf, _self, _delta, _i, _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners = [], _tick = function _tick(v) {
                var overlap, dispatch, time, frame, elapsed = _getTime() - _lastUpdate, manual = v === true;
                elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
                _lastUpdate += elapsed;
                time = _lastUpdate - _startTime;
                overlap = time - _nextTime;
                if (overlap > 0 || manual) {
                    frame = ++_self.frame;
                    _delta = time - _self.time * 1e3;
                    _self.time = time /= 1e3;
                    _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
                    dispatch = 1;
                }
                manual || (_id = _req(_tick));
                if (dispatch) for (_i = 0; _i < _listeners.length; _i++) _listeners[_i](time, _delta, frame, v);
            };
            _self = {
                time: 0,
                frame: 0,
                tick: function tick() {
                    _tick(true);
                },
                deltaRatio: function deltaRatio(fps) {
                    return _delta / (1e3 / (fps || 60));
                },
                wake: function wake() {
                    if (_coreReady) {
                        if (!_coreInitted && _windowExists()) {
                            _win = _coreInitted = window;
                            _doc = _win.document || {};
                            _globals.gsap = gsap;
                            (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
                            _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
                            _raf = _win.requestAnimationFrame;
                            _registerPluginQueue.forEach(_createPlugin);
                        }
                        _id && _self.sleep();
                        _req = _raf || function(f) {
                            return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
                        };
                        _tickerActive = 1;
                        _tick(2);
                    }
                },
                sleep: function sleep() {
                    (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
                    _tickerActive = 0;
                    _req = _emptyFunc;
                },
                lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
                    _lagThreshold = threshold || 1 / 0;
                    _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
                },
                fps: function fps(_fps) {
                    _gap = 1e3 / (_fps || 240);
                    _nextTime = _self.time * 1e3 + _gap;
                },
                add: function add(callback, once, prioritize) {
                    var func = once ? function(t, d, f, v) {
                        callback(t, d, f, v);
                        _self.remove(func);
                    } : callback;
                    _self.remove(callback);
                    _listeners[prioritize ? "unshift" : "push"](func);
                    _wake();
                    return func;
                },
                remove: function remove(callback, i) {
                    ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
                },
                _listeners
            };
            return _self;
        }(), _wake = function _wake() {
            return !_tickerActive && _ticker.wake();
        }, _easeMap = {}, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function _parseObjectInString(value) {
            var index, val, parsedVal, obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length;
            for (;i < l; i++) {
                val = split[i];
                index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
                parsedVal = val.substr(0, index);
                obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
                key = val.substr(index + 1).trim();
            }
            return obj;
        }, _valueInParentheses = function _valueInParentheses(value) {
            var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
            return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
        }, _configEaseFromString = function _configEaseFromString(name) {
            var split = (name + "").split("("), ease = _easeMap[split[0]];
            return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [ _parseObjectInString(split[1]) ] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
        }, _invertEase = function _invertEase(ease) {
            return function(p) {
                return 1 - ease(1 - p);
            };
        }, _propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
            var ease, child = timeline._first;
            while (child) {
                if (child instanceof Timeline) _propagateYoyoEase(child, isYoyo); else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) if (child.timeline) _propagateYoyoEase(child.timeline, isYoyo); else {
                    ease = child._ease;
                    child._ease = child._yEase;
                    child._yEase = ease;
                    child._yoyo = isYoyo;
                }
                child = child._next;
            }
        }, _parseEase = function _parseEase(ease, defaultEase) {
            return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
        }, _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
            if (easeOut === void 0) easeOut = function easeOut(p) {
                return 1 - easeIn(1 - p);
            };
            if (easeInOut === void 0) easeInOut = function easeInOut(p) {
                return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
            };
            var lowercaseName, ease = {
                easeIn,
                easeOut,
                easeInOut
            };
            _forEachName(names, (function(name) {
                _easeMap[name] = _globals[name] = ease;
                _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
                for (var p in ease) _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
            }));
            return ease;
        }, _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
            return function(p) {
                return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
            };
        }, _configElastic = function _configElastic(type, amplitude, period) {
            var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut(p) {
                return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
            }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
                return 1 - easeOut(1 - p);
            } : _easeInOutFromOut(easeOut);
            p2 = _2PI / p2;
            ease.config = function(amplitude, period) {
                return _configElastic(type, amplitude, period);
            };
            return ease;
        }, _configBack = function _configBack(type, overshoot) {
            if (overshoot === void 0) overshoot = 1.70158;
            var easeOut = function easeOut(p) {
                return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
            }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
                return 1 - easeOut(1 - p);
            } : _easeInOutFromOut(easeOut);
            ease.config = function(overshoot) {
                return _configBack(type, overshoot);
            };
            return ease;
        };
        _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", (function(name, i) {
            var power = i < 5 ? i + 1 : i;
            _insertEase(name + ",Power" + (power - 1), i ? function(p) {
                return Math.pow(p, power);
            } : function(p) {
                return p;
            }, (function(p) {
                return 1 - Math.pow(1 - p, power);
            }), (function(p) {
                return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
            }));
        }));
        _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
        _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
        (function(n, c) {
            var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut(p) {
                return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
            };
            _insertEase("Bounce", (function(p) {
                return 1 - easeOut(1 - p);
            }), easeOut);
        })(7.5625, 2.75);
        _insertEase("Expo", (function(p) {
            return p ? Math.pow(2, 10 * (p - 1)) : 0;
        }));
        _insertEase("Circ", (function(p) {
            return -(_sqrt(1 - p * p) - 1);
        }));
        _insertEase("Sine", (function(p) {
            return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
        }));
        _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
        _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
            config: function config(steps, immediateStart) {
                if (steps === void 0) steps = 1;
                var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
                return function(p) {
                    return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
                };
            }
        };
        _defaults.ease = _easeMap["quad.out"];
        _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(name) {
            return _callbackNames += name + "," + name + "Params,";
        }));
        var GSCache = function GSCache(target, harness) {
            this.id = _gsID++;
            target._gsap = this;
            this.target = target;
            this.harness = harness;
            this.get = harness ? harness.get : _getProperty;
            this.set = harness ? harness.getSetter : _getSetter;
        };
        var Animation = function() {
            function Animation(vars) {
                this.vars = vars;
                this._delay = +vars.delay || 0;
                if (this._repeat = vars.repeat === 1 / 0 ? -2 : vars.repeat || 0) {
                    this._rDelay = vars.repeatDelay || 0;
                    this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
                }
                this._ts = 1;
                _setDuration(this, +vars.duration, 1, 1);
                this.data = vars.data;
                if (_context) {
                    this._ctx = _context;
                    _context.data.push(this);
                }
                _tickerActive || _ticker.wake();
            }
            var _proto = Animation.prototype;
            _proto.delay = function delay(value) {
                if (value || value === 0) {
                    this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
                    this._delay = value;
                    return this;
                }
                return this._delay;
            };
            _proto.duration = function duration(value) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
            };
            _proto.totalDuration = function totalDuration(value) {
                if (!arguments.length) return this._tDur;
                this._dirty = 0;
                return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
            };
            _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
                _wake();
                if (!arguments.length) return this._tTime;
                var parent = this._dp;
                if (parent && parent.smoothChildTiming && this._ts) {
                    _alignPlayhead(this, _totalTime);
                    !parent._dp || parent.parent || _postAddChecks(parent, this);
                    while (parent && parent.parent) {
                        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) parent.totalTime(parent._tTime, true);
                        parent = parent.parent;
                    }
                    if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) _addToTimeline(this._dp, this, this._start - this._delay);
                }
                if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
                    this._ts || (this._pTime = _totalTime);
                    _lazySafeRender(this, _totalTime, suppressEvents);
                }
                return this;
            };
            _proto.time = function time(value, suppressEvents) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
            };
            _proto.totalProgress = function totalProgress(value, suppressEvents) {
                return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
            };
            _proto.progress = function progress(value, suppressEvents) {
                return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
            };
            _proto.iteration = function iteration(value, suppressEvents) {
                var cycleDuration = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
            };
            _proto.timeScale = function timeScale(value) {
                if (!arguments.length) return this._rts === -_tinyNum ? 0 : this._rts;
                if (this._rts === value) return this;
                var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
                this._rts = +value || 0;
                this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
                this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, tTime), true);
                _setEnd(this);
                return _recacheAncestors(this);
            };
            _proto.paused = function paused(value) {
                if (!arguments.length) return this._ps;
                if (this._ps !== value) {
                    this._ps = value;
                    if (value) {
                        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
                        this._ts = this._act = 0;
                    } else {
                        _wake();
                        this._ts = this._rts;
                        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
                    }
                }
                return this;
            };
            _proto.startTime = function startTime(value) {
                if (arguments.length) {
                    this._start = value;
                    var parent = this.parent || this._dp;
                    parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
                    return this;
                }
                return this._start;
            };
            _proto.endTime = function endTime(includeRepeats) {
                return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
            };
            _proto.rawTime = function rawTime(wrapRepeats) {
                var parent = this.parent || this._dp;
                return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
            };
            _proto.revert = function revert(config) {
                if (config === void 0) config = _revertConfig;
                var prevIsReverting = _reverting;
                _reverting = config;
                if (this._initted || this._startAt) {
                    this.timeline && this.timeline.revert(config);
                    this.totalTime(-.01, config.suppressEvents);
                }
                this.data !== "nested" && config.kill !== false && this.kill();
                _reverting = prevIsReverting;
                return this;
            };
            _proto.globalTime = function globalTime(rawTime) {
                var animation = this, time = arguments.length ? rawTime : animation.rawTime();
                while (animation) {
                    time = animation._start + time / (animation._ts || 1);
                    animation = animation._dp;
                }
                return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(rawTime) : time;
            };
            _proto.repeat = function repeat(value) {
                if (arguments.length) {
                    this._repeat = value === 1 / 0 ? -2 : value;
                    return _onUpdateTotalDuration(this);
                }
                return this._repeat === -2 ? 1 / 0 : this._repeat;
            };
            _proto.repeatDelay = function repeatDelay(value) {
                if (arguments.length) {
                    var time = this._time;
                    this._rDelay = value;
                    _onUpdateTotalDuration(this);
                    return time ? this.time(time) : this;
                }
                return this._rDelay;
            };
            _proto.yoyo = function yoyo(value) {
                if (arguments.length) {
                    this._yoyo = value;
                    return this;
                }
                return this._yoyo;
            };
            _proto.seek = function seek(position, suppressEvents) {
                return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
            };
            _proto.restart = function restart(includeDelay, suppressEvents) {
                return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
            };
            _proto.play = function play(from, suppressEvents) {
                from != null && this.seek(from, suppressEvents);
                return this.reversed(false).paused(false);
            };
            _proto.reverse = function reverse(from, suppressEvents) {
                from != null && this.seek(from || this.totalDuration(), suppressEvents);
                return this.reversed(true).paused(false);
            };
            _proto.pause = function pause(atTime, suppressEvents) {
                atTime != null && this.seek(atTime, suppressEvents);
                return this.paused(true);
            };
            _proto.resume = function resume() {
                return this.paused(false);
            };
            _proto.reversed = function reversed(value) {
                if (arguments.length) {
                    !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
                    return this;
                }
                return this._rts < 0;
            };
            _proto.invalidate = function invalidate() {
                this._initted = this._act = 0;
                this._zTime = -_tinyNum;
                return this;
            };
            _proto.isActive = function isActive() {
                var rawTime, parent = this.parent || this._dp, start = this._start;
                return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
            };
            _proto.eventCallback = function eventCallback(type, callback, params) {
                var vars = this.vars;
                if (arguments.length > 1) {
                    if (!callback) delete vars[type]; else {
                        vars[type] = callback;
                        params && (vars[type + "Params"] = params);
                        type === "onUpdate" && (this._onUpdate = callback);
                    }
                    return this;
                }
                return vars[type];
            };
            _proto.then = function then(onFulfilled) {
                var self = this;
                return new Promise((function(resolve) {
                    var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve() {
                        var _then = self.then;
                        self.then = null;
                        _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
                        resolve(f);
                        self.then = _then;
                    };
                    if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) _resolve(); else self._prom = _resolve;
                }));
            };
            _proto.kill = function kill() {
                _interrupt(this);
            };
            return Animation;
        }();
        _setDefaults(Animation.prototype, {
            _time: 0,
            _start: 0,
            _end: 0,
            _tTime: 0,
            _tDur: 0,
            _dirty: 0,
            _repeat: 0,
            _yoyo: false,
            parent: null,
            _initted: false,
            _rDelay: 0,
            _ts: 1,
            _dp: 0,
            ratio: 0,
            _zTime: -_tinyNum,
            _prom: 0,
            _ps: false,
            _rts: 1
        });
        var Timeline = function(_Animation) {
            _inheritsLoose(Timeline, _Animation);
            function Timeline(vars, position) {
                var _this;
                if (vars === void 0) vars = {};
                _this = _Animation.call(this, vars) || this;
                _this.labels = {};
                _this.smoothChildTiming = !!vars.smoothChildTiming;
                _this.autoRemoveChildren = !!vars.autoRemoveChildren;
                _this._sort = _isNotFalse(vars.sortChildren);
                _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
                vars.reversed && _this.reverse();
                vars.paused && _this.paused(true);
                vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
                return _this;
            }
            var _proto2 = Timeline.prototype;
            _proto2.to = function to(targets, vars, position) {
                _createTweenType(0, arguments, this);
                return this;
            };
            _proto2.from = function from(targets, vars, position) {
                _createTweenType(1, arguments, this);
                return this;
            };
            _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
                _createTweenType(2, arguments, this);
                return this;
            };
            _proto2.set = function set(targets, vars, position) {
                vars.duration = 0;
                vars.parent = this;
                _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
                vars.immediateRender = !!vars.immediateRender;
                new Tween(targets, vars, _parsePosition(this, position), 1);
                return this;
            };
            _proto2.call = function call(callback, params, position) {
                return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
            };
            _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
                vars.duration = duration;
                vars.stagger = vars.stagger || stagger;
                vars.onComplete = onCompleteAll;
                vars.onCompleteParams = onCompleteAllParams;
                vars.parent = this;
                new Tween(targets, vars, _parsePosition(this, position));
                return this;
            };
            _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
                vars.runBackwards = 1;
                _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
                return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
            };
            _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
                toVars.startAt = fromVars;
                _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
                return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
            };
            _proto2.render = function render(totalTime, suppressEvents, force) {
                var time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo, prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur);
                this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
                if (tTime !== this._tTime || force || crossingStart) {
                    if (prevTime !== this._time && dur) {
                        tTime += this._time - prevTime;
                        totalTime += this._time - prevTime;
                    }
                    time = tTime;
                    prevStart = this._start;
                    timeScale = this._ts;
                    prevPaused = !timeScale;
                    if (crossingStart) {
                        dur || (prevTime = this._zTime);
                        (totalTime || !suppressEvents) && (this._zTime = totalTime);
                    }
                    if (this._repeat) {
                        yoyo = this._yoyo;
                        cycleDuration = dur + this._rDelay;
                        if (this._repeat < -1 && totalTime < 0) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                        time = _roundPrecise(tTime % cycleDuration);
                        if (tTime === tDur) {
                            iteration = this._repeat;
                            time = dur;
                        } else {
                            iteration = ~~(tTime / cycleDuration);
                            if (iteration && iteration === tTime / cycleDuration) {
                                time = dur;
                                iteration--;
                            }
                            time > dur && (time = dur);
                        }
                        prevIteration = _animationCycle(this._tTime, cycleDuration);
                        !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);
                        if (yoyo && iteration & 1) {
                            time = dur - time;
                            isYoyo = 1;
                        }
                        if (iteration !== prevIteration && !this._lock) {
                            var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
                            iteration < prevIteration && (rewinding = !rewinding);
                            prevTime = rewinding ? 0 : dur;
                            this._lock = 1;
                            this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
                            this._tTime = tTime;
                            !suppressEvents && this.parent && _callback(this, "onRepeat");
                            this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
                            if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                            dur = this._dur;
                            tDur = this._tDur;
                            if (doesWrap) {
                                this._lock = 2;
                                prevTime = rewinding ? dur : -1e-4;
                                this.render(prevTime, true);
                                this.vars.repeatRefresh && !isYoyo && this.invalidate();
                            }
                            this._lock = 0;
                            if (!this._ts && !prevPaused) return this;
                            _propagateYoyoEase(this, isYoyo);
                        }
                    }
                    if (this._hasPause && !this._forcing && this._lock < 2) {
                        pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
                        if (pauseTween) tTime -= time - (time = pauseTween._start);
                    }
                    this._tTime = tTime;
                    this._time = time;
                    this._act = !timeScale;
                    if (!this._initted) {
                        this._onUpdate = this.vars.onUpdate;
                        this._initted = 1;
                        this._zTime = totalTime;
                        prevTime = 0;
                    }
                    if (!prevTime && time && !suppressEvents && !iteration) {
                        _callback(this, "onStart");
                        if (this._tTime !== tTime) return this;
                    }
                    if (time >= prevTime && totalTime >= 0) {
                        child = this._first;
                        while (child) {
                            next = child._next;
                            if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                                if (child.parent !== this) return this.render(totalTime, suppressEvents, force);
                                child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
                                if (time !== this._time || !this._ts && !prevPaused) {
                                    pauseTween = 0;
                                    next && (tTime += this._zTime = -_tinyNum);
                                    break;
                                }
                            }
                            child = next;
                        }
                    } else {
                        child = this._last;
                        var adjustedTime = totalTime < 0 ? totalTime : time;
                        while (child) {
                            next = child._prev;
                            if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                                if (child.parent !== this) return this.render(totalTime, suppressEvents, force);
                                child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt));
                                if (time !== this._time || !this._ts && !prevPaused) {
                                    pauseTween = 0;
                                    next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                                    break;
                                }
                            }
                            child = next;
                        }
                    }
                    if (pauseTween && !suppressEvents) {
                        this.pause();
                        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
                        if (this._ts) {
                            this._start = prevStart;
                            _setEnd(this);
                            return this.render(totalTime, suppressEvents, force);
                        }
                    }
                    this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
                    if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
                        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
                        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                            _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                        }
                    }
                }
                return this;
            };
            _proto2.add = function add(child, position) {
                var _this2 = this;
                _isNumber(position) || (position = _parsePosition(this, position, child));
                if (!(child instanceof Animation)) {
                    if (_isArray(child)) {
                        child.forEach((function(obj) {
                            return _this2.add(obj, position);
                        }));
                        return this;
                    }
                    if (_isString(child)) return this.addLabel(child, position);
                    if (_isFunction(child)) child = Tween.delayedCall(0, child); else return this;
                }
                return this !== child ? _addToTimeline(this, child, position) : this;
            };
            _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
                if (nested === void 0) nested = true;
                if (tweens === void 0) tweens = true;
                if (timelines === void 0) timelines = true;
                if (ignoreBeforeTime === void 0) ignoreBeforeTime = -_bigNum;
                var a = [], child = this._first;
                while (child) {
                    if (child._start >= ignoreBeforeTime) if (child instanceof Tween) tweens && a.push(child); else {
                        timelines && a.push(child);
                        nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
                    }
                    child = child._next;
                }
                return a;
            };
            _proto2.getById = function getById(id) {
                var animations = this.getChildren(1, 1, 1), i = animations.length;
                while (i--) if (animations[i].vars.id === id) return animations[i];
            };
            _proto2.remove = function remove(child) {
                if (_isString(child)) return this.removeLabel(child);
                if (_isFunction(child)) return this.killTweensOf(child);
                _removeLinkedListItem(this, child);
                if (child === this._recent) this._recent = this._last;
                return _uncache(this);
            };
            _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
                if (!arguments.length) return this._tTime;
                this._forcing = 1;
                if (!this._dp && this._ts) this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
                _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
                this._forcing = 0;
                return this;
            };
            _proto2.addLabel = function addLabel(label, position) {
                this.labels[label] = _parsePosition(this, position);
                return this;
            };
            _proto2.removeLabel = function removeLabel(label) {
                delete this.labels[label];
                return this;
            };
            _proto2.addPause = function addPause(position, callback, params) {
                var t = Tween.delayedCall(0, callback || _emptyFunc, params);
                t.data = "isPause";
                this._hasPause = 1;
                return _addToTimeline(this, t, _parsePosition(this, position));
            };
            _proto2.removePause = function removePause(position) {
                var child = this._first;
                position = _parsePosition(this, position);
                while (child) {
                    if (child._start === position && child.data === "isPause") _removeFromParent(child);
                    child = child._next;
                }
            };
            _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
                var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
                while (i--) _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
                return this;
            };
            _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
                var children, a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive);
                while (child) {
                    if (child instanceof Tween) {
                        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) a.push(child);
                    } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) a.push.apply(a, children);
                    child = child._next;
                }
                return a;
            };
            _proto2.tweenTo = function tweenTo(position, vars) {
                vars = vars || {};
                var initted, tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, tween = Tween.to(tl, _setDefaults({
                    ease: vars.ease || "none",
                    lazy: false,
                    immediateRender: false,
                    time: endTime,
                    overwrite: "auto",
                    duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
                    onStart: function onStart() {
                        tl.pause();
                        if (!initted) {
                            var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
                            tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
                            initted = 1;
                        }
                        _onStart && _onStart.apply(tween, onStartParams || []);
                    }
                }, vars));
                return immediateRender ? tween.render(0) : tween;
            };
            _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
                return this.tweenTo(toPosition, _setDefaults({
                    startAt: {
                        time: _parsePosition(this, fromPosition)
                    }
                }, vars));
            };
            _proto2.recent = function recent() {
                return this._recent;
            };
            _proto2.nextLabel = function nextLabel(afterTime) {
                if (afterTime === void 0) afterTime = this._time;
                return _getLabelInDirection(this, _parsePosition(this, afterTime));
            };
            _proto2.previousLabel = function previousLabel(beforeTime) {
                if (beforeTime === void 0) beforeTime = this._time;
                return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
            };
            _proto2.currentLabel = function currentLabel(value) {
                return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
            };
            _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
                if (ignoreBeforeTime === void 0) ignoreBeforeTime = 0;
                var p, child = this._first, labels = this.labels;
                while (child) {
                    if (child._start >= ignoreBeforeTime) {
                        child._start += amount;
                        child._end += amount;
                    }
                    child = child._next;
                }
                if (adjustLabels) for (p in labels) if (labels[p] >= ignoreBeforeTime) labels[p] += amount;
                return _uncache(this);
            };
            _proto2.invalidate = function invalidate(soft) {
                var child = this._first;
                this._lock = 0;
                while (child) {
                    child.invalidate(soft);
                    child = child._next;
                }
                return _Animation.prototype.invalidate.call(this, soft);
            };
            _proto2.clear = function clear(includeLabels) {
                if (includeLabels === void 0) includeLabels = true;
                var next, child = this._first;
                while (child) {
                    next = child._next;
                    this.remove(child);
                    child = next;
                }
                this._dp && (this._time = this._tTime = this._pTime = 0);
                includeLabels && (this.labels = {});
                return _uncache(this);
            };
            _proto2.totalDuration = function totalDuration(value) {
                var prev, start, parent, max = 0, self = this, child = self._last, prevStart = _bigNum;
                if (arguments.length) return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
                if (self._dirty) {
                    parent = self.parent;
                    while (child) {
                        prev = child._prev;
                        child._dirty && child.totalDuration();
                        start = child._start;
                        if (start > prevStart && self._sort && child._ts && !self._lock) {
                            self._lock = 1;
                            _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
                        } else prevStart = start;
                        if (start < 0 && child._ts) {
                            max -= start;
                            if (!parent && !self._dp || parent && parent.smoothChildTiming) {
                                self._start += start / self._ts;
                                self._time -= start;
                                self._tTime -= start;
                            }
                            self.shiftChildren(-start, false, -Infinity);
                            prevStart = 0;
                        }
                        child._end > max && child._ts && (max = child._end);
                        child = prev;
                    }
                    _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
                    self._dirty = 0;
                }
                return self._tDur;
            };
            Timeline.updateRoot = function updateRoot(time) {
                if (_globalTimeline._ts) {
                    _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
                    _lastRenderedFrame = _ticker.frame;
                }
                if (_ticker.frame >= _nextGCFrame) {
                    _nextGCFrame += _config.autoSleep || 120;
                    var child = _globalTimeline._first;
                    if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
                        while (child && !child._ts) child = child._next;
                        child || _ticker.sleep();
                    }
                }
            };
            return Timeline;
        }(Animation);
        _setDefaults(Timeline.prototype, {
            _lock: 0,
            _hasPause: 0,
            _forcing: 0
        });
        var _overwritingTween, _forceAllPropTweens, _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
            var result, startNums, color, endNum, chunk, startNum, hasRandom, a, pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0;
            pt.b = start;
            pt.e = end;
            start += "";
            end += "";
            if (hasRandom = ~end.indexOf("random(")) end = _replaceRandom(end);
            if (stringFilter) {
                a = [ start, end ];
                stringFilter(a, target, prop);
                start = a[0];
                end = a[1];
            }
            startNums = start.match(_complexStringNumExp) || [];
            while (result = _complexStringNumExp.exec(end)) {
                endNum = result[0];
                chunk = end.substring(index, result.index);
                if (color) color = (color + 1) % 5; else if (chunk.substr(-5) === "rgba(") color = 1;
                if (endNum !== startNums[matchIndex++]) {
                    startNum = parseFloat(startNums[matchIndex - 1]) || 0;
                    pt._pt = {
                        _next: pt._pt,
                        p: chunk || matchIndex === 1 ? chunk : ",",
                        s: startNum,
                        c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
                        m: color && color < 4 ? Math.round : 0
                    };
                    index = _complexStringNumExp.lastIndex;
                }
            }
            pt.c = index < end.length ? end.substring(index, end.length) : "";
            pt.fp = funcParam;
            if (_relExp.test(end) || hasRandom) pt.e = 0;
            this._pt = pt;
            return pt;
        }, _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
            _isFunction(end) && (end = end(index || 0, target, targets));
            var pt, currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc;
            if (_isString(end)) {
                if (~end.indexOf("random(")) end = _replaceRandom(end);
                if (end.charAt(1) === "=") {
                    pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
                    if (pt || pt === 0) end = pt;
                }
            }
            if (!optional || parsedStart !== end || _forceAllPropTweens) {
                if (!isNaN(parsedStart * end) && end !== "") {
                    pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
                    funcParam && (pt.fp = funcParam);
                    modifier && pt.modifier(modifier, this, target);
                    return this._pt = pt;
                }
                !currentValue && !(prop in target) && _missingPlugin(prop, end);
                return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
            }
        }, _processVars = function _processVars(vars, index, target, targets, tween) {
            _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
            if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
            var p, copy = {};
            for (p in vars) copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
            return copy;
        }, _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
            var plugin, pt, ptLookup, i;
            if (_plugins[property] && (plugin = new _plugins[property]).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
                tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
                if (tween !== _quickTween) {
                    ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
                    i = plugin._props.length;
                    while (i--) ptLookup[plugin._props[i]] = pt;
                }
            }
            return plugin;
        }, _initTween = function _initTween(tween, time, tTime) {
            var cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten, vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, onUpdateParams = vars.onUpdateParams, callbackScope = vars.callbackScope, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline;
            tl && (!keyframes || !ease) && (ease = "none");
            tween._ease = _parseEase(ease, _defaults.ease);
            tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
            if (yoyoEase && tween._yoyo && !tween._repeat) {
                yoyoEase = tween._yEase;
                tween._yEase = tween._ease;
                tween._ease = yoyoEase;
            }
            tween._from = !tl && !!vars.runBackwards;
            if (!tl || keyframes && !vars.stagger) {
                harness = targets[0] ? _getCache(targets[0]).harness : 0;
                harnessVars = harness && vars[harness.prop];
                cleanVars = _copyExcluding(vars, _reservedProps);
                if (prevStartAt) {
                    prevStartAt._zTime < 0 && prevStartAt.progress(1);
                    time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
                    prevStartAt._lazy = 0;
                }
                if (startAt) {
                    _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
                        data: "isStart",
                        overwrite: false,
                        parent,
                        immediateRender: true,
                        lazy: !prevStartAt && _isNotFalse(lazy),
                        startAt: null,
                        delay: 0,
                        onUpdate,
                        onUpdateParams,
                        callbackScope,
                        stagger: 0
                    }, startAt)));
                    tween._startAt._dp = 0;
                    tween._startAt._sat = tween;
                    time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
                    if (immediateRender) if (dur && time <= 0 && tTime <= 0) {
                        time && (tween._zTime = time);
                        return;
                    }
                } else if (runBackwards && dur) if (!prevStartAt) {
                    time && (immediateRender = false);
                    p = _setDefaults({
                        overwrite: false,
                        data: "isFromStart",
                        lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
                        immediateRender,
                        stagger: 0,
                        parent
                    }, cleanVars);
                    harnessVars && (p[harness.prop] = harnessVars);
                    _removeFromParent(tween._startAt = Tween.set(targets, p));
                    tween._startAt._dp = 0;
                    tween._startAt._sat = tween;
                    time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
                    tween._zTime = time;
                    if (!immediateRender) _initTween(tween._startAt, _tinyNum, _tinyNum); else if (!time) return;
                }
                tween._pt = tween._ptCache = 0;
                lazy = dur && _isNotFalse(lazy) || lazy && !dur;
                for (i = 0; i < targets.length; i++) {
                    target = targets[i];
                    gsData = target._gsap || _harness(targets)[i]._gsap;
                    tween._ptLookup[i] = ptLookup = {};
                    _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
                    index = fullTargets === targets ? i : fullTargets.indexOf(target);
                    if (harness && (plugin = new harness).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
                        tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
                        plugin._props.forEach((function(name) {
                            ptLookup[name] = pt;
                        }));
                        plugin.priority && (hasPriority = 1);
                    }
                    if (!harness || harnessVars) for (p in cleanVars) if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) plugin.priority && (hasPriority = 1); else ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
                    tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
                    if (autoOverwrite && tween._pt) {
                        _overwritingTween = tween;
                        _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
                        overwritten = !tween.parent;
                        _overwritingTween = 0;
                    }
                    tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
                }
                hasPriority && _sortPropTweensByPriority(tween);
                tween._onInit && tween._onInit(tween);
            }
            tween._onUpdate = onUpdate;
            tween._initted = (!tween._op || tween._pt) && !overwritten;
            keyframes && time <= 0 && tl.render(_bigNum, true, true);
        }, _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time) {
            var pt, rootPT, lookup, i, ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property];
            if (!ptCache) {
                ptCache = tween._ptCache[property] = [];
                lookup = tween._ptLookup;
                i = tween._targets.length;
                while (i--) {
                    pt = lookup[i][property];
                    if (pt && pt.d && pt.d._pt) {
                        pt = pt.d._pt;
                        while (pt && pt.p !== property && pt.fp !== property) pt = pt._next;
                    }
                    if (!pt) {
                        _forceAllPropTweens = 1;
                        tween.vars[property] = "+=0";
                        _initTween(tween, time);
                        _forceAllPropTweens = 0;
                        return 1;
                    }
                    ptCache.push(pt);
                }
            }
            i = ptCache.length;
            while (i--) {
                rootPT = ptCache[i];
                pt = rootPT._pt || rootPT;
                pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
                pt.c = value - pt.s;
                rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
                rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
            }
        }, _addAliasesToVars = function _addAliasesToVars(targets, vars) {
            var copy, p, i, aliases, harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases;
            if (!propertyAliases) return vars;
            copy = _merge({}, vars);
            for (p in propertyAliases) if (p in copy) {
                aliases = propertyAliases[p].split(",");
                i = aliases.length;
                while (i--) copy[aliases[i]] = copy[p];
            }
            return copy;
        }, _parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
            var p, a, ease = obj.ease || easeEach || "power1.inOut";
            if (_isArray(obj)) {
                a = allProps[prop] || (allProps[prop] = []);
                obj.forEach((function(value, i) {
                    return a.push({
                        t: i / (obj.length - 1) * 100,
                        v: value,
                        e: ease
                    });
                }));
            } else for (p in obj) {
                a = allProps[p] || (allProps[p] = []);
                p === "ease" || a.push({
                    t: parseFloat(prop),
                    v: obj[p],
                    e: ease
                });
            }
        }, _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
            return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
        }, _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", _staggerPropsToSkip = {};
        _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", (function(name) {
            return _staggerPropsToSkip[name] = 1;
        }));
        var Tween = function(_Animation2) {
            _inheritsLoose(Tween, _Animation2);
            function Tween(targets, vars, position, skipInherit) {
                var _this3;
                if (typeof vars === "number") {
                    position.duration = vars;
                    vars = position;
                    position = null;
                }
                _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
                var tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge, _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [ targets ] : toArray(targets);
                _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
                _this3._ptLookup = [];
                _this3._overwrite = overwrite;
                if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
                    vars = _this3.vars;
                    tl = _this3.timeline = new Timeline({
                        data: "nested",
                        defaults: defaults || {},
                        targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
                    });
                    tl.kill();
                    tl.parent = tl._dp = _assertThisInitialized(_this3);
                    tl._start = 0;
                    if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
                        l = parsedTargets.length;
                        staggerFunc = stagger && distribute(stagger);
                        if (_isObject(stagger)) for (p in stagger) if (~_staggerTweenProps.indexOf(p)) {
                            staggerVarsToMerge || (staggerVarsToMerge = {});
                            staggerVarsToMerge[p] = stagger[p];
                        }
                        for (i = 0; i < l; i++) {
                            copy = _copyExcluding(vars, _staggerPropsToSkip);
                            copy.stagger = 0;
                            yoyoEase && (copy.yoyoEase = yoyoEase);
                            staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
                            curTarget = parsedTargets[i];
                            copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
                            copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
                            if (!stagger && l === 1 && copy.delay) {
                                _this3._delay = delay = copy.delay;
                                _this3._start += delay;
                                copy.delay = 0;
                            }
                            tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
                            tl._ease = _easeMap.none;
                        }
                        tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
                    } else if (keyframes) {
                        _inheritDefaults(_setDefaults(tl.vars.defaults, {
                            ease: "none"
                        }));
                        tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
                        var a, kf, v, time = 0;
                        if (_isArray(keyframes)) {
                            keyframes.forEach((function(frame) {
                                return tl.to(parsedTargets, frame, ">");
                            }));
                            tl.duration();
                        } else {
                            copy = {};
                            for (p in keyframes) p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
                            for (p in copy) {
                                a = copy[p].sort((function(a, b) {
                                    return a.t - b.t;
                                }));
                                time = 0;
                                for (i = 0; i < a.length; i++) {
                                    kf = a[i];
                                    v = {
                                        ease: kf.e,
                                        duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                                    };
                                    v[p] = kf.v;
                                    tl.to(parsedTargets, v, time);
                                    time += v.duration;
                                }
                            }
                            tl.duration() < duration && tl.to({}, {
                                duration: duration - tl.duration()
                            });
                        }
                    }
                    duration || _this3.duration(duration = tl.duration());
                } else _this3.timeline = 0;
                if (overwrite === true && !_suppressOverwrites) {
                    _overwritingTween = _assertThisInitialized(_this3);
                    _globalTimeline.killTweensOf(parsedTargets);
                    _overwritingTween = 0;
                }
                _addToTimeline(parent, _assertThisInitialized(_this3), position);
                vars.reversed && _this3.reverse();
                vars.paused && _this3.paused(true);
                if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
                    _this3._tTime = -_tinyNum;
                    _this3.render(Math.max(0, -delay) || 0);
                }
                scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
                return _this3;
            }
            var _proto3 = Tween.prototype;
            _proto3.render = function render(totalTime, suppressEvents, force) {
                var time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline, yoyoEase, prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime;
                if (!dur) _renderZeroDurationTween(this, totalTime, suppressEvents, force); else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
                    time = tTime;
                    timeline = this.timeline;
                    if (this._repeat) {
                        cycleDuration = dur + this._rDelay;
                        if (this._repeat < -1 && isNegative) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                        time = _roundPrecise(tTime % cycleDuration);
                        if (tTime === tDur) {
                            iteration = this._repeat;
                            time = dur;
                        } else {
                            iteration = ~~(tTime / cycleDuration);
                            if (iteration && iteration === tTime / cycleDuration) {
                                time = dur;
                                iteration--;
                            }
                            time > dur && (time = dur);
                        }
                        isYoyo = this._yoyo && iteration & 1;
                        if (isYoyo) {
                            yoyoEase = this._yEase;
                            time = dur - time;
                        }
                        prevIteration = _animationCycle(this._tTime, cycleDuration);
                        if (time === prevTime && !force && this._initted) {
                            this._tTime = tTime;
                            return this;
                        }
                        if (iteration !== prevIteration) {
                            timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo);
                            if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
                                this._lock = force = 1;
                                this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
                            }
                        }
                    }
                    if (!this._initted) {
                        if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
                            this._tTime = 0;
                            return this;
                        }
                        if (prevTime !== this._time) return this;
                        if (dur !== this._dur) return this.render(totalTime, suppressEvents, force);
                    }
                    this._tTime = tTime;
                    this._time = time;
                    if (!this._act && this._ts) {
                        this._act = 1;
                        this._lazy = 0;
                    }
                    this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
                    if (this._from) this.ratio = ratio = 1 - ratio;
                    if (time && !prevTime && !suppressEvents && !iteration) {
                        _callback(this, "onStart");
                        if (this._tTime !== tTime) return this;
                    }
                    pt = this._pt;
                    while (pt) {
                        pt.r(ratio, pt.d);
                        pt = pt._next;
                    }
                    timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
                    if (this._onUpdate && !suppressEvents) {
                        isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
                        _callback(this, "onUpdate");
                    }
                    this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
                    if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
                        isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
                        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
                        if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
                            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                        }
                    }
                }
                return this;
            };
            _proto3.targets = function targets() {
                return this._targets;
            };
            _proto3.invalidate = function invalidate(soft) {
                (!soft || !this.vars.runBackwards) && (this._startAt = 0);
                this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
                this._ptLookup = [];
                this.timeline && this.timeline.invalidate(soft);
                return _Animation2.prototype.invalidate.call(this, soft);
            };
            _proto3.resetTo = function resetTo(property, value, start, startIsRelative) {
                _tickerActive || _ticker.wake();
                this._ts || this.play();
                var ratio, time = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
                this._initted || _initTween(this, time);
                ratio = this._ease(time / this._dur);
                if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time)) return this.resetTo(property, value, start, startIsRelative);
                _alignPlayhead(this, 0);
                this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
                return this.render(0);
            };
            _proto3.kill = function kill(targets, vars) {
                if (vars === void 0) vars = "all";
                if (!targets && (!vars || vars === "all")) {
                    this._lazy = this._pt = 0;
                    return this.parent ? _interrupt(this) : this;
                }
                if (this.timeline) {
                    var tDur = this.timeline.totalDuration();
                    this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
                    this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
                    return this;
                }
                var overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i, parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt;
                if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
                    vars === "all" && (this._pt = 0);
                    return _interrupt(this);
                }
                overwrittenProps = this._op = this._op || [];
                if (vars !== "all") {
                    if (_isString(vars)) {
                        p = {};
                        _forEachName(vars, (function(name) {
                            return p[name] = 1;
                        }));
                        vars = p;
                    }
                    vars = _addAliasesToVars(parsedTargets, vars);
                }
                i = parsedTargets.length;
                while (i--) if (~killingTargets.indexOf(parsedTargets[i])) {
                    curLookup = propTweenLookup[i];
                    if (vars === "all") {
                        overwrittenProps[i] = vars;
                        props = curLookup;
                        curOverwriteProps = {};
                    } else {
                        curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
                        props = vars;
                    }
                    for (p in props) {
                        pt = curLookup && curLookup[p];
                        if (pt) {
                            if (!("kill" in pt.d) || pt.d.kill(p) === true) _removeLinkedListItem(this, pt, "_pt");
                            delete curLookup[p];
                        }
                        if (curOverwriteProps !== "all") curOverwriteProps[p] = 1;
                    }
                }
                this._initted && !this._pt && firstPT && _interrupt(this);
                return this;
            };
            Tween.to = function to(targets, vars) {
                return new Tween(targets, vars, arguments[2]);
            };
            Tween.from = function from(targets, vars) {
                return _createTweenType(1, arguments);
            };
            Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
                return new Tween(callback, 0, {
                    immediateRender: false,
                    lazy: false,
                    overwrite: false,
                    delay,
                    onComplete: callback,
                    onReverseComplete: callback,
                    onCompleteParams: params,
                    onReverseCompleteParams: params,
                    callbackScope: scope
                });
            };
            Tween.fromTo = function fromTo(targets, fromVars, toVars) {
                return _createTweenType(2, arguments);
            };
            Tween.set = function set(targets, vars) {
                vars.duration = 0;
                vars.repeatDelay || (vars.repeat = 0);
                return new Tween(targets, vars);
            };
            Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
                return _globalTimeline.killTweensOf(targets, props, onlyActive);
            };
            return Tween;
        }(Animation);
        _setDefaults(Tween.prototype, {
            _targets: [],
            _lazy: 0,
            _startAt: 0,
            _op: 0,
            _onInit: 0
        });
        _forEachName("staggerTo,staggerFrom,staggerFromTo", (function(name) {
            Tween[name] = function() {
                var tl = new Timeline, params = _slice.call(arguments, 0);
                params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
                return tl[name].apply(tl, params);
            };
        }));
        var _setterPlain = function _setterPlain(target, property, value) {
            return target[property] = value;
        }, _setterFunc = function _setterFunc(target, property, value) {
            return target[property](value);
        }, _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
            return target[property](data.fp, value);
        }, _setterAttribute = function _setterAttribute(target, property, value) {
            return target.setAttribute(property, value);
        }, _getSetter = function _getSetter(target, property) {
            return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
        }, _renderPlain = function _renderPlain(ratio, data) {
            return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
        }, _renderBoolean = function _renderBoolean(ratio, data) {
            return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
        }, _renderComplexString = function _renderComplexString(ratio, data) {
            var pt = data._pt, s = "";
            if (!ratio && data.b) s = data.b; else if (ratio === 1 && data.e) s = data.e; else {
                while (pt) {
                    s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
                    pt = pt._next;
                }
                s += data.c;
            }
            data.set(data.t, data.p, s, data);
        }, _renderPropTweens = function _renderPropTweens(ratio, data) {
            var pt = data._pt;
            while (pt) {
                pt.r(ratio, pt.d);
                pt = pt._next;
            }
        }, _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
            var next, pt = this._pt;
            while (pt) {
                next = pt._next;
                pt.p === property && pt.modifier(modifier, tween, target);
                pt = next;
            }
        }, _killPropTweensOf = function _killPropTweensOf(property) {
            var hasNonDependentRemaining, next, pt = this._pt;
            while (pt) {
                next = pt._next;
                if (pt.p === property && !pt.op || pt.op === property) _removeLinkedListItem(this, pt, "_pt"); else if (!pt.dep) hasNonDependentRemaining = 1;
                pt = next;
            }
            return !hasNonDependentRemaining;
        }, _setterWithModifier = function _setterWithModifier(target, property, value, data) {
            data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
        }, _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
            var next, pt2, first, last, pt = parent._pt;
            while (pt) {
                next = pt._next;
                pt2 = first;
                while (pt2 && pt2.pr > pt.pr) pt2 = pt2._next;
                if (pt._prev = pt2 ? pt2._prev : last) pt._prev._next = pt; else first = pt;
                if (pt._next = pt2) pt2._prev = pt; else last = pt;
                pt = next;
            }
            parent._pt = first;
        };
        var PropTween = function() {
            function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
                this.t = target;
                this.s = start;
                this.c = change;
                this.p = prop;
                this.r = renderer || _renderPlain;
                this.d = data || this;
                this.set = setter || _setterPlain;
                this.pr = priority || 0;
                this._next = next;
                if (next) next._prev = this;
            }
            var _proto4 = PropTween.prototype;
            _proto4.modifier = function modifier(func, tween, target) {
                this.mSet = this.mSet || this.set;
                this.set = _setterWithModifier;
                this.m = func;
                this.mt = target;
                this.tween = tween;
            };
            return PropTween;
        }();
        _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(name) {
            return _reservedProps[name] = 1;
        }));
        _globals.TweenMax = _globals.TweenLite = Tween;
        _globals.TimelineLite = _globals.TimelineMax = Timeline;
        _globalTimeline = new Timeline({
            sortChildren: false,
            defaults: _defaults,
            autoRemoveChildren: true,
            id: "root",
            smoothChildTiming: true
        });
        _config.stringFilter = _colorStringFilter;
        var _media = [], _listeners = {}, _emptyArray = [], _lastMediaTime = 0, _dispatch = function _dispatch(type) {
            return (_listeners[type] || _emptyArray).map((function(f) {
                return f();
            }));
        }, _onMediaChange = function _onMediaChange() {
            var time = Date.now(), matches = [];
            if (time - _lastMediaTime > 2) {
                _dispatch("matchMediaInit");
                _media.forEach((function(c) {
                    var match, p, anyMatch, toggled, queries = c.queries, conditions = c.conditions;
                    for (p in queries) {
                        match = _win.matchMedia(queries[p]).matches;
                        match && (anyMatch = 1);
                        if (match !== conditions[p]) {
                            conditions[p] = match;
                            toggled = 1;
                        }
                    }
                    if (toggled) {
                        c.revert();
                        anyMatch && matches.push(c);
                    }
                }));
                _dispatch("matchMediaRevert");
                matches.forEach((function(c) {
                    return c.onMatch(c);
                }));
                _lastMediaTime = time;
                _dispatch("matchMedia");
            }
        };
        var Context = function() {
            function Context(func, scope) {
                this.selector = scope && selector(scope);
                this.data = [];
                this._r = [];
                this.isReverted = false;
                func && this.add(func);
            }
            var _proto5 = Context.prototype;
            _proto5.add = function add(name, func, scope) {
                if (_isFunction(name)) {
                    scope = func;
                    func = name;
                    name = _isFunction;
                }
                var self = this, f = function f() {
                    var result, prev = _context, prevSelector = self.selector;
                    prev && prev !== self && prev.data.push(self);
                    scope && (self.selector = selector(scope));
                    _context = self;
                    result = func.apply(self, arguments);
                    _isFunction(result) && self._r.push(result);
                    _context = prev;
                    self.selector = prevSelector;
                    self.isReverted = false;
                    return result;
                };
                self.last = f;
                return name === _isFunction ? f(self) : name ? self[name] = f : f;
            };
            _proto5.ignore = function ignore(func) {
                var prev = _context;
                _context = null;
                func(this);
                _context = prev;
            };
            _proto5.getTweens = function getTweens() {
                var a = [];
                this.data.forEach((function(e) {
                    return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
                }));
                return a;
            };
            _proto5.clear = function clear() {
                this._r.length = this.data.length = 0;
            };
            _proto5.kill = function kill(revert, matchMedia) {
                var _this4 = this;
                if (revert) {
                    var tweens = this.getTweens();
                    this.data.forEach((function(t) {
                        if (t.data === "isFlip") {
                            t.revert();
                            t.getChildren(true, true, false).forEach((function(tween) {
                                return tweens.splice(tweens.indexOf(tween), 1);
                            }));
                        }
                    }));
                    tweens.map((function(t) {
                        return {
                            g: t.globalTime(0),
                            t
                        };
                    })).sort((function(a, b) {
                        return b.g - a.g || -1;
                    })).forEach((function(o) {
                        return o.t.revert(revert);
                    }));
                    this.data.forEach((function(e) {
                        return !(e instanceof Animation) && e.revert && e.revert(revert);
                    }));
                    this._r.forEach((function(f) {
                        return f(revert, _this4);
                    }));
                    this.isReverted = true;
                } else this.data.forEach((function(e) {
                    return e.kill && e.kill();
                }));
                this.clear();
                if (matchMedia) {
                    var i = _media.indexOf(this);
                    !!~i && _media.splice(i, 1);
                }
            };
            _proto5.revert = function revert(config) {
                this.kill(config || {});
            };
            return Context;
        }();
        var MatchMedia = function() {
            function MatchMedia(scope) {
                this.contexts = [];
                this.scope = scope;
            }
            var _proto6 = MatchMedia.prototype;
            _proto6.add = function add(conditions, func, scope) {
                _isObject(conditions) || (conditions = {
                    matches: conditions
                });
                var mq, p, active, context = new Context(0, scope || this.scope), cond = context.conditions = {};
                this.contexts.push(context);
                func = context.add("onMatch", func);
                context.queries = conditions;
                for (p in conditions) if (p === "all") active = 1; else {
                    mq = _win.matchMedia(conditions[p]);
                    if (mq) {
                        _media.indexOf(context) < 0 && _media.push(context);
                        (cond[p] = mq.matches) && (active = 1);
                        mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
                    }
                }
                active && func(context);
                return this;
            };
            _proto6.revert = function revert(config) {
                this.kill(config || {});
            };
            _proto6.kill = function kill(revert) {
                this.contexts.forEach((function(c) {
                    return c.kill(revert, true);
                }));
            };
            return MatchMedia;
        }();
        var _gsap = {
            registerPlugin: function registerPlugin() {
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                args.forEach((function(config) {
                    return _createPlugin(config);
                }));
            },
            timeline: function timeline(vars) {
                return new Timeline(vars);
            },
            getTweensOf: function getTweensOf(targets, onlyActive) {
                return _globalTimeline.getTweensOf(targets, onlyActive);
            },
            getProperty: function getProperty(target, property, unit, uncache) {
                _isString(target) && (target = toArray(target)[0]);
                var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
                unit === "native" && (unit = "");
                return !target ? target : !property ? function(property, unit, uncache) {
                    return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
                } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
            },
            quickSetter: function quickSetter(target, property, unit) {
                target = toArray(target);
                if (target.length > 1) {
                    var setters = target.map((function(t) {
                        return gsap.quickSetter(t, property, unit);
                    })), l = setters.length;
                    return function(value) {
                        var i = l;
                        while (i--) setters[i](value);
                    };
                }
                target = target[0] || {};
                var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
                    var p = new Plugin;
                    _quickTween._pt = 0;
                    p.init(target, unit ? value + unit : value, _quickTween, 0, [ target ]);
                    p.render(1, p);
                    _quickTween._pt && _renderPropTweens(1, _quickTween);
                } : cache.set(target, p);
                return Plugin ? setter : function(value) {
                    return setter(target, p, unit ? value + unit : value, cache, 1);
                };
            },
            quickTo: function quickTo(target, property, vars) {
                var _merge2;
                var tween = gsap.to(target, _merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, 
                _merge2), vars || {})), func = function func(value, start, startIsRelative) {
                    return tween.resetTo(property, value, start, startIsRelative);
                };
                func.tween = tween;
                return func;
            },
            isTweening: function isTweening(targets) {
                return _globalTimeline.getTweensOf(targets, true).length > 0;
            },
            defaults: function defaults(value) {
                value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
                return _mergeDeep(_defaults, value || {});
            },
            config: function config(value) {
                return _mergeDeep(_config, value || {});
            },
            registerEffect: function registerEffect(_ref3) {
                var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
                (plugins || "").split(",").forEach((function(pluginName) {
                    return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
                }));
                _effects[name] = function(targets, vars, tl) {
                    return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
                };
                if (extendTimeline) Timeline.prototype[name] = function(targets, vars, position) {
                    return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
                };
            },
            registerEase: function registerEase(name, ease) {
                _easeMap[name] = _parseEase(ease);
            },
            parseEase: function parseEase(ease, defaultEase) {
                return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
            },
            getById: function getById(id) {
                return _globalTimeline.getById(id);
            },
            exportRoot: function exportRoot(vars, includeDelayedCalls) {
                if (vars === void 0) vars = {};
                var child, next, tl = new Timeline(vars);
                tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
                _globalTimeline.remove(tl);
                tl._dp = 0;
                tl._time = tl._tTime = _globalTimeline._time;
                child = _globalTimeline._first;
                while (child) {
                    next = child._next;
                    if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) _addToTimeline(tl, child, child._start - child._delay);
                    child = next;
                }
                _addToTimeline(_globalTimeline, tl, 0);
                return tl;
            },
            context: function context(func, scope) {
                return func ? new Context(func, scope) : _context;
            },
            matchMedia: function matchMedia(scope) {
                return new MatchMedia(scope);
            },
            matchMediaRefresh: function matchMediaRefresh() {
                return _media.forEach((function(c) {
                    var found, p, cond = c.conditions;
                    for (p in cond) if (cond[p]) {
                        cond[p] = false;
                        found = 1;
                    }
                    found && c.revert();
                })) || _onMediaChange();
            },
            addEventListener: function addEventListener(type, callback) {
                var a = _listeners[type] || (_listeners[type] = []);
                ~a.indexOf(callback) || a.push(callback);
            },
            removeEventListener: function removeEventListener(type, callback) {
                var a = _listeners[type], i = a && a.indexOf(callback);
                i >= 0 && a.splice(i, 1);
            },
            utils: {
                wrap,
                wrapYoyo,
                distribute,
                random,
                snap,
                normalize,
                getUnit,
                clamp,
                splitColor,
                toArray,
                selector,
                mapRange,
                pipe,
                unitize,
                interpolate,
                shuffle
            },
            install: _install,
            effects: _effects,
            ticker: _ticker,
            updateRoot: Timeline.updateRoot,
            plugins: _plugins,
            globalTimeline: _globalTimeline,
            core: {
                PropTween,
                globals: _addGlobal,
                Tween,
                Timeline,
                Animation,
                getCache: _getCache,
                _removeLinkedListItem,
                reverting: function reverting() {
                    return _reverting;
                },
                context: function context(toAdd) {
                    if (toAdd && _context) {
                        _context.data.push(toAdd);
                        toAdd._ctx = _context;
                    }
                    return _context;
                },
                suppressOverwrites: function suppressOverwrites(value) {
                    return _suppressOverwrites = value;
                }
            }
        };
        _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", (function(name) {
            return _gsap[name] = Tween[name];
        }));
        _ticker.add(Timeline.updateRoot);
        _quickTween = _gsap.to({}, {
            duration: 0
        });
        var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
            var pt = plugin._pt;
            while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) pt = pt._next;
            return pt;
        }, _addModifiers = function _addModifiers(tween, modifiers) {
            var p, i, pt, targets = tween._targets;
            for (p in modifiers) {
                i = targets.length;
                while (i--) {
                    pt = tween._ptLookup[i][p];
                    if (pt && (pt = pt.d)) {
                        if (pt._pt) pt = _getPluginPropTween(pt, p);
                        pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
                    }
                }
            }
        }, _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
            return {
                name,
                rawVars: 1,
                init: function init(target, vars, tween) {
                    tween._onInit = function(tween) {
                        var temp, p;
                        if (_isString(vars)) {
                            temp = {};
                            _forEachName(vars, (function(name) {
                                return temp[name] = 1;
                            }));
                            vars = temp;
                        }
                        if (modifier) {
                            temp = {};
                            for (p in vars) temp[p] = modifier(vars[p]);
                            vars = temp;
                        }
                        _addModifiers(tween, vars);
                    };
                }
            };
        };
        var gsap = _gsap.registerPlugin({
            name: "attr",
            init: function init(target, vars, tween, index, targets) {
                var p, pt, v;
                this.tween = tween;
                for (p in vars) {
                    v = target.getAttribute(p) || "";
                    pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
                    pt.op = p;
                    pt.b = v;
                    this._props.push(p);
                }
            },
            render: function render(ratio, data) {
                var pt = data._pt;
                while (pt) {
                    _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
                    pt = pt._next;
                }
            }
        }, {
            name: "endArray",
            init: function init(target, value) {
                var i = value.length;
                while (i--) this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
            }
        }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
        Tween.version = Timeline.version = gsap.version = "3.11.5";
        _coreReady = 1;
        _windowExists() && _wake();
        _easeMap.Power0, _easeMap.Power1, _easeMap.Power2, _easeMap.Power3, _easeMap.Power4, 
        _easeMap.Linear, _easeMap.Quad, _easeMap.Cubic, _easeMap.Quart, _easeMap.Quint, 
        _easeMap.Strong, _easeMap.Elastic, _easeMap.Back, _easeMap.SteppedEase, _easeMap.Bounce, 
        _easeMap.Sine, _easeMap.Expo, _easeMap.Circ;
        /*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
        var CSSPlugin_win, CSSPlugin_doc, _docElement, _pluginInitted, _tempDiv, _recentSetterPlugin, CSSPlugin_reverting, _supports3D, CSSPlugin_windowExists = function _windowExists() {
            return typeof window !== "undefined";
        }, _transformProps = {}, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _atan2 = Math.atan2, CSSPlugin_bigNum = 1e8, _capsExp = /([A-Z])/g, _horizontalExp = /(left|right|width|margin|padding|x)/i, _complexExp = /[\s,\(]\S/, _propertyAliases = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        }, _renderCSSProp = function _renderCSSProp(ratio, data) {
            return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
        }, _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
            return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
        }, _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
            return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
        }, _renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
            var value = data.s + data.c * ratio;
            data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
        }, _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
            return data.set(data.t, data.p, ratio ? data.e : data.b, data);
        }, _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
            return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
        }, _setterCSSStyle = function _setterCSSStyle(target, property, value) {
            return target.style[property] = value;
        }, _setterCSSProp = function _setterCSSProp(target, property, value) {
            return target.style.setProperty(property, value);
        }, _setterTransform = function _setterTransform(target, property, value) {
            return target._gsap[property] = value;
        }, _setterScale = function _setterScale(target, property, value) {
            return target._gsap.scaleX = target._gsap.scaleY = value;
        }, _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
            var cache = target._gsap;
            cache.scaleX = cache.scaleY = value;
            cache.renderTransform(ratio, cache);
        }, _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
            var cache = target._gsap;
            cache[property] = value;
            cache.renderTransform(ratio, cache);
        }, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _saveStyle = function _saveStyle(property, isNotCSS) {
            var _this = this;
            var target = this.target, style = target.style;
            if (property in _transformProps) {
                this.tfm = this.tfm || {};
                if (property !== "transform") {
                    property = _propertyAliases[property] || property;
                    ~property.indexOf(",") ? property.split(",").forEach((function(a) {
                        return _this.tfm[a] = _get(target, a);
                    })) : this.tfm[property] = target._gsap.x ? target._gsap[property] : _get(target, property);
                } else return _propertyAliases.transform.split(",").forEach((function(p) {
                    return _saveStyle.call(_this, p, isNotCSS);
                }));
                if (this.props.indexOf(_transformProp) >= 0) return;
                if (target._gsap.svg) {
                    this.svgo = target.getAttribute("data-svg-origin");
                    this.props.push(_transformOriginProp, isNotCSS, "");
                }
                property = _transformProp;
            }
            (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
        }, _removeIndependentTransforms = function _removeIndependentTransforms(style) {
            if (style.translate) {
                style.removeProperty("translate");
                style.removeProperty("scale");
                style.removeProperty("rotate");
            }
        }, _revertStyle = function _revertStyle() {
            var i, p, props = this.props, target = this.target, style = target.style, cache = target._gsap;
            for (i = 0; i < props.length; i += 3) props[i + 1] ? target[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
            if (this.tfm) {
                for (p in this.tfm) cache[p] = this.tfm[p];
                if (cache.svg) {
                    cache.renderTransform();
                    target.setAttribute("data-svg-origin", this.svgo || "");
                }
                i = CSSPlugin_reverting();
                if ((!i || !i.isStart) && !style[_transformProp]) {
                    _removeIndependentTransforms(style);
                    cache.uncache = 1;
                }
            }
        }, _getStyleSaver = function _getStyleSaver(target, properties) {
            var saver = {
                target,
                props: [],
                revert: _revertStyle,
                save: _saveStyle
            };
            target._gsap || gsap.core.getCache(target);
            properties && properties.split(",").forEach((function(p) {
                return saver.save(p);
            }));
            return saver;
        }, _createElement = function _createElement(type, ns) {
            var e = CSSPlugin_doc.createElementNS ? CSSPlugin_doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : CSSPlugin_doc.createElement(type);
            return e.style ? e : CSSPlugin_doc.createElement(type);
        }, _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
            var cs = getComputedStyle(target);
            return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || "";
        }, _prefixes = "O,Moz,ms,Ms,Webkit".split(","), _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
            var e = element || _tempDiv, s = e.style, i = 5;
            if (property in s && !preferPrefix) return property;
            property = property.charAt(0).toUpperCase() + property.substr(1);
            while (i-- && !(_prefixes[i] + property in s)) ;
            return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
        }, _initCore = function _initCore() {
            if (CSSPlugin_windowExists() && window.document) {
                CSSPlugin_win = window;
                CSSPlugin_doc = CSSPlugin_win.document;
                _docElement = CSSPlugin_doc.documentElement;
                _tempDiv = _createElement("div") || {
                    style: {}
                };
                _createElement("div");
                _transformProp = _checkPropPrefix(_transformProp);
                _transformOriginProp = _transformProp + "Origin";
                _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
                _supports3D = !!_checkPropPrefix("perspective");
                CSSPlugin_reverting = gsap.core.reverting;
                _pluginInitted = 1;
            }
        }, _getBBoxHack = function _getBBoxHack(swapIfPossible) {
            var bbox, svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText;
            _docElement.appendChild(svg);
            svg.appendChild(this);
            this.style.display = "block";
            if (swapIfPossible) try {
                bbox = this.getBBox();
                this._gsapBBox = this.getBBox;
                this.getBBox = _getBBoxHack;
            } catch (e) {} else if (this._gsapBBox) bbox = this._gsapBBox();
            if (oldParent) if (oldSibling) oldParent.insertBefore(this, oldSibling); else oldParent.appendChild(this);
            _docElement.removeChild(svg);
            this.style.cssText = oldCSS;
            return bbox;
        }, _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
            var i = attributesArray.length;
            while (i--) if (target.hasAttribute(attributesArray[i])) return target.getAttribute(attributesArray[i]);
        }, _getBBox = function _getBBox(target) {
            var bounds;
            try {
                bounds = target.getBBox();
            } catch (error) {
                bounds = _getBBoxHack.call(target, true);
            }
            bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
            return bounds && !bounds.width && !bounds.x && !bounds.y ? {
                x: +_getAttributeFallbacks(target, [ "x", "cx", "x1" ]) || 0,
                y: +_getAttributeFallbacks(target, [ "y", "cy", "y1" ]) || 0,
                width: 0,
                height: 0
            } : bounds;
        }, _isSVG = function _isSVG(e) {
            return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
        }, _removeProperty = function _removeProperty(target, property) {
            if (property) {
                var style = target.style;
                if (property in _transformProps && property !== _transformOriginProp) property = _transformProp;
                if (style.removeProperty) {
                    if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") property = "-" + property;
                    style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
                } else style.removeAttribute(property);
            }
        }, _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
            var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
            plugin._pt = pt;
            pt.b = beginning;
            pt.e = end;
            plugin._props.push(property);
            return pt;
        }, _nonConvertibleUnits = {
            deg: 1,
            rad: 1,
            turn: 1
        }, _nonStandardLayouts = {
            grid: 1,
            flex: 1
        }, _convertToUnit = function _convertToUnit(target, property, value, unit) {
            var px, parent, cache, isSVG, curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%";
            if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) return curValue;
            curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
            isSVG = target.getCTM && _isSVG(target);
            if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
                px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
                return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
            }
            style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
            parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
            if (isSVG) parent = (target.ownerSVGElement || {}).parentNode;
            if (!parent || parent === CSSPlugin_doc || !parent.appendChild) parent = CSSPlugin_doc.body;
            cache = parent._gsap;
            if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) return _round(curValue / cache.width * amount); else {
                (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
                parent === target && (style.position = "static");
                parent.appendChild(_tempDiv);
                px = _tempDiv[measureProperty];
                parent.removeChild(_tempDiv);
                style.position = "absolute";
                if (horizontal && toPercent) {
                    cache = _getCache(parent);
                    cache.time = _ticker.time;
                    cache.width = parent[measureProperty];
                }
            }
            return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
        }, _get = function _get(target, property, unit, uncache) {
            var value;
            _pluginInitted || _initCore();
            if (property in _propertyAliases && property !== "transform") {
                property = _propertyAliases[property];
                if (~property.indexOf(",")) property = property.split(",")[0];
            }
            if (_transformProps[property] && property !== "transform") {
                value = _parseTransform(target, uncache);
                value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
            } else {
                value = target.style[property];
                if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
            }
            return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
        }, _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
            if (!start || start === "none") {
                var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
                if (s && s !== start) {
                    prop = p;
                    start = s;
                } else if (prop === "borderColor") start = _getComputedProperty(target, "borderTopColor");
            }
            var a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues, pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0;
            pt.b = start;
            pt.e = end;
            start += "";
            end += "";
            if (end === "auto") {
                target.style[prop] = end;
                end = _getComputedProperty(target, prop) || end;
                target.style[prop] = start;
            }
            a = [ start, end ];
            _colorStringFilter(a);
            start = a[0];
            end = a[1];
            startValues = start.match(_numWithUnitExp) || [];
            endValues = end.match(_numWithUnitExp) || [];
            if (endValues.length) {
                while (result = _numWithUnitExp.exec(end)) {
                    endValue = result[0];
                    chunk = end.substring(index, result.index);
                    if (color) color = (color + 1) % 5; else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") color = 1;
                    if (endValue !== (startValue = startValues[matchIndex++] || "")) {
                        startNum = parseFloat(startValue) || 0;
                        startUnit = startValue.substr((startNum + "").length);
                        endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
                        endNum = parseFloat(endValue);
                        endUnit = endValue.substr((endNum + "").length);
                        index = _numWithUnitExp.lastIndex - endUnit.length;
                        if (!endUnit) {
                            endUnit = endUnit || _config.units[prop] || startUnit;
                            if (index === end.length) {
                                end += endUnit;
                                pt.e += endUnit;
                            }
                        }
                        if (startUnit !== endUnit) startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
                        pt._pt = {
                            _next: pt._pt,
                            p: chunk || matchIndex === 1 ? chunk : ",",
                            s: startNum,
                            c: endNum - startNum,
                            m: color && color < 4 || prop === "zIndex" ? Math.round : 0
                        };
                    }
                }
                pt.c = index < end.length ? end.substring(index, end.length) : "";
            } else pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
            _relExp.test(end) && (pt.e = 0);
            this._pt = pt;
            return pt;
        }, _keywordToPercent = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        }, _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
            var split = value.split(" "), x = split[0], y = split[1] || "50%";
            if (x === "top" || x === "bottom" || y === "left" || y === "right") {
                value = x;
                x = y;
                y = value;
            }
            split[0] = _keywordToPercent[x] || x;
            split[1] = _keywordToPercent[y] || y;
            return split.join(" ");
        }, _renderClearProps = function _renderClearProps(ratio, data) {
            if (data.tween && data.tween._time === data.tween._dur) {
                var prop, clearTransforms, i, target = data.t, style = target.style, props = data.u, cache = target._gsap;
                if (props === "all" || props === true) {
                    style.cssText = "";
                    clearTransforms = 1;
                } else {
                    props = props.split(",");
                    i = props.length;
                    while (--i > -1) {
                        prop = props[i];
                        if (_transformProps[prop]) {
                            clearTransforms = 1;
                            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
                        }
                        _removeProperty(target, prop);
                    }
                }
                if (clearTransforms) {
                    _removeProperty(target, _transformProp);
                    if (cache) {
                        cache.svg && target.removeAttribute("transform");
                        _parseTransform(target, 1);
                        cache.uncache = 1;
                        _removeIndependentTransforms(style);
                    }
                }
            }
        }, _specialProps = {
            clearProps: function clearProps(plugin, target, property, endValue, tween) {
                if (tween.data !== "isFromStart") {
                    var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
                    pt.u = endValue;
                    pt.pr = -10;
                    pt.tween = tween;
                    plugin._props.push(property);
                    return 1;
                }
            }
        }, _identity2DMatrix = [ 1, 0, 0, 1, 0, 0 ], _rotationalProperties = {}, _isNullTransform = function _isNullTransform(value) {
            return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
        }, _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
            var matrixString = _getComputedProperty(target, _transformProp);
            return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
        }, _getMatrix = function _getMatrix(target, force2D) {
            var parent, nextSibling, temp, addedToDOM, cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target);
            if (cache.svg && target.getAttribute("transform")) {
                temp = target.transform.baseVal.consolidate().matrix;
                matrix = [ temp.a, temp.b, temp.c, temp.d, temp.e, temp.f ];
                return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
            } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
                temp = style.display;
                style.display = "block";
                parent = target.parentNode;
                if (!parent || !target.offsetParent) {
                    addedToDOM = 1;
                    nextSibling = target.nextElementSibling;
                    _docElement.appendChild(target);
                }
                matrix = _getComputedTransformMatrixAsArray(target);
                temp ? style.display = temp : _removeProperty(target, "display");
                if (addedToDOM) nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
            }
            return force2D && matrix.length > 6 ? [ matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13] ] : matrix;
        }, _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
            var bounds, determinant, x, y, cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0;
            if (!originIsAbsolute) {
                bounds = _getBBox(target);
                xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
                yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
            } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
                x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
                y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
                xOrigin = x;
                yOrigin = y;
            }
            if (smooth || smooth !== false && cache.smooth) {
                tx = xOrigin - xOriginOld;
                ty = yOrigin - yOriginOld;
                cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
                cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
            } else cache.xOffset = cache.yOffset = 0;
            cache.xOrigin = xOrigin;
            cache.yOrigin = yOrigin;
            cache.smooth = !!smooth;
            cache.origin = origin;
            cache.originIsAbsolute = !!originIsAbsolute;
            target.style[_transformOriginProp] = "0px 0px";
            if (pluginToAddPropTweensTo) {
                _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
                _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
                _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
                _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
            }
            target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
        }, _parseTransform = function _parseTransform(target, uncache) {
            var cache = target._gsap || new GSCache(target);
            if ("x" in cache && !uncache && !cache.uncache) return cache;
            var x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32, style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0";
            x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
            scaleX = scaleY = 1;
            cache.svg = !!(target.getCTM && _isSVG(target));
            if (cs.translate) {
                if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
                style.scale = style.rotate = style.translate = "none";
            }
            matrix = _getMatrix(target, cache.svg);
            if (cache.svg) {
                if (cache.uncache) {
                    t2 = target.getBBox();
                    origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
                    t1 = "";
                } else t1 = !uncache && target.getAttribute("data-svg-origin");
                _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
            }
            xOrigin = cache.xOrigin || 0;
            yOrigin = cache.yOrigin || 0;
            if (matrix !== _identity2DMatrix) {
                a = matrix[0];
                b = matrix[1];
                c = matrix[2];
                d = matrix[3];
                x = a12 = matrix[4];
                y = a22 = matrix[5];
                if (matrix.length === 6) {
                    scaleX = Math.sqrt(a * a + b * b);
                    scaleY = Math.sqrt(d * d + c * c);
                    rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
                    skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
                    skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
                    if (cache.svg) {
                        x -= xOrigin - (xOrigin * a + yOrigin * c);
                        y -= yOrigin - (xOrigin * b + yOrigin * d);
                    }
                } else {
                    a32 = matrix[6];
                    a42 = matrix[7];
                    a13 = matrix[8];
                    a23 = matrix[9];
                    a33 = matrix[10];
                    a43 = matrix[11];
                    x = matrix[12];
                    y = matrix[13];
                    z = matrix[14];
                    angle = _atan2(a32, a33);
                    rotationX = angle * _RAD2DEG;
                    if (angle) {
                        cos = Math.cos(-angle);
                        sin = Math.sin(-angle);
                        t1 = a12 * cos + a13 * sin;
                        t2 = a22 * cos + a23 * sin;
                        t3 = a32 * cos + a33 * sin;
                        a13 = a12 * -sin + a13 * cos;
                        a23 = a22 * -sin + a23 * cos;
                        a33 = a32 * -sin + a33 * cos;
                        a43 = a42 * -sin + a43 * cos;
                        a12 = t1;
                        a22 = t2;
                        a32 = t3;
                    }
                    angle = _atan2(-c, a33);
                    rotationY = angle * _RAD2DEG;
                    if (angle) {
                        cos = Math.cos(-angle);
                        sin = Math.sin(-angle);
                        t1 = a * cos - a13 * sin;
                        t2 = b * cos - a23 * sin;
                        t3 = c * cos - a33 * sin;
                        a43 = d * sin + a43 * cos;
                        a = t1;
                        b = t2;
                        c = t3;
                    }
                    angle = _atan2(b, a);
                    rotation = angle * _RAD2DEG;
                    if (angle) {
                        cos = Math.cos(angle);
                        sin = Math.sin(angle);
                        t1 = a * cos + b * sin;
                        t2 = a12 * cos + a22 * sin;
                        b = b * cos - a * sin;
                        a22 = a22 * cos - a12 * sin;
                        a = t1;
                        a12 = t2;
                    }
                    if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
                        rotationX = rotation = 0;
                        rotationY = 180 - rotationY;
                    }
                    scaleX = _round(Math.sqrt(a * a + b * b + c * c));
                    scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
                    angle = _atan2(a12, a22);
                    skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
                    perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
                }
                if (cache.svg) {
                    t1 = target.getAttribute("transform");
                    cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
                    t1 && target.setAttribute("transform", t1);
                }
            }
            if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) if (invertedScaleX) {
                scaleX *= -1;
                skewX += rotation <= 0 ? 180 : -180;
                rotation += rotation <= 0 ? 180 : -180;
            } else {
                scaleY *= -1;
                skewX += skewX <= 0 ? 180 : -180;
            }
            uncache = uncache || cache.uncache;
            cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
            cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
            cache.z = z + px;
            cache.scaleX = _round(scaleX);
            cache.scaleY = _round(scaleY);
            cache.rotation = _round(rotation) + deg;
            cache.rotationX = _round(rotationX) + deg;
            cache.rotationY = _round(rotationY) + deg;
            cache.skewX = skewX + deg;
            cache.skewY = skewY + deg;
            cache.transformPerspective = perspective + px;
            if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) style[_transformOriginProp] = _firstTwoOnly(origin);
            cache.xOffset = cache.yOffset = 0;
            cache.force3D = _config.force3D;
            cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
            cache.uncache = 0;
            return cache;
        }, _firstTwoOnly = function _firstTwoOnly(value) {
            return (value = value.split(" "))[0] + " " + value[1];
        }, _addPxTranslate = function _addPxTranslate(target, start, value) {
            var unit = getUnit(start);
            return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
        }, _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
            cache.z = "0px";
            cache.rotationY = cache.rotationX = "0deg";
            cache.force3D = 0;
            _renderCSSTransforms(ratio, cache);
        }, _zeroDeg = "0deg", _zeroPx = "0px", _endParenthesis = ") ", _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
            var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
            if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
                var cos, angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle);
                angle = parseFloat(rotationX) * _DEG2RAD;
                cos = Math.cos(angle);
                x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
                y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
                z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
            }
            if (transformPerspective !== _zeroPx) transforms += "perspective(" + transformPerspective + _endParenthesis;
            if (xPercent || yPercent) transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
            if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
            if (rotation !== _zeroDeg) transforms += "rotate(" + rotation + _endParenthesis;
            if (rotationY !== _zeroDeg) transforms += "rotateY(" + rotationY + _endParenthesis;
            if (rotationX !== _zeroDeg) transforms += "rotateX(" + rotationX + _endParenthesis;
            if (skewX !== _zeroDeg || skewY !== _zeroDeg) transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
            if (scaleX !== 1 || scaleY !== 1) transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
            target.style[_transformProp] = transforms || "translate(0, 0)";
        }, _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
            var a11, a21, a12, a22, temp, _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y);
            rotation = parseFloat(rotation);
            skewX = parseFloat(skewX);
            skewY = parseFloat(skewY);
            if (skewY) {
                skewY = parseFloat(skewY);
                skewX += skewY;
                rotation += skewY;
            }
            if (rotation || skewX) {
                rotation *= _DEG2RAD;
                skewX *= _DEG2RAD;
                a11 = Math.cos(rotation) * scaleX;
                a21 = Math.sin(rotation) * scaleX;
                a12 = Math.sin(rotation - skewX) * -scaleY;
                a22 = Math.cos(rotation - skewX) * scaleY;
                if (skewX) {
                    skewY *= _DEG2RAD;
                    temp = Math.tan(skewX - skewY);
                    temp = Math.sqrt(1 + temp * temp);
                    a12 *= temp;
                    a22 *= temp;
                    if (skewY) {
                        temp = Math.tan(skewY);
                        temp = Math.sqrt(1 + temp * temp);
                        a11 *= temp;
                        a21 *= temp;
                    }
                }
                a11 = _round(a11);
                a21 = _round(a21);
                a12 = _round(a12);
                a22 = _round(a22);
            } else {
                a11 = scaleX;
                a22 = scaleY;
                a21 = a12 = 0;
            }
            if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
                tx = _convertToUnit(target, "x", x, "px");
                ty = _convertToUnit(target, "y", y, "px");
            }
            if (xOrigin || yOrigin || xOffset || yOffset) {
                tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
                ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
            }
            if (xPercent || yPercent) {
                temp = target.getBBox();
                tx = _round(tx + xPercent / 100 * temp.width);
                ty = _round(ty + yPercent / 100 * temp.height);
            }
            temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
            target.setAttribute("transform", temp);
            forceCSS && (target.style[_transformProp] = temp);
        }, _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
            var direction, pt, cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg";
            if (isString) {
                direction = endValue.split("_")[1];
                if (direction === "short") {
                    change %= cap;
                    if (change !== change % (cap / 2)) change += change < 0 ? cap : -cap;
                }
                if (direction === "cw" && change < 0) change = (change + cap * CSSPlugin_bigNum) % cap - ~~(change / cap) * cap; else if (direction === "ccw" && change > 0) change = (change - cap * CSSPlugin_bigNum) % cap - ~~(change / cap) * cap;
            }
            plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
            pt.e = finalValue;
            pt.u = "deg";
            plugin._props.push(property);
            return pt;
        }, _assign = function _assign(target, source) {
            for (var p in source) target[p] = source[p];
            return target;
        }, _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
            var endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit, startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style;
            if (startCache.svg) {
                startValue = target.getAttribute("transform");
                target.setAttribute("transform", "");
                style[_transformProp] = transforms;
                endCache = _parseTransform(target, 1);
                _removeProperty(target, _transformProp);
                target.setAttribute("transform", startValue);
            } else {
                startValue = getComputedStyle(target)[_transformProp];
                style[_transformProp] = transforms;
                endCache = _parseTransform(target, 1);
                style[_transformProp] = startValue;
            }
            for (p in _transformProps) {
                startValue = startCache[p];
                endValue = endCache[p];
                if (startValue !== endValue && exclude.indexOf(p) < 0) {
                    startUnit = getUnit(startValue);
                    endUnit = getUnit(endValue);
                    startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
                    endNum = parseFloat(endValue);
                    plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
                    plugin._pt.u = endUnit || 0;
                    plugin._props.push(p);
                }
            }
            _assign(endCache, startCache);
        };
        _forEachName("padding,margin,Width,Radius", (function(name, index) {
            var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [ t, r, b, l ] : [ t + l, t + r, b + r, b + l ]).map((function(side) {
                return index < 2 ? name + side : "border" + side + name;
            }));
            _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
                var a, vars;
                if (arguments.length < 4) {
                    a = props.map((function(prop) {
                        return _get(plugin, prop, property);
                    }));
                    vars = a.join(" ");
                    return vars.split(a[0]).length === 5 ? a[0] : vars;
                }
                a = (endValue + "").split(" ");
                vars = {};
                props.forEach((function(prop, i) {
                    return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
                }));
                plugin.init(target, vars, tween);
            };
        }));
        var CSSPlugin = {
            name: "css",
            register: _initCore,
            targetTest: function targetTest(target) {
                return target.style && target.nodeType;
            },
            init: function init(target, vars, tween, index, targets) {
                var startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps, props = this._props, style = target.style, startAt = tween.vars.startAt;
                _pluginInitted || _initCore();
                this.styles = this.styles || _getStyleSaver(target);
                inlineProps = this.styles.props;
                this.tween = tween;
                for (p in vars) {
                    if (p === "autoRound") continue;
                    endValue = vars[p];
                    if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) continue;
                    type = typeof endValue;
                    specialProp = _specialProps[p];
                    if (type === "function") {
                        endValue = endValue.call(tween, index, target, targets);
                        type = typeof endValue;
                    }
                    if (type === "string" && ~endValue.indexOf("random(")) endValue = _replaceRandom(endValue);
                    if (specialProp) specialProp(this, target, p, endValue, tween) && (hasPriority = 1); else if (p.substr(0, 2) === "--") {
                        startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
                        endValue += "";
                        _colorExp.lastIndex = 0;
                        if (!_colorExp.test(startValue)) {
                            startUnit = getUnit(startValue);
                            endUnit = getUnit(endValue);
                        }
                        endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
                        this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
                        props.push(p);
                        inlineProps.push(p, 0, style[p]);
                    } else if (type !== "undefined") {
                        if (startAt && p in startAt) {
                            startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
                            _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
                            getUnit(startValue + "") || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
                            (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
                        } else startValue = _get(target, p);
                        startNum = parseFloat(startValue);
                        relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
                        relative && (endValue = endValue.substr(2));
                        endNum = parseFloat(endValue);
                        if (p in _propertyAliases) {
                            if (p === "autoAlpha") {
                                if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) startNum = 0;
                                inlineProps.push("visibility", 0, style.visibility);
                                _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
                            }
                            if (p !== "scale" && p !== "transform") {
                                p = _propertyAliases[p];
                                ~p.indexOf(",") && (p = p.split(",")[0]);
                            }
                        }
                        isTransformRelated = p in _transformProps;
                        if (isTransformRelated) {
                            this.styles.save(p);
                            if (!transformPropTween) {
                                cache = target._gsap;
                                cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
                                smooth = vars.smoothOrigin !== false && cache.smooth;
                                transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
                                transformPropTween.dep = 1;
                            }
                            if (p === "scale") {
                                this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
                                this._pt.u = 0;
                                props.push("scaleY", p);
                                p += "X";
                            } else if (p === "transformOrigin") {
                                inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
                                endValue = _convertKeywordsToPercentages(endValue);
                                if (cache.svg) _applySVGOrigin(target, endValue, 0, smooth, 0, this); else {
                                    endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                                    endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                                    _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
                                }
                                continue;
                            } else if (p === "svgOrigin") {
                                _applySVGOrigin(target, endValue, 1, smooth, 0, this);
                                continue;
                            } else if (p in _rotationalProperties) {
                                _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
                                continue;
                            } else if (p === "smoothOrigin") {
                                _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
                                continue;
                            } else if (p === "force3D") {
                                cache[p] = endValue;
                                continue;
                            } else if (p === "transform") {
                                _addRawTransformPTs(this, endValue, target);
                                continue;
                            }
                        } else if (!(p in style)) p = _checkPropPrefix(p) || p;
                        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
                            startUnit = (startValue + "").substr((startNum + "").length);
                            endNum || (endNum = 0);
                            endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
                            startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
                            this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
                            this._pt.u = endUnit || 0;
                            if (startUnit !== endUnit && endUnit !== "%") {
                                this._pt.b = startValue;
                                this._pt.r = _renderCSSPropWithBeginning;
                            }
                        } else if (!(p in style)) {
                            if (p in target) this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets); else if (p !== "parseTransform") {
                                _missingPlugin(p, endValue);
                                continue;
                            }
                        } else _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
                        isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
                        props.push(p);
                    }
                }
                hasPriority && _sortPropTweensByPriority(this);
            },
            render: function render(ratio, data) {
                if (data.tween._time || !CSSPlugin_reverting()) {
                    var pt = data._pt;
                    while (pt) {
                        pt.r(ratio, pt.d);
                        pt = pt._next;
                    }
                } else data.styles.revert();
            },
            get: _get,
            aliases: _propertyAliases,
            getSetter: function getSetter(target, property, plugin) {
                var p = _propertyAliases[property];
                p && p.indexOf(",") < 0 && (property = p);
                return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
            },
            core: {
                _removeProperty,
                _getMatrix
            }
        };
        gsap.utils.checkPrefix = _checkPropPrefix;
        gsap.core.getStyleSaver = _getStyleSaver;
        (function(positionAndScale, rotation, others, aliases) {
            var all = _forEachName(positionAndScale + "," + rotation + "," + others, (function(name) {
                _transformProps[name] = 1;
            }));
            _forEachName(rotation, (function(name) {
                _config.units[name] = "deg";
                _rotationalProperties[name] = 1;
            }));
            _propertyAliases[all[13]] = positionAndScale + "," + rotation;
            _forEachName(aliases, (function(name) {
                var split = name.split(":");
                _propertyAliases[split[1]] = all[split[0]];
            }));
        })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
        _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(name) {
            _config.units[name] = "px";
        }));
        gsap.registerPlugin(CSSPlugin);
        var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
        gsapWithCSS.core.Tween;
        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor;
        }
        /*!
 * Observer 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/        var Observer_gsap, Observer_coreInitted, Observer_win, Observer_doc, _docEl, _body, _isTouch, _pointerType, ScrollTrigger, _root, _normalizer, _eventTypes, Observer_context, _getGSAP = function _getGSAP() {
            return Observer_gsap || typeof window !== "undefined" && (Observer_gsap = window.gsap) && Observer_gsap.registerPlugin && Observer_gsap;
        }, _startup = 1, _observers = [], _scrollers = [], _proxies = [], _getTime = Date.now, _bridge = function _bridge(name, value) {
            return value;
        }, _integrate = function _integrate() {
            var core = ScrollTrigger.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
            scrollers.push.apply(scrollers, _scrollers);
            proxies.push.apply(proxies, _proxies);
            _scrollers = scrollers;
            _proxies = proxies;
            _bridge = function _bridge(name, value) {
                return data[name](value);
            };
        }, _getProxyProp = function _getProxyProp(element, property) {
            return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
        }, _isViewport = function _isViewport(el) {
            return !!~_root.indexOf(el);
        }, _addListener = function _addListener(element, type, func, nonPassive, capture) {
            return element.addEventListener(type, func, {
                passive: !nonPassive,
                capture: !!capture
            });
        }, _removeListener = function _removeListener(element, type, func, capture) {
            return element.removeEventListener(type, func, !!capture);
        }, _scrollLeft = "scrollLeft", _scrollTop = "scrollTop", _onScroll = function _onScroll() {
            return _normalizer && _normalizer.isPressed || _scrollers.cache++;
        }, _scrollCacheFunc = function _scrollCacheFunc(f, doNotCache) {
            var cachingFunc = function cachingFunc(value) {
                if (value || value === 0) {
                    _startup && (Observer_win.history.scrollRestoration = "manual");
                    var isNormalizing = _normalizer && _normalizer.isPressed;
                    value = cachingFunc.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0);
                    f(value);
                    cachingFunc.cacheID = _scrollers.cache;
                    isNormalizing && _bridge("ss", value);
                } else if (doNotCache || _scrollers.cache !== cachingFunc.cacheID || _bridge("ref")) {
                    cachingFunc.cacheID = _scrollers.cache;
                    cachingFunc.v = f();
                }
                return cachingFunc.v + cachingFunc.offset;
            };
            cachingFunc.offset = 0;
            return f && cachingFunc;
        }, _horizontal = {
            s: _scrollLeft,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: _scrollCacheFunc((function(value) {
                return arguments.length ? Observer_win.scrollTo(value, _vertical.sc()) : Observer_win.pageXOffset || Observer_doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
            }))
        }, _vertical = {
            s: _scrollTop,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: _horizontal,
            sc: _scrollCacheFunc((function(value) {
                return arguments.length ? Observer_win.scrollTo(_horizontal.sc(), value) : Observer_win.pageYOffset || Observer_doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
            }))
        }, _getTarget = function _getTarget(t) {
            return Observer_gsap.utils.toArray(t)[0] || (typeof t === "string" && Observer_gsap.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
        }, _getScrollFunc = function _getScrollFunc(element, _ref) {
            var s = _ref.s, sc = _ref.sc;
            _isViewport(element) && (element = Observer_doc.scrollingElement || _docEl);
            var i = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
            !~i && (i = _scrollers.push(element) - 1);
            _scrollers[i + offset] || element.addEventListener("scroll", _onScroll);
            var prev = _scrollers[i + offset], func = prev || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport(element) ? sc : _scrollCacheFunc((function(value) {
                return arguments.length ? element[s] = value : element[s];
            }))));
            func.target = element;
            prev || (func.smooth = Observer_gsap.getProperty(element, "scrollBehavior") === "smooth");
            return func;
        }, _getVelocityProp = function _getVelocityProp(value, minTimeRefresh, useDelta) {
            var v1 = value, v2 = value, t1 = _getTime(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update = function update(value, force) {
                var t = _getTime();
                if (force || t - t1 > min) {
                    v2 = v1;
                    v1 = value;
                    t2 = t1;
                    t1 = t;
                } else if (useDelta) v1 += value; else v1 = v2 + (value - v2) / (t - t2) * (t1 - t2);
            }, reset = function reset() {
                v2 = v1 = useDelta ? 0 : v1;
                t2 = t1 = 0;
            }, getVelocity = function getVelocity(latestValue) {
                var tOld = t2, vOld = v2, t = _getTime();
                (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
                return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1e3;
            };
            return {
                update,
                reset,
                getVelocity
            };
        }, _getEvent = function _getEvent(e, preventDefault) {
            preventDefault && !e._gsapAllow && e.preventDefault();
            return e.changedTouches ? e.changedTouches[0] : e;
        }, _getAbsoluteMax = function _getAbsoluteMax(a) {
            var max = Math.max.apply(Math, a), min = Math.min.apply(Math, a);
            return Math.abs(max) >= Math.abs(min) ? max : min;
        }, _setScrollTrigger = function _setScrollTrigger() {
            ScrollTrigger = Observer_gsap.core.globals().ScrollTrigger;
            ScrollTrigger && ScrollTrigger.core && _integrate();
        }, Observer_initCore = function _initCore(core) {
            Observer_gsap = core || _getGSAP();
            if (Observer_gsap && typeof document !== "undefined" && document.body) {
                Observer_win = window;
                Observer_doc = document;
                _docEl = Observer_doc.documentElement;
                _body = Observer_doc.body;
                _root = [ Observer_win, Observer_doc, _docEl, _body ];
                Observer_gsap.utils.clamp;
                Observer_context = Observer_gsap.core.context || function() {};
                _pointerType = "onpointerenter" in _body ? "pointer" : "mouse";
                _isTouch = Observer.isTouch = Observer_win.matchMedia && Observer_win.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Observer_win || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
                _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
                setTimeout((function() {
                    return _startup = 0;
                }), 500);
                _setScrollTrigger();
                Observer_coreInitted = 1;
            }
            return Observer_coreInitted;
        };
        _horizontal.op = _vertical;
        _scrollers.cache = 0;
        var Observer = function() {
            function Observer(vars) {
                this.init(vars);
            }
            var _proto = Observer.prototype;
            _proto.init = function init(vars) {
                Observer_coreInitted || Observer_initCore(Observer_gsap) || console.warn("Please gsap.registerPlugin(Observer)");
                ScrollTrigger || _setScrollTrigger();
                var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
                this.target = target = _getTarget(target) || _docEl;
                this.vars = vars;
                ignore && (ignore = Observer_gsap.utils.toArray(ignore));
                tolerance = tolerance || 1e-9;
                dragMinimum = dragMinimum || 0;
                wheelSpeed = wheelSpeed || 1;
                scrollSpeed = scrollSpeed || 1;
                type = type || "wheel,touch,pointer";
                debounce = debounce !== false;
                lineHeight || (lineHeight = parseFloat(Observer_win.getComputedStyle(_body).lineHeight) || 22);
                var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self = this, prevDeltaX = 0, prevDeltaY = 0, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", isViewport = _isViewport(target), ownerDoc = target.ownerDocument || Observer_doc, deltaX = [ 0, 0, 0 ], deltaY = [ 0, 0, 0 ], onClickTime = 0, clickCapture = function clickCapture() {
                    return onClickTime = _getTime();
                }, _ignoreCheck = function _ignoreCheck(e, isPointerOrTouch) {
                    return (self.event = e) && ignore && ~ignore.indexOf(e.target) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
                }, onStopFunc = function onStopFunc() {
                    self._vx.reset();
                    self._vy.reset();
                    onStopDelayedCall.pause();
                    onStop && onStop(self);
                }, update = function update() {
                    var dx = self.deltaX = _getAbsoluteMax(deltaX), dy = self.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
                    onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY);
                    if (changedX) {
                        onRight && self.deltaX > 0 && onRight(self);
                        onLeft && self.deltaX < 0 && onLeft(self);
                        onChangeX && onChangeX(self);
                        onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
                        prevDeltaX = self.deltaX;
                        deltaX[0] = deltaX[1] = deltaX[2] = 0;
                    }
                    if (changedY) {
                        onDown && self.deltaY > 0 && onDown(self);
                        onUp && self.deltaY < 0 && onUp(self);
                        onChangeY && onChangeY(self);
                        onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
                        prevDeltaY = self.deltaY;
                        deltaY[0] = deltaY[1] = deltaY[2] = 0;
                    }
                    if (moved || dragged) {
                        onMove && onMove(self);
                        if (dragged) {
                            onDrag(self);
                            dragged = false;
                        }
                        moved = false;
                    }
                    locked && !(locked = false) && onLockAxis && onLockAxis(self);
                    if (wheeled) {
                        onWheel(self);
                        wheeled = false;
                    }
                    id = 0;
                }, onDelta = function onDelta(x, y, index) {
                    deltaX[index] += x;
                    deltaY[index] += y;
                    self._vx.update(x);
                    self._vy.update(y);
                    debounce ? id || (id = requestAnimationFrame(update)) : update();
                }, onTouchOrPointerDelta = function onTouchOrPointerDelta(x, y) {
                    if (lockAxis && !axis) {
                        self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
                        locked = true;
                    }
                    if (axis !== "y") {
                        deltaX[2] += x;
                        self._vx.update(x, true);
                    }
                    if (axis !== "x") {
                        deltaY[2] += y;
                        self._vy.update(y, true);
                    }
                    debounce ? id || (id = requestAnimationFrame(update)) : update();
                }, _onDrag = function _onDrag(e) {
                    if (_ignoreCheck(e, 1)) return;
                    e = _getEvent(e, preventDefault);
                    var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y, isDragging = self.isDragging;
                    self.x = x;
                    self.y = y;
                    if (isDragging || Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum) {
                        onDrag && (dragged = true);
                        isDragging || (self.isDragging = true);
                        onTouchOrPointerDelta(dx, dy);
                        isDragging || onDragStart && onDragStart(self);
                    }
                }, _onPress = self.onPress = function(e) {
                    if (_ignoreCheck(e, 1) || e && e.button) return;
                    self.axis = axis = null;
                    onStopDelayedCall.pause();
                    self.isPressed = true;
                    e = _getEvent(e);
                    prevDeltaX = prevDeltaY = 0;
                    self.startX = self.x = e.clientX;
                    self.startY = self.y = e.clientY;
                    self._vx.reset();
                    self._vy.reset();
                    _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, preventDefault, true);
                    self.deltaX = self.deltaY = 0;
                    onPress && onPress(self);
                }, _onRelease = self.onRelease = function(e) {
                    if (_ignoreCheck(e, 1)) return;
                    _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
                    var isTrackingDrag = !isNaN(self.y - self.startY), wasDragging = self.isDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3), eventData = _getEvent(e);
                    if (!wasDragging && isTrackingDrag) {
                        self._vx.reset();
                        self._vy.reset();
                        if (preventDefault && allowClicks) Observer_gsap.delayedCall(.08, (function() {
                            if (_getTime() - onClickTime > 300 && !e.defaultPrevented) if (e.target.click) e.target.click(); else if (ownerDoc.createEvent) {
                                var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                                syntheticEvent.initMouseEvent("click", true, true, Observer_win, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                                e.target.dispatchEvent(syntheticEvent);
                            }
                        }));
                    }
                    self.isDragging = self.isGesturing = self.isPressed = false;
                    onStop && !isNormalizer && onStopDelayedCall.restart(true);
                    onDragEnd && wasDragging && onDragEnd(self);
                    onRelease && onRelease(self, wasDragging);
                }, _onGestureStart = function _onGestureStart(e) {
                    return e.touches && e.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e, self.isDragging);
                }, _onGestureEnd = function _onGestureEnd() {
                    return (self.isGesturing = false) || onGestureEnd(self);
                }, onScroll = function onScroll(e) {
                    if (_ignoreCheck(e)) return;
                    var x = scrollFuncX(), y = scrollFuncY();
                    onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
                    scrollX = x;
                    scrollY = y;
                    onStop && onStopDelayedCall.restart(true);
                }, _onWheel = function _onWheel(e) {
                    if (_ignoreCheck(e)) return;
                    e = _getEvent(e, preventDefault);
                    onWheel && (wheeled = true);
                    var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? Observer_win.innerHeight : 1) * wheelSpeed;
                    onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
                    onStop && !isNormalizer && onStopDelayedCall.restart(true);
                }, _onMove = function _onMove(e) {
                    if (_ignoreCheck(e)) return;
                    var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y;
                    self.x = x;
                    self.y = y;
                    moved = true;
                    (dx || dy) && onTouchOrPointerDelta(dx, dy);
                }, _onHover = function _onHover(e) {
                    self.event = e;
                    onHover(self);
                }, _onHoverEnd = function _onHoverEnd(e) {
                    self.event = e;
                    onHoverEnd(self);
                }, _onClick = function _onClick(e) {
                    return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self);
                };
                onStopDelayedCall = self._dc = Observer_gsap.delayedCall(onStopDelay || .25, onStopFunc).pause();
                self.deltaX = self.deltaY = 0;
                self._vx = _getVelocityProp(0, 50, true);
                self._vy = _getVelocityProp(0, 50, true);
                self.scrollX = scrollFuncX;
                self.scrollY = scrollFuncY;
                self.isDragging = self.isGesturing = self.isPressed = false;
                Observer_context(this);
                self.enable = function(e) {
                    if (!self.isEnabled) {
                        _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
                        type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, preventDefault, capture);
                        type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, preventDefault, capture);
                        if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
                            _addListener(target, _eventTypes[0], _onPress, preventDefault, capture);
                            _addListener(ownerDoc, _eventTypes[2], _onRelease);
                            _addListener(ownerDoc, _eventTypes[3], _onRelease);
                            allowClicks && _addListener(target, "click", clickCapture, false, true);
                            onClick && _addListener(target, "click", _onClick);
                            onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
                            onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
                            onHover && _addListener(target, _pointerType + "enter", _onHover);
                            onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
                            onMove && _addListener(target, _pointerType + "move", _onMove);
                        }
                        self.isEnabled = true;
                        e && e.type && _onPress(e);
                        onEnable && onEnable(self);
                    }
                    return self;
                };
                self.disable = function() {
                    if (self.isEnabled) {
                        _observers.filter((function(o) {
                            return o !== self && _isViewport(o.target);
                        })).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
                        if (self.isPressed) {
                            self._vx.reset();
                            self._vy.reset();
                            _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
                        }
                        _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);
                        _removeListener(target, "wheel", _onWheel, capture);
                        _removeListener(target, _eventTypes[0], _onPress, capture);
                        _removeListener(ownerDoc, _eventTypes[2], _onRelease);
                        _removeListener(ownerDoc, _eventTypes[3], _onRelease);
                        _removeListener(target, "click", clickCapture, true);
                        _removeListener(target, "click", _onClick);
                        _removeListener(ownerDoc, "gesturestart", _onGestureStart);
                        _removeListener(ownerDoc, "gestureend", _onGestureEnd);
                        _removeListener(target, _pointerType + "enter", _onHover);
                        _removeListener(target, _pointerType + "leave", _onHoverEnd);
                        _removeListener(target, _pointerType + "move", _onMove);
                        self.isEnabled = self.isPressed = self.isDragging = false;
                        onDisable && onDisable(self);
                    }
                };
                self.kill = self.revert = function() {
                    self.disable();
                    var i = _observers.indexOf(self);
                    i >= 0 && _observers.splice(i, 1);
                    _normalizer === self && (_normalizer = 0);
                };
                _observers.push(self);
                isNormalizer && _isViewport(target) && (_normalizer = self);
                self.enable(event);
            };
            _createClass(Observer, [ {
                key: "velocityX",
                get: function get() {
                    return this._vx.getVelocity();
                }
            }, {
                key: "velocityY",
                get: function get() {
                    return this._vy.getVelocity();
                }
            } ]);
            return Observer;
        }();
        Observer.version = "3.11.5";
        Observer.create = function(vars) {
            return new Observer(vars);
        };
        Observer.register = Observer_initCore;
        Observer.getAll = function() {
            return _observers.slice();
        };
        Observer.getById = function(id) {
            return _observers.filter((function(o) {
                return o.vars.id === id;
            }))[0];
        };
        _getGSAP() && Observer_gsap.registerPlugin(Observer);
        /*!
 * ScrollTrigger 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
        var ScrollTrigger_gsap, ScrollTrigger_coreInitted, ScrollTrigger_win, ScrollTrigger_doc, ScrollTrigger_docEl, ScrollTrigger_body, ScrollTrigger_root, _resizeDelay, _toArray, ScrollTrigger_clamp, _time2, _syncInterval, _refreshing, _pointerIsDown, ScrollTrigger_transformProp, _i, _prevWidth, _prevHeight, _autoRefresh, _sort, ScrollTrigger_suppressOverwrites, _ignoreResize, ScrollTrigger_normalizer, _ignoreMobileResize, _baseScreenHeight, _baseScreenWidth, _fixIOSBug, ScrollTrigger_context, _scrollRestoration, _limitCallbacks, _rafID, _refreshingAll, _queueRefreshID, _primary, ScrollTrigger_startup = 1, ScrollTrigger_getTime = Date.now, _time1 = ScrollTrigger_getTime(), _lastScrollTime = 0, _enabled = 0, _rafBugFix = function _rafBugFix() {
            return _enabled && requestAnimationFrame(_rafBugFix);
        }, _pointerDownHandler = function _pointerDownHandler() {
            return _pointerIsDown = 1;
        }, _pointerUpHandler = function _pointerUpHandler() {
            return _pointerIsDown = 0;
        }, ScrollTrigger_passThrough = function _passThrough(v) {
            return v;
        }, ScrollTrigger_round = function _round(value) {
            return Math.round(value * 1e5) / 1e5 || 0;
        }, ScrollTrigger_windowExists = function _windowExists() {
            return typeof window !== "undefined";
        }, ScrollTrigger_getGSAP = function _getGSAP() {
            return ScrollTrigger_gsap || ScrollTrigger_windowExists() && (ScrollTrigger_gsap = window.gsap) && ScrollTrigger_gsap.registerPlugin && ScrollTrigger_gsap;
        }, ScrollTrigger_isViewport = function _isViewport(e) {
            return !!~ScrollTrigger_root.indexOf(e);
        }, _getBoundsFunc = function _getBoundsFunc(element) {
            return _getProxyProp(element, "getBoundingClientRect") || (ScrollTrigger_isViewport(element) ? function() {
                _winOffsets.width = ScrollTrigger_win.innerWidth;
                _winOffsets.height = ScrollTrigger_win.innerHeight;
                return _winOffsets;
            } : function() {
                return _getBounds(element);
            });
        }, _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref) {
            var d = _ref.d, d2 = _ref.d2, a = _ref.a;
            return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function() {
                return a()[d];
            } : function() {
                return (isViewport ? ScrollTrigger_win["inner" + d2] : scroller["client" + d2]) || 0;
            };
        }, _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
            return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function() {
                return _winOffsets;
            };
        }, _maxScroll = function _maxScroll(element, _ref2) {
            var s = _ref2.s, d2 = _ref2.d2, d = _ref2.d, a = _ref2.a;
            return Math.max(0, (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : ScrollTrigger_isViewport(element) ? (ScrollTrigger_docEl[s] || ScrollTrigger_body[s]) - (ScrollTrigger_win["inner" + d2] || ScrollTrigger_docEl["client" + d2] || ScrollTrigger_body["client" + d2]) : element[s] - element["offset" + d2]);
        }, _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
            for (var i = 0; i < _autoRefresh.length; i += 3) (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
        }, ScrollTrigger_isString = function _isString(value) {
            return typeof value === "string";
        }, ScrollTrigger_isFunction = function _isFunction(value) {
            return typeof value === "function";
        }, ScrollTrigger_isNumber = function _isNumber(value) {
            return typeof value === "number";
        }, ScrollTrigger_isObject = function _isObject(value) {
            return typeof value === "object";
        }, _endAnimation = function _endAnimation(animation, reversed, pause) {
            return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
        }, ScrollTrigger_callback = function _callback(self, func) {
            if (self.enabled) {
                var result = func(self);
                result && result.totalTime && (self.callbackAnimation = result);
            }
        }, _abs = Math.abs, _left = "left", _top = "top", _right = "right", _bottom = "bottom", _width = "width", _height = "height", _Right = "Right", _Left = "Left", _Top = "Top", _Bottom = "Bottom", _padding = "padding", _margin = "margin", _Width = "Width", _Height = "Height", _px = "px", _getComputedStyle = function _getComputedStyle(element) {
            return ScrollTrigger_win.getComputedStyle(element);
        }, _makePositionable = function _makePositionable(element) {
            var position = _getComputedStyle(element).position;
            element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
        }, ScrollTrigger_setDefaults = function _setDefaults(obj, defaults) {
            for (var p in defaults) p in obj || (obj[p] = defaults[p]);
            return obj;
        }, _getBounds = function _getBounds(element, withoutTransforms) {
            var tween = withoutTransforms && _getComputedStyle(element)[ScrollTrigger_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && ScrollTrigger_gsap.to(element, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0
            }).progress(1), bounds = element.getBoundingClientRect();
            tween && tween.progress(0).kill();
            return bounds;
        }, _getSize = function _getSize(element, _ref3) {
            var d2 = _ref3.d2;
            return element["offset" + d2] || element["client" + d2] || 0;
        }, _getLabelRatioArray = function _getLabelRatioArray(timeline) {
            var p, a = [], labels = timeline.labels, duration = timeline.duration();
            for (p in labels) a.push(labels[p] / duration);
            return a;
        }, _getClosestLabel = function _getClosestLabel(animation) {
            return function(value) {
                return ScrollTrigger_gsap.utils.snap(_getLabelRatioArray(animation), value);
            };
        }, _snapDirectional = function _snapDirectional(snapIncrementOrArray) {
            var snap = ScrollTrigger_gsap.utils.snap(snapIncrementOrArray), a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort((function(a, b) {
                return a - b;
            }));
            return a ? function(value, direction, threshold) {
                if (threshold === void 0) threshold = .001;
                var i;
                if (!direction) return snap(value);
                if (direction > 0) {
                    value -= threshold;
                    for (i = 0; i < a.length; i++) if (a[i] >= value) return a[i];
                    return a[i - 1];
                } else {
                    i = a.length;
                    value += threshold;
                    while (i--) if (a[i] <= value) return a[i];
                }
                return a[0];
            } : function(value, direction, threshold) {
                if (threshold === void 0) threshold = .001;
                var snapped = snap(value);
                return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
            };
        }, _getLabelAtDirection = function _getLabelAtDirection(timeline) {
            return function(value, st) {
                return _snapDirectional(_getLabelRatioArray(timeline))(value, st.direction);
            };
        }, _multiListener = function _multiListener(func, element, types, callback) {
            return types.split(",").forEach((function(type) {
                return func(element, type, callback);
            }));
        }, ScrollTrigger_addListener = function _addListener(element, type, func, nonPassive, capture) {
            return element.addEventListener(type, func, {
                passive: !nonPassive,
                capture: !!capture
            });
        }, ScrollTrigger_removeListener = function _removeListener(element, type, func, capture) {
            return element.removeEventListener(type, func, !!capture);
        }, _wheelListener = function _wheelListener(func, el, scrollFunc) {
            scrollFunc = scrollFunc && scrollFunc.wheelHandler;
            if (scrollFunc) {
                func(el, "wheel", scrollFunc);
                func(el, "touchmove", scrollFunc);
            }
        }, _markerDefaults = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        }, ScrollTrigger_defaults = {
            toggleActions: "play",
            anticipatePin: 0
        }, _keywords = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        }, _offsetToPx = function _offsetToPx(value, size) {
            if (ScrollTrigger_isString(value)) {
                var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
                if (~eqIndex) {
                    value.indexOf("%") > eqIndex && (relative *= size / 100);
                    value = value.substr(0, eqIndex - 1);
                }
                value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
            }
            return value;
        }, _createMarker = function _createMarker(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
            var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
            var e = ScrollTrigger_doc.createElement("div"), useFixedPosition = ScrollTrigger_isViewport(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? ScrollTrigger_body : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
            (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
            matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
            e._isStart = isStart;
            e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
            e.style.cssText = css;
            e.innerText = name || name === 0 ? type + "-" + name : type;
            parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
            e._offset = e["offset" + direction.op.d2];
            _positionMarker(e, 0, direction, isStart);
            return e;
        }, _positionMarker = function _positionMarker(marker, start, direction, flipped) {
            var vars = {
                display: "block"
            }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
            marker._isFlipped = flipped;
            vars[direction.a + "Percent"] = flipped ? -100 : 0;
            vars[direction.a] = flipped ? "1px" : 0;
            vars["border" + side + _Width] = 1;
            vars["border" + oppositeSide + _Width] = 0;
            vars[direction.p] = start + "px";
            ScrollTrigger_gsap.set(marker, vars);
        }, _triggers = [], _ids = {}, _sync = function _sync() {
            return ScrollTrigger_getTime() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
        }, ScrollTrigger_onScroll = function _onScroll() {
            if (!ScrollTrigger_normalizer || !ScrollTrigger_normalizer.isPressed || ScrollTrigger_normalizer.startX > ScrollTrigger_body.clientWidth) {
                _scrollers.cache++;
                if (ScrollTrigger_normalizer) _rafID || (_rafID = requestAnimationFrame(_updateAll)); else _updateAll();
                _lastScrollTime || ScrollTrigger_dispatch("scrollStart");
                _lastScrollTime = ScrollTrigger_getTime();
            }
        }, _setBaseDimensions = function _setBaseDimensions() {
            _baseScreenWidth = ScrollTrigger_win.innerWidth;
            _baseScreenHeight = ScrollTrigger_win.innerHeight;
        }, _onResize = function _onResize() {
            _scrollers.cache++;
            !_refreshing && !_ignoreResize && !ScrollTrigger_doc.fullscreenElement && !ScrollTrigger_doc.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== ScrollTrigger_win.innerWidth || Math.abs(ScrollTrigger_win.innerHeight - _baseScreenHeight) > ScrollTrigger_win.innerHeight * .25) && _resizeDelay.restart(true);
        }, ScrollTrigger_listeners = {}, ScrollTrigger_emptyArray = [], _softRefresh = function _softRefresh() {
            return ScrollTrigger_removeListener(ScrollTrigger_ScrollTrigger, "scrollEnd", _softRefresh) || _refreshAll(true);
        }, ScrollTrigger_dispatch = function _dispatch(type) {
            return ScrollTrigger_listeners[type] && ScrollTrigger_listeners[type].map((function(f) {
                return f();
            })) || ScrollTrigger_emptyArray;
        }, _savedStyles = [], _revertRecorded = function _revertRecorded(media) {
            for (var i = 0; i < _savedStyles.length; i += 5) if (!media || _savedStyles[i + 4] && _savedStyles[i + 4].query === media) {
                _savedStyles[i].style.cssText = _savedStyles[i + 1];
                _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
                _savedStyles[i + 3].uncache = 1;
            }
        }, _revertAll = function _revertAll(kill, media) {
            var trigger;
            for (_i = 0; _i < _triggers.length; _i++) {
                trigger = _triggers[_i];
                if (trigger && (!media || trigger._ctx === media)) if (kill) trigger.kill(1); else trigger.revert(true, true);
            }
            media && _revertRecorded(media);
            media || ScrollTrigger_dispatch("revert");
        }, _clearScrollMemory = function _clearScrollMemory(scrollRestoration, force) {
            _scrollers.cache++;
            (force || !_refreshingAll) && _scrollers.forEach((function(obj) {
                return ScrollTrigger_isFunction(obj) && obj.cacheID++ && (obj.rec = 0);
            }));
            ScrollTrigger_isString(scrollRestoration) && (ScrollTrigger_win.history.scrollRestoration = _scrollRestoration = scrollRestoration);
        }, _refreshID = 0, _queueRefreshAll = function _queueRefreshAll() {
            if (_queueRefreshID !== _refreshID) {
                var id = _queueRefreshID = _refreshID;
                requestAnimationFrame((function() {
                    return id === _refreshID && _refreshAll(true);
                }));
            }
        }, _refreshAll = function _refreshAll(force, skipRevert) {
            if (_lastScrollTime && !force) {
                ScrollTrigger_addListener(ScrollTrigger_ScrollTrigger, "scrollEnd", _softRefresh);
                return;
            }
            _refreshingAll = ScrollTrigger_ScrollTrigger.isRefreshing = true;
            _scrollers.forEach((function(obj) {
                return ScrollTrigger_isFunction(obj) && obj.cacheID++ && (obj.rec = obj());
            }));
            var refreshInits = ScrollTrigger_dispatch("refreshInit");
            _sort && ScrollTrigger_ScrollTrigger.sort();
            skipRevert || _revertAll();
            _scrollers.forEach((function(obj) {
                if (ScrollTrigger_isFunction(obj)) {
                    obj.smooth && (obj.target.style.scrollBehavior = "auto");
                    obj(0);
                }
            }));
            _triggers.slice(0).forEach((function(t) {
                return t.refresh();
            }));
            _triggers.forEach((function(t, i) {
                if (t._subPinOffset && t.pin) {
                    var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t.pin[prop];
                    t.revert(true, 1);
                    t.adjustPinSpacing(t.pin[prop] - original);
                    t.refresh();
                }
            }));
            _triggers.forEach((function(t) {
                return t.vars.end === "max" && t.setPositions(t.start, Math.max(t.start + 1, _maxScroll(t.scroller, t._dir)));
            }));
            refreshInits.forEach((function(result) {
                return result && result.render && result.render(-1);
            }));
            _scrollers.forEach((function(obj) {
                if (ScrollTrigger_isFunction(obj)) {
                    obj.smooth && requestAnimationFrame((function() {
                        return obj.target.style.scrollBehavior = "smooth";
                    }));
                    obj.rec && obj(obj.rec);
                }
            }));
            _clearScrollMemory(_scrollRestoration, 1);
            _resizeDelay.pause();
            _refreshID++;
            _refreshingAll = 2;
            _updateAll(2);
            _triggers.forEach((function(t) {
                return ScrollTrigger_isFunction(t.vars.onRefresh) && t.vars.onRefresh(t);
            }));
            _refreshingAll = ScrollTrigger_ScrollTrigger.isRefreshing = false;
            ScrollTrigger_dispatch("refresh");
        }, _lastScroll = 0, _direction = 1, _updateAll = function _updateAll(force) {
            if (!_refreshingAll || force === 2) {
                ScrollTrigger_ScrollTrigger.isUpdating = true;
                _primary && _primary.update(0);
                var l = _triggers.length, time = ScrollTrigger_getTime(), recordVelocity = time - _time1 >= 50, scroll = l && _triggers[0].scroll();
                _direction = _lastScroll > scroll ? -1 : 1;
                _refreshingAll || (_lastScroll = scroll);
                if (recordVelocity) {
                    if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
                        _lastScrollTime = 0;
                        ScrollTrigger_dispatch("scrollEnd");
                    }
                    _time2 = _time1;
                    _time1 = time;
                }
                if (_direction < 0) {
                    _i = l;
                    while (_i-- > 0) _triggers[_i] && _triggers[_i].update(0, recordVelocity);
                    _direction = 1;
                } else for (_i = 0; _i < l; _i++) _triggers[_i] && _triggers[_i].update(0, recordVelocity);
                ScrollTrigger_ScrollTrigger.isUpdating = false;
            }
            _rafID = 0;
        }, _propNamesToCopy = [ _left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order" ], _stateProps = _propNamesToCopy.concat([ _width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left ]), _swapPinOut = function _swapPinOut(pin, spacer, state) {
            _setState(state);
            var cache = pin._gsap;
            if (cache.spacerIsNative) _setState(cache.spacerState); else if (pin._gsap.swappedIn) {
                var parent = spacer.parentNode;
                if (parent) {
                    parent.insertBefore(pin, spacer);
                    parent.removeChild(spacer);
                }
            }
            pin._gsap.swappedIn = false;
        }, _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
            if (!pin._gsap.swappedIn) {
                var p, i = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style;
                while (i--) {
                    p = _propNamesToCopy[i];
                    spacerStyle[p] = cs[p];
                }
                spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
                cs.display === "inline" && (spacerStyle.display = "inline-block");
                pinStyle[_bottom] = pinStyle[_right] = "auto";
                spacerStyle.flexBasis = cs.flexBasis || "auto";
                spacerStyle.overflow = "visible";
                spacerStyle.boxSizing = "border-box";
                spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
                spacerStyle[_height] = _getSize(pin, _vertical) + _px;
                spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
                _setState(spacerState);
                pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
                pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
                pinStyle[_padding] = cs[_padding];
                if (pin.parentNode !== spacer) {
                    pin.parentNode.insertBefore(spacer, pin);
                    spacer.appendChild(pin);
                }
                pin._gsap.swappedIn = true;
            }
        }, ScrollTrigger_capsExp = /([A-Z])/g, _setState = function _setState(state) {
            if (state) {
                var p, value, style = state.t.style, l = state.length, i = 0;
                (state.t._gsap || ScrollTrigger_gsap.core.getCache(state.t)).uncache = 1;
                for (;i < l; i += 2) {
                    value = state[i + 1];
                    p = state[i];
                    if (value) style[p] = value; else if (style[p]) style.removeProperty(p.replace(ScrollTrigger_capsExp, "-$1").toLowerCase());
                }
            }
        }, _getState = function _getState(element) {
            var l = _stateProps.length, style = element.style, state = [], i = 0;
            for (;i < l; i++) state.push(_stateProps[i], style[_stateProps[i]]);
            state.t = element;
            return state;
        }, _copyState = function _copyState(state, override, omitOffsets) {
            var p, result = [], l = state.length, i = omitOffsets ? 8 : 0;
            for (;i < l; i += 2) {
                p = state[i];
                result.push(p, p in override ? override[p] : state[i + 1]);
            }
            result.t = state.t;
            return result;
        }, _winOffsets = {
            left: 0,
            top: 0
        }, ScrollTrigger_parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation) {
            ScrollTrigger_isFunction(value) && (value = value(self));
            if (ScrollTrigger_isString(value) && value.substr(0, 3) === "max") value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
            var p1, p2, element, time = containerAnimation ? containerAnimation.time() : 0;
            containerAnimation && containerAnimation.seek(0);
            if (!ScrollTrigger_isNumber(value)) {
                ScrollTrigger_isFunction(trigger) && (trigger = trigger(self));
                var bounds, localOffset, globalOffset, display, offsets = (value || "0").split(" ");
                element = _getTarget(trigger) || ScrollTrigger_body;
                bounds = _getBounds(element) || {};
                if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
                    display = element.style.display;
                    element.style.display = "block";
                    bounds = _getBounds(element);
                    display ? element.style.display = display : element.style.removeProperty("display");
                }
                localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
                globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
                value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
                markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
                scrollerSize -= scrollerSize - globalOffset;
            } else {
                containerAnimation && (value = ScrollTrigger_gsap.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
                markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
            }
            if (marker) {
                var position = value + scrollerSize, isStart = marker._isStart;
                p1 = "scroll" + direction.d2;
                _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(ScrollTrigger_body[p1], ScrollTrigger_docEl[p1]) : marker.parentNode[p1]) <= position + 1);
                if (useFixedPosition) {
                    scrollerBounds = _getBounds(markerScroller);
                    useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
                }
            }
            if (containerAnimation && element) {
                p1 = _getBounds(element);
                containerAnimation.seek(scrollerMax);
                p2 = _getBounds(element);
                containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
                value = value / containerAnimation._caScrollDist * scrollerMax;
            }
            containerAnimation && containerAnimation.seek(time);
            return containerAnimation ? value : Math.round(value);
        }, _prefixExp = /(webkit|moz|length|cssText|inset)/i, _reparent = function _reparent(element, parent, top, left) {
            if (element.parentNode !== parent) {
                var p, cs, style = element.style;
                if (parent === ScrollTrigger_body) {
                    element._stOrig = style.cssText;
                    cs = _getComputedStyle(element);
                    for (p in cs) if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") style[p] = cs[p];
                    style.top = top;
                    style.left = left;
                } else style.cssText = element._stOrig;
                ScrollTrigger_gsap.core.getCache(element).uncache = 1;
                parent.appendChild(element);
            }
        }, _interruptionTracker = function _interruptionTracker(getValueFunc, initialValue, onInterrupt) {
            var last1 = initialValue, last2 = last1;
            return function(value) {
                var current = Math.round(getValueFunc());
                if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
                    value = current;
                    onInterrupt && onInterrupt();
                }
                last2 = last1;
                last1 = value;
                return value;
            };
        }, _getTweenCreator = function _getTweenCreator(scroller, direction) {
            var getScroll = _getScrollFunc(scroller, direction), prop = "_scroll" + direction.p2, getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
                var tween = getTween.tween, onComplete = vars.onComplete, modifiers = {};
                initialValue = initialValue || getScroll();
                var checkForInterruption = _interruptionTracker(getScroll, initialValue, (function() {
                    tween.kill();
                    getTween.tween = 0;
                }));
                change2 = change1 && change2 || 0;
                change1 = change1 || scrollTo - initialValue;
                tween && tween.kill();
                Math.round(initialValue);
                vars[prop] = scrollTo;
                vars.modifiers = modifiers;
                modifiers[prop] = function() {
                    return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
                };
                vars.onUpdate = function() {
                    _scrollers.cache++;
                    _updateAll();
                };
                vars.onComplete = function() {
                    getTween.tween = 0;
                    onComplete && onComplete.call(tween);
                };
                tween = getTween.tween = ScrollTrigger_gsap.to(scroller, vars);
                return tween;
            };
            scroller[prop] = getScroll;
            getScroll.wheelHandler = function() {
                return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
            };
            ScrollTrigger_addListener(scroller, "wheel", getScroll.wheelHandler);
            ScrollTrigger_ScrollTrigger.isTouch && ScrollTrigger_addListener(scroller, "touchmove", getScroll.wheelHandler);
            return getTween;
        };
        var ScrollTrigger_ScrollTrigger = function() {
            function ScrollTrigger(vars, animation) {
                ScrollTrigger_coreInitted || ScrollTrigger.register(ScrollTrigger_gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
                this.init(vars, animation);
            }
            var _proto = ScrollTrigger.prototype;
            _proto.init = function init(vars, animation) {
                this.progress = this.start = 0;
                this.vars && this.kill(true, true);
                if (!_enabled) {
                    this.update = this.refresh = this.kill = ScrollTrigger_passThrough;
                    return;
                }
                vars = ScrollTrigger_setDefaults(ScrollTrigger_isString(vars) || ScrollTrigger_isNumber(vars) || vars.nodeType ? {
                    trigger: vars
                } : vars, ScrollTrigger_defaults);
                var tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, pinMoves, markerEndSetter, cs, snap1, snap2, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevProgress, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn, _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical, isToggle = !scrub && scrub !== 0, scroller = _getTarget(vars.scroller || ScrollTrigger_win), scrollerCache = ScrollTrigger_gsap.core.getCache(scroller), isViewport = ScrollTrigger_isViewport(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [ vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack ], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : ScrollTrigger_defaults.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, self = this, onRefreshInit = vars.onRefreshInit && function() {
                    return vars.onRefreshInit(self);
                }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, scrollFunc = _getScrollFunc(scroller, direction);
                ScrollTrigger_context(self);
                self._dir = direction;
                anticipatePin *= 45;
                self.scroller = scroller;
                self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
                scroll1 = scrollFunc();
                self.vars = vars;
                animation = animation || vars.animation;
                if ("refreshPriority" in vars) {
                    _sort = 1;
                    vars.refreshPriority === -9999 && (_primary = self);
                }
                scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
                    top: _getTweenCreator(scroller, _vertical),
                    left: _getTweenCreator(scroller, _horizontal)
                };
                self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
                self.scrubDuration = function(value) {
                    scrubSmooth = ScrollTrigger_isNumber(value) && value;
                    if (!scrubSmooth) {
                        scrubTween && scrubTween.progress(1).kill();
                        scrubTween = 0;
                    } else scrubTween ? scrubTween.duration(value) : scrubTween = ScrollTrigger_gsap.to(animation, {
                        ease: "expo",
                        totalProgress: "+=0.001",
                        duration: scrubSmooth,
                        paused: true,
                        onComplete: function onComplete() {
                            return onScrubComplete && onScrubComplete(self);
                        }
                    });
                };
                if (animation) {
                    animation.vars.lazy = false;
                    animation._initted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true);
                    self.animation = animation.pause();
                    animation.scrollTrigger = self;
                    self.scrubDuration(scrub);
                    scrubTween && scrubTween.resetTo && scrubTween.resetTo("totalProgress", 0);
                    snap1 = 0;
                    id || (id = animation.vars.id);
                }
                _triggers.push(self);
                if (snap) {
                    if (!ScrollTrigger_isObject(snap) || snap.push) snap = {
                        snapTo: snap
                    };
                    "scrollBehavior" in ScrollTrigger_body.style && ScrollTrigger_gsap.set(isViewport ? [ ScrollTrigger_body, ScrollTrigger_docEl ] : scroller, {
                        scrollBehavior: "auto"
                    });
                    _scrollers.forEach((function(o) {
                        return ScrollTrigger_isFunction(o) && o.target === (isViewport ? ScrollTrigger_doc.scrollingElement || ScrollTrigger_docEl : scroller) && (o.smooth = false);
                    }));
                    snapFunc = ScrollTrigger_isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap.directional !== false ? function(value, st) {
                        return _snapDirectional(snap.snapTo)(value, ScrollTrigger_getTime() - lastRefresh < 500 ? 0 : st.direction);
                    } : ScrollTrigger_gsap.utils.snap(snap.snapTo);
                    snapDurClamp = snap.duration || {
                        min: .1,
                        max: 2
                    };
                    snapDurClamp = ScrollTrigger_isObject(snapDurClamp) ? ScrollTrigger_clamp(snapDurClamp.min, snapDurClamp.max) : ScrollTrigger_clamp(snapDurClamp, snapDurClamp);
                    snapDelayedCall = ScrollTrigger_gsap.delayedCall(snap.delay || scrubSmooth / 2 || .1, (function() {
                        var scroll = scrollFunc(), refreshedRecently = ScrollTrigger_getTime() - lastRefresh < 500, tween = tweenTo.tween;
                        if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
                            var progress = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap2) / (ScrollTrigger_getTime() - _time2) * 1e3 || 0, change1 = ScrollTrigger_gsap.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / .185), naturalEnd = progress + (snap.inertia === false ? 0 : change1), endValue = ScrollTrigger_clamp(0, 1, snapFunc(naturalEnd, self)), endScroll = Math.round(start + endValue * change), _snap = snap, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
                            if (scroll <= end && scroll >= start && endScroll !== scroll) {
                                if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) return;
                                if (snap.inertia === false) change1 = endValue - progress;
                                tweenTo(endScroll, {
                                    duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * .185 / velocity / .05 || 0)),
                                    ease: snap.ease || "power3",
                                    data: _abs(endScroll - scroll),
                                    onInterrupt: function onInterrupt() {
                                        return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
                                    },
                                    onComplete: function onComplete() {
                                        self.update();
                                        lastSnap = scrollFunc();
                                        snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
                                        onSnapComplete && onSnapComplete(self);
                                        _onComplete && _onComplete(self);
                                    }
                                }, scroll, change1 * change, endScroll - scroll - change1 * change);
                                onStart && onStart(self, tweenTo.tween);
                            }
                        } else if (self.isActive && lastSnap !== scroll) snapDelayedCall.restart(true);
                    })).pause();
                }
                id && (_ids[id] = self);
                trigger = self.trigger = _getTarget(trigger || pin);
                customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
                customRevertReturn && (customRevertReturn = customRevertReturn(self));
                pin = pin === true ? trigger : _getTarget(pin);
                ScrollTrigger_isString(toggleClass) && (toggleClass = {
                    targets: trigger,
                    className: toggleClass
                });
                if (pin) {
                    pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
                    self.pin = pin;
                    pinCache = ScrollTrigger_gsap.core.getCache(pin);
                    if (!pinCache.spacer) {
                        if (pinSpacer) {
                            pinSpacer = _getTarget(pinSpacer);
                            pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
                            pinCache.spacerIsNative = !!pinSpacer;
                            pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
                        }
                        pinCache.spacer = spacer = pinSpacer || ScrollTrigger_doc.createElement("div");
                        spacer.classList.add("pin-spacer");
                        id && spacer.classList.add("pin-spacer-" + id);
                        pinCache.pinState = pinOriginalState = _getState(pin);
                    } else pinOriginalState = pinCache.pinState;
                    vars.force3D !== false && ScrollTrigger_gsap.set(pin, {
                        force3D: true
                    });
                    self.spacer = spacer = pinCache.spacer;
                    cs = _getComputedStyle(pin);
                    spacingStart = cs[pinSpacing + direction.os2];
                    pinGetter = ScrollTrigger_gsap.getProperty(pin);
                    pinSetter = ScrollTrigger_gsap.quickSetter(pin, direction.a, _px);
                    _swapPinIn(pin, spacer, cs);
                    pinState = _getState(pin);
                }
                if (markers) {
                    markerVars = ScrollTrigger_isObject(markers) ? ScrollTrigger_setDefaults(markers, _markerDefaults) : _markerDefaults;
                    markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
                    markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
                    offset = markerStartTrigger["offset" + direction.op.d2];
                    var content = _getTarget(_getProxyProp(scroller, "content") || scroller);
                    markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
                    markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
                    containerAnimation && (caMarkerSetter = ScrollTrigger_gsap.quickSetter([ markerStart, markerEnd ], direction.a, _px));
                    if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
                        _makePositionable(isViewport ? ScrollTrigger_body : scroller);
                        ScrollTrigger_gsap.set([ markerStartTrigger, markerEndTrigger ], {
                            force3D: true
                        });
                        markerStartSetter = ScrollTrigger_gsap.quickSetter(markerStartTrigger, direction.a, _px);
                        markerEndSetter = ScrollTrigger_gsap.quickSetter(markerEndTrigger, direction.a, _px);
                    }
                }
                if (containerAnimation) {
                    var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
                    containerAnimation.eventCallback("onUpdate", (function() {
                        self.update(0, 0, 1);
                        oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
                    }));
                }
                self.previous = function() {
                    return _triggers[_triggers.indexOf(self) - 1];
                };
                self.next = function() {
                    return _triggers[_triggers.indexOf(self) + 1];
                };
                self.revert = function(revert, temp) {
                    if (!temp) return self.kill(true);
                    var r = revert !== false || !self.enabled, prevRefreshing = _refreshing;
                    if (r !== self.isReverted) {
                        if (r) {
                            prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0);
                            prevProgress = self.progress;
                            prevAnimProgress = animation && animation.progress();
                        }
                        markerStart && [ markerStart, markerEnd, markerStartTrigger, markerEndTrigger ].forEach((function(m) {
                            return m.style.display = r ? "none" : "block";
                        }));
                        if (r) {
                            _refreshing = self;
                            self.update(r);
                        }
                        if (pin && (!pinReparent || !self.isActive)) if (r) _swapPinOut(pin, spacer, pinOriginalState); else _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
                        r || self.update(r);
                        _refreshing = prevRefreshing;
                        self.isReverted = r;
                    }
                };
                self.refresh = function(soft, force) {
                    if ((_refreshing || !self.enabled) && !force) return;
                    if (pin && soft && _lastScrollTime) {
                        ScrollTrigger_addListener(ScrollTrigger, "scrollEnd", _softRefresh);
                        return;
                    }
                    !_refreshingAll && onRefreshInit && onRefreshInit(self);
                    _refreshing = self;
                    lastRefresh = ScrollTrigger_getTime();
                    if (tweenTo.tween) {
                        tweenTo.tween.kill();
                        tweenTo.tween = 0;
                    }
                    scrubTween && scrubTween.pause();
                    invalidateOnRefresh && animation && animation.revert({
                        kill: false
                    }).invalidate();
                    self.isReverted || self.revert(true, true);
                    self._subPinOffset = false;
                    var cs, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins, forcedOverflow, size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), isFirstRefresh = change <= .01, offset = 0, otherPinOffset = 0, parsedEnd = vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0, i = triggerIndex;
                    while (i--) {
                        curTrigger = _triggers[i];
                        curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self);
                        curPin = curTrigger.pin;
                        if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
                            revertedPins || (revertedPins = []);
                            revertedPins.unshift(curTrigger);
                            curTrigger.revert(true, true);
                        }
                        if (curTrigger !== _triggers[i]) {
                            triggerIndex--;
                            i--;
                        }
                    }
                    ScrollTrigger_isFunction(parsedStart) && (parsedStart = parsedStart(self));
                    start = ScrollTrigger_parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation) || (pin ? -.001 : 0);
                    ScrollTrigger_isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));
                    if (ScrollTrigger_isString(parsedEnd) && !parsedEnd.indexOf("+=")) if (~parsedEnd.indexOf(" ")) parsedEnd = (ScrollTrigger_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd; else {
                        offset = _offsetToPx(parsedEnd.substr(2), size);
                        parsedEnd = ScrollTrigger_isString(parsedStart) ? parsedStart : (containerAnimation ? ScrollTrigger_gsap.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset;
                        parsedEndTrigger = trigger;
                    }
                    end = Math.max(start, ScrollTrigger_parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation)) || -.001;
                    change = end - start || (start -= .01) && .001;
                    offset = 0;
                    i = triggerIndex;
                    while (i--) {
                        curTrigger = _triggers[i];
                        curPin = curTrigger.pin;
                        if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
                            cs = curTrigger.end - curTrigger.start;
                            if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && !ScrollTrigger_isNumber(parsedStart)) offset += cs * (1 - curTrigger.progress);
                            curPin === pin && (otherPinOffset += cs);
                        }
                    }
                    start += offset;
                    end += offset;
                    if (isFirstRefresh) prevProgress = ScrollTrigger_gsap.utils.clamp(0, 1, ScrollTrigger_gsap.utils.normalize(start, end, prevScroll));
                    self._pinPush = otherPinOffset;
                    if (markerStart && offset) {
                        cs = {};
                        cs[direction.a] = "+=" + offset;
                        pinnedContainer && (cs[direction.p] = "-=" + scrollFunc());
                        ScrollTrigger_gsap.set([ markerStart, markerEnd ], cs);
                    }
                    if (pin) {
                        cs = _getComputedStyle(pin);
                        isVertical = direction === _vertical;
                        scroll = scrollFunc();
                        pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
                        if (!max && end > 1) {
                            forcedOverflow = (isViewport ? ScrollTrigger_doc.scrollingElement || ScrollTrigger_docEl : scroller).style;
                            forcedOverflow = {
                                style: forcedOverflow,
                                value: forcedOverflow["overflow" + direction.a.toUpperCase()]
                            };
                            forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
                        }
                        _swapPinIn(pin, spacer, cs);
                        pinState = _getState(pin);
                        bounds = _getBounds(pin, true);
                        oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
                        if (pinSpacing) {
                            spacerState = [ pinSpacing + direction.os2, change + otherPinOffset + _px ];
                            spacerState.t = spacer;
                            i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
                            i && spacerState.push(direction.d, i + _px);
                            _setState(spacerState);
                            if (pinnedContainer) _triggers.forEach((function(t) {
                                if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) t._subPinOffset = true;
                            }));
                            useFixedPosition && scrollFunc(prevScroll);
                        }
                        if (useFixedPosition) {
                            override = {
                                top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
                                left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
                                boxSizing: "border-box",
                                position: "fixed"
                            };
                            override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
                            override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
                            override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
                            override[_padding] = cs[_padding];
                            override[_padding + _Top] = cs[_padding + _Top];
                            override[_padding + _Right] = cs[_padding + _Right];
                            override[_padding + _Bottom] = cs[_padding + _Bottom];
                            override[_padding + _Left] = cs[_padding + _Left];
                            pinActiveState = _copyState(pinOriginalState, override, pinReparent);
                            _refreshingAll && scrollFunc(0);
                        }
                        if (animation) {
                            initted = animation._initted;
                            ScrollTrigger_suppressOverwrites(1);
                            animation.render(animation.duration(), true, true);
                            pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
                            pinMoves = Math.abs(change - pinChange) > 1;
                            useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2);
                            animation.render(0, true, true);
                            initted || animation.invalidate(true);
                            animation.parent || animation.totalTime(animation.totalTime());
                            ScrollTrigger_suppressOverwrites(0);
                        } else pinChange = change;
                        forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
                    } else if (trigger && scrollFunc() && !containerAnimation) {
                        bounds = trigger.parentNode;
                        while (bounds && bounds !== ScrollTrigger_body) {
                            if (bounds._pinOffset) {
                                start -= bounds._pinOffset;
                                end -= bounds._pinOffset;
                            }
                            bounds = bounds.parentNode;
                        }
                    }
                    revertedPins && revertedPins.forEach((function(t) {
                        return t.revert(false, true);
                    }));
                    self.start = start;
                    self.end = end;
                    scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc();
                    if (!containerAnimation && !_refreshingAll) {
                        scroll1 < prevScroll && scrollFunc(prevScroll);
                        self.scroll.rec = 0;
                    }
                    self.revert(false, true);
                    if (snapDelayedCall) {
                        lastSnap = -1;
                        self.isActive && scrollFunc(start + change * prevProgress);
                        snapDelayedCall.restart(true);
                    }
                    _refreshing = 0;
                    animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress, true).render(animation.time(), true, true);
                    if (isFirstRefresh || prevProgress !== self.progress || containerAnimation) {
                        animation && !isToggle && animation.totalProgress(containerAnimation && start < -.001 && !prevProgress ? ScrollTrigger_gsap.utils.normalize(start, end, 0) : prevProgress, true);
                        self.progress = (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
                    }
                    pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
                    scrubTween && scrubTween.invalidate();
                    onRefresh && !_refreshingAll && onRefresh(self);
                };
                self.getVelocity = function() {
                    return (scrollFunc() - scroll2) / (ScrollTrigger_getTime() - _time2) * 1e3 || 0;
                };
                self.endAnimation = function() {
                    _endAnimation(self.callbackAnimation);
                    if (animation) scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
                };
                self.labelToScroll = function(label) {
                    return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
                };
                self.getTrailing = function(name) {
                    var i = _triggers.indexOf(self), a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);
                    return (ScrollTrigger_isString(name) ? a.filter((function(t) {
                        return t.vars.preventOverlaps === name;
                    })) : a).filter((function(t) {
                        return self.direction > 0 ? t.end <= start : t.start >= end;
                    }));
                };
                self.update = function(reset, recordVelocity, forceFake) {
                    if (containerAnimation && !forceFake && !reset) return;
                    var isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction, scroll = _refreshingAll === true ? prevScroll : self.scroll(), p = reset ? 0 : (scroll - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress = self.progress;
                    if (recordVelocity) {
                        scroll2 = scroll1;
                        scroll1 = containerAnimation ? scrollFunc() : scroll;
                        if (snap) {
                            snap2 = snap1;
                            snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
                        }
                    }
                    anticipatePin && !clipped && pin && !_refreshing && !ScrollTrigger_startup && _lastScrollTime && start < scroll + (scroll - scroll2) / (ScrollTrigger_getTime() - _time2) * anticipatePin && (clipped = 1e-4);
                    if (clipped !== prevProgress && self.enabled) {
                        isActive = self.isActive = !!clipped && clipped < 1;
                        wasActive = !!prevProgress && prevProgress < 1;
                        toggled = isActive !== wasActive;
                        stateChanged = toggled || !!clipped !== !!prevProgress;
                        self.direction = clipped > prevProgress ? 1 : -1;
                        self.progress = clipped;
                        if (stateChanged && !_refreshing) {
                            toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3;
                            if (isToggle) {
                                action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
                                isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
                            }
                        }
                        preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (ScrollTrigger_isFunction(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach((function(t) {
                            return t.endAnimation();
                        })));
                        if (!isToggle) if (scrubTween && !_refreshing && !ScrollTrigger_startup) {
                            scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start);
                            if (scrubTween.resetTo) scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur); else {
                                scrubTween.vars.totalProgress = clipped;
                                scrubTween.invalidate().restart();
                            }
                        } else if (animation) animation.totalProgress(clipped, !!_refreshing);
                        if (pin) {
                            reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
                            if (!useFixedPosition) pinSetter(ScrollTrigger_round(pinStart + pinChange * clipped)); else if (stateChanged) {
                                isAtMax = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);
                                if (pinReparent) if (!reset && (isActive || isAtMax)) {
                                    var bounds = _getBounds(pin, true), _offset = scroll - start;
                                    _reparent(pin, ScrollTrigger_body, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
                                } else _reparent(pin, spacer);
                                _setState(isActive || isAtMax ? pinActiveState : pinState);
                                pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
                            }
                        }
                        snap && !tweenTo.tween && !_refreshing && !ScrollTrigger_startup && snapDelayedCall.restart(true);
                        toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach((function(el) {
                            return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
                        }));
                        onUpdate && !isToggle && !reset && onUpdate(self);
                        if (stateChanged && !_refreshing) {
                            if (isToggle) {
                                if (isTakingAction) if (action === "complete") animation.pause().totalProgress(1); else if (action === "reset") animation.restart(true).pause(); else if (action === "restart") animation.restart(true); else animation[action]();
                                onUpdate && onUpdate(self);
                            }
                            if (toggled || !_limitCallbacks) {
                                onToggle && toggled && ScrollTrigger_callback(self, onToggle);
                                callbacks[toggleState] && ScrollTrigger_callback(self, callbacks[toggleState]);
                                once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0);
                                if (!toggled) {
                                    toggleState = clipped === 1 ? 1 : 3;
                                    callbacks[toggleState] && ScrollTrigger_callback(self, callbacks[toggleState]);
                                }
                            }
                            if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (ScrollTrigger_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
                                _endAnimation(self.callbackAnimation);
                                scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
                            }
                        } else if (isToggle && onUpdate && !_refreshing) onUpdate(self);
                    }
                    if (markerEndSetter) {
                        var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
                        markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
                        markerEndSetter(n);
                    }
                    caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
                };
                self.enable = function(reset, refresh) {
                    if (!self.enabled) {
                        self.enabled = true;
                        ScrollTrigger_addListener(scroller, "resize", _onResize);
                        ScrollTrigger_addListener(isViewport ? ScrollTrigger_doc : scroller, "scroll", ScrollTrigger_onScroll);
                        onRefreshInit && ScrollTrigger_addListener(ScrollTrigger, "refreshInit", onRefreshInit);
                        if (reset !== false) {
                            self.progress = prevProgress = 0;
                            scroll1 = scroll2 = lastSnap = scrollFunc();
                        }
                        refresh !== false && self.refresh();
                    }
                };
                self.getTween = function(snap) {
                    return snap && tweenTo ? tweenTo.tween : scrubTween;
                };
                self.setPositions = function(newStart, newEnd) {
                    if (pin) {
                        pinStart += newStart - start;
                        pinChange += newEnd - newStart - change;
                        pinSpacing === _padding && self.adjustPinSpacing(newEnd - newStart - change);
                    }
                    self.start = start = newStart;
                    self.end = end = newEnd;
                    change = newEnd - newStart;
                    self.update();
                };
                self.adjustPinSpacing = function(amount) {
                    if (spacerState && amount) {
                        var i = spacerState.indexOf(direction.d) + 1;
                        spacerState[i] = parseFloat(spacerState[i]) + amount + _px;
                        spacerState[1] = parseFloat(spacerState[1]) + amount + _px;
                        _setState(spacerState);
                    }
                };
                self.disable = function(reset, allowAnimation) {
                    if (self.enabled) {
                        reset !== false && self.revert(true, true);
                        self.enabled = self.isActive = false;
                        allowAnimation || scrubTween && scrubTween.pause();
                        prevScroll = 0;
                        pinCache && (pinCache.uncache = 1);
                        onRefreshInit && ScrollTrigger_removeListener(ScrollTrigger, "refreshInit", onRefreshInit);
                        if (snapDelayedCall) {
                            snapDelayedCall.pause();
                            tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
                        }
                        if (!isViewport) {
                            var i = _triggers.length;
                            while (i--) if (_triggers[i].scroller === scroller && _triggers[i] !== self) return;
                            ScrollTrigger_removeListener(scroller, "resize", _onResize);
                            ScrollTrigger_removeListener(scroller, "scroll", ScrollTrigger_onScroll);
                        }
                    }
                };
                self.kill = function(revert, allowAnimation) {
                    self.disable(revert, allowAnimation);
                    scrubTween && !allowAnimation && scrubTween.kill();
                    id && delete _ids[id];
                    var i = _triggers.indexOf(self);
                    i >= 0 && _triggers.splice(i, 1);
                    i === _i && _direction > 0 && _i--;
                    i = 0;
                    _triggers.forEach((function(t) {
                        return t.scroller === self.scroller && (i = 1);
                    }));
                    i || _refreshingAll || (self.scroll.rec = 0);
                    if (animation) {
                        animation.scrollTrigger = null;
                        revert && animation.revert({
                            kill: false
                        });
                        allowAnimation || animation.kill();
                    }
                    markerStart && [ markerStart, markerEnd, markerStartTrigger, markerEndTrigger ].forEach((function(m) {
                        return m.parentNode && m.parentNode.removeChild(m);
                    }));
                    _primary === self && (_primary = 0);
                    if (pin) {
                        pinCache && (pinCache.uncache = 1);
                        i = 0;
                        _triggers.forEach((function(t) {
                            return t.pin === pin && i++;
                        }));
                        i || (pinCache.spacer = 0);
                    }
                    vars.onKill && vars.onKill(self);
                };
                self.enable(false, false);
                customRevertReturn && customRevertReturn(self);
                !animation || !animation.add || change ? self.refresh() : ScrollTrigger_gsap.delayedCall(.01, (function() {
                    return start || end || self.refresh();
                })) && (change = .01) && (start = end = 0);
                pin && _queueRefreshAll();
            };
            ScrollTrigger.register = function register(core) {
                if (!ScrollTrigger_coreInitted) {
                    ScrollTrigger_gsap = core || ScrollTrigger_getGSAP();
                    ScrollTrigger_windowExists() && window.document && ScrollTrigger.enable();
                    ScrollTrigger_coreInitted = _enabled;
                }
                return ScrollTrigger_coreInitted;
            };
            ScrollTrigger.defaults = function defaults(config) {
                if (config) for (var p in config) ScrollTrigger_defaults[p] = config[p];
                return ScrollTrigger_defaults;
            };
            ScrollTrigger.disable = function disable(reset, kill) {
                _enabled = 0;
                _triggers.forEach((function(trigger) {
                    return trigger[kill ? "kill" : "disable"](reset);
                }));
                ScrollTrigger_removeListener(ScrollTrigger_win, "wheel", ScrollTrigger_onScroll);
                ScrollTrigger_removeListener(ScrollTrigger_doc, "scroll", ScrollTrigger_onScroll);
                clearInterval(_syncInterval);
                ScrollTrigger_removeListener(ScrollTrigger_doc, "touchcancel", ScrollTrigger_passThrough);
                ScrollTrigger_removeListener(ScrollTrigger_body, "touchstart", ScrollTrigger_passThrough);
                _multiListener(ScrollTrigger_removeListener, ScrollTrigger_doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);
                _multiListener(ScrollTrigger_removeListener, ScrollTrigger_doc, "pointerup,touchend,mouseup", _pointerUpHandler);
                _resizeDelay.kill();
                _iterateAutoRefresh(ScrollTrigger_removeListener);
                for (var i = 0; i < _scrollers.length; i += 3) {
                    _wheelListener(ScrollTrigger_removeListener, _scrollers[i], _scrollers[i + 1]);
                    _wheelListener(ScrollTrigger_removeListener, _scrollers[i], _scrollers[i + 2]);
                }
            };
            ScrollTrigger.enable = function enable() {
                ScrollTrigger_win = window;
                ScrollTrigger_doc = document;
                ScrollTrigger_docEl = ScrollTrigger_doc.documentElement;
                ScrollTrigger_body = ScrollTrigger_doc.body;
                if (ScrollTrigger_gsap) {
                    _toArray = ScrollTrigger_gsap.utils.toArray;
                    ScrollTrigger_clamp = ScrollTrigger_gsap.utils.clamp;
                    ScrollTrigger_context = ScrollTrigger_gsap.core.context || ScrollTrigger_passThrough;
                    ScrollTrigger_suppressOverwrites = ScrollTrigger_gsap.core.suppressOverwrites || ScrollTrigger_passThrough;
                    _scrollRestoration = ScrollTrigger_win.history.scrollRestoration || "auto";
                    _lastScroll = ScrollTrigger_win.pageYOffset;
                    ScrollTrigger_gsap.core.globals("ScrollTrigger", ScrollTrigger);
                    if (ScrollTrigger_body) {
                        _enabled = 1;
                        _rafBugFix();
                        Observer.register(ScrollTrigger_gsap);
                        ScrollTrigger.isTouch = Observer.isTouch;
                        _fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
                        ScrollTrigger_addListener(ScrollTrigger_win, "wheel", ScrollTrigger_onScroll);
                        ScrollTrigger_root = [ ScrollTrigger_win, ScrollTrigger_doc, ScrollTrigger_docEl, ScrollTrigger_body ];
                        if (ScrollTrigger_gsap.matchMedia) {
                            ScrollTrigger.matchMedia = function(vars) {
                                var p, mm = ScrollTrigger_gsap.matchMedia();
                                for (p in vars) mm.add(p, vars[p]);
                                return mm;
                            };
                            ScrollTrigger_gsap.addEventListener("matchMediaInit", (function() {
                                return _revertAll();
                            }));
                            ScrollTrigger_gsap.addEventListener("matchMediaRevert", (function() {
                                return _revertRecorded();
                            }));
                            ScrollTrigger_gsap.addEventListener("matchMedia", (function() {
                                _refreshAll(0, 1);
                                ScrollTrigger_dispatch("matchMedia");
                            }));
                            ScrollTrigger_gsap.matchMedia("(orientation: portrait)", (function() {
                                _setBaseDimensions();
                                return _setBaseDimensions;
                            }));
                        } else console.warn("Requires GSAP 3.11.0 or later");
                        _setBaseDimensions();
                        ScrollTrigger_addListener(ScrollTrigger_doc, "scroll", ScrollTrigger_onScroll);
                        var bounds, i, bodyStyle = ScrollTrigger_body.style, border = bodyStyle.borderTopStyle, AnimationProto = ScrollTrigger_gsap.core.Animation.prototype;
                        AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
                            value: function value() {
                                return this.time(-.01, true);
                            }
                        });
                        bodyStyle.borderTopStyle = "solid";
                        bounds = _getBounds(ScrollTrigger_body);
                        _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
                        _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
                        border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
                        _syncInterval = setInterval(_sync, 250);
                        ScrollTrigger_gsap.delayedCall(.5, (function() {
                            return ScrollTrigger_startup = 0;
                        }));
                        ScrollTrigger_addListener(ScrollTrigger_doc, "touchcancel", ScrollTrigger_passThrough);
                        ScrollTrigger_addListener(ScrollTrigger_body, "touchstart", ScrollTrigger_passThrough);
                        _multiListener(ScrollTrigger_addListener, ScrollTrigger_doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);
                        _multiListener(ScrollTrigger_addListener, ScrollTrigger_doc, "pointerup,touchend,mouseup", _pointerUpHandler);
                        ScrollTrigger_transformProp = ScrollTrigger_gsap.utils.checkPrefix("transform");
                        _stateProps.push(ScrollTrigger_transformProp);
                        ScrollTrigger_coreInitted = ScrollTrigger_getTime();
                        _resizeDelay = ScrollTrigger_gsap.delayedCall(.2, _refreshAll).pause();
                        _autoRefresh = [ ScrollTrigger_doc, "visibilitychange", function() {
                            var w = ScrollTrigger_win.innerWidth, h = ScrollTrigger_win.innerHeight;
                            if (ScrollTrigger_doc.hidden) {
                                _prevWidth = w;
                                _prevHeight = h;
                            } else if (_prevWidth !== w || _prevHeight !== h) _onResize();
                        }, ScrollTrigger_doc, "DOMContentLoaded", _refreshAll, ScrollTrigger_win, "load", _refreshAll, ScrollTrigger_win, "resize", _onResize ];
                        _iterateAutoRefresh(ScrollTrigger_addListener);
                        _triggers.forEach((function(trigger) {
                            return trigger.enable(0, 1);
                        }));
                        for (i = 0; i < _scrollers.length; i += 3) {
                            _wheelListener(ScrollTrigger_removeListener, _scrollers[i], _scrollers[i + 1]);
                            _wheelListener(ScrollTrigger_removeListener, _scrollers[i], _scrollers[i + 2]);
                        }
                    }
                }
            };
            ScrollTrigger.config = function config(vars) {
                "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
                var ms = vars.syncInterval;
                ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
                "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger.isTouch === 1 && vars.ignoreMobileResize);
                if ("autoRefreshEvents" in vars) {
                    _iterateAutoRefresh(ScrollTrigger_removeListener) || _iterateAutoRefresh(ScrollTrigger_addListener, vars.autoRefreshEvents || "none");
                    _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
                }
            };
            ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
                var t = _getTarget(target), i = _scrollers.indexOf(t), isViewport = ScrollTrigger_isViewport(t);
                if (~i) _scrollers.splice(i, isViewport ? 6 : 2);
                if (vars) isViewport ? _proxies.unshift(ScrollTrigger_win, vars, ScrollTrigger_body, vars, ScrollTrigger_docEl, vars) : _proxies.unshift(t, vars);
            };
            ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
                _triggers.forEach((function(t) {
                    return t._ctx && t._ctx.query === query && t._ctx.kill(true, true);
                }));
            };
            ScrollTrigger.isInViewport = function isInViewport(element, ratio, horizontal) {
                var bounds = (ScrollTrigger_isString(element) ? _getTarget(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
                return horizontal ? bounds.right - offset > 0 && bounds.left + offset < ScrollTrigger_win.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < ScrollTrigger_win.innerHeight;
            };
            ScrollTrigger.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
                ScrollTrigger_isString(element) && (element = _getTarget(element));
                var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
                return horizontal ? (bounds.left + offset) / ScrollTrigger_win.innerWidth : (bounds.top + offset) / ScrollTrigger_win.innerHeight;
            };
            ScrollTrigger.killAll = function killAll(allowListeners) {
                _triggers.slice(0).forEach((function(t) {
                    return t.vars.id !== "ScrollSmoother" && t.kill();
                }));
                if (allowListeners !== true) {
                    var listeners = ScrollTrigger_listeners.killAll || [];
                    ScrollTrigger_listeners = {};
                    listeners.forEach((function(f) {
                        return f();
                    }));
                }
            };
            return ScrollTrigger;
        }();
        ScrollTrigger_ScrollTrigger.version = "3.11.5";
        ScrollTrigger_ScrollTrigger.saveStyles = function(targets) {
            return targets ? _toArray(targets).forEach((function(target) {
                if (target && target.style) {
                    var i = _savedStyles.indexOf(target);
                    i >= 0 && _savedStyles.splice(i, 5);
                    _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), ScrollTrigger_gsap.core.getCache(target), ScrollTrigger_context());
                }
            })) : _savedStyles;
        };
        ScrollTrigger_ScrollTrigger.revert = function(soft, media) {
            return _revertAll(!soft, media);
        };
        ScrollTrigger_ScrollTrigger.create = function(vars, animation) {
            return new ScrollTrigger_ScrollTrigger(vars, animation);
        };
        ScrollTrigger_ScrollTrigger.refresh = function(safe) {
            return safe ? _onResize() : (ScrollTrigger_coreInitted || ScrollTrigger_ScrollTrigger.register()) && _refreshAll(true);
        };
        ScrollTrigger_ScrollTrigger.update = function(force) {
            return ++_scrollers.cache && _updateAll(force === true ? 2 : 0);
        };
        ScrollTrigger_ScrollTrigger.clearScrollMemory = _clearScrollMemory;
        ScrollTrigger_ScrollTrigger.maxScroll = function(element, horizontal) {
            return _maxScroll(element, horizontal ? _horizontal : _vertical);
        };
        ScrollTrigger_ScrollTrigger.getScrollFunc = function(element, horizontal) {
            return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
        };
        ScrollTrigger_ScrollTrigger.getById = function(id) {
            return _ids[id];
        };
        ScrollTrigger_ScrollTrigger.getAll = function() {
            return _triggers.filter((function(t) {
                return t.vars.id !== "ScrollSmoother";
            }));
        };
        ScrollTrigger_ScrollTrigger.isScrolling = function() {
            return !!_lastScrollTime;
        };
        ScrollTrigger_ScrollTrigger.snapDirectional = _snapDirectional;
        ScrollTrigger_ScrollTrigger.addEventListener = function(type, callback) {
            var a = ScrollTrigger_listeners[type] || (ScrollTrigger_listeners[type] = []);
            ~a.indexOf(callback) || a.push(callback);
        };
        ScrollTrigger_ScrollTrigger.removeEventListener = function(type, callback) {
            var a = ScrollTrigger_listeners[type], i = a && a.indexOf(callback);
            i >= 0 && a.splice(i, 1);
        };
        ScrollTrigger_ScrollTrigger.batch = function(targets, vars) {
            var p, result = [], varsCopy = {}, interval = vars.interval || .016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback(type, callback) {
                var elements = [], triggers = [], delay = ScrollTrigger_gsap.delayedCall(interval, (function() {
                    callback(elements, triggers);
                    elements = [];
                    triggers = [];
                })).pause();
                return function(self) {
                    elements.length || delay.restart(true);
                    elements.push(self.trigger);
                    triggers.push(self);
                    batchMax <= elements.length && delay.progress(1);
                };
            };
            for (p in vars) varsCopy[p] = p.substr(0, 2) === "on" && ScrollTrigger_isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
            if (ScrollTrigger_isFunction(batchMax)) {
                batchMax = batchMax();
                ScrollTrigger_addListener(ScrollTrigger_ScrollTrigger, "refresh", (function() {
                    return batchMax = vars.batchMax();
                }));
            }
            _toArray(targets).forEach((function(target) {
                var config = {};
                for (p in varsCopy) config[p] = varsCopy[p];
                config.trigger = target;
                result.push(ScrollTrigger_ScrollTrigger.create(config));
            }));
            return result;
        };
        var _inputIsFocused, _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier(scrollFunc, current, end, max) {
            current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
            return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
        }, _allowNativePanning = function _allowNativePanning(target, direction) {
            if (direction === true) target.style.removeProperty("touch-action"); else target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "") : "none";
            target === ScrollTrigger_docEl && _allowNativePanning(ScrollTrigger_body, direction);
        }, _overflow = {
            auto: 1,
            scroll: 1
        }, _nestedScroll = function _nestedScroll(_ref5) {
            var event = _ref5.event, target = _ref5.target, axis = _ref5.axis;
            var cs, node = (event.changedTouches ? event.changedTouches[0] : event).target, cache = node._gsap || ScrollTrigger_gsap.core.getCache(node), time = ScrollTrigger_getTime();
            if (!cache._isScrollT || time - cache._isScrollT > 2e3) {
                while (node && node !== ScrollTrigger_body && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]))) node = node.parentNode;
                cache._isScroll = node && node !== target && !ScrollTrigger_isViewport(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
                cache._isScrollT = time;
            }
            if (cache._isScroll || axis === "x") {
                event.stopPropagation();
                event._gsapAllow = true;
            }
        }, _inputObserver = function _inputObserver(target, type, inputs, nested) {
            return Observer.create({
                target,
                capture: true,
                debounce: false,
                lockAxis: true,
                type,
                onWheel: nested = nested && _nestedScroll,
                onPress: nested,
                onDrag: nested,
                onScroll: nested,
                onEnable: function onEnable() {
                    return inputs && ScrollTrigger_addListener(ScrollTrigger_doc, Observer.eventTypes[0], _captureInputs, false, true);
                },
                onDisable: function onDisable() {
                    return ScrollTrigger_removeListener(ScrollTrigger_doc, Observer.eventTypes[0], _captureInputs, true);
                }
            });
        }, _inputExp = /(input|label|select|textarea)/i, _captureInputs = function _captureInputs(e) {
            var isInput = _inputExp.test(e.target.tagName);
            if (isInput || _inputIsFocused) {
                e._gsapAllow = true;
                _inputIsFocused = isInput;
            }
        }, _getScrollNormalizer = function _getScrollNormalizer(vars) {
            ScrollTrigger_isObject(vars) || (vars = {});
            vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
            vars.type || (vars.type = "wheel,touch");
            vars.debounce = !!vars.debounce;
            vars.id = vars.id || "normalizer";
            var self, maxY, lastRefreshID, skipTouchMove, tween, startScrollX, startScrollY, onStopDelayedCall, _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, onRelease = _vars2.onRelease, target = _getTarget(vars.target) || ScrollTrigger_docEl, smoother = ScrollTrigger_gsap.core.globals().ScrollSmoother, smootherInstance = smoother && smoother.get(), content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()), scrollFuncY = _getScrollFunc(target, _vertical), scrollFuncX = _getScrollFunc(target, _horizontal), scale = 1, initialScale = (Observer.isTouch && ScrollTrigger_win.visualViewport ? ScrollTrigger_win.visualViewport.scale * ScrollTrigger_win.visualViewport.width : ScrollTrigger_win.outerWidth) / ScrollTrigger_win.innerWidth, wheelRefresh = 0, resolveMomentumDuration = ScrollTrigger_isFunction(momentum) ? function() {
                return momentum(self);
            } : function() {
                return momentum || 2.8;
            }, inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove() {
                return skipTouchMove = false;
            }, scrollClampX = ScrollTrigger_passThrough, scrollClampY = ScrollTrigger_passThrough, updateClamps = function updateClamps() {
                maxY = _maxScroll(target, _vertical);
                scrollClampY = ScrollTrigger_clamp(_fixIOSBug ? 1 : 0, maxY);
                normalizeScrollX && (scrollClampX = ScrollTrigger_clamp(0, _maxScroll(target, _horizontal)));
                lastRefreshID = _refreshID;
            }, removeContentOffset = function removeContentOffset() {
                content._gsap.y = ScrollTrigger_round(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
                content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
                scrollFuncY.offset = scrollFuncY.cacheID = 0;
            }, ignoreDrag = function ignoreDrag() {
                if (skipTouchMove) {
                    requestAnimationFrame(resumeTouchMove);
                    var offset = ScrollTrigger_round(self.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
                    if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
                        scrollFuncY.offset = scroll - scrollFuncY.v;
                        var y = ScrollTrigger_round((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);
                        content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
                        content._gsap.y = y + "px";
                        scrollFuncY.cacheID = _scrollers.cache;
                        _updateAll();
                    }
                    return true;
                }
                scrollFuncY.offset && removeContentOffset();
                skipTouchMove = true;
            }, onResize = function onResize() {
                updateClamps();
                if (tween.isActive() && tween.vars.scrollY > maxY) scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
            };
            content && ScrollTrigger_gsap.set(content, {
                y: "+=0"
            });
            vars.ignoreCheck = function(e) {
                return _fixIOSBug && e.type === "touchmove" && ignoreDrag(e) || scale > 1.05 && e.type !== "touchstart" || self.isGesturing || e.touches && e.touches.length > 1;
            };
            vars.onPress = function() {
                skipTouchMove = false;
                var prevScale = scale;
                scale = ScrollTrigger_round((ScrollTrigger_win.visualViewport && ScrollTrigger_win.visualViewport.scale || 1) / initialScale);
                tween.pause();
                prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
                startScrollX = scrollFuncX();
                startScrollY = scrollFuncY();
                updateClamps();
                lastRefreshID = _refreshID;
            };
            vars.onRelease = vars.onGestureStart = function(self, wasDragging) {
                scrollFuncY.offset && removeContentOffset();
                if (!wasDragging) onStopDelayedCall.restart(true); else {
                    _scrollers.cache++;
                    var currentScroll, endScroll, dur = resolveMomentumDuration();
                    if (normalizeScrollX) {
                        currentScroll = scrollFuncX();
                        endScroll = currentScroll + dur * .05 * -self.velocityX / .227;
                        dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
                        tween.vars.scrollX = scrollClampX(endScroll);
                    }
                    currentScroll = scrollFuncY();
                    endScroll = currentScroll + dur * .05 * -self.velocityY / .227;
                    dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
                    tween.vars.scrollY = scrollClampY(endScroll);
                    tween.invalidate().duration(dur).play(.01);
                    if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) ScrollTrigger_gsap.to({}, {
                        onUpdate: onResize,
                        duration: dur
                    });
                }
                onRelease && onRelease(self);
            };
            vars.onWheel = function() {
                tween._ts && tween.pause();
                if (ScrollTrigger_getTime() - wheelRefresh > 1e3) {
                    lastRefreshID = 0;
                    wheelRefresh = ScrollTrigger_getTime();
                }
            };
            vars.onChange = function(self, dx, dy, xArray, yArray) {
                _refreshID !== lastRefreshID && updateClamps();
                dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self.startX - self.x) : scrollFuncX() + dx - xArray[1]));
                if (dy) {
                    scrollFuncY.offset && removeContentOffset();
                    var isTouch = yArray[2] === dy, y = isTouch ? startScrollY + self.startY - self.y : scrollFuncY() + dy - yArray[1], yClamped = scrollClampY(y);
                    isTouch && y !== yClamped && (startScrollY += yClamped - y);
                    scrollFuncY(yClamped);
                }
                (dy || dx) && _updateAll();
            };
            vars.onEnable = function() {
                _allowNativePanning(target, normalizeScrollX ? false : "x");
                ScrollTrigger_ScrollTrigger.addEventListener("refresh", onResize);
                ScrollTrigger_addListener(ScrollTrigger_win, "resize", onResize);
                if (scrollFuncY.smooth) {
                    scrollFuncY.target.style.scrollBehavior = "auto";
                    scrollFuncY.smooth = scrollFuncX.smooth = false;
                }
                inputObserver.enable();
            };
            vars.onDisable = function() {
                _allowNativePanning(target, true);
                ScrollTrigger_removeListener(ScrollTrigger_win, "resize", onResize);
                ScrollTrigger_ScrollTrigger.removeEventListener("refresh", onResize);
                inputObserver.kill();
            };
            vars.lockAxis = vars.lockAxis !== false;
            self = new Observer(vars);
            self.iOS = _fixIOSBug;
            _fixIOSBug && !scrollFuncY() && scrollFuncY(1);
            _fixIOSBug && ScrollTrigger_gsap.ticker.add(ScrollTrigger_passThrough);
            onStopDelayedCall = self._dc;
            tween = ScrollTrigger_gsap.to(self, {
                ease: "power4",
                paused: true,
                scrollX: normalizeScrollX ? "+=0.1" : "+=0",
                scrollY: "+=0.1",
                modifiers: {
                    scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), (function() {
                        return tween.pause();
                    }))
                },
                onUpdate: _updateAll,
                onComplete: onStopDelayedCall.vars.onComplete
            });
            return self;
        };
        ScrollTrigger_ScrollTrigger.sort = function(func) {
            return _triggers.sort(func || function(a, b) {
                return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
            });
        };
        ScrollTrigger_ScrollTrigger.observe = function(vars) {
            return new Observer(vars);
        };
        ScrollTrigger_ScrollTrigger.normalizeScroll = function(vars) {
            if (typeof vars === "undefined") return ScrollTrigger_normalizer;
            if (vars === true && ScrollTrigger_normalizer) return ScrollTrigger_normalizer.enable();
            if (vars === false) return ScrollTrigger_normalizer && ScrollTrigger_normalizer.kill();
            var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
            ScrollTrigger_normalizer && ScrollTrigger_normalizer.target === normalizer.target && ScrollTrigger_normalizer.kill();
            ScrollTrigger_isViewport(normalizer.target) && (ScrollTrigger_normalizer = normalizer);
            return normalizer;
        };
        ScrollTrigger_ScrollTrigger.core = {
            _getVelocityProp,
            _inputObserver,
            _scrollers,
            _proxies,
            bridge: {
                ss: function ss() {
                    _lastScrollTime || ScrollTrigger_dispatch("scrollStart");
                    _lastScrollTime = ScrollTrigger_getTime();
                },
                ref: function ref() {
                    return _refreshing;
                }
            }
        };
        ScrollTrigger_getGSAP() && ScrollTrigger_gsap.registerPlugin(ScrollTrigger_ScrollTrigger);
        gsapWithCSS.registerPlugin(ScrollTrigger_ScrollTrigger);
        function gsapAnimations() {
            let tl = gsapWithCSS.timeline(), plxItems = gsapWithCSS.utils.toArray(document.querySelectorAll("[data-scrl-prlx]")), plxImages = gsapWithCSS.utils.toArray(document.querySelectorAll("[data-img-prlx]"));
            if (tl) document.documentElement.classList.add("animated");
            if (plxImages.length > 0) plxImages.forEach((target => {
                if (target.dataset.imgPrlx == "desktop" && flsModules.mobile) return;
                let img = target.querySelector("img");
                tl.to(img, {
                    yPercent: -10,
                    ease: "none",
                    scrollTrigger: {
                        trigger: target,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            }));
            if (plxItems.length > 0) plxItems.forEach((target => {
                if (target.dataset.scrlPrlx == "desktop" && flsModules.mobile) return;
                tl.to(target, {
                    scrollTrigger: {
                        trigger: target,
                        scrub: true
                    },
                    y: (i, target) => target.dataset.scrlPrlxPlus ? ScrollTrigger_ScrollTrigger.maxScroll(window) * target.dataset.speed : -ScrollTrigger_ScrollTrigger.maxScroll(window) * target.dataset.speed,
                    ease: "none"
                });
            }));
        }
        var smooth_scroll_polyfills_min = __webpack_require__(2);
        let gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0, blockEl = false) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                console.log(targetBlockElement.dataset.offset);
                console.log(targetBlockElement.dataset.offsetMobile);
                if (isMobile.any() && targetBlockElement.dataset.offsetMobile) offsetTop = targetBlockElement.dataset.offsetMobile; else if (targetBlockElement.dataset.offset) offsetTop = targetBlockElement.dataset.offset;
                console.log(offsetTop);
                if (noHeader) {
                    headerItem = "header.header";
                    headerItemHeight = document.querySelector(headerItem).offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                if (typeof smooth_scroll_polyfills_min !== "undefined") {
                    (new smooth_scroll_polyfills_min).animateScroll(targetBlockElement, "", options);
                    if (blockEl == true) {
                        targetBlockElement.classList.add("no-pointer");
                        setTimeout((() => {
                            targetBlockElement.classList.remove("no-pointer");
                        }), 500);
                    }
                } else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    if (blockEl == true) targetBlockElement.classList.add("no-pointer");
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                    setTimeout((() => {
                        targetBlockElement.classList.remove("no-pointer");
                    }), 500);
                }
            } else FLS(`[gotoBlock]: Такого блока нет на странице: ${targetBlock}`);
        };
        function formFieldsInit(options = {
            viewPass: false
        }) {
            const formFields = document.querySelectorAll("input[placeholder],textarea[placeholder]");
            if (formFields.length) formFields.forEach((formField => {
                if (!formField.hasAttribute("data-placeholder-nohide")) formField.dataset.placeholder = formField.placeholder;
            }));
            document.body.addEventListener("focusin", (function(e) {
                const targetElement = e.target;
                if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                    if (targetElement.dataset.placeholder) targetElement.placeholder = "";
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.add("_form-focus");
                        targetElement.parentElement.classList.add("_form-focus");
                    }
                    formValidate.removeError(targetElement);
                }
            }));
            document.body.addEventListener("click", (function(e) {
                const targetElement = e.target;
                if (targetElement.tagName === "TEXTAREA") targetElement.addEventListener("input", (function() {
                    this.style.height = Math.round(this.scrollHeight) + "px";
                }));
            }));
            document.body.addEventListener("focusout", (function(e) {
                const targetElement = e.target;
                if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                    if (targetElement.dataset.placeholder) targetElement.placeholder = targetElement.dataset.placeholder;
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.remove("_form-focus");
                        targetElement.parentElement.classList.remove("_form-focus");
                    }
                    if (targetElement.getAttribute("type") != "checkbox") if (targetElement.value.trim()) {
                        targetElement.parentElement.classList.add("_has-value");
                        targetElement.classList.add("_has-value");
                    } else {
                        targetElement.parentElement.classList.remove("_has-value");
                        targetElement.classList.remove("_has-value");
                        targetElement.value = "";
                    }
                    if (targetElement.hasAttribute("data-validate")) formValidate.validateInput(targetElement);
                }
            }));
            if (options.viewPass) document.addEventListener("click", (function(e) {
                let targetElement = e.target;
                if (targetElement.closest('[class*="__viewpass"]')) {
                    let inputType = targetElement.classList.contains("_viewpass-active") ? "password" : "text";
                    targetElement.parentElement.querySelector("input").setAttribute("type", inputType);
                    targetElement.classList.toggle("_viewpass-active");
                }
            }));
        }
        let formValidate = {
            getErrors(form) {
                let error = 0;
                let formRequiredItems = form.querySelectorAll("*[data-required]");
                if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem => {
                    if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === "SELECT") && !formRequiredItem.disabled) error += this.validateInput(formRequiredItem);
                }));
                return error;
            },
            validateInput(formRequiredItem) {
                let error = 0;
                if (formRequiredItem.dataset.required === "email") {
                    formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                    if (this.emailTest(formRequiredItem)) {
                        this.addError(formRequiredItem);
                        error++;
                    } else this.removeError(formRequiredItem);
                } else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
                    this.addError(formRequiredItem);
                    error++;
                } else if (!formRequiredItem.value.trim()) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem);
                return error;
            },
            addError(formRequiredItem) {
                formRequiredItem.classList.add("_form-error");
                formRequiredItem.parentElement.classList.add("_form-error");
                let inputError = formRequiredItem.parentElement.querySelector(".form__error");
                if (inputError) formRequiredItem.parentElement.removeChild(inputError);
                if (formRequiredItem.dataset.error) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<span class="form__error">${formRequiredItem.dataset.error}</span>`);
            },
            removeError(formRequiredItem) {
                formRequiredItem.classList.remove("_form-error");
                formRequiredItem.parentElement.classList.remove("_form-error");
                if (formRequiredItem.parentElement.querySelector(".form__error")) formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
            },
            formClean(form) {
                form.reset();
                setTimeout((() => {
                    let inputs = form.querySelectorAll("input,textarea");
                    for (let index = 0; index < inputs.length; index++) {
                        const el = inputs[index];
                        el.parentElement.classList.remove("_form-focus");
                        el.classList.remove("_form-focus");
                        formValidate.removeError(el);
                    }
                    let checkboxes = form.querySelectorAll(".checkbox__input");
                    if (checkboxes.length > 0) for (let index = 0; index < checkboxes.length; index++) {
                        const checkbox = checkboxes[index];
                        checkbox.checked = false;
                    }
                    if (flsModules.select) {
                        let selects = form.querySelectorAll(".select");
                        if (selects.length) for (let index = 0; index < selects.length; index++) {
                            const select = selects[index].querySelector("select");
                            flsModules.select.selectBuild(select);
                        }
                    }
                }), 0);
            },
            emailTest(formRequiredItem) {
                return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
            }
        };
        function formSubmit(options = {
            validate: true
        }) {
            const forms = document.forms;
            if (forms.length) for (const form of forms) {
                form.addEventListener("submit", (function(e) {
                    const form = e.target;
                    formSubmitAction(form, e);
                }));
                form.addEventListener("reset", (function(e) {
                    const form = e.target;
                    formValidate.formClean(form);
                }));
            }
            async function formSubmitAction(form, e) {
                const error = !form.hasAttribute("data-no-validate") ? formValidate.getErrors(form) : 0;
                if (error === 0) {
                    const ajax = form.hasAttribute("data-ajax");
                    if (ajax) {
                        e.preventDefault();
                        const formAction = form.getAttribute("action") ? form.getAttribute("action").trim() : "#", formMethod = form.getAttribute("method") ? form.getAttribute("method").trim() : "POST", formData = new FormData(form), xhr = new XMLHttpRequest, status = form.querySelector(".form-status");
                        form.classList.add("_sending");
                        form.classList.contains("_sended") ? form.classList.remove("_sended") : null;
                        xhr.open(formMethod, formAction, true);
                        xhr.onreadystatechange = function() {
                            if (xhr.readyState === XMLHttpRequest.DONE) if (xhr.status === 200) {
                                let responseInfo = JSON.parse(xhr.response);
                                setTimeout((() => {
                                    form.classList.remove("_sending");
                                    form.classList.add("_sended");
                                    status ? status.innerHTML = responseInfo.message : null;
                                }), 1e3);
                                setTimeout((() => {
                                    form.closest(".popup").querySelector("[data-close]").click();
                                }), 5e3);
                                setTimeout((() => {
                                    form.classList.remove("_sended");
                                    status ? status.innerHTML = "" : null;
                                }), 6e3);
                                formSent(form);
                            } else {
                                setTimeout((() => {
                                    form.classList.remove("_sending");
                                }), 1e3);
                                console.log("Ошибка: " + xhr.status);
                            }
                        };
                        xhr.send(formData);
                    } else if (form.hasAttribute("data-dev")) {
                        e.preventDefault();
                        formSent(form);
                    }
                } else {
                    e.preventDefault();
                    const formError = form.querySelector("._form-error");
                    if (formError && form.hasAttribute("data-goto-error")) gotoBlock(formError, true, 1e3);
                }
            }
            function formSent(form, responseResult = ``) {
                document.dispatchEvent(new CustomEvent("formSent", {
                    detail: {
                        form
                    }
                }));
                setTimeout((() => {
                    if (flsModules.popup) {
                        const popup = form.dataset.popupMessage;
                        popup ? flsModules.popup.open(popup) : null;
                    }
                }), 0);
                formValidate.formClean(form);
                formLogging(`Форма отправлена!`);
            }
            function formLogging(message) {
                FLS(`[Формы]: ${message}`);
            }
        }
        class SelectConstructor {
            constructor(props, data = null) {
                let defaultConfig = {
                    init: true,
                    logging: true
                };
                this.config = Object.assign(defaultConfig, props);
                this.selectClasses = {
                    classSelect: "select",
                    classSelectBody: "select__body",
                    classSelectTitle: "select__title",
                    classSelectValue: "select__value",
                    classSelectLabel: "select__label",
                    classSelectInput: "select__input",
                    classSelectText: "select__text",
                    classSelectLink: "select__link",
                    classSelectOptions: "select__options",
                    classSelectOptionsScroll: "select__scroll",
                    classSelectOption: "select__option",
                    classSelectContent: "select__content",
                    classSelectRow: "select__row",
                    classSelectData: "select__asset",
                    classSelectDataText: "select__option-text",
                    classSelectDataPrice: "select__option-price",
                    classSelectDisabled: "_select-disabled",
                    classSelectTag: "_select-tag",
                    classSelectOpen: "_select-open",
                    classSelectActive: "_select-active",
                    classSelectFocus: "_select-focus",
                    classSelectMultiple: "_select-multiple",
                    classSelectCheckBox: "_select-checkbox",
                    classSelectOptionSelected: "_select-selected",
                    classSelectPseudoLabel: "_select-pseudo-label",
                    classSelectSearchShow: "_is-showed",
                    classSelectSearchHide: "_is-hidden"
                };
                this._this = this;
                if (this.config.init) {
                    const selectItems = data ? document.querySelectorAll(data) : document.querySelectorAll(".js-select");
                    if (selectItems.length) this.selectsInit(selectItems);
                }
            }
            getSelectClass(className) {
                return `.${className}`;
            }
            getSelectElement(selectItem, className) {
                return {
                    originalSelect: selectItem.querySelector("select"),
                    selectElement: selectItem.querySelector(this.getSelectClass(className))
                };
            }
            selectsInit(selectItems) {
                selectItems.forEach(((originalSelect, index) => {
                    this.selectInit(originalSelect, index + 1);
                }));
                document.addEventListener("click", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("focusin", function(e) {
                    this.selectsActions(e);
                }.bind(this));
                document.addEventListener("focusout", function(e) {
                    this.selectsActions(e);
                }.bind(this));
            }
            selectInit(originalSelect, index) {
                const _this = this;
                let selectItem = document.createElement("div");
                selectItem.classList.add(this.selectClasses.classSelect);
                originalSelect.dataset.class ? selectItem.classList.add(originalSelect.dataset.class) : null;
                originalSelect.parentNode.insertBefore(selectItem, originalSelect);
                selectItem.appendChild(originalSelect);
                originalSelect.hidden = true;
                index ? originalSelect.dataset.id = index : null;
                if (this.getSelectPlaceholder(originalSelect)) {
                    originalSelect.dataset.placeholder = this.getSelectPlaceholder(originalSelect).value;
                    if (this.getSelectPlaceholder(originalSelect).label.show) {
                        const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
                        selectItemTitle.insertAdjacentHTML("afterbegin", `<span class="${this.selectClasses.classSelectLabel}">${this.getSelectPlaceholder(originalSelect).label.text ? this.getSelectPlaceholder(originalSelect).label.text : this.getSelectPlaceholder(originalSelect).value}</span>`);
                    }
                }
                selectItem.insertAdjacentHTML("beforeend", `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`);
                this.selectBuild(originalSelect);
                originalSelect.dataset.speed = originalSelect.dataset.speed ? originalSelect.dataset.speed : "150";
                originalSelect.addEventListener("change", (function(e) {
                    _this.selectChange(e);
                }));
            }
            selectBuild(originalSelect) {
                const selectItem = originalSelect.parentElement;
                selectItem.dataset.id = originalSelect.dataset.id;
                originalSelect.dataset.classModif ? selectItem.classList.add(`select_${originalSelect.dataset.classModif}`) : null;
                originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectMultiple) : selectItem.classList.remove(this.selectClasses.classSelectMultiple);
                originalSelect.hasAttribute("data-checkbox") && originalSelect.multiple ? selectItem.classList.add(this.selectClasses.classSelectCheckBox) : selectItem.classList.remove(this.selectClasses.classSelectCheckBox);
                this.setSelectTitleValue(selectItem, originalSelect);
                this.setOptions(selectItem, originalSelect);
                originalSelect.hasAttribute("data-search") ? this.searchActions(selectItem) : null;
                originalSelect.hasAttribute("data-open") ? this.selectAction(selectItem) : null;
                this.selectDisabled(selectItem, originalSelect);
            }
            selectsActions(e) {
                const targetElement = e.target;
                const targetType = e.type;
                if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect)) || targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                    const selectItem = targetElement.closest(".select") ? targetElement.closest(".select") : document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag)).dataset.selectId}"]`);
                    const originalSelect = this.getSelectElement(selectItem).originalSelect;
                    if (targetType === "click") {
                        if (!originalSelect.disabled) if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag))) {
                            const targetTag = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTag));
                            const optionItem = document.querySelector(`.${this.selectClasses.classSelect}[data-id="${targetTag.dataset.selectId}"] .select__option[data-value="${targetTag.dataset.value}"]`);
                            this.optionAction(selectItem, originalSelect, optionItem);
                        } else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectTitle))) this.selectAction(selectItem); else if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption))) {
                            const optionItem = targetElement.closest(this.getSelectClass(this.selectClasses.classSelectOption));
                            this.optionAction(selectItem, originalSelect, optionItem);
                        }
                    } else if (targetType === "focusin" || targetType === "focusout") {
                        if (targetElement.closest(this.getSelectClass(this.selectClasses.classSelect))) targetType === "focusin" ? selectItem.classList.add(this.selectClasses.classSelectFocus) : selectItem.classList.remove(this.selectClasses.classSelectFocus);
                    } else if (targetType === "keydown" && e.code === "Escape") this.selectsСlose();
                } else this.selectsСlose();
            }
            selectsСlose(selectOneGroup) {
                const selectsGroup = selectOneGroup ? selectOneGroup : document;
                const selectActiveItems = selectsGroup.querySelectorAll(`${this.getSelectClass(this.selectClasses.classSelect)}${this.getSelectClass(this.selectClasses.classSelectOpen)}`);
                if (selectActiveItems.length) selectActiveItems.forEach((selectActiveItem => {
                    this.selectСlose(selectActiveItem);
                }));
            }
            selectСlose(selectItem) {
                const originalSelect = this.getSelectElement(selectItem).originalSelect;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                if (!selectOptions.classList.contains("_slide")) {
                    selectItem.classList.remove(this.selectClasses.classSelectOpen);
                    _slideUp(selectOptions, originalSelect.dataset.speed);
                }
            }
            selectAction(selectItem) {
                const originalSelect = this.getSelectElement(selectItem).originalSelect;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                if (originalSelect.closest("[data-one-select]")) {
                    const selectOneGroup = originalSelect.closest("[data-one-select]");
                    this.selectsСlose(selectOneGroup);
                }
                if (!selectOptions.classList.contains("_slide")) {
                    selectItem.classList.toggle(this.selectClasses.classSelectOpen);
                    _slideToggle(selectOptions, originalSelect.dataset.speed);
                }
            }
            setSelectTitleValue(selectItem, originalSelect) {
                const selectItemBody = this.getSelectElement(selectItem, this.selectClasses.classSelectBody).selectElement;
                const selectItemTitle = this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement;
                if (selectItemTitle) selectItemTitle.remove();
                selectItemBody.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(selectItem, originalSelect));
            }
            getSelectTitleValue(selectItem, originalSelect) {
                let selectTitleValue = this.getSelectedOptionsData(originalSelect, 2).html;
                if (originalSelect.multiple && originalSelect.hasAttribute("data-tags")) {
                    selectTitleValue = this.getSelectedOptionsData(originalSelect).elements.map((option => `<span role="button" data-select-id="${selectItem.dataset.id}" data-value="${option.value}" class="_select-tag">${this.getSelectElementContent(option)}</span>`)).join("");
                    if (originalSelect.dataset.tags && document.querySelector(originalSelect.dataset.tags)) {
                        document.querySelector(originalSelect.dataset.tags).innerHTML = selectTitleValue;
                        if (originalSelect.hasAttribute("data-search")) selectTitleValue = false;
                    }
                }
                selectTitleValue = selectTitleValue.length ? selectTitleValue : originalSelect.dataset.placeholder ? originalSelect.dataset.placeholder : "";
                let pseudoAttribute = "";
                let pseudoAttributeClass = "";
                if (originalSelect.hasAttribute("data-pseudo-label")) {
                    pseudoAttribute = originalSelect.dataset.pseudoLabel ? ` data-pseudo-label="${originalSelect.dataset.pseudoLabel}"` : ` data-pseudo-label="Заполните атрибут"`;
                    pseudoAttributeClass = ` ${this.selectClasses.classSelectPseudoLabel}`;
                }
                this.getSelectedOptionsData(originalSelect).values.length ? selectItem.classList.add(this.selectClasses.classSelectActive) : selectItem.classList.remove(this.selectClasses.classSelectActive);
                if (originalSelect.hasAttribute("data-search")) return `<div class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${selectTitleValue}" data-placeholder="${selectTitleValue}" class="${this.selectClasses.classSelectInput}"></span></div>`; else {
                    const customClass = this.getSelectedOptionsData(originalSelect).elements.length && this.getSelectedOptionsData(originalSelect).elements[0].dataset.class ? ` ${this.getSelectedOptionsData(originalSelect).elements[0].dataset.class}` : "";
                    return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span${pseudoAttribute} class="${this.selectClasses.classSelectValue}${pseudoAttributeClass}"><span class="${this.selectClasses.classSelectContent}${customClass}">${selectTitleValue}</span></span></button>`;
                }
            }
            getSelectElementContent(selectOption) {
                const selectOptionDataTextOne = selectOption.dataset.text ? `<span class="${this.selectClasses.classSelectDataText}">${selectOption.dataset.text}</span>` : "";
                const selectOptionDataTextTwo = selectOption.dataset.price ? `<span class="${this.selectClasses.classSelectDataPrice}">${selectOption.dataset.price}</span>` : "";
                const selectOptionDataTextHtml = selectOptionDataTextOne && selectOptionDataTextTwo ? selectOptionDataTextOne + selectOptionDataTextTwo : "";
                const selectOptionData = selectOption.dataset.asset ? `${selectOption.dataset.asset}` : "";
                const selectOptionDataHTML = selectOptionData.indexOf("img") >= 0 ? `<img src="${selectOptionData}" alt="img">` : selectOptionData;
                let selectOptionContentHTML = ``;
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectRow}">` : "";
                selectOptionContentHTML += selectOptionData ? `<span class="${this.selectClasses.classSelectData}">` : "";
                selectOptionContentHTML += selectOptionData ? selectOptionDataHTML : "";
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                selectOptionContentHTML += selectOptionData || selectOptionDataTextOne && selectOptionDataTextTwo ? `<span class="${this.selectClasses.classSelectText}">` : "";
                selectOptionContentHTML += selectOptionDataTextHtml ? selectOptionDataTextHtml : selectOption.textContent;
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                selectOptionContentHTML += selectOptionData ? `</span>` : "";
                return selectOptionContentHTML;
            }
            getSelectPlaceholder(originalSelect) {
                const selectPlaceholder = Array.from(originalSelect.options).find((option => !option.value));
                if (selectPlaceholder) return {
                    value: selectPlaceholder.textContent,
                    show: selectPlaceholder.hasAttribute("data-show"),
                    label: {
                        show: selectPlaceholder.hasAttribute("data-label"),
                        text: selectPlaceholder.dataset.label
                    }
                };
            }
            getSelectedOptionsData(originalSelect, type) {
                let selectedOptions = [];
                if (originalSelect.multiple) selectedOptions = Array.from(originalSelect.options).filter((option => option.value)).filter((option => option.selected)); else selectedOptions.push(originalSelect.options[originalSelect.selectedIndex]);
                return {
                    elements: selectedOptions.map((option => option)),
                    values: selectedOptions.filter((option => option.value)).map((option => option.value)),
                    html: selectedOptions.map((option => this.getSelectElementContent(option)))
                };
            }
            getOptions(originalSelect) {
                let selectOptionsScroll = originalSelect.hasAttribute("data-scroll") ? `data-simplebar` : "";
                let selectOptionsScrollHeight = originalSelect.dataset.scroll ? `style="max-height:${originalSelect.dataset.scroll}px"` : "";
                let selectOptions = Array.from(originalSelect.options);
                if (selectOptions.length > 0) {
                    let selectOptionsHTML = ``;
                    if (this.getSelectPlaceholder(originalSelect) && !this.getSelectPlaceholder(originalSelect).show || originalSelect.multiple) selectOptions = selectOptions.filter((option => option.value));
                    selectOptionsHTML += selectOptionsScroll ? `<div ${selectOptionsScroll} ${selectOptionsScrollHeight} class="${this.selectClasses.classSelectOptionsScroll}">` : "";
                    selectOptions.forEach((selectOption => {
                        selectOptionsHTML += this.getOption(selectOption, originalSelect);
                    }));
                    selectOptionsHTML += selectOptionsScroll ? `</div>` : "";
                    return selectOptionsHTML;
                }
            }
            getOption(selectOption, originalSelect) {
                const selectOptionSelected = selectOption.selected && originalSelect.multiple ? ` ${this.selectClasses.classSelectOptionSelected}` : "";
                const selectOptionHide = selectOption.selected && !originalSelect.hasAttribute("data-show-selected") && !originalSelect.multiple ? `hidden` : ``;
                const selectOptionClass = selectOption.dataset.class ? ` ${selectOption.dataset.class}` : "";
                const selectOptionLink = selectOption.dataset.href ? selectOption.dataset.href : false;
                const selectOptionLinkTarget = selectOption.hasAttribute("data-href-blank") ? `target="_blank"` : "";
                let selectOptionHTML = ``;
                selectOptionHTML += selectOptionLink ? `<a ${selectOptionLinkTarget} ${selectOptionHide} href="${selectOptionLink}" data-value="${selectOption.value}" class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}">` : `<button ${selectOptionHide} class="${this.selectClasses.classSelectOption}${selectOptionClass}${selectOptionSelected}" data-value="${selectOption.value}" type="button">`;
                selectOptionHTML += this.getSelectElementContent(selectOption);
                selectOptionHTML += selectOptionLink ? `</a>` : `</button>`;
                return selectOptionHTML;
            }
            setOptions(selectItem, originalSelect) {
                const selectItemOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                selectItemOptions.innerHTML = this.getOptions(originalSelect);
            }
            optionAction(selectItem, originalSelect, optionItem) {
                if (originalSelect.multiple) {
                    optionItem.classList.toggle(this.selectClasses.classSelectOptionSelected);
                    const originalSelectSelectedItems = this.getSelectedOptionsData(originalSelect).elements;
                    originalSelectSelectedItems.forEach((originalSelectSelectedItem => {
                        originalSelectSelectedItem.removeAttribute("selected");
                    }));
                    const selectSelectedItems = selectItem.querySelectorAll(this.getSelectClass(this.selectClasses.classSelectOptionSelected));
                    selectSelectedItems.forEach((selectSelectedItems => {
                        originalSelect.querySelector(`option[value="${selectSelectedItems.dataset.value}"]`).setAttribute("selected", "selected");
                    }));
                } else {
                    if (!originalSelect.hasAttribute("data-show-selected")) {
                        if (selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`)) selectItem.querySelector(`${this.getSelectClass(this.selectClasses.classSelectOption)}[hidden]`).hidden = false;
                        optionItem.hidden = true;
                    }
                    originalSelect.value = optionItem.hasAttribute("data-value") ? optionItem.dataset.value : optionItem.textContent;
                    this.selectAction(selectItem);
                }
                this.setSelectTitleValue(selectItem, originalSelect);
                this.setSelectChange(originalSelect);
            }
            selectChange(e) {
                const originalSelect = e.target;
                this.selectBuild(originalSelect);
                this.setSelectChange(originalSelect);
            }
            setSelectChange(originalSelect) {
                if (originalSelect.hasAttribute("data-validate")) formValidate.validateInput(originalSelect);
                if (originalSelect.hasAttribute("data-submit") && originalSelect.value) {
                    let tempButton = document.createElement("button");
                    tempButton.type = "submit";
                    originalSelect.closest("form").append(tempButton);
                    tempButton.click();
                    tempButton.remove();
                }
                const selectItem = originalSelect.parentElement;
                this.selectCallback(selectItem, originalSelect);
            }
            selectDisabled(selectItem, originalSelect) {
                if (originalSelect.disabled) {
                    selectItem.classList.add(this.selectClasses.classSelectDisabled);
                    this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = true;
                } else {
                    selectItem.classList.remove(this.selectClasses.classSelectDisabled);
                    this.getSelectElement(selectItem, this.selectClasses.classSelectTitle).selectElement.disabled = false;
                }
            }
            searchActions(selectItem) {
                this.getSelectElement(selectItem).originalSelect;
                const selectInput = this.getSelectElement(selectItem, this.selectClasses.classSelectInput).selectElement;
                const selectOptions = this.getSelectElement(selectItem, this.selectClasses.classSelectOptions).selectElement;
                const selectOptionsItems = selectOptions.querySelectorAll(`.${this.selectClasses.classSelectOption}`);
                const _this = this;
                selectInput.addEventListener("input", (function() {
                    selectOptionsItems.forEach((selectOptionsItem => {
                        if (selectOptionsItem.textContent.toUpperCase().indexOf(selectInput.value.toUpperCase()) >= 0) {
                            selectOptionsItem.hidden = false;
                            selectOptionsItem.classList.remove(_this.selectClasses.classSelectSearchHide);
                            selectOptionsItem.classList.add(_this.selectClasses.classSelectSearchShow);
                        } else {
                            selectOptionsItem.hidden = true;
                            selectOptionsItem.classList.remove(_this.selectClasses.classSelectSearchShow);
                            selectOptionsItem.classList.add(_this.selectClasses.classSelectSearchHide);
                        }
                    }));
                    if (selectOptions.hidden === true) {
                        _this.selectAction(selectItem);
                        _this.selectAction(selectItem).classList.remove(_this.selectClasses.classSelectSearchHide);
                        _this.selectAction(selectItem).classList.add(_this.selectClasses.classSelectSearchShow);
                    }
                }));
            }
            selectCallback(selectItem, originalSelect) {
                document.dispatchEvent(new CustomEvent("selectCallback", {
                    detail: {
                        select: originalSelect
                    }
                }));
            }
            setLogging(message) {
                this.config.logging ? FLS(`[select]: ${message}`) : null;
            }
        }
        flsModules.select = new SelectConstructor({});
        function ssr_window_esm_isObject(obj) {
            return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target = {}, src = {}) {
            Object.keys(src).forEach((key => {
                if (typeof target[key] === "undefined") target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = typeof document !== "undefined" ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if (typeof setTimeout === "undefined") {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if (typeof setTimeout === "undefined") return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = typeof window !== "undefined" ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay = 0) {
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis = "x") {
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if (axis === "x") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if (axis === "y") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
        }
        function isNode(node) {
            if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
            return node && (node.nodeType === 1 || node.nodeType === 11);
        }
        function utils_extend(...args) {
            const to = Object(args[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < args.length; i += 1) {
                const nextSource = args[i];
                if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== void 0 && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll({swiper, targetPosition, side}) {
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => dir === "next" && current >= target || dir === "prev" && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (startTime === null) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        function utils_elementChildren(element, selector = "") {
            return [ ...element.children ].filter((el => el.matches(selector)));
        }
        function utils_createElement(tag, classes = []) {
            const el = document.createElement(tag);
            el.classList.add(...Array.isArray(classes) ? classes : [ classes ]);
            return el;
        }
        function elementPrevAll(el, selector) {
            const prevEls = [];
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (prev.matches(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return prevEls;
        }
        function elementNextAll(el, selector) {
            const nextEls = [];
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (next.matches(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return nextEls;
        }
        function elementStyle(el, prop) {
            const window = ssr_window_esm_getWindow();
            return window.getComputedStyle(el, null).getPropertyValue(prop);
        }
        function utils_elementIndex(el) {
            let child = el;
            let i;
            if (child) {
                i = 0;
                while ((child = child.previousSibling) !== null) if (child.nodeType === 1) i += 1;
                return i;
            }
            return;
        }
        function utils_elementParents(el, selector) {
            const parents = [];
            let parent = el.parentElement;
            while (parent) {
                if (selector) {
                    if (parent.matches(selector)) parents.push(parent);
                } else parents.push(parent);
                parent = parent.parentElement;
            }
            return parents;
        }
        function utils_elementOuterSize(el, size, includeMargins) {
            const window = ssr_window_esm_getWindow();
            if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
            return el.offsetWidth;
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice({userAgent} = {}) {
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = platform === "Win32";
            let macos = platform === "MacIntel";
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides = {}) {
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            let needPerspectiveFix = false;
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            if (isSafari()) {
                const ua = String(window.navigator.userAgent);
                if (ua.includes("Version/")) {
                    const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num => Number(num)));
                    needPerspectiveFix = major < 16 || major === 16 && minor < 2;
                }
            }
            return {
                isSafari: needPerspectiveFix || isSafari(),
                needPerspectiveFix,
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize({swiper, on, emit}) {
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((({contentBoxSize, contentRect, target}) => {
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function observer_Observer({swiper, extendParams, on, emit}) {
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = (target, options = {}) => {
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (swiper.__preventObserver__) return;
                    if (mutations.length === 1) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: typeof options.attributes === "undefined" ? true : options.attributes,
                    childList: typeof options.childList === "undefined" ? true : options.childList,
                    characterData: typeof options.characterData === "undefined" ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = utils_elementParents(swiper.el);
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.el, {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.wrapperEl, {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        const events_emitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                function onceHandler(...args) {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if (typeof handler === "undefined") self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit(...args) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                if (typeof args[0] === "string" || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const el = swiper.el;
            if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width; else width = el.clientWidth;
            if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height; else height = el.clientHeight;
            if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
            width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
            height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionLabel(property) {
                if (swiper.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = utils_elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if (typeof swiperSize === "undefined") return;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
            swiper.virtualSize = -spaceBetween;
            slides.forEach((slideEl => {
                if (rtl) slideEl.style.marginLeft = ""; else slideEl.style.marginRight = "";
                slideEl.style.marginBottom = "";
                slideEl.style.marginTop = "";
            }));
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slidesLength);
            let slideSize;
            const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key => typeof params.breakpoints[key].slidesPerView !== "undefined")).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                let slide;
                if (slides[i]) slide = slides[i];
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
                if (slides[i] && elementStyle(slide, "display") === "none") continue;
                if (params.slidesPerView === "auto") {
                    if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide);
                    const currentTransform = slide.style.transform;
                    const currentWebKitTransform = slide.style.webkitTransform;
                    if (currentTransform) slide.style.transform = "none";
                    if (currentWebKitTransform) slide.style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? utils_elementOuterSize(slide, "width", true) : utils_elementOuterSize(slide, "height", true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide;
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide.style.transform = currentTransform;
                    if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + params.spaceBetween}px`;
            if (params.setWrapperSize) wrapperEl.style[getDirectionLabel("width")] = `${swiper.virtualSize + params.spaceBetween}px`;
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (isVirtual && params.loop) {
                const size = slidesSizesGrid[0] + spaceBetween;
                if (params.slidesPerGroup > 1) {
                    const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
                    const groupSize = size * params.slidesPerGroup;
                    for (let i = 0; i < groups; i += 1) snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
                }
                for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
                    if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
                    slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
                    swiper.virtualSize += size;
                }
            }
            if (snapGrid.length === 0) snapGrid = [ 0 ];
            if (params.spaceBetween !== 0) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode || params.loop) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).forEach((slideEl => {
                    slideEl.style[key] = `${spaceBetween}px`;
                }));
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap < 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                }));
                allSlidesSize -= params.spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if (typeof speed === "number") swiper.setTransition(speed); else if (speed === true) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
                return swiper.slides[index];
            };
            if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if (typeof activeSlides[i] !== "undefined") {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
        }
        function updateSlidesProgress(translate = this && this.translate || 0) {
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (slides.length === 0) return;
            if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideVisibleClass);
            }));
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides[i].classList.add(params.slideVisibleClass);
                }
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
        }
        function updateProgress(translate) {
            const swiper = this;
            if (typeof translate === "undefined") {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd, progressLoop} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (translatesDiff === 0) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
                const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
                isBeginning = isBeginningRounded || progress <= 0;
                isEnd = isEndRounded || progress >= 1;
                if (isBeginningRounded) progress = 0;
                if (isEndRounded) progress = 1;
            }
            if (params.loop) {
                const firstSlideIndex = swiper.getSlideIndexByData(0);
                const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
                const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
                const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
                const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
                const translateAbs = Math.abs(translate);
                if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax; else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
                if (progressLoop > 1) progressLoop -= 1;
            }
            Object.assign(swiper, {
                progress,
                progressLoop,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, slidesEl, activeIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const getFilteredSlide = selector => utils_elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
            }));
            let activeSlide;
            if (isVirtual) if (params.loop) {
                let slideIndex = activeIndex - swiper.virtual.slidesBefore;
                if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
                if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
                activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
            } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`); else activeSlide = slides[activeIndex];
            if (activeSlide) {
                activeSlide.classList.add(params.slideActiveClass);
                let nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !nextSlide) nextSlide = slides[0];
                if (nextSlide) nextSlide.classList.add(params.slideNextClass);
                let prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !prevSlide === 0) prevSlide = slides[slides.length - 1];
                if (prevSlide) prevSlide.classList.add(params.slidePrevClass);
            }
            swiper.emitSlidesClasses();
        }
        const processLazyPreloader = (swiper, imageEl) => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
            const slideEl = imageEl.closest(slideSelector());
            if (slideEl) {
                const lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                if (lazyEl) lazyEl.remove();
            }
        };
        const unlazy = (swiper, index) => {
            if (!swiper.slides[index]) return;
            const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
            if (imageEl) imageEl.removeAttribute("loading");
        };
        const preload = swiper => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            let amount = swiper.params.lazyPreloadPrevNext;
            const len = swiper.slides.length;
            if (!len || !amount || amount < 0) return;
            amount = Math.min(amount, len);
            const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
            const activeIndex = swiper.activeIndex;
            const slideIndexLastInView = activeIndex + slidesPerView - 1;
            if (swiper.params.rewind) for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
                const realIndex = (i % len + len) % len;
                if (realIndex !== activeIndex && realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
            } else for (let i = Math.max(slideIndexLastInView - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) if (i !== activeIndex && i > slideIndexLastInView) unlazy(swiper, i);
        };
        function getActiveIndexByTranslate(swiper) {
            const {slidesGrid, params} = swiper;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            let activeIndex;
            for (let i = 0; i < slidesGrid.length; i += 1) if (typeof slidesGrid[i + 1] !== "undefined") {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
            } else if (translate >= slidesGrid[i]) activeIndex = i;
            if (params.normalizeSlideIndex) if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
            return activeIndex;
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            const getVirtualRealIndex = aIndex => {
                let realIndex = aIndex - swiper.virtual.slidesBefore;
                if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
                if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
                return realIndex;
            };
            if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.realIndex = getVirtualRealIndex(activeIndex);
                return;
            }
            let realIndex;
            if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex); else if (swiper.slides[activeIndex]) realIndex = parseInt(swiper.slides[activeIndex].getAttribute("data-swiper-slide-index") || activeIndex, 10); else realIndex = activeIndex;
            Object.assign(swiper, {
                previousSnapIndex,
                snapIndex,
                previousRealIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            if (swiper.initialized) preload(swiper);
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
        }
        function updateClickedSlide(e) {
            const swiper = this;
            const params = swiper.params;
            const slide = e.closest(`.${params.slideClass}, swiper-slide`);
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        const update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis = (this.isHorizontal() ? "x" : "y")) {
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate(wrapperEl, axis);
            currentTranslate += swiper.cssOverflowAdjustment();
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) {
                if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment(); else y -= swiper.cssOverflowAdjustment();
                wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
            }
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (speed === 0) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        const translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit({swiper, runCallbacks, direction, step}) {
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if (dir === "reset") {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if (dir === "next") swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks = true, direction) {
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd(runCallbacks = true, direction) {
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        const transition = {
            setTransition,
            transitionStart,
            transitionEnd
        };
        function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
            if (typeof index === "string") index = parseInt(index, 10);
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            const translate = -snapGrid[snapIndex];
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(translate * 100);
                const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
                if (typeof slidesGrid[i + 1] !== "undefined") {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            swiper.updateProgress(translate);
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if (params.effect !== "slide") swiper.setTranslate(translate);
                if (direction !== "reset") {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (speed === 0) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                        swiper._cssModeVirtualInitialSet = true;
                        requestAnimationFrame((() => {
                            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                        }));
                    } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._immediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (speed === 0) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
            if (typeof index === "string") {
                const indexAsNumber = parseInt(index, 10);
                index = indexAsNumber;
            }
            const swiper = this;
            let newIndex = index;
            if (swiper.params.loop) if (swiper.virtual && swiper.params.virtual.enabled) newIndex += swiper.virtual.slidesBefore; else newIndex = swiper.getSlideIndexByData(newIndex);
            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }
        function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            const {enabled, params, animating} = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;
            if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "next"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            const {params, snapGrid, slidesGrid, rtlTranslate, enabled, animating} = swiper;
            if (!enabled) return swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "prev"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if (typeof prevSnap === "undefined" && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if (typeof prevSnap !== "undefined") {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = .5) {
            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        const slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate(slideRealIndex) {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            slides.forEach(((el, index) => {
                el.setAttribute("data-swiper-slide-index", index);
            }));
            swiper.loopFix({
                slideRealIndex,
                direction: params.centeredSlides ? void 0 : "next"
            });
        }
        function loopFix({slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, byController, byMousewheel} = {}) {
            const swiper = this;
            if (!swiper.params.loop) return;
            swiper.emit("beforeLoopFix");
            const {slides, allowSlidePrev, allowSlideNext, slidesEl, params} = swiper;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            if (swiper.virtual && params.virtual.enabled) {
                if (slideTo) if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true); else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true); else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
                swiper.allowSlidePrev = allowSlidePrev;
                swiper.allowSlideNext = allowSlideNext;
                swiper.emit("loopFix");
                return;
            }
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10));
            let loopedSlides = params.loopedSlides || slidesPerView;
            if (loopedSlides % params.slidesPerGroup !== 0) loopedSlides += params.slidesPerGroup - loopedSlides % params.slidesPerGroup;
            swiper.loopedSlides = loopedSlides;
            const prependSlidesIndexes = [];
            const appendSlidesIndexes = [];
            let activeIndex = swiper.activeIndex;
            if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(swiper.slides.filter((el => el.classList.contains(params.slideActiveClass)))[0]); else activeIndex = activeSlideIndex;
            const isNext = direction === "next" || !direction;
            const isPrev = direction === "prev" || !direction;
            let slidesPrepended = 0;
            let slidesAppended = 0;
            if (activeSlideIndex < loopedSlides) {
                slidesPrepended = Math.max(loopedSlides - activeSlideIndex, params.slidesPerGroup);
                for (let i = 0; i < loopedSlides - activeSlideIndex; i += 1) {
                    const index = i - Math.floor(i / slides.length) * slides.length;
                    prependSlidesIndexes.push(slides.length - index - 1);
                }
            } else if (activeSlideIndex > swiper.slides.length - loopedSlides * 2) {
                slidesAppended = Math.max(activeSlideIndex - (swiper.slides.length - loopedSlides * 2), params.slidesPerGroup);
                for (let i = 0; i < slidesAppended; i += 1) {
                    const index = i - Math.floor(i / slides.length) * slides.length;
                    appendSlidesIndexes.push(index);
                }
            }
            if (isPrev) prependSlidesIndexes.forEach((index => {
                slidesEl.prepend(swiper.slides[index]);
            }));
            if (isNext) appendSlidesIndexes.forEach((index => {
                slidesEl.append(swiper.slides[index]);
            }));
            swiper.recalcSlides();
            if (params.slidesPerView === "auto") swiper.updateSlides();
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (slideTo) if (prependSlidesIndexes.length > 0 && isPrev) {
                if (typeof slideRealIndex === "undefined") {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                        swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
                        if (setTranslate) swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
                    }
                } else if (setTranslate) swiper.slideToLoop(slideRealIndex, 0, false, true);
            } else if (appendSlidesIndexes.length > 0 && isNext) if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                    swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                    if (setTranslate) swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
                }
            } else swiper.slideToLoop(slideRealIndex, 0, false, true);
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.controller && swiper.controller.control && !byController) {
                const loopParams = {
                    slideRealIndex,
                    slideTo: false,
                    direction,
                    setTranslate,
                    activeSlideIndex,
                    byController: true
                };
                if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c => {
                    if (!c.destroyed && c.params.loop) c.loopFix(loopParams);
                })); else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix(loopParams);
            }
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            swiper.recalcSlides();
            const newSlidesOrder = [];
            swiper.slides.forEach((slideEl => {
                const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
                newSlidesOrder[index] = slideEl;
            }));
            swiper.slides.forEach((slideEl => {
                slideEl.removeAttribute("data-swiper-slide-index");
            }));
            newSlidesOrder.forEach((slideEl => {
                slidesEl.append(slideEl);
            }));
            swiper.recalcSlides();
            swiper.slideTo(swiper.realIndex, 0);
        }
        const loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        const grab_cursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base = this) {
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const window = ssr_window_esm_getWindow();
            const data = swiper.touchEventsData;
            data.evCache.push(event);
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let targetEl = e.target;
            if (params.touchEventsTarget === "wrapper") if (!swiper.wrapperEl.contains(targetEl)) return;
            if ("which" in e && e.which === 3) return;
            if ("button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
            const eventPath = event.composedPath ? event.composedPath() : event.path;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!targetEl.closest(params.swipeHandler)) return;
            touches.currentX = e.pageX;
            touches.currentY = e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) if (edgeSwipeDetection === "prevent") event.preventDefault(); else return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            let preventDefault = true;
            if (targetEl.matches(data.focusableElements)) {
                preventDefault = false;
                if (targetEl.nodeName === "SELECT") data.isTouched = false;
            }
            if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) document.activeElement.blur();
            const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
            if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            const pointerIndex = data.evCache.findIndex((cachedEv => cachedEv.pointerId === e.pointerId));
            if (pointerIndex >= 0) data.evCache[pointerIndex] = e;
            const targetTouch = data.evCache.length > 1 ? data.evCache[0] : e;
            const pageX = targetTouch.pageX;
            const pageY = targetTouch.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        prevX: swiper.touches.currentX,
                        prevY: swiper.touches.currentY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (document.activeElement) if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if (typeof data.isScrolling === "undefined") {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if (typeof data.startMoving === "undefined") if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling || swiper.zoom && swiper.params.zoom && swiper.params.zoom.enabled && data.evCache.length > 1) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            let diff = swiper.isHorizontal() ? diffX : diffY;
            let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
            if (params.oneWayMovement) {
                diff = Math.abs(diff) * (rtl ? 1 : -1);
                touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
            }
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) {
                diff = -diff;
                touchesDiff = -touchesDiff;
            }
            const prevTouchesDirection = swiper.touchesDirection;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
            const isLoop = swiper.params.loop && !params.cssMode;
            if (!data.isMoved) {
                if (isLoop) swiper.loopFix({
                    direction: swiper.swipeDirection
                });
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) {
                    const evt = new window.CustomEvent("transitionend", {
                        bubbles: true,
                        cancelable: true
                    });
                    swiper.wrapperEl.dispatchEvent(evt);
                }
                data.allowMomentumBounce = false;
                if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            let loopFixed;
            if (data.isMoved && prevTouchesDirection !== swiper.touchesDirection && isLoop && Math.abs(diff) >= 1) {
                swiper.loopFix({
                    direction: swiper.swipeDirection,
                    setTranslate: true
                });
                loopFixed = true;
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0) {
                if (isLoop && !loopFixed && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.size / 2 : swiper.minTranslate())) swiper.loopFix({
                    direction: "prev",
                    setTranslate: true,
                    activeSlideIndex: 0
                });
                if (data.currentTranslate > swiper.minTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
                }
            } else if (diff < 0) {
                if (isLoop && !loopFixed && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.size / 2 : swiper.maxTranslate())) swiper.loopFix({
                    direction: "next",
                    setTranslate: true,
                    activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
                });
                if (data.currentTranslate < swiper.maxTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
                }
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            const pointerIndex = data.evCache.findIndex((cachedEv => cachedEv.pointerId === event.pointerId));
            if (pointerIndex >= 0) data.evCache.splice(pointerIndex, 1);
            if ([ "pointercancel", "pointerout", "pointerleave" ].includes(event.type)) {
                const proceed = event.type === "pointercancel" && (swiper.browser.isSafari || swiper.browser.isWebView);
                if (!proceed) return;
            }
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (swiper.params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if (typeof slidesGrid[i + increment] !== "undefined") {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if (swiper.swipeDirection === "next") if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if (swiper.swipeDirection === "prev") if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                    if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && el.offsetWidth === 0) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            const isVirtualLoop = isVirtual && params.loop;
            if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                clearTimeout(swiper.autoplay.resizeTimeout);
                swiper.autoplay.resizeTimeout = setTimeout((() => {
                    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
                }), 500);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (swiper.translate === 0) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        function onLoad(e) {
            const swiper = this;
            processLazyPreloader(swiper, e.target);
            swiper.update();
        }
        let dummyEventAttached = false;
        function dummyEventListener() {}
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, el, wrapperEl, device} = swiper;
            const capture = !!params.nested;
            const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            el[domMethod]("pointerdown", swiper.onTouchStart, {
                passive: false
            });
            document[domMethod]("pointermove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("pointerup", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointercancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerout", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerleave", swiper.onTouchEnd, {
                passive: true
            });
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
            el[domMethod]("load", swiper.onLoad, {
                capture: true
            });
        };
        function attachEvents() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            swiper.onLoad = onLoad.bind(swiper);
            if (!dummyEventAttached) {
                document.addEventListener("touchstart", dummyEventListener);
                dummyEventAttached = true;
            }
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        const core_events = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {realIndex, initialized, params, el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                el.classList.add(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            }
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base = "window", containerEl) {
            if (!breakpoints || base === "container" && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if (typeof point === "string" && point.indexOf("@") === 0) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if (base === "window") {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        const breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if (typeof item === "object") Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if (typeof item === "string") resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, el, device} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            el.classList.add(...classNames);
            swiper.emitContainerClasses();
        }
        function removeClasses_removeClasses() {
            const swiper = this;
            const {el, classNames} = swiper;
            el.classList.remove(...classNames);
            swiper.emitContainerClasses();
        }
        const classes = {
            addClasses,
            removeClasses: removeClasses_removeClasses
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = swiper.snapGrid.length === 1;
            if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
            if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        const check_overflow = {
            checkOverflow
        };
        const defaults = {
            init: true,
            direction: "horizontal",
            oneWayMovement: false,
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 5,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            loop: false,
            loopedSlides: null,
            loopPreventsSliding: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj = {}) {
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if (typeof moduleParams !== "object" || moduleParams === null) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if ([ "navigation", "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) params[moduleParamName] = {
                    auto: true
                };
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (params[moduleParamName] === true) params[moduleParamName] = {
                    enabled: true
                };
                if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter: events_emitter,
            update,
            translate,
            transition,
            slide,
            loop,
            grabCursor: grab_cursor,
            events: core_events,
            breakpoints,
            checkOverflow: check_overflow,
            classes
        };
        const extendedDefaults = {};
        class Swiper {
            constructor(...args) {
                let el;
                let params;
                if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                const document = ssr_window_esm_getDocument();
                if (params.el && typeof params.el === "string" && document.querySelectorAll(params.el).length > 1) {
                    const swipers = [];
                    document.querySelectorAll(params.el).forEach((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        params,
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return swiper.params.direction === "horizontal";
                    },
                    isVertical() {
                        return swiper.params.direction === "vertical";
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    cssOverflowAdjustment() {
                        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                    },
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        evCache: []
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            getSlideIndex(slideEl) {
                const {slidesEl, params} = this;
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                const firstSlideIndex = utils_elementIndex(slides[0]);
                return utils_elementIndex(slideEl) - firstSlideIndex;
            }
            getSlideIndexByData(index) {
                return this.getSlideIndex(this.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === index))[0]);
            }
            recalcSlides() {
                const swiper = this;
                const {slidesEl, params} = swiper;
                swiper.slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0)).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.forEach((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view = "current", exact = false) {
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex].swiperSlideSize;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if (view === "current") for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl);
                }));
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
                    setTranslate();
                    if (swiper.params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if ((swiper.params.slidesPerView === "auto" || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
                        const slides = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                        translated = swiper.slideTo(slides.length - 1, 0, false, true);
                    } else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate = true) {
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
                if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
                swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
                swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.forEach((slideEl => {
                    if (newDirection === "vertical") slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
                swiper.rtl = direction === "rtl";
                swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
                if (swiper.rtl) {
                    swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(element) {
                const swiper = this;
                if (swiper.mounted) return true;
                let el = element || swiper.params.el;
                if (typeof el === "string") el = document.querySelector(el);
                if (!el) return false;
                el.swiper = swiper;
                if (el.shadowEl) swiper.isElement = true;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = el.shadowRoot.querySelector(getWrapperSelector());
                        return res;
                    }
                    return utils_elementChildren(el, getWrapperSelector())[0];
                };
                let wrapperEl = getWrapper();
                if (!wrapperEl && swiper.params.createElements) {
                    wrapperEl = utils_createElement("div", swiper.params.wrapperClass);
                    el.append(wrapperEl);
                    utils_elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl => {
                        wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    el,
                    wrapperEl,
                    slidesEl: swiper.isElement ? el : wrapperEl,
                    mounted: true,
                    rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
                    rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
                    wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (mounted === false) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                if (swiper.params.loop) swiper.loopCreate();
                swiper.attachEvents();
                [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl); else imageEl.addEventListener("load", (e => {
                        processLazyPreloader(swiper, e.target);
                    }));
                }));
                preload(swiper);
                swiper.initialized = true;
                preload(swiper);
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance = true, cleanStyles = true) {
                const swiper = this;
                const {params, el, wrapperEl, slides} = swiper;
                if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    el.removeAttribute("style");
                    wrapperEl.removeAttribute("style");
                    if (slides && slides.length) slides.forEach((slideEl => {
                        slideEl.classList.remove(params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                        slideEl.removeAttribute("style");
                        slideEl.removeAttribute("data-swiper-slide-index");
                    }));
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (deleteInstance !== false) {
                    swiper.el.swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
                const modules = Swiper.prototype.__modules__;
                if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => Swiper.installModule(m)));
                    return Swiper;
                }
                Swiper.installModule(module);
                return Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        Swiper.use([ Resize, observer_Observer ]);
        const core = Swiper;
        function Autoplay({swiper, extendParams, on, emit, params}) {
            swiper.autoplay = {
                running: false,
                paused: false,
                timeLeft: 0
            };
            extendParams({
                autoplay: {
                    enabled: false,
                    delay: 3e3,
                    waitForTransition: true,
                    disableOnInteraction: true,
                    stopOnLastSlide: false,
                    reverseDirection: false,
                    pauseOnMouseEnter: false
                }
            });
            let timeout;
            let raf;
            let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
            let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
            let autoplayTimeLeft;
            let autoplayStartTime = (new Date).getTime;
            let wasPaused;
            let isTouched;
            let pausedByTouch;
            let touchStartTimeout;
            let slideChanged;
            let pausedByInteraction;
            function onTransitionEnd(e) {
                if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
                if (e.target !== swiper.wrapperEl) return;
                swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
                resume();
            }
            const calcTimeLeft = () => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                if (swiper.autoplay.paused) wasPaused = true; else if (wasPaused) {
                    autoplayDelayCurrent = autoplayTimeLeft;
                    wasPaused = false;
                }
                const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (new Date).getTime();
                swiper.autoplay.timeLeft = timeLeft;
                emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
                raf = requestAnimationFrame((() => {
                    calcTimeLeft();
                }));
            };
            const getSlideDelay = () => {
                let activeSlideEl;
                if (swiper.virtual && swiper.params.virtual.enabled) activeSlideEl = swiper.slides.filter((slideEl => slideEl.classList.contains("swiper-slide-active")))[0]; else activeSlideEl = swiper.slides[swiper.activeIndex];
                if (!activeSlideEl) return;
                const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
                return currentSlideDelay;
            };
            const run = delayForce => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                cancelAnimationFrame(raf);
                calcTimeLeft();
                let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
                autoplayDelayTotal = swiper.params.autoplay.delay;
                autoplayDelayCurrent = swiper.params.autoplay.delay;
                const currentSlideDelay = getSlideDelay();
                if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
                    delay = currentSlideDelay;
                    autoplayDelayTotal = currentSlideDelay;
                    autoplayDelayCurrent = currentSlideDelay;
                }
                autoplayTimeLeft = delay;
                const speed = swiper.params.speed;
                const proceed = () => {
                    if (!swiper || swiper.destroyed) return;
                    if (swiper.params.autoplay.reverseDirection) {
                        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
                            swiper.slidePrev(speed, true, true);
                            emit("autoplay");
                        } else if (!swiper.params.autoplay.stopOnLastSlide) {
                            swiper.slideTo(swiper.slides.length - 1, speed, true, true);
                            emit("autoplay");
                        }
                    } else if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
                        swiper.slideNext(speed, true, true);
                        emit("autoplay");
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        swiper.slideTo(0, speed, true, true);
                        emit("autoplay");
                    }
                    if (swiper.params.cssMode) {
                        autoplayStartTime = (new Date).getTime();
                        requestAnimationFrame((() => {
                            run();
                        }));
                    }
                };
                if (delay > 0) {
                    clearTimeout(timeout);
                    timeout = setTimeout((() => {
                        proceed();
                    }), delay);
                } else requestAnimationFrame((() => {
                    proceed();
                }));
                return delay;
            };
            const start = () => {
                swiper.autoplay.running = true;
                run();
                emit("autoplayStart");
            };
            const stop = () => {
                swiper.autoplay.running = false;
                clearTimeout(timeout);
                cancelAnimationFrame(raf);
                emit("autoplayStop");
            };
            const pause = (internal, reset) => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                clearTimeout(timeout);
                if (!internal) pausedByInteraction = true;
                const proceed = () => {
                    emit("autoplayPause");
                    if (swiper.params.autoplay.waitForTransition) swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd); else resume();
                };
                swiper.autoplay.paused = true;
                if (reset) {
                    if (slideChanged) autoplayTimeLeft = swiper.params.autoplay.delay;
                    slideChanged = false;
                    proceed();
                    return;
                }
                const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
                autoplayTimeLeft = delay - ((new Date).getTime() - autoplayStartTime);
                if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
                if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
                proceed();
            };
            const resume = () => {
                if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
                autoplayStartTime = (new Date).getTime();
                if (pausedByInteraction) {
                    pausedByInteraction = false;
                    run(autoplayTimeLeft);
                } else run();
                swiper.autoplay.paused = false;
                emit("autoplayResume");
            };
            const onVisibilityChange = () => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                const document = ssr_window_esm_getDocument();
                if (document.visibilityState === "hidden") {
                    pausedByInteraction = true;
                    pause(true);
                }
                if (document.visibilityState === "visible") resume();
            };
            const onPointerEnter = e => {
                if (e.pointerType !== "mouse") return;
                pausedByInteraction = true;
                pause(true);
            };
            const onPointerLeave = e => {
                if (e.pointerType !== "mouse") return;
                if (swiper.autoplay.paused) resume();
            };
            const attachMouseEvents = () => {
                if (swiper.params.autoplay.pauseOnMouseEnter) {
                    swiper.el.addEventListener("pointerenter", onPointerEnter);
                    swiper.el.addEventListener("pointerleave", onPointerLeave);
                }
            };
            const detachMouseEvents = () => {
                swiper.el.removeEventListener("pointerenter", onPointerEnter);
                swiper.el.removeEventListener("pointerleave", onPointerLeave);
            };
            const attachDocumentEvents = () => {
                const document = ssr_window_esm_getDocument();
                document.addEventListener("visibilitychange", onVisibilityChange);
            };
            const detachDocumentEvents = () => {
                const document = ssr_window_esm_getDocument();
                document.removeEventListener("visibilitychange", onVisibilityChange);
            };
            on("init", (() => {
                if (swiper.params.autoplay.enabled) {
                    attachMouseEvents();
                    attachDocumentEvents();
                    autoplayStartTime = (new Date).getTime();
                    start();
                }
            }));
            on("destroy", (() => {
                detachMouseEvents();
                detachDocumentEvents();
                if (swiper.autoplay.running) stop();
            }));
            on("beforeTransitionStart", ((_s, speed, internal) => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                if (internal || !swiper.params.autoplay.disableOnInteraction) pause(true, true); else stop();
            }));
            on("sliderFirstMove", (() => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                if (swiper.params.autoplay.disableOnInteraction) {
                    stop();
                    return;
                }
                isTouched = true;
                pausedByTouch = false;
                pausedByInteraction = false;
                touchStartTimeout = setTimeout((() => {
                    pausedByInteraction = true;
                    pausedByTouch = true;
                    pause(true);
                }), 200);
            }));
            on("touchEnd", (() => {
                if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
                clearTimeout(touchStartTimeout);
                clearTimeout(timeout);
                if (swiper.params.autoplay.disableOnInteraction) {
                    pausedByTouch = false;
                    isTouched = false;
                    return;
                }
                if (pausedByTouch && swiper.params.cssMode) resume();
                pausedByTouch = false;
                isTouched = false;
            }));
            on("slideChange", (() => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                slideChanged = true;
            }));
            Object.assign(swiper.autoplay, {
                start,
                stop,
                pause,
                resume
            });
        }
        function initSliders() {
            const newsSlider = document.querySelectorAll('[data-slider="phone"]');
            if (newsSlider.length > 0) for (let i = 0; i < newsSlider.length; i++) {
                const sl = newsSlider[i];
                new core(sl.querySelector(".swiper"), {
                    modules: [ Autoplay ],
                    speed: 900,
                    slidesPerView: 1,
                    watchSlidesProgress: true,
                    keyboard: {
                        enabled: true
                    },
                    autoplay: {
                        delay: 5e3
                    },
                    spaceBetween: 20,
                    on: {
                        init: self => {
                            if (self.slides.length == 1) self.autoplay.pause();
                        }
                    }
                });
            }
        }
        window.addEventListener("load", (function(e) {
            initSliders();
        }));
        var lazyload_min = __webpack_require__(732);
        new lazyload_min({
            elements_selector: "[data-src],[data-srcset]",
            class_loaded: "_lazy-loaded",
            use_native: true,
            callback_loaded: element => {
                if (element.tagName === "VIDEO" && element.dataset.lazy == "event") setTimeout((() => {
                    element.parentNode.classList.add("video-is-loaded");
                    element.setAttribute("autoplay", "");
                }), 1e3);
            }
        });
        let addWindowScrollEvent = false;
        function pageNavigation() {
            document.addEventListener("click", pageNavigationAction);
            document.addEventListener("watcherCallback", pageNavigationAction);
            function pageNavigationAction(e) {
                if (e.type === "click") {
                    const targetElement = e.target;
                    if (targetElement.closest("[data-goto]")) {
                        const gotoLink = targetElement.closest("[data-goto]");
                        const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
                        const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                        const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 1500;
                        const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                        gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
                        e.preventDefault();
                    }
                } else if (e.type === "watcherCallback" && e.detail) {
                    const entry = e.detail.entry;
                    const targetElement = entry.target;
                    if (targetElement.dataset.watch === "navigator") {
                        document.querySelector(`[data-goto]._navigator-active`);
                        let navigatorCurrentItem;
                        if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`); else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
                            const element = targetElement.classList[index];
                            if (document.querySelector(`[data-goto=".${element}"]`)) {
                                navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
                                break;
                            }
                        }
                        if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
                    }
                }
            }
            if (getHash()) {
                let goToHash;
                if (document.querySelector(`#${getHash()}`)) goToHash = `#${getHash()}`; else if (document.querySelector(`.${getHash()}`)) goToHash = `.${getHash()}`;
                goToHash ? gotoBlock(goToHash, true, 500, 20) : null;
            }
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        window["FLS"] = true;
        isWebp();
        addTouchClass();
        addLoadedClass();
        menuInit();
        rootClass();
        gsapAnimations();
        formFieldsInit({
            viewPass: false
        });
        formSubmit();
        pageNavigation();
        console.log("%c%s", "padding: 1rem 1.5rem;background: #f26722;font: 1rem / 1 Arial;color: #ffffff;", "Developed by Learn-Solve.com");
    })();
})();