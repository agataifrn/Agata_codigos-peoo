"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, cargo, salario) {
        this._nome = nome;
        this._cargo = cargo;
        this._salario = salario;
    }
    Object.defineProperty(Funcionario.prototype, "nome", {
        get: function () { return this._nome; },
        set: function (nome) { this._nome = nome; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "cargo", {
        get: function () { return this._cargo; },
        set: function (cargo) { this._cargo = cargo; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "salario", {
        get: function () { return this._salario; },
        enumerable: false,
        configurable: true
    });
    Funcionario.prototype.aplicarAumento = function (percentual) {
        if (percentual > 0) {
            this._salario = this.salario * (percentual / 100 + 1);
        }
        else {
            console.log("O percentual deve ser positivo!");
        }
    };
    Funcionario.prototype.descricao = function () {
        return "- Funcionario: ".concat(this.nome, " # Cargo: ").concat(this.cargo, " # Sal\u00E1rio: R$").concat(this.salario.toFixed(2));
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
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
