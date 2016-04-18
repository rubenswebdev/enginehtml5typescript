System.register(["./engine/animation", "./game/hero"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var animation_1, hero_1;
    var Main;
    return {
        setters:[
            function (animation_1_1) {
                animation_1 = animation_1_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            }],
        execute: function() {
            Main = (function () {
                function Main() {
                    this.canvas = document.getElementById('canvas');
                    this.context = this.canvas.getContext('2d');
                    var animation = new animation_1.Animation(this.context);
                    animation.newSprite(new hero_1.Hero(this.context));
                    animation.start();
                }
                return Main;
            }());
            exports_1("Main", Main);
        }
    }
});
//# sourceMappingURL=main.js.map