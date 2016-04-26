export class SpriteSheet {
	private coluna: number;
	private linha: number;
	private ultimoTempo: number;
	private intervalo: number;
	private imagem: HTMLImageElement;
	constructor(private context, private imagemSrc, private linhas, private colunas) {
		var img = new Image();
		img.src = imagemSrc;
		this.imagem = img;
	}

	proximoQuadro() {
		let agora = new Date().getTime();

		if (! this.ultimoTempo) {
			this.ultimoTempo = agora;
		}

		if (agora - this.ultimoTempo < this.intervalo) {
			return;
		}

		if (this.coluna < this.colunas - 1) {
			this.coluna++;
		} else {
			this.coluna = 0;
		}

		this.ultimoTempo = agora;
	}

	desenhar(x, y) {
		let larguraQuadro = this.imagem.width / this.colunas;
		let alturaQuadro = this.imagem.height / this.linhas;

		this.context.drawImage(
			this.imagem,
			larguraQuadro * this.coluna,
			alturaQuadro * this.linha,
			larguraQuadro,
			alturaQuadro,
			x,
			y,
			larguraQuadro,
			alturaQuadro
		);
	}
}