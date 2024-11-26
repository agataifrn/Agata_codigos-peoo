export class Funcionario {
    private _nome : string;
    protected _salario : number;

    constructor(nome: string, salario: number) {
        this._nome = nome;
        this._salario = salario;
    }

    get nome() : string { return this._nome; }
    set nome(nome: string) { this._nome = nome; }

    get salario() : number { return this._salario; }
} 

/* Crie uma classe Funcionario com propriedades nome (string) e salario (number). 
Defina o salario como uma propriedade protegida (protected) para que possa ser acessada por subclasses.  */