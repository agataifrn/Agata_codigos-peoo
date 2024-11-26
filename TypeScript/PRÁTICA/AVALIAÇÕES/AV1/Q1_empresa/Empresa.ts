import { Funcionario } from "./Funcionario";
import { Gerente } from "./Gerente";

export class Empresa {
    private _nome : string;
    private funcionarios : Funcionario[] = [];

    constructor(nome: string, funcionarios?: Funcionario[]) {
        this._nome = nome;
        if (funcionarios) {
            funcionarios.forEach(funcionario => {
                this.funcionarios.push(funcionario);
            });
        }
    }

    get nome() : string { return this._nome; }
    set nome(nome: string) { this._nome = nome; }

    adicionarFuncionario(funcionario: Funcionario) : void  {
        this.funcionarios.push(funcionario); // Adiciona o livro ao array
        console.log(`Funcionário(a) adicionado(a).`);
    }

    listarFuncionarios() : void {
        console.log(`LISTAGEM DE FUNCIONÁRIO(S) DA EMPRESA ${this.nome}`)
        if (this.funcionarios.length === 0) 
            console.log('Nenhum funcionário na empresa.');
        else 
            this.funcionarios.forEach(funcionario => {
                console.log(`- ${funcionario.descricao()}`)
            });
    }
    
    adicionarFuncionarios(lista_funcionarios: Funcionario[]) : void  {
        lista_funcionarios.forEach(funcionario => {
            this.funcionarios.push(funcionario);
        });
        console.log("Funcionários adicionados.")
    }

}

/* 
Crie uma classe Empresa com os seguintes atributos: nome (string) 
e funcionarios (array de objetos da classe Funcionario). X

A classe Empresa deve ter um método adicionarFuncionario(funcionario: Funcionario)
para adicionar novos funcionários ao array  X

e um método listarFuncionarios() que exiba
a listagem de todos os funcionários (método descricao() da classe Funcionario). X

*/