"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = void 0;
var funcionario_1 = require("./funcionario");
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nome, salario, bonus) {
        var _this = _super.call(this, nome, salario) || this;
        _this.bonus = bonus;
        return _this;
    }
    Gerente.prototype.calcularSalarioTotal = function () {
        return this._salario + this.bonus;
    };
    Gerente.prototype.descricao = function () {
        return "Gerente: ".concat(this.nome, " # Sal\u00E1rio: R$").concat(this._salario.toFixed(2), " # B\u00F4nus: ").concat(this.bonus.toFixed(2), " # Sal\u00E1rio Total: R$").concat(this.calcularSalarioTotal().toFixed(2));
    };
    return Gerente;
}(funcionario_1.Funcionario));
exports.Gerente = Gerente;
/* Crie uma classe Gerente que herda de Funcionario e possui uma propriedade adicional bonus (number).
Adicione um método na classe Gerente chamado calcularSalarioTotal() que retorna a soma do salário com o bônus.  */ 
