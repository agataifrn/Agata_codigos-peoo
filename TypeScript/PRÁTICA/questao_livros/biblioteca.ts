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

/* Q2: Crie uma classe Biblioteca que possui uma propriedade livros, que é um array de objetos da classe Livro. 
Implemente um método adicionarLivro(livro: Livro) para adicionar novos livros ao array. Implemente outro método listarLivros() 
que exibe o título e o autor de todos os livros adicionados à biblioteca. Crie uma instância de Biblioteca, 
adicione alguns livros e teste a listagem. 

let livro1 = new Livro("Harry Potter", "JK Rowlling", 70.90);
let livro2 = new Livro("O Amor Não É Óbvio", "Elayne Baeta", 60.75);
let livro3 = new Livro("Hamlet", "Shakspere", 140.99);
let livro4 = new Livro("Bíblia", "DEUS", 2.99);

let lista_livros : Livro[] = [livro1, livro2, livro3, livro4];
let biblio = new Biblioteca(lista_livros);
biblio.listarLivros();

*/