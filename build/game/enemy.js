System.register(["../engine/keyboard", "../engine/spritesheet", "../engine/colission"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var keyboard_1, spritesheet_1, colission_1;
    var ESQUERDA, DIREITA, CIMA, BAIXO, Enemy;
    return {
        setters:[
            function (keyboard_1_1) {
                keyboard_1 = keyboard_1_1;
            },
            function (spritesheet_1_1) {
                spritesheet_1 = spritesheet_1_1;
            },
            function (colission_1_1) {
                colission_1 = colission_1_1;
            }],
        execute: function() {
            ESQUERDA = -1;
            DIREITA = 1;
            CIMA = 2;
            BAIXO = -2;
            Enemy = (function () {
                function Enemy(context) {
                    this.context = context;
                    this.tag = 'ENEMY';
                    this.position = { "x": 0, "y": 0 };
                    this.size = { "w": 20, "h": 20 };
                    this.velocity = 2;
                    this.andando = false;
                    this.direcao = DIREITA;
                    this.keyboard = new keyboard_1.Keyboard();
                    this.colission = new colission_1.Colission();
                    this.sheet = new spritesheet_1.SpriteSheet(context, '/app/game/giphy.gif', 1, 1);
                    this.sheet.intervalo = 60;
                }
                Enemy.prototype.update = function () {
                    this.sheet.coluna = 0;
                    this.sheet.linha = 0;
                    // Não chamo proximoQuadro!
                    this.andando = false;
                };
                Enemy.prototype.draw = function () {
                    this.sheet.desenhar(this.position.x, this.position.y);
                };
                Enemy.prototype.getColiders = function () {
                    return [{
                            x: this.position.x,
                            y: this.position.y,
                            h: this.size.h,
                            w: this.size.w
                        }];
                };
                Enemy.prototype.touch = function (sp) {
                    //this.colission.behaviorFixed(sp, this);
                    this.colission.behaviorMove(sp, this);
                    console.log('colidiu', sp.direcao);
                };
                return Enemy;
            }());
            exports_1("Enemy", Enemy);
        }
    }
});
//# sourceMappingURL=enemy.js.map