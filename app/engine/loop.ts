import {Colission} from "./colission";


export class Loop {

	colission: Colission;

	constructor(private context: CanvasRenderingContext2D) {
		this.colission = new Colission();
	}

	private sprites: Array<any> = [];
	private started: boolean = false;

	newSprite(sprite, x, y) {
		sprite.position.x = x;
		sprite.position.y = y;
		this.sprites.push(sprite);
		this.colission.injectIn(sprite);
	}

	start() {
		this.started = true;
		this.nextFrame();
	}

	stop() {
		this.started = false;
	}

	nextFrame() {
		if (!this.started) return;

		this.clear();

		this.sprites.forEach((sp) => {
			sp.update();
			sp.draw();
		});

		this.colission.process();

		let animation = this;

		requestAnimationFrame(() => {
			setTimeout(() => {
				animation.nextFrame();
			}, 1000 / 60);
		});
	}

	clear() {
		this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
	}
}