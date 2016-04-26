System.register(["../engine/keyboard", "../engine/spritesheet"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var keyboard_1, spritesheet_1;
    var ESQUERDA, DIREITA, CIMA, BAIXO, Hero;
    return {
        setters:[
            function (keyboard_1_1) {
                keyboard_1 = keyboard_1_1;
            },
            function (spritesheet_1_1) {
                spritesheet_1 = spritesheet_1_1;
            }],
        execute: function() {
            ESQUERDA = -1;
            DIREITA = 1;
            CIMA = 2;
            BAIXO = -2;
            Hero = (function () {
                function Hero(context) {
                    this.context = context;
                    this.tag = "HERO";
                    this.position = { "x": 0, "y": 0 };
                    this.size = { "w": 25, "h": 45 };
                    this.velocity = 2;
                    this.andando = false;
                    this.direcao = DIREITA;
                    this.keyboard = new keyboard_1.Keyboard();
                    this.sheet = new spritesheet_1.SpriteSheet(context, '/app/game/naurtowa5.png', 4, 4);
                    this.sheet.intervalo = 60;
                }
                Hero.prototype.update = function () {
                    if (this.keyboard.pressed("KEY_RIGHT")) {
                        if (this.position.x <= this.context.canvas.width - (this.velocity + this.size.w)) {
                            if (!this.andando || this.direcao != DIREITA) {
                                // Seleciono o quadro da spritesheet
                                this.sheet.linha = 2;
                                this.sheet.coluna = 0;
                            }
                            // Configuro o estado atual
                            this.andando = true;
                            this.direcao = DIREITA;
                            // Neste estado, a animação da spritesheet deve rodar
                            this.sheet.proximoQuadro();
                            this.position.x += this.velocity;
                        }
                    }
                    else if (this.keyboard.pressed("KEY_LEFT")) {
                        if (this.position.x >= this.velocity) {
                            if (!this.andando || this.direcao != ESQUERDA) {
                                // Seleciono o quadro da spritesheet
                                this.sheet.linha = 1;
                                this.sheet.coluna = 0;
                            }
                            // Configuro o estado atual
                            this.andando = true;
                            this.direcao = ESQUERDA;
                            // Neste estado, a animação da spritesheet deve rodar
                            this.sheet.proximoQuadro();
                            this.position.x -= this.velocity;
                        }
                    }
                    else if (this.keyboard.pressed("KEY_UP")) {
                        if (this.position.y > 0) {
                            if (!this.andando || this.direcao != CIMA) {
                                this.sheet.linha = 3;
                                this.sheet.coluna = 0;
                            }
                            this.andando = true;
                            this.direcao = CIMA;
                            this.sheet.proximoQuadro();
                            this.position.y -= this.velocity;
                        }
                    }
                    else if (this.keyboard.pressed("KEY_DOWN")) {
                        if ((this.position.y + this.velocity) < (this.context.canvas.height - this.size.h)) {
                            if (!this.andando || this.direcao != BAIXO) {
                                this.sheet.linha = 0;
                                this.sheet.coluna = 0;
                            }
                            this.andando = true;
                            this.direcao = BAIXO;
                            this.sheet.proximoQuadro();
                            this.position.y += this.velocity;
                        }
                    }
                    else if (this.keyboard.nonePressed()) {
                        if (this.direcao == DIREITA) {
                            this.sheet.coluna = 0;
                            this.sheet.linha = 2;
                        }
                        else if (this.direcao == ESQUERDA) {
                            this.sheet.coluna = 0;
                            this.sheet.linha = 1;
                        }
                        else if (this.direcao == CIMA) {
                            this.sheet.coluna = 0;
                            this.sheet.linha = 3;
                        }
                        else if (this.direcao == BAIXO) {
                            this.sheet.coluna = 0;
                            this.sheet.linha = 0;
                        }
                        // Não chamo proximoQuadro!
                        this.andando = false;
                    }
                };
                Hero.prototype.draw = function () {
                    this.context.fillStyle = 'green';
                    this.context.fillRect(this.position.x, this.position.y, this.size.w, this.size.h);
                    this.sheet.desenhar(this.position.x, this.position.y);
                };
                Hero.prototype.getColiders = function () {
                    return [{
                            x: this.position.x,
                            y: this.position.y,
                            h: this.size.h,
                            w: this.size.w
                        }];
                };
                Hero.prototype.touch = function (sp) {
                    console.log('colidiu', sp.tag, sp.position);
                };
                return Hero;
            }());
            exports_1("Hero", Hero);
        }
    }
});
//# sourceMappingURL=hero.js.map