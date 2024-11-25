import { Livro } from "./livro";

export class Livro_Digital extends Livro{
    private formato : string;

    constructor(titulo: string, autor: string, preco: number, formato: string) {
        super(titulo, autor, preco);
        this.formato = formato
    }

    descricao() : string {
        return `${super.descricao()} # Formato: ${this.formato}`;
    }

}