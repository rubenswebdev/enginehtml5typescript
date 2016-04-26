System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SpriteSheet;
    return {
        setters:[],
        execute: function() {
            SpriteSheet = (function () {
                function SpriteSheet(context, imagemSrc, linhas, colunas) {
                    this.context = context;
                    this.imagemSrc = imagemSrc;
                    this.linhas = linhas;
                    this.colunas = colunas;
                    var img = new Image();
                    img.src = imagemSrc;
                    this.imagem = img;
                }
                SpriteSheet.prototype.proximoQuadro = function () {
                    var agora = new Date().getTime();
                    if (!this.ultimoTempo) {
                        this.ultimoTempo = agora;
                    }
                    if (agora - this.ultimoTempo < this.intervalo) {
                        return;
                    }
                    if (this.coluna < this.colunas - 1) {
                        this.coluna++;
                    }
                    else {
                        this.coluna = 0;
                    }
                    this.ultimoTempo = agora;
                };
                SpriteSheet.prototype.desenhar = function (x, y) {
                    var larguraQuadro = this.imagem.width / this.colunas;
                    var alturaQuadro = this.imagem.height / this.linhas;
                    this.context.drawImage(this.imagem, larguraQuadro * this.coluna, alturaQuadro * this.linha, larguraQuadro, alturaQuadro, x, y, larguraQuadro, alturaQuadro);
                };
                return SpriteSheet;
            }());
            exports_1("SpriteSheet", SpriteSheet);
        }
    }
});
//# sourceMappingURL=spritesheet.js.map