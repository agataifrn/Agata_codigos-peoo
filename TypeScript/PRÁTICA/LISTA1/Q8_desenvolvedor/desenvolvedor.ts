import { Funcionario } from "./funcionario";
export class Desenvolvedor extends Funcionario {
    private _nivel : string;

    constructor(nome: string, salario: number, nivel: string) {
        super(nome, salario);
        this._nivel = nivel;
    }

    get nivel() : string { return this._nivel; }

    set nivel(nivel : string) {
        if (nivel === "Junior" || nivel === "Pleno" || nivel === "Senior") {
            this._nivel = nivel
        }
        else {
            console.log("Nível inválido");
        }
    }

    promover() : void {
        if (this.nivel === "Junior") {
            this._salario *= 1.1
        }
        else if (this.nivel === "Pleno") { 
            this._salario *= 1.3
        }
        else if (this.nivel === "Senior") {
            this._salario *= 1.7
        }
        else {
            console.log("Nível inválido para processar a promoção.");
        }

        console.log(`Desenvolvedor(a) ${this.nome} promovido(a). Novo salário: R$${this._salario.toFixed(2)}`);
    }

    descricao() : string {
        return `- ${this.nome} # Salário atual: R$${this.salario.toFixed(2)}`
    }

}


/* Crie uma subclasse Desenvolvedor com uma propriedade adicional nivel (string), 
que pode ser "Junior", "Pleno", ou "Senior". 

Adicione um método promover() que aumenta o salário do Desenvolvedor baseado em seu nível, 
aplicando uma taxa maior para níveis mais altos. Crie instâncias e teste a promoção em diferentes níveis, 
verificando o acesso ao salario através da herança. */