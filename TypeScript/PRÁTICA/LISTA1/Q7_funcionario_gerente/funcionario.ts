export class Funcionario {
    protected _nome : string;
    protected _salario : number;

    constructor(nome: string, salario: number) {
        this._nome = nome;
        this._salario = salario;
    }

    get nome() : string { return this._nome; }
    set nome(nome: string) { this._nome = nome; }

    get salario() : number { return this._salario; }
    set salario(novo_salario: number)  {
        if (novo_salario > 0) {
            this._salario = novo_salario;
            console.log(`Seu salário foi atualizado para R$${novo_salario.toFixed(2)}`)
        }
        else {
            console.log(`O salário deve ser positivo!`)
        }
    }

    descricao() : string {
        return `Funcionário: ${this._nome} # Salário: R$${this._salario}`
    }

} 


/* Crie uma classe Funcionario com propriedades nome (string) e salario (number). */