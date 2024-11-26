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
exports.Desenvolvedor = void 0;
var funcionario_1 = require("./funcionario");
var Desenvolvedor = /** @class */ (function (_super) {
    __extends(Desenvolvedor, _super);
    function Desenvolvedor(nome, salario, nivel) {
        var _this = _super.call(this, nome, salario) || this;
        _this._nivel = nivel;
        return _this;
    }
    Object.defineProperty(Desenvolvedor.prototype, "nivel", {
        get: function () { return this._nivel; },
        set: function (nivel) {
            if (nivel === "Junior" || nivel === "Pleno" || nivel === "Senior") {
                this._nivel = nivel;
            }
            else {
                console.log("Nível inválido");
            }
        },
        enumerable: false,
        configurable: true
    });
    Desenvolvedor.prototype.promover = function () {
        if (this.nivel === "Junior") {
            this._salario *= 1.1;
        }
        else if (this.nivel === "Pleno") {
            this._salario *= 1.3;
        }
        else if (this.nivel === "Senior") {
            this._salario *= 1.7;
        }
        else {
            console.log("Nível inválido para processar a promoção.");
        }
        console.log("Desenvolvedor(a) ".concat(this.nome, " promovido(a). Novo sal\u00E1rio: R$").concat(this._salario.toFixed(2)));
    };
    Desenvolvedor.prototype.descricao = function () {
        return "- ".concat(this.nome, " # Sal\u00E1rio atual: R$").concat(this.salario.toFixed(2));
    };
    return Desenvolvedor;
}(funcionario_1.Funcionario));
exports.Desenvolvedor = Desenvolvedor;
/* Crie uma subclasse Desenvolvedor com uma propriedade adicional nivel (string),
que pode ser "Junior", "Pleno", ou "Senior".

Adicione um método promover() que aumenta o salário do Desenvolvedor baseado em seu nível,
aplicando uma taxa maior para níveis mais altos. Crie instâncias e teste a promoção em diferentes níveis,
verificando o acesso ao salario através da herança. */ 
