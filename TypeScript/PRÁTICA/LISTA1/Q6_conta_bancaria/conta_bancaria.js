"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBancaria = void 0;
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(saldo, titular) {
        this.saldo = saldo;
        this.titular = titular;
    }
    ContaBancaria.prototype.depositar = function (valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log("Valor de R$".concat(valor.toFixed(2), " depositado com sucesso!"));
        }
        else {
            console.log('O valor do depósito deve ser positivo, tente novamente!');
        }
    };
    ContaBancaria.prototype.sacar = function (valor) {
        if (valor > 0) {
            this.saldo -= valor;
            console.log("Valor de R$".concat(valor.toFixed(2), " sacado com sucesso!"));
        }
        else {
            console.log('O valor de saque deve ser positivo, tente novamente!');
        }
    };
    ContaBancaria.prototype.mostrarSaldo = function () {
        return "".concat(this.titular, ", seu saldo atual \u00E9 de: R$").concat(this.saldo.toFixed(2));
    };
    return ContaBancaria;
}());
exports.ContaBancaria = ContaBancaria;
/* Crie uma classe ContaBancaria com atributos privados saldo (number) e titular (string). X
Adicione um construtor que inicializa esses valores. X
Crie métodos depositar(valor: number) e sacar(valor: number) para atualizar o saldo. X
Crie um método mostrarSaldo() que retorna o saldo atual. X */ 
