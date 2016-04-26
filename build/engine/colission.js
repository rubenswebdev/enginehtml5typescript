System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Colission;
    return {
        setters:[],
        execute: function() {
            Colission = (function () {
                function Colission() {
                    this.sprites = [];
                }
                Colission.prototype.injectIn = function (sprite) {
                    this.sprites.push(sprite);
                };
                Colission.prototype.process = function () {
                    var _this = this;
                    this.sprites.forEach(function (sp1) {
                        _this.sprites.forEach(function (sp2) {
                            if (sp1 !== sp2) {
                                _this.test(sp1, sp2);
                            }
                        });
                    });
                };
                Colission.prototype.test = function (sp1, sp2) {
                    var _this = this;
                    sp1.getColiders().forEach(function (col1) {
                        sp2.getColiders().forEach(function (col2) {
                            if (_this.pow(col1, col2)) {
                                sp1.touch(sp2);
                                sp2.touch(sp1);
                            }
                        });
                    });
                };
                Colission.prototype.pow = function (col1, col2) {
                    var a = (col1.x + col1.w) > col2.x;
                    var b = col1.x < (col2.x + col2.w);
                    var c = (col1.y + col1.h) > col2.y;
                    var d = col1.y < (col2.y + col2.h);
                    return a && b && c && d;
                };
                Colission.prototype.behaviorFixed = function (who, quem) {
                    if (who.direcao === 1) {
                        who.position.x = quem.position.x - quem.size.w;
                    }
                    else if (who.direcao === -1) {
                        who.position.x = quem.position.x + quem.size.w;
                    }
                    else if (who.direcao === -2) {
                        who.position.y = quem.position.y - quem.size.h;
                    }
                    else if (who.direcao === 2) {
                        who.position.y = quem.position.y + quem.size.h;
                    }
                };
                Colission.prototype.behaviorMove = function (who, quem) {
                    if (who.direcao === 1) {
                        quem.position.x = who.position.x + who.size.w;
                    }
                    else if (who.direcao === -1) {
                        quem.position.x = who.position.x - who.size.w;
                    }
                    else if (who.direcao === -2) {
                        quem.position.y = who.position.y + who.size.h;
                    }
                    else if (who.direcao === 2) {
                        quem.position.y = who.position.y - who.size.h;
                    }
                };
                return Colission;
            }());
            exports_1("Colission", Colission);
        }
    }
});
//# sourceMappingURL=colission.js.map