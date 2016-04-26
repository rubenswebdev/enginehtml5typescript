System.register(["./engine/loop", "./game/hero", "./game/enemy"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var loop_1, hero_1, enemy_1;
    var Main;
    return {
        setters:[
            function (loop_1_1) {
                loop_1 = loop_1_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            },
            function (enemy_1_1) {
                enemy_1 = enemy_1_1;
            }],
        execute: function() {
            Main = (function () {
                function Main() {
                    this.canvas = document.getElementById('canvas');
                    this.context = this.canvas.getContext('2d');
                    var loop = new loop_1.Loop(this.context);
                    var hero = new hero_1.Hero(this.context);
                    var enemy = new enemy_1.Enemy(this.context);
                    loop.newSprite(hero, 100, 100);
                    loop.newSprite(enemy, 200, 100);
                    loop.start();
                }
                return Main;
            }());
            exports_1("Main", Main);
        }
    }
});
//# sourceMappingURL=main.js.map