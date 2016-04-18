import {Animation} from "./engine/animation";

import {Hero} from "./game/hero";

export class Main {
	canvas: any;
	context: CanvasRenderingContext2D;

	constructor() {
		this.canvas = document.getElementById('canvas');
		this.context = this.canvas.getContext('2d');
		var animation = new Animation(this.context);
		animation.newSprite(new Hero(this.context));
		animation.start();
	}
}