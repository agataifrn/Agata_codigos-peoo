export class Filme {
    private _titulo : string;
    private _diretor : string;
    private _anoLancamento : number;
    private avaliacoes : number;

/*     private avaliacao : number
    private avaliacoes : avaliacao[]; // ????? */

    constructor(titulo : string, diretor : string, anoLancamento : number, avaliacoes : number) {
        this._titulo = titulo;
        this._diretor = diretor;
        this._anoLancamento = anoLancamento;
        this.avaliacoes = avaliacoes;
    }

    get titulo() : string { return this._titulo; }
    set titulo(titulo: string) { this._titulo = titulo; }

    get diretor() : string { return this._diretor; }
    set diretor(diretor: string) { this._diretor = diretor; }

    get anoLancamento() : number { return this._anoLancamento; }
    set anoLancamento(anoLancamento: number) { this._anoLancamento = anoLancamento; }

    

}

/* 
Crie uma classe Filme com as propriedades: titulo (string), diretor (string),
anoLancamento (number) e avaliacoes (array de numbers). X

Crie getters e setters para os atributos titulo, diretor e anoLancamento. X

Implemente métodos para adicionar uma avaliação ao array (adicionarAvaliacao(nota: number)) 
e para calcular a média das avaliações (calcularMediaAvaliacoes()). 
Certifique-se de que a avaliação seja um valor entre 1 e 5. 
*/