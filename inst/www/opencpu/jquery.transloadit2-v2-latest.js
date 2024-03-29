/*
 jQuery Easing v1.3: Copyright (c) 2008 George McGinley Smith | BSD License: http://www.opensource.org/licenses/bsd-license.php
 jquery.transloadit2-v2.7.2.js: Copyright (c) 2013 Transloadit Ltd | MIT License: http://www.opensource.org/licenses/mit-license.php

 Fork this on Github: http://github.com/transloadit/jquery-sdk

 Transloadit servers allow browsers to cache jquery.transloadit2.js for 1 hour.
 keep this in mind when rolling out fixes.
 json2: Douglas Crockford | Public domain
 jQuery Tools 1.2.3: Tero Piirainen | Public domain
*/
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, a, b, c, d) {
        return jQuery.easing[jQuery.easing.def](e, a, b, c, d)
    },
    easeInQuad: function(e, a, b, c, d) {
        return c * (a /= d) * a + b
    },
    easeOutQuad: function(e, a, b, c, d) {
        return -c * (a /= d) * (a - 2) + b
    },
    easeInOutQuad: function(e, a, b, c, d) {
        return 1 > (a /= d / 2) ? c / 2 * a * a + b : -c / 2 * (--a * (a - 2) - 1) + b
    },
    easeInCubic: function(e, a, b, c, d) {
        return c * (a /= d) * a * a + b
    },
    easeOutCubic: function(e, a, b, c, d) {
        return c * ((a = a / d - 1) * a * a + 1) + b
    },
    easeInOutCubic: function(e, a, b, c, d) {
        return 1 > (a /= d / 2) ? c / 2 * a * a * a + b :
            c / 2 * ((a -= 2) * a * a + 2) + b
    },
    easeInQuart: function(e, a, b, c, d) {
        return c * (a /= d) * a * a * a + b
    },
    easeOutQuart: function(e, a, b, c, d) {
        return -c * ((a = a / d - 1) * a * a * a - 1) + b
    },
    easeInOutQuart: function(e, a, b, c, d) {
        return 1 > (a /= d / 2) ? c / 2 * a * a * a * a + b : -c / 2 * ((a -= 2) * a * a * a - 2) + b
    },
    easeInQuint: function(e, a, b, c, d) {
        return c * (a /= d) * a * a * a * a + b
    },
    easeOutQuint: function(e, a, b, c, d) {
        return c * ((a = a / d - 1) * a * a * a * a + 1) + b
    },
    easeInOutQuint: function(e, a, b, c, d) {
        return 1 > (a /= d / 2) ? c / 2 * a * a * a * a * a + b : c / 2 * ((a -= 2) * a * a * a * a + 2) + b
    },
    easeInSine: function(e, a, b, c, d) {
        return -c * Math.cos(a /
            d * (Math.PI / 2)) + c + b
    },
    easeOutSine: function(e, a, b, c, d) {
        return c * Math.sin(a / d * (Math.PI / 2)) + b
    },
    easeInOutSine: function(e, a, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * a / d) - 1) + b
    },
    easeInExpo: function(e, a, b, c, d) {
        return 0 == a ? b : c * Math.pow(2, 10 * (a / d - 1)) + b
    },
    easeOutExpo: function(e, a, b, c, d) {
        return a == d ? b + c : c * (-Math.pow(2, -10 * a / d) + 1) + b
    },
    easeInOutExpo: function(e, a, b, c, d) {
        return 0 == a ? b : a == d ? b + c : 1 > (a /= d / 2) ? c / 2 * Math.pow(2, 10 * (a - 1)) + b : c / 2 * (-Math.pow(2, -10 * --a) + 2) + b
    },
    easeInCirc: function(e, a, b, c, d) {
        return -c * (Math.sqrt(1 - (a /= d) *
            a) - 1) + b
    },
    easeOutCirc: function(e, a, b, c, d) {
        return c * Math.sqrt(1 - (a = a / d - 1) * a) + b
    },
    easeInOutCirc: function(e, a, b, c, d) {
        return 1 > (a /= d / 2) ? -c / 2 * (Math.sqrt(1 - a * a) - 1) + b : c / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + b
    },
    easeInElastic: function(e, a, b, c, d) {
        e = 1.70158;
        var f = 0,
            h = c;
        if (0 == a) return b;
        if (1 == (a /= d)) return b + c;
        f || (f = .3 * d);
        h < Math.abs(c) ? (h = c, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(c / h);
        return -(h * Math.pow(2, 10 * --a) * Math.sin(2 * (a * d - e) * Math.PI / f)) + b
    },
    easeOutElastic: function(e, a, b, c, d) {
        e = 1.70158;
        var f = 0,
            h = c;
        if (0 == a) return b;
        if (1 == (a /=
                d)) return b + c;
        f || (f = .3 * d);
        h < Math.abs(c) ? (h = c, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(c / h);
        return h * Math.pow(2, -10 * a) * Math.sin(2 * (a * d - e) * Math.PI / f) + c + b
    },
    easeInOutElastic: function(e, a, b, c, d) {
        e = 1.70158;
        var f = 0,
            h = c;
        if (0 == a) return b;
        if (2 == (a /= d / 2)) return b + c;
        f || (f = .3 * d * 1.5);
        h < Math.abs(c) ? (h = c, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(c / h);
        return 1 > a ? -.5 * h * Math.pow(2, 10 * --a) * Math.sin(2 * (a * d - e) * Math.PI / f) + b : h * Math.pow(2, -10 * --a) * Math.sin(2 * (a * d - e) * Math.PI / f) * .5 + c + b
    },
    easeInBack: function(e, a, b, c, d, f) {
        void 0 == f && (f = 1.70158);
        return c * (a /= d) * a * ((f + 1) * a - f) + b
    },
    easeOutBack: function(e, a, b, c, d, f) {
        void 0 == f && (f = 1.70158);
        return c * ((a = a / d - 1) * a * ((f + 1) * a + f) + 1) + b
    },
    easeInOutBack: function(e, a, b, c, d, f) {
        void 0 == f && (f = 1.70158);
        return 1 > (a /= d / 2) ? c / 2 * a * a * (((f *= 1.525) + 1) * a - f) + b : c / 2 * ((a -= 2) * a * (((f *= 1.525) + 1) * a + f) + 2) + b
    },
    easeInBounce: function(e, a, b, c, d) {
        return c - jQuery.easing.easeOutBounce(e, d - a, 0, c, d) + b
    },
    easeOutBounce: function(e, a, b, c, d) {
        return (a /= d) < 1 / 2.75 ? 7.5625 * c * a * a + b : a < 2 / 2.75 ? c * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + b : a < 2.5 / 2.75 ? c * (7.5625 * (a -=
            2.25 / 2.75) * a + .9375) + b : c * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + b
    },
    easeInOutBounce: function(e, a, b, c, d) {
        return a < d / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * a, 0, c, d) + b : .5 * jQuery.easing.easeOutBounce(e, 2 * a - d, 0, c, d) + .5 * c + b
    }
});
(function(e) {
    function a() {}

    function b(a) {
        u = [a]
    }

    function c(a, g, n) {
        return a && a.apply(g.context || g, n)
    }

    function d(d) {
        function x(a) {
            B++ || (C(), D && (n[r] = {
                s: [a]
            }), E && (a = E.apply(d, [a])), c(k, d, [a, "success", d]), c(w, d, [d, "success"]))
        }

        function p(a) {
            B++ || (C(), D && "timeout" != a && (n[r] = a), c(t, d, [d, a]), c(w, d, [d, a]))
        }
        d = e.extend({}, H, d);
        var k = d.success,
            t = d.error,
            w = d.complete,
            E = d.dataFilter,
            v = d.callbackParameter,
            I = d.callback,
            L = d.cache,
            D = d.pageCache,
            J = d.charset,
            r = d.url,
            y = d.data,
            K = d.timeout,
            F, B = 0,
            C = a,
            q, A, G;
        h && h(function(a) {
            a.done(k).fail(t);
            k = a.resolve;
            t = a.reject
        }).promise(d);
        d.abort = function() {
            !B++ && C()
        };
        if (!1 === c(d.beforeSend, d, [d]) || B) return d;
        r = r || "";
        y = y ? "string" == typeof y ? y : e.param(y, d.traditional) : "";
        r += y ? (/\?/.test(r) ? "&" : "?") + y : "";
        v && (r += (/\?/.test(r) ? "&" : "?") + encodeURIComponent(v) + "=?");
        L || D || (r += (/\?/.test(r) ? "&" : "?") + "_" + (new Date).getTime() + "=");
        r = r.replace(/=\?(&|$)/, "=" + I + "$1");
        D && (F = n[r]) ? F.s ? x(F.s[0]) : p(F) : (f[I] = b, q = e("<script>")[0], q.id = "_jqjsp" + g++, J && (q.charset = J), l && 11.6 > l.version() ? (A = e("<script>")[0]).text = "document.getElementById('" +
            q.id + "').onerror()" : q.async = "async", M && (q.htmlFor = q.id, q.event = "onclick"), q.onload = q.onerror = q.onreadystatechange = function(a) {
                if (!q.readyState || !/i/.test(q.readyState)) {
                    try {
                        q.onclick && q.onclick()
                    } catch (g) {}
                    a = u;
                    u = 0;
                    a ? x(a[0]) : p("error")
                }
            }, q.src = r, C = function(a) {
                G && clearTimeout(G);
                q.onreadystatechange = q.onload = q.onerror = null;
                m.removeChild(q);
                A && m.removeChild(A)
            }, m.insertBefore(q, v = m.firstChild), A && m.insertBefore(A, v), G = 0 < K && setTimeout(function() {
                p("timeout")
            }, K));
        return d
    }
    var f = window,
        h = e.Deferred,
        m =
        e("head")[0] || document.documentElement,
        n = {},
        g = 0,
        u, H = {
            callback: "_jqjsp",
            url: location.href
        },
        l = f.opera,
        M = !!e("<div>").html("\x3c!--[if IE]><i><![endif]--\x3e").find("i").length;
    d.setup = function(a) {
        e.extend(H, a)
    };
    e.jsonp = d
})(jQuery);
this.JSON || (this.JSON = {});
(function() {
    function e(a) {
        return 10 > a ? "0" + a : a
    }

    function a(a) {
        d.lastIndex = 0;
        return d.test(a) ? '"' + a.replace(d, function(a) {
            var g = m[a];
            return "string" === typeof g ? g : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + a + '"'
    }

    function b(g, d) {
        var c, l, e, z, x = f,
            p, k = d[g];
        k && "object" === typeof k && "function" === typeof k.toJSON && (k = k.toJSON(g));
        "function" === typeof n && (k = n.call(d, g, k));
        switch (typeof k) {
            case "string":
                return a(k);
            case "number":
                return isFinite(k) ? String(k) : "null";
            case "boolean":
            case "null":
                return String(k);
            case "object":
                if (!k) return "null";
                f += h;
                p = [];
                if ("[object Array]" === Object.prototype.toString.apply(k)) {
                    z = k.length;
                    for (c = 0; c < z; c += 1) p[c] = b(c, k) || "null";
                    e = 0 === p.length ? "[]" : f ? "[\n" + f + p.join(",\n" + f) + "\n" + x + "]" : "[" + p.join(",") + "]";
                    f = x;
                    return e
                }
                if (n && "object" === typeof n)
                    for (z = n.length, c = 0; c < z; c += 1) l = n[c], "string" === typeof l && (e = b(l, k)) && p.push(a(l) + (f ? ": " : ":") + e);
                else
                    for (l in k) Object.hasOwnProperty.call(k, l) && (e = b(l, k)) && p.push(a(l) + (f ? ": " : ":") + e);
                e = 0 === p.length ? "{}" : f ? "{\n" + f + p.join(",\n" + f) + "\n" +
                    x + "}" : "{" + p.join(",") + "}";
                f = x;
                return e
        }
    }
    "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(a) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + e(this.getUTCMonth() + 1) + "-" + e(this.getUTCDate()) + "T" + e(this.getUTCHours()) + ":" + e(this.getUTCMinutes()) + ":" + e(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(a) {
        return this.valueOf()
    });
    var c = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        d = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        f, h, m = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        n;
    "function" !== typeof JSON.stringify && (JSON.stringify = function(a, c, d) {
        var e;
        h = f = "";
        if ("number" === typeof d)
            for (e = 0; e < d; e += 1) h += " ";
        else "string" === typeof d && (h = d);
        if ((n = c) && "function" !== typeof c && ("object" !== typeof c || "number" !== typeof c.length)) throw Error("JSON.stringify");
        return b("", {
            "": a
        })
    });
    "function" !== typeof JSON.parse && (JSON.parse = function(a, n) {
        function d(a, g) {
            var c, e, b = a[g];
            if (b && "object" === typeof b)
                for (c in b) Object.hasOwnProperty.call(b, c) && (e = d(b, c), void 0 !== e ? b[c] = e : delete b[c]);
            return n.call(a, g, b)
        }
        var e;
        a = String(a);
        c.lastIndex = 0;
        c.test(a) && (a = a.replace(c, function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return e = eval("(" + a + ")"), "function" === typeof n ? d({
            "": e
        }, "") : e;
        throw new SyntaxError("JSON.parse");
    })
})();
(function(e) {
    e.tools = e.tools || {
        version: "2013-02-15"
    };
    var a = e.tools.expose = {
            conf: {
                maskId: "exposeMask",
                loadSpeed: "slow",
                closeSpeed: "fast",
                zIndex: 9998,
                opacity: .8,
                startOpacity: 0,
                color: "#fff"
            }
        },
        b, c, d, f, h;
    e.mask = {
        load: function(m, n) {
            if (d) return this;
            m = m || f;
            f = m = e.extend(e.extend({}, a.conf), m);
            b = e("#" + m.maskId);
            b.length || (b = e("<div/>").attr("id", m.maskId), e("body").append(b));
            b.css({
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "block",
                opacity: m.opacity,
                zIndex: m.zIndex,
                backgroundColor: m.color
            });
            n && n.length && (h = n.eq(0).css("zIndex"), c = n.css({
                zIndex: Math.max(m.zIndex + 1, "auto" == h ? 0 : h)
            }));
            d = !0;
            return this
        },
        close: function() {
            d && (b.fadeOut(f.closeSpeed, function() {
                c && c.css({
                    zIndex: h
                })
            }), d = !1);
            return this
        }
    };
    e.fn.mask = function(a) {
        e.mask.load(a);
        return this
    };
    e.fn.expose = function(a) {
        e.mask.load(a, this);
        return this
    }
})(jQuery);
! function(e) {
    function a(a, g) {
        g = g || [];
        return a.replace(/(%[s])/g, function(a, n, c) {
            return (a = g.shift()) || 0 === a ? a + "" : ""
        })
    }

    function b() {
        this.timer = this.documentTitle = this.instance = this.assemblyId = null;
        this._options = {};
        this.uploads = [];
        this.results = {};
        this.pollStarted = this.ended = null;
        this.pollRetries = 0;
        this.started = !1;
        this.params = this.assembly = null;
        this.lastPoll = this.bytesReceivedBefore = 0;
        this.$modal = this.$iframe = this.$fileClones = this.$files = this.$form = this.$params = null;
        this._clockseq = this._lastNSecs = this._lastMSecs =
            0;
        this._animatedTo100 = !1;
        this._uploadFileIds = [];
        this._resultFileIds = []
    }
    var c = "https:" == document.location.protocol ? "https://" : "http://",
        d = c + "api2.transloadit.com/",
        f = {
            service: d,
            assets: c + "assets.transloadit.com/",
            beforeStart: function() {
                return !0
            },
            onFileSelect: function() {},
            onStart: function() {},
            onProgress: function() {},
            onUpload: function() {},
            onResult: function() {},
            onCancel: function() {},
            onError: function() {},
            onSuccess: function() {},
            interval: 2500,
            pollTimeout: 8E3,
            poll404Retries: 15,
            pollConnectionRetries: 5,
            wait: !1,
            processZeroFiles: !0,
            triggerUploadOnFileSelection: !1,
            autoSubmit: !0,
            modal: !0,
            exclude: "",
            fields: !1,
            params: null,
            signature: null,
            region: "us-east-1",
            debug: !0,
            locale: "en"
        },
        h = {
            en: {
                "errors.BORED_INSTANCE_ERROR": "Could not find a bored instance.",
                "errors.CONNECTION_ERROR": "There was a problem connecting to the upload server",
                "errors.unknown": "There was an internal error.",
                "errors.tryAgain": "Please try your upload again.",
                "errors.troubleshootDetails": "If you would like our help to troubleshoot this, please email us this information:",
                cancel: "Cancel",
                details: "Details",
                startingUpload: "Starting upload ...",
                processingFiles: "Upload done, now processing files ...",
                uploadProgress: "%s / %s MB at %s kB/s | %s left"
            },
            ja: {
                "errors.BORED_INSTANCE_ERROR": "\u30b5\u30fc\u30d0\u30fc\u63a5\u7d9a\u306b\u554f\u984c\u304c\u3042\u308a\u307e\u3059",
                "errors.CONNECTION_ERROR": "\u30b5\u30fc\u30d0\u30fc\u63a5\u7d9a\u306b\u554f\u984c\u304c\u3042\u308a\u307e\u3059",
                "errors.unknown": "\u901a\u4fe1\u74b0\u5883\u306b\u554f\u984c\u304c\u3042\u308a\u307e\u3059",
                "errors.tryAgain": "\u3057\u3070\u3089\u304f\u3057\u3066\u304b\u3089\u518d\u5ea6\u6295\u7a3f\u3057\u3066\u304f\u3060\u3055\u3044",
                "errors.troubleshootDetails": "\u89e3\u6c7a\u3067\u304d\u306a\u3044\u5834\u5408\u306f\u3001\u3053\u3061\u3089\u306b\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044 \u4e0b\u8a18\u306e\u60c5\u5831\u3092\u30e1\u30fc\u30eb\u3067\u304a\u9001\u308a\u304f\u3060\u3055\u3044:",
                cancel: "\u30ad\u30e3\u30f3\u30bb\u30eb",
                details: "\u8a73\u7d30",
                startingUpload: "\u6295\u7a3f\u4e2d ...",
                processingFiles: "\u63a5\u7d9a\u4e2d",
                uploadProgress: "%s MB / %s MB (%s kB / \u79d2)"
            }
        },
        m = !1;
    e.fn.transloadit = function() {
        var a = Array.prototype.slice.call(arguments),
            g, c;
        if (0 !== this.length)
            if (1 < this.length) this.each(function() {
                e.fn.transloadit.apply(e(this), a)
            });
            else {
                (1 == a.length && "object" == typeof a[0] || void 0 === a[0]) && a.unshift("init");
                g = a.shift();
                "init" == g ? (c = new b, a.unshift(this), this.data("transloadit.uploader", c)) : c = this.data("transloadit.uploader");
                if (!c) throw Error("Element is not initialized for transloadit!");
                g = c[g].apply(c, a);
                return void 0 === g ? this : g
            }
    };
    e.fn.transloadit.i18n = h;
    b.prototype.init = function(a, g) {
        this.$form = a;
        this.options(e.extend({}, f, g || {}));
        var c = this;
        a.bind("submit.transloadit", function() {
            c.validate();
            c.detectFileInputs();
            c._options.processZeroFiles || 0 !== c.$files.length ? c._options.beforeStart() && c.getBoredInstance() : c._options.beforeStart() && c.submitForm();
            return !1
        });
        if (this._options.triggerUploadOnFileSelection) a.on("change", 'input[type="file"]', function() {
            a.trigger("submit.transloadit")
        });
        a.on("change", 'input[type="file"]', function() {
            c._options.onFileSelect(e(this).val(), e(this))
        });
        this.includeCss()
    };
    b.prototype.getBoredInstance = function() {
        function a() {
            e.jsonp({
                url: b,
                timeout: g._options.pollTimeout,
                callbackParameter: "callback",
                success: function(a) {
                    a.error ? (g.ended = !0, a.url = b, g.renderError(a), g._options.onError(a)) : (g.instance = a.api2_host, g.start())
                },
                error: function(e, h, z) {
                    f && g._options.service === d ? (f = !1, g._findBoredInstanceUrl(function(e, d) {
                        e ? (g.ended = !0, e = {
                            error: "BORED_INSTANCE_ERROR",
                            message: g.i18n("errors.BORED_INSTANCE_ERROR") + " " + e.message
                        }, g.renderError(e), g._options.onError(e)) : (b = c + "api2." + d + "/instances/bored", "https://" === c && (b = c + "api2-" + d + "/instances/bored"), a())
                    })) : (g.ended = !0, e = "JSONP bored instance request status: " + h + (", err: " + z), e = {
                        error: "CONNECTION_ERROR",
                        message: g.i18n("errors.CONNECTION_ERROR"),
                        reason: e,
                        url: b
                    }, g.renderError(e), g._options.onError(e))
                }
            })
        }
        var g = this;
        this.instance = null;
        var b = this._options.service + "instances/bored",
            f = !0;
        a();
        this._options.modal && this.showModal()
    };
    b.prototype._findBoredInstanceUrl = function(a) {
        var g = this,
            b = this._options.region,
            d = "s3";
        "us-east-1" !== b && (d = "s3-" + b);
        var l = c + d + ".amazonaws.com/infra-" + b,
            l = l + ".transloadit.com/cached_instances.json";
        e.ajax({
            url: l,
            datatype: "json",
            timeout: 5E3,
            success: function(c) {
                c = g._shuffle(c.uploaders);
                g._findResponsiveInstance(c, 0, a)
            },
            error: function(g, c) {
                a(Error("Could not query S3 for cached uploaders from url: " + l))
            }
        })
    };
    b.prototype._findResponsiveInstance = function(a, g, b) {
        if (!a[g]) return b(Error("No responsive uploaders"));
        var d = this,
            l = a[g];
        e.jsonp({
            url: c + l,
            timeout: 3E3,
            callbackParameter: "callback",
            success: function(a) {
                b(null, l)
            },
            error: function(c, e) {
                d._findResponsiveInstance(a, g + 1, b)
            }
        })
    };
    b.prototype._shuffle = function(a) {
        for (var g = [], c, e = 0; e < a.length; e++) c = Math.floor(Math.random() * (e + 1)), g[e] = g[c], g[c] = a[e];
        return g
    };
    b.prototype.start = function() {
        var a = this;
        this.ended = this.started = !1;
        this.pollRetries = this.bytesReceivedBefore = 0;
        this.uploads = [];
        this._animatedTo100 = !1;
        this._uploadFileIds = [];
        this._resultFileIds = [];
        this.results = {};
        this.assemblyId = this._genUuid();
        this.$fileClones = e().not(document);
        this._options.formData || this.$files.each(function() {
            var b = e(this).clone(!0);
            a.$fileClones = a.$fileClones.add(b);
            b.insertAfter(this)
        });
        this.$iframe = e('<iframe id="transloadit-' + this.assemblyId + '" name="transloadit-' + this.assemblyId + '"/>').appendTo("body").hide();
        var g = c + this.instance + "/assemblies/" + this.assemblyId + "?redirect=false";
        if (this._options.formData) {
            var b = this.$form.find("input[name=params]").val();
            if (this._options.formData instanceof FormData) this._options.formData.append("params", b);
            else {
                var d = new FormData(this.$form);
                d.append("params", b);
                for (b = 0; b < this._options.formData.length; b++) {
                    var l = this._options.formData[b];
                    d.append(l[0], l[1], l[2])
                }
                this._options.formData = d
            }
            d = new XMLHttpRequest;
            d.open("POST", g);
            d.send(this._options.formData)
        } else {
            this.$uploadForm = e('<form enctype="multipart/form-data" />').attr("action", g).attr("target", "transloadit-" + this.assemblyId).attr("method", "POST").append(this.$files).appendTo("body").hide();
            g =
                "[name=params], [name=signature]";
            !0 === this._options.fields ? g = "*" : "string" === typeof this._options.fields && (g += ", " + this._options.fields);
            b = this.$form.find(":input[type!=file]").filter(g);
            g = b.filter("select");
            b = b.filter(function() {
                return !e(this).is("select")
            });
            b = b.filter("[type!=submit]");
            b = this.clone(b);
            this._options.params && !this.$params && (b = b.add('<input name="params" value=\'' + JSON.stringify(this._options.params) + "'>"));
            this._options.signature && (b = b.add('<input name="signature" value=\'' + this._options.signature +
                "'>"));
            if ("object" == typeof this._options.fields)
                for (d in this._options.fields) b = b.add('<input name="' + d + "\" value='" + this._options.fields[d] + "'>");
            b.prependTo(this.$uploadForm);
            g.each(function() {
                e('<input type="hidden"/>').attr("name", e(this).attr("name")).attr("value", e(this).val()).prependTo(a.$uploadForm)
            });
            this.$uploadForm.submit()
        }
        this.lastPoll = +new Date;
        setTimeout(function() {
            a._poll()
        }, 300)
    };
    b.prototype.clone = function(a) {
        var b = a.clone();
        a = a.filter("textarea");
        for (var c = b.filter("textarea"),
                d = 0; d < a.length; ++d) e(c[d]).val(e(a[d]).val());
        return b
    };
    b.prototype.detectFileInputs = function() {
        var a = this.$form.find("input[type=file]").not(this._options.exclude);
        this._options.processZeroFiles || (a = a.filter(function() {
            return "" !== this.value
        }));
        this.$files = a
    };
    b.prototype.validate = function() {
        if (this._options.params) this.params = this._options.params;
        else {
            var a = this.$form.find("input[name=params]");
            if (!a.length) {
                alert("Could not find input[name=params] in your form.");
                return
            }
            this.$params = a;
            try {
                this.params =
                    JSON.parse(a.val())
            } catch (b) {
                alert("Error: input[name=params] seems to contain invalid JSON.");
                return
            }
        }
        this.params.redirect_url ? this.$form.attr("action", this.params.redirect_url) : this._options.autoSubmit && this.$form.attr("action") == this._options.service + "assemblies" && alert("Error: input[name=params] does not include a redirect_url")
    };
    b.prototype._poll = function(a) {
        var b = this;
        if (!this.ended) {
            var d = /(mozilla)(?:.*? rv:([\w.]+))?/.exec(navigator.userAgent),
                d = d && d[1];
            this.documentTitle = document.title;
            d && !this.documentTitle && (document.title = "Loading...");
            this.pollStarted = +new Date;
            var f = c + ("status-" + this.instance) + "/assemblies/" + this.assemblyId;
            a && (f += a);
            e.jsonp({
                url: f,
                timeout: b._options.pollTimeout,
                callbackParameter: "callback",
                success: function(a) {
                    if (!b.ended)
                        if (b.assembly = a, "ASSEMBLY_NOT_FOUND" == a.error) b.pollRetries++, b.pollRetries > b._options.poll404Retries ? (document.title = b.documentTitle, b.ended = !0, b.renderError(a), b._options.onError(a)) : setTimeout(function() {
                            b._poll()
                        }, 400);
                        else if (a.error) b.ended = !0, b.renderError(a), document.title = b.documentTitle, b._options.onError(a);
                    else {
                        !b.started && 0 < a.bytes_expected && (b.started = !0, b._options.onStart(a));
                        b.pollRetries = 0;
                        var c = "ASSEMBLY_EXECUTING" === a.ok,
                            d = "ASSEMBLY_CANCELED" === a.ok,
                            n = "ASSEMBLY_COMPLETED" === a.ok;
                        if (0 < a.bytes_expected) b._options.onProgress(a.bytes_received, a.bytes_expected, a);
                        for (var f = 0; f < a.uploads.length; f++) {
                            var k = a.uploads[f]; - 1 === e.inArray(k.id, b._uploadFileIds) && (b._options.onUpload(k, a), b.uploads.push(k), b._uploadFileIds.push(k.id))
                        }
                        for (var u in a.results)
                            for (b.results[u] =
                                b.results[u] || [], f = 0; f < a.results[u].length; f++) {
                                var k = a.results[u][f],
                                    h = u + "_" + k.id; - 1 === e.inArray(h, b._resultFileIds) && (b._options.onResult(u, k, a), b.results[u].push(k), b._resultFileIds.push(h))
                            }
                        d ? (b.ended = !0, document.title = b.documentTitle, b._options.onCancel(a)) : (c = n || !b._options.wait && c, 0 < a.bytes_expected && b.renderProgress(a, c, b._options.wait), c ? (b.ended = !0, document.title = b.documentTitle, a.uploads = b.uploads, a.results = b.results, b._options.onSuccess(a), setTimeout(function() {
                            b._options.modal && b.cancel();
                            b.submitForm()
                        }, 600)) : (a = b.pollStarted - +new Date, b.timer = setTimeout(function() {
                            b._poll()
                        }, a < b._options.interval ? b._options.interval : a), b.lastPoll = +new Date))
                    }
                },
                error: function(a, c, d) {
                    b.ended || (b.pollRetries++, b.pollRetries > b._options.pollConnectionRetries ? (document.title = b.documentTitle, b.ended = !0, a = "JSONP status poll request status: " + c + (", err: " + d), a = {
                        error: "CONNECTION_ERROR",
                        message: b.i18n("errors.CONNECTION_ERROR"),
                        reason: a,
                        url: f
                    }, b.renderError(a), b._options.onError(a)) : setTimeout(function() {
                            b._poll()
                        },
                        350))
                }
            })
        }
    };
    b.prototype.stop = function() {
        document.title = this.documentTitle;
        this.ended = !0
    };
    b.prototype.cancel = function() {
        if (!this.ended) {
            var a = this;
            this.$params && this.$params.prependTo(this.$form);
            this.$fileClones.each(function(b) {
                b = e(a.$files[b]).clone(!0);
                var c = e(this);
                b.insertAfter(c);
                c.remove()
            });
            clearTimeout(a.timer);
            this._poll("?method=delete");
            "Microsoft Internet Explorer" == navigator.appName && this.$iframe[0].contentWindow.document.execCommand("Stop");
            setTimeout(function() {
                    a.$iframe.remove()
                },
                500)
        }
        this._options.modal && this.hideModal()
    };
    b.prototype.submitForm = function() {
        "multipart/form-data" === this.$form.attr("enctype") && this.$form.removeAttr("enctype");
        null !== this.assembly && e("<textarea/>").attr("name", "transloadit").text(JSON.stringify(this.assembly)).prependTo(this.$form).hide();
        this._options.autoSubmit && this.$form.unbind("submit.transloadit").submit()
    };
    b.prototype.hideModal = function() {
        e.mask.close();
        this.$modal.remove()
    };
    b.prototype.showModal = function() {
        this.$modal = e('<div id="transloadit"><div class="content"><a href="#close" class="close">' +
            this.i18n("cancel") + '</a><p class="status"></p><div class="progress progress-striped"><div class="bar"><span class="percent"></span></div></div><label>' + this.i18n("startingUpload") + '</label><p class="error"></p><div class="error-details-toggle"><a href="#">' + this.i18n("details") + '</a></div><p class="error-details"></p></div></div>').appendTo("body");
        e.extend(this.$modal, {
            $content: this.$modal.find(".content"),
            $close: this.$modal.find(".close"),
            $label: this.$modal.find("label"),
            $progress: this.$modal.find(".progress"),
            $percent: this.$modal.find(".progress .percent"),
            $progressBar: this.$modal.find(".progress .bar"),
            $error: this.$modal.find(".error"),
            $errorDetails: this.$modal.find(".error-details"),
            $errorDetailsToggle: this.$modal.find(".error-details-toggle")
        });
        var a = this;
        this.$modal.$error.hide();
        this.$modal.$errorDetails.hide();
        this.$modal.$errorDetailsToggle.hide();
        this.$modal.expose({
            api: !0,
            maskId: "transloadit_expose",
            opacity: .9,
            loadSpeed: 250,
            closeOnEsc: !1,
            closeOnClick: !1
        });
        this.$modal.$close.click(function() {
            a.cancel();
            return !1
        })
    };
    b.prototype.renderError = function(a) {
        if (this._options.modal) {
            if (!this._options.debug) return this.cancel();
            this.$modal.$content.addClass("content-error");
            this.$modal.$progress.hide();
            this.$modal.$label.hide();
            var b = a.error + ": " + a.message + "<br /><br />",
                b = b + (a.reason || "");
            if (-1 === e.inArray(a.error, ["CONNECTION_ERROR", "BORED_INSTANCE_ERROR", "ASSEMBLY_NOT_FOUND"])) this.$modal.$error.html(b).show();
            else {
                var d = this.i18n("errors.unknown") + "<br/>" + this.i18n("errors.tryAgain");
                this.$modal.$error.html(d).show();
                var f = a.assemblyId ? a.assemblyId : this.assemblyId,
                    l = this,
                    h = null;
                e.getJSON(c + "jsonip.com/", function(a) {
                    h = a.ip
                }).always(function() {
                    var d = {
                        endpoint: a.url,
                        instance: l.instance,
                        assembly_id: f,
                        ip: h,
                        time: l.getUTCDatetime(),
                        agent: navigator.userAgent,
                        poll_retries: l.pollRetries,
                        error: b
                    };
                    e.post(c + "status.transloadit.com/client_error", d);
                    var u = [],
                        p;
                    for (p in d) u.push(p + ": " + d[p]);
                    d = l.i18n("errors.troubleshootDetails") + "<br /><br />";
                    l.$modal.$errorDetails.hide().html(d + u.join("<br />"));
                    l.$modal.$errorDetailsToggle.show().find("a").off("click").on("click",
                        function(a) {
                            a.preventDefault();
                            l.$modal.$errorDetails.toggle()
                        })
                })
            }
        }
    };
    b.prototype.renderProgress = function(a, b, c) {
        if (this._options.modal) {
            var d = a.bytes_received / a.bytes_expected * 100;
            100 < d && (d = 0);
            var e = a.bytes_received - this.bytesReceivedBefore,
                f = +new Date - this.lastPoll,
                h = 100 === d ? 1E3 : 2 * this._options.interval,
                m = (a.bytes_received / 1024 / 1024).toFixed(2),
                p = (a.bytes_expected / 1024 / 1024).toFixed(2),
                k = (e / 1024 / (f / 1E3)).toFixed(1),
                t = a.bytes_expected - a.bytes_received,
                f = (e / (f / 1E3)).toFixed(1),
                w = "";
            0 < f && (w = this._duration(t /
                f));
            txt = this.i18n("uploadProgress", m, p, k, w);
            this._animatedTo100 || this.$modal.$label.text(txt);
            var E = parseInt(this.$modal.$progress.css("width"), 10);
            this.bytesReceivedBefore = a.bytes_received;
            if (!(0 >= e) || b) {
                var v = this;
                b && c && (h = 500);
                this.$modal.$progressBar.stop().animate({
                    width: d + "%"
                }, {
                    duration: h,
                    easing: "linear",
                    progress: function(a, b, c) {
                        a = (100 * parseInt(v.$modal.$progressBar.css("width"), 10) / E).toFixed(0);
                        100 < a && (a = 100);
                        13 < a && !v._animatedTo100 && v.$modal.$percent.text(a + "%");
                        100 != a || v._animatedTo100 ||
                            (v._animatedTo100 = !0, setTimeout(function() {
                                v.$modal.$label.text(v.i18n("processingFiles"));
                                v.$modal.$progress.addClass("active");
                                v.$modal.$percent.text("")
                            }, 500))
                    }
                })
            }
        }
    };
    b.prototype.includeCss = function() {
        !m && this._options.modal && (m = !0, e('<link rel="stylesheet" type="text/css" href="' + this._options.assets + 'css/transloadit2-v2.7.2.css" />').appendTo("head"))
    };
    b.prototype.getUTCDatetime = function() {
        var a = new Date,
            a = new Date(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes(),
                a.getUTCSeconds()),
            b = function(a) {
                return 10 > a ? "0" + a : a
            },
            c = a.getTimezoneOffset(),
            d = (0 < c ? "-" : "+") + b(parseInt(c / 60, 10));
        0 !== c % 60 && (d += b(c % 60));
        0 === c && (d = "Z");
        return a.getFullYear() + "-" + b(a.getMonth() + 1) + "-" + b(a.getDate()) + "T" + b(a.getHours()) + ":" + b(a.getMinutes()) + ":" + b(a.getSeconds()) + d
    };
    b.prototype._duration = function(a) {
        var b = Math.floor(a / 3600);
        a -= 3600 * b;
        var c = Math.floor(a / 60);
        a -= 60 * c;
        var d = "";
        0 < b && (d += b + "h ");
        0 < c && (d += c + "min ");
        0 < a && (a = a.toFixed(0), d += a + "s");
        "" === d && (d = "0s");
        return d
    };
    b.prototype._genUuid =
        function(a, b, c) {
            function d(a, b) {
                var c = b || 0,
                    e = p;
                return e[a[c++]] + e[a[c++]] + e[a[c++]] + e[a[c++]] + e[a[c++]] + e[a[c++]] + e[a[c++]] + e[a[c++]] + e[a[c++]] + e[a[c++]] + e[a[c++]] + e[a[c++]] + e[a[c++]] + e[a[c++]] + e[a[c++]] + e[a[c++]]
            }
            a = a || {};
            c = b && c || 0;
            var e = b || [],
                f = Array(16),
                h = function() {
                    for (var a = 0, b; 16 > a; a++) 0 === (a & 3) && (b = 4294967296 * Math.random()), f[a] = b >>> ((a & 3) << 3) & 255;
                    return f
                }(),
                m = [h[0] | 1, h[1], h[2], h[3], h[4], h[5]];
            this._clockseq = (h[6] << 8 | h[7]) & 16383;
            for (var h = null != a.clockseq ? a.clockseq : this._clockseq, p = [], k = 0; 256 >
                k; k++) p[k] = (k + 256).toString(16).substr(1);
            var k = null != a.msecs ? a.msecs : (new Date).getTime(),
                t = null != a.nsecs ? a.nsecs : this._lastNSecs + 1,
                w = k - this._lastMSecs + (t - this._lastNSecs) / 1E4;
            0 > w && null == a.clockseq && (h = h + 1 & 16383);
            (0 > w || k > this._lastMSecs) && null == a.nsecs && (t = 0);
            if (1E4 <= t) throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
            this._lastMSecs = k;
            this._lastNSecs = t;
            this._clockseq = h;
            k += 122192928E5;
            t = (1E4 * (k & 268435455) + t) % 4294967296;
            e[c++] = t >>> 24 & 255;
            e[c++] = t >>> 16 & 255;
            e[c++] = t >>> 8 & 255;
            e[c++] = t & 255;
            k = k / 4294967296 * 1E4 & 268435455;
            e[c++] = k >>> 8 & 255;
            e[c++] = k & 255;
            e[c++] = k >>> 24 & 15 | 16;
            e[c++] = k >>> 16 & 255;
            e[c++] = h >>> 8 | 128;
            e[c++] = h & 255;
            a = a.node || m;
            for (m = 0; 6 > m; m++) e[c + m] = a[m];
            return b ? b : d(e)
        };
    b.prototype.options = function(a) {
        if (0 === arguments.length) return this._options;
        e.extend(this._options, a)
    };
    b.prototype.option = function(a, b) {
        if (1 == arguments.length) return this._options[a];
        this._options[a] = b
    };
    b.prototype.i18n = function() {
        var b = Array.prototype.slice.call(arguments),
            c = b.shift(),
            d = this._options.locale,
            d = h[d] &&
            h[d][c] || h.en[c];
        if (!d) throw Error("Unknown i18n key: " + c);
        return a(d, b)
    }
}(window.jQuery);