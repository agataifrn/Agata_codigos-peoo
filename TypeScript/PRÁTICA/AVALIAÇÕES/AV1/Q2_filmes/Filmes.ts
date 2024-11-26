export class Filme {
    private titulo : string;
    private diretor : string;
    private anoLancamento : number;
    private avaliacoes : number;

    constructor() {
        
    }
}

/* 
Crie uma classe Filme com as propriedades: titulo (string), diretor (string),
anoLancamento (number) e avaliacoes (array de numbers).

Crie getters e setters para os atributos titulo, diretor e anoLancamento. 

Implemente métodos para adicionar uma avaliação ao array (adicionarAvaliacao(nota: number)) 
e para calcular a média das avaliações (calcularMediaAvaliacoes()). 
Certifique-se de que a avaliação seja um valor entre 1 e 5. 
*/