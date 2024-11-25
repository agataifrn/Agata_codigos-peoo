import { Funcionario } from "./funcionario";
export class Gerente extends Funcionario {
    private bonus : number

    constructor(nome: string, salario: number, bonus: number) {
        super(nome, salario);
        this.bonus = bonus;
    }

    calcularSalarioTotal() : number {
        return this._salario + this.bonus;
    }

    descricao() : string {
        return `Gerente: ${this.nome} # Salário: R$${this._salario.toFixed(2)} # Bônus: ${this.bonus.toFixed(2)} # Salário Total: R$${this.calcularSalarioTotal().toFixed(2)}`;
    } 

}

/* Crie uma classe Gerente que herda de Funcionario e possui uma propriedade adicional bonus (number). 
Adicione um método na classe Gerente chamado calcularSalarioTotal() que retorna a soma do salário com o bônus.  */