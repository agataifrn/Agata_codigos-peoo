export class Animal {
    protected _nome : string;

    constructor(nome: string) {
        this._nome = nome;
    }

    get nome() : string { return this._nome; }
    set nome(nome: string) { this._nome = nome; }

    emitirSom() : string {
        return `*sons de ${this.nome}*`;
    }
}

/* Crie uma classe Animal com um método emitirSom(), que imprime uma mensagem genérica como "Som do animal". X */