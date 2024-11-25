import { Produto } from "./produto";
export class CarrinhoDeCompras {
    private produtos : Produto[] = [];

    constructor(produtos?: Produto[]) {
        if (produtos) {
            produtos.forEach(produto => {
                this.produtos.push(produto);
            });
        }
    }

    adicionarProduto(produto: Produto) : void{
        this.produtos.push(produto);
        console.log(`${produto.nome} adicionado ao carrinho com sucesso!`);
    }

    adicionarProdutos(produtos: Produto[]) : void {
        produtos.forEach(produto => {
            this.produtos.push(produto);
            console.log(`${produto.nome} adicionado.`);
        });
        console.log("Produtos adicionados no carrinho com sucesso!")
    }

    calcularTotal(): number {
        let total = 0;
        this.produtos.forEach(produto => {
            total += produto.preco;
        });
        return total;
    }

    calcularTotal_2(): number { //   valor final     iteração (oq ele vai fzr)   valor inicial (0)
        return this.produtos.reduce((total, produto) => total + produto.preco, 0);
      } // outra forma de calcular usando o reduce (que junta todos os valores de uma array em um valor só)

    exibirTotal(): void {
        const total = this.calcularTotal();
        console.log(`O total do carrinho é: R$${total.toFixed(2)}`);
    }

}

/* Crie uma classe CarrinhoDeCompras que tenha um array de produtos 
e métodos para adicionar um produto (adicionarProduto(produto: Produto)) 
e calcular o total (calcularTotal()).  */