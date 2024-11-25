import { Produto } from "./produto";
import { CarrinhoDeCompras } from "./carrinho_de_compras";

let produto1 = new Produto("Salamitos", 3.85)
let produto2 = new Produto("Azeite", 31.99)
let produto3 = new Produto("Ração de Gato", 10)
let produto4 = new Produto("Pão", 2.50)

let lista_produtos : Produto[] = [produto1, produto2, produto3]
let carrinho = new CarrinhoDeCompras();
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