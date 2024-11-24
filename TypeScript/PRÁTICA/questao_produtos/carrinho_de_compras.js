"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarrinhoDeCompras = void 0;
var CarrinhoDeCompras = /** @class */ (function () {
    function CarrinhoDeCompras(produtos) {
        var _this = this;
        this.produtos = [];
        if (produtos) {
            produtos.forEach(function (produto) {
                _this.produtos.push(produto);
            });
        }
    }
    CarrinhoDeCompras.prototype.adicionarProduto = function (produto) {
        this.produtos.push(produto);
        console.log("".concat(produto.nome, " adicionado ao carrinho com sucesso!"));
    };
    CarrinhoDeCompras.prototype.adicionarProdutos = function (produtos) {
        var _this = this;
        produtos.forEach(function (produto) {
            _this.produtos.push(produto);
            console.log("".concat(produto.nome, " adicionado."));
        });
        console.log("Produtos adicionados no carrinho com sucesso!");
    };
    CarrinhoDeCompras.prototype.calcularTotal = function () {
        var total = 0;
        this.produtos.forEach(function (produto) {
            total += produto.preco;
        });
        return total;
    };
    CarrinhoDeCompras.prototype.exibirTotal = function () {
        var total = this.calcularTotal();
        console.log("O total do carrinho \u00E9: R$".concat(total.toFixed(2)));
    };
    return CarrinhoDeCompras;
}());
exports.CarrinhoDeCompras = CarrinhoDeCompras;
/* Crie uma classe CarrinhoDeCompras que tenha um array de produtos
e métodos para adicionar um produto (adicionarProduto(produto: Produto))
e calcular o total (calcularTotal()).  */ 
