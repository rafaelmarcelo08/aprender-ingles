export class CoracaoModel {

    constructor(
        public cheio: boolean,
        public URLCoracaoCheio: string = '/assets/coracao_cheio.png',
        public URLCoracaoVazio: string = '/assets/coracao_vazio.png'
    ) { }

    public verificarCoracao(): string {
        if (this.cheio) {
            return this.URLCoracaoCheio;
        } else {
            return this.URLCoracaoVazio;
        }
    }
}