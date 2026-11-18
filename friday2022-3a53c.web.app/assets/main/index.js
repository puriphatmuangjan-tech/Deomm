System.register("chunks:///_virtual/companyPrefab.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./manager.ts", "./soundManager.ts"], (function(n) {
    "use strict";
    var e, t, a, i, r, o, p, c, l, s, u, m;
    return {
        setters: [function(n) {
            e = n.applyDecoratedDescriptor, t = n.inheritsLoose, a = n.initializerDefineProperty, i = n.assertThisInitialized
        }, function(n) {
            r = n.cclegacy, o = n._decorator, p = n.Sprite, c = n.Button, l = n.Label, s = n.Component
        }, function(n) {
            u = n.Manager
        }, function(n) {
            m = n.SoundManager
        }],
        execute: function() {
            var y, b, f, C, h, g, d, _, P;
            r._RF.push({}, "b2161E0RqBHqLrYGjC5HrmZ", "companyPrefab", void 0);
            var v = o.ccclass,
                z = o.property;
            n("CompanyPrefab", (y = v("CompanyPrefab"), b = z({
                type: p
            }), f = z({
                type: c
            }), C = z({
                type: l
            }), y((d = e((g = function(n) {
                function e() {
                    for (var e, t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
                    return e = n.call.apply(n, [this].concat(r)) || this, a(e, "iconCompany", d, i(e)), a(e, "btnCompany", _, i(e)), a(e, "nameCom", P, i(e)), e.company_name = null, e.manager = null, e.texture = null, e.sizeX = null, e.sizeY = null, e
                }
                t(e, n);
                var r = e.prototype;
                return r.onLoad = function() {
                    this.btnCompany.normalSprite = this.iconCompany.spriteFrame, this.btnCompany.pressedSprite = this.iconCompany.spriteFrame, this.btnCompany.hoverSprite = this.iconCompany.spriteFrame, this.btnCompany.disabledSprite = this.iconCompany.spriteFrame, this.nameCom.string = this.company_name
                }, r.onPageGameMenu = function() {
                    m.static_audio_Click.clip = m.static_enter, m.static_audio_Click.play(), this.manager.onPageGameMenu(this.company_name), u.onDestroyPage(u.page_Company)
                }, e
            }(s)).prototype, "iconCompany", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), _ = e(g.prototype, "btnCompany", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), P = e(g.prototype, "nameCom", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), h = g)) || h));
            r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/contactLine.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./manager.ts"], (function(t) {
    "use strict";
    var n, e, i, o, r, c, a, l, u, s;
    return {
        setters: [function(t) {
            n = t.applyDecoratedDescriptor, e = t.inheritsLoose, i = t.initializerDefineProperty, o = t.assertThisInitialized
        }, function(t) {
            r = t.cclegacy, c = t._decorator, a = t.Button, l = t.Node, u = t.Component
        }, function(t) {
            s = t.Manager
        }],
        execute: function() {
            var p, f, y, b, _, v, L, g, h;
            r._RF.push({}, "39358set/pI3rVwfdFXrx+X", "contactLine", void 0);
            var d = c.ccclass,
                C = c.property;
            t("ContactLine", (p = d("ContactLine"), f = C({
                type: a
            }), y = C({
                type: a
            }), b = C({
                type: l
            }), p((L = n((v = function(t) {
                function n() {
                    for (var n, e = arguments.length, r = new Array(e), c = 0; c < e; c++) r[c] = arguments[c];
                    return n = t.call.apply(t, [this].concat(r)) || this, i(n, "btn_line", L, o(n)), i(n, "btn_closeLine", g, o(n)), i(n, "contact_line", h, o(n)), n
                }
                e(n, t);
                var r = n.prototype;
                return r.start = function() {
                    s.isActiveContactline || (this.contact_line.active = !1)
                }, r.OnClickLandingToLine = function() {
                    window.location.replace("https://lin.ee/GYSOVcy")
                }, r.OnClickCloseButtonLine = function() {
                    s.isActiveContactline = !1, this.contact_line.active = !1
                }, n
            }(u)).prototype, "btn_line", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), g = n(v.prototype, "btn_closeLine", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), h = n(v.prototype, "contact_line", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), _ = v)) || _));
            r._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ["./rollupPluginModLoBabelHelpers.js", "cc"], (function(t) {
    "use strict";
    var e, o, i, n, s, l, r, a, g, h, c, p, C, d, m, u, T;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor, o = t.inheritsLoose, i = t.initializerDefineProperty, n = t.assertThisInitialized
        }, function(t) {
            s = t.cclegacy, l = t._decorator, r = t.Node, a = t.Canvas, g = t.UITransform, h = t.instantiate, c = t.Label, p = t.Color, C = t.RichText, d = t.Toggle, m = t.Button, u = t.director, T = t.Component
        }],
        execute: function() {
            var L, f, M, b, v, x, E, S, I;
            s._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", void 0);
            var A = l.ccclass,
                y = l.property;
            t("DebugViewRuntimeControl", (L = A("internal.DebugViewRuntimeControl"), f = y(r), M = y(r), b = y(r), L((E = e((x = function(t) {
                function e() {
                    for (var e, o = arguments.length, s = new Array(o), l = 0; l < o; l++) s[l] = arguments[l];
                    return e = t.call.apply(t, [this].concat(s)) || this, i(e, "compositeModeToggle", E, n(e)), i(e, "singleModeToggle", S, n(e)), i(e, "EnableAllCompositeModeButton", I, n(e)), e._single = 0, e.strSingle = ["No Single Debug", "Vertex Color", "Vertex Normal", "Vertex Tangent", "World Position", "Vertex Mirror", "Face Side", "UV0", "UV1", "UV Lightmap", "Project Depth", "Linear Depth", "Fragment Normal", "Fragment Tangent", "Fragment Binormal", "Base Color", "Diffuse Color", "Specular Color", "Transparency", "Metallic", "Roughness", "Specular Intensity", "IOR", "Direct Diffuse", "Direct Specular", "Direct All", "Env Diffuse", "Env Specular", "Env All", "Emissive", "Light Map", "Shadow", "AO", "Fresnel", "Direct Transmit Diffuse", "Direct Transmit Specular", "Env Transmit Diffuse", "Env Transmit Specular", "Transmit All", "Direct TRT", "Env TRT", "TRT All", "Fog"], e.strComposite = ["Direct Diffuse", "Direct Specular", "Env Diffuse", "Env Specular", "Emissive", "Light Map", "Shadow", "AO", "Normal Map", "Fog", "Tone Mapping", "Gamma Correction", "Fresnel", "Transmit Diffuse", "Transmit Specular", "TRT", "TT"], e.strMisc = ["CSM Layer Coloration", "Lighting With Albedo"], e.compositeModeToggleList = [], e.singleModeToggleList = [], e.miscModeToggleList = [], e.textComponentList = [], e.labelComponentList = [], e.textContentList = [], e.hideButtonLabel = void 0, e._currentColorIndex = 0, e.strColor = ["<color=#ffffff>", "<color=#000000>", "<color=#ff0000>", "<color=#00ff00>", "<color=#0000ff>"], e.color = [p.WHITE, p.BLACK, p.RED, p.GREEN, p.BLUE], e
                }
                o(e, t);
                var s = e.prototype;
                return s.start = function() {
                    if (this.node.parent.getComponent(a)) {
                        var t = this.node.parent.getComponent(g),
                            e = .5 * t.width,
                            o = .5 * t.height,
                            i = .1 * e - e,
                            n = o - .1 * o,
                            s = this.node.getChildByName("MiscMode"),
                            l = h(s);
                        l.parent = this.node, l.name = "Buttons";
                        var r = h(s);
                        r.parent = this.node, r.name = "Titles";
                        for (var u = 0; u < 2; u++) {
                            var T = h(this.EnableAllCompositeModeButton.getChildByName("Label"));
                            T.setPosition(i + (u > 0 ? 450 : 150), n, 0), T.setScale(.75, .75, .75), T.parent = r;
                            var L = T.getComponent(c);
                            L.string = u ? "----------Composite Mode----------" : "----------Single Mode----------", L.color = p.WHITE, L.overflow = 0, this.labelComponentList[this.labelComponentList.length] = L
                        }
                        n -= 20;
                        for (var f = 0, M = 0; M < this.strSingle.length; M++, f++) {
                            M === this.strSingle.length >> 1 && (i += 200, f = 0);
                            var b = M ? h(this.singleModeToggle) : this.singleModeToggle;
                            b.setPosition(i, n - 20 * f, 0), b.setScale(.5, .5, .5), b.parent = this.singleModeToggle.parent;
                            var v = b.getComponentInChildren(C);
                            v.string = this.strSingle[M], this.textComponentList[this.textComponentList.length] = v, this.textContentList[this.textContentList.length] = v.string, b.on(d.EventType.TOGGLE, this.toggleSingleMode, this), this.singleModeToggleList[M] = b
                        }
                        i += 200, this.EnableAllCompositeModeButton.setPosition(i + 15, n, 0), this.EnableAllCompositeModeButton.setScale(.5, .5, .5), this.EnableAllCompositeModeButton.on(m.EventType.CLICK, this.enableAllCompositeMode, this), this.EnableAllCompositeModeButton.parent = l;
                        var x = this.EnableAllCompositeModeButton.getComponentInChildren(c);
                        this.labelComponentList[this.labelComponentList.length] = x;
                        var E = h(this.EnableAllCompositeModeButton);
                        E.setPosition(i + 90, n, 0), E.setScale(.5, .5, .5), E.on(m.EventType.CLICK, this.changeTextColor, this), E.parent = l, (x = E.getComponentInChildren(c)).string = "TextColor", this.labelComponentList[this.labelComponentList.length] = x;
                        var S = h(this.EnableAllCompositeModeButton);
                        S.setPosition(i + 200, n, 0), S.setScale(.5, .5, .5), S.on(m.EventType.CLICK, this.hideUI, this), S.parent = this.node.parent, (x = S.getComponentInChildren(c)).string = "Hide UI", this.labelComponentList[this.labelComponentList.length] = x, this.hideButtonLabel = x, n -= 40;
                        for (var I = 0; I < this.strMisc.length; I++) {
                            var A = h(this.compositeModeToggle);
                            A.setPosition(i, n - 20 * I, 0), A.setScale(.5, .5, .5), A.parent = s;
                            var y = A.getComponentInChildren(C);
                            y.string = this.strMisc[I], this.textComponentList[this.textComponentList.length] = y, this.textContentList[this.textContentList.length] = y.string, A.getComponent(d).isChecked = !!I, A.on(d.EventType.TOGGLE, I ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this), this.miscModeToggleList[I] = A
                        }
                        n -= 150;
                        for (var D = 0; D < this.strComposite.length; D++) {
                            var B = D ? h(this.compositeModeToggle) : this.compositeModeToggle;
                            B.setPosition(i, n - 20 * D, 0), B.setScale(.5, .5, .5), B.parent = this.compositeModeToggle.parent;
                            var w = B.getComponentInChildren(C);
                            w.string = this.strComposite[D], this.textComponentList[this.textComponentList.length] = w, this.textContentList[this.textContentList.length] = w.string, B.on(d.EventType.TOGGLE, this.toggleCompositeMode, this), this.compositeModeToggleList[D] = B
                        }
                    } else console.error("debug-view-runtime-control should be child of Canvas")
                }, s.isTextMatched = function(t, e) {
                    var o = new String(t),
                        i = o.search(">");
                    return -1 === i ? t === e : (o = (o = o.substr(i + 1)).substr(0, o.search("<"))) === e
                }, s.toggleSingleMode = function(t) {
                    for (var e = u.root.debugView, o = t.getComponentInChildren(C), i = 0; i < this.strSingle.length; i++) this.isTextMatched(o.string, this.strSingle[i]) && (e.singleMode = i)
                }, s.toggleCompositeMode = function(t) {
                    for (var e = u.root.debugView, o = t.getComponentInChildren(C), i = 0; i < this.strComposite.length; i++) this.isTextMatched(o.string, this.strComposite[i]) && e.enableCompositeMode(i, t.isChecked)
                }, s.toggleLightingWithAlbedo = function(t) {
                    u.root.debugView.lightingWithAlbedo = t.isChecked
                }, s.toggleCSMColoration = function(t) {
                    u.root.debugView.csmLayerColoration = t.isChecked
                }, s.enableAllCompositeMode = function(t) {
                    var e = u.root.debugView;
                    e.enableAllCompositeMode(!0);
                    for (var o = 0; o < this.compositeModeToggleList.length; o++) {
                        this.compositeModeToggleList[o].getComponent(d).isChecked = !0
                    }
                    var i = this.miscModeToggleList[0].getComponent(d);
                    i.isChecked = !1, e.csmLayerColoration = !1, (i = this.miscModeToggleList[1].getComponent(d)).isChecked = !0, e.lightingWithAlbedo = !0
                }, s.hideUI = function(t) {
                    var e = this.node.getChildByName("Titles"),
                        o = !e.active;
                    this.singleModeToggleList[0].parent.active = o, this.miscModeToggleList[0].parent.active = o, this.compositeModeToggleList[0].parent.active = o, this.EnableAllCompositeModeButton.parent.active = o, e.active = o, this.hideButtonLabel.string = o ? "Hide UI" : "Show UI"
                }, s.changeTextColor = function(t) {
                    this._currentColorIndex++, this._currentColorIndex >= this.strColor.length && (this._currentColorIndex = 0);
                    for (var e = 0; e < this.textComponentList.length; e++) this.textComponentList[e].string = this.strColor[this._currentColorIndex] + this.textContentList[e] + "</color>";
                    for (var o = 0; o < this.labelComponentList.length; o++) this.labelComponentList[o].color = this.color[this._currentColorIndex]
                }, s.onLoad = function() {}, s.update = function(t) {}, e
            }(T)).prototype, "compositeModeToggle", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), S = e(x.prototype, "singleModeToggle", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), I = e(x.prototype, "EnableAllCompositeModeButton", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), v = x)) || v));
            s._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/gamePrefab.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./manager.ts", "./pageGameConsole.ts", "./soundManager.ts"], (function(e) {
    "use strict";
    var t, n, r, i, a, o, s, l, c, u, p, g, m, h, f, b;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, r = e.initializerDefineProperty, i = e.assertThisInitialized
        }, function(e) {
            a = e.cclegacy, o = e._decorator, s = e.Label, l = e.Sprite, c = e.Node, u = e.tween, p = e.ProgressBar, g = e.instantiate, m = e.Component
        }, function(e) {
            h = e.Manager
        }, function(e) {
            f = e.PageGameConsole
        }, function(e) {
            b = e.SoundManager
        }],
        execute: function() {
            var _, y, P, w, d, B, G, C, L, v, T, z, x, M, R;
            a._RF.push({}, "519e3YJHKNKjZmQI8qqZdZH", "gamePrefab", void 0);
            var S = o.ccclass,
                k = o.property;
            e("GamePrefab", (_ = S("GamePrefab"), y = k({
                type: s
            }), P = k({
                type: s
            }), w = k({
                type: l
            }), d = k({
                type: l
            }), B = k({
                type: c
            }), G = k({
                type: l
            }), _((v = t((L = function(e) {
                function t() {
                    for (var t, n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(a)) || this, r(t, "nameGame", v, i(t)), r(t, "percentTxt", T, i(t)), r(t, "colorPercent", z, i(t)), r(t, "lightBar", x, i(t)), r(t, "mainLog", M, i(t)), r(t, "icon", R, i(t)), t.tweenBar = null, t.tweenLight = null, t.progress = 0, t.game_name = null, t.game_company = null, t.texture = null, t.manager = null, t.scriptGamePrefab = null, t.timeReset = 60, t
                }
                n(t, e);
                var a = t.prototype;
                return a.onLoad = function() {
                    this.nameGame.string = this.game_name
                }, a.update = function() {
                    this.percentTxt.string = (100 * this.progress).toString().substring(0, 2) + " %", this.TweenProgressBar(.4, this.progress), this.TweenProgressLight(.1, 1 - h.timeRef / 60)
                }, a.onGenaratePercent = function() {
                    this.percentTxt.string = (100 * this.progress).toString().substring(0, 2) + " %", this.TweenProgressBar(.4, this.progress), this.TweenProgressLight(.1, h.timeRef)
                }, a.TweenProgressBar = function(e, t) {
                    var n = this;
                    this.tweenBar = u(this.colorPercent.getComponent(p)).to(e, {
                        progress: t
                    }).call((function() {
                        n.tweenBar = null
                    })).start()
                }, a.TweenProgressLight = function(e, t) {
                    var n = this;
                    this.lightBar.getComponent(p).progress = 0, this.tweenLight = u(this.lightBar.getComponent(p)).to(e, {
                        progress: t
                    }, {
                        onComplete: function() {}
                    }).call((function() {
                        n.tweenLight = null
                    })).start()
                }, a.onInteractable = function() {
                    b.static_audio_Click.clip = b.static_enter, b.static_audio_Click.play(), b.static_audio_boot.play(), b.static_audio_loop.clip = b.static_circle_loop, b.static_audio_loop.play(), b.static_audio_Backgorund.stop();
                    var e = g(this.manager.page_GameConsolePrefab),
                        t = e.getComponent(f);
                    t.icon.spriteFrame = this.icon.spriteFrame, t.text_gameName.string = this.game_name, t.company = this.game_company, t.progress = this.progress, t.scriptGamePrefab = this, t.manager = this.manager, e.setParent(this.manager.pagePos), h.page_GameConsole = e, h.page_GameMenu.active = !1
                }, t
            }(m)).prototype, "nameGame", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), T = t(L.prototype, "percentTxt", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), z = t(L.prototype, "colorPercent", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), x = t(L.prototype, "lightBar", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), M = t(L.prototype, "mainLog", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), R = t(L.prototype, "icon", [G], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), C = L)) || C));
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/main", ["./debug-view-runtime-control.ts", "./companyPrefab.ts", "./contactLine.ts", "./gamePrefab.ts", "./manager.ts", "./pageCompany.ts", "./pageGameConsole.ts", "./pageGameMenu.ts", "./pageNotice.ts", "./soundManager.ts"], (function() {
    "use strict";
    return {
        setters: [null, null, null, null, null, null, null, null, null, null],
        execute: function() {}
    }
}));

System.register("chunks:///_virtual/manager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./companyPrefab.ts", "./gamePrefab.ts", "./pageCompany.ts", "./pageGameMenu.ts", "./pageNotice.ts", "./soundManager.ts"], (function(e) {
    "use strict";
    var t, n, a, r, i, o, s, u, c, p, l, g, m, f, d, b, y, h, _, w, x, C, P, v, T;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, n = e.inheritsLoose, a = e.asyncToGenerator, r = e.initializerDefineProperty, i = e.assertThisInitialized, o = e.regeneratorRuntime
        }, function(e) {
            s = e.cclegacy, u = e._decorator, c = e.Node, p = e.Prefab, l = e.EditBox, g = e.Button, m = e.Sprite, f = e.SpriteFrame, d = e.instantiate, b = e.Component, y = e.EventHandler, h = e.assetManager, _ = e.Texture2D
        }, function(e) {
            w = e.CompanyPrefab
        }, function(e) {
            x = e.GamePrefab
        }, function(e) {
            C = e.PageCompany
        }, function(e) {
            P = e.PageGameMenu
        }, function(e) {
            v = e.PageNotice
        }, function(e) {
            T = e.SoundManager
        }],
        execute: function() {
            var k, M, L, N, G, z, S, D, R, E, I, A, H, U, O, q, B, F, X, J, j, Y, W, Z, K, Q, V, $, ee, te;
            s._RF.push({}, "b56e43PzFNAUYn3yWvHMkNZ", "manager", void 0);
            var ne = u.ccclass,
                ae = u.property;
            e("Manager", (k = ne("Manager"), M = ae({
                type: c
            }), L = ae({
                type: p
            }), N = ae({
                type: p
            }), G = ae({
                type: p
            }), z = ae({
                type: p
            }), S = ae({
                type: p
            }), D = ae({
                type: p
            }), R = ae({
                type: c
            }), E = ae({
                type: l
            }), I = ae({
                type: g
            }), A = ae({
                type: m
            }), H = ae({
                type: f
            }), U = ae({
                type: f
            }), k(((te = function(e) {
                function t() {
                    for (var t, n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
                    return (t = e.call.apply(e, [this].concat(a)) || this).ul = "http://localhost:3000/game/api/", r(t, "pagePos", B, i(t)), r(t, "page_CompanyPrefab", F, i(t)), r(t, "page_GameMenuPrefab", X, i(t)), r(t, "page_GameConsolePrefab", J, i(t)), r(t, "page_NoticePrefab", j, i(t)), r(t, "companyPrefab", Y, i(t)), r(t, "gamePrefab", W, i(t)), r(t, "page_Login", Z, i(t)), r(t, "inputCode", K, i(t)), r(t, "btn_Login", Q, i(t)), r(t, "bg", V, i(t)), r(t, "bg_login", $, i(t)), r(t, "bg_play", ee, i(t)), t
                }
                n(t, e);
                var s = t.prototype;
                return s.getID = function() {
                    return t.id
                }, s.onLoad = function() {
                    var e = a(o().mark((function e() {
                        var t, n;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.onLoadGetCompany();
                                case 2:
                                    return e.next = 4, this.onLoadGetTime();
                                case 4:
                                    return e.next = 6, this.onLoadGetGameAPI();
                                case 6:
                                    (t = new y).target = T.Sound.node, t.component = "SoundManager", t.handler = "AudioControl", (n = new y).target = this.node, n.component = "PageGameConsole", n.handler = "onToggleAudio";
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(), s.update = function() {
                    t.status && this.onCalulateTimeExp()
                }, s.onInstanceNotice = function() {
                    var e = a(o().mark((function e(n) {
                        var a;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, d(this.page_NoticePrefab);
                                case 2:
                                    a = e.sent, a.getComponent(v).text_notice.string = n, a.setParent(this.pagePos), t.page_Notice = a;
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(), s.onSignIn = function() {
                    if (this.btn_Login.enabled = !1, !this.inputCode.string) return this.onInstanceNotice("กรุณากรอกรหัสโค้ด"), this.btn_Login.enabled = !0, T.static_audio_Click.clip = T.static_error_c, void T.static_audio_Click.play();
                    var e = this,
                        n = new XMLHttpRequest;
                    n.open("POST", this.ul + "login/user/" + this.inputCode.string, !0), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n.onreadystatechange = a(o().mark((function a() {
                        var r, i;
                        return o().wrap((function(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    if (this.readyState !== XMLHttpRequest.DONE || 200 !== this.status) {
                                        a.next = 36;
                                        break
                                    }
                                    if ("" == n.responseText) {
                                        a.next = 29;
                                        break
                                    }
                                    if (!(r = JSON.parse(n.responseText)).status) {
                                        a.next = 22;
                                        break
                                    }
                                    if (t.id = e.inputCode.string, t.status = r.status, r.properties.timeStamp) {
                                        a.next = 9;
                                        break
                                    }
                                    return a.next = 9, e.onUpdateUserCodeTimeStamp(r.properties.numberTime, r.properties.typeTime);
                                case 9:
                                    t.expTime = r.expire, e.btn_Login.enabled = !1, i = d(e.page_CompanyPrefab), i.getComponent(C).manager = e, i.setParent(e.pagePos), t.page_Company = i, t.onDestroyPage(e.page_Login), T.static_audio_Backgorund.stop(), T.static_audio_Backgorund.clip = T.static_bg_company, T.static_audio_Backgorund.play(), a.next = 27;
                                    break;
                                case 22:
                                    e.onInstanceNotice("กรุณาลองใหม่อีกครั้ง"), e.btn_Login.enabled = !0, e.inputCode.string = "", T.static_audio_Click.clip = T.static_error_c, T.static_audio_Click.play();
                                case 27:
                                    a.next = 34;
                                    break;
                                case 29:
                                    e.onInstanceNotice("กรุณาลองใหม่อีกครั้ง"), e.btn_Login.enabled = !0, e.inputCode.string = "", T.static_audio_Click.clip = T.static_error_c, T.static_audio_Click.play();
                                case 34:
                                    a.next = 36;
                                    break;
                                case 36:
                                case "end":
                                    return a.stop()
                            }
                        }), a, this)
                    }))), n.send("member=111"), T.static_audio_Click.clip = T.static_enter, T.static_audio_Click.play()
                }, s.onUpdateUserCodeTimeStamp = function() {
                    var e = a(o().mark((function e(n, a) {
                        var r, i, s;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    r = new XMLHttpRequest, i = new Date, "day" === a ? i.setDate(i.getDate() + n) : "hours" === a ? i.setHours(i.getHours() + n) : i.setMinutes(i.getMinutes() + n), s = "expire=" + i.toUTCString(), r.open("POST", this.ul + "user/timestamp/code/" + t.id, !0), r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), r.onreadystatechange = function() {
                                        this.readyState === XMLHttpRequest.DONE && 200 === this.status && (t.expTime = i.toUTCString())
                                    }, r.send(s);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(), t.onSignOut = function() {
                    window.location.reload()
                }, s.onAddPageCompany = function() {
                    var e = d(this.page_CompanyPrefab);
                    e.getComponent(C).manager = this, e.setParent(this.pagePos), t.page_Company = e
                }, s.onPageGameMenu = function(e) {
                    var n = d(this.page_GameMenuPrefab),
                        a = n.getComponent(P);
                    a.manager = this, a.company = e, n.setParent(this.pagePos), t.page_GameMenu = n, null != t.page_Company && t.onDestroyPage(t.page_Company)
                }, s.LoadAsset = function() {
                    var e = a(o().mark((function e(t, n, a, r) {
                        var i, s, u = this;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    i = Math.floor(100 * Math.random()) / 100, s = r.getComponent(x), h.loadRemote(n, {
                                        ext: ".png"
                                    }, (function(e, n) {
                                        if (e) u.onInstanceNotice("Unloading Error " + e.message + " ");
                                        else {
                                            var r = new f,
                                                o = new _;
                                            o.image = n, r.texture = o, s.texture = r, s.icon.spriteFrame = s.texture, s.game_name = t, s.game_company = a, s.progress = i, s.manager = u
                                        }
                                    }));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, a, r) {
                        return e.apply(this, arguments)
                    }
                }(), s.onLoadGetGameAPI = function() {
                    var e = a(o().mark((function e() {
                        var n, r = this;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    n = this, h.loadAny({
                                        url: this.ul + "allgames"
                                    }, a(o().mark((function e(a, i) {
                                        var s, u, c, p;
                                        return o().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    if (a) {
                                                        e.next = 17;
                                                        break
                                                    }
                                                    s = JSON.parse(i), u = [], u = s, c = 0;
                                                case 5:
                                                    if (!(c < u.length)) {
                                                        e.next = 15;
                                                        break
                                                    }
                                                    return p = d(n.gamePrefab), t.gameList.push(p), e.next = 11, r.LoadAsset(s[c].name, s[c].path, s[c].company, t.gameList[c]);
                                                case 11:
                                                    e.sent;
                                                case 12:
                                                    c++, e.next = 5;
                                                    break;
                                                case 15:
                                                    e.next = 18;
                                                    break;
                                                case 17:
                                                    n.onInstanceNotice("Unloading Error " + a.message + " ");
                                                case 18:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    }))));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(), s.onLoadGetCompany = function() {
                    var e = a(o().mark((function e() {
                        var n, a = this;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    n = this, h.loadAny({
                                        url: this.ul + "allcompany"
                                    }, (function(e, r) {
                                        e ? n.onInstanceNotice("Unloading Error " + e.message + " ") : JSON.parse(r).forEach((function(e) {
                                            var r = d(a.companyPrefab),
                                                i = r.getComponent(w);
                                            i.company_name = e.name, i.sizeX = e.properties.size.width, i.sizeY = e.properties.size.height, i.manager = n, r.name = e.name, h.loadRemote(e.properties.path, {
                                                ext: ".png"
                                            }, (function(e, a) {
                                                if (e) n.onInstanceNotice("Unloading Error " + e.message + " ");
                                                else {
                                                    var r = new f,
                                                        o = new _;
                                                    o.image = a, r.texture = o, i.texture = r, t.companyList.push(i)
                                                }
                                            }))
                                        }))
                                    }));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(), s.onLoadGetTime = function() {
                    var e = a(o().mark((function e() {
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    t.timeDef = 60;
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(), t.onDestroyPage = function() {
                    var e = a(o().mark((function e(t) {
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    t.destroy();
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(), s.onCalulateTimeExp = function() {
                    var e = new Date,
                        n = new Date("" + t.expTime),
                        a = (Math.floor((n.getTime() - e.getTime()) / 864e5), Math.floor(Math.abs(n.getTime() - e.getTime()) / 36e5 % 24) + ":" + Math.floor(Math.abs(n.getTime() - e.getTime()) / 6e4 % 60) + ":" + Math.floor(Math.abs(n.getTime() - e.getTime()) / 1e3 % 60));
                    t.logTimeExp = "" + a, e > n && (t.status = !1, window.location.reload())
                }, t.onTimer = function() {
                    this.initTime = setInterval((function() {
                        t.timeRef--
                    }), 1e3)
                }, t.OnProgressRandom = function() {
                    t.gameList.forEach((function(e) {
                        var t = Math.floor(100 * Math.random()) / 100;
                        e.getComponent(x).progress = t
                    })), t.timeRef = t.timeDef, T.static_audio_boot.play()
                }, s.onToggleAudio = function() {}, t
            }(b)).manager = void 0, te.gameList = [], te.companyList = [], te.page_Loading = null, te.page_Company = null, te.page_GameMenu = null, te.page_GameConsole = null, te.page_Notice = null, te.timeRef = null, te.timeDef = null, te._pos = null, te._btn_audio = null, te._btn_audio_on = null, te._btn_audio_off = null, te.id = null, te.code = null, te.expTime = null, te.status = null, te.logTimeExp = null, te.initTime = null, te.isActiveContactline = !0, B = t((q = te).prototype, "pagePos", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), F = t(q.prototype, "page_CompanyPrefab", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), X = t(q.prototype, "page_GameMenuPrefab", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), J = t(q.prototype, "page_GameConsolePrefab", [G], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), j = t(q.prototype, "page_NoticePrefab", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Y = t(q.prototype, "companyPrefab", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), W = t(q.prototype, "gamePrefab", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Z = t(q.prototype, "page_Login", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), K = t(q.prototype, "inputCode", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Q = t(q.prototype, "btn_Login", [I], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), V = t(q.prototype, "bg", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), $ = t(q.prototype, "bg_login", [H], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ee = t(q.prototype, "bg_play", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), O = q)) || O));
            s._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/pageCompany.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./companyPrefab.ts", "./manager.ts", "./soundManager.ts"], (function(n) {
    "use strict";
    var e, t, a, o, i, r, p, c, s, u, m, l, y, g;
    return {
        setters: [function(n) {
            e = n.applyDecoratedDescriptor, t = n.inheritsLoose, a = n.initializerDefineProperty, o = n.assertThisInitialized
        }, function(n) {
            i = n.cclegacy, r = n._decorator, p = n.Node, c = n.Label, s = n.instantiate, u = n.UITransform, m = n.Component
        }, function(n) {
            l = n.CompanyPrefab
        }, function(n) {
            y = n.Manager
        }, function(n) {
            g = n.SoundManager
        }],
        execute: function() {
            var f, d, C, _, b, h, z;
            i._RF.push({}, "7da54wxg/JAWIQsXOsBp+aX", "pageCompany", void 0);
            var P = r.ccclass,
                v = r.property;
            n("PageCompany", (f = P("PageCompany"), d = v({
                type: p
            }), C = v({
                type: c
            }), f((h = e((b = function(n) {
                function e() {
                    for (var e, t = arguments.length, i = new Array(t), r = 0; r < t; r++) i[r] = arguments[r];
                    return e = n.call.apply(n, [this].concat(i)) || this, a(e, "companyPos", h, o(e)), a(e, "text_ExpTime", z, o(e)), e.manager = null, e
                }
                t(e, n);
                var i = e.prototype;
                return i.onLoad = function() {
                    this.onAddCompany()
                }, i.update = function() {
                    this.text_ExpTime.string = y.logTimeExp
                }, i.onAddCompany = function() {
                    var n = this;
                    y.companyList.forEach((function(e) {
                        var t = s(n.manager.companyPrefab),
                            a = t.getComponent(l);
                        a.iconCompany.spriteFrame = e.texture, a.manager = e.manager, a.company_name = e.company_name, a.sizeX = e.sizeX, a.sizeY = e.sizeY;
                        var o = parseInt(a.sizeX),
                            i = parseInt(a.sizeY);
                        a.btnCompany.getComponent(u).setContentSize(o, i), t.setParent(n.companyPos)
                    }))
                }, i.onSignOut = function() {
                    g.static_audio_Click.clip = g.static_back_btn, g.static_audio_Click.play(), y.onSignOut()
                }, e
            }(m)).prototype, "companyPos", [d], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), z = e(b.prototype, "text_ExpTime", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), _ = b)) || _));
            i._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/pageGameConsole.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./manager.ts", "./soundManager.ts"], (function(e) {
    "use strict";
    var t, i, r, n, l, o, a, c, u, s, p, g, _, b, f, m, h, d;
    return {
        setters: [function(e) {
            t = e.applyDecoratedDescriptor, i = e.inheritsLoose, r = e.initializerDefineProperty, n = e.assertThisInitialized
        }, function(e) {
            l = e.cclegacy, o = e._decorator, a = e.Label, c = e.Node, u = e.Sprite, s = e.SpriteFrame, p = e.ProgressBar, g = e.Button, _ = e.Color, b = e.tween, f = e.lerp, m = e.Component
        }, function(e) {
            h = e.Manager
        }, function(e) {
            d = e.SoundManager
        }],
        execute: function() {
            var y, w, L, z, v, P, C, G, x, R, A, T, F, M, k, B, Y, U, D, S, E, N, K, O, j, H, I, Q, V, q, J, W, X, Z, $, ee, te, ie, re, ne, le, oe, ae, ce, ue, se, pe, ge, _e, be, fe, me, he;
            l._RF.push({}, "99d2b1EuylK1KfkQzVEd+AG", "pageGameConsole", void 0);
            var de = o.ccclass,
                ye = o.property;
            e("PageGameConsole", (y = de("PageGameConsole"), w = ye({
                type: a
            }), L = ye({
                type: c
            }), z = ye({
                type: a
            }), v = ye({
                type: a
            }), P = ye({
                type: a
            }), C = ye({
                type: a
            }), G = ye({
                type: u
            }), x = ye({
                type: u
            }), R = ye({
                type: u
            }), A = ye({
                type: u
            }), T = ye({
                type: s
            }), F = ye({
                type: s
            }), M = ye({
                type: s
            }), k = ye({
                type: s
            }), B = ye({
                type: s
            }), Y = ye({
                type: s
            }), U = ye({
                type: s
            }), D = ye({
                type: s
            }), S = ye({
                type: s
            }), E = ye({
                type: u
            }), N = ye({
                type: p
            }), K = ye({
                type: g
            }), O = ye({
                type: _
            }), j = ye({
                type: _
            }), H = ye({
                type: _
            }), y((V = t((Q = function(e) {
                function t() {
                    for (var t, i = arguments.length, l = new Array(i), o = 0; o < i; o++) l[o] = arguments[o];
                    return t = e.call.apply(e, [this].concat(l)) || this, r(t, "userCode", V, n(t)), r(t, "pageGameConsole", q, n(t)), r(t, "text_gameName", J, n(t)), r(t, "text_timeRef", W, n(t)), r(t, "text_expTime", X, n(t)), r(t, "text_percent", Z, n(t)), r(t, "circleProgress", $, n(t)), r(t, "circleLight_small", ee, n(t)), r(t, "circleLight_big", te, n(t)), r(t, "circleLight_over", ie, n(t)), r(t, "circleLight_Red_small", re, n(t)), r(t, "circleLight_Red_big", ne, n(t)), r(t, "circleLight_Red_over", le, n(t)), r(t, "circleLight_Yellow_small", oe, n(t)), r(t, "circleLight_Yellow_big", ae, n(t)), r(t, "circleLight_Yellow_over", ce, n(t)), r(t, "circleLight_Green_small", ue, n(t)), r(t, "circleLight_Green_big", se, n(t)), r(t, "circleLight_Green_over", pe, n(t)), r(t, "icon", ge, n(t)), r(t, "bar", _e, n(t)), r(t, "btn_audio", be, n(t)), r(t, "color_bad", fe, n(t)), r(t, "color_cool", me, n(t)), r(t, "color_perfect", he, n(t)), t.tweenLight = null, t.progress = null, t.percentProgress = null, t.scriptGamePrefab = null, t.manager = null, t.company = null, t
                }
                i(t, e);
                var l = t.prototype;
                return l.onLoad = function() {
                    this.onCircleUpdate(), this.userCode.string = h.id
                }, l.update = function() {
                    this.onUpdateAllFunction()
                }, l.TweenProgressBar = function(e, t) {
                    var i = this;
                    this.tweenLight = b(this.circleProgress.getComponent(p)).to(e, {
                        progress: t
                    }).call((function() {
                        i.tweenLight = null
                    })).start()
                }, l.onUpdateAllFunction = function() {
                    this.text_timeRef.string = "" + h.timeRef, this.text_expTime.string = h.logTimeExp, h.timeRef <= 0 && (h.OnProgressRandom(), this.onCircleUpdate()), this.bar.progress != this.progress && (this.bar.progress = f(this.bar.progress, this.progress, .03))
                }, l.onRandomProgress = function() {
                    var e = Math.fround(100 * Math.random()) / 100;
                    this.progress = e, this.scriptGamePrefab.progress = this.progress, this.onCircleUpdate()
                }, l.onCircleUpdate = function() {
                    var e = this.scriptGamePrefab.progress;
                    this.percentProgress = Math.round(100 * e), this.text_percent.string = this.percentProgress + "%", this.TweenProgressBar(.4, this.percentProgress / 100), this.percentProgress >= 70 && this.percentProgress <= 89 ? (this.circleLight_small.spriteFrame = this.circleLight_Yellow_small, d.isAudio ? d.static_audio_loop.volume = .5 : d.static_audio_loop.volume = 0, d.static_audio_percent.stop(), d.static_audio_percent.clip = d.static_cool_clip, d.static_audio_percent.play()) : this.percentProgress >= 90 && this.percentProgress <= 100 ? (this.circleLight_small.spriteFrame = this.circleLight_Green_small, d.isAudio ? d.static_audio_loop.volume = .5 : d.static_audio_loop.volume = 0, d.static_audio_percent.stop(), d.static_audio_percent.clip = d.static_perfect_clip, d.static_audio_percent.play()) : (this.circleLight_small.spriteFrame = this.circleLight_Red_small, d.isAudio ? d.static_audio_loop.volume = 1 : d.static_audio_loop.volume = 0, d.static_audio_percent.stop())
                }, l.onDestroyPage = function() {
                    d.static_audio_Click.clip = d.static_back_btn, d.static_audio_Click.play(), d.static_audio_Backgorund.play(), d.static_audio_Backgorund.loop = !0, d.static_audio_boot.stop(), d.static_audio_loop.stop(), d.static_audio_percent.stop(), h.page_GameMenu.active = !0, h.onDestroyPage(h.page_GameConsole)
                }, l.onToggleAudio = function() {
                    d.OnToggleAudio(this.btn_audio)
                }, t
            }(m)).prototype, "userCode", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), q = t(Q.prototype, "pageGameConsole", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), J = t(Q.prototype, "text_gameName", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), W = t(Q.prototype, "text_timeRef", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), X = t(Q.prototype, "text_expTime", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Z = t(Q.prototype, "text_percent", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), $ = t(Q.prototype, "circleProgress", [G], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ee = t(Q.prototype, "circleLight_small", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), te = t(Q.prototype, "circleLight_big", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ie = t(Q.prototype, "circleLight_over", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), re = t(Q.prototype, "circleLight_Red_small", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ne = t(Q.prototype, "circleLight_Red_big", [F], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), le = t(Q.prototype, "circleLight_Red_over", [M], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), oe = t(Q.prototype, "circleLight_Yellow_small", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ae = t(Q.prototype, "circleLight_Yellow_big", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ce = t(Q.prototype, "circleLight_Yellow_over", [Y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ue = t(Q.prototype, "circleLight_Green_small", [U], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), se = t(Q.prototype, "circleLight_Green_big", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), pe = t(Q.prototype, "circleLight_Green_over", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), ge = t(Q.prototype, "icon", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), _e = t(Q.prototype, "bar", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), be = t(Q.prototype, "btn_audio", [K], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), fe = t(Q.prototype, "color_bad", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), me = t(Q.prototype, "color_cool", [j], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), he = t(Q.prototype, "color_perfect", [H], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), I = Q)) || I));
            l._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/pageGameMenu.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./gamePrefab.ts", "./manager.ts", "./soundManager.ts"], (function(e) {
    "use strict";
    var n, t, a, i, r, o, u, l, c, s, p, g, m, d, f, y, b;
    return {
        setters: [function(e) {
            n = e.applyDecoratedDescriptor, t = e.inheritsLoose, a = e.initializerDefineProperty, i = e.assertThisInitialized, r = e.asyncToGenerator, o = e.regeneratorRuntime
        }, function(e) {
            u = e.cclegacy, l = e._decorator, c = e.Label, s = e.Node, p = e.ScrollView, g = e.Button, m = e.Component, d = e.EventHandler
        }, function(e) {
            f = e.GamePrefab
        }, function(e) {
            y = e.Manager
        }, function(e) {
            b = e.SoundManager
        }],
        execute: function() {
            var _, h, v, w, P, C, T, G, M, k, x, A, z;
            u._RF.push({}, "10155HhKQpHjq57vWGwNFw5", "pageGameMenu", void 0);
            var S = l.ccclass,
                E = l.property;
            e("PageGameMenu", (_ = S("PageGameMenu"), h = E({
                type: c
            }), v = E({
                type: s
            }), w = E({
                type: p
            }), P = E({
                type: c
            }), C = E({
                type: g
            }), _((M = n((G = function(e) {
                function n() {
                    for (var n, t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
                    return n = e.call.apply(e, [this].concat(r)) || this, a(n, "user", M, i(n)), a(n, "gamePos", k, i(n)), a(n, "scroll", x, i(n)), a(n, "text_ExpTime", A, i(n)), a(n, "btn_audio", z, i(n)), n.page_Comapy = null, n.company = null, n.manager = null, n
                }
                t(n, e);
                var u = n.prototype;
                return u.onLoad = function() {
                    var e = r(o().mark((function e() {
                        var n;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    this.onAddGame(), y.onTimer(), this.user.string = y.id, (n = new d).target = b.Sound.node, n.component = "SoundManager", n.handler = "AudioControl";
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(), u.update = function() {
                    this.text_ExpTime.string = y.logTimeExp, y.timeRef <= 0 && y.OnProgressRandom()
                }, u.onAddGame = function() {
                    var e = this;
                    y.gameList.forEach((function(n) {
                        n.getComponent(f).game_company === e.company && n.setParent(e.scroll.content)
                    }))
                }, u.onBackToCompanypage = function() {
                    b.static_audio_Click.clip = b.static_back_btn, b.static_audio_Click.play(), this.scroll.content.removeAllChildren(), this.manager.page_Login.destroy(), this.manager.onAddPageCompany(), y.onDestroyPage(y.page_GameMenu), clearInterval(y.initTime)
                }, u.onSignOut = function() {
                    b.static_audio_Click.clip = b.static_back_btn, b.static_audio_Click.play(), y.onSignOut()
                }, u.onToggleAudio = function() {
                    b.OnToggleAudio(this.btn_audio)
                }, n
            }(m)).prototype, "user", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), k = n(G.prototype, "gamePos", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), x = n(G.prototype, "scroll", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), A = n(G.prototype, "text_ExpTime", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), z = n(G.prototype, "btn_audio", [C], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), T = G)) || T));
            u._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/pageNotice.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./manager.ts", "./soundManager.ts"], (function(t) {
    "use strict";
    var e, i, n, o, a, r, c, s, u, l;
    return {
        setters: [function(t) {
            e = t.applyDecoratedDescriptor, i = t.inheritsLoose, n = t.initializerDefineProperty, o = t.assertThisInitialized
        }, function(t) {
            a = t.cclegacy, r = t._decorator, c = t.Label, s = t.Component
        }, function(t) {
            u = t.Manager
        }, function(t) {
            l = t.SoundManager
        }],
        execute: function() {
            var p, g, f, _, y;
            a._RF.push({}, "a9951W5Zg9C/a5Q1CXresBP", "pageNotice", void 0);
            var d = r.ccclass,
                b = r.property;
            t("PageNotice", (p = d("PageNotice"), g = b({
                type: c
            }), p((y = e((_ = function(t) {
                function e() {
                    for (var e, i = arguments.length, a = new Array(i), r = 0; r < i; r++) a[r] = arguments[r];
                    return e = t.call.apply(t, [this].concat(a)) || this, n(e, "text_notice", y, o(e)), e
                }
                return i(e, t), e.prototype.onCloseNotic = function() {
                    l.static_audio_Click.clip = l.static_back_btn, l.static_audio_Click.play(), u.onDestroyPage(u.page_Notice)
                }, e
            }(s)).prototype, "text_notice", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), f = _)) || f));
            a._RF.pop()
        }
    }
}));

System.register("chunks:///_virtual/soundManager.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./manager.ts"], (function(i) {
    "use strict";
    var t, o, e, n, r, a, l, u, c, _, p;
    return {
        setters: [function(i) {
            t = i.applyDecoratedDescriptor, o = i.inheritsLoose, e = i.initializerDefineProperty, n = i.assertThisInitialized
        }, function(i) {
            r = i.cclegacy, a = i._decorator, l = i.AudioSource, u = i.Node, c = i.AudioClip, _ = i.Component
        }, function(i) {
            p = i.Manager
        }],
        execute: function() {
            var d, b, s, g, f, y, h, m, k, v, w, z, S, A, B, L, O, M, C, x, D, T, j, F, J, P, R, Z, H, I, K, N, U, q, E, G;
            r._RF.push({}, "bf319sw+KZJZJjUxx26sgxu", "soundManager", void 0);
            var Q = a.ccclass,
                V = a.property;
            i("SoundManager", (d = Q("SoundManager"), b = V({
                type: l
            }), s = V({
                type: l
            }), g = V({
                type: l
            }), f = V({
                type: l
            }), y = V({
                type: l
            }), h = V({
                type: u
            }), m = V({
                type: u
            }), k = V({
                type: c
            }), v = V({
                type: c
            }), w = V({
                type: c
            }), z = V({
                type: c
            }), S = V({
                type: c
            }), A = V({
                type: c
            }), B = V({
                type: c
            }), L = V({
                type: c
            }), O = V({
                type: c
            }), d(((G = function(i) {
                function t() {
                    for (var t, o = arguments.length, r = new Array(o), a = 0; a < o; a++) r[a] = arguments[a];
                    return t = i.call.apply(i, [this].concat(r)) || this, e(t, "audio_Background", x, n(t)), e(t, "audio_clickOther", D, n(t)), e(t, "audio_boot", T, n(t)), e(t, "audio_loop", j, n(t)), e(t, "audio_percent", F, n(t)), e(t, "audio_node_background", J, n(t)), e(t, "audio_node_click", P, n(t)), e(t, "back_btn", R, n(t)), e(t, "bg_company", Z, n(t)), e(t, "bg_Login", H, n(t)), e(t, "enter", I, n(t)), e(t, "error_c", K, n(t)), e(t, "cirecle_boot", N, n(t)), e(t, "circle_loop", U, n(t)), e(t, "cool_clip", q, n(t)), e(t, "perfect_clip", E, n(t)), t
                }
                o(t, i);
                var r = t.prototype;
                return r.onLoad = function() {
                    t.Sound = this, t.static_audio_Backgorund = this.audio_Background, t.static_audio_Click = this.audio_clickOther, t.static_audio_boot = this.audio_boot, t.static_audio_loop = this.audio_loop, t.static_audio_percent = this.audio_percent, t.static_back_btn = this.back_btn, t.static_bg_company = this.bg_company, t.static_bg_Login = this.bg_Login, t.static_enter = this.enter, t.static_error_c = this.error_c, t.static_cirecle_boot = this.cirecle_boot, t.static_circle_loop = this.circle_loop, t.static_cool_clip = this.cool_clip, t.static_perfect_clip = this.perfect_clip, t.static_audio_Backgorund.clip = t.static_bg_Login, t.static_audio_Backgorund.play()
                }, r.AudioControl = function() {
                    this.audio_node_background.active && this.audio_node_click.active ? (this.audio_node_background.active = !1, this.audio_node_click.active = !1, this.audio_Background.volume = 0, this.audio_clickOther.volume = 0, this.audio_boot.volume = 0, this.audio_loop.volume = 0, this.audio_percent.volume = 0, t.isAudio = !1) : (this.audio_node_background.active = !0, this.audio_node_click.active = !0, this.audio_Background.volume = 1, this.audio_clickOther.volume = 1, this.audio_boot.volume = 1, this.audio_loop.volume = 1, this.audio_percent.volume = 1, t.isAudio = !0), t.OnToggleAudio(t.btn_log)
                }, t.OnToggleAudio = function(i) {
                    t.btn_log = i, t.isAudio ? (i.normalSprite = p._btn_audio_on, i.pressedSprite = p._btn_audio_on, i.hoverSprite = p._btn_audio_on, i.disabledSprite = p._btn_audio_on) : (i.normalSprite = p._btn_audio_off, i.pressedSprite = p._btn_audio_off, i.hoverSprite = p._btn_audio_off, i.disabledSprite = p._btn_audio_off)
                }, t
            }(_)).Sound = null, G.static_audio_Backgorund = null, G.static_audio_Click = null, G.static_audio_boot = null, G.static_audio_loop = null, G.static_audio_percent = null, G.static_back_btn = null, G.static_bg_company = null, G.static_bg_Login = null, G.static_enter = null, G.static_error_c = null, G.static_cirecle_boot = null, G.static_circle_loop = null, G.static_cool_clip = null, G.static_perfect_clip = null, G.isAudio = !0, G.btn_log = null, x = t((C = G).prototype, "audio_Background", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), D = t(C.prototype, "audio_clickOther", [s], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), T = t(C.prototype, "audio_boot", [g], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), j = t(C.prototype, "audio_loop", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), F = t(C.prototype, "audio_percent", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), J = t(C.prototype, "audio_node_background", [h], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), P = t(C.prototype, "audio_node_click", [m], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), R = t(C.prototype, "back_btn", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), Z = t(C.prototype, "bg_company", [v], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), H = t(C.prototype, "bg_Login", [w], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), I = t(C.prototype, "enter", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), K = t(C.prototype, "error_c", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), N = t(C.prototype, "cirecle_boot", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), U = t(C.prototype, "circle_loop", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), q = t(C.prototype, "cool_clip", [L], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), E = t(C.prototype, "perfect_clip", [O], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return null
                }
            }), M = C)) || M));
            r._RF.pop()
        }
    }
}));

(function(r) {
    r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main');
})(function(mid, cid) {
    System.register(mid, [cid], function(_export, _context) {
        return {
            setters: [function(_m) {
                var _exportObj = {};

                for (var _key in _m) {
                    if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
                }

                _export(_exportObj);
            }],
            execute: function() {}
        };
    });
});