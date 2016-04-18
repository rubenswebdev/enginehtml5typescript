export class Animation {

	constructor(private context: CanvasRenderingContext2D) {}

	private sprites: Array<any> = [];
	private started: boolean = false;

	newSprite(sprite) {
		this.sprites.push(sprite);
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
		});

		this.sprites.forEach((sp) => {
			sp.draw();
		});

		let animation = this;

		requestAnimationFrame(() => {
			setTimeout(() => {
				animation.nextFrame();
			}, 1000 / 30);
		});
	}

	clear() {
		this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
	}
}

export interface AnimationInterface {
	draw();
	update();
}