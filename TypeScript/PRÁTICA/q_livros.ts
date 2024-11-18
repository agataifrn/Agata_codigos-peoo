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

class Biblioteca {
    private livros : Livro[] = [];

    constructor(livros? : Livro[]) { //Interrogação serve para ser um parâmetro OPCIONAL
        if (livros) {
            lista_livros.forEach(livro => {
                this.livros.push(livro);
            });
        }
    }

    adicionarLivro(livro: Livro) : void  {
        this.livros.push(livro); // Adiciona o livro ao array
        console.log("Livro adicionado")
    }

    adicionarLivros(lista_livros: Livro[]) : void  {
        lista_livros.forEach(livro => {
            this.livros.push(livro);
        });
        console.log("Livros adicionados.")
    }

    listarLivros() : void {
        console.log("LISTAGEM DE LIVROS DA BIBLIOTECA")
        if (this.livros.length === 0) 
            console.log('Nenhum livro na biblioteca.');
        else 
            this.livros.forEach(livro => {
                console.log(`- ${livro.descricao()}`)
            });
    }

}

// TESTE

let livro1 = new Livro("Harry Potter", "JK Rowlling", 70.90);
let livro2 = new Livro("O Amor Não É Óbvio", "Elayne Baeta", 60.75);
let livro3 = new Livro("Hamlet", "Shakspere", 140.99);
let livro4 = new Livro("Bíblia", "DEUS", 2.99);

let lista_livros : Livro[] = [livro1, livro2, livro3, livro4];
let biblio = new Biblioteca();






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


/* Q2: Crie uma classe Biblioteca que possui uma propriedade livros, que é um array de objetos da classe Livro. 
Implemente um método adicionarLivro(livro: Livro) para adicionar novos livros ao array. Implemente outro método listarLivros() 
que exibe o título e o autor de todos os livros adicionados à biblioteca. Crie uma instância de Biblioteca, 
adicione alguns livros e teste a listagem. */