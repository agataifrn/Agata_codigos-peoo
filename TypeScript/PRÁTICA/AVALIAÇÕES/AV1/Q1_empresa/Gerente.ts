import { Funcionario } from "./Funcionario";

export class Gerente extends Funcionario {
    private _bonus : number

    constructor(nome: string, cargo: string, salario: number, bonus: number) {
        super(nome, cargo, salario);
        this._bonus = bonus;
    }

    get bonus() : number { return this._bonus; }

    aplicarAumento_bonus(bonus: number) {
        if (bonus > 0) {
            this._bonus = bonus
        }
        else {
            console.log("O bônus deve ser positivo!")
        }
    }

    calcularSalarioTotal() : number {
        return this._salario + this.bonus;
    }

    descricao() : string {
        return `- Gerente: ${this.nome} # Cargo: ${this.cargo} # Bônus: ${this.bonus.toFixed(2)} # Salário Total: R$${this.calcularSalarioTotal().toFixed(2)}`;
    } 

}

/* 
Em seguida, crie uma subclasse de Funcionario chamada Gerente, que possui uma
propriedade adicional bonus (number, também privado) X

e seus respectivos getter e setter. X

O bônus não pode ser negativo. X

Sobrescreva o método descricao() para também exibir o valor do bônus 
e o salário total (salário + bônus). X
*/
