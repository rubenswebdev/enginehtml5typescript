import {Loop} from "./engine/loop";

import {Hero} from "./game/hero";
import {Enemy} from "./game/enemy";

export class Main {
	canvas: any;
	context: CanvasRenderingContext2D;

	constructor() {
		this.canvas = document.getElementById('canvas');
		this.context = this.canvas.getContext('2d');

		var loop = new Loop(this.context);

		let hero = new Hero(this.context);
		let enemy = new Enemy(this.context);

		loop.newSprite(hero, 100, 100);
		loop.newSprite(enemy, 200, 100);

		loop.start();
	}
}