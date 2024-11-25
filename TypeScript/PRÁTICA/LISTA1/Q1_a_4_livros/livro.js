"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, preco) {
        this._titulo = titulo;
        this._autor = autor;
        this._preco = preco;
    }
    Object.defineProperty(Livro.prototype, "preco", {
        get: function () {
            return this._preco;
        },
        set: function (novo_preco) {
            if (novo_preco <= 0)
                console.log('Não dá pra ter preço negativo! \n');
            else if (novo_preco > 350)
                console.log('Preço não alterado, tá muito caro O_O \n');
            else
                this._preco = novo_preco;
        },
        enumerable: false,
        configurable: true
    });
    Livro.prototype.descricao = function () {
        return "# Livro: ".concat(this._titulo, " # Autor: ").concat(this._autor, " # Pre\u00E7o: R$").concat(this._preco.toFixed(2));
    };
    return Livro;
}());
exports.Livro = Livro;
/* Q1: Crie uma classe Livro com os atributos titulo, autor e preco.
Crie um método descricao que retorne uma string com o título, autor e preço do livro.

TESTE ->

let livro1 = new Livro("Harry Potter", "JK Rowlling", 70.90);
let livro2 = new Livro("O Amor Não É Óbvio", "Elayne Baeta", 60.75);
let livro3 = new Livro("Hamlet", "Shakspere", 140.99);

let livros : Livro[] = [livro1, livro2, livro3];
livros.forEach(livro => {
    console.log(livro.descricao());
});

livro2.preco = -1.99
console.log(livro2.descricao()); */
