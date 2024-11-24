"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
var Produto = /** @class */ (function () {
    function Produto(nome, preco) {
        this._nome = nome;
        this._preco = preco;
    }
    Object.defineProperty(Produto.prototype, "preco", {
        get: function () {
            return this._preco;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    return Produto;
}());
exports.Produto = Produto;
