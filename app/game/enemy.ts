import { Keyboard } from "../engine/keyboard";
import { SpriteSheet } from "../engine/spritesheet";
import { Colission } from "../engine/colission";

let ESQUERDA = -1;
let DIREITA = 1;
let CIMA = 2;
let BAIXO = -2;

export class Enemy {

	tag: string = 'ENEMY';
	keyboard: Keyboard;
	colission: Colission;
	position = { "x": 0, "y": 0 };
	size = { "w": 20, "h": 20 };
	velocity: number = 2;

	sheet: any;
	andando: boolean = false;
	direcao: number = DIREITA;

	constructor(private context: CanvasRenderingContext2D) {
		this.keyboard = new Keyboard();
		this.colission = new Colission();
		this.sheet = new SpriteSheet(context, '/app/game/giphy.gif', 1, 1);
		this.sheet.intervalo = 60;
	}

	update () {


			this.sheet.coluna = 0;
			this.sheet.linha = 0;

			// Não chamo proximoQuadro!
			this.andando = false;

	}

	draw() {
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
		//this.colission.behaviorFixed(sp, this);
		this.colission.behaviorMove(sp, this);
		console.log('colidiu', sp.direcao);
	}
}