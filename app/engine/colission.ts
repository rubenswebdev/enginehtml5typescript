export class Colission {
	sprites: Array<any> = [];

	injectIn(sprite) {
		this.sprites.push(sprite);
	}

	process() {
		this.sprites.forEach((sp1) => {
			this.sprites.forEach((sp2) => {
				if (sp1 !== sp2) {
					this.test(sp1, sp2);
				}
			})
		})
	}

	test(sp1, sp2) {
		sp1.getColiders().forEach((col1) => {
			sp2.getColiders().forEach((col2) => {
				if (this.pow(col1, col2)) {
					sp1.touch(sp2);
					sp2.touch(sp1);
				}
			});
		});
	}

	pow(col1, col2) {
		let a = (col1.x + col1.w) > col2.x;
		let b = col1.x  < (col2.x + col2.w);
		let c = (col1.y + col1.h) > col2.y;
		let d = col1.y < (col2.y + col2.h);

		return a && b && c && d;
	}

	public behaviorFixed(who, quem) {
		if (who.direcao === 1) {
			who.position.x = quem.position.x - quem.size.w;
		} else if (who.direcao === -1) {
			who.position.x = quem.position.x + quem.size.w;
		} else if (who.direcao === -2) {
			who.position.y = quem.position.y - quem.size.h;
		} else if (who.direcao === 2) {
			who.position.y = quem.position.y + quem.size.h;
		}
	}

	public behaviorMove(who, quem) {
		if (who.direcao === 1) {
			quem.position.x = who.position.x + who.size.w;
		} else if (who.direcao === -1) {
			quem.position.x = who.position.x - who.size.w;
		} else if (who.direcao === -2) {
			quem.position.y = who.position.y + who.size.h;
		} else if (who.direcao === 2) {
			quem.position.y = who.position.y - who.size.h;
		}
	}
}