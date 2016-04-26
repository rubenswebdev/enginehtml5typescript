import { Keyboard } from "../engine/keyboard";
import { SpriteSheet } from "../engine/spritesheet";


let ESQUERDA = -1;
let DIREITA = 1;
let CIMA = 2;
let BAIXO = -2;

export class Hero {

	tag: string = "HERO";
	keyboard: Keyboard;
	position = { "x": 0, "y": 0 };
	size = { "w": 25, "h": 45 };
	velocity: number = 2;

	sheet: any;
	andando: boolean = false;
	direcao: number = DIREITA;

	constructor(private context: CanvasRenderingContext2D) {
		this.keyboard = new Keyboard();
		this.sheet = new SpriteSheet(context, '/app/game/naurtowa5.png', 4, 4);
		this.sheet.intervalo = 60;
	}

	update () {

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
		} else if (this.keyboard.pressed("KEY_LEFT")) {
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
		} else if (this.keyboard.pressed("KEY_UP")) {
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
		} else if (this.keyboard.pressed("KEY_DOWN")) {
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
		} else if (this.keyboard.nonePressed()) {
			if (this.direcao == DIREITA) {
				this.sheet.coluna = 0;
				this.sheet.linha = 2;
			} else if (this.direcao == ESQUERDA) {
				this.sheet.coluna = 0;
				this.sheet.linha = 1;
			} else if (this.direcao == CIMA) {
				this.sheet.coluna = 0;
				this.sheet.linha = 3;
			} else if (this.direcao == BAIXO) {
				this.sheet.coluna = 0;
				this.sheet.linha = 0;
			}

			// Não chamo proximoQuadro!
			this.andando = false;
		}


	}

	draw() {
		this.context.fillStyle = 'green';
		this.context.fillRect(this.position.x, this.position.y, this.size.w, this.size.h);
		this.sheet.desenhar(this.position.x, this.position.y);
	}

	getColiders() {
		return [{
			x: this.position.x,
			y: this.position.y,
			h: this.size.h,
			w: this.size.w
		}];
	}

	touch(sp) {
		console.log('colidiu', sp.tag, sp.position);
	}
}