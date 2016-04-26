System.register(["./colission"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var colission_1;
    var Loop;
    return {
        setters:[
            function (colission_1_1) {
                colission_1 = colission_1_1;
            }],
        execute: function() {
            Loop = (function () {
                function Loop(context) {
                    this.context = context;
                    this.sprites = [];
                    this.started = false;
                    this.colission = new colission_1.Colission();
                }
                Loop.prototype.newSprite = function (sprite, x, y) {
                    sprite.position.x = x;
                    sprite.position.y = y;
                    this.sprites.push(sprite);
                    this.colission.injectIn(sprite);
                };
                Loop.prototype.start = function () {
                    this.started = true;
                    this.nextFrame();
                };
                Loop.prototype.stop = function () {
                    this.started = false;
                };
                Loop.prototype.nextFrame = function () {
                    if (!this.started)
                        return;
                    this.clear();
                    this.sprites.forEach(function (sp) {
                        sp.update();
                        sp.draw();
                    });
                    this.colission.process();
                    var animation = this;
                    requestAnimationFrame(function () {
                        setTimeout(function () {
                            animation.nextFrame();
                        }, 1000 / 60);
                    });
                };
                Loop.prototype.clear = function () {
                    this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
                };
                return Loop;
            }());
            exports_1("Loop", Loop);
        }
    }
});
//# sourceMappingURL=loop.js.map