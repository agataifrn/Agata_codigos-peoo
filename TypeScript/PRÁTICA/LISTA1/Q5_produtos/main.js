"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var produto_1 = require("./produto");
var carrinho_de_compras_1 = require("./carrinho_de_compras");
var produto1 = new produto_1.Produto("Salamitos", 3.85);
var produto2 = new produto_1.Produto("Azeite", 31.99);
var produto3 = new produto_1.Produto("Ração de Gato", 10);
var produto4 = new produto_1.Produto("Pão", 2.50);
var lista_produtos = [produto1, produto2, produto3];
var carrinho = new carrinho_de_compras_1.CarrinhoDeCompras();
carrinho.adicionarProdutos(lista_produtos);
carrinho.exibirTotal();
carrinho.adicionarProduto(produto4);
carrinho.exibirTotal();
/*
Crie uma classe Produto com propriedades nome (string) e preco (number).
Crie uma classe CarrinhoDeCompras que tenha um array de produtos
e métodos para adicionar um produto (adicionarProduto(produto: Produto))
e calcular o total (calcularTotal()).
Teste a classe criando alguns produtos, adicionando-os ao carrinho e calculando o total.
*/ 
