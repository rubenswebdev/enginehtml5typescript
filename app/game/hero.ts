import { AnimationInterface } from "../engine/animation.ts";
import { Keyboard, keys} from "../engine/keyboard";

export class Hero implements AnimationInterface {

	keyboard: Keyboard;
	position = { "x": 0, "y": 0 };
	size = { "w": 10, "h": 10 };
	velocity: number = 5;

	constructor(private context: CanvasRenderingContext2D) {
		this.keyboard = new Keyboard(document);
	}

	update () {
		if (this.keyboard.pressed(keys.KEY_LEFT)) {
			if (this.position.x >= this.velocity) {
				this.position.x -= this.velocity;
			}
		}

		if (this.keyboard.pressed(keys.KEY_RIGHT)) {
			if (this.position.x <= this.context.canvas.width - (this.velocity + this.size.w)) {
				this.position.x += this.velocity;
			}
		}

		if (this.keyboard.pressed(keys.KEY_UP)) {
			if (this.position.y > 0) {
				this.position.y -= this.velocity;
			}
		}

		if (this.keyboard.pressed(keys.KEY_DOWN)) {
			if ((this.position.y + this.velocity) < (this.context.canvas.height - this.size.h)) {
				this.position.y += this.velocity;
			}
		}

		console.log(this.position);
	}

	draw() {
		this.context.fillRect(this.position.x, this.position.y, this.size.w, this.size.h);
		this.context.fillStyle = "blue";
	}
}