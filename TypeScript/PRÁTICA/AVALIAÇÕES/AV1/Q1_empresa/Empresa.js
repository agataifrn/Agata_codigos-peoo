"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
var Empresa = /** @class */ (function () {
    function Empresa(nome, funcionarios) {
        var _this = this;
        this.funcionarios = [];
        this._nome = nome;
        if (funcionarios) {
            funcionarios.forEach(function (funcionario) {
                _this.funcionarios.push(funcionario);
            });
        }
    }
    Object.defineProperty(Empresa.prototype, "nome", {
        get: function () { return this._nome; },
        set: function (nome) { this._nome = nome; },
        enumerable: false,
        configurable: true
    });
    Empresa.prototype.adicionarFuncionario = function (funcionario) {
        this.funcionarios.push(funcionario); // Adiciona o livro ao array
        console.log("Funcion\u00E1rio(a) adicionado(a).");
    };
    Empresa.prototype.listarFuncionarios = function () {
        console.log("LISTAGEM DE FUNCION\u00C1RIO(S) DA EMPRESA ".concat(this.nome));
        if (this.funcionarios.length === 0)
            console.log('Nenhum funcionário na empresa.');
        else
            this.funcionarios.forEach(function (funcionario) {
                console.log("- ".concat(funcionario.descricao()));
            });
    };
    Empresa.prototype.adicionarFuncionarios = function (lista_funcionarios) {
        var _this = this;
        lista_funcionarios.forEach(function (funcionario) {
            _this.funcionarios.push(funcionario);
        });
        console.log("Funcionários adicionados.");
    };
    return Empresa;
}());
exports.Empresa = Empresa;
/*
Crie uma classe Empresa com os seguintes atributos: nome (string)
e funcionarios (array de objetos da classe Funcionario). X

A classe Empresa deve ter um método adicionarFuncionario(funcionario: Funcionario)
para adicionar novos funcionários ao array  X

e um método listarFuncionarios() que exiba
a listagem de todos os funcionários (método descricao() da classe Funcionario). X

*/ 
