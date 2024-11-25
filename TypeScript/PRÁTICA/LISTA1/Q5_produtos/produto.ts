export class Produto {
    private _nome : string;
    private _preco : number;

    constructor(nome: string, preco: number) {
        this._nome = nome;
        this._preco = preco;
    }

    get nome() : string { return this._nome; }
    get preco() : number { return this._preco; }
    
}