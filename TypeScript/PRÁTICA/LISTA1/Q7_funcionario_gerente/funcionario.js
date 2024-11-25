"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario) {
        this._nome = nome;
        this._salario = salario;
    }
    Object.defineProperty(Funcionario.prototype, "nome", {
        get: function () { return this._nome; },
        set: function (nome) { this._nome = nome; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "salario", {
        get: function () { return this._salario; },
        set: function (novo_salario) {
            if (novo_salario > 0) {
                this._salario = novo_salario;
                console.log("Seu sal\u00E1rio foi atualizado para R$".concat(novo_salario.toFixed(2)));
            }
            else {
                console.log("O sal\u00E1rio deve ser positivo!");
            }
        },
        enumerable: false,
        configurable: true
    });
    Funcionario.prototype.descricao = function () {
        return "Funcion\u00E1rio: ".concat(this._nome, " # Sal\u00E1rio: R$").concat(this._salario);
    };
    return Funcionario;
}());
exports.Funcionario = Funcionario;
/* Crie uma classe Funcionario com propriedades nome (string) e salario (number). */ 
