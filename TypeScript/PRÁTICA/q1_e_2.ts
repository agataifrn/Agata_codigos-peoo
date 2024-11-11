/* Crie uma classe Livro com os atributos titulo, autor e preco. 
Crie um método descricao que retorne uma string com o título, autor e preço do livro. */

class Livro {
    private _titulo : string;
    private _autor : string;
    private _preco : number;

    constructor(titulo: string, autor: string, preco: number) {
        this._titulo = titulo;
        this._autor = autor;
        this._preco = preco;
    } 

    get preco() {
        return this._preco;
    }

    set preco(novo_preco: number) {
        if (novo_preco <= 0)
            console.log('Não dá pra ter preço negativo! \n')
        else if (novo_preco > 350)
            console.log('Preço não alterado, tá muito caro O_O \n')
        else
            this._preco = novo_preco;
    }

    descricao() : string {
        return `------------- \n Livro: ${this._titulo} \n Autor: ${this._autor} \n Preço: R$${this._preco.toFixed(2)}`;
    }
}

let livro1 = new Livro("Harry Potter", "JK Rowlling", 70.90);
let livro2 = new Livro("O Amor Não É Óbvio", "Elayne Baeta", 60.75);
let livro3 = new Livro("Hamlet", "Shakspere", 140.99);

let livros : Livro[] = [livro1, livro2, livro3];
livros.forEach(livro => {
    console.log(livro.descricao());
});

livro2.preco = -1.99
console.log(livro2.descricao());
