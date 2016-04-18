System.register(["../engine/keyboard"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var keyboard_1;
    var Hero;
    return {
        setters:[
            function (keyboard_1_1) {
                keyboard_1 = keyboard_1_1;
            }],
        execute: function() {
            Hero = (function () {
                function Hero(context) {
                    this.context = context;
                    this.position = { "x": 0, "y": 0 };
                    this.size = { "w": 10, "h": 10 };
                    this.velocity = 5;
                    this.keyboard = new keyboard_1.Keyboard(document);
                }
                Hero.prototype.update = function () {
                    if (this.keyboard.pressed(keyboard_1.keys.KEY_LEFT)) {
                        if (this.position.x >= this.velocity) {
                            this.position.x -= this.velocity;
                        }
                    }
                    if (this.keyboard.pressed(keyboard_1.keys.KEY_RIGHT)) {
                        if (this.position.x <= this.context.canvas.width - (this.velocity + this.size.w)) {
                            this.position.x += this.velocity;
                        }
                    }
                    if (this.keyboard.pressed(keyboard_1.keys.KEY_UP)) {
                        if (this.position.y > 0) {
                            this.position.y -= this.velocity;
                        }
                    }
                    if (this.keyboard.pressed(keyboard_1.keys.KEY_DOWN)) {
                        if ((this.position.y + this.velocity) < (this.context.canvas.height - this.size.h)) {
                            this.position.y += this.velocity;
                        }
                    }
                    console.log(this.position);
                };
                Hero.prototype.draw = function () {
                    this.context.fillRect(this.position.x, this.position.y, this.size.w, this.size.h);
                    this.context.fillStyle = "blue";
                };
                return Hero;
            }());
            exports_1("Hero", Hero);
        }
    }
});
//# sourceMappingURL=hero.js.map