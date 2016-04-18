export class Main {
	canvas: HTMLCanvasElement;
	context: CanvasRenderingContext2D;
	constructor() {

		this.canvas = document.getElementById('canvas');
		this.context = this.canvas.getContext('2d')

		console.log("main started");
	}
}