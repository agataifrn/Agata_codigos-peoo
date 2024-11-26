export class Funcionario {
    protected _nome : string;
    protected _cargo : string;
    protected _salario : number;

    constructor(nome: string, cargo: string, salario: number) {
        this._nome = nome;
        this._cargo = cargo;
        this._salario = salario; 
    }

    get nome() : string { return this._nome; }
    set nome(nome: string) { this._nome = nome; }

    get cargo() : string { return this._cargo; }
    set cargo(cargo: string) { this._cargo = cargo; }

    get salario() : number { return this._salario; }

    aplicarAumento(percentual: number) {
        if (percentual > 0) {
            this._salario = this.salario * (percentual/100 + 1)
        }
        else {
            console.log("O percentual deve ser positivo!")
        }
    }

    descricao() : string {
        return `- Funcionario: ${this.nome} # Cargo: ${this.cargo} # Salário: R$${this.salario.toFixed(2)}`
    }

} 

/* Crie também uma classe Funcionario com os seguintes atributos: nome (string), 
cargo (string) e salario (number). X 

Implemente os métodos getters e setters para os atributos de Funcionario, X

mas garantindo que o aumento possa ser aplicado apenas por meio de um método específico
aplicarAumento(percentual: number), ou seja, não há um setter para o atributo salário. X

O percentual de aumento precisa ser maior que zero, então tem que testar essa
condição. X 

Crie também um método descricao() que retorna uma string com o resumo
do funcionário (nome, cargo e salário). X

*/