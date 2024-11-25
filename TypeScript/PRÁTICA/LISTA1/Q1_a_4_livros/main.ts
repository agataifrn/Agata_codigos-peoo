import { Livro } from "./livro";
import { Biblioteca } from "./biblioteca";
import { Livro_Digital } from "./livro_digital";

let livro1 = new Livro("Harry Potter", "JK Rowlling", 70.90);
let livro2 = new Livro("O Amor Não É Óbvio", "Elayne Baeta", 60.75);
let livro3 = new Livro("Hamlet", "Shakspere", 140.99);
let livro4 = new Livro("Bíblia", "DEUS", 2.99);
let livro5 = new Livro_Digital("Diário de Anne Frank", "Fundação A.F", 80.99, "EPub")

let lista_livros : Livro[] = [livro1, livro2, livro3, livro4];
let biblio = new Biblioteca();
biblio.adicionarLivros(lista_livros);
biblio.adicionarLivro(livro5);
biblio.listarLivros();
