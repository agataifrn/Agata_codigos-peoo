let livro1 = new Livro("Harry Potter", "JK Rowlling", 70.90);
let livro2 = new Livro("O Amor Não É Óbvio", "Elayne Baeta", 60.75);
let livro3 = new Livro("Hamlet", "Shakspere", 140.99);
let livro4 = new Livro("Bíblia", "DEUS", 2.99);

let lista_livros : Livro[] = [livro1, livro2, livro3, livro4];
let biblio = new Biblioteca(lista_livros);
biblio.listarLivros();
biblio.adicionarLivro("A", "B", 1)